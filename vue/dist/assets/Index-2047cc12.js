import{ai as N,K as o,ab as S,o as m,a as w,w as s,g as l,a8 as T,h as z,e as x,t as i,aj as F,a0 as R,ad as U,ak as $,d,c as f,F as _,j as b,$ as j}from"./main-31a3df1d.js";import{a as r,V as y}from"./VRow-f2563105.js";import{V as D}from"./VPagination-dd70e37b.js";const L={__name:"Index",setup(K){N();const V=o([]),v=o(""),P=o([{text:"Id",value:"id",sortable:!1},{text:"Name",align:"start",sortable:!1,value:"name"},{text:"Module",value:"module",sortable:!1}]),u=o(1),g=o(0),c=o(10),C=o([5,10,20]),k=(a,t,e)=>{let n={};return a&&(n.name=a),t&&(n.page=t),e&&(n.size=e),n},p=async()=>{const a=k(v.value,u.value,c.value),t=await j.post("/api/permissions",a),{data:e,last_page:n}=t.data.permissions;V.value=e.map(I),g.value=n},h=a=>{u.value=a,p()},B=a=>{c.value=a,u.value=1,p()},I=a=>({id:a.id,name:a.name,module:a.module});return S(()=>{p()}),(a,t)=>(m(),w(y,{align:"center",class:"list px-3 mx-auto"},{default:s(()=>[l(r,{cols:"12",sm:"8"},{default:s(()=>[l(T,{modelValue:v.value,"onUpdate:modelValue":t[0]||(t[0]=e=>v.value=e),label:"Search by Name",onKeyup:t[1]||(t[1]=e=>{u.value=1,p()})},null,8,["modelValue"])]),_:1}),l(r,{cols:"12",sm:"4"},{default:s(()=>[l(z,{color:"success",to:{name:"CreatePermission"},disabled:""},{default:s(()=>[x(i(a.$t("create_button")),1)]),_:1})]),_:1}),l(r,{cols:"12",sm:"12"},{default:s(()=>[l(y,null,{default:s(()=>[l(r,{cols:"4",sm:"3"},{default:s(()=>[l(F,{modelValue:c.value,"onUpdate:modelValue":[t[2]||(t[2]=e=>c.value=e),B],items:C.value,label:"Items per Page"},null,8,["modelValue","items"])]),_:1}),l(r,{cols:"12",sm:"9"},{default:s(()=>[l(D,{rounded:"circle",modelValue:u.value,"onUpdate:modelValue":[t[3]||(t[3]=e=>u.value=e),h],length:g.value,"total-visible":"3","next-icon":"mdi-menu-right","prev-icon":"mdi-menu-left"},null,8,["modelValue","length"])]),_:1})]),_:1})]),_:1}),l(r,{cols:"12",sm:"12"},{default:s(()=>[l(R,{class:"mx-auto",tile:""},{default:s(()=>[l(U,null,{default:s(()=>[x("Permissions")]),_:1}),l($,null,{default:s(()=>[d("thead",null,[d("tr",null,[(m(!0),f(_,null,b(P.value,e=>(m(),f("th",{key:e.id},i(e.text),1))),128))])]),d("tbody",null,[(m(!0),f(_,null,b(V.value,e=>(m(),f("tr",{key:e.id},[d("td",null,i(e.id),1),d("td",null,i(e.name),1),d("td",null,i(e.module),1)]))),128))])]),_:1})]),_:1})]),_:1})]),_:1}))}};export{L as default};
