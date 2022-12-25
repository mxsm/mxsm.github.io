"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[2453],{3905:(e,r,n)=>{n.d(r,{Zo:()=>p,kt:()=>g});var o=n(7294);function t(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function s(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?s(Object(n),!0).forEach((function(r){t(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,o,t=function(e,r){if(null==e)return{};var n,o,t={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],r.indexOf(n)>=0||(t[n]=e[n]);return t}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var c=o.createContext({}),P=function(e){var r=o.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},p=function(e){var r=P(e.components);return o.createElement(c.Provider,{value:r},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},y=o.forwardRef((function(e,r){var n=e.components,t=e.mdxType,s=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),l=P(n),y=t,g=l["".concat(c,".").concat(y)]||l[y]||d[y]||s;return n?o.createElement(g,a(a({ref:r},p),{},{components:n})):o.createElement(g,a({ref:r},p))}));function g(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var s=n.length,a=new Array(s);a[0]=y;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i[l]="string"==typeof e?e:t,a[1]=i;for(var P=2;P<s;P++)a[P]=n[P];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}y.displayName="MDXCreateElement"},8936:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>s,metadata:()=>i,toc:()=>P});var o=n(7462),t=(n(7294),n(3905));const s={title:"BeanFactoryPostProcessor\u8be6\u89e3",date:new Date("2019-02-13T00:00:00.000Z"),weight:6},a=void 0,i={unversionedId:"spring/spring-framework/core-source-analysis/BeanFactoryPostProcessor",id:"spring/spring-framework/core-source-analysis/BeanFactoryPostProcessor",title:"BeanFactoryPostProcessor\u8be6\u89e3",description:"1. BeanFactoryPostProcessor\u7ee7\u627f\u5173\u7cfb",source:"@site/docs/spring/spring-framework/core-source-analysis/BeanFactoryPostProcessor.md",sourceDirName:"spring/spring-framework/core-source-analysis",slug:"/spring/spring-framework/core-source-analysis/BeanFactoryPostProcessor",permalink:"/docs/spring/spring-framework/core-source-analysis/BeanFactoryPostProcessor",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/spring/spring-framework/core-source-analysis/BeanFactoryPostProcessor.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1671958290,formattedLastUpdatedAt:"Dec 25, 2022",frontMatter:{title:"BeanFactoryPostProcessor\u8be6\u89e3",date:"2019-02-13T00:00:00.000Z",weight:6},sidebar:"springframework",previous:{title:"BeanDefinition\u8be6\u89e3",permalink:"/docs/spring/spring-framework/core-source-analysis/BeanDefinition"},next:{title:"BeanPostProcessor\u76f8\u5173\u63a5\u53e3\u6267\u884c\u7684\u65b9\u6cd5",permalink:"/docs/spring/spring-framework/core-source-analysis/BeanPostProcessor-exe-method"}},c={},P=[{value:"1. BeanFactoryPostProcessor\u7ee7\u627f\u5173\u7cfb",id:"1-beanfactorypostprocessor\u7ee7\u627f\u5173\u7cfb",level:3},{value:"2. BeanFactoryPostProcessor\u5728Spring\u4e2d\u5982\u4f55\u5de5\u4f5c\u7684\u6e90\u7801\u5206\u6790",id:"2-beanfactorypostprocessor\u5728spring\u4e2d\u5982\u4f55\u5de5\u4f5c\u7684\u6e90\u7801\u5206\u6790",level:3},{value:"3. \u603b\u7ed3",id:"3-\u603b\u7ed3",level:3}],p={toc:P};function l(e){let{components:r,...n}=e;return(0,t.kt)("wrapper",(0,o.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,t.kt)("h3",{id:"1-beanfactorypostprocessor\u7ee7\u627f\u5173\u7cfb"},"1. BeanFactoryPostProcessor\u7ee7\u627f\u5173\u7cfb"),(0,t.kt)("p",null,(0,t.kt)("img",{parentName:"p",src:"https://github.com/mxsm/document/blob/master/image/Spring/Springframework/BeanFactoryPostProcessor.png?raw=true",alt:"\u56fe"})),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},(0,t.kt)("inlineCode",{parentName:"strong"},"BeanFactoryPostProcessor"))," \u4e3b\u8981\u7528\u6765\u5904\u7406\u6ce8\u5165Bean\u5230BeanFactory\u4e2d\u4ee5\u53caBean\u7c7b\u4e0a\u9762\u7684\u6ce8\u89e3\uff0c\u6bd4\u5982 ",(0,t.kt)("strong",{parentName:"p"},"@Configuration")),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},(0,t.kt)("strong",{parentName:"p"},"PropertySourcesPlaceholderConfigurer\u548c PropertyPlaceholderConfigurer")," "),(0,t.kt)("pre",{parentName:"li"},(0,t.kt)("code",{parentName:"pre",className:"language-java"},'//xml context \u5143\u7d20\u89e3\u6790\npublic class ContextNamespaceHandler extends NamespaceHandlerSupport {\n\n    @Override\n    public void init() {\n        registerBeanDefinitionParser("property-placeholder", new PropertyPlaceholderBeanDefinitionParser());\n        registerBeanDefinitionParser("property-override", new PropertyOverrideBeanDefinitionParser());\n        registerBeanDefinitionParser("annotation-config", new AnnotationConfigBeanDefinitionParser());\n        registerBeanDefinitionParser("component-scan", new ComponentScanBeanDefinitionParser());\n        registerBeanDefinitionParser("load-time-weaver", new LoadTimeWeaverBeanDefinitionParser());\n        registerBeanDefinitionParser("spring-configured", new SpringConfiguredBeanDefinitionParser());\n        registerBeanDefinitionParser("mbean-export", new MBeanExportBeanDefinitionParser());\n        registerBeanDefinitionParser("mbean-server", new MBeanServerBeanDefinitionParser());\n    }\n\n}\n\nclass PropertyPlaceholderBeanDefinitionParser extends AbstractPropertyLoadingBeanDefinitionParser {\n\n    private static final String SYSTEM_PROPERTIES_MODE_ATTRIBUTE = "system-properties-mode";\n\n    private static final String SYSTEM_PROPERTIES_MODE_DEFAULT = "ENVIRONMENT";\n\n\n    @Override\n    protected Class<?> getBeanClass(Element element) {\n        // As of Spring 3.1, the default value of system-properties-mode has changed from\n        // \'FALLBACK\' to \'ENVIRONMENT\'. This latter value indicates that resolution of\n        // placeholders against system properties is a function of the Environment and\n        // its current set of PropertySources.\n        if (SYSTEM_PROPERTIES_MODE_DEFAULT.equals(element.getAttribute(SYSTEM_PROPERTIES_MODE_ATTRIBUTE))) {\n            return PropertySourcesPlaceholderConfigurer.class;\n        }\n\n        // The user has explicitly specified a value for system-properties-mode: revert to\n        // PropertyPlaceholderConfigurer to ensure backward compatibility with 3.0 and earlier.\n        return PropertyPlaceholderConfigurer.class;\n    }\n\n    @Override\n    protected void doParse(Element element, ParserContext parserContext, BeanDefinitionBuilder builder) {\n        super.doParse(element, parserContext, builder);\n\n        builder.addPropertyValue("ignoreUnresolvablePlaceholders",\n                Boolean.valueOf(element.getAttribute("ignore-unresolvable")));\n\n        String systemPropertiesModeName = element.getAttribute(SYSTEM_PROPERTIES_MODE_ATTRIBUTE);\n        if (StringUtils.hasLength(systemPropertiesModeName) &&\n                !systemPropertiesModeName.equals(SYSTEM_PROPERTIES_MODE_DEFAULT)) {\n            builder.addPropertyValue("systemPropertiesModeName", "SYSTEM_PROPERTIES_MODE_" + systemPropertiesModeName);\n        }\n\n        if (element.hasAttribute("value-separator")) {\n            builder.addPropertyValue("valueSeparator", element.getAttribute("value-separator"));\n        }\n        if (element.hasAttribute("trim-values")) {\n            builder.addPropertyValue("trimValues", element.getAttribute("trim-values"));\n        }\n        if (element.hasAttribute("null-value")) {\n            builder.addPropertyValue("nullValue", element.getAttribute("null-value"));\n        }\n    }\n\n}\n')),(0,t.kt)("p",{parentName:"li"},"\u8fd9\u7c7b\u52a0\u8f7d\u4e86\u3002")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},(0,t.kt)("strong",{parentName:"p"},"ConfigurationClassPostProcessor")),(0,t.kt)("p",{parentName:"li"},"\u8fd9\u4e2a\u7c7b\u6ce8\u5165\u5206\u4e3a\u4e24\u79cd\uff1a"),(0,t.kt)("ul",{parentName:"li"},(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},"XML\u7684\u60c5\u51b5\u4e0b\u6ce8\u5165"),(0,t.kt)("pre",{parentName:"li"},(0,t.kt)("code",{parentName:"pre",className:"language-java"},'public class ContextNamespaceHandler extends NamespaceHandlerSupport {\n    @Override\n    public void init() {\n        registerBeanDefinitionParser("property-placeholder", new PropertyPlaceholderBeanDefinitionParser());\n        registerBeanDefinitionParser("property-override", new PropertyOverrideBeanDefinitionParser());\n        //\u8fd9\u4e2a\u7c7b\u6ce8\u5165\n        registerBeanDefinitionParser("annotation-config", new AnnotationConfigBeanDefinitionParser());\n        //\u8fd9\u4e2a\u7c7b\u6ce8\u5165\n        registerBeanDefinitionParser("component-scan", new ComponentScanBeanDefinitionParser());\n        registerBeanDefinitionParser("load-time-weaver", new LoadTimeWeaverBeanDefinitionParser());\n        registerBeanDefinitionParser("spring-configured", new SpringConfiguredBeanDefinitionParser());\n        registerBeanDefinitionParser("mbean-export", new MBeanExportBeanDefinitionParser());\n        registerBeanDefinitionParser("mbean-server", new MBeanServerBeanDefinitionParser());\n    }\n}\n'))),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},"\u6ce8\u89e3\u7684\u60c5\u51b5\u4e0b\u6ce8\u5165"),(0,t.kt)("blockquote",{parentName:"li"},(0,t.kt)("p",{parentName:"blockquote"},"AnnotationConfigUtils.registerAnnotationConfigProcessors(parserContext.getRegistry(), source);\u8fd9\u4e2a\u65b9\u6cd5\u91cc\u9762\u6ce8\u5165\u4e86"),(0,t.kt)("pre",{parentName:"blockquote"},(0,t.kt)("code",{parentName:"pre",className:"language-java"},"    public static Set<BeanDefinitionHolder> registerAnnotationConfigProcessors(\n            BeanDefinitionRegistry registry, @Nullable Object source) {\n"))),(0,t.kt)("pre",{parentName:"li"},(0,t.kt)("code",{parentName:"pre"},'    DefaultListableBeanFactory beanFactory = unwrapDefaultListableBeanFactory(registry);\n    if (beanFactory != null) {\n        if (!(beanFactory.getDependencyComparator() instanceof AnnotationAwareOrderComparator)) {\n            beanFactory.setDependencyComparator(AnnotationAwareOrderComparator.INSTANCE);\n        }\n        if (!(beanFactory.getAutowireCandidateResolver() instanceof ContextAnnotationAutowireCandidateResolver)) {\n            beanFactory.setAutowireCandidateResolver(new ContextAnnotationAutowireCandidateResolver());\n        }\n    }\n\n    Set<BeanDefinitionHolder> beanDefs = new LinkedHashSet<>(8);\n\n    if (!registry.containsBeanDefinition(CONFIGURATION_ANNOTATION_PROCESSOR_BEAN_NAME)) {\n        //\u6ce8\u5165ConfigurationClassPostProcessor\n        RootBeanDefinition def = new RootBeanDefinition(ConfigurationClassPostProcessor.class);\n    def.setSource(source);\n        beanDefs.add(registerPostProcessor(registry, def, CONFIGURATION_ANNOTATION_PROCESSOR_BEAN_NAME));\n    }\n\n    if (!registry.containsBeanDefinition(AUTOWIRED_ANNOTATION_PROCESSOR_BEAN_NAME)) {\n        RootBeanDefinition def = new RootBeanDefinition(AutowiredAnnotationBeanPostProcessor.class);\n        def.setSource(source);\n        beanDefs.add(registerPostProcessor(registry, def, AUTOWIRED_ANNOTATION_PROCESSOR_BEAN_NAME));\n    }\n\n    // Check for JSR-250 support, and if present add the CommonAnnotationBeanPostProcessor.\n    if (jsr250Present && !registry.containsBeanDefinition(COMMON_ANNOTATION_PROCESSOR_BEAN_NAME)) {\n        RootBeanDefinition def = new RootBeanDefinition(CommonAnnotationBeanPostProcessor.class);\n        def.setSource(source);\n        beanDefs.add(registerPostProcessor(registry, def, COMMON_ANNOTATION_PROCESSOR_BEAN_NAME));\n    }\n\n    // Check for JPA support, and if present add the PersistenceAnnotationBeanPostProcessor.\n    if (jpaPresent && !registry.containsBeanDefinition(PERSISTENCE_ANNOTATION_PROCESSOR_BEAN_NAME)) {\n        RootBeanDefinition def = new RootBeanDefinition();\n        try {\n            def.setBeanClass(ClassUtils.forName(PERSISTENCE_ANNOTATION_PROCESSOR_CLASS_NAME,\n                    AnnotationConfigUtils.class.getClassLoader()));\n        }\n        catch (ClassNotFoundException ex) {\n            throw new IllegalStateException(\n                    "Cannot load optional framework class: " + PERSISTENCE_ANNOTATION_PROCESSOR_CLASS_NAME, ex);\n        }\n        def.setSource(source);\n        beanDefs.add(registerPostProcessor(registry, def, PERSISTENCE_ANNOTATION_PROCESSOR_BEAN_NAME));\n    }\n\n    if (!registry.containsBeanDefinition(EVENT_LISTENER_PROCESSOR_BEAN_NAME)) {\n        RootBeanDefinition def = new RootBeanDefinition(EventListenerMethodProcessor.class);\n        def.setSource(source);\n        beanDefs.add(registerPostProcessor(registry, def, EVENT_LISTENER_PROCESSOR_BEAN_NAME));\n    }\n\n    if (!registry.containsBeanDefinition(EVENT_LISTENER_FACTORY_BEAN_NAME)) {\n        RootBeanDefinition def = new RootBeanDefinition(DefaultEventListenerFactory.class);\n        def.setSource(source);\n        beanDefs.add(registerPostProcessor(registry, def, EVENT_LISTENER_FACTORY_BEAN_NAME));\n    }\n\n    return beanDefs;\n}\n')),(0,t.kt)("pre",{parentName:"li"},(0,t.kt)("code",{parentName:"pre"},"")))))),(0,t.kt)("p",null,"\u5728Spring\u6e90\u7801\u4e2d\u4e3b\u8981\u53ef\u4ee5\u5173\u6ce8\u4e00\u4e0b\u4e0a\u9762\u7684\u4e09\u4e2a\u5b9e\u73b0\u7c7b\u3002"),(0,t.kt)("blockquote",null,(0,t.kt)("p",{parentName:"blockquote"},"\u4e3b\u8981\u5173\u6ce8\u4e0b\u9762\u8fd9\u4e24\u4e2a\u63a5\u53e3\uff1a"),(0,t.kt)("p",{parentName:"blockquote"},(0,t.kt)("strong",{parentName:"p"},"BeanFactoryPostProcessor")),(0,t.kt)("p",{parentName:"blockquote"},(0,t.kt)("strong",{parentName:"p"},"BeanDefinitionRegistryPostProcessor")," (\u53ef\u4ee5\u6ce8\u5165bean)")),(0,t.kt)("h3",{id:"2-beanfactorypostprocessor\u5728spring\u4e2d\u5982\u4f55\u5de5\u4f5c\u7684\u6e90\u7801\u5206\u6790"},"2. BeanFactoryPostProcessor\u5728Spring\u4e2d\u5982\u4f55\u5de5\u4f5c\u7684\u6e90\u7801\u5206\u6790"),(0,t.kt)("p",null,"\u9996\u5148\u6211\u4eec\u5e94\u8be5\u77e5\u9053\uff0c",(0,t.kt)("strong",{parentName:"p"},"\u4e0d\u7ba1\u662f\u4ec0\u4e48\u5728Spring\u7684\u5bb9\u5668\u4e2d\u90fd\u662f\u4e00\u4e2aBean")," \uff0c\u7ecf\u8fc7bean\u7684\u626b\u63cf\u6216\u8005xml\u5b9a\u4e49\u540e\u52a0\u8f7d\u3002\u4ee3\u7801\u9996\u5148\u4f1a\u5728\u8fd9\u91cc\u8fdb\u5165\uff1a"),(0,t.kt)("blockquote",null,(0,t.kt)("p",{parentName:"blockquote"},"AbstractApplicationContext#refresh#invokeBeanFactoryPostProcessors \u65b9\u6cd5\u4e2d\u6765\u5904\u7406")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-java"},"    protected void invokeBeanFactoryPostProcessors(ConfigurableListableBeanFactory beanFactory) {\n        //\u8fd9\u4e2a\u65b9\u6cd5\u4e3b\u8981\u5904\u7406\u5b9e\u73b0\u4e86BeanFactoryPostProcessor\u63a5\u53e3\u7684java\u7c7b\n        PostProcessorRegistrationDelegate.invokeBeanFactoryPostProcessors(beanFactory, getBeanFactoryPostProcessors());\n\n        // Detect a LoadTimeWeaver and prepare for weaving, if found in the meantime\n        // (e.g. through an @Bean method registered by ConfigurationClassPostProcessor)\n        if (beanFactory.getTempClassLoader() == null && beanFactory.containsBean(LOAD_TIME_WEAVER_BEAN_NAME)) {\n            beanFactory.addBeanPostProcessor(new LoadTimeWeaverAwareProcessor(beanFactory));\n            beanFactory.setTempClassLoader(new ContextTypeMatchClassLoader(beanFactory.getBeanClassLoader()));\n        }\n    }\n")),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},(0,t.kt)("inlineCode",{parentName:"strong"},"PostProcessorRegistrationDelegate.invokeBeanFactoryPostProcessors(beanFactory, getBeanFactoryPostProcessors())"))," \u8fd9\u4e2a\u65b9\u6cd5\u4e3b\u8981\u5904\u7406BeanFactoryPostProcessor\u5b9e\u73b0\u7684\u7c7b\u3002"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-java"},"public static void invokeBeanFactoryPostProcessors(\n            ConfigurableListableBeanFactory beanFactory, List<BeanFactoryPostProcessor> beanFactoryPostProcessors) {\n\n\n        Set<String> processedBeans = new HashSet<>();\n\n        //\u5224\u65adBeanFactory\u662f\u5426\u4e3aBeanDefinitionRegistry\u7684\u5b9e\u4f8b(BeanDefinitionRegistry\u53ef\u4ee5\u6ce8\u5165bean)\n        if (beanFactory instanceof BeanDefinitionRegistry) {\n            BeanDefinitionRegistry registry = (BeanDefinitionRegistry) beanFactory;\n\n            //\u5b58\u653e\u5b9e\u73b0BeanFactoryPostProcessor\u7684\u5b9e\u4f8b\n            List<BeanFactoryPostProcessor> regularPostProcessors = new ArrayList<>();\n\n            //\u5b58\u653e\u5b9e\u73b0BeanDefinitionRegistryPostProcessor\n            List<BeanDefinitionRegistryPostProcessor> registryProcessors = new ArrayList<>();\n\n            for (BeanFactoryPostProcessor postProcessor : beanFactoryPostProcessors) {\n\n                //\u5206\u7c7b\u5b58\u653eBeanDefinitionRegistryPostProcessor \u548c BeanFactoryPostProcessor\n                if (postProcessor instanceof BeanDefinitionRegistryPostProcessor) {\n                    BeanDefinitionRegistryPostProcessor registryProcessor =\n                            (BeanDefinitionRegistryPostProcessor) postProcessor;\n                    //\u6267\u884cpostProcessBeanDefinitionRegistry\u65b9\u6cd5\n                    registryProcessor.postProcessBeanDefinitionRegistry(registry);\n                    registryProcessors.add(registryProcessor);\n                }\n                else {\n                    regularPostProcessors.add(postProcessor);\n                }\n            }\n\n\n            //\u5904\u7406\u5f53\u524dBeanDefinitionRegistryPostProcessor\u5b9e\u73b0\u7c7b\n            List<BeanDefinitionRegistryPostProcessor> currentRegistryProcessors = new ArrayList<>();\n\n            // \u9996\u5148\u6267\u884c\u5b9e\u73b0\u4e86PriorityOrdered\u7684BeanDefinitionRegistryPostProcessor\u5b9e\u73b0\u7c7b\n            // \u5728beanFacotry\u4e2d\u901a\u8fc7BeanDefinitionRegistryPostProcessor\u7c7b\u578b\u83b7\u53d6\u540d\u79f0\n            String[] postProcessorNames =\n                    beanFactory.getBeanNamesForType(BeanDefinitionRegistryPostProcessor.class, true, false);\n            for (String ppName : postProcessorNames) {\n\n                //\u8fc7\u6ee4\u51fa\u6765PriorityOrdered\u7684\u5b9e\u73b0\u7c7b\n                if (beanFactory.isTypeMatch(ppName, PriorityOrdered.class)) {\n                    currentRegistryProcessors.add(beanFactory.getBean(ppName, BeanDefinitionRegistryPostProcessor.class));\n                    processedBeans.add(ppName);\n                }\n            }\n            //\u6392\u5e8f\u6309\u7167PriorityOrdered\n            sortPostProcessors(currentRegistryProcessors, beanFactory);\n            registryProcessors.addAll(currentRegistryProcessors);\n            //\u6267\u884cBeanDefinitionRegistryPostProcessor#postProcessBeanDefinitionRegistry()\u65b9\u6cd5\n            invokeBeanDefinitionRegistryPostProcessors(currentRegistryProcessors, registry);\n            currentRegistryProcessors.clear();\n\n            // \u6267\u884cBeanDefinitionRegistryPostProcessors\u5b9e\u73b0\u4e86Ordered\u63a5\u53e3\u7684\u7c7b.\n            postProcessorNames = beanFactory.getBeanNamesForType(BeanDefinitionRegistryPostProcessor.class, true, false);\n            for (String ppName : postProcessorNames) {\n                if (!processedBeans.contains(ppName) && beanFactory.isTypeMatch(ppName, Ordered.class)) {\n                    currentRegistryProcessors.add(beanFactory.getBean(ppName, BeanDefinitionRegistryPostProcessor.class));\n                    processedBeans.add(ppName);\n                }\n            }\n            sortPostProcessors(currentRegistryProcessors, beanFactory);\n            registryProcessors.addAll(currentRegistryProcessors);\n            invokeBeanDefinitionRegistryPostProcessors(currentRegistryProcessors, registry);\n            currentRegistryProcessors.clear();\n\n            // \u6700\u540e\u6267\u884c\u90a3\u4e9b\u5b9e\u73b0\u4e86BeanDefinitionRegistryPostProcessor\u7c7b\u7684\n            boolean reiterate = true;\n            while (reiterate) {\n                reiterate = false;\n                postProcessorNames = beanFactory.getBeanNamesForType(BeanDefinitionRegistryPostProcessor.class, true, false);\n                for (String ppName : postProcessorNames) {\n                    if (!processedBeans.contains(ppName)) {\n                        currentRegistryProcessors.add(beanFactory.getBean(ppName, BeanDefinitionRegistryPostProcessor.class));\n                        processedBeans.add(ppName);\n                        reiterate = true;\n                    }\n                }\n                sortPostProcessors(currentRegistryProcessors, beanFactory);\n                registryProcessors.addAll(currentRegistryProcessors);\n                invokeBeanDefinitionRegistryPostProcessors(currentRegistryProcessors, registry);\n                currentRegistryProcessors.clear();\n            }\n\n\n            //\u8c03\u7528BeanFactoryPostProcessor\u7684postProcessBeanFactory\n            invokeBeanFactoryPostProcessors(registryProcessors, beanFactory);\n            invokeBeanFactoryPostProcessors(regularPostProcessors, beanFactory);\n        }\n\n        else {\n            //\u76f4\u63a5\u8c03\u7528postProcessor#postProcessBeanFactory\n            invokeBeanFactoryPostProcessors(beanFactoryPostProcessors, beanFactory);\n        }\n\n        //\u4e0b\u9762\u5904\u7406\u7684\u662f\u5b9e\u73b0\u4e86BeanFactoryPostProcessor\u7684\u7c7b\n        String[] postProcessorNames =\n                beanFactory.getBeanNamesForType(BeanFactoryPostProcessor.class, true, false);\n\n        /**\n         * \u4e09\u79cd\uff1a\n         * 1 \u5b9e\u73b0\u4e86PriorityOrdered \u548c BeanFactoryPostProcessor\n         * 2 \u5b9e\u73b0\u4e86Ordered \u548c BeanFactoryPostProcessor\n         * 3 \u53ea\u5b9e\u73b0\u4e86BeanFactoryPostProcessor\n         */\n        List<BeanFactoryPostProcessor> priorityOrderedPostProcessors = new ArrayList<>();\n        List<String> orderedPostProcessorNames = new ArrayList<>();\n        List<String> nonOrderedPostProcessorNames = new ArrayList<>();\n        for (String ppName : postProcessorNames) {\n\n            if (processedBeans.contains(ppName)) {\n                // \u5982\u679c\u662fBeanDefinitionRegistryPostProcessor\u5904\u7406\u8fc7\u7684\u5c31\u4ec0\u4e48\u4e5f\u4e0d\u505a\n            }\n            else if (beanFactory.isTypeMatch(ppName, PriorityOrdered.class)) {\n                //\u4fdd\u5b58\u5b9e\u73b0\u4e86PriorityOrdered\u63a5\u53e3\u7684BeanFactoryPostProcessor\n                priorityOrderedPostProcessors.add(beanFactory.getBean(ppName, BeanFactoryPostProcessor.class));\n            }\n            else if (beanFactory.isTypeMatch(ppName, Ordered.class)) {\n                //\u4fdd\u5b58\u5b9e\u73b0\u4e86Ordered\u63a5\u53e3\u7684BeanFactoryPostProcessor\n                orderedPostProcessorNames.add(ppName);\n            }\n            else {\n                //\u6b63\u5e38\u7684\u63a5\u53e3\n                nonOrderedPostProcessorNames.add(ppName);\n            }\n        }\n\n        //\u5bf9priorityOrderedPostProcessors\u8fdb\u884c\u6392\u5e8f\n        sortPostProcessors(priorityOrderedPostProcessors, beanFactory);\n        //\u6267\u884cBeanFactoryPostProcessor#postProcessBeanFactory()\u65b9\u6cd5\n        invokeBeanFactoryPostProcessors(priorityOrderedPostProcessors, beanFactory);\n\n        // \u6267\u884c\u5b8c\u5b9e\u73b0\u4e86Ordered\u63a5\u53e3\u7684BeanFactoryPostProcessor\n        List<BeanFactoryPostProcessor> orderedPostProcessors = new ArrayList<>();\n        for (String postProcessorName : orderedPostProcessorNames) {\n            orderedPostProcessors.add(beanFactory.getBean(postProcessorName, BeanFactoryPostProcessor.class));\n        }\n        sortPostProcessors(orderedPostProcessors, beanFactory);\n        invokeBeanFactoryPostProcessors(orderedPostProcessors, beanFactory);\n\n        // \u6267\u884c\u5b8c\u5269\u4e0b\u7684BeanFactoryPostProcessor(\u6ca1\u6709\u5b9e\u73b0Ordered\u548cPriorityOrdered\u63a5\u53e3)\n        List<BeanFactoryPostProcessor> nonOrderedPostProcessors = new ArrayList<>();\n        for (String postProcessorName : nonOrderedPostProcessorNames) {\n            nonOrderedPostProcessors.add(beanFactory.getBean(postProcessorName, BeanFactoryPostProcessor.class));\n        }\n        invokeBeanFactoryPostProcessors(nonOrderedPostProcessors, beanFactory);\n\n\n        beanFactory.clearMetadataCache();\n    }\n")),(0,t.kt)("p",null,"\u901a\u8fc7\u4e0a\u9762\u7684\u4ee3\u7801\u53ef\u4ee5\u770b\u51fa\u6765\uff0c",(0,t.kt)("strong",{parentName:"p"},(0,t.kt)("inlineCode",{parentName:"strong"},"AbstractApplicationContext#refresh#invokeBeanFactoryPostProcessors"))," \u8fd9\u4e2a\u65b9\u6cd5\u4e3b\u8981\u7528\u6765\u6267\u884c ",(0,t.kt)("strong",{parentName:"p"},(0,t.kt)("inlineCode",{parentName:"strong"},"BeanFactoryPostProcessor"))," \u548c ",(0,t.kt)("strong",{parentName:"p"},(0,t.kt)("inlineCode",{parentName:"strong"},"BeanDefinitionRegistryPostProcessor"))," \u8fd9\u4e24\u4e2a\u7c7b\u7684\u63a5\u53e3\u3002 ",(0,t.kt)("strong",{parentName:"p"},(0,t.kt)("inlineCode",{parentName:"strong"},"BeanDefinitionRegistryPostProcessor"))," \u7ee7\u627f\u4e86  ",(0,t.kt)("strong",{parentName:"p"},(0,t.kt)("inlineCode",{parentName:"strong"},"BeanFactoryPostProcessor"))," \u63a5\u53e3\u3002\u4ece\u8fd9\u91cc\u53ef\u4ee5\u770b\u51fa\u6765Spring\u5bb9\u5668\u662f\u5982\u4f55\u8c03\u7528\u8fd9\u4e24\u4e2a\u7c7b\u7684\u3002\u8fd9\u4e24\u4e2a\u7c7b\u6267\u884c\u7684\u987a\u5e8f"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},"BeanDefinitionRegistryPostProcessor#postProcessBeanDefinitionRegistry")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},"BeanFactoryPostProcessor#postProcessBeanFactory"))),(0,t.kt)("h3",{id:"3-\u603b\u7ed3"},"3. \u603b\u7ed3"),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},(0,t.kt)("inlineCode",{parentName:"strong"},"BeanFactoryPostProcessor"))," \u7684\u5b9e\u73b0\u7c7b\u4e3b\u8981\u5904\u7406\u7c7b\u4e0a\u9762\u7684\u6ce8\u89e3\u6bd4\u5982\uff1a"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"@Configuration"),(0,t.kt)("li",{parentName:"ul"},"@Order"),(0,t.kt)("li",{parentName:"ul"},"@Component "),(0,t.kt)("li",{parentName:"ul"},"@PropertySources "),(0,t.kt)("li",{parentName:"ul"},"@ComponentScans "),(0,t.kt)("li",{parentName:"ul"},"@ComponentScan  "),(0,t.kt)("li",{parentName:"ul"},"@Import "),(0,t.kt)("li",{parentName:"ul"},"@ImportResource "),(0,t.kt)("li",{parentName:"ul"},"@Bean(\u7c7b\u5185\u90e8\u65b9\u6cd5\u4e0a)")),(0,t.kt)("p",null,"\u5904\u7406\u987a\u5e8f\u56fe\uff1a"),(0,t.kt)("p",null,(0,t.kt)("img",{parentName:"p",src:"https://github.com/mxsm/picture/blob/main/spring/BeanFactoryPostProcessor%E5%B8%B8%E7%94%A8%E6%B3%A8%E8%A7%A3%E5%A4%84%E7%90%86%E9%A1%BA%E5%BA%8F.png?raw=true",alt:null})),(0,t.kt)("p",null,(0,t.kt)("a",{parentName:"p",href:"https://blog.ljbmxsm.com/springframework/core-source-analysis/configurationclasspostprocesso/"},"ConfigurationClassPostProcessor\u8be6\u89e3")))}l.isMDXComponent=!0}}]);