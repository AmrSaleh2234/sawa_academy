import{_ as u,n,o as l,c,i as p,v as _,g as t,a7 as g,w as a,d as h,a8 as f,F as x,j as V,a as k,e as w,h as C}from"./main-c5c2d17b.js";import{a as d,V as v}from"./VRow-e40324ae.js";import{V as P}from"./VCheckbox-951649a1.js";const b={props:["id"],data(){return{permissions:[],user_permissions:[],new_permissions:[],checked_permissions:[],permission_name:"",alert:{show:!1,text:"",color:""}}},methods:{getPermissions(){n.post("/api/permissions",{name:this.permission_name,name:this.permission_name}).then(s=>{this.permissions=s.data.permissions.data,console.log(s)}).catch(s=>{console.log(s)})},addPermissions(){console.log(this.checked_permissions),n.post(`/api/users/${this.id}/add-permissions`,{roles:this.checked_permissions}).then(s=>{this.alert.color="success",this.alert.text=s.data.message,this.alert.show=!0,setTimeout(()=>{this.alert.show=!1},3e3),console.log(s)}).catch(s=>{this.alert.color="error",this.alert.text=s.response.data.message,this.alert.show=!0,setTimeout(()=>{this.alert.show=!1},3e3),console.log(s)})},getUserPermissions(){n.get(`/api/users/${this.id}/permissions`).then(s=>{this.user_permissions=s.data.user_permissions,this.user_permissions.forEach(e=>{this.checked_permissions[e.id]=e.id})}).catch(s=>{console.log(s)})},onCheckboxChange(s,e){e===!0&&this.checked_permissions.push(s),console.log(s),console.log(e)}},mounted(){this.getUserPermissions(),this.getPermissions()},watch:{permission_name(){this.getPermissions()}}},U={style:{margin:"1.5rem 0",padding:"auto 0"}},B={class:"d-flex flex-row flex-wrap"};function y(s,e,N,T,o,m){return l(),c("div",U,[p(t(g,{type:o.alert.color,text:o.alert.text},null,8,["type","text"]),[[_,o.alert.show]]),t(v,null,{default:a(()=>[t(d,{sm:"12"},{default:a(()=>[h("div",null,[t(d,{sm:"12",md:"6"},{default:a(()=>[t(f,{modelValue:o.permission_name,"onUpdate:modelValue":e[0]||(e[0]=i=>o.permission_name=i),label:"Permission Name",style:{margin:"2rem 0"},"hide-details":"auto"},null,8,["modelValue"])]),_:1}),h("div",B,[(l(!0),c(x,null,V(o.permissions,(i,F)=>(l(),k(P,{modelValue:o.checked_permissions[i.id],"onUpdate:modelValue":r=>o.checked_permissions[i.id]=r,label:i.name,color:"success",value:i.id,onChange:r=>m.onCheckboxChange(i.id,r.target.checked)},null,8,["modelValue","onUpdate:modelValue","label","value","onChange"]))),256))])])]),_:1})]),_:1}),t(C,{color:"success",onClick:m.addPermissions},{default:a(()=>[w(" Submit ")]),_:1},8,["onClick"])])}const j=u(b,[["render",y]]);export{j as default};
