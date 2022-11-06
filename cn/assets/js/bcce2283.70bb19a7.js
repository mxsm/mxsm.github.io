"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[18635],{58215:(e,a,t)=>{t.d(a,{Z:()=>l});var n=t(67294);const l=function(e){let{children:a,hidden:t,className:l}=e;return n.createElement("div",{role:"tabpanel",hidden:t,className:l},a)}},26396:(e,a,t)=>{t.d(a,{Z:()=>m});var n=t(87462),l=t(67294),o=t(72389),r=t(79443);const s=function(){const e=(0,l.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var i=t(89521),c=t(86010);const d="tabItem_vU9c";function u(e){var a,t;const{lazy:n,block:o,defaultValue:r,values:u,groupId:m,className:h}=e,p=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=u??p.map((e=>{let{props:{value:a,label:t}}=e;return{value:a,label:t}})),g=(0,i.lx)(v,((e,a)=>e.value===a.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===r?r:r??(null==(a=p.find((e=>e.props.default)))?void 0:a.props.value)??(null==(t=p[0])?void 0:t.props.value);if(null!==f&&!v.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:k}=s(),[N,E]=(0,l.useState)(f),C=[],{blockElementScrollPositionUntilNextRender:y}=(0,i.o5)();if(null!=m){const e=b[m];null!=e&&e!==N&&v.some((a=>a.value===e))&&E(e)}const w=e=>{const a=e.currentTarget,t=C.indexOf(a),n=v[t].value;n!==N&&(y(a),E(n),null!=m&&k(m,n))},Z=e=>{var a;let t=null;switch(e.key){case"ArrowRight":{const a=C.indexOf(e.currentTarget)+1;t=C[a]||C[0];break}case"ArrowLeft":{const a=C.indexOf(e.currentTarget)-1;t=C[a]||C[C.length-1];break}}null==(a=t)||a.focus()};return l.createElement("div",{className:"tabs-container"},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":o},h)},v.map((e=>{let{value:a,label:t}=e;return l.createElement("li",{role:"tab",tabIndex:N===a?0:-1,"aria-selected":N===a,className:(0,c.Z)("tabs__item",d,{"tabs__item--active":N===a}),key:a,ref:e=>C.push(e),onKeyDown:Z,onFocus:w,onClick:w},t??a)}))),n?(0,l.cloneElement)(p.filter((e=>e.props.value===N))[0],{className:"margin-vert--md"}):l.createElement("div",{className:"margin-vert--md"},p.map(((e,a)=>(0,l.cloneElement)(e,{key:a,hidden:e.props.value!==N})))))}function m(e){const a=(0,o.Z)();return l.createElement(u,(0,n.Z)({key:String(a)},e))}},47758:(e,a,t)=>{t.d(a,{Z:()=>i});var n=t(67294),l=t(86010),o=t(39960),r=t(44996);const s="card_7QME";const i=function(e){const a=void 0===e.href,t=void 0!==e.href&&/^http/.test(e.href),i="undefined"===e.header?null:n.createElement("header",{className:"Card-header"},e.header),c=e.hoverIcon||e.icon,d=n.createElement(n.Fragment,null,e.img&&n.createElement("img",{src:(0,r.Z)(e.img),className:"Card-image"}),n.createElement("div",{className:"Card-container"},(e.icon||c)&&n.createElement("div",{className:"Card-icon-row"},e.icon&&n.createElement("img",{src:(0,r.Z)(e.icon),className:"Card-icon Card-icon-default"}),c&&n.createElement("img",{src:(0,r.Z)(c),className:"Card-icon Card-icon-hover"})),e.ionicon&&n.createElement("ion-icon",{name:e.ionicon,className:"Card-ionicon"}),e.iconset&&n.createElement("div",{className:"Card-iconset__container"},e.iconset.split(",").map(((a,t)=>n.createElement("img",{src:(0,r.Z)(a),className:"Card-icon "+(t===e.activeIndex?"Card-icon-active":""),"data-index":t,key:t})))),e.header&&i,n.createElement("div",{className:"Card-content"},e.children))),u=(0,l.Z)({"Card-with-image":void 0!==e.img,"Card-without-image":void 0===e.img,"Card-size-lg":"lg"===e.size,[e.className]:e.className});return a?n.createElement("docs-card",{class:u},n.createElement("div",{className:(0,l.Z)(s,"docs-card")},d)):t?n.createElement("docs-card",{class:u},n.createElement("a",{className:(0,l.Z)(s,"docs-card"),href:e.href,target:"_blank"},d)):n.createElement("docs-card",{class:u},n.createElement(o.default,{to:e.href,className:(0,l.Z)(s,"docs-card")},d))}},88694:(e,a,t)=>{t.d(a,{Z:()=>i});var n=t(87462),l=t(86010),o=t(67294);const r="docsButton_1mtQ",s="docsButtonRound_ZJZD";function i(e){let{href:a,round:t=!1,...i}=e;return i.className=(0,l.Z)({[i.className]:Boolean(i.className),[r]:!0,"docs-button":!0,[s]:t,"docs-button--round":t}),a?o.createElement("a",(0,n.Z)({href:a,className:"docsButton"},i),i.children):o.createElement("button",(0,n.Z)({className:"docsButton"},i),i.children)}},6912:(e,a,t)=>{t.r(a),t.d(a,{contentTitle:()=>u,default:()=>v,frontMatter:()=>d,metadata:()=>m,toc:()=>h});var n=t(87462),l=(t(67294),t(3905)),o=t(47758),r=t(88694),s=t(26396),i=t(58215),c=t(19055);const d={sidebar_label:"Health"},u="Health",m={unversionedId:"native/health",id:"version-v5/native/health",isDocsHomePage:!1,title:"Health",description:"A plugin that abstracts fitness and health repositories like Apple HealthKit or Google Fit.",source:"@site/versioned_docs/version-v5/native/health.md",sourceDirName:"native",slug:"/native/health",permalink:"/cn/docs/v5/native/health",editUrl:"https://crowdin.com/project/ionic-docs",tags:[],version:"v5",frontMatter:{sidebar_label:"Health"},sidebar:"version-v5/native",previous:{title:"Health Kit",permalink:"/cn/docs/v5/native/health-kit"},next:{title:"HTTP",permalink:"/cn/docs/v5/native/http"}},h=[{value:"Supported Platforms",id:"supported-platforms",children:[],level:2},{value:"Usage",id:"usage",children:[{value:"React",id:"react",children:[],level:3},{value:"Angular",id:"angular",children:[],level:3}],level:2}],p={toc:h};function v(e){let{components:a,...t}=e;return(0,l.kt)("wrapper",(0,n.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"health"},"Health"),(0,l.kt)("p",null,"A plugin that abstracts fitness and health repositories like Apple HealthKit or Google Fit."),(0,l.kt)("p",null,(0,l.kt)("a",{href:"https://github.com/dariosalvi78/cordova-plugin-health",target:"_blank",rel:"noopener",className:"git-link"},(0,l.kt)("svg",{viewBox:"0 0 512 512"},(0,l.kt)("path",{d:"M416 160c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 23.7 12.9 44.3 32 55.4v8.6c0 19.9-7.8 33.7-25.3 44.9-15.4 9.8-38.1 17.1-67.5 21.5-14 2.1-25.7 6-35.2 10.7V151.4c19.1-11.1 32-31.7 32-55.4 0-35.3-28.7-64-64-64S96 60.7 96 96c0 23.7 12.9 44.3 32 55.4v209.2c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-16.6-6.3-31.7-16.7-43.1 1.9-4.9 9.7-16.3 29.4-19.3 38.8-5.8 68.9-15.9 92.3-30.8 36-22.8 55-57 55-98.8v-8.6c19.1-11.1 32-31.7 32-55.4zM160 56c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm0 400c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm192-256c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"}))," ","https://github.com/dariosalvi78/cordova-plugin-health")),(0,l.kt)("h2",null,"Stuck on a Cordova issue?"),(0,l.kt)(o.Z,{className:"cordova-ee-card",header:"Don't waste precious time on plugin issues.",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Native",mdxType:"DocsCard"},(0,l.kt)("div",null,(0,l.kt)("img",{src:"/docs/icons/native-cordova-bot.png",class:"cordova-ee-img"}),(0,l.kt)("p",null,"If you're building a serious project, you can't afford to spend hours troubleshooting. Ionic\u2019s experts offer premium advisory services for both community plugins and premier plugins."),(0,l.kt)(r.Z,{className:"native-ee-detail",mdxType:"DocsButton"},"Contact Us Today!"))),(0,l.kt)("h2",{id:"installation"},(0,l.kt)("a",{href:"#installation"},"Installation")),(0,l.kt)(s.Z,{groupId:"runtime",defaultValue:"Capacitor",values:[{value:"Capacitor",label:"Capacitor"},{value:"Cordova",label:"Cordova"},{value:"Enterprise",label:"Enterprise"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"Capacitor",mdxType:"TabItem"},(0,l.kt)(c.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ npm install cordova-plugin-health ","\n","$ npm install @awesome-cordova-plugins/health ","\n","$ ionic cap sync")),(0,l.kt)(i.Z,{value:"Cordova",mdxType:"TabItem"},(0,l.kt)(c.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ ionic cordova plugin add cordova-plugin-health ","\n","$ npm install @awesome-cordova-plugins/health ","\n")),(0,l.kt)(i.Z,{value:"Enterprise",mdxType:"TabItem"},(0,l.kt)("blockquote",null,"Ionic Enterprise comes with fully supported and maintained plugins from the Ionic Team. \xa0",(0,l.kt)("a",{class:"btn",href:"https://ionic.io/docs/premier-plugins"},"Learn More")," or if you're interested in an enterprise version of this plugin ",(0,l.kt)("a",{class:"btn",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine"},"Contact Us")))),(0,l.kt)("h2",{id:"supported-platforms"},"Supported Platforms"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Android"),(0,l.kt)("li",{parentName:"ul"},"iOS")),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("h3",{id:"react"},"React"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/cn/docs/v5/native/community#react"},"Learn more about using Ionic Native components in React")),(0,l.kt)("h3",{id:"angular"},"Angular"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Health } from '@awesome-cordova-plugins/health/ngx';\n\n\nconstructor(private health: Health) { }\n\n...\n\nthis.health.isAvailable()\n.then((available:boolean) => {\n  console.log(available);\n  this.health.requestAuthorization([\n    'distance', 'nutrition',  //read and write permissions\n    {\n      read: ['steps'],       //read only permission\n      write: ['height', 'weight']  //write only permission\n    }\n  ])\n  .then(res => console.log(res))\n  .catch(e => console.log(e));\n})\n.catch(e => console.log(e));\n\n")),(0,l.kt)("p",null,"See description at ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/dariosalvi78/cordova-plugin-health"},"https://github.com/dariosalvi78/cordova-plugin-health")," for a full list of Datatypes and see examples."))}v.isMDXComponent=!0}}]);