"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[4740],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>g});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(r),y=a,g=u["".concat(c,".").concat(y)]||u[y]||m[y]||o;return r?n.createElement(g,i(i({ref:t},l),{},{components:r})):n.createElement(g,i({ref:t},l))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=y;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},3779:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={title:"FactoryBean\u89e3\u6790",date:new Date("2019-09-24T00:00:00.000Z")},i=void 0,s={unversionedId:"spring/spring-framework/core-source-analysis/FactoryBean",id:"spring/spring-framework/core-source-analysis/FactoryBean",title:"FactoryBean\u89e3\u6790",description:"Spring FactoryBean\u5e94\u7528",source:"@site/docs/spring/spring-framework/core-source-analysis/FactoryBean.md",sourceDirName:"spring/spring-framework/core-source-analysis",slug:"/spring/spring-framework/core-source-analysis/FactoryBean",permalink:"/docs/spring/spring-framework/core-source-analysis/FactoryBean",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/spring/spring-framework/core-source-analysis/FactoryBean.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1671354027,formattedLastUpdatedAt:"Dec 18, 2022",frontMatter:{title:"FactoryBean\u89e3\u6790",date:"2019-09-24T00:00:00.000Z"},sidebar:"springframework",previous:{title:"ConfigurationClassPostProcessor\u6e90\u7801\u89e3\u6790",permalink:"/docs/spring/spring-framework/core-source-analysis/ConfigurationClassPostProcesso"},next:{title:"Spring ApplicationContext\u6e90\u7801\u89e3\u6790",permalink:"/docs/spring/spring-framework/core-source-analysis/Spring-ApplicationContext"}},c={},p=[{value:"Spring FactoryBean\u5e94\u7528",id:"spring-factorybean\u5e94\u7528",level:3},{value:"\u5e94\u7528\u573a\u666f",id:"\u5e94\u7528\u573a\u666f",level:3},{value:"\u5e94\u7528\u6848\u4f8b",id:"\u5e94\u7528\u6848\u4f8b",level:3}],l={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"spring-factorybean\u5e94\u7528"},"Spring FactoryBean\u5e94\u7528"),(0,a.kt)("p",null,"Spring\u4e2d\u7684Bean\u6709\u4e24\u79cd\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u666e\u901a\u7684bean")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5de5\u5382Bean\u4e5f\u5c31\u662f\u5b9e\u73b0\u4e86FactoryBean"),(0,a.kt)("p",{parentName:"li"},"FactoryBean\u8ddf\u666e\u901aBean\u4e0d\u540c\uff0c\u5176\u8fd4\u56de\u7684\u5bf9\u8c61\u4e0d\u662f\u6307\u5b9a\u7c7b\u7684\u4e00\u4e2a\u5b9e\u4f8b\uff0c\u800c\u662f\u8be5FactoryBean\u7684getObject\u65b9\u6cd5\u6240\u8fd4\u56de\u7684\u5bf9\u8c61\u3002"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public interface FactoryBean<T> {\n    @Nullable\n    T getObject() throws Exception;\n\n    @Nullable\n    Class<?> getObjectType();\n\n    default boolean isSingleton() {\n        return true;\n    }\n}\n")),(0,a.kt)("h3",{id:"\u5e94\u7528\u573a\u666f"},"\u5e94\u7528\u573a\u666f"),(0,a.kt)("p",null,"FactoryBean \u901a\u5e38\u662f\u7528\u6765\u521b\u5efa\u6bd4\u8f83\u590d\u6742\u7684bean\uff0c\u4e00\u822c\u7684bean \u76f4\u63a5\u7528xml\u914d\u7f6e\u5373\u53ef\uff0c\u4f46\u5982\u679c\u4e00\u4e2abean\u7684\u521b\u5efa\u8fc7\u7a0b\u4e2d\u6d89\u53ca\u5230\u5f88\u591a\u5176\u4ed6\u7684bean \u548c\u590d\u6742\u7684\u903b\u8f91\uff0c\u7528xml\u914d\u7f6e\u6bd4\u8f83\u56f0\u96be\uff0c\u8fd9\u65f6\u53ef\u4ee5\u8003\u8651\u7528FactoryBean"),(0,a.kt)("h3",{id:"\u5e94\u7528\u6848\u4f8b"},"\u5e94\u7528\u6848\u4f8b"),(0,a.kt)("p",null,"\u5f88\u591a\u5f00\u6e90\u9879\u76ee\u5728\u96c6\u6210Spring \u65f6\u90fd\u4f7f\u7528\u5230FactoryBean\uff0c\u6bd4\u5982 ",(0,a.kt)("a",{parentName:"p",href:"https://link.jianshu.com/?t=https://github.com/mybatis/mybatis-3"},"MyBatis3")," \u63d0\u4f9b mybatis-spring\u9879\u76ee\u4e2d\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"org.mybatis.spring.SqlSessionFactoryBean")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u9879\u76ee\u5730\u5740\uff1a"),(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/mybatis/spring/blob/master/src/main/java/org/mybatis/spring/SqlSessionFactoryBean.java"},"https://github.com/mybatis/spring/blob/master/src/main/java/org/mybatis/spring/SqlSessionFactoryBean.java"))))}u.isMDXComponent=!0}}]);