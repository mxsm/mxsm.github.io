"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[13669],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>v});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=d(n),v=r,u=p["".concat(s,".").concat(v)]||p[v]||m[v]||i;return n?a.createElement(u,o(o({ref:t},l),{},{components:n})):a.createElement(u,o({ref:t},l))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},47758:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(67294),r=n(86010),i=n(39960),o=n(44996);const c="card_7QME";const s=function(e){const t=void 0===e.href,n=void 0!==e.href&&/^http/.test(e.href),s="undefined"===e.header?null:a.createElement("header",{className:"Card-header"},e.header),d=e.hoverIcon||e.icon,l=a.createElement(a.Fragment,null,e.img&&a.createElement("img",{src:(0,o.Z)(e.img),className:"Card-image"}),a.createElement("div",{className:"Card-container"},(e.icon||d)&&a.createElement("div",{className:"Card-icon-row"},e.icon&&a.createElement("img",{src:(0,o.Z)(e.icon),className:"Card-icon Card-icon-default"}),d&&a.createElement("img",{src:(0,o.Z)(d),className:"Card-icon Card-icon-hover"})),e.ionicon&&a.createElement("ion-icon",{name:e.ionicon,className:"Card-ionicon"}),e.iconset&&a.createElement("div",{className:"Card-iconset__container"},e.iconset.split(",").map(((t,n)=>a.createElement("img",{src:(0,o.Z)(t),className:"Card-icon "+(n===e.activeIndex?"Card-icon-active":""),"data-index":n,key:n})))),e.header&&s,a.createElement("div",{className:"Card-content"},e.children))),m=(0,r.Z)({"Card-with-image":void 0!==e.img,"Card-without-image":void 0===e.img,"Card-size-lg":"lg"===e.size,[e.className]:e.className});return t?a.createElement("docs-card",{class:m},a.createElement("div",{className:(0,r.Z)(c,"docs-card")},l)):n?a.createElement("docs-card",{class:m},a.createElement("a",{className:(0,r.Z)(c,"docs-card"),href:e.href,target:"_blank"},l)):a.createElement("docs-card",{class:m},a.createElement(i.default,{to:e.href,className:(0,r.Z)(c,"docs-card")},l))}},53445:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(67294);const r=function(e){return a.createElement("docs-cards",{class:e.className},e.children)}},69653:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(44996),r=n(86010),i=n(67294);const o="nativeEnterprise_4cMM";function c(e){return i.createElement("a",{className:(0,r.Z)(e.className,o),href:"https://ionicframework.com/native"},i.createElement("div",{className:"image-wrapper"},i.createElement("img",{src:(0,a.Z)("/img/native/native-enterprise@2x.png"),width:"476",height:"228"})),i.createElement("div",{className:"heading-group"},i.createElement("header",null,"Ionic Native Enterprise Edition"),i.createElement("p",null,"Premium, supported Capacitor and Cordova plugins, third-party integrations, and pre-built native solutions for building enterprise-grade apps.")))}},44380:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>d,default:()=>v,frontMatter:()=>s,metadata:()=>l,toc:()=>m});var a=n(87462),r=(n(67294),n(3905)),i=n(47758),o=n(53445),c=n(69653);const s={title:"Native APIs",hide_table_of_contents:!0},d=void 0,l={unversionedId:"native",id:"version-v5/native",isDocsHomePage:!1,title:"Native APIs",description:"Native APIs - Build Open-Source Native Application Experiences",source:"@site/versioned_docs/version-v5/native.md",sourceDirName:".",slug:"/native",permalink:"/cn/docs/v5/native",editUrl:"https://crowdin.com/project/ionic-docs",tags:[],version:"v5",frontMatter:{title:"Native APIs",hide_table_of_contents:!0},sidebar:"version-v5/native",next:{title:"Setup",permalink:"/cn/docs/v5/native/community"}},m=[],p={toc:m};function v(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("title",null,"Native APIs - Build Open-Source Native Application Experiences"),(0,r.kt)("meta",{name:"description",content:"Build native application experiences with open-source Native APIs. Easily add native device functionality to any Ionic app with Capacitor or Cordova."}),(0,r.kt)("style",null,"\n    :root {\n      --doc-item-container-width: 60rem;\n    }\n  ")),(0,r.kt)("p",null,"Build native-powered app experiences with a collection of open source and premium plugins and integrations that make it easy to add native device functionality to any Ionic app with Capacitor or Cordova."),(0,r.kt)("intro-end",null),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("a",{parentName:"p",href:"https://ionicframework.com/blog/a-new-chapter-for-ionic-native/"},"Read about the changes")," coming to the Ionic Native project."))),(0,r.kt)(o.Z,{mdxType:"DocsCards"},(0,r.kt)(i.Z,{header:"Capacitor plugins",img:"/img/native/capacitor@2x.png",href:"https://capacitorjs.com/docs/plugins",mdxType:"DocsCard"},(0,r.kt)("p",null,"A modern, open source native runtime built and maintained by the Ionic team and the Capacitor community. Our recommended native solution.")),(0,r.kt)(i.Z,{header:"Cordova plugins",img:"/img/native/cordova@2x.png",href:"/native/community",mdxType:"DocsCard"},(0,r.kt)("p",null,"A collection of free Cordova plugins, built and maintained by the community, with TypeScript wrappers and a consistent API and naming convention."))),(0,r.kt)(c.Z,{mdxType:"NativeEnterpriseCard"}),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"These docs are for apps built with Ionic Framework 4.0.0 and greater. For older Ionic v3 projects, please ",(0,r.kt)("a",{parentName:"p",href:"https://ionicframework.com/docs/v3/native/"},"see here"),"."))))}v.isMDXComponent=!0}}]);