"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[76853],{3905:(n,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>p});var e=o(67294);function a(n,t,o){return t in n?Object.defineProperty(n,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[t]=o,n}function i(n,t){var o=Object.keys(n);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(n);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),o.push.apply(o,e)}return o}function l(n){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(n,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(o,t))}))}return n}function r(n,t){if(null==n)return{};var o,e,a=function(n,t){if(null==n)return{};var o,e,a={},i=Object.keys(n);for(e=0;e<i.length;e++)o=i[e],t.indexOf(o)>=0||(a[o]=n[o]);return a}(n,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(e=0;e<i.length;e++)o=i[e],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(n,o)&&(a[o]=n[o])}return a}var b=e.createContext({}),u=function(n){var t=e.useContext(b),o=t;return n&&(o="function"==typeof n?n(t):l(l({},t),n)),o},c=function(n){var t=u(n.components);return e.createElement(b.Provider,{value:t},n.children)},s={inlineCode:"code",wrapper:function(n){var t=n.children;return e.createElement(e.Fragment,{},t)}},f=e.forwardRef((function(n,t){var o=n.components,a=n.mdxType,i=n.originalType,b=n.parentName,c=r(n,["components","mdxType","originalType","parentName"]),f=u(o),p=a,m=f["".concat(b,".").concat(p)]||f[p]||s[p]||i;return o?e.createElement(m,l(l({ref:t},c),{},{components:o})):e.createElement(m,l({ref:t},c))}));function p(n,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof n||a){var i=o.length,l=new Array(i);l[0]=f;var r={};for(var b in t)hasOwnProperty.call(t,b)&&(r[b]=t[b]);r.originalType=n,r.mdxType="string"==typeof n?n:a,l[1]=r;for(var u=2;u<i;u++)l[u]=o[u];return e.createElement.apply(null,l)}return e.createElement.apply(null,o)}f.displayName="MDXCreateElement"},58215:(n,t,o)=>{o.d(t,{Z:()=>a});var e=o(67294);const a=function(n){let{children:t,hidden:o,className:a}=n;return e.createElement("div",{role:"tabpanel",hidden:o,className:a},t)}},26396:(n,t,o)=>{o.d(t,{Z:()=>f});var e=o(87462),a=o(67294),i=o(72389),l=o(79443);const r=function(){const n=(0,a.useContext)(l.Z);if(null==n)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return n};var b=o(89521),u=o(86010);const c="tabItem_vU9c";function s(n){var t,o;const{lazy:e,block:i,defaultValue:l,values:s,groupId:f,className:p}=n,m=a.Children.map(n.children,(n=>{if((0,a.isValidElement)(n)&&void 0!==n.props.value)return n;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof n.type?n.type:n.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),d=s??m.map((n=>{let{props:{value:t,label:o}}=n;return{value:t,label:o}})),g=(0,b.lx)(d,((n,t)=>n.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((n=>n.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===l?l:l??(null==(t=m.find((n=>n.props.default)))?void 0:t.props.value)??(null==(o=m[0])?void 0:o.props.value);if(null!==v&&!d.some((n=>n.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${d.map((n=>n.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:h,setTabGroupChoices:k}=r(),[I,y]=(0,a.useState)(v),N=[],{blockElementScrollPositionUntilNextRender:F}=(0,b.o5)();if(null!=f){const n=h[f];null!=n&&n!==I&&d.some((t=>t.value===n))&&y(n)}const w=n=>{const t=n.currentTarget,o=N.indexOf(t),e=d[o].value;e!==I&&(F(t),y(e),null!=f&&k(f,e))},T=n=>{var t;let o=null;switch(n.key){case"ArrowRight":{const t=N.indexOf(n.currentTarget)+1;o=N[t]||N[0];break}case"ArrowLeft":{const t=N.indexOf(n.currentTarget)-1;o=N[t]||N[N.length-1];break}}null==(t=o)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":i},p)},d.map((n=>{let{value:t,label:o}=n;return a.createElement("li",{role:"tab",tabIndex:I===t?0:-1,"aria-selected":I===t,className:(0,u.Z)("tabs__item",c,{"tabs__item--active":I===t}),key:t,ref:n=>N.push(n),onKeyDown:T,onFocus:w,onClick:w},o??t)}))),e?(0,a.cloneElement)(m.filter((n=>n.props.value===I))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},m.map(((n,t)=>(0,a.cloneElement)(n,{key:t,hidden:n.props.value!==I})))))}function f(n){const t=(0,i.Z)();return a.createElement(s,(0,e.Z)({key:String(t)},n))}},46484:(n,t,o)=>{o.r(t),o.d(t,{contentTitle:()=>b,default:()=>f,frontMatter:()=>r,metadata:()=>u,toc:()=>c});var e=o(87462),a=(o(67294),o(3905)),i=o(26396),l=o(58215);const r={sidebar_label:"ion-fab-list"},b="ion-fab-list",u={unversionedId:"api/fab-list",id:"version-v5/api/fab-list",isDocsHomePage:!1,title:"ion-fab-list",description:"The ion-fab-list element is a container for multiple fab buttons. This collection of fab buttons contains actions related to the main fab button and is flung out on click. To specify what side the buttons should appear on, set the side property to 'start', 'end', 'top', 'bottom'",source:"@site/versioned_docs/version-v5/api/fab-list.md",sourceDirName:"api",slug:"/api/fab-list",permalink:"/cn/docs/v5/api/fab-list",editUrl:"https://crowdin.com/project/ionic-docs",tags:[],version:"v5",frontMatter:{sidebar_label:"ion-fab-list"},sidebar:"version-v5/api",previous:{title:"ion-fab-button",permalink:"/cn/docs/v5/api/fab-button"},next:{title:"ion-grid",permalink:"/cn/docs/v5/api/grid"}},c=[{value:"Usage",id:"usage",children:[],level:2},{value:"Properties",id:"properties",children:[{value:"activated",id:"activated",children:[],level:3},{value:"side",id:"side",children:[],level:3}],level:2}],s={toc:c};function f(n){let{components:t,...o}=n;return(0,a.kt)("wrapper",(0,e.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ion-fab-list"},"ion-fab-list"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"ion-fab-list")," element is a container for multiple fab buttons. This collection of fab buttons contains actions related to the main fab button and is flung out on click. To specify what side the buttons should appear on, set the ",(0,a.kt)("inlineCode",{parentName:"p"},"side")," property to 'start', 'end', 'top', 'bottom'"),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)(i.Z,{groupId:"framework",defaultValue:"angular",values:[{value:"angular",label:"Angular"},{value:"javascript",label:"Javascript"},{value:"react",label:"React"},{value:"stencil",label:"Stencil"},{value:"vue",label:"Vue"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"angular",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<ion-fab vertical="center" horizontal="center">\n  <ion-fab-button>Share</ion-fab-button>\n  <ion-fab-list side="top">\n    <ion-fab-button>\n      <ion-icon name="logo-facebook"></ion-icon>\n    </ion-fab-button>\n    <ion-fab-button>\n      <ion-icon name="logo-twitter"></ion-icon>\n    </ion-fab-button>\n    <ion-fab-button>\n      <ion-icon name="logo-youtube"></ion-icon>\n    </ion-fab-button>\n  </ion-fab-list>\n\n  <ion-fab-list side="end">\n    <ion-fab-button>\n      <ion-icon name="logo-pwa"></ion-icon>\n    </ion-fab-button>\n    <ion-fab-button>\n      <ion-icon name="logo-npm"></ion-icon>\n    </ion-fab-button>\n    <ion-fab-button>\n      <ion-icon name="logo-ionic"></ion-icon>\n    </ion-fab-button>\n  </ion-fab-list>\n\n  <ion-fab-list side="bottom">\n    <ion-fab-button>\n      <ion-icon name="logo-github"></ion-icon>\n    </ion-fab-button>\n    <ion-fab-button>\n      <ion-icon name="logo-javascript"></ion-icon>\n    </ion-fab-button>\n    <ion-fab-button>\n      <ion-icon name="logo-angular"></ion-icon>\n    </ion-fab-button>\n  </ion-fab-list>\n\n  <ion-fab-list side="start">\n    <ion-fab-button>\n      <ion-icon name="logo-vimeo"></ion-icon>\n    </ion-fab-button>\n    <ion-fab-button>\n      <ion-icon name="logo-chrome"></ion-icon>\n    </ion-fab-button>\n    <ion-fab-button>\n      <ion-icon name="logo-react"></ion-icon>\n    </ion-fab-button>\n  </ion-fab-list>\n</ion-fab>\n'))),(0,a.kt)(l.Z,{value:"javascript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<ion-fab vertical="center" horizontal="center">\n  <ion-fab-button>Share</ion-fab-button>\n  <ion-fab-list side="top">\n    <ion-fab-button>\n      <ion-icon name="logo-facebook"></ion-icon>\n    </ion-fab-button>\n    <ion-fab-button>\n      <ion-icon name="logo-twitter"></ion-icon>\n    </ion-fab-button>\n    <ion-fab-button>\n      <ion-icon name="logo-youtube"></ion-icon>\n    </ion-fab-button>\n  </ion-fab-list>\n\n  <ion-fab-list side="end">\n    <ion-fab-button>\n      <ion-icon name="logo-pwa"></ion-icon>\n    </ion-fab-button>\n    <ion-fab-button>\n      <ion-icon name="logo-npm"></ion-icon>\n    </ion-fab-button>\n    <ion-fab-button>\n      <ion-icon name="logo-ionic"></ion-icon>\n    </ion-fab-button>\n  </ion-fab-list>\n\n  <ion-fab-list side="bottom">\n    <ion-fab-button>\n      <ion-icon name="logo-github"></ion-icon>\n    </ion-fab-button>\n    <ion-fab-button>\n      <ion-icon name="logo-javascript"></ion-icon>\n    </ion-fab-button>\n    <ion-fab-button>\n      <ion-icon name="logo-angular"></ion-icon>\n    </ion-fab-button>\n  </ion-fab-list>\n\n  <ion-fab-list side="start">\n    <ion-fab-button>\n      <ion-icon name="logo-vimeo"></ion-icon>\n    </ion-fab-button>\n    <ion-fab-button>\n      <ion-icon name="logo-chrome"></ion-icon>\n    </ion-fab-button>\n    <ion-fab-button>\n      <ion-icon name="logo-react"></ion-icon>\n    </ion-fab-button>\n  </ion-fab-list>\n</ion-fab>\n'))),(0,a.kt)(l.Z,{value:"react",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import React from \'react\';\nimport { IonFab, IonFabButton, IonFabList, IonContent, IonIcon } from \'@ionic/react\';\nimport {\n  logoFacebook,\n  logoTwitter,\n  logoYoutube,\n  logoPwa,\n  logoNpm,\n  logoIonic,\n  logoGithub,\n  logoJavascript,\n  logoAngular,\n  logoVimeo,\n  logoChrome,\n  logoReact,\n} from \'ionicons/icons\';\n\nexport const FabListExample: React.FC = () => (\n  <IonContent>\n    <IonFab vertical="center" horizontal="center">\n      <IonFabButton>Share</IonFabButton>\n      <IonFabList side="top">\n        <IonFabButton>\n          <IonIcon icon={logoFacebook} />\n        </IonFabButton>\n        <IonFabButton>\n          <IonIcon icon={logoTwitter} />\n        </IonFabButton>\n        <IonFabButton>\n          <IonIcon icon={logoYoutube} />\n        </IonFabButton>\n      </IonFabList>\n\n      <IonFabList side="end">\n        <IonFabButton>\n          <IonIcon icon={logoPwa} />\n        </IonFabButton>\n        <IonFabButton>\n          <IonIcon icon={logoNpm} />\n        </IonFabButton>\n        <IonFabButton>\n          <IonIcon icon={logoIonic} />\n        </IonFabButton>\n      </IonFabList>\n\n      <IonFabList side="bottom">\n        <IonFabButton>\n          <IonIcon icon={logoGithub} />\n        </IonFabButton>\n        <IonFabButton>\n          <IonIcon icon={logoJavascript} />\n        </IonFabButton>\n        <IonFabButton>\n          <IonIcon icon={logoAngular} />\n        </IonFabButton>\n      </IonFabList>\n\n      <IonFabList side="start">\n        <IonFabButton>\n          <IonIcon icon={logoVimeo} />\n        </IonFabButton>\n        <IonFabButton>\n          <IonIcon icon={logoChrome} />\n        </IonFabButton>\n        <IonFabButton>\n          <IonIcon icon={logoReact} />\n        </IonFabButton>\n      </IonFabList>\n    </IonFab>\n  </IonContent>\n);\n'))),(0,a.kt)(l.Z,{value:"stencil",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Component, h } from \'@stencil/core\';\n\n@Component({\n  tag: \'fab-list-example\',\n  styleUrl: \'fab-list-example.css\',\n})\nexport class FabListExample {\n  render() {\n    return [\n      <ion-fab vertical="center" horizontal="center">\n        <ion-fab-button>Share</ion-fab-button>\n        <ion-fab-list side="top">\n          <ion-fab-button>\n            <ion-icon name="logo-facebook"></ion-icon>\n          </ion-fab-button>\n          <ion-fab-button>\n            <ion-icon name="logo-twitter"></ion-icon>\n          </ion-fab-button>\n          <ion-fab-button>\n            <ion-icon name="logo-youtube"></ion-icon>\n          </ion-fab-button>\n        </ion-fab-list>\n\n        <ion-fab-list side="end">\n          <ion-fab-button>\n            <ion-icon name="logo-pwa"></ion-icon>\n          </ion-fab-button>\n          <ion-fab-button>\n            <ion-icon name="logo-npm"></ion-icon>\n          </ion-fab-button>\n          <ion-fab-button>\n            <ion-icon name="logo-ionic"></ion-icon>\n          </ion-fab-button>\n        </ion-fab-list>\n\n        <ion-fab-list side="bottom">\n          <ion-fab-button>\n            <ion-icon name="logo-github"></ion-icon>\n          </ion-fab-button>\n          <ion-fab-button>\n            <ion-icon name="logo-javascript"></ion-icon>\n          </ion-fab-button>\n          <ion-fab-button>\n            <ion-icon name="logo-angular"></ion-icon>\n          </ion-fab-button>\n        </ion-fab-list>\n\n        <ion-fab-list side="start">\n          <ion-fab-button>\n            <ion-icon name="logo-vimeo"></ion-icon>\n          </ion-fab-button>\n          <ion-fab-button>\n            <ion-icon name="logo-chrome"></ion-icon>\n          </ion-fab-button>\n          <ion-fab-button>\n            <ion-icon name="logo-react"></ion-icon>\n          </ion-fab-button>\n        </ion-fab-list>\n      </ion-fab>,\n    ];\n  }\n}\n'))),(0,a.kt)(l.Z,{value:"vue",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<template>\n  <ion-fab vertical="bottom" horizontal="end">\n    <ion-fab-button>Share</ion-fab-button>\n\n    <ion-fab-list side="top">\n      <ion-fab-button>Facebook</ion-fab-button>\n      <ion-fab-button>Twitter</ion-fab-button>\n      <ion-fab-button>Youtube</ion-fab-button>\n    </ion-fab-list>\n\n    <ion-fab-list side="start">\n      <ion-fab-button>Vimeo</ion-fab-button>\n    </ion-fab-list>\n  </ion-fab>\n</template>\n\n<script>\n  import { IonFab, IonFabButton, IonFabList } from \'@ionic/vue\';\n  import { defineComponent } from \'vue\';\n\n  export default defineComponent({\n    components: { IonFab, IonFabButton, IonFabList },\n  });\n<\/script>\n')))),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"activated"},"activated"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null}),(0,a.kt)("th",{parentName:"tr",align:null}))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Description")),(0,a.kt)("td",{parentName:"tr",align:null},"If ",(0,a.kt)("inlineCode",{parentName:"td"},"true"),", the fab list will show all fab buttons in the list.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Attribute")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"activated"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Type")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Default")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"false"))))),(0,a.kt)("h3",{id:"side"},"side"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null}),(0,a.kt)("th",{parentName:"tr",align:null}))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Description")),(0,a.kt)("td",{parentName:"tr",align:null},"The side the fab list will show on relative to the main fab button.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Attribute")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"side"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Type")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},'"bottom" \\| "end" \\| "start" \\| "top"'))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Default")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"'bottom'"))))))}f.isMDXComponent=!0}}]);