import{_ as u,$ as m,o as l,c,g as t,w as a,V as f,e as o,t as r,h as i,a as p,a7 as b,n as h,k as V,a8 as k}from"./main-31a3df1d.js";import{V as y}from"./VForm-0cc142ca.js";import{V as $}from"./VSheet-a909642f.js";const C={data:()=>({NameRules:[e=>(e==null?void 0:e.length)>=3?!0:" name must be at least 3 characters."],sideProfile:{title:""},type:"success",alert_text:null}),methods:{submit(){m.post("/api/side-profiles/create",this.sideProfile).then(e=>{e.data.status==200&&(this.sideProfile=[],this.alert_text="side profile added successfully ",this.type="success")}).catch(e=>{this.alert_text=e.response.data.message,this.type="error"})}},mounted(){}};function g(e,s,w,x,B,n){return l(),c("div",null,[t(i,{height:"45",class:"mb-5 text-white",color:"#A9AB7F",onClick:e.goBack},{default:a(()=>[t(f,{start:"",icon:"mdi-arrow-left"}),o(" "+r(e.$t("back")),1)]),_:1},8,["onClick"]),t($,{"max-width":"1200",class:"mx-auto"},{default:a(()=>[e.alert_text!=null?(l(),p(b,{key:0,type:e.type,variant:"tonal",border:"start",elevation:"2",closable:"","close-label":e.$t("close"),text:e.alert_text,class:"mb-8"},null,8,["type","close-label","text"])):h("",!0),t(y,{"fast-fail":"",onSubmit:s[1]||(s[1]=V(()=>{},["prevent"]))},{default:a(()=>[t(k,{modelValue:e.sideProfile.title,"onUpdate:modelValue":s[0]||(s[0]=d=>e.sideProfile.title=d),label:e.$t("side_profile_title"),rules:e.NameRules},null,8,["modelValue","label","rules"]),t(i,{type:"submit",onClick:n.submit,block:"",class:"mt-2"},{default:a(()=>[o(r(e.$t("submit")),1)]),_:1},8,["onClick"])]),_:1})]),_:1})])}const A=u(C,[["render",g]]);export{A as default};