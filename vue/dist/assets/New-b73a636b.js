import{_ as p,o as f,c as u,a as t,t as v,r as g,M as $,A as y,h as s,i as e,w as o,f as a}from"./main-cb98dd2c.js";import{S as A}from"./Sidbar-2cd1046d.js";const B="/assets/Group463-7309cd5b.png",N={props:{date:String}},k={class:"border-b-2 rounded max-w-full mb-4 min-w-min bg-[#F8F8F8]"},F={class:"shadow p-4 font-bold rounded flex justify-between"},S=t("div",{class:"flex"},[t("div",null,[t("img",{src:B})]),t("p",{class:"text-xl m-auto p-2 font-thin"},"اكاديميه سوا")],-1),C={class:"my-auto font-thin text-[#148A98]"},M={class:"mt-4 border-b-2 p-2 rounded font-thin text-right"};function E(l,d,c,x,i,r){return f(),u("div",k,[t("div",F,[S,t("div",C,v(c.date),1)]),t("div",M,[g(l.$slots,"default")])])}const V=p(N,[["render",E]]),j={components:{Map:$,NewAcorrding:V,Sidbar:A,About:y},data(){return{showsider:!1}},methods:{toggle(){this.showsider=!this.showsider}}},D={class:""},G={class:"flex justify-between border-b-2 p-2 border-x-cyan-950 border-solid"},T=t("div",null,[t("p",{class:"w-full text-left m-auto col-span-2 px-2 py-4 text-xl text-[#6EB7BF]"},"الملف الشخصي")],-1),q={class:"text-left m-auto"},z={class:""},H=t("p",{class:"md:pt-4 py-2 md:text-2xl"},"الرئيسيه",-1),I={class:"relative overflow-clip max-w-full max-h-screen flex"},J={class:"flex-1 py-9 overflow-scroll"},K=t("div",{class:"top-0 bg-white absolute text-2xl w-full text-[#6EB7BF] p-2 text-center shadow"}," اخر المستجدات",-1);function L(l,d,c,x,i,r){const m=s("Map"),_=s("font-awesome-icon"),h=s("router-link"),b=s("sidbar"),n=s("NewAcorrding"),w=s("About");return f(),u("div",D,[e(m),t("div",G,[t("div",{class:"col-span-1 text-right m-auto visible md:invisible",onClick:d[0]||(d[0]=O=>r.toggle())},[e(_,{class:"text-2xl md:text-3xl text-right p-4 text-black hover:text-red-600",icon:"fa-solid fa-bars "})]),T,t("div",q,[t("button",z,[e(h,{class:"flex",to:"/"},{default:o(()=>[H,e(_,{class:"bg-[#135C65] rounded-[50%] m-2 md:p-4 p-2",icon:"fa-solid fa-arrow-left"})]),_:1})])])]),t("div",I,[e(b,{sole:i.showsider},null,8,["sole"]),t("div",J,[K,e(n,{date:"15 مايو"},{default:o(()=>[a(" اكاديمه سوا للتربيه الصحييه ")]),_:1}),e(n,{date:"15 مايو"},{default:o(()=>[a(" اكاديمه سوا للتربيه الصحييه ")]),_:1}),e(n,{date:"15 مايو"},{default:o(()=>[a(" اكاديمه سوا للتربيه الصحييه ")]),_:1}),e(n,{date:"15 مايو"},{default:o(()=>[a(" اكاديمه سوا للتربيه الصحييه ")]),_:1}),e(n,{date:"15 مايو"},{default:o(()=>[a(" اكاديمه سوا للتربيه الصحييه ")]),_:1})])]),e(w)])}const R=p(j,[["render",L]]);export{R as default};