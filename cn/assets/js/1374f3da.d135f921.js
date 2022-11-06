"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[3662],{58215:(e,a,t)=>{t.d(a,{Z:()=>r});var n=t(67294);const r=function(e){let{children:a,hidden:t,className:r}=e;return n.createElement("div",{role:"tabpanel",hidden:t,className:r},a)}},26396:(e,a,t)=>{t.d(a,{Z:()=>u});var n=t(87462),r=t(67294),s=t(72389),o=t(79443);const c=function(){const e=(0,r.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var l=t(89521),i=t(86010);const d="tabItem_vU9c";function p(e){var a,t;const{lazy:n,block:s,defaultValue:o,values:p,groupId:u,className:m}=e,h=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=p??h.map((e=>{let{props:{value:a,label:t}}=e;return{value:a,label:t}})),f=(0,l.lx)(v,((e,a)=>e.value===a.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===o?o:o??(null==(a=h.find((e=>e.props.default)))?void 0:a.props.value)??(null==(t=h[0])?void 0:t.props.value);if(null!==g&&!v.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:C}=c(),[b,y]=(0,r.useState)(g),N=[],{blockElementScrollPositionUntilNextRender:E}=(0,l.o5)();if(null!=u){const e=k[u];null!=e&&e!==b&&v.some((a=>a.value===e))&&y(e)}const w=e=>{const a=e.currentTarget,t=N.indexOf(a),n=v[t].value;n!==b&&(E(a),y(n),null!=u&&C(u,n))},Z=e=>{var a;let t=null;switch(e.key){case"ArrowRight":{const a=N.indexOf(e.currentTarget)+1;t=N[a]||N[0];break}case"ArrowLeft":{const a=N.indexOf(e.currentTarget)-1;t=N[a]||N[N.length-1];break}}null==(a=t)||a.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":s},m)},v.map((e=>{let{value:a,label:t}=e;return r.createElement("li",{role:"tab",tabIndex:b===a?0:-1,"aria-selected":b===a,className:(0,i.Z)("tabs__item",d,{"tabs__item--active":b===a}),key:a,ref:e=>N.push(e),onKeyDown:Z,onFocus:w,onClick:w},t??a)}))),n?(0,r.cloneElement)(h.filter((e=>e.props.value===b))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},h.map(((e,a)=>(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==b})))))}function u(e){const a=(0,s.Z)();return r.createElement(p,(0,n.Z)({key:String(a)},e))}},47758:(e,a,t)=>{t.d(a,{Z:()=>l});var n=t(67294),r=t(86010),s=t(39960),o=t(44996);const c="card_7QME";const l=function(e){const a=void 0===e.href,t=void 0!==e.href&&/^http/.test(e.href),l="undefined"===e.header?null:n.createElement("header",{className:"Card-header"},e.header),i=e.hoverIcon||e.icon,d=n.createElement(n.Fragment,null,e.img&&n.createElement("img",{src:(0,o.Z)(e.img),className:"Card-image"}),n.createElement("div",{className:"Card-container"},(e.icon||i)&&n.createElement("div",{className:"Card-icon-row"},e.icon&&n.createElement("img",{src:(0,o.Z)(e.icon),className:"Card-icon Card-icon-default"}),i&&n.createElement("img",{src:(0,o.Z)(i),className:"Card-icon Card-icon-hover"})),e.ionicon&&n.createElement("ion-icon",{name:e.ionicon,className:"Card-ionicon"}),e.iconset&&n.createElement("div",{className:"Card-iconset__container"},e.iconset.split(",").map(((a,t)=>n.createElement("img",{src:(0,o.Z)(a),className:"Card-icon "+(t===e.activeIndex?"Card-icon-active":""),"data-index":t,key:t})))),e.header&&l,n.createElement("div",{className:"Card-content"},e.children))),p=(0,r.Z)({"Card-with-image":void 0!==e.img,"Card-without-image":void 0===e.img,"Card-size-lg":"lg"===e.size,[e.className]:e.className});return a?n.createElement("docs-card",{class:p},n.createElement("div",{className:(0,r.Z)(c,"docs-card")},d)):t?n.createElement("docs-card",{class:p},n.createElement("a",{className:(0,r.Z)(c,"docs-card"),href:e.href,target:"_blank"},d)):n.createElement("docs-card",{class:p},n.createElement(s.default,{to:e.href,className:(0,r.Z)(c,"docs-card")},d))}},88694:(e,a,t)=>{t.d(a,{Z:()=>l});var n=t(87462),r=t(86010),s=t(67294);const o="docsButton_1mtQ",c="docsButtonRound_ZJZD";function l(e){let{href:a,round:t=!1,...l}=e;return l.className=(0,r.Z)({[l.className]:Boolean(l.className),[o]:!0,"docs-button":!0,[c]:t,"docs-button--round":t}),a?s.createElement("a",(0,n.Z)({href:a,className:"docsButton"},l),l.children):s.createElement("button",(0,n.Z)({className:"docsButton"},l),l.children)}},65791:(e,a,t)=>{t.r(a),t.d(a,{contentTitle:()=>p,default:()=>v,frontMatter:()=>d,metadata:()=>u,toc:()=>m});var n=t(87462),r=(t(67294),t(3905)),s=t(47758),o=t(88694),c=t(26396),l=t(58215),i=t(19055);const d={title:"App Center Crashes"},p=void 0,u={unversionedId:"native/app-center-crashes",id:"native/app-center-crashes",isDocsHomePage:!1,title:"App Center Crashes",description:"App Center Crashes - Report to Analyze Android and iOS Crashes",source:"@site/docs/native/app-center-crashes.md",sourceDirName:"native",slug:"/native/app-center-crashes",permalink:"/cn/docs/native/app-center-crashes",editUrl:"https://crowdin.com/project/ionic-docs",tags:[],version:"current",frontMatter:{title:"App Center Crashes"},sidebar:"native",previous:{title:"App Center Analytics",permalink:"/cn/docs/native/app-center-analytics"},next:{title:"App Center Low Memory",permalink:"/cn/docs/native/app-center-low-memory"}},m=[{value:"Supported Platforms",id:"supported-platforms",children:[],level:2},{value:"Usage",id:"usage",children:[{value:"React",id:"react",children:[],level:3},{value:"Angular",id:"angular",children:[],level:3}],level:2}],h={toc:m};function v(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},h,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("title",null,"App Center Crashes - Report to Analyze Android and iOS Crashes"),(0,r.kt)("meta",{name:"description",content:"App Center Analytics helps you understand user behavior and customer engagement to improve your app. Learn to analyze reports for Android and iOS crashes."})),(0,r.kt)("p",null,"App Center Analytics helps you understand user behavior and customer engagement to improve your app.\nThe SDK automatically captures session count and device properties like model, OS version, etc.\nYou can define your own custom events to measure things that matter to you.\nAll the information captured is available in the App Center portal for you to analyze the data."),(0,r.kt)("p",null,"For more info, please see ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/appcenter/sdk/crashes/cordova"},"https://docs.microsoft.com/en-us/appcenter/sdk/crashes/cordova")),(0,r.kt)("p",null,(0,r.kt)("a",{href:"https://github.com/Microsoft/appcenter-sdk-cordova/tree/master/cordova-plugin-appcenter-crashes",target:"_blank",rel:"noopener",className:"git-link"},(0,r.kt)("svg",{viewBox:"0 0 512 512"},(0,r.kt)("path",{d:"M416 160c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 23.7 12.9 44.3 32 55.4v8.6c0 19.9-7.8 33.7-25.3 44.9-15.4 9.8-38.1 17.1-67.5 21.5-14 2.1-25.7 6-35.2 10.7V151.4c19.1-11.1 32-31.7 32-55.4 0-35.3-28.7-64-64-64S96 60.7 96 96c0 23.7 12.9 44.3 32 55.4v209.2c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-16.6-6.3-31.7-16.7-43.1 1.9-4.9 9.7-16.3 29.4-19.3 38.8-5.8 68.9-15.9 92.3-30.8 36-22.8 55-57 55-98.8v-8.6c19.1-11.1 32-31.7 32-55.4zM160 56c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm0 400c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm192-256c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"}))," https://github.com/Microsoft/appcenter-sdk-cordova/tree/master/cordova-plugin-appcenter-crashes")),(0,r.kt)("h2",null,"Stuck on a Cordova issue?"),(0,r.kt)(s.Z,{className:"cordova-ee-card",header:"Don't waste precious time on plugin issues.",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Native",mdxType:"DocsCard"},(0,r.kt)("div",null,(0,r.kt)("img",{src:"/docs/icons/native-cordova-bot.png",class:"cordova-ee-img"}),(0,r.kt)("p",null,"If you're building a serious project, you can't afford to spend hours troubleshooting. Ionic\u2019s experts offer premium advisory services for both community plugins and premier plugins."),(0,r.kt)(o.Z,{className:"native-ee-detail",mdxType:"DocsButton"},"Contact Us Today!"))),(0,r.kt)("h2",{id:"installation"},(0,r.kt)("a",{href:"#installation"},"Installation")),(0,r.kt)(c.Z,{defaultValue:"Capacitor",groupId:"runtime",values:[{value:"Capacitor",label:"Capacitor"},{value:"Cordova",label:"Cordova"},{value:"Enterprise",label:"Enterprise"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Capacitor",mdxType:"TabItem"},(0,r.kt)(i.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ npm install cordova-plugin-appcenter-crashes ","\n","$ npm install @awesome-cordova-plugins/app-center-crashes ","\n","$ ionic cap sync")),(0,r.kt)(l.Z,{value:"Cordova",mdxType:"TabItem"},(0,r.kt)(i.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ ionic cordova plugin add cordova-plugin-appcenter-crashes ","\n","$ npm install @awesome-cordova-plugins/app-center-crashes ","\n")),(0,r.kt)(l.Z,{value:"Enterprise",mdxType:"TabItem"},(0,r.kt)("blockquote",null,"Ionic Enterprise comes with fully supported and maintained plugins from the Ionic Team. \xa0",(0,r.kt)("a",{class:"btn",href:"https://ionic.io/docs/premier-plugins"},"Learn More")," or if you're interested in an enterprise version of this plugin ",(0,r.kt)("a",{class:"btn",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine"},"Contact Us")))),(0,r.kt)("h2",{id:"supported-platforms"},"Supported Platforms"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Android"),(0,r.kt)("li",{parentName:"ul"},"iOS")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("h3",{id:"react"},"React"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/cn/docs/native/community#react"},"Learn more about using Ionic Native components in React")),(0,r.kt)("h3",{id:"angular"},"Angular"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { AppCenterCrashes } from '@awesome-cordova-plugins/app-center-crashes/ngx';\n\n\nconstructor(private AppCenterCrashes: AppCenterCrashes) { }\n\n...\n\nthis.AppCenterCrashes.setEnabled(true).then(() => {\n   this.AppCenterCrashes.lastSessionCrashReport().then(report => {\n       console.log('Crash report', report);\n   });\n});\n\n")))}v.isMDXComponent=!0}}]);