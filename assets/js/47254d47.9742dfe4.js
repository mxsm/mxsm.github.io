"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[7019],{3905:(e,t,r)=>{r.d(t,{Zo:()=>k,kt:()=>g});var o=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=o.createContext({}),p=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):m(m({},t),e)),r},k=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,k=i(e,["components","mdxType","originalType","parentName"]),s=p(r),c=a,g=s["".concat(l,".").concat(c)]||s[c]||u[c]||n;return r?o.createElement(g,m(m({ref:t},k),{},{components:r})):o.createElement(g,m({ref:t},k))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,m=new Array(n);m[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[s]="string"==typeof e?e:a,m[1]=i;for(var p=2;p<n;p++)m[p]=r[p];return o.createElement.apply(null,m)}return o.createElement.apply(null,r)}c.displayName="MDXCreateElement"},891:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>m,default:()=>u,frontMatter:()=>n,metadata:()=>i,toc:()=>p});var o=r(7462),a=(r(7294),r(3905));const n={title:"RocketMQ5.0-CommitLog\u8bbe\u8ba1\u4e0e\u6e90\u7801\u89e3\u6790",linkTitle:"RocketMQ55.0-CommitLog\u8bbe\u8ba1\u4e0e\u6e90\u7801\u89e3\u6790",date:new Date("2022-09-10T00:00:00.000Z"),weight:202209101745},m=void 0,i={unversionedId:"rocketmq/rocketmq5/broker/store/CommitLog",id:"rocketmq/rocketmq5/broker/store/CommitLog",title:"RocketMQ5.0-CommitLog\u8bbe\u8ba1\u4e0e\u6e90\u7801\u89e3\u6790",description:"RocketMQ4.x\u8bbeRocketMQ5.0\u5728CommitLog\u7684\u8bbe\u8ba1\u4e0a\u9762\u57fa\u672c\u4e0a\u6ca1\u6709\u592a\u591a\u8c03\u6574\uff0c\u8fd8\u662f\u6cbf\u7528\u4e86\u4e4b\u524d\u7684\u8bbe\u8ba1\u3002\u4e0b\u9762\u6765\u5bf9CommitLog\u7684\u8bbe\u8ba1\u601d\u60f3\u548c\u6e90\u7801\u8fdb\u884c\u5206\u6790\u3002",source:"@site/docs/rocketmq/rocketmq5/04-broker/store/CommitLog.md",sourceDirName:"rocketmq/rocketmq5/04-broker/store",slug:"/rocketmq/rocketmq5/broker/store/CommitLog",permalink:"/docs/rocketmq/rocketmq5/broker/store/CommitLog",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/rocketmq/rocketmq5/04-broker/store/CommitLog.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1684027896,formattedLastUpdatedAt:"May 14, 2023",frontMatter:{title:"RocketMQ5.0-CommitLog\u8bbe\u8ba1\u4e0e\u6e90\u7801\u89e3\u6790",linkTitle:"RocketMQ55.0-CommitLog\u8bbe\u8ba1\u4e0e\u6e90\u7801\u89e3\u6790",date:"2022-09-10T00:00:00.000Z",weight:202209101745},sidebar:"rocketmq5",previous:{title:"AutoSwitchHAService-source-code-analysis",permalink:"/docs/rocketmq/rocketmq5/broker/store/AutoSwitchHAService-source-code-analysis"},next:{title:"DLedger Controller\u6a21\u5f0f\u4e0bBroker\u6587\u4ef6\u622a\u65ad",permalink:"/docs/rocketmq/rocketmq5/broker/store/dledger-controller-truncate"}},l={},p=[{value:"1. CommitLog\u793a\u610f\u56fe",id:"1-commitlog\u793a\u610f\u56fe",level:3},{value:"2. MappedFileQueue",id:"2-mappedfilequeue",level:3},{value:"2.1 MappedFile",id:"21-mappedfile",level:4},{value:"3. CommitLog\u6d88\u606f\u5904\u7406\u6d41\u7a0b",id:"3-commitlog\u6d88\u606f\u5904\u7406\u6d41\u7a0b",level:3},{value:"3.1 \u6d88\u606f\u6821\u9a8c",id:"31-\u6d88\u606f\u6821\u9a8c",level:4},{value:"3.2 \u6d88\u606f\u5904\u7406",id:"32-\u6d88\u606f\u5904\u7406",level:4},{value:"4. \u5237\u76d8\u89e3\u6790",id:"4-\u5237\u76d8\u89e3\u6790",level:3},{value:"4.1 \u540c\u6b65\u5237\u76d8\u89e3\u6790",id:"41-\u540c\u6b65\u5237\u76d8\u89e3\u6790",level:4},{value:"4.2 \u5f02\u6b65\u5237\u76d8\u89e3\u6790",id:"42-\u5f02\u6b65\u5237\u76d8\u89e3\u6790",level:4},{value:"5. \u603b\u7ed3",id:"5-\u603b\u7ed3",level:3}],k={toc:p},s="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(s,(0,o.Z)({},k,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"RocketMQ4.x\u8bbeRocketMQ5.0\u5728CommitLog\u7684\u8bbe\u8ba1\u4e0a\u9762\u57fa\u672c\u4e0a\u6ca1\u6709\u592a\u591a\u8c03\u6574\uff0c\u8fd8\u662f\u6cbf\u7528\u4e86\u4e4b\u524d\u7684\u8bbe\u8ba1\u3002\u4e0b\u9762\u6765\u5bf9CommitLog\u7684\u8bbe\u8ba1\u601d\u60f3\u548c\u6e90\u7801\u8fdb\u884c\u5206\u6790\u3002"),(0,a.kt)("h3",{id:"1-commitlog\u793a\u610f\u56fe"},"1. CommitLog\u793a\u610f\u56fe"),(0,a.kt)("p",null,"CommitLog\u662f\u5bf9RocketMQ\u7684\u5b58\u50a8\u7684\u62bd\u8c61\uff0c\u793a\u610f\u56fe\u5982\u4e0b\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/rocketmq5/store/commitlog/CommitLog%E7%A4%BA%E6%84%8F%E5%9B%BE.png",alt:"CommitLog\u793a\u610f\u56fe"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"CommitLog"))," \u4e3b\u8981\u7531\u51e0\u90e8\u5206\u7ec4\u6210\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"MappedFileQueue\uff1a")," \u4e3b\u8981\u7528\u6765\u64cd\u4f5c\u76f8\u5173\u6570\u636e\u5b58\u50a8\u6587\u4ef6\u3002\u5c06\u4e00\u7cfb\u5217\u7684MappedFile\u62bd\u8c61\u6210\u4e00\u4e2a\u961f\u5217\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"FlushManager\uff1a")," \u6570\u636e\u843d\u5730\u78c1\u76d8\u7684\u7ba1\u7406\uff0c\u4e3b\u8981\u5206\u4e3a\u4e24\u7c7b\uff1a\u5b9e\u65f6\u6570\u636e\u5237\u76d8(FlushRealTimeService),\u4ee5\u53ca\u5f02\u6b65\u5237\u76d8(GroupCommitService)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"FlushDiskWatcher\uff1a")," \u5237\u76d8\u89c2\u5bdf\u8005\uff0c\u5904\u7406\u961f\u5217\u4e2d\u7684\u5237\u76d8\u8bf7\u6c42\uff0c\u5bf9\u4e8e\u89c4\u5b9a\u65f6\u95f4\u5185\u6ca1\u6709\u5237\u76d8\u6210\u529f\u7684\u8fdb\u884c\u5904\u7406\u3002")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Tips: \u591a\u76ee\u5f55\u5b58\u50a8\u53c2\u7167",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/rocketmq/wiki/RIP-7-Multiple-Directories-Storage-Support"},"RIP-7"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"CommitLog"))," \u5e95\u5c42\u4e3b\u8981\u662f\u901a\u8fc7FileChannel\u6765\u5b9e\u73b0\u3002\u5176\u4e2d\u8fd8\u6709\u4e00\u4e9bRocketMQ\u7684\u81ea\u8eab\u4f18\u5316\uff0c\u4f8b\u5982\uff1a TransientStorePool\u3002"),(0,a.kt)("h3",{id:"2-mappedfilequeue"},"2. MappedFileQueue"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"MappedFileQueue"))," \u662f\u5bf9\u6570\u636e\u5b58\u50a8\u6587\u4ef6\u7684\u4e00\u4e2a\u62bd\u8c61\uff0c\u5c06\u591a\u4e2a\u6570\u636e\u6587\u4ef6\u62bd\u8c61\u6210\u4e3a\u4e00\u4e2a\u6587\u4ef6\u961f\u5217\u3002\u901a\u8fc7\u8fd9\u4e2a\u6587\u4ef6\u961f\u5217\u5bf9\u6587\u4ef6\u8fdb\u884c\u64cd\u4f5c\u64cd\u4f5c\u3002\u540c\u65f6\u4fdd\u5b58\u4e00\u4e9b ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"CommitLog"))," \u7684\u5c5e\u6027\u3002\u6765\u770b\u4e00\u4e0bMappedFileQueue\u4e2d\u7684\u51e0\u4e2a\u91cd\u8981\u7684\u5c5e\u6027\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"storePath\uff1a")," \u6570\u636e\u6587\u4ef6\u5b58\u50a8\u7684\u4f4d\u7f6e"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"mappedFileSize\uff1a")," \u5355\u4e2a\u6570\u636e\u6587\u4ef6\u7684\u5927\u5c0f"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"mappedFiles\uff1a")," \u6570\u636e\u6587\u4ef6\u5217\u8868"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"allocateMappedFileService\uff1a")," \u5206\u914d\u6587\u4ef6\u670d\u52a1"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"flushedWhere"),"\uff1a \u5f53\u524d\u5237\u76d8\u6307\u9488\uff0c\u8868\u793a\u8be5\u6307\u9488\u4e4b\u524d\u6240\u6709\u7684\u6570\u636e\u5168\u90e8\u6301\u4e45\u5316\u5230\u4e86\u786c\u76d8\u4e0a\u9762")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"committedWhere")," \uff1a\u5f53\u524d\u6570\u636e\u63d0\u4ea4\u6307\u9488\uff0c\u5185\u5b58\u4e2dbyteBuffer\u5f53\u524d\u7684\u5199\u6307\u9488\uff0c\u8be5\u503c\u5927\u4e8e\u7b49\u4e8eflushedWhere"))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Tips: \u540c\u6b65\u5237\u76d8\u7684\u8fc7\u7a0b\u4e2dflushedWhere\u7b49\u4e8ecommittedWhere")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"MappedFileQueue"))," \u540c\u65f6\u63d0\u4f9b\u4e86\u4e00\u4e9b\u64cd\u4f5c\u4f8b\u5982\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5237\u65b0\u6587\u4ef6(\u66f4\u65b0flushedWhere) MappedFileQueue#flush"),(0,a.kt)("li",{parentName:"ul"},"\u63d0\u4ea4\u6587\u4ef6(\u66f4\u65b0committedWhere)MappedFileQueue#commit"),(0,a.kt)("li",{parentName:"ul"},"\u4ee5\u53ca\u4e00\u4e9b\u6587\u4ef6\u7684\u64cd\u4f5c\uff0c\u83b7\u53d6\u6700\u65b0\u6587\u4ef6\u548c\u7b2c\u4e00\u4e2a\u6587\u4ef6\u7b49\u7b49\u3002")),(0,a.kt)("h4",{id:"21-mappedfile"},"2.1 MappedFile"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"MappedFile"))," \u662f\u5bf9\u6587\u4ef6\u7684\u62bd\u8c61\uff0c\u5305\u542b\u4e86\u5bf9RocketMQ\u6570\u636e\u6587\u4ef6\u7684\u6574\u4e2a\u64cd\u4f5c\u3002\u4f8b\u5982\u83b7\u53d6\u6587\u4ef6\u540d\u79f0\u3001\u6587\u4ef6\u5927\u5c0f\u3001\u5224\u65ad\u6587\u4ef6\u662f\u5426\u53ef\u7528\u3001\u662f\u5426\u5df2\u7ecf\u6ee1\u4e86\u7b49\u7b49\u7684\u64cd\u4f5c\u3002"),(0,a.kt)("p",null,"\u5355\u4e2a\u6570\u636e\u6587\u4ef6\u9ed8\u8ba4\u662f ",(0,a.kt)("strong",{parentName:"p"},"1G")," \u3002\u7136\u540e\u6309\u7167\u987a\u5e8f\u5b58\u50a8Producer\u53d1\u9001\u7684\u6d88\u606f\u3002\u6570\u636e\u683c\u5f0f\u5982\u4e0b\u56fe\u6240\u793a\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/rocketmq5/store/commitlog/RocketMQ%20%E6%B6%88%E6%81%AF%E6%95%B0%E6%8D%AE%E6%A0%BC%E5%BC%8F.png",alt:"RocketMQ \u6d88\u606f\u6570\u636e\u683c\u5f0f"})),(0,a.kt)("p",null,"\u6570\u636e\u6587\u4ef6\u5c31\u662f\u7531\u4e0a\u56fe\u6240\u793a\u7684\u4e00\u6761\u6761\u7684\u6570\u636e\u7ec4\u6210\u3002\u901a\u8fc7\u89c2\u5bdf\u4f60\u53ef\u80fd\u4f1a\u53d1\u73b0\u5b58\u50a8Topic\u7684\u957f\u5ea6\u53ea\u5360\u7528\u4e86\u4e00\u4e2a\u5b57\u8282\u3002\u8fd9\u4e2a\u4e5f\u662f\u5728\u4f7f\u7528RocketMQ\u9700\u8981\u6ce8\u610f\u7684\u4e00\u70b9\u5c31\u662f\uff1a"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"\u7531\u4e8e\u53ea\u7528\u4e86\u4e00\u4e2a\u5b57\u8282\u4fdd\u5b58Topic\u7684\u957f\u5ea6\u6240\u4ee5Topic\u7684\u6700\u5927\u957f\u5ea6\u662f127\u5b57\u7b26,\u5982\u679c\u4f7f\u7528\u4e2d\u6587\u957f\u5ea6\u4f1a\u66f4\u77ed\u3002"))," \u5728RocketMQ5.0\u7684\u7248\u672c\u4e2d\u589e\u52a0 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"PutMessageHook"))," \u4f1a\u5728Put Message\u4e4b\u524d\u53bbCheck\u4e00\u4e9b\u5fc5\u8981\u7684\u6570\u636e\u548c\u53c2\u6570\u3002\u4f8b\u5982Topic\u7684\u957f\u5ea6\u5c31\u5176\u4e2d\u4e4b\u4e00\u3002\u5177\u4f53\u53ef\u4ee5\u53c2\u7167 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"HookUtils"))," \u5de5\u5177\u7c7b\u3002"),(0,a.kt)("h3",{id:"3-commitlog\u6d88\u606f\u5904\u7406\u6d41\u7a0b"},"3. CommitLog\u6d88\u606f\u5904\u7406\u6d41\u7a0b"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/rocketmq5/store/commitlog/CommitLog%E5%B7%A5%E4%BD%9C%E6%B5%81%E7%A8%8B.png",alt:"CommitLog\u5de5\u4f5c\u6d41\u7a0b"})),(0,a.kt)("h4",{id:"31-\u6d88\u606f\u6821\u9a8c"},"3.1 \u6d88\u606f\u6821\u9a8c"),(0,a.kt)("p",null,"\u751f\u4ea7\u8005\u53d1\u9001\u6d88\u606f\u5230 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Broker Master"))," \u540e\uff0c\u5728\u5b58\u5165 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"CommitLog"))," \u4e4b\u524d\u9996\u5148\u4f1a\u7ecf\u8fc7\u4e00\u4e2a ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"PutMessageHook"))," \u7684\u5904\u7406\u63a5\u53e3\u7c7b\uff0c\u8fd9\u4e2a\u6709\u4e0d\u540c\u7684\u5b9e\u73b0\uff0c\u4e3b\u8981\u7528\u4e8e\u6821\u9a8c\u4e00\u4e9b\u6d88\u606f\u7684\u6570\u636e\u5982\uff1aMessage Topic \u5927\u5c0f\u3001Message Body\u5927\u5c0f\u3001\u4ee5\u53caMessageStore\u7684\u4e00\u4e9b\u72b6\u6001\u7b49\u7b49\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Tips: \u901a\u8fc7\u5b9e\u73b0PutMessageHook\u53ef\u4ee5\u505a\u5230\u66f4\u591a\u6821\u9a8c\u4ee5\u53ca\u4e00\u4e9b\u5176\u4ed6\u7684\u4e8b\u60c5\u3002")),(0,a.kt)("h4",{id:"32-\u6d88\u606f\u5904\u7406"},"3.2 \u6d88\u606f\u5904\u7406"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"CommitLog#asyncPutMessage"))," \u5728CommitLog\u6709\u4e24\u4e2a\u5206\u522b\u7528\u6765\u5904\u7406\u5355\u4e2a\u6d88\u606f\u548c\u6279\u91cf\u6d88\u606f\u3002\u4e0b\u9762\u4ee5\u5355\u4e2a\u6d88\u606f\u5904\u7406\u4e3a\u4f8b"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\u6d88\u606f\u7684\u4e00\u4e9b\u5c5e\u6027\u8bbe\u7f6e")),(0,a.kt)("p",{parentName:"li"},"\u6d88\u606f\u4f53\u7684CRC\u3001\u8bbe\u7f6e\u6d88\u606f\u751f\u4ea7\u8005\u7684IP\u5730\u5740\u662f\u5426\u4e3aIPV6\u3001\u8bbe\u7f6e\u5b58\u50a8Broker IP\u5730\u5740\u662f\u5426\u4e3aIPV6")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"HA\u5904\u7406\u8bbe\u7f6e")),(0,a.kt)("p",{parentName:"li"},"\u6839\u636e\u670d\u52a1\u7684\u8bbe\u7f6e\u5224\u65ad\u662f\u5426\u9700\u8981\u5904\u7406HA. RocketMQ5.0 HA\u6709\u4e24\u79cd\u6a21\u5f0f\uff1a"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Controller Model\u6a21\u5f0f\uff1a")," DLedger\u6a21\u5f0f\u7684\u8fdb\u9636\u7248\u672c\uff0c\u5bf9\u539f\u6709\u7684DLedger\u6a21\u5f0f\u8fdb\u884c\u4f18\u5316"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"SlaveActingMaster\u6a21\u5f0f"))),(0,a.kt)("p",{parentName:"li"},"\u8fd9\u4e24\u4e2a\u6a21\u5f0f\u4e3b\u8981\u76ee\u7684\u662f\u6839\u636e\u8fd4\u56deACK\u7684Slave\u6570\u91cf\u6765\u5224\u65ad\u6d88\u606f\u662f\u5426\u540c\u6b65\u5230Slave\u6210\u529f")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Append Message \u5230 MappedByteBuffer"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\u5904\u7406Append\u7684Result"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\u6839\u636eBroker\u7684\u914d\u7f6e\u8fdb\u884c\u5237\u76d8")),(0,a.kt)("p",{parentName:"li"},"\u5237\u76d8\u662f\u6839\u636e\u5728\u542f\u52a8Broker\u7684\u65f6\u5019\u914d\u7f6e\u7684\u5237\u76d8\u6a21\u5f0f\u8fdb\u884c\u4e0d\u540c\u7684\u5237\u76d8\u7b56\u7565\u3002"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"SYNC_FLUSH\uff1a")," GroupCommitService\u7ebf\u7a0b\u8fdb\u884c\u5b9e\u65f6\u5237\u76d8"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"ASYNC_FLUSH\uff1a")," FlushRealTimeService\u7ebf\u7a0b\u8fdb\u884c\u5f02\u6b65\u5237\u76d8"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\u5904\u7406HA")),(0,a.kt)("p",{parentName:"li"},"HA\u7684\u5904\u7406\u4e0d\u662f\u5fc5\u987b\u7684\uff0c\u8fd9\u4e2a\u770bRocketMQ\u662f\u5426\u914d\u7f6e\u4e86HA\u6a21\u5f0f\u3002\u53ea\u6709\u914d\u7f6e\u4e86\u624d\u9700\u8981\u8fdb\u884c\u5904\u7406\u3002"))),(0,a.kt)("h3",{id:"4-\u5237\u76d8\u89e3\u6790"},"4. \u5237\u76d8\u89e3\u6790"),(0,a.kt)("p",null,"\u5237\u76d8\u4e3b\u8981\u6709\u4e24\u79cd\u6a21\u5f0f\uff1a\u540c\u6b65\u5237\u76d8\u548c\u5f02\u6b65\u5237\u76d8\u3002\u5237\u76d8\u4e3b\u8981\u7531 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"FlushManager"))," \u8fdb\u884c\u7ba1\u7406\u3002\u5237\u76d8\u63a5\u53e3\u5173\u7cfb\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/rocketmq5/store/commitlog/%E5%88%B7%E7%9B%98%E6%8E%A5%E5%8F%A3%E5%85%B3%E7%B3%BB%E5%9B%BE.png",alt:"\u5237\u76d8\u63a5\u53e3\u5173\u7cfb\u56fe"})),(0,a.kt)("h4",{id:"41-\u540c\u6b65\u5237\u76d8\u89e3\u6790"},"4.1 \u540c\u6b65\u5237\u76d8\u89e3\u6790"),(0,a.kt)("p",null,"\u540c\u6b65\u5237\u76d8\u662f\u7531 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"GroupCommitService"))," \u6765\u5904\u7406\uff0c\u540c\u6b65\u5237\u76d8\u7684\u8be6\u7ec6\u6d41\u7a0b\u5982\u4e0b\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/rocketmq5/store/commitlog/%E5%90%8C%E6%AD%A5%E5%88%B7%E7%9B%98%E7%9A%84%E8%AF%A6%E7%BB%86%E6%B5%81%E7%A8%8B.png",alt:"\u540c\u6b65\u5237\u76d8\u7684\u8be6\u7ec6\u6d41\u7a0b"})),(0,a.kt)("p",null,"\u5728\u5237\u76d8\u8fc7\u7a0b\u4e2d\u4f7f\u7528\u5230\u7684\u4e24\u4e2a\u7c7b\uff1a",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"GroupCommitService"))," \u548c ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"FlushDiskWatcher"))," \u4ece\u672c\u8d28\u4e0a\u770b\u90fd\u662f\u4e00\u4e2aThread\u3002"),(0,a.kt)("p",null,"GroupCommitService\u5904\u7406\u4e3b\u8981\u5206\u4e3a\u4e09\u6b65\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5f80\u94fe\u8868\u4e2d\u5199\u5165GroupCommitRequest\u8bf7\u6c42"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/rocketmq5/store/commitlog/image-20220912140817889.png",alt:"image-20220912140817889"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"GroupCommitService\u6267\u884cdoCommit\u65b9\u6cd5"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/rocketmq5/store/commitlog/image-20220912140929356.png",alt:"image-20220912140929356"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u6267\u884c\u5237\u76d8\u64cd\u4f5c\uff0c\u5c06\u7ed3\u679c\u5199\u5165GroupCommitRequest"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/rocketmq5/store/commitlog/image-20220912141357835.png",alt:"image-20220912141357835"})))),(0,a.kt)("p",null,"\u5230\u8fd9\u91cc\u5c31\u5df2\u7ecf\u57fa\u672c\u4e0a\u5b8c\u6210\u6574\u4e2a\u540c\u6b65\u7684\u5237\u76d8\u6b65\u9aa4\u3002\u7ec6\u5fc3\u7684\u53ef\u80fd\u4f1a\u53d1\u73b0\u8fd8\u6709\u4e00\u4e2a ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"FlushDiskWatcher"))," \u8fd9\u4e2a\u7c7b\u3002\u5b83\u7684\u529f\u80fd\u4e3b\u8981\u662f\uff1a\u5904\u7406\u5728\u89c4\u5b9a\u65f6\u95f4\u5185\u8fd8\u6ca1\u6709\u5237\u76d8\u6210\u529f\u7684\u8bf7\u6c42\u3002"),(0,a.kt)("h4",{id:"42-\u5f02\u6b65\u5237\u76d8\u89e3\u6790"},"4.2 \u5f02\u6b65\u5237\u76d8\u89e3\u6790"),(0,a.kt)("p",null,"\u5f02\u6b65\u5237\u76d8\u7684\u670d\u52a1\u662f",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"FlushRealTimeService"))," \uff0c\u4e0d\u8fc7\u5f53\u5185\u5b58\u7f13\u5b58\u6c60 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"TransientStorePool"))," \u53ef\u7528\u65f6\uff0c\u6d88\u606f\u4f1a\u5148\u63d0\u4ea4\u5230TransientStorePool\u4e2d\u7684WriteBuffer\u5185\u90e8\uff0c\u518d\u63d0\u4ea4\u5230MappedFile\u7684FileChannel\u4e2d\uff0c\u6b64\u65f6\u5f02\u6b65\u5237\u76d8\u670d\u52a1\u5c31\u662fCommitRealTimeService\u3002\u4e0b\u9762\u770b\u4e00\u4e0b ",(0,a.kt)("strong",{parentName:"p"},"FlushRealTimeService")," \uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/rocketmq5/store/commitlog/image-20220912145045587.png",alt:"image-20220912145045587"})),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/rocketmq5/store/commitlog/image-20220912145109156.png",alt:"image-20220912145109156"})),(0,a.kt)("p",null,"\u800c\u5728\u542f\u7528\u4e86\u6682\u5b58\u6c60\u7684\u60c5\u51b5\u4e0b\u4f7f\u7528\u7684\u662f ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"CommitRealTimeService"))," \u8fdb\u884c\u5237\u76d8\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/rocketmq5/store/commitlog/image-20220912151020859.png",alt:"image-20220912151020859"})),(0,a.kt)("h3",{id:"5-\u603b\u7ed3"},"5. \u603b\u7ed3"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"CommitLog\u5728RocketMQ\u4e2d\u5145\u5f53\u4e00\u4e2a\u5b58\u50a8\u7684\u62bd\u8c61\uff0c\u6240\u6709\u7684\u5b58\u50a8\u64cd\u4f5c\u90fd\u662f\u901a\u8fc7CommitLog\u5bf9\u5916\u66b4\u9732\u3002\u5e95\u5c42\u5305\u542b\u4e86\u5f88\u591a\u5176\u4ed6\u7ec4\u4ef6\u6765\u652f\u6301"),(0,a.kt)("li",{parentName:"ul"},"\u5237\u76d8\u7684\u6a21\u5f0f\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6e\u6587\u4ef6\u7684 ",(0,a.kt)("strong",{parentName:"li"},"flushDiskType")," \u5b57\u6bb5\u6765\u914d\u7f6e\uff0cSYNC_FLUSH\u8868\u793a\u540c\u6b65\u5237\u76d8\u3001ASYNC_FLUSH\u8868\u793a\u5f02\u6b65\u5237\u76d8"),(0,a.kt)("li",{parentName:"ul"},"\u5237\u76d8\u7684\u670d\u52a1\u4e3b\u8981\u662f\u7531\u4e09\u4e2a\u670d\u52a1\uff1aFlushRealTimeService\u3001GroupCommitService\u3001CommitRealTimeService\u6765\u5b9e\u73b0\u5237\u76d8\uff0c\u4ee5\u53caFlushDiskWatcher\u6765\u5904\u7406\u4e00\u4e9b\u7279\u6b8a\u7684\u5237\u76d8\u60c5\u51b5\u3002\u8fd9\u4e9b\u670d\u52a1\u672c\u8d28\u4e0a\u90fd\u662f\u7ebf\u7a0b\u3002")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6211\u662f\u8682\u8681\u80cc\u5927\u8c61\uff0c\u6587\u7ae0\u5bf9\u4f60\u6709\u5e2e\u52a9\u70b9\u8d5e\u5173\u6ce8\u6211\uff0c\u6587\u7ae0\u6709\u4e0d\u6b63\u786e\u7684\u5730\u65b9\u8bf7\u60a8\u65a7\u6b63\u7559\u8a00\u8bc4\u8bba~\u8c22\u8c22")),(0,a.kt)("p",null,"\u53c2\u8003\u8d44\u6599\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/rocketmq/wiki/RIP-7-Multiple-Directories-Storage-Support"},"https://github.com/apache/rocketmq/wiki/RIP-7-Multiple-Directories-Storage-Support"))))}u.isMDXComponent=!0}}]);