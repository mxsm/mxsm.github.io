"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[2856],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>d});var r=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var c=r.createContext({}),l=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=l(t.components);return r.createElement(c.Provider,{value:e},t.children)},u="mdxType",y={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,c=t.parentName,s=p(t,["components","mdxType","originalType","parentName"]),u=l(n),m=o,d=u["".concat(c,".").concat(m)]||u[m]||y[m]||a;return n?r.createElement(d,i(i({ref:e},s),{},{components:n})):r.createElement(d,i({ref:e},s))}));function d(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,i=new Array(a);i[0]=m;var p={};for(var c in e)hasOwnProperty.call(e,c)&&(p[c]=e[c]);p.originalType=t,p[u]="string"==typeof t?t:o,i[1]=p;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7269:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={title:"Netty",date:new Date("2018-12-17T00:00:00.000Z")},i=void 0,p={unversionedId:"netty/netty-introduction/Netty",id:"netty/netty-introduction/Netty",title:"Netty",description:"Netty \u7ebf\u7a0b\u6a21\u578b",source:"@site/docs/netty/netty-introduction/Netty.md",sourceDirName:"netty/netty-introduction",slug:"/netty/netty-introduction/Netty",permalink:"/docs/netty/netty-introduction/Netty",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/netty/netty-introduction/Netty.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1674227439,formattedLastUpdatedAt:"Jan 20, 2023",frontMatter:{title:"Netty",date:"2018-12-17T00:00:00.000Z"},sidebar:"netty",previous:{title:"Netty\u4f18\u5316",permalink:"/docs/netty/netty-introduction/Netty-optimize"},next:{title:"Netty FastThreadLocal\u76f8\u6bd4Java ThreadLocal\u5230\u5e95\u5feb\u5728\u54ea\u91cc?",permalink:"/docs/netty/netty-source-code-analysis/netty-FastThreadLocal"}},c={},l=[{value:"Netty \u7ebf\u7a0b\u6a21\u578b",id:"netty-\u7ebf\u7a0b\u6a21\u578b",level:3}],s={toc:l};function u(t){let{components:e,...n}=t;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"netty-\u7ebf\u7a0b\u6a21\u578b"},"Netty \u7ebf\u7a0b\u6a21\u578b"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://github.com/mxsm/document/blob/master/image/netty/NettyServer%E5%A4%84%E7%90%86%E8%BF%9E%E6%8E%A5%E7%9A%84%E7%A4%BA%E6%84%8F%E5%9B%BE.png?raw=true",alt:"\u7ebf\u7a0b\u6a21\u578b"})),(0,o.kt)("p",null,"\u4e0a\u56fe\u663e\u793a\u7684\u662f ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Netty"))," \u4e3b\u4ece\u6a21\u578b\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Boss NioEventLoopGroup")," "),(0,o.kt)("p",{parentName:"li"},"\u8fd9\u4e2aBoss Group\u4e3b\u8981\u662f\u7528\u6765\u76d1\u542c\u548c\u8f6e\u8be2Accept\u8bf7\u6c42\uff0c\u7136\u540e\u5904\u7406Accept\u8bf7\u6c42\u5904\u7406\u5efa\u7acbChannel\u901a\u9053\uff0c\u5e76\u4e14\u5c06Channel\u6ce8\u518c\u5230Worker Group")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Worker NioEventLoopGroup")),(0,o.kt)("p",{parentName:"li"},"\u8fd9\u4e2aWorker Group \u4e3b\u8981\u7528\u6765\u76d1\u542cREAD\u548cWRITE\u4e8b\u4ef6\u7684\u3002\u5904\u7406\u6765\u81eaBoss Group\u6ce8\u518c\u6765\u7684Channel\u3002\u6bcf\u4e00\u4e2aNioEventLoop\u90fd\u662f\u4e00\u4e2a\u7ebf\u7a0b\uff0cWorker Group\u5c31\u662f\u4e00\u4e2a\u7ebf\u7a0b\u7ec4\u3002"))))}u.isMDXComponent=!0}}]);