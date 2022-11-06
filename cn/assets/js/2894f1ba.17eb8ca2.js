"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[33664],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(r),g=a,c=u["".concat(s,".").concat(g)]||u[g]||m[g]||o;return r?n.createElement(c,l(l({ref:t},d),{},{components:r})):n.createElement(c,l({ref:t},d))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},58215:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(67294);const a=function(e){let{children:t,hidden:r,className:a}=e;return n.createElement("div",{role:"tabpanel",hidden:r,className:a},t)}},26396:(e,t,r)=>{r.d(t,{Z:()=>u});var n=r(87462),a=r(67294),o=r(72389),l=r(79443);const i=function(){const e=(0,a.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var s=r(89521),p=r(86010);const d="tabItem_vU9c";function m(e){var t,r;const{lazy:n,block:o,defaultValue:l,values:m,groupId:u,className:g}=e,c=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=m??c.map((e=>{let{props:{value:t,label:r}}=e;return{value:t,label:r}})),k=(0,s.lx)(b,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const N=null===l?l:l??(null==(t=c.find((e=>e.props.default)))?void 0:t.props.value)??(null==(r=c[0])?void 0:r.props.value);if(null!==N&&!b.some((e=>e.value===N)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${N}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:h,setTabGroupChoices:f}=i(),[v,y]=(0,a.useState)(N),C=[],{blockElementScrollPositionUntilNextRender:w}=(0,s.o5)();if(null!=u){const e=h[u];null!=e&&e!==v&&b.some((t=>t.value===e))&&y(e)}const P=e=>{const t=e.currentTarget,r=C.indexOf(t),n=b[r].value;n!==v&&(w(t),y(n),null!=u&&f(u,n))},x=e=>{var t;let r=null;switch(e.key){case"ArrowRight":{const t=C.indexOf(e.currentTarget)+1;r=C[t]||C[0];break}case"ArrowLeft":{const t=C.indexOf(e.currentTarget)-1;r=C[t]||C[C.length-1];break}}null==(t=r)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,p.Z)("tabs",{"tabs--block":o},g)},b.map((e=>{let{value:t,label:r}=e;return a.createElement("li",{role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,className:(0,p.Z)("tabs__item",d,{"tabs__item--active":v===t}),key:t,ref:e=>C.push(e),onKeyDown:x,onFocus:P,onClick:P},r??t)}))),n?(0,a.cloneElement)(c.filter((e=>e.props.value===v))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},c.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==v})))))}function u(e){const t=(0,o.Z)();return a.createElement(m,(0,n.Z)({key:String(t)},e))}},59430:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var n=r(87462),a=(r(67294),r(3905)),o=r(26396),l=r(58215);const i={title:"Progress Bar | Horizontal App Progress Bar for Loading Indicator",description:"ion-progress-bars are horizontal loading indicators that inform users about the status of ongoing app processes\u2014such as submitting a form or saving updates.",sidebar_label:"ion-progress-bar",demoUrl:"/docs/demos/api/progress-bar/index.html",demoSourceUrl:"https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/progress-bar/index.html"},s="ion-progress-bar",p={unversionedId:"api/progress-bar",id:"version-v5/api/progress-bar",isDocsHomePage:!1,title:"Progress Bar | Horizontal App Progress Bar for Loading Indicator",description:"ion-progress-bars are horizontal loading indicators that inform users about the status of ongoing app processes\u2014such as submitting a form or saving updates.",source:"@site/versioned_docs/version-v5/api/progress-bar.md",sourceDirName:"api",slug:"/api/progress-bar",permalink:"/cn/docs/v5/api/progress-bar",editUrl:"https://crowdin.com/project/ionic-docs",tags:[],version:"v5",frontMatter:{title:"Progress Bar | Horizontal App Progress Bar for Loading Indicator",description:"ion-progress-bars are horizontal loading indicators that inform users about the status of ongoing app processes\u2014such as submitting a form or saving updates.",sidebar_label:"ion-progress-bar",demoUrl:"/docs/demos/api/progress-bar/index.html",demoSourceUrl:"https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/progress-bar/index.html"},sidebar:"version-v5/api",previous:{title:"ion-loading",permalink:"/cn/docs/v5/api/loading"},next:{title:"ion-skeleton-text",permalink:"/cn/docs/v5/api/skeleton-text"}},d=[{value:"Progress Type",id:"progress-type",children:[{value:"Determinate",id:"determinate",children:[],level:3},{value:"Indeterminate",id:"indeterminate",children:[],level:3}],level:2},{value:"Usage",id:"usage",children:[],level:2},{value:"Properties",id:"properties",children:[{value:"buffer",id:"buffer",children:[],level:3},{value:"color",id:"color",children:[],level:3},{value:"mode",id:"mode",children:[],level:3},{value:"reversed",id:"reversed",children:[],level:3},{value:"type",id:"type",children:[],level:3},{value:"value",id:"value",children:[],level:3}],level:2},{value:"CSS Shadow Parts",id:"css-shadow-parts",children:[],level:2},{value:"CSS Custom Properties",id:"css-custom-properties",children:[],level:2}],m={toc:d};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ion-progress-bar"},"ion-progress-bar"),(0,a.kt)("p",null,"Progress bars inform users about the status of ongoing processes, such as loading an app, submitting a form, or saving updates. There are two types of progress bars: ",(0,a.kt)("inlineCode",{parentName:"p"},"determinate")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"indeterminate"),"."),(0,a.kt)("h2",{id:"progress-type"},"Progress Type"),(0,a.kt)("h3",{id:"determinate"},"Determinate"),(0,a.kt)("p",null,"Determinate is the default type. It should be used when the percentage of an operation is known. The progress is represented by setting the ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," property. This can be used to show the progress increasing from 0 to 100% of the track."),(0,a.kt)("p",null,"If the ",(0,a.kt)("inlineCode",{parentName:"p"},"buffer")," property is set, a buffer stream will show with animated circles to indicate activity. The value of the ",(0,a.kt)("inlineCode",{parentName:"p"},"buffer")," property will also be represented by how much visible track there is. If the value of ",(0,a.kt)("inlineCode",{parentName:"p"},"buffer")," is less than the ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," property, there will be no visible track. If ",(0,a.kt)("inlineCode",{parentName:"p"},"buffer")," is equal to ",(0,a.kt)("inlineCode",{parentName:"p"},"1")," then the buffer stream will be hidden."),(0,a.kt)("h3",{id:"indeterminate"},"Indeterminate"),(0,a.kt)("p",null,"The indeterminate type should be used when it is unknown how long the process will take. The progress bar is not tied to the ",(0,a.kt)("inlineCode",{parentName:"p"},"value"),", instead it continually slides along the track until the process is complete."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)(o.Z,{groupId:"framework",defaultValue:"angular",values:[{value:"angular",label:"Angular"},{value:"javascript",label:"Javascript"},{value:"react",label:"React"},{value:"stencil",label:"Stencil"},{value:"vue",label:"Vue"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"angular",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- Default Progressbar --\x3e\n<ion-progress-bar></ion-progress-bar>\n\n\x3c!-- Default Progressbar with 50 percent --\x3e\n<ion-progress-bar value="0.5"></ion-progress-bar>\n\n\x3c!-- Colorize Progressbar --\x3e\n<ion-progress-bar color="primary" value="0.5"></ion-progress-bar>\n<ion-progress-bar color="secondary" value="0.5"></ion-progress-bar>\n\n\x3c!-- Other types --\x3e\n<ion-progress-bar value="0.25" buffer="0.5"></ion-progress-bar>\n<ion-progress-bar type="indeterminate"></ion-progress-bar>\n<ion-progress-bar type="indeterminate" reversed="true"></ion-progress-bar>\n'))),(0,a.kt)(l.Z,{value:"javascript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- Default Progressbar --\x3e\n<ion-progress-bar></ion-progress-bar>\n\n\x3c!-- Default Progressbar with 50 percent --\x3e\n<ion-progress-bar value="0.5"></ion-progress-bar>\n\n\x3c!-- Colorize Progressbar --\x3e\n<ion-progress-bar color="primary" value="0.5"></ion-progress-bar>\n<ion-progress-bar color="secondary" value="0.5"></ion-progress-bar>\n\n\x3c!-- Other types --\x3e\n<ion-progress-bar value="0.25" buffer="0.5"></ion-progress-bar>\n<ion-progress-bar type="indeterminate"></ion-progress-bar>\n<ion-progress-bar type="indeterminate" reversed="true"></ion-progress-bar>\n'))),(0,a.kt)(l.Z,{value:"react",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import React from \'react\';\nimport { IonProgressBar, IonContent } from \'@ionic/react\';\n\nexport const ProgressbarExample: React.FC = () => (\n  <IonContent>\n    {/*-- Default Progressbar --*/}\n    <IonProgressBar></IonProgressBar>\n    <br />\n\n    {/*-- Default Progressbar with 50 percent --*/}\n    <IonProgressBar value={0.5}></IonProgressBar>\n    <br />\n\n    {/*-- Colorize Progressbar --*/}\n    <IonProgressBar color="primary" value={0.5}></IonProgressBar>\n    <br />\n    <IonProgressBar color="secondary" value={0.5}></IonProgressBar>\n    <br />\n\n    {/*-- Other types --*/}\n    <IonProgressBar value={0.25} buffer={0.5}></IonProgressBar>\n    <br />\n    <IonProgressBar type="indeterminate"></IonProgressBar>\n    <br />\n    <IonProgressBar type="indeterminate" reversed={true}></IonProgressBar>\n    <br />\n  </IonContent>\n);\n'))),(0,a.kt)(l.Z,{value:"stencil",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Component, h } from \'@stencil/core\';\n\n@Component({\n  tag: \'progress-bar-example\',\n  styleUrl: \'progress-bar-example.css\',\n})\nexport class ProgressBarExample {\n  render() {\n    return [\n      // Default Progressbar\n      <ion-progress-bar></ion-progress-bar>,\n\n      // Default Progressbar with 50 percent\n      <ion-progress-bar value={0.5}></ion-progress-bar>,\n\n      // Colorize Progressbar\n      <ion-progress-bar color="primary" value={0.5}></ion-progress-bar>,\n      <ion-progress-bar color="secondary" value={0.5}></ion-progress-bar>,\n\n      // Other types\n      <ion-progress-bar value={0.25} buffer={0.5}></ion-progress-bar>,\n      <ion-progress-bar type="indeterminate"></ion-progress-bar>,\n      <ion-progress-bar type="indeterminate" reversed={true}></ion-progress-bar>,\n    ];\n  }\n}\n'))),(0,a.kt)(l.Z,{value:"vue",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<template>\n  \x3c!-- Default Progressbar --\x3e\n  <ion-progress-bar></ion-progress-bar>\n\n  \x3c!-- Default Progressbar with 50 percent --\x3e\n  <ion-progress-bar value="0.5"></ion-progress-bar>\n\n  \x3c!-- Colorize Progressbar --\x3e\n  <ion-progress-bar color="primary" value="0.5"></ion-progress-bar>\n  <ion-progress-bar color="secondary" value="0.5"></ion-progress-bar>\n\n  \x3c!-- Other types --\x3e\n  <ion-progress-bar value="0.25" buffer="0.5"></ion-progress-bar>\n  <ion-progress-bar type="indeterminate"></ion-progress-bar>\n  <ion-progress-bar type="indeterminate" reversed="true"></ion-progress-bar>\n</template>\n\n<script>\n  import { IonProgressBar } from \'@ionic/vue\';\n  import { defineComponent } from \'vue\';\n\n  export default defineComponent({\n    components: { IonProgressBar },\n  });\n<\/script>\n')))),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"buffer"},"buffer"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null}),(0,a.kt)("th",{parentName:"tr",align:null}))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Description")),(0,a.kt)("td",{parentName:"tr",align:null},"If the buffer and value are smaller than 1, the buffer circles will show.",(0,a.kt)("br",null),"The buffer should be between ","[0, 1]",".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Attribute")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"buffer"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Type")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"number"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Default")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"1"))))),(0,a.kt)("h3",{id:"color"},"color"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null}),(0,a.kt)("th",{parentName:"tr",align:null}))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Description")),(0,a.kt)("td",{parentName:"tr",align:null},"The color to use from your application's color palette.",(0,a.kt)("br",null),"Default options are: ",(0,a.kt)("inlineCode",{parentName:"td"},'"primary"'),", ",(0,a.kt)("inlineCode",{parentName:"td"},'"secondary"'),", ",(0,a.kt)("inlineCode",{parentName:"td"},'"tertiary"'),", ",(0,a.kt)("inlineCode",{parentName:"td"},'"success"'),", ",(0,a.kt)("inlineCode",{parentName:"td"},'"warning"'),", ",(0,a.kt)("inlineCode",{parentName:"td"},'"danger"'),", ",(0,a.kt)("inlineCode",{parentName:"td"},'"light"'),", ",(0,a.kt)("inlineCode",{parentName:"td"},'"medium"'),", and ",(0,a.kt)("inlineCode",{parentName:"td"},'"dark"'),".",(0,a.kt)("br",null),"For more information on colors, see ",(0,a.kt)("a",{parentName:"td",href:"/cn/docs/v5/theming/basics"},"theming"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Attribute")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"color"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Type")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string \\| undefined"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Default")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,a.kt)("h3",{id:"mode"},"mode"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null}),(0,a.kt)("th",{parentName:"tr",align:null}))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Description")),(0,a.kt)("td",{parentName:"tr",align:null},"The mode determines which platform styles to use.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Attribute")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"mode"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Type")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},'"ios" \\| "md"'))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Default")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,a.kt)("h3",{id:"reversed"},"reversed"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null}),(0,a.kt)("th",{parentName:"tr",align:null}))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Description")),(0,a.kt)("td",{parentName:"tr",align:null},"If true, reverse the progress bar direction.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Attribute")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"reversed"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Type")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Default")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"false"))))),(0,a.kt)("h3",{id:"type"},"type"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null}),(0,a.kt)("th",{parentName:"tr",align:null}))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Description")),(0,a.kt)("td",{parentName:"tr",align:null},"The state of the progress bar, based on if the time the process takes is known or not.",(0,a.kt)("br",null),"Default options are: ",(0,a.kt)("inlineCode",{parentName:"td"},'"determinate"')," (no animation), ",(0,a.kt)("inlineCode",{parentName:"td"},'"indeterminate"')," (animate from left to right).")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Attribute")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"type"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Type")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},'"determinate" \\| "indeterminate"'))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Default")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"'determinate'"))))),(0,a.kt)("h3",{id:"value"},"value"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null}),(0,a.kt)("th",{parentName:"tr",align:null}))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Description")),(0,a.kt)("td",{parentName:"tr",align:null},"The value determines how much of the active bar should display when the",(0,a.kt)("br",null),(0,a.kt)("inlineCode",{parentName:"td"},"type")," is ",(0,a.kt)("inlineCode",{parentName:"td"},'"determinate"'),".",(0,a.kt)("br",null),"The value should be between ","[0, 1]",".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Attribute")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"value"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Type")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"number"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Default")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"0"))))),(0,a.kt)("h2",{id:"css-shadow-parts"},"CSS Shadow Parts"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"progress")),(0,a.kt)("td",{parentName:"tr",align:null},"The progress bar that shows the current value when ",(0,a.kt)("inlineCode",{parentName:"td"},"type")," is ",(0,a.kt)("inlineCode",{parentName:"td"},'"determinate"')," and slides back and forth when ",(0,a.kt)("inlineCode",{parentName:"td"},"type")," is ",(0,a.kt)("inlineCode",{parentName:"td"},'"indeterminate"'),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"stream")),(0,a.kt)("td",{parentName:"tr",align:null},"The animated circles that appear while buffering. This only shows when ",(0,a.kt)("inlineCode",{parentName:"td"},"buffer")," is set and ",(0,a.kt)("inlineCode",{parentName:"td"},"type")," is ",(0,a.kt)("inlineCode",{parentName:"td"},'"determinate"'),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"track")),(0,a.kt)("td",{parentName:"tr",align:null},"The track bar behind the progress bar. If the ",(0,a.kt)("inlineCode",{parentName:"td"},"buffer")," property is set and ",(0,a.kt)("inlineCode",{parentName:"td"},"type")," is ",(0,a.kt)("inlineCode",{parentName:"td"},'"determinate"')," the track will be the")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"width of the ",(0,a.kt)("inlineCode",{parentName:"td"},"buffer")," value."),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("h2",{id:"css-custom-properties"},"CSS Custom Properties"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"--background")),(0,a.kt)("td",{parentName:"tr",align:null},"Background of the progress track, or the buffer bar if ",(0,a.kt)("inlineCode",{parentName:"td"},"buffer")," is set")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"--buffer-background")),(0,a.kt)("td",{parentName:"tr",align:null},"DEPRECATED, use ",(0,a.kt)("inlineCode",{parentName:"td"},"--background")," instead")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"--progress-background")),(0,a.kt)("td",{parentName:"tr",align:null},"Background of the progress bar representing the current value")))))}u.isMDXComponent=!0}}]);