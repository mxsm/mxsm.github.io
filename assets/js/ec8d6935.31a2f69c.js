"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[43220],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||l;return n?o.createElement(f,i(i({ref:t},p),{},{components:n})):o.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:r,i[1]=a;for(var s=2;s<l;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},93937:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>a,toc:()=>c});var o=n(87462),r=(n(67294),n(3905));const l={title:"ionic config unset",sidebar_label:"config unset"},i=void 0,a={unversionedId:"cli/commands/config-unset",id:"cli/commands/config-unset",isDocsHomePage:!1,title:"ionic config unset",description:"Delete config values",source:"@site/docs/cli/commands/config-unset.md",sourceDirName:"cli/commands",slug:"/cli/commands/config-unset",permalink:"/docs/cli/commands/config-unset",editUrl:"https://github.com/ionic-team/ionic-cli/edit/develop/packages/@ionic/cli/src/commands/config/unset.ts",tags:[],version:"current",frontMatter:{title:"ionic config unset",sidebar_label:"config unset"},sidebar:"cli",previous:{title:"config set",permalink:"/docs/cli/commands/config-set"},next:{title:"cordova build",permalink:"/docs/cli/commands/cordova-build"}},c=[{value:"Examples",id:"examples",children:[],level:2},{value:"Inputs",id:"inputs",children:[],level:2},{value:"Options",id:"options",children:[],level:2},{value:"Advanced Options",id:"advanced-options",children:[],level:2}],s={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Delete config values"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ ionic config unset [options]\n")),(0,r.kt)("p",null,"This command deletes configuration values from the project's ",(0,r.kt)("strong",{parentName:"p"},"./ionic.config.json")," file. It can also operate on the global CLI configuration (",(0,r.kt)("strong",{parentName:"p"},"~/.ionic/config.json"),") using the ",(0,r.kt)("inlineCode",{parentName:"p"},"--global")," option."),(0,r.kt)("p",null,"For nested properties, separate nest levels with dots. For example, the property name ",(0,r.kt)("inlineCode",{parentName:"p"},"integrations.cordova")," will look in the ",(0,r.kt)("strong",{parentName:"p"},"integrations")," object for the ",(0,r.kt)("strong",{parentName:"p"},"cordova")," property."),(0,r.kt)("p",null,"For multi-app projects, this command is scoped to the current project by default. To operate at the root of the project configuration file instead, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"--root")," option."),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ ionic config unset \n$ ionic config unset type\n$ ionic config unset --global git.setup\n$ ionic config unset -g interactive\n")),(0,r.kt)("h2",{id:"inputs"},"Inputs"),(0,r.kt)("table",{className:"reference-table"},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{colSpan:"2"},(0,r.kt)("h3",null,"property")))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Description"),(0,r.kt)("td",null,(0,r.kt)("p",null,"The property name you wish to delete"))))),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("table",{className:"reference-table"},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{colSpan:"2"},(0,r.kt)("h3",null,(0,r.kt)("a",{href:"#option-global",id:"option-global"},"--global"))))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Description"),(0,r.kt)("td",null,(0,r.kt)("p",null,"Use global CLI config"))),(0,r.kt)("tr",null,(0,r.kt)("th",null,"Aliases"),(0,r.kt)("td",null,(0,r.kt)("code",null,"-g"))))),(0,r.kt)("h2",{id:"advanced-options"},"Advanced Options"),(0,r.kt)("table",{className:"reference-table"},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{colSpan:"2"},(0,r.kt)("h3",null,(0,r.kt)("a",{href:"#option-root",id:"option-root"},"--root"))))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Description"),(0,r.kt)("td",null,(0,r.kt)("div",null,(0,r.kt)("p",null,"Operate on root of ",(0,r.kt)("strong",null,"./ionic.config.json"))))))))}p.isMDXComponent=!0}}]);