"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[26595],{58215:(e,a,n)=>{n.d(a,{Z:()=>s});var t=n(67294);const s=function(e){let{children:a,hidden:n,className:s}=e;return t.createElement("div",{role:"tabpanel",hidden:n,className:s},a)}},26396:(e,a,n)=>{n.d(a,{Z:()=>m});var t=n(87462),s=n(67294),r=n(72389),i=n(79443);const o=function(){const e=(0,s.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var l=n(89521),c=n(86010);const d="tabItem_vU9c";function u(e){var a,n;const{lazy:t,block:r,defaultValue:i,values:u,groupId:m,className:p}=e,g=s.Children.map(e.children,(e=>{if((0,s.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=u??g.map((e=>{let{props:{value:a,label:n}}=e;return{value:a,label:n}})),f=(0,l.lx)(v,((e,a)=>e.value===a.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===i?i:i??(null==(a=g.find((e=>e.props.default)))?void 0:a.props.value)??(null==(n=g[0])?void 0:n.props.value);if(null!==h&&!v.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:k}=o(),[C,E]=(0,s.useState)(h),N=[],{blockElementScrollPositionUntilNextRender:y}=(0,l.o5)();if(null!=m){const e=b[m];null!=e&&e!==C&&v.some((a=>a.value===e))&&E(e)}const w=e=>{const a=e.currentTarget,n=N.indexOf(a),t=v[n].value;t!==C&&(y(a),E(t),null!=m&&k(m,t))},Z=e=>{var a;let n=null;switch(e.key){case"ArrowRight":{const a=N.indexOf(e.currentTarget)+1;n=N[a]||N[0];break}case"ArrowLeft":{const a=N.indexOf(e.currentTarget)-1;n=N[a]||N[N.length-1];break}}null==(a=n)||a.focus()};return s.createElement("div",{className:"tabs-container"},s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":r},p)},v.map((e=>{let{value:a,label:n}=e;return s.createElement("li",{role:"tab",tabIndex:C===a?0:-1,"aria-selected":C===a,className:(0,c.Z)("tabs__item",d,{"tabs__item--active":C===a}),key:a,ref:e=>N.push(e),onKeyDown:Z,onFocus:w,onClick:w},n??a)}))),t?(0,s.cloneElement)(g.filter((e=>e.props.value===C))[0],{className:"margin-vert--md"}):s.createElement("div",{className:"margin-vert--md"},g.map(((e,a)=>(0,s.cloneElement)(e,{key:a,hidden:e.props.value!==C})))))}function m(e){const a=(0,r.Z)();return s.createElement(u,(0,t.Z)({key:String(a)},e))}},47758:(e,a,n)=>{n.d(a,{Z:()=>l});var t=n(67294),s=n(86010),r=n(39960),i=n(44996);const o="card_7QME";const l=function(e){const a=void 0===e.href,n=void 0!==e.href&&/^http/.test(e.href),l="undefined"===e.header?null:t.createElement("header",{className:"Card-header"},e.header),c=e.hoverIcon||e.icon,d=t.createElement(t.Fragment,null,e.img&&t.createElement("img",{src:(0,i.Z)(e.img),className:"Card-image"}),t.createElement("div",{className:"Card-container"},(e.icon||c)&&t.createElement("div",{className:"Card-icon-row"},e.icon&&t.createElement("img",{src:(0,i.Z)(e.icon),className:"Card-icon Card-icon-default"}),c&&t.createElement("img",{src:(0,i.Z)(c),className:"Card-icon Card-icon-hover"})),e.ionicon&&t.createElement("ion-icon",{name:e.ionicon,className:"Card-ionicon"}),e.iconset&&t.createElement("div",{className:"Card-iconset__container"},e.iconset.split(",").map(((a,n)=>t.createElement("img",{src:(0,i.Z)(a),className:"Card-icon "+(n===e.activeIndex?"Card-icon-active":""),"data-index":n,key:n})))),e.header&&l,t.createElement("div",{className:"Card-content"},e.children))),u=(0,s.Z)({"Card-with-image":void 0!==e.img,"Card-without-image":void 0===e.img,"Card-size-lg":"lg"===e.size,[e.className]:e.className});return a?t.createElement("docs-card",{class:u},t.createElement("div",{className:(0,s.Z)(o,"docs-card")},d)):n?t.createElement("docs-card",{class:u},t.createElement("a",{className:(0,s.Z)(o,"docs-card"),href:e.href,target:"_blank"},d)):t.createElement("docs-card",{class:u},t.createElement(r.default,{to:e.href,className:(0,s.Z)(o,"docs-card")},d))}},88694:(e,a,n)=>{n.d(a,{Z:()=>l});var t=n(87462),s=n(86010),r=n(67294);const i="docsButton_1mtQ",o="docsButtonRound_ZJZD";function l(e){let{href:a,round:n=!1,...l}=e;return l.className=(0,s.Z)({[l.className]:Boolean(l.className),[i]:!0,"docs-button":!0,[o]:n,"docs-button--round":n}),a?r.createElement("a",(0,t.Z)({href:a,className:"docsButton"},l),l.children):r.createElement("button",(0,t.Z)({className:"docsButton"},l),l.children)}},61136:(e,a,n)=>{n.r(a),n.d(a,{contentTitle:()=>u,default:()=>v,frontMatter:()=>d,metadata:()=>m,toc:()=>p});var t=n(87462),s=(n(67294),n(3905)),r=n(47758),i=n(88694),o=n(26396),l=n(58215),c=n(19055);const d={title:"Firebase Messaging"},u=void 0,m={unversionedId:"native/firebase-messaging",id:"native/firebase-messaging",isDocsHomePage:!1,title:"Firebase Messaging",description:"Firebase Messaging: Cordova Plugin for Android and iOS | Ionic",source:"@site/docs/native/firebase-messaging.md",sourceDirName:"native",slug:"/native/firebase-messaging",permalink:"/docs/native/firebase-messaging",editUrl:"https://github.com/ionic-team/ionic-native/edit/master/src/@awesome-cordova-plugins/plugins/firebase-messaging/index.ts",tags:[],version:"current",frontMatter:{title:"Firebase Messaging"},sidebar:"native",previous:{title:"Firebase Dynamic Links",permalink:"/docs/native/firebase-dynamic-links"},next:{title:"Firebase Vision",permalink:"/docs/native/firebase-vision"}},p=[{value:"Supported Platforms",id:"supported-platforms",children:[],level:2},{value:"Usage",id:"usage",children:[{value:"React",id:"react",children:[],level:3},{value:"Angular",id:"angular",children:[],level:3}],level:2}],g={toc:p};function v(e){let{components:a,...n}=e;return(0,s.kt)("wrapper",(0,t.Z)({},g,n,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("head",null,(0,s.kt)("title",null,"Firebase Messaging: Cordova Plugin for Android and iOS | Ionic"),(0,s.kt)("meta",{name:"description",content:"Learn to install and use the Cordova firebase messaging plugin for Ionic apps on Android and iOS devices. Read our documentation for more information."})),(0,s.kt)("p",null,"Cordova plugin for Firebase Messaging"),(0,s.kt)("p",null,(0,s.kt)("a",{href:"https://github.com/chemerisuk/cordova-plugin-firebase-messaging",target:"_blank",rel:"noopener",className:"git-link"},(0,s.kt)("svg",{viewBox:"0 0 512 512"},(0,s.kt)("path",{d:"M416 160c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 23.7 12.9 44.3 32 55.4v8.6c0 19.9-7.8 33.7-25.3 44.9-15.4 9.8-38.1 17.1-67.5 21.5-14 2.1-25.7 6-35.2 10.7V151.4c19.1-11.1 32-31.7 32-55.4 0-35.3-28.7-64-64-64S96 60.7 96 96c0 23.7 12.9 44.3 32 55.4v209.2c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-16.6-6.3-31.7-16.7-43.1 1.9-4.9 9.7-16.3 29.4-19.3 38.8-5.8 68.9-15.9 92.3-30.8 36-22.8 55-57 55-98.8v-8.6c19.1-11.1 32-31.7 32-55.4zM160 56c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm0 400c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm192-256c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"}))," https://github.com/chemerisuk/cordova-plugin-firebase-messaging")),(0,s.kt)("h2",null,"Stuck on a Cordova issue?"),(0,s.kt)(r.Z,{className:"cordova-ee-card",header:"Don't waste precious time on plugin issues.",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Native",mdxType:"DocsCard"},(0,s.kt)("div",null,(0,s.kt)("img",{src:"/docs/icons/native-cordova-bot.png",class:"cordova-ee-img"}),(0,s.kt)("p",null,"If you're building a serious project, you can't afford to spend hours troubleshooting. Ionic\u2019s experts offer premium advisory services for both community plugins and premier plugins."),(0,s.kt)(i.Z,{className:"native-ee-detail",mdxType:"DocsButton"},"Contact Us Today!"))),(0,s.kt)("h2",{id:"installation"},(0,s.kt)("a",{href:"#installation"},"Installation")),(0,s.kt)(o.Z,{defaultValue:"Capacitor",groupId:"runtime",values:[{value:"Capacitor",label:"Capacitor"},{value:"Cordova",label:"Cordova"},{value:"Enterprise",label:"Enterprise"}],mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"Capacitor",mdxType:"TabItem"},(0,s.kt)(c.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ npm install cordova-plugin-firebase-messaging ","\n","$ npm install @awesome-cordova-plugins/firebase-messaging ","\n","$ ionic cap sync")),(0,s.kt)(l.Z,{value:"Cordova",mdxType:"TabItem"},(0,s.kt)(c.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ ionic cordova plugin add cordova-plugin-firebase-messaging ","\n","$ npm install @awesome-cordova-plugins/firebase-messaging ","\n")),(0,s.kt)(l.Z,{value:"Enterprise",mdxType:"TabItem"},(0,s.kt)("blockquote",null,"Ionic Enterprise comes with fully supported and maintained plugins from the Ionic Team. \xa0",(0,s.kt)("a",{class:"btn",href:"https://ionic.io/docs/premier-plugins"},"Learn More")," or if you're interested in an enterprise version of this plugin ",(0,s.kt)("a",{class:"btn",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine"},"Contact Us")))),(0,s.kt)("h2",{id:"supported-platforms"},"Supported Platforms"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Android"),(0,s.kt)("li",{parentName:"ul"},"iOS")),(0,s.kt)("h2",{id:"usage"},"Usage"),(0,s.kt)("h3",{id:"react"},"React"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/docs/native/community#react"},"Learn more about using Ionic Native components in React")),(0,s.kt)("h3",{id:"angular"},"Angular"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"import { FirebaseMessaging } from '@awesome-cordova-plugins/firebase-messaging/ngx';\n\n\nconstructor(private firebaseMessaging: FirebaseMessaging) { }\n\n...\n\n\nthis.firebaseMessaging.logEvent('page_view', {page: \"dashboard\"})\n  .then((res: any) => console.log(res))\n  .catch((error: any) => console.error(error));\n\n")))}v.isMDXComponent=!0}}]);