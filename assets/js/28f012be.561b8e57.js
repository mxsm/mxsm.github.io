"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[13401],{58215:(e,a,t)=>{t.d(a,{Z:()=>r});var n=t(67294);const r=function(e){let{children:a,hidden:t,className:r}=e;return n.createElement("div",{role:"tabpanel",hidden:t,className:r},a)}},26396:(e,a,t)=>{t.d(a,{Z:()=>m});var n=t(87462),r=t(67294),l=t(72389),o=t(79443);const i=function(){const e=(0,r.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var s=t(89521),c=t(86010);const d="tabItem_vU9c";function u(e){var a,t;const{lazy:n,block:l,defaultValue:o,values:u,groupId:m,className:p}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=u??f.map((e=>{let{props:{value:a,label:t}}=e;return{value:a,label:t}})),h=(0,s.lx)(v,((e,a)=>e.value===a.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===o?o:o??(null==(a=f.find((e=>e.props.default)))?void 0:a.props.value)??(null==(t=f[0])?void 0:t.props.value);if(null!==g&&!v.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:b}=i(),[w,N]=(0,r.useState)(g),T=[],{blockElementScrollPositionUntilNextRender:y}=(0,s.o5)();if(null!=m){const e=k[m];null!=e&&e!==w&&v.some((a=>a.value===e))&&N(e)}const C=e=>{const a=e.currentTarget,t=T.indexOf(a),n=v[t].value;n!==w&&(y(a),N(n),null!=m&&b(m,n))},E=e=>{var a;let t=null;switch(e.key){case"ArrowRight":{const a=T.indexOf(e.currentTarget)+1;t=T[a]||T[0];break}case"ArrowLeft":{const a=T.indexOf(e.currentTarget)-1;t=T[a]||T[T.length-1];break}}null==(a=t)||a.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":l},p)},v.map((e=>{let{value:a,label:t}=e;return r.createElement("li",{role:"tab",tabIndex:w===a?0:-1,"aria-selected":w===a,className:(0,c.Z)("tabs__item",d,{"tabs__item--active":w===a}),key:a,ref:e=>T.push(e),onKeyDown:E,onFocus:C,onClick:C},t??a)}))),n?(0,r.cloneElement)(f.filter((e=>e.props.value===w))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},f.map(((e,a)=>(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==w})))))}function m(e){const a=(0,l.Z)();return r.createElement(u,(0,n.Z)({key:String(a)},e))}},47758:(e,a,t)=>{t.d(a,{Z:()=>s});var n=t(67294),r=t(86010),l=t(39960),o=t(44996);const i="card_7QME";const s=function(e){const a=void 0===e.href,t=void 0!==e.href&&/^http/.test(e.href),s="undefined"===e.header?null:n.createElement("header",{className:"Card-header"},e.header),c=e.hoverIcon||e.icon,d=n.createElement(n.Fragment,null,e.img&&n.createElement("img",{src:(0,o.Z)(e.img),className:"Card-image"}),n.createElement("div",{className:"Card-container"},(e.icon||c)&&n.createElement("div",{className:"Card-icon-row"},e.icon&&n.createElement("img",{src:(0,o.Z)(e.icon),className:"Card-icon Card-icon-default"}),c&&n.createElement("img",{src:(0,o.Z)(c),className:"Card-icon Card-icon-hover"})),e.ionicon&&n.createElement("ion-icon",{name:e.ionicon,className:"Card-ionicon"}),e.iconset&&n.createElement("div",{className:"Card-iconset__container"},e.iconset.split(",").map(((a,t)=>n.createElement("img",{src:(0,o.Z)(a),className:"Card-icon "+(t===e.activeIndex?"Card-icon-active":""),"data-index":t,key:t})))),e.header&&s,n.createElement("div",{className:"Card-content"},e.children))),u=(0,r.Z)({"Card-with-image":void 0!==e.img,"Card-without-image":void 0===e.img,"Card-size-lg":"lg"===e.size,[e.className]:e.className});return a?n.createElement("docs-card",{class:u},n.createElement("div",{className:(0,r.Z)(i,"docs-card")},d)):t?n.createElement("docs-card",{class:u},n.createElement("a",{className:(0,r.Z)(i,"docs-card"),href:e.href,target:"_blank"},d)):n.createElement("docs-card",{class:u},n.createElement(l.default,{to:e.href,className:(0,r.Z)(i,"docs-card")},d))}},88694:(e,a,t)=>{t.d(a,{Z:()=>s});var n=t(87462),r=t(86010),l=t(67294);const o="docsButton_1mtQ",i="docsButtonRound_ZJZD";function s(e){let{href:a,round:t=!1,...s}=e;return s.className=(0,r.Z)({[s.className]:Boolean(s.className),[o]:!0,"docs-button":!0,[i]:t,"docs-button--round":t}),a?l.createElement("a",(0,n.Z)({href:a,className:"docsButton"},s),s.children):l.createElement("button",(0,n.Z)({className:"docsButton"},s),s.children)}},30282:(e,a,t)=>{t.r(a),t.d(a,{contentTitle:()=>u,default:()=>v,frontMatter:()=>d,metadata:()=>m,toc:()=>p});var n=t(87462),r=(t(67294),t(3905)),l=t(47758),o=t(88694),i=t(26396),s=t(58215),c=t(19055);const d={title:"File Transfer "},u=void 0,m={unversionedId:"native/file-transfer",id:"native/file-transfer",isDocsHomePage:!1,title:"File Transfer ",description:"File Transfer | Cordova Docs File Transfer Download Plugin",source:"@site/docs/native/file-transfer.md",sourceDirName:"native",slug:"/native/file-transfer",permalink:"/docs/native/file-transfer",editUrl:"https://github.com/ionic-team/ionic-native/edit/master/src/@awesome-cordova-plugins/plugins/file-transfer/index.ts",tags:[],version:"current",frontMatter:{title:"File Transfer "},sidebar:"native",previous:{title:"File Path",permalink:"/docs/native/file-path"},next:{title:"File",permalink:"/docs/native/file"}},p=[{value:"Supported Platforms",id:"supported-platforms",children:[],level:2},{value:"Usage",id:"usage",children:[{value:"React",id:"react",children:[],level:3},{value:"Angular",id:"angular",children:[],level:3}],level:2}],f={toc:p};function v(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},f,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("title",null,"File Transfer | Cordova Docs File Transfer Download Plugin"),(0,r.kt)("meta",{name:"description",content:"The Cordova File Transfer plug in allows you to upload and download docs files. This plugin is supported on iOS, Android, Windows, and more platforms."})),(0,r.kt)("p",null,"This plugin allows you to upload and download files."),(0,r.kt)("p",null,(0,r.kt)("a",{href:"https://github.com/apache/cordova-plugin-file-transfer",target:"_blank",rel:"noopener",className:"git-link"},(0,r.kt)("svg",{viewBox:"0 0 512 512"},(0,r.kt)("path",{d:"M416 160c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 23.7 12.9 44.3 32 55.4v8.6c0 19.9-7.8 33.7-25.3 44.9-15.4 9.8-38.1 17.1-67.5 21.5-14 2.1-25.7 6-35.2 10.7V151.4c19.1-11.1 32-31.7 32-55.4 0-35.3-28.7-64-64-64S96 60.7 96 96c0 23.7 12.9 44.3 32 55.4v209.2c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-16.6-6.3-31.7-16.7-43.1 1.9-4.9 9.7-16.3 29.4-19.3 38.8-5.8 68.9-15.9 92.3-30.8 36-22.8 55-57 55-98.8v-8.6c19.1-11.1 32-31.7 32-55.4zM160 56c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm0 400c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm192-256c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"}))," https://github.com/apache/cordova-plugin-file-transfer")),(0,r.kt)("h2",null,"Stuck on a Cordova issue?"),(0,r.kt)(l.Z,{className:"cordova-ee-card",header:"Don't waste precious time on plugin issues.",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Native",mdxType:"DocsCard"},(0,r.kt)("div",null,(0,r.kt)("img",{src:"/docs/icons/native-cordova-bot.png",class:"cordova-ee-img"}),(0,r.kt)("p",null,"If you're building a serious project, you can't afford to spend hours troubleshooting. Ionic\u2019s experts offer premium advisory services for both community plugins and premier plugins."),(0,r.kt)(o.Z,{className:"native-ee-detail",mdxType:"DocsButton"},"Contact Us Today!"))),(0,r.kt)("h2",{id:"installation"},(0,r.kt)("a",{href:"#installation"},"Installation")),(0,r.kt)(i.Z,{defaultValue:"Capacitor",groupId:"runtime",values:[{value:"Capacitor",label:"Capacitor"},{value:"Cordova",label:"Cordova"},{value:"Enterprise",label:"Enterprise"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"Capacitor",mdxType:"TabItem"},(0,r.kt)(c.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ npm install cordova-plugin-file-transfer ","\n","$ npm install @awesome-cordova-plugins/file-transfer ","\n","$ ionic cap sync")),(0,r.kt)(s.Z,{value:"Cordova",mdxType:"TabItem"},(0,r.kt)(c.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ ionic cordova plugin add cordova-plugin-file-transfer ","\n","$ npm install @awesome-cordova-plugins/file-transfer ","\n")),(0,r.kt)(s.Z,{value:"Enterprise",mdxType:"TabItem"},(0,r.kt)("blockquote",null,"Ionic Enterprise comes with fully supported and maintained plugins from the Ionic Team. \xa0",(0,r.kt)("a",{class:"btn",href:"https://ionic.io/docs/premier-plugins"},"Learn More")," or if you're interested in an enterprise version of this plugin ",(0,r.kt)("a",{class:"btn",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine"},"Contact Us")))),(0,r.kt)("h2",{id:"supported-platforms"},"Supported Platforms"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Amazon Fire OS"),(0,r.kt)("li",{parentName:"ul"},"Android"),(0,r.kt)("li",{parentName:"ul"},"Browser"),(0,r.kt)("li",{parentName:"ul"},"iOS"),(0,r.kt)("li",{parentName:"ul"},"Ubuntu"),(0,r.kt)("li",{parentName:"ul"},"Windows"),(0,r.kt)("li",{parentName:"ul"},"Windows Phone")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("h3",{id:"react"},"React"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/native/community#react"},"Learn more about using Ionic Native components in React")),(0,r.kt)("h3",{id:"angular"},"Angular"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { FileTransfer, FileUploadOptions, FileTransferObject } from '@awesome-cordova-plugins/file-transfer/ngx';\nimport { File } from '@awesome-cordova-plugins/file';\n\nconstructor(private transfer: FileTransfer, private file: File) { }\n\n...\n\nconst fileTransfer: FileTransferObject = this.transfer.create();\n\n// Upload a file:\nfileTransfer.upload(..).then(..).catch(..);\n\n// Download a file:\nfileTransfer.download(..).then(..).catch(..);\n\n// Abort active transfer:\nfileTransfer.abort();\n\n// full example\nupload() {\n  let options: FileUploadOptions = {\n     fileKey: 'file',\n     fileName: 'name.jpg',\n     headers: {}\n     .....\n  }\n\n  fileTransfer.upload('&lt;file path>', '&lt;api endpoint>', options)\n   .then((data) => {\n     // success\n   }, (err) => {\n     // error\n   })\n}\n\ndownload() {\n  const url = 'http://www.example.com/file.pdf';\n  fileTransfer.download(url, this.file.dataDirectory + 'file.pdf').then((entry) => {\n    console.log('download complete: ' + entry.toURL());\n  }, (error) => {\n    // handle error\n  });\n}\n\n")),(0,r.kt)("p",null,"To store files in a different/publicly accessible directory, please refer to the following link\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/cordova-plugin-file#where-to-store-files"},"https://github.com/apache/cordova-plugin-file#where-to-store-files")))}v.isMDXComponent=!0}}]);