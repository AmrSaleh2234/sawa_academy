import{a3 as d,a2 as y,ab as w,o as r,f as i,w as e,ac as x,l as a,a6 as C,ad as k,i as m,a9 as f,a4 as u,S as V,t as v,G as _,e as p,q as F,F as S,x as A,a8 as B,ae as E,af as M,n as P}from"./main-89073cda.js";import{V as T,a as N}from"./VRow-944fc851.js";import{V as $}from"./VForm-d163d64f.js";const U={__name:"ForgotPassword",setup(h){const n=d({email:""}),c=d(!1),b=d({email:[t=>!!t||"E-mail is required",t=>/.+@.+/.test(t)||"E-mail must be valid"]}),l=y();return w(()=>{l.resetAuthStore()}),(t,s)=>(r(),i(x,null,{default:e(()=>[a(N,null,{default:e(()=>[a(T,{class:"v-col-sm-12 v-col-md-6 offset-md-3 mx-auto"},{default:e(()=>[a(C,{elevation:"4",light:"",tag:"section"},{default:e(()=>[a(k,null,{default:e(()=>[m(" Forgot Password ")]),_:1}),a(f,null,{default:e(()=>[u(l).successMsg?(r(),i(V,{key:0,class:"custom-alert-class",type:"success",variant:"tonal",border:"start",elevation:"2",closable:"","close-label":t.$t("close")},{default:e(()=>[m(v(u(l).successMsg),1)]),_:1},8,["close-label"])):_("",!0),u(l).errors.length!==0?(r(),i(V,{key:1,class:"custom-alert-class",type:"error",variant:"tonal",border:"start",elevation:"2",closable:"","close-label":t.$t("close")},{default:e(()=>[(r(!0),p(S,null,F(u(l).errors,(o,g)=>(r(),p("div",{key:g},v(o[0]),1))),128))]),_:1},8,["close-label"])):_("",!0)]),_:1}),a($,{onSubmit:s[1]||(s[1]=A(o=>u(l).forgotPassword(n.value),["prevent"])),modelValue:c.value,"onUpdate:modelValue":s[2]||(s[2]=o=>c.value=o)},{default:e(()=>[a(f,null,{default:e(()=>[a(B,{outline:"",label:"Email",type:"text",modelValue:n.value.email,"onUpdate:modelValue":s[0]||(s[0]=o=>n.value.email=o),rules:b.value.email},null,8,["modelValue","rules"])]),_:1}),a(E),a(M,null,{default:e(()=>[a(P,{color:"info",type:"submit"},{default:e(()=>[m(" Send Link ")]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}))}};export{U as default};
