"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[63163],{58215:(e,n,t)=>{t.d(n,{Z:()=>a});var s=t(67294);const a=function(e){let{children:n,hidden:t,className:a}=e;return s.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}},26396:(e,n,t)=>{t.d(n,{Z:()=>m});var s=t(87462),a=t(67294),i=t(72389),o=t(79443);const r=function(){const e=(0,a.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var l=t(89521),c=t(86010);const d="tabItem_vU9c";function u(e){var n,t;const{lazy:s,block:i,defaultValue:o,values:u,groupId:m,className:p}=e,h=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=u??h.map((e=>{let{props:{value:n,label:t}}=e;return{value:n,label:t}})),f=(0,l.lx)(v,((e,n)=>e.value===n.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===o?o:o??(null==(n=h.find((e=>e.props.default)))?void 0:n.props.value)??(null==(t=h[0])?void 0:t.props.value);if(null!==g&&!v.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:b}=r(),[N,E]=(0,a.useState)(g),C=[],{blockElementScrollPositionUntilNextRender:y}=(0,l.o5)();if(null!=m){const e=k[m];null!=e&&e!==N&&v.some((n=>n.value===e))&&E(e)}const w=e=>{const n=e.currentTarget,t=C.indexOf(n),s=v[t].value;s!==N&&(y(n),E(s),null!=m&&b(m,s))},I=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{const n=C.indexOf(e.currentTarget)+1;t=C[n]||C[0];break}case"ArrowLeft":{const n=C.indexOf(e.currentTarget)-1;t=C[n]||C[C.length-1];break}}null==(n=t)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":i},p)},v.map((e=>{let{value:n,label:t}=e;return a.createElement("li",{role:"tab",tabIndex:N===n?0:-1,"aria-selected":N===n,className:(0,c.Z)("tabs__item",d,{"tabs__item--active":N===n}),key:n,ref:e=>C.push(e),onKeyDown:I,onFocus:w,onClick:w},t??n)}))),s?(0,a.cloneElement)(h.filter((e=>e.props.value===N))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},h.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==N})))))}function m(e){const n=(0,i.Z)();return a.createElement(u,(0,s.Z)({key:String(n)},e))}},47758:(e,n,t)=>{t.d(n,{Z:()=>l});var s=t(67294),a=t(86010),i=t(39960),o=t(44996);const r="card_7QME";const l=function(e){const n=void 0===e.href,t=void 0!==e.href&&/^http/.test(e.href),l="undefined"===e.header?null:s.createElement("header",{className:"Card-header"},e.header),c=e.hoverIcon||e.icon,d=s.createElement(s.Fragment,null,e.img&&s.createElement("img",{src:(0,o.Z)(e.img),className:"Card-image"}),s.createElement("div",{className:"Card-container"},(e.icon||c)&&s.createElement("div",{className:"Card-icon-row"},e.icon&&s.createElement("img",{src:(0,o.Z)(e.icon),className:"Card-icon Card-icon-default"}),c&&s.createElement("img",{src:(0,o.Z)(c),className:"Card-icon Card-icon-hover"})),e.ionicon&&s.createElement("ion-icon",{name:e.ionicon,className:"Card-ionicon"}),e.iconset&&s.createElement("div",{className:"Card-iconset__container"},e.iconset.split(",").map(((n,t)=>s.createElement("img",{src:(0,o.Z)(n),className:"Card-icon "+(t===e.activeIndex?"Card-icon-active":""),"data-index":t,key:t})))),e.header&&l,s.createElement("div",{className:"Card-content"},e.children))),u=(0,a.Z)({"Card-with-image":void 0!==e.img,"Card-without-image":void 0===e.img,"Card-size-lg":"lg"===e.size,[e.className]:e.className});return n?s.createElement("docs-card",{class:u},s.createElement("div",{className:(0,a.Z)(r,"docs-card")},d)):t?s.createElement("docs-card",{class:u},s.createElement("a",{className:(0,a.Z)(r,"docs-card"),href:e.href,target:"_blank"},d)):s.createElement("docs-card",{class:u},s.createElement(i.default,{to:e.href,className:(0,a.Z)(r,"docs-card")},d))}},88694:(e,n,t)=>{t.d(n,{Z:()=>l});var s=t(87462),a=t(86010),i=t(67294);const o="docsButton_1mtQ",r="docsButtonRound_ZJZD";function l(e){let{href:n,round:t=!1,...l}=e;return l.className=(0,a.Z)({[l.className]:Boolean(l.className),[o]:!0,"docs-button":!0,[r]:t,"docs-button--round":t}),n?i.createElement("a",(0,s.Z)({href:n,className:"docsButton"},l),l.children):i.createElement("button",(0,s.Z)({className:"docsButton"},l),l.children)}},98066:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>u,default:()=>v,frontMatter:()=>d,metadata:()=>m,toc:()=>p});var s=t(87462),a=(t(67294),t(3905)),i=t(47758),o=t(88694),r=t(26396),l=t(58215),c=t(19055);const d={title:"Android Permissions"},u=void 0,m={unversionedId:"native/android-permissions",id:"native/android-permissions",isDocsHomePage:!1,title:"Android Permissions",description:"Android Permissions | Android Device and Ionic App Permissions",source:"@site/docs/native/android-permissions.md",sourceDirName:"native",slug:"/native/android-permissions",permalink:"/cn/docs/native/android-permissions",editUrl:"https://crowdin.com/project/ionic-docs",tags:[],version:"current",frontMatter:{title:"Android Permissions"},sidebar:"native",previous:{title:"Android Notch",permalink:"/cn/docs/native/android-notch"},next:{title:"Anyline",permalink:"/cn/docs/native/anyline"}},p=[{value:"Supported Platforms",id:"supported-platforms",children:[],level:2},{value:"Usage",id:"usage",children:[{value:"React",id:"react",children:[],level:3},{value:"Angular",id:"angular",children:[],level:3}],level:2}],h={toc:p};function v(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,s.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("title",null,"Android Permissions | Android Device and Ionic App Permissions"),(0,a.kt)("meta",{name:"description",content:"This plugin is designed to support Android new permissions checking mechanism. Learn how to install and use Android Device permissions on your Ionic App."})),(0,a.kt)("p",null,"This plugin is designed to support Android new permissions checking mechanism."),(0,a.kt)("p",null,"You can find all permissions here: ",(0,a.kt)("a",{parentName:"p",href:"https://developer.android.com/reference/android/Manifest.permission.html"},"https://developer.android.com/reference/android/Manifest.permission.html")),(0,a.kt)("p",null,(0,a.kt)("a",{href:"https://github.com/NeoLSN/cordova-plugin-android-permissions",target:"_blank",rel:"noopener",className:"git-link"},(0,a.kt)("svg",{viewBox:"0 0 512 512"},(0,a.kt)("path",{d:"M416 160c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 23.7 12.9 44.3 32 55.4v8.6c0 19.9-7.8 33.7-25.3 44.9-15.4 9.8-38.1 17.1-67.5 21.5-14 2.1-25.7 6-35.2 10.7V151.4c19.1-11.1 32-31.7 32-55.4 0-35.3-28.7-64-64-64S96 60.7 96 96c0 23.7 12.9 44.3 32 55.4v209.2c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-16.6-6.3-31.7-16.7-43.1 1.9-4.9 9.7-16.3 29.4-19.3 38.8-5.8 68.9-15.9 92.3-30.8 36-22.8 55-57 55-98.8v-8.6c19.1-11.1 32-31.7 32-55.4zM160 56c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm0 400c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm192-256c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"}))," https://github.com/NeoLSN/cordova-plugin-android-permissions")),(0,a.kt)("h2",null,"Stuck on a Cordova issue?"),(0,a.kt)(i.Z,{className:"cordova-ee-card",header:"Don't waste precious time on plugin issues.",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Native",mdxType:"DocsCard"},(0,a.kt)("div",null,(0,a.kt)("img",{src:"/docs/icons/native-cordova-bot.png",class:"cordova-ee-img"}),(0,a.kt)("p",null,"If you're building a serious project, you can't afford to spend hours troubleshooting. Ionic\u2019s experts offer premium advisory services for both community plugins and premier plugins."),(0,a.kt)(o.Z,{className:"native-ee-detail",mdxType:"DocsButton"},"Contact Us Today!"))),(0,a.kt)("h2",{id:"installation"},(0,a.kt)("a",{href:"#installation"},"Installation")),(0,a.kt)(r.Z,{defaultValue:"Capacitor",groupId:"runtime",values:[{value:"Capacitor",label:"Capacitor"},{value:"Cordova",label:"Cordova"},{value:"Enterprise",label:"Enterprise"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Capacitor",mdxType:"TabItem"},(0,a.kt)(c.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ npm install cordova-plugin-android-permissions ","\n","$ npm install @awesome-cordova-plugins/android-permissions ","\n","$ ionic cap sync")),(0,a.kt)(l.Z,{value:"Cordova",mdxType:"TabItem"},(0,a.kt)(c.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ ionic cordova plugin add cordova-plugin-android-permissions ","\n","$ npm install @awesome-cordova-plugins/android-permissions ","\n")),(0,a.kt)(l.Z,{value:"Enterprise",mdxType:"TabItem"},(0,a.kt)("blockquote",null,"Ionic Enterprise comes with fully supported and maintained plugins from the Ionic Team. \xa0",(0,a.kt)("a",{class:"btn",href:"https://ionic.io/docs/premier-plugins"},"Learn More")," or if you're interested in an enterprise version of this plugin ",(0,a.kt)("a",{class:"btn",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine"},"Contact Us")))),(0,a.kt)("h2",{id:"supported-platforms"},"Supported Platforms"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Android")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("h3",{id:"react"},"React"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/cn/docs/native/community#react"},"Learn more about using Ionic Native components in React")),(0,a.kt)("h3",{id:"angular"},"Angular"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"import { AndroidPermissions } from '@awesome-cordova-plugins/android-permissions/ngx';\n\n\nconstructor(private androidPermissions: AndroidPermissions) { }\n\n...\n\nthis.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.CAMERA).then(\n  result => console.log('Has permission?',result.hasPermission),\n  err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.CAMERA)\n);\n\nthis.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.CAMERA, this.androidPermissions.PERMISSION.GET_ACCOUNTS]);\n\n")),(0,a.kt)("p",null,"Android 26 and above: due to Android 26's changes to permissions handling (permissions are requested at time of use rather than at runtime,) if your app does not include any functions (eg. other Ionic Native plugins) that utilize a particular permission, then ",(0,a.kt)("inlineCode",{parentName:"p"},"requestPermission()")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"requestPermissions()")," will resolve immediately with no prompt shown to the user.  Thus, you must include a function utilizing the feature you would like to use before requesting permission for it."))}v.isMDXComponent=!0}}]);