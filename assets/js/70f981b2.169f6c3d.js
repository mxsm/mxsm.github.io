"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[6928],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>g});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},l=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},m="mdxType",P={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=c(t),u=a,g=m["".concat(p,".").concat(u)]||m[u]||P[u]||o;return t?r.createElement(g,s(s({ref:n},l),{},{components:t})):r.createElement(g,s({ref:n},l))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=u;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[m]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},496:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=t(7462),a=(t(7294),t(3905));const o={title:"BeanPostProcessor\u8bb2\u89e3",date:new Date("2019-11-26T00:00:00.000Z"),weight:5},s=void 0,i={unversionedId:"spring/spring-framework/core-source-analysis/BeanPostProcessor",id:"spring/spring-framework/core-source-analysis/BeanPostProcessor",title:"BeanPostProcessor\u8bb2\u89e3",description:"Spring Framework\u7248\u672c 5.3.4",source:"@site/docs/spring/spring-framework/core-source-analysis/BeanPostProcessor.md",sourceDirName:"spring/spring-framework/core-source-analysis",slug:"/spring/spring-framework/core-source-analysis/BeanPostProcessor",permalink:"/docs/spring/spring-framework/core-source-analysis/BeanPostProcessor",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/spring/spring-framework/core-source-analysis/BeanPostProcessor.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1674227439,formattedLastUpdatedAt:"Jan 20, 2023",frontMatter:{title:"BeanPostProcessor\u8bb2\u89e3",date:"2019-11-26T00:00:00.000Z",weight:5},sidebar:"springframework",previous:{title:"BeanPostProcessor\u76f8\u5173\u63a5\u53e3\u6267\u884c\u7684\u65b9\u6cd5",permalink:"/docs/spring/spring-framework/core-source-analysis/BeanPostProcessor-exe-method"},next:{title:"ClassPathXmlApplicationContext\u6e90\u7801\u89e3\u6790",permalink:"/docs/spring/spring-framework/core-source-analysis/ClassPathXmlApplicationContext"}},p={},c=[{value:"1. BeanPostProcessor\u662f\u5e72\u4ec0\u4e48\u7684\uff1f",id:"1-beanpostprocessor\u662f\u5e72\u4ec0\u4e48\u7684",level:3},{value:"2. BeanPostProcessor",id:"2-beanpostprocessor",level:3},{value:"3. <strong>InstantiationAwareBeanPostProcessor</strong>",id:"3-instantiationawarebeanpostprocessor",level:3},{value:"4.DestructionAwareBeanPostProcessor",id:"4destructionawarebeanpostprocessor",level:3},{value:"5. \u770b\u4e00\u4e0bSpring\u81ea\u8eab\u7684\u5b9e\u73b0",id:"5-\u770b\u4e00\u4e0bspring\u81ea\u8eab\u7684\u5b9e\u73b0",level:3},{value:"6. BeanPostProcessor Spring\u6e90\u7801\u5206\u6790",id:"6-beanpostprocessor-spring\u6e90\u7801\u5206\u6790",level:3},{value:"7. \u603b\u7ed3",id:"7-\u603b\u7ed3",level:3}],l={toc:c};function m(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Spring Framework\u7248\u672c 5.3.4")),(0,a.kt)("h3",{id:"1-beanpostprocessor\u662f\u5e72\u4ec0\u4e48\u7684"},"1. BeanPostProcessor\u662f\u5e72\u4ec0\u4e48\u7684\uff1f"),(0,a.kt)("p",null,"BeanPostProcessor\u63a5\u53e3\u4f5c\u7528\u662f\uff1a\u5982\u679c\u6211\u4eec\u9700\u8981\u5728Spring\u5bb9\u5668\u5b8c\u6210Bean\u7684\u5b9e\u4f8b\u5316\u3001\u914d\u7f6e\u548c\u5176\u4ed6\u7684\u521d\u59cb\u5316\u524d\u540e\u6dfb\u52a0\u4e00\u4e9b\u81ea\u5df1\u7684\u903b\u8f91\u5904\u7406\uff0c\u6211\u4eec\u5c31\u53ef\u4ee5\u5b9a\u4e49\u4e00\u4e2a\u6216\u8005\u591a\u4e2aBeanPostProcessor\u63a5\u53e3\u7684\u5b9e\u73b0\uff0c\u7136\u540e\u6ce8\u518c\u5230\u5bb9\u5668\u4e2d\u3002(\u7c7b\u4f3c\u4e8e\u62e6\u622a\u5668\u548c\u8fc7\u6ee4\u5668)\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","BeanPostProcessor\u5206\u4e3a\u4e09\u5927\u7c7b\u5982\u4e0b\u56fe\uff1a\n",(0,a.kt)("img",{parentName:"p",src:"https://github.com/mxsm/picture/blob/main/spring/BeanPostProcessor%E5%88%86%E7%B1%BB.png?raw=true",alt:"\u56fe"}),"  "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5b9e\u4f8b\u5316"),(0,a.kt)("li",{parentName:"ul"},"\u521d\u59cb\u5316"),(0,a.kt)("li",{parentName:"ul"},"\u9500\u6bc1")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Bean\u5b9e\u4f8b\u5316\u4f1a\u6267\u884c ",(0,a.kt)("strong",{parentName:"p"},"InstantiationAwareBeanPostProcessor")," \u3001 ",(0,a.kt)("strong",{parentName:"p"},"SmartInstantiationAwareBeanPostProcessor")," \u8fd9\u4e24\u7c7b\u5904\u7406\u5668\uff0cBean\u5b9e\u4f8b\u5316\u540e\u6bcf\u4e2abean\u5c31\u4f1a\u901a\u8fc7 ",(0,a.kt)("strong",{parentName:"p"},"BeanPostProcessor")," \u3001 ",(0,a.kt)("strong",{parentName:"p"},"MergedBeanDefinitionPostProcessor")," \u5b9e\u73b0\u7684\u7c7b\u7684\u5904\u7406\u3002Bean\u9500\u6bc1\u4f1a\u901a\u8fc7 ",(0,a.kt)("strong",{parentName:"p"},"DestructionAwareBeanPostProcessor")," \u5904\u7406\u5668\u3002")),(0,a.kt)("p",null,"Spring Bean\u7684\u5b9e\u4f8b\u5316\u56fe\u89e3\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://github.com/mxsm/document/blob/master/image/Spring/Springframework/bean%E5%AE%9E%E4%BE%8B%E5%8C%96%E8%BF%87%E7%A8%8B.png?raw=true",alt:"\u56fe"})),(0,a.kt)("p",null,"\u5728\u68c0\u67e5\u5b8c ",(0,a.kt)("strong",{parentName:"p"},"Aware")," \u63a5\u53e3\u540e\uff0c\u5c31\u5f00\u59cb\u8c03\u7528 ",(0,a.kt)("strong",{parentName:"p"},"BeanPostProcessor")," \u8fdb\u884c\u524d\u7f6e\u5904\u7406\u540e\u540e\u7f6e\u5904\u7406\u3002\u4e0b\u9762\u6765\u770b\u4e00\u4e0bSpring\u4e2d\u7684\u51e0\u7c7b\u7ee7\u627f\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"AOP\u76f8\u5173\u7684"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{parentName:"p",src:"https://github.com/mxsm/document/blob/master/image/Spring/Springframework/BeanPostProcessor-aop.png?raw=true",alt:"\u56fe"}))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"bean \u548c context\u76f8\u5173\u7684"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{parentName:"p",src:"https://github.com/mxsm/document/blob/master/image/Spring/Springframework/BeanPostProcessor-core.png?raw=true",alt:"\u56fe"}))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Spring Boot\u76f8\u5173\u7684\u5b9e\u73b0"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{parentName:"p",src:"https://github.com/mxsm/document/blob/master/image/Spring/Springframework/BeanPostProcessor-springboot.png?raw=true",alt:"\u56fe"})))),(0,a.kt)("p",null,"BeanPostProcessor\u662f\u5728Bean\u5b9e\u4f8b\u5316\u540e\uff0c\u5728\u81ea\u5b9a\u4e49\u521d\u59cb\u5316\u65b9\u6cd5\u524d\u540e\u6267\u884c\u3002"),(0,a.kt)("h3",{id:"2-beanpostprocessor"},"2. BeanPostProcessor"),(0,a.kt)("p",null,"\u5904\u7406\u5668\u5b9a\u4e49\u4e86Bean ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"\u521d\u59cb\u5316"))," \u524d\u540e\u6267\u884c\u7684\u65b9\u6cd5\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public interface BeanPostProcessor {\n\n    //\u81ea\u5b9a\u4e49\u521d\u59cb\u5316\u65b9\u6cd5\u4e4b\u524d\u6267\u884c\n    @Nullable\n    default Object postProcessBeforeInitialization(Object bean, String beanName) throws BeansException {\n        return bean;\n    }\n\n    //\u81ea\u5b9a\u4e49\u521d\u59cb\u5316\u65b9\u6cd5\u4e4b\u540e\u6267\u884c\n    @Nullable\n    default Object postProcessAfterInitialization(Object bean, String beanName) throws BeansException {\n        return bean;\n    }\n\n}\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u4ee3\u7801\u793a\u4f8b\u5730\u5740\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mxsm/spring-sample/tree/master/spring-beanPostProcessor"},"https://github.com/mxsm/spring-sample/tree/master/spring-beanPostProcessor"))),(0,a.kt)("p",null,"\u4ee3\u7801\u6f14\u793a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'public class MyBeanPostProcessor implements BeanPostProcessor {\n    @Override\n    public Object postProcessBeforeInitialization(Object bean, String beanName) throws BeansException {\n\n        System.out.println( " ----before----- " + beanName);\n\n        return bean;\n    }\n\n\n    @Override\n    public Object postProcessAfterInitialization(Object bean, String beanName) throws BeansException {\n\n        System.out.println( " ----after----- " + beanName);\n\n        return bean;\n    }\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'public class TestBean {\n\n    private String name;\n\n    public void init(){\n        System.out.println("TestBean---init()");\n        this.name = "test";\n    }\n\n    public String getName() {\n        return name;\n    }\n\n    public void setName(String name) {\n        this.name = name;\n    }\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8"?>\n<beans xmlns="http://www.springframework.org/schema/beans"\n       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n       xmlns:context="http://www.springframework.org/schema/context"\n       xsi:schemaLocation="http://www.springframework.org/schema/beans\n        https://www.springframework.org/schema/beans/spring-beans.xsd\n        http://www.springframework.org/schema/context\n        https://www.springframework.org/schema/context/spring-context.xsd">\n\n    <bean id="testBean" class="com.github.mxsm.bean.TestBean" init-method="init"/>\n\n    <bean class="com.github.mxsm.processor.MyBeanPostProcessor" id="myBeanPostProcessor"/>\n\n</beans>\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'public class ApplicationBoot{\n    public static void main( String[] args ) {\n\n        ApplicationContext applicationContext = new ClassPathXmlApplicationContext("application.xml");\n        TestBean testBean = applicationContext.getBean(TestBean.class);\n        System.out.println(testBean.getName());\n\n    }\n}\n')),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://github.com/mxsm/document/blob/master/image/Spring/Springframework/BeanPostProcessor%E4%BB%A3%E7%A0%81%E6%BC%94%E7%A4%BA.png?raw=true",alt:"\u56fe\u793a"})),(0,a.kt)("p",null,"\u901a\u8fc7\u4ee3\u7801\u53ef\u4ee5\u770b\u51fa\u6765\u6267\u884c\u7ed3\u679c\u3002"),(0,a.kt)("h3",{id:"3-instantiationawarebeanpostprocessor"},"3. ",(0,a.kt)("strong",{parentName:"h3"},"InstantiationAwareBeanPostProcessor")),(0,a.kt)("p",null,"\u8be5\u5904\u7406\u5668\u5b9a\u4e49\u4e86Bean ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"\u5b9e\u4f8b\u5316"))," \u524d\u540e\u6267\u884c\u7684\u65b9\u6cd5\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public interface InstantiationAwareBeanPostProcessor extends BeanPostProcessor {\n    //\u5b9e\u4f8b\u5316\u4e4b\u524d\n    @Nullable\n    default Object postProcessBeforeInstantiation(Class<?> beanClass, String beanName) throws BeansException { \n        //\u8fd9\u91cc\u53ef\u4ee5\u81ea\u5b9a\u4e49\u4ee3\u7406\u7c7b\n        return null;\n    }\n\n    //\u5b9e\u4f8b\u5316\u540e-\u4f46\u662f\u6267\u884c\u5728\u521d\u59cb\u5316\u4e4b\u524d\n    default boolean postProcessAfterInstantiation(Object bean, String beanName) throws BeansException {\n        return true;\n    }\n\n    //\u5904\u7406bean\u7684Properties\u503c\n    @Nullable\n    default PropertyValues postProcessProperties(PropertyValues pvs, Object bean, String beanName)\n            throws BeansException {\n\n        return null;\n    }\n\n}\n")),(0,a.kt)("h3",{id:"4destructionawarebeanpostprocessor"},"4.DestructionAwareBeanPostProcessor"),(0,a.kt)("p",null,"\u8be5\u5904\u7406\u5668\u4e86\u9500\u6bc1Bean\u4e4b\u524d\u7684\u64cd\u4f5c\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public interface DestructionAwareBeanPostProcessor extends BeanPostProcessor {\n\n    //bean\u9500\u6bc1\u4e4b\u524d\n    void postProcessBeforeDestruction(Object bean, String beanName) throws BeansException;\n\n    //bean\u662f\u5426\u9700\u8981\u9500\u6bc1\n    default boolean requiresDestruction(Object bean) {\n        return true;\n    }\n\n}\n\n")),(0,a.kt)("h3",{id:"5-\u770b\u4e00\u4e0bspring\u81ea\u8eab\u7684\u5b9e\u73b0"},"5. \u770b\u4e00\u4e0bSpring\u81ea\u8eab\u7684\u5b9e\u73b0"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"class ApplicationContextAwareProcessor implements BeanPostProcessor {\n\n    private final ConfigurableApplicationContext applicationContext;\n\n    private final StringValueResolver embeddedValueResolver;\n\n\n    /**\n     * Create a new ApplicationContextAwareProcessor for the given context.\n     */\n    public ApplicationContextAwareProcessor(ConfigurableApplicationContext applicationContext) {\n        this.applicationContext = applicationContext;\n        this.embeddedValueResolver = new EmbeddedValueResolver(applicationContext.getBeanFactory());\n    }\n\n\n    @Override\n    @Nullable\n    public Object postProcessBeforeInitialization(final Object bean, String beanName) throws BeansException {\n        AccessControlContext acc = null;\n\n        if (System.getSecurityManager() != null &&\n                (bean instanceof EnvironmentAware || bean instanceof EmbeddedValueResolverAware ||\n                        bean instanceof ResourceLoaderAware || bean instanceof ApplicationEventPublisherAware ||\n                        bean instanceof MessageSourceAware || bean instanceof ApplicationContextAware)) {\n            acc = this.applicationContext.getBeanFactory().getAccessControlContext();\n        }\n\n        if (acc != null) {\n            AccessController.doPrivileged((PrivilegedAction<Object>) () -> {\n                invokeAwareInterfaces(bean);\n                return null;\n            }, acc);\n        }\n        else {\n            invokeAwareInterfaces(bean);\n        }\n\n        return bean;\n    }\n\n    private void invokeAwareInterfaces(Object bean) {\n        if (bean instanceof Aware) {\n            if (bean instanceof EnvironmentAware) {\n                ((EnvironmentAware) bean).setEnvironment(this.applicationContext.getEnvironment());\n            }\n            if (bean instanceof EmbeddedValueResolverAware) {\n                ((EmbeddedValueResolverAware) bean).setEmbeddedValueResolver(this.embeddedValueResolver);\n            }\n            if (bean instanceof ResourceLoaderAware) {\n                ((ResourceLoaderAware) bean).setResourceLoader(this.applicationContext);\n            }\n            if (bean instanceof ApplicationEventPublisherAware) {\n                ((ApplicationEventPublisherAware) bean).setApplicationEventPublisher(this.applicationContext);\n            }\n            if (bean instanceof MessageSourceAware) {\n                ((MessageSourceAware) bean).setMessageSource(this.applicationContext);\n            }\n            if (bean instanceof ApplicationContextAware) {\n                ((ApplicationContextAware) bean).setApplicationContext(this.applicationContext);\n            }\n        }\n    }\n\n    @Override\n    public Object postProcessAfterInitialization(Object bean, String beanName) {\n        return bean;\n    }\n\n}\n")),(0,a.kt)("p",null,"\u5f53\u524d\u7c7b\u4e3b\u8981\u7528\u6765\u5904\u7406\u7ee7\u627f\u4e86 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Aware"))," \u63a5\u53e3\u7c7b\u3002\u7136\u540e\u6839\u636e ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Aware"))," \u63a5\u53e3\u7684\u4e0d\u540c\u5b9e\u73b0\u8bbe\u7f6e\u5bf9\u5e94\u7684\u63a5\u53e3\u5bf9\u8c61"),(0,a.kt)("h3",{id:"6-beanpostprocessor-spring\u6e90\u7801\u5206\u6790"},"6. BeanPostProcessor Spring\u6e90\u7801\u5206\u6790"),(0,a.kt)("p",null,"\u9996\u5148\u660e\u786e\u4e00\u70b9 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"BeanPostProcessor")),"  \u5b9e\u73b0\u7684\u7c7b\u90fd\u662fSpring\u5bb9\u5668\u4e2d\u7684\u4e00\u4e2aBean\u3002\u5728 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"AbstractApplicationContext#refresh"))," \u662f\u6700\u91cd\u8981\u7684\u4e00\u4e2a\u65b9\u6cd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public void refresh() throws BeansException, IllegalStateException {\n        synchronized (this.startupShutdownMonitor) {\n                //\u7701\u4e86\u90e8\u5206\u4ee3\u7801\n\n            try {\n                \n                //\u7701\u4e86\u90e8\u5206\u4ee3\u7801\n                // Register bean processors that intercept bean creation.\n                registerBeanPostProcessors(beanFactory);\n\n              //\u7701\u4e86\u90e8\u5206\u4ee3\u7801\n            }\n\n            catch (BeansException ex) {\n                \n            }\n\n            finally {\n                //\u7701\u4e86\u90e8\u5206\u4ee3\u7801\n            }\n        }\n}\nprotected void registerBeanPostProcessors(ConfigurableListableBeanFactory beanFactory) {\n    //\u901a\u8fc7PostProcessorRegistrationDelegate\u7c7b\u7684\u9759\u6001\u65b9\u6cd5\u5904\u7406\n    PostProcessorRegistrationDelegate.registerBeanPostProcessors(beanFactory, this);\n}\n")),(0,a.kt)("p",null,"\u4e0b\u9762\u770b\u4e00\u4e0b ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"PostProcessorRegistrationDelegate.registerBeanPostProcessors(beanFactory, this);"))," \u65b9\u6cd5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"    public static void registerBeanPostProcessors(\n            ConfigurableListableBeanFactory beanFactory, AbstractApplicationContext applicationContext) {\n\n        String[] postProcessorNames = beanFactory.getBeanNamesForType(BeanPostProcessor.class, true, false);\n\n        // Register BeanPostProcessorChecker that logs an info message when\n        // a bean is created during BeanPostProcessor instantiation, i.e. when\n        // a bean is not eligible for getting processed by all BeanPostProcessors.\n        int beanProcessorTargetCount = beanFactory.getBeanPostProcessorCount() + 1 + postProcessorNames.length;\n        beanFactory.addBeanPostProcessor(new BeanPostProcessorChecker(beanFactory, beanProcessorTargetCount));\n\n        //\u5904\u7406\u5206\u4e3a\u4e09\u7c7b\uff1a1 PriorityOrdered\u5b9e\u73b0 2 Ordered \u7b2c\u4e09\u7c7b\u5c31\u662f\u666e\u901a\u7684\n        List<BeanPostProcessor> priorityOrderedPostProcessors = new ArrayList<>();\n        List<BeanPostProcessor> internalPostProcessors = new ArrayList<>();\n        List<String> orderedPostProcessorNames = new ArrayList<>();\n        List<String> nonOrderedPostProcessorNames = new ArrayList<>();\n        for (String ppName : postProcessorNames) {\n            if (beanFactory.isTypeMatch(ppName, PriorityOrdered.class)) {\n                BeanPostProcessor pp = beanFactory.getBean(ppName, BeanPostProcessor.class);\n                priorityOrderedPostProcessors.add(pp);\n                if (pp instanceof MergedBeanDefinitionPostProcessor) {\n                    internalPostProcessors.add(pp);\n                }\n            }\n            else if (beanFactory.isTypeMatch(ppName, Ordered.class)) {\n                orderedPostProcessorNames.add(ppName);\n            }\n            else {\n                nonOrderedPostProcessorNames.add(ppName);\n            }\n        }\n\n        // \u5904\u7406PriorityOrdered\u5b9e\u73b0\n        sortPostProcessors(priorityOrderedPostProcessors, beanFactory);\n        registerBeanPostProcessors(beanFactory, priorityOrderedPostProcessors);\n\n        // \u5904\u7406 Ordered\u5b9e\u73b0.\n        List<BeanPostProcessor> orderedPostProcessors = new ArrayList<>();\n        for (String ppName : orderedPostProcessorNames) {\n            BeanPostProcessor pp = beanFactory.getBean(ppName, BeanPostProcessor.class);\n            orderedPostProcessors.add(pp);\n            if (pp instanceof MergedBeanDefinitionPostProcessor) {\n                internalPostProcessors.add(pp);\n            }\n        }\n        sortPostProcessors(orderedPostProcessors, beanFactory);\n        registerBeanPostProcessors(beanFactory, orderedPostProcessors);\n\n        // \u5904\u7406\u6b63\u5e38\u7684\n        List<BeanPostProcessor> nonOrderedPostProcessors = new ArrayList<>();\n        for (String ppName : nonOrderedPostProcessorNames) {\n            BeanPostProcessor pp = beanFactory.getBean(ppName, BeanPostProcessor.class);\n            nonOrderedPostProcessors.add(pp);\n            if (pp instanceof MergedBeanDefinitionPostProcessor) {\n                internalPostProcessors.add(pp);\n            }\n        }\n        registerBeanPostProcessors(beanFactory, nonOrderedPostProcessors);\n\n        //\u6ce8\u518cMergedBeanDefinitionPostProcessor\n        sortPostProcessors(internalPostProcessors, beanFactory);\n        registerBeanPostProcessors(beanFactory, internalPostProcessors);\n\n        // Re-register post-processor for detecting inner beans as ApplicationListeners,\n        // moving it to the end of the processor chain (for picking up proxies etc).\n        beanFactory.addBeanPostProcessor(new ApplicationListenerDetector(applicationContext));\n    }\n")),(0,a.kt)("p",null,"\u901a\u8fc7\u8be5\u65b9\u6cd5\u5c06 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"BeanPostProcessor"))," \u7684\u4ee5\u4e0a\u51e0\u79cd\u5b9e\u73b0\u7c7b\u90fd\u6ce8\u518c\u5230Spring\u4e2d\u3002"),(0,a.kt)("p",null,"\u7136\u540e\u5728\u751f\u6210Bean\u7684\u65f6\u5019\u53bb\u6267\u884c\uff0c ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"AbstractAutowireCapableBeanFactory.createBean"))," \u521b\u5efaBean"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"    protected Object createBean(String beanName, RootBeanDefinition mbd, @Nullable Object[] args)\n            throws BeanCreationException {\n            \n            //\u7701\u7565\u4ee3\u7801\n        \n            try {\n            // \u6267\u884c\u5b9e\u4f8b\u5316\u4e4b\u524d\u65b9\u6cd5.\n            Object bean = resolveBeforeInstantiation(beanName, mbdToUse);\n            if (bean != null) {\n                return bean;\n            }          \n            //\u7701\u7565\u4ee3\u7801    \n        }\n    }\n    protected Object resolveBeforeInstantiation(String beanName, RootBeanDefinition mbd) {\n        Object bean = null;\n        if (!Boolean.FALSE.equals(mbd.beforeInstantiationResolved)) {\n            \n            if (!mbd.isSynthetic() && hasInstantiationAwareBeanPostProcessors()) {\n                Class<?> targetType = determineTargetType(beanName, mbd);\n                if (targetType != null) {\n                    //\u6267\u884cInstantiationAwareBeanPostProcessor#postProcessBeforeInstantiation(\u5b9e\u4f8b\u5316\u4e4b\u524d\u65b9\u6cd5)\n                    bean = applyBeanPostProcessorsBeforeInstantiation(targetType, beanName);\n                    if (bean != null) {\n                        //\u6267\u884cInstantiationAwareBeanPostProcessor#postProcessAfterInitialization(\u521d\u59cb\u5316\u540e\u7684\u65b9\u6cd5)\n                        bean = applyBeanPostProcessorsAfterInitialization(bean, beanName);\n                    }\n                }\n            }\n            mbd.beforeInstantiationResolved = (bean != null);\n        }\n        return bean;\n    }\n")),(0,a.kt)("p",null,"\u901a\u8fc7\u4ee3\u7801\u53ef\u4ee5\u77e5\u9053 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"resolveBeforeInstantiation"))," \u65b9\u6cd5\u6267\u884c\u5b9e\u4f8b\u5316\u4e4b\u524d\u7684\u65b9\u6cd5\u3002\u5982\u679c\u5b9e\u4f8b\u5316\u4e4b\u524d\u7684\u65b9\u6cd5\u8fd4\u56de\u4e86\u5bf9\u5e94Bean\u90a3\u4e48\u76f4\u63a5\u6267\u884c\u521d\u59cb\u5316\u540e\u7684\u65b9\u6cd5\u3002\u5b9e\u4f8b\u5316 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"InstantiationAwareBeanPostProcessor#postProcessBeforeInstantiation"))," \u65b9\u6cd5\u6267\u884c\u8fd4\u56deBean\u4e3a\u7a7a\u5c31\u8c03\u7528  ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"AbstractAutowireCapableBeanFactory#doCreateBean"))," \u65b9\u6cd5\u3002\u5728\u8fd9\u4e2a\u65b9\u6cd5\u91cc\u9762\u6709\u5982\u4e0b\u51e0\u4e2a\u91cd\u8981\u7684\u65b9\u6cd5\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"AbstractAutowireCapableBeanFactory#applyMergedBeanDefinitionPostProcessors")," \u65b9\u6cd5"),(0,a.kt)("p",{parentName:"li"},"\u6267\u884c ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"MergedBeanDefinitionPostProcessor#postProcessMergedBeanDefinition"))," \u65b9\u6cd5")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"AbstractAutowireCapableBeanFactory#populateBean")," \u65b9\u6cd5"),(0,a.kt)("p",{parentName:"li"},"\u6267\u884c ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"InstantiationAwareBeanPostProcessor#postProcessAfterInstantiation"))," \u65b9\u6cd5\uff0c\u5982\u679c\u524d\u9762\u65b9\u6cd5\u8fd4\u56detrue\uff0c\u6267\u884c ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"InstantiationAwareBeanPostProcessor#postProcessProperties"))," \u65b9\u6cd5")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"AbstractAutowireCapableBeanFactory#initializeBean")," \u65b9\u6cd5"),(0,a.kt)("p",{parentName:"li"},"\u6267\u884c ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"BeanPostProcessor#postProcessBeforeInitialization"))," \u65b9\u6cd5\uff0c\u7136\u540e\u6267\u884c ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"AbstractAutowireCapableBeanFactory#invokeInitMethods"))," \u65b9\u6cd5(\u5305\u62ec\u5b9e\u73b0\u4e86InitializingBean\u63a5\u53e3\u7684\u65b9\u6cd5\u6216\u8005\u6709\u6ce8\u89e3@PostConstruct\u7684\u65b9\u6cd5)\uff0c\u7136\u540e\u6267\u884c ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"BeanPostProcessor#postProcessAfterInitialization"))))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://github.com/mxsm/picture/blob/main/spring/BeanPostProcessor%E7%BB%A7%E6%89%BF%E6%96%B9%E6%B3%95%E6%89%A7%E8%A1%8C%E7%9A%84%E6%B5%81%E7%A8%8B.png?raw=true",alt:"\u56fe"})),(0,a.kt)("h3",{id:"7-\u603b\u7ed3"},"7. \u603b\u7ed3"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"BeanPostProcessor \u4e3b\u8981\u7528\u6765\u5904\u7406Bean\u5185\u90e8\u7684\u6ce8\u89e3\u3002\u6bd4\u5982Spring\u81ea\u5df1\u5b9e\u73b0\u7684@Autowired\u3001@Value\uff0c @EJB\uff0c@WebServiceRef\uff0c@PostConstruct\uff0c@PreDestroy\u7b49")),(0,a.kt)("blockquote",null,(0,a.kt)("ol",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ol"},"\u81ea\u5b9a\u4e49\u7c7b\u4f3c\u4e8e@Value\uff0c@Autowired\u7684\u6ce8\u89e3\uff0c\u4e3b\u8981\u7528\u4e8eJava\u7c7b\u53d8\u91cf\u6216\u8005\u65b9\u6cd5\u4e0a\u7684\u6ce8\u89e3"),(0,a.kt)("li",{parentName:"ol"},"\u4e3b\u8981\u7528\u4e8e\u5904\u7406Bean\u5185\u90e8\u7684\u6ce8\u89e3\u5b9e\u73b0\uff0c\u4e3b\u8981\u662f\u53d8\u91cf\u6216\u8005\u65b9\u6cd5\u4e0a\u9762\u7684\u6ce8\u89e3"))),(0,a.kt)("p",null,"\u53c2\u8003\u6587\u6863\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://cloud.tencent.com/developer/article/1409273"},"https://cloud.tencent.com/developer/article/1409273"))))}m.isMDXComponent=!0}}]);