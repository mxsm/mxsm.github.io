"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[8267],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>u});var i=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=i.createContext({}),s=function(e){var n=i.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=s(e.components);return i.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(t),u=o,h=m["".concat(c,".").concat(u)]||m[u]||d[u]||a;return t?i.createElement(h,r(r({ref:n},p),{},{components:t})):i.createElement(h,r({ref:n},p))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,r=new Array(a);r[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var s=2;s<a;s++)r[s]=t[s];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},81464:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var i=t(87462),o=(t(67294),t(3905));const a={sidebar_label:"Lifecycle"},r="Vue Lifecycle",l={unversionedId:"vue/lifecycle",id:"vue/lifecycle",isDocsHomePage:!1,title:"Vue Lifecycle",description:"This guide discusses how to use the Ionic Framework Lifecycle events in an Ionic Vue application.",source:"@site/docs/vue/lifecycle.md",sourceDirName:"vue",slug:"/vue/lifecycle",permalink:"/cn/docs/vue/lifecycle",editUrl:"https://crowdin.com/project/ionic-docs",tags:[],version:"current",frontMatter:{sidebar_label:"Lifecycle"},sidebar:"docs",previous:{title:"Distribute",permalink:"/cn/docs/vue/your-first-app/distribute"},next:{title:"Navigation/Routing",permalink:"/cn/docs/vue/navigation"}},c=[{value:"Ionic Framework Lifecycle Methods",id:"ionic-framework-lifecycle-methods",children:[{value:"Composition API Hooks",id:"composition-api-hooks",children:[],level:3}],level:2},{value:"How Ionic Framework Handles the Life of a Page",id:"how-ionic-framework-handles-the-life-of-a-page",children:[],level:2},{value:"Guidance for Each Lifecycle Method",id:"guidance-for-each-lifecycle-method",children:[],level:2}],s={toc:c};function p(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,i.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"vue-lifecycle"},"Vue Lifecycle"),(0,o.kt)("p",null,"This guide discusses how to use the Ionic Framework Lifecycle events in an Ionic Vue application."),(0,o.kt)("h2",{id:"ionic-framework-lifecycle-methods"},"Ionic Framework Lifecycle Methods"),(0,o.kt)("p",null,"Ionic Framework provides a few lifecycle methods that you can use in your apps:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Event Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"ionViewWillEnter")),(0,o.kt)("td",{parentName:"tr",align:null},"Fired when the component routing to is about to animate into view.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"ionViewDidEnter")),(0,o.kt)("td",{parentName:"tr",align:null},"Fired when the component routing to has finished animating.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"ionViewWillLeave")),(0,o.kt)("td",{parentName:"tr",align:null},"Fired when the component routing from is about to animate.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"ionViewDidLeave")),(0,o.kt)("td",{parentName:"tr",align:null},"Fired when the component routing to has finished animating.")))),(0,o.kt)("p",null,"The lifecycles are defined the same way Vue lifecycle methods are - as functions at the root of your Vue component:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { IonPage } from '@ionic/vue';\nimport { defineComponent } from 'vue';\n\nexport default defineComponent({\n  name: 'Home',\n  ionViewDidEnter() {\n    console.log('Home page did enter');\n  },\n  ionViewDidLeave() {\n    console.log('Home page did leave');\n  },\n  ionViewWillEnter() {\n    console.log('Home page will enter');\n  },\n  ionViewWillLeave() {\n    console.log('Home page will leave');\n  },\n  components: {\n    IonPage,\n  },\n});\n")),(0,o.kt)("h3",{id:"composition-api-hooks"},"Composition API Hooks"),(0,o.kt)("p",null,"These lifecycles can also be expressed using Vue 3's Composition API:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { IonPage, onIonViewWillEnter, onIonViewDidEnter, onIonViewWillLeave, onIonViewDidLeave } from '@ionic/vue';\nimport { defineComponent } from 'vue';\n\nexport default defineComponent({\n  name: 'Home',\n  components: {\n    IonPage,\n  },\n  setup() {\n    onIonViewDidEnter(() => {\n      console.log('Home page did enter');\n    });\n\n    onIonViewDidLeave(() => {\n      console.log('Home page did leave');\n    });\n\n    onIonViewWillEnter(() => {\n      console.log('Home page will enter');\n    });\n\n    onIonViewWillLeave(() => {\n      console.log('Home page will leave');\n    });\n  },\n});\n")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Pages in your app need to be using the ",(0,o.kt)("inlineCode",{parentName:"p"},"IonPage")," component in order for lifecycle methods and hooks to fire properly."))),(0,o.kt)("h2",{id:"how-ionic-framework-handles-the-life-of-a-page"},"How Ionic Framework Handles the Life of a Page"),(0,o.kt)("p",null,"Ionic Framework has its router outlet, called ",(0,o.kt)("inlineCode",{parentName:"p"},"<ion-router-outlet>"),". This outlet extends Vue Router's ",(0,o.kt)("inlineCode",{parentName:"p"},"<router-view>")," with some additional functionality to enable better experiences for mobile devices."),(0,o.kt)("p",null,"When an app is wrapped in ",(0,o.kt)("inlineCode",{parentName:"p"},"<ion-router-outlet>"),", Ionic Framework treats navigation a bit differently. When you navigate to a new page, Ionic Framework will keep the old page in the existing DOM, but hide it from your view and transition the new page. The reason we do this is two-fold:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"We can maintain the state of the old page (data on the screen, scroll position, etc...)."),(0,o.kt)("li",{parentName:"ol"},"We can provide a smoother transition back to the page since it is already there and does not need to be created.")),(0,o.kt)("p",null,'Pages are only removed from the DOM when they are "popped", for instance, by pressing the back button in the UI or the browsers back button.'),(0,o.kt)("p",null,"Because of this special handling, certain Vue Router components such as ",(0,o.kt)("inlineCode",{parentName:"p"},"<keep-alive>"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"<transition>"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"<router-view>")," should not be used in Ionic Vue applications. Additionally, Vue Router's Scroll Behavior API is not needed here as each page's scroll position is preserved automatically."),(0,o.kt)("p",null,"All the lifecycle methods in Vue (",(0,o.kt)("inlineCode",{parentName:"p"},"mounted"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"beforeUnmount"),", etc..) are available for you to use as well. However, since Ionic Vue manages the lifetime of a page, certain events might not fire when you expect them to. For instance, ",(0,o.kt)("inlineCode",{parentName:"p"},"mounted")," fires the first time a page is displayed, but if you navigate away from the page Ionic Framework might keep the page around in the DOM, and a subsequent visit to the page might not call ",(0,o.kt)("inlineCode",{parentName:"p"},"mounted")," again. This scenario is the main reason the Ionic Framework lifecycle methods exist, to still give you a way to call logic when views enter and exit when the native framework's events might not fire."),(0,o.kt)("h2",{id:"guidance-for-each-lifecycle-method"},"Guidance for Each Lifecycle Method"),(0,o.kt)("p",null,"Below are some tips on use cases for each of the life cycle events."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ionViewWillEnter")," - Since ",(0,o.kt)("inlineCode",{parentName:"li"},"ionViewWillEnter")," is called every time the view is navigated to (regardless if initialized or not), it is a good method to load data from services."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ionViewDidEnter")," - If you see performance problems from using ",(0,o.kt)("inlineCode",{parentName:"li"},"ionViewWillEnter")," when loading data, you can do your data calls in ",(0,o.kt)("inlineCode",{parentName:"li"},"ionViewDidEnter")," instead. However, this event will not fire until after the page is visible to the user, so you might want to use either a loading indicator or a skeleton screen such as ",(0,o.kt)("a",{parentName:"li",href:"../api/skeleton-text"},"ion-skeleton-text"),", so content does not flash in un-naturally after the transition is complete."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ionViewWillLeave")," - Can be used for cleanup, like unsubscribing from data sources. Since ",(0,o.kt)("inlineCode",{parentName:"li"},"beforeUnmount")," might not fire when you navigate from the current page, put your cleanup code here if you do not want it active while the screen is not in view."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ionViewDidLeave")," - When this event fires, you know the new page has fully transitioned in, so any logic you might not normally do when the view is visible can go here.")))}p.isMDXComponent=!0}}]);