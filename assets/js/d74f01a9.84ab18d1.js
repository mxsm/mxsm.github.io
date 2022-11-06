"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[21064],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,y=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(y,l(l({ref:t},s),{},{components:n})):r.createElement(y,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},48563:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={sidebar_label:"package deploy"},l="ionic package deploy",i={unversionedId:"cli/commands/package-deploy",id:"version-v5/cli/commands/package-deploy",isDocsHomePage:!1,title:"ionic package deploy",description:"Deploys a binary to a destination, such as an app store using Appflow",source:"@site/versioned_docs/version-v5/cli/commands/package-deploy.md",sourceDirName:"cli/commands",slug:"/cli/commands/package-deploy",permalink:"/docs/v5/cli/commands/package-deploy",editUrl:"https://github.com/ionic-team/ionic-cli/edit/develop/packages/@ionic/cli/src/commands/package/deploy.ts",tags:[],version:"v5",frontMatter:{sidebar_label:"package deploy"},sidebar:"version-v5/cli",previous:{title:"package build",permalink:"/docs/v5/cli/commands/package-build"},next:{title:"repair",permalink:"/docs/v5/cli/commands/repair"}},c=[{value:"Examples",id:"examples",children:[],level:2},{value:"Inputs",id:"inputs",children:[],level:2}],p={toc:c};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ionic-package-deploy"},"ionic package deploy"),(0,a.kt)("p",null,"Deploys a binary to a destination, such as an app store using Appflow"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"ionic package deploy [options]\n")),(0,a.kt)("p",null,"This command deploys a binary to a destination using Appflow. While running, the remote log is printed to the terminal."),(0,a.kt)("p",null,"The command takes two parameters: the numeric ID of the package build that previously created the binary and the name of the destination where the binary is going to be deployed.\nBoth can be retrieved from the ",(0,a.kt)("a",{parentName:"p",href:"https://dashboard.ionicframework.com"},"Dashboard"),"."),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'ionic package deploy 123456789 "My app store destination"\n')),(0,a.kt)("h2",{id:"inputs"},"Inputs"),(0,a.kt)("table",{className:"reference-table"},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{colSpan:"2"},(0,a.kt)("h3",null,"build-id")))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Description"),(0,a.kt)("td",null,(0,a.kt)("p",null,"The build id of the desired successful package build")))),(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{colSpan:"2"},(0,a.kt)("h3",null,"destination")))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Description"),(0,a.kt)("td",null,(0,a.kt)("p",null,"The destination to deploy the build artifact to the app store"))))))}s.isMDXComponent=!0}}]);