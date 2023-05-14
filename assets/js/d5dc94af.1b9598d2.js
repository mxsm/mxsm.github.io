"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[2892],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>v});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),i=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=i(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=i(a),d=n,v=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return a?r.createElement(v,s(s({ref:t},c),{},{components:a})):r.createElement(v,s({ref:t},c))}));function v(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:n,s[1]=p;for(var i=2;i<o;i++)s[i]=a[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},4613:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>i});var r=a(7462),n=(a(7294),a(3905));const o={title:"\u67e5\u770b\u7ebf\u7a0b\u7684CPU\u4f7f\u7528",date:new Date("2018-05-29T00:00:00.000Z")},s=void 0,p={unversionedId:"java/java-se/others/show-thread-use-cpu",id:"java/java-se/others/show-thread-use-cpu",title:"\u67e5\u770b\u7ebf\u7a0b\u7684CPU\u4f7f\u7528",description:"1 \u67e5\u770bJava\u7a0b\u5e8f\u8fd0\u884c\u7684\u8fdb\u7a0b\u53f7",source:"@site/docs/java/java-se/others/show-thread-use-cpu.md",sourceDirName:"java/java-se/others",slug:"/java/java-se/others/show-thread-use-cpu",permalink:"/docs/java/java-se/others/show-thread-use-cpu",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/java/java-se/others/show-thread-use-cpu.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1684027896,formattedLastUpdatedAt:"May 14, 2023",frontMatter:{title:"\u67e5\u770b\u7ebf\u7a0b\u7684CPU\u4f7f\u7528",date:"2018-05-29T00:00:00.000Z"},sidebar:"javase",previous:{title:"\u4e1a\u52a1\u5f00\u53d1\u4e2d\u5de7\u5999\u8fd0\u7528\u4f4d\u8fd0\u7b97",permalink:"/docs/java/java-se/others/operators"},next:{title:"\u5b57\u7b26\u4e32\u62fc\u63a5\u90a3\u4e9b\u4e8b",permalink:"/docs/java/java-se/others/string-concat"}},l={},i=[{value:"1 \u67e5\u770bJava\u7a0b\u5e8f\u8fd0\u884c\u7684\u8fdb\u7a0b\u53f7",id:"1-\u67e5\u770bjava\u7a0b\u5e8f\u8fd0\u884c\u7684\u8fdb\u7a0b\u53f7",level:4},{value:"2 \u67e5\u770bJava\u8fdb\u7a0b\u4e0b\u9762\u7684\u7ebf\u7a0b",id:"2-\u67e5\u770bjava\u8fdb\u7a0b\u4e0b\u9762\u7684\u7ebf\u7a0b",level:4},{value:"3 \u7528jstack\u547d\u4ee4\u67e5\u8be2",id:"3-\u7528jstack\u547d\u4ee4\u67e5\u8be2",level:4}],c={toc:i},u="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h4",{id:"1-\u67e5\u770bjava\u7a0b\u5e8f\u8fd0\u884c\u7684\u8fdb\u7a0b\u53f7"},"1 \u67e5\u770bJava\u7a0b\u5e8f\u8fd0\u884c\u7684\u8fdb\u7a0b\u53f7"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"jps\n\u6216\u8005\ntop \u547d\u4ee4\u67e5\u770b\n\u6216\u8005\nps -ef | grep java\n")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://github.com/mxsm/document/blob/master/image/JSE/%E7%BA%BF%E4%B8%8A%E6%9F%A5%E9%97%AE%E9%A2%98/jps%E5%91%BD%E4%BB%A4.jpg?raw=true",alt:"\u56fe\u89e3"})),(0,n.kt)("h4",{id:"2-\u67e5\u770bjava\u8fdb\u7a0b\u4e0b\u9762\u7684\u7ebf\u7a0b"},"2 \u67e5\u770bJava\u8fdb\u7a0b\u4e0b\u9762\u7684\u7ebf\u7a0b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"top  -p pid -H\n")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://github.com/mxsm/document/blob/master/image/JSE/%E7%BA%BF%E4%B8%8A%E6%9F%A5%E9%97%AE%E9%A2%98/%E6%9F%A5%E7%9C%8BJava%E8%BF%9B%E7%A8%8B%E4%B8%8B%E7%9A%84%E7%BA%BF%E7%A8%8B.jpg?raw=true",alt:"\u56fe"})),(0,n.kt)("h4",{id:"3-\u7528jstack\u547d\u4ee4\u67e5\u8be2"},"3 \u7528jstack\u547d\u4ee4\u67e5\u8be2"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"jstack pid | grep -A 10 \u7ebf\u7a0b\u7684Id\n")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://github.com/mxsm/document/blob/master/image/JSE/%E7%BA%BF%E4%B8%8A%E6%9F%A5%E9%97%AE%E9%A2%98/%E6%9F%A5%E7%9C%8Bjava%E7%BA%BF%E7%A8%8B%E7%9A%84%E6%83%85%E5%86%B5.jpg?raw=true",alt:"\u56fe"})),(0,n.kt)("p",null,"\u4ee5\u4e0a\u7684\u622a\u56fe\u90fd\u662f\u57fa\u4e8e\u963f\u91cc\u4e91\u7684ESC\u670d\u52a1\u5668\uff0c\u548c\u6709\u4e9b\u9700\u8981\u8f6c\u6362\u621016\u8fdb\u5236\u7684\u6709\u70b9\u4e0d\u4e00\u6837\u3002\u5927\u4f53\u7684\u89e3\u51b3\u601d\u8def\u662f\u4e00\u6837\u7684\u3002\u5206\u4e3a\u4e09\u6b65\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"\u83b7\u53d6\u9700\u8981\u5173\u6ce8\u7684Java\u5de5\u7a0b\u7684\u8fd0\u884cPID")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"\u67e5\u770b\u7528",(0,n.kt)("inlineCode",{parentName:"strong"},"top  -p pid -H"),"Java\u7ebf\u7a0b\u4e0b\u9762\u8fdb\u7a0b\u7684\u60c5\u51b5\uff0c\u4e3b\u8981\u5173\u6ce8CPU\u7684\u4f7f\u7528\u7387")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"\u7528",(0,n.kt)("inlineCode",{parentName:"strong"},"jstack pid | grep -A 10")," \u7ebf\u7a0b\u7684Id \u547d\u4ee4\u627e\u5230\u5bf9\u5e94\u7684\u5728Java\u4e2d\u7684\u4f4d\u7f6e"))))}m.isMDXComponent=!0}}]);