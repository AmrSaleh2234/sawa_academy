import{_ as v,g as m,h as _,o as h,c as f,d as x,B as C,C as V,i as t,w as s,f as n,t as r,j as k,R as b,D as g,a as u,V as c,F as y}from"./main-e08b3f34.js";import{b as I,V as E}from"./VCard-bbba4d56.js";const B={data(){return{search:"",headers:[{key:"id",title:"id"},{key:"title",title:"Title"}],evaluations:[],alert_text:null}},methods:{getEvaluations(){m.get("/api/evaluations").then(e=>{this.evaluations=e.data.evaluations,console.log(e.data.evaluations)})},editItem(e){this.$router.push({name:"EditEvaluations",params:{id:e}})},deleteItem(e){console.log(e),m.delete(`/api/evaluations/${e}/delete`).then(o=>{o.data.status==200&&(this.alert_text="evaluation deleted successfully ",this.evaluations=o.data.evaluations)})},create(){this.$router.push({name:"CreateEvaluations"})},showItem(e){this.$router.push({name:"ShowEvaluations",params:{id:e}})}},mounted(){this.getEvaluations()}};function w(e,o,N,S,a,i){const p=_("v-data-table");return h(),f(y,null,[a.alert_text!=null?(h(),x(C,{key:0,type:"success",variant:"tonal",border:"start",elevation:"2",closable:"","close-label":e.$t("close"),text:a.alert_text,class:"mb-8"},null,8,["close-label","text"])):V("",!0),t(k,{text:"Create",color:"green",height:"45",class:"mb-5 mt-5",onClick:i.create},{default:s(()=>[n(r(e.$t("create_button")),1)]),_:1},8,["onClick"]),t(E,null,{default:s(()=>[t(I,null,{default:s(()=>[n(r(e.$t("evaluation"))+" ",1),t(b),t(g,{modelValue:a.search,"onUpdate:modelValue":o[0]||(o[0]=l=>a.search=l),"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},null,8,["modelValue"])]),_:1}),t(p,{headers:a.headers,items:a.evaluations,search:a.search},{item:s(({item:l})=>[u("tr",null,[u("td",null,r(l.columns.id),1),u("td",null,r(l.columns.title),1),u("td",null,[t(c,{small:"",color:"primary",class:"mx-3",onClick:d=>i.showItem(l.columns.id)},{default:s(()=>[n("mdi-plus-box")]),_:2},1032,["onClick"]),t(c,{small:"",color:"primary",class:"mx-3",onClick:d=>i.editItem(l.columns.id)},{default:s(()=>[n("mdi-pencil")]),_:2},1032,["onClick"]),t(c,{small:"",color:"error mx-3",onClick:d=>i.deleteItem(l.columns.id)},{default:s(()=>[n("mdi-delete")]),_:2},1032,["onClick"])])])]),_:1},8,["headers","items","search"])]),_:1})],64)}const $=v(B,[["render",w]]);export{$ as default};
