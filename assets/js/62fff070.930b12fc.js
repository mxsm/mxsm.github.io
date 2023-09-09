"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[2961],{3905:(e,t,r)=>{r.d(t,{Zo:()=>g,kt:()=>d});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=o.createContext({}),l=function(e){var t=o.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},g=function(e){var t=l(e.components);return o.createElement(u.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,u=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),p=l(r),c=n,d=p["".concat(u,".").concat(c)]||p[c]||f[c]||i;return r?o.createElement(d,a(a({ref:t},g),{},{components:r})):o.createElement(d,a({ref:t},g))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=c;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[p]="string"==typeof e?e:n,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}c.displayName="MDXCreateElement"},1470:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var o=r(7462),n=(r(7294),r(3905));const i={title:"SpringBoot\u6e90\u7801\u89e3\u6790\u4e4b-AutoConfigureBefore\u3001AutoConfigureOrder\u3001AutoConfigureAfter",linkTitle:"SpringBoot\u6e90\u7801\u89e3\u6790\u4e4b-AutoConfigureBefore\u3001Order\u3001After",date:new Date("2018-04-15T00:00:00.000Z"),weight:2},a=void 0,s={unversionedId:"spring/spring-boot/annotation-source-analysis/springboot-AutoConfigureBefore-AutoConfigureOrder-AutoConfigureAfter",id:"spring/spring-boot/annotation-source-analysis/springboot-AutoConfigureBefore-AutoConfigureOrder-AutoConfigureAfter",title:"SpringBoot\u6e90\u7801\u89e3\u6790\u4e4b-AutoConfigureBefore\u3001AutoConfigureOrder\u3001AutoConfigureAfter",description:"1. SpringBoot\u7684\u7c7b\u52a0\u8f7d\u987a\u5e8f\u6ce8\u89e3",source:"@site/docs/spring/spring-boot/annotation-source-analysis/springboot-AutoConfigureBefore-AutoConfigureOrder-AutoConfigureAfter.md",sourceDirName:"spring/spring-boot/annotation-source-analysis",slug:"/spring/spring-boot/annotation-source-analysis/springboot-AutoConfigureBefore-AutoConfigureOrder-AutoConfigureAfter",permalink:"/docs/spring/spring-boot/annotation-source-analysis/springboot-AutoConfigureBefore-AutoConfigureOrder-AutoConfigureAfter",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/spring/spring-boot/annotation-source-analysis/springboot-AutoConfigureBefore-AutoConfigureOrder-AutoConfigureAfter.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1694243114,formattedLastUpdatedAt:"Sep 9, 2023",frontMatter:{title:"SpringBoot\u6e90\u7801\u89e3\u6790\u4e4b-AutoConfigureBefore\u3001AutoConfigureOrder\u3001AutoConfigureAfter",linkTitle:"SpringBoot\u6e90\u7801\u89e3\u6790\u4e4b-AutoConfigureBefore\u3001Order\u3001After",date:"2018-04-15T00:00:00.000Z",weight:2},sidebar:"springboot",previous:{title:"SpringBoot\u542f\u52a8\u5206\u6790",permalink:"/docs/spring/spring-boot/core-source-analysis/springboot-start"},next:{title:"SpringBoot\u6ce8\u89e3\u89e3\u6790\u4e4bConditionalOnXXX\u6761\u4ef6\u6ce8\u89e3",permalink:"/docs/spring/spring-boot/annotation-source-analysis/springboot-ConditionalOnXXX-annotation"}},u={},l=[{value:"1. SpringBoot\u7684\u7c7b\u52a0\u8f7d\u987a\u5e8f\u6ce8\u89e3",id:"1-springboot\u7684\u7c7b\u52a0\u8f7d\u987a\u5e8f\u6ce8\u89e3",level:3},{value:"2. \u6e90\u7801\u89e3\u6790",id:"2-\u6e90\u7801\u89e3\u6790",level:3}],g={toc:l},p="wrapper";function f(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,o.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"1-springboot\u7684\u7c7b\u52a0\u8f7d\u987a\u5e8f\u6ce8\u89e3"},"1. SpringBoot\u7684\u7c7b\u52a0\u8f7d\u987a\u5e8f\u6ce8\u89e3"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"AutoConfigureBefore")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"AutoConfigureOrder")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"AutoConfigureAfter"))),(0,n.kt)("p",null,"\u901a\u8fc7\u8fd9\u4e09\u4e2a\u6ce8\u89e3\u80fd\u591f\u5de7\u5999\u7684\u4f7f\u7528\u6392\u5e8f\u3002"),(0,n.kt)("h3",{id:"2-\u6e90\u7801\u89e3\u6790"},"2. \u6e90\u7801\u89e3\u6790"),(0,n.kt)("p",null,"\u5728SpringBoot\u7684\u52a0\u8f7d\u4e3b\u8981\u901a\u8fc7\u6ce8\u89e3 ",(0,n.kt)("strong",{parentName:"p"},"@",(0,n.kt)("em",{parentName:"strong"},"EnableAutoConfiguration"))," \u6765\u5b9e\u73b0\u3002\u5728\u7c7b ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"AutoConfigurationImportSelector"))," \u4e2d\u6709\u4e00\u4e2a\u65b9\u6cd5\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"private List<String> sortAutoConfigurations(Set<String> configurations,AutoConfigurationMetadata autoConfigurationMetadata) {\n    return new AutoConfigurationSorter(getMetadataReaderFactory(), autoConfigurationMetadata)\n                    .getInPriorityOrder(configurations);\n}\n")),(0,n.kt)("p",null,"\u901a\u8fc7\u4e0a\u9762\u7684\u53ef\u4ee5\u770b\u51fa\u6765\u4e3b\u8981\u662f\u901a\u8fc7 ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"AutoConfigurationSorter"))," \u6765\u5b9e\u73b0\u7684\u3002\u4e0b\u9762\u6765\u770b\u4e00\u4e0b\u8fd9\u4e2a\u7c7b\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"    List<String> getInPriorityOrder(Collection<String> classNames) {\n        AutoConfigurationClasses classes = new AutoConfigurationClasses(this.metadataReaderFactory,\n                this.autoConfigurationMetadata, classNames);\n        List<String> orderedClassNames = new ArrayList<>(classNames);\n        // Initially sort alphabetically\n        Collections.sort(orderedClassNames);\n        // Then sort by order\n        orderedClassNames.sort((o1, o2) -> {\n            int i1 = classes.get(o1).getOrder();\n            int i2 = classes.get(o2).getOrder();\n            return Integer.compare(i1, i2);\n        });\n        // \u5904\u7406\u8fd9\u4e24\u4e2a\u6ce8\u89e3 @AutoConfigureBefore @AutoConfigureAfter\n        orderedClassNames = sortByAnnotation(classes, orderedClassNames);\n        return orderedClassNames;\n    }\n")))}f.isMDXComponent=!0}}]);