"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[16858],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(a),m=r,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||o;return a?n.createElement(h,i(i({ref:t},p),{},{components:a})):n.createElement(h,i({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},58215:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(67294);const r=function(e){let{children:t,hidden:a,className:r}=e;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},26396:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(87462),r=a(67294),o=a(72389),i=a(79443);const l=function(){const e=(0,r.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var s=a(89521),d=a(86010);const p="tabItem_vU9c";function u(e){var t,a;const{lazy:n,block:o,defaultValue:i,values:u,groupId:c,className:m}=e,h=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=u??h.map((e=>{let{props:{value:t,label:a}}=e;return{value:t,label:a}})),v=(0,s.lx)(b,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===i?i:i??(null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)??(null==(a=h[0])?void 0:a.props.value);if(null!==k&&!b.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:g}=l(),[f,w]=(0,r.useState)(k),N=[],{blockElementScrollPositionUntilNextRender:T}=(0,s.o5)();if(null!=c){const e=y[c];null!=e&&e!==f&&b.some((t=>t.value===e))&&w(e)}const x=e=>{const t=e.currentTarget,a=N.indexOf(t),n=b[a].value;n!==f&&(T(t),w(n),null!=c&&g(c,n))},I=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{const t=N.indexOf(e.currentTarget)+1;a=N[t]||N[0];break}case"ArrowLeft":{const t=N.indexOf(e.currentTarget)-1;a=N[t]||N[N.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,d.Z)("tabs",{"tabs--block":o},m)},b.map((e=>{let{value:t,label:a}=e;return r.createElement("li",{role:"tab",tabIndex:f===t?0:-1,"aria-selected":f===t,className:(0,d.Z)("tabs__item",p,{"tabs__item--active":f===t}),key:t,ref:e=>N.push(e),onKeyDown:I,onFocus:x,onClick:x},a??t)}))),n?(0,r.cloneElement)(h.filter((e=>e.props.value===f))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},h.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==f})))))}function c(e){const t=(0,o.Z)();return r.createElement(u,(0,n.Z)({key:String(t)},e))}},55820:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294);const r=e=>{const[t,a]=(0,n.useState)(e?"loading":"idle");return(0,n.useEffect)((()=>{if(!e)return void a("idle");let t=document.querySelector(`script[src="${e}"]`);if(t)a(t.getAttribute("data-status"));else{t=document.createElement("script"),t.src=e,t.async=!0,t.setAttribute("data-status","loading"),document.body.appendChild(t);const a=e=>{t.setAttribute("data-status","load"===e.type?"ready":"error")};t.addEventListener("load",a),t.addEventListener("error",a)}const n=e=>{a("load"===e.type?"ready":"error")};return t.addEventListener("load",n),t.addEventListener("error",n),()=>{t&&(t.removeEventListener("load",n),t.removeEventListener("error",n))}}),[e]),t};const o=function(e){return r("https://static.codepen.io/assets/embed/ei.js"),n.createElement("div",{className:"codepen","data-height":e.height,"data-theme-id":e.theme,"data-default-tab":e.defaultTab,"data-user":e.user,"data-slug-hash":e.slug,"data-preview":e.preview?"true":"false","data-pen-title":e.penTitle,"no-prerender":"true"})}},27074:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>d,default:()=>m,frontMatter:()=>s,metadata:()=>p,toc:()=>u});var n=a(87462),r=(a(67294),a(3905)),o=a(55820),i=a(26396),l=a(58215);const s={title:"Keyboard"},d=void 0,p={unversionedId:"developing/keyboard",id:"developing/keyboard",isDocsHomePage:!1,title:"Keyboard",description:"Keyboard Guide: Tools to Manage an On-Screen Mobile App Keyboard",source:"@site/docs/developing/keyboard.md",sourceDirName:"developing",slug:"/developing/keyboard",permalink:"/docs/developing/keyboard",editUrl:"https://github.com/ionic-team/ionic-docs/edit/main/docs/developing/keyboard.md",tags:[],version:"current",frontMatter:{title:"Keyboard"},sidebar:"docs",previous:{title:"Hardware Back Button",permalink:"/docs/developing/hardware-back-button"},next:{title:"Structure",permalink:"/docs/layout/structure"}},u=[{value:"inputmode",id:"inputmode",children:[{value:"Usage",id:"usage",children:[],level:3}],level:2},{value:"enterkeyhint",id:"enterkeyhint",children:[{value:"Usage",id:"usage-1",children:[],level:3}],level:2},{value:"Dark Mode",id:"dark-mode",children:[],level:2},{value:"Hiding the Accessory Bar",id:"hiding-the-accessory-bar",children:[],level:2},{value:"Keyboard Lifecycle Events",id:"keyboard-lifecycle-events",children:[{value:"Usage",id:"usage-2",children:[],level:3}],level:2}],c={toc:u};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("title",null,"Keyboard Guide: Tools to Manage an On-Screen Mobile App Keyboard"),(0,r.kt)("meta",{name:"description",content:"Accounting for an on-screen keyboard is a common developer roadblock. This guide introduces the tools available for managing on-screen keyboards in mobile apps."})),(0,r.kt)("p",null,"Customizing and accounting for the presence of an on-screen keyboard are two common roadblocks developers face when building mobile apps and PWAs. This guide will provide an introduction to the various tools available for managing the on-screen keyboard in your application."),(0,r.kt)("h2",{id:"inputmode"},"inputmode"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"inputmode")," attribute allows developers to specify what type of data might be entered into an input. This will prompt the browser to show a keyboard that includes buttons relevant to what the user may enter. For example, ",(0,r.kt)("inlineCode",{parentName:"p"},'inputmode="email"')," will display a keyboard with the ",(0,r.kt)("inlineCode",{parentName:"p"},"@")," key as well as other optimizations for entering emails."),(0,r.kt)("p",null,"Since ",(0,r.kt)("inlineCode",{parentName:"p"},"inputmode")," is a global attribute, it can be used on Ionic components such as ",(0,r.kt)("inlineCode",{parentName:"p"},"ion-input")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"ion-textarea")," in addition to regular input elements."),(0,r.kt)("p",null,"Inputs that ",(0,r.kt)("em",{parentName:"p"},"require")," a certain data type should use the ",(0,r.kt)("inlineCode",{parentName:"p"},"type")," attribute instead. For example, inputs that require an email should use ",(0,r.kt)("inlineCode",{parentName:"p"},'type="email"')," rather than specifying an ",(0,r.kt)("inlineCode",{parentName:"p"},"inputmode.")," This is because the data that will be entered is always going to be in the form of an email. On the other hand, if the input accepts an email or a username, using ",(0,r.kt)("inlineCode",{parentName:"p"},"inputmode=\u201demail\u201d")," is appropriate because the data being entered is not always going to be an email address."),(0,r.kt)("p",null,"For a list of accepted values, see the ",(0,r.kt)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/inputmode",target:"_blank",rel:"noreferrer"},"inputmode Documentation"),"."),(0,r.kt)("h3",{id:"usage"},"Usage"),(0,r.kt)(i.Z,{defaultValue:"javascript",groupId:"framework",values:[{value:"javascript",label:"JavaScript"},{value:"angular",label:"Angular"},{value:"react",label:"React"},{value:"vue",label:"Vue"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"javascript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<ion-item>\n  <ion-label>Username or Email</ion-label>\n  <ion-input inputmode="email"></ion-input>\n</ion-item>\n\n<ion-item>\n  <ion-label>Enter a number</ion-label>\n  <ion-textarea inputmode="numeric"></ion-textarea>\n</ion-item>\n'))),(0,r.kt)(l.Z,{value:"angular",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<ion-item>\n  <ion-label>Username or Email</ion-label>\n  <ion-input inputmode="email"></ion-input>\n</ion-item>\n\n<ion-item>\n  <ion-label>Enter a number</ion-label>\n  <ion-textarea inputmode="numeric"></ion-textarea>\n</ion-item>\n'))),(0,r.kt)(l.Z,{value:"react",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<IonItem>\n  <IonLabel>Username or Email</IonLabel>\n  <IonInput inputmode="email"></IonInput>\n</IonItem>\n\n<IonItem>\n  <IonLabel>Enter a number</IonLabel>\n  <IonTextarea inputmode="numeric"></IonTextarea>\n</IonItem>\n'))),(0,r.kt)(l.Z,{value:"vue",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<ion-item>\n  <ion-label>Username or Email</ion-label>\n  <ion-input inputmode="email"></ion-input>\n</ion-item>\n\n<ion-item>\n  <ion-label>Enter a number</ion-label>\n  <ion-textarea inputmode="numeric"></ion-textarea>\n</ion-item>\n')))),(0,r.kt)(o.Z,{user:"ionic",slug:"abvJVVv",height:"400",mdxType:"Codepen"}),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"inputmode")," attribute is supported on devices running Chrome 66+ and iOS Safari 12.2+: ",(0,r.kt)("a",{parentName:"p",href:"https://caniuse.com/#search=inputmode"},"https://caniuse.com/#search=inputmode")))),(0,r.kt)("h2",{id:"enterkeyhint"},"enterkeyhint"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"enterkeyhint"),' attribute allows developers to specify what type of action label or icon should be shown for the "Enter" key. Using ',(0,r.kt)("inlineCode",{parentName:"p"},"enterkeyhint")," lets the user know what will happen when they tap the \u201cEnter\u201d key. The value that should be specified here depends on the context of what the user is doing. For example, if the user is typing into a searchbox, developers should ensure that the input has ",(0,r.kt)("inlineCode",{parentName:"p"},'enterkeyhint="search"'),"."),(0,r.kt)("p",null,"Since ",(0,r.kt)("inlineCode",{parentName:"p"},"enterkeyhint")," is a global attribute, it can be used on Ionic components such as ",(0,r.kt)("inlineCode",{parentName:"p"},"ion-input")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"ion-textarea")," in addition to regular input elements."),(0,r.kt)("p",null,"For a list of accepted values, see the ",(0,r.kt)("a",{href:"https://html.spec.whatwg.org/dev/interaction.html#input-modalities:-the-enterkeyhint-attribute",target:"_blank",rel:"noreferrer"},"enterkeyhint Standard"),"."),(0,r.kt)("h3",{id:"usage-1"},"Usage"),(0,r.kt)(i.Z,{groupId:"framework",defaultValue:"javascript",values:[{value:"javascript",label:"JavaScript"},{value:"angular",label:"Angular"},{value:"react",label:"React"},{value:"vue",label:"Vue"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"javascript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<ion-item>\n  <ion-label>Enter search query</ion-label>\n  <ion-input enterkeyhint="search" type="search"></ion-input>\n</ion-item>\n'))),(0,r.kt)(l.Z,{value:"angular",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<ion-item>\n  <ion-label>Enter search query</ion-label>\n  <ion-input enterkeyhint="search" type="search"></ion-input>\n</ion-item>\n'))),(0,r.kt)(l.Z,{value:"react",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<IonItem>\n  <IonLabel>Enter search query</IonLabel>\n  <IonInput enterkeyhint="search" type="search"></IonInput>\n</IonItem>\n'))),(0,r.kt)(l.Z,{value:"vue",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<ion-item>\n  <ion-label>Enter search query</ion-label>\n  <ion-input enterkeyhint="search" type="search"></ion-input>\n</ion-item>\n')))),(0,r.kt)(o.Z,{user:"ionic",slug:"GRpWyRB",height:"350",mdxType:"Codepen"}),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"enterkeyhint")," attribute is supported on devices running Chrome 77+ and iOS Safari 13.4+."))),(0,r.kt)("h2",{id:"dark-mode"},"Dark Mode"),(0,r.kt)("p",null,"By default the keyboard theme is determined by the OS. For example, if dark mode is enabled on iOS, the keyboard in your app will appear with a dark theme even if your application does not have a dark theme in its CSS."),(0,r.kt)("p",null,"When running an app in a mobile web browser or as a PWA there is no way to force the keyboard to appear with a certain theme."),(0,r.kt)("p",null,"When running an app in Capacitor or Cordova, it is possible to force the keyboard to appear with a certain theme. For more information regarding this configuration, see the ",(0,r.kt)("a",{href:"https://capacitorjs.com/docs/apis/keyboard#keyboard-configuration-ios-only-",target:"_blank"},"Capacitor Keyboard Documentation"),"."),(0,r.kt)("h2",{id:"hiding-the-accessory-bar"},"Hiding the Accessory Bar"),(0,r.kt)("p",null,"When running any kind of web based application, iOS will show an accessory bar above the keyboard. This allows users to move to the next or previous inputs as well as close the keyboard."),(0,r.kt)("p",null,"When running an app in a mobile web browser or as a PWA there is no way to hide the accessory bar."),(0,r.kt)("p",null,"When running an app in Capacitor or Cordova, it is possible to hide the accessory bar. For more information regarding this configuration, see the ",(0,r.kt)("a",{href:"https://capacitorjs.com/docs/apis/keyboard#keyboard-configuration-ios-only-",target:"_blank"},"Capacitor Keyboard Documentation"),"."),(0,r.kt)("h2",{id:"keyboard-lifecycle-events"},"Keyboard Lifecycle Events"),(0,r.kt)("p",null,"Detecting the presence of an on-screen keyboard is useful for adjusting the positioning of an input that would otherwise be hidden by the keyboard. For Capacitor and Cordova apps, developers typically rely on native keyboard plugins to listen for the keyboard lifecycle events. For apps running in a mobile browser or as a PWA, developers can use the ",(0,r.kt)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/Visual_Viewport_API",rel:"noreferrer",target:"_blank"},"Visual Viewport API")," where supported. Ionic Framework wraps both of these approaches and emits ",(0,r.kt)("inlineCode",{parentName:"p"},"ionKeyboardDidShow")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"ionKeyboardDidHide")," events on the ",(0,r.kt)("inlineCode",{parentName:"p"},"window"),". The event payload for ",(0,r.kt)("inlineCode",{parentName:"p"},"ionKeyboardDidShow")," contains an approximation of the keyboard height in pixels."),(0,r.kt)("h3",{id:"usage-2"},"Usage"),(0,r.kt)(i.Z,{groupId:"framework",defaultValue:"javascript",values:[{value:"javascript",label:"JavaScript"},{value:"angular",label:"Angular"},{value:"react",label:"React"},{value:"vue",label:"Vue"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"javascript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"window.addEventListener('ionKeyboardDidShow', ev => {\n  const { keyboardHeight } = ev;\n  // Do something with the keyboard height such as translating an input above the keyboard.\n});\n\nwindow.addEventListener('ionKeyboardDidHide', () => {\n  // Move input back to original location\n});\n"))),(0,r.kt)(l.Z,{value:"angular",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Platform } from '@ionic/angular';\n\n...\n\nconstructor(private platform: Platform) {\n  this.platform.keyboardDidShow.subscribe(ev => {\n    const { keyboardHeight } = ev;\n    // Do something with the keyboard height such as translating an input above the keyboard.\n  });\n\n  this.platform.keyboardDidHide.subscribe(() => {\n    // Move input back to original location\n  });\n}\n"))),(0,r.kt)(l.Z,{value:"react",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useKeyboardState } from '@ionic/react-hooks/keyboard';\n\n...\n\nconst { isOpen, keyboardHeight } = useKeyboardState();\n\n// Do something with the keyboard height such as translating an input above the keyboard\n"))),(0,r.kt)(l.Z,{value:"vue",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useKeyboard } from '@ionic/vue';\nimport { watch } from 'vue';\n\n...\n\nconst { isOpen, keyboardHeight } = useKeyboard();\n\nwatch(keyboardHeight, () => {\n  console.log(`Is Keyboard Open: ${isOpen.value}, Keyboard Height: ${keyboardHeight.value}`);\n});\n\n\n")))),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"For apps running in a mobile web browser or as a PWA, Keyboard Lifecycle Events are only supported on Chrome 62+ and iOS Safari 13.0+."))))}m.isMDXComponent=!0}}]);