import{z as g,A as p,a as C,o as m,c as y,e as f,g as _,m as E,b7 as b,w as l,k as s,t as r,l as x,b as i,ab as V,i as w,ac as P,j as a,p as u,F}from"./main-9824b4b9.js";import{V as S}from"./VAlert-c9d9490f.js";import{b as B,V as $}from"./VCard-0635341b.js";const I={data(){return{search:"",headers:[],sideProfile:[],alert_text:null,loading:!0,groupBy:[{key:"side_profile_title"}],active:!1}},methods:{getSideProfile(){p.get("/api/side-profiles/all-evaluations").then(e=>{this.sideProfile=e.data.evaluations,console.log(this.sideProfile),this.loading=!1})},editItem(e){this.$router.push({name:"EditSideProfiles",params:{id:e}})},deleteItem(e){console.log(e),p.delete(`/api/side-profiles/${e}/delete`).then(d=>{d.data.status==200&&(this.alert_text="side profile deleted successfully ",this.sideProfile=d.data.sideProfile)})},create(){this.$router.push({name:"CreateSideProfiles"})},showItem(e){this.$router.push({name:"ShowSideProfiles",params:{id:e}})},onClickOutside(){this.active=!1},editEvaluation(e){this.$router.push({name:"EditEvaluations",params:{id:e}})},deleteEvaluation(e){console.log(e),p.delete(`/api/evaluations/${e}/delete`).then(d=>{d.data.status==200&&(this.alert_text="evaluation deleted successfully ",this.getSideProfile())})},createEvaluation(e){this.$router.push({name:"CreateEvaluations",params:{sideProfile_id:e}})},showEvaluation(e){this.$router.push({name:"ShowEvaluations",params:{id:e}})}},mounted(){this.getSideProfile()},computed:{header(){return this.headers=[{key:"evaluation_title",title:this.$t("evaluation_title")},{title:this.$t("operation")}]}}},N=["onClick"],O=["onClick"],T={style:{"background-color":"#EFEFEF"}};function A(e,d,D,j,o,n){const k=C("v-data-table");return m(),y(F,null,[o.alert_text!=null?(m(),f(S,{key:0,type:"success",variant:"tonal",border:"start",elevation:"2",closable:"","close-label":e.$t("close"),text:o.alert_text,class:"mb-8"},null,8,["close-label","text"])):_("",!0),E((m(),f(x,{text:"Create",color:"green",height:"45",class:"mb-5 mt-5",onClick:n.create},{default:l(()=>[s(r(e.$t("create_button")),1)]),_:1},8,["onClick"])),[[b,n.onClickOutside]]),i($,null,{default:l(()=>[i(B,null,{default:l(()=>[s(r(e.$t("side_profile"))+" ",1),i(V),i(w,{modelValue:o.search,"onUpdate:modelValue":d[0]||(d[0]=t=>o.search=t),"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},null,8,["modelValue"])]),_:1}),i(k,{headers:n.header,items:o.sideProfile,search:o.search,loading:!0,"group-by":o.groupBy,"item-key":"name","show-group-by":""},{top:l(()=>[o.loading?(m(),f(P,{key:0,slot:"progress",style:{color:"#135c65"},indeterminate:""})):_("",!0)]),headers:l(()=>[a("tr",null,[a("td",null,r(e.$t("evaluation_type")),1),a("td",null,r(o.headers[0].title),1),a("td",null,r(o.headers[1].title),1)])]),"group-header":l(({item:t,isGroupOpen:v,toggleGroup:c,columns:z,props:L})=>[a("tr",null,[a("td",{onClick:h=>c(t),style:{cursor:"pointer","background-color":"#EFEFEF"}},[i(u,null,{default:l(()=>[s(r(v(t)?"mdi-chevron-down":"mdi-chevron-right"),1)]),_:2},1024),s(" "+r(t.value),1)],8,N),a("td",{onClick:h=>c(t),style:{cursor:"pointer","background-color":"#EFEFEF"}},null,8,O),a("td",T,[i(u,{small:"",color:"primary",class:"mx-3",onClick:h=>n.createEvaluation(t.items[0].raw.evaluation_id)},{default:l(()=>[s("mdi-plus-box")]),_:2},1032,["onClick"]),i(u,{small:"",color:"primary",class:"mx-3",onClick:h=>n.editItem(t.items[0].raw.side_profile_id)},{default:l(()=>[s("mdi-pencil")]),_:2},1032,["onClick"])])])]),item:l(({item:t,index:v})=>[a("tr",null,[a("td",null,r(e.colgroup),1),a("td",null,r(t.columns.evaluation_title),1),a("td",null,[i(u,{small:"",color:"primary",class:"mx-3",onClick:c=>n.showEvaluation(t.raw.evaluation_id)},{default:l(()=>[s("mdi-eye")]),_:2},1032,["onClick"]),i(u,{small:"",color:"primary",class:"mx-3",onClick:c=>n.editEvaluation(t.raw.evaluation_id)},{default:l(()=>[s("mdi-pencil")]),_:2},1032,["onClick"]),i(u,{small:"",color:"error mx-3",onClick:c=>n.deleteEvaluation(t.raw.evaluation_id)},{default:l(()=>[s("mdi-delete")]),_:2},1032,["onClick"])])])]),_:1},8,["headers","items","search","group-by"])]),_:1})],64)}const J=g(I,[["render",A]]);export{J as default};