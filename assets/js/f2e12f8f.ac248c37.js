"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[3573],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>u});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function k(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),m=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},p=function(e){var r=m(e.components);return n.createElement(i.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},s=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=k(e,["components","mdxType","originalType","parentName"]),s=m(t),u=o,g=s["".concat(i,".").concat(u)]||s[u]||c[u]||a;return t?n.createElement(g,l(l({ref:r},p),{},{components:t})):n.createElement(g,l({ref:r},p))}));function u(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=s;var k={};for(var i in r)hasOwnProperty.call(r,i)&&(k[i]=r[i]);k.originalType=e,k.mdxType="string"==typeof e?e:o,l[1]=k;for(var m=2;m<a;m++)l[m]=t[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}s.displayName="MDXCreateElement"},2131:(e,r,t)=>{t.r(r),t.d(r,{contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>k,toc:()=>i});var n=t(7462),o=(t(7294),t(3905));const a={title:"RocketMQ5.0\u4e3b\u5907\u81ea\u52a8\u5207\u6362\u6a21\u5f0fBroker\u9009\u4e3b\u8be6\u89e3",linkTitle:"RocketMQ5.0\u4e3b\u5907\u81ea\u52a8\u5207\u6362\u6a21\u5f0fBroker\u9009\u4e3b\u8be6\u89e3",date:new Date("2022-10-19T00:00:00.000Z"),weight:202210191648},l=void 0,k={unversionedId:"rocketmq/rocketmq5/ha/broker-elect-master",id:"rocketmq/rocketmq5/ha/broker-elect-master",isDocsHomePage:!1,title:"RocketMQ5.0\u4e3b\u5907\u81ea\u52a8\u5207\u6362\u6a21\u5f0fBroker\u9009\u4e3b\u8be6\u89e3",description:"RocketMQ5.0\u589e\u52a0\u4e86\u4e3b\u5907\u81ea\u52a8\u5207\u6362\u6a21\u5f0f\uff0c\u8fd9\u4e2a\u6a21\u5f0f\u662f\u57fa\u4e8e\u65b0\u5f00\u53d1\u7684\u6a21\u5757DLedger Controller(\u57fa\u4e8eRaft\u7ec4\u4ef6DLedger)\u3002\u4e0b\u9762\u7ed3\u5408\u6e90\u7801\u6765\u5206\u6790\u4e00\u4e0bRocketMQ\u4e3b\u5907\u81ea\u52a8\u5207\u6362\u6a21\u5f0f\u4e0b\u7684\u9009\u4e3b\u7684\u6d41\u7a0b\u3002",source:"@site/docs/rocketmq/rocketmq5/ha/broker-elect-master.md",sourceDirName:"rocketmq/rocketmq5/ha",slug:"/rocketmq/rocketmq5/ha/broker-elect-master",permalink:"/docs/rocketmq/rocketmq5/ha/broker-elect-master",editUrl:"https://github.com/mxsm/mxsm-website/edit/main/docs/rocketmq/rocketmq5/ha/broker-elect-master.md",tags:[],version:"current",frontMatter:{title:"RocketMQ5.0\u4e3b\u5907\u81ea\u52a8\u5207\u6362\u6a21\u5f0fBroker\u9009\u4e3b\u8be6\u89e3",linkTitle:"RocketMQ5.0\u4e3b\u5907\u81ea\u52a8\u5207\u6362\u6a21\u5f0fBroker\u9009\u4e3b\u8be6\u89e3",date:"2022-10-19T00:00:00.000Z",weight:202210191648},sidebar:"rocketmq5",previous:{title:"_index",permalink:"/docs/rocketmq/rocketmq5/ha/_index"},next:{title:"RocketMQ5.0 Broker\u4e3b\u5907\u81ea\u52a8\u5207\u6362\u6a21\u5f0f\u6d88\u606f\u4e0d\u4e22\u5931\u90e8\u7f72\u65b9\u6848",permalink:"/docs/rocketmq/rocketmq5/quick-start/1"}},i=[{value:"1. \u4f55\u65f6\u9009\u4e3bBroker",id:"1-\u4f55\u65f6\u9009\u4e3bbroker",children:[],level:2},{value:"2. \u5982\u4f55\u9009\u4e3bBroker",id:"2-\u5982\u4f55\u9009\u4e3bbroker",children:[{value:"2.1 Broker\u542f\u52a8\u6ce8\u518c\u89e6\u53d1\u9009\u4e3b",id:"21-broker\u542f\u52a8\u6ce8\u518c\u89e6\u53d1\u9009\u4e3b",children:[],level:3},{value:"2.2 Broker Master Inactive\u89e6\u53d1\u9009\u4e3b",id:"22-broker-master-inactive\u89e6\u53d1\u9009\u4e3b",children:[],level:3},{value:"2.3 Admin\u547d\u4ee4\u89e6\u53d1\u9009\u4e3b",id:"23-admin\u547d\u4ee4\u89e6\u53d1\u9009\u4e3b",children:[],level:3}],level:2},{value:"3. \u603b\u7ed3",id:"3-\u603b\u7ed3",children:[],level:2}],m={toc:i};function p(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"RocketMQ5.0\u589e\u52a0\u4e86\u4e3b\u5907\u81ea\u52a8\u5207\u6362\u6a21\u5f0f\uff0c\u8fd9\u4e2a\u6a21\u5f0f\u662f\u57fa\u4e8e\u65b0\u5f00\u53d1\u7684\u6a21\u5757DLedger Controller(\u57fa\u4e8eRaft\u7ec4\u4ef6",(0,o.kt)("a",{parentName:"p",href:"https://github.com/openmessaging/dledger"},"DLedger"),")\u3002\u4e0b\u9762\u7ed3\u5408\u6e90\u7801\u6765\u5206\u6790\u4e00\u4e0bRocketMQ\u4e3b\u5907\u81ea\u52a8\u5207\u6362\u6a21\u5f0f\u4e0b\u7684\u9009\u4e3b\u7684\u6d41\u7a0b\u3002"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Tips: RocketMQ\u6e90\u7801\u7248\u672c\uff1a5.0.0")),(0,o.kt)("h2",{id:"1-\u4f55\u65f6\u9009\u4e3bbroker"},"1. \u4f55\u65f6\u9009\u4e3bBroker"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/rocketmq5/broker/ha/Broker%20Elect%20Master.png",alt:"Broker Elect Master"})),(0,o.kt)("p",null,"Broker\u7684\u9009\u4e3b\u53d1\u8d77\u4e3b\u8981\u6709\u4e09\u79cd\u60c5\u51b5\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u901a\u8fc7admin\u547d\u4ee4\u4eba\u4e3a\u4e3b\u52a8\u53d1\u8d77\u91cd\u65b0\u9009\u4e3b"),(0,o.kt)("p",{parentName:"li"},"\u547d\u4ee4\u53d1\u8d77\u5177\u4f53\u53c2\u7167 ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"electMaster"))," \u547d\u4ee4(\u8fd0\u7ef4\u547d\u4ee4\u7531\u7b14\u8005\u5f00\u53d1\u5b8c\u6210)\uff0c\u8be6\u7ec6\u4f7f\u7528\u53c2\u7167\u547d\u4ee4\u7684\u8bf4\u660e")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"RocketMQ\u96c6\u7fa4\u521a\u642d\u5efaBroker\u542f\u52a8\u6ce8\u518cBroker\u5230DLedger Controller\uff0cDLedger Controller\u8fd8\u6ca1\u6709\u9009\u4e3b\uff0c\u7136\u540e\u89e6\u53d1\u9009\u4e3b\u64cd\u4f5c\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"RocketMQ Broker Master\u4e0b\u7ebf\u6216\u8005\u56e0\u4e3a\u5176\u4ed6\u60c5\u51b5\u4e0d\u80fd\u6b63\u5e38\u63d0\u4f9b\u670d\u52a1\u4e0eDLedger Controller\u670d\u52a1\u4e0d\u80fd\u6b63\u5e38\u8fde\u63a5\u6216\u8005\u5fc3\u8df3\u5931\u6548\uff0c\u4f1a\u89e6\u53d1DLedger Controller\u9009\u4e3bBroker"))),(0,o.kt)("h2",{id:"2-\u5982\u4f55\u9009\u4e3bbroker"},"2. \u5982\u4f55\u9009\u4e3bBroker"),(0,o.kt)("p",null,"\u6587\u7ae0\u4e0a\u9762\u6709\u63d0\u5230\u89e6\u53d1\u9009\u4e3b\u7684\u4e09\u79cd\u60c5\u51b5\uff0c\u4e0b\u9762\u6211\u4eec\u5c31\u628a\u8fd9\u4e09\u79cd\u60c5\u51b5\u4e00\u4e00\u8fdb\u884c\u5206\u6790"),(0,o.kt)("h3",{id:"21-broker\u542f\u52a8\u6ce8\u518c\u89e6\u53d1\u9009\u4e3b"},"2.1 Broker\u542f\u52a8\u6ce8\u518c\u89e6\u53d1\u9009\u4e3b"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/rocketmq5/broker/ha/Broker%20Master%20elect%20process.png",alt:"Broker Master elect process"})),(0,o.kt)("p",null,"\u4e3b\u5907\u81ea\u4e3b\u5207\u6362\u6a21\u5f0f\u4e0bBroker\u542f\u52a8\u65f6\u5019\u5230\u5e95\u662fMaster\u8fd8\u662fSlave\u9700\u8981\u901a\u8fc7DLedger Controller\u670d\u52a1\u901a\u8fc7\u9009\u4e3b\u7684\u65b9\u5f0f\u6765\u786e\u5b9a\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Broker\u542f\u52a8\u6ce8\u518c\u5230DLedger Controller")),(0,o.kt)("p",null,"Broker\u542f\u52a8\u540e\uff0c\u5c06Broker\u7684\u5143\u6570\u636e\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"clusterName"),(0,o.kt)("li",{parentName:"ul"},"brokerName"),(0,o.kt)("li",{parentName:"ul"},"address"),(0,o.kt)("li",{parentName:"ul"},"epoch"),(0,o.kt)("li",{parentName:"ul"},"maxOffset")),(0,o.kt)("p",null,"\u6ce8\u518c\u5230DLedger Controller,\u7531 ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"BrokerOuterAPI#registerBrokerToController"))," \u63d0\u4f9b\u6ce8\u518c\u7684\u670d\u52a1\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/rocketmq5/broker/ha/image-20221019180858462.png",alt:"image-20221019180858462"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"DLedger Controller\u89e6\u53d1\u9009\u4e3b")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"DLedger Controller")," \u6a21\u5757\u7684\u4e3b\u8981\u903b\u8f91\u5728ReplicasInfoManager\u4e2d\u3002\u5f53DLedger Controller\u63a5\u6536\u5230Broker\u53d1\u9001\u7684  ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"CONTROLLER_REGISTER_BROKER"))," \u6d88\u606f\u540e\u5c31\u5904\u7406\u9009\u4e3b\uff0c\u7531ReplicasInfoManager#registerBroker\u5904\u7406\u903b\u8f91\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/rocketmq5/broker/ha/image-20221019182903186.png",alt:"image-20221019182903186"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Broker Change Role")),(0,o.kt)("p",null,"Broker\u6ce8\u518c\u540e\u6536\u5230DLedger Controller\u8fd4\u56de\u7684\u6570\u636e\uff0c\u6839\u636e\u8fd4\u56de\u6570\u636e\u7684Master Address\u548cBroker\u7684IP\u8fdb\u884c\u5bf9\u6bd4\u6765\u5224\u65ad\u5f53\u524dBroker\u662f\u8bbe\u7f6e\u4e3aMaster\u8fd8\u662fSlave\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/rocketmq5/broker/ha/image-20221019190349777.png",alt:"image-20221019190349777"})),(0,o.kt)("p",null,"\u5230\u8fd9\u91cc\u5c31\u5b9e\u73b0\u4e86Broker\u7684\u9009\u4e3b\u3002"),(0,o.kt)("h3",{id:"22-broker-master-inactive\u89e6\u53d1\u9009\u4e3b"},"2.2 Broker Master Inactive\u89e6\u53d1\u9009\u4e3b"),(0,o.kt)("p",null,"Broker Master\u4e0b\u7ebf\u6216\u8005Broker Master\u548cDLedger Controller\u5fc3\u8df3\u5931\u6548\u89e6\u53d1\u9009\u4e3b\uff0cDLedger Controller\u6709\u4e00\u4e2a\u5b9a\u65f6\u4efb\u52a1\u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"DefaultBrokerHeartbeatManager#scanNotActiveBroker")," \uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/rocketmq5/broker/ha/image-20221019191416688.png",alt:"image-20221019191416688"})),(0,o.kt)("p",null,"\u901a\u77e5\u6700\u7ec8\u4f1a\u89e6\u53d1 ",(0,o.kt)("inlineCode",{parentName:"p"},"ControllerManager#onBrokerInactive")," \u65b9\u6cd5\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/rocketmq5/broker/ha/image-20221019191744705.png",alt:"image-20221019191744705"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"ReplicasInfoManager#electMaster"))," \u8d1f\u8d23\u9009\u4e3b\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/rocketmq5/broker/ha/image-20221019195612264.png",alt:"image-20221019195612264"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Tips: \u7b14\u8005\u9886\u4e86\u4e00\u4e2a\u5f00\u53d1\u4e00\u4e2aPreferred Master \u7684\u529f\u80fd\u4efb\u52a1\uff0c\u53ef\u4ee5\u4f18\u5148\u9009\u62e9\u67d0\u4e2a Broker \u4f5c\u4e3a master\u3002\u8fd8\u5728\u4ee3\u7801\u7814\u7a76\u548c\u8bbe\u8ba1\u9636\u6bb5\u3002\u540e\u7eed\u4f1a\u63d0\u4ea4PR")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u53c2\u4e0e\u9009\u4e3b\u7684Broker\u662f\u4eceSyncStateSet\u9009\u53d6\u7684\u3002")),(0,o.kt)("p",null,"\u7136\u540e\u9009\u4e3e\u7684\u7ed3\u679c\u901a\u77e5Broker, ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"AdminBrokerProcessor#notifyBrokerRoleChanged"))," \u5904\u7406\u6539\u53d8\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/rocketmq5/broker/ha/image-20221019200415384.png",alt:"image-20221019200415384"})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/rocketmq5/broker/ha/image-20221019200445279.png",alt:"image-20221019200445279"})),(0,o.kt)("h3",{id:"23-admin\u547d\u4ee4\u89e6\u53d1\u9009\u4e3b"},"2.3 Admin\u547d\u4ee4\u89e6\u53d1\u9009\u4e3b"),(0,o.kt)("p",null,"\u9996\u5148\u770b\u4e00\u4e0b\u547d\u4ee4\u7684\u8bf4\u660e\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"usage: mqadmin electMaster -a <arg> -b <arg> -c <arg> [-h] -n <arg>\n -a,--controllerAddress <arg>   The address of controller\n -b,--brokerAddress <arg>       The address of the broker which requires to become master\n -c,--clusterName <arg>         the clusterName of broker\n -h,--help                      Print help\n -n,--brokerName <arg>          The broker name of the replicas that require to be manipulated\n")),(0,o.kt)("p",null,"\u6307\u5b9a\u4e00\u4e2aBroker\u4f5c\u4e3aMaster\u3002\u540e\u7aefDLedger Controller\u7684\u5b9e\u73b0\u4e5f\u662f\u901a\u8fc7 ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"ReplicasInfoManager#electMaster"))," \u5b9e\u73b0\u3002"),(0,o.kt)("p",null,"\u5bf9\u4e8e\u4ee3\u7801\u7684\u8be6\u7ec6\u7ec6\u8282\u5927\u5bb6\u53ef\u4ee5\u53bb\u7814\u7a76\u4e00\u4e0bRocketMQ5.0\u7684\u4ee3\u7801\u7ec6\u8282\uff0c\u4ee5\u53caDLedger\u76f8\u5173\u7684\u4ee3\u7801\u3002"),(0,o.kt)("h2",{id:"3-\u603b\u7ed3"},"3. \u603b\u7ed3"),(0,o.kt)("p",null,"Master ID\u7531DLedger Controller\u8bbe\u7f6e\uff0cSlave\u7684ID\u4e5f\u662f\u3002\u9009\u4e3e\u53d1\u8d77\u65b9\u53ef\u80fd\u662f\u7531Broker\u53d1\u8d77\u6216\u8005\u7531DLedger Controller\u53d1\u8d77\uff0c\u4e5f\u6709\u53ef\u80fd\u624b\u52a8\u901a\u8fc7 ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Admin electMaster")),"\u547d\u4ee4\u53d1\u8d77\u3002Broker\u4e3b\u5907\u81ea\u4e3b\u5207\u6362\u7684\u4e3b\u8981\u4f9d\u8d56DLedger Controller\u3002"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u6211\u662f\u8682\u8681\u80cc\u5927\u8c61(GitHub:mxsm)\uff0c\u6587\u7ae0\u5bf9\u4f60\u6709\u5e2e\u52a9\u70b9\u8d5e\u5173\u6ce8\u6211\uff0c\u6587\u7ae0\u6709\u4e0d\u6b63\u786e\u7684\u5730\u65b9\u8bf7\u60a8\u65a7\u6b63\u7559\u8a00\u8bc4\u8bba~\u8c22\u8c22!")))}p.isMDXComponent=!0}}]);