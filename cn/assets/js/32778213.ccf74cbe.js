"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[47762],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||r;return n?o.createElement(f,i(i({ref:t},c),{},{components:n})):o.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},37783:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(67294);const a="tableOfContentsInline_0DDH";var r=n(25002);const i=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:i}=e;return o.createElement("div",{className:a},o.createElement(r.Z,{toc:t,minHeadingLevel:n,maxHeadingLevel:i,className:"table-of-contents",linkClassName:null}))}},25002:(e,t,n)=>{n.d(t,{Z:()=>l});var o=n(87462),a=n(67294),r=n(89521);function i(e){let{toc:t,className:n,linkClassName:o,isChild:r}=e;return t.length?a.createElement("ul",{className:r?void 0:n},t.map((e=>a.createElement("li",{key:e.id},a.createElement("a",{href:`#${e.id}`,className:o??void 0,dangerouslySetInnerHTML:{__html:e.value}}),a.createElement(i,{isChild:!0,toc:e.children,className:n,linkClassName:o}))))):null}function l(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:l="table-of-contents__link",linkActiveClassName:s,minHeadingLevel:p,maxHeadingLevel:c,...m}=e;const u=(0,r.LU)(),d=p??u.tableOfContents.minHeadingLevel,f=c??u.tableOfContents.maxHeadingLevel,h=(0,r.DA)({toc:t,minHeadingLevel:d,maxHeadingLevel:f}),v=(0,a.useMemo)((()=>{if(l&&s)return{linkClassName:l,linkActiveClassName:s,minHeadingLevel:d,maxHeadingLevel:f}}),[l,s,d,f]);return(0,r.Si)(v),a.createElement(i,(0,o.Z)({toc:h,className:n,linkClassName:l},m))}},49679:(e,t,n)=>{n.d(t,{Z:()=>p});var o=n(87462),a=n(67294),r=n(86010),i=n(44996),l=n(39960);const s="encapsulationPill_mkeM";function p(e){let{type:t,...n}=e;const p=(0,i.Z)(`reference/glossary#${t}`);return a.createElement(l.default,(0,o.Z)({to:p},n,{className:(0,r.Z)(n.className,"encapsulation-pill",s)}),t)}},30422:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>b,default:()=>N,frontMatter:()=>y,metadata:()=>g,toc:()=>C});var o=n(87462),a=(n(67294),n(3905)),r=n(37783);const i={toc:[]};function l(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No properties available for this component."))}l.isMDXComponent=!0;const s={toc:[]};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No events available for this component."))}p.isMDXComponent=!0;const c={toc:[]};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No public methods available for this component."))}m.isMDXComponent=!0;const u={toc:[]};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No CSS shadow parts available for this component."))}d.isMDXComponent=!0;const f={toc:[]};function h(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No CSS custom properties available for this component."))}h.isMDXComponent=!0;const v={toc:[]};function k(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No slots available for this component."))}k.isMDXComponent=!0;n(49679);const y={title:"ion-app",hide_table_of_contents:!0},b=void 0,g={unversionedId:"api/app",id:"api/app",isDocsHomePage:!1,title:"ion-app",description:"ion-app: Container Element for an Ionic Application",source:"@site/docs/api/app.md",sourceDirName:"api",slug:"/api/app",permalink:"/cn/docs/api/app",editUrl:"https://crowdin.com/project/ionic-docs",tags:[],version:"current",frontMatter:{title:"ion-app",hide_table_of_contents:!0},sidebar:"api",previous:{title:"ion-chip",permalink:"/cn/docs/api/chip"},next:{title:"ion-content",permalink:"/cn/docs/api/content"}},C=[{value:"Properties",id:"properties",children:[],level:2},{value:"Events",id:"events",children:[],level:2},{value:"Methods",id:"methods",children:[],level:2},{value:"CSS Shadow Parts",id:"css-shadow-parts",children:[],level:2},{value:"CSS Custom Properties",id:"css-custom-properties",children:[],level:2},{value:"Slots",id:"slots",children:[],level:2}],w={toc:C};function N(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},w,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("title",null,"ion-app: Container Element for an Ionic Application"),(0,a.kt)("meta",{name:"description",content:"ion-app is a container element for an Ionic application. Apps can have many Ionic components including menus, headers, content, and footers. Read to learn more."})),(0,a.kt)("h2",{className:"table-of-contents__title"},"Contents"),(0,a.kt)(r.Z,{toc:C,maxHeadingLevel:2,mdxType:"TOCInline"}),(0,a.kt)("p",null,"App is a container element for an Ionic application. There should only be one ",(0,a.kt)("inlineCode",{parentName:"p"},"<ion-app>")," element per project. An app can have many Ionic components including menus, headers, content, and footers. The overlay components get appended to the ",(0,a.kt)("inlineCode",{parentName:"p"},"<ion-app>")," when they are presented."),(0,a.kt)("p",null,"Using ",(0,a.kt)("inlineCode",{parentName:"p"},"ion-app")," enables the following behaviors:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../developing/keyboard#keyboard-lifecycle-events"},"Keyboard Lifecycle Events")," without the need for any native plugins"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../developing/hardware-back-button"},"Hardware Back Button Listeners")," for customizing the hardware back button behavior on Android devices"),(0,a.kt)("li",{parentName:"ul"},"Status bar support in Capacitor or Cordova which allows users to scroll to the top of the view by tapping the status bar"),(0,a.kt)("li",{parentName:"ul"},"Scroll assist utilities which scroll the content so focused text inputs are not covered by the on-screen keyboard"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./ripple-effect"},"Ripple effect")," when activating buttons on Material Design mode"),(0,a.kt)("li",{parentName:"ul"},"Other tap and focus utilities which make the experience of using an Ionic app feel more native")),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)(l,{mdxType:"Props"}),(0,a.kt)("h2",{id:"events"},"Events"),(0,a.kt)(p,{mdxType:"Events"}),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)(m,{mdxType:"Methods"}),(0,a.kt)("h2",{id:"css-shadow-parts"},"CSS Shadow Parts"),(0,a.kt)(d,{mdxType:"Parts"}),(0,a.kt)("h2",{id:"css-custom-properties"},"CSS Custom Properties"),(0,a.kt)(h,{mdxType:"CustomProps"}),(0,a.kt)("h2",{id:"slots"},"Slots"),(0,a.kt)(k,{mdxType:"Slots"}))}N.isMDXComponent=!0}}]);