"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[7408],{2599:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>x,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var l=r(5893),n=r(1151);const s={title:"RocketMQ\u6e90\u7801\u89e3\u6790-Broker\u542f\u52a8",date:new Date("2020-03-15T00:00:00.000Z"),weight:202106012229},o=void 0,i={id:"rocketmq/rocketmq4/broker/RocketMQ-analysis-Broker-start",title:"RocketMQ\u6e90\u7801\u89e3\u6790-Broker\u542f\u52a8",description:"\u4ee5\u4e0b\u6e90\u7801\u57fa\u4e8eRocket MQ 4.7.0",source:"@site/docs/rocketmq/rocketmq4/broker/RocketMQ-analysis-Broker-start.md",sourceDirName:"rocketmq/rocketmq4/broker",slug:"/rocketmq/rocketmq4/broker/RocketMQ-analysis-Broker-start",permalink:"/docs/rocketmq/rocketmq4/broker/RocketMQ-analysis-Broker-start",draft:!1,unlisted:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/rocketmq/rocketmq4/broker/RocketMQ-analysis-Broker-start.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1706451902,formattedLastUpdatedAt:"Jan 28, 2024",frontMatter:{title:"RocketMQ\u6e90\u7801\u89e3\u6790-Broker\u542f\u52a8",date:"2020-03-15T00:00:00.000Z",weight:202106012229},sidebar:"rocketmq4",previous:{title:"RocketMQ\u6e90\u7801\u89e3\u6790-Broker\u63a5\u6536\u62c9\u53d6\u6d88\u606f",permalink:"/docs/rocketmq/rocketmq4/broker/RocketMQ-analysis-Broker-recevie-pull"},next:{title:"RocketMQ\u6e90\u7801\u89e3\u6790-Broker \u6d88\u606fTag\u8fc7\u6ee4",permalink:"/docs/rocketmq/rocketmq4/broker/RocketMQ-analysis-Broker-tag-filter"}},c={},d=[{value:"1. Broker",id:"1-broker",level:3},{value:"2. Broker\u4f5c\u7528",id:"2-broker\u4f5c\u7528",level:3},{value:"3. Broker\u542f\u52a8\u6d41\u7a0b\u5206\u6790",id:"3-broker\u542f\u52a8\u6d41\u7a0b\u5206\u6790",level:3},{value:"4. BrokerController\u521b\u5efa",id:"4-brokercontroller\u521b\u5efa",level:3},{value:"5. BrokerController\u542f\u52a8",id:"5-brokercontroller\u542f\u52a8",level:3},{value:"6. Broker\u914d\u7f6e",id:"6-broker\u914d\u7f6e",level:3}];function h(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(t.blockquote,{children:["\n",(0,l.jsx)(t.p,{children:"\u4ee5\u4e0b\u6e90\u7801\u57fa\u4e8eRocket MQ 4.7.0"}),"\n"]}),"\n",(0,l.jsx)(t.h3,{id:"1-broker",children:"1. Broker"}),"\n",(0,l.jsx)(t.p,{children:"\u6d88\u606f\u4e2d\u8f6c\u89d2\u8272\uff0c\u8d1f\u8d23\u5b58\u50a8\u6d88\u606f\u3001\u8f6c\u53d1\u6d88\u606f\u3002Broker\u5728RocketMQ\u7cfb\u7edf\u4e2d\u8d1f\u8d23\u63a5\u6536\u4ece\u751f\u4ea7\u8005\u53d1\u9001\u6765\u7684\u6d88\u606f\u5e76\u5b58\u50a8\u3001\u540c\u65f6\u4e3a\u6d88\u8d39\u8005\u7684\u62c9\u53d6\u8bf7\u6c42\u4f5c\u51c6\u5907\u3002\u4ee3\u7406\u670d\u52a1\u5668\u4e5f\u5b58\u50a8\u6d88\u606f\u76f8\u5173\u7684\u5143\u6570\u636e\uff0c\u5305\u62ec\u6d88\u8d39\u8005\u7ec4\u3001\u6d88\u8d39\u8fdb\u5ea6\u504f\u79fb\u548c\u4e3b\u9898\u548c\u961f\u5217\u6d88\u606f\u7b49\u3002"}),"\n",(0,l.jsx)(t.h3,{id:"2-broker\u4f5c\u7528",children:"2. Broker\u4f5c\u7528"}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.img,{src:"https://github.com/mxsm/document/blob/master/image/MQ/RocketMQ/Broker%E5%8A%9F%E8%83%BD%E5%88%97%E8%A1%A8%E5%9B%BE.png?raw=true",alt:""})}),"\n",(0,l.jsx)(t.p,{children:"\u4e3b\u8981\u56db\u4e2a\u4f5c\u7528\uff1a"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:"\u6d88\u606f\u5b58\u50a8"}),"\n",(0,l.jsx)(t.li,{children:"\u6d88\u606f\u6295\u9012"}),"\n",(0,l.jsx)(t.li,{children:"\u6d88\u606f\u67e5\u8be2"}),"\n",(0,l.jsx)(t.li,{children:"\u670d\u52a1\u7684\u9ad8\u53ef\u7528"}),"\n"]}),"\n",(0,l.jsx)(t.p,{children:"\u8fd9\u56db\u4e2a\u529f\u80fd\u7531\u4e94\u4e2a\u6a21\u5757\u6765\u5b9e\u73b0\u3002"}),"\n",(0,l.jsx)(t.h3,{id:"3-broker\u542f\u52a8\u6d41\u7a0b\u5206\u6790",children:"3. Broker\u542f\u52a8\u6d41\u7a0b\u5206\u6790"}),"\n",(0,l.jsx)(t.p,{children:"\u603b\u4f53\u7684\u542f\u52a8\u6d41\u7a0b\u548cNameServer\u7684\u542f\u52a8\u6d41\u7a0b\u5dee\u4e0d\u591a\u4f46\u662f\u6bd4NameServer\u7684\u542f\u52a8\u6d41\u7a0b\u590d\u6742\uff1a"}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.img,{src:"https://github.com/mxsm/document/blob/master/image/MQ/RocketMQ/BrokerControllerFlowchart.png?raw=true",alt:""})}),"\n",(0,l.jsx)(t.p,{children:"\u8fd9\u4e2a\u6d41\u7a0b\u5927\u81f4\u5206\u4e3a\u4ee5\u4e0b\u7684\u51e0\u4e2a\u6b65\u9aa4\uff1a"}),"\n",(0,l.jsxs)(t.ol,{children:["\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.strong,{children:"BrokerController\u521b\u5efa"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:"NettyServer\u548cNettyClient\u7684\u914d\u7f6e\u5904\u7406"}),"\n",(0,l.jsx)(t.li,{children:"\u547d\u4ee4\u884c\u53c2\u6570\u7684\u5904\u7406"}),"\n",(0,l.jsx)(t.li,{children:"Broker\u89d2\u8272\u7684\u5904\u7406"}),"\n",(0,l.jsx)(t.li,{children:"\u521b\u5efaBrokerController"}),"\n",(0,l.jsx)(t.li,{children:"\u521d\u59cb\u5316BrokerController\u901a\u8fc7\u8c03\u7528\u65b9\u6cd5"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(t.li,{children:(0,l.jsx)(t.strong,{children:"BrokerController\u542f\u52a8"})}),"\n"]}),"\n",(0,l.jsx)(t.h3,{id:"4-brokercontroller\u521b\u5efa",children:"4. BrokerController\u521b\u5efa"}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:(0,l.jsx)(t.code,{children:"BrokerStartUp.createBrokerController"})})," \u8c03\u7528\u65b9\u6cd5\u521b\u5efa"]}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.img,{src:"https://github.com/mxsm/document/blob/master/image/MQ/RocketMQ/%E8%AE%BE%E7%BD%AE%E5%8F%91%E9%80%81%E5%8C%BA%E6%8E%A5%E6%94%B6%E5%8C%BA%E7%9A%84%E7%BC%93%E5%AD%98.png?raw=true",alt:""})}),"\n",(0,l.jsx)(t.p,{children:"\u4e0a\u56fe\u662f\u8bbe\u7f6eNetty\u7684\u53d1\u9001\u548c\u63a5\u6536\u7f13\u51b2\u533a\u7684\u5927\u5c0f\u3002"}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.img,{src:"https://github.com/mxsm/document/blob/master/image/MQ/RocketMQ/Broker%E8%A7%92%E8%89%B2%E5%A4%84%E7%90%86.png?raw=true",alt:""})}),"\n",(0,l.jsx)(t.p,{children:"\u4e0a\u56fe\u4e3b\u8981\u662f\u5904\u7406\u5728\u96c6\u7fa4\u6761\u4ef6\u5c0f\u7684Broker\u89d2\u8272\u7684\uff0c\u4ece\u8fd9\u91cc\u770b\u51fa\u6765brokerId\u4e3a0\u7684\u4e3aMater\u8282\u70b9\uff0c\u5176\u4ed6\u7684\u4e3aSlave\u8282\u70b9\u3002"}),"\n",(0,l.jsxs)(t.blockquote,{children:["\n",(0,l.jsx)(t.p,{children:"\u89d2\u8272\u7c7b\u578b\uff1aSYNC_MASTER/ASYNC_MASTER/SLAVE \u9ed8\u8ba4\u4e3aASYNC_MASTER\uff0c"}),"\n",(0,l.jsxs)(t.p,{children:["\u5b98\u65b9\u6587\u6863\uff1a",(0,l.jsx)(t.a,{href:"https://rocketmq.apache.org/docs/rmq-deployment/",children:"https://rocketmq.apache.org/docs/rmq-deployment/"})]}),"\n"]}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.img,{src:"https://github.com/mxsm/document/blob/master/image/MQ/RocketMQ/%E5%91%BD%E4%BB%A4%E8%A1%8C%E5%8F%82%E6%95%B0%E5%A4%84%E7%90%86.png?raw=true",alt:""})}),"\n",(0,l.jsx)(t.p,{children:"\u4e0a\u56fe\u662f\u5904\u7406\u547d\u4ee4\u884c\u53c2\u6570"}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.img,{src:"https://github.com/mxsm/document/blob/master/image/MQ/RocketMQ/%E5%88%9D%E5%A7%8B%E5%8C%96BrokerController.png?raw=true",alt:""})}),"\n",(0,l.jsx)(t.p,{children:"\u521d\u59cb\u5316BrokerController\u3002\u7136\u540e\u8fd4\u56decontroller\u3002"}),"\n",(0,l.jsx)(t.h3,{id:"5-brokercontroller\u542f\u52a8",children:"5. BrokerController\u542f\u52a8"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-java",children:'    public static BrokerController start(BrokerController controller) {\n        try {\n\n            controller.start();\n\n            String tip = "The broker[" + controller.getBrokerConfig().getBrokerName() + ", "\n                + controller.getBrokerAddr() + "] boot success. serializeType=" + RemotingCommand.getSerializeTypeConfigInThisServer();\n\n            if (null != controller.getBrokerConfig().getNamesrvAddr()) {\n                tip += " and name server is " + controller.getBrokerConfig().getNamesrvAddr();\n            }\n\n            log.info(tip);\n            System.out.printf("%s%n", tip);\n            return controller;\n        } catch (Throwable e) {\n            e.printStackTrace();\n            System.exit(-1);\n        }\n\n        return null;\n    }\n\n'})}),"\n",(0,l.jsx)(t.p,{children:"\u542f\u52a8\u6bd4\u8f83\u7b80\u5355\uff0c\u8c03\u7528start\u65b9\u6cd5\u3002"}),"\n",(0,l.jsx)(t.h3,{id:"6-broker\u914d\u7f6e",children:"6. Broker\u914d\u7f6e"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Property Name"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"Default value"}),(0,l.jsx)(t.th,{style:{textAlign:"right"},children:"Details"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"listenPort"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"10911"}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"listen port for client"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"namesrvAddr"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"null"}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"name server address"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"brokerIP1"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"InetAddress for network interface"}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"Should be configured if having multiple addresses"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"brokerName"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"null"}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"broker name"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"brokerClusterName"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"DefaultCluster"}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"this broker belongs to which cluster"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"brokerId"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"0"}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"broker id, 0 means master, positive integers mean slave"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"storePathCommitLog"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"$HOME/store/commitlog/"}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"file path for commit log"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"storePathConsumerQueue"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"$HOME/store/consumequeue/"}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"file path for consume queue"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"mapedFileSizeCommitLog"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"1024 * 1024 * 1024(1G)"}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"mapped file size for commit log"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"deleteWhen"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"04"}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"When to delete the commitlog which is out of the reserve time"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"fileReserverdTime"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"72"}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"The number of hours to keep a commitlog before deleting it"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"brokerRole"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"ASYNC_MASTER"}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"SYNC_MASTER/ASYNC_MASTER/SLAVE"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"flushDiskType"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"ASYNC_FLUSH"}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"{SYNC_FLUSH/ASYNC_FLUSH}. Broker of SYNC_FLUSH mode flushes each message onto disk before acknowledging producer. Broker of ASYNC_FLUSH mode, on the other hand, takes advantage of group-committing, achieving better performance."})]})]})]})]})}function x(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},1151:(e,t,r)=>{r.d(t,{Z:()=>i,a:()=>o});var l=r(7294);const n={},s=l.createContext(n);function o(e){const t=l.useContext(s);return l.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),l.createElement(s.Provider,{value:t},e.children)}}}]);