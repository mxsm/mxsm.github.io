"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[4740],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>g});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),p=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=p(e.components);return n.createElement(c.Provider,{value:r},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},y=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(t),y=a,g=u["".concat(c,".").concat(y)]||u[y]||m[y]||o;return t?n.createElement(g,i(i({ref:r},l),{},{components:t})):n.createElement(g,i({ref:r},l))}));function g(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=y;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},3779:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=t(7462),a=(t(7294),t(3905));const o={title:"FactoryBean\u89e3\u6790",date:new Date("2019-09-24T00:00:00.000Z")},i=void 0,s={unversionedId:"spring/spring-framework/core-source-analysis/FactoryBean",id:"spring/spring-framework/core-source-analysis/FactoryBean",title:"FactoryBean\u89e3\u6790",description:"Spring FactoryBean\u5e94\u7528",source:"@site/docs/spring/spring-framework/core-source-analysis/FactoryBean.md",sourceDirName:"spring/spring-framework/core-source-analysis",slug:"/spring/spring-framework/core-source-analysis/FactoryBean",permalink:"/docs/spring/spring-framework/core-source-analysis/FactoryBean",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/spring/spring-framework/core-source-analysis/FactoryBean.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1678517863,formattedLastUpdatedAt:"Mar 11, 2023",frontMatter:{title:"FactoryBean\u89e3\u6790",date:"2019-09-24T00:00:00.000Z"},sidebar:"springframework",previous:{title:"ConfigurationClassPostProcessor\u6e90\u7801\u89e3\u6790",permalink:"/docs/spring/spring-framework/core-source-analysis/ConfigurationClassPostProcesso"},next:{title:"Spring ApplicationContext\u6e90\u7801\u89e3\u6790",permalink:"/docs/spring/spring-framework/core-source-analysis/Spring-ApplicationContext"}},c={},p=[{value:"Spring FactoryBean\u5e94\u7528",id:"spring-factorybean\u5e94\u7528",level:3},{value:"\u5e94\u7528\u573a\u666f",id:"\u5e94\u7528\u573a\u666f",level:3},{value:"\u5e94\u7528\u6848\u4f8b",id:"\u5e94\u7528\u6848\u4f8b",level:3}],l={toc:p},u="wrapper";function m(e){let{components:r,...t}=e;return(0,a.kt)(u,(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"spring-factorybean\u5e94\u7528"},"Spring FactoryBean\u5e94\u7528"),(0,a.kt)("p",null,"Spring\u4e2d\u7684Bean\u6709\u4e24\u79cd\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u666e\u901a\u7684bean")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5de5\u5382Bean\u4e5f\u5c31\u662f\u5b9e\u73b0\u4e86FactoryBean"),(0,a.kt)("p",{parentName:"li"},"FactoryBean\u8ddf\u666e\u901aBean\u4e0d\u540c\uff0c\u5176\u8fd4\u56de\u7684\u5bf9\u8c61\u4e0d\u662f\u6307\u5b9a\u7c7b\u7684\u4e00\u4e2a\u5b9e\u4f8b\uff0c\u800c\u662f\u8be5FactoryBean\u7684getObject\u65b9\u6cd5\u6240\u8fd4\u56de\u7684\u5bf9\u8c61\u3002"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public interface FactoryBean<T> {\n    @Nullable\n    T getObject() throws Exception;\n\n    @Nullable\n    Class<?> getObjectType();\n\n    default boolean isSingleton() {\n        return true;\n    }\n}\n")),(0,a.kt)("h3",{id:"\u5e94\u7528\u573a\u666f"},"\u5e94\u7528\u573a\u666f"),(0,a.kt)("p",null,"FactoryBean \u901a\u5e38\u662f\u7528\u6765\u521b\u5efa\u6bd4\u8f83\u590d\u6742\u7684bean\uff0c\u4e00\u822c\u7684bean \u76f4\u63a5\u7528xml\u914d\u7f6e\u5373\u53ef\uff0c\u4f46\u5982\u679c\u4e00\u4e2abean\u7684\u521b\u5efa\u8fc7\u7a0b\u4e2d\u6d89\u53ca\u5230\u5f88\u591a\u5176\u4ed6\u7684bean \u548c\u590d\u6742\u7684\u903b\u8f91\uff0c\u7528xml\u914d\u7f6e\u6bd4\u8f83\u56f0\u96be\uff0c\u8fd9\u65f6\u53ef\u4ee5\u8003\u8651\u7528FactoryBean"),(0,a.kt)("h3",{id:"\u5e94\u7528\u6848\u4f8b"},"\u5e94\u7528\u6848\u4f8b"),(0,a.kt)("p",null,"\u5f88\u591a\u5f00\u6e90\u9879\u76ee\u5728\u96c6\u6210Spring \u65f6\u90fd\u4f7f\u7528\u5230FactoryBean\uff0c\u6bd4\u5982 ",(0,a.kt)("a",{parentName:"p",href:"https://link.jianshu.com/?t=https://github.com/mybatis/mybatis-3"},"MyBatis3")," \u63d0\u4f9b mybatis-spring\u9879\u76ee\u4e2d\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"org.mybatis.spring.SqlSessionFactoryBean")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u9879\u76ee\u5730\u5740\uff1a"),(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/mybatis/spring/blob/master/src/main/java/org/mybatis/spring/SqlSessionFactoryBean.java"},"https://github.com/mybatis/spring/blob/master/src/main/java/org/mybatis/spring/SqlSessionFactoryBean.java"))))}m.isMDXComponent=!0}}]);