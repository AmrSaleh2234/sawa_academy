import{_,$ as p,f as v,o as d,c as f,g as e,w as l,V as c,e as r,h as V,a as g,a7 as C,n as k,ad as x,am as b,a8 as B,d as o,t as u,a0 as $}from"./main-31a3df1d.js";const w={data(){return{search:"",headers:[],evaluations:[],alert_text:null,tableCounter:1}},methods:{goBack(){this.$router.go(-1)},getResults(){p.get(`/api/evaluations/${this.$route.params.child_id}/${this.$route.params.sideProfile_id}/evaluations-child`).then(a=>{this.evaluations=a.data.evaluations,console.log(this.evaluations)})},showItem(a){console.log(a),this.$router.push({name:"showChildResult",params:{child_id:this.$route.params.child_id,sideProfile_id:this.$route.params.sideProfile_id,evaluation_id:a}})}},mounted(){this.getResults()},computed:{locale(){return this.$i18n.locale},header(){return this.headers=[{title:"id"},{key:"evaluation_title",title:this.$t("evaluation_title")}]}}};function y(a,n,N,E,t,i){const h=v("v-data-table");return d(),f("div",null,[e(V,{height:"45",class:"mb-5",color:"red",onClick:i.goBack},{default:l(()=>[e(c,{start:"",icon:"mdi-arrow-left"}),r(" Back ")]),_:1},8,["onClick"]),t.alert_text!=null?(d(),g(C,{key:0,type:"success",variant:"tonal",border:"start",elevation:"2",closable:"","close-label":a.$t("close"),text:t.alert_text,class:"mb-8"},null,8,["close-label","text"])):k("",!0),e($,null,{default:l(()=>[e(x,null,{default:l(()=>[r(" Evaluation "),e(b),e(B,{modelValue:t.search,"onUpdate:modelValue":n[0]||(n[0]=s=>t.search=s),"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},null,8,["modelValue"])]),_:1}),e(h,{headers:i.header,items:t.evaluations,search:t.search},{item:l(({item:s,index:m})=>[o("tr",null,[o("td",null,u(m+1),1),o("td",null,u(s.columns.evaluation_title),1),o("td",null,[e(c,{small:"",color:"#135C65",class:"mx-3",onClick:I=>i.showItem(s.raw.id)},{default:l(()=>[r(" mdi-eye")]),_:2},1032,["onClick"])])])]),_:1},8,["headers","items","search"])]),_:1})])}const R=_(w,[["render",y]]);export{R as default};