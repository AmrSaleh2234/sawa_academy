import{af as y,a3 as C,K as n,o as r,a as p,w as a,ac as b,g as e,a0 as k,ad as P,e as V,a9 as w,a4 as d,a7 as g,c,j as x,t as R,F as B,n as F,k as N,a8 as _,ae as S,a2 as T,h as q}from"./main-31a3df1d.js";import{a as A,V as U}from"./VRow-f2563105.js";import{V as D}from"./VForm-0cc142ca.js";const L={__name:"ResetPassword",setup($){const i=y(),u=C(),l=n({token:i.params.token,email:i.query.email,password:"",password_confirmation:""}),m=n(!1),f=n({password:[t=>!!t||"Password is required"],password_confirmation:[t=>!!t||"Password Confirmation is required"]});return(t,s)=>(r(),p(b,null,{default:a(()=>[e(U,null,{default:a(()=>[e(A,{class:"v-col-sm-12 v-col-md-6 offset-md-3 mx-auto"},{default:a(()=>[e(k,{elevation:"4",light:"",tag:"section"},{default:a(()=>[e(P,null,{default:a(()=>[V(" Reset Password ")]),_:1}),e(w,null,{default:a(()=>[d(u).errors.length!==0?(r(),p(g,{key:0,class:"custom-alert-class",type:"error",variant:"tonal",border:"start",elevation:"2",closable:"","close-label":t.$t("close")},{default:a(()=>[(r(!0),c(B,null,x(d(u).errors,(o,v)=>(r(),c("div",{key:v},R(o[0]),1))),128))]),_:1},8,["close-label"])):F("",!0)]),_:1}),e(D,{onSubmit:s[2]||(s[2]=N(o=>d(u).resetPassword(l.value),["prevent"])),modelValue:m.value,"onUpdate:modelValue":s[3]||(s[3]=o=>m.value=o)},{default:a(()=>[e(w,null,{default:a(()=>[e(_,{outline:"",label:"New Password",type:"password",modelValue:l.value.password,"onUpdate:modelValue":s[0]||(s[0]=o=>l.value.password=o),rules:f.value.password},null,8,["modelValue","rules"]),e(_,{outline:"",label:"Confirm Password",type:"password",modelValue:l.value.password_confirmation,"onUpdate:modelValue":s[1]||(s[1]=o=>l.value.password_confirmation=o),rules:f.value.password_confirmation},null,8,["modelValue","rules"])]),_:1}),e(S),e(T,null,{default:a(()=>[e(q,{color:"info",type:"submit"},{default:a(()=>[V(" Reset ")]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}))}};export{L as default};