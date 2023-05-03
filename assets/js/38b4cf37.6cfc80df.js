"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[9229],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>k});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),i=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=i(r),p=o,k=d["".concat(s,".").concat(p)]||d[p]||m[p]||a;return r?n.createElement(k,c(c({ref:t},u),{},{components:r})):n.createElement(k,c({ref:t},u))}));function k(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,c[1]=l;for(var i=2;i<a;i++)c[i]=r[i];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},5016:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>i});var n=r(7462),o=(r(7294),r(3905));const a={title:"RocketMQ\u6e90\u7801\u89e3\u6790-\u6d88\u8d39\u8005\u5b9a\u65f6\u4efb\u52a1\u89e3\u6790",date:new Date("2021-06-13T00:00:00.000Z"),weight:202106102131},c=void 0,l={unversionedId:"rocketmq/rocketmq4/consumer/RocketMQ-analysis-consumer-scheduledtask",id:"rocketmq/rocketmq4/consumer/RocketMQ-analysis-consumer-scheduledtask",title:"RocketMQ\u6e90\u7801\u89e3\u6790-\u6d88\u8d39\u8005\u5b9a\u65f6\u4efb\u52a1\u89e3\u6790",description:"\u4ee5\u4e0b\u6e90\u7801\u57fa\u4e8eRocketMQ 4.8.0",source:"@site/docs/rocketmq/rocketmq4/consumer/RocketMQ-analysis-consumer-scheduledtask.md",sourceDirName:"rocketmq/rocketmq4/consumer",slug:"/rocketmq/rocketmq4/consumer/RocketMQ-analysis-consumer-scheduledtask",permalink:"/docs/rocketmq/rocketmq4/consumer/RocketMQ-analysis-consumer-scheduledtask",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/rocketmq/rocketmq4/consumer/RocketMQ-analysis-consumer-scheduledtask.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1683078484,formattedLastUpdatedAt:"May 3, 2023",frontMatter:{title:"RocketMQ\u6e90\u7801\u89e3\u6790-\u6d88\u8d39\u8005\u5b9a\u65f6\u4efb\u52a1\u89e3\u6790",date:"2021-06-13T00:00:00.000Z",weight:202106102131},sidebar:"rocketmq4",previous:{title:"RocketMQ\u6e90\u7801\u89e3\u6790-\u6d88\u8d39\u8005\u91cd\u590d\u6d88\u8d39",permalink:"/docs/rocketmq/rocketmq4/consumer/RocketMQ-analysis-consumer-repeat-consume"},next:{title:"RocketMQ\u6e90\u7801\u89e3\u6790-\u6d88\u8d39\u8005\u6d88\u8d39\u7b56\u7565\u6e90\u7801\u89e3\u6790",permalink:"/docs/rocketmq/rocketmq4/consumer/RocketMQ-analysis-consumer-strategy"}},s={},i=[{value:"1. \u8bfb\u53d6Namesrv\u5730\u5740",id:"1-\u8bfb\u53d6namesrv\u5730\u5740",level:3},{value:"2. \u4eceNamesrv\u66f4\u65b0Topic\u8def\u7531\u4fe1\u606f",id:"2-\u4ecenamesrv\u66f4\u65b0topic\u8def\u7531\u4fe1\u606f",level:3},{value:"3. \u6e05\u9664\u79bb\u7ebfBroker\u548c\u53d1\u9001\u5fc3\u8df3\u7ed9Broker",id:"3-\u6e05\u9664\u79bb\u7ebfbroker\u548c\u53d1\u9001\u5fc3\u8df3\u7ed9broker",level:3},{value:"4. \u6301\u4e45\u5316\u6d88\u8d39\u8fdb\u5ea6",id:"4-\u6301\u4e45\u5316\u6d88\u8d39\u8fdb\u5ea6",level:3},{value:"5. \u7ebf\u7a0b\u6c60\u9002\u914d",id:"5-\u7ebf\u7a0b\u6c60\u9002\u914d",level:3}],u={toc:i},d="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u4ee5\u4e0b\u6e90\u7801\u57fa\u4e8eRocketMQ 4.8.0")),(0,o.kt)("p",null,"\u5728\u5206\u6790\u6d88\u8d39\u8005\u542f\u52a8\u6d88\u8d39\u7684\u65f6\u5019\u6211\u4eec\u770b\u5230\u4e86\uff0c\u5728\u672c\u5730\u542f\u52a8\u4e00\u7cfb\u5217\u7684\u5b9a\u65f6\u4efb\u52a1\u3002\u4e0b\u9762\u5c31\u6765\u5206\u6790\u8fd9\u4e9b\u5b9a\u65f6\u4efb\u52a1\u7684\u4f5c\u7528\u5728\u6574\u4e2a\u6d88\u8d39\u7684\u8fc7\u7a0b\u4e2d\u3002\u5b9a\u65f6\u4efb\u52a1\u542f\u52a8\u5728 ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"MQClientInstance#startScheduledTask"))," \u65b9\u6cd5\u4e2d\u3002"),(0,o.kt)("h3",{id:"1-\u8bfb\u53d6namesrv\u5730\u5740"},"1. \u8bfb\u53d6Namesrv\u5730\u5740"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'if (null == this.clientConfig.getNamesrvAddr()) {\n    this.scheduledExecutorService.scheduleAtFixedRate(new Runnable() {\n\n        @Override\n        public void run() {\n            try {\n                MQClientInstance.this.mQClientAPIImpl.fetchNameServerAddr();\n            } catch (Exception e) {\n                log.error("ScheduledTask fetchNameServerAddr exception", e);\n            }\n        }\n    }, 1000 * 10, 1000 * 60 * 2, TimeUnit.MILLISECONDS);\n}\n')),(0,o.kt)("p",null,"\u8bf4\u660e: \u5ef6\u8fdf10\u79d2\u6267\u884c\uff0c\u6bcf\u4e24\u5206\u949f\u83b7\u53d6\u4e00\u6b21Namesrv\u7684\u5730\u5740(\u5728NamesrvAddr\u4e3a\u7a7a\u7684\u60c5\u51b5\u4e0b)"),(0,o.kt)("h3",{id:"2-\u4ecenamesrv\u66f4\u65b0topic\u8def\u7531\u4fe1\u606f"},"2. \u4eceNamesrv\u66f4\u65b0Topic\u8def\u7531\u4fe1\u606f"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'this.scheduledExecutorService.scheduleAtFixedRate(new Runnable() {\n\n    @Override\n    public void run() {\n        try {\n            MQClientInstance.this.updateTopicRouteInfoFromNameServer();\n        } catch (Exception e) {\n            log.error("ScheduledTask updateTopicRouteInfoFromNameServer exception", e);\n        }\n    }\n}, 10, this.clientConfig.getPollNameServerInterval(), TimeUnit.MILLISECONDS);\n')),(0,o.kt)("p",null,"\u8bf4\u660e\uff1a\u9ed8\u8ba4\u6bcf30\u79d2\u66f4\u65b0\u4e00\u6b21Topic\u8def\u7531\u4fe1\u606f"),(0,o.kt)("h3",{id:"3-\u6e05\u9664\u79bb\u7ebfbroker\u548c\u53d1\u9001\u5fc3\u8df3\u7ed9broker"},"3. \u6e05\u9664\u79bb\u7ebfBroker\u548c\u53d1\u9001\u5fc3\u8df3\u7ed9Broker"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'this.scheduledExecutorService.scheduleAtFixedRate(new Runnable() {\n    @Override\n    public void run() {\n        try {\n            MQClientInstance.this.cleanOfflineBroker();\n            MQClientInstance.this.sendHeartbeatToAllBrokerWithLock();\n        } catch (Exception e) {\n            log.error("ScheduledTask sendHeartbeatToAllBroker exception", e);\n        }\n    }\n}, 1000, this.clientConfig.getHeartbeatBrokerInterval(), TimeUnit.MILLISECONDS);\n')),(0,o.kt)("p",null,"\u8bf4\u660e\uff1a\u9ed8\u8ba4\u6bcf30\u79d2\u6e05\u9664\u4e00\u6b21\u79bb\u7ebf\u7684Broker,\u7ed9\u6240\u6709\u7684Broker\u53d1\u9001\u5fc3\u8df3"),(0,o.kt)("h3",{id:"4-\u6301\u4e45\u5316\u6d88\u8d39\u8fdb\u5ea6"},"4. \u6301\u4e45\u5316\u6d88\u8d39\u8fdb\u5ea6"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'this.scheduledExecutorService.scheduleAtFixedRate(new Runnable() {\n    @Override\n    public void run() {\n        try {\n            MQClientInstance.this.persistAllConsumerOffset();\n        } catch (Exception e) {\n            log.error("ScheduledTask persistAllConsumerOffset exception", e);\n        }\n    }\n}, 1000 * 10, this.clientConfig.getPersistConsumerOffsetInterval(), TimeUnit.MILLISECONDS);\n')),(0,o.kt)("p",null,"\u8bf4\u660e\uff1a\u9ed8\u8ba4\u6bcf5\u79d2\u949f\u6301\u4e45\u5316\u4e00\u6b21\u6d88\u8d39\u8fdb\u5ea6\u3002(\u6b63\u5e38\u5173\u95ed\u7684\u65f6\u5019\u56de\u4e5f\u4f1a\u6301\u4e45\u5316)"),(0,o.kt)("h3",{id:"5-\u7ebf\u7a0b\u6c60\u9002\u914d"},"5. \u7ebf\u7a0b\u6c60\u9002\u914d"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'this.scheduledExecutorService.scheduleAtFixedRate(new Runnable() {\n    @Override\n    public void run() {\n        try {\n            MQClientInstance.this.adjustThreadPool();\n        } catch (Exception e) {\n            log.error("ScheduledTask adjustThreadPool exception", e);\n        }\n    }\n}, 1, 1, TimeUnit.MINUTES);\n')),(0,o.kt)("p",null,"\u8bf4\u660e:\u6bcf\u4e00\u5206\u949f\u9002\u914d\u4e00\u6b21"))}m.isMDXComponent=!0}}]);