import{N as z,s as V,G as T,o as r,d as g,w as s,i as t,D as A,x as o,j as D,f,t as n,B as k,a as u,C as _,c as m,F as b,l as y,O as E,P as F,V as C}from"./main-e08b3f34.js";import{u as M}from"./Users-2f879168.js";import{V as c,a as x}from"./VRow-8c46bdd4.js";import{V as R}from"./VPagination-a7cb541d.js";import{V as j,b as G}from"./VCard-bbba4d56.js";const K=["value"],L={key:1,class:"d-block"},X={__name:"Index",setup(O){const e=M(),h=z(),v=V([]),U=V([{text:"Id",value:"id",sortable:!1},{text:"Name",align:"start",sortable:!1,value:"name"},{text:"Email",align:"start",sortable:!1,value:"email"},{text:"Role",align:"start",sortable:!1,value:"roles"},{text:"Actions",value:"actions",sortable:!1}]),I=V([5,10,20]),i=async()=>{await e.fetchUsers(),v.value=e.users.map(S)},w=l=>{e.params.page=l,i()},N=l=>{e.params.size=l,e.params.page=1,i()},S=l=>({id:l.id,name:l.name,email:l.email,role:l.roles[0]}),B=l=>{h.push({name:"EditUser",params:{id:l}})},P=l=>{confirm("Are you sure you want to delete?")&&(e.deleteUser(l),i())};return T(()=>{i()}),(l,d)=>(r(),g(x,{align:"center",class:"list px-3 mx-auto"},{default:s(()=>[t(c,{cols:"12",sm:"8"},{default:s(()=>[t(A,{modelValue:o(e).params.keyword,"onUpdate:modelValue":d[0]||(d[0]=a=>o(e).params.keyword=a),label:"Search by Name",onKeyup:d[1]||(d[1]=a=>{l.page=1,i()})},null,8,["modelValue"])]),_:1}),t(c,{cols:"12",sm:"4"},{default:s(()=>[t(D,{color:"success",to:{name:"CreateUser"}},{default:s(()=>[f(n(l.$t("create_button")),1)]),_:1})]),_:1}),t(c,{cols:"12",sm:"12"},{default:s(()=>[o(e).successMsg?(r(),g(k,{key:0,class:"custom-alert-class",type:"success",variant:"tonal",border:"start",elevation:"2",closable:"","close-label":l.$t("close")},{default:s(()=>[u("small",null,n(o(e).successMsg),1)]),_:1},8,["close-label"])):_("",!0),o(e).errors.length!==0?(r(),g(k,{key:1,class:"custom-alert-class",type:"error",variant:"tonal",border:"start",elevation:"2",closable:"","close-label":l.$t("close")},{default:s(()=>[typeof o(e).errors=="object"?(r(!0),m(b,{key:0},y(o(e).errors,(a,p)=>(r(),m("small",{class:"d-block",value:p,key:p},n(a),9,K))),128)):(r(),m("small",L,n(o(e).errors),1))]),_:1},8,["close-label"])):_("",!0),t(x,null,{default:s(()=>[t(c,{cols:"4",sm:"3"},{default:s(()=>[t(E,{modelValue:o(e).params.size,"onUpdate:modelValue":[d[2]||(d[2]=a=>o(e).params.size=a),N],items:I.value,label:"Items per Page"},null,8,["modelValue","items"])]),_:1}),t(c,{cols:"12",sm:"9"},{default:s(()=>[t(R,{rounded:"circle",modelValue:o(e).params.page,"onUpdate:modelValue":[d[3]||(d[3]=a=>o(e).params.page=a),w],length:o(e).params.totalPages,"total-visible":"7","next-icon":"mdi-menu-right","prev-icon":"mdi-menu-left"},null,8,["modelValue","length"])]),_:1})]),_:1})]),_:1}),t(c,{cols:"12",sm:"12"},{default:s(()=>[t(j,{class:"mx-auto",tile:""},{default:s(()=>[t(G,null,{default:s(()=>[f("Users")]),_:1}),t(F,null,{default:s(()=>[u("thead",null,[u("tr",null,[(r(!0),m(b,null,y(U.value,a=>(r(),m("th",{key:a.id},n(a.text),1))),128))])]),u("tbody",null,[(r(!0),m(b,null,y(v.value,a=>{var p;return r(),m("tr",{key:a.id},[u("td",null,n(a.id),1),u("td",null,n(a.name),1),u("td",null,n(a.email),1),u("td",null,n((p=a.role)==null?void 0:p.name),1),u("td",null,[t(C,{small:"",color:"primary",class:"mr-2",onClick:$=>B(a.id)},{default:s(()=>[f("mdi-pencil")]),_:2},1032,["onClick"]),t(C,{small:"",color:"error",onClick:$=>P(a.id)},{default:s(()=>[f("mdi-delete")]),_:2},1032,["onClick"])])])}),128))])]),_:1})]),_:1})]),_:1})]),_:1}))}};export{X as default};
