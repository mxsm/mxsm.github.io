"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[424],{6251:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>c,metadata:()=>l,toc:()=>a});var r=n(4848),s=n(8453),o=n(3514);const c={title:"MQPushConsumer"},i=void 0,l={id:"rocketmq/rocketmq5/client/consumer/MQPushConsumer/index",title:"MQPushConsumer",description:"",source:"@site/docs/rocketmq/rocketmq5/03-client/02-consumer/01-MQPushConsumer/index.md",sourceDirName:"rocketmq/rocketmq5/03-client/02-consumer/01-MQPushConsumer",slug:"/rocketmq/rocketmq5/client/consumer/MQPushConsumer/",permalink:"/docs/rocketmq/rocketmq5/client/consumer/MQPushConsumer/",draft:!1,unlisted:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/rocketmq/rocketmq5/03-client/02-consumer/01-MQPushConsumer/index.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1719738085e3,frontMatter:{title:"MQPushConsumer"},sidebar:"rocketmq5",previous:{title:"Consumer(\u6d88\u8d39\u8005)",permalink:"/docs/rocketmq/rocketmq5/client/consumer/"},next:{title:"MQPushConsumer\u6e90\u7801\u5206\u6790",permalink:"/docs/rocketmq/rocketmq5/client/consumer/MQPushConsumer/MQPushConsumer-source"}},u={},a=[];function m(e){return(0,r.jsx)(o.A,{})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m()}},3514:(e,t,n)=>{n.d(t,{A:()=>g});n(6540);var r=n(4164),s=n(4142),o=n(8774),c=n(5846),i=n(6654),l=n(1312),u=n(1107);const a={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var m=n(4848);function d(e){let{href:t,children:n}=e;return(0,m.jsx)(o.A,{href:t,className:(0,r.A)("card padding--lg",a.cardContainer),children:n})}function h(e){let{href:t,icon:n,title:s,description:o}=e;return(0,m.jsxs)(d,{href:t,children:[(0,m.jsxs)(u.A,{as:"h2",className:(0,r.A)("text--truncate",a.cardTitle),title:s,children:[n," ",s]}),o&&(0,m.jsx)("p",{className:(0,r.A)("text--truncate",a.cardDescription),title:o,children:o})]})}function f(e){let{item:t}=e;const n=(0,s.Nr)(t),r=function(){const{selectMessage:e}=(0,c.W)();return t=>e(t,(0,l.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,m.jsx)(h,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function p(e){let{item:t}=e;const n=(0,i.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,s.cC)(t.docId??void 0);return(0,m.jsx)(h,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function x(e){let{item:t}=e;switch(t.type){case"link":return(0,m.jsx)(p,{item:t});case"category":return(0,m.jsx)(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function k(e){let{className:t}=e;const n=(0,s.$S)();return(0,m.jsx)(g,{items:n.items,className:t})}function g(e){const{items:t,className:n}=e;if(!t)return(0,m.jsx)(k,{...e});const o=(0,s.d1)(t);return(0,m.jsx)("section",{className:(0,r.A)("row",n),children:o.map(((e,t)=>(0,m.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,m.jsx)(x,{item:e})},t)))})}},5846:(e,t,n)=>{n.d(t,{W:()=>u});var r=n(6540),s=n(4586);const o=["zero","one","two","few","many","other"];function c(e){return o.filter((t=>e.includes(t)))}const i={locale:"en",pluralForms:c(["one","other"]),select:e=>1===e?"one":"other"};function l(){const{i18n:{currentLocale:e}}=(0,s.A)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:c(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),i}}),[e])}function u(){const e=l();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const s=n.select(t),o=n.pluralForms.indexOf(s);return r[Math.min(o,r.length-1)]}(n,t,e)}}},8453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>i});var r=n(6540);const s={},o=r.createContext(s);function c(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);