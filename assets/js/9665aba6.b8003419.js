"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[9750],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(r),g=a,m=d["".concat(l,".").concat(g)]||d[g]||u[g]||o;return r?n.createElement(m,s(s({ref:t},c),{},{components:r})):n.createElement(m,s({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=g;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},6150:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={title:"Spring\u4f9d\u8d56\u6ce8\u5165\u65f6\uff0c\u4ec0\u4e48\u65f6\u5019\u4f1a\u521b\u5efa\u4ee3\u7406\u7c7b",linkTitle:"Spring\u4f9d\u8d56\u6ce8\u5165\u65f6\uff0c\u4ec0\u4e48\u65f6\u5019\u4f1a\u521b\u5efa\u4ee3\u7406\u7c7b",date:new Date("2021-12-08T00:00:00.000Z"),weight:202112081717},s=void 0,i={unversionedId:"spring/spring-framework/aop-source-analysis/when-create-proxy",id:"spring/spring-framework/aop-source-analysis/when-create-proxy",title:"Spring\u4f9d\u8d56\u6ce8\u5165\u65f6\uff0c\u4ec0\u4e48\u65f6\u5019\u4f1a\u521b\u5efa\u4ee3\u7406\u7c7b",description:"\u7528\u5230\u7684\u4ee3\u7801\u5730\u5740\uff1ahttps://github.com/mxsm/spring-sample/tree/spring-5.3.x/spring-proxy",source:"@site/docs/spring/spring-framework/aop-source-analysis/when-create-proxy.md",sourceDirName:"spring/spring-framework/aop-source-analysis",slug:"/spring/spring-framework/aop-source-analysis/when-create-proxy",permalink:"/docs/spring/spring-framework/aop-source-analysis/when-create-proxy",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/spring/spring-framework/aop-source-analysis/when-create-proxy.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1675697367,formattedLastUpdatedAt:"Feb 6, 2023",frontMatter:{title:"Spring\u4f9d\u8d56\u6ce8\u5165\u65f6\uff0c\u4ec0\u4e48\u65f6\u5019\u4f1a\u521b\u5efa\u4ee3\u7406\u7c7b",linkTitle:"Spring\u4f9d\u8d56\u6ce8\u5165\u65f6\uff0c\u4ec0\u4e48\u65f6\u5019\u4f1a\u521b\u5efa\u4ee3\u7406\u7c7b",date:"2021-12-08T00:00:00.000Z",weight:202112081717},sidebar:"springframework",previous:{title:"Spring AOP\u5e94\u7528\u4e4bSpring\u4e8b\u52a1\u7ba1\u7406",permalink:"/docs/spring/spring-framework/aop-source-analysis/spring-aop-transaction-management"},next:{title:"Spring\u4e2d\u5e38\u7528\u7684\u5de5\u5177\u7c7b",permalink:"/docs/spring/spring-framework/custom-component-extensions/spring-common-utils"}},l={},p=[{value:"1. \u73b0\u8c61",id:"1-\u73b0\u8c61",level:3},{value:"2. \u73b0\u8c61\u8bf4\u660e",id:"2-\u73b0\u8c61\u8bf4\u660e",level:3},{value:"3. \u6e90\u7801\u5206\u6790",id:"3-\u6e90\u7801\u5206\u6790",level:3},{value:"3.1 \u4e0a\u9762\u65f6\u5019\u4f1a\u4f7f\u7528\u4ee3\u7406\u7c7b",id:"31-\u4e0a\u9762\u65f6\u5019\u4f1a\u4f7f\u7528\u4ee3\u7406\u7c7b",level:4},{value:"3.2 \u5982\u4f55\u9009\u62e9JDK\u4ee3\u7406\u548cCglib\u4ee3\u7406",id:"32-\u5982\u4f55\u9009\u62e9jdk\u4ee3\u7406\u548ccglib\u4ee3\u7406",level:4},{value:"4. \u603b\u7ed3",id:"4-\u603b\u7ed3",level:3}],c={toc:p},d="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u7528\u5230\u7684\u4ee3\u7801\u5730\u5740\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mxsm/spring-sample/tree/spring-5.3.x/spring-proxy"},"https://github.com/mxsm/spring-sample/tree/spring-5.3.x/spring-proxy"))),(0,a.kt)("h3",{id:"1-\u73b0\u8c61"},"1. \u73b0\u8c61"),(0,a.kt)("p",null,"\u7b2c\u4e00\u79cd\u60c5\u51b5\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://github.com/mxsm/picture/blob/main/spring/aop/proxy1.png?raw=true",alt:null})),(0,a.kt)("p",null,"\u7b2c\u4e8c\u79cd\u60c5\u51b5\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://github.com/mxsm/picture/blob/main/spring/aop/proxy2.png?raw=true",alt:null})),(0,a.kt)("p",null,"\u7b2c\u4e09\u79cd\u60c5\u51b5\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://github.com/mxsm/picture/blob/main/spring/aop/proxy3.png?raw=true",alt:null})),(0,a.kt)("h3",{id:"2-\u73b0\u8c61\u8bf4\u660e"},"2. \u73b0\u8c61\u8bf4\u660e"),(0,a.kt)("p",null,"\u7b2c\u4e00\u79cd\u662f\u6700\u5e38\u89c1\u7684\u5728\u666e\u901a\u7684Spring\u5e94\u7528\u4e2d\uff0c\u4f1a\u53d1\u73b0 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"UserService"))," \u548c ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"TeacherService"))," \u90fd\u6ca1\u6709\u521b\u5efa\u4ee3\u7406\u3002\u8fd9\u4e2a\u5c31\u662f\u6700\u5e38\u89c1\u7684\u4f7f\u7528\u65b9\u5f0f\u3002"),(0,a.kt)("p",null,"\u7b2c\u4e8c\u79cd\u662f\u4f7f\u7528\u4e86 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"@EnableAspectJAutoProxy"))," \u6ce8\u89e3\u5f00\u542f\u4e86Spring AOP\uff0c \u53d1\u73b0",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"UserService"))," \u4f7f\u7528\u7684\u662fJDK\u4ee3\u7406\uff0c",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"TeacherService"))," \u4f7f\u7528\u7684\u662fCGLIB\u4ee3\u7406"),(0,a.kt)("p",null,"\u7b2c\u4e09\u79cd\u662f\u4f7f\u7528\u4e86 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"@EnableAspectJAutoProxy(proxyTargetClass = true)"))," \uff0c\u4f1a\u53d1\u73b0 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"UserService"))," \u548c ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"TeacherService"))," \u90fd\u4f7f\u7528\u7684\u662fCGlib\u4ee3\u7406"),(0,a.kt)("p",null,"\u73b0\u8c61\u603b\u7ed3\uff1a\u5728\u6ca1\u6709\u5f00\u542fAOP\u7684\u60c5\u51b5\u4e0b\u662f\u4e0d\u4f1a\u521b\u5efa\u4ee3\u7406\u7684\uff0c\u5728\u4f7f\u7528\u4e86 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"@EnableAspectJAutoProxy"))," \u9ed8\u8ba4\u7684\u60c5\u51b5\u4e0b\u63a5\u53e3\u7684\u4ee3\u7406\u4f7f\u7528\u7684\u662fJDK\u4ee3\u7406\u5b9e\u73b0\uff0c\u7c7b\u7684\u4ee3\u7406\u4f7f\u7528\u7684CGLIB\uff08jdk\u4e0d\u80fd\u5b9e\u73b0\u7c7b\u7684\u4ee3\u7406\uff09\u3002 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"@EnableAspectJAutoProxy(proxyTargetClass = true)"))," \u5f3a\u5236\u4f7f\u7528CGLIB\u4ee3\u7406\u3002"),(0,a.kt)("h3",{id:"3-\u6e90\u7801\u5206\u6790"},"3. \u6e90\u7801\u5206\u6790"),(0,a.kt)("h4",{id:"31-\u4e0a\u9762\u65f6\u5019\u4f1a\u4f7f\u7528\u4ee3\u7406\u7c7b"},"3.1 \u4e0a\u9762\u65f6\u5019\u4f1a\u4f7f\u7528\u4ee3\u7406\u7c7b"),(0,a.kt)("p",null,"\u901a\u8fc7\u4e4b\u524d\u7684\u300aSpring AOP \u6e90\u7801\u89e3\u6790\u300b\u53ef\u4ee5\u77e5\u9053\uff0c\u6ce8\u89e3\u65b9\u5f0f\u4e0b\u7684AOP\u7684\u521b\u5efa\u4ee3\u7406\u7c7b\u4e3b\u8981\u7684\u7c7b\u662f\uff1a ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"AnnotationAwareAspectJAutoProxyCreator"))," \uff0c\u8fd9\u4e2a\u7c7b\u91cd\u5199\u4e86 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"initBeanFactory"))," \u548c ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"findCandidateAdvisors"))," \u4e24\u4e2a\u65b9\u6cd5\uff1a"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"initBeanFactory\u65b9\u6cd5"),"\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"@Override\nprotected void initBeanFactory(ConfigurableListableBeanFactory beanFactory) {\n    super.initBeanFactory(beanFactory);\n    if (this.aspectJAdvisorFactory == null) {\n        this.aspectJAdvisorFactory = new ReflectiveAspectJAdvisorFactory(beanFactory);\n    }\n    this.aspectJAdvisorsBuilder =\n            new BeanFactoryAspectJAdvisorsBuilderAdapter(beanFactory, this.aspectJAdvisorFactory);\n}\n")),(0,a.kt)("p",null,"\u529f\u80fd\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u65b0\u5efa\u4e86ReflectiveAspectJAdvisorFactory")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u65b0\u5efa\u4e86BeanFactoryAspectJAdvisorsBuilderAdapter"),(0,a.kt)("p",{parentName:"li"},"\u7528\u6765\u5c06\u5305\u542b\u4e86 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"@Aspect"))," \u6ce8\u89e3\u7684Bean\u6784\u5efa\u6210\u4e00\u4e2aAdvisor"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"findCandidateAdvisors:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"@Override\nprotected List<Advisor> findCandidateAdvisors() {\n    // Add all the Spring advisors found according to superclass rules.\n    List<Advisor> advisors = super.findCandidateAdvisors();\n    // Build Advisors for all AspectJ aspects in the bean factory.\n    if (this.aspectJAdvisorsBuilder != null) {\n        advisors.addAll(this.aspectJAdvisorsBuilder.buildAspectJAdvisors());\n    }\n    return advisors;\n}\n")),(0,a.kt)("p",null,"\u529f\u80fd\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u67e5\u627e\u5019\u9009\u7684Advisor(\u5b9e\u73b0\u4e86Advisor\u63a5\u53e3\u7684)"),(0,a.kt)("li",{parentName:"ul"},"\u5c06 AspectJ\u7684\u6784\u5efa\u6210Advisor(@Aspec, @Before\u7b49\u7b49\u76f8\u5173\u7684Aspect\u7684\u6ce8\u89e3\u89e3\u6790\u6784\u5efa\u6210Advisor)")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Tips: \u4e0a\u9762\u7684\u7b2c\u4e8c\u79cd\u548c\u7b2c\u4e09\u79cd\u5c31\u662f\u901a\u8fc7\u81ea\u5df1\u5b9a\u4e49\u7684Advisor\u6765\u5b9e\u73b0\u7684\u3002\u6ca1\u6709\u4f7f\u7528Spring\u7684\u6ce8\u89e3\u4f8b\u5982\uff1a@Transactional (\u4e8b\u52a1\u7ba1\u7406\u6ce8\u89e3)\u3002\u5982\u679c\u5acc\u9ebb\u70e6\u4e5f\u53ef\u4ee5\u7528\u8fd9\u4e2a\u6ce8\u89e3\u6216\u8005\u5176\u4ed6\u7684AOP\u7684\u6ce8\u89e3\u6765\u89c2\u5bdf\u4e0a\u9762\u7684\u4e09\u79cd\u60c5\u51b5\u3002")),(0,a.kt)("p",null,"\u6240\u4ee5\u4ece\u4e0a\u9762\u7684\u4ee3\u7801\u5c31\u80fd\u770b\u51fa\u6765\u5c31\u80fd\u77e5\u9053\u662f\u5426\u4f7f\u7528\u4ee3\u7406\u5c31\u662f\u770b\u662f\u5426\u5f00\u542f\u4e86 Spring AOP\uff0c \u540c\u65f6\u5bf9\u5e94\u7684\u7c7b\u662f\u5426\u5305\u542bAop\u9700\u8981\u5904\u7406\u7684\u903b\u8f91\u3002\u4f8b\u5982\u4e0a\u9762\u81ea\u5b9a\u4e49\u7684 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"@Log"))," \u6ce8\u89e3\u6216\u8005AspectJ\u7684\u76f8\u5173\u6ce8\u89e3\u3002"),(0,a.kt)("h4",{id:"32-\u5982\u4f55\u9009\u62e9jdk\u4ee3\u7406\u548ccglib\u4ee3\u7406"},"3.2 \u5982\u4f55\u9009\u62e9JDK\u4ee3\u7406\u548cCglib\u4ee3\u7406"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"@EnableAspectJAutoProxy(proxyTargetClass = true)"))," \u5f3a\u5236\u4f7f\u7528Cglib\u4ee3\u7406\u3002\u4f46\u662f\u9ed8\u8ba4\u7684\u60c5\u51b5\u4e0b\u662f\u600e\u4e48\u6837\u7684\uff0c\u6211\u4eec\u8fd8\u662f\u6839\u636e\u770b\u4e00\u4e0b\u6e90\u7801\u6765\u5206\u6790\u4e00\u4e0b\u3002\u5728\u521b\u5efa\u4ee3\u7406\u7c7b\u7684\u65f6\u5019\u5728 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"AbstractAutoProxyCreator#createProxy"))," \u65b9\u6cd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"protected Object createProxy(Class<?> beanClass, @Nullable String beanName,\n        @Nullable Object[] specificInterceptors, TargetSource targetSource) {\n\n    if (this.beanFactory instanceof ConfigurableListableBeanFactory) {\n        AutoProxyUtils.exposeTargetClass((ConfigurableListableBeanFactory) this.beanFactory, beanName, beanClass);\n    }\n\n    ProxyFactory proxyFactory = new ProxyFactory();\n    proxyFactory.copyFrom(this);\n    //\u8bbe\u7f6e\u5f3a\u5236\u4f7f\u7528Cglib\u4ee3\u7406\n    if (proxyFactory.isProxyTargetClass()) {\n        // Explicit handling of JDK proxy targets (for introduction advice scenarios)\n        if (Proxy.isProxyClass(beanClass)) {\n            // Must allow for introductions; can't just set interfaces to the proxy's interfaces only.\n            for (Class<?> ifc : beanClass.getInterfaces()) {\n                proxyFactory.addInterface(ifc);\n            }\n        }\n    }\n    else {\n        // \u6ca1\u6709proxyTargetClass\u5f3a\u5236\u7684\u60c5\u51b5\u4e0b\u5224\u65ad\u662f\u5426\u4f7f\u7528Cglib\u4ee3\u7406\uff0c\u8fd9\u91cc\u6839\u636e\u662f\u4ee3\u7406\u63a5\u53e3\u8fd8\u662f\u4ee3\u7406\u7c7b\n        if (shouldProxyTargetClass(beanClass, beanName)) {\n            proxyFactory.setProxyTargetClass(true);\n        }\n        else {\n            //\u8bc4\u4f30\u4ee3\u7406\u63a5\u53e3\n            evaluateProxyInterfaces(beanClass, proxyFactory);\n        }\n    }\n\n    Advisor[] advisors = buildAdvisors(beanName, specificInterceptors);\n    proxyFactory.addAdvisors(advisors);\n    proxyFactory.setTargetSource(targetSource);\n    customizeProxyFactory(proxyFactory);\n\n    proxyFactory.setFrozen(this.freezeProxy);\n    if (advisorsPreFiltered()) {\n        proxyFactory.setPreFiltered(true);\n    }\n\n    // Use original ClassLoader if bean class not locally loaded in overriding class loader\n    ClassLoader classLoader = getProxyClassLoader();\n    if (classLoader instanceof SmartClassLoader && classLoader != beanClass.getClassLoader()) {\n        classLoader = ((SmartClassLoader) classLoader).getOriginalClassLoader();\n    }\n    //\u521b\u5efa\u4ee3\u7406\u7c7b\n    return proxyFactory.getProxy(classLoader);\n}\n")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u6839\u636e ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"proxyTargetClass"))," \u6807\u8bb0\u6765\u5224\u65ad\u662f\u5426\u5f3a\u5236\u4f7f\u7528Cglib\u6765\u521b\u5efa\u4ee3\u7406"),(0,a.kt)("li",{parentName:"ol"},"\u5982\u679c\u6ca1\u6709\u8bbe\u7f6e ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"proxyTargetClass=true"))," \u5c31\u6839\u636e\u662f\u4ee3\u7406\u63a5\u53e3\u8fd8\u662f\u4ee3\u7406\u7c7b\u6765\u52a8\u6001\u5904\u7406\u9009\u62e9\u4ee3\u7406\u65b9\u5f0f"),(0,a.kt)("li",{parentName:"ol"},"\u521b\u5efa\u4ee3\u7406\u7c7b\u8fd4\u56de")),(0,a.kt)("h3",{id:"4-\u603b\u7ed3"},"4. \u603b\u7ed3"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5728\u6ca1\u6709\u5f00\u542fAOP\u7684\u65f6\u5019\u5982\u679c\u4e0d\u81ea\u5df1\u5b9a\u4e49\u662f\u4e0d\u4f1a\u4f7f\u7528\u548c\u521b\u5efa\u4ee3\u7406\u7c7b\u3002 \u4e5f\u5c31\u662f\u4f7f\u7528\u6211\u4eec\u5e73\u65f6\u4f7f\u7528\u7684\u4e0d\u540c\u7c7b\u5b9e\u4f8b"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"@EnableAspectJAutoProxy(proxyTargetClass = true)"))," \u5f3a\u5236\u6240\u6709\u7684\u65b9\u5f0f\u90fd\u4f7f\u7528Cglib\u8fdb\u884c\u4ee3\u7406"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"@EnableAspectJAutoProxy"))," \u9ed8\u8ba4\u60c5\u51b5\u4e0b\u4f1a\u6839\u636e\u60c5\u51b5\u6765\u5224\u65ad\u662f\u5426\u521b\u5efa\u4ee3\u7406\u7c7b\uff0c\u548c\u7528Jdk\u4ee3\u7406\u5b9e\u73b0\u8fd8\u662fCglib\u5b9e\u73b0")))}u.isMDXComponent=!0}}]);