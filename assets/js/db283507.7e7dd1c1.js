"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[49806],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=p(n),m=i,u=h["".concat(s,".").concat(m)]||h[m]||d[m]||a;return n?o.createElement(u,r(r({ref:t},c),{},{components:n})):o.createElement(u,r({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var p=2;p<a;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},98081:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>r,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var o=n(87462),i=(n(67294),n(3905));const a={sidebar_label:"Adding Mobile"},r="Adding Mobile",l={unversionedId:"react/your-first-app/adding-mobile",id:"version-v5/react/your-first-app/adding-mobile",isDocsHomePage:!1,title:"Adding Mobile",description:"Our photo gallery app won\u2019t be complete until it runs on iOS, Android, and the web - all using one codebase. All it takes is some small logic changes to support mobile platforms, installing some native tooling, then running the app on a device. Let\u2019s go!",source:"@site/versioned_docs/version-v5/react/your-first-app/5-adding-mobile.md",sourceDirName:"react/your-first-app",slug:"/react/your-first-app/adding-mobile",permalink:"/docs/v5/react/your-first-app/adding-mobile",editUrl:"https://github.com/ionic-team/ionic-docs/edit/main/versioned_docs/version-v5/react/your-first-app/5-adding-mobile.md",tags:[],version:"v5",sidebarPosition:5,frontMatter:{sidebar_label:"Adding Mobile"},sidebar:"version-v5/docs",previous:{title:"Loading Photos",permalink:"/docs/v5/react/your-first-app/loading-photos"},next:{title:"Deploying Mobile",permalink:"/docs/v5/react/your-first-app/deploying-mobile"}},s=[{value:"Platform-specific Logic",id:"platform-specific-logic",children:[],level:2}],p={toc:s};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"adding-mobile"},"Adding Mobile"),(0,i.kt)("p",null,"Our photo gallery app won\u2019t be complete until it runs on iOS, Android, and the web - all using one codebase. All it takes is some small logic changes to support mobile platforms, installing some native tooling, then running the app on a device. Let\u2019s go!"),(0,i.kt)("p",null,"Let\u2019s start with making some small code changes - then our app will \u201cjust work\u201d when we deploy it to a device."),(0,i.kt)("h2",{id:"platform-specific-logic"},"Platform-specific Logic"),(0,i.kt)("p",null,"First, we\u2019ll update the photo saving functionality to support mobile. In the ",(0,i.kt)("inlineCode",{parentName:"p"},"savePicture")," function, check which platform the app is running on. If it\u2019s \u201chybrid\u201d (Capacitor or Cordova, the two native runtimes), then read the photo file into base64 format using the ",(0,i.kt)("inlineCode",{parentName:"p"},"readFile")," method. Also, return the complete file path to the photo using the Filesystem API. When setting the ",(0,i.kt)("inlineCode",{parentName:"p"},"webviewPath"),", use the special ",(0,i.kt)("inlineCode",{parentName:"p"},"Capacitor.convertFileSrc")," method (",(0,i.kt)("a",{parentName:"p",href:"https://ionicframework.com/docs/core-concepts/webview#file-protocol"},"details here"),"). Otherwise, use the same logic as before when running the app on the web."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"const savePicture = async (photo: Photo, fileName: string): Promise<UserPhoto> => {\n  let base64Data: string;\n  // \"hybrid\" will detect Cordova or Capacitor;\n  if (isPlatform('hybrid')) {\n    const file = await Filesystem.readFile({\n      path: photo.path!,\n    });\n    base64Data = file.data;\n  } else {\n    base64Data = await base64FromPath(photo.webPath!);\n  }\n  const savedFile = await Filesystem.writeFile({\n    path: fileName,\n    data: base64Data,\n    directory: Directory.Data,\n  });\n\n  if (isPlatform('hybrid')) {\n    // Display the new image by rewriting the 'file://' path to HTTP\n    // Details: https://ionicframework.com/docs/building/webview#file-protocol\n    return {\n      filepath: savedFile.uri,\n      webviewPath: Capacitor.convertFileSrc(savedFile.uri),\n    };\n  } else {\n    // Use webPath to display the new image instead of base64 since it's\n    // already loaded into memory\n    return {\n      filepath: fileName,\n      webviewPath: photo.webPath,\n    };\n  }\n};\n")),(0,i.kt)("p",null,"Next, add a new bit of logic in the ",(0,i.kt)("inlineCode",{parentName:"p"},"loadSaved")," function. On mobile, we can directly point to each photo file on the Filesystem and display them automatically. On the web, however, we must read each image from the Filesystem into base64 format. This is because the Filesystem API uses ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API"},"IndexedDB")," under the hood. Update the ",(0,i.kt)("inlineCode",{parentName:"p"},"loadSaved")," function inside of ",(0,i.kt)("inlineCode",{parentName:"p"},"useEffect")," to:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"const loadSaved = async () => {\n  const { value } = await Preferences.get({ key: PHOTO_STORAGE });\n\n  const photosInPreferences = (value ? JSON.parse(value) : []) as UserPhoto[];\n  // If running on the web...\n  if (!isPlatform('hybrid')) {\n    for (let photo of photosInPreferences) {\n      const file = await Filesystem.readFile({\n        path: photo.filepath,\n        directory: Directory.Data,\n      });\n      // Web platform only: Load the photo as base64 data\n      photo.webviewPath = `data:image/jpeg;base64,${file.data}`;\n    }\n  }\n  setPhotos(photosInPreferences);\n};\n")),(0,i.kt)("p",null,"Our Photo Gallery now consists of one codebase that runs on the web, Android, and iOS. Next up, the part you\u2019ve been waiting for - deploying the app to a device."))}c.isMDXComponent=!0}}]);