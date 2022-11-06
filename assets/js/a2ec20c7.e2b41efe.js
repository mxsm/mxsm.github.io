"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[81147],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),u=o,h=m["".concat(p,".").concat(u)]||m[u]||d[u]||i;return n?a.createElement(h,r(r({ref:t},c),{},{components:n})):a.createElement(h,r({ref:t},c))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var s=2;s<i;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8917:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));const i={title:"Your First Ionic App: React",sidebar_label:"Build Your First App"},r=void 0,l={unversionedId:"react/your-first-app",id:"react/your-first-app",isDocsHomePage:!1,title:"Your First Ionic App: React",description:"React Apps | Build Your First Ionic Framework React Application",source:"@site/docs/react/your-first-app.md",sourceDirName:"react",slug:"/react/your-first-app",permalink:"/docs/react/your-first-app",editUrl:"https://github.com/ionic-team/ionic-docs/edit/main/docs/react/your-first-app.md",tags:[],version:"current",frontMatter:{title:"Your First Ionic App: React",sidebar_label:"Build Your First App"},sidebar:"docs",previous:{title:"Quickstart",permalink:"/docs/react/quickstart"},next:{title:"Taking Photos",permalink:"/docs/react/your-first-app/taking-photos"}},p=[{value:"What We&#39;ll Build",id:"what-well-build",children:[],level:2},{value:"Download Required Tools",id:"download-required-tools",children:[],level:2},{value:"Install Ionic Tooling",id:"install-ionic-tooling",children:[],level:2},{value:"Create an App",id:"create-an-app",children:[{value:"PWA Elements",id:"pwa-elements",children:[],level:3}],level:2},{value:"Run the App",id:"run-the-app",children:[],level:2},{value:"Photo Gallery!!!",id:"photo-gallery",children:[],level:2}],s={toc:p};function c(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,a.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("head",null,(0,o.kt)("title",null,"React Apps | Build Your First Ionic Framework React Application"),(0,o.kt)("meta",{name:"description",content:"Build your first Ionic React App. With one codebase, you can build an Ionic Framework application for any platform using just HTML, CSS, and JavaScript."})),(0,o.kt)("p",null,"The great thing about Ionic is that with one codebase, you can build for any platform using just HTML, CSS, and JavaScript. Follow along as we learn the fundamentals of Ionic app development by creating a realistic app step by step."),(0,o.kt)("p",null,"Here\u2019s the finished app running on all 3 platforms:"),(0,o.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/0ASQ13Y1Rk4",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,o.kt)("h2",{id:"what-well-build"},"What We'll Build"),(0,o.kt)("p",null,"We'll create a Photo Gallery app that offers the ability to take photos with your device's camera, display them in a grid, and store them permanently on the device."),(0,o.kt)("p",null,"Highlights include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"One React-based codebase that runs on the web, iOS, and Android using Ionic Framework ",(0,o.kt)("a",{parentName:"li",href:"https://ionicframework.com/docs/components"},"UI components"),"."),(0,o.kt)("li",{parentName:"ul"},"Deployed as a native iOS and Android mobile app using ",(0,o.kt)("a",{parentName:"li",href:"https://capacitorjs.com"},"Capacitor"),", Ionic's official native app runtime."),(0,o.kt)("li",{parentName:"ul"},"Photo Gallery functionality powered by the Capacitor ",(0,o.kt)("a",{parentName:"li",href:"https://capacitorjs.com/docs/apis/camera"},"Camera"),", ",(0,o.kt)("a",{parentName:"li",href:"https://capacitorjs.com/docs/apis/filesystem"},"Filesystem"),", and ",(0,o.kt)("a",{parentName:"li",href:"https://capacitorjs.com/docs/apis/preferences"},"Preferences")," APIs.")),(0,o.kt)("p",null,"Find the complete app code referenced in this guide ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ionic-team/photo-gallery-capacitor-react"},"on GitHub"),"."),(0,o.kt)("h2",{id:"download-required-tools"},"Download Required Tools"),(0,o.kt)("p",null,"Download and install these right away to ensure an optimal Ionic development experience:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Node.js")," for interacting with the Ionic ecosystem. ",(0,o.kt)("a",{parentName:"li",href:"https://nodejs.org/en/"},"Download the LTS version here"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"A code editor")," for... writing code! We are fans of ",(0,o.kt)("a",{parentName:"li",href:"https://code.visualstudio.com/"},"Visual Studio Code"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Command-line interface/terminal (CLI)"),":",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Windows")," users: for the best Ionic experience, we recommend the built-in command line (cmd) or the Powershell\nCLI, running in Administrator mode."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Mac/Linux")," users, virtually any terminal will work.")))),(0,o.kt)("h2",{id:"install-ionic-tooling"},"Install Ionic Tooling"),(0,o.kt)("p",null,"Run the following in the command line terminal to install the Ionic CLI (",(0,o.kt)("inlineCode",{parentName:"p"},"ionic"),"), ",(0,o.kt)("inlineCode",{parentName:"p"},"native-run"),", used to run native binaries on devices and simulators/emulators, and ",(0,o.kt)("inlineCode",{parentName:"p"},"cordova-res"),", used to generate native app icons and splash screens:"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"To open a terminal in Visual Studio Code, go to Terminal -> New Terminal."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npm install -g @ionic/cli native-run cordova-res\n")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"-g")," option means ",(0,o.kt)("em",{parentName:"p"},"install globally"),". When packages are installed globally, ",(0,o.kt)("inlineCode",{parentName:"p"},"EACCES")," permission errors can occur."),(0,o.kt)("p",{parentName:"div"},"Consider setting up npm to operate globally without elevated permissions. See ",(0,o.kt)("a",{parentName:"p",href:"/docs/developing/tips#resolving-permission-errors"},"Resolving Permission Errors")," for more information."))),(0,o.kt)("h2",{id:"create-an-app"},"Create an App"),(0,o.kt)("p",null,"Next, create an Ionic React app that uses the \u201cTabs\u201d starter template and adds Capacitor for native functionality:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"ionic start photo-gallery tabs --type=react --capacitor\n")),(0,o.kt)("p",null,"This starter project comes complete with three pre-built pages and best practices for Ionic development. With common building blocks already in place, we can add more features easily!"),(0,o.kt)("p",null,"Next, change into the app folder:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cd photo-gallery\n")),(0,o.kt)("p",null,"Next we'll need to install the necessary Capacitor plugins to make the app's native functionality work:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @capacitor/camera @capacitor/preferences @capacitor/filesystem\n")),(0,o.kt)("h3",{id:"pwa-elements"},"PWA Elements"),(0,o.kt)("p",null,"Some Capacitor plugins, including the Camera API, provide the web-based functionality and UI via the Ionic ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ionic-team/pwa-elements"},"PWA Elements library"),"."),(0,o.kt)("p",null,"It's a separate dependency, so install it next:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @ionic/pwa-elements\n")),(0,o.kt)("p",null,"After installation, open up the project in your code editor of choice."),(0,o.kt)("p",null,"Next, import ",(0,o.kt)("inlineCode",{parentName:"p"},"@ionic/pwa-elements")," by editing ",(0,o.kt)("inlineCode",{parentName:"p"},"src/index.tsx"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { defineCustomElements } from '@ionic/pwa-elements/loader';\n\n// Call the element loader after the platform has been bootstrapped\ndefineCustomElements(window);\n")),(0,o.kt)("p",null,"That\u2019s it! Now for the fun part - let\u2019s see the app in action."),(0,o.kt)("h2",{id:"run-the-app"},"Run the App"),(0,o.kt)("p",null,"Run this command in your shell:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"ionic serve\n")),(0,o.kt)("p",null,"And voil\xe0! Your Ionic app is now running in a web browser. Most of your app can be built and tested right in the browser, greatly increasing development and testing speed."),(0,o.kt)("h2",{id:"photo-gallery"},"Photo Gallery!!!"),(0,o.kt)("p",null,"There are three tabs. Click on the Tab2 tab. It\u2019s a blank canvas, aka the perfect spot to transform into a Photo Gallery. The Ionic CLI features Live Reload, so when you make changes and save them, the app is updated immediately!"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Before and after going through this tutorial",src:n(69712).Z})),(0,o.kt)("p",null,"Open ",(0,o.kt)("inlineCode",{parentName:"p"},"/src/pages/Tab2.tsx"),". We see:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"<IonPage>\n  <IonHeader>\n    <IonToolbar>\n      <IonTitle>Tab 2</IonTitle>\n    </IonToolbar>\n  </IonHeader>\n  <IonContent>\n  \x3c!-- some filler --\x3e\n  </IonContent>\n</IonPage>\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"IonHeader"),' represents the top navigation and toolbar, with "Tab 2" as the title. Let\u2019s rename it:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"<IonTitle>Photo Gallery</IonTitle>\n")),(0,o.kt)("p",null,"We put the visual aspects of our app into ",(0,o.kt)("inlineCode",{parentName:"p"},"<IonContent>"),". In this case, it\u2019s where we\u2019ll add a button that opens the device\u2019s camera as well as displays the image captured by the camera. Start by adding a ",(0,o.kt)("a",{parentName:"p",href:"https://ionicframework.com/docs/api/fab"},"floating action button")," (FAB). First, update the imports at the top of the page to include the Camera icon as well as some of the Ionic components we'll use shortly:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { camera, trash, close } from 'ionicons/icons';\nimport {\n  IonContent,\n  IonHeader,\n  IonPage,\n  IonTitle,\n  IonToolbar,\n  IonFab,\n  IonFabButton,\n  IonIcon,\n  IonGrid,\n  IonRow,\n  IonCol,\n  IonImg,\n  IonActionSheet,\n} from '@ionic/react';\n")),(0,o.kt)("p",null,"Then, add the FAB to the bottom of the page. Use the camera image as the icon, and call the ",(0,o.kt)("inlineCode",{parentName:"p"},"takePhoto()")," function when this button is clicked (to be implemented soon):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'<IonContent>\n  <IonFab vertical="bottom" horizontal="center" slot="fixed">\n    <IonFabButton onClick={() => takePhoto()}>\n      <IonIcon icon={camera}></IonIcon>\n    </IonFabButton>\n  </IonFab>\n</IonContent>\n')),(0,o.kt)("p",null,"We\u2019ll be creating the ",(0,o.kt)("inlineCode",{parentName:"p"},"takePhoto")," method and the logic to use the Camera and other native features in a moment."),(0,o.kt)("p",null,"Next, open ",(0,o.kt)("inlineCode",{parentName:"p"},"src/App.tsx"),", remove the ",(0,o.kt)("inlineCode",{parentName:"p"},"ellipse")," icon from the import and import the ",(0,o.kt)("inlineCode",{parentName:"p"},"images")," icon instead:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { images, square, triangle } from 'ionicons/icons';\n")),(0,o.kt)("p",null,"Within the tab bar (",(0,o.kt)("inlineCode",{parentName:"p"},"<IonTabBar>"),"), change the label to \u201cPhotos\u201d and the ",(0,o.kt)("inlineCode",{parentName:"p"},"ellipse")," icon to ",(0,o.kt)("inlineCode",{parentName:"p"},"images")," for the middle tab button:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'<IonTabButton tab="tab2" href="/tab2">\n  <IonIcon icon={images} />\n  <IonLabel>Photos</IonLabel>\n</IonTabButton>\n')),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"In Ionic React, icons are imported individually from ",(0,o.kt)("inlineCode",{parentName:"p"},"ionicons/icons")," and set to the icon prop."))),(0,o.kt)("p",null,"That\u2019s just the start of all the cool things we can do with Ionic. Up next, implement camera taking functionality on the web, then build it for iOS and Android."))}c.isMDXComponent=!0},69712:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/live-reload-3578876906ee2da66987598873fc63b8.gif"}}]);