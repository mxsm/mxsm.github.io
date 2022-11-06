"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[63653],{58215:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294);const l=function(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",hidden:a,className:l},t)}},26396:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(87462),l=a(67294),o=a(72389),r=a(79443);const i=function(){const e=(0,l.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var s=a(89521),c=a(86010);const d="tabItem_vU9c";function u(e){var t,a;const{lazy:n,block:o,defaultValue:r,values:u,groupId:m,className:p}=e,h=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=u??h.map((e=>{let{props:{value:t,label:a}}=e;return{value:t,label:a}})),f=(0,s.lx)(v,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===r?r:r??(null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)??(null==(a=h[0])?void 0:a.props.value);if(null!==k&&!v.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:b}=i(),[E,N]=(0,l.useState)(k),y=[],{blockElementScrollPositionUntilNextRender:C}=(0,s.o5)();if(null!=m){const e=g[m];null!=e&&e!==E&&v.some((t=>t.value===e))&&N(e)}const w=e=>{const t=e.currentTarget,a=y.indexOf(t),n=v[a].value;n!==E&&(C(t),N(n),null!=m&&b(m,n))},T=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{const t=y.indexOf(e.currentTarget)+1;a=y[t]||y[0];break}case"ArrowLeft":{const t=y.indexOf(e.currentTarget)-1;a=y[t]||y[y.length-1];break}}null==(t=a)||t.focus()};return l.createElement("div",{className:"tabs-container"},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":o},p)},v.map((e=>{let{value:t,label:a}=e;return l.createElement("li",{role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,className:(0,c.Z)("tabs__item",d,{"tabs__item--active":E===t}),key:t,ref:e=>y.push(e),onKeyDown:T,onFocus:w,onClick:w},a??t)}))),n?(0,l.cloneElement)(h.filter((e=>e.props.value===E))[0],{className:"margin-vert--md"}):l.createElement("div",{className:"margin-vert--md"},h.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==E})))))}function m(e){const t=(0,o.Z)();return l.createElement(u,(0,n.Z)({key:String(t)},e))}},47758:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(67294),l=a(86010),o=a(39960),r=a(44996);const i="card_7QME";const s=function(e){const t=void 0===e.href,a=void 0!==e.href&&/^http/.test(e.href),s="undefined"===e.header?null:n.createElement("header",{className:"Card-header"},e.header),c=e.hoverIcon||e.icon,d=n.createElement(n.Fragment,null,e.img&&n.createElement("img",{src:(0,r.Z)(e.img),className:"Card-image"}),n.createElement("div",{className:"Card-container"},(e.icon||c)&&n.createElement("div",{className:"Card-icon-row"},e.icon&&n.createElement("img",{src:(0,r.Z)(e.icon),className:"Card-icon Card-icon-default"}),c&&n.createElement("img",{src:(0,r.Z)(c),className:"Card-icon Card-icon-hover"})),e.ionicon&&n.createElement("ion-icon",{name:e.ionicon,className:"Card-ionicon"}),e.iconset&&n.createElement("div",{className:"Card-iconset__container"},e.iconset.split(",").map(((t,a)=>n.createElement("img",{src:(0,r.Z)(t),className:"Card-icon "+(a===e.activeIndex?"Card-icon-active":""),"data-index":a,key:a})))),e.header&&s,n.createElement("div",{className:"Card-content"},e.children))),u=(0,l.Z)({"Card-with-image":void 0!==e.img,"Card-without-image":void 0===e.img,"Card-size-lg":"lg"===e.size,[e.className]:e.className});return t?n.createElement("docs-card",{class:u},n.createElement("div",{className:(0,l.Z)(i,"docs-card")},d)):a?n.createElement("docs-card",{class:u},n.createElement("a",{className:(0,l.Z)(i,"docs-card"),href:e.href,target:"_blank"},d)):n.createElement("docs-card",{class:u},n.createElement(o.default,{to:e.href,className:(0,l.Z)(i,"docs-card")},d))}},88694:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(87462),l=a(86010),o=a(67294);const r="docsButton_1mtQ",i="docsButtonRound_ZJZD";function s(e){let{href:t,round:a=!1,...s}=e;return s.className=(0,l.Z)({[s.className]:Boolean(s.className),[r]:!0,"docs-button":!0,[i]:a,"docs-button--round":a}),t?o.createElement("a",(0,n.Z)({href:t,className:"docsButton"},s),s.children):o.createElement("button",(0,n.Z)({className:"docsButton"},s),s.children)}},84503:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>u,default:()=>v,frontMatter:()=>d,metadata:()=>m,toc:()=>p});var n=a(87462),l=(a(67294),a(3905)),o=a(47758),r=a(88694),i=a(26396),s=a(58215),c=a(19055);const d={title:"Health Kit"},u=void 0,m={unversionedId:"native/health-kit",id:"native/health-kit",isDocsHomePage:!1,title:"Health Kit",description:"Health Kit | HealthKit Plugin for iOS Apps | Ionic Documentation",source:"@site/docs/native/health-kit.md",sourceDirName:"native",slug:"/native/health-kit",permalink:"/cn/docs/native/health-kit",editUrl:"https://crowdin.com/project/ionic-docs",tags:[],version:"current",frontMatter:{title:"Health Kit"},sidebar:"native",previous:{title:"Header Color",permalink:"/cn/docs/native/header-color"},next:{title:"Health",permalink:"/cn/docs/native/health"}},p=[{value:"Supported Platforms",id:"supported-platforms",children:[],level:2},{value:"Usage",id:"usage",children:[{value:"React",id:"react",children:[],level:3},{value:"Angular",id:"angular",children:[],level:3}],level:2}],h={toc:p};function v(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("head",null,(0,l.kt)("title",null,"Health Kit | HealthKit Plugin for iOS Apps | Ionic Documentation"),(0,l.kt)("meta",{name:"description",content:"Health Kit lets you read data from and write data to the iOS 8+ HealthKit framework. The plugin shows any data saved in the Health app and on other iOS apps."})),(0,l.kt)("p",null,"The HealthKit plugin allows you to read data from and write data to the iOS 8+ HealthKit framework.\nAny data saved shows up in the iOS Health app and is available for other iOS apps."),(0,l.kt)("p",null,(0,l.kt)("a",{href:"https://github.com/Telerik-Verified-Plugins/HealthKit",target:"_blank",rel:"noopener",className:"git-link"},(0,l.kt)("svg",{viewBox:"0 0 512 512"},(0,l.kt)("path",{d:"M416 160c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 23.7 12.9 44.3 32 55.4v8.6c0 19.9-7.8 33.7-25.3 44.9-15.4 9.8-38.1 17.1-67.5 21.5-14 2.1-25.7 6-35.2 10.7V151.4c19.1-11.1 32-31.7 32-55.4 0-35.3-28.7-64-64-64S96 60.7 96 96c0 23.7 12.9 44.3 32 55.4v209.2c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-16.6-6.3-31.7-16.7-43.1 1.9-4.9 9.7-16.3 29.4-19.3 38.8-5.8 68.9-15.9 92.3-30.8 36-22.8 55-57 55-98.8v-8.6c19.1-11.1 32-31.7 32-55.4zM160 56c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm0 400c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm192-256c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"}))," https://github.com/Telerik-Verified-Plugins/HealthKit")),(0,l.kt)("h2",null,"Stuck on a Cordova issue?"),(0,l.kt)(o.Z,{className:"cordova-ee-card",header:"Don't waste precious time on plugin issues.",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Native",mdxType:"DocsCard"},(0,l.kt)("div",null,(0,l.kt)("img",{src:"/docs/icons/native-cordova-bot.png",class:"cordova-ee-img"}),(0,l.kt)("p",null,"If you're building a serious project, you can't afford to spend hours troubleshooting. Ionic\u2019s experts offer premium advisory services for both community plugins and premier plugins."),(0,l.kt)(r.Z,{className:"native-ee-detail",mdxType:"DocsButton"},"Contact Us Today!"))),(0,l.kt)("h2",{id:"installation"},(0,l.kt)("a",{href:"#installation"},"Installation")),(0,l.kt)(i.Z,{defaultValue:"Capacitor",groupId:"runtime",values:[{value:"Capacitor",label:"Capacitor"},{value:"Cordova",label:"Cordova"},{value:"Enterprise",label:"Enterprise"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"Capacitor",mdxType:"TabItem"},(0,l.kt)(c.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ npm install com.telerik.plugins.healthkit ","\n","$ npm install @awesome-cordova-plugins/health-kit ","\n","$ ionic cap sync")),(0,l.kt)(s.Z,{value:"Cordova",mdxType:"TabItem"},(0,l.kt)(c.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ ionic cordova plugin add com.telerik.plugins.healthkit ","\n","$ npm install @awesome-cordova-plugins/health-kit ","\n")),(0,l.kt)(s.Z,{value:"Enterprise",mdxType:"TabItem"},(0,l.kt)("blockquote",null,"Ionic Enterprise comes with fully supported and maintained plugins from the Ionic Team. \xa0",(0,l.kt)("a",{class:"btn",href:"https://ionic.io/docs/premier-plugins"},"Learn More")," or if you're interested in an enterprise version of this plugin ",(0,l.kt)("a",{class:"btn",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine"},"Contact Us")))),(0,l.kt)("h2",{id:"supported-platforms"},"Supported Platforms"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"iOS")),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("h3",{id:"react"},"React"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/cn/docs/native/community#react"},"Learn more about using Ionic Native components in React")),(0,l.kt)("h3",{id:"angular"},"Angular"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"import { HealthKit } from '@awesome-cordova-plugins/health-kit/ngx';\n\n\nconstructor(private healthKit: HealthKit) { }\n\n...\n")))}v.isMDXComponent=!0}}]);