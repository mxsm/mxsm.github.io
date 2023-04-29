"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[6035],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>v});var a=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function m(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var k=a.createContext({}),i=function(e){var r=a.useContext(k),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},p=function(e){var r=i(e.components);return a.createElement(k.Provider,{value:r},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},s=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,l=e.originalType,k=e.parentName,p=m(e,["components","mdxType","originalType","parentName"]),u=i(t),s=n,v=u["".concat(k,".").concat(s)]||u[s]||c[s]||l;return t?a.createElement(v,o(o({ref:r},p),{},{components:t})):a.createElement(v,o({ref:r},p))}));function v(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var l=t.length,o=new Array(l);o[0]=s;var m={};for(var k in r)hasOwnProperty.call(r,k)&&(m[k]=r[k]);m.originalType=e,m[u]="string"==typeof e?e:n,o[1]=m;for(var i=2;i<l;i++)o[i]=t[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},8844:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>k,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>m,toc:()=>i});var a=t(7462),n=(t(7294),t(3905));const l={title:"NameServer",date:new Date("2019-12-07T00:00:00.000Z"),weight:202105122201},o=void 0,m={unversionedId:"rocketmq/rocketmq4/nameserver/NameServer",id:"rocketmq/rocketmq4/nameserver/NameServer",title:"NameServer",description:"1. \u4ec0\u4e48\u662fNameServer?",source:"@site/docs/rocketmq/rocketmq4/nameserver/NameServer.md",sourceDirName:"rocketmq/rocketmq4/nameserver",slug:"/rocketmq/rocketmq4/nameserver/",permalink:"/docs/rocketmq/rocketmq4/nameserver/",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/rocketmq/rocketmq4/nameserver/NameServer.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1682735967,formattedLastUpdatedAt:"Apr 29, 2023",frontMatter:{title:"NameServer",date:"2019-12-07T00:00:00.000Z",weight:202105122201},sidebar:"rocketmq4",previous:{title:"\u5f53SLF4J\u9047\u4e0aRocketMQ",permalink:"/docs/rocketmq/rocketmq4/quick-start/rocketmq-slf4j-logging"},next:{title:"RocketMQ\u6e90\u7801\u89e3\u6790-NameServer\u542f\u52a8",permalink:"/docs/rocketmq/rocketmq4/nameserver/RocketMQ-analysis-NameServer-start"}},k={},i=[{value:"1. \u4ec0\u4e48\u662fNameServer?",id:"1-\u4ec0\u4e48\u662fnameserver",level:3},{value:"2. NameServer \u8def\u7531\u6ce8\u518c\u3001\u6545\u969c\u5254\u9664",id:"2-nameserver-\u8def\u7531\u6ce8\u518c\u6545\u969c\u5254\u9664",level:3},{value:"2.1 NameServer \u5b58\u50a8\u4e86\u54ea\u4e9b\u4fe1\u606f",id:"21-nameserver-\u5b58\u50a8\u4e86\u54ea\u4e9b\u4fe1\u606f",level:4},{value:"2.2 \u8def\u7531\u6ce8\u518c",id:"22-\u8def\u7531\u6ce8\u518c",level:4},{value:"2.3 \u8def\u7531\u5220\u9664",id:"23-\u8def\u7531\u5220\u9664",level:4},{value:"2.4 \u8def\u7531\u53d1\u73b0",id:"24-\u8def\u7531\u53d1\u73b0",level:4},{value:"3. \u603b\u7ed3",id:"3-\u603b\u7ed3",level:3}],p={toc:i},u="wrapper";function c(e){let{components:r,...t}=e;return(0,n.kt)(u,(0,a.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"1-\u4ec0\u4e48\u662fnameserver"},"1. \u4ec0\u4e48\u662fNameServer?"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://github.com/mxsm/document/blob/master/image/MQ/RocketMQ/RocketMQ%E7%89%A9%E7%90%86%E9%83%A8%E7%BD%B2%E5%9B%BE.jpg?raw=true",alt:"\u56fe\u89e3"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"NameServer"))," \u5c31\u662f\u4e00\u4e2a\u4fdd\u5b58Broker\u72b6\u6001\u7684\u4e00\u4e2a\u670d\u52a1\u548cBroker\u7ba1\u7406\u3002"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"NameServer \u7684\u7279\u70b9\uff1a")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"NameServer \u548c \u6bcf\u4e00\u53f0Broker \u670d\u52a1\u5668\u4fdd\u6301\u957f\u8fde\u63a5\uff0c\u5e76\u95f4\u969430s\u68c0\u6d4b\u4e00\u6b21Broker\u662f\u5426\u5b58\u6d3b\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u68c0\u6d4b\u5230 Broker\u53f3\u673a \uff0c \u5219\u4ece\u8def\u7531\u6ce8\u518c\u8868\u4e2d\u5c06\u5176\u79fb\u9664 \u3002 \u4f46\u662f\u8def\u7531\u53d8\u5316\u4e0d\u4f1a\u9a6c\u4e0a\u901a\u77e5\u6d88\u606f\u751f\u4ea7\u8005\u3002\u2014 \u964d\u4f4e NameServer\u5b9e\u73b0\u7684\u590d\u6742\u6027\uff0c\u5728\u6d88\u606f\u53d1\u9001\u7aef\u63d0\u4f9b\u5bb9\u9519\u673a\u5236\u6765\u4fdd\u8bc1\u6d88\u606f\u53d1\u9001\u7684\u9ad8\u53ef\u7528\u6027"),"\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"NameServer\u672c\u8eab\u7684\u9ad8\u53ef\u7528\u53ef\u901a\u8fc7\u90e8 \u7f72\u591a\u53f0 NameServerr\u670d\u52a1\u5668\u6765\u5b9e\u73b0\uff0c\u4f46\u5f7c\u6b64\u4e4b\u95f4\u4e92\u4e0d\u901a\u4fe1\uff0c\u4e5f\u5c31\u662f NameServer\u670d\u52a1\u5668\u4e4b\u95f4\u5728\u67d0\u4e00\u65f6\u523b\u7684\u6570\u636e\u5e76\u4e0d\u4f1a\u5b8c\u5168\u76f8\u540c"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u4f5c\u7528"),"\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u6d88\u606f\u751f\u4ea7\u8005 \u548c \u6d88\u606f\u6d88\u8d39\u8005\u63d0\u4f9b\u5173 \u4e8e\u4e3b\u9898 Topic \u7684\u8def\u7531\u4fe1\u606f")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"NameServer\u5b58\u50a8\u8def\u7531 \u7684\u57fa\u7840\u4fe1\u606f")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u7ba1\u7406 Broker\u8282\u70b9\uff0c\u5305\u62ec\u8def\u7531 \u6ce8\u518c\u3001\u8def\u7531\u5220\u9664\u7b49\u529f\u80fd")," ")),(0,n.kt)("h3",{id:"2-nameserver-\u8def\u7531\u6ce8\u518c\u6545\u969c\u5254\u9664"},"2. NameServer \u8def\u7531\u6ce8\u518c\u3001\u6545\u969c\u5254\u9664"),(0,n.kt)("h4",{id:"21-nameserver-\u5b58\u50a8\u4e86\u54ea\u4e9b\u4fe1\u606f"},"2.1 NameServer \u5b58\u50a8\u4e86\u54ea\u4e9b\u4fe1\u606f"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Topic \u6d88\u606f\u961f\u5217\u8def\u7531\u4fe1\u606f\u3002\u6d88\u606f\u53d1\u9001\u65f6\u6839\u636e\u8def\u7531\u8868\u8fdb\u884c\u8d1f \u8f7d\u5747\u8861\u3002"),(0,n.kt)("li",{parentName:"ul"},"Broker \u57fa\u7840\u4fe1\u606f\uff0c \u5305\u542b brokerName\u3001 \u6240\u5c5e\u96c6\u7fa4\u540d\u79f0 \u3001 \u4e3b\u5907 Broker \u5730\u5740"),(0,n.kt)("li",{parentName:"ul"},"Broker \u96c6\u7fa4\u4fe1\u606f\uff0c\u5b58\u50a8\u96c6\u7fa4\u4e2d\u6240\u6709 Broker \u540d\u79f0"),(0,n.kt)("li",{parentName:"ul"},"Broker \u72b6\u6001\u4fe1\u606f \u3002NameServer \u6bcf\u6b21\u6536\u5230\u5fc3\u8df3\u5305\u65f6\u4f1a\u66ff\u6362\u8be5\u4fe1\u606f "),(0,n.kt)("li",{parentName:"ul"},"Broker\u4e0a\u7684 FilterServer\u5217\u8868\uff0c\u7528\u4e8e\u7c7b\u6a21\u5f0f\u6d88\u606f\u8fc7\u6ee4")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"RocketMQ \u57fa\u4e8e\u8ba2\u9605\u53d1\u5e03\u673a\u5236 \uff0c \u4e00\u4e2aTopic\u62e5\u6709\u591a\u4e2a\u6d88\u606f\u961f\u5217 \uff0c\u4e00\u4e2aBroker\u4e3a\u6bcf\u4e00\u4e3b\u9898\u9ed8\u8ba4\u521b\u5efa 4 \u4e2a\u8bfb\u961f\u5217 4 \u4e2a\u5199\u961f\u5217\u3002\u591a\u4e2aBroker\u7ec4\u6210\u4e00\u4e2a\u96c6\u7fa4\uff0c BrokerName\u7531\u76f8\u540c\u7684\u591a\u53f0Broker\u7ec4\u6210Master-Slave\u67b6\u6784\u3002brokerId \u4e3a0\u4ee3\u8868 Master\uff0c \u5927\u4e8e0\u8868\u793aSlave\u3002 BrokerLivelnfo\u4e2d\u7684lastUpdateTimestamp \u5b58\u50a8\u4e0a\u6b21\u6536\u5230 Broker \u5fc3\u8df3\u5305\u7684\u65f6\u95f4")),(0,n.kt)("h4",{id:"22-\u8def\u7531\u6ce8\u518c"},"2.2 \u8def\u7531\u6ce8\u518c"),(0,n.kt)("p",null,"\u8def\u7531\u6ce8\u518c\u7684\u6b65\u9aa4\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Broker\u53d1\u9001\u5fc3\u8df3\u5305"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Header",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Broker\u5730\u5740"),(0,n.kt)("li",{parentName:"ul"},"BrokerId, 0:Master; \u5927\u4e8e0:slave"),(0,n.kt)("li",{parentName:"ul"},"Broker\u540d\u79f0"),(0,n.kt)("li",{parentName:"ul"},"\u96c6\u7fa4\u540d\u79f0"),(0,n.kt)("li",{parentName:"ul"},"master\u5730\u5740\uff0c\u521d\u6b21\u8bf7\u6c42\u65f6\u4e3a\u7a7a\uff0cslave\u5411NameServer\u6ce8\u518c\u540e\u8fd4\u56de"))),(0,n.kt)("li",{parentName:"ul"},"Body",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u6d88\u606f\u8fc7\u6ee4\u670d\u52a1\u5668\u5217\u8868"),(0,n.kt)("li",{parentName:"ul"},"\u4e3b\u9898\u7684\u914d\u7f6e"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"NameServer \u5fc3\u8df3\u5305\u5904\u7406"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u8def\u7531 \u6ce8\u518c\u9700\u8981\u52a0\u5199\u9501 \uff0c\u9632\u6b62\u5e76\u53d1\u4fee\u6539 RoutelnfoManager \u4e2d\u7684\u8def\u7531 \u8868 \u3002Broker \u6240\u5c5e \u96c6\u7fa4\u662f\u5426\u5b58\u5728\uff0c \u5982\u679c\u4e0d\u5b58\u5728\uff0c\u5219\u521b \u5efa\uff0c\u7136 \u540e\u5c06 broker \u540d\u52a0\u5165\u5230\u96c6\u7fa4Broker\u96c6\u5408\u4e2d"),(0,n.kt)("li",{parentName:"ul"},"\u7ef4\u62a4 BrokerData\u4fe1\u606f\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u5982\u679cBroker\u4e3aMaster\uff0c\u5e76\u4e14BrokerTopic\u914d\u7f6e\u4fe1\u606f\u53d1\u751f\u53d8\u5316\u6216\u8005\u662f\u521d\u6b21\u6ce8\u518c\uff0c\u5219\u9700\u8981\u521b\u5efa\u6216\u66f4\u65b0 Topic\u8def\u7531\u5143\u6570\u636e\uff0c\u586b\u5145 topicQueueTable\uff0c \u5176\u5b9e\u5c31\u662f\u4e3a\u9ed8\u8ba4\u4e3b\u9898\u81ea\u52a8\u6ce8\u518c\u8def\u7531\u4fe1\u606f\uff0c\u5176\u4e2d\u5305\u542b MixAII.DEFAULT TOPIC \u7684\u8def\u7531\u4fe1\u606f\u3002 \u5f53\u6d88\u606f\u751f\u4ea7\u8005\u53d1\u9001\u4e3b\u9898\u65f6\uff0c\u5982\u679c\u8be5\u4e3b\u9898\u672a\u521b\u5efa\u5e76\u4e14BrokerConfig \u7684autoCreateTopicEnable\u4e3atrue\u65f6\uff0c \u5c06\u8fd4\u56deMixAII.DEFAULT TOPIC\u7684\u8def\u7531\u4fe1\u606f\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u66f4\u65b0 BrokerLivelnfo\uff0c\u5b58\u6d3b Broker\u4fe1\u606f\u8868\uff0c BrokeLivelnfo\u662f\u6267\u884c\u8def\u7531\u5220\u9664\u7684\u91cd\u8981\u4f9d\u636e "),(0,n.kt)("li",{parentName:"ul"},"\u6ce8\u518c Broker \u7684\u8fc7\u6ee4\u5668 Server\u5730\u5740\u5217\u8868 \uff0c\u4e00\u4e2a Broker\u4e0a\u4f1a\u5173\u8054\u591a\u4e2a FilterServer\u6d88\u606f\u8fc7\u6ee4\u670d\u52a1\u5668")))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"NameServer\u548cBroker\u4fdd\u6301\u957f\u8fde\u63a5\uff0cBroker\u72b6\u6001\u5b58\u50a8\u5728brokerLiveTable\u4e2d\uff0cNameServer\u6536\u5230\u6bcf\u4e00\u4e2a\u5fc3\u8df3\u5305\u5c06\u66f4\u65b0brokerLiveTable\u4e2d\u5173\u4e8eBroker\u7684\u72b6\u6001\u4fe1\u606f\u4ee5\u53ca\u8def\u7531\u8868(topicQueueTable\u3001brokerAddrTable\u3001\nbrokerLiveTable\u3001filterServerTable)")),(0,n.kt)("h4",{id:"23-\u8def\u7531\u5220\u9664"},"2.3 \u8def\u7531\u5220\u9664"),(0,n.kt)("p",null,"\u5bf9\u4e8eBroker\u6765\u8bf4\u6bcf\u969430\u79d2\u60f3NameServer\u53d1\u9001\u4e00\u4e2a\u5fc3\u8df3\u5305\u6765\u7ef4\u6301Broker\u5728NameServer\u4e2d\u7684\u72b6\u6001\u3002"),(0,n.kt)("p",null,"\u5bf9\u4e8eNameServer\u6765\u8bf4\u4f1a\u6bcf\u969410\u79d2\u626b\u63cf\u4e00\u6b21brokerLiveTable\u72b6\u6001\u8868\uff0c\u5982\u679c\u53d1\u73b0Broker\u7684lastUpdateTimestamp\u7684\u65f6\u95f4\u6233\u8ddd\u5f53\u524d\u8d85\u8fc7120S\uff0c\u8fd9\u6837\u8ba4\u4e3aBroker\u5df2\u7ecf\u5931\u6548\uff0c\u79fb\u9664Broker,\u5173\u95ed\u4e0eBroker\u7684\u8fde\u63a5\u3002\u540c\u65f6\u66f4\u65b0\u5bf9\u5e94\u7684\u4fe1\u606f\u3002"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u89e6\u53d1\u8def\u7531\u5220\u9664\uff1a")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"NameServer\u5b9a\u65f6\u626b\u63cf brokerLiveTable\u68c0\u6d4b\u4e0a\u6b21\u5fc3\u8df3\u5305\u4e0e \u5f53\u524d\u7cfb\u7edf\u65f6\u95f4\u7684\u65f6\u95f4\u5dee\u5982\u679c\u65f6\u95f4\u6233\u5927\u4e8e 120s\uff0c\u5219\u9700\u8981\u79fb\u9664\u8be5 Broker \u4fe1\u606f \u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Broker\u5728\u6b63\u5e38\u88ab\u5173\u95ed\u7684\u60c5\u51b5\u4e0b\uff0c\u4f1a\u6267\u884c unregisterBroker\u6307\u4ee4\u3002"))),(0,n.kt)("h4",{id:"24-\u8def\u7531\u53d1\u73b0"},"2.4 \u8def\u7531\u53d1\u73b0"),(0,n.kt)("p",null,"RocketMQ \u8def\u7531\u53d1\u73b0\u662f\u975e\u5b9e\u65f6\u7684\uff0cNameServer\u4e0d\u4f1a\u4e3b\u52a8\u63a8\u9001\u7ed9\u5ba2\u6237\u7aef\u3002\u800c\u662f\u7531\u5ba2\u6237\u7aef\u5b9a\u65f6\u62c9\u53bb\u4e3b\u9898\u6700\u65b0\u7684\u8def\u7531\u3002"),(0,n.kt)("h3",{id:"3-\u603b\u7ed3"},"3. \u603b\u7ed3"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://github.com/mxsm/document/blob/master/image/MQ/RocketMQ/NameServer%E8%B7%AF%E7%94%B1%E6%B3%A8%E5%86%8C%E5%88%A0%E9%99%A4%E5%8F%91%E7%8E%B0%E6%9C%BA%E5%88%B6.jpg?raw=true",alt:"\u56fe\u89e3"})),(0,n.kt)("p",null,"NameServer\u8def\u7531\u53d1\u73b0\u4e0e\u5220\u9664\u673a\u5236\u5c31\u4ecb\u7ecd\u5230\u8fd9\u91cc\u4e86\uff0c\u6211\u4eec\u4f1a\u53d1\u73b0\u8fd9\u79cd\u8bbe\u8ba1\u4f1a\u5b58\u5728\u8fd9\u6837\u4e00\u79cd\u60c5\u51b5: NameServer\u9700\u8981\u7b49 Broker\u5931\u6548\u81f3\u5c11 120s\u624d\u80fd\u5c06\u8be5 Broker\u4ece\u8def\u7531\u8868\u4e2d\u79fb\u9664\u6389\uff0c\u90a3\u5982\u679c\u5728 Broker\u6545\u969c\u671f\u95f4\uff0c\u6d88\u606f\u751f\u4ea7\u8005 Producer\u6839\u636e\u4e3b\u9898\u83b7\u53d6\u5230\u7684\u8def\u7531\u4fe1\u606f\u5305\u542b\u5df2\u7ecf\u770b\u673a\u7684Broker\uff0c\u4f1a\u5bfc\u81f4\u6d88\u606f\u53d1\u9001\u5931\u8d25\uff0c\u90a3\u8fd9\u79cd\u60c5\u51b5 \u600e\u4e48\u529e\u3002"))}c.isMDXComponent=!0}}]);