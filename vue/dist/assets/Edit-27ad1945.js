import{af as R,K as d,al as N,ab as S,o as i,c as u,g as a,w as t,V as $,e as m,h as c,a4 as n,a as b,a7 as _,d as x,t as f,n as k,F as g,j as F,ad as A,k as E,a8 as M,aj as T,a2 as U,i as j,aa as P,v as q,a0 as D}from"./main-31a3df1d.js";import{u as I}from"./Users-b7b032bc.js";import{V as z}from"./VForm-0cc142ca.js";import{V as K,a as y}from"./VRow-f2563105.js";const L=["value"],G={key:1,class:"d-block"},X={__name:"Edit",setup(H){const v=R(),l=I(),r=d({role_id:null,name:"",permissions:[]}),w=function(){this.$router.go(-1)},p=d(!1),C=d({name:[e=>e?!0:"Name is required",e=>(e==null?void 0:e.length)>=4?!0:"Name must be less than 4 charcters"]}),h=async e=>{await l.updateRole(e)},{getRoleById:B}=N(l);return S(async()=>{await l.fetchPermissions(),await l.fetchRoles();const e=B.value(v.params.id);r.value.role_id=v.params.id,r.value.name=e.name,r.value.permissions=e.permissions}),(e,o)=>(i(),u(g,null,[a(c,{height:"45",class:"mb-5 text-white",color:"#A9AB7F",onClick:w},{default:t(()=>[a($,{start:"",icon:"mdi-arrow-left"}),m(" Back ")]),_:1}),a(D,{class:"mx-auto pa-12 pb-8",elevation:"8"},{default:t(()=>[n(l).successMsg?(i(),b(_,{key:0,class:"custom-alert-class",type:"success",variant:"tonal",border:"start",elevation:"2",closable:"","close-label":e.$t("close")},{default:t(()=>[x("small",null,f(n(l).successMsg),1)]),_:1},8,["close-label"])):k("",!0),n(l).errors.length!==0?(i(),b(_,{key:1,class:"custom-alert-class",type:"error",variant:"tonal",border:"start",elevation:"2",closable:"","close-label":e.$t("close")},{default:t(()=>[typeof n(l).errors=="object"?(i(!0),u(g,{key:0},F(n(l).errors,(s,V)=>(i(),u("small",{class:"d-block",value:V,key:V},f(s),9,L))),128)):(i(),u("small",G,f(n(l).errors),1))]),_:1},8,["close-label"])):k("",!0),a(A,{class:"mb-2"},{default:t(()=>[m(" Edit Role ")]),_:1}),a(z,{modelValue:p.value,"onUpdate:modelValue":o[3]||(o[3]=s=>p.value=s),onSubmit:o[4]||(o[4]=E(s=>h(r.value),["prevent"]))},{default:t(()=>[a(K,null,{default:t(()=>[a(y,{cols:"12",md:"4"},{default:t(()=>[a(M,{modelValue:r.value.name,"onUpdate:modelValue":o[0]||(o[0]=s=>r.value.name=s),rules:C.value.name,counter:4,label:"Name",variant:"solo",required:""},null,8,["modelValue","rules"])]),_:1}),a(y,{cols:"12",md:"4"},{default:t(()=>[a(T,{modelValue:r.value.permissions,"onUpdate:modelValue":o[1]||(o[1]=s=>r.value.permissions=s),items:n(l).permissions,label:"Permissions",variant:"solo","item-title":s=>s.name,"item-value":s=>s.id,"item-disabled":!1,multiple:""},null,8,["modelValue","items","item-title","item-value"])]),_:1})]),_:1}),a(U,null,{default:t(()=>[a(c,{color:"error",variant:"elevated",onClick:o[2]||(o[2]=s=>e.$router.go(-1))},{default:t(()=>[m("Cancel")]),_:1}),a(c,{type:"submit",color:"success",variant:"elevated"},{default:t(()=>[j(a(P,{indeterminate:"",color:"white",class:"mx-3",size:"25"},null,512),[[q,n(l).loading]]),m(" Save ")]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})],64))}};export{X as default};
