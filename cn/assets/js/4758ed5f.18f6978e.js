"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[66391],{58215:(e,a,t)=>{t.d(a,{Z:()=>r});var o=t(67294);const r=function(e){let{children:a,hidden:t,className:r}=e;return o.createElement("div",{role:"tabpanel",hidden:t,className:r},a)}},26396:(e,a,t)=>{t.d(a,{Z:()=>m});var o=t(87462),r=t(67294),n=t(72389),s=t(79443);const l=function(){const e=(0,r.useContext)(s.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var i=t(89521),c=t(86010);const d="tabItem_vU9c";function u(e){var a,t;const{lazy:o,block:n,defaultValue:s,values:u,groupId:m,className:p}=e,v=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=u??v.map((e=>{let{props:{value:a,label:t}}=e;return{value:a,label:t}})),f=(0,i.lx)(h,((e,a)=>e.value===a.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===s?s:s??(null==(a=v.find((e=>e.props.default)))?void 0:a.props.value)??(null==(t=v[0])?void 0:t.props.value);if(null!==g&&!h.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:k}=l(),[C,N]=(0,r.useState)(g),E=[],{blockElementScrollPositionUntilNextRender:y}=(0,i.o5)();if(null!=m){const e=b[m];null!=e&&e!==C&&h.some((a=>a.value===e))&&N(e)}const T=e=>{const a=e.currentTarget,t=E.indexOf(a),o=h[t].value;o!==C&&(y(a),N(o),null!=m&&k(m,o))},Z=e=>{var a;let t=null;switch(e.key){case"ArrowRight":{const a=E.indexOf(e.currentTarget)+1;t=E[a]||E[0];break}case"ArrowLeft":{const a=E.indexOf(e.currentTarget)-1;t=E[a]||E[E.length-1];break}}null==(a=t)||a.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":n},p)},h.map((e=>{let{value:a,label:t}=e;return r.createElement("li",{role:"tab",tabIndex:C===a?0:-1,"aria-selected":C===a,className:(0,c.Z)("tabs__item",d,{"tabs__item--active":C===a}),key:a,ref:e=>E.push(e),onKeyDown:Z,onFocus:T,onClick:T},t??a)}))),o?(0,r.cloneElement)(v.filter((e=>e.props.value===C))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},v.map(((e,a)=>(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==C})))))}function m(e){const a=(0,n.Z)();return r.createElement(u,(0,o.Z)({key:String(a)},e))}},47758:(e,a,t)=>{t.d(a,{Z:()=>i});var o=t(67294),r=t(86010),n=t(39960),s=t(44996);const l="card_7QME";const i=function(e){const a=void 0===e.href,t=void 0!==e.href&&/^http/.test(e.href),i="undefined"===e.header?null:o.createElement("header",{className:"Card-header"},e.header),c=e.hoverIcon||e.icon,d=o.createElement(o.Fragment,null,e.img&&o.createElement("img",{src:(0,s.Z)(e.img),className:"Card-image"}),o.createElement("div",{className:"Card-container"},(e.icon||c)&&o.createElement("div",{className:"Card-icon-row"},e.icon&&o.createElement("img",{src:(0,s.Z)(e.icon),className:"Card-icon Card-icon-default"}),c&&o.createElement("img",{src:(0,s.Z)(c),className:"Card-icon Card-icon-hover"})),e.ionicon&&o.createElement("ion-icon",{name:e.ionicon,className:"Card-ionicon"}),e.iconset&&o.createElement("div",{className:"Card-iconset__container"},e.iconset.split(",").map(((a,t)=>o.createElement("img",{src:(0,s.Z)(a),className:"Card-icon "+(t===e.activeIndex?"Card-icon-active":""),"data-index":t,key:t})))),e.header&&i,o.createElement("div",{className:"Card-content"},e.children))),u=(0,r.Z)({"Card-with-image":void 0!==e.img,"Card-without-image":void 0===e.img,"Card-size-lg":"lg"===e.size,[e.className]:e.className});return a?o.createElement("docs-card",{class:u},o.createElement("div",{className:(0,r.Z)(l,"docs-card")},d)):t?o.createElement("docs-card",{class:u},o.createElement("a",{className:(0,r.Z)(l,"docs-card"),href:e.href,target:"_blank"},d)):o.createElement("docs-card",{class:u},o.createElement(n.default,{to:e.href,className:(0,r.Z)(l,"docs-card")},d))}},88694:(e,a,t)=>{t.d(a,{Z:()=>i});var o=t(87462),r=t(86010),n=t(67294);const s="docsButton_1mtQ",l="docsButtonRound_ZJZD";function i(e){let{href:a,round:t=!1,...i}=e;return i.className=(0,r.Z)({[i.className]:Boolean(i.className),[s]:!0,"docs-button":!0,[l]:t,"docs-button--round":t}),a?n.createElement("a",(0,o.Z)({href:a,className:"docsButton"},i),i.children):n.createElement("button",(0,o.Z)({className:"docsButton"},i),i.children)}},47002:(e,a,t)=>{t.r(a),t.d(a,{contentTitle:()=>u,default:()=>h,frontMatter:()=>d,metadata:()=>m,toc:()=>p});var o=t(87462),r=(t(67294),t(3905)),n=t(47758),s=t(88694),l=t(26396),i=t(58215),c=t(19055);const d={sidebar_label:"Iamport Cordova"},u="Iamport Cordova",m={unversionedId:"native/iamport-cordova",id:"version-v5/native/iamport-cordova",isDocsHomePage:!1,title:"Iamport Cordova",description:"This plugin does something",source:"@site/versioned_docs/version-v5/native/iamport-cordova.md",sourceDirName:"native",slug:"/native/iamport-cordova",permalink:"/cn/docs/v5/native/iamport-cordova",editUrl:"https://crowdin.com/project/ionic-docs",tags:[],version:"v5",frontMatter:{sidebar_label:"Iamport Cordova"},sidebar:"version-v5/native",previous:{title:"HTTP",permalink:"/cn/docs/v5/native/http"},next:{title:"IBeacon",permalink:"/cn/docs/v5/native/ibeacon"}},p=[{value:"Supported Platforms",id:"supported-platforms",children:[],level:2},{value:"Usage",id:"usage",children:[{value:"React",id:"react",children:[],level:3},{value:"Angular",id:"angular",children:[],level:3}],level:2}],v={toc:p};function h(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},v,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"iamport-cordova"},"Iamport Cordova"),(0,r.kt)("p",null,"This plugin does something"),(0,r.kt)("p",null,(0,r.kt)("a",{href:"https://github.com/iamport/iamport-cordova",target:"_blank",rel:"noopener",className:"git-link"},(0,r.kt)("svg",{viewBox:"0 0 512 512"},(0,r.kt)("path",{d:"M416 160c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 23.7 12.9 44.3 32 55.4v8.6c0 19.9-7.8 33.7-25.3 44.9-15.4 9.8-38.1 17.1-67.5 21.5-14 2.1-25.7 6-35.2 10.7V151.4c19.1-11.1 32-31.7 32-55.4 0-35.3-28.7-64-64-64S96 60.7 96 96c0 23.7 12.9 44.3 32 55.4v209.2c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-16.6-6.3-31.7-16.7-43.1 1.9-4.9 9.7-16.3 29.4-19.3 38.8-5.8 68.9-15.9 92.3-30.8 36-22.8 55-57 55-98.8v-8.6c19.1-11.1 32-31.7 32-55.4zM160 56c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm0 400c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm192-256c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"}))," ","https://github.com/iamport/iamport-cordova")),(0,r.kt)("h2",null,"Stuck on a Cordova issue?"),(0,r.kt)(n.Z,{className:"cordova-ee-card",header:"Don't waste precious time on plugin issues.",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Native",mdxType:"DocsCard"},(0,r.kt)("div",null,(0,r.kt)("img",{src:"/docs/icons/native-cordova-bot.png",class:"cordova-ee-img"}),(0,r.kt)("p",null,"If you're building a serious project, you can't afford to spend hours troubleshooting. Ionic\u2019s experts offer premium advisory services for both community plugins and premier plugins."),(0,r.kt)(s.Z,{className:"native-ee-detail",mdxType:"DocsButton"},"Contact Us Today!"))),(0,r.kt)("h2",{id:"installation"},(0,r.kt)("a",{href:"#installation"},"Installation")),(0,r.kt)(l.Z,{groupId:"runtime",defaultValue:"Capacitor",values:[{value:"Capacitor",label:"Capacitor"},{value:"Cordova",label:"Cordova"},{value:"Enterprise",label:"Enterprise"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Capacitor",mdxType:"TabItem"},(0,r.kt)(c.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ npm install iamport-cordova ","\n","$ npm install @awesome-cordova-plugins/iamport-cordova ","\n","$ ionic cap sync")),(0,r.kt)(i.Z,{value:"Cordova",mdxType:"TabItem"},(0,r.kt)(c.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ ionic cordova plugin add iamport-cordova ","\n","$ npm install @awesome-cordova-plugins/iamport-cordova ","\n")),(0,r.kt)(i.Z,{value:"Enterprise",mdxType:"TabItem"},(0,r.kt)("blockquote",null,"Ionic Enterprise comes with fully supported and maintained plugins from the Ionic Team. \xa0",(0,r.kt)("a",{class:"btn",href:"https://ionic.io/docs/premier-plugins"},"Learn More")," or if you're interested in an enterprise version of this plugin ",(0,r.kt)("a",{class:"btn",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine"},"Contact Us")))),(0,r.kt)("h2",{id:"supported-platforms"},"Supported Platforms"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ios"),(0,r.kt)("li",{parentName:"ul"},"android")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("h3",{id:"react"},"React"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/cn/docs/v5/native/community#react"},"Learn more about using Ionic Native components in React")),(0,r.kt)("h3",{id:"angular"},"Angular"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { IamportCordova } from '@awesome-cordova-plugins/iamport-cordova/ngx';\n\n\nconstructor(private iamportCordova: IamportCordova) { }\n\n...\n\n\nthis.iamportCordova.functionName('Hello', 123)\n  .then((res: any) => console.log(res))\n  .catch((error: any) => console.error(error));\n\n")))}h.isMDXComponent=!0}}]);