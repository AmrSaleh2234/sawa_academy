import{y,u as b,r as d,o as r,e as p,w as a,s as C,b as e,k as V,d as n,c as w,f as k,F as x,g as P,h as g,i as c,x as R,l as B,t as F}from"./main-9b473118.js";import{V as N,a as S}from"./VRow-af0f0da5.js";import{V as T,b as q,a as _,c as A}from"./VCard-b1e9ff81.js";import{V as U}from"./VAlert-d150c2f8.js";import{V as D}from"./VForm-6308447b.js";const z={__name:"ResetPassword",setup($){const i=y(),u=b(),l=d({token:i.params.token,email:i.query.email,password:"",password_confirmation:""}),m=d(!1),f=d({password:[t=>!!t||"Password is required"],password_confirmation:[t=>!!t||"Password Confirmation is required"]});return(t,s)=>(r(),p(C,null,{default:a(()=>[e(S,null,{default:a(()=>[e(N,{class:"v-col-sm-12 v-col-md-6 offset-md-3 mx-auto"},{default:a(()=>[e(T,{elevation:"4",light:"",tag:"section"},{default:a(()=>[e(q,null,{default:a(()=>[V(" Reset Password ")]),_:1}),e(_,null,{default:a(()=>[n(u).errors.length!==0?(r(),p(U,{key:0,class:"custom-alert-class",type:"error",variant:"tonal",border:"start",elevation:"2",closable:"","close-label":t.$t("close")},{default:a(()=>[(r(!0),w(x,null,k(n(u).errors,(o,v)=>(r(),w("div",{key:v},F(o[0]),1))),128))]),_:1},8,["close-label"])):P("",!0)]),_:1}),e(D,{onSubmit:s[2]||(s[2]=g(o=>n(u).resetPassword(l.value),["prevent"])),modelValue:m.value,"onUpdate:modelValue":s[3]||(s[3]=o=>m.value=o)},{default:a(()=>[e(_,null,{default:a(()=>[e(c,{outline:"",label:"New Password",type:"password",modelValue:l.value.password,"onUpdate:modelValue":s[0]||(s[0]=o=>l.value.password=o),rules:f.value.password},null,8,["modelValue","rules"]),e(c,{outline:"",label:"Confirm Password",type:"password",modelValue:l.value.password_confirmation,"onUpdate:modelValue":s[1]||(s[1]=o=>l.value.password_confirmation=o),rules:f.value.password_confirmation},null,8,["modelValue","rules"])]),_:1}),e(R),e(A,null,{default:a(()=>[e(B,{color:"info",type:"submit"},{default:a(()=>[V(" Reset ")]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}))}};export{z as default};
