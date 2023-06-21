import{u as y,r as c,a as h,o as u,c as p,b as e,d as l,V as k,w as t,s as C,e as S,F as E,f as F,t as w,g as L,h as B,i as V,j as r,k as i,l as P,m as I,v as N,n as j,p as A}from"./main-c4cf0910.js";import{V as b,a as x}from"./VCard-13180194.js";import{V as T}from"./VAlert-6b85afee.js";import{V as U}from"./VForm-1c742c26.js";const $={class:"py-4"},q=["value"],z={key:1,class:"d-block"},D=r("div",{class:"text-subtitle-1 text-medium-emphasis"},"Account",-1),M={class:"text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"},R=r("p",null,"Sign in with your email and password:",-1),G=r("p",null,[i("Email: "),r("strong",null,"admin@admin.com")],-1),H=r("p",null,[i("Password: "),r("strong",null,"password")],-1),X={__name:"Login",setup(J){const n=y(),m=c(!1),d=c({email:"admin@admin.com",password:"password"}),v=c(!1),_=c({email:[o=>!!o||"E-mail is required",o=>/.+@.+/.test(o)||"E-mail must be valid"],password:[o=>!!o||"Password is required"]});return(o,a)=>{const f=h("router-link");return u(),p("div",$,[e(k,{class:"mx-auto mb-10","max-width":"228",src:l(C)},null,8,["src"]),e(b,{class:"mx-auto pa-12 pb-8",elevation:"8","max-width":"448",rounded:"lg"},{default:t(()=>[l(n).errors.length!==0?(u(),S(T,{key:0,class:"custom-alert-class",type:"error",variant:"tonal",border:"start",elevation:"2",closable:"","close-label":o.$t("close")},{default:t(()=>[typeof l(n).errors=="object"?(u(!0),p(E,{key:0},F(l(n).errors,(s,g)=>(u(),p("small",{class:"d-block",value:g,key:g},w(s),9,q))),128)):(u(),p("small",z,w(l(n).errors),1))]),_:1},8,["close-label"])):L("",!0),e(U,{onSubmit:a[3]||(a[3]=B(s=>l(n).handleLogin(d.value),["prevent"])),modelValue:v.value,"onUpdate:modelValue":a[4]||(a[4]=s=>v.value=s)},{default:t(()=>[D,e(V,{density:"compact",placeholder:"Email address","prepend-inner-icon":"mdi-email-outline",variant:"outlined",modelValue:d.value.email,"onUpdate:modelValue":a[0]||(a[0]=s=>d.value.email=s),rules:_.value.email},null,8,["modelValue","rules"]),r("div",M,[i(" Password "),e(f,{class:"text-caption text-decoration-none text-blue",to:{name:"ForgotPassword"},rel:"noopener noreferrer",target:"_blank"},{default:t(()=>[i(" Forgot login password?")]),_:1})]),e(V,{"append-inner-icon":m.value?"mdi-eye-off":"mdi-eye",type:m.value?"text":"password",density:"compact",placeholder:"Enter your password","prepend-inner-icon":"mdi-lock-outline",variant:"outlined","onClick:appendInner":a[1]||(a[1]=s=>m.value=!m.value),modelValue:d.value.password,"onUpdate:modelValue":a[2]||(a[2]=s=>d.value.password=s),rules:_.value.password},null,8,["append-inner-icon","type","modelValue","rules"]),e(b,{class:"mb-12",color:"surface-variant",variant:"tonal"},{default:t(()=>[e(x,{class:"text-medium-emphasis text-caption"},{default:t(()=>[R,G,H]),_:1})]),_:1}),e(P,{block:"",type:"submit",class:"mb-8",color:"blue",size:"large",variant:"tonal"},{default:t(()=>[I(e(j,{indeterminate:"",color:"info",class:"mx-3",size:"25"},null,512),[[N,l(n).loading]]),i(" Log In ")]),_:1})]),_:1},8,["modelValue"]),e(x,{class:"text-center"},{default:t(()=>[e(f,{class:"text-blue text-decoration-none",to:{name:"Register"},rel:"noopener noreferrer"},{default:t(()=>[i(" Sign up now "),e(A,{icon:"mdi-chevron-right"})]),_:1})]),_:1})]),_:1})])}}};export{X as default};