import{an as B,be as Q,aH as E,q as a,m as w,bf as U,aX as Y,bg as j,bh as F,ao as I,a_ as G,aE as H,ax as T,a$ as K,b0 as L,bi as X,F as $,bj as q,bk as z,b3 as J,_ as W,y as m,k as Z,o as c,e as p,x as V,Q as ee,i as x,t as g,a9 as _,f as te,V as ae,E as D,h as f,n as se,ai as le,l as S}from"./main-f152cda1.js";import{h as A}from"./moment-fbc5633a.js";import{s as ie}from"./inputtext.esm-518ce0ba.js";import{s as oe}from"./calendar.esm-1d25f936.js";import{V as re}from"./VForm-4a2215f2.js";import{V as ne}from"./VSheet-1f2aec53.js";import"./index.esm-dc4cbeac.js";import"./overlayeventbus.esm-cdc9be5a.js";import"./portal.esm-fd95a1c1.js";const R=B({name:"VRadio",props:{...Q({falseIcon:"$radioOff",trueIcon:"$radioOn"})},setup(e,t){let{slots:r}=t;return E(()=>a(U,w(e,{class:"v-radio",type:"radio"}),r)),{}}});const de=B({name:"VRadioGroup",inheritAttrs:!1,props:{height:{type:[Number,String],default:"auto"},...Y(),...j(F(),["multiple"]),trueIcon:{type:I,default:"$radioOn"},falseIcon:{type:I,default:"$radioOff"},type:{type:String,default:"radio"}},emits:{"update:modelValue":e=>!0},setup(e,t){let{attrs:r,slots:u}=t;const h=G(),i=H(()=>e.id||`radio-group-${h}`),n=T(e,"modelValue");return E(()=>{const[l,s]=K(r),[o,C]=L(e),[d,y]=X({...e,multiple:!1}),b=u.label?u.label({label:e.label,props:{for:i.value}}):e.label;return a(J,w({class:"v-radio-group"},l,o,{modelValue:n.value,"onUpdate:modelValue":v=>n.value=v,id:i.value}),{...u,default:v=>{let{id:k,messagesId:M,isDisabled:N,isReadonly:P}=v;return a($,null,[b&&a(q,{id:k.value},{default:()=>[b]}),a(z,w(d,{id:k.value,"aria-describedby":M.value,defaultsTarget:"VRadio",trueIcon:e.trueIcon,falseIcon:e.falseIcon,type:e.type,disabled:N.value,readonly:P.value,"aria-labelledby":b?k.value:void 0},s,{modelValue:n.value,"onUpdate:modelValue":O=>n.value=O}),u)])}})}),{}}}),ue={components:{InputText:ie,Calendar:oe},data:()=>({valu:"",NameRules:[e=>e?!0:"This field is required"],title:"",answers:[],alert_text:"",type:"success",snackbar:!0,selected:[],children:[],selectBox:[],child_id:"",child:"",numberOfMonth:"",skip:[],headerAndQuestions:[],examDate:""}),methods:{fomate(){},goBack(){this.$router.go(-1)},getQuestions(){m.get(`/api/evaluations/${this.$route.params.id}`).then(e=>{this.headerAndQuestions=e.data.evaluation}),m.get(`/api/evaluations/${this.$route.params.id}/show`).then(e=>{this.title=e.data.evaluation.title})},async submit(){const{valid:e}=await this.$refs.form.validate();e&&(this.answers=[],this.selected.forEach((t,r)=>{this.answers.push({question_id:r,value:t})}),this.examDate=A(new Date).format("YYYY-MM-DD HH:mm"),m.post(`/api/evaluations/${this.$route.params.id}/submit`,{answers:this.answers,child_id:this.child_id,date:this.examDate}).then(t=>{t.data.status==200&&(this.child.childInMonths=-1,this.alert_text="evaluation added successfully ",this.type="success")}).catch(t=>{this.alert_text=t.response.data.message,this.type="error"}))},getChildren(){m.get("/api/child").then(e=>{this.children=e.data.children.forEach(t=>{this.selectBox.push({title:t.name,value:t.id})})})},radioChange(e,t,r){let u=0;if(this.skip[t]==null)this.skip[t]=[{id:r,answer:e}];else{let s=this.skip[t];s.forEach(o=>{o.id==r&&(u++,o.answer=e)}),u||(s.push({id:r,answer:e}),this.skip[t]=s)}let h=0,i=0,n=-1,l=-1;Object.entries(this.skip).reverse().forEach(s=>{const[o,C]=s;n=l,l=o;for(const d of C)if(d.answer==1)h++;else{h=0;break}if(h?(this.headerAndQuestions[o].length==h&&i++,h=0):i=0,i==2){for(const d of Object.entries(this.headerAndQuestions)){const[y,b]=d;if(o==y)break;b.forEach(v=>{this.selected[v.questions.id]=1})}this.answers=[],this.selected.forEach((d,y)=>{this.answers.push({question_id:y,value:d})}),m.post(`/api/evaluations/${this.$route.params.id}/${n}/basalAge`,{answers:this.answers,child_id:this.child_id,date:this.examDate}).then(d=>{console.log(d.data.resultEvaluation)}),this.$router.push({name:"Children",params:{alert:1}})}})},getSpecificChildren(){m.get(`/api/child/${this.child_id}/${this.$route.params.id}`).then(e=>{console.log(e.data.child),e.data.child.canDoExam?(this.alert_text="",this.child=e.data.child):(this.alert_text="sorry this child has this evaluate lass than 6 months",this.type="error",this.child=e.data.child,this.child.childInMonths=-1)})}},mounted(){this.getQuestions(),this.getChildren(),this.examDate=A(new Date).format("YYYY-MM-DD HH:mm"),console.log(this.examDate)}},he={class:"text-center"},ce={class:"card flex justify-content-center"},me={key:0},pe={class:"font-weight-bold mb-3 mx-7"},fe={class:"border border-1 rounded pa-5"},be={class:"mb-3"},ve=f("div",{class:"mb-7"},null,-1);function Ve(e,t,r,u,h,i){const n=Z("Calendar");return c(),p("div",null,[a(_,{height:"45",class:"mb-5 text-white",color:"#A9AB7F",onClick:i.goBack},{default:V(()=>[a(ee,{start:"",icon:"mdi-arrow-left"}),x(" "+g(e.$t("back")),1)]),_:1},8,["onClick"]),a(ne,{"max-width":"1200",class:"mx-auto"},{default:V(()=>[e.alert_text!=""?(c(),te(ae,{key:0,type:e.type,variant:"tonal",border:"start",elevation:"2",closable:"","close-label":e.$t("close"),text:e.alert_text,class:"mb-8"},null,8,["type","close-label","text"])):D("",!0),f("h1",he,g(e.title),1),a(re,{"fast-fail":"",ref:"form",onSubmit:se(i.submit,["prevent"])},{default:V(()=>[a(le,{label:"Child",modelValue:e.child_id,"onUpdate:modelValue":[t[0]||(t[0]=l=>e.child_id=l),i.getSpecificChildren],items:e.selectBox,rules:e.NameRules},null,8,["modelValue","onUpdate:modelValue","items","rules"]),f("div",ce,[a(n,{style:{width:"100%"},modelValue:e.examDate,"onUpdate:modelValue":t[1]||(t[1]=l=>e.examDate=l),onChange:t[2]||(t[2]=l=>i.fomate()),"date-format":"dd-mm-yy",showIcon:"",rules:e.NameRules,"show-time":!0},null,8,["modelValue","rules"])]),(c(!0),p($,null,S(Object.values(e.headerAndQuestions).reverse(),l=>(c(),p("div",null,[l[0].min_age<=this.child.childInMonths?(c(),p("div",me,[f("ul",null,[f("li",pe,g(l[0].title),1)]),(c(!0),p($,null,S(l,s=>(c(),p("div",fe,[f("div",be,g(s.questions.title),1),a(de,{modelValue:e.selected[s.questions.id],"onUpdate:modelValue":o=>e.selected[s.questions.id]=o,onChange:o=>i.radioChange(e.selected[s.questions.id],s.questions.evaluation_header_id,s.questions.id),rules:e.NameRules},{default:V(()=>[a(R,{label:"True",value:"1"}),a(R,{label:"False",value:"0"})]),_:2},1032,["modelValue","onUpdate:modelValue","onChange","rules"])]))),256))])):D("",!0),ve]))),256)),a(_,{type:"submit",block:"",class:"mt-2"},{default:V(()=>[x(g(e.$t("submit")),1)]),_:1})]),_:1},8,["onSubmit"])]),_:1})])}const De=W(ue,[["render",Ve]]);export{De as default};