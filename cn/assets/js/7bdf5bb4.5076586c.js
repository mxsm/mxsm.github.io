"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[33172],{58215:(e,a,t)=>{t.d(a,{Z:()=>n});var o=t(67294);const n=function(e){let{children:a,hidden:t,className:n}=e;return o.createElement("div",{role:"tabpanel",hidden:t,className:n},a)}},26396:(e,a,t)=>{t.d(a,{Z:()=>m});var o=t(87462),n=t(67294),l=t(72389),r=t(79443);const s=function(){const e=(0,n.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var c=t(89521),i=t(86010);const u="tabItem_vU9c";function d(e){var a,t;const{lazy:o,block:l,defaultValue:r,values:d,groupId:m,className:p}=e,v=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=d??v.map((e=>{let{props:{value:a,label:t}}=e;return{value:a,label:t}})),h=(0,c.lx)(g,((e,a)=>e.value===a.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===r?r:r??(null==(a=v.find((e=>e.props.default)))?void 0:a.props.value)??(null==(t=v[0])?void 0:t.props.value);if(null!==f&&!g.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:k}=s(),[E,N]=(0,n.useState)(f),y=[],{blockElementScrollPositionUntilNextRender:C}=(0,c.o5)();if(null!=m){const e=b[m];null!=e&&e!==E&&g.some((a=>a.value===e))&&N(e)}const Z=e=>{const a=e.currentTarget,t=y.indexOf(a),o=g[t].value;o!==E&&(C(a),N(o),null!=m&&k(m,o))},w=e=>{var a;let t=null;switch(e.key){case"ArrowRight":{const a=y.indexOf(e.currentTarget)+1;t=y[a]||y[0];break}case"ArrowLeft":{const a=y.indexOf(e.currentTarget)-1;t=y[a]||y[y.length-1];break}}null==(a=t)||a.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":l},p)},g.map((e=>{let{value:a,label:t}=e;return n.createElement("li",{role:"tab",tabIndex:E===a?0:-1,"aria-selected":E===a,className:(0,i.Z)("tabs__item",u,{"tabs__item--active":E===a}),key:a,ref:e=>y.push(e),onKeyDown:w,onFocus:Z,onClick:Z},t??a)}))),o?(0,n.cloneElement)(v.filter((e=>e.props.value===E))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},v.map(((e,a)=>(0,n.cloneElement)(e,{key:a,hidden:e.props.value!==E})))))}function m(e){const a=(0,l.Z)();return n.createElement(d,(0,o.Z)({key:String(a)},e))}},47758:(e,a,t)=>{t.d(a,{Z:()=>c});var o=t(67294),n=t(86010),l=t(39960),r=t(44996);const s="card_7QME";const c=function(e){const a=void 0===e.href,t=void 0!==e.href&&/^http/.test(e.href),c="undefined"===e.header?null:o.createElement("header",{className:"Card-header"},e.header),i=e.hoverIcon||e.icon,u=o.createElement(o.Fragment,null,e.img&&o.createElement("img",{src:(0,r.Z)(e.img),className:"Card-image"}),o.createElement("div",{className:"Card-container"},(e.icon||i)&&o.createElement("div",{className:"Card-icon-row"},e.icon&&o.createElement("img",{src:(0,r.Z)(e.icon),className:"Card-icon Card-icon-default"}),i&&o.createElement("img",{src:(0,r.Z)(i),className:"Card-icon Card-icon-hover"})),e.ionicon&&o.createElement("ion-icon",{name:e.ionicon,className:"Card-ionicon"}),e.iconset&&o.createElement("div",{className:"Card-iconset__container"},e.iconset.split(",").map(((a,t)=>o.createElement("img",{src:(0,r.Z)(a),className:"Card-icon "+(t===e.activeIndex?"Card-icon-active":""),"data-index":t,key:t})))),e.header&&c,o.createElement("div",{className:"Card-content"},e.children))),d=(0,n.Z)({"Card-with-image":void 0!==e.img,"Card-without-image":void 0===e.img,"Card-size-lg":"lg"===e.size,[e.className]:e.className});return a?o.createElement("docs-card",{class:d},o.createElement("div",{className:(0,n.Z)(s,"docs-card")},u)):t?o.createElement("docs-card",{class:d},o.createElement("a",{className:(0,n.Z)(s,"docs-card"),href:e.href,target:"_blank"},u)):o.createElement("docs-card",{class:d},o.createElement(l.default,{to:e.href,className:(0,n.Z)(s,"docs-card")},u))}},88694:(e,a,t)=>{t.d(a,{Z:()=>c});var o=t(87462),n=t(86010),l=t(67294);const r="docsButton_1mtQ",s="docsButtonRound_ZJZD";function c(e){let{href:a,round:t=!1,...c}=e;return c.className=(0,n.Z)({[c.className]:Boolean(c.className),[r]:!0,"docs-button":!0,[s]:t,"docs-button--round":t}),a?l.createElement("a",(0,o.Z)({href:a,className:"docsButton"},c),c.children):l.createElement("button",(0,o.Z)({className:"docsButton"},c),c.children)}},42620:(e,a,t)=>{t.r(a),t.d(a,{contentTitle:()=>d,default:()=>g,frontMatter:()=>u,metadata:()=>m,toc:()=>p});var o=t(87462),n=(t(67294),t(3905)),l=t(47758),r=t(88694),s=t(26396),c=t(58215),i=t(19055);const u={sidebar_label:"Google Plus"},d="Google Plus",m={unversionedId:"native/google-plus",id:"version-v5/native/google-plus",isDocsHomePage:!1,title:"Google Plus",description:"<a",source:"@site/versioned_docs/version-v5/native/google-plus.md",sourceDirName:"native",slug:"/native/google-plus",permalink:"/cn/docs/v5/native/google-plus",editUrl:"https://crowdin.com/project/ionic-docs",tags:[],version:"v5",frontMatter:{sidebar_label:"Google Plus"},sidebar:"version-v5/native",previous:{title:"Google Nearby",permalink:"/cn/docs/v5/native/google-nearby"},next:{title:"Health Kit",permalink:"/cn/docs/v5/native/health-kit"}},p=[{value:"Supported Platforms",id:"supported-platforms",children:[],level:2},{value:"Usage",id:"usage",children:[{value:"React",id:"react",children:[],level:3},{value:"Angular",id:"angular",children:[],level:3}],level:2}],v={toc:p};function g(e){let{components:a,...t}=e;return(0,n.kt)("wrapper",(0,o.Z)({},v,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"google-plus"},"Google Plus"),(0,n.kt)("p",null,(0,n.kt)("a",{href:"https://github.com/EddyVerbruggen/cordova-plugin-googleplus",target:"_blank",rel:"noopener",className:"git-link"},(0,n.kt)("svg",{viewBox:"0 0 512 512"},(0,n.kt)("path",{d:"M416 160c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 23.7 12.9 44.3 32 55.4v8.6c0 19.9-7.8 33.7-25.3 44.9-15.4 9.8-38.1 17.1-67.5 21.5-14 2.1-25.7 6-35.2 10.7V151.4c19.1-11.1 32-31.7 32-55.4 0-35.3-28.7-64-64-64S96 60.7 96 96c0 23.7 12.9 44.3 32 55.4v209.2c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-16.6-6.3-31.7-16.7-43.1 1.9-4.9 9.7-16.3 29.4-19.3 38.8-5.8 68.9-15.9 92.3-30.8 36-22.8 55-57 55-98.8v-8.6c19.1-11.1 32-31.7 32-55.4zM160 56c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm0 400c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm192-256c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"}))," ","https://github.com/EddyVerbruggen/cordova-plugin-googleplus")),(0,n.kt)("h2",null,"Stuck on a Cordova issue?"),(0,n.kt)(l.Z,{className:"cordova-ee-card",header:"Don't waste precious time on plugin issues.",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Native",mdxType:"DocsCard"},(0,n.kt)("div",null,(0,n.kt)("img",{src:"/docs/icons/native-cordova-bot.png",class:"cordova-ee-img"}),(0,n.kt)("p",null,"If you're building a serious project, you can't afford to spend hours troubleshooting. Ionic\u2019s experts offer premium advisory services for both community plugins and premier plugins."),(0,n.kt)(r.Z,{className:"native-ee-detail",mdxType:"DocsButton"},"Contact Us Today!"))),(0,n.kt)("h2",{id:"installation"},(0,n.kt)("a",{href:"#installation"},"Installation")),(0,n.kt)(s.Z,{groupId:"runtime",defaultValue:"Capacitor",values:[{value:"Capacitor",label:"Capacitor"},{value:"Cordova",label:"Cordova"},{value:"Enterprise",label:"Enterprise"}],mdxType:"Tabs"},(0,n.kt)(c.Z,{value:"Capacitor",mdxType:"TabItem"},(0,n.kt)(i.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ npm install cordova-plugin-googleplus ","\n","$ npm install @awesome-cordova-plugins/google-plus ","\n","$ ionic cap sync")),(0,n.kt)(c.Z,{value:"Cordova",mdxType:"TabItem"},(0,n.kt)(i.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ ionic cordova plugin add cordova-plugin-googleplus ","\n","$ npm install @awesome-cordova-plugins/google-plus ","\n")),(0,n.kt)(c.Z,{value:"Enterprise",mdxType:"TabItem"},(0,n.kt)("blockquote",null,"Ionic Enterprise comes with fully supported and maintained plugins from the Ionic Team. \xa0",(0,n.kt)("a",{class:"btn",href:"https://ionic.io/docs/premier-plugins"},"Learn More")," or if you're interested in an enterprise version of this plugin ",(0,n.kt)("a",{class:"btn",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine"},"Contact Us")))),(0,n.kt)("h2",{id:"supported-platforms"},"Supported Platforms"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Android"),(0,n.kt)("li",{parentName:"ul"},"iOS")),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("h3",{id:"react"},"React"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/cn/docs/v5/native/community#react"},"Learn more about using Ionic Native components in React")),(0,n.kt)("h3",{id:"angular"},"Angular"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"import { GooglePlus } from '@awesome-cordova-plugins/google-plus/ngx';\n\nconstructor(private googlePlus: GooglePlus) { }\n\n...\n\nthis.googlePlus.login({})\n  .then(res => console.log(res))\n  .catch(err => console.error(err));\n\n")))}g.isMDXComponent=!0}}]);