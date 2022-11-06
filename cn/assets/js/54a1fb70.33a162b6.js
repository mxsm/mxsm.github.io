"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[60911],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>m});var n=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(o),m=a,d=u["".concat(l,".").concat(m)]||u[m]||h[m]||r;return o?n.createElement(d,s(s({ref:t},c),{},{components:o})):n.createElement(d,s({ref:t},c))}));function m(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,s=new Array(r);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<r;p++)s[p]=o[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},77331:(e,t,o)=>{o.r(t),o.d(t,{contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var n=o(87462),a=(o(67294),o(3905));const r={sidebar_label:"Saving Photos"},s="Saving Photos to the Filesystem",i={unversionedId:"vue/your-first-app/saving-photos",id:"vue/your-first-app/saving-photos",isDocsHomePage:!1,title:"Saving Photos to the Filesystem",description:"We\u2019re now able to take multiple photos and display them in a photo gallery on the second tab of our app. These photos, however, are not currently being stored permanently, so when the app is closed, they will be lost.",source:"@site/docs/vue/your-first-app/3-saving-photos.md",sourceDirName:"vue/your-first-app",slug:"/vue/your-first-app/saving-photos",permalink:"/cn/docs/vue/your-first-app/saving-photos",editUrl:"https://crowdin.com/project/ionic-docs",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"Saving Photos"},sidebar:"docs",previous:{title:"Taking Photos",permalink:"/cn/docs/vue/your-first-app/taking-photos"},next:{title:"Loading Photos",permalink:"/cn/docs/vue/your-first-app/loading-photos"}},l=[{value:"Filesystem API",id:"filesystem-api",children:[],level:2}],p={toc:l};function c(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"saving-photos-to-the-filesystem"},"Saving Photos to the Filesystem"),(0,a.kt)("p",null,"We\u2019re now able to take multiple photos and display them in a photo gallery on the second tab of our app. These photos, however, are not currently being stored permanently, so when the app is closed, they will be lost."),(0,a.kt)("h2",{id:"filesystem-api"},"Filesystem API"),(0,a.kt)("p",null,"Fortunately, saving them to the filesystem only takes a few steps. Begin by opening the ",(0,a.kt)("inlineCode",{parentName:"p"},"usePhotoGallery")," function (",(0,a.kt)("inlineCode",{parentName:"p"},"src/composables/usePhotoGallery.ts"),"), and get access to the ",(0,a.kt)("inlineCode",{parentName:"p"},"writeFile")," method from the ",(0,a.kt)("inlineCode",{parentName:"p"},"Filesystem")," class:"),(0,a.kt)("p",null,"Next, create a couple of new functions. The Filesystem API requires that files written to disk are passed in as base64 data, so this helper function will be used in a moment to assist with that:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const convertBlobToBase64 = (blob: Blob) =>\n  new Promise((resolve, reject) => {\n    const reader = new FileReader();\n    reader.onerror = reject;\n    reader.onload = () => {\n      resolve(reader.result);\n    };\n    reader.readAsDataURL(blob);\n  });\n")),(0,a.kt)("p",null,"Next, add a function to save the photo to the filesystem. We pass in the ",(0,a.kt)("inlineCode",{parentName:"p"},"photo")," object, which represents the newly captured device photo, as well as the fileName, which will provide a path for the file to be stored to."),(0,a.kt)("p",null,"Next we use the Capacitor ",(0,a.kt)("a",{parentName:"p",href:"https://capacitorjs.com/docs/apis/filesystem"},"Filesystem API")," to save the photo to the filesystem. We start by converting the photo to base64 format, then feed the data to the Filesystem\u2019s ",(0,a.kt)("inlineCode",{parentName:"p"},"writeFile")," function:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const savePicture = async (photo: Photo, fileName: string): Promise<UserPhoto> => {\n  let base64Data: string;\n\n  // Fetch the photo, read as a blob, then convert to base64 format\n  const response = await fetch(photo.webPath!);\n  const blob = await response.blob();\n  base64Data = (await convertBlobToBase64(blob)) as string;\n\n  const savedFile = await Filesystem.writeFile({\n    path: fileName,\n    data: base64Data,\n    directory: Directory.Data,\n  });\n\n  // Use webPath to display the new image instead of base64 since it's\n  // already loaded into memory\n  return {\n    filepath: fileName,\n    webviewPath: photo.webPath,\n  };\n};\n")),(0,a.kt)("p",null,"Last, update the ",(0,a.kt)("inlineCode",{parentName:"p"},"takePhoto")," function to call ",(0,a.kt)("inlineCode",{parentName:"p"},"savePicture"),". Once the photo has been saved, insert it into the front of reactive ",(0,a.kt)("inlineCode",{parentName:"p"},"photos")," array:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const takePhoto = async () => {\n  const photo = await Camera.getPhoto({\n    resultType: CameraResultType.Uri,\n    source: CameraSource.Camera,\n    quality: 100,\n  });\n\n  const fileName = new Date().getTime() + '.jpeg';\n  const savedFileImage = await savePicture(photo, fileName);\n\n  photos.value = [savedFileImage, ...photos.value];\n};\n")),(0,a.kt)("p",null,"There we go! Each time a new photo is taken, it\u2019s now automatically saved to the filesystem."))}c.isMDXComponent=!0}}]);