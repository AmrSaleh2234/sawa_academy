import{_ as f,g as u,h as k,o as c,c as V,d as h,C,D as m,i as t,w as s,f as d,t as r,j as x,K as b,X as v,E as H,ar as I,a as n,V as p,z as $,F as B}from"./main-cb98dd2c.js";const q={data(){return{search:"",headers:[],questionHeaders:[],alert_text:null,loading:!0}},methods:{getQuestionHeaders(){u.get("/api/evaluationheaders").then(e=>{this.questionHeaders=e.data.headers,this.loading=!1})},editItem(e){this.$router.push({name:"EditHeaders",params:{id:e}})},deleteItem(e){console.log(e),u.delete(`/api/evaluationheaders/${e}/delete`).then(o=>{o.data.status==200&&(this.alert_text="category has been deleted successfully ",this.questionHeaders=o.data.headers)})},create(){this.$router.push({name:"CreateHeaders"})}},computed:{header(){return this.headers=[{key:"id",title:this.$t("index")},{key:"title",title:this.$t("header_title")},{key:"type",title:this.$t("header_type")},{key:"min_age",title:this.$t("min_age")},{key:"actions",title:this.$t("actions")}]}},mounted(){this.getQuestionHeaders()}};function N(e,o,E,F,a,i){const _=k("v-data-table");return c(),V(B,null,[a.alert_text!=null?(c(),h(C,{key:0,type:"success",variant:"tonal",border:"start",elevation:"2",closable:"","close-label":e.$t("close"),text:a.alert_text,class:"mb-8"},null,8,["close-label","text"])):m("",!0),t(x,{text:"Create",color:"green",height:"45",class:"mb-5 mt-5",onClick:i.create},{default:s(()=>[d(r(e.$t("create_button")),1)]),_:1},8,["onClick"]),t($,null,{default:s(()=>[t(b,null,{default:s(()=>[d(r(e.$t("headers"))+" ",1),t(v),t(H,{modelValue:a.search,"onUpdate:modelValue":o[0]||(o[0]=l=>a.search=l),"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},null,8,["modelValue"])]),_:1}),t(_,{headers:i.header,items:a.questionHeaders,search:a.search},{top:s(()=>[a.loading?(c(),h(I,{key:0,slot:"progress",style:{color:"#135c65"},indeterminate:""})):m("",!0)]),item:s(({item:l,index:g})=>[n("tr",null,[n("td",null,r(g+1),1),n("td",null,r(l.columns.title),1),n("td",null,r(l.columns.type),1),n("td",null,r(l.columns.min_age)+" months",1),n("td",null,[t(p,{small:"",color:"primary",class:"mr-2",onClick:y=>i.editItem(l.columns.id)},{default:s(()=>[d("mdi-pencil")]),_:2},1032,["onClick"]),t(p,{small:"",color:"error",onClick:y=>i.deleteItem(l.columns.id)},{default:s(()=>[d("mdi-delete")]),_:2},1032,["onClick"])])])]),_:1},8,["headers","items","search"])]),_:1})],64)}const T=f(q,[["render",N]]);export{T as default};
