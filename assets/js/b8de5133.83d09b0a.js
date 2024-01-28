"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[8376],{5523:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>r});var s=n(5893),a=n(1151);const i={title:"\u5206\u5e03\u5f0f\u9501",date:new Date("2020-04-25T00:00:00.000Z")},l=void 0,c={id:"java/java-se/lock/distributed-lock",title:"\u5206\u5e03\u5f0f\u9501",description:"\u5206\u5e03\u5f0f\u9501\u7684\u7279\u70b9",source:"@site/docs/java/java-se/lock/distributed-lock.md",sourceDirName:"java/java-se/lock",slug:"/java/java-se/lock/distributed-lock",permalink:"/docs/java/java-se/lock/distributed-lock",draft:!1,unlisted:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/java/java-se/lock/distributed-lock.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1706451902,formattedLastUpdatedAt:"Jan 28, 2024",frontMatter:{title:"\u5206\u5e03\u5f0f\u9501",date:"2020-04-25T00:00:00.000Z"},sidebar:"javase",previous:{title:"\u7c7b\u52a0\u8f7d\u5668\u548c\u53cc\u4eb2\u59d4\u6d3e\u6a21\u578b",permalink:"/docs/java/java-se/JVM/parental-delegate-model"},next:{title:"Java\u4e2d\u7684\u90a3\u4e9b\u9501\u4e8b-1",permalink:"/docs/java/java-se/lock/java-lock"}},o={},r=[{value:"\u5206\u5e03\u5f0f\u9501\u7684\u7279\u70b9",id:"\u5206\u5e03\u5f0f\u9501\u7684\u7279\u70b9",level:3},{value:"\u5e38\u89c1\u7684\u5206\u5e03\u5f0f\u9501",id:"\u5e38\u89c1\u7684\u5206\u5e03\u5f0f\u9501",level:3}];function d(e){const t={h3:"h3",li:"li",p:"p",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h3,{id:"\u5206\u5e03\u5f0f\u9501\u7684\u7279\u70b9",children:"\u5206\u5e03\u5f0f\u9501\u7684\u7279\u70b9"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"\u4e92\u65a5\u6027:\u548c\u6211\u4eec\u672c\u5730\u9501\u4e00\u6837\u4e92\u65a5\u6027\u662f\u6700\u57fa\u672c\uff0c\u4f46\u662f\u5206\u5e03\u5f0f\u9501\u9700\u8981\u4fdd\u8bc1\u5728\u4e0d\u540c\u8282\u70b9\u7684\u4e0d\u540c\u7ebf\u7a0b\u7684\u4e92\u65a5\u3002\u5728\u5206\u5e03\u5f0f\u7cfb\u7edf\u73af\u5883\u4e0b\uff0c\u4e00\u4e2a\u65b9\u6cd5\u5728\u540c\u4e00\u65f6\u95f4\u53ea\u80fd\u88ab\u4e00\u4e2a\u673a\u5668\u7684\u4e00\u4e2a\u7ebf\u7a0b\u6267\u884c\uff1b"}),"\n",(0,s.jsx)(t.li,{children:"\u9ad8\u53ef\u7528\u7684\u83b7\u53d6\u9501\u4e0e\u91ca\u653e\u9501"}),"\n",(0,s.jsx)(t.li,{children:"\u9ad8\u6027\u80fd\u7684\u83b7\u53d6\u9501\u4e0e\u91ca\u653e\u9501"}),"\n",(0,s.jsx)(t.li,{children:"\u53ef\u91cd\u5165\u7279\u6027\u540c\u4e00\u4e2a\u8282\u70b9\u4e0a\u7684\u540c\u4e00\u4e2a\u7ebf\u7a0b\u5982\u679c\u83b7\u53d6\u4e86\u9501\u4e4b\u540e\u90a3\u4e48\u4e5f\u53ef\u4ee5\u518d\u6b21\u83b7\u53d6\u8fd9\u4e2a\u9501"}),"\n",(0,s.jsx)(t.li,{children:"\u5177\u5907\u9501\u5931\u6548\u673a\u5236\uff0c\u9501\u8d85\u65f6:\u548c\u672c\u5730\u9501\u4e00\u6837\u652f\u6301\u9501\u8d85\u65f6\uff0c\u9632\u6b62\u6b7b\u9501"}),"\n",(0,s.jsx)(t.li,{children:"\u652f\u6301\u963b\u585e\u548c\u975e\u963b\u585e:\u548cReentrantLock\u4e00\u6837\u652f\u6301lock\u548ctrylock\u4ee5\u53catryLock(long timeOut)"}),"\n",(0,s.jsx)(t.li,{children:"\u652f\u6301\u516c\u5e73\u9501\u548c\u975e\u516c\u5e73\u9501(\u53ef\u9009):\u516c\u5e73\u9501\u7684\u610f\u601d\u662f\u6309\u7167\u8bf7\u6c42\u52a0\u9501\u7684\u987a\u5e8f\u83b7\u5f97\u9501\uff0c\u975e\u516c\u5e73\u9501\u5c31\u76f8\u53cd\u662f\u65e0\u5e8f\u7684\u3002\u8fd9\u4e2a\u4e00\u822c\u6765\u8bf4\u5b9e\u73b0\u7684\u6bd4\u8f83\u5c11"}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"\u5e38\u89c1\u7684\u5206\u5e03\u5f0f\u9501",children:"\u5e38\u89c1\u7684\u5206\u5e03\u5f0f\u9501"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"MYSQL"}),"\n",(0,s.jsx)(t.li,{children:"Zookeeper"}),"\n",(0,s.jsx)(t.li,{children:"Redis"}),"\n",(0,s.jsx)(t.li,{children:"ETCD"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"\u63a5\u4e0b\u6765\u4f1a\u5206\u522b\u5206\u6790\u73b0\u6709\u7684\u5f00\u6e90\u5b9e\u73b0\uff0c\u7136\u540e\u81ea\u5df1\u7684\u4ee3\u7801\u5b9e\u73b0\u3002"})]})}function u(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>l});var s=n(7294);const a={},i=s.createContext(a);function l(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);