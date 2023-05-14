"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[9137],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",P={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,f=u["".concat(c,".").concat(m)]||u[m]||P[m]||a;return n?r.createElement(f,s(s({ref:t},p),{},{components:n})):r.createElement(f,s({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8439:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>P,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={title:"BeanPostProcessor\u76f8\u5173\u63a5\u53e3\u6267\u884c\u7684\u65b9\u6cd5",date:new Date("2019-08-18T00:00:00.000Z")},s=void 0,i={unversionedId:"spring/spring-framework/core-source-analysis/BeanPostProcessor-exe-method",id:"spring/spring-framework/core-source-analysis/BeanPostProcessor-exe-method",title:"BeanPostProcessor\u76f8\u5173\u63a5\u53e3\u6267\u884c\u7684\u65b9\u6cd5",description:"1. BeanPostProcessor\u76f8\u5173\u63a5\u53e3",source:"@site/docs/spring/spring-framework/core-source-analysis/BeanPostProcessor-exe-method.md",sourceDirName:"spring/spring-framework/core-source-analysis",slug:"/spring/spring-framework/core-source-analysis/BeanPostProcessor-exe-method",permalink:"/docs/spring/spring-framework/core-source-analysis/BeanPostProcessor-exe-method",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/spring/spring-framework/core-source-analysis/BeanPostProcessor-exe-method.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1684027896,formattedLastUpdatedAt:"May 14, 2023",frontMatter:{title:"BeanPostProcessor\u76f8\u5173\u63a5\u53e3\u6267\u884c\u7684\u65b9\u6cd5",date:"2019-08-18T00:00:00.000Z"},sidebar:"springframework",previous:{title:"BeanFactoryPostProcessor\u8be6\u89e3",permalink:"/docs/spring/spring-framework/core-source-analysis/BeanFactoryPostProcessor"},next:{title:"BeanPostProcessor\u8bb2\u89e3",permalink:"/docs/spring/spring-framework/core-source-analysis/BeanPostProcessor"}},c={},l=[{value:"1. BeanPostProcessor\u76f8\u5173\u63a5\u53e3",id:"1-beanpostprocessor\u76f8\u5173\u63a5\u53e3",level:3},{value:"2. BeanPostProcessor\u76f8\u5173\u63a5\u53e3\u6267\u884c\u987a\u5e8f",id:"2-beanpostprocessor\u76f8\u5173\u63a5\u53e3\u6267\u884c\u987a\u5e8f",level:3}],p={toc:l},u="wrapper";function P(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"1-beanpostprocessor\u76f8\u5173\u63a5\u53e3"},"1. BeanPostProcessor\u76f8\u5173\u63a5\u53e3"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"InstantiationAwareBeanPostProcessor")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"DestructionAwareBeanPostProcessor")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"MergedBeanDefinitionPostProcessor")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"SmartInstantiationAwareBeanPostProcessor"))),(0,o.kt)("p",null,"\u56db\u4e2a\u7ee7\u627f\u63a5\u53e3\u52a0\u4e0a ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},(0,o.kt)("inlineCode",{parentName:"em"},"BeanPostProcessor")))," \u4e00\u5171\u4e94\u4e2a\u63a5\u53e3\u3002\u770b\u4e00\u4e0b\u8fd9\u4e94\u4e2a\u63a5\u53e3\u7684\u65b9\u6cd5\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"public interface BeanPostProcessor {\n    @Nullable\n    default Object postProcessBeforeInitialization(Object bean, String beanName) throws BeansException {\n        return bean;\n    }\n        @Nullable\n    default Object postProcessAfterInitialization(Object bean, String beanName) throws BeansException {\n        return bean;\n    }\n\n}\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"InstantiationAwareBeanPostProcessor")," \u3001 ",(0,o.kt)("strong",{parentName:"p"},"DestructionAwareBeanPostProcessor"),"\u3001  ",(0,o.kt)("strong",{parentName:"p"},"MergedBeanDefinitionPostProcessor")," \u7ee7\u627f\u4e86 ",(0,o.kt)("strong",{parentName:"p"},"BeanPostProcessor")," \uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"public interface InstantiationAwareBeanPostProcessor extends BeanPostProcessor {\n    @Nullable\n    default Object postProcessBeforeInstantiation(Class<?> beanClass, String beanName) throws BeansException {\n        return null;\n    }\n    default boolean postProcessAfterInstantiation(Object bean, String beanName) throws BeansException {\n        return true;\n    }\n    //@since 5.1\n    @Nullable\n    default PropertyValues postProcessProperties(PropertyValues pvs, Object bean, String beanName)\n            throws BeansException {\n\n        return null;\n    }\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"public interface DestructionAwareBeanPostProcessor extends BeanPostProcessor {\n    void postProcessBeforeDestruction(Object bean, String beanName) throws BeansException;\n\n    default boolean requiresDestruction(Object bean) {\n        return true;\n    }\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"public interface MergedBeanDefinitionPostProcessor extends BeanPostProcessor {\n    void postProcessMergedBeanDefinition(RootBeanDefinition beanDefinition, Class<?> beanType, String beanName);\n    \n        default void resetBeanDefinition(String beanName) {\n    }\n}\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"SmartInstantiationAwareBeanPostProcessor")," \u7ee7\u627f\u4e86 ",(0,o.kt)("strong",{parentName:"p"},"InstantiationAwareBeanPostProcessor")," \u63a5\u53e3\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"public interface SmartInstantiationAwareBeanPostProcessor extends InstantiationAwareBeanPostProcessor {\n    @Nullable\n    default Class<?> predictBeanType(Class<?> beanClass, String beanName) throws BeansException {\n        return null;\n    }\n    @Nullable\n    default Constructor<?>[] determineCandidateConstructors(Class<?> beanClass, String beanName)\n            throws BeansException {\n\n        return null;\n    }\n    default Object getEarlyBeanReference(Object bean, String beanName) throws BeansException {\n        return bean;\n    }\n}\n")),(0,o.kt)("h3",{id:"2-beanpostprocessor\u76f8\u5173\u63a5\u53e3\u6267\u884c\u987a\u5e8f"},"2. BeanPostProcessor\u76f8\u5173\u63a5\u53e3\u6267\u884c\u987a\u5e8f"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"InstantiationAwareBeanPostProcessor#postProcessBeforeInstantiation"),(0,o.kt)("li",{parentName:"ol"},"MergedBeanDefinitionPostProcessor#postProcessMergedBeanDefinition"),(0,o.kt)("li",{parentName:"ol"},"SmartInstantiationAwareBeanPostProcessor#getEarlyBeanReference"),(0,o.kt)("li",{parentName:"ol"},"InstantiationAwareBeanPostProcessor#postProcessAfterInstantiation"),(0,o.kt)("li",{parentName:"ol"},"InstantiationAwareBeanPostProcessor#postProcessProperties"),(0,o.kt)("li",{parentName:"ol"},"BeanPostProcessor#postProcessBeforeInitialization"),(0,o.kt)("li",{parentName:"ol"},"BeanPostProcessor#postProcessAfterInitialization"),(0,o.kt)("li",{parentName:"ol"},"DestructionAwareBeanPostProcessor#requiresDestruction"),(0,o.kt)("li",{parentName:"ol"},"DestructionAwareBeanPostProcessor#postProcessBeforeDestruction")))}P.isMDXComponent=!0}}]);