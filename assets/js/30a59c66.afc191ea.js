"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[2327],{3905:(n,t,e)=>{e.d(t,{Zo:()=>c,kt:()=>m});var a=e(7294);function o(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function r(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,a)}return e}function i(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?r(Object(e),!0).forEach((function(t){o(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function l(n,t){if(null==n)return{};var e,a,o=function(n,t){if(null==n)return{};var e,a,o={},r=Object.keys(n);for(a=0;a<r.length;a++)e=r[a],t.indexOf(e)>=0||(o[e]=n[e]);return o}(n,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(a=0;a<r.length;a++)e=r[a],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(o[e]=n[e])}return o}var s=a.createContext({}),p=function(n){var t=a.useContext(s),e=t;return n&&(e="function"==typeof n?n(t):i(i({},t),n)),e},c=function(n){var t=p(n.components);return a.createElement(s.Provider,{value:t},n.children)},u="mdxType",d={inlineCode:"code",wrapper:function(n){var t=n.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(n,t){var e=n.components,o=n.mdxType,r=n.originalType,s=n.parentName,c=l(n,["components","mdxType","originalType","parentName"]),u=p(e),g=o,m=u["".concat(s,".").concat(g)]||u[g]||d[g]||r;return e?a.createElement(m,i(i({ref:t},c),{},{components:e})):a.createElement(m,i({ref:t},c))}));function m(n,t){var e=arguments,o=t&&t.mdxType;if("string"==typeof n||o){var r=e.length,i=new Array(r);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=n,l[u]="string"==typeof n?n:o,i[1]=l;for(var p=2;p<r;p++)i[p]=e[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,e)}g.displayName="MDXCreateElement"},9260:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=e(7462),o=(e(7294),e(3905));const r={title:"SpringBoot\u6ce8\u89e3\u89e3\u6790\u4e4bConditionalOnXXX\u6761\u4ef6\u6ce8\u89e3",linkeTitle:"SpringBoot\u6ce8\u89e3\u89e3\u6790\u4e4bConditionalOnXXX\u6761\u4ef6\u6ce8\u89e3",date:new Date("2020-01-14T00:00:00.000Z")},i=void 0,l={unversionedId:"spring/spring-boot/annotation-source-analysis/springboot-ConditionalOnXXX-annotation",id:"spring/spring-boot/annotation-source-analysis/springboot-ConditionalOnXXX-annotation",title:"SpringBoot\u6ce8\u89e3\u89e3\u6790\u4e4bConditionalOnXXX\u6761\u4ef6\u6ce8\u89e3",description:"1 SpringBoot starter",source:"@site/docs/spring/spring-boot/annotation-source-analysis/springboot-ConditionalOnXXX-annotation.md",sourceDirName:"spring/spring-boot/annotation-source-analysis",slug:"/spring/spring-boot/annotation-source-analysis/springboot-ConditionalOnXXX-annotation",permalink:"/docs/spring/spring-boot/annotation-source-analysis/springboot-ConditionalOnXXX-annotation",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/spring/spring-boot/annotation-source-analysis/springboot-ConditionalOnXXX-annotation.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1678285899,formattedLastUpdatedAt:"Mar 8, 2023",frontMatter:{title:"SpringBoot\u6ce8\u89e3\u89e3\u6790\u4e4bConditionalOnXXX\u6761\u4ef6\u6ce8\u89e3",linkeTitle:"SpringBoot\u6ce8\u89e3\u89e3\u6790\u4e4bConditionalOnXXX\u6761\u4ef6\u6ce8\u89e3",date:"2020-01-14T00:00:00.000Z"},sidebar:"springboot",previous:{title:"SpringBoot\u6e90\u7801\u89e3\u6790\u4e4b-AutoConfigureBefore\u3001AutoConfigureOrder\u3001AutoConfigureAfter",permalink:"/docs/spring/spring-boot/annotation-source-analysis/springboot-AutoConfigureBefore-AutoConfigureOrder-AutoConfigureAfter"}},s={},p=[{value:"1 SpringBoot starter",id:"1-springboot-starter",level:3},{value:"2 ConditionXXX\u8bf4\u660e",id:"2-conditionxxx\u8bf4\u660e",level:3},{value:"2.1 @ConditionalOnClass\u548c@ConditionalOnMissingClass",id:"21-conditionalonclass\u548cconditionalonmissingclass",level:4},{value:"2.2 @ConditionalOnBean\u548c@ConditionalOnMissingBean",id:"22-conditionalonbean\u548cconditionalonmissingbean",level:4},{value:"2.3 @ConditionalOnProperty",id:"23-conditionalonproperty",level:4},{value:"2.4 @ConditionalOnResource\u6ce8\u89e3",id:"24-conditionalonresource\u6ce8\u89e3",level:4}],c={toc:p},u="wrapper";function d(n){let{components:t,...e}=n;return(0,o.kt)(u,(0,a.Z)({},c,e,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"1-springboot-starter"},"1 SpringBoot starter"),(0,o.kt)("p",null,"Spring starter\u4e3b\u8981\u901a\u8fc7ConditionXXX\u6765\u5b9e\u73b0\u7684\u3002"),(0,o.kt)("h3",{id:"2-conditionxxx\u8bf4\u660e"},"2 ConditionXXX\u8bf4\u660e"),(0,o.kt)("p",null,"\u4e0b\u9762\u6765\u4ecb\u7ecd\u4e0d\u540c\u7684\u7c7b\u578bConditionXXX\u7684\u7528\u6cd5\u548c\u6848\u4f8b\u3002"),(0,o.kt)("h4",{id:"21-conditionalonclass\u548cconditionalonmissingclass"},"2.1 @ConditionalOnClass\u548c@ConditionalOnMissingClass"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"\u6ce8\u89e3"),(0,o.kt)("th",{parentName:"tr",align:null},"\u4f4d\u7f6e"),(0,o.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"ConditionalOnClass"),(0,o.kt)("td",{parentName:"tr",align:null},"\u65b9\u6cd5\u4e0a\u3001\u7c7b\u4e0a"),(0,o.kt)("td",{parentName:"tr",align:null},"\u67d0\u4e2aclass\u4f4d\u4e8e\u7c7b\u8def\u5f84\u4e0a\uff0c\u624d\u4f1a\u5b9e\u4f8b\u5316\u4e00\u4e2aBean")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"ConditionalOnMissingClass"),(0,o.kt)("td",{parentName:"tr",align:null},"\u65b9\u6cd5\u4e0a\u3001\u7c7b\u4e0a"),(0,o.kt)("td",{parentName:"tr",align:null},"\u67d0\u4e2aclass\u7c7b\u8def\u5f84\u4e0a\u4e0d\u5b58\u5728\u7684\u65f6\u5019\uff0c\u624d\u4f1a\u5b9e\u4f8b\u5316\u4e00\u4e2aBean")))),(0,o.kt)("p",null,"\u4e0a\u9762\u4e24\u4e2a\u7c7b\u4e3b\u8981\u662f\u901a\u8fc7\u5224\u65ad\u7c7b\u662f\u5426\u5b58\u5728\u6765\u5b9e\u4f8b\u5316Bean\u3002\u7528\u6cd5\u548c@Conditional\u6ce8\u89e3\u5dee\u4e0d\u591a\u3002",(0,o.kt)("br",{parentName:"p"}),"\n","\u4e0b\u9762\u6765\u770b\u4e00\u4e0b\u4f7f\u7528\u6848\u4f8b\u4ee3\u7801(SpringBoot\u7684\u6e90\u7801\u501f\u7528)\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'@Configuration(proxyBeanMethods = false)\n@ConditionalOnClass(RedisOperations.class)\n@EnableConfigurationProperties(RedisProperties.class)\n@Import({ LettuceConnectionConfiguration.class, JedisConnectionConfiguration.class })\npublic class RedisAutoConfiguration {\n\n    @Bean\n    @ConditionalOnMissingBean(name = "redisTemplate")\n    public RedisTemplate<Object, Object> redisTemplate(RedisConnectionFactory redisConnectionFactory)\n            throws UnknownHostException {\n        RedisTemplate<Object, Object> template = new RedisTemplate<>();\n        template.setConnectionFactory(redisConnectionFactory);\n        return template;\n    }\n\n    @Bean\n    @ConditionalOnMissingBean\n    public StringRedisTemplate stringRedisTemplate(RedisConnectionFactory redisConnectionFactory)\n            throws UnknownHostException {\n        StringRedisTemplate template = new StringRedisTemplate();\n        template.setConnectionFactory(redisConnectionFactory);\n        return template;\n    }\n\n}\n')),(0,o.kt)("p",null,"\u4e0a\u9762\u5c31\u80fd\u770b\u5230 ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"@ConditionalOnClass"))," \u6ce8\u89e3\u4f7f\u7528\u5728 ",(0,o.kt)("strong",{parentName:"p"},"RedisAutoConfiguration")," \u8fd9\u4e2a\u4e5f\u662f\u6211\u4eec\u5728SpringBoot starter \u4e0a\u9762\u4f7f\u7528\u7684Redis\u81ea\u52a8\u914d\u7f6e\u5668\u3002"),(0,o.kt)("h4",{id:"22-conditionalonbean\u548cconditionalonmissingbean"},"2.2 @ConditionalOnBean\u548c@ConditionalOnMissingBean"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"\u6ce8\u89e3"),(0,o.kt)("th",{parentName:"tr",align:null},"\u4f4d\u7f6e"),(0,o.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"ConditionalOnBean"),(0,o.kt)("td",{parentName:"tr",align:null},"\u65b9\u6cd5\u4e0a\u3001\u7c7b\u4e0a"),(0,o.kt)("td",{parentName:"tr",align:null},"\u8981\u6c42bean\u5b58\u5728\u65f6\uff0c\u624d\u4f1a\u521b\u5efa\u8fd9\u4e2abean")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"ConditionalOnMissingBean"),(0,o.kt)("td",{parentName:"tr",align:null},"\u65b9\u6cd5\u4e0a\u3001\u7c7b\u4e0a"),(0,o.kt)("td",{parentName:"tr",align:null},"\u8981\u6c42bean\u4e0d\u5b58\u5728\u65f6\uff0c\u624d\u4f1a\u521b\u5efa\u8fd9\u4e2abean")))),(0,o.kt)("p",null,"\u8fd9\u4e24\u4e2a\u6ce8\u89e3\u4e5f\u662f\u4e00\u4e2a\u5bf9\u7acb\u7684\u6ce8\u89e3\u3002\u901a\u8fc7\u5224\u65adbean\u662f\u5426\u5b58\u5728\u6765\u5224\u65ad\u662f\u5426\u521b\u5efa\u9700\u8981\u7684bean.",(0,o.kt)("br",{parentName:"p"}),"\n","\u4e0b\u9762\u6765\u770b\u4e00\u4e0b\u4f8b\u5b50\uff1a(\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/rocketmq-spring/blob/master/rocketmq-spring-boot/src/main/java/org/apache/rocketmq/spring/autoconfigure/RocketMQAutoConfiguration.java"},"Rocketmq-spring"),")\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'@Configuration\n@EnableConfigurationProperties(RocketMQProperties.class)\n@ConditionalOnClass({MQAdmin.class})\n@ConditionalOnProperty(prefix = "rocketmq", value = "name-server", matchIfMissing = true)\n@Import({MessageConverterConfiguration.class, ListenerContainerConfiguration.class, ExtProducerResetConfiguration.class, RocketMQTransactionConfiguration.class})\n@AutoConfigureAfter({MessageConverterConfiguration.class})\n@AutoConfigureBefore({RocketMQTransactionConfiguration.class})\n\npublic class RocketMQAutoConfiguration {\n    @Bean(destroyMethod = "destroy")\n    @ConditionalOnBean(DefaultMQProducer.class)\n    @ConditionalOnMissingBean(name = ROCKETMQ_TEMPLATE_DEFAULT_GLOBAL_NAME)\n    public RocketMQTemplate rocketMQTemplate(DefaultMQProducer mqProducer,\n        RocketMQMessageConverter rocketMQMessageConverter) {\n        RocketMQTemplate rocketMQTemplate = new RocketMQTemplate();\n        rocketMQTemplate.setProducer(mqProducer);\n        rocketMQTemplate.setMessageConverter(rocketMQMessageConverter.getMessageConverter());\n        return rocketMQTemplate;\n    }\n}\n')),(0,o.kt)("p",null,"\u5927\u6982\u5c31\u662f\u5b58\u5728 ",(0,o.kt)("strong",{parentName:"p"},"DefaultMQProducer")," \u5b9e\u4f8b\uff0c\u4e0d\u5b58\u5728\u5b9e\u4f8b\u540d\u79f0\u4e3a ",(0,o.kt)("strong",{parentName:"p"},"ROCKETMQ_TEMPLATE_DEFAULT_GLOBAL_NAME")," \u7684Bean\u5c31\u4f1a\u521b\u5efa ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"RocketMQTemplate"))," \u5b9e\u4f8b\u3002"),(0,o.kt)("h4",{id:"23-conditionalonproperty"},"2.3 @ConditionalOnProperty"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"\u6ce8\u89e3"),(0,o.kt)("th",{parentName:"tr",align:null},"\u4f4d\u7f6e"),(0,o.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"ConditionalOnProperty"),(0,o.kt)("td",{parentName:"tr",align:null},"\u65b9\u6cd5\u4e0a\u3001\u7c7b\u4e0a"),(0,o.kt)("td",{parentName:"tr",align:null},"Spring Boot\u901a\u8fc7@ConditionalOnProperty\u6765\u63a7\u5236Configuration\u662f\u5426\u751f\u6548")))),(0,o.kt)("p",null,"\u8fd9\u4e2a\u6ce8\u89e3\u7528\u7684\u6bd4\u8f83\u5c11\u4e0b\u9762\u6765\u770b\u4e00\u4e0b\u8fd9\u4e2a\u6ce8\u89e3\u7684\u6e90\u7801\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'@Retention(RetentionPolicy.RUNTIME)\n@Target({ ElementType.TYPE, ElementType.METHOD })\n@Documented\n@Conditional(OnPropertyCondition.class)\npublic @interface ConditionalOnProperty {\n\n    // \u6570\u7ec4\uff0c\u83b7\u53d6\u5bf9\u5e94property\u540d\u79f0\u7684\u503c\uff0c\u4e0ename\u4e0d\u53ef\u540c\u65f6\u4f7f\u7528\n    String[] value() default {};\n    \n    // \u914d\u7f6e\u5c5e\u6027\u540d\u79f0\u7684\u524d\u7f00\uff0c\u6bd4\u5982spring\u6e90\u7801\u4e2d\u7684\n    String prefix() default "";\n    \n    // \u6570\u7ec4\uff0c\u914d\u7f6e\u5c5e\u6027\u5b8c\u6574\u540d\u79f0\u6216\u90e8\u5206\u540d\u79f0\n    String[] name() default {};\n    \n    // \u53ef\u4e0ename\u7ec4\u5408\u4f7f\u7528\uff0c\u6bd4\u8f83\u83b7\u53d6\u5230\u7684\u5c5e\u6027\u503c\u4e0ehavingValue\u7ed9\u5b9a\u7684\u503c\u662f\u5426\u76f8\u540c\uff0c\u76f8\u540c\u624d\u52a0\u8f7d\u914d\u7f6e\n    String havingValue() default "";\n    \n    //\u7f3a\u5c11\u8be5\u914d\u7f6e\u5c5e\u6027\u65f6\u662f\u5426\u53ef\u4ee5\u52a0\u8f7d\u3002\u5982\u679c\u4e3atrue\uff0c\u6ca1\u6709\u8be5\u914d\u7f6e\u5c5e\u6027\u65f6\u4e5f\u4f1a\u6b63\u5e38\u52a0\u8f7d\uff1b\u53cd\u4e4b\u5219\u4e0d\u4f1a\u751f\u6548\n    boolean matchIfMissing() default false;\n}\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u5728\u5f88\u591ablog\u4e2d\u770b\u5230\u8bf4\u8fd8\u6709\u4e00\u4e2a:",(0,o.kt)("br",{parentName:"p"}),"\n","boolean relaxedNames() default true;\u5c5e\u6027",(0,o.kt)("br",{parentName:"p"}),"\n","\u5728\u5f53\u524d\u7684SpringBoot 2.2.2.RELEASE \u7248\u672c\u5e76\u6ca1\u6709\u770b\u5230\uff0c\u901a\u8fc7\u67e5\u770b\u5386\u53f2\u7248\u672c\u53d1\u73b0\u5728\u8fd9\u4e2a df9d2bc9f47381a2f9e6435f825eb71e63840393\u7684\u63d0\u4ea4\u5220\u9664\u4e86\uff0c\u53ef\u4ee5\u81ea\u884c\u53bb\u5386\u53f2\u7248\u67e5\u770b\u3002")),(0,o.kt)("p",null,"\u4e0b\u9762\u6765\u770b\u4e00\u4e0b\u4e00\u4e2a\u4f8b\u5b50\uff0c\u8fd9\u4e2a\u4f8b\u5b50\u8fd8\u662f\u4e0a\u9762 ",(0,o.kt)("strong",{parentName:"p"},"rocketmq-spring-boot-starter")," \u7684\u4f8b\u5b50\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'@Configuration\n@EnableConfigurationProperties(RocketMQProperties.class)\n@ConditionalOnClass({MQAdmin.class})\n@ConditionalOnProperty(prefix = "rocketmq", value = "name-server",matchIfMissing = true)\n@Import({MessageConverterConfiguration.class, ListenerContainerConfiguration.class, ExtProducerResetConfiguration.class, RocketMQTransactionConfiguration.class})\n@AutoConfigureAfter({MessageConverterConfiguration.class})\n@AutoConfigureBefore({RocketMQTransactionConfiguration.class})\n\npublic class RocketMQAutoConfiguration {\n    //\u7701\u7565\u4ee3\u7801\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'@ConditionalOnProperty(prefix = "rocketmq", value = "name-server", matchIfMissing = true)\n')),(0,o.kt)("p",null,"\u7c7b\u4e0a\u9762\u7684\u6ce8\u89e3\uff0c\u4e5f\u5c31\u662f\u8bf4\u524d\u7f00\u4e3a ",(0,o.kt)("strong",{parentName:"p"},"rocketmq")," , value \u4e3a ",(0,o.kt)("strong",{parentName:"p"},"name-server")," \uff0c\u5982\u679c\u6ca1\u6709\u5339\u914d\u5230\u6ca1\u6709\u8be5\u914d\u7f6e\u5c5e\u6027\u65f6\u4e5f\u4f1a\u6b63\u5e38\u52a0\u8f7d\u3002"),(0,o.kt)("h4",{id:"24-conditionalonresource\u6ce8\u89e3"},"2.4 @ConditionalOnResource\u6ce8\u89e3"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"\u6ce8\u89e3"),(0,o.kt)("th",{parentName:"tr",align:null},"\u4f4d\u7f6e"),(0,o.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"ConditionalOnResource"),(0,o.kt)("td",{parentName:"tr",align:null},"\u65b9\u6cd5\u4e0a\u3001\u7c7b\u4e0a"),(0,o.kt)("td",{parentName:"tr",align:null},"\u5f53\u6307\u5b9a\u7684\u8d44\u6e90\u6587\u4ef6\u51fa\u73b0\u5728classpath\u4e2d\u751f\u6548")))),(0,o.kt)("p",null,"\u4f8b\u5b50\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'@ConditionalOnResource(resources = "${spring.info.build.location:classpath:META-INF/build-info.properties}")\n@ConditionalOnMissingBean\n@Bean\npublic BuildProperties buildProperties() throws Exception {\n    return new BuildProperties(\n            loadFrom(this.properties.getBuild().getLocation(), "build"));\n}\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1aConditionalOnResource\u652f\u6301\u5360\u4f4d\u7b26\u3002\u5728\u6e90\u7801\u4e2d\u6709\u5bf9\u5360\u4f4d\u7b26\u8fdb\u884c\u89e3\u6790\u53ef\u4ee5\u53bb\u770b\u4e00\u4e0b\u7c7bOnResourceCondition")))}d.isMDXComponent=!0}}]);