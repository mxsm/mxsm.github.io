"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[5818],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),g=s(n),m=a,d=g["".concat(l,".").concat(m)]||g[m]||u[m]||i;return n?r.createElement(d,p(p({ref:t},c),{},{components:n})):r.createElement(d,p({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,p=new Array(i);p[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[g]="string"==typeof e?e:a,p[1]=o;for(var s=2;s<i;s++)p[s]=n[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7150:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const i={title:"Spring Event\u6e90\u7801\u89e3\u6790",date:new Date("2018-04-05T00:00:00.000Z")},p=void 0,o={unversionedId:"spring/spring-framework/core-source-analysis/Spring-Event",id:"spring/spring-framework/core-source-analysis/Spring-Event",title:"Spring Event\u6e90\u7801\u89e3\u6790",description:"1. Spring\u4e8b\u4ef6\u673a\u5236",source:"@site/docs/spring/spring-framework/core-source-analysis/Spring-Event.md",sourceDirName:"spring/spring-framework/core-source-analysis",slug:"/spring/spring-framework/core-source-analysis/Spring-Event",permalink:"/docs/spring/spring-framework/core-source-analysis/Spring-Event",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/spring/spring-framework/core-source-analysis/Spring-Event.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1691228615,formattedLastUpdatedAt:"Aug 5, 2023",frontMatter:{title:"Spring Event\u6e90\u7801\u89e3\u6790",date:"2018-04-05T00:00:00.000Z"},sidebar:"springframework",previous:{title:"Spring Environment\u6e90\u7801\u89e3\u6790",permalink:"/docs/spring/spring-framework/core-source-analysis/Spring-Environment"},next:{title:"RootBeanDefinition\u3001ChildBeanDefinition\u3001GenericBeanDefinition\u7684\u533a\u522b",permalink:"/docs/spring/spring-framework/core-source-analysis/beandefinediff"}},l={},s=[{value:"1. Spring\u4e8b\u4ef6\u673a\u5236",id:"1-spring\u4e8b\u4ef6\u673a\u5236",level:3},{value:"1.1 \u57fa\u672c\u6982\u5ff5",id:"11-\u57fa\u672c\u6982\u5ff5",level:4},{value:"2. Spring\u6e90\u7801\u5206\u6790\u4e8b\u4ef6\u9a71\u52a8\u8fc7\u7a0b",id:"2-spring\u6e90\u7801\u5206\u6790\u4e8b\u4ef6\u9a71\u52a8\u8fc7\u7a0b",level:3}],c={toc:s},g="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(g,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"1-spring\u4e8b\u4ef6\u673a\u5236"},"1. Spring\u4e8b\u4ef6\u673a\u5236"),(0,a.kt)("p",null,"\u4e8b\u4ef6\u9a71\u52a8\u6a21\u578b\u901a\u5e38\u4e5f\u88ab\u7406\u89e3\u6210\u89c2\u5bdf\u8005\u6a21\u5f0f\u6216\u8005\u53d1\u5e03/\u8ba2\u9605\u6a21\u578b"),(0,a.kt)("h4",{id:"11-\u57fa\u672c\u6982\u5ff5"},"1.1 \u57fa\u672c\u6982\u5ff5"),(0,a.kt)("p",null,"Spring\u7684\u4e8b\u4ef6\u9a71\u52a8\u6a21\u578b\u4e3b\u8981\u7531\u4e09\u90e8\u5206\u7ec4\u6210:  "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\u4e8b\u4ef6")),(0,a.kt)("p",{parentName:"li"},"ApplicationEvent\uff0c\u7ee7\u627f\u81eaJDK\u7684EventObject\uff0c\u6240\u6709\u4e8b\u4ef6\u5c06\u7ee7\u627f\u5b83\uff0c\u5e76\u901a\u8fc7source\u5f97\u5230\u4e8b\u4ef6\u6e90")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\u4e8b\u4ef6\u53d1\u5e03\u8005")),(0,a.kt)("p",{parentName:"li"},"ApplicationEventPublisher(\u53d1\u5e03)\u53caApplicationEventMulticaster(\u5e7f\u64ad)\u63a5\u53e3\uff0c\u4f7f\u7528\u8fd9\u4e2a\u63a5\u53e3\uff0c\u6211\u4eec\u7684Service\u5c31\u62e5\u6709\u4e86\u53d1\u5e03\u4e8b\u4ef6\u7684\u80fd\u529b\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\u4e8b\u4ef6\u8ba2\u9605\u8005")),(0,a.kt)("p",{parentName:"li"},"ApplicationListener\uff0c\u7ee7\u627f\u81eaJDK\u7684EventListener\uff0c\u6240\u6709\u76d1\u542c\u5668\u5c06\u7ee7\u627f\u5b83"))),(0,a.kt)("h3",{id:"2-spring\u6e90\u7801\u5206\u6790\u4e8b\u4ef6\u9a71\u52a8\u8fc7\u7a0b"},"2. Spring\u6e90\u7801\u5206\u6790\u4e8b\u4ef6\u9a71\u52a8\u8fc7\u7a0b"),(0,a.kt)("p",null,"\u5728 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"AbstractApplicationContext#refresh"))," \u65b9\u6cd5\u4e2d\u6709\u4e00\u4e2a ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"initApplicationEventMulticaster"))," \u65b9\u6cd5\u6765\u521d\u59cb\u5316\u4e8b\u4ef6\u7684\u591a\u901a\u9053\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'    protected void initApplicationEventMulticaster() {\n        ConfigurableListableBeanFactory beanFactory = getBeanFactory();\n        if (beanFactory.containsLocalBean(APPLICATION_EVENT_MULTICASTER_BEAN_NAME)) {\n            this.applicationEventMulticaster =\n                    beanFactory.getBean(APPLICATION_EVENT_MULTICASTER_BEAN_NAME, ApplicationEventMulticaster.class);\n            if (logger.isTraceEnabled()) {\n                logger.trace("Using ApplicationEventMulticaster [" + this.applicationEventMulticaster + "]");\n            }\n        }\n        else {\n            this.applicationEventMulticaster = new SimpleApplicationEventMulticaster(beanFactory);\n            beanFactory.registerSingleton(APPLICATION_EVENT_MULTICASTER_BEAN_NAME, this.applicationEventMulticaster);\n            if (logger.isTraceEnabled()) {\n                logger.trace("No \'" + APPLICATION_EVENT_MULTICASTER_BEAN_NAME + "\' bean, using " +\n                        "[" + this.applicationEventMulticaster.getClass().getSimpleName() + "]");\n            }\n        }\n    }\n')),(0,a.kt)("p",null,"\u901a\u8fc7\u4e0a\u9762\u7684\u4ee3\u7801\u53ef\u4ee5\u770b\u51fa\u6765\uff0c ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"ApplicationEventMulticaster"))," \u63a5\u53e3\u5728Spring\u4e2d\u7684\u4e00\u4e2a\u5b9e\u73b0\u5c31\u662f  ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"SimpleApplicationEventMulticaster"))," \u3002"),(0,a.kt)("p",null,"\u901a\u8fc7 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"ApplicationContextAwareProcessor"))," \u6765\u5904\u7406 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"ApplicationEventPublisherAware"))," \u4e8b\u4ef6\u53d1\u8868\u3002\u5728   ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"AbstractApplicationContext#prepareBeanFactory"))," \u65b9\u6cd5\u4e2d\u6709\u8fd9\u6837\u4e00\u6bb5\u4ee3\u7801\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"beanFactory.registerResolvableDependency(ApplicationEventPublisher.class, this);\n")),(0,a.kt)("p",null,"\u628a ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"ApplicationContext"))," \u4f5c\u4e3a ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"ApplicationEventPublisher"))," \uff0c\u56e0\u4e3a ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"ApplicationContext"))," \u7684\u5b9e\u73b0\u7c7b\u540c\u6837\u4e5f\u5b9e\u73b0\u4e86 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"ApplicationEventPublisher"))," \u63a5\u53e3\u3002"))}u.isMDXComponent=!0}}]);