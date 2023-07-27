import{ae as p,b9 as T,al as y,am as _,ba as w,aq as A,au as c,as as $,aw as m,E as x,h as l,bb as B,af as g,bc as j,bd as P,aU as S,j as V,aC as R,V as D,be as I,bf as G,v as L,bg as z,ai as q,bh as F,aj as N,bi as O,aX as U,a_ as X,bj as H}from"./main-97346cb2.js";const r=Symbol.for("vuetify:v-expansion-panel"),J=["default","accordion","inset","popout"],W=p({name:"VExpansionPanels",props:{color:String,variant:{type:String,default:"default",validator:e=>J.includes(e)},readonly:Boolean,...T(),...y(),..._()},emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:n}=o;w(e,r);const{themeClasses:a}=A(e),i=c(()=>e.variant&&`v-expansion-panels--variant-${e.variant}`);return $({VExpansionPanel:{color:m(e,"color")},VExpansionPanelTitle:{readonly:m(e,"readonly")}}),x(()=>l(e.tag,{class:["v-expansion-panels",a.value,i.value]},n)),{}}}),E=B({color:String,expandIcon:{type:g,default:"$expand"},collapseIcon:{type:g,default:"$collapse"},hideActions:Boolean,ripple:{type:[Boolean,Object],default:!1},readonly:Boolean},"v-expansion-panel-title"),K=p({name:"VExpansionPanelTitle",directives:{Ripple:j},props:{...E()},setup(e,o){let{slots:n}=o;const a=P(r);if(!a)throw new Error("[Vuetify] v-expansion-panel-title needs to be placed inside v-expansion-panel");const{backgroundColorClasses:i,backgroundColorStyles:u}=S(e,"color"),d=c(()=>({collapseIcon:e.collapseIcon,disabled:a.disabled.value,expanded:a.isSelected.value,expandIcon:e.expandIcon,readonly:e.readonly}));return x(()=>{var v;return V(l("button",{class:["v-expansion-panel-title",{"v-expansion-panel-title--active":a.isSelected.value},i.value],style:u.value,type:"button",tabindex:a.disabled.value?-1:void 0,disabled:a.disabled.value,"aria-expanded":a.isSelected.value,onClick:e.readonly?void 0:a.toggle},[l("span",{class:"v-expansion-panel-title__overlay"},null),(v=n.default)==null?void 0:v.call(n,d.value),!e.hideActions&&l("span",{class:"v-expansion-panel-title__icon"},[n.actions?n.actions(d.value):l(D,{icon:a.isSelected.value?e.collapseIcon:e.expandIcon},null)])]),[[R("ripple"),e.ripple]])}),{}}}),M=p({name:"VExpansionPanelText",props:{...I()},setup(e,o){let{slots:n}=o;const a=P(r);if(!a)throw new Error("[Vuetify] v-expansion-panel-text needs to be placed inside v-expansion-panel");const{hasContent:i,onAfterLeave:u}=G(e,a.isSelected);return x(()=>{var d;return l(z,{onAfterLeave:u},{default:()=>[V(l("div",{class:"v-expansion-panel-text"},[n.default&&i.value&&l("div",{class:"v-expansion-panel-text__wrapper"},[(d=n.default)==null?void 0:d.call(n)])]),[[L,a.isSelected.value]])]})}),{}}}),Y=p({name:"VExpansionPanel",props:{title:String,text:String,bgColor:String,...q(),...F(),...I(),...N(),...y(),...E()},emits:{"group:selected":e=>!0},setup(e,o){let{slots:n}=o;const a=O(e,r),{backgroundColorClasses:i,backgroundColorStyles:u}=S(e,"bgColor"),{elevationClasses:d}=U(e),{roundedClasses:v}=X(e),h=c(()=>(a==null?void 0:a.disabled.value)||e.disabled),b=c(()=>a.group.items.value.reduce((s,t,f)=>(a.group.selected.value.includes(t.id)&&s.push(f),s),[])),C=c(()=>{const s=a.group.items.value.findIndex(t=>t.id===a.id);return!a.isSelected.value&&b.value.some(t=>t-s===1)}),k=c(()=>{const s=a.group.items.value.findIndex(t=>t.id===a.id);return!a.isSelected.value&&b.value.some(t=>t-s===-1)});return H(r,a),x(()=>{var s;const t=!!(n.text||e.text),f=!!(n.title||e.title);return l(e.tag,{class:["v-expansion-panel",{"v-expansion-panel--active":a.isSelected.value,"v-expansion-panel--before-active":C.value,"v-expansion-panel--after-active":k.value,"v-expansion-panel--disabled":h.value},v.value,i.value],style:u.value,"aria-expanded":a.isSelected.value},{default:()=>[l("div",{class:["v-expansion-panel__shadow",...d.value]},null),f&&l(K,{key:"title",collapseIcon:e.collapseIcon,color:e.color,expandIcon:e.expandIcon,hideActions:e.hideActions,ripple:e.ripple},{default:()=>[n.title?n.title():e.title]}),t&&l(M,{key:"text",eager:e.eager},{default:()=>[n.text?n.text():e.text]}),(s=n.default)==null?void 0:s.call(n)]})}),{}}});export{K as V,M as a,W as b,Y as c};