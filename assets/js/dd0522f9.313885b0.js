"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[87888],{58215:(e,a,t)=>{t.d(a,{Z:()=>n});var o=t(67294);const n=function(e){let{children:a,hidden:t,className:n}=e;return o.createElement("div",{role:"tabpanel",hidden:t,className:n},a)}},26396:(e,a,t)=>{t.d(a,{Z:()=>m});var o=t(87462),n=t(67294),s=t(72389),r=t(79443);const l=function(){const e=(0,n.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var i=t(89521),c=t(86010);const d="tabItem_vU9c";function u(e){var a,t;const{lazy:o,block:s,defaultValue:r,values:u,groupId:m,className:p}=e,v=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=u??v.map((e=>{let{props:{value:a,label:t}}=e;return{value:a,label:t}})),b=(0,i.lx)(h,((e,a)=>e.value===a.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===r?r:r??(null==(a=v.find((e=>e.props.default)))?void 0:a.props.value)??(null==(t=v[0])?void 0:t.props.value);if(null!==f&&!h.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:k}=l(),[E,C]=(0,n.useState)(f),N=[],{blockElementScrollPositionUntilNextRender:w}=(0,i.o5)();if(null!=m){const e=g[m];null!=e&&e!==E&&h.some((a=>a.value===e))&&C(e)}const y=e=>{const a=e.currentTarget,t=N.indexOf(a),o=h[t].value;o!==E&&(w(a),C(o),null!=m&&k(m,o))},Z=e=>{var a;let t=null;switch(e.key){case"ArrowRight":{const a=N.indexOf(e.currentTarget)+1;t=N[a]||N[0];break}case"ArrowLeft":{const a=N.indexOf(e.currentTarget)-1;t=N[a]||N[N.length-1];break}}null==(a=t)||a.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":s},p)},h.map((e=>{let{value:a,label:t}=e;return n.createElement("li",{role:"tab",tabIndex:E===a?0:-1,"aria-selected":E===a,className:(0,c.Z)("tabs__item",d,{"tabs__item--active":E===a}),key:a,ref:e=>N.push(e),onKeyDown:Z,onFocus:y,onClick:y},t??a)}))),o?(0,n.cloneElement)(v.filter((e=>e.props.value===E))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},v.map(((e,a)=>(0,n.cloneElement)(e,{key:a,hidden:e.props.value!==E})))))}function m(e){const a=(0,s.Z)();return n.createElement(u,(0,o.Z)({key:String(a)},e))}},47758:(e,a,t)=>{t.d(a,{Z:()=>i});var o=t(67294),n=t(86010),s=t(39960),r=t(44996);const l="card_7QME";const i=function(e){const a=void 0===e.href,t=void 0!==e.href&&/^http/.test(e.href),i="undefined"===e.header?null:o.createElement("header",{className:"Card-header"},e.header),c=e.hoverIcon||e.icon,d=o.createElement(o.Fragment,null,e.img&&o.createElement("img",{src:(0,r.Z)(e.img),className:"Card-image"}),o.createElement("div",{className:"Card-container"},(e.icon||c)&&o.createElement("div",{className:"Card-icon-row"},e.icon&&o.createElement("img",{src:(0,r.Z)(e.icon),className:"Card-icon Card-icon-default"}),c&&o.createElement("img",{src:(0,r.Z)(c),className:"Card-icon Card-icon-hover"})),e.ionicon&&o.createElement("ion-icon",{name:e.ionicon,className:"Card-ionicon"}),e.iconset&&o.createElement("div",{className:"Card-iconset__container"},e.iconset.split(",").map(((a,t)=>o.createElement("img",{src:(0,r.Z)(a),className:"Card-icon "+(t===e.activeIndex?"Card-icon-active":""),"data-index":t,key:t})))),e.header&&i,o.createElement("div",{className:"Card-content"},e.children))),u=(0,n.Z)({"Card-with-image":void 0!==e.img,"Card-without-image":void 0===e.img,"Card-size-lg":"lg"===e.size,[e.className]:e.className});return a?o.createElement("docs-card",{class:u},o.createElement("div",{className:(0,n.Z)(l,"docs-card")},d)):t?o.createElement("docs-card",{class:u},o.createElement("a",{className:(0,n.Z)(l,"docs-card"),href:e.href,target:"_blank"},d)):o.createElement("docs-card",{class:u},o.createElement(s.default,{to:e.href,className:(0,n.Z)(l,"docs-card")},d))}},88694:(e,a,t)=>{t.d(a,{Z:()=>i});var o=t(87462),n=t(86010),s=t(67294);const r="docsButton_1mtQ",l="docsButtonRound_ZJZD";function i(e){let{href:a,round:t=!1,...i}=e;return i.className=(0,n.Z)({[i.className]:Boolean(i.className),[r]:!0,"docs-button":!0,[l]:t,"docs-button--round":t}),a?s.createElement("a",(0,o.Z)({href:a,className:"docsButton"},i),i.children):s.createElement("button",(0,o.Z)({className:"docsButton"},i),i.children)}},94246:(e,a,t)=>{t.r(a),t.d(a,{contentTitle:()=>u,default:()=>h,frontMatter:()=>d,metadata:()=>m,toc:()=>p});var o=t(87462),n=(t(67294),t(3905)),s=t(47758),r=t(88694),l=t(26396),i=t(58215),c=t(19055);const d={title:"AdMob Plus"},u=void 0,m={unversionedId:"native/admob-plus",id:"native/admob-plus",isDocsHomePage:!1,title:"AdMob Plus",description:"AdMob Plus is the successor of cordova-plugin-admob-free, which provides a cleaner API and build with modern tools.",source:"@site/docs/native/admob-plus.md",sourceDirName:"native",slug:"/native/admob-plus",permalink:"/docs/native/admob-plus",editUrl:"https://github.com/ionic-team/ionic-native/edit/master/src/@awesome-cordova-plugins/plugins/admob-plus/index.ts",tags:[],version:"current",frontMatter:{title:"AdMob Plus"},sidebar:"native",previous:{title:"Adjust",permalink:"/docs/native/adjust"},next:{title:"AdMob",permalink:"/docs/native/admob"}},p=[{value:"Supported Platforms",id:"supported-platforms",children:[],level:2}],v={toc:p};function h(e){let{components:a,...t}=e;return(0,n.kt)("wrapper",(0,o.Z)({},v,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"AdMob Plus is the successor of cordova-plugin-admob-free, which provides a cleaner API and build with modern tools."),(0,n.kt)("p",null,(0,n.kt)("a",{href:"https://github.com/admob-plus/admob-plus",target:"_blank",rel:"noopener",className:"git-link"},(0,n.kt)("svg",{viewBox:"0 0 512 512"},(0,n.kt)("path",{d:"M416 160c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 23.7 12.9 44.3 32 55.4v8.6c0 19.9-7.8 33.7-25.3 44.9-15.4 9.8-38.1 17.1-67.5 21.5-14 2.1-25.7 6-35.2 10.7V151.4c19.1-11.1 32-31.7 32-55.4 0-35.3-28.7-64-64-64S96 60.7 96 96c0 23.7 12.9 44.3 32 55.4v209.2c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-16.6-6.3-31.7-16.7-43.1 1.9-4.9 9.7-16.3 29.4-19.3 38.8-5.8 68.9-15.9 92.3-30.8 36-22.8 55-57 55-98.8v-8.6c19.1-11.1 32-31.7 32-55.4zM160 56c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm0 400c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm192-256c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"}))," https://github.com/admob-plus/admob-plus")),(0,n.kt)("h2",null,"Stuck on a Cordova issue?"),(0,n.kt)(s.Z,{className:"cordova-ee-card",header:"Don't waste precious time on plugin issues.",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Native",mdxType:"DocsCard"},(0,n.kt)("div",null,(0,n.kt)("img",{src:"/docs/icons/native-cordova-bot.png",class:"cordova-ee-img"}),(0,n.kt)("p",null,"If you're building a serious project, you can't afford to spend hours troubleshooting. Ionic\u2019s experts offer premium advisory services for both community plugins and premier plugins."),(0,n.kt)(r.Z,{className:"native-ee-detail",mdxType:"DocsButton"},"Contact Us Today!"))),(0,n.kt)("h2",{id:"installation"},(0,n.kt)("a",{href:"#installation"},"Installation")),(0,n.kt)(l.Z,{defaultValue:"Capacitor",groupId:"runtime",values:[{value:"Capacitor",label:"Capacitor"},{value:"Cordova",label:"Cordova"},{value:"Enterprise",label:"Enterprise"}],mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"Capacitor",mdxType:"TabItem"},(0,n.kt)(c.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ npm install cordova-admob-plus ","\n","$ npm install @awesome-cordova-plugins/admob-plus ","\n","$ ionic cap sync")),(0,n.kt)(i.Z,{value:"Cordova",mdxType:"TabItem"},(0,n.kt)(c.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ ionic cordova plugin add cordova-admob-plus ","\n","$ npm install @awesome-cordova-plugins/admob-plus ","\n")),(0,n.kt)(i.Z,{value:"Enterprise",mdxType:"TabItem"},(0,n.kt)("blockquote",null,"Ionic Enterprise comes with fully supported and maintained plugins from the Ionic Team. \xa0",(0,n.kt)("a",{class:"btn",href:"https://ionic.io/docs/premier-plugins"},"Learn More")," or if you're interested in an enterprise version of this plugin ",(0,n.kt)("a",{class:"btn",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine"},"Contact Us")))),(0,n.kt)("h2",{id:"supported-platforms"},"Supported Platforms"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Android"),(0,n.kt)("li",{parentName:"ul"},"iOS")))}h.isMDXComponent=!0}}]);