"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[2837],{7216:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var i=n(4848),o=n(8453),s=n(3514);const r={title:"Tokio\u5b66\u4e60\u7cfb\u5217",sidebar_label:"Tokio\u5b66\u4e60\u7cfb\u5217",hide_table_of_contents:!0,slug:"/rust/tokio"},c="Tokio\u6846\u67b6",a={id:"rust/tokio/index",title:"Tokio\u5b66\u4e60\u7cfb\u5217",description:"\u4e3b\u8981\u8bb0\u5f55\u4e00\u4e9bTokio\u5b66\u4e60\u8fc7\u7a0b\uff0c\u6700\u7ec8\u7684\u76ee\u7684\u662f\u53c2\u4e0e\u5f00\u6e90\u9879\u76ee",source:"@site/docs/rust/tokio/index.md",sourceDirName:"rust/tokio",slug:"/rust/tokio",permalink:"/docs/rust/tokio",draft:!1,unlisted:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/rust/tokio/index.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1710777389,formattedLastUpdatedAt:"Mar 18, 2024",frontMatter:{title:"Tokio\u5b66\u4e60\u7cfb\u5217",sidebar_label:"Tokio\u5b66\u4e60\u7cfb\u5217",hide_table_of_contents:!0,slug:"/rust/tokio"},sidebar:"rustTokio",next:{title:"Tokio\u6846\u67b6\u6e90\u7801\u5206\u6790",permalink:"/docs/rust/rust/tokio-source-analysis"}},l={},d=[];function u(t){const e={h1:"h1",li:"li",p:"p",ul:"ul",...(0,o.R)(),...t.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"tokio\u6846\u67b6",children:"Tokio\u6846\u67b6"}),"\n",(0,i.jsx)(e.p,{children:"\u4e3b\u8981\u8bb0\u5f55\u4e00\u4e9bTokio\u5b66\u4e60\u8fc7\u7a0b\uff0c\u6700\u7ec8\u7684\u76ee\u7684\u662f\u53c2\u4e0e\u5f00\u6e90\u9879\u76ee"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Tokio\u7684\u6e90\u7801\u5206\u6790"}),"\n",(0,i.jsx)(e.li,{children:"Tokio\u7684\u4f7f\u7528"}),"\n",(0,i.jsx)(e.li,{children:"Tokio\u7684\u4f7f\u7528\u8fc7\u7a0b\u4e2d\u9047\u5230\u7684\u95ee\u9898"}),"\n"]}),"\n","\n","\n",(0,i.jsx)(s.A,{})]})}function m(t={}){const{wrapper:e}={...(0,o.R)(),...t.components};return e?(0,i.jsx)(e,{...t,children:(0,i.jsx)(u,{...t})}):u(t)}},3514:(t,e,n)=>{n.d(e,{A:()=>k});n(6540);var i=n(4164),o=n(4142),s=n(8774),r=n(6654),c=n(1312),a=n(1107);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=n(4848);function u(t){let{href:e,children:n}=t;return(0,d.jsx)(s.A,{href:e,className:(0,i.A)("card padding--lg",l.cardContainer),children:n})}function m(t){let{href:e,icon:n,title:o,description:s}=t;return(0,d.jsxs)(u,{href:e,children:[(0,d.jsxs)(a.A,{as:"h2",className:(0,i.A)("text--truncate",l.cardTitle),title:o,children:[n," ",o]}),s&&(0,d.jsx)("p",{className:(0,i.A)("text--truncate",l.cardDescription),title:s,children:s})]})}function h(t){let{item:e}=t;const n=(0,o.Nr)(e);return n?(0,d.jsx)(m,{href:n,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:e.description??(0,c.T)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null}function p(t){let{item:e}=t;const n=(0,r.A)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,o.cC)(e.docId??void 0);return(0,d.jsx)(m,{href:e.href,icon:n,title:e.label,description:e.description??i?.description})}function f(t){let{item:e}=t;switch(e.type){case"link":return(0,d.jsx)(p,{item:e});case"category":return(0,d.jsx)(h,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}function x(t){let{className:e}=t;const n=(0,o.$S)();return(0,d.jsx)(k,{items:n.items,className:e})}function k(t){const{items:e,className:n}=t;if(!e)return(0,d.jsx)(x,{...t});const s=(0,o.d1)(e);return(0,d.jsx)("section",{className:(0,i.A)("row",n),children:s.map(((t,e)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(f,{item:t})},e)))})}},8453:(t,e,n)=>{n.d(e,{R:()=>r,x:()=>c});var i=n(6540);const o={},s=i.createContext(o);function r(t){const e=i.useContext(s);return i.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function c(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(o):t.components||o:r(t.components),i.createElement(s.Provider,{value:e},t.children)}}}]);