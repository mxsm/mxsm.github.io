"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[45985],{58215:(e,a,n)=>{n.d(a,{Z:()=>r});var t=n(67294);const r=function(e){let{children:a,hidden:n,className:r}=e;return t.createElement("div",{role:"tabpanel",hidden:n,className:r},a)}},26396:(e,a,n)=>{n.d(a,{Z:()=>p});var t=n(87462),r=n(67294),o=n(72389),i=n(79443);const s=function(){const e=(0,r.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var l=n(89521),c=n(86010);const u="tabItem_vU9c";function d(e){var a,n;const{lazy:t,block:o,defaultValue:i,values:d,groupId:p,className:m}=e,v=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=d??v.map((e=>{let{props:{value:a,label:n}}=e;return{value:a,label:n}})),f=(0,l.lx)(h,((e,a)=>e.value===a.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===i?i:i??(null==(a=v.find((e=>e.props.default)))?void 0:a.props.value)??(null==(n=v[0])?void 0:n.props.value);if(null!==g&&!h.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:k}=s(),[w,E]=(0,r.useState)(g),N=[],{blockElementScrollPositionUntilNextRender:C}=(0,l.o5)();if(null!=p){const e=b[p];null!=e&&e!==w&&h.some((a=>a.value===e))&&E(e)}const y=e=>{const a=e.currentTarget,n=N.indexOf(a),t=h[n].value;t!==w&&(C(a),E(t),null!=p&&k(p,t))},Z=e=>{var a;let n=null;switch(e.key){case"ArrowRight":{const a=N.indexOf(e.currentTarget)+1;n=N[a]||N[0];break}case"ArrowLeft":{const a=N.indexOf(e.currentTarget)-1;n=N[a]||N[N.length-1];break}}null==(a=n)||a.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":o},m)},h.map((e=>{let{value:a,label:n}=e;return r.createElement("li",{role:"tab",tabIndex:w===a?0:-1,"aria-selected":w===a,className:(0,c.Z)("tabs__item",u,{"tabs__item--active":w===a}),key:a,ref:e=>N.push(e),onKeyDown:Z,onFocus:y,onClick:y},n??a)}))),t?(0,r.cloneElement)(v.filter((e=>e.props.value===w))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},v.map(((e,a)=>(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==w})))))}function p(e){const a=(0,o.Z)();return r.createElement(d,(0,t.Z)({key:String(a)},e))}},47758:(e,a,n)=>{n.d(a,{Z:()=>l});var t=n(67294),r=n(86010),o=n(39960),i=n(44996);const s="card_7QME";const l=function(e){const a=void 0===e.href,n=void 0!==e.href&&/^http/.test(e.href),l="undefined"===e.header?null:t.createElement("header",{className:"Card-header"},e.header),c=e.hoverIcon||e.icon,u=t.createElement(t.Fragment,null,e.img&&t.createElement("img",{src:(0,i.Z)(e.img),className:"Card-image"}),t.createElement("div",{className:"Card-container"},(e.icon||c)&&t.createElement("div",{className:"Card-icon-row"},e.icon&&t.createElement("img",{src:(0,i.Z)(e.icon),className:"Card-icon Card-icon-default"}),c&&t.createElement("img",{src:(0,i.Z)(c),className:"Card-icon Card-icon-hover"})),e.ionicon&&t.createElement("ion-icon",{name:e.ionicon,className:"Card-ionicon"}),e.iconset&&t.createElement("div",{className:"Card-iconset__container"},e.iconset.split(",").map(((a,n)=>t.createElement("img",{src:(0,i.Z)(a),className:"Card-icon "+(n===e.activeIndex?"Card-icon-active":""),"data-index":n,key:n})))),e.header&&l,t.createElement("div",{className:"Card-content"},e.children))),d=(0,r.Z)({"Card-with-image":void 0!==e.img,"Card-without-image":void 0===e.img,"Card-size-lg":"lg"===e.size,[e.className]:e.className});return a?t.createElement("docs-card",{class:d},t.createElement("div",{className:(0,r.Z)(s,"docs-card")},u)):n?t.createElement("docs-card",{class:d},t.createElement("a",{className:(0,r.Z)(s,"docs-card"),href:e.href,target:"_blank"},u)):t.createElement("docs-card",{class:d},t.createElement(o.default,{to:e.href,className:(0,r.Z)(s,"docs-card")},u))}},88694:(e,a,n)=>{n.d(a,{Z:()=>l});var t=n(87462),r=n(86010),o=n(67294);const i="docsButton_1mtQ",s="docsButtonRound_ZJZD";function l(e){let{href:a,round:n=!1,...l}=e;return l.className=(0,r.Z)({[l.className]:Boolean(l.className),[i]:!0,"docs-button":!0,[s]:n,"docs-button--round":n}),a?o.createElement("a",(0,t.Z)({href:a,className:"docsButton"},l),l.children):o.createElement("button",(0,t.Z)({className:"docsButton"},l),l.children)}},69051:(e,a,n)=>{n.r(a),n.d(a,{contentTitle:()=>d,default:()=>h,frontMatter:()=>u,metadata:()=>p,toc:()=>m});var t=n(87462),r=(n(67294),n(3905)),o=n(47758),i=n(88694),s=n(26396),l=n(58215),c=n(19055);const u={sidebar_label:"In App Review"},d="In App Review",p={unversionedId:"native/in-app-review",id:"version-v5/native/in-app-review",isDocsHomePage:!1,title:"In App Review",description:"This plugin does use the iOS class SKStore\u200bReview\u200bController to open the inApp review popup available since iOS 10.3",source:"@site/versioned_docs/version-v5/native/in-app-review.md",sourceDirName:"native",slug:"/native/in-app-review",permalink:"/cn/docs/v5/native/in-app-review",editUrl:"https://crowdin.com/project/ionic-docs",tags:[],version:"v5",frontMatter:{sidebar_label:"In App Review"},sidebar:"version-v5/native",previous:{title:"In App Purchase 2",permalink:"/cn/docs/v5/native/in-app-purchase-2"},next:{title:"Insomnia",permalink:"/cn/docs/v5/native/insomnia"}},m=[{value:"Supported Platforms",id:"supported-platforms",children:[],level:2},{value:"Usage",id:"usage",children:[{value:"React",id:"react",children:[],level:3},{value:"Angular",id:"angular",children:[],level:3}],level:2}],v={toc:m};function h(e){let{components:a,...n}=e;return(0,r.kt)("wrapper",(0,t.Z)({},v,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"in-app-review"},"In App Review"),(0,r.kt)("p",null,"This plugin does use the iOS class SKStore\u200bReview\u200bController to open the inApp review popup available since iOS 10.3"),(0,r.kt)("p",null,"This functionality only works on iOS devices"),(0,r.kt)("p",null,(0,r.kt)("a",{href:"https://github.com/omaxlive/com.omarben.inappreview",target:"_blank",rel:"noopener",className:"git-link"},(0,r.kt)("svg",{viewBox:"0 0 512 512"},(0,r.kt)("path",{d:"M416 160c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 23.7 12.9 44.3 32 55.4v8.6c0 19.9-7.8 33.7-25.3 44.9-15.4 9.8-38.1 17.1-67.5 21.5-14 2.1-25.7 6-35.2 10.7V151.4c19.1-11.1 32-31.7 32-55.4 0-35.3-28.7-64-64-64S96 60.7 96 96c0 23.7 12.9 44.3 32 55.4v209.2c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-16.6-6.3-31.7-16.7-43.1 1.9-4.9 9.7-16.3 29.4-19.3 38.8-5.8 68.9-15.9 92.3-30.8 36-22.8 55-57 55-98.8v-8.6c19.1-11.1 32-31.7 32-55.4zM160 56c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm0 400c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm192-256c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"}))," ","https://github.com/omaxlive/com.omarben.inappreview")),(0,r.kt)("h2",null,"Stuck on a Cordova issue?"),(0,r.kt)(o.Z,{className:"cordova-ee-card",header:"Don't waste precious time on plugin issues.",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Native",mdxType:"DocsCard"},(0,r.kt)("div",null,(0,r.kt)("img",{src:"/docs/icons/native-cordova-bot.png",class:"cordova-ee-img"}),(0,r.kt)("p",null,"If you're building a serious project, you can't afford to spend hours troubleshooting. Ionic\u2019s experts offer premium advisory services for both community plugins and premier plugins."),(0,r.kt)(i.Z,{className:"native-ee-detail",mdxType:"DocsButton"},"Contact Us Today!"))),(0,r.kt)("h2",{id:"installation"},(0,r.kt)("a",{href:"#installation"},"Installation")),(0,r.kt)(s.Z,{groupId:"runtime",defaultValue:"Capacitor",values:[{value:"Capacitor",label:"Capacitor"},{value:"Cordova",label:"Cordova"},{value:"Enterprise",label:"Enterprise"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Capacitor",mdxType:"TabItem"},(0,r.kt)(c.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ npm install com.omarben.inappreview ","\n","$ npm install @awesome-cordova-plugins/in-app-review ","\n","$ ionic cap sync")),(0,r.kt)(l.Z,{value:"Cordova",mdxType:"TabItem"},(0,r.kt)(c.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ ionic cordova plugin add com.omarben.inappreview ","\n","$ npm install @awesome-cordova-plugins/in-app-review ","\n")),(0,r.kt)(l.Z,{value:"Enterprise",mdxType:"TabItem"},(0,r.kt)("blockquote",null,"Ionic Enterprise comes with fully supported and maintained plugins from the Ionic Team. \xa0",(0,r.kt)("a",{class:"btn",href:"https://ionic.io/docs/premier-plugins"},"Learn More")," or if you're interested in an enterprise version of this plugin ",(0,r.kt)("a",{class:"btn",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine"},"Contact Us")))),(0,r.kt)("h2",{id:"supported-platforms"},"Supported Platforms"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"iOS")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("h3",{id:"react"},"React"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/cn/docs/v5/native/community#react"},"Learn more about using Ionic Native components in React")),(0,r.kt)("h3",{id:"angular"},"Angular"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { InAppReview } from '@awesome-cordova-plugins/in-app-review/ngx';\n\n\nconstructor(private inAppReview: InAppReview) { }\n\n...\n\n\nthis.inAppReview.requestReview()\n  .then((res: any) => console.log(res))\n  .catch((error: any) => console.error(error));\n\n")))}h.isMDXComponent=!0}}]);