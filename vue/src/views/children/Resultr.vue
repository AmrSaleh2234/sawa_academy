<template>
<div>
  
        <v-data-table
          v-model:sort-by="sortBy"
          :headers="headers"
          :items="desserts"
          class="elevation-1"
        ></v-data-table>
        
      
</div>
</template>
<script>
  export default {
    data () {
      return {
        sortBy: [{ key: 'calories', order: 'asc' }],
        headers: [
          {
            title: 'Dessert (100g serving)',
            align: 'start',
            sortable: false,
            key: 'id',
          },
          { title: 'Calories', key: 'calories' },
          { title: 'Fat (g)', key: 'fat' },
          { title: 'Carbs (g)', key: 'carbs' },
          { title: 'Protein (g)', key: 'protein' },
          { title: 'Iron (%)', key: 'iron' },
        ],
        desserts: [
          {
            id: '',
            calories: 200,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%',
          },
        ],
      }
    },
  }
</script>