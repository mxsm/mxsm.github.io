"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[7636],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),l=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(p.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=l(n),d=r,g=s["".concat(p,".").concat(d)]||s[d]||m[d]||i;return n?o.createElement(g,a(a({ref:t},u),{},{components:n})):o.createElement(g,a({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[s]="string"==typeof e?e:r,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2748:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var o=n(7462),r=(n(7294),n(3905));const i={title:"RocketMQ\u6e90\u7801\u89e3\u6790-topic\u521b\u5efa\u673a\u5236",date:new Date("2020-03-25T00:00:00.000Z"),weight:202106112021},a=void 0,c={unversionedId:"rocketmq/rocketmq4/producer/RocketMQ-analysis-topic-create-strategy",id:"rocketmq/rocketmq4/producer/RocketMQ-analysis-topic-create-strategy",title:"RocketMQ\u6e90\u7801\u89e3\u6790-topic\u521b\u5efa\u673a\u5236",description:"\u4ee5\u4e0b\u6e90\u7801\u57fa\u4e8eRocket MQ 4.7.0",source:"@site/docs/rocketmq/rocketmq4/producer/RocketMQ-analysis-topic-create-strategy.md",sourceDirName:"rocketmq/rocketmq4/producer",slug:"/rocketmq/rocketmq4/producer/RocketMQ-analysis-topic-create-strategy",permalink:"/docs/rocketmq/rocketmq4/producer/RocketMQ-analysis-topic-create-strategy",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/rocketmq/rocketmq4/producer/RocketMQ-analysis-topic-create-strategy.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1682735967,formattedLastUpdatedAt:"Apr 29, 2023",frontMatter:{title:"RocketMQ\u6e90\u7801\u89e3\u6790-topic\u521b\u5efa\u673a\u5236",date:"2020-03-25T00:00:00.000Z",weight:202106112021},sidebar:"rocketmq4",previous:{title:"RocketMQ\u6e90\u7801\u89e3\u6790-\u751f\u4ea7\u8005\u6295\u9012\u6d88\u606f\u7b56\u7565",permalink:"/docs/rocketmq/rocketmq4/producer/RocketMQ-analysis-producer-msgsend-strategy"}},p={},l=[{value:"1. RocketMQ Topic\u521b\u5efa\u673a\u5236",id:"1-rocketmq-topic\u521b\u5efa\u673a\u5236",level:3},{value:"2. \u81ea\u52a8Topic",id:"2-\u81ea\u52a8topic",level:3},{value:"3. \u624b\u52a8\u521b\u5efa--\u9884\u5148\u521b\u5efa",id:"3-\u624b\u52a8\u521b\u5efa--\u9884\u5148\u521b\u5efa",level:3},{value:"\u901a\u8fc7\u754c\u9762\u63a7\u5236\u53f0\u521b\u5efa",id:"\u901a\u8fc7\u754c\u9762\u63a7\u5236\u53f0\u521b\u5efa",level:4}],u={toc:l},s="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(s,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u4ee5\u4e0b\u6e90\u7801\u57fa\u4e8eRocket MQ 4.7.0")),(0,r.kt)("h3",{id:"1-rocketmq-topic\u521b\u5efa\u673a\u5236"},"1. RocketMQ Topic\u521b\u5efa\u673a\u5236"),(0,r.kt)("p",null,"RocketMQ Topic\u521b\u5efa\u673a\u5236\u5206\u4e3a\u4e24\u79cd\uff1a\u4e00\u79cd\u81ea\u52a8\u521b\u5efa\uff0c\u4e00\u79cd\u624b\u52a8\u521b\u5efa\u3002\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6ebroker\u7684\u914d\u7f6e\u6587\u4ef6\u6765\u7981\u7528\u6216\u8005\u5141\u8bb8\u81ea\u52a8\u521b\u5efa\u3002\u9ed8\u8ba4\u662f\u5f00\u542f\u7684\u5141\u8bb8\u81ea\u52a8\u521b\u5efa"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"autoCreateTopicEnable=true/false")),(0,r.kt)("p",null,"\u4e0b\u9762\u4f1a\u7ed3\u5408\u6e90\u7801\u6765\u6df1\u5ea6\u5206\u6790\u4e00\u4e0b\u81ea\u52a8\u521b\u5efa\u548c\u624b\u52a8\u521b\u5efa\u7684\u8fc7\u7a0b\u3002"),(0,r.kt)("h3",{id:"2-\u81ea\u52a8topic"},"2. \u81ea\u52a8Topic"),(0,r.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0ctopic\u4e0d\u7528\u624b\u52a8\u521b\u5efa\uff0c\u5f53producer\u8fdb\u884c\u6d88\u606f\u53d1\u9001\u65f6\uff0c\u4f1a\u4ecenameserver\u62c9\u53d6topic\u7684\u8def\u7531\u4fe1\u606f\uff0c\u5982\u679ctopic\u7684\u8def\u7531\u4fe1\u606f\u4e0d\u5b58\u5728\uff0c\u90a3\u4e48\u4f1a\u9ed8\u8ba4\u62c9\u53d6broker\u542f\u52a8\u65f6\u9ed8\u8ba4\u521b\u5efa\u597d\u540d\u4e3a\u201cTBW102\u201d\u7684Topic,\u8fd9\u5b9a\u4e49\u5728org.apache.rocketmq.common.MixAll\u7c7b\u4e2d"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javaMixAll"},'// Will be created at broker when isAutoCreateTopicEnable\n public static final String AUTO_CREATE_TOPIC_KEY_TOPIC = "TBW102"; \n')),(0,r.kt)("p",null,"\u81ea\u52a8\u521b\u5efa\u5f00\u5173\u662f\u4e0bBrokerConfig\u7c7b\u4e2d\u6709\u4e00\u4e2a\u79c1\u6709\u53d8\u91cf\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"@ImportantField\nprivate boolean autoCreateTopicEnable = true;\n")),(0,r.kt)("p",null,"\u8fd9\u53d8\u91cf\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6e\u6587\u4ef6\u914d\u7f6e\u6765\u8fdb\u884c\u4fee\u6539\uff0c\u4ee3\u7801\u4e2d\u7684\u9ed8\u8ba4\u503c\u4e3atrue\uff0c\u6240\u4ee5\u5728\u9ed8\u8ba4\u7684\u60c5\u51b5\u4e0bRocket MQ\u662f\u4f1a\u81ea\u52a8\u521b\u5efaTopic\u7684\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u5728Broker\u542f\u52a8\uff0c\u4f1a\u8c03\u7528TopicConfigManager\u7684\u6784\u9020\u65b9\u6cd5\uff0c\u5728\u6784\u9020\u65b9\u6cd5\u4e2d\u5b9a\u4e49\u4e86\u4e00\u7cfb\u5217RocketMQ\u7cfb\u7edf\u5185\u7f6e\u7684\u4e00\u4e9b\u7cfb\u7edfTopic\uff08\u8fd9\u91cc\u53ea\u5173\u6ce8\u4e00\u4e0bTBW102\uff09:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"{\n    // MixAll.AUTO_CREATE_TOPIC_KEY_TOPIC\n    if (this.brokerController.getBrokerConfig().isAutoCreateTopicEnable()) {\n        String topic = MixAll.AUTO_CREATE_TOPIC_KEY_TOPIC;\n        TopicConfig topicConfig = new TopicConfig(topic);\n        this.systemTopicList.add(topic);\n        topicConfig.setReadQueueNums(this.brokerController.getBrokerConfig()\n            .getDefaultTopicQueueNums()); //8\n        topicConfig.setWriteQueueNums(this.brokerController.getBrokerConfig()\n            .getDefaultTopicQueueNums()); //8\n        int perm = PermName.PERM_INHERIT | PermName.PERM_READ | PermName.PERM_WRITE;\n        topicConfig.setPerm(perm);\n        this.topicConfigTable.put(topicConfig.getTopicName(), topicConfig);\n    }\n}\n")),(0,r.kt)("p",null,"\u8fd9\u91cc\u6709 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"this.brokerController.getBrokerConfig().isAutoCreateTopicEnable()"))," \u8fd9\u6837\u4e00\u6bb5\u4ee3\u7801\uff0c\u5728\u5f00\u542f\u5141\u8bb8\u81ea\u52a8\u521b\u5efa\u7684\u65f6\u5019\uff0c\u4f1a\u628a\u5f53\u524dTopic\u7684\u4fe1\u606f\u5b58\u5165topicConfigTable\u53d8\u91cf\u4e2d\u3002\u7136\u540e\u901a\u8fc7\u53d1\u9001\u5b9a\u671f\u53d1\u9001\u5fc3\u8df3\u5305\u628aTopic\u548cBroker\u7684\u4fe1\u606f\u53d1\u9001\u5230NameServer\u7684RouteInfoManager\u4e2d\u8fdb\u884c\u4fdd\u5b58\u3002\u5728BrokerController\u4e2d\u5b9a\u4e49\u4e86\u8fd9\u6837\u7684\u4e00\u4e2a\u5b9a\u65f6\u4efb\u52a1\u6765\u6267\u884c\u8fd9\u4e2a\u5fc3\u8df3\u5305\u7684\u53d1\u9001\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'this.scheduledExecutorService.scheduleAtFixedRate(new Runnable() {\n\n            @Override\n            public void run() {\n                try {\n                    BrokerController.this.registerBrokerAll(true, false, brokerConfig.isForceRegister());\n                } catch (Throwable e) {\n                    log.error("registerBrokerAll Exception", e);\n                }\n            }\n        }, 1000 * 10, Math.max(10000, Math.min(brokerConfig.getRegisterNameServerPeriod(), 60000)), TimeUnit.MILLISECONDS);\n\n')),(0,r.kt)("p",null,"\u8fd9\u91cc\u5c31\u8bf4\u660e\u4e86\u5982\u4f55\u628a\u6bcf\u4e2aBroker\u7684\u7cfb\u7edf\u81ea\u5b9a\u4e49\u7684Topic\u6ce8\u518c\u5230NameServer\u3002\u63a5\u4e0b\u6765\u770b\u5728\u53d1\u9001\u8fc7\u7a0b\u4e2d\u5982\u4f55\u4eceNameServer\u83b7\u53d6Topic\u7684\u8def\u7531\u4fe1\u606f\uff1a\nDefaultMQProducerImpl.sendDefaultImpl"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"private SendResult sendDefaultImpl(\n        Message msg,\n        final CommunicationMode communicationMode,\n        final SendCallback sendCallback,\n        final long timeout\n    ) throws MQClientException, RemotingException, MQBrokerException, InterruptedException {\n        \n        //\u7701\u7565\u4ee3\u7801\n        \n        //\u83b7\u53d6\u8def\u7531\u4fe1\u606f\n        TopicPublishInfo topicPublishInfo = this.tryToFindTopicPublishInfo(msg.getTopic());\n        \n    }\n")),(0,r.kt)("p",null,"\u901a\u8fc7DefaultMQProducerImpl.tryToFindTopicPublishInfo\u65b9\u6cd5\u83b7\u53d6Topic\u7684\u8def\u7531\u4fe1\u606f\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"    private TopicPublishInfo tryToFindTopicPublishInfo(final String topic) {\n        \n        TopicPublishInfo topicPublishInfo = this.topicPublishInfoTable.get(topic);\n        //\u7b2c\u4e00\u6b21\u4ece\u7f13\u5b58\u4e2d\u83b7\u53d6--\u80af\u5b9a\u6ca1\u6709\u56e0\u4e3a\u8fd8\u6ca1\u521b\u5efa\n        if (null == topicPublishInfo || !topicPublishInfo.ok()) {\n            this.topicPublishInfoTable.putIfAbsent(topic, new TopicPublishInfo());\n            //\u4eceNameServer\u83b7\u53d6--\u4e5f\u662f\u6ca1\u6709\uff0c\u56e0\u4e3a\u6ca1\u6709\u521b\u5efa\n            this.mQClientFactory.updateTopicRouteInfoFromNameServer(topic);\n            topicPublishInfo = this.topicPublishInfoTable.get(topic);\n        }\n\n        if (topicPublishInfo.isHaveTopicRouterInfo() || topicPublishInfo.ok()) {\n            return topicPublishInfo;\n        } else {\n            //\u7b2c\u4e8c\u6b21\u4ece\u8fd9\u91cc\u83b7\u53d6\n            this.mQClientFactory.updateTopicRouteInfoFromNameServer(topic, true, this.defaultMQProducer);\n            topicPublishInfo = this.topicPublishInfoTable.get(topic);\n            return topicPublishInfo;\n        }\n    }\n")),(0,r.kt)("p",null,"\u4e0b\u9762\u6765\u770b\u4e00\u4e0b ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"MQClientInstance.updateTopicRouteInfoFromNameServer"))," \u7684\u65b9\u6cd5:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"}," public boolean updateTopicRouteInfoFromNameServer(final String topic, boolean isDefault,\n        DefaultMQProducer defaultMQProducer) {\n            \n    //\u7701\u7565\u4ee3\u7801\n    \n    \n    if (isDefault && defaultMQProducer != null) {\n            //\u4f7f\u7528\u9ed8\u8ba4\u7684TBW102 Topic\u83b7\u53d6\u6570\u636e\n            topicRouteData = this.mQClientAPIImpl.getDefaultTopicRouteInfoFromNameServer(defaultMQProducer.getCreateTopicKey(),\n                            1000 * 3);\n                if (topicRouteData != null) {\n                    for (QueueData data : topicRouteData.getQueueDatas()) {\n                                int queueNums = Math.min(defaultMQProducer.getDefaultTopicQueueNums(), data.getReadQueueNums());\n                                data.setReadQueueNums(queueNums);\n                                data.setWriteQueueNums(queueNums);\n                            }\n                        }\n                    } else {\n                        //\u8fd9\u662f\u6b63\u5e38\u7684\n                        topicRouteData = this.mQClientAPIImpl.getTopicRouteInfoFromNameServer(topic, 1000 * 3);\n                    }\n      //\u7701\u7565\u4ee3\u7801      \n    }\n")),(0,r.kt)("p",null,"\u5982\u679cisDefault=true\u5e76\u4e14defaultMQProducer\u4e0d\u4e3a\u7a7a\uff0c\u4ecenameserver\u4e2d\u83b7\u53d6\u9ed8\u8ba4\u8def\u7531\u4fe1\u606f\uff0c\u6b64\u65f6\u4f1a\u83b7\u53d6\u6240\u6709\u5df2\u5f00\u542f\u81ea\u52a8\u521b\u5efa\u5f00\u5173\u7684broker\u7684\u9ed8\u8ba4\u201cTBW102\u201dtopic\u8def\u7531\u4fe1\u606f\uff0c\u5e76\u4fdd\u5b58\u9ed8\u8ba4\u7684topic\u6d88\u606f\u961f\u5217\u6570\u91cf\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u8fd9\u91cc\u4f1a\u6bd4\u8f83\u4e00\u4e0b\u914d\u5728\u5728 DefaultMQProducer.defaultTopicQueueNums\u4e2d\u7684\u9ed8\u8ba4\u503c\u548cTBW102\u4e2d\u7684\u503c\u54ea\u4e2a\u66f4\u5c0f\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},' if (topicRouteData != null) {\n        TopicRouteData old = this.topicRouteTable.get(topic);\n        boolean changed = topicRouteDataIsChange(old, topicRouteData);\n        if (!changed) {\n            changed = this.isNeedUpdateTopicRouteInfo(topic);\n        } else {\n            log.info("the topic[{}] route info changed, old[{}] ,new[{}]", topic, old, topicRouteData);\n        }\n }\n')),(0,r.kt)("p",null,"\u5224\u65ad\u83b7\u53d6\u9ed8\u8ba4\u7684\u662f\u5426\u5b58\u5728\uff0c\u5982\u679c\u5b58\u5728\u628a\u5f53\u524d\u7684Topic\u7684\u4fe1\u606f\u66f4\u65b0\u3002\u4e5f\u5c31\u662f\u628aTBW102 Topic\u7684\u6570\u636e\u66f4\u65b0\u4e3a\u81ea\u52a8\u521b\u5efa\u7684\u6570\u636e\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},' if (changed) {\n    TopicRouteData cloneTopicRouteData = topicRouteData.cloneTopicRouteData();\n\n    for (BrokerData bd : topicRouteData.getBrokerDatas()) {\n        this.brokerAddrTable.put(bd.getBrokerName(), bd.getBrokerAddrs());\n    }\n\n    // Update Pub info\n    {\n        TopicPublishInfo publishInfo = topicRouteData2TopicPublishInfo(topic, topicRouteData);\n        publishInfo.setHaveTopicRouterInfo(true);\n        Iterator<Entry<String, MQProducerInner>> it = this.producerTable.entrySet().iterator();\n        while (it.hasNext()) {\n            Entry<String, MQProducerInner> entry = it.next();\n            MQProducerInner impl = entry.getValue();\n            if (impl != null) {\n                impl.updateTopicPublishInfo(topic, publishInfo);\n            }\n        }\n    }\n        // Update sub info\n    {\n        Set<MessageQueue> subscribeInfo = topicRouteData2TopicSubscribeInfo(topic, topicRouteData);\n        Iterator<Entry<String, MQConsumerInner>> it = this.consumerTable.entrySet().iterator();\n        while (it.hasNext()) {\n            Entry<String, MQConsumerInner> entry = it.next();\n            MQConsumerInner impl = entry.getValue();\n            if (impl != null) {\n                impl.updateTopicSubscribeInfo(topic, subscribeInfo);\n            }\n        }\n    }\n    log.info("topicRouteTable.put. Topic = {}, TopicRouteData[{}]", topic, cloneTopicRouteData);\n    this.topicRouteTable.put(topic, cloneTopicRouteData);\n    return true;\n}\n')),(0,r.kt)("p",null,"\u66f4\u65b0\u672c\u5730\u7684\u7f13\u5b58\u3002\u8fd9\u6837TBW102 Topic\u7684\u8d1f\u8f7d\u548c\u4e00\u4e9b\u9ed8\u8ba4\u7684\u8def\u7531\u4fe1\u606f\u5c31\u4f1a\u88ab\u81ea\u5df1\u521b\u5efa\u7684Topic\u4f7f\u7528\u3002\u8fd9\u91cc\u5c31\u662f\u6574\u4e2a\u81ea\u52a8\u521b\u5efa\u7684\u8fc7\u7a0b.",(0,r.kt)("br",{parentName:"p"}),"\n","\u603b\u7ed3\u4e00\u4e0b\u5c31\u662f\uff1a\u901a\u8fc7\u4f7f\u7528\u7cfb\u7edf\u5185\u90e8\u7684\u4e00\u4e2aTBW102\u7684Topic\u7684\u914d\u7f6e\u6765\u81ea\u52a8\u521b\u5efa\u5f53\u524d\u7528\u6237\u7684\u8981\u521b\u5efa\u7684\u81ea\u5b9a\u4e49Topic\u3002"),(0,r.kt)("h3",{id:"3-\u624b\u52a8\u521b\u5efa--\u9884\u5148\u521b\u5efa"},"3. \u624b\u52a8\u521b\u5efa--\u9884\u5148\u521b\u5efa"),(0,r.kt)("p",null,"\u624b\u52a8\u521b\u5efa\u4e5f\u53eb\u9884\u5148\u521b\u5efa\uff0c\u5c31\u662f\u5728\u4f7f\u7528Topic\u4e4b\u524d\u5c31\u521b\u5efa\uff0c\u53ef\u4ee5\u901a\u8fc7\u547d\u4ee4\u884c\u6216\u8005\u901a\u8fc7RocketMQ\u7684\u7ba1\u7406\u754c\u9762\u521b\u5efaTopic\u3002"),(0,r.kt)("h4",{id:"\u901a\u8fc7\u754c\u9762\u63a7\u5236\u53f0\u521b\u5efa"},"\u901a\u8fc7\u754c\u9762\u63a7\u5236\u53f0\u521b\u5efa"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u9879\u76ee\u5730\u5740\uff1a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/rocketmq-externals"},"https://github.com/apache/rocketmq-externals"))),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/document/master/image/MQ/RocketMQ/createTopicByHuman.png",alt:null})),(0,r.kt)("p",null,"TopicController\u4e3b\u8981\u8d1f\u8d23Topic\u7684\u7ba1\u7406"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'@RequestMapping(value = "/createOrUpdate.do", method = { RequestMethod.POST})\n@ResponseBody\npublic Object topicCreateOrUpdateRequest(@RequestBody TopicConfigInfo topicCreateOrUpdateRequest) {\n    Preconditions.checkArgument(CollectionUtils.isNotEmpty(topicCreateOrUpdateRequest.getBrokerNameList()) || CollectionUtils.isNotEmpty(topicCreateOrUpdateRequest.getClusterNameList()),\n            "clusterName or brokerName can not be all blank");\n    logger.info("op=look topicCreateOrUpdateRequest={}", JsonUtil.obj2String(topicCreateOrUpdateRequest));\n    topicService.createOrUpdate(topicCreateOrUpdateRequest);\n    return true;\n}\n')),(0,r.kt)("p",null,"\u7136\u540e\u901a\u8fc7MQAdminExtImpl.createAndUpdateTopicConfig\u65b9\u6cd5\u6765\u521b\u5efa\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"    @Override\n    public void createAndUpdateTopicConfig(String addr, TopicConfig config)\n        throws RemotingException, MQBrokerException, InterruptedException, MQClientException {\n        MQAdminInstance.threadLocalMQAdminExt().createAndUpdateTopicConfig(addr, config);\n    }\n")),(0,r.kt)("p",null,"\u901a\u8fc7\u8c03\u7528DefaultMQAdminExtImpl.createAndUpdateTopicConfig\u521b\u5efaTopic"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"@Override\npublic void createAndUpdateTopicConfig(String addr, TopicConfig config) throws RemotingException, MQBrokerException,\n        InterruptedException, MQClientException {\n    this.mqClientInstance.getMQClientAPIImpl().createTopic(addr, this.defaultMQAdminExt.getCreateTopicKey(), config, timeoutMillis);\n}\n")),(0,r.kt)("p",null,"\u6700\u540e\u901a\u8fc7MQClientAPIImpl.createTopic\u521b\u5efaTopic"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"    public void createTopic(final String addr, final String defaultTopic, final TopicConfig topicConfig,\n        final long timeoutMillis)\n        throws RemotingException, MQBrokerException, InterruptedException, MQClientException {\n        CreateTopicRequestHeader requestHeader = new CreateTopicRequestHeader();\n        requestHeader.setTopic(topicConfig.getTopicName());\n        requestHeader.setDefaultTopic(defaultTopic);\n        requestHeader.setReadQueueNums(topicConfig.getReadQueueNums());\n        requestHeader.setWriteQueueNums(topicConfig.getWriteQueueNums());\n        requestHeader.setPerm(topicConfig.getPerm());\n        requestHeader.setTopicFilterType(topicConfig.getTopicFilterType().name());\n        requestHeader.setTopicSysFlag(topicConfig.getTopicSysFlag());\n        requestHeader.setOrder(topicConfig.isOrder());\n\n        RemotingCommand request = RemotingCommand.createRequestCommand(RequestCode.UPDATE_AND_CREATE_TOPIC, requestHeader);\n\n        RemotingCommand response = this.remotingClient.invokeSync(MixAll.brokerVIPChannel(this.clientConfig.isVipChannelEnabled(), addr),\n            request, timeoutMillis);\n        assert response != null;\n        switch (response.getCode()) {\n            case ResponseCode.SUCCESS: {\n                return;\n            }\n            default:\n                break;\n        }\n\n        throw new MQClientException(response.getCode(), response.getRemark());\n    }\n")))}m.isMDXComponent=!0}}]);