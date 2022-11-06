"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[88242],{58215:(e,a,t)=>{t.d(a,{Z:()=>o});var n=t(67294);const o=function(e){let{children:a,hidden:t,className:o}=e;return n.createElement("div",{role:"tabpanel",hidden:t,className:o},a)}},26396:(e,a,t)=>{t.d(a,{Z:()=>m});var n=t(87462),o=t(67294),i=t(72389),r=t(79443);const s=function(){const e=(0,o.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var l=t(89521),c=t(86010);const d="tabItem_vU9c";function u(e){var a,t;const{lazy:n,block:i,defaultValue:r,values:u,groupId:m,className:p}=e,v=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=u??v.map((e=>{let{props:{value:a,label:t}}=e;return{value:a,label:t}})),h=(0,l.lx)(f,((e,a)=>e.value===a.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===r?r:r??(null==(a=v.find((e=>e.props.default)))?void 0:a.props.value)??(null==(t=v[0])?void 0:t.props.value);if(null!==g&&!f.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:k}=s(),[C,N]=(0,o.useState)(g),y=[],{blockElementScrollPositionUntilNextRender:E}=(0,l.o5)();if(null!=m){const e=b[m];null!=e&&e!==C&&f.some((a=>a.value===e))&&N(e)}const T=e=>{const a=e.currentTarget,t=y.indexOf(a),n=f[t].value;n!==C&&(E(a),N(n),null!=m&&k(m,n))},w=e=>{var a;let t=null;switch(e.key){case"ArrowRight":{const a=y.indexOf(e.currentTarget)+1;t=y[a]||y[0];break}case"ArrowLeft":{const a=y.indexOf(e.currentTarget)-1;t=y[a]||y[y.length-1];break}}null==(a=t)||a.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":i},p)},f.map((e=>{let{value:a,label:t}=e;return o.createElement("li",{role:"tab",tabIndex:C===a?0:-1,"aria-selected":C===a,className:(0,c.Z)("tabs__item",d,{"tabs__item--active":C===a}),key:a,ref:e=>y.push(e),onKeyDown:w,onFocus:T,onClick:T},t??a)}))),n?(0,o.cloneElement)(v.filter((e=>e.props.value===C))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},v.map(((e,a)=>(0,o.cloneElement)(e,{key:a,hidden:e.props.value!==C})))))}function m(e){const a=(0,i.Z)();return o.createElement(u,(0,n.Z)({key:String(a)},e))}},47758:(e,a,t)=>{t.d(a,{Z:()=>l});var n=t(67294),o=t(86010),i=t(39960),r=t(44996);const s="card_7QME";const l=function(e){const a=void 0===e.href,t=void 0!==e.href&&/^http/.test(e.href),l="undefined"===e.header?null:n.createElement("header",{className:"Card-header"},e.header),c=e.hoverIcon||e.icon,d=n.createElement(n.Fragment,null,e.img&&n.createElement("img",{src:(0,r.Z)(e.img),className:"Card-image"}),n.createElement("div",{className:"Card-container"},(e.icon||c)&&n.createElement("div",{className:"Card-icon-row"},e.icon&&n.createElement("img",{src:(0,r.Z)(e.icon),className:"Card-icon Card-icon-default"}),c&&n.createElement("img",{src:(0,r.Z)(c),className:"Card-icon Card-icon-hover"})),e.ionicon&&n.createElement("ion-icon",{name:e.ionicon,className:"Card-ionicon"}),e.iconset&&n.createElement("div",{className:"Card-iconset__container"},e.iconset.split(",").map(((a,t)=>n.createElement("img",{src:(0,r.Z)(a),className:"Card-icon "+(t===e.activeIndex?"Card-icon-active":""),"data-index":t,key:t})))),e.header&&l,n.createElement("div",{className:"Card-content"},e.children))),u=(0,o.Z)({"Card-with-image":void 0!==e.img,"Card-without-image":void 0===e.img,"Card-size-lg":"lg"===e.size,[e.className]:e.className});return a?n.createElement("docs-card",{class:u},n.createElement("div",{className:(0,o.Z)(s,"docs-card")},d)):t?n.createElement("docs-card",{class:u},n.createElement("a",{className:(0,o.Z)(s,"docs-card"),href:e.href,target:"_blank"},d)):n.createElement("docs-card",{class:u},n.createElement(i.default,{to:e.href,className:(0,o.Z)(s,"docs-card")},d))}},88694:(e,a,t)=>{t.d(a,{Z:()=>l});var n=t(87462),o=t(86010),i=t(67294);const r="docsButton_1mtQ",s="docsButtonRound_ZJZD";function l(e){let{href:a,round:t=!1,...l}=e;return l.className=(0,o.Z)({[l.className]:Boolean(l.className),[r]:!0,"docs-button":!0,[s]:t,"docs-button--round":t}),a?i.createElement("a",(0,n.Z)({href:a,className:"docsButton"},l),l.children):i.createElement("button",(0,n.Z)({className:"docsButton"},l),l.children)}},65900:(e,a,t)=>{t.r(a),t.d(a,{contentTitle:()=>u,default:()=>f,frontMatter:()=>d,metadata:()=>m,toc:()=>p});var n=t(87462),o=(t(67294),t(3905)),i=t(47758),r=t(88694),s=t(26396),l=t(58215),c=t(19055);const d={title:"FCM | FCM Push Notification Plugin for Firebase Cloud Messaging",description:"The FCM push notification plugin provides basic functionality for Firebase Cloud Messaging. Read and learn more about the Cordova FCM Plugin for Ionic Apps.",sidebar_label:"FCM"},u="FCM",m={unversionedId:"native/fcm",id:"version-v5/native/fcm",isDocsHomePage:!1,title:"FCM | FCM Push Notification Plugin for Firebase Cloud Messaging",description:"The FCM push notification plugin provides basic functionality for Firebase Cloud Messaging. Read and learn more about the Cordova FCM Plugin for Ionic Apps.",source:"@site/versioned_docs/version-v5/native/fcm.md",sourceDirName:"native",slug:"/native/fcm",permalink:"/docs/v5/native/fcm",editUrl:"https://github.com/ionic-team/ionic-native/edit/master/src/@awesome-cordova-plugins/plugins/fcm/index.ts",tags:[],version:"v5",frontMatter:{title:"FCM | FCM Push Notification Plugin for Firebase Cloud Messaging",description:"The FCM push notification plugin provides basic functionality for Firebase Cloud Messaging. Read and learn more about the Cordova FCM Plugin for Ionic Apps.",sidebar_label:"FCM"},sidebar:"version-v5/native",previous:{title:"Facebook",permalink:"/docs/v5/native/facebook"},next:{title:"File Opener",permalink:"/docs/v5/native/file-opener"}},p=[{value:"Supported Platforms",id:"supported-platforms",children:[],level:2},{value:"Capacitor",id:"capacitor",children:[],level:2},{value:"Usage",id:"usage",children:[{value:"React",id:"react",children:[],level:3},{value:"Angular",id:"angular",children:[],level:3}],level:2}],v={toc:p};function f(e){let{components:a,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},v,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"fcm"},"FCM"),(0,o.kt)("p",null,"Provides basic functionality for Firebase Cloud Messaging"),(0,o.kt)("p",null,(0,o.kt)("a",{href:"https://github.com/andrehtissot/cordova-plugin-fcm-with-dependecy-updated",target:"_blank",rel:"noopener",className:"git-link"},(0,o.kt)("svg",{viewBox:"0 0 512 512"},(0,o.kt)("path",{d:"M416 160c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 23.7 12.9 44.3 32 55.4v8.6c0 19.9-7.8 33.7-25.3 44.9-15.4 9.8-38.1 17.1-67.5 21.5-14 2.1-25.7 6-35.2 10.7V151.4c19.1-11.1 32-31.7 32-55.4 0-35.3-28.7-64-64-64S96 60.7 96 96c0 23.7 12.9 44.3 32 55.4v209.2c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-16.6-6.3-31.7-16.7-43.1 1.9-4.9 9.7-16.3 29.4-19.3 38.8-5.8 68.9-15.9 92.3-30.8 36-22.8 55-57 55-98.8v-8.6c19.1-11.1 32-31.7 32-55.4zM160 56c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm0 400c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm192-256c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"}))," ","https://github.com/andrehtissot/cordova-plugin-fcm-with-dependecy-updated")),(0,o.kt)("h2",null,"Stuck on a Cordova issue?"),(0,o.kt)(i.Z,{className:"cordova-ee-card",header:"Don't waste precious time on plugin issues.",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Native",mdxType:"DocsCard"},(0,o.kt)("div",null,(0,o.kt)("img",{src:"/docs/icons/native-cordova-bot.png",class:"cordova-ee-img"}),(0,o.kt)("p",null,"If you're building a serious project, you can't afford to spend hours troubleshooting. Ionic\u2019s experts offer premium advisory services for both community plugins and premier plugins."),(0,o.kt)(r.Z,{className:"native-ee-detail",mdxType:"DocsButton"},"Contact Us Today!"))),(0,o.kt)("h2",{id:"installation"},(0,o.kt)("a",{href:"#installation"},"Installation")),(0,o.kt)(s.Z,{groupId:"runtime",defaultValue:"Capacitor",values:[{value:"Capacitor",label:"Capacitor"},{value:"Cordova",label:"Cordova"},{value:"Enterprise",label:"Enterprise"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"Capacitor",mdxType:"TabItem"},(0,o.kt)(c.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ npm install cordova-plugin-fcm-with-dependecy-updated ","\n","$ npm install @awesome-cordova-plugins/fcm ","\n","$ ionic cap sync")),(0,o.kt)(l.Z,{value:"Cordova",mdxType:"TabItem"},(0,o.kt)(c.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ ionic cordova plugin add cordova-plugin-fcm-with-dependecy-updated ","\n","$ npm install @awesome-cordova-plugins/fcm ","\n")),(0,o.kt)(l.Z,{value:"Enterprise",mdxType:"TabItem"},(0,o.kt)("blockquote",null,"Ionic Enterprise comes with fully supported and maintained plugins from the Ionic Team. \xa0",(0,o.kt)("a",{class:"btn",href:"https://ionic.io/docs/premier-plugins"},"Learn More")," or if you're interested in an enterprise version of this plugin ",(0,o.kt)("a",{class:"btn",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine"},"Contact Us")))),(0,o.kt)("h2",{id:"supported-platforms"},"Supported Platforms"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Android"),(0,o.kt)("li",{parentName:"ul"},"iOS")),(0,o.kt)("h2",{id:"capacitor"},"Capacitor"),(0,o.kt)("p",null,"Not Compatible"),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("h3",{id:"react"},"React"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/v5/native/community#react"},"Learn more about using Ionic Native components in React")),(0,o.kt)("h3",{id:"angular"},"Angular"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { FCM } from '@awesome-cordova-plugins/fcm/ngx';\n\nconstructor(private fcm: FCM) {}\n\n...\n\nthis.fcm.subscribeToTopic('marketing');\n\nthis.fcm.getToken().then(token => {\n  backend.registerToken(token);\n});\n\nthis.fcm.onNotification().subscribe(data => {\n  if(data.wasTapped){\n    console.log(\"Received in background\");\n  } else {\n    console.log(\"Received in foreground\");\n  };\n});\n\nthis.fcm.onTokenRefresh().subscribe(token => {\n  backend.registerToken(token);\n});\n\nthis.fcm.hasPermission().then(hasPermission => {\n  if (hasPermission) {\n    console.log(\"Has permission!\");\n  }\n})\n\nthis.fcm.clearAllNotifications();\n\nthis.fcm.unsubscribeFromTopic('marketing');\n\n")))}f.isMDXComponent=!0}}]);