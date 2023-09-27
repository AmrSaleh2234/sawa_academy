import{_ as u,C as r,y as h,k as p,o as i,e as f,q as t,x as l,G as b,i as n,t as d,a9 as m,f as V,V as k,p as C,l as D,a7 as w,h as x}from"./main-5552807f.js";import{s as y}from"./inputtext.esm-45605dd1.js";import{s as _}from"./calendar.esm-f34b2547.js";import{V as g}from"./VForm-ab59bffe.js";import{V as B}from"./VSheet-c5e5095a.js";import"./index.esm-186b6421.js";import"./overlayeventbus.esm-8322cc02.js";import"./portal.esm-91c95ad9.js";const Y={components:{InputText:y,Calendar:_},data:()=>({minDate:new Date(16404264e5),maxDate:new Date,NameRules:[e=>(e==null?void 0:e.length)>=3?!0:" name must be at least 3 characters."],child:{name:"",birth_date:""},alert_text:null,snackbar:!0}),methods:{goBack(){this.$router.go(-1)},submit(){this.child.birth_date=r(this.child.birth_date).format("YYYY-MM-DD"),console.log(this),console.log(this.child.birth_date),h.post("/api/child/create",this.child).then(e=>{e.data.status==200&&(this.child=[],this.alert_text="children added successfully ")})}},mounted(){console.log(r(new Date).format(" YYYY-MM-DD"))}},$={class:"card flex justify-content-center"};function M(e,a,N,I,S,o){const c=p("Calendar");return i(),f("div",null,[t(m,{height:"45",class:"mb-5 text-white",color:"#135C65",onClick:o.goBack},{default:l(()=>[t(b,{start:"",icon:"mdi-arrow-left"}),n(" "+d(e.$t("back")),1)]),_:1},8,["onClick"]),t(B,{"max-width":"1200",class:"mx-auto"},{default:l(()=>[e.alert_text!=null?(i(),V(k,{key:0,type:"success",variant:"tonal",border:"start",elevation:"2",closable:"","close-label":e.$t("close"),text:e.alert_text,class:"mb-8"},null,8,["close-label","text"])):C("",!0),t(g,{"fast-fail":"",onSubmit:a[2]||(a[2]=D(()=>{},["prevent"]))},{default:l(()=>[t(w,{modelValue:e.child.name,"onUpdate:modelValue":a[0]||(a[0]=s=>e.child.name=s),label:e.$t("child_name"),rules:e.NameRules},null,8,["modelValue","label","rules"]),x("div",$,[t(c,{style:{width:"100%"},showButtonBar:"",modelValue:e.child.birth_date,"onUpdate:modelValue":a[1]||(a[1]=s=>e.child.birth_date=s),modelModifiers:{number:!0},showIcon:"",placeholder:"dd/mm/yy",maxDate:e.maxDate},null,8,["modelValue","maxDate"])]),t(m,{type:"submit",onClick:o.submit,block:"",class:"mt-2"},{default:l(()=>[n(d(e.$t("submit")),1)]),_:1},8,["onClick"])]),_:1})]),_:1})])}const E=u(Y,[["render",M]]);export{E as default};