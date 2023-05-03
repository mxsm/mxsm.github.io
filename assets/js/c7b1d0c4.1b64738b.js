"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[7138],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>u});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,u=d["".concat(s,".").concat(m)]||d[m]||g[m]||a;return r?n.createElement(u,i(i({ref:t},l),{},{components:r})):n.createElement(u,i({ref:t},l))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[d]="string"==typeof e?e:o,i[1]=p;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5214:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={title:"SpringBoot\u4e2d\u5185\u5d4cTomcat\u7684\u5b9e\u73b0\u539f\u7406\u89e3\u6790",linkTitle:"SpringBoot\u4e2d\u5185\u5d4cTomcat\u7684\u5b9e\u73b0\u539f\u7406\u89e3\u6790",date:new Date("2021-01-18T00:00:00.000Z"),weight:2},i=void 0,p={unversionedId:"spring/spring-boot/core-source-analysis/embedded-tomcat-theory",id:"spring/spring-boot/core-source-analysis/embedded-tomcat-theory",title:"SpringBoot\u4e2d\u5185\u5d4cTomcat\u7684\u5b9e\u73b0\u539f\u7406\u89e3\u6790",description:"\u4ec0\u4e48\u662f\u81ea\u52a8\u88c5\u914d",source:"@site/docs/spring/spring-boot/core-source-analysis/embedded-tomcat-theory.md",sourceDirName:"spring/spring-boot/core-source-analysis",slug:"/spring/spring-boot/core-source-analysis/embedded-tomcat-theory",permalink:"/docs/spring/spring-boot/core-source-analysis/embedded-tomcat-theory",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/spring/spring-boot/core-source-analysis/embedded-tomcat-theory.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1683078484,formattedLastUpdatedAt:"May 3, 2023",frontMatter:{title:"SpringBoot\u4e2d\u5185\u5d4cTomcat\u7684\u5b9e\u73b0\u539f\u7406\u89e3\u6790",linkTitle:"SpringBoot\u4e2d\u5185\u5d4cTomcat\u7684\u5b9e\u73b0\u539f\u7406\u89e3\u6790",date:"2021-01-18T00:00:00.000Z",weight:2},sidebar:"springboot",previous:{title:"Spring Rest API\u6570\u636e\u4ea4\u4e92\u9664\u4e86JSON\u8fd8\u6709Protobuf",permalink:"/docs/spring/spring-boot/samples/spring-rest-api-with-protobuf"},next:{title:"SpringBoot\u6e90\u7801\u89e3\u6790\u4e4bConditionalOnXXX",permalink:"/docs/spring/spring-boot/core-source-analysis/springboot-ConditionalOnXXX"}},s={},c=[{value:"\u4ec0\u4e48\u662f\u81ea\u52a8\u88c5\u914d",id:"\u4ec0\u4e48\u662f\u81ea\u52a8\u88c5\u914d",level:3},{value:"\u4e3a\u4ec0\u4e48\u8981\u81ea\u52a8\u88c5\u914d",id:"\u4e3a\u4ec0\u4e48\u8981\u81ea\u52a8\u88c5\u914d",level:3},{value:"SpringBoot Tomcat\u81ea\u52a8\u88c5\u914d\u8be6\u89e3",id:"springboot-tomcat\u81ea\u52a8\u88c5\u914d\u8be6\u89e3",level:3},{value:"SpringBoot\u9879\u76ee\u914d\u7f6e",id:"springboot\u9879\u76ee\u914d\u7f6e",level:4},{value:"SpringBoot\u9879\u76ee\u542f\u52a8",id:"springboot\u9879\u76ee\u542f\u52a8",level:4},{value:"SpringBoot Tomcat\u5982\u4f55\u88c5\u914d",id:"springboot-tomcat\u5982\u4f55\u88c5\u914d",level:4},{value:"SpringBoot Tomcat\u5982\u4f55\u542f\u52a8",id:"springboot-tomcat\u5982\u4f55\u542f\u52a8",level:4},{value:"Tomcat\u5bb9\u5668\u521b\u5efa",id:"tomcat\u5bb9\u5668\u521b\u5efa",level:5},{value:"Tomcat\u4ec0\u4e48\u65f6\u5019\u542f\u52a8",id:"tomcat\u4ec0\u4e48\u65f6\u5019\u542f\u52a8",level:5}],l={toc:c},d="wrapper";function g(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"\u4ec0\u4e48\u662f\u81ea\u52a8\u88c5\u914d"},"\u4ec0\u4e48\u662f\u81ea\u52a8\u88c5\u914d"),(0,o.kt)("p",null,"\u5728SpringBoot\u6e90\u7801\u4e2d\u6709\u4e00\u4e2aspring-boot-autoconfigure\u6a21\u5757,\u5728\u8fd9\u4e2a\u6a21\u5757\u4e2d\u505a\u4e86\u5f88\u591a\u9ed8\u8ba4\u7684\u914d\u7f6e\u3002\u4e5f\u5c31\u662f\u6211\u4eec\u4fd7\u79f0\u7684\u201c\u81ea\u52a8\u88c5\u914d\u201d\u3002",(0,o.kt)("br",{parentName:"p"}),"\n","\u5728SpringBoot\u7684\u81ea\u52a8\u88c5\u914d\u4f1a\u6839\u636e\u6dfb\u52a0\u7684\u4f9d\u8d56\uff0c\u81ea\u52a8\u52a0\u8f7d\u4f9d\u8d56\u76f8\u5173\u7684\u914d\u7f6e\u5c5e\u6027\u5e76\u542f\u52a8\u4f9d\u8d56\uff0c\u81ea\u52a8\u88c5\u914d\u7684\u5e95\u5c42\u539f\u7406\uff1a ",(0,o.kt)("strong",{parentName:"p"},"spring\u7684\u6761\u4ef6\u6ce8\u89e3@Conditional\u6765\u5b9e\u73b0")," \u3002"),(0,o.kt)("h3",{id:"\u4e3a\u4ec0\u4e48\u8981\u81ea\u52a8\u88c5\u914d"},"\u4e3a\u4ec0\u4e48\u8981\u81ea\u52a8\u88c5\u914d"),(0,o.kt)("p",null,"\u5229\u7528\u81ea\u52a8\u88c5\u914d\u6a21\u5f0f\u4ee3\u66ffXML\u914d\u7f6e\u6a21\u5f0f\uff0c\u6bd4\u5982\u4f7f\u7528SpringMVC\u65f6\uff0c\u9700\u8981\u914d\u7f6e\u7ec4\u4ef6\u626b\u63cf\u3001\u8c03\u5ea6\u5668\u3001\u8bd5\u56fe\u89e3\u6790\u5668\u7b49\uff0c\u73b0\u5728\u6709\u4e86\u81ea\u52a8\u88c5\u914d\uff0c\u8fd9\u4e9b\u90fd\u53ef\u4ee5\u4e0d\u7528\u914d\u7f6e\u4e86\uff0cSpringBoot\u9ed8\u8ba4\u5df2\u7ecf\u5e2e\u6211\u4eec\u914d\u7f6e\u597d\u4e86\u3002\u5229\u7528\u5185\u5d4c\u7684Tomcat\u901a\u8fc7\u81ea\u52a8\u88c5\u914d\u5c31\u4e0d\u9700\u8981\u914d\u7f6e\u5916\u7f6e\u7684Tomcat\uff0c\u51cf\u5c11\u914d\u7f6e\u7684\u9ebb\u70e6\u3002",(0,o.kt)("strong",{parentName:"p"},"\u8bf4\u767d\u4e86\u81ea\u52a8\u88c5\u914d\u5c31\u662f\u51cf\u5c11\u4e86\u914d\u7f6e\u3002")),(0,o.kt)("h3",{id:"springboot-tomcat\u81ea\u52a8\u88c5\u914d\u8be6\u89e3"},"SpringBoot Tomcat\u81ea\u52a8\u88c5\u914d\u8be6\u89e3"),(0,o.kt)("p",null,"\u6211\u4eec\u4f1a\u4ece\u4e0b\u9762\u56db\u4e2a\u65b9\u9762\u53bb\u5206\u6790Tomcat\u7684\u81ea\u52a8\u88c5\u914d\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"SpringBoot\u9879\u76ee\u914d\u7f6e")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"SpringBoot\u9879\u76ee\u542f\u52a8")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"SpringBoot Tomcat\u5982\u4f55\u88c5\u914d")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"SpringBoot Tomcat\u5982\u4f55\u542f\u52a8"))),(0,o.kt)("h4",{id:"springboot\u9879\u76ee\u914d\u7f6e"},"SpringBoot\u9879\u76ee\u914d\u7f6e"),(0,o.kt)("p",null,"\u5728",(0,o.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring-boot/docs/2.2.3.RELEASE/reference/html/getting-started.html#getting-started"},"SpringBoot\u5b98\u7f51"),"\u7684pom.xml\u6587\u4ef6\u914d\u7f6e\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'\n\n<?xml version="1.0" encoding="UTF-8"?>\n<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n    xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">\n    <modelVersion>4.0.0</modelVersion>\n\n    <groupId>com.example</groupId>\n    <artifactId>myproject</artifactId>\n    <version>0.0.1-SNAPSHOT</version>\n\n    \x3c!-- Inherit defaults from Spring Boot --\x3e\n    <parent>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-starter-parent</artifactId>\n        <version>2.2.3.RELEASE</version>\n    </parent>\n\n    \x3c!-- Override inherited settings --\x3e\n    <description/>\n    <developers>\n        <developer/>\n    </developers>\n    <licenses>\n        <license/>\n    </licenses>\n    <scm>\n        <url/>\n    </scm>\n    <url/>\n\n    \x3c!-- Add typical dependencies for a web application --\x3e\n    <dependencies>\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter-web</artifactId>\n        </dependency>\n    </dependencies>\n\n    \x3c!-- Package as an executable jar --\x3e\n    <build>\n        <plugins>\n            <plugin>\n                <groupId>org.springframework.boot</groupId>\n                <artifactId>spring-boot-maven-plugin</artifactId>\n            </plugin>\n        </plugins>\n    </build>\n\n</project>\n')),(0,o.kt)("p",null,"\u5176\u5b9e\u4e0a\u9762\u7684\u4e3b\u8981\u6709\u7528\u7684\u5c31\u4e24\u4e2a\u914d\u7f6e\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"   <parent>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-starter-parent</artifactId>\n        <version>2.2.3.RELEASE</version>\n    </parent>\n")),(0,o.kt)("p",null,"\u8fd9\u4e2a\u914d\u7f6e\u5c31\u662f\u8bbe\u7f6eSpringBoot\u7684\u7248\u672c\uff0c\u8fd8\u6709\u5c31\u662f\u53e6\u5916\u4e00\u4e2a\u914d\u7f6e\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"    <dependencies>\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter-web</artifactId>\n        </dependency>\n    </dependencies>\n")),(0,o.kt)("p",null,"\u8fd9\u4e2a\u5c31\u662f\u6700\u91cd\u8981\u7684\u3002\u8fd9\u4e2a\u4f9d\u8d56\u5b9e\u73b0\u4e86\u81ea\u52a8\u88c5\u914d\uff0c\u6211\u4eec\u63a5\u7740\u5f80\u4e0b\u770b\u8fd9\u4e2a\u4f9d\u8d56\u7684\u6e90\u7801\u3002"),(0,o.kt)("p",null,"\u5728SpringBoot\u9879\u76ee\u7684\u6709\u4e00\u4e2a ",(0,o.kt)("strong",{parentName:"p"},"spring-boot-starters")," \u6a21\u5757\uff0c\u901a\u8fc7\u6e90\u7801\u53ef\u4ee5\u770b\u5230\u8fd9\u4e2a\u6a21\u5757\u91cc\u9762\u90fd\u662fpom.xml\u7684pom\u6587\u4ef6\uff0c\u90a3\u4e48\u6211\u4eec\u6765\u770b\u4e00\u4e0b ",(0,o.kt)("strong",{parentName:"p"},"spring-boot-starter-web")," \u6a21\u5757\u7684pom\u6587\u4ef6\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8"?>\n<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n    xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">\n    <modelVersion>4.0.0</modelVersion>\n    <parent>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-starters</artifactId>\n        <version>${revision}</version>\n    </parent>\n    <artifactId>spring-boot-starter-web</artifactId>\n    <name>Spring Boot Web Starter</name>\n    <description>Starter for building web, including RESTful, applications using Spring\n        MVC. Uses Tomcat as the default embedded container</description>\n    <properties>\n        <main.basedir>${basedir}/../../..</main.basedir>\n    </properties>\n    <dependencies>\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter</artifactId>\n        </dependency>\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter-json</artifactId>\n        </dependency>\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter-tomcat</artifactId>\n        </dependency>\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter-validation</artifactId>\n            <exclusions>\n                <exclusion>\n                    <groupId>org.apache.tomcat.embed</groupId>\n                    <artifactId>tomcat-embed-el</artifactId>\n                </exclusion>\n            </exclusions>\n        </dependency>\n        <dependency>\n            <groupId>org.springframework</groupId>\n            <artifactId>spring-web</artifactId>\n        </dependency>\n        <dependency>\n            <groupId>org.springframework</groupId>\n            <artifactId>spring-webmvc</artifactId>\n        </dependency>\n    </dependencies>\n</project>\n\n')),(0,o.kt)("p",null,"\u901a\u8fc7\u4e0a\u9762\u53ef\u4ee5\u770b\u51fa\u6765\u5bfc\u5165\u4e86 ",(0,o.kt)("strong",{parentName:"p"},"spring-web")," \u3001 ",(0,o.kt)("strong",{parentName:"p"},"spring-webmvc")," \u3002\u540c\u65f6\u8fd8\u5bfc\u5165\u4e86 ",(0,o.kt)("strong",{parentName:"p"},"spring-boot-starter-tomcat")," \u3001 ",(0,o.kt)("strong",{parentName:"p"},"spring-boot-starter")," \u4f9d\u8d56\u3002 "),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u4ece\u8fd9\u91cc\u53ef\u4ee5\u770b\u51fa\u6765SpringBoot\u9ed8\u8ba4\u7684\u542f\u52a8\u5bb9\u5668\u662ftomcat")),(0,o.kt)("p",null,"\u770b\u4e00\u4e0b ",(0,o.kt)("strong",{parentName:"p"},"spring-boot-starte"),"r \u7684pom\u6587\u4ef6"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'<?xml version="1.0" encoding="UTF-8"?>\n<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n    xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">\n    <modelVersion>4.0.0</modelVersion>\n    <parent>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-starters</artifactId>\n        <version>${revision}</version>\n    </parent>\n    <artifactId>spring-boot-starter</artifactId>\n    <name>Spring Boot Starter</name>\n    <description>Core starter, including auto-configuration support, logging and YAML</description>\n    <properties>\n        <main.basedir>${basedir}/../../..</main.basedir>\n    </properties>\n    <dependencies>\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot</artifactId>\n        </dependency>\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-autoconfigure</artifactId>\n        </dependency>\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter-logging</artifactId>\n        </dependency>\n        <dependency>\n            <groupId>jakarta.annotation</groupId>\n            <artifactId>jakarta.annotation-api</artifactId>\n        </dependency>\n        <dependency>\n            <groupId>org.springframework</groupId>\n            <artifactId>spring-core</artifactId>\n        </dependency>\n        <dependency>\n            <groupId>org.yaml</groupId>\n            <artifactId>snakeyaml</artifactId>\n            <scope>runtime</scope>\n        </dependency>\n    </dependencies>\n</project>\n')),(0,o.kt)("p",null,"\u901a\u8fc7\u4e0a\u9762\u53ef\u4ee5\u770b\u51fa\u6765\u5bfc\u5165\u4e00\u4e2a\u91cd\u8981\u7684\u6a21\u5757 ",(0,o.kt)("strong",{parentName:"p"},"spring-boot-autoconfigure")," \u8fd9\u4e2a\u6a21\u5757\u91cc\u9762\u5305\u542b\u4e86\u6240\u6709\u7684\u4ee3\u7801\u3002"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u901a\u8fc7 ",(0,o.kt)("strong",{parentName:"p"},"spring-boot-autoconfigure")," \u6a21\u5757\u53ef\u4ee5\u770b\u51fa\u6765\uff0c\u6240\u6709\u7684SpringBoot starter\u7684\u4ee3\u7801\u90fd\u5728\u8fd9\u4e2a\u6a21\u5757\uff0c\u5bf9\u4e8e\u4e0d\u662fweb\u9879\u76ee\u7684SpringBoot\u9879\u76ee\uff0c\u53ea\u9700\u8981\u5f15\u5165\uff1a"),(0,o.kt)("pre",{parentName:"blockquote"},(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n<groupId>org.springframework.boot</groupId>\n<artifactId>spring-boot-starter</artifactId>\n</dependency>\n"))),(0,o.kt)("p",null,"\u770b\u4e00\u4e0b ",(0,o.kt)("strong",{parentName:"p"},"spring-boot-starter-tomcat"),"  \u7684pom\u6587\u4ef6\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8"?>\n<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n    xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">\n    <modelVersion>4.0.0</modelVersion>\n    <parent>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-starters</artifactId>\n        <version>${revision}</version>\n    </parent>\n    <artifactId>spring-boot-starter-tomcat</artifactId>\n    <name>Spring Boot Tomcat Starter</name>\n    <description>Starter for using Tomcat as the embedded servlet container. Default\n        servlet container starter used by spring-boot-starter-web</description>\n    <properties>\n        <main.basedir>${basedir}/../../..</main.basedir>\n    </properties>\n    <dependencies>\n        <dependency>\n            <groupId>jakarta.annotation</groupId>\n            <artifactId>jakarta.annotation-api</artifactId>\n        </dependency>\n        <dependency>\n            <groupId>org.apache.tomcat.embed</groupId>\n            <artifactId>tomcat-embed-core</artifactId>\n            <exclusions>\n                <exclusion>\n                    <groupId>org.apache.tomcat</groupId>\n                    <artifactId>tomcat-annotations-api</artifactId>\n                </exclusion>\n            </exclusions>\n        </dependency>\n        <dependency>\n            <groupId>org.apache.tomcat.embed</groupId>\n            <artifactId>tomcat-embed-el</artifactId>\n        </dependency>\n        <dependency>\n            <groupId>org.apache.tomcat.embed</groupId>\n            <artifactId>tomcat-embed-websocket</artifactId>\n        </dependency>\n    </dependencies>\n</project>\n')),(0,o.kt)("p",null,"\u800c\u8fd9\u4e2a\u91cc\u9762\u7684\u5bfc\u5165\u7684\u662f\u5185\u5d4c\u7684Tomcat\u3002\u8fd9\u91cc\u5c31\u5206\u6790\u5b8c\u6210\u4e86\u5728SpringBoot\u7684\u914d\u7f6epom\u6587\u4ef6\u914d\u7f6e\u5bfc\u5165\u4e86\u4e00\u4e9b\u4ec0\u4e48\u4e1c\u897f\u3002"),(0,o.kt)("h4",{id:"springboot\u9879\u76ee\u542f\u52a8"},"SpringBoot\u9879\u76ee\u542f\u52a8"),(0,o.kt)("p",null,"\u770b\u4e00\u4e0b\u6211\u4eec\u4e00\u822cSpringBoot\u9879\u76ee\u542f\u52a8\u7684\u4ee3\u7801\u5199\u6cd5\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"@SpringBootApplication\npublic class RaftApplication{\n    public static void main(String[] args) {\n        SpringApplication.run(RaftApplication.class, args);\n    }\n}\n")),(0,o.kt)("p",null,"\u901a\u8fc7 ",(0,o.kt)("strong",{parentName:"p"},"main")," \u65b9\u6cd5\u6765\u542f\u52a8\uff0c\u4e4b\u524d\u6709\u4e00\u7bc7 \u300a",(0,o.kt)("a",{parentName:"p",href:"https://blog.ljbmxsm.com/pages/f2f8b808/"},"SpringBoot\u542f\u52a8\u5206\u6790"),"\u300b\u7684\u6587\u7ae0\u3002\u8bb2\u89e3\u4e86SpringBoot\u662f\u5982\u4f55\u542f\u52a8\u7684\uff0c\u5728\u53e6\u5916\u4e00\u7bc7\u6587\u7ae0\u4e2d \u300a",(0,o.kt)("a",{parentName:"p",href:"https://blog.ljbmxsm.com/pages/beb882ec/"},"SpringBoot\u6e90\u7801\u89e3\u6790\u4e4bautoconfigure"),"\u300b\u8bb2\u89e3\u4e86\u81ea\u52a8\u88c5\u914d\u7684\u5e95\u5c42\u539f\u7406\u3002\u800c\u5728\u4e4b\u524d\u7684\u9879\u76ee\u914d\u7f6e\u5f15\u5165\u4f9d\u8d56\u5f15\u5165\u4e86 ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("artifactId",null,"spring-boot-autoconfigure"))," \u8fd9\u4e2a\u6a21\u5757\u3002\u901a\u8fc7\u67e5\u770b\u8be5\u6a21\u5757\u7684 ",(0,o.kt)("strong",{parentName:"p"},"spring.factories")," \u7684\u6570\u636e\u6709\u4e00\u4e2a\u81ea\u52a8\u914d\u7f6e\u7684\u6709\u8fd9\u6837\u4e00\u4e2a\u914d\u7f6e\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"org.springframework.boot.autoconfigure.EnableAutoConfiguration=\\\norg.springframework.boot.autoconfigure.web.servlet.ServletWebServerFactoryAutoConfiguration\n")),(0,o.kt)("p",null,"\u8fd9\u4e2a\u7c7b\u63ed\u793a\u4e86Tomcat\u5982\u4f55\u81ea\u52a8\u88c5\u914d\u3002"),(0,o.kt)("h4",{id:"springboot-tomcat\u5982\u4f55\u88c5\u914d"},"SpringBoot Tomcat\u5982\u4f55\u88c5\u914d"),(0,o.kt)("p",null,"\u7814\u7a76\u4e00\u4e0b ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"ServletWebServerFactoryAutoConfiguration"))," \u7c7b\u7684\u6e90\u7801\u3002\u63a2\u7d22Tomcat\u5982\u4f55\u81ea\u52a8\u88c5\u914d"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\u81ea\u52a8\u88c5\u914d\u7684\u5e95\u5c42\u539f\u7406\u6839\u636e\u7684\u662fSpring\u6846\u67b6\u7684@Conditional\u6ce8\u89e3")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"@Configuration(proxyBeanMethods = false)\n@AutoConfigureOrder(Ordered.HIGHEST_PRECEDENCE)\n@ConditionalOnClass(ServletRequest.class)\n@ConditionalOnWebApplication(type = Type.SERVLET)\n@EnableConfigurationProperties(ServerProperties.class)\n@Import({ ServletWebServerFactoryAutoConfiguration.BeanPostProcessorsRegistrar.class,\n        ServletWebServerFactoryConfiguration.EmbeddedTomcat.class,\n        ServletWebServerFactoryConfiguration.EmbeddedJetty.class,\n        ServletWebServerFactoryConfiguration.EmbeddedUndertow.class })\npublic class ServletWebServerFactoryAutoConfiguration {\n    //\u7701\u7565\u4ee3\u7801\n\n}\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"@ConditionalOnClass(ServletRequest.class)")," \u6ce8\u89e3\u5224\u65adclasspath\u4e2d\u662f\u5426\u6709 ",(0,o.kt)("strong",{parentName:"p"},"ServletRequest")," \u7c7b\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"@ConditionalOnWebApplication(type = Type.SERVLET)")," \u5224\u65ad\u662f\u5426\u4e3aservlet\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"@EnableConfigurationProperties(ServerProperties.class)")," \u52a0\u8f7d ",(0,o.kt)("strong",{parentName:"p"},"ServerProperties")," \u914d\u7f6e\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"@Import({ ServletWebServerFactoryAutoConfiguration.BeanPostProcessorsRegistrar.class,\n        ServletWebServerFactoryConfiguration.EmbeddedTomcat.class,\n        ServletWebServerFactoryConfiguration.EmbeddedJetty.class,\n        ServletWebServerFactoryConfiguration.EmbeddedUndertow.class })\n")),(0,o.kt)("p",null,"\u8fd9\u4e00\u6bb5\u5bfc\u5165\u4e86 ",(0,o.kt)("strong",{parentName:"p"},"BeanPostProcessorsRegistrar")," \u548c \u4e09\u4e2aweb\u8fd0\u884c\u5bb9\u5668\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Tomcat")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"http://tomcat.apache.org/"},"Tomcat\u5b98\u7f51"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Jetty")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://www.eclipse.org/jetty/"},"Jetty\u5b98\u7f51"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Undertow")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"http://undertow.io/"},"Undertow\u5b98\u7f51")))),(0,o.kt)("p",null,"\u5728 ",(0,o.kt)("strong",{parentName:"p"},"ServletWebServerFactoryAutoConfiguration")," \u6709\u4e09\u4e2a\u65b9\u6cd5\u4e00\u4e2a\u9759\u6001\u5185\u90e8\u7c7b\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"@Bean\npublic ServletWebServerFactoryCustomizer servletWebServerFactoryCustomizer(ServerProperties serverProperties) {\n    return new ServletWebServerFactoryCustomizer(serverProperties);\n}\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"servletWebServerFactoryCustomizer")," \u65b9\u6cd5\u521b\u5efa\u4e00\u4e2aServletWebServerFactoryCustomizer(\u5b9a\u5236\u5668)\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'@Bean\n@ConditionalOnClass(name = "org.apache.catalina.startup.Tomcat")\npublic TomcatServletWebServerFactoryCustomizer tomcatServletWebServerFactoryCustomizer(\n            ServerProperties serverProperties) {\n    return new TomcatServletWebServerFactoryCustomizer(serverProperties);\n}\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"tomcatServletWebServerFactoryCustomizer")," \u65b9\u6cd5\u6839\u636e ",(0,o.kt)("strong",{parentName:"p"},"ConditionalOnClass")," \u5b58\u5728 Tomcat\u90a3\u4e48\u521b\u5efa ",(0,o.kt)("strong",{parentName:"p"},"TomcatServletWebServerFactoryCustomizer")," \u5b9a\u5236\u5668\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'@Bean\n    @ConditionalOnMissingFilterBean(ForwardedHeaderFilter.class)\n    @ConditionalOnProperty(value = "server.forward-headers-strategy", havingValue = "framework")\n    public FilterRegistrationBean<ForwardedHeaderFilter> forwardedHeaderFilter() {\n        ForwardedHeaderFilter filter = new ForwardedHeaderFilter();\n        FilterRegistrationBean<ForwardedHeaderFilter> registration = new FilterRegistrationBean<>(filter);\n        registration.setDispatcherTypes(DispatcherType.REQUEST, DispatcherType.ASYNC, DispatcherType.ERROR);\n        registration.setOrder(Ordered.HIGHEST_PRECEDENCE);\n        return registration;\n    }\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"forwardedHeaderFilter")," \u521b\u5efa\u7684\u5904\u7406\u8f6c\u53d1\u5934\u7684\u8fc7\u6ee4\u5668\u3002",(0,o.kt)("br",{parentName:"p"}),"\n","\u5728 ",(0,o.kt)("strong",{parentName:"p"},"ServletWebServerFactoryAutoConfiguration")," \u7c7b\u4e2d\u8fd8\u6709\u4e00\u4e2a\u9759\u6001\u5185\u90e8\u7c7b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'public static class BeanPostProcessorsRegistrar implements ImportBeanDefinitionRegistrar, BeanFactoryAware {\n\n        private ConfigurableListableBeanFactory beanFactory;\n\n        @Override\n        public void setBeanFactory(BeanFactory beanFactory) throws BeansException {\n            if (beanFactory instanceof ConfigurableListableBeanFactory) {\n                this.beanFactory = (ConfigurableListableBeanFactory) beanFactory;\n            }\n        }\n\n        @Override\n        public void registerBeanDefinitions(AnnotationMetadata importingClassMetadata,\n                BeanDefinitionRegistry registry) {\n            if (this.beanFactory == null) {\n                return;\n            }\n            registerSyntheticBeanIfMissing(registry, "webServerFactoryCustomizerBeanPostProcessor",\n                    WebServerFactoryCustomizerBeanPostProcessor.class);\n            registerSyntheticBeanIfMissing(registry, "errorPageRegistrarBeanPostProcessor",\n                    ErrorPageRegistrarBeanPostProcessor.class);\n        }\n\n        private void registerSyntheticBeanIfMissing(BeanDefinitionRegistry registry, String name, Class<?> beanClass) {\n            if (ObjectUtils.isEmpty(this.beanFactory.getBeanNamesForType(beanClass, true, false))) {\n                RootBeanDefinition beanDefinition = new RootBeanDefinition(beanClass);\n                beanDefinition.setSynthetic(true);\n                registry.registerBeanDefinition(name, beanDefinition);\n            }\n        }\n\n    }\n')),(0,o.kt)("p",null,"\u5728\u8fd9\u4e2a\u9759\u6001\u5185\u90e8\u7c7b\u4e2d\u5f80SpringApplication\u7684Context\u4e2d\u6ce8\u5165\u4e24\u4e2aBean\u7684\u5904\u7406\u5668\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"WebServerFactoryCustomizerBeanPostProcessor"),(0,o.kt)("br",{parentName:"li"}),"WebServerFactoryCustomizer bean\u7684\u5904\u7406"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"ErrorPageRegistrarBeanPostProcessor"),(0,o.kt)("br",{parentName:"li"}),"ErrorPageRegistrar bean\u5904\u7406\u5668")),(0,o.kt)("p",null,"\u5728 ",(0,o.kt)("strong",{parentName:"p"},"ServletWebServerFactoryAutoConfiguration")," \u7c7b\u4e0a\u9762\u6709\u4e00\u4e2a@Import\u6ce8\u89e3\u5bfc\u5165\u4e86\u56db\u4e2a\u7c7b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ServletWebServerFactoryAutoConfiguration.BeanPostProcessorsRegistrar.class\nServletWebServerFactoryConfiguration.EmbeddedTomcat.class\nServletWebServerFactoryConfiguration.EmbeddedJetty.class\nServletWebServerFactoryConfiguration.EmbeddedUndertow.class\n")),(0,o.kt)("p",null,"\u7b2c\u4e00\u4e2a\u5c31\u662fServletWebServerFactoryAutoConfiguration\u4e2d\u7684\u9759\u6001\u7c7b\uff0c\u7136\u540e\u6211\u4eec\u7814\u7a76\u4e00\u4e0b ",(0,o.kt)("strong",{parentName:"p"},"EmbeddedTomcat")," \u4e2d\u7684\u9759\u6001\u5185\u90e8\u7c7b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"@Configuration(proxyBeanMethods = false)\nclass ServletWebServerFactoryConfiguration {\n\n    @Configuration(proxyBeanMethods = false)\n    //\u5b58\u5728\u6709Tomcat\u7684\u7c7b--\u8fd9\u4e2a\u662fApache Tomcat\u7684\u542f\u52a8\u7c7b(\u5185\u5d4cTomcat)\n    @ConditionalOnClass({ Servlet.class, Tomcat.class, UpgradeProtocol.class })\n    @ConditionalOnMissingBean(value = ServletWebServerFactory.class, search = SearchStrategy.CURRENT)\n    public static class EmbeddedTomcat {\n\n        @Bean\n        public TomcatServletWebServerFactory tomcatServletWebServerFactory(\n                ObjectProvider<TomcatConnectorCustomizer> connectorCustomizers,\n                ObjectProvider<TomcatContextCustomizer> contextCustomizers,\n                ObjectProvider<TomcatProtocolHandlerCustomizer<?>> protocolHandlerCustomizers) {\n            TomcatServletWebServerFactory factory = new TomcatServletWebServerFactory();\n            factory.getTomcatConnectorCustomizers()\n                    .addAll(connectorCustomizers.orderedStream().collect(Collectors.toList()));\n            factory.getTomcatContextCustomizers()\n                    .addAll(contextCustomizers.orderedStream().collect(Collectors.toList()));\n            factory.getTomcatProtocolHandlerCustomizers()\n                    .addAll(protocolHandlerCustomizers.orderedStream().collect(Collectors.toList()));\n            return factory;\n        }\n\n    }\n    \n    //\u7701\u7565\u5176\u4ed6\u7684\u4ee3\u7801\u4e24\u4e2a\u9759\u6001\u5185\u90e8\u7c7b\n}\n")),(0,o.kt)("p",null,"\u5728\u8fd9\u4e2a\u9759\u6001\u5185\u90e8\u7c7b\u4e2d\u505a\u4e86\u4e00\u4ef6\u4e8b\u60c5\uff0c\u90a3\u5c31\u662f\u521b\u5efa ",(0,o.kt)("strong",{parentName:"p"},"TomcatServletWebServerFactory")," \u7c7b\u3002\u5728\u8fd9\u4e2a\u7c7b\u4e2d\u6709\u4e00\u4e2a ",(0,o.kt)("strong",{parentName:"p"},"getWebServer")," \u65b9\u6cd5\uff0c\u8fd9\u4e2a\u65b9\u6cd5\u5728\u63a5\u53e3 ",(0,o.kt)("strong",{parentName:"p"},"ServletWebServerFactory#getWebServer")," \u4e2d\u3002\u90a3\u4e48\u770b\u4e00\u4e0b\u8fd9\u4e2a\u7c7b\u7684\u5b9e\u73b0\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'    @Override\n    public WebServer getWebServer(ServletContextInitializer... initializers) {\n        if (this.disableMBeanRegistry) {\n            Registry.disableRegistry();\n        }\n        Tomcat tomcat = new Tomcat();\n        File baseDir = (this.baseDirectory != null) ? this.baseDirectory : createTempDir("tomcat");\n        tomcat.setBaseDir(baseDir.getAbsolutePath());\n        Connector connector = new Connector(this.protocol);\n        connector.setThrowOnFailure(true);\n        tomcat.getService().addConnector(connector);\n        customizeConnector(connector);\n        tomcat.setConnector(connector);\n        tomcat.getHost().setAutoDeploy(false);\n        configureEngine(tomcat.getEngine());\n        for (Connector additionalConnector : this.additionalTomcatConnectors) {\n            tomcat.getService().addConnector(additionalConnector);\n        }\n        prepareContext(tomcat.getHost(), initializers);\n        return getTomcatWebServer(tomcat);\n    }\n')),(0,o.kt)("p",null,"\u53ef\u4ee5\u770b\u51fa\u6765\u8fd9\u4e2a\u65b9\u6cd5\u4e3b\u8981\u662f\u521b\u5efa\u5185\u5d4c\u7684Tomcat\u3002"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"TomcatServletWebServerFactory#getWebServer\u4e2d\u5c31\u521b\u5efa\u4e86\u5185\u5d4c\u7684Tomcat\u3002\u4ee5\u524d\u7684Tomcat\u90fd\u662f\u914d\u7f6e\u5728\u5916\u9762\uff0cSpringBoot\u4e3b\u8981\u662f\u901a\u8fc7\u5185\u5d4c\u7684Web\u5bb9\u5668\u53d6\u6d88\u4e86\u5f00\u53d1\u8fc7\u7a0b\u4e2d\u914d\u7f6e\u3002")),(0,o.kt)("h4",{id:"springboot-tomcat\u5982\u4f55\u542f\u52a8"},"SpringBoot Tomcat\u5982\u4f55\u542f\u52a8"),(0,o.kt)("p",null,"\u5206\u6790\u4e86\u5982\u4f55\u521b\u5efa\u5185\u5d4c\u7684Tomcat\uff0c\u90a3\u4e48\u5bf9\u4e8eSpringBoot\u662f\u5982\u4f55\u542f\u52a8Tomcat\u7684\u3002\u5bf9\u4e8eTomcat\u7684\u542f\u52a8\u5206\u4e3a\u4e24\u4e2a\u65b9\u9762\u5206\u6790\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"TomcatServletWebServerFactory#getWebServer\u4ec0\u4e48\u65f6\u5019\u8c03\u7528\uff1f")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Tomcat\u4ec0\u4e48\u65f6\u5019\u542f\u52a8"),"  ")),(0,o.kt)("h5",{id:"tomcat\u5bb9\u5668\u521b\u5efa"},"Tomcat\u5bb9\u5668\u521b\u5efa"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-flow"},"st=>start: \u5f00\u59cb\nspRun=>operation: SpringApplication#run\nspCreateApplicationContext=>operation: SpringApplication#createApplicationContext\nspRefreshContextcondition=>operation: SpringApplication#refreshContext\ne=>end: \u7ed3\u675f\n\nst->spRun->spCreateApplicationContext->spRefreshContextcondition->e\n\n")),(0,o.kt)("p",null,"\u4e0a\u9762\u662fSpringApplication\u7684\u4e3b\u8981\u51e0\u4e2a\u65b9\u6cd5\u3002\u5728\u65b9\u6cd5",(0,o.kt)("strong",{parentName:"p"},"refreshContext"),"\u4e2d\u4e3b\u8981\u662f\u5237\u65b0\u4e0a\u4e0b\u6587:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"    protected void refresh(ApplicationContext applicationContext) {\n        Assert.isInstanceOf(AbstractApplicationContext.class, applicationContext);\n        ((AbstractApplicationContext) applicationContext).refresh();\n    }\n")),(0,o.kt)("p",null,"\u901a\u8fc7\u4ee3\u7801\u53d1\u73b0\u4e3b\u8981\u662f\u901a\u8fc7\u8c03\u7528 ",(0,o.kt)("strong",{parentName:"p"},"AbstractApplicationContext#refresh")," \u65b9\u6cd5\u3002\u8fd9\u4e2a\u65b9\u6cd5\u5f88\u719f\u6089\uff0cSpringApplication\u4e2d\u521b\u5efa\u7684ApplicationContext\u4e3b\u8981\u521b\u5efa\u7684\u662f ",(0,o.kt)("strong",{parentName:"p"},"AnnotationConfigServletWebServerApplicationContext")," \u3002\u800c\u8fd9\u4e2a\u7c7b\u7ee7\u627f\u4e86 ",(0,o.kt)("strong",{parentName:"p"},"ServletWebServerApplicationContext")," \u7c7b\uff0c\u5f53\u524d\u7c7b\u91cd\u8f7d\u4e86 ",(0,o.kt)("strong",{parentName:"p"},"onRefresh")," \u65b9\u6cd5\u3002\u90a3\u4e48\u770b\u4e00\u4e0b ",(0,o.kt)("strong",{parentName:"p"},"ServletWebServerApplicationContext#onRefresh")," \u65b9\u6cd5\u4ee3\u7801:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'    @Override\n    protected void onRefresh() {\n        super.onRefresh();\n        try {\n           //\u521b\u5efaWebServer(\u5bf9\u4e8eTomcat\u7684\u5bb9\u5668\u521b\u5efa\u7684\u662fTomcatWebServer)\n            createWebServer();\n        }\n        catch (Throwable ex) {\n            throw new ApplicationContextException("Unable to start web server", ex);\n        }\n    }\n')),(0,o.kt)("p",null,"\u901a\u8fc7\u8c03\u7528 ",(0,o.kt)("strong",{parentName:"p"},"onRefresh")," \u65b9\u6cd5\u521b\u5efa\u4e86TomcatWebServer\u3002\n\u5728 ",(0,o.kt)("strong",{parentName:"p"},"AbstractApplicationContext#refresh")," \u8fd9\u4e2a\u65b9\u6cd5\u4e2d\u6700\u540e\u8c03\u7528\u4e86\u4e00\u4e2a ",(0,o.kt)("strong",{parentName:"p"},"finishRefresh")," \u65b9\u6cd5\u3002\u5728 ",(0,o.kt)("strong",{parentName:"p"},"AbstractApplicationContext#refresh")," \u65b9\u6cd5\u4e2d\u7684\u4ee3\u7801\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"    protected void finishRefresh\uff1a\n    () {\n        // Clear context-level resource caches (such as ASM metadata from scanning).\n        clearResourceCaches();\n\n        // Initialize lifecycle processor for this context.\n        initLifecycleProcessor();\n\n        // Propagate refresh to lifecycle processor first.\n        getLifecycleProcessor().onRefresh();\n\n        // Publish the final event.\n        publishEvent(new ContextRefreshedEvent(this));\n\n        // Participate in LiveBeansView MBean, if active.\n        LiveBeansView.registerApplicationContext(this);\n    }\n")),(0,o.kt)("p",null,"\u5728ServletWebServerApplicationContext\u91cd\u5199\u4e86\u65b9\u6cd5finishRefresh\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"@Override\n    protected void finishRefresh() {\n        //\u8c03\u7528\u4e86\u7236\u7c7b\u7684\u5b8c\u6210\u5237\u65b0\u65b9\u6cd5\n        super.finishRefresh();\n        //\u542f\u52a8webServer\n        WebServer webServer = startWebServer();\n        if (webServer != null) {\n            //\u53d1\u5e03ServletWebServerInitializedEvent\u4e8b\u4ef6\n            publishEvent(new ServletWebServerInitializedEvent(webServer, this));\n        }\n    }\n")),(0,o.kt)("p",null,"\u6240\u4ee5\u8fd9\u91cc\u5c31\u542f\u52a8\u4e86Web\u5bb9\u5668\u3002"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u901a\u8fc7\u8fd9\u91cc\u53d1\u73b0\u521b\u5efaWebServer\u662f\u5728onRefresh\u65b9\u6cd5\u4e2d\u521b\u5efa\u4e86,\u800c\u542f\u52a8WebServer\u662f\u5728 finishRefresh\u4e2d\u542f\u52a8\u3002\u542f\u52a8\u8fc7\u7a0b\u4e2d\u8fd8\u63a8\u9001\u4e86ServletWebServerInitializedEvent\u4e8b\u4ef6\u3002")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u901a\u8fc7\u6e90\u7801\u53d1\u73b0TomcatServletWebServerFactory#getWebServer\u662f\u5728ServletWebServerApplicationContext#onRefresh\u65b9\u6cd5\u4e2d\u8c03\u7528\u4e86createWebServer\u65b9\u6cd5\u6765\u89e6\u53d1\u7684\u3002")),(0,o.kt)("h5",{id:"tomcat\u4ec0\u4e48\u65f6\u5019\u542f\u52a8"},"Tomcat\u4ec0\u4e48\u65f6\u5019\u542f\u52a8"),(0,o.kt)("p",null,"\u8bf4\u5230\u8fd9\u4e2aTomcat\u542f\u52a8\u4e8b\u4ef6\uff0c\u5f88\u591a\u4eba\u90fd\u6bd4\u8f83\u56f0\u60d1\u3002\u901a\u8fc7\u4ee3\u7801\u5206\u6790\u53ef\u4ee5\u53d1\u73b0\u5728\u5982\u679c\u628aSpringBoot\u5f53\u505a\u4e00\u4e2a\u7b80\u5355\u7684Spring\u7684\u5e94\u7528\uff0c\u4ece\u521d\u59cb\u5316\u5230\u5b8c\u6210Spring\u73af\u5883\u7684\u5b8c\u6210\u3002Tomcat\u662f\u5728SpringApplication\u5b8c\u6210\u540e\u542f\u52a8\u7684\uff0c\u7136\u540e\u53d1\u5e03ServletWebServerInitializedEvent\u4e8b\u4ef6\u3002"))}g.isMDXComponent=!0}}]);