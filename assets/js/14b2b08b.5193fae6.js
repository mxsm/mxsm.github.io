"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[9404],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>f});var s=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,s,r=function(e,t){if(null==e)return{};var n,s,r={},o=Object.keys(e);for(s=0;s<o.length;s++)n=o[s],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)n=o[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=s.createContext({}),c=function(e){var t=s.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},i=function(e){var t=c(e.components);return s.createElement(l.Provider,{value:t},e.children)},m="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},p=s.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),m=c(n),p=r,f=m["".concat(l,".").concat(p)]||m[p]||g[p]||o;return n?s.createElement(f,a(a({ref:t},i),{},{components:n})):s.createElement(f,a({ref:t},i))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=p;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u[m]="string"==typeof e?e:r,a[1]=u;for(var c=2;c<o;c++)a[c]=n[c];return s.createElement.apply(null,a)}return s.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7695:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var s=n(7462),r=(n(7294),n(3905));const o={title:"RocketMQ\u6e90\u7801\u89e3\u6790-RocketMQ\u6d88\u606fACK\u673a\u5236\u53ca\u6d88\u8d39\u8fdb\u5ea6\u7ba1\u7406",date:new Date("2020-04-21T00:00:00.000Z"),weight:202106112130},a=void 0,u={unversionedId:"rocketmq/rocketmq4/consumer/RocketMQ-analysis-ack",id:"rocketmq/rocketmq4/consumer/RocketMQ-analysis-ack",title:"RocketMQ\u6e90\u7801\u89e3\u6790-RocketMQ\u6d88\u606fACK\u673a\u5236\u53ca\u6d88\u8d39\u8fdb\u5ea6\u7ba1\u7406",description:"\u4ee5\u4e0b\u6e90\u7801\u57fa\u4e8eRocket MQ 4.7.0",source:"@site/docs/rocketmq/rocketmq4/consumer/RocketMQ-analysis-ack.md",sourceDirName:"rocketmq/rocketmq4/consumer",slug:"/rocketmq/rocketmq4/consumer/RocketMQ-analysis-ack",permalink:"/docs/rocketmq/rocketmq4/consumer/RocketMQ-analysis-ack",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/rocketmq/rocketmq4/consumer/RocketMQ-analysis-ack.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1674227439,formattedLastUpdatedAt:"Jan 20, 2023",frontMatter:{title:"RocketMQ\u6e90\u7801\u89e3\u6790-RocketMQ\u6d88\u606fACK\u673a\u5236\u53ca\u6d88\u8d39\u8fdb\u5ea6\u7ba1\u7406",date:"2020-04-21T00:00:00.000Z",weight:202106112130},sidebar:"rocketmq4",previous:{title:"RocketMQ\u6e90\u7801\u89e3\u6790-Broker\u5b58\u50a8\u914d\u7f6e\u6587\u4ef6\u8bf4\u660e",permalink:"/docs/rocketmq/rocketmq4/broker/RocketMQ-analysis-broker-configfile"},next:{title:"RocketMQ\u6e90\u7801\u89e3\u6790-\u5e76\u53d1\u6d88\u8d39\u6d88\u606f\u6e90\u7801\u89e3\u6790",permalink:"/docs/rocketmq/rocketmq4/consumer/RocketMQ-analysis-consumer-concurrently"}},l={},c=[{value:"1. \u6d88\u606f\u7684ACK\u673a\u5236",id:"1-\u6d88\u606f\u7684ack\u673a\u5236",level:3},{value:"2. \u6d88\u8d39\u8fdb\u5ea6\u7ba1\u7406",id:"2-\u6d88\u8d39\u8fdb\u5ea6\u7ba1\u7406",level:3},{value:"\u5e76\u53d1\u6d88\u8d39\u8fdb\u5ea6\u7ba1\u7406",id:"\u5e76\u53d1\u6d88\u8d39\u8fdb\u5ea6\u7ba1\u7406",level:4}],i={toc:c};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,s.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u4ee5\u4e0b\u6e90\u7801\u57fa\u4e8eRocket MQ 4.7.0")),(0,r.kt)("h3",{id:"1-\u6d88\u606f\u7684ack\u673a\u5236"},"1. \u6d88\u606f\u7684ACK\u673a\u5236"),(0,r.kt)("p",null,"consumer\u7684\u6bcf\u4e2a\u5b9e\u4f8b\u662f\u9760AllocateMessageQueueStrategy\u961f\u5217\u5206\u914d\u6765\u51b3\u5b9a\u5982\u4f55\u6d88\u8d39\u6d88\u606f\u7684\u3002\u90a3\u4e48\u6d88\u8d39\u8fdb\u5ea6\u5177\u4f53\u662f\u5982\u4f55\u7ba1\u7406\u7684\uff0c\u53c8\u662f\u5982\u4f55\u4fdd\u8bc1\u6d88\u606f\u6210\u529f\u6d88\u8d39\u7684?\uff08RocketMQ\u6709\u4fdd\u8bc1\u6d88\u606f\u80af\u5b9a\u6d88\u8d39\u6210\u529f\u7684\u7279\u6027,\u5931\u8d25\u5219\u91cd\u8bd5\uff09\uff1f\u7531\u4e8e\u4ee5\u4e0a\u5de5\u4f5c\u6240\u6709\u7684\u673a\u5236\u90fd\u5b9e\u73b0\u5728PushConsumer\u4e2d\uff0c\u6240\u4ee5\u672c\u6587\u7684\u539f\u7406\u5747\u53ea\u9002\u7528\u4e8eRocketMQ\u4e2d\u7684PushConsumer\u5373Java\u5ba2\u6237\u7aef\u4e2d\u7684DefaultPushConsumer\u3002 \u82e5\u4f7f\u7528\u4e86PullConsumer\u6a21\u5f0f\uff0c\u7c7b\u4f3c\u7684\u5de5\u4f5c\u5982\u4f55ack\uff0c\u5982\u4f55\u4fdd\u8bc1\u6d88\u8d39\u7b49\u5747\u9700\u8981\u4f7f\u7528\u65b9\u81ea\u5df1\u5b9e\u73b0\u3002"),(0,r.kt)("h3",{id:"2-\u6d88\u8d39\u8fdb\u5ea6\u7ba1\u7406"},"2. \u6d88\u8d39\u8fdb\u5ea6\u7ba1\u7406"),(0,r.kt)("p",null,"\u5728\u521b\u5efa\u6d88\u8d39\u8005\u6dfb\u52a0\u4e86\u4e00\u4e2a\u6d88\u8d39\u56de\u8c03\u76d1\u542c\u5668\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"//\u5e76\u53d1\u6d88\u8d39\u76d1\u542c\u5668\nconsumer.registerMessageListener(new MessageListenerConcurrently() {\n\n    @Override\n    public ConsumeConcurrentlyStatus consumeMessage(List<MessageExt> msgs,ConsumeConcurrentlyContext context) {\n        //\u7528\u6237\u81ea\u5b9a\u4e49\u4e1a\u52a1\u5904\u7406\n        return ConsumeConcurrentlyStatus.CONSUME_SUCCESS;\n    }\n});\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"//\u987a\u5e8f\u6d88\u8d39\u76d1\u542c\u5668\nconsumer.registerMessageListener(new MessageListenerOrderly() {\n\n    AtomicLong consumeTimes = new AtomicLong(0);\n    @Override\n    public ConsumeOrderlyStatus consumeMessage(List<MessageExt> msgs,ConsumeOrderlyContext context) {\n        \n        //\u7528\u6237\u4e1a\u52a1\u5904\u7406\n  \n        return ConsumeOrderlyStatus.SUCCESS;\n\n    }\n});\n")),(0,r.kt)("p",null,"\u5728\u6267\u884c\u5b8c\u6210\u76d1\u542c\u5668\u7684\u4e1a\u52a1\u903b\u8f91\u540e\u6839\u636e\u8fd4\u56de\u7684\u72b6\u6001\u5ba2\u6237\u7aef\u505a\u540e\u7eed\u7684\u5904\u7406\uff0c\u8fd9\u91cc\u5206\u4e3a\u4e24\u79cd\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"ConsumeOrderlyStatus(SUCCESS,SUSPEND_CURRENT_QUEUE_A_MOMENT \u5176\u4ed6\u7684\u88abDeprecated\u6807\u8bb0)"),(0,r.kt)("li",{parentName:"ol"},"ConsumeConcurrentlyStatus(CONSUME_SUCCESS,RECONSUME_LATER)")),(0,r.kt)("h4",{id:"\u5e76\u53d1\u6d88\u8d39\u8fdb\u5ea6\u7ba1\u7406"},"\u5e76\u53d1\u6d88\u8d39\u8fdb\u5ea6\u7ba1\u7406"),(0,r.kt)("p",null,"\u5e76\u53d1\u6d88\u8d39\u4e3b\u8981\u901a\u8fc7ConsumeMessageConcurrentlyService\u6765\u5904\u7406\u3002ConsumeMessageConcurrentlyService#processConsumeResult\u5904\u7406\u6d88\u8d39\u7684\u3002\u7b2c\u4e00\u90e8\u5206\u6839\u636e\u6d88\u8d39\u72b6\u6001\u7edf\u8ba1\u6d88\u8d39\u6210\u529f\u548c\u6d88\u8d39\u5931\u8d25\u7684TPS\u4fe1\u606f\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"switch (status) {\n    case CONSUME_SUCCESS:\n        if (ackIndex >= consumeRequest.getMsgs().size()) {\n            ackIndex = consumeRequest.getMsgs().size() - 1;\n        }\n        int ok = ackIndex + 1;\n        int failed = consumeRequest.getMsgs().size() - ok;\n        this.getConsumerStatsManager().incConsumeOKTPS(consumerGroup, consumeRequest.getMessageQueue().getTopic(), ok);\n        this.getConsumerStatsManager().incConsumeFailedTPS(consumerGroup, consumeRequest.getMessageQueue().getTopic(), failed);\n        break;\n    case RECONSUME_LATER:\n        ackIndex = -1;\n        this.getConsumerStatsManager().incConsumeFailedTPS(consumerGroup, consumeRequest.getMessageQueue().getTopic(),\n            consumeRequest.getMsgs().size());\n        break;\n    default:\n        break;\n}\n")),(0,r.kt)("p",null,"\u63a5\u7740\u6839\u636e\u4e0d\u540c\u7684\u6d88\u8d39\u6a21\u5f0f\u6765\u5904\u7406\u6d88\u8d39\u6389\u7684\u4fe1\u606f\u548c\u4e3a\u6d88\u8d39\u7684\u4fe1\u606f\uff0c\u5bf9\u4e8e\u672a\u6d88\u8d39\u7684\u4fe1\u606f\u91cd\u65b0\u63d0\u4ea4\u5ef6\u8fdf\u6d88\u8d39\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'switch (this.defaultMQPushConsumer.getMessageModel()) {\n    case BROADCASTING:\n        for (int i = ackIndex + 1; i < consumeRequest.getMsgs().size(); i++) {\n            MessageExt msg = consumeRequest.getMsgs().get(i);\n            log.warn("BROADCASTING, the message consume failed, drop it, {}", msg.toString());\n        }\n        break;\n    case CLUSTERING:\n        //\u5ef6\u8fdf\u6d88\u8d39\u5904\u7406\n        List<MessageExt> msgBackFailed = new ArrayList<MessageExt>(consumeRequest.getMsgs().size());\n        for (int i = ackIndex + 1; i < consumeRequest.getMsgs().size(); i++) {\n            MessageExt msg = consumeRequest.getMsgs().get(i);\n            boolean result = this.sendMessageBack(msg, context);\n            if (!result) {\n                msg.setReconsumeTimes(msg.getReconsumeTimes() + 1);\n                msgBackFailed.add(msg);\n            }\n        }\n\n        if (!msgBackFailed.isEmpty()) {\n            consumeRequest.getMsgs().removeAll(msgBackFailed);\n            //\u6d88\u8d39\u5931\u8d25\u7684\u91cd\u65b0\u5ef6\u8fdf\u6d88\u8d39\n            this.submitConsumeRequestLater(msgBackFailed, consumeRequest.getProcessQueue(), consumeRequest.getMessageQueue());\n        }\n        break;\n    default:\n        break;\n}\n')),(0,r.kt)("p",null,"\u5904\u7406\u5b8c\u6210\u5931\u8d25\u7684\u6d88\u606f\u540e\u63a5\u7740\u5904\u7406\u66f4\u65b0\u6d88\u8d39\u8fdb\u5ea6\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"//\u6bcf\u6b21\u83b7\u53d6\u7b2c\u4e00\u4e2aTreeMap\u4e2d\u7684offset(\u8fd9\u91cc\u51fa\u6765\u7684\u5c31\u662f\u5f53\u524d\u961f\u5217\u7684\u6d88\u8d39\u6307\u9488\u6240\u5728)\nlong offset = consumeRequest.getProcessQueue().removeMessage(consumeRequest.getMsgs());\nif (offset >= 0 && !consumeRequest.getProcessQueue().isDropped()) {\n    //\u66f4\u65b0\u6d88\u8d39\u8fdb\u5ea6\n    this.defaultMQPushConsumerImpl.getOffsetStore().updateOffset(consumeRequest.getMessageQueue(), offset, true);\n}\n")),(0,r.kt)("p",null,"\u4e0a\u9762\u7684\u4ee3\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"long offset = consumeRequest.getProcessQueue().removeMessage(consumeRequest.getMsgs());\n")),(0,r.kt)("p",null,"\u8fd9\u6bb5\u4ee3\u7801\u83b7\u53d6\u7684\u662f ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"msgTreeMap"))," \u4e2d\u7684\u7b2c\u4e00\u4e2a\u3002\u8fd9\u91cc\u5c31\u4f1a\u5b58\u5728\u8fd9\u4e00\u7684\u4e00\u4e2a\u95ee\u9898\u5982\u56fe\u6240\u793a\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/mxsm/document/blob/master/image/MQ/RocketMQ/RocketMQ%E6%B6%88%E8%B4%B9%E5%9B%BE.png?raw=true",alt:null})),(0,r.kt)("p",null,"\u5982\u679c\u662f\u6700\u4e0a\u9762\u7684\u961f\u5217\u5168\u90e8\u6d88\u8d39\u4e86\u90a3\u4e48\u5e8f\u5217\u5316\u7684\u5c31\u662f7\u540e\u9762\u7684\u6d88\u606f\u3002\u800c\u5bf9\u4e8e\u7b2c\u4e8c\u4e2a\u90a3\u4e48\u5982\u679c\u6b64\u65f6\u6d88\u8d39\u8005\u505c\u6b62\u5b95\u673a\u3002\u90a3\u4e48\u5e8f\u5217\u5316\u7684\u5c31\u662f2\u540e\u9762\u7684\u800c\u4e0d\u662f7\u8fd9\u6837\u91cd\u65b0\u542f\u52a8\u6d88\u8d39\u3002\u90a3\u4e48\u5c31\u4f1a\u91cd\u65b0\u6d88\u8d397"),(0,r.kt)("p",null,"\u4e0b\u9762\u6765\u770b\u4e00\u4e0b\u5982\u4f55\u66f4\u65b0\u6d88\u8d39\u8fdb\u5ea6\u7684\u3002\u4ece\u4ee3\u7801\u53ef\u4ee5\u770b\u51fa\u6765\u662f\u901a\u8fc7\u8c03\u7528\u63a5\u53e3 ",(0,r.kt)("strong",{parentName:"p"},"OffsetStore#updateOffset")," \u65b9\u6cd5\u6765\u5904\u7406\uff0c\u5bf9\u4e8e\u96c6\u7fa4\u6d88\u8d39\u6a21\u5f0fOffsetStore\u7684\u5b9e\u73b0\u7c7b\u4e3aRemoteBrokerOffsetStore(\u53e6\u4e00\u4e2a\u5b9e\u73b0LocalFileOffsetStore)\u3002\u521b\u5efa\u4ee3\u7801\u5728 DefaultMQPushConsumerImpl#start\u65b9\u6cd5\u4e2d\u3002\u90a3\u4e48\u770b\u4e00\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"@Override\npublic void updateOffset(MessageQueue mq, long offset, boolean increaseOnly) {\n    if (mq != null) {\n        AtomicLong offsetOld = this.offsetTable.get(mq);\n        if (null == offsetOld) {\n            offsetOld = this.offsetTable.putIfAbsent(mq, new AtomicLong(offset));\n        }\n\n        if (null != offsetOld) {\n            if (increaseOnly) {\n                MixAll.compareAndIncreaseOnly(offsetOld, offset);\n            } else {\n                offsetOld.set(offset);\n            }\n        }\n    }\n}\n")),(0,r.kt)("p",null,"\u8fd9\u91cc\u5c31\u662f\u628a\u6570\u636e\u66f4\u65b0\u5230\u4e00\u4e2aoffsetTable\u4e2d\uff0c\u8fd9\u4e2atable\u5305\u542b\u4e86\u6d88\u606f\u961f\u5217\u548c\u6d88\u8d39\u8fdb\u5ea6\u7684\u5bf9\u5e94\u5173\u7cfb\u3002\n\u8fd9\u91cc\u7684\u6d88\u8d39\u6570\u636e\u4fdd\u5b58\u5728\u5ba2\u6237\u7aef\u6d88\u8d39\u96c6\u7fa4\u7684\u5185\u5b58\u4e2d\uff0c\u8fd9\u6837\u5c31\u4f1a\u5e26\u6765\u4e00\u4e9b\u95ee\u9898\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6d88\u8d39\u8005\u5b95\u673a\u4e86\u600e\u4e48\u5904\u7406\u6d88\u8d39\u8fdb\u5ea6"),(0,r.kt)("li",{parentName:"ul"},"\u6b63\u5e38\u60c5\u51b5\u4e0b\u5982\u4f55\u5904\u7406\u6d88\u8d39\u8fdb\u5ea6")),(0,r.kt)("p",null,"\u4e0a\u9762\u4e24\u4e2a\u95ee\u9898\u7684\u672c\u8d28\u5f52\u7ed3\u5230\u4e00\u4e2a\u90a3\u5c31\u662f\u5982\u4f55\u628a\u8fd9\u4e9b\u6570\u636e\u6301\u4e45\u5316\uff0c\u5728\u54ea\u91cc\u6301\u4e45\u5316\u7684\u95ee\u9898\u3002\u5982\u4f55\u6301\u4e45\u5316\u8fd9\u4e2a\u5c31\u662f\u8bf4\u5230\u6301\u4e45\u5316\u7b56\u7565\u548c\u6301\u4e45\u5316\u7684\u65f6\u673a\u3002\u6301\u4e45\u5316\u7684\u4f4d\u7f6e\u8fd9\u5c31\u786e\u5b9a\u4e86\u8fd9\u4e9b\u6570\u636e\u52a0\u8f7d\u7684\u4f4d\u7f6e\u3002\u63a5\u4e0b\u5206\u6790\u8fd9\u4e24\u4e2a\u95ee\u9898\u3002\nOffsetStore \u63a5\u53e3\u4e3b\u8981\u8d1f\u8d23\u6301\u4e45\u5316\uff0c\u8fd9\u91cc\u5206\u6790\u7684\u96c6\u7fa4\u6d88\u8d39\u3002RemoteBrokerOffsetStore\u7684\u5b9e\u73b0\u4e2d\u770b\u4e00\u4e0b persistAll \u8fd9\u4e2a\u65b9\u6cd5(\u6301\u4e45\u5316\u6240\u6709\u7684)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'//RemoteBrokerOffsetStore#persistAll \u65b9\u6cd5\n@Override\npublic void persistAll(Set<MessageQueue> mqs) {\n    if (null == mqs || mqs.isEmpty())\n        return;\n\n    final HashSet<MessageQueue> unusedMQ = new HashSet<MessageQueue>();\n\n    for (Map.Entry<MessageQueue, AtomicLong> entry : this.offsetTable.entrySet()) {\n        MessageQueue mq = entry.getKey();\n        AtomicLong offset = entry.getValue();\n        if (offset != null) {\n            if (mqs.contains(mq)) {\n                try {\n                    //\u66f4\u65b0\u6d88\u8d39\u8fdb\u5ea6\u5230Broker\n                    this.updateConsumeOffsetToBroker(mq, offset.get());\n                } catch (Exception e) {\n                    log.error("updateConsumeOffsetToBroker exception, " + mq.toString(), e);\n                }\n            } else {\n                unusedMQ.add(mq);\n            }\n        }\n    }\n\n    if (!unusedMQ.isEmpty()) {\n        for (MessageQueue mq : unusedMQ) {\n            this.offsetTable.remove(mq);\n            log.info("remove unused mq, {}, {}", mq, this.groupName);\n        }\n    }\n}\n')),(0,r.kt)("p",null,"\u8c03\u7528\u8fd9\u4e2a\u65b9\u6cd5\u4e3b\u8981\u5728\u4e24\u4e2a\u5730\u65b9\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"DefaultMQPushConsumerImpl#shutdown ()")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public synchronized void shutdown() {\n        switch (this.serviceState) {\n            case CREATE_JUST:\n                break;\n            case RUNNING:\n                this.consumeMessageService.shutdown();\n                this.persistConsumerOffset();\n                this.mQClientFactory.unregisterConsumer(this.defaultMQPushConsumer.getConsumerGroup());\n                this.mQClientFactory.shutdown();\n                log.info("the consumer [{}] shutdown OK", this.defaultMQPushConsumer.getConsumerGroup());\n                this.rebalanceImpl.destroy();\n                this.serviceState = ServiceState.SHUTDOWN_ALREADY;\n                break;\n            case SHUTDOWN_ALREADY:\n                break;\n            default:\n                break;\n        }\n    }\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"MQClientInstance\u4e2d\u7684\u5b9a\u65f6\u4efb\u52a1(\u4f1a\u5728\u521b\u5ba2\u6237\u7aef\u7684\u65f6\u5019\u542f\u52a8)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'//\u9ed8\u8ba4\u662f\u6bcf\u4e94\u79d2\u89e6\u53d1\u4e00\u6b21\nthis.scheduledExecutorService.scheduleAtFixedRate(new Runnable() {\n\n    @Override\n    public void run() {\n        try {\n            MQClientInstance.this.persistAllConsumerOffset();\n        } catch (Exception e) {\n            log.error("ScheduledTask persistAllConsumerOffset exception", e);\n        }\n    }\n}, 1000 * 10, this.clientConfig.getPersistConsumerOffsetInterval(), TimeUnit.MILLISECONDS);\n')),(0,r.kt)("p",null,"\u901a\u8fc7\u4ee3\u7801\u5206\u6790\u53ef\u4ee5\u53d1\u73b0\uff1a  ",(0,r.kt)("strong",{parentName:"p"},"\u5728\u6d88\u8d39\u8005shutdown\u7684\u65f6\u5019\u4f1a\u53bb\u6301\u4e45\u5316\uff0c\u7136\u540e\u5c31\u5728\u8fd0\u884c\u8fc7\u7a0b\u4e2d\u6bcf5\u79d2\u5b9a\u65f6\u53bb\u6301\u4e45\u5316\u4e00\u6b21\u6d88\u8d39\u8fdb\u5ea6\u3002\u6d88\u8d39\u7684\u8fdb\u5ea6\u4fdd\u5b58\u5728Broker\u3002")))}m.isMDXComponent=!0}}]);