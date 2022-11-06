"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[42813],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>c});var o=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=o.createContext({}),p=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=p(e.components);return o.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},h=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=p(t),c=a,m=h["".concat(l,".").concat(c)]||h[c]||d[c]||i;return t?o.createElement(m,r(r({ref:n},u),{},{components:t})):o.createElement(m,r({ref:n},u))}));function c(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,r=new Array(i);r[0]=h;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var p=2;p<i;p++)r[p]=t[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}h.displayName="MDXCreateElement"},56882:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var o=t(87462),a=(t(67294),t(3905));const i={sidebar_label:"Navigation/Routing"},r="Vue Navigation",s={unversionedId:"vue/navigation",id:"version-v5/vue/navigation",isDocsHomePage:!1,title:"Vue Navigation",description:"This guide covers how routing works in an app built with Ionic and Vue.",source:"@site/versioned_docs/version-v5/vue/navigation.md",sourceDirName:"vue",slug:"/vue/navigation",permalink:"/docs/v5/vue/navigation",editUrl:"https://github.com/ionic-team/ionic-docs/edit/main/versioned_docs/version-v5/vue/navigation.md",tags:[],version:"v5",frontMatter:{sidebar_label:"Navigation/Routing"},sidebar:"version-v5/docs",previous:{title:"Lifecycle",permalink:"/docs/v5/vue/lifecycle"},next:{title:"Config",permalink:"/docs/v5/vue/config"}},l=[{value:"A Brief Note",id:"a-brief-note",children:[],level:2},{value:"A Simple Route",id:"a-simple-route",children:[],level:2},{value:"Handling Redirects",id:"handling-redirects",children:[],level:2},{value:"Navigating to Different Routes",id:"navigating-to-different-routes",children:[],level:2},{value:"Lazy Loading Routes",id:"lazy-loading-routes",children:[],level:2},{value:"Shared URLs versus Nested Routes",id:"shared-urls-versus-nested-routes",children:[{value:"Shared URLs",id:"shared-urls",children:[],level:3},{value:"Nested Routes",id:"nested-routes",children:[],level:3},{value:"Which one should I choose?",id:"which-one-should-i-choose",children:[],level:3}],level:2},{value:"Working with Tabs",id:"working-with-tabs",children:[{value:"Child Routes within Tabs",id:"child-routes-within-tabs",children:[],level:3}],level:2},{value:"IonRouterOutlet",id:"ionrouteroutlet",children:[],level:2},{value:"IonPage",id:"ionpage",children:[],level:2},{value:"Accessing the IonRouter Instance",id:"accessing-the-ionrouter-instance",children:[],level:2},{value:"URL Parameters",id:"url-parameters",children:[],level:2},{value:"Router History",id:"router-history",children:[],level:2},{value:"More Information",id:"more-information",children:[],level:2}],p={toc:l};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"vue-navigation"},"Vue Navigation"),(0,a.kt)("p",null,"This guide covers how routing works in an app built with Ionic and Vue."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"IonRouterOutlet")," component uses the popular ",(0,a.kt)("a",{parentName:"p",href:"https://router.vuejs.org/"},"Vue Router")," library under the hood. With Ionic and Vue Router, you can create multi-page apps with rich page transitions."),(0,a.kt)("p",null,"Everything you know about routing using Vue Router carries over into Ionic Vue. Let's take a look at the basics of an Ionic Vue app and how routing works with it."),(0,a.kt)("h2",{id:"a-brief-note"},"A Brief Note"),(0,a.kt)("p",null,"While reading this guide, you may notice that most of these concepts are very similar to the concepts found in Vue Router without Ionic Framework. You observation would be correct! Ionic Vue leverages the best parts of Vue Router to make the transition to building apps with Ionic Framework as seamless as possible. As a result, we recommend relying on Vue Router features as much as possible rather than trying to build your own routing solutions."),(0,a.kt)("h2",{id:"a-simple-route"},"A Simple Route"),(0,a.kt)("p",null,'Here is a sample routing configuration that defines a single route to the "/home" URL. When you visit "/home", the route renders the ',(0,a.kt)("inlineCode",{parentName:"p"},"HomePage")," component."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"router/index.ts")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { createRouter, createWebHistory } from '@ionic/vue-router';\nimport { RouteRecordRaw } from 'vue-router';\nimport HomePage from '@/views/Home.vue';\n\nconst routes: Array<RouteRecordRaw> = [\n  {\n    path: '/',\n    name: 'Home',\n    component: HomePage,\n  },\n];\n\nconst router = createRouter({\n  history: createWebHistory(process.env.BASE_URL),\n  routes,\n});\n\nexport default router;\n")),(0,a.kt)("p",null,"On the app's initial load, the app will render the ",(0,a.kt)("inlineCode",{parentName:"p"},"HomePage")," component as that is what is configured here."),(0,a.kt)("h2",{id:"handling-redirects"},"Handling Redirects"),(0,a.kt)("p",null,"What if we wanted to land a different path on our initial load? For this, we can use router redirects. Redirects work the same way that a typical route object does, but just includes some different keys:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const routes: Array<RouteRecordRaw> = [\n  {\n    path: '/',\n    redirect: '/home',\n  },\n  {\n    path: '/home',\n    name: 'Home',\n    component: HomePage,\n  },\n];\n")),(0,a.kt)("p",null,"In our redirect, we look for the index path of our app. Then if we load that, we redirect to the ",(0,a.kt)("inlineCode",{parentName:"p"},"home")," route."),(0,a.kt)("h2",{id:"navigating-to-different-routes"},"Navigating to Different Routes"),(0,a.kt)("p",null,"This is all great, but how does one actually navigate to a route? For this, we can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"router-link")," property. Let's create a new routing setup:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const routes: Array<RouteRecordRaw> = [\n  {\n    path: '/',\n    redirect: '/home',\n  },\n  {\n    path: '/home',\n    name: 'Home',\n    component: HomePage,\n  },\n  {\n    path: '/detail',\n    name: 'Detail',\n    component: DetailPage,\n  },\n];\n")),(0,a.kt)("p",null,"Say we start on the ",(0,a.kt)("inlineCode",{parentName:"p"},"home")," route, and we want to add a button that takes us to the ",(0,a.kt)("inlineCode",{parentName:"p"},"detail")," route. We can do this using the following HTML to navigate to the ",(0,a.kt)("inlineCode",{parentName:"p"},"detail")," route:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<ion-button router-link="/detail">Go to detail</ion-button>\n')),(0,a.kt)("p",null,"We can also programmatically navigate in our app by using the router API:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"<template>\n  <ion-page>\n    <ion-content>\n      <ion-button @click=\"() => router.push('/detail')\">Go to detail</ion-button>\n    </ion-content>\n  </ion-page>\n</template>\n\n<script lang=\"ts\">\n  import { IonButton, IonContent, IonPage } from '@ionic/vue';\n  import { defineComponent } from 'vue';\n  import { useRouter } from 'vue-router';\n\n  export default defineComponent({\n    name: 'HomePage',\n    components: {\n      IonButton,\n      IonContent,\n      IonPage,\n    },\n    setup() {\n      const router = useRouter();\n      return { router };\n    },\n  });\n<\/script>\n")),(0,a.kt)("p",null,"Both options provide the same navigation mechanism, just fitting different use cases."),(0,a.kt)("h2",{id:"lazy-loading-routes"},"Lazy Loading Routes"),(0,a.kt)("p",null,"The current way our routes are setup makes it so they are included in the same initial chunk when loading the app, which is not always ideal. Instead, we can set up our routes so that components are loaded as they are needed:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const routes: Array<RouteRecordRaw> = [\n  {\n    path: '/',\n    redirect: '/home',\n  },\n  {\n    path: '/home',\n    name: 'Home',\n    component: HomePage,\n  },\n  {\n    path: '/detail',\n    name: 'Detail',\n    component: () => import('@/views/DetailPage.vue'),\n  },\n];\n")),(0,a.kt)("p",null,"Here, we have the same setup as before only this time ",(0,a.kt)("inlineCode",{parentName:"p"},"DetailPage")," has been replaced with an import call. This will result in the ",(0,a.kt)("inlineCode",{parentName:"p"},"DetailPage")," component no longer being part of the chunk that is requested on application load."),(0,a.kt)("h2",{id:"shared-urls-versus-nested-routes"},"Shared URLs versus Nested Routes"),(0,a.kt)("p",null,"A common point of confusion when setting up routing is deciding between shared URLs or nested routes. This part of the guide will explain both and help you decide which one to use."),(0,a.kt)("h3",{id:"shared-urls"},"Shared URLs"),(0,a.kt)("p",null,"Shared URLs is a route configuration where routes have pieces of the URL in common. The following is an example of a shared URL configuration:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const routes: Array<RouteRecordRaw> = [\n  {\n    path: '/dashboard',\n    component: DashboardMainPage,\n  },\n  {\n    path: '/dashboard/stats',\n    component: DashboardStatsPage,\n  },\n];\n")),(0,a.kt)("p",null,'The above routes are considered "shared" because they reuse the ',(0,a.kt)("inlineCode",{parentName:"p"},"dashboard")," piece of the URL."),(0,a.kt)("h3",{id:"nested-routes"},"Nested Routes"),(0,a.kt)("p",null,"Nested Routes is a route configuration where routes are listed as children of other routes. The following is an example of a nested route configuration:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const routes: Array<RouteRecordRaw> = [\n  {\n    path: '/dashboard/:id',\n    component: DashboardRouterOutlet,\n    children: [\n      {\n        path: '',\n        component: DashboardMainPage,\n      },\n      {\n        path: 'stats',\n        component: DashboardStatsPage,\n      },\n    ],\n  },\n];\n")),(0,a.kt)("p",null,"The above routes are nested because they are in the ",(0,a.kt)("inlineCode",{parentName:"p"},"children")," array of the parent route. Notice that the parent route renders the ",(0,a.kt)("inlineCode",{parentName:"p"},"DashboardRouterOutlet")," component. When you nest routes, you need to render another instance of ",(0,a.kt)("inlineCode",{parentName:"p"},"ion-router-outlet"),"."),(0,a.kt)("h3",{id:"which-one-should-i-choose"},"Which one should I choose?"),(0,a.kt)("p",null,"Shared URLs are great when you want to transition from page A to page B while preserving the relationship between the two pages in the URL. In our previous example, a button on the ",(0,a.kt)("inlineCode",{parentName:"p"},"/dashboard")," page could transition to the ",(0,a.kt)("inlineCode",{parentName:"p"},"/dashboard/stats")," page. The relationship between the two pages is preserved because of a) the page transition and b) the url."),(0,a.kt)("p",null,"Nested routes are mostly useful when you need to render content in outlet A while also rendering sub-content inside of a nested outlet B. The most common use case you will run into is tabs. When you load up a tabs Ionic starter application, you will see ",(0,a.kt)("inlineCode",{parentName:"p"},"ion-tab-bar")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"ion-tabs")," components rendered in the first ",(0,a.kt)("inlineCode",{parentName:"p"},"ion-router-outlet"),". The ",(0,a.kt)("inlineCode",{parentName:"p"},"ion-tabs")," component renders another ",(0,a.kt)("inlineCode",{parentName:"p"},"ion-router-outlet")," which is responsible for rendering the contents of each tab."),(0,a.kt)("p",null,"There are very few use cases in which nested routes make sense in mobile applications. When in doubt, use the shared URL route configuration. We strongly caution against using nested routing in contexts other than tabs as it can quickly make navigating your app confusing."),(0,a.kt)("h2",{id:"working-with-tabs"},"Working with Tabs"),(0,a.kt)("p",null,"When working with tabs, Ionic Vue needs a way to know which view belongs to which tab. The ",(0,a.kt)("inlineCode",{parentName:"p"},"IonTabs")," component comes in handy here, but let's look at what the routing setup for this looks like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const routes: Array<RouteRecordRaw> = [\n  {\n    path: '/',\n    redirect: '/tabs/tab1',\n  },\n  {\n    path: '/tabs/',\n    component: Tabs,\n    children: [\n      {\n        path: '',\n        redirect: 'tab1',\n      },\n      {\n        path: 'tab1',\n        component: () => import('@/views/Tab1.vue'),\n      },\n      {\n        path: 'tab2',\n        component: () => import('@/views/Tab2.vue'),\n      },\n      {\n        path: 'tab3',\n        component: () => import('@/views/Tab3.vue'),\n      },\n    ],\n  },\n];\n")),(0,a.kt)("p",null,"Here, our ",(0,a.kt)("inlineCode",{parentName:"p"},"tabs")," path loads a ",(0,a.kt)("inlineCode",{parentName:"p"},"Tabs")," component. We provide each tab as a route object inside of the ",(0,a.kt)("inlineCode",{parentName:"p"},"children")," array. In this example, we call the path ",(0,a.kt)("inlineCode",{parentName:"p"},"tabs"),", but this can be customized."),(0,a.kt)("p",null,"Let's start by taking a look at our ",(0,a.kt)("inlineCode",{parentName:"p"},"Tabs")," component:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<template>\n  <ion-page>\n    <ion-content>\n      <ion-tabs>\n        <ion-router-outlet></ion-router-outlet>\n        <ion-tab-bar slot="bottom">\n          <ion-tab-button tab="tab1" href="/tabs/tab1">\n            <ion-icon :icon="triangle" />\n            <ion-label>Tab 1</ion-label>\n          </ion-tab-button>\n\n          <ion-tab-button tab="tab2" href="/tabs/tab2">\n            <ion-icon :icon="ellipse" />\n            <ion-label>Tab 2</ion-label>\n          </ion-tab-button>\n\n          <ion-tab-button tab="tab3" href="/tabs/tab3">\n            <ion-icon :icon="square" />\n            <ion-label>Tab 3</ion-label>\n          </ion-tab-button>\n        </ion-tab-bar>\n      </ion-tabs>\n    </ion-content>\n  </ion-page>\n</template>\n\n<script lang="ts">\n  import {\n    IonTabBar,\n    IonTabButton,\n    IonTabs,\n    IonContent,\n    IonLabel,\n    IonIcon,\n    IonPage,\n    IonRouterOutlet,\n  } from \'@ionic/vue\';\n  import { ellipse, square, triangle } from \'ionicons/icons\';\n\n  export default {\n    name: \'Tabs\',\n    components: {\n      IonContent,\n      IonLabel,\n      IonTabs,\n      IonTabBar,\n      IonTabButton,\n      IonIcon,\n      IonPage,\n      IonRouterOutlet,\n    },\n    setup() {\n      return {\n        ellipse,\n        square,\n        triangle,\n      };\n    },\n  };\n<\/script>\n')),(0,a.kt)("p",null,"If you have worked with Ionic Framework before, this should feel familiar. We create an ",(0,a.kt)("inlineCode",{parentName:"p"},"ion-tabs")," component and provide an ",(0,a.kt)("inlineCode",{parentName:"p"},"ion-tab-bar"),". The ",(0,a.kt)("inlineCode",{parentName:"p"},"ion-tab-bar")," provides ",(0,a.kt)("inlineCode",{parentName:"p"},"ion-tab-button")," components, each with a ",(0,a.kt)("inlineCode",{parentName:"p"},"tab")," property that is associated with its corresponding tab in the router config. We also provide an ",(0,a.kt)("inlineCode",{parentName:"p"},"ion-router-outlet")," to give ",(0,a.kt)("inlineCode",{parentName:"p"},"ion-tabs")," an outlet to render the different tab views in."),(0,a.kt)("h3",{id:"child-routes-within-tabs"},"Child Routes within Tabs"),(0,a.kt)("p",null,"When adding additional routes to tabs you should write them as sibling routes with the parent tab as the path prefix. The example below defines the ",(0,a.kt)("inlineCode",{parentName:"p"},"/tabs/tab1/view")," route as a sibling of the ",(0,a.kt)("inlineCode",{parentName:"p"},"/tabs/tab1")," route. Since this new route has the ",(0,a.kt)("inlineCode",{parentName:"p"},"tab1")," prefix, it will be rendered inside of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Tabs")," component, and Tab 1 will still be selected in the ",(0,a.kt)("inlineCode",{parentName:"p"},"ion-tab-bar"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const routes: Array<RouteRecordRaw> = [\n  {\n    path: '/',\n    redirect: '/tabs/tab1',\n  },\n  {\n    path: '/tabs/',\n    component: Tabs,\n    children: [\n      {\n        path: '',\n        redirect: 'tab1',\n      },\n      {\n        path: 'tab1',\n        component: () => import('@/views/Tab1.vue'),\n      },\n      {\n        path: 'tab1/view',\n        component: () => import('@/views/Tab1View.vue'),\n      },\n      {\n        path: 'tab2',\n        component: () => import('@/views/Tab2.vue'),\n      },\n      {\n        path: 'tab3',\n        component: () => import('@/views/Tab3.vue'),\n      },\n    ],\n  },\n];\n")),(0,a.kt)("h2",{id:"ionrouteroutlet"},"IonRouterOutlet"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"IonRouterOutlet")," component provides a container to render your views in. It is similar to the ",(0,a.kt)("inlineCode",{parentName:"p"},"RouterView")," component found in other Vue applications except that ",(0,a.kt)("inlineCode",{parentName:"p"},"IonRouterOutlet")," can render multiple pages in the DOM in the same outlet. When a component is rendered in ",(0,a.kt)("inlineCode",{parentName:"p"},"IonRouterOutlet"),' we consider this to be an Ionic Framework "page". The router outlet container controls the transition animation between the pages as well as controls when a page is created and destroyed. This helps maintain the state between the views when switching back and forth between them.'),(0,a.kt)("p",null,"Nothing should be provided inside of ",(0,a.kt)("inlineCode",{parentName:"p"},"IonRouterOutlet")," when setting it up in your template. While ",(0,a.kt)("inlineCode",{parentName:"p"},"IonRouterOutlet")," can be nested in child components, we caution against it as it typically makes navigation in apps confusing. See ",(0,a.kt)("a",{parentName:"p",href:"#shared-urls-versus-nested-routes"},"Shared URLs versus Nested Routes")," for more information."),(0,a.kt)("h2",{id:"ionpage"},"IonPage"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"IonPage")," component wraps each view in an Ionic Vue app and allows page transitions and stack navigation to work properly. Each view that is navigated to using the router must include an ",(0,a.kt)("inlineCode",{parentName:"p"},"IonPage")," component."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"<template>\n  <ion-page>\n    <ion-header>\n      <ion-toolbar>\n        <ion-title>Home</ion-title>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content class=\"ion-padding\">Hello World</ion-content>\n  </ion-page>\n</template>\n\n<script lang=\"ts\">\n  import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';\n  import { defineComponent } from 'vue';\n\n  export default defineComponent({\n    components: {\n      IonContent,\n      IonHeader,\n      IonPage,\n      IonTitle,\n      IonToolbar,\n    },\n  });\n<\/script>\n")),(0,a.kt)("p",null,"Components presented via ",(0,a.kt)("inlineCode",{parentName:"p"},"IonModal")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"IonPopover")," do not typically need an ",(0,a.kt)("inlineCode",{parentName:"p"},"IonPage")," component unless you need a wrapper element. In that case, we recommend using ",(0,a.kt)("inlineCode",{parentName:"p"},"IonPage")," so that the component dimensions are still computed properly."),(0,a.kt)("h2",{id:"accessing-the-ionrouter-instance"},"Accessing the IonRouter Instance"),(0,a.kt)("p",null,"There may be a few use cases where you need to get access to the ",(0,a.kt)("inlineCode",{parentName:"p"},"IonRouter")," instance from within your Vue application. For example, you might want to know if you are at the root page of the application when a user presses the hardware back button on Android. For use cases like these, you can inject the ",(0,a.kt)("inlineCode",{parentName:"p"},"IonRouter")," dependency into your component:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useIonRouter } from '@ionic/vue';\n\n...\n\nexport default {\n  setup() {\n    const ionRouter = useIonRouter();\n    if (ionRouter.canGoBack()) {\n      // Perform some action here\n    }\n  }\n}\n")),(0,a.kt)("h2",{id:"url-parameters"},"URL Parameters"),(0,a.kt)("p",null,"Let's expand upon our original routing example to show how we can use URL parameters:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const routes: Array<RouteRecordRaw> = [\n  {\n    path: '/',\n    redirect: '/home',\n  },\n  {\n    path: '/home',\n    name: 'Home',\n    component: HomePage,\n  },\n  {\n    path: '/detail/:id',\n    name: 'Detail',\n    component: DetailPage,\n  },\n];\n")),(0,a.kt)("p",null,"Notice that we have now added ",(0,a.kt)("inlineCode",{parentName:"p"},":id")," to the end of our ",(0,a.kt)("inlineCode",{parentName:"p"},"detail")," path string. URL parameters are dynamic portions of our route paths. When the user navigates to a URL such as ",(0,a.kt)("inlineCode",{parentName:"p"},"/details/1"),' the "1" is saved to a parameter named "id" which can be accessed in the component when the route renders.'),(0,a.kt)("p",null,"Let's look at how to use it in our component:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"<template>\n  <ion-page>\n    <ion-header>\n      <ion-toolbar>\n        <ion-title>Details</ion-title>\n      </ion-toolbar>\n    </ion-header>\n\n    <ion-content> Detail ID: {{ id }} </ion-content>\n  </ion-page>\n</template>\n\n<script lang=\"ts\">\n  import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';\n  import { defineComponent } from 'vue';\n  import { useRoute } from 'vue-router';\n\n  export default defineComponent({\n    name: 'Detail',\n    components: {\n      IonContent,\n      IonHeader,\n      IonPage,\n      IonTitle,\n      IonToolbar,\n    },\n    setup() {\n      const route = useRoute();\n      const { id } = route.params;\n      return { id };\n    },\n  });\n<\/script>\n")),(0,a.kt)("p",null,"Our ",(0,a.kt)("inlineCode",{parentName:"p"},"route")," variable contains an instance of the current route. It also contains any parameters we have passed in. We can obtain the ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," parameter from here and display it on the screen."),(0,a.kt)("h2",{id:"router-history"},"Router History"),(0,a.kt)("p",null,"Vue Router ships with a configurable history mode. Let's look at the different options and why you might want to use each one."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"createWebHistory"),": This option creates an HTML5 history. It leverages the History API to achieve URL navigation without a page reload. This is the most common history mode for single page applications. When in doubt, use ",(0,a.kt)("inlineCode",{parentName:"p"},"createWebHistory"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"createWebHashHistory"),": This option adds a hash (",(0,a.kt)("inlineCode",{parentName:"p"},"#"),") to your URL. This is useful for web applications with no host or when you do not have full control over the server routes. Search engines sometimes ignore hash fragments, so you should use ",(0,a.kt)("inlineCode",{parentName:"p"},"createWebHistory")," instead if SEO is important for your application.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"createMemoryHistory"),": This option creates an in-memory based history. This is mainly used to handle server-side rendering (SSR)."))),(0,a.kt)("h2",{id:"more-information"},"More Information"),(0,a.kt)("p",null,"For more info on routing in Vue using Vue Router, check out their docs at ",(0,a.kt)("a",{parentName:"p",href:"http://router.vuejs.org/"},"http://router.vuejs.org/"),"."))}u.isMDXComponent=!0}}]);