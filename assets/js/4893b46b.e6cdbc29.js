"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[3678],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>f});var n=r(7294);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,c=e.mdxType,o=e.originalType,l=e.parentName,m=a(e,["components","mdxType","originalType","parentName"]),u=s(r),p=c,f=u["".concat(l,".").concat(p)]||u[p]||d[p]||o;return r?n.createElement(f,i(i({ref:t},m),{},{components:r})):n.createElement(f,i({ref:t},m))}));function f(e,t){var r=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var o=r.length,i=new Array(o);i[0]=p;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[u]="string"==typeof e?e:c,i[1]=a;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},2991:(e,t,r)=>{r.d(t,{Z:()=>b});var n=r(7294),c=r(6010),o=r(2802),i=r(9960),a=r(3919),l=r(5999);const s="cardContainer_fWXF",m="cardTitle_rnsV",u="cardDescription_PWke";function d(e){let{href:t,children:r}=e;return n.createElement(i.Z,{href:t,className:(0,c.Z)("card padding--lg",s)},r)}function p(e){let{href:t,icon:r,title:o,description:i}=e;return n.createElement(d,{href:t},n.createElement("h2",{className:(0,c.Z)("text--truncate",m),title:o},r," ",o),i&&n.createElement("p",{className:(0,c.Z)("text--truncate",u),title:i},i))}function f(e){let{item:t}=e;const r=(0,o.Wl)(t);return r?n.createElement(p,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function y(e){let{item:t}=e;const r=(0,a.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",c=(0,o.xz)(t.docId??void 0);return n.createElement(p,{href:t.href,icon:r,title:t.label,description:c?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(y,{item:t});case"category":return n.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function k(e){let{className:t}=e;const r=(0,o.jA)();return n.createElement(b,{items:r.items,className:t})}function b(e){const{items:t,className:r}=e;if(!t)return n.createElement(k,e);const i=(0,o.MN)(t);return n.createElement("section",{className:(0,c.Z)("row",r)},i.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(g,{item:e})))))}},1760:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var n=r(7462),c=(r(7294),r(3905)),o=r(2991);const i={title:"\u751f\u4ea7\u8005"},a=void 0,l={unversionedId:"rocketmq/rocketmq5/client/producer/index",id:"rocketmq/rocketmq5/client/producer/index",title:"\u751f\u4ea7\u8005",description:"",source:"@site/docs/rocketmq/rocketmq5/client/producer/index.md",sourceDirName:"rocketmq/rocketmq5/client/producer",slug:"/rocketmq/rocketmq5/client/producer/",permalink:"/docs/rocketmq/rocketmq5/client/producer/",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/rocketmq/rocketmq5/client/producer/index.md",tags:[],version:"current",lastUpdatedBy:"SpaceOneT",lastUpdatedAt:1674220028,formattedLastUpdatedAt:"Jan 20, 2023",frontMatter:{title:"\u751f\u4ea7\u8005"},sidebar:"rocketmq5",previous:{title:"RocketMQ5.0 Controller DLedger\u6a21\u5f0f",permalink:"/docs/rocketmq/rocketmq5/client/dledger-controller"},next:{title:"\u804a\u804aRocketMQ5\u6d88\u606f\u53d1\u9001",permalink:"/docs/rocketmq/rocketmq5/client/producer/1message-send"}},s={},m=[],u={toc:m};function d(e){let{components:t,...r}=e;return(0,c.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)(o.Z,{mdxType:"DocCardList"}))}d.isMDXComponent=!0}}]);