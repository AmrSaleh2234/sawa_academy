import{_ as b,o,c as d,g as s,w as a,d as f,t as h,F as m,j as v,a as r,a8 as g,h as p,$ as l,f as _,V as N,e as q,a7 as Q,n as V,k as A,aj as y,ac as P}from"./main-31a3df1d.js";import{V as w,a as H,b as I,c as E}from"./VExpansionPanel-c2a779f7.js";import{V as B}from"./VForm-0cc142ca.js";import{V as S}from"./VCheckbox-9ff32b47.js";import{V as F}from"./VSheet-a909642f.js";const U={name:"question",props:["header","questionsAndHeader"],emits:["question-inputs"],data:()=>({NameRules:[e=>e?!0:" Field is required."],headers:[],questionsNumbers:[1,2],questionCounter:2,questionInputs:[],color:"success",icon:"mdi-plus"}),methods:{addQuestion(){this.questionCounter<3?(this.questionsNumbers.push(++this.questionCounter),this.color="red",this.icon="mdi-minus"):(--this.questionCounter,this.questionsNumbers.splice(-1,1),this.questionInputs.splice(-1,1),this.color="success",this.icon="mdi-plus")},returnparent(){this.$emit("question-inputs",this.header.id,this.questionInputs)},setData(){if(console.log(this.questionsAndHeader),this.questionsAndHeader!=null){this.questionsNumbers=[];let e=1;this.questionsAndHeader.forEach(t=>{this.questionsNumbers.push(e++),this.questionInputs.push(t.questions.title)}),this.questionCounter=this.questionsAndHeader.length,this.questionCounter==3?(this.color="red",this.icon="mdi-minus"):(this.color="success",this.icon="mdi-plus")}this.returnparent()}},watch:{questionCounter(e){e>3&&this.questionsNumbers.splice(-1)}},created(){this.setData()}},x={class:"pa-4"},R={class:"d-flex justify-end"};function T(e,t,u,C,$,n){return o(),d(m,null,[s(w,{"expand-icon":"mdi-plus","collapse-icon":"mdi-minus"},{default:a(()=>[f("div",x,h(u.header.title),1)]),_:1}),s(H,null,{default:a(()=>[(o(!0),d(m,null,v(e.questionsNumbers,(c,i)=>(o(),r(g,{rules:e.NameRules,label:e.$t("question"),modelValue:e.questionInputs[i],"onUpdate:modelValue":k=>e.questionInputs[i]=k,onKeyup:n.returnparent},null,8,["rules","label","modelValue","onUpdate:modelValue","onKeyup"]))),256)),f("div",R,[s(p,{icon:e.icon,color:e.color,onClick:n.addQuestion},null,8,["icon","color","onClick"])])]),_:1})],64)}const j=b(U,[["render",T]]),D={data:()=>({NameRules:[e=>(e==null?void 0:e.length)>=3?!0:" name must be at least 3 characters."],evaluation:{title:"",side_profile_id:"",six_month:!0,questions:[]},alert_text:null,snackbar:!0,selected:[],headers:[],questions:[],headerAndQuestions:null,sideProfile:[]}),components:{questionComponent:j},methods:{goBack(){this.$router.go(-1)},async submit(){const{valid:e}=await this.$refs.form.validate();e&&(this.evaluation.questions=[],this.questions.forEach((t,u)=>{this.evaluation.questions.push({headerId:u,questions:t})}),l.post(`/api/evaluations/${this.$route.params.id}/update`,this.evaluation).then(t=>{t.data.status==200&&(this.alert_text="evaluation edited successfully ")}))},getSideProfile(){l.get("/api/side-profiles").then(e=>{this.sideProfile=e.data.sideProfile.map(t=>({title:t.title,value:t.id}))})},getQuestionHeaders(){l.get("/api/evaluationheaders").then(e=>{this.headers=e.data.headers,console.log(this.headers)})},getQuestions(){l.get(`/api/evaluations/${this.$route.params.id}`).then(e=>{this.headerAndQuestions=e.data.evaluation,console.log(this.headerAndQuestions)}),l.get(`/api/evaluations/${this.$route.params.id}/show`).then(e=>{this.evaluation.title=e.data.evaluation.title,this.evaluation.side_profile_id=e.data.evaluation.side_profile_id,e.data.evaluation.six_month==0&&(this.evaluation.six_month=!1)})},addQuestion(e,t){this.questions[e]=t}},created(){this.getQuestions(),this.getQuestionHeaders(),this.getSideProfile()}};function K(e,t,u,C,$,n){const c=_("questionComponent");return o(),d("div",null,[s(p,{height:"45",class:"mb-5 text-white",color:"#135C65",onClick:n.goBack},{default:a(()=>[s(N,{start:"",icon:"mdi-arrow-left"}),q(" "+h(e.$t("back")),1)]),_:1},8,["onClick"]),s(F,{"max-width":"1200",class:"mx-auto"},{default:a(()=>[e.alert_text!=null?(o(),r(Q,{key:0,type:"success",variant:"tonal",border:"start",elevation:"2",closable:"","close-label":e.$t("close"),text:e.alert_text,class:"mb-8"},null,8,["close-label","text"])):V("",!0),s(B,{"fast-fail":"",onSubmit:t[3]||(t[3]=A(()=>{},["prevent"])),ref:"form"},{default:a(()=>[s(g,{modelValue:e.evaluation.title,"onUpdate:modelValue":t[0]||(t[0]=i=>e.evaluation.title=i),label:e.$t("evaluation_title"),rules:e.NameRules},null,8,["modelValue","label","rules"]),s(y,{label:e.$t("side_profile_title"),modelValue:e.evaluation.side_profile_id,"onUpdate:modelValue":t[1]||(t[1]=i=>e.evaluation.side_profile_id=i),items:e.sideProfile},null,8,["label","modelValue","items"]),s(S,{modelValue:e.evaluation.six_month,"onUpdate:modelValue":t[2]||(t[2]=i=>e.evaluation.six_month=i),label:e.$t("evaluation_exception")},null,8,["modelValue","label"]),s(P,{fluid:""},{default:a(()=>[s(I,null,{default:a(()=>[(o(!0),d(m,null,v(e.headers,i=>(o(),r(E,{key:i.id},{default:a(()=>[e.headerAndQuestions?(o(),r(c,{key:0,header:i,questionsAndHeader:e.headerAndQuestions[i.id],onQuestionInputs:n.addQuestion},null,8,["header","questionsAndHeader","onQuestionInputs"])):V("",!0)]),_:2},1024))),128))]),_:1})]),_:1}),s(p,{type:"submit",onClick:n.submit,block:"",class:"mt-2"},{default:a(()=>[q(h(e.$t("submit")),1)]),_:1},8,["onClick"])]),_:1},512)]),_:1})])}const O=b(D,[["render",K]]);export{O as default};
