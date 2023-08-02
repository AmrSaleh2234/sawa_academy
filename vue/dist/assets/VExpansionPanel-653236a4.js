import{az as p,bt as T,aG as g,aH as _,bu as w,aL as A,aP as c,aN as B,aR as m,a4 as x,l,bv as $,aA as y,bw as D,bx as P,bc as S,p as V,K as R,V as G,by as I,bz as L,v as z,bA as j,aD as N,bB as F,aE as H,bC as K,bf as O,bi as q,bD as J}from"./main-4e1afee9.js";const r=Symbol.for("vuetify:v-expansion-panel"),M=["default","accordion","inset","popout"],X=p({name:"VExpansionPanels",props:{color:String,variant:{type:String,default:"default",validator:e=>M.includes(e)},readonly:Boolean,...T(),...g(),..._()},emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:n}=o;w(e,r);const{themeClasses:a}=A(e),i=c(()=>e.variant&&`v-expansion-panels--variant-${e.variant}`);return B({VExpansionPanel:{color:m(e,"color")},VExpansionPanelTitle:{readonly:m(e,"readonly")}}),x(()=>l(e.tag,{class:["v-expansion-panels",a.value,i.value]},n)),{}}}),E=$({color:String,expandIcon:{type:y,default:"$expand"},collapseIcon:{type:y,default:"$collapse"},hideActions:Boolean,ripple:{type:[Boolean,Object],default:!1},readonly:Boolean},"v-expansion-panel-title"),Q=p({name:"VExpansionPanelTitle",directives:{Ripple:D},props:{...E()},setup(e,o){let{slots:n}=o;const a=P(r);if(!a)throw new Error("[Vuetify] v-expansion-panel-title needs to be placed inside v-expansion-panel");const{backgroundColorClasses:i,backgroundColorStyles:u}=S(e,"color"),d=c(()=>({collapseIcon:e.collapseIcon,disabled:a.disabled.value,expanded:a.isSelected.value,expandIcon:e.expandIcon,readonly:e.readonly}));return x(()=>{var v;return V(l("button",{class:["v-expansion-panel-title",{"v-expansion-panel-title--active":a.isSelected.value},i.value],style:u.value,type:"button",tabindex:a.disabled.value?-1:void 0,disabled:a.disabled.value,"aria-expanded":a.isSelected.value,onClick:e.readonly?void 0:a.toggle},[l("span",{class:"v-expansion-panel-title__overlay"},null),(v=n.default)==null?void 0:v.call(n,d.value),!e.hideActions&&l("span",{class:"v-expansion-panel-title__icon"},[n.actions?n.actions(d.value):l(G,{icon:a.isSelected.value?e.collapseIcon:e.expandIcon},null)])]),[[R("ripple"),e.ripple]])}),{}}}),U=p({name:"VExpansionPanelText",props:{...I()},setup(e,o){let{slots:n}=o;const a=P(r);if(!a)throw new Error("[Vuetify] v-expansion-panel-text needs to be placed inside v-expansion-panel");const{hasContent:i,onAfterLeave:u}=L(e,a.isSelected);return x(()=>{var d;return l(j,{onAfterLeave:u},{default:()=>[V(l("div",{class:"v-expansion-panel-text"},[n.default&&i.value&&l("div",{class:"v-expansion-panel-text__wrapper"},[(d=n.default)==null?void 0:d.call(n)])]),[[z,a.isSelected.value]])]})}),{}}}),Y=p({name:"VExpansionPanel",props:{title:String,text:String,bgColor:String,...N(),...F(),...I(),...H(),...g(),...E()},emits:{"group:selected":e=>!0},setup(e,o){let{slots:n}=o;const a=K(e,r),{backgroundColorClasses:i,backgroundColorStyles:u}=S(e,"bgColor"),{elevationClasses:d}=O(e),{roundedClasses:v}=q(e),C=c(()=>(a==null?void 0:a.disabled.value)||e.disabled),b=c(()=>a.group.items.value.reduce((s,t,f)=>(a.group.selected.value.includes(t.id)&&s.push(f),s),[])),h=c(()=>{const s=a.group.items.value.findIndex(t=>t.id===a.id);return!a.isSelected.value&&b.value.some(t=>t-s===1)}),k=c(()=>{const s=a.group.items.value.findIndex(t=>t.id===a.id);return!a.isSelected.value&&b.value.some(t=>t-s===-1)});return J(r,a),x(()=>{var s;const t=!!(n.text||e.text),f=!!(n.title||e.title);return l(e.tag,{class:["v-expansion-panel",{"v-expansion-panel--active":a.isSelected.value,"v-expansion-panel--before-active":h.value,"v-expansion-panel--after-active":k.value,"v-expansion-panel--disabled":C.value},v.value,i.value],style:u.value,"aria-expanded":a.isSelected.value},{default:()=>[l("div",{class:["v-expansion-panel__shadow",...d.value]},null),f&&l(Q,{key:"title",collapseIcon:e.collapseIcon,color:e.color,expandIcon:e.expandIcon,hideActions:e.hideActions,ripple:e.ripple},{default:()=>[n.title?n.title():e.title]}),t&&l(U,{key:"text",eager:e.eager},{default:()=>[n.text?n.text():e.text]}),(s=n.default)==null?void 0:s.call(n)]})}),{}}});export{Q as V,U as a,X as b,Y as c};