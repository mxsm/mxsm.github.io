"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[7423],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>k});var l=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,l)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,l,a=function(e,t){if(null==e)return{};var r,l,a={},n=Object.keys(e);for(l=0;l<n.length;l++)r=n[l],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)r=n[l],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=l.createContext({}),p=function(e){var t=l.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=p(e.components);return l.createElement(u.Provider,{value:t},e.children)},o="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},c=l.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,u=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),o=p(r),c=a,k=o["".concat(u,".").concat(c)]||o[c]||d[c]||n;return r?l.createElement(k,i(i({ref:t},m),{},{components:r})):l.createElement(k,i({ref:t},m))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=c;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[o]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<n;p++)i[p]=r[p];return l.createElement.apply(null,i)}return l.createElement.apply(null,r)}c.displayName="MDXCreateElement"},6920:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>s,toc:()=>p});var l=r(7462),a=(r(7294),r(3905));const n={title:"Redis\u96c6\u7fa4",date:new Date("2019-03-29T00:00:00.000Z")},i=void 0,s={unversionedId:"redis/cluster/Redis-cluster",id:"redis/cluster/Redis-cluster",title:"Redis\u96c6\u7fa4",description:"Redis\u96c6\u7fa4\u7684\u4ecb\u7ecd",source:"@site/docs/redis/cluster/Redis-cluster.md",sourceDirName:"redis/cluster",slug:"/redis/cluster/Redis-cluster",permalink:"/docs/redis/cluster/Redis-cluster",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/redis/cluster/Redis-cluster.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1683078484,formattedLastUpdatedAt:"May 3, 2023",frontMatter:{title:"Redis\u96c6\u7fa4",date:"2019-03-29T00:00:00.000Z"},sidebar:"redis",previous:{title:"Redis\u4e09\u79cd\u96c6\u7fa4\u7b56\u7565",permalink:"/docs/redis/cluster/Redis-cluster-strategy"}},u={},p=[{value:"Redis\u96c6\u7fa4\u7684\u4ecb\u7ecd",id:"redis\u96c6\u7fa4\u7684\u4ecb\u7ecd",level:3},{value:"Redis\u96c6\u7fa4\u6570\u636e\u5206\u7247",id:"redis\u96c6\u7fa4\u6570\u636e\u5206\u7247",level:3},{value:"Redis-cluster\u6295\u7968\u5bb9\u9519\uff1a",id:"redis-cluster\u6295\u7968\u5bb9\u9519",level:4},{value:"\u4e3b\u4ece\u590d\u5236",id:"\u4e3b\u4ece\u590d\u5236",level:3},{value:"Redis \u590d\u5236\u7684\u975e\u5e38\u91cd\u8981\u7684\u4e8b\u5b9e",id:"redis-\u590d\u5236\u7684\u975e\u5e38\u91cd\u8981\u7684\u4e8b\u5b9e",level:4},{value:"Redis\u590d\u5236\u7684\u5de5\u4f5c\u539f\u7406",id:"redis\u590d\u5236\u7684\u5de5\u4f5c\u539f\u7406",level:4},{value:"\u5168\u91cf\u540c\u6b65",id:"\u5168\u91cf\u540c\u6b65",level:4}],m={toc:p},o="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(o,(0,l.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"redis\u96c6\u7fa4\u7684\u4ecb\u7ecd"},"Redis\u96c6\u7fa4\u7684\u4ecb\u7ecd"),(0,a.kt)("p",null,"Redis \u96c6\u7fa4\u662f\u4e00\u4e2a\u63d0\u4f9b\u5728",(0,a.kt)("strong",{parentName:"p"},"\u591a\u4e2aRedis\u95f4\u8282\u70b9\u95f4\u5171\u4eab\u6570\u636e"),"\u7684\u7a0b\u5e8f\u96c6\u3002"),(0,a.kt)("p",null,"Redis\u96c6\u7fa4\u5e76\u4e0d\u652f\u6301\u5904\u7406\u591a\u4e2akeys\u7684\u547d\u4ee4,\u56e0\u4e3a\u8fd9\u9700\u8981\u5728\u4e0d\u540c\u7684\u8282\u70b9\u95f4\u79fb\u52a8\u6570\u636e,\u4ece\u800c\u8fbe\u4e0d\u5230\u50cfRedis\u90a3\u6837\u7684\u6027\u80fd,\u5728\u9ad8\u8d1f\u8f7d\u7684\u60c5\u51b5\u4e0b\u53ef\u80fd\u4f1a\u5bfc\u81f4\u4e0d\u53ef\u9884\u6599\u7684\u9519\u8bef."),(0,a.kt)("p",null,"Redis \u96c6\u7fa4\u901a\u8fc7\u5206\u533a\u6765\u63d0\u4f9b",(0,a.kt)("strong",{parentName:"p"},"\u4e00\u5b9a\u7a0b\u5ea6\u7684\u53ef\u7528\u6027"),",\u5728\u5b9e\u9645\u73af\u5883\u4e2d\u5f53\u67d0\u4e2a\u8282\u70b9\u5b95\u673a\u6216\u8005\u4e0d\u53ef\u8fbe\u7684\u60c5\u51b5\u4e0b\u7ee7\u7eed\u5904\u7406\u547d\u4ee4. Redis \u96c6\u7fa4\u7684\u4f18\u52bf:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u81ea\u52a8\u5206\u5272\u6570\u636e\u5230\u4e0d\u540c\u7684\u8282\u70b9\u4e0a\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u6574\u4e2a\u96c6\u7fa4\u7684\u90e8\u5206\u8282\u70b9\u5931\u8d25\u6216\u8005\u4e0d\u53ef\u8fbe\u7684\u60c5\u51b5\u4e0b\u80fd\u591f\u7ee7\u7eed\u5904\u7406\u547d\u4ee4\u3002")),(0,a.kt)("h3",{id:"redis\u96c6\u7fa4\u6570\u636e\u5206\u7247"},"Redis\u96c6\u7fa4\u6570\u636e\u5206\u7247"),(0,a.kt)("p",null,"Redis \u96c6\u7fa4\u6ca1\u6709\u4f7f\u7528\u4e00\u81f4\u6027hash, \u800c\u662f\u5f15\u5165\u4e86 ",(0,a.kt)("strong",{parentName:"p"},"\u54c8\u5e0c\u69fd"),"\u7684\u6982\u5ff5\u3002"),(0,a.kt)("p",null,"Redis \u96c6\u7fa4\u670916384\u4e2a\u54c8\u5e0c\u69fd,\u6bcf\u4e2akey\u901a\u8fc7CRC16\u6821\u9a8c\u540e\u5bf916384\u53d6\u6a21\u6765\u51b3\u5b9a\u653e\u7f6e\u54ea\u4e2a\u69fd.\u96c6\u7fa4\u7684\u6bcf\u4e2a\u8282\u70b9\u8d1f\u8d23\u4e00\u90e8\u5206hash\u69fd,\u4e3e\u4e2a\u4f8b\u5b50,\u6bd4\u5982\u5f53\u524d\u96c6\u7fa4\u67093\u4e2a\u8282\u70b9,\u90a3\u4e48:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8282\u70b9 A \u5305\u542b 0 \u5230 5500\u53f7\u54c8\u5e0c\u69fd."),(0,a.kt)("li",{parentName:"ul"},"\u8282\u70b9 B \u5305\u542b5501 \u5230 11000 \u53f7\u54c8\u5e0c\u69fd."),(0,a.kt)("li",{parentName:"ul"},"\u8282\u70b9 C \u5305\u542b11001 \u5230 16384\u53f7\u54c8\u5e0c\u69fd.")),(0,a.kt)("p",null,"\u8fd9\u79cd\u7ed3\u6784\u5f88\u5bb9\u6613\u6dfb\u52a0\u6216\u8005\u5220\u9664\u8282\u70b9. \u6bd4\u5982\u5982\u679c\u6211\u60f3\u65b0\u6dfb\u52a0\u4e2a\u8282\u70b9D, \u6211\u9700\u8981\u4ece\u8282\u70b9 A, B, C\u4e2d\u5f97\u90e8\u5206\u69fd\u5230D\u4e0a. \u5982\u679c\u6211\u60f3\u79fb\u9664\u8282\u70b9A,\u9700\u8981\u5c06A\u4e2d\u7684\u69fd\u79fb\u5230B\u548cC\u8282\u70b9\u4e0a,\u7136\u540e\u5c06\u6ca1\u6709\u4efb\u4f55\u69fd\u7684A\u8282\u70b9\u4ece\u96c6\u7fa4\u4e2d\u79fb\u9664\u5373\u53ef. \u7531\u4e8e\u4ece\u4e00\u4e2a\u8282\u70b9\u5c06\u54c8\u5e0c\u69fd\u79fb\u52a8\u5230\u53e6\u4e00\u4e2a\u8282\u70b9\u5e76\u4e0d\u4f1a\u505c\u6b62\u670d\u52a1,\u6240\u4ee5\u65e0\u8bba\u6dfb\u52a0\u5220\u9664\u6216\u8005\u6539\u53d8\u67d0\u4e2a\u8282\u70b9\u7684\u54c8\u5e0c\u69fd\u7684\u6570\u91cf\u90fd\u4e0d\u4f1a\u9020\u6210\u96c6\u7fa4\u4e0d\u53ef\u7528\u7684\u72b6\u6001."),(0,a.kt)("p",null,"\u6574\u7406\u4e00\u4e0b\u96c6\u7fa4\u6570\u636e\u5b58\u653e\u7684\u6b65\u9aa4\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"1 \u5bf9key\u8fdb\u884cCRC16\u7684\u7b97\u6cd5\u6821\u9a8c\u83b7\u5f97\u4e00\u4e2a\u6574\u5f62\n2 \u5bf9\u6574\u6570\u8fdb\u884c\u5bf916384\u53d6\u6a21\u3002\n3 \u653e\u5165\u5bf9\u5e94\u7684\u673a\u5668\u4e0a\u9762\n")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://github.com/mxsm/document/blob/master/image/cache/rediscluster.png?raw=true",alt:"\u96c6\u7fa4\u56fe\u89e3"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6240\u6709\u7684\u8282\u70b9\u5f7c\u6b64\u95f4\u4e92\u8054(",(0,a.kt)("inlineCode",{parentName:"li"},"PING"),"-",(0,a.kt)("inlineCode",{parentName:"li"},"PONG"),"\u673a\u5236)\uff0c\u5185\u90e8\u4f7f\u7528\u4e8c\u8fdb\u5236\u534f\u8bae\u4f18\u5316\u4f20\u8f93\u901f\u5ea6\u548c\u5e26\u5bbd\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u8282\u70b9\u7684",(0,a.kt)("inlineCode",{parentName:"li"},"fail"),"\u662f\u901a\u8fc7\u96c6\u7fa4\u4e2d\u8d85\u8fc7\u534a\u6570\u7684\u8282\u70b9\u68c0\u6d4b\u5931\u6548\u65f6\u624d\u751f\u6548\u3002(\u96c6\u7fa4\u4e2d\u8d85\u8fc7\u534a\u6570\u4ee5\u4e0a\u7684\u8282\u70b9\u5bf9\u8be5\u8282\u70b9\u6ca1\u6709\u56de\u590d)"),(0,a.kt)("li",{parentName:"ul"},"\u5ba2\u6237\u7aef\u4e0e",(0,a.kt)("inlineCode",{parentName:"li"},"redis"),"\u8282\u70b9\u76f4\u8fde,\u4e0d\u9700\u8981\u4e2d\u95f4",(0,a.kt)("inlineCode",{parentName:"li"},"proxy"),"\u5c42.\u5ba2\u6237\u7aef\u4e0d\u9700\u8981\u8fde\u63a5\u96c6\u7fa4\u6240\u6709\u8282\u70b9,\u8fde\u63a5\u96c6\u7fa4\u4e2d\u4efb\u4f55\u4e00\u4e2a\u53ef\u7528\u8282\u70b9\u5373\u53ef\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"redis-cluster"),"\u628a\u6240\u6709\u7684\u7269\u7406\u8282\u70b9\u6620\u5c04\u5230","[",(0,a.kt)("inlineCode",{parentName:"li"},"0-16383"),"]",(0,a.kt)("inlineCode",{parentName:"li"},"slot"),"\u4e0a,",(0,a.kt)("inlineCode",{parentName:"li"},"cluster")," \u8d1f\u8d23\u7ef4\u62a4",(0,a.kt)("inlineCode",{parentName:"li"},"node"),"<->",(0,a.kt)("inlineCode",{parentName:"li"},"slot"),"<->",(0,a.kt)("inlineCode",{parentName:"li"},"value"))),(0,a.kt)("h4",{id:"redis-cluster\u6295\u7968\u5bb9\u9519"},"Redis-cluster\u6295\u7968\u5bb9\u9519\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://github.com/mxsm/document/blob/master/image/cache/redisfailcluster.png?raw=true",alt:"\u56fe\u89e3"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6295\u7968\u7684\u8fc7\u7a0b\u539f\u7406\uff1a")," \u96c6\u7fa4\u4e2d\u6240\u6709\u7684master\u53c2\u4e0e\uff0c\u5982\u679c\u534a\u6570\u4ee5\u4e0a\u7684master\u8282\u70b9\u4e0e\u8981\u88ab\u68c0\u6d4b\u7684master\u901a\u8baf\u8d85\u65f6(cluster-node-timeout),\u8ba4\u4e3a\u5f53\u524dmaster\u8282\u70b9\u6302\u4e86\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u4ec0\u4e48\u65f6\u5019\u6574\u4e2a\u96c6\u7fa4\u4e0d\u53ef\u7528\uff1f")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u96c6\u7fa4\u4efb\u610fmaster\u6302\u6389\u4e14\u5f53\u524d\u6ca1\u6709slave.\u96c6\u7fa4\u8fdb\u5165fail\u72b6\u6001\u3002\u4e5f\u53ef\u4ee5\u7406\u89e3\u4e3a16K\u54c8\u5e0c\u7b52\u4e0d\u5b8c\u6574\u7684\u60c5\u51b5\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u8d85\u8fc7\u4e00\u534a\u4ee5\u4e0a\u7684master\u6302\u6389\uff0c\u4e0d\u8bba\u662f\u5426\u6709slave\uff0c\u96c6\u7fa4\u8fdb\u5165fail\u72b6\u6001\u3002")),(0,a.kt)("h3",{id:"\u4e3b\u4ece\u590d\u5236"},"\u4e3b\u4ece\u590d\u5236"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u590d\u5236\u7684\u673a\u5236")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"master\u548cslave\u6b63\u5e38\u8fde\u63a5\u60c5\u51b5\u4e0b\uff1a")," master\u4f1a\u53d1\u9001\u4e00\u4e9b\u5217\u547d\u4ee4\u6d41\u6765\u4fdd\u6301\u5bf9slave\u7684\u66f4\u65b0\u3002\u4ee5\u4fbf\u5c06master\u81ea\u8eab\u6570\u636e\u96c6\u7684\u6539\u53d8\u590d\u5236\u5230\u7ed9slave\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"master\u548cslave\u65ad\u5f00\u4e4b\u540e(\u7f51\u7edc\u95ee\u9898\uff0c\u4e3b\u4ece\u610f\u8bc6\u8fde\u63a5\u8d85\u65f6)\uff1a")," slave\u91cd\u65b0\u8fde\u63a5\u4e0amaster\u5e76\u4f1a\u5c1d\u8bd5\u90e8\u5206\u540c\u6b65\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u4e0d\u80fd\u8fdb\u884c\u90e8\u5206\u540c\u6b65\u7684\u65f6\u5019\uff0cslave\u4f1a\u8bf7\u6c42\u5168\u91cf\u540c\u6b65"))),(0,a.kt)("h4",{id:"redis-\u590d\u5236\u7684\u975e\u5e38\u91cd\u8981\u7684\u4e8b\u5b9e"},"Redis \u590d\u5236\u7684\u975e\u5e38\u91cd\u8981\u7684\u4e8b\u5b9e"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"master\u548cslave\u4e4b\u95f4\u4f7f\u7528\u7684\u5f02\u6b65\u590d\u5236"),(0,a.kt)("li",{parentName:"ul"},"master\u548cslave\u662f\u4e00\u4e2a\u4e00\u5bf9\u591a\u7684\u5173\u7cfb"),(0,a.kt)("li",{parentName:"ul"},"slave \u53ef\u4ee5\u63a5\u53d7\u5176\u4ed6 slave \u7684\u8fde\u63a5\u3002"),(0,a.kt)("li",{parentName:"ul"},"Redis \u590d\u5236\u5728 master \u4fa7\u662f\u975e\u963b\u585e\u7684\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u590d\u5236\u5728 slave \u4fa7\u5927\u90e8\u5206\u4e5f\u662f\u975e\u963b\u585e\u7684\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u590d\u5236\u65e2\u53ef\u4ee5\u88ab\u7528\u5728\u53ef\u4f38\u7f29\u6027\uff0c\u4ee5\u4fbf\u53ea\u8bfb\u67e5\u8be2\u53ef\u4ee5\u6709\u591a\u4e2a slave \u8fdb\u884c"),(0,a.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u4f7f\u7528\u590d\u5236\u6765\u907f\u514d master \u5c06\u5168\u90e8\u6570\u636e\u96c6\u5199\u5165\u78c1\u76d8\u9020\u6210\u7684\u5f00\u9500")),(0,a.kt)("h4",{id:"redis\u590d\u5236\u7684\u5de5\u4f5c\u539f\u7406"},"Redis\u590d\u5236\u7684\u5de5\u4f5c\u539f\u7406"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"slave\u8fde\u63a5master\u7684\u65f6\u5019\uff0c\u4f1a\u4f7f\u7528",(0,a.kt)("strong",{parentName:"li"},"PSYNC"),"\u547d\u4ee4\u53d1\u9001slave\u7eaa\u5f55\u7684\u65e7\u7684master replication  ID \u548c slave\u81f3\u4eca\u5904\u7406\u7684\u504f\u79fb\u91cf\u3002"),(0,a.kt)("li",{parentName:"ol"},"master\u53d1\u9001\u7ed9slave\u6240\u9700\u7684\u589e\u91cf\u90e8\u5206"),(0,a.kt)("li",{parentName:"ol"},"\u5982\u679c\u662fmaster\u7f13\u51b2\u533a\u6ca1\u6709\u8db3\u591f\u7684\u547d\u4ee4\u79ef\u538b\u6216\u8005slave\u5f15\u7528\u4e86\u4e0d\u77e5\u9053\u7684\u5386\u53f2\u7eaa\u5f55\u3002\u8fdb\u884c\u5168\u91cf\u540c\u6b65")),(0,a.kt)("h4",{id:"\u5168\u91cf\u540c\u6b65"},"\u5168\u91cf\u540c\u6b65"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"master \u5f00\u542f\u4e00\u4e2a\u540e\u53f0\u4fdd\u5b58\u8fdb\u7a0b\uff0c\u4ee5\u4fbf\u4e8e\u751f\u4ea7\u4e00\u4e2a RDB \u6587\u4ef6\uff0c\u540c\u65f6\u5b83\u5f00\u59cb\u7f13\u51b2\u6240\u6709\u4ece\u5ba2\u6237\u7aef\u63a5\u6536\u5230\u7684\u65b0\u7684\u5199\u5165\u547d\u4ee4(\u4ea7\u751fRDB\u6587\u4ef6\u7684\u65f6\u5019\u53d1\u751f\u5ba2\u6237\u7aef\u7684\u64cd\u4f5c\uff0c\u4fdd\u8bc1\u6570\u636e\u7684\u4e00\u81f4\u6027\u95ee\u9898)"),(0,a.kt)("li",{parentName:"ul"},"master \u5c06\u6570\u636e\u96c6\u6587\u4ef6\u4f20\u8f93\u7ed9 slave"),(0,a.kt)("li",{parentName:"ul"},"slave\u63a5\u53d7master\u53d1\u9001\u8fc7\u6765\u7684\u6570\u636e\u3002"),(0,a.kt)("li",{parentName:"ul"},"slave\u8f7d\u5165rdb\u6587\u4ef6")))}d.isMDXComponent=!0}}]);