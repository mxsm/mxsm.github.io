"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[46664],{58215:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294);const o=function(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",hidden:a,className:o},t)}},26396:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(87462),o=a(67294),r=a(72389),s=a(79443);const i=function(){const e=(0,o.useContext)(s.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var l=a(89521),c=a(86010);const d="tabItem_vU9c";function u(e){var t,a;const{lazy:n,block:r,defaultValue:s,values:u,groupId:m,className:p}=e,v=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=u??v.map((e=>{let{props:{value:t,label:a}}=e;return{value:t,label:a}})),f=(0,l.lx)(h,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===s?s:s??(null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)??(null==(a=v[0])?void 0:a.props.value);if(null!==g&&!h.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:b}=i(),[C,E]=(0,o.useState)(g),N=[],{blockElementScrollPositionUntilNextRender:y}=(0,l.o5)();if(null!=m){const e=k[m];null!=e&&e!==C&&h.some((t=>t.value===e))&&E(e)}const P=e=>{const t=e.currentTarget,a=N.indexOf(t),n=h[a].value;n!==C&&(y(t),E(n),null!=m&&b(m,n))},w=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{const t=N.indexOf(e.currentTarget)+1;a=N[t]||N[0];break}case"ArrowLeft":{const t=N.indexOf(e.currentTarget)-1;a=N[t]||N[N.length-1];break}}null==(t=a)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":r},p)},h.map((e=>{let{value:t,label:a}=e;return o.createElement("li",{role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,className:(0,c.Z)("tabs__item",d,{"tabs__item--active":C===t}),key:t,ref:e=>N.push(e),onKeyDown:w,onFocus:P,onClick:P},a??t)}))),n?(0,o.cloneElement)(v.filter((e=>e.props.value===C))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},v.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==C})))))}function m(e){const t=(0,r.Z)();return o.createElement(u,(0,n.Z)({key:String(t)},e))}},47758:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),o=a(86010),r=a(39960),s=a(44996);const i="card_7QME";const l=function(e){const t=void 0===e.href,a=void 0!==e.href&&/^http/.test(e.href),l="undefined"===e.header?null:n.createElement("header",{className:"Card-header"},e.header),c=e.hoverIcon||e.icon,d=n.createElement(n.Fragment,null,e.img&&n.createElement("img",{src:(0,s.Z)(e.img),className:"Card-image"}),n.createElement("div",{className:"Card-container"},(e.icon||c)&&n.createElement("div",{className:"Card-icon-row"},e.icon&&n.createElement("img",{src:(0,s.Z)(e.icon),className:"Card-icon Card-icon-default"}),c&&n.createElement("img",{src:(0,s.Z)(c),className:"Card-icon Card-icon-hover"})),e.ionicon&&n.createElement("ion-icon",{name:e.ionicon,className:"Card-ionicon"}),e.iconset&&n.createElement("div",{className:"Card-iconset__container"},e.iconset.split(",").map(((t,a)=>n.createElement("img",{src:(0,s.Z)(t),className:"Card-icon "+(a===e.activeIndex?"Card-icon-active":""),"data-index":a,key:a})))),e.header&&l,n.createElement("div",{className:"Card-content"},e.children))),u=(0,o.Z)({"Card-with-image":void 0!==e.img,"Card-without-image":void 0===e.img,"Card-size-lg":"lg"===e.size,[e.className]:e.className});return t?n.createElement("docs-card",{class:u},n.createElement("div",{className:(0,o.Z)(i,"docs-card")},d)):a?n.createElement("docs-card",{class:u},n.createElement("a",{className:(0,o.Z)(i,"docs-card"),href:e.href,target:"_blank"},d)):n.createElement("docs-card",{class:u},n.createElement(r.default,{to:e.href,className:(0,o.Z)(i,"docs-card")},d))}},88694:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(87462),o=a(86010),r=a(67294);const s="docsButton_1mtQ",i="docsButtonRound_ZJZD";function l(e){let{href:t,round:a=!1,...l}=e;return l.className=(0,o.Z)({[l.className]:Boolean(l.className),[s]:!0,"docs-button":!0,[i]:a,"docs-button--round":a}),t?r.createElement("a",(0,n.Z)({href:t,className:"docsButton"},l),l.children):r.createElement("button",(0,n.Z)({className:"docsButton"},l),l.children)}},7042:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>u,default:()=>h,frontMatter:()=>d,metadata:()=>m,toc:()=>p});var n=a(87462),o=(a(67294),a(3905)),r=a(47758),s=a(88694),i=a(26396),l=a(58215),c=a(19055);const d={sidebar_label:"PSPDFKit-Cordova"},u="PSPDFKit-Cordova",m={unversionedId:"native/pspdfkit-cordova",id:"version-v5/native/pspdfkit-cordova",isDocsHomePage:!1,title:"PSPDFKit-Cordova",description:"The official plugin to use PSPDFKit with Cordova and Ionic.",source:"@site/versioned_docs/version-v5/native/pspdfkit-cordova.md",sourceDirName:"native",slug:"/native/pspdfkit-cordova",permalink:"/docs/v5/native/pspdfkit-cordova",editUrl:"https://github.com/ionic-team/ionic-native/edit/master/src/@awesome-cordova-plugins/plugins/pspdfkit-cordova/index.ts",tags:[],version:"v5",frontMatter:{sidebar_label:"PSPDFKit-Cordova"},sidebar:"version-v5/native",previous:{title:"Printer",permalink:"/docs/v5/native/printer"},next:{title:"Purchases",permalink:"/docs/v5/native/purchases"}},p=[{value:"Supported Platforms",id:"supported-platforms",children:[],level:2},{value:"Usage",id:"usage",children:[{value:"React",id:"react",children:[],level:3},{value:"Angular",id:"angular",children:[],level:3}],level:2}],v={toc:p};function h(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"pspdfkit-cordova"},"PSPDFKit-Cordova"),(0,o.kt)("p",null,"The official plugin to use PSPDFKit with Cordova and Ionic."),(0,o.kt)("p",null,(0,o.kt)("a",{href:"https://github.com/PSPDFKit/PSPDFKit-Cordova",target:"_blank",rel:"noopener",className:"git-link"},(0,o.kt)("svg",{viewBox:"0 0 512 512"},(0,o.kt)("path",{d:"M416 160c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 23.7 12.9 44.3 32 55.4v8.6c0 19.9-7.8 33.7-25.3 44.9-15.4 9.8-38.1 17.1-67.5 21.5-14 2.1-25.7 6-35.2 10.7V151.4c19.1-11.1 32-31.7 32-55.4 0-35.3-28.7-64-64-64S96 60.7 96 96c0 23.7 12.9 44.3 32 55.4v209.2c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-16.6-6.3-31.7-16.7-43.1 1.9-4.9 9.7-16.3 29.4-19.3 38.8-5.8 68.9-15.9 92.3-30.8 36-22.8 55-57 55-98.8v-8.6c19.1-11.1 32-31.7 32-55.4zM160 56c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm0 400c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm192-256c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"}))," ","https://github.com/PSPDFKit/PSPDFKit-Cordova")),(0,o.kt)("h2",null,"Stuck on a Cordova issue?"),(0,o.kt)(r.Z,{className:"cordova-ee-card",header:"Don't waste precious time on plugin issues.",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Native",mdxType:"DocsCard"},(0,o.kt)("div",null,(0,o.kt)("img",{src:"/docs/icons/native-cordova-bot.png",class:"cordova-ee-img"}),(0,o.kt)("p",null,"If you're building a serious project, you can't afford to spend hours troubleshooting. Ionic\u2019s experts offer premium advisory services for both community plugins and premier plugins."),(0,o.kt)(s.Z,{className:"native-ee-detail",mdxType:"DocsButton"},"Contact Us Today!"))),(0,o.kt)("h2",{id:"installation"},(0,o.kt)("a",{href:"#installation"},"Installation")),(0,o.kt)(i.Z,{groupId:"runtime",defaultValue:"Capacitor",values:[{value:"Capacitor",label:"Capacitor"},{value:"Cordova",label:"Cordova"},{value:"Enterprise",label:"Enterprise"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"Capacitor",mdxType:"TabItem"},(0,o.kt)(c.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ npm install pspdfkit-cordova ","\n","$ npm install @awesome-cordova-plugins/pspdfkit-cordova ","\n","$ ionic cap sync")),(0,o.kt)(l.Z,{value:"Cordova",mdxType:"TabItem"},(0,o.kt)(c.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ ionic cordova plugin add pspdfkit-cordova ","\n","$ npm install @awesome-cordova-plugins/pspdfkit-cordova ","\n")),(0,o.kt)(l.Z,{value:"Enterprise",mdxType:"TabItem"},(0,o.kt)("blockquote",null,"Ionic Enterprise comes with fully supported and maintained plugins from the Ionic Team. \xa0",(0,o.kt)("a",{class:"btn",href:"https://ionic.io/docs/premier-plugins"},"Learn More")," or if you're interested in an enterprise version of this plugin ",(0,o.kt)("a",{class:"btn",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine"},"Contact Us")))),(0,o.kt)("h2",{id:"supported-platforms"},"Supported Platforms"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Android"),(0,o.kt)("li",{parentName:"ul"},"iOS")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("h3",{id:"react"},"React"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/v5/native/community#react"},"Learn more about using Ionic Native components in React")),(0,o.kt)("h3",{id:"angular"},"Angular"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { PSPDFKit } from '@awesome-cordova-plugins/pspdfkit-cordova/ngx';\n\n\nconstructor(private pspdfkit: PSPDFKit) { }\n\n...\n\n// Set your license key here.\nthis.pspdfkit.setLicenseKey(\"YOUR KEY\");\n\n// Show a PDF in single page mode, with a black background.\nthis.pspdfkit.present('document.pdf', {pageMode: 'single', backgroundColor: \"black\"})\n  .then(result => {\n     console.log(result); // Success\n  })\n  .catch(error => {\n     console.log(error); // Failed\n  });\n}\n\n// Scroll to page at index 1.\nthis.pspdfkit.setPage(1, true);\n\n")))}h.isMDXComponent=!0}}]);