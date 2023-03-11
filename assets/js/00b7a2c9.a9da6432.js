"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[105],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(t),g=a,f=u["".concat(l,".").concat(g)]||u[g]||d[g]||o;return t?r.createElement(f,i(i({ref:n},p),{},{components:t})):r.createElement(f,i({ref:n},p))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=g;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},2455:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=t(7462),a=(t(7294),t(3905));const o={title:"Spring XML\u89e3\u6790\u6e90\u7801\u5206\u6790",date:new Date("2019-06-28T00:00:00.000Z")},i=void 0,s={unversionedId:"spring/spring-framework/core-source-analysis/spring-xml",id:"spring/spring-framework/core-source-analysis/spring-xml",title:"Spring XML\u89e3\u6790\u6e90\u7801\u5206\u6790",description:"1. Spring XML\u89e3\u6790",source:"@site/docs/spring/spring-framework/core-source-analysis/spring-xml.md",sourceDirName:"spring/spring-framework/core-source-analysis",slug:"/spring/spring-framework/core-source-analysis/spring-xml",permalink:"/docs/spring/spring-framework/core-source-analysis/spring-xml",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/spring/spring-framework/core-source-analysis/spring-xml.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1678517863,formattedLastUpdatedAt:"Mar 11, 2023",frontMatter:{title:"Spring XML\u89e3\u6790\u6e90\u7801\u5206\u6790",date:"2019-06-28T00:00:00.000Z"},sidebar:"springframework",previous:{title:"Spring \u751f\u547d\u5468\u671f",permalink:"/docs/spring/spring-framework/core-source-analysis/spring-lifecycle"},next:{title:"SpringBean\u5faa\u73af\u4f9d\u8d56\u6e90\u7801\u89e3\u6790",permalink:"/docs/spring/spring-framework/core-source-analysis/springBean-circular-dependency"}},l={},c=[{value:"1. Spring XML\u89e3\u6790",id:"1-spring-xml\u89e3\u6790",level:3},{value:"2. AbstractApplicationContext#obtainFreshBeanFactory",id:"2-abstractapplicationcontextobtainfreshbeanfactory",level:3}],p={toc:c},u="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"1-spring-xml\u89e3\u6790"},"1. Spring XML\u89e3\u6790"),(0,a.kt)("p",null,"\u5728Spring\u7684\u914d\u7f6e\u4e2dXML\u662f\u4e00\u4e2a\u5f88\u91cd\u8981\u7684\u914d\u7f6e\u65b9\u6848\uff0c\u4e0b\u9762\u6765\u5206\u6790\u4e00\u4e0bSpring\u662f\u5982\u4f55\u628a\u5b9a\u4e49\u5728XML\u4e2d\u7684\u6570\u636e\u7c7b\u52a0\u8f7d\u5230Spring\u5bb9\u5668\u4e2d\u7684\u3002"),(0,a.kt)("h3",{id:"2-abstractapplicationcontextobtainfreshbeanfactory"},"2. AbstractApplicationContext#obtainFreshBeanFactory"),(0,a.kt)("p",null,"\u5728",(0,a.kt)("strong",{parentName:"p"},"AbstractApplicationContext")," \u62bd\u8c61\u7c7b\u4e2d\u901a\u8fc7 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"obtainFreshBeanFactory"))," \u7684\u65b9\u6cd5\u6765\u52a0\u8f7dXML\u4e2d\u7684\u5b9a\u4e49\u7684Bean\u3002\u4e0b\u9762\u6765\u770b\u4e00\u4e0b\u65b9\u6cd5",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"obtainFreshBeanFactory"))," \u7684\u4ee3\u7801\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"    protected ConfigurableListableBeanFactory obtainFreshBeanFactory() {\n        refreshBeanFactory();\n        return getBeanFactory();\n    }\n")),(0,a.kt)("p",null,"\u901a\u8fc7\u4e0a\u9762\u7684\u4ee3\u7801\u53ef\u4ee5\u770b\u5230\uff0c\u65b9\u6cd5\u4e2d\u53ea\u6709\u4e24\u4e2a\u65b9\u6cd5\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"refreshBeanFactory")),(0,a.kt)("p",{parentName:"li"},"\u5237\u65b0BeanFactory,\u52a0\u8f7dXML")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"getBeanFactory")),(0,a.kt)("p",{parentName:"li"},"\u8fd4\u56deBeanFactory\u7684\u5f15\u7528"))),(0,a.kt)("p",null,"\u5728",(0,a.kt)("strong",{parentName:"p"},"AbstractApplicationContext")," \u4e2d",(0,a.kt)("strong",{parentName:"p"},"refreshBeanFactory")," \u662f\u4e00\u4e2a\u62bd\u8c61\u7684\u65b9\u6cd5\uff0c\u5b9e\u73b0\u4e3b\u8981\u662f\u6709\u5b50\u7c7b\u5b9e\u73b0\uff0c\u5bf9\u4e8eXML\u800c\u8a00\uff0c",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"AbstractRefreshableApplicationContext")),"  \u5b9e\u73b0\u4e86\u8be5\u65b9\u6cd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'protected final void refreshBeanFactory() throws BeansException {\n        //\u5982\u679c\u5b58\u5728BeanFactory\u9996\u5148\u5bf9\u4e4b\u524d\u7684\u8fdb\u884c\u5904\u7406\n        if (hasBeanFactory()) {\n            destroyBeans();\n            closeBeanFactory();\n        }\n        try {\n            //\u521b\u5efaBeanFactory\n            DefaultListableBeanFactory beanFactory = createBeanFactory();\n            //\u8bbe\u7f6e\u5e8f\u5217\u5316ID\n            beanFactory.setSerializationId(getId());\n            //\u8bbe\u7f6e\u662f\u5426\u5141\u8bb8\u5faa\u73af\u5f15\u7528 \u548c bean\u7684\u5b9a\u4e49\u8986\u76d6\n            customizeBeanFactory(beanFactory);\n            // \u52a0\u8f7dbean\u7684\u5b9a\u4e49\u5230Spring\u5bb9\u5668\n            loadBeanDefinitions(beanFactory);\n            synchronized (this.beanFactoryMonitor) {\n                this.beanFactory = beanFactory;\n            }\n        }\n        catch (IOException ex) {\n            throw new ApplicationContextException("I/O error parsing bean definition source for " + getDisplayName(), ex);\n        }\n    }\n')),(0,a.kt)("p",null,"\u901a\u8fc7\u4e0a\u9762\u7684\u4ee3\u7801\u5206\u6790\u53ef\u4ee5\u770b\u5230Spring\u5bb9\u5668\u52a0\u8f7dXML\u4e2d\u7684\u5b9a\u4e49\u901a\u8fc7 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"loadBeanDefinitions"))," \u65b9\u6cd5\uff0c\u5728",(0,a.kt)("strong",{parentName:"p"},"AbstractRefreshableApplicationContext")," \u4e2d\u662f\u4e00\u4e2a\u62bd\u8c61\u7684\u65b9\u6cd5\u3002\u5b9e\u73b0\u5728\u5b50\u7c7b\u4e2d\uff0c\u5bf9\u4e8eXML\u7684\u52a0\u8f7dBean\u7684\u5b9a\u4e49\u5b9e\u73b0\u5728 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"AbstractXmlApplicationContext")),"  \u7c7b\u4e2d\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"    protected void loadBeanDefinitions(DefaultListableBeanFactory beanFactory) throws BeansException, IOException {\n        // \u4e3aBeanFactory\u521b\u5efa\u4e00\u4e2a XmlBeanDefinitionReader.\n        XmlBeanDefinitionReader beanDefinitionReader = new XmlBeanDefinitionReader(beanFactory);\n\n        //beanDefinitionReader\u8bbe\u7f6e\u53c2\u6570\n        beanDefinitionReader.setEnvironment(this.getEnvironment());\n        beanDefinitionReader.setResourceLoader(this);\n        beanDefinitionReader.setEntityResolver(new ResourceEntityResolver(this));\n\n        //\u521d\u59cb\u5316XML BeanDefinitionReader\n        initBeanDefinitionReader(beanDefinitionReader);\n        //\u52a0\u8f7dBean\u5b9a\u4e49\n        loadBeanDefinitions(beanDefinitionReader);\n    }\n")),(0,a.kt)("p",null,"XML\u7684\u6587\u4ef6\u7684\u8bfb\u53d6\u662f\u901a\u8fc7",(0,a.kt)("strong",{parentName:"p"},"XmlBeanDefinitionReader")," \u6765\u8fdb\u884c\u8bfb\u53d6\u6570\u636e\u3002\u5728",(0,a.kt)("strong",{parentName:"p"},"AbstractXmlApplicationContext")," \u7c7b\u4e2d\u6709\u4e00\u4e2a",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"loadBeanDefinitions(XmlBeanDefinitionReader reader)")),"  \u65b9\u6cd5\u6765\u8fdb\u884c\u52a0\u8f7dXML\u6587\u4ef6\u4e2dBean\u7684\u5b9a\u4e49\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"    protected void loadBeanDefinitions(XmlBeanDefinitionReader reader) throws BeansException, IOException {\n        //\u83b7\u53d6\u914d\u7f6e\u7684Resource\u8fdb\u884c\u52a0\u8f7d\n        Resource[] configResources = getConfigResources();\n        if (configResources != null) {\n            reader.loadBeanDefinitions(configResources);\n        }\n        //\u83b7\u53d6\u914d\u7f6e\u7684\u5730\u5740\u8fdb\u884c\u52a0\u8f7d--\uff08\u7528ClassPathXmlApplicationContext\u521b\u5efa\u586b\u5165application.xml\u7684\u5c31\u662f\u901a\u8fc7\u8fd9\u4e2a\u5730\u65b9\u52a0\u8f7d\uff09\n        String[] configLocations = getConfigLocations();\n        if (configLocations != null) {\n            reader.loadBeanDefinitions(configLocations);\n        }\n    }\n")),(0,a.kt)("p",null,"\u6240\u4ee5\u63a5\u4e0b\u6765\u4e3b\u8981\u52a0\u8f7d\u90fd\u662f\u901a\u8fc7",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"XmlBeanDefinitionReader#loadBeanDefinitions")),"  \u65b9\u6cd5\u6765\u52a0\u8f7dXML\u4e2d\u7684Bean\u7684\u5b9a\u4e49\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'    @Override\n    public int loadBeanDefinitions(String... locations) throws BeanDefinitionStoreException {\n        Assert.notNull(locations, "Location array must not be null");\n        int count = 0;\n        for (String location : locations) {\n            count += loadBeanDefinitions(location);\n        }\n        return count;\n    }\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"XmlBeanDefinitionReader#loadBeanDefinitions"))," \u8c03\u7528\u4e86\u7236\u7c7b\u7684\u65b9\u6cd5 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"AbstractBeanDefinitionReader#loadBeanDefinitions"))," "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'    @Override\n    public int loadBeanDefinitions(String location) throws BeanDefinitionStoreException {\n        return loadBeanDefinitions(location, null);\n    }\n\n    public int loadBeanDefinitions(String location, @Nullable Set<Resource> actualResources) throws BeanDefinitionStoreException {\n        ResourceLoader resourceLoader = getResourceLoader();\n        if (resourceLoader == null) {\n            throw new BeanDefinitionStoreException(\n                    "Cannot load bean definitions from location [" + location + "]: no ResourceLoader available");\n        }\n\n        if (resourceLoader instanceof ResourcePatternResolver) {\n            // Resource pattern matching available.\n            try {\n                Resource[] resources = ((ResourcePatternResolver) resourceLoader).getResources(location);\n                int count = loadBeanDefinitions(resources);\n                if (actualResources != null) {\n                    Collections.addAll(actualResources, resources);\n                }\n                if (logger.isTraceEnabled()) {\n                    logger.trace("Loaded " + count + " bean definitions from location pattern [" + location + "]");\n                }\n                return count;\n            }\n            catch (IOException ex) {\n                throw new BeanDefinitionStoreException(\n                        "Could not resolve bean definition resource pattern [" + location + "]", ex);\n            }\n        }\n        else {\n            // Can only load single resources by absolute URL.\n            Resource resource = resourceLoader.getResource(location);\n            int count = loadBeanDefinitions(resource);\n            if (actualResources != null) {\n                actualResources.add(resource);\n            }\n            if (logger.isTraceEnabled()) {\n                logger.trace("Loaded " + count + " bean definitions from location [" + location + "]");\n            }\n            return count;\n        }\n    }\n')),(0,a.kt)("p",null,"\u5728 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"loadBeanDefinitions"))," \u5b9e\u73b0\u5728XML\u4e2d\u662f\u901a\u8fc7 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"XmlBeanDefinitionReader"))," \u4e2d\u5b9e\u73b0"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'    public int loadBeanDefinitions(EncodedResource encodedResource) throws BeanDefinitionStoreException {\n        Assert.notNull(encodedResource, "EncodedResource must not be null");\n        if (logger.isTraceEnabled()) {\n            logger.trace("Loading XML bean definitions from " + encodedResource);\n        }\n\n        Set<EncodedResource> currentResources = this.resourcesCurrentlyBeingLoaded.get();\n        if (currentResources == null) {\n            currentResources = new HashSet<>(4);\n            this.resourcesCurrentlyBeingLoaded.set(currentResources);\n        }\n        if (!currentResources.add(encodedResource)) {\n            throw new BeanDefinitionStoreException(\n                    "Detected cyclic loading of " + encodedResource + " - check your import definitions!");\n        }\n        try {\n            InputStream inputStream = encodedResource.getResource().getInputStream();\n            try {\n                InputSource inputSource = new InputSource(inputStream);\n                if (encodedResource.getEncoding() != null) {\n                    inputSource.setEncoding(encodedResource.getEncoding());\n                }\n                //\u52a0\u8f7dxml\u4e2d\u7684Bean\u5b9a\u4e49\n                return doLoadBeanDefinitions(inputSource, encodedResource.getResource());\n            }\n            finally {\n                inputStream.close();\n            }\n        }\n        catch (IOException ex) {\n            throw new BeanDefinitionStoreException(\n                    "IOException parsing XML document from " + encodedResource.getResource(), ex);\n        }\n        finally {\n            currentResources.remove(encodedResource);\n            if (currentResources.isEmpty()) {\n                this.resourcesCurrentlyBeingLoaded.remove();\n            }\n        }\n    }\n\n')),(0,a.kt)("p",null,"\u901a\u8fc7\u4e0a\u9762\u7684\u4ee3\u7801\u53ef\u4ee5\u770b\u51fa\u6765 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"doLoadBeanDefinitions"))," \u4e3b\u8981\u901a\u8fc7\u8fd9\u4e2a\u65b9\u6cd5\u52a0\u8f7dXML\u4e2d\u7684Bean\u5b9a\u4e49"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'protected int doLoadBeanDefinitions(InputSource inputSource, Resource resource)\n            throws BeanDefinitionStoreException {\n\n            //\u8bfb\u53d6 xml document\n            Document doc = doLoadDocument(inputSource, resource);\n            //\u5f80Spring\u5bb9\u5668\u4e2d\u6ce8\u518c Bean\u5b9a\u4e49\n            int count = registerBeanDefinitions(doc, resource);\n            if (logger.isDebugEnabled()) {\n                logger.debug("Loaded " + count + " bean definitions from " + resource);\n            }\n            return count;\n            // \u7701\u7565\u4e86try catch\u6a21\u5757\n\n    }\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"XmlBeanDefinitionReader#registerBeanDefinitions(doc, resource)"))," \u65b9\u6cd5\u5c31\u662f\u52a0\u8f7d\u7c7b\u7684\u5b9a\u4e49"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"    public int registerBeanDefinitions(Document doc, Resource resource) throws BeanDefinitionStoreException {\n        BeanDefinitionDocumentReader documentReader = createBeanDefinitionDocumentReader();\n        int countBefore = getRegistry().getBeanDefinitionCount();\n        //\u6ce8\u518cBean\n        documentReader.registerBeanDefinitions(doc, createReaderContext(resource));\n        return getRegistry().getBeanDefinitionCount() - countBefore;\n    }\n\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"BeanDefinitionDocumentReader#registerBeanDefinitions"))," \u8fdb\u884c\u6ce8\u518c\uff0c\u800c ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"registerBeanDefinitions"))," \u65b9\u6cd5\u7684\u5b9e\u73b0\u5728 ",(0,a.kt)("strong",{parentName:"p"},"DefaultBeanDefinitionDocumentReader")," \u7c7b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'    public void registerBeanDefinitions(Document doc, XmlReaderContext readerContext) {\n        this.readerContext = readerContext;\n        doRegisterBeanDefinitions(doc.getDocumentElement());\n    }\n\n    protected void doRegisterBeanDefinitions(Element root) {\n\n        BeanDefinitionParserDelegate parent = this.delegate;\n        this.delegate = createDelegate(getReaderContext(), root, parent);\n\n        if (this.delegate.isDefaultNamespace(root)) {\n            String profileSpec = root.getAttribute(PROFILE_ATTRIBUTE);\n            if (StringUtils.hasText(profileSpec)) {\n                String[] specifiedProfiles = StringUtils.tokenizeToStringArray(\n                        profileSpec, BeanDefinitionParserDelegate.MULTI_VALUE_ATTRIBUTE_DELIMITERS);\n                // We cannot use Profiles.of(...) since profile expressions are not supported\n                // in XML config. See SPR-12458 for details.\n                if (!getReaderContext().getEnvironment().acceptsProfiles(specifiedProfiles)) {\n                    if (logger.isDebugEnabled()) {\n                        logger.debug("Skipped XML bean definition file due to specified profiles [" + profileSpec +\n                                "] not matching: " + getReaderContext().getResource());\n                    }\n                    return;\n                }\n            }\n        }\n\n        preProcessXml(root);\n        //\u89e3\u6790Bean\u7684\u5b9a\u4e49\n        parseBeanDefinitions(root, this.delegate);\n        postProcessXml(root);\n\n        this.delegate = parent;\n    }\n')),(0,a.kt)("p",null,"\u5206\u6790\u4e00\u4e0b ",(0,a.kt)("strong",{parentName:"p"},"parseBeanDefinitions(root, this.delegate)")," \u65b9\u6cd5\u4e2d\u662f\u5982\u4f55\u8fdb\u884c\u6570\u636e\u89e3\u6790\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"    protected void parseBeanDefinitions(Element root, BeanDefinitionParserDelegate delegate) {\n        //\u5224\u65ad\u662f\u5426\u4e3a\u9ed8\u8ba4\u7684\u547d\u540d\u7a7a\u95f4 http://www.springframework.org/schema/beans\n        if (delegate.isDefaultNamespace(root)) {\n            NodeList nl = root.getChildNodes();\n            for (int i = 0; i < nl.getLength(); i++) {\n                Node node = nl.item(i);\n                if (node instanceof Element) {\n                    Element ele = (Element) node;\n                    //\u5224\u65ad\u662f\u5426\u662f\u81ea\u5b9a\u4e49\u7684\u547d\u540d\u7a7a\u95f4\n                    if (delegate.isDefaultNamespace(ele)) {\n                        //\u89e3\u6790\u9ed8\u8ba4\u7684\u547d\u540d\u7a7a\u95f4\n                        parseDefaultElement(ele, delegate);\n                    }\n                    else {\n                        //\u89e3\u6790\u81ea\u5b9a\u4e49\u7684\u547d\u540d\u7a7a\u95f4\n                        delegate.parseCustomElement(ele);\n                    }\n                }\n            }\n        }\n        else {\n            delegate.parseCustomElement(root);\n        }\n    }\n\n    private void parseDefaultElement(Element ele, BeanDefinitionParserDelegate delegate) {\n        //\u89e3\u6790import\n        if (delegate.nodeNameEquals(ele, IMPORT_ELEMENT)) {\n            importBeanDefinitionResource(ele);\n        }\n        //\u89e3\u6790alias\n        else if (delegate.nodeNameEquals(ele, ALIAS_ELEMENT)) {\n            processAliasRegistration(ele);\n        }\n        //\u89e3\u6790bean\n        else if (delegate.nodeNameEquals(ele, BEAN_ELEMENT)) {\n            processBeanDefinition(ele, delegate);\n        }\n        //\u89e3\u6790beans\n        else if (delegate.nodeNameEquals(ele, NESTED_BEANS_ELEMENT)) {\n            // recurse\n            doRegisterBeanDefinitions(ele);\n        }\n    }\n")),(0,a.kt)("p",null,"\u5206\u6790\u4e00\u4e0b\u5982\u4f55\u5904\u7406\u81ea\u5b9a\u4e49\u7684XML\u901a\u8fc7 ",(0,a.kt)("strong",{parentName:"p"},"BeanDefinitionParserDelegate#parseCustomElement")," \u65b9\u6cd5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'    public BeanDefinition parseCustomElement(Element ele) {\n        return parseCustomElement(ele, null);\n    }\n\n    @Nullable\n    public BeanDefinition parseCustomElement(Element ele, @Nullable BeanDefinition containingBd) {\n        //\u83b7\u53d6\u547d\u540d\u7a7a\u95f4\u7684URI\n        String namespaceUri = getNamespaceURI(ele);\n        if (namespaceUri == null) {\n            return null;\n        }\n        //\u83b7\u53d6\u5904\u7406\u547d\u540d\u7a7a\u95f4\u7684NamespaceHandler--\n        NamespaceHandler handler = this.readerContext.getNamespaceHandlerResolver().resolve(namespaceUri);\n        if (handler == null) {\n            error("Unable to locate Spring NamespaceHandler for XML schema namespace [" + namespaceUri + "]", ele);\n            return null;\n        }\n        return handler.parse(ele, new ParserContext(this.readerContext, this, containingBd));\n    }\n\n')))}d.isMDXComponent=!0}}]);