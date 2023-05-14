"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[3577],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>k});var r=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var o=r.createContext({}),m=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},i=function(e){var t=m(e.components);return r.createElement(o.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},C=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,u=e.originalType,o=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),p=m(n),C=s,k=p["".concat(o,".").concat(C)]||p[C]||c[C]||u;return n?r.createElement(k,a(a({ref:t},i),{},{components:n})):r.createElement(k,a({ref:t},i))}));function k(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var u=n.length,a=new Array(u);a[0]=C;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[p]="string"==typeof e?e:s,a[1]=l;for(var m=2;m<u;m++)a[m]=n[m];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}C.displayName="MDXCreateElement"},6167:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>c,frontMatter:()=>u,metadata:()=>l,toc:()=>m});var r=n(7462),s=(n(7294),n(3905));const u={title:"MQPushConsumer\u6e90\u7801\u5206\u6790",linkTitle:"MQPushConsumer\u6e90\u7801\u5206\u6790",sidebar_position:202303092156,description:"MQPushConsumer\u6e90\u7801\u5206\u6790"},a=void 0,l={unversionedId:"rocketmq/rocketmq5/client/consumer/MQPushConsumer/MQPushConsumer-source",id:"rocketmq/rocketmq5/client/consumer/MQPushConsumer/MQPushConsumer-source",title:"MQPushConsumer\u6e90\u7801\u5206\u6790",description:"MQPushConsumer\u6e90\u7801\u5206\u6790",source:"@site/docs/rocketmq/rocketmq5/03-client/02-consumer/01-MQPushConsumer/01-MQPushConsumer-source.md",sourceDirName:"rocketmq/rocketmq5/03-client/02-consumer/01-MQPushConsumer",slug:"/rocketmq/rocketmq5/client/consumer/MQPushConsumer/MQPushConsumer-source",permalink:"/docs/rocketmq/rocketmq5/client/consumer/MQPushConsumer/MQPushConsumer-source",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/rocketmq/rocketmq5/03-client/02-consumer/01-MQPushConsumer/01-MQPushConsumer-source.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1684027896,formattedLastUpdatedAt:"May 14, 2023",sidebarPosition:202303092156,frontMatter:{title:"MQPushConsumer\u6e90\u7801\u5206\u6790",linkTitle:"MQPushConsumer\u6e90\u7801\u5206\u6790",sidebar_position:202303092156,description:"MQPushConsumer\u6e90\u7801\u5206\u6790"},sidebar:"rocketmq5",previous:{title:"MQPushConsumer",permalink:"/docs/rocketmq/rocketmq5/client/consumer/MQPushConsumer/"},next:{title:"MQPushConsumer\u6e90\u7801\u5206\u6790-\u6d88\u606f\u62c9\u53d6",permalink:"/docs/rocketmq/rocketmq5/client/consumer/MQPushConsumer/MQPushCousumer-pullmessage"}},o={},m=[{value:"1. \u6982\u8ff0",id:"1-\u6982\u8ff0",level:2},{value:"2. \u521d\u59cb\u5316DefaultMQPushConsumer",id:"2-\u521d\u59cb\u5316defaultmqpushconsumer",level:3},{value:"3. \u542f\u52a8DefaultMQPushConsumer",id:"3-\u542f\u52a8defaultmqpushconsumer",level:2},{value:"3.1 \u914d\u7f6e\u68c0\u67e5",id:"31-\u914d\u7f6e\u68c0\u67e5",level:3},{value:"3.2 \u5b9e\u4f8b\u5316\u5bf9\u8c61",id:"32-\u5b9e\u4f8b\u5316\u5bf9\u8c61",level:3},{value:"3.3 \u8bbe\u7f6e\u6d88\u8d39\u8fdb\u5ea6\u5b58\u50a8\u65b9\u5f0f",id:"33-\u8bbe\u7f6e\u6d88\u8d39\u8fdb\u5ea6\u5b58\u50a8\u65b9\u5f0f",level:3},{value:"3.4 \u521b\u5efa\u6d88\u8d39\u670d\u52a1",id:"34-\u521b\u5efa\u6d88\u8d39\u670d\u52a1",level:3},{value:"3.5 \u542f\u52a8\u670d\u52a1",id:"35-\u542f\u52a8\u670d\u52a1",level:3},{value:"4. \u603b\u7ed3",id:"4-\u603b\u7ed3",level:2}],i={toc:m},p="wrapper";function c(e){let{components:t,...n}=e;return(0,s.kt)(p,(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"1-\u6982\u8ff0"},"1. \u6982\u8ff0"),(0,s.kt)("p",null,"MQPushConsumer\u7684\u5b9e\u73b0\u7c7bDefaultMQPushConsumer\uff0cDefaultMQPushConsumer\u662fRocketMQ\u4e2d\u7684\u4e00\u79cd\u6d88\u8d39\u8005\uff0c\u7528\u4e8e\u63a5\u6536\u5e76\u5904\u7406\u6d88\u606f\u3002"),(0,s.kt)("p",null,"DefaultMQPushConsumer\u53ef\u4ee5\u6309\u7167\u4e00\u5b9a\u7684\u89c4\u5219\u81ea\u52a8\u4ece\u6d88\u606f\u961f\u5217\u4e2d\u83b7\u53d6\u6d88\u606f\u5e76\u8fdb\u884c\u6d88\u8d39\u3002\u652f\u6301\u4e24\u79cd\u6d88\u606f\u6d88\u8d39\u6a21\u5f0f\uff1a\u5e76\u53d1\u6d88\u8d39\u548c\u987a\u5e8f\u6d88\u8d39\u3002\u5e76\u53d1\u6d88\u8d39\u662f\u6307\u591a\u4e2a\u6d88\u8d39\u8005\u540c\u65f6\u6d88\u8d39\u540c\u4e00\u4e2a\u6d88\u606f\u961f\u5217\u4e2d\u7684\u6d88\u606f\uff0c\u800c\u987a\u5e8f\u6d88\u8d39\u5219\u662f\u6307\u6309\u7167\u6d88\u606f\u7684\u987a\u5e8f\u4f9d\u6b21\u8fdb\u884c\u6d88\u8d39\u3002"),(0,s.kt)("p",null,"\u4f7f\u7528DefaultMQPushConsumer\u65f6\uff0c\u9700\u8981\u5148\u8bbe\u7f6e\u6d88\u8d39\u8005\u7ec4\u3001\u6d88\u606f\u6a21\u5f0f\u3001\u4e3b\u9898\u8ba2\u9605\u4fe1\u606f\u4ee5\u53ca\u6d88\u606f\u76d1\u542c\u5668\u7b49\u76f8\u5173\u4fe1\u606f\u3002\u7136\u540e\uff0c\u542f\u52a8\u6d88\u8d39\u8005\u5373\u53ef\u81ea\u52a8\u83b7\u53d6\u5e76\u6d88\u8d39\u6d88\u606f\u3002\u6d88\u8d39\u8005\u8fd8\u652f\u6301\u6682\u505c\u548c\u6062\u590d\u6d88\u8d39\u3001\u589e\u52a0\u6216\u5220\u9664\u8ba2\u9605\u4e3b\u9898\u7b49\u64cd\u4f5c\u3002"),(0,s.kt)("p",null,"DefaultMQPushConsumer\u7684\u5e95\u5c42\u5b9e\u73b0\u4f7f\u7528\u4e86MQClientInstance\u548cConsumeMessageService\u7b49\u7ec4\u4ef6\uff0c\u4ee5\u53ca\u6d88\u606f\u961f\u5217\u7684\u8d1f\u8f7d\u5747\u8861\u548c\u91cd\u5e73\u8861\u7b97\u6cd5\u3002\u5176\u6574\u4f53\u67b6\u6784\u6e05\u6670\u3001\u6a21\u5757\u5316\uff0c\u6613\u4e8e\u6269\u5c55\u548c\u5b9a\u5236\u5316\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'public class Consumer {\n\n    public static final String CONSUMER_GROUP = "please_rename_unique_group_name_4";\n    public static final String DEFAULT_NAMESRVADDR = "127.0.0.1:9876";\n    public static final String TOPIC = "TopicTest";\n\n    public static void main(String[] args) throws MQClientException {\n        \n        DefaultMQPushConsumer consumer = new DefaultMQPushConsumer(CONSUMER_GROUP);\n        consumer.setNamesrvAddr(DEFAULT_NAMESRVADDR);\n        consumer.setConsumeFromWhere(ConsumeFromWhere.CONSUME_FROM_FIRST_OFFSET);\n        consumer.subscribe(TOPIC, "*");\n        consumer.registerMessageListener((MessageListenerConcurrently) (msg, context) -> {\n            System.out.printf("%s Receive New Messages: %s %n", Thread.currentThread().getName(), msg);\n            return ConsumeConcurrentlyStatus.CONSUME_SUCCESS;\n        });\n        consumer.start();\n        System.out.printf("Consumer Started.%n");\n    }\n}\n\n')),(0,s.kt)("p",null,"\u4e0a\u8ff0\u4ee3\u7801\u6765\u81ea\u5b98\u7f51\uff0c\u4e0a\u8ff0\u4ee3\u7801\u5b9e\u73b0\u4e86\u5982\u4f55\u6d88\u8d39MQ\u7684\u6d88\u606f\u3002\u4e0b\u9762\u5c31\u6765\u6e90\u7801\u5206\u6790\u4e00\u4e0bDefaultMQPushConsumer\u7684\u6d88\u8d39\u8fc7\u7a0b\u3002"),(0,s.kt)("h3",{id:"2-\u521d\u59cb\u5316defaultmqpushconsumer"},"2. \u521d\u59cb\u5316DefaultMQPushConsumer"),(0,s.kt)("p",null,"\u521d\u59cb\u5316DefaultMQPushConsumer\uff1a\u5728\u521d\u59cb\u5316DefaultMQPushConsumer\u65f6\uff0c\u9700\u8981\u8bbe\u7f6e\u6d88\u8d39\u8005\u7ec4\u540d\u3001NameServer\u5730\u5740\u4ee5\u53ca\u6d88\u606f\u76d1\u542c\u5668\u3002"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"\u8bbe\u7f6e\u6d88\u8d39\u8005\u7ec4\u540d")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"\u8bbe\u7f6eNameServer\u5730\u5740"),(0,s.kt)("p",{parentName:"li"},"\u83b7\u53d6\u6d88\u8d39\u8005\u6d88\u8d39\u7684Topic\u7684\u4fe1\u606f")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"\u8bbe\u7f6e\u76d1\u542c\u5668"),(0,s.kt)("p",{parentName:"li"},"\u6d88\u606f\u76d1\u542c\u5668\u7528\u4e8e\u5904\u7406\u6d88\u606f\u7684\u5177\u4f53\u6d88\u8d39\u903b\u8f91\u3002"))),(0,s.kt)("p",null,"\u540c\u65f6\u8bbe\u7f6e\u6d88\u8d39\u8005\u6d88\u8d39\u7684\u8d77\u59cb\u4f4d\u7f6e\uff0c\u73b0\u5728\u5728\u7528\u7684\u6709\u4e09\u79cd\uff1a"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"CONSUME_FROM_LAST_OFFSET")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"CONSUME_FROM_FIRST_OFFSET")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"CONSUME_FROM_TIMESTAMP"))),(0,s.kt)("p",null,"\u544a\u8bc9\u6d88\u8d39\u8005\u5e94\u8be5\u4ece\u4f55\u5904\u5f00\u59cb\u6d88\u8d39\u6d88\u606f\u3002"),(0,s.kt)("p",null,"\u6ce8\u518c\u6d88\u8d39\u8005\u76d1\u542c\u5668\uff1aDefaultMQPushConsumer\u4f1a\u6839\u636e\u6d88\u8d39\u8005\u7684\u8ba2\u9605\u5173\u7cfb\uff0c\u4ece\u6307\u5b9a\u7684Topic\u4e2d\u62c9\u53d6\u6d88\u606f\uff0c\u5e76\u5c06\u6d88\u606f\u63a8\u9001\u5230\u6d88\u8d39\u8005\u76d1\u542c\u5668\u4e2d\u8fdb\u884c\u5904\u7406\u3002\u6d88\u8d39\u8005\u76d1\u542c\u5668\u9700\u8981\u5b9e\u73b0ConsumeMessageListener\u63a5\u53e3\uff0c\u5b9e\u73b0onMessage\u65b9\u6cd5\u6765\u5904\u7406\u6d88\u606f\u3002"),(0,s.kt)("p",null,"\u8bbe\u7f6e\u6d88\u8d39\u8005\u6d88\u8d39\u7684\u4e3b\u9898Topic\u4ee5\u53ca\u9700\u8981\u7684Tag"),(0,s.kt)("admonition",{type:"info"},(0,s.kt)("p",{parentName:"admonition"},"\u6d88\u606f\u8fc7\u6ee4\uff1a\u5728DefaultMQPushConsumer\u4e2d\uff0c\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6eMessageSelector\u6765\u5b9e\u73b0\u6d88\u606f\u8fc7\u6ee4\u3002\u6d88\u606f\u8fc7\u6ee4\u53ef\u4ee5\u901a\u8fc7\u8868\u8fbe\u5f0f\u6765\u5b9e\u73b0\uff0c\u8868\u8fbe\u5f0f\u4e2d\u53ef\u4ee5\u4f7f\u7528\u6d88\u606f\u5c5e\u6027\u548cSQL\u8868\u8fbe\u5f0f\u3002")),(0,s.kt)("h2",{id:"3-\u542f\u52a8defaultmqpushconsumer"},"3. \u542f\u52a8DefaultMQPushConsumer"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"DefaultMQPushConsumer"),"\u542f\u52a8\u6d88\u8d39\u5b9e\u9645\u4e0a\u662f\u542f\u52a8",(0,s.kt)("inlineCode",{parentName:"p"},"DefaultMQPushConsumerImpl")," \u7684\u5b9e\u4f8b\u3002\u6240\u6709\u7684\u903b\u8f91\u4e5f\u662f\u5728\u8fd9\u91cc\u4e0b\u9762\u6211\u4eec\u6765\u8fdb\u884c\u5206\u6790\u3002"),(0,s.kt)("h3",{id:"31-\u914d\u7f6e\u68c0\u67e5"},"3.1 \u914d\u7f6e\u68c0\u67e5"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"C:%5CUsers%5Cmxsm%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20230309222802155.png",alt:"image-20230309222802155"})),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u68c0\u67e5\u4e00\u4e9b\u5fc5\u987b\u7684\u914d\u7f6e\u662f\u5426\u7b26\u5408\u89c4\u5219"),(0,s.kt)("li",{parentName:"ul"},"\u62f7\u8d1d\u8ba2\u9605\u7684\u4fe1\u606f\u3002")),(0,s.kt)("h3",{id:"32-\u5b9e\u4f8b\u5316\u5bf9\u8c61"},"3.2 \u5b9e\u4f8b\u5316\u5bf9\u8c61"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"C:%5CUsers%5Cmxsm%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20230309223828739.png",alt:"image-20230309223828739"})),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u5b9e\u4f8b\u5316MQClientInstance"),(0,s.kt)("li",{parentName:"ul"},"RebalanceImpl\u5bf9\u8c61\u8bbe\u7f6e\u4e00\u4e9b\u53c2\u6570\uff0c\u4f8b\u5982\u6d88\u8d39\u8005\u7ec4\uff0c\u6d88\u606f\u6a21\u5f0f\u7b49\u7b49")),(0,s.kt)("h3",{id:"33-\u8bbe\u7f6e\u6d88\u8d39\u8fdb\u5ea6\u5b58\u50a8\u65b9\u5f0f"},"3.3 \u8bbe\u7f6e\u6d88\u8d39\u8fdb\u5ea6\u5b58\u50a8\u65b9\u5f0f"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"C:%5CUsers%5Cmxsm%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20230309224210708.png",alt:"image-20230309224210708"})),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u5e7f\u64ad\u6d88\u8d39\u5b58\u5728\u672c\u5730"),(0,s.kt)("li",{parentName:"ul"},"\u96c6\u7fa4\u6d88\u8d39\uff0c\u6d88\u8d39\u8fdb\u5ea6\u5b58\u5728Broker")),(0,s.kt)("p",null,"\u540c\u65f6\u542f\u52a8\u7684\u65f6\u5019\u4f1a\u5c06\u6d88\u8d39\u8fdb\u5ea6\u52a0\u8f7d\u3002"),(0,s.kt)("h3",{id:"34-\u521b\u5efa\u6d88\u8d39\u670d\u52a1"},"3.4 \u521b\u5efa\u6d88\u8d39\u670d\u52a1"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"C:%5CUsers%5Cmxsm%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20230309224603476.png",alt:"image-20230309224603476"})),(0,s.kt)("p",null,"\u6839\u636e\u76d1\u542c\u5668\u662f ",(0,s.kt)("strong",{parentName:"p"},"MessageListenerOrderly")," \u8fd8\u662f ",(0,s.kt)("strong",{parentName:"p"},"MessageListenerConcurrently")," \u6765\u5224\u65ad\u521b\u5efa\u7684\u521b\u5efa\u6d88\u8d39\u6d88\u606f\u7684\u670d\u52a1\u7c7b\u578b\u3002"),(0,s.kt)("h3",{id:"35-\u542f\u52a8\u670d\u52a1"},"3.5 \u542f\u52a8\u670d\u52a1"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"C:%5CUsers%5Cmxsm%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20230309225942533.png",alt:"image-20230309225942533"})),(0,s.kt)("p",null,"\u542f\u52a8MQClientInstance\u5b9e\u4f8b\uff0c\u7136\u540e\u53bb\u540e\u7eed\u7684\u64cd\u4f5c\u4f8b\u5982\uff1a"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u68c0\u67e5Broker\u662f\u5426\u6709\u6548"),(0,s.kt)("li",{parentName:"ul"},"\u53d1\u9001\u5fc3\u8df3\u7ed9Broker"),(0,s.kt)("li",{parentName:"ul"},"\u89e6\u53d1\u518d\u5e73\u8861")),(0,s.kt)("p",null,"\u5230\u8fd9\u91cc\u6574\u4e2a\u6d88\u8d39\u8005\u5c31\u5df2\u7ecf\u542f\u52a8\u3002"),(0,s.kt)("h2",{id:"4-\u603b\u7ed3"},"4. \u603b\u7ed3"),(0,s.kt)("p",null,"\u9996\u5148\u4f1a\u68c0\u67e5\u914d\u7f6e\u4fe1\u606f\u5e76\u62f7\u8d1d\u8ba2\u9605\u4fe1\u606f\uff0c\u7136\u540e\u6839\u636e\u6d88\u8d39\u8005\u7684\u6d88\u606f\u6a21\u5f0f\u8bbe\u7f6e\u6d88\u8d39\u8005\u7ec4\u3002\u63a5\u7740\uff0c\u521b\u5efaMQClientFactory\u5b9e\u4f8b\uff0c\u7528\u4e8e\u7ba1\u7406MQClientInstance\u548c\u7f51\u7edc\u8fde\u63a5\u3002\u7136\u540e\uff0c\u5c06\u6d88\u8d39\u8005\u6ce8\u518c\u5230MQClientFactory\u4e2d\uff0c\u5e76\u8bbe\u7f6eAllocateMessageQueueStrategy\u3001RebalanceImpl\u3001MessageListener\u7b49\u76f8\u5173\u4fe1\u606f\u3002"),(0,s.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u6839\u636e\u662f\u5426\u987a\u5e8f\u6d88\u8d39\u6765\u521b\u5efa\u5bf9\u5e94\u7684ConsumeMessageService\u3002ConsumeMessageService\u662f\u6d88\u8d39\u6d88\u606f\u7684\u6838\u5fc3\u7ec4\u4ef6\uff0c\u7528\u4e8e\u4ece\u6d88\u606f\u961f\u5217\u4e2d\u83b7\u53d6\u6d88\u606f\u5e76\u8fdb\u884c\u6d88\u8d39\u3002\u5982\u679c\u662f\u987a\u5e8f\u6d88\u8d39\uff0c\u5219\u521b\u5efaConsumeMessageOrderlyService\u5b9e\u4f8b\uff1b\u5426\u5219\uff0c\u521b\u5efaConsumeMessageConcurrentlyService\u5b9e\u4f8b\u3002"),(0,s.kt)("p",null,"\u6700\u540e\uff0c\u542f\u52a8ConsumeMessageService\u548cMQClientFactory\uff0c\u5e76\u66f4\u65b0\u4e3b\u9898\u8ba2\u9605\u4fe1\u606f\uff0c\u53d1\u9001\u5fc3\u8df3\u68c0\u3002"))}c.isMDXComponent=!0}}]);