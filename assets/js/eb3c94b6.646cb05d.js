"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[1132],{7232:(e,l,i)=>{i.r(l),i.d(l,{assets:()=>o,contentTitle:()=>c,default:()=>a,frontMatter:()=>d,metadata:()=>t,toc:()=>h});var r=i(5893),n=i(1151);const d={title:"RocketMQ5.0",sidebar_label:"Overview",hide_table_of_contents:!0,slug:"/rocketmq/rocketmq5"},c=void 0,t={id:"rocketmq/rocketmq5/index",title:"RocketMQ5.0",description:"RocketMQ5.0",source:"@site/docs/rocketmq/rocketmq5/index.md",sourceDirName:"rocketmq/rocketmq5",slug:"/rocketmq/rocketmq5",permalink:"/docs/rocketmq/rocketmq5",draft:!1,unlisted:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/rocketmq/rocketmq5/index.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1706451902,formattedLastUpdatedAt:"Jan 28, 2024",frontMatter:{title:"RocketMQ5.0",sidebar_label:"Overview",hide_table_of_contents:!0,slug:"/rocketmq/rocketmq5"},sidebar:"rocketmq5",next:{title:"RocketMQ5.0 Controller DLedger\u6a21\u5f0f",permalink:"/docs/rocketmq/rocketmq5/quick-start/dledger-controller"}},o={},h=[{value:"1. RocketMQ\u8def\u7531\u4e2d\u5fc3NameServer",id:"1-rocketmq\u8def\u7531\u4e2d\u5fc3nameserver",level:2},{value:"1.1 NameServer\u67b6\u6784\u8bbe\u8ba1",id:"11-nameserver\u67b6\u6784\u8bbe\u8ba1",level:3},{value:"1.2 NameServer\u542f\u52a8\u6d41\u7a0b",id:"12-nameserver\u542f\u52a8\u6d41\u7a0b",level:3},{value:"1.3 NameServer\u8def\u7531\u6ce8\u518c\u3001\u6545\u969c\u5254\u9664",id:"13-nameserver\u8def\u7531\u6ce8\u518c\u6545\u969c\u5254\u9664",level:3},{value:"1.3.1 \u8def\u7531\u5143\u4fe1\u606f",id:"131-\u8def\u7531\u5143\u4fe1\u606f",level:4},{value:"1.3.2 \u8def\u7531\u6ce8\u518c",id:"132-\u8def\u7531\u6ce8\u518c",level:4},{value:"1.3.3 \u8def\u7531\u5220\u9664",id:"133-\u8def\u7531\u5220\u9664",level:4},{value:"1.3.4 \u8def\u7531\u53d1\u73b0",id:"134-\u8def\u7531\u53d1\u73b0",level:4},{value:"2. RocketMQ\u6d88\u606f\u53d1\u9001MQProducer",id:"2-rocketmq\u6d88\u606f\u53d1\u9001mqproducer",level:2},{value:"2.1 \u804a\u804aRocketMQ\u6d88\u606f\u53d1\u9001",id:"21-\u804a\u804arocketmq\u6d88\u606f\u53d1\u9001",level:3},{value:"2.2 \u521d\u6b65\u4e86\u89e3RocketMQ\u6d88\u606f",id:"22-\u521d\u6b65\u4e86\u89e3rocketmq\u6d88\u606f",level:3},{value:"2.3 \u751f\u4ea7\u8005\u542f\u52a8\u8fc7\u7a0b",id:"23-\u751f\u4ea7\u8005\u542f\u52a8\u8fc7\u7a0b",level:3},{value:"2.3.1 \u4e86\u89e3DefaultMQProducer\u4e0eTransactionMQProducer\u6d88\u606f\u53d1\u9001",id:"231-\u4e86\u89e3defaultmqproducer\u4e0etransactionmqproducer\u6d88\u606f\u53d1\u9001",level:4},{value:"2.3.2 \u751f\u4ea7\u8005\u7684\u542f\u52a8\u6d41\u7a0b\u5206\u6790",id:"232-\u751f\u4ea7\u8005\u7684\u542f\u52a8\u6d41\u7a0b\u5206\u6790",level:4},{value:"2.4 \u6d88\u606f\u53d1\u9001\u7684\u6d41\u7a0b\u5206\u6790(\u5355\u6761\u6d88\u606f)",id:"24-\u6d88\u606f\u53d1\u9001\u7684\u6d41\u7a0b\u5206\u6790\u5355\u6761\u6d88\u606f",level:3},{value:"2.4.1 \u6d88\u606f\u957f\u5ea6\u9a8c\u8bc1",id:"241-\u6d88\u606f\u957f\u5ea6\u9a8c\u8bc1",level:4},{value:"2.4.2 \u67e5\u627e\u4e3b\u9898\u548c\u8def\u7531\u4fe1\u606f",id:"242-\u67e5\u627e\u4e3b\u9898\u548c\u8def\u7531\u4fe1\u606f",level:4},{value:"2.4.3 \u9009\u62e9\u6d88\u606f\u961f\u5217-\u961f\u5217\u9009\u62e9\u7b56\u7565",id:"243-\u9009\u62e9\u6d88\u606f\u961f\u5217-\u961f\u5217\u9009\u62e9\u7b56\u7565",level:4},{value:"2.3.4 \u53d1\u9001\u6d88\u606f",id:"234-\u53d1\u9001\u6d88\u606f",level:4},{value:"3.5\u6279\u91cf\u6d88\u606f\u53d1\u9001",id:"35\u6279\u91cf\u6d88\u606f\u53d1\u9001",level:3},{value:"3. RocketMQ\u6570\u636e\u5b58\u50a8Broker",id:"3-rocketmq\u6570\u636e\u5b58\u50a8broker",level:2},{value:"3.1 \u5b58\u50a8\u6982\u8981\u8bbe\u8ba1",id:"31-\u5b58\u50a8\u6982\u8981\u8bbe\u8ba1",level:3},{value:"3.2 \u6d88\u606f\u5b58\u50a8\u548c\u7d22\u5f15\u5b58\u50a8",id:"32-\u6d88\u606f\u5b58\u50a8\u548c\u7d22\u5f15\u5b58\u50a8",level:3},{value:"3.3 \u6d88\u606f\u53d1\u9001\u5230Broker\u5b58\u50a8\u7684\u6d41\u7a0b",id:"33-\u6d88\u606f\u53d1\u9001\u5230broker\u5b58\u50a8\u7684\u6d41\u7a0b",level:3},{value:"3.4 \u5b58\u50a8\u6587\u4ef6\u7ec4\u7ec7\u548c\u5185\u5b58\u6620\u5c04\u5173\u7cfb",id:"34-\u5b58\u50a8\u6587\u4ef6\u7ec4\u7ec7\u548c\u5185\u5b58\u6620\u5c04\u5173\u7cfb",level:3},{value:"3.4.1 MappedFileQueue\u6620\u5c04\u6587\u4ef6\u961f\u5217",id:"341-mappedfilequeue\u6620\u5c04\u6587\u4ef6\u961f\u5217",level:4},{value:"3.4.2 MappedFile\u5185\u5b58\u6620\u5c04\u6587\u4ef6",id:"342-mappedfile\u5185\u5b58\u6620\u5c04\u6587\u4ef6",level:4},{value:"3.4.3 TransientStorePool-\u6682\u5b58\u6c60",id:"343-transientstorepool-\u6682\u5b58\u6c60",level:4},{value:"3.5 RocketMQ\u7684\u5b58\u50a8\u6587\u4ef6",id:"35-rocketmq\u7684\u5b58\u50a8\u6587\u4ef6",level:3},{value:"3.5.1 Commitlog-\u6d88\u606f\u5b58\u50a8\u6587\u4ef6",id:"351-commitlog-\u6d88\u606f\u5b58\u50a8\u6587\u4ef6",level:4},{value:"3.5.2 ConsumeQueue-\u6d88\u8d39\u961f\u5217\u5b58\u50a8\u6587\u4ef6",id:"352-consumequeue-\u6d88\u8d39\u961f\u5217\u5b58\u50a8\u6587\u4ef6",level:4},{value:"3.5.3 Index-\u7d22\u5f15\u6587\u4ef6",id:"353-index-\u7d22\u5f15\u6587\u4ef6",level:4},{value:"3.5.4 checkpoint\u6587\u4ef6",id:"354-checkpoint\u6587\u4ef6",level:4},{value:"3.5.5 epochFileCheckpoint\u6587\u4ef6",id:"355-epochfilecheckpoint\u6587\u4ef6",level:4},{value:"3.5.6 timerwheel\u6587\u4ef6",id:"356-timerwheel\u6587\u4ef6",level:4},{value:"3.5.7 config\u7684\u6587\u4ef6",id:"357-config\u7684\u6587\u4ef6",level:4},{value:"3.6 \u6d88\u606f\u6587\u4ef6\u4e0e\u7d22\u5f15\u6587\u4ef6\u7684\u6062\u590d",id:"36-\u6d88\u606f\u6587\u4ef6\u4e0e\u7d22\u5f15\u6587\u4ef6\u7684\u6062\u590d",level:3},{value:"3.6.1 Broker\u6b63\u5e38\u505c\u6b62\u6587\u4ef6\u6062\u590d",id:"361-broker\u6b63\u5e38\u505c\u6b62\u6587\u4ef6\u6062\u590d",level:4},{value:"3.6.2 Broke\u5f02\u5e38\u505c\u6b62\u6587\u4ef6\u6062\u590d",id:"362-broke\u5f02\u5e38\u505c\u6b62\u6587\u4ef6\u6062\u590d",level:4},{value:"3.7 \u6587\u4ef6\u5237\u76d8\u673a\u5236",id:"37-\u6587\u4ef6\u5237\u76d8\u673a\u5236",level:3},{value:"3.7.1 \u540c\u6b65\u5237\u76d8",id:"371-\u540c\u6b65\u5237\u76d8",level:4},{value:"3.7.2 \u5f02\u6b65\u5237\u76d8",id:"372-\u5f02\u6b65\u5237\u76d8",level:4},{value:"3.8 \u8fc7\u671f\u6587\u4ef6\u7684\u5904\u7406\u673a\u5236",id:"38-\u8fc7\u671f\u6587\u4ef6\u7684\u5904\u7406\u673a\u5236",level:3},{value:"4 RocketMQ\u6d88\u606f\u6d88\u8d39MQConsumer",id:"4-rocketmq\u6d88\u606f\u6d88\u8d39mqconsumer",level:2},{value:"4.1 \u6d88\u606f\u6d88\u8d39\u6982\u8ff0",id:"41-\u6d88\u606f\u6d88\u8d39\u6982\u8ff0",level:3},{value:"4.2 \u6d88\u8d39\u8005\u542f\u52a8\u6d41\u7a0b",id:"42-\u6d88\u8d39\u8005\u542f\u52a8\u6d41\u7a0b",level:3},{value:"4.3 \u6d88\u606f\u62c9\u53d6",id:"43-\u6d88\u606f\u62c9\u53d6",level:3},{value:"4.3.1 PullMessageService\u5b9e\u73b0\u673a\u5236",id:"431-pullmessageservice\u5b9e\u73b0\u673a\u5236",level:4},{value:"4.3.2 ProcessQueue\u5b9e\u73b0\u673a\u5236",id:"432-processqueue\u5b9e\u73b0\u673a\u5236",level:4},{value:"4.3.3 \u6d88\u606f\u62c9\u53d6\u57fa\u672c\u6d41\u7a0b-\u56fe\u6587\u8be6\u89e3",id:"433-\u6d88\u606f\u62c9\u53d6\u57fa\u672c\u6d41\u7a0b-\u56fe\u6587\u8be6\u89e3",level:4},{value:"4.4\u3000\u6d88\u606f\u961f\u5217\u8d1f\u8f7d\u4e0e\u91cd\u65b0\u5206\u5e03\u673a\u5236",id:"44\u6d88\u606f\u961f\u5217\u8d1f\u8f7d\u4e0e\u91cd\u65b0\u5206\u5e03\u673a\u5236",level:3},{value:"4.5 \u6d88\u606f\u6d88\u8d39\u8fc7\u7a0b",id:"45-\u6d88\u606f\u6d88\u8d39\u8fc7\u7a0b",level:3},{value:"4.5.1 \u6d88\u606f\u6d88\u8d39",id:"451-\u6d88\u606f\u6d88\u8d39",level:4},{value:"4.5.2  \u6d88\u606f\u786e\u8ba4(ACK)",id:"452--\u6d88\u606f\u786e\u8ba4ack",level:4},{value:"4.5.3 \u6d88\u8d39\u8fdb\u5ea6\u7ba1\u7406",id:"453-\u6d88\u8d39\u8fdb\u5ea6\u7ba1\u7406",level:4},{value:"4.6 \u5b9a\u65f6\u6d88\u606f\u673a\u5236",id:"46-\u5b9a\u65f6\u6d88\u606f\u673a\u5236",level:3},{value:"4.6.1 \u5b9a\u65f6\u8c03\u5ea6\u903b\u8f91",id:"461-\u5b9a\u65f6\u8c03\u5ea6\u903b\u8f91",level:4},{value:"4.7 \u5ef6\u8fdf\u6d88\u606f\u673a\u5236",id:"47-\u5ef6\u8fdf\u6d88\u606f\u673a\u5236",level:3},{value:"4.8 \u987a\u5e8f\u6d88\u606f",id:"48-\u987a\u5e8f\u6d88\u606f",level:3},{value:"4.8.1\u6d88\u606f\u961f\u5217\u8d1f\u8f7d",id:"481\u6d88\u606f\u961f\u5217\u8d1f\u8f7d",level:4},{value:"4.8.2 \u6d88\u606f\u62c9\u53d6",id:"482-\u6d88\u606f\u62c9\u53d6",level:4},{value:"4.8.3 \u6d88\u606f\u6d88\u8d39",id:"483-\u6d88\u606f\u6d88\u8d39",level:4},{value:"4.8.4 \u6d88\u606f\u961f\u5217\u9501\u5b9e\u73b0",id:"484-\u6d88\u606f\u961f\u5217\u9501\u5b9e\u73b0",level:4},{value:"4.9 \u4e8b\u52a1\u6d88\u606f",id:"49-\u4e8b\u52a1\u6d88\u606f",level:3},{value:"4.9.1 \u4e8b\u52a1\u6d88\u606f\u5b9e\u73b0\u601d\u60f3",id:"491-\u4e8b\u52a1\u6d88\u606f\u5b9e\u73b0\u601d\u60f3",level:4},{value:"4.9.2 \u4e8b\u52a1\u6d88\u606f\u53d1\u9001\u6d41\u7a0b",id:"492-\u4e8b\u52a1\u6d88\u606f\u53d1\u9001\u6d41\u7a0b",level:4},{value:"4.9.3 \u63d0\u4ea4\u6216\u56de\u6eda\u4e8b\u52a1",id:"493-\u63d0\u4ea4\u6216\u56de\u6eda\u4e8b\u52a1",level:4},{value:"4.9.4 \u4e8b\u52a1\u6d88\u606f\u56de\u67e5\u4e8b\u52a1\u72b6\u6001",id:"494-\u4e8b\u52a1\u6d88\u606f\u56de\u67e5\u4e8b\u52a1\u72b6\u6001",level:4},{value:"5 \u6d88\u606f\u8fc7\u6ee4",id:"5-\u6d88\u606f\u8fc7\u6ee4",level:2},{value:"5.1 \u6d88\u606f\u8fc7\u6ee4\u673a\u5236",id:"51-\u6d88\u606f\u8fc7\u6ee4\u673a\u5236",level:3},{value:"5.1.1 TAG\u6a21\u5f0f\u8fc7\u6ee4",id:"511-tag\u6a21\u5f0f\u8fc7\u6ee4",level:4},{value:"5.1.2 SQL\u8868\u8fbe\u6a21\u5f0f\u8fc7\u6ee4",id:"512-sql\u8868\u8fbe\u6a21\u5f0f\u8fc7\u6ee4",level:4},{value:"5.2 \u6d88\u606f\u8fc7\u6ee4FilterServer",id:"52-\u6d88\u606f\u8fc7\u6ee4filterserver",level:3},{value:"5.2.1ClassFilter\u8fd0\u884c\u673a\u5236",id:"521classfilter\u8fd0\u884c\u673a\u5236",level:4},{value:"5.2.2 FilterServer\u6ce8\u518c\u5256\u6790",id:"522-filterserver\u6ce8\u518c\u5256\u6790",level:4},{value:"5.2.3 \u7c7b\u8fc7\u6ee4\u6a21\u5f0f\u8ba2\u9605\u673a\u5236",id:"523-\u7c7b\u8fc7\u6ee4\u6a21\u5f0f\u8ba2\u9605\u673a\u5236",level:4},{value:"5.2.4 \u6d88\u606f\u62c9\u53d6",id:"524-\u6d88\u606f\u62c9\u53d6",level:4},{value:"6. RocketMQ HA\u673a\u5236",id:"6-rocketmq-ha\u673a\u5236",level:3},{value:"6.1 RocketMQ\u4e3b\u4ece\u590d\u5236\u539f\u7406",id:"61-rocketmq\u4e3b\u4ece\u590d\u5236\u539f\u7406",level:3},{value:"6.2 RocketMQ\u4e3b\u4ece\u540c\u6b65(HA)\u673a\u5236",id:"62-rocketmq\u4e3b\u4ece\u540c\u6b65ha\u673a\u5236",level:3},{value:"6.2.1 HAService\u6574\u4f53\u5de5\u4f5c\u673a\u5236",id:"621-haservice\u6574\u4f53\u5de5\u4f5c\u673a\u5236",level:4},{value:"6.2.2AcceptSocketService\u5b9e\u73b0\u539f\u7406",id:"622acceptsocketservice\u5b9e\u73b0\u539f\u7406",level:4},{value:"6.2.3 GroupTransferService\u5b9e\u73b0\u539f\u7406",id:"623-grouptransferservice\u5b9e\u73b0\u539f\u7406",level:4},{value:"6.2.4 HAClient\u5b9e\u73b0\u539f\u7406",id:"624-haclient\u5b9e\u73b0\u539f\u7406",level:4},{value:"6.2.4 HAConnection\u5b9e\u73b0\u539f\u7406",id:"624-haconnection\u5b9e\u73b0\u539f\u7406",level:4},{value:"6.3  RocketMQ\u4e3b\u4ece\u540c\u6b65(AutoSwitchHA)\u81ea\u52a8\u5207\u6362\u673a\u5236",id:"63--rocketmq\u4e3b\u4ece\u540c\u6b65autoswitchha\u81ea\u52a8\u5207\u6362\u673a\u5236",level:3},{value:"6.3.1 AutoSwitchHAService\u6574\u4f53\u5de5\u4f5c\u673a\u5236",id:"631-autoswitchhaservice\u6574\u4f53\u5de5\u4f5c\u673a\u5236",level:4},{value:"6.3.2 AutoSwitchHAConnection\u5b9e\u73b0\u539f\u7406",id:"632-autoswitchhaconnection\u5b9e\u73b0\u539f\u7406",level:4},{value:"6.3.2 AutoSwitchHAClient\u5b9e\u73b0\u539f\u7406",id:"632-autoswitchhaclient\u5b9e\u73b0\u539f\u7406",level:4},{value:"7.1 \u8fd0\u7ef4\u547d\u4ee4",id:"71-\u8fd0\u7ef4\u547d\u4ee4",level:3},{value:"7.2 RocketMQ Console",id:"72-rocketmq-console",level:3}];function s(e){const l={h1:"h1",h2:"h2",h3:"h3",h4:"h4",...(0,n.a)(),...e.components},{Head:i}=l;return i||function(e,l){throw new Error("Expected "+(l?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(i,{children:[(0,r.jsx)("title",{children:"RocketMQ5.0"}),(0,r.jsx)("meta",{name:"description",content:"Ionic Framework is an open-source UI toolkit to create your own mobile apps using web technologies with integrations for popular frameworks."}),(0,r.jsx)("link",{rel:"canonical",href:"https://ionicframework.com/docs"}),(0,r.jsx)("link",{rel:"alternate",href:"https://ionicframework.com/docs",hreflang:"x-default"}),(0,r.jsx)("link",{rel:"alternate",href:"https://ionicframework.com/docs",hreflang:"en"}),(0,r.jsx)("meta",{property:"og:url",content:"https://ionicframework.com/docs"})]}),"\n",(0,r.jsx)(l.h2,{id:"1-rocketmq\u8def\u7531\u4e2d\u5fc3nameserver",children:"1. RocketMQ\u8def\u7531\u4e2d\u5fc3NameServer"}),"\n",(0,r.jsx)(l.h3,{id:"11-nameserver\u67b6\u6784\u8bbe\u8ba1",children:"1.1 NameServer\u67b6\u6784\u8bbe\u8ba1"}),"\n",(0,r.jsx)(l.h3,{id:"12-nameserver\u542f\u52a8\u6d41\u7a0b",children:"1.2 NameServer\u542f\u52a8\u6d41\u7a0b"}),"\n",(0,r.jsx)(l.h3,{id:"13-nameserver\u8def\u7531\u6ce8\u518c\u6545\u969c\u5254\u9664",children:"1.3 NameServer\u8def\u7531\u6ce8\u518c\u3001\u6545\u969c\u5254\u9664"}),"\n",(0,r.jsx)(l.h4,{id:"131-\u8def\u7531\u5143\u4fe1\u606f",children:"1.3.1 \u8def\u7531\u5143\u4fe1\u606f"}),"\n",(0,r.jsx)(l.h4,{id:"132-\u8def\u7531\u6ce8\u518c",children:"1.3.2 \u8def\u7531\u6ce8\u518c"}),"\n",(0,r.jsx)(l.h4,{id:"133-\u8def\u7531\u5220\u9664",children:"1.3.3 \u8def\u7531\u5220\u9664"}),"\n",(0,r.jsx)(l.h4,{id:"134-\u8def\u7531\u53d1\u73b0",children:"1.3.4 \u8def\u7531\u53d1\u73b0"}),"\n",(0,r.jsx)(l.h2,{id:"2-rocketmq\u6d88\u606f\u53d1\u9001mqproducer",children:"2. RocketMQ\u6d88\u606f\u53d1\u9001MQProducer"}),"\n",(0,r.jsx)(l.h3,{id:"21-\u804a\u804arocketmq\u6d88\u606f\u53d1\u9001",children:"2.1 \u804a\u804aRocketMQ\u6d88\u606f\u53d1\u9001"}),"\n",(0,r.jsx)(l.h3,{id:"22-\u521d\u6b65\u4e86\u89e3rocketmq\u6d88\u606f",children:"2.2 \u521d\u6b65\u4e86\u89e3RocketMQ\u6d88\u606f"}),"\n",(0,r.jsx)(l.h3,{id:"23-\u751f\u4ea7\u8005\u542f\u52a8\u8fc7\u7a0b",children:"2.3 \u751f\u4ea7\u8005\u542f\u52a8\u8fc7\u7a0b"}),"\n",(0,r.jsx)(l.h4,{id:"231-\u4e86\u89e3defaultmqproducer\u4e0etransactionmqproducer\u6d88\u606f\u53d1\u9001",children:"2.3.1 \u4e86\u89e3DefaultMQProducer\u4e0eTransactionMQProducer\u6d88\u606f\u53d1\u9001"}),"\n",(0,r.jsx)(l.h4,{id:"232-\u751f\u4ea7\u8005\u7684\u542f\u52a8\u6d41\u7a0b\u5206\u6790",children:"2.3.2 \u751f\u4ea7\u8005\u7684\u542f\u52a8\u6d41\u7a0b\u5206\u6790"}),"\n",(0,r.jsx)(l.h3,{id:"24-\u6d88\u606f\u53d1\u9001\u7684\u6d41\u7a0b\u5206\u6790\u5355\u6761\u6d88\u606f",children:"2.4 \u6d88\u606f\u53d1\u9001\u7684\u6d41\u7a0b\u5206\u6790(\u5355\u6761\u6d88\u606f)"}),"\n",(0,r.jsx)(l.h4,{id:"241-\u6d88\u606f\u957f\u5ea6\u9a8c\u8bc1",children:"2.4.1 \u6d88\u606f\u957f\u5ea6\u9a8c\u8bc1"}),"\n",(0,r.jsx)(l.h4,{id:"242-\u67e5\u627e\u4e3b\u9898\u548c\u8def\u7531\u4fe1\u606f",children:"2.4.2 \u67e5\u627e\u4e3b\u9898\u548c\u8def\u7531\u4fe1\u606f"}),"\n",(0,r.jsx)(l.h4,{id:"243-\u9009\u62e9\u6d88\u606f\u961f\u5217-\u961f\u5217\u9009\u62e9\u7b56\u7565",children:"2.4.3 \u9009\u62e9\u6d88\u606f\u961f\u5217-\u961f\u5217\u9009\u62e9\u7b56\u7565"}),"\n",(0,r.jsx)(l.h4,{id:"234-\u53d1\u9001\u6d88\u606f",children:"2.3.4 \u53d1\u9001\u6d88\u606f"}),"\n",(0,r.jsx)(l.h3,{id:"35\u6279\u91cf\u6d88\u606f\u53d1\u9001",children:"3.5\u6279\u91cf\u6d88\u606f\u53d1\u9001"}),"\n",(0,r.jsx)(l.h2,{id:"3-rocketmq\u6570\u636e\u5b58\u50a8broker",children:"3. RocketMQ\u6570\u636e\u5b58\u50a8Broker"}),"\n",(0,r.jsx)(l.h3,{id:"31-\u5b58\u50a8\u6982\u8981\u8bbe\u8ba1",children:"3.1 \u5b58\u50a8\u6982\u8981\u8bbe\u8ba1"}),"\n",(0,r.jsx)(l.h3,{id:"32-\u6d88\u606f\u5b58\u50a8\u548c\u7d22\u5f15\u5b58\u50a8",children:"3.2 \u6d88\u606f\u5b58\u50a8\u548c\u7d22\u5f15\u5b58\u50a8"}),"\n",(0,r.jsx)(l.h3,{id:"33-\u6d88\u606f\u53d1\u9001\u5230broker\u5b58\u50a8\u7684\u6d41\u7a0b",children:"3.3 \u6d88\u606f\u53d1\u9001\u5230Broker\u5b58\u50a8\u7684\u6d41\u7a0b"}),"\n",(0,r.jsx)(l.h3,{id:"34-\u5b58\u50a8\u6587\u4ef6\u7ec4\u7ec7\u548c\u5185\u5b58\u6620\u5c04\u5173\u7cfb",children:"3.4 \u5b58\u50a8\u6587\u4ef6\u7ec4\u7ec7\u548c\u5185\u5b58\u6620\u5c04\u5173\u7cfb"}),"\n",(0,r.jsx)(l.h4,{id:"341-mappedfilequeue\u6620\u5c04\u6587\u4ef6\u961f\u5217",children:"3.4.1 MappedFileQueue\u6620\u5c04\u6587\u4ef6\u961f\u5217"}),"\n",(0,r.jsx)(l.h4,{id:"342-mappedfile\u5185\u5b58\u6620\u5c04\u6587\u4ef6",children:"3.4.2 MappedFile\u5185\u5b58\u6620\u5c04\u6587\u4ef6"}),"\n",(0,r.jsx)(l.h4,{id:"343-transientstorepool-\u6682\u5b58\u6c60",children:"3.4.3 TransientStorePool-\u6682\u5b58\u6c60"}),"\n",(0,r.jsx)(l.h3,{id:"35-rocketmq\u7684\u5b58\u50a8\u6587\u4ef6",children:"3.5 RocketMQ\u7684\u5b58\u50a8\u6587\u4ef6"}),"\n",(0,r.jsx)(l.h4,{id:"351-commitlog-\u6d88\u606f\u5b58\u50a8\u6587\u4ef6",children:"3.5.1 Commitlog-\u6d88\u606f\u5b58\u50a8\u6587\u4ef6"}),"\n",(0,r.jsx)(l.h4,{id:"352-consumequeue-\u6d88\u8d39\u961f\u5217\u5b58\u50a8\u6587\u4ef6",children:"3.5.2 ConsumeQueue-\u6d88\u8d39\u961f\u5217\u5b58\u50a8\u6587\u4ef6"}),"\n",(0,r.jsx)(l.h4,{id:"353-index-\u7d22\u5f15\u6587\u4ef6",children:"3.5.3 Index-\u7d22\u5f15\u6587\u4ef6"}),"\n",(0,r.jsx)(l.h4,{id:"354-checkpoint\u6587\u4ef6",children:"3.5.4 checkpoint\u6587\u4ef6"}),"\n",(0,r.jsx)(l.h4,{id:"355-epochfilecheckpoint\u6587\u4ef6",children:"3.5.5 epochFileCheckpoint\u6587\u4ef6"}),"\n",(0,r.jsx)(l.h4,{id:"356-timerwheel\u6587\u4ef6",children:"3.5.6 timerwheel\u6587\u4ef6"}),"\n",(0,r.jsx)(l.h4,{id:"357-config\u7684\u6587\u4ef6",children:"3.5.7 config\u7684\u6587\u4ef6"}),"\n",(0,r.jsx)(l.h3,{id:"36-\u6d88\u606f\u6587\u4ef6\u4e0e\u7d22\u5f15\u6587\u4ef6\u7684\u6062\u590d",children:"3.6 \u6d88\u606f\u6587\u4ef6\u4e0e\u7d22\u5f15\u6587\u4ef6\u7684\u6062\u590d"}),"\n",(0,r.jsx)(l.h4,{id:"361-broker\u6b63\u5e38\u505c\u6b62\u6587\u4ef6\u6062\u590d",children:"3.6.1 Broker\u6b63\u5e38\u505c\u6b62\u6587\u4ef6\u6062\u590d"}),"\n",(0,r.jsx)(l.h4,{id:"362-broke\u5f02\u5e38\u505c\u6b62\u6587\u4ef6\u6062\u590d",children:"3.6.2 Broke\u5f02\u5e38\u505c\u6b62\u6587\u4ef6\u6062\u590d"}),"\n",(0,r.jsx)(l.h3,{id:"37-\u6587\u4ef6\u5237\u76d8\u673a\u5236",children:"3.7 \u6587\u4ef6\u5237\u76d8\u673a\u5236"}),"\n",(0,r.jsx)(l.h4,{id:"371-\u540c\u6b65\u5237\u76d8",children:"3.7.1 \u540c\u6b65\u5237\u76d8"}),"\n",(0,r.jsx)(l.h4,{id:"372-\u5f02\u6b65\u5237\u76d8",children:"3.7.2 \u5f02\u6b65\u5237\u76d8"}),"\n",(0,r.jsx)(l.h3,{id:"38-\u8fc7\u671f\u6587\u4ef6\u7684\u5904\u7406\u673a\u5236",children:"3.8 \u8fc7\u671f\u6587\u4ef6\u7684\u5904\u7406\u673a\u5236"}),"\n",(0,r.jsx)(l.h2,{id:"4-rocketmq\u6d88\u606f\u6d88\u8d39mqconsumer",children:"4 RocketMQ\u6d88\u606f\u6d88\u8d39MQConsumer"}),"\n",(0,r.jsx)(l.h3,{id:"41-\u6d88\u606f\u6d88\u8d39\u6982\u8ff0",children:"4.1 \u6d88\u606f\u6d88\u8d39\u6982\u8ff0"}),"\n",(0,r.jsx)(l.h3,{id:"42-\u6d88\u8d39\u8005\u542f\u52a8\u6d41\u7a0b",children:"4.2 \u6d88\u8d39\u8005\u542f\u52a8\u6d41\u7a0b"}),"\n",(0,r.jsx)(l.h3,{id:"43-\u6d88\u606f\u62c9\u53d6",children:"4.3 \u6d88\u606f\u62c9\u53d6"}),"\n",(0,r.jsx)(l.h4,{id:"431-pullmessageservice\u5b9e\u73b0\u673a\u5236",children:"4.3.1 PullMessageService\u5b9e\u73b0\u673a\u5236"}),"\n",(0,r.jsx)(l.h4,{id:"432-processqueue\u5b9e\u73b0\u673a\u5236",children:"4.3.2 ProcessQueue\u5b9e\u73b0\u673a\u5236"}),"\n",(0,r.jsx)(l.h4,{id:"433-\u6d88\u606f\u62c9\u53d6\u57fa\u672c\u6d41\u7a0b-\u56fe\u6587\u8be6\u89e3",children:"4.3.3 \u6d88\u606f\u62c9\u53d6\u57fa\u672c\u6d41\u7a0b-\u56fe\u6587\u8be6\u89e3"}),"\n",(0,r.jsx)(l.h3,{id:"44\u6d88\u606f\u961f\u5217\u8d1f\u8f7d\u4e0e\u91cd\u65b0\u5206\u5e03\u673a\u5236",children:"4.4\u3000\u6d88\u606f\u961f\u5217\u8d1f\u8f7d\u4e0e\u91cd\u65b0\u5206\u5e03\u673a\u5236"}),"\n",(0,r.jsx)(l.h3,{id:"45-\u6d88\u606f\u6d88\u8d39\u8fc7\u7a0b",children:"4.5 \u6d88\u606f\u6d88\u8d39\u8fc7\u7a0b"}),"\n",(0,r.jsx)(l.h4,{id:"451-\u6d88\u606f\u6d88\u8d39",children:"4.5.1 \u6d88\u606f\u6d88\u8d39"}),"\n",(0,r.jsx)(l.h4,{id:"452--\u6d88\u606f\u786e\u8ba4ack",children:"4.5.2  \u6d88\u606f\u786e\u8ba4(ACK)"}),"\n",(0,r.jsx)(l.h4,{id:"453-\u6d88\u8d39\u8fdb\u5ea6\u7ba1\u7406",children:"4.5.3 \u6d88\u8d39\u8fdb\u5ea6\u7ba1\u7406"}),"\n",(0,r.jsx)(l.h3,{id:"46-\u5b9a\u65f6\u6d88\u606f\u673a\u5236",children:"4.6 \u5b9a\u65f6\u6d88\u606f\u673a\u5236"}),"\n",(0,r.jsx)(l.h4,{id:"461-\u5b9a\u65f6\u8c03\u5ea6\u903b\u8f91",children:"4.6.1 \u5b9a\u65f6\u8c03\u5ea6\u903b\u8f91"}),"\n",(0,r.jsx)(l.h3,{id:"47-\u5ef6\u8fdf\u6d88\u606f\u673a\u5236",children:"4.7 \u5ef6\u8fdf\u6d88\u606f\u673a\u5236"}),"\n",(0,r.jsx)(l.h3,{id:"48-\u987a\u5e8f\u6d88\u606f",children:"4.8 \u987a\u5e8f\u6d88\u606f"}),"\n",(0,r.jsx)(l.h4,{id:"481\u6d88\u606f\u961f\u5217\u8d1f\u8f7d",children:"4.8.1\u6d88\u606f\u961f\u5217\u8d1f\u8f7d"}),"\n",(0,r.jsx)(l.h4,{id:"482-\u6d88\u606f\u62c9\u53d6",children:"4.8.2 \u6d88\u606f\u62c9\u53d6"}),"\n",(0,r.jsx)(l.h4,{id:"483-\u6d88\u606f\u6d88\u8d39",children:"4.8.3 \u6d88\u606f\u6d88\u8d39"}),"\n",(0,r.jsx)(l.h4,{id:"484-\u6d88\u606f\u961f\u5217\u9501\u5b9e\u73b0",children:"4.8.4 \u6d88\u606f\u961f\u5217\u9501\u5b9e\u73b0"}),"\n",(0,r.jsx)(l.h3,{id:"49-\u4e8b\u52a1\u6d88\u606f",children:"4.9 \u4e8b\u52a1\u6d88\u606f"}),"\n",(0,r.jsx)(l.h4,{id:"491-\u4e8b\u52a1\u6d88\u606f\u5b9e\u73b0\u601d\u60f3",children:"4.9.1 \u4e8b\u52a1\u6d88\u606f\u5b9e\u73b0\u601d\u60f3"}),"\n",(0,r.jsx)(l.h4,{id:"492-\u4e8b\u52a1\u6d88\u606f\u53d1\u9001\u6d41\u7a0b",children:"4.9.2 \u4e8b\u52a1\u6d88\u606f\u53d1\u9001\u6d41\u7a0b"}),"\n",(0,r.jsx)(l.h4,{id:"493-\u63d0\u4ea4\u6216\u56de\u6eda\u4e8b\u52a1",children:"4.9.3 \u63d0\u4ea4\u6216\u56de\u6eda\u4e8b\u52a1"}),"\n",(0,r.jsx)(l.h4,{id:"494-\u4e8b\u52a1\u6d88\u606f\u56de\u67e5\u4e8b\u52a1\u72b6\u6001",children:"4.9.4 \u4e8b\u52a1\u6d88\u606f\u56de\u67e5\u4e8b\u52a1\u72b6\u6001"}),"\n",(0,r.jsx)(l.h2,{id:"5-\u6d88\u606f\u8fc7\u6ee4",children:"5 \u6d88\u606f\u8fc7\u6ee4"}),"\n",(0,r.jsx)(l.h3,{id:"51-\u6d88\u606f\u8fc7\u6ee4\u673a\u5236",children:"5.1 \u6d88\u606f\u8fc7\u6ee4\u673a\u5236"}),"\n",(0,r.jsx)(l.h4,{id:"511-tag\u6a21\u5f0f\u8fc7\u6ee4",children:"5.1.1 TAG\u6a21\u5f0f\u8fc7\u6ee4"}),"\n",(0,r.jsx)(l.h4,{id:"512-sql\u8868\u8fbe\u6a21\u5f0f\u8fc7\u6ee4",children:"5.1.2 SQL\u8868\u8fbe\u6a21\u5f0f\u8fc7\u6ee4"}),"\n",(0,r.jsx)(l.h3,{id:"52-\u6d88\u606f\u8fc7\u6ee4filterserver",children:"5.2 \u6d88\u606f\u8fc7\u6ee4FilterServer"}),"\n",(0,r.jsx)(l.h4,{id:"521classfilter\u8fd0\u884c\u673a\u5236",children:"5.2.1ClassFilter\u8fd0\u884c\u673a\u5236"}),"\n",(0,r.jsx)(l.h4,{id:"522-filterserver\u6ce8\u518c\u5256\u6790",children:"5.2.2 FilterServer\u6ce8\u518c\u5256\u6790"}),"\n",(0,r.jsx)(l.h4,{id:"523-\u7c7b\u8fc7\u6ee4\u6a21\u5f0f\u8ba2\u9605\u673a\u5236",children:"5.2.3 \u7c7b\u8fc7\u6ee4\u6a21\u5f0f\u8ba2\u9605\u673a\u5236"}),"\n",(0,r.jsx)(l.h4,{id:"524-\u6d88\u606f\u62c9\u53d6",children:"5.2.4 \u6d88\u606f\u62c9\u53d6"}),"\n",(0,r.jsx)(l.h3,{id:"6-rocketmq-ha\u673a\u5236",children:"6. RocketMQ HA\u673a\u5236"}),"\n",(0,r.jsx)(l.h3,{id:"61-rocketmq\u4e3b\u4ece\u590d\u5236\u539f\u7406",children:"6.1 RocketMQ\u4e3b\u4ece\u590d\u5236\u539f\u7406"}),"\n",(0,r.jsx)(l.h3,{id:"62-rocketmq\u4e3b\u4ece\u540c\u6b65ha\u673a\u5236",children:"6.2 RocketMQ\u4e3b\u4ece\u540c\u6b65(HA)\u673a\u5236"}),"\n",(0,r.jsx)(l.h4,{id:"621-haservice\u6574\u4f53\u5de5\u4f5c\u673a\u5236",children:"6.2.1 HAService\u6574\u4f53\u5de5\u4f5c\u673a\u5236"}),"\n",(0,r.jsx)(l.h4,{id:"622acceptsocketservice\u5b9e\u73b0\u539f\u7406",children:"6.2.2AcceptSocketService\u5b9e\u73b0\u539f\u7406"}),"\n",(0,r.jsx)(l.h4,{id:"623-grouptransferservice\u5b9e\u73b0\u539f\u7406",children:"6.2.3 GroupTransferService\u5b9e\u73b0\u539f\u7406"}),"\n",(0,r.jsx)(l.h4,{id:"624-haclient\u5b9e\u73b0\u539f\u7406",children:"6.2.4 HAClient\u5b9e\u73b0\u539f\u7406"}),"\n",(0,r.jsx)(l.h4,{id:"624-haconnection\u5b9e\u73b0\u539f\u7406",children:"6.2.4 HAConnection\u5b9e\u73b0\u539f\u7406"}),"\n",(0,r.jsx)(l.h3,{id:"63--rocketmq\u4e3b\u4ece\u540c\u6b65autoswitchha\u81ea\u52a8\u5207\u6362\u673a\u5236",children:"6.3  RocketMQ\u4e3b\u4ece\u540c\u6b65(AutoSwitchHA)\u81ea\u52a8\u5207\u6362\u673a\u5236"}),"\n",(0,r.jsx)(l.h4,{id:"631-autoswitchhaservice\u6574\u4f53\u5de5\u4f5c\u673a\u5236",children:"6.3.1 AutoSwitchHAService\u6574\u4f53\u5de5\u4f5c\u673a\u5236"}),"\n",(0,r.jsx)(l.h4,{id:"632-autoswitchhaconnection\u5b9e\u73b0\u539f\u7406",children:"6.3.2 AutoSwitchHAConnection\u5b9e\u73b0\u539f\u7406"}),"\n",(0,r.jsx)(l.h4,{id:"632-autoswitchhaclient\u5b9e\u73b0\u539f\u7406",children:"6.3.2 AutoSwitchHAClient\u5b9e\u73b0\u539f\u7406"}),"\n",(0,r.jsx)(l.h1,{id:"7-\u5176\u4ed6",children:"7 \u5176\u4ed6"}),"\n",(0,r.jsx)(l.h3,{id:"71-\u8fd0\u7ef4\u547d\u4ee4",children:"7.1 \u8fd0\u7ef4\u547d\u4ee4"}),"\n",(0,r.jsx)(l.h3,{id:"72-rocketmq-console",children:"7.2 RocketMQ Console"})]})}function a(e={}){const{wrapper:l}={...(0,n.a)(),...e.components};return l?(0,r.jsx)(l,{...e,children:(0,r.jsx)(s,{...e})}):s(e)}},1151:(e,l,i)=>{i.d(l,{Z:()=>t,a:()=>c});var r=i(7294);const n={},d=r.createContext(n);function c(e){const l=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(l):{...l,...e}}),[l,e])}function t(e){let l;return l=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),r.createElement(d.Provider,{value:l},e.children)}}}]);