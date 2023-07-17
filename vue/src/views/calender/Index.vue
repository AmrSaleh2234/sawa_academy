
<script>
import FullCalendar from '@fullcalendar/vue3'
import TimeGridplugin from '@fullcalendar/timegrid'  
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import listPlugin from '@fullcalendar/list';
import axios from "axios";
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';
import { ref } from "vue";
import moment from 'moment';
import Calendar from 'primevue/calendar';
import InputText from 'primevue/inputtext';
import { tr } from 'date-fns/locale'

export default {
  components: {
    FullCalendar,Dialog,Button,Calendar,InputText // make the <FullCalendar> tag available
  },
  data() {
    return {
     visible:false,
     create_visible:false,
     event_id:null, 
     creat_event:ref(false),
     updat_event:ref(false),
     event_title:"",
     start_event:"",
     end_event:"",
     loading: false,
     modal_text:"",
     time_start:"",
     time_end:"",
     

      opts: {
        plugins: [ dayGridPlugin, interactionPlugin,TimeGridplugin,listPlugin],
        initialView: 'dayGridMonth',
        footerToolbar:true,
        valid:false,
        buttonIcons:false,
        selectable:true,
        droppable: false,
        editable: true,
        selectHelper:true,
        headerToolbar:{ 
        center: "prev next today",
        left: "title",
        right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
       
        
        },
        eventsTimeFormat: {

hour: '2-digit',
minute: '2-digit',
second: '2-digit',
        },
        eventDrop:function(event)
        
        {
          console.log(event.event.id)
          axios.post(`/api/calender/${event.event.id}/update`,{
            start:event.event.start,
            end:event.event.end
          }).then(res =>{
            console.log(res.data.k)
          })
        },
        eventDrop:function(event)
        {
          axios.post(`/api/calender/${event.event.id}/update`,{
            title:event.event.title,
            start:moment(event.event.start).format('00:00:00 YYYY-MM-DD'),
            end: moment(event.event.end).format('00:00:00 YYYY-MM-DD')
          }).then(res =>{
            console.log(res.data.k)
          })
        },
        slotDuration: '00:15:00', /* If we want to split day time each 15minutes */
        minTime: '00:00:00', /* calendar start Timing */
        maxTime: '24:00:00',  /* calendar end Timing */
        eventClick:function(event)
        {
          this.event_id=event.event.id
          this.event_title=event.event.title
          this.modal_text="update Event"
          this.creat_event=false
          this.updat_event=true
          this.visible=true
          this.start_event=moment(event.event.start).format(' YYYY-MM-DD HH:mm:ss')
         this.end_event= moment(event.event.end).format(' YYYY-MM-DD HH:mm:ss')
         console.log(this.start_event)
         
        
          
        }.bind(this),
      
        
        select: function (event){
         console.log(event) 
         this.event_title=""
         this.modal_text="Create Event"
         this.creat_event=true
         this.updat_event=false
         this.visible=true
        console.log(event.start)
         this.start_event=moment(event.start).format(' YYYY-MM-DD')
         this.end_event= moment(event.end).format(' YYYY-MM-DD')
       
        }.bind(this),
        
      }
    }
  },
  methods: {
    goBack() {
        this.$router.go(-1)
      },
      deletevent(event){
        console.log(event)
        
              axios.delete(`/api/calender/${this.event_id}/delete`,{

                }).then(res =>{
                
                })
                this.update()
          setTimeout(() => {
          this.visible=false,
          this.event_title=null,
         
          this.loading = false;
          }, 700);

      },
      reset(){

        this.end_event=""
        this.start_event=""
        this.event_title=""
      },
      
      updateevent(){
        
        axios.post(`/api/calender/${this.event_id}/update`,{
            title:this.event_title,    
            start:moment(this.start_event).format(' yyyy-MM-DD '),
            end:moment(this.end_event ).format(' yyyy-MM-DD '),
          
          }).then(res =>{
           
          })
          this.update()
          setTimeout(() => {
          this.visible=false,
          this.event_title=null,
         this.event_id=null,
          this.loading = false;
          }, 700);
      },
      async createvent(){
        this.loading = true;
        moment(this.time_start).format('dd-mm-yy'),
        console.log(this.time_start)
        axios.post("/api/calender/create",{
             title:this.event_title,
            start:(moment(this.start_event).format('yyyy-MM-DD '))+" "+(this.time_start),
            end:(moment(this.end_event).format('yyyy-MM-DD '))+" "+(this.time_end),
          }).then(res =>{
           if(res.status != 200){
            this.valid=true;
           }
           
          })
         await this.update()
          setTimeout(() => {
          this.visible=false,
          this.event_title=null,
          this.start_event=null,
          this.end_event=null,
          this.create_visible=false,
          this.loading = false;
          }, 700);
      },
      update(){
        axios.get("/api/calender").then(res =>{
      console.log(res)
     this.opts.events=res.data.calender
    
    })
      },
      refreshEvents() {
        
      this.$refs.calendar.$emit('refetch-events')
    }

  },
  mounted() {
   
  this.update()
  

    console.log(this.opts)
  },
}
</script>
<template>
  <div >
   <div class="mb-5 text-white">
    <v-btn height="45" class="mx-5 text-white" color="#135c65" @click="goBack">
      <v-icon
        start
        icon="mdi-arrow-left"
      ></v-icon>
      Back
    </v-btn>
    <v-btn height="45" class="mx-5 text-white" color="rgb(4, 171, 4)" @click="reset(),create_visible=true">
      <v-icon
        start
        icon="mdi-plus-circle"
        size="x-large"
      ></v-icon>
     Create Event
    </v-btn>
   
   </div>
    <FullCalendar :options="opts"  @change="refreshEvents()" ref="fullCalendar"   />
    <div class="card flex justify-content-center">
      <Dialog v-model:visible="create_visible" id="modal" modal header="Create Event" :style="{ width: '60vw' }">
         <form >
         <div  >
          <div>
            <Calendar showIcon placeholder="dd-mm-yy" date-format=" yy-mm-dd"  v-model="start_event" style="width: 100%;color-scheme:black;"  />
          <InputText type="time" v-model="time_start" />
          </div>

          <Calendar showIcon placeholder="dd-mm-yy" date-format=" yy-mm-dd" v-model="end_event" style="width: 100%;margin-top: 10px;" />
          
          <InputText type="time" v-model="time_end" placeholder="Search" />
          <v-text-field
          v-model="event_title"
            :rules="nameRules"
            label="Enter Your Event Title "
            required
            class="mt-5"
          ></v-text-field>
          <Button style="background-color: rgb(4, 171, 4);" label="Create "  :loading="loading" @click="createvent" />
        </div>
         </form>
      </Dialog>
      <Dialog v-model:visible="visible" id="modal" modal :header="modal_text" :style="{ width: '60vw' }">
        
         <form >
         <div >
        
          <v-text-field
          v-model="event_title"
            :rules="nameRules"
            label="Enter Your Event Title "
            required
          ></v-text-field>
          <input type="time" v-model="time_start">
          <input type="time" v-model="time_end">
          <Button style="background-color: rgb(4, 171, 4);" label="Create " v-if="creat_event" :loading="loading" @click="createvent" />
          <Button style="background-color:#6241F1; margin-left: 10px; margin-right: 10px;" label="update " v-if="updat_event" :loading="loading" @click="updateevent" />
          <Button style="background-color:#B00020; border: no;" label="Delet " v-if="updat_event" :loading="loading" @click="deletevent" />
         </div>
         </form>

      </Dialog>
  </div>
  </div>
</template>
<style scoped>
input{
  width: 100%;
  font-size: 20px;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 8px;
  border: 2px solid rgb(130, 130, 168);
}
p{
  color: red;
  width: 100%;
  font-size: 20px;
  text-align: center;
  margin-top: 5px;
  margin-bottom: 5px;
}

</style>
