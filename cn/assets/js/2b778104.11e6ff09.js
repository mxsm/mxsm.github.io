"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[37426],{58215:(e,t,a)=>{a.d(t,{Z:()=>n});var r=a(67294);const n=function(e){let{children:t,hidden:a,className:n}=e;return r.createElement("div",{role:"tabpanel",hidden:a,className:n},t)}},26396:(e,t,a)=>{a.d(t,{Z:()=>m});var r=a(87462),n=a(67294),o=a(72389),s=a(79443);const i=function(){const e=(0,n.useContext)(s.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var l=a(89521),c=a(86010);const d="tabItem_vU9c";function u(e){var t,a;const{lazy:r,block:o,defaultValue:s,values:u,groupId:m,className:v}=e,p=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=u??p.map((e=>{let{props:{value:t,label:a}}=e;return{value:t,label:a}})),b=(0,l.lx)(h,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===s?s:s??(null==(t=p.find((e=>e.props.default)))?void 0:t.props.value)??(null==(a=p[0])?void 0:a.props.value);if(null!==g&&!h.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:f,setTabGroupChoices:k}=i(),[E,y]=(0,n.useState)(g),N=[],{blockElementScrollPositionUntilNextRender:C}=(0,l.o5)();if(null!=m){const e=f[m];null!=e&&e!==E&&h.some((t=>t.value===e))&&y(e)}const w=e=>{const t=e.currentTarget,a=N.indexOf(t),r=h[a].value;r!==E&&(C(t),y(r),null!=m&&k(m,r))},Z=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{const t=N.indexOf(e.currentTarget)+1;a=N[t]||N[0];break}case"ArrowLeft":{const t=N.indexOf(e.currentTarget)-1;a=N[t]||N[N.length-1];break}}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":o},v)},h.map((e=>{let{value:t,label:a}=e;return n.createElement("li",{role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,className:(0,c.Z)("tabs__item",d,{"tabs__item--active":E===t}),key:t,ref:e=>N.push(e),onKeyDown:Z,onFocus:w,onClick:w},a??t)}))),r?(0,n.cloneElement)(p.filter((e=>e.props.value===E))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},p.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==E})))))}function m(e){const t=(0,o.Z)();return n.createElement(u,(0,r.Z)({key:String(t)},e))}},47758:(e,t,a)=>{a.d(t,{Z:()=>l});var r=a(67294),n=a(86010),o=a(39960),s=a(44996);const i="card_7QME";const l=function(e){const t=void 0===e.href,a=void 0!==e.href&&/^http/.test(e.href),l="undefined"===e.header?null:r.createElement("header",{className:"Card-header"},e.header),c=e.hoverIcon||e.icon,d=r.createElement(r.Fragment,null,e.img&&r.createElement("img",{src:(0,s.Z)(e.img),className:"Card-image"}),r.createElement("div",{className:"Card-container"},(e.icon||c)&&r.createElement("div",{className:"Card-icon-row"},e.icon&&r.createElement("img",{src:(0,s.Z)(e.icon),className:"Card-icon Card-icon-default"}),c&&r.createElement("img",{src:(0,s.Z)(c),className:"Card-icon Card-icon-hover"})),e.ionicon&&r.createElement("ion-icon",{name:e.ionicon,className:"Card-ionicon"}),e.iconset&&r.createElement("div",{className:"Card-iconset__container"},e.iconset.split(",").map(((t,a)=>r.createElement("img",{src:(0,s.Z)(t),className:"Card-icon "+(a===e.activeIndex?"Card-icon-active":""),"data-index":a,key:a})))),e.header&&l,r.createElement("div",{className:"Card-content"},e.children))),u=(0,n.Z)({"Card-with-image":void 0!==e.img,"Card-without-image":void 0===e.img,"Card-size-lg":"lg"===e.size,[e.className]:e.className});return t?r.createElement("docs-card",{class:u},r.createElement("div",{className:(0,n.Z)(i,"docs-card")},d)):a?r.createElement("docs-card",{class:u},r.createElement("a",{className:(0,n.Z)(i,"docs-card"),href:e.href,target:"_blank"},d)):r.createElement("docs-card",{class:u},r.createElement(o.default,{to:e.href,className:(0,n.Z)(i,"docs-card")},d))}},88694:(e,t,a)=>{a.d(t,{Z:()=>l});var r=a(87462),n=a(86010),o=a(67294);const s="docsButton_1mtQ",i="docsButtonRound_ZJZD";function l(e){let{href:t,round:a=!1,...l}=e;return l.className=(0,n.Z)({[l.className]:Boolean(l.className),[s]:!0,"docs-button":!0,[i]:a,"docs-button--round":a}),t?o.createElement("a",(0,r.Z)({href:t,className:"docsButton"},l),l.children):o.createElement("button",(0,r.Z)({className:"docsButton"},l),l.children)}},4542:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>u,default:()=>h,frontMatter:()=>d,metadata:()=>m,toc:()=>v});var r=a(87462),n=(a(67294),a(3905)),o=a(47758),s=a(88694),i=a(26396),l=a(58215),c=a(19055);const d={sidebar_label:"Vibes"},u="Vibes",m={unversionedId:"native/vibes",id:"version-v5/native/vibes",isDocsHomePage:!1,title:"Vibes",description:"This plugin enables integration with the Vibes Push SDK to your Cordova project with Android and iOS supported.",source:"@site/versioned_docs/version-v5/native/vibes.md",sourceDirName:"native",slug:"/native/vibes",permalink:"/cn/docs/v5/native/vibes",editUrl:"https://crowdin.com/project/ionic-docs",tags:[],version:"v5",frontMatter:{sidebar_label:"Vibes"},sidebar:"version-v5/native",previous:{title:"Usabilla",permalink:"/cn/docs/v5/native/usabilla-cordova-sdk"},next:{title:"Vibration",permalink:"/cn/docs/v5/native/vibration"}},v=[{value:"Supported Platforms",id:"supported-platforms",children:[],level:2},{value:"Usage",id:"usage",children:[{value:"React",id:"react",children:[],level:3},{value:"Angular",id:"angular",children:[],level:3}],level:2}],p={toc:v};function h(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"vibes"},"Vibes"),(0,n.kt)("p",null,"This plugin enables integration with the Vibes Push SDK to your Cordova project with Android and iOS supported."),(0,n.kt)("p",null,(0,n.kt)("a",{href:"https://github.com/vibes/vibes-cordova.git",target:"_blank",rel:"noopener",className:"git-link"},(0,n.kt)("svg",{viewBox:"0 0 512 512"},(0,n.kt)("path",{d:"M416 160c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 23.7 12.9 44.3 32 55.4v8.6c0 19.9-7.8 33.7-25.3 44.9-15.4 9.8-38.1 17.1-67.5 21.5-14 2.1-25.7 6-35.2 10.7V151.4c19.1-11.1 32-31.7 32-55.4 0-35.3-28.7-64-64-64S96 60.7 96 96c0 23.7 12.9 44.3 32 55.4v209.2c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-16.6-6.3-31.7-16.7-43.1 1.9-4.9 9.7-16.3 29.4-19.3 38.8-5.8 68.9-15.9 92.3-30.8 36-22.8 55-57 55-98.8v-8.6c19.1-11.1 32-31.7 32-55.4zM160 56c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm0 400c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm192-256c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"}))," ","https://github.com/vibes/vibes-cordova.git")),(0,n.kt)("h2",null,"Stuck on a Cordova issue?"),(0,n.kt)(o.Z,{className:"cordova-ee-card",header:"Don't waste precious time on plugin issues.",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Native",mdxType:"DocsCard"},(0,n.kt)("div",null,(0,n.kt)("img",{src:"/docs/icons/native-cordova-bot.png",class:"cordova-ee-img"}),(0,n.kt)("p",null,"If you're building a serious project, you can't afford to spend hours troubleshooting. Ionic\u2019s experts offer premium advisory services for both community plugins and premier plugins."),(0,n.kt)(s.Z,{className:"native-ee-detail",mdxType:"DocsButton"},"Contact Us Today!"))),(0,n.kt)("h2",{id:"installation"},(0,n.kt)("a",{href:"#installation"},"Installation")),(0,n.kt)(i.Z,{groupId:"runtime",defaultValue:"Capacitor",values:[{value:"Capacitor",label:"Capacitor"},{value:"Cordova",label:"Cordova"},{value:"Enterprise",label:"Enterprise"}],mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Capacitor",mdxType:"TabItem"},(0,n.kt)(c.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ npm install vibes-cordova ","\n","$ npm install @awesome-cordova-plugins/vibes ","\n","$ ionic cap sync")),(0,n.kt)(l.Z,{value:"Cordova",mdxType:"TabItem"},(0,n.kt)(c.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ ionic cordova plugin add vibes-cordova ","\n","$ npm install @awesome-cordova-plugins/vibes ","\n")),(0,n.kt)(l.Z,{value:"Enterprise",mdxType:"TabItem"},(0,n.kt)("blockquote",null,"Ionic Enterprise comes with fully supported and maintained plugins from the Ionic Team. \xa0",(0,n.kt)("a",{class:"btn",href:"https://ionic.io/docs/premier-plugins"},"Learn More")," or if you're interested in an enterprise version of this plugin ",(0,n.kt)("a",{class:"btn",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine"},"Contact Us")))),(0,n.kt)("h2",{id:"supported-platforms"},"Supported Platforms"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Android"),(0,n.kt)("li",{parentName:"ul"},"iOS")),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("h3",{id:"react"},"React"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/cn/docs/v5/native/community#react"},"Learn more about using Ionic Native components in React")),(0,n.kt)("h3",{id:"angular"},"Angular"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Vibes } from '@awesome-cordova-plugins/vibes/ngx';\n\n\nconstructor(private vibes: Vibes) { }\n\n...\n\n\nthis.vibes.registerDevice()\n  .then((res: any) => console.log(`device registration success: ${res}`)) // retrieve and save the device_id from `res` JSON object\n  .catch((error: any) => console.error('Error registering device', error));\n\nthis.vibes.registerPush()\n  .then((res: any) => console.log(res))\n  .catch((error: any) => console.error('Error registering push', error));\n\nthis.vibes.getVibesDeviceInfo()\n  .then((res: any) => console.log(res)) // retrieve the `device_id` and `push_token` from the JSON object\n  .catch((error: any) => console.error('Error retrieving deviceinfo', error));\n\nthis.vibes.fetchInboxMessages()\n  .then((res: any) => console.log(res)) // fetches inbox messages for this person.\n  .catch((error: any) => console.error('Error fetching inbox messages for this person', error));\n")))}h.isMDXComponent=!0}}]);