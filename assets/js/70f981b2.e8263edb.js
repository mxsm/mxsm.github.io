"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[6928],{5834:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var s=n(5893),r=n(1151);const o={title:"BeanPostProcessor\u8bb2\u89e3",date:new Date("2019-11-26T00:00:00.000Z"),weight:5},a=void 0,i={id:"spring/spring-framework/core-source-analysis/BeanPostProcessor",title:"BeanPostProcessor\u8bb2\u89e3",description:"Spring Framework\u7248\u672c 5.3.4",source:"@site/docs/spring/spring-framework/core-source-analysis/BeanPostProcessor.md",sourceDirName:"spring/spring-framework/core-source-analysis",slug:"/spring/spring-framework/core-source-analysis/BeanPostProcessor",permalink:"/docs/spring/spring-framework/core-source-analysis/BeanPostProcessor",draft:!1,unlisted:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/spring/spring-framework/core-source-analysis/BeanPostProcessor.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1706451902,formattedLastUpdatedAt:"Jan 28, 2024",frontMatter:{title:"BeanPostProcessor\u8bb2\u89e3",date:"2019-11-26T00:00:00.000Z",weight:5},sidebar:"springframework",previous:{title:"BeanPostProcessor\u76f8\u5173\u63a5\u53e3\u6267\u884c\u7684\u65b9\u6cd5",permalink:"/docs/spring/spring-framework/core-source-analysis/BeanPostProcessor-exe-method"},next:{title:"ClassPathXmlApplicationContext\u6e90\u7801\u89e3\u6790",permalink:"/docs/spring/spring-framework/core-source-analysis/ClassPathXmlApplicationContext"}},c={},l=[{value:"1. BeanPostProcessor\u662f\u5e72\u4ec0\u4e48\u7684\uff1f",id:"1-beanpostprocessor\u662f\u5e72\u4ec0\u4e48\u7684",level:3},{value:"2. BeanPostProcessor",id:"2-beanpostprocessor",level:3},{value:"3. <strong>InstantiationAwareBeanPostProcessor</strong>",id:"3-instantiationawarebeanpostprocessor",level:3},{value:"4.DestructionAwareBeanPostProcessor",id:"4destructionawarebeanpostprocessor",level:3},{value:"5. \u770b\u4e00\u4e0bSpring\u81ea\u8eab\u7684\u5b9e\u73b0",id:"5-\u770b\u4e00\u4e0bspring\u81ea\u8eab\u7684\u5b9e\u73b0",level:3},{value:"6. BeanPostProcessor Spring\u6e90\u7801\u5206\u6790",id:"6-beanpostprocessor-spring\u6e90\u7801\u5206\u6790",level:3},{value:"7. \u603b\u7ed3",id:"7-\u603b\u7ed3",level:3}];function p(e){const t={a:"a",blockquote:"blockquote",br:"br",code:"code",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"Spring Framework\u7248\u672c 5.3.4"}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"1-beanpostprocessor\u662f\u5e72\u4ec0\u4e48\u7684",children:"1. BeanPostProcessor\u662f\u5e72\u4ec0\u4e48\u7684\uff1f"}),"\n",(0,s.jsxs)(t.p,{children:["BeanPostProcessor\u63a5\u53e3\u4f5c\u7528\u662f\uff1a\u5982\u679c\u6211\u4eec\u9700\u8981\u5728Spring\u5bb9\u5668\u5b8c\u6210Bean\u7684\u5b9e\u4f8b\u5316\u3001\u914d\u7f6e\u548c\u5176\u4ed6\u7684\u521d\u59cb\u5316\u524d\u540e\u6dfb\u52a0\u4e00\u4e9b\u81ea\u5df1\u7684\u903b\u8f91\u5904\u7406\uff0c\u6211\u4eec\u5c31\u53ef\u4ee5\u5b9a\u4e49\u4e00\u4e2a\u6216\u8005\u591a\u4e2aBeanPostProcessor\u63a5\u53e3\u7684\u5b9e\u73b0\uff0c\u7136\u540e\u6ce8\u518c\u5230\u5bb9\u5668\u4e2d\u3002(\u7c7b\u4f3c\u4e8e\u62e6\u622a\u5668\u548c\u8fc7\u6ee4\u5668)\u3002",(0,s.jsx)(t.br,{}),"\n","BeanPostProcessor\u5206\u4e3a\u4e09\u5927\u7c7b\u5982\u4e0b\u56fe\uff1a\n",(0,s.jsx)(t.img,{src:"https://github.com/mxsm/picture/blob/main/spring/BeanPostProcessor%E5%88%86%E7%B1%BB.png?raw=true",alt:"\u56fe"})]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"\u5b9e\u4f8b\u5316"}),"\n",(0,s.jsx)(t.li,{children:"\u521d\u59cb\u5316"}),"\n",(0,s.jsx)(t.li,{children:"\u9500\u6bc1"}),"\n"]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["Bean\u5b9e\u4f8b\u5316\u4f1a\u6267\u884c ",(0,s.jsx)(t.strong,{children:"InstantiationAwareBeanPostProcessor"})," \u3001 ",(0,s.jsx)(t.strong,{children:"SmartInstantiationAwareBeanPostProcessor"})," \u8fd9\u4e24\u7c7b\u5904\u7406\u5668\uff0cBean\u5b9e\u4f8b\u5316\u540e\u6bcf\u4e2abean\u5c31\u4f1a\u901a\u8fc7 ",(0,s.jsx)(t.strong,{children:"BeanPostProcessor"})," \u3001 ",(0,s.jsx)(t.strong,{children:"MergedBeanDefinitionPostProcessor"})," \u5b9e\u73b0\u7684\u7c7b\u7684\u5904\u7406\u3002Bean\u9500\u6bc1\u4f1a\u901a\u8fc7 ",(0,s.jsx)(t.strong,{children:"DestructionAwareBeanPostProcessor"})," \u5904\u7406\u5668\u3002"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Spring Bean\u7684\u5b9e\u4f8b\u5316\u56fe\u89e3\uff1a"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://github.com/mxsm/document/blob/master/image/Spring/Springframework/bean%E5%AE%9E%E4%BE%8B%E5%8C%96%E8%BF%87%E7%A8%8B.png?raw=true",alt:"\u56fe"})}),"\n",(0,s.jsxs)(t.p,{children:["\u5728\u68c0\u67e5\u5b8c ",(0,s.jsx)(t.strong,{children:"Aware"})," \u63a5\u53e3\u540e\uff0c\u5c31\u5f00\u59cb\u8c03\u7528 ",(0,s.jsx)(t.strong,{children:"BeanPostProcessor"})," \u8fdb\u884c\u524d\u7f6e\u5904\u7406\u540e\u540e\u7f6e\u5904\u7406\u3002\u4e0b\u9762\u6765\u770b\u4e00\u4e0bSpring\u4e2d\u7684\u51e0\u7c7b\u7ee7\u627f\uff1a"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"AOP\u76f8\u5173\u7684"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://github.com/mxsm/document/blob/master/image/Spring/Springframework/BeanPostProcessor-aop.png?raw=true",alt:"\u56fe"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"bean \u548c context\u76f8\u5173\u7684"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://github.com/mxsm/document/blob/master/image/Spring/Springframework/BeanPostProcessor-core.png?raw=true",alt:"\u56fe"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Spring Boot\u76f8\u5173\u7684\u5b9e\u73b0"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://github.com/mxsm/document/blob/master/image/Spring/Springframework/BeanPostProcessor-springboot.png?raw=true",alt:"\u56fe"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"BeanPostProcessor\u662f\u5728Bean\u5b9e\u4f8b\u5316\u540e\uff0c\u5728\u81ea\u5b9a\u4e49\u521d\u59cb\u5316\u65b9\u6cd5\u524d\u540e\u6267\u884c\u3002"}),"\n",(0,s.jsx)(t.h3,{id:"2-beanpostprocessor",children:"2. BeanPostProcessor"}),"\n",(0,s.jsxs)(t.p,{children:["\u5904\u7406\u5668\u5b9a\u4e49\u4e86Bean ",(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"\u521d\u59cb\u5316"})})," \u524d\u540e\u6267\u884c\u7684\u65b9\u6cd5\u3002"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-java",children:"public interface BeanPostProcessor {\n\n\t//\u81ea\u5b9a\u4e49\u521d\u59cb\u5316\u65b9\u6cd5\u4e4b\u524d\u6267\u884c\n\t@Nullable\n\tdefault Object postProcessBeforeInitialization(Object bean, String beanName) throws BeansException {\n\t\treturn bean;\n\t}\n\n\t//\u81ea\u5b9a\u4e49\u521d\u59cb\u5316\u65b9\u6cd5\u4e4b\u540e\u6267\u884c\n\t@Nullable\n\tdefault Object postProcessAfterInitialization(Object bean, String beanName) throws BeansException {\n\t\treturn bean;\n\t}\n\n}\n"})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["\u4ee3\u7801\u793a\u4f8b\u5730\u5740\uff1a",(0,s.jsx)(t.a,{href:"https://github.com/mxsm/spring-sample/tree/master/spring-beanPostProcessor",children:"https://github.com/mxsm/spring-sample/tree/master/spring-beanPostProcessor"})]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"\u4ee3\u7801\u6f14\u793a\uff1a"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-java",children:'public class MyBeanPostProcessor implements BeanPostProcessor {\n    @Override\n    public Object postProcessBeforeInitialization(Object bean, String beanName) throws BeansException {\n\n        System.out.println( " ----before----- " + beanName);\n\n        return bean;\n    }\n\n\n    @Override\n    public Object postProcessAfterInitialization(Object bean, String beanName) throws BeansException {\n\n        System.out.println( " ----after----- " + beanName);\n\n        return bean;\n    }\n}\n'})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-java",children:'public class TestBean {\n\n    private String name;\n\n    public void init(){\n        System.out.println("TestBean---init()");\n        this.name = "test";\n    }\n\n    public String getName() {\n        return name;\n    }\n\n    public void setName(String name) {\n        this.name = name;\n    }\n}\n'})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-xml",children:'<?xml version="1.0" encoding="UTF-8"?>\n<beans xmlns="http://www.springframework.org/schema/beans"\n       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n       xmlns:context="http://www.springframework.org/schema/context"\n       xsi:schemaLocation="http://www.springframework.org/schema/beans\n        https://www.springframework.org/schema/beans/spring-beans.xsd\n        http://www.springframework.org/schema/context\n        https://www.springframework.org/schema/context/spring-context.xsd">\n\n    <bean id="testBean" class="com.github.mxsm.bean.TestBean" init-method="init"/>\n\n    <bean class="com.github.mxsm.processor.MyBeanPostProcessor" id="myBeanPostProcessor"/>\n\n</beans>\n'})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-java",children:'public class ApplicationBoot{\n    public static void main( String[] args ) {\n\n        ApplicationContext applicationContext = new ClassPathXmlApplicationContext("application.xml");\n        TestBean testBean = applicationContext.getBean(TestBean.class);\n        System.out.println(testBean.getName());\n\n    }\n}\n'})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://github.com/mxsm/document/blob/master/image/Spring/Springframework/BeanPostProcessor%E4%BB%A3%E7%A0%81%E6%BC%94%E7%A4%BA.png?raw=true",alt:"\u56fe\u793a"})}),"\n",(0,s.jsx)(t.p,{children:"\u901a\u8fc7\u4ee3\u7801\u53ef\u4ee5\u770b\u51fa\u6765\u6267\u884c\u7ed3\u679c\u3002"}),"\n",(0,s.jsxs)(t.h3,{id:"3-instantiationawarebeanpostprocessor",children:["3. ",(0,s.jsx)(t.strong,{children:"InstantiationAwareBeanPostProcessor"})]}),"\n",(0,s.jsxs)(t.p,{children:["\u8be5\u5904\u7406\u5668\u5b9a\u4e49\u4e86Bean ",(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"\u5b9e\u4f8b\u5316"})})," \u524d\u540e\u6267\u884c\u7684\u65b9\u6cd5\u3002"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-java",children:"public interface InstantiationAwareBeanPostProcessor extends BeanPostProcessor {\n    //\u5b9e\u4f8b\u5316\u4e4b\u524d\n\t@Nullable\n\tdefault Object postProcessBeforeInstantiation(Class<?> beanClass, String beanName) throws BeansException { \n        //\u8fd9\u91cc\u53ef\u4ee5\u81ea\u5b9a\u4e49\u4ee3\u7406\u7c7b\n\t\treturn null;\n\t}\n\n    //\u5b9e\u4f8b\u5316\u540e-\u4f46\u662f\u6267\u884c\u5728\u521d\u59cb\u5316\u4e4b\u524d\n\tdefault boolean postProcessAfterInstantiation(Object bean, String beanName) throws BeansException {\n\t\treturn true;\n\t}\n\n    //\u5904\u7406bean\u7684Properties\u503c\n\t@Nullable\n\tdefault PropertyValues postProcessProperties(PropertyValues pvs, Object bean, String beanName)\n\t\t\tthrows BeansException {\n\n\t\treturn null;\n\t}\n\n}\n"})}),"\n",(0,s.jsx)(t.h3,{id:"4destructionawarebeanpostprocessor",children:"4.DestructionAwareBeanPostProcessor"}),"\n",(0,s.jsx)(t.p,{children:"\u8be5\u5904\u7406\u5668\u4e86\u9500\u6bc1Bean\u4e4b\u524d\u7684\u64cd\u4f5c\u3002"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-java",children:"public interface DestructionAwareBeanPostProcessor extends BeanPostProcessor {\n\n\t//bean\u9500\u6bc1\u4e4b\u524d\n\tvoid postProcessBeforeDestruction(Object bean, String beanName) throws BeansException;\n\n\t//bean\u662f\u5426\u9700\u8981\u9500\u6bc1\n\tdefault boolean requiresDestruction(Object bean) {\n\t\treturn true;\n\t}\n\n}\n\n"})}),"\n",(0,s.jsx)(t.h3,{id:"5-\u770b\u4e00\u4e0bspring\u81ea\u8eab\u7684\u5b9e\u73b0",children:"5. \u770b\u4e00\u4e0bSpring\u81ea\u8eab\u7684\u5b9e\u73b0"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-java",children:"class ApplicationContextAwareProcessor implements BeanPostProcessor {\n\n\tprivate final ConfigurableApplicationContext applicationContext;\n\n\tprivate final StringValueResolver embeddedValueResolver;\n\n\n\t/**\n\t * Create a new ApplicationContextAwareProcessor for the given context.\n\t */\n\tpublic ApplicationContextAwareProcessor(ConfigurableApplicationContext applicationContext) {\n\t\tthis.applicationContext = applicationContext;\n\t\tthis.embeddedValueResolver = new EmbeddedValueResolver(applicationContext.getBeanFactory());\n\t}\n\n\n\t@Override\n\t@Nullable\n\tpublic Object postProcessBeforeInitialization(final Object bean, String beanName) throws BeansException {\n\t\tAccessControlContext acc = null;\n\n\t\tif (System.getSecurityManager() != null &&\n\t\t\t\t(bean instanceof EnvironmentAware || bean instanceof EmbeddedValueResolverAware ||\n\t\t\t\t\t\tbean instanceof ResourceLoaderAware || bean instanceof ApplicationEventPublisherAware ||\n\t\t\t\t\t\tbean instanceof MessageSourceAware || bean instanceof ApplicationContextAware)) {\n\t\t\tacc = this.applicationContext.getBeanFactory().getAccessControlContext();\n\t\t}\n\n\t\tif (acc != null) {\n\t\t\tAccessController.doPrivileged((PrivilegedAction<Object>) () -> {\n\t\t\t\tinvokeAwareInterfaces(bean);\n\t\t\t\treturn null;\n\t\t\t}, acc);\n\t\t}\n\t\telse {\n\t\t\tinvokeAwareInterfaces(bean);\n\t\t}\n\n\t\treturn bean;\n\t}\n\n\tprivate void invokeAwareInterfaces(Object bean) {\n\t\tif (bean instanceof Aware) {\n\t\t\tif (bean instanceof EnvironmentAware) {\n\t\t\t\t((EnvironmentAware) bean).setEnvironment(this.applicationContext.getEnvironment());\n\t\t\t}\n\t\t\tif (bean instanceof EmbeddedValueResolverAware) {\n\t\t\t\t((EmbeddedValueResolverAware) bean).setEmbeddedValueResolver(this.embeddedValueResolver);\n\t\t\t}\n\t\t\tif (bean instanceof ResourceLoaderAware) {\n\t\t\t\t((ResourceLoaderAware) bean).setResourceLoader(this.applicationContext);\n\t\t\t}\n\t\t\tif (bean instanceof ApplicationEventPublisherAware) {\n\t\t\t\t((ApplicationEventPublisherAware) bean).setApplicationEventPublisher(this.applicationContext);\n\t\t\t}\n\t\t\tif (bean instanceof MessageSourceAware) {\n\t\t\t\t((MessageSourceAware) bean).setMessageSource(this.applicationContext);\n\t\t\t}\n\t\t\tif (bean instanceof ApplicationContextAware) {\n\t\t\t\t((ApplicationContextAware) bean).setApplicationContext(this.applicationContext);\n\t\t\t}\n\t\t}\n\t}\n\n\t@Override\n\tpublic Object postProcessAfterInitialization(Object bean, String beanName) {\n\t\treturn bean;\n\t}\n\n}\n"})}),"\n",(0,s.jsxs)(t.p,{children:["\u5f53\u524d\u7c7b\u4e3b\u8981\u7528\u6765\u5904\u7406\u7ee7\u627f\u4e86 ",(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"Aware"})})," \u63a5\u53e3\u7c7b\u3002\u7136\u540e\u6839\u636e ",(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"Aware"})})," \u63a5\u53e3\u7684\u4e0d\u540c\u5b9e\u73b0\u8bbe\u7f6e\u5bf9\u5e94\u7684\u63a5\u53e3\u5bf9\u8c61"]}),"\n",(0,s.jsx)(t.h3,{id:"6-beanpostprocessor-spring\u6e90\u7801\u5206\u6790",children:"6. BeanPostProcessor Spring\u6e90\u7801\u5206\u6790"}),"\n",(0,s.jsxs)(t.p,{children:["\u9996\u5148\u660e\u786e\u4e00\u70b9 ",(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"BeanPostProcessor"})}),"  \u5b9e\u73b0\u7684\u7c7b\u90fd\u662fSpring\u5bb9\u5668\u4e2d\u7684\u4e00\u4e2aBean\u3002\u5728 ",(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"AbstractApplicationContext#refresh"})})," \u662f\u6700\u91cd\u8981\u7684\u4e00\u4e2a\u65b9\u6cd5\uff1a"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-java",children:"public void refresh() throws BeansException, IllegalStateException {\n\t\tsynchronized (this.startupShutdownMonitor) {\n\t\t\t\t//\u7701\u4e86\u90e8\u5206\u4ee3\u7801\n\n\t\t\ttry {\n\t\t\t\t\n\t\t\t\t//\u7701\u4e86\u90e8\u5206\u4ee3\u7801\n\t\t\t\t// Register bean processors that intercept bean creation.\n\t\t\t\tregisterBeanPostProcessors(beanFactory);\n\n\t\t\t  //\u7701\u4e86\u90e8\u5206\u4ee3\u7801\n\t\t\t}\n\n\t\t\tcatch (BeansException ex) {\n\t\t\t\t\n\t\t\t}\n\n\t\t\tfinally {\n\t\t\t\t//\u7701\u4e86\u90e8\u5206\u4ee3\u7801\n\t\t\t}\n\t\t}\n}\nprotected void registerBeanPostProcessors(ConfigurableListableBeanFactory beanFactory) {\n\t//\u901a\u8fc7PostProcessorRegistrationDelegate\u7c7b\u7684\u9759\u6001\u65b9\u6cd5\u5904\u7406\n    PostProcessorRegistrationDelegate.registerBeanPostProcessors(beanFactory, this);\n}\n"})}),"\n",(0,s.jsxs)(t.p,{children:["\u4e0b\u9762\u770b\u4e00\u4e0b ",(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"PostProcessorRegistrationDelegate.registerBeanPostProcessors(beanFactory, this);"})})," \u65b9\u6cd5"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-java",children:"\tpublic static void registerBeanPostProcessors(\n\t\t\tConfigurableListableBeanFactory beanFactory, AbstractApplicationContext applicationContext) {\n\n\t\tString[] postProcessorNames = beanFactory.getBeanNamesForType(BeanPostProcessor.class, true, false);\n\n\t\t// Register BeanPostProcessorChecker that logs an info message when\n\t\t// a bean is created during BeanPostProcessor instantiation, i.e. when\n\t\t// a bean is not eligible for getting processed by all BeanPostProcessors.\n\t\tint beanProcessorTargetCount = beanFactory.getBeanPostProcessorCount() + 1 + postProcessorNames.length;\n\t\tbeanFactory.addBeanPostProcessor(new BeanPostProcessorChecker(beanFactory, beanProcessorTargetCount));\n\n\t\t//\u5904\u7406\u5206\u4e3a\u4e09\u7c7b\uff1a1 PriorityOrdered\u5b9e\u73b0 2 Ordered \u7b2c\u4e09\u7c7b\u5c31\u662f\u666e\u901a\u7684\n\t\tList<BeanPostProcessor> priorityOrderedPostProcessors = new ArrayList<>();\n\t\tList<BeanPostProcessor> internalPostProcessors = new ArrayList<>();\n\t\tList<String> orderedPostProcessorNames = new ArrayList<>();\n\t\tList<String> nonOrderedPostProcessorNames = new ArrayList<>();\n\t\tfor (String ppName : postProcessorNames) {\n\t\t\tif (beanFactory.isTypeMatch(ppName, PriorityOrdered.class)) {\n\t\t\t\tBeanPostProcessor pp = beanFactory.getBean(ppName, BeanPostProcessor.class);\n\t\t\t\tpriorityOrderedPostProcessors.add(pp);\n\t\t\t\tif (pp instanceof MergedBeanDefinitionPostProcessor) {\n\t\t\t\t\tinternalPostProcessors.add(pp);\n\t\t\t\t}\n\t\t\t}\n\t\t\telse if (beanFactory.isTypeMatch(ppName, Ordered.class)) {\n\t\t\t\torderedPostProcessorNames.add(ppName);\n\t\t\t}\n\t\t\telse {\n\t\t\t\tnonOrderedPostProcessorNames.add(ppName);\n\t\t\t}\n\t\t}\n\n\t\t// \u5904\u7406PriorityOrdered\u5b9e\u73b0\n\t\tsortPostProcessors(priorityOrderedPostProcessors, beanFactory);\n\t\tregisterBeanPostProcessors(beanFactory, priorityOrderedPostProcessors);\n\n\t\t// \u5904\u7406 Ordered\u5b9e\u73b0.\n\t\tList<BeanPostProcessor> orderedPostProcessors = new ArrayList<>();\n\t\tfor (String ppName : orderedPostProcessorNames) {\n\t\t\tBeanPostProcessor pp = beanFactory.getBean(ppName, BeanPostProcessor.class);\n\t\t\torderedPostProcessors.add(pp);\n\t\t\tif (pp instanceof MergedBeanDefinitionPostProcessor) {\n\t\t\t\tinternalPostProcessors.add(pp);\n\t\t\t}\n\t\t}\n\t\tsortPostProcessors(orderedPostProcessors, beanFactory);\n\t\tregisterBeanPostProcessors(beanFactory, orderedPostProcessors);\n\n\t\t// \u5904\u7406\u6b63\u5e38\u7684\n\t\tList<BeanPostProcessor> nonOrderedPostProcessors = new ArrayList<>();\n\t\tfor (String ppName : nonOrderedPostProcessorNames) {\n\t\t\tBeanPostProcessor pp = beanFactory.getBean(ppName, BeanPostProcessor.class);\n\t\t\tnonOrderedPostProcessors.add(pp);\n\t\t\tif (pp instanceof MergedBeanDefinitionPostProcessor) {\n\t\t\t\tinternalPostProcessors.add(pp);\n\t\t\t}\n\t\t}\n\t\tregisterBeanPostProcessors(beanFactory, nonOrderedPostProcessors);\n\n\t\t//\u6ce8\u518cMergedBeanDefinitionPostProcessor\n\t\tsortPostProcessors(internalPostProcessors, beanFactory);\n\t\tregisterBeanPostProcessors(beanFactory, internalPostProcessors);\n\n\t\t// Re-register post-processor for detecting inner beans as ApplicationListeners,\n\t\t// moving it to the end of the processor chain (for picking up proxies etc).\n\t\tbeanFactory.addBeanPostProcessor(new ApplicationListenerDetector(applicationContext));\n\t}\n"})}),"\n",(0,s.jsxs)(t.p,{children:["\u901a\u8fc7\u8be5\u65b9\u6cd5\u5c06 ",(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"BeanPostProcessor"})})," \u7684\u4ee5\u4e0a\u51e0\u79cd\u5b9e\u73b0\u7c7b\u90fd\u6ce8\u518c\u5230Spring\u4e2d\u3002"]}),"\n",(0,s.jsxs)(t.p,{children:["\u7136\u540e\u5728\u751f\u6210Bean\u7684\u65f6\u5019\u53bb\u6267\u884c\uff0c ",(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"AbstractAutowireCapableBeanFactory.createBean"})})," \u521b\u5efaBean"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-java",children:"\tprotected Object createBean(String beanName, RootBeanDefinition mbd, @Nullable Object[] args)\n\t\t\tthrows BeanCreationException {\n        \t\n        \t//\u7701\u7565\u4ee3\u7801\n        \n        \ttry {\n\t\t\t// \u6267\u884c\u5b9e\u4f8b\u5316\u4e4b\u524d\u65b9\u6cd5.\n\t\t\tObject bean = resolveBeforeInstantiation(beanName, mbdToUse);\n\t\t\tif (bean != null) {\n\t\t\t\treturn bean;\n\t\t\t}          \n            //\u7701\u7565\u4ee3\u7801    \n\t\t}\n    }\n\tprotected Object resolveBeforeInstantiation(String beanName, RootBeanDefinition mbd) {\n\t\tObject bean = null;\n\t\tif (!Boolean.FALSE.equals(mbd.beforeInstantiationResolved)) {\n\t\t\t\n\t\t\tif (!mbd.isSynthetic() && hasInstantiationAwareBeanPostProcessors()) {\n\t\t\t\tClass<?> targetType = determineTargetType(beanName, mbd);\n\t\t\t\tif (targetType != null) {\n                    //\u6267\u884cInstantiationAwareBeanPostProcessor#postProcessBeforeInstantiation(\u5b9e\u4f8b\u5316\u4e4b\u524d\u65b9\u6cd5)\n\t\t\t\t\tbean = applyBeanPostProcessorsBeforeInstantiation(targetType, beanName);\n\t\t\t\t\tif (bean != null) {\n                        //\u6267\u884cInstantiationAwareBeanPostProcessor#postProcessAfterInitialization(\u521d\u59cb\u5316\u540e\u7684\u65b9\u6cd5)\n\t\t\t\t\t\tbean = applyBeanPostProcessorsAfterInitialization(bean, beanName);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t\tmbd.beforeInstantiationResolved = (bean != null);\n\t\t}\n\t\treturn bean;\n\t}\n"})}),"\n",(0,s.jsxs)(t.p,{children:["\u901a\u8fc7\u4ee3\u7801\u53ef\u4ee5\u77e5\u9053 ",(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"resolveBeforeInstantiation"})})," \u65b9\u6cd5\u6267\u884c\u5b9e\u4f8b\u5316\u4e4b\u524d\u7684\u65b9\u6cd5\u3002\u5982\u679c\u5b9e\u4f8b\u5316\u4e4b\u524d\u7684\u65b9\u6cd5\u8fd4\u56de\u4e86\u5bf9\u5e94Bean\u90a3\u4e48\u76f4\u63a5\u6267\u884c\u521d\u59cb\u5316\u540e\u7684\u65b9\u6cd5\u3002\u5b9e\u4f8b\u5316 ",(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"InstantiationAwareBeanPostProcessor#postProcessBeforeInstantiation"})})," \u65b9\u6cd5\u6267\u884c\u8fd4\u56deBean\u4e3a\u7a7a\u5c31\u8c03\u7528  ",(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"AbstractAutowireCapableBeanFactory#doCreateBean"})})," \u65b9\u6cd5\u3002\u5728\u8fd9\u4e2a\u65b9\u6cd5\u91cc\u9762\u6709\u5982\u4e0b\u51e0\u4e2a\u91cd\u8981\u7684\u65b9\u6cd5\uff1a"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"AbstractAutowireCapableBeanFactory#applyMergedBeanDefinitionPostProcessors"})," \u65b9\u6cd5"]}),"\n",(0,s.jsxs)(t.p,{children:["\u6267\u884c ",(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"MergedBeanDefinitionPostProcessor#postProcessMergedBeanDefinition"})})," \u65b9\u6cd5"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"AbstractAutowireCapableBeanFactory#populateBean"})," \u65b9\u6cd5"]}),"\n",(0,s.jsxs)(t.p,{children:["\u6267\u884c ",(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"InstantiationAwareBeanPostProcessor#postProcessAfterInstantiation"})})," \u65b9\u6cd5\uff0c\u5982\u679c\u524d\u9762\u65b9\u6cd5\u8fd4\u56detrue\uff0c\u6267\u884c ",(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"InstantiationAwareBeanPostProcessor#postProcessProperties"})})," \u65b9\u6cd5"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"AbstractAutowireCapableBeanFactory#initializeBean"})," \u65b9\u6cd5"]}),"\n",(0,s.jsxs)(t.p,{children:["\u6267\u884c ",(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"BeanPostProcessor#postProcessBeforeInitialization"})})," \u65b9\u6cd5\uff0c\u7136\u540e\u6267\u884c ",(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"AbstractAutowireCapableBeanFactory#invokeInitMethods"})})," \u65b9\u6cd5(\u5305\u62ec\u5b9e\u73b0\u4e86InitializingBean\u63a5\u53e3\u7684\u65b9\u6cd5\u6216\u8005\u6709\u6ce8\u89e3@PostConstruct\u7684\u65b9\u6cd5)\uff0c\u7136\u540e\u6267\u884c ",(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"BeanPostProcessor#postProcessAfterInitialization"})})]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://github.com/mxsm/picture/blob/main/spring/BeanPostProcessor%E7%BB%A7%E6%89%BF%E6%96%B9%E6%B3%95%E6%89%A7%E8%A1%8C%E7%9A%84%E6%B5%81%E7%A8%8B.png?raw=true",alt:"\u56fe"})}),"\n",(0,s.jsx)(t.h3,{id:"7-\u603b\u7ed3",children:"7. \u603b\u7ed3"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"BeanPostProcessor \u4e3b\u8981\u7528\u6765\u5904\u7406Bean\u5185\u90e8\u7684\u6ce8\u89e3\u3002\u6bd4\u5982Spring\u81ea\u5df1\u5b9e\u73b0\u7684@Autowired\u3001@Value\uff0c @EJB\uff0c@WebServiceRef\uff0c@PostConstruct\uff0c@PreDestroy\u7b49"})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"\u81ea\u5b9a\u4e49\u7c7b\u4f3c\u4e8e@Value\uff0c@Autowired\u7684\u6ce8\u89e3\uff0c\u4e3b\u8981\u7528\u4e8eJava\u7c7b\u53d8\u91cf\u6216\u8005\u65b9\u6cd5\u4e0a\u7684\u6ce8\u89e3"}),"\n",(0,s.jsx)(t.li,{children:"\u4e3b\u8981\u7528\u4e8e\u5904\u7406Bean\u5185\u90e8\u7684\u6ce8\u89e3\u5b9e\u73b0\uff0c\u4e3b\u8981\u662f\u53d8\u91cf\u6216\u8005\u65b9\u6cd5\u4e0a\u9762\u7684\u6ce8\u89e3"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"\u53c2\u8003\u6587\u6863\uff1a"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://cloud.tencent.com/developer/article/1409273",children:"https://cloud.tencent.com/developer/article/1409273"})}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>a});var s=n(7294);const r={},o=s.createContext(r);function a(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);