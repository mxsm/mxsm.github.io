"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[5235],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(p,".").concat(m)]||d[m]||l[m]||i;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},51185:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const i={},a="Frequently Asked Questions",s={unversionedId:"studio/faq",id:"version-v5/studio/faq",isDocsHomePage:!1,title:"Frequently Asked Questions",description:"Which versions of Ionic Framework are supported?",source:"@site/versioned_docs/version-v5/studio/faq.md",sourceDirName:"studio",slug:"/studio/faq",permalink:"/docs/v5/studio/faq",editUrl:"https://github.com/ionic-team/ionic-docs/edit/main/versioned_docs/version-v5/studio/faq.md",tags:[],version:"v5",frontMatter:{}},p=[{value:"Which versions of Ionic Framework are supported?",id:"which-versions-of-ionic-framework-are-supported",children:[],level:2},{value:"Is Capacitor supported?",id:"is-capacitor-supported",children:[],level:2},{value:"Can I use a component in multiple pages?",id:"can-i-use-a-component-in-multiple-pages",children:[],level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"frequently-asked-questions"},"Frequently Asked Questions"),(0,o.kt)("h2",{id:"which-versions-of-ionic-framework-are-supported"},"Which versions of Ionic Framework are supported?"),(0,o.kt)("p",null,"Ionic Studio currently supports apps using ",(0,o.kt)("strong",{parentName:"p"},"Ionic 4")," and ",(0,o.kt)("strong",{parentName:"p"},"Angular"),"."),(0,o.kt)("p",null,"Ionic 3 is not supported. We encourage you to ",(0,o.kt)("a",{parentName:"p",href:"https://ionicframework.com/docs/reference/migration"},"migrate to Ionic 4"),"."),(0,o.kt)("h2",{id:"is-capacitor-supported"},"Is Capacitor supported?"),(0,o.kt)("p",null,"Ionic Studio currently does not support Capacitor. We plan to add support soon now that Capacitor has reached 1.0."),(0,o.kt)("h2",{id:"can-i-use-a-component-in-multiple-pages"},"Can I use a component in multiple pages?"),(0,o.kt)("p",null,"Yes. In order to preserve speed, Angular only loads the components that it needs for any given page. This means that in order to use a custom component inside of a page, you must first make sure that components module is imported into your pages module."),(0,o.kt)("p",null,"Open up the page you'd like to use a component in, then navigate to the module tab. Take note of the ",(0,o.kt)("inlineCode",{parentName:"p"},"import")," line as well as the ",(0,o.kt)("inlineCode",{parentName:"p"},"import")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"ngModule"),". Both things are required in order to load your component on a page."),(0,o.kt)("p",null,'In this example, our component is called "MyCustomThing":'),(0,o.kt)("figure",null,(0,o.kt)("img",{alt:"My Custom Thing NgModule",src:"/img/studio/ss-my-custom-thing-ngmodule.png"})))}c.isMDXComponent=!0}}]);