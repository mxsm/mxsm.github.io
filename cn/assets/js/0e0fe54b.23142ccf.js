"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[8565],{3905:(e,a,n)=>{n.d(a,{Zo:()=>p,kt:()=>m});var t=n(67294);function o(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){o(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function l(e,a){if(null==e)return{};var n,t,o=function(e,a){if(null==e)return{};var n,t,o={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(o[n]=e[n]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=t.createContext({}),s=function(e){var a=t.useContext(c),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},p=function(e){var a=s(e.components);return t.createElement(c.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},d=t.forwardRef((function(e,a){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,v=d["".concat(c,".").concat(m)]||d[m]||u[m]||r;return n?t.createElement(v,i(i({ref:a},p),{},{components:n})):t.createElement(v,i({ref:a},p))}));function m(e,a){var n=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var c in a)hasOwnProperty.call(a,c)&&(l[c]=a[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58215:(e,a,n)=>{n.d(a,{Z:()=>o});var t=n(67294);const o=function(e){let{children:a,hidden:n,className:o}=e;return t.createElement("div",{role:"tabpanel",hidden:n,className:o},a)}},26396:(e,a,n)=>{n.d(a,{Z:()=>d});var t=n(87462),o=n(67294),r=n(72389),i=n(79443);const l=function(){const e=(0,o.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var c=n(89521),s=n(86010);const p="tabItem_vU9c";function u(e){var a,n;const{lazy:t,block:r,defaultValue:i,values:u,groupId:d,className:m}=e,v=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=u??v.map((e=>{let{props:{value:a,label:n}}=e;return{value:a,label:n}})),h=(0,c.lx)(g,((e,a)=>e.value===a.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===i?i:i??(null==(a=v.find((e=>e.props.default)))?void 0:a.props.value)??(null==(n=v[0])?void 0:n.props.value);if(null!==f&&!g.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:y}=l(),[k,w]=(0,o.useState)(f),C=[],{blockElementScrollPositionUntilNextRender:N}=(0,c.o5)();if(null!=d){const e=b[d];null!=e&&e!==k&&g.some((a=>a.value===e))&&w(e)}const I=e=>{const a=e.currentTarget,n=C.indexOf(a),t=g[n].value;t!==k&&(N(a),w(t),null!=d&&y(d,t))},T=e=>{var a;let n=null;switch(e.key){case"ArrowRight":{const a=C.indexOf(e.currentTarget)+1;n=C[a]||C[0];break}case"ArrowLeft":{const a=C.indexOf(e.currentTarget)-1;n=C[a]||C[C.length-1];break}}null==(a=n)||a.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":r},m)},g.map((e=>{let{value:a,label:n}=e;return o.createElement("li",{role:"tab",tabIndex:k===a?0:-1,"aria-selected":k===a,className:(0,s.Z)("tabs__item",p,{"tabs__item--active":k===a}),key:a,ref:e=>C.push(e),onKeyDown:T,onFocus:I,onClick:I},n??a)}))),t?(0,o.cloneElement)(v.filter((e=>e.props.value===k))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},v.map(((e,a)=>(0,o.cloneElement)(e,{key:a,hidden:e.props.value!==k})))))}function d(e){const a=(0,r.Z)();return o.createElement(u,(0,t.Z)({key:String(a)},e))}},10080:(e,a,n)=>{n.r(a),n.d(a,{contentTitle:()=>c,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var t=n(87462),o=(n(67294),n(3905)),r=n(26396),i=n(58215);const l={title:"Cordova Community Plugins",sidebar_label:"Setup",hide_table_of_contents:!0,slug:"/native/community"},c=void 0,s={unversionedId:"native-community",id:"native-community",isDocsHomePage:!1,title:"Cordova Community Plugins",description:"Cordova Plugins | Cordova Community Core Plugins for Ionic Apps",source:"@site/docs/native-community.md",sourceDirName:".",slug:"/native/community",permalink:"/cn/docs/native/community",editUrl:"https://crowdin.com/project/ionic-docs",tags:[],version:"current",frontMatter:{title:"Cordova Community Plugins",sidebar_label:"Setup",hide_table_of_contents:!0,slug:"/native/community"},sidebar:"native",previous:{title:"Native APIs",permalink:"/cn/docs/native"},next:{title:"FAQ",permalink:"/cn/docs/native/faq"}},p=[{value:"Capacitor Support",id:"capacitor-support",children:[],level:2},{value:"Usage",id:"usage",children:[],level:2},{value:"Angular",id:"angular",children:[],level:2},{value:"React",id:"react",children:[],level:2},{value:"Vanilla JavaScript",id:"vanilla-javascript",children:[],level:2}],u={toc:p};function d(e){let{components:a,...n}=e;return(0,o.kt)("wrapper",(0,t.Z)({},u,n,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("head",null,(0,o.kt)("title",null,"Cordova Plugins | Cordova Community Core Plugins for Ionic Apps"),(0,o.kt)("meta",{name:"description",content:"For the Cordova user community, our collection of TypeScript wrappers for open source Cordova core plugins easily add native functionality to any Ionic app."})),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://cordova.apache.org/"},"Apache Cordova")," is an open source native runtime that allows developers to build native mobile apps with HTML, CSS, and JavaScript. Similar to ",(0,o.kt)("a",{parentName:"p",href:"https://capacitorjs.com/"},"Capacitor"),", Ionic\u2019s own native runtime, Cordova allows developers to access native device features, such as camera, keyboard, and geolocation, using a system of plugins. A plugin is a small amount of add-on code that provides JavaScript interface to native components. They allow your app to use native device capabilities beyond what is available to pure web apps."),(0,o.kt)("p",null,"For developers using Ionic with Cordova, our team has developed a collection of TypeScript wrappers for open source Cordova plugins that make it easy to add native functionality to any Ionic app. See ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ionic-team/ionic-native"},"Ionic Native"),"."),(0,o.kt)("p",null,"These plugins are submitted and maintained by the Ionic community. While community members are generally quick to find and fix issues, certain plugins may not function properly."),(0,o.kt)("p",null,"For professional developers and teams that require dedicated native plugin support & SLAs, ongoing maintenance, and security patches, please explore our ",(0,o.kt)("a",{parentName:"p",href:"https://ionicframework.com/native"},"premium options"),", including plugin support and pre-built solutions for common native use cases."),(0,o.kt)("intro-end",null),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"These docs are for apps built with Ionic Framework 4.0.0 and greater. For older Ionic v3 projects, please ",(0,o.kt)("a",{parentName:"p",href:"https://ionicframework.com/docs/v3/native"},"see here"),"."))),(0,o.kt)("h2",{id:"capacitor-support"},"Capacitor Support"),(0,o.kt)("p",null,"In addition to Cordova, Ionic Native also works with ",(0,o.kt)("a",{parentName:"p",href:"https://capacitorjs.com"},"Capacitor"),", Ionic's official native runtime. Basic usage below. For complete details, ",(0,o.kt)("a",{parentName:"p",href:"https://capacitorjs.com/docs/cordova/using-cordova-plugins"},"see the Capacitor documentation"),"."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"All plugins have two components - the native code (Cordova) and the TypeScript code (Ionic Native).\nCordova plugins are also wrapped in a ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"Observable")," in order to provide a common plugin interface and modernized development approach."),(0,o.kt)("p",null,"Using the ",(0,o.kt)("a",{parentName:"p",href:"/cn/docs/native/camera"},"Camera plugin")," as an example, first install it:"),(0,o.kt)(r.Z,{groupId:"runtime",defaultValue:"cordova",values:[{value:"cordova",label:"Cordova"},{value:"capacitor",label:"Capacitor"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"cordova",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"// Install Cordova plugin\n$ ionic cordova plugin add cordova-plugin-camera\n\n// Install Ionic Native TypeScript wrapper\n$ npm install @awesome-cordova-plugins/camera\n\n// Install Ionic Native core library (once per project)\n$ npm install @awesome-cordova-plugins/core\n"))),(0,o.kt)(i.Z,{value:"capacitor",mdxType:"TabItem"},(0,o.kt)("p",null,"For complete details, ",(0,o.kt)("a",{parentName:"p",href:"https://capacitorjs.com/docs/cordova/using-cordova-plugins"},"see the Capacitor documentation"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"// Install Ionic Native TypeScript wrapper\n$ npm install @awesome-cordova-plugins/camera\n\n// Install Cordova plugin\n$ npm install cordova-plugin-camera\n\n// Update native platform project(s) to include newly added plugin\n$ ionic cap sync\n")))),(0,o.kt)("p",null,"Next, begin using the plugin, following the various framework usage options below. For FAQ, see ",(0,o.kt)("a",{parentName:"p",href:"/cn/docs/native/faq"},"here"),"."),(0,o.kt)("h2",{id:"angular"},"Angular"),(0,o.kt)("p",null,"Angular apps can use either Cordova or Capacitor to build native mobile apps. Import the plugin in a ",(0,o.kt)("inlineCode",{parentName:"p"},"@NgModule")," and add it to the list of Providers. For Angular, the import path should end with ",(0,o.kt)("inlineCode",{parentName:"p"},"/ngx"),". Angular's change detection is automatically handled."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"// app.module.ts\nimport { Camera } from '@awesome-cordova-plugins/camera/ngx';\n\n...\n\n@NgModule({\n  ...\n\n  providers: [\n    ...\n    Camera\n    ...\n  ]\n  ...\n})\nexport class AppModule { }\n")),(0,o.kt)("p",null,"After the plugin has been declared, it can be imported and injected like any other service:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"// camera.service.ts\nimport { Injectable } from '@angular/core';\nimport { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';\n\n@Injectable({\n  providedIn: 'root',\n})\nexport class PhotoService {\n  constructor(private camera: Camera) {}\n\n  takePicture() {\n    const options: CameraOptions = {\n      quality: 100,\n      destinationType: this.camera.DestinationType.DATA_URL,\n      encodingType: this.camera.EncodingType.JPEG,\n      mediaType: this.camera.MediaType.PICTURE,\n    };\n\n    this.camera.getPicture(options).then(\n      (imageData) => {\n        // Do something with the new photo\n      },\n      (err) => {\n        // Handle error\n        console.log('Camera issue: ' + err);\n      }\n    );\n  }\n}\n")),(0,o.kt)("h2",{id:"react"},"React"),(0,o.kt)("p",null,"React apps must use Capacitor to build native mobile apps. However, Ionic Native (and therefore, Cordova plugins) can still be used."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell-session"},"// Install Core library (once per project)\n$ npm install @awesome-cordova-plugins/core\n\n// Install Ionic Native TypeScript wrapper\n$ npm install @awesome-cordova-plugins/barcode-scanner\n\n// Install Cordova plugin\n$ npm install phonegap-plugin-barcodescanner\n\n// Update native platform project(s) to include newly added plugin\n$ ionic cap sync\n")),(0,o.kt)("p",null,"Import the plugin object then use its static methods:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner';\n\nconst Tab1: React.FC = () => {\n  const openScanner = async () => {\n    const data = await BarcodeScanner.scan();\n    console.log(`Barcode data: ${data.text}`);\n  };\n  return (\n    <IonPage>\n      <IonHeader>\n        <IonToolbar>\n          <IonTitle>Tab 1</IonTitle>\n        </IonToolbar>\n      </IonHeader>\n      <IonContent>\n        <IonButton onClick={openScanner}>Scan barcode</IonButton>\n      </IonContent>\n    </IonPage>\n  );\n};\n")),(0,o.kt)("h2",{id:"vanilla-javascript"},"Vanilla JavaScript"),(0,o.kt)("p",null,"Vanilla JavaScript apps, targeting ES2015+ and/or TypeScript, can use either Cordova or Capacitor to build native mobile apps. To use any plugin, import the class from the appropriate package and use its static methods:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { Camera } from '@awesome-cordova-plugins/camera';\n\ndocument.addEventListener('deviceready', () => {\n  Camera.getPicture()\n    .then((data) => console.log('Took a picture!', data))\n    .catch((e) => console.log('Error occurred while taking a picture', e));\n});\n")))}d.isMDXComponent=!0}}]);