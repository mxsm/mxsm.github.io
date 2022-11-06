"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[81228],{58215:(e,a,t)=>{t.d(a,{Z:()=>i});var n=t(67294);const i=function(e){let{children:a,hidden:t,className:i}=e;return n.createElement("div",{role:"tabpanel",hidden:t,className:i},a)}},26396:(e,a,t)=>{t.d(a,{Z:()=>m});var n=t(87462),i=t(67294),r=t(72389),l=t(79443);const o=function(){const e=(0,i.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var s=t(89521),c=t(86010);const d="tabItem_vU9c";function u(e){var a,t;const{lazy:n,block:r,defaultValue:l,values:u,groupId:m,className:p}=e,v=i.Children.map(e.children,(e=>{if((0,i.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=u??v.map((e=>{let{props:{value:a,label:t}}=e;return{value:a,label:t}})),f=(0,s.lx)(h,((e,a)=>e.value===a.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===l?l:l??(null==(a=v.find((e=>e.props.default)))?void 0:a.props.value)??(null==(t=v[0])?void 0:t.props.value);if(null!==g&&!h.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:k}=o(),[T,E]=(0,i.useState)(g),N=[],{blockElementScrollPositionUntilNextRender:C}=(0,s.o5)();if(null!=m){const e=b[m];null!=e&&e!==T&&h.some((a=>a.value===e))&&E(e)}const y=e=>{const a=e.currentTarget,t=N.indexOf(a),n=h[t].value;n!==T&&(C(a),E(n),null!=m&&k(m,n))},I=e=>{var a;let t=null;switch(e.key){case"ArrowRight":{const a=N.indexOf(e.currentTarget)+1;t=N[a]||N[0];break}case"ArrowLeft":{const a=N.indexOf(e.currentTarget)-1;t=N[a]||N[N.length-1];break}}null==(a=t)||a.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":r},p)},h.map((e=>{let{value:a,label:t}=e;return i.createElement("li",{role:"tab",tabIndex:T===a?0:-1,"aria-selected":T===a,className:(0,c.Z)("tabs__item",d,{"tabs__item--active":T===a}),key:a,ref:e=>N.push(e),onKeyDown:I,onFocus:y,onClick:y},t??a)}))),n?(0,i.cloneElement)(v.filter((e=>e.props.value===T))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},v.map(((e,a)=>(0,i.cloneElement)(e,{key:a,hidden:e.props.value!==T})))))}function m(e){const a=(0,r.Z)();return i.createElement(u,(0,n.Z)({key:String(a)},e))}},47758:(e,a,t)=>{t.d(a,{Z:()=>s});var n=t(67294),i=t(86010),r=t(39960),l=t(44996);const o="card_7QME";const s=function(e){const a=void 0===e.href,t=void 0!==e.href&&/^http/.test(e.href),s="undefined"===e.header?null:n.createElement("header",{className:"Card-header"},e.header),c=e.hoverIcon||e.icon,d=n.createElement(n.Fragment,null,e.img&&n.createElement("img",{src:(0,l.Z)(e.img),className:"Card-image"}),n.createElement("div",{className:"Card-container"},(e.icon||c)&&n.createElement("div",{className:"Card-icon-row"},e.icon&&n.createElement("img",{src:(0,l.Z)(e.icon),className:"Card-icon Card-icon-default"}),c&&n.createElement("img",{src:(0,l.Z)(c),className:"Card-icon Card-icon-hover"})),e.ionicon&&n.createElement("ion-icon",{name:e.ionicon,className:"Card-ionicon"}),e.iconset&&n.createElement("div",{className:"Card-iconset__container"},e.iconset.split(",").map(((a,t)=>n.createElement("img",{src:(0,l.Z)(a),className:"Card-icon "+(t===e.activeIndex?"Card-icon-active":""),"data-index":t,key:t})))),e.header&&s,n.createElement("div",{className:"Card-content"},e.children))),u=(0,i.Z)({"Card-with-image":void 0!==e.img,"Card-without-image":void 0===e.img,"Card-size-lg":"lg"===e.size,[e.className]:e.className});return a?n.createElement("docs-card",{class:u},n.createElement("div",{className:(0,i.Z)(o,"docs-card")},d)):t?n.createElement("docs-card",{class:u},n.createElement("a",{className:(0,i.Z)(o,"docs-card"),href:e.href,target:"_blank"},d)):n.createElement("docs-card",{class:u},n.createElement(r.default,{to:e.href,className:(0,i.Z)(o,"docs-card")},d))}},88694:(e,a,t)=>{t.d(a,{Z:()=>s});var n=t(87462),i=t(86010),r=t(67294);const l="docsButton_1mtQ",o="docsButtonRound_ZJZD";function s(e){let{href:a,round:t=!1,...s}=e;return s.className=(0,i.Z)({[s.className]:Boolean(s.className),[l]:!0,"docs-button":!0,[o]:t,"docs-button--round":t}),a?r.createElement("a",(0,n.Z)({href:a,className:"docsButton"},s),s.children):r.createElement("button",(0,n.Z)({className:"docsButton"},s),s.children)}},5407:(e,a,t)=>{t.r(a),t.d(a,{contentTitle:()=>u,default:()=>h,frontMatter:()=>d,metadata:()=>m,toc:()=>p});var n=t(87462),i=(t(67294),t(3905)),r=t(47758),l=t(88694),o=t(26396),s=t(58215),c=t(19055);const d={sidebar_label:"TealiumAdIdentifier"},u="TealiumAdIdentifier",m={unversionedId:"native/tealium-adidentifier",id:"version-v5/native/tealium-adidentifier",isDocsHomePage:!1,title:"TealiumAdIdentifier",description:"This module depends on the Tealium Cordova Plugin. Without it, this module will not do anything.",source:"@site/versioned_docs/version-v5/native/tealium-adidentifier.md",sourceDirName:"native",slug:"/native/tealium-adidentifier",permalink:"/docs/v5/native/tealium-adidentifier",editUrl:"https://github.com/ionic-team/ionic-native/edit/master/src/@awesome-cordova-plugins/plugins/tealium-adidentifier/index.ts",tags:[],version:"v5",frontMatter:{sidebar_label:"TealiumAdIdentifier"},sidebar:"version-v5/native",previous:{title:"Taptic Engine",permalink:"/docs/v5/native/taptic-engine"},next:{title:"TealiumInstallReferrer",permalink:"/docs/v5/native/tealium-installreferrer"}},p=[{value:"Supported Platforms",id:"supported-platforms",children:[],level:2},{value:"Usage",id:"usage",children:[{value:"React",id:"react",children:[],level:3},{value:"Angular",id:"angular",children:[],level:3}],level:2}],v={toc:p};function h(e){let{components:a,...t}=e;return(0,i.kt)("wrapper",(0,n.Z)({},v,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"tealiumadidentifier"},"TealiumAdIdentifier"),(0,i.kt)("p",null,"This module depends on the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/tealium/cordova-plugin"},"Tealium Cordova Plugin"),". Without it, this module will not do anything.\nMakes the IDFA and Google Ad Identifier available in the Tealium data layer."),(0,i.kt)("p",null,(0,i.kt)("a",{href:"https://github.com/Tealium/cordova-plugin",target:"_blank",rel:"noopener",className:"git-link"},(0,i.kt)("svg",{viewBox:"0 0 512 512"},(0,i.kt)("path",{d:"M416 160c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 23.7 12.9 44.3 32 55.4v8.6c0 19.9-7.8 33.7-25.3 44.9-15.4 9.8-38.1 17.1-67.5 21.5-14 2.1-25.7 6-35.2 10.7V151.4c19.1-11.1 32-31.7 32-55.4 0-35.3-28.7-64-64-64S96 60.7 96 96c0 23.7 12.9 44.3 32 55.4v209.2c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-16.6-6.3-31.7-16.7-43.1 1.9-4.9 9.7-16.3 29.4-19.3 38.8-5.8 68.9-15.9 92.3-30.8 36-22.8 55-57 55-98.8v-8.6c19.1-11.1 32-31.7 32-55.4zM160 56c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm0 400c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm192-256c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"}))," ","https://github.com/Tealium/cordova-plugin")),(0,i.kt)("h2",null,"Stuck on a Cordova issue?"),(0,i.kt)(r.Z,{className:"cordova-ee-card",header:"Don't waste precious time on plugin issues.",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Native",mdxType:"DocsCard"},(0,i.kt)("div",null,(0,i.kt)("img",{src:"/docs/icons/native-cordova-bot.png",class:"cordova-ee-img"}),(0,i.kt)("p",null,"If you're building a serious project, you can't afford to spend hours troubleshooting. Ionic\u2019s experts offer premium advisory services for both community plugins and premier plugins."),(0,i.kt)(l.Z,{className:"native-ee-detail",mdxType:"DocsButton"},"Contact Us Today!"))),(0,i.kt)("h2",{id:"installation"},(0,i.kt)("a",{href:"#installation"},"Installation")),(0,i.kt)(o.Z,{groupId:"runtime",defaultValue:"Capacitor",values:[{value:"Capacitor",label:"Capacitor"},{value:"Cordova",label:"Cordova"},{value:"Enterprise",label:"Enterprise"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"Capacitor",mdxType:"TabItem"},(0,i.kt)(c.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ npm install tealium-cordova-adidentifier ","\n","$ npm install @awesome-cordova-plugins/tealium-adidentifier ","\n","$ ionic cap sync")),(0,i.kt)(s.Z,{value:"Cordova",mdxType:"TabItem"},(0,i.kt)(c.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ ionic cordova plugin add tealium-cordova-adidentifier ","\n","$ npm install @awesome-cordova-plugins/tealium-adidentifier ","\n")),(0,i.kt)(s.Z,{value:"Enterprise",mdxType:"TabItem"},(0,i.kt)("blockquote",null,"Ionic Enterprise comes with fully supported and maintained plugins from the Ionic Team. \xa0",(0,i.kt)("a",{class:"btn",href:"https://ionic.io/docs/premier-plugins"},"Learn More")," or if you're interested in an enterprise version of this plugin ",(0,i.kt)("a",{class:"btn",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine"},"Contact Us")))),(0,i.kt)("h2",{id:"supported-platforms"},"Supported Platforms"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Android"),(0,i.kt)("li",{parentName:"ul"},"iOS")),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("h3",{id:"react"},"React"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/v5/native/community#react"},"Learn more about using Ionic Native components in React")),(0,i.kt)("h3",{id:"angular"},"Angular"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'import { TealiumAdIdentifier } from \'@awesome-cordova-plugins/tealium-adidentifier/ngx\';\n\n\nconstructor(private adIdentifier: TealiumAdIdentifier) { }\n\n...\n\n\nthis.adIdentifier.setPersistent("main");\nthis.adIdentifier.setVolatile("main");\n\n')))}h.isMDXComponent=!0}}]);