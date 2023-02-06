"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[6680],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>u});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),l=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=l(e.components);return a.createElement(p.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=l(t),g=r,u=c["".concat(p,".").concat(g)]||c[g]||m[g]||i;return t?a.createElement(u,o(o({ref:n},d),{},{components:t})):a.createElement(u,o({ref:n},d))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=g;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=t[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},6112:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=t(7462),r=(t(7294),t(3905));const i={ptitle:"Spring\u6ce8\u89e3\u6e90\u7801\u89e3\u6790\u4e4b-Component",linkTitle:"Spring\u6ce8\u89e3\u6e90\u7801\u89e3\u6790\u4e4b-Component",date:new Date("2021-04-19T00:00:00.000Z"),weight:201204192015},o=void 0,s={unversionedId:"spring/spring-framework/annotation-source-analysis/component",id:"spring/spring-framework/annotation-source-analysis/component",title:"component",description:"\u57fa\u4e8eSpring 5.4.2\u7248\u672c\u5206\u6790",source:"@site/docs/spring/spring-framework/annotation-source-analysis/component.md",sourceDirName:"spring/spring-framework/annotation-source-analysis",slug:"/spring/spring-framework/annotation-source-analysis/component",permalink:"/docs/spring/spring-framework/annotation-source-analysis/component",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/spring/spring-framework/annotation-source-analysis/component.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1675697367,formattedLastUpdatedAt:"Feb 6, 2023",frontMatter:{ptitle:"Spring\u6ce8\u89e3\u6e90\u7801\u89e3\u6790\u4e4b-Component",linkTitle:"Spring\u6ce8\u89e3\u6e90\u7801\u89e3\u6790\u4e4b-Component",date:"2021-04-19T00:00:00.000Z",weight:201204192015}},p={},l=[{value:"1. @Component\u6982\u8981",id:"1-component\u6982\u8981",level:3},{value:"2. @Component\u5165\u53e3",id:"2-component\u5165\u53e3",level:3},{value:"3. ClassPathBeanDefinitionScanner\u89e3\u6790",id:"3-classpathbeandefinitionscanner\u89e3\u6790",level:3},{value:"4. findCandidateComponents\u89e3\u6790",id:"4-findcandidatecomponents\u89e3\u6790",level:3},{value:"5. isCandidateComponent\u65b9\u6cd5\u89e3\u6790",id:"5-iscandidatecomponent\u65b9\u6cd5\u89e3\u6790",level:3},{value:"6. @Component\u6d3e\u751f\u8fc7\u7a0b\u89e3\u6790",id:"6-component\u6d3e\u751f\u8fc7\u7a0b\u89e3\u6790",level:3},{value:"7. \u731c\u60f3\u9a8c\u8bc1",id:"7-\u731c\u60f3\u9a8c\u8bc1",level:3},{value:"8. \u603b\u7ed3",id:"8-\u603b\u7ed3",level:3}],d={toc:l},c="wrapper";function m(e){let{components:n,...t}=e;return(0,r.kt)(c,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u57fa\u4e8eSpring 5.4.2\u7248\u672c\u5206\u6790")),(0,r.kt)("h3",{id:"1-component\u6982\u8981"},"1. @Component\u6982\u8981"),(0,r.kt)("p",null,"Spring\u4e2d\u6709\u4e00\u4e2a\u91cd\u8981\u7684\u6ce8\u89e3\u90a3\u5c31\u662f ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"@Component"))," \u3002\u5bf9\u4e8eSpring\u4e2d\u4e0d\u540c\u573a\u666f\u4e0b\u4f7f\u7528\u7684\u6ce8\u89e3\u4f8b\u5982\uff1a",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"@Repository"))," \u3001",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"@Service"))," \u3001 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"@Controller"))," \u90fd\u662f\u901a\u8fc7 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"@Component"))," \u6ce8\u89e3\u884d\u751f\u51fa\u6765\u7684\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'@Target({ElementType.TYPE})\n@Retention(RetentionPolicy.RUNTIME)\n@Documented\n@Component\npublic @interface Service {\n    @AliasFor(annotation = Component.class)\n    String value() default "";\n}\n')),(0,r.kt)("p",null,"\u5728\u8fd9\u91cc\u4ee3\u7801\u4e2d\u8fd8\u770b\u5230\u4e00\u4e2a\u91cd\u8981\u7684\u6ce8\u89e3\u6765\u5b9e\u73b0\u6d3e\u751f\uff1a ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"@AliasFor"))," \u3002"),(0,r.kt)("h3",{id:"2-component\u5165\u53e3"},"2. @Component\u5165\u53e3"),(0,r.kt)("p",null,"\u4e0d\u8bba\u662f\u73b0\u5728Spring\u6d41\u884c\u7684\u6ce8\u89e3\u65b9\u5f0f\u8fd8\u662f\u4ee5\u524d\u7684\u8001\u5f0f\u7684XML\u914d\u7f6e\u65b9\u5f0f\u90fd\u6709\u4e00\u4e2a\u5165\u53e3\u3002\u8fd9\u91cc\u5c31\u53ea\u5206\u6790\u6ce8\u89e3\u6a21\u5f0f\u3002"),(0,r.kt)("p",null,"\u5bf9\u4e8eXML\u914d\u7f6e\u7684\u65b9\u5f0f\u53ef\u4ee5\u4ece\u4e0b\u9762\u7684\u4ee3\u7801\u4e2d\u627e\u5230\u5165\u53e3\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public class ContextNamespaceHandler extends NamespaceHandlerSupport {\n\n    @Override\n    public void init() {\n        registerBeanDefinitionParser("property-placeholder", new PropertyPlaceholderBeanDefinitionParser());\n        registerBeanDefinitionParser("property-override", new PropertyOverrideBeanDefinitionParser());\n        registerBeanDefinitionParser("annotation-config", new AnnotationConfigBeanDefinitionParser());\n        registerBeanDefinitionParser("component-scan", new ComponentScanBeanDefinitionParser());\n        registerBeanDefinitionParser("load-time-weaver", new LoadTimeWeaverBeanDefinitionParser());\n        registerBeanDefinitionParser("spring-configured", new SpringConfiguredBeanDefinitionParser());\n        registerBeanDefinitionParser("mbean-export", new MBeanExportBeanDefinitionParser());\n        registerBeanDefinitionParser("mbean-server", new MBeanServerBeanDefinitionParser());\n    }\n\n}\n')),(0,r.kt)("p",null,"\u5bf9\u4e8e\u6ce8\u89e3\u65b9\u5f0f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"    public AnnotationConfigApplicationContext(String... basePackages) {\n        this();\n        scan(basePackages);\n        refresh();\n    }\n")),(0,r.kt)("p",null,"\u53ef\u4ee5\u770b\u4e00\u4e0b ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"AnnotationConfigApplicationContext"))," \u7c7b\u3002"),(0,r.kt)("p",null,"\u4e0d\u7ba1\u662f\u6ce8\u89e3\u65b9\u5f0f\u8fd8\u662fXML\u65b9\u5f0f\u6700\u7ec8\u90fd\u662f\u901a\u8fc7 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"ClassPathBeanDefinitionScanner"))," \u7c7b\u6765\u5c06\u5305\u542b\u6709 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"@Component"))," \u6ce8\u89e3\u7684\u7c7b\u5b9a\u4e49\u52a0\u8f7d\u5230Spring\u5bb9\u5668\u91cc\u9762\u3002"),(0,r.kt)("h3",{id:"3-classpathbeandefinitionscanner\u89e3\u6790"},"3. ClassPathBeanDefinitionScanner\u89e3\u6790"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"ClassPathBeanDefinitionScanner"))," \u4f5c\u7528\u4e3b\u8981\u662f\u626b\u63cf\u5e26\u6709 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"@Component"))," \u6ce8\u89e3\u7684\u7c7b\u5e76\u5b9e\u73b0\u6ce8\u518c\u3002\u4e0b\u9762\u6765\u770b\u4e00\u4e0b ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"ClassPathBeanDefinitionScanner#doScan"))," \u65b9\u6cd5\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'protected Set<BeanDefinitionHolder> doScan(String... basePackages) {\n    Assert.notEmpty(basePackages, "At least one base package must be specified");\n    Set<BeanDefinitionHolder> beanDefinitions = new LinkedHashSet<>();\n    for (String basePackage : basePackages) {\n        //\u627e\u57fa\u7840\u5305\u4e0b\u9762\u7684\u5019\u9009\u7684Component\n        Set<BeanDefinition> candidates = findCandidateComponents(basePackage);\n        //\u4e0b\u9762\u662f\u5bf9\u52a0\u8f7d\u7684Component\u505a\u8fdb\u4e00\u6b65\u5904\u7406\n        for (BeanDefinition candidate : candidates) {\n            ScopeMetadata scopeMetadata = this.scopeMetadataResolver.resolveScopeMetadata(candidate);\n            candidate.setScope(scopeMetadata.getScopeName());\n            String beanName = this.beanNameGenerator.generateBeanName(candidate, this.registry);\n            if (candidate instanceof AbstractBeanDefinition) {\n                postProcessBeanDefinition((AbstractBeanDefinition) candidate, beanName);\n            }\n            if (candidate instanceof AnnotatedBeanDefinition) {\n                AnnotationConfigUtils.processCommonDefinitionAnnotations((AnnotatedBeanDefinition) candidate);\n            }\n            if (checkCandidate(beanName, candidate)) {\n                BeanDefinitionHolder definitionHolder = new BeanDefinitionHolder(candidate, beanName);\n                definitionHolder =\n                        AnnotationConfigUtils.applyScopedProxyMode(scopeMetadata, definitionHolder, this.registry);\n                beanDefinitions.add(definitionHolder);\n                registerBeanDefinition(definitionHolder, this.registry);\n            }\n        }\n    }\n    return beanDefinitions;\n}\n')),(0,r.kt)("p",null,"\u901a\u8fc7\u4e0a\u9762\u7684\u4ee3\u7801\u53ef\u4ee5\u770b\u51fa\u6765\u4e3b\u8981\u662f\u901a\u8fc7 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"ClassPathScanningCandidateComponentProvider#findCandidateComponents"))," \u6765\u5b9e\u73b0\u52a0\u8f7d"),(0,r.kt)("h3",{id:"4-findcandidatecomponents\u89e3\u6790"},"4. findCandidateComponents\u89e3\u6790"),(0,r.kt)("p",null,"findCandidateComponents\u65b9\u6cd5\u5c5e\u4e8eClassPathScanningCandidateComponentProvider#findCandidateComponents\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public Set<BeanDefinition> findCandidateComponents(String basePackage) {\n    if (this.componentsIndex != null && indexSupportsIncludeFilters()) {\n        return addCandidateComponentsFromIndex(this.componentsIndex, basePackage);\n    }\n    else {\n        return scanCandidateComponents(basePackage);\n    }\n}\n\nprivate Set<BeanDefinition> scanCandidateComponents(String basePackage) {\n    Set<BeanDefinition> candidates = new LinkedHashSet<>();\n    try {\n        String packageSearchPath = ResourcePatternResolver.CLASSPATH_ALL_URL_PREFIX +\n                resolveBasePackage(basePackage) + \'/\' + this.resourcePattern;\n        Resource[] resources = getResourcePatternResolver().getResources(packageSearchPath);\n        //\u7701\u7565\u4e86\u90e8\u5206\u6253\u5370\u7684\u4ee3\u7801\n        for (Resource resource : resources) {\n\n            if (resource.isReadable()) {\n                try {\n                    MetadataReader metadataReader = getMetadataReaderFactory().getMetadataReader(resource);\n                    if (isCandidateComponent(metadataReader)) {\n                        ScannedGenericBeanDefinition sbd = new ScannedGenericBeanDefinition(metadataReader);\n                        sbd.setSource(resource);\n                        if (isCandidateComponent(sbd)) {\n\n                            candidates.add(sbd);\n                        }\n\n                    }\n\n                }\n                catch (Throwable ex) {\n                    throw new BeanDefinitionStoreException(\n                            "Failed to read candidate component class: " + resource, ex);\n                }\n            }\n            else {\n\n            }\n        }\n    }\n    catch (IOException ex) {\n        throw new BeanDefinitionStoreException("I/O failure during classpath scanning", ex);\n    }\n    return candidates;\n}\n')),(0,r.kt)("p",null,"\u8be5\u65b9\u6cd5\u4e3b\u8981\u8fd8\u662f\u4ece\u57fa\u7840\u5305\u4e2d\u83b7\u53d6\u7ec4\u4ef6\u3002\u4ece\u4ee3\u7801\u5206\u6790\u4e00\u4e0b\u5927\u6982\u7684\u601d\u8def\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u6839\u636e\u57fa\u7840\u5305\u62fc\u88c5\u626b\u63cf\u7684\u8def\u5f84\u6b63\u5219\u8868\u8fbe\u5f0f\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u83b7\u53d6\u8def\u5f84\u4e0b\u9762\u7684 ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},".class"))," \u6587\u4ef6\u5305\u88c5\u6210 ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"Resource"))," \u6570\u7ec4\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5c06 ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},".class"))," \u6587\u4ef6\u5305\u88c5\u6210 ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"Resource")),"  \u5904\u7406\u6210 ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"MetadataReader"))),(0,r.kt)("li",{parentName:"ol"},"\u5224\u65ad ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"MetadataReader"))," \u662f\u5426\u4e3a\u5019\u9009\u7ec4\u4ef6"),(0,r.kt)("li",{parentName:"ol"},"\u5224\u65ad ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"ScannedGenericBeanDefinition"))," \u662f\u5426\u4e3a\u5019\u9009\u7ec4\u4ef6\uff0c",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"ScannedGenericBeanDefinition"))," \u7531 ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"MetadataReader"))," \u6784\u5efa\u3002")),(0,r.kt)("p",null,"\u5224\u65ad\u662f\u5426\u4e3a\u5019\u9009\u7ec4\u4ef6\u901a\u8fc7 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"ClassPathScanningCandidateComponentProvider#isCandidateComponent"))," \u65b9\u6cd5\u3002"),(0,r.kt)("h3",{id:"5-iscandidatecomponent\u65b9\u6cd5\u89e3\u6790"},"5. isCandidateComponent\u65b9\u6cd5\u89e3\u6790"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"isCandidateComponent"))," \u65b9\u6cd5\u5728 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"ClassPathScanningCandidateComponentProvider#isCandidateComponent"))," \u7c7b\u4e2d\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"protected boolean isCandidateComponent(MetadataReader metadataReader) throws IOException {\n    //\u7701\u7565\u90e8\u5206\u4ee3\u7801\n    for (TypeFilter tf : this.includeFilters) {\n        //\u5224\u65ad\u662f\u5426\u4e3a@Component\u6ce8\u89e3\u4fee\u9970\n        if (tf.match(metadataReader, getMetadataReaderFactory())) {\n            return isConditionMatch(metadataReader);\n        }\n    }\n    return false;\n}\n")),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"ClassPathScanningCandidateComponentProvider"))," \u521d\u59cb\u5316\u7684\u65f6\u5019\u56de\u53ea\u8bbe\u7f6e\u4e86 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"@Component"))," \u6ce8\u89e3\u3002\u5e76\u6ca1\u6709\u770b\u5230 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"@Repository"))," \u3001",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"@Service"))," \u3001 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"@Controller")),"  \u8fd9\u4e9b\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'//ClassPathScanningCandidateComponentProvider#registerDefaultFilters\nprotected void registerDefaultFilters() {\n    this.includeFilters.add(new AnnotationTypeFilter(Component.class));\n    ClassLoader cl = ClassPathScanningCandidateComponentProvider.class.getClassLoader();\n    try {\n        this.includeFilters.add(new AnnotationTypeFilter(\n                ((Class<? extends Annotation>) ClassUtils.forName("javax.annotation.ManagedBean", cl)), false));\n        logger.trace("JSR-250 \'javax.annotation.ManagedBean\' found and supported for component scanning");\n    }\n    catch (ClassNotFoundException ex) {\n        // JSR-250 1.1 API (as included in Java EE 6) not available - simply skip.\n    }\n    try {\n        this.includeFilters.add(new AnnotationTypeFilter(\n                ((Class<? extends Annotation>) ClassUtils.forName("javax.inject.Named", cl)), false));\n        logger.trace("JSR-330 \'javax.inject.Named\' annotation found and supported for component scanning");\n    }\n    catch (ClassNotFoundException ex) {\n        // JSR-330 API not available - simply skip.\n    }\n}\n')),(0,r.kt)("p",null,"\u524d\u9762\u8bf4\u8fc7 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"@Repository"))," \u3001",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"@Service"))," \u3001 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"@Controller"))," \u90fd\u662f\u901a\u8fc7 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"@Component"))," \u6d3e\u751f\u6765\u7684\u3002"),(0,r.kt)("h3",{id:"6-component\u6d3e\u751f\u8fc7\u7a0b\u89e3\u6790"},"6. @Component\u6d3e\u751f\u8fc7\u7a0b\u89e3\u6790"),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"ClassPathScanningCandidateComponentProvider#scanCandidateComponents"))," \u6709\u8fd9\u6837\u4e00\u6bb5\u4ee3\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"MetadataReader metadataReader = getMetadataReaderFactory().getMetadataReader(resource);\n\npublic final MetadataReaderFactory getMetadataReaderFactory() {\n    if (this.metadataReaderFactory == null) {\n        this.metadataReaderFactory = new CachingMetadataReaderFactory();\n    }\n    return this.metadataReaderFactory;\n}\n")),(0,r.kt)("p",null,"\u8fd9\u4e00\u6bb5\u4ee3\u7801\u4e3b\u8981\u662f\u4e3a\u4e86\u83b7\u53d6  ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"MetadataReader"))," \u3002\u8be5\u63a5\u53e3\u5b9a\u4e49\u4e86\u83b7\u53d6\u5f53\u524d\u7c7b\u6ce8\u89e3\u7684\u5143\u6570\u636e\u548c\u5f53\u524d\u7c7b\u7684\u5143\u6570\u636e\u3002\u5728Spring\u6846\u67b6\u4e2d\u552f\u4e00\u7684\u5b9e\u73b0\u5c31\u662f ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"SimpleMetadataReader"))," \u3002\u4e0b\u9762\u6765\u770b\u4e00\u4e0b ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"SimpleMetadataReader"))," \u7c7b\u7684\u6784\u9020\u51fd\u6570\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"SimpleMetadataReader(Resource resource, @Nullable ClassLoader classLoader) throws IOException {\n    SimpleAnnotationMetadataReadingVisitor visitor = new SimpleAnnotationMetadataReadingVisitor(classLoader);\n    getClassReader(resource).accept(visitor, PARSING_OPTIONS);\n    this.resource = resource;\n    this.annotationMetadata = visitor.getMetadata();\n}\n")),(0,r.kt)("p",null,"\u5728\u6784\u9020\u51fd\u6570\u4e2d\u6709\u4e24\u4e2a\u7c7b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"SimpleAnnotationMetadataReadingVisitor")),(0,r.kt)("p",{parentName:"li"},"\u4e3b\u8981\u7528\u4e8e\u8bbf\u95ee\u6ce8\u89e3"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{parentName:"p",src:"https://github.com/mxsm/picture/blob/main/spring/ClassVisitor.png?raw=true",alt:null}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"ClassReader")),(0,r.kt)("p",{parentName:"li"},"\u7c7b\u8bfb\u53d6\u5668\uff0c\u57fa\u4e8eASM\u6846\u67b6\u5b9e\u73b0\u7684\u3002"))),(0,r.kt)("p",null,"\u8fd9\u91cc\u6211\u4eec\u8fd8\u53ef\u4ee5\u770b\u4e00\u4e0b\u7c7b\u7684\u5143\u6570\u636e\u7c7b\u7684\u7ee7\u627f\u5173\u7cfb\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/mxsm/picture/blob/main/spring/ClassMetadata.png?raw=true",alt:null})),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("strong",{parentName:"p"},"SimpleMetadataReader")," \u7c7b\u7684\u6784\u9020\u51fd\u6570\u4e2d\u6709\u8fd9\u6837\u4e00\u6bb5\u4ee3\u7801 ",(0,r.kt)("strong",{parentName:"p"},"getClassReader(resource).accept(visitor, PARSING_OPTIONS);")," \u4e3b\u8981\u662f\u7528\u6765\u7c7b\u4e0a\u9762\u7684\u6ce8\u89e3\u3002\u5305\u62ec\u6ce8\u89e3\u4e0a\u9762\u7684\u6ce8\u89e3\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"getClassReader(resource).accept(visitor, PARSING_OPTIONS)\u8fd9\u6bb5\u4ee3\u7801\u5c31\u662f\u5b9e\u73b0\u4e86\u6ce8\u89e3\u6d3e\u751f\u7684\u5173\u952e")),(0,r.kt)("h3",{id:"7-\u731c\u60f3\u9a8c\u8bc1"},"7. \u731c\u60f3\u9a8c\u8bc1"),(0,r.kt)("p",null,"\u9996\u5148\u5199\u4e00\u4e2aController"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/mxsm/picture/blob/main/spring/%E9%AA%8C%E8%AF%81%E7%8C%9C%E6%83%B31.png?raw=true",alt:null})),(0,r.kt)("p",null,"\u7136\u540e\u5728 IDEA\u8bbe\u7f6e\u6761\u4ef6\u65ad\u70b9\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/mxsm/picture/blob/main/spring/%E9%AA%8C%E8%AF%81%E7%8C%9C%E6%83%B32.png?raw=true",alt:null})),(0,r.kt)("p",null,"\u770b\u4e00\u4e0bmetadata\u53d8\u91cf\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/mxsm/picture/blob/main/spring/%E9%AA%8C%E8%AF%81%E7%8C%9C%E6%83%B33.png?raw=true",alt:null})),(0,r.kt)("p",null,"\u7136\u540e\u770b\u4e00\u4e0b\u53d8\u91cf\u503cannotations:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/mxsm/picture/blob/main/spring/%E9%AA%8C%E8%AF%81%E7%8C%9C%E6%83%B34.png?raw=true",alt:null})),(0,r.kt)("p",null,"\u8fd9\u91cc\u53ef\u4ee5\u770b\u51fa\u6765\u5df2\u7ecf\u8bfb\u53d6\u5230\u4e86 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"AsyncController"))," \u7c7b\u4e0a\u9762\u7684\u6ce8\u89e3\uff0c\u7136\u540e\u5728\u53d8\u91cf\u4e2d\u6709\u4e00\u4e2amappings\u7684\u53d8\u91cf\u4e0b\u9762\u6765\u770b\u4e00\u4e0b\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/mxsm/picture/blob/main/spring/%E9%AA%8C%E8%AF%81%E7%8C%9C%E6%83%B35.png?raw=true",alt:null})),(0,r.kt)("p",null,"\u8fd9\u4e2a\u91cc\u9762\u5c31\u5305\u542b\u4e86\u9664\u4e86Java\u7684\u6ce8\u89e3\u4ee5\u5916\u7684\u6240\u6709\u6ce8\u89e3\u3002\uff08\u8fd9\u91cc\u7531\u4e8e\u9875\u9762\u7684\u5173\u7cfb\u4e0d\u80fd\u5b8c\u5168\u5c55\u793a\uff09"),(0,r.kt)("h3",{id:"8-\u603b\u7ed3"},"8. \u603b\u7ed3"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"@Component\u662fspring\u6ce8\u89e3\u7684\u57fa\u7840"),(0,r.kt)("li",{parentName:"ul"},"ClassPathBeanDefinitionScanner\u626b\u63cf\u5236\u5b9a\u57fa\u7840\u5305\u4e0b\u9762\u7684\u5305\u542b@Component\u6ce8\u89e3"),(0,r.kt)("li",{parentName:"ul"},"\u901a\u8fc7ClassReader\uff08\u57fa\u4e8eASM\u5b9e\u73b0\uff09\u6765\u8bfb\u53d6\u7c7b\u4e0a\u9762\u6240\u6709\u7684\u6ce8\u89e3\u3002")))}m.isMDXComponent=!0}}]);