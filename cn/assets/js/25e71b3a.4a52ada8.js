"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[6598],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),s=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(r),u=n,h=m["".concat(c,".").concat(u)]||m[u]||k[u]||l;return r?a.createElement(h,o(o({ref:t},p),{},{components:r})):a.createElement(h,o({ref:t},p))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4452:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const l={title:"RocketMQ5.0\u6e90\u7801\u5206\u6790-AutoSwitchHAClient",linkTitle:"RocketMQ5.0\u6e90\u7801\u5206\u6790-AutoSwitchHAClient",date:new Date("2022-10-07T00:00:00.000Z"),weight:202210071655},o=void 0,i={unversionedId:"rocketmq5/store/AutoSwitchHAClient-source-code-analysis",id:"rocketmq5/store/AutoSwitchHAClient-source-code-analysis",isDocsHomePage:!1,title:"RocketMQ5.0\u6e90\u7801\u5206\u6790-AutoSwitchHAClient",description:"\u5728RocketMQ5.0\u7684HA\u6a21\u5f0f\u4e2d\uff0cAutoSwitchHAClient \u662f\u4e00\u4e2a\u91cd\u8981\u7684\u7ec4\u4ef6\uff0c\u4e3b\u8981\u4f5c\u7528Broker Slave\u4e2d\u7528\u6765\u5904\u7406Broker Master\u53d1\u6765\u7684CommitLog\u6570\u636e\u3002RocketMQ5.0\u5bf9AutoSwitchHAClient\u8fdb\u884c\u4e86\u589e\u5f3a\u6765\u9002\u5e94RocketMQ5.0\u7684DLedger Controller\u7684\u6a21\u5f0f\u3002",source:"@site/docs/rocketmq5/store/AutoSwitchHAClient-source-code-analysis.md",sourceDirName:"rocketmq5/store",slug:"/rocketmq5/store/AutoSwitchHAClient-source-code-analysis",permalink:"/cn/docs/rocketmq5/store/AutoSwitchHAClient-source-code-analysis",editUrl:"https://crowdin.com/project/ionic-docs",tags:[],version:"current",frontMatter:{title:"RocketMQ5.0\u6e90\u7801\u5206\u6790-AutoSwitchHAClient",linkTitle:"RocketMQ5.0\u6e90\u7801\u5206\u6790-AutoSwitchHAClient",date:"2022-10-07T00:00:00.000Z",weight:202210071655}},c=[{value:"1. RocketMQ4.x\u548cRocketMQ5.0\u7248\u672c\u534f\u8bae\u5bf9\u6bd4",id:"1-rocketmq4x\u548crocketmq50\u7248\u672c\u534f\u8bae\u5bf9\u6bd4",children:[{value:"1.1 HANDSHAKE\u534f\u8bae",id:"11-handshake\u534f\u8bae",children:[],level:3},{value:"1.2 TRANSFER\u534f\u8bae",id:"12-transfer\u534f\u8bae",children:[],level:3}],level:2},{value:"2. RocketMQ5.0 AutoSwitchHAClient\u5904\u7406\u6d41\u7a0b",id:"2-rocketmq50-autoswitchhaclient\u5904\u7406\u6d41\u7a0b",children:[{value:"2.1 READY",id:"21-ready",children:[{value:"2.1.1 Truncate Invalid message(\u622a\u65ad\u65e0\u6548\u7684message)",id:"211-truncate-invalid-message\u622a\u65ad\u65e0\u6548\u7684message",children:[],level:4},{value:"2.1.1  Connect Broker Master\uff08\u4e0eMaster\u5efa\u7acbTCP\u94fe\u63a5\uff09",id:"211--connect-broker-master\u4e0emaster\u5efa\u7acbtcp\u94fe\u63a5",children:[],level:4}],level:3},{value:"2.2 HANDSHAKE",id:"22-handshake",children:[],level:3},{value:"2.3 TRANSFER",id:"23-transfer",children:[],level:3}],level:2},{value:"3. \u534f\u8bae\u4f18\u5316\u601d\u8003",id:"3-\u534f\u8bae\u4f18\u5316\u601d\u8003",children:[{value:"3.1 HANDSHAKE\u534f\u8bae\u4f18\u5316",id:"31-handshake\u534f\u8bae\u4f18\u5316",children:[],level:3},{value:"3.2 TRANSFER\u534f\u8bae\u4f18\u5316",id:"32-transfer\u534f\u8bae\u4f18\u5316",children:[],level:3}],level:2},{value:"4. \u603b\u7ed3",id:"4-\u603b\u7ed3",children:[],level:2}],s={toc:c};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u5728RocketMQ5.0\u7684HA\u6a21\u5f0f\u4e2d\uff0c",(0,n.kt)("inlineCode",{parentName:"p"},"AutoSwitchHAClient")," \u662f\u4e00\u4e2a\u91cd\u8981\u7684\u7ec4\u4ef6\uff0c\u4e3b\u8981\u4f5c\u7528Broker Slave\u4e2d\u7528\u6765\u5904\u7406Broker Master\u53d1\u6765\u7684CommitLog\u6570\u636e\u3002RocketMQ5.0\u5bf9",(0,n.kt)("inlineCode",{parentName:"p"},"AutoSwitchHAClient"),"\u8fdb\u884c\u4e86\u589e\u5f3a\u6765\u9002\u5e94RocketMQ5.0\u7684DLedger Controller\u7684\u6a21\u5f0f\u3002"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Tips: RocketMQ\u7248\u672c\uff1a5.0.0")),(0,n.kt)("h2",{id:"1-rocketmq4x\u548crocketmq50\u7248\u672c\u534f\u8bae\u5bf9\u6bd4"},"1. RocketMQ4.x\u548cRocketMQ5.0\u7248\u672c\u534f\u8bae\u5bf9\u6bd4"),(0,n.kt)("p",null,"\u5728RocketMQ4.x\u7248\u672c\u4e2d\u53ea\u6709\u4e00\u4e2aCommitLog\u6570\u636e\u4f20\u8f93\u7684\u534f\u8bae\uff0c\u800cRocketMQ5.0\u4e3a\u4e86\u9002\u914dDLedger Controller\u7684\u6a21\u5f0f\u589e\u52a0\u4e86\u65b0\u7684\u63e1\u624b\u548c\u8fde\u63a5\u534f\u8bae\u4ee5\u53ca\u5bf9\u539f\u6709\u7684CommitLog\u4f20\u8f93\u534f\u8bae\u8fdb\u884c\u4e86\u589e\u5f3a\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"HANDSHAKE(\u65b0\u589e\u534f\u8bae)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"TRANSFER(\u5bf94.x\u7248\u672c\u8fdb\u884c\u4e86\u589e\u5f3a)"))),(0,n.kt)("h3",{id:"11-handshake\u534f\u8bae"},"1.1 HANDSHAKE\u534f\u8bae"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Slave\u53d1\u9001\u7ed9Master\u534f\u8bae\u683c\u5f0f\uff1a")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/rocketmq5/broker/ha/Handshake%20header.png",alt:"Handshake header"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u4f5c\u7528\uff1a\u5c06Slave\u7684\u72b6\u6001\u544a\u8bc9Master\u3002")," "),(0,n.kt)("p",null,"\u8fd9\u4e2a\u534f\u8bae\u662fRocketMQ5.0\u65b0\u589e\u7684\u534f\u8bae\u3002"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Tips: \u5728Broker Slave\u7ed9Broker Master\u53d1\u4e86HANDSHAKE\u540e\uff0cBroker Master\u5904\u7406\u5b8c\u6210\u540e\u4f1a\u7ed9Broker Slave\u56de\u4e00\u4e2aACK")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Master\u7ed9Slave\u56de\u590d\u7684ACK\u534f\u8bae\u683c\u5f0f\uff1a")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/rocketmq5/broker/ha/Master%20Handshare%20Message%20ACK.png",alt:"Master Handshare Message ACK"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u4f5c\u7528\uff1a\u7528\u4e8e\u5bf9\u9f50Slave\u548cMaster\u7684\u6570\u636e")),(0,n.kt)("h3",{id:"12-transfer\u534f\u8bae"},"1.2 TRANSFER\u534f\u8bae"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"RocketMQ4.x\u534f\u8bae\u683c\u5f0f\uff1a")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/rocketmq5/broker/ha/transfer%20protocol.png",alt:"transfer protocol"})),(0,n.kt)("p",null,"\u5206\u4e3a\u5934\u90e8\u548c\u6570\u636e\u4e24\u5927\u90e8\u5206\uff0c\u5934\u90e8\u5305\u542b\u4e86offSet\u548c\u6570\u636e\u5927\u5c0f"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"RocketMQ5.0\u534f\u8bae\u683c\u5f0f\uff1a")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/rocketmq5/broker/ha/Transfer%20Message.png",alt:"Transfer Message"})),(0,n.kt)("p",null,"\u7531\u4e8e\u662fRocketMQ4.x\u7684\u534f\u8bae\u589e\u5f3a\uff0c\u9664\u4e86\u5305\u542boffSet\u548c\u6570\u636e\u5927\u5c0f\u4ee5\u5916\u8fd8\u5305\u542b\u4e86DLedger Controller\u6a21\u5f0f\u7684\u4e00\u4e9bBroker\u7684\u5143\u6570\u636e\u4fe1\u606f\u3002"),(0,n.kt)("h2",{id:"2-rocketmq50-autoswitchhaclient\u5904\u7406\u6d41\u7a0b"},"2. RocketMQ5.0 AutoSwitchHAClient\u5904\u7406\u6d41\u7a0b"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"AutoSwitchHAClient"))," \u5904\u7406\u6d41\u7a0b\u793a\u610f\u56fe\u5982\u4e0b\uff1a"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/rocketmq5/broker/ha/AutoSwitchHAClient%20Handle%20flow.png",alt:"AutoSwitchHAClient Handle flow"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Tips: \u4ece\u6e90\u7801\u53ef\u4ee5\u77e5\u9053AutoSwitchHAClient\u7ee7\u627f\u4e86ServiceThread\uff0c\u6240\u4ee5\u672c\u8d28\u4e0aAutoSwitchHAClient\u662f\u4e00\u4e2a\u7ebf\u7a0b\u3002\u7ebf\u7a0b\u7684\u5faa\u73af\u6267\u884c\u6765\u5904\u7406Master Broker\u53d1\u9001\u8fc7\u6765\u7684CommitLog\u3002")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"AutoSwitchHAClient")," \u4e3b\u8981\u901a\u8fc7\u4e0d\u540c\u7684\u72b6\u6001\u6765\u63a7\u5236\u4e0d\u540c\u7684\u6d41\u7a0b\uff1a"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/rocketmq5/broker/ha/AutoSwitchHAClient-status-change.png",alt:"AutoSwitchHAClient-status-change"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u72b6\u6001\u6709\u4ee5\u4e0b\u51e0\u79cd\uff1a")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"SHUTDOWN")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"READY")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"HANDSHAKE")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"TRANSFER")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"SUSPEND(\u6682\u65f6\u6ca1\u7528\u5230)"))),(0,n.kt)("p",null,"AutoSwitchHAClient\u4e3b\u8981\u662fBroker Slave\u7528\u6765\u5904\u7406Broker Master\u53d1\u9001\u7684\u6570\u636e\uff0c\u4ee5\u53caBroker Slave\u81ea\u8eab\u7684\u4e00\u4e9b\u5185\u90e8"),(0,n.kt)("h3",{id:"21-ready"},"2.1 READY"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"READY"))," \u72b6\u6001\u4e5f\u662f\u521d\u59cb\u5316\u72b6\u6001\uff0c\u5f53AutoSwitchHAClient\u88ab\u521d\u59cb\u5316\uff0cAutoSwitchHAClient\u7684\u72b6\u6001\u4f1a\u88ab\u8bbe\u7f6e\u4e3aREADY\u72b6\u6001\u3002\u5728READY\u72b6\u6001\u4e0b\u4e3b\u8981\u505a\u4e24\u4ef6\u4e8b\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Truncate Invalid message(\u622a\u65ad\u65e0\u6548\u7684message)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Connect Broker Master\uff08\u4e0eMaster\u5efa\u7acbTCP\u94fe\u63a5\uff09"))),(0,n.kt)("p",null,"\u63a5\u4e0b\u6765\u6211\u4eec\u5c31\u6765\u5206\u6790\u8fd9\u4e24\u79cd\u60c5\u51b5\u3002"),(0,n.kt)("h4",{id:"211-truncate-invalid-message\u622a\u65ad\u65e0\u6548\u7684message"},"2.1.1 Truncate Invalid message(\u622a\u65ad\u65e0\u6548\u7684message)"),(0,n.kt)("p",null,"\u4ec0\u4e48\u60c5\u51b5\u4e0b\u9700\u8981\u8fdb\u884c\u6d88\u606f\u8fdb\u884c\u622a\u65ad\uff1f\u5f53Broker\u5206\u53d1\u7684\u6570\u636e\u5b58\u5728\u843d\u540e\u7684\u60c5\u51b5\u4e5f\u5c31\u662f\u4eceProducer\u751f\u6210\u7684\u6d88\u606f\u53d1\u9001\u5230Broker\u540e\u8fd8\u5b58\u5728\u6709\u6ca1\u6709dispatch\u7684\u6570\u636e\u8fd9\u79cd\u60c5\u51b5\u4e0b\u53ef\u80fd\u9700\u8981\u8fdb\u884c\u6d88\u606f\u622a\u65ad\u3002\u7136\u540e\u5bf9\u672adispatch\u7684\u6d88\u606f\u6570\u636e\u8fdb\u884c\u9884\u5904\u7406\u6821\u9a8c\u3002\u7136\u540e\u5c06\u9884\u5904\u7406\u5b8c\u6210\u540e\u7684\u503c\u540e\u9762\u7684\u65e5\u5fd7\u8fdb\u884c\u622a\u65ad(\u4e5f\u6709\u53ef\u80fd\u4e0d\u5b58\u5728\uff0c\u8fd9\u91cc\u662f\u5904\u7406\u65e0\u6548\u6570\u636e)"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/rocketmq5/broker/ha/image-20221012214111881.png",alt:"image-20221012214111881"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u901a\u8fc7\u5206\u6790\u4ee3\u7801\u53d1\u73b0 AutoSwitchHAClient READY \u72b6\u6001\u4e0b\u622a\u65ad\u672c\u8d28\u4e0a\u662f\u505a\u7684\u5904\u7406Slave Broker\u7684\u65e0\u6548\u65e5\u5fd7\u548c\u6d88\u8d39\u8005\u961f\u5217\u7684\u6570\u636e\u3002\u4e5f\u5c31\u662f\u9996\u5148\u5bf9\u9f50\u81ea\u8eab\u7684\u6570\u636e\u8fd9\u91cc\u5305\u62ec\uff1aCommitLog\u548cConsumer Queue")),(0,n.kt)("h4",{id:"211--connect-broker-master\u4e0emaster\u5efa\u7acbtcp\u94fe\u63a5"},"2.1.1  Connect Broker Master\uff08\u4e0eMaster\u5efa\u7acbTCP\u94fe\u63a5\uff09"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/rocketmq5/broker/ha/image-20221012215935051.png",alt:"image-20221012215935051"})),(0,n.kt)("p",null,"\u5982\u679c\u4e0eBroker Master\u5efa\u7acb\u4e86TCP\u8fde\u63a5\uff0c\u7136\u540e\u4f1a\u5c06\u72b6\u6001\u8bbe\u7f6e\u4e3a",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"HANDSHAKE"))),(0,n.kt)("h3",{id:"22-handshake"},"2.2 HANDSHAKE"),(0,n.kt)("p",null,"AutoSwitchHAClient\u5728HANDSHAKE\u72b6\u6001\u4e0b\u4f1a\u53d1\u9001\u63e1\u624b\u4fe1\u606f\u7ed9Master\uff0c\u4fe1\u606f\u683c\u5f0f\u5982\u4e0b\uff1a"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/rocketmq5/broker/ha/Handshake%20header.png",alt:"Handshake header"})),(0,n.kt)("p",null,"\u4e5f\u5c31\u662f\u4e0a\u6587\u63d0\u5230\u7684HANDSHAKE\u534f\u8bae\u6570\u636e\u3002\u8fd9\u91cc\u5305\u62ec\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Slave\u7684\u72b6\u6001")),(0,n.kt)("li",{parentName:"ul"},"\u540c\u6b65\u5f00\u59cb\u7684\u6587\u4ef6\u4f4d\u7f6e\uff0c\u4ee5\u53ca\u662f\u5426\u4e3aLearner\u89d2\u8272"),(0,n.kt)("li",{parentName:"ul"},"slave\u7684\u5730\u5740(\u901a\u8fc7\u957f\u5ea6\u6765\u5224\u65ad\u662f\u5426\u4e3aIPV4\u8fd8\u662fIPV6)")),(0,n.kt)("p",null,"\u5728Master\u6536\u5230Slave\u7684\u53d1\u9001\u7684HANDSHAKE\u6570\u636e\u540e\u4f1a\u5bf9\u6570\u636e\u8fdb\u884c\u5904\u7406\uff1a"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/rocketmq5/broker/ha/image-20221012221841662.png",alt:"image-20221012221841662"})),(0,n.kt)("p",null,"\u4e3b\u8981\u662f\u5c06Slave\u7684\u72b6\u6001\u6570\u636e\u4ee5\u53ca\u89d2\u8272\u548cIP\u5730\u5740\u8bb0\u5f55\u5230Master\uff0c\u540c\u65f6master\u4f1a\u6784\u5efa\u4e00\u4e2aHANDSHAKE\u7684ACK\u7ed9\u5230Slave\u3002\u90a3\u4e48Master\u7ed9Slave\u8fd4\u56de\u7684\u6570\u636eHANDSHAKE ACK\u6570\u636e\u683c\u5f0f\uff1a"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/rocketmq5/broker/ha/Master%20Handshare%20Message%20ACK.png",alt:"Master Handshare Message ACK"})),(0,n.kt)("p",null,"Master\u7ed9Slave\u56de\u7684ACK\u5305\u542b\u4e86Master\u7684\u4e00\u4e9b\u5143\u6570\u636e\u4fe1\u606f\u3002\u6e90\u7801\u4ee3\u7801\u6784\u5efa\u5982\u4e0b\uff1a"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/rocketmq5/broker/ha/image-20221016094054892.png",alt:"image-20221016094054892"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Tips: \u57285.0.0\u7684\u4ee3\u7801\u4e2d\u4e3a\u4e86\u548c\u53d1\u9001\u65e5\u5fd7\u6570\u636e\u7684\u5934\u7edf\u4e00\uff0cMaster\u5728\u7ed9Slave\u56de\u590d HANDSHAKE ACK\u72b6\u6001\u7684\u65f6\u5019\u8bf7\u6c42\u5934\u4e5f\u589e\u52a0\u4e86EpochStartOffset\u548cAdditional info \u5b57\u6bb5\u3002\u8bbe\u7f6e\u4e3a0\uff0c\u4e3a\u4e86\u51cf\u5c11\u6570\u636e\u4f20\u8f93\u7b14\u8005\u8fdb\u884c\u4e86\u4f18\u5316\u53bb\u9664\u4e86\u8fd9\u4e24\u4e2a\u5b57\u6bb5\u4f20\u8f93\u5177\u4f53\u53ef\u4ee5\u53c2\u7167 ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/rocketmq/issues/5157"},"ISSUE#5157")," \u5bf9\u5e94\u7684PR\uff0c\u793e\u533a\u5df2\u7ecfapproved\u7b49\u5f85\u4ee3\u7801\u5408\u5e76\u3002\u8fd9\u4e2a\u4f18\u5316\u4e3b\u8981\u662f\u5904\u4e8e\u4e24\u4e2a\u8003\u8651\uff1a"),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"\u548c\u6587\u6863\u4e2d\u7684\u8bbe\u8ba1\u7edf\u4e00"),(0,n.kt)("li",{parentName:"ul"},"\u51cf\u5c11\u4f20\u8f93\u8fc7\u7a0b\u4e2d\u7684\u6570\u636e\u4f20\u8f93"))),(0,n.kt)("p",null,"Slave\u6536\u5230Master\u7684HANDSHAKE ACK\u540e\u83b7\u53d6\u6570\u636e"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/rocketmq5/broker/ha/image-20221016103311015.png",alt:"image-20221016103311015"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u4e3b\u8981\u662f\u4f5c\u7528\u662fSlave\u548cMaster\u5bf9\u9f50\u6570\u636e")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/rocketmq5/broker/ha/image-20221016103809712.png",alt:"image-20221016103809712"})),(0,n.kt)("p",null,"\u5230\u8fd9\u91cc\u4e3a\u6b62\u5c31\u5b8c\u6210\u6574\u4e2a\u4f20\u8f93\u6570\u636e\u7684\u524d\u671f\u51c6\u5907\u5de5\u4f5c\u3002"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u603b\u7ed3\uff1a\u524d\u671f\u7684\u51c6\u5907\u5de5\u4f5c\u4e3b\u8981\u505a\u4e86\u4e24\u4ef6\u4e8b\u60c5"),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"Slave\u81ea\u8eab\u7684\u6570\u636e\u5bf9\u9f50\uff0c\u5220\u9664\u4e00\u4e9b\u65e0\u6548\u7684\u6570\u636e(\u5982\u679c\u6709\u7684\u60c5\u51b5\u4e0b)\uff0c\u8fd9\u4e9b\u65e0\u6548\u7684\u6570\u636e\u5305\u62ec\u65e5\u5fd7\u6570\u636e\u3001cq\u6570\u636e"),(0,n.kt)("li",{parentName:"ul"},"Slave\u548cMaster\u7684\u6570\u636e\u5bf9\u9f50\uff0c\u5f53Slave\u7684\u6570\u636e\u5728Master\u524d\u9762\u7684\u65f6\u5019\u4e5f\u5c31\u662f\u6570\u636e\u591a\u4e8eMaster\uff0c\u6b64\u65f6\u4f1a\u5bf9\u6570\u636e\u8fdb\u884c\u5220\u9664\u3002\u4e0e\u6b64\u540c\u65f6\u4f1a\u5bf9\u9f50"))),(0,n.kt)("h3",{id:"23-transfer"},"2.3 TRANSFER"),(0,n.kt)("p",null,"Slave  AutoSwitchHAClient\u72b6\u6001\u53d8\u6210TRANSFER\u540e\u5c31\u5f00\u59cb\u5904\u7406Master\u7684\u53d1\u9001\u8fc7\u6765\u7684\u65e5\u5fd7\u6570\u636e\uff0c\u5904\u7406\u5b8c\u6210\u540e\u62a5\u544aSlave\u7684maxOffSet\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/rocketmq5/broker/ha/image-20221016121849931.png",alt:"image-20221016121849931"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Tips: \u65e5\u5fd7\u6570\u636e\u4f20\u8f93\u4e0d\u80fd\u8de8Epoch\u4f20\u8f93\u3002")),(0,n.kt)("h2",{id:"3-\u534f\u8bae\u4f18\u5316\u601d\u8003"},"3. \u534f\u8bae\u4f18\u5316\u601d\u8003"),(0,n.kt)("h3",{id:"31-handshake\u534f\u8bae\u4f18\u5316"},"3.1 HANDSHAKE\u534f\u8bae\u4f18\u5316"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Slave\u53d1\u9001\u7ed9Master\u534f\u8bae\u683c\u5f0f\u4f18\u5316:")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/rocketmq5/broker/ha/Handshake%20header.png",alt:"Handshake header"})),(0,n.kt)("p",null,"\u534f\u8bae\u53ef\u4ee5\u53d1\u73b0\uff0c\u7528\u4e864\u4e2a\u5b57\u8282\u6765\u8868\u793a\u72b6\u6001\u3002\u8fd9\u91cc\u7684\u8bbe\u8ba1\u662f\u548c\u679a\u4e3e\u7684int\u7c7b\u578b\u8fdb\u884c\u4e86\u5bf9\u5e94\uff0c\u5176\u5b9e\u6211\u4eec\u53ef\u4ee5\u75281btye\u6765\u8868\u793a\u3002\u5730\u4f4d\u5230\u9ad8\u4f4d\u6bcf\u4e00\u4e2abit\u8868\u793a\u72b6\u6001\uff0c\u4f8b\u5982\u5730\u4f4d\u7b2c\u4e00\u4f4d1\u8868\u793aREADY\u72b6\u6001\u3002\u540c\u65f6Flags\u4e5f\u53ef\u4ee5\u8fdb\u884c\u4f18\u5316\u7528\u540c\u6837\u76841byte\u5c31\u53ef\u4ee5\u8868\u793a\u72b6\u6001\u3002\u8fd9\u68378byte\u7684\u6570\u636e\u75282\u4e2abyte\u5c31\u53ef\u4ee5\u8868\u793a\u3002"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Master\u53d1\u9001\u7ed9Slave\u7684\u534f\u8bae\u683c\u5f0f\u4f18\u5316\uff1a")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/rocketmq5/broker/ha/Master%20Handshare%20Message%20ACK.png",alt:"Master Handshare Message ACK"})),(0,n.kt)("p",null,"\u8fd9\u4e2a\u4f18\u5316\u540c\u6837\u4e5f\u662f\u4f18\u5316state\u5b57\u6bb5\uff0c\u4f18\u5316\u7684\u601d\u8def\u548c\u4e0a\u9762\u7684\u4e00\u81f4\u3002"),(0,n.kt)("h3",{id:"32-transfer\u534f\u8bae\u4f18\u5316"},"3.2 TRANSFER\u534f\u8bae\u4f18\u5316"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/rocketmq5/broker/ha/Transfer%20Message.png",alt:"Transfer Message"})),(0,n.kt)("p",null,"\u8fd9\u4e2a\u4f18\u5316\u540c\u6837\u4e5f\u662f\u4f18\u5316state\u5b57\u6bb5\uff0c\u4f18\u5316\u7684\u601d\u8def\u548c\u4e0a\u9762\u7684\u4e00\u81f4\u3002"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Tips: \u540e\u7eed\u7b14\u8005\u4f1a\u5728\u793e\u533a\u521b\u5efaISSUE\u8fdb\u884c\u793e\u533a\u8ba8\u8bba\u7136\u540e\u786e\u5b9a\u662f\u5426\u8fdb\u884c\u534f\u8bae\u4f18\u5316\uff0c\u5982\u679c\u786e\u5b9a\u8fdb\u884c\u534f\u8bae\u4f18\u5316\u63d0\u4ea4\u5bf9\u5e94\u7684PR")),(0,n.kt)("h2",{id:"4-\u603b\u7ed3"},"4. \u603b\u7ed3"),(0,n.kt)("p",null,"AutoSwitchHAClient\u4f5c\u4e3aRocketMQ5.0\u9ad8\u53ef\u7528\u7684\u91cd\u8981\u4e00\u4e2a\u4e3b\u952e\uff0c\u5176\u529f\u80fd\u4e3b\u8981\u662fSlave Broker\u548cMaster\u8fdb\u884c\u901a\u8baf\u540c\u65f6\u5904\u7406\u6765\u81eaMaster\u4f20\u8f93\u7684\u65e5\u5fd7\u6570\u636e\u3002\u642d\u914d\u5176\u4ed6\u7684\u7ec4\u4ef6\u4f7f\u7528\u6765\u786e\u4fddDLedger Controller\u6a21\u5f0f\u4e0b\u7684\u81ea\u4e3b\u5207\u6362\u548cRocketMQ\u7684\u9ad8\u53ef\u7528\u3002\u540e\u7eed\u4f1a\u6709\u6587\u7ae0\u63a5\u7740\u5206\u6790\u5176\u4ed6DLedger Controller\u6a21\u5f0f\u9ad8\u53ef\u7528\u7684\u5176\u4ed6\u7ec4\u4ef6\u3002"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u6211\u662f\u8682\u8681\u80cc\u5927\u8c61(GitHub:mxsm)\uff0c\u6587\u7ae0\u5bf9\u4f60\u6709\u5e2e\u52a9\u70b9\u8d5e\u5173\u6ce8\u6211\uff0c\u6587\u7ae0\u6709\u4e0d\u6b63\u786e\u7684\u5730\u65b9\u8bf7\u60a8\u65a7\u6b63\u7559\u8a00\u8bc4\u8bba~\u8c22\u8c22!")))}p.isMDXComponent=!0}}]);