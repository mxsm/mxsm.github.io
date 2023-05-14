"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[9747],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var s=n(7294);function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,s,u=function(e,t){if(null==e)return{};var n,s,u={},r=Object.keys(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||(u[n]=e[n]);return u}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(u[n]=e[n])}return u}var o=s.createContext({}),i=function(e){var t=s.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=i(e.components);return s.createElement(o.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},g=s.forwardRef((function(e,t){var n=e.components,u=e.mdxType,r=e.originalType,o=e.parentName,m=a(e,["components","mdxType","originalType","parentName"]),c=i(n),g=u,d=c["".concat(o,".").concat(g)]||c[g]||p[g]||r;return n?s.createElement(d,l(l({ref:t},m),{},{components:n})):s.createElement(d,l({ref:t},m))}));function d(e,t){var n=arguments,u=t&&t.mdxType;if("string"==typeof e||u){var r=n.length,l=new Array(r);l[0]=g;var a={};for(var o in t)hasOwnProperty.call(t,o)&&(a[o]=t[o]);a.originalType=e,a[c]="string"==typeof e?e:u,l[1]=a;for(var i=2;i<r;i++)l[i]=n[i];return s.createElement.apply(null,l)}return s.createElement.apply(null,n)}g.displayName="MDXCreateElement"},8840:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>i});var s=n(7462),u=(n(7294),n(3905));const r={title:"RocketMQ\u6e90\u7801\u89e3\u6790-\u5e76\u53d1\u6d88\u8d39\u6d88\u606f\u6e90\u7801\u89e3\u6790",date:new Date("2021-06-14T00:00:00.000Z"),weight:202106102133},l=void 0,a={unversionedId:"rocketmq/rocketmq4/consumer/RocketMQ-analysis-consumer-concurrently",id:"rocketmq/rocketmq4/consumer/RocketMQ-analysis-consumer-concurrently",title:"RocketMQ\u6e90\u7801\u89e3\u6790-\u5e76\u53d1\u6d88\u8d39\u6d88\u606f\u6e90\u7801\u89e3\u6790",description:"\u4ee5\u4e0b\u6e90\u7801\u57fa\u4e8eRocketMQ 4.8.0",source:"@site/docs/rocketmq/rocketmq4/consumer/RocketMQ-analysis-consumer-concurrently.md",sourceDirName:"rocketmq/rocketmq4/consumer",slug:"/rocketmq/rocketmq4/consumer/RocketMQ-analysis-consumer-concurrently",permalink:"/docs/rocketmq/rocketmq4/consumer/RocketMQ-analysis-consumer-concurrently",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/rocketmq/rocketmq4/consumer/RocketMQ-analysis-consumer-concurrently.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1684027896,formattedLastUpdatedAt:"May 14, 2023",frontMatter:{title:"RocketMQ\u6e90\u7801\u89e3\u6790-\u5e76\u53d1\u6d88\u8d39\u6d88\u606f\u6e90\u7801\u89e3\u6790",date:"2021-06-14T00:00:00.000Z",weight:202106102133},sidebar:"rocketmq4",previous:{title:"RocketMQ\u6e90\u7801\u89e3\u6790-RocketMQ\u6d88\u606fACK\u673a\u5236\u53ca\u6d88\u8d39\u8fdb\u5ea6\u7ba1\u7406",permalink:"/docs/rocketmq/rocketmq4/consumer/RocketMQ-analysis-ack"},next:{title:"RocketMQ\u6e90\u7801\u89e3\u6790-\u6d88\u8d39\u6a21\u5f0f\u6d88\u8d39\u8fdb\u5ea6\u52a0\u8f7d\u6e90\u7801\u89e3\u6790",permalink:"/docs/rocketmq/rocketmq4/consumer/RocketMQ-analysis-consumer-messagemodel"}},o={},i=[{value:"1. \u5e76\u53d1\u6d88\u8d39\u670d\u52a1ConsumeMessageConcurrentlyService\u542f\u52a8",id:"1-\u5e76\u53d1\u6d88\u8d39\u670d\u52a1consumemessageconcurrentlyservice\u542f\u52a8",level:3},{value:"2. \u6d88\u606f\u62c9\u53d6",id:"2-\u6d88\u606f\u62c9\u53d6",level:3},{value:"3. PullRequest\u653e\u5165\u961f\u5217",id:"3-pullrequest\u653e\u5165\u961f\u5217",level:3},{value:"4. PullRequest\u5904\u7406",id:"4-pullrequest\u5904\u7406",level:3},{value:"5. DefaultMQPushConsumerImpl#pullMessage",id:"5-defaultmqpushconsumerimplpullmessage",level:3},{value:"6. ConsumeMessageConcurrentlyService#submitConsumeRequest",id:"6-consumemessageconcurrentlyservicesubmitconsumerequest",level:3},{value:"7. ConsumeRequest\u6e90\u7801\u89e3\u6790",id:"7-consumerequest\u6e90\u7801\u89e3\u6790",level:3}],m={toc:i},c="wrapper";function p(e){let{components:t,...n}=e;return(0,u.kt)(c,(0,s.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("blockquote",null,(0,u.kt)("p",{parentName:"blockquote"},"\u4ee5\u4e0b\u6e90\u7801\u57fa\u4e8eRocketMQ 4.8.0")),(0,u.kt)("p",null,"RocketMQ\u7684\u6d88\u8d39\u6a21\u5f0f\u6709\u4e24\u79cd\u5206\u522b\u4e3a\uff1a"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"\u96c6\u7fa4\u6d88\u8d39\u6a21\u5f0f(CLUSTERING)"),(0,u.kt)("li",{parentName:"ul"},"\u5e7f\u64ad\u6d88\u8d39\u6a21\u5f0f(BROADCASTING)")),(0,u.kt)("p",null,"\u7136\u800c\u5728\u5bf9\u4e8e\u6d88\u606f\u7684\u7c7b\u578b\u5206\u4e3a\u4ee5\u4e0b\u51e0\u79cd\uff1a"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"\u65e0\u5e8f\u6d88\u606f(\u5e76\u53d1\u6d88\u606f)"),(0,u.kt)("li",{parentName:"ul"},"\u987a\u5e8f\u6d88\u606f"),(0,u.kt)("li",{parentName:"ul"},"\u5ef6\u8fdf\u6d88\u606f"),(0,u.kt)("li",{parentName:"ul"},"\u4e8b\u52a1\u6d88\u606f")),(0,u.kt)("p",null,"\u63a5\u4e0b\u6765\u9010\u4e2a\u901a\u8fc7\u6e90\u7801\u6765\u5206\u6790\u8fd9\u4e9b\u6d88\u606f\u5728\u4e0d\u540c\u7684\u6a21\u5f0f\u4e0b\u662f\u5982\u4f55\u8fdb\u884c\u6d88\u8d39\u7684\u3002\u5728\u5ba2\u6237\u7aef\u5728\u542f\u52a8\u7684\u65f6\u5019 ",(0,u.kt)("strong",{parentName:"p"},(0,u.kt)("inlineCode",{parentName:"strong"},"DefaultMQPushConsumerImpl#start"))," \u65b9\u6cd5\u4e2d\u6709\u8fd9\u6837\u4e00\u4e2a\u4ee3\u7801\u7247\u6bb5\uff1a"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-java"},"if (this.getMessageListenerInner() instanceof MessageListenerOrderly) {\n    this.consumeOrderly = true;\n    this.consumeMessageService =\n        new ConsumeMessageOrderlyService(this, (MessageListenerOrderly) this.getMessageListenerInner());\n} else if (this.getMessageListenerInner() instanceof MessageListenerConcurrently) {\n    this.consumeOrderly = false;\n    this.consumeMessageService =\n        new ConsumeMessageConcurrentlyService(this, (MessageListenerConcurrently) this.getMessageListenerInner());\n}\nthis.consumeMessageService.start();\n")),(0,u.kt)("p",null,"\u901a\u8fc7\u5224\u65ad\u8bbe\u7f6e\u7684 ",(0,u.kt)("strong",{parentName:"p"},(0,u.kt)("inlineCode",{parentName:"strong"},"MessageListener"))," \u76d1\u542c\u5668\u4e3a ",(0,u.kt)("strong",{parentName:"p"},(0,u.kt)("inlineCode",{parentName:"strong"},"MessageListenerOrderly"))," \u8fd8\u662f ",(0,u.kt)("strong",{parentName:"p"},(0,u.kt)("inlineCode",{parentName:"strong"},"MessageListenerConcurrently"))," \u76d1\u542c\u5668\u6765\u5224\u65ad\u6d88\u8d39\u6d88\u606f\u7684\u670d\u52a1\u662f\u7528 ",(0,u.kt)("strong",{parentName:"p"},(0,u.kt)("inlineCode",{parentName:"strong"},"ConsumeMessageOrderlyService"))," \u8fd8\u662f ",(0,u.kt)("strong",{parentName:"p"},(0,u.kt)("inlineCode",{parentName:"strong"},"ConsumeMessageConcurrentlyService"))," \u3002\u603b\u7ed3\u4e00\u4e0b\uff1a"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"\u65e0\u5e8f\u6d88\u606f\u7531 ",(0,u.kt)("strong",{parentName:"li"},(0,u.kt)("inlineCode",{parentName:"strong"},"ConsumeMessageConcurrentlyService"))," \u5904\u7406"),(0,u.kt)("li",{parentName:"ul"},"\u6709\u5e8f\u6d88\u606f\u7531 ",(0,u.kt)("strong",{parentName:"li"},(0,u.kt)("inlineCode",{parentName:"strong"},"ConsumeMessageOrderlyService"))," \u5904\u7406")),(0,u.kt)("h3",{id:"1-\u5e76\u53d1\u6d88\u8d39\u670d\u52a1consumemessageconcurrentlyservice\u542f\u52a8"},"1. \u5e76\u53d1\u6d88\u8d39\u670d\u52a1ConsumeMessageConcurrentlyService\u542f\u52a8"),(0,u.kt)("p",null,"\u5728 ",(0,u.kt)("strong",{parentName:"p"},(0,u.kt)("inlineCode",{parentName:"strong"},"DefaultMQPushConsumerImpl#start"))," \u65b9\u6cd5\u4e2d\u8c03\u7528 ",(0,u.kt)("strong",{parentName:"p"},(0,u.kt)("inlineCode",{parentName:"strong"},"this.consumeMessageService.start();"))," \u542f\u52a8\u5e76\u53d1\u670d\u52a1\u3002\u4e0b\u9762\u6765\u770b\u4e00\u4e0b\u5e76\u53d1\u670d\u52a1\u542f\u52a8\u505a\u4e86\u4ec0\u4e48\uff1a"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-java"},"public class ConsumeMessageConcurrentlyService implements ConsumeMessageService {\n    public void start() {\n        this.cleanExpireMsgExecutors.scheduleAtFixedRate(new Runnable() {\n\n            @Override\n            public void run() {\n                cleanExpireMsg();\n            }\n\n        }, this.defaultMQPushConsumer.getConsumeTimeout(), this.defaultMQPushConsumer.getConsumeTimeout(), TimeUnit.MINUTES);\n    }\n}\n")),(0,u.kt)("p",null,"\u4ece\u4ee3\u7801\u53ef\u4ee5\u770b\u51fa\u662f\u5b9a\u65f6\u6e05\u9664\u8fc7\u671f\u7684\u6d88\u606f\u3002"),(0,u.kt)("h3",{id:"2-\u6d88\u606f\u62c9\u53d6"},"2. \u6d88\u606f\u62c9\u53d6"),(0,u.kt)("p",null,"\u5728 ",(0,u.kt)("strong",{parentName:"p"},(0,u.kt)("inlineCode",{parentName:"strong"},"MQClientInstance#start"))," \u65b9\u6cd5\u4e2d\u542f\u52a8\u6d88\u606f\u7684\u62c9\u53d6\u670d\u52a1\uff1a"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-java"},'public void start() throws MQClientException {\n\n    synchronized (this) {\n        switch (this.serviceState) {\n            case CREATE_JUST:\n                this.serviceState = ServiceState.START_FAILED;\n                // If not specified,looking address from name server\n                if (null == this.clientConfig.getNamesrvAddr()) {\n                    this.mQClientAPIImpl.fetchNameServerAddr();\n                }\n                // Start request-response channel\n                this.mQClientAPIImpl.start();\n                // Start various schedule tasks\n                this.startScheduledTask();\n                // \u62c9\u53d6\u670d\u52a1\u542f\u52a8\n                this.pullMessageService.start();\n                // Start rebalance service\n                this.rebalanceService.start();\n                // Start push service\n                this.defaultMQProducer.getDefaultMQProducerImpl().start(false);\n                log.info("the client factory [{}] start OK", this.clientId);\n                this.serviceState = ServiceState.RUNNING;\n                break;\n            case START_FAILED:\n                throw new MQClientException("The Factory object[" + this.getClientId() + "] has been created before, and failed.", null);\n            default:\n                break;\n        }\n    }\n}\n')),(0,u.kt)("p",null,"\u4e0b\u9762\u770b\u4e00\u4e0b\u62c9\u53d6\u670d\u52a1 ",(0,u.kt)("strong",{parentName:"p"},(0,u.kt)("inlineCode",{parentName:"strong"},"PullMessageService#start"))," \u65b9\u6cd5\u4e2d\u505a\u4e86\u4e00\u4e9b\u4ec0\u4e48\u4e8b\u60c5\u3002 ",(0,u.kt)("strong",{parentName:"p"},(0,u.kt)("inlineCode",{parentName:"strong"},"PullMessageService"))," \u672c\u8d28\u662f\u4e00\u4e2a\u7ebf\u7a0b\u7684\u5b9e\u73b0\u7c7b\u5b9e\u73b0\u4e86 ",(0,u.kt)("strong",{parentName:"p"},(0,u.kt)("inlineCode",{parentName:"strong"},"Runnable"))," \uff0c\u6240\u4ee5\u8c03\u7528start\u65b9\u6cd5\u662f\u8c03\u7528\u4e86 ",(0,u.kt)("strong",{parentName:"p"},(0,u.kt)("inlineCode",{parentName:"strong"},"Thread#start"))," \u3002\u6700\u7ec8\u6267\u884c\u7684\u662f ",(0,u.kt)("strong",{parentName:"p"},(0,u.kt)("inlineCode",{parentName:"strong"},"PullMessageService#run"))," \u65b9\u6cd5\u3002\u903b\u8f91\u5728\u8fd9\u4e2a\u91cc\u9762\uff1a"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-java"},'public class PullMessageService extends ServiceThread {\n    private final InternalLogger log = ClientLogger.getLog();\n    //\u62c9\u53d6\u8bf7\u6c42\u7684\u963b\u585e\u961f\u5217\n    private final LinkedBlockingQueue<PullRequest> pullRequestQueue = new LinkedBlockingQueue<PullRequest>();\n    private final MQClientInstance mQClientFactory;\n    private final ScheduledExecutorService scheduledExecutorService = Executors\n        .newSingleThreadScheduledExecutor(new ThreadFactory() {\n            @Override\n            public Thread newThread(Runnable r) {\n                return new Thread(r, "PullMessageServiceScheduledThread");\n            }\n        });\n    \n    @Override\n    public void run() {\n        log.info(this.getServiceName() + " service started");\n\n        while (!this.isStopped()) {\n            try {\n                //\u5faa\u73af\u7684\u4ece\u963b\u585e\u961f\u5217\u4e2d\u83b7\u53d6PullRequest\n                PullRequest pullRequest = this.pullRequestQueue.take();\n                this.pullMessage(pullRequest);\n            } catch (InterruptedException ignored) {\n            } catch (Exception e) {\n                log.error("Pull Message Service Run Method exception", e);\n            }\n        }\n\n        log.info(this.getServiceName() + " service end");\n    }\n\n}\n')),(0,u.kt)("p",null," \u7136\u540e\u8c03\u7528\u4e86 ",(0,u.kt)("strong",{parentName:"p"},(0,u.kt)("inlineCode",{parentName:"strong"},"PullMessageService#pullMessage"))," \u79c1\u6709\u65b9\u6cd5\uff1a"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-java"},'private void pullMessage(final PullRequest pullRequest) {\n    final MQConsumerInner consumer = this.mQClientFactory.selectConsumer(pullRequest.getConsumerGroup());\n    if (consumer != null) {\n        DefaultMQPushConsumerImpl impl = (DefaultMQPushConsumerImpl) consumer;\n        impl.pullMessage(pullRequest);\n    } else {\n        log.warn("No matched consumer for the PullRequest {}, drop it", pullRequest);\n    }\n}\n')),(0,u.kt)("p",null,"\u6700\u7ec8\u8bf7\u6c42\u4e86 ",(0,u.kt)("strong",{parentName:"p"},(0,u.kt)("inlineCode",{parentName:"strong"},"DefaultMQPushConsumerImpl#pullMessage"))," \u65b9\u6cd5\u3002\u8fd9\u4e2a\u4f1a\u5728\u540e\u7eed\u8fdb\u884c\u5206\u6790\u3002"),(0,u.kt)("p",null,"\u5206\u6790\u5230\u8fd9\u91cc\u4f1a\u53d1\u73b0\u4e00\u4e2a\u95ee\u9898\uff0c",(0,u.kt)("strong",{parentName:"p"},(0,u.kt)("inlineCode",{parentName:"strong"},"PullMessageService"))," \u7c7b\u5b9e\u4f8b\u5316\u7684\u65f6\u5019 ",(0,u.kt)("strong",{parentName:"p"},(0,u.kt)("inlineCode",{parentName:"strong"},"pullRequestQueue"))," \u961f\u5217\u662f\u7a7a\u7684\u90a3\u4e48\u5728 ",(0,u.kt)("strong",{parentName:"p"},(0,u.kt)("inlineCode",{parentName:"strong"},"PullMessageService#run"))," \u65b9\u6cd5\u4e2d\u83b7\u53d6 ",(0,u.kt)("strong",{parentName:"p"},(0,u.kt)("inlineCode",{parentName:"strong"},"PullRequest"))," \u4f1a\u963b\u585e\u3002\u90a3\u4e48\u5728\u54ea\u91cc\u4f1a\u5c06 ",(0,u.kt)("strong",{parentName:"p"},(0,u.kt)("inlineCode",{parentName:"strong"},"PullRequest"))," \u52a0\u5165\u5230\u961f\u5217\u4e2d\u3002\u5728 ",(0,u.kt)("strong",{parentName:"p"},(0,u.kt)("inlineCode",{parentName:"strong"},"PullMessageService"))," \u4e2d\u8fd8\u6709\u51e0\u4e2a\u91cd\u8981\u7684\u65b9\u6cd5\uff0c\u8fd9\u4e9b\u65b9\u6cd5\u5c31\u662f\u5411\u961f\u5217\u4e2d\u6dfb\u52a0 ",(0,u.kt)("strong",{parentName:"p"},(0,u.kt)("inlineCode",{parentName:"strong"},"PullRequest"))," \uff1a"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-java"},'public class PullMessageService extends ServiceThread {\n    \n    //\u5ef6\u8fdf\u52a0\u5165\n    public void executePullRequestLater(final PullRequest pullRequest, final long timeDelay) {\n        if (!isStopped()) {\n            this.scheduledExecutorService.schedule(new Runnable() {\n                @Override\n                public void run() {\n                    PullMessageService.this.executePullRequestImmediately(pullRequest);\n                }\n            }, timeDelay, TimeUnit.MILLISECONDS);\n        } else {\n            log.warn("PullMessageServiceScheduledThread has shutdown");\n        }\n    }\n\n    //\u7acb\u9a6c\u52a0\u5165\n    public void executePullRequestImmediately(final PullRequest pullRequest) {\n        try {\n            this.pullRequestQueue.put(pullRequest);\n        } catch (InterruptedException e) {\n            log.error("executePullRequestImmediately pullRequestQueue.put", e);\n        }\n    }\n\n}\n')),(0,u.kt)("h3",{id:"3-pullrequest\u653e\u5165\u961f\u5217"},"3. PullRequest\u653e\u5165\u961f\u5217"),(0,u.kt)("p",null,"\u9996\u5148\u6211\u4eec\u901a\u8fc7\u5f00\u53d1\u5de5\u5177\u6765\u770b\u4e0b\u8c03\u7528\u94fe\uff1a"),(0,u.kt)("p",null,(0,u.kt)("img",{parentName:"p",src:"https://github.com/mxsm/picture/blob/main/rocketmq/putPullRequest.png?raw=true",alt:null})),(0,u.kt)("p",null,"\u901a\u8fc7\u5206\u6790\u8c03\u7528\u94fe\u53d1\u73b0\u662f ",(0,u.kt)("strong",{parentName:"p"},(0,u.kt)("inlineCode",{parentName:"strong"},"RebalanceService#run"))," \u65b9\u6cd5\u3002\u6700\u7ec8\u5c06 ",(0,u.kt)("strong",{parentName:"p"},(0,u.kt)("inlineCode",{parentName:"strong"},"PullRequest"))," \u5b58\u653e\u5230\u961f\u5217\u3002"),(0,u.kt)("h3",{id:"4-pullrequest\u5904\u7406"},"4. PullRequest\u5904\u7406"),(0,u.kt)("p",null,"\u4ece\u963b\u585e\u961f\u5217\u4e2d\u53d6\u51fa ",(0,u.kt)("strong",{parentName:"p"},(0,u.kt)("inlineCode",{parentName:"strong"},"PullRequest"))," ,\u8c03\u7528 ",(0,u.kt)("strong",{parentName:"p"},(0,u.kt)("inlineCode",{parentName:"strong"},"PullMessageService#pullMessage"))," \u65b9\u6cd5\u3002"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-java"},'private void pullMessage(final PullRequest pullRequest) {\n    final MQConsumerInner consumer = this.mQClientFactory.selectConsumer(pullRequest.getConsumerGroup());\n    if (consumer != null) {\n        DefaultMQPushConsumerImpl impl = (DefaultMQPushConsumerImpl) consumer;\n        impl.pullMessage(pullRequest);\n    } else {\n        log.warn("No matched consumer for the PullRequest {}, drop it", pullRequest);\n    }\n}\n')),(0,u.kt)("p",null," \u901a\u8fc7\u4ee3\u7801\u8ddf\u8e2a\u53ef\u4ee5\u53d1\u73b0\u6700\u7ec8\u662f\u901a\u8fc7 ",(0,u.kt)("strong",{parentName:"p"},(0,u.kt)("inlineCode",{parentName:"strong"},"DefaultMQPushConsumerImpl#pullMessage"))," \u6765\u5904\u7406\u3002"),(0,u.kt)("h3",{id:"5-defaultmqpushconsumerimplpullmessage"},"5. DefaultMQPushConsumerImpl#pullMessage"),(0,u.kt)("p",null,"\u8fd9\u4e2a\u65b9\u6cd5\u4e3b\u8981\u7528\u6765\u5904\u7406\u62c9\u53d6\u6d88\u606f\u548c\u5904\u7406\uff0c\u540c\u65f6\u5728\u8fd9\u4e2a\u65b9\u6cd5\u4e2d\u8fd8\u6709\u4e00\u4e9b\u6d41\u91cf\u63a7\u5236(\u4e13\u95e8\u7528\u4e00\u4e2a\u7bc7\u7ae0\u53bb\u5206\u6790\u8bf4\u660e)\u7b49\u7b49\u3002\u5728\n",(0,u.kt)("strong",{parentName:"p"},"DefaultMQPushConsumerImpl#pullMessage")," \u65b9\u6cd5\u4e2d\u6709\u4e00\u4e2a ",(0,u.kt)("strong",{parentName:"p"},"PullCallback")," \u56de\u8c03\u63a5\u53e3\uff0c\u91cc\u9762\u5904\u7406\u6d88\u606f\u62c9\u53d6\u6210\u529f\u540e\u56de\u8c03\u7684\u5904\u7406,\u4e0b\u9762\u770b\u4e00\u4e0b ",(0,u.kt)("strong",{parentName:"p"},"pullResult.getPullStatus()")," \u4e3a ",(0,u.kt)("strong",{parentName:"p"},"FOUND")," \u7684\u72b6\u6001(\u8868\u793a\u62c9\u53d6\u5230\u4e86\u6d88\u606f)\uff1a"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-java"},'case FOUND:\n    long prevRequestOffset = pullRequest.getNextOffset();\n    pullRequest.setNextOffset(pullResult.getNextBeginOffset());\n    long pullRT = System.currentTimeMillis() - beginTimestamp;\n    //\u6d88\u606f\u62c9\u53d6\u82b1\u8d39\u7684\u65f6\u95f4\n    DefaultMQPushConsumerImpl.this.getConsumerStatsManager().incPullRT(pullRequest.getConsumerGroup(),\n        pullRequest.getMessageQueue().getTopic(), pullRT);\n\n    long firstMsgOffset = Long.MAX_VALUE;\n    //\u62c9\u53d6\u7ed3\u679c\u6d88\u606f\u5217\u8868\u4e3a\u7a7a\uff0c\u5c06\u8bf7\u6c42\u91cd\u65b0\u653e\u5165\u6d88\u606f\u62c9\u53d6\u8bf7\u6c42\u963b\u585e\u961f\u5217\n    if (pullResult.getMsgFoundList() == null || pullResult.getMsgFoundList().isEmpty()) {\n        DefaultMQPushConsumerImpl.this.executePullRequestImmediately(pullRequest);\n    } else {\n        firstMsgOffset = pullResult.getMsgFoundList().get(0).getQueueOffset();\n        //\u6d88\u8d39\u8005\u6d88\u606f\u589e\u52a0\u6570\u91cf\n        DefaultMQPushConsumerImpl.this.getConsumerStatsManager().incPullTPS(pullRequest.getConsumerGroup(),\n            pullRequest.getMessageQueue().getTopic(), pullResult.getMsgFoundList().size());\n        //\u662f\u5426\u5206\u914d\u6d88\u8d39--\u987a\u5e8f\u6d88\u8d39\u5904\u7406\n        boolean dispatchToConsume = processQueue.putMessage(pullResult.getMsgFoundList());\n        //\u6d88\u8d39\u6d88\u606f\u670d\u52a1\u6d88\u8d39\u6d88\u606f\n        DefaultMQPushConsumerImpl.this.consumeMessageService.submitConsumeRequest(\n            pullResult.getMsgFoundList(),\n            processQueue,\n            pullRequest.getMessageQueue(),\n            dispatchToConsume);\n\n        //\u6d88\u8d39\u5b8c\u6210\u5c06\u62c9\u53d6\u8bf7\u6c42\u91cd\u65b0\u653e\u5165\u8bf7\u6c42\u961f\u5217\u4e2d\n        if (DefaultMQPushConsumerImpl.this.defaultMQPushConsumer.getPullInterval() > 0) {\n            DefaultMQPushConsumerImpl.this.executePullRequestLater(pullRequest,\n                DefaultMQPushConsumerImpl.this.defaultMQPushConsumer.getPullInterval());\n        } else {\n            DefaultMQPushConsumerImpl.this.executePullRequestImmediately(pullRequest);\n        }\n    }\n\n    if (pullResult.getNextBeginOffset() < prevRequestOffset\n        || firstMsgOffset < prevRequestOffset) {\n        log.warn(\n            "[BUG] pull message result maybe data wrong, nextBeginOffset: {} firstMsgOffset: {} prevRequestOffset: {}",\n            pullResult.getNextBeginOffset(),\n            firstMsgOffset,\n            prevRequestOffset);\n    }\n\n    break;\n')),(0,u.kt)("p",null,"\u5728\u62c9\u53d6\u6210\u529f\u540e\u72b6\u6001\u4e3a ",(0,u.kt)("strong",{parentName:"p"},"FOUND"),"\uff1a  "),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"\u7edf\u8ba1\u62c9\u53d6\u6d88\u606f\u82b1\u8d39\u7684\u65f6\u95f4"),(0,u.kt)("li",{parentName:"ul"},"\u5224\u65ad\u62c9\u53d6\u7684\u6d88\u606f\u662f\u5426\u6709\uff0c\u6ca1\u6709\u5c06PullRequest\u8bf7\u6c42\u653e\u5165\u8bf7\u6c42\u961f\u5217\u4e2d"),(0,u.kt)("li",{parentName:"ul"},"\u5904\u7406\u62c9\u53d6\u7684\u6d88\u8d39\u7ec4\u3001Topic\u6d88\u606f\u7684\u589e\u52a0"),(0,u.kt)("li",{parentName:"ul"},"\u7531ConsumeMessageService\u670d\u52a1\u6765\u6d88\u8d39\u6d88\u606f(\u6839\u636e\u4e0d\u540c\u7684\u6d88\u606f\u7c7b\u578b\u8c03\u7528\u4e0d\u540c\u7684\u6d88\u8d39\u8005\u5b9e\u4f8b)"),(0,u.kt)("li",{parentName:"ul"},"\u6839\u636e\u662f\u5426\u9700\u8981\u5ef6\u8fdf\u5c06PullRequest\u653e\u5165\u961f\u5217")),(0,u.kt)("h3",{id:"6-consumemessageconcurrentlyservicesubmitconsumerequest"},"6. ConsumeMessageConcurrentlyService#submitConsumeRequest"),(0,u.kt)("p",null,"\u901a\u8fc7\u5224\u65ad\u6d88\u8d39\u8005\u542f\u52a8\u7684\u65f6\u5019\u8bbe\u7f6e\u7684\u6d88\u8d39\u6700\u5927\u7684\u6d88\u8d39\u7684\u6570\u91cf(\u9ed8\u8ba4\u4e3a1)\uff0c"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-java"},"@Override\npublic void submitConsumeRequest(\n    final List<MessageExt> msgs,\n    final ProcessQueue processQueue,\n    final MessageQueue messageQueue,\n    final boolean dispatchToConsume) {\n    final int consumeBatchSize = this.defaultMQPushConsumer.getConsumeMessageBatchMaxSize();\n    if (msgs.size() <= consumeBatchSize) {\n        //\u6784\u5efa\u6d88\u8d39\u8bf7\u6c42\n        ConsumeRequest consumeRequest = new ConsumeRequest(msgs, processQueue, messageQueue);\n        try {\n            //\u63d0\u4ea4\u7ebf\u7a0b\u6c60\u6267\u884c\u6d88\u8d39\n            this.consumeExecutor.submit(consumeRequest);\n        } catch (RejectedExecutionException e) {\n            //\u7ebf\u7a0b\u6c60\u6ee1\u4e86\u5ef6\u8fdf\uff0c\u968f\u540e\u5ef6\u8fdf\u6dfb\u52a0\n            this.submitConsumeRequestLater(consumeRequest);\n        }\n    }\n    \n    //\u7701\u7565\u90e8\u5206\u4ee3\u7801\n}\n")),(0,u.kt)("p",null,"\u6784\u5efa\u6279\u91cf\u6d88\u8d39\u7684\u8bf7\u6c42\uff1a"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-java"},"for (int total = 0; total < msgs.size(); ) {\n    List<MessageExt> msgThis = new ArrayList<MessageExt>(consumeBatchSize);\n    //\u6784\u5efa\u6d88\u606f\u5217\u8868\n    for (int i = 0; i < consumeBatchSize; i++, total++) {\n        if (total < msgs.size()) {\n            msgThis.add(msgs.get(total));\n        } else {\n            break;\n        }\n    }\n    //\u6784\u5efa\u6d88\u8d39\u8bf7\u6c42\n    ConsumeRequest consumeRequest = new ConsumeRequest(msgThis, processQueue, messageQueue);\n    try {\n        this.consumeExecutor.submit(consumeRequest);\n    } catch (RejectedExecutionException e) {\n        //\u5c06\u6240\u6709\u5269\u4e0b\u7684\u6570\u636e\u90fd\u52a0\u5165\u5217\u8868\n        for (; total < msgs.size(); total++) {\n            msgThis.add(msgs.get(total));\n        }\n        //\u5ef6\u8fdf\u63d0\u4ea4\u8bf7\u6c42\u5230\u7ebf\u7a0b\u6c60\n        this.submitConsumeRequestLater(consumeRequest);\n    }\n}\n")),(0,u.kt)("p",null,"submitConsumeRequest\u65b9\u6cd5\u4e3b\u8981\u662f\u6784\u5efaConsumeRequest\u63d0\u4ea4\u5230\u6d88\u8d39\u7ebf\u7a0b\u6c60\u4e2d\u5bf9\u6d88\u606f\u8fdb\u884c\u6d88\u8d39\u3002"),(0,u.kt)("h3",{id:"7-consumerequest\u6e90\u7801\u89e3\u6790"},"7. ConsumeRequest\u6e90\u7801\u89e3\u6790"),(0,u.kt)("p",null,"ConsumeRequest\u5b9e\u73b0\u4e86Runnable\uff0c\u6240\u4ee5\u6240\u6709\u7684\u903b\u8f91\u90fd\u5728run\u65b9\u6cd5\u4e2d\uff0c\u4e0b\u9762\u6765\u5206\u6790\u4e00\u4e0b\u903b\u8f91\uff1a"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-java"},"MessageListenerConcurrently listener = ConsumeMessageConcurrentlyService.this.messageListener;\nConsumeConcurrentlyContext context = new ConsumeConcurrentlyContext(messageQueue);\nConsumeConcurrentlyStatus status = null;\ndefaultMQPushConsumerImpl.resetRetryAndNamespace(msgs, defaultMQPushConsumer.getConsumerGroup());\n\nConsumeMessageContext consumeMessageContext = null;\nif (ConsumeMessageConcurrentlyService.this.defaultMQPushConsumerImpl.hasHook()) {\n    consumeMessageContext = new ConsumeMessageContext();\n    consumeMessageContext.setNamespace(defaultMQPushConsumer.getNamespace());\n    consumeMessageContext.setConsumerGroup(defaultMQPushConsumer.getConsumerGroup());\n    consumeMessageContext.setProps(new HashMap<String, String>());\n    consumeMessageContext.setMq(messageQueue);\n    consumeMessageContext.setMsgList(msgs);\n    consumeMessageContext.setSuccess(false);\n    ConsumeMessageConcurrentlyService.this.defaultMQPushConsumerImpl.executeHookBefore(consumeMessageContext);\n}\n")),(0,u.kt)("p",null,"\u5bf9\u6d88\u606f\u62c9\u53d6\u8fdb\u884c\u8bbe\u7f6e\uff0c\u4ee5\u53ca\u8bbe\u7f6eHook\u6267\u884c\u524d\u6267\u884cConsumeMessageContext\uff0c"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-java"},'long beginTimestamp = System.currentTimeMillis();\nboolean hasException = false;\nConsumeReturnType returnType = ConsumeReturnType.SUCCESS;\ntry {\n    if (msgs != null && !msgs.isEmpty()) {\n        //\u8bbe\u7f6e\u6d88\u8d39\u5f00\u59cb\u65f6\u95f4\n        for (MessageExt msg : msgs) {\n            MessageAccessor.setConsumeStartTimeStamp(msg, String.valueOf(System.currentTimeMillis()));\n        }\n    }\n    //\u6d88\u8d39\u6d88\u606f---\u4e5f\u5c31\u4e1a\u52a1\u903b\u8f91\n    status = listener.consumeMessage(Collections.unmodifiableList(msgs), context);\n} catch (Throwable e) {\n    log.warn("consumeMessage exception: {} Group: {} Msgs: {} MQ: {}",\n        RemotingHelper.exceptionSimpleDesc(e),\n        ConsumeMessageConcurrentlyService.this.consumerGroup,\n        msgs,\n        messageQueue);\n    hasException = true;\n}\nlong consumeRT = System.currentTimeMillis() - beginTimestamp;\n')),(0,u.kt)("p",null,"\u4e0a\u9762\u7684\u4ee3\u7801\u4e3b\u8981\u662f\u6211\u4eec\u5199\u5728 ",(0,u.kt)("strong",{parentName:"p"},"MessageListenerConcurrently")," \u4e2d\u7684\u6d88\u8d39\u4e1a\u52a1\u903b\u8f91\u3002\u901a\u8fc7\u6d88\u8d39\u72b6\u6001\u6765\u5224\u65ad\u6d88\u606f\u7684\u540e\u7eed\u5904\u7406\u3002"),(0,u.kt)("blockquote",null,(0,u.kt)("p",{parentName:"blockquote"},"\u8fd9\u91cc\u6709\u5728\u6d88\u8d39\u62a5\u9519\u7684\u60c5\u51b5\u4e0b\u7684\u5904\u7406hasException = true")),(0,u.kt)("p",null,"\u4e0b\u9762\u770b\u4e00\u4e0b\u4e0d\u540c\u72b6\u6001\u4e0b\u8fd4\u56de\u7684returnType:"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-java"},' long consumeRT = System.currentTimeMillis() - beginTimestamp;\n if (null == status) {\n     if (hasException) {\n         returnType = ConsumeReturnType.EXCEPTION;\n     } else {\n         returnType = ConsumeReturnType.RETURNNULL;\n     }\n } else if (consumeRT >= defaultMQPushConsumer.getConsumeTimeout() * 60 * 1000) {\n     returnType = ConsumeReturnType.TIME_OUT;\n } else if (ConsumeConcurrentlyStatus.RECONSUME_LATER == status) {\n     returnType = ConsumeReturnType.FAILED;\n } else if (ConsumeConcurrentlyStatus.CONSUME_SUCCESS == status) {\n     returnType = ConsumeReturnType.SUCCESS;\n }\n\n if (ConsumeMessageConcurrentlyService.this.defaultMQPushConsumerImpl.hasHook()) {\n     consumeMessageContext.getProps().put(MixAll.CONSUME_CONTEXT_TYPE, returnType.name());\n }\n\n if (null == status) {\n     log.warn("consumeMessage return null, Group: {} Msgs: {} MQ: {}",\n         ConsumeMessageConcurrentlyService.this.consumerGroup,\n         msgs,\n         messageQueue);\n     status = ConsumeConcurrentlyStatus.RECONSUME_LATER;\n }\n')),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"MessageListenerConcurrently")," \u76d1\u542c\u4e3b\u8981\u8fd4\u56de ",(0,u.kt)("strong",{parentName:"p"},"ConsumeConcurrentlyStatus.CONSUME_SUCCESS")," \u548c ",(0,u.kt)("strong",{parentName:"p"},"ConsumeConcurrentlyStatus.RECONSUME_LATER")," \u4e24\u79cd\u6d88\u8d39\u7c7b\u578b\u3002\u6839\u636e\u4e0d\u540c\u7684\u72b6\u6001\u63a5\u4e0b\u6765\u5904\u7406\u6d88\u8d39\u540e\u7684\u7ed3\u679c\uff0c ",(0,u.kt)("strong",{parentName:"p"},"ConsumeMessageConcurrentlyService#processConsumeResult")," \u6700\u7ec8\u5904\u7406\u6d88\u8d39\u540e\u7684\u6d88\u606f\u3002\u63a5\u4e0b\u6765\u770b\u770b\u7ed3\u679c\u7684\u5904\u7406\uff1a"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-java"},"switch (status) {\n    case CONSUME_SUCCESS:\n        if (ackIndex >= consumeRequest.getMsgs().size()) {\n            ackIndex = consumeRequest.getMsgs().size() - 1;\n        }\n        int ok = ackIndex + 1;\n        int failed = consumeRequest.getMsgs().size() - ok;\n        this.getConsumerStatsManager().incConsumeOKTPS(consumerGroup, consumeRequest.getMessageQueue().getTopic(), ok);\n        this.getConsumerStatsManager().incConsumeFailedTPS(consumerGroup, consumeRequest.getMessageQueue().getTopic(), failed);\n        break;\n    case RECONSUME_LATER:\n        ackIndex = -1;\n        this.getConsumerStatsManager().incConsumeFailedTPS(consumerGroup, consumeRequest.getMessageQueue().getTopic(),\n            consumeRequest.getMsgs().size());\n        break;\n    default:\n        break;\n}\n")),(0,u.kt)("p",null,"\u7b2c\u4e00\u90e8\u5206\u5904\u7406\u6d88\u606f\u7684ackIdex\u548c\u5904\u7406\u6d88\u606f\u7684TPS\u7b49\u3002\u5904\u7406\u5b8c\u6210\u540e\u63a5\u4e0b\u6765\u5904\u7406\u6839\u636e\u4e0d\u540c\u7684\u6d88\u8d39\u7c7b\u578b:"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"\u96c6\u7fa4\u6d88\u8d39"),(0,u.kt)("li",{parentName:"ul"},"\u5e7f\u64ad\u6d88\u8d39")),(0,u.kt)("p",null,"\u4e24\u79cd\u60c5\u51b5\uff1a"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-java"},'switch (this.defaultMQPushConsumer.getMessageModel()) {\n    case BROADCASTING: //\u5e7f\u64ad\u6d88\u8d39\n        for (int i = ackIndex + 1; i < consumeRequest.getMsgs().size(); i++) {\n            MessageExt msg = consumeRequest.getMsgs().get(i);\n            log.warn("BROADCASTING, the message consume failed, drop it, {}", msg.toString());\n        }\n        break;\n    case CLUSTERING: //\u96c6\u7fa4\u6d88\u8d39--\u5904\u7406\u6d88\u8d39\u5931\u8d25\u7684\u6570\u636e\n        List<MessageExt> msgBackFailed = new ArrayList<MessageExt>(consumeRequest.getMsgs().size());\n        for (int i = ackIndex + 1; i < consumeRequest.getMsgs().size(); i++) {\n            MessageExt msg = consumeRequest.getMsgs().get(i);\n            //\u5c06\u6d88\u606f\u91cd\u65b0\u53d1\u56de\n            boolean result = this.sendMessageBack(msg, context);\n            if (!result) {\n                msg.setReconsumeTimes(msg.getReconsumeTimes() + 1);\n                msgBackFailed.add(msg);\n            }\n        }\n        if (!msgBackFailed.isEmpty()) {\n            consumeRequest.getMsgs().removeAll(msgBackFailed);\n            this.submitConsumeRequestLater(msgBackFailed, consumeRequest.getProcessQueue(), consumeRequest.getMessageQueue());\n        }\n        break;\n    default:\n        break;\n}\n')),(0,u.kt)("p",null,"\u5728\u96c6\u7fa4\u6d88\u8d39\u540e\u5c06\u6d88\u8d39\u5931\u8d25\u7684\u6d88\u606f\u53d1\u9001\u56de\u53bbBroker\u3002\u7528\u6765\u7ed9\u540e\u7eed\u7684\u8fdb\u884c\u91cd\u590d\u6d88\u8d39"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-java"},"long offset = consumeRequest.getProcessQueue().removeMessage(consumeRequest.getMsgs());\nif (offset >= 0 && !consumeRequest.getProcessQueue().isDropped()) {\n    this.defaultMQPushConsumerImpl.getOffsetStore().updateOffset(consumeRequest.getMessageQueue(), offset, true);\n}\n")),(0,u.kt)("p",null,"\u6d88\u8d39\u8fdb\u5ea6\uff0c\u901a\u8fc7\u4e00\u4e2aTreeMap\u5c06\u6570\u636e\u7684\u5220\u9664\u6d88\u8d39\u7684\u6d88\u606f\u7684\u504f\u79fb\u91cf\u3002\u7136\u540e\u83b7\u53d6\u7b2c\u4e00\u4e2akey\u8fd9\u4e2a\u5c31\u662f\u672a\u6d88\u8d39\u7684\u6700\u5c0f\u504f\u79fb\u91cf\u3002"))}p.isMDXComponent=!0}}]);