"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[4198],{3905:(e,n,a)=>{a.d(n,{Zo:()=>d,kt:()=>f});var t=a(7294);function s(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){s(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,t,s=function(e,n){if(null==e)return{};var a,t,s={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(s[a]=e[a]);return s}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=t.createContext({}),c=function(e){var n=t.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},d=function(e){var n=c(e.components);return t.createElement(l.Provider,{value:n},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var a=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(a),u=s,f=p["".concat(l,".").concat(u)]||p[u]||g[u]||r;return a?t.createElement(f,o(o({ref:n},d),{},{components:a})):t.createElement(f,o({ref:n},d))}));function f(e,n){var a=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var r=a.length,o=new Array(r);o[0]=u;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[p]="string"==typeof e?e:s,o[1]=i;for(var c=2;c<r;c++)o[c]=a[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}u.displayName="MDXCreateElement"},659:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>g,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var t=a(7462),s=(a(7294),a(3905));const r={title:"ConfigurationClassPostProcessor\u6e90\u7801\u89e3\u6790",date:new Date("2021-03-19T00:00:00.000Z"),weight:8},o=void 0,i={unversionedId:"spring/spring-framework/core-source-analysis/ConfigurationClassPostProcesso",id:"spring/spring-framework/core-source-analysis/ConfigurationClassPostProcesso",title:"ConfigurationClassPostProcessor\u6e90\u7801\u89e3\u6790",description:"1. ConfigurationClassPostProcessor",source:"@site/docs/spring/spring-framework/core-source-analysis/ConfigurationClassPostProcesso.md",sourceDirName:"spring/spring-framework/core-source-analysis",slug:"/spring/spring-framework/core-source-analysis/ConfigurationClassPostProcesso",permalink:"/docs/spring/spring-framework/core-source-analysis/ConfigurationClassPostProcesso",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/spring/spring-framework/core-source-analysis/ConfigurationClassPostProcesso.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1682735967,formattedLastUpdatedAt:"Apr 29, 2023",frontMatter:{title:"ConfigurationClassPostProcessor\u6e90\u7801\u89e3\u6790",date:"2021-03-19T00:00:00.000Z",weight:8},sidebar:"springframework",previous:{title:"ClassPathXmlApplicationContext\u6e90\u7801\u89e3\u6790",permalink:"/docs/spring/spring-framework/core-source-analysis/ClassPathXmlApplicationContext"},next:{title:"FactoryBean\u89e3\u6790",permalink:"/docs/spring/spring-framework/core-source-analysis/FactoryBean"}},l={},c=[{value:"1. ConfigurationClassPostProcessor",id:"1-configurationclasspostprocessor",level:3},{value:"2. ConfigurationClassPostProcessor\u6e90\u7801\u5206\u6790",id:"2-configurationclasspostprocessor\u6e90\u7801\u5206\u6790",level:3},{value:"2.1 ConfigurationClassParser\u5bf9\u8c61\u7684\u5206\u6790",id:"21-configurationclassparser\u5bf9\u8c61\u7684\u5206\u6790",level:4},{value:"2.1.1  @Component\u6ce8\u89e3\u7684\u5904\u7406",id:"211--component\u6ce8\u89e3\u7684\u5904\u7406",level:5},{value:"2.1.2 @PropertySources\u3001@PropertySource \u6ce8\u89e3\u7684\u89e3\u6790",id:"212-propertysourcespropertysource-\u6ce8\u89e3\u7684\u89e3\u6790",level:5},{value:"2.1.3 @ComponentScans.class, @ComponentScan.class\u6ce8\u89e3\u7684\u89e3\u6790",id:"213-componentscansclass-componentscanclass\u6ce8\u89e3\u7684\u89e3\u6790",level:5},{value:"2.1.4 @Import\u6ce8\u89e3\u7684\u89e3\u6790",id:"214-import\u6ce8\u89e3\u7684\u89e3\u6790",level:5},{value:"2.1.5 @ImportResource\u6ce8\u89e3\u7684\u89e3\u6790",id:"215-importresource\u6ce8\u89e3\u7684\u89e3\u6790",level:5},{value:"2.1.6 @Configuration\u914d\u7f6e\u7c7b\u4e2d@Bean\u6ce8\u89e3\u7684\u89e3\u6790",id:"216-configuration\u914d\u7f6e\u7c7b\u4e2dbean\u6ce8\u89e3\u7684\u89e3\u6790",level:5},{value:"3. \u7ec8\u7ed3",id:"3-\u7ec8\u7ed3",level:3}],d={toc:c},p="wrapper";function g(e){let{components:n,...a}=e;return(0,s.kt)(p,(0,t.Z)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h3",{id:"1-configurationclasspostprocessor"},"1. ConfigurationClassPostProcessor"),(0,s.kt)("p",null,"\u8fd9\u4e2a\u7c7b\u4e3b\u8981\u7528\u6765\u5904\u7406Spring\u4e2d\u7684\u914d\u7f6e\u6ce8\u89e3\uff0cSpring\u7684\u914d\u7f6e\u6ce8\u89e3\u4e3b\u8981\u5305\u542b\u4e00\u4e0b\u51e0\u4e2a\uff1a"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("strong",{parentName:"li"},"@Configuration")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("strong",{parentName:"li"},"@Component")," "),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("strong",{parentName:"li"},"@PropertySources\u3001@PropertySource")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("strong",{parentName:"li"},"@ComponentScan \u3001 @ComponentScans")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("strong",{parentName:"li"},"@Import")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("strong",{parentName:"li"},"@ImportResource")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("strong",{parentName:"li"},"@Bean"))),(0,s.kt)("p",null,"\u4ee5\u4e0a\u4e03\u4e2a\u662fSpring\u6700\u5e38\u89c1\u7684\u914d\u7f6e\u7c7b\u6ce8\u89e3\uff0c\u4e0b\u9762\u6765\u5206\u6790\u4e00\u4e0b\u6bcf\u4e00\u4e2a\u6ce8\u89e3\u5728Spring\u4e2d\u7684\u5b9e\u73b0\u3002"),(0,s.kt)("h3",{id:"2-configurationclasspostprocessor\u6e90\u7801\u5206\u6790"},"2. ConfigurationClassPostProcessor\u6e90\u7801\u5206\u6790"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"ConfigurationClassPostProcessor"))," \u4e3b\u8981\u662f\u901a\u8fc7 ",(0,s.kt)("strong",{parentName:"p"},"AnnotationConfigUtils#registerAnnotationConfigProcessors")," \u65b9\u6cd5\u6ce8\u5165 ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"ConfigurationClassPostProcessor"))," \u7684 ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"BeanDefinition"))," \u3002\u4e0b\u9762\u770b\u4e00\u4e0b ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"ConfigurationClassPostProcessor"))," \u6e90\u7801"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"public class ConfigurationClassPostProcessor implements BeanDefinitionRegistryPostProcessor,\n        PriorityOrdered, ResourceLoaderAware, BeanClassLoaderAware, EnvironmentAware {\n    // \u7701\u7565\u91cc\u9762\u7684\u4ee3\u7801 \u8fd9\u91cc\u770b\u4e00\u4e0b\u5b9a\u4e49          \n}\n")),(0,s.kt)("p",null,"\u901a\u8fc7\u4e0a\u9762\u53ef\u4ee5\u770b\u5230\u5b9e\u73b0\u4e86 ",(0,s.kt)("strong",{parentName:"p"},"BeanDefinitionRegistryPostProcessor")," \u8fd9\u4e2a\u63a5\u53e3\u3002\u8fd9\u4e2a\u63a5\u53e3\u662fSpring\u4e2d\u7684\u4e00\u4e2a\u5f88\u91cd\u8981\u7684 ",(0,s.kt)("strong",{parentName:"p"},"BeanFactoryPostProcessor")," \u7ee7\u627f\u3002\u4e0b\u9762\u5177\u4f53\u770b\u4e00\u4e0b\u91cc\u9762\u7684\u4e24\u4e2a\u91cd\u8981\u7684\u65b9\u6cd5\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'public class ConfigurationClassPostProcessor implements BeanDefinitionRegistryPostProcessor,\n        PriorityOrdered, ResourceLoaderAware, BeanClassLoaderAware, EnvironmentAware {\n    \n    //BeanDefinitionRegistryPostProcessor\u7684\u65b9\u6cd5\u5b9e\u73b0\n    @Override\n    public void postProcessBeanDefinitionRegistry(BeanDefinitionRegistry registry) {\n        int registryId = System.identityHashCode(registry);\n        if (this.registriesPostProcessed.contains(registryId)) {\n            throw new IllegalStateException(\n                    "postProcessBeanDefinitionRegistry already called on this post-processor against " + registry);\n        }\n        if (this.factoriesPostProcessed.contains(registryId)) {\n            throw new IllegalStateException(\n                    "postProcessBeanFactory already called on this post-processor against " + registry);\n        }\n        this.registriesPostProcessed.add(registryId);\n        //\u5173\u952e\u6027\u7684\u65b9\u6cd5--\u5904\u7406\u914d\u7f6eBean\u5b9a\u4e49\n        processConfigBeanDefinitions(registry);\n    }\n    \n    //BeanFactoryPostProcessor\u7684\u65b9\u6cd5\u5b9e\u73b0\n    @Override\n    public void postProcessBeanFactory(ConfigurableListableBeanFactory beanFactory) {\n        int factoryId = System.identityHashCode(beanFactory);\n        if (this.factoriesPostProcessed.contains(factoryId)) {\n            throw new IllegalStateException(\n                    "postProcessBeanFactory already called on this post-processor against " + beanFactory);\n        }\n        this.factoriesPostProcessed.add(factoryId);\n        if (!this.registriesPostProcessed.contains(factoryId)) {\n            //\u5173\u952e\u6027\u7684\u65b9\u6cd5\n            processConfigBeanDefinitions((BeanDefinitionRegistry) beanFactory);\n        }\n\n        enhanceConfigurationClasses(beanFactory);\n        beanFactory.addBeanPostProcessor(new ImportAwareBeanPostProcessor(beanFactory));\n    }\n}\n')),(0,s.kt)("p",null,"\u4e0b\u9762\u770b\u4e00\u4e0b ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"processConfigBeanDefinitions"))," \u65b9\u6cd5"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'    public void processConfigBeanDefinitions(BeanDefinitionRegistry registry) {\n        List<BeanDefinitionHolder> configCandidates = new ArrayList<>();\n        //\u4eceSpring\u5bb9\u5668\u4e2d\u83b7\u53d6\u6ce8\u518c\u7684BeanDefinition\u540d\u79f0\n        String[] candidateNames = registry.getBeanDefinitionNames();\n\n        for (String beanName : candidateNames) {\n\n            //\u83b7\u53d6beanName\u5bf9\u5e94\u7684BeanDefinition\n            BeanDefinition beanDef = registry.getBeanDefinition(beanName);\n            //\u6392\u9664ConfigurationClassPostProcessor\n            if (beanDef.getAttribute(ConfigurationClassUtils.CONFIGURATION_CLASS_ATTRIBUTE) != null) {\n                if (logger.isDebugEnabled()) {\n                    logger.debug("Bean definition has already been processed as a configuration class: " + beanDef);\n                }\n            }\n            //\u5224\u65ad\u662f\u5426\u5305\u542bConfiguration\u6ce8\u89e3\u7136\u540e\u5224\u65ad\u662f\u5426\u5305\u542b\n            else if (ConfigurationClassUtils.checkConfigurationClassCandidate(beanDef, this.metadataReaderFactory)) {\n                configCandidates.add(new BeanDefinitionHolder(beanDef, beanName));\n            }\n        }\n        // \u5982\u679c\u6ca1\u6709\u53d1\u73b0Configuration\u76f4\u63a5\u8fd4\u56de\n        if (configCandidates.isEmpty()) {\n            return;\n        }\n\n        // \u5904\u7406\u5305\u542b\u4e86@Order\u6ce8\u89e3\n        configCandidates.sort((bd1, bd2) -> {\n            int i1 = ConfigurationClassUtils.getOrder(bd1.getBeanDefinition());\n            int i2 = ConfigurationClassUtils.getOrder(bd2.getBeanDefinition());\n            return Integer.compare(i1, i2);\n        });\n\n\n        SingletonBeanRegistry sbr = null;\n        if (registry instanceof SingletonBeanRegistry) {\n            sbr = (SingletonBeanRegistry) registry;\n            if (!this.localBeanNameGeneratorSet) {\n                BeanNameGenerator generator = (BeanNameGenerator) sbr.getSingleton(\n                        AnnotationConfigUtils.CONFIGURATION_BEAN_NAME_GENERATOR);\n                if (generator != null) {\n                    this.componentScanBeanNameGenerator = generator;\n                    this.importBeanNameGenerator = generator;\n                }\n            }\n        }\n\n        if (this.environment == null) {\n            this.environment = new StandardEnvironment();\n        }\n\n        // ConfigurationClassParser\u89e3\u6790\u6bcf\u4e00\u4e2a\u5e26\u6709@Configuration\u6ce8\u89e3\u7684\u7c7b\n        ConfigurationClassParser parser = new ConfigurationClassParser(\n                this.metadataReaderFactory, this.problemReporter, this.environment,\n                this.resourceLoader, this.componentScanBeanNameGenerator, registry);\n\n        Set<BeanDefinitionHolder> candidates = new LinkedHashSet<>(configCandidates);\n        Set<ConfigurationClass> alreadyParsed = new HashSet<>(configCandidates.size());\n        do {\n            //\u89e3\u6790\u5305\u542b\u6709Configuration\u6ce8\u89e3\u7684\u7c7b\n            parser.parse(candidates);\n            parser.validate();\n\n            Set<ConfigurationClass> configClasses = new LinkedHashSet<>(parser.getConfigurationClasses());\n            configClasses.removeAll(alreadyParsed);\n\n            // \u8bfb\u53d6\u521b\u5efa\u89e3\u6790\u540e\u7684BeanDefinition\u5230\u4e0a\u4e0b\u6587Context\u4e2d\n            if (this.reader == null) {\n                this.reader = new ConfigurationClassBeanDefinitionReader(\n                        registry, this.sourceExtractor, this.resourceLoader, this.environment,\n                        this.importBeanNameGenerator, parser.getImportRegistry());\n            }\n            this.reader.loadBeanDefinitions(configClasses);\n            alreadyParsed.addAll(configClasses);\n\n            candidates.clear();\n            if (registry.getBeanDefinitionCount() > candidateNames.length) {\n                String[] newCandidateNames = registry.getBeanDefinitionNames();\n                Set<String> oldCandidateNames = new HashSet<>(Arrays.asList(candidateNames));\n                Set<String> alreadyParsedClasses = new HashSet<>();\n                for (ConfigurationClass configurationClass : alreadyParsed) {\n                    alreadyParsedClasses.add(configurationClass.getMetadata().getClassName());\n                }\n                for (String candidateName : newCandidateNames) {\n                    if (!oldCandidateNames.contains(candidateName)) {\n                        BeanDefinition bd = registry.getBeanDefinition(candidateName);\n                        if (ConfigurationClassUtils.checkConfigurationClassCandidate(bd, this.metadataReaderFactory) &&\n                                !alreadyParsedClasses.contains(bd.getBeanClassName())) {\n                            candidates.add(new BeanDefinitionHolder(bd, candidateName));\n                        }\n                    }\n                }\n                candidateNames = newCandidateNames;\n            }\n        }\n        while (!candidates.isEmpty());\n\n        //\u6ce8\u518cImportRegistry\u4f5c\u4e3a\u4e00\u4e2aBean\u53bb\u652f\u6301ImportAware\u5bfc\u5165@Configuration\u7c7b\n        if (sbr != null && !sbr.containsSingleton(IMPORT_REGISTRY_BEAN_NAME)) {\n            sbr.registerSingleton(IMPORT_REGISTRY_BEAN_NAME, parser.getImportRegistry());\n        }\n\n        if (this.metadataReaderFactory instanceof CachingMetadataReaderFactory) {\n            // Clear cache in externally provided MetadataReaderFactory; this is a no-op\n            // for a shared cache since it\'ll be cleared by the ApplicationContext.\n            ((CachingMetadataReaderFactory) this.metadataReaderFactory).clearCache();\n        }\n    }\n')),(0,s.kt)("h4",{id:"21-configurationclassparser\u5bf9\u8c61\u7684\u5206\u6790"},"2.1 ConfigurationClassParser\u5bf9\u8c61\u7684\u5206\u6790"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("em",{parentName:"strong"},"ConfigurationClassParser"))," \u4e3b\u8981\u5206\u4e3a\u51e0\u4e2a\u90e8\u5206\uff1a"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"@Component\u6ce8\u89e3\u7684\u89e3\u6790")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"@PropertySources\u3001@PropertySource \u6ce8\u89e3\u7684\u89e3\u6790")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"@ComponentScans.class, @ComponentScan.class\u6ce8\u89e3\u7684\u89e3\u6790")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"@Import\u6ce8\u89e3\u7684\u89e3\u6790")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"@ImportResource\u6ce8\u89e3\u7684\u89e3\u6790")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"@Configuration\u914d\u7f6e\u7c7b\u4e2d@Bean\u6ce8\u89e3\u7684\u89e3\u6790"))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("em",{parentName:"strong"},"ConfigurationClassParser"))," \u4e3b\u8981\u662f\u89e3\u6790 ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("em",{parentName:"strong"},"@Configuration"))," \u6ce8\u89e3\u7c7b\u4e0a\u6216\u8005\u7c7b\u91cc\u9762\u7684\u8fd9\u4e9b\u6ce8\u89e3\u4e0b\u9762\u6765\u9010\u4e00\u5206\u6790\u3002"),(0,s.kt)("p",null,"\u89e3\u6790 ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"@Configuration"))," \u4e3b\u8981\u662f\u901a\u8fc7 ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"ConfigurationClassParser"))," \u5bf9\u8c61\u7684parse\u65b9\u6cd5\u6765\u8fdb\u884c\u89e3\u6790"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'public void parse(Set<BeanDefinitionHolder> configCandidates) {\n        for (BeanDefinitionHolder holder : configCandidates) {\n            BeanDefinition bd = holder.getBeanDefinition();\n            try {\n                if (bd instanceof AnnotatedBeanDefinition) {\n                    //\u89e3\u6790\u5904\u7406AnnotatedBeanDefinition\n                    parse(((AnnotatedBeanDefinition) bd).getMetadata(), holder.getBeanName());\n                }\n                else if (bd instanceof AbstractBeanDefinition && ((AbstractBeanDefinition) bd).hasBeanClass()) {\n                    //\u89e3\u6790\u5904\u7406AbstractBeanDefinition\n                    parse(((AbstractBeanDefinition) bd).getBeanClass(), holder.getBeanName());\n                }\n                else {\n                    parse(bd.getBeanClassName(), holder.getBeanName());\n                }\n            }\n            catch (BeanDefinitionStoreException ex) {\n                throw ex;\n            }\n            catch (Throwable ex) {\n                throw new BeanDefinitionStoreException(\n                        "Failed to parse configuration class [" + bd.getBeanClassName() + "]", ex);\n            }\n        }\n        //\u5904\u7406\u5b9e\u73b0\u4e86DeferredImportSelector\u63a5\u53e3\u7684\u7c7b\n        this.deferredImportSelectorHandler.process();\n    }\n')),(0,s.kt)("p",null,"\u901a\u8fc7\u4e0a\u9762\u7684\u4ee3\u7801\u53d1\u73b0\u4e3b\u8981\u662f\u901a\u8fc7\u8c03\u7528 parse\u65b9\u6cd5\u8fdb\u884c\u63a5\u4e0b\u6765\u7684\u5904\u7406"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'    protected final void parse(@Nullable String className, String beanName) throws IOException {\n        Assert.notNull(className, "No bean class name for configuration class bean definition");\n        MetadataReader reader = this.metadataReaderFactory.getMetadataReader(className);\n        processConfigurationClass(new ConfigurationClass(reader, beanName));\n    }\n\n    protected final void parse(Class<?> clazz, String beanName) throws IOException {\n        processConfigurationClass(new ConfigurationClass(clazz, beanName));\n    }\n\n    protected final void parse(AnnotationMetadata metadata, String beanName) throws IOException {\n        processConfigurationClass(new ConfigurationClass(metadata, beanName));\n    }\n')),(0,s.kt)("p",null,"parse\u65b9\u6cd5\u6709\u4e09\u4e2a\u91cd\u8f7d\u7684\u65b9\u6cd5\uff0c\u4e09\u4e2a\u91cd\u5199\u65b9\u6cd5\u90fd\u662f\u8c03\u7528 ",(0,s.kt)("strong",{parentName:"p"},"processConfigurationClass")," \u65b9\u6cd5\uff0c\u63a5\u4e0b\u6765\u5f00\u59cb\u5206\u6790\u4e00\u4e0b\u8fd9\u4e2a\u65b9\u6cd5\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"        protected void processConfigurationClass(ConfigurationClass configClass) throws IOException {\n        if (this.conditionEvaluator.shouldSkip(configClass.getMetadata(), ConfigurationPhase.PARSE_CONFIGURATION)) {\n            return;\n        }\n\n        //\u5224\u65ad\u914d\u7f6e\u7c7b\u662f\u5426\u5b58\u5728\n        ConfigurationClass existingClass = this.configurationClasses.get(configClass);\n        if (existingClass != null) {\n\n            //\u5224\u65adconfigClass\u662fImport\u6ce8\u89e3\n            if (configClass.isImported()) {\n                if (existingClass.isImported()) {\n                    //\u5df2\u7ecf\u5b58\u5728\u7684ConfigurationClass\u5408\u5e76\u65b0ConfigurationClass\u7684\u5bfc\u5165\u8005\n                    existingClass.mergeImportedBy(configClass);\n                }\n                // \u6ce8\u518c\u8fc7\u65e0\u9700\u518d\u6b21\u6ce8\u518c\n                return;\n            }\n            else {\n                // \u627e\u5230\u663e\u5f0fbean\u5b9a\u4e49\uff0c\u53ef\u80fd\u66ff\u6362\u5bfc\u5165\n                // \u5220\u9664\u65e7\u7684configClass\n                this.configurationClasses.remove(configClass);\n                this.knownSuperclasses.values().removeIf(configClass::equals);\n            }\n        }\n\n        // \u9012\u5f52\u5730\u5904\u7406\u914d\u7f6e\u7c7b\u53ca\u5176\u7236\u7c7b\n        SourceClass sourceClass = asSourceClass(configClass);\n        do {\n            sourceClass = doProcessConfigurationClass(configClass, sourceClass);\n        }\n        while (sourceClass != null);\n        //\u4fdd\u5b58\u5df2\u7ecf\u5904\u7406\u8fc7\u7684configClass\n        this.configurationClasses.put(configClass, configClass);\n    }\n")),(0,s.kt)("p",null,"\u770b\u4e00\u4e0b ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"doProcessConfigurationClass"))," \u7684\u65b9\u6cd5"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'    protected final SourceClass doProcessConfigurationClass(ConfigurationClass configClass, SourceClass sourceClass)\n            throws IOException {\n\n        if (configClass.getMetadata().isAnnotated(Component.class.getName())) {\n            // \u9012\u5f52\u5904\u7406\u6210\u5458\u5185\u90e8\u5185\uff0c\u5904\u7406\u5e26@Component\u6ce8\u89e3\u7684\u7c7b\n            processMemberClasses(configClass, sourceClass);\n        }\n\n        // \u5904\u7406\u4efb\u4f55@PropertySource\u7684\u7c7b\n        for (AnnotationAttributes propertySource : AnnotationConfigUtils.attributesForRepeatable(\n                sourceClass.getMetadata(), PropertySources.class,\n                org.springframework.context.annotation.PropertySource.class)) {\n            if (this.environment instanceof ConfigurableEnvironment) {\n                //\u5904\u7406\u5c5e\u6027\n                processPropertySource(propertySource);\n            }\n            else {\n                logger.info("Ignoring @PropertySource annotation on [" + sourceClass.getMetadata().getClassName() +\n                        "]. Reason: Environment must implement ConfigurableEnvironment");\n            }\n        }\n\n        //\u5904\u7406\u4efb\u4f55 @ComponentScan\u7684\u7c7b\n        Set<AnnotationAttributes> componentScans = AnnotationConfigUtils.attributesForRepeatable(\n                sourceClass.getMetadata(), ComponentScans.class, ComponentScan.class);\n        if (!componentScans.isEmpty() &&\n                !this.conditionEvaluator.shouldSkip(sourceClass.getMetadata(), ConfigurationPhase.REGISTER_BEAN)) {\n            for (AnnotationAttributes componentScan : componentScans) {\n                // The config class is annotated with @ComponentScan -> perform the scan immediately\n                Set<BeanDefinitionHolder> scannedBeanDefinitions =\n                        this.componentScanParser.parse(componentScan, sourceClass.getMetadata().getClassName());\n                // Check the set of scanned definitions for any further config classes and parse recursively if needed\n                for (BeanDefinitionHolder holder : scannedBeanDefinitions) {\n                    BeanDefinition bdCand = holder.getBeanDefinition().getOriginatingBeanDefinition();\n                    if (bdCand == null) {\n                        bdCand = holder.getBeanDefinition();\n                    }\n                    if (ConfigurationClassUtils.checkConfigurationClassCandidate(bdCand, this.metadataReaderFactory)) {\n                        parse(bdCand.getBeanClassName(), holder.getBeanName());\n                    }\n                }\n            }\n        }\n\n        // \u5904\u7406\u4efb\u4f55@Import\u6ce8\u89e3\u7684\u7c7b\n        processImports(configClass, sourceClass, getImports(sourceClass), true);\n\n        //\u5904\u7406\u4efb\u4f55@ImportResource\u6ce8\u89e3\u7684\u7c7b\n        AnnotationAttributes importResource =\n                AnnotationConfigUtils.attributesFor(sourceClass.getMetadata(), ImportResource.class);\n        if (importResource != null) {\n            String[] resources = importResource.getStringArray("locations");\n            Class<? extends BeanDefinitionReader> readerClass = importResource.getClass("reader");\n            for (String resource : resources) {\n                String resolvedResource = this.environment.resolveRequiredPlaceholders(resource);\n                configClass.addImportedResource(resolvedResource, readerClass);\n            }\n        }\n\n\n        Set<MethodMetadata> beanMethods = retrieveBeanMethodMetadata(sourceClass);\n        for (MethodMetadata methodMetadata : beanMethods) {\n            configClass.addBeanMethod(new BeanMethod(methodMetadata, configClass));\n        }\n\n        // \u5904\u7406\u5b9e\u73b0\u7684\u6240\u6709\u63a5\u53e3\u4e2d@Bean\u6ce8\u89e3\u7684\u65b9\u6cd5\uff0c\u53bb\u4e0a\u9762\u7684\u5904\u7406\u65b9\u6cd5\u4e00\u6837\uff0c\u4f46\u4e0d\u662f\u62bd\u8c61\u65b9\u6cd5\uff0c\n        // \u56e0\u4e3ajava8\u4e2d\u63a5\u53e3\u6709\u9ed8\u8ba4\u65b9\u6cd5\u548c\u5176\u4ed6\u5177\u4f53\u65b9\u6cd5\uff0c\u8fd9\u91cc\u53ea\u4f1a\u5904\u7406\u8fd9\u4e9b\u65b9\u6cd5\u7684@Bean\u6ce8\u89e3\n        processInterfaces(configClass, sourceClass);\n\n        // \u5904\u7406\u7236\u7c7b\n        if (sourceClass.getMetadata().hasSuperClass()) {\n\n            String superclass = sourceClass.getMetadata().getSuperClassName();\n            // java\u5305\u7684\u7236\u7c7b\u548c\u5df2\u7ecf\u5904\u7406\u8fc7\u7684\u7236\u7c7b\u4e0d\u5904\u7406\n            if (superclass != null && !superclass.startsWith("java") &&\n                    !this.knownSuperclasses.containsKey(superclass)) {\n                // \u6807\u8bb0\u7236\u7c7b\u5df2\u7ecf\u5904\u7406\u8fc7\n                this.knownSuperclasses.put(superclass, configClass);\n                // \u8fd4\u56de\u7236\u7c7b\u7684SourceClass\u518d\u6b21\u8fdb\u884c\u9012\u5f52\u5904\u7406\n                return sourceClass.getSuperClass();\n            }\n        }\n        // \u6ca1\u6709\u7236\u7c7b\u5904\u7406\u5b8c\u6210\n        return null;\n    }\n')),(0,s.kt)("h5",{id:"211--component\u6ce8\u89e3\u7684\u5904\u7406"},"2.1.1  @Component\u6ce8\u89e3\u7684\u5904\u7406"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"//\u5224\u65ad@configuration\u6ce8\u89e3\u7684\u7c7b\u4e0a\u9762\u662f\u5426\u5305\u542b\u6709@Component\u6ce8\u89e3 \nif (configClass.getMetadata().isAnnotated(Component.class.getName())) {\n    processMemberClasses(configClass, sourceClass);\n}\n")),(0,s.kt)("h5",{id:"212-propertysourcespropertysource-\u6ce8\u89e3\u7684\u89e3\u6790"},"2.1.2 @PropertySources\u3001@PropertySource \u6ce8\u89e3\u7684\u89e3\u6790"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"        for (AnnotationAttributes propertySource : AnnotationConfigUtils.attributesForRepeatable(\n                sourceClass.getMetadata(), PropertySources.class,\n                org.springframework.context.annotation.PropertySource.class)) {\n            if (this.environment instanceof ConfigurableEnvironment) {\n                processPropertySource(propertySource);\n            }\n            else {\n                //\u7701\u7565\u6253\u5370\u65e5\u5fd7\n            }\n        }\n")),(0,s.kt)("h5",{id:"213-componentscansclass-componentscanclass\u6ce8\u89e3\u7684\u89e3\u6790"},"2.1.3 @ComponentScans.class, @ComponentScan.class\u6ce8\u89e3\u7684\u89e3\u6790"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"        Set<AnnotationAttributes> componentScans = AnnotationConfigUtils.attributesForRepeatable(\n                sourceClass.getMetadata(), ComponentScans.class, ComponentScan.class);\n        if (!componentScans.isEmpty() &&\n                !this.conditionEvaluator.shouldSkip(sourceClass.getMetadata(), ConfigurationPhase.REGISTER_BEAN)) {\n            for (AnnotationAttributes componentScan : componentScans) {\n                //\u6dfb\u52a0\u6709@ComponentScan\u6ce8\u89e3\u7684\u7c7b -> \u7acb\u523b\u626b\u63cf\n                Set<BeanDefinitionHolder> scannedBeanDefinitions =\n                        this.componentScanParser.parse(componentScan, sourceClass.getMetadata().getClassName());\n                //\u68c0\u67e5\u5df2\u626b\u63cf\u7684\u5b9a\u4e49\u96c6\u4ee5\u83b7\u5f97\u66f4\u591a\u7684\u914d\u7f6e\u7c7b\uff0c\u5e76\u5728\u9700\u8981\u65f6\u8fdb\u884c\u9012\u5f52\u89e3\u6790\n                for (BeanDefinitionHolder holder : scannedBeanDefinitions) {\n                    BeanDefinition bdCand = holder.getBeanDefinition().getOriginatingBeanDefinition();\n                    if (bdCand == null) {\n                        bdCand = holder.getBeanDefinition();\n                    }\n                    //\u5224\u65ad\u662f\u5426\u6709\u914d\u7f6e@Configuration\uff0c\u7136\u540e\u9012\u5f52\u8c03\u7528\u89e3\u6790\n                    if (ConfigurationClassUtils.checkConfigurationClassCandidate(bdCand, this.metadataReaderFactory)) {\n                        parse(bdCand.getBeanClassName(), holder.getBeanName());\n                    }\n                }\n            }\n        }\n")),(0,s.kt)("h5",{id:"214-import\u6ce8\u89e3\u7684\u89e3\u6790"},"2.1.4 @Import\u6ce8\u89e3\u7684\u89e3\u6790"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'// Process any @Import annotations\nprocessImports(configClass, sourceClass, getImports(sourceClass), true);\n\nprivate void processImports(ConfigurationClass configClass, SourceClass currentSourceClass,\n            Collection<SourceClass> importCandidates, boolean checkForCircularImports) {\n\n        if (importCandidates.isEmpty()) {\n            return;\n        }\n\n        if (checkForCircularImports && isChainedImportOnStack(configClass)) {\n            this.problemReporter.error(new CircularImportProblem(configClass, this.importStack));\n        }\n        else {\n            this.importStack.push(configClass);\n            try {\n                for (SourceClass candidate : importCandidates) {\n                    if (candidate.isAssignable(ImportSelector.class)) {\n                        // \u5904\u7406ImportSelector\u5b9e\u73b0\u7c7b\n                        Class<?> candidateClass = candidate.loadClass();\n                        ImportSelector selector = ParserStrategyUtils.instantiateClass(candidateClass, ImportSelector.class,\n                                this.environment, this.resourceLoader, this.registry);\n                        if (selector instanceof DeferredImportSelector) {\n                            //\u5224\u65ad\u662f\u5426\u4e3aDeferredImportSelector\u7684\u5b9e\u73b0--\u5ef6\u8fdf\u5904\u7406\n                            this.deferredImportSelectorHandler.handle(configClass, (DeferredImportSelector) selector);\n                        }\n                        else {\n                            String[] importClassNames = selector.selectImports(currentSourceClass.getMetadata());\n                            Collection<SourceClass> importSourceClasses = asSourceClasses(importClassNames);\n                            processImports(configClass, currentSourceClass, importSourceClasses, false);\n                        }\n                    }\n                    else if (candidate.isAssignable(ImportBeanDefinitionRegistrar.class)) {\n                        //ImportBeanDefinitionRegistrar\u63a5\u53e3\u5b9e\u73b0\u7684\u7684\u5904\u7406\n                        Class<?> candidateClass = candidate.loadClass();\n                        ImportBeanDefinitionRegistrar registrar =\n                                ParserStrategyUtils.instantiateClass(candidateClass, ImportBeanDefinitionRegistrar.class,\n                                        this.environment, this.resourceLoader, this.registry);\n                        configClass.addImportBeanDefinitionRegistrar(registrar, currentSourceClass.getMetadata());\n                    }\n                    else {\n                        // \u5f53\u505aConfig\u7c7b\u6765\u5904\u7406\n                        this.importStack.registerImport(\n                                currentSourceClass.getMetadata(), candidate.getMetadata().getClassName());\n                        processConfigurationClass(candidate.asConfigClass(configClass));\n                    }\n                }\n            }\n            catch (BeanDefinitionStoreException ex) {\n                throw ex;\n            }\n            catch (Throwable ex) {\n                throw new BeanDefinitionStoreException(\n                        "Failed to process import candidates for configuration class [" +\n                        configClass.getMetadata().getClassName() + "]", ex);\n            }\n            finally {\n                this.importStack.pop();\n            }\n        }\n    }\n')),(0,s.kt)("h5",{id:"215-importresource\u6ce8\u89e3\u7684\u89e3\u6790"},"2.1.5 @ImportResource\u6ce8\u89e3\u7684\u89e3\u6790"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'        AnnotationAttributes importResource =\n                AnnotationConfigUtils.attributesFor(sourceClass.getMetadata(), ImportResource.class);\n        if (importResource != null) {\n            String[] resources = importResource.getStringArray("locations");\n            Class<? extends BeanDefinitionReader> readerClass = importResource.getClass("reader");\n            for (String resource : resources) {\n                String resolvedResource = this.environment.resolveRequiredPlaceholders(resource);\n                configClass.addImportedResource(resolvedResource, readerClass);\n            }\n        }\n')),(0,s.kt)("h5",{id:"216-configuration\u914d\u7f6e\u7c7b\u4e2dbean\u6ce8\u89e3\u7684\u89e3\u6790"},"2.1.6 @Configuration\u914d\u7f6e\u7c7b\u4e2d@Bean\u6ce8\u89e3\u7684\u89e3\u6790"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"Set<MethodMetadata> beanMethods = retrieveBeanMethodMetadata(sourceClass);\nfor (MethodMetadata methodMetadata : beanMethods) {\n    configClass.addBeanMethod(new BeanMethod(methodMetadata, configClass));\n}\n")),(0,s.kt)("h3",{id:"3-\u7ec8\u7ed3"},"3. \u7ec8\u7ed3"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"@Import\u81ea\u5b9a\u4e49\u6ce8\u89e3\u7684\u65f6\u5019\u53ef\u4ee5\u653e\u5728Bean\u4e0a\u9762")))}g.isMDXComponent=!0}}]);