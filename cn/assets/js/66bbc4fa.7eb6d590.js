"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[64482],{58215:(e,a,t)=>{t.d(a,{Z:()=>s});var n=t(67294);const s=function(e){let{children:a,hidden:t,className:s}=e;return n.createElement("div",{role:"tabpanel",hidden:t,className:s},a)}},26396:(e,a,t)=>{t.d(a,{Z:()=>p});var n=t(87462),s=t(67294),r=t(72389),l=t(79443);const o=function(){const e=(0,s.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var i=t(89521),c=t(86010);const d="tabItem_vU9c";function u(e){var a,t;const{lazy:n,block:r,defaultValue:l,values:u,groupId:p,className:m}=e,h=s.Children.map(e.children,(e=>{if((0,s.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=u??h.map((e=>{let{props:{value:a,label:t}}=e;return{value:a,label:t}})),g=(0,i.lx)(v,((e,a)=>e.value===a.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===l?l:l??(null==(a=h.find((e=>e.props.default)))?void 0:a.props.value)??(null==(t=h[0])?void 0:t.props.value);if(null!==f&&!v.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:b}=o(),[N,C]=(0,s.useState)(f),E=[],{blockElementScrollPositionUntilNextRender:y}=(0,i.o5)();if(null!=p){const e=k[p];null!=e&&e!==N&&v.some((a=>a.value===e))&&C(e)}const w=e=>{const a=e.currentTarget,t=E.indexOf(a),n=v[t].value;n!==N&&(y(a),C(n),null!=p&&b(p,n))},S=e=>{var a;let t=null;switch(e.key){case"ArrowRight":{const a=E.indexOf(e.currentTarget)+1;t=E[a]||E[0];break}case"ArrowLeft":{const a=E.indexOf(e.currentTarget)-1;t=E[a]||E[E.length-1];break}}null==(a=t)||a.focus()};return s.createElement("div",{className:"tabs-container"},s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":r},m)},v.map((e=>{let{value:a,label:t}=e;return s.createElement("li",{role:"tab",tabIndex:N===a?0:-1,"aria-selected":N===a,className:(0,c.Z)("tabs__item",d,{"tabs__item--active":N===a}),key:a,ref:e=>E.push(e),onKeyDown:S,onFocus:w,onClick:w},t??a)}))),n?(0,s.cloneElement)(h.filter((e=>e.props.value===N))[0],{className:"margin-vert--md"}):s.createElement("div",{className:"margin-vert--md"},h.map(((e,a)=>(0,s.cloneElement)(e,{key:a,hidden:e.props.value!==N})))))}function p(e){const a=(0,r.Z)();return s.createElement(u,(0,n.Z)({key:String(a)},e))}},47758:(e,a,t)=>{t.d(a,{Z:()=>i});var n=t(67294),s=t(86010),r=t(39960),l=t(44996);const o="card_7QME";const i=function(e){const a=void 0===e.href,t=void 0!==e.href&&/^http/.test(e.href),i="undefined"===e.header?null:n.createElement("header",{className:"Card-header"},e.header),c=e.hoverIcon||e.icon,d=n.createElement(n.Fragment,null,e.img&&n.createElement("img",{src:(0,l.Z)(e.img),className:"Card-image"}),n.createElement("div",{className:"Card-container"},(e.icon||c)&&n.createElement("div",{className:"Card-icon-row"},e.icon&&n.createElement("img",{src:(0,l.Z)(e.icon),className:"Card-icon Card-icon-default"}),c&&n.createElement("img",{src:(0,l.Z)(c),className:"Card-icon Card-icon-hover"})),e.ionicon&&n.createElement("ion-icon",{name:e.ionicon,className:"Card-ionicon"}),e.iconset&&n.createElement("div",{className:"Card-iconset__container"},e.iconset.split(",").map(((a,t)=>n.createElement("img",{src:(0,l.Z)(a),className:"Card-icon "+(t===e.activeIndex?"Card-icon-active":""),"data-index":t,key:t})))),e.header&&i,n.createElement("div",{className:"Card-content"},e.children))),u=(0,s.Z)({"Card-with-image":void 0!==e.img,"Card-without-image":void 0===e.img,"Card-size-lg":"lg"===e.size,[e.className]:e.className});return a?n.createElement("docs-card",{class:u},n.createElement("div",{className:(0,s.Z)(o,"docs-card")},d)):t?n.createElement("docs-card",{class:u},n.createElement("a",{className:(0,s.Z)(o,"docs-card"),href:e.href,target:"_blank"},d)):n.createElement("docs-card",{class:u},n.createElement(r.default,{to:e.href,className:(0,s.Z)(o,"docs-card")},d))}},88694:(e,a,t)=>{t.d(a,{Z:()=>i});var n=t(87462),s=t(86010),r=t(67294);const l="docsButton_1mtQ",o="docsButtonRound_ZJZD";function i(e){let{href:a,round:t=!1,...i}=e;return i.className=(0,s.Z)({[i.className]:Boolean(i.className),[l]:!0,"docs-button":!0,[o]:t,"docs-button--round":t}),a?r.createElement("a",(0,n.Z)({href:a,className:"docsButton"},i),i.children):r.createElement("button",(0,n.Z)({className:"docsButton"},i),i.children)}},4891:(e,a,t)=>{t.r(a),t.d(a,{contentTitle:()=>u,default:()=>v,frontMatter:()=>d,metadata:()=>p,toc:()=>m});var n=t(87462),s=(t(67294),t(3905)),r=t(47758),l=t(88694),o=t(26396),i=t(58215),c=t(19055);const d={title:"Splash Screen"},u=void 0,p={unversionedId:"native/splash-screen",id:"native/splash-screen",isDocsHomePage:!1,title:"Splash Screen",description:"Splash Screen | Cordova Splash Screen Plugin for Android & iOS",source:"@site/docs/native/splash-screen.md",sourceDirName:"native",slug:"/native/splash-screen",permalink:"/cn/docs/native/splash-screen",editUrl:"https://crowdin.com/project/ionic-docs",tags:[],version:"current",frontMatter:{title:"Splash Screen"},sidebar:"native",previous:{title:"Spinner Dialog",permalink:"/cn/docs/native/spinner-dialog"},next:{title:"Spotify Auth",permalink:"/cn/docs/native/spotify-auth"}},m=[{value:"Supported Platforms",id:"supported-platforms",children:[],level:2},{value:"Capacitor",id:"capacitor",children:[],level:2},{value:"Usage",id:"usage",children:[{value:"React",id:"react",children:[],level:3},{value:"Angular",id:"angular",children:[],level:3}],level:2}],h={toc:m};function v(e){let{components:a,...t}=e;return(0,s.kt)("wrapper",(0,n.Z)({},h,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("head",null,(0,s.kt)("title",null,"Splash Screen | Cordova Splash Screen Plugin for Android & iOS"),(0,s.kt)("meta",{name:"description",content:"This Cordova plugin displays and hides a splash screen during application launch. Show and hide the splash screen after the Android or iOS app has loaded."})),(0,s.kt)("p",null,"This plugin displays and hides a splash screen during application launch. The methods below allows showing and hiding the splashscreen after the app has loaded."),(0,s.kt)("p",null,(0,s.kt)("a",{href:"https://github.com/apache/cordova-plugin-splashscreen",target:"_blank",rel:"noopener",className:"git-link"},(0,s.kt)("svg",{viewBox:"0 0 512 512"},(0,s.kt)("path",{d:"M416 160c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 23.7 12.9 44.3 32 55.4v8.6c0 19.9-7.8 33.7-25.3 44.9-15.4 9.8-38.1 17.1-67.5 21.5-14 2.1-25.7 6-35.2 10.7V151.4c19.1-11.1 32-31.7 32-55.4 0-35.3-28.7-64-64-64S96 60.7 96 96c0 23.7 12.9 44.3 32 55.4v209.2c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-16.6-6.3-31.7-16.7-43.1 1.9-4.9 9.7-16.3 29.4-19.3 38.8-5.8 68.9-15.9 92.3-30.8 36-22.8 55-57 55-98.8v-8.6c19.1-11.1 32-31.7 32-55.4zM160 56c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm0 400c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm192-256c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"}))," https://github.com/apache/cordova-plugin-splashscreen")),(0,s.kt)("h2",null,"Stuck on a Cordova issue?"),(0,s.kt)(r.Z,{className:"cordova-ee-card",header:"Don't waste precious time on plugin issues.",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Native",mdxType:"DocsCard"},(0,s.kt)("div",null,(0,s.kt)("img",{src:"/docs/icons/native-cordova-bot.png",class:"cordova-ee-img"}),(0,s.kt)("p",null,"If you're building a serious project, you can't afford to spend hours troubleshooting. Ionic\u2019s experts offer premium advisory services for both community plugins and premier plugins."),(0,s.kt)(l.Z,{className:"native-ee-detail",mdxType:"DocsButton"},"Contact Us Today!"))),(0,s.kt)("h2",{id:"installation"},(0,s.kt)("a",{href:"#installation"},"Installation")),(0,s.kt)(o.Z,{defaultValue:"Capacitor",groupId:"runtime",values:[{value:"Capacitor",label:"Capacitor"},{value:"Cordova",label:"Cordova"},{value:"Enterprise",label:"Enterprise"}],mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"Capacitor",mdxType:"TabItem"},(0,s.kt)(c.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ npm install cordova-plugin-splashscreen ","\n","$ npm install @awesome-cordova-plugins/splash-screen ","\n","$ ionic cap sync")),(0,s.kt)(i.Z,{value:"Cordova",mdxType:"TabItem"},(0,s.kt)(c.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ ionic cordova plugin add cordova-plugin-splashscreen ","\n","$ npm install @awesome-cordova-plugins/splash-screen ","\n")),(0,s.kt)(i.Z,{value:"Enterprise",mdxType:"TabItem"},(0,s.kt)("blockquote",null,"Ionic Enterprise comes with fully supported and maintained plugins from the Ionic Team. \xa0",(0,s.kt)("a",{class:"btn",href:"https://ionic.io/docs/premier-plugins"},"Learn More")," or if you're interested in an enterprise version of this plugin ",(0,s.kt)("a",{class:"btn",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine"},"Contact Us")))),(0,s.kt)("h2",{id:"supported-platforms"},"Supported Platforms"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Amazon Fire OS"),(0,s.kt)("li",{parentName:"ul"},"Android"),(0,s.kt)("li",{parentName:"ul"},"iOS"),(0,s.kt)("li",{parentName:"ul"},"Windows")),(0,s.kt)("h2",{id:"capacitor"},"Capacitor"),(0,s.kt)("p",null,"Not Compatible"),(0,s.kt)("h2",{id:"usage"},"Usage"),(0,s.kt)("h3",{id:"react"},"React"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/cn/docs/native/community#react"},"Learn more about using Ionic Native components in React")),(0,s.kt)("h3",{id:"angular"},"Angular"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"import { SplashScreen } from '@awesome-cordova-plugins/splash-screen/ngx';\n\nconstructor(private splashScreen: SplashScreen) { }\n\n...\n\nthis.splashScreen.show();\n\nthis.splashScreen.hide();\n")))}v.isMDXComponent=!0}}]);