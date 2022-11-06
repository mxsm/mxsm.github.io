"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[48531],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=d(n),u=r,k=m["".concat(p,".").concat(u)]||m[u]||c[u]||o;return n?a.createElement(k,l(l({ref:t},s),{},{components:n})):a.createElement(k,l({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var d=2;d<o;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},37783:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294);const r="tableOfContentsInline_0DDH";var o=n(25002);const l=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:l}=e;return a.createElement("div",{className:r},a.createElement(o.Z,{toc:t,minHeadingLevel:n,maxHeadingLevel:l,className:"table-of-contents",linkClassName:null}))}},25002:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(87462),r=n(67294),o=n(89521);function l(e){let{toc:t,className:n,linkClassName:a,isChild:o}=e;return t.length?r.createElement("ul",{className:o?void 0:n},t.map((e=>r.createElement("li",{key:e.id},r.createElement("a",{href:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(l,{isChild:!0,toc:e.children,className:n,linkClassName:a}))))):null}function i(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:i="table-of-contents__link",linkActiveClassName:p,minHeadingLevel:d,maxHeadingLevel:s,...c}=e;const m=(0,o.LU)(),u=d??m.tableOfContents.minHeadingLevel,k=s??m.tableOfContents.maxHeadingLevel,N=(0,o.DA)({toc:t,minHeadingLevel:u,maxHeadingLevel:k}),f=(0,r.useMemo)((()=>{if(i&&p)return{linkClassName:i,linkActiveClassName:p,minHeadingLevel:u,maxHeadingLevel:k}}),[i,p,u,k]);return(0,o.Si)(f),r.createElement(l,(0,a.Z)({toc:N,className:n,linkClassName:i},c))}},49679:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(87462),r=n(67294),o=n(86010),l=n(44996),i=n(39960);const p="encapsulationPill_mkeM";function d(e){let{type:t,...n}=e;const d=(0,l.Z)(`reference/glossary#${t}`);return r.createElement(i.default,(0,a.Z)({to:d},n,{className:(0,o.Z)(n.className,"encapsulation-pill",p)}),t)}},98009:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>v,default:()=>x,frontMatter:()=>g,metadata:()=>b,toc:()=>C});var a=n(87462),r=(n(67294),n(3905)),o=n(37783);const l={toc:[{value:"color",id:"color",children:[],level:3},{value:"mode",id:"mode",children:[],level:3}]};function i(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"color"},"color"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Description")),(0,r.kt)("td",{parentName:"tr",align:null},"The color to use from your application's color palette. Default options are: ",(0,r.kt)("inlineCode",{parentName:"td"},'"primary"'),", ",(0,r.kt)("inlineCode",{parentName:"td"},'"secondary"'),", ",(0,r.kt)("inlineCode",{parentName:"td"},'"tertiary"'),", ",(0,r.kt)("inlineCode",{parentName:"td"},'"success"'),", ",(0,r.kt)("inlineCode",{parentName:"td"},'"warning"'),", ",(0,r.kt)("inlineCode",{parentName:"td"},'"danger"'),", ",(0,r.kt)("inlineCode",{parentName:"td"},'"light"'),", ",(0,r.kt)("inlineCode",{parentName:"td"},'"medium"'),", and ",(0,r.kt)("inlineCode",{parentName:"td"},'"dark"'),". For more information on colors, see ",(0,r.kt)("a",{parentName:"td",href:"/docs/theming/basics"},"theming"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Attribute")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"color"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Type")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"danger" \uff5c "dark" \uff5c "light" \uff5c "medium" \uff5c "primary" \uff5c "secondary" \uff5c "success" \uff5c "tertiary" \uff5c "warning" \uff5c string & Record<never, never> \uff5c undefined'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Default")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,r.kt)("h3",{id:"mode"},"mode"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Description")),(0,r.kt)("td",{parentName:"tr",align:null},"The mode determines which platform styles to use.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Attribute")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"mode"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Type")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"ios" \uff5c "md"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Default")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))))))}i.isMDXComponent=!0;const p={toc:[]};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"No events available for this component."))}d.isMDXComponent=!0;const s={toc:[]};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"No public methods available for this component."))}c.isMDXComponent=!0;const m={toc:[]};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"No CSS shadow parts available for this component."))}u.isMDXComponent=!0;const k={toc:[]};function N(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--color")),(0,r.kt)("td",{parentName:"tr",align:null},"Color of the card title")))))}N.isMDXComponent=!0;const f={toc:[]};function h(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"No slots available for this component."))}h.isMDXComponent=!0;var y=n(49679);const g={title:"ion-card-title",hide_table_of_contents:!0},v=void 0,b={unversionedId:"api/card-title",id:"api/card-title",isDocsHomePage:!1,title:"ion-card-title",description:"ion-card-title | Ionic App Card Title Component and Properties",source:"@site/docs/api/card-title.md",sourceDirName:"api",slug:"/api/card-title",permalink:"/cn/docs/api/card-title",editUrl:"https://crowdin.com/project/ionic-docs",tags:[],version:"current",frontMatter:{title:"ion-card-title",hide_table_of_contents:!0},sidebar:"api",previous:{title:"ion-card-subtitle",permalink:"/cn/docs/api/card-subtitle"},next:{title:"ion-checkbox",permalink:"/cn/docs/api/checkbox"}},C=[{value:"Properties",id:"properties",children:[],level:2},{value:"Events",id:"events",children:[],level:2},{value:"Methods",id:"methods",children:[],level:2},{value:"CSS Shadow Parts",id:"css-shadow-parts",children:[],level:2},{value:"CSS Custom Properties",id:"css-custom-properties",children:[],level:2},{value:"Slots",id:"slots",children:[],level:2}],w={toc:C};function x(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},w,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("title",null,"ion-card-title | Ionic App Card Title Component and Properties"),(0,r.kt)("meta",{name:"description",content:"ion-card-title\xa0is a child component of\xa0ion-card. Read to learn more about card title properties and how this component is used on Ionic Framework apps."})),(0,r.kt)(y.Z,{type:"shadow",mdxType:"EncapsulationPill"}),(0,r.kt)("h2",{className:"table-of-contents__title"},"Contents"),(0,r.kt)(o.Z,{toc:C,maxHeadingLevel:2,mdxType:"TOCInline"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ion-card-title")," is a child component of ",(0,r.kt)("inlineCode",{parentName:"p"},"ion-card")),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)(i,{mdxType:"Props"}),(0,r.kt)("h2",{id:"events"},"Events"),(0,r.kt)(d,{mdxType:"Events"}),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)(c,{mdxType:"Methods"}),(0,r.kt)("h2",{id:"css-shadow-parts"},"CSS Shadow Parts"),(0,r.kt)(u,{mdxType:"Parts"}),(0,r.kt)("h2",{id:"css-custom-properties"},"CSS Custom Properties"),(0,r.kt)(N,{mdxType:"CustomProps"}),(0,r.kt)("h2",{id:"slots"},"Slots"),(0,r.kt)(h,{mdxType:"Slots"}))}x.isMDXComponent=!0}}]);