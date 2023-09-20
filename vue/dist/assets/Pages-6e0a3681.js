import{_ as v,y as c,o as d,e as n,h as t,t as r,F as u,z as y,q as s,x as o,a6 as V,ae as w,a9 as b,w as g,n as m,ag as k,am as C,aa as h,i as f}from"./main-4b2cf09a.js";import{V as P}from"./VDialog-61faa981.js";import{a as x,V as B}from"./VRow-cc66173b.js";const M={data(){return{pages:[],page_model_id:null,page_model_title:null,page_model_description:null,update_modal:!1}},methods:{getPages(){c.get("/api/site/pages").then(e=>{console.log(e),e.data.pages!=null&&(this.pages=e.data.pages)}).catch(e=>{console.log(e)})},updatePage(){c.post(`/api/site/pages/${this.page_model_id}`,{title:this.page_model_title,description:this.page_model_description}).then(e=>{console.log(e);const l=this.pages.findIndex(p=>p.id==e.data.pages.id);this.pages[l]=e.data.pages,this.update_modal=!1}).catch(e=>{console.log(e)})},openModal(e){this.page_model_id=e.id,this.page_model_title=e.title,this.page_model_description=e.description,this.update_modal=!0}},mounted(){this.getPages()}},T={class:"",style:{padding:"1rem 1.5rem"}},A={class:"text-2xl font-bold"},D={class:"text-lg",style:{color:"#42a5f5",padding:"0.5rem 0"}},L={class:"px-6 py-2 mt-2 mb-12 rounded-lg shadow-sm cursor-pointer item flex justify-between bg-gray-50"},U={class:"relative flex flex-col items-center mx-4"},j={class:"text-sm"},N=["onClick"],S=t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"},null,-1),z=[S],F={class:"flex flex-col items-end"},H={class:"text-xl py-1"},q={class:"text-base py-1 px-2"},E=t("span",{class:"text-h5"},"Update Page",-1),I={class:"mb-6"},R=t("label",{for:"page_title"},"Title",-1),G={class:""},J=t("label",{for:"page_description"},"Description",-1);function K(e,l,p,O,i,_){return d(),n(u,null,[t("div",T,[t("h2",A,r(e.$t("Pages")),1),t("p",D,r(e.$t("Pages_menu")),1)]),(d(!0),n(u,null,y(i.pages,a=>(d(),n("div",L,[t("div",U,[t("p",j,[(d(),n("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6",onClick:Q=>_.openModal(a)},z,8,N))])]),t("div",F,[t("p",H,r(a.title),1),t("p",q,r(a.description),1)])]))),256)),t("div",null,[s(x,{justify:"center"},{default:o(()=>[s(P,{modelValue:i.update_modal,"onUpdate:modelValue":l[3]||(l[3]=a=>i.update_modal=a),persistent:"",width:"1024"},{default:o(()=>[s(V,{class:"pa-5",style:{"border-radius":"12px"}},{default:o(()=>[s(w,null,{default:o(()=>[E]),_:1}),s(b,null,{default:o(()=>[s(x,null,{default:o(()=>[s(B,{cols:"12"},{default:o(()=>[t("div",I,[R,g(t("input",{name:"page_title",id:"page_title",type:"text","onUpdate:modelValue":l[0]||(l[0]=a=>i.page_model_title=a),style:{width:"100%",border:"2px solid gray"},class:"focus:ring-gray-400"},null,512),[[m,i.page_model_title]])]),t("div",G,[J,g(t("textarea",{name:"page_description",id:"page_description","onUpdate:modelValue":l[1]||(l[1]=a=>i.page_model_description=a),style:{width:"100%",border:"2px solid gray"},class:"focus:ring-gray-400",rows:"5"},null,512),[[m,i.page_model_description]])])]),_:1})]),_:1})]),_:1}),s(k,null,{default:o(()=>[s(C),s(h,{color:"blue-darken-1",variant:"text",onClick:l[2]||(l[2]=a=>i.update_modal=!1)},{default:o(()=>[f(" Close ")]),_:1}),s(h,{color:"blue-darken-1",variant:"text",onClick:_.updatePage},{default:o(()=>[f(" Save ")]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})])],64)}const Z=v(M,[["render",K]]);export{Z as default};
