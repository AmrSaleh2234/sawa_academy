import{g as C,aC as B,o as a,d as b,w as r,h as s,aD as I,j as H,c as y,m as f,r as w,e as S,p as L,a as c,t as m,S as A,_ as V,O,Y as F,f as h,i as _,a3 as D,ac as P,Z as R,aE as x,V as j,P as K}from"./main-45612ea2.js";import{p as T,s as N,Z as E,D as p,C as U}from"./basecomponent.esm-2213beaa.js";import{a as Z}from"./button.esm-e0c4c5a4.js";import{F as M}from"./focustrap.esm-34c5d757.js";import{O as Y}from"./overlayeventbus.esm-897bff62.js";import{s as q}from"./portal.esm-62e01c1f.js";import{h as $}from"./moment-fbc5633a.js";var v=T(),z={name:"ConfirmPopup",extends:N,inheritAttrs:!1,props:{group:String},data(){return{visible:!1,confirmation:null,autoFocusAccept:null,autoFocusReject:null}},target:null,outsideClickListener:null,scrollHandler:null,resizeListener:null,container:null,confirmListener:null,closeListener:null,mounted(){this.confirmListener=e=>{e&&e.group===this.group&&(this.confirmation=e,this.target=e.target,this.confirmation.onShow&&this.confirmation.onShow(),this.visible=!0)},this.closeListener=()=>{this.visible=!1,this.confirmation=null},v.on("confirm",this.confirmListener),v.on("close",this.closeListener)},beforeUnmount(){v.off("confirm",this.confirmListener),v.off("close",this.closeListener),this.unbindOutsideClickListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.unbindResizeListener(),this.container&&(E.clear(this.container),this.container=null),this.target=null,this.confirmation=null},methods:{accept(){this.confirmation.accept&&this.confirmation.accept(),this.visible=!1},reject(){this.confirmation.reject&&this.confirmation.reject(),this.visible=!1},onHide(){this.confirmation.onHide&&this.confirmation.onHide(),this.visible=!1},onAcceptKeydown(e){(e.code==="Space"||e.code==="Enter")&&(this.accept(),p.focus(this.target),e.preventDefault())},onRejectKeydown(e){(e.code==="Space"||e.code==="Enter")&&(this.reject(),p.focus(this.target),e.preventDefault())},onEnter(e){this.autoFocusAccept=this.confirmation.defaultFocus===void 0||this.confirmation.defaultFocus==="accept",this.autoFocusReject=this.confirmation.defaultFocus==="reject",this.bindOutsideClickListener(),this.bindScrollListener(),this.bindResizeListener(),E.set("overlay",e,this.$primevue.config.zIndex.overlay)},onAfterEnter(){this.focus()},onLeave(){this.autoFocusAccept=null,this.autoFocusReject=null,this.unbindOutsideClickListener(),this.unbindScrollListener(),this.unbindResizeListener()},onAfterLeave(e){E.clear(e)},alignOverlay(){p.absolutePosition(this.container,this.target);const e=p.getOffset(this.container),n=p.getOffset(this.target);let d=0;e.left<n.left&&(d=n.left-e.left),this.container.style.setProperty("--overlayArrowLeft",`${d}px`),e.top<n.top&&p.addClass(this.container,"p-confirm-popup-flipped")},bindOutsideClickListener(){this.outsideClickListener||(this.outsideClickListener=e=>{this.visible&&this.container&&!this.container.contains(e.target)&&!this.isTargetClicked(e)?(this.confirmation.onHide&&this.confirmation.onHide(),this.visible=!1):this.alignOverlay()},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},bindScrollListener(){this.scrollHandler||(this.scrollHandler=new U(this.target,()=>{this.visible&&(this.visible=!1)})),this.scrollHandler.bindScrollListener()},unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener(){this.resizeListener||(this.resizeListener=()=>{this.visible&&!p.isTouchDevice()&&(this.visible=!1)},window.addEventListener("resize",this.resizeListener))},unbindResizeListener(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},focus(){let e=this.container.querySelector("[autofocus]");e&&e.focus({preventScroll:!0})},isTargetClicked(e){return this.target&&(this.target===e.target||this.target.contains(e.target))},containerRef(e){this.container=e},onOverlayClick(e){Y.emit("overlay-click",{originalEvent:e,target:this.target})},onOverlayKeydown(e){e.code==="Escape"&&(v.emit("close",this.closeListener),p.focus(this.target))}},computed:{containerClass(){return["p-confirm-popup p-component",{"p-input-filled":this.$primevue.config.inputStyle==="filled","p-ripple-disabled":this.$primevue.config.ripple===!1}]},message(){return this.confirmation?this.confirmation.message:null},iconClass(){return["p-confirm-popup-icon",this.confirmation?this.confirmation.icon:null]},acceptLabel(){return this.confirmation?this.confirmation.acceptLabel||this.$primevue.config.locale.accept:null},rejectLabel(){return this.confirmation?this.confirmation.rejectLabel||this.$primevue.config.locale.reject:null},acceptIcon(){return this.confirmation?this.confirmation.acceptIcon:null},rejectIcon(){return this.confirmation?this.confirmation.rejectIcon:null},acceptClass(){return["p-confirm-popup-accept p-button-sm",this.confirmation?this.confirmation.acceptClass:null]},rejectClass(){return["p-confirm-popup-reject p-button-sm",this.confirmation?this.confirmation.rejectClass||"p-button-text":null]}},components:{CPButton:Z,Portal:q},directives:{focustrap:M}};const G=["aria-modal"];function J(e,n,d,u,i,t){const g=C("CPButton"),k=C("Portal"),l=B("focustrap");return a(),b(k,null,{default:r(()=>[s(I,{name:"p-confirm-popup",onEnter:t.onEnter,onAfterEnter:t.onAfterEnter,onLeave:t.onLeave,onAfterLeave:t.onAfterLeave},{default:r(()=>[i.visible?H((a(),y("div",f({key:0,ref:t.containerRef,role:"alertdialog",class:t.containerClass,"aria-modal":i.visible,onClick:n[2]||(n[2]=(...o)=>t.onOverlayClick&&t.onOverlayClick(...o)),onKeydown:n[3]||(n[3]=(...o)=>t.onOverlayKeydown&&t.onOverlayKeydown(...o))},{...e.$attrs,...e.ptm("root")}),[e.$slots.message?(a(),b(S(e.$slots.message),{key:1,message:i.confirmation},null,8,["message"])):(a(),y("div",f({key:0,class:"p-confirm-popup-content"},e.ptm("content")),[w(e.$slots,"icon",{class:"p-confirm-popup-icon"},()=>[e.$slots.icon?(a(),b(S(e.$slots.icon),{key:0,class:"p-confirm-popup-icon"})):i.confirmation.icon?(a(),y("span",f({key:1,class:t.iconClass},e.ptm("icon")),null,16)):L("",!0)]),c("span",f({class:"p-confirm-popup-message"},e.ptm("message")),m(i.confirmation.message),17)],16)),c("div",f({class:"p-confirm-popup-footer"},e.ptm("footer")),[s(g,{label:t.rejectLabel,class:A(t.rejectClass),onClick:n[0]||(n[0]=o=>t.reject()),onKeydown:t.onRejectKeydown,autofocus:i.autoFocusReject,pt:e.ptm("rejectButton")},{icon:r(o=>[w(e.$slots,"rejecticon",{},()=>[c("span",f({class:[t.rejectIcon,o.class]},e.ptm("rejectButton").icon),null,16)])]),_:3},8,["label","class","onKeydown","autofocus","pt"]),s(g,{label:t.acceptLabel,class:A(t.acceptClass),onClick:n[1]||(n[1]=o=>t.accept()),onKeydown:t.onAcceptKeydown,autofocus:i.autoFocusAccept,pt:e.ptm("acceptButton")},{icon:r(o=>[w(e.$slots,"accepticon",{},()=>[c("span",f({class:[t.acceptIcon,o.class]},e.ptm("acceptButton").icon),null,16)])]),_:3},8,["label","class","onKeydown","autofocus","pt"])],16)],16,G)),[[l]]):L("",!0)]),_:3},8,["onEnter","onAfterEnter","onLeave","onAfterLeave"])]),_:3})}function Q(e,n){n===void 0&&(n={});var d=n.insertAt;if(!(!e||typeof document>"u")){var u=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",d==="top"&&u.firstChild?u.insertBefore(i,u.firstChild):u.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}var W=`
.p-confirm-popup {
    position: absolute;
    margin-top: 10px;
    top: 0;
    left: 0;
}
.p-confirm-popup-flipped {
    margin-top: 0;
    margin-bottom: 10px;
}

/* Animation */
.p-confirm-popup-enter-from {
    opacity: 0;
    transform: scaleY(0.8);
}
.p-confirm-popup-leave-to {
    opacity: 0;
}
.p-confirm-popup-enter-active {
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1), opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}
.p-confirm-popup-leave-active {
    transition: opacity 0.1s linear;
}
.p-confirm-popup:after,
.p-confirm-popup:before {
    bottom: 100%;
    left: calc(var(--overlayArrowLeft, 0) + 1.25rem);
    content: ' ';
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
}
.p-confirm-popup:after {
    border-width: 8px;
    margin-left: -8px;
}
.p-confirm-popup:before {
    border-width: 10px;
    margin-left: -10px;
}
.p-confirm-popup-flipped:after,
.p-confirm-popup-flipped:before {
    bottom: auto;
    top: 100%;
}
.p-confirm-popup.p-confirm-popup-flipped:after {
    border-bottom-color: transparent;
}
.p-confirm-popup.p-confirm-popup-flipped:before {
    border-bottom-color: transparent;
}
.p-confirm-popup .p-confirm-popup-content {
    display: flex;
    align-items: center;
}
`;Q(W);z.render=J;const X={components:{ConfirmPopup:z},data(){return{search:"",headers:[],children:[],alert_text:null,loading:!0}},computed:{header(){return this.headers=[{key:"id",title:this.$t("index")},{key:"name",title:this.$t("child_name")},{key:"birth_date",title:this.$t("birth_date")},{key:"actions",title:this.$t("actions")}]}},methods:{getChildren(){O.get("/api/child").then(e=>{this.children=e.data.children,console.log(e.data.children),this.loading=!1})},fomate(e){return $(e).format("DD-MM-yy ")},editItem(e){this.$router.push({name:"EditChildren",params:{id:e}})},deleteItem(e){console.log(e),O.delete(`/api/child/${e}/delete`).then(n=>{n.data.status==200&&(this.alert_text="children deleted successfully ",this.children=n.data.children)})},showItem(e){this.$router.push({name:"ShowChildren",params:{id:e}})},create(){this.$router.push({name:"CreateChildren"})}},async mounted(){this.$route.params.alert&&(this.alert_text="done "),this.getChildren()}};function ee(e,n,d,u,i,t){const g=C("Button"),k=C("v-data-table");return a(),y("div",null,[i.alert_text!=null?(a(),b(F,{key:0,type:"success",variant:"tonal",border:"start",elevation:"2",closable:"","close-label":e.$t("close"),text:i.alert_text,class:"mb-8"},null,8,["close-label","text"])):L("",!0),s(_,{text:"Create",color:"green",height:"45",class:"mb-5 mt-5",onClick:t.create},{default:r(()=>[h(m(e.$t("create_button")),1)]),_:1},8,["onClick"]),s(K,null,{default:r(()=>[s(D,null,{default:r(()=>[h(m(e.$t("children"))+" ",1),s(P),s(R,{modelValue:i.search,"onUpdate:modelValue":n[0]||(n[0]=l=>i.search=l),"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},null,8,["modelValue"])]),_:1}),s(k,{headers:t.header,items:i.children,search:i.search},{top:r(()=>[i.loading?(a(),b(x,{key:0,slot:"progress",style:{color:"#135c65"},indeterminate:""})):L("",!0)]),item:r(({item:l})=>[c("tr",null,[c("td",null,m(l.columns.id),1),c("td",null,m(l.columns.name),1),c("td",null,m(t.fomate(l.columns.birth_date)),1),c("td",null,[s(j,{small:"",color:"primary",class:"mr-2",onClick:o=>t.showItem(l.columns.id)},{default:r(()=>[h("mdi-eye")]),_:2},1032,["onClick"]),s(j,{small:"",color:"primary",class:"mr-2",onClick:o=>t.editItem(l.columns.id)},{default:r(()=>[h("mdi-pencil")]),_:2},1032,["onClick"]),s(j,{small:"",color:"error",onClick:o=>t.deleteItem(l.columns.id)},{default:r(()=>[h("mdi-delete")]),_:2},1032,["onClick"]),s(g,{onClick:n[1]||(n[1]=o=>e.confirm2(o)),icon:"pi pi-times",label:"Delete",outlined:"",severity:"danger"})])])]),_:1},8,["headers","items","search"])]),_:1})])}const ae=V(X,[["render",ee]]);export{ae as default};
