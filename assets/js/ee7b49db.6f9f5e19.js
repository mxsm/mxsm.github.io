"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[5138],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),o=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=o(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=o(n),m=a,g=u["".concat(p,".").concat(m)]||u[m]||d[m]||l;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var o=2;o<l;o++)i[o]=n[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1489:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>o});var r=n(7462),a=(n(7294),n(3905));const l={title:"DispatcherServlet\u6e90\u7801\u89e3\u6790",date:new Date("2018-08-09T00:00:00.000Z")},i=void 0,s={unversionedId:"spring/spring-framework/web-source-analysis/DispatcherServlet",id:"spring/spring-framework/web-source-analysis/DispatcherServlet",title:"DispatcherServlet\u6e90\u7801\u89e3\u6790",description:"1. DispatcherServlet\u662f\u4ec0\u4e48\uff1f",source:"@site/docs/spring/spring-framework/web-source-analysis/DispatcherServlet.md",sourceDirName:"spring/spring-framework/web-source-analysis",slug:"/spring/spring-framework/web-source-analysis/DispatcherServlet",permalink:"/docs/spring/spring-framework/web-source-analysis/DispatcherServlet",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/spring/spring-framework/web-source-analysis/DispatcherServlet.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1682735967,formattedLastUpdatedAt:"Apr 29, 2023",frontMatter:{title:"DispatcherServlet\u6e90\u7801\u89e3\u6790",date:"2018-08-09T00:00:00.000Z"},sidebar:"springframework",previous:{title:"ContextLoaderListener \u6e90\u7801\u5206\u6790",permalink:"/docs/spring/spring-framework/web-source-analysis/ContextLoaderListener"},next:{title:"RequestMappingHandlerAdapter\u6e90\u7801\u5206\u6790",permalink:"/docs/spring/spring-framework/web-source-analysis/RequestMappingHandlerAdapter"}},p={},o=[{value:"1. DispatcherServlet\u662f\u4ec0\u4e48\uff1f",id:"1-dispatcherservlet\u662f\u4ec0\u4e48",level:3},{value:"2. DispatcherServlet\u5728Spring\u4e2d\u7684\u7ee7\u627f\u5173\u7cfb",id:"2-dispatcherservlet\u5728spring\u4e2d\u7684\u7ee7\u627f\u5173\u7cfb",level:3},{value:"3. \u6e90\u7801\u5206\u6790",id:"3-\u6e90\u7801\u5206\u6790",level:3},{value:"4. service\u65b9\u6cd5\u7684\u5206\u6790",id:"4-service\u65b9\u6cd5\u7684\u5206\u6790",level:3}],c={toc:o},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"1-dispatcherservlet\u662f\u4ec0\u4e48"},"1. DispatcherServlet\u662f\u4ec0\u4e48\uff1f"),(0,a.kt)("p",null,"\u4ece\u672c\u8d28\u4e0a\u662f\u8bf4DispatcherServlet\u5c31\u662f\u4e00\u4e2aServlet\u89c4\u8303\u7684\u5b9e\u73b0\u3002\u4e5f\u5c31\u662f\u4e00\u4e2aServlet\uff01"),(0,a.kt)("h3",{id:"2-dispatcherservlet\u5728spring\u4e2d\u7684\u7ee7\u627f\u5173\u7cfb"},"2. DispatcherServlet\u5728Spring\u4e2d\u7684\u7ee7\u627f\u5173\u7cfb"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public class DispatcherServlet extends FrameworkServlet {\n    //\u7701\u7565\u4ee3\u7801\n}\n\npublic abstract class FrameworkServlet extends HttpServletBean implements ApplicationContextAware {\n    //\u7701\u7565\u4ee3\u7801\n}\n\npublic abstract class HttpServletBean extends HttpServlet implements EnvironmentCapable, EnvironmentAware {\n    //\u7701\u7565\u4ee3\u7801    \n}\n\n")),(0,a.kt)("p",null,"\u4ece\u4e0a\u9762\u7684\u5173\u7cfb\u53ef\u4ee5\u770b\u51fa\u6765 ",(0,a.kt)("em",{parentName:"p"},"HttpServletBean")," \u7ee7\u627f\u4e86Servlet API\u7684 ",(0,a.kt)("em",{parentName:"p"},"HttpServlet")," \uff0c\u7136\u540e ",(0,a.kt)("em",{parentName:"p"},"FrameworkServlet")," \u7ee7\u627f\u4e86\n",(0,a.kt)("em",{parentName:"p"},"HttpServletBean"),"\uff0c \u6700\u540e ",(0,a.kt)("em",{parentName:"p"},"DispatcherServlet")," \u7ee7\u627f\u4e86 ",(0,a.kt)("em",{parentName:"p"},"FrameworkServlet")," \u3002"),(0,a.kt)("h3",{id:"3-\u6e90\u7801\u5206\u6790"},"3. \u6e90\u7801\u5206\u6790"),(0,a.kt)("p",null,"\u7531\u4e8eDispatcherServlet\u662f\u4e00\u4e2aServlet\u90a3\u4e48\u5c31\u4eceServlet\u7684\u65b9\u6cd5\u5165\u624b\u3002Servlet\u5b8c\u6210\u5b9e\u4f8b\u5316\u4ee5\u540e\u9996\u5148\u8c03\u7528\u7684\u5c31\u662finit\u65b9\u6cd5\u3002\u5728GenericServlet\u7c7b\u4e2dinit()\u65b9\u6cd5\u5b9e\u73b0\u4e3a\u7a7a\uff0c\u5728HttpServletBean\u91cd\u5199"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'@Override\n    public final void init() throws ServletException {\n\n        // Set bean properties from init parameters.\n        PropertyValues pvs = new ServletConfigPropertyValues(getServletConfig(), this.requiredProperties);\n        if (!pvs.isEmpty()) {\n            try {\n                BeanWrapper bw = PropertyAccessorFactory.forBeanPropertyAccess(this);\n                ResourceLoader resourceLoader = new ServletContextResourceLoader(getServletContext());\n                bw.registerCustomEditor(Resource.class, new ResourceEditor(resourceLoader, getEnvironment()));\n                initBeanWrapper(bw);\n                bw.setPropertyValues(pvs, true);\n            }\n            catch (BeansException ex) {\n                if (logger.isErrorEnabled()) {\n                    logger.error("Failed to set bean properties on servlet \'" + getServletName() + "\'", ex);\n                }\n                throw ex;\n            }\n        }\n\n        // \u8be5\u65b9\u6cd5\u5728HttpServletBean\u7c7b\u4e2d\u5b9e\u73b0\u4e3a\u7a7a--\u4e3b\u8981\u7531\u5b50\u7c7b\u8fdb\u884c\u5b9e\u73b0\n        initServletBean();\n    }\n')),(0,a.kt)("p",null,"\u4e0b\u9762\u770b\u4e00\u4e0binitServletBean\u65b9\u6cd5\u5728FrameworkServlet\u4e2d\u7684\u5b9e\u73b0\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'@Override\n    protected final void initServletBean() throws ServletException {\n        \n        //\u7701\u7565\u65e5\u5fd7\u6253\u5370\n\n        try {\n            //\u521d\u59cb\u5316webApplicationContext\n            this.webApplicationContext = initWebApplicationContext();\n            //\u521d\u59cb\u5316initFrameworkServlet-- \u9ed8\u8ba4\u5b9e\u73b0\u4e3a\u7a7a\n            initFrameworkServlet();\n        }\n        catch (ServletException | RuntimeException ex) {\n            logger.error("Context initialization failed", ex);\n            throw ex;\n        }\n\n        //\u7701\u7565\u65e5\u5fd7\u6253\u5370\n    }\n')),(0,a.kt)("p",null,"\u4ece\u4e0a\u9762\u53ef\u4ee5\u770b\u51fa\u6765\u4e3b\u8981\u662f\u521d\u59cb\u5316webApplicationContext\uff0c\u901a\u8fc7\u8c03\u7528initWebApplicationContext()\u65b9\u6cd5\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"protected WebApplicationContext initWebApplicationContext() {\n        //\u83b7\u53d6ServletContext\u4e2d\u7684\u5c5e\u6027\u503c\u4e3aWebApplicationContext.ROOT_WEB_APPLICATION_CONTEXT_ATTRIBUTE\u5bf9\u8c61\u7684\u503c\n        //\u5982\u679c\u6709ContextLoaderListner\u7684\u60c5\u51b5\u8bbe\u7f6e\u7684\n        WebApplicationContext rootContext =\n                WebApplicationContextUtils.getWebApplicationContext(getServletContext());\n        WebApplicationContext wac = null;\n        if (this.webApplicationContext != null) {\n            // A context instance was injected at construction time -> use it\n            wac = this.webApplicationContext;\n            if (wac instanceof ConfigurableWebApplicationContext) {\n                ConfigurableWebApplicationContext cwac = (ConfigurableWebApplicationContext) wac;\n                if (!cwac.isActive()) {\n                \n                    if (cwac.getParent() == null) {\n                        cwac.setParent(rootContext);\n                    }\n                    //\u5237\u65b0WebApplicationContext\n                    configureAndRefreshWebApplicationContext(cwac);\n                }\n            }\n        }\n        if (wac == null) {\n            //\u6839\u636econtextAttribute\u5c5e\u6027\u67e5\u627eWebApplicationContext\n            wac = findWebApplicationContext();\n        }\n        if (wac == null) {\n            // \u5982\u679c\u4e0a\u9762\u90fd\u6ca1\u6709\u521b\u5efa\u4e00\u4e2a\n            wac = createWebApplicationContext(rootContext);\n        }\n\n        if (!this.refreshEventReceived) {\n        \n            synchronized (this.onRefreshMonitor) {\n               //\u89e6\u53d1onRefresh\u65b9\u6cd5\u53bb\u505a\u4e00\u4e9b\u5176\u4ed6\u7684\u4e8b\u60c5\n                onRefresh(wac);\n            }\n        }\n\n        if (this.publishContext) {\n            // Publish the context as a servlet context attribute.\n            String attrName = getServletContextAttributeName();\n            getServletContext().setAttribute(attrName, wac);\n        }\n\n        return wac;\n    }\n")),(0,a.kt)("p",null,"\u5206\u6790\u4e00\u4e0bcreateWebApplicationContext(rootContext)\u65b9\u6cd5\uff0cconfigureAndRefreshWebApplicationContext(cwac);\u5728\u5206\u6790\u4e00\u4e0bcreateWebApplicationContext\u4e2d\u4e5f\u6709\u8c03\u7528\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"protected WebApplicationContext createWebApplicationContext(@Nullable ApplicationContext parent) {\n        //\u83b7\u53d6contextClass,\u5982\u679c\u6ca1\u6709\u8bbe\u7f6econtextClass\u9ed8\u8ba4\u662fXmlWebApplicationContext\n        Class<?> contextClass = getContextClass();\n        if (!ConfigurableWebApplicationContext.class.isAssignableFrom(contextClass)) {\n            //\u4e0d\u662f\u7ee7\u627f\u5173\u7cfb\u629b\u9519\n        }\n        \n        //\u5b9e\u4f8b\u5316\u6570\u636e\n        ConfigurableWebApplicationContext wac =\n                (ConfigurableWebApplicationContext) BeanUtils.instantiateClass(contextClass);\n\n        wac.setEnvironment(getEnvironment());\n        wac.setParent(parent);\n        //contextConfigLocation\u8bbe\u7f6e\u914d\u7f6e\u6587\u4ef6\u6216\u8005\u626b\u63cf\u5305\u7684\u8def\u5f84,\u6839\u636e\u4e0d\u540c\u7684Context\u6765\u5339\u914d\n        String configLocation = getContextConfigLocation();\n        if (configLocation != null) {\n            wac.setConfigLocation(configLocation);\n        }\n        \n        //\u914d\u7f6e\u5237\u65b0--\u8c03\u7528\u4e86Spring core \u7684refresh\u65b9\u6cd5\n        configureAndRefreshWebApplicationContext(wac);\n\n        return wac;\n    }\n")),(0,a.kt)("p",null,"\u521b\u5efa\u5b8c\u6210Spring application context\u540e\u5f00\u59cbFrameworkServlet#refresh\u65b9\u6cd5\u8fd9\u4e2a\u65b9\u6cd5\u662f\u4e00\u4e2a\u62bd\u8c61\u7684\u65b9\u6cd5\u5728\u5b50\u7c7b\u4e2d\u5b9e\u73b0\uff0c\u4e5f\u5c31\u662f\u5728DispatcherServlet\u4e2d\u5b9e\u73b0\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"    @Override\n    protected void onRefresh(ApplicationContext context) {\n        initStrategies(context);\n    }\n    //\u521d\u59cb\u5316\u4e00\u4e9b\u8bf7\u6c42\u8fc7\u7a0b\u4e2d\u7684\u7b56\u7565\n    protected void initStrategies(ApplicationContext context) {\n        initMultipartResolver(context);\n        initLocaleResolver(context);\n        initThemeResolver(context);\n        initHandlerMappings(context);\n        initHandlerAdapters(context);\n        initHandlerExceptionResolvers(context);\n        initRequestToViewNameTranslator(context);\n        initViewResolvers(context);\n        initFlashMapManager(context);\n    }\n")),(0,a.kt)("p",null,"\u5bf9\u4e8e\u65b9\u6cd5initStrategies\u4e3b\u8981\u505a\u4e86\u8fd99\u4ef6\u4e8b\u60c5\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"initMultipartResolver"),(0,a.kt)("p",{parentName:"li"},"\u521d\u59cb\u5316MultipartResolver\uff0c\u7528\u4e8e\u5904\u7406\u6587\u4ef6\u4e0a\u4f20\u670d\u52a1\uff0c\u5982\u679c\u6709\u6587\u4ef6\u4e0a\u4f20\uff0c\u90a3\u4e48\u5c31\u4f1a\u5c06\u5f53\u524d\u7684HttpServletRequest\u5305\u88c5\u6210DefaultMultipartHttpServletRequest\uff0c\u5e76\u4e14\u5c06\u6bcf\u4e2a\u4e0a\u4f20\u7684\u5185\u5bb9\u5c01\u88c5\u6210CommonsMultipartFile\u5bf9\u8c61\u3002\u9700\u8981\u5728dispatcherServlet-servlet.xml\u4e2d\u914d\u7f6e\u6587\u4ef6\u4e0a\u4f20\u89e3\u6790\u5668\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"initLocaleResolver"),(0,a.kt)("p",{parentName:"li"},"\u7528\u4e8e\u5904\u7406\u5e94\u7528\u7684\u56fd\u9645\u5316\u95ee\u9898\uff0c\u672c\u5730\u5316\u89e3\u6790\u7b56\u7565\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"initThemeResolver"),(0,a.kt)("p",{parentName:"li"},"\u7528\u4e8e\u5b9a\u4e49\u4e00\u4e2a\u4e3b\u9898")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"initHandlerMapping"),(0,a.kt)("p",{parentName:"li"},"\u7528\u4e8e\u5b9a\u4e49\u8bf7\u6c42\u6620\u5c04\u5173\u7cfb")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"initHandlerAdapters"),(0,a.kt)("p",{parentName:"li"},"\u7528\u4e8e\u6839\u636eHandler\u7684\u7c7b\u578b\u5b9a\u4e49\u4e0d\u540c\u7684\u5904\u7406\u89c4\u5219")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"initHandlerExceptionResolvers"),(0,a.kt)("p",{parentName:"li"},"\u5f53Handler\u5904\u7406\u51fa\u9519\u540e\uff0c\u4f1a\u901a\u8fc7\u6b64\u5c06\u9519\u8bef\u65e5\u5fd7\u8bb0\u5f55\u5728log\u6587\u4ef6\u4e2d\uff0c\u9ed8\u8ba4\u5b9e\u73b0\u7c7b\u662fSimpleMappingExceptionResolver")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"initRequestToViewNameTranslators"),(0,a.kt)("p",{parentName:"li"},"\u5c06\u6307\u5b9a\u7684ViewName\u6309\u7167\u5b9a\u4e49\u7684RequestToViewNameTranslators\u66ff\u6362\u6210\u60f3\u8981\u7684\u683c\u5f0f")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"initViewResolvers"),(0,a.kt)("p",{parentName:"li"},"\u7528\u4e8e\u5c06View\u89e3\u6790\u6210\u9875\u9762")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"initFlashMapManager"),(0,a.kt)("p",{parentName:"li"},"\u7528\u4e8e\u751f\u6210FlashMap\u7ba1\u7406\u5668"))),(0,a.kt)("h3",{id:"4-service\u65b9\u6cd5\u7684\u5206\u6790"},"4. service\u65b9\u6cd5\u7684\u5206\u6790"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"service")," \u65b9\u6cd5\u4e3b\u8981\u662f\u5904\u7406\u5728HTTP\u8bf7\u6c42\uff0c\u5728 ",(0,a.kt)("em",{parentName:"p"},"FrameworkServlet")," \u4e2d\u91cd\u5199\u4e86 ",(0,a.kt)("em",{parentName:"p"},"HttpServlet")," \u65b9\u6cd5\u4e2d\u7684 ",(0,a.kt)("em",{parentName:"p"},"service")," \u65b9\u6cd5\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"    @Override\n    protected void service(HttpServletRequest request, HttpServletResponse response)\n            throws ServletException, IOException {\n\n        HttpMethod httpMethod = HttpMethod.resolve(request.getMethod());\n        //PATCH\u65b9\u6cd5\u6216\u8005\u4e3anull\u7684\u5904\u7406\n        if (httpMethod == HttpMethod.PATCH || httpMethod == null) {\n            processRequest(request, response);\n        }\n        else {\n            //\u8c03\u7528HttpServlet\u7684\u65b9\u6cd5--\u5904\u7406\u5176\u4ed6\u7684HTTP\u65b9\u6cd5\n            super.service(request, response);\n        }\n    }\n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"doGet\u3001doPost\u3001doPut\u3001doDelete\u3001doOptions\u3001doTrace")," \u65b9\u6cd5\u4e2d\u5171\u540c\u8c03\u7528\u4e86 ",(0,a.kt)("em",{parentName:"p"},"processRequest")," \u65b9\u6cd5\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'    protected final void processRequest(HttpServletRequest request, HttpServletResponse response)\n            throws ServletException, IOException {\n\n        long startTime = System.currentTimeMillis();\n        Throwable failureCause = null;\n\n        LocaleContext previousLocaleContext = LocaleContextHolder.getLocaleContext();\n        //\u83b7\u53d6Locale\n        LocaleContext localeContext = buildLocaleContext(request);\n\n        RequestAttributes previousAttributes = RequestContextHolder.getRequestAttributes();\n        //\u83b7\u53d6Servlet\u8bf7\u6c42\u5c5e\u6027\n        ServletRequestAttributes requestAttributes = buildRequestAttributes(request, response, previousAttributes);\n        \n        //\u5f02\u6b65\u7ba1\u7406\n        WebAsyncManager asyncManager = WebAsyncUtils.getAsyncManager(request);\n        asyncManager.registerCallableInterceptor(FrameworkServlet.class.getName(), new RequestBindingInterceptor());\n\n        initContextHolders(request, localeContext, requestAttributes);\n\n        try {\n            //\u8c03\u7528\u5b50\u7c7b\u7684doService\n            doService(request, response);\n        }\n        catch (ServletException | IOException ex) {\n            failureCause = ex;\n            throw ex;\n        }\n        catch (Throwable ex) {\n            failureCause = ex;\n            throw new NestedServletException("Request processing failed", ex);\n        }\n\n        finally {\n            //\u91ca\u653eContext\n            resetContextHolders(request, previousLocaleContext, previousAttributes);\n            if (requestAttributes != null) {\n                requestAttributes.requestCompleted();\n            }\n            logResult(request, response, failureCause, asyncManager);\n            publishRequestHandledEvent(request, response, startTime, failureCause);\n        }\n    }\n\n')),(0,a.kt)("p",null,"\u901a\u8fc7\u8c03\u7528DispatcherServlet#doService\u65b9\u6cd5\u6765\u5904\u7406\u5916\u90e8\u53d1\u6765\u670d\u52a1\u5668\u7684HTTP\u8bf7\u6c42\uff0c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"@Override\n    protected void doService(HttpServletRequest request, HttpServletResponse response) throws Exception {\n        logRequest(request);\n\n        // Keep a snapshot of the request attributes in case of an include,\n        // to be able to restore the original attributes after the include.\n        Map<String, Object> attributesSnapshot = null;\n        if (WebUtils.isIncludeRequest(request)) {\n            attributesSnapshot = new HashMap<>();\n            Enumeration<?> attrNames = request.getAttributeNames();\n            while (attrNames.hasMoreElements()) {\n                String attrName = (String) attrNames.nextElement();\n                if (this.cleanupAfterInclude || attrName.startsWith(DEFAULT_STRATEGIES_PREFIX)) {\n                    attributesSnapshot.put(attrName, request.getAttribute(attrName));\n                }\n            }\n        }\n\n        // \u8ba9\u6846\u67b6\u80fd\u591f\u5904\u7406\u548c\u67e5\u770bWebApplicationContext\u4e2d\u7684\u5bf9\u8c61\n        request.setAttribute(WEB_APPLICATION_CONTEXT_ATTRIBUTE, getWebApplicationContext());\n        request.setAttribute(LOCALE_RESOLVER_ATTRIBUTE, this.localeResolver);\n        request.setAttribute(THEME_RESOLVER_ATTRIBUTE, this.themeResolver);\n        request.setAttribute(THEME_SOURCE_ATTRIBUTE, getThemeSource());\n\n        if (this.flashMapManager != null) {\n            FlashMap inputFlashMap = this.flashMapManager.retrieveAndUpdate(request, response);\n            if (inputFlashMap != null) {\n                request.setAttribute(INPUT_FLASH_MAP_ATTRIBUTE, Collections.unmodifiableMap(inputFlashMap));\n            }\n            request.setAttribute(OUTPUT_FLASH_MAP_ATTRIBUTE, new FlashMap());\n            request.setAttribute(FLASH_MAP_MANAGER_ATTRIBUTE, this.flashMapManager);\n        }\n\n        try {\n            //\u6700\u91cd\u8981\u7684\u65b9\u6cd5\uff1a\u5206\u53d1\u8bf7\u6c42\u5904\u7406\n            doDispatch(request, response);\n        }\n        finally {\n            if (!WebAsyncUtils.getAsyncManager(request).isConcurrentHandlingStarted()) {\n                // Restore the original attribute snapshot, in case of an include.\n                if (attributesSnapshot != null) {\n                    restoreAttributesAfterInclude(request, attributesSnapshot);\n                }\n            }\n        }\n    }\n")),(0,a.kt)("p",null,"doDispatch\u65b9\u6cd5\u7528\u6765\u5206\u53d1\u8bf7\u6c42\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'protected void doDispatch(HttpServletRequest request, HttpServletResponse response) throws Exception {\n        HttpServletRequest processedRequest = request;\n        HandlerExecutionChain mappedHandler = null;\n        boolean multipartRequestParsed = false;\n\n        WebAsyncManager asyncManager = WebAsyncUtils.getAsyncManager(request);\n\n        try {\n            ModelAndView mv = null;\n            Exception dispatchException = null;\n\n            try {\n                //\u68c0\u67e5\u662f\u5426\u4e3a\u6587\u4ef6\u4e0a\u4f20\u8bf7\u6c42\n                processedRequest = checkMultipart(request);\n                multipartRequestParsed = (processedRequest != request);\n\n                // \u83b7\u53d6\u5f53\u524d\u8bf7\u6c42\u7684\u5904\u7406\u5668.\n                mappedHandler = getHandler(processedRequest);\n                if (mappedHandler == null) {\n                    noHandlerFound(processedRequest, response);\n                    return;\n                }\n\n                // \u83b7\u53d6\u5f53\u524d\u8bf7\u6c42\u7684\u5904\u7406\u9002\u914d\u5668\n                HandlerAdapter ha = getHandlerAdapter(mappedHandler.getHandler());\n\n                // Process last-modified header, if supported by the handler.\n                String method = request.getMethod();\n                boolean isGet = "GET".equals(method);\n                if (isGet || "HEAD".equals(method)) {\n                    long lastModified = ha.getLastModified(request, mappedHandler.getHandler());\n                    if (new ServletWebRequest(request, response).checkNotModified(lastModified) && isGet) {\n                        return;\n                    }\n                }\n                if (!mappedHandler.applyPreHandle(processedRequest, response)) {\n                    return;\n                }\n                //\u5b9e\u9645\u6267\u884c\u7684\u5904\u7406\u5668\n                mv = ha.handle(processedRequest, response, mappedHandler.getHandler());\n\n                if (asyncManager.isConcurrentHandlingStarted()) {\n                    return;\n                }\n                //\u5e94\u7528\u9ed8\u8ba4\u7684\u89c6\u56fe\u540d\u79f0\n                applyDefaultViewName(processedRequest, mv);\n                mappedHandler.applyPostHandle(processedRequest, response, mv);\n            }\n            catch (Exception ex) {\n                dispatchException = ex;\n            }\n            catch (Throwable err) {\n                // As of 4.3, we\'re processing Errors thrown from handler methods as well,\n                // making them available for @ExceptionHandler methods and other scenarios.\n                dispatchException = new NestedServletException("Handler dispatch failed", err);\n            }\n            processDispatchResult(processedRequest, response, mappedHandler, mv, dispatchException);\n        }\n        catch (Exception ex) {\n            triggerAfterCompletion(processedRequest, response, mappedHandler, ex);\n        }\n        catch (Throwable err) {\n            triggerAfterCompletion(processedRequest, response, mappedHandler,\n                    new NestedServletException("Handler processing failed", err));\n        }\n        finally {\n            if (asyncManager.isConcurrentHandlingStarted()) {\n                // Instead of postHandle and afterCompletion\n                if (mappedHandler != null) {\n                    mappedHandler.applyAfterConcurrentHandlingStarted(processedRequest, response);\n                }\n            }\n            else {\n                // Clean up any resources used by a multipart request.\n                if (multipartRequestParsed) {\n                    cleanupMultipart(processedRequest);\n                }\n            }\n        }\n    }\n')),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"getHandler")," \u83b7\u53d6\u5904\u7406\u5668\u6267\u884c\u5668\u5904\u7406\u94fe\uff0c\u7136\u540e ",(0,a.kt)("em",{parentName:"p"},"getHandlerAdapter")," \u83b7\u53d6\u5904\u7406\u5668\u9002\u914d\u5668\u3002 ",(0,a.kt)("em",{parentName:"p"},"applyPreHandle")," \u6267\u884c\u3002\u4ece\u4e0a\u9762\u7684\u6709\u4e24\u4e2a\u51e0\u4e2a\u91cd\u8981\u7684\u65b9\u6cd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"//\u83b7\u53d6\u6267\u884c\u94fe\nmappedHandler = getHandler(processedRequest);\n\n//\u83b7\u53d6\u6267\u884c\u9002\u914d\u5668\nHandlerAdapter ha = getHandlerAdapter(mappedHandler.getHandler());\n\n//\u8c03\u7528\u94fe\u6267\u884c--\u524d\u7f6eHandlerInterceptor\nmappedHandler.applyPreHandle(processedRequest, response)\n\n//\u5b9e\u9645\u5904\u7406\nmv = ha.handle(processedRequest, response, mappedHandler.getHandler());\n\n//\u8c03\u7528\u94fe\u6267\u884c--\u540e\u7f6eHandlerInterceptor\nmappedHandler.applyPostHandle(processedRequest, response, mv);\n")),(0,a.kt)("p",null,"\u63a5\u4e0b\u6765\u4e00\u4e2a\u4e2a\u6765\u5206\u6790\u4e0a\u9762\u7684\u65b9\u6cd5\uff1a"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},(0,a.kt)("inlineCode",{parentName:"em"},"mappedHandler = getHandler(processedRequest)"))),"  \u65b9\u6cd5\u7684\u5206\u6790\uff0c\u770b\u4e00\u4e0b\u6e90\u4ee3\u7801\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"    protected HandlerExecutionChain getHandler(HttpServletRequest request) throws Exception {\n        if (this.handlerMappings != null) {\n            //\u4ecehandlerMappings\u83b7\u53d6HandlerMapping\u7684\u5b9e\u73b0\n            for (HandlerMapping mapping : this.handlerMappings) {\n                //\u4eceHandlerMapping\u5b9e\u73b0\u4e2d\u83b7\u53d6\u5904\u7406\u6267\u884c\u8c03\u7528\u94fe\n                HandlerExecutionChain handler = mapping.getHandler(request);\n                if (handler != null) {\n                    return handler;\n                }\n            }\n        }\n        return null;\n    }\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"HandlerMapping\u9ed8\u8ba4\u5b9e\u73b0\u52a0\u8f7d\u6709\u4e09\u4e2a\uff1a"),(0,a.kt)("ol",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ol"},"RequestMappingHandlerMapping"),(0,a.kt)("li",{parentName:"ol"},"BeanNameUrlHandlerMapping"),(0,a.kt)("li",{parentName:"ol"},"SimpleUrlHandlerMapping"))),(0,a.kt)("p",null,"\u9ed8\u8ba4\u52a0\u8f7d\u7684 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},(0,a.kt)("inlineCode",{parentName:"em"},"RequestMappingHandlerMapping")))," \uff0c\u770b\u4e00\u4e0b\u5982\u4f55\u83b7\u53d6 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"HandlerExecutionChain"))," \u8c03\u7528\u94fe\u3002 \u8c03\u7528\u7684\u65b9\u6cd5 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"AbstractHandlerMapping#getHandler"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"    public final HandlerExecutionChain getHandler(HttpServletRequest request) throws Exception {\n        //\u83b7\u53d6\u5185\u90e8\u5904\u7406\u5668\n        Object handler = getHandlerInternal(request);\n        if (handler == null) {\n            //\u5982\u679c\u4e3a\u7a7a\u83b7\u53d6\u9ed8\u8ba4\u5904\u7406\u5668\n            handler = getDefaultHandler();\n        }\n        if (handler == null) {\n            return null;\n        }\n        // Bean name or resolved handler?\n        if (handler instanceof String) {\n            String handlerName = (String) handler;\n            handler = obtainApplicationContext().getBean(handlerName);\n        }\n\n        HandlerExecutionChain executionChain = getHandlerExecutionChain(handler, request);\n\n        //\u7701\u4e86\u65e5\u5fd7\u6253\u5370\n\n        //\u8de8\u57df\u7684\u914d\u7f6e\n        if (CorsUtils.isCorsRequest(request)) {\n            CorsConfiguration globalConfig = this.corsConfigurationSource.getCorsConfiguration(request);\n            CorsConfiguration handlerConfig = getCorsConfiguration(handler, request);\n            CorsConfiguration config = (globalConfig != null ? globalConfig.combine(handlerConfig) : handlerConfig);\n            executionChain = getCorsHandlerExecutionChain(request, executionChain, config);\n        }\n\n        return executionChain;\n    }\n")),(0,a.kt)("p",null,"\u7136\u540e\u5c31\u662f\u83b7\u53d6 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"HandlerAdapter ha = getHandlerAdapter(mappedHandler.getHandler())"))," \u9002\u914d\u5668\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'protected HandlerAdapter getHandlerAdapter(Object handler) throws ServletException {\n        if (this.handlerAdapters != null) {\n            //\u83b7\u53d6\u5904\u7406\u9002\u914d\u5668\n            for (HandlerAdapter adapter : this.handlerAdapters) {\n                if (adapter.supports(handler)) {\n                    return adapter;\n                }\n            }\n        }\n        throw new ServletException("No adapter for handler [" + handler +\n                "]: The DispatcherServlet configuration needs to include a HandlerAdapter that supports this handler");\n    }\n')),(0,a.kt)("p",null,"\u9002\u914d\u5668\u9ed8\u8ba4\u52a0\u8f7d\u7684 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"RequestMappingHandlerAdapter"))," \u9002\u914d\u5668\u3002 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"mappedHandler.applyPreHandle(processedRequest, response)")),"  \u5904\u7406 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"HandlerInterceptor"))," \u7684 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},(0,a.kt)("inlineCode",{parentName:"em"},"preHandle")))," \u65b9\u6cd5\u3002\u7136\u540e ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"mv = ha.handle(processedRequest, response, mappedHandler.getHandler())"))," \u8c03\u7528 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"HandlerAdapter"))," \u7684 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"handle"))," \u65b9\u6cd5\u3002 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"mappedHandler.applyPostHandle(processedRequest, response, mv);"))," \u63a5\u4e0b\u6765\u6267\u884c ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"HandlerInterceptor")),"  \u7684 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},(0,a.kt)("inlineCode",{parentName:"em"},"postHandle"))),"\u3002"))}d.isMDXComponent=!0}}]);