import{_ as f,y as b,L as m,o as r,e as d,h as s,t as o,w as a,N as u,F as y,z as k,p as h,i as l,n as w,$ as g,v as p,l as v,a0 as x,a1 as j}from"./main-4b2cf09a.js";const C={props:["id"],data(){return{booking:{},show_status:!1,doctor:{},new_status:null,new_doctors:[],accept_notes:"",show_answer_modal:!1,show_modal:!1,modal_text:"",modal_color:""}},methods:{getBooking(){b.get(`/api/calender/bookings/${this.id}`).then(t=>{this.booking=t.data.booking.booking,this.new_status=t.data.booking.booking.accepted,this.doctor=t.data.booking.doctor,console.log(t)}).catch(t=>{console.log(t)})},updateBooking(){b.post(`/api/calender/bookings/${this.id}/accept`,{status:this.new_status,accepted_notes:this.accept_notes,user_id:this.booking.user_id,event_id:this.doctor.event_id,doctor_name:this.doctor.name,doctor_title:this.doctor.title}).then(t=>{this.show_modal=!0,console.log(t)}).catch(t=>{console.log(t)})},changeDoctor(t){b.post("/api/calender/change-doctor",{start:t}).then(n=>{this.new_doctors=n.data.doctors,console.log(n)}).catch(n=>{console.log(n)})}},computed:{event_data(){let t=m(this.booking.event_date).format("dddd"),n=m(this.booking.event_date).format("hh:mm: A");return`${t} -- ${n}`},status_text(){return this.new_status==0?"pending":this.new_status==1?"accepted":"cancelled"},modal_text_c(){return this.new_status==0?"الحجز تحت المراجعه":this.new_status==1?"تم تاكيد الحجز":"تم الغاء الحجز"},modal_color_c(){return this.new_status==0?"text-yellow-400":this.new_status==1?"text-green-700":"text-red-700"}},mounted(){this.getBooking()}},_=t=>(x("data-v-3c83e74f"),t=t(),j(),t),B={class:"mt-6"},M={class:"border-b text-3xl w-full md:w-1/2 uppercase text-green-800 py-4"},V={class:"grid grid-cols-2 w-full mt-4 py-2"},S={class:"bg-gray-100 rounded-xl text-right pb-6 md:pb-0 px-6 mx-6 self-start"},q={class:"border-b relative py-8 flex flex-col items-center justify-center"},A={class:"w-full flex flex-col md:flex-row md:justify-between md:items-center"},D=_(()=>s("svg",{xmlns:"http://www.w3.org/2000/svg",width:"25",height:"25",viewBox:"0 0 36 36"},[s("path",{id:"edit",d:"M0,0V36H36V12.729l-5.906,5.906V30.094H5.906V5.906H17.365L23.271,0ZM31.5,0,29.195,2.305l4.5,4.5L36,4.5ZM28.107,3.393,14.915,16.585l4.5,4.5L32.607,7.893l-4.5-4.5ZM13.258,18.67c-.067,0-.135.006-.2.011v4.263h4.263A4.507,4.507,0,0,0,15.9,19.778a3.761,3.761,0,0,0-2.641-1.107Z"})],-1)),L={class:"text-base font-bold px-2"},N={class:"flex-1"},P=["value"],Z=["src"],z={key:1,class:"flex flex-col text-center py-2"},H={style:{color:"#00897b","font-size":"2rem"}},I={style:{color:"#00897b"}},T={class:"py-2"},F={style:{color:"#00897b"}},U={class:"flex flex-col"},E={for:"notes",class:"my-2 w-full"},G={class:"my-9 py-2 border-black"},J={class:""},K={style:{color:"#00897b"}},O={class:"flex flex-col relative"},Q=["value"],R={class:"flex flex-col"},W=_(()=>s("option",{value:"0"},"Pending",-1)),X=_(()=>s("option",{value:"1"},"Accept",-1)),Y=_(()=>s("option",{value:"2"},"Cancell",-1)),$=[W,X,Y],ss=["disabled"],os={class:""},es={class:"border-b-2 my-9 py-2 border-black"},ts={class:""},ns={style:{color:"#00897b"}},ls={class:"border-b-2 my-9 py-2 border-black"},cs={class:""},is={style:{color:"#00897b"}},rs={class:"border-b-2 my-9 py-2 border-black"},ds={class:""},_s={style:{color:"#00897b"}},as={class:"border-b-2 my-9 py-2 border-black"},bs={class:""},hs={style:{color:"#00897b"}},ps={class:"border-b-2 my-9 py-2 border-black"},ms={class:""},us={style:{color:"#00897b"}},ys={class:"border-b-2 my-9 py-2 border-black"},gs={class:""},fs={style:{color:"#00897b"}},ks={class:"border-b-2 my-9 py-2 border-black"},ws={class:""},vs={style:{color:"#00897b"}},xs={class:"border-b-2 my-9 py-2 border-black"},js={class:""},Cs={style:{color:"#00897b"}},Bs={class:"border-b-2 my-9 py-2 border-black"},Ms={class:""},Vs={style:{color:"#00897b"}},Ss={class:"border-b-2 my-9 py-2 border-black"},qs={class:""},As={style:{color:"#00897b"}},Ds={class:"border-b-2 my-9 py-2 border-black"},Ls={class:""},Ns={style:{color:"#00897b"}},Ps={class:"border-b-2 my-9 py-2 border-black"},Zs={class:""},zs={style:{color:"#00897b"}},Hs={class:"border-b-2 my-9 py-2 border-black"},Is={class:""},Ts={style:{color:"#00897b"}},Fs={class:"border-b-2 my-9 py-2 border-black"},Us={class:""},Es={style:{color:"#00897b"}},Gs={class:"flex justify-between items-center"},Js={class:"my-9 py-2 border-b",style:{color:"#00897b"}},Ks={class:""},Os=_(()=>s("svg",{id:"__TEMP__SVG__",xmlns:"http://www.w3.org/2000/svg",width:"18.003",height:"15.754",viewBox:"0 0 18.003 15.754",class:"mx-2"},[s("path",{id:"Path_246","data-name":"Path 246",d:"M26.672,10.454a1.125,1.125,0,0,0-1.593,0l-6.75,6.75a1.125,1.125,0,0,0,0,1.593l6.75,6.75a1.126,1.126,0,1,0,1.593-1.593L20.717,18l5.955-5.954a1.125,1.125,0,0,0,0-1.593Z",transform:"translate(-17.998 -10.123)",fill:"#135C65","fill-rule":"evenodd"}),s("path",{id:"Path_247","data-name":"Path 247",d:"M25.875,18a1.125,1.125,0,0,0-1.125-1.125H10.125a1.125,1.125,0,0,0,0,2.25H24.75A1.125,1.125,0,0,0,25.875,18Z",transform:"translate(-7.872 -10.123)",fill:"#135C65","fill-rule":"evenodd"})],-1)),Qs={style:{color:"#00897b"}},Rs={class:"w-full mx-auto"},Ws={class:"flex justify-center"},Xs={class:"fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50"},Ys={class:"w-1/2 p-6 bg-white rounded-md shadow-xl"},$s={class:"flex items-center justify-between"},so={class:"text-3xl text-center"},oo=_(()=>s("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1)),eo=[oo],to={class:"mt-4"},no={class:"border-b-2 my-9 py-2 border-black"},lo={class:"font-bold"},co={class:"font-normal text-gray-400",style:{color:"#00897b"}},io={class:"border-b-2 my-9 py-2 border-black"},ro={class:"font-bold"},_o={class:"font-normal text-gray-400",style:{color:"#00897b"}},ao={class:"block"},bo={class:"text-sm font-normal text-gray-400"},ho={class:"border-b-2 my-9 py-2 border-black"},po={class:"font-bold"},mo={class:"font-normal text-gray-400",style:{color:"#00897b"}},uo={class:"block"},yo={class:"text-sm font-normal text-gray-400"},go={class:"border-b-2 my-9 py-2 border-black"},fo={class:"font-bold"},ko={class:"block"},wo={class:"text-sm font-normal text-gray-400"},vo={class:"border-b-2 my-9 py-2 border-black"},xo={class:"font-bold"},jo={class:"block font-normal text-gray-400"},Co={class:"w-full mx-auto"},Bo={class:"flex justify-center"},Mo={class:"absolute inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50"},Vo={class:"w-1/2 p-6 bg-white rounded-md shadow-xl"},So={class:"flex items-center justify-end"},qo=_(()=>s("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1)),Ao=[qo],Do={class:"mt-4 text-right"},Lo={class:"border-b-2 my-9 py-2 border-black"},No={class:"text-gray-500 flex items-center justify-end"},Po={class:"font-bold text-lg w-1/2 block",style:{color:"#00897b"}},Zo={class:"block w-1/2"},zo={class:"border-b-2 my-9 py-2 border-black"},Ho={class:"text-gray-500 flex items-center justify-end"},Io={class:"font-bold text-lg w-1/2 block",style:{color:"#00897b"}},To={class:"block w-1/2"},Fo={key:0,class:"border-b-2 my-9 py-2 border-black"},Uo={class:"text-gray-500 flex items-center justify-end"},Eo={class:"font-bold text-lg w-1/2 block",style:{color:"#00897b"}},Go={class:"block w-1/2"},Jo={class:"border-b-2 my-9 py-2 border-black"},Ko={class:"text-gray-500 flex items-center justify-end"},Oo={class:"font-bold text-lg w-1/2 block",style:{color:"#00897b"}},Qo={class:"block w-1/2"},Ro={class:"border-b-2 my-9 py-2 border-black"},Wo={class:"text-gray-500 flex items-center justify-end"},Xo={class:"font-bold text-lg w-1/2 block",style:{color:"#00897b"}},Yo={class:"block w-1/2"};function $o(t,n,se,oe,e,i){return r(),d(y,null,[s("div",B,[s("h1",M,o(t.$t("bookings"))+" / "+o(e.booking.requester_name),1),s("div",V,[s("div",S,[s("div",q,[s("div",A,[s("div",{onClick:n[0]||(n[0]=c=>i.changeDoctor(e.booking.event_date)),class:"cursor-pointer flex flex-row-reverse pt-4 pb-2 m-3"},[D,s("p",L,o(e.doctor?t.$t("change_of_specialist"):t.$t("Choose_a_specialist")),1)]),s("div",N,[a(s("select",{name:"",id:"",class:"w-full","onUpdate:modelValue":n[1]||(n[1]=c=>e.doctor=c)},[(r(!0),d(y,null,k(e.new_doctors,c=>(r(),d("option",{value:c},o(c.name),9,P))),256))],512),[[u,e.doctor]])])]),e.doctor?(r(),d("img",{key:0,src:e.doctor.image,class:"object-cover rounded-xl mt-12",width:"400",alt:"",srcset:""},null,8,Z)):h("",!0),e.doctor?(r(),d("p",z,[s("span",H,o(e.doctor.name),1),s("span",I,o(e.doctor.title),1)])):h("",!0)]),s("div",null,[s("p",T,[s("span",null,[l(o(t.$t("Consultation_date"))+" : ",1),s("span",F,o(i.event_data),1)])]),s("div",U,[s("label",E,o(t.$t("Submit_a_note"))+" : ",1),a(s("textarea",{name:"notes","onUpdate:modelValue":n[2]||(n[2]=c=>e.accept_notes=c),id:"notes",class:"border ring-1 ring-black border-black rounded-md focus:ring-black",cols:"30",rows:"4"},null,512),[[w,e.accept_notes]])]),s("p",G,[s("span",J,[l(o(t.$t("request_sender"))+" : ",1),s("span",K,o(e.booking.requester_name),1)])])]),s("div",O,[s("input",{onClick:n[3]||(n[3]=c=>e.show_status=!e.show_status),type:"button",class:g(["w-full my-2 text-center py-2.5 px-4 text-white rounded-lg text-lg font-bold tracking-wider cursor-pointer",{"bg-emerald-500":e.new_status==1,"bg-red-500":e.new_status==2,"bg-yellow-400":e.new_status==0}]),value:i.status_text},null,10,Q),a(s("div",R,[a(s("select",{"onUpdate:modelValue":n[4]||(n[4]=c=>e.new_status=c),class:"w-full my-2 text-center py-2.5 px-4 rounded-lg text-lg font-bold tracking-wider cursor-pointer",onChange:n[5]||(n[5]=c=>e.show_status=!1)},$,544),[[u,e.new_status]])],512),[[p,e.show_status]])]),s("button",{onClick:n[6]||(n[6]=v((...c)=>i.updateBooking&&i.updateBooking(...c),["prevent"])),id:"submit",class:"w-full text-center py-2.5 px-4 text-white rounded-lg",style:{"background-color":"#00838f"},disabled:e.doctor==null},o(t.$t("submit")),9,ss)]),s("div",os,[s("p",es,[s("span",ts,[l(o(t.$t("applicant"))+" : ",1),s("span",ns,o(e.booking.requester_name),1)])]),s("p",ls,[s("span",cs,[l(o(t.$t("degree_closeness_child"))+" : ",1),s("span",is,o(e.booking.relative_degree),1)])]),s("p",rs,[s("span",ds,[l(o(t.$t("Full_Name"))+" : ",1),s("span",_s,o(e.booking.child_name),1)])]),s("p",as,[s("span",bs,[l(o(t.$t("place_of_birth"))+" : ",1),s("span",hs,o(e.booking.child_birth_place),1)])]),s("p",ps,[s("span",ms,[l(o(t.$t("birth_date"))+" : ",1),s("span",us,o(e.booking.child_birth_date),1)])]),s("p",ys,[s("span",gs,[l(o(t.$t("primary_language"))+": ",1),s("span",fs,o(e.booking.child_lang),1)])]),s("p",ks,[s("span",ws,[l(o(t.$t("Nationality"))+" : ",1),s("span",vs,o(e.booking.child_nationalty),1)])]),s("p",xs,[s("span",js,[l(o(t.$t("national_number"))+" : ",1),s("span",Cs,o(e.booking.child_national_id),1)])]),s("p",Bs,[s("span",Ms,[l(o(t.$t("address"))+" : ",1),s("span",Vs,o(e.booking.child_address),1)])]),s("p",Ss,[s("span",qs,[l(o(t.$t("phone_number"))+": ",1),s("span",As,o(e.booking.requester_phone),1)])]),s("p",Ds,[s("span",Ls,[l(o(t.$t("Additional_phone_number"))+" : ",1),s("span",Ns,o(e.booking.addtional_phone),1)])]),s("p",Ps,[s("span",Zs,[l(o(t.$t("owner_extra_number"))+" : ",1),s("span",zs,o(e.booking.addtional_phone_owner),1)])]),s("p",Hs,[s("span",Is,[l(o(t.$t("degree_closeness_child"))+" : ",1),s("span",Ts,o(e.booking.addtional_phone_degree),1)])]),s("p",Fs,[s("span",Us,[l(o(t.$t("conversion_source"))+" : ",1),s("span",Es,o(e.booking.conversion_type),1)])]),s("div",Gs,[s("p",Js,[s("span",Ks,[l(o(t.$t("Specialist_code"))+": ",1),s("span",null,o(e.booking.doctor_code),1)])]),s("p",{class:"my-9 py-2 flex items-center cursor-pointer",onClick:n[7]||(n[7]=c=>e.show_answer_modal=!0)},[Os,s("span",Qs,o(t.$t("Answer_the_questions")),1)])])])])]),s("div",Rs,[s("div",Ws,[a(s("div",Xs,[s("div",Ys,[s("div",$s,[s("h3",so,o(t.$t("Answer_the_questions")),1),(r(),d("svg",{onClick:n[8]||(n[8]=c=>e.show_answer_modal=!1),xmlns:"http://www.w3.org/2000/svg",class:"w-8 h-8 cursor-pointer",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},eo))]),s("div",to,[s("p",no,[s("span",lo,[l(o(t.$t("Type"))+" : ",1),s("span",co,o(e.booking.child_gender==1?"male":"female"),1)])]),s("p",io,[s("span",ro,[l(o(t.$t("problem_type"))+" : ",1),s("span",_o,o(e.booking.child_problem),1)]),s("span",ao,[s("span",bo,o(e.booking.child_problems_notes),1)])]),s("p",ho,[s("span",po,[l(o(t.$t("child_problem"))+" : ",1),s("span",mo,o(e.booking.child_aids==1?"yes":"no"),1)]),s("span",uo,[s("span",yo,o(e.booking.child_aids_notes),1)])]),s("p",go,[s("span",fo,[l(o(t.$t("main_problems"))+" : ",1),s("span",ko,[s("span",wo,o(e.booking.child_aids_notes),1)])])]),s("p",vo,[s("span",xo,[l(o(t.$t("priority_parents"))+" : ",1),s("span",jo,o(e.booking.parents_priorities),1)])])])])],512),[[p,e.show_answer_modal]])])]),s("div",Co,[s("div",Bo,[a(s("div",Mo,[s("div",Vo,[s("div",So,[s("h3",{class:g(["text-2xl text-center w-full font-bold inline-flex items-center justify-center",i.modal_color_c])},o(i.modal_text_c)+" ",3),(r(),d("svg",{onClick:n[9]||(n[9]=c=>e.show_modal=!1),xmlns:"http://www.w3.org/2000/svg",class:"w-8 h-8 cursor-pointer",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},Ao))]),s("div",Do,[s("p",Lo,[s("span",No,[s("span",Po,o(e.booking.child_name),1),s("label",Zo,o(t.$t("الاسم الرباعي للطفل")),1)])]),s("p",zo,[s("span",Ho,[s("span",Io,o(i.event_data),1),s("label",To,o(t.$t("موعد الاستشاره")),1)])]),e.doctor?(r(),d("p",Fo,[s("span",Uo,[s("span",Eo,o(e.doctor.name),1),s("label",Go,o(t.$t("اسم الاخصائي")),1)])])):h("",!0),s("p",Jo,[s("span",Ko,[s("span",Oo,o(e.accept_notes)+"...",1),s("label",Qo,o(t.$t("ملاحظه")),1)])]),s("p",Ro,[s("span",Wo,[s("span",Xo,o(e.booking.requester_name),1),s("label",Yo,o(t.$t("اسم مرسل الطلب")),1)])])])])],512),[[p,e.show_modal]])])])],64)}const te=f(C,[["render",$o],["__scopeId","data-v-3c83e74f"]]);export{te as default};
