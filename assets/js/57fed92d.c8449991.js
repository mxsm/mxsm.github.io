"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[3089],{5248:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>a,contentTitle:()=>i,default:()=>k,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var t=n(5893),o=n(1151);const s={title:"RocketMQ\u6e90\u7801\u89e3\u6790-Broker\u4e0eNameServer\u4ea4\u4e92",date:new Date("2020-03-15T00:00:00.000Z"),weight:202106012230},i=void 0,l={id:"rocketmq/rocketmq4/broker/RocketMQ-analysis-Broker-NameServer-interaction",title:"RocketMQ\u6e90\u7801\u89e3\u6790-Broker\u4e0eNameServer\u4ea4\u4e92",description:"\u4ee5\u4e0b\u6e90\u7801\u57fa\u4e8eRocket MQ 4.7.0",source:"@site/docs/rocketmq/rocketmq4/broker/RocketMQ-analysis-Broker-NameServer-interaction.md",sourceDirName:"rocketmq/rocketmq4/broker",slug:"/rocketmq/rocketmq4/broker/RocketMQ-analysis-Broker-NameServer-interaction",permalink:"/docs/rocketmq/rocketmq4/broker/RocketMQ-analysis-Broker-NameServer-interaction",draft:!1,unlisted:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/rocketmq/rocketmq4/broker/RocketMQ-analysis-Broker-NameServer-interaction.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1706451902,formattedLastUpdatedAt:"Jan 28, 2024",frontMatter:{title:"RocketMQ\u6e90\u7801\u89e3\u6790-Broker\u4e0eNameServer\u4ea4\u4e92",date:"2020-03-15T00:00:00.000Z",weight:202106012230},sidebar:"rocketmq4",previous:{title:"RocketMQ\u6e90\u7801\u89e3\u6790-Broker\u6d88\u606f\u5b58\u50a8ConsumeQueue",permalink:"/docs/rocketmq/rocketmq4/broker/RocketMQ-analysis-Broker-ConsumeQueue"},next:{title:"RocketMQ\u6e90\u7801\u89e3\u6790-Broker\u6545\u969c\u6062\u590d",permalink:"/docs/rocketmq/rocketmq4/broker/RocketMQ-analysis-Broker-failure-recovery"}},a={},c=[{value:"1. Broker\u4e0eNameServer\u7684\u4ea4\u4e92",id:"1-broker\u4e0enameserver\u7684\u4ea4\u4e92",level:3},{value:"2. \u5ba2\u6237\u7aef\u7684\u521b\u5efa",id:"2-\u5ba2\u6237\u7aef\u7684\u521b\u5efa",level:3},{value:"3. Broker\u7aef\u6570\u636e\u7684\u5904\u7406",id:"3-broker\u7aef\u6570\u636e\u7684\u5904\u7406",level:3}];function d(e){const r={blockquote:"blockquote",code:"code",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsx)(r.p,{children:"\u4ee5\u4e0b\u6e90\u7801\u57fa\u4e8eRocket MQ 4.7.0"}),"\n"]}),"\n",(0,t.jsx)(r.h3,{id:"1-broker\u4e0enameserver\u7684\u4ea4\u4e92",children:"1. Broker\u4e0eNameServer\u7684\u4ea4\u4e92"}),"\n",(0,t.jsx)(r.p,{children:"Broker\u542f\u52a8\uff0c\u8ddf\u6240\u6709\u7684NameServer\u4fdd\u6301\u957f\u8fde\u63a5\uff0c\u5b9a\u65f6\u53d1\u9001\u5fc3\u8df3\u5305\u3002\u5fc3\u8df3\u5305\u4e2d\u5305\u542b\u5f53\u524dBroker\u4fe1\u606f(IP+\u7aef\u53e3\u7b49)\u4ee5\u53ca\u5b58\u50a8\u6240\u6709Topic\u4fe1\u606f\u3002\u6ce8\u518c\u6210\u529f\u540e\uff0cNameServer\u96c6\u7fa4\u4e2d\u5c31\u6709Topic\u8ddfBroker\u7684\u6620\u5c04\u5173\u7cfb\u3002"}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsx)(r.p,{children:"Broker\u4f1a\u8fde\u63a5\u914d\u7f6e\u5728\u914d\u7f6e\u6587\u4ef6\u4e2d\u7684\u6240\u6709NameServer\u3002\u4ee5\u540c\u6b65(sync)\u901a\u8baf\u7684\u65b9\u5f0f\u548cNameServer\u8fdb\u884c\u901a\u8baf\u3002"}),"\n",(0,t.jsx)(r.p,{children:"\u901a\u8baf\u65b9\u5f0f\uff1a"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"\u540c\u6b65(sync)"}),"\n",(0,t.jsx)(r.li,{children:"\u5f02\u6b65(async)"}),"\n",(0,t.jsx)(r.li,{children:"\u5355\u5411(oneway)"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(r.h3,{id:"2-\u5ba2\u6237\u7aef\u7684\u521b\u5efa",children:"2. \u5ba2\u6237\u7aef\u7684\u521b\u5efa"}),"\n",(0,t.jsxs)(r.p,{children:["Broker\u4e0eNameServer\u8fdb\u884c\u6570\u636e\u4ea4\u4e92\u4e3b\u8981\u662f\u901a\u8fc7\u4e00\u4e2a\u53eb\u505a ",(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"BrokerOuterAPI"})})," \u7684\u7c7b\u6765\u8fdb\u884c\u7684\u3002\u90a3\u4e48\u8fd9\u4e2a\u7c7b\u7684\u5b9e\u4f8b\u5bf9\u8c61\u5728\u54ea\u91cc\u6ca1\u521b\u5efa\u53c8\u5728\u54ea\u91cc\u88ab\u5f15\u7528\u6765\u5904\u7406\u548cNameServer\u7684\u6570\u636e\u4ea4\u4e92\u3002"]}),"\n",(0,t.jsx)(r.p,{children:"\u9996\u5148\u6765\u770b\u4e00\u4e0b\u5728\u54ea\u91cc\u521b\u5efa\uff1a"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-java",children:"public BrokerController(\n    final BrokerConfig brokerConfig,\n    final NettyServerConfig nettyServerConfig,\n    final NettyClientConfig nettyClientConfig,\n    final MessageStoreConfig messageStoreConfig\n) {\n//.....\nthis.brokerOuterAPI = new BrokerOuterAPI(nettyClientConfig);\n    //.....\n}\n"})}),"\n",(0,t.jsx)(r.p,{children:"\u4e0a\u9762\u8fd9\u6bb5\u4ee3\u7801\u662f\u5728BrokerController\u7684\u6784\u9020\u51fd\u6570\u91cc\u9762\uff0c\u6ca1\u9519\u5c31\u5728\u521b\u5efaBrokerController\u7684\u65f6\u5019\u4f1a\u5728\u6784\u9020\u51fd\u6570\u91cc\u9762\u521b\u5efaBrokerOuterAPI\u8fd9\u4e2a\u7c7b\u3002"}),"\n",(0,t.jsx)(r.p,{children:"\u63a5\u4e0b\u6765\u770b\u4e00\u4e0b\u8fd9\u4e2a\u7c7b\u5728\u54ea\u91cc\u88ab\u5f15\u7528\u4e86\u3002\u9996\u5148\u6211\u4eec\u6765\u770b\u4e00\u4e0b\u5728BrokerController\u521b\u5efa\u597d\u4e86\u4ee5\u540e\uff0c\u6700\u540e\u8c03\u7528BrokerController.start\u65b9\u6cd5\u6765\u542f\u52a8Controller\u3002\u5728\u542f\u52a8\u4ee3\u7801\u4e2d\u6709\u8fd9\u6837\u4e00\u6bb5\u3002"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-java",children:'//BrokerController.start\u65b9\u6cd5\u4e2d\u7684\u4e00\u6bb5\u4ee3\u7801\nthis.scheduledExecutorService.scheduleAtFixedRate(new Runnable() {\n            @Override\n            public void run() {\n                try {\n                    BrokerController.this.registerBrokerAll(true, false, brokerConfig.isForceRegister());\n                } catch (Throwable e) {\n                    log.error("registerBrokerAll Exception", e);\n                }\n            }\n        }, 1000 * 10, Math.max(10000, Math.min(brokerConfig.getRegisterNameServerPeriod(), 60000)), TimeUnit.MILLISECONDS);\n'})}),"\n",(0,t.jsx)(r.p,{children:"\u4ece\u4e0a\u9762\u7684\u4ee3\u7801\u53ef\u4ee5\u770b\u51fa\u6765\u662f\u4e00\u4e2a\u4ee5\u4ee5\u56fa\u5b9a\u9891\u7387\u6267\u884c\u7684\u5b9a\u65f6\u5668\uff0c\u8fd9\u4e2a\u5b9a\u65f6\u5668\u6267\u884c\u4e86BrokerController.registerBrokerAll \u65b9\u6cd5\u3002"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.img,{src:"https://github.com/mxsm/document/blob/master/image/MQ/RocketMQ/registerBrokerAll.png?raw=true",alt:""})}),"\n",(0,t.jsxs)(r.ol,{children:["\n",(0,t.jsx)(r.li,{children:"\u6784\u9020\u4e00\u4e9bBroker topic\u7684\u4fe1\u606f"}),"\n",(0,t.jsx)(r.li,{children:"Broker\u7684\u5143\u6570\u636e\u4fe1\u606f"}),"\n"]}),"\n",(0,t.jsxs)(r.p,{children:["\u901a\u8fc7 ",(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"BrokerController.doRegisterBrokerAll"})})," \u79c1\u6709\u65b9\u6cd5\u6765\u5904\u7406\u6570\u636e\u3002"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-java",children:"    private void doRegisterBrokerAll(boolean checkOrderConfig, boolean oneway,\n        TopicConfigSerializeWrapper topicConfigWrapper) {\n        //\u901a\u8fc7brokerOuterAPI\u6ce8\u518cBroker\u7684\u4fe1\u606f\u5230NameServer\n        List<RegisterBrokerResult> registerBrokerResultList = this.brokerOuterAPI.registerBrokerAll(\n            this.brokerConfig.getBrokerClusterName(),\n            this.getBrokerAddr(),  //IP:Port\n            this.brokerConfig.getBrokerName(),\n            this.brokerConfig.getBrokerId(),\n            this.getHAServerAddr(),\n            topicConfigWrapper,\n            this.filterServerManager.buildNewFilterServerList(),\n            oneway,\n            this.brokerConfig.getRegisterBrokerTimeoutMills(),\n            this.brokerConfig.isCompressedRegister());\n\t\t//\u6ce8\u518c\u7ed3\u679c\u8fd4\u56de\u5904\u7406\n        if (registerBrokerResultList.size() > 0) {\n            RegisterBrokerResult registerBrokerResult = registerBrokerResultList.get(0);\n            if (registerBrokerResult != null) {\n                if (this.updateMasterHAServerAddrPeriodically && registerBrokerResult.getHaServerAddr() != null) {\n                    this.messageStore.updateHaMasterAddress(registerBrokerResult.getHaServerAddr());\n                }\n\n                this.slaveSynchronize.setMasterAddr(registerBrokerResult.getMasterAddr());\n\n                if (checkOrderConfig) {\n                    this.getTopicConfigManager().updateOrderTopicConfig(registerBrokerResult.getKvTable());\n                }\n            }\n        }\n    }\n"})}),"\n",(0,t.jsx)(r.h3,{id:"3-broker\u7aef\u6570\u636e\u7684\u5904\u7406",children:"3. Broker\u7aef\u6570\u636e\u7684\u5904\u7406"}),"\n",(0,t.jsxs)(r.p,{children:["Broker\u548cNameServer\u7684\u6570\u636e\u5904\u7406\u901a\u8fc7\u4e0a\u9762\u53ef\u4ee5\u77e5\u9053\u4e3b\u8981\u662f\u901a\u8fc7 ",(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"BrokerOuterAPI.registerBrokerAll"})})," \u5904\u7406\u3002\u9996\u5148\u901a\u8fc7\u83b7\u53d6\u914d\u7f6e\u5728Broker\u914d\u7f6e\u6587\u4ef6\u4e2d\u7684namesrvAddr\u3002"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-java",children:"List<String> nameServerAddressList = this.remotingClient.getNameServerAddressList();\n"})}),"\n",(0,t.jsxs)(r.p,{children:["\u7136\u540e\u6784\u5efa ",(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"RegisterBrokerRequestHeader"})})]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-java",children:" final RegisterBrokerRequestHeader requestHeader = new RegisterBrokerRequestHeader();\n            requestHeader.setBrokerAddr(brokerAddr); //broker\u5730\u5740 IP:Port\n            requestHeader.setBrokerId(brokerId); // broker id \n            requestHeader.setBrokerName(brokerName); // broker\u540d\u79f0\n            requestHeader.setClusterName(clusterName); // \u96c6\u7fa4\u540d\u79f0\n            requestHeader.setHaServerAddr(haServerAddr); // haServer\u5730\u5740\n            requestHeader.setCompressed(compressed); // \u662f\u5426\u538b\u7f29\n"})}),"\n",(0,t.jsxs)(r.p,{children:["\u6784\u9020 ",(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"RegisterBrokerBody"})})]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-java",children:"            RegisterBrokerBody requestBody = new RegisterBrokerBody();\n            requestBody.setTopicConfigSerializeWrapper(topicConfigWrapper);\n            requestBody.setFilterServerList(filterServerList);\n            final byte[] body = requestBody.encode(compressed);\n            final int bodyCrc32 = UtilAll.crc32(body);\n            requestHeader.setBodyCrc32(bodyCrc32);\n"})}),"\n",(0,t.jsx)(r.p,{children:"\u7136\u540e\u5c31\u662f\u53d1\u9001\u6570\u636e\u5230NameServer"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-java",children:'            final CountDownLatch countDownLatch = new CountDownLatch(nameServerAddressList.size());\n            for (final String namesrvAddr : nameServerAddressList) {\n                brokerOuterExecutor.execute(new Runnable() {\n                    @Override\n                    public void run() {\n                        try {\n                            //\u6ce8\u518cBroker\u53d1\u9001\u6570\u636e\n                            RegisterBrokerResult result = registerBroker(namesrvAddr,oneway, timeoutMills,requestHeader,body);\n                            if (result != null) {\n                                registerBrokerResultList.add(result);\n                            }\n\n                            log.info("register broker[{}]to name server {} OK", brokerId, namesrvAddr);\n                        } catch (Exception e) {\n                            log.warn("registerBroker Exception, {}", namesrvAddr, e);\n                        } finally {\n                            countDownLatch.countDown();\n                        }\n                    }\n                });\n            }\n\n            try {\n                countDownLatch.await(timeoutMills, TimeUnit.MILLISECONDS);\n            } catch (InterruptedException e) {\n            }\n'})}),"\n",(0,t.jsxs)(r.p,{children:["\u901a\u8fc7\u8c03\u7528 ",(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"BrokerOuterAPI.registerBroker"})})," \u65b9\u6cd5\u6765\u6ce8\u518cBroker\u3002"]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.img,{src:"https://github.com/mxsm/document/blob/master/image/MQ/RocketMQ/registerBroker.png?raw=true",alt:""})}),"\n",(0,t.jsxs)(r.ol,{children:["\n",(0,t.jsx)(r.li,{children:"\u5355\u5411\u901a\u8baf"}),"\n",(0,t.jsx)(r.li,{children:"\u540c\u6b65\u901a\u8baf"}),"\n"]}),"\n",(0,t.jsxs)(r.p,{children:["\u901a\u8fc7\u4e0a\u9762\u53ef\u4ee5\u770b\u5230\u8bf7\u6c42\u7684\u4ee3\u7801\u662f ",(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"RequestCode.REGISTER_BROKER"})})," \u3002"]})]})}function k(e={}){const{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,r,n)=>{n.d(r,{Z:()=>l,a:()=>i});var t=n(7294);const o={},s=t.createContext(o);function i(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);