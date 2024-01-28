"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[6482],{5338:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>r,default:()=>v,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var n=a(5893),i=a(1151);const s={title:"Java\u7a0b\u5e8f\u4e2d\u83b7\u53d6\u5f53\u524d\u8fdb\u7a0b\u7684\u8fdb\u7a0bID(Pid)",date:new Date("2020-02-02T00:00:00.000Z")},r=void 0,o={id:"java/java-se/others/java-application-get-pid",title:"Java\u7a0b\u5e8f\u4e2d\u83b7\u53d6\u5f53\u524d\u8fdb\u7a0b\u7684\u8fdb\u7a0bID(Pid)",description:"Java\u5982\u4f55\u83b7\u53d6Pid",source:"@site/docs/java/java-se/others/java-application-get-pid.md",sourceDirName:"java/java-se/others",slug:"/java/java-se/others/java-application-get-pid",permalink:"/docs/java/java-se/others/java-application-get-pid",draft:!1,unlisted:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/java/java-se/others/java-application-get-pid.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1706451902,formattedLastUpdatedAt:"Jan 28, 2024",frontMatter:{title:"Java\u7a0b\u5e8f\u4e2d\u83b7\u53d6\u5f53\u524d\u8fdb\u7a0b\u7684\u8fdb\u7a0bID(Pid)",date:"2020-02-02T00:00:00.000Z"},sidebar:"javase",previous:{title:"\u63a5\u53e3\u62bd\u8c61\u7c7b\u7684\u6289\u62e9",permalink:"/docs/java/java-se/others/interface-abstract-class"},next:{title:"Java\u4fee\u9970\u7b26",permalink:"/docs/java/java-se/others/java-modifier"}},d={},c=[{value:"Java\u5982\u4f55\u83b7\u53d6Pid",id:"java\u5982\u4f55\u83b7\u53d6pid",level:3}];function p(t){const e={code:"code",h3:"h3",p:"p",pre:"pre",...(0,i.a)(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h3,{id:"java\u5982\u4f55\u83b7\u53d6pid",children:"Java\u5982\u4f55\u83b7\u53d6Pid"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-java",children:'private String getPid() {\n\t\ttry {\n\t\t\tString jvmName = ManagementFactory.getRuntimeMXBean().getName();\n\t\t\treturn jvmName.split("@")[0];\n\t\t}\n\t\tcatch (Throwable ex) {\n\t\t\treturn null;\n\t\t}\n\t}\n'})}),"\n",(0,n.jsx)(e.p,{children:"\u4e0a\u9762\u7684\u4ee3\u7801\u6765\u7740SpringBoot\u7684ApplicationPid\u7684\u4ee3\u7801\u3002\u901a\u8fc7\u8fd9\u6bb5\u4ee3\u7801\u5c31\u53ef\u4ee5\u83b7\u53d6\u5230Pid"})]})}function v(t={}){const{wrapper:e}={...(0,i.a)(),...t.components};return e?(0,n.jsx)(e,{...t,children:(0,n.jsx)(p,{...t})}):p(t)}},1151:(t,e,a)=>{a.d(e,{Z:()=>o,a:()=>r});var n=a(7294);const i={},s=n.createContext(i);function r(t){const e=n.useContext(s);return n.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function o(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(i):t.components||i:r(t.components),n.createElement(s.Provider,{value:e},t.children)}}}]);