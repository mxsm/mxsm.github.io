"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[8583],{58215:(e,t,a)=>{a.d(t,{Z:()=>n});var r=a(67294);const n=function(e){let{children:t,hidden:a,className:n}=e;return r.createElement("div",{role:"tabpanel",hidden:a,className:n},t)}},26396:(e,t,a)=>{a.d(t,{Z:()=>m});var r=a(87462),n=a(67294),s=a(72389),o=a(79443);const i=function(){const e=(0,n.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var l=a(89521),c=a(86010);const u="tabItem_vU9c";function d(e){var t,a;const{lazy:r,block:s,defaultValue:o,values:d,groupId:m,className:p}=e,v=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=d??v.map((e=>{let{props:{value:t,label:a}}=e;return{value:t,label:a}})),g=(0,l.lx)(h,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===o?o:o??(null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)??(null==(a=v[0])?void 0:a.props.value);if(null!==f&&!h.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:b}=i(),[E,N]=(0,n.useState)(f),y=[],{blockElementScrollPositionUntilNextRender:C}=(0,l.o5)();if(null!=m){const e=k[m];null!=e&&e!==E&&h.some((t=>t.value===e))&&N(e)}const w=e=>{const t=e.currentTarget,a=y.indexOf(t),r=h[a].value;r!==E&&(C(t),N(r),null!=m&&b(m,r))},Z=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{const t=y.indexOf(e.currentTarget)+1;a=y[t]||y[0];break}case"ArrowLeft":{const t=y.indexOf(e.currentTarget)-1;a=y[t]||y[y.length-1];break}}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":s},p)},h.map((e=>{let{value:t,label:a}=e;return n.createElement("li",{role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,className:(0,c.Z)("tabs__item",u,{"tabs__item--active":E===t}),key:t,ref:e=>y.push(e),onKeyDown:Z,onFocus:w,onClick:w},a??t)}))),r?(0,n.cloneElement)(v.filter((e=>e.props.value===E))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},v.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==E})))))}function m(e){const t=(0,s.Z)();return n.createElement(d,(0,r.Z)({key:String(t)},e))}},47758:(e,t,a)=>{a.d(t,{Z:()=>l});var r=a(67294),n=a(86010),s=a(39960),o=a(44996);const i="card_7QME";const l=function(e){const t=void 0===e.href,a=void 0!==e.href&&/^http/.test(e.href),l="undefined"===e.header?null:r.createElement("header",{className:"Card-header"},e.header),c=e.hoverIcon||e.icon,u=r.createElement(r.Fragment,null,e.img&&r.createElement("img",{src:(0,o.Z)(e.img),className:"Card-image"}),r.createElement("div",{className:"Card-container"},(e.icon||c)&&r.createElement("div",{className:"Card-icon-row"},e.icon&&r.createElement("img",{src:(0,o.Z)(e.icon),className:"Card-icon Card-icon-default"}),c&&r.createElement("img",{src:(0,o.Z)(c),className:"Card-icon Card-icon-hover"})),e.ionicon&&r.createElement("ion-icon",{name:e.ionicon,className:"Card-ionicon"}),e.iconset&&r.createElement("div",{className:"Card-iconset__container"},e.iconset.split(",").map(((t,a)=>r.createElement("img",{src:(0,o.Z)(t),className:"Card-icon "+(a===e.activeIndex?"Card-icon-active":""),"data-index":a,key:a})))),e.header&&l,r.createElement("div",{className:"Card-content"},e.children))),d=(0,n.Z)({"Card-with-image":void 0!==e.img,"Card-without-image":void 0===e.img,"Card-size-lg":"lg"===e.size,[e.className]:e.className});return t?r.createElement("docs-card",{class:d},r.createElement("div",{className:(0,n.Z)(i,"docs-card")},u)):a?r.createElement("docs-card",{class:d},r.createElement("a",{className:(0,n.Z)(i,"docs-card"),href:e.href,target:"_blank"},u)):r.createElement("docs-card",{class:d},r.createElement(s.default,{to:e.href,className:(0,n.Z)(i,"docs-card")},u))}},88694:(e,t,a)=>{a.d(t,{Z:()=>l});var r=a(87462),n=a(86010),s=a(67294);const o="docsButton_1mtQ",i="docsButtonRound_ZJZD";function l(e){let{href:t,round:a=!1,...l}=e;return l.className=(0,n.Z)({[l.className]:Boolean(l.className),[o]:!0,"docs-button":!0,[i]:a,"docs-button--round":a}),t?s.createElement("a",(0,r.Z)({href:t,className:"docsButton"},l),l.children):s.createElement("button",(0,r.Z)({className:"docsButton"},l),l.children)}},3175:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>d,default:()=>h,frontMatter:()=>u,metadata:()=>m,toc:()=>p});var r=a(87462),n=(a(67294),a(3905)),s=a(47758),o=a(88694),i=a(26396),l=a(58215),c=a(19055);const u={title:"Sms Retriever"},d=void 0,m={unversionedId:"native/sms-retriever",id:"native/sms-retriever",isDocsHomePage:!1,title:"Sms Retriever",description:"This plugin retrives the SMS which arrive without requiring READ permissions.",source:"@site/docs/native/sms-retriever.md",sourceDirName:"native",slug:"/native/sms-retriever",permalink:"/cn/docs/native/sms-retriever",editUrl:"https://crowdin.com/project/ionic-docs",tags:[],version:"current",frontMatter:{title:"Sms Retriever"},sidebar:"native",previous:{title:"Smartlook",permalink:"/cn/docs/native/smartlook"},next:{title:"SMS",permalink:"/cn/docs/native/sms"}},p=[{value:"Supported Platforms",id:"supported-platforms",children:[],level:2},{value:"Usage",id:"usage",children:[{value:"React",id:"react",children:[],level:3},{value:"Angular",id:"angular",children:[],level:3}],level:2}],v={toc:p};function h(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This plugin retrives the SMS which arrive without requiring READ permissions."),(0,n.kt)("p",null,(0,n.kt)("a",{href:"https://github.com/hanatharesh2712/ionic-native-sms-retriever-plugin-master",target:"_blank",rel:"noopener",className:"git-link"},(0,n.kt)("svg",{viewBox:"0 0 512 512"},(0,n.kt)("path",{d:"M416 160c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 23.7 12.9 44.3 32 55.4v8.6c0 19.9-7.8 33.7-25.3 44.9-15.4 9.8-38.1 17.1-67.5 21.5-14 2.1-25.7 6-35.2 10.7V151.4c19.1-11.1 32-31.7 32-55.4 0-35.3-28.7-64-64-64S96 60.7 96 96c0 23.7 12.9 44.3 32 55.4v209.2c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-16.6-6.3-31.7-16.7-43.1 1.9-4.9 9.7-16.3 29.4-19.3 38.8-5.8 68.9-15.9 92.3-30.8 36-22.8 55-57 55-98.8v-8.6c19.1-11.1 32-31.7 32-55.4zM160 56c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm0 400c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm192-256c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"}))," https://github.com/hanatharesh2712/ionic-native-sms-retriever-plugin-master")),(0,n.kt)("h2",null,"Stuck on a Cordova issue?"),(0,n.kt)(s.Z,{className:"cordova-ee-card",header:"Don't waste precious time on plugin issues.",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Native",mdxType:"DocsCard"},(0,n.kt)("div",null,(0,n.kt)("img",{src:"/docs/icons/native-cordova-bot.png",class:"cordova-ee-img"}),(0,n.kt)("p",null,"If you're building a serious project, you can't afford to spend hours troubleshooting. Ionic\u2019s experts offer premium advisory services for both community plugins and premier plugins."),(0,n.kt)(o.Z,{className:"native-ee-detail",mdxType:"DocsButton"},"Contact Us Today!"))),(0,n.kt)("h2",{id:"installation"},(0,n.kt)("a",{href:"#installation"},"Installation")),(0,n.kt)(i.Z,{defaultValue:"Capacitor",groupId:"runtime",values:[{value:"Capacitor",label:"Capacitor"},{value:"Cordova",label:"Cordova"},{value:"Enterprise",label:"Enterprise"}],mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Capacitor",mdxType:"TabItem"},(0,n.kt)(c.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ npm install cordova-plugin-sms-retriever-manager ","\n","$ npm install @awesome-cordova-plugins/sms-retriever ","\n","$ ionic cap sync")),(0,n.kt)(l.Z,{value:"Cordova",mdxType:"TabItem"},(0,n.kt)(c.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ ionic cordova plugin add cordova-plugin-sms-retriever-manager ","\n","$ npm install @awesome-cordova-plugins/sms-retriever ","\n")),(0,n.kt)(l.Z,{value:"Enterprise",mdxType:"TabItem"},(0,n.kt)("blockquote",null,"Ionic Enterprise comes with fully supported and maintained plugins from the Ionic Team. \xa0",(0,n.kt)("a",{class:"btn",href:"https://ionic.io/docs/premier-plugins"},"Learn More")," or if you're interested in an enterprise version of this plugin ",(0,n.kt)("a",{class:"btn",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine"},"Contact Us")))),(0,n.kt)("h2",{id:"supported-platforms"},"Supported Platforms"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Android")),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("h3",{id:"react"},"React"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/cn/docs/native/community#react"},"Learn more about using Ionic Native components in React")),(0,n.kt)("h3",{id:"angular"},"Angular"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"import { SmsRetriever } from '@awesome-cordova-plugins/sms-retriever';\n\n\nconstructor(private smsRetriever: SmsRetriever) { }\n\n...\n\n\nthis.smsRetriever.getAppHash()\n  .then((res: any) => console.log(res))\n  .catch((error: any) => console.error(error));\nthis.smsRetriever.startWatching()\n  .then((res: any) => console.log(res))\n  .catch((error: any) => console.error(error));\n\n")))}h.isMDXComponent=!0}}]);