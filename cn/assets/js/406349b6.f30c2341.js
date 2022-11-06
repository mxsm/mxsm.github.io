"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[9802],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>k});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),p=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=p(t.components);return a.createElement(d.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),s=p(n),k=r,c=s["".concat(d,".").concat(k)]||s[k]||m[k]||l;return n?a.createElement(c,i(i({ref:e},u),{},{components:n})):a.createElement(c,i({ref:e},u))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},58215:(t,e,n)=>{n.d(e,{Z:()=>r});var a=n(67294);const r=function(t){let{children:e,hidden:n,className:r}=t;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},e)}},26396:(t,e,n)=>{n.d(e,{Z:()=>s});var a=n(87462),r=n(67294),l=n(72389),i=n(79443);const o=function(){const t=(0,r.useContext)(i.Z);if(null==t)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return t};var d=n(89521),p=n(86010);const u="tabItem_vU9c";function m(t){var e,n;const{lazy:a,block:l,defaultValue:i,values:m,groupId:s,className:k}=t,c=r.Children.map(t.children,(t=>{if((0,r.isValidElement)(t)&&void 0!==t.props.value)return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),N=m??c.map((t=>{let{props:{value:e,label:n}}=t;return{value:e,label:n}})),g=(0,d.lx)(N,((t,e)=>t.value===e.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===i?i:i??(null==(e=c.find((t=>t.props.default)))?void 0:e.props.value)??(null==(n=c[0])?void 0:n.props.value);if(null!==h&&!N.some((t=>t.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${N.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:f}=o(),[v,y]=(0,r.useState)(h),C=[],{blockElementScrollPositionUntilNextRender:w}=(0,d.o5)();if(null!=s){const t=b[s];null!=t&&t!==v&&N.some((e=>e.value===t))&&y(t)}const T=t=>{const e=t.currentTarget,n=C.indexOf(e),a=N[n].value;a!==v&&(w(e),y(a),null!=s&&f(s,a))},O=t=>{var e;let n=null;switch(t.key){case"ArrowRight":{const e=C.indexOf(t.currentTarget)+1;n=C[e]||C[0];break}case"ArrowLeft":{const e=C.indexOf(t.currentTarget)-1;n=C[e]||C[C.length-1];break}}null==(e=n)||e.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,p.Z)("tabs",{"tabs--block":l},k)},N.map((t=>{let{value:e,label:n}=t;return r.createElement("li",{role:"tab",tabIndex:v===e?0:-1,"aria-selected":v===e,className:(0,p.Z)("tabs__item",u,{"tabs__item--active":v===e}),key:e,ref:t=>C.push(t),onKeyDown:O,onFocus:T,onClick:T},n??e)}))),a?(0,r.cloneElement)(c.filter((t=>t.props.value===v))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},c.map(((t,e)=>(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==v})))))}function s(t){const e=(0,l.Z)();return r.createElement(m,(0,a.Z)({key:String(e)},t))}},67706:(t,e,n)=>{n.r(e),n.d(e,{contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));n(26396),n(58215);const l={title:"Router Link | Navigating The ion-router-link Component",description:"Use the ion-router-link component to navigate to a specified link. The router link can accept an href for location and a direction for the transition animation.",sidebar_label:"ion-router-link",demoUrl:"/docs/demos/api/router-link/index.html",demoSourceUrl:"https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/router-link/index.html"},i="ion-router-link",o={unversionedId:"api/router-link",id:"version-v5/api/router-link",isDocsHomePage:!1,title:"Router Link | Navigating The ion-router-link Component",description:"Use the ion-router-link component to navigate to a specified link. The router link can accept an href for location and a direction for the transition animation.",source:"@site/versioned_docs/version-v5/api/router-link.md",sourceDirName:"api",slug:"/api/router-link",permalink:"/cn/docs/v5/api/router-link",editUrl:"https://crowdin.com/project/ionic-docs",tags:[],version:"v5",frontMatter:{title:"Router Link | Navigating The ion-router-link Component",description:"Use the ion-router-link component to navigate to a specified link. The router link can accept an href for location and a direction for the transition animation.",sidebar_label:"ion-router-link",demoUrl:"/docs/demos/api/router-link/index.html",demoSourceUrl:"https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/router-link/index.html"},sidebar:"version-v5/api",previous:{title:"ion-router",permalink:"/cn/docs/v5/api/router"},next:{title:"ion-router-outlet",permalink:"/cn/docs/v5/api/router-outlet"}},d=[{value:"Properties",id:"properties",children:[{value:"color",id:"color",children:[],level:3},{value:"href",id:"href",children:[],level:3},{value:"rel",id:"rel",children:[],level:3},{value:"routerAnimation",id:"routeranimation",children:[],level:3},{value:"routerDirection",id:"routerdirection",children:[],level:3},{value:"target",id:"target",children:[],level:3}],level:2},{value:"CSS Custom Properties",id:"css-custom-properties",children:[],level:2}],p={toc:d};function u(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"ion-router-link"},"ion-router-link"),(0,r.kt)("p",null,"The router link component is used for navigating to a specified link. Similar to the browser's anchor tag, it can accept a href for the location, and a direction for the transition animation."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: this component should only be used with vanilla and Stencil JavaScript projects. For Angular projects, use an ",(0,r.kt)("inlineCode",{parentName:"p"},"<a>")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"routerLink")," with the Angular router.")),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"color"},"color"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Description")),(0,r.kt)("td",{parentName:"tr",align:null},"The color to use from your application's color palette.",(0,r.kt)("br",null),"Default options are: ",(0,r.kt)("inlineCode",{parentName:"td"},'"primary"'),", ",(0,r.kt)("inlineCode",{parentName:"td"},'"secondary"'),", ",(0,r.kt)("inlineCode",{parentName:"td"},'"tertiary"'),", ",(0,r.kt)("inlineCode",{parentName:"td"},'"success"'),", ",(0,r.kt)("inlineCode",{parentName:"td"},'"warning"'),", ",(0,r.kt)("inlineCode",{parentName:"td"},'"danger"'),", ",(0,r.kt)("inlineCode",{parentName:"td"},'"light"'),", ",(0,r.kt)("inlineCode",{parentName:"td"},'"medium"'),", and ",(0,r.kt)("inlineCode",{parentName:"td"},'"dark"'),".",(0,r.kt)("br",null),"For more information on colors, see ",(0,r.kt)("a",{parentName:"td",href:"/cn/docs/v5/theming/basics"},"theming"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Attribute")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"color"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Type")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string \\| undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Default")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,r.kt)("h3",{id:"href"},"href"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Description")),(0,r.kt)("td",{parentName:"tr",align:null},"Contains a URL or a URL fragment that the hyperlink points to.",(0,r.kt)("br",null),"If this property is set, an anchor tag will be rendered.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Attribute")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"href"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Type")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string \\| undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Default")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,r.kt)("h3",{id:"rel"},"rel"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Description")),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies the relationship of the target object to the link object.",(0,r.kt)("br",null),"The value is a space-separated list of ",(0,r.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types"},"link types"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Attribute")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"rel"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Type")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string \\| undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Default")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,r.kt)("h3",{id:"routeranimation"},"routerAnimation"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Description")),(0,r.kt)("td",{parentName:"tr",align:null},"When using a router, it specifies the transition animation when navigating to",(0,r.kt)("br",null),"another page using ",(0,r.kt)("inlineCode",{parentName:"td"},"href"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Attribute")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Type")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"((baseEl: any, opts?: any) => Animation) \\| undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Default")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,r.kt)("h3",{id:"routerdirection"},"routerDirection"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Description")),(0,r.kt)("td",{parentName:"tr",align:null},"When using a router, it specifies the transition direction when navigating to",(0,r.kt)("br",null),"another page using ",(0,r.kt)("inlineCode",{parentName:"td"},"href"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Attribute")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"router-direction"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Type")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"back" \\| "forward" \\| "root"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Default")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"'forward'"))))),(0,r.kt)("h3",{id:"target"},"target"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Description")),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies where to display the linked URL.",(0,r.kt)("br",null),"Only applies when an ",(0,r.kt)("inlineCode",{parentName:"td"},"href")," is provided.",(0,r.kt)("br",null),"Special keywords: ",(0,r.kt)("inlineCode",{parentName:"td"},'"_blank"'),", ",(0,r.kt)("inlineCode",{parentName:"td"},'"_self"'),", ",(0,r.kt)("inlineCode",{parentName:"td"},'"_parent"'),", ",(0,r.kt)("inlineCode",{parentName:"td"},'"_top"'),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Attribute")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"target"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Type")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string \\| undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Default")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,r.kt)("h2",{id:"css-custom-properties"},"CSS Custom Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--background")),(0,r.kt)("td",{parentName:"tr",align:null},"Background of the router link")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--color")),(0,r.kt)("td",{parentName:"tr",align:null},"Text color of the router link")))))}u.isMDXComponent=!0}}]);