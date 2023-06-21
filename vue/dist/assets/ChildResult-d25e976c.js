import{z as B,A as m,a as k,o as c,c as p,t as a,g as h,j as r,b as i,w as d,p as _,k as g,l as A,e as b,E as P,ab as S,i as v,ac as V,h as D,F as I,B as N,C as R}from"./main-47325dcc.js";import{C as y,s as E,a as M}from"./button.esm-dd274e97.js";import{h as C}from"./moment-fbc5633a.js";import{V as X}from"./VAlert-57cc4572.js";import{b as U,V as W}from"./VCard-a67b2932.js";import{V as Y}from"./VForm-feb7712a.js";import"./basecomponent.esm-c0f2c9c3.js";const F={data(){return{search:"",headers:[],result:[],alert_text:null,ctx:null,created_at:[],latePercenteges:[],growAge:[],diffAge:[],date1:"",date2:"",myCahrt:"",selectX:null,selectY:null,visible:!1,examDate:"",NameRules:[t=>t?!0:"This field is required"],examId:"",loading:!0,side_profileName:""}},methods:{getResults(){m.post(`/api/evaluations/${this.$route.params.child_id}/${this.$route.params.sideProfile_id}/${this.$route.params.evaluation_id}/result`,{date1:this.date1,date2:this.date2}).then(t=>{this.result=t.data.resultEvaluation,this.loading=!1,console.log(this.result),this.created_at=[],this.latePercenteges=[],this.growAge=[],this.diffAge=[],this.result.forEach(e=>{this.created_at.push(C(e.result_created_at).format("DD-MM-YYYY")),this.latePercenteges.push(e.late_percentage),this.growAge.push(e.grow_age),this.diffAge.push(e.diff_age)}),console.log(this.latePercenteges),this.ctx=document.getElementById("myChart").getContext("2d"),this.myCahrt=new y(this.ctx,{type:"bar",data:{datasets:[{label:"late percentages ",data:this.latePercenteges,borderWidth:1,backgroundColor:"#A9AB7F",barPercentage:.5,categoryPercentage:.2},{label:"Different ages ",data:this.diffAge,borderWidth:1,backgroundColor:"#4c9499",barPercentage:.5,categoryPercentage:.2},{label:"grow Age  ",data:this.growAge,borderWidth:1,backgroundColor:"#135C65",barPercentage:.5,categoryPercentage:.2}]},options:{align:"start",scales:{y:{beginAtZero:!0},x:{grid:{drawOnChartArea:!1},type:"category",labels:this.created_at}},grid:{top:"6",right:"0",bottom:"17",left:"25"},animation:{duration:2e3}}}),console.log(this.latePercenteges)})},formateDate(t){return C(t).format("DD-MM-YYYY HH:mm")},print(){this.$router.push({name:"printChildResult",params:{child_id:this.$route.params.child_id,sideProfile_id:this.$route.params.sideProfile_id,evaluation_id:this.$route.params.evaluation_id}})},getSideprofile(){m.get(`api/side-profiles/${this.$route.params.sideProfile_id}`).then(t=>{this.side_profileName=t.data.sideProfile.title,console.log(t.data.sideProfile)})},filter(){m.post(`/api/evaluations/${this.$route.params.child_id}/${this.$route.params.sideProfile_id}/${this.$route.params.evaluation_id}/result`,{date1:this.date1,date2:this.date2}).then(t=>{this.result=t.data.resultEvaluation,console.log(this.result),this.created_at=[],this.latePercenteges=[],this.growAge=[],this.diffAge=[],this.result.forEach(e=>{this.created_at.push(C(e.result_created_at).format("DD-MM-YYYY")),this.latePercenteges.push(e.late_percentage),this.growAge.push(e.grow_age),this.diffAge.push(e.diff_age)}),console.log(this.latePercenteges),this.ctx=document.getElementById("myChart"),this.myCahrt.destroy(),this.myCahrt=new y(this.ctx,{type:"bar",data:{datasets:[{label:"late percentages ",data:this.latePercenteges,borderWidth:1,backgroundColor:"#A9AB7F",barPercentage:.5,categoryPercentage:.2},{label:"Different ages ",data:this.diffAge,borderWidth:1,backgroundColor:"#4c9499",barPercentage:.5,categoryPercentage:.2},{label:"grow Age  ",data:this.growAge,borderWidth:1,backgroundColor:"#135C65",barPercentage:.5,categoryPercentage:.2}]},options:{align:"start",scales:{y:{beginAtZero:!0},x:{grid:{drawOnChartArea:!1},type:"category",labels:this.created_at}},grid:{top:"6",right:"0",bottom:"17",left:"25"},animation:{duration:2e3}}}),console.log(this.latePercenteges)})},editChart(){let t=[{title:this.$t("grow_age"),value:this.growAge},{title:this.$t("diff_age"),value:this.diffAge},{title:this.$t("late_percentage"),value:this.latePercenteges}];this.myCahrt.destroy(),this.myCahrt=new y(this.ctx,{type:"bar",data:{datasets:[{label:t[this.selectY].title,data:t[this.selectY].value,borderWidth:1,backgroundColor:"#135C65",barPercentage:.5,categoryPercentage:.2}]},options:{align:"start",scales:{y:{beginAtZero:!0},x:{grid:{drawOnChartArea:!1},type:"category",labels:t[this.selectX].value}},grid:{top:"6",right:"0",bottom:"17",left:"25"},animation:{duration:2e3}}})},editItem(t,e){this.visible=!0,this.examDate=t,this.examId=e},async submit(t){console.log(t);const{valid:e}=await this.$refs.form.validate();e&&m.post(`/api/evaluations/${this.examId}`,{date:this.examDate}).then(u=>{this.alert_text="evaluation edited successfully  ",this.visible=!1,this.type="success",this.getResults()}).catch(u=>{this.alert_text=u.response.data.message,this.type="error",this.visible=!1})},goBack(){this.$router.go(-1)}},components:{Dialog:E,Button:M},mounted(){this.getResults(),this.getSideprofile()},computed:{locale(){return this.$i18n.locale},header(){return this.headers=[{title:"id"},{key:"therapist_name",title:this.$t("therapist_name")},{key:"grow_age",title:this.$t("grow_age")},{key:"diff_age",title:this.$t("diff_age")},{key:"late_percentage",title:this.$t("late_percentage")},{key:"basal_age",title:this.$t("basal_age")},{key:"child_age",title:this.$t("child_age")},{key:"result_created_at",title:this.$t("created_at")},{title:this.$t("operation")}]},firstSelectBoxComputed(){return[{title:this.$t("grow_age"),value:0},{title:this.$t("diff_age"),value:1},{title:this.$t("late_percentage"),value:2}].filter(u=>u.value!=this.selectY)},secondSelectBoxComputed(){return[{title:this.$t("grow_age",this.locale),value:0},{title:this.$t("diff_age"),value:1},{title:this.$t("late_percentage"),value:2}].filter(u=>u.value!=this.selectX)}},watch:{selectX(t){this.selectX!=null&&this.selectY!=null&&this.editChart()},selectY(t){this.selectX!=null&&this.selectY!=null&&this.editChart()}}},$=t=>(N("data-v-110f2fa4"),t=t(),R(),t),T={key:0,class:"my-5"},O={key:1,class:"my-5"},Z={class:"v-row mb-5 mt-5"},H=$(()=>r("canvas",{id:"myChart",style:{height:"70vh !important"}},null,-1)),j={class:"text-center"},q={class:"text-center"};function z(t,e,u,L,l,o){const w=k("Dialog"),x=k("v-data-table");return c(),p(I,null,[l.result[0]&&l.side_profileName&&o.locale=="en"?(c(),p("div",T,a(l.result[0].child_name)+"/"+a(l.side_profileName)+"/"+a(l.result[0].evaluation_title),1)):h("",!0),l.result[0]&&l.side_profileName&&o.locale=="ar"?(c(),p("div",O,a(l.result[0].evaluation_title)+" \\"+a(l.side_profileName)+"\\"+a(l.result[0].child_name),1)):h("",!0),r("div",null,[i(A,{height:"45",class:"mb-5 text-white",color:"#135C65",onClick:o.goBack},{default:d(()=>[i(_,{start:"",icon:"mdi-arrow-left"}),g(" "+a(t.$t("back")),1)]),_:1},8,["onClick"]),l.alert_text!=null?(c(),b(X,{key:0,type:"success",variant:"tonal",border:"start",elevation:"2",closable:"","close-label":t.$t("close"),text:l.alert_text,class:"mb-8"},null,8,["close-label","text"])):h("",!0),r("div",Z,[i(P,{class:"mx-9",label:t.$t("xAxis"),modelValue:l.selectX,"onUpdate:modelValue":e[0]||(e[0]=s=>l.selectX=s),items:o.firstSelectBoxComputed},null,8,["label","modelValue","items"]),i(P,{class:"mx-9",label:t.$t("yAxis"),modelValue:l.selectY,"onUpdate:modelValue":e[1]||(e[1]=s=>l.selectY=s),items:o.secondSelectBoxComputed},null,8,["label","modelValue","items"])]),H,i(W,null,{default:d(()=>[i(U,null,{default:d(()=>[g(" Results "),i(S),i(v,{modelValue:l.search,"onUpdate:modelValue":e[2]||(e[2]=s=>l.search=s),"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},null,8,["modelValue"])]),_:1}),i(A,{text:"print",color:"#ACAE84",height:"45",class:"mb-5 mt-5",onClick:o.print},{default:d(()=>[g(a(t.$t("print")),1)]),_:1},8,["onClick"]),i(x,{headers:o.header,items:l.result,search:l.search},{top:d(()=>[l.loading?(c(),b(V,{key:0,slot:"progress",style:{color:"#135c65"},indeterminate:""})):h("",!0)]),item:d(({item:s,index:f})=>[r("tr",null,[r("td",null,a(f+1),1),r("td",null,a(s.columns.therapist_name),1),r("td",null,a(s.columns.grow_age),1),r("td",null,a(s.columns.diff_age),1),r("td",null,a(Math.round(s.columns.late_percentage))+" %",1),r("td",null,a(s.columns.basal_age)+" months",1),r("td",null,a(s.columns.child_age)+" months",1),r("td",null,a(o.formateDate(s.columns.result_created_at)),1),r("td",j,[i(_,{small:"",color:"primary",class:"mr-2",onClick:n=>o.editItem(s.raw.result_created_at,s.raw.id)},{default:d(()=>[g(" mdi-pencil ")]),_:2},1032,["onClick"]),i(w,{visible:l.visible,"onUpdate:visible":e[6]||(e[6]=n=>l.visible=n),modal:"",header:" ",style:{width:"50vw"}},{default:d(()=>[i(Y,{"fast-fail":"",onSubmit:e[5]||(e[5]=D(()=>{},["prevent"])),ref:"form"},{default:d(()=>[i(v,{modelValue:l.examDate,"onUpdate:modelValue":e[3]||(e[3]=n=>l.examDate=n),rules:l.NameRules,label:t.$t("examDate"),type:"datetime-local"},null,8,["modelValue","rules","label"]),r("button",{class:"bg-blue pa-3 rounded",onClick:e[4]||(e[4]=(...n)=>o.submit&&o.submit(...n))},a(t.$t("submit")),1)]),_:1},512)]),_:1},8,["visible"])])])]),_:1},8,["headers","items","search"])]),_:1}),i(x,{class:"hidden-table",headers:o.header,items:l.result,search:l.search,id:"print","hide-default-footer":"","disable-pagination":""},{top:d(()=>[l.loading?(c(),b(V,{key:0,slot:"progress",style:{color:"#135c65"},indeterminate:""})):h("",!0)]),item:d(({item:s,index:f})=>[r("tr",null,[r("td",null,a(f+1),1),r("td",null,a(s.columns.therapist_name),1),r("td",null,a(s.columns.grow_age),1),r("td",null,a(s.columns.diff_age),1),r("td",null,a(Math.round(s.columns.late_percentage))+" %",1),r("td",null,a(s.columns.basal_age)+" months",1),r("td",null,a(s.columns.child_age)+" months",1),r("td",null,a(o.formateDate(s.columns.result_created_at)),1),r("td",q,[i(_,{small:"",color:"primary",class:"mr-2",onClick:n=>o.editItem(s.raw.result_created_at,s.raw.id)},{default:d(()=>[g(" mdi-pencil ")]),_:2},1032,["onClick"]),i(w,{visible:l.visible,"onUpdate:visible":e[10]||(e[10]=n=>l.visible=n),modal:"",header:" ",style:{width:"50vw"}},{default:d(()=>[i(Y,{"fast-fail":"",onSubmit:e[9]||(e[9]=D(()=>{},["prevent"])),ref:"form"},{default:d(()=>[i(v,{modelValue:l.examDate,"onUpdate:modelValue":e[7]||(e[7]=n=>l.examDate=n),rules:l.NameRules,label:t.$t("examDate"),type:"datetime-local"},null,8,["modelValue","rules","label"]),r("button",{class:"bg-blue pa-3 rounded",onClick:e[8]||(e[8]=(...n)=>o.submit&&o.submit(...n))},a(t.$t("submit")),1)]),_:1},512)]),_:1},8,["visible"])])])]),bottom:d(()=>[]),_:1},8,["headers","items","search"])])],64)}const ae=B(F,[["render",z],["__scopeId","data-v-110f2fa4"]]);export{ae as default};
