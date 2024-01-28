"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[7303],{1396:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var r=n(5893),t=n(1151);const i={title:"Spring\u4e2d\u7684Aware\u63a5\u53e3",date:new Date("2018-08-25T00:00:00.000Z")},s=void 0,o={id:"spring/spring-framework/core-source-analysis/spring-aware-interface",title:"Spring\u4e2d\u7684Aware\u63a5\u53e3",description:"1. ApplicationContextAware",source:"@site/docs/spring/spring-framework/core-source-analysis/spring-aware-interface.md",sourceDirName:"spring/spring-framework/core-source-analysis",slug:"/spring/spring-framework/core-source-analysis/spring-aware-interface",permalink:"/docs/spring/spring-framework/core-source-analysis/spring-aware-interface",draft:!1,unlisted:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/spring/spring-framework/core-source-analysis/spring-aware-interface.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1706451902,formattedLastUpdatedAt:"Jan 28, 2024",frontMatter:{title:"Spring\u4e2d\u7684Aware\u63a5\u53e3",date:"2018-08-25T00:00:00.000Z"},sidebar:"springframework",previous:{title:"EnableTransactionManagement\u6ce8\u89e3\u89e3\u6790\u6765\u770bAOP",permalink:"/docs/spring/spring-framework/core-source-analysis/spring-aop-enableTransactionManagement"},next:{title:"Spring\u61d2\u52a0\u8f7d\u6e90\u7801\u5206\u6790",permalink:"/docs/spring/spring-framework/core-source-analysis/spring-lazyload"}},c={},l=[{value:"1. ApplicationContextAware",id:"1-applicationcontextaware",level:4},{value:"2. BeanNameAware",id:"2-beannameaware",level:4},{value:"3. ApplicationEventPublisherAware",id:"3-applicationeventpublisheraware",level:4},{value:"4. BeanClassLoaderAware",id:"4-beanclassloaderaware",level:4},{value:"5. BeanFactoryAware",id:"5-beanfactoryaware",level:4},{value:"6. BootstrapContextAware",id:"6-bootstrapcontextaware",level:4},{value:"7. LoadTimeWeaverAware",id:"7-loadtimeweaveraware",level:4},{value:"8. MessageSourceAware",id:"8-messagesourceaware",level:4},{value:"9. NotificationPublisherAware",id:"9-notificationpublisheraware",level:4},{value:"10. ResourceLoaderAware",id:"10-resourceloaderaware",level:4},{value:"11. ServletConfigAware",id:"11-servletconfigaware",level:4},{value:"12. ServletContextAware",id:"12-servletcontextaware",level:4}];function d(e){const a={code:"code",h4:"h4",pre:"pre",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.h4,{id:"1-applicationcontextaware",children:"1. ApplicationContextAware"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-java",children:"public interface ApplicationContextAware {\n\n    void setApplicationContext(ApplicationContext applicationContext) throws BeansException;\n}\n"})}),"\n",(0,r.jsx)(a.h4,{id:"2-beannameaware",children:"2. BeanNameAware"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-java",children:"public interface BeanNameAware {\n\n    void setBeanName(String name) throws BeansException;\n}\n"})}),"\n",(0,r.jsx)(a.h4,{id:"3-applicationeventpublisheraware",children:"3. ApplicationEventPublisherAware"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-java",children:"public interface ApplicationEventPublisherAware extends Aware {\n\n\tvoid setApplicationEventPublisher(ApplicationEventPublisher applicationEventPublisher);\n\n}\n"})}),"\n",(0,r.jsx)(a.h4,{id:"4-beanclassloaderaware",children:"4. BeanClassLoaderAware"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-java",children:"public interface BeanClassLoaderAware extends Aware {\n\n\tvoid setBeanClassLoader(ClassLoader classLoader);\n\n}\n"})}),"\n",(0,r.jsx)(a.h4,{id:"5-beanfactoryaware",children:"5. BeanFactoryAware"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-java",children:"public interface BeanFactoryAware extends Aware {\n\n\tvoid setBeanFactory(BeanFactory beanFactory) throws BeansException;\n\n}\n"})}),"\n",(0,r.jsx)(a.h4,{id:"6-bootstrapcontextaware",children:"6. BootstrapContextAware"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-java",children:"public interface BootstrapContextAware extends Aware {\n\n\tvoid setBootstrapContext(BootstrapContext bootstrapContext);\n\n}\n"})}),"\n",(0,r.jsx)(a.h4,{id:"7-loadtimeweaveraware",children:"7. LoadTimeWeaverAware"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-java",children:"public interface LoadTimeWeaverAware extends Aware {\n\n\tvoid setLoadTimeWeaver(LoadTimeWeaver loadTimeWeaver);\n\n}\n"})}),"\n",(0,r.jsx)(a.h4,{id:"8-messagesourceaware",children:"8. MessageSourceAware"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-java",children:"public interface MessageSourceAware extends Aware {\n\n\tvoid setMessageSource(MessageSource messageSource);\n\n}\n"})}),"\n",(0,r.jsx)(a.h4,{id:"9-notificationpublisheraware",children:"9. NotificationPublisherAware"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-java",children:"public interface NotificationPublisherAware extends Aware {\n\n\tvoid setNotificationPublisher(NotificationPublisher notificationPublisher);\n\n}\n"})}),"\n",(0,r.jsx)(a.h4,{id:"10-resourceloaderaware",children:"10. ResourceLoaderAware"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-java",children:"public interface ResourceLoaderAware extends Aware {\n\n\tvoid setResourceLoader(ResourceLoader resourceLoader);\n\n}\n"})}),"\n",(0,r.jsx)(a.h4,{id:"11-servletconfigaware",children:"11. ServletConfigAware"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-java",children:"public interface ServletConfigAware extends Aware {\n\n\tvoid setServletConfig(ServletConfig servletConfig);\n\n}\n"})}),"\n",(0,r.jsx)(a.h4,{id:"12-servletcontextaware",children:"12. ServletContextAware"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-java",children:"public interface ServletContextAware extends Aware {\n\n\tvoid setServletContext(ServletContext servletContext);\n\n}\n"})})]})}function p(e={}){const{wrapper:a}={...(0,t.a)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},1151:(e,a,n)=>{n.d(a,{Z:()=>o,a:()=>s});var r=n(7294);const t={},i=r.createContext(t);function s(e){const a=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),r.createElement(i.Provider,{value:a},e.children)}}}]);