"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[4514],{3905:(e,t,n)=>{n.d(t,{Zo:()=>v,kt:()=>k});var l=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},i=Object.keys(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=l.createContext({}),s=function(e){var t=l.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},v=function(e){var t=s(e.components);return l.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,v=r(e,["components","mdxType","originalType","parentName"]),c=s(n),d=a,k=c["".concat(p,".").concat(d)]||c[d]||u[d]||i;return n?l.createElement(k,o(o({ref:t},v),{},{components:n})):l.createElement(k,o({ref:t},v))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r[c]="string"==typeof e?e:a,o[1]=r;for(var s=2;s<i;s++)o[s]=n[s];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7804:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>r,toc:()=>s});var l=n(7462),a=(n(7294),n(3905));const i={title:"volatile\u8be6\u89e3",date:new Date("2019-11-06T00:00:00.000Z")},o=void 0,r={unversionedId:"java/java-se/others/volatile",id:"java/java-se/others/volatile",title:"volatile\u8be6\u89e3",description:"volatile\u7684\u5b98\u65b9\u5b9a\u4e49",source:"@site/docs/java/java-se/others/volatile.md",sourceDirName:"java/java-se/others",slug:"/java/java-se/others/volatile",permalink:"/docs/java/java-se/others/volatile",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/java/java-se/others/volatile.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1674227439,formattedLastUpdatedAt:"Jan 20, 2023",frontMatter:{title:"volatile\u8be6\u89e3",date:"2019-11-06T00:00:00.000Z"},sidebar:"javase",previous:{title:"Java\u7ebf\u7a0b\u6c60\u4f7f\u7528\u4e0d\u5f53\u4f1a\u53d1\u751f\u4ec0\u4e48-\u751f\u4ea7\u6848\u4f8b",permalink:"/docs/java/java-se/others/threadpool-used-error"}},p={},s=[{value:"volatile\u7684\u5b98\u65b9\u5b9a\u4e49",id:"volatile\u7684\u5b98\u65b9\u5b9a\u4e49",level:3},{value:"volatile \u53d8\u91cf",id:"volatile-\u53d8\u91cf",level:3},{value:"\u6b63\u786e\u4f7f\u7528 volatile \u53d8\u91cf\u7684\u6761\u4ef6",id:"\u6b63\u786e\u4f7f\u7528-volatile-\u53d8\u91cf\u7684\u6761\u4ef6",level:3},{value:"\u6027\u80fd\u8003\u8651",id:"\u6027\u80fd\u8003\u8651",level:3},{value:"\u6b63\u786e\u4f7f\u7528volatile\u7684\u6a21\u5f0f",id:"\u6b63\u786e\u4f7f\u7528volatile\u7684\u6a21\u5f0f",level:3},{value:"\u72b6\u6001\u6807\u5fd7",id:"\u72b6\u6001\u6807\u5fd7",level:4},{value:"\u4e00\u6b21\u6027\u5b89\u5168\u53d1\u5e03",id:"\u4e00\u6b21\u6027\u5b89\u5168\u53d1\u5e03",level:3},{value:"\u5f00\u9500\u8f83\u4f4e\u7684\u8bfb-\u5199\u9501\u7b56\u7565",id:"\u5f00\u9500\u8f83\u4f4e\u7684\u8bfb-\u5199\u9501\u7b56\u7565",level:3},{value:"volatile \u5e95\u5c42\u5b9e\u73b0",id:"volatile-\u5e95\u5c42\u5b9e\u73b0",level:3}],v={toc:s};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,l.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"volatile\u7684\u5b98\u65b9\u5b9a\u4e49"},"volatile\u7684\u5b98\u65b9\u5b9a\u4e49"),(0,a.kt)("p",null,"java\u8bed\u8a00\u89c4\u8303\u7b2c\u4e09\u7248\u4e2d\u5bf9volatile\u7684\u5b9a\u4e49\u5982\u4e0b\uff1ajava\u7f16\u7a0b\u8bed\u8a00\u5141\u8bb8\u7ebf\u7a0b\u8bbf\u95ee\u5171\u4eab\u53d8\u91cf\uff0c\u4e3a\u4e86\u786e\u4fdd\u5171\u4eab\u53d8\u91cf\u80fd\u88ab\u51c6\u786e\u548c\u4e00\u81f4\u7684\u66f4\u65b0\uff0c\u7ebf\u7a0b\u5e94\u786e\u4fdd\u901a\u8fc7\u6392\u4ed6\u9501\u5355\u72ec\u83b7\u5f97\u8fd9\u4e2a\u53d8\u91cf\u3002java\u8bed\u8a00\u63d0\u4f9b\u4e86volatile\uff0c\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\u6bd4\u9501\u66f4\u52a0\u65b9\u4fbf\u3002\u5982\u679c\u4e00\u4e2a\u5b57\u6bb5\u88ab\u58f0\u660e\u4e3avolatile\uff0cjava\u7ebf\u7a0b\u5185\u5b58\u6a21\u578b\u786e\u4fdd\u6240\u6709\u7ebf\u7a0b\u770b\u5230\u8fd9\u4e2a\u53d8\u91cf\u7684\u503c\u662f\u4e00\u81f4\u7684\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Java"),"\u8bed\u8a00\u4e2d",(0,a.kt)("inlineCode",{parentName:"p"},"volatile"),"\u53ef\u4ee5\u88ab\u770b\u7740\u662f\u4e00\u79cd\u7a0b\u5ea6\u6bd4\u8f83\u8f7b\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"synchronized"),"\uff1b\u4e0esynchronized\u76f8\u6bd4",(0,a.kt)("inlineCode",{parentName:"p"},"volatile")," \u53d8\u91cf\u6240\u9700\u7684\u7f16\u7801\u8f83\u5c11\uff0c\u5e76\u4e14\u8fd0\u884c\u65f6\u5f00\u9500\u4e5f\u8f83\u5c11\uff0c\u4f46\u662f",(0,a.kt)("strong",{parentName:"p"},"\u5b83\u6240\u80fd\u5b9e\u73b0\u7684\u529f\u80fd\u4e5f\u4ec5\u662f ",(0,a.kt)("inlineCode",{parentName:"strong"},"synchronized")," \u7684\u4e00\u90e8\u5206")),(0,a.kt)("h3",{id:"volatile-\u53d8\u91cf"},"volatile \u53d8\u91cf"),(0,a.kt)("p",null,"Volatile \u53d8\u91cf\u5177\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"synchronized")," \u7684\u53ef\u89c1\u6027\u7279\u6027\uff0c\u4f46\u662f",(0,a.kt)("strong",{parentName:"p"},"\u4e0d\u5177\u5907\u539f\u5b50\u7279\u6027"),"\u3002\u8fd9\u5c31\u662f\u8bf4\u7ebf\u7a0b\u80fd\u591f\u81ea\u52a8\u53d1\u73b0 volatile \u53d8\u91cf\u7684\u6700\u65b0\u503c\u3002Volatile \u53d8\u91cf\u53ef\u7528\u4e8e\u63d0\u4f9b\u7ebf\u7a0b\u5b89\u5168\uff0c\u4f46\u662f\u53ea\u80fd\u5e94\u7528\u4e8e\u975e\u5e38\u6709\u9650\u7684\u4e00\u7ec4\u7528\u4f8b\uff1a\u591a\u4e2a\u53d8\u91cf\u4e4b\u95f4\u6216\u8005\u67d0\u4e2a\u53d8\u91cf\u7684\u5f53\u524d\u503c\u4e0e\u4fee\u6539\u540e\u503c\u4e4b\u95f4\u6ca1\u6709\u7ea6\u675f\u3002\u56e0\u6b64\uff0c",(0,a.kt)("strong",{parentName:"p"},"\u5355\u72ec\u4f7f\u7528 volatile \u8fd8\u4e0d\u8db3\u4ee5\u5b9e\u73b0\u8ba1\u6570\u5668\u3001\u4e92\u65a5\u9501\u6216\u4efb\u4f55\u5177\u6709\u4e0e\u591a\u4e2a\u53d8\u91cf\u76f8\u5173\u7684\u4e0d\u53d8\u5f0f\uff08Invariants\uff09\u7684\u7c7b"),"\uff08\u4f8b\u5982 \u201cstart <=end\u201d\uff09\u3002"),(0,a.kt)("p",null,"\u51fa\u4e8e\u7b80\u6613\u6027\u6216\u53ef\u4f38\u7f29\u6027\u7684\u8003\u8651\uff0c\u60a8\u53ef\u80fd\u503e\u5411\u4e8e\u4f7f\u7528 volatile \u53d8\u91cf\u800c\u4e0d\u662f\u9501\u3002\u5f53\u4f7f\u7528 volatile \u53d8\u91cf\u800c\u975e\u9501\u65f6\uff0c\u67d0\u4e9b\u4e60\u60ef\u7528\u6cd5\uff08idiom\uff09\u66f4\u52a0\u6613\u4e8e\u7f16\u7801\u548c\u9605\u8bfb\u3002\u6b64\u5916\uff0cvolatile \u53d8\u91cf\u4e0d\u4f1a\u50cf\u9501\u90a3\u6837\u9020\u6210\u7ebf\u7a0b\u963b\u585e\uff0c\u56e0\u6b64\u4e5f\u5f88\u5c11\u9020\u6210\u53ef\u4f38\u7f29\u6027\u95ee\u9898\u3002\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0c\u5982\u679c\u8bfb\u64cd\u4f5c\u8fdc\u8fdc\u5927\u4e8e\u5199\u64cd\u4f5c\uff0cvolatile \u53d8\u91cf\u8fd8\u53ef\u4ee5\u63d0\u4f9b\u4f18\u4e8e\u9501\u7684\u6027\u80fd\u4f18\u52bf\u3002"),(0,a.kt)("p",null,"\u4f8b\u5b50\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public class VolatileTest {\n\n    private static volatile int count = 0;\n\n    public static void main(String[] args) throws Exception{\n\n       Thread[] threads = new Thread[20];\n       for(int i = 0; i < threads.length; ++i){\n           threads[i] = new Thread(()->{\n               for(int k = 0 ;k<1000;k++){\n                   count++;//\u8fd9\u4e00\u6b65\u64cd\u4f5c\u4e0d\u662f\u539f\u5b50\u64cd\u4f5c,\u800cvolatile\u4e0d\u80fd\u4fdd\u8bc1\u590d\u5408\u64cd\u4f5c\u7684\u539f\u5b50\u6027\n               }\n           });\n           threads[i].start();\n       }\n       for(int i = 0; i < threads.length; ++i){\n            threads[i].join();\n       }\n        System.out.println(count);\n    }\n}\n")),(0,a.kt)("p",null,"\u8fd0\u884c\u7684\u7ed3\u679c\u5927\u90e8\u5206\u90fd\u4e0d\u7b49\u4e8e20X1000"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6240\u4ee5",(0,a.kt)("inlineCode",{parentName:"strong"},"volatile")," \u65e0\u6cd5\u4fdd\u8bc1\u590d\u5408\u6027\u64cd\u4f5c\u7684\u539f\u5b50\u6027")),(0,a.kt)("h3",{id:"\u6b63\u786e\u4f7f\u7528-volatile-\u53d8\u91cf\u7684\u6761\u4ef6"},"\u6b63\u786e\u4f7f\u7528 volatile \u53d8\u91cf\u7684\u6761\u4ef6"),(0,a.kt)("p",null,"\u5728\u6709\u9650\u7684\u4e00\u4e9b\u60c5\u5f62\u4e0b\u4f7f\u7528 volatile \u53d8\u91cf\u66ff\u4ee3\u9501\u3002\u8981\u4f7f volatile \u53d8\u91cf\u63d0\u4f9b\u7406\u60f3\u7684\u7ebf\u7a0b\u5b89\u5168\uff0c\u5fc5\u987b\u540c\u65f6\u6ee1\u8db3\u4e0b\u9762\u4e24\u4e2a\u6761\u4ef6"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5bf9\u53d8\u91cf\u7684\u5199\u64cd\u4f5c\u4e0d\u4f9d\u8d56\u4e8e\u5f53\u524d\u503c"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-java"},"volatile int count = 0; //\u4e0d\u4f9d\u8d56\u4e8e\u5f53\u524d\u503c\nvolatile int count = count + 1; //\u4f9d\u8d56\u5f53\u524d\u503c\n")))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u8be5\u53d8\u91cf\u6ca1\u6709\u5305\u542b\u5728\u5177\u6709\u5176\u4ed6\u53d8\u91cf\u7684\u4e0d\u53d8\u5f0f\u4e2d"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-java"},"volatile int count = 1; \nint c = count + 1; \n")))),(0,a.kt)("p",null,"\u7b2c\u4e00\u4e2a\u6761\u4ef6\u7684\u9650\u5236\u4f7f volatile \u53d8\u91cf\u4e0d\u80fd\u7528\u4f5c\u7ebf\u7a0b\u5b89\u5168\u8ba1\u6570\u5668\u3002\u867d\u7136\u589e\u91cf\u64cd\u4f5c\uff08",(0,a.kt)("inlineCode",{parentName:"p"},"x++"),"\uff09\u770b\u4e0a\u53bb\u7c7b\u4f3c\u4e00\u4e2a\u5355\u72ec\u64cd\u4f5c\uff0c\u5b9e\u9645\u4e0a\u5b83\u662f\u4e00\u4e2a\u7531\u8bfb\u53d6\uff0d\u4fee\u6539\uff0d\u5199\u5165\u64cd\u4f5c\u5e8f\u5217\u7ec4\u6210\u7684\u7ec4\u5408\u64cd\u4f5c\uff0c\u5fc5\u987b\u4ee5\u539f\u5b50\u65b9\u5f0f\u6267\u884c\uff0c\u800c volatile \u4e0d\u80fd\u63d0\u4f9b\u5fc5\u987b\u7684\u539f\u5b50\u7279\u6027\u3002\u5b9e\u73b0\u6b63\u786e\u7684\u64cd\u4f5c\u9700\u8981\u4f7f ",(0,a.kt)("inlineCode",{parentName:"p"},"x")," \u7684\u503c\u5728\u64cd\u4f5c\u671f\u95f4\u4fdd\u6301\u4e0d\u53d8\uff0c\u800c volatile \u53d8\u91cf\u65e0\u6cd5\u5b9e\u73b0\u8fd9\u70b9\u3002\uff08\u7136\u800c\uff0c\u5982\u679c\u5c06\u503c\u8c03\u6574\u4e3a\u53ea\u4ece\u5355\u4e2a\u7ebf\u7a0b\u5199\u5165\uff0c\u90a3\u4e48\u53ef\u4ee5\u5ffd\u7565\u7b2c\u4e00\u4e2a\u6761\u4ef6\u3002\uff09\u2014\u4e0a\u9762\u7684\u4ee3\u7801\u8bf4\u660e\u8fd9\u4e2a\u95ee\u9898"),(0,a.kt)("h3",{id:"\u6027\u80fd\u8003\u8651"},"\u6027\u80fd\u8003\u8651"),(0,a.kt)("p",null,"\u4f7f\u7528 volatile \u53d8\u91cf\u7684\u4e3b\u8981\u539f\u56e0\u662f\u5176\u7b80\u6613\u6027\uff1a\u5728\u67d0\u4e9b\u60c5\u5f62\u4e0b\uff0c\u4f7f\u7528 volatile \u53d8\u91cf\u8981\u6bd4\u4f7f\u7528\u76f8\u5e94\u7684\u9501\u7b80\u5355\u5f97\u591a\u3002\u4f7f\u7528 volatile \u53d8\u91cf\u6b21\u8981\u539f\u56e0\u662f\u5176\u6027\u80fd\uff1a\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0cvolatile \u53d8\u91cf\u540c\u6b65\u673a\u5236\u7684\u6027\u80fd\u8981\u4f18\u4e8e\u9501\u3002"),(0,a.kt)("p",null,"\u5f88\u96be\u505a\u51fa\u51c6\u786e\u3001\u5168\u9762\u7684\u8bc4\u4ef7\uff0c\u4f8b\u5982 \u201cX \u603b\u662f\u6bd4 Y \u5feb\u201d\uff0c\u5c24\u5176\u662f\u5bf9 JVM \u5185\u5728\u7684\u64cd\u4f5c\u800c\u8a00\u3002\uff08\u4f8b\u5982\uff0c\u67d0\u4e9b\u60c5\u51b5\u4e0b VM \u4e5f\u8bb8\u80fd\u591f\u5b8c\u5168\u5220\u9664\u9501\u673a\u5236\uff0c\u8fd9\u4f7f\u5f97\u6211\u4eec\u96be\u4ee5\u62bd\u8c61\u5730\u6bd4\u8f83 ",(0,a.kt)("inlineCode",{parentName:"p"},"volatile")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"synchronized")," \u7684\u5f00\u9500\u3002\uff09\u5c31\u662f\u8bf4\uff0c\u5728\u76ee\u524d\u5927\u591a\u6570\u7684\u5904\u7406\u5668\u67b6\u6784\u4e0a\uff0cvolatile \u8bfb\u64cd\u4f5c\u5f00\u9500\u975e\u5e38\u4f4e \u2014\u2014 \u51e0\u4e4e\u548c\u975e volatile \u8bfb\u64cd\u4f5c\u4e00\u6837\u3002\u800c volatile \u5199\u64cd\u4f5c\u7684\u5f00\u9500\u8981\u6bd4\u975e volatile \u5199\u64cd\u4f5c\u591a\u5f88\u591a\uff0c\u56e0\u4e3a\u8981\u4fdd\u8bc1\u53ef\u89c1\u6027\u9700\u8981\u5b9e\u73b0\u5185\u5b58\u754c\u5b9a\uff08Memory Fence\uff09\uff0c\u5373\u4fbf\u5982\u6b64\uff0cvolatile \u7684\u603b\u5f00\u9500\u4ecd\u7136\u8981\u6bd4\u9501\u83b7\u53d6\u4f4e\u3002"),(0,a.kt)("p",null,"volatile \u64cd\u4f5c\u4e0d\u4f1a\u50cf\u9501\u4e00\u6837\u9020\u6210\u963b\u585e\uff0c\u56e0\u6b64\uff0c\u5728\u80fd\u591f\u5b89\u5168\u4f7f\u7528 volatile \u7684\u60c5\u51b5\u4e0b\uff0cvolatile \u53ef\u4ee5\u63d0\u4f9b\u4e00\u4e9b\u4f18\u4e8e\u9501\u7684\u53ef\u4f38\u7f29\u7279\u6027\u3002\u5982\u679c\u8bfb\u64cd\u4f5c\u7684\u6b21\u6570\u8981\u8fdc\u8fdc\u8d85\u8fc7\u5199\u64cd\u4f5c\uff0c\u4e0e\u9501\u76f8\u6bd4\uff0cvolatile \u53d8\u91cf\u901a\u5e38\u80fd\u591f\u51cf\u5c11\u540c\u6b65\u7684\u6027\u80fd\u5f00\u9500\u3002"),(0,a.kt)("h3",{id:"\u6b63\u786e\u4f7f\u7528volatile\u7684\u6a21\u5f0f"},"\u6b63\u786e\u4f7f\u7528volatile\u7684\u6a21\u5f0f"),(0,a.kt)("p",null,"\u8981\u59cb\u7ec8\u7262\u8bb0\u4f7f\u7528 volatile \u7684\u9650\u5236 \u2014\u2014 \u53ea\u6709\u5728\u72b6\u6001\u771f\u6b63\u72ec\u7acb\u4e8e\u7a0b\u5e8f\u5185\u5176\u4ed6\u5185\u5bb9\u65f6\u624d\u80fd\u4f7f\u7528 volatile \u2014\u2014 \u8fd9\u6761\u89c4\u5219\u80fd\u591f\u907f\u514d\u5c06\u8fd9\u4e9b\u6a21\u5f0f\u6269\u5c55\u5230\u4e0d\u5b89\u5168\u7684\u7528\u4f8b"),(0,a.kt)("h4",{id:"\u72b6\u6001\u6807\u5fd7"},"\u72b6\u6001\u6807\u5fd7"),(0,a.kt)("p",null,"\u4e5f\u8bb8\u5b9e\u73b0 volatile \u53d8\u91cf\u7684\u89c4\u8303\u4f7f\u7528\u4ec5\u4ec5\u662f\u4f7f\u7528\u4e00\u4e2a\u5e03\u5c14\u72b6\u6001\u6807\u5fd7\uff0c\u7528\u4e8e\u6307\u793a\u53d1\u751f\u4e86\u4e00\u4e2a\u91cd\u8981\u7684\u4e00\u6b21\u6027\u4e8b\u4ef6\uff0c\u4f8b\u5982\u5b8c\u6210\u521d\u59cb\u5316\u6216\u8bf7\u6c42\u505c\u673a\u3002"),(0,a.kt)("p",null,"\u5b9e\u9645\u5e94\u7528\uff1aIM\u5de5\u7a0b\u4e2d\u5728akka actor\u6536\u5230\u9500\u6bc1\u547d\u4ee4\u7684\u65f6\u5019\u8bbe\u7f6e\u6807\u8bb0\u8ba9netty\u4e0d\u518d\u5f80\u5916\u63a8\u6d88\u606f\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public abstract class AbstractMessageDistribute<T> extends AbstractActor implements MessageDistribute {\n\n    protected Logger logger = LoggerFactory.getLogger(getClass());\n    \n    private T channelContext;\n\n/**\n     * Channel\u662f\u5426active\n     */\n    private volatile  boolean  isActive = true; //\u72b6\u6001\u6807\u8bb0\n    public void setActive(boolean active) {\n        isActive = active;\n    }\n}\npublic class NettyAkkaActor extends ChannelTransportDistribute{\n\n    @Override\n    public void postStop() throws Exception {\n        setActive(false); //\u8bbe\u7f6e\n        super.postStop();\n    }\n\nprivate void receiveEtcdCacheMessageWrapper(EtcdCacheMessageWrapper wrapper) {\n        ImMessage notification = wrapper.getImMessage();\n        if(isActive()){ //\u5224\u65ad\n            //...........\n        }\n\n    }\n}\n\n")),(0,a.kt)("h3",{id:"\u4e00\u6b21\u6027\u5b89\u5168\u53d1\u5e03"},"\u4e00\u6b21\u6027\u5b89\u5168\u53d1\u5e03"),(0,a.kt)("p",null,"\u7f3a\u4e4f\u540c\u6b65\u4f1a\u5bfc\u81f4\u65e0\u6cd5\u5b9e\u73b0\u53ef\u89c1\u6027\uff0c\u8fd9\u4f7f\u5f97\u786e\u5b9a\u4f55\u65f6\u5199\u5165\u5bf9\u8c61\u5f15\u7528\u800c\u4e0d\u662f\u539f\u8bed\u503c\u53d8\u5f97\u66f4\u52a0\u56f0\u96be\u3002\u5728\u7f3a\u4e4f\u540c\u6b65\u7684\u60c5\u51b5\u4e0b\uff0c\u53ef\u80fd\u4f1a\u9047\u5230\u67d0\u4e2a\u5bf9\u8c61\u5f15\u7528\u7684\u66f4\u65b0\u503c\uff08\u7531\u53e6\u4e00\u4e2a\u7ebf\u7a0b\u5199\u5165\uff09\u548c\u8be5\u5bf9\u8c61\u72b6\u6001\u7684\u65e7\u503c\u540c\u65f6\u5b58\u5728\u3002\uff08\u8fd9\u5c31\u662f\u9020\u6210\u8457\u540d\u7684\u53cc\u91cd\u68c0\u67e5\u9501\u5b9a\uff08double-checked-locking\uff09\u95ee\u9898\u7684\u6839\u6e90\uff0c\u5176\u4e2d\u5bf9\u8c61\u5f15\u7528\u5728\u6ca1\u6709\u540c\u6b65\u7684\u60c5\u51b5\u4e0b\u8fdb\u884c\u8bfb\u64cd\u4f5c\uff0c\u4ea7\u751f\u7684\u95ee\u9898\u662f\u60a8\u53ef\u80fd\u4f1a\u770b\u5230\u4e00\u4e2a\u66f4\u65b0\u7684\u5f15\u7528\uff0c\u4f46\u662f\u4ecd\u7136\u4f1a\u901a\u8fc7\u8be5\u5f15\u7528\u770b\u5230\u4e0d\u5b8c\u5168\u6784\u9020\u7684\u5bf9\u8c61\uff09\u3002"),(0,a.kt)("p",null,"\u4ee3\u7801\u793a\u4f8b1\uff1a\u5c06 volatile \u53d8\u91cf\u7528\u4e8e\u4e00\u6b21\u6027\u5b89\u5168\u53d1\u5e03"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public class BackgroundFloobleLoader {\n    public volatile Flooble theFlooble;\n \n    public void initInBackground() {\n        // do lots of stuff\n        theFlooble = new Flooble();  // this is the only write to theFlooble\n    }\n}\n \npublic class SomeOtherClass {\n    public void doWork() {\n        while (true) { \n            // do some stuff...\n            // use the Flooble, but only if it is ready\n            if (floobleLoader.theFlooble != null) \n                doSomething(floobleLoader.theFlooble);\n        }\n    }\n}\n")),(0,a.kt)("p",null,"\u4ee3\u7801\u793a\u4f8b2\uff1a\u5355\u4f8b\u6a21\u5f0f\u2014\u61d2\u6c49\u6a21\u5f0f\u2014double-checked"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"//double checked\npublic class LazySingleton {\n\n    private volatile  static  LazySingleton lazySingleton;\n\n    private static final Object LOCK = new Object();\n\n    private LazySingleton(){\n\n    }\n\n    public static LazySingleton doubleCheckedLazySingleton(){\n\n        if(lazySingleton == null){\n            synchronized (LOCK){\n                if(lazySingleton == null){\n                    lazySingleton = new LazySingleton();\n                }\n            }\n        }\n        return lazySingleton;\n    }\n}\n\n//\u6d4b\u8bd5\u4ee3\u7801\n\npublic class LazyModel {\n\n    public static void main(String[] args) throws Exception{\n        Object target = new Object();\n        Map<LazySingleton,Object> set = new ConcurrentHashMap<>();\n        Thread[] threads = new Thread[10000];\n        for(int i = 0; i < threads.length;++i){\n            threads[i] = new Thread(()->{\n                set.put(LazySingleton.doubleCheckedLazySingleton(),target);\n            });\n            threads[i].start();\n        }\n        for(int i = 0; i < threads.length;++i){\n\n            threads[i].join();\n        }\n        System.out.println(set.size()); //\u8f93\u51fa\u7684size\u7b49\u4e8e1\n    }\n}\n")),(0,a.kt)("h3",{id:"\u5f00\u9500\u8f83\u4f4e\u7684\u8bfb-\u5199\u9501\u7b56\u7565"},"\u5f00\u9500\u8f83\u4f4e\u7684\u8bfb-\u5199\u9501\u7b56\u7565"),(0,a.kt)("p",null,"\u76ee\u524d\u4e3a\u6b62\uff0c\u60a8\u5e94\u8be5\u4e86\u89e3\u4e86 volatile \u7684\u529f\u80fd\u8fd8\u4e0d\u8db3\u4ee5\u5b9e\u73b0\u8ba1\u6570\u5668\u3002\u56e0\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"++x")," \u5b9e\u9645\u4e0a\u662f\u4e09\u79cd\u64cd\u4f5c\uff08\u8bfb\u3001\u6dfb\u52a0\u3001\u5b58\u50a8\uff09\u7684\u7b80\u5355\u7ec4\u5408\uff0c\u5982\u679c\u591a\u4e2a\u7ebf\u7a0b\u51d1\u5de7\u8bd5\u56fe\u540c\u65f6\u5bf9 volatile \u8ba1\u6570\u5668\u6267\u884c\u589e\u91cf\u64cd\u4f5c\uff0c\u90a3\u4e48\u5b83\u7684\u66f4\u65b0\u503c\u6709\u53ef\u80fd\u4f1a\u4e22\u5931\u3002"),(0,a.kt)("p",null,"\u7136\u800c\uff0c\u5982\u679c\u8bfb\u64cd\u4f5c\u8fdc\u8fdc\u8d85\u8fc7\u5199\u64cd\u4f5c\uff0c\u60a8\u53ef\u4ee5\u7ed3\u5408\u4f7f\u7528\u5185\u90e8\u9501\u548c volatile \u53d8\u91cf\u6765\u51cf\u5c11\u516c\u5171\u4ee3\u7801\u8def\u5f84\u7684\u5f00\u9500\u3002\u6e05\u5355 6 \u4e2d\u663e\u793a\u7684\u7ebf\u7a0b\u5b89\u5168\u7684\u8ba1\u6570\u5668\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"synchronized")," \u786e\u4fdd\u589e\u91cf\u64cd\u4f5c\u662f\u539f\u5b50\u7684\uff0c\u5e76\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"volatile")," \u4fdd\u8bc1\u5f53\u524d\u7ed3\u679c\u7684\u53ef\u89c1\u6027\u3002\u5982\u679c\u66f4\u65b0\u4e0d\u9891\u7e41\u7684\u8bdd\uff0c\u8be5\u65b9\u6cd5\u53ef\u5b9e\u73b0\u66f4\u597d\u7684\u6027\u80fd\uff0c\u56e0\u4e3a\u8bfb\u8def\u5f84\u7684\u5f00\u9500\u4ec5\u4ec5\u6d89\u53ca volatile \u8bfb\u64cd\u4f5c\uff0c\u8fd9\u901a\u5e38\u8981\u4f18\u4e8e\u4e00\u4e2a\u65e0\u7ade\u4e89\u7684\u9501\u83b7\u53d6\u7684\u5f00\u9500\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public class CheesyCounter {\n    // Employs the cheap read-write lock trick\n    // All mutative operations MUST be done with the 'this' lock held\n    @GuardedBy(\"this\") private volatile int value;\n \n    public int getValue() { return value; }\n \n    public synchronized int increment() {\n        return value++;\n    }\n}\n")),(0,a.kt)("p",null,"\u4e4b\u6240\u4ee5\u5c06\u8fd9\u79cd\u6280\u672f\u79f0\u4e4b\u4e3a \u201c\u5f00\u9500\u8f83\u4f4e\u7684\u8bfb\uff0d\u5199\u9501\u201d \u662f\u56e0\u4e3a\u60a8\u4f7f\u7528\u4e86\u4e0d\u540c\u7684\u540c\u6b65\u673a\u5236\u8fdb\u884c\u8bfb\u5199\u64cd\u4f5c\u3002\u56e0\u4e3a\u672c\u4f8b\u4e2d\u7684\u5199\u64cd\u4f5c\u8fdd\u53cd\u4e86\u4f7f\u7528 volatile \u7684\u7b2c\u4e00\u4e2a\u6761\u4ef6\uff0c\u56e0\u6b64\u4e0d\u80fd\u4f7f\u7528 volatile \u5b89\u5168\u5730\u5b9e\u73b0\u8ba1\u6570\u5668 \u2014\u2014 \u60a8\u5fc5\u987b\u4f7f\u7528\u9501\u3002\u7136\u800c\uff0c\u60a8\u53ef\u4ee5\u5728\u8bfb\u64cd\u4f5c\u4e2d\u4f7f\u7528 volatile \u786e\u4fdd\u5f53\u524d\u503c\u7684",(0,a.kt)("em",{parentName:"p"},"\u53ef\u89c1\u6027"),"\uff0c\u56e0\u6b64\u53ef\u4ee5\u4f7f\u7528\u9501\u8fdb\u884c\u6240\u6709\u53d8\u5316\u7684\u64cd\u4f5c\uff0c\u4f7f\u7528 volatile \u8fdb\u884c\u53ea\u8bfb\u64cd\u4f5c\u3002\u5176\u4e2d\uff0c\u9501\u4e00\u6b21\u53ea\u5141\u8bb8\u4e00\u4e2a\u7ebf\u7a0b\u8bbf\u95ee\u503c\uff0cvolatile \u5141\u8bb8\u591a\u4e2a\u7ebf\u7a0b\u6267\u884c\u8bfb\u64cd\u4f5c\uff0c\u56e0\u6b64\u5f53\u4f7f\u7528 volatile \u4fdd\u8bc1\u8bfb\u4ee3\u7801\u8def\u5f84\u65f6\uff0c\u8981\u6bd4\u4f7f\u7528\u9501\u6267\u884c\u5168\u90e8\u4ee3\u7801\u8def\u5f84\u83b7\u5f97\u66f4\u9ad8\u7684\u5171\u4eab\u5ea6 \u2014\u2014 \u5c31\u50cf\u8bfb\uff0d\u5199\u64cd\u4f5c\u4e00\u6837\u3002\u7136\u800c\uff0c\u8981\u968f\u65f6\u7262\u8bb0\u8fd9\u79cd\u6a21\u5f0f\u7684\u5f31\u70b9\uff1a\u5982\u679c\u8d85\u8d8a\u4e86\u8be5\u6a21\u5f0f\u7684\u6700\u57fa\u672c\u5e94\u7528\uff0c\u7ed3\u5408\u8fd9\u4e24\u4e2a\u7ade\u4e89\u7684\u540c\u6b65\u673a\u5236\u5c06\u53d8\u5f97\u975e\u5e38\u56f0\u96be\u3002"),(0,a.kt)("h3",{id:"volatile-\u5e95\u5c42\u5b9e\u73b0"},"volatile \u5e95\u5c42\u5b9e\u73b0"),(0,a.kt)("p",null,"\u5bf9\u4e8e",(0,a.kt)("inlineCode",{parentName:"p"},"volatile"),"\u53d8\u91cf\uff0c\u5f53\u5bf9",(0,a.kt)("inlineCode",{parentName:"p"},"volatile"),"\u53d8\u91cf\u8fdb\u884c\u5199\u64cd\u4f5c\u7684\u65f6\u5019\uff0cJVM\u4f1a\u5411\u5904\u7406\u5668\u53d1\u9001\u4e00\u6761lock\u524d\u7f00\u7684\u6307\u4ee4\uff0c\u5c06\u8fd9\u4e2a\u7f13\u5b58\u4e2d\u7684\u53d8\u91cf\u56de\u5199\u5230\u7cfb\u7edf\u4e3b\u5b58\u4e2d\u3002"),(0,a.kt)("p",null,"\u5199\u56de\u4e3b\u5b58\u540e\uff0c\u5176\u4ed6\u5904\u7406\u5668\u7f13\u5b58\u7684\u503c\u8fd8\u662f\u65e7\u7684\u3002\u518d\u6267\u884c\u8ba1\u7b97\u64cd\u4f5c\u5c31\u4f1a\u6709\u95ee\u9898\uff0c\u6240\u4ee5\u5728\u591a\u5904\u7406\u5668\u4e0b\u4e3a\u4e86\u4fdd\u8bc1\u5404\u4e2a\u5904\u7406\u5668\u7684\u7f13\u5b58\u662f\u4e00\u81f4\u7684\uff0c\u5c31\u4f1a\u5b9e\u73b0\u7f13\u5b58\u4e00\u81f4\u6027\u534f\u8bae\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u7f13\u5b58\u4e00\u81f4\u6027\u534f\u8bae\uff1a\u6bcf\u4e00\u4e2a\u5904\u7406\u5668\u901a\u8fc7\u55c5\u63a2\u5728\u603b\u7ebf\u4e0a\u9762\u7684\u4f20\u64ad\u7684\u6570\u636e\u6765\u68c0\u67e5\u81ea\u5df1\u7f13\u5b58\u7684\u503c\u662f\u4e0d\u662f\u8fc7\u671f\u4e86\uff0c\u5f53\u5904\u7406\u5668\u53d1\u73b0\u81ea\u5df1\u7f13\u5b58\u884c\u5bf9\u5e94\u7684\u5185\u5b58\u5730\u5740\u88ab\u4fee\u6539\uff0c\u5c31\u4f1a\u5c06\u5f53\u524d\u7684\u5904\u7406\u5668\u7684\u7f13\u5b58\u8bbe\u7f6e\u4e3a\u65e0\u6548\u72b6\u6001\uff0c\u5f53\u5904\u7406\u5668\u8981\u5bf9\u8fd9\u4e2a\u6570\u636e\u8fdb\u884c\u4fee\u6539\u64cd\u4f5c\u7684\u65f6\u5019\uff0c\u4f1a\u5f3a\u5236\u91cd\u65b0\u53bb\u7cfb\u7edf\u5185\u5b58\u91cc\u628a\u6570\u636e\u7763\u5bfc\u5904\u7406\u5668\u7f13\u5b58\u91cc\u3002")),(0,a.kt)("p",null,"\u6240\u4ee5\u5982\u679c\u4e00\u4e2a\u53d8\u91cf\u88ab ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"volatile"))," \u6240\u4fee\u9970\u7684\u8bdd\uff0c\u5728\u6bcf\u6b21\u6570\u636e\u53d8\u5316\u4e4b\u540e\uff0c\u5176\u503c\u90fd\u4f1a\u88ab\u5f3a\u5236\u5237\u5165\u4e3b\u5b58\u3002\u800c\u5176\u4ed6\u7684\u5904\u7406\u5668\u7684\u7f13\u5b58\u7531\u4e8e\u9075\u5b88\u4e86\u7f13\u5b58\u4e00\u81f4\u6027\u534f\u8bae\uff0c\u4e5f\u4f1a\u628a\u8fd9\u4e2a\u53d8\u91cf\u7684\u503c\u4ece\u4e3b\u5b58\u52a0\u8f7d\u5230\u81ea\u5df1\u7684\u7f13\u5b58\u4e2d\uff0c \u8fd9\u5c31\u4fdd\u8bc1\u4e86 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"volatile"))," \u5728\u5e76\u53d1\u7f16\u7a0b\u4e2d\u671f\u6307\u5728\u591a\u4e2a\u7f13\u5b58\u4e2d\u662f\u53ef\u89c1\u7684\u3002"))}c.isMDXComponent=!0}}]);