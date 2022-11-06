"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[39995],{58215:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294);const o=function(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",hidden:a,className:o},t)}},26396:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(87462),o=a(67294),s=a(72389),r=a(79443);const i=function(){const e=(0,o.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var l=a(89521),c=a(86010);const u="tabItem_vU9c";function d(e){var t,a;const{lazy:n,block:s,defaultValue:r,values:d,groupId:m,className:p}=e,h=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=d??h.map((e=>{let{props:{value:t,label:a}}=e;return{value:t,label:a}})),f=(0,l.lx)(v,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===r?r:r??(null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)??(null==(a=h[0])?void 0:a.props.value);if(null!==g&&!v.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:y}=i(),[b,E]=(0,o.useState)(g),N=[],{blockElementScrollPositionUntilNextRender:C}=(0,l.o5)();if(null!=m){const e=k[m];null!=e&&e!==b&&v.some((t=>t.value===e))&&E(e)}const T=e=>{const t=e.currentTarget,a=N.indexOf(t),n=v[a].value;n!==b&&(C(t),E(n),null!=m&&y(m,n))},w=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{const t=N.indexOf(e.currentTarget)+1;a=N[t]||N[0];break}case"ArrowLeft":{const t=N.indexOf(e.currentTarget)-1;a=N[t]||N[N.length-1];break}}null==(t=a)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":s},p)},v.map((e=>{let{value:t,label:a}=e;return o.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,c.Z)("tabs__item",u,{"tabs__item--active":b===t}),key:t,ref:e=>N.push(e),onKeyDown:w,onFocus:T,onClick:T},a??t)}))),n?(0,o.cloneElement)(h.filter((e=>e.props.value===b))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},h.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==b})))))}function m(e){const t=(0,s.Z)();return o.createElement(d,(0,n.Z)({key:String(t)},e))}},47758:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),o=a(86010),s=a(39960),r=a(44996);const i="card_7QME";const l=function(e){const t=void 0===e.href,a=void 0!==e.href&&/^http/.test(e.href),l="undefined"===e.header?null:n.createElement("header",{className:"Card-header"},e.header),c=e.hoverIcon||e.icon,u=n.createElement(n.Fragment,null,e.img&&n.createElement("img",{src:(0,r.Z)(e.img),className:"Card-image"}),n.createElement("div",{className:"Card-container"},(e.icon||c)&&n.createElement("div",{className:"Card-icon-row"},e.icon&&n.createElement("img",{src:(0,r.Z)(e.icon),className:"Card-icon Card-icon-default"}),c&&n.createElement("img",{src:(0,r.Z)(c),className:"Card-icon Card-icon-hover"})),e.ionicon&&n.createElement("ion-icon",{name:e.ionicon,className:"Card-ionicon"}),e.iconset&&n.createElement("div",{className:"Card-iconset__container"},e.iconset.split(",").map(((t,a)=>n.createElement("img",{src:(0,r.Z)(t),className:"Card-icon "+(a===e.activeIndex?"Card-icon-active":""),"data-index":a,key:a})))),e.header&&l,n.createElement("div",{className:"Card-content"},e.children))),d=(0,o.Z)({"Card-with-image":void 0!==e.img,"Card-without-image":void 0===e.img,"Card-size-lg":"lg"===e.size,[e.className]:e.className});return t?n.createElement("docs-card",{class:d},n.createElement("div",{className:(0,o.Z)(i,"docs-card")},u)):a?n.createElement("docs-card",{class:d},n.createElement("a",{className:(0,o.Z)(i,"docs-card"),href:e.href,target:"_blank"},u)):n.createElement("docs-card",{class:d},n.createElement(s.default,{to:e.href,className:(0,o.Z)(i,"docs-card")},u))}},88694:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(87462),o=a(86010),s=a(67294);const r="docsButton_1mtQ",i="docsButtonRound_ZJZD";function l(e){let{href:t,round:a=!1,...l}=e;return l.className=(0,o.Z)({[l.className]:Boolean(l.className),[r]:!0,"docs-button":!0,[i]:a,"docs-button--round":a}),t?s.createElement("a",(0,n.Z)({href:t,className:"docsButton"},l),l.children):s.createElement("button",(0,n.Z)({className:"docsButton"},l),l.children)}},42254:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>d,default:()=>v,frontMatter:()=>u,metadata:()=>m,toc:()=>p});var n=a(87462),o=(a(67294),a(3905)),s=a(47758),r=a(88694),i=a(26396),l=a(58215),c=a(19055);const u={title:"Spotify Auth"},d=void 0,m={unversionedId:"native/spotify-auth",id:"native/spotify-auth",isDocsHomePage:!1,title:"Spotify Auth",description:"Cordova plugin for authenticating with Spotify",source:"@site/docs/native/spotify-auth.md",sourceDirName:"native",slug:"/native/spotify-auth",permalink:"/docs/native/spotify-auth",editUrl:"https://github.com/ionic-team/ionic-native/edit/master/src/@awesome-cordova-plugins/plugins/spotify-auth/index.ts",tags:[],version:"current",frontMatter:{title:"Spotify Auth"},sidebar:"native",previous:{title:"Splash Screen",permalink:"/docs/native/splash-screen"},next:{title:"Sqlite Db Copy",permalink:"/docs/native/sqlite-db-copy"}},p=[{value:"Supported Platforms",id:"supported-platforms",children:[],level:2},{value:"Usage",id:"usage",children:[{value:"React",id:"react",children:[],level:3},{value:"Angular",id:"angular",children:[],level:3}],level:2}],h={toc:p};function v(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Cordova plugin for authenticating with Spotify"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/Festify/cordova-spotify-oauth"},"https://github.com/Festify/cordova-spotify-oauth"))),(0,o.kt)("p",null,(0,o.kt)("a",{href:"https://github.com/Festify/cordova-spotify-oauth",target:"_blank",rel:"noopener",className:"git-link"},(0,o.kt)("svg",{viewBox:"0 0 512 512"},(0,o.kt)("path",{d:"M416 160c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 23.7 12.9 44.3 32 55.4v8.6c0 19.9-7.8 33.7-25.3 44.9-15.4 9.8-38.1 17.1-67.5 21.5-14 2.1-25.7 6-35.2 10.7V151.4c19.1-11.1 32-31.7 32-55.4 0-35.3-28.7-64-64-64S96 60.7 96 96c0 23.7 12.9 44.3 32 55.4v209.2c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-16.6-6.3-31.7-16.7-43.1 1.9-4.9 9.7-16.3 29.4-19.3 38.8-5.8 68.9-15.9 92.3-30.8 36-22.8 55-57 55-98.8v-8.6c19.1-11.1 32-31.7 32-55.4zM160 56c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm0 400c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm192-256c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"}))," https://github.com/Festify/cordova-spotify-oauth")),(0,o.kt)("h2",null,"Stuck on a Cordova issue?"),(0,o.kt)(s.Z,{className:"cordova-ee-card",header:"Don't waste precious time on plugin issues.",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Native",mdxType:"DocsCard"},(0,o.kt)("div",null,(0,o.kt)("img",{src:"/docs/icons/native-cordova-bot.png",class:"cordova-ee-img"}),(0,o.kt)("p",null,"If you're building a serious project, you can't afford to spend hours troubleshooting. Ionic\u2019s experts offer premium advisory services for both community plugins and premier plugins."),(0,o.kt)(r.Z,{className:"native-ee-detail",mdxType:"DocsButton"},"Contact Us Today!"))),(0,o.kt)("h2",{id:"installation"},(0,o.kt)("a",{href:"#installation"},"Installation")),(0,o.kt)(i.Z,{defaultValue:"Capacitor",groupId:"runtime",values:[{value:"Capacitor",label:"Capacitor"},{value:"Cordova",label:"Cordova"},{value:"Enterprise",label:"Enterprise"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"Capacitor",mdxType:"TabItem"},(0,o.kt)(c.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ npm install cordova-spotify-oauth ","\n","$ npm install @awesome-cordova-plugins/spotify-auth ","\n","$ ionic cap sync")),(0,o.kt)(l.Z,{value:"Cordova",mdxType:"TabItem"},(0,o.kt)(c.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ ionic cordova plugin add cordova-spotify-oauth ","\n","$ npm install @awesome-cordova-plugins/spotify-auth ","\n")),(0,o.kt)(l.Z,{value:"Enterprise",mdxType:"TabItem"},(0,o.kt)("blockquote",null,"Ionic Enterprise comes with fully supported and maintained plugins from the Ionic Team. \xa0",(0,o.kt)("a",{class:"btn",href:"https://ionic.io/docs/premier-plugins"},"Learn More")," or if you're interested in an enterprise version of this plugin ",(0,o.kt)("a",{class:"btn",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine"},"Contact Us")))),(0,o.kt)("h2",{id:"supported-platforms"},"Supported Platforms"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Android"),(0,o.kt)("li",{parentName:"ul"},"iOS")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("h3",{id:"react"},"React"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/native/community#react"},"Learn more about using Ionic Native components in React")),(0,o.kt)("h3",{id:"angular"},"Angular"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'import { SpotifyAuth } from \'@awesome-cordova-plugins/spotify-auth/ngx\';\n\n// [...]\n\nconstructor(private spotifyAuth: SpotifyAuth) { }\n\n// [...]\n\nconst config = {\n  clientId: "&lt;SPOTIFY CLIENT ID>",\n  redirectUrl: "&lt;REDIRECT URL, MUST MATCH WITH AUTH ENDPOINT AND SPOTIFY DEV CONSOLE>",\n  scopes: ["streaming"], // see Spotify Dev console for all scopes\n  tokenExchangeUrl: "&lt;URL OF TOKEN EXCHANGE HTTP ENDPOINT>",\n  tokenRefreshUrl: "&lt;URL OF TOKEN REFRESH HTTP ENDPOINT>",\n};\n\n...\n\nthis.spotifyAuth.authorize(config)\n  .then(({ accessToken, expiresAt }) => {\n    console.log(`Got an access token, its ${accessToken}!`);\n    console.log(`Its going to expire in ${expiresAt - Date.now()}ms.`);\n  });\n\n// [...]\n\nthis.spotifyAuth.forget();\n\n// [...]\n')))}v.isMDXComponent=!0}}]);