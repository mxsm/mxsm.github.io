"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[346],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>u});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},m="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},b=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(t),b=r,u=m["".concat(s,".").concat(b)]||m[b]||g[b]||o;return t?a.createElement(u,i(i({ref:n},c),{},{components:t})):a.createElement(u,i({ref:n},c))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=b;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[m]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},1433:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=t(7462),r=(t(7294),t(3905));const o={title:"SpringBean\u5faa\u73af\u4f9d\u8d56\u6e90\u7801\u89e3\u6790",date:new Date("2018-06-18T00:00:00.000Z"),weight:4},i=void 0,l={unversionedId:"spring/spring-framework/core-source-analysis/springBean-circular-dependency",id:"spring/spring-framework/core-source-analysis/springBean-circular-dependency",title:"SpringBean\u5faa\u73af\u4f9d\u8d56\u6e90\u7801\u89e3\u6790",description:"1. \u4ec0\u4e48\u662fSpring Bean\u7684\u5faa\u73af\u4f9d\u8d56",source:"@site/docs/spring/spring-framework/core-source-analysis/springBean-circular-dependency.md",sourceDirName:"spring/spring-framework/core-source-analysis",slug:"/spring/spring-framework/core-source-analysis/springBean-circular-dependency",permalink:"/docs/spring/spring-framework/core-source-analysis/springBean-circular-dependency",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/spring/spring-framework/core-source-analysis/springBean-circular-dependency.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1672841610,formattedLastUpdatedAt:"Jan 4, 2023",frontMatter:{title:"SpringBean\u5faa\u73af\u4f9d\u8d56\u6e90\u7801\u89e3\u6790",date:"2018-06-18T00:00:00.000Z",weight:4},sidebar:"springframework",previous:{title:"Spring XML\u89e3\u6790\u6e90\u7801\u5206\u6790",permalink:"/docs/spring/spring-framework/core-source-analysis/spring-xml"},next:{title:"Spring\u4e8b\u52a1\u5904\u7406\u6e90\u7801\u89e3\u6790",permalink:"/docs/spring/spring-framework/core-source-analysis/transaction-processing"}},s={},p=[{value:"1. \u4ec0\u4e48\u662fSpring Bean\u7684\u5faa\u73af\u4f9d\u8d56",id:"1-\u4ec0\u4e48\u662fspring-bean\u7684\u5faa\u73af\u4f9d\u8d56",level:3},{value:"2. \u600e\u4e48\u68c0\u67e5\u5faa\u73af\u4f9d\u8d56",id:"2-\u600e\u4e48\u68c0\u67e5\u5faa\u73af\u4f9d\u8d56",level:3},{value:"3. Spring\u600e\u4e48\u89e3\u51b3\u5faa\u73af\u4f9d\u8d56",id:"3-spring\u600e\u4e48\u89e3\u51b3\u5faa\u73af\u4f9d\u8d56",level:3},{value:"3.1 Spring\u5faa\u73af\u4f9d\u8d56\u89e3\u51b3\u7684\u6e90\u7801\u89e3\u6790--5.2.X\u7684\u6e90\u7801\u7248\u672c",id:"31-spring\u5faa\u73af\u4f9d\u8d56\u89e3\u51b3\u7684\u6e90\u7801\u89e3\u6790--52x\u7684\u6e90\u7801\u7248\u672c",level:4}],c={toc:p};function m(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"1-\u4ec0\u4e48\u662fspring-bean\u7684\u5faa\u73af\u4f9d\u8d56"},"1. \u4ec0\u4e48\u662fSpring Bean\u7684\u5faa\u73af\u4f9d\u8d56"),(0,r.kt)("p",null,"\u4e24\u4e2a\u6216\u8005\u4e24\u4e2a\u4ee5\u4e0a\u7684bean\u4e92\u76f8\u6301\u6709\u5bf9\u65b9\u3001\u6700\u7ec8\u5f62\u6210 ",(0,r.kt)("strong",{parentName:"p"},"\u95ed\u73af")," \u3002\u5982\u4e0b\u56fe\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/mxsm/document/blob/master/image/Spring/Springframework/SpringBean%E5%BE%AA%E7%8E%AF%E5%BC%95%E7%94%A8.png?raw=true",alt:null})),(0,r.kt)("p",null,"A\u3001B\u3001C\u4e09\u4e2aBean\u5f62\u6210\u4e86\u5faa\u73af\u4f9d\u8d56\u3002"),(0,r.kt)("p",null,"Spring\u4e2d\u5faa\u73af\u4f9d\u8d56\u7684\u573a\u666f\u6709\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u6784\u9020\u51fd\u6570\u5faa\u73af\u4f9d\u8d56"),(0,r.kt)("li",{parentName:"ol"},"Field\u5c5e\u6027\u5faa\u73af\u4f9d\u8d56")),(0,r.kt)("h3",{id:"2-\u600e\u4e48\u68c0\u67e5\u5faa\u73af\u4f9d\u8d56"},"2. \u600e\u4e48\u68c0\u67e5\u5faa\u73af\u4f9d\u8d56"),(0,r.kt)("p",null,"\u68c0\u6d4b\u5faa\u73af\u4f9d\u8d56\u76f8\u5bf9\u6bd4\u8f83\u5bb9\u6613\uff0cBean\u5728\u521b\u5efa\u7684\u65f6\u5019\u53ef\u4ee5\u7ed9\u8be5Bean\u6253\u6807\uff0c\u5982\u679c\u9012\u5f52\u8c03\u7528\u56de\u6765\u53d1\u73b0\u6b63\u5728\u521b\u5efa\u4e2d\u7684\u8bdd\uff0c\u5373\u8bf4\u660e\u4e86\u5faa\u73af\u4f9d\u8d56\u4e86\u3002"),(0,r.kt)("h3",{id:"3-spring\u600e\u4e48\u89e3\u51b3\u5faa\u73af\u4f9d\u8d56"},"3. Spring\u600e\u4e48\u89e3\u51b3\u5faa\u73af\u4f9d\u8d56"),(0,r.kt)("p",null,"\u5728\u5206\u6790Spring\u6e90\u7801\u4e2d\u5982\u4f55\u89e3\u51b3\u5faa\u73af\u4f9d\u8d56\u7684\u8fc7\u7a0b\u4e2d\u524d\uff0c\u6211\u4eec\u5148\u4e86\u89e3\u4e00\u4e0bSpring\u7684Bean\u7684\u521b\u5efa\u8fc7\u7a0b\u3002\u7b80\u5316\u540e\u4e3b\u8981\u5206\u4e3a\u4e09\u4e2a\u4e3b\u8981\u7684\u6b65\u9aa4\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/mxsm/document/blob/master/image/Spring/Springframework/bean%E5%88%9B%E5%BB%BA%E7%9A%84%E4%B8%89%E4%B8%AA%E4%B8%BB%E8%A6%81%E6%AD%A5%E9%AA%A4.png?raw=true",alt:null})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"\u5b9e\u4f8b\u5316")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"\u5b9e\u4f8b\u5316\u597d\u7684Bean\u586b\u5145\u5c5e\u6027")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"\u521d\u59cb\u5316"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Bean\u7684\u5b9e\u4f8b\u5316\u548c\u521d\u59cb\u5316\u7684\u533a\u522b\uff1f"),(0,r.kt)("p",{parentName:"blockquote"},"Java\u6709\u4ee5\u4e0b\u51e0\u79cd\u65b9\u5f0f\u521b\u5efa\u7c7b\u5bf9\u8c61\uff1a"),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"\u5229\u7528new\u5173\u952e\u5b57"),(0,r.kt)("li",{parentName:"ul"},"\u5229\u7528\u53cd\u5c04Class.newInstance"),(0,r.kt)("li",{parentName:"ul"},"\u5229\u7528Constructor.newIntance(\u76f8\u6bd4Class.newInstance\u591a\u4e86\u6709\u53c2\u548c\u79c1\u6709\u6784\u9020\u51fd\u6570)"),(0,r.kt)("li",{parentName:"ul"},"\u5229\u7528Cloneable/Object.clone()"),(0,r.kt)("li",{parentName:"ul"},"\u5229\u7528\u53cd\u5e8f\u5217\u5316")),(0,r.kt)("p",{parentName:"blockquote"},"\u8fd9\u4e9b\u90fd\u662f\u8bb2\u7684\u5b9e\u4f8b\u5316\u3002\u800c\u521d\u59cb\u5316\u662fClass\u5b9e\u4f8b\u5316\u540e\u7684\u5177\u4f53\u5bf9\u8c61\u624d\u6765\u8fdb\u884c\u521d\u59cb\u5316\u3002"),(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"\u7b80\u5355\u7684\u8bf4\uff1a\u5b9e\u4f8b\u5316\u9488\u5bf9\u7684\u662fClass,\u800c\u521d\u59cb\u5316\u9488\u5bf9\u7684\u662f\u5b9e\u4f8b\u5bf9\u8c61\u3002")))),(0,r.kt)("h4",{id:"31-spring\u5faa\u73af\u4f9d\u8d56\u89e3\u51b3\u7684\u6e90\u7801\u89e3\u6790--52x\u7684\u6e90\u7801\u7248\u672c"},"3.1 Spring\u5faa\u73af\u4f9d\u8d56\u89e3\u51b3\u7684\u6e90\u7801\u89e3\u6790--5.2.X\u7684\u6e90\u7801\u7248\u672c"),(0,r.kt)("p",null,"Spring\u4e3b\u8981\u662f\u901a\u8fc7\u7f13\u5b58\u4e0d\u540c\u72b6\u6001\u4e0b\u7684Bean\u6765\u89e3\u51b3\u5faa\u73af\u4f9d\u8d56\u7684\u95ee\u9898\uff0c\u4e0b\u9762\u770b\u4e00\u4e0b ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"DefaultSingletonBeanRegistry"))," \u7c7b\u4e2d\u7684\u4e09\u4e2a\u7f13\u5b58\u53d8\u91cf\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"    /** \u5355\u4f8b\u5bf9\u8c61\u7f13\u5b58 */\n    private final Map<String, Object> singletonObjects = new ConcurrentHashMap<>(256);\n\n    /** \u5355\u4f8b\u5bf9\u8c61\u5de5\u5382\u7f13\u5b58 */\n    private final Map<String, ObjectFactory<?>> singletonFactories = new HashMap<>(16);\n\n    /** \u63d0\u524d\u66b4\u9732\u5bf9\u8c61\u7f13\u5b58 */\n    private final Map<String, Object> earlySingletonObjects = new HashMap<>(16);\n")),(0,r.kt)("p",null,"\u4e09\u4e2a\u7f13\u5b58\u7684\u4f5c\u7528\u7b80\u5355\u8bf4\u660e\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u7f13\u5b58"),(0,r.kt)("th",{parentName:"tr",align:null},"\u4f5c\u7528"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"singletonObjects"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7528\u4e8e\u5b58\u653e\u5b8c\u5168\u521d\u59cb\u5316\u597d\u7684 bean\uff0c\u4ece\u8be5\u7f13\u5b58\u4e2d\u53d6\u51fa\u7684 bean \u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"singletonFactories"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5b58\u653e\u539f\u59cb\u7684 bean \u5bf9\u8c61\uff08\u5c1a\u672a\u586b\u5145\u5c5e\u6027\uff09\uff0c\u7528\u4e8e\u89e3\u51b3\u5faa\u73af\u4f9d\u8d56")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"earlySingletonObjects"),(0,r.kt)("td",{parentName:"tr",align:null},"\u63d0\u524d\u66b4\u5149\u7684\u5355\u4f8b\u5bf9\u8c61\u7684Cache\uff0c\u7528\u4e8e\u89e3\u51b3\u5faa\u73af\u4f9d\u8d56\uff08\u6ca1\u6709init\uff09")))),(0,r.kt)("p",null,"\u4e0b\u9762\u6765\u770b\u4e00\u4e0b\u521b\u5efaBean\u5b9e\u4f8b\u7684\u4e3b\u8981\u4e00\u4e2a\u65b9\u6cd5 ",(0,r.kt)("strong",{parentName:"p"},"AbstractBeanFactory#doGetBean"),"\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'protected <T> T doGetBean(final String name, @Nullable final Class<T> requiredType,\n            @Nullable final Object[] args, boolean typeCheckOnly) throws BeansException {\n\n        final String beanName = transformedBeanName(name);\n        Object bean;\n\n        // \u68c0\u67e5\u5355\u4f8b\u7f13\u5b58\u662f\u5426\u6709\u624b\u52a8\u6ce8\u518c\u7684\u5355\u4f8b\n        Object sharedInstance = getSingleton(beanName);\n        if (sharedInstance != null && args == null) {\n            //\u5220\u9664\u65e5\u5fd7\u6253\u5370\u4ee3\u7801\n            bean = getObjectForBeanInstance(sharedInstance, name, beanName, null);\n        }\n\n        else {\n            //\u5224\u65ad\u662f\u5426\u5728\u521b\u5efa\u4e2d\n            if (isPrototypeCurrentlyInCreation(beanName)) {\n                throw new BeanCurrentlyInCreationException(beanName);\n            }\n\n            // \u68c0\u67e5parentBeanFactory\u662f\u5426\u5b58\u5728\u8c03\u7528parentBeanFactory\u7684getBean\u65b9\u6cd5\n            BeanFactory parentBeanFactory = getParentBeanFactory();\n            if (parentBeanFactory != null && !containsBeanDefinition(beanName)) {\n                // Not found -> check parent.\n                String nameToLookup = originalBeanName(name);\n                if (parentBeanFactory instanceof AbstractBeanFactory) {\n                    return ((AbstractBeanFactory) parentBeanFactory).doGetBean(\n                            nameToLookup, requiredType, args, typeCheckOnly);\n                }\n                else if (args != null) {\n                    // Delegation to parent with explicit args.\n                    return (T) parentBeanFactory.getBean(nameToLookup, args);\n                }\n                else if (requiredType != null) {\n                    // No args -> delegate to standard getBean method.\n                    return parentBeanFactory.getBean(nameToLookup, requiredType);\n                }\n                else {\n                    return (T) parentBeanFactory.getBean(nameToLookup);\n                }\n            }\n\n            if (!typeCheckOnly) {\n                markBeanAsCreated(beanName);\n            }\n\n            try {\n                final RootBeanDefinition mbd = getMergedLocalBeanDefinition(beanName);\n                checkMergedBeanDefinition(mbd, beanName, args);\n\n                // \u786e\u4fdd\u5f53\u524dbean\u4f9d\u8d56\u7684bean\u7684\u521d\u59cb\u5316\n                String[] dependsOn = mbd.getDependsOn();\n                if (dependsOn != null) {\n                    for (String dep : dependsOn) {\n                        if (isDependent(beanName, dep)) {\n                            //\u629b\u9519BeanCreationException\n                        }\n                        registerDependentBean(dep, beanName);\n                        try {\n                            getBean(dep);\n                        }\n                        catch (NoSuchBeanDefinitionException ex) {\n                            //\u629b\u9519BeanCreationException\n                        }\n                    }\n                }\n\n                // \u521b\u5efaBean--\u5355\u4f8b\u6a21\u5f0f\u3001\u539f\u578b\u6a21\u5f0f\u3001\u6839\u636eScop\u6765\u521b\u5efa\u4e09\u79cd\n                if (mbd.isSingleton()) {\n                    sharedInstance = getSingleton(beanName, () -> {\n                            //\u5173\u952e\u65b9\u6cd5\n                            return createBean(beanName, mbd, args);\n                            //\u5220\u9664\u4e86\u90e8\u5206\u65e0\u5173\u7d27\u8981\u7684\u4ee3\u7801\n                    });\n                    bean = getObjectForBeanInstance(sharedInstance, name, beanName, mbd);\n                }\n\n                else if (mbd.isPrototype()) {\n                    // It\'s a prototype -> create a new instance.\n                    Object prototypeInstance = null;\n                    try {\n                        beforePrototypeCreation(beanName);\n                        prototypeInstance = createBean(beanName, mbd, args);\n                    }\n                    finally {\n                        afterPrototypeCreation(beanName);\n                    }\n                    bean = getObjectForBeanInstance(prototypeInstance, name, beanName, mbd);\n                }\n\n                else {\n                    String scopeName = mbd.getScope();\n                    final Scope scope = this.scopes.get(scopeName);\n                    if (scope == null) {\n                        throw new IllegalStateException("No Scope registered for scope name \'" + scopeName + "\'");\n                    }\n                    try {\n                        Object scopedInstance = scope.get(beanName, () -> {\n                            beforePrototypeCreation(beanName);\n                            try {\n                                return createBean(beanName, mbd, args);\n                            }\n                            finally {\n                                afterPrototypeCreation(beanName);\n                            }\n                        });\n                        bean = getObjectForBeanInstance(scopedInstance, name, beanName, mbd);\n                    }\n                    catch (IllegalStateException ex) {\n                        //\u629b\u9519BeanCreationException\n                    }\n                }\n            }\n            catch (BeansException ex) {\n                cleanupAfterBeanCreationFailure(beanName);\n                throw ex;\n            }\n        }\n\n        // \u68c0\u67e5\u6240\u9700\u7684\u7c7b\u578b\u662f\u5426\u4e0e\u5b9e\u9645bean\u5b9e\u4f8b\u7684\u7c7b\u578b\u5339\u914d\n        if (requiredType != null && !requiredType.isInstance(bean)) {\n            try {\n                T convertedBean = getTypeConverter().convertIfNecessary(bean, requiredType);\n                if (convertedBean == null) {\n                    throw new BeanNotOfRequiredTypeException(name, requiredType, bean.getClass());\n                }\n                return convertedBean;\n            }\n            catch (TypeMismatchException ex) {\n                //\u629b\u9519BeanNotOfRequiredTypeException\n            }\n        }\n        return (T) bean;\n    }\n')),(0,r.kt)("p",null,"\u4e0b\u9762\u6211\u4eec\u7528\u6d41\u7a0b\u56fe\u6765\u68b3\u7406\u4e00\u4e0b\u8fd9\u4e00\u6bb5\u4ee3\u7801\u7684\u903b\u8f91\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/mxsm/picture/blob/main/spring/spring%E5%BE%AA%E7%8E%AF%E4%BE%9D%E8%B5%96%E8%A7%A3%E5%86%B3%E6%B5%81%E7%A8%8B%E5%9B%BE.png?raw=true",alt:null})),(0,r.kt)("p",null,"\u901a\u8fc7\u4e0a\u9762\u7684\u6e90\u7801\u53ef\u4ee5\u770b\u51fa\u6765 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},(0,r.kt)("inlineCode",{parentName:"em"},"Object sharedInstance = getSingleton(beanName)")))," \u8c03\u7528\u83b7\u53d6\u662f\u5426\u5728\u7f13\u5b58\u4e2d\u5b58\u5728\u3002\u770b\u4e00\u4e0b\u4ee3\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"@Override\n@Nullable\npublic Object getSingleton(String beanName) {\n    return getSingleton(beanName, true);\n}\n\n@Nullable\n    protected Object getSingleton(String beanName, boolean allowEarlyReference) {\n        //\u4ece singletonObjects \u83b7\u53d6\u5b9e\u4f8b\uff0csingletonObjects \u4e2d\u7684\u5b9e\u4f8b\u90fd\u662f\u51c6\u5907\u597d\u7684 bean \u5b9e\u4f8b\uff0c\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\n        Object singletonObject = this.singletonObjects.get(beanName);\n        // \u5224\u65ad beanName \u5bf9\u5e94\u7684 bean \u662f\u5426\u6b63\u5728\u521b\u5efa\u4e2d\n        if (singletonObject == null && isSingletonCurrentlyInCreation(beanName)) {\n            synchronized (this.singletonObjects) {\n                //// \u4ece earlySingletonObjects \u4e2d\u83b7\u53d6\u63d0\u524d\u66dd\u5149\u7684 bean\n                singletonObject = this.earlySingletonObjects.get(beanName);\n                if (singletonObject == null && allowEarlyReference) {\n                    // \u83b7\u53d6\u76f8\u5e94\u7684 bean \u5de5\u5382\n                    ObjectFactory<?> singletonFactory = this.singletonFactories.get(beanName);\n                    if (singletonFactory != null) {\n                        // \u63d0\u524d\u66dd\u5149 bean \u5b9e\u4f8b\uff08raw bean\uff09\uff0c\u7528\u4e8e\u89e3\u51b3\u5faa\u73af\u4f9d\u8d56\n                        singletonObject = singletonFactory.getObject();\n                        // \u5c06 singletonObject \u653e\u5165earlySingletonObjects\u7f13\u5b58\u4e2d\uff0c\u5e76\u5c06 singletonFactory \u4ece\u7f13\u5b58\u4e2d\u79fb\u9664\n                        this.earlySingletonObjects.put(beanName, singletonObject);\n                        this.singletonFactories.remove(beanName);\n                    }\n                }\n            }\n        }\n        return singletonObject;\n    }\n")),(0,r.kt)("p",null,"\u770b\u4e00\u4e0b\u5355\u4f8b\u6a21\u5f0f\u7684\u521b\u5efa\u7684 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},(0,r.kt)("inlineCode",{parentName:"em"},"AbstractAutowireCapableBeanFactory#createBean")))," \u65b9\u6cd5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"@Override\nprotected Object createBean(String beanName, RootBeanDefinition mbd, @Nullable Object[] args)throws BeanCreationException {\n        //\u5220\u9664\u90e8\u5206\u65e0\u5173\u7d27\u8981\u7684\u4ee3\u7801\n\n        RootBeanDefinition mbdToUse = mbd;\n        Class<?> resolvedClass = resolveBeanClass(mbd, beanName);\n        if (resolvedClass != null && !mbd.hasBeanClass() && mbd.getBeanClassName() != null) {\n            mbdToUse = new RootBeanDefinition(mbd);\n            mbdToUse.setBeanClass(resolvedClass);\n        }\n\n            //\u51c6\u5907\u65b9\u6cd5\u91cd\u5199\n            mbdToUse.prepareMethodOverrides();\n            \n            //\u6267\u884cInstantiationAwareBeanPostProcessor#postProcessBeforeInstantiation\u7684\u65b9\u6cd5\n            //\u5982\u679cbean\u4e0d\u7b49\u4e8eNULL\u8fd8\u4f1a\u6267\u884cBeanPostProcessor#postProcessAfterInitialization\n            Object bean = resolveBeforeInstantiation(beanName, mbdToUse);\n            if (bean != null) {\n                return bean;\n            }\n            //\u521b\u5efaBean\n            Object beanInstance = doCreateBean(beanName, mbdToUse, args);\n\n    }\n")),(0,r.kt)("p",null,"\u4ece\u4ee3\u7801\u53ef\u4ee5\u770b\u51fa\u6765\u5982\u679c\u5b58\u5728 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},(0,r.kt)("inlineCode",{parentName:"em"},"InstantiationAwareBeanPostProcessor")))," \u5904\u7406\u5668\uff0c\u8c03\u7528 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"InstantiationAwareBeanPostProcessor#postProcessBeforeInstantiation"))," \u65b9\u6cd5\u3002\u5982\u679c\u8be5\u65b9\u6cd5\u6267\u884c\u7684\u8fd4\u56de\u7684Bean\u662f\u7a7a\u5c31\u8c03\u7528 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},(0,r.kt)("inlineCode",{parentName:"em"},"AbstractAutowireCapableBeanFactory#doCreateBean")))," \u65b9\u6cd5\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"")))}m.isMDXComponent=!0}}]);