"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[526],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>f});var o=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},a=Object.keys(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var l=o.createContext({}),p=function(t){var e=o.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=p(t.components);return o.createElement(l.Provider,{value:e},t.children)},c="mdxType",g={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},m=o.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,l=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),c=p(n),m=r,f=c["".concat(l,".").concat(m)]||c[m]||g[m]||a;return n?o.createElement(f,i(i({ref:e},u),{},{components:n})):o.createElement(f,i({ref:e},u))}));function f(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s[c]="string"==typeof t?t:r,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9699:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>g,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var o=n(7462),r=(n(7294),n(3905));const a={title:"SpringBoot\u6e90\u7801\u89e3\u6790\u4e4bautoconfigure",linkTitle:"SpringBoot\u6e90\u7801\u89e3\u6790\u4e4bautoconfigure",date:new Date("2018-05-08T00:00:00.000Z")},i=void 0,s={unversionedId:"spring/spring-boot/core-source-analysis/springboot-autoconfigure",id:"spring/spring-boot/core-source-analysis/springboot-autoconfigure",title:"SpringBoot\u6e90\u7801\u89e3\u6790\u4e4bautoconfigure",description:"1. SpringBootApplication\u6ce8\u89e3",source:"@site/docs/spring/spring-boot/core-source-analysis/springboot-autoconfigure.md",sourceDirName:"spring/spring-boot/core-source-analysis",slug:"/spring/spring-boot/core-source-analysis/springboot-autoconfigure",permalink:"/docs/spring/spring-boot/core-source-analysis/springboot-autoconfigure",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/spring/spring-boot/core-source-analysis/springboot-autoconfigure.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1682735967,formattedLastUpdatedAt:"Apr 29, 2023",frontMatter:{title:"SpringBoot\u6e90\u7801\u89e3\u6790\u4e4bautoconfigure",linkTitle:"SpringBoot\u6e90\u7801\u89e3\u6790\u4e4bautoconfigure",date:"2018-05-08T00:00:00.000Z"},sidebar:"springboot",previous:{title:"SpringBoot\u6e90\u7801\u89e3\u6790\u4e4bspring.factories\u914d\u7f6e-EnvironmentPostProcessor",permalink:"/docs/spring/spring-boot/core-source-analysis/springboot-EnvironmentPostProcessor"},next:{title:"SpringBoot\u542f\u52a8\u5206\u6790",permalink:"/docs/spring/spring-boot/core-source-analysis/springboot-start"}},l={},p=[{value:"1. SpringBootApplication\u6ce8\u89e3",id:"1-springbootapplication\u6ce8\u89e3",level:3},{value:"1.1 @EnableAutoConfiguration\u89e3\u6790",id:"11-enableautoconfiguration\u89e3\u6790",level:4}],u={toc:p},c="wrapper";function g(t){let{components:e,...n}=t;return(0,r.kt)(c,(0,o.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"1-springbootapplication\u6ce8\u89e3"},"1. SpringBootApplication\u6ce8\u89e3"),(0,r.kt)("p",null,"SpringBootApplication\u6ce8\u89e3\u662fSpringBoot\u4e2d\u6700\u91cd\u8981\u7684\u4e00\u4e2a\u6ce8\u89e3\uff0c\u7528\u6765\u542f\u52a8SprintBoot\u5e94\u7528\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'@Target(ElementType.TYPE)\n@Retention(RetentionPolicy.RUNTIME)\n@Documented\n@Inherited\n@SpringBootConfiguration\n@EnableAutoConfiguration\n@ComponentScan(excludeFilters = { @Filter(type = FilterType.CUSTOM, classes = TypeExcludeFilter.class),\n        @Filter(type = FilterType.CUSTOM, classes = AutoConfigurationExcludeFilter.class) })\n@ConfigurationPropertiesScan\npublic @interface SpringBootApplication {\n    \n    @AliasFor(annotation = EnableAutoConfiguration.class)\n    Class<?>[] exclude() default {};\n    \n    @AliasFor(annotation = EnableAutoConfiguration.class)\n    String[] excludeName() default {};\n    \n    @AliasFor(annotation = ComponentScan.class, attribute = "basePackages")\n    String[] scanBasePackages() default {};\n    \n    @AliasFor(annotation = ComponentScan.class, attribute = "basePackageClasses")\n    Class<?>[] scanBasePackageClasses() default {};\n    \n    @AliasFor(annotation = Configuration.class)\n    boolean proxyBeanMethods() default true;\n\n}\n')),(0,r.kt)("p",null,"\u4ece\u4e0a\u9762\u7684\u4ee3\u7801\u53ef\u4ee5\u770b\u51fa\u6765\u6709\u4e09\u79cd\u5206\u7c7b\uff1a  "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"SpringBootConfiguration -- \u6807\u6ce8\u5f53\u524d\u7c7b\u4e3a\u914d\u7f6e"),(0,r.kt)("li",{parentName:"ol"},"EnableAutoConfiguration -- \u81ea\u52a8\u7684\u914d\u7f6e"),(0,r.kt)("li",{parentName:"ol"},"ComponentScan -- Bean\u626b\u63cf"),(0,r.kt)("li",{parentName:"ol"},"ConfigurationPropertiesScan -- \u914d\u7f6eProperties\u626b\u63cf  ")),(0,r.kt)("p",null,"SpringBoot\u7684autoconfigure\u4e3b\u8981\u662f\u901a\u8fc7EnableAutoConfiguration\u89e3\u6790\u6ce8\u89e3\u6765\u5b9e\u73b0"),(0,r.kt)("h4",{id:"11-enableautoconfiguration\u89e3\u6790"},"1.1 @EnableAutoConfiguration\u89e3\u6790"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'@Target(ElementType.TYPE)\n@Retention(RetentionPolicy.RUNTIME)\n@Documented\n@Inherited\n@AutoConfigurationPackage\n@Import(AutoConfigurationImportSelector.class)\npublic @interface EnableAutoConfiguration {\n\n    String ENABLED_OVERRIDE_PROPERTY = "spring.boot.enableautoconfiguration";\n\n    //\u6392\u9664\u7684class\n    Class<?>[] exclude() default {};\n\n    //\u6392\u9664\u7684\u540d\u79f0\n    String[] excludeName() default {};\n\n}\n')),(0,r.kt)("p",null,"\u901a\u8fc7\u4e0a\u9762\u53ef\u4ee5\u770b\u51fa\u6765\u4e3b\u8981\u662f\u901a\u8fc7 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"AutoConfigurationImportSelector"))," \u7c7b\u6765\u5bfc\u5165\u3002\u8fdb\u5165\u7c7b\u770b\u4e00\u4e0b\u7c7b\u7684\u5b9a\u4e49\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public class AutoConfigurationImportSelector implements DeferredImportSelector, BeanClassLoaderAware,\n        ResourceLoaderAware, BeanFactoryAware, EnvironmentAware, Ordered {\n    //\u7701\u7565\u4ee3\u7801          \n}\n")),(0,r.kt)("p",null,"\u4ece\u4ee3\u7801\u53ef\u4ee5\u770b\u51fa\u6765\u4e3b\u8981\u662f\u901a\u8fc7 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"DeferredImportSelector"))," \u5bfc\u5165\u3002\u770b\u4e00\u4e0b\n",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"AutoConfigurationImportSelector#selectImports"))," \u65b9\u6cd5\u3002\u8fd9\u4e2a\u65b9\u6cd5\u662f\u5b9e\u73b0\u4e86  ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"ImportSelector#selectImports"))," \u65b9\u6cd5\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"    @Override\n    public String[] selectImports(AnnotationMetadata annotationMetadata) {\n        //\u5224\u65ad\u662f\u5426\u80fd\u591f\u5bfc\u5165\n        if (!isEnabled(annotationMetadata)) {\n            return NO_IMPORTS;\n        }\n        //\u83b7\u53d6\u81ea\u52a8\u914d\u7f6e\u7684\u5143\u6570\u636e\n        AutoConfigurationMetadata autoConfigurationMetadata = AutoConfigurationMetadataLoader\n                .loadMetadata(this.beanClassLoader);\n        //\u83b7\u53d6\u81ea\u52a8\u914d\u7f6e\u7684Entry      \n        AutoConfigurationEntry autoConfigurationEntry = getAutoConfigurationEntry(autoConfigurationMetadata,\n                annotationMetadata);\n        //\u8fd4\u56de\u7c7b\u540d      \n        return StringUtils.toStringArray(autoConfigurationEntry.getConfigurations());\n    }\n")),(0,r.kt)("p",null,"\u5bf9\u4e8e ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"DeferredImportSelector"))," \u4e3b\u8981\u662f\u901a\u8fc7\u8c03\u7528 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"DeferredImportSelector#getImportGroup"))," \u65b9\u6cd5\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"    @Override\n    public Class<? extends Group> getImportGroup() {\n        return AutoConfigurationGroup.class;\n    }\n")),(0,r.kt)("p",null,"\u63a5\u4e0b\u6765\u770b\u4e00\u4e0b ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"AutoConfigurationGroup"))," \u5b9e\u73b0\u3002 \u770b\u4e00\u4e0b ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"AutoConfigurationGroup#process"))," \u65b9\u6cd5"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public void process(AnnotationMetadata annotationMetadata, DeferredImportSelector deferredImportSelector) {\n            Assert.state(deferredImportSelector instanceof AutoConfigurationImportSelector,\n                    () -> String.format("Only %s implementations are supported, got %s",\n                            AutoConfigurationImportSelector.class.getSimpleName(),\n                            deferredImportSelector.getClass().getName()));\n            //\u83b7\u53d6Entry\n            AutoConfigurationEntry autoConfigurationEntry = ((AutoConfigurationImportSelector) deferredImportSelector)\n                    .getAutoConfigurationEntry(getAutoConfigurationMetadata(), annotationMetadata);\n            this.autoConfigurationEntries.add(autoConfigurationEntry);\n            for (String importClassName : autoConfigurationEntry.getConfigurations()) {\n                this.entries.putIfAbsent(importClassName, annotationMetadata);\n            }\n        }\n        \n@Override\npublic Iterable<Entry> selectImports() {\n            if (this.autoConfigurationEntries.isEmpty()) {\n                return Collections.emptyList();\n            }\n            Set<String> allExclusions = this.autoConfigurationEntries.stream()\n                    .map(AutoConfigurationEntry::getExclusions).flatMap(Collection::stream).collect(Collectors.toSet());\n            Set<String> processedConfigurations = this.autoConfigurationEntries.stream()\n                    .map(AutoConfigurationEntry::getConfigurations).flatMap(Collection::stream)\n                    .collect(Collectors.toCollection(LinkedHashSet::new));\n            processedConfigurations.removeAll(allExclusions);\n\n            return sortAutoConfigurations(processedConfigurations, getAutoConfigurationMetadata()).stream()\n                    .map((importClassName) -> new Entry(this.entries.get(importClassName), importClassName))\n                    .collect(Collectors.toList());\n        }\n')),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"ConfigurationClassParser"))," \u4e2d\u5bf9\u4e8e\u5b9e\u73b0\u7684\u662f ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"ImportSelector"))," \u8c03\u7528\u7684\u662f ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"ImportSelector#selectImports"))," \u65b9\u6cd5\u3002 \u5982\u679c\u5b9e\u73b0\u7684\u662f ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"DeferredImportSelector"))," \u63a5\u53e3\u90a3\u4e48\u8c03\u7528\u7684\u662f  ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"DeferredImportSelector#getImportGroup"))," \u3002"))}g.isMDXComponent=!0}}]);