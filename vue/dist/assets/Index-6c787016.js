import{_ as v,O as m,g as _,o as h,c as f,d as x,Y as C,p as V,h as t,w as s,f as n,t as r,i as k,a3 as g,ac as b,Z as y,a as c,V as u,P as I,F as E}from"./main-38a97668.js";const w={data(){return{search:"",headers:[{key:"id",title:"id"},{key:"title",title:"Title"}],evaluations:[],alert_text:null}},methods:{getEvaluations(){m.get("/api/evaluations").then(e=>{this.evaluations=e.data.evaluations,console.log(e.data.evaluations)})},editItem(e){this.$router.push({name:"EditEvaluations",params:{id:e}})},deleteItem(e){console.log(e),m.delete(`/api/evaluations/${e}/delete`).then(o=>{o.data.status==200&&(this.alert_text="evaluation deleted successfully ",this.evaluations=o.data.evaluations)})},create(){this.$router.push({name:"CreateEvaluations"})},showItem(e){this.$router.push({name:"ShowEvaluations",params:{id:e}})}},mounted(){this.getEvaluations()}};function B(e,o,N,S,a,i){const p=_("v-data-table");return h(),f(E,null,[a.alert_text!=null?(h(),x(C,{key:0,type:"success",variant:"tonal",border:"start",elevation:"2",closable:"","close-label":e.$t("close"),text:a.alert_text,class:"mb-8"},null,8,["close-label","text"])):V("",!0),t(k,{text:"Create",color:"green",height:"45",class:"mb-5 mt-5",onClick:i.create},{default:s(()=>[n(r(e.$t("create_button")),1)]),_:1},8,["onClick"]),t(I,null,{default:s(()=>[t(g,null,{default:s(()=>[n(r(e.$t("evaluation"))+" ",1),t(b),t(y,{modelValue:a.search,"onUpdate:modelValue":o[0]||(o[0]=l=>a.search=l),"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},null,8,["modelValue"])]),_:1}),t(p,{headers:a.headers,items:a.evaluations,search:a.search},{item:s(({item:l})=>[c("tr",null,[c("td",null,r(l.columns.id),1),c("td",null,r(l.columns.title),1),c("td",null,[t(u,{small:"",color:"primary",class:"mx-3",onClick:d=>i.showItem(l.columns.id)},{default:s(()=>[n("mdi-plus-box")]),_:2},1032,["onClick"]),t(u,{small:"",color:"primary",class:"mx-3",onClick:d=>i.editItem(l.columns.id)},{default:s(()=>[n("mdi-pencil")]),_:2},1032,["onClick"]),t(u,{small:"",color:"error mx-3",onClick:d=>i.deleteItem(l.columns.id)},{default:s(()=>[n("mdi-delete")]),_:2},1032,["onClick"])])])]),_:1},8,["headers","items","search"])]),_:1})],64)}const F=v(w,[["render",B]]);export{F as default};
