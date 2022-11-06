"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[42852],{58215:(e,a,t)=>{t.d(a,{Z:()=>r});var n=t(67294);const r=function(e){let{children:a,hidden:t,className:r}=e;return n.createElement("div",{role:"tabpanel",hidden:t,className:r},a)}},26396:(e,a,t)=>{t.d(a,{Z:()=>m});var n=t(87462),r=t(67294),o=t(72389),l=t(79443);const s=function(){const e=(0,r.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var i=t(89521),c=t(86010);const d="tabItem_vU9c";function u(e){var a,t;const{lazy:n,block:o,defaultValue:l,values:u,groupId:m,className:p}=e,v=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=u??v.map((e=>{let{props:{value:a,label:t}}=e;return{value:a,label:t}})),g=(0,i.lx)(h,((e,a)=>e.value===a.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===l?l:l??(null==(a=v.find((e=>e.props.default)))?void 0:a.props.value)??(null==(t=v[0])?void 0:t.props.value);if(null!==f&&!h.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:b}=s(),[C,y]=(0,r.useState)(f),E=[],{blockElementScrollPositionUntilNextRender:N}=(0,i.o5)();if(null!=m){const e=k[m];null!=e&&e!==C&&h.some((a=>a.value===e))&&y(e)}const w=e=>{const a=e.currentTarget,t=E.indexOf(a),n=h[t].value;n!==C&&(N(a),y(n),null!=m&&b(m,n))},Z=e=>{var a;let t=null;switch(e.key){case"ArrowRight":{const a=E.indexOf(e.currentTarget)+1;t=E[a]||E[0];break}case"ArrowLeft":{const a=E.indexOf(e.currentTarget)-1;t=E[a]||E[E.length-1];break}}null==(a=t)||a.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":o},p)},h.map((e=>{let{value:a,label:t}=e;return r.createElement("li",{role:"tab",tabIndex:C===a?0:-1,"aria-selected":C===a,className:(0,c.Z)("tabs__item",d,{"tabs__item--active":C===a}),key:a,ref:e=>E.push(e),onKeyDown:Z,onFocus:w,onClick:w},t??a)}))),n?(0,r.cloneElement)(v.filter((e=>e.props.value===C))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},v.map(((e,a)=>(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==C})))))}function m(e){const a=(0,o.Z)();return r.createElement(u,(0,n.Z)({key:String(a)},e))}},47758:(e,a,t)=>{t.d(a,{Z:()=>i});var n=t(67294),r=t(86010),o=t(39960),l=t(44996);const s="card_7QME";const i=function(e){const a=void 0===e.href,t=void 0!==e.href&&/^http/.test(e.href),i="undefined"===e.header?null:n.createElement("header",{className:"Card-header"},e.header),c=e.hoverIcon||e.icon,d=n.createElement(n.Fragment,null,e.img&&n.createElement("img",{src:(0,l.Z)(e.img),className:"Card-image"}),n.createElement("div",{className:"Card-container"},(e.icon||c)&&n.createElement("div",{className:"Card-icon-row"},e.icon&&n.createElement("img",{src:(0,l.Z)(e.icon),className:"Card-icon Card-icon-default"}),c&&n.createElement("img",{src:(0,l.Z)(c),className:"Card-icon Card-icon-hover"})),e.ionicon&&n.createElement("ion-icon",{name:e.ionicon,className:"Card-ionicon"}),e.iconset&&n.createElement("div",{className:"Card-iconset__container"},e.iconset.split(",").map(((a,t)=>n.createElement("img",{src:(0,l.Z)(a),className:"Card-icon "+(t===e.activeIndex?"Card-icon-active":""),"data-index":t,key:t})))),e.header&&i,n.createElement("div",{className:"Card-content"},e.children))),u=(0,r.Z)({"Card-with-image":void 0!==e.img,"Card-without-image":void 0===e.img,"Card-size-lg":"lg"===e.size,[e.className]:e.className});return a?n.createElement("docs-card",{class:u},n.createElement("div",{className:(0,r.Z)(s,"docs-card")},d)):t?n.createElement("docs-card",{class:u},n.createElement("a",{className:(0,r.Z)(s,"docs-card"),href:e.href,target:"_blank"},d)):n.createElement("docs-card",{class:u},n.createElement(o.default,{to:e.href,className:(0,r.Z)(s,"docs-card")},d))}},88694:(e,a,t)=>{t.d(a,{Z:()=>i});var n=t(87462),r=t(86010),o=t(67294);const l="docsButton_1mtQ",s="docsButtonRound_ZJZD";function i(e){let{href:a,round:t=!1,...i}=e;return i.className=(0,r.Z)({[i.className]:Boolean(i.className),[l]:!0,"docs-button":!0,[s]:t,"docs-button--round":t}),a?o.createElement("a",(0,n.Z)({href:a,className:"docsButton"},i),i.children):o.createElement("button",(0,n.Z)({className:"docsButton"},i),i.children)}},24167:(e,a,t)=>{t.r(a),t.d(a,{contentTitle:()=>u,default:()=>h,frontMatter:()=>d,metadata:()=>m,toc:()=>p});var n=t(87462),r=(t(67294),t(3905)),o=t(47758),l=t(88694),s=t(26396),i=t(58215),c=t(19055);const d={title:"Calendar"},u=void 0,m={unversionedId:"native/calendar",id:"native/calendar",isDocsHomePage:!1,title:"Calendar",description:"Calendar Plugin | Ionic Applications & Cordova Plugin Calendar",source:"@site/docs/native/calendar.md",sourceDirName:"native",slug:"/native/calendar",permalink:"/cn/docs/native/calendar",editUrl:"https://crowdin.com/project/ionic-docs",tags:[],version:"current",frontMatter:{title:"Calendar"},sidebar:"native",previous:{title:"Build Info",permalink:"/cn/docs/native/build-info"},next:{title:"Call Directory",permalink:"/cn/docs/native/call-directory"}},p=[{value:"Supported Platforms",id:"supported-platforms",children:[],level:2},{value:"Usage",id:"usage",children:[{value:"React",id:"react",children:[],level:3},{value:"Angular",id:"angular",children:[],level:3}],level:2}],v={toc:p};function h(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},v,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("title",null,"Calendar Plugin | Ionic Applications & Cordova Plugin Calendar"),(0,r.kt)("meta",{name:"description",content:"Use the Cordova Plugin Calendar to add events to the calendar of the mobile device you are on from your Ionic Framework Application. Read to learn about usage."})),(0,r.kt)("p",null,"This plugin allows you to add events to the Calendar of the mobile device."),(0,r.kt)("p",null,"Requires Cordova plugin: ",(0,r.kt)("inlineCode",{parentName:"p"},"cordova-plugin-calendar"),". For more info, please see the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/EddyVerbruggen/Calendar-PhoneGap-Plugin"},"Calendar plugin docs"),"."),(0,r.kt)("p",null,(0,r.kt)("a",{href:"https://github.com/EddyVerbruggen/Calendar-PhoneGap-Plugin",target:"_blank",rel:"noopener",className:"git-link"},(0,r.kt)("svg",{viewBox:"0 0 512 512"},(0,r.kt)("path",{d:"M416 160c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 23.7 12.9 44.3 32 55.4v8.6c0 19.9-7.8 33.7-25.3 44.9-15.4 9.8-38.1 17.1-67.5 21.5-14 2.1-25.7 6-35.2 10.7V151.4c19.1-11.1 32-31.7 32-55.4 0-35.3-28.7-64-64-64S96 60.7 96 96c0 23.7 12.9 44.3 32 55.4v209.2c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-16.6-6.3-31.7-16.7-43.1 1.9-4.9 9.7-16.3 29.4-19.3 38.8-5.8 68.9-15.9 92.3-30.8 36-22.8 55-57 55-98.8v-8.6c19.1-11.1 32-31.7 32-55.4zM160 56c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm0 400c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm192-256c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"}))," https://github.com/EddyVerbruggen/Calendar-PhoneGap-Plugin")),(0,r.kt)("h2",null,"Stuck on a Cordova issue?"),(0,r.kt)(o.Z,{className:"cordova-ee-card",header:"Don't waste precious time on plugin issues.",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Native",mdxType:"DocsCard"},(0,r.kt)("div",null,(0,r.kt)("img",{src:"/docs/icons/native-cordova-bot.png",class:"cordova-ee-img"}),(0,r.kt)("p",null,"If you're building a serious project, you can't afford to spend hours troubleshooting. Ionic\u2019s experts offer premium advisory services for both community plugins and premier plugins."),(0,r.kt)(l.Z,{className:"native-ee-detail",mdxType:"DocsButton"},"Contact Us Today!"))),(0,r.kt)("h2",{id:"installation"},(0,r.kt)("a",{href:"#installation"},"Installation")),(0,r.kt)(s.Z,{defaultValue:"Capacitor",groupId:"runtime",values:[{value:"Capacitor",label:"Capacitor"},{value:"Cordova",label:"Cordova"},{value:"Enterprise",label:"Enterprise"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Capacitor",mdxType:"TabItem"},(0,r.kt)(c.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ npm install cordova-plugin-calendar ","\n","$ npm install @awesome-cordova-plugins/calendar ","\n","$ ionic cap sync")),(0,r.kt)(i.Z,{value:"Cordova",mdxType:"TabItem"},(0,r.kt)(c.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ ionic cordova plugin add cordova-plugin-calendar ","\n","$ npm install @awesome-cordova-plugins/calendar ","\n")),(0,r.kt)(i.Z,{value:"Enterprise",mdxType:"TabItem"},(0,r.kt)("blockquote",null,"Ionic Enterprise comes with fully supported and maintained plugins from the Ionic Team. \xa0",(0,r.kt)("a",{class:"btn",href:"https://ionic.io/docs/premier-plugins"},"Learn More")," or if you're interested in an enterprise version of this plugin ",(0,r.kt)("a",{class:"btn",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine"},"Contact Us")))),(0,r.kt)("h2",{id:"supported-platforms"},"Supported Platforms"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Android"),(0,r.kt)("li",{parentName:"ul"},"iOS")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("h3",{id:"react"},"React"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/cn/docs/native/community#react"},"Learn more about using Ionic Native components in React")),(0,r.kt)("h3",{id:"angular"},"Angular"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Calendar } from '@awesome-cordova-plugins/calendar/ngx';\n\nconstructor(private calendar: Calendar) { }\n\n\nthis.calendar.createCalendar('MyCalendar').then(\n  (msg) => { console.log(msg); },\n  (err) => { console.log(err); }\n);\n")))}h.isMDXComponent=!0}}]);