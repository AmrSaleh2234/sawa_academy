import{_,y as p,k as v,o as d,e as f,q as e,x as l,S as c,i as r,aa as V,f as k,V as x,p as C,ae as g,am as b,a8 as B,h as o,t as u,a6 as y}from"./main-4b2cf09a.js";const $={data(){return{search:"",headers:[],evaluations:[],alert_text:null,tableCounter:1}},methods:{goBack(){this.$router.go(-1)},getResults(){p.get(`/api/evaluations/${this.$route.params.child_id}/${this.$route.params.sideProfile_id}/evaluations-child`).then(a=>{this.evaluations=a.data.evaluations,console.log(this.evaluations)})},showItem(a){console.log(a),this.$router.push({name:"showChildResult",params:{child_id:this.$route.params.child_id,sideProfile_id:this.$route.params.sideProfile_id,evaluation_id:a}})}},mounted(){this.getResults()},computed:{locale(){return this.$i18n.locale},header(){return this.headers=[{title:"id"},{key:"evaluation_title",title:this.$t("evaluation_title")}]}}};function w(a,n,N,S,t,i){const h=v("v-data-table");return d(),f("div",null,[e(V,{height:"45",class:"mb-5",color:"red",onClick:i.goBack},{default:l(()=>[e(c,{start:"",icon:"mdi-arrow-left"}),r(" Back ")]),_:1},8,["onClick"]),t.alert_text!=null?(d(),k(x,{key:0,type:"success",variant:"tonal",border:"start",elevation:"2",closable:"","close-label":a.$t("close"),text:t.alert_text,class:"mb-8"},null,8,["close-label","text"])):C("",!0),e(y,null,{default:l(()=>[e(g,null,{default:l(()=>[r(" Evaluation "),e(b),e(B,{modelValue:t.search,"onUpdate:modelValue":n[0]||(n[0]=s=>t.search=s),"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},null,8,["modelValue"])]),_:1}),e(h,{headers:i.header,items:t.evaluations,search:t.search},{item:l(({item:s,index:m})=>[o("tr",null,[o("td",null,u(m+1),1),o("td",null,u(s.columns.evaluation_title),1),o("td",null,[e(c,{small:"",color:"#135C65",class:"mx-3",onClick:E=>i.showItem(s.raw.id)},{default:l(()=>[r(" mdi-eye")]),_:2},1032,["onClick"])])])]),_:1},8,["headers","items","search"])]),_:1})])}const P=_($,[["render",w]]);export{P as default};
