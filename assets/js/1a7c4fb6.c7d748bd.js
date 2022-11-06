"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[88557],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),d=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=d(n),c=r,k=m["".concat(u,".").concat(c)]||m[c]||s[c]||o;return n?a.createElement(k,i(i({ref:t},p),{},{components:n})):a.createElement(k,i({ref:t},p))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},58215:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(67294);const r=function(e){let{children:t,hidden:n,className:r}=e;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},26396:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(87462),r=n(67294),o=n(72389),i=n(79443);const l=function(){const e=(0,r.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var u=n(89521),d=n(86010);const p="tabItem_vU9c";function s(e){var t,n;const{lazy:a,block:o,defaultValue:i,values:s,groupId:m,className:c}=e,k=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=s??k.map((e=>{let{props:{value:t,label:n}}=e;return{value:t,label:n}})),g=(0,u.lx)(h,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===i?i:i??(null==(t=k.find((e=>e.props.default)))?void 0:t.props.value)??(null==(n=k[0])?void 0:n.props.value);if(null!==b&&!h.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:v}=l(),[f,y]=(0,r.useState)(b),w=[],{blockElementScrollPositionUntilNextRender:C}=(0,u.o5)();if(null!=m){const e=N[m];null!=e&&e!==f&&h.some((t=>t.value===e))&&y(e)}const O=e=>{const t=e.currentTarget,n=w.indexOf(t),a=h[n].value;a!==f&&(C(t),y(a),null!=m&&v(m,a))},E=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=w.indexOf(e.currentTarget)+1;n=w[t]||w[0];break}case"ArrowLeft":{const t=w.indexOf(e.currentTarget)-1;n=w[t]||w[w.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,d.Z)("tabs",{"tabs--block":o},c)},h.map((e=>{let{value:t,label:n}=e;return r.createElement("li",{role:"tab",tabIndex:f===t?0:-1,"aria-selected":f===t,className:(0,d.Z)("tabs__item",p,{"tabs__item--active":f===t}),key:t,ref:e=>w.push(e),onKeyDown:E,onFocus:O,onClick:O},n??t)}))),a?(0,r.cloneElement)(k.filter((e=>e.props.value===f))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},k.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==f})))))}function m(e){const t=(0,o.Z)();return r.createElement(s,(0,a.Z)({key:String(t)},e))}},8085:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));n(26396),n(58215);const o={sidebar_label:"ion-router-outlet"},i="ion-router-outlet",l={unversionedId:"api/router-outlet",id:"version-v5/api/router-outlet",isDocsHomePage:!1,title:"ion-router-outlet",description:"Router outlet is a component used in routing within an Angular or Vue app. It behaves in a similar way to Angular's built-in router outlet component and Vue's router view component, but contains the logic for providing a stacked navigation, and animating views in and out.",source:"@site/versioned_docs/version-v5/api/router-outlet.md",sourceDirName:"api",slug:"/api/router-outlet",permalink:"/docs/v5/api/router-outlet",editUrl:"https://github.com/ionic-team/ionic-docs/tree/main/docs/api/router-outlet.md",tags:[],version:"v5",frontMatter:{sidebar_label:"ion-router-outlet"},sidebar:"version-v5/api",previous:{title:"ion-router-link",permalink:"/docs/v5/api/router-link"},next:{title:"ion-route",permalink:"/docs/v5/api/route"}},u=[{value:"Life Cycle Hooks",id:"life-cycle-hooks",children:[],level:2},{value:"Properties",id:"properties",children:[{value:"animated",id:"animated",children:[],level:3},{value:"animation",id:"animation",children:[],level:3},{value:"mode",id:"mode",children:[],level:3}],level:2}],d={toc:u};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"ion-router-outlet"},"ion-router-outlet"),(0,r.kt)("p",null,"Router outlet is a component used in routing within an Angular or Vue app. It behaves in a similar way to Angular's built-in router outlet component and Vue's router view component, but contains the logic for providing a stacked navigation, and animating views in and out."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: this component should only be used with Angular and Vue projects. For vanilla or Stencil JavaScript projects, use ",(0,r.kt)("a",{parentName:"p",href:"/docs/v5/api/router"},(0,r.kt)("inlineCode",{parentName:"a"},"ion-router"))," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/v5/api/route"},(0,r.kt)("inlineCode",{parentName:"a"},"ion-route")),".")),(0,r.kt)("p",null,"Although router outlet has methods for navigating around, it's recommended to use the navigation methods in your framework's router."),(0,r.kt)("h2",{id:"life-cycle-hooks"},"Life Cycle Hooks"),(0,r.kt)("p",null,"Routes rendered in a Router Outlet have access to specific Ionic events that are wired up to animations"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Event Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Trigger"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ionViewWillEnter")),(0,r.kt)("td",{parentName:"tr",align:null},"Fired when the component routing to is about to animate into view.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ionViewDidEnter")),(0,r.kt)("td",{parentName:"tr",align:null},"Fired when the component routing to has finished animating.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ionViewWillLeave")),(0,r.kt)("td",{parentName:"tr",align:null},"Fired when the component routing from is about to animate.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ionViewDidLeave")),(0,r.kt)("td",{parentName:"tr",align:null},"Fired when the component routing to has finished animating.")))),(0,r.kt)("p",null,"These event tie into Ionic's animation system and can be used to coordinate parts of your app when a Components is done with its animation. These events are not a replacement for your framework's own event system, but an addition."),(0,r.kt)("p",null,"For handling Router Guards, the older ",(0,r.kt)("inlineCode",{parentName:"p"},"ionViewCanEnter")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"ionViewCanLeave")," have been replaced with their framework specific equivalent. For Angular, there are ",(0,r.kt)("a",{parentName:"p",href:"https://angular.io/guide/router#milestone-5-route-guards"},"Router Guards"),"."),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"animated"},"animated"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Description")),(0,r.kt)("td",{parentName:"tr",align:null},"If ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),", the router-outlet should animate the transition of components.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Attribute")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"animated"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Type")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Default")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true"))))),(0,r.kt)("h3",{id:"animation"},"animation"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Description")),(0,r.kt)("td",{parentName:"tr",align:null},"By default ",(0,r.kt)("inlineCode",{parentName:"td"},"ion-nav")," animates transition between pages based in the mode (ios or material design).",(0,r.kt)("br",null),"However, this property allows to create custom transition using ",(0,r.kt)("inlineCode",{parentName:"td"},"AnimateBuilder")," functions.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Attribute")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Type")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"((baseEl: any, opts?: any) => Animation) \\| undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Default")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,r.kt)("h3",{id:"mode"},"mode"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Description")),(0,r.kt)("td",{parentName:"tr",align:null},"The mode determines which platform styles to use.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Attribute")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"mode"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Type")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"ios" \\| "md"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Default")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"getIonMode(this)"))))))}p.isMDXComponent=!0}}]);