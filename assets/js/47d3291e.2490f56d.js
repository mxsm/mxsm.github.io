"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[5310],{3905:(e,t,r)=>{r.d(t,{Zo:()=>k,kt:()=>d});var l=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,l)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,l,n=function(e,t){if(null==e)return{};var r,l,n={},o=Object.keys(e);for(l=0;l<o.length;l++)r=o[l],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)r=o[l],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=l.createContext({}),i=function(e){var t=l.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},k=function(e){var t=i(e.components);return l.createElement(u.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},p=l.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,k=c(e,["components","mdxType","originalType","parentName"]),m=i(r),p=n,d=m["".concat(u,".").concat(p)]||m[p]||s[p]||o;return r?l.createElement(d,a(a({ref:t},k),{},{components:r})):l.createElement(d,a({ref:t},k))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=p;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c[m]="string"==typeof e?e:n,a[1]=c;for(var i=2;i<o;i++)a[i]=r[i];return l.createElement.apply(null,a)}return l.createElement.apply(null,r)}p.displayName="MDXCreateElement"},8600:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>s,frontMatter:()=>o,metadata:()=>c,toc:()=>i});var l=r(7462),n=(r(7294),r(3905));const o={title:"RocketMQ-\u7279\u6027",date:new Date("2021-05-10T00:00:00.000Z"),weight:202102102303},a="\u7279\u6027(features)",c={unversionedId:"rocketmq/rocketmq4/quick-start/rocketmq-character",id:"rocketmq/rocketmq4/quick-start/rocketmq-character",title:"RocketMQ-\u7279\u6027",description:"----",source:"@site/docs/rocketmq/rocketmq4/quick-start/rocketmq-character.md",sourceDirName:"rocketmq/rocketmq4/quick-start",slug:"/rocketmq/rocketmq4/quick-start/rocketmq-character",permalink:"/docs/rocketmq/rocketmq4/quick-start/rocketmq-character",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/rocketmq/rocketmq4/quick-start/rocketmq-character.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1680402643,formattedLastUpdatedAt:"Apr 2, 2023",frontMatter:{title:"RocketMQ-\u7279\u6027",date:"2021-05-10T00:00:00.000Z",weight:202102102303},sidebar:"rocketmq4",previous:{title:"RocketMQ-\u57fa\u672c\u6982\u5ff5",permalink:"/docs/rocketmq/rocketmq4/quick-start/rocketmq-base-concept"},next:{title:"RocketMQ Docker\u90e8\u7f72",permalink:"/docs/rocketmq/rocketmq4/quick-start/rocketmq-docker"}},u={},i=[{value:"1 \u8ba2\u9605\u4e0e\u53d1\u5e03",id:"1-\u8ba2\u9605\u4e0e\u53d1\u5e03",level:2},{value:"2 \u6d88\u606f\u987a\u5e8f",id:"2-\u6d88\u606f\u987a\u5e8f",level:2},{value:"3 \u6d88\u606f\u8fc7\u6ee4",id:"3-\u6d88\u606f\u8fc7\u6ee4",level:2},{value:"4 \u6d88\u606f\u53ef\u9760\u6027",id:"4-\u6d88\u606f\u53ef\u9760\u6027",level:2},{value:"5 \u81f3\u5c11\u4e00\u6b21",id:"5-\u81f3\u5c11\u4e00\u6b21",level:2},{value:"6 \u56de\u6eaf\u6d88\u8d39",id:"6-\u56de\u6eaf\u6d88\u8d39",level:2},{value:"7 \u4e8b\u52a1\u6d88\u606f",id:"7-\u4e8b\u52a1\u6d88\u606f",level:2},{value:"8 \u5b9a\u65f6\u6d88\u606f",id:"8-\u5b9a\u65f6\u6d88\u606f",level:2},{value:"9 \u6d88\u606f\u91cd\u8bd5",id:"9-\u6d88\u606f\u91cd\u8bd5",level:2},{value:"10 \u6d88\u606f\u91cd\u6295",id:"10-\u6d88\u606f\u91cd\u6295",level:2},{value:"11 \u6d41\u91cf\u63a7\u5236",id:"11-\u6d41\u91cf\u63a7\u5236",level:2},{value:"12 \u6b7b\u4fe1\u961f\u5217",id:"12-\u6b7b\u4fe1\u961f\u5217",level:2}],k={toc:i},m="wrapper";function s(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,l.Z)({},k,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"\u7279\u6027features"},"\u7279\u6027(features)"),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"1-\u8ba2\u9605\u4e0e\u53d1\u5e03"},"1 \u8ba2\u9605\u4e0e\u53d1\u5e03"),(0,n.kt)("p",null,"\u6d88\u606f\u7684\u53d1\u5e03\u662f\u6307\u67d0\u4e2a\u751f\u4ea7\u8005\u5411\u67d0\u4e2atopic\u53d1\u9001\u6d88\u606f\uff1b\u6d88\u606f\u7684\u8ba2\u9605\u662f\u6307\u67d0\u4e2a\u6d88\u8d39\u8005\u5173\u6ce8\u4e86\u67d0\u4e2atopic\u4e2d\u5e26\u6709\u67d0\u4e9btag\u7684\u6d88\u606f\uff0c\u8fdb\u800c\u4ece\u8be5topic\u6d88\u8d39\u6570\u636e\u3002"),(0,n.kt)("h2",{id:"2-\u6d88\u606f\u987a\u5e8f"},"2 \u6d88\u606f\u987a\u5e8f"),(0,n.kt)("p",null,"\u6d88\u606f\u6709\u5e8f\u6307\u7684\u662f\u4e00\u7c7b\u6d88\u606f\u6d88\u8d39\u65f6\uff0c\u80fd\u6309\u7167\u53d1\u9001\u7684\u987a\u5e8f\u6765\u6d88\u8d39\u3002\u4f8b\u5982\uff1a\u4e00\u4e2a\u8ba2\u5355\u4ea7\u751f\u4e86\u4e09\u6761\u6d88\u606f\u5206\u522b\u662f\u8ba2\u5355\u521b\u5efa\u3001\u8ba2\u5355\u4ed8\u6b3e\u3001\u8ba2\u5355\u5b8c\u6210\u3002\u6d88\u8d39\u65f6\u8981\u6309\u7167\u8fd9\u4e2a\u987a\u5e8f\u6d88\u8d39\u624d\u80fd\u6709\u610f\u4e49\uff0c\u4f46\u662f\u540c\u65f6\u8ba2\u5355\u4e4b\u95f4\u662f\u53ef\u4ee5\u5e76\u884c\u6d88\u8d39\u7684\u3002RocketMQ\u53ef\u4ee5\u4e25\u683c\u7684\u4fdd\u8bc1\u6d88\u606f\u6709\u5e8f\u3002"),(0,n.kt)("p",null,"\u987a\u5e8f\u6d88\u606f\u5206\u4e3a\u5168\u5c40\u987a\u5e8f\u6d88\u606f\u4e0e\u5206\u533a\u987a\u5e8f\u6d88\u606f\uff0c\u5168\u5c40\u987a\u5e8f\u662f\u6307\u67d0\u4e2aTopic\u4e0b\u7684\u6240\u6709\u6d88\u606f\u90fd\u8981\u4fdd\u8bc1\u987a\u5e8f\uff1b\u90e8\u5206\u987a\u5e8f\u6d88\u606f\u53ea\u8981\u4fdd\u8bc1\u6bcf\u4e00\u7ec4\u6d88\u606f\u88ab\u987a\u5e8f\u6d88\u8d39\u5373\u53ef\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5168\u5c40\u987a\u5e8f\n\u5bf9\u4e8e\u6307\u5b9a\u7684\u4e00\u4e2a Topic\uff0c\u6240\u6709\u6d88\u606f\u6309\u7167\u4e25\u683c\u7684\u5148\u5165\u5148\u51fa\uff08FIFO\uff09\u7684\u987a\u5e8f\u8fdb\u884c\u53d1\u5e03\u548c\u6d88\u8d39\u3002\n\u9002\u7528\u573a\u666f\uff1a\u6027\u80fd\u8981\u6c42\u4e0d\u9ad8\uff0c\u6240\u6709\u7684\u6d88\u606f\u4e25\u683c\u6309\u7167 FIFO \u539f\u5219\u8fdb\u884c\u6d88\u606f\u53d1\u5e03\u548c\u6d88\u8d39\u7684\u573a\u666f"),(0,n.kt)("li",{parentName:"ul"},"\u5206\u533a\u987a\u5e8f\n\u5bf9\u4e8e\u6307\u5b9a\u7684\u4e00\u4e2a Topic\uff0c\u6240\u6709\u6d88\u606f\u6839\u636e sharding key \u8fdb\u884c\u533a\u5757\u5206\u533a\u3002 \u540c\u4e00\u4e2a\u5206\u533a\u5185\u7684\u6d88\u606f\u6309\u7167\u4e25\u683c\u7684 FIFO \u987a\u5e8f\u8fdb\u884c\u53d1\u5e03\u548c\u6d88\u8d39\u3002 Sharding key \u662f\u987a\u5e8f\u6d88\u606f\u4e2d\u7528\u6765\u533a\u5206\u4e0d\u540c\u5206\u533a\u7684\u5173\u952e\u5b57\u6bb5\uff0c\u548c\u666e\u901a\u6d88\u606f\u7684 Key \u662f\u5b8c\u5168\u4e0d\u540c\u7684\u6982\u5ff5\u3002\n\u9002\u7528\u573a\u666f\uff1a\u6027\u80fd\u8981\u6c42\u9ad8\uff0c\u4ee5 sharding key \u4f5c\u4e3a\u5206\u533a\u5b57\u6bb5\uff0c\u5728\u540c\u4e00\u4e2a\u533a\u5757\u4e2d\u4e25\u683c\u7684\u6309\u7167 FIFO \u539f\u5219\u8fdb\u884c\u6d88\u606f\u53d1\u5e03\u548c\u6d88\u8d39\u7684\u573a\u666f\u3002")),(0,n.kt)("h2",{id:"3-\u6d88\u606f\u8fc7\u6ee4"},"3 \u6d88\u606f\u8fc7\u6ee4"),(0,n.kt)("p",null,"RocketMQ\u7684\u6d88\u8d39\u8005\u53ef\u4ee5\u6839\u636eTag\u8fdb\u884c\u6d88\u606f\u8fc7\u6ee4\uff0c\u4e5f\u652f\u6301\u81ea\u5b9a\u4e49\u5c5e\u6027\u8fc7\u6ee4\u3002\u6d88\u606f\u8fc7\u6ee4\u76ee\u524d\u662f\u5728Broker\u7aef\u5b9e\u73b0\u7684\uff0c\u4f18\u70b9\u662f\u51cf\u5c11\u4e86\u5bf9\u4e8eConsumer\u65e0\u7528\u6d88\u606f\u7684\u7f51\u7edc\u4f20\u8f93\uff0c\u7f3a\u70b9\u662f\u589e\u52a0\u4e86Broker\u7684\u8d1f\u62c5\u3001\u800c\u4e14\u5b9e\u73b0\u76f8\u5bf9\u590d\u6742\u3002"),(0,n.kt)("h2",{id:"4-\u6d88\u606f\u53ef\u9760\u6027"},"4 \u6d88\u606f\u53ef\u9760\u6027"),(0,n.kt)("p",null,"RocketMQ\u652f\u6301\u6d88\u606f\u7684\u9ad8\u53ef\u9760\uff0c\u5f71\u54cd\u6d88\u606f\u53ef\u9760\u6027\u7684\u51e0\u79cd\u60c5\u51b5\uff1a\n1) Broker\u975e\u6b63\u5e38\u5173\u95ed\n2) Broker\u5f02\u5e38Crash\n3) OS Crash\n4) \u673a\u5668\u6389\u7535\uff0c\u4f46\u662f\u80fd\u7acb\u5373\u6062\u590d\u4f9b\u7535\u60c5\u51b5\n5) \u673a\u5668\u65e0\u6cd5\u5f00\u673a\uff08\u53ef\u80fd\u662fcpu\u3001\u4e3b\u677f\u3001\u5185\u5b58\u7b49\u5173\u952e\u8bbe\u5907\u635f\u574f\uff09\n6) \u78c1\u76d8\u8bbe\u5907\u635f\u574f"),(0,n.kt)("p",null,"1)\u30012)\u30013)\u30014) \u56db\u79cd\u60c5\u51b5\u90fd\u5c5e\u4e8e\u786c\u4ef6\u8d44\u6e90\u53ef\u7acb\u5373\u6062\u590d\u60c5\u51b5\uff0cRocketMQ\u5728\u8fd9\u56db\u79cd\u60c5\u51b5\u4e0b\u80fd\u4fdd\u8bc1\u6d88\u606f\u4e0d\u4e22\uff0c\u6216\u8005\u4e22\u5931\u5c11\u91cf\u6570\u636e\uff08\u4f9d\u8d56\u5237\u76d8\u65b9\u5f0f\u662f\u540c\u6b65\u8fd8\u662f\u5f02\u6b65\uff09\u3002"),(0,n.kt)("p",null,"5)\u30016)\u5c5e\u4e8e\u5355\u70b9\u6545\u969c\uff0c\u4e14\u65e0\u6cd5\u6062\u590d\uff0c\u4e00\u65e6\u53d1\u751f\uff0c\u5728\u6b64\u5355\u70b9\u4e0a\u7684\u6d88\u606f\u5168\u90e8\u4e22\u5931\u3002RocketMQ\u5728\u8fd9\u4e24\u79cd\u60c5\u51b5\u4e0b\uff0c\u901a\u8fc7\u5f02\u6b65\u590d\u5236\uff0c\u53ef\u4fdd\u8bc199%\u7684\u6d88\u606f\u4e0d\u4e22\uff0c\u4f46\u662f\u4ecd\u7136\u4f1a\u6709\u6781\u5c11\u91cf\u7684\u6d88\u606f\u53ef\u80fd\u4e22\u5931\u3002\u901a\u8fc7\u540c\u6b65\u53cc\u5199\u6280\u672f\u53ef\u4ee5\u5b8c\u5168\u907f\u514d\u5355\u70b9\uff0c\u540c\u6b65\u53cc\u5199\u52bf\u5fc5\u4f1a\u5f71\u54cd\u6027\u80fd\uff0c\u9002\u5408\u5bf9\u6d88\u606f\u53ef\u9760\u6027\u8981\u6c42\u6781\u9ad8\u7684\u573a\u5408\uff0c\u4f8b\u5982\u4e0eMoney\u76f8\u5173\u7684\u5e94\u7528\u3002\u6ce8\uff1aRocketMQ\u4ece3.0\u7248\u672c\u5f00\u59cb\u652f\u6301\u540c\u6b65\u53cc\u5199\u3002"),(0,n.kt)("h2",{id:"5-\u81f3\u5c11\u4e00\u6b21"},"5 \u81f3\u5c11\u4e00\u6b21"),(0,n.kt)("p",null,"\u81f3\u5c11\u4e00\u6b21(At least Once)\u6307\u6bcf\u4e2a\u6d88\u606f\u5fc5\u987b\u6295\u9012\u4e00\u6b21\u3002Consumer\u5148Pull\u6d88\u606f\u5230\u672c\u5730\uff0c\u6d88\u8d39\u5b8c\u6210\u540e\uff0c\u624d\u5411\u670d\u52a1\u5668\u8fd4\u56deack\uff0c\u5982\u679c\u6ca1\u6709\u6d88\u8d39\u4e00\u5b9a\u4e0d\u4f1aack\u6d88\u606f\uff0c\u6240\u4ee5RocketMQ\u53ef\u4ee5\u5f88\u597d\u7684\u652f\u6301\u6b64\u7279\u6027\u3002"),(0,n.kt)("h2",{id:"6-\u56de\u6eaf\u6d88\u8d39"},"6 \u56de\u6eaf\u6d88\u8d39"),(0,n.kt)("p",null,"\u56de\u6eaf\u6d88\u8d39\u662f\u6307Consumer\u5df2\u7ecf\u6d88\u8d39\u6210\u529f\u7684\u6d88\u606f\uff0c\u7531\u4e8e\u4e1a\u52a1\u4e0a\u9700\u6c42\u9700\u8981\u91cd\u65b0\u6d88\u8d39\uff0c\u8981\u652f\u6301\u6b64\u529f\u80fd\uff0cBroker\u5728\u5411Consumer\u6295\u9012\u6210\u529f\u6d88\u606f\u540e\uff0c\u6d88\u606f\u4ecd\u7136\u9700\u8981\u4fdd\u7559\u3002\u5e76\u4e14\u91cd\u65b0\u6d88\u8d39\u4e00\u822c\u662f\u6309\u7167\u65f6\u95f4\u7ef4\u5ea6\uff0c\u4f8b\u5982\u7531\u4e8eConsumer\u7cfb\u7edf\u6545\u969c\uff0c\u6062\u590d\u540e\u9700\u8981\u91cd\u65b0\u6d88\u8d391\u5c0f\u65f6\u524d\u7684\u6570\u636e\uff0c\u90a3\u4e48Broker\u8981\u63d0\u4f9b\u4e00\u79cd\u673a\u5236\uff0c\u53ef\u4ee5\u6309\u7167\u65f6\u95f4\u7ef4\u5ea6\u6765\u56de\u9000\u6d88\u8d39\u8fdb\u5ea6\u3002RocketMQ\u652f\u6301\u6309\u7167\u65f6\u95f4\u56de\u6eaf\u6d88\u8d39\uff0c\u65f6\u95f4\u7ef4\u5ea6\u7cbe\u786e\u5230\u6beb\u79d2\u3002"),(0,n.kt)("h2",{id:"7-\u4e8b\u52a1\u6d88\u606f"},"7 \u4e8b\u52a1\u6d88\u606f"),(0,n.kt)("p",null,"RocketMQ\u4e8b\u52a1\u6d88\u606f\uff08Transactional Message\uff09\u662f\u6307\u5e94\u7528\u672c\u5730\u4e8b\u52a1\u548c\u53d1\u9001\u6d88\u606f\u64cd\u4f5c\u53ef\u4ee5\u88ab\u5b9a\u4e49\u5230\u5168\u5c40\u4e8b\u52a1\u4e2d\uff0c\u8981\u4e48\u540c\u65f6\u6210\u529f\uff0c\u8981\u4e48\u540c\u65f6\u5931\u8d25\u3002RocketMQ\u7684\u4e8b\u52a1\u6d88\u606f\u63d0\u4f9b\u7c7b\u4f3c X/Open XA \u7684\u5206\u5e03\u4e8b\u52a1\u529f\u80fd\uff0c\u901a\u8fc7\u4e8b\u52a1\u6d88\u606f\u80fd\u8fbe\u5230\u5206\u5e03\u5f0f\u4e8b\u52a1\u7684\u6700\u7ec8\u4e00\u81f4\u3002"),(0,n.kt)("h2",{id:"8-\u5b9a\u65f6\u6d88\u606f"},"8 \u5b9a\u65f6\u6d88\u606f"),(0,n.kt)("p",null,"\u5b9a\u65f6\u6d88\u606f\uff08\u5ef6\u8fdf\u961f\u5217\uff09\u662f\u6307\u6d88\u606f\u53d1\u9001\u5230broker\u540e\uff0c\u4e0d\u4f1a\u7acb\u5373\u88ab\u6d88\u8d39\uff0c\u7b49\u5f85\u7279\u5b9a\u65f6\u95f4\u6295\u9012\u7ed9\u771f\u6b63\u7684topic\u3002\nbroker\u6709\u914d\u7f6e\u9879messageDelayLevel\uff0c\u9ed8\u8ba4\u503c\u4e3a\u201c1s 5s 10s 30s 1m 2m 3m 4m 5m 6m 7m 8m 9m 10m 20m 30m 1h 2h\u201d\uff0c18\u4e2alevel\u3002\u53ef\u4ee5\u914d\u7f6e\u81ea\u5b9a\u4e49messageDelayLevel\u3002\u6ce8\u610f\uff0cmessageDelayLevel\u662fbroker\u7684\u5c5e\u6027\uff0c\u4e0d\u5c5e\u4e8e\u67d0\u4e2atopic\u3002\u53d1\u6d88\u606f\u65f6\uff0c\u8bbe\u7f6edelayLevel\u7b49\u7ea7\u5373\u53ef\uff1amsg.setDelayLevel(level)\u3002level\u6709\u4ee5\u4e0b\u4e09\u79cd\u60c5\u51b5\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"level == 0\uff0c\u6d88\u606f\u4e3a\u975e\u5ef6\u8fdf\u6d88\u606f"),(0,n.kt)("li",{parentName:"ul"},"1<=level<=maxLevel\uff0c\u6d88\u606f\u5ef6\u8fdf\u7279\u5b9a\u65f6\u95f4\uff0c\u4f8b\u5982level==1\uff0c\u5ef6\u8fdf1s"),(0,n.kt)("li",{parentName:"ul"},"level > maxLevel\uff0c\u5219level== maxLevel\uff0c\u4f8b\u5982level==20\uff0c\u5ef6\u8fdf2h")),(0,n.kt)("p",null,"\u5b9a\u65f6\u6d88\u606f\u4f1a\u6682\u5b58\u5728\u540d\u4e3aSCHEDULE_TOPIC_XXXX\u7684topic\u4e2d\uff0c\u5e76\u6839\u636edelayTimeLevel\u5b58\u5165\u7279\u5b9a\u7684queue\uff0cqueueId = delayTimeLevel \u2013 1\uff0c\u5373\u4e00\u4e2aqueue\u53ea\u5b58\u76f8\u540c\u5ef6\u8fdf\u7684\u6d88\u606f\uff0c\u4fdd\u8bc1\u5177\u6709\u76f8\u540c\u53d1\u9001\u5ef6\u8fdf\u7684\u6d88\u606f\u80fd\u591f\u987a\u5e8f\u6d88\u8d39\u3002broker\u4f1a\u8c03\u5ea6\u5730\u6d88\u8d39SCHEDULE_TOPIC_XXXX\uff0c\u5c06\u6d88\u606f\u5199\u5165\u771f\u5b9e\u7684topic\u3002"),(0,n.kt)("p",null,"\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u5b9a\u65f6\u6d88\u606f\u4f1a\u5728\u7b2c\u4e00\u6b21\u5199\u5165\u548c\u8c03\u5ea6\u5199\u5165\u771f\u5b9etopic\u65f6\u90fd\u4f1a\u8ba1\u6570\uff0c\u56e0\u6b64\u53d1\u9001\u6570\u91cf\u3001tps\u90fd\u4f1a\u53d8\u9ad8\u3002"),(0,n.kt)("h2",{id:"9-\u6d88\u606f\u91cd\u8bd5"},"9 \u6d88\u606f\u91cd\u8bd5"),(0,n.kt)("p",null,"Consumer\u6d88\u8d39\u6d88\u606f\u5931\u8d25\u540e\uff0c\u8981\u63d0\u4f9b\u4e00\u79cd\u91cd\u8bd5\u673a\u5236\uff0c\u4ee4\u6d88\u606f\u518d\u6d88\u8d39\u4e00\u6b21\u3002Consumer\u6d88\u8d39\u6d88\u606f\u5931\u8d25\u901a\u5e38\u53ef\u4ee5\u8ba4\u4e3a\u6709\u4ee5\u4e0b\u51e0\u79cd\u60c5\u51b5\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u7531\u4e8e\u6d88\u606f\u672c\u8eab\u7684\u539f\u56e0\uff0c\u4f8b\u5982\u53cd\u5e8f\u5217\u5316\u5931\u8d25\uff0c\u6d88\u606f\u6570\u636e\u672c\u8eab\u65e0\u6cd5\u5904\u7406\uff08\u4f8b\u5982\u8bdd\u8d39\u5145\u503c\uff0c\u5f53\u524d\u6d88\u606f\u7684\u624b\u673a\u53f7\u88ab\u6ce8\u9500\uff0c\u65e0\u6cd5\u5145\u503c\uff09\u7b49\u3002\u8fd9\u79cd\u9519\u8bef\u901a\u5e38\u9700\u8981\u8df3\u8fc7\u8fd9\u6761\u6d88\u606f\uff0c\u518d\u6d88\u8d39\u5176\u5b83\u6d88\u606f\uff0c\u800c\u8fd9\u6761\u5931\u8d25\u7684\u6d88\u606f\u5373\u4f7f\u7acb\u523b\u91cd\u8bd5\u6d88\u8d39\uff0c99%\u4e5f\u4e0d\u6210\u529f\uff0c\u6240\u4ee5\u6700\u597d\u63d0\u4f9b\u4e00\u79cd\u5b9a\u65f6\u91cd\u8bd5\u673a\u5236\uff0c\u5373\u8fc710\u79d2\u540e\u518d\u91cd\u8bd5\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u7531\u4e8e\u4f9d\u8d56\u7684\u4e0b\u6e38\u5e94\u7528\u670d\u52a1\u4e0d\u53ef\u7528\uff0c\u4f8b\u5982db\u8fde\u63a5\u4e0d\u53ef\u7528\uff0c\u5916\u7cfb\u7edf\u7f51\u7edc\u4e0d\u53ef\u8fbe\u7b49\u3002\u9047\u5230\u8fd9\u79cd\u9519\u8bef\uff0c\u5373\u4f7f\u8df3\u8fc7\u5f53\u524d\u5931\u8d25\u7684\u6d88\u606f\uff0c\u6d88\u8d39\u5176\u4ed6\u6d88\u606f\u540c\u6837\u4e5f\u4f1a\u62a5\u9519\u3002\u8fd9\u79cd\u60c5\u51b5\u5efa\u8bae\u5e94\u7528sleep 30s\uff0c\u518d\u6d88\u8d39\u4e0b\u4e00\u6761\u6d88\u606f\uff0c\u8fd9\u6837\u53ef\u4ee5\u51cf\u8f7bBroker\u91cd\u8bd5\u6d88\u606f\u7684\u538b\u529b\u3002")),(0,n.kt)("p",null,"RocketMQ\u4f1a\u4e3a\u6bcf\u4e2a\u6d88\u8d39\u7ec4\u90fd\u8bbe\u7f6e\u4e00\u4e2aTopic\u540d\u79f0\u4e3a\u201c%RETRY%+consumerGroup\u201d\u7684\u91cd\u8bd5\u961f\u5217\uff08\u8fd9\u91cc\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u8fd9\u4e2aTopic\u7684\u91cd\u8bd5\u961f\u5217\u662f\u9488\u5bf9\u6d88\u8d39\u7ec4\uff0c\u800c\u4e0d\u662f\u9488\u5bf9\u6bcf\u4e2aTopic\u8bbe\u7f6e\u7684\uff09\uff0c\u7528\u4e8e\u6682\u65f6\u4fdd\u5b58\u56e0\u4e3a\u5404\u79cd\u5f02\u5e38\u800c\u5bfc\u81f4Consumer\u7aef\u65e0\u6cd5\u6d88\u8d39\u7684\u6d88\u606f\u3002\u8003\u8651\u5230\u5f02\u5e38\u6062\u590d\u8d77\u6765\u9700\u8981\u4e00\u4e9b\u65f6\u95f4\uff0c\u4f1a\u4e3a\u91cd\u8bd5\u961f\u5217\u8bbe\u7f6e\u591a\u4e2a\u91cd\u8bd5\u7ea7\u522b\uff0c\u6bcf\u4e2a\u91cd\u8bd5\u7ea7\u522b\u90fd\u6709\u4e0e\u4e4b\u5bf9\u5e94\u7684\u91cd\u65b0\u6295\u9012\u5ef6\u65f6\uff0c\u91cd\u8bd5\u6b21\u6570\u8d8a\u591a\u6295\u9012\u5ef6\u65f6\u5c31\u8d8a\u5927\u3002RocketMQ\u5bf9\u4e8e\u91cd\u8bd5\u6d88\u606f\u7684\u5904\u7406\u662f\u5148\u4fdd\u5b58\u81f3Topic\u540d\u79f0\u4e3a\u201cSCHEDULE_TOPIC_XXXX\u201d\u7684\u5ef6\u8fdf\u961f\u5217\u4e2d\uff0c\u540e\u53f0\u5b9a\u65f6\u4efb\u52a1\u6309\u7167\u5bf9\u5e94\u7684\u65f6\u95f4\u8fdb\u884cDelay\u540e\u91cd\u65b0\u4fdd\u5b58\u81f3\u201c%RETRY%+consumerGroup\u201d\u7684\u91cd\u8bd5\u961f\u5217\u4e2d\u3002"),(0,n.kt)("h2",{id:"10-\u6d88\u606f\u91cd\u6295"},"10 \u6d88\u606f\u91cd\u6295"),(0,n.kt)("p",null,"\u751f\u4ea7\u8005\u5728\u53d1\u9001\u6d88\u606f\u65f6\uff0c\u540c\u6b65\u6d88\u606f\u5931\u8d25\u4f1a\u91cd\u6295\uff0c\u5f02\u6b65\u6d88\u606f\u6709\u91cd\u8bd5\uff0coneway\u6ca1\u6709\u4efb\u4f55\u4fdd\u8bc1\u3002\u6d88\u606f\u91cd\u6295\u4fdd\u8bc1\u6d88\u606f\u5c3d\u53ef\u80fd\u53d1\u9001\u6210\u529f\u3001\u4e0d\u4e22\u5931\uff0c\u4f46\u53ef\u80fd\u4f1a\u9020\u6210\u6d88\u606f\u91cd\u590d\uff0c\u6d88\u606f\u91cd\u590d\u5728RocketMQ\u4e2d\u662f\u65e0\u6cd5\u907f\u514d\u7684\u95ee\u9898\u3002\u6d88\u606f\u91cd\u590d\u5728\u4e00\u822c\u60c5\u51b5\u4e0b\u4e0d\u4f1a\u53d1\u751f\uff0c\u5f53\u51fa\u73b0\u6d88\u606f\u91cf\u5927\u3001\u7f51\u7edc\u6296\u52a8\uff0c\u6d88\u606f\u91cd\u590d\u5c31\u4f1a\u662f\u5927\u6982\u7387\u4e8b\u4ef6\u3002\u53e6\u5916\uff0c\u751f\u4ea7\u8005\u4e3b\u52a8\u91cd\u53d1\u3001consumer\u8d1f\u8f7d\u53d8\u5316\u4e5f\u4f1a\u5bfc\u81f4\u91cd\u590d\u6d88\u606f\u3002\u5982\u4e0b\u65b9\u6cd5\u53ef\u4ee5\u8bbe\u7f6e\u6d88\u606f\u91cd\u8bd5\u7b56\u7565\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"retryTimesWhenSendFailed:\u540c\u6b65\u53d1\u9001\u5931\u8d25\u91cd\u6295\u6b21\u6570\uff0c\u9ed8\u8ba4\u4e3a2\uff0c\u56e0\u6b64\u751f\u4ea7\u8005\u4f1a\u6700\u591a\u5c1d\u8bd5\u53d1\u9001retryTimesWhenSendFailed + 1\u6b21\u3002\u4e0d\u4f1a\u9009\u62e9\u4e0a\u6b21\u5931\u8d25\u7684broker\uff0c\u5c1d\u8bd5\u5411\u5176\u4ed6broker\u53d1\u9001\uff0c\u6700\u5927\u7a0b\u5ea6\u4fdd\u8bc1\u6d88\u606f\u4e0d\u4e22\u3002\u8d85\u8fc7\u91cd\u6295\u6b21\u6570\uff0c\u629b\u51fa\u5f02\u5e38\uff0c\u7531\u5ba2\u6237\u7aef\u4fdd\u8bc1\u6d88\u606f\u4e0d\u4e22\u3002\u5f53\u51fa\u73b0RemotingException\u3001MQClientException\u548c\u90e8\u5206MQBrokerException\u65f6\u4f1a\u91cd\u6295\u3002"),(0,n.kt)("li",{parentName:"ul"},"retryTimesWhenSendAsyncFailed:\u5f02\u6b65\u53d1\u9001\u5931\u8d25\u91cd\u8bd5\u6b21\u6570\uff0c\u5f02\u6b65\u91cd\u8bd5\u4e0d\u4f1a\u9009\u62e9\u5176\u4ed6broker\uff0c\u4ec5\u5728\u540c\u4e00\u4e2abroker\u4e0a\u505a\u91cd\u8bd5\uff0c\u4e0d\u4fdd\u8bc1\u6d88\u606f\u4e0d\u4e22\u3002"),(0,n.kt)("li",{parentName:"ul"},"retryAnotherBrokerWhenNotStoreOK:\u6d88\u606f\u5237\u76d8\uff08\u4e3b\u6216\u5907\uff09\u8d85\u65f6\u6216slave\u4e0d\u53ef\u7528\uff08\u8fd4\u56de\u72b6\u6001\u975eSEND_OK\uff09\uff0c\u662f\u5426\u5c1d\u8bd5\u53d1\u9001\u5230\u5176\u4ed6broker\uff0c\u9ed8\u8ba4false\u3002\u5341\u5206\u91cd\u8981\u6d88\u606f\u53ef\u4ee5\u5f00\u542f\u3002")),(0,n.kt)("h2",{id:"11-\u6d41\u91cf\u63a7\u5236"},"11 \u6d41\u91cf\u63a7\u5236"),(0,n.kt)("p",null,"\u751f\u4ea7\u8005\u6d41\u63a7\uff0c\u56e0\u4e3abroker\u5904\u7406\u80fd\u529b\u8fbe\u5230\u74f6\u9888\uff1b\u6d88\u8d39\u8005\u6d41\u63a7\uff0c\u56e0\u4e3a\u6d88\u8d39\u80fd\u529b\u8fbe\u5230\u74f6\u9888\u3002"),(0,n.kt)("p",null,"\u751f\u4ea7\u8005\u6d41\u63a7\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"commitLog\u6587\u4ef6\u88ab\u9501\u65f6\u95f4\u8d85\u8fc7osPageCacheBusyTimeOutMills\u65f6\uff0c\u53c2\u6570\u9ed8\u8ba4\u4e3a1000ms\uff0c\u8fd4\u56de\u6d41\u63a7\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u5982\u679c\u5f00\u542ftransientStorePoolEnable == true\uff0c\u4e14broker\u4e3a\u5f02\u6b65\u5237\u76d8\u7684\u4e3b\u673a\uff0c\u4e14transientStorePool\u4e2d\u8d44\u6e90\u4e0d\u8db3\uff0c\u62d2\u7edd\u5f53\u524dsend\u8bf7\u6c42\uff0c\u8fd4\u56de\u6d41\u63a7\u3002"),(0,n.kt)("li",{parentName:"ul"},"broker\u6bcf\u969410ms\u68c0\u67e5send\u8bf7\u6c42\u961f\u5217\u5934\u90e8\u8bf7\u6c42\u7684\u7b49\u5f85\u65f6\u95f4\uff0c\u5982\u679c\u8d85\u8fc7waitTimeMillsInSendQueue\uff0c\u9ed8\u8ba4200ms\uff0c\u62d2\u7edd\u5f53\u524dsend\u8bf7\u6c42\uff0c\u8fd4\u56de\u6d41\u63a7\u3002"),(0,n.kt)("li",{parentName:"ul"},"broker\u901a\u8fc7\u62d2\u7eddsend \u8bf7\u6c42\u65b9\u5f0f\u5b9e\u73b0\u6d41\u91cf\u63a7\u5236\u3002")),(0,n.kt)("p",null,"\u6ce8\u610f\uff0c\u751f\u4ea7\u8005\u6d41\u63a7\uff0c\u4e0d\u4f1a\u5c1d\u8bd5\u6d88\u606f\u91cd\u6295\u3002"),(0,n.kt)("p",null,"\u6d88\u8d39\u8005\u6d41\u63a7\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u6d88\u8d39\u8005\u672c\u5730\u7f13\u5b58\u6d88\u606f\u6570\u8d85\u8fc7pullThresholdForQueue\u65f6\uff0c\u9ed8\u8ba41000\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u6d88\u8d39\u8005\u672c\u5730\u7f13\u5b58\u6d88\u606f\u5927\u5c0f\u8d85\u8fc7pullThresholdSizeForQueue\u65f6\uff0c\u9ed8\u8ba4100MB\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u6d88\u8d39\u8005\u672c\u5730\u7f13\u5b58\u6d88\u606f\u8de8\u5ea6\u8d85\u8fc7consumeConcurrentlyMaxSpan\u65f6\uff0c\u9ed8\u8ba42000\u3002")),(0,n.kt)("p",null,"\u6d88\u8d39\u8005\u6d41\u63a7\u7684\u7ed3\u679c\u662f\u964d\u4f4e\u62c9\u53d6\u9891\u7387\u3002"),(0,n.kt)("h2",{id:"12-\u6b7b\u4fe1\u961f\u5217"},"12 \u6b7b\u4fe1\u961f\u5217"),(0,n.kt)("p",null,"\u6b7b\u4fe1\u961f\u5217\u7528\u4e8e\u5904\u7406\u65e0\u6cd5\u88ab\u6b63\u5e38\u6d88\u8d39\u7684\u6d88\u606f\u3002\u5f53\u4e00\u6761\u6d88\u606f\u521d\u6b21\u6d88\u8d39\u5931\u8d25\uff0c\u6d88\u606f\u961f\u5217\u4f1a\u81ea\u52a8\u8fdb\u884c\u6d88\u606f\u91cd\u8bd5\uff1b\u8fbe\u5230\u6700\u5927\u91cd\u8bd5\u6b21\u6570\u540e\uff0c\u82e5\u6d88\u8d39\u4f9d\u7136\u5931\u8d25\uff0c\u5219\u8868\u660e\u6d88\u8d39\u8005\u5728\u6b63\u5e38\u60c5\u51b5\u4e0b\u65e0\u6cd5\u6b63\u786e\u5730\u6d88\u8d39\u8be5\u6d88\u606f\uff0c\u6b64\u65f6\uff0c\u6d88\u606f\u961f\u5217 \u4e0d\u4f1a\u7acb\u523b\u5c06\u6d88\u606f\u4e22\u5f03\uff0c\u800c\u662f\u5c06\u5176\u53d1\u9001\u5230\u8be5\u6d88\u8d39\u8005\u5bf9\u5e94\u7684\u7279\u6b8a\u961f\u5217\u4e2d\u3002"),(0,n.kt)("p",null,"RocketMQ\u5c06\u8fd9\u79cd\u6b63\u5e38\u60c5\u51b5\u4e0b\u65e0\u6cd5\u88ab\u6d88\u8d39\u7684\u6d88\u606f\u79f0\u4e3a\u6b7b\u4fe1\u6d88\u606f\uff08Dead-Letter Message\uff09\uff0c\u5c06\u5b58\u50a8\u6b7b\u4fe1\u6d88\u606f\u7684\u7279\u6b8a\u961f\u5217\u79f0\u4e3a\u6b7b\u4fe1\u961f\u5217\uff08Dead-Letter Queue\uff09\u3002\u5728RocketMQ\u4e2d\uff0c\u53ef\u4ee5\u901a\u8fc7\u4f7f\u7528console\u63a7\u5236\u53f0\u5bf9\u6b7b\u4fe1\u961f\u5217\u4e2d\u7684\u6d88\u606f\u8fdb\u884c\u91cd\u53d1\u6765\u4f7f\u5f97\u6d88\u8d39\u8005\u5b9e\u4f8b\u518d\u6b21\u8fdb\u884c\u6d88\u8d39\u3002"),(0,n.kt)("p",null,"\u53c2\u8003\u6587\u6863\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/rocketmq/blob/master/docs/cn/features.md"},"MQ\u7279\u6027"))))}s.isMDXComponent=!0}}]);