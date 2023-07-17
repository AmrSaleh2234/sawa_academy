import{r as m,q as U,o as n,e as c,w as s,d as u,j as q,t as f,g as w,c as V,F as N,f as S,b as a,k as v,h,i as p,E as x,l as y,m as B,n as E,v as F}from"./main-a801c739.js";import{u as M}from"./Users-4a80b9e4.js";import{V as g}from"./VAlert-6a7ec32b.js";import{b as P,c as R,V as T}from"./VCard-f426f638.js";import{V as $}from"./VForm-87631a5c.js";import{a as k,V as d}from"./VRow-cf1a27e2.js";const j=["value"],A={key:1,class:"d-block"},K={__name:"Create",setup(D){const t=M(),o=m({name:"",password:"",email:"",role:null}),b=m(!1),i=m({name:[e=>e?!0:"Name is required",e=>(e==null?void 0:e.length)>=4?!0:"Name must be less than 4 charcters"],email:[e=>e?!0:"E-mail is requred.",e=>/.+@.+\..+/.test(e)?!0:"E-mail must be valid."],password:[e=>e?!0:"Password is required",e=>(e==null?void 0:e.length)>=4?!0:"Password must be less than 6 charcters"]}),C=async e=>{await t.addUser(e)};return U(async()=>{t.fetchRoles()}),(e,r)=>(n(),c(T,{class:"mx-auto pa-12 pb-8",elevation:"8"},{default:s(()=>[u(t).successMsg?(n(),c(g,{key:0,class:"custom-alert-class",type:"success",variant:"tonal",border:"start",elevation:"2",closable:"","close-label":e.$t("close")},{default:s(()=>[q("small",null,f(u(t).successMsg),1)]),_:1},8,["close-label"])):w("",!0),u(t).errors.length!==0?(n(),c(g,{key:1,class:"custom-alert-class",type:"error",variant:"tonal",border:"start",elevation:"2",closable:"","close-label":e.$t("close")},{default:s(()=>[typeof u(t).errors=="object"?(n(!0),V(N,{key:0},S(u(t).errors,(l,_)=>(n(),V("small",{class:"d-block",value:_,key:_},f(l),9,j))),128)):(n(),V("small",A,f(u(t).errors),1))]),_:1},8,["close-label"])):w("",!0),a(P,{class:"mb-2"},{default:s(()=>[v(" Create User ")]),_:1}),a($,{modelValue:b.value,"onUpdate:modelValue":r[4]||(r[4]=l=>b.value=l),onSubmit:r[5]||(r[5]=h(l=>C(o.value),["prevent"]))},{default:s(()=>[a(k,null,{default:s(()=>[a(d,{cols:"12",md:"4"},{default:s(()=>[a(p,{modelValue:o.value.name,"onUpdate:modelValue":r[0]||(r[0]=l=>o.value.name=l),rules:i.value.name,counter:4,label:"Name",variant:"solo",required:""},null,8,["modelValue","rules"])]),_:1}),a(d,{cols:"12",md:"4"},{default:s(()=>[a(x,{modelValue:o.value.role,"onUpdate:modelValue":r[1]||(r[1]=l=>o.value.role=l),items:u(t).roles,label:"Role",variant:"solo","item-title":l=>l.name,"item-value":l=>l.id,"item-disabled":!1},null,8,["modelValue","items","item-title","item-value"])]),_:1})]),_:1}),a(k,null,{default:s(()=>[a(d,{cols:"12",md:"4"},{default:s(()=>[a(p,{modelValue:o.value.email,"onUpdate:modelValue":r[2]||(r[2]=l=>o.value.email=l),rules:i.value.email,label:"E-mail",variant:"solo",required:""},null,8,["modelValue","rules"])]),_:1}),a(d,{cols:"12",md:"4"},{default:s(()=>[a(p,{modelValue:o.value.password,"onUpdate:modelValue":r[3]||(r[3]=l=>o.value.password=l),rules:i.value.password,counter:6,label:"Password",variant:"solo",required:""},null,8,["modelValue","rules"])]),_:1})]),_:1}),a(R,null,{default:s(()=>[a(y,{color:"error",variant:"elevated"},{default:s(()=>[v("Cancel")]),_:1}),a(y,{type:"submit",color:"success",variant:"elevated"},{default:s(()=>[B(a(E,{indeterminate:"",color:"white",class:"mx-3",size:"25"},null,512),[[F,u(t).loading]]),v(" Save ")]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1}))}};export{K as default};