"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[2218],{3905:(e,r,t)=>{t.d(r,{Zo:()=>i,kt:()=>d});var o=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},c=Object.keys(e);for(o=0;o<c.length;o++)t=c[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)t=c[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var u=o.createContext({}),a=function(e){var r=o.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},i=function(e){var r=a(e.components);return o.createElement(u.Provider,{value:r},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},k=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,c=e.originalType,u=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),m=a(t),k=n,d=m["".concat(u,".").concat(k)]||m[k]||p[k]||c;return t?o.createElement(d,l(l({ref:r},i),{},{components:t})):o.createElement(d,l({ref:r},i))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var c=t.length,l=new Array(c);l[0]=k;var s={};for(var u in r)hasOwnProperty.call(r,u)&&(s[u]=r[u]);s.originalType=e,s[m]="string"==typeof e?e:n,l[1]=s;for(var a=2;a<c;a++)l[a]=t[a];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}k.displayName="MDXCreateElement"},8349:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>c,metadata:()=>s,toc:()=>a});var o=t(7462),n=(t(7294),t(3905));const c={title:"RocketMQ-\u57fa\u672c\u6982\u5ff5",date:new Date("2021-05-10T00:00:00.000Z"),weight:202102102300},l="rocketmq\u57fa\u672c\u6982\u5ff5",s={unversionedId:"rocketmq/rocketmq4/quick-start/rocketmq-base-concept",id:"rocketmq/rocketmq4/quick-start/rocketmq-base-concept",title:"RocketMQ-\u57fa\u672c\u6982\u5ff5",description:"\u4ecb\u7ecdRocketMQ\u7684\u57fa\u672c\u6982\u5ff5\u6a21\u578b",source:"@site/docs/rocketmq/rocketmq4/quick-start/rocketmq-base-concept.md",sourceDirName:"rocketmq/rocketmq4/quick-start",slug:"/rocketmq/rocketmq4/quick-start/rocketmq-base-concept",permalink:"/docs/rocketmq/rocketmq4/quick-start/rocketmq-base-concept",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/rocketmq/rocketmq4/quick-start/rocketmq-base-concept.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1671958290,formattedLastUpdatedAt:"Dec 25, 2022",frontMatter:{title:"RocketMQ-\u57fa\u672c\u6982\u5ff5",date:"2021-05-10T00:00:00.000Z",weight:202102102300},sidebar:"rocketmq4",previous:{title:"RocketMQ-\u67b6\u6784\u8bbe\u8ba1",permalink:"/docs/rocketmq/rocketmq4/quick-start/rocketmq-architecture-design"},next:{title:"RocketMQ-\u7279\u6027",permalink:"/docs/rocketmq/rocketmq4/quick-start/rocketmq-character"}},u={},a=[{value:"1 \u6d88\u606f\u6a21\u578b\uff08Message Model\uff09",id:"1-\u6d88\u606f\u6a21\u578bmessage-model",level:2},{value:"2 \u6d88\u606f\u751f\u4ea7\u8005\uff08Producer\uff09",id:"2-\u6d88\u606f\u751f\u4ea7\u8005producer",level:2},{value:"3 \u6d88\u606f\u6d88\u8d39\u8005\uff08Consumer\uff09",id:"3-\u6d88\u606f\u6d88\u8d39\u8005consumer",level:2},{value:"4 \u4e3b\u9898\uff08Topic\uff09",id:"4-\u4e3b\u9898topic",level:2},{value:"5 \u4ee3\u7406\u670d\u52a1\u5668\uff08Broker Server\uff09",id:"5-\u4ee3\u7406\u670d\u52a1\u5668broker-server",level:2},{value:"6 \u540d\u5b57\u670d\u52a1\uff08Name Server\uff09",id:"6-\u540d\u5b57\u670d\u52a1name-server",level:2},{value:"7 \u62c9\u53d6\u5f0f\u6d88\u8d39\uff08Pull Consumer\uff09",id:"7-\u62c9\u53d6\u5f0f\u6d88\u8d39pull-consumer",level:2},{value:"8 \u63a8\u52a8\u5f0f\u6d88\u8d39\uff08Push Consumer\uff09",id:"8-\u63a8\u52a8\u5f0f\u6d88\u8d39push-consumer",level:2},{value:"9 \u751f\u4ea7\u8005\u7ec4\uff08Producer Group\uff09",id:"9-\u751f\u4ea7\u8005\u7ec4producer-group",level:2},{value:"10 \u6d88\u8d39\u8005\u7ec4\uff08Consumer Group\uff09",id:"10-\u6d88\u8d39\u8005\u7ec4consumer-group",level:2},{value:"11 \u96c6\u7fa4\u6d88\u8d39\uff08Clustering\uff09",id:"11-\u96c6\u7fa4\u6d88\u8d39clustering",level:2},{value:"12 \u5e7f\u64ad\u6d88\u8d39\uff08Broadcasting\uff09",id:"12-\u5e7f\u64ad\u6d88\u8d39broadcasting",level:2},{value:"13 \u666e\u901a\u987a\u5e8f\u6d88\u606f\uff08Normal Ordered Message\uff09",id:"13-\u666e\u901a\u987a\u5e8f\u6d88\u606fnormal-ordered-message",level:2},{value:"14 \u4e25\u683c\u987a\u5e8f\u6d88\u606f\uff08Strictly Ordered Message\uff09",id:"14-\u4e25\u683c\u987a\u5e8f\u6d88\u606fstrictly-ordered-message",level:2},{value:"15 \u6d88\u606f\uff08Message\uff09",id:"15-\u6d88\u606fmessage",level:2},{value:"16 \u6807\u7b7e\uff08Tag\uff09",id:"16-\u6807\u7b7etag",level:2}],i={toc:a};function m(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,o.Z)({},i,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"rocketmq\u57fa\u672c\u6982\u5ff5"},"rocketmq\u57fa\u672c\u6982\u5ff5"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u4ecb\u7ecdRocketMQ\u7684\u57fa\u672c\u6982\u5ff5\u6a21\u578b")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"1-\u6d88\u606f\u6a21\u578bmessage-model"},"1 \u6d88\u606f\u6a21\u578b\uff08Message Model\uff09"),(0,n.kt)("p",null,"RocketMQ\u4e3b\u8981\u7531 Producer\u3001Broker\u3001Consumer \u4e09\u90e8\u5206\u7ec4\u6210\uff0c\u5176\u4e2dProducer \u8d1f\u8d23\u751f\u4ea7\u6d88\u606f\uff0cConsumer \u8d1f\u8d23\u6d88\u8d39\u6d88\u606f\uff0cBroker \u8d1f\u8d23\u5b58\u50a8\u6d88\u606f\u3002Broker \u5728\u5b9e\u9645\u90e8\u7f72\u8fc7\u7a0b\u4e2d\u5bf9\u5e94\u4e00\u53f0\u670d\u52a1\u5668\uff0c\u6bcf\u4e2a Broker \u53ef\u4ee5\u5b58\u50a8\u591a\u4e2aTopic\u7684\u6d88\u606f\uff0c\u6bcf\u4e2aTopic\u7684\u6d88\u606f\u4e5f\u53ef\u4ee5\u5206\u7247\u5b58\u50a8\u4e8e\u4e0d\u540c\u7684 Broker\u3002Message Queue \u7528\u4e8e\u5b58\u50a8\u6d88\u606f\u7684\u7269\u7406\u5730\u5740\uff0c\u6bcf\u4e2aTopic\u4e2d\u7684\u6d88\u606f\u5730\u5740\u5b58\u50a8\u4e8e\u591a\u4e2a Message Queue \u4e2d\u3002ConsumerGroup \u7531\u591a\u4e2aConsumer \u5b9e\u4f8b\u6784\u6210\u3002"),(0,n.kt)("h2",{id:"2-\u6d88\u606f\u751f\u4ea7\u8005producer"},"2 \u6d88\u606f\u751f\u4ea7\u8005\uff08Producer\uff09"),(0,n.kt)("p",null," \u8d1f\u8d23\u751f\u4ea7\u6d88\u606f\uff0c\u4e00\u822c\u7531\u4e1a\u52a1\u7cfb\u7edf\u8d1f\u8d23\u751f\u4ea7\u6d88\u606f\u3002\u4e00\u4e2a\u6d88\u606f\u751f\u4ea7\u8005\u4f1a\u628a\u4e1a\u52a1\u5e94\u7528\u7cfb\u7edf\u91cc\u4ea7\u751f\u7684\u6d88\u606f\u53d1\u9001\u5230broker\u670d\u52a1\u5668\u3002RocketMQ\u63d0\u4f9b\u591a\u79cd\u53d1\u9001\u65b9\u5f0f\uff0c\u540c\u6b65\u53d1\u9001\u3001\u5f02\u6b65\u53d1\u9001\u3001\u987a\u5e8f\u53d1\u9001\u3001\u5355\u5411\u53d1\u9001\u3002\u540c\u6b65\u548c\u5f02\u6b65\u65b9\u5f0f\u5747\u9700\u8981Broker\u8fd4\u56de\u786e\u8ba4\u4fe1\u606f\uff0c\u5355\u5411\u53d1\u9001\u4e0d\u9700\u8981\u3002"),(0,n.kt)("h2",{id:"3-\u6d88\u606f\u6d88\u8d39\u8005consumer"},"3 \u6d88\u606f\u6d88\u8d39\u8005\uff08Consumer\uff09"),(0,n.kt)("p",null," \u8d1f\u8d23\u6d88\u8d39\u6d88\u606f\uff0c\u4e00\u822c\u662f\u540e\u53f0\u7cfb\u7edf\u8d1f\u8d23\u5f02\u6b65\u6d88\u8d39\u3002\u4e00\u4e2a\u6d88\u606f\u6d88\u8d39\u8005\u4f1a\u4eceBroker\u670d\u52a1\u5668\u62c9\u53d6\u6d88\u606f\u3001\u5e76\u5c06\u5176\u63d0\u4f9b\u7ed9\u5e94\u7528\u7a0b\u5e8f\u3002\u4ece\u7528\u6237\u5e94\u7528\u7684\u89d2\u5ea6\u800c\u8a00\u63d0\u4f9b\u4e86\u4e24\u79cd\u6d88\u8d39\u5f62\u5f0f\uff1a\u62c9\u53d6\u5f0f\u6d88\u8d39\u3001\u63a8\u52a8\u5f0f\u6d88\u8d39\u3002"),(0,n.kt)("h2",{id:"4-\u4e3b\u9898topic"},"4 \u4e3b\u9898\uff08Topic\uff09"),(0,n.kt)("p",null,"  \u8868\u793a\u4e00\u7c7b\u6d88\u606f\u7684\u96c6\u5408\uff0c\u6bcf\u4e2a\u4e3b\u9898\u5305\u542b\u82e5\u5e72\u6761\u6d88\u606f\uff0c\u6bcf\u6761\u6d88\u606f\u53ea\u80fd\u5c5e\u4e8e\u4e00\u4e2a\u4e3b\u9898\uff0c\u662fRocketMQ\u8fdb\u884c\u6d88\u606f\u8ba2\u9605\u7684\u57fa\u672c\u5355\u4f4d\u3002"),(0,n.kt)("h2",{id:"5-\u4ee3\u7406\u670d\u52a1\u5668broker-server"},"5 \u4ee3\u7406\u670d\u52a1\u5668\uff08Broker Server\uff09"),(0,n.kt)("p",null,"\u6d88\u606f\u4e2d\u8f6c\u89d2\u8272\uff0c\u8d1f\u8d23\u5b58\u50a8\u6d88\u606f\u3001\u8f6c\u53d1\u6d88\u606f\u3002\u4ee3\u7406\u670d\u52a1\u5668\u5728RocketMQ\u7cfb\u7edf\u4e2d\u8d1f\u8d23\u63a5\u6536\u4ece\u751f\u4ea7\u8005\u53d1\u9001\u6765\u7684\u6d88\u606f\u5e76\u5b58\u50a8\u3001\u540c\u65f6\u4e3a\u6d88\u8d39\u8005\u7684\u62c9\u53d6\u8bf7\u6c42\u4f5c\u51c6\u5907\u3002\u4ee3\u7406\u670d\u52a1\u5668\u4e5f\u5b58\u50a8\u6d88\u606f\u76f8\u5173\u7684\u5143\u6570\u636e\uff0c\u5305\u62ec\u6d88\u8d39\u8005\u7ec4\u3001\u6d88\u8d39\u8fdb\u5ea6\u504f\u79fb\u548c\u4e3b\u9898\u548c\u961f\u5217\u6d88\u606f\u7b49\u3002"),(0,n.kt)("h2",{id:"6-\u540d\u5b57\u670d\u52a1name-server"},"6 \u540d\u5b57\u670d\u52a1\uff08Name Server\uff09"),(0,n.kt)("p",null," \u540d\u79f0\u670d\u52a1\u5145\u5f53\u8def\u7531\u6d88\u606f\u7684\u63d0\u4f9b\u8005\u3002\u751f\u4ea7\u8005\u6216\u6d88\u8d39\u8005\u80fd\u591f\u901a\u8fc7\u540d\u5b57\u670d\u52a1\u67e5\u627e\u5404\u4e3b\u9898\u76f8\u5e94\u7684Broker IP\u5217\u8868\u3002\u591a\u4e2aNamesrv\u5b9e\u4f8b\u7ec4\u6210\u96c6\u7fa4\uff0c\u4f46\u76f8\u4e92\u72ec\u7acb\uff0c\u6ca1\u6709\u4fe1\u606f\u4ea4\u6362\u3002"),(0,n.kt)("h2",{id:"7-\u62c9\u53d6\u5f0f\u6d88\u8d39pull-consumer"},"7 \u62c9\u53d6\u5f0f\u6d88\u8d39\uff08Pull Consumer\uff09"),(0,n.kt)("p",null,"  Consumer\u6d88\u8d39\u7684\u4e00\u79cd\u7c7b\u578b\uff0c\u5e94\u7528\u901a\u5e38\u4e3b\u52a8\u8c03\u7528Consumer\u7684\u62c9\u6d88\u606f\u65b9\u6cd5\u4eceBroker\u670d\u52a1\u5668\u62c9\u6d88\u606f\u3001\u4e3b\u52a8\u6743\u7531\u5e94\u7528\u63a7\u5236\u3002\u4e00\u65e6\u83b7\u53d6\u4e86\u6279\u91cf\u6d88\u606f\uff0c\u5e94\u7528\u5c31\u4f1a\u542f\u52a8\u6d88\u8d39\u8fc7\u7a0b\u3002"),(0,n.kt)("h2",{id:"8-\u63a8\u52a8\u5f0f\u6d88\u8d39push-consumer"},"8 \u63a8\u52a8\u5f0f\u6d88\u8d39\uff08Push Consumer\uff09"),(0,n.kt)("p",null," Consumer\u6d88\u8d39\u7684\u4e00\u79cd\u7c7b\u578b\uff0c\u8be5\u6a21\u5f0f\u4e0bBroker\u6536\u5230\u6570\u636e\u540e\u4f1a\u4e3b\u52a8\u63a8\u9001\u7ed9\u6d88\u8d39\u7aef\uff0c\u8be5\u6d88\u8d39\u6a21\u5f0f\u4e00\u822c\u5b9e\u65f6\u6027\u8f83\u9ad8\u3002"),(0,n.kt)("h2",{id:"9-\u751f\u4ea7\u8005\u7ec4producer-group"},"9 \u751f\u4ea7\u8005\u7ec4\uff08Producer Group\uff09"),(0,n.kt)("p",null,"  \u540c\u4e00\u7c7bProducer\u7684\u96c6\u5408\uff0c\u8fd9\u7c7bProducer\u53d1\u9001\u540c\u4e00\u7c7b\u6d88\u606f\u4e14\u53d1\u9001\u903b\u8f91\u4e00\u81f4\u3002\u5982\u679c\u53d1\u9001\u7684\u662f\u4e8b\u52a1\u6d88\u606f\u4e14\u539f\u59cb\u751f\u4ea7\u8005\u5728\u53d1\u9001\u4e4b\u540e\u5d29\u6e83\uff0c\u5219Broker\u670d\u52a1\u5668\u4f1a\u8054\u7cfb\u540c\u4e00\u751f\u4ea7\u8005\u7ec4\u7684\u5176\u4ed6\u751f\u4ea7\u8005\u5b9e\u4f8b\u4ee5\u63d0\u4ea4\u6216\u56de\u6eaf\u6d88\u8d39\u3002"),(0,n.kt)("h2",{id:"10-\u6d88\u8d39\u8005\u7ec4consumer-group"},"10 \u6d88\u8d39\u8005\u7ec4\uff08Consumer Group\uff09"),(0,n.kt)("p",null,"  \u540c\u4e00\u7c7bConsumer\u7684\u96c6\u5408\uff0c\u8fd9\u7c7bConsumer\u901a\u5e38\u6d88\u8d39\u540c\u4e00\u7c7b\u6d88\u606f\u4e14\u6d88\u8d39\u903b\u8f91\u4e00\u81f4\u3002\u6d88\u8d39\u8005\u7ec4\u4f7f\u5f97\u5728\u6d88\u606f\u6d88\u8d39\u65b9\u9762\uff0c\u5b9e\u73b0\u8d1f\u8f7d\u5747\u8861\u548c\u5bb9\u9519\u7684\u76ee\u6807\u53d8\u5f97\u975e\u5e38\u5bb9\u6613\u3002\u8981\u6ce8\u610f\u7684\u662f\uff0c\u6d88\u8d39\u8005\u7ec4\u7684\u6d88\u8d39\u8005\u5b9e\u4f8b\u5fc5\u987b\u8ba2\u9605\u5b8c\u5168\u76f8\u540c\u7684Topic\u3002RocketMQ \u652f\u6301\u4e24\u79cd\u6d88\u606f\u6a21\u5f0f\uff1a\u96c6\u7fa4\u6d88\u8d39\uff08Clustering\uff09\u548c\u5e7f\u64ad\u6d88\u8d39\uff08Broadcasting\uff09\u3002"),(0,n.kt)("h2",{id:"11-\u96c6\u7fa4\u6d88\u8d39clustering"},"11 \u96c6\u7fa4\u6d88\u8d39\uff08Clustering\uff09"),(0,n.kt)("p",null,"\u96c6\u7fa4\u6d88\u8d39\u6a21\u5f0f\u4e0b,\u76f8\u540cConsumer Group\u7684\u6bcf\u4e2aConsumer\u5b9e\u4f8b\u5e73\u5747\u5206\u644a\u6d88\u606f\u3002"),(0,n.kt)("h2",{id:"12-\u5e7f\u64ad\u6d88\u8d39broadcasting"},"12 \u5e7f\u64ad\u6d88\u8d39\uff08Broadcasting\uff09"),(0,n.kt)("p",null,"\u5e7f\u64ad\u6d88\u8d39\u6a21\u5f0f\u4e0b\uff0c\u76f8\u540cConsumer Group\u7684\u6bcf\u4e2aConsumer\u5b9e\u4f8b\u90fd\u63a5\u6536\u5168\u91cf\u7684\u6d88\u606f\u3002"),(0,n.kt)("h2",{id:"13-\u666e\u901a\u987a\u5e8f\u6d88\u606fnormal-ordered-message"},"13 \u666e\u901a\u987a\u5e8f\u6d88\u606f\uff08Normal Ordered Message\uff09"),(0,n.kt)("p",null,"\u666e\u901a\u987a\u5e8f\u6d88\u8d39\u6a21\u5f0f\u4e0b\uff0c\u6d88\u8d39\u8005\u901a\u8fc7\u540c\u4e00\u4e2a\u6d88\u8d39\u961f\u5217\u6536\u5230\u7684\u6d88\u606f\u662f\u6709\u987a\u5e8f\u7684\uff0c\u4e0d\u540c\u6d88\u606f\u961f\u5217\u6536\u5230\u7684\u6d88\u606f\u5219\u53ef\u80fd\u662f\u65e0\u987a\u5e8f\u7684\u3002"),(0,n.kt)("h2",{id:"14-\u4e25\u683c\u987a\u5e8f\u6d88\u606fstrictly-ordered-message"},"14 \u4e25\u683c\u987a\u5e8f\u6d88\u606f\uff08Strictly Ordered Message\uff09"),(0,n.kt)("p",null,"\u4e25\u683c\u987a\u5e8f\u6d88\u606f\u6a21\u5f0f\u4e0b\uff0c\u6d88\u8d39\u8005\u6536\u5230\u7684\u6240\u6709\u6d88\u606f\u5747\u662f\u6709\u987a\u5e8f\u7684\u3002"),(0,n.kt)("h2",{id:"15-\u6d88\u606fmessage"},"15 \u6d88\u606f\uff08Message\uff09"),(0,n.kt)("p",null,"\u6d88\u606f\u7cfb\u7edf\u6240\u4f20\u8f93\u4fe1\u606f\u7684\u7269\u7406\u8f7d\u4f53\uff0c\u751f\u4ea7\u548c\u6d88\u8d39\u6570\u636e\u7684\u6700\u5c0f\u5355\u4f4d\uff0c\u6bcf\u6761\u6d88\u606f\u5fc5\u987b\u5c5e\u4e8e\u4e00\u4e2a\u4e3b\u9898\u3002RocketMQ\u4e2d\u6bcf\u4e2a\u6d88\u606f\u62e5\u6709\u552f\u4e00\u7684Message ID\uff0c\u4e14\u53ef\u4ee5\u643a\u5e26\u5177\u6709\u4e1a\u52a1\u6807\u8bc6\u7684Key\u3002\u7cfb\u7edf\u63d0\u4f9b\u4e86\u901a\u8fc7Message ID\u548cKey\u67e5\u8be2\u6d88\u606f\u7684\u529f\u80fd\u3002"),(0,n.kt)("h2",{id:"16-\u6807\u7b7etag"},"16 \u6807\u7b7e\uff08Tag\uff09"),(0,n.kt)("p",null," \u4e3a\u6d88\u606f\u8bbe\u7f6e\u7684\u6807\u5fd7\uff0c\u7528\u4e8e\u540c\u4e00\u4e3b\u9898\u4e0b\u533a\u5206\u4e0d\u540c\u7c7b\u578b\u7684\u6d88\u606f\u3002\u6765\u81ea\u540c\u4e00\u4e1a\u52a1\u5355\u5143\u7684\u6d88\u606f\uff0c\u53ef\u4ee5\u6839\u636e\u4e0d\u540c\u4e1a\u52a1\u76ee\u7684\u5728\u540c\u4e00\u4e3b\u9898\u4e0b\u8bbe\u7f6e\u4e0d\u540c\u6807\u7b7e\u3002\u6807\u7b7e\u80fd\u591f\u6709\u6548\u5730\u4fdd\u6301\u4ee3\u7801\u7684\u6e05\u6670\u5ea6\u548c\u8fde\u8d2f\u6027\uff0c\u5e76\u4f18\u5316RocketMQ\u63d0\u4f9b\u7684\u67e5\u8be2\u7cfb\u7edf\u3002\u6d88\u8d39\u8005\u53ef\u4ee5\u6839\u636eTag\u5b9e\u73b0\u5bf9\u4e0d\u540c\u5b50\u4e3b\u9898\u7684\u4e0d\u540c\u6d88\u8d39\u903b\u8f91\uff0c\u5b9e\u73b0\u66f4\u597d\u7684\u6269\u5c55\u6027\u3002"),(0,n.kt)("p",null,"\u53c2\u8003\u6587\u6863\uff1a"),(0,n.kt)("p",null,"[1][MQ\u57fa\u672c\u6982\u5ff5]","(",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/rocketmq/blob/master/docs/cn/concept.md"},"https://github.com/apache/rocketmq/blob/master/docs/cn/concept.md"),")"))}m.isMDXComponent=!0}}]);