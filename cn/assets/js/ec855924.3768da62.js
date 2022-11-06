"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[68612],{58215:(e,t,a)=>{a.d(t,{Z:()=>r});var o=a(67294);const r=function(e){let{children:t,hidden:a,className:r}=e;return o.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},26396:(e,t,a)=>{a.d(t,{Z:()=>m});var o=a(87462),r=a(67294),n=a(72389),i=a(79443);const s=function(){const e=(0,r.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var l=a(89521),c=a(86010);const d="tabItem_vU9c";function u(e){var t,a;const{lazy:o,block:n,defaultValue:i,values:u,groupId:m,className:p}=e,h=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=u??h.map((e=>{let{props:{value:t,label:a}}=e;return{value:t,label:a}})),g=(0,l.lx)(v,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===i?i:i??(null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)??(null==(a=h[0])?void 0:a.props.value);if(null!==f&&!v.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:k}=s(),[w,y]=(0,r.useState)(f),N=[],{blockElementScrollPositionUntilNextRender:E}=(0,l.o5)();if(null!=m){const e=b[m];null!=e&&e!==w&&v.some((t=>t.value===e))&&y(e)}const C=e=>{const t=e.currentTarget,a=N.indexOf(t),o=v[a].value;o!==w&&(E(t),y(o),null!=m&&k(m,o))},Z=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{const t=N.indexOf(e.currentTarget)+1;a=N[t]||N[0];break}case"ArrowLeft":{const t=N.indexOf(e.currentTarget)-1;a=N[t]||N[N.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":n},p)},v.map((e=>{let{value:t,label:a}=e;return r.createElement("li",{role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,className:(0,c.Z)("tabs__item",d,{"tabs__item--active":w===t}),key:t,ref:e=>N.push(e),onKeyDown:Z,onFocus:C,onClick:C},a??t)}))),o?(0,r.cloneElement)(h.filter((e=>e.props.value===w))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},h.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function m(e){const t=(0,n.Z)();return r.createElement(u,(0,o.Z)({key:String(t)},e))}},47758:(e,t,a)=>{a.d(t,{Z:()=>l});var o=a(67294),r=a(86010),n=a(39960),i=a(44996);const s="card_7QME";const l=function(e){const t=void 0===e.href,a=void 0!==e.href&&/^http/.test(e.href),l="undefined"===e.header?null:o.createElement("header",{className:"Card-header"},e.header),c=e.hoverIcon||e.icon,d=o.createElement(o.Fragment,null,e.img&&o.createElement("img",{src:(0,i.Z)(e.img),className:"Card-image"}),o.createElement("div",{className:"Card-container"},(e.icon||c)&&o.createElement("div",{className:"Card-icon-row"},e.icon&&o.createElement("img",{src:(0,i.Z)(e.icon),className:"Card-icon Card-icon-default"}),c&&o.createElement("img",{src:(0,i.Z)(c),className:"Card-icon Card-icon-hover"})),e.ionicon&&o.createElement("ion-icon",{name:e.ionicon,className:"Card-ionicon"}),e.iconset&&o.createElement("div",{className:"Card-iconset__container"},e.iconset.split(",").map(((t,a)=>o.createElement("img",{src:(0,i.Z)(t),className:"Card-icon "+(a===e.activeIndex?"Card-icon-active":""),"data-index":a,key:a})))),e.header&&l,o.createElement("div",{className:"Card-content"},e.children))),u=(0,r.Z)({"Card-with-image":void 0!==e.img,"Card-without-image":void 0===e.img,"Card-size-lg":"lg"===e.size,[e.className]:e.className});return t?o.createElement("docs-card",{class:u},o.createElement("div",{className:(0,r.Z)(s,"docs-card")},d)):a?o.createElement("docs-card",{class:u},o.createElement("a",{className:(0,r.Z)(s,"docs-card"),href:e.href,target:"_blank"},d)):o.createElement("docs-card",{class:u},o.createElement(n.default,{to:e.href,className:(0,r.Z)(s,"docs-card")},d))}},88694:(e,t,a)=>{a.d(t,{Z:()=>l});var o=a(87462),r=a(86010),n=a(67294);const i="docsButton_1mtQ",s="docsButtonRound_ZJZD";function l(e){let{href:t,round:a=!1,...l}=e;return l.className=(0,r.Z)({[l.className]:Boolean(l.className),[i]:!0,"docs-button":!0,[s]:a,"docs-button--round":a}),t?n.createElement("a",(0,o.Z)({href:t,className:"docsButton"},l),l.children):n.createElement("button",(0,o.Z)({className:"docsButton"},l),l.children)}},52241:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>u,default:()=>v,frontMatter:()=>d,metadata:()=>m,toc:()=>p});var o=a(87462),r=(a(67294),a(3905)),n=a(47758),i=a(88694),s=a(26396),l=a(58215),c=a(19055);const d={sidebar_label:"Photo Viewer"},u="Photo Viewer",m={unversionedId:"native/photo-viewer",id:"version-v5/native/photo-viewer",isDocsHomePage:!1,title:"Photo Viewer",description:"This plugin can display your image in full screen with the ability to pan, zoom, and share the image.",source:"@site/versioned_docs/version-v5/native/photo-viewer.md",sourceDirName:"native",slug:"/native/photo-viewer",permalink:"/cn/docs/v5/native/photo-viewer",editUrl:"https://crowdin.com/project/ionic-docs",tags:[],version:"v5",frontMatter:{sidebar_label:"Photo Viewer"},sidebar:"version-v5/native",previous:{title:"Photo Library",permalink:"/cn/docs/v5/native/photo-library"},next:{title:"Printer",permalink:"/cn/docs/v5/native/printer"}},p=[{value:"Supported Platforms",id:"supported-platforms",children:[],level:2},{value:"Usage",id:"usage",children:[{value:"React",id:"react",children:[],level:3},{value:"Angular",id:"angular",children:[],level:3}],level:2}],h={toc:p};function v(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,o.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"photo-viewer"},"Photo Viewer"),(0,r.kt)("p",null,"This plugin can display your image in full screen with the ability to pan, zoom, and share the image."),(0,r.kt)("p",null,(0,r.kt)("a",{href:"https://github.com/sarriaroman/photoviewer",target:"_blank",rel:"noopener",className:"git-link"},(0,r.kt)("svg",{viewBox:"0 0 512 512"},(0,r.kt)("path",{d:"M416 160c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 23.7 12.9 44.3 32 55.4v8.6c0 19.9-7.8 33.7-25.3 44.9-15.4 9.8-38.1 17.1-67.5 21.5-14 2.1-25.7 6-35.2 10.7V151.4c19.1-11.1 32-31.7 32-55.4 0-35.3-28.7-64-64-64S96 60.7 96 96c0 23.7 12.9 44.3 32 55.4v209.2c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-16.6-6.3-31.7-16.7-43.1 1.9-4.9 9.7-16.3 29.4-19.3 38.8-5.8 68.9-15.9 92.3-30.8 36-22.8 55-57 55-98.8v-8.6c19.1-11.1 32-31.7 32-55.4zM160 56c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm0 400c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm192-256c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"}))," ","https://github.com/sarriaroman/photoviewer")),(0,r.kt)("h2",null,"Stuck on a Cordova issue?"),(0,r.kt)(n.Z,{className:"cordova-ee-card",header:"Don't waste precious time on plugin issues.",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Native",mdxType:"DocsCard"},(0,r.kt)("div",null,(0,r.kt)("img",{src:"/docs/icons/native-cordova-bot.png",class:"cordova-ee-img"}),(0,r.kt)("p",null,"If you're building a serious project, you can't afford to spend hours troubleshooting. Ionic\u2019s experts offer premium advisory services for both community plugins and premier plugins."),(0,r.kt)(i.Z,{className:"native-ee-detail",mdxType:"DocsButton"},"Contact Us Today!"))),(0,r.kt)("h2",{id:"installation"},(0,r.kt)("a",{href:"#installation"},"Installation")),(0,r.kt)(s.Z,{groupId:"runtime",defaultValue:"Capacitor",values:[{value:"Capacitor",label:"Capacitor"},{value:"Cordova",label:"Cordova"},{value:"Enterprise",label:"Enterprise"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Capacitor",mdxType:"TabItem"},(0,r.kt)(c.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ npm install com-sarriaroman-photoviewer ","\n","$ npm install @awesome-cordova-plugins/photo-viewer ","\n","$ ionic cap sync")),(0,r.kt)(l.Z,{value:"Cordova",mdxType:"TabItem"},(0,r.kt)(c.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ ionic cordova plugin add com-sarriaroman-photoviewer ","\n","$ npm install @awesome-cordova-plugins/photo-viewer ","\n")),(0,r.kt)(l.Z,{value:"Enterprise",mdxType:"TabItem"},(0,r.kt)("blockquote",null,"Ionic Enterprise comes with fully supported and maintained plugins from the Ionic Team. \xa0",(0,r.kt)("a",{class:"btn",href:"https://ionic.io/docs/premier-plugins"},"Learn More")," or if you're interested in an enterprise version of this plugin ",(0,r.kt)("a",{class:"btn",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine"},"Contact Us")))),(0,r.kt)("h2",{id:"supported-platforms"},"Supported Platforms"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Android"),(0,r.kt)("li",{parentName:"ul"},"iOS")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("h3",{id:"react"},"React"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/cn/docs/v5/native/community#react"},"Learn more about using Ionic Native components in React")),(0,r.kt)("h3",{id:"angular"},"Angular"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { PhotoViewer } from '@awesome-cordova-plugins/photo-viewer/ngx';\n\nconstructor(private photoViewer: PhotoViewer) { }\n\n...\n\nthis.photoViewer.show('https://mysite.com/path/to/image.jpg');\n\nthis.photoViewer.show('https://mysite.com/path/to/image.jpg', 'My image title', {share: false});\n\nthis.photoViewer.show('https://mysecuresite.com/path/to/image.jpg', 'My image title', {share: false, headers: '{username:foo,password:bar}'});\n")))}v.isMDXComponent=!0}}]);