(function(){var __vite_style__=document.createElement("style");__vite_style__.innerHTML='@charset "UTF-8";.news-container[data-v-38cae3d9]{--van-notice-bar-font-size: .2rem;--van-notice-bar-line-height: .32rem;--van-steps-background-color: #fff;min-height:calc(100vh - 2.4rem);font-family:Poppins-Regular,Haas Grot Text R,PingFangSC-Regular,Helvetica Neue,Microsoft YaHei,\\5fae\\8f6f\\96c5\\9ed1,Arial,sans-serif;font-size:.28rem;color:#333;letter-spacing:0;font-weight:400}.news-container .container[data-v-38cae3d9]{overflow-y:auto;width:100%;margin-top:0}.news-container .van-step--vertical[data-v-38cae3d9]:not(:last-child):after{border-bottom-width:0}.news-container .content .title[data-v-38cae3d9]{font-family:PingFangSC-Medium;font-size:.28rem;color:#333;font-weight:bolder;display:flex}.news-container .content .title.padding[data-v-38cae3d9]{padding:.3rem .3rem .06rem}.news-container .content .font-500[data-v-38cae3d9]{font-weight:600}.news-container .content .blue[data-v-38cae3d9]{color:#3f80f7;font-size:.28rem;margin-right:.1rem}.news-container .content .circle[data-v-38cae3d9]{width:.18rem;height:.18rem;border-radius:100%;border:.03rem solid #666666;display:block;background:#fff}.news-container .content .item .flex-between[data-v-38cae3d9]{display:flex;justify-content:space-between;align-content:center}.news-container .content .item .flex-end[data-v-38cae3d9]{display:flex;justify-content:flex-end;align-content:center}.news-container .content .item .color-999[data-v-38cae3d9]{color:#999}.news-container .content .item .color-333[data-v-38cae3d9]{color:#333}.news-container .content .item .color-666[data-v-38cae3d9]{color:#666}.news-container .content .item .font-10[data-v-38cae3d9]{font-size:.2rem}.news-container .content .item .span1[data-v-38cae3d9]{font-size:.24rem;color:#666}.news-container .content .item .tag[data-v-38cae3d9]{padding:.08rem .16rem;font-size:.24rem;line-height:.32rem;border-radius:.08rem}.news-container .content .item .tag.rise[data-v-38cae3d9]{background:#12b8861a;color:#12b886}.news-container .content .item .tag.fall[data-v-38cae3d9]{background:#f6465d1a;color:#f6465d;margin-left:.28rem}.news-container .content .item .mt-5[data-v-38cae3d9]{margin-top:.1rem}.news-container .content .item .mt-10[data-v-38cae3d9]{margin-top:.2rem}.news-container .content .item img[data-v-38cae3d9]{width:100%}.news-container .content .item .flex-start[data-v-38cae3d9]{display:flex;align-items:center}.news-container .content .item .icon-v[data-v-38cae3d9]{color:#3f80f7;font-size:.32rem;vertical-align:middle}.news-container .ad[data-v-38cae3d9]{padding:0 .3rem;position:relative}.news-container .ad .bg[data-v-38cae3d9]{background:rgba(0,0,0,.4);padding:.06rem;border-radius:.04rem;font-size:.2rem;position:absolute;z-index:2;color:#fff}.news-container .ad .bg.absolute-left[data-v-38cae3d9]{left:.4rem;top:.1rem}.news-container .ad .bg.absolute-right[data-v-38cae3d9]{right:.4rem;top:.1rem}.news-container .ad .my-swipe[data-v-38cae3d9]{margin-top:.6rem;margin-bottom:.6rem}.news-container .ad .my-swipe .van-swipe-item img[data-v-38cae3d9]{width:100%}.news-container .ad .iconfont[data-v-38cae3d9]{vertical-align:middle}.news-container .ml-5[data-v-38cae3d9]{margin-left:.1rem}.news-container .overflow[data-v-38cae3d9]{overflow:hidden}.news-container .lineHight20[data-v-38cae3d9]{line-height:.4rem;font-size:.26rem;user-select:none}\n',document.head.appendChild(__vite_style__),System.register(["./index-legacy.5c6615c9.js","./vendor-legacy.12f29a47.js"],(function(exports){"use strict";var service,_export_sfc,ImagePreview,resolveComponent,openBlock,createElementBlock,createBlock,createCommentVNode,createBaseVNode,toDisplayString,normalizeStyle,createVNode,withCtx,pushScopeId,popScopeId,Fragment,renderList,createTextVNode,withModifiers;return{setters:[function(e){service=e.s,_export_sfc=e._},function(e){ImagePreview=e.X,resolveComponent=e.r,openBlock=e.o,createElementBlock=e.x,createBlock=e.c,createCommentVNode=e.H,createBaseVNode=e.C,toDisplayString=e.E,normalizeStyle=e.D,createVNode=e.y,withCtx=e.w,pushScopeId=e.M,popScopeId=e.O,Fragment=e.F,renderList=e.z,createTextVNode=e.I,withModifiers=e.J}],execute:function(){function getNewsList(e){return service({method:"get",url:"/v1api/v2/discover/news",params:{lang:e.lang,userAddress:e.userAddress,pageNO:e.pageNo,pageSize:e.pageSize}})}function newsVote(e){return service({method:"post",url:"/v1api/v2/discover/newsVote",params:{userAddress:e.userAddress,newsId:e.newsId,vote:e.vote}})}function getNewsAd(){return service({method:"get",url:"/v1api/v2/discover/newsAd"})}var _imports_0="/apps/assets/ave-empty.a9f4da8d.png",news_vue_vue_type_style_index_0_scoped_true_lang="";const _sfc_main={name:"GlobalCommunity",components:{},data(){return{active:-1,list:[],loading:!1,images:[],showAd:eval(localStorage.getItem("showAd")||!0),showNotice:eval(localStorage.getItem("showNotice")||!0),conditions:{pageNo:1,pageSize:2,lang:"",userAddress:""},total:"",day:"",finished:!1,refreshing:!1,top:0,bottom:0}},mounted(){var e;this.$store.commit("switchTypeUpDown",(null===(e=this.$route.query)||void 0===e?void 0:e.typeUpDown)||0),this.getNewsList(this.conditions),this.getNewsAd(),this.$nextTick((()=>{var e,t,o,i,n,a;this.top=(null===(e=this.$refs)||void 0===e||null===(t=e.top)||void 0===t||null===(o=t.$el)||void 0===o?void 0:o.offsetHeight)||0,this.bottom=(null===(i=this.$refs)||void 0===i||null===(n=i.bottom)||void 0===n||null===(a=n.$el)||void 0===a?void 0:a.offsetHeight)||0}))},computed:{language(){return this.$store.getters.language}},watch:{"$store.state.currentAccount"(e){this.refreshing=!1,this.loading=!1,this.list=[],this.conditions.pageNo=1,this.getNewsList(this.conditions)},showNotice(e){e||(this.top=0)},showAd(e){e||(this.bottom=0)}},methods:{closeNotice(){this.showNotice=!1,localStorage.showNotice=!1},closeAd(){this.showAd=!1,localStorage.showAd=!1},getNewsList(e){return new Promise(((t,o)=>{this.loading=!0,this.conditions.userAddress=this.$store.state.currentAccount,this.conditions.lang="zh-cn"===this.language||"zh-tw"===this.language?"zh":"en",getNewsList(e).then((e=>{var o,i,n,a;let s=null==e||null===(o=e.data)||void 0===o?void 0:o.list;this.day=null!==(i=this.list[0])&&void 0!==i&&i.created_at?this.$f.formatDate((null===(n=this.list[0])||void 0===n?void 0:n.created_at)||"","YYYY-MM-DD"):"",this.total=null==e||null===(a=e.data)||void 0===a?void 0:a.total,1==this.refreshing&&(this.list=s),t(s)})).catch((e=>{console.log(e),o([])})).finally((()=>{this.loading=!1}))}))},async refresh(){this.refreshing=!0,this.conditions.pageNo=1,await this.getNewsList(this.conditions),this.refreshing=!1},async onLoad(){this.conditions.pageNo++;let e=await this.getNewsList(this.conditions);this.list.push(...e),this.list.length>=this.total&&(this.finished=!0)},dealDate(e){var t=Date.parse(new Date),o=e,i=parseInt(t)/1e3-parseInt(o);if((i=Math.abs(i))<10)return this.$t("justNow");if(i<60&&i>=10)return Math.floor(i)+this.$t("ss");var n=i/60;if(n<60)return Math.floor(n)+this.$t("min");var a=i/3600;return a<24?Math.floor(a)+this.$t("hour"):a>=24?this.$f.formatDate(e):void 0},view(e){this.$f.openBrowserAll(e.url)},getNewsAd(){getNewsAd().then((e=>{this.images=(null==e?void 0:e.data)||[]})).finally((()=>{}))},newsVote(e,t,o){let i=this.$store.state.currentAccount;if(!i||"undefined"===i)return void this.$toast({message:this.$t("connectWalletFirst"),position:"top"});if(1==e.myVote&&1==t)return void this.$toast({message:this.$t("voted"),position:"top"});if(-1==e.myVote&&-1==t)return void this.$toast({message:this.$t("voted"),position:"top"});newsVote({userAddress:i,newsId:e.id,vote:t}).then((()=>{this.$toast({message:this.$t("success")}),this.list[o].myVote=t,1==t?(this.list[o].badCount=this.list[o].badCount>0?this.list[o].badCount-1:0,this.list[o].goodCount=this.list[o].goodCount+1):(this.list[o].badCount=this.list[o].badCount+1,this.list[o].goodCount=this.list[o].goodCount>0?this.list[o].goodCount-1:0)})).catch((e=>{this.$toast({message:e})}))},ImagePreview:ImagePreview}},_withScopeId=e=>(pushScopeId("data-v-38cae3d9"),e=e(),popScopeId(),e),_hoisted_1={class:"news-container"},_hoisted_2={class:"content"},_hoisted_3={key:0,class:"title padding"},_hoisted_4=_withScopeId((()=>createBaseVNode("i",{class:"iconfont icon-calendar blue"},null,-1))),_hoisted_5={class:"font-500"},_hoisted_6=_withScopeId((()=>createBaseVNode("span",{class:"circle"},null,-1))),_hoisted_7={class:"item"},_hoisted_8={class:"flex-between"},_hoisted_9={class:"color-999"},_hoisted_10={class:"color-999"},_hoisted_11={key:0,class:"flex-start mt-10"},_hoisted_12=_withScopeId((()=>createBaseVNode("img",{src:_imports_0,style:{width:"30px",height:"30px"},alt:"",srcset:""},null,-1))),_hoisted_13={class:"ml-5"},_hoisted_14={class:"block title"},_hoisted_15=_withScopeId((()=>createBaseVNode("i",{class:"iconfont icon-v"},null,-1))),_hoisted_16={key:0,class:"color-999 font-10"},_hoisted_17=_withScopeId((()=>createBaseVNode("i",{class:"iconfont icon-forward font-10"},null,-1))),_hoisted_18={key:1,class:"title mt-10 block"},_hoisted_19={class:"color-666 mt-10"},_hoisted_20=["innerHTML"],_hoisted_21={class:"flex-end mt-10"},_hoisted_22=["onClick"],_hoisted_23={key:1,class:"ad",ref:"bottom"},_hoisted_24={class:"bg absolute-left"},_hoisted_25=["src","alt"];function _sfc_render(e,t,o,i,n,a){const s=resolveComponent("van-notice-bar"),l=resolveComponent("van-image"),r=resolveComponent("van-col"),d=resolveComponent("van-row"),c=resolveComponent("van-step"),h=resolveComponent("van-steps"),m=resolveComponent("van-list"),g=resolveComponent("van-pull-refresh"),v=resolveComponent("van-icon"),u=resolveComponent("van-swipe-item"),p=resolveComponent("van-swipe");return openBlock(),createElementBlock("section",_hoisted_1,[n.showNotice?(openBlock(),createBlock(s,{key:0,ref:"top",wrapable:"",mode:"closeable",text:e.$t("newsTip"),onClose:a.closeNotice},null,8,["text","onClose"])):createCommentVNode("",!0),createBaseVNode("div",_hoisted_2,[n.day?(openBlock(),createElementBlock("div",_hoisted_3,[_hoisted_4,createBaseVNode("span",_hoisted_5,toDisplayString(n.day),1)])):createCommentVNode("",!0),createBaseVNode("div",{class:"container",ref:"middle",style:normalizeStyle({height:`calc(100vh - ${n.top}px - ${n.bottom}px)`})},[createVNode(g,{modelValue:n.refreshing,"onUpdate:modelValue":t[1]||(t[1]=e=>n.refreshing=e),onRefresh:a.refresh,"loosing-text":e.$t("loosingText"),"pulling-text":e.$t("pullingText"),"loading-text":e.$t("loading")},{default:withCtx((()=>[createVNode(m,{loading:n.loading,"onUpdate:loading":t[0]||(t[0]=e=>n.loading=e),finished:n.finished,"loading-text":e.$t("loading"),"finished-text":e.$t("noMore"),onLoad:a.onLoad},{default:withCtx((()=>[createVNode(h,{direction:"vertical",active:"active"},{default:withCtx((()=>[(openBlock(!0),createElementBlock(Fragment,null,renderList(n.list,((t,o)=>(openBlock(),createBlock(c,{key:o},{"inactive-icon":withCtx((()=>[_hoisted_6])),default:withCtx((()=>{var o,i,n,s,c,h,m,g,v,u,p,_,w,f,y,N,k,x,B,C,b,V,$;return[createBaseVNode("div",_hoisted_7,[createBaseVNode("div",_hoisted_8,[createBaseVNode("span",_hoisted_9,toDisplayString(a.dealDate(t.created_at)),1),createBaseVNode("span",_hoisted_10,toDisplayString(e.$t("source"))+toDisplayString(t.source),1)]),"twitter"===t.source?(openBlock(),createElementBlock("div",_hoisted_11,[createVNode(l,{class:"logo",width:"30px",height:"30px",src:null===(o=t.content)||void 0===o||null===(i=o.items[0])||void 0===i||null===(n=i.user)||void 0===n?void 0:n.profile_image_url_https,fit:"contain","lazy-load":"","loading-icon":"https://www.avestorage.cloud/logo/ave_gray.png","error-icon":"https://www.avestorage.cloud/logo/ave_gray.png",round:""},{error:withCtx((()=>[_hoisted_12])),_:2},1032,["src"]),createBaseVNode("div",_hoisted_13,[createBaseVNode("span",_hoisted_14,[createTextVNode(toDisplayString(null===(s=t.content)||void 0===s||null===(c=s.items[0])||void 0===c||null===(h=c.user)||void 0===h?void 0:h.name),1),_hoisted_15]),null!==(m=t.content)&&void 0!==m&&null!==(g=m.items[0])&&void 0!==g&&null!==(v=g.legacy)&&void 0!==v&&v.retweeted_status_result?(openBlock(),createElementBlock("span",_hoisted_16,[_hoisted_17,createTextVNode(" "+toDisplayString(e.$t("forward"))+toDisplayString(null===(u=t.content)||void 0===u||null===(p=u.items[0])||void 0===p||null===(_=p.legacy)||void 0===_?void 0:_.retweeted_status_result.user.name),1)])):createCommentVNode("",!0)])])):(openBlock(),createElementBlock("span",_hoisted_18,toDisplayString(null===(w=t.content)||void 0===w||null===(f=w.items[0])||void 0===f?void 0:f.legacy.title),1)),createBaseVNode("div",_hoisted_19,[createBaseVNode("div",{class:"overflow lineHight20",innerHTML:(null===(y=t.content)||void 0===y||null===(N=y.items[0])||void 0===N||null===(k=N.legacy.full_text)||void 0===k?void 0:k.length)>500&&"twitter"!==t.source?(null===(x=t.content)||void 0===x||null===(B=x.items[0])||void 0===B?void 0:B.legacy.full_text.slice(0,100))+"...":null===(C=t.content)||void 0===C||null===(b=C.items[0])||void 0===b?void 0:b.legacy.full_text},null,8,_hoisted_20),null!==(V=t.content)&&void 0!==V&&null!==($=V.items[0])&&void 0!==$&&$.legacy.media?(openBlock(),createBlock(d,{key:0,gutter:"5",class:"mt-10"},{default:withCtx((()=>{var e,o;return[(openBlock(!0),createElementBlock(Fragment,null,renderList(null===(e=t.content)||void 0===e||null===(o=e.items[0])||void 0===o?void 0:o.legacy.media,((e,t)=>(openBlock(),createBlock(r,{span:"8",key:t},{default:withCtx((()=>["photo"===e.type?(openBlock(),createBlock(l,{key:0,src:e.media_url_https,width:"100%",fit:"contain","lazy-load":"","loading-icon":"https://www.avestorage.cloud/logo/ave_gray.png","error-icon":"https://www.avestorage.cloud/logo/ave_gray.png",onClick:withModifiers((t=>a.ImagePreview({images:[e.media_url_https],closeable:!0})),["stop"])},null,8,["src","onClick"])):createCommentVNode("",!0)])),_:2},1024)))),128))]})),_:2},1024)):createCommentVNode("",!0)]),createBaseVNode("div",_hoisted_21,[t.url?(openBlock(),createElementBlock("span",{key:0,class:"span1",onClick:e=>a.view(t)},toDisplayString(e.$t("view")),9,_hoisted_22)):createCommentVNode("",!0)])])]})),_:2},1024)))),128)),createVNode(c,null,{"inactive-icon":withCtx((()=>[])),_:1})])),_:1})])),_:1},8,["loading","finished","loading-text","finished-text","onLoad"])])),_:1},8,["modelValue","onRefresh","loosing-text","pulling-text","loading-text"])],4)]),n.showAd&&n.images.length>0?(openBlock(),createElementBlock("div",_hoisted_23,[createBaseVNode("span",_hoisted_24,toDisplayString(e.$t("ad")),1),createVNode(v,{class:"bg absolute-right",name:"cross",onClick:a.closeAd},null,8,["onClick"]),createVNode(p,{class:"my-swipe",autoplay:3e3,"indicator-color":"white"},{default:withCtx((()=>[(openBlock(!0),createElementBlock(Fragment,null,renderList(n.images,(e=>(openBlock(),createBlock(u,{key:e},{default:withCtx((()=>[createBaseVNode("img",{src:e.PictureLink,alt:e.remark},null,8,_hoisted_25)])),_:2},1024)))),128))])),_:1})],512)):createCommentVNode("",!0)])}var news=exports("default",_export_sfc(_sfc_main,[["render",_sfc_render],["__scopeId","data-v-38cae3d9"]]))}}}))})();
