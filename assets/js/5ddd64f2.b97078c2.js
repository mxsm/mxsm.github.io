"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[5243],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>v});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},m="mdxType",x={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=c(n),u=r,v=m["".concat(i,".").concat(u)]||m[u]||x[u]||o;return n?a.createElement(v,l(l({ref:t},s),{},{components:n})):a.createElement(v,l({ref:t},s))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=u;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[m]="string"==typeof e?e:r,l[1]=p;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6083:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>x,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={title:"Spring Web Context",date:new Date("2018-10-30T00:00:00.000Z")},l=void 0,p={unversionedId:"spring/spring-framework/web-source-analysis/spring-web-context",id:"spring/spring-framework/web-source-analysis/spring-web-context",title:"Spring Web Context",description:"1. Spring Web Contexts",source:"@site/docs/spring/spring-framework/web-source-analysis/spring-web-context.md",sourceDirName:"spring/spring-framework/web-source-analysis",slug:"/spring/spring-framework/web-source-analysis/spring-web-context",permalink:"/docs/spring/spring-framework/web-source-analysis/spring-web-context",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/spring/spring-framework/web-source-analysis/spring-web-context.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1678285899,formattedLastUpdatedAt:"Mar 8, 2023",frontMatter:{title:"Spring Web Context",date:"2018-10-30T00:00:00.000Z"},sidebar:"springframework",previous:{title:"\u6df1\u5165\u4e86\u89e3WebApplicationInitializer\u662f\u6d88\u9664web.xml\u548cspringMVC\u7684\u914d\u7f6e\u6587\u4ef6",permalink:"/docs/spring/spring-framework/web-source-analysis/WebApplicationInitializer-eliminate-xml"},next:{title:"Spring AOP \u6e90\u7801\u89e3\u6790",permalink:"/docs/spring/spring-framework/aop-source-analysis/"}},i={},c=[{value:"1. Spring Web Contexts",id:"1-spring-web-contexts",level:3},{value:"2. Root Web Application Context",id:"2-root-web-application-context",level:3},{value:"2.1 <em>ContextLoaderListener</em>",id:"21-contextloaderlistener",level:4},{value:"2.2 \u4f7f\u7528 web.xml \u548c XML Application Context",id:"22-\u4f7f\u7528-webxml-\u548c-xml-application-context",level:4},{value:"2.3 web.xml \u548c Java Application Context",id:"23-webxml-\u548c-java-application-context",level:4},{value:"2.4 Servlet3.X \u53ef\u7f16\u7a0b\u914d\u7f6e",id:"24-servlet3x-\u53ef\u7f16\u7a0b\u914d\u7f6e",level:4},{value:"2.5 Servlet 3.x \u548c XML Application Context",id:"25-servlet-3x-\u548c-xml-application-context",level:4},{value:"2.6 Servlet 3.x \u548c Java Application Context",id:"26-servlet-3x-\u548c-java-application-context",level:4},{value:"3. Dispatcher Servlet Contexts",id:"3-dispatcher-servlet-contexts",level:3},{value:"3.1 web.xml \u548c XML Application Context",id:"31-webxml-\u548c-xml-application-context",level:4},{value:"3.2 web.xml \u548c Java Application Context",id:"32-webxml-\u548c-java-application-context",level:4},{value:"3.3 Servlet 3.x \u548c XML Application Context",id:"33-servlet-3x-\u548c-xml-application-context",level:4},{value:"3.4 Servlet 3.x \u548c Java Application Context",id:"34-servlet-3x-\u548c-java-application-context",level:4}],s={toc:c},m="wrapper";function x(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"1-spring-web-contexts"},"1. Spring Web Contexts"),(0,r.kt)("p",null,"\u5f53\u6211\u4eec\u5728Web\u9879\u76ee\u4e2d\u4f7f\u7528Spring\u7684\u65f6\u5019\u6211\u4eec\u6709\u51e0\u79cd\u65b9\u5f0f\u53bb\u7ec4\u7ec7application contexts\uff0c\u63a5\u4e0b\u6765\u6211\u4eec\u5c06\u5206\u6790\u5927\u90e8\u5206\u7684\u63d0\u4f9b\u3002"),(0,r.kt)("h3",{id:"2-root-web-application-context"},"2. Root Web Application Context"),(0,r.kt)("p",null,"\u6bcf\u4e00\u4e2aSpring webapp\u6709\u4e00\u4e2a\u4e0e\u4ed6\u751f\u547d\u5468\u671f\u76f8\u5173\u8054\u7684application context: root web application context"),(0,r.kt)("p",null,"\u8fd9\u4e2a\u4e0a\u4e0b\u6587\u968f\u7740\u5e94\u7528\u7684\u542f\u52a8\u800c\u542f\u52a8\uff0c\u968f\u7740\u5f15\u7528\u7684\u9500\u6bc1\u800c\u9500\u6bc1\uff0c\u8fd9\u4e2a\u7531servlet context listener\u6765\u5b9e\u73b0\u3002\u8fd9\u4e2a\u4e0a\u4e0b\u6587\u5728web Application\u4e2d\u603b\u662f\u4e00\u4e2a ",(0,r.kt)("em",{parentName:"p"},"WebApplicationContext")," \u5b9e\u4f8b\u3002\u8fd9\u4e2a\u63a5\u53e3\u7ee7\u627f\u4e86 ",(0,r.kt)("em",{parentName:"p"},"ApplicationContext"),"  \u540c\u65f6\u80fd\u591f\u8bbf\u95ee\u5230 ",(0,r.kt)("em",{parentName:"p"},"ServletContext")," \u3002"),(0,r.kt)("h4",{id:"21-contextloaderlistener"},"2.1 ",(0,r.kt)("em",{parentName:"h4"},"ContextLoaderListener")),(0,r.kt)("p",null,"web\u5e94\u7528\u7a0b\u5e8f\u662f\u7531\u4e00\u4e2a\u76d1\u542c\u5668 ",(0,r.kt)("em",{parentName:"p"},"org.springframework.web.context.ContextLoaderListener")," \u6765\u7ba1\u7406\u3002\u8fd9\u4e2a\u76d1\u542c\u5668\u662fSpring\u6a21\u5757\u4e2d\u7684\u4e00\u90e8\u5206\uff0c ",(0,r.kt)("strong",{parentName:"p"},"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u52a0\u8f7dXML application context \u4ece/WEB-INF/applicationContext.xml.")," \u7136\u800c\u8fd9\u79cd\u9ed8\u8ba4\u60c5\u51b5\u662f\u53ef\u7528\u6539\u53d8\u7684\u3002"),(0,r.kt)("h4",{id:"22-\u4f7f\u7528-webxml-\u548c-xml-application-context"},"2.2 \u4f7f\u7528 web.xml \u548c XML Application Context"),(0,r.kt)("p",null,"web.xml"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<listener>\n    <listener-class>\n        org.springframework.web.context.ContextLoaderListener\n    </listener-class>\n</listener>\n")),(0,r.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528contextConfigLocation\u53c2\u6570\u6307\u5b9aXML\u4e0a\u4e0b\u6587\u914d\u7f6e\u7684\u53e6\u4e00\u4e2a\u4f4d\u7f6e:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<context-param>\n    <param-name>contextConfigLocation</param-name>\n    <param-value>/WEB-INF/rootApplicationContext.xml</param-value>\n</context-param>\n")),(0,r.kt)("p",null,"\u591a\u4e2a\u7684\u60c5\u51b5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<context-param>\n    <param-name>contextConfigLocation</param-name>\n    <param-value>/WEB-INF/context1.xml, /WEB-INF/context2.xml</param-value>\n</context-param>\n")),(0,r.kt)("p",null,"\u6216\u8005\u4f7f\u7528\u901a\u914d\u7b26\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<context-param>\n    <param-name>contextConfigLocation</param-name>\n    <param-value>/WEB-INF/*-context.xml</param-value>\n</context-param>\n")),(0,r.kt)("h4",{id:"23-webxml-\u548c-java-application-context"},"2.3 web.xml \u548c Java Application Context"),(0,r.kt)("p",null,"\u9664\u4e86\u9ed8\u8ba4XmlWebApplicationContext,\u770b\u5982\u4f55\u4f7f\u7528\u6ce8\u89e3\uff1a"),(0,r.kt)("p",null,"\u6211\u4eec\u4f7f\u7528 ",(0,r.kt)("em",{parentName:"p"},"contextClass")," \u53c2\u6570\u6765\u544a\u8bc9\u76d1\u542c\u5668\u4f7f\u7528\u90a3\u79cd\u7c7b\u578b\u7684context\u5b9e\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<context-param>\n    <param-name>contextClass</param-name>\n    <param-value>\n        org.springframework.web.context.support.AnnotationConfigWebApplicationContext\n    </param-value>\n</context-param>\n")),(0,r.kt)("p",null," \u7531\u4e8e ",(0,r.kt)("em",{parentName:"p"},"AnnotationConfigWebApplicationContext"),"  \u6ca1\u6709\u9ed8\u8ba4\u7684\u914d\u7f6e\u6240\u4ee5\u6211\u4eec\u5fc5\u987b\u63d0\u4f9b\u4e00\u4e2a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<context-param>\n    <param-name>contextConfigLocation</param-name>\n    <param-value>\n        com.baeldung.contexts.config.RootApplicationConfig,\n        com.baeldung.contexts.config.NormalWebAppConfig\n    </param-value>\n</context-param>\n")),(0,r.kt)("p",null,"\u6216\u8005\u6211\u4eec\u544a\u8bc9Context\u53bb\u626b\u63cf\u4e00\u4e2a\u6216\u8005\u591a\u4e2apackage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<context-param>\n    <param-name>contextConfigLocation</param-name>\n    <param-value>org.baeldung.bean.config</param-value>\n</context-param>\n")),(0,r.kt)("h4",{id:"24-servlet3x-\u53ef\u7f16\u7a0b\u914d\u7f6e"},"2.4 Servlet3.X \u53ef\u7f16\u7a0b\u914d\u7f6e"),(0,r.kt)("p",null,"Servlet3.X\u7684\u914d\u7f6e\u6587\u4ef6web.xml\u662f\u53ef\u9009\u7684\u3002\u6b64\u5916\uff0c\u7528\u6237\u8fd8\u53ef\u4ee5\u8bbf\u95ee\u4e00\u4e2aAPI\uff0c\u8be5API\u5141\u8bb8\u4ee5\u7f16\u7a0b\u65b9\u5f0f\u5b9a\u4e49\u57fa\u4e8eservlet\u7684\u5e94\u7528\u7a0b\u5e8f\u7684\u6bcf\u4e2a\u5143\u7d20spring-web\u6a21\u5757\u5229\u7528\u8fd9\u4e9b\u7279\u6027\uff0c\u5e76\u5728\u5e94\u7528\u7a0b\u5e8f\u542f\u52a8\u65f6\u63d0\u4f9bAPI\u6765\u6ce8\u518c\u5e94\u7528\u7a0b\u5e8f\u7684\u7ec4\u4ef6\u3002Spring\u626b\u63cf\u5e94\u7528\u7a0b\u5e8f\u7684\u7c7b\u8def\u5f84\u5bfb\u627e ",(0,r.kt)("em",{parentName:"p"},"org.springframework.web.WebApplicationInitializer"),"  \u7c7b\u7684\u5b9e\u4f8b\u3002\u901a\u8fc7\u6267\u884c ",(0,r.kt)("em",{parentName:"p"},"void onStartup(ServletContext servletContext) throws ServletException")," \u65b9\u6cd5\u6765\u8c03\u7528application\u542f\u52a8\u3002"),(0,r.kt)("h4",{id:"25-servlet-3x-\u548c-xml-application-context"},"2.5 Servlet 3.x \u548c XML Application Context"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public class ApplicationInitializer implements WebApplicationInitializer {\n     \n    @Override\n    public void onStartup(ServletContext servletContext) \n      throws ServletException {\n        //...\n    }\n}\n")),(0,r.kt)("p",null,"\u53ea\u9700\u8981\u5b9e\u73b0 ",(0,r.kt)("em",{parentName:"p"},"WebApplicationInitializer")," \u63a5\u53e3\uff1b"),(0,r.kt)("p",null,"\u9996\u5148\u6211\u4eec\u6765\u521b\u5efa\u4e00\u4e2aroot context,\u7b2c\u4e00\u884c\u662f\u6211\u4eec\u524d\u9762\u9047\u5230\u7684contextClass\u53c2\u6570\u7684\u663e\u5f0f\u7248\u672c\uff0c\u6211\u4eec\u4f7f\u7528\u5b83\u6765\u51b3\u5b9a\u4f7f\u7528\u54ea\u4e2a\u7279\u5b9a\u7684\u4e0a\u4e0b\u6587\u5b9e\u73b0:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-reStructuredText"},"XmlWebApplicationContext rootContext = new XmlWebApplicationContext();\n")),(0,r.kt)("p",null,"\u63a5\u4e0b\u6765\u662f\u53c2\u6570 ",(0,r.kt)("em",{parentName:"p"},"contextConfigLocation"),"  \u5b9a\u4e49\u52a0\u8f7dbean\u5b9a\u4e49\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'rootContext.setConfigLocations("/WEB-INF/rootApplicationContext.xml");\n')),(0,r.kt)("p",null,"\u63a5\u4e0b\u6765\u662f\u4e3aServletContext\u6dfb\u52a0\u76d1\u542c\u5668"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"servletContext.addListener(new ContextLoaderListener(rootContext));\n")),(0,r.kt)("h4",{id:"26-servlet-3x-\u548c-java-application-context"},"2.6 Servlet 3.x \u548c Java Application Context"),(0,r.kt)("p",null,"\u4f7f\u7528 ",(0,r.kt)("em",{parentName:"p"},"AnnotationConfigWebApplicationContext"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public class AnnotationsBasedApplicationInitializer \n  extends AbstractContextLoaderInitializer {\n  \n    @Override\n    protected WebApplicationContext createRootApplicationContext() {\n        AnnotationConfigWebApplicationContext rootContext\n          = new AnnotationConfigWebApplicationContext();\n        rootContext.register(RootApplicationConfig.class);\n        return rootContext;\n    }\n}\n")),(0,r.kt)("p",null,"\u5728\u8fd9\u91cc\uff0c\u6211\u4eec\u53ef\u4ee5\u770b\u5230\u6211\u4eec\u4e0d\u518d\u9700\u8981\u6ce8\u518cContextLoaderListener,\u8fd8\u8981\u6ce8\u610fregister\u65b9\u6cd5\u7684\u4f7f\u7528\uff0c\u5b83\u662f\u7279\u5b9a\u4e8eAnnotationConfigWebApplicationContext\u7684\uff0c\u800c\u4e0d\u662f\u66f4\u901a\u7528\u7684setConfigLocations:\u901a\u8fc7\u8c03\u7528\u5b83\uff0c\u6211\u4eec\u53ef\u4ee5\u7528\u4e0a\u4e0b\u6587\u6ce8\u518c\u5355\u4e2a@Configuration\u6ce8\u91ca\u7684\u7c7b\uff0c\u4ece\u800c\u907f\u514d\u4e86\u5305\u626b\u63cf\u3002"),(0,r.kt)("h3",{id:"3-dispatcher-servlet-contexts"},"3. Dispatcher Servlet Contexts"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Spring MVC applications\u6709\u81f3\u5c11\u4e00\u4e2aDispatcher Servlet \u914d\u7f6e"),"  \u8fd9\u4e2aServlet\u5904\u7406\u63a5\u53d7\u8bf7\u6c42\uff0c\u5206\u53d1\u7ed9\u9002\u5f53\u7684\u63a7\u5236\u5668\u65b9\u6cd5\u7136\u540e\u8fd4\u56de\u5bf9\u5e94\u7684\u89c6\u56fe\u3002"),(0,r.kt)("p",null,"\u6bcf\u4e00\u4e2a ",(0,r.kt)("strong",{parentName:"p"},"DispatcherServlet")," \u6709\u5173\u8054\u7684application context. \u5728\u8fd9\u6837\u7684\u4e0a\u4e0b\u6587\u4e2d\u5b9a\u4e49\u7684bean\u914d\u7f6eservlet\u5e76\u5b9a\u4e49MVC\u5bf9\u8c61\uff0c\u5982\u63a7\u5236\u5668\u548c\u89c6\u56fe\u89e3\u6790\u5668\u3002"),(0,r.kt)("h4",{id:"31-webxml-\u548c-xml-application-context"},"3.1 web.xml \u548c XML Application Context"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<servlet>\n    <servlet-name>normal-webapp</servlet-name>\n    <servlet-class>\n        org.springframework.web.servlet.DispatcherServlet\n    </servlet-class>\n    <load-on-startup>1</load-on-startup>\n</servlet>\n<servlet-mapping>\n    <servlet-name>normal-webapp</servlet-name>\n    <url-pattern>/api/*</url-pattern>\n</servlet-mapping>\n")),(0,r.kt)("p",null,"\u5982\u679c\u6ca1\u6709\u53e6\u5916\u6307\u5b9a\uff0cservlet\u7684\u540d\u79f0\u5c06\u7528\u4e8e\u786e\u5b9a\u8981\u52a0\u8f7d\u7684XML\u6587\u4ef6,\u5728\u4f8b\u5b50\u4e2d\u6211\u4eec\u5c06\u4f7f\u7528 ",(0,r.kt)("em",{parentName:"p"},"WEB-INF/normal-webapp-servlet.xml"),". \u914d\u7f6e\u6587\u4ef6\u3002"),(0,r.kt)("p",null,"\u6211\u4eec\u4e5f\u53ef\u6307\u5b9a\u914d\u7f6e\u6587\u4ef6\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<servlet>\n    ...\n    <init-param>\n        <param-name>contextConfigLocation</param-name>\n        <param-value>/WEB-INF/normal/*.xml</param-value>\n    </init-param>\n</servlet>\n")),(0,r.kt)("h4",{id:"32-webxml-\u548c-java-application-context"},"3.2 web.xml \u548c Java Application Context"),(0,r.kt)("p",null,"\u5f53\u6211\u4eec\u60f3\u8981\u4f7f\u7528\u53e6\u4e00\u79cd\u7c7b\u578b\u7684\u4e0a\u4e0b\u6587\u65f6\uff0c\u6211\u4eec\u7ee7\u7eed\u4f7f\u7528ContextLoaderListener\u3002\u4e5f\u5c31\u662f\u8bf4\uff0c\u6211\u4eec\u6307\u5b9a\u4e86\u4e00\u4e2acontextClass\u53c2\u6570\u548c\u4e00\u4e2a\u5408\u9002\u7684contextConfigLocation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<servlet>\n    <servlet-name>normal-webapp-annotations</servlet-name>\n    <servlet-class>\n        org.springframework.web.servlet.DispatcherServlet\n    </servlet-class>\n    <init-param>\n        <param-name>contextClass</param-name>\n        <param-value>\n            org.springframework.web.context.support.AnnotationConfigWebApplicationContext\n        </param-value>\n    </init-param>\n    <init-param>\n        <param-name>contextConfigLocation</param-name>\n        <param-value>com.baeldung.contexts.config.NormalWebAppConfig</param-value>\n    </init-param>\n    <load-on-startup>1</load-on-startup>\n</servlet>\n")),(0,r.kt)("h4",{id:"33-servlet-3x-\u548c-xml-application-context"},"3.3 Servlet 3.x \u548c XML Application Context"),(0,r.kt)("p",null,"\u521b\u5efa\u4e00\u4e2aWebApplicationInitializer\u548c\u4e00\u4e2aXML\u7684applications context,\u53bb\u5b9e\u73b0onStartup\u65b9\u6cd5"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'XmlWebApplicationContext normalWebAppContext = new XmlWebApplicationContext();\nnormalWebAppContext.setConfigLocation("/WEB-INF/normal-webapp-servlet.xml");\nServletRegistration.Dynamic normal/= servletContext.addServlet("normal-webapp", new DispatcherServlet(normalWebAppContext));\nnormal.setLoadOnStartup(1);\nnormal.addMapping("/api/*");\n')),(0,r.kt)("h4",{id:"34-servlet-3x-\u548c-java-application-context"},"3.4 Servlet 3.x \u548c Java Application Context"),(0,r.kt)("p",null,"\u8fd9\u4e00\u6b21\u6211\u4eec\u914d\u7f6e\u4e00\u4e2a\u6ce8\u89e3\u4e0a\u4e0b\u6587\u5b9e\u73b0WebApplicationInitializer: AbstractDispatcherServletInitializer\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'@Override\nprotected WebApplicationContext createServletApplicationContext() {\n  \n    AnnotationConfigWebApplicationContext secureWebAppContext = new AnnotationConfigWebApplicationContext();\n    secureWebAppContext.register(SecureWebAppConfig.class);\n    return secureWebAppContext;\n}\n \n@Override\nprotected String[] getServletMappings() {\n    return new String[] { "/s/api/*" };\n}\n')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.baeldung.com/spring-web-contexts"},"https://www.baeldung.com/spring-web-contexts")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.nonelonely.com/article/1552475062917"},"https://www.nonelonely.com/article/1552475062917")))}x.isMDXComponent=!0}}]);