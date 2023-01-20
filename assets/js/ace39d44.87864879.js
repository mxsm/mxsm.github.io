"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[4768],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),i=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),g=i(n),c=a,k=g["".concat(s,".").concat(c)]||g[c]||u[c]||p;return n?r.createElement(k,o(o({ref:t},m),{},{components:n})):r.createElement(k,o({ref:t},m))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,o=new Array(p);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[g]="string"==typeof e?e:a,o[1]=l;for(var i=2;i<p;i++)o[i]=n[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9766:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>g,frontMatter:()=>p,metadata:()=>l,toc:()=>i});var r=n(7462),a=(n(7294),n(3905));const p={title:"Spring AOP+SpEL\u5b9e\u73b0\u81ea\u5b9a\u4e49\u6a21\u677f\u8bb0\u5f55\u65e5\u5fd7",linkTitle:"Spring AOP+SpEL\u5b9e\u73b0\u81ea\u5b9a\u4e49\u6a21\u677f\u8bb0\u5f55\u65e5\u5fd7",date:new Date("2022-02-05T00:00:00.000Z"),weight:202202051307},o=void 0,l={unversionedId:"spring/spring-framework/custom-component-extensions/spring-custom-logging",id:"spring/spring-framework/custom-component-extensions/spring-custom-logging",title:"Spring AOP+SpEL\u5b9e\u73b0\u81ea\u5b9a\u4e49\u6a21\u677f\u8bb0\u5f55\u65e5\u5fd7",description:"\u300c\u8fd9\u662f\u6211\u53c2\u4e0e2022\u9996\u6b21\u66f4\u6587\u6311\u6218\u7684\u7b2c20\u5929\uff0c\u6d3b\u52a8\u8be6\u60c5\u67e5\u770b\uff1a2022\u9996\u6b21\u66f4\u6587\u6311\u6218\u300d",source:"@site/docs/spring/spring-framework/custom-component-extensions/spring-custom-logging.md",sourceDirName:"spring/spring-framework/custom-component-extensions",slug:"/spring/spring-framework/custom-component-extensions/spring-custom-logging",permalink:"/docs/spring/spring-framework/custom-component-extensions/spring-custom-logging",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/spring/spring-framework/custom-component-extensions/spring-custom-logging.md",tags:[],version:"current",lastUpdatedBy:"SpaceOneT",lastUpdatedAt:1674220028,formattedLastUpdatedAt:"Jan 20, 2023",frontMatter:{title:"Spring AOP+SpEL\u5b9e\u73b0\u81ea\u5b9a\u4e49\u6a21\u677f\u8bb0\u5f55\u65e5\u5fd7",linkTitle:"Spring AOP+SpEL\u5b9e\u73b0\u81ea\u5b9a\u4e49\u6a21\u677f\u8bb0\u5f55\u65e5\u5fd7",date:"2022-02-05T00:00:00.000Z",weight:202202051307},sidebar:"springframework",previous:{title:"Spring\u5982\u4f55\u81ea\u5b9a\u4e49\u6ce8\u89e3",permalink:"/docs/spring/spring-framework/custom-component-extensions/spring-custom-annotation"},next:{title:"Spring\u5e38\u7528\u7684\u62d3\u5c55\u63a5\u53e3",permalink:"/docs/spring/spring-framework/custom-component-extensions/spring-custom-used-interface"}},s={},i=[{value:"1. \u524d\u8a00",id:"1-\u524d\u8a00",level:3},{value:"2. @MxsmLog\u5b9a\u4e49",id:"2-mxsmlog\u5b9a\u4e49",level:3},{value:"3. @EnableMxsmLog",id:"3-enablemxsmlog",level:3},{value:"4. Spring AOP+SpEL\u5b9e\u73b0\u89e3\u6790\u6a21\u677f",id:"4-spring-aopspel\u5b9e\u73b0\u89e3\u6790\u6a21\u677f",level:3},{value:"4.1 AOP\u5b9e\u73b0",id:"41-aop\u5b9e\u73b0",level:4},{value:"4.2 SpEL\u5b9e\u73b0\u89e3\u6790\u6a21\u677f",id:"42-spel\u5b9e\u73b0\u89e3\u6790\u6a21\u677f",level:4},{value:"4.3 \u9519\u8bef\u5904\u7406",id:"43-\u9519\u8bef\u5904\u7406",level:4},{value:"5. \u6848\u4f8b\u6f14\u793a",id:"5-\u6848\u4f8b\u6f14\u793a",level:3},{value:"6 \u603b\u7ed3",id:"6-\u603b\u7ed3",level:3}],m={toc:i};function g(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u300c\u8fd9\u662f\u6211\u53c2\u4e0e2022\u9996\u6b21\u66f4\u6587\u6311\u6218\u7684\u7b2c20\u5929\uff0c\u6d3b\u52a8\u8be6\u60c5\u67e5\u770b\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7052884569032392740"},"2022\u9996\u6b21\u66f4\u6587\u6311\u6218"),"\u300d"),(0,a.kt)("h3",{id:"1-\u524d\u8a00"},"1. \u524d\u8a00"),(0,a.kt)("p",null,"\u5f00\u53d1\u9879\u76ee\u4e2d\u7684\u65e5\u5fd7\u8bb0\u5f55\u662f\u5fc5\u4e0d\u53ef\u5c11\u7684\uff0c\u5bf9\u4e8e\u975e\u4e1a\u52a1\u9879\u76ee\u65e5\u5fd7\u8bb0\u5f55\u7684\u4e00\u822c\u662f\u5173\u952e\u4fe1\u606f\u4f8b\u5982\u9879\u76ee\u542f\u52a8\u7684\u914d\u7f6e\u4fe1\u606f\u7b49\u7b49\uff0c\u800c\u5bf9\u4e8e\u4e1a\u52a1\u7cfb\u7edf\uff0c\u90a3\u8bb0\u5f55\u7684\u4e3b\u8981\u662f\u8bf7\u6c42\u7684\u63a5\u53e3\u7684\u6570\u636e\u3002\u8fd9\u79cd\u60c5\u51b5\u5982\u679c\u4ee5\u786c\u7f16\u7801\u7684\u65b9\u5f0f\uff0c\u4e1a\u52a1\u4ee3\u7801\u6709\u6539\u52a8\u5c31\u540c\u65f6\u9700\u8981\u6539\u52a8\u65e5\u5fd7\u3002\u540c\u65f6\u5982\u679c\u4e0d\u9700\u8981\u8bb0\u5f55\u65e5\u5fd7\u5c31\u9700\u8981\u5220\u9664\u6240\u6709\u7684\u65e5\u5fd7\u8bb0\u5f55\u4ee3\u7801\u3002\u4eca\u5929\u6211\u4eec\u7528Spring AOP+SpEL \u6765\u5b9e\u73b0\u81ea\u5b9a\u4e49\u6a21\u677f\u8bb0\u5f55\u65e5\u5fd7\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"E:%5Cdownload%5C%E6%97%A5%E5%BF%97%E8%AE%B0%E5%BD%95%E5%AE%9E%E7%8E%B0.png",alt:"\u65e5\u5fd7\u8bb0\u5f55\u5b9e\u73b0"})),(0,a.kt)("h3",{id:"2-mxsmlog\u5b9a\u4e49"},"2. @MxsmLog\u5b9a\u4e49"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"E:%5Cdownload%5C@MxsmLog.png",alt:"@MxsmLog"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"@MxsmLog")," \u5305\u542b\u4e24\u4e2a\u5c5e\u6027\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"template")),(0,a.kt)("p",{parentName:"li"},"\u7528\u6237\u53ef\u4ee5\u81ea\u5b9a\u4e49\u65e5\u5fd7\u8bb0\u5f55\u6a21\u677f\uff0c\u6a21\u677f\u7b26\u5408SpEL\u8868\u8fbe\u5f0f\u3002\u5c31\u53ef\u4ee5\u88abSpEL\u8fdb\u884c\u89e3\u6790\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"operateType")),(0,a.kt)("p",{parentName:"li"},"\u4fee\u9970\u7684\u65b9\u6cd5\u7684\u64cd\u4f5c\u7c7b\u578b\uff0c\u9ed8\u8ba4\u4e3a ",(0,a.kt)("strong",{parentName:"p"},"UNKNOWN"),"\uff0coperateType\u7684\u53d6\u503c\u5982\u4e0b\uff1a"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public enum OperateType {\n    UNKNOWN,\n    ADD,\n    DELETE,\n    UPDATE,\n    SEARCH\n}\n")),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"Tips: \u5305\u542b\u4e86\u63a5\u53e3\u7684\u4e3b\u8981\u662f\u4e2a\u64cd\u4f5c\u589e\u5220\u6539\u67e5\uff0c\u56e0\u4e3a\u4e5f\u53ef\u7528\u4e8e\u975eController\u7c7b\u4e0a\u9762\uff0c\u6240\u4ee5\u589e\u52a0\u4e86\u4e00\u4e2a\u9ed8\u8ba4\u7684UNKNOWN")))),(0,a.kt)("p",null,"\u4ee3\u7801\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'@Documented\n@Target({ElementType.METHOD})\n@Retention(RetentionPolicy.RUNTIME)\n@Inherited\npublic @interface Log {\n\n    /**\n     * log template\n     * @return\n     */\n    String template() default "";\n\n    /**\n     *\n     * @return\n     */\n    OperateType operateType() default OperateType.UNKNOWN;\n}\n')),(0,a.kt)("h3",{id:"3-enablemxsmlog"},"3. @EnableMxsmLog"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"E:%5Cdownload%5C@EnableMxsmLog.png",alt:"@EnableMxsmLog"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"@EnableMxsmLog")," \u5305\u542b\u662f\u4e2a\u5c5e\u6027\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"value\u662f\u5426\u5f00\u542f\u65e5\u5fd7\u8bb0\u5f55\uff0c\u9ed8\u8ba4\u4e3atrue")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"async\u662f\u5426\u5f00\u542f\u540c\u6b65\u7684\u65b9\u5f0f\u8bb0\u5f55\u65e5\u5fd7")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"loggerName logger\u7684\u540d\u79f0\uff0c\u8fd9\u6837\u53ef\u4ee5\u8bbe\u7f6e\u4e0d\u540c\u7684logger")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"proxyTargetClass\u4f7f\u7528jdk\u8fd8\u662fcglib\u4f5c\u4e3a\u4ee3\u7406\u5b9e\u73b0"))),(0,a.kt)("p",null,"\u4ee3\u7801:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'@Documented\n@Target({ElementType.TYPE})\n@Retention(RetentionPolicy.RUNTIME)\n@Inherited\n@Import(LogImportSelector.class)\npublic @interface EnableMxsmLog {\n\n    boolean value() default true;\n\n    /**\n     * use asynchronization method to record log\n     * @return\n     */\n    boolean async() default false;\n\n    /**\n     * log name\n     * @return\n     */\n    String loggerName() default "";\n\n    boolean proxyTargetClass() default false;\n\n}\n')),(0,a.kt)("h3",{id:"4-spring-aopspel\u5b9e\u73b0\u89e3\u6790\u6a21\u677f"},"4. Spring AOP+SpEL\u5b9e\u73b0\u89e3\u6790\u6a21\u677f"),(0,a.kt)("p",null,"\u4e3b\u8981\u7684\u903b\u8f91\u90fd\u5728AOP\u7684\u5b9e\u73b0\u548cSpEL\u7684\u89e3\u6790\u3002AOP\u4e3b\u8981\u8d1f\u8d23\u62e6\u622a\u6267\u884c\u65b9\u6cd5\u4e0a\u6807\u6ce8\u4e86",(0,a.kt)("strong",{parentName:"p"},"@MxsmLog")," \u7684\uff0c\u7136\u540e\u83b7\u53d6\u6ce8\u89e3\u4e2d\u7684\u6a21\u677f\u4fe1\u606f\uff0c\u628a\u6a21\u677f\u4fe1\u606f\u7ed9\u5230SpEL\u8fdb\u884c\u6a21\u677f\u89e3\u6790\u3002\u6700\u540e\u7531\u65e5\u5fd7\u8fdb\u884c\u6253\u5370\u51fa\u6765\u3002"),(0,a.kt)("h4",{id:"41-aop\u5b9e\u73b0"},"4.1 AOP\u5b9e\u73b0"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Enable")," \u7c7b\u578b\u7684\u6ce8\u89e3\u4e3b\u8981\u662f\u914d\u5408 ",(0,a.kt)("strong",{parentName:"p"},"@Import")," \u6ce8\u89e3\u6765\u5b9e\u73b0\uff0c\u5982\u4e0a\u7684 ",(0,a.kt)("strong",{parentName:"p"},"@EnableMxsmLog")," \u6ce8\u89e3\u7528 ",(0,a.kt)("strong",{parentName:"p"},"@Import")," \u5bfc\u5165\u4e86 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"LogImportSelector"))," \u8fd9\u4e2a\u7c7b\u5b9e\u73b0\u4e86 ",(0,a.kt)("strong",{parentName:"p"},"ImportSelector")," \u63a5\u53e3\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"C:%5CUsers%5Cmxsm%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20220205142108722.png",alt:"image-20220205142108722"})),(0,a.kt)("p",null,"\u5728\u4e0a\u56fe\u6807\u6ce8\u7684\u5730\u65b9\u5bfc\u5165\u4e86AOP\u7684\u5b9e\u73b0\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Tips: \u5982\u679c\u5bf9AOP\u4e0d\u662f\u5f88\u4e86\u89e3\u53ef\u4ee5\u770b\u4e00\u4e0b\u300a",(0,a.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7055664320616595492"},"\u57fa\u4e8eSpring AOP\u81ea\u5b9a\u4e49\u6ce8\u89e3"),"\u300b")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"C:%5CUsers%5Cmxsm%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20220205142138055.png",alt:"image-20220205142138055"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"LogAdvisor\u5b9e\u73b0\u4e86AbstractBeanFactoryPointcutAdvisor\u7c7b")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"LogAdvice\u5b9e\u73b0\u4e86MethodInterceptor\u63a5\u53e3")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"LogPointcut\u5b9e\u73b0\u4e86StaticMethodMatcherPointcut\u7c7b"))),(0,a.kt)("p",null,"\u4e0a\u9762\u4e09\u4e2a\u88ab\u5b9e\u73b0\u7684\u7c7b\u7ec4\u6210Spring\u4e2d\u7684AOP,\u8fd9\u91cc\u4e5f\u5c31\u5b8c\u6210\u4e86AOP\u7684\u9664\u4e86\u6a21\u677f\u89e3\u6790\u7684\u6240\u6709\u529f\u80fd\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"LogImportBeanDefinitionRegistrar"))," \u7c7b\u8d1f\u8d23\u6ce8\u518c\u751f\u6210\u4ee3\u7406\u7684\u7c7b\u7684\u5904\u7406\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"C:%5CUsers%5Cmxsm%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20220205143450758.png",alt:"image-20220205143450758"})),(0,a.kt)("p",null,"\u6709\u90e8\u5206\u4eba\u5f88\u53ef\u80fd\u4f1a\u53d1\u73b0\u8fd9\u6bb5\u4ee3\u7801\u597d\u50cf\u548c ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"AutoProxyRegistrar"))," \u91cc\u9762\u7684\u4ee3\u7801\u76f8\u4f3c\u3002\u6ca1\u9519\u5c31\u662f\u5dee\u4e0d\u591a\u56e0\u4e3a\u90fd\u662f\u5229\u7528AOP\u6765\u5b9e\u73b0\u7684\u529f\u80fd\u3002\u8fd9\u91cc\u4e3b\u8981\u662f\u5728\u83b7\u53d6\u7c7b\u7684\u65f6\u5019\u81ea\u52a8\u521b\u5efa\u4ee3\u7406\u7c7b\u3002"),(0,a.kt)("h4",{id:"42-spel\u5b9e\u73b0\u89e3\u6790\u6a21\u677f"},"4.2 SpEL\u5b9e\u73b0\u89e3\u6790\u6a21\u677f"),(0,a.kt)("p",null,"\u6a21\u677f\u89e3\u6790\u4e3b\u8981\u662f\u7528\u4e86Spring SpEL\u8868\u8fbe\u5f0f\u6765\u5b9e\u73b0\u7684\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"C:%5CUsers%5Cmxsm%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20220205144154908.png",alt:"image-20220205144154908"})),(0,a.kt)("p",null,"\u6a21\u677f\u7684\u89e3\u6790\uff0c\u56e0\u4e3a\u8003\u8651\u5230\u6709\u53ef\u80fd\u662f\u5f02\u6b65\u7684\u60c5\u51b5\u6240\u4ee5\uff0c\u8fd9\u91cc\u62bd\u8c61\u4e86\u4e00\u4e2a ",(0,a.kt)("strong",{parentName:"p"},"LogWorker")," \u6765\u6267\u884c\u65e5\u5fd7\u89e3\u6790\u548c\u8bb0\u5f55\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"C:%5CUsers%5Cmxsm%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20220205144312893.png",alt:"image-20220205144312893"})),(0,a.kt)("p",null,"\u5728\u8fd9\u4e2a ",(0,a.kt)("strong",{parentName:"p"},"LogWorker#run")," \u65b9\u6cd5\u91cc\u5b9e\u73b0\u4e86\u6a21\u677f\u7684\u7ee9\u6548\u548c\u65e5\u5fd7\u7684\u8bb0\u5f55\u3002"),(0,a.kt)("h4",{id:"43-\u9519\u8bef\u5904\u7406"},"4.3 \u9519\u8bef\u5904\u7406"),(0,a.kt)("p",null,"\u5982\u4e0b\u4ee3\u7801\u6240\u793a\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"C:%5CUsers%5Cmxsm%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20220205144619676.png",alt:"image-20220205144619676"})),(0,a.kt)("p",null,"\u5982\u679c\u65e5\u5fd7\u89e3\u6790\u548c\u8bb0\u5f55\u9519\u8bef\u7684\u60c5\u51b5\u4e0b\u4e0d\u4f1a\u5f71\u54cd\u5230\u6574\u4e2a\u4e1a\u52a1\u7684\u6267\u884c\u3002"),(0,a.kt)("h3",{id:"5-\u6848\u4f8b\u6f14\u793a"},"5. \u6848\u4f8b\u6f14\u793a"),(0,a.kt)("p",null,"\u589e\u52a0maven\u4f9d\u8d56\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<dependency>\n    <groupId>com.github.mxsm</groupId>\n    <artifactId>mxsm-log</artifactId>\n    <version>1.0.0</version>\n</dependency>\n")),(0,a.kt)("p",null,"\u7f16\u5199\u6d4b\u8bd5\u7c7b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'@RestController\n@RequestMapping("/log")\npublic class AsyncController {\n\n    @Autowired\n    private Test test;\n\n    @PostMapping("/user")\n    public long currentTime1(@RequestParam(value = "name",required = false)String name,\n        @RequestBody User user){\n         test.addUser(user);\n        return System.currentTimeMillis();\n    }\n}\n\n@Component\npublic class Test {\n\n    public void test(){\n        System.out.println(1111);\n    }\n\n    @MxsmLog(template = "\u7528\u6237\u540d\u79f0${#user.name}\u4fe1\u606f\uff1a${@test.getName(#user)}")\n    public boolean addUser(User user){\n        return  true;\n    }\n\n    public String getName(User user){\n        return  user.getName();\n    }\n}\n')),(0,a.kt)("p",null,"\u542f\u52a8\u5f00\u59cb\u6d4b\u8bd5\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"C:%5CUsers%5Cmxsm%5CDesktop%5Cpic%5C%E8%87%AA%E5%AE%9A%E4%B9%89%E6%97%A5%E5%BF%97%E8%AE%B0%E5%BD%95%E6%B5%8B%E8%AF%95.gif",alt:"\u81ea\u5b9a\u4e49\u65e5\u5fd7\u8bb0\u5f55\u6d4b\u8bd5"})),(0,a.kt)("p",null,"\u4ece\u8fd9\u91cc\u53ef\u4ee5\u770b\u5230\u5df2\u7ecf\u53ef\u4ee5\u4f7f\u7528\u4e86"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Tips:  jar\u5305\u5df2\u7ecf\u53d1\u5e03\u5230maven\u4e2d\u592e\u4ed3\u5e93"),(0,a.kt)("p",{parentName:"blockquote"},"\u6e90\u7801\u5730\u5740\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mxsm/mxsm-log4j"},"https://github.com/mxsm/mxsm-log4j")),(0,a.kt)("p",{parentName:"blockquote"},"\u6d4b\u8bd5\u4ee3\u7801\u5730\u5740\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mxsm/spring-sample/tree/master/spring-boot"},"https://github.com/mxsm/spring-sample/tree/master/spring-boot"))),(0,a.kt)("h3",{id:"6-\u603b\u7ed3"},"6 \u603b\u7ed3"),(0,a.kt)("p",null,"\u8fd9\u4e2a\u53ea\u662f\u5b9e\u73b0\u4e86\u4e00\u4e2a\u521d\u6b65\u7684\u53ea\u80fd\u8bf4\u53ef\u4ee5\u7528\u3002\u540e\u7eed\u4f1a\u57fa\u4e8e\u8fd9\u4e2a\u5b9e\u73b0\u66f4\u591a\u7684\u529f\u80fd\u4ee5\u53ca\u4f18\u5316\u5176\u5b9e\u7528\u6027\u3002\u80fd\u591f\u76f4\u63a5\u7528\u4e8e\u751f\u4ea7\uff01"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u4e0d\u8db3\uff1a")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4f9d\u8d56\u7684Spring\u7684\u7248\u672c\u8f83\u9ad8\uff0c\u9700\u8981Spring5\u4ee5\u4e0a"),(0,a.kt)("li",{parentName:"ul"},"\u5f02\u6b65\u7684\u7ebf\u7a0b\u6c60\u914d\u7f6e\u6ca1\u6709\u7ed9\u5230\u7528\u6237\u81ea\u5b9a\u4e49")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6211\u662f\u8682\u8681\u80cc\u5927\u8c61\uff0c\u6587\u7ae0\u5bf9\u4f60\u6709\u5e2e\u52a9\u53ef\u4ee5\u70b9\u4e2a\u8d5e\u5173\u6ce8\uff0c\u5173\u6ce8\u6211\uff0c\u4f60\u7684\u70b9\u8d5e\u3001\u5173\u6ce8\u662f\u6211\u524d\u8fdb\u7684\u52a8\u529b\uff0c\u6587\u7ae0\u6709\u4e0d\u6b63\u786e\u7684\u5730\u65b9\u8bf7\u60a8\u65a7\u6b63\u7559\u8a00\u8bc4\u8bba~\u8c22\u8c22\uff01")))}g.isMDXComponent=!0}}]);