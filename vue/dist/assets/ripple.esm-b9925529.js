import{O as f,o as u,c as h,m as C,d as s,D as i}from"./main-914307ba.js";var g={name:"BaseIcon",props:{label:{type:String,default:void 0},spin:{type:Boolean,default:!1}},methods:{pti(){const e=f.isEmpty(this.label);return{class:["p-icon",{"p-icon-spin":this.spin}],role:e?void 0:"img","aria-label":e?void 0:this.label,"aria-hidden":e}}}};function v(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(!e||typeof document>"u")){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css",n==="top"&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}var y=`
.p-icon {
    display: inline-block;
}
.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}
@-webkit-keyframes p-icon-spin {
0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
}
100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
}
}
@keyframes p-icon-spin {
0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
}
100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
}
}
`;v(y);var k={name:"SpinnerIcon",extends:g};const w=s("g",{"clip-path":"url(#clip0_417_21408)"},[s("path",{d:"M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z",fill:"currentColor"})],-1),b=s("defs",null,[s("clipPath",{id:"clip0_417_21408"},[s("rect",{width:"14",height:"14",fill:"white"})])],-1),x=[w,b];function E(e,t,n,r,o,l){return u(),h("svg",C({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),x,16)}k.render=E;let a;function _(e){e.addEventListener("mousedown",p)}function B(e){e.removeEventListener("mousedown",p)}function T(e){let t=document.createElement("span");t.className="p-ink",t.setAttribute("role","presentation"),t.setAttribute("aria-hidden","true"),e.appendChild(t),t.addEventListener("animationend",c)}function $(e){let t=m(e);t&&(B(e),t.removeEventListener("animationend",c),t.remove())}function p(e){let t=e.currentTarget,n=m(t);if(!n||getComputedStyle(n,null).display==="none")return;if(i.removeClass(n,"p-ink-active"),!i.getHeight(n)&&!i.getWidth(n)){let d=Math.max(i.getOuterWidth(t),i.getOuterHeight(t));n.style.height=d+"px",n.style.width=d+"px"}let r=i.getOffset(t),o=e.pageX-r.left+document.body.scrollTop-i.getWidth(n)/2,l=e.pageY-r.top+document.body.scrollLeft-i.getHeight(n)/2;n.style.top=l+"px",n.style.left=o+"px",i.addClass(n,"p-ink-active"),a=setTimeout(()=>{n&&i.removeClass(n,"p-ink-active")},401)}function c(e){a&&clearTimeout(a),i.removeClass(e.currentTarget,"p-ink-active")}function m(e){for(let t=0;t<e.children.length;t++)if(typeof e.children[t].className=="string"&&e.children[t].className.indexOf("p-ink")!==-1)return e.children[t];return null}const N={mounted(e,t){t.instance.$primevue&&t.instance.$primevue.config&&t.instance.$primevue.config.ripple&&(T(e),_(e))},unmounted(e){$(e)}};export{N as R,k as a,g as s};
