"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[24216],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>f});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),l=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=l(e.components);return r.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=l(t),f=o,d=u["".concat(p,".").concat(f)]||u[f]||m[f]||i;return t?r.createElement(d,a(a({ref:n},s),{},{components:t})):r.createElement(d,a({ref:n},s))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=u;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},47981:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>a,default:()=>s,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var r=t(87462),o=(t(67294),t(3905));const i={sidebar_label:"Performance"},a="Vue Performance",c={unversionedId:"vue/performance",id:"vue/performance",isDocsHomePage:!1,title:"Vue Performance",description:"v-for with Ionic Components",source:"@site/docs/vue/performance.md",sourceDirName:"vue",slug:"/vue/performance",permalink:"/cn/docs/vue/performance",editUrl:"https://crowdin.com/project/ionic-docs",tags:[],version:"current",frontMatter:{sidebar_label:"Performance"},sidebar:"docs",previous:{title:"Troubleshooting",permalink:"/cn/docs/vue/troubleshooting"},next:{title:"Animations",permalink:"/cn/docs/utilities/animations"}},p=[{value:"v-for with Ionic Components",id:"v-for-with-ionic-components",children:[],level:2}],l={toc:p};function s(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"vue-performance"},"Vue Performance"),(0,o.kt)("h2",{id:"v-for-with-ionic-components"},"v-for with Ionic Components"),(0,o.kt)("p",null,"When using ",(0,o.kt)("inlineCode",{parentName:"p"},"v-for")," with Ionic components, we recommend using Vue's ",(0,o.kt)("inlineCode",{parentName:"p"},"key")," attribute. This allows Vue to re-render loop elements in an efficient way by only updating the content inside of the component rather than re-creating the component altogether."),(0,o.kt)("p",null,"By using ",(0,o.kt)("inlineCode",{parentName:"p"},"key")," you can provide a stable identity for each loop element so Vue can track insertions and deletions within the iterator. Below is an example of how to use ",(0,o.kt)("inlineCode",{parentName:"p"},"key"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"<template>\n  <ion-page>\n    <ion-content>\n      <ion-item v-for=\"item of items\" :key=\"item.id\">\n        <ion-label>{{ item.value }}</ion-label>\n      </ion-item>\n    </ion-content>\n  </ion-page>\n</template>\n\n<script>\n  import { IonContent, IonItem, IonLabel, IonPage } from '@ionic/vue';\n  import { defineComponent } from 'vue';\n\n  export default defineComponent({\n    components: {\n      IonContent,\n      IonItem,\n      IonLabel,\n      IonPage\n    },\n    setup() {\n      const items = ref([\n        { id: 0, value: 'Item 0' },\n        { id: 1, value: 'Item 1' },\n        ...\n      ]);\n\n      return { items }\n    }\n  });\n<\/script>\n")),(0,o.kt)("p",null,"In this example, we have an array of objects called ",(0,o.kt)("inlineCode",{parentName:"p"},"items"),". Each object contains a ",(0,o.kt)("inlineCode",{parentName:"p"},"value")," and an ",(0,o.kt)("inlineCode",{parentName:"p"},"id"),". Using the ",(0,o.kt)("inlineCode",{parentName:"p"},"key")," attribute, we pass the ",(0,o.kt)("inlineCode",{parentName:"p"},"item.id")," for each object. This ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," is used to provide a stable identity for each loop element."),(0,o.kt)("p",null,"For more information on how Vue manages state with ",(0,o.kt)("inlineCode",{parentName:"p"},"v-for")," see ",(0,o.kt)("a",{parentName:"p",href:"https://v3.vuejs.org/guide/list.html#maintaining-state"},"https://v3.vuejs.org/guide/list.html#maintaining-state")))}s.isMDXComponent=!0}}]);