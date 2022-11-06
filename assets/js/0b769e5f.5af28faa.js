"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[89996],{58215:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294);const o=function(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",hidden:a,className:o},t)}},26396:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(87462),o=a(67294),r=a(72389),i=a(79443);const l=function(){const e=(0,o.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var s=a(89521),c=a(86010);const u="tabItem_vU9c";function d(e){var t,a;const{lazy:n,block:r,defaultValue:i,values:d,groupId:m,className:p}=e,h=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=d??h.map((e=>{let{props:{value:t,label:a}}=e;return{value:t,label:a}})),g=(0,s.lx)(v,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===i?i:i??(null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)??(null==(a=h[0])?void 0:a.props.value);if(null!==f&&!v.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:b}=l(),[N,C]=(0,o.useState)(f),E=[],{blockElementScrollPositionUntilNextRender:T}=(0,s.o5)();if(null!=m){const e=k[m];null!=e&&e!==N&&v.some((t=>t.value===e))&&C(e)}const y=e=>{const t=e.currentTarget,a=E.indexOf(t),n=v[a].value;n!==N&&(T(t),C(n),null!=m&&b(m,n))},I=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{const t=E.indexOf(e.currentTarget)+1;a=E[t]||E[0];break}case"ArrowLeft":{const t=E.indexOf(e.currentTarget)-1;a=E[t]||E[E.length-1];break}}null==(t=a)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":r},p)},v.map((e=>{let{value:t,label:a}=e;return o.createElement("li",{role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,className:(0,c.Z)("tabs__item",u,{"tabs__item--active":N===t}),key:t,ref:e=>E.push(e),onKeyDown:I,onFocus:y,onClick:y},a??t)}))),n?(0,o.cloneElement)(h.filter((e=>e.props.value===N))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},h.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function m(e){const t=(0,r.Z)();return o.createElement(d,(0,n.Z)({key:String(t)},e))}},47758:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(67294),o=a(86010),r=a(39960),i=a(44996);const l="card_7QME";const s=function(e){const t=void 0===e.href,a=void 0!==e.href&&/^http/.test(e.href),s="undefined"===e.header?null:n.createElement("header",{className:"Card-header"},e.header),c=e.hoverIcon||e.icon,u=n.createElement(n.Fragment,null,e.img&&n.createElement("img",{src:(0,i.Z)(e.img),className:"Card-image"}),n.createElement("div",{className:"Card-container"},(e.icon||c)&&n.createElement("div",{className:"Card-icon-row"},e.icon&&n.createElement("img",{src:(0,i.Z)(e.icon),className:"Card-icon Card-icon-default"}),c&&n.createElement("img",{src:(0,i.Z)(c),className:"Card-icon Card-icon-hover"})),e.ionicon&&n.createElement("ion-icon",{name:e.ionicon,className:"Card-ionicon"}),e.iconset&&n.createElement("div",{className:"Card-iconset__container"},e.iconset.split(",").map(((t,a)=>n.createElement("img",{src:(0,i.Z)(t),className:"Card-icon "+(a===e.activeIndex?"Card-icon-active":""),"data-index":a,key:a})))),e.header&&s,n.createElement("div",{className:"Card-content"},e.children))),d=(0,o.Z)({"Card-with-image":void 0!==e.img,"Card-without-image":void 0===e.img,"Card-size-lg":"lg"===e.size,[e.className]:e.className});return t?n.createElement("docs-card",{class:d},n.createElement("div",{className:(0,o.Z)(l,"docs-card")},u)):a?n.createElement("docs-card",{class:d},n.createElement("a",{className:(0,o.Z)(l,"docs-card"),href:e.href,target:"_blank"},u)):n.createElement("docs-card",{class:d},n.createElement(r.default,{to:e.href,className:(0,o.Z)(l,"docs-card")},u))}},88694:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(87462),o=a(86010),r=a(67294);const i="docsButton_1mtQ",l="docsButtonRound_ZJZD";function s(e){let{href:t,round:a=!1,...s}=e;return s.className=(0,o.Z)({[s.className]:Boolean(s.className),[i]:!0,"docs-button":!0,[l]:a,"docs-button--round":a}),t?r.createElement("a",(0,n.Z)({href:t,className:"docsButton"},s),s.children):r.createElement("button",(0,n.Z)({className:"docsButton"},s),s.children)}},38615:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>d,default:()=>v,frontMatter:()=>u,metadata:()=>m,toc:()=>p});var n=a(87462),o=(a(67294),a(3905)),r=a(47758),i=a(88694),l=a(26396),s=a(58215),c=a(19055);const u={title:"Touch ID"},d=void 0,m={unversionedId:"native/touch-id",id:"native/touch-id",isDocsHomePage:!1,title:"Touch ID",description:"Touch ID | Cordova Fingerprint TouchID Plugin for iOS Ionic Apps",source:"@site/docs/native/touch-id.md",sourceDirName:"native",slug:"/native/touch-id",permalink:"/docs/native/touch-id",editUrl:"https://github.com/ionic-team/ionic-native/edit/master/src/@awesome-cordova-plugins/plugins/touch-id/index.ts",tags:[],version:"current",frontMatter:{title:"Touch ID"},sidebar:"native",previous:{title:"Toast",permalink:"/docs/native/toast"},next:{title:"Unvired Cordova SDK",permalink:"/docs/native/unvired-cordova-sdk"}},p=[{value:"Supported Platforms",id:"supported-platforms",children:[],level:2},{value:"Usage",id:"usage",children:[{value:"React",id:"react",children:[],level:3},{value:"Angular",id:"angular",children:[],level:3},{value:"Error Codes",id:"error-codes",children:[],level:3}],level:2}],h={toc:p};function v(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("head",null,(0,o.kt)("title",null,"Touch ID | Cordova Fingerprint TouchID Plugin for iOS Ionic Apps"),(0,o.kt)("meta",{name:"description",content:"Scan the fingerprint of a user with the TouchID sensor to access an Ionic app on an iOS device. Read to learn more about the Cordova Touch ID plugin."})),(0,o.kt)("p",null,"Scan the fingerprint of a user with the TouchID sensor."),(0,o.kt)("p",null,"Requires Cordova plugin: ",(0,o.kt)("inlineCode",{parentName:"p"},"cordova-plugin-touch-id"),". For more info, please see the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/EddyVerbruggen/cordova-plugin-touch-id"},"TouchID plugin docs"),"."),(0,o.kt)("p",null,(0,o.kt)("a",{href:"https://github.com/EddyVerbruggen/cordova-plugin-touch-id",target:"_blank",rel:"noopener",className:"git-link"},(0,o.kt)("svg",{viewBox:"0 0 512 512"},(0,o.kt)("path",{d:"M416 160c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 23.7 12.9 44.3 32 55.4v8.6c0 19.9-7.8 33.7-25.3 44.9-15.4 9.8-38.1 17.1-67.5 21.5-14 2.1-25.7 6-35.2 10.7V151.4c19.1-11.1 32-31.7 32-55.4 0-35.3-28.7-64-64-64S96 60.7 96 96c0 23.7 12.9 44.3 32 55.4v209.2c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-16.6-6.3-31.7-16.7-43.1 1.9-4.9 9.7-16.3 29.4-19.3 38.8-5.8 68.9-15.9 92.3-30.8 36-22.8 55-57 55-98.8v-8.6c19.1-11.1 32-31.7 32-55.4zM160 56c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm0 400c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm192-256c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"}))," https://github.com/EddyVerbruggen/cordova-plugin-touch-id")),(0,o.kt)("h2",null,"Stuck on a Cordova issue?"),(0,o.kt)(r.Z,{className:"cordova-ee-card",header:"Don't waste precious time on plugin issues.",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Native",mdxType:"DocsCard"},(0,o.kt)("div",null,(0,o.kt)("img",{src:"/docs/icons/native-cordova-bot.png",class:"cordova-ee-img"}),(0,o.kt)("p",null,"If you're building a serious project, you can't afford to spend hours troubleshooting. Ionic\u2019s experts offer premium advisory services for both community plugins and premier plugins."),(0,o.kt)(i.Z,{className:"native-ee-detail",mdxType:"DocsButton"},"Contact Us Today!"))),(0,o.kt)("h2",{id:"installation"},(0,o.kt)("a",{href:"#installation"},"Installation")),(0,o.kt)(l.Z,{defaultValue:"Capacitor",groupId:"runtime",values:[{value:"Capacitor",label:"Capacitor"},{value:"Cordova",label:"Cordova"},{value:"Enterprise",label:"Enterprise"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"Capacitor",mdxType:"TabItem"},(0,o.kt)(c.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ npm install cordova-plugin-touch-id ","\n","$ npm install @awesome-cordova-plugins/touch-id ","\n","$ ionic cap sync")),(0,o.kt)(s.Z,{value:"Cordova",mdxType:"TabItem"},(0,o.kt)(c.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ ionic cordova plugin add cordova-plugin-touch-id ","\n","$ npm install @awesome-cordova-plugins/touch-id ","\n")),(0,o.kt)(s.Z,{value:"Enterprise",mdxType:"TabItem"},(0,o.kt)("blockquote",null,"Ionic Enterprise comes with fully supported and maintained plugins from the Ionic Team. \xa0",(0,o.kt)("a",{class:"btn",href:"https://ionic.io/docs/premier-plugins"},"Learn More")," or if you're interested in an enterprise version of this plugin ",(0,o.kt)("a",{class:"btn",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine"},"Contact Us")))),(0,o.kt)("h2",{id:"supported-platforms"},"Supported Platforms"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"iOS")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("h3",{id:"react"},"React"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/native/community#react"},"Learn more about using Ionic Native components in React")),(0,o.kt)("h3",{id:"angular"},"Angular"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { TouchID } from '@awesome-cordova-plugins/touch-id/ngx';\n\nconstructor(private touchId: TouchID) { }\n\n...\n\nthis.touchId.isAvailable()\n  .then(\n    res => console.log('TouchID is available!'),\n    err => console.error('TouchID is not available', err)\n  );\n\nthis.touchId.verifyFingerprint('Scan your fingerprint please')\n  .then(\n    res => console.log('Ok', res),\n    err => console.error('Error', err)\n  );\n")),(0,o.kt)("h3",{id:"error-codes"},"Error Codes"),(0,o.kt)("p",null,"The plugin will reject for various reasons. Your app will most likely need to respond to the cases differently."),(0,o.kt)("p",null,"Here is a list of some of the error codes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-1")," - Fingerprint scan failed more than 3 times"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-2")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"-128")," - User tapped the 'Cancel' button"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-3")," - User tapped the 'Enter Passcode' or 'Enter Password' button"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-4")," - The scan was cancelled by the system (Home button for example)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-6")," - TouchID is not Available"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-8")," - TouchID is locked out from too many tries")))}v.isMDXComponent=!0}}]);