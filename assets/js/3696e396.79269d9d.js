"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[7403],{5550:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>t,metadata:()=>s,toc:()=>i});var l=n(5893),o=n(1151);const t={title:"RocketMQ5.0 Controller DLedger\u6a21\u5f0f",linkTitle:"RocketMQ5.0 Controller DLedger\u6a21\u5f0f",date:new Date("2022-10-07T00:00:00.000Z"),weight:202210071404},c=void 0,s={id:"rocketmq/rocketmq5/client/dledger-controller",title:"RocketMQ5.0 Controller DLedger\u6a21\u5f0f",description:"RocketMQ5.0\u5df2\u7ecf\u53d1\u5e03\uff0c\u5728RocketMQ5.0\u65b0\u589e\u4e86\u4e00\u4e2a\u65b0\u7684\u9ad8\u53ef\u7528\u6a21\u5f0f DLedger Controller \u6a21\u5f0f\u3002\u4e0b\u9762\u5c31\u6765\u804a\u4e00\u4e0bRocketMQ5.0\u65b0\u589e\u7684\u8fd9\u4e2a\u6a21\u5f0f\u3002",source:"@site/docs/rocketmq/rocketmq5/03-client/dledger-controller.md",sourceDirName:"rocketmq/rocketmq5/03-client",slug:"/rocketmq/rocketmq5/client/dledger-controller",permalink:"/docs/rocketmq/rocketmq5/client/dledger-controller",draft:!1,unlisted:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/rocketmq/rocketmq5/03-client/dledger-controller.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1706451902,formattedLastUpdatedAt:"Jan 28, 2024",frontMatter:{title:"RocketMQ5.0 Controller DLedger\u6a21\u5f0f",linkTitle:"RocketMQ5.0 Controller DLedger\u6a21\u5f0f",date:"2022-10-07T00:00:00.000Z",weight:202210071404},sidebar:"rocketmq5",previous:{title:"MQPushConsumer\u6e90\u7801\u5206\u6790-\u6d88\u606f\u62c9\u53d6",permalink:"/docs/rocketmq/rocketmq5/client/consumer/MQPushConsumer/MQPushCousumer-pullmessage"},next:{title:"\u751f\u4ea7\u8005",permalink:"/docs/rocketmq/rocketmq5/client/producer/"}},d={},i=[{value:"1. \u80cc\u666f",id:"1-\u80cc\u666f",level:3},{value:"2. DLedger Controller\u6a21\u5f0f\u67b6\u6784",id:"2-dledger-controller\u6a21\u5f0f\u67b6\u6784",level:3},{value:"3. DLedger Controller\u90e8\u7f72",id:"3-dledger-controller\u90e8\u7f72",level:3},{value:"3.1 DLedger Controller\u5185\u5d4cNameServer\u90e8\u7f72",id:"31-dledger-controller\u5185\u5d4cnameserver\u90e8\u7f72",level:4},{value:"3.2 DLedger Controller\u72ec\u7acb\u90e8\u7f72",id:"32-dledger-controller\u72ec\u7acb\u90e8\u7f72",level:4},{value:"3.3 \u5feb\u901f\u542f\u52a8DLedger Controller",id:"33-\u5feb\u901f\u542f\u52a8dledger-controller",level:4},{value:"4. Broker Controller DLedger\u6a21\u5f0f",id:"4-broker-controller-dledger\u6a21\u5f0f",level:3},{value:"5. \u603b\u7ed3",id:"5-\u603b\u7ed3",level:3}];function a(e){const r={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(r.p,{children:["RocketMQ5.0\u5df2\u7ecf\u53d1\u5e03\uff0c\u5728RocketMQ5.0\u65b0\u589e\u4e86\u4e00\u4e2a\u65b0\u7684\u9ad8\u53ef\u7528\u6a21\u5f0f ",(0,l.jsx)(r.strong,{children:"DLedger Controller"})," \u6a21\u5f0f\u3002\u4e0b\u9762\u5c31\u6765\u804a\u4e00\u4e0bRocketMQ5.0\u65b0\u589e\u7684\u8fd9\u4e2a\u6a21\u5f0f\u3002"]}),"\n",(0,l.jsx)(r.h3,{id:"1-\u80cc\u666f",children:"1. \u80cc\u666f"}),"\n",(0,l.jsxs)(r.p,{children:["\u9996\u5148\u6211\u4eec\u9700\u8981\u77e5\u9053",(0,l.jsx)(r.strong,{children:"DLedger Controller"})," \u662f\u4e3a\u4e86\u89e3\u51b3\u4ec0\u4e48\u95ee\u9898\uff0c\u5148\u6765\u770b\u4e00\u4e0b\u4e4b\u524d\u7248\u672c\u7684DLedger\u6a21\u5f0f\u67b6\u6784\u56fe\uff1a"]}),"\n",(0,l.jsx)(r.p,{children:(0,l.jsx)(r.img,{src:"https://raw.githubusercontent.com/mxsm/picture/main/rocketmq5/quickstart/raft-modle.png",alt:"raft-modle"})}),"\n",(0,l.jsx)(r.p,{children:"\u5728 DLedger \u6a21\u5f0f\u4e0b\uff0c\u5229\u7528 Raft Commitlog \u4ee3\u66ff\u4e86\u539f\u6765\u7684 Commitlog \u4e86\uff0c\u4f7f\u5f97 Commmitlog \u5177\u5907\u4e86\u9009\u4e3e\u7684\u80fd\u529b\uff0c\u5f53 Master Broker \u6545\u969c\u540e\uff0c\u901a\u8fc7\u5185\u90e8\u534f\u5546\uff0c\u4ece\u5176\u4ed6\u7684 Slave Broker \u4e2d\u9009\u51fa\u65b0\u7684 Master\uff0c\u5b8c\u6210\u4e3b\u5907\u5207\u6362\uff0c\u540c\u65f6 Raft \u7684\u7b97\u6cd5\u4e5f\u4fdd\u8bc1\u4e86 Commitlog \u7684\u4e00\u81f4\u6027\u3002\u4f46\u662f\u5b58\u5728\u4e00\u4e9b\u7f3a\u70b9\uff1a"}),"\n",(0,l.jsxs)(r.ul,{children:["\n",(0,l.jsx)(r.li,{children:"\u60f3\u8981\u5177\u5907\u9009\u4e3e\u5207\u6362\u7684\u80fd\u529b\uff0c\u5355\u7ec4 Broker \u5185\u7684\u526f\u672c\u6570\u5fc5\u987b 3 \u526f\u672c\u53ca\u4ee5\u4e0a(Raft\u534f\u8bae\u51b3\u5b9a)"}),"\n",(0,l.jsx)(r.li,{children:"\u526f\u672c ACK \u9700\u8981\u4e25\u683c\u9075\u5faa Raft \u534f\u8bae\u591a\u6570\u6d3e\u7684\u9650\u5236\uff0c3 \u526f\u672c\u9700\u8981 2 \u526f\u672c ACK \u540e\u624d\u80fd\u8fd4\u56de\uff0c5 \u526f\u672c\u9700\u8981 3 \u526f\u672c ACK \u540e\u624d\u80fd\u8fd4\u56de\uff0c\u526f\u672c\u8d8a\u591a\u53ef\u80fd\u8017\u65f6\u4e5f\u53ef\u80fd\u8d8a\u957f\u3002(\u8fd9\u4e2a\u4e5f\u662f\u6700\u91cd\u8981\u7684\u4e00\u70b9)"}),"\n",(0,l.jsx)(r.li,{children:"DLedger \u6a21\u5f0f\u4e0b\uff0c\u7531\u4e8e\u5b58\u50a8\u5e93\u4f7f\u7528\u4e86 OpenMessaging DLedger \u5b58\u50a8\uff0c\u56e0\u6b64\u65e0\u6cd5\u590d\u7528 RocketMQ \u539f\u751f\u7684\u5b58\u50a8\u548c\u590d\u5236\u7684\u80fd\u529b\uff08\u6bd4\u5982 transientStorePool \u548c\u96f6\u62f7\u8d1d\u80fd\u529b\uff09\uff0c\u4e14\u5bf9\u7ef4\u62a4\u9020\u6210\u4e86\u56f0\u96be\u3002"}),"\n"]}),"\n",(0,l.jsx)(r.p,{children:"\u5728RocketMQ5.0\u7248\u672c\u65b0\u589e\u4e86DLedger Controller\u6a21\u5f0f\u6765\u89e3\u51b3\u4e0a\u9762\u5bf9\u7684\u75db\u70b9\u3002"}),"\n",(0,l.jsx)(r.h3,{id:"2-dledger-controller\u6a21\u5f0f\u67b6\u6784",children:"2. DLedger Controller\u6a21\u5f0f\u67b6\u6784"}),"\n",(0,l.jsxs)(r.p,{children:["DLedger Controller\u6a21\u5f0f\u7684\u6838\u5fc3\u601d\u60f3\uff1a\u5c06\u5176\u4f5c\u4e3a\u4e00\u4e2a\u9009\u4e3b\u7ec4\u4ef6\uff0c\u5e76\u4e14\u662f\u4e00\u4e2a ",(0,l.jsx)(r.strong,{children:"\u53ef\u9009\u62e9\u3001\u677e\u8026\u5408"})," \u7684\u7ec4\u4ef6\u3002\u5f53\u90e8\u7f72 DLedger Controller \u7ec4\u4ef6\u540e\uff0c\u539f\u672c Master-Slave \u90e8\u7f72\u6a21\u5f0f\u4e0b Broker \u7ec4\u5c31\u62e5\u6709 Failover \u80fd\u529b\u3002"]}),"\n",(0,l.jsx)(r.p,{children:"DLedger Controller\u7684\u90e8\u7f72\u6709\u4e24\u79cd\u6a21\u5f0f\uff1a"}),"\n",(0,l.jsxs)(r.ul,{children:["\n",(0,l.jsxs)(r.li,{children:["\n",(0,l.jsx)(r.p,{children:(0,l.jsx)(r.strong,{children:"\u5185\u5d4cNameSrv"})}),"\n"]}),"\n",(0,l.jsxs)(r.li,{children:["\n",(0,l.jsx)(r.p,{children:(0,l.jsx)(r.strong,{children:"\u5355\u72ec\u90e8\u7f72DLedger Controller"})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(r.h3,{id:"3-dledger-controller\u90e8\u7f72",children:"3. DLedger Controller\u90e8\u7f72"}),"\n",(0,l.jsxs)(r.p,{children:[(0,l.jsx)(r.code,{children:"DLedger Controller"})," \u6709\u4e24\u79cd\u6a21\u5f0f\uff0c\u5206\u522b\u770b\u4e00\u4e0b\u8fd9\u4e24\u79cd\u6a21\u5f0f\u7684\u90e8\u7f72\u3002"]}),"\n",(0,l.jsx)(r.h4,{id:"31-dledger-controller\u5185\u5d4cnameserver\u90e8\u7f72",children:"3.1 DLedger Controller\u5185\u5d4cNameServer\u90e8\u7f72"}),"\n",(0,l.jsxs)(r.p,{children:[(0,l.jsx)(r.code,{children:"DLedger Controller"})," \u4ee5\u63d2\u4ef6\u7684\u6a21\u5f0f\u5185\u5d4c\u5230NameServer\u8fdb\u884c\u90e8\u7f72\u3002\u90e8\u7f72\u7684\u793a\u610f\u56fe\u5982\u4e0b\uff1a"]}),"\n",(0,l.jsx)(r.p,{children:(0,l.jsx)(r.img,{src:"https://raw.githubusercontent.com/mxsm/picture/main/rocketmq5/quickstart/Controller%20as%20plugin.png",alt:"Controller as plugin"})}),"\n",(0,l.jsxs)(r.p,{children:["\u5d4c\u5165 NameServer \u90e8\u7f72\u65f6\u53ea\u9700\u8981\u5728 NameServer \u7684\u914d\u7f6e\u6587\u4ef6\u4e2d\u8bbe\u7f6e ",(0,l.jsx)(r.strong,{children:(0,l.jsx)(r.code,{children:"enableControllerInNamesrv=true"})}),"\uff0c\u5e76\u586b\u4e0a ",(0,l.jsx)(r.strong,{children:(0,l.jsx)(r.code,{children:"DLedger Controller"})})," \u7684\u914d\u7f6e\u5373\u53ef\u3002"]}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-properties",children:"enableControllerInNamesrv = true \ncontrollerDLegerGroup = group1\ncontrollerDLegerPeers = n0-127.0.0.1:9877;n1-127.0.0.1:9878;n2-127.0.0.1:9879\ncontrollerDLegerSelfId = n0\ncontrollerStorePath = /home/admin/DledgerController\nenableElectUncleanMaster = false\nnotifyBrokerRoleChanged = true\n"})}),"\n",(0,l.jsx)(r.p,{children:"\u53c2\u6570\u8bf4\u660e\uff1a"}),"\n",(0,l.jsxs)(r.ul,{children:["\n",(0,l.jsx)(r.li,{children:"enableControllerInNamesrv\uff1aNameserver \u4e2d\u662f\u5426\u5f00\u542f controller\uff0c\u9ed8\u8ba4 false\u3002"}),"\n",(0,l.jsx)(r.li,{children:"controllerDLegerGroup\uff1aDLedger Raft Group \u7684\u540d\u5b57\uff0c\u540c\u4e00\u4e2a DLedger Raft Group \u4fdd\u6301\u4e00\u81f4\u5373\u53ef\u3002"}),"\n",(0,l.jsx)(r.li,{children:"controllerDLegerPeers\uff1aDLedger Group \u5185\u5404\u8282\u70b9\u7684\u7aef\u53e3\u4fe1\u606f\uff0c\u540c\u4e00\u4e2a Group \u5185\u7684\u5404\u4e2a\u8282\u70b9\u914d\u7f6e\u5fc5\u987b\u8981\u4fdd\u8bc1\u4e00\u81f4\u3002"}),"\n",(0,l.jsx)(r.li,{children:"controllerDLegerSelfId\uff1a\u8282\u70b9 id\uff0c\u5fc5\u987b\u5c5e\u4e8e controllerDLegerPeers \u4e2d\u7684\u4e00\u4e2a\uff1b\u540c Group \u5185\u5404\u4e2a\u8282\u70b9\u8981\u552f\u4e00\u3002"}),"\n",(0,l.jsx)(r.li,{children:"controllerStorePath\uff1acontroller \u65e5\u5fd7\u5b58\u50a8\u4f4d\u7f6e\u3002controller \u662f\u6709\u72b6\u6001\u7684\uff0ccontroller \u91cd\u542f\u6216\u5b95\u673a\u9700\u8981\u4f9d\u9760\u65e5\u5fd7\u6765\u6062\u590d\u6570\u636e\uff0c\u8be5\u76ee\u5f55\u975e\u5e38\u91cd\u8981\uff0c\u4e0d\u53ef\u4ee5\u8f7b\u6613\u5220\u9664\u3002"}),"\n",(0,l.jsx)(r.li,{children:"enableElectUncleanMaster\uff1a\u662f\u5426\u53ef\u4ee5\u4ece SyncStateSet \u4ee5\u5916\u9009\u4e3e Master\uff0c\u82e5\u4e3a true\uff0c\u53ef\u80fd\u4f1a\u9009\u53d6\u6570\u636e\u843d\u540e\u7684\u526f\u672c\u4f5c\u4e3a Master \u800c\u4e22\u5931\u6d88\u606f\uff0c\u9ed8\u8ba4\u4e3a false\u3002"}),"\n",(0,l.jsx)(r.li,{children:"notifyBrokerRoleChanged\uff1a\u5f53 Broker \u526f\u672c\u7ec4\u4e0a\u89d2\u8272\u53d1\u751f\u53d8\u5316\u65f6\u662f\u5426\u4e3b\u52a8\u901a\u77e5\uff0c\u9ed8\u8ba4\u4e3a true\u3002"}),"\n"]}),"\n",(0,l.jsx)(r.p,{children:"\u4ee5\u4e0a\u53c2\u6570\u90fd\u662fRocketMQ5.0\u65b0\u589e\u7684\u3002"}),"\n",(0,l.jsxs)(r.blockquote,{children:["\n",(0,l.jsx)(r.p,{children:"Tips: enableControllerInNamesrv=true\u914d\u7f6e\u662f\u5185\u5d4cNameServer\u7684\u5f00\u5173\u3002\u5982\u4e0a\u914d\u7f6e\u9700\u8981\u914d\u7f6e3\u4e2a controllerDLegerSelfId\u9700\u8981\u505a\u76f8\u5e94\u7684\u4fee\u6539n0\u3001n1\u3001n2"}),"\n"]}),"\n",(0,l.jsx)(r.p,{children:"\u4f7f\u7528NameServer\u7684\u542f\u52a8\u65b9\u5f0f\u542f\u52a8\u3002"}),"\n",(0,l.jsx)(r.h4,{id:"32-dledger-controller\u72ec\u7acb\u90e8\u7f72",children:"3.2 DLedger Controller\u72ec\u7acb\u90e8\u7f72"}),"\n",(0,l.jsx)(r.p,{children:"\u72ec\u7acb\u90e8\u7f72\u793a\u610f\u56fe\u5982\u4e0b\uff1a"}),"\n",(0,l.jsx)(r.p,{children:(0,l.jsx)(r.img,{src:"https://raw.githubusercontent.com/mxsm/picture/main/rocketmq5/quickstart/Controller%20deploy%20indepdent.png",alt:"Controller deploy indepdent"})}),"\n",(0,l.jsxs)(r.p,{children:["\u72ec\u7acb\u90e8\u7f72\u7684\u914d\u7f6e\u548c\u5185\u5d4c\u914d\u7f6e\u7684\u533a\u522b\u5c31\u662f\u65e0\u9700\u914d\u7f6e ",(0,l.jsx)(r.strong,{children:(0,l.jsx)(r.code,{children:"enableControllerInNamesrv=true"})})," \u3002 \u5177\u4f53\u914d\u7f6e\u53ef\u4ee5\u53c2\u7167\u5185\u5d4c\u90e8\u7f72\u7684\u914d\u7f6e\u3002\u542f\u52a8\u53ef\u4ee5\u4f7f\u7528\u5982\u4e0b\u547d\u4ee4\uff1a"]}),"\n",(0,l.jsx)(r.p,{children:(0,l.jsx)(r.strong,{children:"\u5355\u4f8b\u6a21\u5f0f\uff1a"})}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-shell",children:"$ sh bin/mqcontroller -c conf/controller/controller-standalone.conf\n"})}),"\n",(0,l.jsx)(r.p,{children:(0,l.jsx)(r.strong,{children:"\u96c6\u7fa4\u6a21\u5f0f\uff1a"})}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-shell",children:"$ nohup bin/mqcontroller -c ./conf/controller/cluster-3n-independent/controller-n0.conf &\n$ nohup bin/mqcontroller -c ./conf/controller/cluster-3n-independent/controller-n1.conf &\n$ nohup bin/mqcontroller -c ./conf/controller/cluster-3n-independent/controller-n2.conf &\n"})}),"\n",(0,l.jsx)(r.h4,{id:"33-\u5feb\u901f\u542f\u52a8dledger-controller",children:"3.3 \u5feb\u901f\u542f\u52a8DLedger Controller"}),"\n",(0,l.jsx)(r.p,{children:"\u5728RocketMQ\u4e2d\u63d0\u4f9b\u4e86\u5feb\u901f\u542f\u52a8\u7684\u811a\u672c"}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-shell",children:"#\u5185\u5d4cNameServer\u5feb\u901f\u542f\u52a8\n$ sh bin/controller/fast-try-namesrv-plugin.sh start\n\n#\u72ec\u7acb\u90e8\u7f72\u5feb\u901f\u542f\u52a8\n$ sh bin/controller/fast-try-independent-deployment.sh start\n"})}),"\n",(0,l.jsx)(r.h3,{id:"4-broker-controller-dledger\u6a21\u5f0f",children:"4. Broker Controller DLedger\u6a21\u5f0f"}),"\n",(0,l.jsx)(r.p,{children:"Broker\u642d\u914dController DLedger\u6a21\u5f0f\u53ef\u4ee5\u5b9e\u73b0\u9ad8\u53ef\u7528\u4ee5\u53ca\u4e3b\u5907\u81ea\u52a8\u5207\u6362\u3002 Broker\u7684\u90e8\u7f72\u548c\u4e4b\u524d\u7684\u7248\u672c\u76f8\u540c\u53ea\u662f\u589e\u52a0\u4e86\u4e00\u4e9b\u4e0eController DLedger\u76f8\u5173\u914d\u7f6e\uff1a"}),"\n",(0,l.jsxs)(r.ul,{children:["\n",(0,l.jsx)(r.li,{children:"enableControllerMode\uff1aBroker controller \u6a21\u5f0f\u7684\u603b\u5f00\u5173\uff0c\u53ea\u6709\u8be5\u503c\u4e3a true\uff0c\u81ea\u52a8\u4e3b\u4ece\u5207\u6362\u6a21\u5f0f\u624d\u4f1a\u6253\u5f00\u3002\u9ed8\u8ba4\u4e3a false\u3002"}),"\n",(0,l.jsxs)(r.li,{children:["controllerAddr\uff1acontroller \u7684\u5730\u5740\uff0c\u591a\u4e2a controller \u4e2d\u95f4\u7528\u5206\u53f7\u9694\u5f00\u3002\u4f8b\u5982",(0,l.jsx)(r.code,{children:"controllerAddr = 127.0.0.1:9877;127.0.0.1:9878;127.0.0.1:9879"})]}),"\n",(0,l.jsx)(r.li,{children:"syncBrokerMetadataPeriod\uff1a\u5411 controller \u540c\u6b65 Broker \u526f\u672c\u4fe1\u606f\u7684\u65f6\u95f4\u95f4\u9694\u3002\u9ed8\u8ba4 5000\uff085s\uff09\u3002"}),"\n",(0,l.jsx)(r.li,{children:"checkSyncStateSetPeriod\uff1a\u68c0\u67e5 SyncStateSet \u7684\u65f6\u95f4\u95f4\u9694\uff0c\u68c0\u67e5 SyncStateSet \u53ef\u80fd\u4f1a shrink SyncState\u3002\u9ed8\u8ba45000\uff085s\uff09\u3002"}),"\n",(0,l.jsx)(r.li,{children:"syncControllerMetadataPeriod\uff1a\u540c\u6b65 controller \u5143\u6570\u636e\u7684\u65f6\u95f4\u95f4\u9694\uff0c\u4e3b\u8981\u662f\u83b7\u53d6 active controller \u7684\u5730\u5740\u3002\u9ed8\u8ba410000\uff0810s\uff09\u3002"}),"\n",(0,l.jsx)(r.li,{children:"haMaxTimeSlaveNotCatchup\uff1a\u8868\u793a Slave \u6ca1\u6709\u8ddf\u4e0a Master \u7684\u6700\u5927\u65f6\u95f4\u95f4\u9694\uff0c\u82e5\u5728 SyncStateSet \u4e2d\u7684 slave \u8d85\u8fc7\u8be5\u65f6\u95f4\u95f4\u9694\u4f1a\u5c06\u5176\u4ece SyncStateSet \u79fb\u9664\u3002\u9ed8\u8ba4\u4e3a 15000\uff0815s\uff09\u3002"}),"\n",(0,l.jsx)(r.li,{children:"storePathEpochFile\uff1a\u5b58\u50a8 epoch \u6587\u4ef6\u7684\u4f4d\u7f6e\u3002epoch \u6587\u4ef6\u975e\u5e38\u91cd\u8981\uff0c\u4e0d\u53ef\u4ee5\u968f\u610f\u5220\u9664\u3002\u9ed8\u8ba4\u5728 store \u76ee\u5f55\u4e0b\u3002"}),"\n",(0,l.jsx)(r.li,{children:"allAckInSyncStateSet\uff1a\u82e5\u8be5\u503c\u4e3a true\uff0c\u5219\u4e00\u6761\u6d88\u606f\u9700\u8981\u590d\u5236\u5230 SyncStateSet \u4e2d\u7684\u6bcf\u4e00\u4e2a\u526f\u672c\u624d\u4f1a\u5411\u5ba2\u6237\u7aef\u8fd4\u56de\u6210\u529f\uff0c\u53ef\u4ee5\u4fdd\u8bc1\u6d88\u606f\u4e0d\u4e22\u5931\u3002\u9ed8\u8ba4\u4e3a false\u3002"}),"\n",(0,l.jsx)(r.li,{children:"syncFromLastFile\uff1a\u82e5 slave \u662f\u7a7a\u76d8\u542f\u52a8\uff0c\u662f\u5426\u4ece\u6700\u540e\u4e00\u4e2a\u6587\u4ef6\u8fdb\u884c\u590d\u5236\u3002\u9ed8\u8ba4\u4e3a false\u3002"}),"\n",(0,l.jsx)(r.li,{children:"asyncLearner\uff1a\u82e5\u8be5\u503c\u4e3a true\uff0c\u5219\u8be5\u526f\u672c\u4e0d\u4f1a\u8fdb\u5165 SyncStateSet\uff0c\u4e5f\u5c31\u662f\u4e0d\u4f1a\u88ab\u9009\u4e3e\u6210 Master\uff0c\u800c\u662f\u4e00\u76f4\u4f5c\u4e3a\u4e00\u4e2a learner \u526f\u672c\u8fdb\u884c\u5f02\u6b65\u590d\u5236\u3002\u9ed8\u8ba4\u4e3afalse\u3002"}),"\n",(0,l.jsx)(r.li,{children:"inSyncReplicas\uff1a\u9700\u4fdd\u6301\u540c\u6b65\u7684\u526f\u672c\u7ec4\u6570\u91cf\uff0c\u9ed8\u8ba4\u4e3a1\uff0callAckInSyncStateSet=true \u65f6\u8be5\u53c2\u6570\u65e0\u6548\u3002"}),"\n",(0,l.jsx)(r.li,{children:"minInSyncReplicas\uff1a\u6700\u5c0f\u9700\u4fdd\u6301\u540c\u6b65\u7684\u526f\u672c\u7ec4\u6570\u91cf\uff0c\u82e5 SyncStateSet \u4e2d\u526f\u672c\u4e2a\u6570\u5c0f\u4e8e minInSyncReplicas \u5219 putMessage \u76f4\u63a5\u8fd4\u56de PutMessageStatus.IN_SYNC_REPLICAS_NOT_ENOUGH\uff0c\u9ed8\u8ba4\u4e3a1\u3002"}),"\n"]}),"\n",(0,l.jsx)(r.admonition,{type:"tip",children:(0,l.jsxs)(r.ul,{children:["\n",(0,l.jsx)(r.li,{children:"Controller DLedger\u6a21\u5f0f\u4e0benableControllerMode\u5fc5\u987b\u4e3atrue,\u9ed8\u8ba4\u4e3afalse"}),"\n",(0,l.jsx)(r.li,{children:"\u5b9e\u73b0\u6d88\u606f\u4e0d\u4e22\u5931allAckInSyncStateSet\u8bbe\u7f6e\u4e3atrue"}),"\n"]})}),"\n",(0,l.jsx)(r.h3,{id:"5-\u603b\u7ed3",children:"5. \u603b\u7ed3"}),"\n",(0,l.jsxs)(r.ul,{children:["\n",(0,l.jsx)(r.li,{children:"\u82e5\u9700\u8981\u4fdd\u8bc1Controller\u5177\u5907\u5bb9\u9519\u80fd\u529b\uff0cController\u90e8\u7f72\u9700\u8981\u4e09\u526f\u672c\u53ca\u4ee5\u4e0a\uff08\u9075\u5faaRaft\u7684\u591a\u6570\u6d3e\u534f\u8bae\uff09"}),"\n",(0,l.jsxs)(r.li,{children:["Controller\u90e8\u7f72\u914d\u7f6e\u6587\u4ef6\u4e2d\u914d\u7f6e\u53c2\u6570",(0,l.jsx)(r.code,{children:"controllerDLegerPeers"})," \u4e2d\u7684IP\u5730\u5740\u914d\u7f6e\u6210\u5176\u4ed6\u8282\u70b9\u80fd\u591f\u8bbf\u95ee\u7684IP,\u5728\u591a\u673a\u5668\u90e8\u7f72\u7684\u65f6\u5019\u5c24\u4e3a\u91cd\u8981\u3002\u4f8b\u5b50\u4ec5\u4f9b\u53c2\u8003\u9700\u8981\u6839\u636e\u5b9e\u9645\u60c5\u51b5\u8fdb\u884c\u4fee\u6539\u8c03\u6574\u3002"]}),"\n",(0,l.jsx)(r.li,{children:"\u8981\u60f3\u5b9e\u73b0\u6d88\u606f\u4e0d\u4e22\u5931\u9700\u8981Broker\u8fdb\u884c\u76f8\u5bf9\u5e94\u7684\u914d\u7f6e\u8fdb\u884c\u914d\u5408\u4f7f\u7528\u3002"}),"\n"]}),"\n",(0,l.jsxs)(r.blockquote,{children:["\n",(0,l.jsxs)(r.p,{children:["\u6211\u662f\u8682\u8681\u80cc\u5927\u8c61\uff0c\u6587\u7ae0\u5bf9\u4f60\u6709\u5e2e\u52a9\u70b9\u8d5e\u5173\u6ce8\u6211\uff0c\u6587\u7ae0\u6709\u4e0d\u6b63\u786e\u7684\u5730\u65b9\u8bf7\u60a8\u65a7\u6b63\u7559\u8a00\u8bc4\u8bba~\u8c22\u8c22! \u5927\u5bb6\u53ef\u4ee5Follow\u6211\u7684",(0,l.jsx)(r.a,{href:"https://github.com/mxsm",children:(0,l.jsx)(r.strong,{children:"GitHub mxsm"})})]}),"\n"]}),"\n",(0,l.jsx)(r.p,{children:"\u53c2\u8003\u8d44\u6599\uff1a"}),"\n",(0,l.jsxs)(r.ul,{children:["\n",(0,l.jsx)(r.li,{children:(0,l.jsx)(r.a,{href:"https://github.com/apache/rocketmq/wiki/RIP-44-Support-DLedger-Controller",children:"https://github.com/apache/rocketmq/wiki/RIP-44-Support-DLedger-Controller"})}),"\n"]})]})}function h(e={}){const{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,l.jsx)(r,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},1151:(e,r,n)=>{n.d(r,{Z:()=>s,a:()=>c});var l=n(7294);const o={},t=l.createContext(o);function c(e){const r=l.useContext(t);return l.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),l.createElement(t.Provider,{value:r},e.children)}}}]);