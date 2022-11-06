"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[2128],{3905:(t,n,e)=>{e.d(n,{Zo:()=>p,kt:()=>k});var a=e(67294);function o(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function r(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,a)}return e}function i(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?r(Object(e),!0).forEach((function(n){o(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function l(t,n){if(null==t)return{};var e,a,o=function(t,n){if(null==t)return{};var e,a,o={},r=Object.keys(t);for(a=0;a<r.length;a++)e=r[a],n.indexOf(e)>=0||(o[e]=t[e]);return o}(t,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)e=r[a],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(o[e]=t[e])}return o}var d=a.createContext({}),u=function(t){var n=a.useContext(d),e=n;return t&&(e="function"==typeof t?t(n):i(i({},n),t)),e},p=function(t){var n=u(t.components);return a.createElement(d.Provider,{value:n},t.children)},m={inlineCode:"code",wrapper:function(t){var n=t.children;return a.createElement(a.Fragment,{},n)}},b=a.forwardRef((function(t,n){var e=t.components,o=t.mdxType,r=t.originalType,d=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),b=u(e),k=o,c=b["".concat(d,".").concat(k)]||b[k]||m[k]||r;return e?a.createElement(c,i(i({ref:n},p),{},{components:e})):a.createElement(c,i({ref:n},p))}));function k(t,n){var e=arguments,o=n&&n.mdxType;if("string"==typeof t||o){var r=e.length,i=new Array(r);i[0]=b;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=t,l.mdxType="string"==typeof t?t:o,i[1]=l;for(var u=2;u<r;u++)i[u]=e[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,e)}b.displayName="MDXCreateElement"},58215:(t,n,e)=>{e.d(n,{Z:()=>o});var a=e(67294);const o=function(t){let{children:n,hidden:e,className:o}=t;return a.createElement("div",{role:"tabpanel",hidden:e,className:o},n)}},26396:(t,n,e)=>{e.d(n,{Z:()=>b});var a=e(87462),o=e(67294),r=e(72389),i=e(79443);const l=function(){const t=(0,o.useContext)(i.Z);if(null==t)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return t};var d=e(89521),u=e(86010);const p="tabItem_vU9c";function m(t){var n,e;const{lazy:a,block:r,defaultValue:i,values:m,groupId:b,className:k}=t,c=o.Children.map(t.children,(t=>{if((0,o.isValidElement)(t)&&void 0!==t.props.value)return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),s=m??c.map((t=>{let{props:{value:n,label:e}}=t;return{value:n,label:e}})),N=(0,d.lx)(s,((t,n)=>t.value===n.value));if(N.length>0)throw new Error(`Docusaurus error: Duplicate values "${N.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===i?i:i??(null==(n=c.find((t=>t.props.default)))?void 0:n.props.value)??(null==(e=c[0])?void 0:e.props.value);if(null!==g&&!s.some((t=>t.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${s.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:h,setTabGroupChoices:f}=l(),[y,v]=(0,o.useState)(g),x=[],{blockElementScrollPositionUntilNextRender:C}=(0,d.o5)();if(null!=b){const t=h[b];null!=t&&t!==y&&s.some((n=>n.value===t))&&v(t)}const T=t=>{const n=t.currentTarget,e=x.indexOf(n),a=s[e].value;a!==y&&(C(n),v(a),null!=b&&f(b,a))},I=t=>{var n;let e=null;switch(t.key){case"ArrowRight":{const n=x.indexOf(t.currentTarget)+1;e=x[n]||x[0];break}case"ArrowLeft":{const n=x.indexOf(t.currentTarget)-1;e=x[n]||x[x.length-1];break}}null==(n=e)||n.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":r},k)},s.map((t=>{let{value:n,label:e}=t;return o.createElement("li",{role:"tab",tabIndex:y===n?0:-1,"aria-selected":y===n,className:(0,u.Z)("tabs__item",p,{"tabs__item--active":y===n}),key:n,ref:t=>x.push(t),onKeyDown:I,onFocus:T,onClick:T},e??n)}))),a?(0,o.cloneElement)(c.filter((t=>t.props.value===y))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},c.map(((t,n)=>(0,o.cloneElement)(t,{key:n,hidden:t.props.value!==y})))))}function b(t){const n=(0,r.Z)();return o.createElement(m,(0,a.Z)({key:String(n)},t))}},56299:(t,n,e)=>{e.r(n),e.d(n,{contentTitle:()=>d,default:()=>b,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var a=e(87462),o=(e(67294),e(3905)),r=e(26396),i=e(58215);const l={title:"Back Button | ion-back-button: Custom Menu Icon for Applications",description:"The ion-back-button is a custom menu icon for Android, iOS, and Progressive Web Apps. Use Ionic Framework components to easily build applications.",sidebar_label:"ion-back-button",demoUrl:"/docs/demos/api/back-button/index.html",demoSourceUrl:"https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/back-button/index.html"},d="ion-back-button",u={unversionedId:"api/back-button",id:"version-v5/api/back-button",isDocsHomePage:!1,title:"Back Button | ion-back-button: Custom Menu Icon for Applications",description:"The ion-back-button is a custom menu icon for Android, iOS, and Progressive Web Apps. Use Ionic Framework components to easily build applications.",source:"@site/versioned_docs/version-v5/api/back-button.md",sourceDirName:"api",slug:"/api/back-button",permalink:"/docs/v5/api/back-button",editUrl:"https://github.com/ionic-team/ionic-docs/tree/main/docs/api/back-button.md",tags:[],version:"v5",frontMatter:{title:"Back Button | ion-back-button: Custom Menu Icon for Applications",description:"The ion-back-button is a custom menu icon for Android, iOS, and Progressive Web Apps. Use Ionic Framework components to easily build applications.",sidebar_label:"ion-back-button",demoUrl:"/docs/demos/api/back-button/index.html",demoSourceUrl:"https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/back-button/index.html"},sidebar:"version-v5/api",previous:{title:"ion-buttons",permalink:"/docs/v5/api/buttons"},next:{title:"ion-text",permalink:"/docs/v5/api/text"}},p=[{value:"Usage",id:"usage",children:[],level:2},{value:"Properties",id:"properties",children:[{value:"color",id:"color",children:[],level:3},{value:"defaultHref",id:"defaulthref",children:[],level:3},{value:"disabled",id:"disabled",children:[],level:3},{value:"icon",id:"icon",children:[],level:3},{value:"mode",id:"mode",children:[],level:3},{value:"routerAnimation",id:"routeranimation",children:[],level:3},{value:"text",id:"text",children:[],level:3},{value:"type",id:"type",children:[],level:3}],level:2},{value:"CSS Shadow Parts",id:"css-shadow-parts",children:[],level:2},{value:"CSS Custom Properties",id:"css-custom-properties",children:[],level:2}],m={toc:p};function b(t){let{components:n,...e}=t;return(0,o.kt)("wrapper",(0,a.Z)({},m,e,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ion-back-button"},"ion-back-button"),(0,o.kt)("p",null,"The back button navigates back in the app's history upon click. It is smart enough to know what to render based on the mode and when to show based on the navigation stack."),(0,o.kt)("p",null,"To change what is displayed in the back button, use the ",(0,o.kt)("inlineCode",{parentName:"p"},"text")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"icon")," properties."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)(r.Z,{groupId:"framework",defaultValue:"angular",values:[{value:"angular",label:"Angular"},{value:"javascript",label:"Javascript"},{value:"react",label:"React"},{value:"stencil",label:"Stencil"},{value:"vue",label:"Vue"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"angular",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- Default back button --\x3e\n<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot="start">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\x3c!-- Back button with a default href --\x3e\n<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot="start">\n      <ion-back-button defaultHref="home"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\x3c!-- Back button with custom text and icon --\x3e\n<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot="start">\n      <ion-back-button [text]="buttonText" [icon]="buttonIcon"> </ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\x3c!-- Back button with no text and custom icon --\x3e\n<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot="start">\n      <ion-back-button text="" icon="add"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\x3c!-- Danger back button next to a menu button --\x3e\n<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot="start">\n      <ion-menu-button></ion-menu-button>\n      <ion-back-button color="danger"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n'))),(0,o.kt)(i.Z,{value:"javascript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- Default back button --\x3e\n<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot="start">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\x3c!-- Back button with a default href --\x3e\n<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot="start">\n      <ion-back-button default-href="home"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\x3c!-- Back button with custom text and icon --\x3e\n<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot="start">\n      <ion-back-button text="Volver" icon="close"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\x3c!-- Back button with no text and custom icon --\x3e\n<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot="start">\n      <ion-back-button text="" icon="add"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\x3c!-- Danger back button next to a menu button --\x3e\n<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot="start">\n      <ion-menu-button></ion-menu-button>\n      <ion-back-button color="danger"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n'))),(0,o.kt)(i.Z,{value:"react",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import React from \'react\';\nimport { IonBackButton, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonContent } from \'@ionic/react\';\n\nexport const BackButtonExample: React.FC = () => (\n  <IonContent>\n    {/*-- Default back button --*/}\n    <IonHeader>\n      <IonToolbar>\n        <IonButtons slot="start">\n          <IonBackButton />\n        </IonButtons>\n      </IonToolbar>\n    </IonHeader>\n\n    {/*-- Back button with a default href --*/}\n    <IonHeader>\n      <IonToolbar>\n        <IonButtons slot="start">\n          <IonBackButton defaultHref="home" />\n        </IonButtons>\n      </IonToolbar>\n    </IonHeader>\n\n    {/*-- Back button with custom text and icon --*/}\n    <IonHeader>\n      <IonToolbar>\n        <IonButtons slot="start">\n          <IonBackButton text="buttonText" icon="buttonIcon" />\n        </IonButtons>\n      </IonToolbar>\n    </IonHeader>\n\n    {/*-- Back button with no text and custom icon --*/}\n    <IonHeader>\n      <IonToolbar>\n        <IonButtons slot="start">\n          <IonBackButton text="" icon="add" />\n        </IonButtons>\n      </IonToolbar>\n    </IonHeader>\n\n    {/*-- Danger back button next to a menu button --*/}\n    <IonHeader>\n      <IonToolbar>\n        <IonButtons slot="start">\n          <IonMenuButton />\n          <IonBackButton color="danger" />\n        </IonButtons>\n      </IonToolbar>\n    </IonHeader>\n  </IonContent>\n);\n'))),(0,o.kt)(i.Z,{value:"stencil",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Component, h } from \'@stencil/core\';\n\n@Component({\n  tag: \'back-button-example\',\n  styleUrl: \'back-button-example.css\',\n})\nexport class BackButtonExample {\n  render() {\n    const buttonText = \'Custom\';\n    const buttonIcon = \'add\';\n\n    return [\n      // Default back button\n      <ion-header>\n        <ion-toolbar>\n          <ion-buttons slot="start">\n            <ion-back-button></ion-back-button>\n          </ion-buttons>\n        </ion-toolbar>\n      </ion-header>,\n\n      // Back button with a default href\n      <ion-header>\n        <ion-toolbar>\n          <ion-buttons slot="start">\n            <ion-back-button defaultHref="home"></ion-back-button>\n          </ion-buttons>\n        </ion-toolbar>\n      </ion-header>,\n\n      // Back button with custom text and icon\n      <ion-header>\n        <ion-toolbar>\n          <ion-buttons slot="start">\n            <ion-back-button text={buttonText} icon={buttonIcon}></ion-back-button>\n          </ion-buttons>\n        </ion-toolbar>\n      </ion-header>,\n\n      // Back button with no text and custom icon\n      <ion-header>\n        <ion-toolbar>\n          <ion-buttons slot="start">\n            <ion-back-button text="" icon="add"></ion-back-button>\n          </ion-buttons>\n        </ion-toolbar>\n      </ion-header>,\n\n      // Danger back button next to a menu button\n      <ion-header>\n        <ion-toolbar>\n          <ion-buttons slot="start">\n            <ion-menu-button></ion-menu-button>\n            <ion-back-button color="danger"></ion-back-button>\n          </ion-buttons>\n        </ion-toolbar>\n      </ion-header>,\n    ];\n  }\n}\n'))),(0,o.kt)(i.Z,{value:"vue",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<template>\n  \x3c!-- Default back button --\x3e\n  <ion-header>\n    <ion-toolbar>\n      <ion-buttons slot="start">\n        <ion-back-button></ion-back-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n\n  \x3c!-- Back button with a default href --\x3e\n  <ion-header>\n    <ion-toolbar>\n      <ion-buttons slot="start">\n        <ion-back-button default-href="home"></ion-back-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n\n  \x3c!-- Back button with custom text and icon --\x3e\n  <ion-header>\n    <ion-toolbar>\n      <ion-buttons slot="start">\n        <ion-back-button :text="buttonText" :icon="buttonIcon"> </ion-back-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n\n  \x3c!-- Back button with no text and custom icon --\x3e\n  <ion-header>\n    <ion-toolbar>\n      <ion-buttons slot="start">\n        <ion-back-button text="" icon="add"></ion-back-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n\n  \x3c!-- Danger back button next to a menu button --\x3e\n  <ion-header>\n    <ion-toolbar>\n      <ion-buttons slot="start">\n        <ion-menu-button></ion-menu-button>\n        <ion-back-button color="danger"></ion-back-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n</template>\n\n<script>\n  import { IonButtons, IonHeader, IonMenuButton, IonToolbar } from \'@ionic/vue\';\n  import { defineComponent } from \'vue\';\n\n  export default defineComponent({\n    components: { IonButtons, IonHeader, IonMenuButton, IonToolbar },\n  });\n<\/script>\n')))),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"color"},"color"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null}),(0,o.kt)("th",{parentName:"tr",align:null}))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Description")),(0,o.kt)("td",{parentName:"tr",align:null},"The color to use from your application's color palette.",(0,o.kt)("br",null),"Default options are: ",(0,o.kt)("inlineCode",{parentName:"td"},'"primary"'),", ",(0,o.kt)("inlineCode",{parentName:"td"},'"secondary"'),", ",(0,o.kt)("inlineCode",{parentName:"td"},'"tertiary"'),", ",(0,o.kt)("inlineCode",{parentName:"td"},'"success"'),", ",(0,o.kt)("inlineCode",{parentName:"td"},'"warning"'),", ",(0,o.kt)("inlineCode",{parentName:"td"},'"danger"'),", ",(0,o.kt)("inlineCode",{parentName:"td"},'"light"'),", ",(0,o.kt)("inlineCode",{parentName:"td"},'"medium"'),", and ",(0,o.kt)("inlineCode",{parentName:"td"},'"dark"'),".",(0,o.kt)("br",null),"For more information on colors, see ",(0,o.kt)("a",{parentName:"td",href:"/docs/v5/theming/basics"},"theming"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Attribute")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"color"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Type")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"string \\| undefined"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Default")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,o.kt)("h3",{id:"defaulthref"},"defaultHref"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null}),(0,o.kt)("th",{parentName:"tr",align:null}))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Description")),(0,o.kt)("td",{parentName:"tr",align:null},"The url to navigate back to by default when there is no history.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Attribute")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"default-href"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Type")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"string \\| undefined"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Default")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,o.kt)("h3",{id:"disabled"},"disabled"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null}),(0,o.kt)("th",{parentName:"tr",align:null}))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Description")),(0,o.kt)("td",{parentName:"tr",align:null},"If ",(0,o.kt)("inlineCode",{parentName:"td"},"true"),", the user cannot interact with the button.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Attribute")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"disabled"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Type")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Default")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"false"))))),(0,o.kt)("h3",{id:"icon"},"icon"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null}),(0,o.kt)("th",{parentName:"tr",align:null}))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Description")),(0,o.kt)("td",{parentName:"tr",align:null},"The icon name to use for the back button.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Attribute")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"icon"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Type")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"null \\| string \\| undefined"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Default")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,o.kt)("h3",{id:"mode"},"mode"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null}),(0,o.kt)("th",{parentName:"tr",align:null}))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Description")),(0,o.kt)("td",{parentName:"tr",align:null},"The mode determines which platform styles to use.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Attribute")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"mode"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Type")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},'"ios" \\| "md"'))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Default")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,o.kt)("h3",{id:"routeranimation"},"routerAnimation"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null}),(0,o.kt)("th",{parentName:"tr",align:null}))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Description")),(0,o.kt)("td",{parentName:"tr",align:null},"When using a router, it specifies the transition animation when navigating to",(0,o.kt)("br",null),"another page.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Attribute")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Type")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"((baseEl: any, opts?: any) => Animation) \\| undefined"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Default")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,o.kt)("h3",{id:"text"},"text"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null}),(0,o.kt)("th",{parentName:"tr",align:null}))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Description")),(0,o.kt)("td",{parentName:"tr",align:null},"The text to display in the back button.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Attribute")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"text"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Type")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"null \\| string \\| undefined"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Default")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,o.kt)("h3",{id:"type"},"type"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null}),(0,o.kt)("th",{parentName:"tr",align:null}))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Description")),(0,o.kt)("td",{parentName:"tr",align:null},"The type of the button.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Attribute")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"type"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Type")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},'"button" \\| "reset" \\| "submit"'))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Default")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"'button'"))))),(0,o.kt)("h2",{id:"css-shadow-parts"},"CSS Shadow Parts"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"icon")),(0,o.kt)("td",{parentName:"tr",align:null},"The back button icon (uses ion-icon).")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"native")),(0,o.kt)("td",{parentName:"tr",align:null},"The native HTML button element that wraps all child elements.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"text")),(0,o.kt)("td",{parentName:"tr",align:null},"The back button text.")))),(0,o.kt)("h2",{id:"css-custom-properties"},"CSS Custom Properties"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--background")),(0,o.kt)("td",{parentName:"tr",align:null},"Background of the button")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--background-focused")),(0,o.kt)("td",{parentName:"tr",align:null},"Background of the button when focused with the tab key")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--background-focused-opacity")),(0,o.kt)("td",{parentName:"tr",align:null},"Opacity of the button background when focused with the tab key")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--background-hover")),(0,o.kt)("td",{parentName:"tr",align:null},"Background of the button on hover")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--background-hover-opacity")),(0,o.kt)("td",{parentName:"tr",align:null},"Opacity of the background on hover")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--border-radius")),(0,o.kt)("td",{parentName:"tr",align:null},"Border radius of the button")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--color")),(0,o.kt)("td",{parentName:"tr",align:null},"Text color of the button")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--color-focused")),(0,o.kt)("td",{parentName:"tr",align:null},"Text color of the button when focused with the tab key")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--color-hover")),(0,o.kt)("td",{parentName:"tr",align:null},"Text color of the button on hover")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--icon-font-size")),(0,o.kt)("td",{parentName:"tr",align:null},"Font size of the button icon")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--icon-font-weight")),(0,o.kt)("td",{parentName:"tr",align:null},"Font weight of the button icon")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--icon-margin-bottom")),(0,o.kt)("td",{parentName:"tr",align:null},"Bottom margin of the button icon")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--icon-margin-end")),(0,o.kt)("td",{parentName:"tr",align:null},"Right margin if direction is left-to-right, and left margin if direction is right-to-left of the button icon")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--icon-margin-start")),(0,o.kt)("td",{parentName:"tr",align:null},"Left margin if direction is left-to-right, and right margin if direction is right-to-left of the button icon")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--icon-margin-top")),(0,o.kt)("td",{parentName:"tr",align:null},"Top margin of the button icon")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--icon-padding-bottom")),(0,o.kt)("td",{parentName:"tr",align:null},"Bottom padding of the button icon")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--icon-padding-end")),(0,o.kt)("td",{parentName:"tr",align:null},"Right padding if direction is left-to-right, and left padding if direction is right-to-left of the button icon")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--icon-padding-start")),(0,o.kt)("td",{parentName:"tr",align:null},"Left padding if direction is left-to-right, and right padding if direction is right-to-left of the button icon")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--icon-padding-top")),(0,o.kt)("td",{parentName:"tr",align:null},"Top padding of the button icon")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--margin-bottom")),(0,o.kt)("td",{parentName:"tr",align:null},"Bottom margin of the button")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--margin-end")),(0,o.kt)("td",{parentName:"tr",align:null},"Right margin if direction is left-to-right, and left margin if direction is right-to-left of the button")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--margin-start")),(0,o.kt)("td",{parentName:"tr",align:null},"Left margin if direction is left-to-right, and right margin if direction is right-to-left of the button")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--margin-top")),(0,o.kt)("td",{parentName:"tr",align:null},"Top margin of the button")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--min-height")),(0,o.kt)("td",{parentName:"tr",align:null},"Minimum height of the button")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--min-width")),(0,o.kt)("td",{parentName:"tr",align:null},"Minimum width of the button")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--opacity")),(0,o.kt)("td",{parentName:"tr",align:null},"Opacity of the button")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--padding-bottom")),(0,o.kt)("td",{parentName:"tr",align:null},"Bottom padding of the button")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--padding-end")),(0,o.kt)("td",{parentName:"tr",align:null},"Right padding if direction is left-to-right, and left padding if direction is right-to-left of the button")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--padding-start")),(0,o.kt)("td",{parentName:"tr",align:null},"Left padding if direction is left-to-right, and right padding if direction is right-to-left of the button")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--padding-top")),(0,o.kt)("td",{parentName:"tr",align:null},"Top padding of the button")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--ripple-color")),(0,o.kt)("td",{parentName:"tr",align:null},"Color of the button ripple effect")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--transition")),(0,o.kt)("td",{parentName:"tr",align:null},"Transition of the button")))))}b.isMDXComponent=!0}}]);