"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[9521],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=c(n),k=a,d=m["".concat(i,".").concat(k)]||m[k]||p[k]||s;return n?r.createElement(d,l(l({ref:t},u),{},{components:n})):r.createElement(d,l({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,l=new Array(s);l[0]=k;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[m]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<s;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},7674:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const s={title:"RocketMQ\u6e90\u7801\u89e3\u6790-\u6d88\u8d39\u8005\u542f\u52a8\u6e90\u7801\u89e3\u6790",date:new Date("2021-06-13T00:00:00.000Z"),weight:202106102130},l=void 0,o={unversionedId:"rocketmq/rocketmq4/consumer/RocketMQ-analysis-consumer",id:"rocketmq/rocketmq4/consumer/RocketMQ-analysis-consumer",title:"RocketMQ\u6e90\u7801\u89e3\u6790-\u6d88\u8d39\u8005\u542f\u52a8\u6e90\u7801\u89e3\u6790",description:"\u4ee5\u4e0b\u6e90\u7801\u57fa\u4e8eRocketMQ 4.8.0",source:"@site/docs/rocketmq/rocketmq4/consumer/RocketMQ-analysis-consumer.md",sourceDirName:"rocketmq/rocketmq4/consumer",slug:"/rocketmq/rocketmq4/consumer/RocketMQ-analysis-consumer",permalink:"/docs/rocketmq/rocketmq4/consumer/RocketMQ-analysis-consumer",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/rocketmq/rocketmq4/consumer/RocketMQ-analysis-consumer.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1671380922,formattedLastUpdatedAt:"Dec 18, 2022",frontMatter:{title:"RocketMQ\u6e90\u7801\u89e3\u6790-\u6d88\u8d39\u8005\u542f\u52a8\u6e90\u7801\u89e3\u6790",date:"2021-06-13T00:00:00.000Z",weight:202106102130},sidebar:"rocketmq4",previous:{title:"RocketMQ\u6e90\u7801\u89e3\u6790-\u6d88\u8d39\u8005\u6d88\u8d39\u7b56\u7565\u6e90\u7801\u89e3\u6790",permalink:"/docs/rocketmq/rocketmq4/consumer/RocketMQ-analysis-consumer-strategy"},next:{title:"RocketMQ\u6e90\u7801\u89e3\u6790-RocketMQ\u987a\u5e8f\u6d88\u606f\u7684\u6295\u9012\u4e0e\u6d88\u8d39",permalink:"/docs/rocketmq/rocketmq4/consumer/RocketMQ-analysis-ordermessage-consume"}},i={},c=[{value:"1.  \u6d88\u8d39\u63a5\u53e3\u7ee7\u627f\u5173\u7cfb",id:"1--\u6d88\u8d39\u63a5\u53e3\u7ee7\u627f\u5173\u7cfb",level:3},{value:"2. DefaultMQPushConsumer\u5e38\u7528\u8bbe\u7f6e",id:"2-defaultmqpushconsumer\u5e38\u7528\u8bbe\u7f6e",level:3},{value:"3. \u6d88\u8d39\u8005\u542f\u52a8",id:"3-\u6d88\u8d39\u8005\u542f\u52a8",level:3},{value:"3.1 \u57fa\u7840\u914d\u7f6e\u548c\u524d\u671f\u5b9e\u4f8b\u5316",id:"31-\u57fa\u7840\u914d\u7f6e\u548c\u524d\u671f\u5b9e\u4f8b\u5316",level:4},{value:"3.2  \u6d88\u8d39\u7c7b\u578b\u548c\u6d88\u606f\u7c7b\u578b\u4e0d\u540c\u7684\u8bbe\u7f6e",id:"32--\u6d88\u8d39\u7c7b\u578b\u548c\u6d88\u606f\u7c7b\u578b\u4e0d\u540c\u7684\u8bbe\u7f6e",level:3},{value:"3.3 \u6d88\u8d39\u542f\u52a8",id:"33-\u6d88\u8d39\u542f\u52a8",level:4},{value:"4. MQClientInstance#start \u542f\u52a8",id:"4-mqclientinstancestart-\u542f\u52a8",level:3},{value:"5. \u603b\u7ed3\u4e0e\u601d\u8003",id:"5-\u603b\u7ed3\u4e0e\u601d\u8003",level:3}],u={toc:c};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u4ee5\u4e0b\u6e90\u7801\u57fa\u4e8eRocketMQ 4.8.0")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'public class Consumer {\n\n    public static void main(String[] args) throws InterruptedException, MQClientException {\n\n        // Instantiate with specified consumer group name.\n        DefaultMQPushConsumer consumer = new DefaultMQPushConsumer("please_rename_unique_group_name");\n         \n        // Specify name server addresses.\n        consumer.setNamesrvAddr("localhost:9876");\n        \n        // Subscribe one more more topics to consume.\n        consumer.subscribe("TopicTest", "*");\n        // Register callback to execute on arrival of messages fetched from brokers.\n        consumer.registerMessageListener(new MessageListenerConcurrently() {\n\n            @Override\n            public ConsumeConcurrentlyStatus consumeMessage(List<MessageExt> msgs,\n                ConsumeConcurrentlyContext context) {\n                System.out.printf("%s Receive New Messages: %s %n", Thread.currentThread().getName(), msgs);\n                return ConsumeConcurrentlyStatus.CONSUME_SUCCESS;\n            }\n        });\n\n        //Launch the consumer instance.\n        consumer.start();\n\n        System.out.printf("Consumer Started.%n");\n    }\n}\n')),(0,a.kt)("p",null,"\u4ee5\u4e0a\u4ee3\u7801\u6765\u81ea\u5b98\u7f51\uff0c\u4e0b\u9762\u57fa\u4e8e\u4e0a\u9762\u7684\u6d88\u8d39\u6e90\u7801\u6765\u5206\u6790\u6d88\u8d39\u8005\u7684\u6e90\u7801\uff0c\u770b\u4e00\u4e0b\u6d88\u8d39\u8005\u5982\u4f55\u8fdb\u884c\u6d88\u8d39\u7684\u3002"),(0,a.kt)("h3",{id:"1--\u6d88\u8d39\u63a5\u53e3\u7ee7\u627f\u5173\u7cfb"},"1.  \u6d88\u8d39\u63a5\u53e3\u7ee7\u627f\u5173\u7cfb"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://github.com/mxsm/picture/blob/main/rocketmq/MQConsumerExtends.png?raw=true",alt:null})),(0,a.kt)("p",null,"\u901a\u8fc7\u7ee7\u627f\u5173\u7cfb\u53ef\u4ee5\u53d1\u73b0\u6d88\u8d39\u5206\u4e3a\u4e24\u4e2d\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Push\u6d88\u8d39")),(0,a.kt)("p",{parentName:"li"},"\u5728\u542f\u52a8\u540e\uff0cConsumer\u5ba2\u6237\u7aef\u4f1a\u4e3b\u52a8\u5faa\u73af\u53d1\u9001Pull\u8bf7\u6c42\u5230broker\uff0c\u5982\u679c\u6ca1\u6709\u6d88\u606f\uff0cbroker\u4f1a\u628a\u8bf7\u6c42\u653e\u5165\u7b49\u5f85\u961f\u5217\uff0c\u65b0\u6d88\u606f\u5230\u8fbe\u540e\u8fd4\u56deresponse")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Pull\u6d88\u8d39")),(0,a.kt)("p",{parentName:"li"},"\u7531\u7528\u6237\u4e3b\u52a8\u8c03\u7528pull\u65b9\u6cd5\u6765\u83b7\u53d6\u6d88\u606f\uff0c\u6ca1\u6709\u5219\u8fd4\u56de\u3002\u4ece\u4e0a\u9762\u7ee7\u627f\u5173\u7cfb\u53d1\u73b0Pull\u7684\u5b9e\u73b0\u5df2\u7ecf\u88ab\u5f03\u7528\u4e86\u3002(\u6682\u65f6\u4e5f\u4e0d\u5206\u6790)"))),(0,a.kt)("h3",{id:"2-defaultmqpushconsumer\u5e38\u7528\u8bbe\u7f6e"},"2. DefaultMQPushConsumer\u5e38\u7528\u8bbe\u7f6e"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"\u5b57\u6bb5"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u8bf4\u660e"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u5907\u6ce8"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"consumerGroup"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u6d88\u8d39\u8005\u7ec4"),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"messageModel"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u6d88\u8d39\u6a21\u5f0f(\u9ed8\u8ba4MessageModel.CLUSTERING)"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u6d88\u8d39\u96c6\u7fa4\u6a21\u5f0f(CLUSTERING)\u548c\u5e7f\u64ad\u64ad\u6a21\u5f0f(BROADCASTING)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"allocateMessageQueueStrategy"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u6d88\u8d39\u7b56\u7565(\u9ed8\u8ba4AllocateMessageQueueAveragely)"),(0,a.kt)("td",{parentName:"tr",align:"center"},"AllocateMessageQueueStrategy\u63a5\u53e3\u6709\u4e94\u4e2a\u5b9e\u73b0\u5728MQ\u91cc\u9762")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"messageListener"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u6d88\u606f\u76d1\u542c\u5668"),(0,a.kt)("td",{parentName:"tr",align:"center"},"MessageListenerConcurrently\u548cMessageListenerOrderly",(0,a.kt)("br",null),"\u6d88\u606f\u76d1\u542c\u5668\u5bf9\u4e8e\u65e0\u5e8f\u6d88\u606f\u7528\u7b2c\u4e00\u4e2a\uff0c\u6709\u5e8f\u6d88\u606f\u7528\u7b2c\u4e8c\u4e2a")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"consumeThreadMin"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u6d88\u8d39\u6700\u5c0f\u7ebf\u7a0b\u6c60(\u9ed8\u8ba420)"),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"consumeThreadMax"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u6d88\u8d39\u6700\u5927\u7ebf\u7a0b\u6c60(\u9ed8\u8ba420)"),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"consumeMessageBatchMaxSize"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u6279\u91cf\u6d88\u8d39\u6d88\u606f\u6570\u91cf(\u9ed8\u8ba41)"),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"pullBatchSize"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u6279\u91cf\u62c9\u53d6\u7684\u6d88\u606f\u6570\u91cf\u7684\u5927\u5c0f(\u9ed8\u8ba432)"),(0,a.kt)("td",{parentName:"tr",align:"center"})))),(0,a.kt)("h3",{id:"3-\u6d88\u8d39\u8005\u542f\u52a8"},"3. \u6d88\u8d39\u8005\u542f\u52a8"),(0,a.kt)("p",null,"\u542f\u52a8\u6d41\u7a0b\u56fe\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://github.com/mxsm/picture/blob/main/rocketmq/MQ%E6%B6%88%E8%B4%B9%E8%80%85%E5%90%AF%E5%8A%A8%E6%B5%81%E7%A8%8B%E5%9B%BE.png?raw=true",alt:null})),(0,a.kt)("p",null,"\u6d88\u8d39\u8005\u542f\u52a8\u6700\u7ec8\u662f\u8c03\u7528 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"DefaultMQPushConsumerImpl#start"))," \u65b9\u6cd5\uff1a"),(0,a.kt)("h4",{id:"31-\u57fa\u7840\u914d\u7f6e\u548c\u524d\u671f\u5b9e\u4f8b\u5316"},"3.1 \u57fa\u7840\u914d\u7f6e\u548c\u524d\u671f\u5b9e\u4f8b\u5316"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"//DefaultMQPushConsumerImpl#start\npublic synchronized void start() throws MQClientException {\n    \n    //\u68c0\u67e5\u4e00\u4e9b\u5fc5\u987b\u8981\u7684\u914d\u7f6e\n    this.checkConfig();\n    //\u62f7\u8d1d\u8ba2\u9605\u5173\u7cfb\u5230RebalancePushImpl\u8d1f\u8f7d\u5b9e\u73b0\u4e2d\n    this.copySubscription();\n    //\u96c6\u7fa4\u6a21\u5f0f\u5c06\u5b9e\u4f8b\u540d\u79f0\u6539\u4e3aJVM PID\n    if (this.defaultMQPushConsumer.getMessageModel() == MessageModel.CLUSTERING) {\n        this.defaultMQPushConsumer.changeInstanceNameToPID();\n    }\n    //\u521b\u5efaMQClientInstance\n    this.mQClientFactory = MQClientManager.getInstance().getOrCreateMQClientInstance(this.defaultMQPushConsumer, this.rpcHook);\n\n    this.rebalanceImpl.setConsumerGroup(this.defaultMQPushConsumer.getConsumerGroup());\n    this.rebalanceImpl.setMessageModel(this.defaultMQPushConsumer.getMessageModel());\n    this.rebalanceImpl.setAllocateMessageQueueStrategy(this.defaultMQPushConsumer.getAllocateMessageQueueStrategy());\n    this.rebalanceImpl.setmQClientFactory(this.mQClientFactory);\n    //\u521b\u5efaPullAPIWrapper\n    this.pullAPIWrapper = new PullAPIWrapper(\n        mQClientFactory,\n        this.defaultMQPushConsumer.getConsumerGroup(), isUnitMode());\n    this.pullAPIWrapper.registerFilterMessageHook(filterMessageHookList);\n} \n\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u68c0\u67e5\u542f\u52a8\u7684\u6d88\u8d39\u8005\u7684\u5fc5\u5907\u53c2\u6570"),(0,a.kt)("li",{parentName:"ul"},"\u521b\u5efaMQClientInstance\u5b9e\u4f8b"),(0,a.kt)("li",{parentName:"ul"},"\u521b\u5efaPullAPIWrapper")),(0,a.kt)("h3",{id:"32--\u6d88\u8d39\u7c7b\u578b\u548c\u6d88\u606f\u7c7b\u578b\u4e0d\u540c\u7684\u8bbe\u7f6e"},"3.2  \u6d88\u8d39\u7c7b\u578b\u548c\u6d88\u606f\u7c7b\u578b\u4e0d\u540c\u7684\u8bbe\u7f6e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"//DefaultMQPushConsumerImpl#start\npublic synchronized void start() throws MQClientException {\n    if (this.defaultMQPushConsumer.getOffsetStore() != null) {\n        this.offsetStore = this.defaultMQPushConsumer.getOffsetStore();\n    } else {\n        switch (this.defaultMQPushConsumer.getMessageModel()) {\n            case BROADCASTING:\n                this.offsetStore = new LocalFileOffsetStore(this.mQClientFactory, this.defaultMQPushConsumer.getConsumerGroup());\n                break;\n            case CLUSTERING:\n                this.offsetStore = new RemoteBrokerOffsetStore(this.mQClientFactory, this.defaultMQPushConsumer.getConsumerGroup());\n                break;\n            default:\n                break;\n        }\n        this.defaultMQPushConsumer.setOffsetStore(this.offsetStore);\n    }\n    this.offsetStore.load();\n\n    if (this.getMessageListenerInner() instanceof MessageListenerOrderly) {\n        this.consumeOrderly = true;\n        this.consumeMessageService =\n            new ConsumeMessageOrderlyService(this, (MessageListenerOrderly) this.getMessageListenerInner());\n    } else if (this.getMessageListenerInner() instanceof MessageListenerConcurrently) {\n        this.consumeOrderly = false;\n        this.consumeMessageService =\n            new ConsumeMessageConcurrentlyService(this, (MessageListenerConcurrently) this.getMessageListenerInner());\n    }\n    this.consumeMessageService.start();\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6839\u636e\u6d88\u8d39\u6a21\u5f0f\u4e0d\u540c\u521b\u5efa\u4e0d\u540c\u7684\u6d88\u8d39\u8fdb\u5ea6\u52a0\u8f7d\u60c5\u51b5\u3002\u5e7f\u64ad\u6d88\u8d39\u4ece\u672c\u5730\u52a0\u8f7d\uff0c\u96c6\u7fa4\u6d88\u8d39\u4eceBroker\u7aef\u8fdb\u884c\u52a0\u8f7d"),(0,a.kt)("li",{parentName:"ul"},"\u6839\u636e\u6d88\u606f\u7c7b\u578b\u7684\u4e0d\u540c\u521b\u5efa\u4e0d\u540c\u7684\u6d88\u8d39\u6d88\u606f\u670d\u52a1\u3002 \u65e0\u5e8f\u6d88\u606f\u521b\u5efa\u5e76\u53d1\u6d88\u8d39\u670d\u52a1\uff0c\u6709\u5e8f\u6d88\u606f\u521b\u5efa\u6709\u5e8f\u6d88\u606f\u6d88\u8d39\u670d\u52a1")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\u96c6\u7fa4\u6d88\u8d39\u6d88\u606f\u7684\u6d88\u8d39\u8fdb\u5ea6\u4fdd\u5b58\u5728Broker\u7aef\uff0c\u5e7f\u64ad\u6d88\u8d39\u6d88\u606f\u7684\u8fdb\u5ea6\u4fdd\u5b58\u5728\u6d88\u8d39\u7ec4\u672c\u5730")),(0,a.kt)("h4",{id:"33-\u6d88\u8d39\u542f\u52a8"},"3.3 \u6d88\u8d39\u542f\u52a8"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"mQClientFactory.start();\n")),(0,a.kt)("h3",{id:"4-mqclientinstancestart-\u542f\u52a8"},"4. MQClientInstance#start \u542f\u52a8"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'public void start() throws MQClientException {\n\n    synchronized (this) {\n        switch (this.serviceState) {\n            case CREATE_JUST:\n                this.serviceState = ServiceState.START_FAILED;\n                // If not specified,looking address from name server\n                if (null == this.clientConfig.getNamesrvAddr()) {\n                    this.mQClientAPIImpl.fetchNameServerAddr();\n                }\n                // \u542f\u52a8\u5ba2\u6237\u7aefchannel\n                this.mQClientAPIImpl.start();\n                // \u542f\u52a8\u591a\u4e2a\u5b9a\u65f6\u4efb\u52a1\n                this.startScheduledTask();\n                // \u542f\u52a8\u62c9\u53d6\u6d88\u606f\u670d\u52a1\n                this.pullMessageService.start();\n                // \u542f\u52a8\u8d1f\u8f7d\u5747\u8861\u670d\u52a1\n                this.rebalanceService.start();\n                // \u542f\u52a8push\u670d\u52a1(\u663e\u793a\u8fc7\u671f\u65b9\u6cd5\u8fd9\u4e2a\u4e0d\u5173\u6ce8)\n                this.defaultMQProducer.getDefaultMQProducerImpl().start(false);\n                log.info("the client factory [{}] start OK", this.clientId);\n                this.serviceState = ServiceState.RUNNING;\n                break;\n            case START_FAILED:\n                throw new MQClientException("The Factory object[" + this.getClientId() + "] has been created before, and failed.", null);\n            default:\n                break;\n        }\n    }\n}\n')),(0,a.kt)("p",null,"\u5230\u8fd9\u91cc\u6d88\u8d39\u8005\u5ba2\u6237\u7aef\u5c31\u542f\u52a8\u5b8c\u6210\u4e86\u3002\u53ef\u4ee5\u5bf9MQ\u6d88\u606f\u8fdb\u884c\u6d88\u8d39\u4e86\u3002"),(0,a.kt)("h3",{id:"5-\u603b\u7ed3\u4e0e\u601d\u8003"},"5. \u603b\u7ed3\u4e0e\u601d\u8003"),(0,a.kt)("p",null,"\u5728\u5206\u6790\u8fc7\u7a0b\u4e2d\u6709\u51e0\u4e2a\u6bd4\u8f83\u91cd\u8981\u7684\u5730\u65b9\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\u6d88\u8d39\u6a21\u5f0f")),(0,a.kt)("p",{parentName:"li"},"\u96c6\u7fa4\u6d88\u8d39\u6a21\u5f0f\u548c\u5e7f\u64ad\u6d88\u8d39\u6a21\u5f0f\uff0c\u4e0d\u540c\u7684\u6d88\u8d39\u6a21\u5f0f\u6a21\u5f0f\u4e0b\u83b7\u53d6\u6d88\u8d39\u8005\u7684\u6d88\u8d39\u8fdb\u5ea6\u5730\u65b9\u4e0d\u4e00\u6837\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\u6d88\u606f\u7c7b\u578b")),(0,a.kt)("p",{parentName:"li"},"\u4e0d\u540c\u7684\u6d88\u606f\u7c7b\u578b\u5904\u7406\u6d88\u606f\u7c7b\u578b\u7684\u670d\u52a1\u4e5f\u4e0d\u4e00\u6837\uff0c\u65e0\u5e8f\u6d88\u606f\u7c7b\u578b\u5904\u7406\u6d88\u606f\u7c7b\u578b\u7684\u7c7b\u4e3a\uff1aConsumeMessageConcurrentlyService\uff0c \u800c\u6709\u5e8f\u6d88\u8d39\u7c7b\u578b\u5904\u7406\u6d88\u8d39\u7684\u670d\u52a1\u4e3a\uff1aConsumeMessageOrderlyService")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\u6d88\u8d39\u7aef\u7684\u5b9a\u65f6\u4efb\u52a1")),(0,a.kt)("p",{parentName:"li"},"\u6d88\u8d39\u8005\u542f\u52a8\u540e\uff0c\u5ba2\u6237\u7aef\u8fd8\u6709\u597d\u51e0\u4e2a\u5b9a\u65f6\u4efb\u52a1\u5728\u672c\u5730\u8dd1\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\u5206\u914d\u6d88\u606f\u961f\u5217\u7684\u6d88\u8d39\u7b56\u7565")),(0,a.kt)("p",{parentName:"li"},"\u901a\u8fc7\u9009\u62e9\u4e0d\u540c\u7684\u6d88\u8d39\u7b56\u7565\u6765\u5b9e\u73b0\u4e0d\u540c\u7684\u6d88\u8d39\u8005\u5bf9\u6d88\u606f\u7684\u6d88\u8d39")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\u6d88\u8d39\u7684\u8d1f\u8f7d\u5747\u8861")),(0,a.kt)("p",{parentName:"li"},"\u8d1f\u8f7d\u5747\u8861\u7684\u5b9e\u73b0")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\u6d88\u8d39\u8005\u6d88\u606f\u6d41\u91cf\u63a7\u5236")),(0,a.kt)("p",{parentName:"li"},"\u5982\u4f55\u6d88\u606f\u8fdb\u884c\u6d41\u91cf\u63a7\u5236"))))}m.isMDXComponent=!0}}]);