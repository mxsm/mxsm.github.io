"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[8118],{273:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var s=e(4848),o=e(8453);const i={title:"Spring AOP\u5e94\u7528\u4e4bEnableAsync",linkTitle:"Spring AOP\u5e94\u7528\u4e4bEnableAsync",date:new Date("2021-12-25T00:00:00.000Z"),weight:202112251711},r=void 0,a={id:"spring/spring-framework/aop-source-analysis/spring-aop-enableasync",title:"Spring AOP\u5e94\u7528\u4e4bEnableAsync",description:"Spring framework\u7248\u672c 5.3.x",source:"@site/docs/spring/spring-framework/aop-source-analysis/spring-aop-enableasync.md",sourceDirName:"spring/spring-framework/aop-source-analysis",slug:"/spring/spring-framework/aop-source-analysis/spring-aop-enableasync",permalink:"/docs/spring/spring-framework/aop-source-analysis/spring-aop-enableasync",draft:!1,unlisted:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/spring/spring-framework/aop-source-analysis/spring-aop-enableasync.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1719738085e3,frontMatter:{title:"Spring AOP\u5e94\u7528\u4e4bEnableAsync",linkTitle:"Spring AOP\u5e94\u7528\u4e4bEnableAsync",date:"2021-12-25T00:00:00.000Z",weight:202112251711},sidebar:"springframework",previous:{title:"Spring AOP Apis",permalink:"/docs/spring/spring-framework/aop-source-analysis/spring-aop-apis"},next:{title:"Spring AOP\u5e94\u7528\u4e4bSpring\u4e8b\u52a1\u7ba1\u7406",permalink:"/docs/spring/spring-framework/aop-source-analysis/spring-aop-transaction-management"}},c={},l=[{value:"1. \u5f02\u6b65\u6838\u5fc3\u7c7b",id:"1-\u5f02\u6b65\u6838\u5fc3\u7c7b",level:3},{value:"2. \u6e90\u7801\u5206\u6790",id:"2-\u6e90\u7801\u5206\u6790",level:3},{value:"2.1 @EnableAsync\u6e90\u7801\u89e3\u6790",id:"21-enableasync\u6e90\u7801\u89e3\u6790",level:4},{value:"2.2 AsyncConfigurationSelector\u6e90\u7801\u89e3\u6790",id:"22-asyncconfigurationselector\u6e90\u7801\u89e3\u6790",level:4},{value:"2.3 ProxyAsyncConfiguration\u6e90\u7801\u89e3\u6790",id:"23-proxyasyncconfiguration\u6e90\u7801\u89e3\u6790",level:4},{value:"2.4 AsyncAnnotationBeanPostProcessor\u6e90\u7801\u89e3\u6790",id:"24-asyncannotationbeanpostprocessor\u6e90\u7801\u89e3\u6790",level:4},{value:"2.5  AbstractAdvisingBeanPostProcessor#postProcessAfterInitialization\u521b\u5efa\u4ee3\u7406\u7c7b",id:"25--abstractadvisingbeanpostprocessorpostprocessafterinitialization\u521b\u5efa\u4ee3\u7406\u7c7b",level:4},{value:"2.6 \u5f02\u6b65\u65b9\u6cd5\u5982\u4f55\u6267\u884c",id:"26-\u5f02\u6b65\u65b9\u6cd5\u5982\u4f55\u6267\u884c",level:4},{value:"3. \u603b\u7ed3",id:"3-\u603b\u7ed3",level:3}];function d(n){const t={blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"Spring framework\u7248\u672c 5.3.x"}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"1-\u5f02\u6b65\u6838\u5fc3\u7c7b",children:"1. \u5f02\u6b65\u6838\u5fc3\u7c7b"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://raw.githubusercontent.com/mxsm/picture/main/spring/aop/EnableAsync%E5%85%B3%E7%B3%BB.png",alt:"EnableAsync\u5173\u7cfb"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"@EnableAsync"})}),"\n",(0,s.jsx)(t.p,{children:"\u5f00\u542fSpring\u7684\u5f02\u6b65\u529f\u80fd"}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"AsyncConfigurationSelector"})}),"\n",(0,s.jsx)(t.p,{children:"\u5bfc\u5165\u5f02\u6b65\u529f\u80fd\u7684\u914d\u7f6e\u548c\u5904\u7406\u76f8\u5173\u7684\u7c7b"}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"ProxyAsyncConfiguration"})}),"\n",(0,s.jsx)(t.p,{children:"\u4ee3\u7406\u5f02\u6b65\u914d\u7f6e\u7c7b\uff0c\u8bbe\u7f6e\u4e86\u6267\u884c\u7ebf\u7a0b\u6c60\u3001\u5f02\u6b65\u9519\u8bef\u7684\u5904\u7406\u5668\uff0c\u4ee5\u53caAOP\u76f8\u5173\u7684\u4e09\u4e2a\u7c7b"}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"AsyncAnnotationBeanPostProcessor"})}),"\n",(0,s.jsx)(t.p,{children:"\u5904\u7406\u6807\u8bb0\u4e86@Async\u7c7b\u548c\u65b9\u6cd5\uff08\u4e5f\u5c31\u662fSpring AOP\uff09"}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"AOP\u7684\u4e09\u5927\u7ec4\u4ef6"})}),"\n",(0,s.jsx)(t.p,{children:"AsyncAnnotationAdvisor\u3001AnnotationMatchingPointcut\u3001AnnotationAsyncExecutionInterceptor"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"2-\u6e90\u7801\u5206\u6790",children:"2. \u6e90\u7801\u5206\u6790"}),"\n",(0,s.jsx)(t.h4,{id:"21-enableasync\u6e90\u7801\u89e3\u6790",children:"2.1 @EnableAsync\u6e90\u7801\u89e3\u6790"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-java",children:"@Target(ElementType.TYPE)\n@Retention(RetentionPolicy.RUNTIME)\n@Documented\n@Import(AsyncConfigurationSelector.class)\npublic @interface EnableAsync {\n\t//\u8bbe\u7f6e\u81ea\u5b9a\u4e49\u7684\u6ce8\u89e3\n\tClass<? extends Annotation> annotation() default Annotation.class;\n\t\n\tboolean proxyTargetClass() default false;\n\n\tAdviceMode mode() default AdviceMode.PROXY;\n\n\tint order() default Ordered.LOWEST_PRECEDENCE;\n\n}\n"})}),"\n",(0,s.jsxs)(t.p,{children:["\u4ece\u4e0a\u9762\u53ef\u4ee5\u770b\u51fa\u4e3b\u8981\u4f7f\u7528\u4e86 ",(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"AsyncConfigurationSelector"})})," \u6765\u5bfc\u5165\u9009\u62e9\u5bfc\u5165\u914d\u7f6e\u7c7b\uff0c\u4e0b\u9762\u6765\u770b\u4e00\u4e0b"]}),"\n",(0,s.jsx)(t.h4,{id:"22-asyncconfigurationselector\u6e90\u7801\u89e3\u6790",children:"2.2 AsyncConfigurationSelector\u6e90\u7801\u89e3\u6790"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-java",children:'public class AsyncConfigurationSelector extends AdviceModeImportSelector<EnableAsync> {\n\n\tprivate static final String ASYNC_EXECUTION_ASPECT_CONFIGURATION_CLASS_NAME =\n\t\t\t"org.springframework.scheduling.aspectj.AspectJAsyncConfiguration";\n\n\t@Override\n\t@Nullable\n\tpublic String[] selectImports(AdviceMode adviceMode) {\n\t\tswitch (adviceMode) {\n\t\t\tcase PROXY:\n\t\t\t\treturn new String[] {ProxyAsyncConfiguration.class.getName()};\n\t\t\tcase ASPECTJ:\n\t\t\t\treturn new String[] {ASYNC_EXECUTION_ASPECT_CONFIGURATION_CLASS_NAME};\n\t\t\tdefault:\n\t\t\t\treturn null;\n\t\t}\n\t}\n\n}\n'})}),"\n",(0,s.jsxs)(t.p,{children:["\u5728\u8fd9\u91cc\u4e3b\u8981\u5bfc\u5165\u4e86\u914d\u7f6e ",(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"ProxyAsyncConfiguration"})})," \u3002\u8fd9\u4e2a\u7c7b\u4e3b\u8981\u7684\u4f5c\u7528\u4e5f\u662f\u5bfc\u5165\u914d\u7f6e\u7c7b\u3002\u63a5\u7740\u6765\u770b\u4e00\u4e0b\u914d\u7f6e\u7c7b\u3002"]}),"\n",(0,s.jsx)(t.h4,{id:"23-proxyasyncconfiguration\u6e90\u7801\u89e3\u6790",children:"2.3 ProxyAsyncConfiguration\u6e90\u7801\u89e3\u6790"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-java",children:'@Configuration(proxyBeanMethods = false)\n@Role(BeanDefinition.ROLE_INFRASTRUCTURE)\npublic class ProxyAsyncConfiguration extends AbstractAsyncConfiguration {\n\n\t@Bean(name = TaskManagementConfigUtils.ASYNC_ANNOTATION_PROCESSOR_BEAN_NAME)\n\t@Role(BeanDefinition.ROLE_INFRASTRUCTURE)\n\tpublic AsyncAnnotationBeanPostProcessor asyncAdvisor() {\n\t\tAssert.notNull(this.enableAsync, "@EnableAsync annotation metadata was not injected");\n\t\tAsyncAnnotationBeanPostProcessor bpp = new AsyncAnnotationBeanPostProcessor();\n\t\tbpp.configure(this.executor, this.exceptionHandler);\n\t\tClass<? extends Annotation> customAsyncAnnotation = this.enableAsync.getClass("annotation");\n\t\tif (customAsyncAnnotation != AnnotationUtils.getDefaultValue(EnableAsync.class, "annotation")) {\n\t\t\tbpp.setAsyncAnnotationType(customAsyncAnnotation);\n\t\t}\n\t\tbpp.setProxyTargetClass(this.enableAsync.getBoolean("proxyTargetClass"));\n\t\tbpp.setOrder(this.enableAsync.<Integer>getNumber("order"));\n\t\treturn bpp;\n\t}\n\n}\n'})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"ProxyAsyncConfiguration"})})," \u914d\u7f6e\u7ee7\u627f\u4e86 ",(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"AbstractAsyncConfiguration"})})," \u3002\u6574\u4e2a\u4e3b\u8981\u505a\u4e86\u4e09\u4ef6\u4e8b\u60c5\uff1a"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"ProxyAsyncConfiguration\u521b\u5efa\u4e86AsyncAnnotationBeanPostProcessor\u3002AsyncAnnotationBeanPostProcessor\u4e3b\u8981\u7528\u6765\u5b9e\u73b0AOP"}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"AbstractAsyncConfiguration\u4e3b\u8981\u8bbe\u7f6e\u4e86\u5f02\u6b65\u6267\u884c\u7684\u7ebf\u7a0b\u6c60Executor\uff0c\u548c\u6267\u884c\u62a5\u9519\u6ca1\u6709\u6355\u6349\u5230\u7684\u9519\u8bef\u7684\u5904\u7406\u5668 AsyncUncaughtExceptionHandler"}),"\n",(0,s.jsx)(t.p,{children:"Executor\u548cAsyncUncaughtExceptionHandler\u53ef\u4ee5\u901a\u8fc7AsyncConfigurer\u6765\u8fdb\u884c\u914d\u7f6e\u3002"}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"Tpis: AsyncConfigurer\u53ea\u80fd\u914d\u7f6e\u4e00\u4e2a"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h4,{id:"24-asyncannotationbeanpostprocessor\u6e90\u7801\u89e3\u6790",children:"2.4 AsyncAnnotationBeanPostProcessor\u6e90\u7801\u89e3\u6790"}),"\n",(0,s.jsx)(t.p,{children:"\u5728\u7c7b\u4e2d\u6709\u8fd9\u6837\u7684\u4e00\u6bb5\u4ee3\u7801\uff1a"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-java",children:"\t@Override\n\tpublic void setBeanFactory(BeanFactory beanFactory) {\n\t\tsuper.setBeanFactory(beanFactory);\n\n\t\tAsyncAnnotationAdvisor advisor = new AsyncAnnotationAdvisor(this.executor, this.exceptionHandler);\n\t\tif (this.asyncAnnotationType != null) {\n\t\t\tadvisor.setAsyncAnnotationType(this.asyncAnnotationType);\n\t\t}\n\t\tadvisor.setBeanFactory(beanFactory);\n\t\tthis.advisor = advisor;\n\t}\n\n"})}),"\n",(0,s.jsxs)(t.p,{children:["\u521b\u5efa\u4e00\u4e2a ",(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"AsyncAnnotationAdvisor"})}),"  \u3002\u770b\u4e00\u4e0b\u4f7f\u7528\u7684\u6784\u9020\u51fd\u6570\uff1a"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-java",children:'public class AsyncAnnotationAdvisor extends AbstractPointcutAdvisor implements BeanFactoryAware {\n\n\tprivate Advice advice;\n\n\tprivate Pointcut pointcut;\n    \n    //\u7701\u7565\u4e86\u90e8\u5206\u4ee3\u7801\n    \n    public AsyncAnnotationAdvisor(\n\t\t\t@Nullable Supplier<Executor> executor, @Nullable Supplier<AsyncUncaughtExceptionHandler> exceptionHandler) {\n\n\t\tSet<Class<? extends Annotation>> asyncAnnotationTypes = new LinkedHashSet<>(2);\n\t\tasyncAnnotationTypes.add(Async.class);\n\t\ttry {\n\t\t\tasyncAnnotationTypes.add((Class<? extends Annotation>)\n\t\t\t\t\tClassUtils.forName("javax.ejb.Asynchronous", AsyncAnnotationAdvisor.class.getClassLoader()));\n\t\t}\n\t\tcatch (ClassNotFoundException ex) {\n\t\t\t// If EJB 3.1 API not present, simply ignore.\n\t\t}\n\t\tthis.advice = buildAdvice(executor, exceptionHandler);\n\t\tthis.pointcut = buildPointcut(asyncAnnotationTypes);\n\t}\n\n}\n'})}),"\n",(0,s.jsx)(t.p,{children:"\u4ece\u4ee3\u7801\u53ef\u4ee5\u770b\u51fa\u6765\u6709\u4e24\u4e2a\u5c5e\u6027 Advice\u548cPointcut\u4e24\u4e2a\u5c5e\u6027\u52a0\u4e0a\u7c7b\u672c\u8eab\u5c31\u662f AOP\u7684\u4e09\u5927\u6807\u51c6\u7ec4\u4ef6\u3002"}),"\n",(0,s.jsx)(t.p,{children:"\u8bbe\u7f6e\u5f02\u6b65Spring\u5b9a\u4e49\u6ce8\u89e3@Async\u548cjavax.ejb.Asynchronous\u6ce8\u89e3\u3002"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"buildAdvice"})})," \u7528\u6765\u521b\u5efa ",(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"Advice"})})," :"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-java",children:"\tprotected Advice buildAdvice(\n\t\t\t@Nullable Supplier<Executor> executor, @Nullable Supplier<AsyncUncaughtExceptionHandler> exceptionHandler) {\n\n\t\tAnnotationAsyncExecutionInterceptor interceptor = new AnnotationAsyncExecutionInterceptor(null);\n\t\tinterceptor.configure(executor, exceptionHandler);\n\t\treturn interceptor;\n\t}\n"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"buildPointcut"})})," \u6765\u521b\u5efa ",(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"Pointcut"})})," :"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-java",children:"\tprotected Pointcut buildPointcut(Set<Class<? extends Annotation>> asyncAnnotationTypes) {\n\t\tComposablePointcut result = null;\n\t\tfor (Class<? extends Annotation> asyncAnnotationType : asyncAnnotationTypes) {\n            //\u521b\u5efa\u7c7b\u7684Pointcut\n\t\t\tPointcut cpc = new AnnotationMatchingPointcut(asyncAnnotationType, true);\n            //\u521b\u5efa\u65b9\u6cd5\u7684Pointcut\n\t\t\tPointcut mpc = new AnnotationMatchingPointcut(null, asyncAnnotationType, true);\n\t\t\tif (result == null) {\n\t\t\t\tresult = new ComposablePointcut(cpc);\n\t\t\t}\n\t\t\telse {\n\t\t\t\tresult.union(cpc);\n\t\t\t}\n\t\t\tresult = result.union(mpc);\n\t\t}\n\t\treturn (result != null ? result : Pointcut.TRUE);\n\t}\n"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"Pointcut"})})," \u5206\u6210\u4e24\u7c7b\uff1a"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"@Async\u653e\u5728\u7c7b\u4e0a\u9762"}),"\n",(0,s.jsx)(t.li,{children:"@Async\u653e\u5728\u65b9\u6cd5\u4e0a\u9762"}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["\u521b\u5efa\u5b8c\u6210 ",(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"AsyncAnnotationAdvisor"})})," \u540e\u7136\u540e\u8bbe\u7f6e\u81ea\u5b9a\u4e49\u7684\u5f02\u6b65\u6ce8\u89e3\u548c\u521b\u5efa ",(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"Pointcut"})})]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-java",children:"public void setAsyncAnnotationType(Class<? extends Annotation> asyncAnnotationType) {\n   Assert.notNull(asyncAnnotationType, \"'asyncAnnotationType' must not be null\");\n   Set<Class<? extends Annotation>> asyncAnnotationTypes = new HashSet<>();\n   asyncAnnotationTypes.add(asyncAnnotationType);\n   this.pointcut = buildPointcut(asyncAnnotationTypes);\n}\n"})}),"\n",(0,s.jsx)(t.p,{children:"\u5230\u8fd9\u91cc\u57fa\u672c\u4e0a\u5c31\u5b8c\u6210Advisor\u7684\u521b\u5efa\u3002\u4e0b\u9762\u5c31\u662f\u770b\u5982\u4f55\u521b\u5efa\u4ee3\u7406\u7c7b\u3002"}),"\n",(0,s.jsx)(t.h4,{id:"25--abstractadvisingbeanpostprocessorpostprocessafterinitialization\u521b\u5efa\u4ee3\u7406\u7c7b",children:"2.5  AbstractAdvisingBeanPostProcessor#postProcessAfterInitialization\u521b\u5efa\u4ee3\u7406\u7c7b"}),"\n",(0,s.jsxs)(t.p,{children:["\u548c\u524d\u9762\u7684 ",(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"@EnableAspectJAutoProxy"})})," \u6ce8\u89e3\u4e00\u6837\u90fd\u662f\u901a\u8fc7 ",(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"postProcessAfterInitialization"})})," \u65b9\u6cd5\u6765\u5b9e\u73b0\u4ee3\u7406\u7c7b\uff1a"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-java",children:"\t@Override\n\tpublic Object postProcessAfterInitialization(Object bean, String beanName) {\n        \n\t\tif (this.advisor == null || bean instanceof AopInfrastructureBean) {\n\t\t\t// Ignore AOP infrastructure such as scoped proxies.\n\t\t\treturn bean;\n\t\t}\n\n        //\u5224\u65ad\u662f\u5426\u7ee7\u627f\u4e86Advised\u63a5\u53e3\n\t\tif (bean instanceof Advised) {\n\t\t\tAdvised advised = (Advised) bean;\n\t\t\tif (!advised.isFrozen() && isEligible(AopUtils.getTargetClass(bean))) {\n\t\t\t\t// Add our local Advisor to the existing proxy's Advisor chain...\n\t\t\t\tif (this.beforeExistingAdvisors) {\n\t\t\t\t\tadvised.addAdvisor(0, this.advisor);\n\t\t\t\t}\n\t\t\t\telse {\n\t\t\t\t\tadvised.addAdvisor(this.advisor);\n\t\t\t\t}\n\t\t\t\treturn bean;\n\t\t\t}\n\t\t}\n\t\t\n        //\u5224\u65ad\u662fbean\u662f\u5426\u7b26\u5408\u6761\u4ef6\n\t\tif (isEligible(bean, beanName)) {\n\t\t\tProxyFactory proxyFactory = prepareProxyFactory(bean, beanName);\n\t\t\tif (!proxyFactory.isProxyTargetClass()) {\n\t\t\t\tevaluateProxyInterfaces(bean.getClass(), proxyFactory);\n\t\t\t}\n\t\t\tproxyFactory.addAdvisor(this.advisor);\n\t\t\tcustomizeProxyFactory(proxyFactory);\n\n\t\t\t// Use original ClassLoader if bean class not locally loaded in overriding class loader\n\t\t\tClassLoader classLoader = getProxyClassLoader();\n\t\t\tif (classLoader instanceof SmartClassLoader && classLoader != bean.getClass().getClassLoader()) {\n\t\t\t\tclassLoader = ((SmartClassLoader) classLoader).getOriginalClassLoader();\n\t\t\t}\n\t\t\treturn proxyFactory.getProxy(classLoader);\n\t\t}\n\n\t\t// No proxy needed.\n\t\treturn bean;\n\t}\n"})}),"\n",(0,s.jsx)(t.p,{children:"\u4e0a\u9762\u6709\u4e24\u4e2a\u5224\u65ad\uff1a"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\u5224\u65ad\u662f\u5426\u662f ",(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"Advised"})})," \u7684\u5b9e\u4f8b\u5982\u679c\u662f\u5e76\u4e14\u6ca1\u6709\u51bb\u7ed3\u5e76\u4e14\u7b26\u5408\u6761\u4ef6\u7684\u76ee\u6807\u7c7b\u90a3\u4e48\u5c06Advisor\u6dfb\u52a0\u5230 Adviced\u7c7b"]}),"\n",(0,s.jsx)(t.li,{children:"\u5982\u679c\u662f\u7b26\u5408\u6761\u4ef6\u7684\u7c7b\uff08\u7b26\u5408\u6761\u4ef6\uff1a\u88ab@Async\u548c\u914d\u7f6e\u5728 @EnableAsync \u7684 annotation \u5c5e\u6027\u4e2d\u7684\u6ce8\u89e3\uff09"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"\u8fd9\u91cc\u5c31\u5b8c\u6210\u4ee3\u7406\u7c7b\u751f\u6210\u3002"}),"\n",(0,s.jsx)(t.h4,{id:"26-\u5f02\u6b65\u65b9\u6cd5\u5982\u4f55\u6267\u884c",children:"2.6 \u5f02\u6b65\u65b9\u6cd5\u5982\u4f55\u6267\u884c"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://raw.githubusercontent.com/mxsm/picture/main/spring/aop/image-20211225182531669.png",alt:"image-20211225182531669"})}),"\n",(0,s.jsxs)(t.p,{children:["\u5982\u4e0a\u56fe\u7684\u7c7b\u5173\u7cfb\u56fe\uff0c",(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"AsyncExecutionInterceptor"})})," \u5b9e\u73b0\u4e86  ",(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"MethodInterceptor#invoke"})})," \u65b9\u6cd5\u3002"]}),"\n",(0,s.jsx)(t.p,{children:"\u4e0b\u9762\u6765\u770b\u4e00\u4e0b\u8fd9\u4e2a\u5b9e\u73b0\u65b9\u6cd5\u7684\u4ee3\u7801\uff08AsyncExecutionInterceptor#invoke\uff09\uff1a"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-java",children:'\tpublic Object invoke(final MethodInvocation invocation) throws Throwable {\n\t\tClass<?> targetClass = (invocation.getThis() != null ? AopUtils.getTargetClass(invocation.getThis()) : null);\n\t\tMethod specificMethod = ClassUtils.getMostSpecificMethod(invocation.getMethod(), targetClass);\n\t\tfinal Method userDeclaredMethod = BridgeMethodResolver.findBridgedMethod(specificMethod);\n\n\t\tAsyncTaskExecutor executor = determineAsyncExecutor(userDeclaredMethod);\n\t\tif (executor == null) {\n\t\t\tthrow new IllegalStateException(\n\t\t\t\t\t"No executor specified and no default executor set on AsyncExecutionInterceptor either");\n\t\t}\n\n\t\tCallable<Object> task = () -> {\n\t\t\ttry {\n\t\t\t\tObject result = invocation.proceed();\n\t\t\t\tif (result instanceof Future) {\n\t\t\t\t\treturn ((Future<?>) result).get();\n\t\t\t\t}\n\t\t\t}\n\t\t\tcatch (ExecutionException ex) {\n\t\t\t\thandleError(ex.getCause(), userDeclaredMethod, invocation.getArguments());\n\t\t\t}\n\t\t\tcatch (Throwable ex) {\n\t\t\t\thandleError(ex, userDeclaredMethod, invocation.getArguments());\n\t\t\t}\n\t\t\treturn null;\n\t\t};\n\n\t\treturn doSubmit(task, executor, invocation.getMethod().getReturnType());\n\t}\n'})}),"\n",(0,s.jsx)(t.p,{children:"\u4ece\u4ee3\u7801\u53ef\u4ee5\u770b\u51fa\u6765\u6709\u8fd9\u6837\u51e0\u4e2a\u6b65\u9aa4"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"\u6839\u636e\u6267\u884c\u7684\u65b9\u6cd5\u7684\u5177\u4f53\u914d\u7f6e\u6765\u51b3\u5b9a\u5230\u5e95\u4f7f\u7528\u54ea\u4e2a\u7ebf\u7a0b\u6c60"}),"\n",(0,s.jsx)(t.li,{children:"\u6784\u5efa Callable \u4efb\u52a1"}),"\n",(0,s.jsx)(t.li,{children:"\u63d0\u4ea4\u4efb\u52a1\u7ed9\u7ebf\u7a0b\u6267\u884c"}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"3-\u603b\u7ed3",children:"3. \u603b\u7ed3"}),"\n",(0,s.jsx)(t.p,{children:"\u5bf9\u4e8eSpring\u5f02\u6b65\u6765\u8bf4\uff0c\u603b\u4f53\u7684\u539f\u7406\u8fd8\u662f\u5229\u7528Spring AOP\u4f5c\u4e3a\u57fa\u7840\u6765\u5b9e\u73b0\u3002"})]})}function p(n={}){const{wrapper:t}={...(0,o.R)(),...n.components};return t?(0,s.jsx)(t,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},8453:(n,t,e)=>{e.d(t,{R:()=>r,x:()=>a});var s=e(6540);const o={},i=s.createContext(o);function r(n){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function a(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:r(n.components),s.createElement(i.Provider,{value:t},n.children)}}}]);