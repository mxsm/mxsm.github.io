"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[2408],{3905:(e,a,t)=>{t.d(a,{Zo:()=>m,kt:()=>d});var l=t(7294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);a&&(l=l.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,l)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,l,n=function(e,a){if(null==e)return{};var t,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)t=r[l],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)t=r[l],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var u=l.createContext({}),o=function(e){var a=l.useContext(u),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},m=function(e){var a=o(e.components);return l.createElement(u.Provider,{value:a},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return l.createElement(l.Fragment,{},a)}},k=l.forwardRef((function(e,a){var t=e.components,n=e.mdxType,r=e.originalType,u=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),s=o(t),k=n,d=s["".concat(u,".").concat(k)]||s[k]||c[k]||r;return t?l.createElement(d,i(i({ref:a},m),{},{components:t})):l.createElement(d,i({ref:a},m))}));function d(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=t.length,i=new Array(r);i[0]=k;var p={};for(var u in a)hasOwnProperty.call(a,u)&&(p[u]=a[u]);p.originalType=e,p[s]="string"==typeof e?e:n,i[1]=p;for(var o=2;o<r;o++)i[o]=t[o];return l.createElement.apply(null,i)}return l.createElement.apply(null,t)}k.displayName="MDXCreateElement"},4168:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>p,toc:()=>o});var l=t(7462),n=(t(7294),t(3905));const r={title:"Java\u5e38\u7528JVM\u53c2\u6570\u5b9e\u6218",linkTitle:"Java\u5e38\u7528JVM\u53c2\u6570\u5b9e\u6218",weight:202305212345,description:"Java\u5e38\u7528JVM\u53c2\u6570\u5b9e\u6218"},i=void 0,p={unversionedId:"java/java-se/JVM/jvm-adjust",id:"java/java-se/JVM/jvm-adjust",title:"Java\u5e38\u7528JVM\u53c2\u6570\u5b9e\u6218",description:"Java\u5e38\u7528JVM\u53c2\u6570\u5b9e\u6218",source:"@site/docs/java/java-se/JVM/02-jvm-adjust.md",sourceDirName:"java/java-se/JVM",slug:"/java/java-se/JVM/jvm-adjust",permalink:"/docs/java/java-se/JVM/jvm-adjust",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/java/java-se/JVM/02-jvm-adjust.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1684684148,formattedLastUpdatedAt:"May 21, 2023",sidebarPosition:2,frontMatter:{title:"Java\u5e38\u7528JVM\u53c2\u6570\u5b9e\u6218",linkTitle:"Java\u5e38\u7528JVM\u53c2\u6570\u5b9e\u6218",weight:202305212345,description:"Java\u5e38\u7528JVM\u53c2\u6570\u5b9e\u6218"},sidebar:"javase",previous:{title:"JVM\u8c03\u4f18\u5b9e\u6218\uff1a\u4f18\u5316Java\u5e94\u7528\u7a0b\u5e8f\u7684\u6027\u80fd",permalink:"/docs/java/java-se/JVM/jvm-optimize"},next:{title:"\u6df1\u5165\u7406\u89e3Java\u5bf9\u8c61\u5934Mark Word",permalink:"/docs/java/java-se/JVM/Java-object-header"}},u={},o=[{value:"\u5185\u5b58\u7ba1\u7406\u76f8\u5173\u53c2\u6570",id:"\u5185\u5b58\u7ba1\u7406\u76f8\u5173\u53c2\u6570",level:2},{value:"-Xmx\u548c-Xms",id:"-xmx\u548c-xms",level:3},{value:"-XX:NewRatio\u548c-XX:SurvivorRatio",id:"-xxnewratio\u548c-xxsurvivorratio",level:3},{value:"-XX:MaxMetaspaceSize",id:"-xxmaxmetaspacesize",level:3},{value:"-Xmn",id:"-xmn",level:3},{value:"\u5783\u573e\u56de\u6536\u76f8\u5173\u53c2\u6570",id:"\u5783\u573e\u56de\u6536\u76f8\u5173\u53c2\u6570",level:2},{value:"-XX:+UseG1GC",id:"-xxuseg1gc",level:3},{value:"-XX:ParallelGCThreads\u548c-XX:ConcGCThreads",id:"-xxparallelgcthreads\u548c-xxconcgcthreads",level:3},{value:"-XX:+ExplicitGCInvokesConcurrent",id:"-xxexplicitgcinvokesconcurrent",level:3},{value:"\u6027\u80fd\u76d1\u63a7\u548c\u8c03\u4f18\u53c2\u6570",id:"\u6027\u80fd\u76d1\u63a7\u548c\u8c03\u4f18\u53c2\u6570",level:2},{value:"-XX:+PrintGCDetails\u548c-XX:+PrintGCDateStamps",id:"-xxprintgcdetails\u548c-xxprintgcdatestamps",level:3},{value:"-XX:+HeapDumpOnOutOfMemoryError\u548c-XX:HeapDumpPath",id:"-xxheapdumponoutofmemoryerror\u548c-xxheapdumppath",level:3},{value:"-XX:ThreadStackSize",id:"-xxthreadstacksize",level:3},{value:"-XX:MaxDirectMemorySize",id:"-xxmaxdirectmemorysize",level:3},{value:"\u5176\u4ed6\u53c2\u6570",id:"\u5176\u4ed6\u53c2\u6570",level:2},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2}],m={toc:o},s="wrapper";function c(e){let{components:a,...t}=e;return(0,n.kt)(s,(0,l.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u5728Java\u5e94\u7528\u7a0b\u5e8f\u7684\u90e8\u7f72\u548c\u8c03\u4f18\u8fc7\u7a0b\u4e2d\uff0c\u5408\u7406\u914d\u7f6eJVM\u53c2\u6570\u662f\u63d0\u5347\u6027\u80fd\u548c\u7a33\u5b9a\u6027\u7684\u5173\u952e\u4e4b\u4e00\u3002\u672c\u6587\u5c06\u4ecb\u7ecd\u4e00\u4e9b\u5e38\u7528\u7684JVM\u53c2\u6570\uff0c\u5e76\u7ed9\u51fa\u5177\u4f53\u7684\u4f7f\u7528\u4f8b\u5b50\u548c\u4f5c\u7528\u7684\u5206\u6790\u3002"),(0,n.kt)("h2",{id:"\u5185\u5b58\u7ba1\u7406\u76f8\u5173\u53c2\u6570"},"\u5185\u5b58\u7ba1\u7406\u76f8\u5173\u53c2\u6570"),(0,n.kt)("h3",{id:"-xmx\u548c-xms"},"-Xmx\u548c-Xms"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"-Xmx"),"\u53c2\u6570\u7528\u4e8e\u8bbe\u7f6eJVM\u7684\u6700\u5927\u5806\u5185\u5b58\u5927\u5c0f\uff0c\u800c",(0,n.kt)("inlineCode",{parentName:"p"},"-Xms"),"\u53c2\u6570\u7528\u4e8e\u8bbe\u7f6eJVM\u7684\u521d\u59cb\u5806\u5185\u5b58\u5927\u5c0f\u3002\u8fd9\u4e24\u4e2a\u53c2\u6570\u53ef\u4ee5\u5728\u542f\u52a8\u65f6\u901a\u8fc7\u547d\u4ee4\u884c\u8fdb\u884c\u914d\u7f6e\uff0c\u4f8b\u5982\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"java -Xmx2g -Xms512m MyApp\n")),(0,n.kt)("p",null,"\u4e0a\u8ff0\u793a\u4f8b\u5c06JVM\u7684\u6700\u5927\u5806\u5185\u5b58\u8bbe\u7f6e\u4e3a2GB\uff0c\u521d\u59cb\u5806\u5185\u5b58\u8bbe\u7f6e\u4e3a512MB\u3002"),(0,n.kt)("p",null,"\u4f5c\u7528\u5206\u6790\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u8f83\u5927\u7684\u6700\u5927\u5806\u5185\u5b58\u53ef\u4ee5\u589e\u52a0\u5e94\u7528\u7a0b\u5e8f\u7684\u53ef\u7528\u5185\u5b58\u7a7a\u95f4\uff0c\u63d0\u9ad8\u6027\u80fd\u3002\u4f46\u4e5f\u9700\u8981\u8003\u8651\u670d\u52a1\u5668\u786c\u4ef6\u8d44\u6e90\u7684\u9650\u5236\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u5408\u7406\u8bbe\u7f6e\u521d\u59cb\u5806\u5185\u5b58\u5927\u5c0f\u53ef\u4ee5\u51cf\u5c11JVM\u7684\u81ea\u52a8\u6269\u5bb9\u548c\u6536\u7f29\u5f00\u9500\u3002")),(0,n.kt)("h3",{id:"-xxnewratio\u548c-xxsurvivorratio"},"-XX:NewRatio\u548c-XX:SurvivorRatio"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"-XX:NewRatio"),"\u53c2\u6570\u7528\u4e8e\u8bbe\u7f6e\u65b0\u751f\u4ee3\u4e0e\u8001\u5e74\u4ee3\u7684\u6bd4\u4f8b\uff0c\u9ed8\u8ba4\u503c\u4e3a2\u3002\u800c",(0,n.kt)("inlineCode",{parentName:"p"},"-XX:SurvivorRatio"),"\u53c2\u6570\u7528\u4e8e\u8bbe\u7f6eEden\u533a\u4e0eSurvivor\u533a\u7684\u6bd4\u4f8b\uff0c\u9ed8\u8ba4\u503c\u4e3a8\u3002"),(0,n.kt)("p",null,"\u4f8b\u5982\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u53c2\u6570\u914d\u7f6e\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"java -XX:NewRatio=3 -XX:SurvivorRatio=4 MyApp\n")),(0,n.kt)("p",null,"\u4f5c\u7528\u5206\u6790\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u8c03\u6574\u65b0\u751f\u4ee3\u4e0e\u8001\u5e74\u4ee3\u7684\u6bd4\u4f8b\u53ef\u4ee5\u6839\u636e\u5e94\u7528\u7a0b\u5e8f\u7684\u7279\u70b9\u6765\u4f18\u5316\u5185\u5b58\u5206\u914d\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u8c03\u6574Eden\u533a\u4e0eSurvivor\u533a\u7684\u6bd4\u4f8b\u53ef\u4ee5\u63a7\u5236\u5bf9\u8c61\u5728\u65b0\u751f\u4ee3\u4e2d\u7684\u5b58\u6d3b\u65f6\u95f4\u3002")),(0,n.kt)("h3",{id:"-xxmaxmetaspacesize"},"-XX:MaxMetaspaceSize"),(0,n.kt)("p",null,"\u5728Java 8\u53ca\u4e4b\u540e\u7684\u7248\u672c\u4e2d\uff0c",(0,n.kt)("inlineCode",{parentName:"p"},"-XX:MaxMetaspaceSize"),"\u53c2\u6570\u7528\u4e8e\u8bbe\u7f6e\u5143\u7a7a\u95f4\uff08Metaspace\uff09\u7684\u6700\u5927\u5927\u5c0f\u3002\u4f8b\u5982\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"java -XX:MaxMetaspaceSize=512m MyApp\n")),(0,n.kt)("p",null,"\u4f5c\u7528\u5206\u6790\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5143\u7a7a\u95f4\u7528\u4e8e\u5b58\u50a8\u7c7b\u7684\u5143\u6570\u636e\u4fe1\u606f\uff0c\u5305\u62ec\u7c7b\u7684\u7ed3\u6784\u3001\u65b9\u6cd5\u3001\u5b57\u6bb5\u7b49\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u8c03\u6574\u5143\u7a7a\u95f4\u7684\u6700\u5927\u5927\u5c0f\u53ef\u4ee5\u907f\u514d\u5143\u7a7a\u95f4\u6ea2\u51fa\u7684\u95ee\u9898\uff0c\u63d0\u9ad8\u5e94\u7528\u7a0b\u5e8f\u7684\u7a33\u5b9a\u6027\u3002")),(0,n.kt)("h3",{id:"-xmn"},"-Xmn"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"-Xmn"),"\u53c2\u6570\u7528\u4e8e\u8bbe\u7f6e\u65b0\u751f\u4ee3\u7684\u5927\u5c0f\u3002\u4ee5\u4e0b\u662f\u4e00\u4e2a\u4f8b\u5b50\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"java -Xmn256m MyApp\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-Xmn256m"),"\u5c06\u65b0\u751f\u4ee3\u7684\u5927\u5c0f\u8bbe\u7f6e\u4e3a256MB\u3002")),(0,n.kt)("p",null,"\u4f5c\u7528\u5206\u6790\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u65b0\u751f\u4ee3\u4e3b\u8981\u5b58\u653e\u65b0\u521b\u5efa\u7684\u5bf9\u8c61\uff0c\u8bbe\u7f6e\u5408\u9002\u7684\u5927\u5c0f\u53ef\u4ee5\u63d0\u9ad8\u5783\u573e\u56de\u6536\u7684\u6548\u7387\u3002")),(0,n.kt)("h2",{id:"\u5783\u573e\u56de\u6536\u76f8\u5173\u53c2\u6570"},"\u5783\u573e\u56de\u6536\u76f8\u5173\u53c2\u6570"),(0,n.kt)("h3",{id:"-xxuseg1gc"},"-XX:+UseG1GC"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"-XX:+UseG1GC"),"\u53c2\u6570\u7528\u4e8e\u542f\u7528G1\u5783\u573e\u56de\u6536\u5668\u3002\u4f8b\u5982\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"java -XX:+UseG1GC MyApp\n")),(0,n.kt)("p",null,"\u4f5c\u7528\u5206\u6790\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"G1\u5783\u573e\u56de\u6536\u5668\u662fJava 9\u53ca\u4e4b\u540e\u7248\u672c\u7684\u9ed8\u8ba4\u5783\u573e\u56de\u6536\u5668\uff0c\u5177\u6709\u66f4\u597d\u7684\u5783\u573e\u56de\u6536\u6027\u80fd\u548c\u53ef\u9884\u6d4b\u7684\u6682\u505c\u65f6\u95f4\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u4f7f\u7528G1\u5783\u573e\u56de\u6536\u5668\u53ef\u4ee5\u51cf\u5c11\u5783\u573e\u56de\u6536\u7684\u505c\u987f\u65f6\u95f4\uff0c\u63d0\u9ad8\u5e94\u7528\u7a0b\u5e8f\u7684\u541e\u5410\u91cf\u3002")),(0,n.kt)("h3",{id:"-xxparallelgcthreads\u548c-xxconcgcthreads"},"-XX:ParallelGCThreads\u548c-XX:ConcGCThreads"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"-XX:ParallelGCThreads"),"\u53c2\u6570\u7528\u4e8e\u8bbe\u7f6e\u5e76\u884c\u5783\u573e\u56de\u6536\u5668\u7684\u7ebf\u7a0b\u6570\u91cf\uff0c\u800c",(0,n.kt)("inlineCode",{parentName:"p"},"-XX:ConcGCThreads"),"\u53c2\u6570\u7528\u4e8e\u8bbe\u7f6e\u5e76\u53d1\u5783\u573e\u56de\u6536\u5668\u7684\u7ebf\u7a0b\u6570\u91cf\u3002\u4f8b\u5982\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"java -XX:ParallelGCThreads=4 -XX:ConcGCThreads=2 MyApp\n")),(0,n.kt)("p",null,"\u4f5c\u7528\u5206\u6790\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5e76\u884c\u5783\u573e\u56de\u6536\u5668\u901a\u8fc7\u4f7f\u7528\u591a\u4e2a\u7ebf\u7a0b\u6765\u5e76\u884c\u6267\u884c\u5783\u573e\u56de\u6536\u64cd\u4f5c\uff0c\u63d0\u9ad8\u56de\u6536\u6548\u7387\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u5e76\u53d1\u5783\u573e\u56de\u6536\u5668\u5728\u5e94\u7528\u7a0b\u5e8f\u8fd0\u884c\u7684\u540c\u65f6\u6267\u884c\u5783\u573e\u56de\u6536\u64cd\u4f5c\uff0c\u51cf\u5c11\u505c\u987f\u65f6\u95f4\u3002")),(0,n.kt)("h3",{id:"-xxexplicitgcinvokesconcurrent"},"-XX:+ExplicitGCInvokesConcurrent"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"-XX:+ExplicitGCInvokesConcurrent"),"\u53c2\u6570\u7528\u4e8e\u5141\u8bb8\u4e3b\u52a8\u89e6\u53d1\u5e76\u53d1\u5783\u573e\u56de\u6536\u3002\u4f8b\u5982\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"java -XX:+ExplicitGCInvokesConcurrent MyApp\n")),(0,n.kt)("p",null,"\u4f5c\u7528\u5206\u6790\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5f53\u8c03\u7528",(0,n.kt)("inlineCode",{parentName:"li"},"System.gc()"),"\u65b9\u6cd5\u65f6\uff0cJVM\u4f1a\u4f7f\u7528\u4e32\u884c\u5783\u573e\u56de\u6536\u5668\u6267\u884c\u5783\u573e\u56de\u6536\u64cd\u4f5c\u3002\u4f7f\u7528\u8be5\u53c2\u6570\u53ef\u4ee5\u6539\u4e3a\u4f7f\u7528\u5e76\u53d1\u5783\u573e\u56de\u6536\u5668\u6267\u884c\u5783\u573e\u56de\u6536\u64cd\u4f5c\uff0c\u51cf\u5c11\u505c\u987f\u65f6\u95f4\u3002")),(0,n.kt)("h2",{id:"\u6027\u80fd\u76d1\u63a7\u548c\u8c03\u4f18\u53c2\u6570"},"\u6027\u80fd\u76d1\u63a7\u548c\u8c03\u4f18\u53c2\u6570"),(0,n.kt)("h3",{id:"-xxprintgcdetails\u548c-xxprintgcdatestamps"},"-XX:+PrintGCDetails\u548c-XX:+PrintGCDateStamps"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"-XX:+PrintGCDetails"),"\u53c2\u6570\u7528\u4e8e\u6253\u5370\u8be6\u7ec6\u7684\u5783\u573e\u56de\u6536\u4fe1\u606f\uff0c",(0,n.kt)("inlineCode",{parentName:"p"},"-XX:+PrintGCDateStamps"),"\u53c2\u6570\u7528\u4e8e\u6253\u5370\u5783\u573e\u56de\u6536\u53d1\u751f\u7684\u65f6\u95f4\u6233\u3002\u4f8b\u5982\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"java -XX:+PrintGCDetails -XX:+PrintGCDateStamps MyApp\n")),(0,n.kt)("p",null,"\u4f5c\u7528\u5206\u6790\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u6253\u5370\u5783\u573e\u56de\u6536\u7684\u8be6\u7ec6\u4fe1\u606f\u53ef\u4ee5\u5e2e\u52a9\u6211\u4eec\u4e86\u89e3\u5783\u573e\u56de\u6536\u5668\u7684\u5de5\u4f5c\u60c5\u51b5\uff0c\u68c0\u6d4b\u6f5c\u5728\u7684\u6027\u80fd\u95ee\u9898\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u6253\u5370\u5783\u573e\u56de\u6536\u53d1\u751f\u7684\u65f6\u95f4\u6233\u53ef\u4ee5\u5e2e\u52a9\u6211\u4eec\u5206\u6790\u5e94\u7528\u7a0b\u5e8f\u7684\u5783\u573e\u56de\u6536\u6a21\u5f0f\u548c\u9891\u7387\u3002")),(0,n.kt)("h3",{id:"-xxheapdumponoutofmemoryerror\u548c-xxheapdumppath"},"-XX:+HeapDumpOnOutOfMemoryError\u548c-XX:HeapDumpPath"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"-XX:+HeapDumpOnOutOfMemoryError"),"\u53c2\u6570\u7528\u4e8e\u5728\u53d1\u751f\u5185\u5b58\u6ea2\u51fa\u9519\u8bef\u65f6\u751f\u6210\u5806\u8f6c\u50a8\u6587\u4ef6\uff0c",(0,n.kt)("inlineCode",{parentName:"p"},"-XX:HeapDumpPath"),"\u53c2\u6570\u7528\u4e8e\u6307\u5b9a\u5806\u8f6c\u50a8\u6587\u4ef6\u7684\u8def\u5f84\u3002\u4f8b\u5982\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"java -XX:+HeapDumpOnOutOfMemoryError -XX:HeapDumpPath=/path/to/dump/file MyApp\n")),(0,n.kt)("p",null,"\u4f5c\u7528\u5206\u6790\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5728\u53d1\u751f\u5185\u5b58\u6ea2\u51fa\u9519\u8bef\u65f6\u751f\u6210\u5806\u8f6c\u50a8\u6587\u4ef6\u53ef\u4ee5\u5e2e\u52a9\u6211\u4eec\u5206\u6790\u5e94\u7528\u7a0b\u5e8f\u7684\u5185\u5b58\u4f7f\u7528\u60c5\u51b5\uff0c\u5b9a\u4f4d\u5185\u5b58\u6cc4\u6f0f\u548c\u6027\u80fd\u74f6\u9888\u3002")),(0,n.kt)("h3",{id:"-xxthreadstacksize"},"-XX:ThreadStackSize"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"-XX:ThreadStackSize"),"\u53c2\u6570\u7528\u4e8e\u8bbe\u7f6e\u7ebf\u7a0b\u6808\u7684\u5927\u5c0f\u3002\u4ee5\u4e0b\u662f\u4e00\u4e2a\u4f8b\u5b50\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"java -XX:ThreadStackSize=256k MyApp\n")),(0,n.kt)("p",null,"\u4f5c\u7528\u5206\u6790\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u7ebf\u7a0b\u6808\u7528\u4e8e\u5b58\u50a8\u7ebf\u7a0b\u6267\u884c\u65f6\u7684\u65b9\u6cd5\u8c03\u7528\u548c\u5c40\u90e8\u53d8\u91cf\u7b49\u4fe1\u606f\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u8c03\u6574\u7ebf\u7a0b\u6808\u7684\u5927\u5c0f\uff0c\u53ef\u4ee5\u63a7\u5236\u5e94\u7528\u7a0b\u5e8f\u4e2d\u7ebf\u7a0b\u7684\u6570\u91cf\u548c\u8d44\u6e90\u6d88\u8017\u3002")),(0,n.kt)("h3",{id:"-xxmaxdirectmemorysize"},"-XX:MaxDirectMemorySize"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"-XX:MaxDirectMemorySize"),"\u53c2\u6570\u7528\u4e8e\u8bbe\u7f6e\u76f4\u63a5\u5185\u5b58\u7684\u6700\u5927\u5927\u5c0f\u3002\u4ee5\u4e0b\u662f\u4e00\u4e2a\u4f8b\u5b50\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"java -XX:MaxDirectMemorySize=1g MyApp\n")),(0,n.kt)("p",null,"\u4f5c\u7528\u5206\u6790\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u76f4\u63a5\u5185\u5b58\u662fJava\u5806\u5916\u7684\u5185\u5b58\uff0c\u7531",(0,n.kt)("inlineCode",{parentName:"li"},"ByteBuffer"),"\u7b49\u7c7b\u4f7f\u7528\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u5408\u7406\u8bbe\u7f6e\u76f4\u63a5\u5185\u5b58\u7684\u6700\u5927\u5927\u5c0f\u53ef\u4ee5\u907f\u514d\u76f4\u63a5\u5185\u5b58\u6ea2\u51fa\u7684\u95ee\u9898\uff0c\u63d0\u9ad8\u5e94\u7528\u7a0b\u5e8f\u7684\u7a33\u5b9a\u6027\u3002")),(0,n.kt)("h2",{id:"\u5176\u4ed6\u53c2\u6570"},"\u5176\u4ed6\u53c2\u6570"),(0,n.kt)("p",null,"\u9664\u4e86\u4e0a\u8ff0\u4ecb\u7ecd\u7684\u5e38\u7528JVM\u53c2\u6570\uff0c\u8fd8\u6709\u4e00\u4e9b\u5176\u4ed6\u53c2\u6570\u53ef\u4ee5\u6839\u636e\u5177\u4f53\u9700\u6c42\u8fdb\u884c\u914d\u7f6e\uff0c\u5982\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-XX:+DisableExplicitGC"),"\uff1a\u7981\u6b62\u4e3b\u52a8\u8c03\u7528",(0,n.kt)("inlineCode",{parentName:"li"},"System.gc()"),"\u65b9\u6cd5\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-XX:+UseCompressedOops"),"\uff1a\u542f\u7528\u6307\u9488\u538b\u7f29\u4ee5\u51cf\u5c0f\u5bf9\u8c61\u5f15\u7528\u7684\u5185\u5b58\u5360\u7528\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-XX:OnOutOfMemoryError"),"\uff1a\u5728\u53d1\u751fOutOfMemoryError\u65f6\u6267\u884c\u7279\u5b9a\u7684\u547d\u4ee4\u6216\u811a\u672c\u3002")),(0,n.kt)("p",null,"\u8fd9\u4e9b\u53c2\u6570\u53ef\u4ee5\u6839\u636e\u5e94\u7528\u7a0b\u5e8f\u7684\u7279\u70b9\u548c\u9700\u6c42\u8fdb\u884c\u8c03\u4f18\u548c\u914d\u7f6e\uff0c\u4ee5\u63d0\u5347\u5e94\u7528\u7a0b\u5e8f\u7684\u6027\u80fd\u548c\u7a33\u5b9a\u6027\u3002"),(0,n.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,n.kt)("p",null,"\u672c\u6587\u4ecb\u7ecd\u4e86\u4e00\u4e9b\u5e38\u7528\u7684JVM\u53c2\u6570\uff0c\u5e76\u7ed9\u51fa\u4e86\u5177\u4f53\u7684\u4f7f\u7528\u4f8b\u5b50\u548c\u4f5c\u7528\u5206\u6790\u3002\u5408\u7406\u914d\u7f6e\u8fd9\u4e9b\u53c2\u6570\u53ef\u4ee5\u4f18\u5316\u5185\u5b58\u7ba1\u7406\u3001\u5783\u573e\u56de\u6536\u3001\u6027\u80fd\u76d1\u63a7\u7b49\u65b9\u9762\uff0c\u63d0\u5347Java\u5e94\u7528\u7a0b\u5e8f\u7684\u6027\u80fd\u548c\u7a33\u5b9a\u6027\u3002"),(0,n.kt)("p",null,"\u5728\u5b9e\u9645\u5e94\u7528\u4e2d\uff0c\u5efa\u8bae\u6839\u636e\u5e94\u7528\u7a0b\u5e8f\u7684\u9700\u6c42\u548c\u6027\u80fd\u7279\u70b9\uff0c\u7efc\u5408\u8003\u8651\u4e0d\u540c\u53c2\u6570\u7684\u4f7f\u7528\u3002\u540c\u65f6\uff0c\u4f7f\u7528\u5de5\u5177\u8fdb\u884c\u6027\u80fd\u76d1\u63a7\u548c\u5206\u6790\uff0c\u4ee5\u627e\u51fa\u6f5c\u5728\u7684\u95ee\u9898\u548c\u74f6\u9888\uff0c\u5e76\u6839\u636e\u5b9e\u9645\u60c5\u51b5\u8fdb\u884c\u8c03\u4f18\u3002"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u6211\u662f\u8682\u8681\u80cc\u5927\u8c61\uff0c\u6587\u7ae0\u5bf9\u4f60\u6709\u5e2e\u52a9\u7ed9",(0,n.kt)("a",{parentName:"p",href:"https://github.com/mxsm/mxsm-website"},"\u9879\u76ee\u70b9\u4e2a\u2764"),"\u5173\u6ce8\u6211",(0,n.kt)("a",{parentName:"p",href:"https://github.com/mxsm"},"GitHub:mxsm"),"\uff0c\u6587\u7ae0\u6709\u4e0d\u6b63\u786e\u7684\u5730\u65b9\u8bf7\u60a8\u65a7\u6b63,\u521b\u5efa",(0,n.kt)("a",{parentName:"p",href:"https://github.com/mxsm/mxsm-website/issues"},"ISSUE\u63d0\u4ea4PR"),"~","\u8c22\u8c22!")))}c.isMDXComponent=!0}}]);