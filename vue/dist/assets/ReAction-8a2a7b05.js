import{_ as v,k as h,o as t,e as s,h as e,q as u,i as w,E as F,u as V,C as D,y,t as r,G as A,p as _,w as m,n as f,F as d,z as a,D as k,l as j,N as M,A as N}from"./main-48169769.js";import{a as U,s as R}from"./textarea.esm-240a8b5b.js";import{s as B}from"./calendar.esm-4e25891a.js";import"./index.esm-a06ea8e9.js";import"./overlayeventbus.esm-3c55f9c7.js";import"./portal.esm-2177ae82.js";const S={},T={style:{"background-color":"#135C65"},class:"flex justify-between p-2 text-center"},L={class:"flex justify-between space-x-4"},Y={class:"text-white m-auto"},E={class:"mr-6 text-white m-auto"};function q(n,i){const b=h("font-awesome-icon");return t(),s("div",T,[e("div",L,[e("p",Y,[u(b,{class:"text-xl pl-2 text-[#FFCF24] m-auto",icon:"fa-solid fa-location-dot"}),w("عمان-الرابيه-شارع ميسلون")]),e("p",E,[u(b,{class:"text-xl pl-2 text-[#FFCF24] m-auto",icon:"fa-solid fa-phone"}),w("التواصل : 0096265522688-00962791017001")])])])}const z=v(S,[["render",q]]),G="/assets/registernobg-01-aa957418.png";const I={components:{Calendar:B,Textarea:U,Message:F,Dropdown:R},data(){return{show:!1,lan:[],selectedCity:null,cities:{},type:[],maxDate:new Date,parentStore:V(),errors:[],alert_text:"",show_alert:!1,child:{parent_id:"",name:"",birth_date:"",birth_place:"",lang:"",gender:"",nationalty:"",national_id:"",address:""}}},computed:{locale(){return this.$i18n.locale}},methods:{arr(){return this.type=[{name:this.$t("male"),value:"0"},{name:this.$t("female"),value:"1"}]},goback(){this.$router.go(-1)},addChild(){this.errors=null,this.show_alert=!1,this.alert_text=null,this.child.parent_id=this.parentStore.user.id,this.child.birth_date=D(this.child.birth_date).format("YYYY-MM-DD"),this.child.gender=this.child.gender.value,console.log(this.child.gender),y.post("/api/parent/child/create",this.child).then(n=>{this.errors=null,this.show_alert=!0,this.alert_text=this.$t("child_added"),Object.keys(this.child).forEach(i=>{this.child[i]=null}),console.log(n)}).catch(n=>{this.errors=n.response.data.errors,console.log(n)})},getCountries(){y.get("/api/countries").then(n=>{console.log(n.data.countries),this.cities=n.data.countries,console.log(n)}).catch(n=>{console.log(n)})},getLangs(){y.get("/api/languages").then(n=>{this.lan=n.data.langs,console.log(n)}).catch(n=>{console.log(n)})}},mounted(){this.getCountries(),this.getLangs()}},O={class:""},P={class:"flex justify-between"},H=e("div",{style:{width:"25%"},class:"m-auto"},[e("img",{class:"h-56 m-auto",src:G})],-1),J={class:"m-auto text-center w-[50%] space-y-2"},K={class:"text-3xl font-bold text-[#FF2A5B]"},Q={class:"text-[#6D9AA0] text-lg"},W={class:"text-[#6D9AA0] text-lg"},X={style:{width:"25%"},class:"relative my-auto"},Z={style:{"margin-bottom":"2%"},class:"m-auto w-[95%] lg:w-[45%] shadow-xl p-[2%] rounded-xl relative"},$={key:0,class:"text-center text-xl font-bold tracking-wide",style:{color:"green"}},ee={class:"space-y-6"},te={class:"flex flex-col gap-4"},se={class:"flex flex-col",style:{"border-bottom":"2px solid rgb(194, 188, 188)"}},le={class:"text-base font-bold"},oe={key:0,class:"text-red-600 font-semibold text-sm rounded-md"},ne={class:"flex flex-col md:flex-row md:items-center md:justify-between md:gap-4"},re={class:"flex-1"},ie={class:"flex flex-col"},de={class:"text-base font-bold"},ae={class:"flex justify-center items-center",id:"calender"},ce={key:0,class:"text-red-600 font-semibold text-sm rounded-md"},ue={class:"flex-1"},_e={class:"flex flex-col",style:{"border-bottom":"2px solid rgb(194, 188, 188)"}},he={class:"text-base font-bold"},me={key:0,class:"text-red-600 font-semibold text-sm rounded-md"},pe={class:"flex flex-col md:flex-row md:items-center md:justify-between md:gap-4"},be={style:{"border-bottom":"2px solid rgb(194, 188, 188)"},class:"card w-[50%] justify-content-center"},fe={class:"text-base font-bold"},xe={value:"",disabled:"",selected:"",hidden:""},ge={class:"flex-1"},ye={class:"flex flex-col",style:{"border-bottom":"2px solid rgb(194, 188, 188)"}},ve={class:"text-base font-bold"},we={key:0,class:"text-red-600 font-semibold text-sm rounded-md"},ke={class:"flex flex-col md:flex-row md:items-center md:justify-between md:gap-4"},Ce={class:"flex-1"},Fe={class:"card justify-content-center"},Ve={class:"text-base font-bold"},De={value:"",disabled:"",selected:"",hidden:""},Ae={key:0,class:"text-red-600 font-semibold text-sm rounded-md"},je={key:0,class:"text-red-600 font-semibold text-sm rounded-md"},Me={class:"flex-1"},Ne={class:"flex flex-col",style:{"border-bottom":"2px solid rgb(194, 188, 188)"}},Ue={class:"text-base font-bold"},Re={key:0,class:"text-red-600 font-semibold text-sm rounded-md"},Be={class:"card w-[49%]"},Se={class:"text-base font-bold text-right"};function Te(n,i,b,C,o,p){const x=h("Calendar"),g=h("Dropdown");return t(),s("div",O,[e("div",P,[H,e("div",J,[e("h1",K,r(n.$t("Register_your_child")),1),e("h2",Q,r(n.$t("From_here_you_can_register_your_child_with_us_to_be_monitored")),1),e("h3",W,r(n.$t("The_extent_to_which_his_mental_and_physical_skill_developed")),1)]),e("div",X,[u(A,{onClick:p.goback,style:{right:"50%"},class:"bg-[#135C65] text-white p-6 absolute rounded-full",start:"",icon:"mdi-arrow-left"},null,8,["onClick"])])]),e("div",Z,[o.show_alert?(t(),s("p",$,r(o.alert_text),1)):_("",!0),e("form",ee,[e("div",te,[e("div",null,[e("div",se,[e("label",le,r(n.$t("Full_Name")),1),m(e("input",{type:"text",id:"name","onUpdate:modelValue":i[0]||(i[0]=l=>o.child.name=l),class:"border-b focus:ring-0"},null,512),[[f,o.child.name]])]),o.errors!=null?(t(),s("div",oe,[(t(!0),s(d,null,a(o.errors.name,l=>(t(),s("p",null,[(t(!0),s(d,null,a(l,c=>(t(),s("span",null,r(c),1))),256))]))),256))])):_("",!0)]),e("div",ne,[e("div",re,[e("div",ie,[e("label",de,r(n.$t("date_of_birth")),1),e("div",ae,[u(x,{style:{width:"100%",padding:""},showButtonBar:"",modelValue:o.child.birth_date,"onUpdate:modelValue":i[1]||(i[1]=l=>o.child.birth_date=l),dateFormat:"dd/mm/yy",maxDate:o.maxDate},null,8,["modelValue","maxDate"])])]),o.errors!=null?(t(),s("div",ce,[(t(!0),s(d,null,a(o.errors.birth_date,l=>(t(),s("p",null,[(t(!0),s(d,null,a(l,c=>(t(),s("span",null,r(c),1))),256))]))),256))])):_("",!0)]),e("div",ue,[e("div",_e,[e("label",he,r(n.$t("place_of_birth")),1),m(e("input",{type:"text",id:"birth_place","onUpdate:modelValue":i[2]||(i[2]=l=>o.child.birth_place=l),class:"border-b focus:ring-0"},null,512),[[f,o.child.birth_place]])]),o.errors!=null?(t(),s("div",me,[(t(!0),s(d,null,a(o.errors.birth_place,l=>(t(),s("p",null,[(t(!0),s(d,null,a(l,c=>(t(),s("span",null,r(c),1))),256))]))),256))])):_("",!0)])]),e("div",pe,[e("div",be,[e("label",fe,r(n.$t("primary_language")),1),m(e("select",{style:{"border-bottom":"2px solid rgb(194, 188, 188)"},class:"w-full",name:"drinks",id:"cars","onUpdate:modelValue":i[3]||(i[3]=l=>o.child.lang=l)},[e("option",xe,r(n.$t("primary_language")),1),(t(!0),s(d,null,a(o.lan,l=>(t(),s("option",null,r(l.lang),1))),256))],512),[[k,o.child.lang]])]),e("div",ge,[e("div",ye,[e("label",ve,r(n.$t("address")),1),m(e("input",{type:"text",id:"address","onUpdate:modelValue":i[4]||(i[4]=l=>o.child.address=l),class:"border-b focus:ring-0"},null,512),[[f,o.child.address]])]),o.errors!=null?(t(),s("div",we,[(t(!0),s(d,null,a(o.errors.address,l=>(t(),s("p",null,[(t(!0),s(d,null,a(l,c=>(t(),s("span",null,r(c),1))),256))]))),256))])):_("",!0)])]),e("div",ke,[e("div",Ce,[e("div",Fe,[e("label",Ve,r(n.$t("Nationality")),1),m(e("select",{style:{"border-bottom":"2px solid rgb(194, 188, 188)"},class:"w-full",name:"drinks",id:"cars","onUpdate:modelValue":i[5]||(i[5]=l=>o.child.nationalty=l)},[e("option",De,r(n.$t("Nationality_choose")),1),(t(!0),s(d,null,a(o.cities,l=>(t(),s("option",null,r(l.nationality),1))),256))],512),[[k,o.child.nationalty]]),o.errors!=null?(t(),s("div",Ae,[(t(!0),s(d,null,a(o.errors.nationalty,l=>(t(),s("p",null,[(t(!0),s(d,null,a(l,c=>(t(),s("span",null,r(c),1))),256))]))),256))])):_("",!0)]),o.errors!=null?(t(),s("div",je,[(t(!0),s(d,null,a(o.errors.nationalty,l=>(t(),s("p",null,[(t(!0),s(d,null,a(l,c=>(t(),s("span",null,r(c),1))),256))]))),256))])):_("",!0)]),e("div",Me,[e("div",Ne,[e("label",Ue,r(n.$t("national_id")),1),m(e("input",{type:"text",id:"national_id","onUpdate:modelValue":i[6]||(i[6]=l=>o.child.national_id=l),class:"border-b focus:ring-0"},null,512),[[f,o.child.national_id]])]),o.errors!=null?(t(),s("div",Re,[(t(!0),s(d,null,a(o.errors.national_id,l=>(t(),s("p",null,[(t(!0),s(d,null,a(l,c=>(t(),s("span",null,r(c),1))),256))]))),256))])):_("",!0)])]),e("div",Be,[e("h3",Se,r(n.$t("Type")),1),u(g,{id:"pv_id_2",modelValue:o.child.gender,"onUpdate:modelValue":i[7]||(i[7]=l=>o.child.gender=l),options:p.arr(),optionLabel:"name",placeholder:"Select a gender",class:"w-full md:w-14rem focus:ring-0"},null,8,["modelValue","options"])])]),e("button",{style:{padding:"2%"},class:"w-full rounded-3xl bg-[#148A98] text-white text-xl",onClick:i[8]||(i[8]=j((...l)=>p.addChild&&p.addChild(...l),["prevent"]))},r(n.$t("Register_now")),1)])])])}const Le=v(I,[["render",Te]]),Ye={components:{Map2:z,Nave:M,RForm:Le,About:N}};function Ee(n,i,b,C,o,p){const x=h("Map2"),g=h("nave"),l=h("RForm"),c=h("About");return t(),s(d,null,[u(x),u(g,{class:"shadow"}),u(l),u(c)],64)}const He=v(Ye,[["render",Ee]]);export{He as default};