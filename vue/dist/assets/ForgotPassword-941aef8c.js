import{a3 as d,a2 as y,ac as x,o as r,f as i,x as e,ad as C,q as a,a6 as k,ae as w,i as m,a9 as f,a4 as u,V,t as v,p as _,e as p,z as F,F as S,l as A,a8 as B,af as E,ag as M,aa as P}from"./main-89a8a6f4.js";import{V as T,a as N}from"./VRow-c5d331c9.js";import{V as $}from"./VForm-62f0abc4.js";const U={__name:"ForgotPassword",setup(h){const n=d({email:""}),c=d(!1),g=d({email:[t=>!!t||"E-mail is required",t=>/.+@.+/.test(t)||"E-mail must be valid"]}),l=y();return x(()=>{l.resetAuthStore()}),(t,s)=>(r(),i(C,null,{default:e(()=>[a(N,null,{default:e(()=>[a(T,{class:"v-col-sm-12 v-col-md-6 offset-md-3 mx-auto"},{default:e(()=>[a(k,{elevation:"4",light:"",tag:"section"},{default:e(()=>[a(w,null,{default:e(()=>[m(" Forgot Password ")]),_:1}),a(f,null,{default:e(()=>[u(l).successMsg?(r(),i(V,{key:0,class:"custom-alert-class",type:"success",variant:"tonal",border:"start",elevation:"2",closable:"","close-label":t.$t("close")},{default:e(()=>[m(v(u(l).successMsg),1)]),_:1},8,["close-label"])):_("",!0),u(l).errors.length!==0?(r(),i(V,{key:1,class:"custom-alert-class",type:"error",variant:"tonal",border:"start",elevation:"2",closable:"","close-label":t.$t("close")},{default:e(()=>[(r(!0),p(S,null,F(u(l).errors,(o,b)=>(r(),p("div",{key:b},v(o[0]),1))),128))]),_:1},8,["close-label"])):_("",!0)]),_:1}),a($,{onSubmit:s[1]||(s[1]=A(o=>u(l).forgotPassword(n.value),["prevent"])),modelValue:c.value,"onUpdate:modelValue":s[2]||(s[2]=o=>c.value=o)},{default:e(()=>[a(f,null,{default:e(()=>[a(B,{outline:"",label:"Email",type:"text",modelValue:n.value.email,"onUpdate:modelValue":s[0]||(s[0]=o=>n.value.email=o),rules:g.value.email},null,8,["modelValue","rules"])]),_:1}),a(E),a(M,null,{default:e(()=>[a(P,{color:"info",type:"submit"},{default:e(()=>[m(" Send Link ")]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}))}};export{U as default};
