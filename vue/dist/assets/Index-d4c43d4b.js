import{ai as z,a3 as p,ac as B,o as m,f as N,x as l,q as e,a8 as P,a4 as n,aa as T,i,aj as U,a6 as F,ae as $,ak as A,h as r,e as c,F as g,z as x,t as f,G as y}from"./main-0ea29110.js";import{u as D}from"./Users-755a22fd.js";import{V as u,a as _}from"./VRow-72adb336.js";import{V as E}from"./VPagination-983b64b4.js";const M={__name:"Index",setup(j){const t=D(),k=z(),V=p([]),v=p([{text:"Id",value:"id",sortable:!1},{text:"Name",align:"start",sortable:!1,value:"name"},{text:"Actions",value:"actions",sortable:!1}]),C=p([5,10,20]),d=async()=>{await t.fetchRoles(),V.value=t.roles.map(h)},b=s=>{t.params.page=s,d()},I=s=>{t.params.size=s,t.params.page=1,d()},h=s=>({id:s.id,name:s.name,module:s.module}),R=s=>{k.push({name:"EditRole",params:{id:s}})},S=s=>{confirm("Are you sure you want to delete?")&&(t.deleteRole(s),d())};return B(()=>{d()}),(s,o)=>(m(),N(_,{align:"center",class:"list px-3 mx-auto"},{default:l(()=>[e(u,{cols:"12",sm:"8"},{default:l(()=>[e(P,{modelValue:n(t).params.keyword,"onUpdate:modelValue":o[0]||(o[0]=a=>n(t).params.keyword=a),label:"Search by Name",onKeyup:o[1]||(o[1]=a=>{s.page=1,d()})},null,8,["modelValue"])]),_:1}),e(u,{cols:"12",sm:"4"},{default:l(()=>[e(T,{color:"success",to:{name:"CreateRole"}},{default:l(()=>[i(" Create ")]),_:1})]),_:1}),e(u,{cols:"12",sm:"12"},{default:l(()=>[e(_,null,{default:l(()=>[e(u,{cols:"4",sm:"3"},{default:l(()=>[e(U,{modelValue:n(t).params.size,"onUpdate:modelValue":[o[2]||(o[2]=a=>n(t).params.size=a),I],items:C.value,label:"Items per Page"},null,8,["modelValue","items"])]),_:1}),e(u,{cols:"12",sm:"9"},{default:l(()=>[e(E,{rounded:"circle",modelValue:n(t).params.page,"onUpdate:modelValue":[o[3]||(o[3]=a=>n(t).params.page=a),b],length:n(t).params.totalPages,"total-visible":"7","next-icon":"mdi-menu-right","prev-icon":"mdi-menu-left"},null,8,["modelValue","length"])]),_:1})]),_:1})]),_:1}),e(u,{cols:"12",sm:"12"},{default:l(()=>[e(F,{class:"mx-auto",tile:""},{default:l(()=>[e($,null,{default:l(()=>[i("Roles")]),_:1}),e(A,null,{default:l(()=>[r("thead",null,[r("tr",null,[(m(!0),c(g,null,x(v.value,a=>(m(),c("th",{key:a.id},f(a.text),1))),128))])]),r("tbody",null,[(m(!0),c(g,null,x(V.value,a=>(m(),c("tr",{key:a.id},[r("td",null,f(a.id),1),r("td",null,f(a.name),1),r("td",null,[e(y,{small:"",color:"primary",class:"mr-2",onClick:w=>R(a.id)},{default:l(()=>[i("mdi-pencil")]),_:2},1032,["onClick"]),e(y,{small:"",color:"error",onClick:w=>S(a.id)},{default:l(()=>[i("mdi-delete")]),_:2},1032,["onClick"])])]))),128))])]),_:1})]),_:1})]),_:1})]),_:1}))}};export{M as default};