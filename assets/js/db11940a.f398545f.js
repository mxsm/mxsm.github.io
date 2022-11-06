"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[1268],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var o=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=o.createContext({}),p=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=p(a),u=n,m=h["".concat(l,".").concat(u)]||h[u]||d[u]||r;return a?o.createElement(m,i(i({ref:t},c),{},{components:a})):o.createElement(m,i({ref:t},c))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<r;p++)i[p]=a[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}h.displayName="MDXCreateElement"},91830:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var o=a(87462),n=(a(67294),a(3905));const r={sidebar_label:"Loading Photos"},i="Loading Photos from the Filesystem",s={unversionedId:"angular/your-first-app/loading-photos",id:"version-v5/angular/your-first-app/loading-photos",isDocsHomePage:!1,title:"Loading Photos from the Filesystem",description:"We\u2019ve implemented photo taking and saving to the filesystem. There\u2019s one last piece of functionality missing: the photos are stored in the filesystem, but we need a way to save pointers to each file so that they can be displayed again in the photo gallery.",source:"@site/versioned_docs/version-v5/angular/your-first-app/4-loading-photos.md",sourceDirName:"angular/your-first-app",slug:"/angular/your-first-app/loading-photos",permalink:"/docs/v5/angular/your-first-app/loading-photos",editUrl:"https://github.com/ionic-team/ionic-docs/edit/main/versioned_docs/version-v5/angular/your-first-app/4-loading-photos.md",tags:[],version:"v5",sidebarPosition:4,frontMatter:{sidebar_label:"Loading Photos"},sidebar:"version-v5/docs",previous:{title:"Saving Photos",permalink:"/docs/v5/angular/your-first-app/saving-photos"},next:{title:"Adding Mobile",permalink:"/docs/v5/angular/your-first-app/adding-mobile"}},l=[{value:"Preferences API",id:"preferences-api",children:[],level:2}],p={toc:l};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"loading-photos-from-the-filesystem"},"Loading Photos from the Filesystem"),(0,n.kt)("p",null,"We\u2019ve implemented photo taking and saving to the filesystem. There\u2019s one last piece of functionality missing: the photos are stored in the filesystem, but we need a way to save pointers to each file so that they can be displayed again in the photo gallery."),(0,n.kt)("p",null,"Fortunately, this is easy: we\u2019ll leverage the Capacitor ",(0,n.kt)("a",{parentName:"p",href:"https://capacitorjs.com/docs/apis/preferences"},"Preferences API")," to store our array of Photos in a key-value store."),(0,n.kt)("h2",{id:"preferences-api"},"Preferences API"),(0,n.kt)("p",null,"Begin by defining a constant variable that will act as the key for the store:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"export class PhotoService {\n  public photos: UserPhoto[] = [];\n  private PHOTO_STORAGE: string = 'photos';\n\n  // other code\n}\n")),(0,n.kt)("p",null,"Next, at the end of the ",(0,n.kt)("inlineCode",{parentName:"p"},"addNewToGallery")," function, add a call to ",(0,n.kt)("inlineCode",{parentName:"p"},"Preferences.set()")," to save the Photos array. By adding it here, the Photos array is stored each time a new photo is taken. This way, it doesn\u2019t matter when the app user closes or switches to a different app - all photo data is saved."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"Preferences.set({\n  key: this.PHOTO_STORAGE,\n  value: JSON.stringify(this.photos),\n});\n")),(0,n.kt)("p",null,"With the photo array data saved, create a function called ",(0,n.kt)("inlineCode",{parentName:"p"},"loadSaved()")," that can retrieve that data. We use the same key to retrieve the photos array in JSON format, then parse it into an array:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"public async loadSaved() {\n  // Retrieve cached photo array data\n  const photoList = await Preferences.get({ key: this.PHOTO_STORAGE });\n  this.photos = JSON.parse(photoList.value) || [];\n\n  // more to come...\n}\n")),(0,n.kt)("p",null,"On mobile (coming up next!), we can directly set the source of an image tag - ",(0,n.kt)("inlineCode",{parentName:"p"},'<img src="x" />')," - to each photo file on the Filesystem, displaying them automatically. On the web, however, we must read each image from the Filesystem into base64 format, using a new ",(0,n.kt)("inlineCode",{parentName:"p"},"base64")," property on the ",(0,n.kt)("inlineCode",{parentName:"p"},"Photo")," object. This is because the Filesystem API uses ",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API"},"IndexedDB")," under the hood. Below is the code you need to add in the ",(0,n.kt)("inlineCode",{parentName:"p"},"loadSaved()")," function you just added:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"// Display the photo by reading into base64 format\nfor (let photo of this.photos) {\n  // Read each saved photo's data from the Filesystem\n  const readFile = await Filesystem.readFile({\n    path: photo.filepath,\n    directory: Directory.Data,\n  });\n\n  // Web platform only: Load the photo as base64 data\n  photo.webviewPath = `data:image/jpeg;base64,${readFile.data}`;\n}\n")),(0,n.kt)("p",null,"After, call this new method in ",(0,n.kt)("inlineCode",{parentName:"p"},"tab2.page.ts")," so that when the user first navigates to Tab 2 (the Photo Gallery), all photos are loaded and displayed on the screen."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"async ngOnInit() {\n  await this.photoService.loadSaved();\n}\n")),(0,n.kt)("p",null,"That\u2019s it! We\u2019ve built a complete Photo Gallery feature in our Ionic app that works on the web. Next up, we\u2019ll transform it into a mobile app for iOS and Android!"))}c.isMDXComponent=!0}}]);