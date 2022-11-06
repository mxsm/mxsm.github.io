"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[3439],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>d});var l=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e){if(null==t)return{};var n,l,o=function(t,e){if(null==t)return{};var n,l,o={},r=Object.keys(t);for(l=0;l<r.length;l++)n=r[l],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(l=0;l<r.length;l++)n=r[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var u=l.createContext({}),c=function(t){var e=l.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=c(t.components);return l.createElement(u.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},s=l.forwardRef((function(t,e){var n=t.components,o=t.mdxType,r=t.originalType,u=t.parentName,p=a(t,["components","mdxType","originalType","parentName"]),s=c(n),d=o,h=s["".concat(u,".").concat(d)]||s[d]||k[d]||r;return n?l.createElement(h,i(i({ref:e},p),{},{components:n})):l.createElement(h,i({ref:e},p))}));function d(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=n.length,i=new Array(r);i[0]=s;var a={};for(var u in e)hasOwnProperty.call(e,u)&&(a[u]=e[u]);a.originalType=t,a.mdxType="string"==typeof t?t:o,i[1]=a;for(var c=2;c<r;c++)i[c]=n[c];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}s.displayName="MDXCreateElement"},86473:(t,e,n)=>{n.r(e),n.d(e,{contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>u});var l=n(87462),o=(n(67294),n(3905));const r={title:"ionic capacitor run",sidebar_label:"capacitor run"},i=void 0,a={unversionedId:"cli/commands/capacitor-run",id:"cli/commands/capacitor-run",isDocsHomePage:!1,title:"ionic capacitor run",description:"Run an Ionic project on a connected device",source:"@site/docs/cli/commands/capacitor-run.md",sourceDirName:"cli/commands",slug:"/cli/commands/capacitor-run",permalink:"/cn/docs/cli/commands/capacitor-run",editUrl:"https://crowdin.com/project/ionic-docs",tags:[],version:"current",frontMatter:{title:"ionic capacitor run",sidebar_label:"capacitor run"},sidebar:"cli",previous:{title:"capacitor open",permalink:"/cn/docs/cli/commands/capacitor-open"},next:{title:"capacitor sync",permalink:"/cn/docs/cli/commands/capacitor-sync"}},u=[{value:"Examples",id:"examples",children:[],level:2},{value:"Inputs",id:"inputs",children:[],level:2},{value:"Options",id:"options",children:[],level:2},{value:"Advanced Options",id:"advanced-options",children:[],level:2}],c={toc:u};function p(t){let{components:e,...n}=t;return(0,o.kt)("wrapper",(0,l.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Run an Ionic project on a connected device"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ ionic capacitor run [options]\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ionic capacitor run")," will do the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Perform ",(0,o.kt)("inlineCode",{parentName:"li"},"ionic build")," (or run the dev server from ",(0,o.kt)("inlineCode",{parentName:"li"},"ionic serve")," with the ",(0,o.kt)("inlineCode",{parentName:"li"},"--livereload")," option)"),(0,o.kt)("li",{parentName:"ul"},"Run ",(0,o.kt)("inlineCode",{parentName:"li"},"capacitor run")," (or open IDE for your native project with the ",(0,o.kt)("inlineCode",{parentName:"li"},"--open")," option)")),(0,o.kt)("p",null,"When using ",(0,o.kt)("inlineCode",{parentName:"p"},"--livereload")," with hardware devices, remember that livereload needs an active connection between device and computer. In some scenarios, you may need to host the dev server on an external address using the ",(0,o.kt)("inlineCode",{parentName:"p"},"--external")," option. See these ",(0,o.kt)("a",{parentName:"p",href:"https://ionicframework.com/docs/cli/livereload"},"docs")," for more information."),(0,o.kt)("p",null,"If you have multiple devices and emulators, you can target a specific one by ID with the ",(0,o.kt)("inlineCode",{parentName:"p"},"--target")," option. You can list targets with ",(0,o.kt)("inlineCode",{parentName:"p"},"--list"),"."),(0,o.kt)("p",null,"For Android and iOS, you can setup Remote Debugging on your device with browser development tools using these ",(0,o.kt)("a",{parentName:"p",href:"https://ionicframework.com/docs/developer-resources/developer-tips"},"docs"),"."),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ ionic capacitor run \n$ ionic capacitor run android\n$ ionic capacitor run android -l --external\n$ ionic capacitor run ios --livereload --external\n$ ionic capacitor run ios --livereload-url=http://localhost:8100\n")),(0,o.kt)("h2",{id:"inputs"},"Inputs"),(0,o.kt)("table",{className:"reference-table"},(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",{colSpan:"2"},(0,o.kt)("h3",null,"platform")))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Description"),(0,o.kt)("td",null,(0,o.kt)("p",null,"The platform to run (e.g. ",(0,o.kt)("code",null,"android"),", ",(0,o.kt)("code",null,"ios"),")"))))),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("table",{className:"reference-table"},(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",{colSpan:"2"},(0,o.kt)("h3",null,(0,o.kt)("a",{href:"#option-list",id:"option-list"},"--list"))))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Description"),(0,o.kt)("td",null,(0,o.kt)("p",null,"List all available targets")))),(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",{colSpan:"2"},(0,o.kt)("h3",null,(0,o.kt)("a",{href:"#option-target",id:"option-target"},"--target",(0,o.kt)("span",{class:"option-spec"}," =<target>")))))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Description"),(0,o.kt)("td",null,(0,o.kt)("p",null,"Deploy to a specific device by its ID (use ",(0,o.kt)("code",null,"--list")," to see all)")))),(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",{colSpan:"2"},(0,o.kt)("h3",null,(0,o.kt)("a",{href:"#option-open",id:"option-open"},"--open"))))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Description"),(0,o.kt)("td",null,(0,o.kt)("p",null,"Open native IDE instead of using ",(0,o.kt)("code",null,"capacitor run"))))),(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",{colSpan:"2"},(0,o.kt)("h3",null,(0,o.kt)("a",{href:"#option-build",id:"option-build"},"--no-build"))))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Description"),(0,o.kt)("td",null,(0,o.kt)("p",null,"Do not invoke Ionic build")))),(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",{colSpan:"2"},(0,o.kt)("h3",null,(0,o.kt)("a",{href:"#option-external",id:"option-external"},"--external"))))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Description"),(0,o.kt)("td",null,(0,o.kt)("p",null,"Host dev server on all network interfaces (i.e. ",(0,o.kt)("code",null,"--host=0.0.0.0"),")")))),(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",{colSpan:"2"},(0,o.kt)("h3",null,(0,o.kt)("a",{href:"#option-livereload",id:"option-livereload"},"--livereload"))))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Description"),(0,o.kt)("td",null,(0,o.kt)("p",null,"Spin up dev server to live-reload www files"))),(0,o.kt)("tr",null,(0,o.kt)("th",null,"Aliases"),(0,o.kt)("td",null,(0,o.kt)("code",null,"-l")))),(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",{colSpan:"2"},(0,o.kt)("h3",null,(0,o.kt)("a",{href:"#option-livereload-url",id:"option-livereload-url"},"--livereload-url",(0,o.kt)("span",{class:"option-spec"}," =<url>")))))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Description"),(0,o.kt)("td",null,(0,o.kt)("p",null,"Provide a custom URL to the dev server")))),(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",{colSpan:"2"},(0,o.kt)("h3",null,(0,o.kt)("a",{href:"#option-prod",id:"option-prod"},"--prod"))))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Description"),(0,o.kt)("td",null,(0,o.kt)("p",null,"Flag to use the ",(0,o.kt)("code",null,"production")," configuration"))))),(0,o.kt)("h2",{id:"advanced-options"},"Advanced Options"),(0,o.kt)("table",{className:"reference-table"},(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",{colSpan:"2"},(0,o.kt)("h3",null,(0,o.kt)("a",{href:"#option-host",id:"option-host"},"--host",(0,o.kt)("span",{class:"option-spec"}," =<host>")))))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Description"),(0,o.kt)("td",null,(0,o.kt)("div",null,(0,o.kt)("p",null,"Use specific host for the dev server")))),(0,o.kt)("tr",null,(0,o.kt)("th",null,"Default"),(0,o.kt)("td",null,"localhost"))),(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",{colSpan:"2"},(0,o.kt)("h3",null,(0,o.kt)("a",{href:"#option-port",id:"option-port"},"--port",(0,o.kt)("span",{class:"option-spec"}," =<port>")))))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Description"),(0,o.kt)("td",null,(0,o.kt)("div",null,(0,o.kt)("p",null,"Use specific port for the dev server")))),(0,o.kt)("tr",null,(0,o.kt)("th",null,"Aliases"),(0,o.kt)("td",null,(0,o.kt)("code",null,"-p"))),(0,o.kt)("tr",null,(0,o.kt)("th",null,"Default"),(0,o.kt)("td",null,"8100"))),(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",{colSpan:"2"},(0,o.kt)("h3",null,(0,o.kt)("a",{href:"#option-public-host",id:"option-public-host"},"--public-host",(0,o.kt)("span",{class:"option-spec"}," =<host>")))))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Description"),(0,o.kt)("td",null,(0,o.kt)("div",null,(0,o.kt)("p",null,"The host used for the browser or web view"))))),(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",{colSpan:"2"},(0,o.kt)("h3",null,(0,o.kt)("a",{href:"#option-configuration",id:"option-configuration"},"--configuration",(0,o.kt)("span",{class:"option-spec"}," =<conf>")))))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Description"),(0,o.kt)("td",null,(0,o.kt)("div",null,(0,o.kt)("p",null,"Specify the configuration to use.")))),(0,o.kt)("tr",null,(0,o.kt)("th",null,"Aliases"),(0,o.kt)("td",null,(0,o.kt)("code",null,"-c")))),(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",{colSpan:"2"},(0,o.kt)("h3",null,(0,o.kt)("a",{href:"#option-source-map",id:"option-source-map"},"--source-map"))))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Description"),(0,o.kt)("td",null,(0,o.kt)("div",null,(0,o.kt)("p",null,"Output source maps"))))),(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",{colSpan:"2"},(0,o.kt)("h3",null,(0,o.kt)("a",{href:"#option-watch",id:"option-watch"},"--watch"))))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Description"),(0,o.kt)("td",null,(0,o.kt)("div",null,(0,o.kt)("p",null,"Rebuild when files change")))))))}p.isMDXComponent=!0}}]);