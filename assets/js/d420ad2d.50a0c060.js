"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[3925],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(n),g=o,d=u["".concat(s,".").concat(g)]||u[g]||m[g]||a;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=g;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[u]="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},4850:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={title:"\u57fa\u4e8eSpring AOP\u81ea\u5b9a\u4e49\u6ce8\u89e3",linkTitle:"\u57fa\u4e8eSpring AOP\u81ea\u5b9a\u4e49\u6ce8\u89e3",date:new Date("2022-01-21T00:00:00.000Z"),weight:202201212043},i=void 0,p={unversionedId:"spring/spring-framework/custom-component-extensions/spring-extend-aop-annotation",id:"spring/spring-framework/custom-component-extensions/spring-extend-aop-annotation",title:"\u57fa\u4e8eSpring AOP\u81ea\u5b9a\u4e49\u6ce8\u89e3",description:"Spring AOP\u5728Spring\u9879\u76ee\u4e2d\u6709\u4e86\u5f88\u591a\u81ea\u5df1\u7684\u5e94\u7528\uff0c\u4f8b\u5982@EnableAsync\u548c@Async\u5c31\u662fAOP\u7684\u4f53\u73b0\uff0c\u90a3\u4e48\u6211\u4eec\u5982\u4f55\u81ea\u5df1\u5728Spring AOP\u7684\u539f\u7406\u4e0b\u81ea\u5b9a\u4e49\u81ea\u5df1\u7684\u6ce8\u89e3\u3002",source:"@site/docs/spring/spring-framework/custom-component-extensions/spring-extend-aop-annotation.md",sourceDirName:"spring/spring-framework/custom-component-extensions",slug:"/spring/spring-framework/custom-component-extensions/spring-extend-aop-annotation",permalink:"/docs/spring/spring-framework/custom-component-extensions/spring-extend-aop-annotation",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/spring/spring-framework/custom-component-extensions/spring-extend-aop-annotation.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1683078484,formattedLastUpdatedAt:"May 3, 2023",frontMatter:{title:"\u57fa\u4e8eSpring AOP\u81ea\u5b9a\u4e49\u6ce8\u89e3",linkTitle:"\u57fa\u4e8eSpring AOP\u81ea\u5b9a\u4e49\u6ce8\u89e3",date:"2022-01-21T00:00:00.000Z",weight:202201212043},sidebar:"springframework",previous:{title:"Spring\u5982\u4f55\u89e3\u6790\u81ea\u5b9a\u4e49xml\u7684\u6e90\u7801\u89e3\u6790",permalink:"/docs/spring/spring-framework/custom-component-extensions/spring-customxml-source-analysis"},next:{title:"\u5982\u4f55\u81ea\u5b9a\u4e49Spring Enable\u6ce8\u89e3",permalink:"/docs/spring/spring-framework/custom-component-extensions/spring-extend-enable-annotation"}},s={},l=[{value:"1. \u57fa\u4e8eSpring AOP\u81ea\u5b9a\u4e49\u6ce8\u89e3\u539f\u7406",id:"1-\u57fa\u4e8espring-aop\u81ea\u5b9a\u4e49\u6ce8\u89e3\u539f\u7406",level:3},{value:"2. \u4ee3\u7801\u5b9e\u6218",id:"2-\u4ee3\u7801\u5b9e\u6218",level:3},{value:"2.1 \u5b9a\u4e49@Enable\u6ce8\u89e3",id:"21-\u5b9a\u4e49enable\u6ce8\u89e3",level:4},{value:"2.2 \u5b9a\u4e49\u5207\u9762\u6ce8\u89e3",id:"22-\u5b9a\u4e49\u5207\u9762\u6ce8\u89e3",level:4},{value:"2.3 \u5b9e\u73b0AOP\u7684\u4e09\u4e2a\u63a5\u53e3",id:"23-\u5b9e\u73b0aop\u7684\u4e09\u4e2a\u63a5\u53e3",level:4},{value:"2.4 \u4f7f\u7528\u5207\u9762\u6ce8\u89e3\u5728\u9700\u8981\u7684\u65b9\u6cd5(\u7c7b)",id:"24-\u4f7f\u7528\u5207\u9762\u6ce8\u89e3\u5728\u9700\u8981\u7684\u65b9\u6cd5\u7c7b",level:4},{value:"3. \u603b\u7ed3",id:"3-\u603b\u7ed3",level:3}],c={toc:l},u="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Spring AOP\u5728Spring\u9879\u76ee\u4e2d\u6709\u4e86\u5f88\u591a\u81ea\u5df1\u7684\u5e94\u7528\uff0c\u4f8b\u5982@EnableAsync\u548c@Async\u5c31\u662fAOP\u7684\u4f53\u73b0\uff0c\u90a3\u4e48\u6211\u4eec\u5982\u4f55\u81ea\u5df1\u5728Spring AOP\u7684\u539f\u7406\u4e0b\u81ea\u5b9a\u4e49\u81ea\u5df1\u7684\u6ce8\u89e3\u3002"),(0,o.kt)("h3",{id:"1-\u57fa\u4e8espring-aop\u81ea\u5b9a\u4e49\u6ce8\u89e3\u539f\u7406"},"1. \u57fa\u4e8eSpring AOP\u81ea\u5b9a\u4e49\u6ce8\u89e3\u539f\u7406"),(0,o.kt)("p",null,"Spring AOP\u57fa\u4e8e\u52a8\u6001\u4ee3\u7406\u6765\u5b9e\u73b0\uff0c\u9ed8\u8ba4\u5982\u679c\u4f7f\u7528\u63a5\u53e3\u7684\uff0c\u7528JDK\u63d0\u4f9b\u7684\u52a8\u6001\u4ee3\u7406\u5b9e\u73b0\uff0c\u5982\u679c\u662f\u7c7b\u5219\u4f7f\u7528CGLIB\u5b9e\u73b0\u3002\u901a\u8fc7@EnableAspectJAutoProxy\u5f00\u542fAOP\uff08\u540c\u65f6\u5f00\u542f\u5bf9AspectJ\u7684\u652f\u6301\uff09\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/spring/custom/%E5%9F%BA%E4%BA%8EAOP%E6%B3%A8%E8%A7%A3%E8%87%AA%E5%AE%9A%E4%B9%89.png",alt:"\u57fa\u4e8eAOP\u6ce8\u89e3\u81ea\u5b9a\u4e49"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"@EnableAspectJAutoProxy\u542f\u52a8Spring AOP"),(0,o.kt)("li",{parentName:"ul"},"Spring AOP\u5206\u4e3a\u4e24\u79cd\u5b9e\u73b0\uff1a",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u57fa\u4e8eAspectJ\u6ce8\u89e3"),(0,o.kt)("li",{parentName:"ul"},"\u57fa\u4e8eSpring AOP\u601d\u60f3\uff0c\u4e5f\u5c31\u662f",(0,o.kt)("strong",{parentName:"li"},"Advice")," \u3001 ",(0,o.kt)("strong",{parentName:"li"},"Pointcut")," \u3001 ",(0,o.kt)("strong",{parentName:"li"},"Advisor")," \u8fd9\u4e2a\u4e09\u4e2a\uff0c\u5bf9\u5e94MethodInterceptor\u3001AbstractBeanFactoryPointcutAdvisor\u3001StaticMethodMatcherPointcut \u4e09\u4e2a\u7c7b\u3002"))),(0,o.kt)("li",{parentName:"ul"},"\u5728Spring\u5bb9\u5668\u542f\u52a8\u540e\u751f\u6210\u5bf9\u5e94\u7684\u4ee3\u7406\u7c7b\uff0c\u5728\u6267\u884c\u65b9\u6cd5\u7684\u65f6\u5019\u6839\u636e\u5207\u9762\u6765\u6267\u884c\u5bf9\u5e94\u7684\u65b9\u6cd5")),(0,o.kt)("h3",{id:"2-\u4ee3\u7801\u5b9e\u6218"},"2. \u4ee3\u7801\u5b9e\u6218"),(0,o.kt)("p",null,"\u5c06@Enable\u7c7b\u578b\u7684\u6ce8\u89e3\u4e0eAOP\u62d3\u5c55\u7684\u63a5\u53e3\u76f8\u7ed3\u5408\u5b8c\u6210\u4e00\u4e2a\u5b8c\u6574\u7684\u529f\u80fd\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/spring/custom/%E5%9F%BA%E4%BA%8EAOP%E6%B3%A8%E8%A7%A3%E8%87%AA%E5%AE%9A%E4%B9%89%E6%AD%A5%E9%AA%A4.png",alt:"\u57fa\u4e8eAOP\u6ce8\u89e3\u81ea\u5b9a\u4e49\u6b65\u9aa4"})),(0,o.kt)("h4",{id:"21-\u5b9a\u4e49enable\u6ce8\u89e3"},"2.1 \u5b9a\u4e49@Enable\u6ce8\u89e3"),(0,o.kt)("p",null,"\u7ed3\u5408\u4e0a\u4e00\u7bc7\u6587\u7ae0\u300a",(0,o.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7055288159042535460"},"\u5982\u4f55\u81ea\u5b9a\u4e49Spring Enable\u6ce8\u89e3"),"\u300b\u7684@EnableLog\u7684\u529f\u80fd"),(0,o.kt)("h4",{id:"22-\u5b9a\u4e49\u5207\u9762\u6ce8\u89e3"},"2.2 \u5b9a\u4e49\u5207\u9762\u6ce8\u89e3"),(0,o.kt)("p",null,"\u5b9a\u4e49\u4e00\u4e2a@Log\u6ce8\u89e3\uff0c\u529f\u80fd\uff1a\u7528\u6765\u8bb0\u5f55\u65e5\u5fd7"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'@Documented\n@Target({ElementType.METHOD})\n@Retention(RetentionPolicy.RUNTIME)\n@Inherited\npublic @interface Log {\n\n    /**\n     * log template\n     * @return\n     */\n    String template() default "";\n    \n}\n')),(0,o.kt)("h4",{id:"23-\u5b9e\u73b0aop\u7684\u4e09\u4e2a\u63a5\u53e3"},"2.3 \u5b9e\u73b0AOP\u7684\u4e09\u4e2a\u63a5\u53e3"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"MethodInterceptor")," \u662f\u52a8\u6001\u7c7b\u7684\u65b9\u6cd5\u62e6\u622a\u5668\uff0c\u7528\u6765\u62e6\u622a\u6267\u884c\u65b9\u6cd5\u3002\u8fd9\u91cc\u5c31\u662fAOP\u52a8\u6001\u7c7b\u7684\u589e\u5f3a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'public class LogAdvice implements MethodInterceptor, BeanFactoryAware {\n    \n    //\u7701\u7565\u4e86\u90e8\u5206\u4ee3\u7801\n    \n    @Override\n    public Object invoke(MethodInvocation invocation) throws Throwable {\n\n        Method method = invocation.getMethod();\n\n        return execute(invocation, invocation.getThis(), method, invocation.getArguments());\n    }\n\n    private Object execute(MethodInvocation invoker, Object target, Method method, Object[] args) throws Throwable {\n\n        try {\n            LogWorker worker = new LogWorker(target, method, args);\n            if (this.async) {\n                logExecutor.submit(worker);\n            } else {\n                worker.run();\n            }\n        } catch (Exception e) {\n            //e.printStackTrace();\n            logger.warn("Failure to record logs!", e);\n        }\n\n        return invoker.proceed();\n    }\n}\n')),(0,o.kt)("p",null,"\u4e3b\u8981\u662f\u5b9e\u73b0 ",(0,o.kt)("strong",{parentName:"p"},"invoke")," \u65b9\u6cd5\uff0c\u8fd9\u91cc\u5b9e\u73b0\u4e86\u65e5\u5fd7\u8bb0\u5f55\u7684\u65b9\u6cd5\u3002\u548c\u8c03\u7528\u76ee\u6807\u7c7b\u7684\u8fd4\u56de\u6267\u884c\u7ed3\u679c\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"StaticMethodMatcherPointcut")," \u5207\u5165\u70b9\u7684\u5b9e\u73b0\u7c7b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"public class LogPointcut extends StaticMethodMatcherPointcut{\n\n    @Override\n    public boolean matches(Method method, Class<?> targetClass) {\n        return AnnotatedElementUtils.hasAnnotation(method, Log.class);\n    }\n}\n")),(0,o.kt)("p",null,"\u8fd9\u91cc\u51b3\u5b9a\u4e86\u5207\u5165\u70b9\uff0c\u4ee3\u7801\u8868\u793a\u4e86\u5f53\u65b9\u6cd5\u88ab\u6ce8\u89e3@Log\u6807\u6ce8\u4e86\u5c31\u662f\u5339\u914d\u5230\u4e86\u5207\u5165\u70b9"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"AbstractBeanFactoryPointcutAdvisor")," \uff1a\u901a\u77e5\u5668\u7528\u6765\u7ec4\u7ec7 Advice \u548c Pointcut"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"public class LogAdvisor extends AbstractBeanFactoryPointcutAdvisor{\n\n    private Pointcut logPointcut;\n\n    public LogAdvisor(Pointcut logPointcut) {\n        this.logPointcut = logPointcut;\n    }\n\n    /**\n     * Get the Pointcut that drives this advisor.\n     */\n    @Override\n    public Pointcut getPointcut() {\n        return this.logPointcut;\n    }\n}\n")),(0,o.kt)("p",null,"\u8fd9\u4e09\u4e2a\u63a5\u53e3\u5b9e\u73b0\u540e\u628a ",(0,o.kt)("strong",{parentName:"p"},"Advice")," \u3001 ",(0,o.kt)("strong",{parentName:"p"},"Pointcut")," \u3001 ",(0,o.kt)("strong",{parentName:"p"},"Advisor"),"  \u4e09\u8005\u7ec4\u7ec7\u8d77\u6765\uff0c\u7136\u540e\u6ce8\u518c\u5230Spring IOC\u5bb9\u5668\u3002"),(0,o.kt)("h4",{id:"24-\u4f7f\u7528\u5207\u9762\u6ce8\u89e3\u5728\u9700\u8981\u7684\u65b9\u6cd5\u7c7b"},"2.4 \u4f7f\u7528\u5207\u9762\u6ce8\u89e3\u5728\u9700\u8981\u7684\u65b9\u6cd5(\u7c7b)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'@SpringBootApplication\n@EnableLog\npublic class Application {\n    public static void main(String[] args) {\n        SpringApplication.run(Application.class,args);\n    }\n}\n\n@Component\npublic class Test {\n    public void test(){\n        System.out.println(1111);\n    }\n    @Log(template = "\u7528\u6237${#user.name}\u4fe1\u606f\uff1a${@test.getName(#user)}")\n    public boolean addUser(User user){\n\n        return  true;\n    }\n    public String getName(User user){\n\n        return  user.getName();\n    }\n}\n')),(0,o.kt)("p",null,"\u9996\u5148\u5728SpringBoot\u542f\u52a8\u7c7b\u4e0a\u52a0\u5165 ",(0,o.kt)("strong",{parentName:"p"},"@EnableLog")," \u7136\u540e\u5728\u9700\u8981\u8bb0\u5f55\u7684\u7c7b\u7684\u65b9\u6cd5\u4e0a\u52a0\u4e0a ",(0,o.kt)("strong",{parentName:"p"},"@Log")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"AOP\u6ce8\u89e3\u5b9a\u4e49\u4ee3\u7801\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mxsm/mxsm-log4j"},"https://github.com/mxsm/mxsm-log4j")),(0,o.kt)("p",{parentName:"blockquote"},"\u6d4b\u8bd5\u4ee3\u7801\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mxsm/spring-sample/tree/spring-5.3.x/spring-boot"},"https://github.com/mxsm/spring-sample/tree/spring-5.3.x/spring-boot"))),(0,o.kt)("p",null,"\u8fd9\u91cc\u662f\u57fa\u4e8eSpring AOP\u63a5\u53e3\u6765\u5b9e\u73b0\u81ea\u5b9a\u4e49\u63a5\u53e3\u7684\u529f\u80fd\u5b9e\u73b0\uff0c\u5728Spring\u4e2d\u8fd8\u6709\u53ef\u4ee5\u6839\u636eAspectJ\u6ce8\u89e3\u6765\u5b9e\u73b0\u3002\u8fd9\u91cc\u5c31\u4e0d\u8be6\u7ec6\u8bb2\u89e3\u3002\u60f3\u8981\u4e86\u89e3\u7684\u540c\u5b66\u53ef\u4ee5\u5728",(0,o.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring-framework/docs/current/reference/html/core.html#aop"},"Spring\u5b98\u7f51 AOP")," \u7684 ",(0,o.kt)("strong",{parentName:"p"},"Aspect Oriented Programming with Spring")," \u7ae0\u8282\u67e5\u770b\u3002\u6240\u4ee5\u57fa\u4e8eSpring AOP\u7684\u6ce8\u89e3\u5b9a\u4e49\u5c31\u6709\u4e24\u79cd\u65b9\u5f0f\u3002"),(0,o.kt)("h3",{id:"3-\u603b\u7ed3"},"3. \u603b\u7ed3"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u57fa\u4e8eAspectJ\u7684\u5b9a\u4e49\u5b9e\u73b0\u6bd4\u8f83\u7b80\u5355\uff0c\u65e0\u9700\u642d\u914d\u81ea\u5b9a\u4e49\u7684@Enablexxx\u6ce8\u89e3\u4f7f\u7528\uff0c\u53ea\u9700\u8981\u7528@EnableAspectJAutoProxy(\u5b8c\u6210\u4e86\u6211\u4eec\u81ea\u5b9a\u4e49@Enablexxx\u7684\u6ce8\u89e3)\u5f00\u542fAOP\u5373\u53ef\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u57fa\u4e8eSpring AOP\u5b9a\u4e49\u6ce8\u89e3\u5e95\u5c42\u662f\u57fa\u4e8e\u52a8\u6001\u4ee3\u7406\u3002Spring\u52a8\u6001\u4ee3\u7406\u53ef\u4ee5\u9009\u62e9JDK\u6216\u8005Cglib")))}m.isMDXComponent=!0}}]);