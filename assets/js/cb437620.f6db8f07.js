"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[8800],{3905:(e,n,t)=>{t.d(n,{Zo:()=>g,kt:()=>d});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),l=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},g=function(e){var n=l(e.components);return r.createElement(p.Provider,{value:n},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),u=l(t),f=i,d=u["".concat(p,".").concat(f)]||u[f]||c[f]||o;return t?r.createElement(d,a(a({ref:n},g),{},{components:t})):r.createElement(d,a({ref:n},g))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=f;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s[u]="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},4530:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=t(7462),i=(t(7294),t(3905));const o={title:"SpringBoot\u6e90\u7801\u89e3\u6790\u4e4bConfigurationProperties\u539f\u7406",linkeTitle:"SpringBoot\u6e90\u7801\u89e3\u6790\u4e4bConfigurationProperties\u539f\u7406",weight:4,date:new Date("2020-01-16T00:00:00.000Z")},a=void 0,s={unversionedId:"spring/spring-boot/core-source-analysis/springboot-ConfigurationProperties",id:"spring/spring-boot/core-source-analysis/springboot-ConfigurationProperties",title:"SpringBoot\u6e90\u7801\u89e3\u6790\u4e4bConfigurationProperties\u539f\u7406",description:"ConfigurationProperties\u7684\u4f5c\u7528",source:"@site/docs/spring/spring-boot/core-source-analysis/springboot-ConfigurationProperties.md",sourceDirName:"spring/spring-boot/core-source-analysis",slug:"/spring/spring-boot/core-source-analysis/springboot-ConfigurationProperties",permalink:"/docs/spring/spring-boot/core-source-analysis/springboot-ConfigurationProperties",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/spring/spring-boot/core-source-analysis/springboot-ConfigurationProperties.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1691846266,formattedLastUpdatedAt:"Aug 12, 2023",frontMatter:{title:"SpringBoot\u6e90\u7801\u89e3\u6790\u4e4bConfigurationProperties\u539f\u7406",linkeTitle:"SpringBoot\u6e90\u7801\u89e3\u6790\u4e4bConfigurationProperties\u539f\u7406",weight:4,date:"2020-01-16T00:00:00.000Z"},sidebar:"springboot",previous:{title:"SpringBoot\u6e90\u7801\u89e3\u6790\u4e4bConditionalOnXXX",permalink:"/docs/spring/spring-boot/core-source-analysis/springboot-ConditionalOnXXX"},next:{title:"SpringBoot\u6e90\u7801\u89e3\u6790\u4e4bspring.factories\u914d\u7f6e-EnvironmentPostProcessor",permalink:"/docs/spring/spring-boot/core-source-analysis/springboot-EnvironmentPostProcessor"}},p={},l=[{value:"ConfigurationProperties\u7684\u4f5c\u7528",id:"configurationproperties\u7684\u4f5c\u7528",level:3},{value:"ConfigurationProperties\u6ce8\u89e3\u6e90\u7801\u89e3\u6790",id:"configurationproperties\u6ce8\u89e3\u6e90\u7801\u89e3\u6790",level:3},{value:"ConfigurationProperties\u6e90\u7801",id:"configurationproperties\u6e90\u7801",level:4},{value:"ConfigurationProperties\u6ce8\u89e3\u6fc0\u6d3b",id:"configurationproperties\u6ce8\u89e3\u6fc0\u6d3b",level:4},{value:"ConfigurationPropertiesBeanRegistrar\u6e90\u7801\u5206\u6790",id:"configurationpropertiesbeanregistrar\u6e90\u7801\u5206\u6790",level:4},{value:"ConfigurationPropertiesBindingPostProcessorRegistrar\u6e90\u7801\u5206\u6790",id:"configurationpropertiesbindingpostprocessorregistrar\u6e90\u7801\u5206\u6790",level:4},{value:"ConfigurationPropertiesBindingPostProcessor\u6e90\u7801\u5206\u6790",id:"configurationpropertiesbindingpostprocessor\u6e90\u7801\u5206\u6790",level:4},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:3}],g={toc:l},u="wrapper";function c(e){let{components:n,...t}=e;return(0,i.kt)(u,(0,r.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"configurationproperties\u7684\u4f5c\u7528"},"ConfigurationProperties\u7684\u4f5c\u7528"),(0,i.kt)("p",null,"\u914d\u7f6e\u6587\u4ef6\u7684\u4fe1\u606f\uff0c\u8bfb\u53d6\u5e76\u81ea\u52a8\u5c01\u88c5\u6210\u5b9e\u4f53\u7c7b\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public class Bean {\n\n    private String name;\n    \n    private String user;\n    \n    private int age;\n\n   //\u7701\u7565get set \u65b9\u6cd5\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"student:\n  name: 1111\n  user: bbbb\n  age: 11\n")),(0,i.kt)("p",null,"\u5bf9\u4e8e\u8fd9\u6837\u7684\u6570\u636e\u5c01\u88c5\u4e3aBean\u5c31\u9700\u8981\u7528\u5230@ConfigurationProperties\u6ce8\u89e3\u3002"),(0,i.kt)("h3",{id:"configurationproperties\u6ce8\u89e3\u6e90\u7801\u89e3\u6790"},"ConfigurationProperties\u6ce8\u89e3\u6e90\u7801\u89e3\u6790"),(0,i.kt)("h4",{id:"configurationproperties\u6e90\u7801"},"ConfigurationProperties\u6e90\u7801"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'@Target({ ElementType.TYPE, ElementType.METHOD })\n@Retention(RetentionPolicy.RUNTIME)\n@Documented\npublic @interface ConfigurationProperties {\n\n    //\u524d\u7f00,\u591a\u4e2a\u7528\u9017\u53f7\u9694\u5f00\n    @AliasFor("prefix")\n    String value() default "";\n\n    //\u524d\u7f00,\u591a\u4e2a\u7528\u9017\u53f7\u9694\u5f00\n    @AliasFor("value")\n    String prefix() default "";\n\n    //\u662f\u5426\u5ffd\u7565\u4e0d\u53ef\u7528\u7684\u5b57\u6bb5\n    boolean ignoreInvalidFields() default false;\n\n    //\u662f\u5426\u5ffd\u7565Java\u7c7b\u4e0d\u5b58\u5728\u7684\u5b57\u6bb5\n    boolean ignoreUnknownFields() default true;\n\n}\n')),(0,i.kt)("h4",{id:"configurationproperties\u6ce8\u89e3\u6fc0\u6d3b"},"ConfigurationProperties\u6ce8\u89e3\u6fc0\u6d3b"),(0,i.kt)("p",null,"\u901a\u8fc7 ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"EnableConfigurationProperties"))," \u6765\u5904\u7406\u6fc0\u6d3b ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"ConfigurationProperties"))," \u6ce8\u89e3\u914d\u7f6e\u7684\u7c7b\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"@Target(ElementType.TYPE)\n@Retention(RetentionPolicy.RUNTIME)\n@Documented\n@Import({ ConfigurationPropertiesBeanRegistrar.class, ConfigurationPropertiesBindingPostProcessorRegistrar.class })\npublic @interface EnableConfigurationProperties {\n\n    //\u914d\u7f6e\u7528ConfigurationProperties\u6ce8\u89e3\u7684\u7c7b\n    Class<?>[] value() default {};\n\n}\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"EnableConfigurationProperties"))," \u6ce8\u89e3\u88ab ",(0,i.kt)("strong",{parentName:"p"},"@Import")," \u5bfc\u5165\u4e24\u4e2a\u7c7b\u3002\u4e0b\u9762\u6765\u770b\u4e00\u4e0b\u8fd9\u4e24\u4e2a\u7c7b\u6e90\u7801\u5206\u6790\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"ConfigurationPropertiesBeanRegistrar")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"ConfigurationPropertiesBindingPostProcessorRegistrar"))),(0,i.kt)("p",null,"\u90a3\u4e48\u89e3\u6790\u6765\u4e00\u4e00\u5206\u6790\u8fd9\u4e24\u4e2a\u7c7b\u3002"),(0,i.kt)("h4",{id:"configurationpropertiesbeanregistrar\u6e90\u7801\u5206\u6790"},"ConfigurationPropertiesBeanRegistrar\u6e90\u7801\u5206\u6790"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'class ConfigurationPropertiesBeanRegistrar implements ImportBeanDefinitionRegistrar {\n\n    @Override\n    public void registerBeanDefinitions(AnnotationMetadata metadata, BeanDefinitionRegistry registry) {\n        ConfigurableListableBeanFactory beanFactory = (ConfigurableListableBeanFactory) registry;\n        getTypes(metadata).forEach(\n                (type) -> ConfigurationPropertiesBeanDefinitionRegistrar.register(registry, beanFactory, type));\n    }\n\n    private List<Class<?>> getTypes(AnnotationMetadata metadata) {\n        MultiValueMap<String, Object> attributes = metadata\n                .getAllAnnotationAttributes(EnableConfigurationProperties.class.getName(), false);\n        return collectClasses((attributes != null) ? attributes.get("value") : Collections.emptyList());\n    }\n\n    private List<Class<?>> collectClasses(List<?> values) {\n        return values.stream().flatMap((value) -> Arrays.stream((Class<?>[]) value))\n                .filter((type) -> void.class != type).collect(Collectors.toList());\n    }\n\n}\n')),(0,i.kt)("p",null,"\u901a\u8fc7\u5206\u6790\u6e90\u7801\u53d1\u73b0 ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"ConfigurationPropertiesBeanRegistrar"))," \u4e3b\u8981\u7684\u4f5c\u7528\u662f\u628a\u6ce8\u89e3 ",(0,i.kt)("strong",{parentName:"p"},"EnableConfigurationProperties")," \u4e2d\u7684 ",(0,i.kt)("strong",{parentName:"p"},"value")," \u4e2d\u914d\u7f6e\u7684 ",(0,i.kt)("strong",{parentName:"p"},"Class")," \u7684 ",(0,i.kt)("strong",{parentName:"p"},"BeanDefinition")," \u6ce8\u5165\u5230Spring\u4e2d\u3002\u8fd9\u4e2a\u5c31\u662f\u8fd9\u6837\u7684\u7b80\u5355\u3002\u90a3\u4e48\u89e3\u6790\u6765\u5206\u6790 ",(0,i.kt)("strong",{parentName:"p"},"ConfigurationPropertiesBindingPostProcessorRegistrar"),"\u3002"),(0,i.kt)("h4",{id:"configurationpropertiesbindingpostprocessorregistrar\u6e90\u7801\u5206\u6790"},"ConfigurationPropertiesBindingPostProcessorRegistrar\u6e90\u7801\u5206\u6790"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'public class ConfigurationPropertiesBindingPostProcessorRegistrar implements ImportBeanDefinitionRegistrar {\n\n    /**\n     * \u9a8c\u8bc1\u5668 bean\u7684\u540d\u79f0\n     */\n    public static final String VALIDATOR_BEAN_NAME = "configurationPropertiesValidator";\n\n    @Override\n    public void registerBeanDefinitions(AnnotationMetadata importingClassMetadata, BeanDefinitionRegistry registry) {\n        if (!registry.containsBeanDefinition(ConfigurationPropertiesBinder.BEAN_NAME)) {\n            registerConfigurationPropertiesBinder(registry);\n        }\n        if (!registry.containsBeanDefinition(ConfigurationPropertiesBindingPostProcessor.BEAN_NAME)) {\n            registerConfigurationPropertiesBindingPostProcessor(registry);\n            registerConfigurationBeanFactoryMetadata(registry);\n        }\n    }\n\n    //\u6ce8\u5165ConfigurationPropertiesBinder\n    private void registerConfigurationPropertiesBinder(BeanDefinitionRegistry registry) {\n        GenericBeanDefinition definition = new GenericBeanDefinition();\n        definition.setBeanClass(ConfigurationPropertiesBinder.class);\n        definition.setRole(BeanDefinition.ROLE_INFRASTRUCTURE);\n        definition.getConstructorArgumentValues().addIndexedArgumentValue(0, VALIDATOR_BEAN_NAME);\n        registry.registerBeanDefinition(ConfigurationPropertiesBinder.BEAN_NAME, definition);\n    }\n\n    //\u6ce8\u5165ConfigurationPropertiesBindingPostProcessor\n    private void registerConfigurationPropertiesBindingPostProcessor(BeanDefinitionRegistry registry) {\n        GenericBeanDefinition definition = new GenericBeanDefinition();\n        definition.setBeanClass(ConfigurationPropertiesBindingPostProcessor.class);\n        definition.setRole(BeanDefinition.ROLE_INFRASTRUCTURE);\n        registry.registerBeanDefinition(ConfigurationPropertiesBindingPostProcessor.BEAN_NAME, definition);\n    }\n\n    //\u6ce8\u5165ConfigurationBeanFactoryMetadata\n    private void registerConfigurationBeanFactoryMetadata(BeanDefinitionRegistry registry) {\n        GenericBeanDefinition definition = new GenericBeanDefinition();\n        definition.setBeanClass(ConfigurationBeanFactoryMetadata.class);\n        definition.setRole(BeanDefinition.ROLE_INFRASTRUCTURE);\n        registry.registerBeanDefinition(ConfigurationBeanFactoryMetadata.BEAN_NAME, definition);\n    }\n\n}\n')),(0,i.kt)("p",null,"\u4e0a\u9762\u7684\u4ee3\u7801\u6ce8\u5165\u4e86\u4e24\u4e2a\u5173\u952e\u7684\u7c7b\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"ConfigurationPropertiesBinder"),(0,i.kt)("br",{parentName:"li"}),"\u7531\u914d\u7f6e\u6587\u4ef6\u4e2d\u7684\u5c5e\u6027\u8f6c\u6362\u6210\u5bf9\u5e94\u7c7b"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"ConfigurationPropertiesBindingPostProcessor"),(0,i.kt)("br",{parentName:"li"}),"bean\u521d\u59cb\u5316\u7684\u5904\u7406")),(0,i.kt)("p",null,"\u901a\u8fc7\u4e24\u4e2a\u7684\u914d\u5408\u6765\u5b9e\u73b0\u7684\u3002"),(0,i.kt)("h4",{id:"configurationpropertiesbindingpostprocessor\u6e90\u7801\u5206\u6790"},"ConfigurationPropertiesBindingPostProcessor\u6e90\u7801\u5206\u6790"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"ConfigurationPropertiesBindingPostProcessor")," \u8fd9\u4e2a\u4e3b\u8981\u662f\u5904\u7406Bean\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public class ConfigurationPropertiesBindingPostProcessor\n        implements BeanPostProcessor, PriorityOrdered, ApplicationContextAware, InitializingBean {\n    \n    private ConfigurationBeanFactoryMetadata beanFactoryMetadata;\n\n    private ApplicationContext applicationContext;\n\n    private ConfigurationPropertiesBinder configurationPropertiesBinder;     \n    \n    //\u7701\u7565\u4ee3\u7801\n}\n")),(0,i.kt)("p",null,"\u5b9e\u73b0\u4e86 ",(0,i.kt)("strong",{parentName:"p"},"BeanPostProcessor")," \u8fd9\u4e2a\u63a5\u53e3\uff0c\u4e3b\u8981\u662f\u5904\u7406bean\u3002\u4e0b\u9762\u770b\u4e00\u4e0b\u8fd9\u4e2a\u63a5\u53e3\u7684\u4e3b\u8981\u65b9\u6cd5\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"@Override\n    public Object postProcessBeforeInitialization(Object bean, String beanName) throws BeansException {\n        //bean\u7684\u5904\u7406--\u83b7\u53d6bean\u662f\u5426\u6709ConfigurationProperties\u914d\u7f6e\n        ConfigurationProperties annotation = getAnnotation(bean, beanName, ConfigurationProperties.class);\n        if (annotation != null && !hasBeenBound(beanName)) {\n            bind(bean, beanName, annotation);\n        }\n        return bean;\n    }\n")),(0,i.kt)("p",null,"\u901a\u8fc7\u5224\u65adbean\u662f\u5426\u914d\u7f6e\u4e86ConfigurationProperties\u6ce8\u89e3\uff0c\u5982\u679c\u914d\u7f6e\u4e86\u5c31\u8c03\u7528 ",(0,i.kt)("strong",{parentName:"p"},"bind")," \u65b9\u6cd5\u3002\u4e0b\u9762\u6765\u770b\u4e00\u4e0bbind\u65b9\u6cd5\u6e90\u7801\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"    private void bind(Object bean, String beanName, ConfigurationProperties annotation) {\n        ResolvableType type = getBeanType(bean, beanName);\n        Validated validated = getAnnotation(bean, beanName, Validated.class);\n        Annotation[] annotations = (validated != null) ? new Annotation[] { annotation, validated }\n                : new Annotation[] { annotation };\n        Bindable<?> target = Bindable.of(type).withExistingValue(bean).withAnnotations(annotations);\n        try {\n            this.configurationPropertiesBinder.bind(target);\n        }\n        catch (Exception ex) {\n            throw new ConfigurationPropertiesBindException(beanName, bean.getClass(), annotation, ex);\n        }\n    }\n")),(0,i.kt)("p",null,"\u4e0a\u9762\u7684\u4ee3\u7801\u4e3b\u8981\u5c31\u5b9e\u73b0\u4e86\u914d\u7f6e\u3002"),(0,i.kt)("h3",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,i.kt)("p",null,"\u603b\u7ed3\u4e00\u4e0b\u5982\u4f55\u4f7f\u7528\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"\u7ed9bean\u914d\u7f6eConfigurationProperties")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"\u7528EnableConfigurationProperties\u6ce8\u89e3\u914d\u7f6e\u914d\u7f6eConfigurationProperties\u4e86bean\u7684class"))))}c.isMDXComponent=!0}}]);