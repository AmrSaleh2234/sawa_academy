import{_ as r,g as o,h as n,o as h,c as u,a as t,t as s,i as d,w as i,B as p,Q as g,R as m,C as f}from"./main-7baa27c2.js";const v={data(){return{sortBy:[{key:"evaluation_title",order:"asc"}],headers:[],desserts:[],child_Name:"",birth_date:"",title:""}},computed:{locale(){return this.$i18n.locale},header(){return this.headers=[{title:this.$t("id"),key:"id"},{title:this.$t("evaluation_title"),key:"evaluation_title"},{title:this.$t("side_profile_title"),key:"side_profile_title"},{title:this.$t("child_age"),key:"child_age"},{title:this.$t("diff_age"),key:"diff_age"},{title:this.$t("grow_age"),key:"grow_age"},{title:this.$t("late_percentage"),key:"late_percentage"},{title:this.$t("result_created_at"),key:"result_created_at"}]}},methods:{getresulte(){o.get(`/api/child/${this.$route.params.child_id}`).then(e=>{console.log(e.data),console.log(e.data.child),this.child_Name=e.data.child.name,this.birth_date=e.data.child.birth_date,console.log(this.print_results),console.log("ASa")})},goBack(){this.$router.go(-1)},async print(){await o.post("/api/child/results",{sideprofile_id:this.$route.params.sideProfile_id,child_id:this.$route.params.child_id}).then(e=>{this.desserts=e.data.evaluation_results,this.title=e.data.evaluation_results[0].side_profile_title,console.log(e)}),setTimeout(()=>{window.print()},500)}},beforeMount(){this.getresulte(),this.print()}},k=e=>(g("data-v-898412ce"),e=e(),m(),e),y={class:"back-back"},w={class:"back"},$=k(()=>t("div",{class:"text-center"},[t("img",{src:f,style:{width:"130px"}})],-1)),b={class:"w-[100%] text-h4 text-center ma-4"},x={class:"w-[100%] text-right ma-4"},B={class:"w-[100%] text-right ma-4"};function N(e,S,C,I,l,c){const _=n("v-data-table");return h(),u("div",y,[t("div",w,[$,t("div",null,[t("p",b,s(l.title),1)]),t("div",null,[t("p",x,s(l.child_Name),1),t("p",B,s(l.birth_date),1)]),d(p,null,{default:i(()=>[d(_,{class:"hidden-table",headers:c.header,items:l.desserts,search:e.search},{item:i(({item:a})=>[t("tr",null,[t("td",null,s(a.columns.id),1),t("td",null,s(a.columns.evaluation_title),1),t("td",null,s(a.columns.side_profile_title),1),t("td",null,s(a.columns.child_age),1),t("td",null,s(a.columns.diff_age),1),t("td",null,s(a.columns.grow_age),1),t("td",null,s(Math.round(a.columns.late_percentage))+" %",1),t("td",null,s(a.columns.result_created_at),1)])]),bottom:i(()=>[]),_:1},8,["headers","items","search"])]),_:1})])])}const R=r(v,[["render",N],["__scopeId","data-v-898412ce"]]);export{R as default};
