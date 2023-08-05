"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[7064],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(n),u=a,k=m["".concat(l,".").concat(u)]||m[u]||g[u]||i;return n?r.createElement(k,p(p({ref:t},c),{},{components:n})):r.createElement(k,p({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,p=new Array(i);p[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[m]="string"==typeof e?e:a,p[1]=o;for(var s=2;s<i;s++)p[s]=n[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4427:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>g,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const i={title:"Spring ApplicationContext\u6e90\u7801\u89e3\u6790",date:new Date("2018-11-06T00:00:00.000Z"),weight:1},p=void 0,o={unversionedId:"spring/spring-framework/core-source-analysis/Spring-ApplicationContext",id:"spring/spring-framework/core-source-analysis/Spring-ApplicationContext",title:"Spring ApplicationContext\u6e90\u7801\u89e3\u6790",description:"1. ApplicationContext\u6e90\u7801\u89e3\u6790",source:"@site/docs/spring/spring-framework/core-source-analysis/Spring-ApplicationContext.md",sourceDirName:"spring/spring-framework/core-source-analysis",slug:"/spring/spring-framework/core-source-analysis/Spring-ApplicationContext",permalink:"/docs/spring/spring-framework/core-source-analysis/Spring-ApplicationContext",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/spring/spring-framework/core-source-analysis/Spring-ApplicationContext.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1691228615,formattedLastUpdatedAt:"Aug 5, 2023",frontMatter:{title:"Spring ApplicationContext\u6e90\u7801\u89e3\u6790",date:"2018-11-06T00:00:00.000Z",weight:1},sidebar:"springframework",previous:{title:"FactoryBean\u89e3\u6790",permalink:"/docs/spring/spring-framework/core-source-analysis/FactoryBean"},next:{title:"Spring Environment\u6e90\u7801\u89e3\u6790",permalink:"/docs/spring/spring-framework/core-source-analysis/Spring-Environment"}},l={},s=[{value:"1. ApplicationContext\u6e90\u7801\u89e3\u6790",id:"1-applicationcontext\u6e90\u7801\u89e3\u6790",level:3}],c={toc:s},m="wrapper";function g(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"1-applicationcontext\u6e90\u7801\u89e3\u6790"},"1. ApplicationContext\u6e90\u7801\u89e3\u6790"),(0,a.kt)("p",null,"\u5728Spring\u6846\u67b6\u7684\u4f7f\u7528\u8fc7\u7a0b\u4e2d\u89c1\u5f97\u6700\u591a\u7684\u4e00\u4e2a\u7c7b\u5c31\u662f ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"ApplicationContext"))," \u8fd9\u4e2a\u7c7b\u8d2f\u7a7f\u4e86\u6574\u4e2aSpring\u7684\u5f00\u53d1\u3002\u4e0b\u9762\u6765\u770b\u4e00\u4e0b\u8be5\u7c7b\u7684\u4e00\u4e9b\u5b9a\u4e49\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public interface ApplicationContext extends EnvironmentCapable, ListableBeanFactory, HierarchicalBeanFactory,\n        MessageSource, ApplicationEventPublisher, ResourcePatternResolver {\n    @Nullable\n    String getId();\n\n    String getApplicationName();\n\n    String getDisplayName();\n\n    long getStartupDate();\n\n    @Nullable\n    ApplicationContext getParent();\n\n    AutowireCapableBeanFactory getAutowireCapableBeanFactory() throws IllegalStateException;\n}\n")),(0,a.kt)("p",null,"\u4ece\u5b9a\u4e49\u53ef\u4ee5\u770b\u51fa\u6765\uff0c\u7ee7\u627f\u4e86 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"EnvironmentCapable"))," , ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"ListableBeanFactory"))," , ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"HierarchicalBeanFactory"))," ,\n",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"MessageSource"))," , ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"ApplicationEventPublisher"))," , ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"ResourcePatternResolver"))," \u7ee7\u627f\u90fd\u662f\u4e00\u4e9b\u57fa\u7840\u7684\u63a5\u53e3\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"BeanDefinitionRegistry"),"  "),(0,a.kt)("p",{parentName:"li"},"\u8fd9\u4e2a\u63a5\u53e3\u4e3b\u8981\u7528\u6765\u6ce8\u518cBean\u7684\u5b9a\u4e49\u5230Spring\u5bb9\u5668\u7684\u4e0a\u4e0b\u6587\u4e2d\uff0c\u628aJava\u7c7b\u62bd\u8c61\u4e3a ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},(0,a.kt)("inlineCode",{parentName:"em"},"BeanDefinition")))," ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"SingletonBeanRegistry")," "),(0,a.kt)("p",{parentName:"li"},"Bean\u7684\u5355\u4f8b\u6a21\u5f0f\u6ce8\u518c")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"BeanFactory"),"  "),(0,a.kt)("p",{parentName:"li"},"\u4e3b\u8981\u7528\u6765\u83b7\u53d6Bean\uff0c BeanFactory\u5b9e\u73b0\u4e86\u8fd9BeanDefinitionRegistry\u548cSingletonBeanRegistry\u4e24\u4e2a\uff0c\u628aBean\u7684\u5b9a\u4e49\u548cBean\u7684\u7ba1\u7406\u7ed3\u5408\u8d77\u6765\u3002 ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Environment")," "),(0,a.kt)("p",{parentName:"li"},"\u83b7\u53d6\u73af\u5883\u53d8\u91cf\uff0c\u548c\u73af\u5883\u914d\u7f6e\u76f8\u5173\u7684")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"MessageSource")," "),(0,a.kt)("p",{parentName:"li"},"spring\u7684\u56fd\u9645\u5316\u5904\u7406")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"ApplicationEventPublisher")),(0,a.kt)("p",{parentName:"li"},"Spring\u65f6\u95f4\u53d1\u5e03\uff0c\u548c\u4e8b\u4ef6\u76f8\u5173\u7684\u63a5\u53e3 ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"ResourcePatternResolver")),(0,a.kt)("p",{parentName:"li"},"\u8d44\u6e90\u7684\u5904\u7406 "))),(0,a.kt)("p",null,"\u5bf9\u4e8e ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"ApplicationContext"))," \u7684\u5b9e\u73b0\u4e3b\u8981\u5728 ",(0,a.kt)("strong",{parentName:"p"},"Java")," \u7684\u5f00\u53d1\u9879\u76ee\u4e2d\u6709\u56db\u4e2a\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"ClassPathXmlApplicationContext"),(0,a.kt)("li",{parentName:"ul"},"AnnotationConfigApplicationContext"),(0,a.kt)("li",{parentName:"ul"},"XmlWebApplicationContext"),(0,a.kt)("li",{parentName:"ul"},"AnnotationConfigWebApplicationContext")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-mermaid"},"graph LR\n   \n    B[Application] --\x3e C[XML]\n    B[Application] --\x3e D[Annotation]\n    C --\x3eC1[XmlWebApplicationContext]\n    C --\x3eC2[ClassPathXmlApplicationContext]\n    D --\x3eD1[AnnotationConfigApplicationContext]\n    D --\x3eD2[AnnotationConfigWebApplicationContext]\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u4e0a\u9762\u7684\u56db\u4e2a\u5b9e\u73b0\u5927\u4f53\u80fd\u591f\u5206\u6210\u4e24\u5927\u7c7b\uff1a"),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"\u5bf9\u4ee5\u524d\u4f20\u7edf\u7684XML\u914d\u7f6e\u7684\u652f\u6301\u4ecexml\u8bfb\u53d6\u914d\u7f6e"),(0,a.kt)("li",{parentName:"ul"},"\u5bf9\u6ce8\u89e3\u7684\u652f\u6301\uff0c\u4e3b\u8981\u901a\u8fc7\u6ce8\u89e3\u6765\u5b9e\u73b0xml\u4e2d\u7684\u914d\u7f6e\u529f\u80fd"))),(0,a.kt)("p",null,"\u4e0b\u9762\u770b\u4e00\u4e0bApplication\u7684\u7ee7\u627f\u5173\u7cfb\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://github.com/mxsm/document/blob/master/image/Spring/Springframework/ApplicationContext.png?raw=true",alt:"\u56fe"})))}g.isMDXComponent=!0}}]);