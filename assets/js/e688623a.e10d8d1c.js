"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[2933],{3905:(n,e,t)=>{t.d(e,{Zo:()=>p,kt:()=>g});var a=t(7294);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function r(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function s(n,e){if(null==n)return{};var t,a,o=function(n,e){if(null==n)return{};var t,a,o={},i=Object.keys(n);for(a=0;a<i.length;a++)t=i[a],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(a=0;a<i.length;a++)t=i[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var d=a.createContext({}),l=function(n){var e=a.useContext(d),t=e;return n&&(t="function"==typeof n?n(e):r(r({},e),n)),t},p=function(n){var e=l(n.components);return a.createElement(d.Provider,{value:e},n.children)},c="mdxType",u={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(n,e){var t=n.components,o=n.mdxType,i=n.originalType,d=n.parentName,p=s(n,["components","mdxType","originalType","parentName"]),c=l(t),m=o,g=c["".concat(d,".").concat(m)]||c[m]||u[m]||i;return t?a.createElement(g,r(r({ref:e},p),{},{components:t})):a.createElement(g,r({ref:e},p))}));function g(n,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var i=t.length,r=new Array(i);r[0]=m;var s={};for(var d in e)hasOwnProperty.call(e,d)&&(s[d]=e[d]);s.originalType=n,s[c]="string"==typeof n?n:o,r[1]=s;for(var l=2;l<i;l++)r[l]=t[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6342:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=t(7462),o=(t(7294),t(3905));const i={title:"spring\u6ce8\u89e3\u6e90\u7801\u89e3\u6790\u4e4b-Conditional",linkTitle:"spring\u6ce8\u89e3\u6e90\u7801\u89e3\u6790\u4e4b-Conditional",date:new Date("2018-04-15T00:00:00.000Z"),weight:2},r=void 0,s={unversionedId:"spring/spring-framework/annotation-source-analysis/conditional",id:"spring/spring-framework/annotation-source-analysis/conditional",title:"spring\u6ce8\u89e3\u6e90\u7801\u89e3\u6790\u4e4b-Conditional",description:"1. Conditional\u6ce8\u89e3\u7684\u4f5c\u7528",source:"@site/docs/spring/spring-framework/annotation-source-analysis/conditional.md",sourceDirName:"spring/spring-framework/annotation-source-analysis",slug:"/spring/spring-framework/annotation-source-analysis/conditional",permalink:"/docs/spring/spring-framework/annotation-source-analysis/conditional",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/spring/spring-framework/annotation-source-analysis/conditional.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1684027896,formattedLastUpdatedAt:"May 14, 2023",frontMatter:{title:"spring\u6ce8\u89e3\u6e90\u7801\u89e3\u6790\u4e4b-Conditional",linkTitle:"spring\u6ce8\u89e3\u6e90\u7801\u89e3\u6790\u4e4b-Conditional",date:"2018-04-15T00:00:00.000Z",weight:2}},d={},l=[{value:"1. Conditional\u6ce8\u89e3\u7684\u4f5c\u7528",id:"1-conditional\u6ce8\u89e3\u7684\u4f5c\u7528",level:3},{value:"2. \u4ece\u6e90\u7801\u89e3\u6790Conditional\u5982\u4f55\u53d1\u6325\u4f5c\u7528",id:"2-\u4ece\u6e90\u7801\u89e3\u6790conditional\u5982\u4f55\u53d1\u6325\u4f5c\u7528",level:3}],p={toc:l},c="wrapper";function u(n){let{components:e,...t}=n;return(0,o.kt)(c,(0,a.Z)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"1-conditional\u6ce8\u89e3\u7684\u4f5c\u7528"},"1. Conditional\u6ce8\u89e3\u7684\u4f5c\u7528"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"@Target({ElementType.TYPE, ElementType.METHOD})\n@Retention(RetentionPolicy.RUNTIME)\n@Documented\npublic @interface Conditional {\n\n    Class<? extends Condition>[] value();\n\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"@FunctionalInterface\npublic interface Condition {\n\n    boolean matches(ConditionContext context, AnnotatedTypeMetadata metadata);\n\n}\n")),(0,o.kt)("p",null,"\u4e00\u4e2a\u662f\u6ce8\u89e3\u3001\u4e00\u4e2a\u662f\u63a5\u53e3\u3002"),(0,o.kt)("h3",{id:"2-\u4ece\u6e90\u7801\u89e3\u6790conditional\u5982\u4f55\u53d1\u6325\u4f5c\u7528"},"2. \u4ece\u6e90\u7801\u89e3\u6790Conditional\u5982\u4f55\u53d1\u6325\u4f5c\u7528"),(0,o.kt)("p",null,"\u901a\u8fc7\u6e90\u7801\u5206\u6790\u6ce8\u89e3 ",(0,o.kt)("strong",{parentName:"p"},"Conditional")," \u4e3b\u8981\u5728\u4e09\u4e2a\u7c7b\u4e2d\u3002 ",(0,o.kt)("strong",{parentName:"p"},"AnnotatedBeanDefinitionReader")," \u3001 ",(0,o.kt)("strong",{parentName:"p"},"ClassPathScanningCandidateComponentProvider")," \u3001 ",(0,o.kt)("strong",{parentName:"p"},"ConditionEvaluator")," \u3002\u901a\u8fc7\u8fdb\u4e00\u6b65\u5206\u6790\u53d1\u73b0 ",(0,o.kt)("strong",{parentName:"p"},"AnnotatedBeanDefinitionReader\u3001ClassPathScanningCandidateComponentProvider")," \u4e2d\u90fd\u5305\u542b\u4e86 ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"ConditionEvaluator"))," \u7c7b\u7684\u53d8\u91cf\u3002",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"AnnotatedBeanDefinitionReader"))," \u4e3b\u8981\u7528\u6765\u8bfb\u53d6\u6ce8\u89e3\u7684BeanDefinition\uff0c\u800c ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"ClassPathScanningCandidateComponentProvider"))," \u4e3b\u8981\u7531 ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"ClassPathBeanDefinitionScanner"))," \u7ee7\u627f\uff0c\u8be5\u7c7b\u4e3b\u8981\u7528\u6765\u626b\u63cfclass path \u7684BeanDefinition\u3002\u4e0b\u9762\u901a\u8fc7\u5206\u6790\u4e00\u4e0b ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"ClassPathBeanDefinitionScanner"))," \u6e90\u7801\u6765\u770b\u4e00\u4e0b\u5982\u4f55\u53d1\u6325\u4f5c\u7528\u7684\uff0c\u770b\u4e00\u4e0b ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"ClassPathBeanDefinitionScanner#doScan"))," \u65b9\u6cd5\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"protected Set<BeanDefinitionHolder> doScan(String... basePackages) {\n    \n    //\u7701\u7565\u90e8\u5206\u4ee3\u7801\n    \n    for (String basePackage : basePackages) {\n            //\u8fd9\u4e2a\u65b9\u6cd5\u6765\u627e\u5230\u5019\u9009\u7684BeanDefinition\n            Set<BeanDefinition> candidates = findCandidateComponents(basePackage);\n        \n        //\u751f\u8def\u90e8\u5206\u4ee3\u7801\n    }\n}\n")),(0,o.kt)("p",null,"\u90a3\u4e48\u518d\u6765\u770b\u4e00\u4e0b ",(0,o.kt)("strong",{parentName:"p"},"ClassPathScanningCandidateComponentProvider#findCandidateComponents")," \u65b9\u6cd5\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"    public Set<BeanDefinition> findCandidateComponents(String basePackage) {\n        if (this.componentsIndex != null && indexSupportsIncludeFilters()) {\n            return addCandidateComponentsFromIndex(this.componentsIndex, basePackage);\n        }\n        else {\n            return scanCandidateComponents(basePackage);\n        }\n    }\n")),(0,o.kt)("p",null,"\u8fdb\u4e00\u6b65\u5206\u6790\u4e0a\u9762\u7684 ",(0,o.kt)("strong",{parentName:"p"},"scanCandidateComponents")," \u548c ",(0,o.kt)("strong",{parentName:"p"},"addCandidateComponentsFromIndex")," \u65b9\u6cd5\u53d1\u73b0\uff0c\u8fd9\u4e24\u4e2a\u65b9\u6cd5\u4e2d\u90fd\u8c03\u7528\u4e86\u540c\u4e00\u4e2a\u65b9\u6cd5 ",(0,o.kt)("strong",{parentName:"p"},"ClassPathScanningCandidateComponentProvider#isCandidateComponent")," \uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"    protected boolean isCandidateComponent(MetadataReader metadataReader) throws IOException {\n        //excludeFilters\u6392\u9664\n        for (TypeFilter tf : this.excludeFilters) {\n            if (tf.match(metadataReader, getMetadataReaderFactory())) {\n                return false;\n            }\n        }\n        for (TypeFilter tf : this.includeFilters) {\n            if (tf.match(metadataReader, getMetadataReaderFactory())) {\n                //\u8fd9\u4e2a\u65b9\u6cd5\u5c31\u662fConditional\u6ce8\u89e3\u7684\u5b9e\u73b0\n                return isConditionMatch(metadataReader);\n            }\n        }\n        return false;\n    }\n    private boolean isConditionMatch(MetadataReader metadataReader) {\n        if (this.conditionEvaluator == null) {\n            this.conditionEvaluator =\n                    new ConditionEvaluator(getRegistry(), this.environment, this.resourcePatternResolver);\n        }\n        return !this.conditionEvaluator.shouldSkip(metadataReader.getAnnotationMetadata());\n    }\n")),(0,o.kt)("p",null,"\u901a\u8fc7\u4ee3\u7801\u5206\u6790\u53ef\u4ee5\u770b\u51fa\u6765\u6700\u540e\u662f\u901a\u8fc7\u8c03\u7528 ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},(0,o.kt)("inlineCode",{parentName:"em"},"ConditionEvaluator#shouldSkip")))," \u7684\u65b9\u6cd5\u6765\u5b9e\u73b0\u7684\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"    public boolean shouldSkip(AnnotatedTypeMetadata metadata) {\n        return shouldSkip(metadata, null);\n    }\n    public boolean shouldSkip(@Nullable AnnotatedTypeMetadata metadata, @Nullable ConfigurationPhase phase) {\n        \n        //\u5224\u65ad\u662f\u5426\u6709\u6ce8\u89e3Conditional\n        if (metadata == null || !metadata.isAnnotated(Conditional.class.getName())) {\n            return false;\n        }\n\n        //\u5224\u65ad\u914d\u7f6e\u89e3\u6790\u7684\u7c7b\u578b\n        if (phase == null) {\n            \n            //\u914d\u7f6e\u7c7b\u7684\u7c7b\u578b\n            if (metadata instanceof AnnotationMetadata &&\n                    ConfigurationClassUtils.isConfigurationCandidate((AnnotationMetadata) metadata)) {\n                return shouldSkip(metadata, ConfigurationPhase.PARSE_CONFIGURATION);\n            }\n            //bean\u6ce8\u518c\u7c7b\u578b\n            return shouldSkip(metadata, ConfigurationPhase.REGISTER_BEAN);\n        }\n\n        List<Condition> conditions = new ArrayList<>();\n        for (String[] conditionClasses : getConditionClasses(metadata)) {\n            for (String conditionClass : conditionClasses) {\n                Condition condition = getCondition(conditionClass, this.context.getClassLoader());\n                conditions.add(condition);\n            }\n        }\n\n        AnnotationAwareOrderComparator.sort(conditions);\n\n        for (Condition condition : conditions) {\n            ConfigurationPhase requiredPhase = null;\n            if (condition instanceof ConfigurationCondition) {\n                requiredPhase = ((ConfigurationCondition) condition).getConfigurationPhase();\n            }\n            //\u8c03\u7528Condition#matches\u63a5\u53e3\u6765\u5224\u65ad\u662f\u5426\u52a0\u8f7d\u8be5\u7c7b\n            if ((requiredPhase == null || requiredPhase == phase) && !condition.matches(this.context, metadata)) {\n                return true;\n            }\n        }\n\n        return false;\n    }\n")),(0,o.kt)("p",null,"\u901a\u8fc7\u6e90\u7801\u89e3\u6790\u5c31\u77e5\u9053\u4e86\u6ce8\u89e3@Conditional\u914d\u5408Condition\u63a5\u53e3\u5728Spring\u5bb9\u5668\u4e2d\u8fdb\u884c\u6761\u4ef6\u5316\u52a0\u8f7dBean\u3002\u8fd9\u4e2a\u5728SpringBoot\u4e2d\u88ab\u5e7f\u6cdb\u7684\u5e94\u7528\u3002"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u8fd9\u4e2a\u6761\u4ef6\u52a0\u8f7dBean\u548c\u7b56\u7565\u6a21\u5f0f\u5dee\u4e0d\u591a\u3002\u901a\u8fc7\u4e0d\u540c\u7684\u7b56\u7565\u6765\u52a0\u8f7d\u4e0d\u540c\u7684Bean")))}u.isMDXComponent=!0}}]);