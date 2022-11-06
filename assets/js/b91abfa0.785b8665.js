"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[50482],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>k});var l=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e){if(null==t)return{};var n,l,o=function(t,e){if(null==t)return{};var n,l,o={},r=Object.keys(t);for(l=0;l<r.length;l++)n=r[l],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(l=0;l<r.length;l++)n=r[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var i=l.createContext({}),p=function(t){var e=l.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):c(c({},e),t)),n},u=function(t){var e=p(t.components);return l.createElement(i.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},d=l.forwardRef((function(t,e){var n=t.components,o=t.mdxType,r=t.originalType,i=t.parentName,u=a(t,["components","mdxType","originalType","parentName"]),d=p(n),k=o,m=d["".concat(i,".").concat(k)]||d[k]||s[k]||r;return n?l.createElement(m,c(c({ref:e},u),{},{components:n})):l.createElement(m,c({ref:e},u))}));function k(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=n.length,c=new Array(r);c[0]=d;var a={};for(var i in e)hasOwnProperty.call(e,i)&&(a[i]=e[i]);a.originalType=t,a.mdxType="string"==typeof t?t:o,c[1]=a;for(var p=2;p<r;p++)c[p]=n[p];return l.createElement.apply(null,c)}return l.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1602:(t,e,n)=>{n.r(e),n.d(e,{contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>i});var l=n(87462),o=(n(67294),n(3905));const r={sidebar_label:"capacitor sync"},c="ionic capacitor sync",a={unversionedId:"cli/commands/capacitor-sync",id:"version-v5/cli/commands/capacitor-sync",isDocsHomePage:!1,title:"ionic capacitor sync",description:"Sync (copy + update) an Ionic project",source:"@site/versioned_docs/version-v5/cli/commands/capacitor-sync.md",sourceDirName:"cli/commands",slug:"/cli/commands/capacitor-sync",permalink:"/docs/v5/cli/commands/capacitor-sync",editUrl:"https://github.com/ionic-team/ionic-cli/edit/develop/packages/@ionic/cli/src/commands/capacitor/sync.ts",tags:[],version:"v5",frontMatter:{sidebar_label:"capacitor sync"},sidebar:"version-v5/cli",previous:{title:"capacitor run",permalink:"/docs/v5/cli/commands/capacitor-run"},next:{title:"capacitor update",permalink:"/docs/v5/cli/commands/capacitor-update"}},i=[{value:"Inputs",id:"inputs",children:[],level:2},{value:"Options",id:"options",children:[],level:2},{value:"Advanced Options",id:"advanced-options",children:[],level:2}],p={toc:i};function u(t){let{components:e,...n}=t;return(0,o.kt)("wrapper",(0,l.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ionic-capacitor-sync"},"ionic capacitor sync"),(0,o.kt)("p",null,"Sync (copy + update) an Ionic project"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"ionic capacitor sync [options]\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ionic capacitor sync")," will do the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Perform an Ionic build, which compiles web assets"),(0,o.kt)("li",{parentName:"ul"},"Copy web assets to Capacitor native platform(s)"),(0,o.kt)("li",{parentName:"ul"},"Update Capacitor native platform(s) and dependencies"),(0,o.kt)("li",{parentName:"ul"},"Install any discovered Capacitor or Cordova plugins")),(0,o.kt)("h2",{id:"inputs"},"Inputs"),(0,o.kt)("table",{className:"reference-table"},(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",{colSpan:"2"},(0,o.kt)("h3",null,"platform")))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Description"),(0,o.kt)("td",null,(0,o.kt)("p",null,"The platform to sync (e.g. ",(0,o.kt)("code",null,"android"),", ",(0,o.kt)("code",null,"ios"),", ",(0,o.kt)("code",null,"electron"),")"))))),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("table",{className:"reference-table"},(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",{colSpan:"2"},(0,o.kt)("h3",null,(0,o.kt)("a",{href:"#option-build",id:"option-build"},"--no-build"))))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Description"),(0,o.kt)("td",null,(0,o.kt)("p",null,"Do not invoke an Ionic build")))),(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",{colSpan:"2"},(0,o.kt)("h3",null,(0,o.kt)("a",{href:"#option-prod",id:"option-prod"},"--prod"))))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Description"),(0,o.kt)("td",null,(0,o.kt)("p",null,"Flag to use the ",(0,o.kt)("code",null,"production")," configuration"))))),(0,o.kt)("h2",{id:"advanced-options"},"Advanced Options"),(0,o.kt)("table",{className:"reference-table"},(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",{colSpan:"2"},(0,o.kt)("h3",null,(0,o.kt)("a",{href:"#option-configuration",id:"option-configuration"},"--configuration",(0,o.kt)("span",{class:"option-spec"}," =<conf>")))))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Description"),(0,o.kt)("td",null,(0,o.kt)("div",null,(0,o.kt)("p",null,"Specify the configuration to use.")))),(0,o.kt)("tr",null,(0,o.kt)("th",null,"Aliases"),(0,o.kt)("td",null,(0,o.kt)("code",null,"-c")))),(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",{colSpan:"2"},(0,o.kt)("h3",null,(0,o.kt)("a",{href:"#option-source-map",id:"option-source-map"},"--source-map"))))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Description"),(0,o.kt)("td",null,(0,o.kt)("div",null,(0,o.kt)("p",null,"Output source maps"))))),(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",{colSpan:"2"},(0,o.kt)("h3",null,(0,o.kt)("a",{href:"#option-watch",id:"option-watch"},"--watch"))))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Description"),(0,o.kt)("td",null,(0,o.kt)("div",null,(0,o.kt)("p",null,"Rebuild when files change")))))))}u.isMDXComponent=!0}}]);