"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[4593],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),s=c(n),f=i,m=s["".concat(o,".").concat(f)]||s[f]||u[f]||r;return n?a.createElement(m,l(l({ref:t},d),{},{components:n})):a.createElement(m,l({ref:t},d))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=s;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:i,l[1]=p;for(var c=2;c<r;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},58215:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294);const i=function(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",hidden:n,className:i},t)}},26396:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(87462),i=n(67294),r=n(72389),l=n(79443);const p=function(){const e=(0,i.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var o=n(89521),c=n(86010);const d="tabItem_vU9c";function u(e){var t,n;const{lazy:a,block:r,defaultValue:l,values:u,groupId:s,className:f}=e,m=i.Children.map(e.children,(e=>{if((0,i.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=u??m.map((e=>{let{props:{value:t,label:n}}=e;return{value:t,label:n}})),v=(0,o.lx)(b,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===l?l:l??(null==(t=m.find((e=>e.props.default)))?void 0:t.props.value)??(null==(n=m[0])?void 0:n.props.value);if(null!==h&&!b.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:y}=p(),[g,N]=(0,i.useState)(h),w=[],{blockElementScrollPositionUntilNextRender:E}=(0,o.o5)();if(null!=s){const e=k[s];null!=e&&e!==g&&b.some((t=>t.value===e))&&N(e)}const x=e=>{const t=e.currentTarget,n=w.indexOf(t),a=b[n].value;a!==g&&(E(t),N(a),null!=s&&y(s,a))},T=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=w.indexOf(e.currentTarget)+1;n=w[t]||w[0];break}case"ArrowLeft":{const t=w.indexOf(e.currentTarget)-1;n=w[t]||w[w.length-1];break}}null==(t=n)||t.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":r},f)},b.map((e=>{let{value:t,label:n}=e;return i.createElement("li",{role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,className:(0,c.Z)("tabs__item",d,{"tabs__item--active":g===t}),key:t,ref:e=>w.push(e),onKeyDown:T,onFocus:x,onClick:x},n??t)}))),a?(0,i.cloneElement)(m.filter((e=>e.props.value===g))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},m.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==g})))))}function s(e){const t=(0,r.Z)();return i.createElement(u,(0,a.Z)({key:String(t)},e))}},51864:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>s,frontMatter:()=>p,metadata:()=>c,toc:()=>d});var a=n(87462),i=(n(67294),n(3905)),r=n(26396),l=n(58215);const p={sidebar_label:"ion-ripple-effect"},o="ion-ripple-effect",c={unversionedId:"api/ripple-effect",id:"version-v5/api/ripple-effect",isDocsHomePage:!1,title:"ion-ripple-effect",description:"The ripple effect component adds the Material Design ink ripple interaction effect. This component can only be used inside of an `` and can be added to any component.",source:"@site/versioned_docs/version-v5/api/ripple-effect.md",sourceDirName:"api",slug:"/api/ripple-effect",permalink:"/docs/v5/api/ripple-effect",editUrl:"https://github.com/ionic-team/ionic-docs/tree/main/docs/api/ripple-effect.md",tags:[],version:"v5",frontMatter:{sidebar_label:"ion-ripple-effect"},sidebar:"version-v5/api",previous:{title:"ion-button",permalink:"/docs/v5/api/button"},next:{title:"ion-card",permalink:"/docs/v5/api/card"}},d=[{value:"Usage",id:"usage",children:[],level:2},{value:"Properties",id:"properties",children:[{value:"type",id:"type",children:[],level:3}],level:2},{value:"Methods",id:"methods",children:[{value:"addRipple",id:"addripple",children:[],level:3}],level:2}],u={toc:d};function s(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"ion-ripple-effect"},"ion-ripple-effect"),(0,i.kt)("p",null,"The ripple effect component adds the ",(0,i.kt)("a",{parentName:"p",href:"https://material.io/develop/web/components/ripples/"},"Material Design ink ripple interaction effect"),". This component can only be used inside of an ",(0,i.kt)("inlineCode",{parentName:"p"},"<ion-app>")," and can be added to any component."),(0,i.kt)("p",null,"It's important to note that the parent should have ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/position"},"relative positioning")," because the ripple effect is absolutely positioned and will cover the closest parent with relative positioning. The parent element should also be given the ",(0,i.kt)("inlineCode",{parentName:"p"},"ion-activatable")," class, which tells the ripple effect that the element is clickable."),(0,i.kt)("p",null,"The default type, ",(0,i.kt)("inlineCode",{parentName:"p"},'"bounded"'),", will expand the ripple effect from the click position outwards. To add a ripple effect that always starts in the center of the element and expands in a circle, add an ",(0,i.kt)("inlineCode",{parentName:"p"},'"unbounded"')," type. It's recommended to add ",(0,i.kt)("inlineCode",{parentName:"p"},"overflow: hidden")," to the parent element to avoid the ripple overflowing its container, especially with an unbounded ripple."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)(r.Z,{groupId:"framework",defaultValue:"angular",values:[{value:"angular",label:"Angular"},{value:"javascript",label:"Javascript"},{value:"react",label:"React"},{value:"stencil",label:"Stencil"},{value:"vue",label:"Vue"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"angular",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<ion-app>\n  <ion-content>\n    <div class="ion-activatable ripple-parent">\n      A plain div with a bounded ripple effect\n      <ion-ripple-effect></ion-ripple-effect>\n    </div>\n\n    <button class="ion-activatable ripple-parent">\n      A button with a bounded ripple effect\n      <ion-ripple-effect></ion-ripple-effect>\n    </button>\n\n    <div class="ion-activatable ripple-parent">\n      A plain div with an unbounded ripple effect\n      <ion-ripple-effect type="unbounded"></ion-ripple-effect>\n    </div>\n\n    <button class="ion-activatable ripple-parent">\n      A button with an unbounded ripple effect\n      <ion-ripple-effect type="unbounded"></ion-ripple-effect>\n    </button>\n  </ion-content>\n</ion-app>\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css"},".ripple-parent {\n  position: relative;\n  overflow: hidden;\n}\n"))),(0,i.kt)(l.Z,{value:"javascript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<ion-app>\n  <ion-content>\n    <div class="ion-activatable ripple-parent">\n      A plain div with a bounded ripple effect\n      <ion-ripple-effect></ion-ripple-effect>\n    </div>\n\n    <button class="ion-activatable ripple-parent">\n      A button with a bounded ripple effect\n      <ion-ripple-effect></ion-ripple-effect>\n    </button>\n\n    <div class="ion-activatable ripple-parent">\n      A plain div with an unbounded ripple effect\n      <ion-ripple-effect type="unbounded"></ion-ripple-effect>\n    </div>\n\n    <button class="ion-activatable ripple-parent">\n      A button with an unbounded ripple effect\n      <ion-ripple-effect type="unbounded"></ion-ripple-effect>\n    </button>\n  </ion-content>\n</ion-app>\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css"},".ripple-parent {\n  position: relative;\n  overflow: hidden;\n}\n"))),(0,i.kt)(l.Z,{value:"react",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'import React from \'react\';\nimport { IonApp, IonContent, IonRippleEffect } from \'@ionic/react\';\nimport \'./RippleEffectExample.css\';\n\nexport const RippleExample: React.FC = () => (\n  <IonApp>\n    <IonContent>\n      <div className="ion-activatable ripple-parent">\n        A plain div with a bounded ripple effect\n        <IonRippleEffect></IonRippleEffect>\n      </div>\n\n      <button className="ion-activatable ripple-parent">\n        A button with a bounded ripple effect\n        <IonRippleEffect></IonRippleEffect>\n      </button>\n\n      <div className="ion-activatable ripple-parent">\n        A plain div with an unbounded ripple effect\n        <IonRippleEffect type="unbounded"></IonRippleEffect>\n      </div>\n\n      <button className="ion-activatable ripple-parent">\n        A button with an unbounded ripple effect\n        <IonRippleEffect type="unbounded"></IonRippleEffect>\n      </button>\n    </IonContent>\n  </IonApp>\n);\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css"},".ripple-parent {\n  position: relative;\n  overflow: hidden;\n}\n"))),(0,i.kt)(l.Z,{value:"stencil",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Component, h } from \'@stencil/core\';\n\n@Component({\n  tag: \'ripple-effect-example\',\n  styleUrl: \'ripple-effect-example.css\',\n})\nexport class RippleEffectExample {\n  render() {\n    return [\n      <ion-app>\n        <ion-content>\n          <div class="ion-activatable ripple-parent">\n            A plain div with a bounded ripple effect\n            <ion-ripple-effect></ion-ripple-effect>\n          </div>\n\n          <button class="ion-activatable ripple-parent">\n            A button with a bounded ripple effect\n            <ion-ripple-effect></ion-ripple-effect>\n          </button>\n\n          <div class="ion-activatable ripple-parent">\n            A plain div with an unbounded ripple effect\n            <ion-ripple-effect type="unbounded"></ion-ripple-effect>\n          </div>\n\n          <button class="ion-activatable ripple-parent">\n            A button with an unbounded ripple effect\n            <ion-ripple-effect type="unbounded"></ion-ripple-effect>\n          </button>\n        </ion-content>\n      </ion-app>,\n    ];\n  }\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css"},".ripple-parent {\n  position: relative;\n  overflow: hidden;\n}\n"))),(0,i.kt)(l.Z,{value:"vue",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<template>\n  <ion-app>\n    <ion-content>\n      <div class="ion-activatable ripple-parent">\n        A plain div with a bounded ripple effect\n        <ion-ripple-effect></ion-ripple-effect>\n      </div>\n\n      <button class="ion-activatable ripple-parent">\n        A button with a bounded ripple effect\n        <ion-ripple-effect></ion-ripple-effect>\n      </button>\n\n      <div class="ion-activatable ripple-parent">\n        A plain div with an unbounded ripple effect\n        <ion-ripple-effect type="unbounded"></ion-ripple-effect>\n      </div>\n\n      <button class="ion-activatable ripple-parent">\n        A button with an unbounded ripple effect\n        <ion-ripple-effect type="unbounded"></ion-ripple-effect>\n      </button>\n    </ion-content>\n  </ion-app>\n</template>\n\n<style>\n  .ripple-parent {\n    position: relative;\n    overflow: hidden;\n  }\n</style>\n\n<script>\n  import { IonApp, IonContent, IonRippleEffect } from \'@ionic/vue\';\n  import { defineComponent } from \'vue\';\n\n  export default defineComponent({\n    components: { IonApp, IonContent, IonRippleEffect },\n  });\n<\/script>\n')))),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"type"},"type"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null}),(0,i.kt)("th",{parentName:"tr",align:null}))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Description")),(0,i.kt)("td",{parentName:"tr",align:null},"Sets the type of ripple-effect:",(0,i.kt)("br",null),(0,i.kt)("br",null),"- ",(0,i.kt)("inlineCode",{parentName:"td"},"bounded"),": the ripple effect expands from the user's click position",(0,i.kt)("br",null),"- ",(0,i.kt)("inlineCode",{parentName:"td"},"unbounded"),": the ripple effect expands from the center of the button and overflows the container.",(0,i.kt)("br",null),(0,i.kt)("br",null),"NOTE: Surfaces for bounded ripples should have the overflow property set to hidden,",(0,i.kt)("br",null),"while surfaces for unbounded ripples should have it set to visible.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Attribute")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"type"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Type")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'"bounded" \\| "unbounded"'))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Default")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"'bounded'"))))),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"addripple"},"addRipple"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null}),(0,i.kt)("th",{parentName:"tr",align:null}))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Description")),(0,i.kt)("td",{parentName:"tr",align:null},"Adds the ripple effect to the parent element.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Signature")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"addRipple(x: number, y: number) => Promise<() => void>"))))))}s.isMDXComponent=!0}}]);