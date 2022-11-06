"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[90754],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var m=a.createContext({}),u=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(m.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,m=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=u(n),k=o,c=s["".concat(m,".").concat(k)]||s[k]||p[k]||i;return n?a.createElement(c,r(r({ref:t},d),{},{components:n})):a.createElement(c,r({ref:t},d))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=s;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var u=2;u<i;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},58215:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294);const o=function(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},26396:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(87462),o=n(67294),i=n(72389),r=n(79443);const l=function(){const e=(0,o.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var m=n(89521),u=n(86010);const d="tabItem_vU9c";function p(e){var t,n;const{lazy:a,block:i,defaultValue:r,values:p,groupId:s,className:k}=e,c=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),N=p??c.map((e=>{let{props:{value:t,label:n}}=e;return{value:t,label:n}})),b=(0,m.lx)(N,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===r?r:r??(null==(t=c.find((e=>e.props.default)))?void 0:t.props.value)??(null==(n=c[0])?void 0:n.props.value);if(null!==h&&!N.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${N.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:I}=l(),[y,v]=(0,o.useState)(h),f=[],{blockElementScrollPositionUntilNextRender:C}=(0,m.o5)();if(null!=s){const e=g[s];null!=e&&e!==y&&N.some((t=>t.value===e))&&v(e)}const M=e=>{const t=e.currentTarget,n=f.indexOf(t),a=N[n].value;a!==y&&(C(t),v(a),null!=s&&I(s,a))},w=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=f.indexOf(e.currentTarget)+1;n=f[t]||f[0];break}case"ArrowLeft":{const t=f.indexOf(e.currentTarget)-1;n=f[t]||f[f.length-1];break}}null==(t=n)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":i},k)},N.map((e=>{let{value:t,label:n}=e;return o.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:(0,u.Z)("tabs__item",d,{"tabs__item--active":y===t}),key:t,ref:e=>f.push(e),onKeyDown:w,onFocus:M,onClick:M},n??t)}))),a?(0,o.cloneElement)(c.filter((e=>e.props.value===y))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},c.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==y})))))}function s(e){const t=(0,i.Z)();return o.createElement(p,(0,a.Z)({key:String(t)},e))}},28699:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>m,default:()=>s,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var a=n(87462),o=(n(67294),n(3905)),i=n(26396),r=n(58215);const l={sidebar_label:"ion-menu",demoUrl:"/docs/demos/api/menu/index.html",demoSourceUrl:"https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/menu/index.html"},m="ion-menu",u={unversionedId:"api/menu",id:"version-v5/api/menu",isDocsHomePage:!1,title:"ion-menu",description:"The Menu component is a navigation drawer that slides in from the side of the current view.",source:"@site/versioned_docs/version-v5/api/menu.md",sourceDirName:"api",slug:"/api/menu",permalink:"/cn/docs/v5/api/menu",editUrl:"https://crowdin.com/project/ionic-docs",tags:[],version:"v5",frontMatter:{sidebar_label:"ion-menu",demoUrl:"/docs/demos/api/menu/index.html",demoSourceUrl:"https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/menu/index.html"},sidebar:"version-v5/api",previous:{title:"ion-thumbnail",permalink:"/cn/docs/v5/api/thumbnail"},next:{title:"ion-menu-button",permalink:"/cn/docs/v5/api/menu-button"}},d=[{value:"Usage",id:"usage",children:[],level:2},{value:"Properties",id:"properties",children:[{value:"contentId",id:"contentid",children:[],level:3},{value:"disabled",id:"disabled",children:[],level:3},{value:"maxEdgeStart",id:"maxedgestart",children:[],level:3},{value:"menuId",id:"menuid",children:[],level:3},{value:"side",id:"side",children:[],level:3},{value:"swipeGesture",id:"swipegesture",children:[],level:3},{value:"type",id:"type",children:[],level:3}],level:2},{value:"Events",id:"events",children:[],level:2},{value:"Methods",id:"methods",children:[{value:"close",id:"close",children:[],level:3},{value:"isActive",id:"isactive",children:[],level:3},{value:"isOpen",id:"isopen",children:[],level:3},{value:"open",id:"open",children:[],level:3},{value:"setOpen",id:"setopen",children:[],level:3},{value:"toggle",id:"toggle",children:[],level:3}],level:2},{value:"CSS Shadow Parts",id:"css-shadow-parts",children:[],level:2},{value:"CSS Custom Properties",id:"css-custom-properties",children:[],level:2}],p={toc:d};function s(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ion-menu"},"ion-menu"),(0,o.kt)("p",null,"The Menu component is a navigation drawer that slides in from the side of the current view.\nBy default, it slides in from the left, but the side can be overridden.\nThe menu will be displayed differently based on the mode, however the display type can be changed to any of the available menu types.\nThe menu element should be a sibling to the root content element.\nThere can be any number of menus attached to the content.\nThese can be controlled from the templates, or programmatically using the MenuController."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)(i.Z,{groupId:"framework",defaultValue:"angular",values:[{value:"angular",label:"Angular"},{value:"javascript",label:"Javascript"},{value:"react",label:"React"},{value:"stencil",label:"Stencil"},{value:"vue",label:"Vue"}],mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"angular",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<ion-menu side="start" menuId="first" contentId="main">\n  <ion-header>\n    <ion-toolbar color="primary">\n      <ion-title>Start Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <ion-list>\n      <ion-item>Menu Item</ion-item>\n      <ion-item>Menu Item</ion-item>\n      <ion-item>Menu Item</ion-item>\n      <ion-item>Menu Item</ion-item>\n      <ion-item>Menu Item</ion-item>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<ion-menu side="start" menuId="custom" contentId="main" class="my-custom-menu">\n  <ion-header>\n    <ion-toolbar color="tertiary">\n      <ion-title>Custom Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <ion-list>\n      <ion-item>Menu Item</ion-item>\n      <ion-item>Menu Item</ion-item>\n      <ion-item>Menu Item</ion-item>\n      <ion-item>Menu Item</ion-item>\n      <ion-item>Menu Item</ion-item>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<ion-menu side="end" type="push" contentId="main">\n  <ion-header>\n    <ion-toolbar color="danger">\n      <ion-title>End Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <ion-list>\n      <ion-item>Menu Item</ion-item>\n      <ion-item>Menu Item</ion-item>\n      <ion-item>Menu Item</ion-item>\n      <ion-item>Menu Item</ion-item>\n      <ion-item>Menu Item</ion-item>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<ion-router-outlet id="main"></ion-router-outlet>\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Component } from '@angular/core';\nimport { MenuController } from '@ionic/angular';\n\n@Component({\n  selector: 'menu-example',\n  templateUrl: 'menu-example.html',\n  styleUrls: ['./menu-example.css'],\n})\nexport class MenuExample {\n  constructor(private menu: MenuController) {}\n\n  openFirst() {\n    this.menu.enable(true, 'first');\n    this.menu.open('first');\n  }\n\n  openEnd() {\n    this.menu.open('end');\n  }\n\n  openCustom() {\n    this.menu.enable(true, 'custom');\n    this.menu.open('custom');\n  }\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},".my-custom-menu {\n  --width: 500px;\n}\n"))),(0,o.kt)(r.Z,{value:"javascript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<ion-app>\n  <ion-menu side="start" menu-id="first" content-id="main">\n    <ion-header>\n      <ion-toolbar color="primary">\n        <ion-title>Start Menu</ion-title>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content>\n      <ion-list>\n        <ion-item>Menu Item</ion-item>\n        <ion-item>Menu Item</ion-item>\n        <ion-item>Menu Item</ion-item>\n        <ion-item>Menu Item</ion-item>\n        <ion-item>Menu Item</ion-item>\n      </ion-list>\n    </ion-content>\n  </ion-menu>\n\n  <ion-menu side="start" menu-id="custom" class="my-custom-menu" content-id="main">\n    <ion-header>\n      <ion-toolbar color="tertiary">\n        <ion-title>Custom Menu</ion-title>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content>\n      <ion-list>\n        <ion-item>Menu Item</ion-item>\n        <ion-item>Menu Item</ion-item>\n        <ion-item>Menu Item</ion-item>\n        <ion-item>Menu Item</ion-item>\n        <ion-item>Menu Item</ion-item>\n      </ion-list>\n    </ion-content>\n  </ion-menu>\n\n  <ion-menu side="end" type="push" content-id="main">\n    <ion-header>\n      <ion-toolbar color="danger">\n        <ion-title>End Menu</ion-title>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content>\n      <ion-list>\n        <ion-item>Menu Item</ion-item>\n        <ion-item>Menu Item</ion-item>\n        <ion-item>Menu Item</ion-item>\n        <ion-item>Menu Item</ion-item>\n        <ion-item>Menu Item</ion-item>\n      </ion-list>\n    </ion-content>\n  </ion-menu>\n\n  <div class="ion-page" id="main">\n    <ion-header>\n      <ion-toolbar>\n        <ion-title>Menu - Basic</ion-title>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content class="ion-padding">\n      <ion-button expand="block" onclick="openFirst()">Open Start Menu</ion-button>\n      <ion-button expand="block" onclick="openEnd()">Open End Menu</ion-button>\n      <ion-button expand="block" onclick="openCustom()">Open Custom Menu</ion-button>\n    </ion-content>\n  </div>\n</ion-app>\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"<script type=\"module\">\n    import { menuController } from '@ionic/core';\n    window.menuController = menuController;\n<\/script>\n\n<script>\n  function openFirst() {\n    menuController.enable(true, 'first');\n    menuController.open('first');\n  }\n\n  function openEnd() {\n    menuController.open('end');\n  }\n\n  function openCustom() {\n    menuController.enable(true, 'custom');\n    menuController.open('custom');\n  }\n<\/script>\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},".my-custom-menu {\n  --width: 500px;\n}\n"))),(0,o.kt)(r.Z,{value:"react",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import React from \'react\';\nimport { IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonRouterOutlet } from \'@ionic/react\';\n\nexport const MenuExample: React.FC = () => (\n  <>\n    <IonMenu side="start" menuId="first">\n      <IonHeader>\n        <IonToolbar color="primary">\n          <IonTitle>Start Menu</IonTitle>\n        </IonToolbar>\n      </IonHeader>\n      <IonContent>\n        <IonList>\n          <IonItem>Menu Item</IonItem>\n          <IonItem>Menu Item</IonItem>\n          <IonItem>Menu Item</IonItem>\n          <IonItem>Menu Item</IonItem>\n          <IonItem>Menu Item</IonItem>\n        </IonList>\n      </IonContent>\n    </IonMenu>\n\n    <IonMenu side="start" menuId="custom" className="my-custom-menu">\n      <IonHeader>\n        <IonToolbar color="tertiary">\n          <IonTitle>Custom Menu</IonTitle>\n        </IonToolbar>\n      </IonHeader>\n      <IonContent>\n        <IonList>\n          <IonItem>Menu Item</IonItem>\n          <IonItem>Menu Item</IonItem>\n          <IonItem>Menu Item</IonItem>\n          <IonItem>Menu Item</IonItem>\n          <IonItem>Menu Item</IonItem>\n        </IonList>\n      </IonContent>\n    </IonMenu>\n\n    <IonMenu side="end" type="push">\n      <IonHeader>\n        <IonToolbar color="danger">\n          <IonTitle>End Menu</IonTitle>\n        </IonToolbar>\n      </IonHeader>\n      <IonContent>\n        <IonList>\n          <IonItem>Menu Item</IonItem>\n          <IonItem>Menu Item</IonItem>\n          <IonItem>Menu Item</IonItem>\n          <IonItem>Menu Item</IonItem>\n          <IonItem>Menu Item</IonItem>\n        </IonList>\n      </IonContent>\n    </IonMenu>\n    <IonRouterOutlet></IonRouterOutlet>\n  </>\n);\n'))),(0,o.kt)(r.Z,{value:"stencil",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Component, h } from \'@stencil/core\';\n\nimport { menuController } from \'@ionic/core\';\n\n@Component({\n  tag: \'menu-example\',\n  styleUrl: \'menu-example.css\',\n})\nexport class MenuExample {\n  openFirst() {\n    menuController.enable(true, \'first\');\n    menuController.open(\'first\');\n  }\n\n  openEnd() {\n    menuController.open(\'end\');\n  }\n\n  openCustom() {\n    menuController.enable(true, \'custom\');\n    menuController.open(\'custom\');\n  }\n\n  render() {\n    return [\n      <ion-menu side="start" menuId="first" contentId="main">\n        <ion-header>\n          <ion-toolbar color="primary">\n            <ion-title>Start Menu</ion-title>\n          </ion-toolbar>\n        </ion-header>\n        <ion-content>\n          <ion-list>\n            <ion-item>Menu Item</ion-item>\n            <ion-item>Menu Item</ion-item>\n            <ion-item>Menu Item</ion-item>\n            <ion-item>Menu Item</ion-item>\n            <ion-item>Menu Item</ion-item>\n          </ion-list>\n        </ion-content>\n      </ion-menu>,\n\n      <ion-menu side="start" menuId="custom" contentId="main" class="my-custom-menu">\n        <ion-header>\n          <ion-toolbar color="tertiary">\n            <ion-title>Custom Menu</ion-title>\n          </ion-toolbar>\n        </ion-header>\n        <ion-content>\n          <ion-list>\n            <ion-item>Menu Item</ion-item>\n            <ion-item>Menu Item</ion-item>\n            <ion-item>Menu Item</ion-item>\n            <ion-item>Menu Item</ion-item>\n            <ion-item>Menu Item</ion-item>\n          </ion-list>\n        </ion-content>\n      </ion-menu>,\n\n      <ion-menu side="end" type="push" contentId="main">\n        <ion-header>\n          <ion-toolbar color="danger">\n            <ion-title>End Menu</ion-title>\n          </ion-toolbar>\n        </ion-header>\n        <ion-content>\n          <ion-list>\n            <ion-item>Menu Item</ion-item>\n            <ion-item>Menu Item</ion-item>\n            <ion-item>Menu Item</ion-item>\n            <ion-item>Menu Item</ion-item>\n            <ion-item>Menu Item</ion-item>\n          </ion-list>\n        </ion-content>\n      </ion-menu>,\n\n      // A router outlet can be placed here instead\n      <ion-content id="main">\n        <ion-button expand="block" onClick={() => this.openFirst()}>\n          Open Start Menu\n        </ion-button>\n        <ion-button expand="block" onClick={() => this.openEnd()}>\n          Open End Menu\n        </ion-button>\n        <ion-button expand="block" onClick={() => this.openCustom()}>\n          Open Custom Menu\n        </ion-button>\n      </ion-content>,\n    ];\n  }\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},".my-custom-menu {\n  --width: 500px;\n}\n"))),(0,o.kt)(r.Z,{value:"vue",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<template>\n  <ion-menu side="start" menu-id="first" content-id="main">\n    <ion-header>\n      <ion-toolbar color="primary">\n        <ion-title>Start Menu</ion-title>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content>\n      <ion-list>\n        <ion-item>Menu Item</ion-item>\n        <ion-item>Menu Item</ion-item>\n        <ion-item>Menu Item</ion-item>\n        <ion-item>Menu Item</ion-item>\n        <ion-item>Menu Item</ion-item>\n      </ion-list>\n    </ion-content>\n  </ion-menu>\n\n  <ion-menu side="start" menu-id="custom" class="my-custom-menu" content-id="main">\n    <ion-header>\n      <ion-toolbar color="tertiary">\n        <ion-title>Custom Menu</ion-title>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content>\n      <ion-list>\n        <ion-item>Menu Item</ion-item>\n        <ion-item>Menu Item</ion-item>\n        <ion-item>Menu Item</ion-item>\n        <ion-item>Menu Item</ion-item>\n        <ion-item>Menu Item</ion-item>\n      </ion-list>\n    </ion-content>\n  </ion-menu>\n\n  <ion-menu side="end" type="push" content-id="main">\n    <ion-header>\n      <ion-toolbar color="danger">\n        <ion-title>End Menu</ion-title>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content>\n      <ion-list>\n        <ion-item>Menu Item</ion-item>\n        <ion-item>Menu Item</ion-item>\n        <ion-item>Menu Item</ion-item>\n        <ion-item>Menu Item</ion-item>\n        <ion-item>Menu Item</ion-item>\n      </ion-list>\n    </ion-content>\n  </ion-menu>\n\n  <ion-router-outlet id="main"></ion-router-outlet>\n</template>\n<style>\n  .my-custom-menu {\n    --width: 500px;\n  }\n</style>\n\n<script>\n  import {\n    IonContent,\n    IonHeader,\n    IonItem,\n    IonList,\n    IonMenu,\n    IonRouterOutlet,\n    IonTitle,\n    IonToolbar,\n    menuController,\n  } from \'@ionic/vue\';\n  import { defineComponent } from \'vue\';\n\n  export default defineComponent({\n    components: {\n      IonContent,\n      IonHeader,\n      IonItem,\n      IonList,\n      IonMenu,\n      IonRouterOutlet,\n      IonTitle,\n      IonToolbar,\n    },\n    methods: {\n      openFirst() {\n        menuController.enable(true, \'first\');\n        menuController.open(\'first\');\n      },\n      openEnd() {\n        menuController.open(\'end\');\n      },\n      openCustom() {\n        menuController.enable(true, \'custom\');\n        menuController.open(\'custom\');\n      },\n    },\n  });\n<\/script>\n')))),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"contentid"},"contentId"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null}),(0,o.kt)("th",{parentName:"tr",align:null}))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Description")),(0,o.kt)("td",{parentName:"tr",align:null},"The ",(0,o.kt)("inlineCode",{parentName:"td"},"id")," of the main content. When using",(0,o.kt)("br",null),"a router this is typically ",(0,o.kt)("inlineCode",{parentName:"td"},"ion-router-outlet"),".",(0,o.kt)("br",null),"When not using a router, this is typically",(0,o.kt)("br",null),"your main view's ",(0,o.kt)("inlineCode",{parentName:"td"},"ion-content"),". This is not the",(0,o.kt)("br",null),"id of the ",(0,o.kt)("inlineCode",{parentName:"td"},"ion-content")," inside of your ",(0,o.kt)("inlineCode",{parentName:"td"},"ion-menu"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Attribute")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"content-id"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Type")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"string \\| undefined"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Default")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,o.kt)("h3",{id:"disabled"},"disabled"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null}),(0,o.kt)("th",{parentName:"tr",align:null}))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Description")),(0,o.kt)("td",{parentName:"tr",align:null},"If ",(0,o.kt)("inlineCode",{parentName:"td"},"true"),", the menu is disabled.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Attribute")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"disabled"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Type")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Default")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"false"))))),(0,o.kt)("h3",{id:"maxedgestart"},"maxEdgeStart"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null}),(0,o.kt)("th",{parentName:"tr",align:null}))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Description")),(0,o.kt)("td",{parentName:"tr",align:null},"The edge threshold for dragging the menu open.",(0,o.kt)("br",null),"If a drag/swipe happens over this value, the menu is not triggered.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Attribute")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"max-edge-start"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Type")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"number"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Default")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"50"))))),(0,o.kt)("h3",{id:"menuid"},"menuId"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null}),(0,o.kt)("th",{parentName:"tr",align:null}))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Description")),(0,o.kt)("td",{parentName:"tr",align:null},"An id for the menu.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Attribute")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"menu-id"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Type")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"string \\| undefined"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Default")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,o.kt)("h3",{id:"side"},"side"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null}),(0,o.kt)("th",{parentName:"tr",align:null}))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Description")),(0,o.kt)("td",{parentName:"tr",align:null},"Which side of the view the menu should be placed.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Attribute")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"side"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Type")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},'"end" \\| "start"'))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Default")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"'start'"))))),(0,o.kt)("h3",{id:"swipegesture"},"swipeGesture"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null}),(0,o.kt)("th",{parentName:"tr",align:null}))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Description")),(0,o.kt)("td",{parentName:"tr",align:null},"If ",(0,o.kt)("inlineCode",{parentName:"td"},"true"),", swiping the menu is enabled.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Attribute")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"swipe-gesture"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Type")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Default")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"true"))))),(0,o.kt)("h3",{id:"type"},"type"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null}),(0,o.kt)("th",{parentName:"tr",align:null}))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Description")),(0,o.kt)("td",{parentName:"tr",align:null},"The display type of the menu.",(0,o.kt)("br",null),"Available options: ",(0,o.kt)("inlineCode",{parentName:"td"},'"overlay"'),", ",(0,o.kt)("inlineCode",{parentName:"td"},'"reveal"'),", ",(0,o.kt)("inlineCode",{parentName:"td"},'"push"'),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Attribute")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"type"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Type")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"string \\| undefined"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Default")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,o.kt)("h2",{id:"events"},"Events"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"ionDidClose")),(0,o.kt)("td",{parentName:"tr",align:null},"Emitted when the menu is closed.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"ionDidOpen")),(0,o.kt)("td",{parentName:"tr",align:null},"Emitted when the menu is open.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"ionWillClose")),(0,o.kt)("td",{parentName:"tr",align:null},"Emitted when the menu is about to be closed.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"ionWillOpen")),(0,o.kt)("td",{parentName:"tr",align:null},"Emitted when the menu is about to be opened.")))),(0,o.kt)("h2",{id:"methods"},"Methods"),(0,o.kt)("h3",{id:"close"},"close"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null}),(0,o.kt)("th",{parentName:"tr",align:null}))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Description")),(0,o.kt)("td",{parentName:"tr",align:null},"Closes the menu. If the menu is already closed or it can't be closed,",(0,o.kt)("br",null),"it returns ",(0,o.kt)("inlineCode",{parentName:"td"},"false"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Signature")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"close(animated?: boolean) => Promise<boolean>"))))),(0,o.kt)("h3",{id:"isactive"},"isActive"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null}),(0,o.kt)("th",{parentName:"tr",align:null}))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Description")),(0,o.kt)("td",{parentName:"tr",align:null},"Returns ",(0,o.kt)("inlineCode",{parentName:"td"},"true")," is the menu is active.",(0,o.kt)("br",null),(0,o.kt)("br",null),"A menu is active when it can be opened or closed, meaning it's enabled",(0,o.kt)("br",null),"and it's not part of a ",(0,o.kt)("inlineCode",{parentName:"td"},"ion-split-pane"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Signature")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"isActive() => Promise<boolean>"))))),(0,o.kt)("h3",{id:"isopen"},"isOpen"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null}),(0,o.kt)("th",{parentName:"tr",align:null}))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Description")),(0,o.kt)("td",{parentName:"tr",align:null},"Returns ",(0,o.kt)("inlineCode",{parentName:"td"},"true")," is the menu is open.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Signature")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"isOpen() => Promise<boolean>"))))),(0,o.kt)("h3",{id:"open"},"open"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null}),(0,o.kt)("th",{parentName:"tr",align:null}))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Description")),(0,o.kt)("td",{parentName:"tr",align:null},"Opens the menu. If the menu is already open or it can't be opened,",(0,o.kt)("br",null),"it returns ",(0,o.kt)("inlineCode",{parentName:"td"},"false"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Signature")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"open(animated?: boolean) => Promise<boolean>"))))),(0,o.kt)("h3",{id:"setopen"},"setOpen"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null}),(0,o.kt)("th",{parentName:"tr",align:null}))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Description")),(0,o.kt)("td",{parentName:"tr",align:null},"Opens or closes the button.",(0,o.kt)("br",null),"If the operation can't be completed successfully, it returns ",(0,o.kt)("inlineCode",{parentName:"td"},"false"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Signature")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"setOpen(shouldOpen: boolean, animated?: boolean) => Promise<boolean>"))))),(0,o.kt)("h3",{id:"toggle"},"toggle"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null}),(0,o.kt)("th",{parentName:"tr",align:null}))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Description")),(0,o.kt)("td",{parentName:"tr",align:null},"Toggles the menu. If the menu is already open, it will try to close, otherwise it will try to open it.",(0,o.kt)("br",null),"If the operation can't be completed successfully, it returns ",(0,o.kt)("inlineCode",{parentName:"td"},"false"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Signature")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"toggle(animated?: boolean) => Promise<boolean>"))))),(0,o.kt)("h2",{id:"css-shadow-parts"},"CSS Shadow Parts"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"backdrop")),(0,o.kt)("td",{parentName:"tr",align:null},"The backdrop that appears over the main content when the menu is open.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"container")),(0,o.kt)("td",{parentName:"tr",align:null},"The container for the menu content.")))),(0,o.kt)("h2",{id:"css-custom-properties"},"CSS Custom Properties"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--background")),(0,o.kt)("td",{parentName:"tr",align:null},"Background of the menu")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--height")),(0,o.kt)("td",{parentName:"tr",align:null},"Height of the menu")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--max-height")),(0,o.kt)("td",{parentName:"tr",align:null},"Maximum height of the menu")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--max-width")),(0,o.kt)("td",{parentName:"tr",align:null},"Maximum width of the menu")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--min-height")),(0,o.kt)("td",{parentName:"tr",align:null},"Minimum height of the menu")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--min-width")),(0,o.kt)("td",{parentName:"tr",align:null},"Minimum width of the menu")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--width")),(0,o.kt)("td",{parentName:"tr",align:null},"Width of the menu")))))}s.isMDXComponent=!0}}]);