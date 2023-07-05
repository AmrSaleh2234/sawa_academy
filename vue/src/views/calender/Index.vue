<template>
 <div>
  <v-btn height="45" class="mb-5 text-white" color="#135c65" @click="goBack">
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