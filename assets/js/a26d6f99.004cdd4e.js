"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[38597],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),c=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),k=r,m=d["".concat(p,".").concat(k)]||d[k]||s[k]||l;return n?o.createElement(m,a(a({ref:t},u),{},{components:n})):o.createElement(m,a({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,a=new Array(l);a[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var c=2;c<l;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},40149:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var o=n(87462),r=(n(67294),n(3905));const l={title:"ionic cordova prepare",sidebar_label:"cordova prepare"},a=void 0,i={unversionedId:"cli/commands/cordova-prepare",id:"cli/commands/cordova-prepare",isDocsHomePage:!1,title:"ionic cordova prepare",description:"Cordova Prepare: Copy iOS/Android Assets for Native Builds",source:"@site/docs/cli/commands/cordova-prepare.md",sourceDirName:"cli/commands",slug:"/cli/commands/cordova-prepare",permalink:"/docs/cli/commands/cordova-prepare",editUrl:"https://github.com/ionic-team/ionic-cli/edit/develop/packages/@ionic/cli/src/commands/cordova/prepare.ts",tags:[],version:"current",frontMatter:{title:"ionic cordova prepare",sidebar_label:"cordova prepare"},sidebar:"cli",previous:{title:"cordova plugin",permalink:"/docs/cli/commands/cordova-plugin"},next:{title:"cordova requirements",permalink:"/docs/cli/commands/cordova-requirements"}},p=[{value:"Examples",id:"examples",children:[],level:2},{value:"Inputs",id:"inputs",children:[],level:2},{value:"Options",id:"options",children:[],level:2},{value:"Advanced Options",id:"advanced-options",children:[],level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("title",null,"Cordova Prepare: Copy iOS/Android Assets for Native Builds"),(0,r.kt)("meta",{name:"description",content:"Ionic Cordova Prepare copies iOS and Android assets to Cordova platforms, preparing them for native builds. Read for examples and to learn more about usage."})),(0,r.kt)("p",null,"Copies assets to Cordova platforms, preparing them for native builds"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ ionic cordova prepare [options]\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ionic cordova prepare")," will do the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Perform an Ionic build, which compiles web assets to ",(0,r.kt)("strong",{parentName:"li"},"www/"),"."),(0,r.kt)("li",{parentName:"ul"},"Copy the ",(0,r.kt)("strong",{parentName:"li"},"www/")," directory into your Cordova platforms."),(0,r.kt)("li",{parentName:"ul"},"Transform ",(0,r.kt)("strong",{parentName:"li"},"config.xml")," into platform-specific manifest files."),(0,r.kt)("li",{parentName:"ul"},"Copy icons and splash screens from ",(0,r.kt)("strong",{parentName:"li"},"resources/")," to into your Cordova platforms."),(0,r.kt)("li",{parentName:"ul"},"Copy plugin files into specified platforms.")),(0,r.kt)("p",null,"You may wish to use ",(0,r.kt)("inlineCode",{parentName:"p"},"ionic cordova prepare")," if you run your project with Android Studio or Xcode."),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ ionic cordova prepare \n$ ionic cordova prepare ios\n$ ionic cordova prepare android\n")),(0,r.kt)("h2",{id:"inputs"},"Inputs"),(0,r.kt)("table",{className:"reference-table"},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{colSpan:"2"},(0,r.kt)("h3",null,"platform")))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Description"),(0,r.kt)("td",null,(0,r.kt)("p",null,"The platform you would like to prepare (e.g. ",(0,r.kt)("code",null,"android"),", ",(0,r.kt)("code",null,"ios"),")"))))),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("table",{className:"reference-table"},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{colSpan:"2"},(0,r.kt)("h3",null,(0,r.kt)("a",{href:"#option-build",id:"option-build"},"--no-build"))))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Description"),(0,r.kt)("td",null,(0,r.kt)("p",null,"Do not invoke an Ionic build")))),(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{colSpan:"2"},(0,r.kt)("h3",null,(0,r.kt)("a",{href:"#option-prod",id:"option-prod"},"--prod"))))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Description"),(0,r.kt)("td",null,(0,r.kt)("p",null,"Flag to use the ",(0,r.kt)("code",null,"production")," configuration"))))),(0,r.kt)("h2",{id:"advanced-options"},"Advanced Options"),(0,r.kt)("table",{className:"reference-table"},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{colSpan:"2"},(0,r.kt)("h3",null,(0,r.kt)("a",{href:"#option-configuration",id:"option-configuration"},"--configuration",(0,r.kt)("span",{class:"option-spec"}," =<conf>")))))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Description"),(0,r.kt)("td",null,(0,r.kt)("div",null,(0,r.kt)("p",null,"Specify the configuration to use.")))),(0,r.kt)("tr",null,(0,r.kt)("th",null,"Aliases"),(0,r.kt)("td",null,(0,r.kt)("code",null,"-c")))),(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{colSpan:"2"},(0,r.kt)("h3",null,(0,r.kt)("a",{href:"#option-source-map",id:"option-source-map"},"--source-map"))))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Description"),(0,r.kt)("td",null,(0,r.kt)("div",null,(0,r.kt)("p",null,"Output source maps"))))),(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{colSpan:"2"},(0,r.kt)("h3",null,(0,r.kt)("a",{href:"#option-watch",id:"option-watch"},"--watch"))))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Description"),(0,r.kt)("td",null,(0,r.kt)("div",null,(0,r.kt)("p",null,"Rebuild when files change")))))))}u.isMDXComponent=!0}}]);