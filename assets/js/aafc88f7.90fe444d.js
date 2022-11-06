"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[21549],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=s(a),u=i,h=m["".concat(p,".").concat(u)]||m[u]||c[u]||o;return a?n.createElement(h,r(r({ref:t},d),{},{components:a})):n.createElement(h,r({ref:t},d))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var s=2;s<o;s++)r[s]=a[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},68999:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(87462),i=(a(67294),a(3905));const o={sidebar_label:"Android Play Store"},r="Android Play Store Deployment",l={unversionedId:"deployment/play-store",id:"version-v5/deployment/play-store",isDocsHomePage:!1,title:"Android Play Store Deployment",description:"Generating a release build of an app",source:"@site/versioned_docs/version-v5/deployment/play-store.md",sourceDirName:"deployment",slug:"/deployment/play-store",permalink:"/docs/v5/deployment/play-store",editUrl:"https://github.com/ionic-team/ionic-docs/edit/main/versioned_docs/version-v5/deployment/play-store.md",tags:[],version:"v5",frontMatter:{sidebar_label:"Android Play Store"},sidebar:"version-v5/docs",previous:{title:"iOS App Store",permalink:"/docs/v5/deployment/app-store"},next:{title:"Progressive Web App (PWA)",permalink:"/docs/v5/deployment/progressive-web-app"}},p=[{value:"Generating a release build of an app",id:"generating-a-release-build-of-an-app",children:[],level:2},{value:"Signing an APK",id:"signing-an-apk",children:[],level:2},{value:"Submitting an app to the Google Play Store",id:"submitting-an-app-to-the-google-play-store",children:[],level:2},{value:"Updating an app",id:"updating-an-app",children:[],level:2}],s={toc:p};function d(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,n.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"android-play-store-deployment"},"Android Play Store Deployment"),(0,i.kt)("h2",{id:"generating-a-release-build-of-an-app"},"Generating a release build of an app"),(0,i.kt)("p",null,"To generate a release build for Android, run the following cli command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"ionic cordova build android --prod --release\n")),(0,i.kt)("p",null,"This will generate a release build based on the settings in the ",(0,i.kt)("inlineCode",{parentName:"p"},"config.xml")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"platforms/android/app/build/outputs/apk")," directory of an app.\nAn Ionic app will have preset default values in this file but this can be changed to customize builds."),(0,i.kt)("h2",{id:"signing-an-apk"},"Signing an APK"),(0,i.kt)("p",null,"First, the unsigned APK must be signed. If a signing key has already been generated, skip these steps and use that one instead.\nGenerate a private key using the keytool command that comes with the Android SDK:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"keytool -genkey -v -keystore my-release-key.keystore -alias alias_name -keyalg RSA -keysize 2048 -validity 10000\n")),(0,i.kt)("p",null,"Once that command has been ran and its prompts have been answered a file called ",(0,i.kt)("inlineCode",{parentName:"p"},"my-release-key.keystore")," will be created in the current directory."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Save this file and keep it somewhere safe. If it is lost the Google Play Store will not accept updates for this app!"))),(0,i.kt)("p",null,"To sign the unsigned APK, run the jarsigner tool which is also included in the Android SDK:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-release-key.keystore HelloWorld-release-unsigned.apk alias_name\n")),(0,i.kt)("p",null,"Finally, the zip align tool must be ran to optimize the APK.\nThe ",(0,i.kt)("inlineCode",{parentName:"p"},"zipalign")," tool can be found in ",(0,i.kt)("inlineCode",{parentName:"p"},"/path/to/Android/sdk/build-tools/VERSION/zipalign"),".\nFor example, on macOS with Android Studio installed, ",(0,i.kt)("inlineCode",{parentName:"p"},"zipalign")," is in ",(0,i.kt)("inlineCode",{parentName:"p"},"~/Library/Android/sdk/build-tools/VERSION/zipalign"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"zipalign -v 4 HelloWorld-release-unsigned.apk HelloWorld.apk\n")),(0,i.kt)("p",null,"This generates a final release binary called HelloWorld.apk that can be accepted into the Google Play Store."),(0,i.kt)("h2",{id:"submitting-an-app-to-the-google-play-store"},"Submitting an app to the Google Play Store"),(0,i.kt)("p",null,"Now that a release APK has been generated, a Play Store listing can be written and the APK can be uploaded."),(0,i.kt)("p",null,"To start, visit the ",(0,i.kt)("a",{parentName:"p",href:"https://play.google.com/apps/publish"},"Google Play Store Developer Console")," and create a new developer account."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Making a developer account with Google Play costs $25 USD."))),(0,i.kt)("p",null,"Once a developer account has been created, go ahead and click the ",(0,i.kt)("inlineCode",{parentName:"p"},"Create an Application")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Create an App button",src:a(63038).Z})),(0,i.kt)("p",null,"Be sure to fill out the description for the app along with providing screenshots and additional info.\nWhen ready, upload the signed release APK that was generated and publish the app."),(0,i.kt)("h2",{id:"updating-an-app"},"Updating an app"),(0,i.kt)("p",null,"As an app evolves, it will need to be updated with new features and fixes. An app can be updated by either submitting a new version to the Google Play Store, or by using a live update service like Appflow's Live Update feature. Using Live Updates, changes can be pushed directly to users from the Appflow dashboard, without submitting changes to the Play Store. Learn more about Live Updates ",(0,i.kt)("a",{href:"https://ionic.io/docs/appflow/deploy/intro",target:"_blank"},"here"),"."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"In order for the Google Play Store to accept updated APKs, the config.xml file will need to be edited to increment the version value, then rebuild the app for release following the instructions above."))))}d.isMDXComponent=!0},63038:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/newAppGPlay-fc0da5dd2945933ae6da5030c359a9a6.png"}}]);