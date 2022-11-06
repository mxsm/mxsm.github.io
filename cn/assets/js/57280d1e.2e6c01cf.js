"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[96795],{58215:(e,t,r)=>{r.d(t,{Z:()=>n});var a=r(67294);const n=function(e){let{children:t,hidden:r,className:n}=e;return a.createElement("div",{role:"tabpanel",hidden:r,className:n},t)}},26396:(e,t,r)=>{r.d(t,{Z:()=>m});var a=r(87462),n=r(67294),o=r(72389),s=r(79443);const l=function(){const e=(0,n.useContext)(s.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var c=r(89521),i=r(86010);const u="tabItem_vU9c";function d(e){var t,r;const{lazy:a,block:o,defaultValue:s,values:d,groupId:m,className:v}=e,p=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=d??p.map((e=>{let{props:{value:t,label:r}}=e;return{value:t,label:r}})),b=(0,c.lx)(h,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===s?s:s??(null==(t=p.find((e=>e.props.default)))?void 0:t.props.value)??(null==(r=p[0])?void 0:r.props.value);if(null!==g&&!h.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:f}=l(),[w,N]=(0,n.useState)(g),C=[],{blockElementScrollPositionUntilNextRender:E}=(0,c.o5)();if(null!=m){const e=k[m];null!=e&&e!==w&&h.some((t=>t.value===e))&&N(e)}const y=e=>{const t=e.currentTarget,r=C.indexOf(t),a=h[r].value;a!==w&&(E(t),N(a),null!=m&&f(m,a))},Z=e=>{var t;let r=null;switch(e.key){case"ArrowRight":{const t=C.indexOf(e.currentTarget)+1;r=C[t]||C[0];break}case"ArrowLeft":{const t=C.indexOf(e.currentTarget)-1;r=C[t]||C[C.length-1];break}}null==(t=r)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":o},v)},h.map((e=>{let{value:t,label:r}=e;return n.createElement("li",{role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,className:(0,i.Z)("tabs__item",u,{"tabs__item--active":w===t}),key:t,ref:e=>C.push(e),onKeyDown:Z,onFocus:y,onClick:y},r??t)}))),a?(0,n.cloneElement)(p.filter((e=>e.props.value===w))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},p.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function m(e){const t=(0,o.Z)();return n.createElement(d,(0,a.Z)({key:String(t)},e))}},47758:(e,t,r)=>{r.d(t,{Z:()=>c});var a=r(67294),n=r(86010),o=r(39960),s=r(44996);const l="card_7QME";const c=function(e){const t=void 0===e.href,r=void 0!==e.href&&/^http/.test(e.href),c="undefined"===e.header?null:a.createElement("header",{className:"Card-header"},e.header),i=e.hoverIcon||e.icon,u=a.createElement(a.Fragment,null,e.img&&a.createElement("img",{src:(0,s.Z)(e.img),className:"Card-image"}),a.createElement("div",{className:"Card-container"},(e.icon||i)&&a.createElement("div",{className:"Card-icon-row"},e.icon&&a.createElement("img",{src:(0,s.Z)(e.icon),className:"Card-icon Card-icon-default"}),i&&a.createElement("img",{src:(0,s.Z)(i),className:"Card-icon Card-icon-hover"})),e.ionicon&&a.createElement("ion-icon",{name:e.ionicon,className:"Card-ionicon"}),e.iconset&&a.createElement("div",{className:"Card-iconset__container"},e.iconset.split(",").map(((t,r)=>a.createElement("img",{src:(0,s.Z)(t),className:"Card-icon "+(r===e.activeIndex?"Card-icon-active":""),"data-index":r,key:r})))),e.header&&c,a.createElement("div",{className:"Card-content"},e.children))),d=(0,n.Z)({"Card-with-image":void 0!==e.img,"Card-without-image":void 0===e.img,"Card-size-lg":"lg"===e.size,[e.className]:e.className});return t?a.createElement("docs-card",{class:d},a.createElement("div",{className:(0,n.Z)(l,"docs-card")},u)):r?a.createElement("docs-card",{class:d},a.createElement("a",{className:(0,n.Z)(l,"docs-card"),href:e.href,target:"_blank"},u)):a.createElement("docs-card",{class:d},a.createElement(o.default,{to:e.href,className:(0,n.Z)(l,"docs-card")},u))}},88694:(e,t,r)=>{r.d(t,{Z:()=>c});var a=r(87462),n=r(86010),o=r(67294);const s="docsButton_1mtQ",l="docsButtonRound_ZJZD";function c(e){let{href:t,round:r=!1,...c}=e;return c.className=(0,n.Z)({[c.className]:Boolean(c.className),[s]:!0,"docs-button":!0,[l]:r,"docs-button--round":r}),t?o.createElement("a",(0,a.Z)({href:t,className:"docsButton"},c),c.children):o.createElement("button",(0,a.Z)({className:"docsButton"},c),c.children)}},31885:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>d,default:()=>h,frontMatter:()=>u,metadata:()=>m,toc:()=>v});var a=r(87462),n=(r(67294),r(3905)),o=r(47758),s=r(88694),l=r(26396),c=r(58215),i=r(19055);const u={title:"WebSocket Server"},d=void 0,m={unversionedId:"native/web-socket-server",id:"native/web-socket-server",isDocsHomePage:!1,title:"WebSocket Server",description:"Run a WebSocket Server - Cordova Plugin for Ionic Framework",source:"@site/docs/native/web-socket-server.md",sourceDirName:"native",slug:"/native/web-socket-server",permalink:"/cn/docs/native/web-socket-server",editUrl:"https://crowdin.com/project/ionic-docs",tags:[],version:"current",frontMatter:{title:"WebSocket Server"},sidebar:"native",previous:{title:"Web Server",permalink:"/cn/docs/native/web-server"},next:{title:"Webengage",permalink:"/cn/docs/native/webengage"}},v=[{value:"Supported Platforms",id:"supported-platforms",children:[],level:2},{value:"Usage",id:"usage",children:[{value:"React",id:"react",children:[],level:3},{value:"Angular",id:"angular",children:[],level:3}],level:2}],p={toc:v};function h(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("head",null,(0,n.kt)("title",null,"Run a WebSocket Server - Cordova Plugin for Ionic Framework"),(0,n.kt)("meta",{name:"description",content:"Ionic Framework's WebSocket Server Cordova plugin allows you to run a single, lightweight, barebone WebSocket Server. Read to learn more about installation."})),(0,n.kt)("p",null,"This plugin allows you to run a single, lightweight, barebone WebSocket Server."),(0,n.kt)("p",null,(0,n.kt)("a",{href:"https://github.com/becvert/cordova-plugin-websocket-server",target:"_blank",rel:"noopener",className:"git-link"},(0,n.kt)("svg",{viewBox:"0 0 512 512"},(0,n.kt)("path",{d:"M416 160c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 23.7 12.9 44.3 32 55.4v8.6c0 19.9-7.8 33.7-25.3 44.9-15.4 9.8-38.1 17.1-67.5 21.5-14 2.1-25.7 6-35.2 10.7V151.4c19.1-11.1 32-31.7 32-55.4 0-35.3-28.7-64-64-64S96 60.7 96 96c0 23.7 12.9 44.3 32 55.4v209.2c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-16.6-6.3-31.7-16.7-43.1 1.9-4.9 9.7-16.3 29.4-19.3 38.8-5.8 68.9-15.9 92.3-30.8 36-22.8 55-57 55-98.8v-8.6c19.1-11.1 32-31.7 32-55.4zM160 56c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm0 400c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm192-256c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"}))," https://github.com/becvert/cordova-plugin-websocket-server")),(0,n.kt)("h2",null,"Stuck on a Cordova issue?"),(0,n.kt)(o.Z,{className:"cordova-ee-card",header:"Don't waste precious time on plugin issues.",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Native",mdxType:"DocsCard"},(0,n.kt)("div",null,(0,n.kt)("img",{src:"/docs/icons/native-cordova-bot.png",class:"cordova-ee-img"}),(0,n.kt)("p",null,"If you're building a serious project, you can't afford to spend hours troubleshooting. Ionic\u2019s experts offer premium advisory services for both community plugins and premier plugins."),(0,n.kt)(s.Z,{className:"native-ee-detail",mdxType:"DocsButton"},"Contact Us Today!"))),(0,n.kt)("h2",{id:"installation"},(0,n.kt)("a",{href:"#installation"},"Installation")),(0,n.kt)(l.Z,{defaultValue:"Capacitor",groupId:"runtime",values:[{value:"Capacitor",label:"Capacitor"},{value:"Cordova",label:"Cordova"},{value:"Enterprise",label:"Enterprise"}],mdxType:"Tabs"},(0,n.kt)(c.Z,{value:"Capacitor",mdxType:"TabItem"},(0,n.kt)(i.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ npm install cordova-plugin-websocket-server ","\n","$ npm install @awesome-cordova-plugins/web-socket-server ","\n","$ ionic cap sync")),(0,n.kt)(c.Z,{value:"Cordova",mdxType:"TabItem"},(0,n.kt)(i.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ ionic cordova plugin add cordova-plugin-websocket-server ","\n","$ npm install @awesome-cordova-plugins/web-socket-server ","\n")),(0,n.kt)(c.Z,{value:"Enterprise",mdxType:"TabItem"},(0,n.kt)("blockquote",null,"Ionic Enterprise comes with fully supported and maintained plugins from the Ionic Team. \xa0",(0,n.kt)("a",{class:"btn",href:"https://ionic.io/docs/premier-plugins"},"Learn More")," or if you're interested in an enterprise version of this plugin ",(0,n.kt)("a",{class:"btn",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine"},"Contact Us")))),(0,n.kt)("h2",{id:"supported-platforms"},"Supported Platforms"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Android"),(0,n.kt)("li",{parentName:"ul"},"iOS")),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("h3",{id:"react"},"React"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/cn/docs/native/community#react"},"Learn more about using Ionic Native components in React")),(0,n.kt)("h3",{id:"angular"},"Angular"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"import { WebSocketServer } from '@awesome-cordova-plugins/web-socket-server';\n\nconstructor(private wsserver: WebSocketServer) { }\n\n...\n\n// start websocket server\nthis.wsserver.start(8888, {}).subscribe({\n  next: server => console.log(`Listening on ${server.addr}:${server.port}`),\n  error: error => console.log(`Unexpected error`, error);\n});\n\n// watch for any messages\nthis.wsserver.watchMessage().subscribe(result => {\n  console.log(`Received message ${result.msg} from ${result.conn.uuid}`);\n});\n\n// send message to connection with specified uuid\nthis.wsserver.send({ uuid: '8e7c4f48-de68-4b6f-8fca-1067a353968d' }, 'Hello World');\n\n// stop websocket server\nthis.wsserver.stop().then(server => {\n  console.log(`Stop listening on ${server.addr}:${server.port}`);\n});\n\n")))}h.isMDXComponent=!0}}]);