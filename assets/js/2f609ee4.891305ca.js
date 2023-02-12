"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[1387],{3905:(n,e,t)=>{t.d(e,{Zo:()=>p,kt:()=>u});var a=t(7294);function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function r(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function s(n,e){if(null==n)return{};var t,a,i=function(n,e){if(null==n)return{};var t,a,i={},o=Object.keys(n);for(a=0;a<o.length;a++)t=o[a],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(a=0;a<o.length;a++)t=o[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var l=a.createContext({}),c=function(n){var e=a.useContext(l),t=e;return n&&(t="function"==typeof n?n(e):r(r({},e),n)),t},p=function(n){var e=c(n.components);return a.createElement(l.Provider,{value:e},n.children)},d="mdxType",g={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},f=a.forwardRef((function(n,e){var t=n.components,i=n.mdxType,o=n.originalType,l=n.parentName,p=s(n,["components","mdxType","originalType","parentName"]),d=c(t),f=i,u=d["".concat(l,".").concat(f)]||d[f]||g[f]||o;return t?a.createElement(u,r(r({ref:e},p),{},{components:t})):a.createElement(u,r({ref:e},p))}));function u(n,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var o=t.length,r=new Array(o);r[0]=f;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=n,s[d]="string"==typeof n?n:i,r[1]=s;for(var c=2;c<o;c++)r[c]=t[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},5234:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=t(7462),i=(t(7294),t(3905));const o={title:"AnnotationConfigApplicationContext\u6e90\u7801\u89e3\u6790",date:new Date("2019-08-20T00:00:00.000Z"),weight:2},r=void 0,s={unversionedId:"spring/spring-framework/core-source-analysis/AnnotationConfigApplicationContext",id:"spring/spring-framework/core-source-analysis/AnnotationConfigApplicationContext",title:"AnnotationConfigApplicationContext\u6e90\u7801\u89e3\u6790",description:"1. AnnotationConfigApplicationContext",source:"@site/docs/spring/spring-framework/core-source-analysis/AnnotationConfigApplicationContext.md",sourceDirName:"spring/spring-framework/core-source-analysis",slug:"/spring/spring-framework/core-source-analysis/AnnotationConfigApplicationContext",permalink:"/docs/spring/spring-framework/core-source-analysis/AnnotationConfigApplicationContext",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/spring/spring-framework/core-source-analysis/AnnotationConfigApplicationContext.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1676193845,formattedLastUpdatedAt:"Feb 12, 2023",frontMatter:{title:"AnnotationConfigApplicationContext\u6e90\u7801\u89e3\u6790",date:"2019-08-20T00:00:00.000Z",weight:2},sidebar:"springframework",previous:{title:"Overview",permalink:"/docs/spring/spring-framework"},next:{title:"BeanDefinition\u8be6\u89e3",permalink:"/docs/spring/spring-framework/core-source-analysis/BeanDefinition"}},l={},c=[{value:"1. AnnotationConfigApplicationContext",id:"1-annotationconfigapplicationcontext",level:3},{value:"2. ClassPathBeanDefinitionScanner\u6e90\u7801\u7684\u5206\u6790",id:"2-classpathbeandefinitionscanner\u6e90\u7801\u7684\u5206\u6790",level:3},{value:"2.1 ClassPathBeanDefinitionScanner#doScan \u65b9\u6cd5\u7684\u6e90\u7801\u5206\u6790",id:"21-classpathbeandefinitionscannerdoscan-\u65b9\u6cd5\u7684\u6e90\u7801\u5206\u6790",level:4},{value:"2.2 AnnotationConfigUtils.registerAnnotationConfigProcessors\u6e90\u7801\u5206\u6790",id:"22-annotationconfigutilsregisterannotationconfigprocessors\u6e90\u7801\u5206\u6790",level:4},{value:"3 \u603b\u7ed3\u52a0\u8f7d\u8fc7\u7a0b",id:"3-\u603b\u7ed3\u52a0\u8f7d\u8fc7\u7a0b",level:3}],p={toc:c},d="wrapper";function g(n){let{components:e,...t}=n;return(0,i.kt)(d,(0,a.Z)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"1-annotationconfigapplicationcontext"},"1. AnnotationConfigApplicationContext"),(0,i.kt)("p",null,"\u5bf9\u4e8eApplication\u7684\u5b9e\u73b0\u662f\u4e0d\u540c\u7684\uff0c\u73b0\u5728\u6765\u5206\u6790\u4e00\u4e0b\u5e38\u7528\u7684\u6ce8\u89e3\u7684\u5b9e\u73b0\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'public class AnnotationConfigApplicationContext extends GenericApplicationContext implements AnnotationConfigRegistry {\n\n    //\u6ce8\u89e3\u8bfb\u53d6\u5668\n    private final AnnotatedBeanDefinitionReader reader;\n\n    //class path \u626b\u7801\u5668\n    private final ClassPathBeanDefinitionScanner scanner;\n\n    //\u9ed8\u8ba4\u7684\u6784\u9020\u65b9\u6cd5\n    public AnnotationConfigApplicationContext() {\n        this.reader = new AnnotatedBeanDefinitionReader(this);\n        this.scanner = new ClassPathBeanDefinitionScanner(this);\n    }\n\n\n    public AnnotationConfigApplicationContext(DefaultListableBeanFactory beanFactory) {\n        super(beanFactory);\n        this.reader = new AnnotatedBeanDefinitionReader(this);\n        this.scanner = new ClassPathBeanDefinitionScanner(this);\n    }\n\n\n    public AnnotationConfigApplicationContext(Class<?>... annotatedClasses) {\n        this();\n        register(annotatedClasses);\n        refresh();\n    }\n\n    //\u8bbe\u7f6e\u626b\u63cf\u5305\n    public AnnotationConfigApplicationContext(String... basePackages) {\n        this();\n        scan(basePackages);\n        refresh();\n    }\n\n\n    @Override\n    public void setEnvironment(ConfigurableEnvironment environment) {\n        super.setEnvironment(environment);\n        this.reader.setEnvironment(environment);\n        this.scanner.setEnvironment(environment);\n    }\n\n\n    public void setBeanNameGenerator(BeanNameGenerator beanNameGenerator) {\n        this.reader.setBeanNameGenerator(beanNameGenerator);\n        this.scanner.setBeanNameGenerator(beanNameGenerator);\n        getBeanFactory().registerSingleton(\n                AnnotationConfigUtils.CONFIGURATION_BEAN_NAME_GENERATOR, beanNameGenerator);\n    }\n\n\n    public void setScopeMetadataResolver(ScopeMetadataResolver scopeMetadataResolver) {\n        this.reader.setScopeMetadataResolver(scopeMetadataResolver);\n        this.scanner.setScopeMetadataResolver(scopeMetadataResolver);\n    }\n\n\n    public void register(Class<?>... annotatedClasses) {\n        Assert.notEmpty(annotatedClasses, "At least one annotated class must be specified");\n        this.reader.register(annotatedClasses);\n    }\n\n\n    public void scan(String... basePackages) {\n        Assert.notEmpty(basePackages, "At least one base package must be specified");\n        this.scanner.scan(basePackages);\n    }\n    \n    @Override\n    public <T> void registerBean(@Nullable String beanName, Class<T> beanClass,\n            @Nullable Supplier<T> supplier, BeanDefinitionCustomizer... customizers) {\n\n        this.reader.registerBean(beanClass, beanName, supplier, customizers);\n    }\n\n}\n')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u4eceSpring\u7684\u6e90\u7801\u53ef\u4ee5\u770b\u51fa\u6765\uff0c\u4e3b\u8981\u901a\u8fc7 this.scanner.scan(basePackages); \u626b\u63cf\u5bf9\u5e94\u7684\u57fa\u7840\u5305\u4e0b\u9762\u7684\u7c7b\u6765\u5b9e\u73b0\u6ce8\u5165")),(0,i.kt)("h3",{id:"2-classpathbeandefinitionscanner\u6e90\u7801\u7684\u5206\u6790"},"2. ClassPathBeanDefinitionScanner\u6e90\u7801\u7684\u5206\u6790"),(0,i.kt)("p",null,"\u901a\u8fc7\u8fd9\u4e2a\u7c7b\u6765\u626b\u63cf\u6307\u5b9a\u7684class path\u4e0b\u9762\u7684\u7c7b\u7684\u5b9e\u4f8b\u52a0\u8f7d\u5230Spring\u7684\u5bb9\u5668\u4e2d\u3002\u5e76\u5c06\u7b26\u5408\u8fc7\u6ee4\u6761\u4ef6\u7684\u7c7b\u6ce8\u518c\u5230IOC \u5bb9\u5668\u5185"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Mybatis \u7684Mapper\u6ce8\u518c\u5668(ClassPathMapperScanner) \u662f\u540c\u8fc7\u7ee7\u627fClassPathBeanDefinitionScanner,\u5e76\u4e14\u81ea\u5b9a\u4e49\u4e86\u8fc7\u6ee4\u5668\u89c4\u5219\u6765\u5b9e\u73b0\u7684\u3002\u5177\u4f53\u7684 \u8c03\u7528\u8fc7\u7a0b\u5e76\u4e0d\u4f1a\u5728\u8fd9\u91cc\u8bf4\u660e\uff0c\u53ea\u662f\u60f3\u5728\u8fd9\u91cc\u63cf\u8ff0ClassPathBeanDefinitionScanner\u662f\u5982\u4f55 \u626b\u63cf \u548c \u6ce8\u518cBeanDefinition\u7684\u3002")),(0,i.kt)("p",null,"\u8fc7\u6ee4\u5668\u5206\u4e3a\u4e24\u79cd\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u5305\u542b\u8fc7\u6ee4\u5668--includeFilters"),(0,i.kt)("li",{parentName:"ol"},"\u6392\u9664\u8fc7\u6ee4\u5668--excludeFilters")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\u8fc7\u6ee4\u5668\u7c7b\u578b"),(0,i.kt)("th",{parentName:"tr",align:null},"\u793a\u4f8b\u8868\u8fbe\u5f0f"),(0,i.kt)("th",{parentName:"tr",align:null},"\u5907\u6ce8"),(0,i.kt)("th",{parentName:"tr",align:null},"Spring\u4e2d\u7684\u5b9e\u73b0\u7c7b"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"annotation"),(0,i.kt)("td",{parentName:"tr",align:null},"org.springframework.stereotype.Component"),(0,i.kt)("td",{parentName:"tr",align:null},"\u5728\u76ee\u6807\u7ec4\u4ef6\u7684\u7c7b\u578b\u7ea7\u522b\u51fa\u73b0\u6ce8\u89e3"),(0,i.kt)("td",{parentName:"tr",align:null},"AnnotationTypeFilter")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"assignable"),(0,i.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u7684\u7c7b\u6216\u8005\u63a5\u53e3"),(0,i.kt)("td",{parentName:"tr",align:null},"\u5728\u76ee\u6807\u7ec4\u4ef6\u6307\u5b9a\u7c7b\u706b\u707e\u63a5\u53e3"),(0,i.kt)("td",{parentName:"tr",align:null},"AssignableTypeFilter")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"AspectJ type"),(0,i.kt)("td",{parentName:"tr",align:null},"aspectj \u8868\u8fbe\u5f0f"),(0,i.kt)("td",{parentName:"tr",align:null},"\u6ee1\u8db3aspectj \u8868\u8fbe\u5f0f\u7684"),(0,i.kt)("td",{parentName:"tr",align:null},"AspectJTypeFilter")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\u6b63\u5219\u8868\u8fbe\u5f0f"),(0,i.kt)("td",{parentName:"tr",align:null},"org",".","example",".","Default.*"),(0,i.kt)("td",{parentName:"tr",align:null},"\u7c7b\u540d\u6ee1\u8db3\u6b63\u5219\u8868\u8fbe\u5f0f\u7684"),(0,i.kt)("td",{parentName:"tr",align:null},"RegexPatternTypeFilter")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"custom"),(0,i.kt)("td",{parentName:"tr",align:null},"com.mxsm.MyTypeFilter"),(0,i.kt)("td",{parentName:"tr",align:null},"\u7ee7\u627fSpring\u7684TypeFilter\u63a5\u53e3"),(0,i.kt)("td",{parentName:"tr",align:null},"TypeFilter")))),(0,i.kt)("p",null,"\u4ece\u4e0a\u9762\u53ef\u4ee5\u770b\u51fa\u6765Spring\u5b9e\u73b0\u7684\u6709\u56db\u4e2a\uff1aAnnotationTypeFilter\u3001AssignableTypeFilter\u3001AspectJTypeFilter\u3001RegexPatternTypeFilter\u3002\u53ef\u4ee5\u6839\u636e\u9700\u8981\u81ea\u884c\u62d3\u5c55"),(0,i.kt)("p",null,"\u770b\u4e00\u4e0b\u9ed8\u8ba4\u7684ClassPathBeanDefinitionScanner\u4f7f\u7528\u7684\u9ed8\u8ba4includeFilters\u8fc7\u6ee4\u5668\uff0c(ClassPathScanningCandidateComponentProvider)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'    protected void registerDefaultFilters() {\n        //\u6ce8\u89e3Component\u662f\u5176\u4e2d\u4e00\u4e2a\n        this.includeFilters.add(new AnnotationTypeFilter(Component.class));\n        ClassLoader cl = ClassPathScanningCandidateComponentProvider.class.getClassLoader();\n        //\u4ee5\u53ca\u4e0b\u9762\u5bf9JSR\u7684\u89c4\u8303\u7684\u652f\u6301\uff0c\u5982\u679c\u6ca1\u6709\u5bf9\u5e94\u7684\u6ce8\u89e3\u76f4\u63a5\u7565\u8fc7\u4e5f\u4e0d\u62a5\u9519\n        try {\n            this.includeFilters.add(new AnnotationTypeFilter(\n                    ((Class<? extends Annotation>) ClassUtils.forName("javax.annotation.ManagedBean", cl)), false));\n            logger.trace("JSR-250 \'javax.annotation.ManagedBean\' found and supported for component scanning");\n        }\n        catch (ClassNotFoundException ex) {\n            // JSR-250 1.1 API (as included in Java EE 6) not available - simply skip.\n        }\n        try {\n            this.includeFilters.add(new AnnotationTypeFilter(\n                    ((Class<? extends Annotation>) ClassUtils.forName("javax.inject.Named", cl)), false));\n            logger.trace("JSR-330 \'javax.inject.Named\' annotation found and supported for component scanning");\n        }\n        catch (ClassNotFoundException ex) {\n            // JSR-330 API not available - simply skip.\n        }\n    }\n')),(0,i.kt)("p",null,"\u626b\u63cf\u4e3b\u8981\u4f7f\u7528scan\u65b9\u6cd5"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"    public int scan(String... basePackages) {\n        int beanCountAtScanStart = this.registry.getBeanDefinitionCount();\n        \n        //\u626b\u7801\u914d\u7f6e\u57fa\u672c packages\u4e0b\u9762\u7684\u7c7b\n        doScan(basePackages);\n\n        // \u9ed8\u8ba4\u7684\u60c5\u51b5\u4e0b\u6ce8\u5165\u6ce8\u89e3\u914d\u7f6e\u5904\u7406\u5668--ConfigurationClassPostProcessor,\n        //AutowiredAnnotationBeanPostProcessor\u7b49Spring.\u81ea\u5b9a\u4e49\u7684\u5904\u7406\u5668\n        //\u4e0b\u9762\u4f1a\u5206\u6790\u4e00\u4e0b\u8fd9\u4e2a\u5de5\u5177\u7c7b\u7684\u8fd9\u4e2a\u65b9\u6cd5\n        if (this.includeAnnotationConfig) {\n            AnnotationConfigUtils.registerAnnotationConfigProcessors(this.registry);\n        }\n\n        return (this.registry.getBeanDefinitionCount() - beanCountAtScanStart);\n    }\n")),(0,i.kt)("p",null,"\u901a\u8fc7\u4e0a\u9762\u53ef\u4ee5\u770b\u51fa\u6765\u4e3b\u8981\u662f\u4e24\u4e2a\u65b9\u6cd5\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"doScan")),(0,i.kt)("p",{parentName:"li"},"\u8fd9\u4e2a\u4e3b\u8981\u7528\u4e8eSpring\u626b\u63cf\u8f93\u5165\u7684\u57fa\u672c\u5305\u4e0b\u9762\u7684\u4ee5\u53ca\u5b50\u5305\u4e0b\u9762\u7684\u7c7b")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"AnnotationConfigUtils.registerAnnotationConfigProcessors")),(0,i.kt)("p",{parentName:"li"},"\u6ce8\u5165\u4e00\u4e9b\u5904\u7406\u6ce8\u89e3\u7684\u914d\u7f6e\u7684Processors\uff0c\u6bd4\u5982\u5904\u7406\u7684\u6ce8\u89e3\uff1aAutowired\uff0c Value\u7b49\u6ce8\u89e3"))),(0,i.kt)("h4",{id:"21-classpathbeandefinitionscannerdoscan-\u65b9\u6cd5\u7684\u6e90\u7801\u5206\u6790"},"2.1 ClassPathBeanDefinitionScanner#doScan \u65b9\u6cd5\u7684\u6e90\u7801\u5206\u6790"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'protected Set<BeanDefinitionHolder> doScan(String... basePackages) {\n        Assert.notEmpty(basePackages, "At least one base package must be specified");\n        Set<BeanDefinitionHolder> beanDefinitions = new LinkedHashSet<>();\n        //\u52a0\u8f7d\u4e0d\u540c\u7684\u8def\u5f84\u4e0b\u9762\u7684\u5305\n        for (String basePackage : basePackages) {\n            //\u83b7\u53d6\u5305\u4e0b\u9762\u7684\u5019\u9009\u7ec4\u4ef6--\u8fc7\u6ee4\u51fa\u6765\u7b26\u5408\u6761\u4ef6\u7684\uff0c\u5728AnnotationConfigApplicationContext\n            //\u521b\u5efa\u7684\u4f7f\u7528\u7684\u9ed8\u8ba4\u7684\u8fc7\u6ee4\u5668(\u5305\u542b\u8fc7\u6ee4\u5668\u548c\u6392\u9664\u8fc7\u6ee4\u5668)\n            Set<BeanDefinition> candidates = findCandidateComponents(basePackage);\n            for (BeanDefinition candidate : candidates) {\n                //\u8bbe\u7f6eSCOP\n                ScopeMetadata scopeMetadata = this.scopeMetadataResolver.resolveScopeMetadata(candidate);\n                candidate.setScope(scopeMetadata.getScopeName());\n                //\u751f\u6210bean name\n                String beanName = this.beanNameGenerator.generateBeanName(candidate, this.registry);\n                //\u5904\u7406\u666e\u901a\u7684bean\n                if (candidate instanceof AbstractBeanDefinition) {\n                    postProcessBeanDefinition((AbstractBeanDefinition) candidate, beanName);\n                }\n                // \u5904\u7406\u6ce8\u89e3\u7c7b\u7684Bean\n                if (candidate instanceof AnnotatedBeanDefinition) {\n                    AnnotationConfigUtils.processCommonDefinitionAnnotations((AnnotatedBeanDefinition) candidate);\n                }\n                //\u5224\u65adbeanName\u662f\u5426\u5b58\u5728\u4e8eSpring\u5bb9\u5668\u4e2d\n                if (checkCandidate(beanName, candidate)) {\n                    BeanDefinitionHolder definitionHolder = new BeanDefinitionHolder(candidate, beanName);\n                    //\u6839\u636eproxyMode\u662f\u5426\u521b\u5efa\u4ee3\u7406\n                    definitionHolder =\n                            AnnotationConfigUtils.applyScopedProxyMode(scopeMetadata, definitionHolder, this.registry);\n                    beanDefinitions.add(definitionHolder);\n                    registerBeanDefinition(definitionHolder, this.registry);\n                }\n            }\n        }\n        return beanDefinitions;\n    }\n')),(0,i.kt)("p",null,"\u8fd9\u91cc\u6765\u5206\u6790\u4e00\u4e0bClassPathScanningCandidateComponentProvider#findCandidateComponents\u65b9\u6cd5\uff0c\u8be5\u65b9\u6cd5\u7684\u4f5c\u7528\u5c31\u662f\u628abasePackage\u4e0b\u9762\u7684Java\u7c7b\u8f6c\u6362\u4e3aSpring\u7684BeanDefinition"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'    public Set<BeanDefinition> findCandidateComponents(String basePackage) {\n        if (this.componentsIndex != null && indexSupportsIncludeFilters()) {\n            return addCandidateComponentsFromIndex(this.componentsIndex, basePackage);\n        }\n        else {\n            return scanCandidateComponents(basePackage);\n        }\n    }\n//\u4e00\u4e0b\u4ee3\u7801\u53bb\u9664\u4e86Spring\u6e90\u7801\u4e2d\u7684\u4e00\u4e9b\u975e\u5fc5\u8981\u7684\u4ee3\u7801\nprivate Set<BeanDefinition> scanCandidateComponents(String basePackage) {\n        Set<BeanDefinition> candidates = new LinkedHashSet<>();\n        try {\n        // \u4f8b\u5982\uff1aclasspath*:com.mxsm/**/*.class\n            String packageSearchPath = ResourcePatternResolver.CLASSPATH_ALL_URL_PREFIX +\n                    resolveBasePackage(basePackage) + \'/\' + this.resourcePattern;\n            //\u5c06\u6307\u5b9apackage\u4ee5\u53ca\u5b50\u5305\u4e0b\u9762\u7684\u7c7b\u8f6c\u5316\u4e3aResource[]\n            Resource[] resources = getResourcePatternResolver().getResources(packageSearchPath);\n            for (Resource resource : resources) {\n\n                if (resource.isReadable()) {\n                    try {\n                    //\u5c06Class\u7684\u4fe1\u606f\u5b58\u50a8\u5230MetadataReader\u4e2d\n                        MetadataReader\u4e2d metadataReader = getMetadataReaderFactory().getMetadataReader(resource);\n                        //\u8c03\u7528\u8fc7\u6ee4\u5668\u6765\u5904\u7406metadataReader--\u9ed8\u8ba4\u7684\u662f\u5305\u542bcomponent\n                        //\u6ce8\u89e3\u7684\u7c7b\n                        if (isCandidateComponent(metadataReader)) {\n                        //\u8f6c\u5316\u4e3a\u626b\u63cf\u5b9a\u4e49\n                            ScannedGenericBeanDefinition sbd = new ScannedGenericBeanDefinition(metadataReader);\n                            sbd.setResource(resource);\n                            sbd.setSource(resource);\n                            //\u518d\u6b21\u5224\u65ad \u5982\u679c\u662f\u5b9e\u4f53\u7c7b \u8fd4\u56detrue,\u5982\u679c\u662f\u62bd\u8c61\u7c7b\uff0c\u4f46\u662f\u62bd\u8c61\u65b9\u6cd5 \u88ab @Lookup \u6ce8\u89e3\u6ce8\u91ca\u8fd4\u56detrue\n                            if (isCandidateComponent(sbd)) {\n                                candidates.add(sbd);\n                            }\n                            else {\n                                //\u65e5\u5fd7\u6253\u5370\n                            }\n                        }\n                        else {\n                            //\u65e5\u5fd7\u6253\u5370\n                        }\n                    }\n                    catch (Throwable ex) {\n                        throw new BeanDefinitionStoreException(\n                                "Failed to read candidate component class: " + resource, ex);\n                    }\n                }\n                else {\n                    //\u65e5\u5fd7\u6253\u5370\n                }\n            }\n        }\n        catch (IOException ex) {\n            throw new BeanDefinitionStoreException("I/O failure during classpath scanning", ex);\n        }\n        return candidates;\n    }\n\n\n')),(0,i.kt)("h4",{id:"22-annotationconfigutilsregisterannotationconfigprocessors\u6e90\u7801\u5206\u6790"},"2.2 AnnotationConfigUtils.registerAnnotationConfigProcessors\u6e90\u7801\u5206\u6790"),(0,i.kt)("p",null,"\u8fd9\u4e2a\u65b9\u6cd5\u4e3b\u8981\u7528\u4e8e\u6ce8\u518c\u4e00\u4e9b\u6ce8\u89e3\u914d\u7f6e\u5904\u7406\u5668\u4f8b\u5982\u6ce8\u89e3\uff1a",(0,i.kt)("strong",{parentName:"p"},"@Configuration")," \u7b49\u7b49\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'public static Set<BeanDefinitionHolder> registerAnnotationConfigProcessors(\n            BeanDefinitionRegistry registry, @Nullable Object source) {\n\n        DefaultListableBeanFactory beanFactory = unwrapDefaultListableBeanFactory(registry);\n        if (beanFactory != null) {\n            if (!(beanFactory.getDependencyComparator() instanceof AnnotationAwareOrderComparator)) {\n                beanFactory.setDependencyComparator(AnnotationAwareOrderComparator.INSTANCE);\n            }\n            if (!(beanFactory.getAutowireCandidateResolver() instanceof ContextAnnotationAutowireCandidateResolver)) {\n                beanFactory.setAutowireCandidateResolver(new ContextAnnotationAutowireCandidateResolver());\n            }\n        }\n\n        Set<BeanDefinitionHolder> beanDefs = new LinkedHashSet<>(8);\n\n        //\u5f80Spring\u5bb9\u5668\u4e2d\u6ce8\u5165ConfigurationClassPostProcessor -- \u5904\u7406\u6ce8\u89e3Configuration\u914d\u7f6e\u7b49\u7b49\n        if (!registry.containsBeanDefinition(CONFIGURATION_ANNOTATION_PROCESSOR_BEAN_NAME)) {\n            RootBeanDefinition def = new RootBeanDefinition(ConfigurationClassPostProcessor.class);\n            def.setSource(source);\n            beanDefs.add(registerPostProcessor(registry, def, CONFIGURATION_ANNOTATION_PROCESSOR_BEAN_NAME));\n        }\n        \n        //\u5904\u7406Autowired\u548cValue\u6ce8\u89e3\u4ee5\u53cajavax.inject.Inject(JSR-330)\u6ce8\u89e3\u7684\u5904\u7406\u5668\n        if (!registry.containsBeanDefinition(AUTOWIRED_ANNOTATION_PROCESSOR_BEAN_NAME)) {\n            RootBeanDefinition def = new RootBeanDefinition(AutowiredAnnotationBeanPostProcessor.class);\n            def.setSource(source);\n            beanDefs.add(registerPostProcessor(registry, def, AUTOWIRED_ANNOTATION_PROCESSOR_BEAN_NAME));\n        }\n\n        // \u5bf9 JSR-250 \u901a\u7528\u89c4\u8303\u6ce8\u89e3\u7684\u5904\u7406.\n        if (jsr250Present && !registry.containsBeanDefinition(COMMON_ANNOTATION_PROCESSOR_BEAN_NAME)) {\n            RootBeanDefinition def = new RootBeanDefinition(CommonAnnotationBeanPostProcessor.class);\n            def.setSource(source);\n            beanDefs.add(registerPostProcessor(registry, def, COMMON_ANNOTATION_PROCESSOR_BEAN_NAME));\n        }\n\n        // \u5bf9JPA\u6ce8\u89e3\u7684\u6ce8\u89e3\u5904\u7406\n        if (jpaPresent && !registry.containsBeanDefinition(PERSISTENCE_ANNOTATION_PROCESSOR_BEAN_NAME)) {\n            RootBeanDefinition def = new RootBeanDefinition();\n            try {\n                def.setBeanClass(ClassUtils.forName(PERSISTENCE_ANNOTATION_PROCESSOR_CLASS_NAME,\n                        AnnotationConfigUtils.class.getClassLoader()));\n            }\n            catch (ClassNotFoundException ex) {\n                throw new IllegalStateException(\n                        "Cannot load optional framework class: " + PERSISTENCE_ANNOTATION_PROCESSOR_CLASS_NAME, ex);\n            }\n            def.setSource(source);\n            beanDefs.add(registerPostProcessor(registry, def, PERSISTENCE_ANNOTATION_PROCESSOR_BEAN_NAME));\n        }\n        \n        //\u4e8b\u4ef6\u76d1\u542c\u65b9\u6cd5\u5904\u7406\u5668\n        if (!registry.containsBeanDefinition(EVENT_LISTENER_PROCESSOR_BEAN_NAME)) {\n            RootBeanDefinition def = new RootBeanDefinition(EventListenerMethodProcessor.class);\n            def.setSource(source);\n            beanDefs.add(registerPostProcessor(registry, def, EVENT_LISTENER_PROCESSOR_BEAN_NAME));\n        }\n\n        //\u9ed8\u8ba4\u4e8b\u4ef6\u76d1\u542c\u65b9\u6cd5\u7684\u5904\u7406\n        if (!registry.containsBeanDefinition(EVENT_LISTENER_FACTORY_BEAN_NAME)) {\n            RootBeanDefinition def = new RootBeanDefinition(DefaultEventListenerFactory.class);\n            def.setSource(source);\n            beanDefs.add(registerPostProcessor(registry, def, EVENT_LISTENER_FACTORY_BEAN_NAME));\n        }\n\n        return beanDefs;\n    }\n')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u5927\u90e8\u5206Processor\u5206\u4e3a\u4e24\u7c7b\uff1a",(0,i.kt)("br",{parentName:"p"}),"\n","1 \u5b9e\u73b0\u4e86 ",(0,i.kt)("strong",{parentName:"p"},"BeanPostProcessor")," \u63a5\u53e3\uff0c\u4e3b\u8981\u7528\u6765\u5904\u7406Java\u7c7b\u5185\u90e8\u7684\u6ce8\u89e3\u3002\u4f8b\u5982\uff1a @Value",(0,i.kt)("br",{parentName:"p"}),"\n","2 \u5b9e\u73b0\u4e86 ",(0,i.kt)("strong",{parentName:"p"},"BeanFactoryPostProcessor")," \u63a5\u53e3\uff0c\u4e3b\u8981\u7528\u6765\u5904\u7406Java\u7c7b\u4e0a\u9762\u7684\u6ce8\u89e3\u3002\u4f8b\u5982\uff1a@Configuration")),(0,i.kt)("p",null,"\u901a\u8fc7\u8fd9\u6837\u7684\u5c31\u628a\u5bf9\u5e94\u7684\u6ce8\u89e3\u90fd\u5904\u7406\u4e86\u3002\u8fbe\u5230\u4e86\u548cXML\u914d\u7f6e\u4e00\u6837\u7684\u6548\u679c\u3002\u5bf9\u4e8e\u5176\u4e2d\u7684\u7c7b\u7684\u4ee3\u7801\u4f1a\u6709\u4e13\u95e8\u7684\u7b14\u8bb0\u5bf9\u5176\u8fdb\u884c\u8be6\u7ec6\u7684\u5206\u6790\u3002"),(0,i.kt)("h3",{id:"3-\u603b\u7ed3\u52a0\u8f7d\u8fc7\u7a0b"},"3 \u603b\u7ed3\u52a0\u8f7d\u8fc7\u7a0b"),(0,i.kt)("p",null,"\u901a\u8fc7\u4e0a\u9762\u7684\u6e90\u7801\u5bf9Spring\u7684AnnotationConfigApplicationContext\u6e90\u7801\u5206\u6790\u6765\u603b\u7ed3\u4e00\u4e0b\u5bf9\u4e8e\u6ce8\u89e3\u7684\u8fd9\u4e2a\u52a0\u8f7d\u8fc7\u7a0b"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"\u521b\u5efaAnnotationConfigApplicationContext\u7684\u5bf9\u8c61\uff0c\u8bbe\u7f6e\u9700\u8981\u52a0\u8f7d\u7684basePackages"))))}g.isMDXComponent=!0}}]);