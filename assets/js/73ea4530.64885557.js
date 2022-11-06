"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[76737],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),u=a,g=d["".concat(p,".").concat(u)]||d[u]||m[u]||i;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},27011:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={sidebar_label:"Starting"},o="Starting an App",l={unversionedId:"developing/starting",id:"version-v5/developing/starting",isDocsHomePage:!1,title:"Starting an App",description:"Starting a new Ionic app is incredibly simple. From the command line, run the ionic start command and the CLI will handle the rest.",source:"@site/versioned_docs/version-v5/developing/starting.md",sourceDirName:"developing",slug:"/developing/starting",permalink:"/docs/v5/developing/starting",editUrl:"https://github.com/ionic-team/ionic-docs/edit/main/versioned_docs/version-v5/developing/starting.md",tags:[],version:"v5",frontMatter:{sidebar_label:"Starting"},sidebar:"version-v5/docs",previous:{title:"Next Steps",permalink:"/docs/v5/intro/next"},next:{title:"Previewing",permalink:"/docs/v5/developing/previewing"}},p=[],s={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"starting-an-app"},"Starting an App"),(0,a.kt)("p",null,"Starting a new Ionic app is incredibly simple. From the command line, run the ",(0,a.kt)("inlineCode",{parentName:"p"},"ionic start")," command and the CLI will handle the rest."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell-session"},"$ ionic start\n\nEvery great app needs a name! \ud83d\ude0d\n\nPlease enter the full name of your app. You can change this at any time.\nTo bypass this prompt next time, supply name,\nthe first argument to ionic start.\n\n? Project name: \u2588\n")),(0,a.kt)("p",null,"The Ionic CLI will display prompts asking for the new project's name and which template to use. These details can be provided as command arguments:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell-session"},"$ ionic start myApp tabs\n")),(0,a.kt)("p",null,"Here, ",(0,a.kt)("inlineCode",{parentName:"p"},"myApp")," is the name of the project, ",(0,a.kt)("inlineCode",{parentName:"p"},"tabs")," is the starter template, and the project type is ",(0,a.kt)("inlineCode",{parentName:"p"},"angular"),"."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"tabs")," is not the only project template available. Between all project types, there are three templates available:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"tabs"),": A tabs based layout"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"sidemenu"),": A sidemenu based layout"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"blank"),": An empty project with a single page")),(0,a.kt)("p",null,"See all available templates with the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell-session"},"$ ionic start --list\n")),(0,a.kt)("p",null,"These templates provide a great starting point for any app and include all the best practices for making a code base scale."))}c.isMDXComponent=!0}}]);