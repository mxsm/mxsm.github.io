"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[9913],{3905:(e,t,o)=>{o.d(t,{Zo:()=>s,kt:()=>u});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function c(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)o=l[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)o=l[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var i=r.createContext({}),p=function(e){var t=r.useContext(i),o=t;return e&&(o="function"==typeof e?e(t):c(c({},t),e)),o},s=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),m=p(o),k=n,u=m["".concat(i,".").concat(k)]||m[k]||d[k]||l;return o?r.createElement(u,c(c({ref:t},s),{},{components:o})):r.createElement(u,c({ref:t},s))}));function u(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=o.length,c=new Array(l);c[0]=k;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a[m]="string"==typeof e?e:n,c[1]=a;for(var p=2;p<l;p++)c[p]=o[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,o)}k.displayName="MDXCreateElement"},7866:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>d,frontMatter:()=>l,metadata:()=>a,toc:()=>p});var r=o(7462),n=(o(7294),o(3905));const l={title:"Docker Compose file",linkTitle:"Docker Compose file",date:new Date("2021-11-23T00:00:00.000Z"),weight:202111231534},c=void 0,a={unversionedId:"docker/base/docker-compose-file",id:"docker/base/docker-compose-file",title:"Docker Compose file",description:"Docker Compose file \u7248\u672cV3",source:"@site/docs/docker/base/docker-compose-file.md",sourceDirName:"docker/base",slug:"/docker/base/docker-compose-file",permalink:"/docs/docker/base/docker-compose-file",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/docker/base/docker-compose-file.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1676193845,formattedLastUpdatedAt:"Feb 12, 2023",frontMatter:{title:"Docker Compose file",linkTitle:"Docker Compose file",date:"2021-11-23T00:00:00.000Z",weight:202111231534},sidebar:"docker",previous:{title:"Docker\u5e38\u89c1\u7684\u547d\u4ee4",permalink:"/docs/docker/base/docker-command"},next:{title:"Centos8 Docker\u5b89\u88c5",permalink:"/docs/docker/base/docker-install"}},i={},p=[{value:"1. Docker Compose\u662f\u4ec0\u4e48?",id:"1-docker-compose\u662f\u4ec0\u4e48",level:3},{value:"2. Docker Compose file",id:"2-docker-compose-file",level:3},{value:"3. \u670d\u52a1\u914d\u7f6e",id:"3-\u670d\u52a1\u914d\u7f6e",level:3},{value:"3.1 build",id:"31-build",level:4}],s={toc:p},m="wrapper";function d(e){let{components:t,...o}=e;return(0,n.kt)(m,(0,r.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Docker Compose file \u7248\u672cV3")),(0,n.kt)("h3",{id:"1-docker-compose\u662f\u4ec0\u4e48"},"1. Docker Compose\u662f\u4ec0\u4e48?"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"   Docker Compose\u662fDocker\u7f16\u6392\u670d\u52a1\u7684\u4e00\u90e8\u5206\uff0cCompose\u53ef\u4ee5\u8ba9\u7528\u6237\u5728\u96c6\u7fa4\u4e2d\u90e8\u7f72\u5206\u5e03\u5f0f\u5e94\u7528\u3002Docker Compose\u662f\u4e00\u4e2a\u5c5e\u4e8e\u201c\u5e94\u7528\u5c42\u201d\u7684\u670d\u52a1\uff0c\u7528\u6237\u53ef\u4ee5\u5b9a\u4e49\u54ea\u4e2a\u5bb9\u5668\u7ec4\u8fd0\u884c\u54ea\u4e2a\u5e94\u7528\uff0c\u5b83\u652f\u6301\u52a8\u6001\u6539\u53d8\u5e94\u7528\uff0c\u5e76\u5728\u9700\u8981\u65f6\u6269\u5c55\u3002\n")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Tips\uff1a\u5b89\u88c5\u5c31\u4e0d\u5728\u8fd9\u91cc\u8bf4\u4e86\u5177\u4f53\u53c2\u7167: ",(0,n.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/install/"},"Docker Compose\u5b89\u88c5"))),(0,n.kt)("h3",{id:"2-docker-compose-file"},"2. Docker Compose file"),(0,n.kt)("p",null,"Docker Compose file \u6587\u4ef6\u7c7b\u578b\u4e3ayaml\u6587\u4ef6\uff0c\u8fd9\u4e2a\u6587\u4ef6\u53ef\u4ee5\u7528\u6765\u5b9a\u4e49\u670d\u52a1\uff0c\u7f51\u7edc\uff0c\u4ee5\u53ca\u5377\u7b49\u7b49\uff0c\u9ed8\u8ba4\u7684\u8def\u5f84\u548c\u540d\u79f0\u4e3a ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"./docker-compose.yml"))," \u3002"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Tips: \u6587\u4ef6\u7684\u540e\u7f00\u53ef\u4ee5\u662f.yml\u6216\u8005.yaml")),(0,n.kt)("h3",{id:"3-\u670d\u52a1\u914d\u7f6e"},"3. \u670d\u52a1\u914d\u7f6e"),(0,n.kt)("p",null,"\u672c\u8282\u5305\u542b\u7248\u672c3\u4e2d\u670d\u52a1\u5b9a\u4e49\u652f\u6301\u7684\u6240\u6709\u914d\u7f6e\u9009\u9879\u7684\u5217\u8868\u3002"),(0,n.kt)("h4",{id:"31-build"},"3.1 build"),(0,n.kt)("p",null,"\u5728\u6784\u5efa\u65f6\u5e94\u7528\u7684\u914d\u7f6e\u9009\u9879\u3002 ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"build"))," \u53ef\u4ee5\u6307\u5b9a\u4e3a\u5305\u542b\u6784\u5efa\u4e0a\u4e0b\u6587\u8def\u5f84\u7684\u5b57\u7b26\u4e32"),(0,n.kt)("p",null,"\u4f8b\u5b50\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},'version: "3.9"\nservices:\n  webapp:\n    build: ./dir\n')),(0,n.kt)("p",null,"\u4f5c\u4e3a\u4e00\u4e2a\u5bf9\u8c61\uff0c\u5728context\u4e0b\u6307\u5b9a\u8def\u5f84\uff0cDockerfile\u548cargs\u662f\u53ef\u9009\u7684"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},'version: "3.9"\nservices:\n  webapp:\n    build:\n      context: ./dir\n      dockerfile: Dockerfile-alternate\n      args:\n        buildno: 1\n')))}d.isMDXComponent=!0}}]);