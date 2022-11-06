"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[20690],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>c});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),p=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=p(t.components);return a.createElement(d.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),k=p(n),c=r,u=k["".concat(d,".").concat(c)]||k[c]||s[c]||l;return n?a.createElement(u,i(i({ref:e},m),{},{components:n})):a.createElement(u,i({ref:e},m))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=k;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},37783:(t,e,n)=>{n.d(e,{Z:()=>i});var a=n(67294);const r="tableOfContentsInline_0DDH";var l=n(25002);const i=function(t){let{toc:e,minHeadingLevel:n,maxHeadingLevel:i}=t;return a.createElement("div",{className:r},a.createElement(l.Z,{toc:e,minHeadingLevel:n,maxHeadingLevel:i,className:"table-of-contents",linkClassName:null}))}},25002:(t,e,n)=>{n.d(e,{Z:()=>o});var a=n(87462),r=n(67294),l=n(89521);function i(t){let{toc:e,className:n,linkClassName:a,isChild:l}=t;return e.length?r.createElement("ul",{className:l?void 0:n},e.map((t=>r.createElement("li",{key:t.id},r.createElement("a",{href:`#${t.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:t.value}}),r.createElement(i,{isChild:!0,toc:t.children,className:n,linkClassName:a}))))):null}function o(t){let{toc:e,className:n="table-of-contents table-of-contents__left-border",linkClassName:o="table-of-contents__link",linkActiveClassName:d,minHeadingLevel:p,maxHeadingLevel:m,...s}=t;const k=(0,l.LU)(),c=p??k.tableOfContents.minHeadingLevel,u=m??k.tableOfContents.maxHeadingLevel,N=(0,l.DA)({toc:e,minHeadingLevel:c,maxHeadingLevel:u}),g=(0,r.useMemo)((()=>{if(o&&d)return{linkClassName:o,linkActiveClassName:d,minHeadingLevel:c,maxHeadingLevel:u}}),[o,d,c,u]);return(0,l.Si)(g),r.createElement(i,(0,a.Z)({toc:N,className:n,linkClassName:o},s))}},49679:(t,e,n)=>{n.d(e,{Z:()=>p});var a=n(87462),r=n(67294),l=n(86010),i=n(44996),o=n(39960);const d="encapsulationPill_mkeM";function p(t){let{type:e,...n}=t;const p=(0,i.Z)(`reference/glossary#${e}`);return r.createElement(o.default,(0,a.Z)({to:p},n,{className:(0,l.Z)(n.className,"encapsulation-pill",d)}),e)}},41874:(t,e,n)=>{n.r(e),n.d(e,{contentTitle:()=>y,default:()=>x,frontMatter:()=>b,metadata:()=>v,toc:()=>C});var a=n(87462),r=(n(67294),n(3905)),l=n(37783);const i={toc:[{value:"color",id:"color",children:[],level:3},{value:"href",id:"href",children:[],level:3},{value:"rel",id:"rel",children:[],level:3},{value:"routerAnimation",id:"routeranimation",children:[],level:3},{value:"routerDirection",id:"routerdirection",children:[],level:3},{value:"target",id:"target",children:[],level:3}]};function o(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},i,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"color"},"color"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Description")),(0,r.kt)("td",{parentName:"tr",align:null},"The color to use from your application's color palette. Default options are: ",(0,r.kt)("inlineCode",{parentName:"td"},'"primary"'),", ",(0,r.kt)("inlineCode",{parentName:"td"},'"secondary"'),", ",(0,r.kt)("inlineCode",{parentName:"td"},'"tertiary"'),", ",(0,r.kt)("inlineCode",{parentName:"td"},'"success"'),", ",(0,r.kt)("inlineCode",{parentName:"td"},'"warning"'),", ",(0,r.kt)("inlineCode",{parentName:"td"},'"danger"'),", ",(0,r.kt)("inlineCode",{parentName:"td"},'"light"'),", ",(0,r.kt)("inlineCode",{parentName:"td"},'"medium"'),", and ",(0,r.kt)("inlineCode",{parentName:"td"},'"dark"'),". For more information on colors, see ",(0,r.kt)("a",{parentName:"td",href:"/docs/theming/basics"},"theming"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Attribute")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"color"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Type")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"danger" \uff5c "dark" \uff5c "light" \uff5c "medium" \uff5c "primary" \uff5c "secondary" \uff5c "success" \uff5c "tertiary" \uff5c "warning" \uff5c string & Record<never, never> \uff5c undefined'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Default")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,r.kt)("h3",{id:"href"},"href"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Description")),(0,r.kt)("td",{parentName:"tr",align:null},"Contains a URL or a URL fragment that the hyperlink points to. If this property is set, an anchor tag will be rendered.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Attribute")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"href"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Type")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string \uff5c undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Default")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,r.kt)("h3",{id:"rel"},"rel"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Description")),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies the relationship of the target object to the link object. The value is a space-separated list of ",(0,r.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types"},"link types"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Attribute")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"rel"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Type")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string \uff5c undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Default")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,r.kt)("h3",{id:"routeranimation"},"routerAnimation"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Description")),(0,r.kt)("td",{parentName:"tr",align:null},"When using a router, it specifies the transition animation when navigating to another page using ",(0,r.kt)("inlineCode",{parentName:"td"},"href"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Attribute")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Type")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"((baseEl: any, opts?: any) => Animation) \uff5c undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Default")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,r.kt)("h3",{id:"routerdirection"},"routerDirection"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Description")),(0,r.kt)("td",{parentName:"tr",align:null},"When using a router, it specifies the transition direction when navigating to another page using ",(0,r.kt)("inlineCode",{parentName:"td"},"href"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Attribute")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"router-direction"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Type")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"back" \uff5c "forward" \uff5c "root"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Default")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"'forward'"))))),(0,r.kt)("h3",{id:"target"},"target"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Description")),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies where to display the linked URL. Only applies when an ",(0,r.kt)("inlineCode",{parentName:"td"},"href")," is provided. Special keywords: ",(0,r.kt)("inlineCode",{parentName:"td"},'"_blank"'),", ",(0,r.kt)("inlineCode",{parentName:"td"},'"_self"'),", ",(0,r.kt)("inlineCode",{parentName:"td"},'"_parent"'),", ",(0,r.kt)("inlineCode",{parentName:"td"},'"_top"'),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Attribute")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"target"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Type")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string \uff5c undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Default")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))))))}o.isMDXComponent=!0;const d={toc:[]};function p(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"No events available for this component."))}p.isMDXComponent=!0;const m={toc:[]};function s(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"No public methods available for this component."))}s.isMDXComponent=!0;const k={toc:[]};function c(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"No CSS shadow parts available for this component."))}c.isMDXComponent=!0;const u={toc:[]};function N(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--background")),(0,r.kt)("td",{parentName:"tr",align:null},"Background of the router link")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--color")),(0,r.kt)("td",{parentName:"tr",align:null},"Text color of the router link")))))}N.isMDXComponent=!0;const g={toc:[]};function h(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},g,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"No slots available for this component."))}h.isMDXComponent=!0;var f=n(49679);const b={title:"ion-router-link",hide_table_of_contents:!0,demoUrl:"/docs/demos/api/router-link/index.html",demoSourceUrl:"https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/router-link/index.html"},y=void 0,v={unversionedId:"api/router-link",id:"api/router-link",isDocsHomePage:!1,title:"ion-router-link",description:"Router Link | Navigating The ion-router-link Component",source:"@site/docs/api/router-link.md",sourceDirName:"api",slug:"/api/router-link",permalink:"/docs/api/router-link",editUrl:"https://github.com/ionic-team/ionic-docs/tree/main/docs/api/router-link.md",tags:[],version:"current",frontMatter:{title:"ion-router-link",hide_table_of_contents:!0,demoUrl:"/docs/demos/api/router-link/index.html",demoSourceUrl:"https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/router-link/index.html"},sidebar:"api",previous:{title:"ion-router",permalink:"/docs/api/router"},next:{title:"ion-router-outlet",permalink:"/docs/api/router-outlet"}},C=[{value:"Properties",id:"properties",children:[],level:2},{value:"Events",id:"events",children:[],level:2},{value:"Methods",id:"methods",children:[],level:2},{value:"CSS Shadow Parts",id:"css-shadow-parts",children:[],level:2},{value:"CSS Custom Properties",id:"css-custom-properties",children:[],level:2},{value:"Slots",id:"slots",children:[],level:2}],w={toc:C};function x(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},w,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("title",null,"Router Link | Navigating The ion-router-link Component"),(0,r.kt)("meta",{name:"description",content:"Use the ion-router-link component to navigate to a specified link. The router link can accept an href for location and a direction for the transition animation."})),(0,r.kt)(f.Z,{type:"shadow",mdxType:"EncapsulationPill"}),(0,r.kt)("h2",{className:"table-of-contents__title"},"Contents"),(0,r.kt)(l.Z,{toc:C,maxHeadingLevel:2,mdxType:"TOCInline"}),(0,r.kt)("p",null,"The router link component is used for navigating to a specified link. Similar to the browser's anchor tag, it can accept a href for the location, and a direction for the transition animation."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"}," Note: this component should only be used with vanilla and Stencil JavaScript projects. For Angular projects, use an ",(0,r.kt)("inlineCode",{parentName:"p"},"<a>")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"routerLink")," with the Angular router."))),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)(o,{mdxType:"Props"}),(0,r.kt)("h2",{id:"events"},"Events"),(0,r.kt)(p,{mdxType:"Events"}),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)(s,{mdxType:"Methods"}),(0,r.kt)("h2",{id:"css-shadow-parts"},"CSS Shadow Parts"),(0,r.kt)(c,{mdxType:"Parts"}),(0,r.kt)("h2",{id:"css-custom-properties"},"CSS Custom Properties"),(0,r.kt)(N,{mdxType:"CustomProps"}),(0,r.kt)("h2",{id:"slots"},"Slots"),(0,r.kt)(h,{mdxType:"Slots"}))}x.isMDXComponent=!0}}]);