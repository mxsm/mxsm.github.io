"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[1824],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>s});var a=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function m(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,a,o=function(e,r){if(null==e)return{};var t,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=a.createContext({}),c=function(e){var r=a.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):m(m({},r),e)),t},p=function(e){var r=c(e.components);return a.createElement(i.Provider,{value:r},e.children)},k="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},v=a.forwardRef((function(e,r){var t=e.components,o=e.mdxType,n=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),k=c(t),v=o,s=k["".concat(i,".").concat(v)]||k[v]||u[v]||n;return t?a.createElement(s,m(m({ref:r},p),{},{components:t})):a.createElement(s,m({ref:r},p))}));function s(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var n=t.length,m=new Array(n);m[0]=v;var l={};for(var i in r)hasOwnProperty.call(r,i)&&(l[i]=r[i]);l.originalType=e,l[k]="string"==typeof e?e:o,m[1]=l;for(var c=2;c<n;c++)m[c]=t[c];return a.createElement.apply(null,m)}return a.createElement.apply(null,t)}v.displayName="MDXCreateElement"},6427:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>m,default:()=>k,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var a=t(7462),o=(t(7294),t(3905));const n={title:"RocketMQ5.0 NameServer\u67b6\u6784\u8bbe\u8ba1",linkTitle:"RocketMQ5.0 NameServer\u67b6\u6784\u8bbe\u8ba1",date:new Date("2022-12-18T00:00:00.000Z"),weight:202212181625},m=void 0,l={unversionedId:"rocketmq/rocketmq5/nameserver/1nameserver-architecture",id:"rocketmq/rocketmq5/nameserver/1nameserver-architecture",title:"RocketMQ5.0 NameServer\u67b6\u6784\u8bbe\u8ba1",description:"1. \u67b6\u6784\u8bbe\u8ba1",source:"@site/docs/rocketmq/rocketmq5/nameserver/1nameserver-architecture.md",sourceDirName:"rocketmq/rocketmq5/nameserver",slug:"/rocketmq/rocketmq5/nameserver/1nameserver-architecture",permalink:"/docs/rocketmq/rocketmq5/nameserver/1nameserver-architecture",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/rocketmq/rocketmq5/nameserver/1nameserver-architecture.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1672841610,formattedLastUpdatedAt:"Jan 4, 2023",frontMatter:{title:"RocketMQ5.0 NameServer\u67b6\u6784\u8bbe\u8ba1",linkTitle:"RocketMQ5.0 NameServer\u67b6\u6784\u8bbe\u8ba1",date:"2022-12-18T00:00:00.000Z",weight:202212181625},sidebar:"rocketmq5",previous:{title:"RocketMQ5.0 Controller DLedger\u6a21\u5f0f",permalink:"/docs/rocketmq/rocketmq5/quick-start/dledger-controller"},next:{title:"RocketMQ5.0 NameServer\u542f\u52a8\u6d41\u7a0b",permalink:"/docs/rocketmq/rocketmq5/nameserver/2nameserver-start-process"}},i={},c=[{value:"1. \u67b6\u6784\u8bbe\u8ba1",id:"1-\u67b6\u6784\u8bbe\u8ba1",level:2},{value:"2. \u4f18\u70b9\u4e0e\u7f3a\u70b9",id:"2-\u4f18\u70b9\u4e0e\u7f3a\u70b9",level:2},{value:"2.1 \u4f18\u70b9",id:"21-\u4f18\u70b9",level:4},{value:"2.2 \u7f3a\u70b9",id:"22-\u7f3a\u70b9",level:4},{value:"3. MQ5\u76f8\u5bf9\u4e8eMQ4\u7684\u6539\u8fdb",id:"3-mq5\u76f8\u5bf9\u4e8emq4\u7684\u6539\u8fdb",level:2},{value:"4.\u4f18\u5316\u8054\u60f3-\uff08\u63d0\u4ea4ISSUE#5698\u8ba8\u8bba\u662f\u5426\u6709\u5fc5\u8981\uff09",id:"4\u4f18\u5316\u8054\u60f3-\u63d0\u4ea4issue5698\u8ba8\u8bba\u662f\u5426\u6709\u5fc5\u8981",level:2}],p={toc:c};function k(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"1-\u67b6\u6784\u8bbe\u8ba1"},"1. \u67b6\u6784\u8bbe\u8ba1"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/rocketmq5/nameserver/NameServer-architecture.png",alt:"NameServer-architecture"})),(0,o.kt)("p",null,"NameServer\u662f\u4e00\u4e2a\u975e\u5e38\u7b80\u5355\u7684Topic\u8def\u7531\u6ce8\u518c\u4e2d\u5fc3\uff0c\u5176\u89d2\u8272\u7c7b\u4f3cDubbo\u4e2d\u7684zookeeper\uff0c\u652f\u6301Broker\u7684\u52a8\u6001\u6ce8\u518c\u4e0e\u53d1\u73b0\u3002\u4e3b\u8981\u5305\u62ec\u4e24\u4e2a\u529f\u80fd\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Broker\u7ba1\u7406\uff0cNameServer\u63a5\u53d7Broker\u96c6\u7fa4\u7684\u6ce8\u518c\u4fe1\u606f\u5e76\u4e14\u4fdd\u5b58\u4e0b\u6765\u4f5c\u4e3a\u8def\u7531\u4fe1\u606f\u7684\u57fa\u672c\u6570\u636e\u3002\u7136\u540e\u63d0\u4f9b\u5fc3\u8df3\u68c0\u6d4b\u673a\u5236\uff0c\u68c0\u67e5Broker\u662f\u5426\u8fd8\u5b58\u6d3b\uff1b"),(0,o.kt)("li",{parentName:"ol"},"\u8def\u7531\u4fe1\u606f\u7ba1\u7406\uff0c\u6bcf\u4e2aNameServer\u5c06\u4fdd\u5b58\u5173\u4e8eBroker\u96c6\u7fa4\u7684\u6574\u4e2a\u8def\u7531\u4fe1\u606f\u548c\u7528\u4e8e\u5ba2\u6237\u7aef\u67e5\u8be2\u7684\u961f\u5217\u4fe1\u606f\u3002\u7136\u540eProducer\u548cConsumer\u901a\u8fc7NameServer\u5c31\u53ef\u4ee5\u77e5\u9053\u6574\u4e2aBroker\u96c6\u7fa4\u7684\u8def\u7531\u4fe1\u606f\uff0c\u4ece\u800c\u8fdb\u884c\u6d88\u606f\u7684\u6295\u9012\u548c\u6d88\u8d39\u3002")),(0,o.kt)("p",null,"NameServer\u901a\u5e38\u4e5f\u662f\u96c6\u7fa4\u7684\u65b9\u5f0f\u90e8\u7f72\uff0c\u5404\u5b9e\u4f8b\u95f4\u76f8\u4e92\u4e0d\u8fdb\u884c\u4fe1\u606f\u901a\u8baf(\u5982\u4e0a\u56fe\u6240\u793a),\u5f7c\u6b64\u4e4b\u95f4\u76f8\u4e92\u72ec\u7acb\u3002Broker\u662f\u5411\u6bcf\u4e00\u53f0NameServer\u6ce8\u518c\u81ea\u5df1\u7684\u8def\u7531\u4fe1\u606f\uff0c\u6240\u4ee5\u6bcf\u4e00\u4e2aNameServer\u5b9e\u4f8b\u4e0a\u9762\u90fd\u4fdd\u5b58\u4e00\u4efd\u5b8c\u6574\u7684\u8def\u7531\u4fe1\u606f\u3002\u5f53\u67d0\u4e2aNameServer\u56e0\u67d0\u79cd\u539f\u56e0\u4e0b\u7ebf\u4e86\uff0cBroker\u4ecd\u7136\u53ef\u4ee5\u5411\u5176\u5b83NameServer\u540c\u6b65\u5176\u8def\u7531\u4fe1\u606f\uff0cProducer\u548cConsumer\u4ecd\u7136\u53ef\u4ee5\u52a8\u6001\u611f\u77e5Broker\u7684\u8def\u7531\u7684\u4fe1\u606f\u3002"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"RocketMQ5.0\u7248\u672c\u540eNameServer\u540c\u65f6\u4e5f\u53ef\u4ee5\u4f5c\u4e3aController\u6a21\u5757\u7684\u4e00\u4e2a\u5bb9\u5668\uff0cController\u6a21\u5757\u5185\u5d4c\u5230NameServer\u4e2d\u3002")),(0,o.kt)("h2",{id:"2-\u4f18\u70b9\u4e0e\u7f3a\u70b9"},"2. \u4f18\u70b9\u4e0e\u7f3a\u70b9"),(0,o.kt)("h4",{id:"21-\u4f18\u70b9"},"2.1 \u4f18\u70b9"),(0,o.kt)("p",null,"NameServer\u96c6\u7fa4\u5404\u5b9e\u4f8b\u4e0d\u901a\u8baf\u7684\u8bbe\u8ba1\u597d\u5904\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5b9e\u73b0\u7b80\u5355\uff0c\u5728\u590d\u6742\u7684\u7f51\u7edc\u73af\u5883\u4e2dNameServer\u5b9e\u73b0\u7b80\u5355\uff0c\u65e0\u9700\u5f15\u5165\u5927\u91cf\u7684\u5206\u5e03\u5f0f\u7cfb\u7edf\u7684\u7406\u8bba\u53bb\u63d0\u4f9b\u6570\u636e\u4e00\u81f4\u6027\u7684\u652f\u6301"),(0,o.kt)("li",{parentName:"ol"},"NameServer\u7684\u6a2a\u5411\u62d3\u5c55\u66f4\u597d\uff0c\u56e0\u4e3aNameServer\u7684\u5404\u5b9e\u4f8b\u4e4b\u95f4\u6ca1\u6709\u901a\u8baf\uff0c\u5f53Consume\u548cProducer\u4eceNameServer\u62c9\u53d6\u6570\u636e\u5bfc\u81f4NameServer\u538b\u529b\u8fc7\u5927\u7684\u65f6\u5019\u3002\u6b64\u65f6\u53ef\u4ee5\u901a\u8fc7\u6a2a\u5411\u62d3\u5c55\u65b0\u589e\u52a0\u65b0\u7684NameServer\u6765\u51cf\u8f7b\u538b\u529b\u3002")),(0,o.kt)("h4",{id:"22-\u7f3a\u70b9"},"2.2 \u7f3a\u70b9"),(0,o.kt)("p",null,"\u5f53Broker\u7684\u6570\u91cf\u8f83\u591a\uff0c\u8fde\u63a5\u6570\u8fc7\u591a\u7684\u65f6\u5019\u4f1a\u5bf9NameServer\u9020\u6210\u4e00\u5b9a\u7684\u538b\u529b\u3002"),(0,o.kt)("h2",{id:"3-mq5\u76f8\u5bf9\u4e8emq4\u7684\u6539\u8fdb"},"3. MQ5\u76f8\u5bf9\u4e8eMQ4\u7684\u6539\u8fdb"),(0,o.kt)("p",null,"NameServer\u5728RocketMQ5.0\u7684\u7248\u672c\u505a\u4e86\u5f88\u591a\u7684\u4f18\u5316\u5de5\u4f5c\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"broker\u6ce8\u518c\u7ebf\u7a0b\u6c60\u548c\u5ba2\u6237\u7aef\u8def\u7531\u83b7\u53d6\u7ebf\u7a0b\u6c60\u9694\u79bb"),(0,o.kt)("p",{parentName:"li"},"\u5f53\u524dNameServer\u4f1a\u7528\u540c\u4e00\u4e2a\u7ebf\u7a0b\u6c60\u548c\u961f\u5217\u53bb\u5904\u7406\u6240\u6709\u7684\u5ba2\u6237\u7aef\u8def\u7531\u8bf7\u6c42\uff0c\u670d\u52a1\u7aef\u6ce8\u518c\u8bf7\u6c42\u7b49\uff0c\u5e76\u4e14\u961f\u5217\u7684\u5927\u5c0f\u548c\u7ebf\u7a0b\u6570\u90fd\u662f\u4e0d\u53ef\u914d\u7f6e\u7684\uff0c\u5982\u679c\u5176\u4e2d\u4e00\u4e2a\u7c7b\u578b\u7684\u8bf7\u6c42\u6253\u7206\u7ebf\u7a0b\u6c60\uff0c\u5c06\u4f1a\u5f71\u54cd\u5230\u6240\u6709\u8bf7\u6c42\u3002\u5c06\u7ebf\u7a0b\u6c60\u8fdb\u884c\u4e86\u9694\u79bb\uff0c\u5c06\u6700\u91cd\u8981\u8981\u7684\u5ba2\u6237\u7aef\u8def\u7531\u8bf7\u6c42\u5355\u72ec\u9694\u79bb\u51fa\u6765\uff0c\u961f\u5217\u7684\u5927\u5c0f\u548c\u7ebf\u7a0b\u6570\u5747\u662f\u53ef\u914d\u7f6e\u7684\u3002\u7ebf\u7a0b\u6c60\u4e4b\u95f4\u7684\u8bf7\u6c42\u5904\u7406\u76f8\u4e92\u9694\u79bb\uff0c\u4e0d\u53d7\u5f71\u54cd\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Topic \u8def\u7531\u7f13\u5b58\u7684\u4f18\u5316"),(0,o.kt)("p",{parentName:"li"},"\u5f53\u524dNameServer\u5f53\u5ba2\u6237\u7aef\u53d1\u9001\u8def\u7531\u8bf7\u6c42\u65f6\uff0c\u4f1a\u5229\u7528topicQueueTable\u548cbrokerAddrTable\u6765\u6784\u9020\u51fa\u6700\u7ec8\u7684\u8def\u7531\u4fe1\u606fTopicRouteData\uff0c\u8fd9\u91cc\u6d89\u53ca\u4e86\u5728\u8bfb\u9501\u4e2d\u904d\u5386 broker\uff0c\u6709\u4e00\u5b9a\u7684cpu\u8017\u8d39\u3002\u901a\u8fc7\u6784\u9020TopicRoute\u7684\u7f13\u5b58topicRouteDataMap\uff0c\u76f4\u63a5\u5728\u5ba2\u6237\u7aef\u8bf7\u6c42\u65f6\u8fd4\u56deTopicRoute\uff0c\u800c\u989d\u5916\u7684\u4ee3\u4ef7\u662f\u5728broker\u8bf7\u6c42\u3001\u4e0b\u7ebf\uff0c\u5220\u9664topic\u7b49\u884c\u4e3a\u65f6\u540c\u65f6\u64cd\u4f5ctopicRouteDataMap\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u6279\u91cf\u6ce8\u9500Broker"),(0,o.kt)("p",{parentName:"li"},"\u589e\u52a0BatchUnRegisterService\uff0c\u5f02\u6b65\u5316\u6279\u91cf\u5904\u7406broker\u4e0b\u7ebf\uff0c\u52a0\u901fbroker\u4e0b\u7ebf\u6d41\u7a0b\u3002"))),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/rocketmq/wiki/RIP-29-Optimize-RocketMQ-NameServer"},"RIP-29")," \u662fNameServer\u7684\u6539\u8fdb\u589e\u5f3a")),(0,o.kt)("h2",{id:"4\u4f18\u5316\u8054\u60f3-\u63d0\u4ea4issue5698\u8ba8\u8bba\u662f\u5426\u6709\u5fc5\u8981"},"4.\u4f18\u5316\u8054\u60f3-\uff08\u63d0\u4ea4ISSUE#5698\u8ba8\u8bba\u662f\u5426\u6709\u5fc5\u8981\uff09"),(0,o.kt)("p",null,"\u751f\u4ea7\u8005\u548c\u6d88\u8d39\u8005\u8fde\u63a5NameServer\u83b7\u53d6\u8def\u7531\u4fe1\u606f\u90fd\u662f\u968f\u673a\u7684\uff0c\u4ece\u7ed9\u5b9a\u7684NameServer\u5217\u8868\u4e2d\u6253\u6563\u5217\u8868\u968f\u673a\u9009\u62e9\u4e00\u4e2aNameServer\u8fdb\u884c\u8fde\u63a5\u83b7\u53d6\u6570\u636e\u3002\u8fd9\u79cd\u60c5\u51b5\u5b58\u5728\u5982\u4e0b\u5f0a\u7aef\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"NameServer\u90e8\u7f72\u7684\u8f83\u597d\u7684\u673a\u5668\u65e0\u6cd5\u53d1\u6325\u673a\u5668\u7684\u6240\u6709\u6027\u80fd\uff0c\u800c\u6027\u80fd\u8f83\u5dee\u7684\u673a\u5668\u53ef\u80fd\u8fde\u63a5\u5f88\u591a\u5bfc\u81f4\u670d\u52a1\u5b95\u673a\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u4e0d\u80fd\u591f\u6307\u5b9aNameServer\u8fdb\u884c\u8fde\u63a5(\u53ea\u914d\u7f6e\u4e00\u4e2aNameServer\u5730\u5740\u9664\u5916)\u3002")),(0,o.kt)("p",null,"\u6240\u4ee5\u8003\u8651\u5728\u5ba2\u6237\u7aef(\u751f\u4ea7\u8005\u548c\u6d88\u8d39\u8005)\u589e\u52a0\u9009\u62e9\u8fde\u63a5NameServer\u7684\u7b56\u7565\u6a21\u5f0f\uff0c\u7531\u5f00\u53d1\u8005\u81ea\u5df1\u9009\u62e9\u6216\u8005\u5b9e\u73b0\u7b56\u7565\u6765\u9009\u62e9NameServer\u8fdb\u884c\u8fde\u63a5\u3002\u53ef\u4ee5\u8003\u8651\u4e00\u4e0b\u7b56\u7565\u6a21\u5f0f\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u968f\u673a\u7b56\u7565\uff1a\u968f\u673a\u4e00\u4e2aNameServer\u8fdb\u884c\u8fde\u63a5(\u5f53\u524d\u7684\u6a21\u5f0f)\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u6307\u5b9a\u7b56\u7565\uff1a\u6307\u5b9a\u4e00\u4e2a\u7279\u5b9a\u7684NameServer\u8fdb\u884c\u8fde\u63a5\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u8f6e\u8be2\u7b56\u7565\uff1a\u5f53\u524d\u5e94\u7528\u4e2d\u7684\u5ba2\u6237\u7aef\u81ea\u884c\u5728\u7ed9\u5b9a\u7684NameServer\u3002"),(0,o.kt)("li",{parentName:"ol"},"NameServer\u6700\u5c0f\u5ba2\u6237\u7aef\u8fde\u63a5\u6570\u7b56\u7565\uff1a\u83b7\u53d6\u5f53\u524dNameServer\u4e2d\u5ba2\u6237\u7aef\u8fde\u63a5\u6570\u6700\u5c0f\u7684\u8fdb\u884c\u8fde\u63a5\u3002")),(0,o.kt)("p",null,"\u540e\u7eed\u8fd8\u53ef\u4ee5\u589e\u52a0\u5176\u4ed6\u7684\u7b56\u7565\u3002"))}k.isMDXComponent=!0}}]);