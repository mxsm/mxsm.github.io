"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[5940],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>g});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),i=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=i(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=i(r),d=a,g=p["".concat(l,".").concat(d)]||p[d]||m[d]||o;return r?n.createElement(g,c(c({ref:t},s),{},{components:r})):n.createElement(g,c({ref:t},s))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u[p]="string"==typeof e?e:a,c[1]=u;for(var i=2;i<o;i++)c[i]=r[i];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5574:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>u,toc:()=>i});var n=r(7462),a=(r(7294),r(3905));const o={title:"\u4e3a\u4ec0\u4e48\u4e0d\u5efa\u8bae\u4f7f\u7528Executors\u521b\u5efa\u7ebf\u7a0b\u6c60\uff1f",linkTitle:"\u4e3a\u4ec0\u4e48\u4e0d\u5efa\u8bae\u4f7f\u7528Executors\u521b\u5efa\u7ebf\u7a0b\u6c60\uff1f",date:new Date("2022-02-13T00:00:00.000Z"),weight:202202131027},c=void 0,u={unversionedId:"java/java-se/concurrencemultithreading/not-suggest-use-exectors",id:"java/java-se/concurrencemultithreading/not-suggest-use-exectors",title:"\u4e3a\u4ec0\u4e48\u4e0d\u5efa\u8bae\u4f7f\u7528Executors\u521b\u5efa\u7ebf\u7a0b\u6c60\uff1f",description:"1.\u5f15\u8a00",source:"@site/docs/java/java-se/concurrencemultithreading/not-suggest-use-exectors.md",sourceDirName:"java/java-se/concurrencemultithreading",slug:"/java/java-se/concurrencemultithreading/not-suggest-use-exectors",permalink:"/docs/java/java-se/concurrencemultithreading/not-suggest-use-exectors",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/java/java-se/concurrencemultithreading/not-suggest-use-exectors.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1682735967,formattedLastUpdatedAt:"Apr 29, 2023",frontMatter:{title:"\u4e3a\u4ec0\u4e48\u4e0d\u5efa\u8bae\u4f7f\u7528Executors\u521b\u5efa\u7ebf\u7a0b\u6c60\uff1f",linkTitle:"\u4e3a\u4ec0\u4e48\u4e0d\u5efa\u8bae\u4f7f\u7528Executors\u521b\u5efa\u7ebf\u7a0b\u6c60\uff1f",date:"2022-02-13T00:00:00.000Z",weight:202202131027},sidebar:"javase",previous:{title:"Java\u5e76\u53d1\u7f16\u7a0b\u4e2d\u7684\u4e09\u4e2a\u6982\u5ff5",permalink:"/docs/java/java-se/concurrencemultithreading/java-concurrency-three-concept"},next:{title:"Java\u961f\u5217",permalink:"/docs/java/java-se/concurrencemultithreading/queue"}},l={},i=[{value:"1.\u5f15\u8a00",id:"1\u5f15\u8a00",level:3},{value:"2. Java\u63d0\u4f9bExecutors\u7684\u731c\u60f3",id:"2-java\u63d0\u4f9bexecutors\u7684\u731c\u60f3",level:3},{value:"3. \u4e3a\u4ec0\u4e48\u4e0d\u5efa\u8bae\u4f7f\u7528Executors\u521b\u5efa\u7ebf\u7a0b\u6c60",id:"3-\u4e3a\u4ec0\u4e48\u4e0d\u5efa\u8bae\u4f7f\u7528executors\u521b\u5efa\u7ebf\u7a0b\u6c60",level:3},{value:"3.1 Executors\u4e0e\u76f4\u63a5\u521b\u5efaThreadPoolExecutor\u4f18\u52a3",id:"31-executors\u4e0e\u76f4\u63a5\u521b\u5efathreadpoolexecutor\u4f18\u52a3",level:4},{value:"3.2 \u7ebf\u7a0b\u6267\u884c\u95ee\u9898\u56de\u6eaf",id:"32-\u7ebf\u7a0b\u6267\u884c\u95ee\u9898\u56de\u6eaf",level:4},{value:"4. \u662f\u4e0d\u662fExecutors\u5b8c\u5168\u4e0d\u80fd\u4f7f\u7528\u6765\u521b\u5efa\u7ebf\u7a0b\u6c60",id:"4-\u662f\u4e0d\u662fexecutors\u5b8c\u5168\u4e0d\u80fd\u4f7f\u7528\u6765\u521b\u5efa\u7ebf\u7a0b\u6c60",level:3},{value:"5. \u603b\u7ed3",id:"5-\u603b\u7ed3",level:3}],s={toc:i},p="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"1\u5f15\u8a00"},"1.\u5f15\u8a00"),(0,a.kt)("p",null,"\u4e3a\u4ec0\u4e48\u5f00\u53d1\u8fc7\u7a0b\u4e2d\u90fd\u4e0d\u5efa\u8bae\u4f7f\u7528 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Executors"))," \u521b\u5efa\u7ebf\u7a0b\u6c60\uff0c\u4e0d\u5efa\u8bae\u4f7f\u7528 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Executors"))," \u521b\u5efa\u4e3a\u4ec0\u4e48Java\u8fd8\u63d0\u4f9b\u8fd9\u6837\u4e00\u4e2a\u521b\u5efa\u7c7b\u3002\u5f00\u53d1\u8fc7\u7a0b\u4e2d\u5b8c\u5168\u4e0d\u80fd\u7528 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Executors"))," \u521b\u5efa\u7ebf\u7a0b\u6c60\u5417\uff0c\u5e26\u7740\u8fd9\u51e0\u4e2a\u95ee\u9898\u6211\u4eec\u4ece\u6e90\u7801\u4ee5\u53ca\u5f00\u53d1\u8fc7\u7a0b\u6765\u8bf4\u660e\u4e00\u4e0b\u51e0\u4e2a\u95ee\u9898\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/java/concurrencemultithreading/Executors.png",alt:"Executors"})),(0,a.kt)("h3",{id:"2-java\u63d0\u4f9bexecutors\u7684\u731c\u60f3"},"2. Java\u63d0\u4f9bExecutors\u7684\u731c\u60f3"),(0,a.kt)("p",null,"Executors\u5728Java\u4e2d\u5176\u5b9e\u5c31\u662f\u4e00\u4e2a\u5145\u5f53\u4e00\u4e2a\u5de5\u5177\u7c7b\uff0c\u5bf9 ",(0,a.kt)("strong",{parentName:"p"},"Executor, ExecutorService, ScheduledExecutorService, ThreadFactory")," \u63d0\u4f9b\u8bed\u4e49\u5316\u7684\u670d\u52a1\u3002\u8ba9\u4f7f\u7528\u8005\u80fd\u591f\u66f4\u597d\u7684\u4f7f\u7528\u5728\u4e0d\u540c\u7684\u4e1a\u52a1\u4e2d\u4f7f\u7528\u7684\u4e0d\u540c\u7684\u7ebf\u7a0b\u6c60\u3002\u63d0\u4f9b\u4e00\u4e2a\u7edf\u4e00\u5316\u7684\u7ebf\u7a0b\u6c60\u5de5\u5382\u6765\u521b\u5efa\u3002\u4f8b\u5982\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u521b\u5efa\u4e00\u4e2a\u56fa\u5b9a\u5927\u5c0f\u7684\u7ebf\u7a0b\u5c31\u53ef\u4ee5\u4f7f\u7528"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-java"},"Executors.newFixedThreadPool(int nThreads)\n")),(0,a.kt)("p",{parentName:"li"},"\u5728\u521b\u5efa\u7684\u65f6\u5019\u8fd9\u4e2a\u5c31\u5f88\u660e\u786e\uff0c\u4e00\u770b\u5c31\u662f\u521b\u5efa\u4e00\u4e2a\u56fa\u5b9a\u5927\u5c0f\u7684\u7ebf\u7a0b\u6c60\uff0c\u90a3\u4e48\u7ebf\u7a0b\u6570\u91cf\u591a\u5c11\u5c31\u662f\u4f20\u5165\u7684\u53c2\u6570nThreads")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u521b\u5efa\u4e00\u4e2a\u5355\u7ebf\u7a0b\u7684\u7ebf\u7a0b\u6c60"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-java"},"Executors.newSingleThreadExecutor()\n")),(0,a.kt)("p",{parentName:"li"},"\u8fd9\u6837\u521b\u5efa\u5b8c\u6210\u8fde\u53c2\u6570\u90fd\u7701\u7565\u4e86"))),(0,a.kt)("p",null,"\u6240\u4ee5 Java\u63d0\u4f9bExecutors\u4e3a\u4e86\u521b\u5efa\u5404\u7c7b\u7ebf\u7a0b\u6c60\u63d0\u4f9b\u65b9\u4fbf\uff0c\u7b26\u5408\u8bed\u4e49\u3002\u65e2\u7136\u662f\u8fd9\u6837\u90a3\u4e48\u4e3a\u4ec0\u4e48\u53c8\u4e0d\u5efa\u8bae\u4f7f\u7528\u5462\uff1f\u8fd9\u4e0d\u662f\u81ea\u76f8\u77db\u76fe\u5417"),(0,a.kt)("h3",{id:"3-\u4e3a\u4ec0\u4e48\u4e0d\u5efa\u8bae\u4f7f\u7528executors\u521b\u5efa\u7ebf\u7a0b\u6c60"},"3. \u4e3a\u4ec0\u4e48\u4e0d\u5efa\u8bae\u4f7f\u7528Executors\u521b\u5efa\u7ebf\u7a0b\u6c60"),(0,a.kt)("p",null,"\u4e3a\u4ec0\u4e48\u4e0d\u5efa\u8bae\u4f7f\u7528Executors\u521b\u5efa\u7ebf\u7a0b\u6c60\u6211\u4eec\u4ece\u6e90\u7801\u4ee5\u53ca\u793a\u4f8b\u6765\u5206\u6790\u3002\u6211\u4eec\u4ee5\u521b\u5efa\u56fa\u5b9a\u7ebf\u7a0b\u6c60\u4e3a\u4f8b(\u5176\u4ed6\u7684\u53ef\u4ee5\u89e6\u7c7b\u65c1\u901a\u90fd\u5dee\u4e0d\u591a)\uff0cExecutors\u521b\u5efa\u56fa\u5b9a\u7ebf\u7a0b\u6c60\u65b9\u6cd5\u5982\u4e0b\u56fe\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/java/concurrencemultithreading/image-20220213111611033.png",alt:"image-20220213111611033"})),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u8bbe\u7f6e\u56fa\u5b9a\u7ebf\u7a0b\u6c60\u5927\u5c0f"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public static ExecutorService newFixedThreadPool(int nThreads) {\n    return new ThreadPoolExecutor(nThreads, nThreads,\n                                  0L, TimeUnit.MILLISECONDS,\n                                  new LinkedBlockingQueue<Runnable>());\n}\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u8bbe\u7f6e\u7ebf\u7a0b\u6c60\u5927\u5c0f\u548c\u81ea\u5b9a\u4e49\u5b9e\u73b0ThreadFactory"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public static ExecutorService newFixedThreadPool(int nThreads, ThreadFactory threadFactory) {\n    return new ThreadPoolExecutor(nThreads, nThreads,\n                                  0L, TimeUnit.MILLISECONDS,\n                                  new LinkedBlockingQueue<Runnable>(),\n                                  threadFactory);\n}\n")))),(0,a.kt)("p",null,"\u901a\u8fc7\u4ee3\u7801\u53ef\u4ee5\u53d1\u73b0\u4e24\u8005\u7684\u533a\u522b\u5728\u4e8e\u662f\u5426\u81ea\u5b9a\u4e49\u5b9e\u73b0ThreadFactory\u3002\u91cc\u9762\u90fd\u662f\u521b\u5efaThreadPoolExecutor\u3002"),(0,a.kt)("h4",{id:"31-executors\u4e0e\u76f4\u63a5\u521b\u5efathreadpoolexecutor\u4f18\u52a3"},"3.1 Executors\u4e0e\u76f4\u63a5\u521b\u5efaThreadPoolExecutor\u4f18\u52a3"),(0,a.kt)("p",null,"\u65b9\u5f0f1\u548c\u65b9\u5f0f2\u521b\u5efa\u7ebf\u7a0b\u6c60\u76f8\u6bd4\u76f4\u63a5\u4f7f\u7528ThreadPoolExecutor\u521b\u5efa\u7684\u4f18\u52bf\u5728\u4e8e\uff1a",(0,a.kt)("strong",{parentName:"p"},"\u7b80\u5355\uff0c\u8bed\u4e49\u660e\u786e"),"\u3002"),(0,a.kt)("p",null,"\u4f46\u662f\u65b9\u5f0f1\u521b\u5efa\u7ebf\u7a0b\u6c60\u5b58\u5728\u7528\u6237\u81ea\u8eab\u65e0\u6cd5\u63a7\u5236\u7ebf\u7a0b\u6c60\u540d\u79f0\u4ee5\u53ca\u961f\u5217\u7684\u957f\u5ea6\uff0c\u961f\u5217\u4f7f\u7528\u7684\u662f\u65e0\u754c\u961f\u5217\uff0c\u65b9\u5f0f2\u867d\u7136\u53ef\u4ee5\u81ea\u5b9a\u4e49\u7ebf\u7a0b\u6c60\u540d\u79f0\u4f46\u662f\u76f8\u6bd4\u7ebf\u7a0b\u6c60\u540d\u79f0\u66f4\u52a0\u5e94\u8be5\u5173\u6ce8\u7684\u662f\u961f\u5217\uff0c\u548c\u65b9\u5f0f1\u4e00\u6837\u90fd\u662f\u4f7f\u7528\u7684\u65e0\u754c\u961f\u5217\u3002\u6240\u4ee5\u65b9\u5f0f1\u548c\u65b9\u5f0f2\u52a3\u52bf\u76f8\u6bd4\u6bd4\u76f4\u63a5\u4f7f\u7528ThreadPoolExecutor\u521b\u5efa\u7ebf\u7a0b\u6c60\u7684\u52a3\u52bf\u5728\u4e8e\uff1a",(0,a.kt)("strong",{parentName:"p"},"\u65e0\u6cd5\u63a7\u5236\u961f\u5217\u7684\u957f\u5ea6\u8fd9\u4e2a\u4e5f\u662f\u4e0d\u63a8\u8350\u4f7f\u7528Executors\u4e3b\u8981\u539f\u56e0")," \u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Tips:\u901a\u8fc7LinkedBlockingQueue\u7684\u6e90\u7801\u53d1\u73b0\uff0c\u5141\u8bb8\u7684\u8bf7\u6c42\u961f\u5217\u957f\u5ea6\u4e3a Integer.MAX_VALUE")),(0,a.kt)("p",null,"\u7528\u4ee3\u7801\u6765\u6f14\u793a\u4e00\u4e0b\u5982\u679c\u4e0d\u505c\u7684\u521b\u5efa\u53ef\u80fd\u4f1a\u53d1\u751f\u7684\u95ee\u9898\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * @author mxsm\n * @date 2022/2/9 22:01\n * @Since 1.0.0\n *\n * -Xms5m\n * -Xmx5m\n */\npublic class Phenomena1 {\n    public static void main(String[] args) {\n        ExecutorService executorService = Executors.newFixedThreadPool(1);\n        for(;;){\n            executorService.submit(new Work());\n            System.out.println(System.currentTimeMillis());\n        }\n    }\n\n    static class Work implements Runnable{\n\n        private StringBuilder builder = new StringBuilder();\n\n        public Work() {\n            for(int i = 0; i < 10000000; ++i){\n                builder.append(i);\n            }\n            System.out.println(builder.toString().getBytes(StandardCharsets.UTF_8).length/1024);\n        }\n        @Override\n        public void run() {\n            try {\n                System.out.println(System.currentTimeMillis());\n                TimeUnit.MINUTES.sleep(10);\n            } catch (InterruptedException e) {\n                e.printStackTrace();\n            }\n        }\n    }\n}\n")),(0,a.kt)("p",null,"\u8fd0\u884c\u7ed3\u679c\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/java/concurrencemultithreading/%E7%BA%BF%E7%A8%8B%E6%B1%A0%E8%BF%90%E8%A1%8Coom%E6%BC%94%E7%A4%BA.gif",alt:"\u7ebf\u7a0b\u6c60\u8fd0\u884coom\u6f14\u793a"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Tips:\u5c06\u5185\u5b58\u8c03\u5c0f")),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u5728\u4ee5LinkedBlockingQueue\u4f5c\u4e3a\u961f\u5217\u60c5\u51b5\u4e0b\uff0c\u4f1a\u5bfc\u81f4\u5927\u91cf\u7684\u8bf7\u6c42\u5806\u79ef\u6700\u7ec8\u53ef\u80fd\u5bfc\u81f4OOM")),(0,a.kt)("h4",{id:"32-\u7ebf\u7a0b\u6267\u884c\u95ee\u9898\u56de\u6eaf"},"3.2 \u7ebf\u7a0b\u6267\u884c\u95ee\u9898\u56de\u6eaf"),(0,a.kt)("p",null,"\u5728\u7ebf\u7a0b\u6c60\u6267\u884c\u53d1\u751f\u9519\u8bef\u7684\u65f6\u5019\uff0c\u8fd9\u4e2a\u65f6\u5019\u5c31\u9700\u8981\u6839\u636e\u9519\u8bef\u5806\u6808\u8fdb\u884c\u8ffd\u8e2a\uff0c\u5982\u679c\u4f60\u521b\u5efa\u7ebf\u7a0b\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public class Phenomena1 {\n    public static void main(String[] args) {\n        ExecutorService executorService = Executors.newFixedThreadPool(1);\n        ExecutorService executorService1 = Executors.newFixedThreadPool(2);\n        executorService.submit(new Runnable() {\n            @Override\n            public void run() {\n\n            }\n        });\n        executorService1.submit(new Runnable() {\n            @Override\n            public void run() {\n\n            }\n        });\n    }\n}\n")),(0,a.kt)("p",null,"\u8fd0\u884c\u7a0b\u5e8f\u7136\u540e\u7528java\u547d\u4ee4\u67e5\u770b\u7ebf\u7a0b\u6c60\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"jsp\njstack -l <pid>\n")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/java/concurrencemultithreading/%E7%BA%BF%E7%A8%8B%E6%B1%A0%E4%B8%8D%E8%AE%BE%E7%BD%AE%E7%BA%BF%E7%A8%8B%E5%90%8D%E7%A7%B0.gif",alt:"\u7ebf\u7a0b\u6c60\u4e0d\u8bbe\u7f6e\u7ebf\u7a0b\u540d\u79f0"})),(0,a.kt)("p",null,"\u770b\u4e00\u4e0b\u7ebf\u7a0b\u7684\u60c5\u51b5"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/java/concurrencemultithreading/image-20220213175809396.png",alt:"image-20220213175809396"})),(0,a.kt)("p",null,"\u901a\u8fc7\u4e0a\u56fe\u5e76\u4e0d\u77e5\u9053\u8fd9\u4e24\u4e2a\u7ebf\u7a0b\u5c5e\u4e8e\u54ea\u4e2a\u7ebf\u7a0b\u6c60\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6240\u4ee5\u5728\u4f7f\u7528Executors\u521b\u5efa\u7ebf\u7a0b\u6c60\u5f88\u591a\u4eba\u4e0d\u8bbe\u7f6e\u81ea\u5b9a\u4e49\u7684ThreadFactory\uff0c\u8fd9\u4e5f\u662f\u4e0d\u5efa\u8bae\u4f7f\u7528Executors\u7684\u539f\u56e0\u3002")),(0,a.kt)("h3",{id:"4-\u662f\u4e0d\u662fexecutors\u5b8c\u5168\u4e0d\u80fd\u4f7f\u7528\u6765\u521b\u5efa\u7ebf\u7a0b\u6c60"},"4. \u662f\u4e0d\u662fExecutors\u5b8c\u5168\u4e0d\u80fd\u4f7f\u7528\u6765\u521b\u5efa\u7ebf\u7a0b\u6c60"),(0,a.kt)("p",null,"\u5f53\u7136\u4e0d\u662fExecutors\u5b8c\u5168\u4e0d\u80fd\u4f7f\u7528\u6765\u521b\u5efa\u7ebf\u7a0b\u6c60\uff0c\u5982\u679c\u80fd\u591f\u5728\u4f7f\u7528\u4e2d\u89e3\u51b3\u4e0a\u9762\u8bf4\u7684\u4e24\u4e2a\u95ee\u9898\u90a3\u4e48\u5c31\u5b8c\u5168\u53ef\u4ee5\u4f7f\u7528\uff0c\u81ea\u5b9a\u4e49ThreadFactory\u4f5c\u4e3a\u53c2\u6570\u4f20\u5165\u3002\u53e6\u5916\u4e00\u4e2a\u5c31\u662f\u80fd\u591f\u9884\u89c1\u4efb\u52a1\u7684\u6570\u91cf\uff0c\u4e0d\u4f1a\u56e0\u4e3a\u65e0\u9650\u7684\u63d0\u4ea4\u4efb\u52a1\u5bfc\u81f4\u8d44\u6e90\u8017\u5c3d\u3002"),(0,a.kt)("h3",{id:"5-\u603b\u7ed3"},"5. \u603b\u7ed3"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u5efa\u8bae\u4f7f\u7528Executors\u6765\u521b\u5efa\u7ebf\u7a0b\u6c60\uff0c\u4e3b\u8981\u662f\u6709\u4e24\u5927\u539f\u56e0\u7b2c\u4e00\u4e2a\u662f\u95ee\u9898\u56de\u6eaf\u7684\u95ee\u9898\uff0c\u4f7f\u7528Executors\u90fd\u53ef\u4ee5\u4f7f\u7528\u9ed8\u8ba4\u7684\u60c5\u51b5\uff0c\u65e0\u6cd5\u7528\u6237\u81ea\u5b9a\u4e49\u7ebf\u7a0b\u540d\u79f0\u4e0d\u5229\u4e8e\u6392\u67e5\u95ee\u9898\uff0c\u7b2c\u4e8c\u4e2a\u539f\u56e0\u4e5f\u662f\u6700\u4e3b\u8981\u539f\u56e0\u5c31\u662f\u7ebf\u7a0b\u6c60\u7684\u961f\u5217\u957f\u5ea6\u592a\u957f\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\u53ef\u80fd\u4f1a\u5bfc\u81f4\u5f80\u961f\u5217\u4e2d\u4e0d\u505c\u7684\u6dfb\u52a0\u4efb\u52a1\uff0c\u6700\u7ec8\u5728\u6ca1\u6709\u8fbe\u5230\u961f\u5217\u4e0a\u7ebf\u7684\u60c5\u51b5\u4e0b\u5148\u628a\u670d\u52a1\u5668\u8fd0\u884c\u7684\u5185\u5b58\u8d44\u6e90\u8017\u5c3d\u5bfc\u81f4OOM"),(0,a.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u76f4\u63a5\u4f7f\u7528ThreadPoolExecutor\u521b\u5efa\u7ebf\u7a0b\u6c60\uff0c\u8bbe\u7f6e\u76f8\u5bf9\u590d\u6742\u4f46\u662f\u8bbe\u7f6e\u76f8\u5bf9\u7075\u6d3b\u5f88\u591a\u3002\u5728\u5f00\u53d1\u4e2d\u53ef\u4ee5\u81ea\u5b9a\u4e49\u4e00\u4e2aExecutors\uff0c\u6765\u521b\u5efa\u7ebf\u7a0b\u6c60\uff0c\u5728\u8bed\u4e49\u76f8\u540c\u7684\u60c5\u51b5\u4e0b\u589e\u52a0\u53c2\u6570\u6765\u907f\u514d\u524d\u9762\u8bf4\u7684\u95ee\u9898"),(0,a.kt)("li",{parentName:"ul"},"Executors\u4e5f\u662f\u53ef\u4ee5\u7528\u6765\u521b\u5efa\uff0c\u4f46\u662f\u9700\u8981\u8003\u8651\u4e0d\u540c\u7684\u573a\u666f\u3002")))}m.isMDXComponent=!0}}]);