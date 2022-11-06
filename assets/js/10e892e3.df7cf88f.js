"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[53082],{58215:(e,a,n)=>{n.d(a,{Z:()=>r});var t=n(67294);const r=function(e){let{children:a,hidden:n,className:r}=e;return t.createElement("div",{role:"tabpanel",hidden:n,className:r},a)}},26396:(e,a,n)=>{n.d(a,{Z:()=>m});var t=n(87462),r=n(67294),i=n(72389),o=n(79443);const s=function(){const e=(0,r.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var l=n(89521),c=n(86010);const d="tabItem_vU9c";function u(e){var a,n;const{lazy:t,block:i,defaultValue:o,values:u,groupId:m,className:p}=e,v=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=u??v.map((e=>{let{props:{value:a,label:n}}=e;return{value:a,label:n}})),h=(0,l.lx)(f,((e,a)=>e.value===a.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===o?o:o??(null==(a=v.find((e=>e.props.default)))?void 0:a.props.value)??(null==(n=v[0])?void 0:n.props.value);if(null!==g&&!f.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:b}=s(),[y,N]=(0,r.useState)(g),C=[],{blockElementScrollPositionUntilNextRender:E}=(0,l.o5)();if(null!=m){const e=k[m];null!=e&&e!==y&&f.some((a=>a.value===e))&&N(e)}const w=e=>{const a=e.currentTarget,n=C.indexOf(a),t=f[n].value;t!==y&&(E(a),N(t),null!=m&&b(m,t))},I=e=>{var a;let n=null;switch(e.key){case"ArrowRight":{const a=C.indexOf(e.currentTarget)+1;n=C[a]||C[0];break}case"ArrowLeft":{const a=C.indexOf(e.currentTarget)-1;n=C[a]||C[C.length-1];break}}null==(a=n)||a.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":i},p)},f.map((e=>{let{value:a,label:n}=e;return r.createElement("li",{role:"tab",tabIndex:y===a?0:-1,"aria-selected":y===a,className:(0,c.Z)("tabs__item",d,{"tabs__item--active":y===a}),key:a,ref:e=>C.push(e),onKeyDown:I,onFocus:w,onClick:w},n??a)}))),t?(0,r.cloneElement)(v.filter((e=>e.props.value===y))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},v.map(((e,a)=>(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==y})))))}function m(e){const a=(0,i.Z)();return r.createElement(u,(0,t.Z)({key:String(a)},e))}},47758:(e,a,n)=>{n.d(a,{Z:()=>l});var t=n(67294),r=n(86010),i=n(39960),o=n(44996);const s="card_7QME";const l=function(e){const a=void 0===e.href,n=void 0!==e.href&&/^http/.test(e.href),l="undefined"===e.header?null:t.createElement("header",{className:"Card-header"},e.header),c=e.hoverIcon||e.icon,d=t.createElement(t.Fragment,null,e.img&&t.createElement("img",{src:(0,o.Z)(e.img),className:"Card-image"}),t.createElement("div",{className:"Card-container"},(e.icon||c)&&t.createElement("div",{className:"Card-icon-row"},e.icon&&t.createElement("img",{src:(0,o.Z)(e.icon),className:"Card-icon Card-icon-default"}),c&&t.createElement("img",{src:(0,o.Z)(c),className:"Card-icon Card-icon-hover"})),e.ionicon&&t.createElement("ion-icon",{name:e.ionicon,className:"Card-ionicon"}),e.iconset&&t.createElement("div",{className:"Card-iconset__container"},e.iconset.split(",").map(((a,n)=>t.createElement("img",{src:(0,o.Z)(a),className:"Card-icon "+(n===e.activeIndex?"Card-icon-active":""),"data-index":n,key:n})))),e.header&&l,t.createElement("div",{className:"Card-content"},e.children))),u=(0,r.Z)({"Card-with-image":void 0!==e.img,"Card-without-image":void 0===e.img,"Card-size-lg":"lg"===e.size,[e.className]:e.className});return a?t.createElement("docs-card",{class:u},t.createElement("div",{className:(0,r.Z)(s,"docs-card")},d)):n?t.createElement("docs-card",{class:u},t.createElement("a",{className:(0,r.Z)(s,"docs-card"),href:e.href,target:"_blank"},d)):t.createElement("docs-card",{class:u},t.createElement(i.default,{to:e.href,className:(0,r.Z)(s,"docs-card")},d))}},88694:(e,a,n)=>{n.d(a,{Z:()=>l});var t=n(87462),r=n(86010),i=n(67294);const o="docsButton_1mtQ",s="docsButtonRound_ZJZD";function l(e){let{href:a,round:n=!1,...l}=e;return l.className=(0,r.Z)({[l.className]:Boolean(l.className),[o]:!0,"docs-button":!0,[s]:n,"docs-button--round":n}),a?i.createElement("a",(0,t.Z)({href:a,className:"docsButton"},l),l.children):i.createElement("button",(0,t.Z)({className:"docsButton"},l),l.children)}},84500:(e,a,n)=>{n.r(a),n.d(a,{contentTitle:()=>u,default:()=>f,frontMatter:()=>d,metadata:()=>m,toc:()=>p});var t=n(87462),r=(n(67294),n(3905)),i=n(47758),o=n(88694),s=n(26396),l=n(58215),c=n(19055);const d={title:"Firebase Dynamic Links"},u=void 0,m={unversionedId:"native/firebase-dynamic-links",id:"native/firebase-dynamic-links",isDocsHomePage:!1,title:"Firebase Dynamic Links",description:"Cordova plugin for Firebase Dynamic Links",source:"@site/docs/native/firebase-dynamic-links.md",sourceDirName:"native",slug:"/native/firebase-dynamic-links",permalink:"/docs/native/firebase-dynamic-links",editUrl:"https://github.com/ionic-team/ionic-native/edit/master/src/@awesome-cordova-plugins/plugins/firebase-dynamic-links/index.ts",tags:[],version:"current",frontMatter:{title:"Firebase Dynamic Links"},sidebar:"native",previous:{title:"Firebase Crashlytics",permalink:"/docs/native/firebase-crashlytics"},next:{title:"Firebase Messaging",permalink:"/docs/native/firebase-messaging"}},p=[{value:"Supported Platforms",id:"supported-platforms",children:[],level:2},{value:"Usage",id:"usage",children:[{value:"React",id:"react",children:[],level:3},{value:"Angular",id:"angular",children:[],level:3}],level:2}],v={toc:p};function f(e){let{components:a,...n}=e;return(0,r.kt)("wrapper",(0,t.Z)({},v,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Cordova plugin for Firebase Dynamic Links"),(0,r.kt)("p",null,"Variables APP_DOMAIN and APP_PATH specify web URL where your app will start an activity to handle the link. They also used to setup support for App Indexing.\nGo to firebase console and export google-services.json and GoogleService-Info.plist. Put those files into the root of your cordova app folder."),(0,r.kt)("p",null,"Preferences:"),(0,r.kt)("p",null,"Preferences GoogleIOSClientId and GoogleAndroidClientId are used to setup dynamic links when you have an app for several platforms.\nYou can find values at your GoogleService-Info.plist (key ANDROID_CLIENT_ID) and google-services.json (key client","[0]",".oauth_client","[0]",".client_id)."),(0,r.kt)("p",null,"config.xml:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<platform name="ios">\n    <preference name="GoogleIOSClientId" value="..." />\n</platform>\n<platform name="android">\n    <preference name="GoogleAndroidClientId" value="..." />\n</platform>\n')),(0,r.kt)("p",null,(0,r.kt)("a",{href:"https://github.com/chemerisuk/cordova-plugin-firebase-dynamiclinks",target:"_blank",rel:"noopener",className:"git-link"},(0,r.kt)("svg",{viewBox:"0 0 512 512"},(0,r.kt)("path",{d:"M416 160c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 23.7 12.9 44.3 32 55.4v8.6c0 19.9-7.8 33.7-25.3 44.9-15.4 9.8-38.1 17.1-67.5 21.5-14 2.1-25.7 6-35.2 10.7V151.4c19.1-11.1 32-31.7 32-55.4 0-35.3-28.7-64-64-64S96 60.7 96 96c0 23.7 12.9 44.3 32 55.4v209.2c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-16.6-6.3-31.7-16.7-43.1 1.9-4.9 9.7-16.3 29.4-19.3 38.8-5.8 68.9-15.9 92.3-30.8 36-22.8 55-57 55-98.8v-8.6c19.1-11.1 32-31.7 32-55.4zM160 56c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm0 400c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm192-256c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"}))," https://github.com/chemerisuk/cordova-plugin-firebase-dynamiclinks")),(0,r.kt)("h2",null,"Stuck on a Cordova issue?"),(0,r.kt)(i.Z,{className:"cordova-ee-card",header:"Don't waste precious time on plugin issues.",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Native",mdxType:"DocsCard"},(0,r.kt)("div",null,(0,r.kt)("img",{src:"/docs/icons/native-cordova-bot.png",class:"cordova-ee-img"}),(0,r.kt)("p",null,"If you're building a serious project, you can't afford to spend hours troubleshooting. Ionic\u2019s experts offer premium advisory services for both community plugins and premier plugins."),(0,r.kt)(o.Z,{className:"native-ee-detail",mdxType:"DocsButton"},"Contact Us Today!"))),(0,r.kt)("h2",{id:"installation"},(0,r.kt)("a",{href:"#installation"},"Installation")),(0,r.kt)(s.Z,{defaultValue:"Capacitor",groupId:"runtime",values:[{value:"Capacitor",label:"Capacitor"},{value:"Cordova",label:"Cordova"},{value:"Enterprise",label:"Enterprise"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Capacitor",mdxType:"TabItem"},(0,r.kt)(c.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ npm install  cordova-plugin-firebase-dynamiclinks ","\n","$ npm install @awesome-cordova-plugins/firebase-dynamic-links ","\n","$ ionic cap sync")),(0,r.kt)(l.Z,{value:"Cordova",mdxType:"TabItem"},(0,r.kt)(c.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ ionic cordova plugin add  cordova-plugin-firebase-dynamiclinks ","\n","$ npm install @awesome-cordova-plugins/firebase-dynamic-links ","\n")),(0,r.kt)(l.Z,{value:"Enterprise",mdxType:"TabItem"},(0,r.kt)("blockquote",null,"Ionic Enterprise comes with fully supported and maintained plugins from the Ionic Team. \xa0",(0,r.kt)("a",{class:"btn",href:"https://ionic.io/docs/premier-plugins"},"Learn More")," or if you're interested in an enterprise version of this plugin ",(0,r.kt)("a",{class:"btn",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine"},"Contact Us")))),(0,r.kt)("h2",{id:"supported-platforms"},"Supported Platforms"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Android"),(0,r.kt)("li",{parentName:"ul"},"iOS")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("h3",{id:"react"},"React"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/native/community#react"},"Learn more about using Ionic Native components in React")),(0,r.kt)("h3",{id:"angular"},"Angular"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { FirebaseDynamicLinks } from '@awesome-cordova-plugins/firebase-dynamic-links/ngx';\n\n\nconstructor(private firebaseDynamicLinks: FirebaseDynamicLinks) { }\n\n...\n// Handle the logic here after opening the app with the Dynamic link\nthis.firebaseDynamicLinks.onDynamicLink()\n  .subscribe((res: any) => console.log(res), (error:any) => console.log(error));\n")))}f.isMDXComponent=!0}}]);