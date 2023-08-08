import{_ as g,z as b,o as i,e as r,h as s,t as e,p as a,N as k,F as p,q as f,G as h,i as l,y as u,x,X as w,v as m,Y as v,$ as j}from"./main-e506c644.js";import{h as y}from"./moment-fbc5633a.js";const B="/assets/doctor-6dcda6f1.jpg";const M={props:["id"],data(){return{booking:{},doctor:{},new_doctors:[],accept_notes:"",show_answer_modal:!1,show_accept_modal:!1}},methods:{getBooking(){b.get(`/api/calender/bookings/${this.id}`).then(t=>{this.booking=t.data.booking.booking,this.doctor=t.data.booking.doctor,console.log(t)}).catch(t=>{console.log(t)})},acceptBooking(){b.post(`/api/calender/bookings/${this.id}/accept`,{status:1,accepted_notes:this.accept_notes,event_id:this.booking.event_id,user_id:this.booking.user_id,doctor_name:this.doctor.name,doctor_title:this.doctor.title}).then(t=>{this.show_accept_modal=!0,console.log(t)}).catch(t=>{console.log(t)})},changeDoctor(t){b.post("/api/calender/change-doctor",{start:t}).then(n=>{this.new_doctors=n.data.doctors,console.log(n)}).catch(n=>{console.log(n)})},changeCurrentDoctor(t){this.doctor=t,console.log(this.doctor),console.log(t)}},computed:{event_data(){let t=y(this.booking.event_date).format("dddd"),n=y(this.booking.event_date).format("hh:mm: A");return`${t} -- ${n}`}},mounted(){this.getBooking()}},d=t=>(v("data-v-f323e0a9"),t=t(),j(),t),C={class:"mt-6"},V={class:"border-b text-3xl w-full md:w-1/2 uppercase text-green-800 py-4"},Z={class:"flex flex-col md:flex-row md:justify-between w-full mt-4 py-2"},D={class:"bg-gray-100 rounded-xl text-right pb-6 md:pb-0 px-6 mx-6 self-start"},L={class:"border-b relative py-8 flex flex-col items-center justify-center"},S={class:"w-full flex flex-col md:flex-row md:justify-between md:items-center"},q=d(()=>s("svg",{xmlns:"http://www.w3.org/2000/svg",width:"25",height:"25",viewBox:"0 0 36 36"},[s("path",{id:"edit",d:"M0,0V36H36V12.729l-5.906,5.906V30.094H5.906V5.906H17.365L23.271,0ZM31.5,0,29.195,2.305l4.5,4.5L36,4.5ZM28.107,3.393,14.915,16.585l4.5,4.5L32.607,7.893l-4.5-4.5ZM13.258,18.67c-.067,0-.135.006-.2.011v4.263h4.263A4.507,4.507,0,0,0,15.9,19.778a3.761,3.761,0,0,0-2.641-1.107Z"})],-1)),z={class:"text-sm font-bold px-2"},A={class:"flex-1"},H=["value"],P={key:0,src:B,class:"object-cover rounded-xl mt-12",width:"400",alt:"",srcset:""},I={key:1,class:"flex flex-col text-center py-2"},N={style:{color:"#00897b","font-size":"2rem"}},T={style:{color:"#00897b"}},E={class:"py-2"},F={style:{color:"#00897b"}},G={class:"flex flex-col"},U=d(()=>s("label",{for:"notes",class:"my-2"}," : تقديم ملاحظة",-1)),X={class:"my-9 py-2 border-black"},Y={class:""},J={style:{color:"#00897b"}},K=["disabled"],O={class:"flex-1 w-2/3 text-right"},Q={class:"border-b-2 my-9 py-2 border-black"},R={class:""},W={style:{color:"#00897b"}},$={class:"border-b-2 my-9 py-2 border-black"},ss={class:""},os={style:{color:"#00897b"}},es={class:"border-b-2 my-9 py-2 border-black"},ts={class:""},ls={style:{color:"#00897b"}},ns={class:"border-b-2 my-9 py-2 border-black"},cs={class:""},is={style:{color:"#00897b"}},rs={class:"border-b-2 my-9 py-2 border-black"},ds={class:""},_s={style:{color:"#00897b"}},as={class:"border-b-2 my-9 py-2 border-black"},bs={class:""},hs={style:{color:"#00897b"}},ps={class:"border-b-2 my-9 py-2 border-black"},ms={class:""},ys={style:{color:"#00897b"}},gs={class:"border-b-2 my-9 py-2 border-black"},ks={class:""},fs={style:{color:"#00897b"}},us={class:"border-b-2 my-9 py-2 border-black"},xs={class:""},ws={style:{color:"#00897b"}},vs={class:"border-b-2 my-9 py-2 border-black"},js={class:""},Bs={style:{color:"#00897b"}},Ms={class:"border-b-2 my-9 py-2 border-black"},Cs={class:""},Vs={style:{color:"#00897b"}},Zs={class:"border-b-2 my-9 py-2 border-black"},Ds={class:""},Ls={style:{color:"#00897b"}},Ss={class:"border-b-2 my-9 py-2 border-black"},qs={class:""},zs={style:{color:"#00897b"}},As={class:"border-b-2 my-9 py-2 border-black"},Hs={class:""},Ps={style:{color:"#00897b"}},Is={class:"flex justify-between items-center"},Ns={class:"my-9 py-2 border-b",style:{color:"#00897b"}},Ts={class:""},Es=d(()=>s("svg",{id:"__TEMP__SVG__",xmlns:"http://www.w3.org/2000/svg",width:"18.003",height:"15.754",viewBox:"0 0 18.003 15.754",class:"mx-2"},[s("path",{id:"Path_246","data-name":"Path 246",d:"M26.672,10.454a1.125,1.125,0,0,0-1.593,0l-6.75,6.75a1.125,1.125,0,0,0,0,1.593l6.75,6.75a1.126,1.126,0,1,0,1.593-1.593L20.717,18l5.955-5.954a1.125,1.125,0,0,0,0-1.593Z",transform:"translate(-17.998 -10.123)",fill:"#135c65","fill-rule":"evenodd"}),s("path",{id:"Path_247","data-name":"Path 247",d:"M25.875,18a1.125,1.125,0,0,0-1.125-1.125H10.125a1.125,1.125,0,0,0,0,2.25H24.75A1.125,1.125,0,0,0,25.875,18Z",transform:"translate(-7.872 -10.123)",fill:"#135c65","fill-rule":"evenodd"})],-1)),Fs=d(()=>s("span",{style:{color:"#00897b"}},"إجابة الاسألة",-1)),Gs=[Es,Fs],Us={class:"w-full mx-auto"},Xs={class:"flex justify-center"},Ys={class:"absolute inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50"},Js={class:"w-1/2 p-6 bg-white rounded-md shadow-xl"},Ks={class:"flex items-center justify-between"},Os=d(()=>s("h3",{class:"text-2xl text-center"},"اجابه الاسئله",-1)),Qs=d(()=>s("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1)),Rs=[Qs],Ws={class:"mt-4 text-right"},$s={class:"border-b-2 my-9 py-2 border-black"},so={class:"font-bold"},oo={class:"font-normal text-gray-400",style:{color:"#00897b"}},eo={class:"border-b-2 my-9 py-2 border-black"},to={class:"font-bold"},lo={class:"font-normal text-gray-400",style:{color:"#00897b"}},no={class:"block"},co={class:"text-sm font-normal text-gray-400"},io={class:"border-b-2 my-9 py-2 border-black"},ro={class:"font-bold"},_o={class:"font-normal text-gray-400",style:{color:"#00897b"}},ao={class:"block"},bo={class:"text-sm font-normal text-gray-400"},ho={class:"border-b-2 my-9 py-2 border-black"},po={class:"font-bold"},mo={class:"block"},yo={class:"text-sm font-normal text-gray-400"},go={class:"border-b-2 my-9 py-2 border-black"},ko={class:"font-bold"},fo={class:"block font-normal text-gray-400"},uo={class:"w-full mx-auto"},xo={class:"flex justify-center"},wo={class:"absolute inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50"},vo={class:"w-1/2 p-6 bg-white rounded-md shadow-xl"},jo={class:"flex items-center justify-end"},Bo=d(()=>s("h3",{class:"text-2xl text-center w-full font-bold inline-flex items-center justify-center",style:{color:"#00897b"}},[l(" تم تاكيد الحجز "),s("svg",{xmlns:"http://www.w3.org/2000/svg",width:"25",height:"25",viewBox:"0 0 36 36",class:"mx-2"},[s("path",{id:"ok-circle",d:"M18,0A18,18,0,1,0,36,18,18,18,0,0,0,18,0Zm0,3.911A14.088,14.088,0,1,1,3.913,18,14.089,14.089,0,0,1,18,3.911Zm6.9,5.542L14.465,19.887,11.081,16.5l-3.32,3.318,3.384,3.384,3.342,3.342,3.318-3.32L28.24,12.8,24.9,9.453Z",fill:"#66cb19"})])],-1)),Mo=d(()=>s("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1)),Co=[Mo],Vo={class:"mt-4 text-right"},Zo={class:"border-b-2 my-9 py-2 border-black"},Do={class:"text-gray-500 flex items-center justify-end"},Lo={class:"font-bold text-lg w-1/2 block",style:{color:"#00897b"}},So={class:"block w-1/2"},qo={class:"border-b-2 my-9 py-2 border-black"},zo={class:"text-gray-500 flex items-center justify-end"},Ao={class:"font-bold text-lg w-1/2 block",style:{color:"#00897b"}},Ho={class:"block w-1/2"},Po={key:0,class:"border-b-2 my-9 py-2 border-black"},Io={class:"text-gray-500 flex items-center justify-end"},No={class:"font-bold text-lg w-1/2 block",style:{color:"#00897b"}},To={class:"block w-1/2"},Eo={class:"border-b-2 my-9 py-2 border-black"},Fo={class:"text-gray-500 flex items-center justify-end"},Go={class:"font-bold text-lg w-1/2 block",style:{color:"#00897b"}},Uo={class:"block w-1/2"},Xo={class:"border-b-2 my-9 py-2 border-black"},Yo={class:"text-gray-500 flex items-center justify-end"},Jo={class:"font-bold text-lg w-1/2 block",style:{color:"#00897b"}},Ko={class:"block w-1/2"};function Oo(t,n,Qo,Ro,o,_){return i(),r(p,null,[s("div",C,[s("h1",V,e(t.$t("bookings"))+" / "+e(o.booking.requester_name),1),s("div",Z,[s("div",D,[s("div",L,[s("div",S,[s("div",{onClick:n[0]||(n[0]=c=>_.changeDoctor(o.booking.event_date)),class:"cursor-pointer flex flex-row-reverse pt-4 pb-2 m-3"},[q,s("p",z,e(o.doctor?"تغيير الاخصائي":"اختر الاخصائي"),1)]),s("div",A,[a(s("select",{name:"",id:"",class:"w-full","onUpdate:modelValue":n[1]||(n[1]=c=>o.doctor=c)},[(i(!0),r(p,null,f(o.new_doctors,c=>(i(),r("option",{value:c},e(c.name),9,H))),256))],512),[[k,o.doctor]])])]),o.doctor?(i(),r("img",P)):h("",!0),o.doctor?(i(),r("p",I,[s("span",N,e(o.doctor.name),1),s("span",T,e(o.doctor.title),1)])):h("",!0)]),s("div",null,[s("p",E,[s("span",null,[s("span",F,e(_.event_data),1),l(" : موعد الاستشارة ")])]),s("div",G,[U,a(s("textarea",{name:"notes","onUpdate:modelValue":n[2]||(n[2]=c=>o.accept_notes=c),id:"notes",class:"border ring-1 ring-black border-black rounded-md focus:ring-black",cols:"30",rows:"4"},null,512),[[u,o.accept_notes]])]),s("p",X,[s("span",Y,[s("span",J,e(o.booking.requester_name),1),l(" : اسم مرسل الطلب ")])])]),s("button",{onClick:n[3]||(n[3]=x((...c)=>_.acceptBooking&&_.acceptBooking(...c),["prevent"])),id:"submit",class:w(["w-full text-center py-2.5 px-4 text-white rounded-lg",{"bg-emerald-500":o.booking.accepted}]),style:{"background-color":"#00838f"},disabled:o.doctor==null||o.booking.accepted==1},e(o.booking.accepted?"تم الحجز":"تاكيد الحجز"),11,K)]),s("div",O,[s("p",Q,[s("span",R,[s("span",W,e(o.booking.requester_name),1),l(" : إسم ولي الأمر ( مقدم الطلب) ")])]),s("p",$,[s("span",ss,[s("span",os,e(o.booking.relative_degree),1),l(" : درجة قرابته للطفل ")])]),s("p",es,[s("span",ts,[s("span",ls,e(o.booking.child_name),1),l(" : الاسم الرباعي للطفل ")])]),s("p",ns,[s("span",cs,[s("span",is,e(o.booking.child_birth_place),1),l(" : مكان الميلاد ")])]),s("p",rs,[s("span",ds,[s("span",_s,e(o.booking.child_birth_date),1),l(" : تاريخ الميلاد ")])]),s("p",as,[s("span",bs,[s("span",hs,e(o.booking.child_lang),1),l(" : لغة الطفل الاساسية ")])]),s("p",ps,[s("span",ms,[s("span",ys,e(o.booking.child_nationalty),1),l(" : الجنسية ")])]),s("p",gs,[s("span",ks,[s("span",fs,e(o.booking.child_national_id),1),l(" : رقمه الوطني ")])]),s("p",us,[s("span",xs,[s("span",ws,e(o.booking.child_address),1),l(" : العنوان ")])]),s("p",vs,[s("span",js,[s("span",Bs,e(o.booking.requester_phone),1),l(" : رقم هاتف ولي الأمر ")])]),s("p",Ms,[s("span",Cs,[s("span",Vs,e(o.booking.addtional_phone),1),l(" : رقم هاتف إضافي ")])]),s("p",Zs,[s("span",Ds,[s("span",Ls,e(o.booking.addtional_phone_owner),1),l(" : مالك الرقم الإضافي ")])]),s("p",Ss,[s("span",qs,[s("span",zs,e(o.booking.addtional_phone_degree),1),l(" : درجة قرابته للطفل ")])]),s("p",As,[s("span",Hs,[s("span",Ps,e(o.booking.conversion_type),1),l(" : مصدر التحويل ")])]),s("div",Is,[s("p",Ns,[s("span",Ts,[s("span",null,e(o.booking.doctor_code),1),l(" : كود الاخصائي ")])]),s("p",{class:"my-9 py-2 flex items-center cursor-pointer",onClick:n[4]||(n[4]=c=>o.show_answer_modal=!0)},Gs)])])])]),s("div",Us,[s("div",Xs,[a(s("div",Ys,[s("div",Js,[s("div",Ks,[Os,(i(),r("svg",{onClick:n[5]||(n[5]=c=>o.show_answer_modal=!1),xmlns:"http://www.w3.org/2000/svg",class:"w-8 h-8 cursor-pointer",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},Rs))]),s("div",Ws,[s("p",$s,[s("span",so,[s("span",oo,e(o.booking.child_gender==1?"male":"female"),1),l(" : الجنس ")])]),s("p",eo,[s("span",to,[s("span",lo,e(o.booking.child_problem),1),l(" : نرجو تحديد نوع المشكله ")]),s("span",no,[s("span",co,e(o.booking.child_problems_notes),1)])]),s("p",io,[s("span",ro,[s("span",_o,e(o.booking.child_aids==1?"yes":"no"),1),l(" : هل يستخدم الطفل اي معينات حركيه / سمعيه/ بصريه ")]),s("span",ao,[s("span",bo,e(o.booking.child_aids_notes),1)])]),s("p",ho,[s("span",po,[l(" : المشاكل الرئيسيه لدي الطفل حاليا من وجهه نظر الاهل "),s("span",mo,[s("span",yo,e(o.booking.child_aids_notes),1)])])]),s("p",go,[s("span",ko,[l(" : ما هي اولويه الاهل في البرامج التاهليه للتعامل مع الطفل "),s("span",fo,e(o.booking.parents_priorities),1)])])])])],512),[[m,o.show_answer_modal]])])]),s("div",uo,[s("div",xo,[a(s("div",wo,[s("div",vo,[s("div",jo,[Bo,(i(),r("svg",{onClick:n[6]||(n[6]=c=>o.show_accept_modal=!1),xmlns:"http://www.w3.org/2000/svg",class:"w-8 h-8 cursor-pointer",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},Co))]),s("div",Vo,[s("p",Zo,[s("span",Do,[s("span",Lo,e(o.booking.child_name),1),s("label",So,e(t.$t("الاسم الرباعي للطفل")),1)])]),s("p",qo,[s("span",zo,[s("span",Ao,e(_.event_data),1),s("label",Ho,e(t.$t("موعد الاستشاره")),1)])]),o.doctor?(i(),r("p",Po,[s("span",Io,[s("span",No,e(o.doctor.name),1),s("label",To,e(t.$t("اسم الاخصائي")),1)])])):h("",!0),s("p",Eo,[s("span",Fo,[s("span",Go,e(o.accept_notes)+"...",1),s("label",Uo,e(t.$t("ملاحظه")),1)])]),s("p",Xo,[s("span",Yo,[s("span",Jo,e(o.booking.requester_name),1),s("label",Ko,e(t.$t("اسم مرسل الطلب")),1)])])])])],512),[[m,o.show_accept_modal]])])])],64)}const se=g(M,[["render",Oo],["__scopeId","data-v-f323e0a9"]]);export{se as default};
