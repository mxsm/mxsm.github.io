"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[62763],{58215:(e,a,t)=>{t.d(a,{Z:()=>n});var i=t(67294);const n=function(e){let{children:a,hidden:t,className:n}=e;return i.createElement("div",{role:"tabpanel",hidden:t,className:n},a)}},26396:(e,a,t)=>{t.d(a,{Z:()=>u});var i=t(87462),n=t(67294),l=t(72389),o=t(79443);const r=function(){const e=(0,n.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var s=t(89521),c=t(86010);const d="tabItem_vU9c";function p(e){var a,t;const{lazy:i,block:l,defaultValue:o,values:p,groupId:u,className:m}=e,v=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=p??v.map((e=>{let{props:{value:a,label:t}}=e;return{value:a,label:t}})),b=(0,s.lx)(h,((e,a)=>e.value===a.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===o?o:o??(null==(a=v.find((e=>e.props.default)))?void 0:a.props.value)??(null==(t=v[0])?void 0:t.props.value);if(null!==g&&!h.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:f,setTabGroupChoices:k}=r(),[y,N]=(0,n.useState)(g),E=[],{blockElementScrollPositionUntilNextRender:C}=(0,s.o5)();if(null!=u){const e=f[u];null!=e&&e!==y&&h.some((a=>a.value===e))&&N(e)}const w=e=>{const a=e.currentTarget,t=E.indexOf(a),i=h[t].value;i!==y&&(C(a),N(i),null!=u&&k(u,i))},A=e=>{var a;let t=null;switch(e.key){case"ArrowRight":{const a=E.indexOf(e.currentTarget)+1;t=E[a]||E[0];break}case"ArrowLeft":{const a=E.indexOf(e.currentTarget)-1;t=E[a]||E[E.length-1];break}}null==(a=t)||a.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":l},m)},h.map((e=>{let{value:a,label:t}=e;return n.createElement("li",{role:"tab",tabIndex:y===a?0:-1,"aria-selected":y===a,className:(0,c.Z)("tabs__item",d,{"tabs__item--active":y===a}),key:a,ref:e=>E.push(e),onKeyDown:A,onFocus:w,onClick:w},t??a)}))),i?(0,n.cloneElement)(v.filter((e=>e.props.value===y))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},v.map(((e,a)=>(0,n.cloneElement)(e,{key:a,hidden:e.props.value!==y})))))}function u(e){const a=(0,l.Z)();return n.createElement(p,(0,i.Z)({key:String(a)},e))}},47758:(e,a,t)=>{t.d(a,{Z:()=>s});var i=t(67294),n=t(86010),l=t(39960),o=t(44996);const r="card_7QME";const s=function(e){const a=void 0===e.href,t=void 0!==e.href&&/^http/.test(e.href),s="undefined"===e.header?null:i.createElement("header",{className:"Card-header"},e.header),c=e.hoverIcon||e.icon,d=i.createElement(i.Fragment,null,e.img&&i.createElement("img",{src:(0,o.Z)(e.img),className:"Card-image"}),i.createElement("div",{className:"Card-container"},(e.icon||c)&&i.createElement("div",{className:"Card-icon-row"},e.icon&&i.createElement("img",{src:(0,o.Z)(e.icon),className:"Card-icon Card-icon-default"}),c&&i.createElement("img",{src:(0,o.Z)(c),className:"Card-icon Card-icon-hover"})),e.ionicon&&i.createElement("ion-icon",{name:e.ionicon,className:"Card-ionicon"}),e.iconset&&i.createElement("div",{className:"Card-iconset__container"},e.iconset.split(",").map(((a,t)=>i.createElement("img",{src:(0,o.Z)(a),className:"Card-icon "+(t===e.activeIndex?"Card-icon-active":""),"data-index":t,key:t})))),e.header&&s,i.createElement("div",{className:"Card-content"},e.children))),p=(0,n.Z)({"Card-with-image":void 0!==e.img,"Card-without-image":void 0===e.img,"Card-size-lg":"lg"===e.size,[e.className]:e.className});return a?i.createElement("docs-card",{class:p},i.createElement("div",{className:(0,n.Z)(r,"docs-card")},d)):t?i.createElement("docs-card",{class:p},i.createElement("a",{className:(0,n.Z)(r,"docs-card"),href:e.href,target:"_blank"},d)):i.createElement("docs-card",{class:p},i.createElement(l.default,{to:e.href,className:(0,n.Z)(r,"docs-card")},d))}},88694:(e,a,t)=>{t.d(a,{Z:()=>s});var i=t(87462),n=t(86010),l=t(67294);const o="docsButton_1mtQ",r="docsButtonRound_ZJZD";function s(e){let{href:a,round:t=!1,...s}=e;return s.className=(0,n.Z)({[s.className]:Boolean(s.className),[o]:!0,"docs-button":!0,[r]:t,"docs-button--round":t}),a?l.createElement("a",(0,i.Z)({href:a,className:"docsButton"},s),s.children):l.createElement("button",(0,i.Z)({className:"docsButton"},s),s.children)}},81395:(e,a,t)=>{t.r(a),t.d(a,{contentTitle:()=>p,default:()=>h,frontMatter:()=>d,metadata:()=>u,toc:()=>m});var i=t(87462),n=(t(67294),t(3905)),l=t(47758),o=t(88694),r=t(26396),s=t(58215),c=t(19055);const d={sidebar_label:"App Availability"},p="App Availability",u={unversionedId:"native/app-availability",id:"version-v5/native/app-availability",isDocsHomePage:!1,title:"App Availability",description:"This plugin allows you to check if an app is installed on the user's device. It requires an URI Scheme (e.g. twitter://) on iOS or a Package Name (e.g com.twitter.android) on Android.",source:"@site/versioned_docs/version-v5/native/app-availability.md",sourceDirName:"native",slug:"/native/app-availability",permalink:"/docs/v5/native/app-availability",editUrl:"https://github.com/ionic-team/ionic-native/edit/master/src/@awesome-cordova-plugins/plugins/app-availability/index.ts",tags:[],version:"v5",frontMatter:{sidebar_label:"App Availability"},sidebar:"version-v5/native",previous:{title:"Anyline",permalink:"/docs/v5/native/anyline"},next:{title:"App Center Analytics",permalink:"/docs/v5/native/app-center-analytics"}},m=[{value:"Supported Platforms",id:"supported-platforms",children:[],level:2},{value:"Usage",id:"usage",children:[{value:"React",id:"react",children:[],level:3},{value:"Angular",id:"angular",children:[],level:3}],level:2}],v={toc:m};function h(e){let{components:a,...t}=e;return(0,n.kt)("wrapper",(0,i.Z)({},v,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"app-availability"},"App Availability"),(0,n.kt)("p",null,"This plugin allows you to check if an app is installed on the user's device. It requires an URI Scheme (e.g. twitter://) on iOS or a Package Name (e.g com.twitter.android) on Android."),(0,n.kt)("p",null,"Requires Cordova plugin: cordova-plugin-appavailability. For more info, please see the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ohh2ahh/AppAvailability"},"AppAvailability plugin docs"),"."),(0,n.kt)("p",null,(0,n.kt)("a",{href:"https://github.com/ohh2ahh/AppAvailability",target:"_blank",rel:"noopener",className:"git-link"},(0,n.kt)("svg",{viewBox:"0 0 512 512"},(0,n.kt)("path",{d:"M416 160c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 23.7 12.9 44.3 32 55.4v8.6c0 19.9-7.8 33.7-25.3 44.9-15.4 9.8-38.1 17.1-67.5 21.5-14 2.1-25.7 6-35.2 10.7V151.4c19.1-11.1 32-31.7 32-55.4 0-35.3-28.7-64-64-64S96 60.7 96 96c0 23.7 12.9 44.3 32 55.4v209.2c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-16.6-6.3-31.7-16.7-43.1 1.9-4.9 9.7-16.3 29.4-19.3 38.8-5.8 68.9-15.9 92.3-30.8 36-22.8 55-57 55-98.8v-8.6c19.1-11.1 32-31.7 32-55.4zM160 56c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm0 400c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm192-256c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"}))," ","https://github.com/ohh2ahh/AppAvailability")),(0,n.kt)("h2",null,"Stuck on a Cordova issue?"),(0,n.kt)(l.Z,{className:"cordova-ee-card",header:"Don't waste precious time on plugin issues.",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Native",mdxType:"DocsCard"},(0,n.kt)("div",null,(0,n.kt)("img",{src:"/docs/icons/native-cordova-bot.png",class:"cordova-ee-img"}),(0,n.kt)("p",null,"If you're building a serious project, you can't afford to spend hours troubleshooting. Ionic\u2019s experts offer premium advisory services for both community plugins and premier plugins."),(0,n.kt)(o.Z,{className:"native-ee-detail",mdxType:"DocsButton"},"Contact Us Today!"))),(0,n.kt)("h2",{id:"installation"},(0,n.kt)("a",{href:"#installation"},"Installation")),(0,n.kt)(r.Z,{groupId:"runtime",defaultValue:"Capacitor",values:[{value:"Capacitor",label:"Capacitor"},{value:"Cordova",label:"Cordova"},{value:"Enterprise",label:"Enterprise"}],mdxType:"Tabs"},(0,n.kt)(s.Z,{value:"Capacitor",mdxType:"TabItem"},(0,n.kt)(c.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ npm install cordova-plugin-appavailability ","\n","$ npm install @awesome-cordova-plugins/app-availability ","\n","$ ionic cap sync")),(0,n.kt)(s.Z,{value:"Cordova",mdxType:"TabItem"},(0,n.kt)(c.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ ionic cordova plugin add cordova-plugin-appavailability ","\n","$ npm install @awesome-cordova-plugins/app-availability ","\n")),(0,n.kt)(s.Z,{value:"Enterprise",mdxType:"TabItem"},(0,n.kt)("blockquote",null,"Ionic Enterprise comes with fully supported and maintained plugins from the Ionic Team. \xa0",(0,n.kt)("a",{class:"btn",href:"https://ionic.io/docs/premier-plugins"},"Learn More")," or if you're interested in an enterprise version of this plugin ",(0,n.kt)("a",{class:"btn",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine"},"Contact Us")))),(0,n.kt)("h2",{id:"supported-platforms"},"Supported Platforms"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Android"),(0,n.kt)("li",{parentName:"ul"},"iOS")),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("h3",{id:"react"},"React"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/v5/native/community#react"},"Learn more about using Ionic Native components in React")),(0,n.kt)("h3",{id:"angular"},"Angular"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"import { AppAvailability } from '@awesome-cordova-plugins/app-availability/ngx';\nimport { Platform } from 'ionic-angular';\n\nconstructor(private appAvailability: AppAvailability, private platform: Platform) { }\n\n...\n\nlet app;\n\nif (this.platform.is('ios')) {\n  app = 'twitter://';\n} else if (this.platform.is('android')) {\n  app = 'com.twitter.android';\n}\n\nthis.appAvailability.check(app)\n  .then(\n    (yes: boolean) => console.log(app + ' is available'),\n    (no: boolean) => console.log(app + ' is NOT available')\n  );\n")))}h.isMDXComponent=!0}}]);