"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[7718],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},v="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),v=p(n),m=i,u=v["".concat(s,".").concat(m)]||v[m]||d[m]||a;return n?r.createElement(u,l(l({ref:t},c),{},{components:n})):r.createElement(u,l({ref:t},c))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[v]="string"==typeof e?e:i,l[1]=o;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3778:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>v,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const a={title:"\u6df1\u5165\u4e86\u89e3WebApplicationInitializer\u662f\u6d88\u9664web.xml\u548cspringMVC\u7684\u914d\u7f6e\u6587\u4ef6",date:new Date("2019-02-21T00:00:00.000Z")},l=void 0,o={unversionedId:"spring/spring-framework/web-source-analysis/WebApplicationInitializer-eliminate-xml",id:"spring/spring-framework/web-source-analysis/WebApplicationInitializer-eliminate-xml",title:"\u6df1\u5165\u4e86\u89e3WebApplicationInitializer\u662f\u6d88\u9664web.xml\u548cspringMVC\u7684\u914d\u7f6e\u6587\u4ef6",description:"1. Servlet3.x\u89c4\u8303\u4e00\u4e9b\u77e5\u8bc6",source:"@site/docs/spring/spring-framework/web-source-analysis/WebApplicationInitializer-eliminate-xml.md",sourceDirName:"spring/spring-framework/web-source-analysis",slug:"/spring/spring-framework/web-source-analysis/WebApplicationInitializer-eliminate-xml",permalink:"/docs/spring/spring-framework/web-source-analysis/WebApplicationInitializer-eliminate-xml",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/spring/spring-framework/web-source-analysis/WebApplicationInitializer-eliminate-xml.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1672841610,formattedLastUpdatedAt:"Jan 4, 2023",frontMatter:{title:"\u6df1\u5165\u4e86\u89e3WebApplicationInitializer\u662f\u6d88\u9664web.xml\u548cspringMVC\u7684\u914d\u7f6e\u6587\u4ef6",date:"2019-02-21T00:00:00.000Z"},sidebar:"springframework",previous:{title:"RequestMappingHandlerAdapter\u6e90\u7801\u5206\u6790",permalink:"/docs/spring/spring-framework/web-source-analysis/RequestMappingHandlerAdapter"},next:{title:"Spring Web Context",permalink:"/docs/spring/spring-framework/web-source-analysis/spring-web-context"}},s={},p=[{value:"1. Servlet3.x\u89c4\u8303\u4e00\u4e9b\u77e5\u8bc6",id:"1-servlet3x\u89c4\u8303\u4e00\u4e9b\u77e5\u8bc6",level:3},{value:"1.1 java Servlet3.x\u7684\u76f8\u5173\u89c4\u8303",id:"11-java-servlet3x\u7684\u76f8\u5173\u89c4\u8303",level:4},{value:"3. WebApplicationInitializer\u4ecb\u7ecd",id:"3-webapplicationinitializer\u4ecb\u7ecd",level:3},{value:"4. Spring+WebApplicationInitializer\u6d88\u9664\u914d\u7f6e\u6587\u4ef6\u6e90\u7801\u5206\u6790",id:"4-springwebapplicationinitializer\u6d88\u9664\u914d\u7f6e\u6587\u4ef6\u6e90\u7801\u5206\u6790",level:3},{value:"5. Spring\u7684\u4f8b\u5b50",id:"5-spring\u7684\u4f8b\u5b50",level:3}],c={toc:p};function v(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"1-servlet3x\u89c4\u8303\u4e00\u4e9b\u77e5\u8bc6"},"1. Servlet3.x\u89c4\u8303\u4e00\u4e9b\u77e5\u8bc6"),(0,i.kt)("h4",{id:"11-java-servlet3x\u7684\u76f8\u5173\u89c4\u8303"},"1.1 java Servlet3.x\u7684\u76f8\u5173\u89c4\u8303"),(0,i.kt)("p",null,"\u53ef\u4ee5\u53c2\u770b\uff1a",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mxsm/document/blob/master/Spring/Springframework/Spring-web%E5%88%86%E6%9E%90/Servlet3.1.md"},"Servlet\u76f8\u5173\u7b14\u8bb0"),(0,i.kt)("br",{parentName:"p"}),"\n","\u5728Servlet\u7684\u89c4\u8303\u4e2d\u6709\u4e24\u79cd\u65b9\u5f0f\u6765\u5b9e\u73b0 ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"ServletContext"))," \u7684\u521d\u59cb\u5316\uff0c\u901a\u8fc7XML\u7684\u914d\u7f6e\u6587\u4ef6\u6216\u8005\u901a\u8fc7\u7f16\u7a0b\u7684\u65b9\u5f0f\u6765\u8fdb\u884c\u521d\u59cb\u5316\u3002",(0,i.kt)("br",{parentName:"p"}),"\n","\u6ce8\u89e3\u548cXML\u90fd\u662f\u53ef\u62d4\u63d2\u7684\u7ec4\u4ef6\uff0c\u901a\u8fc7\u4e0d\u540c\u7684\u65b9\u5f0f\u6765\u5b9e\u73b0\u4e0d\u540c\u9700\u6c42\uff0c"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"ServletContainerInitializer \u7c7b\u901a\u8fc7 jar services API \u67e5\u627e\u3002\u5bf9\u4e8e\u6bcf\u4e00\u4e2a\u5e94\u7528\uff0c\u5e94\u7528\u542f\u52a8\u65f6\uff0c\u7531\u5bb9\u5668\u521b\u5efa\u4e00\u4e2aServletContainerInitializer \u5b9e\u4f8b\u3002 \u6846\u67b6\u63d0\u4f9b\u7684 ServletContainerInitializer \u5b9e\u73b0\u5fc5\u987b\u7ed1\u5b9a\u5728 jar \u5305 \u7684\nMETA-INF/services \u76ee\u5f55\u4e2d\u7684\u4e00\u4e2a\u53eb\u505a javax.servlet.ServletContainerInitializer \u7684\u6587\u4ef6\uff0c\u6839\u636e jar services API\uff0c\u6307\u5b9a ServletContainerInitializer \u7684\u5b9e\u73b0\u3002\u9664 ServletContainerInitializer \u5916\uff0c\u6211\u4eec\u8fd8\u6709\u4e00\u4e2a\u6ce8\u89e3\u2014HandlesTypes\u3002\u5728 ServletContainerInitializer \u5b9e\u73b0\u4e0a\u7684\nHandlesTypes \u6ce8\u89e3\u7528\u4e8e\u8868\u793a\u611f\u5174\u8da3\u7684\u4e00\u4e9b\u7c7b\uff0c\u5b83\u4eec\u53ef\u80fd\u6307\u5b9a\u4e86 HandlesTypes \u7684 value \u4e2d\u7684\u6ce8\u89e3\uff08\u7c7b\u578b\u3001\u65b9\u6cd5\u6216\u81ea\u52a8\u7ea7\u522b\u7684\u6ce8\u89e3\uff09\uff0c\u6216\u8005\u662f\u5176\u7c7b\u578b\u7684\u8d85\u7c7b\u7ee7\u627f/\u5b9e\u73b0\u4e86\u8fd9\u4e9b\u7c7b\u4e4b\u4e00\u3002\u65e0\u8bba\u662f\u5426\u8bbe\u7f6e\u4e86 metadata-complete\uff0cHandlesTypes \u6ce8\u89e3\u5c06\u5e94\u7528\u3002\u5f53\u68c0\u6d4b\u4e00\u4e2a\u5e94\u7528\u7684\u7c7b\u770b\u662f\u5426\u5b83\u4eec\u5339\u914d ServletContainerInitializer \u7684 HandlesTypes \u6307\u5b9a\u7684\u6761\u4ef6\u65f6\uff0c\u5982\u679c\u5e94\u7528\u7684\u4e00\u4e2a\u6216\u591a\u4e2a\u53ef\u9009\u7684 JAR \u5305\u7f3a\u5931\uff0c\u5bb9\u5668\u53ef\u80fd\u9047\u5230\u7c7b\u88c5\u8f7d\u95ee\u9898\u3002\u7531\u4e8e\u5bb9\u5668\u4e0d\u80fd\u51b3\u5b9a\u662f\u5426\u8fd9\u4e9b\u7c7b\u578b\u7684\u7c7b\u88c5\u8f7d\u5931\u8d25\n\u5c06\u963b\u6b62\u5e94\u7528\u6b63\u5e38\u5de5\u4f5c\uff0c\u5b83\u5fc5\u987b\u5ffd\u7565\u5b83\u4eec\uff0c\u540c\u65f6\u4e5f\u63d0\u4f9b\u4e00\u4e2a\u5c06\u8bb0\u5f55\u5b83\u4eec\u7684\u914d\u7f6e\u9009\u9879\u3002\n\u5982\u679c ServletContainerInitializer \u5b9e\u73b0\u6ca1\u6709@HandlesTypes\u6ce8\u89e3\uff0c\u6216\u5982\u679c\u6ca1\u6709\u5339\u914d\u4efb\u4f55\u6307\u5b9a\u7684 HandlesType\uff0c\u90a3\n\u4e48\u5b83\u4f1a\u4e3a\u6bcf\u4e2a\u5e94\u7528\u4f7f\u7528 null \u503c\u7684\u96c6\u5408\u8c03\u7528\u4e00\u6b21\u3002\u8fd9\u5c06\u5141\u8bb8 initializer \u57fa\u4e8e\u5e94\u7528\u4e2d\u53ef\u7528\u7684\u8d44\u6e90\u51b3\u5b9a\u662f\u5426\u9700\u8981\u521d\u59cb\u5316 Servlet/Filter\u3002\u5728\u4efb\u4f55 Servlet Listener \u7684\u4e8b\u4ef6\u88ab\u89e6\u53d1\u4e4b\u524d\uff0c\u5f53\u5e94\u7528\u6b63\u5728\u542f\u52a8\u65f6\uff0cServletContainerInitializer \u7684 onStartup \u65b9\u6cd5\u5c06\u88ab\u8c03\u7528\u3002ServletContainerInitializer\u2019s \u7684 onStartup \u5f97\u5230\u4e00\u4e2a\u7c7b\u7684Set\uff0c\u5176\u6216\u8005\u7ee7\u627f/\u5b9e\u73b0 initializer \u8868\u793a\u611f\u5174\u8da3\u7684\u7c7b\uff0c\u6216\u8005\u5b83\u662f\u4f7f\u7528\u6307\u5b9a\u5728@HandlesTypes \u6ce8\u89e3\u4e2d\u7684\u4efb\u610f\u7c7b\u6ce8\u89e3\u7684\u3002"),(0,i.kt)("h3",{parentName:"blockquote",id:"2-springservletcontainerinitializer\u4ecb\u7ecd"},"2. SpringServletContainerInitializer\u4ecb\u7ecd")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'@HandlesTypes(WebApplicationInitializer.class)\npublic class SpringServletContainerInitializer implements ServletContainerInitializer {\n    @Override\n    public void onStartup(@Nullable Set<Class<?>> webAppInitializerClasses, ServletContext servletContext)\n            throws ServletException {\n\n        List<WebApplicationInitializer> initializers = new LinkedList<>();\n\n        if (webAppInitializerClasses != null) {\n            for (Class<?> waiClass : webAppInitializerClasses) {\n                // Be defensive: Some servlet containers provide us with invalid classes,\n                // no matter what @HandlesTypes says...\n                if (!waiClass.isInterface() && !Modifier.isAbstract(waiClass.getModifiers()) &&\n                        WebApplicationInitializer.class.isAssignableFrom(waiClass)) {\n                    try {\n                        initializers.add((WebApplicationInitializer)\n                                ReflectionUtils.accessibleConstructor(waiClass).newInstance());\n                    }\n                    catch (Throwable ex) {\n                        throw new ServletException("Failed to instantiate WebApplicationInitializer class", ex);\n                    }\n                }\n            }\n        }\n\n        if (initializers.isEmpty()) {\n            //\u6253\u5370\u65e5\u5fd7\n            return;\n        }\n\n        //\u6253\u5370\u65e5\u5fd7\n        AnnotationAwareOrderComparator.sort(initializers);\n        for (WebApplicationInitializer initializer : initializers) {\n            //\u8c03\u7528WebApplicationInitializer\u7684\u65b9\u6cd5onStartup\n            initializer.onStartup(servletContext);\n        }\n    }\n\n}\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"SpringServletContainerInitializer"))," \u7ee7\u627f\u4e86 ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"ServletContainerInitializer"))," \u5728\u5bf9\u5e94\u7684jar\u5305\u4e0b\u9762\u7684 ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"META-INF.services"))," \u4e0b\u9762\u6709\u4e00\u4e2a\u6587\u4ef6 ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"javax.servlet.ServletContainerInitializer"))," \u5185\u5bb9\u5982\u4e0b\uff1a"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"org.springframework.web.SpringServletContainerInitializer")),(0,i.kt)("p",null,"\u901a\u8fc7SPI\u5c31\u80fd\u52a0\u8f7d ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"SpringServletContainerInitializer"))," \u7c7b\uff0c\u7136\u540e\u901a\u8fc7\u5b9a\u4e49\u5728\u4e0a\u9762\u7684 ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"@HandlesTypes"))," \u6ce8\u89e3\u3002\u6839\u636e\u914d\u7f6e\u7684\u7c7b ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"WebApplicationInitializer"))," \u6765\u52a0\u8f7d\u3002\u901a\u8fc7 ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"WebApplicationInitializer"))," \u6765\u628aServlet\u548cSpring\u7ed3\u5408\u8d77\u6765\u3002"),(0,i.kt)("h3",{id:"3-webapplicationinitializer\u4ecb\u7ecd"},"3. WebApplicationInitializer\u4ecb\u7ecd"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://github.com/mxsm/document/blob/master/image/Spring/Springframework/WebApplicationInitializer.png?raw=true",alt:"\u7ee7\u627f\u5173\u7cfb"})),(0,i.kt)("p",null,"\u4ece\u4e0a\u9762\u53ef\u4ee5\u770b\u51fa\u6765 ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},(0,i.kt)("inlineCode",{parentName:"em"},"WebApplicationInitializer")))," \u6709\u4e09\u4e2a\u7ee7\u627f\u5b9e\u73b0\u7c7b\uff0c\u4e09\u4e2a\u62bd\u8c61\u7684\u7c7b\u5355\u4e00\u7ee7\u627f\u3002\u4e0b\u9762\u5206\u6790\u4e00\u4e0b\u4e0b\u9762\u7684\u51e0\u4e2a\u521d\u59cb\u5316\u7c7b\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"WebApplicationInitializer")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public interface WebApplicationInitializer {\n    //\u542f\u52a8\u65b9\u6cd5\n    void onStartup(ServletContext servletContext) throws ServletException;\n\n}\n")),(0,i.kt)("p",{parentName:"li"},"\u5728 ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"WebApplicationInitializer"))," \u4e2d\u53ea\u6709\u4e00\u4e2a\u65b9\u6cd5\uff0c\u5728 ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"SpringServletContainerInitializer"))," \u7c7b\u4e2d\u8c03\u7528\u4e86\u8fd9\u4e2a  ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"onStartup"))," \u65b9\u6cd5\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"AbstractContextLoaderInitializer")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public abstract class AbstractContextLoaderInitializer implements WebApplicationInitializer {\n\n    /** Logger available to subclasses. */\n    protected final Log logger = LogFactory.getLog(getClass());\n\n\n    @Override\n    public void onStartup(ServletContext servletContext) throws ServletException {\n        registerContextLoaderListener(servletContext);\n    }\n\n    //\u6dfb\u52a0ContextLoaderListener\u5230ServletContext\n    protected void registerContextLoaderListener(ServletContext servletContext) {\n        WebApplicationContext rootAppContext = createRootApplicationContext();\n        if (rootAppContext != null) {\n            ContextLoaderListener listener = new ContextLoaderListener(rootAppContext);\n            listener.setContextInitializers(getRootApplicationContextInitializers());\n            servletContext.addListener(listener);\n        }\n        else {\n            //\u6253\u5370\u65e5\u5fd7\n        }\n    }\n\n    //\u521b\u5efaSpring\u7684WebApplicationContext\n    @Nullable\n    protected abstract WebApplicationContext createRootApplicationContext();\n\n    \n    @Nullable\n    protected ApplicationContextInitializer<?>[] getRootApplicationContextInitializers() {\n        return null;\n    }\n\n}\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"AbstractDispatcherServletInitializer")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-java"},'public abstract class AbstractDispatcherServletInitializer extends AbstractContextLoaderInitializer {\n\n    //\u9ed8\u8ba4\u7684Servlet\u540d\u79f0\n    public static final String DEFAULT_SERVLET_NAME = "dispatcher";\n\n\n    @Override\n    public void onStartup(ServletContext servletContext) throws ServletException {\n        super.onStartup(servletContext);\n        //\u6ce8\u518cDispatcherServlet\n        registerDispatcherServlet(servletContext);\n    }\n\n    //\u6ce8\u518c\u6ce8\u518cDispatcherServlet\u7684\u65b9\u6cd5\n    protected void registerDispatcherServlet(ServletContext servletContext) {\n        String servletName = getServletName();\n        Assert.hasLength(servletName, "getServletName() must not return null or empty");\n        //\u62bd\u8c61\u65b9\u6cd5createServletApplicationContext\u7531\u4f7f\u7528\u8005\u81ea\u5df1\u5b9e\u73b0\n        WebApplicationContext servletAppContext = createServletApplicationContext();\n        Assert.notNull(servletAppContext, "createServletApplicationContext() must not return null");\n\n        FrameworkServlet dispatcherServlet = createDispatcherServlet(servletAppContext);\n        Assert.notNull(dispatcherServlet, "createDispatcherServlet(WebApplicationContext) must not return null");\n        dispatcherServlet.setContextInitializers(getServletApplicationContextInitializers());\n\n        ServletRegistration.Dynamic registration = servletContext.addServlet(servletName, dispatcherServlet);\n        if (registration == null) {\n            throw new IllegalStateException("Failed to register servlet with name \'" + servletName + "\'. " +\n                    "Check if there is another servlet registered under the same name.");\n        }\n\n        registration.setLoadOnStartup(1);\n        registration.addMapping(getServletMappings());\n        registration.setAsyncSupported(isAsyncSupported());\n\n        Filter[] filters = getServletFilters();\n        if (!ObjectUtils.isEmpty(filters)) {\n            for (Filter filter : filters) {\n                registerServletFilter(servletContext, filter);\n            }\n        }\n\n        customizeRegistration(registration);\n    }\n\n    /**\n     * Return the name under which the {@link DispatcherServlet} will be registered.\n     * Defaults to {@link #DEFAULT_SERVLET_NAME}.\n     * @see #registerDispatcherServlet(ServletContext)\n     */\n    protected String getServletName() {\n        return DEFAULT_SERVLET_NAME;\n    }\n\n    /**\n     * Create a servlet application context to be provided to the {@code DispatcherServlet}.\n     * <p>The returned context is delegated to Spring\'s\n     * {@link DispatcherServlet#DispatcherServlet(WebApplicationContext)}. As such,\n     * it typically contains controllers, view resolvers, locale resolvers, and other\n     * web-related beans.\n     * @see #registerDispatcherServlet(ServletContext)\n     */\n    protected abstract WebApplicationContext createServletApplicationContext();\n\n    /**\n     * Create a {@link DispatcherServlet} (or other kind of {@link FrameworkServlet}-derived\n     * dispatcher) with the specified {@link WebApplicationContext}.\n     * <p>Note: This allows for any {@link FrameworkServlet} subclass as of 4.2.3.\n     * Previously, it insisted on returning a {@link DispatcherServlet} or subclass thereof.\n     */\n    protected FrameworkServlet createDispatcherServlet(WebApplicationContext servletAppContext) {\n        return new DispatcherServlet(servletAppContext);\n    }\n\n    /**\n     * Specify application context initializers to be applied to the servlet-specific\n     * application context that the {@code DispatcherServlet} is being created with.\n     * @since 4.2\n     * @see #createServletApplicationContext()\n     * @see DispatcherServlet#setContextInitializers\n     * @see #getRootApplicationContextInitializers()\n     */\n    @Nullable\n    protected ApplicationContextInitializer<?>[] getServletApplicationContextInitializers() {\n        return null;\n    }\n\n    /**\n     * Specify the servlet mapping(s) for the {@code DispatcherServlet} &mdash;\n     * for example {@code "/"}, {@code "/app"}, etc.\n     * @see #registerDispatcherServlet(ServletContext)\n     */\n    protected abstract String[] getServletMappings();\n\n    /**\n     * Specify filters to add and map to the {@code DispatcherServlet}.\n     * @return an array of filters or {@code null}\n     * @see #registerServletFilter(ServletContext, Filter)\n     */\n    @Nullable\n    protected Filter[] getServletFilters() {\n        return null;\n    }\n\n    /**\n     * Add the given filter to the ServletContext and map it to the\n     * {@code DispatcherServlet} as follows:\n     * <ul>\n     * <li>a default filter name is chosen based on its concrete type\n     * <li>the {@code asyncSupported} flag is set depending on the\n     * return value of {@link #isAsyncSupported() asyncSupported}\n     * <li>a filter mapping is created with dispatcher types {@code REQUEST},\n     * {@code FORWARD}, {@code INCLUDE}, and conditionally {@code ASYNC} depending\n     * on the return value of {@link #isAsyncSupported() asyncSupported}\n     * </ul>\n     * <p>If the above defaults are not suitable or insufficient, override this\n     * method and register filters directly with the {@code ServletContext}.\n     * @param servletContext the servlet context to register filters with\n     * @param filter the filter to be registered\n     * @return the filter registration\n     */\n    protected FilterRegistration.Dynamic registerServletFilter(ServletContext servletContext, Filter filter) {\n        String filterName = Conventions.getVariableName(filter);\n        Dynamic registration = servletContext.addFilter(filterName, filter);\n\n        if (registration == null) {\n            int counter = 0;\n            while (registration == null) {\n                if (counter == 100) {\n                    throw new IllegalStateException("Failed to register filter with name \'" + filterName + "\'. " +\n                            "Check if there is another filter registered under the same name.");\n                }\n                registration = servletContext.addFilter(filterName + "#" + counter, filter);\n                counter++;\n            }\n        }\n\n        registration.setAsyncSupported(isAsyncSupported());\n        registration.addMappingForServletNames(getDispatcherTypes(), false, getServletName());\n        return registration;\n    }\n\n    private EnumSet<DispatcherType> getDispatcherTypes() {\n        return (isAsyncSupported() ?\n                EnumSet.of(DispatcherType.REQUEST, DispatcherType.FORWARD, DispatcherType.INCLUDE, DispatcherType.ASYNC) :\n                EnumSet.of(DispatcherType.REQUEST, DispatcherType.FORWARD, DispatcherType.INCLUDE));\n    }\n\n    /**\n     * A single place to control the {@code asyncSupported} flag for the\n     * {@code DispatcherServlet} and all filters added via {@link #getServletFilters()}.\n     * <p>The default value is "true".\n     */\n    protected boolean isAsyncSupported() {\n        return true;\n    }\n\n    /**\n     * Optionally perform further registration customization once\n     * {@link #registerDispatcherServlet(ServletContext)} has completed.\n     * @param registration the {@code DispatcherServlet} registration to be customized\n     * @see #registerDispatcherServlet(ServletContext)\n     */\n    protected void customizeRegistration(ServletRegistration.Dynamic registration) {\n    }\n\n}\n')))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"AbstractAnnotationConfigDispatcherServletInitializer"))),(0,i.kt)("h3",{id:"4-springwebapplicationinitializer\u6d88\u9664\u914d\u7f6e\u6587\u4ef6\u6e90\u7801\u5206\u6790"},"4. Spring+WebApplicationInitializer\u6d88\u9664\u914d\u7f6e\u6587\u4ef6\u6e90\u7801\u5206\u6790"),(0,i.kt)("h3",{id:"5-spring\u7684\u4f8b\u5b50"},"5. Spring\u7684\u4f8b\u5b50"))}v.isMDXComponent=!0}}]);