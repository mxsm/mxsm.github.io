"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[5343],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>k});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},g="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),g=s(t),u=a,k=g["".concat(p,".").concat(u)]||g[u]||c[u]||o;return t?r.createElement(k,i(i({ref:n},m),{},{components:t})):r.createElement(k,i({ref:n},m))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[g]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8865:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=t(7462),a=(t(7294),t(3905));const o={title:"\u5982\u4f55\u81ea\u5b9a\u4e49Spring Enable\u6ce8\u89e3",linkTitle:"\u5982\u4f55\u81ea\u5b9a\u4e49Spring Enable\u6ce8\u89e3",date:new Date("2022-01-20T00:00:00.000Z"),weight:202201200920},i=void 0,l={unversionedId:"spring/spring-framework/custom-component-extensions/spring-extend-enable-annotation",id:"spring/spring-framework/custom-component-extensions/spring-extend-enable-annotation",title:"\u5982\u4f55\u81ea\u5b9a\u4e49Spring Enable\u6ce8\u89e3",description:"Spring\u4e2d\u6709\u8fd9\u6837\u4e00\u7c7b\u6ce8\u89e3\u4ee5Enable\u5f00\u5934\uff0c\u4f8b\u5982\uff1a@EnableAsync\u3001@EnableWebMvc\u3001@EnableTransactionManagement \u7b49\u7b49\uff0c\u8fd9\u4e09\u4e2a\u662f\u5728\u5de5\u4f5c\u4e2d\u89c1\u7684\u6bd4\u8f83\u591a\u4e5f\u6bd4\u8f83\u5e38\u89c1\u7684\u4e00\u4e2a\u3002\u4ece\u6ce8\u89e3\u5b57\u9762\u4e0a\u7684\u610f\u601d\u6765\u770b\uff0c\u4e3b\u8981\u7528\u4e8e\u5f00\u542f\u67d0\u9879\u529f\u80fd\uff0c\u4f8b\u5982\uff1a@EnableTransactionManagement \u6ce8\u89e3\u662f\u5f00\u542f\u4e8b\u52a1\u7ba1\u7406\uff0c\u7136\u540e\u642d\u914d @Transactional \u6ce8\u89e3\u4f7f\u7528\u3002\u5728\u5de5\u4f5c\u8fc7\u7a0b\u4e2d\u4ec5\u4ec5\u662fSpring\u63d0\u4f9b\u7684\u6ce8\u89e3\u662f\u5b8c\u5168\u4e0d\u591f\u7684\uff0c\u6240\u4ee5\u9700\u8981\u6211\u4eec\u8fdb\u884c\u81ea\u5b9a\u4e49Enable\u7c7b\u578b\u6ce8\u89e3\uff0c\u6765\u5f00\u542f\u67d0\u4e00\u4e2a\u529f\u80fd\uff0c\u7136\u540e\u642d\u914d\u5bf9\u5e94\u7684\u6ce8\u89e3\u6765\u4f7f\u7528\u3002\u8fd9\u91cc\u5148\u8bb2\u5982\u4f55\u81ea\u5b9a\u4e49Enable\u7c7b\u578b\u7684\u6ce8\u89e3\uff0c\u540e\u9762\u7ed3\u5408\u62d3\u5c55AOP\u7c7b\u578b\u6ce8\u89e3\u8fdb\u884c\u642d\u914d\u4f7f\u7528\u3002",source:"@site/docs/spring/spring-framework/custom-component-extensions/spring-extend-enable-annotation.md",sourceDirName:"spring/spring-framework/custom-component-extensions",slug:"/spring/spring-framework/custom-component-extensions/spring-extend-enable-annotation",permalink:"/docs/spring/spring-framework/custom-component-extensions/spring-extend-enable-annotation",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/spring/spring-framework/custom-component-extensions/spring-extend-enable-annotation.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1683078484,formattedLastUpdatedAt:"May 3, 2023",frontMatter:{title:"\u5982\u4f55\u81ea\u5b9a\u4e49Spring Enable\u6ce8\u89e3",linkTitle:"\u5982\u4f55\u81ea\u5b9a\u4e49Spring Enable\u6ce8\u89e3",date:"2022-01-20T00:00:00.000Z",weight:202201200920},sidebar:"springframework",previous:{title:"\u57fa\u4e8eSpring AOP\u81ea\u5b9a\u4e49\u6ce8\u89e3",permalink:"/docs/spring/spring-framework/custom-component-extensions/spring-extend-aop-annotation"},next:{title:"\u5982\u4f55\u81ea\u5b9a\u4e49Spring xml Namespace",permalink:"/docs/spring/spring-framework/custom-component-extensions/spring-extend-xml"}},p={},s=[{value:"1. @Enable\u6ce8\u89e3\u539f\u7406\u89e3\u6790",id:"1-enable\u6ce8\u89e3\u539f\u7406\u89e3\u6790",level:3},{value:"2. \u81ea\u5b9a\u4e49@Enable\u6ce8\u89e3\u5b9e\u6218",id:"2-\u81ea\u5b9a\u4e49enable\u6ce8\u89e3\u5b9e\u6218",level:3},{value:"2.1 \u5b9a\u4e49@Enable\u6ce8\u89e3",id:"21-\u5b9a\u4e49enable\u6ce8\u89e3",level:4},{value:"2.2 \u5b9e\u73b0\u63a5\u53e3",id:"22-\u5b9e\u73b0\u63a5\u53e3",level:4},{value:"2.3 \u81ea\u5b9a\u4e49\u6ce8\u89e3\u589e\u52a0@Import\u6ce8\u89e3",id:"23-\u81ea\u5b9a\u4e49\u6ce8\u89e3\u589e\u52a0import\u6ce8\u89e3",level:4},{value:"2.4 \u914d\u5408@Configuration\u4f7f\u7528",id:"24-\u914d\u5408configuration\u4f7f\u7528",level:4},{value:"3. \u603b\u7ed3",id:"3-\u603b\u7ed3",level:3}],m={toc:s},g="wrapper";function c(e){let{components:n,...t}=e;return(0,a.kt)(g,(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Spring\u4e2d\u6709\u8fd9\u6837\u4e00\u7c7b\u6ce8\u89e3\u4ee5Enable\u5f00\u5934\uff0c\u4f8b\u5982\uff1a",(0,a.kt)("strong",{parentName:"p"},"@EnableAsync\u3001@EnableWebMvc\u3001@EnableTransactionManagement")," \u7b49\u7b49\uff0c\u8fd9\u4e09\u4e2a\u662f\u5728\u5de5\u4f5c\u4e2d\u89c1\u7684\u6bd4\u8f83\u591a\u4e5f\u6bd4\u8f83\u5e38\u89c1\u7684\u4e00\u4e2a\u3002\u4ece\u6ce8\u89e3\u5b57\u9762\u4e0a\u7684\u610f\u601d\u6765\u770b\uff0c\u4e3b\u8981\u7528\u4e8e\u5f00\u542f\u67d0\u9879\u529f\u80fd\uff0c\u4f8b\u5982\uff1a",(0,a.kt)("strong",{parentName:"p"},"@EnableTransactionManagement")," \u6ce8\u89e3\u662f\u5f00\u542f\u4e8b\u52a1\u7ba1\u7406\uff0c\u7136\u540e\u642d\u914d ",(0,a.kt)("strong",{parentName:"p"},"@Transactional")," \u6ce8\u89e3\u4f7f\u7528\u3002\u5728\u5de5\u4f5c\u8fc7\u7a0b\u4e2d\u4ec5\u4ec5\u662fSpring\u63d0\u4f9b\u7684\u6ce8\u89e3\u662f\u5b8c\u5168\u4e0d\u591f\u7684\uff0c\u6240\u4ee5\u9700\u8981\u6211\u4eec\u8fdb\u884c\u81ea\u5b9a\u4e49Enable\u7c7b\u578b\u6ce8\u89e3\uff0c\u6765\u5f00\u542f\u67d0\u4e00\u4e2a\u529f\u80fd\uff0c\u7136\u540e\u642d\u914d\u5bf9\u5e94\u7684\u6ce8\u89e3\u6765\u4f7f\u7528\u3002\u8fd9\u91cc\u5148\u8bb2\u5982\u4f55\u81ea\u5b9a\u4e49Enable\u7c7b\u578b\u7684\u6ce8\u89e3\uff0c\u540e\u9762\u7ed3\u5408\u62d3\u5c55AOP\u7c7b\u578b\u6ce8\u89e3\u8fdb\u884c\u642d\u914d\u4f7f\u7528\u3002"),(0,a.kt)("h3",{id:"1-enable\u6ce8\u89e3\u539f\u7406\u89e3\u6790"},"1. @Enable\u6ce8\u89e3\u539f\u7406\u89e3\u6790"),(0,a.kt)("p",null,"@Enable\u7c7b\u578b\u6ce8\u89e3\u539f\u7406\u89e3\u6790\u6d41\u7a0b\u5982\u4e0b\u56fe\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/spring/custom/Enable%E5%8E%9F%E7%90%86%20.png",alt:"Enable\u539f\u7406 "})),(0,a.kt)("p",null,"\u4ece@Enable\u6ce8\u89e3\u7684\u89e3\u6790\u6d41\u7a0b\u56fe\u53ef\u4ee5\u5206\u6790\u4e00\u4e0b\u539f\u7406\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6ce8\u89e3\u7684\u89e3\u6790\u7684\u5165\u53e3\u5728 ",(0,a.kt)("strong",{parentName:"li"},"ConfigurationClassPostProcessor"),"  \uff0c\u8fd9\u4e2a\u7c7b\u662f ",(0,a.kt)("strong",{parentName:"li"},"BeanDefinitionRegistryPostProcessor")," \u63a5\u53e3\u7684\u5b9e\u73b0\uff0c\u800c",(0,a.kt)("strong",{parentName:"li"},"BeanDefinitionRegistryPostProcessor")," \u63a5\u53e3\u7ee7\u627f\u4e86",(0,a.kt)("strong",{parentName:"li"},"BeanFactoryPostProcessor")," \u3002(Spring\u5bb9\u5668\u542f\u52a8\u5c31\u4f1a\u8c03\u7528",(0,a.kt)("strong",{parentName:"li"},"BeanFactoryPostProcessor")," \u4e00\u7cfb\u5217\u76f8\u5173\u7684\u7ee7\u627f\u548c\u5b9e\u73b0\u5b9e\u4f8b\u7684\u65b9\u6cd5)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"ConfigurationClassPostProcessor")," \u4eceSpring\u5bb9\u5668\u4e2d\u83b7\u53d6\u88ab ",(0,a.kt)("strong",{parentName:"li"},"@Configuration")," \u4fee\u9970\u7684\u7c7b\uff0c\u7136\u540e\u4ea4\u7ed9\u65b0\u5efa\u7684 ",(0,a.kt)("strong",{parentName:"li"},"ConfigurationClassParser")," \u5b9e\u4f8b\u5904\u7406\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"ConfigurationClassParser")," \u8d1f\u8d23\u5904\u7406 ",(0,a.kt)("strong",{parentName:"li"},"@Component\u3001@PropertySources\u3001@PropertySource\u3001@ComponentScans\u3001@ComponentScan\u3001@ImportResource\u3001@Configuration\u4fee\u9970\u7684\u7c7b\u65b9\u6cd5\u4e0a\u9762\u7684@Bean\u3001@Import"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"@Import")," \u4f5c\u4e3a ",(0,a.kt)("strong",{parentName:"li"},"@Enable")," \u6ce8\u89e3\u7684\u5165\u53e3\uff0c",(0,a.kt)("strong",{parentName:"li"},"@Import")," \u5bfc\u5165\u7684\u914d\u7f6e\u7c7b\u9700\u8981\u5b9e\u73b0 ",(0,a.kt)("strong",{parentName:"li"},"DeferredImportSelector\u3001ImportSelector\u3001ImportBeanDefinitionRegistrar")," \u4e09\u4e2a\u5f53\u4e2d\u7684\u4e00\u4e2a,\u4ee5\u8fd9\u4e09\u4e2a\u7c7b\u5f80Spring\u5bb9\u5668\u4e2d\u6ce8\u5165\u81ea\u5df1\u5b9e\u73b0\u529f\u80fd\u76f8\u5173\u7684\u7c7b\u6765\u8fbe\u5230\u6211\u4eec\u81ea\u5df1\u7684\u529f\u80fd\u5b9e\u73b0\u7684\u76ee\u7684")),(0,a.kt)("p",null,"\u901a\u8fc7Spring\u89e3\u6790\u914d\u7f6e\u4e86@Configuration\u7684\u7c7b\uff0c\u7136\u540e\u89e3\u6790\u7c7b\u4e0a\u9762\u914d\u7f6e\u4e86@Import\u7684\u6ce8\u89e3\u914d\u7f6e value \u503c\u7684\u63a5\u53e3\uff0c\u8fd9\u4e9b\u7c7b\u90fd\u662f\u5b9e\u73b0\u4e86",(0,a.kt)("strong",{parentName:"p"},"DeferredImportSelector\u3001ImportSelector\u3001ImportBeanDefinitionRegistrar")," \u8fd9\u4e09\u4e2a\u63a5\u53e3\u4e2d\u7684\u4e00\u4e2a\u3002\u6267\u884c\u4e86\u4e09\u4e2a\u63a5\u53e3\u7684\u5b9e\u73b0\u8fd9\u91cc\u5c31\u5df2\u7ecf\u5b8c\u6210\u4e86\u6211\u4eec\u81ea\u5b9a\u4e49\u7684\u7c7b\u6ce8\u518c\u5230Spring\u5bb9\u5668\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Tpis:\u5728\u81ea\u5b9a\u4e49Enable\u7528\u5230\u7684Spring\u539f\u751f\u7684\u6ce8\u89e3\u4ee5\u53ca\u63a5\u53e3"),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u6ce8\u89e3"),(0,a.kt)("p",{parentName:"li"},"@Configuration\u3001@Import")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u63a5\u53e3"),(0,a.kt)("p",{parentName:"li"},"DeferredImportSelector\u3001ImportSelector\u3001ImportBeanDefinitionRegistrar")))),(0,a.kt)("h3",{id:"2-\u81ea\u5b9a\u4e49enable\u6ce8\u89e3\u5b9e\u6218"},"2. \u81ea\u5b9a\u4e49@Enable\u6ce8\u89e3\u5b9e\u6218"),(0,a.kt)("p",null,"\u81ea\u5b9a\u4e49\u4e00\u4e2a@EnableLog\u6ce8\u89e3\uff0c\u529f\u80fd\uff1a\u7528\u6765\u662f\u5426\u5141\u8bb8\u6765\u8fdb\u884c\u65e5\u5fd7\u8bb0\u5f55\u3002\u81ea\u5b9a\u4e49\u9700\u8981\u5982\u4e0b\u51e0\u4e2a\u6b65\u9aa4\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/spring/custom/Enable%E8%87%AA%E5%AE%9A%E4%B9%89%E6%AD%A5%E9%AA%A4.png",alt:"Enable\u81ea\u5b9a\u4e49\u6b65\u9aa4"})),(0,a.kt)("h4",{id:"21-\u5b9a\u4e49enable\u6ce8\u89e3"},"2.1 \u5b9a\u4e49@Enable\u6ce8\u89e3"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'@Documented\n@Target({ElementType.TYPE})\n@Retention(RetentionPolicy.RUNTIME)\n@Inherited\npublic @interface EnableLog {\n    boolean value() default true;\n    /**\n     * use asynchronization method to record log\n     * @return\n     */\n    boolean async() default false;\n\n    /**\n     * log name\n     * @return\n     */\n    String loggerName() default "";\n\n    boolean proxyTargetClass() default false;\n}\n')),(0,a.kt)("p",null,"\u6ce8\u89e3\u91cc\u9762\u7684\u5c5e\u6027\u53ef\u4ee5\u6839\u636e\u5b9e\u73b0\u7684\u529f\u80fd\u81ea\u5df1\u5b9a\u4e49\u3002"),(0,a.kt)("h4",{id:"22-\u5b9e\u73b0\u63a5\u53e3"},"2.2 \u5b9e\u73b0\u63a5\u53e3"),(0,a.kt)("p",null,"\u9700\u8981\u5b9e\u73b0\u4e09\u4e2a\u63a5\u53e3\u4e2d\u7684\u4efb\u610f\u4e00\u4e2a\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"ImportSelector")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"DeferredImportSelector")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"ImportBeanDefinitionRegistrar"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"ImportSelector"),"\u548c",(0,a.kt)("strong",{parentName:"p"},"DeferredImportSelector"),"\u63a5\u53e3\u7b97\u662f\u4e00\u7c7b\u63a5\u53e3\u6267\u884c\u7684\u65f6\u95f4\u4e0d\u540c\u800c\u5df2\u3002",(0,a.kt)("strong",{parentName:"p"},"ImportBeanDefinitionRegistrar")," \u5f80Spring\u5bb9\u5668\u4e2d\u6ce8\u5165BeanDefinition\u3002\u8fd9\u4e09\u4e2a\u63a5\u53e3\u9009\u62e9\u770b\u5b9e\u73b0\u529f\u80fd\u7684\u9700\u8981\u3002\u6211\u4eec\u8fd9\u91cc\u4f7f\u7528\u7684 ",(0,a.kt)("strong",{parentName:"p"},"ImportSelector")," (\u8fd9\u4e2a\u4e5f\u662f\u6700\u5e38\u7528\u7684)\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'public class LogImportSelector implements ImportSelector {\n\n    /**\n     * Select and return the names of which class(es) should be imported based on the {@link AnnotationMetadata} of the\n     * importing @{@link Configuration} class.\n     *\n     * @param importingClassMetadata\n     * @return the class names, or an empty array if none\n     */\n    public String[] selectImports(AnnotationMetadata importingClassMetadata) {\n\n        AnnotationAttributes attributes = AnnotationAttributes.fromMap(\n            importingClassMetadata.getAnnotationAttributes(EnableLog.class.getName(), false));\n        boolean value = attributes.getBoolean("value");\n        if (value) {\n            return new String[]{LogConfig.class.getName(), LogImportBeanDefinitionRegistrar.class.getName()};\n        }\n        return new String[0];\n    }\n}\n')),(0,a.kt)("p",null,"\u8fd9\u91cc\u5f80Spring\u5bb9\u5668\u4e2d\u6ce8\u5165\u4e86\u4e00\u4e2a ",(0,a.kt)("strong",{parentName:"p"},"LogConfig")," \u7684\u914d\u7f6e\u7c7b\uff0c\u4ee5\u53ca\u4e00\u4e2a ",(0,a.kt)("strong",{parentName:"p"},"LogImportBeanDefinitionRegistrar")," \u7c7b\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"LogConfig"),"\uff1a \u4e3b\u8981\u7528\u6765\u914d\u7f6e\u8bb0\u5f55\u65e5\u5fd7\u7684AOP\u76f8\u5173\u7684\u7c7b\u5b9e\u4f8b"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"LogImportBeanDefinitionRegistrar"),"\uff1a\u5f00\u542fAOP\u7684\u5904\u7406\uff0c\u4ee5\u53caSpring\u5728\u65e5\u5fd7\u5904\u7406\u8fc7\u7a0b\u4e2d\u4f7f\u7528\u7684\u4ee3\u7406\u65b9\u5f0f")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u4ee3\u7801\u5177\u4f53\u4f1a\u5728\u57fa\u4e8eAOP\u62d3\u5c55\u7684\u65f6\u5019\u8fdb\u884c\u8bb2\u89e3")),(0,a.kt)("h4",{id:"23-\u81ea\u5b9a\u4e49\u6ce8\u89e3\u589e\u52a0import\u6ce8\u89e3"},"2.3 \u81ea\u5b9a\u4e49\u6ce8\u89e3\u589e\u52a0@Import\u6ce8\u89e3"),(0,a.kt)("p",null,"\u4e0a\u9762\u81ea\u5b9a\u4e49\u7684 ",(0,a.kt)("strong",{parentName:"p"},"@EnableLog")," \u6ce8\u89e3\u53ea\u662f\u5b9a\u4e49\u4e00\u4e2a\u666e\u901a\u7684\u6ce8\u89e3\uff0c\u90a3\u4e48\u8981\u5982\u4f55\u8ddfSpring\u76f8\u7ed3\u5408\uff0c\u8fd9\u5c31\u9700\u8981\u7528\u5230 ",(0,a.kt)("strong",{parentName:"p"},"@Import")," \u6ce8\u89e3\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"@Documented\n@Target({ElementType.TYPE})\n@Retention(RetentionPolicy.RUNTIME)\n@Inherited\n@Import(LogImportSelector.class) (1)\npublic @interface EnableLog {\n    //\u7701\u7565\u90e8\u5206\u4ee3\u7801\n}\n")),(0,a.kt)("p",null,"\u589e\u52a0(1)\u4f4d\u7f6e\u7684\u4ee3\u7801\u3002\u8fd9\u91cc\u5c31\u628a\u81ea\u5b9a\u4e49\u7684\u6ce8\u89e3\u548cSpring\u6846\u67b6\u7ed3\u5408\u4e00\u8d77\u3002\u5230\u8fd9\u91cc\u81ea\u5b9a\u4e49 ",(0,a.kt)("strong",{parentName:"p"},"@EnableLog")," \u5b8c\u6210\u4e86\u3002"),(0,a.kt)("h4",{id:"24-\u914d\u5408configuration\u4f7f\u7528"},"2.4 \u914d\u5408@Configuration\u4f7f\u7528"),(0,a.kt)("p",null,"\u5728\u4f7f\u7528\u81ea\u5b9a\u4e49\u7684Enable\u6ce8\u89e3\u9700\u8981\u642d\u914dSpring\u539f\u751f\u7684 ",(0,a.kt)("strong",{parentName:"p"},"@Configuration")," \u8fdb\u884c\u4f7f\u7528(\u539f\u7406\u5df2\u7ecf\u5728\u4e0a\u9762\u4ecb\u7ecd)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"@EnableLog\n@Configuration\npublic class EnableLogConfig {\n\n}\n")),(0,a.kt)("p",null,"\u5982\u4e0a\u4ee3\u7801\u8fd9\u6837\u5c31\u53ef\u4ee5\u4f7f\u7528\u4e86\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Tips: \u5982\u679c\u662fSpringBoot\u9879\u76ee\uff0c\u53ef\u4ee5\u76f4\u63a5\u653e\u5728@SpringBootApplication\u6ce8\u89e3\u7684\u7c7b\u4e0a\u9762\uff0c\u6709\u4eba\u4f1a\u95ee\u4e3a\u4ec0\u4e48\u653e\u5728\u8fd9\u91cc\u53ef\u4ee5\u5462\uff1f\u539f\u56e0\u5c31\u662f @SpringBootConfiguration\u6ce8\u89e3\u4e0a\u9762\u914d\u7f6e\u4e86 @Configuration \u6ce8\u89e3\u3002\u539f\u56e0\u5c31\u5728\u8fd9\u91cc@SpringBootApplication\u5c31\u76f8\u5f53\u4e8e\u4e00\u4e2a@Configuration\u6ce8\u89e3\uff0c\u6240\u4ee5\u6211\u4eec\u81ea\u5b9a\u4e49\u7684Enable\u6ce8\u89e3\u53ef\u4ee5\u76f4\u63a5\u653e\u5728@SpringBootApplication\uff0c\u5f53\u7136\u4e5f\u53ef\u4ee5\u81ea\u5b9a\u4e49\u4e00\u4e2a\u7528@Configuration\u4fee\u9970\u7684\u7c7b\u4e0a\u9762\u3002")),(0,a.kt)("p",null,"\u4ee3\u7801\u4f1a\u5728\u540e\u7eed\u7684\u6587\u7ae0\u7ed9\u51fa\u6765\u3002\u8fd9\u91cc\u6d89\u53ca\u5230AOP\u7684\u62d3\u5c55\u3002"),(0,a.kt)("h3",{id:"3-\u603b\u7ed3"},"3. \u603b\u7ed3"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Enable\u7c7b\u578b\u7684\u6ce8\u89e3\u4eceSpring\u539f\u751f\u7684\u548c\u81ea\u5df1\u62d3\u5c55\u7684\u6765\u770b\uff0c\u76f8\u5f53\u4e8e\u4e00\u4e2a\u5f00\u5173\u3002\u589e\u52a0\u8fd9\u4e2a\u6ce8\u89e3\u5c31\u5f00\u542f\u4e86\u4e00\u4e2a\u529f\u80fd\uff0c\u9700\u8981\u642d\u914d\u5176\u4ed6\u7684\u6ce8\u89e3\u6765\u4f7f\u7528\uff0c\u4f8b\u5982\uff1a@EnableAsync\u642d\u914d@Async\u6ce8\u89e3\uff0c@EnableTransactionManagement\u642d\u914d@Transactional\u6ce8\u89e3\u4f7f\u7528"),(0,a.kt)("li",{parentName:"ul"},"Enable\u7c7b\u578b\u6ce8\u89e3\u751f\u6548\u9700\u8981\u642d\u914d@Configuration\u6ce8\u89e3"),(0,a.kt)("li",{parentName:"ul"},"Enable\u7c7b\u578b\u6ce8\u89e3\u7684\u5b9e\u73b0\u9700\u8981\u642d\u914d\u6ce8\u89e3@Import\u5bfc\u5165\uff0c\u529f\u80fd\u5b9e\u73b0\u9700\u8981\u5b9e\u73b0",(0,a.kt)("strong",{parentName:"li"},"DeferredImportSelector\u3001ImportSelector\u3001ImportBeanDefinitionRegistrar")," \u4e09\u4e2a\u63a5\u53e3\u4e2d\u4e00\u4e2a\u3002")),(0,a.kt)("p",null,"\u5c06Spring\u7684\u539f\u751f\u6ce8\u89e3\u548c\u4e00\u4e9b\u7279\u5b9a\u7684\u62d3\u5c55\u63a5\u53e3\u5b9e\u73b0\u81ea\u5b9a\u4e49Enable\u7c7b\u578b\u6ce8\u89e3\u3002"))}c.isMDXComponent=!0}}]);