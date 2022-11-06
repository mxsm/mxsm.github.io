"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[31195],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>u});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=n.createContext({}),d=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},c=function(e){var a=d(e.components);return n.createElement(p.Provider,{value:a},e.children)},s={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=d(t),u=r,h=m["".concat(p,".").concat(u)]||m[u]||s[u]||o;return t?n.createElement(h,i(i({ref:a},c),{},{components:t})):n.createElement(h,i({ref:a},c))}));function u(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var p in a)hasOwnProperty.call(a,p)&&(l[p]=a[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=t[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},71542:(e,a,t)=>{t.r(a),t.d(a,{contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=t(87462),r=(t(67294),t(3905));const o={},i="Android, iOS, and the Camera - Oh My!",l={unversionedId:"developer-resources/guides/first-app-v4/ios-android-camera",id:"developer-resources/guides/first-app-v4/ios-android-camera",isDocsHomePage:!1,title:"Android, iOS, and the Camera - Oh My!",description:"Previously, we got an Ionic app up and running locally in a web browser. Now, let\u2019s get it onto your iOS or Android device, then start building the photo gallery feature.",source:"@site/docs/developer-resources/guides/first-app-v4/ios-android-camera.md",sourceDirName:"developer-resources/guides/first-app-v4",slug:"/developer-resources/guides/first-app-v4/ios-android-camera",permalink:"/cn/docs/developer-resources/guides/first-app-v4/ios-android-camera",editUrl:"https://crowdin.com/project/ionic-docs",tags:[],version:"current",frontMatter:{}},p=[{value:"Add Cordova iOS and Android Platforms",id:"add-cordova-ios-and-android-platforms",children:[],level:2},{value:"Add the Camera Dependencies via the CLI",id:"add-the-camera-dependencies-via-the-cli",children:[],level:2},{value:"Add Camera plugin to Angular App Module",id:"add-camera-plugin-to-angular-app-module",children:[],level:2},{value:"Add the Camera to the Gallery page",id:"add-the-camera-to-the-gallery-page",children:[],level:2}],d={toc:p};function c(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"android-ios-and-the-camera---oh-my"},"Android, iOS, and the Camera - Oh My!"),(0,r.kt)("p",null,"Previously, we got an Ionic app up and running locally in a web browser. Now, let\u2019s get it onto your iOS or Android device, then start building the photo gallery feature."),(0,r.kt)("h2",{id:"add-cordova-ios-and-android-platforms"},"Add Cordova iOS and Android Platforms"),(0,r.kt)("p",null,"Ionic leverages the open source ",(0,r.kt)("a",{parentName:"p",href:"https://cordova.apache.org/docs/en/latest/guide/overview/"},"Cordova project")," to provide native hardware support. We begin by adding the iOS and Android ",(0,r.kt)("em",{parentName:"p"},"platforms")," then will add specific ",(0,r.kt)("em",{parentName:"p"},"plugins")," like the Camera afterwards:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ ionic cordova platform add ios\n$ ionic cordova platform add android\n")),(0,r.kt)("p",null,"These commands will create a ",(0,r.kt)("inlineCode",{parentName:"p"},"config.xml")," file, which is used to define Cordova iOS and Android settings. Cordova reads this file and applies each setting as it builds each native app binary."),(0,r.kt)("p",null,"There are more steps to configure ",(0,r.kt)("a",{parentName:"p",href:"/cn/docs/developing/ios"},"iOS")," and ",(0,r.kt)("a",{parentName:"p",href:"/cn/docs/developing/android"},"Android")," native tooling."),(0,r.kt)("p",null,"Much better! Now we can add the camera functionality. By the way, you can find reference code for this ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ionic-team/photo-gallery-tutorial-ionic4"},"on GitHub"),"."),(0,r.kt)("p",null,"Back in ",(0,r.kt)("inlineCode",{parentName:"p"},"tab2.page.html"),", add the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<ion-content>\n  <img />\n\n  <ion-fab vertical="bottom" horizontal="center" slot="fixed">\n    <ion-fab-button>\n      <ion-icon name="camera"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n')),(0,r.kt)("p",null,"Save the file and watch - a camera button appears! Tap on it and notice that it doesn\u2019t do anything. Let\u2019s fix that next."),(0,r.kt)("h2",{id:"add-the-camera-dependencies-via-the-cli"},"Add the Camera Dependencies via the CLI"),(0,r.kt)("p",null,"In order to use the Camera, we need to bring in its JavaScript and native library dependencies. Back over in your Terminal window, run the following command, which adds the JavaScript library to the project, thus exposing the Camera API in TypeScript code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @awesome-cordova-plugins/camera\n")),(0,r.kt)("p",null,"In ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),", you\u2019ll notice a new JavaScript dependency has been added, with a version number similar to the following:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'"@awesome-cordova-plugins/camera": "^5.4.0"')),(0,r.kt)("p",null,"Next, run this command to add the native iOS and Android code, effectively allowing the Camera to work on a mobile device. For more info on how this works, read up on ",(0,r.kt)("a",{parentName:"p",href:"https://cordova.apache.org/docs/en/latest/guide/overview/"},"Cordova")," and ",(0,r.kt)("a",{parentName:"p",href:"https://ionicframework.com/docs/native"},"Ionic Native"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"ionic cordova plugin add cordova-plugin-camera\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"config.xml")," file is now updated with an entry similar to the following for the native camera code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<plugin name="cordova-plugin-camera" spec="^4.0.3" />\n')),(0,r.kt)("p",null,"The next step is only required for iOS users. As of iOS 10, developers must provide a reason for why the app wishes to access the device camera. Add this inside the ios platform section (",(0,r.kt)("platform",{name:"ios"}),") of ",(0,r.kt)("inlineCode",{parentName:"p"},"config.xml"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'\x3c!-- Required for iOS 10: Camera permission prompt --\x3e\n<edit-config file="*-Info.plist" mode="merge" target="NSCameraUsageDescription">\n    <string>Used to take pictures</string>\n</edit-config>\n')),(0,r.kt)("h2",{id:"add-camera-plugin-to-angular-app-module"},"Add Camera plugin to Angular App Module"),(0,r.kt)("p",null,"There\u2019s one more step we need to do since this is an Angular project: register the Camera in the App Module (",(0,r.kt)("inlineCode",{parentName:"p"},"src/app/app.module.ts"),"). First, import the Camera module:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Javascript"},"import { Camera } from '@awesome-cordova-plugins/camera/ngx';\n")),(0,r.kt)("p",null,"Then, add it as a Provider:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Javascript"},"providers: [\n    StatusBar,\n    SplashScreen,\n    Camera,\n    {provide: ErrorHandler, useClass: IonicErrorHandler}\n  ],\n")),(0,r.kt)("p",null,"It can now be used on any of our App pages."),(0,r.kt)("h2",{id:"add-the-camera-to-the-gallery-page"},"Add the Camera to the Gallery page"),(0,r.kt)("p",null,"Our camera button doesn\u2019t do anything yet. Over in ",(0,r.kt)("inlineCode",{parentName:"p"},"tab2.page.html"),", add a click handler to the button:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<ion-fab vertical="bottom" horizontal="center" slot="fixed">\n  <ion-fab-button (click)="takePicture()">\n    <ion-icon name="camera"></ion-icon>\n  </ion-fab-button>\n</ion-fab>\n')),(0,r.kt)("p",null,"Then, update the image placeholder. The following binds the \u201ccurrentImage\u201d variable (which we\u2019ll work on next) to the image to display to the user."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<img [src]="currentImage" *ngIf="currentImage" />\n')),(0,r.kt)("p",null,"Open ",(0,r.kt)("inlineCode",{parentName:"p"},"tab2.page.ts")," next and import the Camera library:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Javascript"},"import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';\n")),(0,r.kt)("p",null,"Next, define the \u201ccurrentImage\u201d variable and inject the Camera into this class via the constructor:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Javascript"},"export class Tab2Page {\n  currentImage: any;\n\n  constructor(private camera: Camera) { }\n}\n")),(0,r.kt)("p",null,"Finally, add the \u201ctakePicture\u201d method in ",(0,r.kt)("inlineCode",{parentName:"p"},"tab2.page.ts"),". It is already wired up to execute once the camera button has been tapped:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Javascript"},"export class Tab2Page {\n  currentImage: any;\n\n  constructor(private camera: Camera) { }\n\n  takePicture() {\n    const options: CameraOptions = {\n      quality: 100,\n      destinationType: this.camera.DestinationType.DATA_URL,\n      encodingType: this.camera.EncodingType.JPEG,\n      mediaType: this.camera.MediaType.PICTURE\n    };\n\n    this.camera.getPicture(options).then((imageData) => {\n      this.currentImage = 'data:image/jpeg;base64,' + imageData;\n    }, (err) => {\n      // Handle error\n      console.log(\"Camera issue:\" + err);\n    });\n  }\n}\n")),(0,r.kt)("p",null,"Take notice: there\u2019s no mention of iOS or Android! This is the awesome power of plugins: you use one API (",(0,r.kt)("inlineCode",{parentName:"p"},"camera.getPicture()")," in this case) and the plugin takes care of the platform differences for you. Write once, run everywhere. \ud83d\ude00"),(0,r.kt)("p",null,"Save this file then tap the Camera button in DevApp. Voila! The camera should open on your device. Once a photo has been taken, it displays on the Photo Gallery page."),(0,r.kt)("p",null,"Next, we\u2019ll look at how to transform the app into a photo gallery, as well as how to save the photos to your device!"))}c.isMDXComponent=!0}}]);