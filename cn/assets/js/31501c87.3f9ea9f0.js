"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[33423],{58215:(e,o,n)=>{n.d(o,{Z:()=>a});var t=n(67294);const a=function(e){let{children:o,hidden:n,className:a}=e;return t.createElement("div",{role:"tabpanel",hidden:n,className:a},o)}},26396:(e,o,n)=>{n.d(o,{Z:()=>m});var t=n(87462),a=n(67294),r=n(72389),s=n(79443);const c=function(){const e=(0,a.useContext)(s.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var i=n(89521),l=n(86010);const u="tabItem_vU9c";function d(e){var o,n;const{lazy:t,block:r,defaultValue:s,values:d,groupId:m,className:p}=e,v=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=d??v.map((e=>{let{props:{value:o,label:n}}=e;return{value:o,label:n}})),h=(0,i.lx)(g,((e,o)=>e.value===o.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===s?s:s??(null==(o=v.find((e=>e.props.default)))?void 0:o.props.value)??(null==(n=v[0])?void 0:n.props.value);if(null!==f&&!g.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:k}=c(),[y,N]=(0,a.useState)(f),Z=[],{blockElementScrollPositionUntilNextRender:C}=(0,i.o5)();if(null!=m){const e=b[m];null!=e&&e!==y&&g.some((o=>o.value===e))&&N(e)}const _=e=>{const o=e.currentTarget,n=Z.indexOf(o),t=g[n].value;t!==y&&(C(o),N(t),null!=m&&k(m,t))},E=e=>{var o;let n=null;switch(e.key){case"ArrowRight":{const o=Z.indexOf(e.currentTarget)+1;n=Z[o]||Z[0];break}case"ArrowLeft":{const o=Z.indexOf(e.currentTarget)-1;n=Z[o]||Z[Z.length-1];break}}null==(o=n)||o.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},p)},g.map((e=>{let{value:o,label:n}=e;return a.createElement("li",{role:"tab",tabIndex:y===o?0:-1,"aria-selected":y===o,className:(0,l.Z)("tabs__item",u,{"tabs__item--active":y===o}),key:o,ref:e=>Z.push(e),onKeyDown:E,onFocus:_,onClick:_},n??o)}))),t?(0,a.cloneElement)(v.filter((e=>e.props.value===y))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},v.map(((e,o)=>(0,a.cloneElement)(e,{key:o,hidden:e.props.value!==y})))))}function m(e){const o=(0,r.Z)();return a.createElement(d,(0,t.Z)({key:String(o)},e))}},47758:(e,o,n)=>{n.d(o,{Z:()=>i});var t=n(67294),a=n(86010),r=n(39960),s=n(44996);const c="card_7QME";const i=function(e){const o=void 0===e.href,n=void 0!==e.href&&/^http/.test(e.href),i="undefined"===e.header?null:t.createElement("header",{className:"Card-header"},e.header),l=e.hoverIcon||e.icon,u=t.createElement(t.Fragment,null,e.img&&t.createElement("img",{src:(0,s.Z)(e.img),className:"Card-image"}),t.createElement("div",{className:"Card-container"},(e.icon||l)&&t.createElement("div",{className:"Card-icon-row"},e.icon&&t.createElement("img",{src:(0,s.Z)(e.icon),className:"Card-icon Card-icon-default"}),l&&t.createElement("img",{src:(0,s.Z)(l),className:"Card-icon Card-icon-hover"})),e.ionicon&&t.createElement("ion-icon",{name:e.ionicon,className:"Card-ionicon"}),e.iconset&&t.createElement("div",{className:"Card-iconset__container"},e.iconset.split(",").map(((o,n)=>t.createElement("img",{src:(0,s.Z)(o),className:"Card-icon "+(n===e.activeIndex?"Card-icon-active":""),"data-index":n,key:n})))),e.header&&i,t.createElement("div",{className:"Card-content"},e.children))),d=(0,a.Z)({"Card-with-image":void 0!==e.img,"Card-without-image":void 0===e.img,"Card-size-lg":"lg"===e.size,[e.className]:e.className});return o?t.createElement("docs-card",{class:d},t.createElement("div",{className:(0,a.Z)(c,"docs-card")},u)):n?t.createElement("docs-card",{class:d},t.createElement("a",{className:(0,a.Z)(c,"docs-card"),href:e.href,target:"_blank"},u)):t.createElement("docs-card",{class:d},t.createElement(r.default,{to:e.href,className:(0,a.Z)(c,"docs-card")},u))}},88694:(e,o,n)=>{n.d(o,{Z:()=>i});var t=n(87462),a=n(86010),r=n(67294);const s="docsButton_1mtQ",c="docsButtonRound_ZJZD";function i(e){let{href:o,round:n=!1,...i}=e;return i.className=(0,a.Z)({[i.className]:Boolean(i.className),[s]:!0,"docs-button":!0,[c]:n,"docs-button--round":n}),o?r.createElement("a",(0,t.Z)({href:o,className:"docsButton"},i),i.children):r.createElement("button",(0,t.Z)({className:"docsButton"},i),i.children)}},6633:(e,o,n)=>{n.r(o),n.d(o,{contentTitle:()=>d,default:()=>g,frontMatter:()=>u,metadata:()=>m,toc:()=>p});var t=n(87462),a=(n(67294),n(3905)),r=n(47758),s=n(88694),c=n(26396),i=n(58215),l=n(19055);const u={title:"Zoom"},d=void 0,m={unversionedId:"native/zoom",id:"native/zoom",isDocsHomePage:!1,title:"Zoom",description:"Cordova Zoom Plugin: Zoom-SDK-Ionic for Native Ionic Apps",source:"@site/docs/native/zoom.md",sourceDirName:"native",slug:"/native/zoom",permalink:"/cn/docs/native/zoom",editUrl:"https://crowdin.com/project/ionic-docs",tags:[],version:"current",frontMatter:{title:"Zoom"},sidebar:"native",previous:{title:"Zeroconf",permalink:"/cn/docs/native/zeroconf"}},p=[{value:"Supported Platforms",id:"supported-platforms",children:[],level:2},{value:"Usage",id:"usage",children:[{value:"React",id:"react",children:[],level:3},{value:"Angular",id:"angular",children:[],level:3}],level:2}],v={toc:p};function g(e){let{components:o,...n}=e;return(0,a.kt)("wrapper",(0,t.Z)({},v,n,{components:o,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("title",null,"Cordova Zoom Plugin: Zoom-SDK-Ionic for Native Ionic Apps"),(0,a.kt)("meta",{name:"description",content:"Zoom-SDK-Ionic is a Cordova plugin to use Zoom Video Conferencing services on Cordova apps. Read our Zoom Docs to learn more about the Ionic Native Zoom plugin."})),(0,a.kt)("p",null,"A Cordova plugin to use Zoom Video Conferencing services on Cordova applications."),(0,a.kt)("p",null,(0,a.kt)("a",{href:"https://github.com/zoom/zoom-sdk-ionic",target:"_blank",rel:"noopener",className:"git-link"},(0,a.kt)("svg",{viewBox:"0 0 512 512"},(0,a.kt)("path",{d:"M416 160c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 23.7 12.9 44.3 32 55.4v8.6c0 19.9-7.8 33.7-25.3 44.9-15.4 9.8-38.1 17.1-67.5 21.5-14 2.1-25.7 6-35.2 10.7V151.4c19.1-11.1 32-31.7 32-55.4 0-35.3-28.7-64-64-64S96 60.7 96 96c0 23.7 12.9 44.3 32 55.4v209.2c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-16.6-6.3-31.7-16.7-43.1 1.9-4.9 9.7-16.3 29.4-19.3 38.8-5.8 68.9-15.9 92.3-30.8 36-22.8 55-57 55-98.8v-8.6c19.1-11.1 32-31.7 32-55.4zM160 56c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm0 400c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm192-256c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"}))," https://github.com/zoom/zoom-sdk-ionic")),(0,a.kt)("h2",null,"Stuck on a Cordova issue?"),(0,a.kt)(r.Z,{className:"cordova-ee-card",header:"Don't waste precious time on plugin issues.",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Native",mdxType:"DocsCard"},(0,a.kt)("div",null,(0,a.kt)("img",{src:"/docs/icons/native-cordova-bot.png",class:"cordova-ee-img"}),(0,a.kt)("p",null,"If you're building a serious project, you can't afford to spend hours troubleshooting. Ionic\u2019s experts offer premium advisory services for both community plugins and premier plugins."),(0,a.kt)(s.Z,{className:"native-ee-detail",mdxType:"DocsButton"},"Contact Us Today!"))),(0,a.kt)("h2",{id:"installation"},(0,a.kt)("a",{href:"#installation"},"Installation")),(0,a.kt)(c.Z,{defaultValue:"Capacitor",groupId:"runtime",values:[{value:"Capacitor",label:"Capacitor"},{value:"Cordova",label:"Cordova"},{value:"Enterprise",label:"Enterprise"}],mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"Capacitor",mdxType:"TabItem"},(0,a.kt)(l.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ npm install cordova.plugin.zoom ","\n","$ npm install @awesome-cordova-plugins/zoom ","\n","$ ionic cap sync")),(0,a.kt)(i.Z,{value:"Cordova",mdxType:"TabItem"},(0,a.kt)(l.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ ionic cordova plugin add cordova.plugin.zoom ","\n","$ npm install @awesome-cordova-plugins/zoom ","\n")),(0,a.kt)(i.Z,{value:"Enterprise",mdxType:"TabItem"},(0,a.kt)("blockquote",null,"Ionic Enterprise comes with fully supported and maintained plugins from the Ionic Team. \xa0",(0,a.kt)("a",{class:"btn",href:"https://ionic.io/docs/premier-plugins"},"Learn More")," or if you're interested in an enterprise version of this plugin ",(0,a.kt)("a",{class:"btn",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine"},"Contact Us")))),(0,a.kt)("h2",{id:"supported-platforms"},"Supported Platforms"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Android"),(0,a.kt)("li",{parentName:"ul"},"iOS")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("h3",{id:"react"},"React"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/cn/docs/native/community#react"},"Learn more about using Ionic Native components in React")),(0,a.kt)("h3",{id:"angular"},"Angular"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'import { Zoom } from \'@awesome-cordova-plugins/zoom\';\n\n\nconstructor(private zoomService: Zoom) { }\n\n...\n\n// Initialize Zoom SDK, need to be called when app fired up.\nthis.zoomService.initialize(API_KEY, API_SECRET)\n  .then((success: any) => console.log(success))\n  .catch((error: any) => console.log(error));\n\n// Log user in with Zoom username and password.\nthis.zoomService.login(userName, password)\n  .then((success: any) => console.log(success))\n  .catch((error: any) => console.log(error));\n\n// Log user out.\nthis.zoomService.logout()\n  .then((success: boolean) => console.log(success))\n  .catch((error: any) => console.log(error));\n\n// Check whether user is logged in.\nthis.zoomService.isLoggedIn()\n  .then((success: boolean) => console.log(success))\n  .catch((error: any) => console.log(error));\n\n// meeting options (Only available for Android)\nlet options = {\n"no_driving_mode":true,\n"no_invite":true,\n"no_meeting_end_message":true,\n"no_titlebar":false,\n"no_bottom_toolbar":false,\n"no_dial_in_via_phone":true,\n"no_dial_out_to_phone":true,\n"no_disconnect_audio":true,\n"no_share":true,\n"no_audio":true,\n"no_video":true,\n"no_meeting_error_message":true\n};\n\n// Join meeting.\nthis.zoomService.joinMeeting(meetingNumber, meetingPassword, displayName, options)\n  .then((success: any) => console.log(success))\n  .catch((error: any) => console.log(error));\n\n// Start an existing meeting for non-login user.\nthis.zoomService.startMeetingWithZAK(meetingNumber, displayName, zoomToken, zoomAccessToken, userId, options)\n  .then((success: any) => console.log(success))\n  .catch((error: any) => console.log(error));\n\n// Start an existing meeting for logged in user.\nthis.zoomService.startMeeting(meetingNumber, vanityId, options)\n  .then((success: any) => console.log(success))\n  .catch((error: any) => console.log(error));\n\n// Start an instant meeting for logged in user.\nthis.zoomService.startInstantMeeting()\n  .then((success: anu) => console.log(success))\n  .catch((error: any) => console.log(error));\n\n// Set language.\nthis.zoomService.setLanguage("en-US")\n  .then((success: any) => console.log(success))\n  .catch((error: any) => console.log(error));\n')))}g.isMDXComponent=!0}}]);