import{_ as b,$ as h,f as y,o as u,c as v,a as x,a7 as w,n as k,d as t,t as a,g as _,w as i,a0 as $,F as C,ag as P,ah as A,a6 as D}from"./main-31a3df1d.js";import{C as Y}from"./auto-1f697c56.js";import{h as g}from"./moment-fbc5633a.js";import{s as B}from"./dialog.esm-f0a28891.js";import{s as I}from"./button.esm-7b76ec96.js";import"./basecomponent.esm-ce912fc4.js";import"./focustrap.esm-f889af30.js";import"./index.esm-4a8a1ac5.js";import"./ripple.esm-4a13e7f7.js";import"./portal.esm-fc5570a5.js";const M={data(){return{search:"",headers:[],result:[],print_results:[],alert_text:null,ctx:null,created_at:[],latePercenteges:[],growAge:[],diffAge:[],date1:"",date2:"",myCahrt:"",selectX:null,selectY:null,visible:!1,examDate:"",NameRules:[e=>e?!0:"This field is required"],examId:"",loading:!0}},methods:{goBack(){this.$router.go(-1)},async print(){await h.post(`/api/evaluations/${this.$route.params.child_id}/${this.$route.params.sideProfile_id}/${this.$route.params.evaluation_id}/result`,{}).then(e=>{console.log(e),this.print_results=e.data.resultEvaluation}),setTimeout(()=>{window.print()},500)},getResults(){h.post(`/api/evaluations/${this.$route.params.child_id}/${this.$route.params.sideProfile_id}/${this.$route.params.evaluation_id}/result`,{date1:this.date1,date2:this.date2}).then(e=>{this.result=e.data.resultEvaluation,this.loading=!1,this.created_at=[],this.latePercenteges=[],this.growAge=[],this.diffAge=[],this.result.forEach(l=>{this.created_at.push(g(l.result_created_at).format("MM-DD-YYYY")),this.latePercenteges.push(l.late_percentage),this.growAge.push(l.grow_age),this.diffAge.push(l.diff_age)}),console.log(this.latePercenteges),this.ctx=document.getElementById("myChart").getContext("2d"),this.myCahrt=new Y(this.ctx,{type:"bar",data:{datasets:[{label:"late percentages ",data:this.latePercenteges,borderWidth:1,backgroundColor:"#A9AB7F",barPercentage:.5,categoryPercentage:.2},{label:"Different ages ",data:this.diffAge,borderWidth:1,backgroundColor:"#4c9499",barPercentage:.5,categoryPercentage:.2},{label:"grow Age  ",data:this.growAge,borderWidth:1,backgroundColor:"#135C65",barPercentage:.5,categoryPercentage:.2}]},options:{align:"start",scales:{y:{beginAtZero:!0},x:{grid:{drawOnChartArea:!1},type:"category",labels:this.created_at}},grid:{top:"6",right:"0",bottom:"17",left:"25"},animation:{duration:2e3}}}),console.log(this.latePercenteges)})},formateDate(e){return g(e).format("DD-MM-YYYY HH:mm")}},components:{Dialog:B,Button:I},beforeMount(){this.getResults(),this.print()},computed:{locale(){return this.$i18n.locale},header(){return this.headers=[{title:"id"},{key:"therapist_name",title:this.$t("therapist_name")},{key:"child_age",title:this.$t("child_age")},{key:"grow_age",title:this.$t("grow_age")},{key:"diff_age",title:this.$t("diff_age")},{key:"basal_age",title:this.$t("basal_age")},{key:"late_percentage",title:this.$t("late_percentage")},{key:"result_created_at",title:this.$t("created_at")}]}},computedResult(){return this.result}},p=e=>(P("data-v-ea681759"),e=e(),A(),e),R={class:"back-back"},E={class:"back"},V=p(()=>t("div",{class:"text-center"},[t("img",{src:D,style:{width:"130px"}})],-1)),N={class:"w-[100%] text-h4 text-center ma-4"},S={class:"w-[100%] text-right ma-4"},F={class:"w-[100%] text-right ma-4"},W=p(()=>t("canvas",{id:"myChart",style:{height:"70vh !important","margin-bottom":"30px"}},null,-1));function H(e,l,T,q,s,o){var n,c,d;const m=y("v-data-table");return u(),v(C,null,[s.alert_text!=null?(u(),x(w,{key:0,type:"success",variant:"tonal",border:"start",elevation:"2",closable:"","close-label":e.$t("close"),text:s.alert_text,class:"mb-8"},null,8,["close-label","text"])):k("",!0),t("div",R,[t("div",E,[V,t("div",null,[t("p",N,a((n=s.print_results[0])==null?void 0:n.evaluation_title),1)]),t("div",null,[t("p",S,a((c=s.print_results[0])==null?void 0:c.child_name),1),t("p",F,a((d=s.print_results[0])==null?void 0:d.birth_date),1)]),W,_($,null,{default:i(()=>[_(m,{class:"hidden-table",headers:o.header,items:s.print_results,search:s.search},{item:i(({item:r,index:f})=>[t("tr",null,[t("td",null,a(f+1),1),t("td",null,a(r.columns.therapist_name),1),t("td",null,a(r.columns.child_age)+" months",1),t("td",null,a(r.columns.grow_age),1),t("td",null,a(r.columns.diff_age),1),t("td",null,a(r.columns.basal_age)+" months",1),t("td",null,a(Math.round(r.columns.late_percentage))+" %",1),t("td",null,a(o.formateDate(r.columns.result_created_at)),1)])]),bottom:i(()=>[]),_:1},8,["headers","items","search"])]),_:1})])])],64)}const U=b(M,[["render",H],["__scopeId","data-v-ea681759"]]);export{U as default};
