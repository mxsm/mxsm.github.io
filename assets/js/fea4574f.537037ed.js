"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[5201],{4960:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var a=t(4848),i=t(8453);const s={ptitle:"Spring\u6ce8\u89e3\u6e90\u7801\u89e3\u6790\u4e4b-Component",linkTitle:"Spring\u6ce8\u89e3\u6e90\u7801\u89e3\u6790\u4e4b-Component",date:new Date("2021-04-19T00:00:00.000Z"),weight:201204192015},r=void 0,o={id:"spring/spring-framework/annotation-source-analysis/component",title:"component",description:"\u57fa\u4e8eSpring 5.4.2\u7248\u672c\u5206\u6790",source:"@site/docs/spring/spring-framework/annotation-source-analysis/component.md",sourceDirName:"spring/spring-framework/annotation-source-analysis",slug:"/spring/spring-framework/annotation-source-analysis/component",permalink:"/docs/spring/spring-framework/annotation-source-analysis/component",draft:!1,unlisted:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/spring/spring-framework/annotation-source-analysis/component.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1719738085e3,frontMatter:{ptitle:"Spring\u6ce8\u89e3\u6e90\u7801\u89e3\u6790\u4e4b-Component",linkTitle:"Spring\u6ce8\u89e3\u6e90\u7801\u89e3\u6790\u4e4b-Component",date:"2021-04-19T00:00:00.000Z",weight:201204192015}},d={},c=[{value:"1. @Component\u6982\u8981",id:"1-component\u6982\u8981",level:3},{value:"2. @Component\u5165\u53e3",id:"2-component\u5165\u53e3",level:3},{value:"3. ClassPathBeanDefinitionScanner\u89e3\u6790",id:"3-classpathbeandefinitionscanner\u89e3\u6790",level:3},{value:"4. findCandidateComponents\u89e3\u6790",id:"4-findcandidatecomponents\u89e3\u6790",level:3},{value:"5. isCandidateComponent\u65b9\u6cd5\u89e3\u6790",id:"5-iscandidatecomponent\u65b9\u6cd5\u89e3\u6790",level:3},{value:"6. @Component\u6d3e\u751f\u8fc7\u7a0b\u89e3\u6790",id:"6-component\u6d3e\u751f\u8fc7\u7a0b\u89e3\u6790",level:3},{value:"7. \u731c\u60f3\u9a8c\u8bc1",id:"7-\u731c\u60f3\u9a8c\u8bc1",level:3},{value:"8. \u603b\u7ed3",id:"8-\u603b\u7ed3",level:3}];function l(n){const e={blockquote:"blockquote",code:"code",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(e.blockquote,{children:["\n",(0,a.jsx)(e.p,{children:"\u57fa\u4e8eSpring 5.4.2\u7248\u672c\u5206\u6790"}),"\n"]}),"\n",(0,a.jsx)(e.h3,{id:"1-component\u6982\u8981",children:"1. @Component\u6982\u8981"}),"\n",(0,a.jsxs)(e.p,{children:["Spring\u4e2d\u6709\u4e00\u4e2a\u91cd\u8981\u7684\u6ce8\u89e3\u90a3\u5c31\u662f ",(0,a.jsx)(e.strong,{children:(0,a.jsx)(e.code,{children:"@Component"})})," \u3002\u5bf9\u4e8eSpring\u4e2d\u4e0d\u540c\u573a\u666f\u4e0b\u4f7f\u7528\u7684\u6ce8\u89e3\u4f8b\u5982\uff1a",(0,a.jsx)(e.strong,{children:(0,a.jsx)(e.code,{children:"@Repository"})})," \u3001",(0,a.jsx)(e.strong,{children:(0,a.jsx)(e.code,{children:"@Service"})})," \u3001 ",(0,a.jsx)(e.strong,{children:(0,a.jsx)(e.code,{children:"@Controller"})})," \u90fd\u662f\u901a\u8fc7 ",(0,a.jsx)(e.strong,{children:(0,a.jsx)(e.code,{children:"@Component"})})," \u6ce8\u89e3\u884d\u751f\u51fa\u6765\u7684\u3002"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-java",children:'@Target({ElementType.TYPE})\n@Retention(RetentionPolicy.RUNTIME)\n@Documented\n@Component\npublic @interface Service {\n\t@AliasFor(annotation = Component.class)\n\tString value() default "";\n}\n'})}),"\n",(0,a.jsxs)(e.p,{children:["\u5728\u8fd9\u91cc\u4ee3\u7801\u4e2d\u8fd8\u770b\u5230\u4e00\u4e2a\u91cd\u8981\u7684\u6ce8\u89e3\u6765\u5b9e\u73b0\u6d3e\u751f\uff1a ",(0,a.jsx)(e.strong,{children:(0,a.jsx)(e.code,{children:"@AliasFor"})})," \u3002"]}),"\n",(0,a.jsx)(e.h3,{id:"2-component\u5165\u53e3",children:"2. @Component\u5165\u53e3"}),"\n",(0,a.jsx)(e.p,{children:"\u4e0d\u8bba\u662f\u73b0\u5728Spring\u6d41\u884c\u7684\u6ce8\u89e3\u65b9\u5f0f\u8fd8\u662f\u4ee5\u524d\u7684\u8001\u5f0f\u7684XML\u914d\u7f6e\u65b9\u5f0f\u90fd\u6709\u4e00\u4e2a\u5165\u53e3\u3002\u8fd9\u91cc\u5c31\u53ea\u5206\u6790\u6ce8\u89e3\u6a21\u5f0f\u3002"}),"\n",(0,a.jsx)(e.p,{children:"\u5bf9\u4e8eXML\u914d\u7f6e\u7684\u65b9\u5f0f\u53ef\u4ee5\u4ece\u4e0b\u9762\u7684\u4ee3\u7801\u4e2d\u627e\u5230\u5165\u53e3\uff1a"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-java",children:'public class ContextNamespaceHandler extends NamespaceHandlerSupport {\n\n\t@Override\n\tpublic void init() {\n\t\tregisterBeanDefinitionParser("property-placeholder", new PropertyPlaceholderBeanDefinitionParser());\n\t\tregisterBeanDefinitionParser("property-override", new PropertyOverrideBeanDefinitionParser());\n\t\tregisterBeanDefinitionParser("annotation-config", new AnnotationConfigBeanDefinitionParser());\n\t\tregisterBeanDefinitionParser("component-scan", new ComponentScanBeanDefinitionParser());\n\t\tregisterBeanDefinitionParser("load-time-weaver", new LoadTimeWeaverBeanDefinitionParser());\n\t\tregisterBeanDefinitionParser("spring-configured", new SpringConfiguredBeanDefinitionParser());\n\t\tregisterBeanDefinitionParser("mbean-export", new MBeanExportBeanDefinitionParser());\n\t\tregisterBeanDefinitionParser("mbean-server", new MBeanServerBeanDefinitionParser());\n\t}\n\n}\n'})}),"\n",(0,a.jsx)(e.p,{children:"\u5bf9\u4e8e\u6ce8\u89e3\u65b9\u5f0f"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-java",children:"\tpublic AnnotationConfigApplicationContext(String... basePackages) {\n\t\tthis();\n\t\tscan(basePackages);\n\t\trefresh();\n\t}\n"})}),"\n",(0,a.jsxs)(e.p,{children:["\u53ef\u4ee5\u770b\u4e00\u4e0b ",(0,a.jsx)(e.strong,{children:(0,a.jsx)(e.code,{children:"AnnotationConfigApplicationContext"})})," \u7c7b\u3002"]}),"\n",(0,a.jsxs)(e.p,{children:["\u4e0d\u7ba1\u662f\u6ce8\u89e3\u65b9\u5f0f\u8fd8\u662fXML\u65b9\u5f0f\u6700\u7ec8\u90fd\u662f\u901a\u8fc7 ",(0,a.jsx)(e.strong,{children:(0,a.jsx)(e.code,{children:"ClassPathBeanDefinitionScanner"})})," \u7c7b\u6765\u5c06\u5305\u542b\u6709 ",(0,a.jsx)(e.strong,{children:(0,a.jsx)(e.code,{children:"@Component"})})," \u6ce8\u89e3\u7684\u7c7b\u5b9a\u4e49\u52a0\u8f7d\u5230Spring\u5bb9\u5668\u91cc\u9762\u3002"]}),"\n",(0,a.jsx)(e.h3,{id:"3-classpathbeandefinitionscanner\u89e3\u6790",children:"3. ClassPathBeanDefinitionScanner\u89e3\u6790"}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.strong,{children:(0,a.jsx)(e.code,{children:"ClassPathBeanDefinitionScanner"})})," \u4f5c\u7528\u4e3b\u8981\u662f\u626b\u63cf\u5e26\u6709 ",(0,a.jsx)(e.strong,{children:(0,a.jsx)(e.code,{children:"@Component"})})," \u6ce8\u89e3\u7684\u7c7b\u5e76\u5b9e\u73b0\u6ce8\u518c\u3002\u4e0b\u9762\u6765\u770b\u4e00\u4e0b ",(0,a.jsx)(e.strong,{children:(0,a.jsx)(e.code,{children:"ClassPathBeanDefinitionScanner#doScan"})})," \u65b9\u6cd5\u3002"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-java",children:'protected Set<BeanDefinitionHolder> doScan(String... basePackages) {\n\tAssert.notEmpty(basePackages, "At least one base package must be specified");\n\tSet<BeanDefinitionHolder> beanDefinitions = new LinkedHashSet<>();\n\tfor (String basePackage : basePackages) {\n        //\u627e\u57fa\u7840\u5305\u4e0b\u9762\u7684\u5019\u9009\u7684Component\n\t\tSet<BeanDefinition> candidates = findCandidateComponents(basePackage);\n        //\u4e0b\u9762\u662f\u5bf9\u52a0\u8f7d\u7684Component\u505a\u8fdb\u4e00\u6b65\u5904\u7406\n\t\tfor (BeanDefinition candidate : candidates) {\n\t\t\tScopeMetadata scopeMetadata = this.scopeMetadataResolver.resolveScopeMetadata(candidate);\n\t\t\tcandidate.setScope(scopeMetadata.getScopeName());\n\t\t\tString beanName = this.beanNameGenerator.generateBeanName(candidate, this.registry);\n\t\t\tif (candidate instanceof AbstractBeanDefinition) {\n\t\t\t\tpostProcessBeanDefinition((AbstractBeanDefinition) candidate, beanName);\n\t\t\t}\n\t\t\tif (candidate instanceof AnnotatedBeanDefinition) {\n\t\t\t\tAnnotationConfigUtils.processCommonDefinitionAnnotations((AnnotatedBeanDefinition) candidate);\n\t\t\t}\n\t\t\tif (checkCandidate(beanName, candidate)) {\n\t\t\t\tBeanDefinitionHolder definitionHolder = new BeanDefinitionHolder(candidate, beanName);\n\t\t\t\tdefinitionHolder =\n\t\t\t\t\t\tAnnotationConfigUtils.applyScopedProxyMode(scopeMetadata, definitionHolder, this.registry);\n\t\t\t\tbeanDefinitions.add(definitionHolder);\n\t\t\t\tregisterBeanDefinition(definitionHolder, this.registry);\n\t\t\t}\n\t\t}\n\t}\n\treturn beanDefinitions;\n}\n'})}),"\n",(0,a.jsxs)(e.p,{children:["\u901a\u8fc7\u4e0a\u9762\u7684\u4ee3\u7801\u53ef\u4ee5\u770b\u51fa\u6765\u4e3b\u8981\u662f\u901a\u8fc7 ",(0,a.jsx)(e.strong,{children:(0,a.jsx)(e.code,{children:"ClassPathScanningCandidateComponentProvider#findCandidateComponents"})})," \u6765\u5b9e\u73b0\u52a0\u8f7d"]}),"\n",(0,a.jsx)(e.h3,{id:"4-findcandidatecomponents\u89e3\u6790",children:"4. findCandidateComponents\u89e3\u6790"}),"\n",(0,a.jsx)(e.p,{children:"findCandidateComponents\u65b9\u6cd5\u5c5e\u4e8eClassPathScanningCandidateComponentProvider#findCandidateComponents\u3002"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-java",children:'public Set<BeanDefinition> findCandidateComponents(String basePackage) {\n\tif (this.componentsIndex != null && indexSupportsIncludeFilters()) {\n\t\treturn addCandidateComponentsFromIndex(this.componentsIndex, basePackage);\n\t}\n\telse {\n\t\treturn scanCandidateComponents(basePackage);\n\t}\n}\n\nprivate Set<BeanDefinition> scanCandidateComponents(String basePackage) {\n\tSet<BeanDefinition> candidates = new LinkedHashSet<>();\n\ttry {\n\t\tString packageSearchPath = ResourcePatternResolver.CLASSPATH_ALL_URL_PREFIX +\n\t\t\t\tresolveBasePackage(basePackage) + \'/\' + this.resourcePattern;\n\t\tResource[] resources = getResourcePatternResolver().getResources(packageSearchPath);\n\t\t//\u7701\u7565\u4e86\u90e8\u5206\u6253\u5370\u7684\u4ee3\u7801\n\t\tfor (Resource resource : resources) {\n\n\t\t\tif (resource.isReadable()) {\n\t\t\t\ttry {\n\t\t\t\t\tMetadataReader metadataReader = getMetadataReaderFactory().getMetadataReader(resource);\n\t\t\t\t\tif (isCandidateComponent(metadataReader)) {\n\t\t\t\t\t\tScannedGenericBeanDefinition sbd = new ScannedGenericBeanDefinition(metadataReader);\n\t\t\t\t\t\tsbd.setSource(resource);\n\t\t\t\t\t\tif (isCandidateComponent(sbd)) {\n\n\t\t\t\t\t\t\tcandidates.add(sbd);\n\t\t\t\t\t\t}\n\n\t\t\t\t\t}\n\n\t\t\t\t}\n\t\t\t\tcatch (Throwable ex) {\n\t\t\t\t\tthrow new BeanDefinitionStoreException(\n\t\t\t\t\t\t\t"Failed to read candidate component class: " + resource, ex);\n\t\t\t\t}\n\t\t\t}\n\t\t\telse {\n\n\t\t\t}\n\t\t}\n\t}\n\tcatch (IOException ex) {\n\t\tthrow new BeanDefinitionStoreException("I/O failure during classpath scanning", ex);\n\t}\n\treturn candidates;\n}\n'})}),"\n",(0,a.jsx)(e.p,{children:"\u8be5\u65b9\u6cd5\u4e3b\u8981\u8fd8\u662f\u4ece\u57fa\u7840\u5305\u4e2d\u83b7\u53d6\u7ec4\u4ef6\u3002\u4ece\u4ee3\u7801\u5206\u6790\u4e00\u4e0b\u5927\u6982\u7684\u601d\u8def\uff1a"}),"\n",(0,a.jsxs)(e.ol,{children:["\n",(0,a.jsx)(e.li,{children:"\u6839\u636e\u57fa\u7840\u5305\u62fc\u88c5\u626b\u63cf\u7684\u8def\u5f84\u6b63\u5219\u8868\u8fbe\u5f0f\u3002"}),"\n",(0,a.jsxs)(e.li,{children:["\u83b7\u53d6\u8def\u5f84\u4e0b\u9762\u7684 ",(0,a.jsx)(e.strong,{children:(0,a.jsx)(e.code,{children:".class"})})," \u6587\u4ef6\u5305\u88c5\u6210 ",(0,a.jsx)(e.strong,{children:(0,a.jsx)(e.code,{children:"Resource"})})," \u6570\u7ec4\u3002"]}),"\n",(0,a.jsxs)(e.li,{children:["\u5c06 ",(0,a.jsx)(e.strong,{children:(0,a.jsx)(e.code,{children:".class"})})," \u6587\u4ef6\u5305\u88c5\u6210 ",(0,a.jsx)(e.strong,{children:(0,a.jsx)(e.code,{children:"Resource"})}),"  \u5904\u7406\u6210 ",(0,a.jsx)(e.strong,{children:(0,a.jsx)(e.code,{children:"MetadataReader"})})]}),"\n",(0,a.jsxs)(e.li,{children:["\u5224\u65ad ",(0,a.jsx)(e.strong,{children:(0,a.jsx)(e.code,{children:"MetadataReader"})})," \u662f\u5426\u4e3a\u5019\u9009\u7ec4\u4ef6"]}),"\n",(0,a.jsxs)(e.li,{children:["\u5224\u65ad ",(0,a.jsx)(e.strong,{children:(0,a.jsx)(e.code,{children:"ScannedGenericBeanDefinition"})})," \u662f\u5426\u4e3a\u5019\u9009\u7ec4\u4ef6\uff0c",(0,a.jsx)(e.strong,{children:(0,a.jsx)(e.code,{children:"ScannedGenericBeanDefinition"})})," \u7531 ",(0,a.jsx)(e.strong,{children:(0,a.jsx)(e.code,{children:"MetadataReader"})})," \u6784\u5efa\u3002"]}),"\n"]}),"\n",(0,a.jsxs)(e.p,{children:["\u5224\u65ad\u662f\u5426\u4e3a\u5019\u9009\u7ec4\u4ef6\u901a\u8fc7 ",(0,a.jsx)(e.strong,{children:(0,a.jsx)(e.code,{children:"ClassPathScanningCandidateComponentProvider#isCandidateComponent"})})," \u65b9\u6cd5\u3002"]}),"\n",(0,a.jsx)(e.h3,{id:"5-iscandidatecomponent\u65b9\u6cd5\u89e3\u6790",children:"5. isCandidateComponent\u65b9\u6cd5\u89e3\u6790"}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.strong,{children:(0,a.jsx)(e.code,{children:"isCandidateComponent"})})," \u65b9\u6cd5\u5728 ",(0,a.jsx)(e.strong,{children:(0,a.jsx)(e.code,{children:"ClassPathScanningCandidateComponentProvider#isCandidateComponent"})})," \u7c7b\u4e2d\u3002"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-java",children:"protected boolean isCandidateComponent(MetadataReader metadataReader) throws IOException {\n\t//\u7701\u7565\u90e8\u5206\u4ee3\u7801\n\tfor (TypeFilter tf : this.includeFilters) {\n        //\u5224\u65ad\u662f\u5426\u4e3a@Component\u6ce8\u89e3\u4fee\u9970\n\t\tif (tf.match(metadataReader, getMetadataReaderFactory())) {\n\t\t\treturn isConditionMatch(metadataReader);\n\t\t}\n\t}\n\treturn false;\n}\n"})}),"\n",(0,a.jsxs)(e.p,{children:["\u5728 ",(0,a.jsx)(e.strong,{children:(0,a.jsx)(e.code,{children:"ClassPathScanningCandidateComponentProvider"})})," \u521d\u59cb\u5316\u7684\u65f6\u5019\u56de\u53ea\u8bbe\u7f6e\u4e86 ",(0,a.jsx)(e.strong,{children:(0,a.jsx)(e.code,{children:"@Component"})})," \u6ce8\u89e3\u3002\u5e76\u6ca1\u6709\u770b\u5230 ",(0,a.jsx)(e.strong,{children:(0,a.jsx)(e.code,{children:"@Repository"})})," \u3001",(0,a.jsx)(e.strong,{children:(0,a.jsx)(e.code,{children:"@Service"})})," \u3001 ",(0,a.jsx)(e.strong,{children:(0,a.jsx)(e.code,{children:"@Controller"})}),"  \u8fd9\u4e9b\u3002"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-java",children:'//ClassPathScanningCandidateComponentProvider#registerDefaultFilters\nprotected void registerDefaultFilters() {\n\tthis.includeFilters.add(new AnnotationTypeFilter(Component.class));\n\tClassLoader cl = ClassPathScanningCandidateComponentProvider.class.getClassLoader();\n\ttry {\n\t\tthis.includeFilters.add(new AnnotationTypeFilter(\n\t\t\t\t((Class<? extends Annotation>) ClassUtils.forName("javax.annotation.ManagedBean", cl)), false));\n\t\tlogger.trace("JSR-250 \'javax.annotation.ManagedBean\' found and supported for component scanning");\n\t}\n\tcatch (ClassNotFoundException ex) {\n\t\t// JSR-250 1.1 API (as included in Java EE 6) not available - simply skip.\n\t}\n\ttry {\n\t\tthis.includeFilters.add(new AnnotationTypeFilter(\n\t\t\t\t((Class<? extends Annotation>) ClassUtils.forName("javax.inject.Named", cl)), false));\n\t\tlogger.trace("JSR-330 \'javax.inject.Named\' annotation found and supported for component scanning");\n\t}\n\tcatch (ClassNotFoundException ex) {\n\t\t// JSR-330 API not available - simply skip.\n\t}\n}\n'})}),"\n",(0,a.jsxs)(e.p,{children:["\u524d\u9762\u8bf4\u8fc7 ",(0,a.jsx)(e.strong,{children:(0,a.jsx)(e.code,{children:"@Repository"})})," \u3001",(0,a.jsx)(e.strong,{children:(0,a.jsx)(e.code,{children:"@Service"})})," \u3001 ",(0,a.jsx)(e.strong,{children:(0,a.jsx)(e.code,{children:"@Controller"})})," \u90fd\u662f\u901a\u8fc7 ",(0,a.jsx)(e.strong,{children:(0,a.jsx)(e.code,{children:"@Component"})})," \u6d3e\u751f\u6765\u7684\u3002"]}),"\n",(0,a.jsx)(e.h3,{id:"6-component\u6d3e\u751f\u8fc7\u7a0b\u89e3\u6790",children:"6. @Component\u6d3e\u751f\u8fc7\u7a0b\u89e3\u6790"}),"\n",(0,a.jsxs)(e.p,{children:["\u5728 ",(0,a.jsx)(e.strong,{children:(0,a.jsx)(e.code,{children:"ClassPathScanningCandidateComponentProvider#scanCandidateComponents"})})," \u6709\u8fd9\u6837\u4e00\u6bb5\u4ee3\u7801"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-java",children:"MetadataReader metadataReader = getMetadataReaderFactory().getMetadataReader(resource);\n\npublic final MetadataReaderFactory getMetadataReaderFactory() {\n\tif (this.metadataReaderFactory == null) {\n\t\tthis.metadataReaderFactory = new CachingMetadataReaderFactory();\n\t}\n\treturn this.metadataReaderFactory;\n}\n"})}),"\n",(0,a.jsxs)(e.p,{children:["\u8fd9\u4e00\u6bb5\u4ee3\u7801\u4e3b\u8981\u662f\u4e3a\u4e86\u83b7\u53d6  ",(0,a.jsx)(e.strong,{children:(0,a.jsx)(e.code,{children:"MetadataReader"})})," \u3002\u8be5\u63a5\u53e3\u5b9a\u4e49\u4e86\u83b7\u53d6\u5f53\u524d\u7c7b\u6ce8\u89e3\u7684\u5143\u6570\u636e\u548c\u5f53\u524d\u7c7b\u7684\u5143\u6570\u636e\u3002\u5728Spring\u6846\u67b6\u4e2d\u552f\u4e00\u7684\u5b9e\u73b0\u5c31\u662f ",(0,a.jsx)(e.strong,{children:(0,a.jsx)(e.code,{children:"SimpleMetadataReader"})})," \u3002\u4e0b\u9762\u6765\u770b\u4e00\u4e0b ",(0,a.jsx)(e.strong,{children:(0,a.jsx)(e.code,{children:"SimpleMetadataReader"})})," \u7c7b\u7684\u6784\u9020\u51fd\u6570\uff1a"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-java",children:"SimpleMetadataReader(Resource resource, @Nullable ClassLoader classLoader) throws IOException {\n\tSimpleAnnotationMetadataReadingVisitor visitor = new SimpleAnnotationMetadataReadingVisitor(classLoader);\n\tgetClassReader(resource).accept(visitor, PARSING_OPTIONS);\n\tthis.resource = resource;\n\tthis.annotationMetadata = visitor.getMetadata();\n}\n"})}),"\n",(0,a.jsx)(e.p,{children:"\u5728\u6784\u9020\u51fd\u6570\u4e2d\u6709\u4e24\u4e2a\u7c7b\uff1a"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"SimpleAnnotationMetadataReadingVisitor"})}),"\n",(0,a.jsx)(e.p,{children:"\u4e3b\u8981\u7528\u4e8e\u8bbf\u95ee\u6ce8\u89e3"}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{src:"https://github.com/mxsm/picture/blob/main/spring/ClassVisitor.png?raw=true",alt:""})}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"ClassReader"})}),"\n",(0,a.jsx)(e.p,{children:"\u7c7b\u8bfb\u53d6\u5668\uff0c\u57fa\u4e8eASM\u6846\u67b6\u5b9e\u73b0\u7684\u3002"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(e.p,{children:"\u8fd9\u91cc\u6211\u4eec\u8fd8\u53ef\u4ee5\u770b\u4e00\u4e0b\u7c7b\u7684\u5143\u6570\u636e\u7c7b\u7684\u7ee7\u627f\u5173\u7cfb\uff1a"}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{src:"https://github.com/mxsm/picture/blob/main/spring/ClassMetadata.png?raw=true",alt:""})}),"\n",(0,a.jsxs)(e.p,{children:["\u5728 ",(0,a.jsx)(e.strong,{children:"SimpleMetadataReader"})," \u7c7b\u7684\u6784\u9020\u51fd\u6570\u4e2d\u6709\u8fd9\u6837\u4e00\u6bb5\u4ee3\u7801 ",(0,a.jsx)(e.strong,{children:"getClassReader(resource).accept(visitor, PARSING_OPTIONS);"})," \u4e3b\u8981\u662f\u7528\u6765\u7c7b\u4e0a\u9762\u7684\u6ce8\u89e3\u3002\u5305\u62ec\u6ce8\u89e3\u4e0a\u9762\u7684\u6ce8\u89e3\u3002"]}),"\n",(0,a.jsxs)(e.blockquote,{children:["\n",(0,a.jsx)(e.p,{children:"getClassReader(resource).accept(visitor, PARSING_OPTIONS)\u8fd9\u6bb5\u4ee3\u7801\u5c31\u662f\u5b9e\u73b0\u4e86\u6ce8\u89e3\u6d3e\u751f\u7684\u5173\u952e"}),"\n"]}),"\n",(0,a.jsx)(e.h3,{id:"7-\u731c\u60f3\u9a8c\u8bc1",children:"7. \u731c\u60f3\u9a8c\u8bc1"}),"\n",(0,a.jsx)(e.p,{children:"\u9996\u5148\u5199\u4e00\u4e2aController"}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{src:"https://github.com/mxsm/picture/blob/main/spring/%E9%AA%8C%E8%AF%81%E7%8C%9C%E6%83%B31.png?raw=true",alt:""})}),"\n",(0,a.jsx)(e.p,{children:"\u7136\u540e\u5728 IDEA\u8bbe\u7f6e\u6761\u4ef6\u65ad\u70b9\uff1a"}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{src:"https://github.com/mxsm/picture/blob/main/spring/%E9%AA%8C%E8%AF%81%E7%8C%9C%E6%83%B32.png?raw=true",alt:""})}),"\n",(0,a.jsx)(e.p,{children:"\u770b\u4e00\u4e0bmetadata\u53d8\u91cf\uff1a"}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{src:"https://github.com/mxsm/picture/blob/main/spring/%E9%AA%8C%E8%AF%81%E7%8C%9C%E6%83%B33.png?raw=true",alt:""})}),"\n",(0,a.jsx)(e.p,{children:"\u7136\u540e\u770b\u4e00\u4e0b\u53d8\u91cf\u503cannotations:"}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{src:"https://github.com/mxsm/picture/blob/main/spring/%E9%AA%8C%E8%AF%81%E7%8C%9C%E6%83%B34.png?raw=true",alt:""})}),"\n",(0,a.jsxs)(e.p,{children:["\u8fd9\u91cc\u53ef\u4ee5\u770b\u51fa\u6765\u5df2\u7ecf\u8bfb\u53d6\u5230\u4e86 ",(0,a.jsx)(e.strong,{children:(0,a.jsx)(e.code,{children:"AsyncController"})})," \u7c7b\u4e0a\u9762\u7684\u6ce8\u89e3\uff0c\u7136\u540e\u5728\u53d8\u91cf\u4e2d\u6709\u4e00\u4e2amappings\u7684\u53d8\u91cf\u4e0b\u9762\u6765\u770b\u4e00\u4e0b\uff1a"]}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{src:"https://github.com/mxsm/picture/blob/main/spring/%E9%AA%8C%E8%AF%81%E7%8C%9C%E6%83%B35.png?raw=true",alt:""})}),"\n",(0,a.jsx)(e.p,{children:"\u8fd9\u4e2a\u91cc\u9762\u5c31\u5305\u542b\u4e86\u9664\u4e86Java\u7684\u6ce8\u89e3\u4ee5\u5916\u7684\u6240\u6709\u6ce8\u89e3\u3002\uff08\u8fd9\u91cc\u7531\u4e8e\u9875\u9762\u7684\u5173\u7cfb\u4e0d\u80fd\u5b8c\u5168\u5c55\u793a\uff09"}),"\n",(0,a.jsx)(e.h3,{id:"8-\u603b\u7ed3",children:"8. \u603b\u7ed3"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"@Component\u662fspring\u6ce8\u89e3\u7684\u57fa\u7840"}),"\n",(0,a.jsx)(e.li,{children:"ClassPathBeanDefinitionScanner\u626b\u63cf\u5236\u5b9a\u57fa\u7840\u5305\u4e0b\u9762\u7684\u5305\u542b@Component\u6ce8\u89e3"}),"\n",(0,a.jsx)(e.li,{children:"\u901a\u8fc7ClassReader\uff08\u57fa\u4e8eASM\u5b9e\u73b0\uff09\u6765\u8bfb\u53d6\u7c7b\u4e0a\u9762\u6240\u6709\u7684\u6ce8\u89e3\u3002"}),"\n"]})]})}function p(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(l,{...n})}):l(n)}},8453:(n,e,t)=>{t.d(e,{R:()=>r,x:()=>o});var a=t(6540);const i={},s=a.createContext(i);function r(n){const e=a.useContext(s);return a.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:r(n.components),a.createElement(s.Provider,{value:e},n.children)}}}]);