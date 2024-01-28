"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[9229],{7194:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var r=t(5893),c=t(1151);const s={title:"RocketMQ\u6e90\u7801\u89e3\u6790-\u6d88\u8d39\u8005\u5b9a\u65f6\u4efb\u52a1\u89e3\u6790",date:new Date("2021-06-13T00:00:00.000Z"),weight:202106102131},o=void 0,i={id:"rocketmq/rocketmq4/consumer/RocketMQ-analysis-consumer-scheduledtask",title:"RocketMQ\u6e90\u7801\u89e3\u6790-\u6d88\u8d39\u8005\u5b9a\u65f6\u4efb\u52a1\u89e3\u6790",description:"\u4ee5\u4e0b\u6e90\u7801\u57fa\u4e8eRocketMQ 4.8.0",source:"@site/docs/rocketmq/rocketmq4/consumer/RocketMQ-analysis-consumer-scheduledtask.md",sourceDirName:"rocketmq/rocketmq4/consumer",slug:"/rocketmq/rocketmq4/consumer/RocketMQ-analysis-consumer-scheduledtask",permalink:"/docs/rocketmq/rocketmq4/consumer/RocketMQ-analysis-consumer-scheduledtask",draft:!1,unlisted:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/rocketmq/rocketmq4/consumer/RocketMQ-analysis-consumer-scheduledtask.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1706451902,formattedLastUpdatedAt:"Jan 28, 2024",frontMatter:{title:"RocketMQ\u6e90\u7801\u89e3\u6790-\u6d88\u8d39\u8005\u5b9a\u65f6\u4efb\u52a1\u89e3\u6790",date:"2021-06-13T00:00:00.000Z",weight:202106102131},sidebar:"rocketmq4",previous:{title:"RocketMQ\u6e90\u7801\u89e3\u6790-\u6d88\u8d39\u8005\u91cd\u590d\u6d88\u8d39",permalink:"/docs/rocketmq/rocketmq4/consumer/RocketMQ-analysis-consumer-repeat-consume"},next:{title:"RocketMQ\u6e90\u7801\u89e3\u6790-\u6d88\u8d39\u8005\u6d88\u8d39\u7b56\u7565\u6e90\u7801\u89e3\u6790",permalink:"/docs/rocketmq/rocketmq4/consumer/RocketMQ-analysis-consumer-strategy"}},a={},l=[{value:"1. \u8bfb\u53d6Namesrv\u5730\u5740",id:"1-\u8bfb\u53d6namesrv\u5730\u5740",level:3},{value:"2. \u4eceNamesrv\u66f4\u65b0Topic\u8def\u7531\u4fe1\u606f",id:"2-\u4ecenamesrv\u66f4\u65b0topic\u8def\u7531\u4fe1\u606f",level:3},{value:"3. \u6e05\u9664\u79bb\u7ebfBroker\u548c\u53d1\u9001\u5fc3\u8df3\u7ed9Broker",id:"3-\u6e05\u9664\u79bb\u7ebfbroker\u548c\u53d1\u9001\u5fc3\u8df3\u7ed9broker",level:3},{value:"4. \u6301\u4e45\u5316\u6d88\u8d39\u8fdb\u5ea6",id:"4-\u6301\u4e45\u5316\u6d88\u8d39\u8fdb\u5ea6",level:3},{value:"5. \u7ebf\u7a0b\u6c60\u9002\u914d",id:"5-\u7ebf\u7a0b\u6c60\u9002\u914d",level:3}];function d(e){const n={blockquote:"blockquote",code:"code",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,c.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"\u4ee5\u4e0b\u6e90\u7801\u57fa\u4e8eRocketMQ 4.8.0"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u5728\u5206\u6790\u6d88\u8d39\u8005\u542f\u52a8\u6d88\u8d39\u7684\u65f6\u5019\u6211\u4eec\u770b\u5230\u4e86\uff0c\u5728\u672c\u5730\u542f\u52a8\u4e00\u7cfb\u5217\u7684\u5b9a\u65f6\u4efb\u52a1\u3002\u4e0b\u9762\u5c31\u6765\u5206\u6790\u8fd9\u4e9b\u5b9a\u65f6\u4efb\u52a1\u7684\u4f5c\u7528\u5728\u6574\u4e2a\u6d88\u8d39\u7684\u8fc7\u7a0b\u4e2d\u3002\u5b9a\u65f6\u4efb\u52a1\u542f\u52a8\u5728 ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"MQClientInstance#startScheduledTask"})})," \u65b9\u6cd5\u4e2d\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"1-\u8bfb\u53d6namesrv\u5730\u5740",children:"1. \u8bfb\u53d6Namesrv\u5730\u5740"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'if (null == this.clientConfig.getNamesrvAddr()) {\n    this.scheduledExecutorService.scheduleAtFixedRate(new Runnable() {\n\n        @Override\n        public void run() {\n            try {\n                MQClientInstance.this.mQClientAPIImpl.fetchNameServerAddr();\n            } catch (Exception e) {\n                log.error("ScheduledTask fetchNameServerAddr exception", e);\n            }\n        }\n    }, 1000 * 10, 1000 * 60 * 2, TimeUnit.MILLISECONDS);\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u8bf4\u660e: \u5ef6\u8fdf10\u79d2\u6267\u884c\uff0c\u6bcf\u4e24\u5206\u949f\u83b7\u53d6\u4e00\u6b21Namesrv\u7684\u5730\u5740(\u5728NamesrvAddr\u4e3a\u7a7a\u7684\u60c5\u51b5\u4e0b)"}),"\n",(0,r.jsx)(n.h3,{id:"2-\u4ecenamesrv\u66f4\u65b0topic\u8def\u7531\u4fe1\u606f",children:"2. \u4eceNamesrv\u66f4\u65b0Topic\u8def\u7531\u4fe1\u606f"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'this.scheduledExecutorService.scheduleAtFixedRate(new Runnable() {\n\n    @Override\n    public void run() {\n        try {\n            MQClientInstance.this.updateTopicRouteInfoFromNameServer();\n        } catch (Exception e) {\n            log.error("ScheduledTask updateTopicRouteInfoFromNameServer exception", e);\n        }\n    }\n}, 10, this.clientConfig.getPollNameServerInterval(), TimeUnit.MILLISECONDS);\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u8bf4\u660e\uff1a\u9ed8\u8ba4\u6bcf30\u79d2\u66f4\u65b0\u4e00\u6b21Topic\u8def\u7531\u4fe1\u606f"}),"\n",(0,r.jsx)(n.h3,{id:"3-\u6e05\u9664\u79bb\u7ebfbroker\u548c\u53d1\u9001\u5fc3\u8df3\u7ed9broker",children:"3. \u6e05\u9664\u79bb\u7ebfBroker\u548c\u53d1\u9001\u5fc3\u8df3\u7ed9Broker"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'this.scheduledExecutorService.scheduleAtFixedRate(new Runnable() {\n    @Override\n    public void run() {\n        try {\n            MQClientInstance.this.cleanOfflineBroker();\n            MQClientInstance.this.sendHeartbeatToAllBrokerWithLock();\n        } catch (Exception e) {\n            log.error("ScheduledTask sendHeartbeatToAllBroker exception", e);\n        }\n    }\n}, 1000, this.clientConfig.getHeartbeatBrokerInterval(), TimeUnit.MILLISECONDS);\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u8bf4\u660e\uff1a\u9ed8\u8ba4\u6bcf30\u79d2\u6e05\u9664\u4e00\u6b21\u79bb\u7ebf\u7684Broker,\u7ed9\u6240\u6709\u7684Broker\u53d1\u9001\u5fc3\u8df3"}),"\n",(0,r.jsx)(n.h3,{id:"4-\u6301\u4e45\u5316\u6d88\u8d39\u8fdb\u5ea6",children:"4. \u6301\u4e45\u5316\u6d88\u8d39\u8fdb\u5ea6"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'this.scheduledExecutorService.scheduleAtFixedRate(new Runnable() {\n    @Override\n    public void run() {\n        try {\n            MQClientInstance.this.persistAllConsumerOffset();\n        } catch (Exception e) {\n            log.error("ScheduledTask persistAllConsumerOffset exception", e);\n        }\n    }\n}, 1000 * 10, this.clientConfig.getPersistConsumerOffsetInterval(), TimeUnit.MILLISECONDS);\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u8bf4\u660e\uff1a\u9ed8\u8ba4\u6bcf5\u79d2\u949f\u6301\u4e45\u5316\u4e00\u6b21\u6d88\u8d39\u8fdb\u5ea6\u3002(\u6b63\u5e38\u5173\u95ed\u7684\u65f6\u5019\u56de\u4e5f\u4f1a\u6301\u4e45\u5316)"}),"\n",(0,r.jsx)(n.h3,{id:"5-\u7ebf\u7a0b\u6c60\u9002\u914d",children:"5. \u7ebf\u7a0b\u6c60\u9002\u914d"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'this.scheduledExecutorService.scheduleAtFixedRate(new Runnable() {\n    @Override\n    public void run() {\n        try {\n            MQClientInstance.this.adjustThreadPool();\n        } catch (Exception e) {\n            log.error("ScheduledTask adjustThreadPool exception", e);\n        }\n    }\n}, 1, 1, TimeUnit.MINUTES);\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u8bf4\u660e:\u6bcf\u4e00\u5206\u949f\u9002\u914d\u4e00\u6b21"})]})}function u(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>o});var r=t(7294);const c={},s=r.createContext(c);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);