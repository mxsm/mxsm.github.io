"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[2051],{348:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>s,metadata:()=>a,toc:()=>u});var r=o(4848),i=o(8453),n=o(3514);const s={title:"Tokio tokio crate\u6e90\u7801\u5206\u6790",sidebar_label:"Tokio tokio crate\u6e90\u7801\u5206\u6790",linkTitle:"Tokio tokio crate\u6e90\u7801\u5206\u6790",weight:202403182311,description:"Tokio tokio crate\u6e90\u7801\u5206\u6790"},c=void 0,a={id:"rust/tokio/tokio-source-analysis/tokio-crate/index",title:"Tokio tokio crate\u6e90\u7801\u5206\u6790",description:"Tokio tokio crate\u6e90\u7801\u5206\u6790",source:"@site/docs/rust/tokio/tokio-source-analysis/tokio-crate/index.md",sourceDirName:"rust/tokio/tokio-source-analysis/tokio-crate",slug:"/rust/tokio/tokio-source-analysis/tokio-crate/",permalink:"/docs/rust/tokio/tokio-source-analysis/tokio-crate/",draft:!1,unlisted:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/rust/tokio/tokio-source-analysis/tokio-crate/index.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1719738085e3,frontMatter:{title:"Tokio tokio crate\u6e90\u7801\u5206\u6790",sidebar_label:"Tokio tokio crate\u6e90\u7801\u5206\u6790",linkTitle:"Tokio tokio crate\u6e90\u7801\u5206\u6790",weight:202403182311,description:"Tokio tokio crate\u6e90\u7801\u5206\u6790"},sidebar:"rustTokio",previous:{title:"Tokio\u6846\u67b6\u6e90\u7801\u5206\u6790",permalink:"/docs/rust/rust/tokio-source-analysis"},next:{title:"Tokio runtime\u6e90\u7801\u5206\u6790",permalink:"/docs/rust/tokio/tokio-source-analysis/tokio-crate/runtime/"}},l={},u=[];function d(t){return(0,r.jsx)(n.A,{})}function m(t={}){const{wrapper:e}={...(0,i.R)(),...t.components};return e?(0,r.jsx)(e,{...t,children:(0,r.jsx)(d,{...t})}):d()}},3514:(t,e,o)=>{o.d(e,{A:()=>g});o(6540);var r=o(4164),i=o(4142),n=o(8774),s=o(5846),c=o(6654),a=o(1312),l=o(1107);const u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=o(4848);function m(t){let{href:e,children:o}=t;return(0,d.jsx)(n.A,{href:e,className:(0,r.A)("card padding--lg",u.cardContainer),children:o})}function k(t){let{href:e,icon:o,title:i,description:n}=t;return(0,d.jsxs)(m,{href:e,children:[(0,d.jsxs)(l.A,{as:"h2",className:(0,r.A)("text--truncate",u.cardTitle),title:i,children:[o," ",i]}),n&&(0,d.jsx)("p",{className:(0,r.A)("text--truncate",u.cardDescription),title:n,children:n})]})}function p(t){let{item:e}=t;const o=(0,i.Nr)(e),r=function(){const{selectMessage:t}=(0,s.W)();return e=>t(e,(0,a.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e}))}();return o?(0,d.jsx)(k,{href:o,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:e.description??r(e.items.length)}):null}function f(t){let{item:e}=t;const o=(0,c.A)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,i.cC)(e.docId??void 0);return(0,d.jsx)(k,{href:e.href,icon:o,title:e.label,description:e.description??r?.description})}function h(t){let{item:e}=t;switch(e.type){case"link":return(0,d.jsx)(f,{item:e});case"category":return(0,d.jsx)(p,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}function x(t){let{className:e}=t;const o=(0,i.$S)();return(0,d.jsx)(g,{items:o.items,className:e})}function g(t){const{items:e,className:o}=t;if(!e)return(0,d.jsx)(x,{...t});const n=(0,i.d1)(e);return(0,d.jsx)("section",{className:(0,r.A)("row",o),children:n.map(((t,e)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(h,{item:t})},e)))})}},5846:(t,e,o)=>{o.d(e,{W:()=>l});var r=o(6540),i=o(4586);const n=["zero","one","two","few","many","other"];function s(t){return n.filter((e=>t.includes(e)))}const c={locale:"en",pluralForms:s(["one","other"]),select:t=>1===t?"one":"other"};function a(){const{i18n:{currentLocale:t}}=(0,i.A)();return(0,r.useMemo)((()=>{try{return function(t){const e=new Intl.PluralRules(t);return{locale:t,pluralForms:s(e.resolvedOptions().pluralCategories),select:t=>e.select(t)}}(t)}catch(e){return console.error(`Failed to use Intl.PluralRules for locale "${t}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${e.message}\n`),c}}),[t])}function l(){const t=a();return{selectMessage:(e,o)=>function(t,e,o){const r=t.split("|");if(1===r.length)return r[0];r.length>o.pluralForms.length&&console.error(`For locale=${o.locale}, a maximum of ${o.pluralForms.length} plural forms are expected (${o.pluralForms.join(",")}), but the message contains ${r.length}: ${t}`);const i=o.select(e),n=o.pluralForms.indexOf(i);return r[Math.min(n,r.length-1)]}(o,e,t)}}},8453:(t,e,o)=>{o.d(e,{R:()=>s,x:()=>c});var r=o(6540);const i={},n=r.createContext(i);function s(t){const e=r.useContext(n);return r.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function c(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(i):t.components||i:s(t.components),r.createElement(n.Provider,{value:e},t.children)}}}]);