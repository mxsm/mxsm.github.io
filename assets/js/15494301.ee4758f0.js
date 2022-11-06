"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[90514],{3905:(t,n,e)=>{e.d(n,{Zo:()=>u,kt:()=>k});var o=e(67294);function l(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function r(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,o)}return e}function a(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?r(Object(e),!0).forEach((function(n){l(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function c(t,n){if(null==t)return{};var e,o,l=function(t,n){if(null==t)return{};var e,o,l={},r=Object.keys(t);for(o=0;o<r.length;o++)e=r[o],n.indexOf(e)>=0||(l[e]=t[e]);return l}(t,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(o=0;o<r.length;o++)e=r[o],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(l[e]=t[e])}return l}var i=o.createContext({}),p=function(t){var n=o.useContext(i),e=n;return t&&(e="function"==typeof t?t(n):a(a({},n),t)),e},u=function(t){var n=p(t.components);return o.createElement(i.Provider,{value:n},t.children)},s={inlineCode:"code",wrapper:function(t){var n=t.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(t,n){var e=t.components,l=t.mdxType,r=t.originalType,i=t.parentName,u=c(t,["components","mdxType","originalType","parentName"]),d=p(e),k=l,m=d["".concat(i,".").concat(k)]||d[k]||s[k]||r;return e?o.createElement(m,a(a({ref:n},u),{},{components:e})):o.createElement(m,a({ref:n},u))}));function k(t,n){var e=arguments,l=n&&n.mdxType;if("string"==typeof t||l){var r=e.length,a=new Array(r);a[0]=d;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=t,c.mdxType="string"==typeof t?t:l,a[1]=c;for(var p=2;p<r;p++)a[p]=e[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,e)}d.displayName="MDXCreateElement"},96252:(t,n,e)=>{e.r(n),e.d(n,{contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>i});var o=e(87462),l=(e(67294),e(3905));const r={title:"ionic capacitor sync",sidebar_label:"capacitor sync"},a=void 0,c={unversionedId:"cli/commands/capacitor-sync",id:"cli/commands/capacitor-sync",isDocsHomePage:!1,title:"ionic capacitor sync",description:"Ionic Capacitor Sync Command: Copy + Update Android/iOS Projects",source:"@site/docs/cli/commands/capacitor-sync.md",sourceDirName:"cli/commands",slug:"/cli/commands/capacitor-sync",permalink:"/docs/cli/commands/capacitor-sync",editUrl:"https://github.com/ionic-team/ionic-cli/edit/develop/packages/@ionic/cli/src/commands/capacitor/sync.ts",tags:[],version:"current",frontMatter:{title:"ionic capacitor sync",sidebar_label:"capacitor sync"},sidebar:"cli",previous:{title:"capacitor run",permalink:"/docs/cli/commands/capacitor-run"},next:{title:"capacitor update",permalink:"/docs/cli/commands/capacitor-update"}},i=[{value:"Inputs",id:"inputs",children:[],level:2},{value:"Options",id:"options",children:[],level:2},{value:"Advanced Options",id:"advanced-options",children:[],level:2}],p={toc:i};function u(t){let{components:n,...e}=t;return(0,l.kt)("wrapper",(0,o.Z)({},p,e,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("head",null,(0,l.kt)("title",null,"Ionic Capacitor Sync Command: Copy + Update Android/iOS Projects"),(0,l.kt)("meta",{name:"description",content:"Sync (copy + update) an Android or iOS device project with Ionic Capacitor Sync. Read our documentation to learn more about this command on Ionic apps."})),(0,l.kt)("p",null,"Sync (copy + update) an Ionic project"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ ionic capacitor sync [options]\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"ionic capacitor sync")," will do the following:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Perform an Ionic build, which compiles web assets"),(0,l.kt)("li",{parentName:"ul"},"Copy web assets to Capacitor native platform(s)"),(0,l.kt)("li",{parentName:"ul"},"Update Capacitor native platform(s) and dependencies"),(0,l.kt)("li",{parentName:"ul"},"Install any discovered Capacitor or Cordova plugins")),(0,l.kt)("h2",{id:"inputs"},"Inputs"),(0,l.kt)("table",{className:"reference-table"},(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",{colSpan:"2"},(0,l.kt)("h3",null,"platform")))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Description"),(0,l.kt)("td",null,(0,l.kt)("p",null,"The platform to sync (e.g. ",(0,l.kt)("code",null,"android"),", ",(0,l.kt)("code",null,"ios"),")"))))),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("table",{className:"reference-table"},(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",{colSpan:"2"},(0,l.kt)("h3",null,(0,l.kt)("a",{href:"#option-build",id:"option-build"},"--no-build"))))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Description"),(0,l.kt)("td",null,(0,l.kt)("p",null,"Do not invoke an Ionic build")))),(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",{colSpan:"2"},(0,l.kt)("h3",null,(0,l.kt)("a",{href:"#option-prod",id:"option-prod"},"--prod"))))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Description"),(0,l.kt)("td",null,(0,l.kt)("p",null,"Flag to use the ",(0,l.kt)("code",null,"production")," configuration"))))),(0,l.kt)("h2",{id:"advanced-options"},"Advanced Options"),(0,l.kt)("table",{className:"reference-table"},(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",{colSpan:"2"},(0,l.kt)("h3",null,(0,l.kt)("a",{href:"#option-configuration",id:"option-configuration"},"--configuration",(0,l.kt)("span",{class:"option-spec"}," =<conf>")))))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Description"),(0,l.kt)("td",null,(0,l.kt)("div",null,(0,l.kt)("p",null,"Specify the configuration to use.")))),(0,l.kt)("tr",null,(0,l.kt)("th",null,"Aliases"),(0,l.kt)("td",null,(0,l.kt)("code",null,"-c")))),(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",{colSpan:"2"},(0,l.kt)("h3",null,(0,l.kt)("a",{href:"#option-source-map",id:"option-source-map"},"--source-map"))))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Description"),(0,l.kt)("td",null,(0,l.kt)("div",null,(0,l.kt)("p",null,"Output source maps"))))),(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",{colSpan:"2"},(0,l.kt)("h3",null,(0,l.kt)("a",{href:"#option-watch",id:"option-watch"},"--watch"))))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Description"),(0,l.kt)("td",null,(0,l.kt)("div",null,(0,l.kt)("p",null,"Rebuild when files change")))))))}u.isMDXComponent=!0}}]);