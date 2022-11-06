"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[53102],{58215:(e,a,n)=>{n.d(a,{Z:()=>o});var t=n(67294);const o=function(e){let{children:a,hidden:n,className:o}=e;return t.createElement("div",{role:"tabpanel",hidden:n,className:o},a)}},26396:(e,a,n)=>{n.d(a,{Z:()=>p});var t=n(87462),o=n(67294),r=n(72389),i=n(79443);const l=function(){const e=(0,o.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var s=n(89521),c=n(86010);const d="tabItem_vU9c";function u(e){var a,n;const{lazy:t,block:r,defaultValue:i,values:u,groupId:p,className:m}=e,v=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=u??v.map((e=>{let{props:{value:a,label:n}}=e;return{value:a,label:n}})),h=(0,s.lx)(g,((e,a)=>e.value===a.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===i?i:i??(null==(a=v.find((e=>e.props.default)))?void 0:a.props.value)??(null==(n=v[0])?void 0:n.props.value);if(null!==f&&!g.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:k}=l(),[N,C]=(0,o.useState)(f),E=[],{blockElementScrollPositionUntilNextRender:y}=(0,s.o5)();if(null!=p){const e=b[p];null!=e&&e!==N&&g.some((a=>a.value===e))&&C(e)}const w=e=>{const a=e.currentTarget,n=E.indexOf(a),t=g[n].value;t!==N&&(y(a),C(t),null!=p&&k(p,t))},Z=e=>{var a;let n=null;switch(e.key){case"ArrowRight":{const a=E.indexOf(e.currentTarget)+1;n=E[a]||E[0];break}case"ArrowLeft":{const a=E.indexOf(e.currentTarget)-1;n=E[a]||E[E.length-1];break}}null==(a=n)||a.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":r},m)},g.map((e=>{let{value:a,label:n}=e;return o.createElement("li",{role:"tab",tabIndex:N===a?0:-1,"aria-selected":N===a,className:(0,c.Z)("tabs__item",d,{"tabs__item--active":N===a}),key:a,ref:e=>E.push(e),onKeyDown:Z,onFocus:w,onClick:w},n??a)}))),t?(0,o.cloneElement)(v.filter((e=>e.props.value===N))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},v.map(((e,a)=>(0,o.cloneElement)(e,{key:a,hidden:e.props.value!==N})))))}function p(e){const a=(0,r.Z)();return o.createElement(u,(0,t.Z)({key:String(a)},e))}},47758:(e,a,n)=>{n.d(a,{Z:()=>s});var t=n(67294),o=n(86010),r=n(39960),i=n(44996);const l="card_7QME";const s=function(e){const a=void 0===e.href,n=void 0!==e.href&&/^http/.test(e.href),s="undefined"===e.header?null:t.createElement("header",{className:"Card-header"},e.header),c=e.hoverIcon||e.icon,d=t.createElement(t.Fragment,null,e.img&&t.createElement("img",{src:(0,i.Z)(e.img),className:"Card-image"}),t.createElement("div",{className:"Card-container"},(e.icon||c)&&t.createElement("div",{className:"Card-icon-row"},e.icon&&t.createElement("img",{src:(0,i.Z)(e.icon),className:"Card-icon Card-icon-default"}),c&&t.createElement("img",{src:(0,i.Z)(c),className:"Card-icon Card-icon-hover"})),e.ionicon&&t.createElement("ion-icon",{name:e.ionicon,className:"Card-ionicon"}),e.iconset&&t.createElement("div",{className:"Card-iconset__container"},e.iconset.split(",").map(((a,n)=>t.createElement("img",{src:(0,i.Z)(a),className:"Card-icon "+(n===e.activeIndex?"Card-icon-active":""),"data-index":n,key:n})))),e.header&&s,t.createElement("div",{className:"Card-content"},e.children))),u=(0,o.Z)({"Card-with-image":void 0!==e.img,"Card-without-image":void 0===e.img,"Card-size-lg":"lg"===e.size,[e.className]:e.className});return a?t.createElement("docs-card",{class:u},t.createElement("div",{className:(0,o.Z)(l,"docs-card")},d)):n?t.createElement("docs-card",{class:u},t.createElement("a",{className:(0,o.Z)(l,"docs-card"),href:e.href,target:"_blank"},d)):t.createElement("docs-card",{class:u},t.createElement(r.default,{to:e.href,className:(0,o.Z)(l,"docs-card")},d))}},88694:(e,a,n)=>{n.d(a,{Z:()=>s});var t=n(87462),o=n(86010),r=n(67294);const i="docsButton_1mtQ",l="docsButtonRound_ZJZD";function s(e){let{href:a,round:n=!1,...s}=e;return s.className=(0,o.Z)({[s.className]:Boolean(s.className),[i]:!0,"docs-button":!0,[l]:n,"docs-button--round":n}),a?r.createElement("a",(0,t.Z)({href:a,className:"docsButton"},s),s.children):r.createElement("button",(0,t.Z)({className:"docsButton"},s),s.children)}},79345:(e,a,n)=>{n.r(a),n.d(a,{contentTitle:()=>u,default:()=>g,frontMatter:()=>d,metadata:()=>p,toc:()=>m});var t=n(87462),o=(n(67294),n(3905)),r=n(47758),i=n(88694),l=n(26396),s=n(58215),c=n(19055);const d={sidebar_label:"Spinner Dialog"},u="Spinner Dialog",p={unversionedId:"native/spinner-dialog",id:"version-v5/native/spinner-dialog",isDocsHomePage:!1,title:"Spinner Dialog",description:"Cordova plugin for showing a native spinner based on Paldom/SpinnerDialog.",source:"@site/versioned_docs/version-v5/native/spinner-dialog.md",sourceDirName:"native",slug:"/native/spinner-dialog",permalink:"/docs/v5/native/spinner-dialog",editUrl:"https://github.com/ionic-team/ionic-native/edit/master/src/@awesome-cordova-plugins/plugins/spinner-dialog/index.ts",tags:[],version:"v5",frontMatter:{sidebar_label:"Spinner Dialog"},sidebar:"version-v5/native",previous:{title:"Speech Recognition",permalink:"/docs/v5/native/speech-recognition"},next:{title:"Splash Screen",permalink:"/docs/v5/native/splash-screen"}},m=[{value:"Supported Platforms",id:"supported-platforms",children:[],level:2},{value:"Usage",id:"usage",children:[{value:"React",id:"react",children:[],level:3},{value:"Angular",id:"angular",children:[],level:3}],level:2}],v={toc:m};function g(e){let{components:a,...n}=e;return(0,o.kt)("wrapper",(0,t.Z)({},v,n,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"spinner-dialog"},"Spinner Dialog"),(0,o.kt)("p",null,"Cordova plugin for showing a native spinner based on Paldom/SpinnerDialog."),(0,o.kt)("p",null,"Requires Cordova plugin: ",(0,o.kt)("inlineCode",{parentName:"p"},"cordova-plugin-native-spinner"),". For more info, please see the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/greybax/cordova-plugin-native-spinner"},"Spinner Dialog plugin docs"),"."),(0,o.kt)("p",null,(0,o.kt)("a",{href:"https://github.com/greybax/cordova-plugin-native-spinner",target:"_blank",rel:"noopener",className:"git-link"},(0,o.kt)("svg",{viewBox:"0 0 512 512"},(0,o.kt)("path",{d:"M416 160c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 23.7 12.9 44.3 32 55.4v8.6c0 19.9-7.8 33.7-25.3 44.9-15.4 9.8-38.1 17.1-67.5 21.5-14 2.1-25.7 6-35.2 10.7V151.4c19.1-11.1 32-31.7 32-55.4 0-35.3-28.7-64-64-64S96 60.7 96 96c0 23.7 12.9 44.3 32 55.4v209.2c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-16.6-6.3-31.7-16.7-43.1 1.9-4.9 9.7-16.3 29.4-19.3 38.8-5.8 68.9-15.9 92.3-30.8 36-22.8 55-57 55-98.8v-8.6c19.1-11.1 32-31.7 32-55.4zM160 56c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm0 400c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm192-256c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"}))," ","https://github.com/greybax/cordova-plugin-native-spinner")),(0,o.kt)("h2",null,"Stuck on a Cordova issue?"),(0,o.kt)(r.Z,{className:"cordova-ee-card",header:"Don't waste precious time on plugin issues.",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Native",mdxType:"DocsCard"},(0,o.kt)("div",null,(0,o.kt)("img",{src:"/docs/icons/native-cordova-bot.png",class:"cordova-ee-img"}),(0,o.kt)("p",null,"If you're building a serious project, you can't afford to spend hours troubleshooting. Ionic\u2019s experts offer premium advisory services for both community plugins and premier plugins."),(0,o.kt)(i.Z,{className:"native-ee-detail",mdxType:"DocsButton"},"Contact Us Today!"))),(0,o.kt)("h2",{id:"installation"},(0,o.kt)("a",{href:"#installation"},"Installation")),(0,o.kt)(l.Z,{groupId:"runtime",defaultValue:"Capacitor",values:[{value:"Capacitor",label:"Capacitor"},{value:"Cordova",label:"Cordova"},{value:"Enterprise",label:"Enterprise"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"Capacitor",mdxType:"TabItem"},(0,o.kt)(c.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ npm install cordova-plugin-native-spinner ","\n","$ npm install @awesome-cordova-plugins/spinner-dialog ","\n","$ ionic cap sync")),(0,o.kt)(s.Z,{value:"Cordova",mdxType:"TabItem"},(0,o.kt)(c.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ ionic cordova plugin add cordova-plugin-native-spinner ","\n","$ npm install @awesome-cordova-plugins/spinner-dialog ","\n")),(0,o.kt)(s.Z,{value:"Enterprise",mdxType:"TabItem"},(0,o.kt)("blockquote",null,"Ionic Enterprise comes with fully supported and maintained plugins from the Ionic Team. \xa0",(0,o.kt)("a",{class:"btn",href:"https://ionic.io/docs/premier-plugins"},"Learn More")," or if you're interested in an enterprise version of this plugin ",(0,o.kt)("a",{class:"btn",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine"},"Contact Us")))),(0,o.kt)("h2",{id:"supported-platforms"},"Supported Platforms"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Android"),(0,o.kt)("li",{parentName:"ul"},"iOS"),(0,o.kt)("li",{parentName:"ul"},"Windows Phone 8"),(0,o.kt)("li",{parentName:"ul"},"Windows")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("h3",{id:"react"},"React"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/v5/native/community#react"},"Learn more about using Ionic Native components in React")),(0,o.kt)("h3",{id:"angular"},"Angular"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { SpinnerDialog } from '@awesome-cordova-plugins/spinner-dialog/ngx';\n\nconstructor(private spinnerDialog: SpinnerDialog) { }\n\n...\n\nthis.spinnerDialog.show();\n\nthis.spinnerDialog.hide();\n")))}g.isMDXComponent=!0}}]);