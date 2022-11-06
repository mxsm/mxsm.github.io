"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[17591],{58215:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294);const o=function(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",hidden:a,className:o},t)}},26396:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(87462),o=a(67294),i=a(72389),l=a(79443);const c=function(){const e=(0,o.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var s=a(89521),r=a(86010);const d="tabItem_vU9c";function u(e){var t,a;const{lazy:n,block:i,defaultValue:l,values:u,groupId:m,className:p}=e,v=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=u??v.map((e=>{let{props:{value:t,label:a}}=e;return{value:t,label:a}})),h=(0,s.lx)(f,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===l?l:l??(null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)??(null==(a=v[0])?void 0:a.props.value);if(null!==g&&!f.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:N}=c(),[b,y]=(0,o.useState)(g),E=[],{blockElementScrollPositionUntilNextRender:C}=(0,s.o5)();if(null!=m){const e=k[m];null!=e&&e!==b&&f.some((t=>t.value===e))&&y(e)}const w=e=>{const t=e.currentTarget,a=E.indexOf(t),n=f[a].value;n!==b&&(C(t),y(n),null!=m&&N(m,n))},x=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{const t=E.indexOf(e.currentTarget)+1;a=E[t]||E[0];break}case"ArrowLeft":{const t=E.indexOf(e.currentTarget)-1;a=E[t]||E[E.length-1];break}}null==(t=a)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":i},p)},f.map((e=>{let{value:t,label:a}=e;return o.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,r.Z)("tabs__item",d,{"tabs__item--active":b===t}),key:t,ref:e=>E.push(e),onKeyDown:x,onFocus:w,onClick:w},a??t)}))),n?(0,o.cloneElement)(v.filter((e=>e.props.value===b))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},v.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==b})))))}function m(e){const t=(0,i.Z)();return o.createElement(u,(0,n.Z)({key:String(t)},e))}},47758:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(67294),o=a(86010),i=a(39960),l=a(44996);const c="card_7QME";const s=function(e){const t=void 0===e.href,a=void 0!==e.href&&/^http/.test(e.href),s="undefined"===e.header?null:n.createElement("header",{className:"Card-header"},e.header),r=e.hoverIcon||e.icon,d=n.createElement(n.Fragment,null,e.img&&n.createElement("img",{src:(0,l.Z)(e.img),className:"Card-image"}),n.createElement("div",{className:"Card-container"},(e.icon||r)&&n.createElement("div",{className:"Card-icon-row"},e.icon&&n.createElement("img",{src:(0,l.Z)(e.icon),className:"Card-icon Card-icon-default"}),r&&n.createElement("img",{src:(0,l.Z)(r),className:"Card-icon Card-icon-hover"})),e.ionicon&&n.createElement("ion-icon",{name:e.ionicon,className:"Card-ionicon"}),e.iconset&&n.createElement("div",{className:"Card-iconset__container"},e.iconset.split(",").map(((t,a)=>n.createElement("img",{src:(0,l.Z)(t),className:"Card-icon "+(a===e.activeIndex?"Card-icon-active":""),"data-index":a,key:a})))),e.header&&s,n.createElement("div",{className:"Card-content"},e.children))),u=(0,o.Z)({"Card-with-image":void 0!==e.img,"Card-without-image":void 0===e.img,"Card-size-lg":"lg"===e.size,[e.className]:e.className});return t?n.createElement("docs-card",{class:u},n.createElement("div",{className:(0,o.Z)(c,"docs-card")},d)):a?n.createElement("docs-card",{class:u},n.createElement("a",{className:(0,o.Z)(c,"docs-card"),href:e.href,target:"_blank"},d)):n.createElement("docs-card",{class:u},n.createElement(i.default,{to:e.href,className:(0,o.Z)(c,"docs-card")},d))}},88694:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(87462),o=a(86010),i=a(67294);const l="docsButton_1mtQ",c="docsButtonRound_ZJZD";function s(e){let{href:t,round:a=!1,...s}=e;return s.className=(0,o.Z)({[s.className]:Boolean(s.className),[l]:!0,"docs-button":!0,[c]:a,"docs-button--round":a}),t?i.createElement("a",(0,n.Z)({href:t,className:"docsButton"},s),s.children):i.createElement("button",(0,n.Z)({className:"docsButton"},s),s.children)}},55632:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>u,default:()=>f,frontMatter:()=>d,metadata:()=>m,toc:()=>p});var n=a(87462),o=(a(67294),a(3905)),i=a(47758),l=a(88694),c=a(26396),s=a(58215),r=a(19055);const d={title:"Local Notifications"},u=void 0,m={unversionedId:"native/local-notifications",id:"native/local-notifications",isDocsHomePage:!1,title:"Local Notifications",description:"Local Notifications: iOS & Android | Cordova Local Notifications",source:"@site/docs/native/local-notifications.md",sourceDirName:"native",slug:"/native/local-notifications",permalink:"/cn/docs/native/local-notifications",editUrl:"https://crowdin.com/project/ionic-docs",tags:[],version:"current",frontMatter:{title:"Local Notifications"},sidebar:"native",previous:{title:"LocalBackup",permalink:"/cn/docs/native/local-backup"},next:{title:"Location Accuracy",permalink:"/cn/docs/native/location-accuracy"}},p=[{value:"Supported Platforms",id:"supported-platforms",children:[],level:2},{value:"Usage",id:"usage",children:[{value:"React",id:"react",children:[],level:3},{value:"Angular",id:"angular",children:[],level:3}],level:2}],v={toc:p};function f(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("head",null,(0,o.kt)("title",null,"Local Notifications: iOS & Android | Cordova Local Notifications"),(0,o.kt)("meta",{name:"description",content:"The Cordova Local Notifications Plugin allows you to display local notifications from your Ionic Framework application on iOS, Android, or Windows devices."})),(0,o.kt)("p",null,"This plugin allows you to display local notifications on the device"),(0,o.kt)("p",null,(0,o.kt)("a",{href:"https://github.com/katzer/cordova-plugin-local-notifications",target:"_blank",rel:"noopener",className:"git-link"},(0,o.kt)("svg",{viewBox:"0 0 512 512"},(0,o.kt)("path",{d:"M416 160c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 23.7 12.9 44.3 32 55.4v8.6c0 19.9-7.8 33.7-25.3 44.9-15.4 9.8-38.1 17.1-67.5 21.5-14 2.1-25.7 6-35.2 10.7V151.4c19.1-11.1 32-31.7 32-55.4 0-35.3-28.7-64-64-64S96 60.7 96 96c0 23.7 12.9 44.3 32 55.4v209.2c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-16.6-6.3-31.7-16.7-43.1 1.9-4.9 9.7-16.3 29.4-19.3 38.8-5.8 68.9-15.9 92.3-30.8 36-22.8 55-57 55-98.8v-8.6c19.1-11.1 32-31.7 32-55.4zM160 56c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm0 400c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm192-256c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"}))," https://github.com/katzer/cordova-plugin-local-notifications")),(0,o.kt)("h2",null,"Stuck on a Cordova issue?"),(0,o.kt)(i.Z,{className:"cordova-ee-card",header:"Don't waste precious time on plugin issues.",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Native",mdxType:"DocsCard"},(0,o.kt)("div",null,(0,o.kt)("img",{src:"/docs/icons/native-cordova-bot.png",class:"cordova-ee-img"}),(0,o.kt)("p",null,"If you're building a serious project, you can't afford to spend hours troubleshooting. Ionic\u2019s experts offer premium advisory services for both community plugins and premier plugins."),(0,o.kt)(l.Z,{className:"native-ee-detail",mdxType:"DocsButton"},"Contact Us Today!"))),(0,o.kt)("h2",{id:"installation"},(0,o.kt)("a",{href:"#installation"},"Installation")),(0,o.kt)(c.Z,{defaultValue:"Capacitor",groupId:"runtime",values:[{value:"Capacitor",label:"Capacitor"},{value:"Cordova",label:"Cordova"},{value:"Enterprise",label:"Enterprise"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"Capacitor",mdxType:"TabItem"},(0,o.kt)(r.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ npm install cordova-plugin-local-notification ","\n","$ npm install @awesome-cordova-plugins/local-notifications ","\n","$ ionic cap sync")),(0,o.kt)(s.Z,{value:"Cordova",mdxType:"TabItem"},(0,o.kt)(r.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ ionic cordova plugin add cordova-plugin-local-notification ","\n","$ npm install @awesome-cordova-plugins/local-notifications ","\n")),(0,o.kt)(s.Z,{value:"Enterprise",mdxType:"TabItem"},(0,o.kt)("blockquote",null,"Ionic Enterprise comes with fully supported and maintained plugins from the Ionic Team. \xa0",(0,o.kt)("a",{class:"btn",href:"https://ionic.io/docs/premier-plugins"},"Learn More")," or if you're interested in an enterprise version of this plugin ",(0,o.kt)("a",{class:"btn",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine"},"Contact Us")))),(0,o.kt)("h2",{id:"supported-platforms"},"Supported Platforms"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Android"),(0,o.kt)("li",{parentName:"ul"},"iOS"),(0,o.kt)("li",{parentName:"ul"},"Windows")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("h3",{id:"react"},"React"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/cn/docs/native/community#react"},"Learn more about using Ionic Native components in React")),(0,o.kt)("h3",{id:"angular"},"Angular"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { LocalNotifications } from '@awesome-cordova-plugins/local-notifications/ngx';\n\n\nconstructor(private localNotifications: LocalNotifications) { }\n\n...\n\n\n// Schedule a single notification\nthis.localNotifications.schedule({\n  id: 1,\n  text: 'Single ILocalNotification',\n  sound: isAndroid? 'file://sound.mp3': 'file://beep.caf',\n  data: { secret: key }\n});\n\n\n// Schedule multiple notifications\nthis.localNotifications.schedule([{\n   id: 1,\n   text: 'Multi ILocalNotification 1',\n   sound: isAndroid ? 'file://sound.mp3': 'file://beep.caf',\n   data: { secret:key }\n  },{\n   id: 2,\n   title: 'Local ILocalNotification Example',\n   text: 'Multi ILocalNotification 2',\n   icon: 'http://example.com/icon.png'\n}]);\n\n\n// Schedule delayed notification\nthis.localNotifications.schedule({\n   text: 'Delayed ILocalNotification',\n   trigger: {at: new Date(new Date().getTime() + 3600)},\n   led: 'FF0000',\n   sound: null\n});\n")))}f.isMDXComponent=!0}}]);