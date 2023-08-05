"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[3444],{3905:(e,t,a)=>{a.d(t,{Zo:()=>o,kt:()=>u});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},p=Object.keys(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=n.createContext({}),s=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},o=function(e){var t=s(e.components);return n.createElement(m.Provider,{value:t},e.children)},k="mdxType",N={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,p=e.originalType,m=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),k=s(a),c=r,u=k["".concat(m,".").concat(c)]||k[c]||N[c]||p;return a?n.createElement(u,l(l({ref:t},o),{},{components:a})):n.createElement(u,l({ref:t},o))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=a.length,l=new Array(p);l[0]=c;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i[k]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<p;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},9017:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>N,frontMatter:()=>p,metadata:()=>i,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const p={title:"\u7c7b\u7684\u52a0\u8f7d",date:new Date("2019-04-27T00:00:00.000Z")},l=void 0,i={unversionedId:"java/java-se/JVM/class-loader",id:"java/java-se/JVM/class-loader",title:"\u7c7b\u7684\u52a0\u8f7d",description:"1. \u865a\u62df\u673a\u7c7b\u7684\u52a0\u8f7d",source:"@site/docs/java/java-se/JVM/class-loader.md",sourceDirName:"java/java-se/JVM",slug:"/java/java-se/JVM/class-loader",permalink:"/docs/java/java-se/JVM/class-loader",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/java/java-se/JVM/class-loader.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1691228615,formattedLastUpdatedAt:"Aug 5, 2023",frontMatter:{title:"\u7c7b\u7684\u52a0\u8f7d",date:"2019-04-27T00:00:00.000Z"},sidebar:"javase",previous:{title:"\u6df1\u5165\u7406\u89e3Java\u5bf9\u8c61\u5934Mark Word",permalink:"/docs/java/java-se/JVM/Java-object-header"},next:{title:"Java GC\u65e5\u5fd7\u56fe\u89e3",permalink:"/docs/java/java-se/JVM/java-gc-log"}},m={},s=[{value:"1. \u865a\u62df\u673a\u7c7b\u7684\u52a0\u8f7d",id:"1-\u865a\u62df\u673a\u7c7b\u7684\u52a0\u8f7d",level:3}],o={toc:s},k="wrapper";function N(e){let{components:t,...a}=e;return(0,r.kt)(k,(0,n.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"1-\u865a\u62df\u673a\u7c7b\u7684\u52a0\u8f7d"},"1. \u865a\u62df\u673a\u7c7b\u7684\u52a0\u8f7d"),(0,r.kt)("p",null,"\u865a\u62df\u673a\u52a0\u7c7b\u7684\u751f\u547d\u5468\u671f\u51e0\u4e2a\u9636\u6bb5\u56fe\u89e3\u5982\u4e0b\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/document/master/image/JSE/JVM%E8%99%9A%E6%8B%9F%E6%9C%BA%E7%9A%84%E7%B1%BB%E5%8A%A0%E8%BD%BD.png",alt:"\u56fe\u89e3"})),(0,r.kt)("p",null,"\u865a\u62df\u673a\u52a0\u8f7d\u7c7b\u7684\u7684\u4e09\u4e2a\u9636\u6bb5(\u52a0\u8f7d---\x3e\u8fde\u63a5---\x3e\u521d\u59cb\u5316)\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u52a0\u8f7d")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u52a0\u8f7d")," \u662f ",(0,r.kt)("strong",{parentName:"p"},"\u7c7b\u52a0\u8f7d")," (",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Class Loading")),")\u8fc7\u7a0b\u7684\u4e00\u4e2a\u9636\u6bb5\u5728\u8fd9\u9636\u6bb5\u9700\u8981\u505a\u4e09\u4ef6\u4e8b\u60c5\uff1a"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"\u901a\u8fc7\u4e00\u4e2a",(0,r.kt)("strong",{parentName:"li"},"\u7c7b\u7684\u5168\u9650\u5b9a\u540d(\u5e26\u5305\u540d)"),"\u6765\u83b7\u53d6\u5b9a\u4e49\u6b64\u7c7b\u7684\u4e8c\u8fdb\u5236\u5b57\u8282\u6d41\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5c06\u8fd9\u4e2a\u5b57\u8282\u7684\u6d41\u6240\u4ee3\u8868\u7684\u9759\u6001\u5b58\u50a8\u7ed3\u6784\u8f6c\u5316\u6210\u4e3a\u65b9\u6cd5\u533a\u7684\u8fd0\u884c\u65f6\u6570\u636e\u7ed3\u6784"),(0,r.kt)("li",{parentName:"ol"},"\u5728\u5185\u5b58\u4e2d\u751f\u6210\u4e00\u4e2a\u4ee3\u8868\u8fd9\u4e2a\u7c7b\u7684 ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"java.lang.Class"))," \u5bf9\u8c61\uff0c\u4f5c\u4e3a\u65b9\u6cd5\u533a\u8fd9\u4e2a\u7c7b\u7684\u5404\u79cd\u6570\u636e\u8bbf\u95ee\u5165\u53e3"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u8fde\u63a5")),(0,r.kt)("p",{parentName:"li"},"\u8fde\u63a5\u53c8\u5206\u4e3a\u4e09\u4e2a\u9636\u6bb5\uff1a"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u9a8c\u8bc1")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6587\u4ef6\u683c\u5f0f\u9a8c\u8bc1"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"Java"))," \u6587\u4ef6\u662f\u5426\u5df2\u9b54\u6570\u5f00\u5934"),(0,r.kt)("li",{parentName:"ul"},"\u4e3b\u6b21\u7248\u672c\u53f7\u662f\u5426\u5728\u5f53\u524d\u865a\u62df\u673a\u5904\u7406\u8303\u56f4\u5185"),(0,r.kt)("li",{parentName:"ul"},"\u5e38\u91cf\u6c60\u4e2d\u7684\u5e38\u91cf\u662f\u5426\u6709\u4e0d\u88ab\u652f\u6301\u7684\u7c7b\u578b"),(0,r.kt)("li",{parentName:"ul"},"......"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5143\u6570\u636e\u7684\u9a8c\u8bc1"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u662f\u5426\u6709\u7236\u7c7b"),(0,r.kt)("li",{parentName:"ul"},"\u7b49\u7b49....."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5b57\u8282\u7801\u9a8c\u8bc1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u7b26\u53f7\u5e94\u7528\u9a8c\u8bc1")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u51c6\u5907")),(0,r.kt)("p",{parentName:"li"},"\u6b63\u5f0f\u4e3a\u7c7b\u7684\u53d8\u91cf\u5206\u914d\u5185\u5b58\u5e76\u8bbe\u7f6e\u7c7b\u53d8\u91cf\u521d\u59cb\u503c\u9636\u6bb5\uff0c\u8fd9\u4e9b\u53d8\u91cf\u9501\u4f7f\u7528\u7684\u5185\u5b58\u90fd\u5c06\u5728\u65b9\u6cd5\u533a\u4e2d\u8fdb\u884c\u5206\u914d\u3002(",(0,r.kt)("strong",{parentName:"p"},"\u8fd9\u91cc\u7684\u5206\u914d\u5bf9\u8c61\u7684\u5185\u5b58\u666f\u5305\u62ec\u7c7b\u53d8\u91cf--\u4e5f\u5c31\u662f\u88abstatic\u4fee\u9970\u7684\u53d8\u91cf\uff0c\u4e0d\u5305\u62ec\u5b9e\u4f8b\u53d8\u91cf"),")")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u89e3\u6790")),(0,r.kt)("p",{parentName:"li"},"\u89e3\u6790\u9636\u6bb5\u662fJVM\u5c06\u5e38\u91cf\u6c60\u5185\u7684\u7b26\u53f7\u5f15\u7528\u66ff\u6362\u4e3a\u76f4\u63a5\u5f15\u7528\u7684\u8fc7\u7a0b\u3002"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u7b26\u53f7\u5f15\u7528")),(0,r.kt)("p",{parentName:"li"},"\u7b26\u53f7\u5f15\u7528\u4ee5\u4e00\u7ec4\u7b26\u53f7\u6765\u63cf\u8ff0\u6240\u5f15\u7528\u7684\u76ee\u6807\uff0c\u7b26\u53f7\u53ef\u4ee5\u662f\u4efb\u4f55\u5f62\u5f0f\u7684\u5b57\u9762\u91cf\uff0c\u53ea\u8981\u4f7f\u7528\u65f6\u80fd\u591f\u65e0\u6b67\u4e49\u7684\u5b9a\u4f4d\u5230\u76ee\u6807\u5373\u53ef\u3002\u4f8b\u5982\uff0c\u5728Class\u6587\u4ef6\u4e2d\u5b83\u4ee5CONSTANT_Class_info\u3001CONSTANT_Fieldref_info\u3001CONSTANT_Methodref_info\u7b49\u7c7b\u578b\u7684\u5e38\u91cf\u51fa\u73b0\u3002\u7b26\u53f7\u5f15\u7528\u4e0e\u865a\u62df\u673a\u7684\u5185\u5b58\u5e03\u5c40\u65e0\u5173\uff0c\u5f15\u7528\u7684\u76ee\u6807\u5e76\u4e0d\u4e00\u5b9a\u52a0\u8f7d\u5230\u5185\u5b58\u4e2d\u3002\u5728Java\u4e2d\uff0c\u4e00\u4e2ajava\u7c7b\u5c06\u4f1a\u7f16\u8bd1\u6210\u4e00\u4e2aclass\u6587\u4ef6\u3002\u5728\u7f16\u8bd1\u65f6\uff0cjava\u7c7b\u5e76\u4e0d\u77e5\u9053\u6240\u5f15\u7528\u7684\u7c7b\u7684\u5b9e\u9645\u5730\u5740\uff0c\u56e0\u6b64\u53ea\u80fd\u4f7f\u7528\u7b26\u53f7\u5f15\u7528\u6765\u4ee3\u66ff\u3002\u6bd4\u5982org.simple.People\u7c7b\u5f15\u7528\u4e86org.simple.Language\u7c7b\uff0c\u5728\u7f16\u8bd1\u65f6People\u7c7b\u5e76\u4e0d\u77e5\u9053Language\u7c7b\u7684\u5b9e\u9645\u5185\u5b58\u5730\u5740\uff0c\u56e0\u6b64\u53ea\u80fd\u4f7f\u7528\u7b26\u53f7org.simple.Language\uff08\u5047\u8bbe\u662f\u8fd9\u4e2a\uff0c\u5f53\u7136\u5b9e\u9645\u4e2d\u662f\u7531\u7c7b\u4f3c\u4e8eCONSTANT_Class_info\u7684\u5e38\u91cf\u6765\u8868\u793a\u7684\uff09\u6765\u8868\u793aLanguage\u7c7b\u7684\u5730\u5740\u3002\u5404\u79cd\u865a\u62df\u673a\u5b9e\u73b0\u7684\u5185\u5b58\u5e03\u5c40\u53ef\u80fd\u6709\u6240\u4e0d\u540c\uff0c\u4f46\u662f\u5b83\u4eec\u80fd\u63a5\u53d7\u7684\u7b26\u53f7\u5f15\u7528\u90fd\u662f\u4e00\u81f4\u7684\uff0c\u56e0\u4e3a\u7b26\u53f7\u5f15\u7528\u7684\u5b57\u9762\u91cf\u5f62\u5f0f\u660e\u786e\u5b9a\u4e49\u5728Java\u865a\u62df\u673a\u89c4\u8303\u7684Class\u6587\u4ef6\u683c\u5f0f\u4e2d\u3002(",(0,r.kt)("strong",{parentName:"p"},"\u603b\u7ed3\u4e00\u4e0b\uff1a\u5c31\u662f\u7c7b\u4f3c\u4e8e\u5360\u4f4d\u7b26\u7528\u4e00\u4e2a\u80fd\u552f\u4e00\u6807\u8bc6\u81ea\u5df1\u7684\u7b26\u53f7\u5360\u7740"),")")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u76f4\u63a5\u5f15\u7528")),(0,r.kt)("p",{parentName:"li"},"\u76f4\u63a5\u6307\u5411\u76ee\u6807\u7684\u6307\u9488\uff0c\u76f8\u5bf9\u504f\u79fb\u91cf\uff0c\u4e00\u4e2a\u80fd\u95f4\u63a5\u5b9a\u4f4d\u5230\u76ee\u6807\u7684\u53e5\u67c4")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u7c7b\u6216\u8005\u63a5\u53e3\u7684\u89e3\u6790"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u5b57\u6bb5\u7684\u89e3\u6790"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u7c7b\u65b9\u6cd5\u7684\u89e3\u6790"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u63a5\u53e3\u65b9\u6cd5\u7684\u89e3\u6790"))))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u521d\u59cb\u5316")),(0,r.kt)("p",{parentName:"li"},"\u5728\u7c7b\u521d\u59cb\u5316\u4e4b\u524d\u7684\u51c6\u5907\u9636\u6bb5\u865a\u62df\u673a\u4f1a\u5c06",(0,r.kt)("strong",{parentName:"p"},"\u7c7b\u53d8\u91cf\uff08static \u4fee\u9970\u7684\u53d8\u91cf\uff09"),"\u5206\u914d\u5185\u5b58\u5e76\u8bbe\u7f6e\u9ed8\u8ba4\u503c\u3002\u521d\u59cb\u5316\u9636\u6bb5\uff1a"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u7f16\u8bd1\u5668\u4f1a\u5728\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},".java")," \u6587\u4ef6\u7f16\u8bd1\u6210 ",(0,r.kt)("inlineCode",{parentName:"p"},".class")," \u6587\u4ef6\u65f6\uff0c\u6536\u96c6\u6240\u6709\u7c7b\u521d\u59cb\u5316\u4ee3\u7801\u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"static {}")," \u57df\u7684\u4ee3\u7801\uff0c\u6536\u96c6\u5728\u4e00\u8d77\u6210\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"<cinit>()")," \u65b9\u6cd5 (",(0,r.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a\u9759\u6001\u4ee3\u7801\u5757\u53ea\u80fd\u8bbf\u95ee\u4ee3\u7801\u5757\u4e4b\u524d\u7684\u53d8\u91cf\uff0c\u5b9a\u4e49\u4e4b\u540e\u7684\u53d8\u91cf\u53ea\u80fd\u8d4b\u503c\u4e0d\u80fd\u8bbf\u95ee"),")"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},'    static String aaa;\n    \n    static {\n        aaa = "123";\n        bbb = "234";\n        System.out.println(bbb); // \u5728ideal\u4e2d\u4f1a\u62a5\u9519 \u4f46\u662f\u4e0a\u9762\u4e00\u4e2a\u8bed\u53e5\u53ef\u4ee5\n    }\n\n    static String bbb;\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5b50\u7c7b\u521d\u59cb\u5316\u65f6\u4f1a\u9996\u5148\u8c03\u7528\u7236\u7c7b\u7684  ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"<cinit>()")),"  \u65b9\u6cd5"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public class Animals {\n\n    private static String animals;\n\n    static {\n        animals = "animals";\n        System.out.println(animals);\n    }\n\n}\n\npublic class Cat extends Animals{\n\n    private static String cat;\n\n    static {\n        cat = "Cat";\n        System.out.println(cat);\n    }\n}\n\npublic class App {\n\n    public static void main( String[] args ) {\n        new Cat();\n    }\n}\n')),(0,r.kt)("p",{parentName:"li"},"\u6253\u5370\u7684\u7ed3\u679c\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"animals\nCat\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u591a\u7ebf\u7a0b\u73af\u5883\u4e0b\u4fdd\u8bc1\u7ebf\u7a0b\u7684\u5b89\u5168"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u4f7f\u7528"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u5378\u8f7d")))))}N.isMDXComponent=!0}}]);