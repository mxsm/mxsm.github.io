"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[66815],{58215:(e,a,o)=>{o.d(a,{Z:()=>n});var t=o(67294);const n=function(e){let{children:a,hidden:o,className:n}=e;return t.createElement("div",{role:"tabpanel",hidden:o,className:n},a)}},26396:(e,a,o)=>{o.d(a,{Z:()=>m});var t=o(87462),n=o(67294),i=o(72389),l=o(79443);const r=function(){const e=(0,n.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var c=o(89521),s=o(86010);const d="tabItem_vU9c";function u(e){var a,o;const{lazy:t,block:i,defaultValue:l,values:u,groupId:m,className:p}=e,v=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=u??v.map((e=>{let{props:{value:a,label:o}}=e;return{value:a,label:o}})),h=(0,c.lx)(g,((e,a)=>e.value===a.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===l?l:l??(null==(a=v.find((e=>e.props.default)))?void 0:a.props.value)??(null==(o=v[0])?void 0:o.props.value);if(null!==f&&!g.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:k}=r(),[C,N]=(0,n.useState)(f),y=[],{blockElementScrollPositionUntilNextRender:E}=(0,c.o5)();if(null!=m){const e=b[m];null!=e&&e!==C&&g.some((a=>a.value===e))&&N(e)}const w=e=>{const a=e.currentTarget,o=y.indexOf(a),t=g[o].value;t!==C&&(E(a),N(t),null!=m&&k(m,t))},I=e=>{var a;let o=null;switch(e.key){case"ArrowRight":{const a=y.indexOf(e.currentTarget)+1;o=y[a]||y[0];break}case"ArrowLeft":{const a=y.indexOf(e.currentTarget)-1;o=y[a]||y[y.length-1];break}}null==(a=o)||a.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":i},p)},g.map((e=>{let{value:a,label:o}=e;return n.createElement("li",{role:"tab",tabIndex:C===a?0:-1,"aria-selected":C===a,className:(0,s.Z)("tabs__item",d,{"tabs__item--active":C===a}),key:a,ref:e=>y.push(e),onKeyDown:I,onFocus:w,onClick:w},o??a)}))),t?(0,n.cloneElement)(v.filter((e=>e.props.value===C))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},v.map(((e,a)=>(0,n.cloneElement)(e,{key:a,hidden:e.props.value!==C})))))}function m(e){const a=(0,i.Z)();return n.createElement(u,(0,t.Z)({key:String(a)},e))}},47758:(e,a,o)=>{o.d(a,{Z:()=>c});var t=o(67294),n=o(86010),i=o(39960),l=o(44996);const r="card_7QME";const c=function(e){const a=void 0===e.href,o=void 0!==e.href&&/^http/.test(e.href),c="undefined"===e.header?null:t.createElement("header",{className:"Card-header"},e.header),s=e.hoverIcon||e.icon,d=t.createElement(t.Fragment,null,e.img&&t.createElement("img",{src:(0,l.Z)(e.img),className:"Card-image"}),t.createElement("div",{className:"Card-container"},(e.icon||s)&&t.createElement("div",{className:"Card-icon-row"},e.icon&&t.createElement("img",{src:(0,l.Z)(e.icon),className:"Card-icon Card-icon-default"}),s&&t.createElement("img",{src:(0,l.Z)(s),className:"Card-icon Card-icon-hover"})),e.ionicon&&t.createElement("ion-icon",{name:e.ionicon,className:"Card-ionicon"}),e.iconset&&t.createElement("div",{className:"Card-iconset__container"},e.iconset.split(",").map(((a,o)=>t.createElement("img",{src:(0,l.Z)(a),className:"Card-icon "+(o===e.activeIndex?"Card-icon-active":""),"data-index":o,key:o})))),e.header&&c,t.createElement("div",{className:"Card-content"},e.children))),u=(0,n.Z)({"Card-with-image":void 0!==e.img,"Card-without-image":void 0===e.img,"Card-size-lg":"lg"===e.size,[e.className]:e.className});return a?t.createElement("docs-card",{class:u},t.createElement("div",{className:(0,n.Z)(r,"docs-card")},d)):o?t.createElement("docs-card",{class:u},t.createElement("a",{className:(0,n.Z)(r,"docs-card"),href:e.href,target:"_blank"},d)):t.createElement("docs-card",{class:u},t.createElement(i.default,{to:e.href,className:(0,n.Z)(r,"docs-card")},d))}},88694:(e,a,o)=>{o.d(a,{Z:()=>c});var t=o(87462),n=o(86010),i=o(67294);const l="docsButton_1mtQ",r="docsButtonRound_ZJZD";function c(e){let{href:a,round:o=!1,...c}=e;return c.className=(0,n.Z)({[c.className]:Boolean(c.className),[l]:!0,"docs-button":!0,[r]:o,"docs-button--round":o}),a?i.createElement("a",(0,t.Z)({href:a,className:"docsButton"},c),c.children):i.createElement("button",(0,t.Z)({className:"docsButton"},c),c.children)}},10449:(e,a,o)=>{o.r(a),o.d(a,{contentTitle:()=>u,default:()=>g,frontMatter:()=>d,metadata:()=>m,toc:()=>p});var t=o(87462),n=(o(67294),o(3905)),i=o(47758),l=o(88694),r=o(26396),c=o(58215),s=o(19055);const d={title:"Geolocation | W3C Geolocator Application API Plugin",description:"This application plugin is based on W3C Geolocation API Specification and only executes on devices that don't already provide an implementation for location.",sidebar_label:"Geolocation"},u="Geolocation",m={unversionedId:"native/geolocation",id:"version-v5/native/geolocation",isDocsHomePage:!1,title:"Geolocation | W3C Geolocator Application API Plugin",description:"This application plugin is based on W3C Geolocation API Specification and only executes on devices that don't already provide an implementation for location.",source:"@site/versioned_docs/version-v5/native/geolocation.md",sourceDirName:"native",slug:"/native/geolocation",permalink:"/cn/docs/v5/native/geolocation",editUrl:"https://crowdin.com/project/ionic-docs",tags:[],version:"v5",frontMatter:{title:"Geolocation | W3C Geolocator Application API Plugin",description:"This application plugin is based on W3C Geolocation API Specification and only executes on devices that don't already provide an implementation for location.",sidebar_label:"Geolocation"},sidebar:"version-v5/native",previous:{title:"Ge Tui Sdk Plugin",permalink:"/cn/docs/v5/native/ge-tui-sdk-plugin"},next:{title:"Globalization",permalink:"/cn/docs/v5/native/globalization"}},p=[{value:"Supported Platforms",id:"supported-platforms",children:[],level:2},{value:"Usage",id:"usage",children:[{value:"React",id:"react",children:[],level:3},{value:"Angular",id:"angular",children:[],level:3}],level:2}],v={toc:p};function g(e){let{components:a,...o}=e;return(0,n.kt)("wrapper",(0,t.Z)({},v,o,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"geolocation"},"Geolocation"),(0,n.kt)("p",null,"This plugin provides information about the device's location, such as latitude and longitude. Common sources of location information include Global Positioning System (GPS) and location inferred from network signals such as IP address, RFID, WiFi and Bluetooth MAC addresses, and GSM/CDMA cell IDs."),(0,n.kt)("p",null,"This API is based on the W3C Geolocation API Specification, and only executes on devices that don't already provide an implementation."),(0,n.kt)("p",null,"For iOS you have to add this configuration to your configuration.xml file"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},'<edit-config file="*-Info.plist" mode="merge" target="NSLocationWhenInUseUsageDescription">\n   <string>We use your location for full functionality of certain app features.</string>\n</edit-config>\n')),(0,n.kt)("p",null,(0,n.kt)("a",{href:"https://github.com/apache/cordova-plugin-geolocation",target:"_blank",rel:"noopener",className:"git-link"},(0,n.kt)("svg",{viewBox:"0 0 512 512"},(0,n.kt)("path",{d:"M416 160c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 23.7 12.9 44.3 32 55.4v8.6c0 19.9-7.8 33.7-25.3 44.9-15.4 9.8-38.1 17.1-67.5 21.5-14 2.1-25.7 6-35.2 10.7V151.4c19.1-11.1 32-31.7 32-55.4 0-35.3-28.7-64-64-64S96 60.7 96 96c0 23.7 12.9 44.3 32 55.4v209.2c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-16.6-6.3-31.7-16.7-43.1 1.9-4.9 9.7-16.3 29.4-19.3 38.8-5.8 68.9-15.9 92.3-30.8 36-22.8 55-57 55-98.8v-8.6c19.1-11.1 32-31.7 32-55.4zM160 56c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm0 400c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm192-256c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"}))," ","https://github.com/apache/cordova-plugin-geolocation")),(0,n.kt)("h2",null,"Stuck on a Cordova issue?"),(0,n.kt)(i.Z,{className:"cordova-ee-card",header:"Don't waste precious time on plugin issues.",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Native",mdxType:"DocsCard"},(0,n.kt)("div",null,(0,n.kt)("img",{src:"/docs/icons/native-cordova-bot.png",class:"cordova-ee-img"}),(0,n.kt)("p",null,"If you're building a serious project, you can't afford to spend hours troubleshooting. Ionic\u2019s experts offer premium advisory services for both community plugins and premier plugins."),(0,n.kt)(l.Z,{className:"native-ee-detail",mdxType:"DocsButton"},"Contact Us Today!"))),(0,n.kt)("h2",{id:"installation"},(0,n.kt)("a",{href:"#installation"},"Installation")),(0,n.kt)(r.Z,{groupId:"runtime",defaultValue:"Capacitor",values:[{value:"Capacitor",label:"Capacitor"},{value:"Cordova",label:"Cordova"},{value:"Enterprise",label:"Enterprise"}],mdxType:"Tabs"},(0,n.kt)(c.Z,{value:"Capacitor",mdxType:"TabItem"},(0,n.kt)(s.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ npm install cordova-plugin-geolocation ","\n","$ npm install @awesome-cordova-plugins/geolocation ","\n","$ ionic cap sync")),(0,n.kt)(c.Z,{value:"Cordova",mdxType:"TabItem"},(0,n.kt)(s.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ ionic cordova plugin add cordova-plugin-geolocation ","\n","$ npm install @awesome-cordova-plugins/geolocation ","\n")),(0,n.kt)(c.Z,{value:"Enterprise",mdxType:"TabItem"},(0,n.kt)("blockquote",null,"Ionic Enterprise comes with fully supported and maintained plugins from the Ionic Team. \xa0",(0,n.kt)("a",{class:"btn",href:"https://ionic.io/docs/premier-plugins"},"Learn More")," or if you're interested in an enterprise version of this plugin ",(0,n.kt)("a",{class:"btn",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine"},"Contact Us")))),(0,n.kt)("h2",{id:"supported-platforms"},"Supported Platforms"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Amazon Fire OS"),(0,n.kt)("li",{parentName:"ul"},"Android"),(0,n.kt)("li",{parentName:"ul"},"Browser"),(0,n.kt)("li",{parentName:"ul"},"iOS"),(0,n.kt)("li",{parentName:"ul"},"Windows")),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("h3",{id:"react"},"React"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/cn/docs/v5/native/community#react"},"Learn more about using Ionic Native components in React")),(0,n.kt)("h3",{id:"angular"},"Angular"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';\n\n...\n\nconstructor(private geolocation: Geolocation) {}\n\n...\n\nthis.geolocation.getCurrentPosition().then((resp) => {\n // resp.coords.latitude\n // resp.coords.longitude\n}).catch((error) => {\n  console.log('Error getting location', error);\n});\n\nlet watch = this.geolocation.watchPosition();\nwatch.subscribe((data) => {\n // data can be a set of coordinates, or an error (if an error occurred).\n // data.coords.latitude\n // data.coords.longitude\n});\n")))}g.isMDXComponent=!0}}]);