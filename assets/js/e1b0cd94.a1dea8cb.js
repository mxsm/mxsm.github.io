"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[11231],{58215:(e,a,t)=>{t.d(a,{Z:()=>n});var r=t(67294);const n=function(e){let{children:a,hidden:t,className:n}=e;return r.createElement("div",{role:"tabpanel",hidden:t,className:n},a)}},26396:(e,a,t)=>{t.d(a,{Z:()=>m});var r=t(87462),n=t(67294),o=t(72389),i=t(79443);const s=function(){const e=(0,n.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var l=t(89521),c=t(86010);const d="tabItem_vU9c";function u(e){var a,t;const{lazy:r,block:o,defaultValue:i,values:u,groupId:m,className:p}=e,v=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=u??v.map((e=>{let{props:{value:a,label:t}}=e;return{value:a,label:t}})),b=(0,l.lx)(h,((e,a)=>e.value===a.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===i?i:i??(null==(a=v.find((e=>e.props.default)))?void 0:a.props.value)??(null==(t=v[0])?void 0:t.props.value);if(null!==g&&!h.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:f,setTabGroupChoices:k}=s(),[E,N]=(0,n.useState)(g),w=[],{blockElementScrollPositionUntilNextRender:C}=(0,l.o5)();if(null!=m){const e=f[m];null!=e&&e!==E&&h.some((a=>a.value===e))&&N(e)}const y=e=>{const a=e.currentTarget,t=w.indexOf(a),r=h[t].value;r!==E&&(C(a),N(r),null!=m&&k(m,r))},Z=e=>{var a;let t=null;switch(e.key){case"ArrowRight":{const a=w.indexOf(e.currentTarget)+1;t=w[a]||w[0];break}case"ArrowLeft":{const a=w.indexOf(e.currentTarget)-1;t=w[a]||w[w.length-1];break}}null==(a=t)||a.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":o},p)},h.map((e=>{let{value:a,label:t}=e;return n.createElement("li",{role:"tab",tabIndex:E===a?0:-1,"aria-selected":E===a,className:(0,c.Z)("tabs__item",d,{"tabs__item--active":E===a}),key:a,ref:e=>w.push(e),onKeyDown:Z,onFocus:y,onClick:y},t??a)}))),r?(0,n.cloneElement)(v.filter((e=>e.props.value===E))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},v.map(((e,a)=>(0,n.cloneElement)(e,{key:a,hidden:e.props.value!==E})))))}function m(e){const a=(0,o.Z)();return n.createElement(u,(0,r.Z)({key:String(a)},e))}},47758:(e,a,t)=>{t.d(a,{Z:()=>l});var r=t(67294),n=t(86010),o=t(39960),i=t(44996);const s="card_7QME";const l=function(e){const a=void 0===e.href,t=void 0!==e.href&&/^http/.test(e.href),l="undefined"===e.header?null:r.createElement("header",{className:"Card-header"},e.header),c=e.hoverIcon||e.icon,d=r.createElement(r.Fragment,null,e.img&&r.createElement("img",{src:(0,i.Z)(e.img),className:"Card-image"}),r.createElement("div",{className:"Card-container"},(e.icon||c)&&r.createElement("div",{className:"Card-icon-row"},e.icon&&r.createElement("img",{src:(0,i.Z)(e.icon),className:"Card-icon Card-icon-default"}),c&&r.createElement("img",{src:(0,i.Z)(c),className:"Card-icon Card-icon-hover"})),e.ionicon&&r.createElement("ion-icon",{name:e.ionicon,className:"Card-ionicon"}),e.iconset&&r.createElement("div",{className:"Card-iconset__container"},e.iconset.split(",").map(((a,t)=>r.createElement("img",{src:(0,i.Z)(a),className:"Card-icon "+(t===e.activeIndex?"Card-icon-active":""),"data-index":t,key:t})))),e.header&&l,r.createElement("div",{className:"Card-content"},e.children))),u=(0,n.Z)({"Card-with-image":void 0!==e.img,"Card-without-image":void 0===e.img,"Card-size-lg":"lg"===e.size,[e.className]:e.className});return a?r.createElement("docs-card",{class:u},r.createElement("div",{className:(0,n.Z)(s,"docs-card")},d)):t?r.createElement("docs-card",{class:u},r.createElement("a",{className:(0,n.Z)(s,"docs-card"),href:e.href,target:"_blank"},d)):r.createElement("docs-card",{class:u},r.createElement(o.default,{to:e.href,className:(0,n.Z)(s,"docs-card")},d))}},88694:(e,a,t)=>{t.d(a,{Z:()=>l});var r=t(87462),n=t(86010),o=t(67294);const i="docsButton_1mtQ",s="docsButtonRound_ZJZD";function l(e){let{href:a,round:t=!1,...l}=e;return l.className=(0,n.Z)({[l.className]:Boolean(l.className),[i]:!0,"docs-button":!0,[s]:t,"docs-button--round":t}),a?o.createElement("a",(0,r.Z)({href:a,className:"docsButton"},l),l.children):o.createElement("button",(0,r.Z)({className:"docsButton"},l),l.children)}},48631:(e,a,t)=>{t.r(a),t.d(a,{contentTitle:()=>u,default:()=>h,frontMatter:()=>d,metadata:()=>m,toc:()=>p});var r=t(87462),n=(t(67294),t(3905)),o=t(47758),i=t(88694),s=t(26396),l=t(58215),c=t(19055);const d={sidebar_label:"BiometricWrapper"},u="BiometricWrapper",m={unversionedId:"native/biometric-wrapper",id:"version-v5/native/biometric-wrapper",isDocsHomePage:!1,title:"BiometricWrapper",description:"This plugin capture biometric(Iris and Fingerprint) and validate the user.",source:"@site/versioned_docs/version-v5/native/biometric-wrapper.md",sourceDirName:"native",slug:"/native/biometric-wrapper",permalink:"/docs/v5/native/biometric-wrapper",editUrl:"https://github.com/ionic-team/ionic-native/edit/master/src/@awesome-cordova-plugins/plugins/biometric-wrapper/index.ts",tags:[],version:"v5",frontMatter:{sidebar_label:"BiometricWrapper"},sidebar:"version-v5/native",previous:{title:"BioCatch",permalink:"/docs/v5/native/biocatch"},next:{title:"BLE",permalink:"/docs/v5/native/ble"}},p=[{value:"Supported Platforms",id:"supported-platforms",children:[],level:2},{value:"Usage",id:"usage",children:[{value:"React",id:"react",children:[],level:3},{value:"Angular",id:"angular",children:[],level:3}],level:2}],v={toc:p};function h(e){let{components:a,...t}=e;return(0,n.kt)("wrapper",(0,r.Z)({},v,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"biometricwrapper"},"BiometricWrapper"),(0,n.kt)("p",null,"This plugin capture biometric(Iris and Fingerprint) and validate the user.\nMay be used in Banking domain"),(0,n.kt)("p",null,(0,n.kt)("a",{href:"",target:"_blank",rel:"noopener",className:"git-link"},(0,n.kt)("svg",{viewBox:"0 0 512 512"},(0,n.kt)("path",{d:"M416 160c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 23.7 12.9 44.3 32 55.4v8.6c0 19.9-7.8 33.7-25.3 44.9-15.4 9.8-38.1 17.1-67.5 21.5-14 2.1-25.7 6-35.2 10.7V151.4c19.1-11.1 32-31.7 32-55.4 0-35.3-28.7-64-64-64S96 60.7 96 96c0 23.7 12.9 44.3 32 55.4v209.2c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-16.6-6.3-31.7-16.7-43.1 1.9-4.9 9.7-16.3 29.4-19.3 38.8-5.8 68.9-15.9 92.3-30.8 36-22.8 55-57 55-98.8v-8.6c19.1-11.1 32-31.7 32-55.4zM160 56c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm0 400c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm192-256c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"})))),(0,n.kt)("h2",null,"Stuck on a Cordova issue?"),(0,n.kt)(o.Z,{className:"cordova-ee-card",header:"Don't waste precious time on plugin issues.",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Native",mdxType:"DocsCard"},(0,n.kt)("div",null,(0,n.kt)("img",{src:"/docs/icons/native-cordova-bot.png",class:"cordova-ee-img"}),(0,n.kt)("p",null,"If you're building a serious project, you can't afford to spend hours troubleshooting. Ionic\u2019s experts offer premium advisory services for both community plugins and premier plugins."),(0,n.kt)(i.Z,{className:"native-ee-detail",mdxType:"DocsButton"},"Contact Us Today!"))),(0,n.kt)("h2",{id:"installation"},(0,n.kt)("a",{href:"#installation"},"Installation")),(0,n.kt)(s.Z,{groupId:"runtime",defaultValue:"Capacitor",values:[{value:"Capacitor",label:"Capacitor"},{value:"Cordova",label:"Cordova"},{value:"Enterprise",label:"Enterprise"}],mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Capacitor",mdxType:"TabItem"},(0,n.kt)(c.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ npm install cordova-plugin-biometric ","\n","$ npm install @awesome-cordova-plugins/biometric-wrapper ","\n","$ ionic cap sync")),(0,n.kt)(l.Z,{value:"Cordova",mdxType:"TabItem"},(0,n.kt)(c.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ ionic cordova plugin add cordova-plugin-biometric ","\n","$ npm install @awesome-cordova-plugins/biometric-wrapper ","\n")),(0,n.kt)(l.Z,{value:"Enterprise",mdxType:"TabItem"},(0,n.kt)("blockquote",null,"Ionic Enterprise comes with fully supported and maintained plugins from the Ionic Team. \xa0",(0,n.kt)("a",{class:"btn",href:"https://ionic.io/docs/premier-plugins"},"Learn More")," or if you're interested in an enterprise version of this plugin ",(0,n.kt)("a",{class:"btn",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine"},"Contact Us")))),(0,n.kt)("h2",{id:"supported-platforms"},"Supported Platforms"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Android")),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("h3",{id:"react"},"React"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/v5/native/community#react"},"Learn more about using Ionic Native components in React")),(0,n.kt)("h3",{id:"angular"},"Angular"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"import { BiometricWrapper } from '@awesome-cordova-plugins/biometric-wrapper/ngx';\n\n\nconstructor(private biometricWrapper: BiometricWrapper) { }\n\n...\n\n\nthis.biometricWrapper.activateIris({'PID_XML': '&lt;pid-xml/>'})\n  .then((res: any) => )\n  .catch((error: any) => );\n\n")))}h.isMDXComponent=!0}}]);