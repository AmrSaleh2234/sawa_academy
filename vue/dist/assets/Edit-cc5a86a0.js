import{P as R,s as d,W as N,I as S,o as i,c as u,i as s,w as t,V as x,f as m,j as c,x as n,d as b,C as _,a as $,t as f,D as k,F as y,l as E,K as F,n as T,E as A,T as M,O as P,k as U,H as D,v as I,z as j}from"./main-cb98dd2c.js";import{u as q}from"./Users-8de3d10e.js";import{V as z}from"./VForm-bdb557fd.js";import{a as H,V as g}from"./VRow-42c935bc.js";const K=["value"],L={key:1,class:"d-block"},X={__name:"Edit",setup(O){const v=R(),l=q(),r=d({role_id:null,name:"",permissions:[]}),w=function(){this.$router.go(-1)},p=d(!1),C=d({name:[e=>e?!0:"Name is required",e=>(e==null?void 0:e.length)>=4?!0:"Name must be less than 4 charcters"]}),B=async e=>{await l.updateRole(e)},{getRoleById:h}=N(l);return S(async()=>{await l.fetchPermissions(),await l.fetchRoles();const e=h.value(v.params.id);r.value.role_id=v.params.id,r.value.name=e.name,r.value.permissions=e.permissions}),(e,o)=>(i(),u(y,null,[s(c,{height:"45",class:"mb-5 text-white",color:"#A9AB7F",onClick:w},{default:t(()=>[s(x,{start:"",icon:"mdi-arrow-left"}),m(" Back ")]),_:1}),s(j,{class:"mx-auto pa-12 pb-8",elevation:"8"},{default:t(()=>[n(l).successMsg?(i(),b(_,{key:0,class:"custom-alert-class",type:"success",variant:"tonal",border:"start",elevation:"2",closable:"","close-label":e.$t("close")},{default:t(()=>[$("small",null,f(n(l).successMsg),1)]),_:1},8,["close-label"])):k("",!0),n(l).errors.length!==0?(i(),b(_,{key:1,class:"custom-alert-class",type:"error",variant:"tonal",border:"start",elevation:"2",closable:"","close-label":e.$t("close")},{default:t(()=>[typeof n(l).errors=="object"?(i(!0),u(y,{key:0},E(n(l).errors,(a,V)=>(i(),u("small",{class:"d-block",value:V,key:V},f(a),9,K))),128)):(i(),u("small",L,f(n(l).errors),1))]),_:1},8,["close-label"])):k("",!0),s(F,{class:"mb-2"},{default:t(()=>[m(" Edit Role ")]),_:1}),s(z,{modelValue:p.value,"onUpdate:modelValue":o[3]||(o[3]=a=>p.value=a),onSubmit:o[4]||(o[4]=T(a=>B(r.value),["prevent"]))},{default:t(()=>[s(H,null,{default:t(()=>[s(g,{cols:"12",md:"4"},{default:t(()=>[s(A,{modelValue:r.value.name,"onUpdate:modelValue":o[0]||(o[0]=a=>r.value.name=a),rules:C.value.name,counter:4,label:"Name",variant:"solo",required:""},null,8,["modelValue","rules"])]),_:1}),s(g,{cols:"12",md:"4"},{default:t(()=>[s(M,{modelValue:r.value.permissions,"onUpdate:modelValue":o[1]||(o[1]=a=>r.value.permissions=a),items:n(l).permissions,label:"Permissions",variant:"solo","item-title":a=>a.name,"item-value":a=>a.id,"item-disabled":!1,multiple:""},null,8,["modelValue","items","item-title","item-value"])]),_:1})]),_:1}),s(P,null,{default:t(()=>[s(c,{color:"error",variant:"elevated",onClick:o[2]||(o[2]=a=>e.$router.go(-1))},{default:t(()=>[m("Cancel")]),_:1}),s(c,{type:"submit",color:"success",variant:"elevated"},{default:t(()=>[U(s(D,{indeterminate:"",color:"white",class:"mx-3",size:"25"},null,512),[[I,n(l).loading]]),m(" Save ")]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})],64))}};export{X as default};
