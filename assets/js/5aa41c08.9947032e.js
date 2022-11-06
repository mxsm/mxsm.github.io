"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[54833],{58215:(e,a,t)=>{t.d(a,{Z:()=>r});var n=t(67294);const r=function(e){let{children:a,hidden:t,className:r}=e;return n.createElement("div",{role:"tabpanel",hidden:t,className:r},a)}},26396:(e,a,t)=>{t.d(a,{Z:()=>m});var n=t(87462),r=t(67294),o=t(72389),l=t(79443);const i=function(){const e=(0,r.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var c=t(89521),s=t(86010);const d="tabItem_vU9c";function u(e){var a,t;const{lazy:n,block:o,defaultValue:l,values:u,groupId:m,className:p}=e,v=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=u??v.map((e=>{let{props:{value:a,label:t}}=e;return{value:a,label:t}})),g=(0,c.lx)(h,((e,a)=>e.value===a.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===l?l:l??(null==(a=v.find((e=>e.props.default)))?void 0:a.props.value)??(null==(t=v[0])?void 0:t.props.value);if(null!==f&&!h.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:k}=i(),[y,C]=(0,r.useState)(f),E=[],{blockElementScrollPositionUntilNextRender:N}=(0,c.o5)();if(null!=m){const e=b[m];null!=e&&e!==y&&h.some((a=>a.value===e))&&C(e)}const x=e=>{const a=e.currentTarget,t=E.indexOf(a),n=h[t].value;n!==y&&(N(a),C(n),null!=m&&k(m,n))},Z=e=>{var a;let t=null;switch(e.key){case"ArrowRight":{const a=E.indexOf(e.currentTarget)+1;t=E[a]||E[0];break}case"ArrowLeft":{const a=E.indexOf(e.currentTarget)-1;t=E[a]||E[E.length-1];break}}null==(a=t)||a.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":o},p)},h.map((e=>{let{value:a,label:t}=e;return r.createElement("li",{role:"tab",tabIndex:y===a?0:-1,"aria-selected":y===a,className:(0,s.Z)("tabs__item",d,{"tabs__item--active":y===a}),key:a,ref:e=>E.push(e),onKeyDown:Z,onFocus:x,onClick:x},t??a)}))),n?(0,r.cloneElement)(v.filter((e=>e.props.value===y))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},v.map(((e,a)=>(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==y})))))}function m(e){const a=(0,o.Z)();return r.createElement(u,(0,n.Z)({key:String(a)},e))}},47758:(e,a,t)=>{t.d(a,{Z:()=>c});var n=t(67294),r=t(86010),o=t(39960),l=t(44996);const i="card_7QME";const c=function(e){const a=void 0===e.href,t=void 0!==e.href&&/^http/.test(e.href),c="undefined"===e.header?null:n.createElement("header",{className:"Card-header"},e.header),s=e.hoverIcon||e.icon,d=n.createElement(n.Fragment,null,e.img&&n.createElement("img",{src:(0,l.Z)(e.img),className:"Card-image"}),n.createElement("div",{className:"Card-container"},(e.icon||s)&&n.createElement("div",{className:"Card-icon-row"},e.icon&&n.createElement("img",{src:(0,l.Z)(e.icon),className:"Card-icon Card-icon-default"}),s&&n.createElement("img",{src:(0,l.Z)(s),className:"Card-icon Card-icon-hover"})),e.ionicon&&n.createElement("ion-icon",{name:e.ionicon,className:"Card-ionicon"}),e.iconset&&n.createElement("div",{className:"Card-iconset__container"},e.iconset.split(",").map(((a,t)=>n.createElement("img",{src:(0,l.Z)(a),className:"Card-icon "+(t===e.activeIndex?"Card-icon-active":""),"data-index":t,key:t})))),e.header&&c,n.createElement("div",{className:"Card-content"},e.children))),u=(0,r.Z)({"Card-with-image":void 0!==e.img,"Card-without-image":void 0===e.img,"Card-size-lg":"lg"===e.size,[e.className]:e.className});return a?n.createElement("docs-card",{class:u},n.createElement("div",{className:(0,r.Z)(i,"docs-card")},d)):t?n.createElement("docs-card",{class:u},n.createElement("a",{className:(0,r.Z)(i,"docs-card"),href:e.href,target:"_blank"},d)):n.createElement("docs-card",{class:u},n.createElement(o.default,{to:e.href,className:(0,r.Z)(i,"docs-card")},d))}},88694:(e,a,t)=>{t.d(a,{Z:()=>c});var n=t(87462),r=t(86010),o=t(67294);const l="docsButton_1mtQ",i="docsButtonRound_ZJZD";function c(e){let{href:a,round:t=!1,...c}=e;return c.className=(0,r.Z)({[c.className]:Boolean(c.className),[l]:!0,"docs-button":!0,[i]:t,"docs-button--round":t}),a?o.createElement("a",(0,n.Z)({href:a,className:"docsButton"},c),c.children):o.createElement("button",(0,n.Z)({className:"docsButton"},c),c.children)}},99934:(e,a,t)=>{t.r(a),t.d(a,{contentTitle:()=>u,default:()=>h,frontMatter:()=>d,metadata:()=>m,toc:()=>p});var n=t(87462),r=(t(67294),t(3905)),o=t(47758),l=t(88694),i=t(26396),c=t(58215),s=t(19055);const d={sidebar_label:"Call Directory"},u="Call Directory",m={unversionedId:"native/call-directory",id:"version-v5/native/call-directory",isDocsHomePage:!1,title:"Call Directory",description:"This plugin can add phone numbers to an Callkit call directory extension. Call reloadExtension after using addIdentification and removeIdentification",source:"@site/versioned_docs/version-v5/native/call-directory.md",sourceDirName:"native",slug:"/native/call-directory",permalink:"/docs/v5/native/call-directory",editUrl:"https://github.com/ionic-team/ionic-native/edit/master/src/@awesome-cordova-plugins/plugins/call-directory/index.ts",tags:[],version:"v5",frontMatter:{sidebar_label:"Call Directory"},sidebar:"version-v5/native",previous:{title:"Calendar",permalink:"/docs/v5/native/calendar"},next:{title:"Call Number",permalink:"/docs/v5/native/call-number"}},p=[{value:"Supported Platforms",id:"supported-platforms",children:[],level:2},{value:"Usage",id:"usage",children:[{value:"React",id:"react",children:[],level:3},{value:"Angular",id:"angular",children:[],level:3}],level:2}],v={toc:p};function h(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},v,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"call-directory"},"Call Directory"),(0,r.kt)("p",null,"This plugin can add phone numbers to an Callkit call directory extension. Call ",(0,r.kt)("inlineCode",{parentName:"p"},"reloadExtension")," after using ",(0,r.kt)("inlineCode",{parentName:"p"},"addIdentification")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"removeIdentification"),"\nto process the changes in the call directory extension."),(0,r.kt)("p",null,(0,r.kt)("a",{href:"https://github.com/GEDYSIntraWare/cordova-plugin-call-directory",target:"_blank",rel:"noopener",className:"git-link"},(0,r.kt)("svg",{viewBox:"0 0 512 512"},(0,r.kt)("path",{d:"M416 160c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 23.7 12.9 44.3 32 55.4v8.6c0 19.9-7.8 33.7-25.3 44.9-15.4 9.8-38.1 17.1-67.5 21.5-14 2.1-25.7 6-35.2 10.7V151.4c19.1-11.1 32-31.7 32-55.4 0-35.3-28.7-64-64-64S96 60.7 96 96c0 23.7 12.9 44.3 32 55.4v209.2c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-16.6-6.3-31.7-16.7-43.1 1.9-4.9 9.7-16.3 29.4-19.3 38.8-5.8 68.9-15.9 92.3-30.8 36-22.8 55-57 55-98.8v-8.6c19.1-11.1 32-31.7 32-55.4zM160 56c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm0 400c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm192-256c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"}))," ","https://github.com/GEDYSIntraWare/cordova-plugin-call-directory")),(0,r.kt)("h2",null,"Stuck on a Cordova issue?"),(0,r.kt)(o.Z,{className:"cordova-ee-card",header:"Don't waste precious time on plugin issues.",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Native",mdxType:"DocsCard"},(0,r.kt)("div",null,(0,r.kt)("img",{src:"/docs/icons/native-cordova-bot.png",class:"cordova-ee-img"}),(0,r.kt)("p",null,"If you're building a serious project, you can't afford to spend hours troubleshooting. Ionic\u2019s experts offer premium advisory services for both community plugins and premier plugins."),(0,r.kt)(l.Z,{className:"native-ee-detail",mdxType:"DocsButton"},"Contact Us Today!"))),(0,r.kt)("h2",{id:"installation"},(0,r.kt)("a",{href:"#installation"},"Installation")),(0,r.kt)(i.Z,{groupId:"runtime",defaultValue:"Capacitor",values:[{value:"Capacitor",label:"Capacitor"},{value:"Cordova",label:"Cordova"},{value:"Enterprise",label:"Enterprise"}],mdxType:"Tabs"},(0,r.kt)(c.Z,{value:"Capacitor",mdxType:"TabItem"},(0,r.kt)(s.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ npm install cordova-plugin-call-directory ","\n","$ npm install @awesome-cordova-plugins/call-directory ","\n","$ ionic cap sync")),(0,r.kt)(c.Z,{value:"Cordova",mdxType:"TabItem"},(0,r.kt)(s.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ ionic cordova plugin add cordova-plugin-call-directory ","\n","$ npm install @awesome-cordova-plugins/call-directory ","\n")),(0,r.kt)(c.Z,{value:"Enterprise",mdxType:"TabItem"},(0,r.kt)("blockquote",null,"Ionic Enterprise comes with fully supported and maintained plugins from the Ionic Team. \xa0",(0,r.kt)("a",{class:"btn",href:"https://ionic.io/docs/premier-plugins"},"Learn More")," or if you're interested in an enterprise version of this plugin ",(0,r.kt)("a",{class:"btn",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine"},"Contact Us")))),(0,r.kt)("h2",{id:"supported-platforms"},"Supported Platforms"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"iOS")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("h3",{id:"react"},"React"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/v5/native/community#react"},"Learn more about using Ionic Native components in React")),(0,r.kt)("h3",{id:"angular"},"Angular"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { CallDirectory } from \'@awesome-cordova-plugins/call-directory/ngx\';\n\n\nconstructor(private callDirectory: CallDirectory) { }\n\n\nlet items = [{label: "Hello", number: "123"}];\nthis.callDirectory.addIdentification(items)\n  .then((res: any) => console.log(res))\n  .catch((error: any) => console.error(error));\n\nthis.callDirectory.reloadExtension()\n  .then(res: string) => console.log(res))\n  .catch((error: any) => console.error(error));\n')))}h.isMDXComponent=!0}}]);