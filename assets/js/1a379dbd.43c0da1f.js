"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[8075],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>d});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),m=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},s=function(e){var t=m(e.components);return r.createElement(i.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},v=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=m(a),v=n,d=c["".concat(i,".").concat(v)]||c[v]||u[v]||l;return a?r.createElement(d,p(p({ref:t},s),{},{components:a})):r.createElement(d,p({ref:t},s))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,p=new Array(l);p[0]=v;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[c]="string"==typeof e?e:n,p[1]=o;for(var m=2;m<l;m++)p[m]=a[m];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}v.displayName="MDXCreateElement"},5084:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var r=a(7462),n=(a(7294),a(3905));const l={title:"JVM\u53c2\u6570",date:new Date("2018-06-19T00:00:00.000Z")},p=void 0,o={unversionedId:"java/java-se/JVM/jvm-paramters",id:"java/java-se/JVM/jvm-paramters",title:"JVM\u53c2\u6570",description:"1. \u53c2\u6570\u5206\u7c7b",source:"@site/docs/java/java-se/JVM/jvm-paramters.md",sourceDirName:"java/java-se/JVM",slug:"/java/java-se/JVM/jvm-paramters",permalink:"/docs/java/java-se/JVM/jvm-paramters",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/java/java-se/JVM/jvm-paramters.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1678517863,formattedLastUpdatedAt:"Mar 11, 2023",frontMatter:{title:"JVM\u53c2\u6570",date:"2018-06-19T00:00:00.000Z"},sidebar:"javase",previous:{title:"JVM\u7684\u5185\u5b58\u6a21\u578b",permalink:"/docs/java/java-se/JVM/jvm-memory-model"},next:{title:"\u7c7b\u52a0\u8f7d\u5668\u548c\u53cc\u4eb2\u59d4\u6d3e\u6a21\u578b",permalink:"/docs/java/java-se/JVM/parental-delegate-model"}},i={},m=[{value:"1. \u53c2\u6570\u5206\u7c7b",id:"1-\u53c2\u6570\u5206\u7c7b",level:3}],s={toc:m},c="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(c,(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"1-\u53c2\u6570\u5206\u7c7b"},"1. \u53c2\u6570\u5206\u7c7b"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u5176\u4e00\u662f\u6807\u51c6\u53c2\u6570\uff08-\uff09\uff0c\u6240\u6709\u7684JVM\u5b9e\u73b0\u90fd\u5fc5\u987b\u5b9e\u73b0\u8fd9\u4e9b\u53c2\u6570\u7684\u529f\u80fd\uff0c\u800c\u4e14\u5411\u540e\u517c\u5bb9\uff1b"),(0,n.kt)("p",{parentName:"li"},"\u8fd9\u7c7b\u9009\u9879\u7684\u529f\u80fd\u662f\u5f88\u7a33\u5b9a\u7684\uff0c\u5728\u540e\u7eed\u7248\u672c\u4e2d\u4e5f\u4e0d\u592a\u4f1a\u53d1\u751f\u53d8\u5316\u3002"),(0,n.kt)("p",{parentName:"li"},"\u8fd0\u884cjava\u6216\u8005 java -help \u53ef\u4ee5\u770b\u5230\u6240\u6709\u7684\u6807\u51c6\u9009\u9879\u3002"),(0,n.kt)("p",{parentName:"li"},"\u8bed\u6cd5\uff1a\u6240\u6709\u7684\u6807\u51c6\u9009\u9879\u90fd\u662f\u4ee5 - \u5f00\u5934\uff0c\u6bd4\u5982-version\uff0c-server\u7b49\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u5176\u4e8c\u662f\u975e\u6807\u51c6\u53c2\u6570\uff08-X\uff09\uff0c\u9ed8\u8ba4jvm\u5b9e\u73b0\u8fd9\u4e9b\u53c2\u6570\u7684\u529f\u80fd\uff0c\u4f46\u662f\u5e76\u4e0d\u4fdd\u8bc1\u6240\u6709jvm\u5b9e\u73b0\u90fd\u6ee1\u8db3\uff0c\u4e14\u4e0d\u4fdd\u8bc1\u5411\u540e\u517c\u5bb9\uff1b"),(0,n.kt)("p",{parentName:"li"},"\u8fd9\u7c7b\u9009\u9879\u7684\u529f\u80fd\u8fd8\u662f\u5f88\u7a33\u5b9a\uff0c\u4f46\u5b98\u65b9\u7684\u8bf4\u6cd5\u662f\u5b83\u4eec\u7684\u884c\u4e3a\u53ef\u80fd\u4f1a\u5728\u540e\u7eed\u7248\u672c\u4e2d\u6539\u53d8\uff0c\u4e5f\u6709\u53ef\u80fd\u4e0d\u5728\u540e\u7eed\u7248\u672c\u4e2d\u63d0\u4f9b\u4e86."),(0,n.kt)("p",{parentName:"li"},"\u8fd0\u884c \u547d\u4ee4\u53ef\u4ee5\u770b\u5230\u6240\u6709\u7684X\u9009\u9879\u3002"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"java -X\n")),(0,n.kt)("p",{parentName:"li"},"\u8bed\u6cd5\uff1a\u8fd9\u7c7b\u9009\u9879\u90fd\u662f\u4ee5 -X \u5f00\u5934\uff0c\u6bd4\u5982-Xms\u3002"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u5176\u4e09\u662f\u975eStable\u53c2\u6570\uff08-XX\uff09\uff0c\u6b64\u7c7b\u53c2\u6570\u5404\u4e2ajvm\u5b9e\u73b0\u4f1a\u6709\u6240\u4e0d\u540c\uff0c\u5c06\u6765\u53ef\u80fd\u4f1a\u968f\u65f6\u53d6\u6d88\uff0c\u9700\u8981\u614e\u91cd\u4f7f\u7528\uff1b"),(0,n.kt)("p",{parentName:"li"},"\u8fd9\u7c7b\u9009\u9879\u662f\u5c5e\u4e8e\u5b9e\u9a8c\u6027\uff0c\u4e3b\u8981\u662f\u7ed9JVM\u5f00\u53d1\u8005\u7528\u4e8e\u5f00\u53d1\u548c\u8c03\u8bd5JVM\u7684\uff0c\u5728\u540e\u7eed\u7684\u7248\u672c\u4e2d\u884c\u4e3a\u6709\u53ef\u80fd\u4f1a\u53d8\u5316\u3002 "),(0,n.kt)("p",{parentName:"li"},"\u8bed\u6cd5\uff1a"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5982\u679c\u662f\u5e03\u5c14\u7c7b\u578b\u7684\u9009\u9879\uff0c\u5b83\u7684\u683c\u5f0f\u4e3a-XX:+flag\u6216\u8005-XX:-flag\uff0c\u5206\u522b\u8868\u793a\u5f00\u542f\u548c\u5173\u95ed\u8be5\u9009\u9879\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u9488\u5bf9\u975e\u5e03\u5c14\u7c7b\u578b\u7684\u9009\u9879\uff0c\u5b83\u7684\u683c\u5f0f\u4e3a-XX:flag=value")),(0,n.kt)("p",{parentName:"li"},"\u67e5\u770b\u547d\u4ee4\uff1a"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"java -XX:+PrintFlagsInitial\n")))))}u.isMDXComponent=!0}}]);