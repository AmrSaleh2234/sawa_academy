import{_ as b,M as v,A as k,u as y,y as p,k as o,o as n,e as _,q as s,h as e,t as l,x as i,Q as A,F as h,l as B,i as u,f as C}from"./main-f152cda1.js";import{A as F}from"./According-0ce62bc5.js";import{S as L}from"./Sidbar-fc38722f.js";import"./moment-fbc5633a.js";const M={components:{Map:v,According:F,Sidbar:L,About:k},data(){return{showsider:!1,childs:[],parentStore:y(),errors:[],report:""}},methods:{toggle(){this.showsider=!this.showsider},async getChilds(){await p.get("/api/parent/child/all").then(t=>{this.childs=t.data.childs,console.log(t)}).catch(t=>{console.log(t)})},async getLatestReport(){await p.get("/api/parent/child/report").then(t=>{this.report=t.data.report,console.log(t)}).catch(t=>{console.log(t)})}},mounted(){this.getChilds()}},R={class:"w-full p-2",style:{"border-bottom":"1px solid black"}},S={class:"m-auto"},$={class:"ont text-center font-bold text-2xl text-[#6EB7BF]"},V={class:"relative max-w-full max-h-screen flex"},E={class:"flex-1"},N={class:"flex w-full justify-between shadow p-2"},G={class:"bg-white text-2xl font-bold text-[#6EB7BF] p-4 text-center"},P={style:{"background-color":"#135c65"},class:"bg-[#135c65] p-2 rounded-lg text-center my-4"},j={class:"overflow-auto",style:{height:"70vh"}};function q(t,r,D,I,c,d){const m=o("Map"),g=o("sidbar"),f=o("router-link"),x=o("according"),w=o("About");return n(),_(h,null,[s(m),e("div",R,[e("div",{class:"col-span-1 w-full text-center m-auto visible md:invisible",onClick:r[0]||(r[0]=a=>d.toggle())}),e("div",null,[e("div",S,[e("p",$,l(t.$t("Profile_personly")),1)])])]),e("div",V,[s(g,{sole:c.showsider},null,8,["sole"]),e("div",E,[e("div",N,[e("div",G,l(t.$t("Child_follow_up")),1),e("div",P,[s(A,{left:"",color:"white"},{default:i(()=>[u("mdi-plus")]),_:1}),s(f,{to:{name:"ReAction"},class:"text-white p-2 rounded-lg"},{default:i(()=>[u(l(t.$t("Add_new_child")),1)]),_:1})])]),e("div",j,[(n(!0),_(h,null,B(c.childs,a=>(n(),C(x,{onGetLatestReport:d.getLatestReport,class:"text-xs block",name:a.name,age:a.age},{default:i(()=>[e("p",null,l(t.$t("My_child_is_getting_more_skilled")),1)]),_:2},1032,["onGetLatestReport","name","age"]))),256))])])]),s(w)],64)}const J=b(M,[["render",q]]);export{J as default};