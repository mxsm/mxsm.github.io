"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[47095],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(t),m=r,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||l;return t?a.createElement(f,i(i({ref:n},p),{},{components:t})):a.createElement(f,i({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=u;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},58215:(e,n,t)=>{t.d(n,{Z:()=>r});var a=t(67294);const r=function(e){let{children:n,hidden:t,className:r}=e;return a.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}},26396:(e,n,t)=>{t.d(n,{Z:()=>u});var a=t(87462),r=t(67294),l=t(72389),i=t(79443);const o=function(){const e=(0,r.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var s=t(89521),c=t(86010);const p="tabItem_vU9c";function d(e){var n,t;const{lazy:a,block:l,defaultValue:i,values:d,groupId:u,className:m}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=d??f.map((e=>{let{props:{value:n,label:t}}=e;return{value:n,label:t}})),g=(0,s.lx)(b,((e,n)=>e.value===n.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===i?i:i??(null==(n=f.find((e=>e.props.default)))?void 0:n.props.value)??(null==(t=f[0])?void 0:t.props.value);if(null!==k&&!b.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:h,setTabGroupChoices:v}=o(),[y,N]=(0,r.useState)(k),T=[],{blockElementScrollPositionUntilNextRender:x}=(0,s.o5)();if(null!=u){const e=h[u];null!=e&&e!==y&&b.some((n=>n.value===e))&&N(e)}const C=e=>{const n=e.currentTarget,t=T.indexOf(n),a=b[t].value;a!==y&&(x(n),N(a),null!=u&&v(u,a))},w=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{const n=T.indexOf(e.currentTarget)+1;t=T[n]||T[0];break}case"ArrowLeft":{const n=T.indexOf(e.currentTarget)-1;t=T[n]||T[T.length-1];break}}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":l},m)},b.map((e=>{let{value:n,label:t}=e;return r.createElement("li",{role:"tab",tabIndex:y===n?0:-1,"aria-selected":y===n,className:(0,c.Z)("tabs__item",p,{"tabs__item--active":y===n}),key:n,ref:e=>T.push(e),onKeyDown:w,onFocus:C,onClick:C},t??n)}))),a?(0,r.cloneElement)(f.filter((e=>e.props.value===y))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},f.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==y})))))}function u(e){const n=(0,l.Z)();return r.createElement(d,(0,a.Z)({key:String(n)},e))}},25654:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var a=t(87462),r=(t(67294),t(3905)),l=t(26396),i=t(58215);const o={sidebar_label:"ion-infinite-scroll-content"},s="ion-infinite-scroll-content",c={unversionedId:"api/infinite-scroll-content",id:"version-v5/api/infinite-scroll-content",isDocsHomePage:!1,title:"ion-infinite-scroll-content",description:"The ion-infinite-scroll-content component is the default child used by the ion-infinite-scroll. It displays an infinite scroll spinner that looks best based on the platform and changes the look depending on the infinite scroll's state. The default spinner can be changed and text can be added by setting the loadingSpinner and loadingText properties.",source:"@site/versioned_docs/version-v5/api/infinite-scroll-content.md",sourceDirName:"api",slug:"/api/infinite-scroll-content",permalink:"/docs/v5/api/infinite-scroll-content",editUrl:"https://github.com/ionic-team/ionic-docs/tree/main/docs/api/infinite-scroll-content.md",tags:[],version:"v5",frontMatter:{sidebar_label:"ion-infinite-scroll-content"},sidebar:"version-v5/api",previous:{title:"ion-infinite-scroll",permalink:"/docs/v5/api/infinite-scroll"},next:{title:"ion-input",permalink:"/docs/v5/api/input"}},p=[{value:"React",id:"react",children:[],level:2},{value:"Usage",id:"usage",children:[],level:2},{value:"Properties",id:"properties",children:[{value:"loadingSpinner",id:"loadingspinner",children:[],level:3},{value:"loadingText",id:"loadingtext",children:[],level:3}],level:2}],d={toc:p};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"ion-infinite-scroll-content"},"ion-infinite-scroll-content"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ion-infinite-scroll-content")," component is the default child used by the ",(0,r.kt)("inlineCode",{parentName:"p"},"ion-infinite-scroll"),". It displays an infinite scroll spinner that looks best based on the platform and changes the look depending on the infinite scroll's state. The default spinner can be changed and text can be added by setting the ",(0,r.kt)("inlineCode",{parentName:"p"},"loadingSpinner")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"loadingText")," properties."),(0,r.kt)("h2",{id:"react"},"React"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ion-infinite-scroll-content")," component is not supported in React."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)(l.Z,{groupId:"framework",defaultValue:"angular",values:[{value:"angular",label:"ANGULAR"},{value:"javascript",label:"JAVASCRIPT"},{value:"stencil",label:"STENCIL"},{value:"vue",label:"VUE"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"angular",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<ion-content>\n  <ion-infinite-scroll>\n    <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="Loading more data\u2026">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n'))),(0,r.kt)(i.Z,{value:"javascript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<ion-content>\n  <ion-infinite-scroll>\n    <ion-infinite-scroll-content loading-spinner="bubbles" loading-text="Loading more data\u2026">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n'))),(0,r.kt)(i.Z,{value:"stencil",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Component, h } from '@stencil/core';\n\n@Component({\n  tag: 'infinite-scroll-content-example',\n  styleUrl: 'infinite-scroll-content-example.css',\n})\nexport class InfiniteScrollContentExample {\n  render() {\n    return [\n      <ion-content>\n        <ion-infinite-scroll>\n          <ion-infinite-scroll-content\n            loadingSpinner=\"bubbles\"\n            loadingText=\"Loading more data...\"\n          ></ion-infinite-scroll-content>\n        </ion-infinite-scroll>\n      </ion-content>,\n    ];\n  }\n}\n"))),(0,r.kt)(i.Z,{value:"vue",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<template>\n  <ion-page>\n    <ion-content>\n      <ion-infinite-scroll>\n        <ion-infinite-scroll-content\n          loading-spinner="bubbles"\n          loading-text="Loading more data\u2026">\n        </ion-infinite-scroll-content>\n      </ion-infinite-scroll>\n    </ion-content>\n  </ion-page>\n</template>\n\n<script lang="ts">\nimport {\n  IonContent,\n  IonInfiniteScroll,\n  IonInfiniteScrollContent,\n  IonPage\n } from \'@ionic/vue\';\nimport { defineComponent } from \'vue\';\n\nexport default defineComponent({\n  components: {\n    IonContent,\n    IonInfiniteScroll,\n    IonInfiniteScrollContent,\n    IonPage\n  }\n});\n')))),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"loadingspinner"},"loadingSpinner"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Description")),(0,r.kt)("td",{parentName:"tr",align:null},"An animated SVG spinner that shows while loading.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Attribute")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"loading-spinner"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Type")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"bubbles" \\| "circles" \\| "circular" \\| "crescent" \\| "dots" \\| "lines" \\| "lines-small" \\| null \\| undefined'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Default")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,r.kt)("h3",{id:"loadingtext"},"loadingText"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Description")),(0,r.kt)("td",{parentName:"tr",align:null},"Optional text to display while loading.",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"loadingText")," can accept either plaintext or HTML as a string.",(0,r.kt)("br",null),"To display characters normally reserved for HTML, they",(0,r.kt)("br",null),"must be escaped. For example ",(0,r.kt)("inlineCode",{parentName:"td"},"<Ionic>")," would become",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"&lt;Ionic&gt;"),(0,r.kt)("br",null),(0,r.kt)("br",null),"For more information: ",(0,r.kt)("a",{parentName:"td",href:"https://ionicframework.com/docs/faq/security"},"Security Documentation"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Attribute")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"loading-text"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Type")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"IonicSafeString \\| string \\| undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Default")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))))))}u.isMDXComponent=!0}}]);