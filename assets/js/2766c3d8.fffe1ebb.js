"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[3958],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>g});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=p(a),c=r,g=d["".concat(s,".").concat(c)]||d[c]||u[c]||i;return a?n.createElement(g,o(o({ref:t},m),{},{components:a})):n.createElement(g,o({ref:t},m))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5998:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const i={title:"\u5982\u4f55\u81ea\u5b9a\u4e49Bean validation\u5b9e\u73b0\u6570\u636e\u6821\u9a8c",linkTitle:"\u5982\u4f55\u81ea\u5b9a\u4e49Bean validation\u5b9e\u73b0\u6570\u636e\u6821\u9a8c",date:new Date("2022-01-30T00:00:00.000Z"),weight:202201301429},o=void 0,l={unversionedId:"java/java-se/others/bean-validation",id:"java/java-se/others/bean-validation",title:"\u5982\u4f55\u81ea\u5b9a\u4e49Bean validation\u5b9e\u73b0\u6570\u636e\u6821\u9a8c",description:"Jakarta Bean Validation",source:"@site/docs/java/java-se/others/bean-validation.md",sourceDirName:"java/java-se/others",slug:"/java/java-se/others/bean-validation",permalink:"/docs/java/java-se/others/bean-validation",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/java/java-se/others/bean-validation.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1674227439,formattedLastUpdatedAt:"Jan 20, 2023",frontMatter:{title:"\u5982\u4f55\u81ea\u5b9a\u4e49Bean validation\u5b9e\u73b0\u6570\u636e\u6821\u9a8c",linkTitle:"\u5982\u4f55\u81ea\u5b9a\u4e49Bean validation\u5b9e\u73b0\u6570\u636e\u6821\u9a8c",date:"2022-01-30T00:00:00.000Z",weight:202201301429},sidebar:"javase",previous:{title:"Java \u6027\u80fd\u5206\u6790\u5de5\u5177 async-profiler",permalink:"/docs/java/java-se/others/async-profiler"},next:{title:"JVM\u5e38\u7528\u7684\u547d\u4ee4-JDK8",permalink:"/docs/java/java-se/others/common-jdk-command"}},s={},p=[{value:"1. \u5b9a\u4e49\u7ea6\u675f",id:"1-\u5b9a\u4e49\u7ea6\u675f",level:3},{value:"2. ConstraintValidator\u63a5\u53e3\u5b9e\u73b0",id:"2-constraintvalidator\u63a5\u53e3\u5b9e\u73b0",level:3},{value:"3.  MobileNum\u6ce8\u89e3\u6d4b\u8bd5",id:"3--mobilenum\u6ce8\u89e3\u6d4b\u8bd5",level:3},{value:"4. \u603b\u7ed3",id:"4-\u603b\u7ed3",level:3}],m={toc:p};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://beanvalidation.org/logo/logo.svg",alt:"Jakarta Bean Validation"})),(0,r.kt)("p",null,"\u5728\u5f00\u53d1\u7684\u8fc7\u7a0b\u4e2d\u6570\u636e\u6821\u9a8c\u662f\u4e00\u4e2a\u5f88\u5e38\u89c1\u7684\u64cd\u4f5c\uff0c\u901a\u5e38\u7684\u505a\u6cd5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public boolean addUser(StudentJson json){\n    if(json.getFirstName() == null || "".equals(json.getFirstName().trim())){\n        throw new IllegalArgumentException("\u540d\u79f0\u4e0d\u80fd\u4e3a\u7a7a");\n    }\n    //\u5176\u4ed6\u7684\u6821\u9a8c\u903b\u8f91\n    return true;\n}\n')),(0,r.kt)("p",null,"\u5c06\u6240\u6709\u7684\u6821\u9a8c\u903b\u8f91\u5199\u5728\u4e1a\u52a1\u4ee3\u7801\u4e2d\u3002\u8fd9\u91cc\u53ef\u80fd\u8fd8\u5b58\u5728\u5176\u4ed6\u7684\u4e00\u4e2a\u95ee\u9898\u5c31\u662f\u4e00\u79cd\u7c7b\u578b\u7684\u6570\u636e\u53ef\u80fd\u6821\u9a8c\u903b\u8f91\u57fa\u672c\u4e0a\u4e00\u6837\u5c31\u5224\u7a7a\u3002\u5982\u679c\u6ca1\u6709\u4e00\u5957\u7edf\u4e00\u7684\u5904\u7406\u9a8c\u8bc1\u7684\u63a5\u53e3\u89c4\u8303\u3002\u5c31\u9700\u8981\u7528\u6237\u9488\u5bf9\u4e0d\u540c\u7684Bean\u7684\u5b57\u6bb5\u5199\u6821\u9a8c\u903b\u8f91\u3002",(0,r.kt)("a",{parentName:"p",href:"https://beanvalidation.org/"},(0,r.kt)("strong",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"strong"},"Bean validation")))," \u5c31\u662f\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\u3002\u800c\u5bf9\u4e8e ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Bean validation"))," \u5b9e\u73b0\u4f7f\u7528\u8303\u56f4\u6700\u5e7f\u7684\u5c31\u662f ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"hibernate-validator")),"  \u3002\u6bd4\u5982Spring\u90fd\u6709\u4f7f\u7528 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"hibernate-validator"))," \u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"hibernate-validator Github\u5730\u5740\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://github.com/hibernate//hibernate-validator/"},"https://github.com/hibernate//hibernate-validator/"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Bean Validation\u7684\u53e3\u53f7: Constrain once, validate everywhere")),(0,r.kt)("p",null,"Bean Validation\u7684\u77e5\u8bc6\u7ed3\u6784\u56fe\u5982\u4e0b\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/java/jvm/beanvalidation%E7%9F%A5%E8%AF%86%E7%82%B9.png",alt:"beanvalidation\u77e5\u8bc6\u70b9"})),(0,r.kt)("p",null,"\u5982\u4f55\u81ea\u5b9a\u4e49\u4e00\u4e2a\u7ea6\u675f\uff0c\u6839\u636e\u4e0a\u9762\u7684",(0,r.kt)("strong",{parentName:"p"},"Bean Validation")," \u7684\u77e5\u8bc6\u7ed3\u6784\u56fe\u6765\u4e00\u6b65\u6b65\u5b9e\u73b0\u3002\u4e0b\u9762\u5df2\u5b9a\u4e49\u4e00\u4e2a \u624b\u673a\u53f7\u7801\u7ea6\u675f"),(0,r.kt)("h3",{id:"1-\u5b9a\u4e49\u7ea6\u675f"},"1. \u5b9a\u4e49\u7ea6\u675f"),(0,r.kt)("p",null,"\u5b9a\u4e49\u7684\u6ce8\u89e3\u7ea6\u675f\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'@Documented\n@Constraint(validatedBy = MobileNumValidator.class)\n@Target({ ElementType.METHOD, ElementType.FIELD, ElementType.ANNOTATION_TYPE, ElementType.CONSTRUCTOR, ElementType.PARAMETER, ElementType.TYPE_USE })\n@Retention(RetentionPolicy.RUNTIME)\npublic @interface MobileNum {\n\n    String message() default "{com.github.mxsm.MobileNum.message}";\n\n    Class<?>[] groups() default { };\n\n    Class<? extends Payload>[] payload() default { };\n\n}\n')),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/java/jvm/image-20220130171927372.png",alt:"image-20220130171927372"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6807\u53f71\uff1a")," ",(0,r.kt)("strong",{parentName:"p"},"@Constraint")," \u6ce8\u89e3\u8bbe\u7f6e\u81ea\u5b9a\u4e49\u9a8c\u8bc1\u5668\uff0c",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"MobileNumValidator"))," \u9700\u8981\u81ea\u5df1\u5b9e\u73b0 ",(0,r.kt)("strong",{parentName:"p"},"ConstraintValidator")," \u63a5\u53e3"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6807\u53f72\uff1a")," \u8fd9\u4e09\u4e2a\u662f\u7ea6\u675f\u5fc5\u586b\u7684\u4e09\u4e2a\u5c5e\u6027(\u540c\u65f6\u8fd8\u53ef\u4ee5\u589e\u52a0\u5176\u4ed6\u7684\u5c5e\u6027)"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"message\u7684\u63d2\u5165\u503c\u9ed8\u8ba4\u5b9a\u4e49\u5728ValidationMessages.properties\u6587\u4ef6\u4e2d\uff0c\u8fd9\u91cc\u8fd8\u6d89\u53ca\u5230\u56fd\u9645\u5316\u7b49\u7b49\u3002")),(0,r.kt)("h3",{id:"2-constraintvalidator\u63a5\u53e3\u5b9e\u73b0"},"2. ConstraintValidator\u63a5\u53e3\u5b9e\u73b0"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"MobileNumValidator"))," \u7684\u63a5\u53e3\u5b9e\u73b0\u5982\u4e0b:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public class MobileNumValidator implements ConstraintValidator<MobileNum,String> {\n\n    @Override\n    public boolean isValid(String value, ConstraintValidatorContext context) {\n\n        if(null == value || value.trim().length() != 11 || !value.matches("^[0-9]+$")){\n            return false;\n        }\n        return true;\n    }\n}\n')),(0,r.kt)("h3",{id:"3--mobilenum\u6ce8\u89e3\u6d4b\u8bd5"},"3.  MobileNum\u6ce8\u89e3\u6d4b\u8bd5"),(0,r.kt)("p",null,"\u6d4b\u8bd5\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public class ValidationMain {\n\n    public static void main(String[] args) {\n        Person person = new Person();\n        person.setMobile("122222222");\n        Validator validator = Validation.buildDefaultValidatorFactory().getValidator();\n        Set<ConstraintViolation<Person>> constraintViolations = validator.validate( person );\n        ConstraintViolation<Person> next = constraintViolations.iterator().next();\n        String message = next.getMessage();\n        System.out.println(message);\n    }\n\n\n    public static class Person{\n        @MobileNum\n        //@Email\n        private String mobile;\n\n        public String getMobile() {\n            return mobile;\n        }\n\n        public void setMobile(String mobile) {\n            this.mobile = mobile;\n        }\n    }\n}\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u589e\u52a0Hibernate-validator\u7684maven\u4f9d\u8d56\u3002"),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"    <dependency>\n      <groupId>jakarta.validation</groupId>\n      <artifactId>jakarta.validation-api</artifactId>\n      <version>3.0.1</version>\n    </dependency>\n    <dependency>\n      <groupId>org.hibernate.validator</groupId>\n      <artifactId>hibernate-validator</artifactId>\n      <version>7.0.2.Final</version>\n    </dependency>\n    <dependency>\n      <groupId>org.glassfish</groupId>\n      <artifactId>jakarta.el</artifactId>\n      <version>4.0.1</version>\n    </dependency>\n")),(0,r.kt)("p",{parentName:"blockquote"},"\u540c\u65f6\u9700\u8981\u589e\u52a0 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"jakarta.validation-api"))," \uff0c\u56e0\u4e3a\u9ad8\u7248\u672c\u7684JavaEE\u5df2\u7ecf\u4e0d\u5728javax\u4e0b\u9762\u800c\u5728jakarta\u4e0b\u9762\u8fd9\u4e2a\u9700\u8981\u6ce8\u610f\uff0c\u540c\u65f6\u5728classpath\u4e0b\u521b\u5efa\u4e00\u4e2aValidationMessages.properties\u6587\u4ef6"),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-properties"},"com.github.mxsm.MobileNum.message=\u624b\u673a\u53f7\u7801\u4e0d\u6b63\u786e\n"))),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/java/jvm/image-20220130205426240.png",alt:"image-20220130205426240"})),(0,r.kt)("p",null,"\u8fd0\u884c\u67e5\u770b\u7ed3\u679c\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/java/jvm/beanvalidation%E6%B5%8B%E8%AF%95%E8%BF%90%E8%A1%8C.gif",alt:"beanvalidation\u6d4b\u8bd5\u8fd0\u884c"})),(0,r.kt)("p",null,"\u4ece\u8fd0\u884c\u7ed3\u679c\u53ef\u4ee5\u770b\u51fa\u6765\u6210\u529f\u6253\u5370\u4e86\u5728ValidationMessages.properties\u914d\u7f6e\u7684\u624b\u673a\u53f7\u7801\u4e0d\u6b63\u786e\u63d0\u793a"),(0,r.kt)("h3",{id:"4-\u603b\u7ed3"},"4. \u603b\u7ed3"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u81ea\u5b9a\u4e49\u7ea6\u675f\u6ce8\u89e3\u9700\u8981@Constraint\u4fee\u9970\uff0c\u5fc5\u987b\u5305\u542b ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"message\u3001groups\u3001payload"))," \u4e09\u4e2a\u5c5e\u6027"),(0,r.kt)("li",{parentName:"ul"},"\u81ea\u5b9a\u4e49\u6ce8\u89e3\u7684message\u4e00\u822c\u4f7f\u7528\u5360\u4f4d\u7b26\uff0c\u8fd9\u6837\u4fbf\u4e8e\u540e\u671f\u7684\u53ef\u80fd\u7684\u56fd\u9645\u5316"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Hibernate-validator")," \u5b9e\u73b0\u9ed8\u8ba4\u8bfb\u53d6\u7684\u662f ",(0,r.kt)("em",{parentName:"li"},"ValidationMessages.properties")," \uff0c\u5982\u679c\u56fd\u9645\u5316\u7684\u914d\u7f6e\u6587\u4ef6\u683c\u5f0f\u4e3aValidationMessages_xxxx.properties,\u4f8b\u5982\u82f1\u6587\uff1a",(0,r.kt)("em",{parentName:"li"},"ValidationMessages_en_US.properties")," \u83b7\u53d6JVM\u7684locale\uff08Locale#getDefault()\uff09")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u53c2\u8003\u8d44\u6599"),"\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://hibernate.org/validator/releases/7.0/"},"https://hibernate.org/validator/releases/7.0/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://beanvalidation.org/"},"https://beanvalidation.org/"))))}d.isMDXComponent=!0}}]);