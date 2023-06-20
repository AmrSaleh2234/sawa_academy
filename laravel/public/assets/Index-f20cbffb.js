import{_ as k,A as u,a as y,o as c,c as V,e as m,g as h,b as t,w as s,k as d,t as r,l as b,a9 as x,i as C,aa as v,j as n,p,F as H}from"./index-59e8678e.js";import{V as I}from"./VAlert-ba5bd8b8.js";import{b as $,V as B}from"./VCard-67f3ee41.js";const q={data(){return{search:"",headers:[],questionHeaders:[],alert_text:null,loading:!0}},methods:{getQuestionHeaders(){u.get("/api/evaluationheaders").then(e=>{this.questionHeaders=e.data.headers,this.loading=!1})},editItem(e){this.$router.push({name:"EditHeaders",params:{id:e}})},deleteItem(e){console.log(e),u.delete(`/api/evaluationheaders/${e}/delete`).then(o=>{o.data.status==200&&(this.alert_text="category has been deleted successfully ",this.questionHeaders=o.data.headers)})},create(){this.$router.push({name:"CreateHeaders"})}},computed:{header(){return this.headers=[{key:"id",title:this.$t("index")},{key:"title",title:this.$t("header_title")},{key:"type",title:this.$t("header_type")},{key:"min_age",title:this.$t("min_age")},{key:"actions",title:this.$t("actions")}]}},mounted(){this.getQuestionHeaders()}};function N(e,o,F,S,a,i){const _=y("v-data-table");return c(),V(H,null,[a.alert_text!=null?(c(),m(I,{key:0,type:"success",variant:"tonal",border:"start",elevation:"2",closable:"","close-label":e.$t("close"),text:a.alert_text,class:"mb-8"},null,8,["close-label","text"])):h("",!0),t(b,{text:"Create",color:"green",height:"45",class:"mb-5 mt-5",onClick:i.create},{default:s(()=>[d(r(e.$t("create_button")),1)]),_:1},8,["onClick"]),t(B,null,{default:s(()=>[t($,null,{default:s(()=>[d(r(e.$t("headers"))+" ",1),t(x),t(C,{modelValue:a.search,"onUpdate:modelValue":o[0]||(o[0]=l=>a.search=l),"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},null,8,["modelValue"])]),_:1}),t(_,{headers:i.header,items:a.questionHeaders,search:a.search},{top:s(()=>[a.loading?(c(),m(v,{key:0,slot:"progress",style:{color:"#135c65"},indeterminate:""})):h("",!0)]),item:s(({item:l,index:g})=>[n("tr",null,[n("td",null,r(g+1),1),n("td",null,r(l.columns.title),1),n("td",null,r(l.columns.type),1),n("td",null,r(l.columns.min_age)+" months",1),n("td",null,[t(p,{small:"",color:"primary",class:"mr-2",onClick:f=>i.editItem(l.columns.id)},{default:s(()=>[d("mdi-pencil")]),_:2},1032,["onClick"]),t(p,{small:"",color:"error",onClick:f=>i.deleteItem(l.columns.id)},{default:s(()=>[d("mdi-delete")]),_:2},1032,["onClick"])])])]),_:1},8,["headers","items","search"])]),_:1})],64)}const E=k(q,[["render",N]]);export{E as default};
