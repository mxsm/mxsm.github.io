"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[4988],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),m=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=m(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=m(n),g=o,k=u["".concat(s,".").concat(g)]||u[g]||c[g]||a;return n?r.createElement(k,i(i({ref:t},p),{},{components:n})):r.createElement(k,i({ref:t},p))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var m=2;m<a;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},6597:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>m});var r=n(7462),o=(n(7294),n(3905));const a={title:"RocketMQ\u6e90\u7801\u89e3\u6790-Broker\u6d88\u606f\u5b58\u50a8\u8bbe\u8ba1\u4e0e\u5b9e\u73b0",date:new Date("2020-03-18T00:00:00.000Z"),weight:202106012233},i=void 0,l={unversionedId:"rocketmq/rocketmq4/broker/RocketMQ-analysis-Broker-message-store",id:"rocketmq/rocketmq4/broker/RocketMQ-analysis-Broker-message-store",title:"RocketMQ\u6e90\u7801\u89e3\u6790-Broker\u6d88\u606f\u5b58\u50a8\u8bbe\u8ba1\u4e0e\u5b9e\u73b0",description:"\u4ee5\u4e0b\u6e90\u7801\u57fa\u4e8eRocket MQ 4.7.0",source:"@site/docs/rocketmq/rocketmq4/broker/RocketMQ-analysis-Broker-message-store.md",sourceDirName:"rocketmq/rocketmq4/broker",slug:"/rocketmq/rocketmq4/broker/RocketMQ-analysis-Broker-message-store",permalink:"/docs/rocketmq/rocketmq4/broker/RocketMQ-analysis-Broker-message-store",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/rocketmq/rocketmq4/broker/RocketMQ-analysis-Broker-message-store.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1676193845,formattedLastUpdatedAt:"Feb 12, 2023",frontMatter:{title:"RocketMQ\u6e90\u7801\u89e3\u6790-Broker\u6d88\u606f\u5b58\u50a8\u8bbe\u8ba1\u4e0e\u5b9e\u73b0",date:"2020-03-18T00:00:00.000Z",weight:202106012233},sidebar:"rocketmq4",previous:{title:"RocketMQ\u6e90\u7801\u89e3\u6790-Broker\u6545\u969c\u6062\u590d",permalink:"/docs/rocketmq/rocketmq4/broker/RocketMQ-analysis-Broker-failure-recovery"},next:{title:"RocketMQ\u6e90\u7801\u89e3\u6790-Broker\u63a5\u6536\u62c9\u53d6\u6d88\u606f",permalink:"/docs/rocketmq/rocketmq4/broker/RocketMQ-analysis-Broker-recevie-pull"}},s={},m=[{value:"1. \u6d88\u606f\u5b58\u50a8\u56fe\u89e3",id:"1-\u6d88\u606f\u5b58\u50a8\u56fe\u89e3",level:3},{value:"2. \u6d88\u606f\u5b58\u50a8\u6574\u4f53\u67b6\u6784",id:"2-\u6d88\u606f\u5b58\u50a8\u6574\u4f53\u67b6\u6784",level:3},{value:"2.1 CommitLog",id:"21-commitlog",level:4},{value:"2.2 ConsumeQueue",id:"22-consumequeue",level:4},{value:"3. IndexFile",id:"3-indexfile",level:4}],p={toc:m},u="wrapper";function c(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u4ee5\u4e0b\u6e90\u7801\u57fa\u4e8eRocket MQ 4.7.0")),(0,o.kt)("h3",{id:"1-\u6d88\u606f\u5b58\u50a8\u56fe\u89e3"},"1. \u6d88\u606f\u5b58\u50a8\u56fe\u89e3"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://github.com/apache/rocketmq/raw/master/docs/cn/image/rocketmq_design_1.png",alt:"\u5b98\u7f51\u56fe"})),(0,o.kt)("p",null,"\u6d88\u606f\u5b58\u50a8\u662fRocketMQ\u4e2d\u6700\u4e3a\u590d\u6742\u548c\u6700\u4e3a\u91cd\u8981\u7684\u4e00\u90e8\u5206\uff0c\u672c\u8282\u5c06\u5206\u522b\u4eceRocketMQ\u7684\u6d88\u606f\u5b58\u50a8\u6574\u4f53\u67b6\u6784\u3001PageCache\u4e0eMmap\u5185\u5b58\u6620\u5c04\u4ee5\u53caRocketMQ\u4e2d\u4e24\u79cd\u4e0d\u540c\u7684\u5237\u76d8\u65b9\u5f0f\u4e09\u65b9\u9762\u6765\u5206\u522b\u5c55\u5f00\u53d9\u8ff0\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u6d88\u606f\u5b58\u50a8\u6574\u4f53\u67b6\u6784")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u9875\u7f13\u5b58\u4e0e\u5185\u5b58\u6620\u5c04")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u6d88\u606f\u5237\u76d8"))),(0,o.kt)("h3",{id:"2-\u6d88\u606f\u5b58\u50a8\u6574\u4f53\u67b6\u6784"},"2. \u6d88\u606f\u5b58\u50a8\u6574\u4f53\u67b6\u6784"),(0,o.kt)("p",null,"\u8ddf\u6d88\u606f\u5b58\u50a8\u7684\u4e3b\u8981\u6709\u4e09\u4e2a\u76f8\u5173\u7684\u6587\u4ef6\u7ec4\u6210\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"CommitLog")),(0,o.kt)("p",{parentName:"li"},"\u6d88\u606f\u4e3b\u4f53\u4ee5\u53ca\u5143\u6570\u636e\u7684\u5b58\u50a8\u4e3b\u4f53\uff0c\u5b58\u50a8Producer\u7aef\u5199\u5165\u7684\u6d88\u606f\u4e3b\u4f53\u5185\u5bb9,\u6d88\u606f\u5185\u5bb9\u4e0d\u662f\u5b9a\u957f\u7684\u3002\u5355\u4e2a\u6587\u4ef6\u5927\u5c0f\u9ed8\u8ba41G \uff0c\u6587\u4ef6\u540d\u957f\u5ea6\u4e3a20\u4f4d\uff0c\u5de6\u8fb9\u8865\u96f6\uff0c\u5269\u4f59\u4e3a\u8d77\u59cb\u504f\u79fb\u91cf\uff0c\u6bd4\u598200000000000000000000\u4ee3\u8868\u4e86\u7b2c\u4e00\u4e2a\u6587\u4ef6\uff0c\u8d77\u59cb\u504f\u79fb\u91cf\u4e3a0\uff0c\u6587\u4ef6\u5927\u5c0f\u4e3a1G=1073741824\uff1b\u5f53\u7b2c\u4e00\u4e2a\u6587\u4ef6\u5199\u6ee1\u4e86\uff0c\u7b2c\u4e8c\u4e2a\u6587\u4ef6\u4e3a00000000001073741824\uff0c\u8d77\u59cb\u504f\u79fb\u91cf\u4e3a1073741824\uff0c\u4ee5\u6b64\u7c7b\u63a8\u3002\u6d88\u606f\u4e3b\u8981\u662f\u987a\u5e8f\u5199\u5165\u65e5\u5fd7\u6587\u4ef6\uff0c\u5f53\u6587\u4ef6\u6ee1\u4e86\uff0c\u5199\u5165\u4e0b\u4e00\u4e2a\u6587\u4ef6:"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://github.com/mxsm/picture/blob/main/rocketmq/commitlog%E4%BD%8D%E7%BD%AE.png?raw=true",alt:null}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"ConsumeQueue")),(0,o.kt)("p",{parentName:"li"},"\u6d88\u606f\u6d88\u8d39\u961f\u5217\uff0c\u5f15\u5165\u7684\u76ee\u7684\u4e3b\u8981\u662f\u63d0\u9ad8\u6d88\u606f\u6d88\u8d39\u7684\u6027\u80fd\uff0c\u7531\u4e8eRocketMQ\u662f\u57fa\u4e8e\u4e3b\u9898topic\u7684\u8ba2\u9605\u6a21\u5f0f\uff0c\u6d88\u606f\u6d88\u8d39\u662f\u9488\u5bf9\u4e3b\u9898\u8fdb\u884c\u7684\uff0c\u5982\u679c\u8981\u904d\u5386commitlog\u6587\u4ef6\u4e2d\u6839\u636etopic\u68c0\u7d22\u6d88\u606f\u662f\u975e\u5e38\u4f4e\u6548\u7684\u3002Consumer\u5373\u53ef\u6839\u636eConsumeQueue\u6765\u67e5\u627e\u5f85\u6d88\u8d39\u7684\u6d88\u606f\u3002\u5176\u4e2d\uff0cConsumeQueue\uff08\u903b\u8f91\u6d88\u8d39\u961f\u5217\uff09\u4f5c\u4e3a\u6d88\u8d39\u6d88\u606f\u7684\u7d22\u5f15\uff0c\u4fdd\u5b58\u4e86\u6307\u5b9aTopic\u4e0b\u7684\u961f\u5217\u6d88\u606f\u5728CommitLog\u4e2d\u7684\u8d77\u59cb\u7269\u7406\u504f\u79fb\u91cfoffset\uff0c\u6d88\u606f\u5927\u5c0fsize\u548c\u6d88\u606fTag\u7684HashCode\u503c\u3002consumequeue\u6587\u4ef6\u53ef\u4ee5\u770b\u6210\u662f\u57fa\u4e8etopic\u7684commitlog\u7d22\u5f15\u6587\u4ef6\uff0c\u6545consumequeue\u6587\u4ef6\u5939\u7684\u7ec4\u7ec7\u65b9\u5f0f\u5982\u4e0b\uff1atopic/queue/file\u4e09\u5c42\u7ec4\u7ec7\u7ed3\u6784\uff0c\u5177\u4f53\u5b58\u50a8\u8def\u5f84\u4e3a\uff1a$HOME/store/consumequeue/{topic}/{queueId}/{fileName}\u3002\u540c\u6837consumequeue\u6587\u4ef6\u91c7\u53d6\u5b9a\u957f\u8bbe\u8ba1\uff0c\u6bcf\u4e00\u4e2a\u6761\u76ee\u517120\u4e2a\u5b57\u8282\uff0c\u5206\u522b\u4e3a8\u5b57\u8282\u7684commitlog\u7269\u7406\u504f\u79fb\u91cf\u30014\u5b57\u8282\u7684\u6d88\u606f\u957f\u5ea6\u30018\u5b57\u8282tag hashcode\uff0c\u5355\u4e2a\u6587\u4ef6\u753130W\u4e2a\u6761\u76ee\u7ec4\u6210\uff0c\u53ef\u4ee5\u50cf\u6570\u7ec4\u4e00\u6837\u968f\u673a\u8bbf\u95ee\u6bcf\u4e00\u4e2a\u6761\u76ee\uff0c\u6bcf\u4e2aConsumeQueue\u6587\u4ef6\u5927\u5c0f\u7ea65.72M\uff1b"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://github.com/mxsm/picture/blob/main/rocketmq/consumequeue%E4%BD%8D%E7%BD%AE.png?raw=true",alt:null}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"IndexFile")),(0,o.kt)("p",{parentName:"li"},"IndexFile\uff08\u7d22\u5f15\u6587\u4ef6\uff09\u63d0\u4f9b\u4e86\u4e00\u79cd\u53ef\u4ee5\u901a\u8fc7key\u6216\u65f6\u95f4\u533a\u95f4\u6765\u67e5\u8be2\u6d88\u606f\u7684\u65b9\u6cd5\u3002Index\u6587\u4ef6\u7684\u5b58\u50a8\u4f4d\u7f6e\u662f\uff1a$HOME \\store\\index\\${fileName}\uff0c\u6587\u4ef6\u540dfileName\u662f\u4ee5\u521b\u5efa\u65f6\u7684",(0,o.kt)("strong",{parentName:"p"},"\u65f6\u95f4\u6233\u547d\u540d"),"\u7684\uff0c\u56fa\u5b9a\u7684\u5355\u4e2aIndexFile\u6587\u4ef6\u5927\u5c0f\u7ea6\u4e3a400M\uff0c\u4e00\u4e2aIndexFile\u53ef\u4ee5\u4fdd\u5b58 2000W\u4e2a\u7d22\u5f15\uff0cIndexFile\u7684\u5e95\u5c42\u5b58\u50a8\u8bbe\u8ba1\u4e3a\u5728\u6587\u4ef6\u7cfb\u7edf\u4e2d\u5b9e\u73b0HashMap\u7ed3\u6784\uff0c\u6545rocketmq\u7684\u7d22\u5f15\u6587\u4ef6\u5176\u5e95\u5c42\u5b9e\u73b0\u4e3ahash\u7d22\u5f15\u3002"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://github.com/mxsm/picture/blob/main/rocketmq/indexLog.png?raw=true",alt:null})))),(0,o.kt)("p",null,"\u5728\u4e0a\u9762\u7684RocketMQ\u7684\u6d88\u606f\u5b58\u50a8\u6574\u4f53\u67b6\u6784\u56fe\u4e2d\u53ef\u4ee5\u770b\u51fa\uff0cRocketMQ\u91c7\u7528\u7684\u662f\u6df7\u5408\u578b\u7684\u5b58\u50a8\u7ed3\u6784\uff0c\u5373\u4e3aBroker\u5355\u4e2a\u5b9e\u4f8b\u4e0b\u6240\u6709\u7684\u961f\u5217\u5171\u7528\u4e00\u4e2a\u65e5\u5fd7\u6570\u636e\u6587\u4ef6\uff08\u5373\u4e3aCommitLog\uff09\u6765\u5b58\u50a8\u3002RocketMQ\u7684\u6df7\u5408\u578b\u5b58\u50a8\u7ed3\u6784(\u591a\u4e2aTopic\u7684\u6d88\u606f\u5b9e\u4f53\u5185\u5bb9\u90fd\u5b58\u50a8\u4e8e\u4e00\u4e2aCommitLog\u4e2d)\u9488\u5bf9Producer\u548cConsumer\u5206\u522b\u91c7\u7528\u4e86\u6570\u636e\u548c\u7d22\u5f15\u90e8\u5206\u76f8\u5206\u79bb\u7684\u5b58\u50a8\u7ed3\u6784\uff0cProducer\u53d1\u9001\u6d88\u606f\u81f3Broker\u7aef\uff0c\u7136\u540eBroker\u7aef\u4f7f\u7528\u540c\u6b65\u6216\u8005\u5f02\u6b65\u7684\u65b9\u5f0f\u5bf9\u6d88\u606f\u5237\u76d8\u6301\u4e45\u5316\uff0c\u4fdd\u5b58\u81f3CommitLog\u4e2d\u3002\u53ea\u8981\u6d88\u606f\u88ab\u5237\u76d8\u6301\u4e45\u5316\u81f3\u78c1\u76d8\u6587\u4ef6CommitLog\u4e2d\uff0c\u90a3\u4e48Producer\u53d1\u9001\u7684\u6d88\u606f\u5c31\u4e0d\u4f1a\u4e22\u5931\u3002\u6b63\u56e0\u4e3a\u5982\u6b64\uff0cConsumer\u4e5f\u5c31\u80af\u5b9a\u6709\u673a\u4f1a\u53bb\u6d88\u8d39\u8fd9\u6761\u6d88\u606f\u3002\u5f53\u65e0\u6cd5\u62c9\u53d6\u5230\u6d88\u606f\u540e\uff0c\u53ef\u4ee5\u7b49\u4e0b\u4e00\u6b21\u6d88\u606f\u62c9\u53d6\uff0c\u540c\u65f6\u670d\u52a1\u7aef\u4e5f\u652f\u6301\u957f\u8f6e\u8be2\u6a21\u5f0f\uff0c\u5982\u679c\u4e00\u4e2a\u6d88\u606f\u62c9\u53d6\u8bf7\u6c42\u672a\u62c9\u53d6\u5230\u6d88\u606f\uff0cBroker\u5141\u8bb8\u7b49\u5f8530s\u7684\u65f6\u95f4\uff0c\u53ea\u8981\u8fd9\u6bb5\u65f6\u95f4\u5185\u6709\u65b0\u6d88\u606f\u5230\u8fbe\uff0c\u5c06\u76f4\u63a5\u8fd4\u56de\u7ed9\u6d88\u8d39\u7aef\u3002\u8fd9\u91cc\uff0cRocketMQ\u7684\u5177\u4f53\u505a\u6cd5\u662f\uff0c\u4f7f\u7528Broker\u7aef\u7684\u540e\u53f0\u670d\u52a1\u7ebf\u7a0b\u2014ReputMessageService\u4e0d\u505c\u5730\u5206\u53d1\u8bf7\u6c42\u5e76\u5f02\u6b65\u6784\u5efaConsumeQueue\uff08\u903b\u8f91\u6d88\u8d39\u961f\u5217\uff09\u548cIndexFile\uff08\u7d22\u5f15\u6587\u4ef6\uff09\u6570\u636e\u3002\u4e0b\u9762\u4ece\u4ee3\u7801\u7684\u89d2\u5ea6\u6765\u5206\u6790\u8fd9\u4e09\u4e2a\u6587\u4ef6\u7684\u751f\u6210\u3002"),(0,o.kt)("h4",{id:"21-commitlog"},"2.1 CommitLog"),(0,o.kt)("p",null,"\u5728\u4ee3\u7801\u4e2d ",(0,o.kt)("strong",{parentName:"p"},"CommitLog")," \u5bf9\u5e94\u4e00\u4e2a ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"CommitLog"))," \u7684Java\u7c7b\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"public class CommitLog {\n    // \u6d88\u606f\u7684 MAGIC CODE daa320a7\n    public final static int MESSAGE_MAGIC_CODE = -626843481;\n    protected static final InternalLogger log = InternalLoggerFactory.getLogger(LoggerName.STORE_LOGGER_NAME);\n    // \u6587\u4ef6\u7ed3\u5c3e\u7a7a\u7684 MAGIC CODE cbd43194\n    protected final static int BLANK_MAGIC_CODE = -875286124;\n    protected final MappedFileQueue mappedFileQueue;\n    protected final DefaultMessageStore defaultMessageStore;\n    private final FlushCommitLogService flushCommitLogService;\n    private final FlushCommitLogService commitLogService;\n    private final AppendMessageCallback appendMessageCallback;\n    private final ThreadLocal<MessageExtBatchEncoder> batchEncoderThreadLocal;\n    protected HashMap<String/* topic-queueid */, Long/* offset */> topicQueueTable = new HashMap<String, Long>(1024);\n    protected volatile long confirmOffset = -1L;\n    private volatile long beginTimeInLock = 0;\n\n    //..............\n}\n")),(0,o.kt)("p",null,"RocketMQ \u4ee5\u5982\u4e0b\u56fe\u6240\u793a\u5b58\u50a8\u683c\u5f0f\u5c06\u6d88\u606f\u987a\u5e8f\u5199\u5165 CommitLog\uff0c\u9664\u4e86\u8bb0\u5f55\u6d88\u606f\u672c\u8eab\u7684\u5c5e\u6027\uff08\u6d88\u606f\u957f\u5ea6\u3001\u6d88\u606f\u4f53\u3001Topic \u957f\u5ea6\u3001Topic\u3001\u6d88\u606f\u5c5e\u6027\u957f\u5ea6\u548c\u6d88\u606f\u5c5e\u6027\uff09\uff0cCommitLog \u540c\u65f6\u8bb0\u5f55\u4e86\u6d88\u606f\u6240\u5728\u6d88\u8d39\u961f\u5217\u7684\u4fe1\u606f\uff08\u6d88\u8d39\u961f\u5217 ID \u548c\u504f\u79fb\u91cf\uff09\u3002\u7531\u4e8e\u5b58\u50a8\u6761\u76ee\u5177\u5907\u4e0d\u5b9a\u957f\u7684\u7279\u6027\uff0c\u5f53 CommitLog \u5269\u4f59\u7a7a\u95f4\u65e0\u6cd5\u6ee1\u8db3\u6d88\u606f\u65f6\uff0cCommitLog \u5728\u5c3e\u90e8\u8ffd\u52a0\u4e00\u4e2a MAGIC CODE \u7b49\u4e8e BLANK_MAGIC_CODE \u7684\u5b58\u50a8\u6761\u76ee\u4f5c\u4e3a\u7ed3\u675f\u6807\u8bb0\uff0c\u5e76\u5c06\u6d88\u606f\u5b58\u50a8\u81f3\u4e0b\u4e00\u4e2a CommitLog \u6587\u4ef6\u3002"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"BLANK_MAGIC_CODE \u7684\u4f5c\u7528\u5c31\u662f\u4f5c\u4e3a\u6807\u8bb0\u5f53\u524d\u6587\u4ef6\u5b58\u50a8CommitLog\u7eaa\u5f55\u6ee1\u4e86\uff0c\u63a5\u4e0b\u6765\u8981\u7528\u4e0b\u4e00\u4e2a\u6587\u4ef6\u5b58\u50a8\u3002"),(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"\u5b58\u50a8\u7684\u4f4d\u7f6e\uff1a${user.home}/store/commitlog")," ")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://github.com/mxsm/document/blob/master/image/MQ/RocketMQ/CommitLog%E8%AE%B0%E5%BD%95%E6%A0%BC%E5%BC%8F.png?raw=true",alt:null})),(0,o.kt)("p",null,"\u90a3\u4e48\u6211\u4eec\u5728\u4ee3\u7801\u4e2d\u54ea\u91cc\u53ef\u4ee5\u770b\u51fa\u6765\u4e0b\u9762\u6211\u4eec\u53ef\u4ee5\u770b\u4e00\u4e0b ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"CommitLog.calMsgLength"))," \u7684\u8fd9\u4e2a\u65b9\u6cd5\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"protected static int calMsgLength(int sysFlag, int bodyLength, int topicLength, int propertiesLength) {\n        int bornhostLength = (sysFlag & MessageSysFlag.BORNHOST_V6_FLAG) == 0 ? 8 : 20;\n        int storehostAddressLength = (sysFlag & MessageSysFlag.STOREHOSTADDRESS_V6_FLAG) == 0 ? 8 : 20; \n        final int msgLen = 4 //TOTALSIZE\n            + 4 //MAGICCODE\n            + 4 //BODYCRC\n            + 4 //QUEUEID\n            + 4 //FLAG\n            + 8 //QUEUEOFFSET\n            + 8 //PHYSICALOFFSET\n            + 4 //SYSFLAG\n            + 8 //BORNTIMESTAMP\n            + bornhostLength //BORNHOST\n            + 8 //STORETIMESTAMP\n            + storehostAddressLength //STOREHOSTADDRESS\n            + 4 //RECONSUMETIMES\n            + 8 //PREPARED TRANSACTION OFFSET\n            + 4 + (bodyLength > 0 ? bodyLength : 0) //BODY\n            + 1 + topicLength //TOPIC\n            + 2 + (propertiesLength > 0 ? propertiesLength : 0) //propertieslength\n            + 0;\n        return msgLen;\n    }\n")),(0,o.kt)("p",null,"\u6240\u4ee5\u5730\u5740\u5b57\u6bb5\u6709IPV4\u548cIPV6\u7684\u533a\u5206\u6240\u4ee5\u957f\u5ea6\u4f1a\u662f8\u6216\u800520\u5b57\u6bb5\u3002(\u8fd9\u91cc\u5305\u542b\u4e86\u7aef\u53e3\u7684\u6570\u636e)"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u5730\u5740IPV4\u6216\u8005IPV6\u672c\u6765\u53ef\u4ee5\u75284\u4e2a\u5b57\u8282\u548c16\u4e2a\u5b57\u8282\u5b8c\u6210\u8868\u793a\uff0c\u8fd9\u91cc\u4e3a\u5565\u52a0\u4e86\u56db\u4e2a\u5b57\u8282\u9996\u5148\u770bMessageExt.socketAddress2ByteBuffer\u65b9\u6cd5\u4ee3\u7801\uff1a"),(0,o.kt)("pre",{parentName:"blockquote"},(0,o.kt)("code",{parentName:"pre",className:"language-java"},"    public static ByteBuffer socketAddress2ByteBuffer(final SocketAddress socketAddress, final ByteBuffer byteBuffer) {\n        InetSocketAddress inetSocketAddress = (InetSocketAddress) socketAddress;\n        InetAddress address = inetSocketAddress.getAddress();\n        if (address instanceof Inet4Address) {\n            byteBuffer.put(inetSocketAddress.getAddress().getAddress(), 0, 4);\n        } else {\n            byteBuffer.put(inetSocketAddress.getAddress().getAddress(), 0, 16);\n        }\n        byteBuffer.putInt(inetSocketAddress.getPort());\n        byteBuffer.flip();\n        return byteBuffer;\n    }\n")),(0,o.kt)("p",{parentName:"blockquote"},"\u56e0\u4e3a\u52a0\u5165\u4e86\u7aef\u53e3\uff0c4\u4e2a\u5b57\u8282\u6765\u8868\u793a\u7aef\u53e3\u6240\u4ee5\u8fd9\u91cc\u7528\u76848\u548c20\u4e2a\u5b57\u8282\u6765\u8868\u793a\u3002")),(0,o.kt)("h4",{id:"22-consumequeue"},"2.2 ConsumeQueue"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"ConsumeQueue"))," \u5728\u4ee3\u7801\u4e2d\u5bf9\u5e94\u7684 ",(0,o.kt)("strong",{parentName:"p"},"ConsumeQueue")," \u7c7b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"public class ConsumeQueue {\n    private static final InternalLogger log = InternalLoggerFactory.getLogger(LoggerName.STORE_LOGGER_NAME);\n    //\u6d88\u8d39\u961f\u5217\u5b58\u50a8\u5355\u5143\u5927\u5c0f\n    public static final int CQ_STORE_UNIT_SIZE = 20;\n    private static final InternalLogger LOG_ERROR = InternalLoggerFactory.getLogger(LoggerName.STORE_ERROR_LOGGER_NAME);\n\n    private final DefaultMessageStore defaultMessageStore;\n\n    private final MappedFileQueue mappedFileQueue;\n    private final String topic;\n    private final int queueId;\n    private final ByteBuffer byteBufferIndex;\n\n    private final String storePath;\n    private final int mappedFileSize;\n    private long maxPhysicOffset = -1;\n    private volatile long minLogicOffset = 0;\n    private ConsumeQueueExt consumeQueueExt = null;\n}\n\npublic class MessageStoreConfig {\n    // ConsumeQueue file size,default is 30W -- \u9ed8\u8ba4\u6761\u657030w\u8c03\u8bb0\u5f55\n    private int mappedFileSizeConsumeQueue = 300000 * ConsumeQueue.CQ_STORE_UNIT_SIZE;\n    \n    //\u83b7\u53d6ConsumeQueue\u7684\u5927\u5c0f\uff1a5.72M\u5de6\u53f35.73M\u4e0d\u5230\n    public int getMappedFileSizeConsumeQueue() {\n        int factor = (int) Math.ceil(this.mappedFileSizeConsumeQueue / (ConsumeQueue.CQ_STORE_UNIT_SIZE * 1.0));\n        return (int) (factor * ConsumeQueue.CQ_STORE_UNIT_SIZE);\n    }\n}\n")),(0,o.kt)("p",null,"\u4ece\u4ee3\u7801\u4e2d\u53ef\u4ee5\u770b\u5230 ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"CQ_STORE_UNIT_SIZE"))," \u662f\u4e00\u4e2a\u56fa\u5b9a\u503c20\uff0c\u5982\u4e0b\u56fe\u6240\u793a\u3002\u4e3a\u4e86\u5b9e\u73b0\u5b9a\u957f\u5b58\u50a8\uff0cConsumeQueue \u5b58\u50a8\u4e86\u6d88\u606f Tag \u7684 Hash Code\uff0c\u5728\u8fdb\u884c Broker \u7aef\u6d88\u606f\u8fc7\u6ee4\u65f6\uff0c\u901a\u8fc7\u6bd4\u8f83 Consumer \u8ba2\u9605 Tag \u7684 HashCode \u548c\u5b58\u50a8\u6761\u76ee\u4e2d\u7684 Tag Hash Code \u662f\u5426\u4e00\u81f4\u6765\u51b3\u5b9a\u662f\u5426\u6d88\u8d39\u6d88\u606f\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://github.com/mxsm/document/blob/master/image/MQ/RocketMQ/ConsumeQueue.png?raw=true",alt:null})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"\u5b58\u50a8\u7684\u4f4d\u7f6e\uff1a${user.home}/store/consumequeue/${topicName}/${queueId}/${fileName}")," "),(0,o.kt)("p",{parentName:"blockquote"},"\u6bcf\u4e00\u4e2a\u6587\u4ef6\u5b58\u50a830w\u6761\u6570\u636e")),(0,o.kt)("h4",{id:"3-indexfile"},"3. IndexFile"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"public class IndexFile {\n    private static final InternalLogger log = InternalLoggerFactory.getLogger(LoggerName.STORE_LOGGER_NAME);\n    private static int hashSlotSize = 4;\n    private static int indexSize = 20;\n    private static int invalidIndex = 0;\n    private final int hashSlotNum; //500w\n    private final int indexNum; //2000w\n    private final MappedFile mappedFile;\n    private final FileChannel fileChannel;\n    private final MappedByteBuffer mappedByteBuffer;\n    private final IndexHeader indexHeader;\n    //..........\n    }\n")),(0,o.kt)("p",null,"\u4e0b\u9762\u6765\u770b\u4e00\u4e0bIndexFile\u7684\u5b58\u50a8\u7ed3\u6784\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://github.com/mxsm/document/blob/master/image/MQ/RocketMQ/IndexFile.png?raw=true",alt:null})))}c.isMDXComponent=!0}}]);