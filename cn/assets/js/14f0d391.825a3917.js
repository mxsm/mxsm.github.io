"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[99362],{58215:(e,n,t)=>{t.d(n,{Z:()=>o});var a=t(67294);const o=function(e){let{children:n,hidden:t,className:o}=e;return a.createElement("div",{role:"tabpanel",hidden:t,className:o},n)}},26396:(e,n,t)=>{t.d(n,{Z:()=>m});var a=t(87462),o=t(67294),r=t(72389),i=t(79443);const s=function(){const e=(0,o.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var c=t(89521),l=t(86010);const d="tabItem_vU9c";function u(e){var n,t;const{lazy:a,block:r,defaultValue:i,values:u,groupId:m,className:p}=e,v=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=u??v.map((e=>{let{props:{value:n,label:t}}=e;return{value:n,label:t}})),g=(0,c.lx)(h,((e,n)=>e.value===n.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===i?i:i??(null==(n=v.find((e=>e.props.default)))?void 0:n.props.value)??(null==(t=v[0])?void 0:t.props.value);if(null!==f&&!h.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:b}=s(),[N,C]=(0,o.useState)(f),E=[],{blockElementScrollPositionUntilNextRender:w}=(0,c.o5)();if(null!=m){const e=k[m];null!=e&&e!==N&&h.some((n=>n.value===e))&&C(e)}const y=e=>{const n=e.currentTarget,t=E.indexOf(n),a=h[t].value;a!==N&&(w(n),C(a),null!=m&&b(m,a))},Z=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{const n=E.indexOf(e.currentTarget)+1;t=E[n]||E[0];break}case"ArrowLeft":{const n=E.indexOf(e.currentTarget)-1;t=E[n]||E[E.length-1];break}}null==(n=t)||n.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},p)},h.map((e=>{let{value:n,label:t}=e;return o.createElement("li",{role:"tab",tabIndex:N===n?0:-1,"aria-selected":N===n,className:(0,l.Z)("tabs__item",d,{"tabs__item--active":N===n}),key:n,ref:e=>E.push(e),onKeyDown:Z,onFocus:y,onClick:y},t??n)}))),a?(0,o.cloneElement)(v.filter((e=>e.props.value===N))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},v.map(((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==N})))))}function m(e){const n=(0,r.Z)();return o.createElement(u,(0,a.Z)({key:String(n)},e))}},47758:(e,n,t)=>{t.d(n,{Z:()=>c});var a=t(67294),o=t(86010),r=t(39960),i=t(44996);const s="card_7QME";const c=function(e){const n=void 0===e.href,t=void 0!==e.href&&/^http/.test(e.href),c="undefined"===e.header?null:a.createElement("header",{className:"Card-header"},e.header),l=e.hoverIcon||e.icon,d=a.createElement(a.Fragment,null,e.img&&a.createElement("img",{src:(0,i.Z)(e.img),className:"Card-image"}),a.createElement("div",{className:"Card-container"},(e.icon||l)&&a.createElement("div",{className:"Card-icon-row"},e.icon&&a.createElement("img",{src:(0,i.Z)(e.icon),className:"Card-icon Card-icon-default"}),l&&a.createElement("img",{src:(0,i.Z)(l),className:"Card-icon Card-icon-hover"})),e.ionicon&&a.createElement("ion-icon",{name:e.ionicon,className:"Card-ionicon"}),e.iconset&&a.createElement("div",{className:"Card-iconset__container"},e.iconset.split(",").map(((n,t)=>a.createElement("img",{src:(0,i.Z)(n),className:"Card-icon "+(t===e.activeIndex?"Card-icon-active":""),"data-index":t,key:t})))),e.header&&c,a.createElement("div",{className:"Card-content"},e.children))),u=(0,o.Z)({"Card-with-image":void 0!==e.img,"Card-without-image":void 0===e.img,"Card-size-lg":"lg"===e.size,[e.className]:e.className});return n?a.createElement("docs-card",{class:u},a.createElement("div",{className:(0,o.Z)(s,"docs-card")},d)):t?a.createElement("docs-card",{class:u},a.createElement("a",{className:(0,o.Z)(s,"docs-card"),href:e.href,target:"_blank"},d)):a.createElement("docs-card",{class:u},a.createElement(r.default,{to:e.href,className:(0,o.Z)(s,"docs-card")},d))}},88694:(e,n,t)=>{t.d(n,{Z:()=>c});var a=t(87462),o=t(86010),r=t(67294);const i="docsButton_1mtQ",s="docsButtonRound_ZJZD";function c(e){let{href:n,round:t=!1,...c}=e;return c.className=(0,o.Z)({[c.className]:Boolean(c.className),[i]:!0,"docs-button":!0,[s]:t,"docs-button--round":t}),n?r.createElement("a",(0,a.Z)({href:n,className:"docsButton"},c),c.children):r.createElement("button",(0,a.Z)({className:"docsButton"},c),c.children)}},42829:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>u,default:()=>h,frontMatter:()=>d,metadata:()=>m,toc:()=>p});var a=t(87462),o=(t(67294),t(3905)),r=t(47758),i=t(88694),s=t(26396),c=t(58215),l=t(19055);const d={title:"Screen Orientation"},u=void 0,m={unversionedId:"native/screen-orientation",id:"native/screen-orientation",isDocsHomePage:!1,title:"Screen Orientation",description:"Screen Orientation Plugin to Set/Lock on Android, iOS, or Windows",source:"@site/docs/native/screen-orientation.md",sourceDirName:"native",slug:"/native/screen-orientation",permalink:"/cn/docs/native/screen-orientation",editUrl:"https://crowdin.com/project/ionic-docs",tags:[],version:"current",frontMatter:{title:"Screen Orientation"},sidebar:"native",previous:{title:"Safari View Controller",permalink:"/cn/docs/native/safari-view-controller"},next:{title:"ServiceDiscovery",permalink:"/cn/docs/native/service-discovery"}},p=[{value:"Supported Platforms",id:"supported-platforms",children:[],level:2},{value:"Usage",id:"usage",children:[{value:"React",id:"react",children:[],level:3},{value:"Angular",id:"angular",children:[],level:3}],level:2}],v={toc:p};function h(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},v,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("head",null,(0,o.kt)("title",null,"Screen Orientation Plugin to Set/Lock on Android, iOS, or Windows"),(0,o.kt)("meta",{name:"description",content:"Cordova Screen Orientation plugin sets/locks the screen in a common way. Read more on how to change screen orientation on Android, iOS, or Windows apps."})),(0,o.kt)("p",null,"Cordova plugin to set/lock the screen orientation in a common way."),(0,o.kt)("p",null,"Requires Cordova plugin: ",(0,o.kt)("inlineCode",{parentName:"p"},"cordova-plugin-screen-orientation"),". For more info, please see the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/cordova-plugin-screen-orientation"},"Screen Orientation plugin docs"),"."),(0,o.kt)("p",null,(0,o.kt)("a",{href:"https://github.com/apache/cordova-plugin-screen-orientation",target:"_blank",rel:"noopener",className:"git-link"},(0,o.kt)("svg",{viewBox:"0 0 512 512"},(0,o.kt)("path",{d:"M416 160c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 23.7 12.9 44.3 32 55.4v8.6c0 19.9-7.8 33.7-25.3 44.9-15.4 9.8-38.1 17.1-67.5 21.5-14 2.1-25.7 6-35.2 10.7V151.4c19.1-11.1 32-31.7 32-55.4 0-35.3-28.7-64-64-64S96 60.7 96 96c0 23.7 12.9 44.3 32 55.4v209.2c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-16.6-6.3-31.7-16.7-43.1 1.9-4.9 9.7-16.3 29.4-19.3 38.8-5.8 68.9-15.9 92.3-30.8 36-22.8 55-57 55-98.8v-8.6c19.1-11.1 32-31.7 32-55.4zM160 56c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm0 400c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm192-256c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"}))," https://github.com/apache/cordova-plugin-screen-orientation")),(0,o.kt)("h2",null,"Stuck on a Cordova issue?"),(0,o.kt)(r.Z,{className:"cordova-ee-card",header:"Don't waste precious time on plugin issues.",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Native",mdxType:"DocsCard"},(0,o.kt)("div",null,(0,o.kt)("img",{src:"/docs/icons/native-cordova-bot.png",class:"cordova-ee-img"}),(0,o.kt)("p",null,"If you're building a serious project, you can't afford to spend hours troubleshooting. Ionic\u2019s experts offer premium advisory services for both community plugins and premier plugins."),(0,o.kt)(i.Z,{className:"native-ee-detail",mdxType:"DocsButton"},"Contact Us Today!"))),(0,o.kt)("h2",{id:"installation"},(0,o.kt)("a",{href:"#installation"},"Installation")),(0,o.kt)(s.Z,{defaultValue:"Capacitor",groupId:"runtime",values:[{value:"Capacitor",label:"Capacitor"},{value:"Cordova",label:"Cordova"},{value:"Enterprise",label:"Enterprise"}],mdxType:"Tabs"},(0,o.kt)(c.Z,{value:"Capacitor",mdxType:"TabItem"},(0,o.kt)(l.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ npm install cordova-plugin-screen-orientation ","\n","$ npm install @awesome-cordova-plugins/screen-orientation ","\n","$ ionic cap sync")),(0,o.kt)(c.Z,{value:"Cordova",mdxType:"TabItem"},(0,o.kt)(l.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ ionic cordova plugin add cordova-plugin-screen-orientation ","\n","$ npm install @awesome-cordova-plugins/screen-orientation ","\n")),(0,o.kt)(c.Z,{value:"Enterprise",mdxType:"TabItem"},(0,o.kt)("blockquote",null,"Ionic Enterprise comes with fully supported and maintained plugins from the Ionic Team. \xa0",(0,o.kt)("a",{class:"btn",href:"https://ionic.io/docs/premier-plugins"},"Learn More")," or if you're interested in an enterprise version of this plugin ",(0,o.kt)("a",{class:"btn",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine"},"Contact Us")))),(0,o.kt)("h2",{id:"supported-platforms"},"Supported Platforms"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Android"),(0,o.kt)("li",{parentName:"ul"},"iOS"),(0,o.kt)("li",{parentName:"ul"},"Windows")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("h3",{id:"react"},"React"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/cn/docs/native/community#react"},"Learn more about using Ionic Native components in React")),(0,o.kt)("h3",{id:"angular"},"Angular"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { ScreenOrientation } from '@awesome-cordova-plugins/screen-orientation/ngx';\n\nconstructor(private screenOrientation: ScreenOrientation) { }\n\n...\n\n\n// get current\nconsole.log(this.screenOrientation.type); // logs the current orientation, example: 'landscape'\n\n// set to landscape\nthis.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);\n\n// allow user rotate\nthis.screenOrientation.unlock();\n\n// detect orientation changes\nthis.screenOrientation.onChange().subscribe(\n   () => {\n       console.log(\"Orientation Changed\");\n   }\n);\n\n")))}h.isMDXComponent=!0}}]);