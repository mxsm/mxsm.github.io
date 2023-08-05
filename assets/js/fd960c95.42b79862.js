"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[6973],{3905:(n,e,t)=>{t.d(e,{Zo:()=>c,kt:()=>u});var r=t(7294);function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function a(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function s(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var p=r.createContext({}),l=function(n){var e=r.useContext(p),t=e;return n&&(t="function"==typeof n?n(e):a(a({},e),n)),t},c=function(n){var e=l(n.components);return r.createElement(p.Provider,{value:e},n.children)},g="mdxType",m={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},v=r.forwardRef((function(n,e){var t=n.components,i=n.mdxType,o=n.originalType,p=n.parentName,c=s(n,["components","mdxType","originalType","parentName"]),g=l(t),v=i,u=g["".concat(p,".").concat(v)]||g[v]||m[v]||o;return t?r.createElement(u,a(a({ref:e},c),{},{components:t})):r.createElement(u,a({ref:e},c))}));function u(n,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var o=t.length,a=new Array(o);a[0]=v;var s={};for(var p in e)hasOwnProperty.call(e,p)&&(s[p]=e[p]);s.originalType=n,s[g]="string"==typeof n?n:i,a[1]=s;for(var l=2;l<o;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}v.displayName="MDXCreateElement"},4602:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>p,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=t(7462),i=(t(7294),t(3905));const o={title:"SpringBoot\u6e90\u7801\u89e3\u6790\u4e4bspring.factories\u914d\u7f6e-EnvironmentPostProcessor",linkTiletitle:"SpringBoot\u6e90\u7801\u89e3\u6790\u4e4bspring.factories\u914d\u7f6e-EnvironmentPostProcessor",date:new Date("2020-01-15T00:00:00.000Z")},a=void 0,s={unversionedId:"spring/spring-boot/core-source-analysis/springboot-EnvironmentPostProcessor",id:"spring/spring-boot/core-source-analysis/springboot-EnvironmentPostProcessor",title:"SpringBoot\u6e90\u7801\u89e3\u6790\u4e4bspring.factories\u914d\u7f6e-EnvironmentPostProcessor",description:"EnvironmentPostProcessor\u7684\u4f5c\u7528",source:"@site/docs/spring/spring-boot/core-source-analysis/springboot-EnvironmentPostProcessor.md",sourceDirName:"spring/spring-boot/core-source-analysis",slug:"/spring/spring-boot/core-source-analysis/springboot-EnvironmentPostProcessor",permalink:"/docs/spring/spring-boot/core-source-analysis/springboot-EnvironmentPostProcessor",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/spring/spring-boot/core-source-analysis/springboot-EnvironmentPostProcessor.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1691228615,formattedLastUpdatedAt:"Aug 5, 2023",frontMatter:{title:"SpringBoot\u6e90\u7801\u89e3\u6790\u4e4bspring.factories\u914d\u7f6e-EnvironmentPostProcessor",linkTiletitle:"SpringBoot\u6e90\u7801\u89e3\u6790\u4e4bspring.factories\u914d\u7f6e-EnvironmentPostProcessor",date:"2020-01-15T00:00:00.000Z"},sidebar:"springboot",previous:{title:"SpringBoot\u6e90\u7801\u89e3\u6790\u4e4bConfigurationProperties\u539f\u7406",permalink:"/docs/spring/spring-boot/core-source-analysis/springboot-ConfigurationProperties"},next:{title:"SpringBoot\u6e90\u7801\u89e3\u6790\u4e4bautoconfigure",permalink:"/docs/spring/spring-boot/core-source-analysis/springboot-autoconfigure"}},p={},l=[{value:"EnvironmentPostProcessor\u7684\u4f5c\u7528",id:"environmentpostprocessor\u7684\u4f5c\u7528",level:3},{value:"EnvironmentPostProcessor\u5728SpringBoot(v2.2.2)\u6e90\u7801\u5206\u6790",id:"environmentpostprocessor\u5728springbootv222\u6e90\u7801\u5206\u6790",level:3},{value:"\u5982\u4f55\u4ecespring.factories\u52a0\u8f7d",id:"\u5982\u4f55\u4ecespringfactories\u52a0\u8f7d",level:4},{value:"EnvironmentPostProcessor\u5982\u4f55\u5904\u7406\u6570\u636e",id:"environmentpostprocessor\u5982\u4f55\u5904\u7406\u6570\u636e",level:4},{value:"ConfigFileApplicationListener\u5982\u4f55\u52a0\u8f7d",id:"configfileapplicationlistener\u5982\u4f55\u52a0\u8f7d",level:4},{value:"\u81ea\u5b9a\u4e49\u6b65\u9aa4",id:"\u81ea\u5b9a\u4e49\u6b65\u9aa4",level:3},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:3}],c={toc:l},g="wrapper";function m(n){let{components:e,...t}=n;return(0,i.kt)(g,(0,r.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"environmentpostprocessor\u7684\u4f5c\u7528"},"EnvironmentPostProcessor\u7684\u4f5c\u7528"),(0,i.kt)("p",null,"SpringBoot\u652f\u6301\u52a8\u6001\u7684\u8bfb\u53d6\u6587\u4ef6\uff0c\u7559\u4e0b\u7684\u6269\u5c55\u63a5 ",(0,i.kt)("strong",{parentName:"p"},"org.springframework.boot.env.EnvironmentPostProcessor")," \u3002\u8fd9\u4e2a\u63a5\u53e3\u662fspring\u5305\u4e0b\u7684\uff0c\u4f7f\u7528\u8fd9\u4e2a\u8fdb\u884c\u914d\u7f6e\u6587\u4ef6\u7684\u96c6\u4e2d\u7ba1\u7406\uff0c\u800c\u4e0d\u9700\u8981\u6bcf\u4e2a\u9879\u76ee\u90fd\u53bb\u914d\u7f6e\u914d\u7f6e\u6587\u4ef6\u3002\u8fd9\u79cd\u65b9\u6cd5\u4e5f\u662fspringboot\u6846\u67b6\u7559\u4e0b\u7684\u4e00\u4e2a\u6269\u5c55\uff08\u53ef\u4ee5\u81ea\u5df1\u53bb\u6269\u5c55\uff09\uff0c\u4e0b\u9762\u770b\u4e00\u4e0b\u6e90\u7801\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"@FunctionalInterface\npublic interface EnvironmentPostProcessor {\n    void postProcessEnvironment(ConfigurableEnvironment environment, SpringApplication application);\n\n}\n")),(0,i.kt)("p",null,"\u6e90\u7801\u5f88\u7b80\u5355\u5c31\u4e00\u4e2a\u65b9\u6cd5\u3002"),(0,i.kt)("h3",{id:"environmentpostprocessor\u5728springbootv222\u6e90\u7801\u5206\u6790"},"EnvironmentPostProcessor\u5728SpringBoot(v2.2.2)\u6e90\u7801\u5206\u6790"),(0,i.kt)("p",null,"\u6e90\u7801\u5206\u6790\u4e3b\u8981\u5206\u4e3a\u4ee5\u4e0b\u51e0\u4e2a\u6b65\u9aa4\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u5982\u4f55\u4ecespring.factories\u52a0\u8f7d")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"EnvironmentPostProcessor\u5982\u4f55\u5904\u7406\u6570\u636e"))),(0,i.kt)("h4",{id:"\u5982\u4f55\u4ecespringfactories\u52a0\u8f7d"},"\u5982\u4f55\u4ecespring.factories\u52a0\u8f7d"),(0,i.kt)("p",null,"Spring\u6846\u67b6\u52a0\u8f7d ",(0,i.kt)("strong",{parentName:"p"},"spring.factories")," \u91cc\u9762\u7684\u6570\u636e\u4e3b\u8981\u662f\u901a\u8fc7 ",(0,i.kt)("strong",{parentName:"p"},"SpringFactoriesLoader")," \u6765\u8fdb\u884c\u52a0\u8f7d\u7684\uff0c\u90a3\u4e48\u6211\u4eec\u6765\u770b\u4e00\u4e0bSpringBoot\u4e2d\u5982\u4f55\u52a0\u8f7dEnvironmentPostProcessor\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public class ConfigFileApplicationListener implements EnvironmentPostProcessor, SmartApplicationListener, Ordered {\n    //\u7701\u7565\u4ee3\u7801\n    List<EnvironmentPostProcessor> loadPostProcessors() {\n        return SpringFactoriesLoader.loadFactories(EnvironmentPostProcessor.class, getClass().getClassLoader());\n    }\n}\n")),(0,i.kt)("p",null,"\u901a\u8fc7\u7814\u7a76\u4ee3\u7801\u53d1\u73b0\uff0c\u4e3b\u8981\u662f\u901a\u8fc7 ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"ConfigFileApplicationListener"))," \u76d1\u542c\u5668\u4e2d\u7684 ",(0,i.kt)("strong",{parentName:"p"},"loadPostProcessors")," \u65b9\u6cd5\u6765\u52a0\u8f7d\u3002"),(0,i.kt)("h4",{id:"environmentpostprocessor\u5982\u4f55\u5904\u7406\u6570\u636e"},"EnvironmentPostProcessor\u5982\u4f55\u5904\u7406\u6570\u636e"),(0,i.kt)("p",null,"\u901a\u8fc7\u4e0a\u9762\u7684\u53ef\u4ee5\u770b\u51fa\u6765\u4e3b\u8981\u662f\u901a\u8fc7 ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"ConfigFileApplicationListener")),"  \u6765\u8fdb\u884c\u52a0\u8f7d\u7684\uff0c\u90a3\u4e48\u63a5\u7740\u6765\u770b\u4e00\u4e0b\u5982\u4f55\u5904\u7406\u6570\u636e\u3002\u901a\u8fc7\u4ee3\u7801\u53cd\u63a8\u7684\u65b9\u5f0f\u6765\u8fdb\u884c\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public class ConfigFileApplicationListener implements EnvironmentPostProcessor, SmartApplicationListener, Ordered {\n    //\u7701\u7565\u4ee3\u7801\n    //\u8bf4\u660e\uff1a\u4ece\u4ee3\u7801\u53ef\u4ee5\u770b\u51fa\u6765\u5b9e\u73b0\u4e86EnvironmentPostProcessor\u548cSmartApplicationListener\u76d1\u542c\u5668\n}\n")),(0,i.kt)("p",null,"\u4e0b\u9762\u6765\u770b\u4e00\u4e0b ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"loadPostProcessors"))," \u65b9\u6cd5\u5728 ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"onApplicationEnvironmentPreparedEvent"))," \u4e2d\u8c03\u7528\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"private void onApplicationEnvironmentPreparedEvent(ApplicationEnvironmentPreparedEvent event) {\n        //\u4ecespring.factories\u52a0\u8f7dEnvironmentPostProcessor\n        List<EnvironmentPostProcessor> postProcessors = loadPostProcessors();\n        //\u6dfb\u52a0\u5f53\u524d\u7684\u7c7b\u5b9e\u4f8b\n        postProcessors.add(this);\n        //\u5bf9EnvironmentPostProcessor\u8fdb\u884c\u6392\u5e8f--\u5982\u679c\u4f7f\u7528\u4e86Order\n        AnnotationAwareOrderComparator.sort(postProcessors);\n        for (EnvironmentPostProcessor postProcessor : postProcessors) {\n            //\u6570\u636e\u5904\u7406\n            postProcessor.postProcessEnvironment(event.getEnvironment(), event.getSpringApplication());\n        }\n    }\n")),(0,i.kt)("p",null,"\u901a\u8fc7\u4e0a\u9762\u7684\u4ee3\u7801\u53ef\u4ee5\u770b\u51fa\u6765\uff0c\u83b7\u53d6\u4e86spring.factories\u52a0\u8f7dEnvironmentPostProcessor\u7684\u5b9e\u73b0\uff0c\u6267\u884c\u76f8\u5173\u7684EnvironmentPostProcessor\u7684\u65b9\u6cd5 ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"postProcessEnvironment"))," \u3002"),(0,i.kt)("p",null,"\u90a3\u4e48\u5206\u6790\u4e86\u5b8c\u6210\u4e86\u5982\u4f55\u8fdb\u884c\u8c03\u7528 ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"EnvironmentPostProcessor"))," \u3002\u90a3\u8c03\u7528\u5982\u4f55\u89e6\u53d1\u7684\uff0c\u524d\u9762\u53ef\u4ee5\u770b\u51fa\u6765 ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"ConfigFileApplicationListener"))," \u662f\u76d1\u542c\u5668\u3002 \u4e0b\u9762\u6765\u770b\u4e00\u4e0b\u4ee3\u7801\u5206\u6790\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"    @Override\n    public void onApplicationEvent(ApplicationEvent event) {\n        if (event instanceof ApplicationEnvironmentPreparedEvent) {\n            onApplicationEnvironmentPreparedEvent((ApplicationEnvironmentPreparedEvent) event);\n        }\n        if (event instanceof ApplicationPreparedEvent) {\n            onApplicationPreparedEvent(event);\n        }\n    }\n")),(0,i.kt)("p",null,"\u4ece\u4e0a\u9762\u7684\u4ee3\u7801\u53ef\u4ee5\u770b\u51fa\u6765\uff0c",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"onApplicationEvent"))," \u4e2d\u8c03\u7528\u4e86\u79c1\u6709\u65b9\u6cd5 ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"onApplicationEnvironmentPreparedEvent"))," \u3002\u901a\u8fc7\u5224\u65ad ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"ApplicationEvent"))," \u662f\u5426\u4e3a ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"ApplicationEnvironmentPreparedEvent")),"  \u53bb\u8c03\u7528\u65b9\u6cd5 ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"onApplicationEnvironmentPreparedEvent"))," \u3002"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u5206\u6790\u5230\u8fd9\u6765\u5c31\u53ef\u4ee5\u660e\u767d\u4e86\uff0cEnvironmentPostProcessor\u4e3b\u8981\u662f\u901a\u8fc7Spring\u7684\u4e8b\u4ef6\u9a71\u52a8\u6765\u51fa\u53d1\u8c03\u7528\u7684\u3002")),(0,i.kt)("h4",{id:"configfileapplicationlistener\u5982\u4f55\u52a0\u8f7d"},"ConfigFileApplicationListener\u5982\u4f55\u52a0\u8f7d"),(0,i.kt)("p",null,"\u5728spring-boot\u4ee3\u7801\u6a21\u5757\u4e2d\uff0c\u53ef\u4ee5\u770b\u4e00\u4e0bspring.factories\u6587\u4ef6\u4e2dorg.springframework.context.ApplicationListener\u9009\u9879\u3002\u63a5\u4e0b\u6765\u5c31\u770b\u770bSpringBoot\u5982\u4f55\u52a0\u8f7d ApplicationListener\u3002\u901a\u8fc7\u4ee3\u7801\u5206\u6790\u53ef\u770b\u4e00\u4e0bSpringBoot\u8fd0\u884c\u7684\u542f\u52a8\u7c7b ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"SpringApplication"))," \uff0cSpring\u7684\u6784\u9020\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'    public SpringApplication(ResourceLoader resourceLoader, Class<?>... primarySources) {\n        this.resourceLoader = resourceLoader;\n        Assert.notNull(primarySources, "PrimarySources must not be null");\n        this.primarySources = new LinkedHashSet<>(Arrays.asList(primarySources));\n        this.webApplicationType = WebApplicationType.deduceFromClasspath();\n        //\u52a0\u8f7dspring.factories\u4e2d\u7684ApplicationContextInitializer\n        setInitializers((Collection) getSpringFactoriesInstances(ApplicationContextInitializer.class));\n        ////\u52a0\u8f7dspring.factories\u4e2d\u7684ApplicationListener\n        setListeners((Collection) getSpringFactoriesInstances(ApplicationListener.class));\n        this.mainApplicationClass = deduceMainApplicationClass();\n    }\n')),(0,i.kt)("p",null,"\u901a\u8fc7\u4e0a\u9762\u53ef\u4ee5\u770b\u51fa\u6765\u901a\u8fc7 ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"SpringApplication#getSpringFactoriesInstances"))," \u65b9\u6cd5\u6765\u83b7\u53d6\u5b9e\u4f8b\u3002\u8bbe\u7f6e\u5230\u79c1\u6709\u53d8\u91cf\uff1a",(0,i.kt)("strong",{parentName:"p"},"private List<ApplicationListener<?>> listeners;")," \u5206\u6790\u5230\u8fd9\u91cc\u5df2\u7ecf\u770b\u5230\u4e86\u628a ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"ApplicationListener"))," \u76f8\u5173\u5b9e\u73b0\u5b9e\u4f8b\u52a0\u8f7d\u3002\u90a3\u4e48\u600e\u4e48\u6837\u8c03\u7528\u5462\uff1f"),(0,i.kt)("p",null,"\u5728 ",(0,i.kt)("strong",{parentName:"p"},"SpringApplication#run")," \u65b9\u6cd5\uff0c\u4e2d\u662fSpringBoot\u8fd0\u884c\u7684\u5173\u952e\u65b9\u6cd5\uff0c\u5728\u8fd9\u4e2a\u65b9\u6cd5\u4e2d\u6709\u4e00\u4e2a\u4e00\u6bb5\u4ee3\u7801"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"SpringApplicationRunListeners listeners = getRunListeners(args);\n\nprivate SpringApplicationRunListeners getRunListeners(String[] args) {\n        Class<?>[] types = new Class<?>[] { SpringApplication.class, String[].class };\n        return new SpringApplicationRunListeners(logger,\n                getSpringFactoriesInstances(SpringApplicationRunListener.class, types, this, args));\n    }\n")),(0,i.kt)("p",null,"\u901a\u8fc7\u4ee3\u7801\u53ef\u4ee5\u53d1\u73b0\u53c8\u4ece ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"spring.factories"))," \u4e2d\u52a0\u8f7d\u4e86 ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"SpringApplicationRunListener"))," \u770b\u4e00\u4e0b\u6587\u4ef6\u4e2d\u914d\u7f6e\u4e86\u54ea\u4e9b\u5b9e\u73b0\u7c7b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"# Run Listeners\norg.springframework.boot.SpringApplicationRunListener=\\\norg.springframework.boot.context.event.EventPublishingRunListener\n")),(0,i.kt)("p",null,"\u53ea\u6709\u4e00\u4e2a ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"EventPublishingRunListener"))," \u3002\u4e0b\u9762\u6765\u770b\u4e00\u4e0b\u8fd9\u4e2a\u7c7b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'public class EventPublishingRunListener implements SpringApplicationRunListener, Ordered {\n\n    private final SpringApplication application;\n\n    private final String[] args;\n\n    private final SimpleApplicationEventMulticaster initialMulticaster;\n\n    public EventPublishingRunListener(SpringApplication application, String[] args) {\n        this.application = application;\n        this.args = args;\n        this.initialMulticaster = new SimpleApplicationEventMulticaster();\n        for (ApplicationListener<?> listener : application.getListeners()) {\n            this.initialMulticaster.addApplicationListener(listener);\n        }\n    }\n\n    @Override\n    public int getOrder() {\n        return 0;\n    }\n\n    @Override\n    public void starting() {\n        this.initialMulticaster.multicastEvent(new ApplicationStartingEvent(this.application, this.args));\n    }\n        @Override\n    public void environmentPrepared(ConfigurableEnvironment environment) {\n        this.initialMulticaster\n                .multicastEvent(new ApplicationEnvironmentPreparedEvent(this.application, this.args, environment));\n    }\n\n    @Override\n    public void contextPrepared(ConfigurableApplicationContext context) {\n        this.initialMulticaster\n                .multicastEvent(new ApplicationContextInitializedEvent(this.application, this.args, context));\n    }\n    \n    @Override\n    public void contextLoaded(ConfigurableApplicationContext context) {\n        for (ApplicationListener<?> listener : this.application.getListeners()) {\n            if (listener instanceof ApplicationContextAware) {\n                ((ApplicationContextAware) listener).setApplicationContext(context);\n            }\n            context.addApplicationListener(listener);\n        }\n        this.initialMulticaster.multicastEvent(new ApplicationPreparedEvent(this.application, this.args, context));\n    }\n\n    @Override\n    public void started(ConfigurableApplicationContext context) {\n        context.publishEvent(new ApplicationStartedEvent(this.application, this.args, context));\n    }\n\n    @Override\n    public void running(ConfigurableApplicationContext context) {\n        context.publishEvent(new ApplicationReadyEvent(this.application, this.args, context));\n    }\n\n    @Override\n    public void failed(ConfigurableApplicationContext context, Throwable exception) {\n        ApplicationFailedEvent event = new ApplicationFailedEvent(this.application, this.args, context, exception);\n        if (context != null && context.isActive()) {\n            // Listeners have been registered to the application context so we should\n            // use it at this point if we can\n            context.publishEvent(event);\n        }\n        else {\n            // An inactive context may not have a multicaster so we use our multicaster to\n            // call all of the context\'s listeners instead\n            if (context instanceof AbstractApplicationContext) {\n                for (ApplicationListener<?> listener : ((AbstractApplicationContext) context)\n                        .getApplicationListeners()) {\n                    this.initialMulticaster.addApplicationListener(listener);\n                }\n            }\n            this.initialMulticaster.setErrorHandler(new LoggingErrorHandler());\n            this.initialMulticaster.multicastEvent(event);\n        }\n    }\n\n    private static class LoggingErrorHandler implements ErrorHandler {\n\n        private static Log logger = LogFactory.getLog(EventPublishingRunListener.class);\n\n        @Override\n        public void handleError(Throwable throwable) {\n            logger.warn("Error calling ApplicationEventListener", throwable);\n        }\n\n    }\n\n}\n')),(0,i.kt)("p",null,"\u901a\u8fc7\u4e0a\u9762\u4ee3\u7801\u53ef\u4ee5\u53d1\u73b0\u4e3b\u8981\u662f\u53d1\u5e03Spring\u7684\u4e8b\u4ef6\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"ApplicationStartingEvent")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"ApplicationEnvironmentPreparedEvent")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"ApplicationContextInitializedEvent")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"ApplicationPreparedEvent")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"ApplicationStartedEvent")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"ApplicationReadyEvent")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"ApplicationFailedEvent"))),(0,i.kt)("p",null,"\u8fd9\u91cc\u9762\u4e3b\u8981\u662f\u4e03\u4e2a\u4e8b\u4ef6\uff0c\u5bf9\u5e94\u4e0d\u540c\u7684\u72b6\u6001\u3002\u901a\u8fc7\u53d1\u9001 ",(0,i.kt)("strong",{parentName:"p"},"ApplicationEnvironmentPreparedEvent")," \u3002\u901a\u8fc7\u52a0\u8f7d\u7ec4\u88c5\u4e3a ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"SpringApplicationRunListeners"))," \u3002\u6839\u636e\u4e0d\u540c\u7684\u72b6\u6001\u6765\u8c03\u7528 ",(0,i.kt)("strong",{parentName:"p"},"SpringApplicationRunListeners")," \u4e2d\u4e0d\u540c\u7684\u65b9\u6cd5\u3002"),(0,i.kt)("p",null,"\u6700\u540e\u6765\u770b\u4e00\u4e0b\u5728\u54ea\u91cc\u5e7f\u64ad\u53d1\u5e03 ",(0,i.kt)("strong",{parentName:"p"},"ApplicationEnvironmentPreparedEvent")," \u4e8b\u4ef6\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"ConfigurableEnvironment environment = prepareEnvironment(listeners, applicationArguments);\n\n    private ConfigurableEnvironment prepareEnvironment(SpringApplicationRunListeners listeners,\n            ApplicationArguments applicationArguments) {\n        // Create and configure the environment\n        ConfigurableEnvironment environment = getOrCreateEnvironment();\n        configureEnvironment(environment, applicationArguments.getSourceArgs());\n        ConfigurationPropertySources.attach(environment);\n        //\u8fd9\u91cc\u5c31\u662f\u53d1\u5e03 ApplicationEnvironmentPreparedEvent\n        listeners.environmentPrepared(environment);\n        bindToSpringApplication(environment);\n        if (!this.isCustomEnvironment) {\n            environment = new EnvironmentConverter(getClassLoader()).convertEnvironmentIfNecessary(environment,\n                    deduceEnvironmentClass());\n        }\n        ConfigurationPropertySources.attach(environment);\n        return environment;\n    }\n")),(0,i.kt)("p",null,"\u901a\u8fc7\u53d1\u5e03 ",(0,i.kt)("strong",{parentName:"p"},"listeners.environmentPrepared(environment);")," \u6700\u540e\u89e6\u53d1 ",(0,i.kt)("strong",{parentName:"p"},"EnvironmentPostProcessor#postProcessEnvironment")," \u7684\u65b9\u6cd5\u3002"),(0,i.kt)("h3",{id:"\u81ea\u5b9a\u4e49\u6b65\u9aa4"},"\u81ea\u5b9a\u4e49\u6b65\u9aa4"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"\u81ea\u5b9a\u4e49\u4e00\u4e2a\u7c7b\u5b9e\u73b0EnvironmentPostProcessor\u63a5\u53e3"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"\u5728\u8d44\u6e90\u6587\u4ef6 resources/META-INF\u4e0b\u9762\u521b\u5efa\u4e00\u4e2aspring.factories\u6587\u4ef6"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"spring.factories\u6587\u4ef6\u4e2d\u6dfb\u52a0\u5982\u4e0b")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"org.springframework.boot.env.EnvironmentPostProcessor=\\\n#\u81ea\u5b9a\u4e49\u7684\u7c7b(\u5305\u542b\u5305\u540d)\norg.springframework.boot.cloud.CloudFoundryVcapEnvironmentPostProcessor\n")),(0,i.kt)("p",{parentName:"li"},"\u5b98\u7f51\u7684\u8bf4\u660e\uff1a ",(0,i.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring-boot/docs/2.2.2.RELEASE/reference/html/howto.html#howto-customize-the-environment-or-application-context"},"EnvironmentPostProcessor")))),(0,i.kt)("h3",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"EnvironmentPostProcessor")," \u7684\u52a0\u8f7d\u548cSpring\u6846\u67b6\u7684\u52a0\u8f7d\u662f\u4e00\u6837\u7684\uff0c\u4f46\u662f\u5bf9\u4e8e\u65b9\u6cd5\u7684\u8c03\u7528\u662f\u901a\u8fc7 Spring\u7684\u4e8b\u4ef6\u53d1\u5e03\u6765\u89e6\u53d1 ",(0,i.kt)("strong",{parentName:"p"},"EnvironmentPostProcessor")," \u63a5\u53e3\u4e2d\u7684  ",(0,i.kt)("strong",{parentName:"p"},"postProcessEnvironment")," \u65b9\u6cd5\u3002"))}m.isMDXComponent=!0}}]);