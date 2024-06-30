"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[2975],{3677:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>p});var o=r(4848),t=r(8453);const s={title:"Spring \u751f\u547d\u5468\u671f",date:new Date("2019-09-13T00:00:00.000Z")},i=void 0,a={id:"spring/spring-framework/core-source-analysis/spring-lifecycle",title:"Spring \u751f\u547d\u5468\u671f",description:"1. Spring Bean\u7684\u751f\u547d\u5468\u671f",source:"@site/docs/spring/spring-framework/core-source-analysis/spring-lifecycle.md",sourceDirName:"spring/spring-framework/core-source-analysis",slug:"/spring/spring-framework/core-source-analysis/spring-lifecycle",permalink:"/docs/spring/spring-framework/core-source-analysis/spring-lifecycle",draft:!1,unlisted:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/spring/spring-framework/core-source-analysis/spring-lifecycle.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1719738085e3,frontMatter:{title:"Spring \u751f\u547d\u5468\u671f",date:"2019-09-13T00:00:00.000Z"},sidebar:"springframework",previous:{title:"Spring\u61d2\u52a0\u8f7d\u6e90\u7801\u5206\u6790",permalink:"/docs/spring/spring-framework/core-source-analysis/spring-lazyload"},next:{title:"Spring XML\u89e3\u6790\u6e90\u7801\u5206\u6790",permalink:"/docs/spring/spring-framework/core-source-analysis/spring-xml"}},c={},p=[{value:"1. Spring Bean\u7684\u751f\u547d\u5468\u671f",id:"1-spring-bean\u7684\u751f\u547d\u5468\u671f",level:3}];function l(e){const n={code:"code",h3:"h3",pre:"pre",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h3,{id:"1-spring-bean\u7684\u751f\u547d\u5468\u671f",children:"1. Spring Bean\u7684\u751f\u547d\u5468\u671f"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-flow",children:"st=>start: \u52a0\u8f7dBeanDefination\ncircularCondition=>condition: \u83b7\u53d6\u4f9d\u8d56\u5e76\u4e14\u5224\u65ad\u4e0d\u662f\u5faa\u73af\u4f9d\u8d56\nbeforeInstantiation=>operation: \u5b9e\u4f8b\u5316\u4e4b\u524d\u8c03\u7528InstantiationAwareBeanPostProcessor#postProcessBeforeInstantiation\u65b9\u6cd5\nCandidateConstructors=>operation: \u8c03\u7528\u6784\u9020\u51fd\u6570\u81ea\u52a8\u88c5\u914dSmartInstantiationAwareBeanPostProcessor#determineCandidateConstructors\u65b9\u6cd5\nafterInstantiation=>operation: \u8c03\u7528InstantiationAwareBeanPostProcessor#postProcessAfterInstantiation\u65b9\u6cd5\npostProcessProperties=>operation: \u8c03\u7528InstantiationAwareBeanPostProcessor#postProcessProperties\u65b9\u6cd5\ninstantiateBean=>operation: \u5b9e\u4f8b\u5316\u5b8c\u6210Bean\nmergedBeanDefinitionPostProcessor=>operation: bean\u5b9a\u4e49\u5408\u5e76\u8c03\u7528MergedBeanDefinitionPostProcessor#postProcessMergedBeanDefinition\u65b9\u6cd5\ninvokeAwareMethods=>operation: \u6267\u884cBeanNameAware,BeanClassLoaderAware,BeanFactoryAware\u7684\u76f8\u5173\u65b9\u6cd5\nBeanPostProcessorBeforeInitialization=>operation: \u6267\u884cBeanPostProcessor#postProcessBeforeInitialization\u65b9\u6cd5\ninvokeInitMethods=>operation: \u6267\u884c\u521d\u59cb\u5316\u65b9\u6cd5InitializingBean#afterPropertiesSet(\u5b9e\u73b0\u4e86InitializingBean)\u6216\u8005\u4f7f\u7528\u4e86\u6ce8\u89e3PostConstruct\u6216\u8005\u5728xml\u4e2d\u5b9a\u4e49\u4e86Init\u65b9\u6cd5\nBeanPostProcessorsAfterInitialization=>operation: \u8c03\u7528\u521d\u59cb\u5316\u540e\u7684\u65b9\u6cd5BeanPostProcessor#postProcessAfterInitialization\nearlySingletonExposure=>operation: \u9965\u997f\u52a0\u8f7dBean\u7684\u5c5e\u6027\nregisterDisposableBeanIfNecessary=>operation: \u7ee7\u627f\u4e86DisposableBean\u548c\u5b9a\u4e49\u4e86destroy\u65b9\u6cd5\u6765\u6ce8\u5165\ne=>end\n\nst->circularCondition\n\ncircularCondition(yes)->beforeInstantiation->CandidateConstructors->afterInstantiation->postProcessProperties->instantiateBean->mergedBeanDefinitionPostProcessor->invokeAwareMethods->BeanPostProcessorBeforeInitialization->invokeInitMethods->BeanPostProcessorsAfterInitialization->earlySingletonExposure->registerDisposableBeanIfNecessary->e\n\ncircularCondition(no)->e\n"})})]})}function d(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>a});var o=r(6540);const t={},s=o.createContext(t);function i(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);