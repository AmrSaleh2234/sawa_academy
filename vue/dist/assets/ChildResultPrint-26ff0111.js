import{_ as d,A as _,a as h,o as i,c as m,e as g,g as p,j as e,b as n,w as r,F as f,t as a}from"./main-2bb46306.js";import{s as b,a as k}from"./button.esm-eb1ba33a.js";import{h as $}from"./moment-fbc5633a.js";import{V as v}from"./VAlert-288016c2.js";import{V as x}from"./VCard-b69ab545.js";const y={data(){return{search:"",headers:[],result:[],alert_text:null,ctx:null,created_at:[],latePercenteges:[],growAge:[],diffAge:[],date1:"",date2:"",myCahrt:"",selectX:null,selectY:null,visible:!1,examDate:"",NameRules:[t=>t?!0:"This field is required"],examId:"",loading:!0}},methods:{goBack(){this.$router.go(-1)},getResults(){_.post(`/api/evaluations/${this.$route.params.child_id}/${this.$route.params.sideProfile_id}/${this.$route.params.evaluation_id}/result`,{date1:this.date1,date2:this.date2}).then(t=>{console.log(t.data),this.result=t.data.resultEvaluation,this.loading=!1,setTimeout(()=>{window.print(),this.$router.go(-1)},1500),console.log(this.result)})},formateDate(t){return $(t).format("DD-MM-YYYY HH:mm")}},components:{Dialog:b,Button:k},beforeMount(){this.getResults()},computed:{locale(){return this.$i18n.locale},header(){return this.headers=[{title:"id"},{key:"therapist_name",title:this.$t("therapist_name")},{key:"grow_age",title:this.$t("grow_age")},{key:"diff_age",title:this.$t("diff_age")},{key:"late_percentage",title:this.$t("late_percentage")},{key:"basal_age",title:this.$t("basal_age")},{key:"child_age",title:this.$t("child_age")},{key:"result_created_at",title:this.$t("created_at")}]}},computedResult(){return this.result}},w={class:"back-back"},C={class:"back"};function D(t,V,B,R,l,o){const c=h("v-data-table");return i(),m(f,null,[l.alert_text!=null?(i(),g(v,{key:0,type:"success",variant:"tonal",border:"start",elevation:"2",closable:"","close-label":t.$t("close"),text:l.alert_text,class:"mb-8"},null,8,["close-label","text"])):p("",!0),e("div",w,[e("div",C,[n(x,null,{default:r(()=>[n(c,{class:"hidden-table",headers:o.header,items:l.result,search:l.search},{item:r(({item:s,index:u})=>[e("tr",null,[e("td",null,a(u+1),1),e("td",null,a(s.columns.therapist_name),1),e("td",null,a(s.columns.grow_age),1),e("td",null,a(s.columns.diff_age),1),e("td",null,a(Math.round(s.columns.late_percentage))+" %",1),e("td",null,a(s.columns.basal_age)+" months",1),e("td",null,a(s.columns.child_age)+" months",1),e("td",null,a(o.formateDate(s.columns.result_created_at)),1)])]),bottom:r(()=>[]),_:1},8,["headers","items","search"])]),_:1})])])],64)}const E=d(y,[["render",D],["__scopeId","data-v-82c02a2f"]]);export{E as default};
