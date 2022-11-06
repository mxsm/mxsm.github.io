"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[82636],{58215:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(67294);const s=function(e){let{children:t,hidden:a,className:s}=e;return n.createElement("div",{role:"tabpanel",hidden:a,className:s},t)}},26396:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(87462),s=a(67294),o=a(72389),r=a(79443);const l=function(){const e=(0,s.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var i=a(89521),c=a(86010);const d="tabItem_vU9c";function u(e){var t,a;const{lazy:n,block:o,defaultValue:r,values:u,groupId:m,className:p}=e,v=s.Children.map(e.children,(e=>{if((0,s.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=u??v.map((e=>{let{props:{value:t,label:a}}=e;return{value:t,label:a}})),h=(0,i.lx)(g,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===r?r:r??(null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)??(null==(a=v[0])?void 0:a.props.value);if(null!==f&&!g.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:k}=l(),[C,N]=(0,s.useState)(f),E=[],{blockElementScrollPositionUntilNextRender:y}=(0,i.o5)();if(null!=m){const e=b[m];null!=e&&e!==C&&g.some((t=>t.value===e))&&N(e)}const w=e=>{const t=e.currentTarget,a=E.indexOf(t),n=g[a].value;n!==C&&(y(t),N(n),null!=m&&k(m,n))},Z=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{const t=E.indexOf(e.currentTarget)+1;a=E[t]||E[0];break}case"ArrowLeft":{const t=E.indexOf(e.currentTarget)-1;a=E[t]||E[E.length-1];break}}null==(t=a)||t.focus()};return s.createElement("div",{className:"tabs-container"},s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":o},p)},g.map((e=>{let{value:t,label:a}=e;return s.createElement("li",{role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,className:(0,c.Z)("tabs__item",d,{"tabs__item--active":C===t}),key:t,ref:e=>E.push(e),onKeyDown:Z,onFocus:w,onClick:w},a??t)}))),n?(0,s.cloneElement)(v.filter((e=>e.props.value===C))[0],{className:"margin-vert--md"}):s.createElement("div",{className:"margin-vert--md"},v.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==C})))))}function m(e){const t=(0,o.Z)();return s.createElement(u,(0,n.Z)({key:String(t)},e))}},47758:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),s=a(86010),o=a(39960),r=a(44996);const l="card_7QME";const i=function(e){const t=void 0===e.href,a=void 0!==e.href&&/^http/.test(e.href),i="undefined"===e.header?null:n.createElement("header",{className:"Card-header"},e.header),c=e.hoverIcon||e.icon,d=n.createElement(n.Fragment,null,e.img&&n.createElement("img",{src:(0,r.Z)(e.img),className:"Card-image"}),n.createElement("div",{className:"Card-container"},(e.icon||c)&&n.createElement("div",{className:"Card-icon-row"},e.icon&&n.createElement("img",{src:(0,r.Z)(e.icon),className:"Card-icon Card-icon-default"}),c&&n.createElement("img",{src:(0,r.Z)(c),className:"Card-icon Card-icon-hover"})),e.ionicon&&n.createElement("ion-icon",{name:e.ionicon,className:"Card-ionicon"}),e.iconset&&n.createElement("div",{className:"Card-iconset__container"},e.iconset.split(",").map(((t,a)=>n.createElement("img",{src:(0,r.Z)(t),className:"Card-icon "+(a===e.activeIndex?"Card-icon-active":""),"data-index":a,key:a})))),e.header&&i,n.createElement("div",{className:"Card-content"},e.children))),u=(0,s.Z)({"Card-with-image":void 0!==e.img,"Card-without-image":void 0===e.img,"Card-size-lg":"lg"===e.size,[e.className]:e.className});return t?n.createElement("docs-card",{class:u},n.createElement("div",{className:(0,s.Z)(l,"docs-card")},d)):a?n.createElement("docs-card",{class:u},n.createElement("a",{className:(0,s.Z)(l,"docs-card"),href:e.href,target:"_blank"},d)):n.createElement("docs-card",{class:u},n.createElement(o.default,{to:e.href,className:(0,s.Z)(l,"docs-card")},d))}},88694:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(87462),s=a(86010),o=a(67294);const r="docsButton_1mtQ",l="docsButtonRound_ZJZD";function i(e){let{href:t,round:a=!1,...i}=e;return i.className=(0,s.Z)({[i.className]:Boolean(i.className),[r]:!0,"docs-button":!0,[l]:a,"docs-button--round":a}),t?o.createElement("a",(0,n.Z)({href:t,className:"docsButton"},i),i.children):o.createElement("button",(0,n.Z)({className:"docsButton"},i),i.children)}},17479:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>u,default:()=>g,frontMatter:()=>d,metadata:()=>m,toc:()=>p});var n=a(87462),s=(a(67294),a(3905)),o=a(47758),r=a(88694),l=a(26396),i=a(58215),c=a(19055);const d={sidebar_label:"Cloud Settings"},u="Cloud Settings",m={unversionedId:"native/cloud-settings",id:"version-v5/native/cloud-settings",isDocsHomePage:!1,title:"Cloud Settings",description:"Stores app settings in cloud storage so if the user re-installs the app or installs it on a different device, the settings will be restored and available in the new installation.",source:"@site/versioned_docs/version-v5/native/cloud-settings.md",sourceDirName:"native",slug:"/native/cloud-settings",permalink:"/cn/docs/v5/native/cloud-settings",editUrl:"https://crowdin.com/project/ionic-docs",tags:[],version:"v5",frontMatter:{sidebar_label:"Cloud Settings"},sidebar:"version-v5/native",previous:{title:"Clipboard",permalink:"/cn/docs/v5/native/clipboard"},next:{title:"Code Push",permalink:"/cn/docs/v5/native/code-push"}},p=[{value:"Supported Platforms",id:"supported-platforms",children:[],level:2},{value:"Usage",id:"usage",children:[{value:"React",id:"react",children:[],level:3},{value:"Angular",id:"angular",children:[],level:3}],level:2}],v={toc:p};function g(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,n.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"cloud-settings"},"Cloud Settings"),(0,s.kt)("p",null,"Stores app settings in cloud storage so if the user re-installs the app or installs it on a different device, the settings will be restored and available in the new installation."),(0,s.kt)("p",null,(0,s.kt)("a",{href:"https://github.com/dpa99c/cordova-plugin-cloud-settings",target:"_blank",rel:"noopener",className:"git-link"},(0,s.kt)("svg",{viewBox:"0 0 512 512"},(0,s.kt)("path",{d:"M416 160c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 23.7 12.9 44.3 32 55.4v8.6c0 19.9-7.8 33.7-25.3 44.9-15.4 9.8-38.1 17.1-67.5 21.5-14 2.1-25.7 6-35.2 10.7V151.4c19.1-11.1 32-31.7 32-55.4 0-35.3-28.7-64-64-64S96 60.7 96 96c0 23.7 12.9 44.3 32 55.4v209.2c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-16.6-6.3-31.7-16.7-43.1 1.9-4.9 9.7-16.3 29.4-19.3 38.8-5.8 68.9-15.9 92.3-30.8 36-22.8 55-57 55-98.8v-8.6c19.1-11.1 32-31.7 32-55.4zM160 56c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm0 400c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm192-256c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"}))," ","https://github.com/dpa99c/cordova-plugin-cloud-settings")),(0,s.kt)("h2",null,"Stuck on a Cordova issue?"),(0,s.kt)(o.Z,{className:"cordova-ee-card",header:"Don't waste precious time on plugin issues.",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Native",mdxType:"DocsCard"},(0,s.kt)("div",null,(0,s.kt)("img",{src:"/docs/icons/native-cordova-bot.png",class:"cordova-ee-img"}),(0,s.kt)("p",null,"If you're building a serious project, you can't afford to spend hours troubleshooting. Ionic\u2019s experts offer premium advisory services for both community plugins and premier plugins."),(0,s.kt)(r.Z,{className:"native-ee-detail",mdxType:"DocsButton"},"Contact Us Today!"))),(0,s.kt)("h2",{id:"installation"},(0,s.kt)("a",{href:"#installation"},"Installation")),(0,s.kt)(l.Z,{groupId:"runtime",defaultValue:"Capacitor",values:[{value:"Capacitor",label:"Capacitor"},{value:"Cordova",label:"Cordova"},{value:"Enterprise",label:"Enterprise"}],mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"Capacitor",mdxType:"TabItem"},(0,s.kt)(c.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ npm install cordova-plugin-cloud-settings ","\n","$ npm install @awesome-cordova-plugins/cloud-settings ","\n","$ ionic cap sync")),(0,s.kt)(i.Z,{value:"Cordova",mdxType:"TabItem"},(0,s.kt)(c.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ ionic cordova plugin add cordova-plugin-cloud-settings ","\n","$ npm install @awesome-cordova-plugins/cloud-settings ","\n")),(0,s.kt)(i.Z,{value:"Enterprise",mdxType:"TabItem"},(0,s.kt)("blockquote",null,"Ionic Enterprise comes with fully supported and maintained plugins from the Ionic Team. \xa0",(0,s.kt)("a",{class:"btn",href:"https://ionic.io/docs/premier-plugins"},"Learn More")," or if you're interested in an enterprise version of this plugin ",(0,s.kt)("a",{class:"btn",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine"},"Contact Us")))),(0,s.kt)("h2",{id:"supported-platforms"},"Supported Platforms"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Android"),(0,s.kt)("li",{parentName:"ul"},"iOS")),(0,s.kt)("h2",{id:"usage"},"Usage"),(0,s.kt)("h3",{id:"react"},"React"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/cn/docs/v5/native/community#react"},"Learn more about using Ionic Native components in React")),(0,s.kt)("h3",{id:"angular"},"Angular"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx"},'import { CloudSettings } from \'@awesome-cordova-plugins/cloud-settings/ngx\';\n\n\nconstructor(private cloudSettings: CloudSettings) { }\n\n...\n\nthis.cloudSettings.exists()\n  .then((exists: boolean) => console.log("Saved settings exist: " + exists) )\n\nthis.cloudSettings.load()\n  .then((settings: any) => this.settings = settings)\n  .catch((error: any) => console.error(error));\n\nthis.cloudSettings.save(this.settings)\n  .then((savedSettings: any) => console.log("Saved settings: " + JSON.stringify(savedSettings)))\n  .catch((error: any) => console.error(error));\n\n')))}g.isMDXComponent=!0}}]);