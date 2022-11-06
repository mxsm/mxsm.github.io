"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[92441],{58215:(e,t,a)=>{a.d(t,{Z:()=>n});var r=a(67294);const n=function(e){let{children:t,hidden:a,className:n}=e;return r.createElement("div",{role:"tabpanel",hidden:a,className:n},t)}},26396:(e,t,a)=>{a.d(t,{Z:()=>m});var r=a(87462),n=a(67294),o=a(72389),i=a(79443);const s=function(){const e=(0,n.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var l=a(89521),c=a(86010);const d="tabItem_vU9c";function u(e){var t,a;const{lazy:r,block:o,defaultValue:i,values:u,groupId:m,className:p}=e,v=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=u??v.map((e=>{let{props:{value:t,label:a}}=e;return{value:t,label:a}})),f=(0,l.lx)(h,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===i?i:i??(null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)??(null==(a=v[0])?void 0:a.props.value);if(null!==g&&!h.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:b}=s(),[x,C]=(0,n.useState)(g),E=[],{blockElementScrollPositionUntilNextRender:N}=(0,l.o5)();if(null!=m){const e=k[m];null!=e&&e!==x&&h.some((t=>t.value===e))&&C(e)}const y=e=>{const t=e.currentTarget,a=E.indexOf(t),r=h[a].value;r!==x&&(N(t),C(r),null!=m&&b(m,r))},w=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{const t=E.indexOf(e.currentTarget)+1;a=E[t]||E[0];break}case"ArrowLeft":{const t=E.indexOf(e.currentTarget)-1;a=E[t]||E[E.length-1];break}}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":o},p)},h.map((e=>{let{value:t,label:a}=e;return n.createElement("li",{role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,className:(0,c.Z)("tabs__item",d,{"tabs__item--active":x===t}),key:t,ref:e=>E.push(e),onKeyDown:w,onFocus:y,onClick:y},a??t)}))),r?(0,n.cloneElement)(v.filter((e=>e.props.value===x))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},v.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function m(e){const t=(0,o.Z)();return n.createElement(u,(0,r.Z)({key:String(t)},e))}},47758:(e,t,a)=>{a.d(t,{Z:()=>l});var r=a(67294),n=a(86010),o=a(39960),i=a(44996);const s="card_7QME";const l=function(e){const t=void 0===e.href,a=void 0!==e.href&&/^http/.test(e.href),l="undefined"===e.header?null:r.createElement("header",{className:"Card-header"},e.header),c=e.hoverIcon||e.icon,d=r.createElement(r.Fragment,null,e.img&&r.createElement("img",{src:(0,i.Z)(e.img),className:"Card-image"}),r.createElement("div",{className:"Card-container"},(e.icon||c)&&r.createElement("div",{className:"Card-icon-row"},e.icon&&r.createElement("img",{src:(0,i.Z)(e.icon),className:"Card-icon Card-icon-default"}),c&&r.createElement("img",{src:(0,i.Z)(c),className:"Card-icon Card-icon-hover"})),e.ionicon&&r.createElement("ion-icon",{name:e.ionicon,className:"Card-ionicon"}),e.iconset&&r.createElement("div",{className:"Card-iconset__container"},e.iconset.split(",").map(((t,a)=>r.createElement("img",{src:(0,i.Z)(t),className:"Card-icon "+(a===e.activeIndex?"Card-icon-active":""),"data-index":a,key:a})))),e.header&&l,r.createElement("div",{className:"Card-content"},e.children))),u=(0,n.Z)({"Card-with-image":void 0!==e.img,"Card-without-image":void 0===e.img,"Card-size-lg":"lg"===e.size,[e.className]:e.className});return t?r.createElement("docs-card",{class:u},r.createElement("div",{className:(0,n.Z)(s,"docs-card")},d)):a?r.createElement("docs-card",{class:u},r.createElement("a",{className:(0,n.Z)(s,"docs-card"),href:e.href,target:"_blank"},d)):r.createElement("docs-card",{class:u},r.createElement(o.default,{to:e.href,className:(0,n.Z)(s,"docs-card")},d))}},88694:(e,t,a)=>{a.d(t,{Z:()=>l});var r=a(87462),n=a(86010),o=a(67294);const i="docsButton_1mtQ",s="docsButtonRound_ZJZD";function l(e){let{href:t,round:a=!1,...l}=e;return l.className=(0,n.Z)({[l.className]:Boolean(l.className),[i]:!0,"docs-button":!0,[s]:a,"docs-button--round":a}),t?o.createElement("a",(0,r.Z)({href:t,className:"docsButton"},l),l.children):o.createElement("button",(0,r.Z)({className:"docsButton"},l),l.children)}},87619:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>u,default:()=>h,frontMatter:()=>d,metadata:()=>m,toc:()=>p});var r=a(87462),n=(a(67294),a(3905)),o=a(47758),i=a(88694),s=a(26396),l=a(58215),c=a(19055);const d={sidebar_label:"Metrix"},u="Metrix",m={unversionedId:"native/metrix",id:"version-v5/native/metrix",isDocsHomePage:!1,title:"Metrix",description:"This is the Ionic Cordova SDK of Metrix\u2122. You can read more about Metrix\u2122 at metrix.ir.",source:"@site/versioned_docs/version-v5/native/metrix.md",sourceDirName:"native",slug:"/native/metrix",permalink:"/cn/docs/v5/native/metrix",editUrl:"https://crowdin.com/project/ionic-docs",tags:[],version:"v5",frontMatter:{sidebar_label:"Metrix"},sidebar:"version-v5/native",previous:{title:"Media",permalink:"/cn/docs/v5/native/media"},next:{title:"Mixpanel",permalink:"/cn/docs/v5/native/mixpanel"}},p=[{value:"Supported Platforms",id:"supported-platforms",children:[],level:2},{value:"Usage",id:"usage",children:[{value:"React",id:"react",children:[],level:3},{value:"Angular",id:"angular",children:[],level:3}],level:2}],v={toc:p};function h(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"metrix"},"Metrix"),(0,n.kt)("p",null,"This is the Ionic Cordova SDK of Metrix\u2122. You can read more about Metrix\u2122 at metrix.ir."),(0,n.kt)("p",null,"Requires Cordova plugin: ",(0,n.kt)("inlineCode",{parentName:"p"},"ir.metrix.sdk"),". For more info, please see the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/metrixorg/MetrixSDK-CordovaPlugin"},"Metrix Cordova SDK")),(0,n.kt)("p",null,(0,n.kt)("a",{href:"https://github.com/metrixorg/MetrixSDK-CordovaPlugin",target:"_blank",rel:"noopener",className:"git-link"},(0,n.kt)("svg",{viewBox:"0 0 512 512"},(0,n.kt)("path",{d:"M416 160c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 23.7 12.9 44.3 32 55.4v8.6c0 19.9-7.8 33.7-25.3 44.9-15.4 9.8-38.1 17.1-67.5 21.5-14 2.1-25.7 6-35.2 10.7V151.4c19.1-11.1 32-31.7 32-55.4 0-35.3-28.7-64-64-64S96 60.7 96 96c0 23.7 12.9 44.3 32 55.4v209.2c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-16.6-6.3-31.7-16.7-43.1 1.9-4.9 9.7-16.3 29.4-19.3 38.8-5.8 68.9-15.9 92.3-30.8 36-22.8 55-57 55-98.8v-8.6c19.1-11.1 32-31.7 32-55.4zM160 56c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm0 400c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm192-256c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"}))," ","https://github.com/metrixorg/MetrixSDK-CordovaPlugin")),(0,n.kt)("h2",null,"Stuck on a Cordova issue?"),(0,n.kt)(o.Z,{className:"cordova-ee-card",header:"Don't waste precious time on plugin issues.",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Native",mdxType:"DocsCard"},(0,n.kt)("div",null,(0,n.kt)("img",{src:"/docs/icons/native-cordova-bot.png",class:"cordova-ee-img"}),(0,n.kt)("p",null,"If you're building a serious project, you can't afford to spend hours troubleshooting. Ionic\u2019s experts offer premium advisory services for both community plugins and premier plugins."),(0,n.kt)(i.Z,{className:"native-ee-detail",mdxType:"DocsButton"},"Contact Us Today!"))),(0,n.kt)("h2",{id:"installation"},(0,n.kt)("a",{href:"#installation"},"Installation")),(0,n.kt)(s.Z,{groupId:"runtime",defaultValue:"Capacitor",values:[{value:"Capacitor",label:"Capacitor"},{value:"Cordova",label:"Cordova"},{value:"Enterprise",label:"Enterprise"}],mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Capacitor",mdxType:"TabItem"},(0,n.kt)(c.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ npm install ir.metrix.sdk ","\n","$ npm install @awesome-cordova-plugins/metrix ","\n","$ ionic cap sync")),(0,n.kt)(l.Z,{value:"Cordova",mdxType:"TabItem"},(0,n.kt)(c.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ ionic cordova plugin add ir.metrix.sdk ","\n","$ npm install @awesome-cordova-plugins/metrix ","\n")),(0,n.kt)(l.Z,{value:"Enterprise",mdxType:"TabItem"},(0,n.kt)("blockquote",null,"Ionic Enterprise comes with fully supported and maintained plugins from the Ionic Team. \xa0",(0,n.kt)("a",{class:"btn",href:"https://ionic.io/docs/premier-plugins"},"Learn More")," or if you're interested in an enterprise version of this plugin ",(0,n.kt)("a",{class:"btn",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine"},"Contact Us")))),(0,n.kt)("h2",{id:"supported-platforms"},"Supported Platforms"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Android")),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("h3",{id:"react"},"React"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/cn/docs/v5/native/community#react"},"Learn more about using Ionic Native components in React")),(0,n.kt)("h3",{id:"angular"},"Angular"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"}," import { Metrix, MetrixConfig } from '@awesome-cordova-plugins/metrix';\n\n constructor(private metrix: Metrix) { }\n\n ...\n\n const config = new MetrixConfig('APP-ID-HERE');\n // Set other config properties.\n metrix.create(config);\n\n")))}h.isMDXComponent=!0}}]);