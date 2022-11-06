"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[230],{58215:(e,o,t)=>{t.d(o,{Z:()=>n});var a=t(67294);const n=function(e){let{children:o,hidden:t,className:n}=e;return a.createElement("div",{role:"tabpanel",hidden:t,className:n},o)}},26396:(e,o,t)=>{t.d(o,{Z:()=>m});var a=t(87462),n=t(67294),i=t(72389),s=t(79443);const r=function(){const e=(0,n.useContext)(s.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var l=t(89521),c=t(86010);const d="tabItem_vU9c";function u(e){var o,t;const{lazy:a,block:i,defaultValue:s,values:u,groupId:m,className:p}=e,g=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=u??g.map((e=>{let{props:{value:o,label:t}}=e;return{value:o,label:t}})),h=(0,l.lx)(v,((e,o)=>e.value===o.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===s?s:s??(null==(o=g.find((e=>e.props.default)))?void 0:o.props.value)??(null==(t=g[0])?void 0:t.props.value);if(null!==f&&!v.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:k}=r(),[y,E]=(0,n.useState)(f),N=[],{blockElementScrollPositionUntilNextRender:C}=(0,l.o5)();if(null!=m){const e=b[m];null!=e&&e!==y&&v.some((o=>o.value===e))&&E(e)}const w=e=>{const o=e.currentTarget,t=N.indexOf(o),a=v[t].value;a!==y&&(C(o),E(a),null!=m&&k(m,a))},T=e=>{var o;let t=null;switch(e.key){case"ArrowRight":{const o=N.indexOf(e.currentTarget)+1;t=N[o]||N[0];break}case"ArrowLeft":{const o=N.indexOf(e.currentTarget)-1;t=N[o]||N[N.length-1];break}}null==(o=t)||o.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":i},p)},v.map((e=>{let{value:o,label:t}=e;return n.createElement("li",{role:"tab",tabIndex:y===o?0:-1,"aria-selected":y===o,className:(0,c.Z)("tabs__item",d,{"tabs__item--active":y===o}),key:o,ref:e=>N.push(e),onKeyDown:T,onFocus:w,onClick:w},t??o)}))),a?(0,n.cloneElement)(g.filter((e=>e.props.value===y))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},g.map(((e,o)=>(0,n.cloneElement)(e,{key:o,hidden:e.props.value!==y})))))}function m(e){const o=(0,i.Z)();return n.createElement(u,(0,a.Z)({key:String(o)},e))}},47758:(e,o,t)=>{t.d(o,{Z:()=>l});var a=t(67294),n=t(86010),i=t(39960),s=t(44996);const r="card_7QME";const l=function(e){const o=void 0===e.href,t=void 0!==e.href&&/^http/.test(e.href),l="undefined"===e.header?null:a.createElement("header",{className:"Card-header"},e.header),c=e.hoverIcon||e.icon,d=a.createElement(a.Fragment,null,e.img&&a.createElement("img",{src:(0,s.Z)(e.img),className:"Card-image"}),a.createElement("div",{className:"Card-container"},(e.icon||c)&&a.createElement("div",{className:"Card-icon-row"},e.icon&&a.createElement("img",{src:(0,s.Z)(e.icon),className:"Card-icon Card-icon-default"}),c&&a.createElement("img",{src:(0,s.Z)(c),className:"Card-icon Card-icon-hover"})),e.ionicon&&a.createElement("ion-icon",{name:e.ionicon,className:"Card-ionicon"}),e.iconset&&a.createElement("div",{className:"Card-iconset__container"},e.iconset.split(",").map(((o,t)=>a.createElement("img",{src:(0,s.Z)(o),className:"Card-icon "+(t===e.activeIndex?"Card-icon-active":""),"data-index":t,key:t})))),e.header&&l,a.createElement("div",{className:"Card-content"},e.children))),u=(0,n.Z)({"Card-with-image":void 0!==e.img,"Card-without-image":void 0===e.img,"Card-size-lg":"lg"===e.size,[e.className]:e.className});return o?a.createElement("docs-card",{class:u},a.createElement("div",{className:(0,n.Z)(r,"docs-card")},d)):t?a.createElement("docs-card",{class:u},a.createElement("a",{className:(0,n.Z)(r,"docs-card"),href:e.href,target:"_blank"},d)):a.createElement("docs-card",{class:u},a.createElement(i.default,{to:e.href,className:(0,n.Z)(r,"docs-card")},d))}},88694:(e,o,t)=>{t.d(o,{Z:()=>l});var a=t(87462),n=t(86010),i=t(67294);const s="docsButton_1mtQ",r="docsButtonRound_ZJZD";function l(e){let{href:o,round:t=!1,...l}=e;return l.className=(0,n.Z)({[l.className]:Boolean(l.className),[s]:!0,"docs-button":!0,[r]:t,"docs-button--round":t}),o?i.createElement("a",(0,a.Z)({href:o,className:"docsButton"},l),l.children):i.createElement("button",(0,a.Z)({className:"docsButton"},l),l.children)}},15671:(e,o,t)=>{t.r(o),t.d(o,{contentTitle:()=>u,default:()=>v,frontMatter:()=>d,metadata:()=>m,toc:()=>p});var a=t(87462),n=(t(67294),t(3905)),i=t(47758),s=t(88694),r=t(26396),l=t(58215),c=t(19055);const d={title:"Gao De Location"},u=void 0,m={unversionedId:"native/gao-de-location",id:"native/gao-de-location",isDocsHomePage:!1,title:"Gao De Location",description:"Because the original GPS positioning uses Google Browser positioning, and Google withdraws from China, resulting in GPS Android positioning can not be positioned.",source:"@site/docs/native/gao-de-location.md",sourceDirName:"native",slug:"/native/gao-de-location",permalink:"/docs/native/gao-de-location",editUrl:"https://github.com/ionic-team/ionic-native/edit/master/src/@awesome-cordova-plugins/plugins/gao-de-location/index.ts",tags:[],version:"current",frontMatter:{title:"Gao De Location"},sidebar:"native",previous:{title:"FTP",permalink:"/docs/native/ftp"},next:{title:"Ge Tui Sdk Plugin",permalink:"/docs/native/ge-tui-sdk-plugin"}},p=[{value:"Supported Platforms",id:"supported-platforms",children:[],level:2},{value:"Usage",id:"usage",children:[{value:"React",id:"react",children:[],level:3},{value:"Angular",id:"angular",children:[],level:3}],level:2}],g={toc:p};function v(e){let{components:o,...t}=e;return(0,n.kt)("wrapper",(0,a.Z)({},g,t,{components:o,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Because the original GPS positioning uses Google Browser positioning, and Google withdraws from China, resulting in GPS Android positioning can not be positioned.\nGaode location can directly return address informationGaode location can directly return address information"),(0,n.kt)("p",null,(0,n.kt)("a",{href:"https://github.com/waliu/cordova-plugin-gaodelocation-chenyu.git",target:"_blank",rel:"noopener",className:"git-link"},(0,n.kt)("svg",{viewBox:"0 0 512 512"},(0,n.kt)("path",{d:"M416 160c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 23.7 12.9 44.3 32 55.4v8.6c0 19.9-7.8 33.7-25.3 44.9-15.4 9.8-38.1 17.1-67.5 21.5-14 2.1-25.7 6-35.2 10.7V151.4c19.1-11.1 32-31.7 32-55.4 0-35.3-28.7-64-64-64S96 60.7 96 96c0 23.7 12.9 44.3 32 55.4v209.2c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-16.6-6.3-31.7-16.7-43.1 1.9-4.9 9.7-16.3 29.4-19.3 38.8-5.8 68.9-15.9 92.3-30.8 36-22.8 55-57 55-98.8v-8.6c19.1-11.1 32-31.7 32-55.4zM160 56c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm0 400c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm192-256c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"}))," https://github.com/waliu/cordova-plugin-gaodelocation-chenyu.git")),(0,n.kt)("h2",null,"Stuck on a Cordova issue?"),(0,n.kt)(i.Z,{className:"cordova-ee-card",header:"Don't waste precious time on plugin issues.",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Native",mdxType:"DocsCard"},(0,n.kt)("div",null,(0,n.kt)("img",{src:"/docs/icons/native-cordova-bot.png",class:"cordova-ee-img"}),(0,n.kt)("p",null,"If you're building a serious project, you can't afford to spend hours troubleshooting. Ionic\u2019s experts offer premium advisory services for both community plugins and premier plugins."),(0,n.kt)(s.Z,{className:"native-ee-detail",mdxType:"DocsButton"},"Contact Us Today!"))),(0,n.kt)("h2",{id:"installation"},(0,n.kt)("a",{href:"#installation"},"Installation")),(0,n.kt)(r.Z,{defaultValue:"Capacitor",groupId:"runtime",values:[{value:"Capacitor",label:"Capacitor"},{value:"Cordova",label:"Cordova"},{value:"Enterprise",label:"Enterprise"}],mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Capacitor",mdxType:"TabItem"},(0,n.kt)(c.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ npm install cordova-plugin-gaodelocation-chenyu ","\n","$ npm install @awesome-cordova-plugins/gao-de-location ","\n","$ ionic cap sync")),(0,n.kt)(l.Z,{value:"Cordova",mdxType:"TabItem"},(0,n.kt)(c.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ ionic cordova plugin add cordova-plugin-gaodelocation-chenyu ","\n","$ npm install @awesome-cordova-plugins/gao-de-location ","\n")),(0,n.kt)(l.Z,{value:"Enterprise",mdxType:"TabItem"},(0,n.kt)("blockquote",null,"Ionic Enterprise comes with fully supported and maintained plugins from the Ionic Team. \xa0",(0,n.kt)("a",{class:"btn",href:"https://ionic.io/docs/premier-plugins"},"Learn More")," or if you're interested in an enterprise version of this plugin ",(0,n.kt)("a",{class:"btn",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine"},"Contact Us")))),(0,n.kt)("h2",{id:"supported-platforms"},"Supported Platforms"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Android"),(0,n.kt)("li",{parentName:"ul"},"iOS")),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("h3",{id:"react"},"React"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/native/community#react"},"Learn more about using Ionic Native components in React")),(0,n.kt)("h3",{id:"angular"},"Angular"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"import { GaoDeLocation } from '@awesome-cordova-plugins/gao-de-location/ngx';\n\n\nconstructor(private gaoDeLocation: GaoDeLocation) { }\n\n\nconst positionOptions: PositionOptions = {\n    androidOption: {\n     locationMode: LocationModeEnum.Hight_Accuracy,\n     gpsFirst: false,\n      HttpTimeOut: 30000,\n      interval: 2000,\n      needAddress: true,\n      onceLocation: false,\n      onceLocationLatest: false,\n      locationProtocol: LocationProtocolEnum.HTTP,\n      sensorEnable: false,\n      wifiScan: true,\n      locationCacheEnable: true\n    }, iosOption: {\n      desiredAccuracy: DesiredAccuracyEnum.kCLLocationAccuracyBest,\n      pausesLocationUpdatesAutomatically: 'YES',\n      allowsBackgroundLocationUpdates: 'NO',\n      locationTimeout: 10,\n      reGeocodeTimeout: 5,\n    }\n  };\nconst positionRes: PositionRes = await this.gaoDeLocation.getCurrentPosition(positionOptions).catch((e: any) => {\n    console.log(e);\n  }) || null;\nconsole.log(JSON.stringify(positionRes));\n\n\nthis.gaoDeLocation.startSerialLocation(positionOptions).subscribe((positionRes: PositionRes) => {\n   console.log(JSON.stringify(positionRes));\n});\n\nconst positionRes: any = this.gaoDeLocation.stopSerialLocation().catch((e) => {\n    console.log(e);\n  }) || null;\nconsole.log(JSON.stringify(positionRes));\n\n")))}v.isMDXComponent=!0}}]);