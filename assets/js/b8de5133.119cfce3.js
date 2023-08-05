"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[8376],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>v});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),u=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(r),m=n,v=p["".concat(c,".").concat(m)]||p[m]||d[m]||l;return r?a.createElement(v,o(o({ref:t},s),{},{components:r})):a.createElement(v,o({ref:t},s))}));function v(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:n,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3104:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var a=r(7462),n=(r(7294),r(3905));const l={title:"\u5206\u5e03\u5f0f\u9501",date:new Date("2020-04-25T00:00:00.000Z")},o=void 0,i={unversionedId:"java/java-se/lock/distributed-lock",id:"java/java-se/lock/distributed-lock",title:"\u5206\u5e03\u5f0f\u9501",description:"\u5206\u5e03\u5f0f\u9501\u7684\u7279\u70b9",source:"@site/docs/java/java-se/lock/distributed-lock.md",sourceDirName:"java/java-se/lock",slug:"/java/java-se/lock/distributed-lock",permalink:"/docs/java/java-se/lock/distributed-lock",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/java/java-se/lock/distributed-lock.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1691228615,formattedLastUpdatedAt:"Aug 5, 2023",frontMatter:{title:"\u5206\u5e03\u5f0f\u9501",date:"2020-04-25T00:00:00.000Z"},sidebar:"javase",previous:{title:"\u7c7b\u52a0\u8f7d\u5668\u548c\u53cc\u4eb2\u59d4\u6d3e\u6a21\u578b",permalink:"/docs/java/java-se/JVM/parental-delegate-model"},next:{title:"Java\u4e2d\u7684\u90a3\u4e9b\u9501\u4e8b-1",permalink:"/docs/java/java-se/lock/java-lock"}},c={},u=[{value:"\u5206\u5e03\u5f0f\u9501\u7684\u7279\u70b9",id:"\u5206\u5e03\u5f0f\u9501\u7684\u7279\u70b9",level:3},{value:"\u5e38\u89c1\u7684\u5206\u5e03\u5f0f\u9501",id:"\u5e38\u89c1\u7684\u5206\u5e03\u5f0f\u9501",level:3}],s={toc:u},p="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"\u5206\u5e03\u5f0f\u9501\u7684\u7279\u70b9"},"\u5206\u5e03\u5f0f\u9501\u7684\u7279\u70b9"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u4e92\u65a5\u6027:\u548c\u6211\u4eec\u672c\u5730\u9501\u4e00\u6837\u4e92\u65a5\u6027\u662f\u6700\u57fa\u672c\uff0c\u4f46\u662f\u5206\u5e03\u5f0f\u9501\u9700\u8981\u4fdd\u8bc1\u5728\u4e0d\u540c\u8282\u70b9\u7684\u4e0d\u540c\u7ebf\u7a0b\u7684\u4e92\u65a5\u3002\u5728\u5206\u5e03\u5f0f\u7cfb\u7edf\u73af\u5883\u4e0b\uff0c\u4e00\u4e2a\u65b9\u6cd5\u5728\u540c\u4e00\u65f6\u95f4\u53ea\u80fd\u88ab\u4e00\u4e2a\u673a\u5668\u7684\u4e00\u4e2a\u7ebf\u7a0b\u6267\u884c\uff1b"),(0,n.kt)("li",{parentName:"ul"},"\u9ad8\u53ef\u7528\u7684\u83b7\u53d6\u9501\u4e0e\u91ca\u653e\u9501"),(0,n.kt)("li",{parentName:"ul"},"\u9ad8\u6027\u80fd\u7684\u83b7\u53d6\u9501\u4e0e\u91ca\u653e\u9501"),(0,n.kt)("li",{parentName:"ul"},"\u53ef\u91cd\u5165\u7279\u6027\u540c\u4e00\u4e2a\u8282\u70b9\u4e0a\u7684\u540c\u4e00\u4e2a\u7ebf\u7a0b\u5982\u679c\u83b7\u53d6\u4e86\u9501\u4e4b\u540e\u90a3\u4e48\u4e5f\u53ef\u4ee5\u518d\u6b21\u83b7\u53d6\u8fd9\u4e2a\u9501"),(0,n.kt)("li",{parentName:"ul"},"\u5177\u5907\u9501\u5931\u6548\u673a\u5236\uff0c\u9501\u8d85\u65f6:\u548c\u672c\u5730\u9501\u4e00\u6837\u652f\u6301\u9501\u8d85\u65f6\uff0c\u9632\u6b62\u6b7b\u9501"),(0,n.kt)("li",{parentName:"ul"},"\u652f\u6301\u963b\u585e\u548c\u975e\u963b\u585e:\u548cReentrantLock\u4e00\u6837\u652f\u6301lock\u548ctrylock\u4ee5\u53catryLock(long timeOut)"),(0,n.kt)("li",{parentName:"ul"},"\u652f\u6301\u516c\u5e73\u9501\u548c\u975e\u516c\u5e73\u9501(\u53ef\u9009):\u516c\u5e73\u9501\u7684\u610f\u601d\u662f\u6309\u7167\u8bf7\u6c42\u52a0\u9501\u7684\u987a\u5e8f\u83b7\u5f97\u9501\uff0c\u975e\u516c\u5e73\u9501\u5c31\u76f8\u53cd\u662f\u65e0\u5e8f\u7684\u3002\u8fd9\u4e2a\u4e00\u822c\u6765\u8bf4\u5b9e\u73b0\u7684\u6bd4\u8f83\u5c11")),(0,n.kt)("h3",{id:"\u5e38\u89c1\u7684\u5206\u5e03\u5f0f\u9501"},"\u5e38\u89c1\u7684\u5206\u5e03\u5f0f\u9501"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"MYSQL"),(0,n.kt)("li",{parentName:"ul"},"Zookeeper"),(0,n.kt)("li",{parentName:"ul"},"Redis"),(0,n.kt)("li",{parentName:"ul"},"ETCD")),(0,n.kt)("p",null,"\u63a5\u4e0b\u6765\u4f1a\u5206\u522b\u5206\u6790\u73b0\u6709\u7684\u5f00\u6e90\u5b9e\u73b0\uff0c\u7136\u540e\u81ea\u5df1\u7684\u4ee3\u7801\u5b9e\u73b0\u3002"))}d.isMDXComponent=!0}}]);