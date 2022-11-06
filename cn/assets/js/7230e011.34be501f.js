"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[97412],{58215:(e,n,a)=>{a.d(n,{Z:()=>t});var r=a(67294);const t=function(e){let{children:n,hidden:a,className:t}=e;return r.createElement("div",{role:"tabpanel",hidden:a,className:t},n)}},26396:(e,n,a)=>{a.d(n,{Z:()=>m});var r=a(87462),t=a(67294),o=a(72389),i=a(79443);const s=function(){const e=(0,t.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var l=a(89521),c=a(86010);const d="tabItem_vU9c";function u(e){var n,a;const{lazy:r,block:o,defaultValue:i,values:u,groupId:m,className:v}=e,p=t.Children.map(e.children,(e=>{if((0,t.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=u??p.map((e=>{let{props:{value:n,label:a}}=e;return{value:n,label:a}})),h=(0,l.lx)(g,((e,n)=>e.value===n.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===i?i:i??(null==(n=p.find((e=>e.props.default)))?void 0:n.props.value)??(null==(a=p[0])?void 0:a.props.value);if(null!==f&&!g.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:k}=s(),[N,E]=(0,t.useState)(f),C=[],{blockElementScrollPositionUntilNextRender:w}=(0,l.o5)();if(null!=m){const e=b[m];null!=e&&e!==N&&g.some((n=>n.value===e))&&E(e)}const y=e=>{const n=e.currentTarget,a=C.indexOf(n),r=g[a].value;r!==N&&(w(n),E(r),null!=m&&k(m,r))},T=e=>{var n;let a=null;switch(e.key){case"ArrowRight":{const n=C.indexOf(e.currentTarget)+1;a=C[n]||C[0];break}case"ArrowLeft":{const n=C.indexOf(e.currentTarget)-1;a=C[n]||C[C.length-1];break}}null==(n=a)||n.focus()};return t.createElement("div",{className:"tabs-container"},t.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":o},v)},g.map((e=>{let{value:n,label:a}=e;return t.createElement("li",{role:"tab",tabIndex:N===n?0:-1,"aria-selected":N===n,className:(0,c.Z)("tabs__item",d,{"tabs__item--active":N===n}),key:n,ref:e=>C.push(e),onKeyDown:T,onFocus:y,onClick:y},a??n)}))),r?(0,t.cloneElement)(p.filter((e=>e.props.value===N))[0],{className:"margin-vert--md"}):t.createElement("div",{className:"margin-vert--md"},p.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==N})))))}function m(e){const n=(0,o.Z)();return t.createElement(u,(0,r.Z)({key:String(n)},e))}},47758:(e,n,a)=>{a.d(n,{Z:()=>l});var r=a(67294),t=a(86010),o=a(39960),i=a(44996);const s="card_7QME";const l=function(e){const n=void 0===e.href,a=void 0!==e.href&&/^http/.test(e.href),l="undefined"===e.header?null:r.createElement("header",{className:"Card-header"},e.header),c=e.hoverIcon||e.icon,d=r.createElement(r.Fragment,null,e.img&&r.createElement("img",{src:(0,i.Z)(e.img),className:"Card-image"}),r.createElement("div",{className:"Card-container"},(e.icon||c)&&r.createElement("div",{className:"Card-icon-row"},e.icon&&r.createElement("img",{src:(0,i.Z)(e.icon),className:"Card-icon Card-icon-default"}),c&&r.createElement("img",{src:(0,i.Z)(c),className:"Card-icon Card-icon-hover"})),e.ionicon&&r.createElement("ion-icon",{name:e.ionicon,className:"Card-ionicon"}),e.iconset&&r.createElement("div",{className:"Card-iconset__container"},e.iconset.split(",").map(((n,a)=>r.createElement("img",{src:(0,i.Z)(n),className:"Card-icon "+(a===e.activeIndex?"Card-icon-active":""),"data-index":a,key:a})))),e.header&&l,r.createElement("div",{className:"Card-content"},e.children))),u=(0,t.Z)({"Card-with-image":void 0!==e.img,"Card-without-image":void 0===e.img,"Card-size-lg":"lg"===e.size,[e.className]:e.className});return n?r.createElement("docs-card",{class:u},r.createElement("div",{className:(0,t.Z)(s,"docs-card")},d)):a?r.createElement("docs-card",{class:u},r.createElement("a",{className:(0,t.Z)(s,"docs-card"),href:e.href,target:"_blank"},d)):r.createElement("docs-card",{class:u},r.createElement(o.default,{to:e.href,className:(0,t.Z)(s,"docs-card")},d))}},88694:(e,n,a)=>{a.d(n,{Z:()=>l});var r=a(87462),t=a(86010),o=a(67294);const i="docsButton_1mtQ",s="docsButtonRound_ZJZD";function l(e){let{href:n,round:a=!1,...l}=e;return l.className=(0,t.Z)({[l.className]:Boolean(l.className),[i]:!0,"docs-button":!0,[s]:a,"docs-button--round":a}),n?o.createElement("a",(0,r.Z)({href:n,className:"docsButton"},l),l.children):o.createElement("button",(0,r.Z)({className:"docsButton"},l),l.children)}},17711:(e,n,a)=>{a.r(n),a.d(n,{contentTitle:()=>u,default:()=>g,frontMatter:()=>d,metadata:()=>m,toc:()=>v});var r=a(87462),t=(a(67294),a(3905)),o=a(47758),i=a(88694),s=a(26396),l=a(58215),c=a(19055);const d={sidebar_label:"Foreground Service"},u="Foreground Service",m={unversionedId:"native/foreground-service",id:"version-v5/native/foreground-service",isDocsHomePage:!1,title:"Foreground Service",description:"This plugin allows for android devices to continue running services in the background, using a",source:"@site/versioned_docs/version-v5/native/foreground-service.md",sourceDirName:"native",slug:"/native/foreground-service",permalink:"/cn/docs/v5/native/foreground-service",editUrl:"https://crowdin.com/project/ionic-docs",tags:[],version:"v5",frontMatter:{sidebar_label:"Foreground Service"},sidebar:"version-v5/native",previous:{title:"Flashlight",permalink:"/cn/docs/v5/native/flashlight"},next:{title:"FTP",permalink:"/cn/docs/v5/native/ftp"}},v=[{value:"Supported Platforms",id:"supported-platforms",children:[],level:2},{value:"Usage",id:"usage",children:[{value:"React",id:"react",children:[],level:3},{value:"Angular",id:"angular",children:[],level:3}],level:2}],p={toc:v};function g(e){let{components:n,...a}=e;return(0,t.kt)("wrapper",(0,r.Z)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"foreground-service"},"Foreground Service"),(0,t.kt)("p",null,"This plugin allows for android devices to continue running services in the background, using a\nforeground ongoing notification. This is targeted towards use with plugins such as\n'cordova-geolocation' that will not run while the app is in the background on android API 26+."),(0,t.kt)("p",null,"For android API 28+, the following xml snippet should be inserted into ",(0,t.kt)("inlineCode",{parentName:"p"},"config.xml"),":"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},'...\n<platform name="android">\n  <config-file parent="/*" target="AndroidManifest.xml">\n    <uses-permission android:name="android.permission.FOREGROUND_SERVICE" />\n  </config-file>\n  ...\n')),(0,t.kt)("p",null,(0,t.kt)("a",{href:"https://github.com/DavidBriglio/cordova-plugin-foreground-service",target:"_blank",rel:"noopener",className:"git-link"},(0,t.kt)("svg",{viewBox:"0 0 512 512"},(0,t.kt)("path",{d:"M416 160c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 23.7 12.9 44.3 32 55.4v8.6c0 19.9-7.8 33.7-25.3 44.9-15.4 9.8-38.1 17.1-67.5 21.5-14 2.1-25.7 6-35.2 10.7V151.4c19.1-11.1 32-31.7 32-55.4 0-35.3-28.7-64-64-64S96 60.7 96 96c0 23.7 12.9 44.3 32 55.4v209.2c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-16.6-6.3-31.7-16.7-43.1 1.9-4.9 9.7-16.3 29.4-19.3 38.8-5.8 68.9-15.9 92.3-30.8 36-22.8 55-57 55-98.8v-8.6c19.1-11.1 32-31.7 32-55.4zM160 56c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm0 400c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm192-256c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"}))," ","https://github.com/DavidBriglio/cordova-plugin-foreground-service")),(0,t.kt)("h2",null,"Stuck on a Cordova issue?"),(0,t.kt)(o.Z,{className:"cordova-ee-card",header:"Don't waste precious time on plugin issues.",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Native",mdxType:"DocsCard"},(0,t.kt)("div",null,(0,t.kt)("img",{src:"/docs/icons/native-cordova-bot.png",class:"cordova-ee-img"}),(0,t.kt)("p",null,"If you're building a serious project, you can't afford to spend hours troubleshooting. Ionic\u2019s experts offer premium advisory services for both community plugins and premier plugins."),(0,t.kt)(i.Z,{className:"native-ee-detail",mdxType:"DocsButton"},"Contact Us Today!"))),(0,t.kt)("h2",{id:"installation"},(0,t.kt)("a",{href:"#installation"},"Installation")),(0,t.kt)(s.Z,{groupId:"runtime",defaultValue:"Capacitor",values:[{value:"Capacitor",label:"Capacitor"},{value:"Cordova",label:"Cordova"},{value:"Enterprise",label:"Enterprise"}],mdxType:"Tabs"},(0,t.kt)(l.Z,{value:"Capacitor",mdxType:"TabItem"},(0,t.kt)(c.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ npm install cordova-plugin-foreground-service ","\n","$ npm install @awesome-cordova-plugins/foreground-service ","\n","$ ionic cap sync")),(0,t.kt)(l.Z,{value:"Cordova",mdxType:"TabItem"},(0,t.kt)(c.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ ionic cordova plugin add cordova-plugin-foreground-service ","\n","$ npm install @awesome-cordova-plugins/foreground-service ","\n")),(0,t.kt)(l.Z,{value:"Enterprise",mdxType:"TabItem"},(0,t.kt)("blockquote",null,"Ionic Enterprise comes with fully supported and maintained plugins from the Ionic Team. \xa0",(0,t.kt)("a",{class:"btn",href:"https://ionic.io/docs/premier-plugins"},"Learn More")," or if you're interested in an enterprise version of this plugin ",(0,t.kt)("a",{class:"btn",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine"},"Contact Us")))),(0,t.kt)("h2",{id:"supported-platforms"},"Supported Platforms"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Android")),(0,t.kt)("h2",{id:"usage"},"Usage"),(0,t.kt)("h3",{id:"react"},"React"),(0,t.kt)("p",null,(0,t.kt)("a",{parentName:"p",href:"/cn/docs/v5/native/community#react"},"Learn more about using Ionic Native components in React")),(0,t.kt)("h3",{id:"angular"},"Angular"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-tsx"},"import { ForegroundService } from '@awesome-cordova-plugins/foreground-service/ngx';\n\n\nconstructor(public foregroundService: ForegroundService) { }\n\n...\n\nstartService() {\n // Notification importance is optional, the default is 1 - Low (no sound or vibration)\n this.foregroundService.start('GPS Running', 'Background Service', 'drawable/fsicon');\n}\n\nstopService() {\n // Disable the foreground service\n this.foregroundService.stop();\n}\n\n")))}g.isMDXComponent=!0}}]);