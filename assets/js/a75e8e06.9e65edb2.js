"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[8771],{58215:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(67294);const r=function(e){let{children:t,hidden:n,className:r}=e;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},26396:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(87462),r=n(67294),i=n(72389),o=n(79443);const s=function(){const e=(0,r.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var l=n(89521),c=n(86010);const u="tabItem_vU9c";function d(e){var t,n;const{lazy:a,block:i,defaultValue:o,values:d,groupId:p,className:m}=e,v=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=d??v.map((e=>{let{props:{value:t,label:n}}=e;return{value:t,label:n}})),g=(0,l.lx)(h,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===o?o:o??(null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)??(null==(n=v[0])?void 0:n.props.value);if(null!==k&&!h.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:E,setTabGroupChoices:f}=s(),[b,y]=(0,r.useState)(k),T=[],{blockElementScrollPositionUntilNextRender:S}=(0,l.o5)();if(null!=p){const e=E[p];null!=e&&e!==b&&h.some((t=>t.value===e))&&y(e)}const C=e=>{const t=e.currentTarget,n=T.indexOf(t),a=h[n].value;a!==b&&(S(t),y(a),null!=p&&f(p,a))},R=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;n=T[t]||T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;n=T[t]||T[T.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":i},m)},h.map((e=>{let{value:t,label:n}=e;return r.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,c.Z)("tabs__item",u,{"tabs__item--active":b===t}),key:t,ref:e=>T.push(e),onKeyDown:R,onFocus:C,onClick:C},n??t)}))),a?(0,r.cloneElement)(v.filter((e=>e.props.value===b))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},v.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==b})))))}function p(e){const t=(0,i.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},47758:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),r=n(86010),i=n(39960),o=n(44996);const s="card_7QME";const l=function(e){const t=void 0===e.href,n=void 0!==e.href&&/^http/.test(e.href),l="undefined"===e.header?null:a.createElement("header",{className:"Card-header"},e.header),c=e.hoverIcon||e.icon,u=a.createElement(a.Fragment,null,e.img&&a.createElement("img",{src:(0,o.Z)(e.img),className:"Card-image"}),a.createElement("div",{className:"Card-container"},(e.icon||c)&&a.createElement("div",{className:"Card-icon-row"},e.icon&&a.createElement("img",{src:(0,o.Z)(e.icon),className:"Card-icon Card-icon-default"}),c&&a.createElement("img",{src:(0,o.Z)(c),className:"Card-icon Card-icon-hover"})),e.ionicon&&a.createElement("ion-icon",{name:e.ionicon,className:"Card-ionicon"}),e.iconset&&a.createElement("div",{className:"Card-iconset__container"},e.iconset.split(",").map(((t,n)=>a.createElement("img",{src:(0,o.Z)(t),className:"Card-icon "+(n===e.activeIndex?"Card-icon-active":""),"data-index":n,key:n})))),e.header&&l,a.createElement("div",{className:"Card-content"},e.children))),d=(0,r.Z)({"Card-with-image":void 0!==e.img,"Card-without-image":void 0===e.img,"Card-size-lg":"lg"===e.size,[e.className]:e.className});return t?a.createElement("docs-card",{class:d},a.createElement("div",{className:(0,r.Z)(s,"docs-card")},u)):n?a.createElement("docs-card",{class:d},a.createElement("a",{className:(0,r.Z)(s,"docs-card"),href:e.href,target:"_blank"},u)):a.createElement("docs-card",{class:d},a.createElement(i.default,{to:e.href,className:(0,r.Z)(s,"docs-card")},u))}},88694:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(87462),r=n(86010),i=n(67294);const o="docsButton_1mtQ",s="docsButtonRound_ZJZD";function l(e){let{href:t,round:n=!1,...l}=e;return l.className=(0,r.Z)({[l.className]:Boolean(l.className),[o]:!0,"docs-button":!0,[s]:n,"docs-button--round":n}),t?i.createElement("a",(0,a.Z)({href:t,className:"docsButton"},l),l.children):i.createElement("button",(0,a.Z)({className:"docsButton"},l),l.children)}},36004:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>d,default:()=>h,frontMatter:()=>u,metadata:()=>p,toc:()=>m});var a=n(87462),r=(n(67294),n(3905)),i=n(47758),o=n(88694),s=n(26396),l=n(58215),c=n(19055);const u={title:"Unvired Cordova SDK"},d=void 0,p={unversionedId:"native/unvired-cordova-sdk",id:"native/unvired-cordova-sdk",isDocsHomePage:!1,title:"Unvired Cordova SDK",description:"This plugin lets you build apps which connect to Unvired Mobile Platform (UMP).",source:"@site/docs/native/unvired-cordova-sdk.md",sourceDirName:"native",slug:"/native/unvired-cordova-sdk",permalink:"/docs/native/unvired-cordova-sdk",editUrl:"https://github.com/ionic-team/ionic-native/edit/master/src/@awesome-cordova-plugins/plugins/unvired-cordova-sdk/index.ts",tags:[],version:"current",frontMatter:{title:"Unvired Cordova SDK"},sidebar:"native",previous:{title:"Touch ID",permalink:"/docs/native/touch-id"},next:{title:"Uptime",permalink:"/docs/native/uptime"}},m=[{value:"This plugin lets you build apps which connect to Unvired Mobile Platform (UMP).",id:"this-plugin-lets-you-build-apps-which-connect-to-unvired-mobile-platform-ump",children:[],level:2},{value:"iOS Requirements",id:"ios-requirements",children:[],level:2},{value:"Supported Platforms",id:"supported-platforms",children:[],level:2},{value:"Usage",id:"usage",children:[{value:"React",id:"react",children:[],level:3},{value:"Angular",id:"angular",children:[],level:3}],level:2}],v={toc:m};function h(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"this-plugin-lets-you-build-apps-which-connect-to-unvired-mobile-platform-ump"},"This plugin lets you build apps which connect to Unvired Mobile Platform (UMP)."),(0,r.kt)("h2",{id:"ios-requirements"},"iOS Requirements"),(0,r.kt)("p",null,"Update your Cocoapods repo before you install the plugin."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ pod repo update\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Browser Requirements"),(0,r.kt)("li",{parentName:"ul"},"After you install the plugin, for Ionic/Angular projects, please add a reference to the following JS files within ",(0,r.kt)("head",null)," section of index.html.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'<script src="assets/js/sql.js"><\/script>\n<script src="assets/js/kernel.js"><\/script>\n<script src="assets/js/winstore-jscompat.js"><\/script>\n<script src="assets/js/jquery-3.2.1.js"><\/script>\n')),(0,r.kt)("p",null,(0,r.kt)("a",{href:"https://github.com/unvired/cordova-plugin-unvired-sdk/",target:"_blank",rel:"noopener",className:"git-link"},(0,r.kt)("svg",{viewBox:"0 0 512 512"},(0,r.kt)("path",{d:"M416 160c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 23.7 12.9 44.3 32 55.4v8.6c0 19.9-7.8 33.7-25.3 44.9-15.4 9.8-38.1 17.1-67.5 21.5-14 2.1-25.7 6-35.2 10.7V151.4c19.1-11.1 32-31.7 32-55.4 0-35.3-28.7-64-64-64S96 60.7 96 96c0 23.7 12.9 44.3 32 55.4v209.2c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-16.6-6.3-31.7-16.7-43.1 1.9-4.9 9.7-16.3 29.4-19.3 38.8-5.8 68.9-15.9 92.3-30.8 36-22.8 55-57 55-98.8v-8.6c19.1-11.1 32-31.7 32-55.4zM160 56c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm0 400c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm192-256c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"}))," https://github.com/unvired/cordova-plugin-unvired-sdk/")),(0,r.kt)("h2",null,"Stuck on a Cordova issue?"),(0,r.kt)(i.Z,{className:"cordova-ee-card",header:"Don't waste precious time on plugin issues.",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Native",mdxType:"DocsCard"},(0,r.kt)("div",null,(0,r.kt)("img",{src:"/docs/icons/native-cordova-bot.png",class:"cordova-ee-img"}),(0,r.kt)("p",null,"If you're building a serious project, you can't afford to spend hours troubleshooting. Ionic\u2019s experts offer premium advisory services for both community plugins and premier plugins."),(0,r.kt)(o.Z,{className:"native-ee-detail",mdxType:"DocsButton"},"Contact Us Today!"))),(0,r.kt)("h2",{id:"installation"},(0,r.kt)("a",{href:"#installation"},"Installation")),(0,r.kt)(s.Z,{defaultValue:"Capacitor",groupId:"runtime",values:[{value:"Capacitor",label:"Capacitor"},{value:"Cordova",label:"Cordova"},{value:"Enterprise",label:"Enterprise"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Capacitor",mdxType:"TabItem"},(0,r.kt)(c.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ npm install cordova-plugin-unvired-sdk ","\n","$ npm install @awesome-cordova-plugins/unvired-cordova-sdk ","\n","$ ionic cap sync")),(0,r.kt)(l.Z,{value:"Cordova",mdxType:"TabItem"},(0,r.kt)(c.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ ionic cordova plugin add cordova-plugin-unvired-sdk ","\n","$ npm install @awesome-cordova-plugins/unvired-cordova-sdk ","\n")),(0,r.kt)(l.Z,{value:"Enterprise",mdxType:"TabItem"},(0,r.kt)("blockquote",null,"Ionic Enterprise comes with fully supported and maintained plugins from the Ionic Team. \xa0",(0,r.kt)("a",{class:"btn",href:"https://ionic.io/docs/premier-plugins"},"Learn More")," or if you're interested in an enterprise version of this plugin ",(0,r.kt)("a",{class:"btn",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine"},"Contact Us")))),(0,r.kt)("h2",{id:"supported-platforms"},"Supported Platforms"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"iOS"),(0,r.kt)("li",{parentName:"ul"},"Android"),(0,r.kt)("li",{parentName:"ul"},"Windows"),(0,r.kt)("li",{parentName:"ul"},"Browser")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("h3",{id:"react"},"React"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/native/community#react"},"Learn more about using Ionic Native components in React")),(0,r.kt)("h3",{id:"angular"},"Angular"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { UnviredCordovaSDK } from '@awesome-cordova-plugins/unvired-cordova-sdk/ngx';\n\n\nconstructor(private unviredSDK: UnviredCordovaSDK) { }\n\n...\n// This is usually done in app.component.ts of your app.\n// Before you can interact with UMP, you need to initialize the SDK and authenticate with UMP.\n// SDK Initialization\nlet loginParameters = new LoginParameters()\nloginParameters.appName = 'UNVIRED_DIGITAL_FORMS'\nloginParameters.metadataPath = '../assets/metadata.json'\nlet loginResult: LoginResult\ntry {\n  loginResult = await this.unviredSDK.login(loginParameters)\n}\ncatch (error) {\n  this.unviredSDK.logError(\"AppComponent\", \"Initialize\", \"Error during login: \" + error)\n}\n\n\nswitch (loginResult.type) {\ncase LoginListenerType.auth_activation_required:\n// App is not activated. i.e, User is using the app for the very first time.\n// App needs to be activated before it can interact with UMP.\n// At this point of time, you basically navigate to a login screen & accept username / password from the user.\n// Set the username & password to loginParameters object and call authenticateAndActivate\ntry {\n // Execute this block of code in a login screen.\nlet loginParameters = new LoginParameters();\nloginParameters.url = '&lt;UMP_URL>';\nloginParameters.company = '&lt;Company>';\nloginParameters.username = '&lt;Username>';\nloginParameters.password = '&lt;Password>';\nloginParameters.loginType = LoginType.unvired;\nlet authenticateActivateResult: AuthenticateActivateResult = await this.unviredSDK.authenticateAndActivate(loginParameters);\nif (authenticateActivateResult.type === AuthenticateAndActivateResultType.auth_activation_success) {\n// App is fully setup. Navigate to your app's home screen.\n} else if (authenticateActivateResult.type === AuthenticateAndActivateResultType.auth_activation_error) {\nconsole.log(\"Error during login: \" + authenticateActivateResult.error)\n} catch (error) {\nthis.unviredSDK.logError('LoginPage', 'auth_activation_required', 'ERROR: ' + error);\n}\nbreak;\n\n\n\ncase LoginListenerType.app_requires_login:\n// App is already activated. But, the user needs to enter credentials because the setting LOCAL_PASSWORD is set to YES in Unvired Admin Cockpit.\n// To set LOCAL_PASSWORD property for your app, contact your administrator.\ntry {\n // Execute this block of code in a login screen.\n let loginParameters = new LoginParameters()\n loginParameters.username = '&lt;Username>';\n loginParameters.password = '&lt;Password>';\n let authenticateLocalResult: AuthenticateLocalResult = await this.unviredSDK.authenticateLocal(loginParameters);\n if (authenticateLocalResult.type === AuthenticateLocalResultType.login_success) {\n // App is fully setup. Navigate to your app's home screen.\n } else if (authenticateLocalResult.type === AuthenticateLocalResultType.login_error) {\n  console.log(\"Error during local login: \" + authenticateActivateResult.error)\n } catch (error) {\n  this.unviredSDK.logError('LoginPage', 'app_requires_login', 'ERROR: ' + error);\n}\nbreak;\n\n\n\ncase login_success:\n// The setting LOCAL_PASSWORD is set to false.\n// App is fully initialized. Users can interact with the UMP\n// Navigate to Home screen\nbreak;\n}\n\n\n\n\n\n// Synchronization APIs\n// Example 1: Make a Sync RQST call\n")),(0,r.kt)("p",null,'await this.unviredSDK.syncForeground(RequestType.RQST, {"CUSTOMER_HEADER": {"CUST_NO" : "007", "CUST_NAME" : "James Bond"}}, \'\', \'PA_GET_CUSTOMER_DETAILS\', true)'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\n// Example 2: Make a Sync QUERY / PULL call\n")),(0,r.kt)("p",null,"await this.unviredSDK.syncForeground(RequestType.QUERY, '', {\"CUSTOMER_SEARCH_CONTEXT\":",'[{"CUSTOMER_SEARCH_HEADER":{"CUST_NO":"007"}}]',"}, 'PA_SEARCH_CUSTOMER', true)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\nExample 3: Make a Async RQST call\n")),(0,r.kt)("p",null,'await this.unviredSDK.syncBackground(RequestType.RQST, {"CUSTOMER_HEADER": {"CUST_NO" : "007", "CUST_NAME" : "James Bond"}}, \'\', \'PA_GET_CUSTOMER_DETAILS\', \'CUSTOMER\', beLID, false)'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\nExample 4: Make a Async QUERY / PULL call\n")),(0,r.kt)("p",null,"await this.unviredSDK.syncBackground(RequestType.QUERY, '', {\"CUSTOMER_SEARCH_CONTEXT\":",'[{"CUSTOMER_SEARCH_HEADER":{"CUST_NO":"007"}}]',"}, 'PA_SEARCH_CUSTOMER', '', '', true)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'\n// Note: Subscribe to NotificationListener to get updates on data processing in background\n// However, only one screen can listen to background data updates at any point of time.\nthis.unviredSDK.registerNotifListener().subscribe( data => {\nswitch (data.type) {\ncase NotificationListenerType.dataSend:\nbreak;\ncase NotificationListenerType.dataChanged:\nbreak;\ncase NotificationListenerType.dataReceived:\nbreak;\n.\n.\n.\n}})\n\n\n\n\n\n// Database APIs\n// Insert a record onto database\nthis.unviredsdk.dbInsert("CUSTOMER_HEADER", {"NAME":"James Bond","CUST_NO":"007"}, true);\n\n// Update a record in database\nthis.unviredSDK.dbUpdate(\'CUSTOMER_HEADER\', {"NAME":"John Doe","CUST_NO":"008"}, "CUST_NO = \'007\'")\n\n// Delete a record in database\nthis.unviredSDK.dbDelete(\'CUSTOMER_HEADER\', "CUST_NO = \'007\'")\n\n// Execute a SQL Query\nthis.unviredSDK.dbExecuteStatement(\'SELECT * FROM CUSTOMER_HEADER WHERE CUSTOMER_ID = "007"\')\n')))}h.isMDXComponent=!0}}]);