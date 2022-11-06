"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[42319],{58215:(e,a,n)=>{n.d(a,{Z:()=>t});var o=n(67294);const t=function(e){let{children:a,hidden:n,className:t}=e;return o.createElement("div",{role:"tabpanel",hidden:n,className:t},a)}},26396:(e,a,n)=>{n.d(a,{Z:()=>u});var o=n(87462),t=n(67294),r=n(72389),s=n(79443);const d=function(){const e=(0,t.useContext)(s.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var i=n(89521),l=n(86010);const c="tabItem_vU9c";function m(e){var a,n;const{lazy:o,block:r,defaultValue:s,values:m,groupId:u,className:p}=e,h=t.Children.map(e.children,(e=>{if((0,t.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=m??h.map((e=>{let{props:{value:a,label:n}}=e;return{value:a,label:n}})),v=(0,i.lx)(b,((e,a)=>e.value===a.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===s?s:s??(null==(a=h.find((e=>e.props.default)))?void 0:a.props.value)??(null==(n=h[0])?void 0:n.props.value);if(null!==g&&!b.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:f,setTabGroupChoices:w}=d(),[k,A]=(0,t.useState)(g),E=[],{blockElementScrollPositionUntilNextRender:N}=(0,i.o5)();if(null!=u){const e=f[u];null!=e&&e!==k&&b.some((a=>a.value===e))&&A(e)}const y=e=>{const a=e.currentTarget,n=E.indexOf(a),o=b[n].value;o!==k&&(N(a),A(o),null!=u&&w(u,o))},T=e=>{var a;let n=null;switch(e.key){case"ArrowRight":{const a=E.indexOf(e.currentTarget)+1;n=E[a]||E[0];break}case"ArrowLeft":{const a=E.indexOf(e.currentTarget)-1;n=E[a]||E[E.length-1];break}}null==(a=n)||a.focus()};return t.createElement("div",{className:"tabs-container"},t.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},p)},b.map((e=>{let{value:a,label:n}=e;return t.createElement("li",{role:"tab",tabIndex:k===a?0:-1,"aria-selected":k===a,className:(0,l.Z)("tabs__item",c,{"tabs__item--active":k===a}),key:a,ref:e=>E.push(e),onKeyDown:T,onFocus:y,onClick:y},n??a)}))),o?(0,t.cloneElement)(h.filter((e=>e.props.value===k))[0],{className:"margin-vert--md"}):t.createElement("div",{className:"margin-vert--md"},h.map(((e,a)=>(0,t.cloneElement)(e,{key:a,hidden:e.props.value!==k})))))}function u(e){const a=(0,r.Z)();return t.createElement(m,(0,o.Z)({key:String(a)},e))}},47758:(e,a,n)=>{n.d(a,{Z:()=>i});var o=n(67294),t=n(86010),r=n(39960),s=n(44996);const d="card_7QME";const i=function(e){const a=void 0===e.href,n=void 0!==e.href&&/^http/.test(e.href),i="undefined"===e.header?null:o.createElement("header",{className:"Card-header"},e.header),l=e.hoverIcon||e.icon,c=o.createElement(o.Fragment,null,e.img&&o.createElement("img",{src:(0,s.Z)(e.img),className:"Card-image"}),o.createElement("div",{className:"Card-container"},(e.icon||l)&&o.createElement("div",{className:"Card-icon-row"},e.icon&&o.createElement("img",{src:(0,s.Z)(e.icon),className:"Card-icon Card-icon-default"}),l&&o.createElement("img",{src:(0,s.Z)(l),className:"Card-icon Card-icon-hover"})),e.ionicon&&o.createElement("ion-icon",{name:e.ionicon,className:"Card-ionicon"}),e.iconset&&o.createElement("div",{className:"Card-iconset__container"},e.iconset.split(",").map(((a,n)=>o.createElement("img",{src:(0,s.Z)(a),className:"Card-icon "+(n===e.activeIndex?"Card-icon-active":""),"data-index":n,key:n})))),e.header&&i,o.createElement("div",{className:"Card-content"},e.children))),m=(0,t.Z)({"Card-with-image":void 0!==e.img,"Card-without-image":void 0===e.img,"Card-size-lg":"lg"===e.size,[e.className]:e.className});return a?o.createElement("docs-card",{class:m},o.createElement("div",{className:(0,t.Z)(d,"docs-card")},c)):n?o.createElement("docs-card",{class:m},o.createElement("a",{className:(0,t.Z)(d,"docs-card"),href:e.href,target:"_blank"},c)):o.createElement("docs-card",{class:m},o.createElement(r.default,{to:e.href,className:(0,t.Z)(d,"docs-card")},c))}},88694:(e,a,n)=>{n.d(a,{Z:()=>i});var o=n(87462),t=n(86010),r=n(67294);const s="docsButton_1mtQ",d="docsButtonRound_ZJZD";function i(e){let{href:a,round:n=!1,...i}=e;return i.className=(0,t.Z)({[i.className]:Boolean(i.className),[s]:!0,"docs-button":!0,[d]:n,"docs-button--round":n}),a?r.createElement("a",(0,o.Z)({href:a,className:"docsButton"},i),i.children):r.createElement("button",(0,o.Z)({className:"docsButton"},i),i.children)}},81489:(e,a,n)=>{n.r(a),n.d(a,{contentTitle:()=>m,default:()=>b,frontMatter:()=>c,metadata:()=>u,toc:()=>p});var o=n(87462),t=(n(67294),n(3905)),r=n(47758),s=n(88694),d=n(26396),i=n(58215),l=n(19055);const c={title:"AdMob"},m=void 0,u={unversionedId:"native/admob",id:"native/admob",isDocsHomePage:!1,title:"AdMob",description:"AdMob Plugin: Monetize Apps and Games Using Google AdMob SDK",source:"@site/docs/native/admob.md",sourceDirName:"native",slug:"/native/admob",permalink:"/cn/docs/native/admob",editUrl:"https://crowdin.com/project/ionic-docs",tags:[],version:"current",frontMatter:{title:"AdMob"},sidebar:"native",previous:{title:"AdMob Plus",permalink:"/cn/docs/native/admob-plus"},next:{title:"AES256",permalink:"/cn/docs/native/aes-256"}},p=[{value:"Supported Platforms",id:"supported-platforms",children:[],level:2},{value:"Usage",id:"usage",children:[{value:"React",id:"react",children:[],level:3},{value:"Angular",id:"angular",children:[],level:3}],level:2}],h={toc:p};function b(e){let{components:a,...n}=e;return(0,t.kt)("wrapper",(0,o.Z)({},h,n,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("head",null,(0,t.kt)("title",null,"AdMob Plugin: Monetize Apps and Games Using Google AdMob SDK"),(0,t.kt)("meta",{name:"description",content:"AdMob for Ionic apps is the most complete AdMob plugin with support for\xa0Tappx\xa0ads. Monetize apps and games with AdMob ads, using the latest Google AdMob SDK."})),(0,t.kt)("p",null,"Most complete Admob plugin with support for ",(0,t.kt)("a",{parentName:"p",href:"http://www.tappx.com/?h=dec334d63287772de859bdb4e977fce6"},"Tappx")," ads.\nMonetize your apps and games with AdMob ads, using latest Google AdMob SDK. With this plugin you can show AdMob ads easily!"),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Supports:")),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Banner ads (top and bottom)"),(0,t.kt)("li",{parentName:"ul"},"Interstitial ads"),(0,t.kt)("li",{parentName:"ul"},"Rewarded ads"),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"http://www.tappx.com/?h=dec334d63287772de859bdb4e977fce6"},"Tappx")," ads")),(0,t.kt)("p",null,(0,t.kt)("a",{href:"https://github.com/appfeel/admob-google-cordova",target:"_blank",rel:"noopener",className:"git-link"},(0,t.kt)("svg",{viewBox:"0 0 512 512"},(0,t.kt)("path",{d:"M416 160c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 23.7 12.9 44.3 32 55.4v8.6c0 19.9-7.8 33.7-25.3 44.9-15.4 9.8-38.1 17.1-67.5 21.5-14 2.1-25.7 6-35.2 10.7V151.4c19.1-11.1 32-31.7 32-55.4 0-35.3-28.7-64-64-64S96 60.7 96 96c0 23.7 12.9 44.3 32 55.4v209.2c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-16.6-6.3-31.7-16.7-43.1 1.9-4.9 9.7-16.3 29.4-19.3 38.8-5.8 68.9-15.9 92.3-30.8 36-22.8 55-57 55-98.8v-8.6c19.1-11.1 32-31.7 32-55.4zM160 56c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm0 400c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm192-256c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"}))," https://github.com/appfeel/admob-google-cordova")),(0,t.kt)("h2",null,"Stuck on a Cordova issue?"),(0,t.kt)(r.Z,{className:"cordova-ee-card",header:"Don't waste precious time on plugin issues.",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Native",mdxType:"DocsCard"},(0,t.kt)("div",null,(0,t.kt)("img",{src:"/docs/icons/native-cordova-bot.png",class:"cordova-ee-img"}),(0,t.kt)("p",null,"If you're building a serious project, you can't afford to spend hours troubleshooting. Ionic\u2019s experts offer premium advisory services for both community plugins and premier plugins."),(0,t.kt)(s.Z,{className:"native-ee-detail",mdxType:"DocsButton"},"Contact Us Today!"))),(0,t.kt)("h2",{id:"installation"},(0,t.kt)("a",{href:"#installation"},"Installation")),(0,t.kt)(d.Z,{defaultValue:"Capacitor",groupId:"runtime",values:[{value:"Capacitor",label:"Capacitor"},{value:"Cordova",label:"Cordova"},{value:"Enterprise",label:"Enterprise"}],mdxType:"Tabs"},(0,t.kt)(i.Z,{value:"Capacitor",mdxType:"TabItem"},(0,t.kt)(l.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ npm install cordova-admob ","\n","$ npm install @awesome-cordova-plugins/admob ","\n","$ ionic cap sync")),(0,t.kt)(i.Z,{value:"Cordova",mdxType:"TabItem"},(0,t.kt)(l.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ ionic cordova plugin add cordova-admob ","\n","$ npm install @awesome-cordova-plugins/admob ","\n")),(0,t.kt)(i.Z,{value:"Enterprise",mdxType:"TabItem"},(0,t.kt)("blockquote",null,"Ionic Enterprise comes with fully supported and maintained plugins from the Ionic Team. \xa0",(0,t.kt)("a",{class:"btn",href:"https://ionic.io/docs/premier-plugins"},"Learn More")," or if you're interested in an enterprise version of this plugin ",(0,t.kt)("a",{class:"btn",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine"},"Contact Us")))),(0,t.kt)("h2",{id:"supported-platforms"},"Supported Platforms"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Android"),(0,t.kt)("li",{parentName:"ul"},"iOS"),(0,t.kt)("li",{parentName:"ul"},"Browser")),(0,t.kt)("h2",{id:"usage"},"Usage"),(0,t.kt)("h3",{id:"react"},"React"),(0,t.kt)("p",null,(0,t.kt)("a",{parentName:"p",href:"/cn/docs/native/community#react"},"Learn more about using Ionic Native components in React")),(0,t.kt)("h3",{id:"angular"},"Angular"),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Note:")," No ads will be served on apps with package name ",(0,t.kt)("inlineCode",{parentName:"p"},"io.ionic.starter"),". This is the default package name for new ",(0,t.kt)("inlineCode",{parentName:"p"},"ionic")," apps. Make sure to rename the package name so ads can be displayed."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Admob, AdmobOptions } from '@awesome-cordova-plugins/admob';\n\n\nconstructor(private admob: Admob) {\n    // Admob options config\n    const admobOptions: AdmobOptions = {\n      bannerAdId: 'XXX-XXXX-XXXX',\n      interstitialAdId: 'XXX-XXXX-XXXX',\n      rewardedAdId: 'XXX-XXXX-XXXX',\n      isTesting: true,\n      autoShowBanner: false,\n      autoShowInterstitial: false,\n      autoShowRewarded: false,\n      adSize: this.admob.AD_SIZE.BANNER\n    };\n\n    // Set admob options\n    this.admob.setOptions(admobOptions)\n      .then(() => console.log('Admob options have been successfully set'))\n      .catch(err => console.error('Error setting admob options:', err));\n}\n\n\n\n// (Optionally) Load banner ad, in order to have it ready to show\nthis.admob.createBannerView()\n  .then(() => console.log('Banner ad loaded'))\n  .catch(err => console.error('Error loading banner ad:', err));\n\n\n// Show banner ad (createBannerView must be called before and onAdLoaded() event raised)\nthis.admob.onAdLoaded().subscribe((ad) => {\n  if (ad.adType === this.admob.AD_TYPE.BANNER) {\n    this.admob.showBannerAd()\n      .then(() => console.log('Banner ad shown'))\n      .catch(err => console.error('Error showing banner ad:', err));\n  }\n});\n\n\n// Hide banner ad, but do not destroy it, so it can be shown later on\n// See destroyBannerView in order to hide and destroy banner ad\nthis.admob.showBannerAd(false)\n  .then(() => console.log('Banner ad hidden'))\n  .catch(err => console.error('Error hiding banner ad:', err));\n\n\n\n// Request an interstitial ad, in order to be shown later on\n// It is possible to autoshow it via options parameter, see docs\nthis.admob.requestInterstitialAd()\n  .then(() => console.log('Interstitial ad loaded'))\n  .catch(err => console.error('Error loading interstitial ad:', err));\n\n\n// Show an interstitial ad (requestInterstitialAd must be called before)\nthis.admob.onAdLoaded().subscribe((ad) => {\n  if (ad.adType === this.admob.AD_TYPE.INTERSTITIAL) {\n    this.admob.showInterstitialAd()\n      .then(() => console.log('Interstitial ad shown'))\n      .catch(err => console.error('Error showing interstitial ad:', err));\n  }\n});\n\n\n// Request a rewarded ad\nthis.admob.requestRewardedAd()\n  .then(() => console.log('Rewarded ad loaded'))\n  .catch(err => console.error('Error loading rewarded ad:', err));\n\n\n// Show rewarded ad (requestRewardedAd must be called before)\nthis.admob.onAdLoaded().subscribe((ad) => {\n  if (ad.adType === this.admob.AD_TYPE.REWARDED) {\n    this.admob.showRewardedAd()\n      .then(() => console.log('Rewarded ad shown'))\n      .catch(err => console.error('Error showing rewarded ad:', err));\n  }\n});\n\n\n// Hide and destroy banner or interstitial ad\nthis.admob.destroyBannerView()\n  .then(() => console.log('Banner or interstitial ad destroyed'))\n  .catch(err => console.error('Error destroying banner or interstitial ad:', err));\n\n\n\n// On Ad loaded event\nthis.admob.onAdLoaded().subscribe((ad) => {\n  if (ad.adType === this.admob.AD_TYPE.BANNER) {\n    console.log('Banner ad is loaded');\n    this.admob.showBannerAd();\n  } else if (ad.adType === this.admob.AD_TYPE.INTERSTITIAL) {\n    console.log('Interstitial ad is loaded');\n    this.admob.showInterstitialAd();\n  } else if (ad.adType === this.admob.AD_TYPE.REWARDED) {\n    console.log('Rewarded ad is loaded');\n    this.admob.showRewardedAd();\n  }\n});\n\n\n\n// On ad failed to load\nthis.admob.onAdFailedToLoad().subscribe(err => console.log('Error loading ad:', err));\n\n\n\n// On interstitial ad opened\nthis.admob.onAdOpened().subscribe(() => console.log('Interstitial ad opened'));\n\n\n\n// On interstitial ad closed\nthis.admob.onAdClosed().subscribe(() => console.log('Interstitial ad closed'));\n\n\n\n// On ad clicked and left application\nthis.admob.onAdLeftApplication().subscribe(() => console.log('Ad lefted application'));\n\n\n\n// On user ad rewarded\nthis.admob.onRewardedAd().subscribe(() => console.log('The user has been rewarded'));\n\n\n\n// On rewarded ad video started\nthis.admob.onRewardedAdVideoStarted().subscribe(() => console.log('Rewarded ad vieo started'));\n\n\n\n// On rewarded ad video completed\nthis.admob.onRewardedAdVideoCompleted().subscribe(() => console.log('Rewarded ad video completed'));\n\n")))}b.isMDXComponent=!0}}]);