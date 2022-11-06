"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[50295],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>h});var o=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=o.createContext({}),s=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=s(e.components);return o.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=s(t),h=a,k=m["".concat(c,".").concat(h)]||m[h]||p[h]||r;return t?o.createElement(k,i(i({ref:n},d),{},{components:t})):o.createElement(k,i({ref:n},d))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<r;s++)i[s]=t[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},55820:(e,n,t)=>{t.d(n,{Z:()=>r});var o=t(67294);const a=e=>{const[n,t]=(0,o.useState)(e?"loading":"idle");return(0,o.useEffect)((()=>{if(!e)return void t("idle");let n=document.querySelector(`script[src="${e}"]`);if(n)t(n.getAttribute("data-status"));else{n=document.createElement("script"),n.src=e,n.async=!0,n.setAttribute("data-status","loading"),document.body.appendChild(n);const t=e=>{n.setAttribute("data-status","load"===e.type?"ready":"error")};n.addEventListener("load",t),n.addEventListener("error",t)}const o=e=>{t("load"===e.type?"ready":"error")};return n.addEventListener("load",o),n.addEventListener("error",o),()=>{n&&(n.removeEventListener("load",o),n.removeEventListener("error",o))}}),[e]),n};const r=function(e){return a("https://static.codepen.io/assets/embed/ei.js"),o.createElement("div",{className:"codepen","data-height":e.height,"data-theme-id":e.theme,"data-default-tab":e.defaultTab,"data-user":e.user,"data-slug-hash":e.slug,"data-preview":e.preview?"true":"false","data-pen-title":e.penTitle,"no-prerender":"true"})}},7415:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var o=t(87462),a=(t(67294),t(3905)),r=t(55820);const i={title:"Dark Mode",initialTab:"preview",inlineHtmlPreviews:!0},l=void 0,c={unversionedId:"theming/dark-mode",id:"theming/dark-mode",isDocsHomePage:!1,title:"Dark Mode",description:"Dark Mode to Change Color Schemes and CSS Properties",source:"@site/docs/theming/dark-mode.md",sourceDirName:"theming",slug:"/theming/dark-mode",permalink:"/cn/docs/theming/dark-mode",editUrl:"https://crowdin.com/project/ionic-docs",tags:[],version:"current",frontMatter:{title:"Dark Mode",initialTab:"preview",inlineHtmlPreviews:!0},sidebar:"docs",previous:{title:"Themes",permalink:"/cn/docs/theming/themes"},next:{title:"Advanced",permalink:"/cn/docs/theming/advanced"}},s=[{value:"Using Media Queries",id:"using-media-queries",children:[],level:2},{value:"CSS Class Fallback",id:"css-class-fallback",children:[],level:2},{value:"Combining with JavaScript",id:"combining-with-javascript",children:[{value:"Automatically Enable Dark Mode",id:"automatically-enable-dark-mode",children:[],level:3},{value:"Manually Toggle Dark Mode",id:"manually-toggle-dark-mode",children:[],level:3}],level:2},{value:"Adjusting System UI Components",id:"adjusting-system-ui-components",children:[],level:2},{value:"Ionic Dark Theme",id:"ionic-dark-theme",children:[],level:2}],d={toc:s};function p(e){let{components:n,...i}=e;return(0,a.kt)("wrapper",(0,o.Z)({},d,i,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("title",null,"Dark Mode to Change Color Schemes and CSS Properties"),(0,a.kt)("meta",{name:"description",content:"Developers are adding dark mode CSS on native applications to support their user preferences. Read to learn more about dark color schemes for Ionic apps."})),(0,a.kt)("p",null,"Ionic makes it easy to change the themes of your app, including supporting dark color schemes. With growing support for dark mode in native apps, developers are now looking to add it to their apps to support user preferences."),(0,a.kt)("h2",{id:"using-media-queries"},"Using Media Queries"),(0,a.kt)("p",null,"The first way to enable dark mode is by using the ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme"},"CSS media query for the user's preferred color scheme"),". This media query will hook into the system setting of the user's device and apply the theme if a dark mode is enabled."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},"@media (prefers-color-scheme: dark) {\n  :root {\n    /* dark mode variables go here */\n  }\n}\n")),(0,a.kt)("p",null,"Currently, the ",(0,a.kt)("inlineCode",{parentName:"p"},"prefers-color-scheme")," media query has ",(0,a.kt)("a",{parentName:"p",href:"https://caniuse.com/#feat=prefers-color-scheme"},"limited browser support"),", so users will not be able to benefit from having the dark mode applied using this media query in certain browsers. However, the dark mode can still be applied by using a ",(0,a.kt)("a",{parentName:"p",href:"#css-class-fallback"},"CSS class fallback"),"."),(0,a.kt)("h2",{id:"css-class-fallback"},"CSS Class Fallback"),(0,a.kt)("p",null,"As a fallback method for devices that don't support the media query, the dark mode can be applied by styling a CSS selector and applying the class to the document body."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},"@media (prefers-color-scheme: dark) {\n  :root {\n    /* Dark mode variables go here */\n  }\n}\n\n/* Fallback for older browsers or manual mode */\nbody.dark {\n  /* Dark mode variables go here */\n}\n")),(0,a.kt)("p",null,"With the variables targeting the ",(0,a.kt)("inlineCode",{parentName:"p"},"body.dark")," selector, all that is needed now is to add the class to the ",(0,a.kt)("inlineCode",{parentName:"p"},"<body>")," in the app. This can be done in a variety of ways depending on the framework your app is built with."),(0,a.kt)("p",null,"Notice that the variables should be in both places in this example. We can ",(0,a.kt)("a",{parentName:"p",href:"#combining-with-javascript"},"use JavaScript")," in order to avoid setting the variables in two places."),(0,a.kt)("h2",{id:"combining-with-javascript"},"Combining with JavaScript"),(0,a.kt)("p",null,"In order to keep the CSS variables written once and avoid having to update them in multiple places, the fallback and class can be combined by using JavaScript to check the value of the ",(0,a.kt)("inlineCode",{parentName:"p"},"prefers-color-scheme")," media query and adding the ",(0,a.kt)("inlineCode",{parentName:"p"},"dark")," class if the preference is ",(0,a.kt)("inlineCode",{parentName:"p"},"dark"),". Here's what the CSS would look like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},"body.dark {\n  /* Dark mode variables go here */\n}\n")),(0,a.kt)("p",null,"Notice that the variables above are only in the ",(0,a.kt)("inlineCode",{parentName:"p"},"body.dark")," selector now, and the ",(0,a.kt)("inlineCode",{parentName:"p"},"prefers-color-scheme")," media query has been removed."),(0,a.kt)("h3",{id:"automatically-enable-dark-mode"},"Automatically Enable Dark Mode"),(0,a.kt)("p",null,"In the JavaScript, the ",(0,a.kt)("inlineCode",{parentName:"p"},"dark")," class can be added to the ",(0,a.kt)("inlineCode",{parentName:"p"},"<body>")," by checking if the document matches the media query using ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia"},"matchMedia()"),". This will enable dark mode to still work based on the user preference."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// Use matchMedia to check the user preference\nconst prefersDark = window.matchMedia('(prefers-color-scheme: dark)');\n\ntoggleDarkTheme(prefersDark.matches);\n\n// Listen for changes to the prefers-color-scheme media query\nprefersDark.addListener((mediaQuery) => toggleDarkTheme(mediaQuery.matches));\n\n// Add or remove the \"dark\" class based on if the media query matches\nfunction toggleDarkTheme(shouldAdd) {\n  document.body.classList.toggle('dark', shouldAdd);\n}\n")),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Tip: make sure to view the Codepen below in a ",(0,a.kt)("a",{parentName:"p",href:"https://caniuse.com/#feat=prefers-color-scheme"},"supported browser")," and then try changing the system preferences on your device between light & dark mode. Here's ",(0,a.kt)("a",{parentName:"p",href:"https://blogs.windows.com/windowsexperience/2016/08/08/windows-10-tip-personalize-your-pc-by-enabling-the-dark-theme/"},"how to enable dark mode on Windows 10")," and ",(0,a.kt)("a",{parentName:"p",href:"https://support.apple.com/en-us/HT208976"},"how to enable it on a Mac"),"."))),(0,a.kt)(r.Z,{preview:"false",user:"ionic",slug:"jONzJpG",height:"550px","default-tab":"js,result",mdxType:"Codepen"}),(0,a.kt)("h3",{id:"manually-toggle-dark-mode"},"Manually Toggle Dark Mode"),(0,a.kt)("p",null,"In addition to calling ",(0,a.kt)("inlineCode",{parentName:"p"},"toggleDarkTheme()")," when the app loads and when the media query changes, the ",(0,a.kt)("inlineCode",{parentName:"p"},"toggleDarkTheme()")," function could be called by the app, such as when a user changes a toggle, to switch between the light and dark themes:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// Query for the toggle that is used to change between themes\nconst toggle = document.querySelector('#themeToggle');\n\n// Listen for the toggle check/uncheck to toggle the dark class on the <body>\ntoggle.addEventListener('ionChange', (ev) => {\n  document.body.classList.toggle('dark', ev.detail.checked);\n});\n\nconst prefersDark = window.matchMedia('(prefers-color-scheme: dark)');\n\n// Listen for changes to the prefers-color-scheme media query\nprefersDark.addListener((e) => checkToggle(e.matches));\n\n// Called when the app loads\nfunction loadApp() {\n  checkToggle(prefersDark.matches);\n}\n\n// Called by the media query to check/uncheck the toggle\nfunction checkToggle(shouldCheck) {\n  toggle.checked = shouldCheck;\n}\n")),(0,a.kt)(r.Z,{preview:"false",user:"ionic",slug:"zYOpQLj",height:"600px","default-tab":"js,result",mdxType:"Codepen"}),(0,a.kt)("h2",{id:"adjusting-system-ui-components"},"Adjusting System UI Components"),(0,a.kt)("p",null,"When developing a dark theme, you may notice that certain system UI components are not adjusting to dark mode properly. To fix this you will need to specify the ",(0,a.kt)("inlineCode",{parentName:"p"},"color-scheme"),". See the ",(0,a.kt)("a",{href:"https://caniuse.com/#feat=mdn-html_elements_meta_name_color-scheme",target:"_blank"},"browser compatibility for color-scheme")," for details on cross browser support."),(0,a.kt)("p",null,"While you may be mainly using Ionic components instead of only native components, ",(0,a.kt)("inlineCode",{parentName:"p"},"color-scheme")," can also affect aspects of your application such as the scrollbar. In order to use ",(0,a.kt)("inlineCode",{parentName:"p"},"color-scheme")," you will need to add the following HTML to the ",(0,a.kt)("inlineCode",{parentName:"p"},"head")," of your application:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<meta name="color-scheme" content="light dark" />\n')),(0,a.kt)("p",null,"This allows the page to indicate which color scheme it is comfortable being rendered with. Alternatively, you can add the following CSS to do this on a per-element basis:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},"color-scheme: light dark;\n")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Default scrollbar"),(0,a.kt)("th",{parentName:"tr",align:null},"Scrollbar with ",(0,a.kt)("inlineCode",{parentName:"th"},"color-scheme")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{alt:"Application without color-scheme",src:t(38972).Z})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{alt:"Application with color-scheme",src:t(63120).Z}))))),(0,a.kt)("p",null,"For more information regarding ",(0,a.kt)("inlineCode",{parentName:"p"},"color-scheme")," please see ",(0,a.kt)("a",{parentName:"p",href:"https://web.dev/color-scheme/"},"https://web.dev/color-scheme/"),"."),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},(0,a.kt)("inlineCode",{parentName:"p"},"color-scheme")," does not apply to the keyboard. For details on how dark mode works with the keyboard, see ",(0,a.kt)("a",{parentName:"p",href:"/cn/docs/developing/keyboard#dark-mode"},"Keyboard Documentation"),"."))),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"For developers looking to customize the theme color under the status bar in Safari on iOS 15 or the toolbar in Safari on macOS, see ",(0,a.kt)("a",{parentName:"p",href:"/cn/docs/theming/advanced#theme-color-meta"},(0,a.kt)("inlineCode",{parentName:"a"},"theme-color")," Meta"),"."))),(0,a.kt)("h2",{id:"ionic-dark-theme"},"Ionic Dark Theme"),(0,a.kt)("p",null,"Ionic has a recommended theme for variables to use in order to get a dark mode based on the device running the app. It can be broken down into the following parts:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Changing the default ",(0,a.kt)("a",{parentName:"li",href:"/cn/docs/theming/colors"},"Ionic colors")," for all ",(0,a.kt)("a",{parentName:"li",href:"/cn/docs/theming/platform-styles#ionic-modes"},"modes")," to complement the dark background in the ",(0,a.kt)("inlineCode",{parentName:"li"},"body.dark")," selector."),(0,a.kt)("li",{parentName:"ol"},"Setting variables for the dark theme on ",(0,a.kt)("inlineCode",{parentName:"li"},"ios")," devices."),(0,a.kt)("li",{parentName:"ol"},"Setting variables for the dark theme on ",(0,a.kt)("inlineCode",{parentName:"li"},"md")," devices.")),(0,a.kt)("p",null,"The following code can be copied and pasted into an app to get Ionic's dark theme. We add the ",(0,a.kt)("inlineCode",{parentName:"p"},"dark")," class to the document body using JavaScript as mentioned in the ",(0,a.kt)("a",{parentName:"p",href:"#combining-with-javascript"},"combining with JavaScript")," section. The dark mode will not be enabled until the ",(0,a.kt)("inlineCode",{parentName:"p"},"dark")," class is added to the document body."),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"For more information on the variables that are being changed, including other variables that can be added to further customize, see ",(0,a.kt)("a",{parentName:"p",href:"/cn/docs/theming/themes"},"Themes"),"."))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},"/*\n * Dark Colors\n * -------------------------------------------\n */\n\nbody.dark {\n  --ion-color-primary: #428cff;\n  --ion-color-primary-rgb: 66, 140, 255;\n  --ion-color-primary-contrast: #ffffff;\n  --ion-color-primary-contrast-rgb: 255, 255, 255;\n  --ion-color-primary-shade: #3a7be0;\n  --ion-color-primary-tint: #5598ff;\n\n  --ion-color-secondary: #50c8ff;\n  --ion-color-secondary-rgb: 80, 200, 255;\n  --ion-color-secondary-contrast: #ffffff;\n  --ion-color-secondary-contrast-rgb: 255, 255, 255;\n  --ion-color-secondary-shade: #46b0e0;\n  --ion-color-secondary-tint: #62ceff;\n\n  --ion-color-tertiary: #6a64ff;\n  --ion-color-tertiary-rgb: 106, 100, 255;\n  --ion-color-tertiary-contrast: #ffffff;\n  --ion-color-tertiary-contrast-rgb: 255, 255, 255;\n  --ion-color-tertiary-shade: #5d58e0;\n  --ion-color-tertiary-tint: #7974ff;\n\n  --ion-color-success: #2fdf75;\n  --ion-color-success-rgb: 47, 223, 117;\n  --ion-color-success-contrast: #000000;\n  --ion-color-success-contrast-rgb: 0, 0, 0;\n  --ion-color-success-shade: #29c467;\n  --ion-color-success-tint: #44e283;\n\n  --ion-color-warning: #ffd534;\n  --ion-color-warning-rgb: 255, 213, 52;\n  --ion-color-warning-contrast: #000000;\n  --ion-color-warning-contrast-rgb: 0, 0, 0;\n  --ion-color-warning-shade: #e0bb2e;\n  --ion-color-warning-tint: #ffd948;\n\n  --ion-color-danger: #ff4961;\n  --ion-color-danger-rgb: 255, 73, 97;\n  --ion-color-danger-contrast: #ffffff;\n  --ion-color-danger-contrast-rgb: 255, 255, 255;\n  --ion-color-danger-shade: #e04055;\n  --ion-color-danger-tint: #ff5b71;\n\n  --ion-color-dark: #f4f5f8;\n  --ion-color-dark-rgb: 244, 245, 248;\n  --ion-color-dark-contrast: #000000;\n  --ion-color-dark-contrast-rgb: 0, 0, 0;\n  --ion-color-dark-shade: #d7d8da;\n  --ion-color-dark-tint: #f5f6f9;\n\n  --ion-color-medium: #989aa2;\n  --ion-color-medium-rgb: 152, 154, 162;\n  --ion-color-medium-contrast: #000000;\n  --ion-color-medium-contrast-rgb: 0, 0, 0;\n  --ion-color-medium-shade: #86888f;\n  --ion-color-medium-tint: #a2a4ab;\n\n  --ion-color-light: #222428;\n  --ion-color-light-rgb: 34, 36, 40;\n  --ion-color-light-contrast: #ffffff;\n  --ion-color-light-contrast-rgb: 255, 255, 255;\n  --ion-color-light-shade: #1e2023;\n  --ion-color-light-tint: #383a3e;\n}\n\n/*\n * iOS Dark Theme\n * -------------------------------------------\n */\n\n.ios body.dark {\n  --ion-background-color: #000000;\n  --ion-background-color-rgb: 0, 0, 0;\n\n  --ion-text-color: #ffffff;\n  --ion-text-color-rgb: 255, 255, 255;\n\n  --ion-color-step-50: #0d0d0d;\n  --ion-color-step-100: #1a1a1a;\n  --ion-color-step-150: #262626;\n  --ion-color-step-200: #333333;\n  --ion-color-step-250: #404040;\n  --ion-color-step-300: #4d4d4d;\n  --ion-color-step-350: #595959;\n  --ion-color-step-400: #666666;\n  --ion-color-step-450: #737373;\n  --ion-color-step-500: #808080;\n  --ion-color-step-550: #8c8c8c;\n  --ion-color-step-600: #999999;\n  --ion-color-step-650: #a6a6a6;\n  --ion-color-step-700: #b3b3b3;\n  --ion-color-step-750: #bfbfbf;\n  --ion-color-step-800: #cccccc;\n  --ion-color-step-850: #d9d9d9;\n  --ion-color-step-900: #e6e6e6;\n  --ion-color-step-950: #f2f2f2;\n\n  --ion-item-background: #000000;\n\n  --ion-card-background: #1c1c1d;\n}\n\n.ios body.dark ion-modal {\n  --ion-background-color: var(--ion-color-step-100);\n  --ion-toolbar-background: var(--ion-color-step-150);\n  --ion-toolbar-border-color: var(--ion-color-step-250);\n  --ion-item-background: var(--ion-color-step-150);\n}\n\n/*\n * Material Design Dark Theme\n * -------------------------------------------\n */\n\n.md body.dark {\n  --ion-background-color: #121212;\n  --ion-background-color-rgb: 18, 18, 18;\n\n  --ion-text-color: #ffffff;\n  --ion-text-color-rgb: 255, 255, 255;\n\n  --ion-border-color: #222222;\n\n  --ion-color-step-50: #1e1e1e;\n  --ion-color-step-100: #2a2a2a;\n  --ion-color-step-150: #363636;\n  --ion-color-step-200: #414141;\n  --ion-color-step-250: #4d4d4d;\n  --ion-color-step-300: #595959;\n  --ion-color-step-350: #656565;\n  --ion-color-step-400: #717171;\n  --ion-color-step-450: #7d7d7d;\n  --ion-color-step-500: #898989;\n  --ion-color-step-550: #949494;\n  --ion-color-step-600: #a0a0a0;\n  --ion-color-step-650: #acacac;\n  --ion-color-step-700: #b8b8b8;\n  --ion-color-step-750: #c4c4c4;\n  --ion-color-step-800: #d0d0d0;\n  --ion-color-step-850: #dbdbdb;\n  --ion-color-step-900: #e7e7e7;\n  --ion-color-step-950: #f3f3f3;\n\n  --ion-item-background: #1e1e1e;\n\n  --ion-toolbar-background: #1f1f1f;\n\n  --ion-tab-bar-background: #1f1f1f;\n\n  --ion-card-background: #1e1e1e;\n}\n")))}p.isMDXComponent=!0},63120:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/color-scheme-dark-dc6ce3834a396fffd335f1a9f6636040.png"},38972:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/color-scheme-light-0d99e3df2e3f3275a72e5c62b8efd0ad.png"}}]);