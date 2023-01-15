import{d as $,x as H,z as v,o as P,A as r,l as m,E as e,B as t,S as b,T as f,D as s,O as x,Q as B,aC as y,aD as C,aO as A,e as c,aP as M,J as i,F as V,G as j,u as J,_ as Q}from"./index-98b3a28d.js";import{I as U}from"./index-7bbee7e2.js";import{D as q}from"./index-5bb5ef57.js";import{N as K}from"./index-dfbe7eb4.js";import{n as W,o as X}from"./home-aee6d9e6.js";const Y="/assets/fire-eced309c.png",g=p=>(V("data-v-42d929cc"),p=p(),j(),p),Z={class:"cexPor-container"},tt={class:"pt-10px pb-50px"},et={class:"tabs"},nt=["onClick"],st={class:"flex items-center pt-15px pl-15px pr-15px"},at=g(()=>t("img",{class:"w-80px mr-25px ml-25px",src:Y,alt:"",srcset:""},null,-1)),lt={class:"table-1"},ot={class:"tabs-1 pl-15px pr-15px"},rt={class:"p-15px text-size-14px color-#333 lh-none"},ct={class:"flex items-center flex-1"},it={class:"max-w-70%"},ut={class:"flex items-center"},dt=g(()=>t("span",{class:"ml-5px color-#999"},"ETH",-1)),_t={class:"p-15px"},pt={class:"table-container"},vt=g(()=>t("th",null,"Gas",-1)),ht=$({__name:"ethBurn",setup(p){const k=new URL("/assets/icon-default-995adb35.png",self.location).href,{t:a}=H(),w=J(),S=A();let T=[{id:"5m",name:a("5m")},{id:"1h",name:a("1h")},{id:"1d",name:a("1d")},{id:"7d",name:a("7d")},{id:"30d",name:a("30d")},{id:"total",name:a("total")}],F=S.params.interval,h=v(F||"5m");function N(n){h.value=n,w.replace({name:"EthBurn",params:{interval:n}}),D()}let u=v({burn_count:0,burn_rates:0,burn_list:[],burn_speed:0});function D(){W(h.value).then(n=>{!n.burn_rates&&n["burn_rates "]&&(n.burn_rates=n["burn_rates "]),console.log("_getEthBurnDetail",n),u.value=n})}let E=v([]);function z(){X().then(n=>{var o;E.value=((o=n==null?void 0:n[0])==null?void 0:o.latestBlockFees)||[],console.log("_getEthBurnBlockInfo",n)})}let d=v(0);function I(n){d.value=n}function G(){D(),z()}return P(()=>{G()}),(n,o)=>{const L=K,O=q,R=U;return c(),r("div",Z,[m(L,{title:e(a)("ethBurnDetail"),"left-text":"",fixed:"",placeholder:"","left-arrow":"",onClickLeft:o[0]||(o[0]=l=>e(M)(e(w))),"safe-area-inset-top":"",class:"header-container"},null,8,["title"]),t("div",tt,[t("div",et,[(c(!0),r(b,null,f(e(T),(l,_)=>(c(),r("button",{key:_,class:x(["tabs-btn",{active:h.value===l.id}]),onClick:B(mt=>N(l.id),["stop"])},s(l.name),11,nt))),128))]),t("div",st,[at,t("table",lt,[t("tr",null,[t("td",null,s(e(a)("burningAmount")),1),t("td",null,s(e(i)(u.value.burn_count||0)),1)]),t("tr",null,[t("td",null,s(e(a)("burnSpeed")),1),t("td",null,s(e(i)(u.value.burn_speed||0)),1)]),t("tr",null,[t("td",null,s(e(a)("issueOffset")),1),t("td",null,s(e(i)(u.value.burn_rates||0))+"(>1 "+s(e(a)("indicatesCombustionGreaterThanOutput"))+")",1)])])]),m(O,{style:{color:"#EBEDF0"}}),t("div",ot,[t("button",{class:x(["tabs-btn",{active:d.value===0}]),onClick:o[1]||(o[1]=B(l=>I(0),["stop"]))},s(e(a)("burningRanking")),3),t("button",{class:x(["tabs-btn",{active:d.value===1}]),onClick:o[2]||(o[2]=B(l=>I(1),["stop"]))},s(e(a)("blockDetail")),3)]),y(t("ul",rt,[(c(!0),r(b,null,f(u.value.burn_list,(l,_)=>(c(),r("li",{key:_,class:"flex items-center justify-between mb-15px"},[t("div",ct,[m(R,{class:"mr-5px",round:"",width:"0.64rem",height:"0.65rem","lazy-load":"","show-loading":"",src:l.image||e(k),"error-icon":e(k)},null,8,["src","error-icon"]),t("span",it,s(l.name),1)]),t("div",ut,[t("span",null,s(e(i)(l.fees)),1),dt])]))),128))],512),[[C,d.value===0]]),y(t("div",_t,[t("table",pt,[t("tr",null,[t("th",null,s(e(a)("blockHeight")),1),vt,t("th",null,s(e(a)("burn"))+"(ETH)",1)]),(c(!0),r(b,null,f(E.value,(l,_)=>(c(),r("tr",{key:_},[t("td",null,s(l.number),1),t("td",null,s(e(i)(l.baseFeePerGas||0)),1),t("td",null,s(e(i)(l.fees||0)),1)]))),128))])],512),[[C,d.value===1]])])])}}});const kt=Q(ht,[["__scopeId","data-v-42d929cc"]]);export{kt as default};
