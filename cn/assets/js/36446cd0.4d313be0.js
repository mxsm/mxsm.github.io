"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[20764],{58215:(e,a,o)=>{o.d(a,{Z:()=>n});var t=o(67294);const n=function(e){let{children:a,hidden:o,className:n}=e;return t.createElement("div",{role:"tabpanel",hidden:o,className:n},a)}},26396:(e,a,o)=>{o.d(a,{Z:()=>m});var t=o(87462),n=o(67294),r=o(72389),l=o(79443);const s=function(){const e=(0,n.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var c=o(89521),i=o(86010);const d="tabItem_vU9c";function u(e){var a,o;const{lazy:t,block:r,defaultValue:l,values:u,groupId:m,className:p}=e,g=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=u??g.map((e=>{let{props:{value:a,label:o}}=e;return{value:a,label:o}})),h=(0,c.lx)(v,((e,a)=>e.value===a.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===l?l:l??(null==(a=g.find((e=>e.props.default)))?void 0:a.props.value)??(null==(o=g[0])?void 0:o.props.value);if(null!==b&&!v.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:f,setTabGroupChoices:y}=s(),[k,N]=(0,n.useState)(b),E=[],{blockElementScrollPositionUntilNextRender:C}=(0,c.o5)();if(null!=m){const e=f[m];null!=e&&e!==k&&v.some((a=>a.value===e))&&N(e)}const Z=e=>{const a=e.currentTarget,o=E.indexOf(a),t=v[o].value;t!==k&&(C(a),N(t),null!=m&&y(m,t))},w=e=>{var a;let o=null;switch(e.key){case"ArrowRight":{const a=E.indexOf(e.currentTarget)+1;o=E[a]||E[0];break}case"ArrowLeft":{const a=E.indexOf(e.currentTarget)-1;o=E[a]||E[E.length-1];break}}null==(a=o)||a.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},p)},v.map((e=>{let{value:a,label:o}=e;return n.createElement("li",{role:"tab",tabIndex:k===a?0:-1,"aria-selected":k===a,className:(0,i.Z)("tabs__item",d,{"tabs__item--active":k===a}),key:a,ref:e=>E.push(e),onKeyDown:w,onFocus:Z,onClick:Z},o??a)}))),t?(0,n.cloneElement)(g.filter((e=>e.props.value===k))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},g.map(((e,a)=>(0,n.cloneElement)(e,{key:a,hidden:e.props.value!==k})))))}function m(e){const a=(0,r.Z)();return n.createElement(u,(0,t.Z)({key:String(a)},e))}},47758:(e,a,o)=>{o.d(a,{Z:()=>c});var t=o(67294),n=o(86010),r=o(39960),l=o(44996);const s="card_7QME";const c=function(e){const a=void 0===e.href,o=void 0!==e.href&&/^http/.test(e.href),c="undefined"===e.header?null:t.createElement("header",{className:"Card-header"},e.header),i=e.hoverIcon||e.icon,d=t.createElement(t.Fragment,null,e.img&&t.createElement("img",{src:(0,l.Z)(e.img),className:"Card-image"}),t.createElement("div",{className:"Card-container"},(e.icon||i)&&t.createElement("div",{className:"Card-icon-row"},e.icon&&t.createElement("img",{src:(0,l.Z)(e.icon),className:"Card-icon Card-icon-default"}),i&&t.createElement("img",{src:(0,l.Z)(i),className:"Card-icon Card-icon-hover"})),e.ionicon&&t.createElement("ion-icon",{name:e.ionicon,className:"Card-ionicon"}),e.iconset&&t.createElement("div",{className:"Card-iconset__container"},e.iconset.split(",").map(((a,o)=>t.createElement("img",{src:(0,l.Z)(a),className:"Card-icon "+(o===e.activeIndex?"Card-icon-active":""),"data-index":o,key:o})))),e.header&&c,t.createElement("div",{className:"Card-content"},e.children))),u=(0,n.Z)({"Card-with-image":void 0!==e.img,"Card-without-image":void 0===e.img,"Card-size-lg":"lg"===e.size,[e.className]:e.className});return a?t.createElement("docs-card",{class:u},t.createElement("div",{className:(0,n.Z)(s,"docs-card")},d)):o?t.createElement("docs-card",{class:u},t.createElement("a",{className:(0,n.Z)(s,"docs-card"),href:e.href,target:"_blank"},d)):t.createElement("docs-card",{class:u},t.createElement(r.default,{to:e.href,className:(0,n.Z)(s,"docs-card")},d))}},88694:(e,a,o)=>{o.d(a,{Z:()=>c});var t=o(87462),n=o(86010),r=o(67294);const l="docsButton_1mtQ",s="docsButtonRound_ZJZD";function c(e){let{href:a,round:o=!1,...c}=e;return c.className=(0,n.Z)({[c.className]:Boolean(c.className),[l]:!0,"docs-button":!0,[s]:o,"docs-button--round":o}),a?r.createElement("a",(0,t.Z)({href:a,className:"docsButton"},c),c.children):r.createElement("button",(0,t.Z)({className:"docsButton"},c),c.children)}},71114:(e,a,o)=>{o.r(a),o.d(a,{contentTitle:()=>u,default:()=>v,frontMatter:()=>d,metadata:()=>m,toc:()=>p});var t=o(87462),n=(o(67294),o(3905)),r=o(47758),l=o(88694),s=o(26396),c=o(58215),i=o(19055);const d={sidebar_label:"Google Nearby"},u="Google Nearby",m={unversionedId:"native/google-nearby",id:"version-v5/native/google-nearby",isDocsHomePage:!1,title:"Google Nearby",description:"This plugin adds support for the Google Nearby Messages API.",source:"@site/versioned_docs/version-v5/native/google-nearby.md",sourceDirName:"native",slug:"/native/google-nearby",permalink:"/cn/docs/v5/native/google-nearby",editUrl:"https://crowdin.com/project/ionic-docs",tags:[],version:"v5",frontMatter:{sidebar_label:"Google Nearby"},sidebar:"version-v5/native",previous:{title:"Google Analytics",permalink:"/cn/docs/v5/native/google-analytics"},next:{title:"Google Plus",permalink:"/cn/docs/v5/native/google-plus"}},p=[{value:"Supported Platforms",id:"supported-platforms",children:[],level:2},{value:"Usage",id:"usage",children:[{value:"React",id:"react",children:[],level:3},{value:"Angular",id:"angular",children:[],level:3}],level:2}],g={toc:p};function v(e){let{components:a,...o}=e;return(0,n.kt)("wrapper",(0,t.Z)({},g,o,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"google-nearby"},"Google Nearby"),(0,n.kt)("p",null,"This plugin adds support for the Google Nearby Messages API."),(0,n.kt)("p",null,(0,n.kt)("a",{href:"https://github.com/hahahannes/cordova-plugin-google-nearby",target:"_blank",rel:"noopener",className:"git-link"},(0,n.kt)("svg",{viewBox:"0 0 512 512"},(0,n.kt)("path",{d:"M416 160c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 23.7 12.9 44.3 32 55.4v8.6c0 19.9-7.8 33.7-25.3 44.9-15.4 9.8-38.1 17.1-67.5 21.5-14 2.1-25.7 6-35.2 10.7V151.4c19.1-11.1 32-31.7 32-55.4 0-35.3-28.7-64-64-64S96 60.7 96 96c0 23.7 12.9 44.3 32 55.4v209.2c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-16.6-6.3-31.7-16.7-43.1 1.9-4.9 9.7-16.3 29.4-19.3 38.8-5.8 68.9-15.9 92.3-30.8 36-22.8 55-57 55-98.8v-8.6c19.1-11.1 32-31.7 32-55.4zM160 56c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm0 400c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm192-256c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"}))," ","https://github.com/hahahannes/cordova-plugin-google-nearby")),(0,n.kt)("h2",null,"Stuck on a Cordova issue?"),(0,n.kt)(r.Z,{className:"cordova-ee-card",header:"Don't waste precious time on plugin issues.",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Native",mdxType:"DocsCard"},(0,n.kt)("div",null,(0,n.kt)("img",{src:"/docs/icons/native-cordova-bot.png",class:"cordova-ee-img"}),(0,n.kt)("p",null,"If you're building a serious project, you can't afford to spend hours troubleshooting. Ionic\u2019s experts offer premium advisory services for both community plugins and premier plugins."),(0,n.kt)(l.Z,{className:"native-ee-detail",mdxType:"DocsButton"},"Contact Us Today!"))),(0,n.kt)("h2",{id:"installation"},(0,n.kt)("a",{href:"#installation"},"Installation")),(0,n.kt)(s.Z,{groupId:"runtime",defaultValue:"Capacitor",values:[{value:"Capacitor",label:"Capacitor"},{value:"Cordova",label:"Cordova"},{value:"Enterprise",label:"Enterprise"}],mdxType:"Tabs"},(0,n.kt)(c.Z,{value:"Capacitor",mdxType:"TabItem"},(0,n.kt)(i.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ npm install cordova-plugin-google-nearby ","\n","$ npm install @awesome-cordova-plugins/google-nearby ","\n","$ ionic cap sync")),(0,n.kt)(c.Z,{value:"Cordova",mdxType:"TabItem"},(0,n.kt)(i.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ ionic cordova plugin add cordova-plugin-google-nearby ","\n","$ npm install @awesome-cordova-plugins/google-nearby ","\n")),(0,n.kt)(c.Z,{value:"Enterprise",mdxType:"TabItem"},(0,n.kt)("blockquote",null,"Ionic Enterprise comes with fully supported and maintained plugins from the Ionic Team. \xa0",(0,n.kt)("a",{class:"btn",href:"https://ionic.io/docs/premier-plugins"},"Learn More")," or if you're interested in an enterprise version of this plugin ",(0,n.kt)("a",{class:"btn",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine"},"Contact Us")))),(0,n.kt)("h2",{id:"supported-platforms"},"Supported Platforms"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Android")),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("h3",{id:"react"},"React"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/cn/docs/v5/native/community#react"},"Learn more about using Ionic Native components in React")),(0,n.kt)("h3",{id:"angular"},"Angular"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"import { GoogleNearby } from '@awesome-cordova-plugins/google-nearby/ngx';\n\n\nconstructor(private googleNearby: GoogleNearby) { }\n\nthis.googleNearby.publish('Hello')\n  .then((res: any) => console.log(res))\n  .catch((error: any) => console.error(error));\n\nthis.googleNearby.subscribe()\n  .then((res: any) => console.log(res))\n  .catch((error: any) => console.error(error));\n")))}v.isMDXComponent=!0}}]);