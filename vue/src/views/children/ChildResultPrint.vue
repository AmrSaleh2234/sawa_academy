<script>
import axios from 'axios'
import Chart from 'chart.js/auto';
import moment from "moment";
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';


export default {

  data() {
    return {
      search: '',
      headers: [],
      result: [],
      print_results:[],
      alert_text: null,
      ctx: null,
      created_at: [],
      latePercenteges: [],
      growAge: [],
      diffAge: [],
      date1: '',
      date2: '',
      myCahrt: '',
      selectX: null,
      selectY: null,
      visible: false,
      examDate: '',
      NameRules: [
        value => {
          if (value) return true
          return "This field is required"

        },
      ],
      examId: '',
      loading: true,


    }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    },
    getResults() {
      axios.post(`/api/evaluations/${this.$route.params.child_id}/${this.$route.params.sideProfile_id}/${this.$route.params.evaluation_id}/result`, {
        'date1': this.date1,
        'date2': this.date2
      }).then(res => {
        console.log(res.data)
        this.result = res.data.resultEvaluation
        this.loading = false
        setTimeout(() => {

          window.print()

        }, 1400)


        console.log(this.result)

      })
    },
    formateDate(date) {
      return moment(date).format('DD-MM-YYYY HH:mm')
    },


  },
  components: {
    Dialog,
    Button
  },
 
  beforeMount() {
    this.getResults()
    axios.post(`/api/evaluations/${this.$route.params.child_id}/${this.$route.params.sideProfile_id}/${this.$route.params.evaluation_id}/result`, {
        
      }).then(res => {
        
        this.print_results=res.data.resultEvaluation
        
        })

  },
  computed: {
    locale() {

      return this.$i18n.locale;
    },
    header() {
      return this.headers = [
        {title: 'id'},

        {key: 'therapist_name', title: this.$t('therapist_name')},
        {key: 'grow_age', title: this.$t('grow_age')},
        {key: 'diff_age', title: this.$t('diff_age')},
        {key: 'late_percentage', title: this.$t('late_percentage')},
        {key: 'basal_age', title: this.$t('basal_age')},
        {key: 'child_age', title: this.$t('child_age')},
        {key: 'result_created_at', title: this.$t('created_at')},

      ];
    },

  },
  computedResult() {
    return this.result
  }


}
</script>

<template>
  <v-alert
      type="success"
      variant="tonal"
      border="start"
      elevation="2"
      closable
      :close-label="$t('close')"
      :text="alert_text"
      v-if="alert_text!= null "
      class="mb-8"
  >

  </v-alert>

  
  <div class="back-back">
    <div  class="back">
      <div class="text-center"><img src="../../assets/img/sawa_logo.svg" style="width:130px; "></div>
      <div> <p class="w-[100%] text-h4 text-center ma-4" v-for="item in print_results">{{item.evaluation_title }}</p></div>
     <div>
      <p class="w-[100%] text-right ma-4" v-for="item in print_results">{{item.child_name}}</p>
      <p class="w-[100%] text-right ma-4" v-for="item in print_results">{{item.child_age}}</p>
     
      
     </div>
      <v-card>
        <v-data-table
            class="hidden-table"
            :headers="header"
            :items="result"
            :search="search"
        >


          <template #item="{ item ,index}">
            <tr>
              <td>{{ index + 1 }}</td>
              <td>{{ item.columns.therapist_name }}</td>
              <td>{{ item.columns.grow_age }}</td>
              <td>{{ item.columns.diff_age }}</td>
              <td>{{ Math.round(item.columns.late_percentage) }} %</td>
              <td>{{ item.columns.basal_age }} months</td>
              <td>{{ item.columns.child_age }} months</td>
              <td>{{ formateDate(item.columns.result_created_at) }}</td>


            </tr>

          </template>
          <template #bottom>

          </template>

        </v-data-table>
      </v-card>


    </div>
  </div>




</template>
<style scoped>
.back-back {
  background: #999;
  cursor: default;
}

.back {
  box-sizing: border-box;
  height: 11in;
  margin: 0 auto;
  overflow: hidden;
  padding: 0.5in;
  width: 8.5in;
}

.back {
  background: #FFF;
  border-radius: 1px;
  box-shadow: 0 0 1in -0.25in rgba(0, 0, 0, 0.5);
}

.hidden-table {
  width: 100%;
  font-size: 12px;
}

.hidden-table {
  border-collapse: separate;
  border-spacing: 2px;
}

th, td {
  border-width: 1px;
  padding: 0.5em;
  position: relative;
  text-align: right;
  border-style: solid;
}

th, td {
  border-radius: 0.25em;
  border-style: solid;
}

th {
border:1px solid;
}

td {
  border-color: #DDD;
}


</style>