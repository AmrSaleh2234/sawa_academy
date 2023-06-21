import{H as R,aj as O,a1 as B,b as s,a2 as $,ak as U,al as Q,am as F,an as T,I,ao as j,Z as G,R as Y,ap as H,aq as K,ar as L,F as w,as as Z,at as q,au as z,_ as J,A as m,o as c,c as p,w as v,p as W,k as x,t as V,l as _,e as X,g as A,j as g,h as ee,C as te,i as ae,f as D}from"./main-1637d54a.js";import{h as se}from"./moment-fbc5633a.js";import{V as le}from"./VAlert-288e59b3.js";import{V as ie}from"./VForm-e647373a.js";import{V as oe}from"./VSheet-12660182.js";const S=R({name:"VRadio",props:{...O({falseIcon:"$radioOff",trueIcon:"$radioOn"})},setup(e,t){let{slots:o}=t;return B(()=>s(U,$(e,{class:"v-radio",type:"radio"}),o)),{}}});const re=R({name:"VRadioGroup",inheritAttrs:!1,props:{height:{type:[Number,String],default:"auto"},...Q(),...F(T(),["multiple"]),trueIcon:{type:I,default:"$radioOn"},falseIcon:{type:I,default:"$radioOff"},type:{type:String,default:"radio"}},emits:{"update:modelValue":e=>!0},setup(e,t){let{attrs:o,slots:n}=t;const u=j(),l=G(()=>e.id||`radio-group-${u}`),a=Y(e,"modelValue");return B(()=>{const[i,r]=H(o),[h,C]=K(e),[d,y]=L({...e,multiple:!1}),f=n.label?n.label({label:e.label,props:{for:l.value}}):e.label;return s(z,$({class:"v-radio-group"},i,h,{modelValue:a.value,"onUpdate:modelValue":b=>a.value=b,id:l.value}),{...n,default:b=>{let{id:k,messagesId:E,isDisabled:P,isReadonly:M}=b;return s(w,null,[f&&s(Z,{id:k.value},{default:()=>[f]}),s(q,$(d,{id:k.value,"aria-describedby":E.value,defaultsTarget:"VRadio",trueIcon:e.trueIcon,falseIcon:e.falseIcon,type:e.type,disabled:P.value,readonly:M.value,"aria-labelledby":f?k.value:void 0},r,{modelValue:a.value,"onUpdate:modelValue":N=>a.value=N}),n)])}})}),{}}}),de={data:()=>({NameRules:[e=>e?!0:"This field is required"],title:"",answers:[],alert_text:"",type:"success",snackbar:!0,selected:[],children:[],selectBox:[],child_id:"",child:"",numberOfMonth:"",skip:[],headerAndQuestions:[],examDate:""}),methods:{goBack(){this.$router.go(-1)},getQuestions(){m.get(`/api/evaluations/${this.$route.params.id}`).then(e=>{this.headerAndQuestions=e.data.evaluation}),m.get(`/api/evaluations/${this.$route.params.id}/show`).then(e=>{this.title=e.data.evaluation.title})},async submit(){const{valid:e}=await this.$refs.form.validate();e&&(this.answers=[],this.selected.forEach((t,o)=>{this.answers.push({question_id:o,value:t})}),m.post(`/api/evaluations/${this.$route.params.id}/submit`,{answers:this.answers,child_id:this.child_id,date:this.examDate}).then(t=>{t.data.status==200&&(this.child.childInMonths=-1,this.alert_text="evaluation added successfully ",this.type="success")}).catch(t=>{this.alert_text=t.response.data.message,this.type="error"}))},getChildren(){m.get("/api/child").then(e=>{this.children=e.data.children.forEach(t=>{this.selectBox.push({title:t.name,value:t.id})})})},radioChange(e,t,o){let n=0;if(this.skip[t]==null)this.skip[t]=[{id:o,answer:e}];else{let r=this.skip[t];r.forEach(h=>{h.id==o&&(n++,h.answer=e)}),n||(r.push({id:o,answer:e}),this.skip[t]=r)}let u=0,l=0,a=-1,i=-1;Object.entries(this.skip).reverse().forEach(r=>{const[h,C]=r;a=i,i=h;for(const d of C)if(d.answer==1)u++;else{u=0;break}if(u?(this.headerAndQuestions[h].length==u&&l++,u=0):l=0,l==2){for(const d of Object.entries(this.headerAndQuestions)){const[y,f]=d;if(h==y)break;f.forEach(b=>{this.selected[b.questions.id]=1})}this.answers=[],this.selected.forEach((d,y)=>{this.answers.push({question_id:y,value:d})}),m.post(`/api/evaluations/${this.$route.params.id}/${a}/basalAge`,{answers:this.answers,child_id:this.child_id,date:this.examDate}).then(d=>{console.log(d.data.resultEvaluation)}),this.$router.push({name:"Children",params:{alert:1}})}})},getSpecificChildren(){m.get(`/api/child/${this.child_id}/${this.$route.params.id}`).then(e=>{console.log(e.data.child),e.data.child.canDoExam?(this.alert_text="",this.child=e.data.child):(this.alert_text="sorry this child has this evaluate lass than 6 months",this.type="error",this.child=e.data.child,this.child.childInMonths=-1)})}},mounted(){this.getQuestions(),this.getChildren(),this.examDate=se(new Date).format("YYYY-MM-DDTHH:mm"),console.log(this.examDate)},components:{}},ne={class:"text-center"},ue={key:0},he={class:"font-weight-bold mb-3 mx-7"},ce={class:"border border-1 rounded pa-5"},me={class:"mb-3"},pe=g("div",{class:"mb-7"},null,-1);function fe(e,t,o,n,u,l){return c(),p("div",null,[s(_,{height:"45",class:"mb-5 text-white",color:"#A9AB7F",onClick:l.goBack},{default:v(()=>[s(W,{start:"",icon:"mdi-arrow-left"}),x(" "+V(e.$t("back")),1)]),_:1},8,["onClick"]),s(oe,{"max-width":"1200",class:"mx-auto"},{default:v(()=>[e.alert_text!=""?(c(),X(le,{key:0,type:e.type,variant:"tonal",border:"start",elevation:"2",closable:"","close-label":e.$t("close"),text:e.alert_text,class:"mb-8"},null,8,["type","close-label","text"])):A("",!0),g("h1",ne,V(e.title),1),s(ie,{"fast-fail":"",ref:"form",onSubmit:ee(l.submit,["prevent"])},{default:v(()=>[s(te,{label:"Child",modelValue:e.child_id,"onUpdate:modelValue":[t[0]||(t[0]=a=>e.child_id=a),l.getSpecificChildren],items:e.selectBox,rules:e.NameRules},null,8,["modelValue","onUpdate:modelValue","items","rules"]),s(ae,{modelValue:e.examDate,"onUpdate:modelValue":t[1]||(t[1]=a=>e.examDate=a),label:e.$t("examDate"),type:"datetime-local"},null,8,["modelValue","label"]),(c(!0),p(w,null,D(Object.values(e.headerAndQuestions).reverse(),a=>(c(),p("div",null,[a[0].min_age<=this.child.childInMonths?(c(),p("div",ue,[g("ul",null,[g("li",he,V(a[0].title),1)]),(c(!0),p(w,null,D(a,i=>(c(),p("div",ce,[g("div",me,V(i.questions.title),1),s(re,{modelValue:e.selected[i.questions.id],"onUpdate:modelValue":r=>e.selected[i.questions.id]=r,onChange:r=>l.radioChange(e.selected[i.questions.id],i.questions.evaluation_header_id,i.questions.id),rules:e.NameRules},{default:v(()=>[s(S,{label:"True",value:"1"}),s(S,{label:"False",value:"0"})]),_:2},1032,["modelValue","onUpdate:modelValue","onChange","rules"])]))),256))])):A("",!0),pe]))),256)),s(_,{type:"submit",block:"",class:"mt-2"},{default:v(()=>[x(V(e.$t("submit")),1)]),_:1})]),_:1},8,["onSubmit"])]),_:1})])}const ke=J(de,[["render",fe]]);export{ke as default};