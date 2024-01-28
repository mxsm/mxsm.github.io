"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[7821],{3716:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>l,frontMatter:()=>o,metadata:()=>a,toc:()=>f});var t=i(5893),r=i(1151);const o={title:"RootBeanDefinition\u3001ChildBeanDefinition\u3001GenericBeanDefinition\u7684\u533a\u522b",date:new Date("2021-03-05T00:00:00.000Z"),weight:4},s=void 0,a={id:"spring/spring-framework/core-source-analysis/beandefinediff",title:"RootBeanDefinition\u3001ChildBeanDefinition\u3001GenericBeanDefinition\u7684\u533a\u522b",description:"\u4eceRootBeanDefinition\u3001ChildBeanDefinition\u3001GenericBeanDefinition\u7c7b\u56fe\u770b\u4e00\u4e0b\uff1a",source:"@site/docs/spring/spring-framework/core-source-analysis/beandefinediff.md",sourceDirName:"spring/spring-framework/core-source-analysis",slug:"/spring/spring-framework/core-source-analysis/beandefinediff",permalink:"/docs/spring/spring-framework/core-source-analysis/beandefinediff",draft:!1,unlisted:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/spring/spring-framework/core-source-analysis/beandefinediff.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1706451902,formattedLastUpdatedAt:"Jan 28, 2024",frontMatter:{title:"RootBeanDefinition\u3001ChildBeanDefinition\u3001GenericBeanDefinition\u7684\u533a\u522b",date:"2021-03-05T00:00:00.000Z",weight:4},sidebar:"springframework",previous:{title:"Spring Event\u6e90\u7801\u89e3\u6790",permalink:"/docs/spring/spring-framework/core-source-analysis/Spring-Event"},next:{title:"doGetBean\u6e90\u7801\u8be6\u89e3",permalink:"/docs/spring/spring-framework/core-source-analysis/doGetBean"}},c={},f=[];function d(e){const n={img:"img",li:"li",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["\u4eceRootBeanDefinition\u3001ChildBeanDefinition\u3001GenericBeanDefinition\u7c7b\u56fe\u770b\u4e00\u4e0b\uff1a\n",(0,t.jsx)(n.img,{src:"https://github.com/mxsm/picture/blob/main/spring/RootBeanDefinition_uml.png?raw=true",alt:"\u7c7b\u56fe"})]}),"\n",(0,t.jsx)(n.p,{children:"\u672c\u8d28\u4e0a\u6765\u8bf4\u662f\u6ca1\u6709\u592a\u5927\u7684\u533a\u522b\u5b83\u4eec\u90fd\u7ee7\u627f\u4e86 AbstractBeanDefinition \u3001\u5728\u5b83\u4eec\u5404\u81ea\u7684\u7c7b\u4e2d\u3001\u5e76\u6ca1\u6709\u4ec0\u4e48\u592a\u5927\u7684\u7279\u6b8a\u7684\u903b\u8f91\u3001\u67d0\u79cd\u7a0b\u5ea6\u4e0a\u6765\u8bf4\u3001\u5b83\u4eec\u53ef\u4ee5\u8bf4\u662f\u5dee\u522b\u975e\u5e38\u5c0f\u7684"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"RootBeanDefinition\u53ef\u4ee5\u5355\u72ec\u4f5c\u4e3a\u4e00\u4e2aBeanDefinition\uff0c\u4e5f\u53ef\u4ee5\u4f5c\u4e3a\u5176\u4ed6BeanDefinition\u7684\u7236\u7c7b\u3002\u4f46\u662f\u4ed6\u4e0d\u80fd\u4f5c\u4e3a\u5176\u4ed6BeanDefinition\u7684\u5b50\u7c7b\uff08\u53ef\u4ee5\u53bb\u770b\u6e90\u7801\uff0c\u5728setParentName\u7684\u65f6\u5019\uff0c\u4f1a\u629b\u51fa\u4e00\u4e2a\u5f02\u5e38\uff09"}),"\n",(0,t.jsx)(n.li,{children:"ChildBeanDefinition\u76f8\u5f53\u4e8e\u4e00\u4e2a\u5b50\u7c7b\uff0c\u4e0d\u53ef\u4ee5\u5355\u72ec\u5b58\u5728\uff0c\u5fc5\u987b\u8981\u4f9d\u8d56\u4e00\u4e2a\u7236BeanDetintion\u3002\uff08\u6700\u5927\u7684\u533a\u522b\u4ed6\u7684parentName\u5c5e\u6027\u662f\u901a\u8fc7\u6784\u9020\u65b9\u6cd5\u8bbe\u7f6e\u7684\uff0c\u800c\u4e14\u5e76\u6ca1\u6709\u63d0\u4f9b\u4e00\u4e2a\u65e0\u53c2\u6784\u9020\u65b9\u6cd5\u7ed9\u6211\u4eec\u3002)"}),"\n",(0,t.jsx)(n.li,{children:"GenericBeanDefinition\u662f\u9996\u9009\u7684"}),"\n"]})]})}function l(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>s});var t=i(7294);const r={},o=t.createContext(r);function s(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);