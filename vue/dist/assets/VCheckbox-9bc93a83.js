import{Z as C,aw as v,ax as P,ay as A,az as B,af as I,ai as y,aA as g,aB as F,aC as D,i as t,aD as R,m as a,aE as _}from"./main-cb98dd2c.js";const E=C({name:"VCheckbox",inheritAttrs:!1,props:{...v(),...P()},emits:{"update:focused":e=>!0},setup(e,o){let{attrs:r,slots:s}=o;const{isFocused:c,focus:u,blur:n}=A(e),i=B(),d=I(()=>e.id||`checkbox-${i}`);return y(()=>{const[l,p]=g(r),[b,$]=F(e),[f,w]=D(e);return t(_,a({class:"v-checkbox"},l,b,{id:d.value,focused:c.value}),{...s,default:k=>{let{id:m,messagesId:x,isDisabled:h,isReadonly:V}=k;return t(R,a(f,{id:m.value,"aria-describedby":x.value,disabled:h.value,readonly:V.value},p,{onFocus:u,onBlur:n}),s)}})}),{}}});export{E as V};