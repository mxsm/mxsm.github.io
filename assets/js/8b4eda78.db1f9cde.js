"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[7906],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>s});var a=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=a.createContext({}),u=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(p.Provider,{value:n},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),h=u(t),m=l,s=h["".concat(p,".").concat(m)]||h[m]||d[m]||r;return t?a.createElement(s,i(i({ref:n},c),{},{components:t})):a.createElement(s,i({ref:n},c))}));function s(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,i=new Array(r);i[0]=m;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[h]="string"==typeof e?e:l,i[1]=o;for(var u=2;u<r;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5465:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var a=t(7462),l=(t(7294),t(3905));const r={title:"Netty\u6e90\u7801\u5206\u6790-ChannelHandler\u65b9\u6cd5\u6267\u884c\u987a\u5e8f\u548c\u5982\u4f55\u5de5\u4f5c",linkTitle:"Netty\u6e90\u7801\u5206\u6790-ChannelHandler\u65b9\u6cd5\u6267\u884c\u987a\u5e8f\u548c\u5982\u4f55\u5de5\u4f5c",date:new Date("2022-03-13T00:00:00.000Z"),weight:202203131018},i=void 0,o={unversionedId:"netty/netty-source-code-analysis/netty-source-channelhandler-order",id:"netty/netty-source-code-analysis/netty-source-channelhandler-order",title:"Netty\u6e90\u7801\u5206\u6790-ChannelHandler\u65b9\u6cd5\u6267\u884c\u987a\u5e8f\u548c\u5982\u4f55\u5de5\u4f5c",description:"Netty\u7248\u672c\uff1aNetty\u7248\u672c\uff1anetty-4.1.75.Final",source:"@site/docs/netty/netty-source-code-analysis/netty-source-channelhandler-order.md",sourceDirName:"netty/netty-source-code-analysis",slug:"/netty/netty-source-code-analysis/netty-source-channelhandler-order",permalink:"/docs/netty/netty-source-code-analysis/netty-source-channelhandler-order",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/netty/netty-source-code-analysis/netty-source-channelhandler-order.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1672841610,formattedLastUpdatedAt:"Jan 4, 2023",frontMatter:{title:"Netty\u6e90\u7801\u5206\u6790-ChannelHandler\u65b9\u6cd5\u6267\u884c\u987a\u5e8f\u548c\u5982\u4f55\u5de5\u4f5c",linkTitle:"Netty\u6e90\u7801\u5206\u6790-ChannelHandler\u65b9\u6cd5\u6267\u884c\u987a\u5e8f\u548c\u5982\u4f55\u5de5\u4f5c",date:"2022-03-13T00:00:00.000Z",weight:202203131018},sidebar:"netty",previous:{title:"Netty\u6e90\u7801\u89e3\u6790-ChannelInboundHandler#channelRead\u53c2\u6570Object\u5bf9\u8c61\u5230\u5e95\u662f\u4ec0\u4e48\u7c7b\u578b",permalink:"/docs/netty/netty-source-code-analysis/netty-source-channelRead-object"},next:{title:"Netty\u6e90\u7801\u89e3\u6790-\u7d2f\u52a0\u5668(Cumulator)\u5904\u7406\u7c98\u5305\u534a\u5305\u95ee\u9898",permalink:"/docs/netty/netty-source-code-analysis/netty-source-cumulator"}},p={},u=[{value:"1. \u524d\u8a00",id:"1-\u524d\u8a00",level:3},{value:"2. ChannelHandler\u65b9\u6cd5\u6267\u884c\u987a\u5e8f",id:"2-channelhandler\u65b9\u6cd5\u6267\u884c\u987a\u5e8f",level:3},{value:"2.1 ChannelHandler#handlerAdded",id:"21-channelhandlerhandleradded",level:4},{value:"2.2 ChannelInboundHandler#channelRegistered",id:"22-channelinboundhandlerchannelregistered",level:4},{value:"2.3 ChannelOutboundHandler#bind",id:"23-channeloutboundhandlerbind",level:4},{value:"2.4 ChannelInboundHandler#channelActive",id:"24-channelinboundhandlerchannelactive",level:4},{value:"2.5 ChannelOutboundHandler#read",id:"25-channeloutboundhandlerread",level:4},{value:"2.6 ChannelInboundHandler#channelRead",id:"26-channelinboundhandlerchannelread",level:4},{value:"2.7 ChannelOutboundHandler#write\u548cChannelOutboundHandler#flush",id:"27-channeloutboundhandlerwrite\u548cchanneloutboundhandlerflush",level:4},{value:"2.8 ChannelOutboundHandler#channelInactive\u548cChannelOutboundHandler#channelUnregistered",id:"28-channeloutboundhandlerchannelinactive\u548cchanneloutboundhandlerchannelunregistered",level:4},{value:"2.8 ChannelHandler#handlerRemoved",id:"28-channelhandlerhandlerremoved",level:4},{value:"2.9 ChannelOutboundHandler#connect\u548cChannelOutboundHandler#close",id:"29-channeloutboundhandlerconnect\u548cchanneloutboundhandlerclose",level:4},{value:"3. \u603b\u7ed3",id:"3-\u603b\u7ed3",level:3}],c={toc:u};function h(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Netty\u7248\u672c\uff1aNetty\u7248\u672c\uff1a",(0,l.kt)("a",{parentName:"p",href:"https://github.com/netty/netty/releases/tag/netty-4.1.75.Final"},"netty-4.1.75.Final"))),(0,l.kt)("h3",{id:"1-\u524d\u8a00"},"1. \u524d\u8a00"),(0,l.kt)("p",null,"\u5728\u4e4b\u524d\u7684\u6587\u7ae0\u300a",(0,l.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7074394630678134791/"},"Netty\u7ec4\u4ef6-ChannelHandler(\u56fe\u6587\u5e76\u8302)")," \u300b\u4e2d\u4e86\u89e3\u4e86ChannelHandler\u540c\u65f6\u5bf9\u5176\u4e24\u4e2a\u7ee7\u627f\u63a5\u53e3ChannelInboundHandler\u548cChannelOutboundHandler\u90fd\u6709\u4e86\u4e00\u5b9a\u7684\u4e86\u89e3\uff0c\u4ece\u5982\u4e0b\u51e0\u4e2a\u65b9\u9762\u6765\u5bf9ChannelHandler\u901a\u8fc7\u6e90\u7801\u8fdb\u4e00\u6b65\u89e3\u6790\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/netty/channelhandler/ChannelHandler%E8%A7%A3%E6%9E%90%E7%82%B9.png",alt:"ChannelHandler\u89e3\u6790\u70b9"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Tips: \u4e0a\u56fe\u540e\u9762\u4e24\u4e2a\u5185\u5bb9\u4f1a\u5728\u540e\u7eed\u7684\u6587\u7ae0\u66f4\u65b0")),(0,l.kt)("h3",{id:"2-channelhandler\u65b9\u6cd5\u6267\u884c\u987a\u5e8f"},"2. ChannelHandler\u65b9\u6cd5\u6267\u884c\u987a\u5e8f"),(0,l.kt)("p",null,"ChannelHandler\u65b9\u6cd5\u6267\u884c\u987a\u5e8f\u6267\u884c\u987a\u5e8f\u5176\u5b9e\u8bf4\u7684\u662f\u4e09\u4e2a\u7c7b\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"ChannelHandler\u3001ChannelInboundHandler\u3001ChannelOutboundHandler")," \u8fd9\u4e09\u4e2a\u7c7b\u7684\u65b9\u6cd5\u6267\u884c\u987a\u5e8f\u3002\u901a\u8fc7\u4e00\u4e2a\u7b80\u7b54\u7684Netty\u4f8b\u5b50\u6765\u6253\u5370\u4e00\u4e0b\u6267\u884c\u7684\u987a\u5e8f\u3002\u4ee3\u7801\u6bd4\u8f83\u591a\u8fd9\u91cc\u5c31\u4e0d\u76f4\u63a5\u7c98\u8d34\u51fa\u6765\u4e86\uff0c\u5df2\u7ecf\u4e0a\u4f20\u5230github\u4ed3\u5e93\uff0c\u53ef\u4ee5\u4e0b\u8f7d\u5230\u672c\u5730\u8fd0\u884c\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/netty/channelhandler/image-20220313142535666.png",alt:"image-20220313142535666"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u4ee3\u7801github\u5730\u5740\uff1a",(0,l.kt)("a",{parentName:"p",href:"https://github.com/mxsm/spring-sample/tree/master/java-sample/src/main/java/com/github/mxsm/netty/channelhandler"},"https://github.com/mxsm/spring-sample/tree/master/java-sample/src/main/java/com/github/mxsm/netty/channelhandler"))),(0,l.kt)("p",null,"\u8fd0\u884c\u7ed3\u679c\u5206\u4e3a\u4e24\u4e2a\u90e8\u5206\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u670d\u52a1\u7aef\u7ed3\u679c"),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/netty/channelhandler/image-20220313143016219.png",alt:"image-20220313143016219"}))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5ba2\u6237\u7aef\u7ed3\u679c"),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/netty/channelhandler/image-20220313143110607.png",alt:"image-20220313143110607"})))),(0,l.kt)("p",null,"\u63a5\u4e0b\u6765\u5bf9\u8fd0\u884c\u7ed3\u679c\u7ed3\u5408\u6e90\u7801\u8fdb\u884c\u5206\u6790\u3002\u5ba2\u6237\u7aef\u548c\u670d\u52a1\u5668\u7aefChannelHandler\u7684\u6267\u884c\u5927\u90e8\u5206\u76f8\u540c\uff0c\u53ea\u6709\u7ec6\u5c0f\u51fa\u7684\u533a\u522b\u3002\u6211\u4eec\u4f1a\u5728\u6709\u533a\u522b\u7684\u5730\u65b9\u8fdb\u884c\u8bf4\u660e"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Tips: \u670d\u52a1\u7aef\u7ebf\u7a0b\u6a21\u578b\u662f\u4e3b\u4ece\u6a21\u578b\uff0c\u6240\u4ee5\u6211\u4eec\u4f1a\u5206\u522b\u5206\u6790Boss\u7ebf\u7a0b\u4e2d\u7684ChannelHandler\u4ee5\u53caWork\u7ebf\u7a0b\u4e2d\u7684ChannelHandler\u3002")),(0,l.kt)("p",null,"\u5927\u81f4\u6d41\u7a0b\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/netty/channelhandler/ChannelHandler%E6%96%B9%E6%B3%95%E6%89%A7%E8%A1%8C%E5%88%86%E6%9E%90%E6%B5%81%E7%A8%8B.png",alt:"ChannelHandler\u65b9\u6cd5\u6267\u884c\u5206\u6790\u6d41\u7a0b"})),(0,l.kt)("p",null,"\u4e0b\u9762\u5206\u6790\u5982\u679c\u6ca1\u6709\u7279\u522b\u8bf4\u660e\u90fd\u662f\u4ee5\u670d\u52a1\u7aef\u4e3a\u4f8b\u8fdb\u884c\u6e90\u7801\u5206\u6790\u3002"),(0,l.kt)("h4",{id:"21-channelhandlerhandleradded"},"2.1 ChannelHandler#handlerAdded"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/netty/channelhandler/image-20220313144554334.png",alt:"image-20220313144554334"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Tips\uff1a\u4ee3\u7801\u5730\u5740",(0,l.kt)("a",{parentName:"p",href:"https://github.com/mxsm/spring-sample/blob/master/java-sample/src/main/java/com/github/mxsm/netty/channelhandler/DiscardServer.java"},"https://github.com/mxsm/spring-sample/blob/master/java-sample/src/main/java/com/github/mxsm/netty/channelhandler/DiscardServer.java"))),(0,l.kt)("p",null,"\u4e3b\u8981\u5173\u6ce8\u4e0a\u56fe\u7ea2\u6846\u90e8\u5206\u7684\u4ee3\u7801\uff0c\u901a\u8fc7\u8ddf\u8fdb\u4ee3\u7801\u4f1a\u53d1\u73b0 ",(0,l.kt)("inlineCode",{parentName:"p"},"ServerBootstrap")," \u521b\u5efa\u540e\u4f1a\u521b\u5efa\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"NioServerSocketChannel")," \u5b9e\u4f8b\uff0c\u7136\u540e\u8c03\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"ServerBootstrap#init")," \u65b9\u6cd5\u8fdb\u884c\u521d\u59cb\u5316\uff0c\u5982\u4e0b\u56fe\u6240\u793a\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/netty/channelhandler/image-20220313145719703.png",alt:"image-20220313145719703"})),(0,l.kt)("p",null,"\u5982\u4e0a\u56fe\u4ee3\u7801\u6240\u793a\uff0c\u6211\u8fd9\u8fb9\u628a\u8fd9\u91cc\u5708\u6210\u4e86\u4e09\u4e2a\u90e8\u5206\uff1a"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Tips: ChannelInitializer\u5176\u5b9e\u5c31\u662f\u4e00\u4e2aChannelInboundHandlerAdapter")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"NioServerSocketChannel\u7684\u5b9e\u4f8b\u7684ChannelPipeline\u4e2d\u6dfb\u52a0ChannelInitializer\uff0c\u90a3\u4e48",(0,l.kt)("strong",{parentName:"p"},"ChannelInitializer#initChannel")," \u4ec0\u4e48\u65f6\u5019\u89e6\u53d1\uff0c\u5982\u4e0b\u4ee3\u7801\uff1a"),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/netty/channelhandler/image-20220313150218471.png",alt:"image-20220313150218471"})),(0,l.kt)("p",{parentName:"li"},"\u5728\u89e6\u53d1 ",(0,l.kt)("inlineCode",{parentName:"p"},"channelRegistered")," \u65b9\u6cd5\u540e\u8c03\u7528\u4e86 ",(0,l.kt)("strong",{parentName:"p"},"ChannelInitializer#initChannel")," \u8fd9\u4e2a\u79c1\u6709\u65b9\u6cd5\uff0c\u79c1\u6709\u65b9\u6cd5\u53c8\u8c03\u7528\u4e86 ",(0,l.kt)("strong",{parentName:"p"},"ChannelInitializer#initChannel"),"  \u62bd\u8c61\u65b9\u6cd5\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"NioServerSocketChannel\u7684\u5b9e\u4f8b\u7684ChannelPipeline\u6dfb\u52a0",(0,l.kt)("strong",{parentName:"p"},"ServerBootstrap#handler"),"\u65b9\u6cd5\u8bbe\u7f6e\u7684ChannelHandler\u3002\u5bf9\u5e94\u4e0a\u9762\u7684\u4f8b\u5b50\u5c31\u662f\u8fd9\u6bb5\u4ee3\u7801\u91cc\u9762\u7684ChannelHandler\uff0c\u5982\u4e0b\u56fe\u6807\u53f71\u4f4d\u7f6e\u6240\u793a\uff1a"),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/netty/channelhandler/image-20220313150751020.png",alt:"image-20220313150751020"}))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5c06\u6570\u636e\u5904\u7406\u4ea4\u7ed9Worker\u7ebf\u7a0b\uff0c\u4e5f\u662f\u901a\u8fc7\u8fd9\u4e2a\u5730\u65b9\u8fdb\u884c\u7684\u3002(\u540e\u7eed\u4f1a\u4e13\u95e8\u5199\u4e00\u7bc7\u6587\u7ae0\u6765\u8bf4\u4e3b\u8d1f\u7ebf\u7a0b\u5982\u4f55\u914d\u5408\u5de5\u4f5c)"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u603b\u7ed3\uff1a\u4ece\u4e0a\u9762\u7684\u5206\u6790\u53ef\u4ee5\u770b\u51fa\u6765ChannelHandler#handlerAdded\u65b9\u6cd5\u7684\u89e6\u53d1\uff0c\u4e3b\u8981\u662f\u901a\u8fc7ChannelPipeline\u7684add\u7c7b\u578b\u65b9\u6cd5\u6765\u89e6\u53d1\uff0c\u5e95\u5c42\u662f\u901a\u8fc7AbstractChannelHandlerContext#callHandlerAdded\u8c03\u7528\u6765\u5b9e\u73b0\u3002")),(0,l.kt)("h4",{id:"22-channelinboundhandlerchannelregistered"},"2.2 ChannelInboundHandler#channelRegistered"),(0,l.kt)("p",null,"\u5728\u8c03\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"ServerBootstrap#bind"),"\u65b9\u6cd5\u5f53\u4e2d\uff0cServerSocketChannel\u521d\u59cb\u5316\u540e\uff0c\u5c06ServerSocketChannel\u6ce8\u518c\u5230BossGroup\u4e0a\uff0c\u5982\u4e0b\u56fe\u6240\u793a\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/netty/channelhandler/image-20220313152322696.png",alt:"image-20220313152322696"})),(0,l.kt)("p",null,"\u4e0a\u56fe\u6807\u53f71\u6240\u793a\u4f4d\u7f6e\u5c31\u662f\u5c06ServerSocketChannel\u6ce8\u518c\u5230BossGroup\u3002\u8ddf\u8fdb\u4ee3\u7801\u6700\u7ec8\u8c03\u7528\u7684\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"AbstractChannel#register0")," \u65b9\u6cd5\uff0c\u5982\u4e0b\u56fe\u6240\u793a\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/netty/channelhandler/image-20220313152757422.png",alt:"image-20220313152757422"})),(0,l.kt)("p",null,"\u5982\u4e0a\u56fe\u6807\u53f72\u4f4d\u7f6e\u5c31\u662f\u89e6\u53d1",(0,l.kt)("inlineCode",{parentName:"p"},"ChannelInboundHandler#channelRegistered"),"\u65b9\u6cd5\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u603b\u7ed3\uff1aChannelInboundHandler#channelRegistered\u65b9\u6cd5\u89e6\u53d1\u662f\u5728\u5f80EventLoopGroup\u4e2d\u6dfb\u52a0Channel\u7684\u65f6\u5019\u89e6\u53d1")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Tips: \u4e0a\u9762\u8bf4\u7684\u90fd\u662f\u89e6\u53d1NioServerSocketChannel\u5b9e\u4f8b\u4e2d\u7684ChannelHandler\uff0c\u4e5f\u5c31\u662fBossGroup\u4e2d\u3002workGroup\u4e2d\u7684ChannelHandler\u89e6\u53d1\u5728\u54ea\u91cc\u89e6\u53d1\u5462\uff1f\u4e4b\u524dChannelHandler#handlerAdded\u7ae0\u8282\u5206\u6790\u56fe\u4e2d\u6709\u4e2a\u6807\u53f73\u7684\u4f4d\u7f6e\u4e2d\u7684\u4ee3\u7801\u5c31\u662f\u89e6\u53d1childHandler\u7684channelRegistered\u65b9\u6cd5\u7684\uff1a"),(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/netty/channelhandler/image-20220313153504750.png",alt:"image-20220313153504750"}))),(0,l.kt)("h4",{id:"23-channeloutboundhandlerbind"},"2.3 ChannelOutboundHandler#bind"),(0,l.kt)("p",null,"\u5f53NioServerSocketChannel\u521b\u5efa\u3001\u521d\u59cb\u5316\u3001\u6ce8\u518c\u5230EventLoopGroup\u5b8c\u6210\u540e\uff0c\u63a5\u4e0b\u6765\u5c31\u8fdb\u884c\u7ed1\u5b9a\uff0c\u4e0e\u672c\u5730\u7aef\u53e3\u8fdb\u884c\u7ed1\u5b9a\u4ee5\u4fbf\u63a5\u6536\u6570\u636e,\u7ed1\u5b9a\u7684\u5de5\u4f5c\u901a\u8fc7\u4ee3\u7801\u5206\u6790\u53d1\u73b0\u6700\u540e\u8c03\u7528\u7684\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"AbstractBootstrap#doBind0")," \u65b9\u6cd5\uff0c\u5982\u4e0b\u56fe\u6240\u793a\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/netty/channelhandler/image-20220313154352156.png",alt:"image-20220313154352156"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Tips: \u8fd9\u4e2a\u5730\u65b9\u7684channel\u53d8\u91cf\u5176\u5b9e\u5c31\u662fNioServerSocketChannel\u7684\u5b9e\u4f8b\u3002")),(0,l.kt)("p",null,"\u901a\u8fc7\u8ddf\u8fdbbind\u65b9\u6cd5\u7684\u4ee3\u7801\u53ef\u4ee5\u53d1\u73b0\u6700\u7ec8\u8c03\u7528\u7684\u662f ",(0,l.kt)("strong",{parentName:"p"},"AbstractChannelHandlerContext#invokeBind")," "),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/netty/channelhandler/image-20220313154614406.png",alt:"image-20220313154614406"})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u603b\u7ed3\uff1aChannelOutboundHandler#bind\u8c03\u7528\u662f\u670d\u52a1\u7aef\u7684Channel\u7ed1\u5b9a\u672c\u5730\u5730\u5740\u89e6\u53d1\uff0c\u5982NioServerSocketChannel\u7ed1\u5b9a\u672c\u5730\u5730\u5740\u7aef\u53e3\u51c6\u5907\u63a5\u53d7\u5ba2\u6237\u7aef\u6570\u636e ")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Tips: ChannelOutboundHandler#bind\u662fBossGroup\u7684Channel\u6240\u7279\u6709\uff0c\u5728childHandler\u4e2d\u4e0d\u4f1a\u6267\u884c\u3002")),(0,l.kt)("h4",{id:"24-channelinboundhandlerchannelactive"},"2.4 ChannelInboundHandler#channelActive"),(0,l.kt)("p",null,"ChannelInboundHandler#channelActive\u7684\u89e6\u53d1\u9700\u8981\u5206\u4e24\u79cd\u60c5\u51b5\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"BossGroup\u4e2d\u7684ServerSocketChannel\u89e6\u53d1"),(0,l.kt)("li",{parentName:"ol"},"WorkerGroup\u4e2d\u7684SocketChannel\u89e6\u53d1")),(0,l.kt)("p",null,"\u9996\u5148\u770b\u4e00\u4e0bBossGroup\u4e2d\u7684ServerSocketChannel\u89e6\u53d1\u4e2d\u7684\u89e6\u53d1\uff0c\u5728\u6267\u884c",(0,l.kt)("inlineCode",{parentName:"p"},"NioServerSocketChannel#bind")," \uff0c\u89e6\u53d1\u4e86\u81ea\u5b9a\u4e49\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"TimeServerBossOutHandler#bind"),"\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/netty/channelhandler/image-20220313202937928.png",alt:"image-20220313202937928"})),(0,l.kt)("p",null,"\u4e0a\u56fe\u6807\u53f71\u53c8\u8c03\u7528\u4e86\u7236\u7c7b\u7684bind\u65b9\u6cd5\uff0c\u6700\u7ec8\u8c03\u7528\u4e86",(0,l.kt)("inlineCode",{parentName:"p"},"AbstractChannel.AbstractUnsafe#bind"),"\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/netty/channelhandler/image-20220313203458047.png",alt:"image-20220313203458047"})),(0,l.kt)("p",null,"\u4e0a\u56fe1\u4f4d\u7f6e\u5c31\u662f\u89e6\u53d1ChannelInboundHandler#channelActive\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Tips: TimeServerBossOutHandler#bind\u4ee3\u7801\u4e2d\u53bb\u6389 ",(0,l.kt)("inlineCode",{parentName:"p"},"super.bind(ctx, localAddress, promise);")," \u8fd9\u6bb5\u4ee3\u7801\uff0c\u4f60\u7528\u5ba2\u6237\u7aef\u94fe\u63a5\u53d1\u73b0\u8fde\u4e0d\u4e0a\u3002\u8fd9\u5c31\u662f\u56e0\u4e3aNioServerSocketChannel\u6ca1\u6709\u7ed1\u5b9a\u3002")),(0,l.kt)("p",null,"WorkerGroup\u4e2d\u7684SocketChannel\u89e6\u53d1\u5982\u4f55\u89e6\u53d1\uff1f\u670d\u52a1\u7aef\u63a5\u6536\u5230\u8fde\u63a5\u8bf7\u6c42\u5904\u7406\u7531BossGroup\u5904\u7406\uff0c\u8bfb\u5199\u64cd\u4f5c\u662f\u7531WorkGroup\u5904\u7406\uff0c\u90a3\u4e48\u8fd9\u4e2a\u8f6c\u6362\u5c31\u662f\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"ServerBootstrap#init")," \u65b9\u6cd5\u4e2d\u5b8c\u6210,\u5982\u4e0b\u56fe\u4ee3\u7801\u6240\u793a\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/netty/channelhandler/image-20220313205348929.png",alt:"image-20220313205348929"})),(0,l.kt)("p",null,"\u4e0a\u56fe\u6846\u51fa\u6765\u7684\u4ee3\u7801 ",(0,l.kt)("inlineCode",{parentName:"p"},"ServerBootstrapAcceptor")," \u5176\u5b9e\u4e5f\u662f\u4e00\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"ChannelInboundHandler")," \uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/netty/channelhandler/image-20220313205548252.png",alt:"image-20220313205548252"})),(0,l.kt)("p",null,"\u4e0a\u56fe\u6846\u51fa\u6765\u7684\u5c31\u662f\u5f80WorkGroup\u4e2d\u6ce8\u518cChannel\u3002\u6240\u6709\u8fd9\u91cc\u4f1a\u89e6\u53d1 ",(0,l.kt)("strong",{parentName:"p"},"ChannelInboundHandler#channelRegistered")," \u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Tips: BossGroup\u6ce8\u518cNioServerSocketChannel\u548cWorkGroup\u6ce8\u518cSocketChannel\u4e24\u8005\u89e6\u53d1",(0,l.kt)("strong",{parentName:"p"},"ChannelInboundHandler#channelRegistered")," \u7684\u903b\u8f91\u6ca1\u6709\u533a\u522b\u3002")),(0,l.kt)("p",null,"\u6ce8\u518c\u6700\u7ec8\u4e5f\u662f\u8c03\u7528\u4e86",(0,l.kt)("inlineCode",{parentName:"p"},"AbstractChannel.AbstractUnsafe#register0")," :"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/netty/channelhandler/image-20220313210108887.png",alt:"image-20220313210108887"})),(0,l.kt)("p",null," BossGroup\u6ce8\u518cNioServerSocketChannel\u548cWorkGroup\u6ce8\u518cNioSocketChannel\u533a\u522b\u5728\u4e8e\u4e0a\u56fe\u6807\u53f71\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"isActive()")," \u65b9\u6cd5\uff0c\u8fd9\u4e2a\u65b9\u6cd5\u662f\u4e00\u4e2a\u62bd\u8c61\u65b9\u6cd5\u3002\u6839\u636e\u4e0d\u540c\u7684\u7c7b\u4f3c\u5b9e\u73b0\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"NioServerSocketChannel\u5b9e\u73b0isActive()"),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/netty/channelhandler/image-20220313210426171.png",alt:"image-20220313210426171"}))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"NioSocketChannel\u5b9e\u73b0isActive()"),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/netty/channelhandler/image-20220313210603668.png",alt:"image-20220313210603668"})))),(0,l.kt)("p",null,"\u6240\u4ee5\u4f1a\u8fdb\u5165if\u6761\u4ef6\u8bed\u53e5\u4e2d\uff0c\u52a0\u4e0a\u53c8\u662f\u7b2c\u4e00\u6b21\u6ce8\u518c\uff0c\u6700\u7ec8\u4f1a\u89e6\u53d1\u6807\u53f7\u4e3a2\u7684\u65b9\u6cd5\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u603b\u7ed3\uff1aNioServerSocketChannel\u548cNioSocketChannel\u89e6\u53d1ChannelInboundHandler#channelActive\u4e0d\u4e00\u6837\uff0c\u4f46\u662f\u90fd\u662f\u5f53Channel\u53ef\u7528\u7684\u65f6\u5019\u89e6\u53d1")),(0,l.kt)("h4",{id:"25-channeloutboundhandlerread"},"2.5 ChannelOutboundHandler#read"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"AbstractChannelHandlerContext#invokeChannelActive"),"\u65b9\u6cd5\u4e3b\u8981\u89e6\u53d1channelActive\u5982\u4e0b\u56fe\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/netty/channelhandler/image-20220313213615164.png",alt:"image-20220313213615164"})),(0,l.kt)("p",null,"\u7136\u540e\u901a\u8fc7\u8c03\u7528AbstractChannelHandlerContext#invokeChannelActive\u65b9\u6cd5\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/netty/channelhandler/image-20220313214123319.png",alt:"image-20220313214123319"})),(0,l.kt)("p",null,"\u901a\u8fc7\u4e0a\u56fe\u53ef\u4ee5\u77e5\u9053\u6700\u7ec8\u8c03\u7528\u7684\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"DefaultChannelPipeline.HeadContext#channelActive"),"\u65b9\u6cd5"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/netty/channelhandler/image-20220313214354015.png",alt:"image-20220313214354015"})),(0,l.kt)("p",null,"\u7136\u540e\u8c03\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"DefaultChannelPipeline.HeadContext#readIfIsAutoRead")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/netty/channelhandler/image-20220313214604152.png",alt:"image-20220313214604152"})),(0,l.kt)("p",null,"\u7136\u540e\u8c03\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"AbstractChannel#read"),"\u65b9\u6cd5\uff0c\u8fd9\u4e2a\u65b9\u6cd5\u4e2d\u8c03\u7528\u4e86",(0,l.kt)("inlineCode",{parentName:"p"},"ChannelPipeline#read")," \u65b9\u6cd5\u89e6\u53d1ChannelOutboundHandler#read\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u603b\u7ed3\uff1aChannelOutboundHandler#read\u7684\u89e6\u53d1\u90fd\u662f\u5728ChannelInboundHandler#channelActive\uff0c\u901a\u8fc7DefaultChannelPipeline.HeadContext#readIfIsAutoRead\u65b9\u6cd5\u5b9e\u73b0\u3002")),(0,l.kt)("h4",{id:"26-channelinboundhandlerchannelread"},"2.6 ChannelInboundHandler#channelRead"),(0,l.kt)("p",null,"ServerSocketChannel\u8fd8\u662fSocketChannel\u90fd\u662f\u901a\u8fc7NioEventLoop#processSelectedKey\u65b9\u6cd5\u4e2d\u4e00\u4e0b\u4ee3\u7801\u89e6\u53d1unsafe.read()\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/netty/channelhandler/image-20220319090947767.png",alt:"image-20220319090947767"})),(0,l.kt)("p",null,"\u8fd9\u91cc\u6839\u636eServerSocketChannel\u8fd8\u662fSocketChannel\u6267\u884c\u4e0d\u540c\u7684Unsafe\u5b9e\u73b0\u3002"),(0,l.kt)("p",null,"ServerSocketChannel\u4e5f\u5c31\u662fBossGroup\u6267\u884c\u7684\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"AbstractNioMessageChannel.NioMessageUnsafe#read")," \u65b9\u6cd5\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/netty/channelhandler/image-20220319091352613.png",alt:"image-20220319091352613"})),(0,l.kt)("p",null,"\u6807\u53f71\u89e6\u53d1ChannelInboundHandler#channelRead\uff0c\u6807\u53f72\u89e6\u53d1ChannelInboundHandler#channelReadComplete\u3002"),(0,l.kt)("p",null,"SocketChannel\u4e5f\u5c31\u662fworkGroup\u6267\u884c\u7684\u662fAbstractNioByteChannel.NioByteUnsafe#read\u65b9\u6cd5\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/netty/channelhandler/image-20220319093237906.png",alt:"image-20220319093237906"})),(0,l.kt)("p",null,"\u4e0a\u56fe\u7684\u6807\u53f71,2\u5206\u522b\u89e6\u53d1ChannelInboundHandler#channelRead\u548cChannelInboundHandler#channelReadComplete\u3002"),(0,l.kt)("p",null,"\u5728workGroup\u4e2d\u8fd8\u6709\u8fd9\u6837\u4e24\u4e2a\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"TimeServerOutHandler--write\nTimeServerOutHandler--flush\n")),(0,l.kt)("p",null,"\u90a3\u53ea\u662f\u4e3a\u4ec0\u4e48? \u8fd9\u4e2a\u662f\u56e0\u4e3a\u5728TimeServerInHandler\u4e2d\u8c03\u7528\u4e86\u5982\u4e0b\u65b9\u6cd5\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/netty/channelhandler/image-20220319093647383.png",alt:"image-20220319093647383"})),(0,l.kt)("p",null,"\u4e0b\u9762\u5c31\u4e0b\u6765\u5206\u6790"),(0,l.kt)("h4",{id:"27-channeloutboundhandlerwrite\u548cchanneloutboundhandlerflush"},"2.7 ChannelOutboundHandler#write\u548cChannelOutboundHandler#flush"),(0,l.kt)("p",null,"\u901a\u8fc7\u4e0a\u9762\u77e5\u9053\u8981\u60f3\u89e6\u53d1ChannelOutboundHandler#write\u548cChannelOutboundHandler#flush\u9700\u8981\u8c03\u7528ChannelHandlerContext#writeAndFlush,\u901a\u8fc7\u4ee3\u7801\u7814\u7a76\u53d1\u73b0\u6700\u7ec8\u8c03\u7528\u7684\u662fAbstractChannelHandlerContext#write\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/netty/channelhandler/image-20220319095241942.png",alt:"image-20220319095241942"})),(0,l.kt)("p",null,"\u6807\u53f71\u67e5\u627e\u5230ChannelOutboundHandler\uff0c\u7136\u540e\u6267\u884c2\uff0c\u6267\u884cChannelOutboundHandler#write\u6216\u8005ChannelOutboundHandler#write\u548cChannelOutboundHandler#flush\u3002"),(0,l.kt)("h4",{id:"28-channeloutboundhandlerchannelinactive\u548cchanneloutboundhandlerchannelunregistered"},"2.8 ChannelOutboundHandler#channelInactive\u548cChannelOutboundHandler#channelUnregistered"),(0,l.kt)("p",null,"\u5f53\u5ba2\u6237\u7aef\u5173\u95ed\u670d\u52a1\u7aef\u8c03\u7528\u5230\u5982\u4e0b\u7684\u4ee3\u7801AbstractNioByteChannel#read\u65b9\u6cd5\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/netty/channelhandler/image-20220319160330612.png",alt:"image-20220319160330612"})),(0,l.kt)("p",null,"\u6700\u7ec8\u4f1a\u8c03\u7528\u6807\u53f72\u7684\u4f4d\u7f6e\uff0c\u7136\u540e\u8c03\u7528AbstractNioByteChannel.NioByteUnsafe#closeOnRead\u65b9\u6cd5\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/netty/channelhandler/image-20220319160515607.png",alt:"image-20220319160515607"})),(0,l.kt)("p",null,"\u8ddf\u8fdb\u4ee3\u7801\u53d1\u73b0\u6700\u7ec8\u8c03\u7528\u4e86AbstractChannel.AbstractUnsafe#deregister\u65b9\u6cd5\u3002\u5728\u8fd9\u4e2a\u65b9\u6cd5\u4e2d\u6709\u8c03\u7528\u5982\u4e0b\u4ee3\u7801\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/netty/channelhandler/image-20220319161139680.png",alt:"image-20220319161139680"})),(0,l.kt)("p",null,"\u8fd9\u91cc\u5c31\u89e6\u53d1\u4e86ChannelOutboundHandler#channelInactive\u548cChannelOutboundHandler#channelUnregistered\u3002"),(0,l.kt)("h4",{id:"28-channelhandlerhandlerremoved"},"2.8 ChannelHandler#handlerRemoved"),(0,l.kt)("p",null,"\u4e0a\u56fe\u6807\u53f72\u8c03\u7528\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"pipeline.fireChannelUnregistered();")," \u65b9\u6cd5\uff0c\u6700\u7ec8\u662f\u8c03\u7528\u4e86",(0,l.kt)("inlineCode",{parentName:"p"},"DefaultChannelPipeline.HeadContext#channelUnregistered")," \u65b9\u6cd5\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/netty/channelhandler/image-20220319162739667.png",alt:"image-20220319162739667"})),(0,l.kt)("p",null,"\u4e0a\u56fe\u6807\u53f71\u7684\u4f4d\u7f6e\u5c31\u662f\u89e6\u53d1ChannelHandler#handlerRemoved\u3002\u5c06\u5f53\u524dChannel\u7684ChannelHandler\u79fb\u9664\u4eceEventLoop\u4e0a\u9762\u3002"),(0,l.kt)("h4",{id:"29-channeloutboundhandlerconnect\u548cchanneloutboundhandlerclose"},"2.9 ChannelOutboundHandler#connect\u548cChannelOutboundHandler#close"),(0,l.kt)("p",null,"\u8fd9\u4e24\u4e2a\u90fd\u53d1\u751f\u5728\u5ba2\u6237\u7aef\uff0c\u6574\u4f53\u7684\u89e6\u53d1\u673a\u5236\u548c\u4e0a\u9762\u8bf4\u7684\u5927\u4f53\u76f8\u540c\uff0c\u5927\u5bb6\u53ef\u4ee5\u81ea\u5df1\u53bb\u8fdb\u884c\u5206\u6790\u3002"),(0,l.kt)("h3",{id:"3-\u603b\u7ed3"},"3. \u603b\u7ed3"),(0,l.kt)("p",null,"Netty\u7684ChannelHandler\u7684\u6574\u4f53\u89e6\u53d1\u6d41\u7a0b\u5982\u4e0a\u9762\u6240\u8ff0\u3002\u5176\u4e2d\u6ca1\u6709\u6d89\u53ca\u5230\u9519\u8bef\u6355\u6349\u7684\u89e6\u53d1\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"ChannelPipeline\u7684\u53cc\u5411\u94fe\u8868\u4e2d\u7684HeadContext\u548cTailContext\u90fd\u662fChannelHandler\uff0c\u540c\u65f6\u7ee7\u627f\u4e86AbstractChannelHandlerContext\uff0c\u4e5f\u53ef\u4ee5\u8bf4\u662fChannelHandlerContext\u3002"),(0,l.kt)("li",{parentName:"ul"},"ChannelHander\u6dfb\u52a0\u5230\u961f\u5217\u4e2d\uff0c\u4f1a\u88ab\u5305\u88c5\u6210ChannelHandlerContext")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Tips: \u6211\u662f\u8682\u8681\u80cc\u5927\u8c61\uff0c\u6587\u7ae0\u5bf9\u4f60\u6709\u5e2e\u52a9\u70b9\u8d5e\u5173\u6ce8\u6211\uff0c\u6587\u7ae0\u6709\u4e0d\u6b63\u786e\u7684\u5730\u65b9\u8bf7\u60a8\u65a7\u6b63\u7559\u8a00\u8bc4\u8bba~\u8c22\u8c22")))}h.isMDXComponent=!0}}]);