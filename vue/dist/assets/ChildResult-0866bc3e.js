import{_ as N,O as m,g as f,o as c,c as _,t as a,p as h,a as s,h as i,w as d,V as b,f as g,i as k,d as y,Y as R,a9 as P,a3 as E,ac as M,Z as A,aE as V,l as D,P as X,a6 as W,a7 as U}from"./main-97346cb2.js";import{C as v}from"./auto-1f697c56.js";import{h as C}from"./moment-fbc5633a.js";import{a as Y}from"./button.esm-5f9598cf.js";import{s as B}from"./dialog.esm-32f85164.js";import{s as $}from"./calendar.esm-ee605ba2.js";import{V as S}from"./VForm-815ffadc.js";import"./basecomponent.esm-ac05b7df.js";import"./focustrap.esm-842c7bb6.js";import"./portal.esm-769c8ff5.js";import"./overlayeventbus.esm-d6517229.js";const F={data(){return{search:"",headers:[],result:[],alert_text:null,ctx:null,created_at:[],latePercenteges:[],growAge:[],diffAge:[],date1:"",date2:"",myCahrt:"",selectX:null,selectY:null,visible:!1,examDate:"",NameRules:[t=>t?!0:"This field is required"],examId:"",loading:!0,side_profileName:""}},methods:{getResults(){m.post(`/api/evaluations/${this.$route.params.child_id}/${this.$route.params.sideProfile_id}/${this.$route.params.evaluation_id}/result`,{date1:this.date1,date2:this.date2}).then(t=>{this.result=t.data.resultEvaluation,this.loading=!1,console.log(this.result),this.created_at=[],this.latePercenteges=[],this.growAge=[],this.diffAge=[],this.result.forEach(e=>{this.created_at.push(C(e.result_created_at).format("MM-DD-YYYY")),this.latePercenteges.push(e.late_percentage),this.growAge.push(e.grow_age),this.diffAge.push(e.diff_age)}),console.log(this.latePercenteges),this.ctx=document.getElementById("myChart").getContext("2d"),this.myCahrt=new v(this.ctx,{type:"bar",data:{datasets:[{label:"late percentages ",data:this.latePercenteges,borderWidth:1,backgroundColor:"#A9AB7F",barPercentage:.5,categoryPercentage:.2},{label:"Different_ages",data:this.diffAge,borderWidth:1,backgroundColor:"#4c9499",barPercentage:.5,categoryPercentage:.2},{label:"grow Age  ",data:this.growAge,borderWidth:1,backgroundColor:"#135C65",barPercentage:.5,categoryPercentage:.2}]},options:{align:"start",scales:{y:{beginAtZero:!0},x:{grid:{drawOnChartArea:!1},type:"category",labels:this.created_at}},grid:{top:"6",right:"0",bottom:"17",left:"25"},animation:{duration:2e3}}}),console.log(this.latePercenteges)})},formateDate(t){return C(t).format("DD-MM-YYYY HH:mm")},print(){this.$router.push({name:"printChildResult",params:{child_id:this.$route.params.child_id,sideProfile_id:this.$route.params.sideProfile_id,evaluation_id:this.$route.params.evaluation_id}})},getSideprofile(){m.get(`api/side-profiles/${this.$route.params.sideProfile_id}`).then(t=>{this.side_profileName=t.data.sideProfile.title,console.log(t.data.sideProfile)})},filter(){m.post(`/api/evaluations/${this.$route.params.child_id}/${this.$route.params.sideProfile_id}/${this.$route.params.evaluation_id}/result`,{date1:this.date1,date2:this.date2}).then(t=>{this.result=t.data.resultEvaluation,console.log(this.result),this.created_at=[],this.latePercenteges=[],this.growAge=[],this.diffAge=[],this.result.forEach(e=>{this.created_at.push(C(e.result_created_at).format("DD-MM-YYYY")),this.latePercenteges.push(e.late_percentage),this.growAge.push(e.grow_age),this.diffAge.push(e.diff_age)}),console.log(this.latePercenteges),this.ctx=document.getElementById("myChart"),this.myCahrt.destroy(),this.myCahrt=new v(this.ctx,{type:"bar",data:{datasets:[{label:"late percentages ",data:this.latePercenteges,borderWidth:1,backgroundColor:"#A9AB7F",barPercentage:.5,categoryPercentage:.2},{label:"Different ages ",data:this.diffAge,borderWidth:1,backgroundColor:"#4c9499",barPercentage:.5,categoryPercentage:.2},{label:"grow Age  ",data:this.growAge,borderWidth:1,backgroundColor:"#135C65",barPercentage:.5,categoryPercentage:.2}]},options:{align:"start",scales:{y:{beginAtZero:!0},x:{grid:{drawOnChartArea:!1},type:"category",labels:this.created_at}},grid:{top:"6",right:"0",bottom:"17",left:"25"},animation:{duration:2e3}}}),console.log(this.latePercenteges)})},editChart(){let t=[{title:this.$t("grow_age"),value:this.growAge},{title:this.$t("diff_age"),value:this.diffAge},{title:this.$t("late_percentage"),value:this.latePercenteges}];this.myCahrt.destroy(),this.myCahrt=new v(this.ctx,{type:"bar",data:{datasets:[{label:t[this.selectY].title,data:t[this.selectY].value,borderWidth:1,backgroundColor:"#135C65",barPercentage:.5,categoryPercentage:.2}]},options:{align:"start",scales:{y:{beginAtZero:!0},x:{grid:{drawOnChartArea:!1},type:"category",labels:t[this.selectX].value}},grid:{top:"6",right:"0",bottom:"17",left:"25"},animation:{duration:2e3}}})},editItem(t,e){this.visible=!0,this.examDate=t,this.examId=e},async submit(t){console.log(t);const{valid:e}=await this.$refs.form.validate();e&&m.post(`/api/evaluations/${this.examId}`,{date:this.examDate}).then(u=>{this.alert_text="evaluation edited successfully  ",this.visible=!1,this.type="success",this.getResults()}).catch(u=>{this.alert_text=u.response.data.message,this.type="error",this.visible=!1})},goBack(){this.$router.go(-1)}},components:{Dialog:B,Button:Y},components:{Dialog:B,Button:Y,Calendar:$},mounted(){this.getResults(),this.getSideprofile()},computed:{locale(){return this.$i18n.locale},header(){return this.headers=[{title:"id"},{key:"therapist_name",title:this.$t("therapist_name")},{key:"child_age",title:this.$t("child_age")},{key:"grow_age",title:this.$t("grow_age")},{key:"diff_age",title:this.$t("diff_age")},{key:"basal_age",title:this.$t("basal_age")},{key:"late_percentage",title:this.$t("late_percentage")},{key:"result_created_at",title:this.$t("created_at")},{title:this.$t("operation")}]},firstSelectBoxComputed(){return[{title:this.$t("grow_age"),value:0},{title:this.$t("diff_age"),value:1},{title:this.$t("late_percentage"),value:2}].filter(u=>u.value!=this.selectY)},secondSelectBoxComputed(){return[{title:this.$t("grow_age",this.locale),value:0},{title:this.$t("diff_age"),value:1},{title:this.$t("late_percentage"),value:2}].filter(u=>u.value!=this.selectX)}},watch:{selectX(t){this.selectX!=null&&this.selectY!=null&&this.editChart()},selectY(t){this.selectX!=null&&this.selectY!=null&&this.editChart()}}},O=t=>(W("data-v-7342cd3e"),t=t(),U(),t),T={key:0,class:"my-5"},Z={key:1,class:"my-5"},H={class:"v-row mb-5 mt-5"},j=O(()=>s("canvas",{id:"myChart",style:{"max-height":"400px"}},null,-1)),q={class:"text-center"},L={class:"card flex justify-content-center"},z={class:"text-center"};function G(t,e,u,J,l,o){const I=f("Calendar"),x=f("Dialog"),w=f("v-data-table");return c(),_("div",null,[l.result[0]&&l.side_profileName&&o.locale=="en"?(c(),_("div",T,a(l.result[0].child_name)+"/"+a(l.side_profileName)+"/"+a(l.result[0].evaluation_title),1)):h("",!0),l.result[0]&&l.side_profileName&&o.locale=="ar"?(c(),_("div",Z,a(l.result[0].evaluation_title)+" \\"+a(l.side_profileName)+"\\"+a(l.result[0].child_name),1)):h("",!0),s("div",null,[i(k,{height:"45",class:"mb-5 text-white",color:"#135C65",onClick:o.goBack},{default:d(()=>[i(b,{start:"",icon:"mdi-arrow-left"}),g(" "+a(t.$t("back")),1)]),_:1},8,["onClick"]),l.alert_text!=null?(c(),y(R,{key:0,type:"success",variant:"tonal",border:"start",elevation:"2",closable:"","close-label":t.$t("close"),text:l.alert_text,class:"mb-8"},null,8,["close-label","text"])):h("",!0),s("div",H,[i(P,{class:"mx-9",label:t.$t("xAxis"),modelValue:l.selectX,"onUpdate:modelValue":e[0]||(e[0]=r=>l.selectX=r),items:o.firstSelectBoxComputed},null,8,["label","modelValue","items"]),i(P,{class:"mx-9",label:t.$t("yAxis"),modelValue:l.selectY,"onUpdate:modelValue":e[1]||(e[1]=r=>l.selectY=r),items:o.secondSelectBoxComputed},null,8,["label","modelValue","items"])]),j,i(X,null,{default:d(()=>[i(E,null,{default:d(()=>[g(" Results "),i(M),i(A,{modelValue:l.search,"onUpdate:modelValue":e[2]||(e[2]=r=>l.search=r),"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},null,8,["modelValue"])]),_:1}),i(k,{style:{color:"rgb(255, 255, 255)"},text:"print",color:"#ACAE84",height:"45",class:"mb-5 mt-5",onClick:o.print},{default:d(()=>[g(a(t.$t("print")),1)]),_:1},8,["onClick"]),i(w,{headers:o.header,items:l.result,search:l.search},{top:d(()=>[l.loading?(c(),y(V,{key:0,slot:"progress",style:{color:"#135c65"},indeterminate:""})):h("",!0)]),item:d(({item:r,index:p})=>[s("tr",null,[s("td",null,a(p+1),1),s("td",null,a(r.columns.therapist_name),1),s("td",null,a(r.columns.child_age)+" months",1),s("td",null,a(r.columns.grow_age),1),s("td",null,a(r.columns.diff_age),1),s("td",null,a(r.columns.basal_age)+" months",1),s("td",null,a(Math.round(r.columns.late_percentage))+" %",1),s("td",null,a(o.formateDate(r.columns.result_created_at)),1),s("td",q,[i(b,{small:"",color:"primary",class:"mr-2",onClick:n=>o.editItem(r.raw.result_created_at,r.raw.id)},{default:d(()=>[g(" mdi-pencil ")]),_:2},1032,["onClick"]),i(x,{visible:l.visible,"onUpdate:visible":e[6]||(e[6]=n=>l.visible=n),modal:"",header:" ",style:{width:"50vw"}},{default:d(()=>[i(S,{"fast-fail":"",onSubmit:e[5]||(e[5]=D(()=>{},["prevent"])),ref:"form"},{default:d(()=>[s("div",L,[i(I,{style:{width:"100%",margin:"10px"},modelValue:l.examDate,"onUpdate:modelValue":e[3]||(e[3]=n=>l.examDate=n),rules:l.NameRules,placeholder:"dd/mm/yy",dateFormat:"dd/mm/yy"},null,8,["modelValue","rules"])]),s("button",{class:"bg-blue pa-3 rounded",onClick:e[4]||(e[4]=(...n)=>o.submit&&o.submit(...n))},a(t.$t("submit")),1)]),_:1},512)]),_:1},8,["visible"])])])]),_:1},8,["headers","items","search"])]),_:1}),i(w,{class:"hidden-table",headers:o.header,items:l.result,search:l.search,id:"print","hide-default-footer":"","disable-pagination":""},{top:d(()=>[l.loading?(c(),y(V,{key:0,slot:"progress",style:{color:"#135c65"},indeterminate:""})):h("",!0)]),item:d(({item:r,index:p})=>[s("tr",null,[s("td",null,a(p+1),1),s("td",null,a(r.columns.therapist_name),1),s("td",null,a(r.columns.grow_age),1),s("td",null,a(r.columns.diff_age),1),s("td",null,a(Math.round(r.columns.late_percentage))+" %",1),s("td",null,a(r.columns.basal_age)+" months",1),s("td",null,a(r.columns.child_age)+" months",1),s("td",null,a(o.formateDate(r.columns.result_created_at)),1),s("td",z,[i(b,{small:"",color:"primary",class:"mr-2",onClick:n=>o.editItem(r.raw.result_created_at,r.raw.id)},{default:d(()=>[g(" mdi-pencil ")]),_:2},1032,["onClick"]),i(x,{visible:l.visible,modal:"",header:" ",style:{width:"50vw"}},{default:d(()=>[i(S,{"fast-fail":"",onSubmit:e[9]||(e[9]=D(()=>{},["prevent"])),ref:"form"},{default:d(()=>[i(A,{modelValue:l.examDate,"onUpdate:modelValue":e[7]||(e[7]=n=>l.examDate=n),rules:l.NameRules,label:t.$t("examDate"),type:"datetime-local"},null,8,["modelValue","rules","label"]),s("button",{class:"bg-blue pa-3 rounded",onClick:e[8]||(e[8]=(...n)=>o.submit&&o.submit(...n))},a(t.$t("submit")),1)]),_:1},512)]),_:1},8,["visible"])])])]),bottom:d(()=>[]),_:1},8,["headers","items","search"])])])}const ne=N(F,[["render",G],["__scopeId","data-v-7342cd3e"]]);export{ne as default};