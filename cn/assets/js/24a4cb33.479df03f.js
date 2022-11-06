"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[93371],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>u});var a=n(67294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var d=a.createContext({}),p=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},m=function(t){var e=p(t.components);return a.createElement(d.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,r=t.originalType,d=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),c=p(n),u=l,k=c["".concat(d,".").concat(u)]||c[u]||s[u]||r;return n?a.createElement(k,o(o({ref:e},m),{},{components:n})):a.createElement(k,o({ref:e},m))}));function u(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=n.length,o=new Array(r);o[0]=c;var i={};for(var d in e)hasOwnProperty.call(e,d)&&(i[d]=e[d]);i.originalType=t,i.mdxType="string"==typeof t?t:l,o[1]=i;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},58215:(t,e,n)=>{n.d(e,{Z:()=>l});var a=n(67294);const l=function(t){let{children:e,hidden:n,className:l}=t;return a.createElement("div",{role:"tabpanel",hidden:n,className:l},e)}},26396:(t,e,n)=>{n.d(e,{Z:()=>c});var a=n(87462),l=n(67294),r=n(72389),o=n(79443);const i=function(){const t=(0,l.useContext)(o.Z);if(null==t)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return t};var d=n(89521),p=n(86010);const m="tabItem_vU9c";function s(t){var e,n;const{lazy:a,block:r,defaultValue:o,values:s,groupId:c,className:u}=t,k=l.Children.map(t.children,(t=>{if((0,l.isValidElement)(t)&&void 0!==t.props.value)return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),N=s??k.map((t=>{let{props:{value:e,label:n}}=t;return{value:e,label:n}})),g=(0,d.lx)(N,((t,e)=>t.value===e.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===o?o:o??(null==(e=k.find((t=>t.props.default)))?void 0:e.props.value)??(null==(n=k[0])?void 0:n.props.value);if(null!==h&&!N.some((t=>t.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${N.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:v}=i(),[f,y]=(0,l.useState)(h),C=[],{blockElementScrollPositionUntilNextRender:S}=(0,d.o5)();if(null!=c){const t=b[c];null!=t&&t!==f&&N.some((e=>e.value===t))&&y(t)}const T=t=>{const e=t.currentTarget,n=C.indexOf(e),a=N[n].value;a!==f&&(S(e),y(a),null!=c&&v(c,a))},x=t=>{var e;let n=null;switch(t.key){case"ArrowRight":{const e=C.indexOf(t.currentTarget)+1;n=C[e]||C[0];break}case"ArrowLeft":{const e=C.indexOf(t.currentTarget)-1;n=C[e]||C[C.length-1];break}}null==(e=n)||e.focus()};return l.createElement("div",{className:"tabs-container"},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,p.Z)("tabs",{"tabs--block":r},u)},N.map((t=>{let{value:e,label:n}=t;return l.createElement("li",{role:"tab",tabIndex:f===e?0:-1,"aria-selected":f===e,className:(0,p.Z)("tabs__item",m,{"tabs__item--active":f===e}),key:e,ref:t=>C.push(t),onKeyDown:x,onFocus:T,onClick:T},n??e)}))),a?(0,l.cloneElement)(k.filter((t=>t.props.value===f))[0],{className:"margin-vert--md"}):l.createElement("div",{className:"margin-vert--md"},k.map(((t,e)=>(0,l.cloneElement)(t,{key:e,hidden:t.props.value!==f})))))}function c(t){const e=(0,r.Z)();return l.createElement(s,(0,a.Z)({key:String(e)},t))}},16037:(t,e,n)=>{n.r(e),n.d(e,{contentTitle:()=>d,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>m});var a=n(87462),l=(n(67294),n(3905)),r=n(26396),o=n(58215);const i={sidebar_label:"ion-content",demoUrl:"/docs/demos/api/content/index.html",demoSourceUrl:"https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/content/index.html"},d="ion-content",p={unversionedId:"api/content",id:"version-v5/api/content",isDocsHomePage:!1,title:"ion-content",description:"The content component provides an easy to use content area with some useful methods",source:"@site/versioned_docs/version-v5/api/content.md",sourceDirName:"api",slug:"/api/content",permalink:"/cn/docs/v5/api/content",editUrl:"https://crowdin.com/project/ionic-docs",tags:[],version:"v5",frontMatter:{sidebar_label:"ion-content",demoUrl:"/docs/demos/api/content/index.html",demoSourceUrl:"https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/content/index.html"},sidebar:"version-v5/api",previous:{title:"ion-app",permalink:"/cn/docs/v5/api/app"},next:{title:"ion-datetime",permalink:"/cn/docs/v5/api/datetime"}},m=[{value:"Fixed Content",id:"fixed-content",children:[],level:2},{value:"Usage",id:"usage",children:[],level:2},{value:"Properties",id:"properties",children:[{value:"color",id:"color",children:[],level:3},{value:"forceOverscroll",id:"forceoverscroll",children:[],level:3},{value:"fullscreen",id:"fullscreen",children:[],level:3},{value:"scrollEvents",id:"scrollevents",children:[],level:3},{value:"scrollX",id:"scrollx",children:[],level:3},{value:"scrollY",id:"scrolly",children:[],level:3}],level:2},{value:"Events",id:"events",children:[],level:2},{value:"Methods",id:"methods",children:[{value:"getScrollElement",id:"getscrollelement",children:[],level:3},{value:"scrollByPoint",id:"scrollbypoint",children:[],level:3},{value:"scrollToBottom",id:"scrolltobottom",children:[],level:3},{value:"scrollToPoint",id:"scrolltopoint",children:[],level:3},{value:"scrollToTop",id:"scrolltotop",children:[],level:3}],level:2},{value:"CSS Shadow Parts",id:"css-shadow-parts",children:[],level:2},{value:"CSS Custom Properties",id:"css-custom-properties",children:[],level:2},{value:"Slots",id:"slots",children:[],level:2}],s={toc:m};function c(t){let{components:e,...n}=t;return(0,l.kt)("wrapper",(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"ion-content"},"ion-content"),(0,l.kt)("p",null,"The content component provides an easy to use content area with some useful methods\nto control the scrollable area. There should only be one content in a single\nview."),(0,l.kt)("p",null,"Content, along with many other Ionic components, can be customized to modify its padding, margin, and more using the global styles provided in the ",(0,l.kt)("a",{parentName:"p",href:"/cn/docs/v5/layout/css-utilities"},"CSS Utilities")," or by individually styling it using CSS and the available ",(0,l.kt)("a",{parentName:"p",href:"#css-custom-properties"},"CSS Custom Properties"),"."),(0,l.kt)("h2",{id:"fixed-content"},"Fixed Content"),(0,l.kt)("p",null,"In order to place elements outside of the scrollable area, ",(0,l.kt)("inlineCode",{parentName:"p"},'slot="fixed"')," can be added to the element. This will absolutely position the element placing it in the top left. In order to place the element in a different position, style it using ",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/position"},"top, right, bottom, and left"),"."),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)(r.Z,{groupId:"framework",defaultValue:"angular",values:[{value:"angular",label:"Angular"},{value:"javascript",label:"Javascript"},{value:"react",label:"React"},{value:"stencil",label:"Stencil"},{value:"vue",label:"Vue"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"angular",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<ion-content\n  [scrollEvents]="true"\n  (ionScrollStart)="logScrollStart()"\n  (ionScroll)="logScrolling($event)"\n  (ionScrollEnd)="logScrollEnd()"\n>\n  <h1>Main Content</h1>\n\n  <div slot="fixed">\n    <h1>Fixed Content</h1>\n  </div>\n</ion-content>\n'))),(0,l.kt)(o.Z,{value:"javascript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<ion-content>\n  <h1>Main Content</h1>\n\n  <div slot="fixed">\n    <h1>Fixed Content</h1>\n  </div>\n</ion-content>\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"var content = document.querySelector('ion-content');\ncontent.scrollEvents = true;\ncontent.addEventListener('ionScrollStart', () => console.log('scroll start'));\ncontent.addEventListener('ionScroll', (ev) => console.log('scroll', ev.detail));\ncontent.addEventListener('ionScrollEnd', () => console.log('scroll end'));\n"))),(0,l.kt)(o.Z,{value:"react",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"import React from 'react';\nimport { IonContent } from '@ionic/react';\n\nconst ContentExample: React.FC = () => (\n  <IonContent scrollEvents={true} onIonScrollStart={() => {}} onIonScroll={() => {}} onIonScrollEnd={() => {}}>\n    <h1>Main Content</h1>\n\n    <div slot=\"fixed\">\n      <h1>Fixed Content</h1>\n    </div>\n  </IonContent>\n);\n"))),(0,l.kt)(o.Z,{value:"stencil",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Component, h } from '@stencil/core';\n\n@Component({\n  tag: 'content-example',\n  styleUrl: 'content-example.css',\n})\nexport class ContentExample {\n  logScrollStart() {\n    console.log('Scroll start');\n  }\n\n  logScrolling(ev) {\n    console.log('Scrolling', ev);\n  }\n\n  logScrollEnd() {\n    console.log('Scroll end');\n  }\n\n  render() {\n    return [\n      <ion-content\n        scrollEvents={true}\n        onIonScrollStart={() => this.logScrollStart()}\n        onIonScroll={(ev) => this.logScrolling(ev)}\n        onIonScrollEnd={() => this.logScrollEnd()}\n      >\n        <h1>Main Content</h1>\n\n        <div slot=\"fixed\">\n          <h1>Fixed Content</h1>\n        </div>\n      </ion-content>,\n    ];\n  }\n}\n"))),(0,l.kt)(o.Z,{value:"vue",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<template>\n  <ion-content\n    :scroll-events="true"\n    @ionScrollStart="logScrollStart()"\n    @ionScroll="logScrolling($event)"\n    @ionScrollEnd="logScrollEnd()"\n  >\n    <h1>Main Content</h1>\n\n    <div slot="fixed">\n      <h1>Fixed Content</h1>\n    </div>\n  </ion-content>\n</template>\n\n<script>\n  import { IonContent } from \'@ionic/vue\';\n  import { defineComponent } from \'vue\';\n\n  export default defineComponent({\n    components: { IonContent },\n  });\n<\/script>\n')))),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("h3",{id:"color"},"color"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"The color to use from your application's color palette.",(0,l.kt)("br",null),"Default options are: ",(0,l.kt)("inlineCode",{parentName:"td"},'"primary"'),", ",(0,l.kt)("inlineCode",{parentName:"td"},'"secondary"'),", ",(0,l.kt)("inlineCode",{parentName:"td"},'"tertiary"'),", ",(0,l.kt)("inlineCode",{parentName:"td"},'"success"'),", ",(0,l.kt)("inlineCode",{parentName:"td"},'"warning"'),", ",(0,l.kt)("inlineCode",{parentName:"td"},'"danger"'),", ",(0,l.kt)("inlineCode",{parentName:"td"},'"light"'),", ",(0,l.kt)("inlineCode",{parentName:"td"},'"medium"'),", and ",(0,l.kt)("inlineCode",{parentName:"td"},'"dark"'),".",(0,l.kt)("br",null),"For more information on colors, see ",(0,l.kt)("a",{parentName:"td",href:"/cn/docs/v5/theming/basics"},"theming"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Attribute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"color"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string \\| undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,l.kt)("h3",{id:"forceoverscroll"},"forceOverscroll"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"If ",(0,l.kt)("inlineCode",{parentName:"td"},"true")," and the content does not cause an overflow scroll, the scroll interaction will cause a bounce.",(0,l.kt)("br",null),"If the content exceeds the bounds of ionContent, nothing will change.",(0,l.kt)("br",null),"Note, the does not disable the system bounce on iOS. That is an OS level setting.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Attribute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"force-overscroll"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean \\| undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,l.kt)("h3",{id:"fullscreen"},"fullscreen"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"If ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),", the content will scroll behind the headers",(0,l.kt)("br",null),"and footers. This effect can easily be seen by setting the toolbar",(0,l.kt)("br",null),"to transparent.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Attribute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"fullscreen"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false"))))),(0,l.kt)("h3",{id:"scrollevents"},"scrollEvents"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"Because of performance reasons, ionScroll events are disabled by default, in order to enable them",(0,l.kt)("br",null),"and start listening from (ionScroll), set this property to ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Attribute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"scroll-events"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false"))))),(0,l.kt)("h3",{id:"scrollx"},"scrollX"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"If you want to enable the content scrolling in the X axis, set this property to ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Attribute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"scroll-x"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false"))))),(0,l.kt)("h3",{id:"scrolly"},"scrollY"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"If you want to disable the content scrolling in the Y axis, set this property to ",(0,l.kt)("inlineCode",{parentName:"td"},"false"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Attribute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"scroll-y"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true"))))),(0,l.kt)("h2",{id:"events"},"Events"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ionScroll")),(0,l.kt)("td",{parentName:"tr",align:null},"Emitted while scrolling. This event is disabled by default.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Look at the property: ",(0,l.kt)("inlineCode",{parentName:"td"},"scrollEvents")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ionScrollEnd")),(0,l.kt)("td",{parentName:"tr",align:null},"Emitted when the scroll has ended.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ionScrollStart")),(0,l.kt)("td",{parentName:"tr",align:null},"Emitted when the scroll has started.")))),(0,l.kt)("h2",{id:"methods"},"Methods"),(0,l.kt)("h3",{id:"getscrollelement"},"getScrollElement"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"Get the element where the actual scrolling takes place.",(0,l.kt)("br",null),"This element can be used to subscribe to ",(0,l.kt)("inlineCode",{parentName:"td"},"scroll")," events or manually modify",(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"scrollTop"),". However, it's recommended to use the API provided by ",(0,l.kt)("inlineCode",{parentName:"td"},"ion-content"),":",(0,l.kt)("br",null),(0,l.kt)("br",null),"i.e. Using ",(0,l.kt)("inlineCode",{parentName:"td"},"ionScroll"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"ionScrollStart"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"ionScrollEnd")," for scrolling events",(0,l.kt)("br",null),"and ",(0,l.kt)("inlineCode",{parentName:"td"},"scrollToPoint()")," to scroll the content into a certain point.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Signature")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"getScrollElement() => Promise<HTMLElement>"))))),(0,l.kt)("h3",{id:"scrollbypoint"},"scrollByPoint"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"Scroll by a specified X/Y distance in the component.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Signature")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"scrollByPoint(x: number, y: number, duration: number) => Promise<void>"))))),(0,l.kt)("h3",{id:"scrolltobottom"},"scrollToBottom"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"Scroll to the bottom of the component.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Signature")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"scrollToBottom(duration?: number) => Promise<void>"))))),(0,l.kt)("h3",{id:"scrolltopoint"},"scrollToPoint"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"Scroll to a specified X/Y location in the component.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Signature")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"scrollToPoint(x: number \\| undefined \\| null, y: number \\| undefined \\| null, duration?: number) => Promise<void>"))))),(0,l.kt)("h3",{id:"scrolltotop"},"scrollToTop"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"Scroll to the top of the component.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Signature")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"scrollToTop(duration?: number) => Promise<void>"))))),(0,l.kt)("h2",{id:"css-shadow-parts"},"CSS Shadow Parts"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"background")),(0,l.kt)("td",{parentName:"tr",align:null},"The background of the content.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"scroll")),(0,l.kt)("td",{parentName:"tr",align:null},"The scrollable container of the content.")))),(0,l.kt)("h2",{id:"css-custom-properties"},"CSS Custom Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--background")),(0,l.kt)("td",{parentName:"tr",align:null},"Background of the content")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--color")),(0,l.kt)("td",{parentName:"tr",align:null},"Color of the content")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--keyboard-offset")),(0,l.kt)("td",{parentName:"tr",align:null},"Keyboard offset of the content")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--offset-bottom")),(0,l.kt)("td",{parentName:"tr",align:null},"Offset bottom of the content")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--offset-top")),(0,l.kt)("td",{parentName:"tr",align:null},"Offset top of the content")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--padding-bottom")),(0,l.kt)("td",{parentName:"tr",align:null},"Bottom padding of the content")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--padding-end")),(0,l.kt)("td",{parentName:"tr",align:null},"Right padding if direction is left-to-right, and left padding if direction is right-to-left of the content")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--padding-start")),(0,l.kt)("td",{parentName:"tr",align:null},"Left padding if direction is left-to-right, and right padding if direction is right-to-left of the content")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--padding-top")),(0,l.kt)("td",{parentName:"tr",align:null},"Top padding of the content")))),(0,l.kt)("h2",{id:"slots"},"Slots"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"``"),(0,l.kt)("td",{parentName:"tr",align:null},"Content is placed in the scrollable area if provided without a slot.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"fixed")),(0,l.kt)("td",{parentName:"tr",align:null},"Should be used for fixed content that should not scroll.")))))}c.isMDXComponent=!0}}]);