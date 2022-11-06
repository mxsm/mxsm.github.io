"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[69876],{58215:(e,n,t)=>{t.d(n,{Z:()=>o});var a=t(67294);const o=function(e){let{children:n,hidden:t,className:o}=e;return a.createElement("div",{role:"tabpanel",hidden:t,className:o},n)}},26396:(e,n,t)=>{t.d(n,{Z:()=>m});var a=t(87462),o=t(67294),s=t(72389),i=t(79443);const r=function(){const e=(0,o.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var l=t(89521),c=t(86010);const u="tabItem_vU9c";function d(e){var n,t;const{lazy:a,block:s,defaultValue:i,values:d,groupId:m,className:p}=e,v=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=d??v.map((e=>{let{props:{value:n,label:t}}=e;return{value:n,label:t}})),f=(0,l.lx)(h,((e,n)=>e.value===n.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===i?i:i??(null==(n=v.find((e=>e.props.default)))?void 0:n.props.value)??(null==(t=v[0])?void 0:t.props.value);if(null!==g&&!h.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:k}=r(),[y,C]=(0,o.useState)(g),w=[],{blockElementScrollPositionUntilNextRender:N}=(0,l.o5)();if(null!=m){const e=b[m];null!=e&&e!==y&&h.some((n=>n.value===e))&&C(e)}const E=e=>{const n=e.currentTarget,t=w.indexOf(n),a=h[t].value;a!==y&&(N(n),C(a),null!=m&&k(m,a))},x=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{const n=w.indexOf(e.currentTarget)+1;t=w[n]||w[0];break}case"ArrowLeft":{const n=w.indexOf(e.currentTarget)-1;t=w[n]||w[w.length-1];break}}null==(n=t)||n.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":s},p)},h.map((e=>{let{value:n,label:t}=e;return o.createElement("li",{role:"tab",tabIndex:y===n?0:-1,"aria-selected":y===n,className:(0,c.Z)("tabs__item",u,{"tabs__item--active":y===n}),key:n,ref:e=>w.push(e),onKeyDown:x,onFocus:E,onClick:E},t??n)}))),a?(0,o.cloneElement)(v.filter((e=>e.props.value===y))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},v.map(((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==y})))))}function m(e){const n=(0,s.Z)();return o.createElement(d,(0,a.Z)({key:String(n)},e))}},47758:(e,n,t)=>{t.d(n,{Z:()=>l});var a=t(67294),o=t(86010),s=t(39960),i=t(44996);const r="card_7QME";const l=function(e){const n=void 0===e.href,t=void 0!==e.href&&/^http/.test(e.href),l="undefined"===e.header?null:a.createElement("header",{className:"Card-header"},e.header),c=e.hoverIcon||e.icon,u=a.createElement(a.Fragment,null,e.img&&a.createElement("img",{src:(0,i.Z)(e.img),className:"Card-image"}),a.createElement("div",{className:"Card-container"},(e.icon||c)&&a.createElement("div",{className:"Card-icon-row"},e.icon&&a.createElement("img",{src:(0,i.Z)(e.icon),className:"Card-icon Card-icon-default"}),c&&a.createElement("img",{src:(0,i.Z)(c),className:"Card-icon Card-icon-hover"})),e.ionicon&&a.createElement("ion-icon",{name:e.ionicon,className:"Card-ionicon"}),e.iconset&&a.createElement("div",{className:"Card-iconset__container"},e.iconset.split(",").map(((n,t)=>a.createElement("img",{src:(0,i.Z)(n),className:"Card-icon "+(t===e.activeIndex?"Card-icon-active":""),"data-index":t,key:t})))),e.header&&l,a.createElement("div",{className:"Card-content"},e.children))),d=(0,o.Z)({"Card-with-image":void 0!==e.img,"Card-without-image":void 0===e.img,"Card-size-lg":"lg"===e.size,[e.className]:e.className});return n?a.createElement("docs-card",{class:d},a.createElement("div",{className:(0,o.Z)(r,"docs-card")},u)):t?a.createElement("docs-card",{class:d},a.createElement("a",{className:(0,o.Z)(r,"docs-card"),href:e.href,target:"_blank"},u)):a.createElement("docs-card",{class:d},a.createElement(s.default,{to:e.href,className:(0,o.Z)(r,"docs-card")},u))}},88694:(e,n,t)=>{t.d(n,{Z:()=>l});var a=t(87462),o=t(86010),s=t(67294);const i="docsButton_1mtQ",r="docsButtonRound_ZJZD";function l(e){let{href:n,round:t=!1,...l}=e;return l.className=(0,o.Z)({[l.className]:Boolean(l.className),[i]:!0,"docs-button":!0,[r]:t,"docs-button--round":t}),n?s.createElement("a",(0,a.Z)({href:n,className:"docsButton"},l),l.children):s.createElement("button",(0,a.Z)({className:"docsButton"},l),l.children)}},70814:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>d,default:()=>h,frontMatter:()=>u,metadata:()=>m,toc:()=>p});var a=t(87462),o=(t(67294),t(3905)),s=t(47758),i=t(88694),r=t(26396),l=t(58215),c=t(19055);const u={sidebar_label:"Music Controls"},d="Music Controls",m={unversionedId:"native/music-controls",id:"version-v5/native/music-controls",isDocsHomePage:!1,title:"Music Controls",description:"Music controls for Cordova applications.",source:"@site/versioned_docs/version-v5/native/music-controls.md",sourceDirName:"native",slug:"/native/music-controls",permalink:"/docs/v5/native/music-controls",editUrl:"https://github.com/ionic-team/ionic-native/edit/master/src/@awesome-cordova-plugins/plugins/music-controls/index.ts",tags:[],version:"v5",frontMatter:{sidebar_label:"Music Controls"},sidebar:"version-v5/native",previous:{title:"Multiple Documents Picker",permalink:"/docs/v5/native/multiple-document-picker"},next:{title:"Native Audio",permalink:"/docs/v5/native/native-audio"}},p=[{value:"Supported Platforms",id:"supported-platforms",children:[],level:2},{value:"Capacitor",id:"capacitor",children:[],level:2},{value:"Usage",id:"usage",children:[{value:"React",id:"react",children:[],level:3},{value:"Angular",id:"angular",children:[],level:3}],level:2}],v={toc:p};function h(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},v,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"music-controls"},"Music Controls"),(0,o.kt)("p",null,"Music controls for Cordova applications.\nDisplay a 'media' notification with play/pause, previous, next buttons, allowing the user to control the play.\nHandle also headset event (plug, unplug, headset button)."),(0,o.kt)("p",null,(0,o.kt)("a",{href:"https://github.com/ghenry22/cordova-plugin-music-controls2",target:"_blank",rel:"noopener",className:"git-link"},(0,o.kt)("svg",{viewBox:"0 0 512 512"},(0,o.kt)("path",{d:"M416 160c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 23.7 12.9 44.3 32 55.4v8.6c0 19.9-7.8 33.7-25.3 44.9-15.4 9.8-38.1 17.1-67.5 21.5-14 2.1-25.7 6-35.2 10.7V151.4c19.1-11.1 32-31.7 32-55.4 0-35.3-28.7-64-64-64S96 60.7 96 96c0 23.7 12.9 44.3 32 55.4v209.2c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-16.6-6.3-31.7-16.7-43.1 1.9-4.9 9.7-16.3 29.4-19.3 38.8-5.8 68.9-15.9 92.3-30.8 36-22.8 55-57 55-98.8v-8.6c19.1-11.1 32-31.7 32-55.4zM160 56c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm0 400c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm192-256c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"}))," ","https://github.com/ghenry22/cordova-plugin-music-controls2")),(0,o.kt)("h2",null,"Stuck on a Cordova issue?"),(0,o.kt)(s.Z,{className:"cordova-ee-card",header:"Don't waste precious time on plugin issues.",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Native",mdxType:"DocsCard"},(0,o.kt)("div",null,(0,o.kt)("img",{src:"/docs/icons/native-cordova-bot.png",class:"cordova-ee-img"}),(0,o.kt)("p",null,"If you're building a serious project, you can't afford to spend hours troubleshooting. Ionic\u2019s experts offer premium advisory services for both community plugins and premier plugins."),(0,o.kt)(i.Z,{className:"native-ee-detail",mdxType:"DocsButton"},"Contact Us Today!"))),(0,o.kt)("h2",{id:"installation"},(0,o.kt)("a",{href:"#installation"},"Installation")),(0,o.kt)(r.Z,{groupId:"runtime",defaultValue:"Capacitor",values:[{value:"Capacitor",label:"Capacitor"},{value:"Cordova",label:"Cordova"},{value:"Enterprise",label:"Enterprise"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"Capacitor",mdxType:"TabItem"},(0,o.kt)(c.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ npm install cordova-plugin-music-controls2 ","\n","$ npm install @awesome-cordova-plugins/music-controls ","\n","$ ionic cap sync")),(0,o.kt)(l.Z,{value:"Cordova",mdxType:"TabItem"},(0,o.kt)(c.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ ionic cordova plugin add cordova-plugin-music-controls2 ","\n","$ npm install @awesome-cordova-plugins/music-controls ","\n")),(0,o.kt)(l.Z,{value:"Enterprise",mdxType:"TabItem"},(0,o.kt)("blockquote",null,"Ionic Enterprise comes with fully supported and maintained plugins from the Ionic Team. \xa0",(0,o.kt)("a",{class:"btn",href:"https://ionic.io/docs/premier-plugins"},"Learn More")," or if you're interested in an enterprise version of this plugin ",(0,o.kt)("a",{class:"btn",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine"},"Contact Us")))),(0,o.kt)("h2",{id:"supported-platforms"},"Supported Platforms"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Android"),(0,o.kt)("li",{parentName:"ul"},"iOS"),(0,o.kt)("li",{parentName:"ul"},"Windows")),(0,o.kt)("h2",{id:"capacitor"},"Capacitor"),(0,o.kt)("p",null,"Not Compatible"),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("h3",{id:"react"},"React"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/v5/native/community#react"},"Learn more about using Ionic Native components in React")),(0,o.kt)("h3",{id:"angular"},"Angular"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { MusicControls } from '@awesome-cordova-plugins/music-controls/ngx';\n\nconstructor(private musicControls: MusicControls) { }\n\n...\n\nthis.musicControls.create({\n  track       : 'Time is Running Out',        // optional, default : ''\n  artist      : 'Muse',                       // optional, default : ''\n  cover       : 'albums/absolution.jpg',      // optional, default : nothing\n  // cover can be a local path (use fullpath 'file:///storage/emulated/...', or only 'my_image.jpg' if my_image.jpg is in the www folder of your app)\n  //           or a remote url ('http://...', 'https://...', 'ftp://...')\n  isPlaying   : true,                         // optional, default : true\n  dismissable : true,                         // optional, default : false\n\n  // hide previous/next/close buttons:\n  hasPrev   : false,      // show previous button, optional, default: true\n  hasNext   : false,      // show next button, optional, default: true\n  hasClose  : true,       // show close button, optional, default: false\n\n// iOS only, optional\n  album       : 'Absolution',     // optional, default: ''\n  duration : 60, // optional, default: 0\n  elapsed : 10, // optional, default: 0\n  hasSkipForward : true,  // show skip forward button, optional, default: false\n  hasSkipBackward : true, // show skip backward button, optional, default: false\n  skipForwardInterval: 15, // display number for skip forward, optional, default: 0\n  skipBackwardInterval: 15, // display number for skip backward, optional, default: 0\n  hasScrubbing: false, // enable scrubbing from control center and lockscreen progress bar, optional\n\n  // Android only, optional\n  // text displayed in the status bar when the notification (and the ticker) are updated, optional\n  ticker    : 'Now playing \"Time is Running Out\"',\n  // All icons default to their built-in android equivalents\n  playIcon: 'media_play',\n  pauseIcon: 'media_pause',\n  prevIcon: 'media_prev',\n  nextIcon: 'media_next',\n  closeIcon: 'media_close',\n  notificationIcon: 'notification'\n });\n\n this.musicControls.subscribe().subscribe(action => {\n\n   function events(action) {\n     const message = JSON.parse(action).message;\n        switch(message) {\n            case 'music-controls-next':\n                // Do something\n                break;\n            case 'music-controls-previous':\n                // Do something\n                break;\n            case 'music-controls-pause':\n                // Do something\n                break;\n            case 'music-controls-play':\n                // Do something\n                break;\n            case 'music-controls-destroy':\n                // Do something\n                break;\n\n         // External controls (iOS only)\n         case 'music-controls-toggle-play-pause' :\n                // Do something\n                break;\n         case 'music-controls-seek-to':\n           const seekToInSeconds = JSON.parse(action).position;\n           this.musicControls.updateElapsed({\n             elapsed: seekToInSeconds,\n             isPlaying: true\n           });\n           // Do something\n           break;\n         case 'music-controls-skip-forward':\n           // Do something\n           break;\n         case 'music-controls-skip-backward':\n           // Do something\n           break;\n\n            // Headset events (Android only)\n            // All media button events are listed below\n            case 'music-controls-media-button' :\n                // Do something\n                break;\n            case 'music-controls-headset-unplugged':\n                // Do something\n                break;\n            case 'music-controls-headset-plugged':\n                // Do something\n                break;\n            default:\n                break;\n        }\n     }\n    });\n\n this.musicControls.listen(); // activates the observable above\n\n this.musicControls.updateIsPlaying(true);\n\n\n")))}h.isMDXComponent=!0}}]);