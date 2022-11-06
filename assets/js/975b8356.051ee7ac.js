"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[62645],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||r;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58215:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294);const i=function(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",hidden:n,className:i},t)}},26396:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(87462),i=n(67294),r=n(72389),o=n(79443);const s=function(){const e=(0,i.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var l=n(89521),c=n(86010);const u="tabItem_vU9c";function p(e){var t,n;const{lazy:a,block:r,defaultValue:o,values:p,groupId:d,className:m}=e,h=i.Children.map(e.children,(e=>{if((0,i.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=p??h.map((e=>{let{props:{value:t,label:n}}=e;return{value:t,label:n}})),f=(0,l.lx)(v,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===o?o:o??(null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)??(null==(n=h[0])?void 0:n.props.value);if(null!==g&&!v.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:k}=s(),[y,w]=(0,i.useState)(g),N=[],{blockElementScrollPositionUntilNextRender:S}=(0,l.o5)();if(null!=d){const e=b[d];null!=e&&e!==y&&v.some((t=>t.value===e))&&w(e)}const T=e=>{const t=e.currentTarget,n=N.indexOf(t),a=v[n].value;a!==y&&(S(t),w(a),null!=d&&k(d,a))},z=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=N.indexOf(e.currentTarget)+1;n=N[t]||N[0];break}case"ArrowLeft":{const t=N.indexOf(e.currentTarget)-1;n=N[t]||N[N.length-1];break}}null==(t=n)||t.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":r},m)},v.map((e=>{let{value:t,label:n}=e;return i.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:(0,c.Z)("tabs__item",u,{"tabs__item--active":y===t}),key:t,ref:e=>N.push(e),onKeyDown:z,onFocus:T,onClick:T},n??t)}))),a?(0,i.cloneElement)(h.filter((e=>e.props.value===y))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},h.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==y})))))}function d(e){const t=(0,r.Z)();return i.createElement(p,(0,a.Z)({key:String(t)},e))}},33562:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var a=n(87462),i=(n(67294),n(3905)),r=n(26396),o=n(58215);const s={title:"Security",disableHtmlPreviews:!0},l=void 0,c={unversionedId:"techniques/security",id:"techniques/security",isDocsHomePage:!1,title:"Security",description:"Security for Angular, React, and Vue Apps - Ionic Framework",source:"@site/docs/techniques/security.md",sourceDirName:"techniques",slug:"/techniques/security",permalink:"/docs/techniques/security",editUrl:"https://github.com/ionic-team/ionic-docs/edit/main/docs/techniques/security.md",tags:[],version:"current",frontMatter:{title:"Security",disableHtmlPreviews:!0},sidebar:"docs",previous:{title:"Electron Desktop App",permalink:"/docs/deployment/desktop-app"},next:{title:"Debugging",permalink:"/docs/troubleshooting/debugging"}},u=[{value:"Sanitizing User Input",id:"sanitizing-user-input",children:[{value:"Angular",id:"angular",children:[],level:3},{value:"React",id:"react",children:[],level:3},{value:"Vue",id:"vue",children:[],level:3}],level:2},{value:"Ejecting from the built-in sanitizer",id:"ejecting-from-the-built-in-sanitizer",children:[{value:"Disabling the sanitizer via config",id:"disabling-the-sanitizer-via-config",children:[],level:3},{value:"Bypassing the sanitizer on a case-by-case basis",id:"bypassing-the-sanitizer-on-a-case-by-case-basis",children:[{value:"Usage",id:"usage",children:[],level:4}],level:3}],level:2}],p={toc:u};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("head",null,(0,i.kt)("title",null,"Security for Angular, React, and Vue Apps - Ionic Framework"),(0,i.kt)("meta",{name:"description",content:"View Ionic's security info for sanitizing user input, ejecting from the built-in sanitizer, and more. Learn about app security using Angular, React, and Vue."})),(0,i.kt)("h2",{id:"sanitizing-user-input"},"Sanitizing User Input"),(0,i.kt)("p",null,"For components such as ",(0,i.kt)("inlineCode",{parentName:"p"},"ion-alert")," developers can allow for custom or user-provided content. This content can be plain text or HTML and should be considered untrusted. As with any untrusted input, it is important to sanitize it before doing anything else with it. In particular, using things like ",(0,i.kt)("inlineCode",{parentName:"p"},"innerHTML")," without sanitization provides an attack vector for bad actors to input malicious content and potentially launch a ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Cross-site_scripting"},"Cross Site Scripting attack (XSS)"),"."),(0,i.kt)("p",null,"Ionic comes built in with basic sanitization methods for the components it provides, but for user-created components it is up to the developer to make sure all data is sanitized. Different frameworks have different solutions for sanitizing user input, so developers should familiarize themselves with what their specific framework offers."),(0,i.kt)("p",null,"For developers who are not using a framework, or for developers whose framework does not provide the sanitization methods they need, we recommend using ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/sanitize-html"},"sanitize-html"),". This package provides a simple HTML sanitizer that allows the developer to specify the exact tags and attributes that they want to allow in their application."),(0,i.kt)("h3",{id:"angular"},"Angular"),(0,i.kt)("p",null,"Angular comes built in with the ",(0,i.kt)("inlineCode",{parentName:"p"},"DomSanitizer")," class. This helps prevent XSS issues by ensuring that values are safe to be used in the DOM. By default, Angular will mark any values it deems unsafe. For example, the following link would be marked as unsafe by Angular because it would attempt to execute some JavaScript."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'public myUrl: string = \'javascript:alert("oh no!")\';\n\n...\n\n<a [href]="myUrl">Click Me!</a>\n')),(0,i.kt)("p",null,"To learn more about the built-in protections that Angular provides, see the ",(0,i.kt)("a",{parentName:"p",href:"https://angular.io/guide/security"},"Angular Security Guide"),"."),(0,i.kt)("h3",{id:"react"},"React"),(0,i.kt)("p",null,"React DOM escapes values embedded in JSX before rendering them by converting them to strings. For example, the following would be safe as ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," is converted to a string before being rendered:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"const name = values.name;\nconst element = <h1>Hello, {name}!</h1>;\n")),(0,i.kt)("p",null,"However, this does not stop someone from injecting JavaScript into places such as the ",(0,i.kt)("inlineCode",{parentName:"p"},"href")," attribute of an anchor element. The following is unsafe and can potentially allow an XSS attack to occur:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"const userInput = 'javascript:alert(\"Oh no!\")';\nconst element = <a href={userInput}>Click Me!</a>;\n")),(0,i.kt)("p",null,"If the developer needs to achieve more comprehensive sanitization, they can use the ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/sanitize-html"},"sanitize-html")," package."),(0,i.kt)("p",null,"To learn more about the built-in protections that React and JSX provide, see the ",(0,i.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/introducing-jsx.html#jsx-prevents-injection-attacks"},"React JSX Documentation"),"."),(0,i.kt)("h3",{id:"vue"},"Vue"),(0,i.kt)("p",null,"Vue does not provide any type of sanitizing methods built in. It is recommended that developers use a package such as ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/sanitize-html"},"sanitize-html"),"."),(0,i.kt)("p",null,"To learn more about the security recommendations for binding to directives such as ",(0,i.kt)("inlineCode",{parentName:"p"},"v-html"),", see the ",(0,i.kt)("a",{parentName:"p",href:"https://vuejs.org/v2/guide/syntax.html#Raw-HTML"},"Vue Syntax Guide"),"."),(0,i.kt)("h2",{id:"ejecting-from-the-built-in-sanitizer"},"Ejecting from the built-in sanitizer"),(0,i.kt)("p",null,"For developers who wish to add complex HTML to components such as ",(0,i.kt)("inlineCode",{parentName:"p"},"ion-toast"),", they will need to eject from the sanitizer that is built into Ionic Framework. Developers can either disable the sanitizer across their entire app or bypass it on a case-by-case basis."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Bypassing sanitization functionality can make your application vulnerable to ",(0,i.kt)("a",{href:"https://en.wikipedia.org/wiki/Cross-site_scripting",target:"_blank",rel:"noreferrer"},"XSS attacks"),". Please exercise extreme caution when disabling the sanitizer."))),(0,i.kt)("h3",{id:"disabling-the-sanitizer-via-config"},"Disabling the sanitizer via config"),(0,i.kt)("p",null,"Ionic Framework provides an application config option called ",(0,i.kt)("inlineCode",{parentName:"p"},"sanitizerEnabled")," that is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," by default. Set this value to ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," to globally disable Ionic Framework's built in sanitizer. Please note that this does not disable any sanitizing functionality provided by other frameworks such as Angular."),(0,i.kt)("h3",{id:"bypassing-the-sanitizer-on-a-case-by-case-basis"},"Bypassing the sanitizer on a case-by-case basis"),(0,i.kt)("p",null,"Developers can also choose to eject from the sanitizer in certain scenarios. Ionic Framework provides the ",(0,i.kt)("inlineCode",{parentName:"p"},"IonicSafeString")," class that allows developers to do just that."),(0,i.kt)("h4",{id:"usage"},"Usage"),(0,i.kt)(r.Z,{groupId:"framework",defaultValue:"angular",values:[{value:"angular",label:"Angular"},{value:"javascript",label:"JavaScript"},{value:"react",label:"React"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"angular",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import { IonicSafeString, ToastController } from '@ionic/angular';\n\n...\n\nconstructor(private toastController: ToastController) {}\n\nasync presentToast() {\n  const toast = await this.toastController.create({\n      message: new IonicSafeString('<ion-button>Hello!</ion-button>'),\n      duration: 2000\n  });\n  toast.present();\n}\n\n"))),(0,i.kt)(o.Z,{value:"javascript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"import { IonicSafeString } from '@ionic/core';\n\n...\n\nconst async presentToast = () => {\n  const toast = document.createElement('ion-toast');\n  toast.message = new IonicSafeString('<ion-button>Hello!</ion-button>');\n  toast.duration = 2000;\n\n  document.body.appendChild(toast);\n  return toast.present();\n}\n\n"))),(0,i.kt)(o.Z,{value:"react",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import React, { useState } from 'react';\nimport { Animation, IonButton, IonContent, IonicSafeString, IonToast } from '@ionic/react';\n\nexport const ToastExample: React.FC = () => {\n  const [showToast, setShowToast] = useState(false);\n\n  return (\n    <IonContent>\n      <IonButton onClick={() => setShowToast(true)} expand=\"block\">Show Toast</IonButton>\n      <IonToast\n        isOpen={showToast}\n        onDidDismiss={() => setShowToast(false)}\n        message={new IonicSafeString('<ion-button>Hello!</ion-button>')}\n        duration={2000}\n      />\n    </IonContent>\n  )\n};\n")))))}d.isMDXComponent=!0}}]);