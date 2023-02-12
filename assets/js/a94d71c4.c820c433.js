"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[6129],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),g=a,m=u["".concat(l,".").concat(g)]||u[g]||d[g]||o;return n?r.createElement(m,s(s({ref:t},c),{},{components:n})):r.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=g;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},5776:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={title:"Spring AOP \u6e90\u7801\u89e3\u6790",linkTitle:"Spring AOP \u6e90\u7801\u89e3\u6790",date:new Date("2021-12-01T00:00:00.000Z"),weight:202112011717},s=void 0,i={unversionedId:"spring/spring-framework/aop-source-analysis/aop-source-analysis",id:"spring/spring-framework/aop-source-analysis/aop-source-analysis",title:"Spring AOP \u6e90\u7801\u89e3\u6790",description:"Spring framework\u7248\u672c 5.3.x",source:"@site/docs/spring/spring-framework/aop-source-analysis/aop-source-analysis.md",sourceDirName:"spring/spring-framework/aop-source-analysis",slug:"/spring/spring-framework/aop-source-analysis/",permalink:"/docs/spring/spring-framework/aop-source-analysis/",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/spring/spring-framework/aop-source-analysis/aop-source-analysis.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1676193845,formattedLastUpdatedAt:"Feb 12, 2023",frontMatter:{title:"Spring AOP \u6e90\u7801\u89e3\u6790",linkTitle:"Spring AOP \u6e90\u7801\u89e3\u6790",date:"2021-12-01T00:00:00.000Z",weight:202112011717},sidebar:"springframework",previous:{title:"Spring Web Context",permalink:"/docs/spring/spring-framework/web-source-analysis/spring-web-context"},next:{title:"Spring AOP Apis",permalink:"/docs/spring/spring-framework/aop-source-analysis/spring-aop-apis"}},l={},p=[{value:"1. \u57fa\u672c\u6982\u5ff5",id:"1-\u57fa\u672c\u6982\u5ff5",level:3},{value:"2. \u6e90\u7801\u89e3\u6790",id:"2-\u6e90\u7801\u89e3\u6790",level:3},{value:"2.1 AspectJAutoProxyRegistrar\u6e90\u7801\u89e3\u6790",id:"21-aspectjautoproxyregistrar\u6e90\u7801\u89e3\u6790",level:4},{value:"2.2 AnnotationAwareAspectJAutoProxyCreator\u6e90\u7801\u89e3\u6790",id:"22-annotationawareaspectjautoproxycreator\u6e90\u7801\u89e3\u6790",level:4},{value:"2.2.1 AbstractAutoProxyCreator#postProcessBeforeInstantiation",id:"221-abstractautoproxycreatorpostprocessbeforeinstantiation",level:5},{value:"2.2.1 AbstractAutoProxyCreator#postProcessAfterInitialization",id:"221-abstractautoproxycreatorpostprocessafterinitialization",level:5},{value:"2.2.2 AbstractAutoProxyCreator#createProxy\u521b\u5efa\u4ee3\u7406\u7c7b",id:"222-abstractautoproxycreatorcreateproxy\u521b\u5efa\u4ee3\u7406\u7c7b",level:5},{value:"3. Spring \u521b\u5efaBean\u7684\u7b80\u6613\u6d41\u7a0b",id:"3-spring-\u521b\u5efabean\u7684\u7b80\u6613\u6d41\u7a0b",level:3},{value:"4. \u603b\u7ed3",id:"4-\u603b\u7ed3",level:3}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Spring framework\u7248\u672c 5.3.x")),(0,a.kt)("h3",{id:"1-\u57fa\u672c\u6982\u5ff5"},"1. \u57fa\u672c\u6982\u5ff5"),(0,a.kt)("p",null,"AOP \u662f\u9762\u5411\u5207\u9762\uff5c\u9762\u5411\u65b9\u9762\u7f16\u7a0b\u7684\u7b80\u79f0\uff0cAspect-Oriented Programming\u3002 Aspect \u662f\u4e00\u79cd\u6a21\u5757\u5316\u673a\u5236\uff0c\u662f\u7528\u6765\u63cf\u8ff0\u5206\u6563\u5728\u5bf9\u8c61\uff0c\u7c7b\uff0c\u51fd\u6570\u4e2d\u7684\u6a2a\u5207\u5173\u6ce8\u70b9\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u57fa\u7840"),"\uff1a \u5f85\u589e\u5f3a\u5bf9\u8c61\u6216\u8005\u76ee\u6807\u5bf9\u8c61"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u5207\u9762"),"\uff1a \u5305\u542b\u5bf9\u57fa\u7840\u7684\u589e\u5f3a\u5e94\u7528"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u914d\u7f6e"),"\uff1a \u53ef\u4ee5\u770b\u6210\u4e00\u79cd\u7f16\u7ec7\uff0c\u901a\u8fc7\u5728AOP\u4f53\u7cfb\u4e2d\u63d0\u4f9b\u8fd9\u4e2a\u914d\u7f6e\u73af\u5883\uff0c\u5c06\u57fa\u7840\u548c\u5207\u9762\u7ed3\u5408\u8d77\u6765\uff0c\u4ece\u800c\u5b8c\u6210\u5207\u9762\u5bf9\u76ee\u6807\u5bf9\u8c61\u7684\u7f16\u7ec7\u5b9e\u73b0"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Advice\uff08\u901a\u77e5\uff09"),"\uff1a \u5b9a\u4e49\u5728\u8fde\u63a5\u70b9\u505a\u4ec0\u4e48\uff0c\u4e3a\u5207\u9762\u589e\u5f3a\u63d0\u4f9b\u7ec7\u5165\u63a5\u53e3\u3002\u5728Spring AOP \u4e2d\uff0c\u5b83\u4e3b\u8981\u63cf\u8ff0Spring AOP \u56f4\u7ed5\u65b9\u6cd5\u8c03\u7528\u800c\u6ce8\u5165\u7684\u5207\u9762\u884c\u4e3a\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Pointcut\uff08\u5207\u70b9\uff09"),"\uff1a\u51b3\u5b9aAdvice\u901a\u77e5\u5e94\u8be5\u4f5c\u7528\u4e8e\u54ea\u4e2a\u8fde\u63a5\u70b9\uff0c\u4e5f\u5c31\u662f\u8bf4\u901a\u8fc7Pointcut\u6765\u5b9a\u4e49\u9700\u8981\u589e\u5f3a\u7684\u65b9\u6cd5\u96c6\u5408\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Advisor\uff08\u901a\u77e5\u5668\uff09"),"\uff1a\u5b8c\u6210\u5bf9\u76ee\u6807\u65b9\u6cd5\u7684\u5207\u9762\u589e\u5f3a\u8bbe\u8ba1\uff08advice\uff09\u548c\u5173\u6ce8\u70b9\u7684\u8bbe\u8ba1\u4ee5\u540e\uff0c\u9700\u8981\u4e00\u4e2a\u5bf9\u8c61\u628a\u5b83\u4eec\u7ed3\u5408\u8d77\u6765\uff0c\u5b8c\u6210\u8fd9\u4e2a\u4f5c\u7528\u7684\u5c31\u662fAdvisor\uff08\u901a\u77e5\u5668\uff09\u3002\u901a\u8fc7Advisor \uff0c\u53ef\u4ee5\u5b9a\u4e49\u5e94\u8be5\u4f7f\u7528\u90a3\u4e2a\u901a\u77e5\u5e76\u5728\u54ea\u4e2a\u5173\u6ce8\u70b9\u4f7f\u7528\u5b83\u3002")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://github.com/mxsm/picture/blob/main/spring/aop/Pointcut,Advice,Advisor%E4%B8%89%E8%80%85%E4%B9%8B%E9%97%B4%E7%9A%84%E5%85%B3%E7%B3%BB.png?raw=true",alt:null})),(0,a.kt)("h3",{id:"2-\u6e90\u7801\u89e3\u6790"},"2. \u6e90\u7801\u89e3\u6790"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6e90\u7801\u89e3\u6790\u4ee5\u6ce8\u89e3\u4e3a\u5206\u6790")),(0,a.kt)("p",null,"\u901a\u8fc7 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"@EnableAspectJAutoProxy"))," \u6ce8\u89e3\u5f00\u5f00\u542fAOP:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"@Target(ElementType.TYPE)\n@Retention(RetentionPolicy.RUNTIME)\n@Documented\n@Import(AspectJAutoProxyRegistrar.class)\npublic @interface EnableAspectJAutoProxy {\n\n    /**\n     * false:\u8868\u793a\u4f7f\u7528java\u4ee3\u7406\n     * true\uff1a\u8868\u793a\u4f7f\u7528cglib\u4ee3\u7406\n     */\n    boolean proxyTargetClass() default false;\n\n    /**\n     * \u4ee3\u7406\u7684\u66b4\u9732\u65b9\u5f0f,\u89e3\u51b3\u5185\u90e8\u8c03\u7528\u4e0d\u80fd\u4f7f\u7528\u4ee3\u7406\u7684\u573a\u666f\uff0c\u9ed8\u8ba4\u4e3afalse\n     */\n    boolean exposeProxy() default false;\n}\n")),(0,a.kt)("p",null,"\u6ce8\u89e3\u4f7f\u7528 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"@Import"))," \u6ce8\u89e3\u5f15\u5165\u4e86 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"AspectJAutoProxyRegistrar"))," \u7c7b\uff0c\u63a5\u4e0b\u6765\u8ddf\u8e2a\u4e00\u4e0b ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"AspectJAutoProxyRegistrar"))," \u7c7b"),(0,a.kt)("h4",{id:"21-aspectjautoproxyregistrar\u6e90\u7801\u89e3\u6790"},"2.1 AspectJAutoProxyRegistrar\u6e90\u7801\u89e3\u6790"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'class AspectJAutoProxyRegistrar implements ImportBeanDefinitionRegistrar {\n    @Override\n    public void registerBeanDefinitions(\n            AnnotationMetadata importingClassMetadata, BeanDefinitionRegistry registry) {\n        \n        //\u6ce8\u518cAnnotationAwareAspectJAutoProxyCreator\n        AopConfigUtils.registerAspectJAnnotationAutoProxyCreatorIfNecessary(registry);\n        \n        //\u8bfb\u53d6\u914d\u7f6e\u7684\u6ce8\u89e3EnableAspectJAutoProxy\u5c5e\u6027\n        AnnotationAttributes enableAspectJAutoProxy =\n                AnnotationConfigUtils.attributesFor(importingClassMetadata, EnableAspectJAutoProxy.class);\n        if (enableAspectJAutoProxy != null) {\n            if (enableAspectJAutoProxy.getBoolean("proxyTargetClass")) {\n                AopConfigUtils.forceAutoProxyCreatorToUseClassProxying(registry);\n            }\n            if (enableAspectJAutoProxy.getBoolean("exposeProxy")) {\n                AopConfigUtils.forceAutoProxyCreatorToExposeProxy(registry);\n            }\n        }\n    }\n}\n')),(0,a.kt)("p",null,"\u901a\u8fc7\u6e90\u4ee3\u7801\u53d1\u73b0 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"AspectJAutoProxyRegistrar"))," \u5b9e\u73b0\u4e86 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"ImportBeanDefinitionRegistrar"))," \u63a5\u53e3\uff0c\u5728Spring\u5bb9\u5668\u542f\u52a8\u7684\u65f6\u5019\u4f1a\u8c03\u7528 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"ImportBeanDefinitionRegistrar#registerBeanDefinitions"))," \u65b9\u6cd5\u6765\u6ce8\u5165 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"AnnotationAwareAspectJAutoProxyCreator"))," "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"AopConfigUtils.registerAspectJAnnotationAutoProxyCreatorIfNecessary(registry);\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6ce8\u518c\u7684Bean\u540d\u79f0\u4e3a:org.springframework.aop.config.internalAutoProxyCreator")),(0,a.kt)("p",null,"\u6700\u7ec8\u8c03\u7528\u7684\u662f ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"AopConfigUtils#registerOrEscalateApcAsRequired"))," \u65b9\u6cd5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'@Nullable\nprivate static BeanDefinition registerOrEscalateApcAsRequired(\n        Class<?> cls, BeanDefinitionRegistry registry, @Nullable Object source) {\n\n    Assert.notNull(registry, "BeanDefinitionRegistry must not be null");\n\n    if (registry.containsBeanDefinition(AUTO_PROXY_CREATOR_BEAN_NAME)) {\n        BeanDefinition apcDefinition = registry.getBeanDefinition(AUTO_PROXY_CREATOR_BEAN_NAME);\n        if (!cls.getName().equals(apcDefinition.getBeanClassName())) {\n            int currentPriority = findPriorityForClass(apcDefinition.getBeanClassName());\n            int requiredPriority = findPriorityForClass(cls);\n            if (currentPriority < requiredPriority) {\n                apcDefinition.setBeanClassName(cls.getName());\n            }\n        }\n        return null;\n    }\n\n    RootBeanDefinition beanDefinition = new RootBeanDefinition(cls);\n    beanDefinition.setSource(source);\n    beanDefinition.getPropertyValues().add("order", Ordered.HIGHEST_PRECEDENCE);\n    beanDefinition.setRole(BeanDefinition.ROLE_INFRASTRUCTURE);\n    registry.registerBeanDefinition(AUTO_PROXY_CREATOR_BEAN_NAME, beanDefinition);\n    return beanDefinition;\n}\n')),(0,a.kt)("p",null,"\u5230\u8fd9\u91cc ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"AnnotationAwareAspectJAutoProxyCreator"))," \u7c7b\u6ce8\u518c\u5b8c\u6210\u3002\u63a5\u4e0b\u6765\u770b ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"AnnotationAwareAspectJAutoProxyCreator"))," \u662f\u5982\u4f55\u521b\u5efa\u4ee3\u7406\u7c7b\u7684\u3002"),(0,a.kt)("h4",{id:"22-annotationawareaspectjautoproxycreator\u6e90\u7801\u89e3\u6790"},"2.2 AnnotationAwareAspectJAutoProxyCreator\u6e90\u7801\u89e3\u6790"),(0,a.kt)("p",null,"\u9996\u5148\u770b\u4e00\u4e0b\u7c7b\u7684\u7ee7\u627f\u5173\u7cfb\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://github.com/mxsm/picture/blob/main/spring/aop/AnnotationAwareAspectJAutoProxyCreator.png?raw=true",alt:null})),(0,a.kt)("p",null,"\u901a\u8fc7\u7ee7\u627f\u5173\u7cfb\u53d1\u73b0\u5b9e\u73b0\u4e86 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"SmartInstantiationAwareBeanPostProcessor\uff0cBeanFactoryAware\uff0cInstantiationAwareBeanPostProcessor\uff0cBeanPostProcessor")),"\u3002 \u4e0b\u9762\u770b\u4e00\u4e0b\u63a5\u53e3\u6267\u884c\u7684\u65b9\u5f0f\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://github.com/mxsm/picture/blob/main/spring/aop/AOP%E6%89%A7%E8%A1%8C%E6%B5%81%E7%A8%8B%E5%9B%BE.png?raw=true",alt:null})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"AbstractAutoProxyCreator")),"  \u91cd\u5199\u4e86 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"BeanPostProcessor#postProcessAfterInitialization\u65b9\u6cd5 \u548cInstantiationAwareBeanPostProcessor#postProcessBeforeInstantiation\u65b9\u6cd5"))," ,\u63a5\u4e0b\u6765\u8be6\u7ec6\u5206\u6790\u4e00\u4e0b\u8fd9\u4e2a\u4e24\u4e2a\u65b9\u6cd5\uff1a"),(0,a.kt)("h5",{id:"221-abstractautoproxycreatorpostprocessbeforeinstantiation"},"2.2.1 AbstractAutoProxyCreator#postProcessBeforeInstantiation"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"    @Override\n    public Object postProcessBeforeInstantiation(Class<?> beanClass, String beanName) {\n        //\u83b7\u53d6bean\u7684key\n        Object cacheKey = getCacheKey(beanClass, beanName);\n        //\u5224\u65adbean\u662f\u5426\u5df2\u7ecf\u5904\u7406\u8fc7\u4e86\uff0c\u5904\u7406\u4e86\u7684\u4f1a\u653e\u5728targetSourcedBeans\n        if (!StringUtils.hasLength(beanName) || !this.targetSourcedBeans.contains(beanName)) {\n            //\u5224\u65ad\u662f\u5426\u5305\u542b\u4e86advise\n            if (this.advisedBeans.containsKey(cacheKey)) {\n                return null;\n            }\n            //\u5224\u65ad\u7c7b\u578b\u548c\u662f\u5426\u5e94\u8be5\u8df3\u8fc7\n            if (isInfrastructureClass(beanClass) || shouldSkip(beanClass, beanName)) {\n                this.advisedBeans.put(cacheKey, Boolean.FALSE);\n                return null;\n            }\n        }\n        \n        TargetSource targetSource = getCustomTargetSource(beanClass, beanName);\n        if (targetSource != null) {\n            if (StringUtils.hasLength(beanName)) {\n                this.targetSourcedBeans.add(beanName);\n            }\n            //\u83b7\u53d6\u901a\u77e5\u548c\u901a\u77e5\u5668\n            Object[] specificInterceptors = getAdvicesAndAdvisorsForBean(beanClass, beanName, targetSource);\n            //\u521b\u5efa\u4ee3\u7406\n            Object proxy = createProxy(beanClass, beanName, specificInterceptors, targetSource);\n            this.proxyTypes.put(cacheKey, proxy.getClass());\n            return proxy;\n        }\n\n        return null;\n    }\n")),(0,a.kt)("h5",{id:"221-abstractautoproxycreatorpostprocessafterinitialization"},"2.2.1 AbstractAutoProxyCreator#postProcessAfterInitialization"),(0,a.kt)("p",null,"\u770b\u4e00\u4e0b\u8fd9\u4e2a\u65b9\u6cd5\u7684\u8c03\u7528\u94fe\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://github.com/mxsm/picture/blob/main/spring/aop/AbstractAutoProxyCreator%23postProcessAfterInitialization%E8%B0%83%E7%94%A8%E9%93%BE.png?raw=true",alt:null})),(0,a.kt)("p",null,"\u4e0b\u9762\u770b\u4e00\u4e0b ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"AbstractAutoProxyCreator#postProcessAfterInitialization"))," \u65b9\u6cd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"@Override\npublic Object postProcessAfterInitialization(@Nullable Object bean, String beanName) {\n    if (bean != null) {\n        Object cacheKey = getCacheKey(bean.getClass(), beanName);\n        if (this.earlyProxyReferences.remove(cacheKey) != bean) {\n            //\u5305\u88c5\u6210\u4ee3\u7406\u7c7b\n            return wrapIfNecessary(bean, beanName, cacheKey);\n        }\n    }\n    return bean;\n}\n")),(0,a.kt)("p",null,"\u4e3b\u8981\u751f\u6210\u4ee3\u7406\u7c7b\u7684\u65b9\u6cd5\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"wrapIfNecessary")," \u4e0b\u9762\u6765\u770b\u4e00\u4e0b\u5177\u4f53\u5b9e\u73b0\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"protected Object wrapIfNecessary(Object bean, String beanName, Object cacheKey) {\n    \n    //\u521b\u5efa\u4ee3\u7406\u7c7b\u7684\u524d\u9762\u6821\u9a8c\u548c\u68c0\u6d4b\n    if (StringUtils.hasLength(beanName) && this.targetSourcedBeans.contains(beanName)) {\n        return bean;\n    }\n    if (Boolean.FALSE.equals(this.advisedBeans.get(cacheKey))) {\n        return bean;\n    }\n    //\u5224\u65ad\u662f\u5426\u751f\u6210\u4ee3\u7406\u5bf9\u8c61\n    if (isInfrastructureClass(bean.getClass()) || shouldSkip(bean.getClass(), beanName)) {\n        this.advisedBeans.put(cacheKey, Boolean.FALSE);\n        return bean;\n    }\n\n    // \u83b7\u53d6\u901a\u77e5\u548c\u901a\u77e5\u5668\n    Object[] specificInterceptors = getAdvicesAndAdvisorsForBean(bean.getClass(), beanName, null);\n    if (specificInterceptors != DO_NOT_PROXY) {\n        this.advisedBeans.put(cacheKey, Boolean.TRUE);\n        //\u521b\u5efa\u4ee3\u7406\u5bf9\u8c61\n        Object proxy = createProxy(\n                bean.getClass(), beanName, specificInterceptors, new SingletonTargetSource(bean));\n        this.proxyTypes.put(cacheKey, proxy.getClass());\n        return proxy;\n    }\n\n    this.advisedBeans.put(cacheKey, Boolean.FALSE);\n    return bean;\n}\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"getAdvicesAndAdvisorsForBean"))," \u65b9\u6cd5\u6700\u7ec8\u8c03\u7528\u7684\u662f ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"AbstractAdvisorAutoProxyCreator#getAdvicesAndAdvisorsForBean"))," \u65b9\u6cd5,\u8fdb\u4e00\u6b65\u8c03\u7528\u7684\u662f",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"AbstractAdvisorAutoProxyCreator#findEligibleAdvisors"))," \u65b9\u6cd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"protected List<Advisor> findEligibleAdvisors(Class<?> beanClass, String beanName) {\n    //\u67e5\u627e\u5019\u9009\u7684Advisor\n    List<Advisor> candidateAdvisors = findCandidateAdvisors();\n    //\u8fc7\u6ee4\u51fa\u6765\u53ef\u7528\u7684\n    List<Advisor> eligibleAdvisors = findAdvisorsThatCanApply(candidateAdvisors, beanClass, beanName);\n    extendAdvisors(eligibleAdvisors);\n    if (!eligibleAdvisors.isEmpty()) {\n        eligibleAdvisors = sortAdvisors(eligibleAdvisors);\n    }\n    return eligibleAdvisors;\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"findCandidateAdvisors")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-java"},"#AnnotationAwareAspectJAutoProxyCreator\u5b9e\u73b0\u7c7b\n@Override\nprotected List<Advisor> findCandidateAdvisors() {\n    // \u6839\u636e\u7236\u7c7b\u89c4\u5219\u67e5\u627e\u6240\u6709\u7684Spring advisor\n    List<Advisor> advisors = super.findCandidateAdvisors();\n    \n    if (this.aspectJAdvisorsBuilder != null) {\n        //\u67e5\u627e\u6240\u6709\u7684Aspect\uff08\u6807\u6ce8\u4e86\u6ce8\u89e3\u7684@Aspect\u7684Bean) \u5e76\u4e14\u89e3\u6790\n        advisors.addAll(this.aspectJAdvisorsBuilder.buildAspectJAdvisors());\n    }\n    return advisors;\n}\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"findAdvisorsThatCanApply")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-java"},"protected List<Advisor> findAdvisorsThatCanApply(\n        List<Advisor> candidateAdvisors, Class<?> beanClass, String beanName) {\n\n    ProxyCreationContext.setCurrentProxiedBeanName(beanName);\n    try {\n        return AopUtils.findAdvisorsThatCanApply(candidateAdvisors, beanClass);\n    }\n    finally {\n        ProxyCreationContext.setCurrentProxiedBeanName(null);\n    }\n}\n")))),(0,a.kt)("p",null,"\u5230\u8fd9\u91cc\u8fd9\u4e24\u4e2a\u65b9\u6cd5\u5c31\u5206\u6790\u5b8c\u6210\u4e86\u3002\u5f53\u83b7\u53d6\u5230\u4e86\u901a\u77e5\u548c\u901a\u77e5\u5668\u5c31\u5f00\u59cb\u521b\u5efa\u4ee3\u7406\u5bf9\u8c61"),(0,a.kt)("h5",{id:"222-abstractautoproxycreatorcreateproxy\u521b\u5efa\u4ee3\u7406\u7c7b"},"2.2.2 AbstractAutoProxyCreator#createProxy\u521b\u5efa\u4ee3\u7406\u7c7b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"protected Object createProxy(Class<?> beanClass, @Nullable String beanName,\n        @Nullable Object[] specificInterceptors, TargetSource targetSource) {\n\n    if (this.beanFactory instanceof ConfigurableListableBeanFactory) {\n        AutoProxyUtils.exposeTargetClass((ConfigurableListableBeanFactory) this.beanFactory, beanName, beanClass);\n    }\n    //\u521b\u5efa\u4ee3\u7406\u5de5\u5382\n    ProxyFactory proxyFactory = new ProxyFactory();\n    proxyFactory.copyFrom(this);\n\n    //\u5224\u65ad\u4f7f\u7528jdk\u4ee3\u7406\u8fd8\u662fCGLIB\u4ee3\u7406\n    if (proxyFactory.isProxyTargetClass()) {\n        // Explicit handling of JDK proxy targets (for introduction advice scenarios)\n        if (Proxy.isProxyClass(beanClass)) {\n            // Must allow for introductions; can't just set interfaces to the proxy's interfaces only.\n            for (Class<?> ifc : beanClass.getInterfaces()) {\n                proxyFactory.addInterface(ifc);\n            }\n        }\n    }\n    else {\n        // No proxyTargetClass flag enforced, let's apply our default checks...\n        if (shouldProxyTargetClass(beanClass, beanName)) {\n            proxyFactory.setProxyTargetClass(true);\n        }\n        else {\n            evaluateProxyInterfaces(beanClass, proxyFactory);\n        }\n    }\n    \n    //\u52a0\u5165\u901a\u77e5\u5668\n    Advisor[] advisors = buildAdvisors(beanName, specificInterceptors);\n    proxyFactory.addAdvisors(advisors);\n    proxyFactory.setTargetSource(targetSource);\n    customizeProxyFactory(proxyFactory);\n\n    proxyFactory.setFrozen(this.freezeProxy);\n    if (advisorsPreFiltered()) {\n        proxyFactory.setPreFiltered(true);\n    }\n\n    // Use original ClassLoader if bean class not locally loaded in overriding class loader\n    ClassLoader classLoader = getProxyClassLoader();\n    if (classLoader instanceof SmartClassLoader && classLoader != beanClass.getClassLoader()) {\n        classLoader = ((SmartClassLoader) classLoader).getOriginalClassLoader();\n    }\n    //\u521b\u5efa\u4ee3\u7406\u5bf9\u8c61\n    return proxyFactory.getProxy(classLoader);\n}\n")),(0,a.kt)("h3",{id:"3-spring-\u521b\u5efabean\u7684\u7b80\u6613\u6d41\u7a0b"},"3. Spring \u521b\u5efaBean\u7684\u7b80\u6613\u6d41\u7a0b"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://github.com/mxsm/picture/blob/main/spring/aop/Spring%20Bean%E5%88%9B%E5%BB%BA%E6%B5%81%E7%A8%8B.png?raw=true",alt:null})),(0,a.kt)("p",null,"Bean\u7684\u83b7\u53d6\u4e3b\u8981\u662f\u901a\u8fc7BeanFactory\u83b7\u53d6\uff0c\u4f46\u662f\u521b\u5efa\u5de5\u4f5c\u4e3b\u8981\u6709BeanPostProcessor\u5b8c\u6210\u3002\u4ee3\u7406\u7c7b\u7684\u521b\u5efa\u5c31\u662f\u901a\u8fc7 ",(0,a.kt)("strong",{parentName:"p"},"AbstractAutoProxyCreator")," \u7c7b\u6267\u884c\u5b9e\u73b0"),(0,a.kt)("p",null,"postProcessBeforeInstantiation \u65b9\u6cd5\u548c postProcessAfterInitialization \u65b9\u6cd5\u6765\u5bf9\u6539\u53d8\u521b\u5efa\u5bf9\u8c61\u548c\u5bf9\u5bf9\u8c61\u8fdb\u884c\u589e\u5f3a\u5b9e\u73b0\u4ee3\u7406\u3002"),(0,a.kt)("h3",{id:"4-\u603b\u7ed3"},"4. \u603b\u7ed3"),(0,a.kt)("p",null,"Spring AOP\u7684\u6574\u4e2a\u542f\u52a8\u8fc7\u7a0b\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u521b\u5efa ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"BeanFactoryAdvisorRetrievalHelperAdapter"))," \u7c7b(\u901a\u77e5\u5668\u68c0\u7d22\u9002\u914d\u5668)\u548c ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"BeanFactoryAspectJAdvisorsBuilderAdapter"))," \u7c7b"),(0,a.kt)("li",{parentName:"ul"},"\u8c03\u7528 ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"AbstractAutoProxyCreator#postProcessBeforeInstantiation"))," \u65b9\u6cd5\u67e5\u627e\u6240\u6709\u7684Advisor\u548c\u5207\u9762\uff0c\u5c06\u5207\u9762\u6784\u5efa\u6210Advisor"),(0,a.kt)("li",{parentName:"ul"},"\u8c03\u7528 ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"AbstractAutoProxyCreator#postProcessAfterInitialization"))," \u65b9\u6cd5\uff0c\u4ece\u7f13\u5b58\u53d6\u51fa\u6240\u6709\u7684\u5c06\u6240\u6709\u7684\u589e\u5f3a\u5668\uff0c\u521b\u5efa\u4ee3\u7406\u5de5\u5382\uff0c\u5e76\u7ec7\u5165\u589e\u5f3a\u5668\uff0c\u521b\u5efa\u4ee3\u7406\u5bf9\u8c61")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Tips: \u4e3b\u8981\u662f\u901a\u8fc7\u5b9e\u73b0 postProcessBeforeInstantiation \u548c postProcessAfterInitialization \u8fd9\u4e24\u4e2a\u65b9\u6cd5\u6765\u5224\u65ad\u662f\u5426\u521b\u5efa\u4ee3\u7406\u5bf9\u8c61\u548c\u5982\u4f55\u521b\u5efa\u4ee3\u7406")))}d.isMDXComponent=!0}}]);