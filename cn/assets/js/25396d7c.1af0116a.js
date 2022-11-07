"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[4753],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>d});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),s=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},u=function(e){var r=s(e.components);return n.createElement(i.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=s(t),d=o,f=m["".concat(i,".").concat(d)]||m[d]||p[d]||l;return t?n.createElement(f,a(a({ref:r},u),{},{components:t})):n.createElement(f,a({ref:r},u))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var l=t.length,a=new Array(l);a[0]=m;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<l;s++)a[s]=t[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5982:(e,r,t)=>{t.r(r),t.d(r,{contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>i});var n=t(7462),o=(t(7294),t(3905));const l={title:"DLedger Controller\u6a21\u5f0f\u4e0bBroker\u6587\u4ef6\u622a\u65ad",linkTitle:"DLedger Controller\u6a21\u5f0f\u4e0bBroker\u6587\u4ef6\u622a\u65ad",date:new Date("2022-08-31T00:00:00.000Z"),weight:202208312218},a=void 0,c={unversionedId:"rocketmq5/store/dledger-controller-truncate",id:"rocketmq5/store/dledger-controller-truncate",isDocsHomePage:!1,title:"DLedger Controller\u6a21\u5f0f\u4e0bBroker\u6587\u4ef6\u622a\u65ad",description:"Broker Master\u548cSlave\u7684\u6570\u636e\u540c\u6b65\u6709\u4e24\u79cd\u6a21\u5f0f\uff1a",source:"@site/docs/rocketmq5/store/dledger-controller-truncate.md",sourceDirName:"rocketmq5/store",slug:"/rocketmq5/store/dledger-controller-truncate",permalink:"/cn/docs/rocketmq5/store/dledger-controller-truncate",editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/rocketmq5/store/dledger-controller-truncate.md",tags:[],version:"current",frontMatter:{title:"DLedger Controller\u6a21\u5f0f\u4e0bBroker\u6587\u4ef6\u622a\u65ad",linkTitle:"DLedger Controller\u6a21\u5f0f\u4e0bBroker\u6587\u4ef6\u622a\u65ad",date:"2022-08-31T00:00:00.000Z",weight:202208312218}},i=[],s={toc:i};function u(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Broker Master\u548cSlave\u7684\u6570\u636e\u540c\u6b65\u6709\u4e24\u79cd\u6a21\u5f0f\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"SYNC: Master\u540c\u6b65\u590d\u5236\u6570\u636e\u5230Slave")," "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"ASYNC: Master\u5f02\u6b65\u590d\u5236\u6570\u636e\u5230Slave"))),(0,o.kt)("p",null,"\u8fd9\u91cc\u8bf4\u7684\u6570\u636e\u540c\u6b65\u662f\u6307Broker\u7684Master\u6570\u636e\u540c\u6b65\u5230Slave\u7684\u6570\u636e\u540c\u6b65\u65b9\u5f0f\uff0c\u4e5f\u5c31\u662f\u8bf4Master\u6536\u5230Producer\u4ea7\u751f\u7684\u6570\u636e"))}u.isMDXComponent=!0}}]);