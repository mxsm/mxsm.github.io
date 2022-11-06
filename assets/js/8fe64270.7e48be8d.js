"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[73481],{58215:(e,n,a)=>{a.d(n,{Z:()=>o});var t=a(67294);const o=function(e){let{children:n,hidden:a,className:o}=e;return t.createElement("div",{role:"tabpanel",hidden:a,className:o},n)}},26396:(e,n,a)=>{a.d(n,{Z:()=>m});var t=a(87462),o=a(67294),r=a(72389),i=a(79443);const s=function(){const e=(0,o.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var l=a(89521),c=a(86010);const u="tabItem_vU9c";function d(e){var n,a;const{lazy:t,block:r,defaultValue:i,values:d,groupId:m,className:p}=e,v=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=d??v.map((e=>{let{props:{value:n,label:a}}=e;return{value:n,label:a}})),g=(0,l.lx)(h,((e,n)=>e.value===n.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===i?i:i??(null==(n=v.find((e=>e.props.default)))?void 0:n.props.value)??(null==(a=v[0])?void 0:a.props.value);if(null!==f&&!h.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:b}=s(),[N,E]=(0,o.useState)(f),C=[],{blockElementScrollPositionUntilNextRender:w}=(0,l.o5)();if(null!=m){const e=k[m];null!=e&&e!==N&&h.some((n=>n.value===e))&&E(e)}const y=e=>{const n=e.currentTarget,a=C.indexOf(n),t=h[a].value;t!==N&&(w(n),E(t),null!=m&&b(m,t))},I=e=>{var n;let a=null;switch(e.key){case"ArrowRight":{const n=C.indexOf(e.currentTarget)+1;a=C[n]||C[0];break}case"ArrowLeft":{const n=C.indexOf(e.currentTarget)-1;a=C[n]||C[C.length-1];break}}null==(n=a)||n.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":r},p)},h.map((e=>{let{value:n,label:a}=e;return o.createElement("li",{role:"tab",tabIndex:N===n?0:-1,"aria-selected":N===n,className:(0,c.Z)("tabs__item",u,{"tabs__item--active":N===n}),key:n,ref:e=>C.push(e),onKeyDown:I,onFocus:y,onClick:y},a??n)}))),t?(0,o.cloneElement)(v.filter((e=>e.props.value===N))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},v.map(((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==N})))))}function m(e){const n=(0,r.Z)();return o.createElement(d,(0,t.Z)({key:String(n)},e))}},47758:(e,n,a)=>{a.d(n,{Z:()=>l});var t=a(67294),o=a(86010),r=a(39960),i=a(44996);const s="card_7QME";const l=function(e){const n=void 0===e.href,a=void 0!==e.href&&/^http/.test(e.href),l="undefined"===e.header?null:t.createElement("header",{className:"Card-header"},e.header),c=e.hoverIcon||e.icon,u=t.createElement(t.Fragment,null,e.img&&t.createElement("img",{src:(0,i.Z)(e.img),className:"Card-image"}),t.createElement("div",{className:"Card-container"},(e.icon||c)&&t.createElement("div",{className:"Card-icon-row"},e.icon&&t.createElement("img",{src:(0,i.Z)(e.icon),className:"Card-icon Card-icon-default"}),c&&t.createElement("img",{src:(0,i.Z)(c),className:"Card-icon Card-icon-hover"})),e.ionicon&&t.createElement("ion-icon",{name:e.ionicon,className:"Card-ionicon"}),e.iconset&&t.createElement("div",{className:"Card-iconset__container"},e.iconset.split(",").map(((n,a)=>t.createElement("img",{src:(0,i.Z)(n),className:"Card-icon "+(a===e.activeIndex?"Card-icon-active":""),"data-index":a,key:a})))),e.header&&l,t.createElement("div",{className:"Card-content"},e.children))),d=(0,o.Z)({"Card-with-image":void 0!==e.img,"Card-without-image":void 0===e.img,"Card-size-lg":"lg"===e.size,[e.className]:e.className});return n?t.createElement("docs-card",{class:d},t.createElement("div",{className:(0,o.Z)(s,"docs-card")},u)):a?t.createElement("docs-card",{class:d},t.createElement("a",{className:(0,o.Z)(s,"docs-card"),href:e.href,target:"_blank"},u)):t.createElement("docs-card",{class:d},t.createElement(r.default,{to:e.href,className:(0,o.Z)(s,"docs-card")},u))}},88694:(e,n,a)=>{a.d(n,{Z:()=>l});var t=a(87462),o=a(86010),r=a(67294);const i="docsButton_1mtQ",s="docsButtonRound_ZJZD";function l(e){let{href:n,round:a=!1,...l}=e;return l.className=(0,o.Z)({[l.className]:Boolean(l.className),[i]:!0,"docs-button":!0,[s]:a,"docs-button--round":a}),n?r.createElement("a",(0,t.Z)({href:n,className:"docsButton"},l),l.children):r.createElement("button",(0,t.Z)({className:"docsButton"},l),l.children)}},6181:(e,n,a)=>{a.r(n),a.d(n,{contentTitle:()=>d,default:()=>h,frontMatter:()=>u,metadata:()=>m,toc:()=>p});var t=a(87462),o=(a(67294),a(3905)),r=a(47758),i=a(88694),s=a(26396),l=a(58215),c=a(19055);const u={title:"Insomnia"},d=void 0,m={unversionedId:"native/insomnia",id:"native/insomnia",isDocsHomePage:!1,title:"Insomnia",description:"Insomnia Plugin: Prevent Mobile Screen Sleep Mode | Ionic",source:"@site/docs/native/insomnia.md",sourceDirName:"native",slug:"/native/insomnia",permalink:"/docs/native/insomnia",editUrl:"https://github.com/ionic-team/ionic-native/edit/master/src/@awesome-cordova-plugins/plugins/insomnia/index.ts",tags:[],version:"current",frontMatter:{title:"Insomnia"},sidebar:"native",previous:{title:"In App Review",permalink:"/docs/native/in-app-review"},next:{title:"Instagram",permalink:"/docs/native/instagram"}},p=[{value:"Supported Platforms",id:"supported-platforms",children:[],level:2},{value:"Usage",id:"usage",children:[{value:"React",id:"react",children:[],level:3},{value:"Angular",id:"angular",children:[],level:3}],level:2}],v={toc:p};function h(e){let{components:n,...a}=e;return(0,o.kt)("wrapper",(0,t.Z)({},v,a,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("head",null,(0,o.kt)("title",null,"Insomnia Plugin: Prevent Mobile Screen Sleep Mode | Ionic"),(0,o.kt)("meta",{name:"description",content:"The insomnia plugin prevents the screen of mobile devices from falling asleep. Learn more about plugin use and installation to prevent sleep mode on Ionic apps."})),(0,o.kt)("p",null,"Prevent the screen of the mobile device from falling asleep."),(0,o.kt)("p",null,(0,o.kt)("a",{href:"https://github.com/EddyVerbruggen/Insomnia-PhoneGap-Plugin",target:"_blank",rel:"noopener",className:"git-link"},(0,o.kt)("svg",{viewBox:"0 0 512 512"},(0,o.kt)("path",{d:"M416 160c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 23.7 12.9 44.3 32 55.4v8.6c0 19.9-7.8 33.7-25.3 44.9-15.4 9.8-38.1 17.1-67.5 21.5-14 2.1-25.7 6-35.2 10.7V151.4c19.1-11.1 32-31.7 32-55.4 0-35.3-28.7-64-64-64S96 60.7 96 96c0 23.7 12.9 44.3 32 55.4v209.2c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-16.6-6.3-31.7-16.7-43.1 1.9-4.9 9.7-16.3 29.4-19.3 38.8-5.8 68.9-15.9 92.3-30.8 36-22.8 55-57 55-98.8v-8.6c19.1-11.1 32-31.7 32-55.4zM160 56c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm0 400c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm192-256c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"}))," https://github.com/EddyVerbruggen/Insomnia-PhoneGap-Plugin")),(0,o.kt)("h2",null,"Stuck on a Cordova issue?"),(0,o.kt)(r.Z,{className:"cordova-ee-card",header:"Don't waste precious time on plugin issues.",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Native",mdxType:"DocsCard"},(0,o.kt)("div",null,(0,o.kt)("img",{src:"/docs/icons/native-cordova-bot.png",class:"cordova-ee-img"}),(0,o.kt)("p",null,"If you're building a serious project, you can't afford to spend hours troubleshooting. Ionic\u2019s experts offer premium advisory services for both community plugins and premier plugins."),(0,o.kt)(i.Z,{className:"native-ee-detail",mdxType:"DocsButton"},"Contact Us Today!"))),(0,o.kt)("h2",{id:"installation"},(0,o.kt)("a",{href:"#installation"},"Installation")),(0,o.kt)(s.Z,{defaultValue:"Capacitor",groupId:"runtime",values:[{value:"Capacitor",label:"Capacitor"},{value:"Cordova",label:"Cordova"},{value:"Enterprise",label:"Enterprise"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"Capacitor",mdxType:"TabItem"},(0,o.kt)(c.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ npm install cordova-plugin-insomnia ","\n","$ npm install @awesome-cordova-plugins/insomnia ","\n","$ ionic cap sync")),(0,o.kt)(l.Z,{value:"Cordova",mdxType:"TabItem"},(0,o.kt)(c.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ ionic cordova plugin add cordova-plugin-insomnia ","\n","$ npm install @awesome-cordova-plugins/insomnia ","\n")),(0,o.kt)(l.Z,{value:"Enterprise",mdxType:"TabItem"},(0,o.kt)("blockquote",null,"Ionic Enterprise comes with fully supported and maintained plugins from the Ionic Team. \xa0",(0,o.kt)("a",{class:"btn",href:"https://ionic.io/docs/premier-plugins"},"Learn More")," or if you're interested in an enterprise version of this plugin ",(0,o.kt)("a",{class:"btn",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine"},"Contact Us")))),(0,o.kt)("h2",{id:"supported-platforms"},"Supported Platforms"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Android"),(0,o.kt)("li",{parentName:"ul"},"Browser"),(0,o.kt)("li",{parentName:"ul"},"Firefox OS"),(0,o.kt)("li",{parentName:"ul"},"iOS"),(0,o.kt)("li",{parentName:"ul"},"Windows"),(0,o.kt)("li",{parentName:"ul"},"Windows Phone 8")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("h3",{id:"react"},"React"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/native/community#react"},"Learn more about using Ionic Native components in React")),(0,o.kt)("h3",{id:"angular"},"Angular"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Insomnia } from '@awesome-cordova-plugins/insomnia/ngx';\n\nconstructor(private insomnia: Insomnia) { }\n\n...\n\nthis.insomnia.keepAwake()\n  .then(\n    () => console.log('success'),\n    () => console.log('error')\n  );\n\nthis.insomnia.allowSleepAgain()\n  .then(\n    () => console.log('success'),\n    () => console.log('error')\n  );\n")))}h.isMDXComponent=!0}}]);