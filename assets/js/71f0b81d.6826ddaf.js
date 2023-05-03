"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[185],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>k});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),p=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},c=function(e){var r=p(e.components);return n.createElement(s.Provider,{value:r},e.children)},g="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),g=p(t),u=o,k=g["".concat(s,".").concat(u)]||g[u]||m[u]||i;return t?n.createElement(k,a(a({ref:r},c),{},{components:t})):n.createElement(k,a({ref:r},c))}));function k(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=u;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[g]="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=t[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5869:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=t(7462),o=(t(7294),t(3905));const i={title:"NameServer\u8def\u7531\u6ce8\u518c",linkTitle:"NameServer\u8def\u7531\u6ce8\u518c",date:new Date("2023-01-05T00:00:00.000Z"),weight:202301051651,description:"NameServer\u8def\u7531\u6ce8\u518c\u7684\u8fc7\u7a0b\u548c\u539f\u7406\u5206\u6790"},a=void 0,l={unversionedId:"rocketmq/rocketmq5/nameserver/route-manage/1route-register",id:"rocketmq/rocketmq5/nameserver/route-manage/1route-register",title:"NameServer\u8def\u7531\u6ce8\u518c",description:"NameServer\u8def\u7531\u6ce8\u518c\u7684\u8fc7\u7a0b\u548c\u539f\u7406\u5206\u6790",source:"@site/docs/rocketmq/rocketmq5/02-nameserver/route-manage/1route-register.md",sourceDirName:"rocketmq/rocketmq5/02-nameserver/route-manage",slug:"/rocketmq/rocketmq5/nameserver/route-manage/1route-register",permalink:"/docs/rocketmq/rocketmq5/nameserver/route-manage/1route-register",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/rocketmq/rocketmq5/02-nameserver/route-manage/1route-register.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1683078484,formattedLastUpdatedAt:"May 3, 2023",frontMatter:{title:"NameServer\u8def\u7531\u6ce8\u518c",linkTitle:"NameServer\u8def\u7531\u6ce8\u518c",date:"2023-01-05T00:00:00.000Z",weight:202301051651,description:"NameServer\u8def\u7531\u6ce8\u518c\u7684\u8fc7\u7a0b\u548c\u539f\u7406\u5206\u6790"},sidebar:"rocketmq5",previous:{title:"NameServer\u8def\u7531\u7ba1\u7406",permalink:"/docs/rocketmq/rocketmq5/nameserver/route-manage/"},next:{title:"NameServer\u8def\u7531\u5220\u9664",permalink:"/docs/rocketmq/rocketmq5/nameserver/route-manage/2route-delete"}},s={},p=[{value:"1. Broker\u53d1\u8d77\u8def\u7531\u6ce8\u518c",id:"1-broker\u53d1\u8d77\u8def\u7531\u6ce8\u518c",level:2},{value:"2.\u8def\u7531\u6ce8\u518c\u7684\u6d41\u7a0b",id:"2\u8def\u7531\u6ce8\u518c\u7684\u6d41\u7a0b",level:2},{value:"3.\u8def\u7531\u6ce8\u518c\u6d41\u7a0b\u6e90\u7801\u5206\u6790",id:"3\u8def\u7531\u6ce8\u518c\u6d41\u7a0b\u6e90\u7801\u5206\u6790",level:2},{value:"3.1\u542f\u52a8\u8fc7\u7a0b\u4e2d\u6ce8\u518c",id:"31\u542f\u52a8\u8fc7\u7a0b\u4e2d\u6ce8\u518c",level:3},{value:"3.2 \u5b9a\u65f6\u4efb\u52a1\u66f4\u65b0\u6ce8\u518c\u4fe1\u606f",id:"32-\u5b9a\u65f6\u4efb\u52a1\u66f4\u65b0\u6ce8\u518c\u4fe1\u606f",level:3},{value:"4. Broker\u8def\u7531\u6ce8\u518c\u8be6\u89e3",id:"4-broker\u8def\u7531\u6ce8\u518c\u8be6\u89e3",level:2}],c={toc:p},g="wrapper";function m(e){let{components:r,...t}=e;return(0,o.kt)(g,(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"1-broker\u53d1\u8d77\u8def\u7531\u6ce8\u518c"},"1. Broker\u53d1\u8d77\u8def\u7531\u6ce8\u518c"),(0,o.kt)("p",null,"\u5728\u4e86\u89e3\u8def\u7531\u6ce8\u518c\u7684\u673a\u5236\u4e4b\u524d\u9996\u5148\u8981\u77e5\u9053\u8def\u7531\u7684\u53d1\u8d77\u8005\u662f\u8c01\uff0c\u5728RocketMQ\u4e2d\u8def\u7531\u6ce8\u518c\u4e3b\u8981\u662f\u7531Broker\u53d1\u8d77\u3002Broker\u542f\u52a8\uff0c\u8def\u7531\u6ce8\u518c\u53d1\u8d77\u4e5f\u5206\u4e3a\u4e09\u79cd\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u666e\u901a\u7684\u6a21\u5f0f-\u5355\u4e2a\u4e3b\u65e0\u5907"),(0,o.kt)("li",{parentName:"ol"},"HA\u6a21\u5f0f-\u6709\u4e3b\u6709\u5907"),(0,o.kt)("li",{parentName:"ol"},"A-HA(AutoSwitch HA)\u4e3b\u5907\u81ea\u4e3b\u5207\u6362\u6a21\u5f0f-\u6709\u4e3b\u6709\u5907\uff0c\u4e3b\u5907\u81ea\u52a8\u5207\u6362")),(0,o.kt)("h2",{id:"2\u8def\u7531\u6ce8\u518c\u7684\u6d41\u7a0b"},"2.\u8def\u7531\u6ce8\u518c\u7684\u6d41\u7a0b"),(0,o.kt)("p",null,"\u5bf9\u5e94\u4e0a\u9762\u7684\u4e09\u79cd\u6a21\u5f0f\u5927\u4f53\u4e0a\u662f\u4e00\u6837\u7684\uff0c\u53ea\u662f\u5728A-HA\u7684\u6a21\u5f0f\u4e2dBroker\u9996\u5148\u4f1a\u5411Controller\u6ce8\u518c\u5e76\u4e14\u6ce8\u518c\u6210\u529f\u540e\u518d\u5c06\u8def\u7531\u4fe1\u606f\u6ce8\u518c\u5230Broker\u3002\nBroker\u542f\u52a8\u7684\u8fc7\u7a0b\u4e2d\u4f1a\u5f80\u6bcf\u4e00\u4e2a\u914d\u7f6e\u7684NameServer\u4e2d\u53d1\u9001\u4e00\u4e2aRequestCode.REGISTER_BROKER(\u6ce8\u518cBroker)\u7684\u8bf7\u6c42\u3002\u8bf7\u6c42\u4e2d\u5305\u542b\u4e86\u6574\u4e2aBroker\u7684\u5143\u6570\u636e\u3002\u7136\u540e\u5c06\u6570\u636e\u6ce8\u518c\u5230NameServer\u3002"),(0,o.kt)("h2",{id:"3\u8def\u7531\u6ce8\u518c\u6d41\u7a0b\u6e90\u7801\u5206\u6790"},"3.\u8def\u7531\u6ce8\u518c\u6d41\u7a0b\u6e90\u7801\u5206\u6790"),(0,o.kt)("p",null,"\u8def\u7531\u6ce8\u518c\u4e3b\u8981\u6709\u4e24\u4e2a\u5730\u65b9\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Broker\u542f\u52a8\u8fc7\u7a0b\u4e2d\u6ce8\u518c"),(0,o.kt)("li",{parentName:"ol"},"Broker\u5b9a\u65f6\u4efb\u52a1\u8c03\u7528")),(0,o.kt)("h3",{id:"31\u542f\u52a8\u8fc7\u7a0b\u4e2d\u6ce8\u518c"},"3.1\u542f\u52a8\u8fc7\u7a0b\u4e2d\u6ce8\u518c"),(0,o.kt)("p",null,"\u4ee3\u7801\u5165\u53e3\u5728 ",(0,o.kt)("strong",{parentName:"p"},"BrokerController#start ")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"public void start() throws Exception {\n\n    //\u7701\u7565\u90e8\u5206\u4ee3\u7801\n    startBasicService();\n\n    if (!isIsolated && !this.messageStoreConfig.isEnableDLegerCommitLog() && !this.messageStoreConfig.isDuplicationEnable()) {\n        changeSpecialServiceStatus(this.brokerConfig.getBrokerId() == MixAll.MASTER_ID);\n        this.registerBrokerAll(true, false, true);\n    }\n\n //\u7701\u7565\u90e8\u5206\u4ee3\u7801\n\n}\n")),(0,o.kt)("p",null,"\u542f\u52a8Broker\u5206\u4e3a\u4e24\u79cd\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u6b63\u5e38\u7684\u60c5\u51b5\u548cHA\u6a21\u5f0f\u4e0b\u542f\u52a8\u8fd9\u79cd\u6a21\u5f0f\u90fd\u662f\u8c03\u7528\u4e86\u5982\u4e0b\u7684\u4ee3\u7801\u5165\u53e3\u8fdb\u884c\u6ce8\u518c\uff1a")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"    if (!isIsolated && !this.messageStoreConfig.isEnableDLegerCommitLog() && !this.messageStoreConfig.isDuplicationEnable()) {\n        changeSpecialServiceStatus(this.brokerConfig.getBrokerId() == MixAll.MASTER_ID);\n        this.registerBrokerAll(true, false, true);\n    }\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"A-HA\u7684\u6a21\u5f0f\u542f\u52a8\uff0c\u8fd9\u4e2a\u9996\u5148\u9700\u8981Broker\u6ce8\u518c\u5230Controller\uff0cController\u7684\u903b\u8f91\u5904\u7406\u6210\u529f\u540e\u5c31\u4f1a\u5c06Broker\u6ce8\u518c\u5230Name Server,\u4ee5BrokerController#start\u7684\u65b9\u6cd5\u4e2d\u7684startBasicService()\u4f5c\u4e3a\u5165\u53e3")),(0,o.kt)("h3",{id:"32-\u5b9a\u65f6\u4efb\u52a1\u66f4\u65b0\u6ce8\u518c\u4fe1\u606f"},"3.2 \u5b9a\u65f6\u4efb\u52a1\u66f4\u65b0\u6ce8\u518c\u4fe1\u606f"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'scheduledFutures.add(this.scheduledExecutorService.scheduleAtFixedRate(new AbstractBrokerRunnable(this.getBrokerIdentity()) {\n        @Override\n        public void run0() {\n            try {\n                if (System.currentTimeMillis() < shouldStartTime) {\n                    BrokerController.LOG.info("Register to namesrv after {}", shouldStartTime);\n                    return;\n                }\n                if (isIsolated) {\n                    BrokerController.LOG.info("Skip register for broker is isolated");\n                    return;\n                }\n                BrokerController.this.registerBrokerAll(true, false, brokerConfig.isForceRegister());\n            } catch (Throwable e) {\n                BrokerController.LOG.error("registerBrokerAll Exception", e);\n            }\n        }\n    }, 1000 * 10, Math.max(10000, Math.min(brokerConfig.getRegisterNameServerPeriod(), 60000)), TimeUnit.MILLISECONDS));\n')),(0,o.kt)("p",null,"Broker\u542f\u52a8\u540e\u4f1a\u542f\u52a8\u4e00\u4e2a\u53bb\u66f4\u65b0Broker\u5728NameSrever\u7684\u8def\u7531\u4fe1\u606f\u7684\u5b9a\u65f6\u4efb\u52a1\u3002"),(0,o.kt)("h2",{id:"4-broker\u8def\u7531\u6ce8\u518c\u8be6\u89e3"},"4. Broker\u8def\u7531\u6ce8\u518c\u8be6\u89e3"),(0,o.kt)("p",null,"\u8def\u7531\u6700\u7ec8\u7684\u53d1\u8d77\u65b9\u6cd5\u662fBrokerController#registerBrokerAll"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"    public synchronized void registerBrokerAll(final boolean checkOrderConfig, boolean oneway, boolean forceRegister) {\n\n        TopicConfigAndMappingSerializeWrapper topicConfigWrapper = new TopicConfigAndMappingSerializeWrapper();\n\n        topicConfigWrapper.setDataVersion(this.getTopicConfigManager().getDataVersion());\n        topicConfigWrapper.setTopicConfigTable(this.getTopicConfigManager().getTopicConfigTable());\n\n        topicConfigWrapper.setTopicQueueMappingInfoMap(this.getTopicQueueMappingManager().getTopicQueueMappingTable().entrySet().stream().map(\n            entry -> new AbstractMap.SimpleImmutableEntry<>(entry.getKey(), TopicQueueMappingDetail.cloneAsMappingInfo(entry.getValue()))\n        ).collect(Collectors.toMap(Map.Entry::getKey, Map.Entry::getValue)));\n\n        if (!PermName.isWriteable(this.getBrokerConfig().getBrokerPermission())\n            || !PermName.isReadable(this.getBrokerConfig().getBrokerPermission())) {\n            ConcurrentHashMap<String, TopicConfig> topicConfigTable = new ConcurrentHashMap<>();\n            for (TopicConfig topicConfig : topicConfigWrapper.getTopicConfigTable().values()) {\n                TopicConfig tmp =\n                    new TopicConfig(topicConfig.getTopicName(), topicConfig.getReadQueueNums(), topicConfig.getWriteQueueNums(),\n                        topicConfig.getPerm() & this.brokerConfig.getBrokerPermission(), topicConfig.getTopicSysFlag());\n                topicConfigTable.put(topicConfig.getTopicName(), tmp);\n            }\n            topicConfigWrapper.setTopicConfigTable(topicConfigTable);\n        }\n\n        if (forceRegister || needRegister(this.brokerConfig.getBrokerClusterName(),\n            this.getBrokerAddr(),\n            this.brokerConfig.getBrokerName(),\n            this.brokerConfig.getBrokerId(),\n            this.brokerConfig.getRegisterBrokerTimeoutMills(),\n            this.brokerConfig.isInBrokerContainer())) {\n            doRegisterBrokerAll(checkOrderConfig, oneway, topicConfigWrapper);\n        }\n    }\n")),(0,o.kt)("p",null,"Broker\u5c06\u5143\u6570\u636e\u5305\u88c5\u6210 TopicConfigAndMappingSerializeWrapper \u53d1\u9001\u5230NameServer"))}m.isMDXComponent=!0}}]);