"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[77946],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(a),u=o,h=m["".concat(p,".").concat(u)]||m[u]||d[u]||i;return a?n.createElement(h,r(r({ref:t},c),{},{components:a})):n.createElement(h,r({ref:t},c))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var s=2;s<i;s++)r[s]=a[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},79828:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(87462),o=(a(67294),a(3905));const i={sidebar_label:"Build Your First App"},r="Your First Ionic App: Angular",l={unversionedId:"angular/your-first-app",id:"version-v5/angular/your-first-app",isDocsHomePage:!1,title:"Your First Ionic App: Angular",description:"The great thing about Ionic is that with one codebase, you can build for any platform using just HTML, CSS, and JavaScript. Follow along as we learn the fundamentals of Ionic app development by creating a realistic app step by step.",source:"@site/versioned_docs/version-v5/angular/your-first-app.md",sourceDirName:"angular",slug:"/angular/your-first-app",permalink:"/cn/docs/v5/angular/your-first-app",editUrl:"https://crowdin.com/project/ionic-docs",tags:[],version:"v5",frontMatter:{sidebar_label:"Build Your First App"},sidebar:"version-v5/docs",previous:{title:"Overview",permalink:"/cn/docs/v5/angular/overview"},next:{title:"Taking Photos",permalink:"/cn/docs/v5/angular/your-first-app/taking-photos"}},p=[{value:"What We&#39;ll Build",id:"what-well-build",children:[],level:2},{value:"Download Required Tools",id:"download-required-tools",children:[],level:2},{value:"Install Ionic Tooling",id:"install-ionic-tooling",children:[],level:2},{value:"Create an App",id:"create-an-app",children:[{value:"PWA Elements",id:"pwa-elements",children:[],level:3}],level:2},{value:"Run the App",id:"run-the-app",children:[],level:2},{value:"Photo Gallery!!!",id:"photo-gallery",children:[],level:2}],s={toc:p};function c(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"your-first-ionic-app-angular"},"Your First Ionic App: Angular"),(0,o.kt)("p",null,"The great thing about Ionic is that with one codebase, you can build for any platform using just HTML, CSS, and JavaScript. Follow along as we learn the fundamentals of Ionic app development by creating a realistic app step by step."),(0,o.kt)("p",null,"Here\u2019s the finished app running on all 3 platforms:"),(0,o.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/0ASQ13Y1Rk4",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Looking for the previous version of this guide that covered Ionic 4 and Cordova? ",(0,o.kt)("a",{parentName:"p",href:"/cn/docs/v5/developer-resources/guides/first-app-v4/intro"},"See here.")))),(0,o.kt)("h2",{id:"what-well-build"},"What We'll Build"),(0,o.kt)("p",null,"We'll create a Photo Gallery app that offers the ability to take photos with your device's camera, display them in a grid, and store them permanently on the device."),(0,o.kt)("p",null,"Highlights include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"One Angular-based codebase that runs on the web, iOS, and Android using Ionic Framework ",(0,o.kt)("a",{parentName:"li",href:"https://ionicframework.com/docs/components"},"UI components"),"."),(0,o.kt)("li",{parentName:"ul"},"Deployed as a native iOS and Android mobile app using ",(0,o.kt)("a",{parentName:"li",href:"https://capacitorjs.com"},"Capacitor"),", Ionic's official native app runtime."),(0,o.kt)("li",{parentName:"ul"},"Photo Gallery functionality powered by the Capacitor ",(0,o.kt)("a",{parentName:"li",href:"https://capacitorjs.com/docs/apis/camera"},"Camera"),", ",(0,o.kt)("a",{parentName:"li",href:"https://capacitorjs.com/docs/apis/filesystem"},"Filesystem"),", and ",(0,o.kt)("a",{parentName:"li",href:"https://capacitorjs.com/docs/apis/preferences"},"Preferences")," APIs.")),(0,o.kt)("p",null,"Find the complete app code referenced in this guide ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ionic-team/photo-gallery-capacitor-ng"},"on GitHub"),"."),(0,o.kt)("h2",{id:"download-required-tools"},"Download Required Tools"),(0,o.kt)("p",null,"Download and install these right away to ensure an optimal Ionic development experience:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Node.js")," for interacting with the Ionic ecosystem. ",(0,o.kt)("a",{parentName:"li",href:"https://nodejs.org/en/"},"Download the LTS version here"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"A code editor")," for... writing code! We are fans of ",(0,o.kt)("a",{parentName:"li",href:"https://code.visualstudio.com/"},"Visual Studio Code"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Command-line interface/terminal (CLI)"),":",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Windows")," users: for the best Ionic experience, we recommend the built-in command line (cmd) or the Powershell\nCLI, running in Administrator mode."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Mac/Linux")," users, virtually any terminal will work.")))),(0,o.kt)("h2",{id:"install-ionic-tooling"},"Install Ionic Tooling"),(0,o.kt)("p",null,"Run the following in the command line terminal to install the Ionic CLI (",(0,o.kt)("inlineCode",{parentName:"p"},"ionic"),"), ",(0,o.kt)("inlineCode",{parentName:"p"},"native-run"),", used to run native binaries on devices and simulators/emulators, and ",(0,o.kt)("inlineCode",{parentName:"p"},"cordova-res"),", used to generate native app icons and splash screens:"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"To open a terminal in Visual Studio Code, go to Terminal -> New Terminal."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npm install -g @ionic/cli native-run cordova-res\n")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"-g")," option means ",(0,o.kt)("em",{parentName:"p"},"install globally"),". When packages are installed globally, ",(0,o.kt)("inlineCode",{parentName:"p"},"EACCES")," permission errors can occur."),(0,o.kt)("p",{parentName:"div"},"Consider setting up npm to operate globally without elevated permissions. See ",(0,o.kt)("a",{parentName:"p",href:"/cn/docs/v5/developing/tips#resolving-permission-errors"},"Resolving Permission Errors")," for more information."))),(0,o.kt)("h2",{id:"create-an-app"},"Create an App"),(0,o.kt)("p",null,"Next, create an Ionic Angular app that uses the \u201cTabs\u201d starter template and adds Capacitor for native functionality:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"ionic start photo-gallery tabs --type=angular --capacitor\n")),(0,o.kt)("p",null,"This starter project comes complete with three pre-built pages and best practices for Ionic development. With common building blocks already in place, we can add more features easily!"),(0,o.kt)("p",null,"Next, change into the app folder:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cd photo-gallery\n")),(0,o.kt)("p",null,"Next we'll need to install the necessary Capacitor plugins to make the app's native functionality work:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @capacitor/camera @capacitor/preferences @capacitor/filesystem\n")),(0,o.kt)("h3",{id:"pwa-elements"},"PWA Elements"),(0,o.kt)("p",null,"Some Capacitor plugins, including the Camera API, provide the web-based functionality and UI via the Ionic ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ionic-team/ionic-pwa-elements"},"PWA Elements library"),"."),(0,o.kt)("p",null,"It's a separate dependency, so install it next:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @ionic/pwa-elements\n")),(0,o.kt)("p",null,"Next, import ",(0,o.kt)("inlineCode",{parentName:"p"},"@ionic/pwa-elements")," by editing ",(0,o.kt)("inlineCode",{parentName:"p"},"src/main.ts"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { defineCustomElements } from '@ionic/pwa-elements/loader';\n\n// Call the element loader after the platform has been bootstrapped\ndefineCustomElements(window);\n")),(0,o.kt)("p",null,"That\u2019s it! Now for the fun part - let\u2019s see the app in action."),(0,o.kt)("h2",{id:"run-the-app"},"Run the App"),(0,o.kt)("p",null,"Run this command next:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"ionic serve\n")),(0,o.kt)("p",null,"And voil\xe0! Your Ionic app is now running in a web browser. Most of your app can be built and tested right in the browser, greatly increasing development and testing speed."),(0,o.kt)("h2",{id:"photo-gallery"},"Photo Gallery!!!"),(0,o.kt)("p",null,"There are three tabs. Click on the Tab2 tab. It\u2019s a blank canvas, aka the perfect spot to transform into a Photo Gallery. The Ionic CLI features Live Reload, so when you make changes and save them, the app is updated immediately!"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Before and after going through this tutorial",src:a(13844).Z})),(0,o.kt)("p",null,"Open the photo-gallery app folder in your code editor of choice, then navigate to ",(0,o.kt)("inlineCode",{parentName:"p"},"/src/app/tab2/tab2.page.html"),". We see:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<ion-header>\n  <ion-toolbar>\n    <ion-title>Tab 2</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-header collapse="condense">\n    <ion-toolbar>\n      <ion-title size="large">Tab 2</ion-title>\n    </ion-toolbar>\n  </ion-header>\n</ion-content>\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ion-header"),' represents the top navigation and toolbar, with "Tab 2" as the title (there are two of them due to iOS ',(0,o.kt)("a",{parentName:"p",href:"https://ionicframework.com/docs/api/title#collapsible-large-titles"},"Collapsible Large Title")," support). Rename both ",(0,o.kt)("inlineCode",{parentName:"p"},"ion-title")," elements to:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"<ion-title>Photo Gallery</ion-title>\n")),(0,o.kt)("p",null,"We put the visual aspects of our app into ",(0,o.kt)("inlineCode",{parentName:"p"},"<ion-content>"),". In this case, it\u2019s where we\u2019ll add a button that opens the device\u2019s camera as well as displays the image captured by the camera. Start by adding a ",(0,o.kt)("a",{parentName:"p",href:"https://ionicframework.com/docs/api/fab"},"floating action button")," (FAB) to the bottom of the page and set the camera image as the icon."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<ion-content>\n  <ion-fab vertical="bottom" horizontal="center" slot="fixed">\n    <ion-fab-button>\n      <ion-icon name="camera"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n')),(0,o.kt)("p",null,"Next, open ",(0,o.kt)("inlineCode",{parentName:"p"},"src/app/tabs/tabs.page.html"),". Change the label to \u201cPhotos\u201d and the icon name to \u201cimages\u201d:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<ion-tab-button tab="tab2">\n  <ion-icon name="images"></ion-icon>\n  <ion-label>Photos</ion-label>\n</ion-tab-button>\n')),(0,o.kt)("p",null,"Save all changes to see them automatically applied in the browser. That\u2019s just the start of all the cool things we can do with Ionic. Up next, implement camera taking functionality on the web, then build it for iOS and Android."))}c.isMDXComponent=!0},13844:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/email-photogallery-dfb7fe448bcb1bdcd748ee18ed759e8b.gif"}}]);