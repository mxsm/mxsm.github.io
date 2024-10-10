"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[9904],{5257:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>a});var n=t(4848),c=t(8453);const s={title:"RocketMQ-\u67b6\u6784\u8bbe\u8ba1",date:new Date("2021-05-10T00:00:00.000Z"),weight:202102102301},o="\u67b6\u6784\u8bbe\u8ba1",i={id:"rocketmq/rocketmq4/quick-start/rocketmq-architecture-design",title:"RocketMQ-\u67b6\u6784\u8bbe\u8ba1",description:"---",source:"@site/docs/rocketmq/rocketmq4/quick-start/rocketmq-architecture-design.md",sourceDirName:"rocketmq/rocketmq4/quick-start",slug:"/rocketmq/rocketmq4/quick-start/rocketmq-architecture-design",permalink:"/docs/rocketmq/rocketmq4/quick-start/rocketmq-architecture-design",draft:!1,unlisted:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/rocketmq/rocketmq4/quick-start/rocketmq-architecture-design.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1728574453e3,frontMatter:{title:"RocketMQ-\u67b6\u6784\u8bbe\u8ba1",date:"2021-05-10T00:00:00.000Z",weight:202102102301},sidebar:"rocketmq4",previous:{title:"Overview",permalink:"/docs/rocketmq/rocketmq4"},next:{title:"RocketMQ-\u57fa\u672c\u6982\u5ff5",permalink:"/docs/rocketmq/rocketmq4/quick-start/rocketmq-base-concept"}},l={},a=[{value:"1 \u6280\u672f\u67b6\u6784",id:"1-\u6280\u672f\u67b6\u6784",level:2},{value:"2 \u90e8\u7f72\u67b6\u6784",id:"2-\u90e8\u7f72\u67b6\u6784",level:2},{value:"RocketMQ \u7f51\u7edc\u90e8\u7f72\u7279\u70b9",id:"rocketmq-\u7f51\u7edc\u90e8\u7f72\u7279\u70b9",level:3}];function d(e){const r={a:"a",blockquote:"blockquote",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,c.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.header,{children:(0,n.jsx)(r.h1,{id:"\u67b6\u6784\u8bbe\u8ba1",children:"\u67b6\u6784\u8bbe\u8ba1"})}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h2,{id:"1-\u6280\u672f\u67b6\u6784",children:"1 \u6280\u672f\u67b6\u6784"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"https://github.com/apache/rocketmq/blob/master/docs/cn/image/rocketmq_architecture_1.png?raw=true",alt:""})}),"\n",(0,n.jsx)(r.p,{children:"RocketMQ\u67b6\u6784\u4e0a\u4e3b\u8981\u5206\u4e3a\u56db\u90e8\u5206\uff0c\u5982\u4e0a\u56fe\u6240\u793a:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Producer"})," \uff1a\u6d88\u606f\u53d1\u5e03\u7684\u89d2\u8272\uff0c\u652f\u6301\u5206\u5e03\u5f0f\u96c6\u7fa4\u65b9\u5f0f\u90e8\u7f72\u3002Producer\u901a\u8fc7MQ\u7684\u8d1f\u8f7d\u5747\u8861\u6a21\u5757\u9009\u62e9\u76f8\u5e94\u7684Broker\u96c6\u7fa4\u961f\u5217\u8fdb\u884c\u6d88\u606f\u6295\u9012\uff0c\u6295\u9012\u7684\u8fc7\u7a0b\u652f\u6301\u5feb\u901f\u5931\u8d25\u5e76\u4e14\u4f4e\u5ef6\u8fdf\u3002"]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Consumer"})," \uff1a\u6d88\u606f\u6d88\u8d39\u7684\u89d2\u8272\uff0c\u652f\u6301\u5206\u5e03\u5f0f\u96c6\u7fa4\u65b9\u5f0f\u90e8\u7f72\u3002\u652f\u6301\u4ee5push\u63a8\uff0cpull\u62c9\u4e24\u79cd\u6a21\u5f0f\u5bf9\u6d88\u606f\u8fdb\u884c\u6d88\u8d39\u3002\u540c\u65f6\u4e5f\u652f\u6301\u96c6\u7fa4\u65b9\u5f0f\u548c\u5e7f\u64ad\u65b9\u5f0f\u7684\u6d88\u8d39\uff0c\u5b83\u63d0\u4f9b\u5b9e\u65f6\u6d88\u606f\u8ba2\u9605\u673a\u5236\uff0c\u53ef\u4ee5\u6ee1\u8db3\u5927\u591a\u6570\u7528\u6237\u7684\u9700\u6c42\u3002"]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"NameServer"})," \uff1aNameServer\u662f\u4e00\u4e2a\u975e\u5e38\u7b80\u5355\u7684Topic\u8def\u7531\u6ce8\u518c\u4e2d\u5fc3\uff0c\u5176\u89d2\u8272\u7c7b\u4f3cDubbo\u4e2d\u7684zookeeper\uff0c\u652f\u6301Broker\u7684\u52a8\u6001\u6ce8\u518c\u4e0e\u53d1\u73b0\u3002\u4e3b\u8981\u5305\u62ec\u4e24\u4e2a\u529f\u80fd\uff1aBroker\u7ba1\u7406\uff0cNameServer\u63a5\u53d7Broker\u96c6\u7fa4\u7684\u6ce8\u518c\u4fe1\u606f\u5e76\u4e14\u4fdd\u5b58\u4e0b\u6765\u4f5c\u4e3a\u8def\u7531\u4fe1\u606f\u7684\u57fa\u672c\u6570\u636e\u3002\u7136\u540e\u63d0\u4f9b\u5fc3\u8df3\u68c0\u6d4b\u673a\u5236\uff0c\u68c0\u67e5Broker\u662f\u5426\u8fd8\u5b58\u6d3b\uff1b\u8def\u7531\u4fe1\u606f\u7ba1\u7406\uff0c\u6bcf\u4e2aNameServer\u5c06\u4fdd\u5b58\u5173\u4e8eBroker\u96c6\u7fa4\u7684\u6574\u4e2a\u8def\u7531\u4fe1\u606f\u548c\u7528\u4e8e\u5ba2\u6237\u7aef\u67e5\u8be2\u7684\u961f\u5217\u4fe1\u606f\u3002\u7136\u540eProducer\u548cConumser\u901a\u8fc7NameServer\u5c31\u53ef\u4ee5\u77e5\u9053\u6574\u4e2aBroker\u96c6\u7fa4\u7684\u8def\u7531\u4fe1\u606f\uff0c\u4ece\u800c\u8fdb\u884c\u6d88\u606f\u7684\u6295\u9012\u548c\u6d88\u8d39\u3002NameServer\u901a\u5e38\u4e5f\u662f\u96c6\u7fa4\u7684\u65b9\u5f0f\u90e8\u7f72\uff0c\u5404\u5b9e\u4f8b\u95f4\u76f8\u4e92\u4e0d\u8fdb\u884c\u4fe1\u606f\u901a\u8baf\u3002Broker\u662f\u5411\u6bcf\u4e00\u53f0NameServer\u6ce8\u518c\u81ea\u5df1\u7684\u8def\u7531\u4fe1\u606f\uff0c\u6240\u4ee5\u6bcf\u4e00\u4e2aNameServer\u5b9e\u4f8b\u4e0a\u9762\u90fd\u4fdd\u5b58\u4e00\u4efd\u5b8c\u6574\u7684\u8def\u7531\u4fe1\u606f\u3002\u5f53\u67d0\u4e2aNameServer\u56e0\u67d0\u79cd\u539f\u56e0\u4e0b\u7ebf\u4e86\uff0cBroker\u4ecd\u7136\u53ef\u4ee5\u5411\u5176\u5b83NameServer\u540c\u6b65\u5176\u8def\u7531\u4fe1\u606f\uff0cProducer,Consumer\u4ecd\u7136\u53ef\u4ee5\u52a8\u6001\u611f\u77e5Broker\u7684\u8def\u7531\u7684\u4fe1\u606f\u3002"]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"BrokerServer"})," \uff1aBroker\u4e3b\u8981\u8d1f\u8d23\u6d88\u606f\u7684\u5b58\u50a8\u3001\u6295\u9012\u548c\u67e5\u8be2\u4ee5\u53ca\u670d\u52a1\u9ad8\u53ef\u7528\u4fdd\u8bc1\uff0c\u4e3a\u4e86\u5b9e\u73b0\u8fd9\u4e9b\u529f\u80fd\uff0cBroker\u5305\u542b\u4e86\u4ee5\u4e0b\u51e0\u4e2a\u91cd\u8981\u5b50\u6a21\u5757\u3002"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(r.ol,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Remoting Module"})," \uff1a\u6574\u4e2aBroker\u7684\u5b9e\u4f53\uff0c\u8d1f\u8d23\u5904\u7406\u6765\u81eaclients\u7aef\u7684\u8bf7\u6c42\u3002"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Client Manager"}),"\uff1a\u8d1f\u8d23\u7ba1\u7406\u5ba2\u6237\u7aef(Producer/Consumer)\u548c\u7ef4\u62a4Consumer\u7684Topic\u8ba2\u9605\u4fe1\u606f"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Store Service"})," \uff1a\u63d0\u4f9b\u65b9\u4fbf\u7b80\u5355\u7684API\u63a5\u53e3\u5904\u7406\u6d88\u606f\u5b58\u50a8\u5230\u7269\u7406\u786c\u76d8\u548c\u67e5\u8be2\u529f\u80fd\u3002"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"HA Service"})," \uff1a\u9ad8\u53ef\u7528\u670d\u52a1\uff0c\u63d0\u4f9bMaster Broker \u548c Slave Broker\u4e4b\u95f4\u7684\u6570\u636e\u540c\u6b65\u529f\u80fd\u3002"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Index Service"})," \uff1a\u6839\u636e\u7279\u5b9a\u7684Message key\u5bf9\u6295\u9012\u5230Broker\u7684\u6d88\u606f\u8fdb\u884c\u7d22\u5f15\u670d\u52a1\uff0c\u4ee5\u63d0\u4f9b\u6d88\u606f\u7684\u5feb\u901f\u67e5\u8be2\u3002"]}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"https://github.com/apache/rocketmq/raw/master/docs/cn/image/rocketmq_architecture_2.png",alt:""})}),"\n",(0,n.jsx)(r.h2,{id:"2-\u90e8\u7f72\u67b6\u6784",children:"2 \u90e8\u7f72\u67b6\u6784"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"https://github.com/apache/rocketmq/raw/master/docs/cn/image/rocketmq_architecture_3.png",alt:""})}),"\n",(0,n.jsx)(r.h3,{id:"rocketmq-\u7f51\u7edc\u90e8\u7f72\u7279\u70b9",children:"RocketMQ \u7f51\u7edc\u90e8\u7f72\u7279\u70b9"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsx)(r.p,{children:"NameServer\u662f\u4e00\u4e2a\u51e0\u4e4e\u65e0\u72b6\u6001\u8282\u70b9\uff0c\u53ef\u96c6\u7fa4\u90e8\u7f72\uff0c\u8282\u70b9\u4e4b\u95f4\u65e0\u4efb\u4f55\u4fe1\u606f\u540c\u6b65\u3002"}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsx)(r.p,{children:"Broker\u90e8\u7f72\u76f8\u5bf9\u590d\u6742\uff0cBroker\u5206\u4e3aMaster\u4e0eSlave\uff0c\u4e00\u4e2aMaster\u53ef\u4ee5\u5bf9\u5e94\u591a\u4e2aSlave\uff0c\u4f46\u662f\u4e00\u4e2aSlave\u53ea\u80fd\u5bf9\u5e94\u4e00\u4e2aMaster\uff0cMaster\u4e0eSlave \u7684\u5bf9\u5e94\u5173\u7cfb\u901a\u8fc7\u6307\u5b9a\u76f8\u540c\u7684BrokerName\uff0c\u4e0d\u540c\u7684BrokerId \u6765\u5b9a\u4e49\uff0cBrokerId\u4e3a0\u8868\u793aMaster\uff0c\u975e0\u8868\u793aSlave\u3002Master\u4e5f\u53ef\u4ee5\u90e8\u7f72\u591a\u4e2a\u3002\u6bcf\u4e2aBroker\u4e0eNameServer\u96c6\u7fa4\u4e2d\u7684\u6240\u6709\u8282\u70b9\u5efa\u7acb\u957f\u8fde\u63a5\uff0c\u5b9a\u65f6\u6ce8\u518cTopic\u4fe1\u606f\u5230\u6240\u6709NameServer\u3002 \u6ce8\u610f\uff1a\u5f53\u524dRocketMQ\u7248\u672c\u5728\u90e8\u7f72\u67b6\u6784\u4e0a\u652f\u6301\u4e00Master\u591aSlave\uff0c\u4f46\u53ea\u6709BrokerId=1\u7684\u4ece\u670d\u52a1\u5668\u624d\u4f1a\u53c2\u4e0e\u6d88\u606f\u7684\u8bfb\u8d1f\u8f7d\u3002"}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsx)(r.p,{children:"Producer\u4e0eNameServer\u96c6\u7fa4\u4e2d\u7684\u5176\u4e2d\u4e00\u4e2a\u8282\u70b9\uff08\u968f\u673a\u9009\u62e9\uff09\u5efa\u7acb\u957f\u8fde\u63a5\uff0c\u5b9a\u671f\u4eceNameServer\u83b7\u53d6Topic\u8def\u7531\u4fe1\u606f\uff0c\u5e76\u5411\u63d0\u4f9bTopic \u670d\u52a1\u7684Master\u5efa\u7acb\u957f\u8fde\u63a5\uff0c\u4e14\u5b9a\u65f6\u5411Master\u53d1\u9001\u5fc3\u8df3\u3002Producer\u5b8c\u5168\u65e0\u72b6\u6001\uff0c\u53ef\u96c6\u7fa4\u90e8\u7f72\u3002"}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsx)(r.p,{children:"Consumer\u4e0eNameServer\u96c6\u7fa4\u4e2d\u7684\u5176\u4e2d\u4e00\u4e2a\u8282\u70b9\uff08\u968f\u673a\u9009\u62e9\uff09\u5efa\u7acb\u957f\u8fde\u63a5\uff0c\u5b9a\u671f\u4eceNameServer\u83b7\u53d6Topic\u8def\u7531\u4fe1\u606f\uff0c\u5e76\u5411\u63d0\u4f9bTopic\u670d\u52a1\u7684Master\u3001Slave\u5efa\u7acb\u957f\u8fde\u63a5\uff0c\u4e14\u5b9a\u65f6\u5411Master\u3001Slave\u53d1\u9001\u5fc3\u8df3\u3002Consumer\u65e2\u53ef\u4ee5\u4eceMaster\u8ba2\u9605\u6d88\u606f\uff0c\u4e5f\u53ef\u4ee5\u4eceSlave\u8ba2\u9605\u6d88\u606f\uff0c\u6d88\u8d39\u8005\u5728\u5411Master\u62c9\u53d6\u6d88\u606f\u65f6\uff0cMaster\u670d\u52a1\u5668\u4f1a\u6839\u636e\u62c9\u53d6\u504f\u79fb\u91cf\u4e0e\u6700\u5927\u504f\u79fb\u91cf\u7684\u8ddd\u79bb\uff08\u5224\u65ad\u662f\u5426\u8bfb\u8001\u6d88\u606f\uff0c\u4ea7\u751f\u8bfbI/O\uff09\uff0c\u4ee5\u53ca\u4ece\u670d\u52a1\u5668\u662f\u5426\u53ef\u8bfb\u7b49\u56e0\u7d20\u5efa\u8bae\u4e0b\u4e00\u6b21\u662f\u4eceMaster\u8fd8\u662fSlave\u62c9\u53d6\u3002"}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:"\u7ed3\u5408\u90e8\u7f72\u67b6\u6784\u56fe\uff0c\u63cf\u8ff0\u96c6\u7fa4\u5de5\u4f5c\u6d41\u7a0b\uff1a"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"\u542f\u52a8NameServer\uff0cNameServer\u8d77\u6765\u540e\u76d1\u542c\u7aef\u53e3\uff0c\u7b49\u5f85Broker\u3001Producer\u3001Consumer\u8fde\u4e0a\u6765\uff0c\u76f8\u5f53\u4e8e\u4e00\u4e2a\u8def\u7531\u63a7\u5236\u4e2d\u5fc3\u3002"}),"\n",(0,n.jsx)(r.li,{children:"Broker\u542f\u52a8\uff0c\u8ddf\u6240\u6709\u7684NameServer\u4fdd\u6301\u957f\u8fde\u63a5\uff0c\u5b9a\u65f6\u53d1\u9001\u5fc3\u8df3\u5305\u3002\u5fc3\u8df3\u5305\u4e2d\u5305\u542b\u5f53\u524dBroker\u4fe1\u606f(IP+\u7aef\u53e3\u7b49)\u4ee5\u53ca\u5b58\u50a8\u6240\u6709Topic\u4fe1\u606f\u3002\u6ce8\u518c\u6210\u529f\u540e\uff0cNameServer\u96c6\u7fa4\u4e2d\u5c31\u6709Topic\u8ddfBroker\u7684\u6620\u5c04\u5173\u7cfb\u3002"}),"\n",(0,n.jsx)(r.li,{children:"\u6536\u53d1\u6d88\u606f\u524d\uff0c\u5148\u521b\u5efaTopic\uff0c\u521b\u5efaTopic\u65f6\u9700\u8981\u6307\u5b9a\u8be5Topic\u8981\u5b58\u50a8\u5728\u54ea\u4e9bBroker\u4e0a\uff0c\u4e5f\u53ef\u4ee5\u5728\u53d1\u9001\u6d88\u606f\u65f6\u81ea\u52a8\u521b\u5efaTopic\u3002"}),"\n",(0,n.jsx)(r.li,{children:"Producer\u53d1\u9001\u6d88\u606f\uff0c\u542f\u52a8\u65f6\u5148\u8ddfNameServer\u96c6\u7fa4\u4e2d\u7684\u5176\u4e2d\u4e00\u53f0\u5efa\u7acb\u957f\u8fde\u63a5\uff0c\u5e76\u4eceNameServer\u4e2d\u83b7\u53d6\u5f53\u524d\u53d1\u9001\u7684Topic\u5b58\u5728\u54ea\u4e9bBroker\u4e0a\uff0c\u8f6e\u8be2\u4ece\u961f\u5217\u5217\u8868\u4e2d\u9009\u62e9\u4e00\u4e2a\u961f\u5217\uff0c\u7136\u540e\u4e0e\u961f\u5217\u6240\u5728\u7684Broker\u5efa\u7acb\u957f\u8fde\u63a5\u4ece\u800c\u5411Broker\u53d1\u6d88\u606f\u3002"}),"\n",(0,n.jsx)(r.li,{children:"Consumer\u8ddfProducer\u7c7b\u4f3c\uff0c\u8ddf\u5176\u4e2d\u4e00\u53f0NameServer\u5efa\u7acb\u957f\u8fde\u63a5\uff0c\u83b7\u53d6\u5f53\u524d\u8ba2\u9605Topic\u5b58\u5728\u54ea\u4e9bBroker\u4e0a\uff0c\u7136\u540e\u76f4\u63a5\u8ddfBroker\u5efa\u7acb\u8fde\u63a5\u901a\u9053\uff0c\u5f00\u59cb\u6d88\u8d39\u6d88\u606f\u3002"}),"\n"]}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsx)(r.p,{children:"\u540e\u7eed\u4f1a\u6839\u636e\u67b6\u6784\u7ed3\u5408\u6e90\u7801\u8fdb\u884cRocket mq\u7684\u6e90\u7801\u5206\u6790"}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:"\u53c2\u8003\u6587\u6863\uff1a"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"https://github.com/apache/rocketmq/blob/master/docs/cn/architecture.md",children:"MQ\u67b6\u6784\u8bbe\u8ba1"})}),"\n"]}),"\n"]})]})}function m(e={}){const{wrapper:r}={...(0,c.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8453:(e,r,t)=>{t.d(r,{R:()=>o,x:()=>i});var n=t(6540);const c={},s=n.createContext(c);function o(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:o(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);