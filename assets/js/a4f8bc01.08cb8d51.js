"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[7734],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>k});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),m=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=m(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=m(r),d=n,k=u["".concat(c,".").concat(d)]||u[d]||s[d]||o;return r?a.createElement(k,i(i({ref:t},p),{},{components:r})):a.createElement(k,i({ref:t},p))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:n,i[1]=l;for(var m=2;m<o;m++)i[m]=r[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2836:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var a=r(7462),n=(r(7294),r(3905));const o={title:"JUC\u5305\u4e2d\u7684\u539f\u5b50\u7c7b",date:new Date("2018-08-08T00:00:00.000Z")},i=void 0,l={unversionedId:"java/java-se/concurrencemultithreading/JUC-atomic-class",id:"java/java-se/concurrencemultithreading/JUC-atomic-class",title:"JUC\u5305\u4e2d\u7684\u539f\u5b50\u7c7b",description:"1 Atomic\u539f\u5b50\u7c7b\u4ecb\u7ecd",source:"@site/docs/java/java-se/concurrencemultithreading/JUC-atomic-class.md",sourceDirName:"java/java-se/concurrencemultithreading",slug:"/java/java-se/concurrencemultithreading/JUC-atomic-class",permalink:"/docs/java/java-se/concurrencemultithreading/JUC-atomic-class",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/java/java-se/concurrencemultithreading/JUC-atomic-class.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1682735967,formattedLastUpdatedAt:"Apr 29, 2023",frontMatter:{title:"JUC\u5305\u4e2d\u7684\u539f\u5b50\u7c7b",date:"2018-08-08T00:00:00.000Z"},sidebar:"javase",previous:{title:"CompletableFuture\u8be6\u89e3",permalink:"/docs/java/java-se/concurrencemultithreading/CompletableFuture"},next:{title:"LockSupport\u7528\u6cd5\u548c\u539f\u7406",permalink:"/docs/java/java-se/concurrencemultithreading/LockSupport"}},c={},m=[{value:"1 Atomic\u539f\u5b50\u7c7b\u4ecb\u7ecd",id:"1-atomic\u539f\u5b50\u7c7b\u4ecb\u7ecd",level:3}],p={toc:m},u="wrapper";function s(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"1-atomic\u539f\u5b50\u7c7b\u4ecb\u7ecd"},"1 Atomic\u539f\u5b50\u7c7b\u4ecb\u7ecd"),(0,n.kt)("p",null,"\u8fd9\u91cc Atomic \u662f\u6307\u4e00\u4e2a\u64cd\u4f5c\u662f\u4e0d\u53ef\u4e2d\u65ad\u7684\u3002\u5373\u4f7f\u662f\u5728\u591a\u4e2a\u7ebf\u7a0b\u4e00\u8d77\u6267\u884c\u7684\u65f6\u5019\uff0c\u4e00\u4e2a\u64cd\u4f5c\u4e00\u65e6\u5f00\u59cb\uff0c\u5c31\u4e0d\u4f1a\u88ab\u5176\u4ed6\u7ebf\u7a0b\u5e72\u6270\u3002\u6240\u4ee5\uff0c\u6240\u8c13\u539f\u5b50\u7c7b\u8bf4\u7b80\u5355\u70b9\u5c31\u662f\u5177\u6709\u539f\u5b50/\u539f\u5b50\u64cd\u4f5c\u7279\u5f81\u7684\u7c7b\u3002\u5e76\u53d1\u5305  ",(0,n.kt)("inlineCode",{parentName:"p"},"java.util.concurrent"),"  \u7684\u539f\u5b50\u7c7b\u90fd\u5b58\u653e\u5728 ",(0,n.kt)("inlineCode",{parentName:"p"},"java.util.concurrent.atomic")," \u3002"),(0,n.kt)("p",null,"\u6839\u636e\u64cd\u4f5c\u7684\u6570\u636e\u7c7b\u578b\u53ef\u4ee5\u5206\u4e3a4\u7c7b\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"\u57fa\u672c\u7c7b\u578b")," ",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"AtomicInteger")," \u6574\u5f62\u539f\u5b50\u7c7b"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"AtomicLong"),"  \u957f\u6574\u578b\u539f\u5b50\u7c7b"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"AtomicBoolean")," \u5e03\u5c14\u578b\u539f\u5b50\u7c7b"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"LongAdder")," \u957f\u6574\u578b\u539f\u5b50\u7c7b \u2014 JDK8\u65b0\u589e"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"DoubleAdder"),"  double\u7c7b\u578b\u65b0\u589e \u2014 JDK8\u65b0\u589e"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"\u6570\u7ec4\u7c7b\u578b"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"AtomicIntegerArray")," \uff1a\u6574\u5f62\u6570\u7ec4\u539f\u5b50\u7c7b"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"AtomicLongArray"),"\uff1a\u957f\u6574\u5f62\u6570\u7ec4\u539f\u5b50\u7c7b"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"AtomicReferenceArray")," \uff1a\u5f15\u7528\u7c7b\u578b\u6570\u7ec4\u539f\u5b50\u7c7b"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"\u5f15\u7528\u7c7b\u578b"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"AtomicReference"),"\uff1a\u5f15\u7528\u7c7b\u578b\u539f\u5b50\u7c7b"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"AtomicStampedRerence"),"\uff1a\u539f\u5b50\u66f4\u65b0\u5f15\u7528\u7c7b\u578b\u91cc\u7684\u5b57\u6bb5\u539f\u5b50\u7c7b"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"AtomicMarkableReference")," \uff1a\u539f\u5b50\u66f4\u65b0\u5e26\u6709\u6807\u8bb0\u4f4d\u7684\u5f15\u7528\u7c7b\u578b"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"\u5bf9\u8c61\u7684\u5c5e\u6027\u4fee\u6539\u7c7b\u578b"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"AtomicIntegerFieldUpdater"),":\u539f\u5b50\u66f4\u65b0\u6574\u5f62\u5b57\u6bb5\u7684\u66f4\u65b0\u5668"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"AtomicLongFieldUpdater"),"\uff1a\u539f\u5b50\u66f4\u65b0\u957f\u6574\u5f62\u5b57\u6bb5\u7684\u66f4\u65b0\u5668"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"AtomicStampedReference")," \uff1a\u539f\u5b50\u66f4\u65b0\u5e26\u6709\u7248\u672c\u53f7\u7684\u5f15\u7528\u7c7b\u578b\u3002\u8be5\u7c7b\u5c06\u6574\u6570\u503c\u4e0e\u5f15\u7528\u5173\u8054\u8d77\u6765\uff0c\u53ef\u7528\u4e8e\u89e3\u51b3\u539f\u5b50\u7684\u66f4\u65b0\u6570\u636e\u548c\u6570\u636e\u7684\u7248\u672c\u53f7\uff0c\u53ef\u4ee5\u89e3\u51b3\u4f7f\u7528 CAS \u8fdb\u884c\u539f\u5b50\u66f4\u65b0\u65f6\u53ef\u80fd\u51fa\u73b0\u7684 ABA \u95ee\u9898\u3002")))))}s.isMDXComponent=!0}}]);