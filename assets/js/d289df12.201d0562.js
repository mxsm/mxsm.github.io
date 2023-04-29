"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[4375],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var r=t(7294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=r.createContext({}),i=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},c=function(e){var n=i(e.components);return r.createElement(l.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,s=e.mdxType,a=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=i(t),g=s,d=p["".concat(l,".").concat(g)]||p[g]||m[g]||a;return t?r.createElement(d,u(u({ref:n},c),{},{components:t})):r.createElement(d,u({ref:n},c))}));function d(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var a=t.length,u=new Array(a);u[0]=g;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[p]="string"==typeof e?e:s,u[1]=o;for(var i=2;i<a;i++)u[i]=t[i];return r.createElement.apply(null,u)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},493:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>u,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>i});var r=t(7462),s=(t(7294),t(3905));const a={title:"RocketMQ\u6e90\u7801\u89e3\u6790-\u751f\u4ea7\u8005\u6295\u9012\u6d88\u606f\u7b56\u7565",date:new Date("2020-03-25T00:00:00.000Z"),weight:202106112023},u=void 0,o={unversionedId:"rocketmq/rocketmq4/producer/RocketMQ-analysis-producer-msgsend-strategy",id:"rocketmq/rocketmq4/producer/RocketMQ-analysis-producer-msgsend-strategy",title:"RocketMQ\u6e90\u7801\u89e3\u6790-\u751f\u4ea7\u8005\u6295\u9012\u6d88\u606f\u7b56\u7565",description:"\u4ee5\u4e0b\u6e90\u7801\u57fa\u4e8eRocket MQ 4.7.0",source:"@site/docs/rocketmq/rocketmq4/producer/RocketMQ-analysis-producer-msgsend-strategy.md",sourceDirName:"rocketmq/rocketmq4/producer",slug:"/rocketmq/rocketmq4/producer/RocketMQ-analysis-producer-msgsend-strategy",permalink:"/docs/rocketmq/rocketmq4/producer/RocketMQ-analysis-producer-msgsend-strategy",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/rocketmq/rocketmq4/producer/RocketMQ-analysis-producer-msgsend-strategy.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1682735967,formattedLastUpdatedAt:"Apr 29, 2023",frontMatter:{title:"RocketMQ\u6e90\u7801\u89e3\u6790-\u751f\u4ea7\u8005\u6295\u9012\u6d88\u606f\u7b56\u7565",date:"2020-03-25T00:00:00.000Z",weight:202106112023},sidebar:"rocketmq4",previous:{title:"RocketMQ\u6e90\u7801\u89e3\u6790-producer\u53d1\u9001\u6d88\u606f\u7684\u6d41\u7a0b",permalink:"/docs/rocketmq/rocketmq4/producer/RocketMQ-analysis-producer-messagesend"},next:{title:"RocketMQ\u6e90\u7801\u89e3\u6790-topic\u521b\u5efa\u673a\u5236",permalink:"/docs/rocketmq/rocketmq4/producer/RocketMQ-analysis-topic-create-strategy"}},l={},i=[{value:"1. \u6d88\u606f\u7c7b\u578b",id:"1-\u6d88\u606f\u7c7b\u578b",level:3},{value:"2. \u57fa\u4e8eQueue\u961f\u5217\u8f6e\u8be2\u7b97\u6cd5\u6295\u9012",id:"2-\u57fa\u4e8equeue\u961f\u5217\u8f6e\u8be2\u7b97\u6cd5\u6295\u9012",level:3},{value:"2.1 \u9ed8\u8ba4\u8f6e\u8be2\u7b97\u6cd5",id:"21-\u9ed8\u8ba4\u8f6e\u8be2\u7b97\u6cd5",level:4},{value:"2.2 \u9ed8\u8ba4\u6295\u9012\u65b9\u5f0f\u7684\u589e\u5f3a",id:"22-\u9ed8\u8ba4\u6295\u9012\u65b9\u5f0f\u7684\u589e\u5f3a",level:4},{value:"3. \u987a\u5e8f\u6d88\u606f\u7684\u6295\u9012",id:"3-\u987a\u5e8f\u6d88\u606f\u7684\u6295\u9012",level:3}],c={toc:i},p="wrapper";function m(e){let{components:n,...t}=e;return(0,s.kt)(p,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"\u4ee5\u4e0b\u6e90\u7801\u57fa\u4e8eRocket MQ 4.7.0")),(0,s.kt)("h3",{id:"1-\u6d88\u606f\u7c7b\u578b"},"1. \u6d88\u606f\u7c7b\u578b"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://github.com/mxsm/document/blob/master/image/MQ/RocketMQ/RocketMQMessageType.png?raw=true",alt:"RocketMQMessageType.png"})),(0,s.kt)("h3",{id:"2-\u57fa\u4e8equeue\u961f\u5217\u8f6e\u8be2\u7b97\u6cd5\u6295\u9012"},"2. \u57fa\u4e8eQueue\u961f\u5217\u8f6e\u8be2\u7b97\u6cd5\u6295\u9012"),(0,s.kt)("h4",{id:"21-\u9ed8\u8ba4\u8f6e\u8be2\u7b97\u6cd5"},"2.1 \u9ed8\u8ba4\u8f6e\u8be2\u7b97\u6cd5"),(0,s.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u91c7\u7528\u4e86\u6700\u7b80\u5355\u7684\u8f6e\u8be2\u7b97\u6cd5\uff0c\u8fd9\u79cd\u7b97\u6cd5\u6709\u4e2a\u5f88\u597d\u7684\u7279\u6027\u5c31\u662f\uff0c\u4fdd\u8bc1\u6bcf\u4e00\u4e2aQueue\u961f\u5217\u7684\u6d88\u606f\u6295\u9012\u6570\u91cf\u5c3d\u53ef\u80fd\u5747\u5300\u3002\u770b\u4e00\u4e0b\u4ee3\u7801\u7684\u5b9e\u73b0\uff0c"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'//DefaultMQProducerImpl selectOneMessageQueue\u9009\u62e9\u961f\u5217\npublic MessageQueue selectOneMessageQueue(final TopicPublishInfo tpInfo, final String lastBrokerName) {\n        return this.mqFaultStrategy.selectOneMessageQueue(tpInfo, lastBrokerName);\n}\n\n//MQFaultStrategy selectOneMessageQueue\npublic MessageQueue selectOneMessageQueue(final TopicPublishInfo tpInfo, final String lastBrokerName) {\n        if (this.sendLatencyFaultEnable) {\n            try {\n                int index = tpInfo.getSendWhichQueue().getAndIncrement();\n                for (int i = 0; i < tpInfo.getMessageQueueList().size(); i++) {\n                    int pos = Math.abs(index++) % tpInfo.getMessageQueueList().size();\n                    if (pos < 0)\n                        pos = 0;\n                    MessageQueue mq = tpInfo.getMessageQueueList().get(pos);\n                    if (latencyFaultTolerance.isAvailable(mq.getBrokerName())) {\n                        if (null == lastBrokerName || mq.getBrokerName().equals(lastBrokerName))\n                            return mq;\n                    }\n                }\n\n                final String notBestBroker = latencyFaultTolerance.pickOneAtLeast();\n                int writeQueueNums = tpInfo.getQueueIdByBroker(notBestBroker);\n                if (writeQueueNums > 0) {\n                    final MessageQueue mq = tpInfo.selectOneMessageQueue();\n                    if (notBestBroker != null) {\n                        mq.setBrokerName(notBestBroker);\n                        mq.setQueueId(tpInfo.getSendWhichQueue().getAndIncrement() % writeQueueNums);\n                    }\n                    return mq;\n                } else {\n                    latencyFaultTolerance.remove(notBestBroker);\n                }\n            } catch (Exception e) {\n                log.error("Error occurred when selecting message queue", e);\n            }\n\n            return tpInfo.selectOneMessageQueue();\n        }\n\n        return tpInfo.selectOneMessageQueue(lastBrokerName);\n    }\n')),(0,s.kt)("p",null,"\u5728\u9ed8\u8ba4\u7684\u60c5\u51b5\u4e0b ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"sendLatencyFaultEnable=false"))," \u76f4\u63a5\u8c03\u7528\u7684\u662f ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"TopicPublishInfo.selectOneMessageQueue"))," \u65b9\u6cd5:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"//\u53d1\u5e03\u7684\u5bf9\u8c61\u4e2dTopicPublishInfo\npublic class TopicPublishInfo {\n\n    //\u57fa\u4e8e\u7ebf\u7a0b\u4e0a\u4e0b\u6587\u7684\u8ba1\u6570\u9012\u589e--\u7528\u4e8e\u8f6e\u8be2\u76ee\u7684\n    private volatile ThreadLocalIndex sendWhichQueue = new ThreadLocalIndex();\n\n    public MessageQueue selectOneMessageQueue(final String lastBrokerName) {\n        if (lastBrokerName == null) {\n            return selectOneMessageQueue();\n        } else {\n            int index = this.sendWhichQueue.getAndIncrement();\n            for (int i = 0; i < this.messageQueueList.size(); i++) {\n                //\u8f6e\u8be2\n                int pos = Math.abs(index++) % this.messageQueueList.size();\n                if (pos < 0)\n                    pos = 0;\n                MessageQueue mq = this.messageQueueList.get(pos);\n                if (!mq.getBrokerName().equals(lastBrokerName)) {\n                    return mq;\n                }\n            }\n            return selectOneMessageQueue();\n        }\n    }\n    \n    //\u83b7\u53d6\u6d88\u8d39\u961f\u5217\n    public MessageQueue selectOneMessageQueue() {\n        int index = this.sendWhichQueue.getAndIncrement();\n        int pos = Math.abs(index) % this.messageQueueList.size();\n        if (pos < 0)\n            pos = 0;\n        return this.messageQueueList.get(pos);\n    }\n}\n")),(0,s.kt)("h4",{id:"22-\u9ed8\u8ba4\u6295\u9012\u65b9\u5f0f\u7684\u589e\u5f3a"},"2.2 \u9ed8\u8ba4\u6295\u9012\u65b9\u5f0f\u7684\u589e\u5f3a"),(0,s.kt)("p",null,"\u57fa\u4e8eQueue\u961f\u5217\u8f6e\u8be2\u7b97\u6cd5\u548c\u6d88\u606f\u6295\u9012\u5ef6\u8fdf\u6700\u5c0f\u7684\u7b56\u7565\u6295\u9012\uff0c\u9ed8\u8ba4\u7684\u6295\u9012\u65b9\u5f0f\u6bd4\u8f83\u7b80\u5355\uff0c\u4f46\u662f\u4e5f\u66b4\u9732\u4e86\u4e00\u4e2a\u95ee\u9898\uff0c\u5c31\u662f\u6709\u4e9bQueue\u961f\u5217\u53ef\u80fd\u7531\u4e8e\u81ea\u8eab\u6570\u91cf\u79ef\u538b\u7b49\u539f\u56e0\uff0c\u53ef\u80fd\u5728\u6295\u9012\u7684\u8fc7\u7a0b\u6bd4\u8f83\u957f\uff0c\u5bf9\u4e8e\u8fd9\u6837\u7684Queue\u961f\u5217\u4f1a\u5f71\u54cd\u540e\u7eed\u6295\u9012\u7684\u6548\u679c\u3002\n\u57fa\u4e8e\u8fd9\u79cd\u73b0\u8c61\uff0cRocketMQ\u5728\u6bcf\u53d1\u9001\u4e00\u4e2aMQ\u6d88\u606f\u540e\uff0c\u90fd\u4f1a\u7edf\u8ba1\u4e00\u4e0b\u6d88\u606f\u6295\u9012\u7684\u65f6\u95f4\u5ef6\u8fdf\uff0c\u6839\u636e\u8fd9\u4e2a\u65f6\u95f4\u5ef6\u8fdf\uff0c\u53ef\u4ee5\u77e5\u9053\u5f80\u54ea\u4e9bQueue\u961f\u5217\u6295\u9012\u7684\u901f\u5ea6\u5feb\u3002 \u5728\u8fd9\u79cd\u573a\u666f\u4e0b\uff0c\u4f1a\u4f18\u5148\u4f7f\u7528\u6d88\u606f\u6295\u9012\u5ef6\u8fdf\u6700\u5c0f\u7684\u7b56\u7565\uff0c\u5982\u679c\u6ca1\u6709\u751f\u6548\uff0c\u518d\u4f7f\u7528Queue\u961f\u5217\u8f6e\u8be2\u7684\u65b9\u5f0f\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'public MessageQueue selectOneMessageQueue(final TopicPublishInfo tpInfo, final String lastBrokerName) {\n        if (this.sendLatencyFaultEnable) {\n            try {\n                int index = tpInfo.getSendWhichQueue().getAndIncrement();\n                for (int i = 0; i < tpInfo.getMessageQueueList().size(); i++) {\n                    int pos = Math.abs(index++) % tpInfo.getMessageQueueList().size();\n                    if (pos < 0)\n                        pos = 0;\n                    //\u8f6e\u8be2\u83b7\u53d6\n                    MessageQueue mq = tpInfo.getMessageQueueList().get(pos);\n                    //\u7b2c\u4e00\u6b21\u8fd4\u56de\u4e00\u5b9a\u662ftrue\n                    if (latencyFaultTolerance.isAvailable(mq.getBrokerName())) {\n                        if (null == lastBrokerName || mq.getBrokerName().equals(lastBrokerName))\n                            return mq;\n                    }\n                }\n\n                // \u4ece\u5ef6\u8fdf\u5bb9\u9519broker\u5217\u8868\u4e2d\u6311\u9009\u4e00\u4e2a\u5bb9\u9519\u6027\u6700\u597d\u7684\u4e00\u4e2a broker\n                final String notBestBroker = latencyFaultTolerance.pickOneAtLeast();\n                int writeQueueNums = tpInfo.getQueueIdByBroker(notBestBroker);\n                if (writeQueueNums > 0) {\n                    final MessageQueue mq = tpInfo.selectOneMessageQueue();\n                    if (notBestBroker != null) {\n                        // \u53d6\u4f59\u6311\u9009\u5176\u4e2d\u4e00\u4e2a\u961f\u5217\n                        mq.setBrokerName(notBestBroker);\n                        mq.setQueueId(tpInfo.getSendWhichQueue().getAndIncrement() % writeQueueNums);\n                    }\n                    return mq;\n                } else {\n                    latencyFaultTolerance.remove(notBestBroker);\n                }\n            } catch (Exception e) {\n                log.error("Error occurred when selecting message queue", e);\n            }\n\n            return tpInfo.selectOneMessageQueue();\n        }\n\n        return tpInfo.selectOneMessageQueue(lastBrokerName);\n    }\n')),(0,s.kt)("p",null,"\u6570\u636e\u7684\u8bbe\u7f6e\u5728\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"private SendResult sendDefaultImpl(\n        Message msg,\n        final CommunicationMode communicationMode,\n        final SendCallback sendCallback,\n        final long timeout\n    ) throws MQClientException, RemotingException, MQBrokerException, InterruptedException {\n    //\u7701\u7565\u4ee3\u7801\n    \n    //\u8fd9\u91cc\u5c31\u662f\u628a\u53d1\u9001\u6d88\u606f\u7684\u6570\u636e\u5230broker\u65f6\u95f4\n    this.updateFaultItem(mq.getBrokerName(), endTimestamp - beginTimestampPrev, false);\n    \n    //\u7701\u7565\u4ee3\u7801\n}\n")),(0,s.kt)("h3",{id:"3-\u987a\u5e8f\u6d88\u606f\u7684\u6295\u9012"},"3. \u987a\u5e8f\u6d88\u606f\u7684\u6295\u9012"),(0,s.kt)("p",null,"\u4e0a\u9762\u7684\u4e24\u79cd\u6d88\u606f\u7684\u6295\u9012\u65b9\u5f0f\u65f6\u5e8f\u6027\u6ca1\u6709\u8981\u6c42\u7684\u573a\u666f\uff0c\u8fd9\u79cd\u6295\u9012\u7684\u901f\u5ea6\u548c\u6548\u7387\u6bd4\u8f83\u9ad8\u3002\u800c\u5728\u6709\u4e9b\u573a\u666f\u4e0b\uff0c\u9700\u8981\u4fdd\u8bc1\u540c\u7c7b\u578b\u6d88\u606f\u6295\u9012\u548c\u6d88\u8d39\u7684\u987a\u5e8f\u6027\u3002\u901a\u8fc7\u4e00\u5b9a\u7684\u7b56\u7565\uff0c\u5c06\u5176\u653e\u7f6e\u5728\u4e00\u4e2a queue\u961f\u5217\u4e2d\u3002\u770b\u4e00\u4e0b\u5728\u751f\u4ea7\u8005\u4e2d\u5982\u4f55\u53d1\u9001\u987a\u5e8f\u6d88\u606f\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'public class OrderedProducer {\n    public static void main(String[] args) throws Exception {\n        //Instantiate with a producer group name.\n        MQProducer producer = new DefaultMQProducer("example_group_name");\n        //Launch the instance.\n        producer.start();\n        String[] tags = new String[] {"TagA", "TagB", "TagC", "TagD", "TagE"};\n        for (int i = 0; i < 100; i++) {\n            int orderId = i % 10;\n            //Create a message instance, specifying topic, tag and message body.\n            Message msg = new Message("TopicTestjjj", tags[i % tags.length], "KEY" + i,\n                    ("Hello RocketMQ " + i).getBytes(RemotingHelper.DEFAULT_CHARSET));\n            SendResult sendResult = producer.send(msg, new MessageQueueSelector() {\n            @Override\n            public MessageQueue select(List<MessageQueue> mqs, Message msg, Object arg) {\n                Integer id = (Integer) arg;\n                int index = id % mqs.size();\n                return mqs.get(index);\n            }\n            }, orderId);\n\n            System.out.printf("%s%n", sendResult);\n        }\n        //server shutdown\n        producer.shutdown();\n    }\n}\n\n')),(0,s.kt)("p",null,"\u4e0a\u9762\u7684\u4f8b\u5b50\u662f\u5b98\u7f51\u7684\u4e00\u4e2a\u4f8b\u5b50\u3002\u901a\u8fc7ID\u6765\u9009\u62e9\u53d1\u9001\u7684broker\u4e2d\u7684\u67d0\u4e00\u4e2a\u5199\u5165\u961f\u5217\u3002\u751f\u4ea7\u8005\u5728\u6d88\u606f\u7684\u6295\u9012\u8fc7\u7a0b\u4e2d\u4f7f\u7528\u4e86 ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"MessageQueueSelector"))," \u4f5c\u4e3a\u6d88\u606f\u961f\u5217\u7684\u9009\u62e9\u7b56\u7565\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"public interface MessageQueueSelector {\n    MessageQueue select(final List<MessageQueue> mqs, final Message msg, final Object arg);\n}\n")),(0,s.kt)("p",null,"\u5728MQ\u4e2d\u9ed8\u8ba4\u63d0\u4f9b\u4e86\u4e09\u79cd\u5b9e\u73b0:"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://github.com/mxsm/document/blob/master/image/MQ/RocketMQ/MessageQueueSelector.png?raw=true",alt:null})),(0,s.kt)("p",null,"SelectMessageQueueByHash\u7684\u5b9e\u73b0\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"public class SelectMessageQueueByHash implements MessageQueueSelector {\n\n    @Override\n    public MessageQueue select(List<MessageQueue> mqs, Message msg, Object arg) {\n        int value = arg.hashCode();\n        if (value < 0) {\n            value = Math.abs(value);\n        }\n\n        value = value % mqs.size();\n        return mqs.get(value);\n    }\n}\n")),(0,s.kt)("p",null,"SelectMessageQueueByMachineRoom\u7684\u5b9e\u73b0\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"public class SelectMessageQueueByMachineRoom implements MessageQueueSelector {\n    private Set<String> consumeridcs;\n\n    @Override\n    public MessageQueue select(List<MessageQueue> mqs, Message msg, Object arg) {\n        return null;\n    }\n\n    public Set<String> getConsumeridcs() {\n        return consumeridcs;\n    }\n\n    public void setConsumeridcs(Set<String> consumeridcs) {\n        this.consumeridcs = consumeridcs;\n    }\n}\n")),(0,s.kt)("p",null,"SelectMessageQueueByRandom\u7684\u5b9e\u73b0\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"public class SelectMessageQueueByRandom implements MessageQueueSelector {\n    private Random random = new Random(System.currentTimeMillis());\n\n    @Override\n    public MessageQueue select(List<MessageQueue> mqs, Message msg, Object arg) {\n        int value = random.nextInt(mqs.size());\n        return mqs.get(value);\n    }\n}\n")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"\u901a\u8fc7 MessageQueueSelector \u7c7b\u7684\u5b9e\u73b0\u8de8\u8d8a\u9009\u62e9\u6d88\u606f\u53d1\u9001\u7684\u961f\u5217\u3002\u5bf9\u4e8e\u540c\u4e00\u4e2a\u961f\u5217\u7684\u6d88\u606f\u662f\u6709\u5e8f\u7684\u3002\u4e0d\u540c\u961f\u5217\u7684\u6d88\u606f\u8fdb\u884c\u6d88\u8d39\u53ef\u80fd\u662f\u65e0\u5e8f\u7684\u3002")))}m.isMDXComponent=!0}}]);