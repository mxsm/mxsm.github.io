"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[85150],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>u});var a=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var p=a.createContext({}),l=function(e){var t=a.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(o),u=n,d=m["".concat(p,".").concat(u)]||m[u]||h[u]||r;return o?a.createElement(d,i(i({ref:t},c),{},{components:o})):a.createElement(d,i({ref:t},c))}));function u(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,i=new Array(r);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<r;l++)i[l]=o[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}m.displayName="MDXCreateElement"},80663:(e,t,o)=>{o.r(t),o.d(t,{contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=o(87462),n=(o(67294),o(3905));const r={sidebar_label:"Taking Photos"},i="Taking Photos with the Camera",s={unversionedId:"vue/your-first-app/taking-photos",id:"version-v5/vue/your-first-app/taking-photos",isDocsHomePage:!1,title:"Taking Photos with the Camera",description:"Now for the fun part - adding the ability to take photos with the device\u2019s camera using the Capacitor Camera API. We\u2019ll begin with building it for the web, then make some small tweaks to make it work on mobile (iOS and Android).",source:"@site/versioned_docs/version-v5/vue/your-first-app/2-taking-photos.md",sourceDirName:"vue/your-first-app",slug:"/vue/your-first-app/taking-photos",permalink:"/docs/v5/vue/your-first-app/taking-photos",editUrl:"https://github.com/ionic-team/ionic-docs/edit/main/versioned_docs/version-v5/vue/your-first-app/2-taking-photos.md",tags:[],version:"v5",sidebarPosition:2,frontMatter:{sidebar_label:"Taking Photos"},sidebar:"version-v5/docs",previous:{title:"Build Your First App",permalink:"/docs/v5/vue/your-first-app"},next:{title:"Saving Photos",permalink:"/docs/v5/vue/your-first-app/saving-photos"}},p=[{value:"Displaying Photos",id:"displaying-photos",children:[],level:2}],l={toc:p};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"taking-photos-with-the-camera"},"Taking Photos with the Camera"),(0,n.kt)("p",null,"Now for the fun part - adding the ability to take photos with the device\u2019s camera using the Capacitor ",(0,n.kt)("a",{parentName:"p",href:"https://capacitorjs.com/docs/apis/camera"},"Camera API"),". We\u2019ll begin with building it for the web, then make some small tweaks to make it work on mobile (iOS and Android)."),(0,n.kt)("p",null,"To do so, we will create a standalone composition function paired with Vue's Composition API to manage the photos for the gallery."),(0,n.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},"If you are not familiar with Vue's Composition API, ",(0,n.kt)("a",{parentName:"p",href:"https://v3.vuejs.org/guide/composition-api-introduction.html#why-composition-api"},"Why Composition API?")," from the official Vue docs is a good resource to start with."))),(0,n.kt)("p",null,"Create a new file at ",(0,n.kt)("inlineCode",{parentName:"p"},"src/composables/usePhotoGallery.ts")," and open it up."),(0,n.kt)("p",null,"We will start by importing the various utilities we will use from Vue core and Capacitor:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"import { ref, onMounted, watch } from 'vue';\nimport { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';\nimport { Filesystem, Directory } from '@capacitor/filesystem';\nimport { Preferences } from '@capacitor/preferences';\n")),(0,n.kt)("p",null,"Next, create a function named usePhotoGallery:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"export function usePhotoGallery() {\n  const takePhoto = async () => {\n    const photo = await Camera.getPhoto({\n      resultType: CameraResultType.Uri,\n      source: CameraSource.Camera,\n      quality: 100,\n    });\n  };\n\n  return {\n    takePhoto,\n  };\n}\n")),(0,n.kt)("p",null,"Our ",(0,n.kt)("inlineCode",{parentName:"p"},"usePhotoGallery")," function exposes a method called takePhoto, which in turn calls the Capacitor Camera API's ",(0,n.kt)("inlineCode",{parentName:"p"},"getPhoto")," method."),(0,n.kt)("p",null,"Notice the magic here: there's no platform-specific code (web, iOS, or Android)! The Capacitor Camera plugin abstracts that away for us, leaving just one method call - ",(0,n.kt)("inlineCode",{parentName:"p"},"getPhoto()")," - that will open up the device's camera and allow us to take photos."),(0,n.kt)("p",null,"The last step we need to take is to use the new function from the Tab2 page. Go back to Tab2.vue and import it:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"import { usePhotoGallery } from '@/composables/usePhotoGallery';\n")),(0,n.kt)("p",null,"Next, within the default export, add a setup method, part of the ",(0,n.kt)("a",{parentName:"p",href:"https://v3.vuejs.org/guide/composition-api-setup.html#setup"},"Composition API"),". Destructure the ",(0,n.kt)("inlineCode",{parentName:"p"},"takePhoto")," function from ",(0,n.kt)("inlineCode",{parentName:"p"},"usePhotoGallery"),", then return it:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"<script lang=\"ts\">\nimport { camera, trash, close } from 'ionicons/icons';\nimport { IonPage, IonHeader, IonFab, IonFabButton, IonIcon,\n         IonToolbar, IonTitle, IonContent, IonGrid, IonRow,\n         IonCol, IonImg } from '@ionic/vue';\nimport { usePhotoGallery } from '@/composables/usePhotoGallery';\n\nexport default  {\n  name: 'Tab2',\n  components: { IonPage, IonHeader, IonFab, IonFabButton, IonIcon,\n         IonToolbar, IonTitle, IonContent, IonGrid, IonRow,\n         IonCol, IonImg },\n  setup() {\n    const { takePhoto } = usePhotoGallery();\n\n    return {\n      takePhoto,\n      camera, trash, close\n    }\n  }\n}\n<\/script>\n")),(0,n.kt)("p",null,"Save the file, and if you\u2019re not already, restart the development server in your browser by running ",(0,n.kt)("inlineCode",{parentName:"p"},"ionic serve"),". On the Photo Gallery tab, click the Camera button. If your computer has a webcam of any sort, a modal window appears. Take a selfie!"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Camera API on the web",src:o(80465).Z})),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"(Your selfie is probably much better than mine)")),(0,n.kt)("p",null,"After taking a photo, it disappears right away. We still need to display it within our app and save it for future access."),(0,n.kt)("h2",{id:"displaying-photos"},"Displaying Photos"),(0,n.kt)("p",null,"First we will create a new type to define our Photo, which will hold specific metadata. Add the following UserPhoto interface to the ",(0,n.kt)("inlineCode",{parentName:"p"},"usePhotoGallery.ts")," file, somewhere outside of the main function:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"export interface UserPhoto {\n  filepath: string;\n  webviewPath?: string;\n}\n")),(0,n.kt)("p",null,"Back at the top of the function (right after referencing the Capacitor Camera plugin), define an array so we can store each photo captured with the Camera. Make it a reactive variable using Vue's ",(0,n.kt)("a",{parentName:"p",href:"https://v3.vuejs.org/guide/composition-api-introduction.html#reactive-variables-with-ref"},"ref function"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"const photos = ref<UserPhoto[]>([]);\n")),(0,n.kt)("p",null,"When the camera is done taking a picture, the resulting ",(0,n.kt)("inlineCode",{parentName:"p"},"Photo")," returned from Capacitor will be added to the ",(0,n.kt)("inlineCode",{parentName:"p"},"photos")," array. Update the ",(0,n.kt)("inlineCode",{parentName:"p"},"takePhoto")," method, adding this code after the ",(0,n.kt)("inlineCode",{parentName:"p"},"Camera.getPhoto")," line:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"const fileName = new Date().getTime() + '.jpeg';\nconst savedFileImage = {\n  filepath: fileName,\n  webviewPath: photo.webPath,\n};\n\nphotos.value = [savedFileImage, ...photos.value];\n")),(0,n.kt)("p",null,"Next, update the return statement to include the photos array:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"return {\n  photos,\n  takePhoto,\n};\n")),(0,n.kt)("p",null,"Back in the Tab2 component, update the import statement to include the ",(0,n.kt)("inlineCode",{parentName:"p"},"UserPhoto")," interface:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"import { usePhotoGallery, UserPhoto } from '@/composables/usePhotoGallery';\n")),(0,n.kt)("p",null,"Then, get access to the photos array:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"const { photos, takePhoto } = usePhotoGallery();\n")),(0,n.kt)("p",null,"Last, add ",(0,n.kt)("inlineCode",{parentName:"p"},"photos")," to ",(0,n.kt)("inlineCode",{parentName:"p"},"setup()")," return:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"return {\n  photos,\n  takePhoto,\n  camera,\n  trash,\n  close,\n};\n")),(0,n.kt)("p",null,"With the photo(s) stored into the main array we can now display the images on the screen. Add a ",(0,n.kt)("a",{parentName:"p",href:"https://ionicframework.com/docs/api/grid"},"Grid component")," so that each photo will display nicely as they are added to the gallery, and loop through each photo in the Photos array, adding an Image component (",(0,n.kt)("inlineCode",{parentName:"p"},"<ion-img>"),") for each. Point the ",(0,n.kt)("inlineCode",{parentName:"p"},"src")," (source) to the photo's path:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col size="6" :key="photo" v-for="photo in photos">\n        <ion-img :src="photo.webviewPath"></ion-img>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  \x3c!-- <ion-fab> markup  --\x3e\n</ion-content>\n')),(0,n.kt)("p",null,"Save all files. Within the web browser, click the Camera button and take another photo. This time, the photo is displayed in the Photo Gallery!"),(0,n.kt)("p",null,"Up next, we\u2019ll add support for saving the photos to the filesystem, so they can be retrieved and displayed in our app at a later time."))}c.isMDXComponent=!0},80465:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/camera-web-a07837d32fc6a75dd68d0d86345901c9.png"}}]);