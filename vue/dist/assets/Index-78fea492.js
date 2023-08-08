import{_ as g,z as p,k as C,o as h,e as y,f,a6 as E,G as v,p as b,bv as x,w as t,i as o,t as r,n as V,l as i,ac as w,ak as P,a7 as F,aM as S,h as a,V as u,a4 as B,F as $}from"./main-858db694.js";const I={data(){return{search:"",headers:[],sideProfile:[],alert_text:null,loading:!0,groupBy:[{key:"side_profile_title"}],active:!1}},methods:{getSideProfile(){p.get("/api/side-profiles/all-evaluations").then(e=>{this.sideProfile=e.data.evaluations,console.log(this.sideProfile),this.loading=!1})},editItem(e){this.$router.push({name:"EditSideProfiles",params:{id:e}})},deleteItem(e){console.log(e),p.delete(`/api/side-profiles/${e}/delete`).then(d=>{d.data.status==200&&(this.alert_text="side profile deleted successfully ",this.sideProfile=d.data.sideProfile)})},create(){this.$router.push({name:"CreateSideProfiles"})},showItem(e){this.$router.push({name:"ShowSideProfiles",params:{id:e}})},onClickOutside(){this.active=!1},editEvaluation(e){this.$router.push({name:"EditEvaluations",params:{id:e}})},deleteEvaluation(e){console.log(e),p.delete(`/api/evaluations/${e}/delete`).then(d=>{d.data.status==200&&(this.alert_text="evaluation deleted successfully ",this.getSideProfile())})},createEvaluation(e){this.$router.push({name:"CreateEvaluations",params:{sideProfile_id:e}})},showEvaluation(e){this.$router.push({name:"ShowEvaluations",params:{id:e}})}},mounted(){this.getSideProfile()},computed:{header(){return this.headers=[{key:"evaluation_title",title:this.$t("evaluation_title")},{title:this.$t("operation")}]}}},N=["onClick"],O=["onClick"],T={style:{"background-color":"#EFEFEF"}};function D(e,d,z,A,s,n){const k=C("v-data-table");return h(),y($,null,[s.alert_text!=null?(h(),f(E,{key:0,type:"success",variant:"tonal",border:"start",elevation:"2",closable:"","close-label":e.$t("close"),text:s.alert_text,class:"mb-8"},null,8,["close-label","text"])):v("",!0),b((h(),f(V,{text:"Create",color:"green",height:"45",class:"mb-5 mt-5",onClick:n.create},{default:t(()=>[o(r(e.$t("create_button")),1)]),_:1},8,["onClick"])),[[x,n.onClickOutside]]),i(B,null,{default:t(()=>[i(w,null,{default:t(()=>[o(r(e.$t("side_profile"))+" ",1),i(P),i(F,{modelValue:s.search,"onUpdate:modelValue":d[0]||(d[0]=l=>s.search=l),"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},null,8,["modelValue"])]),_:1}),i(k,{headers:n.header,items:s.sideProfile,search:s.search,loading:!0,"group-by":s.groupBy,"item-key":"name","show-group-by":""},{top:t(()=>[s.loading?(h(),f(S,{key:0,slot:"progress",style:{color:"#135c65"},indeterminate:""})):v("",!0)]),headers:t(()=>[a("tr",null,[a("td",null,r(e.$t("evaluation_type")),1),a("td",null,r(s.headers[0].title),1),a("td",null,r(s.headers[1].title),1)])]),"group-header":t(({item:l,isGroupOpen:_,toggleGroup:c,columns:L,props:M})=>[a("tr",null,[a("td",{onClick:m=>c(l),style:{cursor:"pointer","background-color":"#EFEFEF"}},[i(u,null,{default:t(()=>[o(r(_(l)?"mdi-chevron-down":"mdi-chevron-right"),1)]),_:2},1024),o(" "+r(l.value),1)],8,N),a("td",{onClick:m=>c(l),style:{cursor:"pointer","background-color":"#EFEFEF"}},null,8,O),a("td",T,[i(u,{small:"",color:"primary",class:"mx-3",onClick:m=>n.createEvaluation(l.items[0].raw.side_profile_id)},{default:t(()=>[o("mdi-plus-box")]),_:2},1032,["onClick"]),i(u,{small:"",color:"primary",class:"mx-3",onClick:m=>n.editItem(l.items[0].raw.side_profile_id)},{default:t(()=>[o("mdi-pencil")]),_:2},1032,["onClick"])])])]),item:t(({item:l,index:_})=>[a("tr",null,[a("td",null,r(e.colgroup),1),a("td",null,r(l.columns.evaluation_title),1),a("td",null,[i(u,{small:"",color:"primary",class:"mx-3",onClick:c=>n.showEvaluation(l.raw.evaluation_id)},{default:t(()=>[o("mdi-eye")]),_:2},1032,["onClick"]),i(u,{small:"",color:"primary",class:"mx-3",onClick:c=>n.editEvaluation(l.raw.evaluation_id)},{default:t(()=>[o("mdi-pencil")]),_:2},1032,["onClick"]),i(u,{small:"",color:"error mx-3",onClick:c=>n.deleteEvaluation(l.raw.evaluation_id)},{default:t(()=>[o("mdi-delete")]),_:2},1032,["onClick"])])])]),_:1},8,["headers","items","search","group-by"])]),_:1})],64)}const j=g(I,[["render",D]]);export{j as default};
