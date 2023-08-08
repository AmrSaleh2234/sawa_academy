import{_ as y,z as a,o as r,e as d,h as s,t,G as b,i as n,p as h,y as g,x as k,X as f,v as p,F as x,Y as u,$ as w}from"./main-2b411341.js";import{h as m}from"./moment-fbc5633a.js";const v="/assets/doctor-6dcda6f1.jpg";const j={props:["id"],data(){return{booking:{},doctor:{},accept_notes:"",show_answer_modal:!1,show_accept_modal:!1}},methods:{getBooking(){a.get(`/api/calender/bookings/${this.id}`).then(e=>{this.booking=e.data.booking.booking,this.doctor=e.data.booking.doctor,console.log(e)}).catch(e=>{console.log(e)})},acceptBooking(){a.post(`/api/calender/bookings/${this.id}/accept`,{status:1,accepted_notes:this.accept_notes,event_id:this.booking.event_id,user_id:this.booking.user_id,doctor_name:this.doctor.name,doctor_title:this.doctor.title}).then(e=>{this.show_accept_modal=!0,console.log(e)}).catch(e=>{console.log(e)})},changeDoctor(e){a.post("/api/calender/change-doctor",{start:e}).then(c=>{console.log(c)}).catch(c=>{console.log(c)})}},computed:{event_data(){let e=m(this.booking.event_date).format("dddd"),c=m(this.booking.event_date).format("hh:mm: A");return`${e} -- ${c}`}},mounted(){this.getBooking()}},l=e=>(u("data-v-561aed51"),e=e(),w(),e),B={class:"mt-6"},M={class:"border-b text-3xl w-full md:w-1/2 uppercase text-green-800 py-4"},C={class:"flex flex-col md:flex-row md:justify-between w-full mt-4 py-2"},V={class:"bg-gray-100 rounded-xl text-right pb-6 md:pb-0 px-6 mx-6 self-start"},Z={class:"border-b relative py-8 flex flex-col items-center justify-center"},D=l(()=>s("svg",{xmlns:"http://www.w3.org/2000/svg",width:"25",height:"25",viewBox:"0 0 36 36"},[s("path",{id:"edit",d:"M0,0V36H36V12.729l-5.906,5.906V30.094H5.906V5.906H17.365L23.271,0ZM31.5,0,29.195,2.305l4.5,4.5L36,4.5ZM28.107,3.393,14.915,16.585l4.5,4.5L32.607,7.893l-4.5-4.5ZM13.258,18.67c-.067,0-.135.006-.2.011v4.263h4.263A4.507,4.507,0,0,0,15.9,19.778a3.761,3.761,0,0,0-2.641-1.107Z"})],-1)),L={class:"text-sm font-bold px-2"},S={key:0,src:v,class:"object-cover rounded-xl mt-12",width:"400",alt:"",srcset:""},q={key:1,class:"flex flex-col text-center py-2"},z={style:{color:"#00897b","font-size":"2rem"}},A={style:{color:"#00897b"}},H={class:"py-2"},P={style:{color:"#00897b"}},I={class:"flex flex-col"},N=l(()=>s("label",{for:"notes",class:"my-2"}," : تقديم ملاحظة",-1)),T={class:"my-9 py-2 border-black"},E={class:""},F={style:{color:"#00897b"}},G=["disabled"],U={class:"flex-1 w-2/3 text-right"},X={class:"border-b-2 my-9 py-2 border-black"},Y={class:""},J={style:{color:"#00897b"}},K={class:"border-b-2 my-9 py-2 border-black"},O={class:""},Q={style:{color:"#00897b"}},R={class:"border-b-2 my-9 py-2 border-black"},W={class:""},$={style:{color:"#00897b"}},ss={class:"border-b-2 my-9 py-2 border-black"},os={class:""},ts={style:{color:"#00897b"}},es={class:"border-b-2 my-9 py-2 border-black"},ns={class:""},cs={style:{color:"#00897b"}},ls={class:"border-b-2 my-9 py-2 border-black"},is={class:""},rs={style:{color:"#00897b"}},ds={class:"border-b-2 my-9 py-2 border-black"},_s={class:""},as={style:{color:"#00897b"}},bs={class:"border-b-2 my-9 py-2 border-black"},hs={class:""},ps={style:{color:"#00897b"}},ms={class:"border-b-2 my-9 py-2 border-black"},ys={class:""},gs={style:{color:"#00897b"}},ks={class:"border-b-2 my-9 py-2 border-black"},fs={class:""},xs={style:{color:"#00897b"}},us={class:"border-b-2 my-9 py-2 border-black"},ws={class:""},vs={style:{color:"#00897b"}},js={class:"border-b-2 my-9 py-2 border-black"},Bs={class:""},Ms={style:{color:"#00897b"}},Cs={class:"border-b-2 my-9 py-2 border-black"},Vs={class:""},Zs={style:{color:"#00897b"}},Ds={class:"border-b-2 my-9 py-2 border-black"},Ls={class:""},Ss={style:{color:"#00897b"}},qs={class:"flex justify-between items-center"},zs={class:"my-9 py-2 border-b",style:{color:"#00897b"}},As={class:""},Hs=l(()=>s("svg",{id:"__TEMP__SVG__",xmlns:"http://www.w3.org/2000/svg",width:"18.003",height:"15.754",viewBox:"0 0 18.003 15.754",class:"mx-2"},[s("path",{id:"Path_246","data-name":"Path 246",d:"M26.672,10.454a1.125,1.125,0,0,0-1.593,0l-6.75,6.75a1.125,1.125,0,0,0,0,1.593l6.75,6.75a1.126,1.126,0,1,0,1.593-1.593L20.717,18l5.955-5.954a1.125,1.125,0,0,0,0-1.593Z",transform:"translate(-17.998 -10.123)",fill:"#135c65","fill-rule":"evenodd"}),s("path",{id:"Path_247","data-name":"Path 247",d:"M25.875,18a1.125,1.125,0,0,0-1.125-1.125H10.125a1.125,1.125,0,0,0,0,2.25H24.75A1.125,1.125,0,0,0,25.875,18Z",transform:"translate(-7.872 -10.123)",fill:"#135c65","fill-rule":"evenodd"})],-1)),Ps=l(()=>s("span",{style:{color:"#00897b"}},"إجابة الاسألة",-1)),Is=[Hs,Ps],Ns={class:"w-full mx-auto"},Ts={class:"flex justify-center"},Es={class:"absolute inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50"},Fs={class:"w-1/2 p-6 bg-white rounded-md shadow-xl"},Gs={class:"flex items-center justify-between"},Us=l(()=>s("h3",{class:"text-2xl text-center"},"اجابه الاسئله",-1)),Xs=l(()=>s("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1)),Ys=[Xs],Js={class:"mt-4 text-right"},Ks={class:"border-b-2 my-9 py-2 border-black"},Os={class:"font-bold"},Qs={class:"font-normal text-gray-400",style:{color:"#00897b"}},Rs={class:"border-b-2 my-9 py-2 border-black"},Ws={class:"font-bold"},$s={class:"font-normal text-gray-400",style:{color:"#00897b"}},so={class:"block"},oo={class:"text-sm font-normal text-gray-400"},to={class:"border-b-2 my-9 py-2 border-black"},eo={class:"font-bold"},no={class:"font-normal text-gray-400",style:{color:"#00897b"}},co={class:"block"},lo={class:"text-sm font-normal text-gray-400"},io={class:"border-b-2 my-9 py-2 border-black"},ro={class:"font-bold"},_o={class:"block"},ao={class:"text-sm font-normal text-gray-400"},bo={class:"border-b-2 my-9 py-2 border-black"},ho={class:"font-bold"},po={class:"block font-normal text-gray-400"},mo={class:"w-full mx-auto"},yo={class:"flex justify-center"},go={class:"absolute inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50"},ko={class:"w-1/2 p-6 bg-white rounded-md shadow-xl"},fo={class:"flex items-center justify-end"},xo=l(()=>s("h3",{class:"text-2xl text-center w-full font-bold inline-flex items-center justify-center",style:{color:"#00897b"}},[n(" تم تاكيد الحجز "),s("svg",{xmlns:"http://www.w3.org/2000/svg",width:"25",height:"25",viewBox:"0 0 36 36",class:"mx-2"},[s("path",{id:"ok-circle",d:"M18,0A18,18,0,1,0,36,18,18,18,0,0,0,18,0Zm0,3.911A14.088,14.088,0,1,1,3.913,18,14.089,14.089,0,0,1,18,3.911Zm6.9,5.542L14.465,19.887,11.081,16.5l-3.32,3.318,3.384,3.384,3.342,3.342,3.318-3.32L28.24,12.8,24.9,9.453Z",fill:"#66cb19"})])],-1)),uo=l(()=>s("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1)),wo=[uo],vo={class:"mt-4 text-right"},jo={class:"border-b-2 my-9 py-2 border-black"},Bo={class:"text-gray-500 flex items-center justify-end"},Mo={class:"font-bold text-lg w-1/2 block",style:{color:"#00897b"}},Co={class:"block w-1/2"},Vo={class:"border-b-2 my-9 py-2 border-black"},Zo={class:"text-gray-500 flex items-center justify-end"},Do={class:"font-bold text-lg w-1/2 block",style:{color:"#00897b"}},Lo={class:"block w-1/2"},So={key:0,class:"border-b-2 my-9 py-2 border-black"},qo={class:"text-gray-500 flex items-center justify-end"},zo={class:"font-bold text-lg w-1/2 block",style:{color:"#00897b"}},Ao={class:"block w-1/2"},Ho={class:"border-b-2 my-9 py-2 border-black"},Po={class:"text-gray-500 flex items-center justify-end"},Io={class:"font-bold text-lg w-1/2 block",style:{color:"#00897b"}},No={class:"block w-1/2"},To={class:"border-b-2 my-9 py-2 border-black"},Eo={class:"text-gray-500 flex items-center justify-end"},Fo={class:"font-bold text-lg w-1/2 block",style:{color:"#00897b"}},Go={class:"block w-1/2"};function Uo(e,c,Xo,Yo,o,_){return r(),d(x,null,[s("div",B,[s("h1",M,t(e.$t("bookings"))+" / "+t(o.booking.requester_name),1),s("div",C,[s("div",V,[s("div",Z,[s("div",{onClick:c[0]||(c[0]=i=>_.changeDoctor(o.booking.event_date)),class:"absolute cursor-pointer right-0 flex flex-row-reverse top-0 pt-4 pb-2 m-3"},[D,s("p",L,t(o.doctor?"تغيير الاخصائي":"اختر الاخصائي"),1)]),o.doctor?(r(),d("img",S)):b("",!0),o.doctor?(r(),d("p",q,[s("span",z,t(o.doctor.name),1),s("span",A,t(o.doctor.title),1)])):b("",!0)]),s("div",null,[s("p",H,[s("span",null,[s("span",P,t(_.event_data),1),n(" : موعد الاستشارة ")])]),s("div",I,[N,h(s("textarea",{name:"notes","onUpdate:modelValue":c[1]||(c[1]=i=>o.accept_notes=i),id:"notes",class:"border ring-1 ring-black border-black rounded-md focus:ring-black",cols:"30",rows:"4"},null,512),[[g,o.accept_notes]])]),s("p",T,[s("span",E,[s("span",F,t(o.booking.requester_name),1),n(" : اسم مرسل الطلب ")])])]),s("button",{onClick:c[2]||(c[2]=k((...i)=>_.acceptBooking&&_.acceptBooking(...i),["prevent"])),id:"submit",class:f(["w-full text-center py-2.5 px-4 text-white rounded-lg",{"bg-emerald-500":o.booking.accepted}]),style:{"background-color":"#00838f"},disabled:o.doctor==null||o.booking.accepted==1},t(o.booking.accepted?"تم الحجز":"تاكيد الحجز"),11,G)]),s("div",U,[s("p",X,[s("span",Y,[s("span",J,t(o.booking.requester_name),1),n(" : إسم ولي الأمر ( مقدم الطلب) ")])]),s("p",K,[s("span",O,[s("span",Q,t(o.booking.relative_degree),1),n(" : درجة قرابته للطفل ")])]),s("p",R,[s("span",W,[s("span",$,t(o.booking.child_name),1),n(" : الاسم الرباعي للطفل ")])]),s("p",ss,[s("span",os,[s("span",ts,t(o.booking.child_birth_place),1),n(" : مكان الميلاد ")])]),s("p",es,[s("span",ns,[s("span",cs,t(o.booking.child_birth_date),1),n(" : تاريخ الميلاد ")])]),s("p",ls,[s("span",is,[s("span",rs,t(o.booking.child_lang),1),n(" : لغة الطفل الاساسية ")])]),s("p",ds,[s("span",_s,[s("span",as,t(o.booking.child_nationalty),1),n(" : الجنسية ")])]),s("p",bs,[s("span",hs,[s("span",ps,t(o.booking.child_national_id),1),n(" : رقمه الوطني ")])]),s("p",ms,[s("span",ys,[s("span",gs,t(o.booking.child_address),1),n(" : العنوان ")])]),s("p",ks,[s("span",fs,[s("span",xs,t(o.booking.requester_phone),1),n(" : رقم هاتف ولي الأمر ")])]),s("p",us,[s("span",ws,[s("span",vs,t(o.booking.addtional_phone),1),n(" : رقم هاتف إضافي ")])]),s("p",js,[s("span",Bs,[s("span",Ms,t(o.booking.addtional_phone_owner),1),n(" : مالك الرقم الإضافي ")])]),s("p",Cs,[s("span",Vs,[s("span",Zs,t(o.booking.addtional_phone_degree),1),n(" : درجة قرابته للطفل ")])]),s("p",Ds,[s("span",Ls,[s("span",Ss,t(o.booking.conversion_type),1),n(" : مصدر التحويل ")])]),s("div",qs,[s("p",zs,[s("span",As,[s("span",null,t(o.booking.doctor_code),1),n(" : كود الاخصائي ")])]),s("p",{class:"my-9 py-2 flex items-center cursor-pointer",onClick:c[3]||(c[3]=i=>o.show_answer_modal=!0)},Is)])])])]),s("div",Ns,[s("div",Ts,[h(s("div",Es,[s("div",Fs,[s("div",Gs,[Us,(r(),d("svg",{onClick:c[4]||(c[4]=i=>o.show_answer_modal=!1),xmlns:"http://www.w3.org/2000/svg",class:"w-8 h-8 cursor-pointer",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},Ys))]),s("div",Js,[s("p",Ks,[s("span",Os,[s("span",Qs,t(o.booking.child_gender==1?"male":"female"),1),n(" : الجنس ")])]),s("p",Rs,[s("span",Ws,[s("span",$s,t(o.booking.child_problem),1),n(" : نرجو تحديد نوع المشكله ")]),s("span",so,[s("span",oo,t(o.booking.child_problems_notes),1)])]),s("p",to,[s("span",eo,[s("span",no,t(o.booking.child_aids==1?"yes":"no"),1),n(" : هل يستخدم الطفل اي معينات حركيه / سمعيه/ بصريه ")]),s("span",co,[s("span",lo,t(o.booking.child_aids_notes),1)])]),s("p",io,[s("span",ro,[n(" : المشاكل الرئيسيه لدي الطفل حاليا من وجهه نظر الاهل "),s("span",_o,[s("span",ao,t(o.booking.child_aids_notes),1)])])]),s("p",bo,[s("span",ho,[n(" : ما هي اولويه الاهل في البرامج التاهليه للتعامل مع الطفل "),s("span",po,t(o.booking.parents_priorities),1)])])])])],512),[[p,o.show_answer_modal]])])]),s("div",mo,[s("div",yo,[h(s("div",go,[s("div",ko,[s("div",fo,[xo,(r(),d("svg",{onClick:c[5]||(c[5]=i=>o.show_accept_modal=!1),xmlns:"http://www.w3.org/2000/svg",class:"w-8 h-8 cursor-pointer",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},wo))]),s("div",vo,[s("p",jo,[s("span",Bo,[s("span",Mo,t(o.booking.child_name),1),s("label",Co,t(e.$t("الاسم الرباعي للطفل")),1)])]),s("p",Vo,[s("span",Zo,[s("span",Do,t(_.event_data),1),s("label",Lo,t(e.$t("موعد الاستشاره")),1)])]),o.doctor?(r(),d("p",So,[s("span",qo,[s("span",zo,t(o.doctor.name),1),s("label",Ao,t(e.$t("اسم الاخصائي")),1)])])):b("",!0),s("p",Ho,[s("span",Po,[s("span",Io,t(o.accept_notes)+"...",1),s("label",No,t(e.$t("ملاحظه")),1)])]),s("p",To,[s("span",Eo,[s("span",Fo,t(o.booking.requester_name),1),s("label",Go,t(e.$t("اسم مرسل الطلب")),1)])])])])],512),[[p,o.show_accept_modal]])])])],64)}const Oo=y(j,[["render",Uo],["__scopeId","data-v-561aed51"]]);export{Oo as default};