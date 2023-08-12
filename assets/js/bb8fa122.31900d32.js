"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[1147],{3905:(n,e,t)=>{t.d(e,{Zo:()=>p,kt:()=>f});var a=t(7294);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function s(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function o(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?s(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function i(n,e){if(null==n)return{};var t,a,r=function(n,e){if(null==n)return{};var t,a,r={},s=Object.keys(n);for(a=0;a<s.length;a++)t=s[a],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);for(a=0;a<s.length;a++)t=s[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var l=a.createContext({}),c=function(n){var e=a.useContext(l),t=e;return n&&(t="function"==typeof n?n(e):o(o({},e),n)),t},p=function(n){var e=c(n.components);return a.createElement(l.Provider,{value:e},n.children)},g="mdxType",d={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(n,e){var t=n.components,r=n.mdxType,s=n.originalType,l=n.parentName,p=i(n,["components","mdxType","originalType","parentName"]),g=c(t),u=r,f=g["".concat(l,".").concat(u)]||g[u]||d[u]||s;return t?a.createElement(f,o(o({ref:e},p),{},{components:t})):a.createElement(f,o({ref:e},p))}));function f(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var s=t.length,o=new Array(s);o[0]=u;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=n,i[g]="string"==typeof n?n:r,o[1]=i;for(var c=2;c<s;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},1949:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var a=t(7462),r=(t(7294),t(3905));const s={title:"spring\u6ce8\u89e3\u6e90\u7801\u89e3\u6790\u4e4b-\u914d\u7f6e\u7c7b\u6ce8\u89e3",linkTitle:"spring\u6ce8\u89e3\u6e90\u7801\u89e3\u6790\u4e4b-\u914d\u7f6e\u7c7b\u6ce8\u89e3",date:new Date("2018-03-09T00:00:00.000Z"),weight:3},o=void 0,i={unversionedId:"spring/spring-framework/annotation-source-analysis/config-annotation",id:"spring/spring-framework/annotation-source-analysis/config-annotation",title:"spring\u6ce8\u89e3\u6e90\u7801\u89e3\u6790\u4e4b-\u914d\u7f6e\u7c7b\u6ce8\u89e3",description:"1. Spring\u914d\u7f6e\u7c7b\u6ce8\u89e3",source:"@site/docs/spring/spring-framework/annotation-source-analysis/config-annotation.md",sourceDirName:"spring/spring-framework/annotation-source-analysis",slug:"/spring/spring-framework/annotation-source-analysis/config-annotation",permalink:"/docs/spring/spring-framework/annotation-source-analysis/config-annotation",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/spring/spring-framework/annotation-source-analysis/config-annotation.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1691846266,formattedLastUpdatedAt:"Aug 12, 2023",frontMatter:{title:"spring\u6ce8\u89e3\u6e90\u7801\u89e3\u6790\u4e4b-\u914d\u7f6e\u7c7b\u6ce8\u89e3",linkTitle:"spring\u6ce8\u89e3\u6e90\u7801\u89e3\u6790\u4e4b-\u914d\u7f6e\u7c7b\u6ce8\u89e3",date:"2018-03-09T00:00:00.000Z",weight:3}},l={},c=[{value:"1. Spring\u914d\u7f6e\u7c7b\u6ce8\u89e3",id:"1-spring\u914d\u7f6e\u7c7b\u6ce8\u89e3",level:3},{value:"2. Spring\u914d\u7f6e\u7c7b\u6ce8\u89e3\u6e90\u7801\u89e3\u6790",id:"2-spring\u914d\u7f6e\u7c7b\u6ce8\u89e3\u6e90\u7801\u89e3\u6790",level:3},{value:"3. ConfigurationClassPostProcessor\u5982\u4f55\u6ce8\u5165\u5230Spring Application\u4e2d",id:"3-configurationclasspostprocessor\u5982\u4f55\u6ce8\u5165\u5230spring-application\u4e2d",level:3}],p={toc:c},g="wrapper";function d(n){let{components:e,...t}=n;return(0,r.kt)(g,(0,a.Z)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"1-spring\u914d\u7f6e\u7c7b\u6ce8\u89e3"},"1. Spring\u914d\u7f6e\u7c7b\u6ce8\u89e3"),(0,r.kt)("p",null,"\u5728Spring\u4e2d\u7684\u914d\u7f6e\u7c7b\u4e3b\u8981\u5305\u542b\u4e94\u4e2a\u6ce8\u89e3\uff1a  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Component")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"ComponentScan")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Import")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"ImportResource")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Configuration"))),(0,r.kt)("h3",{id:"2-spring\u914d\u7f6e\u7c7b\u6ce8\u89e3\u6e90\u7801\u89e3\u6790"},"2. Spring\u914d\u7f6e\u7c7b\u6ce8\u89e3\u6e90\u7801\u89e3\u6790"),(0,r.kt)("p",null,"\u914d\u7f6e\u7c7b\u6ce8\u89e3\u4e3b\u8981\u662f\u7531 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},(0,r.kt)("inlineCode",{parentName:"em"},"ConfigurationClassPostProcessor")))," \u6765\u5904\u7406\u3002\u4e0b\u9762\u770b\u4e00\u4e0b\u6e90\u7801\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public class ConfigurationClassPostProcessor implements BeanDefinitionRegistryPostProcessor,\n        PriorityOrdered, ResourceLoaderAware, BeanClassLoaderAware, EnvironmentAware {\n    //\u7701\u7565\u5404\u79cd\u4ee3\u7801            \n}\n")),(0,r.kt)("p",null,"\u5b9e\u73b0\u4e86 ",(0,r.kt)("strong",{parentName:"p"},"BeanDefinitionRegistryPostProcessor")," \u63a5\u53e3\u3002\u8be5\u63a5\u53e3\u662f ",(0,r.kt)("strong",{parentName:"p"},"BeanFactoryPostProcessor")," \u7ee7\u627f\u800c\u6765\u3002\u8fd9\u4e2a\u63a5\u53e3\u4e3b\u8981\u7528\u6765\u5904\u7406\u7c7b\u4e0a\u9762\u7684\u6ce8\u89e3\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'    @Override\n    public void postProcessBeanDefinitionRegistry(BeanDefinitionRegistry registry) {\n        int registryId = System.identityHashCode(registry);\n        if (this.registriesPostProcessed.contains(registryId)) {\n            throw new IllegalStateException(\n                    "postProcessBeanDefinitionRegistry already called on this post-processor against " + registry);\n        }\n        if (this.factoriesPostProcessed.contains(registryId)) {\n            throw new IllegalStateException(\n                    "postProcessBeanFactory already called on this post-processor against " + registry);\n        }\n        this.registriesPostProcessed.add(registryId);\n        //\u5904\u7406\u65b9\u6cd5\n        processConfigBeanDefinitions(registry);\n    }\n\n')),(0,r.kt)("p",null,"\u901a\u8fc7\u6e90\u7801\u53ef\u4ee5\u770b\u51fa\u6765\u4e3b\u8981\u662f\u901a\u8fc7 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"ConfigurationClassPostProcessor"),"#processConfigBeanDefinitions")," \u65b9\u6cd5\u5904\u7406\u3002\u4e0b\u9762\u6765\u770b\u4e00\u4e0b\u65b9\u6cd5 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"processConfigBeanDefinitions"))," \u6e90\u7801\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public void processConfigBeanDefinitions(BeanDefinitionRegistry registry) {\n    List<BeanDefinitionHolder> configCandidates = new ArrayList<>();\n    //\u83b7\u53d6Bean\u7684\u5b9a\u4e49\u540d\u79f0\n    String[] candidateNames = registry.getBeanDefinitionNames();\n    \n    for (String beanName : candidateNames) {\n        BeanDefinition beanDef = registry.getBeanDefinition(beanName);\n        if (beanDef.getAttribute(ConfigurationClassUtils.CONFIGURATION_CLASS_ATTRIBUTE) != null) {\n            //\u7701\u7565\u6253\u5370\u65e5\u5fd7\n        }\n        //\u5224\u65ad\u662f\u5426\u4e3aConfigurationClass\n        else if (ConfigurationClassUtils.checkConfigurationClassCandidate(beanDef, this.metadataReaderFactory)) {\n            configCandidates.add(new BeanDefinitionHolder(beanDef, beanName));\n        }\n    }\n    //\u7701\u7565\u540e\u7eed\u5904\u7406\u4ee3\u7801\n}\n")),(0,r.kt)("p",null,"\u901a\u8fc7\u4ee3\u7801\u53d1\u73b0\u4e3b\u8981\u662f\u901a\u8fc7 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"ConfigurationClassUtils.checkConfigurationClassCandidate"))," \u65b9\u6cd5\u6765\u6821\u9a8c\u662f\u5426\u4e3a ",(0,r.kt)("strong",{parentName:"p"},"ConfigurationClass")," \u3002\u90a3\u4e48\u6765\u7814\u7a76\u4e00\u4e0b\u65b9\u6cd5 ",(0,r.kt)("strong",{parentName:"p"},"checkConfigurationClassCandidate")," \uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public static boolean checkConfigurationClassCandidate(\n            BeanDefinition beanDef, MetadataReaderFactory metadataReaderFactory) {\n    //\u7701\u7565\u90e8\u5206\u4ee3\u7801\n    \n    //\u83b7\u53d6\u662f\u5426Configuration\u4fee\u9970\u7684\u7c7b\n    Map<String, Object> config = metadata.getAnnotationAttributes(Configuration.class.getName());\n        if (config != null && !Boolean.FALSE.equals(config.get("proxyBeanMethods"))) {\n            beanDef.setAttribute(CONFIGURATION_CLASS_ATTRIBUTE, CONFIGURATION_CLASS_FULL);\n        }\n        //\u5224\u65ad\u662f\u5426\u4e3aComponent\u3001ComponentScan\u3001Import\u3001ImportResource\u4e2d\u7684\u4e00\u4e2a\n        else if (config != null || isConfigurationCandidate(metadata)) {\n            beanDef.setAttribute(CONFIGURATION_CLASS_ATTRIBUTE, CONFIGURATION_CLASS_LITE);\n        }\n        else {\n            return false;\n        }\n    //\u7701\u7565\u90e8\u5206\u4ee3\u7801\n    \n    return true;\n}\n\n//isConfigurationCandidate\u6e90\u7801\npublic static boolean isConfigurationCandidate(AnnotationMetadata metadata) {\n        // \u5224\u65ad\u662f\u5426\u4e3a\u63a5\u53e3\n        if (metadata.isInterface()) {\n            return false;\n        }\n\n        // \u662f\u5426\u4e3aComponent\u3001ComponentScan\u3001Import\u3001ImportResource\u914d\u7f6e\u7c7b\u4e2d\u7684\u4e00\u4e2a\n        for (String indicator : candidateIndicators) {\n            if (metadata.isAnnotated(indicator)) {\n                return true;\n            }\n        }\n\n        // \u67e5\u8be2\u662f\u5426\u6709\u88ab@Bean\u6ce8\u89e3\u4fee\u590d\u7684\u65b9\u6cd5\n        try {\n            return metadata.hasAnnotatedMethods(Bean.class.getName());\n        }\n        catch (Throwable ex) {\n            //\u7701\u7565\u65e5\u5fd7\u6253\u5370\n            return false;\n        }\n    }\n')),(0,r.kt)("p",null,"\u901a\u8fc7\u6e90\u7801\u5206\u6790\u53ef\u4ee5\u53d1\u73b0\u914d\u7f6eClass\u5206\u4e3a\u4e24\u7c7b\uff1a  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"full configurationClass")),(0,r.kt)("p",{parentName:"li"},"Spring\u4e2d\u79f0\u4e3afull configurationClass,\u8fd9\u4e2a\u662f\u7531\u6ce8\u89e3@Configuration\u6ce8\u89e3\u4fee\u9970\u7684\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"lite configurationClass")),(0,r.kt)("p",{parentName:"li"},"Spring\u4e2d\u79f0\u4e3alite configurationClass\uff0c\u4e5f\u5c31\u662f\u8f7b\u91cf\u7ea7\u7684\u914d\u7f6e\u7c7b\uff0c\u7531\u6ce8\u89e3@Component\u3001@ComponentScan\u3001@Import\u3001@ImportResource"))),(0,r.kt)("p",null,"\u5728\u6765\u770b\u4e00\u4e0b ",(0,r.kt)("strong",{parentName:"p"},"ConfigurationClassPostProcessor",(0,r.kt)("em",{parentName:"strong"},"#"),"processConfigBeanDefinitions*")," \u4e2d\u662f\u5982\u4f55\u6765\u5904\u7406configurationClass\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public void processConfigBeanDefinitions(BeanDefinitionRegistry registry) {\n    \n    //\u7701\u7565\u4ee3\u7801\n    \n    //configCandidates\u7684\u5904\u7406\u4ee3\u7801\u5982\u4e0b\n    \n    //ConfigurationClassParser\u5904\u7406\u7c7b\u6765\u5904\u7406configCandidates\n    ConfigurationClassParser parser = new ConfigurationClassParser(\n                this.metadataReaderFactory, this.problemReporter, this.environment,\n                this.resourceLoader, this.componentScanBeanNameGenerator, registry);\n\n        Set<BeanDefinitionHolder> candidates = new LinkedHashSet<>(configCandidates);\n        Set<ConfigurationClass> alreadyParsed = new HashSet<>(configCandidates.size());\n        do {\n            //\u89e3\u6790candidates\n            parser.parse(candidates);\n            parser.validate();\n            \n            //\u83b7\u53d6\u89e3\u6790\u540e\u7684\u914d\u7f6e\u7c7b\n            Set<ConfigurationClass> configClasses = new LinkedHashSet<>(parser.getConfigurationClasses());\n            configClasses.removeAll(alreadyParsed);\n\n            // \u521b\u5efa\u89e3\u6790\u540e\u7684\u914d\u7f6e\u7c7bBean\n            if (this.reader == null) {\n                this.reader = new ConfigurationClassBeanDefinitionReader(\n                        registry, this.sourceExtractor, this.resourceLoader, this.environment,\n                        this.importBeanNameGenerator, parser.getImportRegistry());\n            }\n            this.reader.loadBeanDefinitions(configClasses);\n            alreadyParsed.addAll(configClasses);\n\n            candidates.clear();\n            //\u5faa\u73af\u5904\u7406\n            if (registry.getBeanDefinitionCount() > candidateNames.length) {\n                String[] newCandidateNames = registry.getBeanDefinitionNames();\n                Set<String> oldCandidateNames = new HashSet<>(Arrays.asList(candidateNames));\n                Set<String> alreadyParsedClasses = new HashSet<>();\n                for (ConfigurationClass configurationClass : alreadyParsed) {\n                    alreadyParsedClasses.add(configurationClass.getMetadata().getClassName());\n                }\n                for (String candidateName : newCandidateNames) {\n                    if (!oldCandidateNames.contains(candidateName)) {\n                        BeanDefinition bd = registry.getBeanDefinition(candidateName);\n                        if (ConfigurationClassUtils.checkConfigurationClassCandidate(bd, this.metadataReaderFactory) &&\n                                !alreadyParsedClasses.contains(bd.getBeanClassName())) {\n                            candidates.add(new BeanDefinitionHolder(bd, candidateName));\n                        }\n                    }\n                }\n                candidateNames = newCandidateNames;\n            }\n        }\n        while (!candidates.isEmpty());    \n    \n}\n")),(0,r.kt)("p",null,"\u901a\u8fc7\u4ee3\u7801\u5206\u6790\u4e0a\u9762\u7684\u4ee3\u7801\u4e3b\u8981\u5904\u7406ConfigurationClass\u662f\u901a\u8fc7 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"ConfigurationClassParser"))," \u89e3\u6790\u5668\u6765\u5904\u7406\u3002\u4e0b\u9762\u770b\u4e00\u4e0b\u89e3\u6790\u5668\u7684 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"ConfigurationClassParser#parse"))," \u65b9\u6cd5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'    public void parse(Set<BeanDefinitionHolder> configCandidates) {\n        for (BeanDefinitionHolder holder : configCandidates) {\n            BeanDefinition bd = holder.getBeanDefinition();\n            try {\n                if (bd instanceof AnnotatedBeanDefinition) {\n                    parse(((AnnotatedBeanDefinition) bd).getMetadata(), holder.getBeanName());\n                }\n                else if (bd instanceof AbstractBeanDefinition && ((AbstractBeanDefinition) bd).hasBeanClass()) {\n                    parse(((AbstractBeanDefinition) bd).getBeanClass(), holder.getBeanName());\n                }\n                else {\n                    parse(bd.getBeanClassName(), holder.getBeanName());\n                }\n            }\n            catch (BeanDefinitionStoreException ex) {\n                throw ex;\n            }\n            catch (Throwable ex) {\n                throw new BeanDefinitionStoreException(\n                        "Failed to parse configuration class [" + bd.getBeanClassName() + "]", ex);\n            }\n        }\n        //\u5904\u7406DeferredImportSelector\u63a5\u53e3\n        this.deferredImportSelectorHandler.process();\n    }\n')),(0,r.kt)("p",null,"\u901a\u8fc7\u4e0a\u9762\u4ee3\u7801\u53ef\u4ee5\u770b\u51fa\u6765\u4e3b\u8981\u662f\u5206\u4e3a\u4e24\u90e8\u5206\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"ConfigurationClassParser#parse ConfigurationClass\u89e3\u6790")),(0,r.kt)("p",{parentName:"li"}," ConfigurationClassParser#parse\u662f\u4e00\u4e2a\u7a7a\u58f3\u65b9\u6cd5\uff0c\u5f53\u4e2d\u8c03\u7528\u4e86\u4e00\u4e2a ConfigurationClassParser#processConfigurationClass\u65b9\u6cd5")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"DeferredImportSelector\u63a5\u53e3\u7684\u5904\u7406")))),(0,r.kt)("p",null,"\u4e0b\u9762\u6765\u5206\u6790\u4e00\u4e0b ",(0,r.kt)("strong",{parentName:"p"},"ConfigurationClassParser#processConfigurationClass")," \u65b9\u6cd5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"protected void processConfigurationClass(ConfigurationClass configClass) throws IOException {\n        //\u6761\u4ef6\u52a0\u8f7d\u7684\u5224\u5b9a\u4e4b\u524d\u6709\u5206\u6790\u8fc7@Conditional\u6ce8\u89e3\n        if (this.conditionEvaluator.shouldSkip(configClass.getMetadata(), ConfigurationPhase.PARSE_CONFIGURATION)) {\n            return;\n        }\n\n        ConfigurationClass existingClass = this.configurationClasses.get(configClass);\n        //\u7701\u7565\u90e8\u5206\u4ee3\u7801\n        SourceClass sourceClass = asSourceClass(configClass);\n        do {\n            //\u5904\u7406ConfigurationClass\n            sourceClass = doProcessConfigurationClass(configClass, sourceClass);\n        }\n        while (sourceClass != null);\n\n        this.configurationClasses.put(configClass, configClass);\n    }\n")),(0,r.kt)("p",null,"\u4ee3\u7801\u5206\u6790\u53ef\u4ee5\u770b\u51fa\u6765\u4e3b\u8981\u662f\u901a\u8fc7 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"doProcessConfigurationClass"))," \u65b9\u6cd5\u6765\u5904\u7406ConfigurationClass\u7c7b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'protected final SourceClass doProcessConfigurationClass(ConfigurationClass configClass, SourceClass sourceClass)\n            throws IOException {\n\n        //@Component\u6ce8\u89e3\u5904\u7406\n        if (configClass.getMetadata().isAnnotated(Component.class.getName())) {\n            processMemberClasses(configClass, sourceClass);\n        }\n\n        // @PropertySource\u6ce8\u89e3\u5904\u7406\n        for (AnnotationAttributes propertySource : AnnotationConfigUtils.attributesForRepeatable(\n                sourceClass.getMetadata(), PropertySources.class,\n                org.springframework.context.annotation.PropertySource.class)) {\n            if (this.environment instanceof ConfigurableEnvironment) {\n                processPropertySource(propertySource);\n            }\n            else {\n                //\u7701\u7565\u65e5\u5fd7\u6253\u5370\n            }\n        }\n        // @ComponentScan \u6ce8\u89e3\u5904\u7406\n        Set<AnnotationAttributes> componentScans = AnnotationConfigUtils.attributesForRepeatable(\n                sourceClass.getMetadata(), ComponentScans.class, ComponentScan.class);\n        if (!componentScans.isEmpty() &&\n                !this.conditionEvaluator.shouldSkip(sourceClass.getMetadata(), ConfigurationPhase.REGISTER_BEAN)) {\n            for (AnnotationAttributes componentScan : componentScans) {\n                // The config class is annotated with @ComponentScan -> perform the scan immediately\n                Set<BeanDefinitionHolder> scannedBeanDefinitions =\n                        this.componentScanParser.parse(componentScan, sourceClass.getMetadata().getClassName());\n                // Check the set of scanned definitions for any further config classes and parse recursively if needed\n                for (BeanDefinitionHolder holder : scannedBeanDefinitions) {\n                    BeanDefinition bdCand = holder.getBeanDefinition().getOriginatingBeanDefinition();\n                    if (bdCand == null) {\n                        bdCand = holder.getBeanDefinition();\n                    }\n                    if (ConfigurationClassUtils.checkConfigurationClassCandidate(bdCand, this.metadataReaderFactory)) {\n                        parse(bdCand.getBeanClassName(), holder.getBeanName());\n                    }\n                }\n            }\n        }\n\n        // @Import \u6ce8\u89e3\u5904\u7406\n        processImports(configClass, sourceClass, getImports(sourceClass), true);\n        // @ImportResource \u6ce8\u89e3\u5904\u7406\n        AnnotationAttributes importResource =\n                AnnotationConfigUtils.attributesFor(sourceClass.getMetadata(), ImportResource.class);\n        if (importResource != null) {\n            String[] resources = importResource.getStringArray("locations");\n            Class<? extends BeanDefinitionReader> readerClass = importResource.getClass("reader");\n            for (String resource : resources) {\n                String resolvedResource = this.environment.resolveRequiredPlaceholders(resource);\n                configClass.addImportedResource(resolvedResource, readerClass);\n            }\n        }\n\n        // @Bean \u6ce8\u89e3\u65b9\u6cd5\u5904\u7406\n        Set<MethodMetadata> beanMethods = retrieveBeanMethodMetadata(sourceClass);\n        for (MethodMetadata methodMetadata : beanMethods) {\n            configClass.addBeanMethod(new BeanMethod(methodMetadata, configClass));\n        }\n\n        // \u5904\u7406\u9ed8\u8ba4\u7684\u63a5\u53e3\u65b9\u6cd5\n        processInterfaces(configClass, sourceClass);\n\n        // \u5904\u7406\u7236\u7c7b\n        if (sourceClass.getMetadata().hasSuperClass()) {\n            String superclass = sourceClass.getMetadata().getSuperClassName();\n            if (superclass != null && !superclass.startsWith("java") &&\n                    !this.knownSuperclasses.containsKey(superclass)) {\n                this.knownSuperclasses.put(superclass, configClass);\n                // Superclass found, return its annotation metadata and recurse\n                return sourceClass.getSuperClass();\n            }\n        }\n        return null;\n    }       \n')),(0,r.kt)("p",null,"\u901a\u4e0a\u9762\u7684\u4ee3\u7801\u53ef\u4ee5\u53d1\u73b0\u4e3b\u8981\u5904\u7406\u4e86\u8fd9\u6837\u51e0\u4e2a\u6ce8\u89e3\uff1a  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"@Component\u6ce8\u89e3\u5904\u7406")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"@PropertySource\u6ce8\u89e3\u5904\u7406")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"@ComponentScan \u6ce8\u89e3\u5904\u7406")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"@Import \u6ce8\u89e3\u5904\u7406")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"@ImportResource \u6ce8\u89e3\u5904\u7406")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"@Bean \u6ce8\u89e3\u65b9\u6cd5\u5904\u7406")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u5904\u7406\u9ed8\u8ba4\u7684\u63a5\u53e3\u65b9\u6cd5")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u5904\u7406\u7236\u7c7b"))),(0,r.kt)("p",null,"\u5206\u6790\u5230\u8fd9\u91cc\u5c31\u53ef\u4ee5\u770b\u51fa\u6765\uff0c ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"ConfigurationClassPostProcessor"))," \u7c7b\u4e3b\u8981\u662f\u5904\u7406\u4e00\u4e0b\u7684\u51e0\u4e2a\u6ce8\u89e3\uff1a ",(0,r.kt)("strong",{parentName:"p"},"Component\u3001PropertySources\u3001PropertySource\u3001ComponentScans\u3001ComponentScan\u3001Import\u3001ImportResource\u3001Bean")," \u3002"),(0,r.kt)("h3",{id:"3-configurationclasspostprocessor\u5982\u4f55\u6ce8\u5165\u5230spring-application\u4e2d"},"3. ConfigurationClassPostProcessor\u5982\u4f55\u6ce8\u5165\u5230Spring Application\u4e2d"),(0,r.kt)("p",null,"\u901a\u8fc7 ",(0,r.kt)("strong",{parentName:"p"},"AnnotationConfigUtils")," \u7c7b\u4e2d\u7684\u9759\u6001\u65b9\u6cd5 ",(0,r.kt)("strong",{parentName:"p"},"registerAnnotationConfigProcessors")," \u6ce8\u5165\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public static final String CONFIGURATION_ANNOTATION_PROCESSOR_BEAN_NAME =\n            "org.springframework.context.annotation.internalConfigurationAnnotationProcessor";\n\n//\nif (!registry.containsBeanDefinition(CONFIGURATION_ANNOTATION_PROCESSOR_BEAN_NAME)) {\n            RootBeanDefinition def = new RootBeanDefinition(ConfigurationClassPostProcessor.class);\n            def.setSource(source);\n            beanDefs.add(registerPostProcessor(registry, def, CONFIGURATION_ANNOTATION_PROCESSOR_BEAN_NAME));\n        }\n')))}d.isMDXComponent=!0}}]);