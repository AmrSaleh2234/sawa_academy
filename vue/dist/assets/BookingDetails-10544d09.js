import{_ as f,y as b,o as r,e as d,h as s,t as o,w as a,L as m,F as u,l as k,E as h,i as l,p as w,Y as y,v as p,n as v,$ as x,a0 as j}from"./main-7109bf79.js";import{h as g}from"./moment-fbc5633a.js";const C="/assets/doctor-6dcda6f1.jpg";const B={props:["id"],data(){return{booking:{},show_status:!1,doctor:{},new_status:null,new_doctors:[],accept_notes:"",show_answer_modal:!1,show_modal:!1,modal_text:"",modal_color:""}},methods:{getBooking(){b.get(`/api/calender/bookings/${this.id}`).then(t=>{this.booking=t.data.booking.booking,this.new_status=t.data.booking.booking.accepted,this.doctor=t.data.booking.doctor,console.log(t)}).catch(t=>{console.log(t)})},updateBooking(){b.post(`/api/calender/bookings/${this.id}/accept`,{status:this.new_status,accepted_notes:this.accept_notes,user_id:this.booking.user_id,event_id:this.doctor.event_id,doctor_name:this.doctor.name,doctor_title:this.doctor.title}).then(t=>{this.show_modal=!0,console.log(t)}).catch(t=>{console.log(t)})},changeDoctor(t){b.post("/api/calender/change-doctor",{start:t}).then(n=>{this.new_doctors=n.data.doctors,console.log(n)}).catch(n=>{console.log(n)})}},computed:{event_data(){let t=g(this.booking.event_date).format("dddd"),n=g(this.booking.event_date).format("hh:mm: A");return`${t} -- ${n}`},status_text(){return this.new_status==0?"pending":this.new_status==1?"accepted":"cancelled"},modal_text_c(){return this.new_status==0?"الحجز تحت المراجعه":this.new_status==1?"تم تاكيد الحجز":"تم الغاء الحجز"},modal_color_c(){return this.new_status==0?"text-yellow-400":this.new_status==1?"text-green-700":"text-red-700"}},mounted(){this.getBooking()}},_=t=>(x("data-v-cf8fe3c8"),t=t(),j(),t),M={class:"mt-6"},V={class:"border-b text-3xl w-full md:w-1/2 uppercase text-green-800 py-4"},S={class:"flex flex-col md:flex-row md:justify-between w-full mt-4 py-2"},q={class:"bg-gray-100 rounded-xl text-right pb-6 md:pb-0 px-6 mx-6 self-start"},A={class:"border-b relative py-8 flex flex-col items-center justify-center"},D={class:"w-full flex flex-col md:flex-row md:justify-between md:items-center"},L=_(()=>s("svg",{xmlns:"http://www.w3.org/2000/svg",width:"25",height:"25",viewBox:"0 0 36 36"},[s("path",{id:"edit",d:"M0,0V36H36V12.729l-5.906,5.906V30.094H5.906V5.906H17.365L23.271,0ZM31.5,0,29.195,2.305l4.5,4.5L36,4.5ZM28.107,3.393,14.915,16.585l4.5,4.5L32.607,7.893l-4.5-4.5ZM13.258,18.67c-.067,0-.135.006-.2.011v4.263h4.263A4.507,4.507,0,0,0,15.9,19.778a3.761,3.761,0,0,0-2.641-1.107Z"})],-1)),P={class:"text-base font-bold px-2"},Z={class:"flex-1"},H=["value"],N={key:0,src:C,class:"object-cover rounded-xl mt-12",width:"400",alt:"",srcset:""},z={key:1,class:"flex flex-col text-center py-2"},I={style:{color:"#00897b","font-size":"2rem"}},T={style:{color:"#00897b"}},E={class:"py-2"},F={style:{color:"#00897b"}},U={class:"flex flex-col"},G={for:"notes",class:"my-2 w-full"},Y={class:"my-9 py-2 border-black"},J={class:""},K={style:{color:"#00897b"}},O={class:"flex flex-col relative"},Q=["value"],R={class:"flex flex-col"},W=_(()=>s("option",{value:"0"},"Pending",-1)),X=_(()=>s("option",{value:"1"},"Accept",-1)),$=_(()=>s("option",{value:"2"},"Cancell",-1)),ss=[W,X,$],os=["disabled"],es={class:"flex-1 w-2/3"},ts={class:"border-b-2 my-9 py-2 border-black"},ns={class:""},ls={style:{color:"#00897b"}},cs={class:"border-b-2 my-9 py-2 border-black"},is={class:""},rs={style:{color:"#00897b"}},ds={class:"border-b-2 my-9 py-2 border-black"},_s={class:""},as={style:{color:"#00897b"}},bs={class:"border-b-2 my-9 py-2 border-black"},hs={class:""},ps={style:{color:"#00897b"}},ms={class:"border-b-2 my-9 py-2 border-black"},us={class:""},ys={style:{color:"#00897b"}},gs={class:"border-b-2 my-9 py-2 border-black"},fs={class:""},ks={style:{color:"#00897b"}},ws={class:"border-b-2 my-9 py-2 border-black"},vs={class:""},xs={style:{color:"#00897b"}},js={class:"border-b-2 my-9 py-2 border-black"},Cs={class:""},Bs={style:{color:"#00897b"}},Ms={class:"border-b-2 my-9 py-2 border-black"},Vs={class:""},Ss={style:{color:"#00897b"}},qs={class:"border-b-2 my-9 py-2 border-black"},As={class:""},Ds={style:{color:"#00897b"}},Ls={class:"border-b-2 my-9 py-2 border-black"},Ps={class:""},Zs={style:{color:"#00897b"}},Hs={class:"border-b-2 my-9 py-2 border-black"},Ns={class:""},zs={style:{color:"#00897b"}},Is={class:"border-b-2 my-9 py-2 border-black"},Ts={class:""},Es={style:{color:"#00897b"}},Fs={class:"border-b-2 my-9 py-2 border-black"},Us={class:""},Gs={style:{color:"#00897b"}},Ys={class:"flex justify-between items-center"},Js={class:"my-9 py-2 border-b",style:{color:"#00897b"}},Ks={class:""},Os=_(()=>s("svg",{id:"__TEMP__SVG__",xmlns:"http://www.w3.org/2000/svg",width:"18.003",height:"15.754",viewBox:"0 0 18.003 15.754",class:"mx-2"},[s("path",{id:"Path_246","data-name":"Path 246",d:"M26.672,10.454a1.125,1.125,0,0,0-1.593,0l-6.75,6.75a1.125,1.125,0,0,0,0,1.593l6.75,6.75a1.126,1.126,0,1,0,1.593-1.593L20.717,18l5.955-5.954a1.125,1.125,0,0,0,0-1.593Z",transform:"translate(-17.998 -10.123)",fill:"#135C65","fill-rule":"evenodd"}),s("path",{id:"Path_247","data-name":"Path 247",d:"M25.875,18a1.125,1.125,0,0,0-1.125-1.125H10.125a1.125,1.125,0,0,0,0,2.25H24.75A1.125,1.125,0,0,0,25.875,18Z",transform:"translate(-7.872 -10.123)",fill:"#135C65","fill-rule":"evenodd"})],-1)),Qs={style:{color:"#00897b"}},Rs={class:"w-full mx-auto"},Ws={class:"flex justify-center"},Xs={class:"absolute inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50"},$s={class:"w-1/2 p-6 bg-white rounded-md shadow-xl"},so={class:"flex items-center justify-between"},oo={class:"text-3xl text-center"},eo=_(()=>s("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1)),to=[eo],no={class:"mt-4"},lo={class:"border-b-2 my-9 py-2 border-black"},co={class:"font-bold"},io={class:"font-normal text-gray-400",style:{color:"#00897b"}},ro={class:"border-b-2 my-9 py-2 border-black"},_o={class:"font-bold"},ao={class:"font-normal text-gray-400",style:{color:"#00897b"}},bo={class:"block"},ho={class:"text-sm font-normal text-gray-400"},po={class:"border-b-2 my-9 py-2 border-black"},mo={class:"font-bold"},uo={class:"font-normal text-gray-400",style:{color:"#00897b"}},yo={class:"block"},go={class:"text-sm font-normal text-gray-400"},fo={class:"border-b-2 my-9 py-2 border-black"},ko={class:"font-bold"},wo={class:"block"},vo={class:"text-sm font-normal text-gray-400"},xo={class:"border-b-2 my-9 py-2 border-black"},jo={class:"font-bold"},Co={class:"block font-normal text-gray-400"},Bo={class:"w-full mx-auto"},Mo={class:"flex justify-center"},Vo={class:"absolute inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50"},So={class:"w-1/2 p-6 bg-white rounded-md shadow-xl"},qo={class:"flex items-center justify-end"},Ao=_(()=>s("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1)),Do=[Ao],Lo={class:"mt-4 text-right"},Po={class:"border-b-2 my-9 py-2 border-black"},Zo={class:"text-gray-500 flex items-center justify-end"},Ho={class:"font-bold text-lg w-1/2 block",style:{color:"#00897b"}},No={class:"block w-1/2"},zo={class:"border-b-2 my-9 py-2 border-black"},Io={class:"text-gray-500 flex items-center justify-end"},To={class:"font-bold text-lg w-1/2 block",style:{color:"#00897b"}},Eo={class:"block w-1/2"},Fo={key:0,class:"border-b-2 my-9 py-2 border-black"},Uo={class:"text-gray-500 flex items-center justify-end"},Go={class:"font-bold text-lg w-1/2 block",style:{color:"#00897b"}},Yo={class:"block w-1/2"},Jo={class:"border-b-2 my-9 py-2 border-black"},Ko={class:"text-gray-500 flex items-center justify-end"},Oo={class:"font-bold text-lg w-1/2 block",style:{color:"#00897b"}},Qo={class:"block w-1/2"},Ro={class:"border-b-2 my-9 py-2 border-black"},Wo={class:"text-gray-500 flex items-center justify-end"},Xo={class:"font-bold text-lg w-1/2 block",style:{color:"#00897b"}},$o={class:"block w-1/2"};function se(t,n,oe,ee,e,i){return r(),d(u,null,[s("div",M,[s("h1",V,o(t.$t("bookings"))+" / "+o(e.booking.requester_name),1),s("div",S,[s("div",q,[s("div",A,[s("div",D,[s("div",{onClick:n[0]||(n[0]=c=>i.changeDoctor(e.booking.event_date)),class:"cursor-pointer flex flex-row-reverse pt-4 pb-2 m-3"},[L,s("p",P,o(e.doctor?t.$t("change_of_specialist"):t.$t("Choose_a_specialist")),1)]),s("div",Z,[a(s("select",{name:"",id:"",class:"w-full","onUpdate:modelValue":n[1]||(n[1]=c=>e.doctor=c)},[(r(!0),d(u,null,k(e.new_doctors,c=>(r(),d("option",{value:c},o(c.name),9,H))),256))],512),[[m,e.doctor]])])]),e.doctor?(r(),d("img",N)):h("",!0),e.doctor?(r(),d("p",z,[s("span",I,o(e.doctor.name),1),s("span",T,o(e.doctor.title),1)])):h("",!0)]),s("div",null,[s("p",E,[s("span",null,[l(o(t.$t("Consultation_date"))+" : ",1),s("span",F,o(i.event_data),1)])]),s("div",U,[s("label",G,o(t.$t("Submit_a_note"))+" : ",1),a(s("textarea",{name:"notes","onUpdate:modelValue":n[2]||(n[2]=c=>e.accept_notes=c),id:"notes",class:"border ring-1 ring-black border-black rounded-md focus:ring-black",cols:"30",rows:"4"},null,512),[[w,e.accept_notes]])]),s("p",Y,[s("span",J,[l(o(t.$t("request_sender"))+" : ",1),s("span",K,o(e.booking.requester_name),1)])])]),s("div",O,[s("input",{onClick:n[3]||(n[3]=c=>e.show_status=!e.show_status),type:"button",class:y(["w-full my-2 text-center py-2.5 px-4 text-white rounded-lg text-lg font-bold tracking-wider cursor-pointer",{"bg-emerald-500":e.new_status==1,"bg-red-500":e.new_status==2,"bg-yellow-400":e.new_status==0}]),value:i.status_text},null,10,Q),a(s("div",R,[a(s("select",{"onUpdate:modelValue":n[4]||(n[4]=c=>e.new_status=c),class:"w-full my-2 text-center py-2.5 px-4 rounded-lg text-lg font-bold tracking-wider cursor-pointer",onChange:n[5]||(n[5]=c=>e.show_status=!1)},ss,544),[[m,e.new_status]])],512),[[p,e.show_status]])]),s("button",{onClick:n[6]||(n[6]=v((...c)=>i.updateBooking&&i.updateBooking(...c),["prevent"])),id:"submit",class:"w-full text-center py-2.5 px-4 text-white rounded-lg",style:{"background-color":"#00838f"},disabled:e.doctor==null},o(t.$t("submit")),9,os)]),s("div",es,[s("p",ts,[s("span",ns,[l(o(t.$t("applicant"))+" : ",1),s("span",ls,o(e.booking.requester_name),1)])]),s("p",cs,[s("span",is,[l(o(t.$t("degree_closeness_child"))+" : ",1),s("span",rs,o(e.booking.relative_degree),1)])]),s("p",ds,[s("span",_s,[l(o(t.$t("Full_Name"))+" : ",1),s("span",as,o(e.booking.child_name),1)])]),s("p",bs,[s("span",hs,[l(o(t.$t("place_of_birth"))+" : ",1),s("span",ps,o(e.booking.child_birth_place),1)])]),s("p",ms,[s("span",us,[l(o(t.$t("birth_date"))+" : ",1),s("span",ys,o(e.booking.child_birth_date),1)])]),s("p",gs,[s("span",fs,[l(o(t.$t("primary_language"))+": ",1),s("span",ks,o(e.booking.child_lang),1)])]),s("p",ws,[s("span",vs,[l(o(t.$t("Nationality"))+" : ",1),s("span",xs,o(e.booking.child_nationalty),1)])]),s("p",js,[s("span",Cs,[l(o(t.$t("national_number"))+" : ",1),s("span",Bs,o(e.booking.child_national_id),1)])]),s("p",Ms,[s("span",Vs,[l(o(t.$t("address"))+" : ",1),s("span",Ss,o(e.booking.child_address),1)])]),s("p",qs,[s("span",As,[l(o(t.$t("phone_number"))+": ",1),s("span",Ds,o(e.booking.requester_phone),1)])]),s("p",Ls,[s("span",Ps,[l(o(t.$t("Additional_phone_number"))+" : ",1),s("span",Zs,o(e.booking.addtional_phone),1)])]),s("p",Hs,[s("span",Ns,[l(o(t.$t("owner_extra_number"))+" : ",1),s("span",zs,o(e.booking.addtional_phone_owner),1)])]),s("p",Is,[s("span",Ts,[l(o(t.$t("degree_closeness_child"))+" : ",1),s("span",Es,o(e.booking.addtional_phone_degree),1)])]),s("p",Fs,[s("span",Us,[l(o(t.$t("conversion_source"))+" : ",1),s("span",Gs,o(e.booking.conversion_type),1)])]),s("div",Ys,[s("p",Js,[s("span",Ks,[l(o(t.$t("Specialist_code"))+": ",1),s("span",null,o(e.booking.doctor_code),1)])]),s("p",{class:"my-9 py-2 flex items-center cursor-pointer",onClick:n[7]||(n[7]=c=>e.show_answer_modal=!0)},[Os,s("span",Qs,o(t.$t("Answer_the_questions")),1)])])])])]),s("div",Rs,[s("div",Ws,[a(s("div",Xs,[s("div",$s,[s("div",so,[s("h3",oo,o(t.$t("Answer_the_questions")),1),(r(),d("svg",{onClick:n[8]||(n[8]=c=>e.show_answer_modal=!1),xmlns:"http://www.w3.org/2000/svg",class:"w-8 h-8 cursor-pointer",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},to))]),s("div",no,[s("p",lo,[s("span",co,[l(o(t.$t("Type"))+" : ",1),s("span",io,o(e.booking.child_gender==1?"male":"female"),1)])]),s("p",ro,[s("span",_o,[l(o(t.$t("problem_type"))+" : ",1),s("span",ao,o(e.booking.child_problem),1)]),s("span",bo,[s("span",ho,o(e.booking.child_problems_notes),1)])]),s("p",po,[s("span",mo,[l(o(t.$t("child_problem"))+" : ",1),s("span",uo,o(e.booking.child_aids==1?"yes":"no"),1)]),s("span",yo,[s("span",go,o(e.booking.child_aids_notes),1)])]),s("p",fo,[s("span",ko,[l(o(t.$t("main_problems"))+" : ",1),s("span",wo,[s("span",vo,o(e.booking.child_aids_notes),1)])])]),s("p",xo,[s("span",jo,[l(o(t.$t("priority_parents"))+" : ",1),s("span",Co,o(e.booking.parents_priorities),1)])])])])],512),[[p,e.show_answer_modal]])])]),s("div",Bo,[s("div",Mo,[a(s("div",Vo,[s("div",So,[s("div",qo,[s("h3",{class:y(["text-2xl text-center w-full font-bold inline-flex items-center justify-center",i.modal_color_c])},o(i.modal_text_c)+" ",3),(r(),d("svg",{onClick:n[9]||(n[9]=c=>e.show_modal=!1),xmlns:"http://www.w3.org/2000/svg",class:"w-8 h-8 cursor-pointer",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},Do))]),s("div",Lo,[s("p",Po,[s("span",Zo,[s("span",Ho,o(e.booking.child_name),1),s("label",No,o(t.$t("الاسم الرباعي للطفل")),1)])]),s("p",zo,[s("span",Io,[s("span",To,o(i.event_data),1),s("label",Eo,o(t.$t("موعد الاستشاره")),1)])]),e.doctor?(r(),d("p",Fo,[s("span",Uo,[s("span",Go,o(e.doctor.name),1),s("label",Yo,o(t.$t("اسم الاخصائي")),1)])])):h("",!0),s("p",Jo,[s("span",Ko,[s("span",Oo,o(e.accept_notes)+"...",1),s("label",Qo,o(t.$t("ملاحظه")),1)])]),s("p",Ro,[s("span",Wo,[s("span",Xo,o(e.booking.requester_name),1),s("label",$o,o(t.$t("اسم مرسل الطلب")),1)])])])])],512),[[p,e.show_modal]])])])],64)}const le=f(B,[["render",se],["__scopeId","data-v-cf8fe3c8"]]);export{le as default};
