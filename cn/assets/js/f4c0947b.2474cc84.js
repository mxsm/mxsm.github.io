"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[6873],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var l=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,l)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,l,a=function(e,t){if(null==e)return{};var r,l,a={},n=Object.keys(e);for(l=0;l<n.length;l++)r=n[l],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)r=n[l],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var k=l.createContext({}),i=function(e){var t=l.useContext(k),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=i(e.components);return l.createElement(k.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},u=l.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,k=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=i(r),m=a,d=u["".concat(k,".").concat(m)]||u[m]||p[m]||n;return r?l.createElement(d,o(o({ref:t},s),{},{components:r})):l.createElement(d,o({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,o=new Array(n);o[0]=u;var c={};for(var k in t)hasOwnProperty.call(t,k)&&(c[k]=t[k]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var i=2;i<n;i++)o[i]=r[i];return l.createElement.apply(null,o)}return l.createElement.apply(null,r)}u.displayName="MDXCreateElement"},717:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>o,default:()=>s,frontMatter:()=>n,metadata:()=>c,toc:()=>k});var l=r(7462),a=(r(7294),r(3905));const n={title:"\u56fe\u8bf4RocketMQ5.0\u7684Broker\u7684\u4e3b\u5907\u81ea\u52a8\u5207\u6362\u7684\u8bbe\u8ba1\u4e0e\u5b9e\u73b0",linkTitle:"\u56fe\u8bf4RocketMQ5.0\u7684Broker\u7684\u4e3b\u5907\u81ea\u52a8\u5207\u6362\u7684\u8bbe\u8ba1\u4e0e\u5b9e\u73b0",date:new Date("2022-10-23T00:00:00.000Z"),weight:202210231435},o=void 0,c={unversionedId:"rocketmq/rocketmq5/store/master-slave-switch-automatic",id:"rocketmq/rocketmq5/store/master-slave-switch-automatic",isDocsHomePage:!1,title:"\u56fe\u8bf4RocketMQ5.0\u7684Broker\u7684\u4e3b\u5907\u81ea\u52a8\u5207\u6362\u7684\u8bbe\u8ba1\u4e0e\u5b9e\u73b0",description:"\u6301\u7eed\u521b\u4f5c\uff0c\u52a0\u901f\u6210\u957f\uff01\u8fd9\u662f\u6211\u53c2\u4e0e\u300c\u6398\u91d1\u65e5\u65b0\u8ba1\u5212 \xb7 10 \u6708\u66f4\u6587\u6311\u6218\u300d\u7684\u7b2c9\u5929\uff0c\u70b9\u51fb\u67e5\u770b\u6d3b\u52a8\u8be6\u60c5",source:"@site/docs/rocketmq/rocketmq5/store/master-slave-switch-automatic.md",sourceDirName:"rocketmq/rocketmq5/store",slug:"/rocketmq/rocketmq5/store/master-slave-switch-automatic",permalink:"/cn/docs/rocketmq/rocketmq5/store/master-slave-switch-automatic",editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/rocketmq/rocketmq5/store/master-slave-switch-automatic.md",tags:[],version:"current",frontMatter:{title:"\u56fe\u8bf4RocketMQ5.0\u7684Broker\u7684\u4e3b\u5907\u81ea\u52a8\u5207\u6362\u7684\u8bbe\u8ba1\u4e0e\u5b9e\u73b0",linkTitle:"\u56fe\u8bf4RocketMQ5.0\u7684Broker\u7684\u4e3b\u5907\u81ea\u52a8\u5207\u6362\u7684\u8bbe\u8ba1\u4e0e\u5b9e\u73b0",date:"2022-10-23T00:00:00.000Z",weight:202210231435},sidebar:"rocketmq5",previous:{title:"DLedger Controller\u6a21\u5f0f\u4e0bBroker\u6587\u4ef6\u622a\u65ad",permalink:"/cn/docs/rocketmq/rocketmq5/store/dledger-controller-truncate"}},k=[{value:"1. RocketMQ5.0 \u4e3b\u5907\u81ea\u52a8\u5207\u6362\u67b6\u6784",id:"1-rocketmq50-\u4e3b\u5907\u81ea\u52a8\u5207\u6362\u67b6\u6784",children:[],level:2},{value:"2. DLedger Controller\u5982\u4f55\u5b9e\u73b0Broker\u9009\u4e3b",id:"2-dledger-controller\u5982\u4f55\u5b9e\u73b0broker\u9009\u4e3b",children:[{value:"2.1 \u9009\u4e3b\u7684\u5143\u6570\u636e",id:"21-\u9009\u4e3b\u7684\u5143\u6570\u636e",children:[],level:3},{value:"2.2 \u9009\u4e3b\u7684\u6d41\u7a0b",id:"22-\u9009\u4e3b\u7684\u6d41\u7a0b",children:[],level:3}],level:2},{value:"3. \u53c2\u4e0eBroker\u9009\u4e3b\u7684\u6269\u5bb9\u548c\u7f29\u5bb9",id:"3-\u53c2\u4e0ebroker\u9009\u4e3b\u7684\u6269\u5bb9\u548c\u7f29\u5bb9",children:[{value:"3.1 \u6269\u5bb9",id:"31-\u6269\u5bb9",children:[],level:3},{value:"3.2 \u7f29\u5bb9",id:"32-\u7f29\u5bb9",children:[],level:3}],level:2},{value:"4. \u6d88\u606f\u4e0d\u4e22\u5931\u914d\u7f6e",id:"4-\u6d88\u606f\u4e0d\u4e22\u5931\u914d\u7f6e",children:[],level:2},{value:"5. \u603b\u7ed3",id:"5-\u603b\u7ed3",children:[],level:2}],i={toc:k};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,l.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u6301\u7eed\u521b\u4f5c\uff0c\u52a0\u901f\u6210\u957f\uff01\u8fd9\u662f\u6211\u53c2\u4e0e\u300c\u6398\u91d1\u65e5\u65b0\u8ba1\u5212 \xb7 10 \u6708\u66f4\u6587\u6311\u6218\u300d\u7684\u7b2c9\u5929\uff0c",(0,a.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7147654075599978532"},"\u70b9\u51fb\u67e5\u770b\u6d3b\u52a8\u8be6\u60c5")),(0,a.kt)("p",null,"RocketMQ5.0\u7528\u65b0\u5f00\u53d1\u7684 ",(0,a.kt)("strong",{parentName:"p"},"DLedger Controller")," \u6a21\u5f0f\u589e\u5f3a\u4e86\u4ee5\u524d\u7684 ",(0,a.kt)("strong",{parentName:"p"},"DLedger")," \u6a21\u5f0f\uff0c\u4e0b\u9762\u5c31\u6765\u4ece\u8bbe\u8ba1\u804a\u4e00\u4e0b ",(0,a.kt)("strong",{parentName:"p"},"DLedger Controller")," \u6a21\u5f0f\u662f\u5982\u4f55\u6765\u5b9e\u73b0Broker\u7684\u4e3b\u5907\u81ea\u52a8\u5207\u6362\u3002\u6211\u4eec\u4ece\u4ee5\u4e0b\u51e0\u4e2a\u65b9\u9762\u6765\u5206\u6790\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"RocketMQ5.0 \u6574\u4f53\u7684\u67b6\u6784\u6539\u52a8"),(0,a.kt)("li",{parentName:"ul"},"DLedger Controller\u5982\u4f55\u5b9e\u73b0Broker\u9009\u4e3b(\u4e3b\u5907\u81ea\u52a8\u5207\u6362\u5173\u952e)"),(0,a.kt)("li",{parentName:"ul"},"\u53c2\u4e0eBroker\u9009\u4e3b\u7684\u6269\u5bb9\u548c\u7f29\u5bb9(\u54ea\u4e9bBroker\u6709\u8d44\u683c\u53c2\u52a0\u9009\u4e3b)")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Tips: RocketMQ \u6e90\u7801\u7248\u672c5.0.0")),(0,a.kt)("h2",{id:"1-rocketmq50-\u4e3b\u5907\u81ea\u52a8\u5207\u6362\u67b6\u6784"},"1. RocketMQ5.0 \u4e3b\u5907\u81ea\u52a8\u5207\u6362\u67b6\u6784"),(0,a.kt)("p",null,"![RocketMQ5.0 architecture]","(E:\\download\\RocketMQ5.0 architecture.png)"),(0,a.kt)("p",null,"\u76f8\u6bd4\u4e4b\u524d\u7684\u9ad8\u53ef\u7528\u67b6\u6784\uff0c\u589e\u52a0\u4e86\u4e00\u4e2aDLedger Controller\u7528\u6765\u5b9e\u73b0Broker\u4e3b\u5907\u7684\u81ea\u4e3b\u5207\u6362\u548c\u9ad8\u53ef\u7528\u3002RocketMQ5.0\u7684\u4e3b\u5907\u6a21\u5f0f\u89e3\u51b3RocketMQ4.x\u54ea\u4e9b\u95ee\u9898\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u60f3\u8981\u5177\u5907\u9009\u4e3e\u5207\u6362\u7684\u80fd\u529b\uff0c\u5355\u7ec4 Broker \u5185\u7684\u526f\u672c\u6570\u5fc5\u987b 3 \u526f\u672c\u53ca\u4ee5\u4e0a"),(0,a.kt)("li",{parentName:"ul"},"\u526f\u672c ACK \u9700\u8981\u4e25\u683c\u9075\u5faa Raft \u534f\u8bae\u591a\u6570\u6d3e\u7684\u9650\u5236\uff0c3 \u526f\u672c\u9700\u8981 2 \u526f\u672c ACK \u540e\u624d\u80fd\u8fd4\u56de\uff0c5 \u526f\u672c\u9700\u8981 3 \u526f\u672c ACK \u540e\u624d\u80fd\u8fd4\u56de\uff0c\u526f\u672c\u8d8a\u591a\u8fd4\u56deACK\u7684\u65f6\u95f4\u8d8a\u957f\u3002\u8fd9\u4f1a\u5bfc\u81f4\u6027\u80fd\u4e0b\u964d"),(0,a.kt)("li",{parentName:"ul"},"DLedger \u6a21\u5f0f\u4e0b\uff0c\u7531\u4e8e\u5b58\u50a8\u5e93\u4f7f\u7528\u4e86 OpenMessaging DLedger \u5b58\u50a8\uff0c\u56e0\u6b64\u65e0\u6cd5\u590d\u7528 RocketMQ \u539f\u751f\u7684\u5b58\u50a8\u548c\u590d\u5236\u7684\u80fd\u529b\uff08\u6bd4\u5982 transientStorePool \u548c\u96f6\u62f7\u8d1d\u80fd\u529b\uff09\uff0c\u4e14\u5bf9\u7ef4\u62a4\u9020\u6210\u4e86\u56f0\u96be\u3002")),(0,a.kt)("p",null,"\u5728RocketMQ5.0\u7248\u672c\u65b0\u589e\u4e86DLedger Controller\u6a21\u5f0f\u6765\u89e3\u51b3\u4e0a\u9762\u5bf9\u7684\u75db\u70b9\u3002"),(0,a.kt)("p",null,"DLedger Controller\u7684\u90e8\u7f72\u6a21\u5f0f\u6709\u4e24\u79cd\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\u72ec\u7acb\u90e8\u7f72")),(0,a.kt)("p",{parentName:"li"},"\u5355\u72ec\u90e8\u7f72DLedger Controller\u96c6\u7fa4")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\u5185\u5d4cNameServer\u90e8\u7f72(\u63a8\u8350)")),(0,a.kt)("p",{parentName:"li"},"RocketMQ5.0\u5728\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u662f\u4e0d\u4f1a\u5f00\u542f\u5185\u5d4cController\u7684\uff0c\u901a\u8fc7\u8bbe\u7f6e\u914d\u7f6e\uff1a",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"enableControllerInNamesrv=true"))))),(0,a.kt)("p",null,"DLedger Controller\u4e3b\u8981\u7528\u4e8eBroker\u7684\u9009\u4e3b\uff0c\u800c\u6570\u636e\u7684\u5b58\u50a8\u80fd\u529b\u8fd8\u662f\u4f9d\u9760RocketMQ Broker\u3002 \u8fd9\u91cc\u53ef\u4ee5\u5f88\u597d\u4f7f\u7528\u5230MQ\u539f\u751f\u7684\u5b58\u50a8\u80fd\u529b\u4fbf\u4e8e\u7ef4\u62a4\u3002"),(0,a.kt)("h2",{id:"2-dledger-controller\u5982\u4f55\u5b9e\u73b0broker\u9009\u4e3b"},"2. DLedger Controller\u5982\u4f55\u5b9e\u73b0Broker\u9009\u4e3b"),(0,a.kt)("p",null,"![Broker Elect Master -2]","(E:\\download\\Broker Elect Master -2.png)"),(0,a.kt)("p",null,"Broker\u7684\u9009\u4e3b\u53d1\u8d77\u4e3b\u8981\u6709\u4e09\u79cd\u60c5\u51b5\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u901a\u8fc7admin\u547d\u4ee4\u4eba\u4e3a\u4e3b\u52a8\u53d1\u8d77\u91cd\u65b0\u9009\u4e3b(\u8fd0\u7ef4\u547d\u4ee4)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"RocketMQ\u96c6\u7fa4\u521a\u642d\u5efaBroker\u542f\u52a8\u6ce8\u518cBroker\u5230DLedger Controller\uff0cDLedger Controller\u8fd8\u6ca1\u6709\u9009\u4e3b\uff0c\u7136\u540e\u89e6\u53d1\u9009\u4e3b\u64cd\u4f5c\u3002(\u7cfb\u7edf\u521d\u59cb\u5316)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"RocketMQ Broker Master Inactive\uff0c\u4f1a\u89e6\u53d1DLedger Controller\u9009\u4e3bBroker"))),(0,a.kt)("p",null,"Broker \u7ec4\u7b2c\u4e00\u6b21\u4e0a\u7ebf\u65f6\uff0c\u8c03\u7528\u8be5\u65b9\u6cd5\u4e5f\u6ca1\u6709 Master\uff0c\u6b64\u65f6\u4f1a\u8ba9\u8c03\u7528\u7684 broker \u8bd5\u7740\u6210\u4e3a Master\uff0c\u5f62\u6210 ElectMasterEvent \u4e8b\u4ef6\u65e5\u5fd7\u5e76\u63d0\u4ea4\u63d0\u6848\uff0c\u526f\u672c\u7ec4\u4e2d\u7b2c\u4e00\u4e2a\u6210\u529f\u5e94\u7528 ElectMasterEvent \u4e8b\u4ef6\u65e5\u5fd7\u7684 Broker \u4f1a\u6210\u4e3a Master\uff0c\u5e76\u5f62\u6210\u53ea\u6709\u81ea\u5df1\u7684 SyncStateSet \u5217\u8868\u3002"),(0,a.kt)("h3",{id:"21-\u9009\u4e3b\u7684\u5143\u6570\u636e"},"2.1 \u9009\u4e3b\u7684\u5143\u6570\u636e"),(0,a.kt)("p",null,"\u9009\u4e3bBroker\u6ce8\u518c\u5230 ",(0,a.kt)("strong",{parentName:"p"},"DLedger Controller")," \u7684\u5143\u6570\u636e\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"clusterName"),(0,a.kt)("li",{parentName:"ul"},"brokerName"),(0,a.kt)("li",{parentName:"ul"},"address"),(0,a.kt)("li",{parentName:"ul"},"epoch"),(0,a.kt)("li",{parentName:"ul"},"maxOffset")),(0,a.kt)("p",null,"\u8fd9\u4e9b\u5143\u6570\u636e\u4e3b\u8981\u7528\u6765\u9009\u4e3b\u5224\u65ad\u3002"),(0,a.kt)("h3",{id:"22-\u9009\u4e3b\u7684\u6d41\u7a0b"},"2.2 \u9009\u4e3b\u7684\u6d41\u7a0b"),(0,a.kt)("p",null,"ELectMaster \u4e3b\u8981\u662f\u5728\u67d0 Broker \u526f\u672c\u7ec4\u7684 Master \u4e0b\u7ebf\u6216\u4e0d\u53ef\u8bbf\u95ee\u65f6\uff0c\u91cd\u65b0\u4ece SyncStateSet \u5217\u8868\u91cc\u9762\u9009\u51fa\u4e00\u4e2a\u65b0\u7684 Master\uff0c\u8be5\u4e8b\u4ef6\u7531 Controller \u81ea\u8eab\u53d1\u8d77\u3002 \u8fd9\u91cc\u4e3b\u8981\u662f\u5229\u7528\u4e86\u5fc3\u8df3\u673a\u5236, Broker \u5b9a\u671f\u4f1a\u548c Controller \u4e0a\u62a5\u5fc3\u8df3, Controller \u4e5f\u4f1a\u5b9a\u671f\u626b\u63cf\u8d85\u65f6\u7684 Broker (scanNotActiveBroker)\u3002\u5982\u679c\u67d0\u4e2a Broker \u5fc3\u8df3\u8d85\u65f6, Controller \u4f1a\u5224\u65ad\u662f\u5426\u4e3a Master (BrokerId = 0), \u5982\u679c\u662f Master, \u5219\u4f1a\u53d1\u8d77 ElectMaster, \u9009\u4e3e\u65b0\u7684 Broker Master\u3002 \u9009\u4e3e Master \u7684\u65b9\u5f0f\u6bd4\u8f83\u7b80\u5355\uff0c\u6211\u4eec\u53ea\u9700\u8981\u5728\u8be5\u7ec4 Broker \u6240\u5bf9\u5e94\u7684 SyncStateSet \u5217\u8868\u4e2d\uff0c\u6311\u9009\u4e00\u4e2a\u4ecd\u7136\u5b58\u6d3b\u7684\u526f\u672c(\u5fc3\u8df3\u672a\u8d85\u65f6)\u51fa\u6765\u6210\u4e3a\u65b0\u7684 Master \u5373\u53ef\uff0c\u9009\u4e3e\u51fa\u6765\u751f\u6210 ElectMaster \u4e8b\u4ef6\uff0c\u901a\u8fc7 DLedger \u5171\u8bc6\u540e\u5e94\u7528\u5230\u5185\u5b58\u5143\u6570\u636e\uff0c\u5e76\u5c06\u7ed3\u679c\u901a\u77e5\u5bf9\u5e94\u7684 Broker \u526f\u672c\u7ec4\uff08Broker \u672c\u8eab\u4e5f\u4f1a\u6709\u6709\u8f6e\u8be2\u673a\u5236\u6765\u83b7\u53d6\u81ea\u8eab\u526f\u672c\u7ec4\u7684 Master \u4fe1\u606f\uff08getReplicaInfo\uff09\u505a\u8fdb\u4e00\u6b65\u4fdd\u8bc1\uff0c\u9632\u6b62\u901a\u77e5\u4e22\u5931\uff09\u3002 \u6b64\u5916, Controller \u589e\u52a0 enableElectUnCleanMaster \u53c2\u6570\uff0c\u8fd9\u65f6\u5982\u679c SyncStateSet \u6ca1\u6709\u7b26\u5408\u8981\u6c42\u7684\u526f\u672c\uff0c\u53ef\u4ee5\u5728\u5f53\u524d\u6240\u6709\u7684\u5b58\u6d3b\u7684\u526f\u672c\u4e2d\u9009\uff0c\u4f46\u53ef\u80fd\u5927\u91cf\u6d88\u606f\u4e22\u5931\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Tips: \u5177\u4f53\u53ef\u4ee5\u53c2\u7167",(0,a.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7156202204104392717"},"\u300aRocketMQ5.0\u4e3b\u5907\u81ea\u52a8\u5207\u6362\u6a21\u5f0fBroker\u9009\u4e3b\u8be6\u89e3\u300b"))),(0,a.kt)("h2",{id:"3-\u53c2\u4e0ebroker\u9009\u4e3b\u7684\u6269\u5bb9\u548c\u7f29\u5bb9"},"3. \u53c2\u4e0eBroker\u9009\u4e3b\u7684\u6269\u5bb9\u548c\u7f29\u5bb9"),(0,a.kt)("p",null,"\u54ea\u4e9bBroker\u80fd\u591f\u53c2\u52a0\u9009\u4e3b\u8fd9\u4e2a\u662f\u6709\u89c4\u5219\u7684\uff0c\u540c\u65f6\u8fd9\u91cc\u4e5f\u6d89\u53ca\u5230\u4e86\u6211\u4eec\u8981\u8bf4\u9053\u7684Broker\u7684\u9009\u4e3b\u8303\u56f4\u7684\u7f29\u5bb9\u548c\u6269\u5bb9\u3002"),(0,a.kt)("h3",{id:"31-\u6269\u5bb9"},"3.1 \u6269\u5bb9"),(0,a.kt)("p",null,"\u5728DLedger Controller\u4e2d\u4fdd\u5b58\u4e86\u8fd9\u6837\u7684\u4e00\u4e2a\u96c6\u5408 ",(0,a.kt)("strong",{parentName:"p"},"SyncStateSet")," \uff1a"),(0,a.kt)("p",null,"SyncStateSet\u8868\u793a\u2f00\u4e2a broker \u526f\u672c\u7ec4\u4e2d\u8ddf\u4e0a Master \u7684 Slave \u526f\u672c\u6570\u52a0\u4e0a Master \u7684\u96c6\u5408, \u4e3b\u8981\u5224\u65ad\u6807\u51c6\u662f Master \u548c Slave \u4e4b\u95f4\u7684\u5dee\u8ddd\u3002\u5f53 Master \u4e0b\u7ebf\u65f6 \u6211\u4eec\u4f1a\u4ece SyncStateSet \u5217\u8868\u4e2d\u9009\u51fa\u65b0\u7684\u4e3b\u3002Master broker \u4f1a\u5b9a\u671f\u7684\u68c0\u6d4b\u662f\u5426\u9700\u8981\u6269\u5bb9\u548c\u7f29\u5bb9 SyncStateSet, \u5e76\u901a\u8fc7 api \u4e0a\u62a5 SyncStateSet \u5217\u8868\u4fe1\u606f\uff0cDLedger Controller \u4f1a\u6839\u636e\u4e0a\u8ff0\u4fe1\u606f\u7ef4\u62a4\u5f3a\u4e00\u81f4\u6027\u7684 Broker \u526f\u672c\u7ec4\u7684 SyncStateSet \u5217\u8868\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u2f00\u4e2a Slave \u526f\u672c\u8ffd\u8d76\u4e0a\u4e86 Master\uff0cMaster \u9700\u8981\u53ca\u65f6\u5411Controller Alter SyncStateSet \u3002\u52a0\u2f0aSyncStateSet \u7684\u6761\u4ef6\u662f slaveAckOffset >= ConfirmOffset\uff08\u5f53\u524d SyncStateSet \u4e2d\u6240\u6709\u526f\u672c\u7684 MaxOffset \u7684\u6700\u2f29\u503c\uff09\u3002"),(0,a.kt)("h3",{id:"32-\u7f29\u5bb9"},"3.2 \u7f29\u5bb9"),(0,a.kt)("p",null,"Broker\u65b0\u589e\u4e86\u914d\u7f6e\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"haMaxTimeSlaveNotCatchup"),(0,a.kt)("p",{parentName:"li"},"\u8868\u793aslave\u6ca1\u6709\u8ddf\u4e0aMaster\u7684\u6700\u5927\u65f6\u95f4\u95f4\u9694\uff0c\u82e5\u5728SyncStateSet\u4e2d\u7684slave\u8d85\u8fc7\u8be5\u65f6\u95f4\u95f4\u9694\u4f1a\u5c06\u5176\u4eceSyncStateSet\u79fb\u9664\u3002\u9ed8\u8ba4\u4e3a15000\uff0815s\uff09")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"HaConnection \u4e2d\u8bb0\u5f55 Slave \u4e0a\u2f00\u6b21\u8ddf\u4e0a Master \u7684\u65f6\u95f4\u6233 lastCaughtUpTimeMs\uff0c\u8be5\u65f6\u95f4\u6233\u542b\u4e49\u662f\uff1a\u6bcf\u6b21Master \u5411 Slave \u53d1\u9001\u6570\u636e\uff08transferData\uff09\u65f6\u8bb0\u5f55\u2f83\u2f30\u5f53\u524d\u7684 MaxOffset \u4e3a lastMasterMaxOffset \u4ee5\u53ca\u5f53\u524d\u65f6\u95f4\u6233 lastTransferTimeMs\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"ReadSocketService \u63a5\u6536\u5230 slaveAckOffset \u65f6\u82e5 slaveAckOffset >= lastMasterMaxOffset \u5219\u5c06lastCaughtUpTimeMs \u66f4\u65b0\u4e3a lastTransferTimeMs\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Master \u7aef\u901a\u8fc7\u5b9a\u65f6\u4efb\u52a1\u626b\u63cf\u6bcf\u4e00\u4e2a HaConnection\uff0c\u5982\u679c (cur_time - connection.lastCaughtUpTimeMs) > haMaxTimeSlaveNotCatchUp\uff0c\u5219\u8be5 Slave \u662f Out-of-sync \u7684\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5982\u679c\u68c0\u6d4b\u5230 Slave out of sync \uff0cmaster \u4f1a\u7acb\u523b\u5411 Controller \u4e0a\u62a5SyncStateSet\uff0c\u4ece\u800c Shrink SyncStateSet\u3002"))),(0,a.kt)("h2",{id:"4-\u6d88\u606f\u4e0d\u4e22\u5931\u914d\u7f6e"},"4. \u6d88\u606f\u4e0d\u4e22\u5931\u914d\u7f6e"),(0,a.kt)("p",null,"\u9996\u5148\u5c31\u662f\u542f\u7528DLedger Controller\u6a21\u5f0f\uff0c\u90e8\u7f72DLedger Controller \u4e0d\u7ba1\u662f\u5185\u5d4cNameServer\u8fd8\u662f\u72ec\u7acb\u90e8\u7f72\u90fd\u53ef\u4ee5\u3002"),(0,a.kt)("p",null,"\u5176\u6b21\u5c31\u662fBroker\u5f00\u542fBroker controller\u6a21\u5f0f(enableControllerMode=true,\u9ed8\u8ba4\u503c\u4e3afalse\u5173\u95ed\u72b6\u6001)\uff0c\u914d\u7f6eallAckInSyncStateSet=true\uff0c\u526f\u672c\u4e4b\u95f4\u7684\u590d\u5236\u4e3a\u540c\u6b65\u590d\u3002\u8fd9\u6837\u5c31\u80fd\u5b9e\u73b0\u6d88\u606f\u4e0d\u4e22\u5931\u3002"),(0,a.kt)("h2",{id:"5-\u603b\u7ed3"},"5. \u603b\u7ed3"),(0,a.kt)("p",null,"DLedger Controller\u6a21\u5f0f\u80fd\u591f\u5728\u6700\u5927\u9650\u5ea6\u5229\u7528RocketMQ\u539f\u6709\u7684\u5b58\u50a8\u80fd\u529b\u7684\u57fa\u7840\u4e0a\u63d0\u4f9b\u4e3b\u5907\u81ea\u52a8\u5207\u6362\u548c\u6d88\u606f\u4e0d\u4e22\u5931\u7684\u65b9\u6848\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6211\u662f\u8682\u8681\u80cc\u5927\u8c61(GitHub:mxsm)\uff0c\u6587\u7ae0\u5bf9\u4f60\u6709\u5e2e\u52a9\u70b9\u8d5e\u5173\u6ce8\u6211\uff0c\u6587\u7ae0\u6709\u4e0d\u6b63\u786e\u7684\u5730\u65b9\u8bf7\u60a8\u65a7\u6b63\u7559\u8a00\u8bc4\u8bba~\u8c22\u8c22!")))}s.isMDXComponent=!0}}]);