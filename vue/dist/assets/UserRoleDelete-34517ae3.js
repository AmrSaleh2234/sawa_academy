import{_ as u,g as m,o,c as l,i as e,w as i,F as _,l as h,d as g,f as c,t as f,X as w,j as x}from"./main-cb98dd2c.js";import{V as p,a as d}from"./VRow-42c935bc.js";const k={props:["id"],data(){return{user_permissions:[],new_permissions:[]}},methods:{syncPermissions(){console.log(this.new_permissions),m.post(`/api/users/${this.id}/sync-permissions`,{roles:this.new_permissions}).then(s=>{console.log(s)}).catch(s=>{console.log(s)})},getUserPermissions(){m.get(`/api/users/${this.id}/permissions`).then(s=>{this.user_permissions=s.data.user_permissions,this.user_permissions.forEach(r=>{this.new_permissions.push(r)}),console.log(this.user_permissions),console.log(this.new_permissions)}).catch(s=>{console.log(s)})},removePer(s){this.new_permissions.splice(this.new_permissions.indexOf(s),1),this.user_permissions.splice(this.user_permissions.indexOf(s),1)}},mounted(){this.getUserPermissions()}},y={style:{margin:"1.5rem 0",padding:"auto 0"}};function V(s,r,b,C,n,t){return o(),l("div",y,[e(d,{style:{"min-height":"80vh"}},{default:i(()=>[e(p,{sm:"12"},{default:i(()=>[e(d,null,{default:i(()=>[(o(!0),l(_,null,h(n.user_permissions,a=>(o(),g(p,{style:{background:"gainsboro",margin:"0.3rem 0.5rem",padding:"0.5rem 1rem","border-radius":"99px",cursor:"pointer"},md:4,sm:6,onClick:P=>t.removePer(a)},{default:i(()=>[c(f(a.name),1)]),_:2},1032,["onClick"]))),256)),e(w)]),_:1})]),_:1})]),_:1}),e(x,{color:"success",onClick:t.syncPermissions,disabled:n.new_permissions.length==0},{default:i(()=>[c(" Submit ")]),_:1},8,["onClick","disabled"])])}const S=u(k,[["render",V]]);export{S as default};
