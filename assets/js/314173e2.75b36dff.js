"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[3846],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),m=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=m(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=m(n),k=o,f=u["".concat(l,".").concat(k)]||u[k]||c[k]||a;return n?r.createElement(f,s(s({ref:t},p),{},{components:n})):r.createElement(f,s({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=k;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:o,s[1]=i;for(var m=2;m<a;m++)s[m]=n[m];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},7449:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>m});var r=n(7462),o=(n(7294),n(3905));const a={title:"RocketMQ\u6e90\u7801\u89e3\u6790-Broker\u6545\u969c\u6062\u590d",date:new Date("2020-04-02T00:00:00.000Z"),weight:202106012238},s=void 0,i={unversionedId:"rocketmq/rocketmq4/broker/RocketMQ-analysis-Broker-failure-recovery",id:"rocketmq/rocketmq4/broker/RocketMQ-analysis-Broker-failure-recovery",title:"RocketMQ\u6e90\u7801\u89e3\u6790-Broker\u6545\u969c\u6062\u590d",description:"\u4ee5\u4e0b\u6e90\u7801\u57fa\u4e8eRocket MQ 4.7.0",source:"@site/docs/rocketmq/rocketmq4/broker/RocketMQ-analysis-Broker-failure-recovery.md",sourceDirName:"rocketmq/rocketmq4/broker",slug:"/rocketmq/rocketmq4/broker/RocketMQ-analysis-Broker-failure-recovery",permalink:"/docs/rocketmq/rocketmq4/broker/RocketMQ-analysis-Broker-failure-recovery",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/rocketmq/rocketmq4/broker/RocketMQ-analysis-Broker-failure-recovery.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1675697367,formattedLastUpdatedAt:"Feb 6, 2023",frontMatter:{title:"RocketMQ\u6e90\u7801\u89e3\u6790-Broker\u6545\u969c\u6062\u590d",date:"2020-04-02T00:00:00.000Z",weight:202106012238},sidebar:"rocketmq4",previous:{title:"RocketMQ\u6e90\u7801\u89e3\u6790-Broker\u4e0eNameServer\u4ea4\u4e92",permalink:"/docs/rocketmq/rocketmq4/broker/RocketMQ-analysis-Broker-NameServer-interaction"},next:{title:"RocketMQ\u6e90\u7801\u89e3\u6790-Broker\u6d88\u606f\u5b58\u50a8\u8bbe\u8ba1\u4e0e\u5b9e\u73b0",permalink:"/docs/rocketmq/rocketmq4/broker/RocketMQ-analysis-Broker-message-store"}},l={},m=[{value:"1.Broker\u6545\u969c\u6062\u590d",id:"1broker\u6545\u969c\u6062\u590d",level:3},{value:"2.CommitLog\u548cConsumeQueue\u7684\u6062\u590d",id:"2commitlog\u548cconsumequeue\u7684\u6062\u590d",level:3},{value:"3.TopicQueue\u7684\u6062\u590d",id:"3topicqueue\u7684\u6062\u590d",level:3}],p={toc:m},u="wrapper";function c(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u4ee5\u4e0b\u6e90\u7801\u57fa\u4e8eRocket MQ 4.7.0")),(0,o.kt)("p",null,"RocketMQ\u6b63\u5e38\u9000\u51fa\u6216\u8005\u5f02\u5e38\u9000\u51fa\u7684\u65f6\u5019\uff0c\u5982\u679c\u91cd\u65b0\u542f\u52a8\u90a3\u4e48\u600e\u4e48\u6062\u590d\u6570\u636e\u3002\u63a5\u4e0b\u6765\u901a\u8fc7\u4ee3\u7801\u6765\u5206\u6790\u8fd9\u4e2a\u8fc7\u7a0b\u3002"),(0,o.kt)("h3",{id:"1broker\u6545\u969c\u6062\u590d"},"1.Broker\u6545\u969c\u6062\u590d"),(0,o.kt)("p",null,"\u5728broker\u7b2c\u4e00\u6b21\u542f\u52a8\u6216\u8005\u91cd\u65b0\u542f\u52a8\u7684\u65f6\u5019\u4f1a\u8c03\u7528\u8fd9\u6837\u7684\u4e00\u6bb5\u4ee3\u7801\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"//BrokerController#initialize \u4e2d\u7684\u65b9\u6cd5\npublic boolean initialize() throws CloneNotSupportedException {\n     result = result && this.messageStore.load();\n}\n")),(0,o.kt)("p",null,"\u4ece\u4e0a\u9762\u7684\u4ee3\u7801\u53ef\u4ee5\u77e5\u9053\uff0c\u5728broker\u8fdb\u884c\u521d\u59cb\u7684\u65f6\u5019\uff0c\u4f1a ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"MessageStore#load"))," \u65b9\u6cd5\uff0c\u8fd9\u4e2a\u65b9\u6cd5\u7684\u9ed8\u8ba4\u5b9e\u73b0\u4e3a ",(0,o.kt)("strong",{parentName:"p"},"DefaultMessageStore")," \u3002\u63a5\u4e0b\u6765\u770b\u4e00\u4e0b load\u65b9\u6cd5\u8fd9\u91cc\u5c31\u662fBroker\u6062\u590d\u7684\u5165\u53e3\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"    public boolean load() {\n        boolean result = true;\n\n        try {\n            //\u901a\u8fc7\u5224\u65adabort\u6587\u4ef6\u662f\u5426\u5b58\u5728\u6765\u5224\u65ad\u662f\u5426\u6b63\u5e38\u9000\u51fa\n            boolean lastExitOK = !this.isTempFileExist();\n\n            if (null != scheduleMessageService) {\n                //\u89e3\u6790\u5ef6\u8fdf\u7684\u7b49\u7ea7-\u53ef\u4ee5\u81ea\u5df1\u914d\u7f6e\n                result = result && this.scheduleMessageService.load();\n            }\n\n            // \u52a0\u8f7dCommitLog\n            result = result && this.commitLog.load();\n\n            //\u52a0\u8f7dConsumeQueue\n            result = result && this.loadConsumeQueue();\n\n            if (result) {\n                this.storeCheckpoint =\n                    new StoreCheckpoint(StorePathConfigHelper.getStoreCheckpoint(this.messageStoreConfig.getStorePathRootDir()));\n\n                this.indexService.load(lastExitOK);\n                //\u6062\u590d\u5165\u53e3\n                this.recover(lastExitOK);\n\n                this.getMaxPhyOffset());\n            }\n        } catch (Exception e) {\n            result = false;\n        }\n\n        if (!result) {\n            this.allocateMappedFileService.shutdown();\n        }\n\n        return result;\n    }\n")),(0,o.kt)("p",null,"\u901a\u8fc7\u4e0a\u9762\u7684\u4ee3\u7801\u53ef\u4ee5\u77e5\u9053\u6062\u590d\u662f\u901a\u8fc7 ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"recover"))," \u65b9\u6cd5\u6765\u5904\u7406\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"    private void recover(final boolean lastExitOK) {\n        //\u83b7\u53d6ConsumeQueue\u6700\u5927\u7684\u7269\u7406\u504f\u79fb\u91cf--\u8fd9\u4e2a\u4e5f\u662fCommitLog\u4e2d\u7269\u7406\u504f\u79fb\u91cf(\u540e\u7eed\u4f1a\u6709\u6d4b\u8bd5\u7684\u6253\u5370\u4ee3\u7801)\n        long maxPhyOffsetOfConsumeQueue = this.recoverConsumeQueue();\n\n        if (lastExitOK) {\n            //\u6b63\u5e38\u9000\u51fa\u5904\u7406\n            this.commitLog.recoverNormally(maxPhyOffsetOfConsumeQueue);\n        } else {\n            //\u5f02\u5e38\u9000\u51fa\u5904\u7406\n            this.commitLog.recoverAbnormally(maxPhyOffsetOfConsumeQueue);\n        }\n\n        this.recoverTopicQueueTable();\n    }\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u5728RocketMQ\u76844.7.0\u7248\u672c\u4e2dCommitLog#recoverAbnormally\u65b9\u6cd5\u663e\u793a\u4e3a\u8fc7\u671f\uff0c\u8fd9\u91cc\u6682\u65f6\u5c31\u4e0d\u53bb\u5206\u6790\u8fd9\u4e2a\u60c5\u51b5\u3002\u7b49\u540e\u7eed\u770b\u8fd9\u91cc\u5982\u4f55\u5904\u7406\u3002")),(0,o.kt)("h3",{id:"2commitlog\u548cconsumequeue\u7684\u6062\u590d"},"2.CommitLog\u548cConsumeQueue\u7684\u6062\u590d"),(0,o.kt)("p",null,"\u4e0b\u9762\u6765\u901a\u8fc7\u6dfb\u52a0\u6d4b\u8bd5\u4ee3\u7801\u7684\u65b9\u5f0f\u8bf4\u660e\u4e00\u4e0b ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"maxPhyOffsetOfConsumeQueue"))," \u5230\u5e95\u662f\u4ec0\u4e48\u503c\u3002\u9996\u5148\u80fd\u5728 ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"recover"))," \u4e2d\u6dfb\u52a0\u5982\u4e0b\u4ee3\u7801\u7136\u540e\u6253\u5305\u6e90\u7801\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://github.com/mxsm/document/blob/master/image/MQ/RocketMQ/recover1.png?raw=true",alt:null})),(0,o.kt)("p",null,"\u7136\u540e\u542f\u52a8broker,\u6211\u8fd9\u91cc\u542f\u52a8\u8fd9\u4e2a\u503c\u4e3a384"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://github.com/mxsm/document/blob/master/image/MQ/RocketMQ/recover2.png?raw=true",alt:null})),(0,o.kt)("p",null,"\u7136\u540e\u901a\u8fc7\u5ba2\u6237\u7aef\u5728\u4ea7\u751f\u4e00\u6761\u6d88\u606f\u5230Broker"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://github.com/mxsm/document/blob/master/image/MQ/RocketMQ/recover3.png?raw=true",alt:null})),(0,o.kt)("p",null,"\u901a\u8fc7\u76d1\u63a7broker\u65e5\u5fd7(\u8fd9\u4e2a\u4e5f\u662f\u81ea\u5df1\u6dfb\u52a0\u7684)\uff0c\u5b58\u5165CommitLog\u7684\u5927\u5c0f\u4e3a192\u5b57\u8282\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://github.com/mxsm/document/blob/master/image/MQ/RocketMQ/recover4.png?raw=true",alt:null})),(0,o.kt)("p",null,"\u7136\u540e\u91cd\u542fBroker\u53d1\u73b0\u8fd9\u4e2a ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"maxPhyOffsetOfConsumeQueue")),"  \u53d8\u4e3a\u4e86 ",(0,o.kt)("strong",{parentName:"p"},"576")," \u3002",(0,o.kt)("img",{parentName:"p",src:"https://github.com/mxsm/document/blob/master/image/MQ/RocketMQ/recover5.png?raw=true",alt:null})),(0,o.kt)("p",null,"\u901a\u8fc7\u8fd9\u4e2a\u65e5\u5fd7\u7684\u6253\u5370\u8bf4\u660e\u4e86 ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"maxPhyOffsetOfConsumeQueue")),"  \u4e3aCommitLog\u65e5\u5fd7\u4e2d\u7684\u7269\u7406\u504f\u79fb\u91cf\u3002\u63a5\u4e0b\u6765\u5206\u4e00\u4e0b ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"CommitLog#recoverNormally"))," \u662f\u600e\u4e48\u6837\u6765\u5904\u7406\u7684\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'public void recoverNormally(long maxPhyOffsetOfConsumeQueue) {\n        //CRC\u68c0\u67e5\u5728\u6062\u590d\u7684\u65f6\u5019--\u9ed8\u8ba4\u503ctrue\n        boolean checkCRCOnRecover = this.defaultMessageStore.getMessageStoreConfig().isCheckCRCOnRecover();\n    //\u83b7\u53d6CommitLog\u7684\u5217\u8868    \n    final List<MappedFile> mappedFiles = this.mappedFileQueue.getMappedFiles();\n        //\u975e\u7a7a\u8bf4\u660e\u4e0d\u662f\u7b2c\u4e00\u6b21\u542f\u52a8\n        if (!mappedFiles.isEmpty()) {\n            // \u5927\u4e8e\u4e09\u4e2aCommitLog\u6587\u4ef6\u5c31\u4ece\u6700\u65b0\u7684\u4e09\u4e2a\u5f00\u59cb\uff0c\u5c0f\u4e8e\u4e09\u4e2a\u5c31\u6709\u591a\u5c11\u6821\u9a8c\u591a\u5c11\n            int index = mappedFiles.size() - 3;\n            if (index < 0)\n                index = 0;\n            \n            MappedFile mappedFile = mappedFiles.get(index);\n            ByteBuffer byteBuffer = mappedFile.sliceByteBuffer();\n            long processOffset = mappedFile.getFileFromOffset();\n            long mappedFileOffset = 0;\n            while (true) {\n                //\u6bcf\u6761\u6570\u636e\u7684\u6821\u9a8c\u7136\u540e\u8fd4\u56deDispatchRequest\n                DispatchRequest dispatchRequest = this.checkMessageAndReturnSize(byteBuffer, checkCRCOnRecover);\n                int size = dispatchRequest.getMsgSize();\n                // \u6b63\u5e38\u6570\u636e\u5904\u7406\n                if (dispatchRequest.isSuccess() && size > 0) {\n                    mappedFileOffset += size;\n                }\n                \n                //\u6765\u5230\u6587\u4ef6\u7ed3\u5c3e\u6216\u8005\u5904\u7406\u5b8c\u4e86\uff0c\u6216\u8005\u9700\u8981\u6362\u6587\u4ef6\n                else if (dispatchRequest.isSuccess() && size == 0) {\n                    index++;\n                    //\u6700\u65b0\u7684\u4e09\u4e2a\u6587\u4ef6\u90fd\u5904\u7406\u5b8c\u4e86\n                    if (index >= mappedFiles.size()) {\n                 \n                        break;\n                    } else {\n                        //\u5207\u6362\u6587\u4ef6\n                        mappedFile = mappedFiles.get(index);\n                        byteBuffer = mappedFile.sliceByteBuffer();\n                        processOffset = mappedFile.getFileFromOffset();\n                        mappedFileOffset = 0;\n\n                    }\n                }\n                // \u7ec8\u7aef\u6587\u4ef6\u7684\u8bfb\u53d6\u7531\u4e8e\u9519\u8bef\n                else if (!dispatchRequest.isSuccess()) {\n                    log.info("recover physics file end, " + mappedFile.getFileName());\n                    break;\n                }\n            }\n\n            processOffset += mappedFileOffset;\n            //\u8bbe\u7f6e\u5237\u65b0\u4f4d\u7f6e\n            this.mappedFileQueue.setFlushedWhere(processOffset);\n            //\u8bbe\u7f6e\u63a5\u4e0b\u6765\u6587\u4ef6\u7684\u63d0\u4ea4\u4f4d\u7f6e\n            this.mappedFileQueue.setCommittedWhere(processOffset);\n            //\u5220\u9664\u8fc7\u671f\u7684\u6587\u4ef6\n            this.mappedFileQueue.truncateDirtyFiles(processOffset);\n\n            //\u6e05\u9664ConsumeQueue\u591a\u4f59\u7684\u6570\u636e\n            if (maxPhyOffsetOfConsumeQueue >= processOffset) {\n                this.defaultMessageStore.truncateDirtyLogicFiles(processOffset);\n            }\n        } else {\n            // CommitLog\u65e5\u5fd7\u6587\u4ef6\u5168\u90e8\u5220\u9664(\u7279\u6b8a\u60c5\u51b5\u5c31\u662f\u7b2c\u4e00\u6b21\u542f\u52a8)\n            this.mappedFileQueue.setFlushedWhere(0);\n            this.mappedFileQueue.setCommittedWhere(0);\n            this.defaultMessageStore.destroyLogics();\n        }\n    }\n')),(0,o.kt)("p",null,"\u4e0a\u9762\u4ee3\u7801\u6709\u4e00\u4e2a\u4e24\u4e2a\u53d8\u91cf\u53ef\u80fd\u4e0d\u592a\u660e\u767d\u4ed6\u7684\u6570\u636e\u5230\u5e95\u4e3a\u591a\u5c11\u4e00\u4e2a\u662f ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"processOffset\u3001mappedFileOffset"))," \u4e0b\u9762\u6765\u901a\u8fc7\u6dfb\u52a0\u65e5\u5fd7\u6253\u5370\u7684\u6a21\u5f0f\u6765\u770b\u4e00\u4e0b\uff0c\u9996\u5148\u5982\u4e0b\u56fe\u6240\u793a\u6dfb\u52a0\u4ee3\u7801\u7136\u540e\u6253\u5305\u5bf9\u5e94\u7684\u6a21\u5757\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://github.com/mxsm/document/blob/master/image/MQ/RocketMQ/recoverNormally1.png?raw=true",alt:null})),(0,o.kt)("p",null,"\u7136\u540e\u542f\u52a8Broker\u770b\u4e00\u4e0b\u5bf9\u5e94\u7684\u503c\u5982\u4e0b\u56fe\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://github.com/mxsm/document/blob/master/image/MQ/RocketMQ/recoverNormally2.png?raw=true",alt:null})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"processOffset"))," \u542f\u52a8\u7684\u65f6\u5019\u5176\u5b9e\u662f0\uff0c",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"mappedFileOffset"))," \u5c31\u662f\u6bcf\u4e00\u4e2aCommitLog\u7684\u5904\u7406\u6570\u636e\u3002"),(0,o.kt)("p",null,"\u4e0a\u9762\u4e3b\u8981\u5206\u4e3a\u4e24\u79cd\u6b63\u5e38\u6062\u590d\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"\u5b58\u5728CommitLog\u65e5\u5fd7\u6587\u4ef6"))),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"\u68c0\u67e5\u6700\u65b0\u4e09\u4e2a\u6587\u4ef6\u6570\u636e\u4e2d\u7684\u6bcf\u6761\u6570\u636e"),(0,o.kt)("li",{parentName:"ol"},"\u8bbe\u7f6eflushedWhere\u548ccommittedWhere\u503c"),(0,o.kt)("li",{parentName:"ol"},"\u5220\u9664\u5904\u7406\u8fc7\u4e86\u7684CommitLog\u65e5\u5fd7\u6587\u4ef6\u3002"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"\u4e0d\u5b58\u5728CommitLog\u65e5\u5fd7\u6587\u4ef6(\u7b2c\u4e00\u6b21\u542f\u52a8\u6216\u8005\u65e5\u5fd7\u6587\u4ef6\u88ab\u5220\u9664)"))," "),(0,o.kt)("p",{parentName:"li"},"\u8bbe\u7f6eflushedWhere\u548ccommittedWhere\u4e3a0\u5e76\u4e14\u5220\u9664ConsumeQueue\u6587\u4ef6"))),(0,o.kt)("h3",{id:"3topicqueue\u7684\u6062\u590d"},"3.TopicQueue\u7684\u6062\u590d"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'//topic queueId\u548coffset\u7684\u5173\u7cfb \npublic void recoverTopicQueueTable() {\n        HashMap<String/* topic-queueid */, Long/* offset */> table = new HashMap<String, Long>(1024);\n        long minPhyOffset = this.commitLog.getMinOffset();\n        for (ConcurrentMap<Integer, ConsumeQueue> maps : this.consumeQueueTable.values()) {\n            for (ConsumeQueue logic : maps.values()) {\n                String key = logic.getTopic() + "-" + logic.getQueueId();\n                table.put(key, logic.getMaxOffsetInQueue());\n                logic.correctMinOffset(minPhyOffset);\n            }\n        }\n\n        this.commitLog.setTopicQueueTable(table);\n    }\n')),(0,o.kt)("p",null,"\u8fd9\u4e2a\u91cc\u9762\u7684\u5173\u7cfb\u6570\u636e\u4f1a\u5728CommitLog\u65e5\u5fd7\u6570\u636e\u4fdd\u5b58\u5728\u5982\u4e0b\u4ee3\u7801\u4e2d\u4f1a\u7528\u5230\u3002 ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"DefaultAppendMessageCallback#doAppend"))," \u65b9\u6cd5\u4e2d\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"Long queueOffset = CommitLog.this.topicQueueTable.get(key);\n\nueueOffset++;\n\nCommitLog.this.topicQueueTable.put(key, queueOffset);\n")))}c.isMDXComponent=!0}}]);