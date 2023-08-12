"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[926],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>k});var r=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var i=r.createContext({}),m=function(t){var e=r.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):p(p({},e),t)),n},s=function(t){var e=m(t.components);return r.createElement(i.Provider,{value:e},t.children)},u="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,i=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),u=m(n),d=o,k=u["".concat(i,".").concat(d)]||u[d]||c[d]||a;return n?r.createElement(k,p(p({ref:e},s),{},{components:n})):r.createElement(k,p({ref:e},s))}));function k(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,p=new Array(a);p[0]=d;var l={};for(var i in e)hasOwnProperty.call(e,i)&&(l[i]=e[i]);l.originalType=t,l[u]="string"==typeof t?t:o,p[1]=l;for(var m=2;m<a;m++)p[m]=n[m];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3148:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>p,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>m});var r=n(7462),o=(n(7294),n(3905));const a={title:"Netty-EventLoop",date:new Date("2019-09-24T00:00:00.000Z")},p=void 0,l={unversionedId:"netty/netty-introduction/Netty-EventLoop",id:"netty/netty-introduction/Netty-EventLoop",title:"Netty-EventLoop",description:"1. \u4ec0\u4e48\u662fEventLoop?",source:"@site/docs/netty/netty-introduction/Netty-EventLoop.md",sourceDirName:"netty/netty-introduction",slug:"/netty/netty-introduction/Netty-EventLoop",permalink:"/docs/netty/netty-introduction/Netty-EventLoop",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/netty/netty-introduction/Netty-EventLoop.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1691846266,formattedLastUpdatedAt:"Aug 12, 2023",frontMatter:{title:"Netty-EventLoop",date:"2019-09-24T00:00:00.000Z"},sidebar:"netty",previous:{title:"Netty-ChannelHandler\u7ec4\u4ef6",permalink:"/docs/netty/netty-introduction/Netty-ChannelHandler"},next:{title:"Netty @Sharable\u5230\u5e95\u662f\u5e72\u4ec0\u4e48\u7528\u7684",permalink:"/docs/netty/netty-introduction/Netty-annotation-Sharable"}},i={},m=[{value:"1. \u4ec0\u4e48\u662fEventLoop?",id:"1-\u4ec0\u4e48\u662feventloop",level:3},{value:"2. EventLoop\u63a5\u53e3",id:"2-eventloop\u63a5\u53e3",level:3},{value:"3 EventLoop\u5f02\u6b65\u5de5\u4f5c\u539f\u7406",id:"3-eventloop\u5f02\u6b65\u5de5\u4f5c\u539f\u7406",level:3}],s={toc:m},u="wrapper";function c(t){let{components:e,...n}=t;return(0,o.kt)(u,(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"1-\u4ec0\u4e48\u662feventloop"},"1. \u4ec0\u4e48\u662fEventLoop?"),(0,o.kt)("p",null,"\u8fd0\u884c\u4efb\u52a1\u6765\u5904\u7406\u5728\u8fde\u63a5\u7684\u751f\u547d\u5468\u671f\u5185\u53d1\u751f\u7684\u4e8b\u4ef6\u662f\u4efb\u4f55\u7f51\u7edc\u6846\u67b6\u7684\u57fa\u672c\u529f\u80fd\u3002\u4e0e\u4e4b\u76f8\u5e94\u7684\u7f16\u7a0b\u4e0a\u7684\u6784\u9020\u901a\u5e38\u88ab\u79f0\u4e3a\u4e8b\u4ef6\u5faa\u73af\u3002\u8fd9\u5c31\u662f ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Netty"))," \u4e2d\u7684 ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"EventLoop"))),(0,o.kt)("h3",{id:"2-eventloop\u63a5\u53e3"},"2. EventLoop\u63a5\u53e3"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"EventLoop"))," \u662f\u534f\u540c\u8bbe\u8ba1\u7684\u4e00\u90e8\u5206\u91c7\u7528\u4e86\u4e24\u4e2a\u57fa\u672c\u7684API:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"\u5e76\u53d1")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"io.netty.util.concurrent"))," \u5305\u6784\u5efa\u5728 JDK \u7684 ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"java.util.concurrent"))," \u5305\u4e0a\uff0c\u7528\u6765\u63d0\u4f9b\u7ebf\u7a0b\u6267\u884c\u5668")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"\u7f51\u7edc\u7f16\u7a0b")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"io.netty.channel"))," \u5305\u4e2d\u7684\u7c7b\uff0c\u4e3a\u4e86\u4e0e ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Channel"))," \u7684\u4e8b\u4ef6\u8fdb\u884c\u4ea4\u4e92\uff0c\u6269\u5c55\u4e86\u63a5\u53e3/\u7c7b"))),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://github.com/mxsm/document/blob/master/image/netty/EventLoop%E7%9A%84%E7%B1%BB%E5%B1%82%E6%AC%A1%E7%BB%93%E6%9E%84%E5%9B%BE.jpg?raw=true",alt:"\u56fe\u89e3"})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"}," //netty 4.1.17\u7248\u672c\npublic interface EventLoop extends OrderedEventExecutor, EventLoopGroup {\n    @Override\n    EventLoopGroup parent();\n}\n")),(0,o.kt)("p",null,"\u5728\u8fd9\u4e2a\u6a21\u578b\u4e2d\uff0c\u4e00\u4e2a ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"EventLoop"))," \u5c06\u7531\u4e00\u4e2a\u6c38\u8fdc\u90fd\u4e0d\u4f1a\u6539\u53d8\u7684 ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Thread"))," \u9a71\u52a8\uff0c\u540c\u65f6\u4efb\u52a1 (",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Runnable"))," \u6216\u8005 ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Callable")),")\u53ef\u4ee5\u76f4\u63a5\u63d0\u4ea4\u7ed9 ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"EventLoop"))," \u5b9e\u73b0\uff0c\u4ee5\u7acb\u5373\u6267\u884c\u6216\u8005\u8c03\u5ea6\u6267\u884c\u3002 \u6839\u636e\u914d\u7f6e\u548c\u53ef\u7528\u6838\u5fc3\u7684\u4e0d\u540c\uff0c\u53ef\u80fd\u4f1a\u521b\u5efa\u591a\u4e2a EventLoop \u5b9e\u4f8b\u7528\u4ee5\u4f18\u5316\u8d44\u6e90\u7684\u4f7f\u7528\uff0c\u5e76\u4e14\u5355\u4e2a ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"EventLoop"))," \u53ef\u80fd\u4f1a\u88ab\u6307\u6d3e\u7528\u4e8e\u670d\u52a1\u591a\u4e2a ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Channel"))," \u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"EventLoop")),"  \u548c ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"Channel")),"  ",(0,o.kt)("strong",{parentName:"li"},"\u5b58\u57281\u5bf9\u591a\u7684\u5173\u7cfb"))),(0,o.kt)("p",null,"\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Netty"))," \u7684 ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"EventLoop"))," \u5728\u7ee7\u627f\u4e86 ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"ScheduledExecutorService"))," \u7684\u540c\u65f6\uff0c\u53ea\u5b9a \u4e49\u4e86\u4e00\u4e2a\u65b9\u6cd5\uff0c",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"parent()"))," \u3002\u8fd9\u4e2a\u65b9\u6cd5\uff0c\u5982\u4e0b\u9762\u7684\u4ee3\u7801\u7247\u65ad\u6240\u793a\uff0c\u7528\u4e8e\u8fd4\u56de\u5230\u5f53\u524d ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"EventLoop"))," \u5b9e \u73b0\u7684\u5b9e\u4f8b\u6240\u5c5e\u7684 ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"EventLoopGroup"))," \u7684\u5f15\u7528 "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u6ce8\u610f\uff1a\u4ece\u4e0a\u9762\u7684\u4ee3\u7801\u6765\u770b\u7ee7\u627f\u4e86OrderedEventExecutor\u987a\u5e8f\u65f6\u95f4\u6267\u884c\u5668\u3002\u90a3\u4e48\u4e3a\u4ec0\u4e48\u8981\u987a\u5e8f\u6267\u884c\u4e8b\u4ef6\u6216\u4efb\u52a1\u5462\uff1f\n\u4e8b\u4ef6/\u4efb\u52a1\u7684\u6267\u884c\u987a\u5e8f \u4e8b\u4ef6\u548c\u4efb\u52a1\u662f\u4ee5\u5148\u8fdb\u5148\u51fa(FIFO)\u7684\u987a\u5e8f\u6267\u884c\u7684\u3002\u8fd9\u6837\u53ef\u4ee5\u901a\u8fc7\u4fdd\u8bc1\u5b57 \u8282\u5185\u5bb9\u603b\u662f\u6309\u6b63\u786e\u7684\u987a\u5e8f\u88ab\u7406\uff0c\n\u6d88\u9664\u6f5c\u5728\u7684\u6570\u636e\u635f\u574f\u7684\u53ef\u80fd\u6027\u3002\n")),(0,o.kt)("h3",{id:"3-eventloop\u5f02\u6b65\u5de5\u4f5c\u539f\u7406"},"3 EventLoop\u5f02\u6b65\u5de5\u4f5c\u539f\u7406"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://github.com/mxsm/document/blob/master/image/netty/EventLoop%E5%BC%82%E6%AD%A5%E6%83%85%E5%86%B5%E4%B8%8B%E7%9A%84%E5%B7%A5%E4%BD%9C%E5%8E%9F%E7%90%86.jpg?raw=true",alt:"\u56fe\u89e3"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u4e00\u4e2aEventLoop\u7ed1\u5b9a\u4e00\u4e2a\u7ebf\u7a0b")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u4e00\u4e2aEventLoop\u53ef\u4ee5\u7ed1\u5b9a\u591a\u4e2aChannel\uff0c\u5e76\u4e14Channel\u7684\u6574\u4e2a\u751f\u547d\u5468\u671f\u90fd\u7531\u4e00\u4e2aEventLoop\u5904\u7406")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u5728Channel\u6574\u4e2a\u751f\u547d\u5468\u671f\u5f53\u4e2d\u90fd\u662f\u7531\u4e00\u4e2aEventLoop\u8fdb\u884c\u5904\u7406\u7684\u3002\u6362\u53e5\u8bdd\u8bf4\u662f\u7531\u4e00\u4e2a\u7ebf\u7a0b\u5904\u7406(\u597d\u5904\uff1a\u51cf\u5c11\u4e86\u591a\u7ebf\u7a0b\u4e4b\u95f4\u7ebf\u7a0b\u4e0a\u4e0b\u6587\u7684\u5207\u6362\u8fc7\u7a0b\uff0c\u6240\u4ee5\u5728Netty\u7f16\u7a0b\u8fc7\u7a0b\u4e2d\u5c3d\u53ef\u80fd\u7684\u51cf\u5c11\u5bf9Channel\u65f6\u95f4\u7684\u5360\u7528)"))))}c.isMDXComponent=!0}}]);