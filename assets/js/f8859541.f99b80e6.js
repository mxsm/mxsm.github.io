"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[5830],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var s=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,s,r=function(e,t){if(null==e)return{};var n,s,r={},o=Object.keys(e);for(s=0;s<o.length;s++)n=o[s],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)n=o[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=s.createContext({}),l=function(e){var t=s.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return s.createElement(u.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},g=s.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),c=l(n),g=r,f=c["".concat(u,".").concat(g)]||c[g]||m[g]||o;return n?s.createElement(f,i(i({ref:t},p),{},{components:n})):s.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=g;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a[c]="string"==typeof e?e:r,i[1]=a;for(var l=2;l<o;l++)i[l]=n[l];return s.createElement.apply(null,i)}return s.createElement.apply(null,n)}g.displayName="MDXCreateElement"},9488:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var s=n(7462),r=(n(7294),n(3905));const o={title:"RocketMQ\u6e90\u7801\u89e3\u6790-Broker\u6d88\u606f\u5b58\u50a8ConsumeQueue",date:new Date("2020-03-22T00:00:00.000Z"),weight:202106012235},i=void 0,a={unversionedId:"rocketmq/rocketmq4/broker/RocketMQ-analysis-Broker-ConsumeQueue",id:"rocketmq/rocketmq4/broker/RocketMQ-analysis-Broker-ConsumeQueue",title:"RocketMQ\u6e90\u7801\u89e3\u6790-Broker\u6d88\u606f\u5b58\u50a8ConsumeQueue",description:"\u4ee5\u4e0b\u6e90\u7801\u57fa\u4e8eRocket MQ 4.7.0",source:"@site/docs/rocketmq/rocketmq4/broker/RocketMQ-analysis-Broker-ConsumeQueue.md",sourceDirName:"rocketmq/rocketmq4/broker",slug:"/rocketmq/rocketmq4/broker/RocketMQ-analysis-Broker-ConsumeQueue",permalink:"/docs/rocketmq/rocketmq4/broker/RocketMQ-analysis-Broker-ConsumeQueue",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/rocketmq/rocketmq4/broker/RocketMQ-analysis-Broker-ConsumeQueue.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1671380922,formattedLastUpdatedAt:"Dec 18, 2022",frontMatter:{title:"RocketMQ\u6e90\u7801\u89e3\u6790-Broker\u6d88\u606f\u5b58\u50a8ConsumeQueue",date:"2020-03-22T00:00:00.000Z",weight:202106012235},sidebar:"rocketmq4",previous:{title:"RocketMQ\u6e90\u7801\u89e3\u6790-Broker\u6d88\u606f\u5b58\u50a8CommitLog",permalink:"/docs/rocketmq/rocketmq4/broker/RocketMQ-analysis-Broker-CommitLog"},next:{title:"RocketMQ\u6e90\u7801\u89e3\u6790-Broker\u4e0eNameServer\u4ea4\u4e92",permalink:"/docs/rocketmq/rocketmq4/broker/RocketMQ-analysis-Broker-NameServer-interaction"}},u={},l=[{value:"1. ConsumeQueue\u683c\u5f0f",id:"1-consumequeue\u683c\u5f0f",level:3},{value:"2. ConsumeQueue\u6301\u4e45\u5316\u8fc7\u7a0b",id:"2-consumequeue\u6301\u4e45\u5316\u8fc7\u7a0b",level:3},{value:"3. \u603b\u7ed3",id:"3-\u603b\u7ed3",level:3}],p={toc:l};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,s.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u4ee5\u4e0b\u6e90\u7801\u57fa\u4e8eRocket MQ 4.7.0")),(0,r.kt)("h3",{id:"1-consumequeue\u683c\u5f0f"},"1. ConsumeQueue\u683c\u5f0f"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/mxsm/document/blob/master/image/MQ/RocketMQ/ConsumeQueue.png?raw=true",alt:null})),(0,r.kt)("p",null,"\u5728\u4e4b\u524d\u5c31\u5206\u6790\u8fc7\uff0c\u6bcf\u4e00\u6761ConsumeQueue\u6570\u636e\u662f\u5b9a\u957f\u768420bytes\uff0c\u7136\u540e\u6bcf\u4e00\u4e2a\u6587\u4ef6\u5b58\u50a830w\u6761\u6570\u636e\u3002\u5b58\u50a8\u662f\u6309\u7167topic\u548cqueueId\u8fdb\u884c\u5206\u7c7b\u5b58\u50a8\u3002\u90a3\u4e48ConsumeQueue\u7684\u4f5c\u7528\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u524d8\u4e2abyte\u4fdd\u5b58\u4e86CommitLog\u7684\u504f\u79fb\u91cf\uff0c\u6839\u636e\u8fd9\u4e2a\u504f\u79fb\u91cf\u80fd\u591f\u627e\u5230\u8be5\u6761\u6d88\u606f\u7684CommitLog\u6587\u4ef6\u6240\u5728\u7684\u4f4d\u7f6e"),(0,r.kt)("li",{parentName:"ul"},"\u4e2d\u95f4\u7684\u56db\u4e2a\u5b57\u8282\u4fdd\u5b58\u4e86\u6d88\u606f\u5927\u5c0f\u6839\u636e\u524d\u9762\u7684\u516b\u4e2a\u5b57\u8282\u5c31\u80fd\u968f\u673a\u8bfb\u51fa\u6d88\u606f\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u6700\u540e\u516b\u4e2a\u5b57\u8282\u7528\u4e8e\u5904\u7406\u6d88\u8d39\u8005tag\u7684\u8fc7\u6ee4")),(0,r.kt)("p",null,"\u8fd9\u91cc\u6211\u4eec\u53ea\u5206\u6790ConsumeQueue\u6587\u4ef6\u7684\u751f\u6210\u8fc7\u7a0b\uff0c\u5176\u4ed6\u7684\u4f1a\u5728\u540e\u7eed\u7684\u5176\u4ed6\u6587\u7ae0\u4e2d\u5206\u6790"),(0,r.kt)("h3",{id:"2-consumequeue\u6301\u4e45\u5316\u8fc7\u7a0b"},"2. ConsumeQueue\u6301\u4e45\u5316\u8fc7\u7a0b"),(0,r.kt)("p",null,"ConsumeQueue\u6301\u4e45\u5316\u4e5f\u662fRocketMQ\u4e09\u5927\u6301\u4e45\u5316\u4e4b\u4e00\uff0c\u6240\u4ee5\u901a\u8fc7\u6e90\u7801\u5206\u6790\u627e\u5230\uff0cConsumeQueue\u6301\u4e45\u5316\u662f\u7528\u8fc7\u4e00\u4e2a ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"ReputMessageService"))," \u6765\u63d0\u4f9b\u6301\u4e45\u5316\u670d\u52a1\uff0c\u8fd9\u4e2a\u7c7b\u662f ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"ReputMessageService"))," \u7c7b\u4e2d\u7684\u4e00\u4e2a\u5185\u90e8\u7c7b:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"class ReputMessageService extends ServiceThread {\n\n     private volatile long reputFromOffset = 0;\n    //\u7701\u7565\u4ee3\u7801\n}\n")),(0,r.kt)("p",null," \u7ee7\u627f\u4e86RocketMQ\u81ea\u5b9a\u4e49\u7684 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"ServiceThread"))," \u670d\u52a1\u7ebf\u7a0b\u3002\u6240\u4ee5\u4e2a\u670d\u52a1\u5c31\u662f\u4e2a\u7ebf\u7a0b\u3002\u770b\u4e00\u4e0bRun\u65b9\u6cd5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'        @Override\n        public void run() {\n            DefaultMessageStore.log.info(this.getServiceName() + " service started");\n\n            while (!this.isStopped()) {\n                try {\n                    Thread.sleep(1);\n                    this.doReput();\n                } catch (Exception e) {\n                    DefaultMessageStore.log.warn(this.getServiceName() + " service has exception. ", e);\n                }\n            }\n\n            DefaultMessageStore.log.info(this.getServiceName() + " service end");\n        }\n')),(0,r.kt)("p",null,"\u4e3b\u8981\u662f\u901a\u8fc7\u8c03\u7528doReput\u65b9\u6cd5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'        private void doReput() {\n            //\u83b7\u53d6\u8bfb\u53d6\u6570\u636e\u7684\u4f4d\u7f6e--\u9ed8\u8ba4\u662f\u4ece0\u5f00\u59cb\uff0c\u5bf9\u4e8e\u8fd0\u884c\u4e00\u6bb5\u65f6\u95f4\u7684\u7cfb\u7edf\u4f1a\u8fdb\u884c\u8bbe\u7f6e\n            if (this.reputFromOffset < DefaultMessageStore.this.commitLog.getMinOffset()) {\n                log.warn("The reputFromOffset={} is smaller than minPyOffset={}, this usually indicate that the dispatch behind too much and the commitlog has expired.",\n                    this.reputFromOffset, DefaultMessageStore.this.commitLog.getMinOffset());\n                this.reputFromOffset = DefaultMessageStore.this.commitLog.getMinOffset();\n            }\n            for (boolean doNext = true; this.isCommitLogAvailable() && doNext; ) {\n\n                if (DefaultMessageStore.this.getMessageStoreConfig().isDuplicationEnable()\n                    && this.reputFromOffset >= DefaultMessageStore.this.getConfirmOffset()) {\n                    break;\n                }\n                //\u83b7\u53d6CommitLog\u4e2d\u53ef\u4ee5\u4f7f\u7528\u7684\u6570\u636e\u7ed3\u679c\n                SelectMappedBufferResult result = DefaultMessageStore.this.commitLog.getData(reputFromOffset);\n                if (result != null) {\n                    try {\n                        this.reputFromOffset = result.getStartOffset();\n\n                        for (int readSize = 0; readSize < result.getSize() && doNext; ) {\n                            //\u83b7\u53d6\u4e00\u6761CommitLog\u6570\u636e\u51fa\u6765\n                            DispatchRequest dispatchRequest =\n                                DefaultMessageStore.this.commitLog.checkMessageAndReturnSize(result.getByteBuffer(), false, false);\n                                    \n                            int size = dispatchRequest.getBufferSize() == -1 ? dispatchRequest.getMsgSize() : dispatchRequest.getBufferSize();\n                            \n                            if (dispatchRequest.isSuccess()) {\n                                if (size > 0) {\n                                    //\u8c03\u7528\u5904\u7406\u6570\u636e\u751f\u6210ConsumeQueue\n                                    DefaultMessageStore.this.doDispatch(dispatchRequest);\n\n                                    //\u5bf9\u4e8eBroker Master\u8fdb\u884c\u5904\u7406\n                                    if (BrokerRole.SLAVE != DefaultMessageStore.this.getMessageStoreConfig().getBrokerRole()\n                                        && DefaultMessageStore.this.brokerConfig.isLongPollingEnable()) {\n                                        DefaultMessageStore.this.messageArrivingListener.arriving(dispatchRequest.getTopic(),\n                                            dispatchRequest.getQueueId(), dispatchRequest.getConsumeQueueOffset() + 1,\n                                            dispatchRequest.getTagsCode(), dispatchRequest.getStoreTimestamp(),\n                                            dispatchRequest.getBitMap(), dispatchRequest.getPropertiesMap());\n                                    }\n                                    //\u5411\u524d\u63a8\u8fdboffset\n                                    this.reputFromOffset += size;\n                                    readSize += size;\n                                    if (DefaultMessageStore.this.getMessageStoreConfig().getBrokerRole() == BrokerRole.SLAVE) {\n                                        DefaultMessageStore.this.storeStatsService\n                                            .getSinglePutMessageTopicTimesTotal(dispatchRequest.getTopic()).incrementAndGet();\n                                        DefaultMessageStore.this.storeStatsService\n                                            .getSinglePutMessageTopicSizeTotal(dispatchRequest.getTopic())\n                                            .addAndGet(dispatchRequest.getMsgSize());\n                                    }\n                                } else if (size == 0) {\n                                    //\u8bfb\u53d6\u4e0b\u4e00\u4e2a\u6587\u4ef6\n                                    this.reputFromOffset = DefaultMessageStore.this.commitLog.rollNextFile(this.reputFromOffset);\n                                    readSize = result.getSize();\n                                }\n                            } else if (!dispatchRequest.isSuccess()) {\n\n                                if (size > 0) {\n                                    log.error("[BUG]read total count not equals msg total size. reputFromOffset={}", reputFromOffset);\n                                    this.reputFromOffset += size;\n                                } else {\n                                    doNext = false;\n                                    // If user open the dledger pattern or the broker is master node,\n                                    // it will not ignore the exception and fix the reputFromOffset variable\n                                    if (DefaultMessageStore.this.getMessageStoreConfig().isEnableDLegerCommitLog() ||\n                                        DefaultMessageStore.this.brokerConfig.getBrokerId() == MixAll.MASTER_ID) {\n                                        log.error("[BUG]dispatch message to consume queue error, COMMITLOG OFFSET: {}",\n                                            this.reputFromOffset);\n                                        this.reputFromOffset += result.getSize() - readSize;\n                                    }\n                                }\n                            }\n                        }\n                    } finally {\n                        result.release();\n                    }\n                } else {\n                    doNext = false;\n                }\n            }\n        }\n')),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u8bfb\u53d6CommitLog\u4e2d\u5f53\u524d\u6b21\u6570\u80fd\u591f\u5904\u7406\u7684\u6570\u636e\u3002(\u6570\u636e\u53ef\u80fd\u5728\u4e0d\u540c\u7684\u6587\u4ef6\u4e2d)"),(0,r.kt)("li",{parentName:"ol"},"\u5faa\u73af\u5904\u7406\u5f53\u524d\u6279\u6b21\u7684\u6570\u636e\u5c06\u6570\u636e\u8f6c\u6362\u4e3a ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"DispatchRequest"))),(0,r.kt)("li",{parentName:"ol"},"\u901a\u8fc7 ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"DefaultMessageStore.doDispatch"))," \u53bb\u5206\u53d1 ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"DispatchReques"))," t\u6570\u636e")),(0,r.kt)("p",null,"\u4e0b\u9762\u6765\u770b\u4e00\u4e0b ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"DefaultMessageStore.doDispatch")),"  \u65b9\u6cd5\u662f\u5982\u4f55\u5bf9\u6570\u636e\u8fdb\u884c\u5206\u53d1\u7684\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"    public void doDispatch(DispatchRequest req) {\n        for (CommitLogDispatcher dispatcher : this.dispatcherList) {\n            dispatcher.dispatch(req);\n        }\n    }\n")),(0,r.kt)("p",null,"\u901a\u8fc7\u8fd9\u91cc\u53ef\u4ee5\u770b\u51fa\u6765\u6709\u4e00\u4e2a ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"CommitLogDispatcher"))," \u63a5\u53e3, \u8fd9\u91cc\u5176\u5b9e\u5c31\u5206\u522b\u5904\u7406\u6765\u751f\u6210 ConsumeQueue\u548cIndexFile\u4e24\u79cd\u6587\u4ef6\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"CommitLogDispatcher")),"  \u5728RocketMQ\u4e2d\u6709\u4e09\u79cd\u5b9e\u73b0\uff1a"),(0,r.kt)("ol",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ol"},"CommitLogDispatcherBuildConsumeQueue -- \u5904\u7406ConsumeQueue\u7684\u751f\u6210"),(0,r.kt)("li",{parentName:"ol"},"CommitLogDispatcherBuildIndex -- \u5904\u7406IndexFile\u7684\u751f\u6210"),(0,r.kt)("li",{parentName:"ol"},"CommitLogDispatcherCalcBitMap -- \u5904\u7406\u8ba1\u7b97bit Map"))),(0,r.kt)("p",null,"\u4e0b\u9762\u6765\u770b\u4e00\u4e0bCommitLogDispatcherBuildConsumeQueue\u7684\u5b9e\u73b0\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"    class CommitLogDispatcherBuildConsumeQueue implements CommitLogDispatcher {\n\n        @Override\n        public void dispatch(DispatchRequest request) {\n            final int tranType = MessageSysFlag.getTransactionValue(request.getSysFlag());\n            switch (tranType) {\n                case MessageSysFlag.TRANSACTION_NOT_TYPE:\n                case MessageSysFlag.TRANSACTION_COMMIT_TYPE:\n                    DefaultMessageStore.this.putMessagePositionInfo(request);\n                    break;\n                case MessageSysFlag.TRANSACTION_PREPARED_TYPE:\n                case MessageSysFlag.TRANSACTION_ROLLBACK_TYPE:\n                    break;\n            }\n        }\n    }\n")),(0,r.kt)("p",null,"\u8fd9\u91ccTRANSACTION_PREPARED_TYPE\u548cTRANSACTION_ROLLBACK_TYPE\u8fd9\u4e24\u79cd\u6570\u636e\u7c7b\u578b\u4e0d\u9700\u8981\u5904\u7406\u3002\u6570\u636e\u5904\u7406\u53ea\u8981\u662f\u901a\u8fc7 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"DefaultMessageStore.this.putMessagePositionInfo(request)"))," \u8fd9\u6bb5\u4ee3\u7801\u5904\u7406\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"    public void putMessagePositionInfo(DispatchRequest dispatchRequest) {\n        ConsumeQueue cq = this.findConsumeQueue(dispatchRequest.getTopic(), dispatchRequest.getQueueId());\n        cq.putMessagePositionInfoWrapper(dispatchRequest);\n    }\n")),(0,r.kt)("p",null,"\u901a\u8fc7topic\u548cqueueId\u627e\u5230\u5bf9\u5e94\u7684ConsumeQueue\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},' public void putMessagePositionInfoWrapper(DispatchRequest request) {\n        final int maxRetries = 30;\n        boolean canWrite = this.defaultMessageStore.getRunningFlags().isCQWriteable();\n        for (int i = 0; i < maxRetries && canWrite; i++) {\n            long tagsCode = request.getTagsCode();\n            if (isExtWriteEnable()) {\n                ConsumeQueueExt.CqExtUnit cqExtUnit = new ConsumeQueueExt.CqExtUnit();\n                cqExtUnit.setFilterBitMap(request.getBitMap());\n                cqExtUnit.setMsgStoreTime(request.getStoreTimestamp());\n                cqExtUnit.setTagsCode(request.getTagsCode());\n\n                long extAddr = this.consumeQueueExt.put(cqExtUnit);\n                if (isExtAddr(extAddr)) {\n                    tagsCode = extAddr;\n                } else {\n                    log.warn("Save consume queue extend fail, So just save tagsCode! {}, topic:{}, queueId:{}, offset:{}", cqExtUnit,\n                        topic, queueId, request.getCommitLogOffset());\n                }\n            }\n            boolean result = this.putMessagePositionInfo(request.getCommitLogOffset(),\n                request.getMsgSize(), tagsCode, request.getConsumeQueueOffset());\n            if (result) {\n                if (this.defaultMessageStore.getMessageStoreConfig().getBrokerRole() == BrokerRole.SLAVE ||\n                    this.defaultMessageStore.getMessageStoreConfig().isEnableDLegerCommitLog()) {\n                    this.defaultMessageStore.getStoreCheckpoint().setPhysicMsgTimestamp(request.getStoreTimestamp());\n                }\n                this.defaultMessageStore.getStoreCheckpoint().setLogicsMsgTimestamp(request.getStoreTimestamp());\n                return;\n            } else {\n                // XXX: warn and notify me\n                log.warn("[BUG]put commit log position info to " + topic + ":" + queueId + " " + request.getCommitLogOffset()\n                    + " failed, retry " + i + " times");\n\n                try {\n                    Thread.sleep(1000);\n                } catch (InterruptedException e) {\n                    log.warn("", e);\n                }\n            }\n        }\n\n        // XXX: warn and notify me\n        log.error("[BUG]consume queue can not write, {} {}", this.topic, this.queueId);\n        this.defaultMessageStore.getRunningFlags().makeLogicsQueueError();\n    }\n')),(0,r.kt)("p",null,"\u4e0a\u9762\u4ee3\u7801\u901a\u8fc7\u5904\u7406 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"putMessagePositionInfo"))," \u65b9\u6cd5\u5904\u7406\u6570\u636e\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'private boolean putMessagePositionInfo(final long offset, final int size, final long tagsCode,\n        final long cqOffset) {\n\n        if (offset + size <= this.maxPhysicOffset) {\n            log.warn("Maybe try to build consume queue repeatedly maxPhysicOffset={} phyOffset={}", maxPhysicOffset, offset);\n            return true;\n        }\n\n        this.byteBufferIndex.flip();\n        this.byteBufferIndex.limit(CQ_STORE_UNIT_SIZE);\n        this.byteBufferIndex.putLong(offset);\n        this.byteBufferIndex.putInt(size);\n        this.byteBufferIndex.putLong(tagsCode);\n\n        final long expectLogicOffset = cqOffset * CQ_STORE_UNIT_SIZE;\n\n        MappedFile mappedFile = this.mappedFileQueue.getLastMappedFile(expectLogicOffset);\n        if (mappedFile != null) {\n\n            if (mappedFile.isFirstCreateInQueue() && cqOffset != 0 && mappedFile.getWrotePosition() == 0) {\n                this.minLogicOffset = expectLogicOffset;\n                this.mappedFileQueue.setFlushedWhere(expectLogicOffset);\n                this.mappedFileQueue.setCommittedWhere(expectLogicOffset);\n                this.fillPreBlank(mappedFile, expectLogicOffset);\n                log.info("fill pre blank space " + mappedFile.getFileName() + " " + expectLogicOffset + " "\n                    + mappedFile.getWrotePosition());\n            }\n\n            if (cqOffset != 0) {\n                long currentLogicOffset = mappedFile.getWrotePosition() + mappedFile.getFileFromOffset();\n\n                if (expectLogicOffset < currentLogicOffset) {\n                    log.warn("Build  consume queue repeatedly, expectLogicOffset: {} currentLogicOffset: {} Topic: {} QID: {} Diff: {}",\n                        expectLogicOffset, currentLogicOffset, this.topic, this.queueId, expectLogicOffset - currentLogicOffset);\n                    return true;\n                }\n\n                if (expectLogicOffset != currentLogicOffset) {\n                    LOG_ERROR.warn(\n                        "[BUG]logic queue order maybe wrong, expectLogicOffset: {} currentLogicOffset: {} Topic: {} QID: {} Diff: {}",\n                        expectLogicOffset,\n                        currentLogicOffset,\n                        this.topic,\n                        this.queueId,\n                        expectLogicOffset - currentLogicOffset\n                    );\n                }\n            }\n            this.maxPhysicOffset = offset + size;\n            return mappedFile.appendMessage(this.byteBufferIndex.array());\n        }\n        return false;\n    }\n')),(0,r.kt)("p",null,"\u540e\u7eed\u7684\u6570\u636e\u5176\u5b9e\u548cCommitLog\u7684\u6570\u636e\u5dee\u4e0d\u591a\uff0c\u90fd\u662f\u901a\u8fc7MappedFile\u8fdb\u884c\u6570\u636e\u843d\u5730\u3002"),(0,r.kt)("h3",{id:"3-\u603b\u7ed3"},"3. \u603b\u7ed3"),(0,r.kt)("p",null,"\u603b\u7ed3\u4e00\u4e0bConsumeQueue\u751f\u6210\u7684\u8fc7\u7a0b\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u542f\u52a8\u4e00\u4e2aReputMessageService\u670d\u52a1\u7ebf\u7a0b"),(0,r.kt)("li",{parentName:"ol"},"\u7136\u540e\u6839\u636ereputFromOffset\u53bb\u8bfb\u53d6\u672c\u6b21\u7684CommitLog\u6570\u636e\uff08\u6ca1\u6709\u6216\u8005\u6709\uff09"),(0,r.kt)("li",{parentName:"ol"},"\u5c06\u6bcf\u6761\u6570\u636e\u5305\u88c5\u4e3aDispatchRequest"),(0,r.kt)("li",{parentName:"ol"},"DefaultMessageStore.doDispatch\u7684\u65b9\u6cd5\u8fdb\u884c\u5904\u7406\u6570\u636e\uff0c\u5185\u90e8\u4e3b\u8981\u662f\u901a\u8fc7CommitLogDispatcher\u7684\u5b9e\u73b0\u6765\u8fdb\u884c\u5904\u7406"),(0,r.kt)("li",{parentName:"ol"},"\u751f\u6210\u5b8cConsumeQueue\u7eaa\u5f55\u540e\u7684\u540e\u7eed\u5904\u7406"),(0,r.kt)("li",{parentName:"ol"},"\u91cd\u590d2-4\u7684\u6b65\u9aa4")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6bcf\u6b21\u5904\u7406\u5b8c\u6210\u4e00\u8f6e\u540e\u4f1a\u77611\u6beb\u79d2\u7684\u65f6\u95f4\u3002\u5e76\u4e0d\u662f\u6d88\u606f\u751f\u6210\u7aef\u53d1\u9001\u4e86\u6d88\u606f\u6d88\u8d39\u7aef\u5c31\u80fd\u591f\u91cc\u9762\u6d88\u8d39\u6570\u636e\uff0c\u800c\u662f\u8981\u7ecf\u8fc7\u5904\u7406\u540e\u751f\u6210ConsumeQueue\u624d\u80fd\u6d88\u8d39\u3002")),(0,r.kt)("p",null,"\u4e0a\u9762\u8bf4\u4e86\u80fd\u591f\u6d88\u8d39\u7684\u6570\u636e\u9700\u8981\u5c06CommitLog\u8f6c\u5316\u6210\u4e3aConsumeQueue\u624d\u80fd\u8fdb\u884c\u6d88\u8d39\u4e0b\u9762\u5c31\u6765\u770b\u4e00\u4e0b\uff0c\u8fdb\u884c\u9a8c\u8bc1\uff0c\u5c06 ",(0,r.kt)("strong",{parentName:"p"},"ReputMessageService")," \u7684\u7761\u7720\u65f6\u95f4\u6539\u4e3a\u4e00\u5206\u949f\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'@Override\npublic void run() {\n    DefaultMessageStore.log.info(this.getServiceName() + " service started");\n\n    while (!this.isStopped()) {\n        try {\n            //Thread.sleep(1);\n            //\u5c06\u7761\u7720\u65f6\u95f4\u6539\u4e3a1\u5206\u949f\n            TimeUnit.MINUTES.sleep(1);\n            this.doReput();\n        } catch (Exception e) {\n            DefaultMessageStore.log.warn(this.getServiceName() + " service has exception. ", e);\n        }\n    }\n\n    DefaultMessageStore.log.info(this.getServiceName() + " service end");\n}\n')),(0,r.kt)("p",null,"\u542f\u52a8\u4fee\u6539\u540e\u7684MQ Broker\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/mxsm/picture/blob/main/rocketmq/ConsumeQueue%E7%9D%A1%E7%9C%A0%E6%97%B6%E9%97%B4%E4%BF%AE%E6%94%B9.gif?raw=true",alt:null})),(0,r.kt)("p",null,"\u7136\u540e\u542f\u52a8\u6d88\u8d39\u8005\uff0c\u540c\u65f6\u7528\u751f\u4ea7\u8005\u53d1\u9001\u6d88\u606f\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/mxsm/picture/blob/main/rocketmq/ConsumeQueue%E7%9D%A1%E7%9C%A0%E6%97%B6%E9%97%B4%E4%BF%AE%E6%94%B9-1.gif?raw=true",alt:null})),(0,r.kt)("p",null,"\u770b\u4e00\u4e0b\u4e24\u4e2a\u65f6\u95f4\u7684\u95f4\u9694\uff1a"),(0,r.kt)("p",null,"1623405444983(\u53d1\u9001\u65f6\u95f4)=2021-06-11 17:57:24"),(0,r.kt)("p",null,"1623405552338(\u6d88\u8d39\u65f6\u95f4)=2021-06-11 17:59:12"),(0,r.kt)("p",null,"\u901a\u8fc7\u4e24\u4e2a\u65f6\u95f4\u53d1\u73b0\u4e0d\u662f\u7acb\u9a6c\u8fdb\u884c\u6d88\u8d39\u3002\u6240\u4ee5\u9a8c\u8bc1\u4e86\u524d\u9762\u7684\u731c\u6d4b\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6bcf\u6b21\u5904\u7406\u5b8c\u6210\u4e00\u8f6e\u540e\u4f1a\u77611\u6beb\u79d2\u7684\u65f6\u95f4\u3002\u5e76\u4e0d\u662f\u6d88\u606f\u751f\u6210\u7aef\u53d1\u9001\u4e86\u6d88\u606f\u6d88\u8d39\u7aef\u5c31\u80fd\u591f\u91cc\u9762\u6d88\u8d39\u6570\u636e\uff0c\u800c\u662f\u8981\u7ecf\u8fc7\u5904\u7406\u540e\u751f\u6210ConsumeQueue\u624d\u80fd\u6d88\u8d39\u3002")))}c.isMDXComponent=!0}}]);