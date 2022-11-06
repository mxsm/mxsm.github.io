"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[24593],{3905:(e,t,n)=>{n.d(t,{Zo:()=>k,kt:()=>s});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),d=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},k=function(e){var t=d(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,k=i(e,["components","mdxType","originalType","parentName"]),p=d(n),s=r,h=p["".concat(c,".").concat(s)]||p[s]||m[s]||o;return n?a.createElement(h,l(l({ref:t},k),{},{components:n})):a.createElement(h,l({ref:t},k))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var d=2;d<o;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},58215:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(67294);const r=function(e){let{children:t,hidden:n,className:r}=e;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},26396:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(87462),r=n(67294),o=n(72389),l=n(79443);const i=function(){const e=(0,r.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var c=n(89521),d=n(86010);const k="tabItem_vU9c";function m(e){var t,n;const{lazy:a,block:o,defaultValue:l,values:m,groupId:p,className:s}=e,h=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),u=m??h.map((e=>{let{props:{value:t,label:n}}=e;return{value:t,label:n}})),b=(0,c.lx)(u,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const N=null===l?l:l??(null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)??(null==(n=h[0])?void 0:n.props.value);if(null!==N&&!u.some((e=>e.value===N)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${N}" but none of its children has the corresponding value. Available values are: ${u.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:x}=i(),[v,y]=(0,r.useState)(N),f=[],{blockElementScrollPositionUntilNextRender:C}=(0,c.o5)();if(null!=p){const e=g[p];null!=e&&e!==v&&u.some((t=>t.value===e))&&y(e)}const I=e=>{const t=e.currentTarget,n=f.indexOf(t),a=u[n].value;a!==v&&(C(t),y(a),null!=p&&x(p,a))},w=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=f.indexOf(e.currentTarget)+1;n=f[t]||f[0];break}case"ArrowLeft":{const t=f.indexOf(e.currentTarget)-1;n=f[t]||f[f.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,d.Z)("tabs",{"tabs--block":o},s)},u.map((e=>{let{value:t,label:n}=e;return r.createElement("li",{role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,className:(0,d.Z)("tabs__item",k,{"tabs__item--active":v===t}),key:t,ref:e=>f.push(e),onKeyDown:w,onFocus:I,onClick:I},n??t)}))),a?(0,r.cloneElement)(h.filter((e=>e.props.value===v))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},h.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==v})))))}function p(e){const t=(0,o.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},68725:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>d,toc:()=>k});var a=n(87462),r=(n(67294),n(3905)),o=n(26396),l=n(58215);const i={sidebar_label:"ion-checkbox",demoUrl:"/docs/demos/api/checkbox/index.html",demoSourceUrl:"https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/checkbox/index.html"},c="ion-checkbox",d={unversionedId:"api/checkbox",id:"version-v5/api/checkbox",isDocsHomePage:!1,title:"ion-checkbox",description:"Checkboxes allow the selection of multiple options from a set of options. They appear as checked (ticked) when activated. Clicking on a checkbox will toggle the checked property. They can also be checked programmatically by setting the checked property.",source:"@site/versioned_docs/version-v5/api/checkbox.md",sourceDirName:"api",slug:"/api/checkbox",permalink:"/docs/v5/api/checkbox",editUrl:"https://github.com/ionic-team/ionic-docs/tree/main/docs/api/checkbox.md",tags:[],version:"v5",frontMatter:{sidebar_label:"ion-checkbox",demoUrl:"/docs/demos/api/checkbox/index.html",demoSourceUrl:"https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/checkbox/index.html"},sidebar:"version-v5/api",previous:{title:"ion-card-title",permalink:"/docs/v5/api/card-title"},next:{title:"ion-chip",permalink:"/docs/v5/api/chip"}},k=[{value:"Usage",id:"usage",children:[],level:2},{value:"Properties",id:"properties",children:[{value:"checked",id:"checked",children:[],level:3},{value:"color",id:"color",children:[],level:3},{value:"disabled",id:"disabled",children:[],level:3},{value:"indeterminate",id:"indeterminate",children:[],level:3},{value:"mode",id:"mode",children:[],level:3},{value:"name",id:"name",children:[],level:3},{value:"value",id:"value",children:[],level:3}],level:2},{value:"Events",id:"events",children:[],level:2},{value:"CSS Shadow Parts",id:"css-shadow-parts",children:[],level:2},{value:"CSS Custom Properties",id:"css-custom-properties",children:[],level:2}],m={toc:k};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"ion-checkbox"},"ion-checkbox"),(0,r.kt)("p",null,"Checkboxes allow the selection of multiple options from a set of options. They appear as checked (ticked) when activated. Clicking on a checkbox will toggle the ",(0,r.kt)("inlineCode",{parentName:"p"},"checked")," property. They can also be checked programmatically by setting the ",(0,r.kt)("inlineCode",{parentName:"p"},"checked")," property."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)(o.Z,{groupId:"framework",defaultValue:"angular",values:[{value:"angular",label:"Angular"},{value:"javascript",label:"Javascript"},{value:"react",label:"React"},{value:"stencil",label:"Stencil"},{value:"vue",label:"Vue"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"angular",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- Default Checkbox --\x3e\n<ion-checkbox></ion-checkbox>\n\n\x3c!-- Disabled Checkbox --\x3e\n<ion-checkbox disabled="true"></ion-checkbox>\n\n\x3c!-- Checked Checkbox --\x3e\n<ion-checkbox checked="true"></ion-checkbox>\n\n\x3c!-- Checkbox Colors --\x3e\n<ion-checkbox color="primary"></ion-checkbox>\n<ion-checkbox color="secondary"></ion-checkbox>\n<ion-checkbox color="danger"></ion-checkbox>\n<ion-checkbox color="light"></ion-checkbox>\n<ion-checkbox color="dark"></ion-checkbox>\n\n\x3c!-- Checkboxes in a List --\x3e\n<ion-list>\n  <ion-item *ngFor="let entry of form">\n    <ion-label>{{entry.val}}</ion-label>\n    <ion-checkbox slot="end" [(ngModel)]="entry.isChecked"></ion-checkbox>\n  </ion-item>\n</ion-list>\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Component } from '@angular/core';\n\n@Component({\n  selector: 'app-page-home',\n  templateUrl: 'home.page.html',\n  styleUrls: ['home.page.scss'],\n})\nexport class HomePage {\n  public form = [\n    { val: 'Pepperoni', isChecked: true },\n    { val: 'Sausage', isChecked: false },\n    { val: 'Mushroom', isChecked: false },\n  ];\n}\n"))),(0,r.kt)(l.Z,{value:"javascript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- Default Checkbox --\x3e\n<ion-checkbox></ion-checkbox>\n\n\x3c!-- Disabled Checkbox --\x3e\n<ion-checkbox disabled></ion-checkbox>\n\n\x3c!-- Checked Checkbox --\x3e\n<ion-checkbox checked></ion-checkbox>\n\n\x3c!-- Checkbox Colors --\x3e\n<ion-checkbox color="primary"></ion-checkbox>\n<ion-checkbox color="secondary"></ion-checkbox>\n<ion-checkbox color="danger"></ion-checkbox>\n<ion-checkbox color="light"></ion-checkbox>\n<ion-checkbox color="dark"></ion-checkbox>\n\n\x3c!-- Checkboxes in a List --\x3e\n<ion-list>\n  <ion-item>\n    <ion-label>Pepperoni</ion-label>\n    <ion-checkbox slot="end" value="pepperoni" checked></ion-checkbox>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Sausage</ion-label>\n    <ion-checkbox slot="end" value="sausage" disabled></ion-checkbox>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Mushrooms</ion-label>\n    <ion-checkbox slot="end" value="mushrooms"></ion-checkbox>\n  </ion-item>\n</ion-list>\n'))),(0,r.kt)(l.Z,{value:"react",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import React, { useState } from \'react\';\nimport {\n  IonContent,\n  IonHeader,\n  IonPage,\n  IonTitle,\n  IonToolbar,\n  IonCheckbox,\n  IonList,\n  IonItem,\n  IonLabel,\n  IonItemDivider,\n} from \'@ionic/react\';\n\nconst checkboxList = [\n  { val: \'Pepperoni\', isChecked: true },\n  { val: \'Sausage\', isChecked: false },\n  { val: \'Mushroom\', isChecked: false },\n];\n\nexport const CheckboxExamples: React.FC = () => {\n  const [checked, setChecked] = useState(false);\n\n  return (\n    <IonPage>\n      <IonHeader>\n        <IonToolbar>\n          <IonTitle>CheckboxExamples</IonTitle>\n        </IonToolbar>\n      </IonHeader>\n      <IonContent>\n        <IonList>\n          <IonItemDivider>Default Checkbox</IonItemDivider>\n          <IonItem>\n            <IonLabel>Checked: {JSON.stringify(checked)}</IonLabel>\n            <IonCheckbox checked={checked} onIonChange={(e) => setChecked(e.detail.checked)} />\n          </IonItem>\n\n          <IonItemDivider>Disabled Checkbox</IonItemDivider>\n          <IonItem>\n            <IonCheckbox slot="end" disabled={true} />\n          </IonItem>\n\n          <IonItemDivider>Checkbox Colors</IonItemDivider>\n          <IonItem>\n            <IonCheckbox slot="end" color="primary" />\n            <IonCheckbox slot="end" color="secondary" />\n            <IonCheckbox slot="end" color="danger" />\n            <IonCheckbox slot="end" color="light" />\n            <IonCheckbox slot="end" color="dark" />\n          </IonItem>\n          <IonItemDivider>Checkboxes in a List</IonItemDivider>\n\n          {checkboxList.map(({ val, isChecked }, i) => (\n            <IonItem key={i}>\n              <IonLabel>{val}</IonLabel>\n              <IonCheckbox slot="end" value={val} checked={isChecked} />\n            </IonItem>\n          ))}\n        </IonList>\n      </IonContent>\n    </IonPage>\n  );\n};\n'))),(0,r.kt)(l.Z,{value:"stencil",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Component, h } from '@stencil/core';\n\n@Component({\n  tag: 'checkbox-example',\n  styleUrl: 'checkbox-example.css',\n})\nexport class CheckboxExample {\n  private form = [\n    { val: 'Pepperoni', isChecked: true },\n    { val: 'Sausage', isChecked: false },\n    { val: 'Mushroom', isChecked: false },\n  ];\n\n  render() {\n    return [\n      // Default Checkbox\n      <ion-checkbox></ion-checkbox>,\n\n      // Disabled Checkbox\n      <ion-checkbox disabled={true}></ion-checkbox>,\n\n      // Checked Checkbox\n      <ion-checkbox checked={true}></ion-checkbox>,\n\n      // Checkbox Colors\n      <ion-checkbox color=\"primary\"></ion-checkbox>,\n      <ion-checkbox color=\"secondary\"></ion-checkbox>,\n      <ion-checkbox color=\"danger\"></ion-checkbox>,\n      <ion-checkbox color=\"light\"></ion-checkbox>,\n      <ion-checkbox color=\"dark\"></ion-checkbox>,\n\n      // Checkboxes in a List\n      <ion-list>\n        {this.form.map((entry) => (\n          <ion-item>\n            <ion-label>{entry.val}</ion-label>\n            <ion-checkbox slot=\"end\" checked={entry.isChecked}></ion-checkbox>\n          </ion-item>\n        ))}\n      </ion-list>,\n    ];\n  }\n}\n"))),(0,r.kt)(l.Z,{value:"vue",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<template>\n  \x3c!-- Default Checkbox --\x3e\n  <ion-checkbox></ion-checkbox>\n\n  \x3c!-- Disabled Checkbox --\x3e\n  <ion-checkbox disabled="true"></ion-checkbox>\n\n  \x3c!-- Checked Checkbox --\x3e\n  <ion-checkbox checked="true"></ion-checkbox>\n\n  \x3c!-- Checkbox Colors --\x3e\n  <ion-checkbox color="primary"></ion-checkbox>\n  <ion-checkbox color="secondary"></ion-checkbox>\n  <ion-checkbox color="danger"></ion-checkbox>\n  <ion-checkbox color="light"></ion-checkbox>\n  <ion-checkbox color="dark"></ion-checkbox>\n\n  \x3c!-- Checkboxes in a List --\x3e\n  <ion-list>\n    <ion-item v-for="entry in form">\n      <ion-label>{{entry.val}}</ion-label>\n      <ion-checkbox slot="end" @update:modelValue="entry.isChecked = $event" :modelValue="entry.isChecked">\n      </ion-checkbox>\n    </ion-item>\n  </ion-list>\n</template>\n\n<script>\n  import { IonCheckbox, IonItem, IonLabel, IonList } from \'@ionic/vue\';\n  import { defineComponent } from \'vue\';\n\n  export default defineComponent({\n    components: { IonCheckbox, IonItem, IonLabel, IonList },\n    setup() {\n      const form = [\n        { val: \'Pepperoni\', isChecked: true },\n        { val: \'Sausage\', isChecked: false },\n        { val: \'Mushroom\', isChecked: false },\n      ];\n\n      return { form };\n    },\n  });\n<\/script>\n')))),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"checked"},"checked"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Description")),(0,r.kt)("td",{parentName:"tr",align:null},"If ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),", the checkbox is selected.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Attribute")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"checked"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Type")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Default")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))))),(0,r.kt)("h3",{id:"color"},"color"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Description")),(0,r.kt)("td",{parentName:"tr",align:null},"The color to use from your application's color palette.",(0,r.kt)("br",null),"Default options are: ",(0,r.kt)("inlineCode",{parentName:"td"},'"primary"'),", ",(0,r.kt)("inlineCode",{parentName:"td"},'"secondary"'),", ",(0,r.kt)("inlineCode",{parentName:"td"},'"tertiary"'),", ",(0,r.kt)("inlineCode",{parentName:"td"},'"success"'),", ",(0,r.kt)("inlineCode",{parentName:"td"},'"warning"'),", ",(0,r.kt)("inlineCode",{parentName:"td"},'"danger"'),", ",(0,r.kt)("inlineCode",{parentName:"td"},'"light"'),", ",(0,r.kt)("inlineCode",{parentName:"td"},'"medium"'),", and ",(0,r.kt)("inlineCode",{parentName:"td"},'"dark"'),".",(0,r.kt)("br",null),"For more information on colors, see ",(0,r.kt)("a",{parentName:"td",href:"/docs/v5/theming/basics"},"theming"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Attribute")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"color"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Type")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string \\| undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Default")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,r.kt)("h3",{id:"disabled"},"disabled"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Description")),(0,r.kt)("td",{parentName:"tr",align:null},"If ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),", the user cannot interact with the checkbox.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Attribute")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"disabled"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Type")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Default")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))))),(0,r.kt)("h3",{id:"indeterminate"},"indeterminate"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Description")),(0,r.kt)("td",{parentName:"tr",align:null},"If ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),", the checkbox will visually appear as indeterminate.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Attribute")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"indeterminate"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Type")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Default")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))))),(0,r.kt)("h3",{id:"mode"},"mode"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Description")),(0,r.kt)("td",{parentName:"tr",align:null},"The mode determines which platform styles to use.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Attribute")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"mode"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Type")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"ios" \\| "md"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Default")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,r.kt)("h3",{id:"name"},"name"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Description")),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the control, which is submitted with the form data.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Attribute")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"name"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Type")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Default")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"this.inputId"))))),(0,r.kt)("h3",{id:"value"},"value"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Description")),(0,r.kt)("td",{parentName:"tr",align:null},"The value of the checkbox does not mean if it's checked or not, use the ",(0,r.kt)("inlineCode",{parentName:"td"},"checked"),(0,r.kt)("br",null),"property for that.",(0,r.kt)("br",null),(0,r.kt)("br",null),"The value of a checkbox is analogous to the value of an ",(0,r.kt)("inlineCode",{parentName:"td"},'<input type="checkbox">'),",",(0,r.kt)("br",null),"it's only used when the checkbox participates in a native ",(0,r.kt)("inlineCode",{parentName:"td"},"<form>"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Attribute")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"value"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Type")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Default")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"'on'"))))),(0,r.kt)("h2",{id:"events"},"Events"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ionBlur")),(0,r.kt)("td",{parentName:"tr",align:null},"Emitted when the checkbox loses focus.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ionChange")),(0,r.kt)("td",{parentName:"tr",align:null},"Emitted when the checked property has changed.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ionFocus")),(0,r.kt)("td",{parentName:"tr",align:null},"Emitted when the checkbox has focus.")))),(0,r.kt)("h2",{id:"css-shadow-parts"},"CSS Shadow Parts"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"container")),(0,r.kt)("td",{parentName:"tr",align:null},"The container for the checkbox mark.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"mark")),(0,r.kt)("td",{parentName:"tr",align:null},"The checkmark used to indicate the checked state.")))),(0,r.kt)("h2",{id:"css-custom-properties"},"CSS Custom Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--background")),(0,r.kt)("td",{parentName:"tr",align:null},"Background of the checkbox icon")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--background-checked")),(0,r.kt)("td",{parentName:"tr",align:null},"Background of the checkbox icon when checked")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--border-color")),(0,r.kt)("td",{parentName:"tr",align:null},"Border color of the checkbox icon")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--border-color-checked")),(0,r.kt)("td",{parentName:"tr",align:null},"Border color of the checkbox icon when checked")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--border-radius")),(0,r.kt)("td",{parentName:"tr",align:null},"Border radius of the checkbox icon")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--border-style")),(0,r.kt)("td",{parentName:"tr",align:null},"Border style of the checkbox icon")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--border-width")),(0,r.kt)("td",{parentName:"tr",align:null},"Border width of the checkbox icon")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--checkmark-color")),(0,r.kt)("td",{parentName:"tr",align:null},"Color of the checkbox checkmark when checked")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--checkmark-width")),(0,r.kt)("td",{parentName:"tr",align:null},"Stroke width of the checkbox checkmark")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--size")),(0,r.kt)("td",{parentName:"tr",align:null},"Size of the checkbox icon")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--transition")),(0,r.kt)("td",{parentName:"tr",align:null},"Transition of the checkbox icon")))))}p.isMDXComponent=!0}}]);