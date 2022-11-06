"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[96482],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>s});var l=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function r(t,e){if(null==t)return{};var n,l,i=function(t,e){if(null==t)return{};var n,l,i={},a=Object.keys(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var p=l.createContext({}),d=function(t){var e=l.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=d(t.components);return l.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},k=l.forwardRef((function(t,e){var n=t.components,i=t.mdxType,a=t.originalType,p=t.parentName,c=r(t,["components","mdxType","originalType","parentName"]),k=d(n),s=i,m=k["".concat(p,".").concat(s)]||k[s]||u[s]||a;return n?l.createElement(m,o(o({ref:e},c),{},{components:n})):l.createElement(m,o({ref:e},c))}));function s(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var a=n.length,o=new Array(a);o[0]=k;var r={};for(var p in e)hasOwnProperty.call(e,p)&&(r[p]=e[p]);r.originalType=t,r.mdxType="string"==typeof t?t:i,o[1]=r;for(var d=2;d<a;d++)o[d]=n[d];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}k.displayName="MDXCreateElement"},4215:(t,e,n)=>{n.r(e),n.d(e,{contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>r,toc:()=>p});var l=n(87462),i=(n(67294),n(3905));const a={title:"ionic package build",sidebar_label:"package build"},o=void 0,r={unversionedId:"cli/commands/package-build",id:"cli/commands/package-build",isDocsHomePage:!1,title:"ionic package build",description:"ionic package build: Create a Package Build on Appflow | Ionic",source:"@site/docs/cli/commands/package-build.md",sourceDirName:"cli/commands",slug:"/cli/commands/package-build",permalink:"/docs/cli/commands/package-build",editUrl:"https://github.com/ionic-team/ionic-cli/edit/develop/packages/@ionic/cli/src/commands/package/build.ts",tags:[],version:"current",frontMatter:{title:"ionic package build",sidebar_label:"package build"},sidebar:"cli",previous:{title:"logout",permalink:"/docs/cli/commands/logout"},next:{title:"package deploy",permalink:"/docs/cli/commands/package-deploy"}},p=[{value:"Examples",id:"examples",children:[],level:2},{value:"Inputs",id:"inputs",children:[],level:2},{value:"Options",id:"options",children:[],level:2},{value:"Advanced Options",id:"advanced-options",children:[],level:2}],d={toc:p};function c(t){let{components:e,...n}=t;return(0,i.kt)("wrapper",(0,l.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("head",null,(0,i.kt)("title",null,"ionic package build: Create a Package Build on Appflow | Ionic"),(0,i.kt)("meta",{name:"description",content:"The ionic package build command creates a package build on Appflow. If it is successful, it downloads the created app package file in the current directory."})),(0,i.kt)("p",null,"Create a package build on Appflow"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ ionic package build [options]\n")),(0,i.kt)("p",null,"This command creates a package build on Appflow. While the build is running, it prints the remote build log to the terminal. If the build is successful, it downloads the created app package file in the current directory. Downloading build artifacts can be skipped by supplying the flag ",(0,i.kt)("inlineCode",{parentName:"p"},"skip-download"),"."),(0,i.kt)("p",null,"Apart from ",(0,i.kt)("inlineCode",{parentName:"p"},"--commit"),", every option can be specified using the full name setup within the ",(0,i.kt)("a",{parentName:"p",href:"https://dashboard.ionicframework.com"},"Dashboard"),"."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"--signing-certificate")," option is mandatory for any iOS build but not for Android debug builds."),(0,i.kt)("p",null,"Customizing the build:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"--environment")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"--native-config")," options can be used to customize the groups of values exposed to the build."),(0,i.kt)("li",{parentName:"ul"},"Override the preferred platform with ",(0,i.kt)("inlineCode",{parentName:"li"},"--build-stack"),". This is useful for building older iOS apps.")),(0,i.kt)("p",null,"Deploying the build to an App Store:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"--destination")," option can be used to deliver the app created by the build to the configured App Store. This can be used only together with build type ",(0,i.kt)("inlineCode",{parentName:"li"},"release")," for Android and build types ",(0,i.kt)("inlineCode",{parentName:"li"},"app-store")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"enterprise")," for iOS.")),(0,i.kt)("p",null,"Downloading build artifacts:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"By default once the build is complete, all artifacts are downloaded for the selected platform. ",(0,i.kt)("inlineCode",{parentName:"li"},"aab")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"apk")," for Android ",(0,i.kt)("inlineCode",{parentName:"li"},"ipa")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"dsym")," for iOS."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"--artifact-type")," option can be used to limit artifact downloads to only of that type. For instance, with Android, you can specify ",(0,i.kt)("inlineCode",{parentName:"li"},"aab")," if you do not wish to download ",(0,i.kt)("inlineCode",{parentName:"li"},"apk"),".")),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'$ ionic package build android debug\n$ ionic package build ios development --signing-certificate="iOS Signing Certificate Name"\n$ ionic package build android debug --environment="My Custom Environment Name"\n$ ionic package build android debug --native-config="My Custom Native Config Name"\n$ ionic package build android debug --commit=2345cd3305a1cf94de34e93b73a932f25baac77c\n$ ionic package build android debug --artifact-type=aab\n$ ionic package build android debug --skip-download\n$ ionic package build android debug --aab-name="my-app-prod.aab" --apk-name="my-app-prod.apk"\n$ ionic package build ios development --signing-certificate="iOS Signing Certificate Name" --build-stack="iOS - Xcode 9"\n$ ionic package build ios development --signing-certificate="iOS Signing Certificate Name" --ipa-name=my_custom_file_name.ipa\n$ ionic package build ios app-store --signing-certificate="iOS Signing Certificate Name" --destination="Apple App Store Destination"\n')),(0,i.kt)("h2",{id:"inputs"},"Inputs"),(0,i.kt)("table",{className:"reference-table"},(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",{colSpan:"2"},(0,i.kt)("h3",null,"platform")))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Description"),(0,i.kt)("td",null,(0,i.kt)("p",null,"The platform to package (",(0,i.kt)("code",null,"android"),", ",(0,i.kt)("code",null,"ios"),")")))),(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",{colSpan:"2"},(0,i.kt)("h3",null,"type")))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Description"),(0,i.kt)("td",null,(0,i.kt)("p",null,"The build type (",(0,i.kt)("code",null,"debug"),", ",(0,i.kt)("code",null,"release"),", ",(0,i.kt)("code",null,"development"),", ",(0,i.kt)("code",null,"ad-hoc"),", ",(0,i.kt)("code",null,"app-store"),", ",(0,i.kt)("code",null,"enterprise"),")"))))),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("table",{className:"reference-table"},(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",{colSpan:"2"},(0,i.kt)("h3",null,(0,i.kt)("a",{href:"#option-signing-certificate",id:"option-signing-certificate"},"--signing-certificate",(0,i.kt)("span",{class:"option-spec"}," =<name>")))))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Description"),(0,i.kt)("td",null,(0,i.kt)("p",null,"Signing certificate")))),(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",{colSpan:"2"},(0,i.kt)("h3",null,(0,i.kt)("a",{href:"#option-environment",id:"option-environment"},"--environment",(0,i.kt)("span",{class:"option-spec"}," =<name>")))))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Description"),(0,i.kt)("td",null,(0,i.kt)("p",null,"The group of environment variables exposed to your build")))),(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",{colSpan:"2"},(0,i.kt)("h3",null,(0,i.kt)("a",{href:"#option-native-config",id:"option-native-config"},"--native-config",(0,i.kt)("span",{class:"option-spec"}," =<name>")))))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Description"),(0,i.kt)("td",null,(0,i.kt)("p",null,"The group of native config variables exposed to your build")))),(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",{colSpan:"2"},(0,i.kt)("h3",null,(0,i.kt)("a",{href:"#option-destination",id:"option-destination"},"--destination",(0,i.kt)("span",{class:"option-spec"}," =<name>")))))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Description"),(0,i.kt)("td",null,(0,i.kt)("p",null,"The configuration to deploy the build artifact to the app store")))),(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",{colSpan:"2"},(0,i.kt)("h3",null,(0,i.kt)("a",{href:"#option-build-file-name",id:"option-build-file-name"},"--build-file-name",(0,i.kt)("span",{class:"option-spec"}," =<name>")))))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Description"),(0,i.kt)("td",null,(0,i.kt)("p",null,"The name for the downloaded build file")))),(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",{colSpan:"2"},(0,i.kt)("h3",null,(0,i.kt)("a",{href:"#option-artifact-type",id:"option-artifact-type"},"--artifact-type",(0,i.kt)("span",{class:"option-spec"}," =<name>")))))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Description"),(0,i.kt)("td",null,(0,i.kt)("p",null,"The artifact type (",(0,i.kt)("code",null,"aab"),", ",(0,i.kt)("code",null,"apk"),", ",(0,i.kt)("code",null,"ipa"),", ",(0,i.kt)("code",null,"dsym"),")")))),(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",{colSpan:"2"},(0,i.kt)("h3",null,(0,i.kt)("a",{href:"#option-skip-download",id:"option-skip-download"},"--skip-download"))))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Description"),(0,i.kt)("td",null,(0,i.kt)("p",null,"Skip downloading build artifacts after command succeeds."))))),(0,i.kt)("h2",{id:"advanced-options"},"Advanced Options"),(0,i.kt)("table",{className:"reference-table"},(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",{colSpan:"2"},(0,i.kt)("h3",null,(0,i.kt)("a",{href:"#option-commit",id:"option-commit"},"--commit",(0,i.kt)("span",{class:"option-spec"}," =<sha1>")))))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Description"),(0,i.kt)("td",null,(0,i.kt)("div",null,(0,i.kt)("p",null,"Commit (defaults to HEAD)"))))),(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",{colSpan:"2"},(0,i.kt)("h3",null,(0,i.kt)("a",{href:"#option-build-stack",id:"option-build-stack"},"--build-stack",(0,i.kt)("span",{class:"option-spec"}," =<name>")))))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Description"),(0,i.kt)("td",null,(0,i.kt)("div",null,(0,i.kt)("p",null,"Target platform (",(0,i.kt)("code",null,'"Android"'),", ",(0,i.kt)("code",null,'"iOS - Xcode 11 (Preferred)"'),", ",(0,i.kt)("code",null,'"iOS - Xcode 10"'),")"))))),(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",{colSpan:"2"},(0,i.kt)("h3",null,(0,i.kt)("a",{href:"#option-ipa-name",id:"option-ipa-name"},"--ipa-name",(0,i.kt)("span",{class:"option-spec"}," =<name>")))))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Description"),(0,i.kt)("td",null,(0,i.kt)("div",null,(0,i.kt)("p",null,"The name for the downloaded ipa file"))))),(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",{colSpan:"2"},(0,i.kt)("h3",null,(0,i.kt)("a",{href:"#option-dsym-name",id:"option-dsym-name"},"--dsym-name",(0,i.kt)("span",{class:"option-spec"}," =<name>")))))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Description"),(0,i.kt)("td",null,(0,i.kt)("div",null,(0,i.kt)("p",null,"The name for the downloaded dsym file"))))),(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",{colSpan:"2"},(0,i.kt)("h3",null,(0,i.kt)("a",{href:"#option-apk-name",id:"option-apk-name"},"--apk-name",(0,i.kt)("span",{class:"option-spec"}," =<name>")))))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Description"),(0,i.kt)("td",null,(0,i.kt)("div",null,(0,i.kt)("p",null,"The name for the downloaded apk file"))))),(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",{colSpan:"2"},(0,i.kt)("h3",null,(0,i.kt)("a",{href:"#option-aab-name",id:"option-aab-name"},"--aab-name",(0,i.kt)("span",{class:"option-spec"}," =<name>")))))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Description"),(0,i.kt)("td",null,(0,i.kt)("div",null,(0,i.kt)("p",null,"The name for the downloaded aab file")))))))}c.isMDXComponent=!0}}]);