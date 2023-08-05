"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[6950],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>u});var o=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=o.createContext({}),p=function(e){var r=o.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},c=function(e){var r=p(e.components);return o.createElement(s.Provider,{value:r},e.children)},m="mdxType",g={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},k=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(t),k=n,u=m["".concat(s,".").concat(k)]||m[k]||g[k]||i;return t?o.createElement(u,a(a({ref:r},c),{},{components:t})):o.createElement(u,a({ref:r},c))}));function u(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,a=new Array(i);a[0]=k;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[m]="string"==typeof e?e:n,a[1]=l;for(var p=2;p<i;p++)a[p]=t[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}k.displayName="MDXCreateElement"},1810:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>a,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var o=t(7462),n=(t(7294),t(3905));const i={title:"NameServer\u8def\u7531\u6ce8\u518c",linkTitle:"NameServer\u8def\u7531\u6ce8\u518c",date:new Date("2023-01-05T00:00:00.000Z"),weight:202301051651,description:"NameServer\u8def\u7531\u6ce8\u518c\u7684\u8fc7\u7a0b\u548c\u539f\u7406\u5206\u6790"},a=void 0,l={unversionedId:"rocketmq/rocketmq5/nameserver/route-manage/route-register",id:"rocketmq/rocketmq5/nameserver/route-manage/route-register",title:"NameServer\u8def\u7531\u6ce8\u518c",description:"NameServer\u8def\u7531\u6ce8\u518c\u7684\u8fc7\u7a0b\u548c\u539f\u7406\u5206\u6790",source:"@site/docs/rocketmq/rocketmq5/02-nameserver/01-route-manage/01-route-register.md",sourceDirName:"rocketmq/rocketmq5/02-nameserver/01-route-manage",slug:"/rocketmq/rocketmq5/nameserver/route-manage/route-register",permalink:"/docs/rocketmq/rocketmq5/nameserver/route-manage/route-register",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/rocketmq/rocketmq5/02-nameserver/01-route-manage/01-route-register.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1691228615,formattedLastUpdatedAt:"Aug 5, 2023",sidebarPosition:1,frontMatter:{title:"NameServer\u8def\u7531\u6ce8\u518c",linkTitle:"NameServer\u8def\u7531\u6ce8\u518c",date:"2023-01-05T00:00:00.000Z",weight:202301051651,description:"NameServer\u8def\u7531\u6ce8\u518c\u7684\u8fc7\u7a0b\u548c\u539f\u7406\u5206\u6790"},sidebar:"rocketmq5",previous:{title:"RocketMQ5.0 NameServer\u67b6\u6784\u8bbe\u8ba1",permalink:"/docs/rocketmq/rocketmq5/nameserver/nameserver-architecture"},next:{title:"RocketMQ5.0 NameServer\u542f\u52a8\u6d41\u7a0b",permalink:"/docs/rocketmq/rocketmq5/nameserver/nameserver-start-process"}},s={},p=[{value:"1. Broker\u53d1\u8d77\u8def\u7531\u6ce8\u518c",id:"1-broker\u53d1\u8d77\u8def\u7531\u6ce8\u518c",level:2},{value:"2.\u8def\u7531\u6ce8\u518c\u7684\u6d41\u7a0b",id:"2\u8def\u7531\u6ce8\u518c\u7684\u6d41\u7a0b",level:2},{value:"3.\u8def\u7531\u6ce8\u518c\u6d41\u7a0b\u6e90\u7801\u5206\u6790",id:"3\u8def\u7531\u6ce8\u518c\u6d41\u7a0b\u6e90\u7801\u5206\u6790",level:2},{value:"3.1\u542f\u52a8\u8fc7\u7a0b\u4e2d\u6ce8\u518c",id:"31\u542f\u52a8\u8fc7\u7a0b\u4e2d\u6ce8\u518c",level:3},{value:"3.2 \u5b9a\u65f6\u4efb\u52a1\u66f4\u65b0\u6ce8\u518c\u4fe1\u606f",id:"32-\u5b9a\u65f6\u4efb\u52a1\u66f4\u65b0\u6ce8\u518c\u4fe1\u606f",level:3},{value:"4. Broker\u8def\u7531\u6ce8\u518c\u8be6\u89e3",id:"4-broker\u8def\u7531\u6ce8\u518c\u8be6\u89e3",level:2},{value:"5. \u603b\u7ed3",id:"5-\u603b\u7ed3",level:2}],c={toc:p},m="wrapper";function g(e){let{components:r,...t}=e;return(0,n.kt)(m,(0,o.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"1-broker\u53d1\u8d77\u8def\u7531\u6ce8\u518c"},"1. Broker\u53d1\u8d77\u8def\u7531\u6ce8\u518c"),(0,n.kt)("p",null,"\u5728\u4e86\u89e3\u8def\u7531\u6ce8\u518c\u7684\u673a\u5236\u4e4b\u524d\u9996\u5148\u8981\u77e5\u9053\u8def\u7531\u7684\u53d1\u8d77\u8005\u662f\u8c01\uff0c\u5728RocketMQ\u4e2d\u8def\u7531\u6ce8\u518c\u4e3b\u8981\u662f\u7531Broker\u53d1\u8d77\u3002Broker\u542f\u52a8\uff0c\u8def\u7531\u6ce8\u518c\u53d1\u8d77\u4e5f\u5206\u4e3a\u4e09\u79cd\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u666e\u901a\u7684\u6a21\u5f0f-\u5355\u4e2a\u4e3b\u65e0\u5907"),(0,n.kt)("li",{parentName:"ol"},"HA\u6a21\u5f0f-\u6709\u4e3b\u6709\u5907"),(0,n.kt)("li",{parentName:"ol"},"A-HA(AutoSwitch HA)\u4e3b\u5907\u81ea\u4e3b\u5207\u6362\u6a21\u5f0f-\u6709\u4e3b\u6709\u5907\uff0c\u4e3b\u5907\u81ea\u52a8\u5207\u6362")),(0,n.kt)("h2",{id:"2\u8def\u7531\u6ce8\u518c\u7684\u6d41\u7a0b"},"2.\u8def\u7531\u6ce8\u518c\u7684\u6d41\u7a0b"),(0,n.kt)("p",null,"\u5bf9\u5e94\u4e0a\u9762\u7684\u4e09\u79cd\u6a21\u5f0f\u5927\u4f53\u4e0a\u662f\u4e00\u6837\u7684\uff0c\u53ea\u662f\u5728A-HA\u7684\u6a21\u5f0f\u4e2dBroker\u9996\u5148\u4f1a\u5411Controller\u6ce8\u518c\u5e76\u4e14\u6ce8\u518c\u6210\u529f\u540e\u518d\u5c06\u8def\u7531\u4fe1\u606f\u6ce8\u518c\u5230Broker\u3002\nBroker\u542f\u52a8\u7684\u8fc7\u7a0b\u4e2d\u4f1a\u5f80\u6bcf\u4e00\u4e2a\u914d\u7f6e\u7684NameServer\u4e2d\u53d1\u9001\u4e00\u4e2aRequestCode.REGISTER_BROKER(\u6ce8\u518cBroker)\u7684\u8bf7\u6c42\u3002\u8bf7\u6c42\u4e2d\u5305\u542b\u4e86\u6574\u4e2aBroker\u7684\u5143\u6570\u636e\u3002\u7136\u540e\u5c06\u6570\u636e\u6ce8\u518c\u5230NameServer\u3002"),(0,n.kt)("h2",{id:"3\u8def\u7531\u6ce8\u518c\u6d41\u7a0b\u6e90\u7801\u5206\u6790"},"3.\u8def\u7531\u6ce8\u518c\u6d41\u7a0b\u6e90\u7801\u5206\u6790"),(0,n.kt)("p",null,"\u8def\u7531\u6ce8\u518c\u4e3b\u8981\u6709\u4e24\u4e2a\u5730\u65b9\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Broker\u542f\u52a8\u8fc7\u7a0b\u4e2d\u6ce8\u518c"),(0,n.kt)("li",{parentName:"ol"},"Broker\u5b9a\u65f6\u4efb\u52a1\u8c03\u7528")),(0,n.kt)("h3",{id:"31\u542f\u52a8\u8fc7\u7a0b\u4e2d\u6ce8\u518c"},"3.1\u542f\u52a8\u8fc7\u7a0b\u4e2d\u6ce8\u518c"),(0,n.kt)("p",null,"\u4ee3\u7801\u5165\u53e3\u5728 ",(0,n.kt)("strong",{parentName:"p"},"BrokerController#start ")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"public void start() throws Exception {\n\n    //\u7701\u7565\u90e8\u5206\u4ee3\u7801\n    startBasicService();\n\n    if (!isIsolated && !this.messageStoreConfig.isEnableDLegerCommitLog() && !this.messageStoreConfig.isDuplicationEnable()) {\n        changeSpecialServiceStatus(this.brokerConfig.getBrokerId() == MixAll.MASTER_ID);\n        this.registerBrokerAll(true, false, true);\n    }\n\n //\u7701\u7565\u90e8\u5206\u4ee3\u7801\n\n}\n")),(0,n.kt)("p",null,"\u542f\u52a8Broker\u5206\u4e3a\u4e24\u79cd\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u6b63\u5e38\u7684\u60c5\u51b5\u548cHA\u6a21\u5f0f\u4e0b\u542f\u52a8\u8fd9\u79cd\u6a21\u5f0f\u90fd\u662f\u8c03\u7528\u4e86\u5982\u4e0b\u7684\u4ee3\u7801\u5165\u53e3\u8fdb\u884c\u6ce8\u518c\uff1a")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"    if (!isIsolated && !this.messageStoreConfig.isEnableDLegerCommitLog() && !this.messageStoreConfig.isDuplicationEnable()) {\n        changeSpecialServiceStatus(this.brokerConfig.getBrokerId() == MixAll.MASTER_ID);\n        this.registerBrokerAll(true, false, true);\n    }\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"A-HA\u7684\u6a21\u5f0f\u542f\u52a8\uff0c\u8fd9\u4e2a\u9996\u5148\u9700\u8981Broker\u6ce8\u518c\u5230Controller\uff0cController\u7684\u903b\u8f91\u5904\u7406\u6210\u529f\u540e\u5c31\u4f1a\u5c06Broker\u6ce8\u518c\u5230Name Server,\u4ee5BrokerController#start\u7684\u65b9\u6cd5\u4e2d\u7684startBasicService()\u4f5c\u4e3a\u5165\u53e3")),(0,n.kt)("h3",{id:"32-\u5b9a\u65f6\u4efb\u52a1\u66f4\u65b0\u6ce8\u518c\u4fe1\u606f"},"3.2 \u5b9a\u65f6\u4efb\u52a1\u66f4\u65b0\u6ce8\u518c\u4fe1\u606f"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'scheduledFutures.add(this.scheduledExecutorService.scheduleAtFixedRate(new AbstractBrokerRunnable(this.getBrokerIdentity()) {\n        @Override\n        public void run0() {\n            try {\n                if (System.currentTimeMillis() < shouldStartTime) {\n                    BrokerController.LOG.info("Register to namesrv after {}", shouldStartTime);\n                    return;\n                }\n                if (isIsolated) {\n                    BrokerController.LOG.info("Skip register for broker is isolated");\n                    return;\n                }\n                BrokerController.this.registerBrokerAll(true, false, brokerConfig.isForceRegister());\n            } catch (Throwable e) {\n                BrokerController.LOG.error("registerBrokerAll Exception", e);\n            }\n        }\n    }, 1000 * 10, Math.max(10000, Math.min(brokerConfig.getRegisterNameServerPeriod(), 60000)), TimeUnit.MILLISECONDS));\n')),(0,n.kt)("p",null,"Broker\u542f\u52a8\u540e\u4f1a\u542f\u52a8\u4e00\u4e2a\u53bb\u66f4\u65b0Broker\u5728NameSrever\u7684\u8def\u7531\u4fe1\u606f\u7684\u5b9a\u65f6\u4efb\u52a1\u3002"),(0,n.kt)("h2",{id:"4-broker\u8def\u7531\u6ce8\u518c\u8be6\u89e3"},"4. Broker\u8def\u7531\u6ce8\u518c\u8be6\u89e3"),(0,n.kt)("p",null,"\u8def\u7531\u6700\u7ec8\u7684\u53d1\u8d77\u65b9\u6cd5\u662fBrokerController#registerBrokerAll"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"    public synchronized void registerBrokerAll(final boolean checkOrderConfig, boolean oneway, boolean forceRegister) {\n\n        TopicConfigAndMappingSerializeWrapper topicConfigWrapper = new TopicConfigAndMappingSerializeWrapper();\n\n        topicConfigWrapper.setDataVersion(this.getTopicConfigManager().getDataVersion());\n        topicConfigWrapper.setTopicConfigTable(this.getTopicConfigManager().getTopicConfigTable());\n\n        topicConfigWrapper.setTopicQueueMappingInfoMap(this.getTopicQueueMappingManager().getTopicQueueMappingTable().entrySet().stream().map(\n            entry -> new AbstractMap.SimpleImmutableEntry<>(entry.getKey(), TopicQueueMappingDetail.cloneAsMappingInfo(entry.getValue()))\n        ).collect(Collectors.toMap(Map.Entry::getKey, Map.Entry::getValue)));\n\n        if (!PermName.isWriteable(this.getBrokerConfig().getBrokerPermission())\n            || !PermName.isReadable(this.getBrokerConfig().getBrokerPermission())) {\n            ConcurrentHashMap<String, TopicConfig> topicConfigTable = new ConcurrentHashMap<>();\n            for (TopicConfig topicConfig : topicConfigWrapper.getTopicConfigTable().values()) {\n                TopicConfig tmp =\n                    new TopicConfig(topicConfig.getTopicName(), topicConfig.getReadQueueNums(), topicConfig.getWriteQueueNums(),\n                        topicConfig.getPerm() & this.brokerConfig.getBrokerPermission(), topicConfig.getTopicSysFlag());\n                topicConfigTable.put(topicConfig.getTopicName(), tmp);\n            }\n            topicConfigWrapper.setTopicConfigTable(topicConfigTable);\n        }\n\n        if (forceRegister || needRegister(this.brokerConfig.getBrokerClusterName(),\n            this.getBrokerAddr(),\n            this.brokerConfig.getBrokerName(),\n            this.brokerConfig.getBrokerId(),\n            this.brokerConfig.getRegisterBrokerTimeoutMills(),\n            this.brokerConfig.isInBrokerContainer())) {\n            doRegisterBrokerAll(checkOrderConfig, oneway, topicConfigWrapper);\n        }\n    }\n")),(0,n.kt)("p",null,"Broker\u5c06\u5143\u6570\u636e\u5305\u88c5\u6210 TopicConfigAndMappingSerializeWrapper \u53d1\u9001\u5230NameServer"),(0,n.kt)("h2",{id:"5-\u603b\u7ed3"},"5. \u603b\u7ed3"),(0,n.kt)("p",null,"RocketMQ NameServer \u662f RocketMQ \u7684\u6838\u5fc3\u7ec4\u4ef6\u4e4b\u4e00\uff0c\u4e3b\u8981\u8d1f\u8d23\u7ba1\u7406\u548c\u7ef4\u62a4\u6d88\u606f\u961f\u5217\u7684\u8def\u7531\u4fe1\u606f\uff0c\u540c\u65f6\u63d0\u4f9b\u4e86\u6ce8\u518c\u548c\u53d1\u73b0\u670d\u52a1\u7684\u529f\u80fd\u3002\u4ee5\u4e0b\u662f RocketMQ NameServer \u8def\u7531\u6ce8\u518c\u7684\u7b80\u8981\u603b\u7ed3\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"NameServer \u7ef4\u62a4\u4e86 Broker \u96c6\u7fa4\u7684\u5730\u5740\u5217\u8868\u548c Topic \u7684\u8def\u7531\u4fe1\u606f\u3002\u5f53 Producer \u6216 Consumer \u53d1\u8d77\u8bf7\u6c42\u65f6\uff0cNameServer \u4f1a\u6839\u636e\u8bf7\u6c42\u7684 Topic \u627e\u5230\u5bf9\u5e94\u7684 Broker \u5730\u5740\uff0c\u5c06\u8bf7\u6c42\u8f6c\u53d1\u5230\u5bf9\u5e94\u7684 Broker \u4e0a\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u6bcf\u4e2a Broker \u5728\u542f\u52a8\u65f6\u4f1a\u5411\u6240\u6709\u914d\u7f6e\u7684 NameServer \u53d1\u9001\u5fc3\u8df3\u5305\uff0c\u5e76\u5b9a\u671f\u53d1\u9001\u66f4\u65b0\u8def\u7531\u4fe1\u606f\u7684\u8bf7\u6c42\u3002NameServer \u6536\u5230\u8fd9\u4e9b\u8bf7\u6c42\u540e\uff0c\u4f1a\u5c06 Broker \u7684\u5730\u5740\u4fe1\u606f\u548c Topic \u8def\u7531\u4fe1\u606f\u66f4\u65b0\u5230\u81ea\u5df1\u7684\u5185\u5b58\u4e2d\u3002"),(0,n.kt)("li",{parentName:"ol"},"Producer \u5728\u53d1\u9001\u6d88\u606f\u4e4b\u524d\u9700\u8981\u5411 NameServer \u67e5\u8be2\u6307\u5b9a Topic \u7684\u8def\u7531\u4fe1\u606f\uff0c\u5305\u62ec\u8be5 Topic \u4e0b\u6709\u54ea\u4e9b Broker \u8d1f\u8d23\u6d88\u606f\u5b58\u50a8\u548c\u6d88\u8d39\uff0c\u5e76\u6839\u636e\u8d1f\u8f7d\u5747\u8861\u7b97\u6cd5\u9009\u62e9\u4e00\u4e2a Broker \u53d1\u9001\u6d88\u606f\u3002"),(0,n.kt)("li",{parentName:"ol"},"Consumer \u5728\u542f\u52a8\u65f6\u9700\u8981\u5411 NameServer \u67e5\u8be2\u6307\u5b9a Topic \u7684\u8def\u7531\u4fe1\u606f\uff0c\u83b7\u53d6\u8be5 Topic \u4e0b\u6240\u6709\u7684 Broker \u5730\u5740\uff0c\u5e76\u6839\u636e\u8d1f\u8f7d\u5747\u8861\u7b97\u6cd5\u4ece\u5176\u4e2d\u9009\u62e9\u4e00\u4e2a\u6216\u591a\u4e2a Broker \u8ba2\u9605\u6d88\u606f\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u5982\u679c Broker \u96c6\u7fa4\u53d1\u751f\u53d8\u5316\uff0c\u4f8b\u5982\u65b0\u589e\u6216\u4e0b\u7ebf\u4e86 Broker\uff0c\u6216\u8005\u67d0\u4e2a Broker \u4e0a\u4e0b\u7ebf\u4e86 Topic\uff0cNameServer \u4f1a\u53ca\u65f6\u66f4\u65b0\u81ea\u5df1\u7684\u8def\u7531\u4fe1\u606f\uff0c\u5e76\u901a\u77e5 Producer \u548c Consumer \u8fdb\u884c\u76f8\u5e94\u7684\u8c03\u6574\u3002")),(0,n.kt)("p",null,"\u603b\u4e4b\uff0cNameServer \u8def\u7531\u6ce8\u518c\u662f RocketMQ \u67b6\u6784\u4e2d\u975e\u5e38\u91cd\u8981\u7684\u4e00\u73af\uff0c\u5b83\u5b9e\u73b0\u4e86\u6d88\u606f\u961f\u5217\u7684\u52a8\u6001\u8def\u7531\u548c\u8d1f\u8f7d\u5747\u8861\uff0c\u5e76\u80fd\u591f\u81ea\u9002\u5e94\u5730\u5904\u7406 Broker \u96c6\u7fa4\u53d8\u5316\u7684\u60c5\u51b5\uff0c\u4fdd\u8bc1\u4e86\u6d88\u606f\u7684\u9ad8\u53ef\u7528\u548c\u9ad8\u6027\u80fd\u3002"))}g.isMDXComponent=!0}}]);