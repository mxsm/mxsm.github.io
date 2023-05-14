"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[6610],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},c=Object.keys(e);for(o=0;o<c.length;o++)r=c[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)r=c[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),m=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=m(e.components);return o.createElement(l.Provider,{value:t},e.children)},s="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=m(r),u=n,d=s["".concat(l,".").concat(u)]||s[u]||k[u]||c;return r?o.createElement(d,a(a({ref:t},p),{},{components:r})):o.createElement(d,a({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,a=new Array(c);a[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[s]="string"==typeof e?e:n,a[1]=i;for(var m=2;m<c;m++)a[m]=r[m];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},5560:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>k,frontMatter:()=>c,metadata:()=>i,toc:()=>m});var o=r(7462),n=(r(7294),r(3905));const c={title:"\u804a\u804aRocketMQ5\u6d88\u606f\u53d1\u9001",linkTitle:"\u804a\u804aRocketMQ5\u6d88\u606f\u53d1\u9001",sidebar_position:202301202006,description:"RocketMQ\u6d88\u606f\u7684\u53d1\u9001\u65b9\u5f0f\u548cRocketMQ\u6d88\u606f\u53d1\u9001\u6d88\u606f\u7c7b\u578b"},a=void 0,i={unversionedId:"rocketmq/rocketmq5/client/producer/message-send",id:"rocketmq/rocketmq5/client/producer/message-send",title:"\u804a\u804aRocketMQ5\u6d88\u606f\u53d1\u9001",description:"RocketMQ\u6d88\u606f\u7684\u53d1\u9001\u65b9\u5f0f\u548cRocketMQ\u6d88\u606f\u53d1\u9001\u6d88\u606f\u7c7b\u578b",source:"@site/docs/rocketmq/rocketmq5/03-client/producer/01-message-send.md",sourceDirName:"rocketmq/rocketmq5/03-client/producer",slug:"/rocketmq/rocketmq5/client/producer/message-send",permalink:"/docs/rocketmq/rocketmq5/client/producer/message-send",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/rocketmq/rocketmq5/03-client/producer/01-message-send.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1684027896,formattedLastUpdatedAt:"May 14, 2023",sidebarPosition:202301202006,frontMatter:{title:"\u804a\u804aRocketMQ5\u6d88\u606f\u53d1\u9001",linkTitle:"\u804a\u804aRocketMQ5\u6d88\u606f\u53d1\u9001",sidebar_position:202301202006,description:"RocketMQ\u6d88\u606f\u7684\u53d1\u9001\u65b9\u5f0f\u548cRocketMQ\u6d88\u606f\u53d1\u9001\u6d88\u606f\u7c7b\u578b"},sidebar:"rocketmq5",previous:{title:"\u751f\u4ea7\u8005",permalink:"/docs/rocketmq/rocketmq5/client/producer/"},next:{title:"Rocketmq\u6d88\u606f\u7ed3\u6784",permalink:"/docs/rocketmq/rocketmq5/client/producer/rocketmq-message"}},l={},m=[{value:"1. RocketMQ\u6d88\u606f\u53d1\u9001\u6a21\u5f0f",id:"1-rocketmq\u6d88\u606f\u53d1\u9001\u6a21\u5f0f",level:2},{value:"2. RocketMQ\u6d88\u606f\u53d1\u9001\u6d88\u606f\u7c7b\u578b",id:"2-rocketmq\u6d88\u606f\u53d1\u9001\u6d88\u606f\u7c7b\u578b",level:2}],p={toc:m},s="wrapper";function k(e){let{components:t,...r}=e;return(0,n.kt)(s,(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"1-rocketmq\u6d88\u606f\u53d1\u9001\u6a21\u5f0f"},"1. RocketMQ\u6d88\u606f\u53d1\u9001\u6a21\u5f0f"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/rocketmq5/client/producerRocketMQ%E6%B6%88%E6%81%AF%E5%8F%91%E9%80%81%E6%96%B9%E5%BC%8F.png",alt:"RocketMQ\u6d88\u606f\u53d1\u9001\u65b9\u5f0f"}),"\n\u6d88\u606f\u7684\u53d1\u9001\u662f\u7531\u6d88\u606f\u751f\u4ea7\u8005\u53d1\u9001\u7ed9Broker,\u7ecf\u8fc7Broker\u5904\u7406\u540e\u7684\u6d88\u606f\u624d\u80fd\u7ed9\u5230\u6d88\u8d39\u8005\u8fdb\u884c\u6d88\u8d39\u3002\u6d88\u606f\u53d1\u9001\u6709\u4e09\u79cd\u6a21\u5f0f\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u540c\u6b65\u6d88\u606f\uff1a\u751f\u4ea7\u8005\u5c06\u6d88\u606f\u53d1\u9001\u7ed9RocketMQ Broker\uff0c\u751f\u4ea7\u8005\u6536\u5230Broker\u7684ACK\u540e\u624d\u662f\u6807\u660e\u6d88\u606f\u53d1\u9001\u6210\u529f\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u5f02\u6b65\u6d88\u606f\uff1a \u751f\u4ea7\u8005\u53d1\u9001\u6d88\u606f\u7ed9Broker\u540e\u4e0d\u4f1a\u4e00\u76f4\u7b49\u5f85Broker\u7684ACK,\u4f46\u662f\u4f1a\u901a\u8fc7\u56de\u8c03\u6765\u5904\u7406\u6d88\u606f\u7684ACK\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u5355\u5411\u6d88\u606f\uff1a\u751f\u4ea7\u8005\u53ea\u7ba1\u5f80Broker\u53d1\u9001\u6d88\u606f\u5b8c\u5168\u4e0d\u7406\u4f1aBroker\u662f\u5426\u6b63\u5e38\u4fdd\u5b58\u3002")),(0,n.kt)("h2",{id:"2-rocketmq\u6d88\u606f\u53d1\u9001\u6d88\u606f\u7c7b\u578b"},"2. RocketMQ\u6d88\u606f\u53d1\u9001\u6d88\u606f\u7c7b\u578b"),(0,n.kt)("p",null,"\u53d1\u9001\u6d88\u606f\u7c7b\u578b:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u666e\u901a\u6d88\u606f\uff0c\u8fd9\u4e2a\u4e5f\u662f\u5e73\u65f6\u4f7f\u7528\u6700\u591a\u7684\u6d88\u606f\u7c7b\u578b\u3002\u53ea\u662f\u5305\u542b\u4e86\u4e1a\u52a1\u6570\u636e"),(0,n.kt)("li",{parentName:"ol"},"\u987a\u5e8f\u6d88\u606f\uff0c\u53ef\u4ee5\u6309\u7167\u6d88\u606f\u7684\u53d1\u9001\u987a\u5e8f\u6765\u6d88\u8d39(FIFO)\u3002RocketMQ\u53ef\u4ee5\u4e25\u683c\u7684\u4fdd\u8bc1\u6d88\u606f\u6709\u5e8f\uff0c\u53ef\u4ee5\u5206\u4e3a\u5206\u533a\u6709\u5e8f\u6216\u8005\u5168\u5c40\u6709\u5e8f\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u5ef6\u65f6\u6d88\u606f\uff0c\u5ef6\u65f6\u6d88\u606f\u5c31\u662f\u6d88\u606f\u5b9a\u65f6\u5ef6\u540e\uff0c\u5ef6\u65f6\u6d88\u606f\u5206\u4e3a\u4e24\u79cd:",(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"\u7b49\u7ea7\u5ef6\u65f6"),(0,n.kt)("li",{parentName:"ol"},"\u4efb\u610f\u5ef6\u65f6(5.0\u65b0\u589e)"))),(0,n.kt)("li",{parentName:"ol"},"\u4e8b\u52a1\u6d88\u606f"),(0,n.kt)("li",{parentName:"ol"},"\u6279\u91cf\u6d88\u606f\uff0c\u591a\u6761\u6d88\u606f\u4e00\u6b21\u6027\u53d1\u9001\u5230Broker")))}k.isMDXComponent=!0}}]);