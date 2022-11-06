"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[7923],{58215:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294);const l=function(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",hidden:a,className:l},t)}},26396:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(87462),l=a(67294),o=a(72389),r=a(79443);const s=function(){const e=(0,l.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var i=a(89521),c=a(86010);const u="tabItem_vU9c";function d(e){var t,a;const{lazy:n,block:o,defaultValue:r,values:d,groupId:m,className:h}=e,p=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=d??p.map((e=>{let{props:{value:t,label:a}}=e;return{value:t,label:a}})),g=(0,i.lx)(v,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===r?r:r??(null==(t=p.find((e=>e.props.default)))?void 0:t.props.value)??(null==(a=p[0])?void 0:a.props.value);if(null!==f&&!v.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:k}=s(),[N,E]=(0,l.useState)(f),y=[],{blockElementScrollPositionUntilNextRender:C}=(0,i.o5)();if(null!=m){const e=b[m];null!=e&&e!==N&&v.some((t=>t.value===e))&&E(e)}const w=e=>{const t=e.currentTarget,a=y.indexOf(t),n=v[a].value;n!==N&&(C(t),E(n),null!=m&&k(m,n))},Z=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{const t=y.indexOf(e.currentTarget)+1;a=y[t]||y[0];break}case"ArrowLeft":{const t=y.indexOf(e.currentTarget)-1;a=y[t]||y[y.length-1];break}}null==(t=a)||t.focus()};return l.createElement("div",{className:"tabs-container"},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":o},h)},v.map((e=>{let{value:t,label:a}=e;return l.createElement("li",{role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,className:(0,c.Z)("tabs__item",u,{"tabs__item--active":N===t}),key:t,ref:e=>y.push(e),onKeyDown:Z,onFocus:w,onClick:w},a??t)}))),n?(0,l.cloneElement)(p.filter((e=>e.props.value===N))[0],{className:"margin-vert--md"}):l.createElement("div",{className:"margin-vert--md"},p.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function m(e){const t=(0,o.Z)();return l.createElement(d,(0,n.Z)({key:String(t)},e))}},47758:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),l=a(86010),o=a(39960),r=a(44996);const s="card_7QME";const i=function(e){const t=void 0===e.href,a=void 0!==e.href&&/^http/.test(e.href),i="undefined"===e.header?null:n.createElement("header",{className:"Card-header"},e.header),c=e.hoverIcon||e.icon,u=n.createElement(n.Fragment,null,e.img&&n.createElement("img",{src:(0,r.Z)(e.img),className:"Card-image"}),n.createElement("div",{className:"Card-container"},(e.icon||c)&&n.createElement("div",{className:"Card-icon-row"},e.icon&&n.createElement("img",{src:(0,r.Z)(e.icon),className:"Card-icon Card-icon-default"}),c&&n.createElement("img",{src:(0,r.Z)(c),className:"Card-icon Card-icon-hover"})),e.ionicon&&n.createElement("ion-icon",{name:e.ionicon,className:"Card-ionicon"}),e.iconset&&n.createElement("div",{className:"Card-iconset__container"},e.iconset.split(",").map(((t,a)=>n.createElement("img",{src:(0,r.Z)(t),className:"Card-icon "+(a===e.activeIndex?"Card-icon-active":""),"data-index":a,key:a})))),e.header&&i,n.createElement("div",{className:"Card-content"},e.children))),d=(0,l.Z)({"Card-with-image":void 0!==e.img,"Card-without-image":void 0===e.img,"Card-size-lg":"lg"===e.size,[e.className]:e.className});return t?n.createElement("docs-card",{class:d},n.createElement("div",{className:(0,l.Z)(s,"docs-card")},u)):a?n.createElement("docs-card",{class:d},n.createElement("a",{className:(0,l.Z)(s,"docs-card"),href:e.href,target:"_blank"},u)):n.createElement("docs-card",{class:d},n.createElement(o.default,{to:e.href,className:(0,l.Z)(s,"docs-card")},u))}},88694:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(87462),l=a(86010),o=a(67294);const r="docsButton_1mtQ",s="docsButtonRound_ZJZD";function i(e){let{href:t,round:a=!1,...i}=e;return i.className=(0,l.Z)({[i.className]:Boolean(i.className),[r]:!0,"docs-button":!0,[s]:a,"docs-button--round":a}),t?o.createElement("a",(0,n.Z)({href:t,className:"docsButton"},i),i.children):o.createElement("button",(0,n.Z)({className:"docsButton"},i),i.children)}},70380:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>d,default:()=>v,frontMatter:()=>u,metadata:()=>m,toc:()=>h});var n=a(87462),l=(a(67294),a(3905)),o=a(47758),r=a(88694),s=a(26396),i=a(58215),c=a(19055);const u={title:"Flashlight"},d=void 0,m={unversionedId:"native/flashlight",id:"native/flashlight",isDocsHomePage:!1,title:"Flashlight",description:"This plugin allows you to switch the flashlight / torch of the device on and off.",source:"@site/docs/native/flashlight.md",sourceDirName:"native",slug:"/native/flashlight",permalink:"/docs/native/flashlight",editUrl:"https://github.com/ionic-team/ionic-native/edit/master/src/@awesome-cordova-plugins/plugins/flashlight/index.ts",tags:[],version:"current",frontMatter:{title:"Flashlight"},sidebar:"native",previous:{title:"Firebase",permalink:"/docs/native/firebase"},next:{title:"Foreground Service",permalink:"/docs/native/foreground-service"}},h=[{value:"Supported Platforms",id:"supported-platforms",children:[],level:2},{value:"Usage",id:"usage",children:[{value:"React",id:"react",children:[],level:3},{value:"Angular",id:"angular",children:[],level:3}],level:2}],p={toc:h};function v(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This plugin allows you to switch the flashlight / torch of the device on and off."),(0,l.kt)("p",null,"Requires Cordova plugin: ",(0,l.kt)("inlineCode",{parentName:"p"},"cordova-plugin-flashlight"),". For more info, please see the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/EddyVerbruggen/Flashlight-PhoneGap-Plugin"},"Flashlight plugin docs"),"."),(0,l.kt)("p",null,(0,l.kt)("a",{href:"https://github.com/EddyVerbruggen/Flashlight-PhoneGap-Plugin",target:"_blank",rel:"noopener",className:"git-link"},(0,l.kt)("svg",{viewBox:"0 0 512 512"},(0,l.kt)("path",{d:"M416 160c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 23.7 12.9 44.3 32 55.4v8.6c0 19.9-7.8 33.7-25.3 44.9-15.4 9.8-38.1 17.1-67.5 21.5-14 2.1-25.7 6-35.2 10.7V151.4c19.1-11.1 32-31.7 32-55.4 0-35.3-28.7-64-64-64S96 60.7 96 96c0 23.7 12.9 44.3 32 55.4v209.2c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-16.6-6.3-31.7-16.7-43.1 1.9-4.9 9.7-16.3 29.4-19.3 38.8-5.8 68.9-15.9 92.3-30.8 36-22.8 55-57 55-98.8v-8.6c19.1-11.1 32-31.7 32-55.4zM160 56c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm0 400c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm192-256c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"}))," https://github.com/EddyVerbruggen/Flashlight-PhoneGap-Plugin")),(0,l.kt)("h2",null,"Stuck on a Cordova issue?"),(0,l.kt)(o.Z,{className:"cordova-ee-card",header:"Don't waste precious time on plugin issues.",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Native",mdxType:"DocsCard"},(0,l.kt)("div",null,(0,l.kt)("img",{src:"/docs/icons/native-cordova-bot.png",class:"cordova-ee-img"}),(0,l.kt)("p",null,"If you're building a serious project, you can't afford to spend hours troubleshooting. Ionic\u2019s experts offer premium advisory services for both community plugins and premier plugins."),(0,l.kt)(r.Z,{className:"native-ee-detail",mdxType:"DocsButton"},"Contact Us Today!"))),(0,l.kt)("h2",{id:"installation"},(0,l.kt)("a",{href:"#installation"},"Installation")),(0,l.kt)(s.Z,{defaultValue:"Capacitor",groupId:"runtime",values:[{value:"Capacitor",label:"Capacitor"},{value:"Cordova",label:"Cordova"},{value:"Enterprise",label:"Enterprise"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"Capacitor",mdxType:"TabItem"},(0,l.kt)(c.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ npm install cordova-plugin-flashlight ","\n","$ npm install @awesome-cordova-plugins/flashlight ","\n","$ ionic cap sync")),(0,l.kt)(i.Z,{value:"Cordova",mdxType:"TabItem"},(0,l.kt)(c.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ ionic cordova plugin add cordova-plugin-flashlight ","\n","$ npm install @awesome-cordova-plugins/flashlight ","\n")),(0,l.kt)(i.Z,{value:"Enterprise",mdxType:"TabItem"},(0,l.kt)("blockquote",null,"Ionic Enterprise comes with fully supported and maintained plugins from the Ionic Team. \xa0",(0,l.kt)("a",{class:"btn",href:"https://ionic.io/docs/premier-plugins"},"Learn More")," or if you're interested in an enterprise version of this plugin ",(0,l.kt)("a",{class:"btn",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine"},"Contact Us")))),(0,l.kt)("h2",{id:"supported-platforms"},"Supported Platforms"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Android"),(0,l.kt)("li",{parentName:"ul"},"iOS"),(0,l.kt)("li",{parentName:"ul"},"Windows Phone 8")),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("h3",{id:"react"},"React"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/native/community#react"},"Learn more about using Ionic Native components in React")),(0,l.kt)("h3",{id:"angular"},"Angular"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Flashlight } from '@awesome-cordova-plugins/flashlight/ngx';\n\nconstructor(private flashlight: Flashlight) { }\n\n...\n\nthis.flashlight.switchOn();\n\n")))}v.isMDXComponent=!0}}]);