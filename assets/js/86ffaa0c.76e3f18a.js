"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[6090],{3905:(e,n,r)=>{r.d(n,{Zo:()=>c,kt:()=>d});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function u(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=t.createContext({}),i=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):u(u({},n),e)),r},c=function(e){var n=i(e.components);return t.createElement(l.Provider,{value:n},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},k=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=i(r),k=o,d=m["".concat(l,".").concat(k)]||m[k]||p[k]||a;return r?t.createElement(d,u(u({ref:n},c),{},{components:r})):t.createElement(d,u({ref:n},c))}));function d(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,u=new Array(a);u[0]=k;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[m]="string"==typeof e?e:o,u[1]=s;for(var i=2;i<a;i++)u[i]=r[i];return t.createElement.apply(null,u)}return t.createElement.apply(null,r)}k.displayName="MDXCreateElement"},7985:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>u,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>i});var t=r(7462),o=(r(7294),r(3905));const a={title:"RocketMQ\u6e90\u7801\u89e3\u6790-Broker\u5b58\u50a8\u914d\u7f6e\u6587\u4ef6\u8bf4\u660e",date:new Date("2021-06-07T00:00:00.000Z"),weight:202106072048},u=void 0,s={unversionedId:"rocketmq/rocketmq4/broker/RocketMQ-analysis-broker-configfile",id:"rocketmq/rocketmq4/broker/RocketMQ-analysis-broker-configfile",title:"RocketMQ\u6e90\u7801\u89e3\u6790-Broker\u5b58\u50a8\u914d\u7f6e\u6587\u4ef6\u8bf4\u660e",description:"RocketMQ\u7248\u672c4..8.0\u7248\u672c",source:"@site/docs/rocketmq/rocketmq4/broker/RocketMQ-analysis-broker-configfile.md",sourceDirName:"rocketmq/rocketmq4/broker",slug:"/rocketmq/rocketmq4/broker/RocketMQ-analysis-broker-configfile",permalink:"/docs/rocketmq/rocketmq4/broker/RocketMQ-analysis-broker-configfile",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/rocketmq/rocketmq4/broker/RocketMQ-analysis-broker-configfile.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1671380922,formattedLastUpdatedAt:"Dec 18, 2022",frontMatter:{title:"RocketMQ\u6e90\u7801\u89e3\u6790-Broker\u5b58\u50a8\u914d\u7f6e\u6587\u4ef6\u8bf4\u660e",date:"2021-06-07T00:00:00.000Z",weight:202106072048},sidebar:"rocketmq4",previous:{title:"RocketMQ\u6e90\u7801\u89e3\u6790-Broker \u6d88\u606fTag\u8fc7\u6ee4",permalink:"/docs/rocketmq/rocketmq4/broker/RocketMQ-analysis-Broker-tag-filter"},next:{title:"RocketMQ\u6e90\u7801\u89e3\u6790-RocketMQ\u6d88\u606fACK\u673a\u5236\u53ca\u6d88\u8d39\u8fdb\u5ea6\u7ba1\u7406",permalink:"/docs/rocketmq/rocketmq4/consumer/RocketMQ-analysis-ack"}},l={},i=[{value:"1. Broker store config \u4e0b\u9762\u7684\u6587\u4ef6",id:"1-broker-store-config-\u4e0b\u9762\u7684\u6587\u4ef6",level:3},{value:"2. consumerFilter.json",id:"2-consumerfilterjson",level:3},{value:"3. consumerOffset.json",id:"3-consumeroffsetjson",level:3},{value:"4. delayOffset.json",id:"4-delayoffsetjson",level:4},{value:"5. subscriptionGroup.json",id:"5-subscriptiongroupjson",level:3},{value:"6. topics.json",id:"6-topicsjson",level:3}],c={toc:i};function m(e){let{components:n,...r}=e;return(0,o.kt)("wrapper",(0,t.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"RocketMQ\u7248\u672c4..8.0\u7248\u672c")),(0,o.kt)("h3",{id:"1-broker-store-config-\u4e0b\u9762\u7684\u6587\u4ef6"},"1. Broker store config \u4e0b\u9762\u7684\u6587\u4ef6"),(0,o.kt)("p",null,"\u5728Broker\u542f\u52a8\u540e\u5728 ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"$HOME \\store\\config"))," \u8def\u5f84\u4e0b\u9762\u6709\u4e94\u4e2a\u6587\u4ef6\u5206\u522b\u662f\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"consumerFilter.json")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"consumerOffset.json")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"delayOffset.json")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"subscriptionGroup.json")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"topics.json"))),(0,o.kt)("h3",{id:"2-consumerfilterjson"},"2. consumerFilter.json"),(0,o.kt)("h3",{id:"3-consumeroffsetjson"},"3. consumerOffset.json"),(0,o.kt)("p",null,"\u8bb0\u5f55\u8be5broker\u4e0a\u9488\u5bf9\u6bcf\u4e2atopic\u7684\u6bcf\u4e2aconsumer group\u7684\u9488\u5bf9\u6bcf\u4e2aqueue\u7684\u6d88\u8d39\u4f4d\u79fb"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "offsetTable":{\n        "%RETRY%please_rename_unique_group_name@please_rename_unique_group_name":{0:0\n        },\n        "TopicTest@please_rename_unique_group_name":{0:6,1:3,2:3,3:2\n        }\n    }\n}\n')),(0,o.kt)("h4",{id:"4-delayoffsetjson"},"4. delayOffset.json"),(0,o.kt)("p",null,"\u8bb0\u5f55\u8be5broker\u5ef6\u8fdf\u961f\u5217\u7684\u6d88\u8d39\u4f4d\u79fb\u60c5\u51b5\uff0c1:1\u4e2d1\u8868\u793a\u5ef6\u8fdf\u7c92\u5ea6\uff0c1\u8868\u793a\u4f4d\u79fb"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "offsetTable":{1:1\n    }\n}\n')),(0,o.kt)("h3",{id:"5-subscriptiongroupjson"},"5. subscriptionGroup.json"),(0,o.kt)("p",null,"\u8bb0\u5f55\u8be5broker\u4e0a\u5404\u7c7b\u8ba2\u9605\u5173\u7cfb"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "dataVersion":{\n        "counter":1,\n        "timestamp":1622907213308\n    },\n    "subscriptionGroupTable":{\n        "SELF_TEST_C_GROUP":{\n            "brokerId":0,\n            "consumeBroadcastEnable":true,\n            "consumeEnable":true,\n            "consumeFromMinEnable":true,\n            "groupName":"SELF_TEST_C_GROUP",\n            "notifyConsumerIdsChangedEnable":true,\n            "retryMaxTimes":16,\n            "retryQueueNums":1,\n            "whichBrokerWhenConsumeSlowly":1\n        },\n        "CID_ONSAPI_OWNER":{\n            "brokerId":0,\n            "consumeBroadcastEnable":true,\n            "consumeEnable":true,\n            "consumeFromMinEnable":true,\n            "groupName":"CID_ONSAPI_OWNER",\n            "notifyConsumerIdsChangedEnable":true,\n            "retryMaxTimes":16,\n            "retryQueueNums":1,\n            "whichBrokerWhenConsumeSlowly":1\n        },\n        "CID_ONSAPI_PERMISSION":{\n            "brokerId":0,\n            "consumeBroadcastEnable":true,\n            "consumeEnable":true,\n            "consumeFromMinEnable":true,\n            "groupName":"CID_ONSAPI_PERMISSION",\n            "notifyConsumerIdsChangedEnable":true,\n            "retryMaxTimes":16,\n            "retryQueueNums":1,\n            "whichBrokerWhenConsumeSlowly":1\n        },\n        "please_rename_unique_group_name":{\n            "brokerId":0,\n            "consumeBroadcastEnable":true,\n            "consumeEnable":true,\n            "consumeFromMinEnable":true,\n            "groupName":"please_rename_unique_group_name",\n            "notifyConsumerIdsChangedEnable":true,\n            "retryMaxTimes":16,\n            "retryQueueNums":1,\n            "whichBrokerWhenConsumeSlowly":1\n        },\n        "TOOLS_CONSUMER":{\n            "brokerId":0,\n            "consumeBroadcastEnable":true,\n            "consumeEnable":true,\n            "consumeFromMinEnable":true,\n            "groupName":"TOOLS_CONSUMER",\n            "notifyConsumerIdsChangedEnable":true,\n            "retryMaxTimes":16,\n            "retryQueueNums":1,\n            "whichBrokerWhenConsumeSlowly":1\n        },\n        "CID_ONS-HTTP-PROXY":{\n            "brokerId":0,\n            "consumeBroadcastEnable":true,\n            "consumeEnable":true,\n            "consumeFromMinEnable":true,\n            "groupName":"CID_ONS-HTTP-PROXY",\n            "notifyConsumerIdsChangedEnable":true,\n            "retryMaxTimes":16,\n            "retryQueueNums":1,\n            "whichBrokerWhenConsumeSlowly":1\n        },\n        "FILTERSRV_CONSUMER":{\n            "brokerId":0,\n            "consumeBroadcastEnable":true,\n            "consumeEnable":true,\n            "consumeFromMinEnable":true,\n            "groupName":"FILTERSRV_CONSUMER",\n            "notifyConsumerIdsChangedEnable":true,\n            "retryMaxTimes":16,\n            "retryQueueNums":1,\n            "whichBrokerWhenConsumeSlowly":1\n        },\n        "CID_ONSAPI_PULL":{\n            "brokerId":0,\n            "consumeBroadcastEnable":true,\n            "consumeEnable":true,\n            "consumeFromMinEnable":true,\n            "groupName":"CID_ONSAPI_PULL",\n            "notifyConsumerIdsChangedEnable":true,\n            "retryMaxTimes":16,\n            "retryQueueNums":1,\n            "whichBrokerWhenConsumeSlowly":1\n        }\n    }\n}\n')),(0,o.kt)("h3",{id:"6-topicsjson"},"6. topics.json"),(0,o.kt)("p",null,"\u8bb0\u5f55\u8be5broker\u4e0a\u5404topic\u4fe1\u606f\uff0c\u5305\u62ecqueue\u4fe1\u606f\u3001\u8bfb\u5199\u6743\u9650"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "dataVersion":{\n        "counter":3,\n        "timestamp":1622907213314\n    },\n    "topicConfigTable":{\n        "SCHEDULE_TOPIC_XXXX":{\n            "order":false,\n            "perm":6,\n            "readQueueNums":18,\n            "topicFilterType":"SINGLE_TAG",\n            "topicName":"SCHEDULE_TOPIC_XXXX",\n            "topicSysFlag":0,\n            "writeQueueNums":18\n        },\n        "TopicTest":{\n            "order":false,\n            "perm":6,\n            "readQueueNums":4,\n            "topicFilterType":"SINGLE_TAG",\n            "topicName":"TopicTest",\n            "topicSysFlag":0,\n            "writeQueueNums":4\n        },\n        "SELF_TEST_TOPIC":{\n            "order":false,\n            "perm":6,\n            "readQueueNums":1,\n            "topicFilterType":"SINGLE_TAG",\n            "topicName":"SELF_TEST_TOPIC",\n            "topicSysFlag":0,\n            "writeQueueNums":1\n        },\n        "DefaultCluster":{\n            "order":false,\n            "perm":7,\n            "readQueueNums":16,\n            "topicFilterType":"SINGLE_TAG",\n            "topicName":"DefaultCluster",\n            "topicSysFlag":0,\n            "writeQueueNums":16\n        },\n        "DefaultCluster_REPLY_TOPIC":{\n            "order":false,\n            "perm":6,\n            "readQueueNums":1,\n            "topicFilterType":"SINGLE_TAG",\n            "topicName":"DefaultCluster_REPLY_TOPIC",\n            "topicSysFlag":0,\n            "writeQueueNums":1\n        },\n        "DESKTOP-B7KDPBT":{\n            "order":false,\n            "perm":7,\n            "readQueueNums":1,\n            "topicFilterType":"SINGLE_TAG",\n            "topicName":"DESKTOP-B7KDPBT",\n            "topicSysFlag":0,\n            "writeQueueNums":1\n        },\n        "RMQ_SYS_TRANS_HALF_TOPIC":{\n            "order":false,\n            "perm":6,\n            "readQueueNums":1,\n            "topicFilterType":"SINGLE_TAG",\n            "topicName":"RMQ_SYS_TRANS_HALF_TOPIC",\n            "topicSysFlag":0,\n            "writeQueueNums":1\n        },\n        "%RETRY%please_rename_unique_group_name":{\n            "order":false,\n            "perm":6,\n            "readQueueNums":1,\n            "topicFilterType":"SINGLE_TAG",\n            "topicName":"%RETRY%please_rename_unique_group_name",\n            "topicSysFlag":0,\n            "writeQueueNums":1\n        },\n        "TBW102":{\n            "order":false,\n            "perm":7,\n            "readQueueNums":8,\n            "topicFilterType":"SINGLE_TAG",\n            "topicName":"TBW102",\n            "topicSysFlag":0,\n            "writeQueueNums":8\n        },\n        "BenchmarkTest":{\n            "order":false,\n            "perm":6,\n            "readQueueNums":1024,\n            "topicFilterType":"SINGLE_TAG",\n            "topicName":"BenchmarkTest",\n            "topicSysFlag":0,\n            "writeQueueNums":1024\n        },\n        "OFFSET_MOVED_EVENT":{\n            "order":false,\n            "perm":6,\n            "readQueueNums":1,\n            "topicFilterType":"SINGLE_TAG",\n            "topicName":"OFFSET_MOVED_EVENT",\n            "topicSysFlag":0,\n            "writeQueueNums":1\n        }\n    }\n}\n')))}m.isMDXComponent=!0}}]);