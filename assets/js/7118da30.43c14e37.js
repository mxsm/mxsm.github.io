"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[9488],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),l=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=l(e.components);return a.createElement(c.Provider,{value:n},e.children)},g={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(t),m=r,d=u["".concat(c,".").concat(m)]||u[m]||g[m]||o;return t?a.createElement(d,s(s({ref:n},p),{},{components:t})):a.createElement(d,s({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=u;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=t[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},6508:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var a=t(7462),r=(t(7294),t(3905));const o={title:"EnableTransactionManagement\u6ce8\u89e3\u89e3\u6790\u6765\u770bAOP",linkTitle:"EnableTransactionManagement\u6ce8\u89e3\u89e3\u6790\u6765\u770bAOP",date:new Date("2021-04-27T00:00:00.000Z"),weight:202104272345},s=void 0,i={unversionedId:"spring/spring-framework/core-source-analysis/spring-aop-enableTransactionManagement",id:"spring/spring-framework/core-source-analysis/spring-aop-enableTransactionManagement",title:"EnableTransactionManagement\u6ce8\u89e3\u89e3\u6790\u6765\u770bAOP",description:"\u57fa\u4e8espring 5.3.5\u7248\u672c\u6e90\u7801\u5206\u6790",source:"@site/docs/spring/spring-framework/core-source-analysis/spring-aop-enableTransactionManagement.md",sourceDirName:"spring/spring-framework/core-source-analysis",slug:"/spring/spring-framework/core-source-analysis/spring-aop-enableTransactionManagement",permalink:"/docs/spring/spring-framework/core-source-analysis/spring-aop-enableTransactionManagement",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/spring/spring-framework/core-source-analysis/spring-aop-enableTransactionManagement.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1668347184,formattedLastUpdatedAt:"Nov 13, 2022",frontMatter:{title:"EnableTransactionManagement\u6ce8\u89e3\u89e3\u6790\u6765\u770bAOP",linkTitle:"EnableTransactionManagement\u6ce8\u89e3\u89e3\u6790\u6765\u770bAOP",date:"2021-04-27T00:00:00.000Z",weight:202104272345},sidebar:"springframework",previous:{title:"Spring BeanPostProcessor\u6267\u884c\u987a\u5e8f\u95ee\u9898",permalink:"/docs/spring/spring-framework/core-source-analysis/spring-BeanPostProcessor-order"},next:{title:"Spring\u4e2d\u7684Aware\u63a5\u53e3",permalink:"/docs/spring/spring-framework/core-source-analysis/spring-aware-interface"}},c={},l=[{value:"1. EnableTransactionManagement\u6ce8\u89e3",id:"1-enabletransactionmanagement\u6ce8\u89e3",level:3},{value:"2. TransactionManagementConfigurationSelector\u7c7b",id:"2-transactionmanagementconfigurationselector\u7c7b",level:3},{value:"3. AutoProxyRegistrar\u7c7b",id:"3-autoproxyregistrar\u7c7b",level:3},{value:"4. ProxyTransactionManagementConfiguration\u7c7b",id:"4-proxytransactionmanagementconfiguration\u7c7b",level:3},{value:"4.1 AnnotationTransactionAttributeSource\u7c7b",id:"41-annotationtransactionattributesource\u7c7b",level:4},{value:"4.2 TransactionInterceptor\u7c7b",id:"42-transactioninterceptor\u7c7b",level:4},{value:"5 \u4e8b\u52a1\u6267\u884c\u903b\u8f91",id:"5-\u4e8b\u52a1\u6267\u884c\u903b\u8f91",level:3},{value:"5.1 \u4ee3\u7406\u5bf9\u8c61\u521b\u5efa",id:"51-\u4ee3\u7406\u5bf9\u8c61\u521b\u5efa",level:4},{value:"5.2 \u4ee3\u7406\u5bf9\u8c61\u6267\u884c\u65b9\u6cd5",id:"52-\u4ee3\u7406\u5bf9\u8c61\u6267\u884c\u65b9\u6cd5",level:4},{value:"6. \u603b\u7ed3",id:"6-\u603b\u7ed3",level:3}],p={toc:l};function g(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u57fa\u4e8espring 5.3.5\u7248\u672c\u6e90\u7801\u5206\u6790")),(0,r.kt)("h3",{id:"1-enabletransactionmanagement\u6ce8\u89e3"},"1. EnableTransactionManagement\u6ce8\u89e3"),(0,r.kt)("p",null,"EnableXXX\u7c7b\u7684\u6ce8\u89e3\u4e3b\u8981\u4f9d\u8d56\u4e8e@Import\u6ce8\u89e3\u8fdb\u884c\u62d3\u5c55\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"@Target(ElementType.TYPE)\n@Retention(RetentionPolicy.RUNTIME)\n@Documented\n@Import(TransactionManagementConfigurationSelector.class)\npublic @interface EnableTransactionManagement {\n\n    boolean proxyTargetClass() default false;\n\n    AdviceMode mode() default AdviceMode.PROXY;\n\n    int order() default Ordered.LOWEST_PRECEDENCE;\n}\n\n")),(0,r.kt)("p",null,"\u901a\u8fc7\u4ee3\u7801\u53ef\u4ee5\u77e5\u9053\uff0c\u4e3b\u8981\u7684\u903b\u8f91\u90fd\u662f\u901a\u8fc7 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"TransactionManagementConfigurationSelector"))," \u6765\u5b9e\u73b0\u7684\u3002"),(0,r.kt)("h3",{id:"2-transactionmanagementconfigurationselector\u7c7b"},"2. TransactionManagementConfigurationSelector\u7c7b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public class TransactionManagementConfigurationSelector extends AdviceModeImportSelector<EnableTransactionManagement> {\n\n    @Override\n    protected String[] selectImports(AdviceMode adviceMode) {\n        switch (adviceMode) {\n            case PROXY:\n                return new String[] {AutoProxyRegistrar.class.getName(),\n                        ProxyTransactionManagementConfiguration.class.getName()};\n            case ASPECTJ:\n                return new String[] {determineTransactionAspectClass()};\n            default:\n                return null;\n        }\n    }\n\n    private String determineTransactionAspectClass() {\n        return (ClassUtils.isPresent("javax.transaction.Transactional", getClass().getClassLoader()) ?\n                TransactionManagementConfigUtils.JTA_TRANSACTION_ASPECT_CONFIGURATION_CLASS_NAME :\n                TransactionManagementConfigUtils.TRANSACTION_ASPECT_CONFIGURATION_CLASS_NAME);\n    }\n\n}\n')),(0,r.kt)("p",null,"\u6709\u4ee3\u7801\u53ef\u4ee5\u770b\u51fa\u6765\u8be5\u7c7b\u7ee7\u627f ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"AdviceModeImportSelector"))," \u7c7b\u3002\u5206\u4e3a\u4e86\u4e24\u79cd\u60c5\u51b5\u6839\u636eAdviceMode "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"AdviceMode.PROXY"),(0,r.kt)("br",{parentName:"li"}),"\u8fd9\u4e2a\u4e5f\u662f\u9ed8\u8ba4\u60c5\u51b5\uff0c\u4e3b\u8981\u4f7f\u7528\u7684\u662fJDK\u4ee3\u7406\u5b9e\u73b0\u901a\u77e5"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"AdviceMode.ASPECTJ"),(0,r.kt)("br",{parentName:"li"}),"\u4f7f\u7528ASPECTJ\u6765\u5b9e\u73b0\u901a\u77e5")),(0,r.kt)("h3",{id:"3-autoproxyregistrar\u7c7b"},"3. AutoProxyRegistrar\u7c7b"),(0,r.kt)("p",null,"AutoProxyRegistrar\u7c7b\u5b9e\u73b0\u4e86ImportBeanDefinitionRegistrar\u63a5\u53e3\u3002\u901a\u8fc7\u83b7\u53d6EnableTransactionManagement\u6ce8\u89e3\u7684\u503c\u6765\u786e\u5b9a\u4f7f\u7528\u4f55\u79cd\u6a21\u5f0f\u4ee5\u53ca\u4f55\u79cd\u4ee3\u7406\u6765\u5b9e\u73b0Aop."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public class AutoProxyRegistrar implements ImportBeanDefinitionRegistrar {\n    @Override\n    public void registerBeanDefinitions(AnnotationMetadata importingClassMetadata, BeanDefinitionRegistry registry) {\n        boolean candidateFound = false;\n        Set<String> annTypes = importingClassMetadata.getAnnotationTypes();\n        for (String annType : annTypes) {\n            AnnotationAttributes candidate = AnnotationConfigUtils.attributesFor(importingClassMetadata, annType);\n            if (candidate == null) {\n                continue;\n            }\n            Object mode = candidate.get("mode");\n            Object proxyTargetClass = candidate.get("proxyTargetClass");\n            if (mode != null && proxyTargetClass != null && AdviceMode.class == mode.getClass() &&\n                    Boolean.class == proxyTargetClass.getClass()) {\n                candidateFound = true;\n                //\u8bbe\u7f6e\u4ee3\u7406\u521b\u5efa\u8005AutoProxyCreator\n                if (mode == AdviceMode.PROXY) {\n                    AopConfigUtils.registerAutoProxyCreatorIfNecessary(registry);\n                    //\u8bbe\u7f6e\u4f7f\u7528\u4ee3\u7406\u7684\u65b9\u5f0f\n                    if ((Boolean) proxyTargetClass) {\n                        AopConfigUtils.forceAutoProxyCreatorToUseClassProxying(registry);\n                        return;\n                    }\n                }\n            }\n        }\n    }\n\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6ce8\u5165InfrastructureAdvisorAutoProxyCreator\u5230Spring\u5bb9\u5668"),(0,r.kt)("p",{parentName:"li"},"\u8be5\u7c7b\u662f\u4e00\u4e2aInstantiationAwareBeanPostProcessor\u5b9e\u73b0\u7c7b\u3002\u901a\u8fc7postProcessBeforeInstantiation\u65b9\u6cd5\u6216\u8005postProcessAfterInitialization\u6765\u521b\u5efa\u4ee3\u7406\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},"//AbstractAutoProxyCreator#postProcessAfterInitialization\n@Override\npublic Object postProcessAfterInitialization(@Nullable Object bean, String beanName) {\n    if (bean != null) {\n        Object cacheKey = getCacheKey(bean.getClass(), beanName);\n        if (this.earlyProxyReferences.remove(cacheKey) != bean) {\n            return wrapIfNecessary(bean, beanName, cacheKey);\n        }\n    }\n    return bean;\n}\n")),(0,r.kt)("p",{parentName:"li"},"AbstractAutoProxyCreator#wrapIfNecessary\u7528\u6765\u521b\u5efa\u4ee3\u7406\u5bf9\u8c61\u5982\u679c\u6709advice\u7684\u60c5\u51b5"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},"  protected Object wrapIfNecessary(Object bean, String beanName, Object cacheKey) {\n    if (StringUtils.hasLength(beanName) && this.targetSourcedBeans.contains(beanName)) {\n        return bean;\n    }\n    if (Boolean.FALSE.equals(this.advisedBeans.get(cacheKey))) {\n        return bean;\n    }\n    if (isInfrastructureClass(bean.getClass()) || shouldSkip(bean.getClass(), beanName)) {\n        this.advisedBeans.put(cacheKey, Boolean.FALSE);\n        return bean;\n    }\n  \n    // \u83b7\u53d6\u56de\u8c03\u62e6\u622a\u5668\uff08AOP\u6838\u5fc3\uff1a\u4ee3\u7406\u548c\u56de\u8c03\u62e6\u622a\u5668\uff09\n    Object[] specificInterceptors = getAdvicesAndAdvisorsForBean(bean.getClass(), beanName, null);\n    if (specificInterceptors != DO_NOT_PROXY) {\n        this.advisedBeans.put(cacheKey, Boolean.TRUE);\n        Object proxy = createProxy(\n                bean.getClass(), beanName, specificInterceptors, new SingletonTargetSource(bean));\n        this.proxyTypes.put(cacheKey, proxy.getClass());\n        return proxy;\n    }\n  \n    this.advisedBeans.put(cacheKey, Boolean.FALSE);\n    return bean;\n}\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u8bbe\u7f6e\u4ee3\u7406\u65b9\u5f0f\uff0cfalse\u4e3ajdk\u4ee3\u7406\uff0ctrue\u4e3acglib\u4ee3\u7406"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5728\u4ee3\u7406\u52a0\u5165\u4e86\u5207\u9762\u7684\u5b9e\u73b0")),(0,r.kt)("h3",{id:"4-proxytransactionmanagementconfiguration\u7c7b"},"4. ProxyTransactionManagementConfiguration\u7c7b"),(0,r.kt)("p",null,"\u8fd9\u4e2a\u914d\u4e3b\u8981\u7ba1\u7406\u914d\u7f6e\u4ee3\u7406\u4e8b\u52a1"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u521b\u5efaTransactionAttributeSource\u5bf9\u8c61"),(0,r.kt)("li",{parentName:"ul"},"\u521b\u5efaTransactionInterceptor\uff0c\u4f9d\u8d56TransactionAttributeSource"),(0,r.kt)("li",{parentName:"ul"},"\u521b\u5efaBeanFactoryTransactionAttributeSourceAdvisor\u5c5e\u6027\u901a\u77e5\u5668\u3002\u4f9d\u8d56\u521b\u5efaTransactionAttributeSource\u3001\u521b\u5efaTransactionInterceptor\u3002")),(0,r.kt)("h4",{id:"41-annotationtransactionattributesource\u7c7b"},"4.1 AnnotationTransactionAttributeSource\u7c7b"),(0,r.kt)("p",null,"\u65b9\u6cd5\u4e3b\u8981\u7528\u6765\u89e3\u6790\u6ce8\u89e3@Transactional\u3002\u540c\u65f6\u8fd8\u517c\u5bb9\u4e86jta\u548cejb\u3002Spring\u7684@Transactional\u89e3\u6790\u7c7b ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"SpringTransactionAnnotationParser"))," "),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u9ed8\u8ba4AnnotationTransactionAttributeSource\u7684\u521b\u5efa\u4e3a\u53ea\u80fd\u516c\u5171\u65b9\u6cd5\u80fd\u591f\u4f7f\u7528@Transactional\u6ce8\u89e3")),(0,r.kt)("h4",{id:"42-transactioninterceptor\u7c7b"},"4.2 TransactionInterceptor\u7c7b"),(0,r.kt)("p",null,"\u4e3b\u8981\u5904\u7406@Transactional\u6ce8\u89e3\u5207\u9762\uff0c\u6267\u884c\u65b9\u6cd5\u7684\u5904\u7406\u3002"),(0,r.kt)("h3",{id:"5-\u4e8b\u52a1\u6267\u884c\u903b\u8f91"},"5 \u4e8b\u52a1\u6267\u884c\u903b\u8f91"),(0,r.kt)("p",null,"\u4e8b\u52a1\u6267\u884c\u5206\u4e3a\u4e24\u6b65\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u4ee3\u7406\u5bf9\u8c61\u521b\u5efa"),(0,r.kt)("li",{parentName:"ol"},"\u4ee3\u7406\u5bf9\u8c61\u6267\u884c\u65b9\u6cd5")),(0,r.kt)("h4",{id:"51-\u4ee3\u7406\u5bf9\u8c61\u521b\u5efa"},"5.1 \u4ee3\u7406\u5bf9\u8c61\u521b\u5efa"),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"AbstractAutoProxyCreator"))," \u7c7b\u7ee7\u627f\u4e86 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"SmartInstantiationAwareBeanPostProcessor"))," \u901a\u8fc7 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"AbstractAutoProxyCreator#postProcessAfterInitialization"))," \u6765\u521b\u5efa\u4ee3\u7406\u5bf9\u8c61\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public Object postProcessAfterInitialization(@Nullable Object bean, String beanName) {\n    if (bean != null) {\n        Object cacheKey = getCacheKey(bean.getClass(), beanName);\n        if (this.earlyProxyReferences.remove(cacheKey) != bean) {\n            //\u521b\u5efa\u4ee3\u7406\n            return wrapIfNecessary(bean, beanName, cacheKey);\n        }\n    }\n    return bean;\n}\n\nprotected Object wrapIfNecessary(Object bean, String beanName, Object cacheKey) {\n    \n    //\u7701\u7565\u90e8\u5206\u4ee3\u7801\n\n    //\u83b7\u53d6\u8981\u4ee3\u7406\u7c7b\u662f\u5426\u542b\u6709\u5207\u9762-\u521b\u5efa\u4ee3\u7406\n    Object[] specificInterceptors = getAdvicesAndAdvisorsForBean(bean.getClass(), beanName, null);\n    if (specificInterceptors != DO_NOT_PROXY) {\n        this.advisedBeans.put(cacheKey, Boolean.TRUE);\n        //\u521b\u5efa\u4ee3\u7406\n        Object proxy = createProxy(\n                bean.getClass(), beanName, specificInterceptors, new SingletonTargetSource(bean));\n        this.proxyTypes.put(cacheKey, proxy.getClass());\n        return proxy;\n    }\n\n    this.advisedBeans.put(cacheKey, Boolean.FALSE);\n    return bean;\n}\n")),(0,r.kt)("p",null,"\u901a\u8fc7\u5728\u4ee3\u7406\u7c7b\u4e2d\u8bbe\u7f6e\u5207\u9762\u7684\u6570\u636e\uff0c\u7136\u540e\u521b\u5efa\u4ee3\u7406\u7c7b\u4e3a\u540e\u7eed\u7684\u6267\u884c\u63d0\u4f9b\u5207\u9762\u7684\u529f\u80fd\u3002"),(0,r.kt)("h4",{id:"52-\u4ee3\u7406\u5bf9\u8c61\u6267\u884c\u65b9\u6cd5"},"5.2 \u4ee3\u7406\u5bf9\u8c61\u6267\u884c\u65b9\u6cd5"),(0,r.kt)("p",null,"\u4ee3\u7406\u7c7b\u7684\u6267\u884c\u6211\u4eec\u9996\u5148\u8981\u4e86\u89e3\u4ee3\u7406\u7c7b\u662f\u5982\u4f55\u521b\u5efa\u7684\u3002\u9996\u5148\u6765\u4e86\u89e3\u4e00\u4e0bSpring\u4e2dAOP\u4ee3\u7406\u7684\u7c7b\u56fe\u7ed3\u6784\uff1a",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("img",{parentName:"p",src:"https://github.com/mxsm/picture/blob/main/spring/aopproxy%E7%BB%A7%E6%89%BF%E5%85%B3%E7%B3%BB%E5%9B%BE.png?raw=true",alt:"image"}),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public interface AopProxy {\n\n    Object getProxy();\n\n    Object getProxy(@Nullable ClassLoader classLoader);\n}\n\n")),(0,r.kt)("p",null,"\u8fd9\u4e2a\u5c31\u662f\u521b\u5efa\u4ee3\u7406\u7684\u63a5\u53e3\u3002\u4e0b\u9762\u6765\u770b\u4e00\u4e0b\u5b9e\u73b0\u7528CglibAopProxy\u4e3e\u4f8b\u5206\u6790\uff0c\u4ee3\u7406\u521b\u5efa\u5c31\u662fcglib\u7684\u6807\u51c6\u521b\u5efa\u65b9\u5f0f\u3002\u7136\u540e\u901a\u8fc7\u8bbe\u7f6e\u7c7b\u7684Callback\u6765\u5c06\u5207\u9762\u7ed3\u5408\u5230\u91cc\u9762\u3002\u770b\u4e00\u4e0b\u4ee3\u7801\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"@Override\npublic Object getProxy(@Nullable ClassLoader classLoader) {\n\n    //\u7701\u7565\u90e8\u5206\u4ee3\u7801\n    Enhancer enhancer = createEnhancer();\n    if (classLoader != null) {\n        enhancer.setClassLoader(classLoader);\n        if (classLoader instanceof SmartClassLoader &&\n                ((SmartClassLoader) classLoader).isClassReloadable(proxySuperClass)) {\n            enhancer.setUseCache(false);\n        }\n    }\n    enhancer.setSuperclass(proxySuperClass);\n    enhancer.setInterfaces(AopProxyUtils.completeProxiedInterfaces(this.advised));\n    enhancer.setNamingPolicy(SpringNamingPolicy.INSTANCE);\n    enhancer.setStrategy(new ClassLoaderAwareGeneratorStrategy(classLoader));\n    \n    //\u91cd\u8981\u65b9\u6cd5\uff1a\u83b7\u53d6Callback\n    Callback[] callbacks = getCallbacks(rootClass);\n    Class<?>[] types = new Class<?>[callbacks.length];\n    for (int x = 0; x < types.length; x++) {\n        types[x] = callbacks[x].getClass();\n    }\n     //\u8bbe\u7f6eCallbackFilter\n    enhancer.setCallbackFilter(new ProxyCallbackFilter(\n            this.advised.getConfigurationOnlyCopy(), this.fixedInterceptorMap, this.fixedInterceptorOffset));\n    enhancer.setCallbackTypes(types);\n    \n    return createProxyClassAndInstance(enhancer, callbacks);\n}\n")),(0,r.kt)("p",null,"\u4e0a\u9762\u6bd4\u8f83\u91cd\u8981\u7684\u4e00\u4e2a\u65b9\u6cd5\u5c31\u662f ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"getCallbacks"))," \u65b9\u6cd5\u3002\u4e3b\u8981\u7528\u6765\u521b\u5efa\u4ee3\u7406\u5bf9\u8c61\u7684Callback(\u8fd9\u91cc\u4e3b\u8981\u662fcglib\u7684MethodInterceptor)\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Callback aopInterceptor = new DynamicAdvisedInterceptor(this.advised);\n")),(0,r.kt)("p",null,"\u521b\u5efa\u4e86\u4e00\u4e2a\u52a8\u6001\u901a\u77e5\u62e6\u622a\u5668\u3002 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"DynamicAdvisedInterceptor"))," \u662f CglibAopProxy \u5185\u90e8\u9759\u6001\u7c7b\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'private static class FixedChainStaticTargetInterceptor implements MethodInterceptor, Serializable {\n    //\u7701\u7565\u4ee3\u7801\n    @Override\n    @Nullable\n    public Object intercept(Object proxy, Method method, Object[] args, MethodProxy methodProxy) throws Throwable {\n    \n        //\u7701\u7565\u4e86\u90e8\u5206\u65e0\u5173\u7d27\u8981\u7684\u4ee3\u7801\n    \n        Object oldProxy = null;\n        boolean setProxyContext = false;\n        Object target = null;\n        TargetSource targetSource = this.advised.getTargetSource();\n    \n        if (this.advised.exposeProxy) {\n            // Make invocation available if necessary.\n            oldProxy = AopContext.setCurrentProxy(proxy);\n            setProxyContext = true;\n        }\n        // Get as late as possible to minimize the time we "own" the target, in case it comes from a pool...\n        target = targetSource.getTarget();\n        Class<?> targetClass = (target != null ? target.getClass() : null);\n        List<Object> chain = this.advised.getInterceptorsAndDynamicInterceptionAdvice(method, targetClass);\n        Object retVal;\n        // Check whether we only have one InvokerInterceptor: that is,\n        // no real advice, but just reflective invocation of the target.\n        if (chain.isEmpty() && Modifier.isPublic(method.getModifiers())) {\n            //\u8df3\u8fc7\u4ee3\u7406\u76f4\u63a5\u5728\u7ebf\u76ee\u6807\u7c7b\u7684\u65b9\u6cd5\n            Object[] argsToUse = AopProxyUtils.adaptArgumentsIfNecessary(method, args);\n            retVal = methodProxy.invoke(target, argsToUse);\n        }\n        else {\n            //\u521b\u5efa\u4e00\u4e2acglib\u65b9\u6cd5Invocation\u53bb\u6267\u884c\n            retVal = new CglibMethodInvocation(proxy, target, method, args, targetClass, chain, methodProxy).proceed();\n        }\n        retVal = processReturnType(proxy, target, method, retVal);\n        return retVal;\n        \n    }\n}\n')),(0,r.kt)("p",null,"\u521b\u5efa\u7684 ",(0,r.kt)("strong",{parentName:"p"},"CglibMethodInvocation")," \u6700\u7ec8\u662f\u6267\u884c\u4e86 ",(0,r.kt)("strong",{parentName:"p"},"ReflectiveMethodInvocation#proceed")," \u65b9\u6cd5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"@Override\n@Nullable\npublic Object proceed() throws Throwable {\n    if (this.currentInterceptorIndex == this.interceptorsAndDynamicMethodMatchers.size() - 1) {\n        return invokeJoinpoint();\n    }\n\n    Object interceptorOrInterceptionAdvice =\n            this.interceptorsAndDynamicMethodMatchers.get(++this.currentInterceptorIndex);\n    if (interceptorOrInterceptionAdvice instanceof InterceptorAndDynamicMethodMatcher) {\n        InterceptorAndDynamicMethodMatcher dm =\n                (InterceptorAndDynamicMethodMatcher) interceptorOrInterceptionAdvice;\n        Class<?> targetClass = (this.targetClass != null ? this.targetClass : this.method.getDeclaringClass());\n        if (dm.methodMatcher.matches(this.method, targetClass, this.arguments)) {\n            return dm.interceptor.invoke(this);\n        }\n        else {\n            return proceed();\n        }\n    }\n    else {\n        //\u6267\u884c\u5b9e\u73b0\u4e86MethodInterceptor\u63a5\u53e3\u7684\u65b9\u6cd5\n        return ((MethodInterceptor) interceptorOrInterceptionAdvice).invoke(this);\n    }\n}\n")),(0,r.kt)("p",null,"\u8fd9\u91cc\u5bf9\u4e8e@Transactional\u6ce8\u89e3\u6765\u8bf4 ((MethodInterceptor) interceptorOrInterceptionAdvice).invoke(this) \u8fd9\u884c\u4ee3\u7801\u91cc\u9762\u7684 MethodInterceptor\u5b9e\u73b0\u5c31\u662f\u524d\u9762\u5728 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"ProxyTransactionManagementConfiguration"))," \u91cc\u9762\u5b9e\u4f8b\u5316\u7684 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"TransactionInterceptor"))," \u7c7b\u3002\u5728\u8fd9\u4e2a\u7c7b\u91cc\u9762\u5305\u542b\u4e86\u5904\u7406\u6574\u4e2a\u4e8b\u52a1"),(0,r.kt)("h3",{id:"6-\u603b\u7ed3"},"6. \u603b\u7ed3"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/mxsm/picture/blob/main/spring/%E4%BA%8B%E5%8A%A1%E4%BB%A3%E7%90%86%E5%88%9B%E5%BB%BA.png?raw=true",alt:null})))}g.isMDXComponent=!0}}]);