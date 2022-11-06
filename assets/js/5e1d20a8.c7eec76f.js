"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[80224],{58215:(e,t,a)=>{a.d(t,{Z:()=>n});var o=a(67294);const n=function(e){let{children:t,hidden:a,className:n}=e;return o.createElement("div",{role:"tabpanel",hidden:a,className:n},t)}},26396:(e,t,a)=>{a.d(t,{Z:()=>m});var o=a(87462),n=a(67294),s=a(72389),r=a(79443);const l=function(){const e=(0,n.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var c=a(89521),i=a(86010);const d="tabItem_vU9c";function u(e){var t,a;const{lazy:o,block:s,defaultValue:r,values:u,groupId:m,className:p}=e,v=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=u??v.map((e=>{let{props:{value:t,label:a}}=e;return{value:t,label:a}})),g=(0,c.lx)(h,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===r?r:r??(null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)??(null==(a=v[0])?void 0:a.props.value);if(null!==f&&!h.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:k}=l(),[C,y]=(0,n.useState)(f),N=[],{blockElementScrollPositionUntilNextRender:E}=(0,c.o5)();if(null!=m){const e=b[m];null!=e&&e!==C&&h.some((t=>t.value===e))&&y(e)}const w=e=>{const t=e.currentTarget,a=N.indexOf(t),o=h[a].value;o!==C&&(E(t),y(o),null!=m&&k(m,o))},Z=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{const t=N.indexOf(e.currentTarget)+1;a=N[t]||N[0];break}case"ArrowLeft":{const t=N.indexOf(e.currentTarget)-1;a=N[t]||N[N.length-1];break}}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":s},p)},h.map((e=>{let{value:t,label:a}=e;return n.createElement("li",{role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,className:(0,i.Z)("tabs__item",d,{"tabs__item--active":C===t}),key:t,ref:e=>N.push(e),onKeyDown:Z,onFocus:w,onClick:w},a??t)}))),o?(0,n.cloneElement)(v.filter((e=>e.props.value===C))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},v.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==C})))))}function m(e){const t=(0,s.Z)();return n.createElement(u,(0,o.Z)({key:String(t)},e))}},47758:(e,t,a)=>{a.d(t,{Z:()=>c});var o=a(67294),n=a(86010),s=a(39960),r=a(44996);const l="card_7QME";const c=function(e){const t=void 0===e.href,a=void 0!==e.href&&/^http/.test(e.href),c="undefined"===e.header?null:o.createElement("header",{className:"Card-header"},e.header),i=e.hoverIcon||e.icon,d=o.createElement(o.Fragment,null,e.img&&o.createElement("img",{src:(0,r.Z)(e.img),className:"Card-image"}),o.createElement("div",{className:"Card-container"},(e.icon||i)&&o.createElement("div",{className:"Card-icon-row"},e.icon&&o.createElement("img",{src:(0,r.Z)(e.icon),className:"Card-icon Card-icon-default"}),i&&o.createElement("img",{src:(0,r.Z)(i),className:"Card-icon Card-icon-hover"})),e.ionicon&&o.createElement("ion-icon",{name:e.ionicon,className:"Card-ionicon"}),e.iconset&&o.createElement("div",{className:"Card-iconset__container"},e.iconset.split(",").map(((t,a)=>o.createElement("img",{src:(0,r.Z)(t),className:"Card-icon "+(a===e.activeIndex?"Card-icon-active":""),"data-index":a,key:a})))),e.header&&c,o.createElement("div",{className:"Card-content"},e.children))),u=(0,n.Z)({"Card-with-image":void 0!==e.img,"Card-without-image":void 0===e.img,"Card-size-lg":"lg"===e.size,[e.className]:e.className});return t?o.createElement("docs-card",{class:u},o.createElement("div",{className:(0,n.Z)(l,"docs-card")},d)):a?o.createElement("docs-card",{class:u},o.createElement("a",{className:(0,n.Z)(l,"docs-card"),href:e.href,target:"_blank"},d)):o.createElement("docs-card",{class:u},o.createElement(s.default,{to:e.href,className:(0,n.Z)(l,"docs-card")},d))}},88694:(e,t,a)=>{a.d(t,{Z:()=>c});var o=a(87462),n=a(86010),s=a(67294);const r="docsButton_1mtQ",l="docsButtonRound_ZJZD";function c(e){let{href:t,round:a=!1,...c}=e;return c.className=(0,n.Z)({[c.className]:Boolean(c.className),[r]:!0,"docs-button":!0,[l]:a,"docs-button--round":a}),t?s.createElement("a",(0,o.Z)({href:t,className:"docsButton"},c),c.children):s.createElement("button",(0,o.Z)({className:"docsButton"},c),c.children)}},73503:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>u,default:()=>h,frontMatter:()=>d,metadata:()=>m,toc:()=>p});var o=a(87462),n=(a(67294),a(3905)),s=a(47758),r=a(88694),l=a(26396),c=a(58215),i=a(19055);const d={sidebar_label:"Code Push"},u="Code Push",m={unversionedId:"native/code-push",id:"version-v5/native/code-push",isDocsHomePage:!1,title:"Code Push",description:"CodePush plugin for Cordova by Microsoft that supports iOS and Android.",source:"@site/versioned_docs/version-v5/native/code-push.md",sourceDirName:"native",slug:"/native/code-push",permalink:"/docs/v5/native/code-push",editUrl:"https://github.com/ionic-team/ionic-native/edit/master/src/@awesome-cordova-plugins/plugins/code-push/index.ts",tags:[],version:"v5",frontMatter:{sidebar_label:"Code Push"},sidebar:"version-v5/native",previous:{title:"Cloud Settings",permalink:"/docs/v5/native/cloud-settings"},next:{title:"CustomUISDK",permalink:"/docs/v5/native/custom-uisdk"}},p=[{value:"Supported Platforms",id:"supported-platforms",children:[],level:2},{value:"Usage",id:"usage",children:[{value:"React",id:"react",children:[],level:3},{value:"Angular",id:"angular",children:[],level:3}],level:2}],v={toc:p};function h(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"code-push"},"Code Push"),(0,n.kt)("p",null,"CodePush plugin for Cordova by Microsoft that supports iOS and Android."),(0,n.kt)("p",null,"For more info, please see ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Dellos7/example-cordova-code-push-plugin"},"https://github.com/Dellos7/example-cordova-code-push-plugin")),(0,n.kt)("p",null,(0,n.kt)("a",{href:"https://github.com/Microsoft/cordova-plugin-code-push",target:"_blank",rel:"noopener",className:"git-link"},(0,n.kt)("svg",{viewBox:"0 0 512 512"},(0,n.kt)("path",{d:"M416 160c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 23.7 12.9 44.3 32 55.4v8.6c0 19.9-7.8 33.7-25.3 44.9-15.4 9.8-38.1 17.1-67.5 21.5-14 2.1-25.7 6-35.2 10.7V151.4c19.1-11.1 32-31.7 32-55.4 0-35.3-28.7-64-64-64S96 60.7 96 96c0 23.7 12.9 44.3 32 55.4v209.2c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-16.6-6.3-31.7-16.7-43.1 1.9-4.9 9.7-16.3 29.4-19.3 38.8-5.8 68.9-15.9 92.3-30.8 36-22.8 55-57 55-98.8v-8.6c19.1-11.1 32-31.7 32-55.4zM160 56c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm0 400c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm192-256c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"}))," ","https://github.com/Microsoft/cordova-plugin-code-push")),(0,n.kt)("h2",null,"Stuck on a Cordova issue?"),(0,n.kt)(s.Z,{className:"cordova-ee-card",header:"Don't waste precious time on plugin issues.",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Native",mdxType:"DocsCard"},(0,n.kt)("div",null,(0,n.kt)("img",{src:"/docs/icons/native-cordova-bot.png",class:"cordova-ee-img"}),(0,n.kt)("p",null,"If you're building a serious project, you can't afford to spend hours troubleshooting. Ionic\u2019s experts offer premium advisory services for both community plugins and premier plugins."),(0,n.kt)(r.Z,{className:"native-ee-detail",mdxType:"DocsButton"},"Contact Us Today!"))),(0,n.kt)("h2",{id:"installation"},(0,n.kt)("a",{href:"#installation"},"Installation")),(0,n.kt)(l.Z,{groupId:"runtime",defaultValue:"Capacitor",values:[{value:"Capacitor",label:"Capacitor"},{value:"Cordova",label:"Cordova"},{value:"Enterprise",label:"Enterprise"}],mdxType:"Tabs"},(0,n.kt)(c.Z,{value:"Capacitor",mdxType:"TabItem"},(0,n.kt)(i.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ npm install cordova-plugin-code-push ","\n","$ npm install @awesome-cordova-plugins/code-push ","\n","$ ionic cap sync")),(0,n.kt)(c.Z,{value:"Cordova",mdxType:"TabItem"},(0,n.kt)(i.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ ionic cordova plugin add cordova-plugin-code-push ","\n","$ npm install @awesome-cordova-plugins/code-push ","\n")),(0,n.kt)(c.Z,{value:"Enterprise",mdxType:"TabItem"},(0,n.kt)("blockquote",null,"Ionic Enterprise comes with fully supported and maintained plugins from the Ionic Team. \xa0",(0,n.kt)("a",{class:"btn",href:"https://ionic.io/docs/premier-plugins"},"Learn More")," or if you're interested in an enterprise version of this plugin ",(0,n.kt)("a",{class:"btn",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine"},"Contact Us")))),(0,n.kt)("h2",{id:"supported-platforms"},"Supported Platforms"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Android"),(0,n.kt)("li",{parentName:"ul"},"iOS")),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("h3",{id:"react"},"React"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/v5/native/community#react"},"Learn more about using Ionic Native components in React")),(0,n.kt)("h3",{id:"angular"},"Angular"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"import { CodePush } from '@awesome-cordova-plugins/code-push/ngx';\n\nconstructor(private codePush: CodePush) { }\n\n...\n\n// note - mostly error & completed methods of observable will not fire\n// as syncStatus will contain the current state of the update\nthis.codePush.sync().subscribe((syncStatus) => console.log(syncStatus));\n\nconst downloadProgress = (progress) => { console.log(`Downloaded ${progress.receivedBytes} of ${progress.totalBytes}`); }\nthis.codePush.sync({}, downloadProgress).subscribe((syncStatus) => console.log(syncStatus));\n\n")))}h.isMDXComponent=!0}}]);