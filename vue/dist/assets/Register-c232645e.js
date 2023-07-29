import{C as c,T as _,g as y,o as i,c as u,h as t,U as o,W as g,w as n,P as x,X as k,d as h,F as C,k as E,t as V,Y as N,p as P,l as S,Z as m,i as U,j as B,v as $,a0 as j,f as w,$ as q,V as F,a as p}from"./main-38a97668.js";import{V as I}from"./VForm-e6e32684.js";const R={class:"py-4"},T=["value"],A={key:1,class:"d-block"},L=p("div",{class:"text-subtitle-1 text-medium-emphasis"},"Name",-1),z=p("div",{class:"text-subtitle-1 text-medium-emphasis"},"Account",-1),D=p("div",{class:"text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"}," Password ",-1),M=p("div",{class:"text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"}," Confirm Password ",-1),Z={__name:"Register",setup(W){const l=c({name:"",email:"",password:"",password_confirmation:""}),r=_(),v=c(!1),d=c({name:[s=>!!s||"Name is required"],email:[s=>!!s||"E-mail is required",s=>/.+@.+/.test(s)||"E-mail must be valid"],password:[s=>!!s||"Password is required"],password_confirmation:[s=>!!s||"Password Confirmation is required"]});return(s,e)=>{const b=y("router-link");return i(),u("div",R,[t(g,{class:"mx-auto mb-10","max-width":"228",src:o(k)},null,8,["src"]),t(x,{class:"mx-auto pa-12 pb-8",elevation:"8","max-width":"448",rounded:"lg"},{default:n(()=>[o(r).errors.length!==0?(i(),h(N,{key:0,class:"custom-alert-class",type:"error",variant:"tonal",border:"start",elevation:"2",closable:"","close-label":s.$t("close")},{default:n(()=>[typeof o(r).errors=="object"?(i(!0),u(C,{key:0},E(o(r).errors,(a,f)=>(i(),u("small",{class:"d-block",value:f,key:f},V(a),9,T))),128)):(i(),u("small",A,V(o(r).errors),1))]),_:1},8,["close-label"])):P("",!0),t(I,{onSubmit:e[6]||(e[6]=S(a=>o(r).handleRegister(l.value),["prevent"])),modelValue:v.value,"onUpdate:modelValue":e[7]||(e[7]=a=>v.value=a)},{default:n(()=>[L,t(m,{density:"compact",placeholder:"Enter your name","prepend-inner-icon":"mdi-account",variant:"outlined",modelValue:l.value.name,"onUpdate:modelValue":e[0]||(e[0]=a=>l.value.name=a),rules:d.value.name},null,8,["modelValue","rules"]),z,t(m,{density:"compact",placeholder:"Email address","prepend-inner-icon":"mdi-email-outline",variant:"outlined",modelValue:l.value.email,"onUpdate:modelValue":e[1]||(e[1]=a=>l.value.email=a),rules:d.value.email},null,8,["modelValue","rules"]),D,t(m,{type:"password",density:"compact",placeholder:"Enter your password","prepend-inner-icon":"mdi-lock-outline",variant:"outlined","onClick:appendInner":e[2]||(e[2]=a=>s.visible=!s.visible),modelValue:l.value.password,"onUpdate:modelValue":e[3]||(e[3]=a=>l.value.password=a),rules:d.value.password},null,8,["modelValue","rules"]),M,t(m,{type:"password",density:"compact",placeholder:"Retype your password","prepend-inner-icon":"mdi-lock-outline",variant:"outlined","onClick:appendInner":e[4]||(e[4]=a=>s.visible=!s.visible),modelValue:l.value.password_confirmation,"onUpdate:modelValue":e[5]||(e[5]=a=>l.value.password_confirmation=a),rules:d.value.password_confirmation},null,8,["modelValue","rules"]),t(U,{block:"",type:"submit",class:"mb-6 mt-2",color:"blue",size:"large",variant:"tonal"},{default:n(()=>[B(t(j,{indeterminate:"",color:"info",class:"mx-3",size:"25"},null,512),[[$,o(r).loading]]),w(" Sign up ")]),_:1})]),_:1},8,["modelValue"]),t(q,{class:"text-center"},{default:n(()=>[t(b,{class:"text-blue text-decoration-none",to:{name:"Login"},rel:"noopener noreferrer"},{default:n(()=>[w(" Login"),t(F,{icon:"mdi-chevron-right"})]),_:1})]),_:1})]),_:1})])}}};export{Z as default};
