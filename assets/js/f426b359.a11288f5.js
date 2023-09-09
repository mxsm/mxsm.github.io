"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[1574],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>k});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},i=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),m=u(n),d=o,k=m["".concat(l,".").concat(d)]||m[d]||p[d]||s;return n?r.createElement(k,a(a({ref:t},i),{},{components:n})):r.createElement(k,a({ref:t},i))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[m]="string"==typeof e?e:o,a[1]=c;for(var u=2;u<s;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4507:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const s={title:"RocketMQ\u6e90\u7801\u89e3\u6790-\u6d88\u8d39\u8005\u91cd\u590d\u6d88\u8d39",date:new Date("2020-04-23T00:00:00.000Z"),weight:202106112138},a=void 0,c={unversionedId:"rocketmq/rocketmq4/consumer/RocketMQ-analysis-consumer-repeat-consume",id:"rocketmq/rocketmq4/consumer/RocketMQ-analysis-consumer-repeat-consume",title:"RocketMQ\u6e90\u7801\u89e3\u6790-\u6d88\u8d39\u8005\u91cd\u590d\u6d88\u8d39",description:"\u91cd\u590d\u6d88\u8d39",source:"@site/docs/rocketmq/rocketmq4/consumer/RocketMQ-analysis-consumer-repeat-consume.md",sourceDirName:"rocketmq/rocketmq4/consumer",slug:"/rocketmq/rocketmq4/consumer/RocketMQ-analysis-consumer-repeat-consume",permalink:"/docs/rocketmq/rocketmq4/consumer/RocketMQ-analysis-consumer-repeat-consume",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/rocketmq/rocketmq4/consumer/RocketMQ-analysis-consumer-repeat-consume.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1694243114,formattedLastUpdatedAt:"Sep 9, 2023",frontMatter:{title:"RocketMQ\u6e90\u7801\u89e3\u6790-\u6d88\u8d39\u8005\u91cd\u590d\u6d88\u8d39",date:"2020-04-23T00:00:00.000Z",weight:202106112138},sidebar:"rocketmq4",previous:{title:"RocketMQ\u6e90\u7801\u89e3\u6790-\u6d88\u8d39\u6a21\u5f0f\u6d88\u8d39\u8fdb\u5ea6\u52a0\u8f7d\u6e90\u7801\u89e3\u6790",permalink:"/docs/rocketmq/rocketmq4/consumer/RocketMQ-analysis-consumer-messagemodel"},next:{title:"RocketMQ\u6e90\u7801\u89e3\u6790-\u6d88\u8d39\u8005\u5b9a\u65f6\u4efb\u52a1\u89e3\u6790",permalink:"/docs/rocketmq/rocketmq4/consumer/RocketMQ-analysis-consumer-scheduledtask"}},l={},u=[{value:"\u91cd\u590d\u6d88\u8d39",id:"\u91cd\u590d\u6d88\u8d39",level:3},{value:"\u91cd\u590d\u6d88\u8d39\u7684\u573a\u666f\u5206\u6790",id:"\u91cd\u590d\u6d88\u8d39\u7684\u573a\u666f\u5206\u6790",level:3},{value:"\u4e1a\u52a1\u5904\u7406\u65f6\u5019\u5931\u8d25",id:"\u4e1a\u52a1\u5904\u7406\u65f6\u5019\u5931\u8d25",level:4},{value:"\u76f4\u63a5\u7ed3\u675f\u6d88\u8d39\u8005\u8fdb\u7a0b",id:"\u76f4\u63a5\u7ed3\u675f\u6d88\u8d39\u8005\u8fdb\u7a0b",level:4}],i={toc:u},m="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"\u91cd\u590d\u6d88\u8d39"},"\u91cd\u590d\u6d88\u8d39"),(0,o.kt)("p",null,"\u5bf9\u4e8eMQ\u4e0d\u53ef\u907f\u514d\u7684\u8981\u7275\u6d89\u5230\u6d88\u606f\u7684\u91cd\u590d\u6d88\u8d39\uff0c\u6d88\u606f\u91cd\u590d\u6d88\u8d39\u60c5\u51b5\u5343\u5947\u767e\u602a\u3002\u4e0b\u9762\u5c31\u5206\u6790\u4e00\u4e0b\u4e00\u4e9b\u5e38\u89c1\u7684\u573a\u666f\u3002\u5e73\u65f6\u7684\u4f7f\u7528\u8fc7\u7a0b\u4e2d\u8981\u6ce8\u610f\u7684\u60c5\u51b5\u3002\u4ee5\u53ca\u5982\u4f55\u907f\u514d\u4e00\u4e9b\u91cd\u590d\u6d88\u8d39\u3002"),(0,o.kt)("h3",{id:"\u91cd\u590d\u6d88\u8d39\u7684\u573a\u666f\u5206\u6790"},"\u91cd\u590d\u6d88\u8d39\u7684\u573a\u666f\u5206\u6790"),(0,o.kt)("h4",{id:"\u4e1a\u52a1\u5904\u7406\u65f6\u5019\u5931\u8d25"},"\u4e1a\u52a1\u5904\u7406\u65f6\u5019\u5931\u8d25"),(0,o.kt)("p",null,"\u9996\u5148\u501f\u7528\u5b98\u7f51\u7684\u4ee3\u7801\u770b\u4e00\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'public class Consumer {\n\n    public static void main(String[] args) throws InterruptedException, MQClientException {\n\n        // Instantiate with specified consumer group name.\n        DefaultMQPushConsumer consumer = new DefaultMQPushConsumer("please_rename_unique_group_name");\n         \n        // Specify name server addresses.\n        consumer.setNamesrvAddr("localhost:9876");\n        \n        // Subscribe one more more topics to consume.\n        consumer.subscribe("TopicTest", "*");\n        // Register callback to execute on arrival of messages fetched from brokers.\n        consumer.registerMessageListener(new MessageListenerConcurrently() {\n\n            @Override\n            public ConsumeConcurrentlyStatus consumeMessage(List<MessageExt> msgs,\n                ConsumeConcurrentlyContext context) {\n                //\u8fdb\u884c\u4e1a\u52a1\u5904\u7406\u5b8c\u6210-- \u64cd\u4f5c\u5df2\u7ecf\u5165\u5e93\n                return ConsumeConcurrentlyStatus.CONSUME_SUCCESS;\n            }\n        });\n\n        //Launch the consumer instance.\n        consumer.start();\n\n        System.out.printf("Consumer Started.%n");\n    }\n}\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5982\u9762\u4ee3\u7801\u6240\u793a\uff0c\u5df2\u7ecf\u5904\u7406\u4e86\u4e1a\u52a1\u903b\u8f91\u4f46\u662f\u6ca1\u6709\u81ea\u884c ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"return ConsumeConcurrentlyStatus.CONSUME_SUCCESS;"))," \u4ee3\u7801\u3002\u5982\u679c\u8fd9\u4e2a\u65f6\u5019\u7a0b\u5e8f\u8fd0\u884c\u5931\u8d25\u6216\u8005\u5b95\u673a\u3002\u90a3\u4e48\u5c31\u4f1a\u5b58\u5728\u91cd\u590d\u6d88\u8d39\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u4e0a\u9762\u4ee3\u7801\u6bcf\u6b21\u9ed8\u8ba4\u53d61\u6761\u6d88\u606f\u8fdb\u884c\u6d88\u8d39\uff0c\u4f46\u662f\u4e3a\u4e86\u6d88\u8d39\u52a0\u5feb\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"consumer.setConsumeMessageBatchMaxSize();"))," \u8bbe\u7f6e\u5927\u5c0f\uff0c\u5982\u679c\u8bbe\u7f6e10\u6216\u8005\u66f4\u5927\uff0c\u5728\u6d88\u8d39\u5b8c\u6210\u6ca1\u6709\u5b8c\u5168\u5b8c\u6210\u629b\u9519\u3002\u90a3\u4e48\u5c31\u4f1a\u5b58\u73b0\u91cd\u590d\u6d88\u8d39\u7684\u60c5\u51b5\u3002")),(0,o.kt)("h4",{id:"\u76f4\u63a5\u7ed3\u675f\u6d88\u8d39\u8005\u8fdb\u7a0b"},"\u76f4\u63a5\u7ed3\u675f\u6d88\u8d39\u8005\u8fdb\u7a0b"),(0,o.kt)("p",null,"\u76f4\u63a5\u7ed3\u675f\u6d88\u8d39\u8005\u8fdb\u7a0b\u5728Linux\u4e2d\u975ekill -9\u7684\u65b9\u5f0f\u7ed3\u675f\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\u5c31\u4e0d\u4f1a\u8c03\u7528Hook\u6765\u6301\u4e45\u5316\u3002\u7136\u540e\u5728\u6bcf\u6b21\u6d88\u8d39\u8fc7\u7a0b\u4e2d\u4e0d\u662f\u4e8b\u5b9e\u53bb\u66f4\u65b0\u6d88\u8d39\u8fdb\u5ea6\uff0c",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"MQClientInstance"))," \u7c7b\u4e2d"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'        this.scheduledExecutorService.scheduleAtFixedRate(new Runnable() {\n\n            @Override\n            public void run() {\n                try {\n                    MQClientInstance.this.persistAllConsumerOffset();\n                } catch (Exception e) {\n                    log.error("ScheduledTask persistAllConsumerOffset exception", e);\n                }\n            }\n        }, 1000 * 10, this.clientConfig.getPersistConsumerOffsetInterval(), TimeUnit.MILLISECONDS);\n')),(0,o.kt)("p",null,"\u8fd9\u91cc\u662f\u5b9a\u671f5\u79d2\u81ea\u884c\u4e00\u6b21\u3002\u6240\u4ee5\u5728\u4e94\u79d2\u5185\u51fa\u4e86\u95ee\u9898\u53c8\u6ca1\u529e\u6cd5\u81ea\u884cHook\u7684\u60c5\u51b5\u4e0b\u5c31\u4f1a\u91cd\u65b0\u6d88\u8d39\u3002"),(0,o.kt)("p",null,"\u5728\u5e76\u53d1\u6d88\u8d39\u8fc7\u7a0b\u4e2d\u4f1a\u6709\u8fd9\u6837\u7684\u4e00\u4e2a\u95ee\u9898\uff0c\u961f\u5217\u4e2d\u524d\u9762\u7684\u6d88\u606f\u540e\u6d88\u8d39\uff0c\u540e\u9762\u7684\u6d88\u606f\u5df2\u7ecf\u6d88\u8d39\u5b8c\u6210\u4e86\u3002\u8fd9\u91cc\u5c31\u4f1a\u5b58\u5728\u8fd9\u4e00\u7684\u4e00\u4e2a\u95ee\u9898\u5982\u56fe\u6240\u793a\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://github.com/mxsm/document/blob/master/image/MQ/RocketMQ/RocketMQ%E6%B6%88%E8%B4%B9%E5%9B%BE.png?raw=true",alt:null})),(0,o.kt)("p",null,"\u5982\u679c\u662f\u6700\u4e0a\u9762\u7684\u961f\u5217\u5168\u90e8\u6d88\u8d39\u4e86\u90a3\u4e48\u5e8f\u5217\u5316\u7684\u5c31\u662f7\u540e\u9762\u7684\u6d88\u606f\u3002\u800c\u5bf9\u4e8e\u7b2c\u4e8c\u4e2a\u90a3\u4e48\u5982\u679c\u6b64\u65f6\u6d88\u8d39\u8005\u505c\u6b62\u5b95\u673a\u3002\u90a3\u4e48\u5e8f\u5217\u5316\u7684\u5c31\u662f2\u540e\u9762\u7684\u800c\u4e0d\u662f7\u8fd9\u6837\u91cd\u65b0\u542f\u52a8\u6d88\u8d39\u3002\u90a3\u4e48\u5c31\u4f1a\u91cd\u65b0\u6d88\u8d397\u3002"),(0,o.kt)("p",null,"\u8fd9\u79cd\u60c5\u51b5\u4e0b\u5982\u679c\u4e5f\u662f\u76f4\u63a5\u7ed3\u675f\u8fdb\u7a0b\uff0c\u90a3\u4e48\u4e5f\u4f1a\u51fa\u73b0\u91cd\u542f\u540e\u7684\u6d88\u606f\u91cd\u590d\u6d88\u8d39\u7684\u60c5\u51b5\u3002"))}p.isMDXComponent=!0}}]);