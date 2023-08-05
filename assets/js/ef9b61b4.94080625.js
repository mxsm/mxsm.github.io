"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[9580],{3905:(e,a,t)=>{t.d(a,{Zo:()=>m,kt:()=>k});var l=t(7294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);a&&(l=l.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,l)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,l,n=function(e,a){if(null==e)return{};var t,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)t=r[l],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)t=r[l],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var u=l.createContext({}),o=function(e){var a=l.useContext(u),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},m=function(e){var a=o(e.components);return l.createElement(u.Provider,{value:a},e.children)},s="mdxType",v={inlineCode:"code",wrapper:function(e){var a=e.children;return l.createElement(l.Fragment,{},a)}},d=l.forwardRef((function(e,a){var t=e.components,n=e.mdxType,r=e.originalType,u=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),s=o(t),d=n,k=s["".concat(u,".").concat(d)]||s[d]||v[d]||r;return t?l.createElement(k,i(i({ref:a},m),{},{components:t})):l.createElement(k,i({ref:a},m))}));function k(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=t.length,i=new Array(r);i[0]=d;var p={};for(var u in a)hasOwnProperty.call(a,u)&&(p[u]=a[u]);p.originalType=e,p[s]="string"==typeof e?e:n,i[1]=p;for(var o=2;o<r;o++)i[o]=t[o];return l.createElement.apply(null,i)}return l.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1530:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>u,contentTitle:()=>i,default:()=>v,frontMatter:()=>r,metadata:()=>p,toc:()=>o});var l=t(7462),n=(t(7294),t(3905));const r={title:"JVM\u8c03\u4f18\u5b9e\u6218\uff1a\u4f18\u5316Java\u5e94\u7528\u7a0b\u5e8f\u7684\u6027\u80fd",linkTitle:"JVM\u8c03\u4f18\u5b9e\u6218\uff1a\u4f18\u5316Java\u5e94\u7528\u7a0b\u5e8f\u7684\u6027\u80fd",weight:202305192345,description:"JVM\u8c03\u4f18\u5b9e\u6218\uff1a\u4f18\u5316Java\u5e94\u7528\u7a0b\u5e8f\u7684\u6027\u80fd"},i=void 0,p={unversionedId:"java/java-se/JVM/jvm-optimize",id:"java/java-se/JVM/jvm-optimize",title:"JVM\u8c03\u4f18\u5b9e\u6218\uff1a\u4f18\u5316Java\u5e94\u7528\u7a0b\u5e8f\u7684\u6027\u80fd",description:"JVM\u8c03\u4f18\u5b9e\u6218\uff1a\u4f18\u5316Java\u5e94\u7528\u7a0b\u5e8f\u7684\u6027\u80fd",source:"@site/docs/java/java-se/JVM/01-jvm-optimize.md",sourceDirName:"java/java-se/JVM",slug:"/java/java-se/JVM/jvm-optimize",permalink:"/docs/java/java-se/JVM/jvm-optimize",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/java/java-se/JVM/01-jvm-optimize.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1691228615,formattedLastUpdatedAt:"Aug 5, 2023",sidebarPosition:1,frontMatter:{title:"JVM\u8c03\u4f18\u5b9e\u6218\uff1a\u4f18\u5316Java\u5e94\u7528\u7a0b\u5e8f\u7684\u6027\u80fd",linkTitle:"JVM\u8c03\u4f18\u5b9e\u6218\uff1a\u4f18\u5316Java\u5e94\u7528\u7a0b\u5e8f\u7684\u6027\u80fd",weight:202305192345,description:"JVM\u8c03\u4f18\u5b9e\u6218\uff1a\u4f18\u5316Java\u5e94\u7528\u7a0b\u5e8f\u7684\u6027\u80fd"},sidebar:"javase",previous:{title:"Overview",permalink:"/docs/java/java-se"},next:{title:"Java\u5e38\u7528JVM\u53c2\u6570\u5b9e\u6218",permalink:"/docs/java/java-se/JVM/jvm-adjust"}},u={},o=[{value:"1. JVM\u8c03\u4f18\u6982\u8ff0",id:"1-jvm\u8c03\u4f18\u6982\u8ff0",level:2},{value:"2. \u5185\u5b58\u7ba1\u7406\u8c03\u4f18",id:"2-\u5185\u5b58\u7ba1\u7406\u8c03\u4f18",level:2},{value:"2.1 \u8c03\u6574\u5806\u5185\u5b58\u5927\u5c0f",id:"21-\u8c03\u6574\u5806\u5185\u5b58\u5927\u5c0f",level:3},{value:"2.2 \u9009\u62e9\u5408\u9002\u7684\u5783\u573e\u56de\u6536\u5668",id:"22-\u9009\u62e9\u5408\u9002\u7684\u5783\u573e\u56de\u6536\u5668",level:3},{value:"2.3 \u8c03\u6574\u5783\u573e\u56de\u6536\u5668\u53c2\u6570",id:"23-\u8c03\u6574\u5783\u573e\u56de\u6536\u5668\u53c2\u6570",level:3},{value:"3. \u5783\u573e\u56de\u6536\u8c03\u4f18",id:"3-\u5783\u573e\u56de\u6536\u8c03\u4f18",level:2},{value:"3.1 \u76d1\u63a7\u548c\u5206\u6790\u5783\u573e\u56de\u6536\u60c5\u51b5",id:"31-\u76d1\u63a7\u548c\u5206\u6790\u5783\u573e\u56de\u6536\u60c5\u51b5",level:3},{value:"GC\u65e5\u5fd7\u8f93\u51fa",id:"gc\u65e5\u5fd7\u8f93\u51fa",level:4},{value:"\u4f7f\u7528VisualVM\u8fdb\u884c\u76d1\u63a7",id:"\u4f7f\u7528visualvm\u8fdb\u884c\u76d1\u63a7",level:4},{value:"\u4f7f\u7528JMX\u8fdb\u884c\u8fdc\u7a0b\u76d1\u63a7",id:"\u4f7f\u7528jmx\u8fdb\u884c\u8fdc\u7a0b\u76d1\u63a7",level:4},{value:"3.2 \u8c03\u6574\u5783\u573e\u56de\u6536\u53c2\u6570",id:"32-\u8c03\u6574\u5783\u573e\u56de\u6536\u53c2\u6570",level:3},{value:"4. \u7ebf\u7a0b\u7ba1\u7406\u8c03\u4f18",id:"4-\u7ebf\u7a0b\u7ba1\u7406\u8c03\u4f18",level:2},{value:"4.1 \u8c03\u6574\u7ebf\u7a0b\u6c60\u5927\u5c0f",id:"41-\u8c03\u6574\u7ebf\u7a0b\u6c60\u5927\u5c0f",level:3},{value:"4.2 \u7ebf\u7a0b Dump \u5206\u6790",id:"42-\u7ebf\u7a0b-dump-\u5206\u6790",level:3},{value:"\u83b7\u53d6\u7ebf\u7a0b Dump",id:"\u83b7\u53d6\u7ebf\u7a0b-dump",level:4},{value:"5. \u7c7b\u52a0\u8f7d\u5668\u4f18\u5316",id:"5-\u7c7b\u52a0\u8f7d\u5668\u4f18\u5316",level:2},{value:"5.1 \u51cf\u5c11\u7c7b\u52a0\u8f7d\u5668\u5c42\u6b21",id:"51-\u51cf\u5c11\u7c7b\u52a0\u8f7d\u5668\u5c42\u6b21",level:3},{value:"5.2 \u7c7b\u7684\u9884\u52a0\u8f7d",id:"52-\u7c7b\u7684\u9884\u52a0\u8f7d",level:3},{value:"6. \u7f16\u8bd1\u5668\u4f18\u5316",id:"6-\u7f16\u8bd1\u5668\u4f18\u5316",level:2},{value:"6.1 \u4f7f\u7528\u5373\u65f6\u7f16\u8bd1\u5668\uff08JIT\uff09",id:"61-\u4f7f\u7528\u5373\u65f6\u7f16\u8bd1\u5668jit",level:3},{value:"6.2 \u65b9\u6cd5\u5185\u8054",id:"62-\u65b9\u6cd5\u5185\u8054",level:3},{value:"7. \u603b\u7ed3",id:"7-\u603b\u7ed3",level:2}],m={toc:o},s="wrapper";function v(e){let{components:a,...t}=e;return(0,n.kt)(s,(0,l.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u4f5c\u4e3aJava\u5f00\u53d1\u4eba\u5458\u548c\u7cfb\u7edf\u67b6\u6784\u5e08\uff0c\u4e86\u89e3\u5e76\u638c\u63e1JVM\u8c03\u4f18\u662f\u63d0\u9ad8Java\u5e94\u7528\u7a0b\u5e8f\u6027\u80fd\u7684\u5173\u952e\u3002\u672c\u6587\u5c06\u7ed3\u5408\u7406\u8bba\u548c\u5b9e\u8df5\uff0c\u4ecb\u7ecd\u4e00\u4e9b\u5e38\u7528\u7684JVM\u8c03\u4f18\u6280\u672f\u548c\u5b9e\u6218\u6848\u4f8b\uff0c\u5e2e\u52a9\u4f60\u4f18\u5316Java\u5e94\u7528\u7a0b\u5e8f\u7684\u6027\u80fd\u3002"),(0,n.kt)("h2",{id:"1-jvm\u8c03\u4f18\u6982\u8ff0"},"1. JVM\u8c03\u4f18\u6982\u8ff0"),(0,n.kt)("p",null,"JVM\uff08Java\u865a\u62df\u673a\uff09\u662f\u6267\u884cJava\u5b57\u8282\u7801\u7684\u8fd0\u884c\u73af\u5883\uff0c\u800cJVM\u8c03\u4f18\u662f\u901a\u8fc7\u8c03\u6574JVM\u53c2\u6570\u548c\u914d\u7f6e\uff0c\u4f18\u5316Java\u5e94\u7528\u7a0b\u5e8f\u7684\u6027\u80fd\u548c\u8d44\u6e90\u5229\u7528\u7387\u3002\u4ee5\u4e0b\u662f\u4e00\u4e9b\u5e38\u89c1\u7684JVM\u8c03\u4f18\u65b9\u9762\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u5185\u5b58\u7ba1\u7406"),"\uff1a\u8c03\u6574\u5806\u5185\u5b58\u3001\u975e\u5806\u5185\u5b58\u3001\u5783\u573e\u56de\u6536\u5668\u7b49\u53c2\u6570\uff0c\u4f18\u5316\u5185\u5b58\u5206\u914d\u548c\u56de\u6536\u7b56\u7565\uff0c\u907f\u514d\u5185\u5b58\u6cc4\u6f0f\u548c\u9891\u7e41\u7684\u5783\u573e\u56de\u6536\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u5783\u573e\u56de\u6536\u8c03\u4f18"),"\uff1a\u9009\u62e9\u5408\u9002\u7684\u5783\u573e\u56de\u6536\u5668\uff0c\u8c03\u6574\u5783\u573e\u56de\u6536\u5668\u7684\u53c2\u6570\uff0c\u5e73\u8861\u541e\u5410\u91cf\u3001\u54cd\u5e94\u65f6\u95f4\u548c\u5185\u5b58\u5360\u7528\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u7ebf\u7a0b\u7ba1\u7406"),"\uff1a\u4f18\u5316\u7ebf\u7a0b\u6c60\u7684\u5927\u5c0f\u548c\u914d\u7f6e\uff0c\u51cf\u5c11\u7ebf\u7a0b\u7ade\u4e89\u548c\u4e0a\u4e0b\u6587\u5207\u6362\u7684\u5f00\u9500\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u7c7b\u52a0\u8f7d\u5668\u4f18\u5316"),"\uff1a\u4f18\u5316\u7c7b\u52a0\u8f7d\u5668\u7684\u52a0\u8f7d\u548c\u5378\u8f7d\u8fc7\u7a0b\uff0c\u51cf\u5c11\u7c7b\u52a0\u8f7d\u7684\u65f6\u95f4\u548c\u5185\u5b58\u5360\u7528\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u7f16\u8bd1\u5668\u4f18\u5316"),"\uff1a\u4f7f\u7528\u5408\u9002\u7684\u7f16\u8bd1\u5668\u9009\u9879\uff0c\u63d0\u9ad8\u4ee3\u7801\u7684\u6267\u884c\u6548\u7387\u3002")),(0,n.kt)("h2",{id:"2-\u5185\u5b58\u7ba1\u7406\u8c03\u4f18"},"2. \u5185\u5b58\u7ba1\u7406\u8c03\u4f18"),(0,n.kt)("h3",{id:"21-\u8c03\u6574\u5806\u5185\u5b58\u5927\u5c0f"},"2.1 \u8c03\u6574\u5806\u5185\u5b58\u5927\u5c0f"),(0,n.kt)("p",null,"JVM\u7684\u5806\u5185\u5b58\u662fJava\u5e94\u7528\u7a0b\u5e8f\u8fd0\u884c\u65f6\u7684\u4e3b\u8981\u5185\u5b58\u533a\u57df\uff0c\u5305\u62ec\u65b0\u751f\u4ee3\u548c\u8001\u5e74\u4ee3\u3002\u6839\u636e\u5e94\u7528\u7a0b\u5e8f\u7684\u5185\u5b58\u9700\u6c42\uff0c\u53ef\u4ee5\u8c03\u6574\u5806\u5185\u5b58\u7684\u5927\u5c0f\u3002\u4e0b\u9762\u662f\u4e00\u4e2a\u793a\u4f8b\uff0c\u5c06\u5806\u5185\u5b58\u8bbe\u7f6e\u4e3a2GB\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"java -Xmx2g -Xms2g MyApp\n")),(0,n.kt)("h3",{id:"22-\u9009\u62e9\u5408\u9002\u7684\u5783\u573e\u56de\u6536\u5668"},"2.2 \u9009\u62e9\u5408\u9002\u7684\u5783\u573e\u56de\u6536\u5668"),(0,n.kt)("p",null,"JVM\u63d0\u4f9b\u4e86\u591a\u79cd\u5783\u573e\u56de\u6536\u5668\uff0c\u5982Serial\u3001Parallel\u3001CMS\u3001G1\u7b49\u3002\u4e0d\u540c\u7684\u5783\u573e\u56de\u6536\u5668\u9002\u7528\u4e8e\u4e0d\u540c\u7684\u5e94\u7528\u573a\u666f\u3002\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e",(0,n.kt)("inlineCode",{parentName:"p"},"-XX:+UseXXXGC"),"\u53c2\u6570\u9009\u62e9\u5783\u573e\u56de\u6536\u5668\u3002\u4f8b\u5982\uff0c\u9009\u62e9\u5e76\u884c\u5783\u573e\u56de\u6536\u5668\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"java -XX:+UseParallelGC MyApp\n")),(0,n.kt)("h3",{id:"23-\u8c03\u6574\u5783\u573e\u56de\u6536\u5668\u53c2\u6570"},"2.3 \u8c03\u6574\u5783\u573e\u56de\u6536\u5668\u53c2\u6570"),(0,n.kt)("p",null,"\u6bcf\u4e2a\u5783\u573e\u56de\u6536\u5668\u90fd\u6709\u4e00\u4e9b\u53ef\u8c03\u6574\u7684\u53c2\u6570\uff0c\u7528\u4e8e\u5e73\u8861\u541e\u5410\u91cf\u3001\u54cd\u5e94\u65f6\u95f4\u548c\u5185\u5b58\u5360\u7528\u3002\u4f8b\u5982\uff0c\u8c03\u6574\u65b0\u751f\u4ee3\u7684\u5927\u5c0f\u548c\u6bd4\u4f8b\uff0c\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u53c2\u6570\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"java -XX:NewSize=1g -XX:MaxNewSize=1g -XX:SurvivorRatio=8 MyApp\n")),(0,n.kt)("h2",{id:"3-\u5783\u573e\u56de\u6536\u8c03\u4f18"},"3. \u5783\u573e\u56de\u6536\u8c03\u4f18"),(0,n.kt)("h3",{id:"31-\u76d1\u63a7\u548c\u5206\u6790\u5783\u573e\u56de\u6536\u60c5\u51b5"},"3.1 \u76d1\u63a7\u548c\u5206\u6790\u5783\u573e\u56de\u6536\u60c5\u51b5"),(0,n.kt)("p",null,"\u5728\u8fdb\u884c\u5783\u573e\u56de\u6536\u8c03\u4f18\u65f6\uff0c\u76d1\u63a7\u548c\u5206\u6790\u5783\u573e\u56de\u6536\u60c5\u51b5\u662f\u975e\u5e38\u91cd\u8981\u7684\u3002\u53ef\u4ee5\u4f7f\u7528JVM\u63d0\u4f9b\u7684\u5de5\u5177\u548c\u53c2\u6570\u6765\u6536\u96c6\u5783\u573e\u56de\u6536\u76f8\u5173\u7684\u6570\u636e\u3002"),(0,n.kt)("h4",{id:"gc\u65e5\u5fd7\u8f93\u51fa"},"GC\u65e5\u5fd7\u8f93\u51fa"),(0,n.kt)("p",null,"\u901a\u8fc7\u8bbe\u7f6e",(0,n.kt)("inlineCode",{parentName:"p"},"-Xlog:gc"),"\u53c2\u6570\uff0c\u53ef\u4ee5\u8f93\u51faGC\u65e5\u5fd7\uff0c\u5305\u62ecGC\u4e8b\u4ef6\u3001\u8017\u65f6\u3001\u56de\u6536\u5668\u4fe1\u606f\u7b49\u3002\u4f8b\u5982\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"java -Xlog:gc:gc.log MyApp\n")),(0,n.kt)("h4",{id:"\u4f7f\u7528visualvm\u8fdb\u884c\u76d1\u63a7"},"\u4f7f\u7528VisualVM\u8fdb\u884c\u76d1\u63a7"),(0,n.kt)("p",null,"VisualVM\u662f\u4e00\u4e2a\u5f3a\u5927\u7684Java\u76d1\u63a7\u548c\u8c03\u4f18\u5de5\u5177\uff0c\u53ef\u4ee5\u76d1\u63a7\u5e94\u7528\u7a0b\u5e8f\u7684\u5783\u573e\u56de\u6536\u60c5\u51b5\u3001\u5185\u5b58\u4f7f\u7528\u60c5\u51b5\u3001\u7ebf\u7a0b\u72b6\u6001\u7b49\u3002\u53ef\u4ee5\u901a\u8fc7VisualVM\u8fde\u63a5\u5230\u8fd0\u884c\u4e2d\u7684Java\u5e94\u7528\u7a0b\u5e8f\uff0c\u5e76\u5b9e\u65f6\u67e5\u770b\u5783\u573e\u56de\u6536\u76f8\u5173\u7684\u6307\u6807\u3002"),(0,n.kt)("h4",{id:"\u4f7f\u7528jmx\u8fdb\u884c\u8fdc\u7a0b\u76d1\u63a7"},"\u4f7f\u7528JMX\u8fdb\u884c\u8fdc\u7a0b\u76d1\u63a7"),(0,n.kt)("p",null,"JVM\u63d0\u4f9b\u4e86Java Management Extensions\uff08JMX\uff09API\uff0c\u53ef\u4ee5\u901a\u8fc7JMX\u8fdc\u7a0b\u76d1\u63a7Java\u5e94\u7528\u7a0b\u5e8f\u7684\u8fd0\u884c\u60c5\u51b5\u3002\u53ef\u4ee5\u4f7f\u7528JConsole\u6216\u5176\u4ed6JMX\u5ba2\u6237\u7aef\u8fde\u63a5\u5230\u8fd0\u884c\u4e2d\u7684Java\u5e94\u7528\u7a0b\u5e8f\uff0c\u5e76\u67e5\u770b\u5783\u573e\u56de\u6536\u76f8\u5173\u7684\u6307\u6807\u3002"),(0,n.kt)("h3",{id:"32-\u8c03\u6574\u5783\u573e\u56de\u6536\u53c2\u6570"},"3.2 \u8c03\u6574\u5783\u573e\u56de\u6536\u53c2\u6570"),(0,n.kt)("p",null,"\u9488\u5bf9\u4e0d\u540c\u7684\u5e94\u7528\u7a0b\u5e8f\u548c\u573a\u666f\uff0c\u53ef\u4ee5\u8c03\u6574\u5783\u573e\u56de\u6536\u5668\u7684\u53c2\u6570\u4ee5\u8fbe\u5230\u66f4\u597d\u7684\u6027\u80fd\u548c\u541e\u5410\u91cf\u3002\u4ee5\u4e0b\u662f\u4e00\u4e9b\u5e38\u7528\u7684\u5783\u573e\u56de\u6536\u53c2\u6570\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"-XX:GCTimeRatio"),"\uff1a\u8bbe\u7f6e\u541e\u5410\u91cf\u5927\u5c0f\u4e0e\u5783\u573e\u56de\u6536\u65f6\u95f4\u6bd4\u4f8b\u7684\u76ee\u6807\u503c\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"-XX:MaxGCPauseMillis"),"\uff1a\u8bbe\u7f6e\u6700\u5927\u5783\u573e\u56de\u6536\u6682\u505c\u65f6\u95f4\u7684\u76ee\u6807\u503c\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"-XX:ParallelGCThreads"),"\uff1a\u8bbe\u7f6e\u5e76\u884c\u5783\u573e\u56de\u6536\u7684\u7ebf\u7a0b\u6570\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"-XX:ConcGCThreads"),"\uff1a\u8bbe\u7f6e\u5e76\u53d1\u5783\u573e\u56de\u6536\u7684\u7ebf\u7a0b\u6570\u3002")),(0,n.kt)("p",null,"\u8fd9\u4e9b\u53c2\u6570\u7684\u5177\u4f53\u8c03\u6574\u9700\u8981\u6839\u636e\u5e94\u7528\u7a0b\u5e8f\u7684\u7279\u70b9\u548c\u9700\u6c42\u8fdb\u884c\u5b9e\u9a8c\u548c\u8c03\u4f18\u3002"),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"\u8fd9\u91cc\u63a8\u8350\u4e00\u4e2aJava\u547d\u4ee4\u53c2\u6570\u7684\u7f51\u7ad9\uff1a",(0,n.kt)("a",{parentName:"p",href:"https://jacoline.dev/inspect"},"https://jacoline.dev/inspect")," ")),(0,n.kt)("h2",{id:"4-\u7ebf\u7a0b\u7ba1\u7406\u8c03\u4f18"},"4. \u7ebf\u7a0b\u7ba1\u7406\u8c03\u4f18"),(0,n.kt)("h3",{id:"41-\u8c03\u6574\u7ebf\u7a0b\u6c60\u5927\u5c0f"},"4.1 \u8c03\u6574\u7ebf\u7a0b\u6c60\u5927\u5c0f"),(0,n.kt)("p",null,"\u5bf9\u4e8e\u6d89\u53ca\u5927\u91cf\u5e76\u53d1\u64cd\u4f5c\u7684\u5e94\u7528\u7a0b\u5e8f\uff0c\u5408\u7406\u8c03\u6574\u7ebf\u7a0b\u6c60\u7684\u5927\u5c0f\u975e\u5e38\u91cd\u8981\u3002\u8fc7\u5927\u7684\u7ebf\u7a0b\u6c60\u53ef\u80fd\u5bfc\u81f4\u8fc7\u591a\u7684\u7ebf\u7a0b\u7ade\u4e89\u548c\u4e0a\u4e0b\u6587\u5207\u6362\u7684\u5f00\u9500\uff0c\u800c\u8fc7\u5c0f\u7684\u7ebf\u7a0b\u6c60\u53ef\u80fd\u5bfc\u81f4\u4efb\u52a1\u6392\u961f\u7b49\u5f85\u3002"),(0,n.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7\u8c03\u6574\u7ebf\u7a0b\u6c60\u7684\u6838\u5fc3\u7ebf\u7a0b\u6570\u3001\u6700\u5927\u7ebf\u7a0b\u6570\u3001\u961f\u5217\u5bb9\u91cf\u7b49\u53c2\u6570\u6765\u4f18\u5316\u7ebf\u7a0b\u6c60\u7684\u6027\u80fd\u3002\u4e0b\u9762\u662f\u4e00\u4e2a\u793a\u4f8b\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"ExecutorService executorService = Executors.newFixedThreadPool(20);\n")),(0,n.kt)("p",null,"\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c\u6211\u4eec\u521b\u5efa\u4e86\u4e00\u4e2a\u56fa\u5b9a\u5927\u5c0f\u4e3a20\u7684\u7ebf\u7a0b\u6c60\u3002"),(0,n.kt)("h3",{id:"42-\u7ebf\u7a0b-dump-\u5206\u6790"},"4.2 \u7ebf\u7a0b Dump \u5206\u6790"),(0,n.kt)("p",null,"\u7ebf\u7a0b Dump \u662f\u83b7\u53d6 Java \u8fdb\u7a0b\u4e2d\u6240\u6709\u7ebf\u7a0b\u7684\u72b6\u6001\u548c\u5806\u6808\u4fe1\u606f\u7684\u5feb\u7167\u3002\u5f53\u5e94\u7528\u7a0b\u5e8f\u51fa\u73b0\u6027\u80fd\u95ee\u9898\u6216\u7ebf\u7a0b\u95ee\u9898\u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7\u83b7\u53d6\u7ebf\u7a0b Dump \u5e76\u5206\u6790\u7ebf\u7a0b\u7684\u72b6\u6001\u548c\u5806\u6808\u4fe1\u606f\uff0c\u4ee5\u5b9a\u4f4d\u95ee\u9898\u3002"),(0,n.kt)("h4",{id:"\u83b7\u53d6\u7ebf\u7a0b-dump"},"\u83b7\u53d6\u7ebf\u7a0b Dump"),(0,n.kt)("p",null,"\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u65b9\u5f0f\u83b7\u53d6\u7ebf\u7a0b Dump\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u4f7f\u7528JDK\u63d0\u4f9b\u7684",(0,n.kt)("inlineCode",{parentName:"p"},"jstack"),"\u547d\u4ee4\uff1a"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"jstack <pid> > thread_dump.txt\n")),(0,n.kt)("p",{parentName:"li"},"\u5176\u4e2d\uff0c",(0,n.kt)("inlineCode",{parentName:"p"},"<pid>"),"\u662fJava\u8fdb\u7a0b\u7684ID\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u4f7f\u7528VisualVM\u6216\u5176\u4ed6JMX\u5de5\u5177\u83b7\u53d6\u7ebf\u7a0b Dump\u3002"))),(0,n.kt)("p",null,"\u5206\u6790\u7ebf\u7a0b Dump"),(0,n.kt)("p",null,"\u83b7\u53d6\u7ebf\u7a0b Dump\u540e\uff0c\u53ef\u4ee5\u4f7f\u7528\u5de5\u5177\uff08\u5982VisualVM\u3001MAT\uff08Memory Analyzer Tool\uff09\u7b49\uff09\u6765\u5206\u6790\u7ebf\u7a0b\u7684\u72b6\u6001\u548c\u5806\u6808\u4fe1\u606f\u3002\u901a\u8fc7\u5206\u6790\u7ebf\u7a0b Dump\uff0c\u53ef\u4ee5\u53d1\u73b0\u7ebf\u7a0b\u963b\u585e\u3001\u6b7b\u9501\u3001\u7ebf\u7a0b\u7ade\u4e89\u7b49\u95ee\u9898\uff0c\u5e76\u8fdb\u884c\u76f8\u5e94\u7684\u4f18\u5316\u3002"),(0,n.kt)("h2",{id:"5-\u7c7b\u52a0\u8f7d\u5668\u4f18\u5316"},"5. \u7c7b\u52a0\u8f7d\u5668\u4f18\u5316"),(0,n.kt)("h3",{id:"51-\u51cf\u5c11\u7c7b\u52a0\u8f7d\u5668\u5c42\u6b21"},"5.1 \u51cf\u5c11\u7c7b\u52a0\u8f7d\u5668\u5c42\u6b21"),(0,n.kt)("p",null,"Java\u5e94\u7528\u7a0b\u5e8f\u5728\u8fd0\u884c\u8fc7\u7a0b\u4e2d\u4f1a\u4f7f\u7528\u4e0d\u540c\u7684\u7c7b\u52a0\u8f7d\u5668\u52a0\u8f7d\u7c7b\u6587\u4ef6\u3002\u7c7b\u52a0\u8f7d\u5668\u7684\u5c42\u6b21\u7ed3\u6784\u8d8a\u590d\u6742\uff0c\u52a0\u8f7d\u7c7b\u7684\u6548\u7387\u8d8a\u4f4e\u3002\u56e0\u6b64\uff0c\u51cf\u5c11\u7c7b\u52a0\u8f7d\u5668\u5c42\u6b21\u53ef\u4ee5\u63d0\u9ad8\u52a0\u8f7d\u7c7b\u7684\u6027\u80fd\u3002"),(0,n.kt)("p",null,"\u5728\u7f16\u5199\u4ee3\u7801\u65f6\uff0c\u5c3d\u91cf\u907f\u514d\u521b\u5efa\u989d\u5916\u7684\u7c7b\u52a0\u8f7d\u5668\uff0c\u5c3d\u91cf\u4f7f\u7528\u9ed8\u8ba4\u7684\u7cfb\u7edf\u7c7b\u52a0\u8f7d\u5668\u3002"),(0,n.kt)("h3",{id:"52-\u7c7b\u7684\u9884\u52a0\u8f7d"},"5.2 \u7c7b\u7684\u9884\u52a0\u8f7d"),(0,n.kt)("p",null,"\u5728Java\u5e94\u7528\u7a0b\u5e8f\u542f\u52a8\u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7\u9884\u52a0\u8f7d\u4e00\u4e9b\u5e38\u7528\u7684\u7c7b\uff0c\u4ee5\u51cf\u5c11\u5728\u8fd0\u884c\u65f6\u52a8\u6001\u52a0\u8f7d\u7c7b\u7684\u5f00\u9500\u3002\u53ef\u4ee5\u901a\u8fc7\u5728\u542f\u52a8\u811a\u672c\u4e2d\u6dfb\u52a0\u9884\u52a0\u8f7d\u7684\u7c7b\u6765\u5b9e\u73b0\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"java -Xbootclasspath/a:preload.jar MyApp\n")),(0,n.kt)("p",null,"\u5728\u8fd9\u4e2a\u793a\u4f8b\u4e2d\uff0c\u6211\u4eec\u901a\u8fc7",(0,n.kt)("inlineCode",{parentName:"p"},"-Xbootclasspath/a"),"\u53c2\u6570\u6307\u5b9a\u4e86\u4e00\u4e2a\u5305\u542b\u9884\u52a0\u8f7d\u7c7b\u7684JAR\u6587\u4ef6\u3002"),(0,n.kt)("h2",{id:"6-\u7f16\u8bd1\u5668\u4f18\u5316"},"6. \u7f16\u8bd1\u5668\u4f18\u5316"),(0,n.kt)("h3",{id:"61-\u4f7f\u7528\u5373\u65f6\u7f16\u8bd1\u5668jit"},"6.1 \u4f7f\u7528\u5373\u65f6\u7f16\u8bd1\u5668\uff08JIT\uff09"),(0,n.kt)("p",null,"JVM\u7684\u5373\u65f6\u7f16\u8bd1\u5668\uff08JIT\uff09\u53ef\u4ee5\u5c06Java\u5b57\u8282\u7801\u8f6c\u6362\u4e3a\u672c\u5730\u673a\u5668\u4ee3\u7801\uff0c\u63d0\u9ad8\u4ee3\u7801\u7684\u6267\u884c\u6548\u7387\u3002\u786e\u4fddJIT\u7f16\u8bd1\u5668\u5904\u4e8e\u542f\u7528\u72b6\u6001\uff0c\u5e76\u4f7f\u7528\u5408\u9002\u7684\u7f16\u8bd1\u5668\u9009\u9879\u3002"),(0,n.kt)("h3",{id:"62-\u65b9\u6cd5\u5185\u8054"},"6.2 \u65b9\u6cd5\u5185\u8054"),(0,n.kt)("p",null,"\u65b9\u6cd5\u5185\u8054\u662f\u7f16\u8bd1\u5668\u4f18\u5316\u7684\u4e00\u79cd\u6280\u672f\uff0c\u5b83\u5c06\u65b9\u6cd5\u8c03\u7528\u66ff\u6362\u4e3a\u5b9e\u9645\u7684\u65b9\u6cd5\u4f53\uff0c\u51cf\u5c11\u65b9\u6cd5\u8c03\u7528\u7684\u5f00\u9500\u3002\u53ef\u4ee5\u4f7f\u7528",(0,n.kt)("inlineCode",{parentName:"p"},"-XX:+Inline"),"\u53c2\u6570\u542f\u7528\u65b9\u6cd5\u5185\u8054\u4f18\u5316\u3002"),(0,n.kt)("h2",{id:"7-\u603b\u7ed3"},"7. \u603b\u7ed3"),(0,n.kt)("p",null,"\u672c\u6587\u4ecb\u7ecd\u4e86JVM\u8c03\u4f18\u7684\u4e00\u4e9b\u5e38\u7528\u6280\u672f\u548c\u5b9e\u6218\u6848\u4f8b\uff0c\u6db5\u76d6\u4e86\u5185\u5b58\u7ba1\u7406\u3001\u5783\u573e\u56de\u6536\u8c03\u4f18\u3001\u7ebf\u7a0b\u7ba1\u7406\u3001\u7c7b\u52a0\u8f7d\u5668\u4f18\u5316\u548c\u7f16\u8bd1\u5668\u4f18\u5316\u7b49\u65b9\u9762\u3002\u901a\u8fc7\u7406\u8bba\u548c\u5b9e\u8df5\u76f8\u7ed3\u5408\uff0c\u4f60\u53ef\u4ee5\u4f18\u5316Java\u5e94\u7528\u7a0b\u5e8f\u7684\u6027\u80fd\uff0c\u63d0\u9ad8\u5176\u541e\u5410\u91cf\u3001\u54cd\u5e94\u65f6\u95f4\u548c\u8d44\u6e90\u5229\u7528\u7387\u3002\u5728\u5b9e\u9645\u5e94\u7528\u4e2d\uff0c\u9700\u8981\u6839\u636e\u5177\u4f53\u7684\u573a\u666f\u548c\u9700\u6c42\u8fdb\u884c\u8c03\u4f18\uff0c\u5e76\u4f7f\u7528\u76d1\u63a7\u5de5\u5177\u548c\u5206\u6790\u6280\u672f\u6765\u8bc4\u4f30\u548c\u4f18\u5316\u5e94\u7528\u7a0b\u5e8f\u7684\u6027\u80fd\u3002"),(0,n.kt)("p",null,"\u5e0c\u671b\u672c\u6587\u5bf9\u4f60\u5728JVM\u8c03\u4f18\u5b9e\u8df5\u4e2d\u6709\u6240\u5e2e\u52a9\uff01\u901a\u8fc7\u5408\u7406\u7684\u8c03\u4f18\u548c\u4f18\u5316\uff0c\u4f60\u53ef\u4ee5\u63d0\u5347Java\u5e94\u7528\u7a0b\u5e8f\u7684\u6027\u80fd\u548c\u7a33\u5b9a\u6027\u3002"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u6211\u662f\u8682\u8681\u80cc\u5927\u8c61\uff0c\u6587\u7ae0\u5bf9\u4f60\u6709\u5e2e\u52a9\u7ed9",(0,n.kt)("a",{parentName:"p",href:"https://github.com/mxsm/mxsm-website"},"\u9879\u76ee\u70b9\u4e2a\u2764"),"\u5173\u6ce8\u6211",(0,n.kt)("a",{parentName:"p",href:"https://github.com/mxsm"},"GitHub:mxsm"),"\uff0c\u6587\u7ae0\u6709\u4e0d\u6b63\u786e\u7684\u5730\u65b9\u8bf7\u60a8\u65a7\u6b63,\u521b\u5efa",(0,n.kt)("a",{parentName:"p",href:"https://github.com/mxsm/mxsm-website/issues"},"ISSUE\u63d0\u4ea4PR"),"~\u8c22\u8c22!")))}v.isMDXComponent=!0}}]);