import{r as B,G as K,H as W,I as x,J as G,K as O,L as U,M as X,N as q,O as H,P as J,Q,R as Y,S as Z,T as j,U as ee,W as ae,X as A,Y as te,Z as b,$ as k,a0 as f,a1 as ie,b as o,l as m,a2 as h,a3 as $,a4 as R}from"./main-1637d54a.js";function le(){const e=B([]);K(()=>e.value=[]);function _(n,V){e.value[V]=n}return{refs:e,updateRef:_}}const se=W({name:"VPagination",props:{activeColor:String,start:{type:[Number,String],default:1},modelValue:{type:Number,default:e=>e.start},disabled:Boolean,length:{type:[Number,String],default:1,validator:e=>e%1===0},totalVisible:[Number,String],firstIcon:{type:x,default:"$first"},prevIcon:{type:x,default:"$prev"},nextIcon:{type:x,default:"$next"},lastIcon:{type:x,default:"$last"},ariaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.root"},pageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.page"},currentPageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.currentPage"},firstAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.first"},previousAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.previous"},nextAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.next"},lastAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.last"},ellipsis:{type:String,default:"..."},showFirstLastPage:Boolean,...G(),...O(),...U(),...X(),...q(),...H({tag:"nav"}),...J(),...Q({variant:"text"})},emits:{"update:modelValue":e=>!0,first:e=>!0,prev:e=>!0,next:e=>!0,last:e=>!0},setup(e,_){let{slots:n,emit:V}=_;const l=Y(e,"modelValue"),{t:g,n:C}=Z(),{isRtl:P}=j(),{themeClasses:w}=ee(e),{width:D}=ae(),I=B(-1);A(void 0,{scoped:!0});const{resizeRef:F}=te(a=>{if(!a.length)return;const{target:t,contentRect:i}=a[0],r=t.querySelector(".v-pagination__list > *");if(!r)return;const v=i.width,L=r.offsetWidth+parseFloat(getComputedStyle(r).marginRight)*2;I.value=S(v,L)}),s=b(()=>parseInt(e.length,10)),u=b(()=>parseInt(e.start,10)),c=b(()=>e.totalVisible?parseInt(e.totalVisible,10):I.value>=0?I.value:S(D.value,58));function S(a,t){const i=e.showFirstLastPage?5:3;return Math.max(0,Math.floor(+((a-t*i)/t).toFixed(2)))}const M=b(()=>{if(s.value<=0||isNaN(s.value)||s.value>Number.MAX_SAFE_INTEGER)return[];if(c.value<=1)return[l.value];if(s.value<=c.value)return k(s.value,u.value);const a=c.value%2===0,t=a?c.value/2:Math.floor(c.value/2),i=a?t:t+1,r=s.value-t;if(i-l.value>=0)return[...k(Math.max(1,c.value-1),u.value),e.ellipsis,s.value];if(l.value-r>=(a?1:0)){const v=c.value-1,L=s.value-v+u.value;return[u.value,e.ellipsis,...k(v,L)]}else{const v=Math.max(1,c.value-3),L=v===1?l.value:l.value-Math.ceil(v/2)+u.value;return[u.value,e.ellipsis,...k(v,L),e.ellipsis,s.value]}});function y(a,t,i){a.preventDefault(),l.value=t,i&&V(i,t)}const{refs:N,updateRef:T}=le();A({VPaginationBtn:{color:f(e,"color"),border:f(e,"border"),density:f(e,"density"),size:f(e,"size"),variant:f(e,"variant"),rounded:f(e,"rounded"),elevation:f(e,"elevation")}});const z=b(()=>M.value.map((a,t)=>{const i=r=>T(r,t);if(typeof a=="string")return{isActive:!1,key:`ellipsis-${t}`,page:a,props:{ref:i,ellipsis:!0,icon:!0,disabled:!0}};{const r=a===l.value;return{isActive:r,key:a,page:C(a),props:{ref:i,ellipsis:!1,icon:!0,disabled:!!e.disabled||e.length<2,color:r?e.activeColor:e.color,ariaCurrent:r,ariaLabel:g(r?e.currentPageAriaLabel:e.pageAriaLabel,t+1),onClick:v=>y(v,a)}}}})),d=b(()=>{const a=!!e.disabled||l.value<=u.value,t=!!e.disabled||l.value>=u.value+s.value-1;return{first:e.showFirstLastPage?{icon:P.value?e.lastIcon:e.firstIcon,onClick:i=>y(i,u.value,"first"),disabled:a,ariaLabel:g(e.firstAriaLabel),ariaDisabled:a}:void 0,prev:{icon:P.value?e.nextIcon:e.prevIcon,onClick:i=>y(i,l.value-1,"prev"),disabled:a,ariaLabel:g(e.previousAriaLabel),ariaDisabled:a},next:{icon:P.value?e.prevIcon:e.nextIcon,onClick:i=>y(i,l.value+1,"next"),disabled:t,ariaLabel:g(e.nextAriaLabel),ariaDisabled:t},last:e.showFirstLastPage?{icon:P.value?e.firstIcon:e.lastIcon,onClick:i=>y(i,u.value+s.value-1,"last"),disabled:t,ariaLabel:g(e.lastAriaLabel),ariaDisabled:t}:void 0}});function p(){var a;const t=l.value-u.value;(a=N.value[t])==null||a.$el.focus()}function E(a){a.key===$.left&&!e.disabled&&l.value>e.start?(l.value=l.value-1,R(p)):a.key===$.right&&!e.disabled&&l.value<u.value+s.value-1&&(l.value=l.value+1,R(p))}return ie(()=>o(e.tag,{ref:F,class:["v-pagination",w.value],role:"navigation","aria-label":g(e.ariaLabel),onKeydown:E,"data-test":"v-pagination-root"},{default:()=>[o("ul",{class:"v-pagination__list"},[e.showFirstLastPage&&o("li",{key:"first",class:"v-pagination__first","data-test":"v-pagination-first"},[n.first?n.first(d.value.first):o(m,h({_as:"VPaginationBtn"},d.value.first),null)]),o("li",{key:"prev",class:"v-pagination__prev","data-test":"v-pagination-prev"},[n.prev?n.prev(d.value.prev):o(m,h({_as:"VPaginationBtn"},d.value.prev),null)]),z.value.map((a,t)=>o("li",{key:a.key,class:["v-pagination__item",{"v-pagination__item--is-active":a.isActive}],"data-test":"v-pagination-item"},[n.item?n.item(a):o(m,h({_as:"VPaginationBtn"},a.props),{default:()=>[a.page]})])),o("li",{key:"next",class:"v-pagination__next","data-test":"v-pagination-next"},[n.next?n.next(d.value.next):o(m,h({_as:"VPaginationBtn"},d.value.next),null)]),e.showFirstLastPage&&o("li",{key:"last",class:"v-pagination__last","data-test":"v-pagination-last"},[n.last?n.last(d.value.last):o(m,h({_as:"VPaginationBtn"},d.value.last),null)])])]})),{}}});export{se as V};