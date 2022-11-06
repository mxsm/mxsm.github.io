"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[83861],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,l=e.originalType,p=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),u=s(a),m=o,h=u["".concat(p,".").concat(m)]||u[m]||c[m]||l;return a?n.createElement(h,i(i({ref:t},d),{},{components:a})):n.createElement(h,i({ref:t},d))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=a.length,i=new Array(l);i[0]=u;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r.mdxType="string"==typeof e?e:o,i[1]=r;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},58215:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294);const o=function(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",hidden:a,className:o},t)}},26396:(e,t,a)=>{a.d(t,{Z:()=>u});var n=a(87462),o=a(67294),l=a(72389),i=a(79443);const r=function(){const e=(0,o.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var p=a(89521),s=a(86010);const d="tabItem_vU9c";function c(e){var t,a;const{lazy:n,block:l,defaultValue:i,values:c,groupId:u,className:m}=e,h=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=c??h.map((e=>{let{props:{value:t,label:a}}=e;return{value:t,label:a}})),v=(0,p.lx)(g,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===i?i:i??(null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)??(null==(a=h[0])?void 0:a.props.value);if(null!==y&&!g.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:b}=r(),[f,w]=(0,o.useState)(y),N=[],{blockElementScrollPositionUntilNextRender:A}=(0,p.o5)();if(null!=u){const e=k[u];null!=e&&e!==f&&g.some((t=>t.value===e))&&w(e)}const P=e=>{const t=e.currentTarget,a=N.indexOf(t),n=g[a].value;n!==f&&(A(t),w(n),null!=u&&b(u,n))},x=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{const t=N.indexOf(e.currentTarget)+1;a=N[t]||N[0];break}case"ArrowLeft":{const t=N.indexOf(e.currentTarget)-1;a=N[t]||N[N.length-1];break}}null==(t=a)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":l},m)},g.map((e=>{let{value:t,label:a}=e;return o.createElement("li",{role:"tab",tabIndex:f===t?0:-1,"aria-selected":f===t,className:(0,s.Z)("tabs__item",d,{"tabs__item--active":f===t}),key:t,ref:e=>N.push(e),onKeyDown:x,onFocus:P,onClick:P},a??t)}))),n?(0,o.cloneElement)(h.filter((e=>e.props.value===f))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},h.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==f})))))}function u(e){const t=(0,l.Z)();return o.createElement(c,(0,n.Z)({key:String(t)},e))}},5478:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>p,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var n=a(87462),o=(a(67294),a(3905)),l=a(26396),i=a(58215);const r={title:"Android Play Store Deployment",sidebar_label:"Android Play Store"},p=void 0,s={unversionedId:"deployment/play-store",id:"deployment/play-store",isDocsHomePage:!1,title:"Android Play Store Deployment",description:"Android Play Store Deployment: Publish Your Ionic Apps",source:"@site/docs/deployment/play-store.mdx",sourceDirName:"deployment",slug:"/deployment/play-store",permalink:"/cn/docs/deployment/play-store",editUrl:"https://crowdin.com/project/ionic-docs",tags:[],version:"current",frontMatter:{title:"Android Play Store Deployment",sidebar_label:"Android Play Store"},sidebar:"docs",previous:{title:"iOS App Store",permalink:"/cn/docs/deployment/app-store"},next:{title:"Progressive Web App (PWA)",permalink:"/cn/docs/deployment/progressive-web-app"}},d=[{value:"Generating a release build of an app",id:"generating-a-release-build-of-an-app",children:[],level:2},{value:"Signing an APK",id:"signing-an-apk",children:[{value:"Google Play Signing",id:"google-play-signing",children:[{value:"New Apps",id:"new-apps",children:[],level:4},{value:"Existing Apps",id:"existing-apps",children:[],level:4}],level:3}],level:2},{value:"Submitting an app to the Google Play Store",id:"submitting-an-app-to-the-google-play-store",children:[],level:2},{value:"Updating an app",id:"updating-an-app",children:[],level:2}],c={toc:d};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("head",null,(0,o.kt)("title",null,"Android Play Store Deployment: Publish Your Ionic Apps"),(0,o.kt)("meta",{name:"description",content:"Ionic documentation for Android Play Store app deployment. Read about how to generate a release build and publish your Ionic apps to the Google Play Store."})),(0,o.kt)("p",null,"If you are using Capacitor, you can additionally refer to the Capacitor documentation for ",(0,o.kt)("a",{parentName:"p",href:"https://capacitorjs.com/docs/android/deploying-to-google-play"},"Deploying to Google Play"),"."),(0,o.kt)("h2",{id:"generating-a-release-build-of-an-app"},"Generating a release build of an app"),(0,o.kt)(l.Z,{groupId:"runtime",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"capacitor",label:"Capacitor",default:!0,mdxType:"TabItem"},"To generate a release build for Android, build your web app and then run the following cli command:",(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npx cap copy && npx cap sync\n")),(0,o.kt)("p",null,"This will copy all web assets and sync any plugin changes."),(0,o.kt)("p",null,"Next, open Android studio:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npx cap open android\n"))),(0,o.kt)(i.Z,{value:"cordova",label:"Cordova",mdxType:"TabItem"},"To generate a release build for Android, run the following cli command:",(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"ionic cordova build android --prod --release\n")),(0,o.kt)("p",null,"This will generate a release build based on the settings in the ",(0,o.kt)("inlineCode",{parentName:"p"},"config.xml")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"platforms/android/app/build/outputs/apk")," directory of an app.\nAn Ionic app will have preset default values in this file but this can be changed to customize builds."))),(0,o.kt)("h2",{id:"signing-an-apk"},"Signing an APK"),(0,o.kt)(l.Z,{groupId:"runtime",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"capacitor",label:"Capacitor",default:!0,mdxType:"TabItem"},"To create an AAB binary locally using Android Studio:",(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Open the Build menu"),(0,o.kt)("li",{parentName:"ul"},"Choose ",(0,o.kt)("strong",{parentName:"li"},"Generate Signed Bundle / APK")),(0,o.kt)("li",{parentName:"ul"},"Follow the prompts to sign the AAB with your keystore file")),(0,o.kt)("p",null,"For complete details, ",(0,o.kt)("a",{parentName:"p",href:"https://developer.android.com/studio/publish/app-signing"},"view the Android documentation"),"."),(0,o.kt)("h3",{id:"google-play-signing"},"Google Play Signing"),(0,o.kt)("p",null,"If you haven't made the switch to Android app bundles yet, you will need to opt into Play App Signing in the Google Play Console to be able to publish them."),(0,o.kt)("h4",{id:"new-apps"},"New Apps"),(0,o.kt)("p",null,"First, create a new app in the Google Play Console. In order to enable app signing, you'll need to navigate to the new release screen, on one of the Production, Open testing, closed testing, or internal testing pages.\nSelect the Create new release button as seen below (it doesn't matter which release type, since you don't have to actually go through with creating a new release right now):"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://blog.ionicframework.com/wp-content/uploads/2021/12/newapps-release-1024x561.png",alt:"Select create new release in Google Play Console's Production tab"})),(0,o.kt)("p",null,"Under the App integrity section, click the ",(0,o.kt)("strong",{parentName:"p"},"Change app signing key")," button:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://blog.ionicframework.com/wp-content/uploads/2021/12/newapps-signingkey.png",alt:"Select change app signing key in Google Play Console's Production tab"})),(0,o.kt)("p",null,"Next, select the ",(0,o.kt)("strong",{parentName:"p"},"Export and upload a key from Java Keystore")," option. This is the only way in which you can retain the key and have Google Play use it for signing. If you're using Appflow to build Android apps in the cloud, this is also the required option so you can upload the keystore file to Appflow."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://blog.ionicframework.com/wp-content/uploads/2021/12/newapps-export-1024x564.png",alt:"Uploading a keystore file to Google Play Console"})),(0,o.kt)("p",null,"Follow the instructions on the screen to generate the Keystore and you can use the same Keystore file to sign your app in the Appflow dashboard as well. If you need any help generating the Keystore file, you can refer to our docs ",(0,o.kt)("a",{parentName:"p",href:"https://ionic.io/docs/appflow/package/credentials#android-certificates"},"here"),".\nOnce the generated zip file has been uploaded, you're all set! Build an AAB binary signed with the keystore file then upload it to Google Play."),(0,o.kt)("h4",{id:"existing-apps"},"Existing Apps"),(0,o.kt)("p",null,"As of now, existing apps aren't required to use the AAB format, but you can still enroll them using Play App signing."),(0,o.kt)("p",null,"To opt into app signing, you'll need to upload the app signing key used to sign previous releases of the app. Navigate to Setup -> App integrity, then choose one of the two methods seen in the screenshot below. Once the key has been uploaded, you can enroll in Play App Signing."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://blog.ionicframework.com/wp-content/uploads/2021/12/existingapps-optin.png",alt:"App integrity setup in Google Play Console"})),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"With smaller app sizes, improved performance, and enhanced security, the AAB binary format is a win for app developers and users alike. If you have an existing Android app using the APK format, consider migrating to AAB to take advantage of all the great features it provides.")))),(0,o.kt)(i.Z,{value:"cordova",label:"Cordova",mdxType:"TabItem"},"First, the unsigned APK must be signed. If a signing key has already been generated, skip these steps and use that one instead. Generate a private key using the keytool command that comes with the Android SDK:",(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"keytool -genkey -v -keystore my-release-key.keystore -alias alias_name -keyalg RSA -keysize 2048 -validity 10000\n")),(0,o.kt)("p",null,"Once that command has been ran and its prompts have been answered a file called ",(0,o.kt)("inlineCode",{parentName:"p"},"my-release-key.keystore")," will be created in the current directory."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Save this file and keep it somewhere safe. If it is lost the Google Play Store will not accept updates for this app!"))),(0,o.kt)("p",null,"To sign the unsigned APK, run the jarsigner tool which is also included in the Android SDK:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-release-key.keystore HelloWorld-release-unsigned.apk alias_name\n")),(0,o.kt)("p",null,"Finally, the zip align tool must be ran to optimize the APK.\nThe ",(0,o.kt)("inlineCode",{parentName:"p"},"zipalign")," tool can be found in ",(0,o.kt)("inlineCode",{parentName:"p"},"/path/to/Android/sdk/build-tools/VERSION/zipalign"),".\nFor example, on macOS with Android Studio installed, ",(0,o.kt)("inlineCode",{parentName:"p"},"zipalign")," is in ",(0,o.kt)("inlineCode",{parentName:"p"},"~/Library/Android/sdk/build-tools/VERSION/zipalign"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"zipalign -v 4 HelloWorld-release-unsigned.apk HelloWorld.apk\n")),(0,o.kt)("p",null,"This generates a final release binary called HelloWorld.apk that can be accepted into the Google Play Store."))),(0,o.kt)("h2",{id:"submitting-an-app-to-the-google-play-store"},"Submitting an app to the Google Play Store"),(0,o.kt)("p",null,"Now that a release AAB/APK has been generated, a Play Store listing can be written and the AAB/APK can be uploaded."),(0,o.kt)("p",null,"To start, visit the ",(0,o.kt)("a",{parentName:"p",href:"https://play.google.com/apps/publish"},"Google Play Store Developer Console")," and create a new developer account."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Making a developer account with Google Play costs $25 USD."))),(0,o.kt)("p",null,"Once a developer account has been created, go ahead and click the ",(0,o.kt)("inlineCode",{parentName:"p"},"Create an Application")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Create an App button",src:a(63038).Z})),(0,o.kt)("p",null,"Be sure to fill out the description for the app along with providing screenshots and additional info.\nWhen ready, upload the signed release AAB/APK that was generated and publish the app."),(0,o.kt)("h2",{id:"updating-an-app"},"Updating an app"),(0,o.kt)("p",null,"As an app evolves, it will need to be updated with new features and fixes. An app can be updated by either submitting a new version to the Google Play Store, or by using a live update service like Appflow's Live Update feature. Using Live Updates, changes can be pushed directly to users from the Appflow dashboard, without submitting changes to the Play Store. Learn more about Live Updates ",(0,o.kt)("a",{href:"https://ionic.io/docs/appflow/deploy/intro",target:"_blank"},"here"),"."),(0,o.kt)(l.Z,{groupId:"runtime",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"capacitor",label:"Capacitor",default:!0,mdxType:"TabItem"},(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"In order for the Google Play Store to accept updated AAB/APK, the ",(0,o.kt)("inlineCode",{parentName:"p"},"android/app/build.gradle")," file will need to be edited to increment the ",(0,o.kt)("inlineCode",{parentName:"p"},"versionCode")," value, then rebuild the app for release following the instructions above.")))),(0,o.kt)(i.Z,{value:"cordova",label:"Cordova",mdxType:"TabItem"},(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"In order for the Google Play Store to accept updated AAB/APK, the config.xml file will need to be edited to increment the version value, then rebuild the app for release following the instructions above."))))))}u.isMDXComponent=!0},63038:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/newAppGPlay-fc0da5dd2945933ae6da5030c359a9a6.png"}}]);