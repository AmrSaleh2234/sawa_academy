import{_ as c,y as i,k as h,o as r,e as p,q as t,x as l,G as f,i as d,t as n,a9 as m,f as b,V,p as k,l as C,a7 as $,h as g}from"./main-f8e19554.js";import{s as x}from"./inputtext.esm-46453659.js";import{s as y}from"./calendar.esm-4359359c.js";import{V as w}from"./VForm-33d4b4fe.js";import{V as B}from"./VSheet-239e3309.js";import"./index.esm-eb43e3eb.js";import"./overlayeventbus.esm-19ad36b0.js";import"./portal.esm-0f6cc65f.js";const N={components:{InputText:x,Calendar:y},data:()=>({maxDate:new Date,NameRules:[e=>(e==null?void 0:e.length)>=3?!0:" name must be at least 3 characters."],child:{name:"",birth_date:""},alert_text:null}),methods:{goBack(){this.$router.go(-1)},submit(){i.post(`/api/child/${this.$route.params.id}/update`,this.child).then(e=>{e.data.status==200&&(this.alert_text="children updated successfully ",this.child=e.data.child),console.log(e.data.children)})},getChild(){i.get(`/api/child/${this.$route.params.id}`).then(e=>{this.child=e.data.child})}},mounted(){this.getChild()}},D={class:"card flex justify-content-center"};function _(e,a,I,R,S,o){const u=h("Calendar");return r(),p("div",null,[t(m,{height:"45",class:"mb-5 text-white",color:"#135C65",onClick:o.goBack},{default:l(()=>[t(f,{start:"",icon:"mdi-arrow-left"}),d(" "+n(e.$t("back")),1)]),_:1},8,["onClick"]),t(B,{"max-width":"1200",class:"mx-auto"},{default:l(()=>[e.alert_text!=null?(r(),b(V,{key:0,type:"success",variant:"tonal",border:"start",elevation:"2",closable:"","close-label":e.$t("close"),text:e.alert_text,class:"mb-8"},null,8,["close-label","text"])):k("",!0),t(w,{"fast-fail":"",onSubmit:a[2]||(a[2]=C(()=>{},["prevent"]))},{default:l(()=>[t($,{modelValue:e.child.name,"onUpdate:modelValue":a[0]||(a[0]=s=>e.child.name=s),label:e.$t("child_name"),rules:e.NameRules},null,8,["modelValue","label","rules"]),g("div",D,[t(u,{style:{width:"100%"},showButtonBar:"",modelValue:e.child.birth_date,"onUpdate:modelValue":a[1]||(a[1]=s=>e.child.birth_date=s),showIcon:"",placeholder:"dd/mm/yy",maxDate:e.maxDate,rules:e.NameRules},null,8,["modelValue","maxDate","rules"])]),t(m,{type:"submit",onClick:o.submit,block:"",class:"mt-2"},{default:l(()=>[d(n(e.$t("submit")),1)]),_:1},8,["onClick"])]),_:1})]),_:1})])}const G=c(N,[["render",_]]);export{G as default};
