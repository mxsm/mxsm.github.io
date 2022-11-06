"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[93597],{58215:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(67294);const s=function(e){let{children:t,hidden:a,className:s}=e;return n.createElement("div",{role:"tabpanel",hidden:a,className:s},t)}},26396:(e,t,a)=>{a.d(t,{Z:()=>u});var n=a(87462),s=a(67294),r=a(72389),o=a(79443);const i=function(){const e=(0,s.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var l=a(89521),c=a(86010);const d="tabItem_vU9c";function m(e){var t,a;const{lazy:n,block:r,defaultValue:o,values:m,groupId:u,className:p}=e,v=s.Children.map(e.children,(e=>{if((0,s.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=m??v.map((e=>{let{props:{value:t,label:a}}=e;return{value:t,label:a}})),g=(0,l.lx)(h,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===o?o:o??(null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)??(null==(a=v[0])?void 0:a.props.value);if(null!==f&&!h.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:k}=i(),[y,b]=(0,s.useState)(f),E=[],{blockElementScrollPositionUntilNextRender:N}=(0,l.o5)();if(null!=u){const e=w[u];null!=e&&e!==y&&h.some((t=>t.value===e))&&b(e)}const C=e=>{const t=e.currentTarget,a=E.indexOf(t),n=h[a].value;n!==y&&(N(t),b(n),null!=u&&k(u,n))},Z=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{const t=E.indexOf(e.currentTarget)+1;a=E[t]||E[0];break}case"ArrowLeft":{const t=E.indexOf(e.currentTarget)-1;a=E[t]||E[E.length-1];break}}null==(t=a)||t.focus()};return s.createElement("div",{className:"tabs-container"},s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":r},p)},h.map((e=>{let{value:t,label:a}=e;return s.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:(0,c.Z)("tabs__item",d,{"tabs__item--active":y===t}),key:t,ref:e=>E.push(e),onKeyDown:Z,onFocus:C,onClick:C},a??t)}))),n?(0,s.cloneElement)(v.filter((e=>e.props.value===y))[0],{className:"margin-vert--md"}):s.createElement("div",{className:"margin-vert--md"},v.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==y})))))}function u(e){const t=(0,r.Z)();return s.createElement(m,(0,n.Z)({key:String(t)},e))}},47758:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),s=a(86010),r=a(39960),o=a(44996);const i="card_7QME";const l=function(e){const t=void 0===e.href,a=void 0!==e.href&&/^http/.test(e.href),l="undefined"===e.header?null:n.createElement("header",{className:"Card-header"},e.header),c=e.hoverIcon||e.icon,d=n.createElement(n.Fragment,null,e.img&&n.createElement("img",{src:(0,o.Z)(e.img),className:"Card-image"}),n.createElement("div",{className:"Card-container"},(e.icon||c)&&n.createElement("div",{className:"Card-icon-row"},e.icon&&n.createElement("img",{src:(0,o.Z)(e.icon),className:"Card-icon Card-icon-default"}),c&&n.createElement("img",{src:(0,o.Z)(c),className:"Card-icon Card-icon-hover"})),e.ionicon&&n.createElement("ion-icon",{name:e.ionicon,className:"Card-ionicon"}),e.iconset&&n.createElement("div",{className:"Card-iconset__container"},e.iconset.split(",").map(((t,a)=>n.createElement("img",{src:(0,o.Z)(t),className:"Card-icon "+(a===e.activeIndex?"Card-icon-active":""),"data-index":a,key:a})))),e.header&&l,n.createElement("div",{className:"Card-content"},e.children))),m=(0,s.Z)({"Card-with-image":void 0!==e.img,"Card-without-image":void 0===e.img,"Card-size-lg":"lg"===e.size,[e.className]:e.className});return t?n.createElement("docs-card",{class:m},n.createElement("div",{className:(0,s.Z)(i,"docs-card")},d)):a?n.createElement("docs-card",{class:m},n.createElement("a",{className:(0,s.Z)(i,"docs-card"),href:e.href,target:"_blank"},d)):n.createElement("docs-card",{class:m},n.createElement(r.default,{to:e.href,className:(0,s.Z)(i,"docs-card")},d))}},88694:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(87462),s=a(86010),r=a(67294);const o="docsButton_1mtQ",i="docsButtonRound_ZJZD";function l(e){let{href:t,round:a=!1,...l}=e;return l.className=(0,s.Z)({[l.className]:Boolean(l.className),[o]:!0,"docs-button":!0,[i]:a,"docs-button--round":a}),t?r.createElement("a",(0,n.Z)({href:t,className:"docsButton"},l),l.children):r.createElement("button",(0,n.Z)({className:"docsButton"},l),l.children)}},30235:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>m,default:()=>h,frontMatter:()=>d,metadata:()=>u,toc:()=>p});var n=a(87462),s=(a(67294),a(3905)),r=a(47758),o=a(88694),i=a(26396),l=a(58215),c=a(19055);const d={title:"System Alert Window Permission"},m=void 0,u={unversionedId:"native/system-alert-window-permission",id:"native/system-alert-window-permission",isDocsHomePage:!1,title:"System Alert Window Permission",description:"This plugin does something",source:"@site/docs/native/system-alert-window-permission.md",sourceDirName:"native",slug:"/native/system-alert-window-permission",permalink:"/docs/native/system-alert-window-permission",editUrl:"https://github.com/ionic-team/ionic-native/edit/master/src/@awesome-cordova-plugins/plugins/system-alert-window-permission/index.ts",tags:[],version:"current",frontMatter:{title:"System Alert Window Permission"},sidebar:"native",previous:{title:"SumUp",permalink:"/docs/native/sum-up"},next:{title:"Taptic Engine",permalink:"/docs/native/taptic-engine"}},p=[{value:"Supported Platforms",id:"supported-platforms",children:[],level:2},{value:"Usage",id:"usage",children:[{value:"React",id:"react",children:[],level:3},{value:"Angular",id:"angular",children:[],level:3}],level:2}],v={toc:p};function h(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,n.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This plugin does something"),(0,s.kt)("p",null,(0,s.kt)("a",{href:"https://github.com/MaximBelov/cordova-plugin-system-alert-window-permission.git",target:"_blank",rel:"noopener",className:"git-link"},(0,s.kt)("svg",{viewBox:"0 0 512 512"},(0,s.kt)("path",{d:"M416 160c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 23.7 12.9 44.3 32 55.4v8.6c0 19.9-7.8 33.7-25.3 44.9-15.4 9.8-38.1 17.1-67.5 21.5-14 2.1-25.7 6-35.2 10.7V151.4c19.1-11.1 32-31.7 32-55.4 0-35.3-28.7-64-64-64S96 60.7 96 96c0 23.7 12.9 44.3 32 55.4v209.2c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-16.6-6.3-31.7-16.7-43.1 1.9-4.9 9.7-16.3 29.4-19.3 38.8-5.8 68.9-15.9 92.3-30.8 36-22.8 55-57 55-98.8v-8.6c19.1-11.1 32-31.7 32-55.4zM160 56c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm0 400c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm192-256c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"}))," https://github.com/MaximBelov/cordova-plugin-system-alert-window-permission.git")),(0,s.kt)("h2",null,"Stuck on a Cordova issue?"),(0,s.kt)(r.Z,{className:"cordova-ee-card",header:"Don't waste precious time on plugin issues.",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Native",mdxType:"DocsCard"},(0,s.kt)("div",null,(0,s.kt)("img",{src:"/docs/icons/native-cordova-bot.png",class:"cordova-ee-img"}),(0,s.kt)("p",null,"If you're building a serious project, you can't afford to spend hours troubleshooting. Ionic\u2019s experts offer premium advisory services for both community plugins and premier plugins."),(0,s.kt)(o.Z,{className:"native-ee-detail",mdxType:"DocsButton"},"Contact Us Today!"))),(0,s.kt)("h2",{id:"installation"},(0,s.kt)("a",{href:"#installation"},"Installation")),(0,s.kt)(i.Z,{defaultValue:"Capacitor",groupId:"runtime",values:[{value:"Capacitor",label:"Capacitor"},{value:"Cordova",label:"Cordova"},{value:"Enterprise",label:"Enterprise"}],mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"Capacitor",mdxType:"TabItem"},(0,s.kt)(c.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ npm install cordova-plugin-system-alert-window-permission ","\n","$ npm install @awesome-cordova-plugins/system-alert-window-permission ","\n","$ ionic cap sync")),(0,s.kt)(l.Z,{value:"Cordova",mdxType:"TabItem"},(0,s.kt)(c.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ ionic cordova plugin add cordova-plugin-system-alert-window-permission ","\n","$ npm install @awesome-cordova-plugins/system-alert-window-permission ","\n")),(0,s.kt)(l.Z,{value:"Enterprise",mdxType:"TabItem"},(0,s.kt)("blockquote",null,"Ionic Enterprise comes with fully supported and maintained plugins from the Ionic Team. \xa0",(0,s.kt)("a",{class:"btn",href:"https://ionic.io/docs/premier-plugins"},"Learn More")," or if you're interested in an enterprise version of this plugin ",(0,s.kt)("a",{class:"btn",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine"},"Contact Us")))),(0,s.kt)("h2",{id:"supported-platforms"},"Supported Platforms"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Android")),(0,s.kt)("h2",{id:"usage"},"Usage"),(0,s.kt)("h3",{id:"react"},"React"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/docs/native/community#react"},"Learn more about using Ionic Native components in React")),(0,s.kt)("h3",{id:"angular"},"Angular"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"import { SystemAlertWindowPermission } from '@awesome-cordova-plugins/system-alert-window-permission/ngx';\n\n\nconstructor(private systemAlertWindowPermission: SystemAlertWindowPermission) { }\n\n...\n\n\nthis.systemAlertWindowPermission.hasPermission()\n  .then((res: any) => console.log(res))\n  .catch((error: any) => console.error(error));\n\nthis.systemAlertWindowPermission.requestPermission()\n  .then((res: any) => console.log(res))\n  .catch((error: any) => console.error(error));\n\n")))}h.isMDXComponent=!0}}]);