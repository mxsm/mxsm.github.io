"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[77800],{58215:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294);const o=function(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},26396:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(87462),o=n(67294),i=n(72389),l=n(79443);const r=function(){const e=(0,o.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var s=n(89521),c=n(86010);const d="tabItem_vU9c";function u(e){var t,n;const{lazy:a,block:i,defaultValue:l,values:u,groupId:m,className:p}=e,h=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=u??h.map((e=>{let{props:{value:t,label:n}}=e;return{value:t,label:n}})),v=(0,s.lx)(k,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===l?l:l??(null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)??(null==(n=h[0])?void 0:n.props.value);if(null!==g&&!k.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:f,setTabGroupChoices:b}=r(),[N,C]=(0,o.useState)(g),y=[],{blockElementScrollPositionUntilNextRender:E}=(0,s.o5)();if(null!=m){const e=f[m];null!=e&&e!==N&&k.some((t=>t.value===e))&&C(e)}const w=e=>{const t=e.currentTarget,n=y.indexOf(t),a=k[n].value;a!==N&&(E(t),C(a),null!=m&&b(m,a))},Z=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=y.indexOf(e.currentTarget)+1;n=y[t]||y[0];break}case"ArrowLeft":{const t=y.indexOf(e.currentTarget)-1;n=y[t]||y[y.length-1];break}}null==(t=n)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":i},p)},k.map((e=>{let{value:t,label:n}=e;return o.createElement("li",{role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,className:(0,c.Z)("tabs__item",d,{"tabs__item--active":N===t}),key:t,ref:e=>y.push(e),onKeyDown:Z,onFocus:w,onClick:w},n??t)}))),a?(0,o.cloneElement)(h.filter((e=>e.props.value===N))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},h.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function m(e){const t=(0,i.Z)();return o.createElement(u,(0,a.Z)({key:String(t)},e))}},47758:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(67294),o=n(86010),i=n(39960),l=n(44996);const r="card_7QME";const s=function(e){const t=void 0===e.href,n=void 0!==e.href&&/^http/.test(e.href),s="undefined"===e.header?null:a.createElement("header",{className:"Card-header"},e.header),c=e.hoverIcon||e.icon,d=a.createElement(a.Fragment,null,e.img&&a.createElement("img",{src:(0,l.Z)(e.img),className:"Card-image"}),a.createElement("div",{className:"Card-container"},(e.icon||c)&&a.createElement("div",{className:"Card-icon-row"},e.icon&&a.createElement("img",{src:(0,l.Z)(e.icon),className:"Card-icon Card-icon-default"}),c&&a.createElement("img",{src:(0,l.Z)(c),className:"Card-icon Card-icon-hover"})),e.ionicon&&a.createElement("ion-icon",{name:e.ionicon,className:"Card-ionicon"}),e.iconset&&a.createElement("div",{className:"Card-iconset__container"},e.iconset.split(",").map(((t,n)=>a.createElement("img",{src:(0,l.Z)(t),className:"Card-icon "+(n===e.activeIndex?"Card-icon-active":""),"data-index":n,key:n})))),e.header&&s,a.createElement("div",{className:"Card-content"},e.children))),u=(0,o.Z)({"Card-with-image":void 0!==e.img,"Card-without-image":void 0===e.img,"Card-size-lg":"lg"===e.size,[e.className]:e.className});return t?a.createElement("docs-card",{class:u},a.createElement("div",{className:(0,o.Z)(r,"docs-card")},d)):n?a.createElement("docs-card",{class:u},a.createElement("a",{className:(0,o.Z)(r,"docs-card"),href:e.href,target:"_blank"},d)):a.createElement("docs-card",{class:u},a.createElement(i.default,{to:e.href,className:(0,o.Z)(r,"docs-card")},d))}},88694:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(87462),o=n(86010),i=n(67294);const l="docsButton_1mtQ",r="docsButtonRound_ZJZD";function s(e){let{href:t,round:n=!1,...s}=e;return s.className=(0,o.Z)({[s.className]:Boolean(s.className),[l]:!0,"docs-button":!0,[r]:n,"docs-button--round":n}),t?i.createElement("a",(0,a.Z)({href:t,className:"docsButton"},s),s.children):i.createElement("button",(0,a.Z)({className:"docsButton"},s),s.children)}},80262:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>u,default:()=>k,frontMatter:()=>d,metadata:()=>m,toc:()=>p});var a=n(87462),o=(n(67294),n(3905)),i=n(47758),l=n(88694),r=n(26396),s=n(58215),c=n(19055);const d={title:"Deeplinks"},u=void 0,m={unversionedId:"native/deeplinks",id:"native/deeplinks",isDocsHomePage:!1,title:"Deeplinks",description:"Deeplinks | Ionic Deeplink Plugin on iOS and Android Apps",source:"@site/docs/native/deeplinks.md",sourceDirName:"native",slug:"/native/deeplinks",permalink:"/docs/native/deeplinks",editUrl:"https://github.com/ionic-team/ionic-native/edit/master/src/@awesome-cordova-plugins/plugins/deeplinks/index.ts",tags:[],version:"current",frontMatter:{title:"Deeplinks"},sidebar:"native",previous:{title:"CustomUISDK",permalink:"/docs/native/custom-uisdk"},next:{title:"Device Accounts",permalink:"/docs/native/device-accounts"}},p=[{value:"Supported Platforms",id:"supported-platforms",children:[],level:2},{value:"Usage",id:"usage",children:[{value:"React",id:"react",children:[],level:3},{value:"Angular",id:"angular",children:[],level:3}],level:2}],h={toc:p};function k(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("head",null,(0,o.kt)("title",null,"Deeplinks | Ionic Deeplink Plugin on iOS and Android Apps"),(0,o.kt)("meta",{name:"description",content:"This plugin handles deeplinks on iOS and Android for both custom URL scheme links and Universal App Links. Read Ionic's deeplinks docs\xa0for integration info."})),(0,o.kt)("p",null,"This plugin handles deeplinks on iOS and Android for both custom URL scheme links\nand Universal App Links."),(0,o.kt)("p",null,"Please read the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ionic-team/ionic-plugin-deeplinks"},"ionic plugin deeplinks docs")," for iOS and Android integration.\nYou must add ",(0,o.kt)("inlineCode",{parentName:"p"},"universal-links")," to your ",(0,o.kt)("inlineCode",{parentName:"p"},"config.xml")," and set up Apple App Site Association (AASA) for iOS and Asset Links for Android."),(0,o.kt)("p",null,(0,o.kt)("a",{href:"https://github.com/ionic-team/ionic-plugin-deeplinks",target:"_blank",rel:"noopener",className:"git-link"},(0,o.kt)("svg",{viewBox:"0 0 512 512"},(0,o.kt)("path",{d:"M416 160c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 23.7 12.9 44.3 32 55.4v8.6c0 19.9-7.8 33.7-25.3 44.9-15.4 9.8-38.1 17.1-67.5 21.5-14 2.1-25.7 6-35.2 10.7V151.4c19.1-11.1 32-31.7 32-55.4 0-35.3-28.7-64-64-64S96 60.7 96 96c0 23.7 12.9 44.3 32 55.4v209.2c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-16.6-6.3-31.7-16.7-43.1 1.9-4.9 9.7-16.3 29.4-19.3 38.8-5.8 68.9-15.9 92.3-30.8 36-22.8 55-57 55-98.8v-8.6c19.1-11.1 32-31.7 32-55.4zM160 56c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm0 400c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm192-256c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"}))," https://github.com/ionic-team/ionic-plugin-deeplinks")),(0,o.kt)("h2",null,"Stuck on a Cordova issue?"),(0,o.kt)(i.Z,{className:"cordova-ee-card",header:"Don't waste precious time on plugin issues.",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Native",mdxType:"DocsCard"},(0,o.kt)("div",null,(0,o.kt)("img",{src:"/docs/icons/native-cordova-bot.png",class:"cordova-ee-img"}),(0,o.kt)("p",null,"If you're building a serious project, you can't afford to spend hours troubleshooting. Ionic\u2019s experts offer premium advisory services for both community plugins and premier plugins."),(0,o.kt)(l.Z,{className:"native-ee-detail",mdxType:"DocsButton"},"Contact Us Today!"))),(0,o.kt)("h2",{id:"installation"},(0,o.kt)("a",{href:"#installation"},"Installation")),(0,o.kt)(r.Z,{defaultValue:"Capacitor",groupId:"runtime",values:[{value:"Capacitor",label:"Capacitor"},{value:"Cordova",label:"Cordova"},{value:"Enterprise",label:"Enterprise"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"Capacitor",mdxType:"TabItem"},(0,o.kt)(c.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ npm install ionic-plugin-deeplinks ","\n","$ npm install @awesome-cordova-plugins/deeplinks ","\n","$ ionic cap sync")),(0,o.kt)(s.Z,{value:"Cordova",mdxType:"TabItem"},(0,o.kt)(c.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ ionic cordova plugin add ionic-plugin-deeplinks ","\n","$ npm install @awesome-cordova-plugins/deeplinks ","\n")),(0,o.kt)(s.Z,{value:"Enterprise",mdxType:"TabItem"},(0,o.kt)("blockquote",null,"Ionic Enterprise comes with fully supported and maintained plugins from the Ionic Team. \xa0",(0,o.kt)("a",{class:"btn",href:"https://ionic.io/docs/premier-plugins"},"Learn More")," or if you're interested in an enterprise version of this plugin ",(0,o.kt)("a",{class:"btn",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine"},"Contact Us")))),(0,o.kt)("h2",{id:"supported-platforms"},"Supported Platforms"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Android"),(0,o.kt)("li",{parentName:"ul"},"Browser"),(0,o.kt)("li",{parentName:"ul"},"iOS")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("h3",{id:"react"},"React"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/native/community#react"},"Learn more about using Ionic Native components in React")),(0,o.kt)("h3",{id:"angular"},"Angular"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Deeplinks } from '@awesome-cordova-plugins/deeplinks/ngx';\n\nconstructor(private deeplinks: Deeplinks) { }\n\nthis.deeplinks.route({\n     '/about-us': AboutPage,\n     '/universal-links-test': AboutPage,\n     '/products/:productId': ProductPage\n   }).subscribe(match => {\n     // match.$route - the route we matched, which is the matched entry from the arguments to route()\n     // match.$args - the args passed in the link\n     // match.$link - the full link data\n     console.log('Successfully matched route', match);\n   }, nomatch => {\n     // nomatch.$link - the full link data\n     console.error('Got a deeplink that didn\\'t match', nomatch);\n   });\n")),(0,o.kt)("p",null,"Alternatively, if you're using Ionic, there's a convenience method that takes a reference to a ",(0,o.kt)("inlineCode",{parentName:"p"},"NavController")," and handles\nthe actual navigation for you:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"this.deeplinks.routeWithNavController(this.navController, {\n  '/about-us': AboutPage,\n  '/products/:productId': ProductPage\n}).subscribe(match => {\n    // match.$route - the route we matched, which is the matched entry from the arguments to route()\n    // match.$args - the args passed in the link\n    // match.$link - the full link data\n    console.log('Successfully matched route', match);\n  }, nomatch => {\n    // nomatch.$link - the full link data\n    console.error('Got a deeplink that didn\\'t match', nomatch);\n  });\n")),(0,o.kt)("p",null,"See the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ionic-team/ionic2-deeplinks-demo/blob/master/app/app.ts"},"Ionic Deeplinks Demo")," for an example of how to\nretrieve the ",(0,o.kt)("inlineCode",{parentName:"p"},"NavController")," reference at runtime."))}k.isMDXComponent=!0}}]);