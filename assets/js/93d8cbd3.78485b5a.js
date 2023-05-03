"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[4756],{3905:(n,t,e)=>{e.d(t,{Zo:()=>p,kt:()=>m});var a=e(7294);function r(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function i(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,a)}return e}function o(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?i(Object(e),!0).forEach((function(t){r(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function l(n,t){if(null==n)return{};var e,a,r=function(n,t){if(null==n)return{};var e,a,r={},i=Object.keys(n);for(a=0;a<i.length;a++)e=i[a],t.indexOf(e)>=0||(r[e]=n[e]);return r}(n,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(a=0;a<i.length;a++)e=i[a],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(r[e]=n[e])}return r}var s=a.createContext({}),c=function(n){var t=a.useContext(s),e=t;return n&&(e="function"==typeof n?n(t):o(o({},t),n)),e},p=function(n){var t=c(n.components);return a.createElement(s.Provider,{value:t},n.children)},u="mdxType",d={inlineCode:"code",wrapper:function(n){var t=n.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(n,t){var e=n.components,r=n.mdxType,i=n.originalType,s=n.parentName,p=l(n,["components","mdxType","originalType","parentName"]),u=c(e),g=r,m=u["".concat(s,".").concat(g)]||u[g]||d[g]||i;return e?a.createElement(m,o(o({ref:t},p),{},{components:e})):a.createElement(m,o({ref:t},p))}));function m(n,t){var e=arguments,r=t&&t.mdxType;if("string"==typeof n||r){var i=e.length,o=new Array(i);o[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=n,l[u]="string"==typeof n?n:r,o[1]=l;for(var c=2;c<i;c++)o[c]=e[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,e)}g.displayName="MDXCreateElement"},5135:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=e(7462),r=(e(7294),e(3905));const i={title:"Spring\u4e8b\u52a1\u5904\u7406\u6e90\u7801\u89e3\u6790",linkTitle:"Spring\u4e8b\u52a1\u5904\u7406\u6e90\u7801\u89e3\u6790",date:new Date("2021-04-29T00:00:00.000Z"),weight:202104291429},o=void 0,l={unversionedId:"spring/spring-framework/core-source-analysis/transaction-processing",id:"spring/spring-framework/core-source-analysis/transaction-processing",title:"Spring\u4e8b\u52a1\u5904\u7406\u6e90\u7801\u89e3\u6790",description:"\u57fa\u4e8espring 5.3.5\u7248\u672c\u6e90\u7801\u5206\u6790",source:"@site/docs/spring/spring-framework/core-source-analysis/transaction-processing.md",sourceDirName:"spring/spring-framework/core-source-analysis",slug:"/spring/spring-framework/core-source-analysis/transaction-processing",permalink:"/docs/spring/spring-framework/core-source-analysis/transaction-processing",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/spring/spring-framework/core-source-analysis/transaction-processing.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1683078484,formattedLastUpdatedAt:"May 3, 2023",frontMatter:{title:"Spring\u4e8b\u52a1\u5904\u7406\u6e90\u7801\u89e3\u6790",linkTitle:"Spring\u4e8b\u52a1\u5904\u7406\u6e90\u7801\u89e3\u6790",date:"2021-04-29T00:00:00.000Z",weight:202104291429},sidebar:"springframework",previous:{title:"SpringBean\u5faa\u73af\u4f9d\u8d56\u6e90\u7801\u89e3\u6790",permalink:"/docs/spring/spring-framework/core-source-analysis/springBean-circular-dependency"},next:{title:"AnnotationConfigApplicationContext\u6e90\u7801\u89e3\u6790",permalink:"/docs/spring/spring-framework/core-source-analysis/AnnotationConfigApplicationContext"}},s={},c=[{value:"1. \u5165\u53e3\u65b9\u6cd5MethodInterceptor#invoke",id:"1-\u5165\u53e3\u65b9\u6cd5methodinterceptorinvoke",level:3},{value:"2. TransactionAspectSupport#invokeWithinTransaction\u65b9\u6cd5",id:"2-transactionaspectsupportinvokewithintransaction\u65b9\u6cd5",level:3},{value:"3. \u4e8b\u52a1\u4f20\u64ad",id:"3-\u4e8b\u52a1\u4f20\u64ad",level:3},{value:"3.1 \u5f53\u524d\u5b58\u5728\u4e8b\u52a1\u7684\u4f20\u64ad\u5c5e\u6027",id:"31-\u5f53\u524d\u5b58\u5728\u4e8b\u52a1\u7684\u4f20\u64ad\u5c5e\u6027",level:4},{value:"3.2 \u4e0d\u5b58\u5728\u4e8b\u52a1\u7684\u4f20\u64ad\u6027",id:"32-\u4e0d\u5b58\u5728\u4e8b\u52a1\u7684\u4f20\u64ad\u6027",level:4},{value:"4. \u4e8b\u52a1\u7c7b\u578b\u4f20\u64ad\u7ec8\u7ed3",id:"4-\u4e8b\u52a1\u7c7b\u578b\u4f20\u64ad\u7ec8\u7ed3",level:3},{value:"5. \u4e8b\u52a1\u56de\u6eda",id:"5-\u4e8b\u52a1\u56de\u6eda",level:3},{value:"6. \u4e8b\u52a1\u63d0\u4ea4",id:"6-\u4e8b\u52a1\u63d0\u4ea4",level:3}],p={toc:c},u="wrapper";function d(n){let{components:t,...e}=n;return(0,r.kt)(u,(0,a.Z)({},p,e,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u57fa\u4e8espring 5.3.5\u7248\u672c\u6e90\u7801\u5206\u6790")),(0,r.kt)("p",null,"\u4e8b\u52a1\u5904\u7406\u7684\u903b\u8f91\u4e3b\u8981\u5728 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"MethodInterceptor"))," \u4e2d\uff0c\u4e0b\u9762\u901a\u8fc7\u6e90\u7801\u6765\u89e3\u6790Spring\u662f\u5982\u4f55\u5904\u7406\u4e8b\u52a1\u7684\u3002"),(0,r.kt)("h3",{id:"1-\u5165\u53e3\u65b9\u6cd5methodinterceptorinvoke"},"1. \u5165\u53e3\u65b9\u6cd5MethodInterceptor#invoke"),(0,r.kt)("p",null,"\u8fd9\u4e2a\u65b9\u6cd5\u662f\u4e8b\u52a1\u6267\u884c\u7684\u5165\u53e3:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"@Override\n@Nullable\npublic Object invoke(MethodInvocation invocation) throws Throwable {\n\n    Class<?> targetClass = (invocation.getThis() != null ? AopUtils.getTargetClass(invocation.getThis()) : null);\n    \n    //\u4e8b\u52a1\u5904\u7406\u7684\u4e3b\u8981\u903b\u8f91\n    return invokeWithinTransaction(invocation.getMethod(), targetClass, new CoroutinesInvocationCallback() {\n        @Override\n        @Nullable\n        public Object proceedWithInvocation() throws Throwable {\n            return invocation.proceed();\n        }\n        @Override\n        public Object getTarget() {\n            return invocation.getThis();\n        }\n        @Override\n        public Object[] getArguments() {\n            return invocation.getArguments();\n        }\n    });\n}\n")),(0,r.kt)("h3",{id:"2-transactionaspectsupportinvokewithintransaction\u65b9\u6cd5"},"2. TransactionAspectSupport#invokeWithinTransaction\u65b9\u6cd5"),(0,r.kt)("p",null,"\u8fd9\u4e2a\u65b9\u6cd5\u4e3b\u8981\u5305\u542b\u4e86\u4e24\u90e8\u5206\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u54cd\u5e94\u5f0f\u7f16\u7a0b\u4e8b\u52a1\u652f\u6301(ReactiveTransactionManager\u7c7b\u6dfb\u52a0\u4e0eSpring5.2\u7248\u672c)"),(0,r.kt)("li",{parentName:"ul"},"\u6807\u51c6\u7684\u7684\u4e8b\u52a1\u652f\u6301")),(0,r.kt)("p",null,"\u54cd\u5e94\u5f0f\u540e\u7eed\u5206\u6790\u3002\u6211\u4eec\u6765\u5206\u6790\u4e00\u4e0b\u6807\u51c6\u7684\u4e8b\u52a1\u652f\u6301\uff1a  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// \u91cd\u70b9\uff1a\u662f\u5426\u9700\u8981\u521b\u5efa\u4e8b\u52a1\nTransactionInfo txInfo = createTransactionIfNecessary(ptm, txAttr, joinpointIdentification);\n\nObject retVal;\ntry {\n    // \u8fd9\u662f\u4e00\u4e2aaround advice: \u8c03\u7528\u94fe\u4e2d\u7684\u4e0b\u4e00\u4e2a\u62e6\u622a\u5668.\n    // \u8fd9\u901a\u5e38\u4f1a\u5bfc\u81f4\u8c03\u7528\u76ee\u6807\u5bf9\u8c61.\n    retVal = invocation.proceedWithInvocation();\n}\ncatch (Throwable ex) {\n    // \u4e8b\u52a1\u7684\u5f02\u5e38\u5904\u7406\n    completeTransactionAfterThrowing(txInfo, ex);\n    throw ex;\n}\nfinally {\n    //\u6e05\u7406\u4e8b\u52a1\u7684\u4fe1\u606f\n    cleanupTransactionInfo(txInfo);\n}\n\nif (retVal != null && vavrPresent && VavrDelegate.isVavrTry(retVal)) {\n    // Set rollback-only in case of Vavr failure matching our rollback rules...\n    TransactionStatus status = txInfo.getTransactionStatus();\n    if (status != null && txAttr != null) {\n        retVal = VavrDelegate.evaluateTryFailure(retVal, txAttr, status);\n    }\n}\n//\u63d0\u4ea4\u4e8b\u52a1\ncommitTransactionAfterReturning(txInfo);\nreturn retVal;\n")),(0,r.kt)("p",null,"\u4e8b\u52a1\u4e3b\u8981\u662f\u901a\u8fc7 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"TransactionAspectSupport#createTransactionIfNecessary"))," \u65b9\u6cd5\u83b7\u53d6\uff0c\u7136\u540e\u6267\u884c\u76ee\u6807\u65b9\u6cd5\u83b7\u53d6\u65b9\u6cd5\u8fd4\u56de\u7ed3\u679c\u3002\u5982\u679c\u6709\u95ee\u9898\u5904\u7406\u95ee\u9898\uff0c\u6839\u636e\u60c5\u51b5(\u914d\u7f6e\u7684\u4e8b\u52a1\u4f20\u9012\u6027\u548c\u4e8b\u52a1\u56de\u6eda\u7684Execption)\u662f\u5426\u5bf9\u4e8b\u52a1\u8fdb\u884c\u56de\u6eda\u3002  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'protected TransactionInfo createTransactionIfNecessary(@Nullable PlatformTransactionManager tm,\n        @Nullable TransactionAttribute txAttr, final String joinpointIdentification) {\n\n    // \u5904\u7406txAttr\u6ca1\u6709\u540d\u5b57\u7684\u60c5\u51b5\n    if (txAttr != null && txAttr.getName() == null) {\n        txAttr = new DelegatingTransactionAttribute(txAttr) {\n            @Override\n            public String getName() {\n                return joinpointIdentification;\n            }\n        };\n    }\n\n    TransactionStatus status = null;\n    if (txAttr != null) {\n        if (tm != null) {\n            //\u91cd\u70b9\uff1a\u901a\u8fc7PlatformTransactionManager\u7ba1\u7406\u83b7\u53d6\u4e8b\u52a1\u72b6\u6001\n            status = tm.getTransaction(txAttr);\n        }\n        else {\n            if (logger.isDebugEnabled()) {\n                logger.debug("Skipping transactional joinpoint [" + joinpointIdentification +\n                        "] because no transaction manager has been configured");\n            }\n        }\n    }\n    //\u5c06TransactionStatus\u5305\u88c5\u6210TransactionInfo\n    return prepareTransactionInfo(tm, txAttr, joinpointIdentification, status);\n}\n')),(0,r.kt)("h3",{id:"3-\u4e8b\u52a1\u4f20\u64ad"},"3. \u4e8b\u52a1\u4f20\u64ad"),(0,r.kt)("p",null,"\u5728\u901a\u8fc7\u6ce8\u89e3@Transactional\u7ba1\u7406\u4e8b\u52a1\u7684\u65f6\u5019\u9700\u8981\u914d\u7f6ePropagation\u7684\u503c\u3002\u9ed8\u8ba4\u4e3aPropagation.REQUIRED,\u4e0b\u9762\u6765\u770b\u4e00\u4e0bAbstractPlatformTransactionManager#getTransaction\u3002\u65b9\u6cd5\u4e3b\u8981\u903b\u8f91\u4e3a\u4e24\u4e2a\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5b58\u5728\u4e8b\u52a1\u5982\u4f55\u5904\u7406"),(0,r.kt)("li",{parentName:"ol"},"\u6ca1\u6709\u5b58\u5728\u4e8b\u52a1\u5982\u4f55\u5904\u7406")),(0,r.kt)("p",null,"\u8fd9\u91cc\u5c31\u6d89\u53ca\u5230\u4e86\u6839\u636e\u4e8b\u52a1\u7684\u4f20\u64ad\u65b9\u5f0f\u6765\u5904\u7406\u4e8b\u52a1\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'@Override\npublic final TransactionStatus getTransaction(@Nullable TransactionDefinition definition)\n        throws TransactionException {\n\n    // Use defaults if no transaction definition given.\n    TransactionDefinition def = (definition != null ? definition : TransactionDefinition.withDefaults());\n\n    Object transaction = doGetTransaction();\n    boolean debugEnabled = logger.isDebugEnabled();\n\n    //\u91cd\u70b9\uff1a\u5224\u65ad\u662f\u5426\u5b58\u5728\u4e8b\u52a1\n    if (isExistingTransaction(transaction)) {\n        // \u5b58\u5728\u4e8b\u52a1 -> \u68c0\u67e5 propagation \u6765\u51b3\u5b9a\u5982\u4f55\u5904\u7406.\n        return handleExistingTransaction(def, transaction, debugEnabled);\n    }\n\n    //\u91cd\u70b9\uff1a \u4e0b\u9762\u5c31\u662f\u5904\u7406\u6ca1\u6709\u4e8b\u52a1\uff0c\u6839\u636epropagation\u51b3\u5b9a\u5982\u4f55\u5904\u7406\n    if (def.getTimeout() < TransactionDefinition.TIMEOUT_DEFAULT) {\n        throw new InvalidTimeoutException("Invalid transaction timeout", def.getTimeout());\n    }\n\n    if (def.getPropagationBehavior() == TransactionDefinition.PROPAGATION_MANDATORY) {\n        throw new IllegalTransactionStateException(\n                "No existing transaction found for transaction marked with propagation \'mandatory\'");\n    }\n    else if (def.getPropagationBehavior() == TransactionDefinition.PROPAGATION_REQUIRED ||\n            def.getPropagationBehavior() == TransactionDefinition.PROPAGATION_REQUIRES_NEW ||\n            def.getPropagationBehavior() == TransactionDefinition.PROPAGATION_NESTED) {\n        SuspendedResourcesHolder suspendedResources = suspend(null);\n        if (debugEnabled) {\n            logger.debug("Creating new transaction with name [" + def.getName() + "]: " + def);\n        }\n        try {\n            return startTransaction(def, transaction, debugEnabled, suspendedResources);\n        }\n        catch (RuntimeException | Error ex) {\n            resume(null, suspendedResources);\n            throw ex;\n        }\n    }\n    else {\n        // Create "empty" transaction: no actual transaction, but potentially synchronization.\n        if (def.getIsolationLevel() != TransactionDefinition.ISOLATION_DEFAULT && logger.isWarnEnabled()) {\n            logger.warn("Custom isolation level specified but no actual transaction initiated; " +\n                    "isolation level will effectively be ignored: " + def);\n        }\n        boolean newSynch\n')),(0,r.kt)("h4",{id:"31-\u5f53\u524d\u5b58\u5728\u4e8b\u52a1\u7684\u4f20\u64ad\u5c5e\u6027"},"3.1 \u5f53\u524d\u5b58\u5728\u4e8b\u52a1\u7684\u4f20\u64ad\u5c5e\u6027"),(0,r.kt)("p",null,"\u65b9\u6cd5\u4e3b\u8981\u662f AbstractPlatformTransactionManager#handleExistingTransaction\uff1a  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"NEVER"),(0,r.kt)("p",{parentName:"li"},"\u5b58\u5728\u4e8b\u52a1\u5c31\u62a5\u9519"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},"if (definition.getPropagationBehavior() == TransactionDefinition.PROPAGATION_NEVER) {\n    throw new IllegalTransactionStateException(\n            \"Existing transaction found for transaction marked with propagation 'never'\");\n}\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"NOT_SUPPORTED"),(0,r.kt)("p",{parentName:"li"},"\u628a\u5f53\u524d\u4e8b\u52a1\u6302\u8d77,\u5f3a\u5236\u4e0d\u5728\u4e8b\u52a1\u4e2d\u8fd0\u884c"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},"if (definition.getPropagationBehavior() == TransactionDefinition.PROPAGATION_NOT_SUPPORTED) {\n    //\u6302\u8d77\u5f53\u524d\u4e8b\u52a1\n    Object suspendedResources = suspend(transaction);\n    boolean newSynchronization = (getTransactionSynchronization() == SYNCHRONIZATION_ALWAYS);\n    return prepareTransactionStatus(\n            definition, null, false, newSynchronization, debugEnabled, suspendedResources);\n}\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"REQUIRES_NEW"),(0,r.kt)("p",{parentName:"li"},"\u6302\u8d77\u5f53\u524d\u4e8b\u52a1\uff0c\u521b\u5efa\u4e00\u4e2a\u65b0\u4e8b\u52a1"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},"if (definition.getPropagationBehavior() == TransactionDefinition.PROPAGATION_REQUIRES_NEW) {\n    //\u6302\u8d77\u5df2\u6709\u4e8b\u52a1\n    SuspendedResourcesHolder suspendedResources = suspend(transaction);\n    try {\n        //\u5f00\u542f\u4e00\u4e2a\u65b0\u7684\u4e8b\u52a1\n        return startTransaction(definition, transaction, debugEnabled, suspendedResources);\n    }\n    catch (RuntimeException | Error beginEx) {\n        resumeAfterBeginException(transaction, suspendedResources, beginEx);\n        throw beginEx;\n    }\n}\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"NESTED"),(0,r.kt)("p",{parentName:"li"},"\u5728\u5f53\u524d\u4e8b\u52a1\u4e2d\u521b\u5efa\u4e00\u4e2a\u5d4c\u5957\u4e8b\u52a1"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},"if (definition.getPropagationBehavior() == TransactionDefinition.PROPAGATION_NESTED) {\n    //\u5224\u65ad\u662f\u5426\u5141\u8bb8\u5d4c\u5957\u4e8b\u52a1\n    if (!isNestedTransactionAllowed()) {\n        throw new NestedTransactionNotSupportedException(\n                \"Transaction manager does not allow nested transactions by default - \" +\n                \"specify 'nestedTransactionAllowed' property with value 'true'\");\n    }\n    if (useSavepointForNestedTransaction()) {\n        // \u5df2\u5b58\u5728\u7684\u4e8b\u52a1\u521b\u5efasavepoint\u901a\u8fc7TransactionStatus\u7684SavepointManager API\u6765\u5b9e\u73b0\n        //\u901a\u5e38\u4f7f\u7528JDBC 3.0\u4fdd\u5b58\u70b9\u3002\u4ece\u4e0d\u6fc0\u6d3bSpring\u540c\u6b65\n        DefaultTransactionStatus status =\n                prepareTransactionStatus(definition, transaction, false, false, debugEnabled, null);\n        status.createAndHoldSavepoint();\n        return status;\n    }\n    else {\n        //JTA\u901a\u8fc7\u63d0\u4ea4\u548c\u56de\u6eda\n        return startTransaction(definition, transaction, debugEnabled, null);\n    }\n}\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"REQUIRED\u3001SUPPORTS\u3001MANDATORY"),(0,r.kt)("p",{parentName:"li"},"\u8fd9\u4e09\u4e2a\u90fd\u662f\u4f7f\u7528\u5f53\u524d\u4e8b\u52a1"))),(0,r.kt)("h4",{id:"32-\u4e0d\u5b58\u5728\u4e8b\u52a1\u7684\u4f20\u64ad\u6027"},"3.2 \u4e0d\u5b58\u5728\u4e8b\u52a1\u7684\u4f20\u64ad\u6027"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"MANDATORY"),(0,r.kt)("p",{parentName:"li"},"\u629b\u5f02\u5e38"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},"if (def.getPropagationBehavior() == TransactionDefinition.PROPAGATION_MANDATORY) {\n    throw new IllegalTransactionStateException(\n            \"No existing transaction found for transaction marked with propagation 'mandatory'\");\n}\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"REQUIRED\u3001REQUIRES_NEW\u3001NESTED"),(0,r.kt)("p",{parentName:"li"},"\u65b0\u5efa\u4e8b\u52a1"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},"else if (def.getPropagationBehavior() == TransactionDefinition.PROPAGATION_REQUIRED ||\n        def.getPropagationBehavior() == TransactionDefinition.PROPAGATION_REQUIRES_NEW ||\n        def.getPropagationBehavior() == TransactionDefinition.PROPAGATION_NESTED) {\n    SuspendedResourcesHolder suspendedResources = suspend(null);\n    try {\n        return startTransaction(def, transaction, debugEnabled, suspendedResources);\n    }\n    catch (RuntimeException | Error ex) {\n        resume(null, suspendedResources);\n        throw ex;\n    }\n}\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"SUPPORTS\u3001NOT_SUPPORTED\u3001NEVER"),(0,r.kt)("p",{parentName:"li"},"\u4ee5\u975e\u4e8b\u52a1\u7684\u65b9\u5f0f\u8fd0\u884c"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},'else {\n    // Create "empty" transaction: no actual transaction, but potentially synchronization.\n    boolean newSynchronization = (getTransactionSynchronization() == SYNCHRONIZATION_ALWAYS);\n    return prepareTransactionStatus(def, null, true, newSynchronization, debugEnabled, null);\n}\n')))),(0,r.kt)("h3",{id:"4-\u4e8b\u52a1\u7c7b\u578b\u4f20\u64ad\u7ec8\u7ed3"},"4. \u4e8b\u52a1\u7c7b\u578b\u4f20\u64ad\u7ec8\u7ed3"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"}),(0,r.kt)("th",{parentName:"tr",align:"center"},"\u4e0d\u5b58\u5728\u4e8b\u52a1"),(0,r.kt)("th",{parentName:"tr",align:"center"},"\u5b58\u5728\u4e8b\u52a1"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"REQUIRED"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u65b0\u5efa\u4e8b\u52a1"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u4f7f\u7528\u5f53\u524d\u4e8b\u52a1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"REQUIRES_NEW"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u65b0\u5efa\u4e8b\u52a1"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u6302\u8d77\u5f53\u524d\u4e8b\u52a1\uff0c\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u4e8b\u52a1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"NESTED"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u65b0\u5efa\u4e8b\u52a1"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5728\u5f53\u524d\u4e8b\u52a1\u4e2d\u521b\u5efa\u4e00\u4e2a\u5d4c\u5957\u4e8b\u52a1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"MANDATORY"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u629b\u5f02\u5e38"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u4f7f\u7528\u5f53\u524d\u4e8b\u52a1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"SUPPORTS"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u975e\u4e8b\u52a1\u8fd0\u884c"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u4f7f\u7528\u5f53\u524d\u4e8b\u52a1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"NOT_SUPPORTED"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u975e\u4e8b\u52a1\u8fd0\u884c"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u6302\u8d77\u5f53\u524d\u4e8b\u52a1\uff0c\u5f3a\u5236\u4e0d\u5728\u4e8b\u52a1\u4e2d\u8fd0\u884c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"NEVER"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u975e\u4e8b\u52a1\u8fd0\u884c"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u629b\u5f02\u5e38")))),(0,r.kt)("h3",{id:"5-\u4e8b\u52a1\u56de\u6eda"},"5. \u4e8b\u52a1\u56de\u6eda"),(0,r.kt)("p",null,"\u5f53\u8bbe\u7f6e\u4e86\u4e8b\u52a1\u5982\u679c\u5b58\u5728\u6267\u884c\u65b9\u6cd5\u51fa\u73b0\u9519\u8bef\uff0c\u5c31\u4f1a\u5bf9\u4e8b\u52a1\u8fdb\u884c\u56de\u6eda\u3002\u4e0b\u9762\u770b\u4e00\u4e0b ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"TransactionAspectSupport#completeTransactionAfterThrowing"))," \u65b9\u6cd5\u4e3b\u8981\u8d1f\u8d23\u56de\u6eda\u4e8b\u52a1\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'protected void completeTransactionAfterThrowing(@Nullable TransactionInfo txInfo, Throwable ex) {\n    if (txInfo != null && txInfo.getTransactionStatus() != null) {\n\n        if (txInfo.transactionAttribute != null && txInfo.transactionAttribute.rollbackOn(ex)) {\n            try {\n                //\u56de\u6eda\u4e8b\u52a1\n                txInfo.getTransactionManager().rollback(txInfo.getTransactionStatus());\n            }\n            catch (TransactionSystemException ex2) {\n                logger.error("Application exception overridden by rollback exception", ex);\n                ex2.initApplicationException(ex);\n                throw ex2;\n            }\n            catch (RuntimeException | Error ex2) {\n                logger.error("Application exception overridden by rollback exception", ex);\n                throw ex2;\n            }\n        }\n        else {\n            //\u4e0d\u60f3\u56de\u6eda\u5f53\u524dexception\u63d0\u4ea4\u4e8b\u52a1\n            try {\n                txInfo.getTransactionManager().commit(txInfo.getTransactionStatus());\n            }\n            catch (TransactionSystemException ex2) {\n                logger.error("Application exception overridden by commit exception", ex);\n                ex2.initApplicationException(ex);\n                throw ex2;\n            }\n            catch (RuntimeException | Error ex2) {\n                logger.error("Application exception overridden by commit exception", ex);\n                throw ex2;\n            }\n        }\n    }\n}\n')),(0,r.kt)("h3",{id:"6-\u4e8b\u52a1\u63d0\u4ea4"},"6. \u4e8b\u52a1\u63d0\u4ea4"),(0,r.kt)("p",null,"\u5f53\u65b9\u6cd5\u6267\u884c\u5b8c\u6210\uff0c\u9700\u8981\u63d0\u4ea4\u4e8b\u52a1\uff0c\u63d0\u4ea4\u662f\u7531 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"TransactionAspectSupport#commitTransactionAfterReturning")),"  \u5904\u7406\u4e8b\u52a1\u63d0\u4ea4\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"protected void commitTransactionAfterReturning(@Nullable TransactionInfo txInfo) {\n    if (txInfo != null && txInfo.getTransactionStatus() != null) {\n        txInfo.getTransactionManager().commit(txInfo.getTransactionStatus());\n    }\n}\n")))}d.isMDXComponent=!0}}]);