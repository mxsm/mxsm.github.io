"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[710],{3905:(n,e,t)=>{t.d(e,{Zo:()=>c,kt:()=>d});var r=t(7294);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function p(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var l=r.createContext({}),s=function(n){var e=r.useContext(l),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},c=function(n){var e=s(n.components);return r.createElement(l.Provider,{value:e},n.children)},u="mdxType",g={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(n,e){var t=n.components,o=n.mdxType,a=n.originalType,l=n.parentName,c=p(n,["components","mdxType","originalType","parentName"]),u=s(t),m=o,d=u["".concat(l,".").concat(m)]||u[m]||g[m]||a;return t?r.createElement(d,i(i({ref:e},c),{},{components:t})):r.createElement(d,i({ref:e},c))}));function d(n,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var a=t.length,i=new Array(a);i[0]=m;var p={};for(var l in e)hasOwnProperty.call(e,l)&&(p[l]=e[l]);p.originalType=n,p[u]="string"==typeof n?n:o,i[1]=p;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1951:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>g,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var r=t(7462),o=(t(7294),t(3905));const a={title:"SpringBoot\u542f\u52a8\u5206\u6790",linkTitle:"SpringBoot\u542f\u52a8\u5206\u6790",date:new Date("2019-12-16T00:00:00.000Z"),weight:1},i=void 0,p={unversionedId:"spring/spring-boot/core-source-analysis/springboot-start",id:"spring/spring-boot/core-source-analysis/springboot-start",title:"SpringBoot\u542f\u52a8\u5206\u6790",description:"1. SpringBoot\u542f\u52a8\u6e90\u7801\u5206\u6790(V2.2.X)",source:"@site/docs/spring/spring-boot/core-source-analysis/springboot-start.md",sourceDirName:"spring/spring-boot/core-source-analysis",slug:"/spring/spring-boot/core-source-analysis/springboot-start",permalink:"/docs/spring/spring-boot/core-source-analysis/springboot-start",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/spring/spring-boot/core-source-analysis/springboot-start.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1682735967,formattedLastUpdatedAt:"Apr 29, 2023",frontMatter:{title:"SpringBoot\u542f\u52a8\u5206\u6790",linkTitle:"SpringBoot\u542f\u52a8\u5206\u6790",date:"2019-12-16T00:00:00.000Z",weight:1},sidebar:"springboot",previous:{title:"SpringBoot\u6e90\u7801\u89e3\u6790\u4e4bautoconfigure",permalink:"/docs/spring/spring-boot/core-source-analysis/springboot-autoconfigure"},next:{title:"SpringBoot\u6e90\u7801\u89e3\u6790\u4e4b-AutoConfigureBefore\u3001AutoConfigureOrder\u3001AutoConfigureAfter",permalink:"/docs/spring/spring-boot/annotation-source-analysis/springboot-AutoConfigureBefore-AutoConfigureOrder-AutoConfigureAfter"}},l={},s=[{value:"1. SpringBoot\u542f\u52a8\u6e90\u7801\u5206\u6790(V2.2.X)",id:"1-springboot\u542f\u52a8\u6e90\u7801\u5206\u6790v22x",level:3},{value:"1.1 SpringApplication",id:"11-springapplication",level:4},{value:"1.2 createApplicationContext\u5206\u6790",id:"12-createapplicationcontext\u5206\u6790",level:4},{value:"1.3 prepareContext\u5206\u6790",id:"13-preparecontext\u5206\u6790",level:4},{value:"1.4 refreshContext\u5206\u6790",id:"14-refreshcontext\u5206\u6790",level:4},{value:"2. SpringBoot\u7684\u542f\u52a8\u4f8b\u5b50",id:"2-springboot\u7684\u542f\u52a8\u4f8b\u5b50",level:3},{value:"3. \u603b\u7ed3",id:"3-\u603b\u7ed3",level:3}],c={toc:s},u="wrapper";function g(n){let{components:e,...t}=n;return(0,o.kt)(u,(0,r.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"1-springboot\u542f\u52a8\u6e90\u7801\u5206\u6790v22x"},"1. SpringBoot\u542f\u52a8\u6e90\u7801\u5206\u6790(V2.2.X)"),(0,o.kt)("h4",{id:"11-springapplication"},"1.1 SpringApplication"),(0,o.kt)("p",null,"SpringBoot\u542f\u52a8\u4e3b\u8981\u662f\u901a\u8fc7\u7c7b ",(0,o.kt)("strong",{parentName:"p"},"SpringApplication")," \u7684run\u65b9\u6cd5\u542f\u52a8\u7684"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"public ConfigurableApplicationContext run(String... args) {\n        StopWatch stopWatch = new StopWatch();\n        stopWatch.start();\n        ConfigurableApplicationContext context = null;\n        Collection<SpringBootExceptionReporter> exceptionReporters = new ArrayList<>();\n        configureHeadlessProperty();\n        SpringApplicationRunListeners listeners = getRunListeners(args);\n        listeners.starting();\n        try {\n            ApplicationArguments applicationArguments = new DefaultApplicationArguments(args);\n            ConfigurableEnvironment environment = prepareEnvironment(listeners, applicationArguments);\n            configureIgnoreBeanInfo(environment);\n            Banner printedBanner = printBanner(environment);\n            //\u521b\u5efaApplicationContext\n            context = createApplicationContext();\n            exceptionReporters = getSpringFactoriesInstances(SpringBootExceptionReporter.class,\n                    new Class[] { ConfigurableApplicationContext.class }, context);\n            //\u5237\u65b0\u4e0a\u4e0b\u6587\u7684\u524d\u671f\u51c6\u5907\u5de5\u4f5c\n            prepareContext(context, environment, listeners, applicationArguments, printedBanner);\n            refreshContext(context);\n            afterRefresh(context, applicationArguments);\n            stopWatch.stop();\n            if (this.logStartupInfo) {\n                new StartupInfoLogger(this.mainApplicationClass).logStarted(getApplicationLog(), stopWatch);\n            }\n            //\u542f\u52a8\u76d1\u542c\u5668\n            listeners.started(context);\n            //\u8c03\u7528ApplicationRunner\u548cCommandLineRunner \n            callRunners(context, applicationArguments);\n        }\n        catch (Throwable ex) {\n            handleRunFailure(context, ex, exceptionReporters, listeners);\n            throw new IllegalStateException(ex);\n        }\n\n        try {\n            listeners.running(context);\n        }\n        catch (Throwable ex) {\n            handleRunFailure(context, ex, exceptionReporters, null);\n            throw new IllegalStateException(ex);\n        }\n        return context;\n    }\n")),(0,o.kt)("p",null,"\u901a\u8fc7\u4e0a\u9762\u7684\u4ee3\u7801\u53ef\u4ee5\u770b\u51fa\u6765\u4e3b\u8981\u7684\u6b65\u9aa4\u6709\u4e09\u4e2a\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"\u521b\u5efa\u4e0a\u4e0b\u6587--createApplicationContext\u65b9\u6cd5")),(0,o.kt)("p",{parentName:"li"},"\u901a\u8fc7\u63a8\u65ad\u6765\u5224\u65ad\u662f\u521b\u5efa\u600e\u4e48\u6837\u7684ApplicationContext")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"\u5237\u65b0\u4e0a\u4e0b\u6587\u7684\u51c6\u5907\u5de5\u4f5c--prepareContext\u65b9\u6cd5")),(0,o.kt)("p",{parentName:"li"},"\u5904\u7406\u6dfb\u52a0\u4e00\u4e9bApplicationContext\u7684\u76f8\u5173\u53c2\u6570\uff0c\u548cSpringBoot\u7684\u542f\u52a8\u914d\u7f6e\u7c7b")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"\u5237\u65b0\u4e0a\u4e0b\u6587--refreshContext")),(0,o.kt)("p",{parentName:"li"},"Spring\u7684\u4e0a\u4e0b\u6587\u5237\u65b0"))),(0,o.kt)("p",null,"\u4e0b\u9762\u6765\u5177\u4f53\u5206\u6790\u4e00\u4e0b\u8fd9\u4e09\u4e2a\u65b9\u6cd5\u3002"),(0,o.kt)("h4",{id:"12-createapplicationcontext\u5206\u6790"},"1.2 createApplicationContext\u5206\u6790"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'    protected ConfigurableApplicationContext createApplicationContext() {\n        Class<?> contextClass = this.applicationContextClass;\n        if (contextClass == null) {\n            try {\n                switch (this.webApplicationType) {\n                case SERVLET:\n                    contextClass = Class.forName(DEFAULT_SERVLET_WEB_CONTEXT_CLASS);\n                    break;\n                case REACTIVE:\n                    contextClass = Class.forName(DEFAULT_REACTIVE_WEB_CONTEXT_CLASS);\n                    break;\n                default:\n                    contextClass = Class.forName(DEFAULT_CONTEXT_CLASS);\n                }\n            }\n            catch (ClassNotFoundException ex) {\n                throw new IllegalStateException(\n                        "Unable create a default ApplicationContext, please specify an ApplicationContextClass", ex);\n            }\n        }\n        return (ConfigurableApplicationContext) BeanUtils.instantiateClass(contextClass);\n    }\n')),(0,o.kt)("p",null,"\u4ece\u4e0a\u9762\u53ef\u4ee5\u770b\u51fa\u662f\u901a\u8fc7\u5224\u65adwebApplicationType\u8fd9\u4e2a\u53d8\u91cf\u6765\u52a0\u8f7d\u54ea\u4e2aApplicationContext\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"this.webApplicationType = WebApplicationType.deduceFromClasspath();\n")),(0,o.kt)("p",null,"\u901a\u8fc7\u8fd9\u4e2a\u6765\u8fdb\u884c\u63a8\u65ad\u3002"),(0,o.kt)("h4",{id:"13-preparecontext\u5206\u6790"},"1.3 prepareContext\u5206\u6790"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'    private void prepareContext(ConfigurableApplicationContext context, ConfigurableEnvironment environment,\n            SpringApplicationRunListeners listeners, ApplicationArguments applicationArguments, Banner printedBanner) {\n        \n        //\u7ed9Application\u8bbe\u7f6eenvironment\n        context.setEnvironment(environment);\n        //\u8bbe\u7f6eBeanName\u751f\u6210\u5668\u548c\u8d44\u6e90\u52a0\u8f7d\u5668\n        postProcessApplicationContext(context);\n        //\u521d\u59cb\u5316context\n        applyInitializers(context);\n        listeners.contextPrepared(context);\n        if (this.logStartupInfo) {\n            logStartupInfo(context.getParent() == null);\n            logStartupProfileInfo(context);\n        }\n        // Add boot specific singleton beans\n        ConfigurableListableBeanFactory beanFactory = context.getBeanFactory();\n        beanFactory.registerSingleton("springApplicationArguments", applicationArguments);\n        if (printedBanner != null) {\n            beanFactory.registerSingleton("springBootBanner", printedBanner);\n        }\n        if (beanFactory instanceof DefaultListableBeanFactory) {\n            ((DefaultListableBeanFactory) beanFactory)\n                    .setAllowBeanDefinitionOverriding(this.allowBeanDefinitionOverriding);\n        }\n        if (this.lazyInitialization) {\n            context.addBeanFactoryPostProcessor(new LazyInitializationBeanFactoryPostProcessor());\n        }\n        //\u52a0\u8f7d\u6240\u6709\u7684\u8d44\u6e90--\u8fd9\u4e2a\u65b9\u6cd5\u5f88\u5173\u952e\n        Set<Object> sources = getAllSources();\n        Assert.notEmpty(sources, "Sources must not be empty");\n        //\u52a0\u8f7dbean\u5230context\n        load(context, sources.toArray(new Object[0]));\n        listeners.contextLoaded(context);\n    }\n')),(0,o.kt)("p",null,"\u4e0a\u9762\u4ee3\u7801\u6700\u91cd\u8981\u7684\u4e24\u4e2a\u65b9\u6cd5\uff1a ",(0,o.kt)("strong",{parentName:"p"},"getAllSources")," \u548c ",(0,o.kt)("strong",{parentName:"p"},"load")," \u8fd9\u4e24\u4e2a\u65b9\u6cd5\u63ed\u793a\u4e86\u5982\u4f55SpringBoot\u8fdb\u884c\u542f\u52a8\u7684\u91cd\u8981\u7684\u4e24\u4e2a\u65b9\u6cd5\u3002"),(0,o.kt)("p",null,"\u9996\u5148\u770b\u4e00\u4e0b ",(0,o.kt)("strong",{parentName:"p"},"getAllSources")," \u65b9\u6cd5\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"    public Set<Object> getAllSources() {\n        Set<Object> allSources = new LinkedHashSet<>();\n        if (!CollectionUtils.isEmpty(this.primarySources)) {\n            allSources.addAll(this.primarySources);\n        }\n        if (!CollectionUtils.isEmpty(this.sources)) {\n            allSources.addAll(this.sources);\n        }\n        return Collections.unmodifiableSet(allSources);\n    }\n")),(0,o.kt)("p",null,"\u5bf9\u4e8e\u53d8\u91cf ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"this.primarySources"))," \u662f\u5728 ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"SpringApplication.run"))," \u65b9\u6cd5\u8bbe\u7f6e\u8fdb\u53bb\u7684\u3002"),(0,o.kt)("p",null,"\u518d\u6765\u770b\u4e00\u4e0b ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"load"))," \u65b9\u6cd5\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"    protected void load(ApplicationContext context, Object[] sources) {\n        //\u521b\u5efaBean\u5b9a\u4e49\u52a0\u8f7d\u5668--\u6dfb\u52a0\u8d44\u6e90\u914d\u7f6e\u7c7b\n        BeanDefinitionLoader loader = createBeanDefinitionLoader(getBeanDefinitionRegistry(context), sources);\n        if (this.beanNameGenerator != null) {\n            loader.setBeanNameGenerator(this.beanNameGenerator);\n        }\n        if (this.resourceLoader != null) {\n            loader.setResourceLoader(this.resourceLoader);\n        }\n        if (this.environment != null) {\n            loader.setEnvironment(this.environment);\n        }\n        loader.load();\n    }\n")),(0,o.kt)("p",null,"\u8fd9\u91cc\u5c31\u901a\u8fc7\u7c7b\u5b9a\u4e49\u52a0\u8f7d\u5668\u5c31\u80fd\u628a\u5b9a\u4e49\u7684\u7c7b\u52a0\u8f7d\u5230 ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"ApplicationContext"))," \u4e2d\u3002\u6240\u4ee5\u4e0d\u662f ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"SpringApplication.run"))," \u4e2d\u7684\u7c7b\uff0c\u4e0d\u4e00\u5b9a\u662f\u5e26\u6709 ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"main"))," \u65b9\u6cd5\u7684\u7c7b\u3002"),(0,o.kt)("h4",{id:"14-refreshcontext\u5206\u6790"},"1.4 refreshContext\u5206\u6790"),(0,o.kt)("p",null,"\u8fd9\u4e2a\u5c31\u662fspring freamwork \u7684\u4e0a\u4e0b\u6587\u5237\u65b0\u3002"),(0,o.kt)("h3",{id:"2-springboot\u7684\u542f\u52a8\u4f8b\u5b50"},"2. SpringBoot\u7684\u542f\u52a8\u4f8b\u5b50"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"package com.github.mxsm.config;\n\nimport org.springframework.boot.autoconfigure.SpringBootApplication;\n\n/**\n * @author mxsm\n * @Date 2019/11/24 11:52 description:\n */\n@SpringBootApplication\npublic class SpringBootStrap {\n\n}\n\n")),(0,o.kt)("p",null,"\u542f\u52a8\u7c7b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"package com.github.mxsm;\n\nimport com.github.mxsm.config.SpringBootStrap;\nimport org.springframework.boot.SpringApplication;\n\npublic class Application {\n\n    public static void main(String[] args) {\n        SpringApplication.run(SpringBootStrap.class,args);\n    }\n}\n\n")),(0,o.kt)("p",null,"\u8fd9\u6837\u4e5f\u53ef\u4ee5\u542f\u52a8SpringBoot"),(0,o.kt)("h3",{id:"3-\u603b\u7ed3"},"3. \u603b\u7ed3"),(0,o.kt)("p",null,"Spring Boot\u5176\u5b9e\u6574\u4f53\u5c31\u662f\u5c06Spring\u6846\u67b6\u505a\u4e86\u5c01\u88c5\uff0c\u5c06\u9700\u8981\u6211\u4eec\u624b\u52a8\u53bb\u5199\u7684\u914d\u7f6e\u4ee5\u53ca\u76f8\u5173\u7684"))}g.isMDXComponent=!0}}]);