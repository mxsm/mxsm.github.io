"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[8248],{703:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>u,frontMatter:()=>c,metadata:()=>o,toc:()=>l});var r=t(4848),s=t(8453);const c={title:"RocketMQ\u6e90\u7801\u89e3\u6790-producer\u53d1\u9001\u6d88\u606f\u7684\u6d41\u7a0b",date:new Date("2020-03-22T00:00:00.000Z"),weight:202106112049},a=void 0,o={id:"rocketmq/rocketmq4/producer/RocketMQ-analysis-producer-messagesend",title:"RocketMQ\u6e90\u7801\u89e3\u6790-producer\u53d1\u9001\u6d88\u606f\u7684\u6d41\u7a0b",description:"\u4ee5\u4e0b\u6e90\u7801\u57fa\u4e8eRocket MQ 4.7.0",source:"@site/docs/rocketmq/rocketmq4/producer/RocketMQ-analysis-producer-messagesend.md",sourceDirName:"rocketmq/rocketmq4/producer",slug:"/rocketmq/rocketmq4/producer/RocketMQ-analysis-producer-messagesend",permalink:"/docs/rocketmq/rocketmq4/producer/RocketMQ-analysis-producer-messagesend",draft:!1,unlisted:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/rocketmq/rocketmq4/producer/RocketMQ-analysis-producer-messagesend.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1710172454,formattedLastUpdatedAt:"Mar 11, 2024",frontMatter:{title:"RocketMQ\u6e90\u7801\u89e3\u6790-producer\u53d1\u9001\u6d88\u606f\u7684\u6d41\u7a0b",date:"2020-03-22T00:00:00.000Z",weight:202106112049},sidebar:"rocketmq4",previous:{title:"Producer",permalink:"/docs/rocketmq/rocketmq4/producer/"},next:{title:"RocketMQ\u6e90\u7801\u89e3\u6790-\u751f\u4ea7\u8005\u6295\u9012\u6d88\u606f\u7b56\u7565",permalink:"/docs/rocketmq/rocketmq4/producer/RocketMQ-analysis-producer-msgsend-strategy"}},i={},l=[{value:"1. \u8c03\u7528\u6d41\u7a0b",id:"1-\u8c03\u7528\u6d41\u7a0b",level:3},{value:"1\u3001Producer\u7aef\u53d1\u9001\u540c\u6b65\u6d88\u606f",id:"1producer\u7aef\u53d1\u9001\u540c\u6b65\u6d88\u606f",level:4},{value:"2\u3001\u53d1\u9001\u5f02\u6b65\u6d88\u606f",id:"2\u53d1\u9001\u5f02\u6b65\u6d88\u606f",level:4},{value:"3\u3001\u5355\u5411\u53d1\u9001\u6d88\u606f",id:"3\u5355\u5411\u53d1\u9001\u6d88\u606f",level:4},{value:"2. \u6d88\u606f\u53d1\u9001\u6d41\u7a0b\u6e90\u7801\u89e3\u6790",id:"2-\u6d88\u606f\u53d1\u9001\u6d41\u7a0b\u6e90\u7801\u89e3\u6790",level:3},{value:"3. \u6d88\u606f\u7684\u53d1\u9001",id:"3-\u6d88\u606f\u7684\u53d1\u9001",level:3}];function d(e){const n={blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"\u4ee5\u4e0b\u6e90\u7801\u57fa\u4e8eRocket MQ 4.7.0"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"1-\u8c03\u7528\u6d41\u7a0b",children:"1. \u8c03\u7528\u6d41\u7a0b"}),"\n",(0,r.jsx)(n.p,{children:"RocketMQ\u63d0\u4f9b\u7684Producer\u5b9e\u73b0\u4e3aDefaultMQProducer\u3002Producer\u5728\u521b\u5efa\u7684\u65f6\u5019\u5fc5\u987b\u6307\u5b9aProducer Group Name\uff0c\u5728\u6b63\u5f0f\u53d1\u9001\u6d88\u606f\u4e4b\u524d\u9700\u8981\u8c03\u7528start\u65b9\u6cd5\u521d\u59cb\u5316Producer"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://raw.githubusercontent.com/mxsm/picture/main/other/git/MQ%E6%B6%88%E6%81%AF%E5%8F%91%E9%80%81%E7%9A%84%E9%80%BB%E8%BE%91.png",alt:"MQ\u6d88\u606f\u53d1\u9001\u7684\u903b\u8f91"})}),"\n",(0,r.jsx)(n.h4,{id:"1producer\u7aef\u53d1\u9001\u540c\u6b65\u6d88\u606f",children:"1\u3001Producer\u7aef\u53d1\u9001\u540c\u6b65\u6d88\u606f"}),"\n",(0,r.jsx)(n.p,{children:"\u8fd9\u79cd\u53ef\u9760\u6027\u540c\u6b65\u5730\u53d1\u9001\u65b9\u5f0f\u4f7f\u7528\u7684\u6bd4\u8f83\u5e7f\u6cdb\uff0c\u6bd4\u5982\uff1a\u91cd\u8981\u7684\u6d88\u606f\u901a\u77e5\uff0c\u77ed\u4fe1\u901a\u77e5\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'public class SyncProducer {\n\tpublic static void main(String[] args) throws Exception {\n    \t// \u5b9e\u4f8b\u5316\u6d88\u606f\u751f\u4ea7\u8005Producer\n        DefaultMQProducer producer = new DefaultMQProducer("please_rename_unique_group_name");\n    \t// \u8bbe\u7f6eNameServer\u7684\u5730\u5740\n    \tproducer.setNamesrvAddr("localhost:9876");\n    \t// \u542f\u52a8Producer\u5b9e\u4f8b\n        producer.start();\n    \tfor (int i = 0; i < 100; i++) {\n    \t    // \u521b\u5efa\u6d88\u606f\uff0c\u5e76\u6307\u5b9aTopic\uff0cTag\u548c\u6d88\u606f\u4f53\n    \t    Message msg = new Message("TopicTest" /* Topic */,\n        \t"TagA" /* Tag */,\n        \t("Hello RocketMQ " + i).getBytes(RemotingHelper.DEFAULT_CHARSET) /* Message body */\n        \t);\n        \t// \u53d1\u9001\u6d88\u606f\u5230\u4e00\u4e2aBroker\n            SendResult sendResult = producer.send(msg);\n            // \u901a\u8fc7sendResult\u8fd4\u56de\u6d88\u606f\u662f\u5426\u6210\u529f\u9001\u8fbe\n            System.out.printf("%s%n", sendResult);\n    \t}\n    \t// \u5982\u679c\u4e0d\u518d\u53d1\u9001\u6d88\u606f\uff0c\u5173\u95edProducer\u5b9e\u4f8b\u3002\n    \tproducer.shutdown();\n    }\n}\n'})}),"\n",(0,r.jsx)(n.h4,{id:"2\u53d1\u9001\u5f02\u6b65\u6d88\u606f",children:"2\u3001\u53d1\u9001\u5f02\u6b65\u6d88\u606f"}),"\n",(0,r.jsx)(n.p,{children:"\u5f02\u6b65\u6d88\u606f\u901a\u5e38\u7528\u5728\u5bf9\u54cd\u5e94\u65f6\u95f4\u654f\u611f\u7684\u4e1a\u52a1\u573a\u666f\uff0c\u5373\u53d1\u9001\u7aef\u4e0d\u80fd\u5bb9\u5fcd\u957f\u65f6\u95f4\u5730\u7b49\u5f85Broker\u7684\u54cd\u5e94\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'public class AsyncProducer {\n\tpublic static void main(String[] args) throws Exception {\n    \t// \u5b9e\u4f8b\u5316\u6d88\u606f\u751f\u4ea7\u8005Producer\n        DefaultMQProducer producer = new DefaultMQProducer("please_rename_unique_group_name");\n    \t// \u8bbe\u7f6eNameServer\u7684\u5730\u5740\n        producer.setNamesrvAddr("localhost:9876");\n    \t// \u542f\u52a8Producer\u5b9e\u4f8b\n        producer.start();\n        producer.setRetryTimesWhenSendAsyncFailed(0);\n\t\n\tint messageCount = 100;\n        // \u6839\u636e\u6d88\u606f\u6570\u91cf\u5b9e\u4f8b\u5316\u5012\u8ba1\u65f6\u8ba1\u7b97\u5668\n\tfinal CountDownLatch2 countDownLatch = new CountDownLatch2(messageCount);\n    \tfor (int i = 0; i < messageCount; i++) {\n                final int index = i;\n            \t// \u521b\u5efa\u6d88\u606f\uff0c\u5e76\u6307\u5b9aTopic\uff0cTag\u548c\u6d88\u606f\u4f53\n                Message msg = new Message("TopicTest",\n                    "TagA",\n                    "OrderID188",\n                    "Hello world".getBytes(RemotingHelper.DEFAULT_CHARSET));\n                // SendCallback\u63a5\u6536\u5f02\u6b65\u8fd4\u56de\u7ed3\u679c\u7684\u56de\u8c03\n                producer.send(msg, new SendCallback() {\n                    @Override\n                    public void onSuccess(SendResult sendResult) {\n                        System.out.printf("%-10d OK %s %n", index,\n                            sendResult.getMsgId());\n                    }\n                    @Override\n                    public void onException(Throwable e) {\n      \t              System.out.printf("%-10d Exception %s %n", index, e);\n      \t              e.printStackTrace();\n                    }\n            \t});\n    \t}\n\t// \u7b49\u5f855s\n\tcountDownLatch.await(5, TimeUnit.SECONDS);\n    \t// \u5982\u679c\u4e0d\u518d\u53d1\u9001\u6d88\u606f\uff0c\u5173\u95edProducer\u5b9e\u4f8b\u3002\n    \tproducer.shutdown();\n    }\n}\n'})}),"\n",(0,r.jsx)(n.h4,{id:"3\u5355\u5411\u53d1\u9001\u6d88\u606f",children:"3\u3001\u5355\u5411\u53d1\u9001\u6d88\u606f"}),"\n",(0,r.jsx)(n.p,{children:"\u8fd9\u79cd\u65b9\u5f0f\u4e3b\u8981\u7528\u5728\u4e0d\u7279\u522b\u5173\u5fc3\u53d1\u9001\u7ed3\u679c\u7684\u573a\u666f\uff0c\u4f8b\u5982\u65e5\u5fd7\u53d1\u9001\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'public class OnewayProducer {\n\tpublic static void main(String[] args) throws Exception{\n    \t// \u5b9e\u4f8b\u5316\u6d88\u606f\u751f\u4ea7\u8005Producer\n        DefaultMQProducer producer = new DefaultMQProducer("please_rename_unique_group_name");\n    \t// \u8bbe\u7f6eNameServer\u7684\u5730\u5740\n        producer.setNamesrvAddr("localhost:9876");\n    \t// \u542f\u52a8Producer\u5b9e\u4f8b\n        producer.start();\n    \tfor (int i = 0; i < 100; i++) {\n        \t// \u521b\u5efa\u6d88\u606f\uff0c\u5e76\u6307\u5b9aTopic\uff0cTag\u548c\u6d88\u606f\u4f53\n        \tMessage msg = new Message("TopicTest" /* Topic */,\n                "TagA" /* Tag */,\n                ("Hello RocketMQ " + i).getBytes(RemotingHelper.DEFAULT_CHARSET) /* Message body */\n        \t);\n        \t// \u53d1\u9001\u5355\u5411\u6d88\u606f\uff0c\u6ca1\u6709\u4efb\u4f55\u8fd4\u56de\u7ed3\u679c\n        \tproducer.sendOneway(msg);\n\n    \t}\n    \t// \u5982\u679c\u4e0d\u518d\u53d1\u9001\u6d88\u606f\uff0c\u5173\u95edProducer\u5b9e\u4f8b\u3002\n    \tproducer.shutdown();\n    }\n}\n'})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Producer\u53d1\u9001\u6d88\u606f\u5b58\u5728\u4e09\u79cd\u6a21\u5f0f\uff0c\u5206\u522b\u4e3a\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Sync \u540c\u6b65"}),"\n",(0,r.jsx)(n.li,{children:"Async \u5f02\u6b65"}),"\n",(0,r.jsx)(n.li,{children:"Oneway \u5355\u5411\u53d1\u9001"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"2-\u6d88\u606f\u53d1\u9001\u6d41\u7a0b\u6e90\u7801\u89e3\u6790",children:"2. \u6d88\u606f\u53d1\u9001\u6d41\u7a0b\u6e90\u7801\u89e3\u6790"}),"\n",(0,r.jsx)(n.p,{children:"DefaultMQProducer.start\u542f\u52a8\u751f\u4ea7\u8005\uff0c\u4e0b\u9762\u6765\u770b\u4e00\u4e0bstart\u7684\u6e90\u7801\u89e3\u6790\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'    @Override\n    public void start() throws MQClientException {\n        this.setProducerGroup(withNamespace(this.producerGroup));\n        //\u901a\u8fc7\u542f\u52a8\n        this.defaultMQProducerImpl.start();\n        if (null != traceDispatcher) {\n            try {\n                traceDispatcher.start(this.getNamesrvAddr(), this.getAccessChannel());\n            } catch (MQClientException e) {\n                log.warn("trace dispatcher start failed ", e);\n            }\n        }\n    }\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u4e0b\u9762\u770b\u4e00\u4e0b ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"this.defaultMQProducerImpl.start();"})})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"    public void start() throws MQClientException {\n        this.start(true);\n    }\n    \n    public void start(final boolean startFactory) throws MQClientException {\n        \n        switch (this.serviceState) {\n            case CREATE_JUST:\n            \n            //\u7701\u7565\u90e8\u5206\u4ee3\u7801\n        this.mQClientFactory = MQClientManager.getInstance().getOrCreateMQClientInstance(this.defaultMQProducer, rpcHook);\n        \n        if (startFactory) {\n            //\u542f\u52a8MQClientInstance\n            mQClientFactory.start();\n        }\n        }    \n    }\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u901a\u8fc7\u4ee3\u7801\u53ef\u4ee5\u53d1\u73b0MQClientInstance\u662f\u6574\u4e2a\u5ba2\u6237\u7aef\u7684\u6838\u5fc3\u7c7b\u3002\u4e0b\u9762\u6765\u770b\u4e00\u4e0bstart\u65b9\u6cd5\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'public void start() throws MQClientException {\n\n        synchronized (this) {\n            switch (this.serviceState) {\n                case CREATE_JUST:\n                    this.serviceState = ServiceState.START_FAILED;\n                    // \u5728\u6ca1\u6709\u914d\u7f6eNameServer\u5730\u5740\uff0c\u9002\u914d\u5730\u5740\n                    if (null == this.clientConfig.getNamesrvAddr()) {\n                        this.mQClientAPIImpl.fetchNameServerAddr();\n                    }\n                    // \u542f\u52a8\u5ba2\u6237\u7aef\u8bf7\u6c42\u8fd4\u56de\u7684netty \u5ba2\u6237\u7aef\n                    this.mQClientAPIImpl.start();\n                    // \u542f\u52a8\u5404\u79cd\u8ba1\u5212\u4efb\u52a1\n                    this.startScheduledTask();\n                    // \u542f\u52a8\u62c9\u53bb\u6d88\u606f\u670d\u52a1\n                    this.pullMessageService.start();\n                    // \u542f\u52a8\u8d1f\u8f7d\u5747\u8861\u670d\u52a1\n                    this.rebalanceService.start();\n                    // \u542f\u52a8\u63a8\u9001\u670d\u52a1\n                    this.defaultMQProducer.getDefaultMQProducerImpl().start(false);\n                    log.info("the client factory [{}] start OK", this.clientId);\n                    this.serviceState = ServiceState.RUNNING;\n                    break;\n                case START_FAILED:\n                    throw new MQClientException("The Factory object[" + this.getClientId() + "] has been created before, and failed.", null);\n                default:\n                    break;\n            }\n        }\n    }\n'})}),"\n",(0,r.jsx)(n.p,{children:"MQClientInstance.start \u4e3b\u8981\u505a\u4e0b\u9762\u51e0\u4ef6\u4e8b\uff1a"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"\u542f\u52a8\u5ba2\u6237\u7aef\u6d88\u606f\u5904\u7406"}),"\n",(0,r.jsx)(n.li,{children:"\u542f\u52a8\u5b9a\u65f6\u4efb\u52a1--\u66f4\u65b0\u8def\u7531\u4fe1\u606f\u5b9a\u65f6\u4efb\u52a1\uff0c\u548cbroker\u7684\u5fc3\u8df3\u5b9a\u65f6\u4efb\u52a1\uff0c\u6301\u4e45\u5316\u6240\u6709\u7684\u6d88\u8d39offset\u7684\u5b9a\u65f6\u4efb\u52a1\uff0c\u81ea\u9002\u5e94\u5b9a\u65f6\u7ebf\u7a0b\u6c60\u5b9a\u65f6\u4efb\u52a1(\u51cf\u5c11\u6216\u8005\u589e\u52a0\u7ebf\u7a0b\u6570)"}),"\n",(0,r.jsx)(n.li,{children:"\u62c9\u53d6\u6d88\u606f\u670d\u52a1\u542f\u52a8"}),"\n",(0,r.jsx)(n.li,{children:"\u8d1f\u8f7d\u5747\u8861\u670d\u52a1\u542f\u52a8"}),"\n",(0,r.jsx)(n.li,{children:"\u63a8\u9001\u6d88\u606f\u670d\u52a1\u542f\u52a8"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"3-\u6d88\u606f\u7684\u53d1\u9001",children:"3. \u6d88\u606f\u7684\u53d1\u9001"}),"\n",(0,r.jsx)(n.p,{children:"\u901a\u8fc7\u4e0a\u9762\u7684\u53d1\u9001\u4ee3\u7801\u770b\u51fa\u6765\u4e3b\u8981\u662f\u8c03\u7528send\u6d88\u606f\uff0c\u6700\u540e\u662f\u901a\u8fc7\u5b9e\u73b0DefaultMQProducerImpl.sendDefaultImpl\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"TopicPublishInfo topicPublishInfo = this.tryToFindTopicPublishInfo(msg.getTopic());\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u9996\u5148\u83b7\u53d6\u53d1\u9001\u6d88\u606f\u7684Topic\u7684\u8def\u7531\u4fe1\u606f\u3002\u6839\u636e\u8def\u7531\u4fe1\u606f\u53d1\u9001\u6570\u636eMessage"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"MessageQueue mqSelected = this.selectOneMessageQueue(topicPublishInfo, lastBrokerName);\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u7136\u540e\u9009\u62e9\u4e00\u4e2atopic\u5bf9\u5e94\u7684\u4e00\u4e2aMessageQueue\u961f\u5217\u53d1\u9001\u3002\u4e0b\u9762\u6765\u5206\u6790 selectOneMessageQueue \u6765\u770b\u4e00\u4e0b\u53d1\u9001\u8fc7\u7a0b\u4e2d\u7684\u8d1f\u8f7d\u5747\u8861\u3002DefaultMQProducerImpl.selectOneMessageQueue"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"    public MessageQueue selectOneMessageQueue(final TopicPublishInfo tpInfo, final String lastBrokerName) {\n        return this.mqFaultStrategy.selectOneMessageQueue(tpInfo, lastBrokerName);\n    }\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u5b9e\u73b0\u9009\u62e9\u4e00\u4e2a\u6d88\u606f\u961f\u5217\u8fdb\u884c\u53d1\u9001\u6709MQFaultStrategy\u7c7b\u4e2d\u7684selectOneMessageQueue\u65b9\u6cd5\u6765\u5b9e\u73b0\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'public MessageQueue selectOneMessageQueue(final TopicPublishInfo tpInfo, final String lastBrokerName) {\n        if (this.sendLatencyFaultEnable) {\n            try {\n                int index = tpInfo.getSendWhichQueue().getAndIncrement();\n                for (int i = 0; i < tpInfo.getMessageQueueList().size(); i++) {\n                    int pos = Math.abs(index++) % tpInfo.getMessageQueueList().size();\n                    if (pos < 0)\n                        pos = 0;\n                    MessageQueue mq = tpInfo.getMessageQueueList().get(pos);\n                    if (latencyFaultTolerance.isAvailable(mq.getBrokerName())) {\n                        if (null == lastBrokerName || mq.getBrokerName().equals(lastBrokerName))\n                            return mq;\n                    }\n                }\n\n                final String notBestBroker = latencyFaultTolerance.pickOneAtLeast();\n                int writeQueueNums = tpInfo.getQueueIdByBroker(notBestBroker);\n                if (writeQueueNums > 0) {\n                    final MessageQueue mq = tpInfo.selectOneMessageQueue();\n                    if (notBestBroker != null) {\n                        mq.setBrokerName(notBestBroker);\n                        mq.setQueueId(tpInfo.getSendWhichQueue().getAndIncrement() % writeQueueNums);\n                    }\n                    return mq;\n                } else {\n                    latencyFaultTolerance.remove(notBestBroker);\n                }\n            } catch (Exception e) {\n                log.error("Error occurred when selecting message queue", e);\n            }\n\n            return tpInfo.selectOneMessageQueue();\n        }\n\n        return tpInfo.selectOneMessageQueue(lastBrokerName);\n    }\n'})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"\u6211\u662f\u8682\u8681\u80cc\u5927\u8c61\uff0c\u6587\u7ae0\u5bf9\u4f60\u6709\u5e2e\u52a9\u70b9\u8d5e\u5173\u6ce8\u6211\uff0c\u6587\u7ae0\u6709\u4e0d\u6b63\u786e\u7684\u5730\u65b9\u8bf7\u60a8\u65a7\u6b63\u7559\u8a00\u8bc4\u8bba~\u8c22\u8c22"}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var r=t(6540);const s={},c=r.createContext(s);function a(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);