"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[9938],{8758:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>a,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var t=n(5893),s=n(1151);const i={title:"RocketMQ\u6e90\u7801\u89e3\u6790-NameServer\u542f\u52a8",date:new Date("2020-03-11T00:00:00.000Z"),weight:202105122202},o=void 0,l={id:"rocketmq/rocketmq4/nameserver/RocketMQ-analysis-NameServer-start",title:"RocketMQ\u6e90\u7801\u89e3\u6790-NameServer\u542f\u52a8",description:"\u4ee5\u4e0b\u6e90\u7801\u57fa\u4e8eRocket MQ 4.7.0",source:"@site/docs/rocketmq/rocketmq4/nameserver/RocketMQ-analysis-NameServer-start.md",sourceDirName:"rocketmq/rocketmq4/nameserver",slug:"/rocketmq/rocketmq4/nameserver/RocketMQ-analysis-NameServer-start",permalink:"/docs/rocketmq/rocketmq4/nameserver/RocketMQ-analysis-NameServer-start",draft:!1,unlisted:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/rocketmq/rocketmq4/nameserver/RocketMQ-analysis-NameServer-start.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1706451902,formattedLastUpdatedAt:"Jan 28, 2024",frontMatter:{title:"RocketMQ\u6e90\u7801\u89e3\u6790-NameServer\u542f\u52a8",date:"2020-03-11T00:00:00.000Z",weight:202105122202},sidebar:"rocketmq4",previous:{title:"NameServer",permalink:"/docs/rocketmq/rocketmq4/nameserver/"},next:{title:"RocketMQ\u6e90\u7801\u89e3\u6790-NameServer\u5bf9Broker\u7684\u7ba1\u7406",permalink:"/docs/rocketmq/rocketmq4/nameserver/RocketMQ-analysis-broker-manage"}},a={},c=[{value:"1. NameServer",id:"1-nameserver",level:3},{value:"2. \u6e90\u7801\u5206\u6790",id:"2-\u6e90\u7801\u5206\u6790",level:3},{value:"2.1 Remoting\u901a\u4fe1\u7c7b\u7ed3\u6784",id:"21-remoting\u901a\u4fe1\u7c7b\u7ed3\u6784",level:4},{value:"2.2 NameServer \u542f\u52a8",id:"22-nameserver-\u542f\u52a8",level:4},{value:"2.3 NamesrvController\u521d\u59cb\u5316",id:"23-namesrvcontroller\u521d\u59cb\u5316",level:4},{value:"2.4 NamesrvController.initialize",id:"24-namesrvcontrollerinitialize",level:4},{value:"2.5 NamesrvController.registerProcessor",id:"25-namesrvcontrollerregisterprocessor",level:4},{value:"2.6 DefaultRequestProcessor",id:"26-defaultrequestprocessor",level:4},{value:"2.7 RouteInfoManager",id:"27-routeinfomanager",level:4},{value:"topicQueueTable",id:"topicqueuetable",level:5},{value:"brokerAddrTable",id:"brokeraddrtable",level:5},{value:"clusterAddrTable",id:"clusteraddrtable",level:5},{value:"brokerLiveTable",id:"brokerlivetable",level:5},{value:"filterServerTable",id:"filterservertable",level:5},{value:"2.8 NamesrvController.start",id:"28-namesrvcontrollerstart",level:4},{value:"3. \u603b\u7ed3",id:"3-\u603b\u7ed3",level:3}];function d(e){const r={blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",h5:"h5",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsx)(r.p,{children:"\u4ee5\u4e0b\u6e90\u7801\u57fa\u4e8eRocket MQ 4.7.0"}),"\n"]}),"\n",(0,t.jsx)(r.h3,{id:"1-nameserver",children:"1. NameServer"}),"\n",(0,t.jsx)(r.p,{children:"NameServer\u662f\u4e00\u4e2a\u975e\u5e38\u7b80\u5355\u7684Topic\u8def\u7531\u6ce8\u518c\u4e2d\u5fc3\uff0c\u5176\u89d2\u8272\u7c7b\u4f3cDubbo\u4e2d\u7684zookeeper\uff0c\u652f\u6301Broker\u7684\u52a8\u6001\u6ce8\u518c\u4e0e\u53d1\u73b0\u3002\u4e3b\u8981\u5305\u62ec\u4e24\u4e2a\u529f\u80fd\uff1a"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"Broker\u7ba1\u7406\uff0cNameServer\u63a5\u53d7Broker\u96c6\u7fa4\u7684\u6ce8\u518c\u4fe1\u606f\u5e76\u4e14\u4fdd\u5b58\u4e0b\u6765\u4f5c\u4e3a\u8def\u7531\u4fe1\u606f\u7684\u57fa\u672c\u6570\u636e\u3002\u7136\u540e\u63d0\u4f9b\u5fc3\u8df3\u68c0\u6d4b\u673a\u5236\uff0c\u68c0\u67e5Broker\u662f\u5426\u8fd8\u5b58\u6d3b(\u4ee3\u7801\u4e2d\u901a\u8fc7\u5b9a\u65f6\u626b\u63cfBrokerLiveInfo\u7684\u4fe1\u606f\u6765\u7ba1\u7406)\uff1b"}),"\n",(0,t.jsx)(r.li,{children:"\u8def\u7531\u4fe1\u606f\u7ba1\u7406\uff0c\u6bcf\u4e2aNameServer\u5c06\u4fdd\u5b58\u5173\u4e8eBroker\u96c6\u7fa4\u7684\u6574\u4e2a\u8def\u7531\u4fe1\u606f\u548c\u7528\u4e8e\u5ba2\u6237\u7aef\u67e5\u8be2\u7684\u961f\u5217\u4fe1\u606f\u3002\u7136\u540eProducer\u548cConumser\u901a\u8fc7NameServer\u5c31\u53ef\u4ee5\u77e5\u9053\u6574\u4e2aBroker\u96c6\u7fa4\u7684\u8def\u7531\u4fe1\u606f\uff0c\u4ece\u800c\u8fdb\u884c\u6d88\u606f\u7684\u6295\u9012\u548c\u6d88\u8d39\u3002"}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.img,{src:"https://github.com/mxsm/document/blob/master/image/MQ/RocketMQ/NameServer%E7%9A%84%E5%8A%9F%E8%83%BD.png?raw=true",alt:""})}),"\n",(0,t.jsx)(r.p,{children:"NameServer\u901a\u5e38\u4e5f\u662f\u96c6\u7fa4\u7684\u65b9\u5f0f\u90e8\u7f72\uff0c\u5404\u5b9e\u4f8b\u95f4\u76f8\u4e92\u4e0d\u8fdb\u884c\u4fe1\u606f\u901a\u8baf\u3002Broker\u662f\u5411\u6bcf\u4e00\u53f0NameServer\u6ce8\u518c\u81ea\u5df1\u7684\u8def\u7531\u4fe1\u606f\uff0c\u6240\u4ee5\u6bcf\u4e00\u4e2aNameServer\u5b9e\u4f8b\u4e0a\u9762\u90fd\u4fdd\u5b58\u4e00\u4efd\u5b8c\u6574\u7684\u8def\u7531\u4fe1\u606f\u3002\u5f53\u67d0\u4e2aNameServer\u56e0\u67d0\u79cd\u539f\u56e0\u4e0b\u7ebf\u4e86\uff0cBroker\u4ecd\u7136\u53ef\u4ee5\u5411\u5176\u5b83NameServer\u540c\u6b65\u5176\u8def\u7531\u4fe1\u606f\uff0cProducer,Consumer\u4ecd\u7136\u53ef\u4ee5\u52a8\u6001\u611f\u77e5Broker\u7684\u8def\u7531\u7684\u4fe1\u606f\u3002"}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsx)(r.p,{children:"NameServer\u5404\u4e2a\u5b9e\u4f8b\u4e4b\u95f4\u4e92\u4e0d\u901a\u8baf"}),"\n"]}),"\n",(0,t.jsx)(r.h3,{id:"2-\u6e90\u7801\u5206\u6790",children:"2. \u6e90\u7801\u5206\u6790"}),"\n",(0,t.jsx)(r.h4,{id:"21-remoting\u901a\u4fe1\u7c7b\u7ed3\u6784",children:"2.1 Remoting\u901a\u4fe1\u7c7b\u7ed3\u6784"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.img,{src:"https://github.com/mxsm/document/blob/master/image/MQ/RocketMQ/RemotingService.png?raw=true",alt:""})}),"\n",(0,t.jsx)(r.h4,{id:"22-nameserver-\u542f\u52a8",children:"2.2 NameServer \u542f\u52a8"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"org.apache.rocketmq.namesrv.NamesrvStartup"})," \u662fNameServer\u7684\u542f\u52a8\u7c7b"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-java",children:'    public static void main(String[] args) {\n        main0(args);\n    }\n\n     public static NamesrvController main0(String[] args) {\n\n        try {\n            NamesrvController controller = createNamesrvController(args);\n            start(controller);\n            String tip = "The Name Server boot success. serializeType=" + RemotingCommand.getSerializeTypeConfigInThisServer();\n            log.info(tip);\n            System.out.printf("%s%n", tip);\n            return controller;\n        } catch (Throwable e) {\n            e.printStackTrace();\n            System.exit(-1);\n        }\n\n        return null;\n    }\n'})}),"\n",(0,t.jsxs)(r.p,{children:["\u901a\u8fc7 ",(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"createNamesrvController"})})," \u521b\u5efa ",(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"NamesrvController"})})]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.img,{src:"https://github.com/mxsm/document/blob/master/image/MQ/RocketMQ/createNamesrvController.png?raw=true",alt:""})}),"\n",(0,t.jsx)(r.p,{children:"NameServer \u542f\u52a8\u65f6\u9996\u5148\u5224\u65ad\u662f\u5426\u4f20\u5165\u4e86\u547d\u4ee4\u884c\u53c2\u6570\u3002\u4ece\u4ee3\u7801\u53ef\u4ee5\u770b\u5230\u6709\u4e24\u4e2a\u53c2\u6570\uff1a"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"-c\u53ef\u4ee5\u6307\u5b9a NameServer \u7684\u914d\u7f6e\u6587\u4ef6\uff0c\u5982\u679c\u4e0d\u6307\u5b9a\uff0c\u5219\u4f7f\u7528\u9ed8\u8ba4\u503c"}),"\n",(0,t.jsx)(r.li,{children:"-p \u6253\u5370 NameServer \u7684\u914d\u7f6e\u53c2\u6570\u4fe1\u606f\u3002\u6253\u5370\u5b8c\u53c2\u6570\u540e\u9000\u51fa\u8fdb\u7a0b"}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:"\u4e0b\u9762\u5c31\u662f\u6253\u5370\u7684\u914d\u7f6e\u53c2\u6570"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-shell",children:"22:06:51.794 [main] INFO  RocketmqNamesrvConsole - rocketmqHome=D:\\dev\\gitproject\\rocketmq\\distribution\n22:06:51.857 [main] INFO  RocketmqNamesrvConsole - kvConfigPath=C:\\Users\\mxsm\\namesrv\\kvConfig.json\n22:06:51.858 [main] INFO  RocketmqNamesrvConsole - configStorePath=C:\\Users\\mxsm\\namesrv\\namesrv.properties\n22:06:51.858 [main] INFO  RocketmqNamesrvConsole - productEnvName=center\n22:06:51.859 [main] INFO  RocketmqNamesrvConsole - clusterTest=false\n22:06:51.859 [main] INFO  RocketmqNamesrvConsole - orderMessageEnable=false\n22:06:51.860 [main] INFO  RocketmqNamesrvConsole - listenPort=9876\n22:06:51.862 [main] INFO  RocketmqNamesrvConsole - serverWorkerThreads=8\n22:06:51.864 [main] INFO  RocketmqNamesrvConsole - serverCallbackExecutorThreads=0\n22:06:51.864 [main] INFO  RocketmqNamesrvConsole - serverSelectorThreads=3\n22:06:51.864 [main] INFO  RocketmqNamesrvConsole - serverOnewaySemaphoreValue=256\n22:06:51.865 [main] INFO  RocketmqNamesrvConsole - serverAsyncSemaphoreValue=64\n22:06:51.865 [main] INFO  RocketmqNamesrvConsole - serverChannelMaxIdleTimeSeconds=120\n22:06:51.865 [main] INFO  RocketmqNamesrvConsole - serverSocketSndBufSize=65535\n22:06:51.865 [main] INFO  RocketmqNamesrvConsole - serverSocketRcvBufSize=65535\n22:06:51.865 [main] INFO  RocketmqNamesrvConsole - serverPooledByteBufAllocatorEnable=true\n22:06:51.865 [main] INFO  RocketmqNamesrvConsole - useEpollNativeSelector=false\n"})}),"\n",(0,t.jsxs)(r.p,{children:["\u4e0b\u9762\u7684\u4ee3\u7801\u5c31\u662f\u5728 ",(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"createNamesrvController"})}),"  \u4e2d\u521b\u5efa ",(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"NamesrvController"})})]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-java",children:"final NamesrvController controller = new NamesrvController(namesrvConfig, nettyServerConfig);\n\n// remember all configs to prevent discard\ncontroller.getConfiguration().registerConfig(properties);\n"})}),"\n",(0,t.jsx)(r.h4,{id:"23-namesrvcontroller\u521d\u59cb\u5316",children:"2.3 NamesrvController\u521d\u59cb\u5316"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.img,{src:"https://github.com/mxsm/document/blob/master/image/MQ/RocketMQ/NamesrvControllerStart.png?raw=true",alt:""})}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"NamesrvStartup.start"})})," \u4e3b\u8981\u521d\u59cb\u5316NamesrvController\u548c\u542f\u52a8"]}),"\n",(0,t.jsxs)(r.ol,{children:["\n",(0,t.jsx)(r.li,{children:"\u8c03\u7528NamesrvController.initialize\u65b9\u6cd5\u521d\u59cb\u5316"}),"\n",(0,t.jsx)(r.li,{children:"\u8c03\u7528NamesrvController.start\u65b9\u6cd5\u542f\u52a8"}),"\n"]}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsx)(r.p,{children:"\u5728\u4e0a\u56fe\u7684\u4ee3\u7801\u4e2d\u53ef\u4ee5\u770b\u5230\u8fd8\u6ce8\u518c\u4e86Hook\uff0c\u5982\u679c\u4f7f\u7528kill -9 \u7684\u65b9\u5f0f\u6740\u6b7b\u8fdb\u7a0b\u5c31\u4e0d\u4f1a\u6267\u884cHook\u4e2d\u7684\u4ee3\u7801"}),"\n"]}),"\n",(0,t.jsx)(r.h4,{id:"24-namesrvcontrollerinitialize",children:"2.4 NamesrvController.initialize"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-java",children:'    public boolean initialize() {\n\t\t//\u4ece${user.home}/namesrv/kvConfig.json\u52a0\u8f7d\u914d\u7f6eNameServer\u7684\u914d\u7f6e\n        this.kvConfigManager.load();  //1\n\t\t\n        //\u521b\u5efaNetty Server\n        this.remotingServer = new NettyRemotingServer(this.nettyServerConfig, this.brokerHousekeepingService); //2\n\t\t//\u521b\u5efa\u4e00\u4e2a\u56fa\u5b9a\u7ebf\u7a0b\u6c60\n        this.remotingExecutor =\n            Executors.newFixedThreadPool(nettyServerConfig.getServerWorkerThreads(), new ThreadFactoryImpl("RemotingExecutorThread_"));//3\n        \n\t\t////\u6ce8\u518cNameServer\u670d\u52a1\u63a5\u53d7\u8bf7\u6c42\u7684\u5904\u7406\u7c7b\n        this.registerProcessor(); //4\n\t\t\n        //\u5b9a\u65f6\u6e05\u7406\u5931\u6548\u7684Broker\n        this.scheduledExecutorService.scheduleAtFixedRate(new Runnable() {\n\n            @Override\n            public void run() {\n                NamesrvController.this.routeInfoManager.scanNotActiveBroker();\n            }\n        }, 5, 10, TimeUnit.SECONDS);  //5\n\n        //\u5b9a\u65f6\u6253\u5370NameServer\u914d\u7f6e\n        this.scheduledExecutorService.scheduleAtFixedRate(new Runnable() {\n\n            @Override\n            public void run() {\n                NamesrvController.this.kvConfigManager.printAllPeriodically();\n            }\n        }, 1, 10, TimeUnit.MINUTES); //6\n\n        //7\n        if (TlsSystemConfig.tlsMode != TlsMode.DISABLED) {\n          //................\n        }\n\n        return true;\n    }\n'})}),"\n",(0,t.jsxs)(r.ol,{children:["\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"\u4ece${user.home}/namesrv/kvConfig.json\u52a0\u8f7d\u914d\u7f6eNameServer\u7684\u914d\u7f6e"}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"\u521b\u5efaNettyServer\u6765\u63d0\u4f9b\u670d\u52a1"}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"\u521b\u5efaNettyServer\u6267\u884c\u4f7f\u7528\u7684\u7ebf\u7a0b\u6c60"}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"\u7ed9NettyServer\u6ce8\u5165\u8bf7\u6c42\u5904\u7406\u5668"}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"\u521b\u5efa\u4e00\u4e2a\u5b9a\u65f6\u6e05\u7406\u8d85\u65f6\u7684 Broker \u5b9a\u65f6\u4efb\u52a1"}),"\n",(0,t.jsx)(r.p,{children:"\u6bcf\u5341\u79d2\u949f\u626b\u63cf\u4e00\u4e0bBroker\u7684\u7a97\u53f0\uff0c\u5220\u96642\u5206\u949f\u6ca1\u6709\u66f4\u65b0\u72b6\u6001\u7684Broker,\u5173\u95ed\u5bf9\u5e94\u7684Netty\u7684Channel"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-java",children:'    public void scanNotActiveBroker() {\n        Iterator<Entry<String, BrokerLiveInfo>> it = this.brokerLiveTable.entrySet().iterator();\n        while (it.hasNext()) {\n            Entry<String, BrokerLiveInfo> next = it.next();\n            long last = next.getValue().getLastUpdateTimestamp();\n            if ((last + BROKER_CHANNEL_EXPIRED_TIME) < System.currentTimeMillis()) {\n                //\u5173\u95edChannel\n                RemotingUtil.closeChannel(next.getValue().getChannel());\n                it.remove();\n                log.warn("The broker channel expired, {} {}ms", next.getKey(), BROKER_CHANNEL_EXPIRED_TIME);\n                this.onChannelDestroy(next.getKey(), next.getValue().getChannel());\n            }\n        }\n    }\n'})}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"\u521b\u5efa\u4e00\u4e2a\u6253\u5370 NameServer \u914d\u7f6e\u7684\u5b9a\u65f6\u4efb\u52a1"}),"\n",(0,t.jsx)(r.p,{children:"\u6bcf\u969410\u5206\u949f\u6253\u5370\u4e00\u6b21NameServer\u7684\u914d\u7f6e\u53c2\u6570\u3002\u5373KVConfigManager.configTable\u53d8\u91cf\u7684\u5185\u5bb9\u3002"}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"SSL\u7684\u542f\u7528"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(r.h4,{id:"25-namesrvcontrollerregisterprocessor",children:"2.5 NamesrvController.registerProcessor"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-java",children:"//\u6ce8\u518c\u63a5\u6536\u8bf7\u6c42\u7684\u7c7b\nprivate void registerProcessor() {\n        if (namesrvConfig.isClusterTest()) {\n\n            this.remotingServer.registerDefaultProcessor(new ClusterTestRequestProcessor(this, namesrvConfig.getProductEnvName()),\n                this.remotingExecutor);\n        } else {\n\n            this.remotingServer.registerDefaultProcessor(new DefaultRequestProcessor(this), this.remotingExecutor);\n        }\n    }\n"})}),"\n",(0,t.jsxs)(r.p,{children:["\u9ed8\u8ba4\u6ce8\u5165\u7684\u8bf7\u6c42\u7c7b ",(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"DefaultRequestProcessor"})})," \u3002"]}),"\n",(0,t.jsx)(r.h4,{id:"26-defaultrequestprocessor",children:"2.6 DefaultRequestProcessor"}),"\n",(0,t.jsxs)(r.p,{children:["\u901a\u8fc7 ",(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"DefaultRequestProcessor.processRequest"})})," \u65b9\u6cd5\u6765\u5904\u7406\u5ba2\u6237\u7aef\u7684\u8bf7\u6c42\u3002"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-java",children:'@Override\n    public RemotingCommand processRequest(ChannelHandlerContext ctx,\n        RemotingCommand request) throws RemotingCommandException {\n\n        //\u6253\u5370\u8bf7\u6c42\u7684\u4fe1\u606f\n        if (ctx != null) {\n            log.debug("receive request, {} {} {}",\n                request.getCode(),\n                RemotingHelper.parseChannelRemoteAddr(ctx.channel()),\n                request);\n        }\n\n        switch (request.getCode()) {\n            case RequestCode.PUT_KV_CONFIG:\n                return this.putKVConfig(ctx, request);\n            case RequestCode.GET_KV_CONFIG:\n                return this.getKVConfig(ctx, request);\n            case RequestCode.DELETE_KV_CONFIG:\n                return this.deleteKVConfig(ctx, request);\n            case RequestCode.QUERY_DATA_VERSION:\n                return queryBrokerTopicConfig(ctx, request);\n            case RequestCode.REGISTER_BROKER:\n                Version brokerVersion = MQVersion.value2Version(request.getVersion());\n                if (brokerVersion.ordinal() >= MQVersion.Version.V3_0_11.ordinal()) {\n                    return this.registerBrokerWithFilterServer(ctx, request);\n                } else {\n                    return this.registerBroker(ctx, request);\n                }\n            case RequestCode.UNREGISTER_BROKER:\n                return this.unregisterBroker(ctx, request);\n            case RequestCode.GET_ROUTEINTO_BY_TOPIC:\n                return this.getRouteInfoByTopic(ctx, request);\n            case RequestCode.GET_BROKER_CLUSTER_INFO:\n                return this.getBrokerClusterInfo(ctx, request);\n            case RequestCode.WIPE_WRITE_PERM_OF_BROKER:\n                return this.wipeWritePermOfBroker(ctx, request);\n            case RequestCode.GET_ALL_TOPIC_LIST_FROM_NAMESERVER:\n                return getAllTopicListFromNameserver(ctx, request);\n            case RequestCode.DELETE_TOPIC_IN_NAMESRV:\n                return deleteTopicInNamesrv(ctx, request);\n            case RequestCode.GET_KVLIST_BY_NAMESPACE:\n                return this.getKVListByNamespace(ctx, request);\n            case RequestCode.GET_TOPICS_BY_CLUSTER:\n                return this.getTopicsByCluster(ctx, request);\n            case RequestCode.GET_SYSTEM_TOPIC_LIST_FROM_NS:\n                return this.getSystemTopicListFromNs(ctx, request);\n            case RequestCode.GET_UNIT_TOPIC_LIST:\n                return this.getUnitTopicList(ctx, request);\n            case RequestCode.GET_HAS_UNIT_SUB_TOPIC_LIST:\n                return this.getHasUnitSubTopicList(ctx, request);\n            case RequestCode.GET_HAS_UNIT_SUB_UNUNIT_TOPIC_LIST:\n                return this.getHasUnitSubUnUnitTopicList(ctx, request);\n            case RequestCode.UPDATE_NAMESRV_CONFIG:\n                return this.updateConfig(ctx, request);\n            case RequestCode.GET_NAMESRV_CONFIG:\n                return this.getConfig(ctx, request);\n            default:\n                break;\n        }\n        return null;\n    }\n'})}),"\n",(0,t.jsxs)(r.p,{children:["\u6240\u6709\u7684\u8bf7\u6c42\u7c7b\u578b\u5b9a\u4e49\u5728 ",(0,t.jsx)(r.strong,{children:"RequestCode"})," \u4e2d\uff1a"]}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"RequestCode"}),(0,t.jsx)(r.th,{children:"\u8bf4\u660e"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"PUT_KV_CONFIG"}),(0,t.jsx)(r.td,{children:"\u5411Namesrv\u8ffd\u52a0KV\u914d\u7f6e"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"GET_KV_CONFIG"}),(0,t.jsx)(r.td,{children:"\u4eceNamesrv\u83b7\u53d6KV\u914d\u7f6e"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"DELETE_KV_CONFIG"}),(0,t.jsx)(r.td,{children:"\u4eceNamesrv\u83b7\u53d6KV\u914d\u7f6e"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"QUERY_DATA_VERSION"}),(0,t.jsx)(r.td,{children:"\u83b7\u53d6\u7248\u672c\u4fe1\u606f"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"REGISTER_BROKER"}),(0,t.jsx)(r.td,{children:"\u6ce8\u518c\u4e00\u4e2aBroker\uff0c\u6570\u636e\u90fd\u662f\u6301\u4e45\u5316\u7684\uff0c\u5982\u679c\u5b58\u5728\u5219\u8986\u76d6\u914d\u7f6e"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"UNREGISTER_BROKER"}),(0,t.jsx)(r.td,{children:"\u5378\u8f7d\u4e00\u4e2aBroker\uff0c\u6570\u636e\u90fd\u662f\u6301\u4e45\u5316\u7684"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"GET_ROUTEINTO_BY_TOPIC"}),(0,t.jsx)(r.td,{children:"\u6839\u636eTopic\u83b7\u53d6Broker Name\u3001topic\u914d\u7f6e\u4fe1\u606f"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"GET_BROKER_CLUSTER_INFO"}),(0,t.jsx)(r.td,{children:"\u83b7\u53d6\u6ce8\u518c\u5230Name Server\u7684\u6240\u6709Broker\u96c6\u7fa4\u4fe1\u606f-\u5ba2\u6237\u7aef\u83b7\u53d6"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"WIPE_WRITE_PERM_OF_BROKER"}),(0,t.jsx)(r.td,{children:"\u53bb\u6389BrokerName\u7684\u5199\u6743\u9650"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"GET_ALL_TOPIC_LIST_FROM_NAMESERVER"}),(0,t.jsx)(r.td,{children:"\u4eceName Server\u83b7\u53d6\u5b8c\u6574Topic\u5217\u8868"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"DELETE_TOPIC_IN_NAMESRV"}),(0,t.jsx)(r.td,{children:"\u4eceNamesrv\u5220\u9664Topic\u914d\u7f6e"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"GET_KVLIST_BY_NAMESPACE"}),(0,t.jsx)(r.td,{children:"\u901a\u8fc7NameSpace\u83b7\u53d6\u6240\u6709\u7684KV List"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"GET_TOPICS_BY_CLUSTER"}),(0,t.jsx)(r.td,{children:"\u83b7\u53d6\u6307\u5b9a\u96c6\u7fa4\u4e0b\u7684\u6240\u6709 topic"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"GET_SYSTEM_TOPIC_LIST_FROM_NS"}),(0,t.jsx)(r.td,{children:"\u83b7\u53d6\u6240\u6709\u7cfb\u7edf\u5185\u7f6e Topic \u5217\u8868"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"GET_UNIT_TOPIC_LIST"}),(0,t.jsx)(r.td,{children:"\u5355\u5143\u5316\u76f8\u5173 topic"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"GET_HAS_UNIT_SUB_TOPIC_LIST"}),(0,t.jsx)(r.td,{children:"\u83b7\u53d6\u542b\u6709\u5355\u5143\u5316\u8ba2\u9605\u7ec4\u7684 Topic \u5217\u8868"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"GET_HAS_UNIT_SUB_UNUNIT_TOPIC_LIST"}),(0,t.jsx)(r.td,{children:"\u83b7\u53d6\u542b\u6709\u5355\u5143\u5316\u8ba2\u9605\u7ec4\u7684\u975e\u5355\u5143\u5316"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"UPDATE_NAMESRV_CONFIG"}),(0,t.jsx)(r.td,{children:"\u66f4\u65b0Name Server\u914d\u7f6e"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"GET_NAMESRV_CONFIG"}),(0,t.jsx)(r.td,{children:"\u83b7\u53d6Name Server\u914d\u7f6e"})]})]})]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.img,{src:"https://github.com/mxsm/document/blob/master/image/MQ/RocketMQ/RequestCode.png?raw=true",alt:""})}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsx)(r.p,{children:"\u4ee5\u4e0aRequestCode\u5206\u4e3a\u4e24\u7c7b\uff1a"}),"\n",(0,t.jsxs)(r.ol,{children:["\n",(0,t.jsx)(r.li,{children:"\u8def\u7531\u4fe1\u606f"}),"\n",(0,t.jsx)(r.li,{children:"NameServer\u7684\u914d\u7f6e"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(r.h4,{id:"27-routeinfomanager",children:"2.7 RouteInfoManager"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-java",children:"public class RouteInfoManager {\n    private static final InternalLogger log = InternalLoggerFactory.getLogger(LoggerName.NAMESRV_LOGGER_NAME);\n    private final static long BROKER_CHANNEL_EXPIRED_TIME = 1000 * 60 * 2;\n    private final ReadWriteLock lock = new ReentrantReadWriteLock();\n    private final HashMap<String/* topic */, List<QueueData>> topicQueueTable;\n    private final HashMap<String/* brokerName */, BrokerData> brokerAddrTable;\n    private final HashMap<String/* clusterName */, Set<String/* brokerName */>> clusterAddrTable;\n    private final HashMap<String/* brokerAddr */, BrokerLiveInfo> brokerLiveTable;\n    private final HashMap<String/* brokerAddr */, List<String>/* Filter Server */> filterServerTable;\n\n}\n"})}),"\n",(0,t.jsx)(r.h5,{id:"topicqueuetable",children:"topicQueueTable"}),"\n",(0,t.jsxs)(r.p,{children:["key\uff1a\u5b58\u50a8\u7684\u662ftopic, value",":QueueData","\u7684\u5217\u8868\u3002QueueData \u7684\u96c6\u5408 size \u7b49\u4e8e Topic \u5bf9\u5e94\u7684 Broker Master \u7684\u4e2a\u6570\u3002\u4e0b\u9762\u6765\u770b\u4e00\u4e0bQueueData\u6570\u636e\u7ed3\u6784\uff1a"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-java",children:"public class QueueData implements Comparable<QueueData> {\n    private String brokerName;   //broker \u540d\u5b57\n    private int readQueueNums;   //\u53ef\u8bfb queue \u6570\n    private int writeQueueNums;  //\u53ef\u5199 queue \u6570 \n    private int perm;  //\u8bfb\u5199\u6743\u9650\n    private int topicSynFlag;  //\u540c\u6b65\u6807\u8bc6\n    \n    //............\n}\n"})}),"\n",(0,t.jsx)(r.h5,{id:"brokeraddrtable",children:"brokerAddrTable"}),"\n",(0,t.jsx)(r.p,{children:"key\uff1abroker\u7684\u540d\u79f0"}),"\n",(0,t.jsx)(r.p,{children:"value: broker\u7684\u76f8\u5173\u4fe1\u606f"}),"\n",(0,t.jsx)(r.p,{children:"\u4e0b\u9762\u6765\u770b\u4e00\u4e0bBrokerData\u6570\u636e\u7ed3\u6784\uff1a"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-java",children:"public class BrokerData implements Comparable<BrokerData> {\n    private String cluster; //\u96c6\u7fa4\u540d\u79f0\n    private String brokerName;  //broker\u540d\u79f0\n    //brokerId\u548cbroker\u7684\u5730\u5740\n    private HashMap<Long/* brokerId */, String/* broker address */> brokerAddrs; \n\t\n    //............\n}\n"})}),"\n",(0,t.jsx)(r.h5,{id:"clusteraddrtable",children:"clusterAddrTable"}),"\n",(0,t.jsx)(r.p,{children:"key\u5b58\u50a8\u7684\u662f clusterName \u7684\u540d\u79f0\uff0c value \u5b58\u50a8\u7684\u662f brokerName \u7684\u96c6\u5408"}),"\n",(0,t.jsx)(r.h5,{id:"brokerlivetable",children:"brokerLiveTable"}),"\n",(0,t.jsxs)(r.p,{children:["key \u5b58\u50a8\u7684\u662f brokerAddr(IP",":port",") \u4fe1\u606f\uff0cvalue \u5b58\u50a8\u7684\u662f BrokerLiveInfo \u4fe1\u606f\uff0cBrokerLiveInfo \u4e2d\u5b58\u50a8\u4e86 Broker \u7684\u5b9e\u65f6\u72b6\u6001\u3002"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-java",children:"class BrokerLiveInfo {\n    private long lastUpdateTimestamp; //\u6700\u65b0\u66f4\u65b0\u65f6\u95f4\n    private DataVersion dataVersion; //\u6570\u636e\u7248\u672c\n    private Channel channel;\n    private String haServerAddr;\n}\n"})}),"\n",(0,t.jsx)(r.p,{children:"NamesrvController.initialize() \u4e2d\u6709\u4e00\u4e2aschedule\u5b9a\u65f6\u4efb\u52a1\uff0c\u6bcf\u4e2a10\u79d2\u949f\u5b9a\u65f6\u8c03\u7528 scanNotActiveBroker() \u65b9\u6cd5\u8fdb\u884c\u626b\u63cf\u4e0d\u6d3b\u52a8\u7684 Broker\uff0c\u5e76\u628a\u4e0d\u6d3b\u52a8\u7684 Broker \u5220\u9664\u6389\uff0c\u5c31\u662f\u5224\u65ad\u7684 \u8fd9\u4e2a lastUpdateTimestamp \u8fd9\u4e2a\u6570\u636e\u3002\u5982\u679c\u8d85\u8fc7\u4e24\u5206\u949f\u6ca1\u6709\u66f4\u65b0lastUpdateTimestamp\u8fd9\u4e2a\u503c\u3002\u5c31\u8ba4\u4e3a\u5f53\u524d\u8fd9\u4e2aBroker\u4e0d\u53ef\u7528\u3002"}),"\n",(0,t.jsx)(r.h5,{id:"filterservertable",children:"filterServerTable"}),"\n",(0,t.jsx)(r.p,{children:"key \u5b58\u50a8\u7684\u662f brokerAddr \u4fe1\u606f\uff0cvalue \u5b58\u50a8\u7684\u662f Filter Server \u4fe1\u606f\u3002Filter Server \u662f\u6d88\u606f\u7684\u8fc7\u6ee4\u670d\u52a1\u5668\uff0c\u4e00\u4e2a Broker \u53ef\u4ee5\u5bf9\u5e94\u591a\u4e2a Filter Server\u3002"}),"\n",(0,t.jsx)(r.h4,{id:"28-namesrvcontrollerstart",children:"2.8 NamesrvController.start"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-java",children:"    public void start() throws Exception {\n        //\u542f\u52a8\u76d1\u542c\u670d\u52a1\n        this.remotingServer.start();\n\n        if (this.fileWatchService != null) {\n            this.fileWatchService.start();\n        }\n    }\n"})}),"\n",(0,t.jsx)(r.h3,{id:"3-\u603b\u7ed3",children:"3. \u603b\u7ed3"}),"\n",(0,t.jsx)(r.p,{children:"\u901a\u8fc7\u5206\u6790\u542f\u52a8\u6d41\u7a0b\u56fe\u5982\u4e0b\uff1a"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.img,{src:"https://github.com/mxsm/document/blob/master/image/MQ/RocketMQ/NameServerStartProcess.png?raw=true",alt:""})})]})}function m(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,r,n)=>{n.d(r,{Z:()=>l,a:()=>o});var t=n(7294);const s={},i=t.createContext(s);function o(e){const r=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);