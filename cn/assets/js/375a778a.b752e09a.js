"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[4387],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>u});var n=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(o),u=a,m=d["".concat(p,".").concat(u)]||d[u]||h[u]||i;return o?n.createElement(m,r(r({ref:t},c),{},{components:o})):n.createElement(m,r({ref:t},c))}));function u(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=o.length,r=new Array(i);r[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var s=2;s<i;s++)r[s]=o[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},30112:(e,t,o)=>{o.r(t),o.d(t,{contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=o(87462),a=(o(67294),o(3905));const i={sidebar_label:"Live Reload"},r="Rapid App Development with Live Reload",l={unversionedId:"angular/your-first-app/live-reload",id:"version-v5/angular/your-first-app/live-reload",isDocsHomePage:!1,title:"Rapid App Development with Live Reload",description:"So far, we\u2019ve seen how easy it is to develop a cross-platform app that works everywhere. The development experience is pretty quick, but what if I told you there was a way to go faster?",source:"@site/versioned_docs/version-v5/angular/your-first-app/7-live-reload.md",sourceDirName:"angular/your-first-app",slug:"/angular/your-first-app/live-reload",permalink:"/cn/docs/v5/angular/your-first-app/live-reload",editUrl:"https://crowdin.com/project/ionic-docs",tags:[],version:"v5",sidebarPosition:7,frontMatter:{sidebar_label:"Live Reload"},sidebar:"version-v5/docs",previous:{title:"Deploying Mobile",permalink:"/cn/docs/v5/angular/your-first-app/deploying-mobile"},next:{title:"Lifecycle",permalink:"/cn/docs/v5/angular/lifecycle"}},p=[{value:"Live Reload",id:"live-reload",children:[],level:2},{value:"Deleting Photos",id:"deleting-photos",children:[],level:2},{value:"What\u2019s Next?",id:"whats-next",children:[],level:2}],s={toc:p};function c(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"rapid-app-development-with-live-reload"},"Rapid App Development with Live Reload"),(0,a.kt)("p",null,"So far, we\u2019ve seen how easy it is to develop a cross-platform app that works everywhere. The development experience is pretty quick, but what if I told you there was a way to go faster?"),(0,a.kt)("p",null,"We can use the Ionic CLI\u2019s ",(0,a.kt)("a",{parentName:"p",href:"https://ionicframework.com/docs/cli/livereload"},"Live Reload functionality")," to boost our productivity when building Ionic apps. When active, Live Reload will reload the browser and/or WebView when changes in the app are detected."),(0,a.kt)("h2",{id:"live-reload"},"Live Reload"),(0,a.kt)("p",null,"Remember ",(0,a.kt)("inlineCode",{parentName:"p"},"ionic serve"),"? That was Live Reload working in the browser, allowing us to iterate quickly."),(0,a.kt)("p",null,"We can also use it when developing on iOS and Android devices. This is particularly useful when writing code that interacts with native plugins - we must run it on a device to verify that it works. Therefore, being able to quickly write, build, test, and deploy code is crucial to keeping up our development speed."),(0,a.kt)("p",null,"Let\u2019s use Live Reload to implement photo deletion, the missing piece of our Photo Gallery feature. Select your platform of choice (iOS or Android) and connect a device to your computer. Next, run either command in a terminal, based on your chosen platform:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ ionic cap run ios -l --external\n\n$ ionic cap run android -l --external\n")),(0,a.kt)("p",null,"The Live Reload server will start up, and the native IDE of choice will open if not opened already. Within the IDE, click the Play button to launch the app onto your device."),(0,a.kt)("h2",{id:"deleting-photos"},"Deleting Photos"),(0,a.kt)("p",null,"With Live Reload running and the app open on your device, let\u2019s implement photo deletion functionality. Open ",(0,a.kt)("inlineCode",{parentName:"p"},"tab2.page.html")," and add a new click handler to each ",(0,a.kt)("inlineCode",{parentName:"p"},"<ion-img>")," element. When the app user taps on a photo in our gallery, we\u2019ll display an ",(0,a.kt)("a",{parentName:"p",href:"https://ionicframework.com/docs/api/action-sheet"},"Action Sheet")," dialog with the option to either delete the selected photo or cancel (close) the dialog."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<ion-col size="6" *ngFor="let photo of photoService.photos; index as position">\n  <ion-img [src]="photo.webviewPath" (click)="showActionSheet(photo, position)"></ion-img>\n</ion-col>\n')),(0,a.kt)("p",null,"Over in ",(0,a.kt)("inlineCode",{parentName:"p"},"tab2.page.ts"),", import Action Sheet and add it to the constructor:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { ActionSheetController } from '@ionic/angular';\n\nconstructor(public photoService: PhotoService,\n            public actionSheetController: ActionSheetController) {}\n")),(0,a.kt)("p",null,"Add ",(0,a.kt)("inlineCode",{parentName:"p"},"UserPhoto")," to the import statement."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { PhotoService, UserPhoto } from '../services/photo.service';\n")),(0,a.kt)("p",null,"Next, implement the ",(0,a.kt)("inlineCode",{parentName:"p"},"showActionSheet()")," function. We add two options: ",(0,a.kt)("inlineCode",{parentName:"p"},"Delete")," that calls PhotoService\u2019s ",(0,a.kt)("inlineCode",{parentName:"p"},"deletePicture()")," function (to be added next) and ",(0,a.kt)("inlineCode",{parentName:"p"},"Cancel"),", which when given the role of \u201ccancel\u201d will automatically close the action sheet:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"public async showActionSheet(photo: UserPhoto, position: number) {\n  const actionSheet = await this.actionSheetController.create({\n    header: 'Photos',\n    buttons: [{\n      text: 'Delete',\n      role: 'destructive',\n      icon: 'trash',\n      handler: () => {\n        this.photoService.deletePicture(photo, position);\n      }\n    }, {\n      text: 'Cancel',\n      icon: 'close',\n      role: 'cancel',\n      handler: () => {\n        // Nothing to do, action sheet is automatically closed\n        }\n    }]\n  });\n  await actionSheet.present();\n}\n")),(0,a.kt)("p",null,"Save both of the files we just edited. The Photo Gallery app will reload automatically, and now when we tap on one of the photos in the gallery, the action sheet displays. Tapping \u201cDelete\u201d doesn\u2019t do anything yet, so head back into your code editor."),(0,a.kt)("p",null,"In ",(0,a.kt)("inlineCode",{parentName:"p"},"src/app/services/photo.service.ts"),", add the ",(0,a.kt)("inlineCode",{parentName:"p"},"deletePicture()")," function:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"public async deletePicture(photo: UserPhoto, position: number) {\n  // Remove this photo from the Photos reference data array\n  this.photos.splice(position, 1);\n\n  // Update photos array cache by overwriting the existing photo array\n  Preferences.set({\n    key: this.PHOTO_STORAGE,\n    value: JSON.stringify(this.photos)\n  });\n\n  // delete photo file from filesystem\n  const filename = photo.filepath\n                      .substr(photo.filepath.lastIndexOf('/') + 1);\n\n  await Filesystem.deleteFile({\n    path: filename,\n    directory: Directory.Data\n  });\n}\n")),(0,a.kt)("p",null,"The selected photo is removed from the Photos array first. Then, we use the Capacitor Preferences API to update the cached version of the Photos array. Finally, we delete the actual photo file itself using the Filesystem API."),(0,a.kt)("p",null,"Save this file, then tap on a photo again and choose the \u201cDelete\u201d option. This time, the photo is deleted! Implemented much faster using Live Reload. \ud83d\udcaa"),(0,a.kt)("h2",{id:"whats-next"},"What\u2019s Next?"),(0,a.kt)("p",null,"Congratulations! You built a complete cross-platform Photo Gallery app that runs on the web, iOS, and Android. There are many paths to follow from here. Try adding another ",(0,a.kt)("a",{parentName:"p",href:"https://ionicframework.com/docs/components"},"Ionic UI component")," to the app, or more ",(0,a.kt)("a",{parentName:"p",href:"https://capacitorjs.com/docs/apis"},"native functionality"),". The sky\u2019s the limit."),(0,a.kt)("p",null,"Happy app building! \ud83d\udc99"))}c.isMDXComponent=!0}}]);