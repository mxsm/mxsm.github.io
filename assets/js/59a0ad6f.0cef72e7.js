"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[53677],{58215:(e,a,n)=>{n.d(a,{Z:()=>r});var t=n(67294);const r=function(e){let{children:a,hidden:n,className:r}=e;return t.createElement("div",{role:"tabpanel",hidden:n,className:r},a)}},26396:(e,a,n)=>{n.d(a,{Z:()=>m});var t=n(87462),r=n(67294),o=n(72389),c=n(79443);const s=function(){const e=(0,r.useContext)(c.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var l=n(89521),i=n(86010);const d="tabItem_vU9c";function u(e){var a,n;const{lazy:t,block:o,defaultValue:c,values:u,groupId:m,className:p}=e,v=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=u??v.map((e=>{let{props:{value:a,label:n}}=e;return{value:a,label:n}})),g=(0,l.lx)(h,((e,a)=>e.value===a.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===c?c:c??(null==(a=v.find((e=>e.props.default)))?void 0:a.props.value)??(null==(n=v[0])?void 0:n.props.value);if(null!==b&&!h.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:f,setTabGroupChoices:k}=s(),[N,y]=(0,r.useState)(b),C=[],{blockElementScrollPositionUntilNextRender:E}=(0,l.o5)();if(null!=m){const e=f[m];null!=e&&e!==N&&h.some((a=>a.value===e))&&y(e)}const w=e=>{const a=e.currentTarget,n=C.indexOf(a),t=h[n].value;t!==N&&(E(a),y(t),null!=m&&k(m,t))},B=e=>{var a;let n=null;switch(e.key){case"ArrowRight":{const a=C.indexOf(e.currentTarget)+1;n=C[a]||C[0];break}case"ArrowLeft":{const a=C.indexOf(e.currentTarget)-1;n=C[a]||C[C.length-1];break}}null==(a=n)||a.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":o},p)},h.map((e=>{let{value:a,label:n}=e;return r.createElement("li",{role:"tab",tabIndex:N===a?0:-1,"aria-selected":N===a,className:(0,i.Z)("tabs__item",d,{"tabs__item--active":N===a}),key:a,ref:e=>C.push(e),onKeyDown:B,onFocus:w,onClick:w},n??a)}))),t?(0,r.cloneElement)(v.filter((e=>e.props.value===N))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},v.map(((e,a)=>(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==N})))))}function m(e){const a=(0,o.Z)();return r.createElement(u,(0,t.Z)({key:String(a)},e))}},47758:(e,a,n)=>{n.d(a,{Z:()=>l});var t=n(67294),r=n(86010),o=n(39960),c=n(44996);const s="card_7QME";const l=function(e){const a=void 0===e.href,n=void 0!==e.href&&/^http/.test(e.href),l="undefined"===e.header?null:t.createElement("header",{className:"Card-header"},e.header),i=e.hoverIcon||e.icon,d=t.createElement(t.Fragment,null,e.img&&t.createElement("img",{src:(0,c.Z)(e.img),className:"Card-image"}),t.createElement("div",{className:"Card-container"},(e.icon||i)&&t.createElement("div",{className:"Card-icon-row"},e.icon&&t.createElement("img",{src:(0,c.Z)(e.icon),className:"Card-icon Card-icon-default"}),i&&t.createElement("img",{src:(0,c.Z)(i),className:"Card-icon Card-icon-hover"})),e.ionicon&&t.createElement("ion-icon",{name:e.ionicon,className:"Card-ionicon"}),e.iconset&&t.createElement("div",{className:"Card-iconset__container"},e.iconset.split(",").map(((a,n)=>t.createElement("img",{src:(0,c.Z)(a),className:"Card-icon "+(n===e.activeIndex?"Card-icon-active":""),"data-index":n,key:n})))),e.header&&l,t.createElement("div",{className:"Card-content"},e.children))),u=(0,r.Z)({"Card-with-image":void 0!==e.img,"Card-without-image":void 0===e.img,"Card-size-lg":"lg"===e.size,[e.className]:e.className});return a?t.createElement("docs-card",{class:u},t.createElement("div",{className:(0,r.Z)(s,"docs-card")},d)):n?t.createElement("docs-card",{class:u},t.createElement("a",{className:(0,r.Z)(s,"docs-card"),href:e.href,target:"_blank"},d)):t.createElement("docs-card",{class:u},t.createElement(o.default,{to:e.href,className:(0,r.Z)(s,"docs-card")},d))}},88694:(e,a,n)=>{n.d(a,{Z:()=>l});var t=n(87462),r=n(86010),o=n(67294);const c="docsButton_1mtQ",s="docsButtonRound_ZJZD";function l(e){let{href:a,round:n=!1,...l}=e;return l.className=(0,r.Z)({[l.className]:Boolean(l.className),[c]:!0,"docs-button":!0,[s]:n,"docs-button--round":n}),a?o.createElement("a",(0,t.Z)({href:a,className:"docsButton"},l),l.children):o.createElement("button",(0,t.Z)({className:"docsButton"},l),l.children)}},22855:(e,a,n)=>{n.r(a),n.d(a,{contentTitle:()=>u,default:()=>h,frontMatter:()=>d,metadata:()=>m,toc:()=>p});var t=n(87462),r=(n(67294),n(3905)),o=n(47758),c=n(88694),s=n(26396),l=n(58215),i=n(19055);const d={title:"Barcode Scanner | Install Camera Barcode Scanner Plugin",description:"Ionic's Barcode Scanner Plugin opens a camera view and automatically scans a barcode, returning the data back to you. Read more for installation and usage.",sidebar_label:"Barcode Scanner"},u="Barcode Scanner",m={unversionedId:"native/barcode-scanner",id:"version-v5/native/barcode-scanner",isDocsHomePage:!1,title:"Barcode Scanner | Install Camera Barcode Scanner Plugin",description:"Ionic's Barcode Scanner Plugin opens a camera view and automatically scans a barcode, returning the data back to you. Read more for installation and usage.",source:"@site/versioned_docs/version-v5/native/barcode-scanner.md",sourceDirName:"native",slug:"/native/barcode-scanner",permalink:"/docs/v5/native/barcode-scanner",editUrl:"https://github.com/ionic-team/ionic-native/edit/master/src/@awesome-cordova-plugins/plugins/barcode-scanner/index.ts",tags:[],version:"v5",frontMatter:{title:"Barcode Scanner | Install Camera Barcode Scanner Plugin",description:"Ionic's Barcode Scanner Plugin opens a camera view and automatically scans a barcode, returning the data back to you. Read more for installation and usage.",sidebar_label:"Barcode Scanner"},sidebar:"version-v5/native",previous:{title:"Badge",permalink:"/docs/v5/native/badge"},next:{title:"Battery Status",permalink:"/docs/v5/native/battery-status"}},p=[{value:"Supported Platforms",id:"supported-platforms",children:[],level:2},{value:"Usage",id:"usage",children:[{value:"React",id:"react",children:[],level:3},{value:"Angular",id:"angular",children:[],level:3}],level:2}],v={toc:p};function h(e){let{components:a,...n}=e;return(0,r.kt)("wrapper",(0,t.Z)({},v,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"barcode-scanner"},"Barcode Scanner"),(0,r.kt)("p",null,"The Barcode Scanner Plugin opens a camera view and automatically scans a barcode, returning the data back to you."),(0,r.kt)("p",null,"Requires Cordova plugin: ",(0,r.kt)("inlineCode",{parentName:"p"},"phonegap-plugin-barcodescanner"),". For more info, please see the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/phonegap/phonegap-plugin-barcodescanner"},"BarcodeScanner plugin docs"),"."),(0,r.kt)("p",null,(0,r.kt)("a",{href:"https://github.com/phonegap/phonegap-plugin-barcodescanner",target:"_blank",rel:"noopener",className:"git-link"},(0,r.kt)("svg",{viewBox:"0 0 512 512"},(0,r.kt)("path",{d:"M416 160c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 23.7 12.9 44.3 32 55.4v8.6c0 19.9-7.8 33.7-25.3 44.9-15.4 9.8-38.1 17.1-67.5 21.5-14 2.1-25.7 6-35.2 10.7V151.4c19.1-11.1 32-31.7 32-55.4 0-35.3-28.7-64-64-64S96 60.7 96 96c0 23.7 12.9 44.3 32 55.4v209.2c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-16.6-6.3-31.7-16.7-43.1 1.9-4.9 9.7-16.3 29.4-19.3 38.8-5.8 68.9-15.9 92.3-30.8 36-22.8 55-57 55-98.8v-8.6c19.1-11.1 32-31.7 32-55.4zM160 56c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm0 400c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm192-256c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"}))," ","https://github.com/phonegap/phonegap-plugin-barcodescanner")),(0,r.kt)("h2",null,"Stuck on a Cordova issue?"),(0,r.kt)(o.Z,{className:"cordova-ee-card",header:"Don't waste precious time on plugin issues.",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Native",mdxType:"DocsCard"},(0,r.kt)("div",null,(0,r.kt)("img",{src:"/docs/icons/native-cordova-bot.png",class:"cordova-ee-img"}),(0,r.kt)("p",null,"If you're building a serious project, you can't afford to spend hours troubleshooting. Ionic\u2019s experts offer premium advisory services for both community plugins and premier plugins."),(0,r.kt)(c.Z,{className:"native-ee-detail",mdxType:"DocsButton"},"Contact Us Today!"))),(0,r.kt)("h2",{id:"installation"},(0,r.kt)("a",{href:"#installation"},"Installation")),(0,r.kt)(s.Z,{groupId:"runtime",defaultValue:"Capacitor",values:[{value:"Capacitor",label:"Capacitor"},{value:"Cordova",label:"Cordova"},{value:"Enterprise",label:"Enterprise"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Capacitor",mdxType:"TabItem"},(0,r.kt)(i.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ npm install phonegap-plugin-barcodescanner ","\n","$ npm install @awesome-cordova-plugins/barcode-scanner ","\n","$ ionic cap sync")),(0,r.kt)(l.Z,{value:"Cordova",mdxType:"TabItem"},(0,r.kt)(i.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ ionic cordova plugin add phonegap-plugin-barcodescanner ","\n","$ npm install @awesome-cordova-plugins/barcode-scanner ","\n")),(0,r.kt)(l.Z,{value:"Enterprise",mdxType:"TabItem"},(0,r.kt)("blockquote",null,"Ionic Enterprise comes with fully supported and maintained plugins from the Ionic Team. \xa0",(0,r.kt)("a",{class:"btn",href:"https://ionic.io/docs/premier-plugins"},"Learn More")," or if you're interested in an enterprise version of this plugin ",(0,r.kt)("a",{class:"btn",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine"},"Contact Us")))),(0,r.kt)("h2",{id:"supported-platforms"},"Supported Platforms"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Android"),(0,r.kt)("li",{parentName:"ul"},"BlackBerry 10"),(0,r.kt)("li",{parentName:"ul"},"Browser"),(0,r.kt)("li",{parentName:"ul"},"iOS"),(0,r.kt)("li",{parentName:"ul"},"Windows")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("h3",{id:"react"},"React"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/v5/native/community#react"},"Learn more about using Ionic Native components in React")),(0,r.kt)("h3",{id:"angular"},"Angular"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';\n\nconstructor(private barcodeScanner: BarcodeScanner) { }\n\n...\n\n\nthis.barcodeScanner.scan().then(barcodeData => {\n console.log('Barcode data', barcodeData);\n}).catch(err => {\n    console.log('Error', err);\n});\n")))}h.isMDXComponent=!0}}]);