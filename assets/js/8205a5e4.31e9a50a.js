"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[43942],{58215:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(67294);const o=function(e){let{children:t,hidden:a,className:o}=e;return r.createElement("div",{role:"tabpanel",hidden:a,className:o},t)}},26396:(e,t,a)=>{a.d(t,{Z:()=>u});var r=a(87462),o=a(67294),n=a(72389),s=a(79443);const l=function(){const e=(0,o.useContext)(s.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var c=a(89521),i=a(86010);const m="tabItem_vU9c";function d(e){var t,a;const{lazy:r,block:n,defaultValue:s,values:d,groupId:u,className:p}=e,v=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=d??v.map((e=>{let{props:{value:t,label:a}}=e;return{value:t,label:a}})),g=(0,c.lx)(h,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===s?s:s??(null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)??(null==(a=v[0])?void 0:a.props.value);if(null!==f&&!h.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:b}=l(),[y,w]=(0,o.useState)(f),C=[],{blockElementScrollPositionUntilNextRender:N}=(0,c.o5)();if(null!=u){const e=k[u];null!=e&&e!==y&&h.some((t=>t.value===e))&&w(e)}const E=e=>{const t=e.currentTarget,a=C.indexOf(t),r=h[a].value;r!==y&&(N(t),w(r),null!=u&&b(u,r))},Z=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{const t=C.indexOf(e.currentTarget)+1;a=C[t]||C[0];break}case"ArrowLeft":{const t=C.indexOf(e.currentTarget)-1;a=C[t]||C[C.length-1];break}}null==(t=a)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},p)},h.map((e=>{let{value:t,label:a}=e;return o.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:(0,i.Z)("tabs__item",m,{"tabs__item--active":y===t}),key:t,ref:e=>C.push(e),onKeyDown:Z,onFocus:E,onClick:E},a??t)}))),r?(0,o.cloneElement)(v.filter((e=>e.props.value===y))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},v.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==y})))))}function u(e){const t=(0,n.Z)();return o.createElement(d,(0,r.Z)({key:String(t)},e))}},47758:(e,t,a)=>{a.d(t,{Z:()=>c});var r=a(67294),o=a(86010),n=a(39960),s=a(44996);const l="card_7QME";const c=function(e){const t=void 0===e.href,a=void 0!==e.href&&/^http/.test(e.href),c="undefined"===e.header?null:r.createElement("header",{className:"Card-header"},e.header),i=e.hoverIcon||e.icon,m=r.createElement(r.Fragment,null,e.img&&r.createElement("img",{src:(0,s.Z)(e.img),className:"Card-image"}),r.createElement("div",{className:"Card-container"},(e.icon||i)&&r.createElement("div",{className:"Card-icon-row"},e.icon&&r.createElement("img",{src:(0,s.Z)(e.icon),className:"Card-icon Card-icon-default"}),i&&r.createElement("img",{src:(0,s.Z)(i),className:"Card-icon Card-icon-hover"})),e.ionicon&&r.createElement("ion-icon",{name:e.ionicon,className:"Card-ionicon"}),e.iconset&&r.createElement("div",{className:"Card-iconset__container"},e.iconset.split(",").map(((t,a)=>r.createElement("img",{src:(0,s.Z)(t),className:"Card-icon "+(a===e.activeIndex?"Card-icon-active":""),"data-index":a,key:a})))),e.header&&c,r.createElement("div",{className:"Card-content"},e.children))),d=(0,o.Z)({"Card-with-image":void 0!==e.img,"Card-without-image":void 0===e.img,"Card-size-lg":"lg"===e.size,[e.className]:e.className});return t?r.createElement("docs-card",{class:d},r.createElement("div",{className:(0,o.Z)(l,"docs-card")},m)):a?r.createElement("docs-card",{class:d},r.createElement("a",{className:(0,o.Z)(l,"docs-card"),href:e.href,target:"_blank"},m)):r.createElement("docs-card",{class:d},r.createElement(n.default,{to:e.href,className:(0,o.Z)(l,"docs-card")},m))}},88694:(e,t,a)=>{a.d(t,{Z:()=>c});var r=a(87462),o=a(86010),n=a(67294);const s="docsButton_1mtQ",l="docsButtonRound_ZJZD";function c(e){let{href:t,round:a=!1,...c}=e;return c.className=(0,o.Z)({[c.className]:Boolean(c.className),[s]:!0,"docs-button":!0,[l]:a,"docs-button--round":a}),t?n.createElement("a",(0,r.Z)({href:t,className:"docsButton"},c),c.children):n.createElement("button",(0,r.Z)({className:"docsButton"},c),c.children)}},87377:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>d,default:()=>h,frontMatter:()=>m,metadata:()=>u,toc:()=>p});var r=a(87462),o=(a(67294),a(3905)),n=a(47758),s=a(88694),l=a(26396),c=a(58215),i=a(19055);const m={title:"App Center Low Memory"},d=void 0,u={unversionedId:"native/app-center-low-memory",id:"native/app-center-low-memory",isDocsHomePage:!1,title:"App Center Low Memory",description:"Generates a low memory warning.",source:"@site/docs/native/app-center-low-memory.md",sourceDirName:"native",slug:"/native/app-center-low-memory",permalink:"/docs/native/app-center-low-memory",editUrl:"https://github.com/ionic-team/ionic-native/edit/master/src/@awesome-cordova-plugins/plugins/app-center-low-memory/index.ts",tags:[],version:"current",frontMatter:{title:"App Center Low Memory"},sidebar:"native",previous:{title:"App Center Crashes",permalink:"/docs/native/app-center-crashes"},next:{title:"App Center Push",permalink:"/docs/native/app-center-push"}},p=[{value:"Supported Platforms",id:"supported-platforms",children:[],level:2},{value:"Usage",id:"usage",children:[{value:"React",id:"react",children:[],level:3},{value:"Angular",id:"angular",children:[],level:3}],level:2}],v={toc:p};function h(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Generates a low memory warning.\nFor more info, please see: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Microsoft/appcenter-sdk-cordova/tree/master/cordova-plugin-appcenter-generate-low-memory"},"https://github.com/Microsoft/appcenter-sdk-cordova/tree/master/cordova-plugin-appcenter-generate-low-memory")),(0,o.kt)("p",null,(0,o.kt)("a",{href:"https://github.com/Microsoft/appcenter-sdk-cordova/tree/master/cordova-plugin-appcenter-generate-low-memory",target:"_blank",rel:"noopener",className:"git-link"},(0,o.kt)("svg",{viewBox:"0 0 512 512"},(0,o.kt)("path",{d:"M416 160c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 23.7 12.9 44.3 32 55.4v8.6c0 19.9-7.8 33.7-25.3 44.9-15.4 9.8-38.1 17.1-67.5 21.5-14 2.1-25.7 6-35.2 10.7V151.4c19.1-11.1 32-31.7 32-55.4 0-35.3-28.7-64-64-64S96 60.7 96 96c0 23.7 12.9 44.3 32 55.4v209.2c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-16.6-6.3-31.7-16.7-43.1 1.9-4.9 9.7-16.3 29.4-19.3 38.8-5.8 68.9-15.9 92.3-30.8 36-22.8 55-57 55-98.8v-8.6c19.1-11.1 32-31.7 32-55.4zM160 56c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm0 400c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm192-256c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"}))," https://github.com/Microsoft/appcenter-sdk-cordova/tree/master/cordova-plugin-appcenter-generate-low-memory")),(0,o.kt)("h2",null,"Stuck on a Cordova issue?"),(0,o.kt)(n.Z,{className:"cordova-ee-card",header:"Don't waste precious time on plugin issues.",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Native",mdxType:"DocsCard"},(0,o.kt)("div",null,(0,o.kt)("img",{src:"/docs/icons/native-cordova-bot.png",class:"cordova-ee-img"}),(0,o.kt)("p",null,"If you're building a serious project, you can't afford to spend hours troubleshooting. Ionic\u2019s experts offer premium advisory services for both community plugins and premier plugins."),(0,o.kt)(s.Z,{className:"native-ee-detail",mdxType:"DocsButton"},"Contact Us Today!"))),(0,o.kt)("h2",{id:"installation"},(0,o.kt)("a",{href:"#installation"},"Installation")),(0,o.kt)(l.Z,{defaultValue:"Capacitor",groupId:"runtime",values:[{value:"Capacitor",label:"Capacitor"},{value:"Cordova",label:"Cordova"},{value:"Enterprise",label:"Enterprise"}],mdxType:"Tabs"},(0,o.kt)(c.Z,{value:"Capacitor",mdxType:"TabItem"},(0,o.kt)(i.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ npm install https://github.com/Microsoft/appcenter-sdk-cordova/tree/master/cordova-plugin-appcenter-generate-low-memory ","\n","$ npm install @awesome-cordova-plugins/app-center-low-memory ","\n","$ ionic cap sync")),(0,o.kt)(c.Z,{value:"Cordova",mdxType:"TabItem"},(0,o.kt)(i.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ ionic cordova plugin add https://github.com/Microsoft/appcenter-sdk-cordova/tree/master/cordova-plugin-appcenter-generate-low-memory ","\n","$ npm install @awesome-cordova-plugins/app-center-low-memory ","\n")),(0,o.kt)(c.Z,{value:"Enterprise",mdxType:"TabItem"},(0,o.kt)("blockquote",null,"Ionic Enterprise comes with fully supported and maintained plugins from the Ionic Team. \xa0",(0,o.kt)("a",{class:"btn",href:"https://ionic.io/docs/premier-plugins"},"Learn More")," or if you're interested in an enterprise version of this plugin ",(0,o.kt)("a",{class:"btn",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine"},"Contact Us")))),(0,o.kt)("h2",{id:"supported-platforms"},"Supported Platforms"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Android"),(0,o.kt)("li",{parentName:"ul"},"iOS")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("h3",{id:"react"},"React"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/native/community#react"},"Learn more about using Ionic Native components in React")),(0,o.kt)("h3",{id:"angular"},"Angular"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { LowMemory } from '@awesome-cordova-plugins/app-center-low-memory/ngx';\n\n...\n\nconstructor(private lowMemory: LowMemory) { }\n\nasync warning() {\n  await this.lowMemory.generateLowMemory();\n}\n")))}h.isMDXComponent=!0}}]);