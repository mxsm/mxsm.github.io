"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[2964],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>g});var o=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=o.createContext({}),p=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},k=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(r),k=a,g=m["".concat(c,".").concat(k)]||m[k]||u[k]||n;return r?o.createElement(g,i(i({ref:t},s),{},{components:r})):o.createElement(g,i({ref:t},s))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=k;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<n;p++)i[p]=r[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}k.displayName="MDXCreateElement"},7492:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>p});var o=r(7462),a=(r(7294),r(3905));const n={},i=void 0,l={unversionedId:"rocketmq/rocketmq5/broker/store/AutoSwitchHAService-source-code-analysis",id:"rocketmq/rocketmq5/broker/store/AutoSwitchHAService-source-code-analysis",title:"AutoSwitchHAService-source-code-analysis",description:"\u6301\u7eed\u521b\u4f5c\uff0c\u52a0\u901f\u6210\u957f\uff01\u8fd9\u662f\u6211\u53c2\u4e0e\u300c\u6398\u91d1\u65e5\u65b0\u8ba1\u5212 \xb7 10 \u6708\u66f4\u6587\u6311\u6218\u300d\u7684\u7b2c7\u5929\uff0c\u70b9\u51fb\u67e5\u770b\u6d3b\u52a8\u8be6\u60c5",source:"@site/docs/rocketmq/rocketmq5/04-broker/store/AutoSwitchHAService-source-code-analysis.md",sourceDirName:"rocketmq/rocketmq5/04-broker/store",slug:"/rocketmq/rocketmq5/broker/store/AutoSwitchHAService-source-code-analysis",permalink:"/docs/rocketmq/rocketmq5/broker/store/AutoSwitchHAService-source-code-analysis",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/rocketmq/rocketmq5/04-broker/store/AutoSwitchHAService-source-code-analysis.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1694243114,formattedLastUpdatedAt:"Sep 9, 2023",frontMatter:{},sidebar:"rocketmq5",previous:{title:"RocketMQ5.0\u6e90\u7801\u89e3\u6790-CommitLog\u8bbe\u8ba1\u4e0e\u51e0\u4e2a\u91cd\u8981\u7684\u5c5e\u6027\u5173\u7cfb\u56fe\u6587\u89e3\u6790",permalink:"/docs/rocketmq/rocketmq5/broker/store/CommitLog-important-attribute"},next:{title:"RocketMQ5.0-CommitLog\u8bbe\u8ba1\u4e0e\u6e90\u7801\u89e3\u6790",permalink:"/docs/rocketmq/rocketmq5/broker/store/CommitLog"}},c={},p=[{value:"1. AutoSwitchHAService\u5de5\u4f5c\u6d41\u7a0b",id:"1-autoswitchhaservice\u5de5\u4f5c\u6d41\u7a0b",level:2},{value:"2. AutoSwitchHAService\u521d\u59cb\u5316\u548c\u542f\u52a8",id:"2-autoswitchhaservice\u521d\u59cb\u5316\u548c\u542f\u52a8",level:2},{value:"3. AutoSwitchHAService change role",id:"3-autoswitchhaservice-change-role",level:2},{value:"3.1  Change to Master",id:"31--change-to-master",level:3},{value:"3.2  Change to Slave",id:"32--change-to-slave",level:3},{value:"4 Transfer CommitLog Data",id:"4-transfer-commitlog-data",level:2},{value:"5. \u603b\u7ed3",id:"5-\u603b\u7ed3",level:2}],s={toc:p},m="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,o.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u6301\u7eed\u521b\u4f5c\uff0c\u52a0\u901f\u6210\u957f\uff01\u8fd9\u662f\u6211\u53c2\u4e0e\u300c\u6398\u91d1\u65e5\u65b0\u8ba1\u5212 \xb7 10 \u6708\u66f4\u6587\u6311\u6218\u300d\u7684\u7b2c7\u5929\uff0c",(0,a.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7147654075599978532"},"\u70b9\u51fb\u67e5\u770b\u6d3b\u52a8\u8be6\u60c5")),(0,a.kt)("p",null,"RocketMQ5.0\u5b9e\u73b0\u4e86\u4e3b\u5907\u81ea\u4e3b\u5207\u6362\u5176\u4e2dAutoSwitchHAService\u4f5c\u4e3a\u5176\u4e2d\u4e00\u4e2a\u91cd\u8981\u7684\u7ec4\u4ef6\u5b9e\u73b0\u4e86\u5f53\u4e2d\u7684\u5f88\u591a\u529f\u80fd\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"E:%5Cdownload%5CAutoSwitchHAService.png",alt:"AutoSwitchHAService"})),(0,a.kt)("p",null,"\u4e0b\u9762\u5c31\u6765\u5206\u6790\u8fd9\u4e9b\u529f\u80fd\u7684\u5b9e\u73b0\u3002"),(0,a.kt)("h2",{id:"1-autoswitchhaservice\u5de5\u4f5c\u6d41\u7a0b"},"1. AutoSwitchHAService\u5de5\u4f5c\u6d41\u7a0b"),(0,a.kt)("p",null,"\u9996\u5148\u6765\u770b\u4e00\u4e0bAutoSwitchHAService\u7684\u5de5\u4f5c\u6d41\u7a0b\uff0c\u56fe\u5982\u4e0b\uff1a"),(0,a.kt)("p",null,"![AutoSwitchHAService work flow]","(E:\\download\\AutoSwitchHAService work flow.png)"),(0,a.kt)("p",null,"\u4e3b\u8981\u5206\u4e3a\u51e0\u5757\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"AutoSwitchHAService\u521d\u59cb\u5316"),(0,a.kt)("li",{parentName:"ul"},"AutoSwitchHAService\u542f\u52a8\uff0c\u5305\u62ec\uff1aAutoSwitchAcceptSocketService\u3001GroupTransferService\u3001HAConnectionStateNotificationService\u670d\u52a1\u3002"),(0,a.kt)("li",{parentName:"ul"},"Broker\u542f\u52a8\u7b49\u5f85\u6ce8\u518c\u5230DLedger Controller\u7684\u8fd4\u56de\u7ed3\u679c\uff0c\u6839\u636e\u7ed3\u679c\u6765\u5224\u65adBroker change role\u3002"),(0,a.kt)("li",{parentName:"ul"},"Broker\u89d2\u8272\u4e3aMaster\u7684\u65f6\u5019\u4e3b\u8981\u662f\u5c06Master\u7684CommitLog\u6570\u636e\u4f20\u8f93\u5230Slave, Slave\u4e3b\u8981\u7684\u529f\u80fd\u5c31\u662f\u901a\u8fc7HAClient\u5904\u7406Master\u4f20\u8f93\u7684\u6570\u636e\u3002")),(0,a.kt)("p",null,"Broker Master\u548cSlave\u7684\u5206\u5de5\u5408\u4f5c\u4ece\u800c\u5b9e\u73b0\u4e86Broker\u7684CommitLog\u6570\u636e\u4f20\u8f93\u5230Slave\u7684\u529f\u80fd\u3002\u4ece\u800c\u8fbe\u5230\u9ad8\u53ef\u7528\u548c\u4e3b\u5907\u5207\u6362\u7684\u76ee\u7684\u3002"),(0,a.kt)("h2",{id:"2-autoswitchhaservice\u521d\u59cb\u5316\u548c\u542f\u52a8"},"2. AutoSwitchHAService\u521d\u59cb\u5316\u548c\u542f\u52a8"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"AutoSwitchHAService"))," \u5b9e\u73b0\u4e86 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"DefaultHAService"))," \uff0c\u4e5f\u5c31\u662f\u5728RocketMQ4.x\u7684\u9ad8\u53ef\u7528\u57fa\u7840\u4e0a\u5b9e\u73b0\u4e86\u4e3b\u5907\u5207\u6362\u7684\u529f\u80fd\u3002\u521d\u59cb\u5316\u5728",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"AutoSwitchHAService#init"))," \u65b9\u6cd5\u4e2d\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"C:%5CUsers%5Cmxsm%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20221021230106244.png",alt:"image-20221021230106244"})),(0,a.kt)("p",null,"\u542f\u52a8\u7684\u8fc7\u7a0b\u4e3b\u8981\u5728",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"DefaultHAService#start"))," \u65b9\u6cd5\u4e2d\uff0c\u5e72\u4e86\u4e00\u4e0b\u51e0\u4ef6\u4e8b\u60c5\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"AutoSwitchAcceptSocketService\u670d\u52a1\u7684\u542f\u52a8")),(0,a.kt)("p",{parentName:"li"},"\u8fd9\u4e2a\u670d\u52a1\u7684\u4f5c\u7528\u662f\u7528\u6765\u76d1\u542cSlave Client\u7684\u94fe\u63a5\uff0c\u5f53Slave\u7684Client\u8fde\u63a5\u5230Master\u540e\uff0c\u4f1a\u5c06\u8fde\u63a5\u5305\u88c5\u6210AutoSwitchHAConnection\u5b58\u5165\u5217\u8868\u4e2d\u3002\u8fd9\u4e2a\u670d\u52a1\u4e3b\u8981\u662fBroker Master\u4f1a\u7528\u5230")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"GroupTransferService\u670d\u52a1\u542f\u52a8")),(0,a.kt)("p",{parentName:"li"},"\u5224\u65adCommitLog\u662f\u5426\u5df2\u7ecf\u540c\u6b65\u5230Slave\uff0c\u8fd9\u4e2a\u4e5f\u53ea\u6709Master\u4f1a\u7528\u5230")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"HAConnectionStateNotificationService\u670d\u52a1\u542f\u52a8")))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"C:%5CUsers%5Cmxsm%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20221021230424825.png",alt:"image-20221021230424825"})),(0,a.kt)("h2",{id:"3-autoswitchhaservice-change-role"},"3. AutoSwitchHAService change role"),(0,a.kt)("p",null,"Broker\u7684\u89d2\u8272\u662fMaster\u8fd8\u662fSlave\u662f\u7531\u9009\u4e3b\u7ec4\u4ef6 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"DLedger Controller\uff08controller\u6a21\u5757)\uff09"))," \u51b3\u5b9a\u3002\u63a5\u6536\u5230\u9009\u4e3b\u901a\u77e5\u7684Broker\u4f1a\u6839\u636emaster address\u548c\u81ea\u8eab\u7684address\u8fdb\u884c\u5224\u65ad\u6765\u51b3\u5b9a\u662f\u8c03\u7528 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"AutoSwitchHAService #changeToMaster"))," \u8fd8\u662f ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"AutoSwitchHAService#changeToSlave"))," \u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Tips: Broker\u7684\u9009\u4e3b\u53ef\u4ee5\u53c2\u7167",(0,a.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7156202204104392717"},"\u300aRocketMQ5.0\u4e3b\u5907\u81ea\u52a8\u5207\u6362\u6a21\u5f0fBroker\u9009\u4e3b\u8be6\u89e3\u300b"))),(0,a.kt)("h3",{id:"31--change-to-master"},"3.1  Change to Master"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"ReplicasManager#changeToMaster"))," \u662f\u63a5\u6536DLedger Controller\u9009\u4e3b\u540e\u8fd4\u56de\u7684\u4e00\u4e2a\u5165\u53e3\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"C:%5CUsers%5Cmxsm%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20221021224605394.png",alt:"image-20221021224605394"})),(0,a.kt)("p",null,"\u4e0b\u9762\u770b\u4e00\u4e0b ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"AutoSwitchHAService#changeToMaster"))," \u7684\u5904\u7406\u6d41\u7a0b\uff1a"),(0,a.kt)("p",null,"![Broker Change to Master]","(E:\\download\\Broker Change to Master.png)"),(0,a.kt)("p",null,"\u4eceBroker Change to Master\u7684\u6d41\u7a0b\u56fe\u53ef\u4ee5\u770b\u51fa\u6765\u6574\u4e2a\u8fc7\u7a0b\u5206\u4e3a\u4e00\u4e0b\u51e0\u4e2a\u6b65\u9aa4\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"DLedger Controller\u8d1f\u8d23\u9009\u4e3b\uff0c\u7136\u540e\u901a\u77e5\u5bf9\u5e94\u7684Broker,Borker\u5c06\u89d2\u8272\u8bbe\u7f6e\u4e3aMaster"),(0,a.kt)("li",{parentName:"ul"},"\u8bbe\u7f6e\u4e3aMaster\u7684\u65f6\u5019\u9996\u5148\u8981\u5220\u9664\u539f\u5148Broker\u6301\u6709\u7684Slave client(Slave \u662f\u6ca1\u6709\u6301\u6709AutoSwitchHAConnection)\uff0c\u4e0e\u6b64\u540c\u65f6\u5982\u679cAutoSwitchHAClient\u4e0d\u4e3a\u7a7a\u7684\u60c5\u51b5shutdown\u3002"),(0,a.kt)("li",{parentName:"ul"},"Broker\u672c\u5730\u810f\u6570\u636e\u6e05\u7406\uff1aCommitLog\u7684\u810f\u6570\u636e\u3001consume queue \u7684\u810f\u6570\u636e\uff0c\u4e5f\u5c31\u662f\u672c\u5730\u6570\u636e\u5bf9\u9f50"),(0,a.kt)("li",{parentName:"ul"},"\u6839\u636eMaster Epoch\u5bf9\u9f50\u672c\u5730\u7684Epoch\u6570\u636e\uff0c\u540c\u65f6\u5c06\u65b0\u589e\u7684Epoch\u6570\u636e\u5199\u5165Checkpoint\u6587\u4ef6\u4e2d"),(0,a.kt)("li",{parentName:"ul"},"\u7b49\u5f85Consume queue dispatch\u5b8c\u6210\uff0c \u6062\u590dConsume Queue\u5230\u5185\u5b58")),(0,a.kt)("p",null,"\u901a\u8fc7\u4ee5\u4e0a\u7684\u51e0\u4e2a\u6b65\u9aa4\u5c31\u5b8c\u6210\u4e86Broker\u7684Role\u8bbe\u7f6e\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Tips: \u8bbe\u7f6eBroker\u7684\u89d2\u8272\u4e00\u5b9a\u662f ",(0,a.kt)("strong",{parentName:"p"},"SYNC_MASTER")," \u4e3b\u8981\u662f\u56e0\u4e3a\u9700\u8981\u5b9e\u73b0\u9ad8\u53ef\u7528\u51cf\u5c11\u6d88\u606f\u4e22\u5931")),(0,a.kt)("h3",{id:"32--change-to-slave"},"3.2  Change to Slave"),(0,a.kt)("p",null,"Broker\u8bbe\u7f6e\u4e3aSlave\u7684\u6d41\u7a0b\u548c\u8bbe\u7f6e\u4e3aMaster\u7684\u6d41\u7a0b\u5927\u4f53\u4e0a\u90fd\u5dee\u4e0d\u591a\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"C:%5CUsers%5Cmxsm%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20221021225018262.png",alt:"image-20221021225018262"})),(0,a.kt)("p",null,"\u529f\u80fd\u7684\u5b9e\u73b0\u90fd\u662f\u901a\u8fc7",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"AutoSwitchHAService"))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"C:%5CUsers%5Cmxsm%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20221021225341031.png",alt:"image-20221021225341031"})),(0,a.kt)("p",null,"\u5bf9\u4e8e ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"AutoSwitchHAClient"))," \u662f\u5982\u4f55\u4e0e Master\u8fdb\u884c\u5efa\u7acb\u8fde\u63a5\u548c\u5de5\u4f5c\u7684\u5927\u5bb6\u53ef\u4ee5\u53c2\u7167 ",(0,a.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7155374918983483422"},"\u300aRocketMQ5.0\u6e90\u7801\u5206\u6790-\u9ad8\u53ef\u7528\u7ec4\u4ef6AutoSwitchHAClient\u56fe\u6587\u8be6\u89e3\u300b")," \u3002"),(0,a.kt)("h2",{id:"4-transfer-commitlog-data"},"4 Transfer CommitLog Data"),(0,a.kt)("p",null,"\u5c06Master Broker\u7684\u6570\u636e\u4f20\u8f93\u5230Slave Broker\u8fd9\u4e2a\u91cd\u8981\u4e5f\u662f\u6700\u4e3b\u8981\u7684\u76ee\u7684\u3002\u4e0e\u6b64\u540c\u65f6\u6765\u5b9e\u73b0Broker\u7684\u9ad8\u53ef\u7528\u3002\u4ece\u4e0a\u9762\u53ef\u4ee5\u77e5\u9053\u5f53Slave\u548cMaster\u5b8c\u6210HANDSHAKE\u540e\u3002Master\u5c31\u8fdb\u5165\u4e86TRANSFER\u72b6\u6001\u4e5f\u5c31\u662f\u6570\u636e\u4f20\u8f93\u7684\u72b6\u6001\uff0c\u6b64\u65f6Master\u4f1a\u5c06\u6570\u636e\u901a\u8fc7 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"AutoSwitchHAConnection"))," \u4f20\u8f93\u7ed9 Slave\u3002\u4f20\u8f93\u683c\u5f0f:"),(0,a.kt)("p",null,"![Transfer Message]","(E:\\download\\Transfer Message.png)"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note: \u6bcf\u4e00\u6b21\u6570\u636e\u7684\u4f20\u8f93\u4e0d\u80fd\u8de8Epoch\u8fdb\u884c\u4f20\u8f93\uff0c\u6bcf\u4e00\u6b21\u4f20\u8f93\u7684\u6570\u636eepoch\u90fd\u662f\u76f8\u540c\u7684\u3002")),(0,a.kt)("h2",{id:"5-\u603b\u7ed3"},"5. \u603b\u7ed3"),(0,a.kt)("p",null,"RocketMQ5.0\u4e3b\u5907\u81ea\u4e3b\u5207\u6362\u662f\u5728RocketMQ4.x\u7684\u57fa\u7840\u4e0a\u589e\u52a0\u4e86epoch\u7b49\u4e00\u4e9b\u8bbe\u8ba1\uff0c\u540c\u65f6\u4f9d\u8d56DLedger\u5b9e\u73b0\u9009\u4e3b\u3002 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"ReplicasManager"))," \u4e3b\u8981\u8d1f\u8d23\u63a5\u53e3\u5bf9\u5916\uff0c",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"AutoSwitchHAService"))," \u63d0\u4f9b\u5b9e\u9645\u7684\u670d\u52a1\u7f16\u6392\uff0c\u5c06\u4e0d\u540c\u7684\u670d\u52a1\u7f16\u6392\u8d77\u6765\u5b9e\u73b0\u6574\u4e2a\u529f\u80fd\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6211\u662f\u8682\u8681\u80cc\u5927\u8c61(GitHub:mxsm)\uff0c\u6587\u7ae0\u5bf9\u4f60\u6709\u5e2e\u52a9\u70b9\u8d5e\u5173\u6ce8\u6211\uff0c\u6587\u7ae0\u6709\u4e0d\u6b63\u786e\u7684\u5730\u65b9\u8bf7\u60a8\u65a7\u6b63\u7559\u8a00\u8bc4\u8bba~\u8c22\u8c22!")))}u.isMDXComponent=!0}}]);