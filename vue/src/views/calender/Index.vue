<!-- <template>
 <div>
  <v-btn height="45" class="mb-5 text-white" color="#135c65" @click="goBack">
    <v-icon
      start
      icon="mdi-arrow-left"
    ></v-icon>
    Back
  </v-btn>
  <FullCalendar  ref="fullCalendar"   @change="refreshEvents() "  :options="calendarOptions" />
 </div>

</template>

<script >
// require('@fullcalendar/core/main.min.css')
import FullCalendar from '@fullcalendar/vue3'
import TimeGridplugin from '@fullcalendar/timegrid'  
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import axios from "axios";


export default {
  components: {
    FullCalendar // make the <FullCalendar> tag available
  },
  data() {
    return {
      // refetchResourcesOnNavigate:this.update(),
      header: {
        center: "prev,next today",
        left: "title",
        right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
      },
     

      calendarOptions: {
        timeZone:'EEST',
        plugins: [ dayGridPlugin, interactionPlugin ,TimeGridplugin,TimeGridplugin],
        initialView: 'dayGridMonth',
        selectOverlap: function(event) {
    return event.rendering === 'background'
  },
        selectable:true,
        selectHelper:true,
        select: function (event){
          console.log(event.start)
          axios.post("/api/calender/create",{
            start:event.start,
            end: event.end,
           
            
          }).then(res =>{
            
           console.log(res.data.k)
       
        

          })
         
        },
        droppable: true,
        editable: true, // don't allow event dragging
        eventResize:function(event)
        {
         
          axios.post(`/api/calender/${event.event.id}/update`,{
            start:event.event.start,
            end:event.event.end
          }).then(res =>{
            console.log(res.data.k)
            console.log("sav")
          

          })
       

        },
        eventDrop:function(event)
        {
          axios.post(`/api/calender/${event.event.id}/update`,{
            start:event.event.start,
            end:event.event.end
          }).then(res =>{
            console.log(res.data.k)
          })
        }

        ,
        eventClick:function(event)
        {
          if(confirm("Are you sure you want to remove it?"))
          {
            
            axios.delete(`/api/calender/${event.event.id}/delete`,{

            }).then(res =>{
              console.log(res.data.k)
            })

          }
        },
        

        headerToolbar: {
          left: 'prev,next today',
          center : 'title',
          right: 'dayGridMonth,dayGridWeek,dayGridDay'
        },
        
        buttonIcons:false,
        selectOverlap: function(event) {
          return event.rendering === 'background';
        },
        events:[]

      }

    }
  },

 

  methods:{
    
    update(){
      axios.get("/api/calender").then(res =>{
     this.calendarOptions.events=res.data.calender
     console.log(this.calendarOptions.events)
    })
  
    },
    goBack() {
        this.$router.go(-1)
      },
    refreshEvents() {
      this.$refs.calendar.$emit('refetch-events')
    }
  },
  mounted() {
    axios.get("/api/calender").then(res =>{
     this.calendarOptions.events=res.data.calender
     console.log(this.calendarOptions.events)
    })
  
  

    console.log(this.calendarOptions)
  },

}

</script> -->
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
import { tr } from 'date-fns/locale'

export default {
  components: {
    FullCalendar,Dialog,Button // make the <FullCalendar> tag available
  },
  data() {
    return {
     visible:false,
     event_id:null, 
     creat_event:ref(false),
     updat_event:ref(false),
     event_title:"",
     start_event:"",
     end_event:"",
     loading: false,
     modal_text:"",

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
        right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
        
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
        
        eventClick:function(event)
        {
        this.event_id=event.event.id
          this.modal_text="update Event"
          this.creat_event=false
          this.updat_event=true
          this.visible=true
          this.start_event=moment(event.event.start).format('00:00:00 YYYY-MM-DD')
         this.end_event= moment(event.event.end).format('00:00:00 YYYY-MM-DD')
         console.log(this.start_event)
         
        
          
        }.bind(this),
        
        select: function (event){
         console.log(event) 
         this.modal_text="Create Event"
         this.creat_event=true
         this.updat_event=false
         this.visible=true
         console.log(event)
         this.start_event=moment(event.start).format('00:00:00 YYYY-MM-DD')
         this.end_event= moment(event.end).format('00:00:00 YYYY-MM-DD')
         
        }.bind(this),
        
      }
    }
  },
  methods: {
    goBack() {
        this.$router.go(-1)
      },
      deletevent(){
        
              axios.delete(`/api/calender/${this.event_id}/delete`,{

                }).then(res =>{
                  console.log(res.data.k)
                })
                this.update()
          setTimeout(() => {
          this.visible=false,
          this.event_title=null,
         
          this.loading = false;
          }, 700);

      },
      
      updateevent(){
        axios.post(`/api/calender/${this.event_id}/update`,{
            title:this.event_title,
            start:this.start_event,
            end:this.end_event
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
      createvent(){
        this.loading = true;
        axios.post("/api/calender/create",{
             title:this.event_title,
            start:this.start_event,
            end:this.end_event,

          }).then(res =>{
           if(res.status != 200){
            this.valid=true;
           }
           
          })
          this.update()
          setTimeout(() => {
          this.visible=false,
          this.event_title=null,
         
          this.loading = false;
          }, 700);
      },
      update(){
        axios.get("/api/calender").then(res =>{
      console.log()
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
  <div>
    <v-btn height="45" class="mb-5 text-white" color="#135c65" @click="goBack">
      <v-icon
        start
        icon="mdi-arrow-left"
      ></v-icon>
      Back
    </v-btn>
    <FullCalendar :options="opts"  @change="refreshEvents()" ref="fullCalendar"   />
    <div class="card flex justify-content-center">
      <Dialog v-model:visible="visible" id="modal" modal :header="modal_text" :style="{ width: '60vw' }">
        
         <form >
         <div >
          <input type="text" placeholder="Enter Your Event" v-model="event_title" >
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
<!-- <template>
  <div>
   <v-btn height="45" class="mb-5 text-white" color="#135C65" @click="goBack">
     <v-icon
       start
       icon="mdi-arrow-left"
     ></v-icon>
     Back
   </v-btn>
   <FullCalendar ref="calendar" @change="refreshEvents()" :options="calendarOptions" />
  </div>
 </template>
 <script >
 import FullCalendar from '@fullcalendar/vue3'
 import dayGridPlugin from '@fullcalendar/daygrid'
 import interactionPlugin from '@fullcalendar/interaction'
 import axios from "axios";
 export default {
   components: {
     FullCalendar // make the <FullCalendar> tag available
   },
   data() {
     return {
       calendarOptions: {
         timeZone:'EEST',
         plugins: [ dayGridPlugin, interactionPlugin ],
         initialView: 'dayGridMonth',
         selectable:true,
         selectHelper:true,
         select: function (event){
           axios.post("/api/calender/create",{
             'start':event.start,
             'end':event.end
           }).then(res =>{
            console.log(res.data.k)
           })
         },
         droppable: true,
         editable: true, // don't allow event dragging
         eventResize:function(event)
         {
           axios.post(`/api/calender/${event.event.id}/update`,{
             'start':event.event.start,
             'end':event.event.end
           }).then(res =>{
             console.log(res.data.k)
           })
         },
         eventDrop:function(event)
         {
           axios.post(`/api/calender/${event.event.id}/update`,{
             'start':event.event.start,
             'end':event.event.end
           }).then(res =>{
             console.log(res.data.k)
           })
         }
         ,
         eventClick:function(event)
         {
          console.log(event.event.id)
           if(confirm("Are you sure you want to remove it?"))
           {
             axios.delete(`/api/calender/${event.event.id}/delete`,{
             }).then(res =>{
               console.log(res.data.k)
             })
           }
         },
         headerToolbar: {
           left: 'prev,next, today',
           center: 'title',
           right: 'dayGridMonth,dayGridWeek,dayGridDay'
         },
         selectOverlap: function(event) {
           return event.rendering === 'background';
         },
         events:[]
       }
     }
   },
   methods:{
     goBack() {
         this.$router.go(-1)
       },
     refreshEvents() {
       this.$refs.calendar.$emit('refetch-events')
     }
   },
   mounted() {
     axios.get("/api/calender").then(res =>{
      this.calendarOptions.events=res.data.calender
     })
     console.log(this.calendarOptions)
   },
 }
 </script>
 <style scoped>
 </style>
 
 
 
 
 
 
  -->
