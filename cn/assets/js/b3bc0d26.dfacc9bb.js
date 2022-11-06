"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[66105],{58215:(e,a,t)=>{t.d(a,{Z:()=>r});var n=t(67294);const r=function(e){let{children:a,hidden:t,className:r}=e;return n.createElement("div",{role:"tabpanel",hidden:t,className:r},a)}},26396:(e,a,t)=>{t.d(a,{Z:()=>m});var n=t(87462),r=t(67294),o=t(72389),i=t(79443);const c=function(){const e=(0,r.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var l=t(89521),s=t(86010);const d="tabItem_vU9c";function u(e){var a,t;const{lazy:n,block:o,defaultValue:i,values:u,groupId:m,className:p}=e,v=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=u??v.map((e=>{let{props:{value:a,label:t}}=e;return{value:a,label:t}})),f=(0,l.lx)(h,((e,a)=>e.value===a.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===i?i:i??(null==(a=v.find((e=>e.props.default)))?void 0:a.props.value)??(null==(t=v[0])?void 0:t.props.value);if(null!==b&&!h.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:k}=c(),[E,N]=(0,r.useState)(b),C=[],{blockElementScrollPositionUntilNextRender:y}=(0,l.o5)();if(null!=m){const e=g[m];null!=e&&e!==E&&h.some((a=>a.value===e))&&N(e)}const Z=e=>{const a=e.currentTarget,t=C.indexOf(a),n=h[t].value;n!==E&&(y(a),N(n),null!=m&&k(m,n))},w=e=>{var a;let t=null;switch(e.key){case"ArrowRight":{const a=C.indexOf(e.currentTarget)+1;t=C[a]||C[0];break}case"ArrowLeft":{const a=C.indexOf(e.currentTarget)-1;t=C[a]||C[C.length-1];break}}null==(a=t)||a.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":o},p)},h.map((e=>{let{value:a,label:t}=e;return r.createElement("li",{role:"tab",tabIndex:E===a?0:-1,"aria-selected":E===a,className:(0,s.Z)("tabs__item",d,{"tabs__item--active":E===a}),key:a,ref:e=>C.push(e),onKeyDown:w,onFocus:Z,onClick:Z},t??a)}))),n?(0,r.cloneElement)(v.filter((e=>e.props.value===E))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},v.map(((e,a)=>(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==E})))))}function m(e){const a=(0,o.Z)();return r.createElement(u,(0,n.Z)({key:String(a)},e))}},47758:(e,a,t)=>{t.d(a,{Z:()=>l});var n=t(67294),r=t(86010),o=t(39960),i=t(44996);const c="card_7QME";const l=function(e){const a=void 0===e.href,t=void 0!==e.href&&/^http/.test(e.href),l="undefined"===e.header?null:n.createElement("header",{className:"Card-header"},e.header),s=e.hoverIcon||e.icon,d=n.createElement(n.Fragment,null,e.img&&n.createElement("img",{src:(0,i.Z)(e.img),className:"Card-image"}),n.createElement("div",{className:"Card-container"},(e.icon||s)&&n.createElement("div",{className:"Card-icon-row"},e.icon&&n.createElement("img",{src:(0,i.Z)(e.icon),className:"Card-icon Card-icon-default"}),s&&n.createElement("img",{src:(0,i.Z)(s),className:"Card-icon Card-icon-hover"})),e.ionicon&&n.createElement("ion-icon",{name:e.ionicon,className:"Card-ionicon"}),e.iconset&&n.createElement("div",{className:"Card-iconset__container"},e.iconset.split(",").map(((a,t)=>n.createElement("img",{src:(0,i.Z)(a),className:"Card-icon "+(t===e.activeIndex?"Card-icon-active":""),"data-index":t,key:t})))),e.header&&l,n.createElement("div",{className:"Card-content"},e.children))),u=(0,r.Z)({"Card-with-image":void 0!==e.img,"Card-without-image":void 0===e.img,"Card-size-lg":"lg"===e.size,[e.className]:e.className});return a?n.createElement("docs-card",{class:u},n.createElement("div",{className:(0,r.Z)(c,"docs-card")},d)):t?n.createElement("docs-card",{class:u},n.createElement("a",{className:(0,r.Z)(c,"docs-card"),href:e.href,target:"_blank"},d)):n.createElement("docs-card",{class:u},n.createElement(o.default,{to:e.href,className:(0,r.Z)(c,"docs-card")},d))}},88694:(e,a,t)=>{t.d(a,{Z:()=>l});var n=t(87462),r=t(86010),o=t(67294);const i="docsButton_1mtQ",c="docsButtonRound_ZJZD";function l(e){let{href:a,round:t=!1,...l}=e;return l.className=(0,r.Z)({[l.className]:Boolean(l.className),[i]:!0,"docs-button":!0,[c]:t,"docs-button--round":t}),a?o.createElement("a",(0,n.Z)({href:a,className:"docsButton"},l),l.children):o.createElement("button",(0,n.Z)({className:"docsButton"},l),l.children)}},55275:(e,a,t)=>{t.r(a),t.d(a,{contentTitle:()=>u,default:()=>h,frontMatter:()=>d,metadata:()=>m,toc:()=>p});var n=t(87462),r=(t(67294),t(3905)),o=t(47758),i=t(88694),c=t(26396),l=t(58215),s=t(19055);const d={title:"BranchIo"},u=void 0,m={unversionedId:"native/branch-io",id:"native/branch-io",isDocsHomePage:!1,title:"BranchIo",description:"Branch.io is an attribution service for deeplinking and invitation links",source:"@site/docs/native/branch-io.md",sourceDirName:"native",slug:"/native/branch-io",permalink:"/cn/docs/native/branch-io",editUrl:"https://crowdin.com/project/ionic-docs",tags:[],version:"current",frontMatter:{title:"BranchIo"},sidebar:"native",previous:{title:"Bluetooth Serial",permalink:"/cn/docs/native/bluetooth-serial"},next:{title:"Broadcaster",permalink:"/cn/docs/native/broadcaster"}},p=[{value:"Supported Platforms",id:"supported-platforms",children:[],level:2},{value:"Usage",id:"usage",children:[{value:"React",id:"react",children:[],level:3},{value:"Angular",id:"angular",children:[],level:3}],level:2}],v={toc:p};function h(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},v,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Branch.io is an attribution service for deeplinking and invitation links"),(0,r.kt)("p",null,(0,r.kt)("a",{href:"https://github.com/BranchMetrics/cordova-ionic-phonegap-branch-deep-linking",target:"_blank",rel:"noopener",className:"git-link"},(0,r.kt)("svg",{viewBox:"0 0 512 512"},(0,r.kt)("path",{d:"M416 160c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 23.7 12.9 44.3 32 55.4v8.6c0 19.9-7.8 33.7-25.3 44.9-15.4 9.8-38.1 17.1-67.5 21.5-14 2.1-25.7 6-35.2 10.7V151.4c19.1-11.1 32-31.7 32-55.4 0-35.3-28.7-64-64-64S96 60.7 96 96c0 23.7 12.9 44.3 32 55.4v209.2c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-16.6-6.3-31.7-16.7-43.1 1.9-4.9 9.7-16.3 29.4-19.3 38.8-5.8 68.9-15.9 92.3-30.8 36-22.8 55-57 55-98.8v-8.6c19.1-11.1 32-31.7 32-55.4zM160 56c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm0 400c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm192-256c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"}))," https://github.com/BranchMetrics/cordova-ionic-phonegap-branch-deep-linking")),(0,r.kt)("h2",null,"Stuck on a Cordova issue?"),(0,r.kt)(o.Z,{className:"cordova-ee-card",header:"Don't waste precious time on plugin issues.",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Native",mdxType:"DocsCard"},(0,r.kt)("div",null,(0,r.kt)("img",{src:"/docs/icons/native-cordova-bot.png",class:"cordova-ee-img"}),(0,r.kt)("p",null,"If you're building a serious project, you can't afford to spend hours troubleshooting. Ionic\u2019s experts offer premium advisory services for both community plugins and premier plugins."),(0,r.kt)(i.Z,{className:"native-ee-detail",mdxType:"DocsButton"},"Contact Us Today!"))),(0,r.kt)("h2",{id:"installation"},(0,r.kt)("a",{href:"#installation"},"Installation")),(0,r.kt)(c.Z,{defaultValue:"Capacitor",groupId:"runtime",values:[{value:"Capacitor",label:"Capacitor"},{value:"Cordova",label:"Cordova"},{value:"Enterprise",label:"Enterprise"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Capacitor",mdxType:"TabItem"},(0,r.kt)(s.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ npm install branch-cordova-sdk ","\n","$ npm install @awesome-cordova-plugins/branch-io ","\n","$ ionic cap sync")),(0,r.kt)(l.Z,{value:"Cordova",mdxType:"TabItem"},(0,r.kt)(s.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ ionic cordova plugin add branch-cordova-sdk ","\n","$ npm install @awesome-cordova-plugins/branch-io ","\n")),(0,r.kt)(l.Z,{value:"Enterprise",mdxType:"TabItem"},(0,r.kt)("blockquote",null,"Ionic Enterprise comes with fully supported and maintained plugins from the Ionic Team. \xa0",(0,r.kt)("a",{class:"btn",href:"https://ionic.io/docs/premier-plugins"},"Learn More")," or if you're interested in an enterprise version of this plugin ",(0,r.kt)("a",{class:"btn",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine"},"Contact Us")))),(0,r.kt)("h2",{id:"supported-platforms"},"Supported Platforms"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"iOS"),(0,r.kt)("li",{parentName:"ul"},"Android")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("h3",{id:"react"},"React"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/cn/docs/native/community#react"},"Learn more about using Ionic Native components in React")),(0,r.kt)("h3",{id:"angular"},"Angular"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"import { BranchIo } from '@awesome-cordova-plugins/branch-io/ngx';\n\n\nconstructor(private branch: BranchIo) { }\n\n")))}h.isMDXComponent=!0}}]);