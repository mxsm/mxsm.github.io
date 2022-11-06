"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[33341],{58215:(e,a,t)=>{t.d(a,{Z:()=>o});var n=t(67294);const o=function(e){let{children:a,hidden:t,className:o}=e;return n.createElement("div",{role:"tabpanel",hidden:t,className:o},a)}},26396:(e,a,t)=>{t.d(a,{Z:()=>u});var n=t(87462),o=t(67294),r=t(72389),s=t(79443);const i=function(){const e=(0,o.useContext)(s.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var l=t(89521),c=t(86010);const p="tabItem_vU9c";function d(e){var a,t;const{lazy:n,block:r,defaultValue:s,values:d,groupId:u,className:m}=e,v=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=d??v.map((e=>{let{props:{value:a,label:t}}=e;return{value:a,label:t}})),g=(0,l.lx)(h,((e,a)=>e.value===a.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===s?s:s??(null==(a=v.find((e=>e.props.default)))?void 0:a.props.value)??(null==(t=v[0])?void 0:t.props.value);if(null!==f&&!h.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:b}=i(),[N,C]=(0,o.useState)(f),E=[],{blockElementScrollPositionUntilNextRender:y}=(0,l.o5)();if(null!=u){const e=k[u];null!=e&&e!==N&&h.some((a=>a.value===e))&&C(e)}const w=e=>{const a=e.currentTarget,t=E.indexOf(a),n=h[t].value;n!==N&&(y(a),C(n),null!=u&&b(u,n))},Z=e=>{var a;let t=null;switch(e.key){case"ArrowRight":{const a=E.indexOf(e.currentTarget)+1;t=E[a]||E[0];break}case"ArrowLeft":{const a=E.indexOf(e.currentTarget)-1;t=E[a]||E[E.length-1];break}}null==(a=t)||a.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":r},m)},h.map((e=>{let{value:a,label:t}=e;return o.createElement("li",{role:"tab",tabIndex:N===a?0:-1,"aria-selected":N===a,className:(0,c.Z)("tabs__item",p,{"tabs__item--active":N===a}),key:a,ref:e=>E.push(e),onKeyDown:Z,onFocus:w,onClick:w},t??a)}))),n?(0,o.cloneElement)(v.filter((e=>e.props.value===N))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},v.map(((e,a)=>(0,o.cloneElement)(e,{key:a,hidden:e.props.value!==N})))))}function u(e){const a=(0,r.Z)();return o.createElement(d,(0,n.Z)({key:String(a)},e))}},47758:(e,a,t)=>{t.d(a,{Z:()=>l});var n=t(67294),o=t(86010),r=t(39960),s=t(44996);const i="card_7QME";const l=function(e){const a=void 0===e.href,t=void 0!==e.href&&/^http/.test(e.href),l="undefined"===e.header?null:n.createElement("header",{className:"Card-header"},e.header),c=e.hoverIcon||e.icon,p=n.createElement(n.Fragment,null,e.img&&n.createElement("img",{src:(0,s.Z)(e.img),className:"Card-image"}),n.createElement("div",{className:"Card-container"},(e.icon||c)&&n.createElement("div",{className:"Card-icon-row"},e.icon&&n.createElement("img",{src:(0,s.Z)(e.icon),className:"Card-icon Card-icon-default"}),c&&n.createElement("img",{src:(0,s.Z)(c),className:"Card-icon Card-icon-hover"})),e.ionicon&&n.createElement("ion-icon",{name:e.ionicon,className:"Card-ionicon"}),e.iconset&&n.createElement("div",{className:"Card-iconset__container"},e.iconset.split(",").map(((a,t)=>n.createElement("img",{src:(0,s.Z)(a),className:"Card-icon "+(t===e.activeIndex?"Card-icon-active":""),"data-index":t,key:t})))),e.header&&l,n.createElement("div",{className:"Card-content"},e.children))),d=(0,o.Z)({"Card-with-image":void 0!==e.img,"Card-without-image":void 0===e.img,"Card-size-lg":"lg"===e.size,[e.className]:e.className});return a?n.createElement("docs-card",{class:d},n.createElement("div",{className:(0,o.Z)(i,"docs-card")},p)):t?n.createElement("docs-card",{class:d},n.createElement("a",{className:(0,o.Z)(i,"docs-card"),href:e.href,target:"_blank"},p)):n.createElement("docs-card",{class:d},n.createElement(r.default,{to:e.href,className:(0,o.Z)(i,"docs-card")},p))}},88694:(e,a,t)=>{t.d(a,{Z:()=>l});var n=t(87462),o=t(86010),r=t(67294);const s="docsButton_1mtQ",i="docsButtonRound_ZJZD";function l(e){let{href:a,round:t=!1,...l}=e;return l.className=(0,o.Z)({[l.className]:Boolean(l.className),[s]:!0,"docs-button":!0,[i]:t,"docs-button--round":t}),a?r.createElement("a",(0,n.Z)({href:a,className:"docsButton"},l),l.children):r.createElement("button",(0,n.Z)({className:"docsButton"},l),l.children)}},70319:(e,a,t)=>{t.r(a),t.d(a,{contentTitle:()=>d,default:()=>h,frontMatter:()=>p,metadata:()=>u,toc:()=>m});var n=t(87462),o=(t(67294),t(3905)),r=t(47758),s=t(88694),i=t(26396),l=t(58215),c=t(19055);const p={title:"App Version"},d=void 0,u={unversionedId:"native/app-version",id:"native/app-version",isDocsHomePage:!1,title:"App Version",description:"App Version | Cordova Plugin App Version to Read Ionic Apps",source:"@site/docs/native/app-version.md",sourceDirName:"native",slug:"/native/app-version",permalink:"/cn/docs/native/app-version",editUrl:"https://crowdin.com/project/ionic-docs",tags:[],version:"current",frontMatter:{title:"App Version"},sidebar:"native",previous:{title:"App Rate",permalink:"/cn/docs/native/app-rate"},next:{title:"Apple Wallet",permalink:"/cn/docs/native/apple-wallet"}},m=[{value:"Supported Platforms",id:"supported-platforms",children:[],level:2},{value:"Usage",id:"usage",children:[{value:"React",id:"react",children:[],level:3},{value:"Angular",id:"angular",children:[],level:3}],level:2}],v={toc:m};function h(e){let{components:a,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},v,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("head",null,(0,o.kt)("title",null,"App Version | Cordova Plugin App Version to Read Ionic Apps"),(0,o.kt)("meta",{name:"description",content:"The App Version feature reads the version of your Ionic app from the target build settings. Usage requires the cordova-plugin-app-version. Read to learn more."})),(0,o.kt)("p",null,"Reads the version of your app from the target build settings."),(0,o.kt)("p",null,"Requires Cordova plugin: ",(0,o.kt)("inlineCode",{parentName:"p"},"cordova-plugin-app-version"),". For more info, please see the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/whiteoctober/cordova-plugin-app-version"},"Cordova App Version docs"),"."),(0,o.kt)("p",null,(0,o.kt)("a",{href:"https://github.com/whiteoctober/cordova-plugin-app-version",target:"_blank",rel:"noopener",className:"git-link"},(0,o.kt)("svg",{viewBox:"0 0 512 512"},(0,o.kt)("path",{d:"M416 160c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 23.7 12.9 44.3 32 55.4v8.6c0 19.9-7.8 33.7-25.3 44.9-15.4 9.8-38.1 17.1-67.5 21.5-14 2.1-25.7 6-35.2 10.7V151.4c19.1-11.1 32-31.7 32-55.4 0-35.3-28.7-64-64-64S96 60.7 96 96c0 23.7 12.9 44.3 32 55.4v209.2c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-16.6-6.3-31.7-16.7-43.1 1.9-4.9 9.7-16.3 29.4-19.3 38.8-5.8 68.9-15.9 92.3-30.8 36-22.8 55-57 55-98.8v-8.6c19.1-11.1 32-31.7 32-55.4zM160 56c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm0 400c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm192-256c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"}))," https://github.com/whiteoctober/cordova-plugin-app-version")),(0,o.kt)("h2",null,"Stuck on a Cordova issue?"),(0,o.kt)(r.Z,{className:"cordova-ee-card",header:"Don't waste precious time on plugin issues.",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Native",mdxType:"DocsCard"},(0,o.kt)("div",null,(0,o.kt)("img",{src:"/docs/icons/native-cordova-bot.png",class:"cordova-ee-img"}),(0,o.kt)("p",null,"If you're building a serious project, you can't afford to spend hours troubleshooting. Ionic\u2019s experts offer premium advisory services for both community plugins and premier plugins."),(0,o.kt)(s.Z,{className:"native-ee-detail",mdxType:"DocsButton"},"Contact Us Today!"))),(0,o.kt)("h2",{id:"installation"},(0,o.kt)("a",{href:"#installation"},"Installation")),(0,o.kt)(i.Z,{defaultValue:"Capacitor",groupId:"runtime",values:[{value:"Capacitor",label:"Capacitor"},{value:"Cordova",label:"Cordova"},{value:"Enterprise",label:"Enterprise"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"Capacitor",mdxType:"TabItem"},(0,o.kt)(c.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ npm install cordova-plugin-app-version ","\n","$ npm install @awesome-cordova-plugins/app-version ","\n","$ ionic cap sync")),(0,o.kt)(l.Z,{value:"Cordova",mdxType:"TabItem"},(0,o.kt)(c.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ ionic cordova plugin add cordova-plugin-app-version ","\n","$ npm install @awesome-cordova-plugins/app-version ","\n")),(0,o.kt)(l.Z,{value:"Enterprise",mdxType:"TabItem"},(0,o.kt)("blockquote",null,"Ionic Enterprise comes with fully supported and maintained plugins from the Ionic Team. \xa0",(0,o.kt)("a",{class:"btn",href:"https://ionic.io/docs/premier-plugins"},"Learn More")," or if you're interested in an enterprise version of this plugin ",(0,o.kt)("a",{class:"btn",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine"},"Contact Us")))),(0,o.kt)("h2",{id:"supported-platforms"},"Supported Platforms"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Android"),(0,o.kt)("li",{parentName:"ul"},"iOS"),(0,o.kt)("li",{parentName:"ul"},"Windows")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("h3",{id:"react"},"React"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/cn/docs/native/community#react"},"Learn more about using Ionic Native components in React")),(0,o.kt)("h3",{id:"angular"},"Angular"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { AppVersion } from '@awesome-cordova-plugins/app-version/ngx';\n\nconstructor(private appVersion: AppVersion) { }\n\n...\n\n\nthis.appVersion.getAppName();\nthis.appVersion.getPackageName();\nthis.appVersion.getVersionCode();\nthis.appVersion.getVersionNumber();\n\n")))}h.isMDXComponent=!0}}]);