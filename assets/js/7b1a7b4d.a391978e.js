"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[2750],{3905:(n,t,e)=>{e.d(t,{Zo:()=>p,kt:()=>d});var a=e(7294);function r(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function i(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,a)}return e}function o(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?i(Object(e),!0).forEach((function(t){r(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function s(n,t){if(null==n)return{};var e,a,r=function(n,t){if(null==n)return{};var e,a,r={},i=Object.keys(n);for(a=0;a<i.length;a++)e=i[a],t.indexOf(e)>=0||(r[e]=n[e]);return r}(n,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(a=0;a<i.length;a++)e=i[a],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(r[e]=n[e])}return r}var l=a.createContext({}),c=function(n){var t=a.useContext(l),e=t;return n&&(e="function"==typeof n?n(t):o(o({},t),n)),e},p=function(n){var t=c(n.components);return a.createElement(l.Provider,{value:t},n.children)},u="mdxType",g={inlineCode:"code",wrapper:function(n){var t=n.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(n,t){var e=n.components,r=n.mdxType,i=n.originalType,l=n.parentName,p=s(n,["components","mdxType","originalType","parentName"]),u=c(e),m=r,d=u["".concat(l,".").concat(m)]||u[m]||g[m]||i;return e?a.createElement(d,o(o({ref:t},p),{},{components:e})):a.createElement(d,o({ref:t},p))}));function d(n,t){var e=arguments,r=t&&t.mdxType;if("string"==typeof n||r){var i=e.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=n,s[u]="string"==typeof n?n:r,o[1]=s;for(var c=2;c<i;c++)o[c]=e[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,e)}m.displayName="MDXCreateElement"},8792:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=e(7462),r=(e(7294),e(3905));const i={title:"Spring AOP\u5e94\u7528\u4e4bSpring\u4e8b\u52a1\u7ba1\u7406",linkTitle:"Spring AOP\u5e94\u7528\u4e4bSpring\u4e8b\u52a1\u7ba1\u7406",date:new Date("2021-12-11T00:00:00.000Z"),weight:202112111507},o=void 0,s={unversionedId:"spring/spring-framework/aop-source-analysis/spring-aop-transaction-management",id:"spring/spring-framework/aop-source-analysis/spring-aop-transaction-management",title:"Spring AOP\u5e94\u7528\u4e4bSpring\u4e8b\u52a1\u7ba1\u7406",description:"Spring framework\u7248\u672c 5.3.x",source:"@site/docs/spring/spring-framework/aop-source-analysis/spring-aop-transaction-management.md",sourceDirName:"spring/spring-framework/aop-source-analysis",slug:"/spring/spring-framework/aop-source-analysis/spring-aop-transaction-management",permalink:"/docs/spring/spring-framework/aop-source-analysis/spring-aop-transaction-management",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/spring/spring-framework/aop-source-analysis/spring-aop-transaction-management.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1684027896,formattedLastUpdatedAt:"May 14, 2023",frontMatter:{title:"Spring AOP\u5e94\u7528\u4e4bSpring\u4e8b\u52a1\u7ba1\u7406",linkTitle:"Spring AOP\u5e94\u7528\u4e4bSpring\u4e8b\u52a1\u7ba1\u7406",date:"2021-12-11T00:00:00.000Z",weight:202112111507},sidebar:"springframework",previous:{title:"Spring AOP\u5e94\u7528\u4e4bEnableAsync",permalink:"/docs/spring/spring-framework/aop-source-analysis/spring-aop-enableasync"},next:{title:"Spring\u4f9d\u8d56\u6ce8\u5165\u65f6\uff0c\u4ec0\u4e48\u65f6\u5019\u4f1a\u521b\u5efa\u4ee3\u7406\u7c7b",permalink:"/docs/spring/spring-framework/aop-source-analysis/when-create-proxy"}},l={},c=[{value:"1. \u6838\u5fc3\u5bf9\u8c61\u7684\u5173\u7cfb",id:"1-\u6838\u5fc3\u5bf9\u8c61\u7684\u5173\u7cfb",level:3},{value:"2. \u6ce8\u89e3\u4e8b\u52a1\u8fd0\u884c\u6d41\u7a0b",id:"2-\u6ce8\u89e3\u4e8b\u52a1\u8fd0\u884c\u6d41\u7a0b",level:3},{value:"3. \u6e90\u7801\u89e3\u6790",id:"3-\u6e90\u7801\u89e3\u6790",level:3},{value:"3.1 TransactionAttributeSource \u6e90\u7801\u89e3\u6790",id:"31-transactionattributesource-\u6e90\u7801\u89e3\u6790",level:4},{value:"3.2 TransactionInterceptor\u6e90\u7801\u89e3\u6790",id:"32-transactioninterceptor\u6e90\u7801\u89e3\u6790",level:4},{value:"3.3 BeanFactoryTransactionAttributeSourceAdvisor\u6e90\u7801\u89e3\u6790",id:"33-beanfactorytransactionattributesourceadvisor\u6e90\u7801\u89e3\u6790",level:4},{value:"4. \u603b\u7ed3",id:"4-\u603b\u7ed3",level:3}],p={toc:c},u="wrapper";function g(n){let{components:t,...e}=n;return(0,r.kt)(u,(0,a.Z)({},p,e,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Spring framework\u7248\u672c 5.3.x")),(0,r.kt)("h3",{id:"1-\u6838\u5fc3\u5bf9\u8c61\u7684\u5173\u7cfb"},"1. \u6838\u5fc3\u5bf9\u8c61\u7684\u5173\u7cfb"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/mxsm/picture/blob/main/spring/aop/%E4%BA%8B%E5%8A%A1%E7%9B%B8%E5%85%B3%E7%B1%BB%E7%9A%84%E5%8A%9F%E8%83%BD%E5%9B%BE.png?raw=true",alt:"//tu"})),(0,r.kt)("p",null,"\u5982\u4e0a\u56fe\u53ef\u4ee5\u770b\u51fa\u6765\u6ce8\u89e3 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"@EnableTransactionManagement"))," \u8d1f\u8d23\u5f00\u542f\u4e8b\u52a1\u7ba1\u7406\uff0c\u7136\u540e\u901a\u8fc7 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"TransactionManagementConfigurationSelector"))," \u6ce8\u5165\u4e0b\u9762\u4e24\u4e2a\u7c7b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"AutoProxyRegistrar"),(0,r.kt)("p",{parentName:"li"},"\u8d1f\u8d23\u521b\u5efa\u4ee3\u7406\u7c7b")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"ProxyTransactionManagementConfiguration"),(0,r.kt)("p",{parentName:"li"},"\u8d1f\u8d23\u521b\u5efa\u4e8b\u52a1\u7ba1\u7406\u7684\u903b\u8f91(Spring AOP)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"BeanFactoryTransactionAttributeSourceAdvisor"),(0,r.kt)("p",{parentName:"li"},"Spring AOP\u4e2d\u7684Advisor")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"TransactionAttributeSource"),(0,r.kt)("p",{parentName:"li"},"Spring AOP\u4e2d\u7684Pointcut")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"TransactionInterceptor"),(0,r.kt)("p",{parentName:"li"},"Spring AOP\u4e2d\u7684advice"))))),(0,r.kt)("p",null,"\u8fd9\u6837\u5c31\u80fd\u770b\u5f97\u51fa\u6765\u4e8b\u52a1\u7ba1\u7406\u5176\u5b9e\u5c31\u662fSpring AOP\u7684\u4e00\u4e2a\u5e94\u7528\u5b9e\u73b0\u3002"),(0,r.kt)("h3",{id:"2-\u6ce8\u89e3\u4e8b\u52a1\u8fd0\u884c\u6d41\u7a0b"},"2. \u6ce8\u89e3\u4e8b\u52a1\u8fd0\u884c\u6d41\u7a0b"),(0,r.kt)("p",null,"Spring\u6ce8\u89e3\u4e8b\u52a1\u7ba1\u7406\u8fd0\u884c\u6d41\u7a0b\u56fe\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/mxsm/picture/blob/main/spring/aop/%E4%BA%8B%E5%8A%A1%E5%90%AF%E5%8A%A8%E6%89%A7%E8%A1%8C%E6%B5%81%E7%A8%8B.png?raw=true",alt:null})),(0,r.kt)("h3",{id:"3-\u6e90\u7801\u89e3\u6790"},"3. \u6e90\u7801\u89e3\u6790"),(0,r.kt)("p",null,"\u6e90\u7801\u4ece\u4e8b\u52a1\u7ba1\u7406AOP\u7684\u4e09\u4e2a\u7ec4\u4ef6\u6765\u5206\u6790\uff0c\u4e0b\u9762\u5c31\u4f1a\u5206\u522b\u662f\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[TransactionAttributeSource (Poincut)]","(#3.1 TransactionAttributeSource \u6e90\u7801\u89e3\u6790)"),(0,r.kt)("li",{parentName:"ul"},"[TransactionInterceptor(Advice)]","(#3.2 TransactionInterceptor\u6e90\u7801\u89e3\u6790)"),(0,r.kt)("li",{parentName:"ul"},"BeanFactoryTransactionAttributeSourceAdvisor(Advisor)")),(0,r.kt)("h4",{id:"31-transactionattributesource-\u6e90\u7801\u89e3\u6790"},"3.1 TransactionAttributeSource \u6e90\u7801\u89e3\u6790"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public class AnnotationTransactionAttributeSource extends AbstractFallbackTransactionAttributeSource\n        implements Serializable {\n    \n    private final boolean publicMethodsOnly;\n    \n    //\u7701\u7565\u4ee3\u7801\n    public AnnotationTransactionAttributeSource() {\n        this(true);\n    }\n    \n    public AnnotationTransactionAttributeSource(boolean publicMethodsOnly) {\n        this.publicMethodsOnly = publicMethodsOnly;\n        if (jta12Present || ejb3Present) {\n            this.annotationParsers = new LinkedHashSet<>(4);\n            this.annotationParsers.add(new SpringTransactionAnnotationParser());\n            if (jta12Present) {\n                this.annotationParsers.add(new JtaTransactionAnnotationParser());\n            }\n            if (ejb3Present) {\n                this.annotationParsers.add(new Ejb3TransactionAnnotationParser());\n            }\n        }\n        else {\n            this.annotationParsers = Collections.singleton(new SpringTransactionAnnotationParser());\n        }\n    }\n}\n")),(0,r.kt)("p",null,"\u67e5\u770b ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"ProxyTransactionManagementConfiguration"))," \u521b\u5efa ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"AnnotationTransactionAttributeSource"))," \u662f\u4f7f\u7528\u7684\u65e0\u53c2\u6784\u9020\u51fd\u6570\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Tips: \u8fd9\u91cc\u8c03\u7528\u7684\u662fAnnotationTransactionAttributeSource(boolean publicMethodsOnly) \u6784\u9020\u51fd\u6570\u3002\u8fd9\u91cc\u4e5f\u5c31\u662f\u4e8b\u52a1\u7ba1\u7406\u53ea\u80fd\u5904\u7406public\u65b9\u6cd5")),(0,r.kt)("p",null,"\u91cc\u9762\u6700\u91cd\u8981\u7684\u7c7b\u5c31\u662f ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"SpringTransactionAnnotationParser"))," \u6ce8\u91ca\u89e3\u6790\u7c7b\uff0c\u5176\u4ed6\u4e24\u4e2a\u662f\u4e3a\u4e86\u652f\u6301java\u7684\u5176\u4ed6\u89c4\u8303\u3002\u4e3b\u8981\u7684\u4f5c\u7528\u5c31\u662f\u7528\u6765\u5224\u65ad\u5f53\u524d\u6267\u884c\u7684\u65b9\u6cd5\u6216\u8005\u7c7b\u662f\u5426\u5305\u542b ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"@javax.transaction.Transactional\uff0c@javax.ejb.TransactionAttribute\uff0c @org.springframework.transaction.annotation.Transactional"))," \u6ce8\u89e3\u3002"),(0,r.kt)("p",null,"\u770b\u5230\u8fd9\u91cc\u5c31\u4f1a\u6709\u4eba\u95ee\u4e86\u4e0d\u662f\u8bf4\u597d\u7684 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"TransactionAttributeSource"))," \u76f8\u5f53\u4e8e ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Pointcut"))," \u4e5f\u6ca1\u7528\u770b\u5230\u5b9e\u73b0\u4e86  ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Pointcut"))," \u63a5\u53e3\u3002\u522b\u6025\u4e0b\u9762\u6765\u770b\u4e00\u4e0b ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"ProxyTransactionManagementConfiguration"))," \u7c7b\u4e2d\u6709\u8fd9\u6837\u7684\u4e00\u6bb5\u4ee3\u7801\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'    @Bean(name = TransactionManagementConfigUtils.TRANSACTION_ADVISOR_BEAN_NAME)\n    @Role(BeanDefinition.ROLE_INFRASTRUCTURE)\n    public BeanFactoryTransactionAttributeSourceAdvisor transactionAdvisor(\n            TransactionAttributeSource transactionAttributeSource, TransactionInterceptor transactionInterceptor) {\n\n        BeanFactoryTransactionAttributeSourceAdvisor advisor = new BeanFactoryTransactionAttributeSourceAdvisor();\n        advisor.setTransactionAttributeSource(transactionAttributeSource);\n        advisor.setAdvice(transactionInterceptor);\n        if (this.enableTx != null) {\n            advisor.setOrder(this.enableTx.<Integer>getNumber("order"));\n        }\n        return advisor;\n    }\n')),(0,r.kt)("p",null,"\u5c06 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"TransactionAttributeSource"))," \u7684\u5b9e\u73b0\u7c7b\u8bbe\u7f6e\u4e3a ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"BeanFactoryTransactionAttributeSourceAdvisor"))," \u7684\u4e00\u4e2a\u5c5e\u6027\u3002(\u8fd9\u91cc\u5176\u5b9e\u5c31\u662fAnnotationTransactionAttributeSource\u7684\u5b9e\u4f8b)\u3002\u4e0b\u9762\u770b\u4e00\u4e0b ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"BeanFactoryTransactionAttributeSourceAdvisor"))," \u7c7b\u91cc\u9762\u6709\u8fd9\u6837\u7684\u4e00\u6bb5\u4ee3\u7801\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"    private final TransactionAttributeSourcePointcut pointcut = new TransactionAttributeSourcePointcut() {\n        @Override\n        @Nullable\n        protected TransactionAttributeSource getTransactionAttributeSource() {\n            return transactionAttributeSource;\n        }\n    };\n")),(0,r.kt)("p",null,"\u8fd9\u4e0d\u5c31\u53d8\u6210\u4e86 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Pointcut"))," \u4e86\u3002\u4e0d\u662f\u76f4\u63a5\u7ee7\u627f\u4e86\u63a5\u53e3 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Pointcut"))," \u800c\u662f\u901a\u8fc7\u4e0a\u9762\u4ee3\u7801\u7684\u65b9\u5f0f\u95f4\u63a5\u7684\u53d8\u6210Poincut\u3002\u770b\u4e00\u4e0b",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"TransactionAttributeSourcePointcut"))," \u4ee3\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"abstract class TransactionAttributeSourcePointcut extends StaticMethodMatcherPointcut implements Serializable {\n    //\u7701\u7565\u4ee3\u7801\n}\n")),(0,r.kt)("p",null,"\u901a\u8fc7\u5305\u88c5\u4e86 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"AnnotationTransactionAttributeSource"))," \u53d8\u6210 Pointcut"),(0,r.kt)("h4",{id:"32-transactioninterceptor\u6e90\u7801\u89e3\u6790"},"3.2 TransactionInterceptor\u6e90\u7801\u89e3\u6790"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public class TransactionInterceptor extends TransactionAspectSupport implements MethodInterceptor, Serializable {\n    //\u7701\u7565\u4ee3\u7801\n}\n")),(0,r.kt)("p",null,"\u4ece\u4e0a\u9762\u53ef\u4ee5\u770b\u5230\u5b9e\u73b0\u4e86\u63a5\u53e3 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"MethodInterceptor"))," \uff0c\u90a3\u4e48\u4e3b\u8981\u7684\u903b\u8f91\u5c31\u5728 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"MethodInterceptor#invoke"))," \u65b9\u6cd5\u4e2d\u3002 TransactionInterceptor\u5b9e\u73b0\u4e86 invoke \u63a5\u53e3\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"@Override\n@Nullable\npublic Object invoke(MethodInvocation invocation) throws Throwable {\n    //\u83b7\u53d6\u5230\u76ee\u6807\u7c7b\n    Class<?> targetClass = (invocation.getThis() != null ? AopUtils.getTargetClass(invocation.getThis()) : null);\n\n    // Adapt to TransactionAspectSupport's invokeWithinTransaction...\n    return invokeWithinTransaction(invocation.getMethod(), targetClass, new CoroutinesInvocationCallback() {\n        @Override\n        @Nullable\n        public Object proceedWithInvocation() throws Throwable {\n            return invocation.proceed();\n        }\n        @Override\n        public Object getTarget() {\n            return invocation.getThis();\n        }\n        @Override\n        public Object[] getArguments() {\n            return invocation.getArguments();\n        }\n    });\n}\n")),(0,r.kt)("p",null,"\u627e\u5230\u8c03\u7528\u7684\u76ee\u6807\u7c7b\uff0c\u7136\u540e\u8c03\u7528 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"TransactionAspectSupport"))," \u7c7b\u7684 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"invokeWithinTransaction"))," \u65b9\u6cd5\u3002 \u8fd9\u4e2a\u65b9\u6cd5\u4e5f\u662f\u4e3b\u8981\u7684\u5904\u7406\u903b\u8f91\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/mxsm/picture/blob/main/spring/aop/TransactionAspectSupport%23invokeWithinTransaction%E6%89%A7%E8%A1%8C%E6%B5%81%E7%A8%8B.png?raw=true",alt:null})),(0,r.kt)("p",null,"\u6839\u636e ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"TransactionAttributeSource"))," \u6765\u51b3\u5b9a\u4f7f\u7528 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"ReactiveTransactionManager"))," \u8fd8\u662f  ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"PlatformTransactionManager"))," \uff08\u8fd9\u91cc\u53ea\u5206\u6790PlatformTransactionManager\uff09\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"TransactionInfo txInfo = createTransactionIfNecessary(ptm, txAttr, joinpointIdentification);\n")),(0,r.kt)("p",null,"\u6839\u636e PlatformTransactionManager\uff0cTransactionAttributeSource\u548c\u5207\u5165\u70b9\u65b9\u6cd5\u53bb\u5904\u7406\u4e8b\u52a1\u7ba1\u7406\u5982\u4f55\u521b\u5efa\uff0c\u4e0b\u9762\u770b\u4e00\u4e0b TransactionAspectSupport#createTransactionIfNecessary\u65b9\u6cd5\uff0c\u91cc\u9762\u6709\u4e00\u6bb5\u4ee3\u7801\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"    protected TransactionInfo createTransactionIfNecessary(@Nullable PlatformTransactionManager tm,\n            @Nullable TransactionAttribute txAttr, final String joinpointIdentification) {\n        //\u7701\u7565\u90e8\u5206\u4ee3\u7801\n        TransactionStatus status = null;\n        if (txAttr != null) {\n            if (tm != null) {\n                //\u8fd9\u6bb5\u4ee3\u7801\n                status = tm.getTransaction(txAttr);\n            }\n            else {\n                \n            }\n        }\n        return prepareTransactionInfo(tm, txAttr, joinpointIdentification, status);\n    }\n")),(0,r.kt)("p",null,"\u4e8b\u52a1\u7ba1\u7406\u5668\u6839\u636e ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"TransactionAttributeSource"))," \u83b7\u53d6\u4e8b\u52a1\u72b6\u6001 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"TransactionStatus"))," \u3002  "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"status = tm.getTransaction(txAttr)"))," \u8fd9\u6bb5\u4ee3\u7801\u91cc\u9762\u8bf4\u660e\u4e86\u6839\u636e\u6ce8\u89e3 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"@Transactional"))," \u5f53\u4e2d\u7684\u5c5e\u6027\u5982\u4f55\u521b\u5efa\u4e8b\u52a1\uff0c\u6700\u597d\u5305\u88c5\u6210  ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"TransactionStatus"))," \u3002\u4e0b\u9762\u6765\u5206\u6790\u8fd9\u4e00\u6bb5\u4ee3\u7801\uff0c\u7531 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"AbstractPlatformTransactionManager"))," \u5b9e\u73b0\u4e86\u65b9\u6cd5  ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"getTransaction"))," \u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'    @Override\n    public final TransactionStatus getTransaction(@Nullable TransactionDefinition definition)\n            throws TransactionException {\n\n        // \u6ca1\u6709\u4e8b\u52a1\u5b9a\u4e49\u7ed9\u51fa\u5c31\u4f7f\u7528\u9ed8\u8ba4\u7684\n        TransactionDefinition def = (definition != null ? definition : TransactionDefinition.withDefaults());\n\n        //\u83b7\u53d6\u4e8b\u52a1\n        Object transaction = doGetTransaction();\n        boolean debugEnabled = logger.isDebugEnabled();\n        \n        //\u5224\u65ad\u4e8b\u52a1\u662f\u5426\u5b58\u5728\n        if (isExistingTransaction(transaction)) {\n            // Existing transaction found -> check propagation behavior to find out how to behave.\n            return handleExistingTransaction(def, transaction, debugEnabled);\n        }\n\n        // \u68c0\u67e5\u65b0\u7684\u4e8b\u52a1\u914d\u7f6e\n        if (def.getTimeout() < TransactionDefinition.TIMEOUT_DEFAULT) {\n            throw new InvalidTimeoutException("Invalid transaction timeout", def.getTimeout());\n        }\n\n        // No existing transaction found -> check propagation behavior to find out how to proceed.\n        if (def.getPropagationBehavior() == TransactionDefinition.PROPAGATION_MANDATORY) {\n            throw new IllegalTransactionStateException(\n                    "No existing transaction found for transaction marked with propagation \'mandatory\'");\n        }\n        else if (def.getPropagationBehavior() == TransactionDefinition.PROPAGATION_REQUIRED ||\n                def.getPropagationBehavior() == TransactionDefinition.PROPAGATION_REQUIRES_NEW ||\n                def.getPropagationBehavior() == TransactionDefinition.PROPAGATION_NESTED) {\n            SuspendedResourcesHolder suspendedResources = suspend(null);\n            if (debugEnabled) {\n                logger.debug("Creating new transaction with name [" + def.getName() + "]: " + def);\n            }\n            try {\n                return startTransaction(def, transaction, debugEnabled, suspendedResources);\n            }\n            catch (RuntimeException | Error ex) {\n                resume(null, suspendedResources);\n                throw ex;\n            }\n        }\n        else {\n            // Create "empty" transaction: no actual transaction, but potentially synchronization.\n            if (def.getIsolationLevel() != TransactionDefinition.ISOLATION_DEFAULT && logger.isWarnEnabled()) {\n                logger.warn("Custom isolation level specified but no actual transaction initiated; " +\n                        "isolation level will effectively be ignored: " + def);\n            }\n            boolean newSynchronization = (getTransactionSynchronization() == SYNCHRONIZATION_ALWAYS);\n            return prepareTransactionStatus(def, null, true, newSynchronization, debugEnabled, null);\n        }\n    }\n')),(0,r.kt)("p",null,"\u4e0a\u9762\u5c31\u662f\u6839\u636e\u8bbe\u7f6e\u7684\u4e8b\u52a1\u7684\u4f20\u64ad\u884c\u4e3a\u6765\u5bf9\u4e8b\u52a1\u4f5c\u51fa\u5904\u7406\u3002\u4e8b\u52a1\u7684\u4f20\u64ad\u884c\u4e3a\u5982\u4e0b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"@Transactional(propagation=Propagation.REQUIRED) \uff1a\u5982\u679c\u6709\u4e8b\u52a1, \u90a3\u4e48\u52a0\u5165\u4e8b\u52a1, \u6ca1\u6709\u7684\u8bdd\u65b0\u5efa\u4e00\u4e2a(\u9ed8\u8ba4\u60c5\u51b5\u4e0b)")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"@Transactional(propagation=Propagation.NOT_SUPPORTED) \uff1a\u4ee5\u975e\u4e8b\u52a1\u65b9\u5f0f\u6267\u884c\uff0c\u5982\u679c\u5b58\u5728\u5f53\u524d\u4e8b\u52a1\uff0c\u5219\u6302\u8d77\u5f53\u524d\u4e8b\u52a1")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"@Transactional(propagation=Propagation.REQUIRES_NEW) \uff1a\u4e0d\u7ba1\u662f\u5426\u5b58\u5728\u4e8b\u52a1,\u90fd\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u4e8b\u52a1,\u539f\u6765\u7684\u6302\u8d77,\u65b0\u7684\u6267\u884c\u5b8c\u6bd5,\u7ee7\u7eed\u6267\u884c\u8001\u7684\u4e8b\u52a1")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"@Transactional(propagation=Propagation.MANDATORY) \uff1a\u5fc5\u987b\u5728\u4e00\u4e2a\u5df2\u6709\u7684\u4e8b\u52a1\u4e2d\u6267\u884c,\u5426\u5219\u629b\u51fa\u5f02\u5e38")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"@Transactional(propagation=Propagation.NEVER) \uff1a\u4ee5\u975e\u4e8b\u52a1\u65b9\u5f0f\u6267\u884c\uff0c\u5982\u679c\u5b58\u5728\u4e8b\u52a1\u5219\u629b\u51fa\u5f02\u5e38\u3002")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"@Transactional(propagation=Propagation.SUPPORTS) \uff1a\u5982\u679c\u5176\u4ed6bean\u8c03\u7528\u8fd9\u4e2a\u65b9\u6cd5,\u5728\u5176\u4ed6bean\u4e2d\u58f0\u660e\u4e8b\u52a1,\u90a3\u5c31\u7528\u4e8b\u52a1.\u5982\u679c\u5176\u4ed6bean\u6ca1\u6709\u58f0\u660e\u4e8b\u52a1,\u90a3\u5c31\u4e0d\u7528\u4e8b\u52a1.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"@Transactional(propagation=Propagation.NESTED) \uff1a \u5982\u679c\u5f53\u524d\u5b58\u5728\u4e8b\u52a1\uff0c\u5219\u5728\u5d4c\u5957\u4e8b\u52a1\u5185\u6267\u884c\u3002\u5982\u679c\u5f53\u524d\u6ca1\u6709\u4e8b\u52a1\uff0c\u5219\u8fdb\u884cPROPAGATION_REQUIRED\u7c7b\u4f3c\u7684\u64cd\u4f5c\u3002")),(0,r.kt)("p",null,"\u521b\u5efa\u5b8c\u6210 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"TransactionInfo"))," \u540e\u5c31\u5f00\u59cb\u6267\u884c\u4e1a\u52a1\u903b\u8f91\u65b9\u6cd5\uff0c\u5982\u679c\u6267\u884c\u4e1a\u52a1\u903b\u8f91\u62a5\u9519\u90a3\u4e48\u5c31\u6267\u884c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"completeTransactionAfterThrowing(txInfo, ex);\n")),(0,r.kt)("p",null,"\u7136\u540e\u5728 finally \u4ee3\u7801\u5757\u4e2d\u6267\u884c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"cleanupTransactionInfo(txInfo);\n")),(0,r.kt)("p",null,"\u6e05\u9664\u4e8b\u52a1\u7684\u4fe1\u606f\uff0c\u63d0\u4ea4\u4e8b\u52a1\u3002\u5230\u8fd9\u91cc\u6574\u4e2a\u4e8b\u52a1\u5c31\u57fa\u672c\u4e0a\u5b8c\u6210\u4e86\u3002"),(0,r.kt)("h4",{id:"33-beanfactorytransactionattributesourceadvisor\u6e90\u7801\u89e3\u6790"},"3.3 BeanFactoryTransactionAttributeSourceAdvisor\u6e90\u7801\u89e3\u6790"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public class BeanFactoryTransactionAttributeSourceAdvisor extends AbstractBeanFactoryPointcutAdvisor {\n\n    @Nullable\n    private TransactionAttributeSource transactionAttributeSource;\n\n    private final TransactionAttributeSourcePointcut pointcut = new TransactionAttributeSourcePointcut() {\n        @Override\n        @Nullable\n        protected TransactionAttributeSource getTransactionAttributeSource() {\n            return transactionAttributeSource;\n        }\n    };\n\n\n    /**\n     * Set the transaction attribute source which is used to find transaction\n     * attributes. This should usually be identical to the source reference\n     * set on the transaction interceptor itself.\n     * @see TransactionInterceptor#setTransactionAttributeSource\n     */\n    public void setTransactionAttributeSource(TransactionAttributeSource transactionAttributeSource) {\n        this.transactionAttributeSource = transactionAttributeSource;\n    }\n\n    /**\n     * Set the {@link ClassFilter} to use for this pointcut.\n     * Default is {@link ClassFilter#TRUE}.\n     */\n    public void setClassFilter(ClassFilter classFilter) {\n        this.pointcut.setClassFilter(classFilter);\n    }\n\n    @Override\n    public Pointcut getPointcut() {\n        return this.pointcut;\n    }\n\n}\n")),(0,r.kt)("p",null,"\u8fd9\u4e2a\u7c7b\u6bd4\u8f83\u7b80\u5355\u5c31\u662f\u5c06Advice\u548cPointcut\u7ec4\u88c5\u6210Advisor"),(0,r.kt)("h3",{id:"4-\u603b\u7ed3"},"4. \u603b\u7ed3"),(0,r.kt)("p",null,"Spring\u4e8b\u52a1\u7ba1\u7406\u5e95\u5c42\u4f7f\u7528\u7684\u662fAOP\u7684\u539f\u7406\u6765\u5b9e\u73b0\u3002\u7ed3\u5408\u6570\u636e\u5e93\u7684\u4e8b\u52a1\u6765\u7684\u3002"))}g.isMDXComponent=!0}}]);