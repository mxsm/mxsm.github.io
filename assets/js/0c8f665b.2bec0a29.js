"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[5183],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>s});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var i=n.createContext({}),c=function(t){var e=n.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},u=function(t){var e=c(t.components);return n.createElement(i.Provider,{value:e},t.children)},k="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,i=t.parentName,u=p(t,["components","mdxType","originalType","parentName"]),k=c(a),d=r,s=k["".concat(i,".").concat(d)]||k[d]||m[d]||l;return a?n.createElement(s,o(o({ref:e},u),{},{components:a})):n.createElement(s,o({ref:e},u))}));function s(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=d;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=t,p[k]="string"==typeof t?t:r,o[1]=p;for(var c=2;c<l;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},7115:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>i,contentTitle:()=>o,default:()=>k,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const l={title:"LockSupport\u7528\u6cd5\u548c\u539f\u7406",linkTitle:"LockSupport\u7528\u6cd5\u548c\u539f\u7406",weight:1,date:new Date("2021-02-15T00:00:00.000Z")},o=void 0,p={unversionedId:"java/java-se/concurrencemultithreading/LockSupport",id:"java/java-se/concurrencemultithreading/LockSupport",title:"LockSupport\u7528\u6cd5\u548c\u539f\u7406",description:"1. \u524d\u8a00",source:"@site/docs/java/java-se/concurrencemultithreading/LockSupport.md",sourceDirName:"java/java-se/concurrencemultithreading",slug:"/java/java-se/concurrencemultithreading/LockSupport",permalink:"/docs/java/java-se/concurrencemultithreading/LockSupport",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/java/java-se/concurrencemultithreading/LockSupport.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1671958290,formattedLastUpdatedAt:"Dec 25, 2022",frontMatter:{title:"LockSupport\u7528\u6cd5\u548c\u539f\u7406",linkTitle:"LockSupport\u7528\u6cd5\u548c\u539f\u7406",weight:1,date:"2021-02-15T00:00:00.000Z"},sidebar:"javase",previous:{title:"JUC\u5305\u4e2d\u7684\u539f\u5b50\u7c7b",permalink:"/docs/java/java-se/concurrencemultithreading/JUC-atomic-class"},next:{title:"ThreadLocal\u6e90\u7801\u89e3\u6790",permalink:"/docs/java/java-se/concurrencemultithreading/ThreadLocal-source-analysis"}},i={},c=[{value:"1. \u524d\u8a00",id:"1-\u524d\u8a00",level:3},{value:"2. LockSupport\u7c7b",id:"2-locksupport\u7c7b",level:3},{value:"3. \u4ee3\u7801\u6f14\u793a",id:"3-\u4ee3\u7801\u6f14\u793a",level:3},{value:"3.1 park()",id:"31-park",level:4},{value:"3.2 park(Object blocker)",id:"32-parkobject-blocker",level:4},{value:"3.3 parkNanos(long nanos)",id:"33-parknanoslong-nanos",level:4},{value:"3.4 parkNanos(Object blocker, long nanos)",id:"34-parknanosobject-blocker-long-nanos",level:4},{value:"3.5 parkUntil(long deadline)",id:"35-parkuntillong-deadline",level:4},{value:"3.6 parkUntil(Object blocker, long deadline)",id:"36-parkuntilobject-blocker-long-deadline",level:4},{value:"4. \u5e26Object\u53c2\u6570\u548c\u6ca1\u6709\u7684\u533a\u522b",id:"4-\u5e26object\u53c2\u6570\u548c\u6ca1\u6709\u7684\u533a\u522b",level:3}],u={toc:c};function k(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"1-\u524d\u8a00"},"1. \u524d\u8a00"),(0,r.kt)("p",null,"\u5728AQS\u7684\u5e95\u5c42\u6211\u4eec\u4e86\u89e3\u4e86\u6574\u4e2aAQS\u7684\u5185\u90e8\u7ed3\u6784\uff0c\u4e0e\u5176\u72ec\u5360\u5f0f\u4e0e\u5171\u4eab\u5f0f\u83b7\u53d6\u540c\u6b65\u72b6\u6001\u7684\u5b9e\u73b0\u3002\u4f46\u662f\u5e76\u6ca1\u6709\u8be6\u7ec6\u63cf\u8ff0\u7ebf\u7a0b\u662f\u5982\u4f55\u8fdb\u884c\u963b\u585e\u4e0e\u5524\u9192\u7684\u3002\u6211\u4e5f\u63d0\u5230\u4e86\u7ebf\u7a0b\u7684\u8fd9\u4e9b\u64cd\u4f5c\u90fd\u4e0e",(0,r.kt)("inlineCode",{parentName:"p"},"LockSupport"),"\u5de5\u5177\u7c7b\u6709\u5173\u3002\u73b0\u5728\u6211\u4eec\u5c31\u4e00\u8d77\u6765\u63a2\u8ba8\u4e00\u4e0b\u8be5\u7c7b\u7684\u5177\u4f53\u5b9e\u73b0\u3002"),(0,r.kt)("h3",{id:"2-locksupport\u7c7b"},"2. LockSupport\u7c7b"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"LockSupport"))," \u9759\u6001\u65b9\u6cd5\u7c7b\uff0c\u4e0b\u9762\u963b\u585e\u7ebf\u7a0b\u548c\u5524\u9192\u7ebf\u7a0b\u5c06\u65b9\u6cd5\u5206\u4e3a\u4e24\u7c7b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"park-\u963b\u585e\u7ebf\u7a0b"),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u65b9\u6cd5"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"park()"),(0,r.kt)("td",{parentName:"tr",align:null},"\u963b\u585e\u5f53\u524d\u7ebf\u7a0b\uff0c\u5982\u679c\u8c03\u7528unpark\u65b9\u6cd5\u6216\u8005\u5f53\u524d\u7ebf\u7a0b\u88ab\u4e2d\u65ad\uff0c\u4ece\u80fd\u4ecepark()\u65b9\u6cd5\u4e2d\u8fd4\u56de")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"park(Object blocker)"),(0,r.kt)("td",{parentName:"tr",align:null},"\u963b\u585e\u5f53\u524d\u7ebf\u7a0b\u4e0epark()\u65b9\u6cd5\u4e00\u6837\u591a\u4e86\u4e00\u4e2aObject\u53c2\u6570\u3002\u7528\u6765\u8bb0\u5f55\u5bfc\u81f4\u7ebf\u7a0b\u963b\u585e\u7684\u963b\u585e\u5bf9\u8c61\uff0c\u65b9\u4fbf\u8fdb\u884c\u95ee\u9898\u6392\u67e5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"parkNanos(long nanos)"),(0,r.kt)("td",{parentName:"tr",align:null},"\u963b\u585e\u5f53\u524d\u7ebf\u7a0b\uff0c\u6700\u957f\u4e0d\u8d85\u8fc7nanos\u7eb3\u79d2\uff0c\u589e\u52a0\u4e86\u8d85\u65f6\u8fd4\u56de\u7684\u7279\u6027")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"parkNanos(Object blocker, long nanos)"),(0,r.kt)("td",{parentName:"tr",align:null},"\u529f\u80fd\u548cparkNanos(long nanos)\u4e00\u6837\u5165\u53c2\u589e\u52a0\u4e00\u4e2aObject\u5bf9\u8c61\uff0c\u7528\u6765\u8bb0\u5f55\u5bfc\u81f4\u7ebf\u7a0b\u963b\u585e\u7684\u963b\u585e\u5bf9\u8c61\uff0c",(0,r.kt)("br",null),"\u65b9\u4fbf\u8fdb\u884c\u95ee\u9898\u6392\u67e5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"parkUntil(long deadline)"),(0,r.kt)("td",{parentName:"tr",align:null},"\u963b\u585e\u5f53\u524d\u7ebf\u7a0b\uff0c\u76f4\u5230deadline")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"parkUntil(Object blocker, long deadline)"),(0,r.kt)("td",{parentName:"tr",align:null},"parkUntil(long deadline)\u529f\u80fd\u4e00\u6837\u5165\u53c2\u589e\u52a0\u4e00\u4e2aObject\u5bf9\u8c61\uff0c\u7528\u6765\u8bb0\u5f55\u5bfc\u81f4\u7ebf\u7a0b\u963b\u585e\u7684\u963b\u585e\u5bf9\u8c61\uff0c",(0,r.kt)("br",null),"\u65b9\u4fbf\u8fdb\u884c\u95ee\u9898\u6392\u67e5")))),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"\u4e0a\u9762\u516d\u4e2a\u65b9\u6cd5\u53c8\u53ef\u4ee5\u4e24\u4e24\u5206\u6210\u4e00\u7ec4\u5206\u6210\u4e09\u7ec4\uff1a"),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"park() \u548c park(Object blocker) --- \u65e0\u9650\u671f\u963b\u585e\u5f53\u524d\u7ebf\u7a0b"),(0,r.kt)("li",{parentName:"ul"},"parkNanos(long nanos)\u548cparkNanos(Object blocker, long nanos)  --- \u589e\u52a0\u6700\u957f\u4e0d\u8d85\u8fc7nanos\u65f6\u95f4\u7684\u963b\u585e"),(0,r.kt)("li",{parentName:"ul"},"parkUntil(long deadline)\u548cparkUntil(Object blocker, long deadline) -- \u589e\u52a0deadline\u7684\u65f6\u95f4\u963b\u585e")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"unpark-\u5524\u9192\u7ebf\u7a0b"),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u65b9\u6cd5"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"unpark(Thread thread)"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5524\u9192\u5904\u4e8e\u963b\u585e\u72b6\u6001\u7684\u6307\u5b9a\u7ebf\u7a0b")))))),(0,r.kt)("h3",{id:"3-\u4ee3\u7801\u6f14\u793a"},"3. \u4ee3\u7801\u6f14\u793a"),(0,r.kt)("p",null,"\u5bf9\u4e0a\u9762 \u65b9\u6cd5\u8fdb\u884c\u4ee3\u7801\u6f14\u793a\u3002"),(0,r.kt)("h4",{id:"31-park"},"3.1 park()"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/mxsm/picture/blob/main/java/concurrencemultithreading/park.gif?raw=true",alt:null})),(0,r.kt)("h4",{id:"32-parkobject-blocker"},"3.2 park(Object blocker)"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/mxsm/picture/blob/main/java/concurrencemultithreading/parkObject.gif?raw=true",alt:null})),(0,r.kt)("h4",{id:"33-parknanoslong-nanos"},"3.3 parkNanos(long nanos)"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/mxsm/picture/blob/main/java/concurrencemultithreading/parkNanos.gif?raw=true",alt:null})),(0,r.kt)("h4",{id:"34-parknanosobject-blocker-long-nanos"},"3.4 parkNanos(Object blocker, long nanos)"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/mxsm/picture/blob/main/java/concurrencemultithreading/parkNanosObject.gif?raw=true",alt:null})),(0,r.kt)("h4",{id:"35-parkuntillong-deadline"},"3.5 parkUntil(long deadline)"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/mxsm/picture/blob/main/java/concurrencemultithreading/parkUntil.gif?raw=true",alt:null})),(0,r.kt)("h4",{id:"36-parkuntilobject-blocker-long-deadline"},"3.6 parkUntil(Object blocker, long deadline)"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/mxsm/picture/blob/main/java/concurrencemultithreading/parkUntilObject.gif?raw=true",alt:null})),(0,r.kt)("h3",{id:"4-\u5e26object\u53c2\u6570\u548c\u6ca1\u6709\u7684\u533a\u522b"},"4. \u5e26Object\u53c2\u6570\u548c\u6ca1\u6709\u7684\u533a\u522b"),(0,r.kt)("p",null,"\u9996\u5148\u770b\u4e00\u4e0b\u4ee3\u7801\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/mxsm/picture/blob/main/java/concurrencemultithreading/parkdiff.png?raw=true",alt:null})),(0,r.kt)("p",null,"\u7136\u540e\u901a\u8fc7Java\u547d\u4ee4\u67e5\u770b\u533a\u522b"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/mxsm/picture/blob/main/java/concurrencemultithreading/parkConsule.png?raw=true",alt:null})))}k.isMDXComponent=!0}}]);