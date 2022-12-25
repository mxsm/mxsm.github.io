"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[4022],{3905:(e,n,a)=>{a.d(n,{Zo:()=>m,kt:()=>u});var t=a(7294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function s(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?s(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function p(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},s=Object.keys(e);for(t=0;t<s.length;t++)a=s[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)a=s[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=t.createContext({}),i=function(e){var n=t.useContext(o),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},m=function(e){var n=i(e.components);return t.createElement(o.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=i(a),g=r,u=c["".concat(o,".").concat(g)]||c[g]||d[g]||s;return a?t.createElement(u,l(l({ref:n},m),{},{components:a})):t.createElement(u,l({ref:n},m))}));function u(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=a.length,l=new Array(s);l[0]=g;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p[c]="string"==typeof e?e:r,l[1]=p;for(var i=2;i<s;i++)l[i]=a[i];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}g.displayName="MDXCreateElement"},7973:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>s,metadata:()=>p,toc:()=>i});var t=a(7462),r=(a(7294),a(3905));const s={title:"Spring\u5982\u4f55\u89e3\u6790\u81ea\u5b9a\u4e49xml\u7684\u6e90\u7801\u89e3\u6790",date:new Date("2018-10-19T00:00:00.000Z")},l=void 0,p={unversionedId:"spring/spring-framework/custom-component-extensions/spring-customxml-source-analysis",id:"spring/spring-framework/custom-component-extensions/spring-customxml-source-analysis",title:"Spring\u5982\u4f55\u89e3\u6790\u81ea\u5b9a\u4e49xml\u7684\u6e90\u7801\u89e3\u6790",description:"1. Spring\u5982\u4f55\u52a0\u8f7d\u81ea\u5b9a\u4e49\u7684xml Element",source:"@site/docs/spring/spring-framework/custom-component-extensions/spring-customxml-source-analysis.md",sourceDirName:"spring/spring-framework/custom-component-extensions",slug:"/spring/spring-framework/custom-component-extensions/spring-customxml-source-analysis",permalink:"/docs/spring/spring-framework/custom-component-extensions/spring-customxml-source-analysis",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/spring/spring-framework/custom-component-extensions/spring-customxml-source-analysis.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1671958290,formattedLastUpdatedAt:"Dec 25, 2022",frontMatter:{title:"Spring\u5982\u4f55\u89e3\u6790\u81ea\u5b9a\u4e49xml\u7684\u6e90\u7801\u89e3\u6790",date:"2018-10-19T00:00:00.000Z"},sidebar:"springframework",previous:{title:"Spring\u5e38\u7528\u7684\u62d3\u5c55\u63a5\u53e3",permalink:"/docs/spring/spring-framework/custom-component-extensions/spring-custom-used-interface"},next:{title:"\u57fa\u4e8eSpring AOP\u81ea\u5b9a\u4e49\u6ce8\u89e3",permalink:"/docs/spring/spring-framework/custom-component-extensions/spring-extend-aop-annotation"}},o={},i=[{value:"1. Spring\u5982\u4f55\u52a0\u8f7d\u81ea\u5b9a\u4e49\u7684xml Element",id:"1-spring\u5982\u4f55\u52a0\u8f7d\u81ea\u5b9a\u4e49\u7684xml-element",level:3},{value:"2. NamespaceHandler\u7684\u7ee7\u627f\u5173\u7cfb",id:"2-namespacehandler\u7684\u7ee7\u627f\u5173\u7cfb",level:3},{value:"3. \u5982\u4f55\u52a0\u8f7d\u4f7f\u7528NamespaceHandler\u7684\u5b9e\u73b0\u7c7b",id:"3-\u5982\u4f55\u52a0\u8f7d\u4f7f\u7528namespacehandler\u7684\u5b9e\u73b0\u7c7b",level:3}],m={toc:i};function c(e){let{components:n,...a}=e;return(0,r.kt)("wrapper",(0,t.Z)({},m,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"1-spring\u5982\u4f55\u52a0\u8f7d\u81ea\u5b9a\u4e49\u7684xml-element"},"1. Spring\u5982\u4f55\u52a0\u8f7d\u81ea\u5b9a\u4e49\u7684xml Element"),(0,r.kt)("p",null,"\u4e0b\u9762\u6765\u901a\u8fc7\u4ee3\u7801\u7684Debug\u6765\u770bSpring\u662f\u5982\u4f55\u52a0\u8f7d\u81ea\u5b9a\u4e49\u7684xml Element"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u4ee3\u7801\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mxsm/spring-sample/tree/master/namespace-handler"},"https://github.com/mxsm/spring-sample/tree/master/namespace-handler"))),(0,r.kt)("h3",{id:"2-namespacehandler\u7684\u7ee7\u627f\u5173\u7cfb"},"2. NamespaceHandler\u7684\u7ee7\u627f\u5173\u7cfb"),(0,r.kt)("p",null,"\u9996\u5148\u770b\u4e00\u4e0b ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"NamespaceHandler"))," \u7684\u7ee7\u627f\u5173\u7cfb"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/mxsm/document/blob/master/image/Spring/Springframework/NamespaceHandler.png?raw=true",alt:"\u56fe"})),(0,r.kt)("p",null,"\u4ece\u4e0a\u56fe\u53ef\u4ee5\u770b\u51fa\u6765\u51e0\u4e2a\u6bd4\u8f83\u719f\u6089\u7684\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"AopNamespaceHandler"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"aop")," \u7684 ",(0,r.kt)("strong",{parentName:"p"},"Element")," \u5904\u7406")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"TxNamespaceHandler"),(0,r.kt)("p",{parentName:"li"},"\u4e8b\u52a1\u7684\u5904\u7406\u8282\u70b9"))),(0,r.kt)("p",null,"\u5728\u7ee7\u627f\u8fc7\u7a0b\u4e2d\u62bd\u8c61\u7c7b ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"NamespaceHandlerSupport"))," \u5b9e\u73b0\u4e86 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"NamespaceHandler"))," \u3002\u81ea\u5b9a\u4e49\u4e5f\u662f\u4e3b\u8981\u901a\u8fc7 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"NamespaceHandlerSupport")),"  \u5b9e\u73b0\u8fd9\u4e2a\u62bd\u8c61\u7c7b\u3002"),(0,r.kt)("h3",{id:"3-\u5982\u4f55\u52a0\u8f7d\u4f7f\u7528namespacehandler\u7684\u5b9e\u73b0\u7c7b"},"3. \u5982\u4f55\u52a0\u8f7d\u4f7f\u7528NamespaceHandler\u7684\u5b9e\u73b0\u7c7b"),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("strong",{parentName:"p"},"Spring")," \u4e2d\u5b9a\u4e49\u4e86\u4e00\u4e2a ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"NamespaceHandlerResolver")),"  \u63a5\u53e3\u7528\u6765\u89e3\u6790 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"NamespaceHandler")),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"@FunctionalInterface\npublic interface NamespaceHandlerResolver {\n\n    /**\n     * Resolve the namespace URI and return the located {@link NamespaceHandler}\n     * implementation.\n     * @param namespaceUri the relevant namespace URI\n     * @return the located {@link NamespaceHandler} (may be {@code null})\n     */\n    @Nullable\n    NamespaceHandler resolve(String namespaceUri);\n\n}\n")),(0,r.kt)("p",null,"\u8fd9\u4e2a\u63a5\u53e3\u5c31\u4e00\u4e2a\u4eba\u65b9\u6cd5\uff0c\u65b9\u6cd5\u7684\u53c2\u6570\u4f20\u5165\u7684\u662f\u547d\u540d\u7a7a\u95f4\u7684Uri\u3002\u5728 Spring\u4e2d\u5b9e\u73b0\u4e86\u8fd9\u4e2a\u63a5\u53e3\u7684\u53ea\u6709\u4e00\u4e2a\u7c7b ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"DefaultNamespaceHandlerResolver"))," \u3002\u4e0b\u9762\u4e00\u4e0b\u8fd9\u7c7b\u7684\u4ee3\u7801\u5b9e\u73b0(\u4e3b\u8981\u5173\u6ce8\u4e00\u4e0bresolve\u65b9\u6cd5)\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public class DefaultNamespaceHandlerResolver implements NamespaceHandlerResolver {\n\n    /**\n     * \u7a7a\u95f4URI\u548c\u5904\u7406\u5668\u5bf9\u5e94\u5173\u7cfb\u5b58\u653e\u7684\u6587\u4ef6(\u81ea\u5b9a\u4e49\u540c\u6837\u4f1a\u88ab\u52a0\u8f7d)\n     */\n    public static final String DEFAULT_HANDLER_MAPPINGS_LOCATION = "META-INF/spring.handlers";\n\n\n    /** Logger available to subclasses. */\n    protected final Log logger = LogFactory.getLog(getClass());\n\n    /** ClassLoader to use for NamespaceHandler classes. */\n    @Nullable\n    private final ClassLoader classLoader;\n\n    /** Resource location to search for. */\n    private final String handlerMappingsLocation;\n\n    /** Stores the mappings from namespace URI to NamespaceHandler class name / instance. */\n    @Nullable\n    private volatile Map<String, Object> handlerMappings;\n\n\n    /**\n     * Create a new {@code DefaultNamespaceHandlerResolver} using the\n     * default mapping file location.\n     * <p>This constructor will result in the thread context ClassLoader being used\n     * to load resources.\n     * @see #DEFAULT_HANDLER_MAPPINGS_LOCATION\n     */\n    public DefaultNamespaceHandlerResolver() {\n        this(null, DEFAULT_HANDLER_MAPPINGS_LOCATION);\n    }\n\n    /**\n     * Create a new {@code DefaultNamespaceHandlerResolver} using the\n     * default mapping file location.\n     * @param classLoader the {@link ClassLoader} instance used to load mapping resources\n     * (may be {@code null}, in which case the thread context ClassLoader will be used)\n     * @see #DEFAULT_HANDLER_MAPPINGS_LOCATION\n     */\n    public DefaultNamespaceHandlerResolver(@Nullable ClassLoader classLoader) {\n        this(classLoader, DEFAULT_HANDLER_MAPPINGS_LOCATION);\n    }\n\n\n    public DefaultNamespaceHandlerResolver(@Nullable ClassLoader classLoader, String handlerMappingsLocation) {\n        Assert.notNull(handlerMappingsLocation, "Handler mappings location must not be null");\n        this.classLoader = (classLoader != null ? classLoader : ClassUtils.getDefaultClassLoader());\n        this.handlerMappingsLocation = handlerMappingsLocation;\n    }\n\n\n    /**\n     * \u89e3\u6790\u4f20\u5165\u7684\u547d\u540d\u7a7a\u95f4\u7684URI\n     */\n    @Override\n    @Nullable\n    public NamespaceHandler resolve(String namespaceUri) {\n        Map<String, Object> handlerMappings = getHandlerMappings();\n        Object handlerOrClassName = handlerMappings.get(namespaceUri);\n        if (handlerOrClassName == null) {\n            return null;\n        }\n        else if (handlerOrClassName instanceof NamespaceHandler) {\n            return (NamespaceHandler) handlerOrClassName;\n        }\n        else {\n            String className = (String) handlerOrClassName;\n            try {\n                Class<?> handlerClass = ClassUtils.forName(className, this.classLoader);\n                if (!NamespaceHandler.class.isAssignableFrom(handlerClass)) {\n                    throw new FatalBeanException("Class [" + className + "] for namespace [" + namespaceUri +\n                            "] does not implement the [" + NamespaceHandler.class.getName() + "] interface");\n                }\n                NamespaceHandler namespaceHandler = (NamespaceHandler) BeanUtils.instantiateClass(handlerClass);\n                //\u8c03\u7528init\u65b9\u6cd5--\u6240\u4ee5\u5728\u5b9e\u73b0 NamespaceHandlerSupport\u53ea\u9700\u8981\n                //\u5b9e\u73b0init\u65b9\u6cd5\u539f\u56e0\u5c31\u5728\u8fd9\u91cc\n                namespaceHandler.init();\n                handlerMappings.put(namespaceUri, namespaceHandler);\n                return namespaceHandler;\n            }\n            catch (ClassNotFoundException ex) {\n                throw new FatalBeanException("Could not find NamespaceHandler class [" + className +\n                        "] for namespace [" + namespaceUri + "]", ex);\n            }\n            catch (LinkageError err) {\n                throw new FatalBeanException("Unresolvable class definition for NamespaceHandler class [" +\n                        className + "] for namespace [" + namespaceUri + "]", err);\n            }\n        }\n    }\n\n    /**\n     * \u83b7\u53d6META-INF/spring.handlers\u91cc\u9762\u7684\u5bf9\u5e94\u7684\u547d\u540d\u7a7a\u95f4URI\u548c\u7a7a\u95f4\u5904\u7406\u5668\u7684\n     * \u5bf9\u5e94\u7684\u5173\u7cfb\n     */\n    private Map<String, Object> getHandlerMappings() {\n        Map<String, Object> handlerMappings = this.handlerMappings;\n        if (handlerMappings == null) {\n            synchronized (this) {\n                handlerMappings = this.handlerMappings;\n                if (handlerMappings == null) {\n                    if (logger.isTraceEnabled()) {\n                        logger.trace("Loading NamespaceHandler mappings from [" + this.handlerMappingsLocation + "]");\n                    }\n                    try {\n                        Properties mappings =\n                                PropertiesLoaderUtils.loadAllProperties(this.handlerMappingsLocation, this.classLoader);\n                        if (logger.isTraceEnabled()) {\n                            logger.trace("Loaded NamespaceHandler mappings: " + mappings);\n                        }\n                        handlerMappings = new ConcurrentHashMap<>(mappings.size());\n                        CollectionUtils.mergePropertiesIntoMap(mappings, handlerMappings);\n                        this.handlerMappings = handlerMappings;\n                    }\n                    catch (IOException ex) {\n                        throw new IllegalStateException(\n                                "Unable to load NamespaceHandler mappings from location [" + this.handlerMappingsLocation + "]", ex);\n                    }\n                }\n            }\n        }\n        return handlerMappings;\n    }\n\n\n    @Override\n    public String toString() {\n        return "NamespaceHandlerResolver using mappings " + getHandlerMappings();\n    }\n\n}\n')),(0,r.kt)("p",null,"\u901a\u8fc7\u65ad\u70b9\u7684\u65b9\u5f0f\u6765\u770b\u4e00\u4e0b\u6574\u4e2a\u8c03\u7528\u65b9\u6cd5\u7684\u8c03\u7528\u5982\u4e0b\u56fe\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/mxsm/document/blob/master/image/Spring/Springframework/Spring%E8%87%AA%E5%AE%9A%E4%B9%89%E6%8B%93%E5%B1%95xml%E8%B0%83%E7%94%A8%E9%93%BE.png?raw=true",alt:"\u56fe"})),(0,r.kt)("p",null," \u4e0b\u9762\u6765\u5206\u4e00\u4e0b\u6574\u4e2a\u8c03\u7528\u94fe\u7684\u8fc7\u7a0b\uff0c\u4e0a\u9762\u65ad\u70b9\u6253\u5728  ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"DefaultNamespaceHandlerResolver"))," \u7684 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"resolve")),"  \u65b9\u6cd5\u7684\u4e0b\u9762\u8fd9\u6bb5\u4ee3\u7801\u5904"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"handlerMappings.put(namespaceUri, namespaceHandler);\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u7ec6\u5fc3\u7684\u8bdd\u53ef\u80fd\u4f60\u4f1a\u53d1\u73b0debug\u7684\u8fc7\u7a0b\u4e2d\uff0c\u5982\u679c\u4f60xml\u4e2d\u5305\u542b bean\u8fd9\u4e2a\u8282\u70b9\u4f60\u4f1a\u53d1\u73b0\u5e76\u4e0d\u4f1a\u8d70\u5230\u4f60\u7684\u65ad\u70b9\u8fd9\u4e2a\u5730\u65b9\u6765\u8fd9\u4e2a\u662f\u4e3a\u4ec0\u4e48\u5462\uff1f(\u7b54\u6848\u4f1a\u5728\u4e0b\u9762\u7684\u5206\u6790\u8fc7\u7a0b\u4e2d\u7ed9\u51fa\u6765)"),(0,r.kt)("p",{parentName:"blockquote"},"Debug\u7684\u4ee3\u7801\u5728\u4e0a\u9762\u5df2\u7ecf\u7ed9\u51fa\u6765\u4e86\u3002")),(0,r.kt)("p",null,"\u5728\u8c03\u7528\u8fc7\u7a0b\u4e2d\u6709\u4e00\u4e2a ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"DefaultBeanDefinitionDocumentReader"))," \u7c7b\u3002\u901a\u8fc7\u4e0a\u56fe\u53ef\u4ee5\u770b\u51fa\u8c03\u7528\u4e86\u8fd9\u6837\u4e00\u6bb5\u65b9\u6cd5"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"    protected void parseBeanDefinitions(Element root, BeanDefinitionParserDelegate delegate) {\n        //\u5224\u65ad\u662f\u5426\u4e3ahttp://www.springframework.org/schema/beans\u9ed8\u8ba4\u7684\u7a7a\u95f4\n        if (delegate.isDefaultNamespace(root)) {\n            NodeList nl = root.getChildNodes();\n            for (int i = 0; i < nl.getLength(); i++) {\n                Node node = nl.item(i);\n                if (node instanceof Element) {\n                    Element ele = (Element) node;\n                    //\u5224\u65ad\u662f\u5426\u4e3a\u9ed8\u8ba4\u7684\u547d\u540d\u7a7a\u95f4\n                    if (delegate.isDefaultNamespace(ele)) {\n                        parseDefaultElement(ele, delegate);\n                    }\n                    else {\n                        //\u81ea\u5b9a\u4e49\u7684\u547d\u540d\u7a7a\u95f4--\u7528\u6237\u81ea\u5b9a\u4e49\u7684\u548cSpring AOP\u7b49\u7b49\n                        delegate.parseCustomElement(ele);\n                    }\n                }\n            }\n        }\n        else {\n            delegate.parseCustomElement(root);\n        }\n    }\n\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u4e0a\u9762\u7684\u65b9\u6cd5\u7ed9\u51fa\u4e86\u4e3a\u4ec0\u4e48\u6ca1\u6709\u8fdb\u5165 ",(0,r.kt)("strong",{parentName:"p"},"DefaultNamespaceHandlerResolver")," \u4e2d\uff0c\u56e0\u4e3a\u53ea\u6709",(0,r.kt)("a",{parentName:"p",href:"http://www.springframework.org/schema/bean%E6%89%8D%E6%98%AF%E9%BB%98%E8%AE%A4%E7%9A%84%E5%91%BD%E5%90%8D%E7%A9%BA%E9%97%B4"},"http://www.springframework.org/schema/bean\u624d\u662f\u9ed8\u8ba4\u7684\u547d\u540d\u7a7a\u95f4"))))}c.isMDXComponent=!0}}]);