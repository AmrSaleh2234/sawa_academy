<template>
<div>
    <v-btn height="45" class="mb-5 text-white" color="#A9AB7F" @click="goBack">
        <v-icon
          start
          icon="mdi-arrow-left"
        ></v-icon>
          {{$t('back')}}
      </v-btn>
  
        <v-data-table
          v-model:sort-by="sortBy"
          :headers="headers"
          
          class="elevation-1"
        ></v-data-table>
        
        
      
</div>
</template>
<script>
import axios from 'axios'
  export default {
    data () {
      return {
        sortBy: [{ key: 'calories', order: 'asc' }],
        headers: [
          {
            title: 'id',
            align: 'start',
            sortable: false,
            key: 'id',
          },
          { title: 'evaluation', key: 'evaluation' },
          { title: 'therapist Name', key: 'therapist Name' },
          { title: 'grow Age', key: 'grow Age'},
          { title: 'Different between grow age and child', key: 'Different between grow age and child' },
          { title: 'Late percentage', key: 'Late percentage' },
          { title: 'Basal Age', key: 'Basal Age' },
        ],
        desserts: [
          {
            id: '5',
            calories: 200,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%',
          },
        ],
      }
    },
    methods: {
        goBack() {
        this.$router.go(-1)
      },
    },
    mounted() {
    //     console.log(this.$route.params.child_id,this.$route.params.sideProfile_id)
    //     axios.post("/api/child/results/1/10").then(res => {
      
    //         console.log(res)
    //   })        

    },
  }
</script>