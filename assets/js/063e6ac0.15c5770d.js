"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[7964],{3905:(n,t,e)=>{e.d(t,{Zo:()=>u,kt:()=>p});var o=e(7294);function a(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function i(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,o)}return e}function s(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?i(Object(e),!0).forEach((function(t){a(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function r(n,t){if(null==n)return{};var e,o,a=function(n,t){if(null==n)return{};var e,o,a={},i=Object.keys(n);for(o=0;o<i.length;o++)e=i[o],t.indexOf(e)>=0||(a[e]=n[e]);return a}(n,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(o=0;o<i.length;o++)e=i[o],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(a[e]=n[e])}return a}var l=o.createContext({}),d=function(n){var t=o.useContext(l),e=t;return n&&(e="function"==typeof n?n(t):s(s({},t),n)),e},u=function(n){var t=d(n.components);return o.createElement(l.Provider,{value:t},n.children)},c="mdxType",g={inlineCode:"code",wrapper:function(n){var t=n.children;return o.createElement(o.Fragment,{},t)}},C=o.forwardRef((function(n,t){var e=n.components,a=n.mdxType,i=n.originalType,l=n.parentName,u=r(n,["components","mdxType","originalType","parentName"]),c=d(e),C=a,p=c["".concat(l,".").concat(C)]||c[C]||g[C]||i;return e?o.createElement(p,s(s({ref:t},u),{},{components:e})):o.createElement(p,s({ref:t},u))}));function p(n,t){var e=arguments,a=t&&t.mdxType;if("string"==typeof n||a){var i=e.length,s=new Array(i);s[0]=C;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=n,r[c]="string"==typeof n?n:a,s[1]=r;for(var d=2;d<i;d++)s[d]=e[d];return o.createElement.apply(null,s)}return o.createElement.apply(null,e)}C.displayName="MDXCreateElement"},505:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>g,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var o=e(7462),a=(e(7294),e(3905));const i={title:"SpringBoot\u6e90\u7801\u89e3\u6790\u4e4bConditionalOnXXX",linkTitle:"SpringBoot\u6e90\u7801\u89e3\u6790\u4e4bConditionalOnXXX",date:new Date("2019-12-09T00:00:00.000Z"),weight:3},s=void 0,r={unversionedId:"spring/spring-boot/core-source-analysis/springboot-ConditionalOnXXX",id:"spring/spring-boot/core-source-analysis/springboot-ConditionalOnXXX",title:"SpringBoot\u6e90\u7801\u89e3\u6790\u4e4bConditionalOnXXX",description:"1. SpringBoot\u4e2d\u7684ConditionalOnXXX\u7c7b\u578b\u7684\u6ce8\u89e3",source:"@site/docs/spring/spring-boot/core-source-analysis/springboot-ConditionalOnXXX.md",sourceDirName:"spring/spring-boot/core-source-analysis",slug:"/spring/spring-boot/core-source-analysis/springboot-ConditionalOnXXX",permalink:"/docs/spring/spring-boot/core-source-analysis/springboot-ConditionalOnXXX",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/spring/spring-boot/core-source-analysis/springboot-ConditionalOnXXX.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1680402643,formattedLastUpdatedAt:"Apr 2, 2023",frontMatter:{title:"SpringBoot\u6e90\u7801\u89e3\u6790\u4e4bConditionalOnXXX",linkTitle:"SpringBoot\u6e90\u7801\u89e3\u6790\u4e4bConditionalOnXXX",date:"2019-12-09T00:00:00.000Z",weight:3},sidebar:"springboot",previous:{title:"SpringBoot\u4e2d\u5185\u5d4cTomcat\u7684\u5b9e\u73b0\u539f\u7406\u89e3\u6790",permalink:"/docs/spring/spring-boot/core-source-analysis/embedded-tomcat-theory"},next:{title:"SpringBoot\u6e90\u7801\u89e3\u6790\u4e4bConfigurationProperties\u539f\u7406",permalink:"/docs/spring/spring-boot/core-source-analysis/springboot-ConfigurationProperties"}},l={},d=[{value:"1. SpringBoot\u4e2d\u7684ConditionalOnXXX\u7c7b\u578b\u7684\u6ce8\u89e3",id:"1-springboot\u4e2d\u7684conditionalonxxx\u7c7b\u578b\u7684\u6ce8\u89e3",level:3},{value:"2. SpringBoot\u6e90\u7801\u5206\u6790\u4e4bConditionalOnClass",id:"2-springboot\u6e90\u7801\u5206\u6790\u4e4bconditionalonclass",level:3}],u={toc:d},c="wrapper";function g(n){let{components:t,...e}=n;return(0,a.kt)(c,(0,o.Z)({},u,e,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"1-springboot\u4e2d\u7684conditionalonxxx\u7c7b\u578b\u7684\u6ce8\u89e3"},"1. SpringBoot\u4e2d\u7684ConditionalOnXXX\u7c7b\u578b\u7684\u6ce8\u89e3"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-mermaid"},"graph LR\nB(ConditionalOnXXX)\n    B --\x3e ConditionalOnBean(ConditionalOnBean)\n    B --\x3eConditionalOnClass(ConditionalOnClass)\n    B --\x3eConditionalOnCloudPlatform(ConditionalOnCloudPlatform)\n    B --\x3eConditionalOnExpression(ConditionalOnExpression)\n    B --\x3eConditionalOnJava(ConditionalOnJava)\n    B --\x3eConditionalOnJndi(ConditionalOnJndi)\n    B --\x3eConditionalOnMissingBean(ConditionalOnMissingBean)\n    B --\x3eConditionalOnMissingClass(ConditionalOnMissingClass)\n    B --\x3eConditionalOnNotWebApplication(ConditionalOnNotWebApplication)\n    B --\x3eConditionalOnProperty(ConditionalOnProperty)\n    B --\x3eConditionalOnResource(ConditionalOnResource)\n    B --\x3eConditionalOnSingleCandidate(ConditionalOnSingleCandidate)\n    B --\x3eConditionalOnWebApplication(ConditionalOnWebApplication)\n")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://github.com/mxsm/document/blob/master/image/Spring/SpringBoot/ConditionalOnXXX.png?raw=true",alt:null})),(0,a.kt)("p",null,"\u901a\u8fc7\u4e0a\u9762\u7684\u53ef\u4ee5\u770b\u51fa\u6765\u4e3b\u8981\u662f\u6709\u8fd9\u4e9b\u6761\u4ef6\u5316\u52a0\u8f7d\u7c7b\u7684\u6ce8\u89e3\u3002\u7136\u540e\u52a0\u4e0a\u4e09\u4e2a\u987a\u5e8f\u7684\u6ce8\u89e3"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-mermaid"},"graph LR\nB(\u987a\u5e8f\u6ce8\u89e3)\n    B --\x3e ConditionalOnBean(AutoConfigureBefore)\n    B --\x3eConditionalOnClass(AutoConfigureOrder)\n    B --\x3eConditionalOnCloudPlatform(AutoConfigureAfter)\n")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://github.com/mxsm/document/blob/master/image/Spring/SpringBoot/SpringBoot%E9%A1%BA%E5%BA%8F%E6%B3%A8%E8%A7%A3.png?raw=true",alt:null})),(0,a.kt)("p",null,"\u901a\u8fc7\u8fd9\u4e9b\u6ce8\u89e3\u6765\u5b9e\u73b0SpringBoot\u7684\u81ea\u52a8\u6ce8\u5165\u548c\u53d6\u6d88xml\u7684\u914d\u7f6e\u3002\u4e0b\u9762\u4f1a\u9009\u53d6 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},(0,a.kt)("inlineCode",{parentName:"em"},"ConditionalOnClass")))," \u6765\u8fdb\u884c\u6e90\u7801\u5206\u6790\u3002\u8fd9\u4e9b\u6ce8\u89e3\u5982\u4f55\u8fdb\u884c\u534f\u540c\u5de5\u4f5c\u6765\u5b9e\u73b0\u6761\u4ef6\u5316\u6ce8\u5165\u7684\u3002"),(0,a.kt)("h3",{id:"2-springboot\u6e90\u7801\u5206\u6790\u4e4bconditionalonclass"},"2. SpringBoot\u6e90\u7801\u5206\u6790\u4e4bConditionalOnClass"),(0,a.kt)("p",null,"\u9996\u5148\u770b\u4e00\u4e0b\u6e90\u7801\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"@Target({ ElementType.TYPE, ElementType.METHOD })\n@Retention(RetentionPolicy.RUNTIME)\n@Documented\n@Conditional(OnClassCondition.class)\npublic @interface ConditionalOnClass {\n    \n    Class<?>[] value() default {};\n\n    String[] name() default {};\n\n}\n")),(0,a.kt)("p",null,"\u901a\u8fc7\u4e0a\u9762\u53ef\u4ee5\u770b\u51fa\u6765\u4e3b\u8981\u662f\u901a\u8fc7 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Spring"))," \u7684 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"@Conditional"))," \u6765\u5b9e\u73b0\u3002\u770b\u4e00\u4e0b ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"OnClassCondition"))," \u7684\u6e90\u7801\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"@Order(Ordered.HIGHEST_PRECEDENCE)\nclass OnClassCondition extends FilteringSpringBootCondition {\n    //\u7701\u4e86\u4ee3\u7801\n}\n")),(0,a.kt)("p",null,"\u53ef\u4ee5\u770b\u51fa\u6765\u7ee7\u627f\u4e86 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"FilteringSpringBootCondition"))," \u7c7b\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"abstract class FilteringSpringBootCondition extends SpringBootCondition\n        implements AutoConfigurationImportFilter, BeanFactoryAware, BeanClassLoaderAware {\n    //\u7701\u7565\u4ee3\u7801\n}\n\npublic abstract class SpringBootCondition implements Condition {\n    //\u7701\u7565\u4ee3\u7801\n}\n")),(0,a.kt)("p",null,"\u901a\u8fc7\u7ee7\u627f\u5173\u7cfb\u53ef\u4ee5\u770b\u51fa\u6765\uff0c",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"SpringBootCondition"))," \u5b9e\u73b0\u4e86 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Condition"))," \u8fd9\u4e2a\u9876\u5c42\u7684\u63a5\u53e3\uff0c\u8fd9\u4e2a\u4e5f\u662f\u6700\u7ec8\u6267\u884c\u7684\u63a5\u53e3\u3002\u7136\u540e\u901a\u8fc7\u5c01\u88c5 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"FilteringSpringBootCondition"))," \u6700\u540e\u7531\u4e0d\u540c\u7684\u7684\u5177\u4f53\u5b9e\u73b0\u7c7b\u6765\u5b9e\u73b0\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'@Order(Ordered.HIGHEST_PRECEDENCE)\nclass OnClassCondition extends FilteringSpringBootCondition {\n\n    @Override\n    protected final ConditionOutcome[] getOutcomes(String[] autoConfigurationClasses,\n            AutoConfigurationMetadata autoConfigurationMetadata) {\n        // Split the work and perform half in a background thread if more than one\n        // processor is available. Using a single additional thread seems to offer the\n        // best performance. More threads make things worse.\n        if (Runtime.getRuntime().availableProcessors() > 1) {\n            return resolveOutcomesThreaded(autoConfigurationClasses, autoConfigurationMetadata);\n        }\n        else {\n            OutcomesResolver outcomesResolver = new StandardOutcomesResolver(autoConfigurationClasses, 0,\n                    autoConfigurationClasses.length, autoConfigurationMetadata, getBeanClassLoader());\n            return outcomesResolver.resolveOutcomes();\n        }\n    }\n\n    private ConditionOutcome[] resolveOutcomesThreaded(String[] autoConfigurationClasses,\n            AutoConfigurationMetadata autoConfigurationMetadata) {\n        int split = autoConfigurationClasses.length / 2;\n        OutcomesResolver firstHalfResolver = createOutcomesResolver(autoConfigurationClasses, 0, split,\n                autoConfigurationMetadata);\n        OutcomesResolver secondHalfResolver = new StandardOutcomesResolver(autoConfigurationClasses, split,\n                autoConfigurationClasses.length, autoConfigurationMetadata, getBeanClassLoader());\n        ConditionOutcome[] secondHalf = secondHalfResolver.resolveOutcomes();\n        ConditionOutcome[] firstHalf = firstHalfResolver.resolveOutcomes();\n        ConditionOutcome[] outcomes = new ConditionOutcome[autoConfigurationClasses.length];\n        System.arraycopy(firstHalf, 0, outcomes, 0, firstHalf.length);\n        System.arraycopy(secondHalf, 0, outcomes, split, secondHalf.length);\n        return outcomes;\n    }\n\n    private OutcomesResolver createOutcomesResolver(String[] autoConfigurationClasses, int start, int end,\n            AutoConfigurationMetadata autoConfigurationMetadata) {\n        OutcomesResolver outcomesResolver = new StandardOutcomesResolver(autoConfigurationClasses, start, end,\n                autoConfigurationMetadata, getBeanClassLoader());\n        try {\n            return new ThreadedOutcomesResolver(outcomesResolver);\n        }\n        catch (AccessControlException ex) {\n            return outcomesResolver;\n        }\n    }\n\n    @Override\n    public ConditionOutcome getMatchOutcome(ConditionContext context, AnnotatedTypeMetadata metadata) {\n        ClassLoader classLoader = context.getClassLoader();\n        ConditionMessage matchMessage = ConditionMessage.empty();\n        List<String> onClasses = getCandidates(metadata, ConditionalOnClass.class);\n        if (onClasses != null) {\n            List<String> missing = filter(onClasses, ClassNameFilter.MISSING, classLoader);\n            if (!missing.isEmpty()) {\n                return ConditionOutcome.noMatch(ConditionMessage.forCondition(ConditionalOnClass.class)\n                        .didNotFind("required class", "required classes").items(Style.QUOTE, missing));\n            }\n            matchMessage = matchMessage.andCondition(ConditionalOnClass.class)\n                    .found("required class", "required classes")\n                    .items(Style.QUOTE, filter(onClasses, ClassNameFilter.PRESENT, classLoader));\n        }\n        List<String> onMissingClasses = getCandidates(metadata, ConditionalOnMissingClass.class);\n        if (onMissingClasses != null) {\n            List<String> present = filter(onMissingClasses, ClassNameFilter.PRESENT, classLoader);\n            if (!present.isEmpty()) {\n                return ConditionOutcome.noMatch(ConditionMessage.forCondition(ConditionalOnMissingClass.class)\n                        .found("unwanted class", "unwanted classes").items(Style.QUOTE, present));\n            }\n            matchMessage = matchMessage.andCondition(ConditionalOnMissingClass.class)\n                    .didNotFind("unwanted class", "unwanted classes")\n                    .items(Style.QUOTE, filter(onMissingClasses, ClassNameFilter.MISSING, classLoader));\n        }\n        return ConditionOutcome.match(matchMessage);\n    }\n\n    private List<String> getCandidates(AnnotatedTypeMetadata metadata, Class<?> annotationType) {\n        MultiValueMap<String, Object> attributes = metadata.getAllAnnotationAttributes(annotationType.getName(), true);\n        if (attributes == null) {\n            return null;\n        }\n        List<String> candidates = new ArrayList<>();\n        addAll(candidates, attributes.get("value"));\n        addAll(candidates, attributes.get("name"));\n        return candidates;\n    }\n\n    private void addAll(List<String> list, List<Object> itemsToAdd) {\n        if (itemsToAdd != null) {\n            for (Object item : itemsToAdd) {\n                Collections.addAll(list, (String[]) item);\n            }\n        }\n    }\n\n    private interface OutcomesResolver {\n\n        ConditionOutcome[] resolveOutcomes();\n\n    }\n\n    private static final class ThreadedOutcomesResolver implements OutcomesResolver {\n\n        private final Thread thread;\n\n        private volatile ConditionOutcome[] outcomes;\n\n        private ThreadedOutcomesResolver(OutcomesResolver outcomesResolver) {\n            this.thread = new Thread(() -> this.outcomes = outcomesResolver.resolveOutcomes());\n            this.thread.start();\n        }\n\n        @Override\n        public ConditionOutcome[] resolveOutcomes() {\n            try {\n                this.thread.join();\n            }\n            catch (InterruptedException ex) {\n                Thread.currentThread().interrupt();\n            }\n            return this.outcomes;\n        }\n\n    }\n\n    private final class StandardOutcomesResolver implements OutcomesResolver {\n\n        private final String[] autoConfigurationClasses;\n\n        private final int start;\n\n        private final int end;\n\n        private final AutoConfigurationMetadata autoConfigurationMetadata;\n\n        private final ClassLoader beanClassLoader;\n\n        private StandardOutcomesResolver(String[] autoConfigurationClasses, int start, int end,\n                AutoConfigurationMetadata autoConfigurationMetadata, ClassLoader beanClassLoader) {\n            this.autoConfigurationClasses = autoConfigurationClasses;\n            this.start = start;\n            this.end = end;\n            this.autoConfigurationMetadata = autoConfigurationMetadata;\n            this.beanClassLoader = beanClassLoader;\n        }\n\n        @Override\n        public ConditionOutcome[] resolveOutcomes() {\n            return getOutcomes(this.autoConfigurationClasses, this.start, this.end, this.autoConfigurationMetadata);\n        }\n\n        private ConditionOutcome[] getOutcomes(String[] autoConfigurationClasses, int start, int end,\n                AutoConfigurationMetadata autoConfigurationMetadata) {\n            ConditionOutcome[] outcomes = new ConditionOutcome[end - start];\n            for (int i = start; i < end; i++) {\n                String autoConfigurationClass = autoConfigurationClasses[i];\n                if (autoConfigurationClass != null) {\n                    String candidates = autoConfigurationMetadata.get(autoConfigurationClass, "ConditionalOnClass");\n                    if (candidates != null) {\n                        outcomes[i - start] = getOutcome(candidates);\n                    }\n                }\n            }\n            return outcomes;\n        }\n\n        private ConditionOutcome getOutcome(String candidates) {\n            try {\n                if (!candidates.contains(",")) {\n                    return getOutcome(candidates, this.beanClassLoader);\n                }\n                for (String candidate : StringUtils.commaDelimitedListToStringArray(candidates)) {\n                    ConditionOutcome outcome = getOutcome(candidate, this.beanClassLoader);\n                    if (outcome != null) {\n                        return outcome;\n                    }\n                }\n            }\n            catch (Exception ex) {\n                // We\'ll get another chance later\n            }\n            return null;\n        }\n\n        private ConditionOutcome getOutcome(String className, ClassLoader classLoader) {\n            if (ClassNameFilter.MISSING.matches(className, classLoader)) {\n                return ConditionOutcome.noMatch(ConditionMessage.forCondition(ConditionalOnClass.class)\n                        .didNotFind("required class").items(Style.QUOTE, className));\n            }\n            return null;\n        }\n\n    }\n\n}\n')))}g.isMDXComponent=!0}}]);