"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[2905],{3905:(e,n,r)=>{r.d(n,{Zo:()=>l,kt:()=>d});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=t.createContext({}),p=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},l=function(e){var n=p(e.components);return t.createElement(c.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=p(r),g=a,d=m["".concat(c,".").concat(g)]||m[g]||u[g]||o;return r?t.createElement(d,s(s({ref:n},l),{},{components:r})):t.createElement(d,s({ref:n},l))}));function d(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=g;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[m]="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=r[p];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}g.displayName="MDXCreateElement"},8657:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var t=r(7462),a=(r(7294),r(3905));const o={title:"Spring BeanPostProcessor\u6267\u884c\u987a\u5e8f\u95ee\u9898",linkTitle:"Spring BeanPostProcessor\u6267\u884c\u987a\u5e8f\u95ee\u9898",date:new Date("2022-01-23T00:00:00.000Z"),weight:202201231514},s=void 0,i={unversionedId:"spring/spring-framework/core-source-analysis/spring-BeanPostProcessor-order",id:"spring/spring-framework/core-source-analysis/spring-BeanPostProcessor-order",title:"Spring BeanPostProcessor\u6267\u884c\u987a\u5e8f\u95ee\u9898",description:"Spring Framework\u7248\u672c\uff1a5.3.x",source:"@site/docs/spring/spring-framework/core-source-analysis/spring-BeanPostProcessor-order.md",sourceDirName:"spring/spring-framework/core-source-analysis",slug:"/spring/spring-framework/core-source-analysis/spring-BeanPostProcessor-order",permalink:"/docs/spring/spring-framework/core-source-analysis/spring-BeanPostProcessor-order",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/spring/spring-framework/core-source-analysis/spring-BeanPostProcessor-order.md",tags:[],version:"current",lastUpdatedBy:"SpaceOneT",lastUpdatedAt:1674220028,formattedLastUpdatedAt:"Jan 20, 2023",frontMatter:{title:"Spring BeanPostProcessor\u6267\u884c\u987a\u5e8f\u95ee\u9898",linkTitle:"Spring BeanPostProcessor\u6267\u884c\u987a\u5e8f\u95ee\u9898",date:"2022-01-23T00:00:00.000Z",weight:202201231514},sidebar:"springframework",previous:{title:"Spring BeanFactoryPostProcessor\u6267\u884c\u987a\u5e8f",permalink:"/docs/spring/spring-framework/core-source-analysis/spring-BeanFactoryPostProcessor-order"},next:{title:"EnableTransactionManagement\u6ce8\u89e3\u89e3\u6790\u6765\u770bAOP",permalink:"/docs/spring/spring-framework/core-source-analysis/spring-aop-enableTransactionManagement"}},c={},p=[{value:"1. BeanPostProcessor\u7684\u5206\u7c7b",id:"1-beanpostprocessor\u7684\u5206\u7c7b",level:3},{value:"2. \u63a5\u53e3\u7684\u6267\u884c\u987a\u5e8f",id:"2-\u63a5\u53e3\u7684\u6267\u884c\u987a\u5e8f",level:3},{value:"3. \u603b\u7ed3",id:"3-\u603b\u7ed3",level:3}],l={toc:p};function m(e){let{components:n,...r}=e;return(0,a.kt)("wrapper",(0,t.Z)({},l,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Spring Framework\u7248\u672c\uff1a5.3.x")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"BeanPostProcessor"))," \u5728Spring\u6846\u67b6\u4e2d\u4e3e\u8db3\u8f7b\u91cd\uff0c\u8fd8\u6709\u5f88\u591a\u7ee7\u627f\u7684\u7c7b\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u4f5c\u7528\uff1a\u7ba1\u7406Bean\u7684\u751f\u547d\u5468\u671f\uff1aBean\u5b9e\u4f8b\u5316---\x3eBean\u521d\u59cb\u5316---\x3eBean\u4f7f\u7528\u4e2d---\x3eBean\u9500\u6bc1")),(0,a.kt)("p",null,"\u5728Spring \u5bb9\u5668\u521d\u59cb\u5316\u7684\u65f6\u5019\u5c31\u4f1a\u5b58\u5728\u8fd9\u4e9b\u7c7b\u6267\u884c\u7684\u4e00\u4e2a\u5148\u540e\u7684\u95ee\u9898\uff0c\u4eca\u5929\u6211\u4eec\u5c31\u628a\u8fd9\u4e9b\u7c7b\u7684\u6267\u884c\u5148\u540e\u987a\u5e8f\u8fdb\u884c\u68b3\u7406\u3002"),(0,a.kt)("h3",{id:"1-beanpostprocessor\u7684\u5206\u7c7b"},"1. BeanPostProcessor\u7684\u5206\u7c7b"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"BeanPostProcessor"))," \u4f5c\u4e3a\u9876\u5c42\u63a5\u53e3\u4f1a\u6709\u5f88\u591a\u7684\u7ee7\u627f\u63a5\u53e3\u548c\u5b9e\u73b0\u7c7b\uff0c\u4e0b\u56fe\u5c31\u662f\u5206\u7c7b\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/spring/BeanPostProcessor%E5%88%86%E9%97%A8%E5%88%AB%E7%B1%BB.png",alt:"BeanPostProcessor\u5206\u95e8\u522b\u7c7b"})),(0,a.kt)("p",null,"\u5982\u4e0a\u56fe\u6240\u793a\u5305\u62ec ",(0,a.kt)("strong",{parentName:"p"},"BeanPostProcessor")," \u5728\u5185\uff0c\u4e00\u5171\u6709\u4e94\u4e2a\u63a5\u53e3\u7c7b\u3002\u5206\u6210\u4e86\u4e09\u4e2a\u529f\u80fd\u6a21\u5757\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Bean\u5b9e\u4f8b\u5316\u8fd9\u8981\u7531InstantiationAwareBeanPostProcessor\u3001SmartInstantiationAwareBeanPostProcessor\u8d1f\u8d23\u3002"),(0,a.kt)("li",{parentName:"ul"},"Bean\u521d\u59cb\u5316\u7531BeanPostProcessor\u3001MergedBeanDefinitionPostProcessor\u4e24\u4e2a\u63a5\u53e3\u8d1f\u8d23"),(0,a.kt)("li",{parentName:"ul"},"Bean\u9500\u6bc1\u7531DestructionAwareBeanPostProcessor\u63a5\u53e3\u8d1f\u8d23")),(0,a.kt)("p",null,"\u4ece\u5206\u7c7b\u53ef\u4ee5\u770b\u51fa\u6765\u8fd9\u4e2a\u4e94\u4e2a\u63a5\u53e3\u5206\u522b\u5bf9\u5e94Bean\u7684\u4e09\u4e2a\u9636\u6bb5\uff1a\u5b9e\u4f8b\u5316\u3001\u521d\u59cb\u5316\u3001\u4ee5\u53ca\u9500\u6bc1\u3002\u90a3\u4e48\u5404\u4e2a\u9636\u6bb5\u91cc\u9762\u7684\u6267\u884c\u987a\u5e8f\u662f\u600e\u4e48\u6837\u7684\u6211\u4eec\u63a5\u7740\u5f80\u4e0b\u5206\u6790"),(0,a.kt)("h3",{id:"2-\u63a5\u53e3\u7684\u6267\u884c\u987a\u5e8f"},"2. \u63a5\u53e3\u7684\u6267\u884c\u987a\u5e8f"),(0,a.kt)("p",null,"BeanPostProcessor\u4e3b\u8981\u8d1f\u8d23Bean\u7684\u751f\u547d\u5468\u671f\uff0c\u90a3\u4e48\u6211\u4eec\u4ece\u83b7\u53d6Bean\u7684\u63a5\u53e3\u5165\u624b\u770b\u83b7\u53d6\u5230Bean\u7684\u8fc7\u7a0b\u4e2d\u9700\u8981\u6267\u884c\u90a3\u4e9b\u63a5\u53e3\u3002\u8ddf\u8e2a\u4ee3\u7801\u6700\u7ec8\u8ddf\u8e2a\u5230\u4e86 AbstractBeanFactory#doGetBean\u65b9\u6cd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"//AbstractBeanFactory#doGetBean\nif (mbd.isSingleton()) {\n    sharedInstance = getSingleton(beanName, () -> {\n        try {\n            return createBean(beanName, mbd, args);\n        }\n        catch (BeansException ex) {\n            // Explicitly remove instance from singleton cache: It might have been put there\n            // eagerly by the creation process, to allow for circular reference resolution.\n            // Also remove any beans that received a temporary reference to the bean.\n            destroySingleton(beanName);\n            throw ex;\n        }\n    });\n    beanInstance = getObjectForBeanInstance(sharedInstance, name, beanName, mbd);\n}\n")),(0,a.kt)("p",null,"\u5728\u8fd9\u4e2a\u5f53\u4e2d\u6709\u4e00\u4e2a ",(0,a.kt)("strong",{parentName:"p"},"createBean")," \u65b9\u6cd5\u3002\u4ece\u540d\u79f0\u53ef\u4ee5\u77e5\u9053\u662f\u7528\u6765\u521b\u5efaBean\u7684(\u5b9e\u4f8b\u5316)\u3002\u5728\u8fd9\u4e2a\u65b9\u6cd5\u91cc\u9762\u4e3b\u8981\u6709\u4e09\u6bb5\u91cd\u8981\u4ee3\u7801\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'protected Object doCreateBean(String beanName, RootBeanDefinition mbd, @Nullable Object[] args)\n        throws BeanCreationException {\n\n    //\u7701\u7565\u90e8\u5206\u4ee3\u7801\n\n    // Allow post-processors to modify the merged bean definition.\n    synchronized (mbd.postProcessingLock) {\n        if (!mbd.postProcessed) {\n            try {\n                applyMergedBeanDefinitionPostProcessors(mbd, beanType, beanName);\n            }\n            catch (Throwable ex) {\n                throw new BeanCreationException(mbd.getResourceDescription(), beanName,\n                        "Post-processing of merged bean definition failed", ex);\n            }\n            mbd.postProcessed = true;\n        }\n    }\n    \n\n    // Initialize the bean instance.\n    Object exposedObject = bean;\n    try {\n        populateBean(beanName, mbd, instanceWrapper);\n        exposedObject = initializeBean(beanName, exposedObject, mbd);\n    }\n    catch (Throwable ex) {\n        if (ex instanceof BeanCreationException && beanName.equals(((BeanCreationException) ex).getBeanName())) {\n            throw (BeanCreationException) ex;\n        }\n        else {\n            throw new BeanCreationException(\n                    mbd.getResourceDescription(), beanName, "Initialization of bean failed", ex);\n        }\n    }\n\n    // Register bean as disposable.\n    try {\n        registerDisposableBeanIfNecessary(beanName, bean, mbd);\n    }\n    catch (BeanDefinitionValidationException ex) {\n        throw new BeanCreationException(\n                mbd.getResourceDescription(), beanName, "Invalid destruction signature", ex);\n    }\n\n    return exposedObject;\n}\n')),(0,a.kt)("p",null,"\u8fd9\u6bb5\u4ee3\u7801\u6db5\u76d6\u4e86\u4e0a\u9762\u4e94\u4e2a\u63a5\u53e3\u7684\u56db\u4e2a\u5206\u522b\u662f\uff1aInstantiationAwareBeanPostProcessor\u3001SmartInstantiationAwareBeanPostProcessor\u3001BeanPostProcessor\u3001MergedBeanDefinitionPostProcessor\u3002\u552f\u4e00\u7684Bean\u7684\u9500\u6bc1\uff0cBean\u7684\u9500\u6bc1\u662f\u968f\u7740Spring\u5bb9\u5668\u9500\u6bc1\u800c\u9500\u6bc1\u7684\u3002\u6574\u4e2a\u6267\u884c\u7684\u6d41\u7a0b\u548c\u6b65\u9aa4\u5982\u4e0b\u56fe\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/spring/BeanPostProcessor%E6%89%A7%E8%A1%8C%E9%A1%BA%E5%BA%8F.png",alt:"BeanPostProcessor\u6267\u884c\u987a\u5e8f"})),(0,a.kt)("p",null,"\u4ece\u4e0a\u56fe\u7684\u6267\u884c\u987a\u5e8f\u53ef\u4ee5\u770b\u51fa\u6765\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u63a5\u53e3\u4e4b\u95f4\u7684\u6267\u884c\u987a\u5e8f\u4e0d\u662f\u4e25\u683c\u6309\u7167: ",(0,a.kt)("strong",{parentName:"li"},"\u5b9e\u4f8b\u5316->\u521d\u59cb\u5316->\u9500\u6bc1")," \u8fd9\u6837\u7684\u4e25\u683c\u987a\u5e8f\u6765\u8fdb\u884c\u3002\u63a5\u53e3\u65b9\u6cd5\u4e4b\u95f4\u7684\u987a\u5e8f\u4f1a\u6709\u7a7f\u63d2\u7684\u60c5\u51b5\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"InstantiationAwareBeanPostProcessor#postProcessBeforeInstantiation")," \u65b9\u6cd5\u6267\u884c\u5982\u679c\u8fd4\u56de\u4e86\u5bf9\u5e94\u7684Bean\u7684\u5b9e\u4f8b\uff0c\u540e\u7eed\u7684\u63a5\u53e3\u90fd\u4e0d\u4f1a\u6267\u884c\u4e86\u3002 ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"\u8fd9\u91cc\u6211\u4eec\u53ef\u4ee5\u52a0\u5165\u81ea\u5b9a\u4e49\u7684\u7c7b\u3002\u5178\u578b\u7684\u4f8b\u5b50\u5c31\u662f\u52a8\u6001\u4ee3\u7406\u7684\u5b9e\u73b0\uff0c\u53ef\u4ee5\u7ee7\u627f\u5f53\u524d\u63a5\u53e3\u5e76\u4e14\u5728\u6539\u65b9\u6cd5\u4e2d\u5b9e\u73b0\u52a8\u6001\u4ee3\u7406\u3002\u8fd9\u6837\u5728Spring \u5bb9\u5668\u4e2d\u7684\u5b9e\u4f8b\u5c31\u662f\u4e00\u4e2a\u52a8\u6001\u4ee3\u7406\u5b9e\u4f8b\u3002"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"DestructionAwareBeanPostProcessor")," \u63a5\u53e3\u4e00\u822c\u60c5\u51b5\u4e0b\u662f\u4e0d\u4f1a\u6267\u884c\uff0c\u53ea\u6709\u5f53Spring\u5bb9\u5668\u9500\u6bc1\u5c31\u4f1a\u89e6\u53d1\u5bb9\u5668\u91cc\u9762\u7c7b\u7684\u9500\u6bc1\u673a\u5236\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u540c\u4e00\u79cd\u7c7b\u578b\u63a5\u53e3\u5982\u679c\u6709\u7ee7\u627f PriorityOrdered \u548cOrdered\u8fdb\u884c\u6392\u5e8f\u3002")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Tips: \u5bf9\u4e8e\u57fa\u4e8eBeanPostProcessor\u81ea\u5b9a\u4e49\u5f00\u53d1\u6765\u8bf4\uff0c\u4e3b\u8981\u7528\u4e8e\u81ea\u5b9a\u4e49\u65b9\u6cd5\u6216\u8005\u5c5e\u6027\u7c7b\u4e0a\u9762\u7684\u6ce8\u89e3\u3002\u8fd9\u91cc\u4e3e\u4e24\u4e2aSpring\u7684\u4f8b\u5b50\uff1a",(0,a.kt)("strong",{parentName:"p"},"AutowiredAnnotationBeanPostProcessor"),"  \u5904\u7406@Autowired\uff0c @Value\u6ce8\u89e3\uff0c ",(0,a.kt)("strong",{parentName:"p"},"AsyncAnnotationBeanPostProcessor"),"  \u5904\u7406 @Async\u6ce8\u89e3\u3002\u8fd9\u4e9b\u6ce8\u89e3\u90fd\u662f\u5728\u5c5e\u6027\u4e0a\u6216\u8005\u65b9\u6cd5\u4e0a\u9762\u3002")),(0,a.kt)("h3",{id:"3-\u603b\u7ed3"},"3. \u603b\u7ed3"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"BeanPostProcessor")," \u63a5\u53e3\u4e3b\u8981\u662f\u542f\u52a8\u7684\u65f6\u5019\u6dfb\u52a0\u5230Spring\u5bb9\u5668\u4e2d\u63d0\u4f9b\u7ed9\u540e\u7eed\u7684\u4f7f\u7528"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"BeanPostProcessor")," \u63a5\u53e3\u6267\u884c\u4e3b\u8981\u53d1\u751f\u5728\u83b7\u53d6Bean\u7684\u6d41\u7a0b\u4e2d(Bean\u7684\u751f\u547d\u5468\u671f)"),(0,a.kt)("li",{parentName:"ul"},"\u81ea\u5b9a\u4e49\u5f00\u53d1\u53ef\u4ee5\u53c2\u7167Spring\u5df2\u6709\u7684\u5b9e\u73b0\uff0c\u80fd\u591f\u66f4\u52a0\u660e\u4e86\u7684\u77e5\u9053\u5982\u4f55\u8fdb\u884c\u8fdb\u4e00\u6b65\u62d3\u5c55\u4f7f\u7528")))}m.isMDXComponent=!0}}]);