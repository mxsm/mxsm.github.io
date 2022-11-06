"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[90355],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),s=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(a),g=r,u=c["".concat(d,".").concat(g)]||c[g]||m[g]||o;return a?n.createElement(u,i(i({ref:t},p),{},{components:a})):n.createElement(u,i({ref:t},p))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=c;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},76521:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(86010),r=a(67294);const o="codeColor_vmrr",i="codeColorBlock_riJK",l="codeColorValue_a-Hk";const d=function(e){let{color:t,...a}=e;return r.createElement("div",{className:(0,n.Z)(o,a.className,"code-color")},r.createElement("span",{className:i,style:{backgroundColor:t,...a.style}}),a.children&&r.createElement("code",{className:l},a.children))}},9196:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>d,toc:()=>s});var n=a(87462),r=(a(67294),a(3905)),o=a(76521);const i={sidebar_label:"Advanced",initialTab:"preview",inlineHtmlPreviews:!0},l="Advanced Theming",d={unversionedId:"theming/advanced",id:"version-v5/theming/advanced",isDocsHomePage:!1,title:"Advanced Theming",description:"CSS-based theming enables apps to customize the colors quickly by loading a CSS file or changing a few CSS property values.",source:"@site/versioned_docs/version-v5/theming/advanced.md",sourceDirName:"theming",slug:"/theming/advanced",permalink:"/docs/v5/theming/advanced",editUrl:"https://github.com/ionic-team/ionic-docs/edit/main/versioned_docs/version-v5/theming/advanced.md",tags:[],version:"v5",frontMatter:{sidebar_label:"Advanced",initialTab:"preview",inlineHtmlPreviews:!0},sidebar:"version-v5/docs",previous:{title:"Dark Mode",permalink:"/docs/v5/theming/dark-mode"},next:{title:"Color Generator",permalink:"/docs/v5/theming/color-generator"}},s=[{value:"Globals",id:"globals",children:[{value:"Application Variables",id:"application-variables",children:[],level:3},{value:"Grid Variables",id:"grid-variables",children:[],level:3}],level:2},{value:"Known Limitations",id:"known-limitations",children:[{value:"The Alpha Problem",id:"the-alpha-problem",children:[],level:3},{value:"Variables in Media Queries",id:"variables-in-media-queries",children:[],level:3},{value:"Modifying CSS Color Variables",id:"modifying-css-color-variables",children:[],level:3}],level:2}],p={toc:s};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"advanced-theming"},"Advanced Theming"),(0,r.kt)("p",null,"CSS-based theming enables apps to customize the colors quickly by loading a CSS file or changing a few CSS property values."),(0,r.kt)("h2",{id:"globals"},"Globals"),(0,r.kt)("p",null,"While the application and stepped variables in the themes section are useful for changing the colors of an application, often times there is a need for variables that are used in multiple components. The following variables are shared across components to change global padding settings and more."),(0,r.kt)("h3",{id:"application-variables"},"Application Variables"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--ion-font-family")),(0,r.kt)("td",{parentName:"tr",align:null},"Font family of the app")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--ion-statusbar-padding")),(0,r.kt)("td",{parentName:"tr",align:null},"Statusbar padding top of the app")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--ion-safe-area-top")),(0,r.kt)("td",{parentName:"tr",align:null},"Adjust the safe area inset top of the app")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--ion-safe-area-right")),(0,r.kt)("td",{parentName:"tr",align:null},"Adjust the safe area inset right of the app")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--ion-safe-area-bottom")),(0,r.kt)("td",{parentName:"tr",align:null},"Adjust the safe area inset bottom of the app")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--ion-safe-area-left")),(0,r.kt)("td",{parentName:"tr",align:null},"Adjust the safe area inset left of the app")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--ion-margin")),(0,r.kt)("td",{parentName:"tr",align:null},"Adjust the margin of the ",(0,r.kt)("a",{parentName:"td",href:"/docs/v5/layout/css-utilities#element-margin"},"Margin attributes"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--ion-padding")),(0,r.kt)("td",{parentName:"tr",align:null},"Adjust the padding of the ",(0,r.kt)("a",{parentName:"td",href:"/docs/v5/layout/css-utilities#element-padding"},"Padding attributes"))))),(0,r.kt)("h3",{id:"grid-variables"},"Grid Variables"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--ion-grid-columns")),(0,r.kt)("td",{parentName:"tr",align:null},"Number of columns in the grid")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--ion-grid-padding-xs")),(0,r.kt)("td",{parentName:"tr",align:null},"Padding of the grid for xs breakpoints")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--ion-grid-padding-sm")),(0,r.kt)("td",{parentName:"tr",align:null},"Padding of the grid for sm breakpoints")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--ion-grid-padding-md")),(0,r.kt)("td",{parentName:"tr",align:null},"Padding of the grid for md breakpoints")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--ion-grid-padding-lg")),(0,r.kt)("td",{parentName:"tr",align:null},"Padding of the grid for lg breakpoints")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--ion-grid-padding-xl")),(0,r.kt)("td",{parentName:"tr",align:null},"Padding of the grid for xl breakpoints")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--ion-grid-column-padding-xs")),(0,r.kt)("td",{parentName:"tr",align:null},"Padding of the grid columns for xs breakpoints")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--ion-grid-column-padding-sm")),(0,r.kt)("td",{parentName:"tr",align:null},"Padding of the grid columns for sm breakpoints")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--ion-grid-column-padding-md")),(0,r.kt)("td",{parentName:"tr",align:null},"Padding of the grid columns for md breakpoints")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--ion-grid-column-padding-lg")),(0,r.kt)("td",{parentName:"tr",align:null},"Padding of the grid columns for lg breakpoints")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--ion-grid-column-padding-xl")),(0,r.kt)("td",{parentName:"tr",align:null},"Padding of the grid columns for xl breakpoints")))),(0,r.kt)("h2",{id:"known-limitations"},"Known Limitations"),(0,r.kt)("h3",{id:"the-alpha-problem"},"The Alpha Problem"),(0,r.kt)("p",null,"There is not yet full ",(0,r.kt)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#Browser_compatibility",target:"_blank"},"browser support")," for alpha use of a hex color. The ",(0,r.kt)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba()",target:"_blank"},"rgba()")," function only accepts a value in ",(0,r.kt)("inlineCode",{parentName:"p"},"R, G, B, A")," (Red, Green, Blue, Alpha) format. The following code shows examples of correct and incorrect values passed to ",(0,r.kt)("inlineCode",{parentName:"p"},"rgba()"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},"/* These examples use the same color: blueviolet. */\n.broken {\n  --violet: #8a2be2;\n\n  /* rgba(#8a2be2, .5) */\n  color: rgba(var(--violet), 0.5); /* ERROR! Doesn't support hex. */\n}\n\n.working {\n  --violet-rgb: 138, 43, 226;\n\n  /* rgba(138, 43, 226, .5) */\n  color: rgba(var(--violet-rgb), 0.5); /* WORKS! */\n}\n")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"See the ",(0,r.kt)("a",{parentName:"p",href:"/docs/v5/theming/css-variables"},"CSS Variables")," section for more information on how to get and set CSS variables."))),(0,r.kt)("p",null,"Ionic uses colors with an opacity (alpha) in several components. In order for this to work, those properties must be provided in RGB format. When changing any of the properties that have a variation ending in ",(0,r.kt)("inlineCode",{parentName:"p"},"-rgb"),", it is important they are also provided in a comma separated format ",(0,r.kt)("strong",{parentName:"p"},"without parentheses"),". Below are some examples for changing text and background color."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},":root {\n  /* These examples use the same color: sienna. */\n  --ion-text-color: #a0522d;\n  --ion-text-color-rgb: 160, 82, 45;\n\n  /* These examples use the same color: lightsteelblue. */\n  --ion-background-color: #b0c4de;\n  --ion-background-color-rgb: 176, 196, 222;\n}\n")),(0,r.kt)("p",null,"Note that the RGB formatted colors are the exact same color as the hex properties, but can now be used with ",(0,r.kt)("inlineCode",{parentName:"p"},"rgba()"),". For example, ",(0,r.kt)("inlineCode",{parentName:"p"},"--ion-text-color-rgb")," can now be used in the following way"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},"body {\n  color: rgba(var(--ion-text-color-rgb), 0.25);\n}\n")),(0,r.kt)("h3",{id:"variables-in-media-queries"},"Variables in Media Queries"),(0,r.kt)("p",null,"CSS variables in ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries"},"media queries")," are not currently supported, but there are open drafts to add ",(0,r.kt)("a",{parentName:"p",href:"https://drafts.csswg.org/mediaqueries-5/#custom-mq"},"custom media queries")," and ",(0,r.kt)("a",{parentName:"p",href:"https://drafts.csswg.org/css-env-1/"},"custom environment variables")," that would solve this problem! However, with the current state of support, the following will ",(0,r.kt)("strong",{parentName:"p"},"not")," work:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},":root {\n  --breakpoint: 600px;\n}\n\n@media (min-width: var(--breakpoint)) {\n  /* Doesn't work :( */\n}\n")),(0,r.kt)("h3",{id:"modifying-css-color-variables"},"Modifying CSS Color Variables"),(0,r.kt)("p",null,"While it is possible to easily alter a color in Sass using its built-in functions, it is currently not as easy to modify colors set in CSS Variables. This can be accomplished in CSS by splitting the ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Glossary/RGB"},"RGB")," or ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/HSL_and_HSV"},"HSL")," channels and modifying each value, but it is complex and has missing functionality."),(0,r.kt)("p",null,"What exactly does this mean? Basically, using a CSS preprocessor, such as Sass, allows us to use functions to manipulate a single color. For example, we can create the following colors in Sass:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scss"},"// Background color, shade, and tint\n$background: #3880ff;\n$background-shade: mix(#000, $background, 12%);\n$background-tint: mix(#fff, $background, 10%);\n\n// Text color, darker and lighter\n$text: #444;\n$text-darker: darken($text, 15);\n$text-lighter: lighten($text, 15);\n")),(0,r.kt)("p",null,"After running through the Sass compiler, the colors will have the following values:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Variable"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$background")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(o.Z,{color:"#3880ff",mdxType:"CodeColor"},"#3880ff"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$background-shade")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(o.Z,{color:"#3171e0",mdxType:"CodeColor"},"#3171e0"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$background-tint")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(o.Z,{color:"#4c8dff",mdxType:"CodeColor"},"#4c8dff"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$text")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(o.Z,{color:"#444444",mdxType:"CodeColor"},"#444444"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$text-darker")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(o.Z,{color:"#1e1e1e",mdxType:"CodeColor"},"#1e1e1e"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$text-lighter")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(o.Z,{color:"#6a6a6a",mdxType:"CodeColor"},"#6a6a6a"))))),(0,r.kt)("p",null,"However, because CSS variables can be set at runtime and are more dynamic, it is not currently possible to manipulate them using a simple function."),(0,r.kt)("p",null,"This is normally not a problem, but when an application needs to have dynamic theming it presents issues. In Ionic, this is the reason that there are ",(0,r.kt)("a",{parentName:"p",href:"/docs/v5/theming/colors#layered-colors"},"variations to each color"),", and it is also why ",(0,r.kt)("a",{parentName:"p",href:"/docs/v5/theming/themes#stepped-colors"},"stepped colors")," are necessary for theming."),(0,r.kt)("p",null,"There are drafts and issues discussing ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/w3c/csswg-drafts/issues/3187"},"color modification proposals")," that would make this possible."))}m.isMDXComponent=!0}}]);