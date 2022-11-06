"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[25427],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>k});var i=n(67294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e){if(null==t)return{};var n,i,l=function(t,e){if(null==t)return{};var n,i,l={},o=Object.keys(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var p=i.createContext({}),c=function(t){var e=i.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},u=function(t){var e=c(t.components);return i.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},d=i.forwardRef((function(t,e){var n=t.components,l=t.mdxType,o=t.originalType,p=t.parentName,u=a(t,["components","mdxType","originalType","parentName"]),d=c(n),k=l,m=d["".concat(p,".").concat(k)]||d[k]||s[k]||o;return n?i.createElement(m,r(r({ref:e},u),{},{components:n})):i.createElement(m,r({ref:e},u))}));function k(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var o=n.length,r=new Array(o);r[0]=d;var a={};for(var p in e)hasOwnProperty.call(e,p)&&(a[p]=e[p]);a.originalType=t,a.mdxType="string"==typeof t?t:l,r[1]=a;for(var c=2;c<o;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},63511:(t,e,n)=>{n.r(e),n.d(e,{contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>p});var i=n(87462),l=(n(67294),n(3905));const o={sidebar_label:"init"},r="ionic init",a={unversionedId:"cli/commands/init",id:"version-v5/cli/commands/init",isDocsHomePage:!1,title:"ionic init",description:"Initialize existing projects with Ionic",source:"@site/versioned_docs/version-v5/cli/commands/init.md",sourceDirName:"cli/commands",slug:"/cli/commands/init",permalink:"/docs/v5/cli/commands/init",editUrl:"https://github.com/ionic-team/ionic-cli/edit/develop/packages/@ionic/cli/src/commands/init.ts",tags:[],version:"v5",frontMatter:{sidebar_label:"init"},sidebar:"version-v5/cli",previous:{title:"info",permalink:"/docs/v5/cli/commands/info"},next:{title:"integrations disable",permalink:"/docs/v5/cli/commands/integrations-disable"}},p=[{value:"Examples",id:"examples",children:[],level:2},{value:"Inputs",id:"inputs",children:[],level:2},{value:"Options",id:"options",children:[],level:2},{value:"Advanced Options",id:"advanced-options",children:[],level:2}],c={toc:p};function u(t){let{components:e,...n}=t;return(0,l.kt)("wrapper",(0,i.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"ionic-init"},"ionic init"),(0,l.kt)("p",null,"Initialize existing projects with Ionic"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"ionic init [options]\n")),(0,l.kt)("p",null,"This command will initialize an Ionic app within the current directory. Usually, this means an ",(0,l.kt)("inlineCode",{parentName:"p"},"ionic.config.json")," file is created. If used within a multi-app project, the app is initialized in the root ",(0,l.kt)("inlineCode",{parentName:"p"},"ionic.config.json"),"."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"ionic init")," will prompt for a project name and then proceed to determine the type of your project. You can specify the ",(0,l.kt)("inlineCode",{parentName:"p"},"name")," argument and ",(0,l.kt)("inlineCode",{parentName:"p"},"--type")," option to provide these values via command-line."),(0,l.kt)("p",null,"If the ",(0,l.kt)("inlineCode",{parentName:"p"},"--multi-app")," flag is specified, this command will initialize your project as a multi-app project, allowing for apps within monorepos and unconventional repository structures. See the multi-app ",(0,l.kt)("a",{parentName:"p",href:"https://ionicframework.com/docs/cli/configuration#multi-app-projects"},"docs")," for details. Once a multi-app project is initialized, you can run ",(0,l.kt)("inlineCode",{parentName:"p"},"ionic init")," again within apps in your project to initialize them."),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'$ ionic init\n$ ionic init "My App"\n$ ionic init "My App" --type=angular\n$ ionic init --multi-app\n')),(0,l.kt)("h2",{id:"inputs"},"Inputs"),(0,l.kt)("table",{className:"reference-table"},(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",{colSpan:"2"},(0,l.kt)("h3",null,"name")))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Description"),(0,l.kt)("td",null,(0,l.kt)("p",null,"The name of your project (e.g. ",(0,l.kt)("code",null,"myApp"),", ",(0,l.kt)("code",null,'"My App"'),")"))))),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("table",{className:"reference-table"},(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",{colSpan:"2"},(0,l.kt)("h3",null,(0,l.kt)("a",{href:"#option-type",id:"option-type"},"--type",(0,l.kt)("span",{class:"option-spec"}," =<type>")))))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Description"),(0,l.kt)("td",null,(0,l.kt)("p",null,"Type of project (e.g. ",(0,l.kt)("code",null,"angular"),", ",(0,l.kt)("code",null,"react"),", ",(0,l.kt)("code",null,"vue"),", ",(0,l.kt)("code",null,"custom"),")")))),(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",{colSpan:"2"},(0,l.kt)("h3",null,(0,l.kt)("a",{href:"#option-force",id:"option-force"},"--force"))))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Description"),(0,l.kt)("td",null,(0,l.kt)("p",null,"Initialize even if a project already exists"))),(0,l.kt)("tr",null,(0,l.kt)("th",null,"Aliases"),(0,l.kt)("td",null,(0,l.kt)("code",null,"-f")))),(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",{colSpan:"2"},(0,l.kt)("h3",null,(0,l.kt)("a",{href:"#option-multi-app",id:"option-multi-app"},"--multi-app"))))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Description"),(0,l.kt)("td",null,(0,l.kt)("p",null,"Initialize a multi-app project"))))),(0,l.kt)("h2",{id:"advanced-options"},"Advanced Options"),(0,l.kt)("table",{className:"reference-table"},(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",{colSpan:"2"},(0,l.kt)("h3",null,(0,l.kt)("a",{href:"#option-project-id",id:"option-project-id"},"--project-id",(0,l.kt)("span",{class:"option-spec"}," =<slug>")))))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Description"),(0,l.kt)("td",null,(0,l.kt)("div",null,(0,l.kt)("p",null,"Specify a slug for your app"))))),(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",{colSpan:"2"},(0,l.kt)("h3",null,(0,l.kt)("a",{href:"#option-default",id:"option-default"},"--default"))))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Description"),(0,l.kt)("td",null,(0,l.kt)("div",null,(0,l.kt)("p",null,"Mark the initialized app as the default project")))))))}u.isMDXComponent=!0}}]);