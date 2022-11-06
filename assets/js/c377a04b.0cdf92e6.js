"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[46971],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,h=u["".concat(s,".").concat(m)]||u[m]||p[m]||i;return n?a.createElement(h,r(r({ref:t},d),{},{components:n})):a.createElement(h,r({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},47758:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(67294),o=n(86010),i=n(39960),r=n(44996);const l="card_7QME";const s=function(e){const t=void 0===e.href,n=void 0!==e.href&&/^http/.test(e.href),s="undefined"===e.header?null:a.createElement("header",{className:"Card-header"},e.header),c=e.hoverIcon||e.icon,d=a.createElement(a.Fragment,null,e.img&&a.createElement("img",{src:(0,r.Z)(e.img),className:"Card-image"}),a.createElement("div",{className:"Card-container"},(e.icon||c)&&a.createElement("div",{className:"Card-icon-row"},e.icon&&a.createElement("img",{src:(0,r.Z)(e.icon),className:"Card-icon Card-icon-default"}),c&&a.createElement("img",{src:(0,r.Z)(c),className:"Card-icon Card-icon-hover"})),e.ionicon&&a.createElement("ion-icon",{name:e.ionicon,className:"Card-ionicon"}),e.iconset&&a.createElement("div",{className:"Card-iconset__container"},e.iconset.split(",").map(((t,n)=>a.createElement("img",{src:(0,r.Z)(t),className:"Card-icon "+(n===e.activeIndex?"Card-icon-active":""),"data-index":n,key:n})))),e.header&&s,a.createElement("div",{className:"Card-content"},e.children))),p=(0,o.Z)({"Card-with-image":void 0!==e.img,"Card-without-image":void 0===e.img,"Card-size-lg":"lg"===e.size,[e.className]:e.className});return t?a.createElement("docs-card",{class:p},a.createElement("div",{className:(0,o.Z)(l,"docs-card")},d)):n?a.createElement("docs-card",{class:p},a.createElement("a",{className:(0,o.Z)(l,"docs-card"),href:e.href,target:"_blank"},d)):a.createElement("docs-card",{class:p},a.createElement(i.default,{to:e.href,className:(0,o.Z)(l,"docs-card")},d))}},53445:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294);const o=function(e){return a.createElement("docs-cards",{class:e.className},e.children)}},15156:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var a=n(87462),o=(n(67294),n(3905)),i=n(47758),r=n(53445);const l={title:"Introduction to Ionic",sidebar_label:"Overview",slug:"/",hide_table_of_contents:!0,demoUrl:"https://docs-demo.ionic.io/",demoSourceUrl:"https://github.com/ionic-team/docs-demo"},s=void 0,c={unversionedId:"index",id:"index",isDocsHomePage:!1,title:"Introduction to Ionic",description:"Open-Source UI Toolkit to Create Your Own Mobile Apps",source:"@site/docs/index.md",sourceDirName:".",slug:"/",permalink:"/docs/",editUrl:"https://github.com/ionic-team/ionic-docs/edit/main/docs/index.md",tags:[],version:"current",frontMatter:{title:"Introduction to Ionic",sidebar_label:"Overview",slug:"/",hide_table_of_contents:!0,demoUrl:"https://docs-demo.ionic.io/",demoSourceUrl:"https://github.com/ionic-team/docs-demo"},sidebar:"docs",next:{title:"Overview",permalink:"/docs/"}},d=[{value:"Overview",id:"overview",children:[{value:"One codebase, running everywhere",id:"one-codebase-running-everywhere",children:[],level:3},{value:"A focus on performance",id:"a-focus-on-performance",children:[],level:3},{value:"Clean, simple, and functional design",id:"clean-simple-and-functional-design",children:[],level:3},{value:"Native and Web optimized",id:"native-and-web-optimized",children:[],level:3}],level:2},{value:"Goals",id:"goals",children:[{value:"Cross-platform",id:"cross-platform",children:[],level:3},{value:"Web Standards-based",id:"web-standards-based",children:[],level:3},{value:"Beautiful Design",id:"beautiful-design",children:[],level:3},{value:"Simplicity",id:"simplicity",children:[],level:3}],level:2},{value:"Framework Compatibility",id:"framework-compatibility",children:[{value:"JavaScript",id:"javascript",children:[],level:3},{value:"Angular",id:"angular",children:[],level:3},{value:"React",id:"react",children:[],level:3},{value:"Vue",id:"vue",children:[],level:3},{value:"Future Support",id:"future-support",children:[],level:3}],level:2},{value:"Ionic CLI",id:"ionic-cli",children:[],level:2},{value:"Appflow",id:"appflow",children:[],level:2},{value:"Ecosystem",id:"ecosystem",children:[{value:"Join the Community",id:"join-the-community",children:[],level:3}],level:2},{value:"License",id:"license",children:[],level:2}],p={toc:d};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("head",null,(0,o.kt)("title",null,"Open-Source UI Toolkit to Create Your Own Mobile Apps"),(0,o.kt)("meta",{name:"description",content:"Ionic Framework is an open-source UI toolkit to create your own mobile apps using web technologies with integrations for popular frameworks."}),(0,o.kt)("link",{rel:"canonical",href:"https://ionicframework.com/docs"}),(0,o.kt)("link",{rel:"alternate",href:"https://ionicframework.com/docs",hreflang:"x-default"}),(0,o.kt)("link",{rel:"alternate",href:"https://ionicframework.com/docs",hreflang:"en"}),(0,o.kt)("meta",{property:"og:url",content:"https://ionicframework.com/docs"})),(0,o.kt)("p",null,"Ionic is an open source UI toolkit for building performant, high-quality mobile apps using web technologies \u2014 HTML, CSS, and JavaScript \u2014 with integrations for popular frameworks like ",(0,o.kt)("a",{parentName:"p",href:"/docs/angular/overview"},"Angular"),", ",(0,o.kt)("a",{parentName:"p",href:"/docs/react"},"React"),", and ",(0,o.kt)("a",{parentName:"p",href:"/docs/vue/overview"},"Vue"),"."),(0,o.kt)("p",null,"Get started building by ",(0,o.kt)("a",{parentName:"p",href:"/docs/intro/cli"},"installing Ionic")," or following our ",(0,o.kt)("a",{parentName:"p",href:"/docs/intro/next#build-your-first-app"},"First App Tutorial")," to learn the main concepts."),(0,o.kt)("intro-end",null),(0,o.kt)(r.Z,{mdxType:"DocsCards"},(0,o.kt)(i.Z,{header:"Installation Guide",href:"/intro/cli",icon:"/icons/guide-installation-icon.svg",hoverIcon:"/icons/guide-installation-icon-hover.svg",mdxType:"DocsCard"},(0,o.kt)("p",null,"Step-by-step guides to setting up your system and installing the framework.")),(0,o.kt)(i.Z,{header:"UI Components",href:"/components",icon:"/icons/guide-components-icon.svg",hoverIcon:"/icons/guide-components-icon-hover.svg",mdxType:"DocsCard"},(0,o.kt)("p",null,"Dive into Ionic beautifully designed UI component library.")),(0,o.kt)(i.Z,{header:"Native Functionality",href:"/native",icon:"/icons/guide-native-icon.svg",hoverIcon:"/icons/guide-native-icon-hover.svg",mdxType:"DocsCard"},(0,o.kt)("p",null,"Integrate native device plugins, like Bluetooth, Maps, HealthKit, and more.")),(0,o.kt)(i.Z,{header:"Theming",href:"/theming/basics",icon:"/icons/guide-theming-icon.svg",hoverIcon:"/icons/guide-theming-icon-hover.svg",mdxType:"DocsCard"},(0,o.kt)("p",null,"Learn to easily customize and modify your Ionic app's visual design to fit your brand."))),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"Ionic focuses on the frontend UX and UI interaction of an app \u2014 UI controls, interactions, gestures, animations. It's easy to learn, and integrates with other libraries or frameworks, such as ",(0,o.kt)("a",{parentName:"p",href:"/docs/angular/overview"},"Angular"),", ",(0,o.kt)("a",{parentName:"p",href:"/docs/react"},"React"),", or ",(0,o.kt)("a",{parentName:"p",href:"/docs/vue/overview"},"Vue"),". Alternatively, it can be used standalone without any frontend framework using a simple ",(0,o.kt)("a",{parentName:"p",href:"/docs/intro/cdn"},"script include"),". If you\u2019d like to learn more about Ionic before diving in, we ",(0,o.kt)("a",{href:"https://youtu.be/p3AN3igqiRc",target:"_blank"},"created a video")," to walk you through the basics."),(0,o.kt)("h3",{id:"one-codebase-running-everywhere"},"One codebase, running everywhere"),(0,o.kt)("p",null,"Ionic is the only mobile app stack that enables web developers to build apps for all major app stores and the mobile web from a single codebase. And with ",(0,o.kt)("a",{parentName:"p",href:"/docs/theming/platform-styles"},"Adaptive Styling"),", Ionic apps look and feel at home on every device."),(0,o.kt)("h3",{id:"a-focus-on-performance"},"A focus on performance"),(0,o.kt)("p",null,"Ionic is built to perform and behave great on the latest mobile devices with best practices like efficient hardware accelerated transitions, and touch-optimized gestures."),(0,o.kt)("h3",{id:"clean-simple-and-functional-design"},"Clean, simple, and functional design"),(0,o.kt)("p",null,"Ionic is designed to work and display beautifully on all current mobile devices and platforms. With ready-made components, typography, and a gorgeous (yet extensible) base theme that adapts to each platform, you'll be building in style."),(0,o.kt)("h3",{id:"native-and-web-optimized"},"Native and Web optimized"),(0,o.kt)("p",null,"Ionic emulates native app UI guidelines and uses native SDKs, bringing the UI standards and device features of native apps together with the full power and flexibility of the open web. Ionic uses Capacitor (or Cordova) to deploy natively, or runs in the browser as a Progressive Web App."),(0,o.kt)("h2",{id:"goals"},"Goals"),(0,o.kt)("h3",{id:"cross-platform"},"Cross-platform"),(0,o.kt)("p",null,"Build and deploy apps that work across multiple platforms, such as native iOS, Android, and the web as a Progressive Web App - all with one code base. Write once, run anywhere."),(0,o.kt)("h3",{id:"web-standards-based"},"Web Standards-based"),(0,o.kt)("p",null,"Ionic is built on top of reliable, ",(0,o.kt)("a",{parentName:"p",href:"/docs/reference/glossary#web-standards"},"standardized web technologies"),": HTML, CSS, and JavaScript, using modern Web APIs such as Custom Elements and Shadow DOM. Because of this, Ionic components have a stable API, and aren't at the whim of a single platform vendor."),(0,o.kt)("h3",{id:"beautiful-design"},"Beautiful Design"),(0,o.kt)("p",null,"Clean, simple, and functional. Ionic is designed to work and display beautifully out-of-the-box across all platforms.\nStart with pre-designed components, typography, interactive paradigms, and a gorgeous (yet extensible) base theme."),(0,o.kt)("h3",{id:"simplicity"},"Simplicity"),(0,o.kt)("p",null,"Ionic is built with simplicity in mind, so that creating apps is enjoyable, easy to learn, and accessible to just about anyone with web development skills."),(0,o.kt)("h2",{id:"framework-compatibility"},"Framework Compatibility"),(0,o.kt)("p",null,"While past releases of Ionic were tightly coupled to Angular, version 4.x of the framework was re-engineered to work as a standalone ",(0,o.kt)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/Web_Components",target:"_blank"},"Web Component")," library, with integrations for the latest JavaScript frameworks, like Angular. Ionic can be used in most frontend frameworks with success, including React and Vue, though some frameworks need a shim for full Web Component support."),(0,o.kt)("h3",{id:"javascript"},"JavaScript"),(0,o.kt)("p",null,"One of the main goals with moving Ionic to ",(0,o.kt)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/Web_Components",target:"_blank"},"Web Components")," was to remove any hard requirement on a single framework to host the components. This made it possible for the core components to work standalone in a web page with just a script tag. While working with frameworks can be great for larger teams and larger apps, it is now possible to use Ionic as a standalone library in a single page even in a context like WordPress."),(0,o.kt)("h3",{id:"angular"},"Angular"),(0,o.kt)("p",null,"Angular has always been at the center of what makes Ionic great. While the core components have been written to work as a standalone Web Component library, the ",(0,o.kt)("inlineCode",{parentName:"p"},"@ionic/angular")," package makes integration with the Angular ecosystem a breeze. ",(0,o.kt)("inlineCode",{parentName:"p"},"@ionic/angular")," includes all the functionality that Angular developers would expect coming from Ionic 2/3, and integrates with core Angular libraries, like the Angular router."),(0,o.kt)("h3",{id:"react"},"React"),(0,o.kt)("p",null,"Ionic now has official support for the popular React library. Ionic React lets React developers use their existing web skills to build apps that target iOS, Android, and the web. With ",(0,o.kt)("inlineCode",{parentName:"p"},"@ionic/react"),", you can use all the core Ionic components, but in a way that feels like using native React components."),(0,o.kt)("h3",{id:"vue"},"Vue"),(0,o.kt)("p",null,"Ionic now has official support for the popular Vue 3 library. Ionic Vue lets Vue developers use their existing web skills to build apps that target iOS, Android, and the web. With ",(0,o.kt)("inlineCode",{parentName:"p"},"@ionic/vue"),", you can use all the core Ionic components, but in a way that feels like using native Vue components."),(0,o.kt)("h3",{id:"future-support"},"Future Support"),(0,o.kt)("p",null,"Support for other frameworks will be considered in future releases."),(0,o.kt)("h2",{id:"ionic-cli"},"Ionic CLI"),(0,o.kt)("p",null,"The official ",(0,o.kt)("a",{parentName:"p",href:"/docs/cli"},"Ionic CLI"),", or Command Line Interface, is a tool that quickly scaffolds Ionic apps and provides a number of helpful commands to Ionic developers. In addition to installing and updating Ionic, the CLI comes with a built-in development server, build and debugging tools, and much more. If you are an ",(0,o.kt)("a",{parentName:"p",href:"#appflow"},"Appflow")," member, the CLI can be used to perform cloud builds and deployments, and administer your account."),(0,o.kt)("h2",{id:"appflow"},"Appflow"),(0,o.kt)("p",null,"To help build, deploy, and manage Ionic apps throughout their lifecycle, we offer a commercial service for production apps called ",(0,o.kt)("a",{href:"https://ionic.io/appflow",target:"_blank"},"Appflow"),", which is ",(0,o.kt)("strong",null,"separate from the open source Framework.")),(0,o.kt)("p",null,"Appflow helps developers and teams compile native app builds and deploy live code updates to Ionic apps from a centralized dashboard. Optional paid upgrades are available for more advanced capabilities like publishing directly to app stores, workflow automation, single sign-on (SSO) and access to connected services and integrations."),(0,o.kt)("p",null,"Appflow requires an ",(0,o.kt)("a",{href:"https://dashboard.ionicframework.com/signup",target:"_blank"},"Ionic Account")," and comes with a free \u201cHobby\u201d plan for those interested in playing around with some of its features."),(0,o.kt)("h2",{id:"ecosystem"},"Ecosystem"),(0,o.kt)("p",null,"Ionic is actively developed and maintained full-time by a core team, and its ecosystem is guided by an international community of developers and contributors fueling its growth and adoption. Developers and companies small and large use Ionic to build and ship amazing apps that run everywhere."),(0,o.kt)("h3",{id:"join-the-community"},"Join the Community"),(0,o.kt)("p",null,"There are millions of Ionic developers in over 200 countries worldwide. Here are some ways to join:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{href:"https://forum.ionicframework.com/",target:"_blank"},"Forum:")," A great place for asking questions and sharing ideas."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{href:"https://twitter.com/ionicframework",target:"_blank"},"Twitter:")," Where we post updates and share content from the Ionic community."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{href:"https://github.com/ionic-team/ionic",target:"_blank"},"GitHub:")," For reporting bugs or requesting new features, create an issue here. PRs welcome!"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{href:"https://ionicframework.com/contributors",target:"_blank"},"Content authoring:")," Write a technical blog or share your story with the Ionic community.")),(0,o.kt)("h2",{id:"license"},"License"),(0,o.kt)("p",null,"The Ionic UI Toolkit is a free and open source project, released under the permissible ",(0,o.kt)("a",{href:"https://opensource.org/licenses/MIT",target:"_blank"},"MIT license"),". This means it can be used in personal or commercial projects for free. MIT is the same license used by such popular projects as jQuery and Ruby on Rails."),(0,o.kt)("p",null,"This documentation content (found in the ",(0,o.kt)("a",{href:"https://github.com/ionic-team/ionic-docs",target:"_blank"},"ionic-docs")," repo) is licensed under the ",(0,o.kt)("a",{href:"https://www.apache.org/licenses/LICENSE-2.0",target:"_blank"},"Apache 2 license"),"."))}u.isMDXComponent=!0}}]);