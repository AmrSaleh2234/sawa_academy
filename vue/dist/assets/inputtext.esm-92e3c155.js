import{s as u}from"./basecomponent.esm-930ec5e3.js";import{o as a,c as p,a4 as r}from"./main-d4f867a4.js";var s={name:"InputText",extends:u,emits:["update:modelValue"],props:{modelValue:null},methods:{onInput(e){this.$emit("update:modelValue",e.target.value)}},computed:{filled(){return this.modelValue!=null&&this.modelValue.toString().length>0}}};const m=["value"];function d(e,l,n,i,c,t){return a(),p("input",r({class:["p-inputtext p-component",{"p-filled":t.filled}],value:n.modelValue,onInput:l[0]||(l[0]=(...o)=>t.onInput&&t.onInput(...o))},e.ptm("root")),null,16,m)}s.render=d;export{s};
