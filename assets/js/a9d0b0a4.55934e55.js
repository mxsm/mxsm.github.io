"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[6110],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>N});var a=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=a.createContext({}),d=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},m=function(e){var n=d(e.components);return a.createElement(o.Provider,{value:n},e.children)},k="mdxType",h={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},C=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),k=d(t),C=l,N=k["".concat(o,".").concat(C)]||k[C]||h[C]||r;return t?a.createElement(N,p(p({ref:n},m),{},{components:t})):a.createElement(N,p({ref:n},m))}));function N(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,p=new Array(r);p[0]=C;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i[k]="string"==typeof e?e:l,p[1]=i;for(var d=2;d<r;d++)p[d]=t[d];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}C.displayName="MDXCreateElement"},5824:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>p,default:()=>k,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var a=t(7462),l=(t(7294),t(3905));const r={title:"Netty-ChannelHandler\u7ec4\u4ef6",date:new Date("2018-09-15T00:00:00.000Z")},p=void 0,i={unversionedId:"netty/netty-introduction/Netty-ChannelHandler",id:"netty/netty-introduction/Netty-ChannelHandler",title:"Netty-ChannelHandler\u7ec4\u4ef6",description:"Channel\u7684\u751f\u547d\u5468\u671f",source:"@site/docs/netty/netty-introduction/Netty-ChannelHandler.md",sourceDirName:"netty/netty-introduction",slug:"/netty/netty-introduction/Netty-ChannelHandler",permalink:"/docs/netty/netty-introduction/Netty-ChannelHandler",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/netty/netty-introduction/Netty-ChannelHandler.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1674227439,formattedLastUpdatedAt:"Jan 20, 2023",frontMatter:{title:"Netty-ChannelHandler\u7ec4\u4ef6",date:"2018-09-15T00:00:00.000Z"},sidebar:"netty",previous:{title:"Netty\u56db\u5927\u7ec4\u4ef6\u4e4bByteBuf",permalink:"/docs/netty/netty-introduction/Netty-ByteBuf"},next:{title:"Netty-EventLoop",permalink:"/docs/netty/netty-introduction/Netty-EventLoop"}},o={},d=[{value:"Channel\u7684\u751f\u547d\u5468\u671f",id:"channel\u7684\u751f\u547d\u5468\u671f",level:3},{value:"ChannelHandler\u7684\u751f\u547d\u5468\u671f",id:"channelhandler\u7684\u751f\u547d\u5468\u671f",level:3},{value:"ChannelInboundHandler \u63a5\u53e3",id:"channelinboundhandler-\u63a5\u53e3",level:4},{value:"ChannelOutboundHandler \u63a5\u53e3",id:"channeloutboundhandler-\u63a5\u53e3",level:4},{value:"ChannelHandler\u7684\u9002\u914d\u5668",id:"channelhandler\u7684\u9002\u914d\u5668",level:4},{value:"\u8d44\u6e90\u7ba1\u7406",id:"\u8d44\u6e90\u7ba1\u7406",level:4},{value:"ChannelPipeline \u63a5\u53e3",id:"channelpipeline-\u63a5\u53e3",level:3},{value:"\u4fee\u6539ChannelPipeline",id:"\u4fee\u6539channelpipeline",level:4},{value:"\u4e8b\u4ef6\u89e6\u53d1",id:"\u4e8b\u4ef6\u89e6\u53d1",level:4},{value:"ChannelHandlerContext \u63a5\u53e3",id:"channelhandlercontext-\u63a5\u53e3",level:3},{value:"\u603b\u7ed3\uff1a",id:"\u603b\u7ed3",level:3}],m={toc:d};function k(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"channel\u7684\u751f\u547d\u5468\u671f"},"Channel\u7684\u751f\u547d\u5468\u671f"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u72b6\u6001"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ChannelUnregistered"),(0,l.kt)("td",{parentName:"tr",align:null},"Channel \u5df2\u7ecf\u88ab\u521b\u5efa\uff0c\u4f46\u8fd8\u672a\u6ce8\u518c\u5230 EventLoop")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ChannelRegistered"),(0,l.kt)("td",{parentName:"tr",align:null},"Channel \u5df2\u7ecf\u88ab\u6ce8\u518c\u5230\u4e86 EventLoop")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ChannelActive"),(0,l.kt)("td",{parentName:"tr",align:null},"Channel \u5904\u4e8e\u6d3b\u52a8\u72b6\u6001(\u5df2\u7ecf\u8fde\u63a5\u5230\u5b83\u7684\u8fdc\u7a0b\u8282\u70b9)\u3002\u5b83\u73b0\u5728\u53ef\u4ee5\u63a5\u6536\u548c\u53d1\u9001\u6570\u636e\u4e86")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ChannelInactive"),(0,l.kt)("td",{parentName:"tr",align:null},"Channel\u6ca1\u6709\u8fde\u63a5\u5230\u8fdc\u7a0b\u8282\u70b9")))),(0,l.kt)("p",null,"\u5f53\u8fd9\u4e9b\u72b6\u6001\u53d1\u751f\u6539\u53d8\u7684\u65f6\u5019\uff0c\u5c06\u4f1a\u751f\u6210\u5bf9\u5e94\u7684\u4e8b\u4ef6\u3002\u8fd9\u4e9b\u4e8b\u4ef6\u4f1a\u88ab\u8f6c\u53d1\u7ed9 ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"ChannelPipeline")),"  \u4e2d\u7684  ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"ChannelHandler")),"  \u5176\u53ef\u4ee5\u968f\u540e\u5bf9\u4ed6\u4eec\u505a\u51fa\u54cd\u5e94\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://github.com/mxsm/document/blob/master/image/netty/channel%E4%BA%8B%E4%BB%B6%E7%9A%84%E5%8F%98%E5%8C%96.jpg?raw=true",alt:"\u56fe\u89e3"})),(0,l.kt)("h3",{id:"channelhandler\u7684\u751f\u547d\u5468\u671f"},"ChannelHandler\u7684\u751f\u547d\u5468\u671f"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"handlerAdded"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53\u628a ChannelHandler \u6dfb\u52a0\u5230 ChannelPipeline \u4e2d\u65f6\u88ab\u8c03\u7528")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"handlerRemoved"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53\u4ece ChannelPipeline \u4e2d\u79fb\u9664 ChannelHandler \u65f6\u88ab\u8c03\u7528")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"exceptionCaught"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53\u5904\u7406\u8fc7\u7a0b\u4e2d\u5728 ChannelPipeline \u4e2d\u6709\u9519\u8bef\u4ea7\u751f\u65f6\u88ab\u8c03\u7528")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Netty"))," \u5b9a\u4e49\u4e86\u4e0b\u9762\u4e24\u4e2a\u91cd\u8981\u7684 ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"ChannelHandler")),"  \u5b50\u63a5\u53e3\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"ChannelInboundHandler")," \u2014 \u5904\u7406 ",(0,l.kt)("strong",{parentName:"li"},"\u5165\u7ad9")," \u6570\u636e\u4ee5\u53ca\u5404\u79cd\u72b6\u6001\u53d8\u5316"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"ChannelOutboundHandler")," \u2014 \u5904\u7406 ",(0,l.kt)("strong",{parentName:"li"},"\u51fa\u7ad9")," \u6570\u636e\u5e76\u4e14\u5141\u8bb8\u62e6\u622a\u6240\u6709\u7684\u64cd\u4f5c")),(0,l.kt)("h4",{id:"channelinboundhandler-\u63a5\u53e3"},"ChannelInboundHandler \u63a5\u53e3"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"channelRegistered"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53 Channel \u5df2\u7ecf\u6ce8\u518c\u5230\u5b83\u7684 EventLoop \u5e76\u4e14\u80fd\u591f\u5904\u7406 I/O \u65f6\u88ab\u8c03\u7528")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"channelUnregistered"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53 Channel \u4ece\u5b83\u7684 EventLoop \u6ce8\u9500\u5e76\u4e14\u65e0\u6cd5\u5904\u7406\u4efb\u4f55 I/O \u65f6\u88ab\u8c03\u7528")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"channelActive"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53 Channel \u5904\u4e8e\u6d3b\u52a8\u72b6\u6001\u65f6\u88ab\u8c03\u7528;Channel \u5df2\u7ecf\u8fde\u63a5/\u7ed1\u5b9a\u5e76\u4e14\u5df2\u7ecf\u5c31\u7eea")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"channelInactive"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53 Channel \u79bb\u5f00\u6d3b\u52a8\u72b6\u6001\u5e76\u4e14\u4e0d\u518d\u8fde\u63a5\u5b83\u7684\u8fdc\u7a0b\u8282\u70b9\u65f6\u88ab\u8c03\u7528")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"channelReadComplete"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53Channel\u4e0a\u7684\u4e00\u4e2a\u8bfb\u64cd\u4f5c\u5b8c\u6210\u65f6\u88ab\u8c03\u7528")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"channelRead"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53\u4ece Channel \u8bfb\u53d6\u6570\u636e\u65f6\u88ab\u8c03\u7528")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ChannelWritabilityChanged"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53Channel\u7684\u53ef\u5199\u72b6\u6001\u53d1\u751f\u6539\u53d8\u65f6\u88ab\u8c03\u7528\u3002\u7528\u6237\u53ef\u4ee5\u786e\u4fdd\u5199\u64cd\u4f5c\u4e0d\u4f1a\u5b8c\u6210\u5f97\u592a\u5feb(\u4ee5\u907f\u514d\u53d1\u751f OutOfMemoryError)\u6216\u8005\u53ef\u4ee5\u5728 Channel \u53d8\u4e3a\u518d\u6b21\u53ef\u5199\u65f6\u6062\u590d\u5199\u5165\u3002\u53ef\u4ee5\u901a\u8fc7\u8c03\u7528Channel\u7684isWritable()\u65b9\u6cd5\u6765\u68c0\u6d4bChannel \u7684\u53ef\u5199\u6027\u3002\u4e0e\u53ef\u5199\u6027\u76f8\u5173\u7684\u9608\u503c\u53ef\u4ee5\u901a\u8fc7Channel.config().setWriteHighWaterMark()\u548c Channel.config().setWriteLowWaterMark()\u65b9\u6cd5\u6765\u8bbe\u7f6e")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"userEventTriggered"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53 ChannelnboundHandler.fireUserEventTriggered()\u65b9\u6cd5\u88ab\u8c03\u7528\u65f6\u88ab\u8c03\u7528\uff0c\u56e0\u4e3a\u4e00\u4e2a POJO \u88ab\u4f20\u7ecf\u4e86 ChannelPipeline")))),(0,l.kt)("h4",{id:"channeloutboundhandler-\u63a5\u53e3"},"ChannelOutboundHandler \u63a5\u53e3"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bind(ChannelHandlerContext,SocketAddress,ChannelPromise)"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53\u8bf7\u6c42\u5c06 Channel \u7ed1\u5b9a\u5230\u672c\u5730\u5730\u5740\u65f6\u88ab\u8c03\u7528")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"connect(ChannelHandlerContext,SocketAddress,SocketAddress,ChannelPromise)"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53\u8bf7\u6c42\u5c06 Channel \u8fde\u63a5\u5230\u8fdc\u7a0b\u8282\u70b9\u65f6\u88ab\u8c03\u7528")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"disconnect(ChannelHandlerContext,ChannelPromise)"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53\u8bf7\u6c42\u5c06 Channel \u4ece\u8fdc\u7a0b\u8282\u70b9\u65ad\u5f00\u65f6\u88ab\u8c03\u7528")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"close(ChannelHandlerContext,ChannelPromise)"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53\u8bf7\u6c42\u5173\u95ed Channel \u65f6\u88ab\u8c03\u7528")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"deregister(ChannelHandlerContext,ChannelPromise)"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53\u8bf7\u6c42\u5c06 Channel \u4ece\u5b83\u7684 EventLoop \u6ce8\u9500\u65f6\u88ab\u8c03\u7528")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"read(ChannelHandlerContext)"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53\u8bf7\u6c42\u4ece Channel \u8bfb\u53d6\u66f4\u591a\u7684\u6570\u636e\u65f6\u88ab\u8c03\u7528")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"flush(ChannelHandlerContext)"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53\u8bf7\u6c42\u901a\u8fc7 Channel \u5c06\u5165\u961f\u6570\u636e\u51b2\u5237\u5230\u8fdc\u7a0b\u8282\u70b9\u65f6\u88ab\u8c03\u7528")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"write(ChannelHandlerContext,Object,ChannelPromise)"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53\u8bf7\u6c42\u901a\u8fc7 Channel \u5c06\u6570\u636e\u5199\u5230\u8fdc\u7a0b\u8282\u70b9\u65f6\u88ab\u8c03\u7528")))),(0,l.kt)("h4",{id:"channelhandler\u7684\u9002\u914d\u5668"},"ChannelHandler\u7684\u9002\u914d\u5668"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://github.com/mxsm/document/blob/master/image/netty/ChannelHandlerAdapter.jpg?raw=true",alt:"\u56fe\u89e3"})),(0,l.kt)("h4",{id:"\u8d44\u6e90\u7ba1\u7406"},"\u8d44\u6e90\u7ba1\u7406"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6cc4\u9732\u7ea7\u522b\u7684\u68c0\u6d4b\uff1a")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u7ea7\u522b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DISABLED"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7981\u7528\u6cc4\u6f0f\u68c0\u6d4b\u3002\u53ea\u6709\u5728\u8be6\u5c3d\u7684\u6d4b\u8bd5\u4e4b\u540e\u624d\u5e94\u8bbe\u7f6e\u4e3a\u8fd9\u4e2a\u503c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SIMPLE"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528 1%\u7684\u9ed8\u8ba4\u91c7\u6837\u7387\u68c0\u6d4b\u5e76\u62a5\u544a\u4efb\u4f55\u53d1\u73b0\u7684\u6cc4\u9732\u3002\u8fd9\u662f\u9ed8\u8ba4\u7ea7\u522b\uff0c\u9002\u5408\u7edd\u5927\u90e8\u5206\u7684\u60c5\u51b5")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ADVANCED"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528\u9ed8\u8ba4\u7684\u91c7\u6837\u7387\uff0c\u62a5\u544a\u6240\u53d1\u73b0\u7684\u4efb\u4f55\u7684\u6cc4\u9732\u4ee5\u53ca\u5bf9\u5e94\u7684\u6d88\u606f\u88ab\u8bbf\u95ee\u7684\u4f4d\u7f6e")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PARANOID"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7c7b\u4f3c\u4e8eADVANCED\uff0c\u4f46\u662f\u5176\u5c06\u4f1a\u5bf9\u6bcf\u6b21(\u5bf9\u6d88\u606f\u7684)\u8bbf\u95ee\u90fd\u8fdb\u884c\u91c7\u6837\u3002\u8fd9\u5bf9\u6027\u80fd\u5c06\u4f1a\u6709\u5f88\u5927\u7684\u5f71\u54cd\uff0c\u5e94\u8be5\u53ea\u5728\u8c03\u8bd5\u9636\u6bb5\u4f7f\u7528")))),(0,l.kt)("p",null,"\u5c5e\u6027\u8868\u4e2d\u7684\u503c\u53ef\u4ee5\u901a\u8fc7\uff1a ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"java -Dio.netty.leakDetectionLevel=ADVANCED"))," \u6765\u8fdb\u884c\u8bbe\u7f6e\u3002"),(0,l.kt)("h3",{id:"channelpipeline-\u63a5\u53e3"},"ChannelPipeline \u63a5\u53e3"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"ChannelPipeline"))," \u662f\u4e00\u4e2a\u62e6\u622a\u6d41\u7ecf ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Channel"))," \u7684\u5165\u7ad9\u548c\u51fa\u7ad9\u4e8b\u4ef6\u7684 ",(0,l.kt)("strong",{parentName:"p"},"ChannelHandler")," \u5b9e\u4f8b\u94fe\u3002\u4e0b\u56fe\u4e3a ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Netty-4.1.17"))," \u4e2d\u7ed9\u51fa\u6765\u7684\u793a\u610f\u56fe\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://github.com/mxsm/document/blob/master/image/netty/ChannelPipelineJDK%E4%B8%AD%E7%A4%BA%E6%84%8F%E5%9B%BE.jpg?raw=true",alt:"\u56fe\u89e3"})),(0,l.kt)("p",null,"\u6bcf\u4e00\u4e2a\u65b0\u521b\u5efa\u7684 ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Channel"))," \u90fd\u5c06\u4f1a\u88ab\u5206\u914d\u4e00\u4e2a\u65b0\u7684 ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"ChannelPipeline"))," \u3002\u8fd9\u9879\u5173\u8054\u662f\u6c38\u4e45\u6027\u7684\u5728\u6574\u4e2a\u751f\u547d\u5468\u671f\u5f53\u4e2d\u3002 ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Channel"))," \u65e2\u4e0d\u80fd\u9644\u52a0\u53e6\u5916\u4e00\u4e2a  ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"ChannelPipeline"))," \uff0c\u4e5f\u4e0d\u80fd\u5206\u79bb\u5176\u5f53\u524d\u7684\u3002\u5728 ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Netty"))," \u7ec4\u4ef6\u7684\u751f\u547d\u5468\u671f\u4e2d\uff0c\u8fd9\u4e00\u9879\u56fa\u5b9a\u7684\u64cd\u4f5c\uff0c\u4e0d\u9700\u8981\u5f00\u53d1\u4eba\u5458\u7684\u4efb\u4f55\u5e72\u9884\u3002"),(0,l.kt)("p",null,"\u6839\u636e\u4e8b\u4ef6\u7684\u8d77\u6e90( ",(0,l.kt)("strong",{parentName:"p"},"\u51fa\u7ad9\u8fd8\u662f\u5165\u7ad9")," ) \u4e8b\u4ef6\u5c06\u4f1a\u88ab ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"ChannelInboundHandler"))," \u6216 ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"ChannelOutboundHandler")),"  \u5904\u7406\u3002\u968f\u540e\u901a\u8fc7\u8c03\u7528 ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"ChannelHandlerContext"))," \u5b9e\u73b0\uff0c\u5b83\u5c06\u88ab\u8f6c\u53d1\u7ed9\u540c\u4e00\u8d85\u7c7b\u578b\u7684\u4e0b\u4e00\u4e2a ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"ChannelHandler")),"  \u3002\u4e0b\u56fe\u5c55\u793a\u4e86\u4e8b\u4ef6\u5982\u4f55\u5728 ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"ChannelPipeline"))," \u4e2d\u4f20\u64ad"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://github.com/mxsm/document/blob/master/image/netty/ChannelPipeline.jpg?raw=true",alt:"\u56fe\u89e3"})),(0,l.kt)("p",null,"\u5728 ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"ChannelPipeline"))," \u4f20\u64ad\u4e8b\u4ef6\u7684\u65f6\u5019\uff0c\u4ed6\u4f1a\u6d4b\u8bd5 ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"ChannelPipeline"))," \u7684\u4e0b\u4e00\u4e2a ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"ChannelHandler"))," \u7684\u7c7b\u578b\u662f\u5426\u548c\u4e8b\u4ef6\u7684\u8fd0\u52a8\u65b9\u5411\u76f8\u5339\u914d\u3002\u5982\u679c\u4e0d\u5339\u914d\uff0c ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"ChannelPipeline"))," \u5c06\u8df3\u8fc7\u8be5 ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"ChannelHandler"))," \u524d\u8fdb\u5230\u4e0b\u4e00\u4e2a\uff0c\u76f4\u5230\u627e\u5230\u548c\u8be5\u4e8b\u4ef6\u6240\u671f\u671b\u7684\u65b9\u5411\u76f8\u5339\u914d\u7684\u4e3a\u6b62\u3002 \u6ce8\u610f\uff1a ",(0,l.kt)("strong",{parentName:"p"},"ChannelHandler \u4e5f\u53ef\u4ee5\u540c\u65f6\u5b9e\u73b0 ChannelInboundHandler \u63a5\u53e3\u548c ChannelOutboundHandler \u63a5\u53e3"),"  "),(0,l.kt)("h4",{id:"\u4fee\u6539channelpipeline"},"\u4fee\u6539ChannelPipeline"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"ChannelHandler")),"  \u53ef\u4ee5\u901a\u8fc7\u6dfb\u52a0\u3001\u5220\u9664\u6216\u8005\u66ff\u6362\u5176\u4ed6\u7684 ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"ChannelHandler"))," \u6765\u5b9e\u65f6\u5730\u4fee\u6539 ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"ChannelPipeline"))," \u5e03\u5c40\uff0c\u8fd9\u5c31\u662f ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"ChannelHandler"))," \u6700\u91cd\u8981\u7684\u80fd\u529b\u4e4b\u4e00\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"addFrist,addBefore,addAfter,addLast"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5c06\u4e00\u4e2aChannelHandler\u6dfb\u52a0\u5230ChannelPipeline\u4e2d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"remove"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5c06\u4e00\u4e2a ChannelHandler \u4ece ChannelPipeline \u4e2d\u79fb\u9664")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"replace"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5c06 ChannelPipeline \u4e2d\u7684\u4e00\u4e2a ChannelHandler \u66ff\u6362\u4e3a\u53e6\u4e00\u4e2a ChannelHandler")))),(0,l.kt)("p",null,"\u6dfb\u52a0\u5904\u7406\u5668\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'channel.pipeline().\naddLast("frameDecoder", new ImMessageFrameDecoder()).\naddLast("protoDecoder", new ProtobufDecoder(ImMessageProto.ImMessage.getDefaultInstance())).\naddLast("frameEncoder", new ProtobufVarint32LengthFieldPrepender()).\naddLast("protoEncoder", new ProtobufEncoder()).\naddLast("imHandler", new ImHandler());\n')),(0,l.kt)("p",null,"\u5220\u9664\u5904\u7406\u5668\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},' ChannelHandler protoEncoder = ctx.channel().pipeline().remove("protoEncoder");\n ChannelHandler frameEncoder = ctx.channel().pipeline().remove("frameEncoder");\n')),(0,l.kt)("h4",{id:"\u4e8b\u4ef6\u89e6\u53d1"},"\u4e8b\u4ef6\u89e6\u53d1"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"ChannelPipeline"))," \u7684 ",(0,l.kt)("strong",{parentName:"p"},"API")," \u516c\u5f00\u4e86\u7528\u4e8e\u8c03\u7528\u5165\u7ad9\u548c\u51fa\u7ad9\u64cd\u4f5c\u7684\u9644\u52a0\u65b9\u6cd5\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5165\u7ad9\u64cd\u4f5c\u7684\u65b9\u6cd5\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u65b9\u6cd5\uff1afireChannelRegistered\n\u4f5c\u7528\uff1a\u8c03\u7528 ChannelPipeline \u4e2d\u4e0b\u4e00\u4e2a ChannelInboundHandler \u7684channelRegistered(ChannelHandlerContext)\u65b9\u6cd5\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u65b9\u6cd5\uff1afireChannelUnregistered\n\u4f5c\u7528\uff1a\u8c03\u7528 ChannelPipeline \u4e2d\u4e0b\u4e00\u4e2a ChannelInboundHandler \u7684 channelUnregistered(ChannelHandlerContext)\u65b9\u6cd5\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u65b9\u6cd5\uff1afireChannelActive\n\u4f5c\u7528\uff1a\u8c03\u7528 ChannelPipeline \u4e2d\u4e0b\u4e00\u4e2a ChannelInboundHandler \u7684 channelActive(ChannelHandlerContext)\u65b9\u6cd5\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u65b9\u6cd5\uff1afireChannelInactive\n\u4f5c\u7528\uff1a\u8c03\u7528 ChannelPipeline \u4e2d\u4e0b\u4e00\u4e2a ChannelInboundHandler \u7684channelInactive(ChannelHandlerContext)\u65b9\u6cd5\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u65b9\u6cd5\uff1afireExceptionCaught\n\u4f5c\u7528\uff1a\u8c03\u7528 ChannelPipeline \u4e2d\u4e0b\u4e00\u4e2a ChannelInboundHandler \u7684exceptionCaught(ChannelHandlerContext, Throwable)\u65b9\u6cd5\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u65b9\u6cd5\uff1afireUserEventTriggered\n\u4f5c\u7528\uff1a\u8c03\u7528 ChannelPipeline \u4e2d\u4e0b\u4e00\u4e2a ChannelInboundHandler \u7684userEventTriggered(ChannelHandlerContext, Object)\u65b9\u6cd5\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u65b9\u6cd5\uff1afireChannelRead\n\u4f5c\u7528\uff1a\u8c03\u7528 ChannelPipeline \u4e2d\u4e0b\u4e00\u4e2a ChannelInboundHandler \u7684channelRead(ChannelHandlerContext, Object msg)\u65b9\u6cd5\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u65b9\u6cd5\uff1afireChannelReadComplete\n\u4f5c\u7528\uff1a\u8c03\u7528 ChannelPipeline \u4e2d\u4e0b\u4e00\u4e2a ChannelInboundHandler \u7684channelReadComplete(ChannelHandlerContext)\u65b9\u6cd5\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u65b9\u6cd5\uff1afirechannelWritabilityChanged\n\u4f5c\u7528\uff1a\u8c03\u7528 ChannelPipeline \u4e2d\u4e0b\u4e00\u4e2a ChannelInboundHandler \u7684  channelWritabilityChanged(ChannelHandlerContext)\u65b9\u6cd5\n")),(0,l.kt)("p",null,"\u5728\u51fa\u7ad9\u64cd\u4f5c\u8fd9\u8fb9\uff0c\u5904\u7406\u4e8b\u4ef6\u4f1a\u5c06\u5bfc\u81f4\u5e95\u5c42\u7684\u5957\u63a5\u5b57\u4e0a\u53d1\u751f\u4e00\u7cfb\u5217\u7684\u52a8\u4f5c\uff0c"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u51fa\u7ad9\u64cd\u4f5c\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u65b9\u6cd5\uff1abind\n\u4f5c\u7528\uff1a\u5c06 Channel \u7ed1\u5b9a\u5230\u4e00\u4e2a\u672c\u5730\u5730\u5740\uff0c\u8fd9\u5c06\u8c03\u7528 ChannelPipeline \u4e2d\u7684\u4e0b\u4e00\u4e2aChannelOutboundHandler \u7684 bind(ChannelHandlerContext, SocketAddress, ChannelPromise)\u65b9\u6cd5\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u65b9\u6cd5\uff1aconnect\n\u4f5c\u7528\uff1a\u5c06 Channel \u8fde\u63a5\u5230\u4e00\u4e2a\u8fdc\u7a0b\u5730\u5740\uff0c\u8fd9\u5c06\u8c03\u7528 ChannelPipeline \u4e2d\u7684\u4e0b\u4e00\u4e2aChannelOutboundHandler \u7684 connect(ChannelHandlerContext, SocketAddress, ChannelPromise)\u65b9\u6cd5\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u65b9\u6cd5\uff1adisconnect\n\u4f5c\u7528\uff1a\u5c06 Channel \u65ad\u5f00\u8fde\u63a5\u3002\u8fd9\u5c06\u8c03\u7528 ChannelPipeline \u4e2d\u7684\u4e0b\u4e00\u4e2a ChannelOutboundHandler \u7684 disconnect(ChannelHandlerContext, Channel Promise)\u65b9\u6cd5\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u65b9\u6cd5\uff1aclose\n\u4f5c\u7528\uff1a\u5c06 Channel \u5173\u95ed\u3002\u8fd9\u5c06\u8c03\u7528 ChannelPipeline \u4e2d\u7684\u4e0b\u4e00\u4e2a ChannelOutboundHandler \u7684 close(ChannelHandlerContext, ChannelPromise)\u65b9\u6cd5\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u65b9\u6cd5\uff1aderegister\n\u4f5c\u7528\uff1a\u5c06 Channel \u4ece\u5b83\u5148\u524d\u6240\u5206\u914d\u7684 EventExecutor(\u5373 EventLoop)\u4e2d\u6ce8\u9500\u3002\u8fd9\u5c06\u8c03\u7528 ChannelPipeline \u4e2d\u7684\u4e0b\u4e00\u4e2a ChannelOutboundHandler \u7684 deregister(ChannelHandlerContext, ChannelPromise)\u65b9\u6cd5\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u65b9\u6cd5\uff1aflush\n\u4f5c\u7528\uff1a\u51b2\u5237 Channel \u6240\u6709\u6302\u8d77\u7684\u5199\u5165\u3002\u8fd9\u5c06\u8c03\u7528 ChannelPipeline \u4e2d\u7684\u4e0b\u4e00\u4e2a ChannelOutboundHandler \u7684 flush(ChannelHandlerContext)\u65b9\u6cd5\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u65b9\u6cd5\uff1awrite\n\u4f5c\u7528\uff1a\u5c06\u6d88\u606f\u5199\u5165 Channel\u3002\u8fd9\u5c06\u8c03\u7528 ChannelPipeline \u4e2d\u7684\u4e0b\u4e00\u4e2a ChannelOutboundHandler \u7684 write(ChannelHandlerContext, Object msg, ChannelPromise)\u65b9\u6cd5\u3002\u6ce8\u610f:\u8fd9\u5e76\u4e0d\u4f1a\u5c06\u6d88\u606f\u5199\u5165\u5e95\u5c42\u7684 Socket\uff0c\u800c\u53ea\u4f1a\u5c06\u5b83\u653e\u5165\u961f\u5217\u4e2d\u3002\u8981\u5c06\u5b83\u5199\u5165 Socket\uff0c\u9700\u8981\u8c03\u7528 flush()\u6216\u8005 writeAndFlush()\u65b9\u6cd5\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u65b9\u6cd5\uff1a writeAndFlush\n\u4f5c\u7528\uff1a \u8fd9\u662f\u4e00\u4e2a\u5148\u8c03\u7528write()\u65b9\u6cd5\u518d\u63a5\u7740\u8c03\u7528flush()\u65b9\u6cd5\u7684\u4fbf\u5229\u65b9\u6cd5\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u65b9\u6cd5\uff1aread\n\u4f5c\u7528\uff1a\u8bf7\u6c42\u4ece Channel \u4e2d\u8bfb\u53d6\u66f4\u591a\u7684\u6570\u636e\u3002\u8fd9\u5c06\u8c03\u7528 ChannelPipeline \u4e2d\u7684\u4e0b\u4e00\u4e2aChannelOutboundHandler \u7684 read(ChannelHandlerContext)\u65b9\u6cd5\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u603b\u7ed3\uff1a")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://github.com/mxsm/document/blob/master/image/netty/ChannelPipeline%E7%BB%A7%E6%89%BF%E5%9B%BE-netty4-1.17.jpg?raw=true",alt:"\u56fe\u89e3"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Channel\u521b\u5efa\u7684\u65f6\u5019\u540c\u65f6\u4f1a\u521b\u5efaChannelPipeline\u5e76\u4e14\u8fdb\u884c\u7ed1\u5b9a")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"ChannelPipeline \u4fdd\u5b58\u4e86\u4e0e Channel \u76f8\u5173\u8054\u7684 ChannelHandler;")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"ChannelPipeline \u53ef\u4ee5\u6839\u636e\u9700\u8981\uff0c\u901a\u8fc7\u6dfb\u52a0\u6216\u8005\u5220\u9664 ChannelHandler \u6765\u52a8\u6001\u5730\u4fee\u6539")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"ChannelPipeline \u6709\u7740\u4e30\u5bcc\u7684 API \u7528\u4ee5\u88ab\u8c03\u7528\uff0c\u4ee5\u54cd\u5e94\u5165\u7ad9\u548c\u51fa\u7ad9\u4e8b\u4ef6\u3002"))),(0,l.kt)("h3",{id:"channelhandlercontext-\u63a5\u53e3"},"ChannelHandlerContext \u63a5\u53e3"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"ChannelHandlerContext"))," \u4ee3\u8868\u4e86 ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"ChannelHandler"))," \u548c ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"ChannelPipeline"))," \u4e4b\u95f4\u7684\u5173\u8054\uff0c\u6bcf\u5f53\u6709 ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"ChannelHandler"))," \u6dfb\u52a0\u5230 ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"ChannelPipeline"))," \u4e2d\u65f6\uff0c\u90fd\u4f1a\u521b\u5efa ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"ChannelHandlerContext"))," \u3002",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"ChannelHandlerContext"))," \u7684\u4e3b\u8981\u529f\u80fd\u662f\u7ba1\u7406\u5b83\u6240\u5173\u8054\u7684 ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"ChannelHandler"))," \u548c\u5728\u540c\u4e00\u4e2a ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"ChannelPipeline"))," \u4e2d\u7684\u5176\u4ed6 ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"ChannelHandler"))," \u4e4b\u95f4\u7684\u4ea4\u4e92\u3002(",(0,l.kt)("strong",{parentName:"p"},"\u53ea\u8981\u6709ChannelHandler\u7684\u6dfb\u52a0\u5c31\u4f1a\u521b\u5efaChannelHandlerContext"),")"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"ChannelHandlerContext"))," \u548c ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Channel"))," \u4ee5\u53ca ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"ChannelPipeline"))," \u6709\u4e00\u4e9b\u76f8\u540c\u7684\u65b9\u6cd5\u3002\u8fd9\u4e9b\u65b9\u6cd5\u533a\u522b\u5728\u54ea\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u8c03\u7528 ",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"Channel"))," \u6216\u8005 ",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"ChannelPipeline"))," \u4e0a\u7684\u8fd9\u4e9b\u65b9\u6cd5\uff0c\u5b83\u4eec\u5c06\u6cbf\u7740\u6574\u4e2a ",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"ChannelPipeline"))," \u8fdb\u884c\u4f20\u64ad\u3002\u800c\u8c03\u7528\u4f4d\u4e8e ",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"ChannelHandlerContext"))," \u4e0a\u7684\u76f8\u540c\u65b9\u6cd5\uff0c\u5219\u5c06\u4ece\u5f53\u524d\u6240\u5173\u8054\u7684 ",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"ChannelHandler"))," \u5f00\u59cb\uff0c\u5e76\u4e14\u53ea\u4f1a\u4f20\u64ad\u7ed9\u4f4d\u4e8e\u8be5 ",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"ChannelPipeline"))," \u4e2d\u7684\u4e0b\u4e00\u4e2a\u80fd\u591f\u5904\u7406\u8be5\u4e8b\u4ef6\u7684 ",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"ChannelHandler"))," \u3002(",(0,l.kt)("strong",{parentName:"li"},"\u4e8b\u4ef6\u4f20\u64ad\u7684\u8303\u56f4\u4e0d\u4e00\u6837"),")")),(0,l.kt)("p",null,"\u4f7f\u7528 ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"ChannelHandlerContext"))," \u7684 ",(0,l.kt)("strong",{parentName:"p"},"API")," \u7684\u65f6\u5019\u7262\u8bb0\u4ee5\u4e0b\u4e24\u70b9\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"ChannelHandlerContext"))," \u548c ",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"ChannelHandler"))," \u4e4b\u95f4\u7684\u5173\u8054(\u7ed1\u5b9a)\u662f\u6c38\u8fdc\u4e0d\u4f1a\u6539\u53d8\u7684\uff0c\u6240\u4ee5\u7f13\u5b58\u5bf9\u5b83\u7684\u5f15\u7528\u662f\u5b89\u5168\u7684\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u76f8\u5bf9\u4e8e\u5176\u4ed6\u7c7b\u7684\u540c\u540d\u65b9\u6cd5\uff0c",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"ChannelHandlerContext"))," \u7684\u65b9\u6cd5\u5c06\u4ea7\u751f\u66f4\u77ed\u7684\u4e8b\u4ef6\u6d41\uff0c\u5e94\u8be5\u5c3d\u53ef\u80fd\u5730\u5229\u7528\u8fd9\u4e2a\u7279\u6027\u6765\u83b7\u5f97\u6700\u5927\u7684\u6027\u80fd\u3002 ")),(0,l.kt)("p",null,"\u4e0b\u9762\u770b\u4e00\u4e0b ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"ChannelHandlerContext"))," \u3001 ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Channel"))," \u548c ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"ChannelPipeline"))," \u7684\u5173\u7cfb\u56fe\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://github.com/mxsm/document/blob/master/image/netty/context-Channel-pipeline%E4%B8%89%E8%80%85%E5%85%B3%E7%B3%BB%E5%9B%BE.jpg?raw=true",alt:"\u56fe\u7247"})),(0,l.kt)("p",null,"\u4e0b\u9762\u770b\u4e00\u4e0b\u8c03\u7528Channel \u548c ChannelPipeline\u7684\u65b9\u6cd5\u5bfc\u81f4\u5199\u5165\u4e8b\u4ef6\u4ece\u5c3e\u7aef\u5230\u5934\u90e8\u5730\u6d41\u7ecf ChannelPipeline\u793a\u610f\u56fe\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://github.com/mxsm/document/blob/master/image/netty/Channel-ChannelPipeline%E4%BA%8B%E4%BB%B6%E4%BC%A0%E6%92%AD%E5%9B%BE.jpg?raw=true",alt:"\u56fe\u89e3"})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a\u91cd\u8981\u7684\u662f\u8981\u6ce8\u610f\u5230\uff0c\u867d\u7136\u88ab\u8c03\u7528\u7684 Channel \u6216 ChannelPipeline \u4e0a\u7684 write()\u65b9\u6cd5\u5c06\u4e00\u76f4\u4f20\u64ad\u4e8b\u4ef6\u901a"),"\n",(0,l.kt)("strong",{parentName:"p"},"\u8fc7\u6574\u4e2a ChannelPipeline\uff0c\u4f46\u662f\u5728 ChannelHandler \u7684\u7ea7\u522b\u4e0a\uff0c\u4e8b\u4ef6\u4ece\u4e00\u4e2a ChannelHandler\u5230\u4e0b\u4e00\u4e2a ChannelHandler \u7684\u79fb\u52a8\u662f\u7531 ChannelHandlerContext \u4e0a\u7684\u8c03\u7528\u5b8c\u6210\u7684\u3002")),(0,l.kt)("p",null,"\u4e0b\u9762\u770b\u4e00\u4e0b ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"ChannelHandlerContext"))," \u4e8b\u4ef6\u88ab\u4f20\u64ad\u793a\u610f\u56fe\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://github.com/mxsm/document/blob/master/image/netty/ChannelHandlerContext%E8%A7%A6%E5%8F%91%E7%9A%84%E6%93%8D%E4%BD%9C%E6%B5%81%E7%A8%8B%E4%BA%8B%E4%BB%B6%E4%BC%A0%E6%92%AD.jpg?raw=true",alt:"\u56fe\u89e3"})),(0,l.kt)("h3",{id:"\u603b\u7ed3"},"\u603b\u7ed3\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Channel\u7684\u751f\u547d\u5468\u671f\u4ee5\u53caChannelPipeline\u7684\u751f\u547d\u5468\u671f\u2014 \u8fd9\u4e24\u4e2a\u751f\u547d\u5468\u671f\u662f\u540c\u751f\u6b7b")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Channel ChannelPipeline \u4ee5\u53ca ChannelHandlerContext \u4e8b\u4ef6\u4f20\u64ad\u8303\u56f4")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Channel ChannelPipeline \u4ee5\u53ca ChannelHandlerContext \u4e09\u8005\u4e4b\u95f4\u7684\u5173\u7cfb"))))}k.isMDXComponent=!0}}]);