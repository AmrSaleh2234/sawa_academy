import{C as d,T as y,a1 as C,o as r,d as i,w as e,a2 as k,h as a,P as w,a3 as x,f as m,$ as f,U as u,Y as V,t as v,p as _,c as p,k as F,F as S,l as P,Z as T,a4 as A,R as B,i as E}from"./main-97346cb2.js";import{a as M,V as $}from"./VRow-51c8a0b5.js";import{V as h}from"./VForm-815ffadc.js";const R={__name:"ForgotPassword",setup(N){const n=d({email:""}),c=d(!1),b=d({email:[t=>!!t||"E-mail is required",t=>/.+@.+/.test(t)||"E-mail must be valid"]}),l=y();return C(()=>{l.resetAuthStore()}),(t,s)=>(r(),i(k,null,{default:e(()=>[a($,null,{default:e(()=>[a(M,{class:"v-col-sm-12 v-col-md-6 offset-md-3 mx-auto"},{default:e(()=>[a(w,{elevation:"4",light:"",tag:"section"},{default:e(()=>[a(x,null,{default:e(()=>[m(" Forgot Password ")]),_:1}),a(f,null,{default:e(()=>[u(l).successMsg?(r(),i(V,{key:0,class:"custom-alert-class",type:"success",variant:"tonal",border:"start",elevation:"2",closable:"","close-label":t.$t("close")},{default:e(()=>[m(v(u(l).successMsg),1)]),_:1},8,["close-label"])):_("",!0),u(l).errors.length!==0?(r(),i(V,{key:1,class:"custom-alert-class",type:"error",variant:"tonal",border:"start",elevation:"2",closable:"","close-label":t.$t("close")},{default:e(()=>[(r(!0),p(S,null,F(u(l).errors,(o,g)=>(r(),p("div",{key:g},v(o[0]),1))),128))]),_:1},8,["close-label"])):_("",!0)]),_:1}),a(h,{onSubmit:s[1]||(s[1]=P(o=>u(l).forgotPassword(n.value),["prevent"])),modelValue:c.value,"onUpdate:modelValue":s[2]||(s[2]=o=>c.value=o)},{default:e(()=>[a(f,null,{default:e(()=>[a(T,{outline:"",label:"Email",type:"text",modelValue:n.value.email,"onUpdate:modelValue":s[0]||(s[0]=o=>n.value.email=o),rules:b.value.email},null,8,["modelValue","rules"])]),_:1}),a(A),a(B,null,{default:e(()=>[a(E,{color:"info",type:"submit"},{default:e(()=>[m(" Send Link ")]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}))}};export{R as default};