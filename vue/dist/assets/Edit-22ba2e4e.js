import{_ as c,O as i,g as h,o as d,c as p,h as e,w as l,V as f,f as r,t as n,i as m,d as b,Y as V,p as k,l as $,Z as g,a as y}from"./main-38a97668.js";import{s as C}from"./inputtext.esm-d0891ccf.js";import{V as w}from"./VForm-e6e32684.js";import{V as x}from"./VSheet-da8c2f82.js";import"./basecomponent.esm-cd1748a3.js";const B={components:{InputText:C},data:()=>({NameRules:[t=>(t==null?void 0:t.length)>=3?!0:" name must be at least 3 characters."],child:{name:"",birth_date:""},alert_text:null}),methods:{goBack(){this.$router.go(-1)},submit(){i.post(`/api/child/${this.$route.params.id}/update`,this.child).then(t=>{t.data.status==200&&(this.alert_text="children updated successfully ",this.child=t.data.child),console.log(t.data.children)})},getChild(){i.get(`/api/child/${this.$route.params.id}`).then(t=>{this.child=t.data.child})}},mounted(){this.getChild()}},N={style:{width:"100%"},class:"card flex justify-content-center"};function _(t,a,T,I,F,o){const u=h("InputText");return d(),p("div",null,[e(m,{height:"45",class:"mb-5 text-white",color:"#135C65",onClick:o.goBack},{default:l(()=>[e(f,{start:"",icon:"mdi-arrow-left"}),r(" "+n(t.$t("back")),1)]),_:1},8,["onClick"]),e(x,{"max-width":"1200",class:"mx-auto"},{default:l(()=>[t.alert_text!=null?(d(),b(V,{key:0,type:"success",variant:"tonal",border:"start",elevation:"2",closable:"","close-label":t.$t("close"),text:t.alert_text,class:"mb-8"},null,8,["close-label","text"])):k("",!0),e(w,{"fast-fail":"",onSubmit:a[2]||(a[2]=$(()=>{},["prevent"]))},{default:l(()=>[e(g,{modelValue:t.child.name,"onUpdate:modelValue":a[0]||(a[0]=s=>t.child.name=s),label:t.$t("child_name"),rules:t.NameRules},null,8,["modelValue","label","rules"]),y("div",N,[e(u,{label:t.$t("birth_date"),style:{width:"100%"},type:"date",rules:t.NameRules,dateFormat:"dd/mm/yy",modelValue:t.child.birth_date,"onUpdate:modelValue":a[1]||(a[1]=s=>t.child.birth_date=s)},null,8,["label","rules","modelValue"])]),e(m,{type:"submit",onClick:o.submit,block:"",class:"mt-2"},{default:l(()=>[r(n(t.$t("submit")),1)]),_:1},8,["onClick"])]),_:1})]),_:1})])}const j=c(B,[["render",_]]);export{j as default};