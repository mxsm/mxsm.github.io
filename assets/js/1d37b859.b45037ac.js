"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[980],{3905:(n,e,t)=>{t.d(e,{Zo:()=>u,kt:()=>d});var a=t(7294);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function o(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,a,r=function(n,e){if(null==n)return{};var t,a,r={},i=Object.keys(n);for(a=0;a<i.length;a++)t=i[a],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(a=0;a<i.length;a++)t=i[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var s=a.createContext({}),c=function(n){var e=a.useContext(s),t=e;return n&&(t="function"==typeof n?n(e):o(o({},e),n)),t},u=function(n){var e=c(n.components);return a.createElement(s.Provider,{value:e},n.children)},b="mdxType",p={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(n,e){var t=n.components,r=n.mdxType,i=n.originalType,s=n.parentName,u=l(n,["components","mdxType","originalType","parentName"]),b=c(t),m=r,d=b["".concat(s,".").concat(m)]||b[m]||p[m]||i;return t?a.createElement(d,o(o({ref:e},u),{},{components:t})):a.createElement(d,o({ref:e},u))}));function d(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=n,l[b]="string"==typeof n?n:r,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6106:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=t(7462),r=(t(7294),t(3905));const i={title:"BeanDefinition\u8be6\u89e3",date:new Date("2019-11-11T00:00:00.000Z")},o=void 0,l={unversionedId:"spring/spring-framework/core-source-analysis/BeanDefinition",id:"spring/spring-framework/core-source-analysis/BeanDefinition",title:"BeanDefinition\u8be6\u89e3",description:"1. BeanDefinition\u7684\u7ee7\u627f\u56fe",source:"@site/docs/spring/spring-framework/core-source-analysis/BeanDefinition.md",sourceDirName:"spring/spring-framework/core-source-analysis",slug:"/spring/spring-framework/core-source-analysis/BeanDefinition",permalink:"/docs/spring/spring-framework/core-source-analysis/BeanDefinition",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/spring/spring-framework/core-source-analysis/BeanDefinition.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1678517863,formattedLastUpdatedAt:"Mar 11, 2023",frontMatter:{title:"BeanDefinition\u8be6\u89e3",date:"2019-11-11T00:00:00.000Z"},sidebar:"springframework",previous:{title:"AnnotationConfigApplicationContext\u6e90\u7801\u89e3\u6790",permalink:"/docs/spring/spring-framework/core-source-analysis/AnnotationConfigApplicationContext"},next:{title:"BeanFactoryPostProcessor\u8be6\u89e3",permalink:"/docs/spring/spring-framework/core-source-analysis/BeanFactoryPostProcessor"}},s={},c=[{value:"1. BeanDefinition\u7684\u7ee7\u627f\u56fe",id:"1-beandefinition\u7684\u7ee7\u627f\u56fe",level:3},{value:"2. AttributeAccessor\u5c5e\u6027\u5b58\u53d6\u5668\u7684\u6e90\u7801\u89e3\u6790",id:"2-attributeaccessor\u5c5e\u6027\u5b58\u53d6\u5668\u7684\u6e90\u7801\u89e3\u6790",level:3},{value:"3. BeanMetadataElement\u6e90\u7801\u89e3\u6790",id:"3-beanmetadataelement\u6e90\u7801\u89e3\u6790",level:3},{value:"4. BeanMetadataElement\u548cAttributeAccessor\u5173\u8054",id:"4-beanmetadataelement\u548cattributeaccessor\u5173\u8054",level:3},{value:"5.BeanDifinition\u6e90\u7801\u5206\u6790",id:"5beandifinition\u6e90\u7801\u5206\u6790",level:3}],u={toc:c},b="wrapper";function p(n){let{components:e,...t}=n;return(0,r.kt)(b,(0,a.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"1-beandefinition\u7684\u7ee7\u627f\u56fe"},"1. BeanDefinition\u7684\u7ee7\u627f\u56fe"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/mxsm/document/blob/master/image/Spring/Springframework/BeanDefinition.png?raw=true",alt:"\u56fe\u89e3"})),(0,r.kt)("p",null,"BeanDefinition\u5176\u5b9e\u5c31\u662f\u5bf9Bean\u7684\u4e00\u79cd\u62bd\u8c61\uff1a\nSpring\u4e2d\u7684Bean\u62bd\u8c61--------BeanDefinition\nBean\u7684\u5c5e\u6027\u64cd\u4f5c\u62bd\u8c61--------AttributeAccessor(\u5c5e\u6027\u5b58\u53d6\u5668)\u5bf9\u5c5e\u6027\u8fdb\u884c\u64cd\u4f5c\nBean\u7684\u5143\u6570\u636e\u9879\u62bd\u8c61--------BeanMetadataElement\uff08Bean\u7684\u5143\u6570\u636e\uff09"),(0,r.kt)("h3",{id:"2-attributeaccessor\u5c5e\u6027\u5b58\u53d6\u5668\u7684\u6e90\u7801\u89e3\u6790"},"2. AttributeAccessor\u5c5e\u6027\u5b58\u53d6\u5668\u7684\u6e90\u7801\u89e3\u6790"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public interface AttributeAccessor {\n\n    //\u8bbe\u7f6e\u5c5e\u6027\n    void setAttribute(String name, @Nullable Object value);\n\n    //\u83b7\u53d6\u5c5e\u6027\n    @Nullable\n    Object getAttribute(String name);\n\n    //\u5220\u9664\u5c5e\u6027\n    @Nullable\n    Object removeAttribute(String name);\n\n    //\u5224\u65ad\u5c5e\u6027name\u662f\u5426\u5b58\u5728\n    boolean hasAttribute(String name);\n\n    //\u83b7\u53d6\u5c5e\u6027\u5217\u8868\n    String[] attributeNames();\n\n}\n")),(0,r.kt)("p",null,"AttributeAccessor\u5b9e\u73b0\u7684\u62bd\u8c61\u65b9\u6cd5\u662fAttributeAccessorSupport\uff0c\u8fd9\u91cc\u9762\u5bf9\u63a5\u53e3\u6240\u6709\u7684\u65b9\u6cd5\u90fd\u8fdb\u884c\u4e86\u5b9e\u73b0\u3002"),(0,r.kt)("h3",{id:"3-beanmetadataelement\u6e90\u7801\u89e3\u6790"},"3. BeanMetadataElement\u6e90\u7801\u89e3\u6790"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public interface BeanMetadataElement {\n\n    //\u5143\u6570\u636e\u5143\u7d20\u7684\u914d\u7f6e\u7684\u6e90bean\u5bf9\u8c61\n    @Nullable\n    default Object getSource() {\n        return null;\n    }\n\n}\n")),(0,r.kt)("p",null,"BeanMetadataAttribute\u5b9e\u73b0\u4e86BeanMetadataElement\u63a5\u53e3\u3002"),(0,r.kt)("h3",{id:"4-beanmetadataelement\u548cattributeaccessor\u5173\u8054"},"4. BeanMetadataElement\u548cAttributeAccessor\u5173\u8054"),(0,r.kt)("p",null,"\u901a\u8fc7 BeanMetadataAttributeAccessor \u7c7b\u6574\u5408\u5bf9Bean\u7684\u64cd\u4f5cAttributeAccessor\u4ee5\u53caBeanMetadataElement"),(0,r.kt)("h3",{id:"5beandifinition\u6e90\u7801\u5206\u6790"},"5.BeanDifinition\u6e90\u7801\u5206\u6790"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"BeanDifinition"))," \u5176\u5b9e\u5c31\u662f\u4e00\u4e2a\u63a5\u53e3\uff0c\u63cf\u8ff0\u4e00\u4e2abean\u7684\u5b9e\u4f8b\uff0c\u5305\u62ec\u5c5e\u6027\u503c\uff0c\u6784\u9020\u65b9\u6cd5\u53c2\u6570\u503c\u548c\u7ee7\u627f\u81ea\u5b83\u7684\u7c7b\u7684\u66f4\u591a\u4fe1\u606f\u4ee5\u53ca\u4e00\u4e9b\u4f9d\u8d56\u4fe1\u606f\uff0c\u61d2\u52a0\u8f7d\u7b49\u7b49\u3002BeanDefinition\u4ec5\u4ec5\u662f\u4e00\u4e2a\u6700\u7b80\u5355\u7684\u63a5\u53e3\uff0c\u4e3b\u8981\u529f\u80fd\u662f\u5141\u8bb8BeanFactoryPostProcessor \u4f8b\u5982PropertyPlaceHolderConfigure \u80fd\u591f\u68c0\u7d22\u5e76\u4fee\u6539\u5c5e\u6027\u503c\u548c\u522b\u7684bean\u7684\u5143\u6570\u636e\u3002\u4e0b\u9762\u6765\u5206\u6790\u4e00\u4e0b\u6e90\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public interface BeanDefinition extends AttributeAccessor, BeanMetadataElement {\n\n    /**\n     * \u6807\u51c6\u5355\u4f8b\u4f5c\u7528\u57df\u7684\u4f5c\u7528\u57df\u6807\u8bc6\u7b26\uff1a\u201csingleton\u201d\u3002\n     * \u5bf9\u4e8e\u6269\u5c55\u7684bean\u5de5\u5382\u53ef\u80fd\u652f\u6301\u66f4\u591a\u7684\u4f5c\u7528\u57df\u3002\n     * \u6ce8\u610f\uff1a\u5728Spring\u4e2d\u9ed8\u8ba4\u7684\u521b\u5efa\u7684\u5bf9\u8c61\u5c31\u662f\u5355\u4f8b\u6a21\u5f0f\n     */\n    String SCOPE_SINGLETON = ConfigurableBeanFactory.SCOPE_SINGLETON;\n\n    /**\n     * \u6807\u51c6\u539f\u578b\u4f5c\u7528\u57df\u7684\u8303\u56f4\u6807\u8bc6\u7b26\uff1a\u201cprototype\u201d\u3002\n     * \u5bf9\u4e8e\u6269\u5c55\u7684bean\u5de5\u5382\u53ef\u80fd\u652f\u6301\u66f4\u591a\u7684\u4f5c\u7528\u57df\u3002\n     */\n    String SCOPE_PROTOTYPE = ConfigurableBeanFactory.SCOPE_PROTOTYPE;\n\n\n    /**\n     * \u8868\u793aBeanDefinition\u662f\u5e94\u7528\u7a0b\u5e8f\u4e3b\u8981\u90e8\u5206\u7684\u89d2\u8272\u63d0\u793a\u3002 \u901a\u5e38\u5bf9\u5e94\u4e8e\u7528\u6237\u5b9a\u4e49\u7684bean\u3002\n     */\n    int ROLE_APPLICATION = 0;\n\n    /**\n     * \u8868\u793aBeanDefinition\u662f\u67d0\u4e9b\u5927\u578b\u914d\u7f6e\u7684\u652f\u6301\u90e8\u5206\u7684\u89d2\u8272\u63d0\u793a\uff0c\u901a\u5e38\u662f\u4e00\u4e2a\u5916\u90e8ComponentDefinition\n     * \u5f53\u67e5\u770b\u67d0\u4e2a\u7279\u5b9a\u7684ComponentDefinition\u65f6\uff0c\u8ba4\u4e3abean\u975e\u5e38\u91cd\u8981\uff0c\u4ee5\u4fbf\u5728\u67e5\u770b\u5e94\u7528\u7a0b\u5e8f\u7684\u6574\u4f53\u914d\u7f6e\u65f6\u80fd\u591f\u610f\u8bc6\u5230\u8fd9\u4e00\u70b9\u3002\n     * \u6ce8\u610f\uff1a\u5b9e\u9645\u4e0a\u5c31\u662f\u8bf4\uff0c\u6211\u8fd9\u4e2aBean\u662f\u7528\u6237\u7684\uff0c\u662f\u4ece\u914d\u7f6e\u6587\u4ef6\u4e2d\u8fc7\u6765\u7684\n     */\n    int ROLE_SUPPORT = 1;\n\n    /**\n     * \u89d2\u8272\u63d0\u793a\u8868\u660e\u4e00\u4e2aBeanDefinition\u662f\u63d0\u4f9b\u4e00\u4e2a\u5b8c\u5168\u80cc\u540e\u7684\u89d2\u8272\uff0c\u5e76\u4e14\u4e0e\u6700\u7ec8\u7528\u6237\u6ca1\u6709\u5173\u7cfb\u3002\n     * \u8fd9\u4e2a\u63d0\u793a\u7528\u4e8e\u6ce8\u518c\u5b8c\u5168\u662fComponentDefinition\u5185\u90e8\u5de5\u4f5c\u7684\u4e00\u90e8\u5206\u7684bean\n     * \u6ce8\u610f\uff1a\u8fd9Bean\u662fSpring\u5185\u90e8\u7684\u548c\u4f7f\u7528\u7684\u7528\u6237\u6ca1\u6709\u5173\u7cfb\n     */\n    int ROLE_INFRASTRUCTURE = 2;\n\n\n    // Modifiable attributes\n\n    //\u5982\u679c\u7236\u7c7b\u5b58\u5728\uff0c\u8bbe\u7f6e\u8fd9\u4e2abean\u5b9a\u4e49\u7684\u7236\u5b9a\u4e49\u7684\u540d\u79f0\n    void setParentName(@Nullable String parentName);\n\n    @Nullable\n    String getParentName();\n\n    //\u6307\u5b9a\u6b64bean\u5b9a\u4e49\u7684bean\u7c7b\u540d\u79f0\u3002\n    //\u7c7b\u540d\u79f0\u53ef\u4ee5\u5728bean factory\u540e\u671f\u5904\u7406\u4e2d\u4fee\u6539\uff0c\u901a\u5e38\u7528\u5b83\u7684\u89e3\u6790\u53d8\u4f53\u66ff\u6362\u539f\u6765\u7684\u7c7b\u540d\u79f0\u3002\n    void setBeanClassName(@Nullable String beanClassName);\n\n    //\u8fd4\u56de\u6b64bean\u5b9a\u4e49\u7684\u5f53\u524dbean\u7c7b\u540d\u79f0\u3002\n    //\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u8fd9\u4e0d\u4e00\u5b9a\u662f\u5728\u8fd0\u884c\u65f6\u4f7f\u7528\u7684\u5b9e\u9645\u7c7b\u540d\uff0c\u4ee5\u9632\u5b50\u7c7b\u5b9a\u4e49\u8986\u76d6/\u7ee7\u627f\u5176\u7236\u7c7b\u7684\u7c7b\u540d\u3002\n    //\u6b64\u5916\uff0c\u8fd9\u53ef\u80fd\u53ea\u662f\u8c03\u7528\u5de5\u5382\u65b9\u6cd5\u7684\u7c7b\uff0c\u6216\u8005\u5b83 \u5728\u8c03\u7528\u65b9\u6cd5\u7684\u5de5\u5382bean\u5f15\u7528\u7684\u60c5\u51b5\u4e0b\u751a\u81f3\u53ef\u80fd\u662f\u7a7a\u7684\u3002\n    //\u56e0\u6b64\uff0c\u4e0d\u8981\u8ba4\u4e3a\u8fd9\u662f\u5728\u8fd0\u884c\u65f6\u5b9a\u4e49\u7684bean\u7c7b\u578b\uff0c\u800c\u53ea\u662f\u5c06\u5176\u7528\u4e8e\u5728\u5355\u72ec\u7684bean\u5b9a\u4e49\u7ea7\u522b\u8fdb\u884c\u89e3\u6790\u3002\n    @Nullable\n    String getBeanClassName();\n\n    //\u8bbe\u7f6e\u548c\u83b7\u53d6scope\n    void setScope(@Nullable String scope);\n\n    @Nullable\n    String getScope();\n\n    //\u8bbe\u7f6e\u662f\u5426\u9700\u8981\u61d2\u52a0\u8f7d ---- \u9ed8\u8ba4\u662f\u975e\u61d2\u52a0\u8f7d\u5728Spring\u7684\u9ed8\u8ba4\u5b9e\u73b0\u8fc7\u7a0b\n    void setLazyInit(boolean lazyInit);\n\n    boolean isLazyInit();\n\n    /**\n     *\n     * \u8bbe\u7f6e\u5f53\u524dbeand\u4f9d\u8d56,\u9700\u8981\u88ab\u521d\u59cb\u5316\u8fd9\u4e9b\u4f9d\u8d56bean,beanFacotryb\u4fdd\u8bc1\u9996\u5148\u521d\u59cb\u5316\u8fd9\u4e9b\u4f9d\u8d56\u7684bean\n     */\n    void setDependsOn(@Nullable String... dependsOn);\n\n    /**\n     *\u83b7\u53d6\u4f9d\u8d56bean\u7684\u540d\u79f0\n     */\n    @Nullable\n    String[] getDependsOn();\n\n    //\u8bbe\u7f6e\u8fd9\u4e2abean\u662f\u5426\u662f\u83b7\u5f97\u81ea\u52a8\u88c5\u914d\u5230\u5176\u4ed6bean\u7684\u5019\u9009\u4eba\u3002\n    //\u9700\u8981\u6ce8\u610f\u662f\uff0c\u6b64\u6807\u5fd7\u65e8\u5728\u4ec5\u5f71\u54cd\u57fa\u4e8e\u7c7b\u578b\u7684\u81ea\u52a8\u88c5\u914d\u3002---\u9ed8\u8ba4\u662f\u6309\u7167\u7c7b\u578b\u8fdb\u884c\u88c5\u914d\n    //\u5b83\u4e0d\u4f1a\u5f71\u54cd\u6309\u540d\u79f0\u7684\u663e\u5f0f\u5f15\u7528\uff0c\u5373\u4f7f\u6307\u5b9a\u7684bean\u6ca1\u6709\u6807\u8bb0\u4e3aautowire\u5019\u9009\uff0c\u4e5f\u53ef\u4ee5\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\u3002\n    //\u56e0\u6b64\uff0c\u5982\u679c\u540d\u79f0\u5339\u914d\uff0c\u901a\u8fc7\u540d\u79f0\u7684\u81ea\u52a8\u88c5\u914d\u5c06\u6ce8\u5165\u4e00\u4e2abean\u3002\n    void setAutowireCandidate(boolean autowireCandidate);\n\n    /**\n     * \u8fd4\u56de\u8fd9\u4e2abean\u662f\u5426\u662f\u81ea\u52a8\u88c5\u914d\u5230\u5176\u4ed6bean\u7684\u5019\u9009\u8005\u3002\u5c31\u662f\u662f\u5426\u5728\u5176\u4ed6\u7c7b\u4e2d\u4f7f\u7528autowired\u6765\u6ce8\u5165\u5f53\u524dBean\u7684\n     */\n    boolean isAutowireCandidate();\n\n    //\u662f\u5426\u4e3a\u4e3b\u5019\u9009bean    \u4f7f\u7528\u6ce8\u89e3\uff1a@Primary\n    void setPrimary(boolean primary);\n\n    //\u8fd4\u56de\u8fd9\u4e2abean\u662f\u5426\u662f\u4e3b\u8981\u7684autowire\u5019\u9009\u8005\u3002\n    boolean isPrimary();\n\n    //\u6307\u5b9a\u8981\u4f7f\u7528\u7684\u5de5\u5382bean\uff08\u5982\u679c\u6709\u7684\u8bdd\uff09\u3002 \u8fd9\u662f\u8c03\u7528\u6307\u5b9a\u7684\u5de5\u5382\u65b9\u6cd5\u7684bean\u7684\u540d\u79f0\n    void setFactoryBeanName(@Nullable String factoryBeanName);\n\n    //\u8fd4\u56de\u5de5\u5382bean\u7684\u540d\u5b57\uff0c\u5982\u679c\u6709\u7684\u8bdd\u3002\n    @Nullable\n    String getFactoryBeanName();\n\n    //\u5982\u679c\u6709\u7684\u8bdd\uff0c\u6307\u5b9a\u5de5\u5382\u65b9\u6cd5\u3002\n    //\u8fd9\u4e2a\u65b9\u6cd5\u5148\u5c06\u901a\u8fc7\u6784\u9020\u51fd\u6570\u53c2\u6570\u88ab\u8c03\u7528\uff0c\u6216\u8005\u5982\u679c\u53c2\u6570\uff0c\u5c06\u8c03\u7528\u8be5\u65b9\u6cd5\u7684\u65e0\u53c2\u6570\u6784\u9020\u3002\n    //\u65b9\u6cd5\u5c06\u5728\u6307\u5b9a\u7684\u5de5\u5382bean\uff08\u5982\u679c\u6709\u7684\u8bdd\uff09\u4e0a\u88ab\u8c03\u7528\uff0c\u6216\u8005\u4f5c\u4e3a\u672c\u5730bean\u7c7b\u7684\u9759\u6001\u65b9\u6cd5\u88ab\u8c03\u7528\n    void setFactoryMethodName(@Nullable String factoryMethodName);\n\n    /**\n     * \u8fd4\u56de\u5de5\u5382\u65b9\u6cd5\u5982\u679c\u6709\u7684\u8bdd\n     */\n    @Nullable\n    String getFactoryMethodName();\n\n    //\u8fd4\u56de\u6b64bean\u7684\u6784\u9020\u51fd\u6570\u53c2\u6570\u503c\u3002\n    ConstructorArgumentValues getConstructorArgumentValues();\n\n    //\u5224\u65ad\u662f\u5426\u6709\u6784\u9020\u51fd\u6570\u53c2\u6570--5.1\u7248\u672c\u5f00\u59cb\n    default boolean hasConstructorArgumentValues() {\n        return !getConstructorArgumentValues().isEmpty();\n    }\n\n    //\u83b7\u53d6\u666e\u901a\u5c5e\u6027\u96c6\u5408\n    MutablePropertyValues getPropertyValues();\n\n    /**\n     * \u5224\u65ad\u662f\u5426\u6709PropertyValues\n     * @since 5.0.2\n     */\n    default boolean hasPropertyValues() {\n        return !getPropertyValues().isEmpty();\n    }\n\n    //\u8bbe\u7f6e\u548c\u83b7\u53d6\u521d\u59cb\u5316\u65b9\u6cd5\u7684\u540d\u79f0--\u4ece5.1\u7248\u672c\u5f00\u59cb\n    void setInitMethodName(@Nullable String initMethodName);\n\n    @Nullable\n    String getInitMethodName();\n\n\n    //\u8bbe\u7f6e\u548c\u83b7\u53d6Destroy\u65b9\u6cd5\u7684\u540d\u79f0  -- \u4ece5.1\u7248\u672c\u5f00\u59cb\n    void setDestroyMethodName(@Nullable String destroyMethodName);\n\n    @Nullable\n    String getDestroyMethodName();\n\n\n    //\u8bbe\u7f6e\u548c\u83b7\u53d6\u89d2\u8272\n    void setRole(int role);\n\n    int getRole();\n\n\n    //\u8bbe\u7f6e\u548c\u83b7\u53d6\u4eba\u53ef\u4ee5\u8bfb\u7684\u63cf\u8ff0--\u4eba\u53ef\u4ee5\u7406\u89e3\u7684\u63cf\u8ff0 \u4ece5.1\u7248\u672c\u5f00\u59cb\n    void setDescription(@Nullable String description);\n\n    @Nullable\n    String getDescription();\n\n\n    //\u5224\u65ad\u662f\u5426\u4e3a\u5355\u4f8b\n    boolean isSingleton();\n\n    //\u5224\u65ad\u662f\u5426\u4e3a\u539f\u578b\n    boolean isPrototype();\n\n    //\u5224\u65ad\u662f\u5426\u4e3a\u62bd\u8c61Bean\uff0c\u5982\u679c\u662f\u5c31\u4e0d\u80fd\u5b9e\u4f8b\u5316\n    boolean isAbstract();\n\n    //\u8fd4\u56deBeanDefinition\u7684\u8d44\u6e90\u63cf\u8ff0\n    @Nullable\n    String getResourceDescription();\n\n    //\u8fd4\u56de\u539f\u59cb\u7684BeanDefinition\u5982\u679c\u6ca1\u6709\u8fd4\u56denull\n    @Nullable\n    BeanDefinition getOriginatingBeanDefinition();\n\n}\n")))}p.isMDXComponent=!0}}]);