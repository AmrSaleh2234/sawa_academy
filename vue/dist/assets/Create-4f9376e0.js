import{o as n,c,a4 as V,z as b,A as k,a as g,b as l,w as s,p as x,k as u,t as i,l as m,e as y,g as I,h as $,i as w,j as B}from"./main-380d7fb2.js";import{s as C}from"./basecomponent.esm-b0a7b314.js";import{V as v}from"./VAlert-12b760d8.js";import{V as N}from"./VForm-33246966.js";import{V as _}from"./VSheet-16604567.js";var p={name:"InputText",extends:C,emits:["update:modelValue"],props:{modelValue:null},methods:{onInput(e){this.$emit("update:modelValue",e.target.value)}},computed:{filled(){return this.modelValue!=null&&this.modelValue.toString().length>0}}};const T=["value"];function A(e,t,d,h,f,a){return n(),c("input",V({class:["p-inputtext p-component",{"p-filled":a.filled}],value:d.modelValue,onInput:t[0]||(t[0]=(...o)=>a.onInput&&a.onInput(...o))},e.ptm("root")),null,16,T)}p.render=A;const F={components:{InputText:p},data:()=>({valu:"",NameRules:[e=>(e==null?void 0:e.length)>=3?!0:" name must be at least 3 characters."],child:{name:"",birth_date:""},alert_text:null,snackbar:!0}),methods:{goBack(){this.$router.go(-1)},submit(){k.post("/api/child/create",this.child).then(e=>{e.data.status==200&&(this.child=[],this.alert_text="children added successfully ")})}},mounted(){}},S={style:{width:"100%"},class:"card flex justify-content-center"};function R(e,t,d,h,f,a){const o=g("InputText");return n(),c("div",null,[l(m,{height:"45",class:"mb-5 text-white",color:"#A9AB7F",onClick:a.goBack},{default:s(()=>[l(x,{start:"",icon:"mdi-arrow-left"}),u(" "+i(e.$t("back")),1)]),_:1},8,["onClick"]),l(_,{"max-width":"1200",class:"mx-auto"},{default:s(()=>[e.alert_text!=null?(n(),y(v,{key:0,type:"success",variant:"tonal",border:"start",elevation:"2",closable:"","close-label":e.$t("close"),text:e.alert_text,class:"mb-8"},null,8,["close-label","text"])):I("",!0),l(N,{"fast-fail":"",onSubmit:t[2]||(t[2]=$(()=>{},["prevent"]))},{default:s(()=>[l(w,{modelValue:e.child.name,"onUpdate:modelValue":t[0]||(t[0]=r=>e.child.name=r),label:e.$t("child_name"),rules:e.NameRules},null,8,["modelValue","label","rules"]),B("div",S,[l(o,{style:{width:"100%"},type:"date",rules:e.NameRules,showIcon:"",dateFormat:"dd/mm/yy",modelValue:e.child.birth_date,"onUpdate:modelValue":t[1]||(t[1]=r=>e.child.birth_date=r)},null,8,["rules","modelValue"])]),l(m,{type:"submit",onClick:a.submit,block:"",class:"mt-2"},{default:s(()=>[u(i(e.$t("submit")),1)]),_:1},8,["onClick"])]),_:1})]),_:1})])}const M=b(F,[["render",R]]);export{M as default};
