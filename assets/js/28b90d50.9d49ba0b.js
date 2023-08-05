"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[9510],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>k});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=o.createContext({}),u=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=u(e.components);return o.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},s=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=u(r),s=n,k=m["".concat(p,".").concat(s)]||m[s]||d[s]||i;return r?o.createElement(k,a(a({ref:t},l),{},{components:r})):o.createElement(k,a({ref:t},l))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=s;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[m]="string"==typeof e?e:n,a[1]=c;for(var u=2;u<i;u++)a[u]=r[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}s.displayName="MDXCreateElement"},5981:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var o=r(7462),n=(r(7294),r(3905));const i={title:"RocketMQ\u751f\u4ea7\u8005\u5982\u4f55\u66f4\u65b0Topic\u8def\u7531\u4fe1\u606f",sidebar_position:202301282224,description:"\u5206\u6790RocketMQ Producer\u5982\u4f55\u66f4\u65b0Topic\u8def\u7531\u4fe1\u606f"},a=void 0,c={unversionedId:"rocketmq/rocketmq5/client/producer/topic/update-topic-route",id:"rocketmq/rocketmq5/client/producer/topic/update-topic-route",title:"RocketMQ\u751f\u4ea7\u8005\u5982\u4f55\u66f4\u65b0Topic\u8def\u7531\u4fe1\u606f",description:"\u5206\u6790RocketMQ Producer\u5982\u4f55\u66f4\u65b0Topic\u8def\u7531\u4fe1\u606f",source:"@site/docs/rocketmq/rocketmq5/03-client/producer/topic/01-update-topic-route.md",sourceDirName:"rocketmq/rocketmq5/03-client/producer/topic",slug:"/rocketmq/rocketmq5/client/producer/topic/update-topic-route",permalink:"/docs/rocketmq/rocketmq5/client/producer/topic/update-topic-route",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/rocketmq/rocketmq5/03-client/producer/topic/01-update-topic-route.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1691228615,formattedLastUpdatedAt:"Aug 5, 2023",sidebarPosition:202301282224,frontMatter:{title:"RocketMQ\u751f\u4ea7\u8005\u5982\u4f55\u66f4\u65b0Topic\u8def\u7531\u4fe1\u606f",sidebar_position:202301282224,description:"\u5206\u6790RocketMQ Producer\u5982\u4f55\u66f4\u65b0Topic\u8def\u7531\u4fe1\u606f"},sidebar:"rocketmq5",previous:{title:"\u751f\u4ea7\u8005Topic",permalink:"/docs/rocketmq/rocketmq5/client/producer/topic/"},next:{title:"RocketMQ Topic\u5982\u4f55\u521b\u5efa",permalink:"/docs/rocketmq/rocketmq5/client/producer/topic/create-topic"}},p={},u=[{value:"1. \u66f4\u65b0Topic\u8def\u7531\u4fe1\u606f\u7684\u5165\u53e3",id:"1-\u66f4\u65b0topic\u8def\u7531\u4fe1\u606f\u7684\u5165\u53e3",level:2},{value:"2. Topic\u66f4\u65b0\u6e90\u7801\u5206\u6790",id:"2-topic\u66f4\u65b0\u6e90\u7801\u5206\u6790",level:2},{value:"2.1 \u83b7\u53d6\u9ed8\u8ba4Topic TBW102 \u7684\u4fe1\u606f",id:"21-\u83b7\u53d6\u9ed8\u8ba4topic-tbw102-\u7684\u4fe1\u606f",level:3},{value:"2.2 \u83b7\u53d6\u6307\u5b9aTopic\u7684\u4fe1\u606f",id:"22-\u83b7\u53d6\u6307\u5b9atopic\u7684\u4fe1\u606f",level:3}],l={toc:u},m="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,o.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"1-\u66f4\u65b0topic\u8def\u7531\u4fe1\u606f\u7684\u5165\u53e3"},"1. \u66f4\u65b0Topic\u8def\u7531\u4fe1\u606f\u7684\u5165\u53e3"),(0,n.kt)("p",null,"\u66f4\u65b0Topic\u8def\u7531\u4fe1\u606f\u4e3b\u8981\u6709\u4e24\u79cd\u65b9\u5f0f\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u5b9a\u65f6\u4efb\u52a1"),(0,n.kt)("p",{parentName:"li"},"\u5728MQClientInstance\u542f\u52a8\u8fc7\u7a0b\u4e2d\uff0c\u4f1a\u542f\u52a8\u4e00\u4e2a\u5b9a\u65f6\u4efb\u52a1\u5b9a\u65f6\u53bbNameServer\u66f4\u65b0Topic\u4fe1\u606f")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u6d88\u606f\u53d1\u9001\u672c\u5730\u83b7\u53d6\u4e0d\u5b58\u5728\u66f4\u65b0"),(0,n.kt)("p",{parentName:"li"},"\u6d88\u606f\u53d1\u9001\u5230Broker\u7684\u65f6\u5019\uff0c\u9996\u5148\u4ece\u672c\u5730\u7f13\u5b58\u83b7\u53d6Topic\u5bf9\u5e94\u7684\u8def\u7531\u4fe1\u606f\u3002\u4e0d\u5b58\u5728\u7684\u60c5\u51b5\u4e0b\u4eceNameServer\u83b7\u53d6Topic\u5bf9\u5e94\u7684\u8def\u7531\u4fe1\u606f"))),(0,n.kt)("h2",{id:"2-topic\u66f4\u65b0\u6e90\u7801\u5206\u6790"},"2. Topic\u66f4\u65b0\u6e90\u7801\u5206\u6790"),(0,n.kt)("p",null,"Topic\u66f4\u65b0\u4e3b\u8981\u8c03\u7528\u4e86 ",(0,n.kt)("inlineCode",{parentName:"p"},"MQClientInstance#updateTopicRouteInfoFromNameServer")," \u65b9\u6cd5"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java",metastring:'jsx title="MQClientInstance#updateTopicRouteInfoFromNameServer"',jsx:!0,title:'"MQClientInstance#updateTopicRouteInfoFromNameServer"'},"public boolean updateTopicRouteInfoFromNameServer(final String topic, boolean isDefault,\n        DefaultMQProducer defaultMQProducer) {\n    //\u7701\u7565\u4ee3\u7801\n}\n")),(0,n.kt)("h3",{id:"21-\u83b7\u53d6\u9ed8\u8ba4topic-tbw102-\u7684\u4fe1\u606f"},"2.1 \u83b7\u53d6\u9ed8\u8ba4Topic TBW102 \u7684\u4fe1\u606f"),(0,n.kt)("p",null,"\u65b9\u6cd5\u6709\u4e09\u4e2a\u53c2\u6570: topic\u3001isDefault\u3001defaultMQProducer\u3002\u5f53 ",(0,n.kt)("inlineCode",{parentName:"p"},"isDefault=true")," \u5e76\u4e14 ",(0,n.kt)("inlineCode",{parentName:"p"},"defaultMQProducer != null")," \u7684\u60c5\u51b5\u4e0b\u662f\u53bb\u83b7\u53d6\u81ea\u52a8\u521b\u5efaTopic\u7684\u7cfb\u7edf\u9ed8\u8ba4 ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"TBW102"))," \u7684\u6570\u636e\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"TopicRouteData topicRouteData;\nif (isDefault && defaultMQProducer != null) {\n    topicRouteData = this.mQClientAPIImpl.getDefaultTopicRouteInfoFromNameServer(defaultMQProducer.getCreateTopicKey(),\n        clientConfig.getMqClientApiTimeout());\n    if (topicRouteData != null) {\n        for (QueueData data : topicRouteData.getQueueDatas()) {\n            int queueNums = Math.min(defaultMQProducer.getDefaultTopicQueueNums(), data.getReadQueueNums());\n            data.setReadQueueNums(queueNums);\n            data.setWriteQueueNums(queueNums);\n        }\n    }\n}\n")),(0,n.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"TBW102"))," Topic\u5728\u542f\u52a8\u7684\u65f6\u5019MQ\u4f1a\u81ea\u52a8\u521b\u5efa\uff0c\u8fd9\u4e2a\u4e5f\u662fMQ\u81ea\u52a8\u521b\u5efaTopic\u7684\u5173\u952e\u3002\u540e\u7eed\u7684\u6587\u7ae0\u4f1a\u8fdb\u884c\u4ecb\u7ecd")),(0,n.kt)("h3",{id:"22-\u83b7\u53d6\u6307\u5b9atopic\u7684\u4fe1\u606f"},"2.2 \u83b7\u53d6\u6307\u5b9aTopic\u7684\u4fe1\u606f"),(0,n.kt)("p",null,"\u5f53 ",(0,n.kt)("inlineCode",{parentName:"p"},"isDefault=false")," \u6216\u8005 ",(0,n.kt)("inlineCode",{parentName:"p"},"defaultMQProducer == null")," \u7684\u60c5\u51b5\u4e0b\u662f\u53bb\u83b7\u6307\u5b9aTopic\u7684\u8def\u7531\u4fe1\u606f\u3002\u53d1\u9001\u4e00\u4e2a\u8bf7\u6c42\u4ee3\u7801\u4e3a",(0,n.kt)("inlineCode",{parentName:"p"},"RequestCode.GET_ROUTEINFO_BY_TOPIC")," \u7684\u8bf7\u6c42\u5230\u968f\u673a\u9009\u62e9\u7684\u4e00\u4e2aNameServer\u83b7\u53d6\u8def\u7531\u4fe1\u606f\u3002NameServer\u63a5\u6536\u5230\u8bf7\u6c42\u540e ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"ClientRequestProcessor"))," \u8d1f\u8d23\u5904\u7406\u8bf7\u6c42\u3002"),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"\u5728Rocketmq5.0\u5f00\u59cb\uff0c\u83b7\u53d6\u8def\u7531\u4fe1\u606f\u5355\u72ec\u4f7f\u7528\u4e86\u4e00\u4e2a\u5904\u7406\u7c7b\u548c\u7ebf\u7a0b\u6c60\u6765\u5904\u7406\u3002\u8fd9\u6837\u7684\u597d\u5904\u5c31\u662f\u5b9e\u73b0\u4e1a\u52a1\u7684\u9694\u79bb\u3002\u5c06\u6700\u91cd\u8981\u8981\u7684\u5ba2\u6237\u7aef\u8def\u7531\u8bf7\u6c42\u5355\u72ec\u9694\u79bb\u51fa\u6765\uff0c\u961f\u5217\u7684\u5927\u5c0f\u548c\u7ebf\u7a0b\u6570\u5747\u662f\u53ef\u914d\u7f6e\u7684\u3002\u7ebf\u7a0b\u6c60\u4e4b\u95f4\u7684\u8bf7\u6c42\u5904\u7406\u76f8\u4e92\u9694\u79bb\uff0c\u4e0d\u53d7\u5f71\u54cd\u3002"),(0,n.kt)("p",{parentName:"admonition"},"\u5177\u4f53\u53c2\u7167: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/rocketmq/wiki/RIP-29-Optimize-RocketMQ-NameServer"},"RIP-29"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"RouteInfoManager#pickupTopicRouteData"))," \u65b9\u6cd5\u662f\u6839\u636etopic\u83b7\u53d6\u6307\u5b9atopic\u5bf9\u5e94\u7684\u8def\u7531\u4fe1\u606f\u3002"))}d.isMDXComponent=!0}}]);