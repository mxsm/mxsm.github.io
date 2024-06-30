"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[9021],{1528:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>a,contentTitle:()=>t,default:()=>j,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var r=s(4848),l=s(8453);const i={title:"Java GC\u65e5\u5fd7\u56fe\u89e3",date:new Date("2018-07-14T00:00:00.000Z")},t=void 0,c={id:"java/java-se/JVM/java-gc-log",title:"Java GC\u65e5\u5fd7\u56fe\u89e3",description:"1. GC\u65e5\u5fd7\u5f00\u542f",source:"@site/docs/java/java-se/JVM/java-gc-log.md",sourceDirName:"java/java-se/JVM",slug:"/java/java-se/JVM/java-gc-log",permalink:"/docs/java/java-se/JVM/java-gc-log",draft:!1,unlisted:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/java/java-se/JVM/java-gc-log.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1719738085e3,frontMatter:{title:"Java GC\u65e5\u5fd7\u56fe\u89e3",date:"2018-07-14T00:00:00.000Z"},sidebar:"javase",previous:{title:"\u7c7b\u7684\u52a0\u8f7d",permalink:"/docs/java/java-se/JVM/class-loader"},next:{title:"Linux\u4e0bJava\u5f00\u53d1\u8005\u5fc5\u987b\u77e5\u9053\u7684\u90a3\u4e9bJava\u547d\u4ee4",permalink:"/docs/java/java-se/JVM/java-must-know-command"}},a={},d=[{value:"1. GC\u65e5\u5fd7\u5f00\u542f",id:"1-gc\u65e5\u5fd7\u5f00\u542f",level:3},{value:"2. \u5982\u4f55\u770bGC\u65e5\u5fd7",id:"2-\u5982\u4f55\u770bgc\u65e5\u5fd7",level:3}];function o(n){const e={code:"code",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h3,{id:"1-gc\u65e5\u5fd7\u5f00\u542f",children:"1. GC\u65e5\u5fd7\u5f00\u542f"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"Java"})," \u7684GC\u65e5\u5fd7\u53ef\u4ee5\u901a\u8fc7\u547d\u4ee4 ",(0,r.jsx)(e.strong,{children:(0,r.jsx)(e.code,{children:"-XX:+PrintGCDetails"})})," \u5f00\u542f\u3002\u4e0b\u9762\u5c31\u6765\u770b\u770b\u5982\u4f55\u770b\u61c2GC\u7684\u65e5\u5fd7\u3002"]}),"\n",(0,r.jsx)(e.h3,{id:"2-\u5982\u4f55\u770bgc\u65e5\u5fd7",children:"2. \u5982\u4f55\u770bGC\u65e5\u5fd7"}),"\n",(0,r.jsxs)(e.p,{children:["\u4e0b\u9762\u662f\u4ee5",(0,r.jsx)(e.strong,{children:"JDK8"}),"\u4e3a\u4f8b\u5b50\uff0cGC\u4e5f\u662f\u7528\u7684\u9ed8\u8ba4(",(0,r.jsx)(e.strong,{children:"ParallelGC"}),")\u7684\u6ca1\u6709\u505a\u4efb\u4f55\u4fee\u6539\u3002",(0,r.jsx)(e.strong,{children:"GC"}),"\u5206\u4e3a\u4e24\u79cd\uff1a"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"Minor GC"})," \u2014 ",(0,r.jsx)(e.strong,{children:"\u65b0\u751f\u4ee3GC"})]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{src:"https://github.com/mxsm/document/blob/master/image/JSE/MinorGCDetail.jpg?raw=true",alt:"\u56fe\u89e3"})}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"GC (System.gc())\uff1a"})," ",(0,r.jsx)(e.strong,{children:"GC"}),"\u7684\u7c7b\u578b GC\u8868\u793a\u7684\u662f ",(0,r.jsx)(e.strong,{children:"Minor GC"})]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"[PSYoungGen: 7887K->1228K(76288K)]"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"PSYoungGen: \u8868\u793a\u5e74\u8f7b\u5e26\n7887K: GC\u524d\u65b0\u751f\u4ee3\u5360\u7528\u7684\u5185\u5b58\n1228K\uff1aGC\u540e\u65b0\u751f\u4ee3\u5360\u7528\u7684\u5185\u5b58\n76288K\uff1a\u65b0\u751f\u4ee3\u603b\u5171\u5927\u5c0f\n"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"7887K->1236K(251392K)"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"7887K\uff1aGC\u524dJVM\u5806\u5185\u5b58\u5360\u7528\n1236K\uff1aGC\u540eJVM\u5806\u5185\u5b58\u5360\u7528\n251392K\uff1a JVM\u5806\u603b\u5927\u5c0f\n"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"0.0019310 secs"}),"  GC\u8017\u65f6"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"[Times: user=0.01 sys=0.00, real=0.01 secs]"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"user=0.01 \u7528\u6237\u8017\u65f6\nsys=0.00 \u7cfb\u7edf\u8017\u65f6\nreal=0.01 \u5b9e\u9645\u8017\u65f6\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"Full GC(Major GC) \u2014 \u8001\u5e74\u4ee3GC"})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{src:"https://github.com/mxsm/document/blob/master/image/JSE/FullGCDetail.jpg?raw=true",alt:"\u56fe"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"Full GC (System.gc())"})," GC\u7c7b\u578b\u2014",(0,r.jsx)(e.strong,{children:"Full GC"})]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"[PSYoungGen: 1228K->0K(76288K)]:"}),"  \u65b0\u751f\u4ee3\uff1aGC\u524d\u5185\u5b58\u5360\u7528\u2014>GC\u540e\u5185\u5b58\u5360\u7528(\u65b0\u751f\u4ee3\u5185\u5b58\u5360\u7528\u603b\u91cf)"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"[ParOldGen: 8K->1081K(175104K)]:"}),"  \u8001\u5e74\u4ee3\uff1aGC\u524d\u5185\u5b58\u5360\u7528\u2014>GC\u540e\u5185\u5b58\u5360\u7528(\u8001\u5e74\u4ee3\u7684\u5185\u5b58\u5360\u7528\u603b\u91cf)"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"1236K->1081K(251392K)\uff1a"})," JVM\u5185\u5b58\u5360\u7528: GC\u524d\u5185\u5b58\u5360\u7528\u2014>GC\u540e\u5185\u5b58\u5360\u7528(JVM\u5185\u5b58\u5360\u7528\u603b\u91cf)"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"[Metaspace: 3212K->3212K(1056768K)]\uff1a"})," \u5143\u6570\u636e\u533a\uff1a GC\u524d\u5185\u5b58\u5728\u7528\u2014>GC\u540e\u5185\u5b58\u5360\u7528(\u5143\u6570\u636e\u533a\u603b\u91cf)"]}),"\n",(0,r.jsx)(e.li,{children:"\u540e\u9762\u7684\u90fd\u662f\u65f6\u95f4"}),"\n"]})]})}function j(n={}){const{wrapper:e}={...(0,l.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(o,{...n})}):o(n)}},8453:(n,e,s)=>{s.d(e,{R:()=>t,x:()=>c});var r=s(6540);const l={},i=r.createContext(l);function t(n){const e=r.useContext(i);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:t(n.components),r.createElement(i.Provider,{value:e},n.children)}}}]);