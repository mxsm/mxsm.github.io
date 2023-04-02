"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[141],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),d=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=d(e.components);return a.createElement(s.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(t),m=r,g=p["".concat(s,".").concat(m)]||p[m]||u[m]||o;return t?a.createElement(g,i(i({ref:n},c),{},{components:t})):a.createElement(g,i({ref:n},c))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=t[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6349:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=t(7462),r=(t(7294),t(3905));const o={title:"Spring\u6ce8\u89e3\u6e90\u7801\u89e3\u6790\u4e4b-Autowired\u548cValue",linkTitle:"Spring\u6ce8\u89e3\u6e90\u7801\u89e3\u6790\u4e4b-Autowired\u548cValue",date:new Date("2019-05-14T00:00:00.000Z"),weight:1},i=void 0,l={unversionedId:"spring/spring-framework/annotation-source-analysis/autowired-value",id:"spring/spring-framework/annotation-source-analysis/autowired-value",title:"Spring\u6ce8\u89e3\u6e90\u7801\u89e3\u6790\u4e4b-Autowired\u548cValue",description:"1. @Autowired\u548c@Value\u6ce8\u89e3",source:"@site/docs/spring/spring-framework/annotation-source-analysis/autowired-value.md",sourceDirName:"spring/spring-framework/annotation-source-analysis",slug:"/spring/spring-framework/annotation-source-analysis/autowired-value",permalink:"/docs/spring/spring-framework/annotation-source-analysis/autowired-value",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/spring/spring-framework/annotation-source-analysis/autowired-value.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1680402643,formattedLastUpdatedAt:"Apr 2, 2023",frontMatter:{title:"Spring\u6ce8\u89e3\u6e90\u7801\u89e3\u6790\u4e4b-Autowired\u548cValue",linkTitle:"Spring\u6ce8\u89e3\u6e90\u7801\u89e3\u6790\u4e4b-Autowired\u548cValue",date:"2019-05-14T00:00:00.000Z",weight:1}},s={},d=[{value:"1. @Autowired\u548c@Value\u6ce8\u89e3",id:"1-autowired\u548cvalue\u6ce8\u89e3",level:3},{value:"2. \u6ce8\u89e3\u5904\u7406\u7c7bAutowiredAnnotationBeanPostProcessor\u6e90\u7801\u89e3\u6790",id:"2-\u6ce8\u89e3\u5904\u7406\u7c7bautowiredannotationbeanpostprocessor\u6e90\u7801\u89e3\u6790",level:3},{value:"3. \u81ea\u5b9a\u4e49\u62d3\u5c55",id:"3-\u81ea\u5b9a\u4e49\u62d3\u5c55",level:3}],c={toc:d},p="wrapper";function u(e){let{components:n,...t}=e;return(0,r.kt)(p,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"1-autowired\u548cvalue\u6ce8\u89e3"},"1. @Autowired\u548c@Value\u6ce8\u89e3"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6e90\u7801\u7248\u672cSpring5.2.X")),(0,r.kt)("p",null,"\u9996\u5148\u6765\u770b\u4e00\u4e0b\u8fd9\u4e24\u4e2a\u6ce8\u89e3\u7684\u6e90\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"@Target({ElementType.CONSTRUCTOR, ElementType.METHOD, ElementType.PARAMETER, ElementType.FIELD, ElementType.ANNOTATION_TYPE})\n@Retention(RetentionPolicy.RUNTIME)\n@Documented\npublic @interface Autowired {\n    boolean required() default true;\n}\n\n@Target({ElementType.FIELD, ElementType.METHOD, ElementType.PARAMETER, ElementType.ANNOTATION_TYPE})\n@Retention(RetentionPolicy.RUNTIME)\n@Documented\npublic @interface Value {\n    String value();\n}\n\n")),(0,r.kt)("p",null,"\u4ece\u4e0a\u9762\u7684\u6e90\u7801\u53ef\u4ee5\u770b\u51fa\u6765\u4e24\u4e2a\u6ce8\u89e3\u90fd\u53ef\u4ee5\u7528\u4e8e ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"\u65b9\u6cd5\u3001\u53c2\u6570\u3001\u53d8\u91cf\u3001\u6ce8\u89e3\u7c7b\u578b"))," \u3002",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"@Autowired"))," \u8fd8\u80fd\u7528\u4e8e\u6784\u9020\u51fd\u6570\u3002\u901a\u8fc7\u8fd9\u4e2a\u7c7b\u4f7f\u7528\u7684\u5730\u65b9\u53ef\u4ee5\u770b\u51fa\u6765\uff0c\u4e3b\u8981\u7528\u4e8e\u7c7b\u7684\u5185\u90e8\u3002\u6240\u4ee5\u4e3b\u8981\u662f\u901a\u8fc7 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"BeanPostProcessor"))," \u6765\u5904\u7406\u8fd9\u4e24\u4e2a\u6ce8\u89e3\u3002"),(0,r.kt)("h3",{id:"2-\u6ce8\u89e3\u5904\u7406\u7c7bautowiredannotationbeanpostprocessor\u6e90\u7801\u89e3\u6790"},"2. \u6ce8\u89e3\u5904\u7406\u7c7bAutowiredAnnotationBeanPostProcessor\u6e90\u7801\u89e3\u6790"),(0,r.kt)("p",null,"\u9996\u5148\u770b ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},(0,r.kt)("inlineCode",{parentName:"em"},"AutowiredAnnotationBeanPostProcessor")))," \u662f\u5982\u4f55\u6ce8\u5165\u5230\u4e0a\u4e0b\u6587\u4e2d\u7684\u3002\u901a\u8fc7\u4ee3\u7801\u53d1\u73b0\u4e3b\u8981\u662f\u6709 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"AnnotationConfigUtils#registerAnnotationConfigProcessors"))," \u6ce8\u5165\u5230\u4e0a\u4e0b\u6587\u4e2d\u7684\u3002\u770b\u4e00\u4e0b\u6e90\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"    public static Set<BeanDefinitionHolder> registerAnnotationConfigProcessors(\n            BeanDefinitionRegistry registry, @Nullable Object source) {\n\n        DefaultListableBeanFactory beanFactory = unwrapDefaultListableBeanFactory(registry);\n        if (beanFactory != null) {\n        //\u7701\u7565\u4ee3\u7801\n\n        //\u6ce8\u5165AutowiredAnnotationBeanPostProcessor\u7c7b\u7684\u5b9a\u4e49\n        if (!registry.containsBeanDefinition(AUTOWIRED_ANNOTATION_PROCESSOR_BEAN_NAME)) {\n            RootBeanDefinition def = new RootBeanDefinition(AutowiredAnnotationBeanPostProcessor.class);\n            def.setSource(source);\n            beanDefs.add(registerPostProcessor(registry, def, AUTOWIRED_ANNOTATION_PROCESSOR_BEAN_NAME));\n        }\n        }\n        //\u7701\u7565\u4ee3\u7801\n\n        return beanDefs;\n    }\n")),(0,r.kt)("p",null,"\u4e0b\u9762\u6765\u770b\u4e00\u4e0b ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"AutowiredAnnotationBeanPostProcessor"))," \u6e90\u7801\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public class AutowiredAnnotationBeanPostProcessor extends InstantiationAwareBeanPostProcessorAdapter\n        implements MergedBeanDefinitionPostProcessor, PriorityOrdered, BeanFactoryAware {\n    \n    //\u7701\u7565\u4ee3\u7801\n}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"AutowiredAnnotationBeanPostProcessor"))," \u7ee7\u627f\u4e86 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"InstantiationAwareBeanPostProcessorAdapter"))," \u7c7b\uff08\u8fd9\u4e2a\u7c7b\u662fBeanPostProcessor\u7684\u5b9e\u73b0\uff09\u3002\u7136\u540e\u8fd8\u5b9e\u73b0\u4e86\u5176\u4ed6\u7684\u4e09\u4e2a\u63a5\u53e3\u3002"),(0,r.kt)("p",null,"\u9996\u5148\u6765\u770b\u4e00\u4e0b\u8fd9\u4e2a\u7c7b\u7684\u6784\u9020\u51fd\u6570\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'    public AutowiredAnnotationBeanPostProcessor() {\n        this.autowiredAnnotationTypes.add(Autowired.class);\n        this.autowiredAnnotationTypes.add(Value.class);\n        try {\n            this.autowiredAnnotationTypes.add((Class<? extends Annotation>)\n                    ClassUtils.forName("javax.inject.Inject", AutowiredAnnotationBeanPostProcessor.class.getClassLoader()));\n            logger.trace("JSR-330 \'javax.inject.Inject\' annotation found and supported for autowiring");\n        }\n        catch (ClassNotFoundException ex) {\n            // JSR-330 API not available - simply skip.\n        }\n    }\n')),(0,r.kt)("p",null,"\u4ece\u8fd9\u4e2a\u6784\u9020\u51fd\u6570\u53ef\u4ee5\u770b\u51fa\u6765\u4e3b\u8981\u5904\u7406  ",(0,r.kt)("strong",{parentName:"p"},"@Autowired\u3001@Value\u3001javax.inject.Inject")," \u3002 \u7b2c\u4e09\u4e2a\u662fjavax\u3002\u8fd9\u5c31\u662f\u5bf9 JSR-330 \u6807\u51c6\u7684\u652f\u6301\u3002\u901a\u8fc7\u8c03\u7528 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"postProcessProperties"))," \u65b9\u6cd5\u6765\u5904\u7406\u4ee5\u4e0a\u7684\u4e09\u4e2a\u6ce8\u89e3"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'    @Override\n    public PropertyValues postProcessProperties(PropertyValues pvs, Object bean, String beanName) {\n        InjectionMetadata metadata = findAutowiringMetadata(beanName, bean.getClass(), pvs);\n        try {\n            metadata.inject(bean, beanName, pvs);\n        }\n        catch (BeanCreationException ex) {\n            throw ex;\n        }\n        catch (Throwable ex) {\n            throw new BeanCreationException(beanName, "Injection of autowired dependencies failed", ex);\n        }\n        return pvs;\n    }\n')),(0,r.kt)("p",null,"\u4e3b\u8981\u662f\u901a\u8fc7 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"findAutowiringMetadata"))," \u65b9\u6cd5\u6765\u83b7\u53d6\u81ea\u52a8\u6ce8\u5165\u5143\u6570\u636e\u3002\u4ee5\u53ca\u901a\u8fc7 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"InjectionMetadata#inject"))," \u65b9\u6cd5\u6765\u6ce8\u5165\u5143\u6570\u636e\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"    private InjectionMetadata findAutowiringMetadata(String beanName, Class<?> clazz, @Nullable PropertyValues pvs) {\n        // Fall back to class name as cache key, for backwards compatibility with custom callers.\n        String cacheKey = (StringUtils.hasLength(beanName) ? beanName : clazz.getName());\n        // \u4ece\u7f13\u5b58\u4e2d\u83b7\u53d6\u6ce8\u5165\u5143\u6570\u636e\n        InjectionMetadata metadata = this.injectionMetadataCache.get(cacheKey);\n        //\u5224\u65ad\u662f\u5426\u9700\u8981\u5237\u65b0\n        if (InjectionMetadata.needsRefresh(metadata, clazz)) {\n            synchronized (this.injectionMetadataCache) {\n                metadata = this.injectionMetadataCache.get(cacheKey);\n                if (InjectionMetadata.needsRefresh(metadata, clazz)) {\n                    if (metadata != null) {\n                        metadata.clear(pvs);\n                    }\n                    //\u521b\u5efa\u6ce8\u5165\u5143\u6570\u636e\n                    metadata = buildAutowiringMetadata(clazz);\n                    //\u7f13\u5b58\u6ce8\u5165\u5143\u6570\u636e\n                    this.injectionMetadataCache.put(cacheKey, metadata);\n                }\n            }\n        }\n        return metadata;\n    }\n")),(0,r.kt)("p",null,"\u6e90\u4ee3\u7801\u53ef\u4ee5\u770b\u51fa\u6765\u4e3b\u8981\u662f\u6709\u4e24\u4e2a\u65b9\u6cd5\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"InjectionMetadata.needsRefresh")),(0,r.kt)("p",{parentName:"li"},"\u5224\u65ad\u4ece\u7f13\u5b58\u4e2d\u83b7\u53d6\u7684\u6ce8\u5165\u5143\u6570\u636e\u662f\u5426\u9700\u8981\u5237\u65b0\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},"    public static boolean needsRefresh(@Nullable InjectionMetadata metadata, Class<?> clazz) {\n        return (metadata == null || metadata.targetClass != clazz);\n    }\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"buildAutowiringMetadata")),(0,r.kt)("p",{parentName:"li"},"\u521b\u5efa\u81ea\u52a8\u6ce8\u5165\u7684\u5143\u6570\u636e"))),(0,r.kt)("p",null,"\u4e0b\u9762\u6765\u770b\u4e00\u4e0b ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"buildAutowiringMetadata"))," \u7684\u6e90\u7801\u662f\u5982\u4f55\u521b\u5efa\u81ea\u52a8\u6ce8\u5165\u5143\u6570\u636e\u7684\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'private InjectionMetadata buildAutowiringMetadata(final Class<?> clazz) {\n        //\u5224\u65ad\u662f\u5426\u5305\u542b @Autowired @Value \u6216\u8005@Inject\u6ce8\u89e3\n       if (!AnnotationUtils.isCandidateClass(clazz, this.autowiredAnnotationTypes)) {\n            return InjectionMetadata.EMPTY;\n        }\n\n        List<InjectionMetadata.InjectedElement> elements = new ArrayList<>();\n        Class<?> targetClass = clazz;\n\n        do {\n            final List<InjectionMetadata.InjectedElement> currElements = new ArrayList<>();\n            //\u901a\u8fc7\u53cd\u5c04\u83b7\u53d6targetClass\n            ReflectionUtils.doWithLocalFields(targetClass, field -> {\n                MergedAnnotation<?> ann = findAutowiredAnnotation(field);\n                if (ann != null) {\n                    if (Modifier.isStatic(field.getModifiers())) {\n                        if (logger.isInfoEnabled()) {\n                            logger.info("Autowired annotation is not supported on static fields: " + field);\n                        }\n                        return;\n                    }\n                    boolean required = determineRequiredStatus(ann);\n                    currElements.add(new AutowiredFieldElement(field, required));\n                }\n            });\n\n            ReflectionUtils.doWithLocalMethods(targetClass, method -> {\n                Method bridgedMethod = BridgeMethodResolver.findBridgedMethod(method);\n                if (!BridgeMethodResolver.isVisibilityBridgeMethodPair(method, bridgedMethod)) {\n                    return;\n                }\n                MergedAnnotation<?> ann = findAutowiredAnnotation(bridgedMethod);\n                if (ann != null && method.equals(ClassUtils.getMostSpecificMethod(method, clazz))) {\n                    if (Modifier.isStatic(method.getModifiers())) {\n                        if (logger.isInfoEnabled()) {\n                            logger.info("Autowired annotation is not supported on static methods: " + method);\n                        }\n                        return;\n                    }\n                    if (method.getParameterCount() == 0) {\n                        if (logger.isInfoEnabled()) {\n                            logger.info("Autowired annotation should only be used on methods with parameters: " +\n                                    method);\n                        }\n                    }\n                    boolean required = determineRequiredStatus(ann);\n                    PropertyDescriptor pd = BeanUtils.findPropertyForMethod(bridgedMethod, clazz);\n                    currElements.add(new AutowiredMethodElement(method, required, pd));\n                }\n            });\n\n            elements.addAll(0, currElements);\n            targetClass = targetClass.getSuperclass();\n        }\n        while (targetClass != null && targetClass != Object.class);\n\n        return InjectionMetadata.forElements(elements, clazz);\n    }\n')),(0,r.kt)("p",null,"\u901a\u8fc7\u4e0a\u9762\u7684\u4ee3\u7801\u53ef\u4ee5\u770b\u51fa\u6765\u5904\u7406\u4e3b\u8981\u5206\u6210\u4e86\u4e24\u7c7b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5904\u7406\u7c7b\u7684\u5b57\u6bb5\u4e0a\u9762\u7684\u6ce8\u89e3"),(0,r.kt)("li",{parentName:"ul"},"\u5904\u7406\u65b9\u6cd5\u4e0a\u9762\u6ce8\u89e3")),(0,r.kt)("p",null,"\u6839\u636e\u5904\u7406\u7684\u4e0d\u540c\u7684\u6570\u636e\u521b\u5efa\u4e24\u4e2a\u4e0d\u540c\u7684\u81ea\u52a8\u6ce8\u5165\u5143\u7d20\u3002\u5b57\u6bb5\u7684\u521b\u5efa ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"AutowiredFieldElement")),"  \u3001 \u65b9\u6cd5\u4e0a\u9762\u7684\u6ce8\u89e3\u521b\u5efa ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"AutowiredMethodElement"))," \u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"private class AutowiredFieldElement extends InjectionMetadata.InjectedElement {\n //\u7701\u7565\u4ee3\u7801   \n}\nprivate class AutowiredMethodElement extends InjectionMetadata.InjectedElement {\n    //\u7701\u7565\u4ee3\u7801\n}\n")),(0,r.kt)("p",null,"\u4ee5\u4e0a\u4e24\u4e2a\u90fd\u662f\u5185\u90e8\u7c7b\u3002\u90fd\u7ee7\u627f\u4e86 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"InjectionMetadata.InjectedElement")),"  \u7684\u63a5\u53e3\u3002\u6839\u636e\u4e0d\u540c\u7c7b\u578b\u521b\u5efa\u597d\u4ee5\u540e\u901a\u8fc7\u8c03\u7528\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"return InjectionMetadata.forElements(elements, clazz);\n")),(0,r.kt)("p",null,"\u521b\u5efa\u8fd4\u56de\u6570\u636e\u3002\u4e5f\u5c31\u662f\u8c03\u7528 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"findAutowiringMetadata"))," \u65b9\u6cd5\u4e2d\u7684 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"buildAutowiringMetadata"))," \u65b9\u6cd5\u3002\u5728\u524d\u9762\u5206\u6790\u8fc7"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'    public void processInjection(Object bean) throws BeanCreationException {\n        Class<?> clazz = bean.getClass();\n        InjectionMetadata metadata = findAutowiringMetadata(clazz.getName(), clazz, null);\n        try {\n            //\u8fd9\u91cc\u5c31\u662f\u6ce8\u5165\u6570\u636e\u3002\n            metadata.inject(bean, null, null);\n        }\n        catch (BeanCreationException ex) {\n            throw ex;\n        }\n        catch (Throwable ex) {\n            throw new BeanCreationException(\n                    "Injection of autowired dependencies failed for class [" + clazz + "]", ex);\n        }\n    }\n')),(0,r.kt)("p",null,"\u8fd9\u91cc\u53ef\u4ee5\u5206\u4e00\u4e0b ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},(0,r.kt)("inlineCode",{parentName:"em"},"InjectionMetadata#inject")))," \u65b9\u6cd5"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'    public void inject(Object target, @Nullable String beanName, @Nullable PropertyValues pvs) throws Throwable {\n        Collection<InjectedElement> checkedElements = this.checkedElements;\n        Collection<InjectedElement> elementsToIterate =\n                (checkedElements != null ? checkedElements : this.injectedElements);\n        if (!elementsToIterate.isEmpty()) {\n            for (InjectedElement element : elementsToIterate) {\n                if (logger.isTraceEnabled()) {\n                    logger.trace("Processing injected element of bean \'" + beanName + "\': " + element);\n                }\n                //\u4e3b\u8981\u662fInjectedElement#inject\u6765\u5904\u7406\n                element.inject(target, beanName, pvs);\n            }\n        }\n    }\n')),(0,r.kt)("p",null,"\u6700\u7ec8\u662f\u901a\u8fc7\u8c03\u7528 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},(0,r.kt)("inlineCode",{parentName:"em"},"InjectedElement#inject")))," \u65b9\u6cd5\u6765\u6ce8\u5165\u3002\u4e0b\u9762\u6765\u5206\u6790\u4e00\u4e0b  ",(0,r.kt)("strong",{parentName:"p"},"AutowiredFieldElement")," \u548c ",(0,r.kt)("strong",{parentName:"p"},"AutowiredMethodElement")," \u7684\u5b9e\u73b0\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'private class AutowiredFieldElement extends InjectionMetadata.InjectedElement {\n\n        private final boolean required;\n\n        private volatile boolean cached = false;\n\n        @Nullable\n        private volatile Object cachedFieldValue;\n\n        public AutowiredFieldElement(Field field, boolean required) {\n            super(field, null);\n            this.required = required;\n        }\n@Override\n        protected void inject(Object bean, @Nullable String beanName, @Nullable PropertyValues pvs) throws Throwable {\n            Field field = (Field) this.member;\n            Object value;\n            //\u7b2c\u4e00\u6b21\u4e0d\u4f1a\u8fdb\u5165\u56e0\u4e3acached\u9ed8\u8ba4\u4e3afalse\n            if (this.cached) {\n                value = resolvedCachedArgument(beanName, this.cachedFieldValue);\n            }\n            else {\n                //\u521b\u5efa\u4e00\u4e2a\u4f9d\u8d56\u7684\u63cf\u8ff0\n                DependencyDescriptor desc = new DependencyDescriptor(field, this.required);\n                desc.setContainingClass(bean.getClass());\n                Set<String> autowiredBeanNames = new LinkedHashSet<>(1);\n                Assert.state(beanFactory != null, "No BeanFactory available");\n                //\u83b7\u53d6\u7c7b\u578b\u8f6c\u6362\u5668\n                TypeConverter typeConverter = beanFactory.getTypeConverter();\n                try {\n                    //\u83b7\u53d6\u503c\n                    value = beanFactory.resolveDependency(desc, beanName, autowiredBeanNames, typeConverter);\n                }\n                catch (BeansException ex) {\n                    throw new UnsatisfiedDependencyException(null, beanName, new InjectionPoint(field), ex);\n                }\n                //\u5904\u7406\u4f9d\u8d56\u6ce8\u5165\u7684\u6570\u636e\n                synchronized (this) {\n                    if (!this.cached) {\n                        if (value != null || this.required) {\n                            this.cachedFieldValue = desc;\n                            registerDependentBeans(beanName, autowiredBeanNames);\n                            if (autowiredBeanNames.size() == 1) {\n                                String autowiredBeanName = autowiredBeanNames.iterator().next();\n                                if (beanFactory.containsBean(autowiredBeanName) &&\n                                        beanFactory.isTypeMatch(autowiredBeanName, field.getType())) {\n                                    this.cachedFieldValue = new ShortcutDependencyDescriptor(\n                                            desc, autowiredBeanName, field.getType());\n                                }\n                            }\n                        }\n                        else {\n                            this.cachedFieldValue = null;\n                        }\n                        this.cached = true;\n                    }\n                }\n            }\n            //\u5728Value\u4e0d\u4e3a\u7a7a\u7684\u60c5\u51b5\u4e0b\u901a\u8fc7\u53cd\u5c04\u8bbe\u7f6e\u503c\n            if (value != null) {\n                ReflectionUtils.makeAccessible(field);\n                field.set(bean, value);\n            }\n        }\n    }\n')),(0,r.kt)("p",null," ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},(0,r.kt)("inlineCode",{parentName:"em"},"AutowiredMethodElement")))," \u7684\u5b9e\u73b0\u548c ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},(0,r.kt)("inlineCode",{parentName:"em"},"AutowiredFieldElement")))," \u5b9e\u73b0\u5dee\u4e0d\u591a\u3002"),(0,r.kt)("h3",{id:"3-\u81ea\u5b9a\u4e49\u62d3\u5c55"},"3. \u81ea\u5b9a\u4e49\u62d3\u5c55"),(0,r.kt)("p",null,"\u81ea\u5b9a\u4e49\u7684\u62d3\u5c55\u53ef\u4ee5\u53c2\u8003\u4e00\u4e0b\u51e0\u4e2a\u9879\u76ee\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/mxsm/spring-sample/tree/master/mxsm-nacos"},"\u81ea\u5b9a\u4e49\u7684Nacos\u7684\u62d3\u5c55\u9879\u76ee\u5730\u5740")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/nacos-group/nacos-spring-project"},"\u963f\u91cc\u5df4\u5df4\u7684Nacos\u9879\u76eeSpring\u62d3\u5c55"))),(0,r.kt)("p",null,"\u7b2c\u4e00\u4e2a\u9879\u76ee\u662f\u81ea\u5df1\u5199\u7684\uff0c\u7c7b\u4f3c\u4e8e@Value\u6ce8\u89e3\u3002"))}u.isMDXComponent=!0}}]);