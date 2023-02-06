"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[7865],{3905:(e,n,r)=>{r.d(n,{Zo:()=>c,kt:()=>d});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function p(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=t.createContext({}),l=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},c=function(e){var n=l(e.components);return t.createElement(s.Provider,{value:n},e.children)},m="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=l(r),u=o,d=m["".concat(s,".").concat(u)]||m[u]||g[u]||a;return r?t.createElement(d,i(i({ref:n},c),{},{components:r})):t.createElement(d,i({ref:n},c))}));function d(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p[m]="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=r[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}u.displayName="MDXCreateElement"},810:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var t=r(7462),o=(r(7294),r(3905));const a={title:"Spring Environment\u6e90\u7801\u89e3\u6790",date:new Date("2019-01-23T00:00:00.000Z")},i=void 0,p={unversionedId:"spring/spring-framework/core-source-analysis/Spring-Environment",id:"spring/spring-framework/core-source-analysis/Spring-Environment",title:"Spring Environment\u6e90\u7801\u89e3\u6790",description:"Environment\u5173\u7cfb\u56fe",source:"@site/docs/spring/spring-framework/core-source-analysis/Spring-Environment.md",sourceDirName:"spring/spring-framework/core-source-analysis",slug:"/spring/spring-framework/core-source-analysis/Spring-Environment",permalink:"/docs/spring/spring-framework/core-source-analysis/Spring-Environment",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/spring/spring-framework/core-source-analysis/Spring-Environment.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1675697367,formattedLastUpdatedAt:"Feb 6, 2023",frontMatter:{title:"Spring Environment\u6e90\u7801\u89e3\u6790",date:"2019-01-23T00:00:00.000Z"},sidebar:"springframework",previous:{title:"Spring ApplicationContext\u6e90\u7801\u89e3\u6790",permalink:"/docs/spring/spring-framework/core-source-analysis/Spring-ApplicationContext"},next:{title:"Spring Event\u6e90\u7801\u89e3\u6790",permalink:"/docs/spring/spring-framework/core-source-analysis/Spring-Event"}},s={},l=[{value:"Environment\u5173\u7cfb\u56fe",id:"environment\u5173\u7cfb\u56fe",level:3},{value:"\u5206\u6790\u4e00\u4e0b\u5e38\u7528\u7684StandardEnvironment",id:"\u5206\u6790\u4e00\u4e0b\u5e38\u7528\u7684standardenvironment",level:3}],c={toc:l},m="wrapper";function g(e){let{components:n,...r}=e;return(0,o.kt)(m,(0,t.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"environment\u5173\u7cfb\u56fe"},"Environment\u5173\u7cfb\u56fe"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://github.com/mxsm/document/blob/master/image/Spring/Springframework/Environment.png?raw=true",alt:"\u56fe"})),(0,o.kt)("p",null,"\u4ece\u4e0a\u56fe\u53ef\u4ee5\u770b\u51fa\u6765 ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Environment"))," \u4e3b\u8981\u6709\u4e09\u4e2a\u5b9e\u73b0\u7c7b\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"MockEnvironment")," "),(0,o.kt)("p",{parentName:"li"},"\u7528\u4e8emock\u7684")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"StandardEnvironment")," "),(0,o.kt)("p",{parentName:"li"},"\u6807\u51c6\u7684\u73af\u5883")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"StandardServletEnvironment")," "),(0,o.kt)("p",{parentName:"li"},"\u7528\u4e8eweb\u7684\u73af\u5883"))),(0,o.kt)("h3",{id:"\u5206\u6790\u4e00\u4e0b\u5e38\u7528\u7684standardenvironment"},"\u5206\u6790\u4e00\u4e0b\u5e38\u7528\u7684StandardEnvironment"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"public interface Environment extends PropertyResolver {\n\n    //\u83b7\u53d6\u914d\u7f6e\u6587\u4ef6\n    String[] getActiveProfiles();\n\n    //\u83b7\u53d6\u9ed8\u8ba4\u7684\u914d\u7f6e\u6587\u4ef6\n    String[] getDefaultProfiles();\n    \n    //\u662f\u5426\u63a5\u53d7\u914d\u7f6e\u6587\u4ef6\n    boolean acceptsProfiles(Profiles profiles);\n\n}\n\n//\u770b\u4e00\u4e0b\u63a5\u53e3 PropertyResolver\n//PropertyResolver \u4e3b\u8981\u662f\u83b7\u53d6\u5bf9\u5e94\u7684Properties\u503c\uff0cString\u6216\u8005\u8fdb\u884c\u6570\u636e\u7c7b\u578b\u8f6c\u6362\u540e\u7684\u503c\n//\u540c\u65f6\u4f1a\u5904\u7406\u5360\u4f4d\u7b26\u7684\u6570\u636e\npublic interface PropertyResolver  {\n\n    \n    boolean containsProperty(String key);\n\n\n    @Nullable\n    String getProperty(String key);\n\n    String getProperty(String key, String defaultValue);\n\n\n    @Nullable\n    <T> T getProperty(String key, Class<T> targetType);\n\n\n    <T> T getProperty(String key, Class<T> targetType, T defaultValue);\n\n\n    String getRequiredProperty(String key) throws IllegalStateException;\n\n\n    <T> T getRequiredProperty(String key, Class<T> targetType) throws IllegalStateException;\n\n\n    String resolvePlaceholders(String text);\n\n\n    String resolveRequiredPlaceholders(String text) throws IllegalArgumentException;\n\n}\n")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://github.com/mxsm/document/blob/master/image/Spring/Springframework/PropertyResolver.png?raw=true",alt:"\u56fe"})),(0,o.kt)("p",null,"\u770b\u4e00\u4e0bStandardEnvironment\u7684\u4ee3\u7801"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'public class StandardEnvironment extends AbstractEnvironment {\n\n    //\u7cfb\u7edf\u7684property\u540d\u79f0\n    public static final String SYSTEM_ENVIRONMENT_PROPERTY_SOURCE_NAME = "systemEnvironment";\n\n    //JVM\u7684property\u540d\u79f0\n    public static final String SYSTEM_PROPERTIES_PROPERTY_SOURCE_NAME = "systemProperties";\n\n\n    //\u628a\u7cfb\u7edf\u7684Properties\u548cJVM\u7684Properties\u5b58\u5165\n    //\u6b64\u65b9\u6cd5\u5728\u7236\u7c7b\u7684\u6784\u9020\u51fd\u6570\u4e2d\u8fdb\u884c\u8c03\u7528\n    @Override\n    protected void customizePropertySources(MutablePropertySources propertySources) {\n        propertySources.addLast(new MapPropertySource(SYSTEM_PROPERTIES_PROPERTY_SOURCE_NAME, getSystemProperties()));\n        propertySources.addLast(new SystemEnvironmentPropertySource(SYSTEM_ENVIRONMENT_PROPERTY_SOURCE_NAME, getSystemEnvironment()));\n    }\n\n}\n')))}g.isMDXComponent=!0}}]);