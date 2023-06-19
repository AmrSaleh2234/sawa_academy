import{H as p,aj as D,at as R,au as F,am as G,Z as u,a1 as x,an as L,ao as j,av as z,b as s,aw as H,a2 as g,as as O,ax as U,O as I,P as J,ay as K,U as M,X as N,a0 as V,az as X,I as k,aA as Z,aB as h,aC as C,m as S,ad as q,p as Q,aD as E,aE as W,v as Y,aF as ee,L as ae,aG as ne,M as se,aH as te,aI as le,aJ as oe,aK as ie}from"./main-7054a6f8.js";const ve=p({name:"VCheckbox",inheritAttrs:!1,props:{...D(),...R()},emits:{"update:focused":e=>!0},setup(e,o){let{attrs:n,slots:a}=o;const{isFocused:i,focus:c,blur:d}=F(e),r=G(),m=u(()=>e.id||`checkbox-${r}`);return x(()=>{const[f,P]=L(n),[y,l]=j(e),[t,b]=z(e);return s(O,g({class:"v-checkbox"},f,y,{id:m.value,focused:i.value}),{...a,default:A=>{let{id:T,messagesId:B,isDisabled:w,isReadonly:$}=A;return s(H,g(t,{id:T.value,"aria-describedby":B.value,disabled:w.value,readonly:$.value},P,{onFocus:c,onBlur:d}),a)}})}),{}}});const v=Symbol.for("vuetify:v-expansion-panel"),de=["default","accordion","inset","popout"],pe=p({name:"VExpansionPanels",props:{color:String,variant:{type:String,default:"default",validator:e=>de.includes(e)},readonly:Boolean,...U(),...I(),...J()},emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:n}=o;K(e,v);const{themeClasses:a}=M(e),i=u(()=>e.variant&&`v-expansion-panels--variant-${e.variant}`);return N({VExpansionPanel:{color:V(e,"color")},VExpansionPanelTitle:{readonly:V(e,"readonly")}}),x(()=>s(e.tag,{class:["v-expansion-panels",a.value,i.value]},n)),{}}}),_=X({color:String,expandIcon:{type:k,default:"$expand"},collapseIcon:{type:k,default:"$collapse"},hideActions:Boolean,ripple:{type:[Boolean,Object],default:!1},readonly:Boolean},"v-expansion-panel-title"),ce=p({name:"VExpansionPanelTitle",directives:{Ripple:Z},props:{..._()},setup(e,o){let{slots:n}=o;const a=h(v);if(!a)throw new Error("[Vuetify] v-expansion-panel-title needs to be placed inside v-expansion-panel");const{backgroundColorClasses:i,backgroundColorStyles:c}=C(e,"color"),d=u(()=>({collapseIcon:e.collapseIcon,disabled:a.disabled.value,expanded:a.isSelected.value,expandIcon:e.expandIcon,readonly:e.readonly}));return x(()=>{var r;return S(s("button",{class:["v-expansion-panel-title",{"v-expansion-panel-title--active":a.isSelected.value},i.value],style:c.value,type:"button",tabindex:a.disabled.value?-1:void 0,disabled:a.disabled.value,"aria-expanded":a.isSelected.value,onClick:e.readonly?void 0:a.toggle},[s("span",{class:"v-expansion-panel-title__overlay"},null),(r=n.default)==null?void 0:r.call(n,d.value),!e.hideActions&&s("span",{class:"v-expansion-panel-title__icon"},[n.actions?n.actions(d.value):s(Q,{icon:a.isSelected.value?e.collapseIcon:e.expandIcon},null)])]),[[q("ripple"),e.ripple]])}),{}}}),ue=p({name:"VExpansionPanelText",props:{...E()},setup(e,o){let{slots:n}=o;const a=h(v);if(!a)throw new Error("[Vuetify] v-expansion-panel-text needs to be placed inside v-expansion-panel");const{hasContent:i,onAfterLeave:c}=W(e,a.isSelected);return x(()=>{var d;return s(ee,{onAfterLeave:c},{default:()=>[S(s("div",{class:"v-expansion-panel-text"},[n.default&&i.value&&s("div",{class:"v-expansion-panel-text__wrapper"},[(d=n.default)==null?void 0:d.call(n)])]),[[Y,a.isSelected.value]])]})}),{}}}),xe=p({name:"VExpansionPanel",props:{title:String,text:String,bgColor:String,...ae(),...ne(),...E(),...se(),...I(),..._()},emits:{"group:selected":e=>!0},setup(e,o){let{slots:n}=o;const a=te(e,v),{backgroundColorClasses:i,backgroundColorStyles:c}=C(e,"bgColor"),{elevationClasses:d}=le(e),{roundedClasses:r}=oe(e),m=u(()=>(a==null?void 0:a.disabled.value)||e.disabled),f=u(()=>a.group.items.value.reduce((l,t,b)=>(a.group.selected.value.includes(t.id)&&l.push(b),l),[])),P=u(()=>{const l=a.group.items.value.findIndex(t=>t.id===a.id);return!a.isSelected.value&&f.value.some(t=>t-l===1)}),y=u(()=>{const l=a.group.items.value.findIndex(t=>t.id===a.id);return!a.isSelected.value&&f.value.some(t=>t-l===-1)});return ie(v,a),x(()=>{var l;const t=!!(n.text||e.text),b=!!(n.title||e.title);return s(e.tag,{class:["v-expansion-panel",{"v-expansion-panel--active":a.isSelected.value,"v-expansion-panel--before-active":P.value,"v-expansion-panel--after-active":y.value,"v-expansion-panel--disabled":m.value},r.value,i.value],style:c.value,"aria-expanded":a.isSelected.value},{default:()=>[s("div",{class:["v-expansion-panel__shadow",...d.value]},null),b&&s(ce,{key:"title",collapseIcon:e.collapseIcon,color:e.color,expandIcon:e.expandIcon,hideActions:e.hideActions,ripple:e.ripple},{default:()=>[n.title?n.title():e.title]}),t&&s(ue,{key:"text",eager:e.eager},{default:()=>[n.text?n.text():e.text]}),(l=n.default)==null?void 0:l.call(n)]})}),{}}});export{ce as V,ue as a,ve as b,pe as c,xe as d};
