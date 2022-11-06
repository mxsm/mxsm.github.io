"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[34001],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),u=r,h=m["".concat(p,".").concat(u)]||m[u]||d[u]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},94510:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(87462),r=n(86010),o=n(67294);const i="appWizard_N8E6";function l(e){return o.createElement("div",(0,a.Z)({},e,{className:(0,r.Z)(e.className,"app-wizard",i)}),o.createElement("div",{className:"heading-group"},o.createElement("header",null,"Try our App Wizard"),o.createElement("p",null,"Use our App Wizard to generate an Ionic project visually. Choose a template, custom colors, app icon, and JavaScript Framework to get building quicker.")),o.createElement("div",null,o.createElement("a",{href:"https://ionicframework.com/start",className:"wizard-button"},"Open Wizard ",o.createElement("ion-icon",{name:"arrow-forward-outline"}))))}},74206:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var a=n(87462),r=(n(67294),n(3905)),o=n(94510);const i={title:"Installing Ionic",sidebar_label:"CLI Installation"},l=void 0,p={unversionedId:"intro/cli",id:"intro/cli",isDocsHomePage:!1,title:"Installing Ionic",description:"How to Install The Ionic Framework CLI to Build Mobile Apps",source:"@site/docs/intro/cli.md",sourceDirName:"intro",slug:"/intro/cli",permalink:"/cn/docs/intro/cli",editUrl:"https://crowdin.com/project/ionic-docs",tags:[],version:"current",frontMatter:{title:"Installing Ionic",sidebar_label:"CLI Installation"},sidebar:"docs",previous:{title:"Environment Setup",permalink:"/cn/docs/intro/environment"},next:{title:"Packages & CDN",permalink:"/cn/docs/intro/cdn"}},s=[{value:"Install the Ionic CLI",id:"install-the-ionic-cli",children:[],level:2},{value:"Start an App",id:"start-an-app",children:[],level:2},{value:"Run the App",id:"run-the-app",children:[],level:2}],c={toc:s};function d(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("title",null,"How to Install The Ionic Framework CLI to Build Mobile Apps"),(0,r.kt)("meta",{name:"description",content:"The Ionic CLI is the preferred method of installation\u2014offering a wide range of dev tools and help options. Learn how to install Ionic and begin building apps."})),(0,r.kt)("p",null,"Ionic apps are created and developed primarily through the Ionic ",(0,r.kt)("a",{parentName:"p",href:"/cn/docs/reference/glossary#cli"},"command-line")," utility. The Ionic CLI is the preferred method of installation, as it offers a wide range of dev tools and help options along the way. It is also the main tool through which to run the app and connect it to other services, such as Appflow."),(0,r.kt)(o.Z,{mdxType:"AppWizard"}),(0,r.kt)("h2",{id:"install-the-ionic-cli"},"Install the Ionic CLI"),(0,r.kt)("p",null,"Before proceeding, make sure your computer has ",(0,r.kt)("a",{parentName:"p",href:"/cn/docs/reference/glossary#node"},"Node.js")," installed. See ",(0,r.kt)("a",{parentName:"p",href:"/cn/docs/intro/environment"},"these instructions")," to set up an environment for Ionic."),(0,r.kt)("p",null,"Install the Ionic CLI with npm:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npm install -g @ionic/cli\n")),(0,r.kt)("p",null,"If there was a previous installation of the Ionic CLI, it will need to be uninstalled due to a change in package name."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ npm uninstall -g ionic\n$ npm install -g @ionic/cli\n\n")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"-g")," option means ",(0,r.kt)("em",{parentName:"p"},"install globally"),". When packages are installed globally, ",(0,r.kt)("inlineCode",{parentName:"p"},"EACCES")," permission errors can occur.\nConsider setting up npm to operate globally without elevated permissions. See ",(0,r.kt)("a",{parentName:"p",href:"/cn/docs/developing/tips#resolving-permission-errors"},"Resolving Permission Errors")," for more information."))),(0,r.kt)("h2",{id:"start-an-app"},"Start an App"),(0,r.kt)("p",null,"Create an Ionic app using one of the pre-made app templates, or a blank one to start fresh. The three most common starters are the ",(0,r.kt)("inlineCode",{parentName:"p"},"blank")," starter, ",(0,r.kt)("inlineCode",{parentName:"p"},"tabs")," starter, and ",(0,r.kt)("inlineCode",{parentName:"p"},"sidemenu")," starter. Get started with the ",(0,r.kt)("inlineCode",{parentName:"p"},"ionic start")," command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"ionic start\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"start app thumbnails",src:n(70164).Z})),(0,r.kt)("p",null,"To learn more about starting Ionic apps, see the ",(0,r.kt)("a",{parentName:"p",href:"/cn/docs/developing/starting"},"Starting Guide"),"."),(0,r.kt)("h2",{id:"run-the-app"},"Run the App"),(0,r.kt)("p",null,"The majority of Ionic app development can be spent right in the browser using the ",(0,r.kt)("inlineCode",{parentName:"p"},"ionic serve")," command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ cd myApp\n$ ionic serve\n")),(0,r.kt)("p",null,"There are a number of other ways to run an app, it's recommended to start with this workflow. To develop and test apps on devices and emulators, see the ",(0,r.kt)("a",{parentName:"p",href:"/cn/docs/developing/previewing"},"Running an App Guide"),"."))}d.isMDXComponent=!0},70164:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/start-app-thumbnails-d71df18562d433457afa4d0e51216fbb.png"}}]);