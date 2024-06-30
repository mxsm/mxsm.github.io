"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[6763],{6004:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>i,default:()=>a,frontMatter:()=>c,metadata:()=>t,toc:()=>u});var r=n(4848),l=n(8453);const c={title:"MQPushConsumer\u6e90\u7801\u5206\u6790-\u6d88\u606f\u62c9\u53d6",linkTitle:"MQPushConsumer\u6e90\u7801\u5206\u6790-\u6d88\u606f\u62c9\u53d6",sidebar_position:202303092156,description:"MQPushConsumer\u6e90\u7801\u5206\u6790\u6d88\u8d39\u8005\u6d88\u606f\u62c9\u53d6"},i=void 0,t={id:"rocketmq/rocketmq5/client/consumer/MQPushConsumer/MQPushCousumer-pullmessage",title:"MQPushConsumer\u6e90\u7801\u5206\u6790-\u6d88\u606f\u62c9\u53d6",description:"MQPushConsumer\u6e90\u7801\u5206\u6790\u6d88\u8d39\u8005\u6d88\u606f\u62c9\u53d6",source:"@site/docs/rocketmq/rocketmq5/03-client/02-consumer/01-MQPushConsumer/02-MQPushCousumer-pullmessage.md",sourceDirName:"rocketmq/rocketmq5/03-client/02-consumer/01-MQPushConsumer",slug:"/rocketmq/rocketmq5/client/consumer/MQPushConsumer/MQPushCousumer-pullmessage",permalink:"/docs/rocketmq/rocketmq5/client/consumer/MQPushConsumer/MQPushCousumer-pullmessage",draft:!1,unlisted:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/rocketmq/rocketmq5/03-client/02-consumer/01-MQPushConsumer/02-MQPushCousumer-pullmessage.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1719738085e3,sidebarPosition:202303092156,frontMatter:{title:"MQPushConsumer\u6e90\u7801\u5206\u6790-\u6d88\u606f\u62c9\u53d6",linkTitle:"MQPushConsumer\u6e90\u7801\u5206\u6790-\u6d88\u606f\u62c9\u53d6",sidebar_position:202303092156,description:"MQPushConsumer\u6e90\u7801\u5206\u6790\u6d88\u8d39\u8005\u6d88\u606f\u62c9\u53d6"},sidebar:"rocketmq5",previous:{title:"MQPushConsumer\u6e90\u7801\u5206\u6790",permalink:"/docs/rocketmq/rocketmq5/client/consumer/MQPushConsumer/MQPushConsumer-source"},next:{title:"RocketMQ5.0 Controller DLedger\u6a21\u5f0f",permalink:"/docs/rocketmq/rocketmq5/client/dledger-controller"}},o={},u=[{value:"1. \u6d88\u606f\u62c9\u53d6\u4f55\u65f6\u542f\u52a8",id:"1-\u6d88\u606f\u62c9\u53d6\u4f55\u65f6\u542f\u52a8",level:2},{value:"2. \u6d88\u606f\u5982\u4f55\u62c9\u53d6",id:"2-\u6d88\u606f\u5982\u4f55\u62c9\u53d6",level:2},{value:"3. Broker\u5982\u4f55\u5904\u7406\u6d88\u606f\u62c9\u53d6\u8bf7\u6c42",id:"3-broker\u5982\u4f55\u5904\u7406\u6d88\u606f\u62c9\u53d6\u8bf7\u6c42",level:2}];function d(e){const s={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.p,{children:"\u6d88\u8d39\u8005\u542f\u52a8\u540e\u5c31\u662f\u5f00\u59cb\u8981\u5bf9\u6d88\u606f\u8fdb\u884c\u6d88\u8d39\uff0c\u5728\u6d88\u8d39\u4e4b\u524d\u6d88\u606f\u662f\u5982\u4f55\u4eceBroker\u4e2d\u88ab\u62c9\u53d6\u5230\u672c\u5730\u7684\uff0c\u63a5\u4e0b\u6765\u5206\u4e00\u4e0b\u62c9\u53d6\u7684\u6574\u4e2a\u8fc7\u7a0b\u548c\u62c9\u53d6\u8fc7\u7a0b\u4e2d\u7684"}),"\n",(0,r.jsx)(s.h2,{id:"1-\u6d88\u606f\u62c9\u53d6\u4f55\u65f6\u542f\u52a8",children:"1. \u6d88\u606f\u62c9\u53d6\u4f55\u65f6\u542f\u52a8"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"DefaultMQPushConsumerImpl#start"})," \u542f\u52a8\u65b9\u6cd5\u91cc\u9762\u6709\u4e00\u4e2a",(0,r.jsx)(s.code,{children:"MQClientInstance#start"})," \u7684\u542f\u52a8\uff0c\u4ece\u8fd9\u4e2a\u65b9\u6cd5\u91cc\u9762\u53ef\u4ee5\u770b\u5230\uff1a"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-java",children:"public void start() throws MQClientException {\n\n    synchronized (this) {\n        switch (this.serviceState) {\n            case CREATE_JUST:\n\t\t\t\t//\u5220\u9664\u4e86\u90e8\u5206\u4ee3\u7801\n                // Start pull service\n                this.pullMessageService.start();\n                break;\n            default:\n                break;\n        }\n    }\n}\n"})}),"\n",(0,r.jsxs)(s.p,{children:["\u8fd9\u91cc\u6709\u4e00\u4e2a",(0,r.jsx)(s.code,{children:"PullMessageService"}),"\u7c7b\u7684\u5b9e\u4f8b\uff0c \u8fd9\u4e2a\u5b9e\u4f8b\u5c31\u662f\u4e00\u4e2a\u7528\u4e8e\u4ece\u62c9\u53d6Broker\u7684\u6d88\u606f\u3002"]}),"\n",(0,r.jsxs)(s.p,{children:["\u5206\u6790",(0,r.jsx)(s.code,{children:"PullMessageService"}),"\u7c7b\u53ef\u4ee5\u53d1\u73b0\u5b9e\u73b0\u4e86",(0,r.jsx)(s.code,{children:"ServiceThread"}),"\uff0c\u90a3\u4e48\u53ef\u4ee5\u77e5\u9053",(0,r.jsx)(s.code,{children:"PullMessageService"}),"\u662f\u4e00\u4e2a\u7ebf\u7a0b\u3002\u4e86\u89e3\u5230\u8fd9\u4e2a\u540e\u6211\u4eec\u5206\u6790\u4e00\u4e0brun\u65b9\u6cd5\uff1a"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-java",children:'@Override\npublic void run() {\n    while (!this.isStopped()) {\n        try {\n            MessageRequest messageRequest = this.messageRequestQueue.take();\n            if (messageRequest.getMessageRequestMode() == MessageRequestMode.POP) {\n                this.popMessage((PopRequest) messageRequest);\n            } else {\n                this.pullMessage((PullRequest) messageRequest);\n            }\n        } catch (InterruptedException ignored) {\n        } catch (Exception e) {\n            logger.error("Pull Message Service Run Method exception", e);\n        }\n    }\n}\n'})}),"\n",(0,r.jsxs)(s.p,{children:["\u4ece\u8fd9\u91cc\u53ef\u4ee5\u770b\u51fa\u7ebf\u7a0b\u4e0d\u65ad\u7684\u4ece\u963b\u585e\u961f\u5217",(0,r.jsx)(s.code,{children:"messageRequestQueue"}),"\u4e2d\u83b7\u53d6\u5b9e\u73b0\u4e86",(0,r.jsx)(s.code,{children:"MessageRequest"})," \u63a5\u53e3\u7684\u8bf7\u6c42\u3002\u4ece\u4e0a\u9762\u53ef\u4ee5\u77e5\u9053\u6d88\u606f\u62c9\u53d6\u8bf7\u6c42\u6709\u4e24\u79cd\uff1a"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.strong,{children:"PopRequest"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.strong,{children:"PullRequest"})}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["\u5230\u8fd9\u91cc\u6211\u4eec\u5df2\u7ecf\u4e86\u89e3\u4e86",(0,r.jsx)(s.code,{children:"PullMessageService"})," \u662f\u8d1f\u8d23\u5904\u7406\u62c9\u53d6\u8bf7\u6c42\u3002\u5728\u542f\u52a8\u7684\u65f6\u5019",(0,r.jsx)(s.code,{children:"messageRequestQueue"})," \u963b\u585e\u961f\u5217\u4e2d\u5e94\u8be5\u662f\u7a7a\u7684\u90a3\u4e48\u963b\u585e\u961f\u5217\u7684\u6570\u636e\u662f\u4f55\u65f6\u653e\u5165\u8fdb\u53bb\u7684\u3002"]}),"\n",(0,r.jsxs)(s.p,{children:["\u5728",(0,r.jsx)(s.code,{children:"MQClientInstance#start"}),"\u7684\u65f6\u5019\u6709\u4e00\u4e2a ",(0,r.jsx)(s.code,{children:"RebalanceService#start"})," \u65b9\u6cd5\uff0cRebalanceService\u4e5f\u662f\u5b9e\u73b0ServiceThread\u6240\u4ee5\u8bf4\u767d\u4e86\u4e5f\u662f\u4e00\u4e2a\u7ebf\u7a0b\u3002\u4ece\u540d\u79f0\u53ef\u4ee5\u770b\u51fa\u6765\u8fd9\u4e2a\u7ebf\u7a0b\u6c60\u4e3b\u8981\u8d1f\u8d23\u8d1f\u8f7d\u5747\u8861\u3002"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-java",children:"    @Override\n    public void run() {\n        while (!this.isStopped()) {\n            this.waitForRunning(waitInterval);\n            this.mqClientFactory.doRebalance();\n        }\n    }\n"})}),"\n",(0,r.jsxs)(s.p,{children:["\u8d1f\u8f7d\u5747\u8861\u4e3b\u8981\u662f\u901a\u8fc7",(0,r.jsx)(s.code,{children:"MQClientInstance#doRebalance"})," \u5b9e\u73b0\u3002"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-java",children:"    public void doRebalance() {\n        for (Map.Entry<String, MQConsumerInner> entry : this.consumerTable.entrySet()) {\n            MQConsumerInner impl = entry.getValue();\n            if (impl != null) {\n                try {\n                    impl.doRebalance();\n                } catch (Throwable e) {\n                    \n                }\n            }\n        }\n    }\n"})}),"\n",(0,r.jsx)(s.p,{children:"\u4ece\u6d88\u8d39\u6620\u5c04\u8868\u4e2d\u83b7\u53d6\u5b9e\u73b0\u4e86MQConsumerInner\u63a5\u53e3\u7684\u7c7b\u3002\u8fd9\u4e2a\u5b9e\u73b0\u6709\u4e09\u4e2a\uff1a"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.strong,{children:"DefaultLitePullConsumerImpl"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.strong,{children:"DefaultMQPullConsumerImpl(\u6807\u8bb0\u5df2\u7ecf\u8fc7\u671f)"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.strong,{children:"DefaultMQPushConsumerImpl"})}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["\u4ee5DefaultMQPushConsumerImpl\u4e3a\u4f8b\u5b50\uff0c\u901a\u8fc7\u5206\u6790\u4ee3\u7801\u53ef\u4ee5\u77e5\u9053\u6700\u7ec8\u8c03\u7528\u7684\u662f ",(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"RebalanceImpl#rebalanceByTopic"})})," \u7684\u65b9\u6cd5\uff0c\u8fd9\u91cc\u5904\u7406\u4e24\u79cd\u6a21\u5f0f\u5206\u522b\u662f\uff1a"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.strong,{children:"BROADCASTING"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.strong,{children:"CLUSTERING"})}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"RebalanceImpl#rebalanceByTopic"})})," \u8fd9\u4e2a\u65b9\u6cd5\u91cc\u9762\u5305\u542b\u4e86\u5206\u914d\u6d88\u606f\u961f\u5217\u7684\u7b56\u7565\uff0c \u7136\u540e\u8c03\u7528 ",(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"RebalanceImpl#updateProcessQueueTableInRebalance"})})]}),"\n",(0,r.jsxs)(s.p,{children:["\u521b\u5efa ",(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"PullRequest"})})," \u5217\u8868\uff0c\u6700\u7ec8\u8c03\u7528",(0,r.jsx)(s.code,{children:"RebalanceImpl#dispatchPullRequest"}),"\u62bd\u8c61\u65b9\u6cd5\u3002 \u8fd9\u4e2a\u6839\u636e\u5177\u4f53\u7684\u5b9e\u73b0\u6765\u5904\u7406\u3002"]}),"\n",(0,r.jsx)(s.h2,{id:"2-\u6d88\u606f\u5982\u4f55\u62c9\u53d6",children:"2. \u6d88\u606f\u5982\u4f55\u62c9\u53d6"}),"\n",(0,r.jsxs)(s.p,{children:["\u6d88\u606f\u7684\u62c9\u53d6\u8bf7\u6c42 ",(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"PullRequest"})})," \u4f1a\u63d2\u5165**",(0,r.jsx)(s.code,{children:"PullMessageService.messageRequestQueue"}),"** \u7684\u963b\u585e\u961f\u5217\u4e2d\u3002\u7136\u540e**",(0,r.jsx)(s.code,{children:"PullMessageService"}),"** \u670d\u52a1\u4f1a\u4ece\u4e2d\u83b7\u53d6\u8bf7\u6c42\u3002"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-java",children:"@Override\npublic void run() {\n    while (!this.isStopped()) {\n        try {\n            //\u7701\u7565\u90e8\u5206\u65e0\u5173\u7d27\u8981\u7684\u4ee3\u7801\n            MessageRequest messageRequest = this.messageRequestQueue.take();\n            if (messageRequest.getMessageRequestMode() == MessageRequestMode.POP) {\n                this.popMessage((PopRequest) messageRequest);\n            } else {\n                this.pullMessage((PullRequest) messageRequest);\n            }\n        } catch (InterruptedException ignored) {\n        } catch (Exception e) {\n        }\n    }\n}\n"})}),"\n",(0,r.jsxs)(s.p,{children:["\u901a\u8fc7\u8ddf\u8e2a\u4ee3\u7801\u53ef\u4ee5\u53d1\u73b0\u6700\u7ec8\u662f\u8c03\u7528\u4e86 ",(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"DefaultMQPushConsumerImpl#pullMessage"})})," \u62c9\u53d6\u6d88\u606f\u3002\u6b65\u9aa4\u5982\u4e0b\uff1a"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"\u786e\u5b9aDefaultMQPushConsumerImpl\u670d\u52a1\u7684\u72b6\u6001\uff0c\u5982\u679c\u662f\u4e0d\u6b63\u5e38\u7684\u72b6\u6001\u5c31\u5c06\u8bf7\u6c42\u91cd\u65b0\u653e\u5165\u8bf7\u6c42\u961f\u5217"}),"\n",(0,r.jsx)(s.li,{children:"DefaultMQPushConsumerImpl\u6682\u505c\u7684\u60c5\u51b5\u4e0b\uff0c\u5c06\u8bf7\u6c42\u653e\u5165\u8bf7\u6c42\u961f\u5217"}),"\n",(0,r.jsx)(s.li,{children:"\u5224\u65ad\u672c\u5730\u7f13\u5b58\u7684\u6d88\u606f\u6570\u91cf\u548c\u6d88\u606f\u5927\u5c0f\uff0c\u5982\u679c\u6570\u91cf\u8d85\u8fc71000\u6761(\u9ed8\u8ba4\u503c)\u548c\u7f13\u5b58\u7684\u6d88\u606f\u5927\u5c0f\u8d85\u8fc7100M\uff0c\u7b49\u5f85\u6d88\u8d39\u8005\u5904\u7406\u5b8c\u90e8\u5206\u6d88\u606f\u540e\u62c9\u53d6\uff0c\u6b64\u65f6\u4e5f\u4f1a\u5c06\u8bf7\u6c42\u653e\u5165\u963b\u585e\u961f\u5217"}),"\n",(0,r.jsxs)(s.li,{children:["\u521b\u5efa\u4e00\u4e2a\u56de\u8c03\u51fd\u6570\uff0c\u53d1\u9001\u4e00\u4e2a\u8bf7\u6c42\u7f16\u7801\u4e3a ",(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"LITE_PULL_MESSAGE"})})," \u6216\u8005 ",(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"PULL_MESSAGE"})})," \u7684\u5230Broker\u3002"]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"3-broker\u5982\u4f55\u5904\u7406\u6d88\u606f\u62c9\u53d6\u8bf7\u6c42",children:"3. Broker\u5982\u4f55\u5904\u7406\u6d88\u606f\u62c9\u53d6\u8bf7\u6c42"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"PullMessageProcessor"})})," \u5904\u7406\u5668\u7528\u6765\u5904\u7406**",(0,r.jsx)(s.code,{children:"LITE_PULL_MESSAGE"}),"** \u548c ",(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"PULL_MESSAGE"})})," \u4e24\u7c7b\u8bf7\u6c42\u7f16\u7801\u7684\u8bf7\u6c42\u3002\u4ece\u8bf7\u6c42\u6570\u636e\u4e2d\u89e3\u6790\u51fa\u6765\u8bf7\u6c42\u5934\uff1a"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\u5224\u65ad\u5f53\u524d\u7684Broker\u662f\u5426\u5177\u6709\u8bfb\u7684\u6743\u9650\uff0c\u5982\u679c\u6ca1\u6709\u8fd4\u56de ",(0,r.jsx)(s.strong,{children:"ResponseCode.NO_PERMISSION"})]}),"\n",(0,r.jsx)(s.li,{children:"\u5224\u65ad\u662f\u5426\u652f\u6301 LITE_PULL_MESSAGE\uff0c\u8fd9\u4e2a\u662f\u914d\u7f6e\u5728\u914d\u7f6e\u6587\u4ef6\u4e2d\u7684litePullMessageEnable\u5b57\u6bb5\uff0c\u9ed8\u8ba4\u4e3atrue"}),"\n",(0,r.jsxs)(s.li,{children:["\u4ece\u8ba2\u9605\u7ba1\u7406\u4e2d\u83b7\u53d6\u6d88\u8d39\u8005\u7ec4\u5bf9\u5e94SubscriptionGroupConfig\u914d\u7f6e\uff0c\u5bf9\u4e8e\u5185\u7f6e\u7684\u4e00\u4e9bTopic\u5728Broker\u542f\u52a8\u7684\u65f6\u5019\u5df2\u7ecf\u8bbe\u7f6e\u8fdb\u53bb\u4e86\uff0c\u5bf9\u4e8e\u65b0\u7684\u6d88\u8d39\u8005\u7ec4\u4f1a\u6839\u636e ",(0,r.jsx)(s.strong,{children:"SubscriptionGroupManager#findSubscriptionGroupConfig"})," \u8fd9\u4e2a\u65b9\u6cd5\u7684\u903b\u8f91\u8fdb\u884c\u5904\u7406\uff0c \u5f53\u5224\u65ad\u4e0d\u5141\u8bb8\u6d88\u8d39\u7684\u65f6\u5019\u8fd4\u56de ",(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"ResponseCode.NO_PERMISSION"})})," \u7ed9\u5ba2\u6237\u7aef\u3002"]}),"\n",(0,r.jsxs)(s.li,{children:["\u4ece",(0,r.jsx)(s.strong,{children:"TopicConfigManager"})," \u4e2d\u83b7\u53d6\u6d88\u8d39Topic\u5bf9\u5e94\u7684\u914d\u7f6e\uff0c\u7136\u540e\u5224\u65ad\u662f\u5426\u6709\u5bf9Topic\u7684\u8bfb\u6743\u9650\uff0c\u5982\u679c\u6ca1\u6709\u8fd4\u56de"]}),"\n"]})]})}function a(e={}){const{wrapper:s}={...(0,l.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>t});var r=n(6540);const l={},c=r.createContext(l);function i(e){const s=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function t(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),r.createElement(c.Provider,{value:s},e.children)}}}]);