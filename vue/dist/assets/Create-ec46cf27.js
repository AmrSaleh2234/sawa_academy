import{aK as B,a2 as n,ab as M,o as u,f as _,x as t,a3 as d,V as h,h as i,t as m,p as b,e as c,F as C,z as U,q as s,ad as $,i as q,l as E,a7 as g,w as x,D as P,af as R,a9 as T,aa as A,v as I,a5 as j}from"./main-f8e19554.js";import{u as z}from"./Users-5bfeb5bd.js";import{V as L}from"./VForm-33d4b4fe.js";import{a as y,V as p}from"./VRow-92dd60fa.js";const K=["value"],G={key:1,class:"d-block"},H={for:"role",style:{display:"block"}},J=["value"],O={class:"relative"},Q={for:"image"},W=["rules"],X=["src"],se={__name:"Create",setup(Y){B();const o=z(),V=n(""),F=n(""),w=n(null);n(""),n(!1);const S=()=>{w.value.click()},r=n({name:"",title:"",email:"",image:"",role:null,password:""}),N=e=>{const l=e.target.files[0],a=new FileReader;a.readAsDataURL(l),a.onload=f=>{V.value=f.target.result,F.value=l,r.value.image=l}},k=n(!1),v=n({name:[e=>e?!0:"Name is required",e=>(e==null?void 0:e.length)>=4?!0:"Name must be less than 4 charcters"],title:[e=>e?!0:"title is required"],email:[e=>e?!0:"E-mail is requred.",e=>/.+@.+\..+/.test(e)?!0:"E-mail must be valid."],password:[e=>e?!0:"Password is required",e=>(e==null?void 0:e.length)>=4?!0:"Password must be less than 6 charcters"]}),D=async e=>{const l=new FormData;l.append("name",e.name),l.append("title",e.title),l.append("email",e.email),l.append("image",e.image),l.append("role",e.role),l.append("password",e.password),console.log(l.get("image")),o.addUser(l)};return M(async()=>{o.fetchRoles()}),(e,l)=>(u(),_(j,{class:"mx-auto pa-12 pb-8",elevation:"8"},{default:t(()=>[d(o).successMsg?(u(),_(h,{key:0,class:"custom-alert-class",type:"success",variant:"tonal",border:"start",elevation:"2",closable:"","close-label":e.$t("close")},{default:t(()=>[i("small",null,m(d(o).successMsg),1)]),_:1},8,["close-label"])):b("",!0),d(o).errors.length!==0?(u(),_(h,{key:1,class:"custom-alert-class",type:"error",variant:"tonal",border:"start",elevation:"2",closable:"","close-label":e.$t("close")},{default:t(()=>[typeof d(o).errors=="object"?(u(!0),c(C,{key:0},U(d(o).errors,(a,f)=>(u(),c("small",{class:"d-block",value:f,key:f},m(a[0]),9,K))),128)):(u(),c("small",G,m(d(o).errors),1))]),_:1},8,["close-label"])):b("",!0),s($,{class:"mb-2"},{default:t(()=>[q(" Create User ")]),_:1}),s(L,{modelValue:k.value,"onUpdate:modelValue":l[5]||(l[5]=a=>k.value=a),onSubmit:l[6]||(l[6]=E(a=>D(r.value),["prevent"]))},{default:t(()=>[s(y,null,{default:t(()=>[s(p,{cols:"12",md:"4"},{default:t(()=>[s(g,{modelValue:r.value.name,"onUpdate:modelValue":l[0]||(l[0]=a=>r.value.name=a),rules:v.value.name,counter:4,label:"Name",variant:"solo",required:""},null,8,["modelValue","rules"])]),_:1}),s(p,{cols:"12",md:"4"},{default:t(()=>[s(g,{modelValue:r.value.title,"onUpdate:modelValue":l[1]||(l[1]=a=>r.value.title=a),rules:v.value.title,label:"Title",variant:"solo",required:""},null,8,["modelValue","rules"])]),_:1})]),_:1}),s(y,null,{default:t(()=>[s(p,{cols:"12",md:"4"},{default:t(()=>[i("label",H,m(e.$t("choose_role")),1),x(i("select",{name:"role",id:"role","onUpdate:modelValue":l[2]||(l[2]=a=>r.value.role=a),style:{width:"100%",border:"1px solid gray","border-radius":"5px"}},[(u(!0),c(C,null,U(d(o).roles,a=>(u(),c("option",{value:a.id},m(a.name),9,J))),256))],512),[[P,r.value.role]])]),_:1}),s(p,{cols:"12",md:"4",style:{display:"flex","align-items":"center"}},{default:t(()=>[i("div",O,[i("label",Q,m(e.$t("personal_image")),1),i("input",{style:{border:"1px solid gray",padding:"0 1rem"},class:"rounded",type:"file",ref_key:"fileInput",ref:w,name:"image",id:"image",onChange:N,rules:v.value.name},null,40,W)]),V.value.length>0?(u(),c("img",{key:0,onClick:S,src:V.value,class:"uploaded-image relative cursor-pointer rounded object-cover"},null,8,X)):b("",!0)]),_:1})]),_:1}),s(y,null,{default:t(()=>[s(p,{cols:"12",md:"4"},{default:t(()=>[s(g,{modelValue:r.value.email,"onUpdate:modelValue":l[3]||(l[3]=a=>r.value.email=a),rules:v.value.email,label:"E-mail",variant:"solo",required:""},null,8,["modelValue","rules"])]),_:1}),s(p,{cols:"12",md:"4"},{default:t(()=>[s(g,{modelValue:r.value.password,"onUpdate:modelValue":l[4]||(l[4]=a=>r.value.password=a),rules:v.value.password,counter:6,label:"Password",variant:"solo",required:""},null,8,["modelValue","rules"])]),_:1})]),_:1}),s(R,null,{default:t(()=>[s(T,{type:"submit",color:"success",variant:"elevated"},{default:t(()=>[x(s(A,{indeterminate:"",color:"white",class:"mx-3",size:"25"},null,512),[[I,d(o).loading]]),q(" Save ")]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1}))}};export{se as default};