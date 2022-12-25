"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[1634],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},i=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,g=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(g,s(s({ref:t},i),{},{components:n})):r.createElement(g,s({ref:t},i))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:a,s[1]=c;for(var u=2;u<o;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3237:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const o={title:"RocketMQ\u6e90\u7801\u89e3\u6790-producer\u53d1\u9001\u6d88\u606f\u7684\u6d41\u7a0b",date:new Date("2020-03-22T00:00:00.000Z"),weight:202106112049},s=void 0,c={unversionedId:"rocketmq/rocketmq4/producer/RocketMQ-analysis-producer-messagesend",id:"rocketmq/rocketmq4/producer/RocketMQ-analysis-producer-messagesend",title:"RocketMQ\u6e90\u7801\u89e3\u6790-producer\u53d1\u9001\u6d88\u606f\u7684\u6d41\u7a0b",description:"\u4ee5\u4e0b\u6e90\u7801\u57fa\u4e8eRocket MQ 4.7.0",source:"@site/docs/rocketmq/rocketmq4/producer/RocketMQ-analysis-producer-messagesend.md",sourceDirName:"rocketmq/rocketmq4/producer",slug:"/rocketmq/rocketmq4/producer/RocketMQ-analysis-producer-messagesend",permalink:"/docs/rocketmq/rocketmq4/producer/RocketMQ-analysis-producer-messagesend",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/rocketmq/rocketmq4/producer/RocketMQ-analysis-producer-messagesend.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1671958290,formattedLastUpdatedAt:"Dec 25, 2022",frontMatter:{title:"RocketMQ\u6e90\u7801\u89e3\u6790-producer\u53d1\u9001\u6d88\u606f\u7684\u6d41\u7a0b",date:"2020-03-22T00:00:00.000Z",weight:202106112049},sidebar:"rocketmq4",previous:{title:"Producer",permalink:"/docs/rocketmq/rocketmq4/producer/"},next:{title:"RocketMQ\u6e90\u7801\u89e3\u6790-\u751f\u4ea7\u8005\u6295\u9012\u6d88\u606f\u7b56\u7565",permalink:"/docs/rocketmq/rocketmq4/producer/RocketMQ-analysis-producer-msgsend-strategy"}},l={},u=[{value:"1. \u8c03\u7528\u6d41\u7a0b",id:"1-\u8c03\u7528\u6d41\u7a0b",level:3},{value:"1\u3001Producer\u7aef\u53d1\u9001\u540c\u6b65\u6d88\u606f",id:"1producer\u7aef\u53d1\u9001\u540c\u6b65\u6d88\u606f",level:4},{value:"2\u3001\u53d1\u9001\u5f02\u6b65\u6d88\u606f",id:"2\u53d1\u9001\u5f02\u6b65\u6d88\u606f",level:4},{value:"3\u3001\u5355\u5411\u53d1\u9001\u6d88\u606f",id:"3\u5355\u5411\u53d1\u9001\u6d88\u606f",level:4},{value:"2. \u6d88\u606f\u53d1\u9001\u6d41\u7a0b\u6e90\u7801\u89e3\u6790",id:"2-\u6d88\u606f\u53d1\u9001\u6d41\u7a0b\u6e90\u7801\u89e3\u6790",level:3},{value:"3. \u6d88\u606f\u7684\u53d1\u9001",id:"3-\u6d88\u606f\u7684\u53d1\u9001",level:3}],i={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u4ee5\u4e0b\u6e90\u7801\u57fa\u4e8eRocket MQ 4.7.0")),(0,a.kt)("h3",{id:"1-\u8c03\u7528\u6d41\u7a0b"},"1. \u8c03\u7528\u6d41\u7a0b"),(0,a.kt)("p",null,"RocketMQ\u63d0\u4f9b\u7684Producer\u5b9e\u73b0\u4e3aDefaultMQProducer\u3002Producer\u5728\u521b\u5efa\u7684\u65f6\u5019\u5fc5\u987b\u6307\u5b9aProducer Group Name\uff0c\u5728\u6b63\u5f0f\u53d1\u9001\u6d88\u606f\u4e4b\u524d\u9700\u8981\u8c03\u7528start\u65b9\u6cd5\u521d\u59cb\u5316Producer"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/other/git/MQ%E6%B6%88%E6%81%AF%E5%8F%91%E9%80%81%E7%9A%84%E9%80%BB%E8%BE%91.png",alt:"MQ\u6d88\u606f\u53d1\u9001\u7684\u903b\u8f91"})),(0,a.kt)("h4",{id:"1producer\u7aef\u53d1\u9001\u540c\u6b65\u6d88\u606f"},"1\u3001Producer\u7aef\u53d1\u9001\u540c\u6b65\u6d88\u606f"),(0,a.kt)("p",null,"\u8fd9\u79cd\u53ef\u9760\u6027\u540c\u6b65\u5730\u53d1\u9001\u65b9\u5f0f\u4f7f\u7528\u7684\u6bd4\u8f83\u5e7f\u6cdb\uff0c\u6bd4\u5982\uff1a\u91cd\u8981\u7684\u6d88\u606f\u901a\u77e5\uff0c\u77ed\u4fe1\u901a\u77e5\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'public class SyncProducer {\n    public static void main(String[] args) throws Exception {\n        // \u5b9e\u4f8b\u5316\u6d88\u606f\u751f\u4ea7\u8005Producer\n        DefaultMQProducer producer = new DefaultMQProducer("please_rename_unique_group_name");\n        // \u8bbe\u7f6eNameServer\u7684\u5730\u5740\n        producer.setNamesrvAddr("localhost:9876");\n        // \u542f\u52a8Producer\u5b9e\u4f8b\n        producer.start();\n        for (int i = 0; i < 100; i++) {\n            // \u521b\u5efa\u6d88\u606f\uff0c\u5e76\u6307\u5b9aTopic\uff0cTag\u548c\u6d88\u606f\u4f53\n            Message msg = new Message("TopicTest" /* Topic */,\n            "TagA" /* Tag */,\n            ("Hello RocketMQ " + i).getBytes(RemotingHelper.DEFAULT_CHARSET) /* Message body */\n            );\n            // \u53d1\u9001\u6d88\u606f\u5230\u4e00\u4e2aBroker\n            SendResult sendResult = producer.send(msg);\n            // \u901a\u8fc7sendResult\u8fd4\u56de\u6d88\u606f\u662f\u5426\u6210\u529f\u9001\u8fbe\n            System.out.printf("%s%n", sendResult);\n        }\n        // \u5982\u679c\u4e0d\u518d\u53d1\u9001\u6d88\u606f\uff0c\u5173\u95edProducer\u5b9e\u4f8b\u3002\n        producer.shutdown();\n    }\n}\n')),(0,a.kt)("h4",{id:"2\u53d1\u9001\u5f02\u6b65\u6d88\u606f"},"2\u3001\u53d1\u9001\u5f02\u6b65\u6d88\u606f"),(0,a.kt)("p",null,"\u5f02\u6b65\u6d88\u606f\u901a\u5e38\u7528\u5728\u5bf9\u54cd\u5e94\u65f6\u95f4\u654f\u611f\u7684\u4e1a\u52a1\u573a\u666f\uff0c\u5373\u53d1\u9001\u7aef\u4e0d\u80fd\u5bb9\u5fcd\u957f\u65f6\u95f4\u5730\u7b49\u5f85Broker\u7684\u54cd\u5e94\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'public class AsyncProducer {\n    public static void main(String[] args) throws Exception {\n        // \u5b9e\u4f8b\u5316\u6d88\u606f\u751f\u4ea7\u8005Producer\n        DefaultMQProducer producer = new DefaultMQProducer("please_rename_unique_group_name");\n        // \u8bbe\u7f6eNameServer\u7684\u5730\u5740\n        producer.setNamesrvAddr("localhost:9876");\n        // \u542f\u52a8Producer\u5b9e\u4f8b\n        producer.start();\n        producer.setRetryTimesWhenSendAsyncFailed(0);\n    \n    int messageCount = 100;\n        // \u6839\u636e\u6d88\u606f\u6570\u91cf\u5b9e\u4f8b\u5316\u5012\u8ba1\u65f6\u8ba1\u7b97\u5668\n    final CountDownLatch2 countDownLatch = new CountDownLatch2(messageCount);\n        for (int i = 0; i < messageCount; i++) {\n                final int index = i;\n                // \u521b\u5efa\u6d88\u606f\uff0c\u5e76\u6307\u5b9aTopic\uff0cTag\u548c\u6d88\u606f\u4f53\n                Message msg = new Message("TopicTest",\n                    "TagA",\n                    "OrderID188",\n                    "Hello world".getBytes(RemotingHelper.DEFAULT_CHARSET));\n                // SendCallback\u63a5\u6536\u5f02\u6b65\u8fd4\u56de\u7ed3\u679c\u7684\u56de\u8c03\n                producer.send(msg, new SendCallback() {\n                    @Override\n                    public void onSuccess(SendResult sendResult) {\n                        System.out.printf("%-10d OK %s %n", index,\n                            sendResult.getMsgId());\n                    }\n                    @Override\n                    public void onException(Throwable e) {\n                      System.out.printf("%-10d Exception %s %n", index, e);\n                      e.printStackTrace();\n                    }\n                });\n        }\n    // \u7b49\u5f855s\n    countDownLatch.await(5, TimeUnit.SECONDS);\n        // \u5982\u679c\u4e0d\u518d\u53d1\u9001\u6d88\u606f\uff0c\u5173\u95edProducer\u5b9e\u4f8b\u3002\n        producer.shutdown();\n    }\n}\n')),(0,a.kt)("h4",{id:"3\u5355\u5411\u53d1\u9001\u6d88\u606f"},"3\u3001\u5355\u5411\u53d1\u9001\u6d88\u606f"),(0,a.kt)("p",null,"\u8fd9\u79cd\u65b9\u5f0f\u4e3b\u8981\u7528\u5728\u4e0d\u7279\u522b\u5173\u5fc3\u53d1\u9001\u7ed3\u679c\u7684\u573a\u666f\uff0c\u4f8b\u5982\u65e5\u5fd7\u53d1\u9001\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'public class OnewayProducer {\n    public static void main(String[] args) throws Exception{\n        // \u5b9e\u4f8b\u5316\u6d88\u606f\u751f\u4ea7\u8005Producer\n        DefaultMQProducer producer = new DefaultMQProducer("please_rename_unique_group_name");\n        // \u8bbe\u7f6eNameServer\u7684\u5730\u5740\n        producer.setNamesrvAddr("localhost:9876");\n        // \u542f\u52a8Producer\u5b9e\u4f8b\n        producer.start();\n        for (int i = 0; i < 100; i++) {\n            // \u521b\u5efa\u6d88\u606f\uff0c\u5e76\u6307\u5b9aTopic\uff0cTag\u548c\u6d88\u606f\u4f53\n            Message msg = new Message("TopicTest" /* Topic */,\n                "TagA" /* Tag */,\n                ("Hello RocketMQ " + i).getBytes(RemotingHelper.DEFAULT_CHARSET) /* Message body */\n            );\n            // \u53d1\u9001\u5355\u5411\u6d88\u606f\uff0c\u6ca1\u6709\u4efb\u4f55\u8fd4\u56de\u7ed3\u679c\n            producer.sendOneway(msg);\n\n        }\n        // \u5982\u679c\u4e0d\u518d\u53d1\u9001\u6d88\u606f\uff0c\u5173\u95edProducer\u5b9e\u4f8b\u3002\n        producer.shutdown();\n    }\n}\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Producer\u53d1\u9001\u6d88\u606f\u5b58\u5728\u4e09\u79cd\u6a21\u5f0f\uff0c\u5206\u522b\u4e3a\uff1a"),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"Sync \u540c\u6b65"),(0,a.kt)("li",{parentName:"ul"},"Async \u5f02\u6b65"),(0,a.kt)("li",{parentName:"ul"},"Oneway \u5355\u5411\u53d1\u9001"))),(0,a.kt)("h3",{id:"2-\u6d88\u606f\u53d1\u9001\u6d41\u7a0b\u6e90\u7801\u89e3\u6790"},"2. \u6d88\u606f\u53d1\u9001\u6d41\u7a0b\u6e90\u7801\u89e3\u6790"),(0,a.kt)("p",null,"DefaultMQProducer.start\u542f\u52a8\u751f\u4ea7\u8005\uff0c\u4e0b\u9762\u6765\u770b\u4e00\u4e0bstart\u7684\u6e90\u7801\u89e3\u6790\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'    @Override\n    public void start() throws MQClientException {\n        this.setProducerGroup(withNamespace(this.producerGroup));\n        //\u901a\u8fc7\u542f\u52a8\n        this.defaultMQProducerImpl.start();\n        if (null != traceDispatcher) {\n            try {\n                traceDispatcher.start(this.getNamesrvAddr(), this.getAccessChannel());\n            } catch (MQClientException e) {\n                log.warn("trace dispatcher start failed ", e);\n            }\n        }\n    }\n')),(0,a.kt)("p",null,"\u4e0b\u9762\u770b\u4e00\u4e0b ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"this.defaultMQProducerImpl.start();"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"    public void start() throws MQClientException {\n        this.start(true);\n    }\n    \n    public void start(final boolean startFactory) throws MQClientException {\n        \n        switch (this.serviceState) {\n            case CREATE_JUST:\n            \n            //\u7701\u7565\u90e8\u5206\u4ee3\u7801\n        this.mQClientFactory = MQClientManager.getInstance().getOrCreateMQClientInstance(this.defaultMQProducer, rpcHook);\n        \n        if (startFactory) {\n            //\u542f\u52a8MQClientInstance\n            mQClientFactory.start();\n        }\n        }    \n    }\n")),(0,a.kt)("p",null,"\u901a\u8fc7\u4ee3\u7801\u53ef\u4ee5\u53d1\u73b0MQClientInstance\u662f\u6574\u4e2a\u5ba2\u6237\u7aef\u7684\u6838\u5fc3\u7c7b\u3002\u4e0b\u9762\u6765\u770b\u4e00\u4e0bstart\u65b9\u6cd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'public void start() throws MQClientException {\n\n        synchronized (this) {\n            switch (this.serviceState) {\n                case CREATE_JUST:\n                    this.serviceState = ServiceState.START_FAILED;\n                    // \u5728\u6ca1\u6709\u914d\u7f6eNameServer\u5730\u5740\uff0c\u9002\u914d\u5730\u5740\n                    if (null == this.clientConfig.getNamesrvAddr()) {\n                        this.mQClientAPIImpl.fetchNameServerAddr();\n                    }\n                    // \u542f\u52a8\u5ba2\u6237\u7aef\u8bf7\u6c42\u8fd4\u56de\u7684netty \u5ba2\u6237\u7aef\n                    this.mQClientAPIImpl.start();\n                    // \u542f\u52a8\u5404\u79cd\u8ba1\u5212\u4efb\u52a1\n                    this.startScheduledTask();\n                    // \u542f\u52a8\u62c9\u53bb\u6d88\u606f\u670d\u52a1\n                    this.pullMessageService.start();\n                    // \u542f\u52a8\u8d1f\u8f7d\u5747\u8861\u670d\u52a1\n                    this.rebalanceService.start();\n                    // \u542f\u52a8\u63a8\u9001\u670d\u52a1\n                    this.defaultMQProducer.getDefaultMQProducerImpl().start(false);\n                    log.info("the client factory [{}] start OK", this.clientId);\n                    this.serviceState = ServiceState.RUNNING;\n                    break;\n                case START_FAILED:\n                    throw new MQClientException("The Factory object[" + this.getClientId() + "] has been created before, and failed.", null);\n                default:\n                    break;\n            }\n        }\n    }\n')),(0,a.kt)("p",null,"MQClientInstance.start \u4e3b\u8981\u505a\u4e0b\u9762\u51e0\u4ef6\u4e8b\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u542f\u52a8\u5ba2\u6237\u7aef\u6d88\u606f\u5904\u7406"),(0,a.kt)("li",{parentName:"ol"},"\u542f\u52a8\u5b9a\u65f6\u4efb\u52a1--\u66f4\u65b0\u8def\u7531\u4fe1\u606f\u5b9a\u65f6\u4efb\u52a1\uff0c\u548cbroker\u7684\u5fc3\u8df3\u5b9a\u65f6\u4efb\u52a1\uff0c\u6301\u4e45\u5316\u6240\u6709\u7684\u6d88\u8d39offset\u7684\u5b9a\u65f6\u4efb\u52a1\uff0c\u81ea\u9002\u5e94\u5b9a\u65f6\u7ebf\u7a0b\u6c60\u5b9a\u65f6\u4efb\u52a1(\u51cf\u5c11\u6216\u8005\u589e\u52a0\u7ebf\u7a0b\u6570)"),(0,a.kt)("li",{parentName:"ol"},"\u62c9\u53d6\u6d88\u606f\u670d\u52a1\u542f\u52a8"),(0,a.kt)("li",{parentName:"ol"},"\u8d1f\u8f7d\u5747\u8861\u670d\u52a1\u542f\u52a8"),(0,a.kt)("li",{parentName:"ol"},"\u63a8\u9001\u6d88\u606f\u670d\u52a1\u542f\u52a8")),(0,a.kt)("h3",{id:"3-\u6d88\u606f\u7684\u53d1\u9001"},"3. \u6d88\u606f\u7684\u53d1\u9001"),(0,a.kt)("p",null,"\u901a\u8fc7\u4e0a\u9762\u7684\u53d1\u9001\u4ee3\u7801\u770b\u51fa\u6765\u4e3b\u8981\u662f\u8c03\u7528send\u6d88\u606f\uff0c\u6700\u540e\u662f\u901a\u8fc7\u5b9e\u73b0DefaultMQProducerImpl.sendDefaultImpl\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"TopicPublishInfo topicPublishInfo = this.tryToFindTopicPublishInfo(msg.getTopic());\n")),(0,a.kt)("p",null,"\u9996\u5148\u83b7\u53d6\u53d1\u9001\u6d88\u606f\u7684Topic\u7684\u8def\u7531\u4fe1\u606f\u3002\u6839\u636e\u8def\u7531\u4fe1\u606f\u53d1\u9001\u6570\u636eMessage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"MessageQueue mqSelected = this.selectOneMessageQueue(topicPublishInfo, lastBrokerName);\n")),(0,a.kt)("p",null,"\u7136\u540e\u9009\u62e9\u4e00\u4e2atopic\u5bf9\u5e94\u7684\u4e00\u4e2aMessageQueue\u961f\u5217\u53d1\u9001\u3002\u4e0b\u9762\u6765\u5206\u6790 selectOneMessageQueue \u6765\u770b\u4e00\u4e0b\u53d1\u9001\u8fc7\u7a0b\u4e2d\u7684\u8d1f\u8f7d\u5747\u8861\u3002DefaultMQProducerImpl.selectOneMessageQueue"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"    public MessageQueue selectOneMessageQueue(final TopicPublishInfo tpInfo, final String lastBrokerName) {\n        return this.mqFaultStrategy.selectOneMessageQueue(tpInfo, lastBrokerName);\n    }\n")),(0,a.kt)("p",null,"\u5b9e\u73b0\u9009\u62e9\u4e00\u4e2a\u6d88\u606f\u961f\u5217\u8fdb\u884c\u53d1\u9001\u6709MQFaultStrategy\u7c7b\u4e2d\u7684selectOneMessageQueue\u65b9\u6cd5\u6765\u5b9e\u73b0\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'public MessageQueue selectOneMessageQueue(final TopicPublishInfo tpInfo, final String lastBrokerName) {\n        if (this.sendLatencyFaultEnable) {\n            try {\n                int index = tpInfo.getSendWhichQueue().getAndIncrement();\n                for (int i = 0; i < tpInfo.getMessageQueueList().size(); i++) {\n                    int pos = Math.abs(index++) % tpInfo.getMessageQueueList().size();\n                    if (pos < 0)\n                        pos = 0;\n                    MessageQueue mq = tpInfo.getMessageQueueList().get(pos);\n                    if (latencyFaultTolerance.isAvailable(mq.getBrokerName())) {\n                        if (null == lastBrokerName || mq.getBrokerName().equals(lastBrokerName))\n                            return mq;\n                    }\n                }\n\n                final String notBestBroker = latencyFaultTolerance.pickOneAtLeast();\n                int writeQueueNums = tpInfo.getQueueIdByBroker(notBestBroker);\n                if (writeQueueNums > 0) {\n                    final MessageQueue mq = tpInfo.selectOneMessageQueue();\n                    if (notBestBroker != null) {\n                        mq.setBrokerName(notBestBroker);\n                        mq.setQueueId(tpInfo.getSendWhichQueue().getAndIncrement() % writeQueueNums);\n                    }\n                    return mq;\n                } else {\n                    latencyFaultTolerance.remove(notBestBroker);\n                }\n            } catch (Exception e) {\n                log.error("Error occurred when selecting message queue", e);\n            }\n\n            return tpInfo.selectOneMessageQueue();\n        }\n\n        return tpInfo.selectOneMessageQueue(lastBrokerName);\n    }\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6211\u662f\u8682\u8681\u80cc\u5927\u8c61\uff0c\u6587\u7ae0\u5bf9\u4f60\u6709\u5e2e\u52a9\u70b9\u8d5e\u5173\u6ce8\u6211\uff0c\u6587\u7ae0\u6709\u4e0d\u6b63\u786e\u7684\u5730\u65b9\u8bf7\u60a8\u65a7\u6b63\u7559\u8a00\u8bc4\u8bba~\u8c22\u8c22")))}p.isMDXComponent=!0}}]);