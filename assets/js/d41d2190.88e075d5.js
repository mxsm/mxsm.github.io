"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[3613],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>k});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},m=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},l="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},P=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),l=c(r),P=o,k=l["".concat(p,".").concat(P)]||l[P]||g[P]||s;return r?n.createElement(k,a(a({ref:t},m),{},{components:r})):n.createElement(k,a({ref:t},m))}));function k(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=P;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[l]="string"==typeof e?e:o,a[1]=i;for(var c=2;c<s;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}P.displayName="MDXCreateElement"},3082:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>g,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const s={title:"Spring BeanFactoryPostProcessor\u6267\u884c\u987a\u5e8f",linkTitle:"Spring BeanFactoryPostProcessor\u6267\u884c\u987a\u5e8f",date:new Date("2022-02-01T00:00:00.000Z"),weight:202202011126},a=void 0,i={unversionedId:"spring/spring-framework/core-source-analysis/spring-BeanFactoryPostProcessor-order",id:"spring/spring-framework/core-source-analysis/spring-BeanFactoryPostProcessor-order",title:"Spring BeanFactoryPostProcessor\u6267\u884c\u987a\u5e8f",description:"1. \u524d\u8a00",source:"@site/docs/spring/spring-framework/core-source-analysis/spring-BeanFactoryPostProcessor-order.md",sourceDirName:"spring/spring-framework/core-source-analysis",slug:"/spring/spring-framework/core-source-analysis/spring-BeanFactoryPostProcessor-order",permalink:"/docs/spring/spring-framework/core-source-analysis/spring-BeanFactoryPostProcessor-order",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/spring/spring-framework/core-source-analysis/spring-BeanFactoryPostProcessor-order.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1676193845,formattedLastUpdatedAt:"Feb 12, 2023",frontMatter:{title:"Spring BeanFactoryPostProcessor\u6267\u884c\u987a\u5e8f",linkTitle:"Spring BeanFactoryPostProcessor\u6267\u884c\u987a\u5e8f",date:"2022-02-01T00:00:00.000Z",weight:202202011126},sidebar:"springframework",previous:{title:"doGetBean\u6e90\u7801\u8be6\u89e3",permalink:"/docs/spring/spring-framework/core-source-analysis/doGetBean"},next:{title:"Spring BeanPostProcessor\u6267\u884c\u987a\u5e8f\u95ee\u9898",permalink:"/docs/spring/spring-framework/core-source-analysis/spring-BeanPostProcessor-order"}},p={},c=[{value:"1. \u524d\u8a00",id:"1-\u524d\u8a00",level:3},{value:"2.\u63a5\u53e3\u7684\u6267\u884c\u987a\u5e8f",id:"2\u63a5\u53e3\u7684\u6267\u884c\u987a\u5e8f",level:3},{value:"2.1 \u63a5\u53e3\u5b9e\u73b0\u7c7b\u5728\u54ea\u91cc\u6ce8\u5165\uff1f",id:"21-\u63a5\u53e3\u5b9e\u73b0\u7c7b\u5728\u54ea\u91cc\u6ce8\u5165",level:4},{value:"2.2 \u63a5\u53e3\u7684\u6267\u884c\u987a\u5e8f",id:"22-\u63a5\u53e3\u7684\u6267\u884c\u987a\u5e8f",level:4},{value:"3. \u603b\u7ed3",id:"3-\u603b\u7ed3",level:3}],m={toc:c},l="wrapper";function g(e){let{components:t,...r}=e;return(0,o.kt)(l,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"1-\u524d\u8a00"},"1. \u524d\u8a00"),(0,o.kt)("p",null,"\u5728\u4e4b\u524d\u7684\u6587\u7ae0\u300a",(0,o.kt)("a",{parentName:"p",href:"https://blog.ljbmxsm.com/spring-framework/core-source-analysis/spring-beanpostprocessor-order/"},"Spring BeanPostProcessor\u6267\u884c\u987a\u5e8f\u95ee\u9898"),"\u300b\u4ecb\u7ecd\u8fc7 ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"BeanPostProcessor"))," \uff0c  \u4f7f\u7528Spring\u6846\u67b6\u7684\u4eba\u53ef\u80fd\u4f1a\u6ce8\u610f\u5230\u8fd9\u6837\u4e00\u4e2a\u7c7b ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"BeanFactoryPostProcessor"))," \u548c ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"BeanPostProcessor")),"  \u540d\u79f0\u5f88\u63a5\u8fd1\u3002\u4e0b\u9762\u6765\u770b\u4e00\u4e0b",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"BeanFactoryPostProcessor"))," \u7684\u4f5c\u7528\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"BeanFactoryPostProcessor\uff1a")," Spring Bean Factory\u7684\u524d\u7f6e\u5904\u7406\u5668\uff0c\u5141\u8bb8\u81ea\u5b9a\u4e49\u4fee\u6539\u5e94\u7528\u4e0a\u4e0b\u6587\u7684Bean\u7684\u5b9a\u4e49\u3002\u540c\u65f6\u53ef\u4ee5\u8c03\u6574\u4e0a\u4e0b\u6587\u7684\u5e95\u5c42bean\u5de5\u5382\u7684bean\u5c5e\u6027\u503c\u3002\u5e38\u7528\u7684\u62d3\u5c55\u63a5\u53e3\u5982\u4e0b\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/spring/%E5%B8%B8%E7%94%A8%E7%9A%84%E6%8B%93%E5%B1%95%E6%8E%A5%E5%8F%A3%E7%B1%BB.png",alt:"\u5e38\u7528\u7684\u62d3\u5c55\u63a5\u53e3\u7c7b"})),(0,o.kt)("p",null,"\u7c7b\u4e4b\u95f4\u7684\u7ee7\u627f\u5173\u7cfb\u5982\u4e0b\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/spring/image-20220201120007663.png",alt:"image-20220201120007663"})),(0,o.kt)("p",null,"\u4e0a\u9762\u5b58\u5728\u4e24\u4e2a\u91cd\u8981\u7684\u63a5\u53e3\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"BeanFactoryPostProcessor")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"BeanDefinitionRegistryPostProcessor"))),(0,o.kt)("p",null,"\u63a5\u4e0b\u6765\u7740\u91cd\u5206\u6790\u8fd9\u4e24\u4e2a\u63a5\u53e3\u7684\u4f5c\u7528"),(0,o.kt)("h3",{id:"2\u63a5\u53e3\u7684\u6267\u884c\u987a\u5e8f"},"2.\u63a5\u53e3\u7684\u6267\u884c\u987a\u5e8f"),(0,o.kt)("p",null,"\u63a5\u4e0b\u6765\u4ece ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"BeanFactoryPostProcessor"))," \u548c ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"BeanDefinitionRegistryPostProcessor"))," \u5b9e\u73b0\u7c7b\u6ce8\u5165\u548c\u6267\u884c\u987a\u5e8f\u6765\u770b\u3002"),(0,o.kt)("h4",{id:"21-\u63a5\u53e3\u5b9e\u73b0\u7c7b\u5728\u54ea\u91cc\u6ce8\u5165"},"2.1 \u63a5\u53e3\u5b9e\u73b0\u7c7b\u5728\u54ea\u91cc\u6ce8\u5165\uff1f"),(0,o.kt)("p",null,"\u7528\u73b0\u5728\u6700\u5e38\u7528\u7684\u6ce8\u89e3\u4e0a\u4e0b\u6587\u6765\u89e3\u6790\uff0c\u901a\u8fc7 ",(0,o.kt)("strong",{parentName:"p"},"AnnotationConfigApplicationContext")," \u6e90\u7801\u53d1\u73b0\uff0c\u5c5e\u6027 ",(0,o.kt)("strong",{parentName:"p"},"AnnotatedBeanDefinitionReader")," \u5b9e\u4f8b\u5316\u6709\u8fd9\u6837\u4e00\u6bb5\u4ee3\u7801\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/spring/image-20220201123122834.png",alt:"image-20220201123122834"})),(0,o.kt)("p",null,"\u8ddf\u8fdb\u4ee3\u7801 ",(0,o.kt)("strong",{parentName:"p"},"AnnotationConfigUtils#registerAnnotationConfigProcessors")," \u53d1\u73b0"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/spring/image-20220201165201280.png",alt:"image-20220201165201280"})),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5c06 ",(0,o.kt)("strong",{parentName:"li"},"ConfigurationClassPostProcessor")," \u7c7b\u7684\u5b9a\u4e49\u6ce8\u518c\u5230\u4e86Spring\u5bb9\u5668\u4e2d\u3002")),(0,o.kt)("p",null,"\u5230\u8fd9\u91cc\u5c31\u662f ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"BeanFactoryPostProcessor"))," \u548c ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"BeanDefinitionRegistryPostProcessor")),"  \u7684\u63a5\u53e3\u7684\u5b9e\u73b0\u7c7b\u6ce8\u518c\u5230Spring\u5bb9\u5668"),(0,o.kt)("h4",{id:"22-\u63a5\u53e3\u7684\u6267\u884c\u987a\u5e8f"},"2.2 \u63a5\u53e3\u7684\u6267\u884c\u987a\u5e8f"),(0,o.kt)("p",null,"\u901a\u8fc7 ",(0,o.kt)("strong",{parentName:"p"},"AnnotationConfigApplicationContext")," \u6e90\u7801\u53d1\u73b0\u5728 refresh \u65b9\u6cd5\u4e2d\u6709\u6267\u884c ",(0,o.kt)("strong",{parentName:"p"},"BeanFactoryPostProcessor")," \u3002\u6700\u7ec8\u8c03\u7528\u7684\u662f\u8c03\u7528\u4e86\u7236\u7c7b\u7684 ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"AbstractApplicationContext#refresh"))," \u65b9\u6cd5\uff0c\u5728\u65b9\u6cd5\u4e2d\u6709\u8fd9\u6837\u4e00\u6bb5\u4ee3\u7801\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/spring/image-20220201170035512.png",alt:"image-20220201170035512"})),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u8fd9\u91cc\u5c31\u662f\u6267\u884c ",(0,o.kt)("strong",{parentName:"li"},"BeanFactoryPostProcessor"))),(0,o.kt)("p",null,"\u6211\u4eec\u770b\u4e00\u4e0b\u91cc\u9762 ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"BeanFactoryPostProcessor"))," \u548c ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"BeanDefinitionRegistryPostProcessor"))," \u63a5\u53e3\u7684\u6267\u884c\u987a\u5e8f\uff0c\u5206\u6790\u6e90\u7801\u53ef\u4ee5\u77e5\u9053\u662f\u901a\u8fc7 ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"PostProcessorRegistrationDelegate.invokeBeanFactoryPostProcessors"))," \u6765\u6267\u884c\uff0c\u5206\u4e3a\u4ee5\u4e0b\u51e0\u4e2a\u6267\u884c\u90e8\u5206\uff1a"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u6267\u884cBeanDefinitionRegistryPostProcessor\uff1a")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u4eceSpring\u5bb9\u5668\u4e2d\u83b7\u53d6",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"BeanFactoryPostProcessor"))," \u548c ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"BeanDefinitionRegistryPostProcessor"))," \u7684\u5b9e\u73b0\u7c7b"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/spring/image-20220201170822680.png",alt:"image-20220201170822680"})),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"Tips: \u5982\u679c\u662fBeanDefinitionRegistryPostProcessor\u7684\u5b9e\u73b0\u7c7b\u540c\u65f6\u6267\u884cBeanDefinitionRegistryPostProcessor#postProcessBeanDefinitionRegistry\u65b9\u6cd5"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u9996\u5148\u6267\u884c ",(0,o.kt)("strong",{parentName:"p"},"BeanDefinitionRegistryPostProcessors#postProcessBeanDefinitionRegistry")," \u5b9e\u73b0\u4e86 ",(0,o.kt)("strong",{parentName:"p"},"PriorityOrdered")," \u63a5\u53e3\u7684"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/spring/image-20220201173137323.png",alt:"image-20220201173137323"}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u7136\u540e\u6267\u884c ",(0,o.kt)("strong",{parentName:"p"},"BeanDefinitionRegistryPostProcessors#postProcessBeanDefinitionRegistry")," \u5b9e\u73b0\u4e86 ",(0,o.kt)("strong",{parentName:"p"},"Ordered")," \u63a5\u53e3\u7684"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/spring/image-20220201173224200.png",alt:"image-20220201173224200"}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u5728\u6267\u884c\u5269\u4e0b\u7684 ",(0,o.kt)("strong",{parentName:"p"},"BeanDefinitionRegistryPostProcessors#postProcessBeanDefinitionRegistry")," "),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/spring/image-20220201173343336.png",alt:"image-20220201173343336"}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u63a5\u7740\u6267\u884c ",(0,o.kt)("strong",{parentName:"p"},"BeanDefinitionRegistryPostProcessor#postProcessBeanFactory")," \u65b9\u6cd5\u548c ",(0,o.kt)("strong",{parentName:"p"},"BeanFactoryPostProcessor#postProcessBeanFactory")," \u65b9\u6cd5"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/spring/image-20220201173753538.png",alt:"image-20220201173753538"})))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u6267\u884cBeanFactoryPostProcessor\u6267\u884c\uff1a")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u6267\u884c ",(0,o.kt)("strong",{parentName:"p"},"BeanFactoryPostProcessor#postProcessBeanFactory")," \u5b9e\u73b0\u4e86 ",(0,o.kt)("strong",{parentName:"p"},"PriorityOrdered")," \u63a5\u53e3\u7684"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-java"},"sortPostProcessors(priorityOrderedPostProcessors, beanFactory);\ninvokeBeanFactoryPostProcessors(priorityOrderedPostProcessors, beanFactory);\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u6267\u884c ",(0,o.kt)("strong",{parentName:"p"},"BeanFactoryPostProcessor#postProcessBeanFactory")," \u5b9e\u73b0\u4e86 ",(0,o.kt)("strong",{parentName:"p"},"Ordered")," \u63a5\u53e3\u7684"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-java"},"List<BeanFactoryPostProcessor> orderedPostProcessors = new ArrayList<>(orderedPostProcessorNames.size());\nfor (String postProcessorName : orderedPostProcessorNames) {\n    orderedPostProcessors.add(beanFactory.getBean(postProcessorName, BeanFactoryPostProcessor.class));\n}\nsortPostProcessors(orderedPostProcessors, beanFactory);\ninvokeBeanFactoryPostProcessors(orderedPostProcessors, beanFactory);\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u6267\u884c\u5269\u4e0b\u7684 ",(0,o.kt)("strong",{parentName:"p"},"BeanFactoryPostProcessor#postProcessBeanFactory")," "),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-java"},"List<BeanFactoryPostProcessor> nonOrderedPostProcessors = new ArrayList<>(nonOrderedPostProcessorNames.size());\nfor (String postProcessorName : nonOrderedPostProcessorNames) {\n    nonOrderedPostProcessors.add(beanFactory.getBean(postProcessorName, BeanFactoryPostProcessor.class));\n}\ninvokeBeanFactoryPostProcessors(nonOrderedPostProcessors, beanFactory);\n")))),(0,o.kt)("p",null,"\u901a\u8fc7\u4e0a\u9762\u7684\u4ee3\u7801\u5206\u6790\u603b\u7ed3\u4e00\u4e0b ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"BeanFactoryPostProcessor"))," \u548c ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"BeanDefinitionRegistryPostProcessor")),"  \u6267\u884c\u987a\u5e8f\uff0c\u5982\u4e0b\u56fe\u6240\u793a\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/spring/BeanFactoryPostProcessor%E6%89%A7%E8%A1%8C%E6%B5%81%E7%A8%8B%E5%9B%BE.png",alt:"BeanFactoryPostProcessor\u6267\u884c\u6d41\u7a0b\u56fe"})),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u9996\u5148\u5e94\u8be5\u6267\u884c ",(0,o.kt)("strong",{parentName:"li"},"BeanDefinitionRegistryPostProcessor#postProcessBeanDefinitionRegistry")," \u65b9\u6cd5"),(0,o.kt)("li",{parentName:"ol"},"\u7136\u540e\u6267\u884c ",(0,o.kt)("strong",{parentName:"li"},"BeanDefinitionRegistryPostProcessor#postProcessBeanFactory")," \u65b9\u6cd5"),(0,o.kt)("li",{parentName:"ol"},"\u6700\u540e\u6267\u884c ",(0,o.kt)("strong",{parentName:"li"},"BeanFactoryPostProcessor#postProcessBeanFactory")," \u65b9\u6cd5")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Tips: BeanDefinitionRegistryPostProcessor\u548cBeanFactoryPostProcessor\u7684\u6267\u884c\u8fd8\u548cPriorityOrdered\u4ee5\u53caOrdered\u6709\u5173\u3002")),(0,o.kt)("h3",{id:"3-\u603b\u7ed3"},"3. \u603b\u7ed3"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"BeanFactoryPostProcessor"))," \u548c ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"BeanDefinitionRegistryPostProcessor"))," \u53ef\u901a\u8fc7Spring\u539f\u751f\u7684\u5b9e\u73b0\u6765\u505a\u4e00\u4e9b\u7528\u6237\u81ea\u5b9a\u4e49\u7684\u62d3\u5c55\uff0c\u4f8b\u5982 ",(0,o.kt)("strong",{parentName:"p"},"ConfigurationClassPostProcessor")," \u53ef\u4ee5\u53d7\u5230\u542f\u53d1\u6211\u4eec\u53ef\u4ee5\u81ea\u5b9a\u4e49\u4e00\u4e9b\u914d\u7f6e\u5728\u7c7b\u4e0a\u9762\u7684\u6ce8\u89e3\uff0c\u4f8b\u5982\u81ea\u5b9a\u4e49\u548c@Component\u7c7b\u4f3c\u7684\u6ce8\u89e3\u3002"))}g.isMDXComponent=!0}}]);