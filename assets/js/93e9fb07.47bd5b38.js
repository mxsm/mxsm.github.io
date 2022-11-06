"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[76144],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(t),m=i,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return t?a.createElement(g,o(o({ref:n},c),{},{components:t})):a.createElement(g,o({ref:n},c))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},32593:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=t(87462),i=(t(67294),t(3905));const r={sidebar_label:"FAQ",slug:"/native/faq"},o="Ionic Native FAQ",l={unversionedId:"native-faq",id:"version-v5/native-faq",isDocsHomePage:!1,title:"Ionic Native FAQ",description:"Cordova Management Tips",source:"@site/versioned_docs/version-v5/native-faq.md",sourceDirName:".",slug:"/native/faq",permalink:"/docs/v5/native/faq",editUrl:"https://github.com/ionic-team/ionic-docs/edit/main/versioned_docs/version-v5/native-faq.md",tags:[],version:"v5",frontMatter:{sidebar_label:"FAQ",slug:"/native/faq"},sidebar:"version-v5/native",previous:{title:"Setup",permalink:"/docs/v5/native/community"},next:{title:"ABBYY Real-Time Recognition",permalink:"/docs/v5/native/abbyy-rtr"}},s=[{value:"Cordova Management Tips",id:"cordova-management-tips",children:[],level:2},{value:"Understanding Version Numbers",id:"understanding-version-numbers",children:[],level:2},{value:"Troubleshooting Failed Builds",id:"troubleshooting-failed-builds",children:[{value:"Cordova Plugin Conflicts",id:"cordova-plugin-conflicts",children:[],level:3}],level:2},{value:"Recommended Upgrade Strategy",id:"recommended-upgrade-strategy",children:[{value:"When should I update?",id:"when-should-i-update",children:[],level:3}],level:2}],p={toc:s};function c(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"ionic-native-faq"},"Ionic Native FAQ"),(0,i.kt)("h2",{id:"cordova-management-tips"},"Cordova Management Tips"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"1) Use the ",(0,i.kt)("a",{parentName:"strong",href:"/docs/v5/cli"},"Ionic CLI")," to add/update/delete plugins.")),(0,i.kt)("p",null,"Instead of directly editing ",(0,i.kt)("inlineCode",{parentName:"p"},"config.xml")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),". Use ",(0,i.kt)("inlineCode",{parentName:"p"},"ionic")," in front of Cordova commands for a better experience and additional functionality (",(0,i.kt)("inlineCode",{parentName:"p"},"ionic cordova build ios")," instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"cordova build ios"),")."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"2) Upgrade plugins by removing, then re-adding them.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ ionic cordova plugin remove cordova-plugin-camera\n$ ionic cordova plugin add cordova-plugin-camera\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"3) Install explicit versions.")),(0,i.kt)("p",null,"To ensure that the same version of a plugin is always installed via ",(0,i.kt)("inlineCode",{parentName:"p"},"npm install"),", specify the version number:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"ionic cordova plugin add cordova-plugin-camera@4.3.2\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"4) Restore Cordova in an existing Ionic project")),(0,i.kt)("p",null,"Useful when adding new developers to a project. ",(0,i.kt)("inlineCode",{parentName:"p"},"ionic cordova prepare")," restores platforms and plugins from ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"config.xml"),". The version to be installed is taken from ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"config.xml"),", if found in those files. In case of conflicts, ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," is given precedence over ",(0,i.kt)("inlineCode",{parentName:"p"},"config.xml"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"5) Troubleshoot Cordova issues with Ionic CLI commands")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ionic doctor list"),": Detects ",(0,i.kt)("a",{parentName:"li",href:"/docs/v5/cli/commands/doctor-list"},"common issues")," and suggests steps to fix them"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ionic repair"),": Remove, then ",(0,i.kt)("a",{parentName:"li",href:"/docs/v5/cli/commands/repair"},"regenerate")," all dependencies")),(0,i.kt)("h2",{id:"understanding-version-numbers"},"Understanding Version Numbers"),(0,i.kt)("p",null,"For any given Ionic Native plugin, the Ionic Native (TypeScript code) and Cordova (native code) version numbers will not match. The Ionic Native version number is found in ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"@awesome-cordova-plugins/camera": "^5.3.0",\n')),(0,i.kt)("p",null,"The Cordova plugin version number is found in both ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"config.xml"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"cordova-plugin-camera": "4.0.3",\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<plugin name="cordova-plugin-camera" spec="4.0.3" />\n')),(0,i.kt)("p",null,"When checking for new native functionality or bug fixes, look for new versions on the Cordova plugin GitHub page itself (here's the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/cordova-plugin-camera"},"Camera one"),", for example)."),(0,i.kt)("p",null,"To check for new Ionic Native releases (may include exposing methods recently added by the Cordova plugin, etc.), see ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ionic-team/ionic-native/releases"},"here"),"."),(0,i.kt)("h2",{id:"troubleshooting-failed-builds"},"Troubleshooting Failed Builds"),(0,i.kt)("p",null,"Research the build error(s) by checking out these resources:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Google & ",(0,i.kt)("a",{parentName:"li",href:"https://stackoverflow.com"},"StackOverflow"),": Many issues are documented online"),(0,i.kt)("li",{parentName:"ul"},"Ask the ",(0,i.kt)("a",{parentName:"li",href:"https://forum.ionicframework.com"},"Ionic Community Ionic Forum")," (see the Ionic Native category)"),(0,i.kt)("li",{parentName:"ul"},"See the Ionic Customer Success ",(0,i.kt)("a",{parentName:"li",href:"https://ionic.zendesk.com"},"Knowledge Base"))),(0,i.kt)("h3",{id:"cordova-plugin-conflicts"},"Cordova Plugin Conflicts"),(0,i.kt)("p",null,"Plugins can conflict with each other when they share the same underlying native dependencies or when more than one plugin tries to access the same native code at once. For example, common libraries like the Google Play Services version (Google Maps is using GPS v24.2 but Firebase wants GPS v27.1). Keeping these plugins updated regularly can help with this."),(0,i.kt)("p",null,"Another tip is to ensure that your app uses only one plugin per specific feature/functionality (example: Push Notifications)."),(0,i.kt)("h2",{id:"recommended-upgrade-strategy"},"Recommended Upgrade Strategy"),(0,i.kt)("p",null,"The most Ionic stable apps are routinely updated, especially at the native layer. Keeping native plugins up to date ensures your project has the latest security fixes, new features, and improved performance."),(0,i.kt)("p",null,"Update your project's plugins one at a time, ideally in separate code branches. This reduces the surface area that issues can arise from - if you update everything in your project at once, it's sometimes hard to tell where the problem stems from."),(0,i.kt)("h3",{id:"when-should-i-update"},"When should I update?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"When a new feature/bug is released: Run ",(0,i.kt)("inlineCode",{parentName:"li"},"npm outdated")," to see a list of available updates."),(0,i.kt)("li",{parentName:"ul"},"When new major versions are released: Official blogs, such as the ",(0,i.kt)("a",{parentName:"li",href:"https://cordova.apache.org/blog/"},"Cordova blog")," and ",(0,i.kt)("a",{parentName:"li",href:"https://ionicframework.com/blog/"},"Ionic blog"),", will publish announcements and news."),(0,i.kt)("li",{parentName:"ul"},"Evaluate the nature of the update: is it a shiny new feature or critical security fix?"),(0,i.kt)("li",{parentName:"ul"},"Timing: Where does it fit in against your team's project goals?")))}c.isMDXComponent=!0}}]);