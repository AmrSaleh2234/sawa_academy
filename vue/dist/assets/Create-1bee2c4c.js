import{C as m,a1 as U,o as n,d as c,w as s,U as u,Y as w,a as N,t as f,p as y,c as v,F as S,k as q,h as a,a3 as h,f as V,l as x,Z as p,a9 as B,R as P,i as C,j as E,a0 as F,v as M,P as R}from"./main-45612ea2.js";import{u as T}from"./Users-82824ffd.js";import{V as $}from"./VForm-29a0c2da.js";import{V as k,a as d}from"./VRow-6a211411.js";const j=["value"],A={key:1,class:"d-block"},G={__name:"Create",setup(D){const t=T(),o=m({name:"",password:"",email:"",role:null}),b=m(!1),i=m({name:[e=>e?!0:"Name is required",e=>(e==null?void 0:e.length)>=4?!0:"Name must be less than 4 charcters"],email:[e=>e?!0:"E-mail is requred.",e=>/.+@.+\..+/.test(e)?!0:"E-mail must be valid."],password:[e=>e?!0:"Password is required",e=>(e==null?void 0:e.length)>=4?!0:"Password must be less than 6 charcters"]}),g=async e=>{await t.addUser(e)};return U(async()=>{t.fetchRoles()}),(e,r)=>(n(),c(R,{class:"mx-auto pa-12 pb-8",elevation:"8"},{default:s(()=>[u(t).successMsg?(n(),c(w,{key:0,class:"custom-alert-class",type:"success",variant:"tonal",border:"start",elevation:"2",closable:"","close-label":e.$t("close")},{default:s(()=>[N("small",null,f(u(t).successMsg),1)]),_:1},8,["close-label"])):y("",!0),u(t).errors.length!==0?(n(),c(w,{key:1,class:"custom-alert-class",type:"error",variant:"tonal",border:"start",elevation:"2",closable:"","close-label":e.$t("close")},{default:s(()=>[typeof u(t).errors=="object"?(n(!0),v(S,{key:0},q(u(t).errors,(l,_)=>(n(),v("small",{class:"d-block",value:_,key:_},f(l),9,j))),128)):(n(),v("small",A,f(u(t).errors),1))]),_:1},8,["close-label"])):y("",!0),a(h,{class:"mb-2"},{default:s(()=>[V(" Create User ")]),_:1}),a($,{modelValue:b.value,"onUpdate:modelValue":r[4]||(r[4]=l=>b.value=l),onSubmit:r[5]||(r[5]=x(l=>g(o.value),["prevent"]))},{default:s(()=>[a(k,null,{default:s(()=>[a(d,{cols:"12",md:"4"},{default:s(()=>[a(p,{modelValue:o.value.name,"onUpdate:modelValue":r[0]||(r[0]=l=>o.value.name=l),rules:i.value.name,counter:4,label:"Name",variant:"solo",required:""},null,8,["modelValue","rules"])]),_:1}),a(d,{cols:"12",md:"4"},{default:s(()=>[a(B,{modelValue:o.value.role,"onUpdate:modelValue":r[1]||(r[1]=l=>o.value.role=l),items:u(t).roles,label:"Role",variant:"solo","item-title":l=>l.name,"item-value":l=>l.id,"item-disabled":!1},null,8,["modelValue","items","item-title","item-value"])]),_:1})]),_:1}),a(k,null,{default:s(()=>[a(d,{cols:"12",md:"4"},{default:s(()=>[a(p,{modelValue:o.value.email,"onUpdate:modelValue":r[2]||(r[2]=l=>o.value.email=l),rules:i.value.email,label:"E-mail",variant:"solo",required:""},null,8,["modelValue","rules"])]),_:1}),a(d,{cols:"12",md:"4"},{default:s(()=>[a(p,{modelValue:o.value.password,"onUpdate:modelValue":r[3]||(r[3]=l=>o.value.password=l),rules:i.value.password,counter:6,label:"Password",variant:"solo",required:""},null,8,["modelValue","rules"])]),_:1})]),_:1}),a(P,null,{default:s(()=>[a(C,{color:"error",variant:"elevated"},{default:s(()=>[V("Cancel")]),_:1}),a(C,{type:"submit",color:"success",variant:"elevated"},{default:s(()=>[E(a(F,{indeterminate:"",color:"white",class:"mx-3",size:"25"},null,512),[[M,u(t).loading]]),V(" Save ")]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1}))}};export{G as default};
