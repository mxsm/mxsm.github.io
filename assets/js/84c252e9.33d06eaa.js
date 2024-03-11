"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[771],{1100:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>k,frontMatter:()=>n,metadata:()=>i,toc:()=>d});var o=r(4848),c=r(8453);const n={title:"\u804a\u804aRocketMQ5\u6d88\u606f\u53d1\u9001",linkTitle:"\u804a\u804aRocketMQ5\u6d88\u606f\u53d1\u9001",sidebar_position:202301202006,description:"RocketMQ\u6d88\u606f\u7684\u53d1\u9001\u65b9\u5f0f\u548cRocketMQ\u6d88\u606f\u53d1\u9001\u6d88\u606f\u7c7b\u578b"},s=void 0,i={id:"rocketmq/rocketmq5/client/producer/message-send",title:"\u804a\u804aRocketMQ5\u6d88\u606f\u53d1\u9001",description:"RocketMQ\u6d88\u606f\u7684\u53d1\u9001\u65b9\u5f0f\u548cRocketMQ\u6d88\u606f\u53d1\u9001\u6d88\u606f\u7c7b\u578b",source:"@site/docs/rocketmq/rocketmq5/03-client/producer/01-message-send.md",sourceDirName:"rocketmq/rocketmq5/03-client/producer",slug:"/rocketmq/rocketmq5/client/producer/message-send",permalink:"/docs/rocketmq/rocketmq5/client/producer/message-send",draft:!1,unlisted:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/rocketmq/rocketmq5/03-client/producer/01-message-send.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1710172454,formattedLastUpdatedAt:"Mar 11, 2024",sidebarPosition:202301202006,frontMatter:{title:"\u804a\u804aRocketMQ5\u6d88\u606f\u53d1\u9001",linkTitle:"\u804a\u804aRocketMQ5\u6d88\u606f\u53d1\u9001",sidebar_position:202301202006,description:"RocketMQ\u6d88\u606f\u7684\u53d1\u9001\u65b9\u5f0f\u548cRocketMQ\u6d88\u606f\u53d1\u9001\u6d88\u606f\u7c7b\u578b"},sidebar:"rocketmq5",previous:{title:"\u751f\u4ea7\u8005",permalink:"/docs/rocketmq/rocketmq5/client/producer/"},next:{title:"Rocketmq\u6d88\u606f\u7ed3\u6784",permalink:"/docs/rocketmq/rocketmq5/client/producer/rocketmq-message"}},l={},d=[{value:"1. RocketMQ\u6d88\u606f\u53d1\u9001\u6a21\u5f0f",id:"1-rocketmq\u6d88\u606f\u53d1\u9001\u6a21\u5f0f",level:2},{value:"2. RocketMQ\u6d88\u606f\u53d1\u9001\u6d88\u606f\u7c7b\u578b",id:"2-rocketmq\u6d88\u606f\u53d1\u9001\u6d88\u606f\u7c7b\u578b",level:2}];function m(e){const t={h2:"h2",img:"img",li:"li",ol:"ol",p:"p",...(0,c.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"1-rocketmq\u6d88\u606f\u53d1\u9001\u6a21\u5f0f",children:"1. RocketMQ\u6d88\u606f\u53d1\u9001\u6a21\u5f0f"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.img,{src:"https://raw.githubusercontent.com/mxsm/picture/main/rocketmq5/client/producerRocketMQ%E6%B6%88%E6%81%AF%E5%8F%91%E9%80%81%E6%96%B9%E5%BC%8F.png",alt:"RocketMQ\u6d88\u606f\u53d1\u9001\u65b9\u5f0f"}),"\n\u6d88\u606f\u7684\u53d1\u9001\u662f\u7531\u6d88\u606f\u751f\u4ea7\u8005\u53d1\u9001\u7ed9Broker,\u7ecf\u8fc7Broker\u5904\u7406\u540e\u7684\u6d88\u606f\u624d\u80fd\u7ed9\u5230\u6d88\u8d39\u8005\u8fdb\u884c\u6d88\u8d39\u3002\u6d88\u606f\u53d1\u9001\u6709\u4e09\u79cd\u6a21\u5f0f\uff1a"]}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:"\u540c\u6b65\u6d88\u606f\uff1a\u751f\u4ea7\u8005\u5c06\u6d88\u606f\u53d1\u9001\u7ed9RocketMQ Broker\uff0c\u751f\u4ea7\u8005\u6536\u5230Broker\u7684ACK\u540e\u624d\u662f\u6807\u660e\u6d88\u606f\u53d1\u9001\u6210\u529f\u3002"}),"\n",(0,o.jsx)(t.li,{children:"\u5f02\u6b65\u6d88\u606f\uff1a \u751f\u4ea7\u8005\u53d1\u9001\u6d88\u606f\u7ed9Broker\u540e\u4e0d\u4f1a\u4e00\u76f4\u7b49\u5f85Broker\u7684ACK,\u4f46\u662f\u4f1a\u901a\u8fc7\u56de\u8c03\u6765\u5904\u7406\u6d88\u606f\u7684ACK\u3002"}),"\n",(0,o.jsx)(t.li,{children:"\u5355\u5411\u6d88\u606f\uff1a\u751f\u4ea7\u8005\u53ea\u7ba1\u5f80Broker\u53d1\u9001\u6d88\u606f\u5b8c\u5168\u4e0d\u7406\u4f1aBroker\u662f\u5426\u6b63\u5e38\u4fdd\u5b58\u3002"}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"2-rocketmq\u6d88\u606f\u53d1\u9001\u6d88\u606f\u7c7b\u578b",children:"2. RocketMQ\u6d88\u606f\u53d1\u9001\u6d88\u606f\u7c7b\u578b"}),"\n",(0,o.jsx)(t.p,{children:"\u53d1\u9001\u6d88\u606f\u7c7b\u578b:"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:"\u666e\u901a\u6d88\u606f\uff0c\u8fd9\u4e2a\u4e5f\u662f\u5e73\u65f6\u4f7f\u7528\u6700\u591a\u7684\u6d88\u606f\u7c7b\u578b\u3002\u53ea\u662f\u5305\u542b\u4e86\u4e1a\u52a1\u6570\u636e"}),"\n",(0,o.jsx)(t.li,{children:"\u987a\u5e8f\u6d88\u606f\uff0c\u53ef\u4ee5\u6309\u7167\u6d88\u606f\u7684\u53d1\u9001\u987a\u5e8f\u6765\u6d88\u8d39(FIFO)\u3002RocketMQ\u53ef\u4ee5\u4e25\u683c\u7684\u4fdd\u8bc1\u6d88\u606f\u6709\u5e8f\uff0c\u53ef\u4ee5\u5206\u4e3a\u5206\u533a\u6709\u5e8f\u6216\u8005\u5168\u5c40\u6709\u5e8f\u3002"}),"\n",(0,o.jsxs)(t.li,{children:["\u5ef6\u65f6\u6d88\u606f\uff0c\u5ef6\u65f6\u6d88\u606f\u5c31\u662f\u6d88\u606f\u5b9a\u65f6\u5ef6\u540e\uff0c\u5ef6\u65f6\u6d88\u606f\u5206\u4e3a\u4e24\u79cd:","\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:"\u7b49\u7ea7\u5ef6\u65f6"}),"\n",(0,o.jsx)(t.li,{children:"\u4efb\u610f\u5ef6\u65f6(5.0\u65b0\u589e)"}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.li,{children:"\u4e8b\u52a1\u6d88\u606f"}),"\n",(0,o.jsx)(t.li,{children:"\u6279\u91cf\u6d88\u606f\uff0c\u591a\u6761\u6d88\u606f\u4e00\u6b21\u6027\u53d1\u9001\u5230Broker"}),"\n"]})]})}function k(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}},8453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>i});var o=r(6540);const c={},n=o.createContext(c);function s(e){const t=o.useContext(n);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),o.createElement(n.Provider,{value:t},e.children)}}}]);