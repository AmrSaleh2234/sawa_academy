import{_ as p,y as c,C as h,k as u,o as i,e as g,q as r,x as l,ae as f,h as e,t as s,am as _,a8 as y,f as k,aO as x,p as V,a6 as C}from"./main-0ea29110.js";import{s as $}from"./confirmpopup.esm-aa4d9214.js";import"./focustrap.esm-4bbdf7e1.js";import"./overlayeventbus.esm-94e7e145.js";import"./portal.esm-e0ec2510.js";const b={components:{ConfirmPopup:$},data(){return{search:"",headers:[],parents:[],loading:!0}},computed:{header(){return this.headers=[{key:"id",title:this.$t("index")},{key:"fname",title:this.$t("parent.fname")},{key:"lname",title:this.$t("parent.lname")},{key:"email",title:this.$t("parent.email")},{key:"phone",title:this.$t("parent.phone")},{key:"image",title:this.$t("parent.image")}]}},methods:{getParents(){c.get("/api/admin-parents").then(a=>{this.parents=a.data.parents,console.log(a.data.parents),this.loading=!1})},fomate(a){return h(a).format("DD-MM-yy ")}},mounted(){this.getParents()}},v={style:{margin:"1rem 0"}},B=["src"];function P(a,o,D,N,n,d){const m=u("v-data-table");return i(),g("div",null,[r(C,null,{default:l(()=>[r(f,null,{default:l(()=>[e("h2",v,s(a.$t("parents")),1),r(_),r(y,{modelValue:n.search,"onUpdate:modelValue":o[0]||(o[0]=t=>n.search=t),"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},null,8,["modelValue"])]),_:1}),r(m,{headers:d.header,items:n.parents,search:n.search},{top:l(()=>[n.loading?(i(),k(x,{key:0,slot:"progress",style:{color:"#135c65"},indeterminate:""})):V("",!0)]),item:l(({item:t})=>[e("tr",null,[e("td",null,s(t.columns.id),1),e("td",null,s(t.columns.fname),1),e("td",null,s(t.columns.lname),1),e("td",null,s(t.columns.email),1),e("td",null,s(t.columns.phone),1),e("td",null,[e("img",{src:t.columns.image,style:{width:"32px",height:"32px","border-radius":"99px"},alt:"no_img",srcset:""},null,8,B)])])]),_:1},8,["headers","items","search"])]),_:1})])}const E=p(b,[["render",P]]);export{E as default};