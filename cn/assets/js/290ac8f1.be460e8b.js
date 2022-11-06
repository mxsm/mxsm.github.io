"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[70181],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),d=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=d(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=d(r),m=a,h=p["".concat(u,".").concat(m)]||p[m]||c[m]||i;return r?n.createElement(h,o(o({ref:t},s),{},{components:r})):n.createElement(h,o({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=r[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},58215:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(67294);const a=function(e){let{children:t,hidden:r,className:a}=e;return n.createElement("div",{role:"tabpanel",hidden:r,className:a},t)}},26396:(e,t,r)=>{r.d(t,{Z:()=>p});var n=r(87462),a=r(67294),i=r(72389),o=r(79443);const l=function(){const e=(0,a.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var u=r(89521),d=r(86010);const s="tabItem_vU9c";function c(e){var t,r;const{lazy:n,block:i,defaultValue:o,values:c,groupId:p,className:m}=e,h=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=c??h.map((e=>{let{props:{value:t,label:r}}=e;return{value:t,label:r}})),f=(0,u.lx)(k,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===o?o:o??(null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)??(null==(r=h[0])?void 0:r.props.value);if(null!==b&&!k.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:v}=l(),[N,y]=(0,a.useState)(b),w=[],{blockElementScrollPositionUntilNextRender:C}=(0,u.o5)();if(null!=p){const e=g[p];null!=e&&e!==N&&k.some((t=>t.value===e))&&y(e)}const R=e=>{const t=e.currentTarget,r=w.indexOf(t),n=k[r].value;n!==N&&(C(t),y(n),null!=p&&v(p,n))},O=e=>{var t;let r=null;switch(e.key){case"ArrowRight":{const t=w.indexOf(e.currentTarget)+1;r=w[t]||w[0];break}case"ArrowLeft":{const t=w.indexOf(e.currentTarget)-1;r=w[t]||w[w.length-1];break}}null==(t=r)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,d.Z)("tabs",{"tabs--block":i},m)},k.map((e=>{let{value:t,label:r}=e;return a.createElement("li",{role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,className:(0,d.Z)("tabs__item",s,{"tabs__item--active":N===t}),key:t,ref:e=>w.push(e),onKeyDown:O,onFocus:R,onClick:R},r??t)}))),n?(0,a.cloneElement)(h.filter((e=>e.props.value===N))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},h.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function p(e){const t=(0,i.Z)();return a.createElement(c,(0,n.Z)({key:String(t)},e))}},10566:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));r(26396),r(58215);const i={sidebar_label:"ion-route-redirect"},o="ion-route-redirect",l={unversionedId:"api/route-redirect",id:"version-v5/api/route-redirect",isDocsHomePage:!1,title:"ion-route-redirect",description:"A route redirect can only be used with an ion-router as a direct child of it.",source:"@site/versioned_docs/version-v5/api/route-redirect.md",sourceDirName:"api",slug:"/api/route-redirect",permalink:"/cn/docs/v5/api/route-redirect",editUrl:"https://crowdin.com/project/ionic-docs",tags:[],version:"v5",frontMatter:{sidebar_label:"ion-route-redirect"},sidebar:"version-v5/api",previous:{title:"ion-route",permalink:"/cn/docs/v5/api/route"},next:{title:"ion-searchbar",permalink:"/cn/docs/v5/api/searchbar"}},u=[{value:"Multiple Route Redirects",id:"multiple-route-redirects",children:[],level:2},{value:"Usage",id:"usage",children:[{value:"Route Redirects as Guards",id:"route-redirects-as-guards",children:[],level:3}],level:2},{value:"Properties",id:"properties",children:[{value:"from",id:"from",children:[],level:3},{value:"to",id:"to",children:[],level:3}],level:2},{value:"Events",id:"events",children:[],level:2}],d={toc:u};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ion-route-redirect"},"ion-route-redirect"),(0,a.kt)("p",null,"A route redirect can only be used with an ",(0,a.kt)("inlineCode",{parentName:"p"},"ion-router")," as a direct child of it."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note: this component should only be used with vanilla and Stencil JavaScript projects. For Angular projects, use ",(0,a.kt)("a",{parentName:"p",href:"/cn/docs/v5/api/router-outlet"},(0,a.kt)("inlineCode",{parentName:"a"},"ion-router-outlet"))," and the Angular router.")),(0,a.kt)("p",null,"The route redirect has two configurable properties:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"from")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"to"))),(0,a.kt)("p",null,'It redirects "from" a URL "to" another URL. When the defined ',(0,a.kt)("inlineCode",{parentName:"p"},"ion-route-redirect")," rule matches, the router will redirect from the path specified in the ",(0,a.kt)("inlineCode",{parentName:"p"},"from")," property to the path in the ",(0,a.kt)("inlineCode",{parentName:"p"},"to")," property. In order for a redirect to occur the ",(0,a.kt)("inlineCode",{parentName:"p"},"from")," path needs to be an exact match to the navigated URL."),(0,a.kt)("h2",{id:"multiple-route-redirects"},"Multiple Route Redirects"),(0,a.kt)("p",null,"An arbitrary number of redirect routes can be defined inside an ",(0,a.kt)("inlineCode",{parentName:"p"},"ion-router"),", but only one can match."),(0,a.kt)("p",null,"A route redirect will never call another redirect after its own redirect, since this could lead to infinite loops."),(0,a.kt)("p",null,"Take the following two redirects:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<ion-router>\n  <ion-route-redirect from="/admin" to="/login"></ion-route-redirect>\n  <ion-route-redirect from="/login" to="/admin"></ion-route-redirect>\n</ion-router>\n')),(0,a.kt)("p",null,"If the user navigates to ",(0,a.kt)("inlineCode",{parentName:"p"},"/admin")," the router will redirect to ",(0,a.kt)("inlineCode",{parentName:"p"},"/login")," and stop there. It will never evaluate more than one redirect."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- Redirects when the user navigates to `/admin` but\nwill NOT redirect if the user navigates to `/admin/posts` --\x3e\n<ion-route-redirect from="/admin" to="/login"></ion-route-redirect>\n\n\x3c!-- By adding the wilcard character (*), the redirect will match\nany subpath of admin --\x3e\n<ion-route-redirect from="/admin/*" to="/login"></ion-route-redirect>\n')),(0,a.kt)("h3",{id:"route-redirects-as-guards"},"Route Redirects as Guards"),(0,a.kt)("p",null,"Redirection routes can work as guards to prevent users from navigating to certain areas of an application based on a given condition, such as if the user is authenticated or not."),(0,a.kt)("p",null,"A route redirect can be added and removed dynamically to redirect (or guard) some routes from being accessed. In the following example, all urls ",(0,a.kt)("inlineCode",{parentName:"p"},"*")," will be redirected to the ",(0,a.kt)("inlineCode",{parentName:"p"},"/login")," url if ",(0,a.kt)("inlineCode",{parentName:"p"},"isLoggedIn")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const isLoggedIn = false;\n\nconst router = document.querySelector('ion-router');\nconst routeRedirect = document.createElement('ion-route-redirect');\nrouteRedirect.setAttribute('from', '*');\nrouteRedirect.setAttribute('to', '/login');\n\nif (!isLoggedIn) {\n  router.appendChild(routeRedirect);\n}\n")),(0,a.kt)("p",null,"Alternatively, the value of ",(0,a.kt)("inlineCode",{parentName:"p"},"to")," can be modified based on a condition. In the following example, the route redirect will check if the user is logged in and redirect to the ",(0,a.kt)("inlineCode",{parentName:"p"},"/login")," url if not."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<ion-route-redirect id="tutorialRedirect" from="*"></ion-route-redirect>\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const isLoggedIn = false;\nconst routeRedirect = document.querySelector('#tutorialRedirect');\n\nrouteRedirect.setAttribute('to', isLoggedIn ? undefined : '/login');\n")),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"from"},"from"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null}),(0,a.kt)("th",{parentName:"tr",align:null}))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Description")),(0,a.kt)("td",{parentName:"tr",align:null},'A redirect route, redirects "from" a URL "to" another URL. This property is that "from" URL.',(0,a.kt)("br",null),"It needs to be an exact match of the navigated URL in order to apply.",(0,a.kt)("br",null),(0,a.kt)("br",null),"The path specified in this value is always an absolute path, even if the initial ",(0,a.kt)("inlineCode",{parentName:"td"},"/")," slash",(0,a.kt)("br",null),"is not specified.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Attribute")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"from"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Type")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Default")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,a.kt)("h3",{id:"to"},"to"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null}),(0,a.kt)("th",{parentName:"tr",align:null}))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Description")),(0,a.kt)("td",{parentName:"tr",align:null},'A redirect route, redirects "from" a URL "to" another URL. This property is that "to" URL.',(0,a.kt)("br",null),"When the defined ",(0,a.kt)("inlineCode",{parentName:"td"},"ion-route-redirect")," rule matches, the router will redirect to the path",(0,a.kt)("br",null),"specified in this property.",(0,a.kt)("br",null),(0,a.kt)("br",null),"The value of this property is always an absolute path inside the scope of routes defined in",(0,a.kt)("br",null),(0,a.kt)("inlineCode",{parentName:"td"},"ion-router")," it can't be used with another router or to perform a redirection to a different domain.",(0,a.kt)("br",null),(0,a.kt)("br",null),"Note that this is a virtual redirect, it will not cause a real browser refresh, again, it's",(0,a.kt)("br",null),"a redirect inside the context of ion-router.",(0,a.kt)("br",null),(0,a.kt)("br",null),"When this property is not specified or his value is ",(0,a.kt)("inlineCode",{parentName:"td"},"undefined")," the whole redirect route is noop,",(0,a.kt)("br",null),'even if the "from" value matches.')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Attribute")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"to"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Type")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"null \\| string \\| undefined"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Default")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,a.kt)("h2",{id:"events"},"Events"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"ionRouteRedirectChanged")),(0,a.kt)("td",{parentName:"tr",align:null},"Internal event that fires when any value of this rule is added/removed from the DOM,")))),(0,a.kt)("p",null,"or any of his public properties changes."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ion-router")," captures this event in order to update his internal registry of router rules. |"))}s.isMDXComponent=!0}}]);