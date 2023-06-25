import{y as R,r as d,H as N,q as S,o as i,c as u,b as s,w as l,p as $,k as m,l as c,d as n,e as b,j as x,t as f,g as _,F as k,f as E,h as F,i as A,E as M,m as T,n as U,v as q}from"./main-5fd2c4de.js";import{u as P}from"./Users-d2d7e289.js";import{V as y}from"./VAlert-f900ea97.js";import{b as j,c as D,V as I}from"./VCard-d54747d5.js";import{V as z}from"./VForm-6da0dce8.js";import{a as H,V as g}from"./VRow-3c243f3a.js";const L=["value"],G={key:1,class:"d-block"},Z={__name:"Edit",setup(J){const p=R(),t=P(),r=d({role_id:null,name:"",permissions:[]}),w=function(){this.$router.go(-1)},v=d(!1),C=d({name:[e=>e?!0:"Name is required",e=>(e==null?void 0:e.length)>=4?!0:"Name must be less than 4 charcters"]}),h=async e=>{await t.updateRole(e)},{getRoleById:B}=N(t);return S(async()=>{await t.fetchPermissions(),await t.fetchRoles();const e=B.value(p.params.id);r.value.role_id=p.params.id,r.value.name=e.name,r.value.permissions=e.permissions}),(e,o)=>(i(),u(k,null,[s(c,{height:"45",class:"mb-5 text-white",color:"#A9AB7F",onClick:w},{default:l(()=>[s($,{start:"",icon:"mdi-arrow-left"}),m(" Back ")]),_:1}),s(I,{class:"mx-auto pa-12 pb-8",elevation:"8"},{default:l(()=>[n(t).successMsg?(i(),b(y,{key:0,class:"custom-alert-class",type:"success",variant:"tonal",border:"start",elevation:"2",closable:"","close-label":e.$t("close")},{default:l(()=>[x("small",null,f(n(t).successMsg),1)]),_:1},8,["close-label"])):_("",!0),n(t).errors.length!==0?(i(),b(y,{key:1,class:"custom-alert-class",type:"error",variant:"tonal",border:"start",elevation:"2",closable:"","close-label":e.$t("close")},{default:l(()=>[typeof n(t).errors=="object"?(i(!0),u(k,{key:0},E(n(t).errors,(a,V)=>(i(),u("small",{class:"d-block",value:V,key:V},f(a),9,L))),128)):(i(),u("small",G,f(n(t).errors),1))]),_:1},8,["close-label"])):_("",!0),s(j,{class:"mb-2"},{default:l(()=>[m(" Edit Role ")]),_:1}),s(z,{modelValue:v.value,"onUpdate:modelValue":o[3]||(o[3]=a=>v.value=a),onSubmit:o[4]||(o[4]=F(a=>h(r.value),["prevent"]))},{default:l(()=>[s(H,null,{default:l(()=>[s(g,{cols:"12",md:"4"},{default:l(()=>[s(A,{modelValue:r.value.name,"onUpdate:modelValue":o[0]||(o[0]=a=>r.value.name=a),rules:C.value.name,counter:4,label:"Name",variant:"solo",required:""},null,8,["modelValue","rules"])]),_:1}),s(g,{cols:"12",md:"4"},{default:l(()=>[s(M,{modelValue:r.value.permissions,"onUpdate:modelValue":o[1]||(o[1]=a=>r.value.permissions=a),items:n(t).permissions,label:"Permissions",variant:"solo","item-title":a=>a.name,"item-value":a=>a.id,"item-disabled":!1,multiple:""},null,8,["modelValue","items","item-title","item-value"])]),_:1})]),_:1}),s(D,null,{default:l(()=>[s(c,{color:"error",variant:"elevated",onClick:o[2]||(o[2]=a=>e.$router.go(-1))},{default:l(()=>[m("Cancel")]),_:1}),s(c,{type:"submit",color:"success",variant:"elevated"},{default:l(()=>[T(s(U,{indeterminate:"",color:"white",class:"mx-3",size:"25"},null,512),[[q,n(t).loading]]),m(" Save ")]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})],64))}};export{Z as default};