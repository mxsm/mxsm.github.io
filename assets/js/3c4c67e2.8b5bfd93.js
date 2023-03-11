"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[4139],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),i=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=i(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=i(r),d=o,f=m["".concat(l,".").concat(d)]||m[d]||s[d]||a;return r?n.createElement(f,c(c({ref:t},u),{},{components:r})):n.createElement(f,c({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[m]="string"==typeof e?e:o,c[1]=p;for(var i=2;i<a;i++)c[i]=r[i];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6503:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>s,frontMatter:()=>a,metadata:()=>p,toc:()=>i});var n=r(7462),o=(r(7294),r(3905));const a={title:"Producer",date:new Date("2019-01-19T00:00:00.000Z")},c=void 0,p={unversionedId:"rocketmq/rocketmq4/producer/Producer",id:"rocketmq/rocketmq4/producer/Producer",title:"Producer",description:"1. \u6d88\u606f\u53d1\u9001\u7684\u57fa\u672c\u6d41\u7a0b",source:"@site/docs/rocketmq/rocketmq4/producer/Producer.md",sourceDirName:"rocketmq/rocketmq4/producer",slug:"/rocketmq/rocketmq4/producer/",permalink:"/docs/rocketmq/rocketmq4/producer/",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/rocketmq/rocketmq4/producer/Producer.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1678517863,formattedLastUpdatedAt:"Mar 11, 2023",frontMatter:{title:"Producer",date:"2019-01-19T00:00:00.000Z"},sidebar:"rocketmq4",previous:{title:"RocketMQ\u6e90\u7801\u89e3\u6790-RocketMQ\u987a\u5e8f\u6d88\u606f\u7684\u6295\u9012\u4e0e\u6d88\u8d39",permalink:"/docs/rocketmq/rocketmq4/consumer/RocketMQ-analysis-ordermessage-consume"},next:{title:"RocketMQ\u6e90\u7801\u89e3\u6790-producer\u53d1\u9001\u6d88\u606f\u7684\u6d41\u7a0b",permalink:"/docs/rocketmq/rocketmq4/producer/RocketMQ-analysis-producer-messagesend"}},l={},i=[{value:"1. \u6d88\u606f\u53d1\u9001\u7684\u57fa\u672c\u6d41\u7a0b",id:"1-\u6d88\u606f\u53d1\u9001\u7684\u57fa\u672c\u6d41\u7a0b",level:3},{value:"2. \u603b\u7ed3",id:"2-\u603b\u7ed3",level:3}],u={toc:i},m="wrapper";function s(e){let{components:t,...r}=e;return(0,o.kt)(m,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"1-\u6d88\u606f\u53d1\u9001\u7684\u57fa\u672c\u6d41\u7a0b"},"1. \u6d88\u606f\u53d1\u9001\u7684\u57fa\u672c\u6d41\u7a0b"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"\u6d88\u606f\u7684\u9a8c\u8bc1")),(0,o.kt)("p",{parentName:"li"},"\u4e3b\u9898\u540d\u79f0 \u3001 \u6d88\u606f\u4f53\u4e0d\u80fd\u4e3a\u7a7a \u3001 \u6d88\u606f\u957f\u5ea6\u4e0d\u80fd\u7b49\u4e8e 0\u4e14\u9ed8\u8ba4\u4e0d\u80fd\u8d85\u8fc7\u5141\u8bb8\u53d1\u9001\u6d88\u606f\u7684\u6700\u5927\u957f\u5ea6 4M \u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"\u67e5\u627e\u8def\u7531")),(0,o.kt)("p",{parentName:"li"},"\u53d1\u9001\u524d\u83b7\u53d6\u8def\u7531\u4fe1\u606f\uff0c\u5982\u679c\u751f\u4ea7\u8005\u672c\u5730\u7f13\u5b58\u4e86\u8def\u7531\u4fe1\u606f\u76f4\u63a5\u83b7\u53d6\u8fd4\u56de\u3002\u5982\u679c\u6ca1\u6709\u672c\u5730\u7f13\u5b58\u5219\u60f3NameServer\u67e5\u8be2topic\u7684\u8def\u7531\u4fe1\u606f\u3002\u5982\u679c\u6700\u7ec8\u6ca1\u80fd\u627e\u5230\u8def\u7531\u4fe1\u606f\u5219\u629b\u51fa\u5f02\u5e38\u3002"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u9996\u5148\u6839\u636e\u8bbe\u7f6e\u5224\u65ad\u662f\u5426\u7528\u9ed8\u8ba4\u4e3b\u9898\u53bb\u67e5\u8be2\uff0c\u5982\u679c\u9ed8\u8ba4\u4e3b\u9898\u67e5\u8be2\u5230\u8def\u7531\u4fe1\u606f\u5219\u66ff\u6362\u8def\u7531\u4fe1\u606f\u4e2d\u8bfb\u5199\u961f\u5217\u4e2a\u6570\u4e3a\u6d88\u606f\u751f\u4ea7\u8005\u9ed8\u8ba4\u7684\u961f\u5217\u4e2a\u6570( defaultTopicQueueNums);\u5982\u679cisDefault\u4e3a false\uff0c\u5219\u4f7f\u7528\u53c2\u6570 topic\u53bb\u67e5\u8be2;\u5982\u679c\u672a\u67e5\u8be2\u5230\u8def\u7531\u4fe1\u606f\uff0c\u5219\u8fd4\u56de false\uff0c\u8868\u793a\u8def\u7531\u4fe1\u606f\u672a\u53d8\u5316 \u3002"),(0,o.kt)("li",{parentName:"ul"},"\u5982\u679c\u8def\u7531\u4fe1\u606f\u627e\u5230\uff0c\u4e0e\u672c\u5730\u7f13\u5b58\u4e2d\u7684\u8def\u7531\u4fe1\u606f\u8fdb\u884c\u5bf9\u6bd4\uff0c\u5224\u65ad\u8def\u7531\u4fe1\u606f\u662f\u5426\u53d1\u751f \u4e86\u6539\u53d8\uff0c \u5982\u679c\u672a\u53d1\u751f\u53d8\u5316\uff0c\u5219\u76f4\u63a5\u8fd4\u56de false\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u5c06\u4fe1\u606f\u8f6c\u6362\u4e3a\u672c\u5730"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"\u6d88\u606f\u53d1\u9001")))),(0,o.kt)("h3",{id:"2-\u603b\u7ed3"},"2. \u603b\u7ed3"))}s.isMDXComponent=!0}}]);