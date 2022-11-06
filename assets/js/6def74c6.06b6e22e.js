"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[45420],{58215:(e,a,t)=>{t.d(a,{Z:()=>s});var n=t(67294);const s=function(e){let{children:a,hidden:t,className:s}=e;return n.createElement("div",{role:"tabpanel",hidden:t,className:s},a)}},26396:(e,a,t)=>{t.d(a,{Z:()=>m});var n=t(87462),s=t(67294),o=t(72389),r=t(79443);const i=function(){const e=(0,s.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var l=t(89521),c=t(86010);const u="tabItem_vU9c";function d(e){var a,t;const{lazy:n,block:o,defaultValue:r,values:d,groupId:m,className:p}=e,v=s.Children.map(e.children,(e=>{if((0,s.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=d??v.map((e=>{let{props:{value:a,label:t}}=e;return{value:a,label:t}})),h=(0,l.lx)(g,((e,a)=>e.value===a.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===r?r:r??(null==(a=v.find((e=>e.props.default)))?void 0:a.props.value)??(null==(t=v[0])?void 0:t.props.value);if(null!==b&&!g.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:f,setTabGroupChoices:k}=i(),[N,E]=(0,s.useState)(b),w=[],{blockElementScrollPositionUntilNextRender:y}=(0,l.o5)();if(null!=m){const e=f[m];null!=e&&e!==N&&g.some((a=>a.value===e))&&E(e)}const C=e=>{const a=e.currentTarget,t=w.indexOf(a),n=g[t].value;n!==N&&(y(a),E(n),null!=m&&k(m,n))},Z=e=>{var a;let t=null;switch(e.key){case"ArrowRight":{const a=w.indexOf(e.currentTarget)+1;t=w[a]||w[0];break}case"ArrowLeft":{const a=w.indexOf(e.currentTarget)-1;t=w[a]||w[w.length-1];break}}null==(a=t)||a.focus()};return s.createElement("div",{className:"tabs-container"},s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":o},p)},g.map((e=>{let{value:a,label:t}=e;return s.createElement("li",{role:"tab",tabIndex:N===a?0:-1,"aria-selected":N===a,className:(0,c.Z)("tabs__item",u,{"tabs__item--active":N===a}),key:a,ref:e=>w.push(e),onKeyDown:Z,onFocus:C,onClick:C},t??a)}))),n?(0,s.cloneElement)(v.filter((e=>e.props.value===N))[0],{className:"margin-vert--md"}):s.createElement("div",{className:"margin-vert--md"},v.map(((e,a)=>(0,s.cloneElement)(e,{key:a,hidden:e.props.value!==N})))))}function m(e){const a=(0,o.Z)();return s.createElement(d,(0,n.Z)({key:String(a)},e))}},47758:(e,a,t)=>{t.d(a,{Z:()=>l});var n=t(67294),s=t(86010),o=t(39960),r=t(44996);const i="card_7QME";const l=function(e){const a=void 0===e.href,t=void 0!==e.href&&/^http/.test(e.href),l="undefined"===e.header?null:n.createElement("header",{className:"Card-header"},e.header),c=e.hoverIcon||e.icon,u=n.createElement(n.Fragment,null,e.img&&n.createElement("img",{src:(0,r.Z)(e.img),className:"Card-image"}),n.createElement("div",{className:"Card-container"},(e.icon||c)&&n.createElement("div",{className:"Card-icon-row"},e.icon&&n.createElement("img",{src:(0,r.Z)(e.icon),className:"Card-icon Card-icon-default"}),c&&n.createElement("img",{src:(0,r.Z)(c),className:"Card-icon Card-icon-hover"})),e.ionicon&&n.createElement("ion-icon",{name:e.ionicon,className:"Card-ionicon"}),e.iconset&&n.createElement("div",{className:"Card-iconset__container"},e.iconset.split(",").map(((a,t)=>n.createElement("img",{src:(0,r.Z)(a),className:"Card-icon "+(t===e.activeIndex?"Card-icon-active":""),"data-index":t,key:t})))),e.header&&l,n.createElement("div",{className:"Card-content"},e.children))),d=(0,s.Z)({"Card-with-image":void 0!==e.img,"Card-without-image":void 0===e.img,"Card-size-lg":"lg"===e.size,[e.className]:e.className});return a?n.createElement("docs-card",{class:d},n.createElement("div",{className:(0,s.Z)(i,"docs-card")},u)):t?n.createElement("docs-card",{class:d},n.createElement("a",{className:(0,s.Z)(i,"docs-card"),href:e.href,target:"_blank"},u)):n.createElement("docs-card",{class:d},n.createElement(o.default,{to:e.href,className:(0,s.Z)(i,"docs-card")},u))}},88694:(e,a,t)=>{t.d(a,{Z:()=>l});var n=t(87462),s=t(86010),o=t(67294);const r="docsButton_1mtQ",i="docsButtonRound_ZJZD";function l(e){let{href:a,round:t=!1,...l}=e;return l.className=(0,s.Z)({[l.className]:Boolean(l.className),[r]:!0,"docs-button":!0,[i]:t,"docs-button--round":t}),a?o.createElement("a",(0,n.Z)({href:a,className:"docsButton"},l),l.children):o.createElement("button",(0,n.Z)({className:"docsButton"},l),l.children)}},45343:(e,a,t)=>{t.r(a),t.d(a,{contentTitle:()=>d,default:()=>g,frontMatter:()=>u,metadata:()=>m,toc:()=>p});var n=t(87462),s=(t(67294),t(3905)),o=t(47758),r=t(88694),i=t(26396),l=t(58215),c=t(19055);const u={sidebar_label:"Is Debug"},d="Is Debug",m={unversionedId:"native/is-debug",id:"version-v5/native/is-debug",isDocsHomePage:!1,title:"Is Debug",description:"Detect if the app is running in debug mode or not.",source:"@site/versioned_docs/version-v5/native/is-debug.md",sourceDirName:"native",slug:"/native/is-debug",permalink:"/docs/v5/native/is-debug",editUrl:"https://github.com/ionic-team/ionic-native/edit/master/src/@awesome-cordova-plugins/plugins/is-debug/index.ts",tags:[],version:"v5",frontMatter:{sidebar_label:"Is Debug"},sidebar:"version-v5/native",previous:{title:"ios-aswebauthenticationsession-api",permalink:"/docs/v5/native/ios-aswebauthenticationsession-api"},next:{title:"Keyboard",permalink:"/docs/v5/native/keyboard"}},p=[{value:"Supported Platforms",id:"supported-platforms",children:[],level:2},{value:"Usage",id:"usage",children:[{value:"React",id:"react",children:[],level:3},{value:"Angular",id:"angular",children:[],level:3}],level:2}],v={toc:p};function g(e){let{components:a,...t}=e;return(0,s.kt)("wrapper",(0,n.Z)({},v,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"is-debug"},"Is Debug"),(0,s.kt)("p",null,"Detect if the app is running in debug mode or not.\nDebug mode is when the app is built and installed locally via xcode / eclipse / the cordova cli etc, compared to release mode when the app was downloaded from the app / play store via an end user."),(0,s.kt)("p",null,(0,s.kt)("a",{href:"https://github.com/mattlewis92/cordova-plugin-is-debug",target:"_blank",rel:"noopener",className:"git-link"},(0,s.kt)("svg",{viewBox:"0 0 512 512"},(0,s.kt)("path",{d:"M416 160c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 23.7 12.9 44.3 32 55.4v8.6c0 19.9-7.8 33.7-25.3 44.9-15.4 9.8-38.1 17.1-67.5 21.5-14 2.1-25.7 6-35.2 10.7V151.4c19.1-11.1 32-31.7 32-55.4 0-35.3-28.7-64-64-64S96 60.7 96 96c0 23.7 12.9 44.3 32 55.4v209.2c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-16.6-6.3-31.7-16.7-43.1 1.9-4.9 9.7-16.3 29.4-19.3 38.8-5.8 68.9-15.9 92.3-30.8 36-22.8 55-57 55-98.8v-8.6c19.1-11.1 32-31.7 32-55.4zM160 56c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm0 400c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm192-256c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"}))," ","https://github.com/mattlewis92/cordova-plugin-is-debug")),(0,s.kt)("h2",null,"Stuck on a Cordova issue?"),(0,s.kt)(o.Z,{className:"cordova-ee-card",header:"Don't waste precious time on plugin issues.",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Native",mdxType:"DocsCard"},(0,s.kt)("div",null,(0,s.kt)("img",{src:"/docs/icons/native-cordova-bot.png",class:"cordova-ee-img"}),(0,s.kt)("p",null,"If you're building a serious project, you can't afford to spend hours troubleshooting. Ionic\u2019s experts offer premium advisory services for both community plugins and premier plugins."),(0,s.kt)(r.Z,{className:"native-ee-detail",mdxType:"DocsButton"},"Contact Us Today!"))),(0,s.kt)("h2",{id:"installation"},(0,s.kt)("a",{href:"#installation"},"Installation")),(0,s.kt)(i.Z,{groupId:"runtime",defaultValue:"Capacitor",values:[{value:"Capacitor",label:"Capacitor"},{value:"Cordova",label:"Cordova"},{value:"Enterprise",label:"Enterprise"}],mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"Capacitor",mdxType:"TabItem"},(0,s.kt)(c.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ npm install cordova-plugin-is-debug ","\n","$ npm install @awesome-cordova-plugins/is-debug ","\n","$ ionic cap sync")),(0,s.kt)(l.Z,{value:"Cordova",mdxType:"TabItem"},(0,s.kt)(c.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ ionic cordova plugin add cordova-plugin-is-debug ","\n","$ npm install @awesome-cordova-plugins/is-debug ","\n")),(0,s.kt)(l.Z,{value:"Enterprise",mdxType:"TabItem"},(0,s.kt)("blockquote",null,"Ionic Enterprise comes with fully supported and maintained plugins from the Ionic Team. \xa0",(0,s.kt)("a",{class:"btn",href:"https://ionic.io/docs/premier-plugins"},"Learn More")," or if you're interested in an enterprise version of this plugin ",(0,s.kt)("a",{class:"btn",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine"},"Contact Us")))),(0,s.kt)("h2",{id:"supported-platforms"},"Supported Platforms"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Android"),(0,s.kt)("li",{parentName:"ul"},"iOS")),(0,s.kt)("h2",{id:"usage"},"Usage"),(0,s.kt)("h3",{id:"react"},"React"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/docs/v5/native/community#react"},"Learn more about using Ionic Native components in React")),(0,s.kt)("h3",{id:"angular"},"Angular"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx"},"import { IsDebug } from '@awesome-cordova-plugins/is-debug/ngx';\n\nconstructor(private isDebug: IsDebug) { }\n\n...\n\nthis.isDebug.getIsDebug()\n  .then(isDebug => console.log('Is debug:', isDebug))\n  .catch(err => console.error(err));\n\n")))}g.isMDXComponent=!0}}]);