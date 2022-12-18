"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[5445],{3905:(e,n,t)=>{t.d(n,{Zo:()=>o,kt:()=>x});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function m(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),l=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):m(m({},n),e)),t},o=function(e){var n=l(e.components);return a.createElement(i.Provider,{value:n},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),c=l(t),u=r,x=c["".concat(i,".").concat(u)]||c[u]||g[u]||s;return t?a.createElement(x,m(m({ref:n},o),{},{components:t})):a.createElement(x,m({ref:n},o))}));function x(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,m=new Array(s);m[0]=u;var p={};for(var i in n)hasOwnProperty.call(n,i)&&(p[i]=n[i]);p.originalType=e,p[c]="string"==typeof e?e:r,m[1]=p;for(var l=2;l<s;l++)m[l]=t[l];return a.createElement.apply(null,m)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},6948:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>m,default:()=>c,frontMatter:()=>s,metadata:()=>p,toc:()=>l});var a=t(7462),r=(t(7294),t(3905));const s={title:"\u5982\u4f55\u81ea\u5b9a\u4e49Spring xml Namespace",linkTitle:"\u5982\u4f55\u81ea\u5b9a\u4e49Spring xml Namespace",date:new Date("2021-01-19T00:00:00.000Z"),weight:202101192306},m=void 0,p={unversionedId:"spring/spring-framework/custom-component-extensions/spring-extend-xml",id:"spring/spring-framework/custom-component-extensions/spring-extend-xml",title:"\u5982\u4f55\u81ea\u5b9a\u4e49Spring xml Namespace",description:"\u5728Spring XML\u914d\u7f6e\u6587\u4ef6\u4e2d\u9664\u4e86Spring \u9ed8\u8ba4\u7684Namespace\uff0c\u4eca\u5929\u6211\u4eec\u6765\u770b\u4e00\u4e0b\u5982\u4f55\u81ea\u5b9a\u4e49Namespace",source:"@site/docs/spring/spring-framework/custom-component-extensions/spring-extend-xml.md",sourceDirName:"spring/spring-framework/custom-component-extensions",slug:"/spring/spring-framework/custom-component-extensions/spring-extend-xml",permalink:"/docs/spring/spring-framework/custom-component-extensions/spring-extend-xml",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/spring/spring-framework/custom-component-extensions/spring-extend-xml.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1671354027,formattedLastUpdatedAt:"Dec 18, 2022",frontMatter:{title:"\u5982\u4f55\u81ea\u5b9a\u4e49Spring xml Namespace",linkTitle:"\u5982\u4f55\u81ea\u5b9a\u4e49Spring xml Namespace",date:"2021-01-19T00:00:00.000Z",weight:202101192306},sidebar:"springframework",previous:{title:"\u5982\u4f55\u81ea\u5b9a\u4e49Spring Enable\u6ce8\u89e3",permalink:"/docs/spring/spring-framework/custom-component-extensions/spring-extend-enable-annotation"},next:{title:"Spring\u4e2d\u7684\u62d3\u5c55\u539f\u7406\u5b9e\u6218",permalink:"/docs/spring/spring-framework/custom-component-extensions/spring-extend"}},i={},l=[{value:"1. Spring\u81ea\u5b9a\u4e49XML\u7684Namespace\u539f\u7406",id:"1-spring\u81ea\u5b9a\u4e49xml\u7684namespace\u539f\u7406",level:3},{value:"2. Spring\u81ea\u5b9a\u4e49XML\u7684Namespace\u5b9e\u6218",id:"2-spring\u81ea\u5b9a\u4e49xml\u7684namespace\u5b9e\u6218",level:3},{value:"2.1 XSD\u5b9a\u4e49",id:"21-xsd\u5b9a\u4e49",level:4},{value:"2.2 \u7f16\u5199NamespaceHandler\u63a5\u53e3\u5b9e\u73b0",id:"22-\u7f16\u5199namespacehandler\u63a5\u53e3\u5b9e\u73b0",level:4},{value:"2.3 \u914d\u7f6eMETA-INF/spring.schemas\u548cMETA-INF/spring.handlers\u6587\u4ef6\u914d\u7f6e",id:"23-\u914d\u7f6emeta-infspringschemas\u548cmeta-infspringhandlers\u6587\u4ef6\u914d\u7f6e",level:4},{value:"2.4 Spring application.xml\u6587\u4ef6\u4e2d\u5f15\u5165\u81ea\u5b9a\u4e49\u7684Element",id:"24-spring-applicationxml\u6587\u4ef6\u4e2d\u5f15\u5165\u81ea\u5b9a\u4e49\u7684element",level:4},{value:"3. \u603b\u7ed3",id:"3-\u603b\u7ed3",level:3}],o={toc:l};function c(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},o,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u5728Spring XML\u914d\u7f6e\u6587\u4ef6\u4e2d\u9664\u4e86Spring \u9ed8\u8ba4\u7684Namespace\uff0c\u4eca\u5929\u6211\u4eec\u6765\u770b\u4e00\u4e0b\u5982\u4f55\u81ea\u5b9a\u4e49Namespace"),(0,r.kt)("h3",{id:"1-spring\u81ea\u5b9a\u4e49xml\u7684namespace\u539f\u7406"},"1. Spring\u81ea\u5b9a\u4e49XML\u7684Namespace\u539f\u7406"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/spring/custom/%E8%87%AA%E5%AE%9A%E4%B9%89xml%20schema.png",alt:"\u81ea\u5b9a\u4e49xml schema"})),(0,r.kt)("p",null,"\u6574\u4e2aSpring\u5bb9\u5668\u542f\u52a8\u7684\u65f6\u5019\u6d41\u7a0b\u8fd8\u662f\u4e00\u6837\uff0c\u4f46\u662f\u5728\u52a0\u8f7dBean\u7684\u5b9a\u4e49\u7684\u65f6\u5019\uff0cXML\u914d\u7f6e\u6587\u4ef6\u8c03\u7528\u7684\u662f ",(0,r.kt)("strong",{parentName:"p"},"AbstractXmlApplicationContext#loadBeanDefinitions")," \u65b9\u6cd5\u6765\u52a0\u8f7dXML\u4e2d\u7684Bean\u7684\u5b9a\u4e49\u3002\u7136\u540e\u901a\u8fc7 ",(0,r.kt)("strong",{parentName:"p"},"XmlBeanDefinitionReader")," \u4ece\u8bbe\u7f6e\u7684\u9ed8\u8ba4\u4f4d\u7f6e\u6216\u8005\u6307\u5b9a\u4f4d\u7f6e\u7684xml\u89e3\u6790\u6210\u4e3aDocument\u5230\u5185\u5b58\u3002",(0,r.kt)("strong",{parentName:"p"},"BeanDefinitionDocumentReader")," \u8d1f\u8d23\u89e3\u6790 XML Document\u4e2d\u6bcf\u4e2a Element\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6574\u4e2a\u8fc7\u7a0b\u4f1a\u8bfb\u53d6META-INF/spring.schemas\u6587\u4ef6\u4e2d\u914d\u7f6e\u7684Namespace\u548cXSD\u6587\u4ef6\u7684\u5bf9\u5e94\u5173\u7cfb\u8fdb\u884c\u6821\u9a8c")),(0,r.kt)("p",null,"\u5728\u89e3\u6790\u7684\u8fc7\u7a0b\u4e2d\u4f1a\u53bb\u5224\u65ad\u662fSpring\u9ed8\u8ba4\u7684Namespace\u8fd8\u662f\u7528\u6237\u81ea\u5b9a\u4e49Namespace"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Spring \u9ed8\u8ba4Element\u5904\u7406"),(0,r.kt)("p",{parentName:"li"},"\u9ed8\u8ba4\u7684Element: import,alias,bean,beans,\u8fd9\u4e9b\u90fd\u662f\u7531 ",(0,r.kt)("strong",{parentName:"p"},"DefaultBeanDefinitionDocumentReader")," \u63d0\u4f9b\u9ed8\u8ba4\u89e3\u6790")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u81ea\u5b9a\u4e49\u7684Element\u5904\u7406"),(0,r.kt)("p",{parentName:"li"},"\u901a\u8fc7\u83b7\u53d6\u914d\u7f6e\u5728 ",(0,r.kt)("strong",{parentName:"p"},"META-INF/spring.handlers")," \u6587\u4ef6\u4e2d\u5bf9\u5e94Namespace\u7684\u5904\u7406\u7c7b\u3002\u8fd9\u4e2aNamespace\u7684\u5904\u7406\u7c7b\u5b9e\u73b0 ",(0,r.kt)("strong",{parentName:"p"},"NamespaceHandler\u6216\u8005NamespaceHandlerSupport")," \u3002"))),(0,r.kt)("p",null,"\u7136\u540e\u8c03\u7528NamespaceHandler\u5177\u4f53\u5b9e\u4f8b\u7684NamespaceHandler#parse\u65b9\u6cd5\u5bf9Element\u8fdb\u884c\u89e3\u6790\u3002"),(0,r.kt)("h3",{id:"2-spring\u81ea\u5b9a\u4e49xml\u7684namespace\u5b9e\u6218"},"2. Spring\u81ea\u5b9a\u4e49XML\u7684Namespace\u5b9e\u6218"),(0,r.kt)("p",null,"\u5b9a\u4e49\u4e00\u4e2a\u548cSpring\u9ed8\u8ba4\u7684bean\u62e5\u6709\u76f8\u540c\u529f\u80fd\u7684Element,\u8fd9\u4e2aElement\u53ef\u4ee5\u53eb\uff1a",(0,r.kt)("strong",{parentName:"p"},"mxsmBean"),", \u5177\u4f53\u7684\u6b65\u9aa4\u5982\u4e0b\u56fe\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/spring/custom/Spring%20%E8%87%AA%E5%AE%9A%E4%B9%89XML%20Namespace%E6%AD%A5%E9%AA%A4.png",alt:"Spring \u81ea\u5b9a\u4e49XML Namespace\u6b65\u9aa4"})),(0,r.kt)("h4",{id:"21-xsd\u5b9a\u4e49"},"2.1 XSD\u5b9a\u4e49"),(0,r.kt)("p",null,"\u901a\u8fc7XSD\u6587\u4ef6\u5b9a\u4e49mxsmBean\u9700\u8981\u6709\u54ea\u4e9b\u5c5e\u6027\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-16" ?>\n<xsd:schema xmlns="https://github.com/mxsm/schema/mxsm"  (1)\n            xmlns:xsd="http://www.w3.org/2001/XMLSchema"  \n            targetNamespace="https://github.com/mxsm/schema/mxsm">  (2)\n\n    <xsd:import namespace="http://www.springframework.org/schema/beans" />\n\n    <xsd:element name="mxsmBean">\n        <xsd:complexType>\n            <xsd:attribute name="name" type="xsd:string" use="required"/>\n            <xsd:attribute name="class" type="xsd:string" use="required"/>\n        </xsd:complexType>\n    </xsd:element>\n</xsd:schema>\n')),(0,r.kt)("p",null,"(1)\u548c(2)\u662f\u52a0\u81ea\u5df1\u7684Namescape,XSD\u5b58\u653e\u7684\u4f4d\u7f6e\u5982\u4e0b\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/spring/custom/image-20220119221646852.png",alt:"image-20220119221646852"})),(0,r.kt)("h4",{id:"22-\u7f16\u5199namespacehandler\u63a5\u53e3\u5b9e\u73b0"},"2.2 \u7f16\u5199NamespaceHandler\u63a5\u53e3\u5b9e\u73b0"),(0,r.kt)("p",null,"\u8fd9\u4e2a\u63a5\u53e3\u4e3b\u8981\u662f\u7528\u6765\u5904\u7406\u6211\u4eec\u5bf9\u5e94\u7684Element\u3002\u4f8b\u5982\u5728 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mxsm/schema/mxsm"},"https://github.com/mxsm/schema/mxsm")," \u4e0b\u9762\u6211\u53ea\u662f\u5b9a\u4e49application\u8fd9\u4e2aElement\u6240\u4ee5\u5c31\u53ea\u9700\u8981\u89e3\u6790\u8fd9\u4e00\u4e2a\u5c31\u53ef\u4ee5\u4e86\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"NamespaceHandlerSupport\u662f\u5b9e\u73b0\u4e86\u90e8\u5206NamespaceHandler\u63a5\u53e3\u7684\u62bd\u8c61\u65b9\u6cd5\uff0c\u4e00\u822c\u60c5\u51b5\u4e0b\u6211\u4eec\u5b9e\u73b0NamespaceHandlerSupport\u7c7b")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public class MxsmSchemaHandler extends NamespaceHandlerSupport {\n    @Override\n    public void init() {\n        registerBeanDefinitionParser("mxsmBean", new MxsmBeanDefinitionParser());\n        //\u5982\u679c\u6709\u591a\u4e2aElement\u5c31\u8c03\u7528\u591a\u4e2a\n    }\n}\n\npublic class MxsmBeanDefinitionParser implements BeanDefinitionParser {\n\n    @Override\n    public BeanDefinition parse(Element element, ParserContext parserContext) {\n        String aClass = element.getAttribute("class");\n        System.out.println(aClass);\n        BeanDefinitionBuilder beanDefinitionBuilder = BeanDefinitionBuilder.genericBeanDefinition(aClass);\n        AbstractBeanDefinition beanDefinition = beanDefinitionBuilder.getBeanDefinition();\n        parserContext.getRegistry().registerBeanDefinition(element.getAttribute("name"), beanDefinition);\n        return beanDefinition;\n    }\n}\n')),(0,r.kt)("p",null,"\u6bcf\u4e00\u4e2a\u5bf9\u5e94\u7684\u6807\u7b7e\u5bf9\u5e94\u4e00\u4e2a\u89e3\u6790\u7c7b\uff0c\u89e3\u6790\u7c7b\u5b9e\u73b0 ",(0,r.kt)("strong",{parentName:"p"},"BeanDefinitionParser")," \u63a5\u53e3\u3002"),(0,r.kt)("h4",{id:"23-\u914d\u7f6emeta-infspringschemas\u548cmeta-infspringhandlers\u6587\u4ef6\u914d\u7f6e"},"2.3 \u914d\u7f6eMETA-INF/spring.schemas\u548cMETA-INF/spring.handlers\u6587\u4ef6\u914d\u7f6e"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"spring.schemas\u4f5c\u7528"),"\uff1a\u914d\u7f6e\u81ea\u5b9a\u4e49Namespace\u7684xsd\u6587\u4ef6\u7684\u5b58\u653e\u4f4d\u7f6e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},"https\\://github.com/mxsm/schema/mxsm/mxsm.xsd=com/github/mxsm/xml/xsd/mxsm.xsd\n")),(0,r.kt)("p",null," spring.handlers\u4f5c\u7528\uff1a\u914d\u7f6e\u81ea\u5b9a\u4e49Namespace\u5bf9\u5e94\u7684NamespaceHandler"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},"https\\://github.com/mxsm/schema/mxsm=com.github.mxsm.handler.MxsmSchemaHandler\n")),(0,r.kt)("p",null,"\u5728\u9879\u76ee\u4e2d\u5b58\u653e\u7684\u4f4d\u7f6e\u5982\u56fe\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/spring/custom/image-20220119221852581.png",alt:"image-20220119221852581"})),(0,r.kt)("h4",{id:"24-spring-applicationxml\u6587\u4ef6\u4e2d\u5f15\u5165\u81ea\u5b9a\u4e49\u7684element"},"2.4 Spring application.xml\u6587\u4ef6\u4e2d\u5f15\u5165\u81ea\u5b9a\u4e49\u7684Element"),(0,r.kt)("p",null,"\u521b\u5efaSpring\u5e94\u7528\u7684xml\u6587\u4ef6\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8"?>\n<beans xmlns="http://www.springframework.org/schema/beans"\n       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n       xmlns:mxsm="https://github.com/mxsm/schema/mxsm"  (1)\n       xmlns:context="http://www.springframework.org/schema/context"\n       xsi:schemaLocation="http://www.springframework.org/schema/beans\n        https://www.springframework.org/schema/beans/spring-beans.xsd\n        https://github.com/mxsm/schema/mxsm  (2)\n        https://github.com/mxsm/schema/mxsm/mxsm.xsd  (3)\n        http://www.springframework.org/schema/context\n        https://www.springframework.org/schema/context/spring-context.xsd">\n\n        <mxsm:mxsmBean class="com.github.mxsm.bean.MxsmBeanTest" name="test"/>\n\n</beans>\n')),(0,r.kt)("p",null,"(1)\u3001(2)\uff0c(3) \u8fd9\u4e09\u5904\u5728\u4f7f\u7528\u7684\u65f6\u5019\u9700\u8981\u52a0\u4e0a\u3002\u5230\u8fd9\u91cc\u4e3a\u6b62\uff0c\u81ea\u5b9a\u4e49\u7684\u6b65\u9aa4\u90fd\u5df2\u7ecf\u5b8c\u6210\u4e86\u3002\u63a5\u4e0b\u6765\u5c31\u662f\u8fdb\u884c\u9a8c\u8bc1\u6211\u4eec\u80fd\u4e0d\u80fd\u628a\u8fd9\u4e2a\u7c7b\u6ce8\u5165\u5230Spring \u5bb9\u5668\u4e2d\u3002\u8fd9\u91cc\u6211\u4eec\u5199\u4e00\u6bb5\u6d4b\u8bd5\u4ee3\u7801\u6765\u68c0\u9a8c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public class App {\n    public static void main( String[] args ) {\n        ApplicationContext context = new ClassPathXmlApplicationContext("application.xml");\n        //System.out.println(context.getBean("aaaa",String.class));\n        MxsmBeanTest test = context.getBean("test", MxsmBeanTest.class);\n        System.out.println(test);\n        MxsmBeanTest bean = context.getBean(MxsmBeanTest.class);\n        System.out.println(bean);\n        System.out.println(test==bean);\n    }\n}\n')),(0,r.kt)("p",null,"\u7136\u540e\u8fd0\u884c\u770b\u4e00\u4e0b\u7ed3\u679c\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/spring/custom/image-20220119223247306.png",alt:"image-20220119223247306"})),(0,r.kt)("p",null,"\u4ece\u8fd0\u884c\u7ed3\u679c\u6765\u770b\u80fd\u591f\u83b7\u53d6\u5230 ",(0,r.kt)("strong",{parentName:"p"},"MxsmBeanTest")," \u5bf9\u5e94\u7684\u5b9e\u4f8b\uff0c\u5e76\u4e14\u83b7\u53d6\u7684\u8fd8\u662f\u5355\u4f8b\u3002\u90a3\u4e48\u8bf4\u660e\u5728\u6211\u4eec\u521b\u5efa\u9ed8\u8ba4\u7684\u65f6\u5019\u6ce8\u518c\u5230Spring\u5bb9\u5668\u4e2d\u7684\u5b9a\u4e49\u83b7\u53d6\u7684\u7c7b\u5b9e\u4f8b\u9ed8\u8ba4\u662f\u5df2\u5355\u4f8b\u7684\u5f62\u5f0f\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5b8c\u6574\u4ee3\u7801\u5730\u5740\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mxsm/spring-sample/tree/master/namespace-handler"},"https://github.com/mxsm/spring-sample/tree/master/namespace-handler"))),(0,r.kt)("h3",{id:"3-\u603b\u7ed3"},"3. \u603b\u7ed3"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5728\u81ea\u5b9a\u4e49\u62d3\u5c55\u524d\uff0c\u9996\u5148\u4f60\u8981\u77e5\u9053\u4f60\u62d3\u5c55\u7684Element\u662f\u5e72\u4ec0\u4e48\u7528\u7684\uff0c\u7136\u540e\u5728\u6839\u636e\u7528\u9014\u6765\u8fdb\u884c\u89e3\u6790\u3002\u6bd4\u5982\u6211\u4e0a\u9762\u8fd9\u4e2amxsmBean\u5c31\u662f\u4e3a\u4e86\u5b9e\u73b0\u4e00\u4e2a\u7b80\u5316\u7248\u672c\u7684\u548cSpring\u9ed8\u8ba4\u7684Bean\u7c7b\u4f3c\u7684\u529f\u80fd\u3002"),(0,r.kt)("li",{parentName:"ul"},"Namespace\u7684XSD\u6587\u4ef6\u7684\u7f16\u5199\uff0c\u9700\u8981\u4e86\u89e3XSD\u7684\u7f16\u5199(\u6559\u7a0b\u53c2\u8003\uff1a",(0,r.kt)("a",{parentName:"li",href:"https://www.w3school.com.cn/schema/schema_example.asp"},"https://www.w3school.com.cn/schema/schema_example.asp"),")"),(0,r.kt)("li",{parentName:"ul"},"\u5728\u63a5\u53e3\u5c42\u9762\u9700\u8981\u5b9e\u73b0NamespaceHandler\u4ee5\u53caBeanDefinitionParser\u63a5\u53e3\uff0c\u4e24\u8005\u642d\u914d\u4ee5\u524d\u4f7f\u7528\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5728\u6587\u4ef6META-INF/spring.schemas\u548cMETA-INF/spring.handlers\u4e2d\u6dfb\u52a0\u5bf9\u5e94\u914d\u7f6e\uff0cSpring\u4f1a\u9ed8\u8ba4\u52a0\u8f7d\u8fd9\u4e24\u4e2a\u6587\u4ef6\u4e2d\u7684\u914d\u7f6e\u8fdb\u884c\u89e3\u6790\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5728Spring\u7684xml\u914d\u7f6e\u6587\u4ef6\u4e2d\u5bfc\u5165\u5bf9\u5e94\u81ea\u5b9a\u4e49\u7684Namespace\u3002")),(0,r.kt)("p",null,"\u4e0a\u9762\u5c31\u662f\u6574\u4e2a\u81ea\u5b9a\u4e49\u547d\u540d\u7a7a\u95f4\u7684\u8fc7\u7a0b\uff0c\u6b65\u9aa4\u4ee5\u53caSpring\u600e\u4e48\u6837\u53bb\u89e3\u6790\u3002\u5982\u679c\u60f3\u4e86\u89e3\u66f4\u591a\u7684\u7ec6\u8282\u53ef\u4ee5\u53bbSpring\u7684\u7f51\u7ad9(",(0,r.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring-framework/docs/current/reference/html/core.html#xsd-schemas)%E4%BA%86%E8%A7%A3%E3%80%82%E5%90%8C%E6%97%B6Spring%E8%87%AA%E5%B7%B1%E4%B9%9F%E5%AE%9E%E7%8E%B0%E4%BA%86%E4%B8%80%E4%BA%9B%E4%BE%8B%E5%A6%82"},"https://docs.spring.io/spring-framework/docs/current/reference/html/core.html#xsd-schemas)\u4e86\u89e3\u3002\u540c\u65f6Spring\u81ea\u5df1\u4e5f\u5b9e\u73b0\u4e86\u4e00\u4e9b\u4f8b\u5982")," util\uff08spring-util.xsd\uff09\u3002\u53ef\u4ee5\u901a\u8fc7\u8fd9\u4e9b\u6765\u5b66\u4e60\u3002\u8fd9\u6837\u80fd\u591f\u66f4\u597d\u7684\u660e\u767d\u548c\u7406\u89e3\u81ea\u5b9a\u4e49\u7684\u8fd9\u4e2a\u8fc7\u7a0b\u3002"))}c.isMDXComponent=!0}}]);