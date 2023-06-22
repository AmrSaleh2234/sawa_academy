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
          :items="desserts"
          class="elevation-1"
        ></v-data-table>
        
        
      
</div>
</template>
<script>
import axios from 'axios'
  export default {
    data () {
      return {
        sortBy: [{ key: 'evaluation_title', order: 'asc' }],
        headers: [
          {
            title: 'id',
            align: 'start',
            sortable: false,
            key: 'id',
          },
          { title: 'evaluation_title', key: 'evaluation_title'},
          { title: 'side_profile_title', key: 'side_profile_title' },
          { title: 'child_age', key: 'child_age' },
          { title: 'diff_age', key: 'diff_age' },
          { title: 'grow_age', key: 'grow_age' },
          { title: 'late_percentage', key: 'late_percentage' },
          { title: 'result_created_at', key: 'result_created_at' },
        
        ],
        desserts: [],
      }
    },
    methods: {
        goBack() {
        this.$router.go(-1)
      },
    },
    mounted() {
        console.log(this.$route.params.child_id,this.$route.params.sideProfile_id)
        axios.post("/api/child/results/",{
          sideprofile_id:this.$route.params.sideProfile_id,child_id:this.$route.params.child_id
        }).then(res => {
          console.log(res.data.evaluation_results)
       this.desserts=res.data.evaluation_results
      })        

    },
  }
</script>