"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[1301],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},f="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=c(n),p=o,g=f["".concat(i,".").concat(p)]||f[p]||m[p]||a;return n?r.createElement(g,s(s({ref:t},u),{},{components:n})):r.createElement(g,s({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[f]="string"==typeof e?e:o,s[1]=l;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},548:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={title:"RocketMQ\u6e90\u7801\u89e3\u6790-\u6d88\u8d39\u6a21\u5f0f\u6d88\u8d39\u8fdb\u5ea6\u52a0\u8f7d\u6e90\u7801\u89e3\u6790",date:new Date("2021-06-14T00:00:00.000Z"),weight:202106102132},s=void 0,l={unversionedId:"rocketmq/rocketmq4/consumer/RocketMQ-analysis-consumer-messagemodel",id:"rocketmq/rocketmq4/consumer/RocketMQ-analysis-consumer-messagemodel",title:"RocketMQ\u6e90\u7801\u89e3\u6790-\u6d88\u8d39\u6a21\u5f0f\u6d88\u8d39\u8fdb\u5ea6\u52a0\u8f7d\u6e90\u7801\u89e3\u6790",description:"\u4ee5\u4e0b\u6e90\u7801\u57fa\u4e8eRocketMQ 4.8.0",source:"@site/docs/rocketmq/rocketmq4/consumer/RocketMQ-analysis-consumer-messagemodel.md",sourceDirName:"rocketmq/rocketmq4/consumer",slug:"/rocketmq/rocketmq4/consumer/RocketMQ-analysis-consumer-messagemodel",permalink:"/docs/rocketmq/rocketmq4/consumer/RocketMQ-analysis-consumer-messagemodel",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/rocketmq/rocketmq4/consumer/RocketMQ-analysis-consumer-messagemodel.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1680402643,formattedLastUpdatedAt:"Apr 2, 2023",frontMatter:{title:"RocketMQ\u6e90\u7801\u89e3\u6790-\u6d88\u8d39\u6a21\u5f0f\u6d88\u8d39\u8fdb\u5ea6\u52a0\u8f7d\u6e90\u7801\u89e3\u6790",date:"2021-06-14T00:00:00.000Z",weight:202106102132},sidebar:"rocketmq4",previous:{title:"RocketMQ\u6e90\u7801\u89e3\u6790-\u5e76\u53d1\u6d88\u8d39\u6d88\u606f\u6e90\u7801\u89e3\u6790",permalink:"/docs/rocketmq/rocketmq4/consumer/RocketMQ-analysis-consumer-concurrently"},next:{title:"RocketMQ\u6e90\u7801\u89e3\u6790-\u6d88\u8d39\u8005\u91cd\u590d\u6d88\u8d39",permalink:"/docs/rocketmq/rocketmq4/consumer/RocketMQ-analysis-consumer-repeat-consume"}},i={},c=[{value:"1. \u4ece\u4f55\u5904\u52a0\u8f7d\u6d88\u8d39\u8fdb\u5ea6\uff1f",id:"1-\u4ece\u4f55\u5904\u52a0\u8f7d\u6d88\u8d39\u8fdb\u5ea6",level:3}],u={toc:c},f="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(f,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u4ee5\u4e0b\u6e90\u7801\u57fa\u4e8eRocketMQ 4.8.0")),(0,o.kt)("p",null,"MQ\u7684\u6d88\u8d39\u6a21\u5f0f\u901a\u8fc7\u4e4b\u524d\u7684\u5206\u6790\u53ef\u4ee5\u77e5\u9053\u6709\u4e24\u79cd\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u96c6\u7fa4\u6d88\u8d39\u6a21\u5f0f(CLUSTERING)"),(0,o.kt)("li",{parentName:"ul"},"\u5e7f\u64ad\u6d88\u8d39\u6a21\u5f0f(BROADCASTING)")),(0,o.kt)("p",null,"\u4e24\u79cd\u4e0d\u540c\u7c7b\u578b\u7684\u6d88\u8d39\u6a21\u5f0f\u5f53\u4e2d\u6709\u533a\u522b\uff0c\u4e0b\u9762\u901a\u8fc7\u6e90\u7801\u6765\u8bf4\u660e\uff1a"),(0,o.kt)("h3",{id:"1-\u4ece\u4f55\u5904\u52a0\u8f7d\u6d88\u8d39\u8fdb\u5ea6"},"1. \u4ece\u4f55\u5904\u52a0\u8f7d\u6d88\u8d39\u8fdb\u5ea6\uff1f"),(0,o.kt)("p",null,"\u4ece\u4e4b\u524d\u7684\u5206\u6790\u53ef\u4ee5\u77e5\u9053\uff0cConsumer\u901a\u8fc7\u8c03\u7528\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"consumer.start();\n")),(0,o.kt)("p",null,"\u5728\u542f\u52a8\u540e\u4f1a\u52a0\u8f7d\u6d88\u8d39\u8fdb\u5ea6 ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"DefaultMQPushConsumerImpl#start"))," \u4ee3\u7801\u7247\u6bb5\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"}," if (this.defaultMQPushConsumer.getOffsetStore() != null) {\n     this.offsetStore = this.defaultMQPushConsumer.getOffsetStore();\n } else {\n     switch (this.defaultMQPushConsumer.getMessageModel()) {\n         case BROADCASTING:\n             this.offsetStore = new LocalFileOffsetStore(this.mQClientFactory, this.defaultMQPushConsumer.getConsumerGroup());\n             break;\n         case CLUSTERING:\n             this.offsetStore = new RemoteBrokerOffsetStore(this.mQClientFactory, this.defaultMQPushConsumer.getConsumerGroup());\n             break;\n         default:\n             break;\n     }\n     this.defaultMQPushConsumer.setOffsetStore(this.offsetStore);\n }\n this.offsetStore.load();\n")),(0,o.kt)("p",null,"\u4ee3\u7801\u53ef\u4ee5\u770b\u51fa\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"BROADCASTING\u7684\u6d88\u8d39\u6a21\u5f0f\u6d88\u8d39\u8fdb\u5ea6\u7684\u6301\u4e45\u5316\u7531LocalFileOffsetStore\u5b9e\u73b0"),(0,o.kt)("li",{parentName:"ul"},"CLUSTERING\u7684\u6d88\u8d39\u6a21\u5f0f\u6d88\u8d39\u8fdb\u5ea6\u7684\u6301\u4e45\u5316\u7531RemoteBrokerOffsetStore\u5b9e\u73b0")),(0,o.kt)("p",null,"\u4e24\u8005\u90fd\u5b9e\u73b0\u4e86 ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"OffsetStore"))," \u63a5\u53e3\uff0c\u8be5\u63a5\u53e3\u63d0\u4f9b\u4e86\u4f8b\u5982\uff1a\u52a0\u8f7d\u6d88\u8d39\u8fdb\u5ea6\u3001\u6301\u4e45\u5316\u6d88\u8d39\u8fdb\u5ea6\u3001\u66f4\u65b0\u6d88\u8d39\u8fdb\u5ea6\u7b49\u529f\u80fd\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"public interface OffsetStore {\n    void load() throws MQClientException;\n\n    void updateOffset(final MessageQueue mq, final long offset, final boolean increaseOnly);\n\n    long readOffset(final MessageQueue mq, final ReadOffsetType type);\n\n    void persistAll(final Set<MessageQueue> mqs);\n\n    void persist(final MessageQueue mq);\n\n    void removeOffset(MessageQueue mq);\n\n    Map<MessageQueue, Long> cloneOffsetTable(String topic);\n\n    void updateConsumeOffsetToBroker(MessageQueue mq, long offset, boolean isOneway) throws RemotingException,\n        MQBrokerException, InterruptedException, MQClientException;\n}\n\n")),(0,o.kt)("p",null,"\u901a\u8fc7\u4e0a\u9762\u7684\u5206\u6790\u53ef\u4ee5\u770b\u51fa\u6765\uff0c\u662f\u901a\u8fc7\u8c03\u7528 OffsetStore#load\u65b9\u6cd5\u6765\u52a0\u8f7d\u6d88\u8d39\u8fdb\u5ea6\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"RemoteBrokerOffsetStore#load")," \u7684\u5b9e\u73b0\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"public class RemoteBrokerOffsetStore implements OffsetStore {\n    private final static InternalLogger log = ClientLogger.getLog();\n    private final MQClientInstance mQClientFactory;\n    private final String groupName;\n    private ConcurrentMap<MessageQueue, AtomicLong> offsetTable =\n        new ConcurrentHashMap<MessageQueue, AtomicLong>();\n\n    public RemoteBrokerOffsetStore(MQClientInstance mQClientFactory, String groupName) {\n        this.mQClientFactory = mQClientFactory;\n        this.groupName = groupName;\n    }\n\n    @Override\n    public void load() {\n        \n        //\u7a7a\u5b9e\u73b0\uff1f\n        \n    }\n    //\u7701\u7565\u90e8\u5206\u4ee3\u7801\n}\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"RemoteBrokerOffsetStore\u53d1\u73b0\u662f\u7a7a\u5b9e\u73b0\uff0c\u539f\u56e0\u662f\u56e0\u4e3a\u96c6\u7fa4\u6d88\u8d39\u7684\u6d88\u8d39\u8fdb\u5ea6\u4fdd\u5b58\u5728Broker\u7aef")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"LocalFileOffsetStore#load")," \u5b9e\u73b0\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'public class LocalFileOffsetStore implements OffsetStore {\n    public final static String LOCAL_OFFSET_STORE_DIR = System.getProperty(\n        "rocketmq.client.localOffsetStoreDir",\n        System.getProperty("user.home") + File.separator + ".rocketmq_offsets");\n    private final static InternalLogger log = ClientLogger.getLog();\n    private final MQClientInstance mQClientFactory;\n    private final String groupName;\n    private final String storePath;\n    private ConcurrentMap<MessageQueue, AtomicLong> offsetTable =\n        new ConcurrentHashMap<MessageQueue, AtomicLong>();\n\n    @Override\n    public void load() throws MQClientException {\n        OffsetSerializeWrapper offsetSerializeWrapper = this.readLocalOffset();\n        if (offsetSerializeWrapper != null && offsetSerializeWrapper.getOffsetTable() != null) {\n            offsetTable.putAll(offsetSerializeWrapper.getOffsetTable());\n\n            for (MessageQueue mq : offsetSerializeWrapper.getOffsetTable().keySet()) {\n                AtomicLong offset = offsetSerializeWrapper.getOffsetTable().get(mq);\n                log.info("load consumer\'s offset, {} {} {}",\n                    this.groupName,\n                    mq,\n                    offset.get());\n            }\n        }\n    }\n    //\u7701\u7565\u5176\u4ed6\u4ee3\u7801\n}\n')),(0,o.kt)("p",null,"\u901a\u8fc7 LocalFileOffsetStore#load\u5b9e\u73b0\u53ef\u4ee5\u770b\u51fa\u6765\uff0c\u5e7f\u64ad\u6d88\u8d39\u662f\u5728\u672c\u5730\u52a0\u8f7d\u6d88\u8d39\u8fdb\u5ea6\uff0c\u6d88\u8d39\u8fdb\u5ea6\u4fdd\u5b58\u5728\u6d88\u8d39\u8005\u672c\u5730\u3002"))}m.isMDXComponent=!0}}]);