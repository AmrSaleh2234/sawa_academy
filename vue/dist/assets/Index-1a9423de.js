import{S as N,x as o,J as T,o as m,d as h,w as s,i as l,G as w,j as U,f as x,t as i,T as z,B as F,L as R,U as D,a as d,c as f,F as _,l as b,g as L}from"./main-7baa27c2.js";import{V as r,a as y}from"./VRow-909af822.js";import{V as M}from"./VPagination-85b498c5.js";const G={__name:"Index",setup($){N();const V=o([]),v=o(""),P=o([{text:"Id",value:"id",sortable:!1},{text:"Name",align:"start",sortable:!1,value:"name"},{text:"Module",value:"module",sortable:!1}]),u=o(1),g=o(0),c=o(10),C=o([5,10,20]),B=(a,t,e)=>{let n={};return a&&(n.name=a),t&&(n.page=t),e&&(n.size=e),n},p=async()=>{const a=B(v.value,u.value,c.value),t=await L.post("/api/permissions",a),{data:e,last_page:n}=t.data.permissions;V.value=e.map(I),g.value=n},S=a=>{u.value=a,p()},k=a=>{c.value=a,u.value=1,p()},I=a=>({id:a.id,name:a.name,module:a.module});return T(()=>{p()}),(a,t)=>(m(),h(y,{align:"center",class:"list px-3 mx-auto"},{default:s(()=>[l(r,{cols:"12",sm:"8"},{default:s(()=>[l(w,{modelValue:v.value,"onUpdate:modelValue":t[0]||(t[0]=e=>v.value=e),label:"Search by Name",onKeyup:t[1]||(t[1]=e=>{u.value=1,p()})},null,8,["modelValue"])]),_:1}),l(r,{cols:"12",sm:"4"},{default:s(()=>[l(U,{color:"success",to:{name:"CreatePermission"},disabled:""},{default:s(()=>[x(i(a.$t("create_button")),1)]),_:1})]),_:1}),l(r,{cols:"12",sm:"12"},{default:s(()=>[l(y,null,{default:s(()=>[l(r,{cols:"4",sm:"3"},{default:s(()=>[l(z,{modelValue:c.value,"onUpdate:modelValue":[t[2]||(t[2]=e=>c.value=e),k],items:C.value,label:"Items per Page"},null,8,["modelValue","items"])]),_:1}),l(r,{cols:"12",sm:"9"},{default:s(()=>[l(M,{rounded:"circle",modelValue:u.value,"onUpdate:modelValue":[t[3]||(t[3]=e=>u.value=e),S],length:g.value,"total-visible":"3","next-icon":"mdi-menu-right","prev-icon":"mdi-menu-left"},null,8,["modelValue","length"])]),_:1})]),_:1})]),_:1}),l(r,{cols:"12",sm:"12"},{default:s(()=>[l(F,{class:"mx-auto",tile:""},{default:s(()=>[l(R,null,{default:s(()=>[x("Permissions")]),_:1}),l(D,null,{default:s(()=>[d("thead",null,[d("tr",null,[(m(!0),f(_,null,b(P.value,e=>(m(),f("th",{key:e.id},i(e.text),1))),128))])]),d("tbody",null,[(m(!0),f(_,null,b(V.value,e=>(m(),f("tr",{key:e.id},[d("td",null,i(e.id),1),d("td",null,i(e.name),1),d("td",null,i(e.module),1)]))),128))])]),_:1})]),_:1})]),_:1})]),_:1}))}};export{G as default};
