import{a3 as m,ab as S,o as n,f as c,w as s,a4 as u,S as w,h as U,t as f,G as y,e as v,F as q,q as N,l,ad as x,i as V,x as h,a8 as p,ai as B,af as E,n as C,p as F,aa as M,v as P,a6 as R}from"./main-89073cda.js";import{u as T}from"./Users-c2b0e6b5.js";import{V as $}from"./VForm-d163d64f.js";import{a as g,V as d}from"./VRow-944fc851.js";const A=["value"],D={key:1,class:"d-block"},I={__name:"Create",setup(j){const t=T(),o=m({name:"",password:"",email:"",role:null}),b=m(!1),i=m({name:[e=>e?!0:"Name is required",e=>(e==null?void 0:e.length)>=4?!0:"Name must be less than 4 charcters"],email:[e=>e?!0:"E-mail is requred.",e=>/.+@.+\..+/.test(e)?!0:"E-mail must be valid."],password:[e=>e?!0:"Password is required",e=>(e==null?void 0:e.length)>=4?!0:"Password must be less than 6 charcters"]}),k=async e=>{await t.addUser(e)};return S(async()=>{t.fetchRoles()}),(e,r)=>(n(),c(R,{class:"mx-auto pa-12 pb-8",elevation:"8"},{default:s(()=>[u(t).successMsg?(n(),c(w,{key:0,class:"custom-alert-class",type:"success",variant:"tonal",border:"start",elevation:"2",closable:"","close-label":e.$t("close")},{default:s(()=>[U("small",null,f(u(t).successMsg),1)]),_:1},8,["close-label"])):y("",!0),u(t).errors.length!==0?(n(),c(w,{key:1,class:"custom-alert-class",type:"error",variant:"tonal",border:"start",elevation:"2",closable:"","close-label":e.$t("close")},{default:s(()=>[typeof u(t).errors=="object"?(n(!0),v(q,{key:0},N(u(t).errors,(a,_)=>(n(),v("small",{class:"d-block",value:_,key:_},f(a),9,A))),128)):(n(),v("small",D,f(u(t).errors),1))]),_:1},8,["close-label"])):y("",!0),l(x,{class:"mb-2"},{default:s(()=>[V(" Create User ")]),_:1}),l($,{modelValue:b.value,"onUpdate:modelValue":r[4]||(r[4]=a=>b.value=a),onSubmit:r[5]||(r[5]=h(a=>k(o.value),["prevent"]))},{default:s(()=>[l(g,null,{default:s(()=>[l(d,{cols:"12",md:"4"},{default:s(()=>[l(p,{modelValue:o.value.name,"onUpdate:modelValue":r[0]||(r[0]=a=>o.value.name=a),rules:i.value.name,counter:4,label:"Name",variant:"solo",required:""},null,8,["modelValue","rules"])]),_:1}),l(d,{cols:"12",md:"4"},{default:s(()=>[l(B,{modelValue:o.value.role,"onUpdate:modelValue":r[1]||(r[1]=a=>o.value.role=a),items:u(t).roles,label:"Role",variant:"solo","item-title":a=>a.name,"item-value":a=>a.id,"item-disabled":!1},null,8,["modelValue","items","item-title","item-value"])]),_:1})]),_:1}),l(g,null,{default:s(()=>[l(d,{cols:"12",md:"4"},{default:s(()=>[l(p,{modelValue:o.value.email,"onUpdate:modelValue":r[2]||(r[2]=a=>o.value.email=a),rules:i.value.email,label:"E-mail",variant:"solo",required:""},null,8,["modelValue","rules"])]),_:1}),l(d,{cols:"12",md:"4"},{default:s(()=>[l(p,{modelValue:o.value.password,"onUpdate:modelValue":r[3]||(r[3]=a=>o.value.password=a),rules:i.value.password,counter:6,label:"Password",variant:"solo",required:""},null,8,["modelValue","rules"])]),_:1})]),_:1}),l(E,null,{default:s(()=>[l(C,{color:"error",variant:"elevated"},{default:s(()=>[V("Cancel")]),_:1}),l(C,{type:"submit",color:"success",variant:"elevated"},{default:s(()=>[F(l(M,{indeterminate:"",color:"white",class:"mx-3",size:"25"},null,512),[[P,u(t).loading]]),V(" Save ")]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1}))}};export{I as default};
