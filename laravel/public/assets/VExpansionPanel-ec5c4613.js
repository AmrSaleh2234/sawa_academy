import{H as p,al as R,aV as D,aW as L,ao as F,Z as u,a1 as x,ap as G,aq as U,aX as j,b as l,aY as z,a2 as V,au as M,aZ as O,O as I,P as X,a_ as Z,U as q,X as H,a0 as g,a$ as N,I as k,ay as W,b0 as h,aU as S,m as C,af as Y,p as J,b1 as E,b2 as K,v as Q,b3 as ee,L as ae,b4 as ne,M as le,b5 as se,aI as te,aM as oe,b6 as ie}from"./index-0f7c46ae.js";const ve=p({name:"VCheckbox",inheritAttrs:!1,props:{...R(),...D()},emits:{"update:focused":e=>!0},setup(e,o){let{attrs:n,slots:a}=o;const{isFocused:i,focus:c,blur:d}=L(e),r=F(),m=u(()=>e.id||`checkbox-${r}`);return x(()=>{const[f,P]=G(n),[y,t]=U(e),[s,b]=j(e);return l(M,V({class:"v-checkbox"},f,y,{id:m.value,focused:i.value}),{...a,default:T=>{let{id:A,messagesId:B,isDisabled:$,isReadonly:w}=T;return l(z,V(s,{id:A.value,"aria-describedby":B.value,disabled:$.value,readonly:w.value},P,{onFocus:c,onBlur:d}),a)}})}),{}}});const v=Symbol.for("vuetify:v-expansion-panel"),de=["default","accordion","inset","popout"],pe=p({name:"VExpansionPanels",props:{color:String,variant:{type:String,default:"default",validator:e=>de.includes(e)},readonly:Boolean,...O(),...I(),...X()},emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:n}=o;Z(e,v);const{themeClasses:a}=q(e),i=u(()=>e.variant&&`v-expansion-panels--variant-${e.variant}`);return H({VExpansionPanel:{color:g(e,"color")},VExpansionPanelTitle:{readonly:g(e,"readonly")}}),x(()=>l(e.tag,{class:["v-expansion-panels",a.value,i.value]},n)),{}}}),_=N({color:String,expandIcon:{type:k,default:"$expand"},collapseIcon:{type:k,default:"$collapse"},hideActions:Boolean,ripple:{type:[Boolean,Object],default:!1},readonly:Boolean},"v-expansion-panel-title"),ce=p({name:"VExpansionPanelTitle",directives:{Ripple:W},props:{..._()},setup(e,o){let{slots:n}=o;const a=h(v);if(!a)throw new Error("[Vuetify] v-expansion-panel-title needs to be placed inside v-expansion-panel");const{backgroundColorClasses:i,backgroundColorStyles:c}=S(e,"color"),d=u(()=>({collapseIcon:e.collapseIcon,disabled:a.disabled.value,expanded:a.isSelected.value,expandIcon:e.expandIcon,readonly:e.readonly}));return x(()=>{var r;return C(l("button",{class:["v-expansion-panel-title",{"v-expansion-panel-title--active":a.isSelected.value},i.value],style:c.value,type:"button",tabindex:a.disabled.value?-1:void 0,disabled:a.disabled.value,"aria-expanded":a.isSelected.value,onClick:e.readonly?void 0:a.toggle},[l("span",{class:"v-expansion-panel-title__overlay"},null),(r=n.default)==null?void 0:r.call(n,d.value),!e.hideActions&&l("span",{class:"v-expansion-panel-title__icon"},[n.actions?n.actions(d.value):l(J,{icon:a.isSelected.value?e.collapseIcon:e.expandIcon},null)])]),[[Y("ripple"),e.ripple]])}),{}}}),ue=p({name:"VExpansionPanelText",props:{...E()},setup(e,o){let{slots:n}=o;const a=h(v);if(!a)throw new Error("[Vuetify] v-expansion-panel-text needs to be placed inside v-expansion-panel");const{hasContent:i,onAfterLeave:c}=K(e,a.isSelected);return x(()=>{var d;return l(ee,{onAfterLeave:c},{default:()=>[C(l("div",{class:"v-expansion-panel-text"},[n.default&&i.value&&l("div",{class:"v-expansion-panel-text__wrapper"},[(d=n.default)==null?void 0:d.call(n)])]),[[Q,a.isSelected.value]])]})}),{}}}),xe=p({name:"VExpansionPanel",props:{title:String,text:String,bgColor:String,...ae(),...ne(),...E(),...le(),...I(),..._()},emits:{"group:selected":e=>!0},setup(e,o){let{slots:n}=o;const a=se(e,v),{backgroundColorClasses:i,backgroundColorStyles:c}=S(e,"bgColor"),{elevationClasses:d}=te(e),{roundedClasses:r}=oe(e),m=u(()=>(a==null?void 0:a.disabled.value)||e.disabled),f=u(()=>a.group.items.value.reduce((t,s,b)=>(a.group.selected.value.includes(s.id)&&t.push(b),t),[])),P=u(()=>{const t=a.group.items.value.findIndex(s=>s.id===a.id);return!a.isSelected.value&&f.value.some(s=>s-t===1)}),y=u(()=>{const t=a.group.items.value.findIndex(s=>s.id===a.id);return!a.isSelected.value&&f.value.some(s=>s-t===-1)});return ie(v,a),x(()=>{var t;const s=!!(n.text||e.text),b=!!(n.title||e.title);return l(e.tag,{class:["v-expansion-panel",{"v-expansion-panel--active":a.isSelected.value,"v-expansion-panel--before-active":P.value,"v-expansion-panel--after-active":y.value,"v-expansion-panel--disabled":m.value},r.value,i.value],style:c.value,"aria-expanded":a.isSelected.value},{default:()=>[l("div",{class:["v-expansion-panel__shadow",...d.value]},null),b&&l(ce,{key:"title",collapseIcon:e.collapseIcon,color:e.color,expandIcon:e.expandIcon,hideActions:e.hideActions,ripple:e.ripple},{default:()=>[n.title?n.title():e.title]}),s&&l(ue,{key:"text",eager:e.eager},{default:()=>[n.text?n.text():e.text]}),(t=n.default)==null?void 0:t.call(n)]})}),{}}});export{ce as V,ue as a,ve as b,pe as c,xe as d};
