import{at as P,a1 as g,am as T,o as r,f as V,w as s,l as t,aj as A,af as o,n as E,i as f,t as n,ai as k,h as u,G as _,e as m,F as b,q as v,au as F,aa as M,ao as R,av as j,V as C}from"./main-0138b0d4.js";import{u as D}from"./Users-41a94aa6.js";import{a as c,V as x}from"./VRow-ed6b3c8d.js";import{V as q}from"./VPagination-02458c86.js";const G=["value"],K={key:1,class:"d-block"},W={__name:"Index",setup(L){const e=D(),h=P(),y=g([]),U=g([{text:"Id",value:"id",sortable:!1},{text:"Name",align:"start",sortable:!1,value:"name"},{text:"Email",align:"start",sortable:!1,value:"email"},{text:"Role",align:"start",sortable:!1,value:"roles"},{text:"Actions",value:"actions",sortable:!1}]),I=g([5,10,20]),i=async()=>{await e.fetchUsers(),y.value=e.users.map(N)},w=l=>{e.params.page=l,i()},S=l=>{e.params.size=l,e.params.page=1,i()},N=l=>({id:l.id,name:l.name,email:l.email,role:l.roles[0]}),$=l=>{h.push({name:"EditUser",params:{id:l}})},z=l=>{confirm("Are you sure you want to delete?")&&(e.deleteUser(l),i())};return T(()=>{i()}),(l,d)=>(r(),V(x,{align:"center",class:"list px-3 mx-auto"},{default:s(()=>[t(c,{cols:"12",sm:"8"},{default:s(()=>[t(A,{modelValue:o(e).params.keyword,"onUpdate:modelValue":d[0]||(d[0]=a=>o(e).params.keyword=a),label:"Search by Name",onKeyup:d[1]||(d[1]=a=>{l.page=1,i()})},null,8,["modelValue"])]),_:1}),t(c,{cols:"12",sm:"4"},{default:s(()=>[t(E,{color:"success",to:{name:"CreateUser"}},{default:s(()=>[f(n(l.$t("create_button")),1)]),_:1})]),_:1}),t(c,{cols:"12",sm:"12"},{default:s(()=>[o(e).successMsg?(r(),V(k,{key:0,class:"custom-alert-class",type:"success",variant:"tonal",border:"start",elevation:"2",closable:"","close-label":l.$t("close")},{default:s(()=>[u("small",null,n(o(e).successMsg),1)]),_:1},8,["close-label"])):_("",!0),o(e).errors.length!==0?(r(),V(k,{key:1,class:"custom-alert-class",type:"error",variant:"tonal",border:"start",elevation:"2",closable:"","close-label":l.$t("close")},{default:s(()=>[typeof o(e).errors=="object"?(r(!0),m(b,{key:0},v(o(e).errors,(a,p)=>(r(),m("small",{class:"d-block",value:p,key:p},n(a),9,G))),128)):(r(),m("small",K,n(o(e).errors),1))]),_:1},8,["close-label"])):_("",!0),t(x,null,{default:s(()=>[t(c,{cols:"4",sm:"3"},{default:s(()=>[t(F,{modelValue:o(e).params.size,"onUpdate:modelValue":[d[2]||(d[2]=a=>o(e).params.size=a),S],items:I.value,label:"Items per Page"},null,8,["modelValue","items"])]),_:1}),t(c,{cols:"12",sm:"9"},{default:s(()=>[t(q,{rounded:"circle",modelValue:o(e).params.page,"onUpdate:modelValue":[d[3]||(d[3]=a=>o(e).params.page=a),w],length:o(e).params.totalPages,"total-visible":"7","next-icon":"mdi-menu-right","prev-icon":"mdi-menu-left"},null,8,["modelValue","length"])]),_:1})]),_:1})]),_:1}),t(c,{cols:"12",sm:"12"},{default:s(()=>[t(M,{class:"mx-auto",tile:""},{default:s(()=>[t(R,null,{default:s(()=>[f("Users")]),_:1}),t(j,null,{default:s(()=>[u("thead",null,[u("tr",null,[(r(!0),m(b,null,v(U.value,a=>(r(),m("th",{key:a.id},n(a.text),1))),128))])]),u("tbody",null,[(r(!0),m(b,null,v(y.value,a=>{var p;return r(),m("tr",{key:a.id},[u("td",null,n(a.id),1),u("td",null,n(a.name),1),u("td",null,n(a.email),1),u("td",null,n((p=a.role)==null?void 0:p.name),1),u("td",null,[t(C,{small:"",color:"primary",class:"mr-2",onClick:B=>$(a.id)},{default:s(()=>[f("mdi-pencil")]),_:2},1032,["onClick"]),t(C,{small:"",color:"error",onClick:B=>z(a.id)},{default:s(()=>[f("mdi-delete")]),_:2},1032,["onClick"])])])}),128))])]),_:1})]),_:1})]),_:1})]),_:1}))}};export{W as default};
