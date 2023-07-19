import{U as k,a9 as q,ae as y,h as n,ao as I,W as r,Y as S,ap as g,aq as A,ar as z,a2 as G,X as N,as as O,Z as U,at as W,au as X,av as Y,$ as Z,aw as J,a1 as K,a3 as M,a7 as Q,ax as ee,ay as ae,az as te,aA as ne,aB as le,aC as se,aD as de,aE as ie,aF as ce,aG as oe,ab as p,j as ue,al as re,y as ve,aH as me,aI as fe}from"./main-5f3cd431.js";const be=k({name:"VCardActions",setup(e,l){let{slots:t}=l;return q({VBtn:{variant:"text"}}),y(()=>{var a;return n("div",{class:"v-card-actions"},[(a=t.default)==null?void 0:a.call(t)])}),{}}}),ge=I("v-card-subtitle"),ke=I("v-card-title"),ye=k({name:"VCardItem",props:{appendAvatar:String,appendIcon:r,prependAvatar:String,prependIcon:r,subtitle:String,title:String,...S()},setup(e,l){let{slots:t}=l;return y(()=>{var a,s,d,i,c;const v=!!(e.prependAvatar||e.prependIcon||t.prepend),m=!!(e.appendAvatar||e.appendIcon||t.append),f=!!(e.title||t.title),b=!!(e.subtitle||t.subtitle);return n("div",{class:"v-card-item"},[v&&n(g,{key:"prepend",defaults:{VAvatar:{density:e.density,icon:e.prependIcon,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon}}},{default:()=>[n("div",{class:"v-card-item__prepend"},[((a=t.prepend)==null?void 0:a.call(t))??n(A,null,null)])]}),n("div",{class:"v-card-item__content"},[f&&n(ke,{key:"title"},{default:()=>[((s=t.title)==null?void 0:s.call(t))??e.title]}),b&&n(ge,{key:"subtitle"},{default:()=>[((d=t.subtitle)==null?void 0:d.call(t))??e.subtitle]}),(i=t.default)==null?void 0:i.call(t)]),m&&n(g,{key:"append",defaults:{VAvatar:{density:e.density,icon:e.appendIcon,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon}}},{default:()=>[n("div",{class:"v-card-item__append"},[((c=t.append)==null?void 0:c.call(t))??n(A,null,null)])]})])}),{}}}),Ie=I("v-card-text"),Ve=k({name:"VCard",directives:{Ripple:z},props:{appendAvatar:String,appendIcon:r,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:r,ripple:{type:Boolean,default:!0},subtitle:String,text:String,title:String,...G(),...N(),...S(),...O(),...U(),...W(),...X(),...Y(),...Z(),...J(),...K(),...M({variant:"elevated"})},setup(e,l){let{attrs:t,slots:a}=l;const{themeClasses:s}=Q(e),{borderClasses:d}=ee(e),{colorClasses:i,colorStyles:c,variantClasses:v}=ae(e),{densityClasses:m}=te(e),{dimensionStyles:f}=ne(e),{elevationClasses:b}=le(e),{loaderClasses:_}=se(e),{locationStyles:P}=de(e),{positionClasses:x}=ie(e),{roundedClasses:$}=ce(e),o=oe(e,t),B=p(()=>e.link!==!1&&o.isLink.value),u=p(()=>!e.disabled&&e.link!==!1&&(e.link||o.isClickable.value));return y(()=>{var C,V,h;const D=B.value?"a":e.tag,T=!!(a.title||e.title),L=!!(a.subtitle||e.subtitle),R=T||L,E=!!(a.append||e.appendAvatar||e.appendIcon),w=!!(a.prepend||e.prependAvatar||e.prependIcon),F=!!(a.image||e.image),H=R||w||E,j=!!(a.text||e.text);return ue(n(D,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":u.value},s.value,d.value,i.value,m.value,b.value,_.value,x.value,$.value,v.value],style:[c.value,f.value,P.value],href:o.href.value,onClick:u.value&&o.navigate,tabindex:e.disabled?-1:void 0},{default:()=>[F&&n(g,{key:"image",defaults:{VImg:{cover:!0,src:e.image}}},{default:()=>[n("div",{class:"v-card__image"},[((C=a.image)==null?void 0:C.call(a))??n(ve,null,null)])]}),n(me,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:a.loader}),H&&n(ye,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:a.item,prepend:a.prepend,title:a.title,subtitle:a.subtitle,append:a.append}),j&&n(Ie,{key:"text"},{default:()=>[((V=a.text)==null?void 0:V.call(a))??e.text]}),(h=a.default)==null?void 0:h.call(a),a.actions&&n(be,null,{default:a.actions}),fe(u.value,"v-card")]}),[[re("ripple"),u.value&&e.ripple]])}),{}}});export{Ve as V,Ie as a,ke as b,be as c};
