"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[5350],{5906:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var n=s(5893),r=s(1151),c=s(2991);const i={title:"\u4f7f\u7528\u5305\u3001\u677f\u6761\u7bb1\u548c\u6a21\u5757\u7ba1\u7406\u65e5\u76ca\u589e\u957f\u7684\u9879\u76ee",sidebar_label:"\u4f7f\u7528\u5305\u3001\u677f\u6761\u7bb1\u548c\u6a21\u5757\u7ba1\u7406\u65e5\u76ca\u589e\u957f\u7684\u9879\u76ee",hide_table_of_contents:!0,slug:"/rust/official-doc/packages-crates-modules"},a="\u4f7f\u7528\u5305\u3001\u677f\u6761\u7bb1\u548c\u6a21\u5757\u7ba1\u7406\u65e5\u76ca\u589e\u957f\u7684\u9879\u76ee",o={id:"rust/official-doc/sidebar/packages-crates-modules-index",title:"\u4f7f\u7528\u5305\u3001\u677f\u6761\u7bb1\u548c\u6a21\u5757\u7ba1\u7406\u65e5\u76ca\u589e\u957f\u7684\u9879\u76ee",description:"managing-growing-projects-with-packages-crates-and-modules)",source:"@site/docs/rust/official-doc/sidebar/packages-crates-modules-index.md",sourceDirName:"rust/official-doc/sidebar",slug:"/rust/official-doc/packages-crates-modules",permalink:"/docs/rust/official-doc/packages-crates-modules",draft:!1,unlisted:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/rust/official-doc/sidebar/packages-crates-modules-index.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1706451902,formattedLastUpdatedAt:"Jan 28, 2024",frontMatter:{title:"\u4f7f\u7528\u5305\u3001\u677f\u6761\u7bb1\u548c\u6a21\u5757\u7ba1\u7406\u65e5\u76ca\u589e\u957f\u7684\u9879\u76ee",sidebar_label:"\u4f7f\u7528\u5305\u3001\u677f\u6761\u7bb1\u548c\u6a21\u5757\u7ba1\u7406\u65e5\u76ca\u589e\u957f\u7684\u9879\u76ee",hide_table_of_contents:!0,slug:"/rust/official-doc/packages-crates-modules"},sidebar:"rustDoc",previous:{title:"6.3. \u4f7f\u7528if let\u8fdb\u884c\u7b80\u6d01\u7684\u63a7\u5236\u6d41",permalink:"/docs/rust/official-doc/enums-pattern-matching/concise"},next:{title:"7.1. \u5305(Package)\u548c\u677f\u6761\u7bb1(Crate)",permalink:"/docs/rust/official-doc/packages-crates-modules/packages-crates"}},l={},d=[];function u(e){const t={a:"a",em:"em",h1:"h1",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"\u4f7f\u7528\u5305\u677f\u6761\u7bb1\u548c\u6a21\u5757\u7ba1\u7406\u65e5\u76ca\u589e\u957f\u7684\u9879\u76ee",children:(0,n.jsx)(t.a,{href:"https://doc.rust-lang.org/book/ch07-00-managing-growing-projects-with-packages-crates-and-modules.html#managing-growing-projects-with-packages-crates-and-modules",children:"\u4f7f\u7528\u5305\u3001\u677f\u6761\u7bb1\u548c\u6a21\u5757\u7ba1\u7406\u65e5\u76ca\u589e\u957f\u7684\u9879\u76ee"})}),"\n",(0,n.jsx)(t.p,{children:"\u968f\u7740\u7f16\u5199\u7684\u5927\u578b\u7a0b\u5e8f\uff0c\u7ec4\u7ec7\u4ee3\u7801\u5c06\u53d8\u5f97\u8d8a\u6765\u8d8a\u91cd\u8981\u3002\u901a\u8fc7\u5c06\u76f8\u5173\u529f\u80fd\u5206\u7ec4\u5e76\u5c06\u5177\u6709\u4e0d\u540c\u7279\u6027\u7684\u4ee3\u7801\u5206\u5f00\uff0c\u60a8\u5c06\u660e\u786e\u77e5\u9053\u5728\u54ea\u91cc\u627e\u5230\u5b9e\u73b0\u7279\u5b9a\u529f\u80fd\u7684\u4ee3\u7801\u4ee5\u53ca\u5728\u54ea\u91cc\u53bb\u66f4\u6539\u529f\u80fd\u7684\u5de5\u4f5c\u65b9\u5f0f\u3002"}),"\n",(0,n.jsxs)(t.p,{children:["\u5230\u76ee\u524d\u4e3a\u6b62\uff0c\u6211\u4eec\u7f16\u5199\u7684\u7a0b\u5e8f\u90fd\u5728\u4e00\u4e2a\u6a21\u5757\u7684\u4e00\u4e2a\u6587\u4ef6\u4e2d\u3002\u968f\u7740\u9879\u76ee\u7684\u53d1\u5c55\uff0c\u60a8\u5e94\u8be5\u901a\u8fc7\u5c06\u4ee3\u7801\u62c6\u5206\u6210\u591a\u4e2a\u6a21\u5757\uff0c\u7136\u540e\u518d\u5206\u6210\u591a\u4e2a\u6587\u4ef6\u6765\u7ec4\u7ec7\u4ee3\u7801\u3002\u4e00\u4e2a\u5305\u53ef\u4ee5\u5305\u542b\u591a\u4e2a\u4e8c\u8fdb\u5236\u7bb1\uff0c\u4ee5\u53ca\u53ef\u9009\u7684\u4e00\u4e2a\u5e93\u7bb1\u3002\u968f\u7740\u5305\u7684\u53d1\u5c55\uff0c\u60a8\u53ef\u4ee5\u5c06\u90e8\u5206\u63d0\u53d6\u4e3a\u5355\u72ec\u7684\u7bb1\uff0c\u6210\u4e3a\u5916\u90e8\u4f9d\u8d56\u3002\u672c\u7ae0\u6db5\u76d6\u4e86\u6240\u6709\u8fd9\u4e9b\u6280\u672f\u3002\u5bf9\u4e8e\u7531\u4e00\u7ec4\u76f8\u5173\u8054\u7684\u5305\u7ec4\u6210\u7684\u975e\u5e38\u5927\u7684\u9879\u76ee\uff0c\u8fd9\u4e9b\u5305\u4e00\u8d77\u6f14\u53d8\uff0cCargo \u63d0\u4f9b\u4e86 ",(0,n.jsx)(t.em,{children:"\u5de5\u4f5c\u533a"}),"\uff0c\u6211\u4eec\u5c06\u5728\u7b2c14\u7ae0\u7684",(0,n.jsx)(t.a,{href:"https://doc.rust-lang.org/book/ch14-03-cargo-workspaces.html",children:"\u201cCargo\u5de5\u4f5c\u533a\u201d"}),"\u90e8\u5206\u8fdb\u884c\u8ba8\u8bba\u3002"]}),"\n",(0,n.jsx)(t.p,{children:"\u6211\u4eec\u8fd8\u5c06\u8ba8\u8bba\u5c01\u88c5\u5b9e\u73b0\u7ec6\u8282\u7684\u6982\u5ff5\uff0c\u8fd9\u4f7f\u60a8\u53ef\u4ee5\u5728\u66f4\u9ad8\u7684\u5c42\u6b21\u4e0a\u91cd\u7528\u4ee3\u7801\uff1a\u4e00\u65e6\u60a8\u5b9e\u73b0\u4e86\u4e00\u4e2a\u64cd\u4f5c\uff0c\u5176\u4ed6\u4ee3\u7801\u53ef\u4ee5\u901a\u8fc7\u5176\u516c\u5171\u63a5\u53e3\u8c03\u7528\u60a8\u7684\u4ee3\u7801\uff0c\u800c\u65e0\u9700\u77e5\u9053\u5b9e\u73b0\u7684\u5de5\u4f5c\u65b9\u5f0f\u3002\u7f16\u5199\u4ee3\u7801\u7684\u65b9\u5f0f\u5b9a\u4e49\u4e86\u54ea\u4e9b\u90e8\u5206\u5bf9\u5176\u4ed6\u4ee3\u7801\u53ef\u7528\uff0c\u54ea\u4e9b\u90e8\u5206\u662f\u79c1\u6709\u5b9e\u73b0\u7ec6\u8282\uff0c\u60a8\u6709\u6743\u66f4\u6539\u8fd9\u4e9b\u7ec6\u8282\u3002\u8fd9\u662f\u51cf\u5c11\u60a8\u5fc5\u987b\u8bb0\u4f4f\u7684\u7ec6\u8282\u91cf\u7684\u53e6\u4e00\u79cd\u65b9\u6cd5\u3002"}),"\n",(0,n.jsx)(t.p,{children:"\u4e00\u4e2a\u76f8\u5173\u7684\u6982\u5ff5\u662f\u4f5c\u7528\u57df\uff1a\u4ee3\u7801\u7f16\u5199\u7684\u5d4c\u5957\u4e0a\u4e0b\u6587\u5177\u6709\u4e00\u7ec4\u88ab\u5b9a\u4e49\u4e3a\u201c\u5728\u4f5c\u7528\u57df\u4e2d\u201d\u7684\u540d\u79f0\u3002\u5728\u9605\u8bfb\u3001\u7f16\u5199\u548c\u7f16\u8bd1\u4ee3\u7801\u65f6\uff0c\u7a0b\u5e8f\u5458\u548c\u7f16\u8bd1\u5668\u9700\u8981\u77e5\u9053\u7279\u5b9a\u4f4d\u7f6e\u7684\u7279\u5b9a\u540d\u79f0\u662f\u5426\u6307\u4ee3\u53d8\u91cf\u3001\u51fd\u6570\u3001\u7ed3\u6784\u4f53\u3001\u679a\u4e3e\u3001\u6a21\u5757\u3001\u5e38\u91cf\u6216\u5176\u4ed6\u9879\uff0c\u4ee5\u53ca\u8be5\u9879\u7684\u542b\u4e49\u3002\u60a8\u53ef\u4ee5\u521b\u5efa\u4f5c\u7528\u57df\u5e76\u66f4\u6539\u5728\u4f5c\u7528\u57df\u4e2d\u6216\u4e0d\u5728\u4f5c\u7528\u57df\u4e2d\u7684\u540d\u79f0\u3002\u60a8\u4e0d\u80fd\u5728\u540c\u4e00\u4e2a\u4f5c\u7528\u57df\u4e2d\u6709\u4e24\u4e2a\u5177\u6709\u76f8\u540c\u540d\u79f0\u7684\u9879\uff1b\u53ef\u7528\u5de5\u5177\u6765\u89e3\u51b3\u540d\u79f0\u51b2\u7a81\u3002"}),"\n",(0,n.jsxs)(t.p,{children:["Rust \u5177\u6709\u8bb8\u591a\u529f\u80fd\uff0c\u5141\u8bb8\u60a8\u7ba1\u7406\u4ee3\u7801\u7684\u7ec4\u7ec7\u65b9\u5f0f\uff0c\u5305\u62ec\u54ea\u4e9b\u7ec6\u8282\u66b4\u9732\uff0c\u54ea\u4e9b\u7ec6\u8282\u662f\u79c1\u6709\u7684\uff0c\u4ee5\u53ca\u7a0b\u5e8f\u4e2d\u6bcf\u4e2a\u4f5c\u7528\u57df\u4e2d\u7684\u540d\u79f0\u3002\u8fd9\u4e9b\u529f\u80fd\u6709\u65f6\u88ab\u7edf\u79f0\u4e3a",(0,n.jsx)(t.em,{children:"\u6a21\u5757\u7cfb\u7edf"}),"\uff0c\u5305\u62ec\uff1a"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"\u5305\uff08Packages\uff09"}),"\uff1aCargo \u529f\u80fd\uff0c\u7528\u4e8e\u6784\u5efa\u3001\u6d4b\u8bd5\u548c\u5171\u4eab\u7bb1"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"\u677f\u6761\u7bb1\uff08Crates\uff09"}),"\uff1a\u4e00\u68f5\u6a21\u5757\u6811\uff0c\u4ea7\u751f\u4e00\u4e2a\u5e93\u6216\u53ef\u6267\u884c\u6587\u4ef6"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"\u6a21\u5757\uff08Modules\uff09"})," \u548c ",(0,n.jsx)(t.strong,{children:"use"}),"\uff1a\u8ba9\u60a8\u63a7\u5236\u8def\u5f84\u7684\u7ec4\u7ec7\u3001\u4f5c\u7528\u57df\u548c\u79c1\u6709\u6027"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"\u8def\u5f84\uff08Paths\uff09"}),"\uff1a\u4e00\u79cd\u547d\u540d\u9879\u7684\u65b9\u5f0f\uff0c\u4f8b\u5982\u7ed3\u6784\u4f53\u3001\u51fd\u6570\u6216\u6a21\u5757"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"\u5728\u672c\u7ae0\u4e2d\uff0c\u6211\u4eec\u5c06\u6db5\u76d6\u6240\u6709\u8fd9\u4e9b\u529f\u80fd\uff0c\u8ba8\u8bba\u5b83\u4eec\u5982\u4f55\u76f8\u4e92\u4f5c\u7528\uff0c\u5e76\u89e3\u91ca\u5982\u4f55\u4f7f\u7528\u5b83\u4eec\u6765\u7ba1\u7406\u4f5c\u7528\u57df\u3002\u5230\u6700\u540e\uff0c\u60a8\u5e94\u8be5\u5bf9\u6a21\u5757\u7cfb\u7edf\u6709\u6df1\u523b\u7684\u7406\u89e3\uff0c\u5e76\u80fd\u591f\u50cf\u4e13\u4e1a\u4eba\u58eb\u4e00\u6837\u4f7f\u7528\u4f5c\u7528\u57df\u3002"}),"\n","\n","\n",(0,n.jsx)(c.Z,{})]})}function m(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},2991:(e,t,s)=>{s.d(t,{Z:()=>x});s(7294);var n=s(512),r=s(3438),c=s(3692),i=s(3919),a=s(5999),o=s(2503);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=s(5893);function u(e){let{href:t,children:s}=e;return(0,d.jsx)(c.Z,{href:t,className:(0,n.Z)("card padding--lg",l.cardContainer),children:s})}function m(e){let{href:t,icon:s,title:r,description:c}=e;return(0,d.jsxs)(u,{href:t,children:[(0,d.jsxs)(o.Z,{as:"h2",className:(0,n.Z)("text--truncate",l.cardTitle),title:r,children:[s," ",r]}),c&&(0,d.jsx)("p",{className:(0,n.Z)("text--truncate",l.cardDescription),title:c,children:c})]})}function h(e){let{item:t}=e;const s=(0,r.LM)(t);return s?(0,d.jsx)(m,{href:s,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,a.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function p(e){let{item:t}=e;const s=(0,i.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,r.xz)(t.docId??void 0);return(0,d.jsx)(m,{href:t.href,icon:s,title:t.label,description:t.description??n?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(p,{item:t});case"category":return(0,d.jsx)(h,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const s=(0,r.jA)();return(0,d.jsx)(x,{items:s.items,className:t})}function x(e){const{items:t,className:s}=e;if(!t)return(0,d.jsx)(g,{...e});const c=(0,r.MN)(t);return(0,d.jsx)("section",{className:(0,n.Z)("row",s),children:c.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(f,{item:e})},t)))})}},1151:(e,t,s)=>{s.d(t,{Z:()=>a,a:()=>i});var n=s(7294);const r={},c=n.createContext(r);function i(e){const t=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(c.Provider,{value:t},e.children)}}}]);