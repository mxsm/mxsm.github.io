"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[80277],{58215:(e,t,a)=>{a.d(t,{Z:()=>n});var o=a(67294);const n=function(e){let{children:t,hidden:a,className:n}=e;return o.createElement("div",{role:"tabpanel",hidden:a,className:n},t)}},26396:(e,t,a)=>{a.d(t,{Z:()=>m});var o=a(87462),n=a(67294),r=a(72389),l=a(79443);const i=function(){const e=(0,n.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var s=a(89521),c=a(86010);const u="tabItem_vU9c";function d(e){var t,a;const{lazy:o,block:r,defaultValue:l,values:d,groupId:m,className:p}=e,h=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=d??h.map((e=>{let{props:{value:t,label:a}}=e;return{value:t,label:a}})),b=(0,s.lx)(v,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===l?l:l??(null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)??(null==(a=h[0])?void 0:a.props.value);if(null!==f&&!v.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:k}=i(),[w,N]=(0,n.useState)(f),E=[],{blockElementScrollPositionUntilNextRender:y}=(0,s.o5)();if(null!=m){const e=g[m];null!=e&&e!==w&&v.some((t=>t.value===e))&&N(e)}const C=e=>{const t=e.currentTarget,a=E.indexOf(t),o=v[a].value;o!==w&&(y(t),N(o),null!=m&&k(m,o))},x=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{const t=E.indexOf(e.currentTarget)+1;a=E[t]||E[0];break}case"ArrowLeft":{const t=E.indexOf(e.currentTarget)-1;a=E[t]||E[E.length-1];break}}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":r},p)},v.map((e=>{let{value:t,label:a}=e;return n.createElement("li",{role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,className:(0,c.Z)("tabs__item",u,{"tabs__item--active":w===t}),key:t,ref:e=>E.push(e),onKeyDown:x,onFocus:C,onClick:C},a??t)}))),o?(0,n.cloneElement)(h.filter((e=>e.props.value===w))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},h.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function m(e){const t=(0,r.Z)();return n.createElement(d,(0,o.Z)({key:String(t)},e))}},47758:(e,t,a)=>{a.d(t,{Z:()=>s});var o=a(67294),n=a(86010),r=a(39960),l=a(44996);const i="card_7QME";const s=function(e){const t=void 0===e.href,a=void 0!==e.href&&/^http/.test(e.href),s="undefined"===e.header?null:o.createElement("header",{className:"Card-header"},e.header),c=e.hoverIcon||e.icon,u=o.createElement(o.Fragment,null,e.img&&o.createElement("img",{src:(0,l.Z)(e.img),className:"Card-image"}),o.createElement("div",{className:"Card-container"},(e.icon||c)&&o.createElement("div",{className:"Card-icon-row"},e.icon&&o.createElement("img",{src:(0,l.Z)(e.icon),className:"Card-icon Card-icon-default"}),c&&o.createElement("img",{src:(0,l.Z)(c),className:"Card-icon Card-icon-hover"})),e.ionicon&&o.createElement("ion-icon",{name:e.ionicon,className:"Card-ionicon"}),e.iconset&&o.createElement("div",{className:"Card-iconset__container"},e.iconset.split(",").map(((t,a)=>o.createElement("img",{src:(0,l.Z)(t),className:"Card-icon "+(a===e.activeIndex?"Card-icon-active":""),"data-index":a,key:a})))),e.header&&s,o.createElement("div",{className:"Card-content"},e.children))),d=(0,n.Z)({"Card-with-image":void 0!==e.img,"Card-without-image":void 0===e.img,"Card-size-lg":"lg"===e.size,[e.className]:e.className});return t?o.createElement("docs-card",{class:d},o.createElement("div",{className:(0,n.Z)(i,"docs-card")},u)):a?o.createElement("docs-card",{class:d},o.createElement("a",{className:(0,n.Z)(i,"docs-card"),href:e.href,target:"_blank"},u)):o.createElement("docs-card",{class:d},o.createElement(r.default,{to:e.href,className:(0,n.Z)(i,"docs-card")},u))}},88694:(e,t,a)=>{a.d(t,{Z:()=>s});var o=a(87462),n=a(86010),r=a(67294);const l="docsButton_1mtQ",i="docsButtonRound_ZJZD";function s(e){let{href:t,round:a=!1,...s}=e;return s.className=(0,n.Z)({[s.className]:Boolean(s.className),[l]:!0,"docs-button":!0,[i]:a,"docs-button--round":a}),t?r.createElement("a",(0,o.Z)({href:t,className:"docsButton"},s),s.children):r.createElement("button",(0,o.Z)({className:"docsButton"},s),s.children)}},5474:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>d,default:()=>v,frontMatter:()=>u,metadata:()=>m,toc:()=>p});var o=a(87462),n=(a(67294),a(3905)),r=a(47758),l=a(88694),i=a(26396),s=a(58215),c=a(19055);const u={sidebar_label:"Bluetooth Serial"},d="Bluetooth Serial",m={unversionedId:"native/bluetooth-serial",id:"version-v5/native/bluetooth-serial",isDocsHomePage:!1,title:"Bluetooth Serial",description:"This plugin enables serial communication over Bluetooth. It was written for communicating between Android or iOS and an Arduino (not Android to Android or iOS to iOS).",source:"@site/versioned_docs/version-v5/native/bluetooth-serial.md",sourceDirName:"native",slug:"/native/bluetooth-serial",permalink:"/docs/v5/native/bluetooth-serial",editUrl:"https://github.com/ionic-team/ionic-native/edit/master/src/@awesome-cordova-plugins/plugins/bluetooth-serial/index.ts",tags:[],version:"v5",frontMatter:{sidebar_label:"Bluetooth Serial"},sidebar:"version-v5/native",previous:{title:"BluetoothLE",permalink:"/docs/v5/native/bluetooth-le"},next:{title:"BranchIo",permalink:"/docs/v5/native/branch-io"}},p=[{value:"Supported Platforms",id:"supported-platforms",children:[],level:2},{value:"Usage",id:"usage",children:[{value:"React",id:"react",children:[],level:3},{value:"Angular",id:"angular",children:[],level:3}],level:2}],h={toc:p};function v(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"bluetooth-serial"},"Bluetooth Serial"),(0,n.kt)("p",null,"This plugin enables serial communication over Bluetooth. It was written for communicating between Android or iOS and an Arduino (not Android to Android or iOS to iOS)."),(0,n.kt)("p",null,(0,n.kt)("a",{href:"https://github.com/don/BluetoothSerial",target:"_blank",rel:"noopener",className:"git-link"},(0,n.kt)("svg",{viewBox:"0 0 512 512"},(0,n.kt)("path",{d:"M416 160c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 23.7 12.9 44.3 32 55.4v8.6c0 19.9-7.8 33.7-25.3 44.9-15.4 9.8-38.1 17.1-67.5 21.5-14 2.1-25.7 6-35.2 10.7V151.4c19.1-11.1 32-31.7 32-55.4 0-35.3-28.7-64-64-64S96 60.7 96 96c0 23.7 12.9 44.3 32 55.4v209.2c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-16.6-6.3-31.7-16.7-43.1 1.9-4.9 9.7-16.3 29.4-19.3 38.8-5.8 68.9-15.9 92.3-30.8 36-22.8 55-57 55-98.8v-8.6c19.1-11.1 32-31.7 32-55.4zM160 56c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm0 400c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm192-256c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"}))," ","https://github.com/don/BluetoothSerial")),(0,n.kt)("h2",null,"Stuck on a Cordova issue?"),(0,n.kt)(r.Z,{className:"cordova-ee-card",header:"Don't waste precious time on plugin issues.",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Native",mdxType:"DocsCard"},(0,n.kt)("div",null,(0,n.kt)("img",{src:"/docs/icons/native-cordova-bot.png",class:"cordova-ee-img"}),(0,n.kt)("p",null,"If you're building a serious project, you can't afford to spend hours troubleshooting. Ionic\u2019s experts offer premium advisory services for both community plugins and premier plugins."),(0,n.kt)(l.Z,{className:"native-ee-detail",mdxType:"DocsButton"},"Contact Us Today!"))),(0,n.kt)("h2",{id:"installation"},(0,n.kt)("a",{href:"#installation"},"Installation")),(0,n.kt)(i.Z,{groupId:"runtime",defaultValue:"Capacitor",values:[{value:"Capacitor",label:"Capacitor"},{value:"Cordova",label:"Cordova"},{value:"Enterprise",label:"Enterprise"}],mdxType:"Tabs"},(0,n.kt)(s.Z,{value:"Capacitor",mdxType:"TabItem"},(0,n.kt)(c.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ npm install cordova-plugin-bluetooth-serial ","\n","$ npm install @awesome-cordova-plugins/bluetooth-serial ","\n","$ ionic cap sync")),(0,n.kt)(s.Z,{value:"Cordova",mdxType:"TabItem"},(0,n.kt)(c.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ ionic cordova plugin add cordova-plugin-bluetooth-serial ","\n","$ npm install @awesome-cordova-plugins/bluetooth-serial ","\n")),(0,n.kt)(s.Z,{value:"Enterprise",mdxType:"TabItem"},(0,n.kt)("blockquote",null,"Ionic Enterprise comes with fully supported and maintained plugins from the Ionic Team. \xa0",(0,n.kt)("a",{class:"btn",href:"https://ionic.io/docs/premier-plugins"},"Learn More")," or if you're interested in an enterprise version of this plugin ",(0,n.kt)("a",{class:"btn",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine"},"Contact Us")))),(0,n.kt)("h2",{id:"supported-platforms"},"Supported Platforms"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Android"),(0,n.kt)("li",{parentName:"ul"},"iOS"),(0,n.kt)("li",{parentName:"ul"},"Windows Phone 8")),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("h3",{id:"react"},"React"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/v5/native/community#react"},"Learn more about using Ionic Native components in React")),(0,n.kt)("h3",{id:"angular"},"Angular"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"import { BluetoothSerial } from '@awesome-cordova-plugins/bluetooth-serial/ngx';\n\nconstructor(private bluetoothSerial: BluetoothSerial) { }\n\n\n// Write a string\nthis.bluetoothSerial.write('hello world').then(success, failure);\n\n// Array of int or bytes\nthis.bluetoothSerial.write([186, 220, 222]).then(success, failure);\n\n// Typed Array\nvar data = new Uint8Array(4);\ndata[0] = 0x41;\ndata[1] = 0x42;\ndata[2] = 0x43;\ndata[3] = 0x44;\nthis.bluetoothSerial.write(data).then(success, failure);\n\n// Array Buffer\nthis.bluetoothSerial.write(data.buffer).then(success, failure);\n")))}v.isMDXComponent=!0}}]);