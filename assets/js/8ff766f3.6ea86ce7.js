"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[5648],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(t),y=a,g=d["".concat(s,".").concat(y)]||d[y]||u[y]||i;return t?r.createElement(g,o(o({ref:n},p),{},{components:t})):r.createElement(g,o({ref:n},p))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=y;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},241:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=t(7462),a=(t(7294),t(3905));const i={title:"Spring\u61d2\u52a0\u8f7d\u6e90\u7801\u5206\u6790",date:new Date("2018-04-19T00:00:00.000Z")},o=void 0,l={unversionedId:"spring/spring-framework/core-source-analysis/spring-lazyload",id:"spring/spring-framework/core-source-analysis/spring-lazyload",title:"Spring\u61d2\u52a0\u8f7d\u6e90\u7801\u5206\u6790",description:"1 \u4ec0\u4e48\u662f\u61d2\u52a0\u8f7d",source:"@site/docs/spring/spring-framework/core-source-analysis/spring-lazyload.md",sourceDirName:"spring/spring-framework/core-source-analysis",slug:"/spring/spring-framework/core-source-analysis/spring-lazyload",permalink:"/docs/spring/spring-framework/core-source-analysis/spring-lazyload",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/spring/spring-framework/core-source-analysis/spring-lazyload.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1684027896,formattedLastUpdatedAt:"May 14, 2023",frontMatter:{title:"Spring\u61d2\u52a0\u8f7d\u6e90\u7801\u5206\u6790",date:"2018-04-19T00:00:00.000Z"},sidebar:"springframework",previous:{title:"Spring\u4e2d\u7684Aware\u63a5\u53e3",permalink:"/docs/spring/spring-framework/core-source-analysis/spring-aware-interface"},next:{title:"Spring \u751f\u547d\u5468\u671f",permalink:"/docs/spring/spring-framework/core-source-analysis/spring-lifecycle"}},s={},c=[{value:"1 \u4ec0\u4e48\u662f\u61d2\u52a0\u8f7d",id:"1-\u4ec0\u4e48\u662f\u61d2\u52a0\u8f7d",level:3},{value:"2 Spring\u662f\u5982\u4f55\u5904\u7406\u61d2\u52a0\u8f7d\u3002",id:"2-spring\u662f\u5982\u4f55\u5904\u7406\u61d2\u52a0\u8f7d",level:3},{value:"3 \u5206\u6790@Lazy\u7684\u5b9e\u73b0\u6e90\u7801",id:"3-\u5206\u6790lazy\u7684\u5b9e\u73b0\u6e90\u7801",level:3},{value:"3.1 \u5206\u6790@Lazy\u5728\u7c7b\u4e0a",id:"31-\u5206\u6790lazy\u5728\u7c7b\u4e0a",level:4},{value:"3.2 \u5206\u6790@Lazy\u5728\u7c7b\u7684\u79c1\u6709\u53d8\u91cf\u4e0a\u9762",id:"32-\u5206\u6790lazy\u5728\u7c7b\u7684\u79c1\u6709\u53d8\u91cf\u4e0a\u9762",level:4}],p={toc:c},d="wrapper";function u(e){let{components:n,...t}=e;return(0,a.kt)(d,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"1-\u4ec0\u4e48\u662f\u61d2\u52a0\u8f7d"},"1 \u4ec0\u4e48\u662f\u61d2\u52a0\u8f7d"),(0,a.kt)("p",null,"Spring\u4e2d\u6709\u4e00\u4e2a\u6982\u5ff5\u53eb\u505a\u61d2\u52a0\u8f7d\uff0c\u90a3\u4e48\u4ec0\u4e48\u662f\u61d2\u52a0\u8f7d\uff1f",(0,a.kt)("strong",{parentName:"p"},"\u5c31\u662f\u5728\u9700\u8981\u7528\u5230\u7684\u65f6\u5019\u52a0\u8f7d\u7c7b"),"\u3002"),(0,a.kt)("h3",{id:"2-spring\u662f\u5982\u4f55\u5904\u7406\u61d2\u52a0\u8f7d"},"2 Spring\u662f\u5982\u4f55\u5904\u7406\u61d2\u52a0\u8f7d\u3002"),(0,a.kt)("p",null,"\u5bf9\u4e8eSpring\u4e2d\u7684\u4e00\u4e2abean\u5982\u4f55\u5224\u65ad\u662f\u5426\u4e3a\u61d2\u52a0\u8f7dBean\u3002\u5206\u4e3a\u4e24\u79cd\u60c5\u51b5\uff1a  "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Bean\u7684\u5b9a\u4e49\u7531XML\u5b8c\u6210")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<bean id="addressBean" class="com.fh.spring.Address" lazy-init="true" />\n'))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Bean\u7684\u5b9a\u4e49\u7531\u6ce8\u89e3\u5b8c\u6210")),(0,a.kt)("p",{parentName:"li"},"@Lazy\u6ce8\u89e3\uff0c\u5bf9\u4e8e\u7c7b\u548c\u7c7b\u7684\u53d8\u91cf\u503c\u4f7f\u7528\u4e86@Lazy\u6ce8\u89e3\u8bf4\u660e\u8fd9\u4e2a\u662f\u61d2\u52a0\u8f7d"))),(0,a.kt)("h3",{id:"3-\u5206\u6790lazy\u7684\u5b9e\u73b0\u6e90\u7801"},"3 \u5206\u6790@Lazy\u7684\u5b9e\u73b0\u6e90\u7801"),(0,a.kt)("p",null,"@Lazy\u6ce8\u89e3\u4e3b\u8981\u4f7f\u7528\u5728\u4e24\u4e2a\u5730\u65b9\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u7c7b\u4e0a\u9762--\u914d\u5408@Component\u6ce8\u89e3\u4f7f\u7528"),(0,a.kt)("li",{parentName:"ol"},"\u7c7b\u7684\u79c1\u6709\u53d8\u91cf\u4e0a\u9762--\u914d\u5408@Autowired\u6ce8\u89e3\u4f7f\u7528")),(0,a.kt)("h4",{id:"31-\u5206\u6790lazy\u5728\u7c7b\u4e0a"},"3.1 \u5206\u6790@Lazy\u5728\u7c7b\u4e0a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"\n@Component\n@Lazy\npublic class ServiceTest {\n //.......\u7701\u7565\u5176\u4ed6\u7684\u4ee3\u7801   \n}\n")),(0,a.kt)("p",null,"\u5982\u4e0a\u793a\u4f8b\u4ee3\u7801\uff0c@Lazy\u7684\u4f4d\u7f6e\u5728ServiceTest\u4e0a\u9762\u3002\u5728Spring\u626b\u63cf\u5bf9\u5e94\u7684\u5305\u4e0b\u9762\u7684\u7c7b\uff0c\u89e3\u6790\u672aBeanDefinition\u7684\u65f6\u5019\uff0c\u5bf9\u5e94\u7684BeanDefinition#isLazyInit\u65b9\u6cd5\u8fd4\u56de\u4e3atrue\uff0c\u8bf4\u660e\u8fd9\u4e2aBeanDefinition\u5b9e\u73b0\u7684\u662f\u61d2\u52a0\u8f7d\u3002\n\u90a3\u4e48\u6211\u770b\u4e00\u4e0b\u5728DefaultListableBeanFactory#preInstantiateSingletons\u65b9\u6cd5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public void preInstantiateSingletons() throws BeansException {\n    \n    //\u7701\u7565\u4e86\u90e8\u5206\u4ee3\u7801\n    for (String beanName : beanNames) {\n            RootBeanDefinition bd = getMergedLocalBeanDefinition(beanName);\n            //bd.isLazyInit() \u5982\u679c\u662ftrue\u5c31\u6267\u884c\u4e0b\u9762\u7684\u4ee3\u7801\n            if (!bd.isAbstract() && bd.isSingleton() && !bd.isLazyInit()) {\n                //  \u7701\u7565Spring\u6e90\u7801\u4e2d\u7684\u4ee3\u7801\n            }\n        }\n}\n")),(0,a.kt)("p",null,"\u901a\u8fc7\u4e0a\u9762\u7684\u4ee3\u7801\u53ef\u4ee5\u77e5\u9053\uff0c\u5728\u5bb9\u5668\u542f\u52a8\u7684\u65f6\u5019\uff0c\u52a0\u4e86 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"@Lazy"))," \u7684\u7c7b\u4e0d\u4f1a\u8fdb\u884c\u5b9e\u4f8b\u5316\u3002"),(0,a.kt)("h4",{id:"32-\u5206\u6790lazy\u5728\u7c7b\u7684\u79c1\u6709\u53d8\u91cf\u4e0a\u9762"},"3.2 \u5206\u6790@Lazy\u5728\u7c7b\u7684\u79c1\u6709\u53d8\u91cf\u4e0a\u9762"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"@Lazy")," \u642d\u914d ",(0,a.kt)("strong",{parentName:"p"},"@Autowired")," \u4f7f\u7528\uff0c ",(0,a.kt)("strong",{parentName:"p"},"@Autowired")," \u7684\u5904\u7406\u7c7b\u662f ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"AutowiredAnnotationBeanPostProcessor"))," "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'private class AutowiredFieldElement extends InjectionMetadata.InjectedElement {\n\n        private final boolean required;\n\n        private volatile boolean cached = false;\n\n        @Nullable\n        private volatile Object cachedFieldValue;\n\n        public AutowiredFieldElement(Field field, boolean required) {\n            super(field, null);\n            this.required = required;\n        }\n\n        @Override\n        protected void inject(Object bean, @Nullable String beanName, @Nullable PropertyValues pvs) throws Throwable {\n            Field field = (Field) this.member;\n            Object value;\n            if (this.cached) {\n                value = resolvedCachedArgument(beanName, this.cachedFieldValue);\n            }\n            else {\n                DependencyDescriptor desc = new DependencyDescriptor(field, this.required);\n                desc.setContainingClass(bean.getClass());\n                Set<String> autowiredBeanNames = new LinkedHashSet<>(1);\n                Assert.state(beanFactory != null, "No BeanFactory available");\n                TypeConverter typeConverter = beanFactory.getTypeConverter();\n                try {\n                    //\u8fd9\u4e2a\u65b9\u6cd5\u4e3b\u8981\u7528\u6765\u5904\u7406\u65b9\u6cd5\n                    value = beanFactory.resolveDependency(desc, beanName, autowiredBeanNames, typeConverter);\n                }\n                catch (BeansException ex) {\n                    throw new UnsatisfiedDependencyException(null, beanName, new InjectionPoint(field), ex);\n                }\n                synchronized (this) {\n                    if (!this.cached) {\n                        if (value != null || this.required) {\n                            this.cachedFieldValue = desc;\n                            registerDependentBeans(beanName, autowiredBeanNames);\n                            if (autowiredBeanNames.size() == 1) {\n                                String autowiredBeanName = autowiredBeanNames.iterator().next();\n                                if (beanFactory.containsBean(autowiredBeanName) &&\n                                        beanFactory.isTypeMatch(autowiredBeanName, field.getType())) {\n                                    this.cachedFieldValue = new ShortcutDependencyDescriptor(\n                                            desc, autowiredBeanName, field.getType());\n                                }\n                            }\n                        }\n                        else {\n                            this.cachedFieldValue = null;\n                        }\n                        this.cached = true;\n                    }\n                }\n            }\n            if (value != null) {\n                ReflectionUtils.makeAccessible(field);\n                field.set(bean, value);\n            }\n        }\n    }\n')),(0,a.kt)("p",null,"\u770b\u4e00\u4e0bvalue = beanFactory.resolveDependency(desc, beanName, autowiredBeanNames, typeConverter)\u8fd9\u6bb5\u4ee3\u7801\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"    public Object resolveDependency(DependencyDescriptor descriptor, @Nullable String requestingBeanName,\n            @Nullable Set<String> autowiredBeanNames, @Nullable TypeConverter typeConverter) throws BeansException {\n\n        descriptor.initParameterNameDiscovery(getParameterNameDiscoverer());\n        if (Optional.class == descriptor.getDependencyType()) {\n            return createOptionalDependency(descriptor, requestingBeanName);\n        }\n        else if (ObjectFactory.class == descriptor.getDependencyType() ||\n                ObjectProvider.class == descriptor.getDependencyType()) {\n            return new DependencyObjectProvider(descriptor, requestingBeanName);\n        }\n        else if (javaxInjectProviderClass == descriptor.getDependencyType()) {\n            return new Jsr330Factory().createDependencyProvider(descriptor, requestingBeanName);\n        }\n        else {\n            //\u5904\u7406\u5305\u542b\u6709@Lazy\u6ce8\u89e3\u7684\n            Object result = getAutowireCandidateResolver().getLazyResolutionProxyIfNecessary(\n                    descriptor, requestingBeanName);\n            if (result == null) {\n                result = doResolveDependency(descriptor, requestingBeanName, autowiredBeanNames, typeConverter);\n            }\n            return result;\n        }\n    }\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"DefaultListableBeanFactory \u9ed8\u8ba4\u4e3a private AutowireCandidateResolver autowireCandidateResolver = new SimpleAutowireCandidateResolver();\u5bf9\u4e8e\u6ce8\u89e3\u7c7b\u7684\u5728AnnotationConfigUtils\u8fdb\u884c\u4e86\u8bbe\u7f6e\uff0cAnnotationConfigUtils#registerAnnotationConfigProcessors\u65b9\u6cd5\u4e2d\u3002if (!(beanFactory.getAutowireCandidateResolver() instanceof ContextAnnotationAutowireCandidateResolver)) {   beanFactory.setAutowireCandidateResolver(new ContextAnnotationAutowireCandidateResolver());}\u8fdb\u884c\u4e86\u8bbe\u7f6e")),(0,a.kt)("p",null,"\u5206\u6790\u4e00\u4e0b ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"ContextAnnotationAutowireCandidateResolver#getLazyResolutionProxyIfNecessary"))," \u7684\u65b9\u6cd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public Object getLazyResolutionProxyIfNecessary(DependencyDescriptor descriptor, @Nullable String beanName) {\n        //\u5224\u65ad\u662f\u5426\u4e3a\u61d2\u52a0\u8f7d\n        return (isLazy(descriptor) ? buildLazyResolutionProxy(descriptor, beanName) : null);\n    }\n")),(0,a.kt)("p",null,"\u4e0b\u9762\u6765 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"buildLazyResolutionProxy"))," \u65b9\u6cd5\uff0c\u521b\u5efa\u4ee3\u7406\u7c7b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'protected Object buildLazyResolutionProxy(final DependencyDescriptor descriptor, final @Nullable String beanName) {\n        Assert.state(getBeanFactory() instanceof DefaultListableBeanFactory,\n                "BeanFactory needs to be a DefaultListableBeanFactory");\n        final DefaultListableBeanFactory beanFactory = (DefaultListableBeanFactory) getBeanFactory();\n        TargetSource ts = new TargetSource() {\n            @Override\n            public Class<?> getTargetClass() {\n                return descriptor.getDependencyType();\n            }\n            @Override\n            public boolean isStatic() {\n                return false;\n            }\n            @Override\n            public Object getTarget() {\n                Object target = beanFactory.doResolveDependency(descriptor, beanName, null, null);\n                if (target == null) {\n                    Class<?> type = getTargetClass();\n                    if (Map.class == type) {\n                        return Collections.emptyMap();\n                    }\n                    else if (List.class == type) {\n                        return Collections.emptyList();\n                    }\n                    else if (Set.class == type || Collection.class == type) {\n                        return Collections.emptySet();\n                    }\n                    throw new NoSuchBeanDefinitionException(descriptor.getResolvableType(),\n                            "Optional dependency not present for lazy injection point");\n                }\n                return target;\n            }\n            @Override\n            public void releaseTarget(Object target) {\n            }\n        };\n        ProxyFactory pf = new ProxyFactory();\n        pf.setTargetSource(ts);\n        Class<?> dependencyType = descriptor.getDependencyType();\n        if (dependencyType.isInterface()) {\n            pf.addInterface(dependencyType);\n        }\n        return pf.getProxy(beanFactory.getBeanClassLoader());\n    }\n')))}u.isMDXComponent=!0}}]);