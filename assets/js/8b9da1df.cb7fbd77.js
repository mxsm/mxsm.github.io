"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[2487],{4889:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>b,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var a=n(5893),r=n(1151);const o={title:"doGetBean\u6e90\u7801\u8be6\u89e3",date:new Date("2019-01-25T00:00:00.000Z")},s=void 0,i={id:"spring/spring-framework/core-source-analysis/doGetBean",title:"doGetBean\u6e90\u7801\u8be6\u89e3",description:"1. doGetBean\u65b9\u6cd5\u6e90\u7801\u89e3\u6790",source:"@site/docs/spring/spring-framework/core-source-analysis/doGetBean.md",sourceDirName:"spring/spring-framework/core-source-analysis",slug:"/spring/spring-framework/core-source-analysis/doGetBean",permalink:"/docs/spring/spring-framework/core-source-analysis/doGetBean",draft:!1,unlisted:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/spring/spring-framework/core-source-analysis/doGetBean.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1706451902,formattedLastUpdatedAt:"Jan 28, 2024",frontMatter:{title:"doGetBean\u6e90\u7801\u8be6\u89e3",date:"2019-01-25T00:00:00.000Z"},sidebar:"springframework",previous:{title:"RootBeanDefinition\u3001ChildBeanDefinition\u3001GenericBeanDefinition\u7684\u533a\u522b",permalink:"/docs/spring/spring-framework/core-source-analysis/beandefinediff"},next:{title:"Spring BeanFactoryPostProcessor\u6267\u884c\u987a\u5e8f",permalink:"/docs/spring/spring-framework/core-source-analysis/spring-BeanFactoryPostProcessor-order"}},c={},l=[{value:"1. doGetBean\u65b9\u6cd5\u6e90\u7801\u89e3\u6790",id:"1-dogetbean\u65b9\u6cd5\u6e90\u7801\u89e3\u6790",level:3},{value:"\u68c0\u6d4b\u662f\u5426\u4e3aFactoryBean\u5e76\u83b7\u53d6Bean\u4ee5\u53ca\u521d\u59cb\u5316\u540e\u5904\u7406",id:"\u68c0\u6d4b\u662f\u5426\u4e3afactorybean\u5e76\u83b7\u53d6bean\u4ee5\u53ca\u521d\u59cb\u5316\u540e\u5904\u7406",level:4},{value:"\u521b\u5efa\u5355\u4f8bBean",id:"\u521b\u5efa\u5355\u4f8bbean",level:4},{value:"\u539f\u578b\u6a21\u5f0f\u7684\u4f9d\u8d56\u68c0\u67e5",id:"\u539f\u578b\u6a21\u5f0f\u7684\u4f9d\u8d56\u68c0\u67e5",level:4},{value:"2. \u65b9\u6cd5\u7684\u6e90\u7801\u89e3\u6790",id:"2-\u65b9\u6cd5\u7684\u6e90\u7801\u89e3\u6790",level:3},{value:"2.1 transformedBeanName",id:"21-transformedbeanname",level:4},{value:"2.2 getSingleton(beanName)",id:"22-getsingletonbeanname",level:4},{value:"2.3 AbstractBeanFactory#getObjectForBeanInstance\u65b9\u6cd5",id:"23-abstractbeanfactorygetobjectforbeaninstance\u65b9\u6cd5",level:4},{value:"2.4  \u521b\u5efa\u5355\u4f8bBean DefaultSingletonBeanRegistry#getSingleton",id:"24--\u521b\u5efa\u5355\u4f8bbean-defaultsingletonbeanregistrygetsingleton",level:4}];function d(t){const e={blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...t.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h3,{id:"1-dogetbean\u65b9\u6cd5\u6e90\u7801\u89e3\u6790",children:"1. doGetBean\u65b9\u6cd5\u6e90\u7801\u89e3\u6790"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-java",children:'protected <T> T doGetBean(final String name, @Nullable final Class<T> requiredType,\n\t\t\t@Nullable final Object[] args, boolean typeCheckOnly) throws BeansException {\n\n\t\t/**\n\t\t * \u901a\u8fc7name\u83b7\u53d6BeanName,\u8fd9\u91cc\u4e0d\u80fd\u4f7f\u7528name\u4f5c\u4e3abeanName\uff1a\n\t\t * 1. name\u53ef\u80fd\u662f\u522b\u540d\uff0c\u901a\u8fc7\u65b9\u6cd5\u8f6c\u6362\u4e3a\u5177\u4f53\u7684\u5b9e\u4f8b\u540d\u79f0\n\t\t * 2. name\u53ef\u80fd\u4f1a\u4ee5&\u5f00\u5934\uff0c\u8868\u660e\u8c03\u7528\u8005\u60f3\u83b7\u53d6FactoryBean\u672c\u8eab\uff0c\u800c\u975eFactoryBean\u521b\u5efabean\n\t\t *    FactoryBean \u7684\u5b9e\u73b0\u7c7b\u548c\u5176\u4ed6\u7684 bean \u5b58\u50a8\u65b9\u5f0f\u662f\u4e00\u81f4\u7684\uff0c\u5373 <beanName, bean>\uff0c\n\t\t *    beanName \u4e2d\u662f\u6ca1\u6709 & \u8fd9\u4e2a\u5b57\u7b26\u7684\u3002\u6240\u4ee5\u6211\u4eec\u9700\u8981\u5c06 name \u7684\u9996\u5b57\u7b26 & \u79fb\u9664\uff0c\u8fd9\u6837\u624d\u80fd\u4ece\n\t\t *    \u7f13\u5b58\u91cc\u53d6\u5230 FactoryBean \u5b9e\u4f8b\u3002\n\t\t *\n\t\t */\n\t\tfinal String beanName = transformedBeanName(name);\n\t\tObject bean;\n\n\t\t// \u4ece\u7f13\u5b58\u4e2d\u83b7\u53d6bean\n\t\tObject sharedInstance = getSingleton(beanName);\n\n\t\t/*\n\t\t * \u5982\u679c sharedInstance = null\uff0c\u5219\u8bf4\u660e\u7f13\u5b58\u91cc\u6ca1\u6709\u5bf9\u5e94\u7684\u5b9e\u4f8b\uff0c\u8868\u660e\u8fd9\u4e2a\u5b9e\u4f8b\u8fd8\u6ca1\u521b\u5efa\u3002\n\t\t *( BeanFactory \u5e76\u4e0d\u4f1a\u5728\u4e00\u5f00\u59cb\u5c31\u5c06\u6240\u6709\u7684\u5355\u4f8b bean \u5b9e\u4f8b\u5316\u597d\uff0c\u800c\u662f\u5728\u8c03\u7528 getBean \u83b7\u53d6bean \u65f6\u518d\u5b9e\u4f8b\u5316\uff0c\u4e5f\u5c31\u662f\u61d2\u52a0\u8f7d)\u3002\n\t\t * getBean \u65b9\u6cd5\u6709\u5f88\u591a\u91cd\u8f7d\uff0c\u6bd4\u5982 getBean(String name, Object... args)\uff0c\u6211\u4eec\u5728\u9996\u6b21\u83b7\u53d6\n\t\t * \u67d0\u4e2a bean \u65f6\uff0c\u53ef\u4ee5\u4f20\u5165\u7528\u4e8e\u521d\u59cb\u5316 bean \u7684\u53c2\u6570\u6570\u7ec4\uff08args\uff09\uff0cBeanFactory \u4f1a\u6839\u636e\u8fd9\u4e9b\u53c2\u6570\n\t\t * \u53bb\u5339\u914d\u5408\u9002\u7684\u6784\u9020\u65b9\u6cd5\u6784\u9020 bean \u5b9e\u4f8b\u3002\u5f53\u7136\uff0c\u5982\u679c\u5355\u4f8b bean \u65e9\u5df2\u521b\u5efa\u597d\uff0c\u8fd9\u91cc\u7684 args \u5c31\u6ca1\u6709\n\t\t * \u7528\u4e86\uff0cBeanFactory \u4e0d\u4f1a\u591a\u6b21\u5b9e\u4f8b\u5316\u5355\u4f8b bean\u3002\n\t\t */\n\t\tif (sharedInstance != null && args == null) {\n\t\t\tif (logger.isTraceEnabled()) {\n\t\t\t\tif (isSingletonCurrentlyInCreation(beanName)) {\n\t\t\t\t\tlogger.trace("Returning eagerly cached instance of singleton bean \'" + beanName +\n\t\t\t\t\t\t\t"\' that is not fully initialized yet - a consequence of a circular reference");\n\t\t\t\t}\n\t\t\t\telse {\n\t\t\t\t\tlogger.trace("Returning cached instance of singleton bean \'" + beanName + "\'");\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t/*\n\t\t\t * \u5982\u679c sharedInstance \u662f\u666e\u901a\u7684\u5355\u4f8b bean\uff0c\u4e0b\u9762\u7684\u65b9\u6cd5\u4f1a\u76f4\u63a5\u8fd4\u56de\u3002\u4f46\u5982\u679c\n\t\t\t * sharedInstance \u662f FactoryBean \u7c7b\u578b\u7684\uff0c\u5219\u9700\u8c03\u7528 getObject \u5de5\u5382\u65b9\u6cd5\u83b7\u53d6\u771f\u6b63\u7684\n\t\t\t * bean \u5b9e\u4f8b\u3002\u5982\u679c\u7528\u6237\u60f3\u83b7\u53d6 FactoryBean \u672c\u8eab\uff0c\u8fd9\u91cc\u4e5f\u4e0d\u4f1a\u505a\u7279\u522b\u7684\u5904\u7406\uff0c\u76f4\u63a5\u8fd4\u56de\n\t\t\t * \u5373\u53ef\u3002\u6bd5\u7adf FactoryBean \u7684\u5b9e\u73b0\u7c7b\u672c\u8eab\u4e5f\u662f\u4e00\u79cd bean\uff0c\u53ea\u4e0d\u8fc7\u5177\u6709\u4e00\u70b9\u7279\u6b8a\u7684\u529f\u80fd\u800c\u5df2\u3002\n\t\t\t */\n\t\t\tbean = getObjectForBeanInstance(sharedInstance, name, beanName, null);\n\t\t}\n\n\t\t/*\n\t\t * \u5982\u679c\u4e0a\u9762\u7684\u6761\u4ef6\u4e0d\u6ee1\u8db3\uff0c\u5219\u8868\u660e sharedInstance \u53ef\u80fd\u4e3a\u7a7a\uff0c\u6b64\u65f6 beanName \u5bf9\u5e94\u7684 bean\n\t\t * \u5b9e\u4f8b\u53ef\u80fd\u8fd8\u672a\u521b\u5efa\u3002\u8fd9\u91cc\u8fd8\u5b58\u5728\u53e6\u4e00\u79cd\u53ef\u80fd\uff0c\u5982\u679c\u5f53\u524d\u5bb9\u5668\u6709\u7236\u5bb9\u5668\uff0cbeanName \u5bf9\u5e94\u7684 bean \u5b9e\u4f8b\n\t\t * \u53ef\u80fd\u662f\u5728\u7236\u5bb9\u5668\u4e2d\u88ab\u521b\u5efa\u4e86\uff0c\u6240\u4ee5\u5728\u521b\u5efa\u5b9e\u4f8b\u524d\uff0c\u9700\u8981\u5148\u53bb\u7236\u5bb9\u5668\u91cc\u68c0\u67e5\u4e00\u4e0b\u3002\n\t\t */\n\t\telse {\n\t\t\t// BeanFactory \u4e0d\u7f13\u5b58 Prototype \u7c7b\u578b\u7684 bean\uff0c\u65e0\u6cd5\u5904\u7406\u8be5\u7c7b\u578b bean \u7684\u5faa\u73af\u4f9d\u8d56\u95ee\u9898\n            //\u5224\u65ad\u662f\u5426\u5b58\u5728\u5faa\u73af\u4f9d\u8d56\n\t\t\tif (isPrototypeCurrentlyInCreation(beanName)) {\n\t\t\t\tthrow new BeanCurrentlyInCreationException(beanName);\n\t\t\t}\n\n\t\t\t// \u5982\u679c sharedInstance = null\uff0c\u5219\u5230\u7236\u5bb9\u5668\u4e2d\u67e5\u627e bean \u5b9e\u4f8b\n\t\t\tBeanFactory parentBeanFactory = getParentBeanFactory();\n\t\t\tif (parentBeanFactory != null && !containsBeanDefinition(beanName)) {\n\t\t\t\t// Not found -> check parent.\n\t\t\t\tString nameToLookup = originalBeanName(name);\n\t\t\t\tif (parentBeanFactory instanceof AbstractBeanFactory) {\n\t\t\t\t\treturn ((AbstractBeanFactory) parentBeanFactory).doGetBean(\n\t\t\t\t\t\t\tnameToLookup, requiredType, args, typeCheckOnly);\n\t\t\t\t}\n\t\t\t\telse if (args != null) {\n\t\t\t\t\t// Delegation to parent with explicit args.\n\t\t\t\t\treturn (T) parentBeanFactory.getBean(nameToLookup, args);\n\t\t\t\t}\n\t\t\t\telse if (requiredType != null) {\n\t\t\t\t\t// No args -> delegate to standard getBean method.\n\t\t\t\t\treturn parentBeanFactory.getBean(nameToLookup, requiredType);\n\t\t\t\t}\n\t\t\t\telse {\n\t\t\t\t\treturn (T) parentBeanFactory.getBean(nameToLookup);\n\t\t\t\t}\n\t\t\t}\n\n\t\t\tif (!typeCheckOnly) {\n\t\t\t\tmarkBeanAsCreated(beanName);\n\t\t\t}\n\n\t\t\ttry {\n\t\t\t\t// \u5408\u5e76\u7236 BeanDefinition \u4e0e\u5b50 BeanDefinition\n\t\t\t\tfinal RootBeanDefinition mbd = getMergedLocalBeanDefinition(beanName);\n\t\t\t\tcheckMergedBeanDefinition(mbd, beanName, args);\n\n\t\t\t\t// \u68c0\u67e5\u662f\u5426\u6709 dependsOn \u4f9d\u8d56\uff0c\u5982\u679c\u6709\u5219\u5148\u521d\u59cb\u5316\u6240\u4f9d\u8d56\u7684 bean\n\t\t\t\tString[] dependsOn = mbd.getDependsOn();\n\t\t\t\tif (dependsOn != null) {\n\t\t\t\t\tfor (String dep : dependsOn) {\n\n\t\t\t\t\t\t/*\n\t\t\t\t\t\t * \u68c0\u6d4b\u662f\u5426\u5b58\u5728 depends-on \u5faa\u73af\u4f9d\u8d56\uff0c\u82e5\u5b58\u5728\u5219\u629b\u5f02\u5e38\u3002\u6bd4\u5982 A \u4f9d\u8d56 B\uff0c\n\t\t\t\t\t\t * B \u53c8\u4f9d\u8d56 A\uff0c\u4ed6\u4eec\u7684\u914d\u7f6e\u5982\u4e0b\uff1a\n\t\t\t\t\t\t *   <bean id="beanA" class="BeanA" depends-on="beanB">\n\t\t\t\t\t\t *   <bean id="beanB" class="BeanB" depends-on="beanA">\n\t\t\t\t\t\t *\n\t\t\t\t\t\t * beanA \u8981\u6c42 beanB \u5728\u5176\u4e4b\u524d\u88ab\u521b\u5efa\uff0c\u4f46 beanB \u53c8\u8981\u6c42 beanA \u5148\u4e8e\u5b83\n\t\t\t\t\t\t * \u521b\u5efa\u3002\u8fd9\u4e2a\u65f6\u5019\u5f62\u6210\u4e86\u5faa\u73af\uff0c\u5bf9\u4e8e depends-on \u5faa\u73af\uff0cSpring \u4f1a\u76f4\u63a5\n\t\t\t\t\t\t * \u629b\u51fa\u5f02\u5e38\n\t\t\t\t\t\t */\n\n\t\t\t\t\t\tif (isDependent(beanName, dep)) {\n\t\t\t\t\t\t\tthrow new BeanCreationException(mbd.getResourceDescription(), beanName,\n\t\t\t\t\t\t\t\t\t"Circular depends-on relationship between \'" + beanName + "\' and \'" + dep + "\'");\n\t\t\t\t\t\t}\n\t\t\t\t\t\t// \u6ce8\u518c\u4f9d\u8d56\u8bb0\u5f55\n\t\t\t\t\t\tregisterDependentBean(dep, beanName);\n\t\t\t\t\t\ttry {\n\t\t\t\t\t\t\t// \u52a0\u8f7d depends-on \u4f9d\u8d56\n\t\t\t\t\t\t\tgetBean(dep);\n\t\t\t\t\t\t}\n\t\t\t\t\t\tcatch (NoSuchBeanDefinitionException ex) {\n\t\t\t\t\t\t\tthrow new BeanCreationException(mbd.getResourceDescription(), beanName,\n\t\t\t\t\t\t\t\t\t"\'" + beanName + "\' depends on missing bean \'" + dep + "\'", ex);\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\t// \u521b\u5efa bean \u5b9e\u4f8b\n\t\t\t\tif (mbd.isSingleton()) {\n\n\t\t\t\t\t/*\n\t\t\t\t\t * \u8fd9\u91cc\u5e76\u6ca1\u6709\u76f4\u63a5\u8c03\u7528 createBean \u65b9\u6cd5\u521b\u5efa bean \u5b9e\u4f8b\uff0c\u800c\u662f\u901a\u8fc7\n\t\t\t\t\t * getSingleton(String, ObjectFactory) \u65b9\u6cd5\u83b7\u53d6 bean \u5b9e\u4f8b\u3002\n\t\t\t\t\t * getSingleton(String, ObjectFactory) \u65b9\u6cd5\u4f1a\u5728\u5185\u90e8\u8c03\u7528\n\t\t\t\t\t * ObjectFactory \u7684 getObject() \u65b9\u6cd5\u521b\u5efa bean\uff0c\u5e76\u4f1a\u5728\u521b\u5efa\u5b8c\u6210\u540e\uff0c\n\t\t\t\t\t * \u5c06 bean \u653e\u5165\u7f13\u5b58\u4e2d\u3002\n\t\t\t\t\t */\n\n\t\t\t\t\tsharedInstance = getSingleton(beanName, () -> {\n\t\t\t\t\t\ttry {\n\t\t\t\t\t\t\treturn createBean(beanName, mbd, args);\n\t\t\t\t\t\t}\n\t\t\t\t\t\tcatch (BeansException ex) {\n\t\t\t\t\t\t\t// Explicitly remove instance from singleton cache: It might have been put there\n\t\t\t\t\t\t\t// eagerly by the creation process, to allow for circular reference resolution.\n\t\t\t\t\t\t\t// Also remove any beans that received a temporary reference to the bean.\n\t\t\t\t\t\t\tdestroySingleton(beanName);\n\t\t\t\t\t\t\tthrow ex;\n\t\t\t\t\t\t}\n\t\t\t\t\t});\n\t\t\t\t\t// \u5982\u679c bean \u662f FactoryBean \u7c7b\u578b\uff0c\u5219\u8c03\u7528\u5de5\u5382\u65b9\u6cd5\u83b7\u53d6\u771f\u6b63\u7684 bean \u5b9e\u4f8b\u3002\u5426\u5219\u76f4\u63a5\u8fd4\u56de bean \u5b9e\u4f8b\n\t\t\t\t\tbean = getObjectForBeanInstance(sharedInstance, name, beanName, mbd);\n\t\t\t\t}\n\t\t\t\t// \u521b\u5efa prototype \u7c7b\u578b\u7684 bean \u5b9e\u4f8b\n\t\t\t\telse if (mbd.isPrototype()) {\n\t\t\t\t\t// It\'s a prototype -> create a new instance.\n\t\t\t\t\tObject prototypeInstance = null;\n\t\t\t\t\ttry {\n\t\t\t\t\t\tbeforePrototypeCreation(beanName);\n\t\t\t\t\t\tprototypeInstance = createBean(beanName, mbd, args);\n\t\t\t\t\t}\n\t\t\t\t\tfinally {\n\t\t\t\t\t\tafterPrototypeCreation(beanName);\n\t\t\t\t\t}\n\t\t\t\t\tbean = getObjectForBeanInstance(prototypeInstance, name, beanName, mbd);\n\t\t\t\t}\n\t\t\t\t// \u521b\u5efa\u5176\u4ed6\u7c7b\u578b\u7684 bean \u5b9e\u4f8b\n\t\t\t\telse {\n\t\t\t\t\tString scopeName = mbd.getScope();\n\t\t\t\t\tfinal Scope scope = this.scopes.get(scopeName);\n\t\t\t\t\tif (scope == null) {\n\t\t\t\t\t\tthrow new IllegalStateException("No Scope registered for scope name \'" + scopeName + "\'");\n\t\t\t\t\t}\n\t\t\t\t\ttry {\n\t\t\t\t\t\tObject scopedInstance = scope.get(beanName, () -> {\n\t\t\t\t\t\t\tbeforePrototypeCreation(beanName);\n\t\t\t\t\t\t\ttry {\n\t\t\t\t\t\t\t\treturn createBean(beanName, mbd, args);\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tfinally {\n\t\t\t\t\t\t\t\tafterPrototypeCreation(beanName);\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t});\n\t\t\t\t\t\tbean = getObjectForBeanInstance(scopedInstance, name, beanName, mbd);\n\t\t\t\t\t}\n\t\t\t\t\tcatch (IllegalStateException ex) {\n\t\t\t\t\t\tthrow new BeanCreationException(beanName,\n\t\t\t\t\t\t\t\t"Scope \'" + scopeName + "\' is not active for the current thread; consider " +\n\t\t\t\t\t\t\t\t"defining a scoped proxy for this bean if you intend to refer to it from a singleton",\n\t\t\t\t\t\t\t\tex);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t\tcatch (BeansException ex) {\n\t\t\t\tcleanupAfterBeanCreationFailure(beanName);\n\t\t\t\tthrow ex;\n\t\t\t}\n\t\t}\n\n\t\t// Check if required type matches the type of the actual bean instance.\n\t\tif (requiredType != null && !requiredType.isInstance(bean)) {\n\t\t\ttry {\n\t\t\t\tT convertedBean = getTypeConverter().convertIfNecessary(bean, requiredType);\n\t\t\t\tif (convertedBean == null) {\n\t\t\t\t\tthrow new BeanNotOfRequiredTypeException(name, requiredType, bean.getClass());\n\t\t\t\t}\n\t\t\t\treturn convertedBean;\n\t\t\t}\n\t\t\tcatch (TypeMismatchException ex) {\n\t\t\t\tif (logger.isTraceEnabled()) {\n\t\t\t\t\tlogger.trace("Failed to convert bean \'" + name + "\' to required type \'" +\n\t\t\t\t\t\t\tClassUtils.getQualifiedName(requiredType) + "\'", ex);\n\t\t\t\t}\n\t\t\t\tthrow new BeanNotOfRequiredTypeException(name, requiredType, bean.getClass());\n\t\t\t}\n\t\t}\n\t\treturn (T) bean;\n\t}\n'})}),"\n",(0,a.jsxs)(e.p,{children:["\u4ece\u6e90\u7801\u5206\u6790\u4e00\u4e0b ",(0,a.jsx)(e.strong,{children:(0,a.jsx)(e.code,{children:"doGetBean"})})," \u7684\u6267\u884c\u6d41\u7a0b\u5982\u4e0b\uff1a"]}),"\n",(0,a.jsxs)(e.ol,{children:["\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"\u8f6c\u6362beanName"})}),"\n",(0,a.jsxs)(e.blockquote,{children:["\n",(0,a.jsx)(e.p,{children:"\u4f20\u5165\u7684name\u53c2\u6570\u53ef\u80fd\u662f\u522b\u540d\uff0c\u4e5f\u53ef\u80fd\u662fFactoryBean\uff0c\u7d22\u5f15\u8fd8\u9700\u8981\u8fdb\u884c\u4e00\u7cfb\u5217\u89e3\u6790"}),"\n"]}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:'\u53bb\u9664FactoryBean\u7684\u4fee\u9970\u7b26\uff0c\u4e5f\u5c31\u662f\u5982\u679cname=\u4e5f\u5c31\u662f\u5982\u679cname = "&factoryBean"\uff0c\u90a3\u4e48\u4f1a\u9996\u5148\u53bb\u9664&\u800c\u4f7fname = "factoryBean"'}),"\n",(0,a.jsx)(e.li,{children:"\u5c06\u522b\u540dalias\u8f6c\u6362\u4e3a\u6700\u7ec8\u6307\u5411\u7684beanName\uff0c\u6bd4\u5982\u522b\u540dA\u6267\u884c\u540d\u79f0\u4e3aB\u7684bean\uff0c\u800cB\u6ca1\u6709\u6307\u5411\u4efb\u4f55\u5176\u4ed6\u7684bean\uff0c\u5373\u4e3a\u6700\u7ec8\u7684bean\uff0c\u5219\u8fd4\u56deB;\u4f46\u662f\u5982\u679cB\u53c8\u6307\u5411C\uff0c\u800c\u662fC\u662f\u6700\u7ec8\u7684bean\uff0c\u5219\u8fd4\u56deC\u3002"}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"\u5c1d\u8bd5\u4ece\u7f13\u5b58\u4e2d\u83b7\u53d6\u539f\u59cb\u5355\u4f8b"})}),"\n",(0,a.jsxs)(e.blockquote,{children:["\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"\u8fd9\u5c31\u662fSpring\u7684IOC\uff0c\u9996\u5148\u5c1d\u8bd5\u4ece\u7f13\u5b58\u4e2d\u52a0\u8f7d\u5355\u4f8b\u6a21\u5f0f"})}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.h4,{id:"\u68c0\u6d4b\u662f\u5426\u4e3afactorybean\u5e76\u83b7\u53d6bean\u4ee5\u53ca\u521d\u59cb\u5316\u540e\u5904\u7406",children:"\u68c0\u6d4b\u662f\u5426\u4e3aFactoryBean\u5e76\u83b7\u53d6Bean\u4ee5\u53ca\u521d\u59cb\u5316\u540e\u5904\u7406"}),"\n",(0,a.jsxs)(e.blockquote,{children:["\n",(0,a.jsx)(e.p,{children:"\u5728doGetBean\u65b9\u6cd5\u4e2d\u9891\u7e41\u51fa\u73b0getObjectForBeanInstance\u65b9\u6cd5\uff0c\u5b83\u4e3b\u8981\u5b8c\u6210\u5bf9\u83b7\u53d6\u7684Bean Instance\u8fdb\u884c\u68c0\u6d4b\u662f\u5426\u4e3aFactoryBean\uff0c\u5982\u679c\u662fFactoryBean\u5219\u901a\u8fc7\u5de5\u5382\u65b9\u6cd5\u83b7\u53d6Bean\u4ee5\u53ca\u521d\u59cb\u5316\u540e\u5904\u7406"}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.h4,{id:"\u521b\u5efa\u5355\u4f8bbean",children:"\u521b\u5efa\u5355\u4f8bBean"}),"\n",(0,a.jsxs)(e.blockquote,{children:["\n",(0,a.jsx)(e.p,{children:"\u5982\u679c\u7f13\u5b58\u4e2d\u6ca1\u6709\u5355\u4f8bBean\u7684\u7f13\u5b58\uff0c\u5219\u9700\u8981\u4ece\u5934\u5f00\u59cb\u521b\u5efa\u5355\u4f8bBean\uff0c\u8fd9\u4e3b\u8981\u662f\u91cd\u8f7dgetSingleton\u7684\u91cd\u8f7d\u65b9\u6cd5\u6765\u5b9e\u73b0\u5355\u4f8bBean\u7684\u52a0\u8f7d\u3002"}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.h4,{id:"\u539f\u578b\u6a21\u5f0f\u7684\u4f9d\u8d56\u68c0\u67e5",children:"\u539f\u578b\u6a21\u5f0f\u7684\u4f9d\u8d56\u68c0\u67e5"}),"\n",(0,a.jsxs)(e.blockquote,{children:["\n",(0,a.jsx)(e.p,{children:"\u53ea\u6709\u5355\u4f8b\u6a21\u5f0f\u624d\u4f1a\u5c1d\u8bd5\u89e3\u51b3\u5faa\u73af\u4f9d\u8d56\uff0c\u5982\u679c\u5b58\u5728A\u4e2d\u6709B\u7684\u5c5e\u6027\uff0cB\u4e2d\u6709A\u7684\u5c5e\u6027\uff0c\u90a3\u4e48\u5f53\u4f9d\u8d56\u6ce8\u5165\u7684\u65f6\u5019\u770b\uff0c\u5c31\u4f1a\u4ea7\u751f\u5f53A\u8fd8\u672a\u521b\u5efa\u5b8c\u7684\u65f6\u5019\u56e0\u4e3a\u5bf9\u4e8eB\u7684\u521b\u5efa\u518d\u6b21\u8fd4\u56de\u521b\u5efaA\uff0c\u9020\u6210\u5faa\u73af\u4f9d\u8d56\uff0c\u4e5f\u5c31\u662f\u60c5\u51b5\uff1aisPrototypeCurrentlyInCreation(beanName)\u5224\u65ad\u4e3atrue"}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"\u5904\u7406 depends-on \u4f9d\u8d56"})}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"\u521b\u5efa\u5e76\u7f13\u5b58 bean"})}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"\u8c03\u7528 getObjectForBeanInstance \u65b9\u6cd5\uff0c\u5e76\u6309 name \u89c4\u5219\u8fd4\u56de\u76f8\u5e94\u7684 bean \u5b9e\u4f8b"})}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"\u6309\u9700\u8f6c\u6362 bean \u7c7b\u578b\uff0c\u5e76\u8fd4\u56de\u8f6c\u6362\u540e\u7684 bean \u5b9e\u4f8b"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(e.h3,{id:"2-\u65b9\u6cd5\u7684\u6e90\u7801\u89e3\u6790",children:"2. \u65b9\u6cd5\u7684\u6e90\u7801\u89e3\u6790"}),"\n",(0,a.jsx)(e.p,{children:"\u63a5\u4e0b\u6765\u9010\u6b65\u5206\u6790\u6bcf\u4e00\u4e2a\u65b9\u6cd5"}),"\n",(0,a.jsx)(e.h4,{id:"21-transformedbeanname",children:"2.1 transformedBeanName"}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.strong,{children:(0,a.jsx)(e.code,{children:"transformedBeanName(name)"})}),"  ",(0,a.jsx)(e.strong,{children:(0,a.jsx)(e.code,{children:"beanName"})})," \u7684\u8f6c\u6362\uff0c\u4e4b\u524d\u5206\u6790\u8fc7\u7531\u4e8e ",(0,a.jsx)(e.strong,{children:(0,a.jsx)(e.code,{children:"name"})})," \u53ef\u80fd\u662f ",(0,a.jsx)(e.strong,{children:(0,a.jsx)(e.code,{children:"FactoryBean"})})," \u6216\u8005\u666e\u901a\u7684 Bean\u7684\u522b\u540d\u6240\u4ee5\u9700\u8981\u8f6c\u6362\u3002"]}),"\n",(0,a.jsxs)(e.blockquote,{children:["\n",(0,a.jsx)(e.p,{children:"name\u53ef\u80fd\u662fFactoryBean\u6216\u8005\u662fbeanName\u7684\u522b\u540d\uff0c\u7528\u5f53\u524d\u8fd9\u4e2a\u65b9\u6cd5\u6765\u8fdb\u884c\u8f6c\u6362\u6210\u771f\u6b63\u7684beanName\u6765\u8fdb\u884c\u540e\u7eed\u7684\u64cd\u4f5c"}),"\n"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-java",children:"protected String transformedBeanName(String name) {\n\t//BeanFactoryUtils.transformedBeanName(name)\u5904\u7406 FactoryBean \u7c7b\u578b\n    return canonicalName(BeanFactoryUtils.transformedBeanName(name));\n}\n\n//FactoryBean\u8f6c\u6362\npublic static String transformedBeanName(String name) {\n    \t//\u5224\u7a7a\n\t\tAssert.notNull(name, \"'name' must not be null\");\n    \t//\u5224\u65ad\u662f\u5426\u5df2 & \u5f00\u5934\u662f\u5426\u4e3aFactoryBean\n\t\tif (!name.startsWith(BeanFactory.FACTORY_BEAN_PREFIX)) {\n\t\t\treturn name;\n\t\t}\n\t\treturn transformedBeanNameCache.computeIfAbsent(name, beanName -> {\n\t\t\tdo {\n\t\t\t\tbeanName = beanName.substring(BeanFactory.FACTORY_BEAN_PREFIX.length());\n\t\t\t}\n\t\t\twhile (beanName.startsWith(BeanFactory.FACTORY_BEAN_PREFIX));\n\t\t\treturn beanName;\n\t\t});\n}\n\n//\u5c06\u522b\u540d\u5904\u7406\u6210BeanName\npublic String canonicalName(String name) {\n\t\tString canonicalName = name;\n\t\t// Handle aliasing...\n\t\tString resolvedName;\n\t\tdo {\n\t\t\tresolvedName = this.aliasMap.get(canonicalName);\n\t\t\tif (resolvedName != null) {\n\t\t\t\tcanonicalName = resolvedName;\n\t\t\t}\n\t\t}\n\t\twhile (resolvedName != null);\n\t\treturn canonicalName;\n\t}\n\n"})}),"\n",(0,a.jsxs)(e.p,{children:["\u4ece\u4e0a\u9762\u53ef\u4ee5\u770b\u51fa\u6765 ",(0,a.jsx)(e.strong,{children:"transformedBeanName"})," \u65b9\u6cd5\u4e3b\u8981\u662f\u7528\u6765\u5904\u7406beanName\u3002"]}),"\n",(0,a.jsx)(e.h4,{id:"22-getsingletonbeanname",children:"2.2 getSingleton(beanName)"}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.strong,{children:(0,a.jsx)(e.code,{children:"getSingleton(beanName)"})})," \u4e3b\u8981\u4ece\u7f13\u5b58\u4e2d\u83b7\u53d6bean\u3002"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-java",children:"public Object getSingleton(String beanName) {\n\t\treturn getSingleton(beanName, true);\n}\n\n\tprotected Object getSingleton(String beanName, boolean allowEarlyReference) {\n        //\u4ece\u7f13\u5b58Map\u4e2d\u83b7\u53d6\n\t\tObject singletonObject = this.singletonObjects.get(beanName);\n\t\tif (singletonObject == null && isSingletonCurrentlyInCreation(beanName)) {\n\t\t\tsynchronized (this.singletonObjects) {\n                //\u4eceearlySingletonObjects\u83b7\u53d6bean\n\t\t\t\tsingletonObject = this.earlySingletonObjects.get(beanName);\n\t\t\t\tif (singletonObject == null && allowEarlyReference) {\n\t\t\t\t\tObjectFactory<?> singletonFactory = this.singletonFactories.get(beanName);\n\t\t\t\t\tif (singletonFactory != null) {\n\t\t\t\t\t\tsingletonObject = singletonFactory.getObject();\n\t\t\t\t\t\tthis.earlySingletonObjects.put(beanName, singletonObject);\n\t\t\t\t\t\tthis.singletonFactories.remove(beanName);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\treturn singletonObject;\n\t}\n"})}),"\n",(0,a.jsx)(e.h4,{id:"23-abstractbeanfactorygetobjectforbeaninstance\u65b9\u6cd5",children:"2.3 AbstractBeanFactory#getObjectForBeanInstance\u65b9\u6cd5"}),"\n",(0,a.jsx)(e.p,{children:"\u901a\u8fc7\u7ed9\u5b9a\u7684bean\u5b9e\u4f8b\u83b7\u53d6\u5bf9\u8c61\uff0c\u8fd4\u56de\u7684bean\u4e3a\u81ea\u5df1\u6216\u8005\u662fFactoryBean\u521b\u5efa\u7684\u5bf9\u8c61\u3002"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-java",children:"\tprotected Object getObjectForBeanInstance(\n\t\t\tObject beanInstance, String name, String beanName, @Nullable RootBeanDefinition mbd) {\n\n\t\t//\u5224\u65adname\u662f\u5426\u4e3aBean FactoryBean\u7684\u5f15\u7528\n\t\tif (BeanFactoryUtils.isFactoryDereference(name)) {\n\t\t\tif (beanInstance instanceof NullBean) {\n\t\t\t\treturn beanInstance;\n\t\t\t}\n\t\t\tif (!(beanInstance instanceof FactoryBean)) {\n\t\t\t\tthrow new BeanIsNotAFactoryException(transformedBeanName(name), beanInstance.getClass());\n\t\t\t}\n\t\t}\n\n\t\t//\u73b0\u5728beanInstance\u53ef\u80fd\u662f\u666e\u901a\u7684bena\u6216\u8005FactoryBean\uff0c\u5982\u679c\u662f\u666e\u901a\u7684Bean\u76f4\u63a5\u8fd4\u56de\u5b9e\u4f8b\n\t\tif (!(beanInstance instanceof FactoryBean) || BeanFactoryUtils.isFactoryDereference(name)) {\n\t\t\treturn beanInstance;\n\t\t}\n\n\t\t//\u5982\u679c\u662fFactoryBean\uff0c\u4f7f\u7528FactoryBean\u6765\u521b\u5efa\u4e00\u4e2abean\u5b9e\u4f8b\n\t\tObject object = null;\n\t\tif (mbd == null) {\n\t\t\tobject = getCachedObjectForFactoryBean(beanName);\n\t\t}\n\t\tif (object == null) {\n\t\t\t// Return bean instance from factory.\n\t\t\tFactoryBean<?> factory = (FactoryBean<?>) beanInstance;\n\t\t\t// Caches object obtained from FactoryBean if it is a singleton.\n\t\t\tif (mbd == null && containsBeanDefinition(beanName)) {\n\t\t\t\tmbd = getMergedLocalBeanDefinition(beanName);\n\t\t\t}\n\t\t\tboolean synthetic = (mbd != null && mbd.isSynthetic());\n            //\u8fd9\u91cc\u4eceFactoryBean\u4e2d\u83b7\u53d6\u521b\u5efa\u7684Bean\n\t\t\tobject = getObjectFromFactoryBean(factory, beanName, !synthetic);\n\t\t}\n\t\treturn object;\n\t}\n"})}),"\n",(0,a.jsxs)(e.blockquote,{children:["\n",(0,a.jsxs)(e.p,{children:["FactoryBean\u521b\u5efa\u7684Bean\u7684\u540d\u79f0FactoryBean\u672c\u8eab\u4f5c\u4e3a\u4e00\u4e2aBean\u5728Spring\u5bb9\u5668\u4e2d\u662f\u7528\u662f\u5426\u5305\u542b ",(0,a.jsx)(e.strong,{children:(0,a.jsx)(e.code,{children:"&"})})," \u524d\u7f00\u6765\u533a\u5206\u7684\u3002"]}),"\n"]}),"\n",(0,a.jsx)(e.h4,{id:"24--\u521b\u5efa\u5355\u4f8bbean-defaultsingletonbeanregistrygetsingleton",children:"2.4  \u521b\u5efa\u5355\u4f8bBean DefaultSingletonBeanRegistry#getSingleton"}),"\n",(0,a.jsxs)(e.p,{children:["\u5728bean\u7684\u521b\u5efa\u8fc7\u7a0b\uff0c\u901a\u8fc7\u5224\u65ad ",(0,a.jsx)(e.strong,{children:(0,a.jsx)(e.code,{children:"scope"})})," \u6765\u5224\u65ad\u521b\u5efa\u7684Bean\u7684\u7c7b\u578b"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-java",children:"\t\t\t\tif (mbd.isSingleton()) {\n                    //\u521b\u5efa\u5355\u4f8b\n\t\t\t\t\tsharedInstance = getSingleton(beanName, () -> {\n\t\t\t\t\t\ttry {\n\t\t\t\t\t\t\treturn createBean(beanName, mbd, args);\n\t\t\t\t\t\t}\n\t\t\t\t\t\tcatch (BeansException ex) {\n\t\t\t\t\t\t\tdestroySingleton(beanName);\n\t\t\t\t\t\t\tthrow ex;\n\t\t\t\t\t\t}\n\t\t\t\t\t});\n\t\t\t\t\tbean = getObjectForBeanInstance(sharedInstance, name, beanName, mbd);\n\t\t\t\t}\n"})}),"\n",(0,a.jsxs)(e.p,{children:["\u901a\u8fc7\u4e0a\u9762\u53ef\u4ee5\u770b\u51fa\u4e3b\u8981\u662f\u901a\u8fc7\u8c03\u7528 ",(0,a.jsx)(e.strong,{children:(0,a.jsx)(e.code,{children:"DefaultSingletonBeanRegistry#getSingleton"})})," \u6765\u521b\u5efaBean"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-java",children:'\t\tpublic Object getSingleton(String beanName, ObjectFactory<?> singletonFactory) {\n\t\tAssert.notNull(beanName, "Bean name must not be null");\n\t\tsynchronized (this.singletonObjects) {\n\t\t\t//\u4ece\u7f13\u5b58\u4e2d\u83b7\u53d6Bean\n\t\t\tObject singletonObject = this.singletonObjects.get(beanName);\n\t\t\tif (singletonObject == null) {\n\n\t\t\t\tbeforeSingletonCreation(beanName);\n\t\t\t\tboolean newSingleton = false;\n\t\t\t\tboolean recordSuppressedExceptions = (this.suppressedExceptions == null);\n\t\t\t\tif (recordSuppressedExceptions) {\n\t\t\t\t\tthis.suppressedExceptions = new LinkedHashSet<>();\n\t\t\t\t}\n\t\t\t\ttry {\n\t\t\t\t\t//\u521b\u5efaBean\n\t\t\t\t\tsingletonObject = singletonFactory.getObject();\n\t\t\t\t\tnewSingleton = true;\n\t\t\t\t}\n\t\t\t\tcatch (IllegalStateException ex) {\n\t\t\t\t\t//\u4ece\u7f13\u5b58\u4e2d\u83b7\u53d6\n\t\t\t\t\tsingletonObject = this.singletonObjects.get(beanName);\n\t\t\t\t\tif (singletonObject == null) {\n\t\t\t\t\t\tthrow ex;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tcatch (BeanCreationException ex) {\n\t\t\t\t\tif (recordSuppressedExceptions) {\n\t\t\t\t\t\tfor (Exception suppressedException : this.suppressedExceptions) {\n\t\t\t\t\t\t\tex.addRelatedCause(suppressedException);\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t\tthrow ex;\n\t\t\t\t}\n\t\t\t\tfinally {\n\t\t\t\t\tif (recordSuppressedExceptions) {\n\t\t\t\t\t\tthis.suppressedExceptions = null;\n\t\t\t\t\t}\n\t\t\t\t\tafterSingletonCreation(beanName);\n\t\t\t\t}\n\t\t\t\tif (newSingleton) {\n\t\t\t\t\taddSingleton(beanName, singletonObject);\n\t\t\t\t}\n\t\t\t}\n\t\t\treturn singletonObject;\n\t\t}\n\t}\n'})}),"\n",(0,a.jsxs)(e.p,{children:["\u4e0a\u9762\u7684\u4e3b\u8981\u4e00\u884c\u4ee3\u7801 ",(0,a.jsx)(e.strong,{children:(0,a.jsx)(e.code,{children:"singletonObject = singletonFactory.getObject();"})})," \u6765\u83b7\u53d6\uff0c\u4e5f\u5c31\u662f\u4ee3\u7801\u4e2d\u6267\u884c\u7684 ",(0,a.jsx)(e.strong,{children:(0,a.jsx)(e.code,{children:"createBean(beanName, mbd, args)"})})]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-java",children:"sharedInstance = getSingleton(beanName, () -> {\n\t\t\t\t\t\ttry {\n                            //\u8fd9\u91cc\u624d\u662f\u771f\u6b63\u7684\u8c03\u7528\u521b\u5efaBean\n\t\t\t\t\t\t\treturn createBean(beanName, mbd, args);\n\t\t\t\t\t\t}\n\t\t\t\t\t\tcatch (BeansException ex) {\n\t\t\t\t\t\t\tdestroySingleton(beanName);\n\t\t\t\t\t\t\tthrow ex;\n\t\t\t\t\t\t}\n\t\t\t\t\t});\n"})}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.strong,{children:(0,a.jsx)(e.code,{children:"createbean"})})," \u662f ",(0,a.jsx)(e.strong,{children:(0,a.jsx)(e.code,{children:"AbstractBeanFactory"})})," \u7c7b\u7684\u4e00\u4e2a\u62bd\u8c61\u65b9\u6cd5\uff0c\u5b9e\u73b0\u770b\u5177\u4f53\u7684\u5b50\u7c7b\u3002 \u62bd\u8c61\u5b50\u7c7b ",(0,a.jsx)(e.strong,{children:(0,a.jsx)(e.code,{children:"AbstractAutowireCapableBeanFactory"})})," \u5bf9  ",(0,a.jsx)(e.strong,{children:(0,a.jsx)(e.code,{children:"createBean"})})," \u65b9\u6cd5\u8fdb\u884c\u4e86\u5b9e\u73b0\u3002"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-java",children:'\tprotected Object createBean(String beanName, RootBeanDefinition mbd, @Nullable Object[] args)\n\t\t\tthrows BeanCreationException {\n\n\n\t\tRootBeanDefinition mbdToUse = mbd;\n\n\t\t//\u786e\u5b9a\u5e76\u52a0\u8f7dbean\u7684class\n\t\tClass<?> resolvedClass = resolveBeanClass(mbd, beanName);\n\t\tif (resolvedClass != null && !mbd.hasBeanClass() && mbd.getBeanClassName() != null) {\n\t\t\tmbdToUse = new RootBeanDefinition(mbd);\n\t\t\tmbdToUse.setBeanClass(resolvedClass);\n\t\t}\n\n\t\t// \u51c6\u5907\u9700\u8981\u7684\u65b9\u6cd5\n\t\ttry {\n\t\t\tmbdToUse.prepareMethodOverrides();\n\t\t}\n\t\tcatch (BeanDefinitionValidationException ex) {\n\t\t\tthrow new BeanDefinitionStoreException(mbdToUse.getResourceDescription(),\n\t\t\t\t\tbeanName, "Validation of method overrides failed", ex);\n\t\t}\n\n\t\ttry {\n\t\t\t// \u7ed9InstantiationAwareBeanPostProcessor\u8fd4\u56de\u4e00\u4e2a\u4ee3\u7406\u5bf9\u8c61\u800c\u4e0d\u662f\u771f\u6b63\u7684\u5bf9\u8c61\n\t\t\t// \u8fd9\u91cc\u4e3b\u8981\u5904\u7406\u7684InstantiationAwareBeanPostProcessor\uff0c\u5904\u7406\u5bf9\u8c61\u7684\u5b9e\u4f8b\u5316\n\t\t\tObject bean = resolveBeforeInstantiation(beanName, mbdToUse);\n\t\t\tif (bean != null) {\n\t\t\t\treturn bean;\n\t\t\t}\n\t\t}\n\t\tcatch (Throwable ex) {\n\t\t\tthrow new BeanCreationException(mbdToUse.getResourceDescription(), beanName,\n\t\t\t\t\t"BeanPostProcessor before instantiation of bean failed", ex);\n\t\t}\n\n\t\ttry {\n\t\t\t//\u521b\u5efa\u771f\u6b63\u7684bean\n\t\t\tObject beanInstance = doCreateBean(beanName, mbdToUse, args);\n\n\t\t\treturn beanInstance;\n\t\t}\n\t\tcatch (BeanCreationException | ImplicitlyAppearedSingletonException ex) {\n\t\t\tthrow ex;\n\t\t}\n\t\tcatch (Throwable ex) {\n\t\t\tthrow new BeanCreationException(\n\t\t\t\t\tmbdToUse.getResourceDescription(), beanName, "Unexpected exception during bean creation", ex);\n\t\t}\n\t}\n'})}),"\n",(0,a.jsxs)(e.blockquote,{children:["\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"Object bean = resolveBeforeInstantiation(beanName, mbdToUse) \u4e0a\u9762\u7684\u8fd9\u6bb5\u4ee3\u7801\u662f\u9700\u8981\u5173\u6ce8\u7684\uff0c\u8fd9\u4e2a\u4e3b\u8981\u7528\u6765\u5904\u7406\u5b9e\u73b0\u4e86InstantiationAwareBeanPostProcessor\u63a5\u53e3\u7684\u7c7b"})}),"\n"]}),"\n",(0,a.jsxs)(e.p,{children:["\u5728\u5bf9\u4e8e\u4e0d\u662f\u5b9e\u73b0\u4ee3\u7406\u7c7b\u4f3c\u901a\u8fc7\u8c03\u7528 ",(0,a.jsx)(e.strong,{children:(0,a.jsx)(e.code,{children:"doCreateBean"})})," \u65b9\u6cd5\u6765\u521b\u5efa\u5bf9\u8c61\u7684\uff1a"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-java",children:'\tprotected Object doCreateBean(final String beanName, final RootBeanDefinition mbd, final @Nullable Object[] args)\n\t\t\tthrows BeanCreationException {\n\n\t\t// \u5b9e\u4f8b\u5316 bean.\n\t\tBeanWrapper instanceWrapper = null;\n\t\tif (mbd.isSingleton()) {\n\t\t\tinstanceWrapper = this.factoryBeanInstanceCache.remove(beanName);\n\t\t}\n\t\tif (instanceWrapper == null) {\n\t\t\tinstanceWrapper = createBeanInstance(beanName, mbd, args);\n\t\t}\n\t\tfinal Object bean = instanceWrapper.getWrappedInstance();\n\t\tClass<?> beanType = instanceWrapper.getWrappedClass();\n\t\tif (beanType != NullBean.class) {\n\t\t\tmbd.resolvedTargetType = beanType;\n\t\t}\n\n\t\t// \u4e0b\u9762\u5f00\u59cb\u5904\u7406 Bean\u5b9e\u73b0\u7684 BeanPostProcessor\n\t\tsynchronized (mbd.postProcessingLock) {\n\t\t\tif (!mbd.postProcessed) {\n\t\t\t\ttry {\n\t\t\t\t\t//\u5904\u7406\u5b9e\u73b0\u4e86MergedBeanDefinitionPostProcessor\u63a5\u53e3\u7684\n\t\t\t\t\tapplyMergedBeanDefinitionPostProcessors(mbd, beanType, beanName);\n\t\t\t\t}\n\t\t\t\tcatch (Throwable ex) {\n\t\t\t\t\tthrow new BeanCreationException(mbd.getResourceDescription(), beanName,\n\t\t\t\t\t\t\t"Post-processing of merged bean definition failed", ex);\n\t\t\t\t}\n\t\t\t\tmbd.postProcessed = true;\n\t\t\t}\n\t\t}\n\n\t\t//\u5faa\u73af\u5f15\u7528\u7684\u5904\u7406\n\t\tboolean earlySingletonExposure = (mbd.isSingleton() && this.allowCircularReferences &&\n\t\t\t\tisSingletonCurrentlyInCreation(beanName));\n\t\tif (earlySingletonExposure) {\n\t\t\taddSingletonFactory(beanName, () -> getEarlyBeanReference(beanName, mbd, bean));\n\t\t}\n\n\t\t// \u521d\u59cb\u5316Bean\n\t\tObject exposedObject = bean;\n\t\ttry {\n            //\u5904\u7406InstantiationAwareBeanPostProcessor\u7684postProcessAfterInstantiation\n\t\t\tpopulateBean(beanName, mbd, instanceWrapper);\n\t\t\t//\u521d\u59cb\u5316Bean -- \u5305\u542b\u5904\u7406 BeanPostProcessor\u7684\u5b9e\u73b0\u4ee5\u53cainit\u65b9\u6cd5\n\t\t\texposedObject = initializeBean(beanName, exposedObject, mbd);\n\t\t}\n\t\tcatch (Throwable ex) {\n\t\t\tif (ex instanceof BeanCreationException && beanName.equals(((BeanCreationException) ex).getBeanName())) {\n\t\t\t\tthrow (BeanCreationException) ex;\n\t\t\t}\n\t\t\telse {\n\t\t\t\tthrow new BeanCreationException(\n\t\t\t\t\t\tmbd.getResourceDescription(), beanName, "Initialization of bean failed", ex);\n\t\t\t}\n\t\t}\n\n\t\tif (earlySingletonExposure) {\n\t\t\tObject earlySingletonReference = getSingleton(beanName, false);\n\t\t\tif (earlySingletonReference != null) {\n\t\t\t\tif (exposedObject == bean) {\n\t\t\t\t\texposedObject = earlySingletonReference;\n\t\t\t\t}\n\t\t\t\telse if (!this.allowRawInjectionDespiteWrapping && hasDependentBean(beanName)) {\n\t\t\t\t\tString[] dependentBeans = getDependentBeans(beanName);\n\t\t\t\t\tSet<String> actualDependentBeans = new LinkedHashSet<>(dependentBeans.length);\n\t\t\t\t\tfor (String dependentBean : dependentBeans) {\n\t\t\t\t\t\tif (!removeSingletonIfCreatedForTypeCheckOnly(dependentBean)) {\n\t\t\t\t\t\t\tactualDependentBeans.add(dependentBean);\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t\tif (!actualDependentBeans.isEmpty()) {\n\t\t\t\t\t\tthrow new BeanCurrentlyInCreationException(beanName,\n\t\t\t\t\t\t\t\t"Bean with name \'" + beanName + "\' has been injected into other beans [" +\n\t\t\t\t\t\t\t\tStringUtils.collectionToCommaDelimitedString(actualDependentBeans) +\n\t\t\t\t\t\t\t\t"] in its raw version as part of a circular reference, but has eventually been " +\n\t\t\t\t\t\t\t\t"wrapped. This means that said other beans do not use the final version of the " +\n\t\t\t\t\t\t\t\t"bean. This is often the result of over-eager type matching - consider using " +\n\t\t\t\t\t\t\t\t"\'getBeanNamesOfType\' with the \'allowEagerInit\' flag turned off, for example.");\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\t// \u5904\u7406\u5b9e\u73b0\u4e86DisposableBean\u63a5\u53e3\u7684bean\n\t\ttry {\n\t\t\tregisterDisposableBeanIfNecessary(beanName, bean, mbd);\n\t\t}\n\t\tcatch (BeanDefinitionValidationException ex) {\n\t\t\tthrow new BeanCreationException(\n\t\t\t\t\tmbd.getResourceDescription(), beanName, "Invalid destruction signature", ex);\n\t\t}\n\n\t\treturn exposedObject;\n\t}\n'})}),"\n",(0,a.jsxs)(e.blockquote,{children:["\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.strong,{children:(0,a.jsx)(e.code,{children:"exposedObject = initializeBean(beanName, exposedObject, mbd)"})})," \u8fd9\u4e2a\u65b9\u6cd5\u4e3b\u8981\u6267\u884c\u4e86\u6211\u4eec\u5b9e\u73b0\u7684 BeanPostProcessor\u3002"]}),"\n",(0,a.jsx)(e.p,{children:"BeanPostProcessor\u7684Bean\u88ab\u5355\u72ec\u4fdd\u5b58\u5bf9\u8c61\u7684\u79c1\u6709\u53d8\u91cf"}),"\n"]})]})}function b(t={}){const{wrapper:e}={...(0,r.a)(),...t.components};return e?(0,a.jsx)(e,{...t,children:(0,a.jsx)(d,{...t})}):d(t)}},1151:(t,e,n)=>{n.d(e,{Z:()=>i,a:()=>s});var a=n(7294);const r={},o=a.createContext(r);function s(t){const e=a.useContext(o);return a.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function i(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:s(t.components),a.createElement(o.Provider,{value:e},t.children)}}}]);