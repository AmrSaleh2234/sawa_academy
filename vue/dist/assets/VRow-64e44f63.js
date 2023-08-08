import{aU as i,am as S,at as b,aD as C,aV as v}from"./main-858db694.js";const c=["sm","md","lg","xl","xxl"],N=(()=>c.reduce((t,n)=>(t[n]={type:[Boolean,String,Number],default:!1},t),{}))(),j=(()=>c.reduce((t,n)=>(t["offset"+i(n)]={type:[String,Number],default:null},t),{}))(),$=(()=>c.reduce((t,n)=>(t["order"+i(n)]={type:[String,Number],default:null},t),{}))(),y={col:Object.keys(N),offset:Object.keys(j),order:Object.keys($)};function P(t,n,l){let a=t;if(!(l==null||l===!1)){if(n){const e=n.replace(t,"");a+=`-${e}`}return t==="col"&&(a="v-"+a),t==="col"&&(l===""||l===!0)||(a+=`-${l}`),a.toLowerCase()}}const _=["auto","start","end","center","baseline","stretch"],M=S({name:"VCol",props:{cols:{type:[Boolean,String,Number],default:!1},...N,offset:{type:[String,Number],default:null},...j,order:{type:[String,Number],default:null},...$,alignSelf:{type:String,default:null,validator:t=>_.includes(t)},...b()},setup(t,n){let{slots:l}=n;const a=C(()=>{const e=[];let s;for(s in y)y[s].forEach(o=>{const u=t[o],g=P(s,o,u);g&&e.push(g)});const r=e.some(o=>o.startsWith("v-col-"));return e.push({"v-col":!r||!t.cols,[`v-col-${t.cols}`]:t.cols,[`offset-${t.offset}`]:t.offset,[`order-${t.order}`]:t.order,[`align-self-${t.alignSelf}`]:t.alignSelf}),e});return()=>{var e;return v(t.tag,{class:a.value},(e=l.default)==null?void 0:e.call(l))}}}),x=["sm","md","lg","xl","xxl"],f=["start","end","center"],k=["space-between","space-around","space-evenly"];function d(t,n){return x.reduce((l,a)=>(l[t+i(a)]=n(),l),{})}const O=[...f,"baseline","stretch"],L=t=>O.includes(t),V=d("align",()=>({type:String,default:null,validator:L})),G=[...f,...k],h=t=>G.includes(t),w=d("justify",()=>({type:String,default:null,validator:h})),U=[...f,...k,"stretch"],E=t=>U.includes(t),A=d("alignContent",()=>({type:String,default:null,validator:E})),m={align:Object.keys(V),justify:Object.keys(w),alignContent:Object.keys(A)},I={align:"align",justify:"justify",alignContent:"align-content"};function T(t,n,l){let a=I[t];if(l!=null){if(n){const e=n.replace(t,"");a+=`-${e}`}return a+=`-${l}`,a.toLowerCase()}}const R=S({name:"VRow",props:{dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:L},...V,justify:{type:String,default:null,validator:h},...w,alignContent:{type:String,default:null,validator:E},...A,...b()},setup(t,n){let{slots:l}=n;const a=C(()=>{const e=[];let s;for(s in m)m[s].forEach(r=>{const o=t[r],u=T(s,r,o);u&&e.push(u)});return e.push({"v-row--no-gutters":t.noGutters,"v-row--dense":t.dense,[`align-${t.align}`]:t.align,[`justify-${t.justify}`]:t.justify,[`align-content-${t.alignContent}`]:t.alignContent}),e});return()=>{var e;return v(t.tag,{class:["v-row",a.value]},(e=l.default)==null?void 0:e.call(l))}}});export{M as V,R as a};
