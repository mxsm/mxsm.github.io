"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[3637],{3905:(e,a,n)=>{n.d(a,{Zo:()=>o,kt:()=>k});var t=n(7294);function l(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function u(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){l(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,t,l=function(e,a){if(null==e)return{};var n,t,l={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(l[n]=e[n]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=t.createContext({}),c=function(e){var a=t.useContext(p),n=a;return e&&(n="function"==typeof e?e(a):u(u({},a),e)),n},o=function(e){var a=c(e.components);return t.createElement(p.Provider,{value:a},e.children)},s="mdxType",b={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},m=t.forwardRef((function(e,a){var n=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),s=c(n),m=l,k=s["".concat(p,".").concat(m)]||s[m]||b[m]||r;return n?t.createElement(k,u(u({ref:a},o),{},{components:n})):t.createElement(k,u({ref:a},o))}));function k(e,a){var n=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var r=n.length,u=new Array(r);u[0]=m;var i={};for(var p in a)hasOwnProperty.call(a,p)&&(i[p]=a[p]);i.originalType=e,i[s]="string"==typeof e?e:l,u[1]=i;for(var c=2;c<r;c++)u[c]=n[c];return t.createElement.apply(null,u)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4266:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>p,contentTitle:()=>u,default:()=>b,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var t=n(7462),l=(n(7294),n(3905));const r={title:"Callable\u4e0eRunnable\u7684\u533a\u522b\u4f60\u77e5\u9053\u5417\uff1f",linkTitle:"Callable\u4e0eRunnable\u7684\u533a\u522b\u4f60\u77e5\u9053\u5417\uff1f",date:new Date("2022-02-06T00:00:00.000Z"),weight:202202061135},u=void 0,i={unversionedId:"java/java-se/concurrencemultithreading/callable-and-runnable",id:"java/java-se/concurrencemultithreading/callable-and-runnable",title:"Callable\u4e0eRunnable\u7684\u533a\u522b\u4f60\u77e5\u9053\u5417\uff1f",description:"JDK\u7248\u672c\uff1aJDK11",source:"@site/docs/java/java-se/concurrencemultithreading/callable-and-runnable.md",sourceDirName:"java/java-se/concurrencemultithreading",slug:"/java/java-se/concurrencemultithreading/callable-and-runnable",permalink:"/docs/java/java-se/concurrencemultithreading/callable-and-runnable",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/java/java-se/concurrencemultithreading/callable-and-runnable.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1678517863,formattedLastUpdatedAt:"Mar 11, 2023",frontMatter:{title:"Callable\u4e0eRunnable\u7684\u533a\u522b\u4f60\u77e5\u9053\u5417\uff1f",linkTitle:"Callable\u4e0eRunnable\u7684\u533a\u522b\u4f60\u77e5\u9053\u5417\uff1f",date:"2022-02-06T00:00:00.000Z",weight:202202061135},sidebar:"javase",previous:{title:"ThreadLocal\u6e90\u7801\u89e3\u6790",permalink:"/docs/java/java-se/concurrencemultithreading/ThreadLocal-source-analysis"},next:{title:"Java\u5e76\u53d1\u7f16\u7a0b\u4e2d\u7684\u4e09\u4e2a\u6982\u5ff5",permalink:"/docs/java/java-se/concurrencemultithreading/java-concurrency-three-concept"}},p={},c=[{value:"1. \u80cc\u666f",id:"1-\u80cc\u666f",level:3},{value:"2. Callable\u4e0eRunnable\u7684\u5173\u8054\u5206\u6790",id:"2-callable\u4e0erunnable\u7684\u5173\u8054\u5206\u6790",level:3},{value:"2.1 Callable\u4e0eRunnable\u6e90\u7801\u5206\u6790",id:"21-callable\u4e0erunnable\u6e90\u7801\u5206\u6790",level:4},{value:"2.2 \u4ece\u7ebf\u7a0b\u6c60\u770bCallable\u5982\u4f55\u5305\u88c5\u6210Runnable",id:"22-\u4ece\u7ebf\u7a0b\u6c60\u770bcallable\u5982\u4f55\u5305\u88c5\u6210runnable",level:4},{value:"2.3 \u7ebf\u7a0b\u6c60\u5982\u4f55\u6267\u884cCallable\u6709\u4ec0\u4e48\u7279\u70b9",id:"23-\u7ebf\u7a0b\u6c60\u5982\u4f55\u6267\u884ccallable\u6709\u4ec0\u4e48\u7279\u70b9",level:4},{value:"3. \u603b\u7ed3",id:"3-\u603b\u7ed3",level:3}],o={toc:c},s="wrapper";function b(e){let{components:a,...n}=e;return(0,l.kt)(s,(0,t.Z)({},o,n,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"JDK\u7248\u672c\uff1aJDK11")),(0,l.kt)("h3",{id:"1-\u80cc\u666f"},"1. \u80cc\u666f"),(0,l.kt)("p",null,"\u5728\u5e73\u65f6\u7684\u5f00\u53d1\u8fc7\u7a0b\u4e2d\u7ebf\u7a0b\u80af\u5b9a\u7528\u4e0d\u5c11\uff0c\u7ebf\u7a0b\u542f\u52a8\u6267\u884c\u9700\u8981\u5b9e\u73b0 ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Runnable"))," \u7c7b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'public class ThreadTest {\n\n    public static void main(String[] args) {\n        new Thread(new Runnable() {\n            @Override\n            public void run() {\n                System.out.println(111);\n            }\n        }, "Thread-mxsm").start();\n    }\n}\n')),(0,l.kt)("p",null,"\u662f\u81ea\u5df1\u65b0\u5efa\u4e00\u4e2a\u7ebf\u7a0b\u5bf9\u8c61\uff0c\u7136\u540e\u6267\u884c",(0,l.kt)("strong",{parentName:"p"},"Runnable")," \u6267\u884c\u5b8c\u6210\u7ebf\u7a0b\u7ed3\u675f\u3002"),(0,l.kt)("p",null,"\u9664\u4e86\u8fd9\u6837\u7684\u8fd8\u6709\u4f7f\u7528\u5230\u7ebf\u7a0b\u6c60\uff0c\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"public class ThreadTest {\n\n    public static void main(String[] args) {\n       ExecutorService executorService = Executors.newFixedThreadPool(2);\n        executorService.execute(new Runnable() {\n            @Override\n            public void run() {\n                System.out.println(111);\n            }\n        });\n    }\n}\n")),(0,l.kt)("p",null,"\u4f46\u662f\u5728\u7ebf\u7a0b\u6c60\u6765\u6267\u884c\u63d0\u4ea4\u4efb\u52a1\u7684\u65f6\u5019\uff0c\u4f60\u53ef\u80fd\u6ce8\u610f\u5230\u4e86\u8fd9\u6837\u60c5\u51b5\u5982\u4e0b\u56fe\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/java/concurrencemultithreading/image-20220206114743214.png",alt:"image-20220206114743214"})),(0,l.kt)("p",null,"\u5728\u6807\u53f71\u7684\u4f4d\u7f6e\uff0c\u4f60\u4f1a\u53d1\u73b0\u7adf\u7136\u8fd8\u53ef\u4ee5\u63d0\u4ea4\u4e00\u4e2a ",(0,l.kt)("strong",{parentName:"p"},"Callable")," \u5230\u7ebf\u7a0b\u6c60\u8fdb\u884c\u6267\u884c\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u95ee\u9898\u6765\u4e86\uff1a")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Runnable\u548cCallable\u6709\u4ec0\u4e48\u5173\u7cfb\uff0c\u4e3a\u4ec0\u4e48\u7ebf\u7a0b\u6c60\u53ef\u4ee5\u63d0\u4ea4Callable\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u4ece\u5355\u4e2a\u7ebf\u7a0b\u6765\u770b\uff0c\u7ebf\u7a0bThead\u53ea\u80fd\u6267\u884cRunnable\u63a5\u53e3\u7684\u5b9e\u73b0\uff0c\u4f46\u662f\u7ebf\u7a0b\u6c60\u4e3a\u4ec0\u4e48\u5c31\u53ef\u4ee5\u6267\u884cCallable")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Callable\u5982\u4f55\u7ecf\u8fc7\u5305\u88c5\u53d8\u6210Runnable\u7ed9\u7ebf\u7a0b\u8c03\u7528"))),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/java/concurrencemultithreading/Callable%E4%B8%8ERunnable.png",alt:"Callable\u4e0eRunnable"})),(0,l.kt)("h3",{id:"2-callable\u4e0erunnable\u7684\u5173\u8054\u5206\u6790"},"2. Callable\u4e0eRunnable\u7684\u5173\u8054\u5206\u6790"),(0,l.kt)("p",null,"\u4ece\u4e0a\u9762\u7684\u5217\u51fa\u7684\u4e09\u4e2a\u65b9\u9762\u6765\u5206\u6790\u4e24\u8005\u4e4b\u95f4\u7684\u5173\u8054\u3002"),(0,l.kt)("h4",{id:"21-callable\u4e0erunnable\u6e90\u7801\u5206\u6790"},"2.1 Callable\u4e0eRunnable\u6e90\u7801\u5206\u6790"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Runnable")," \u5e73\u65f6\u5728\u5f00\u53d1\u7684\u65f6\u5019\u7ecf\u5e38\u7528\uff0c\u6240\u4ee5\u5927\u5bb6\u4e5f\u6bd4\u8f83\u719f\u6089\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"@FunctionalInterface\npublic interface Runnable {\n    public abstract void run();\n}\n")),(0,l.kt)("p",null,"\u53ea\u6709\u4e00\u4e2a\u65b9\u6cd5 ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"run"))," \u3002 \u5728\u6e90\u7801\u4e2d\u7684\u6ce8\u91ca\u4e2d\u7ffb\u8bd1\u603b\u7ed3\u4e00\u4e0b\u5c31\u662f\uff1a",(0,l.kt)("strong",{parentName:"p"},"\u4efb\u4f55\u9700\u8981\u7531Thread\u6267\u884c\u7684\u7c7b\u90fd\u9700\u8981\u5b9e\u73b0Runnable"),"\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Tips: \u6240\u4ee5Callable\u5e94\u8be5\u662f\u5de7\u5999\u7684\u8f6c\u6362\u6210\u4e86Runnable")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Callable")," \u7528\u7684\u4e0d\u591a\uff0c\u770b\u4e00\u4e0b\u6e90\u7801\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"@FunctionalInterface\npublic interface Callable<V> {\n    V call() throws Exception;\n}\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Callable")," \u4e5f\u53ea\u6709\u4e00\u4e2a\u65b9\u6cd5 ",(0,l.kt)("strong",{parentName:"p"},"call")," \u4f46\u662f\u65b9\u6cd5\u6709\u8fd4\u56de\u503c\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u4ece\u6e90\u7801\u4e0a\u9762\u53ef\u4ee5\u770b\u51fa\u6765 Callable \u548c Runnable \u6ca1\u6709\u4efb\u4f55\u7ee7\u627f\u5173\u7cfb\uff0cRunnable\u7684\u65b9\u6cd5\u6ca1\u6709\u8fd4\u56de\u503c\uff0c\u800cCallable\u7684\u65b9\u6cd5\u6709\u8fd4\u56de\u503c\u3002")),(0,l.kt)("h4",{id:"22-\u4ece\u7ebf\u7a0b\u6c60\u770bcallable\u5982\u4f55\u5305\u88c5\u6210runnable"},"2.2 \u4ece\u7ebf\u7a0b\u6c60\u770bCallable\u5982\u4f55\u5305\u88c5\u6210Runnable"),(0,l.kt)("p",null,"JDK\u5728Runnable\u7684\u6ce8\u91ca\u4e0a\u6709\u660e\u786e\u7684\u8bf4\u660e\uff1a\u4efb\u4f55\u9700\u8981\u7531Thread\u6267\u884c\u7684\u7c7b\u90fd\u9700\u8981\u5b9e\u73b0Runnable\u3002\u6240\u4ee5\u6211\u4eec\u53ef\u4ee5\u63a8\u65ad\u51fa\u6765Callable\u7528\u4e86\u67d0\u79cd\u65b9\u5f0f\u5305\u88c5\u6210\u4e86Runnable\u3002"),(0,l.kt)("p",null,"\u901a\u8fc7 ",(0,l.kt)("strong",{parentName:"p"},"ExecutorService#submit")," \u65b9\u6cd5\u63d0\u4ea4 Callable \u6765\u5206\u6790\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/java/concurrencemultithreading/image-20220206134605524.png",alt:"image-20220206134605524"})),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"AbstractExecutorService#submit\u65b9\u6cd5\u4e2d newTaskFor \u65b9\u6cd5\u5c06 Callable\u8f6c\u6362\u6210\u4e86 RunnableFuture\u3002")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/java/concurrencemultithreading/image-20220206134807913.png",alt:"image-20220206134807913"})),(0,l.kt)("p",null,"\u901a\u8fc7 ",(0,l.kt)("strong",{parentName:"p"},"newTaskFor")," \u65b9\u6cd5\u53ef\u4ee5\u53d1\u73b0\uff0c\u6700\u7ec8\u662f\u521b\u5efa\u4e86\u4e00\u4e2a ",(0,l.kt)("strong",{parentName:"p"},"FutureTask")," \u5bf9\u8c61\uff0c",(0,l.kt)("strong",{parentName:"p"},"Callable")," \u4f5c\u4e3a\u6784\u9020\u51fd\u6570\u7684\u53c2\u6570\u3002\u90a3\u4e48\u770b\u4e00\u4e0b",(0,l.kt)("strong",{parentName:"p"},"FutureTask")," \uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"public class FutureTask<V> implements RunnableFuture<V> {\n    /** The underlying callable; nulled out after running */\n    private Callable<V> callable;\n    /** The result to return or exception to throw from get() */\n    private Object outcome; // non-volatile, protected by state reads/writes\n    /** The thread running the callable; CASed during run() */\n    private volatile Thread runner;\n    /** Treiber stack of waiting threads */\n    private volatile WaitNode waiters;\n    \n    public FutureTask(Callable<V> callable) {\n        if (callable == null)\n            throw new NullPointerException();\n        this.callable = callable;\n        this.state = NEW;       // ensure visibility of callable\n    }\n    //\u7701\u7565\u90e8\u5206\u4ee3\u7801\n}\n")),(0,l.kt)("p",null,"Callable\u4f5c\u4e3a\u4e86FutureTask\u7684\u4e00\u4e2a\u5c5e\u6027\u503c\u3002\u4e4b\u524d\u8bf4\u8fc7\uff0c\u8981\u60f3\u88abThread\u6267\u884c\u5fc5\u987b\u5b9e\u73b0Runnable\u3002\u90a3\u4e48\u6211\u4eec\u770b\u4e00\u4e0b ",(0,l.kt)("strong",{parentName:"p"},"FutureTask")," \u7684\u5b9e\u73b0\u7c7b ",(0,l.kt)("strong",{parentName:"p"},"RunnableFuture")," \uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/java/concurrencemultithreading/image-20220206135449066.png",alt:"image-20220206135449066"})),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"RunnableFuture")," \u7ee7\u627f\u4e86 ",(0,l.kt)("strong",{parentName:"li"},"Runnable")," ")),(0,l.kt)("p",null,"\u6362\u53e5\u8bdd\u8bf4\uff1a",(0,l.kt)("strong",{parentName:"p"},"FutureTask \u5b9e\u73b0\u4e86 Runnable")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/java/concurrencemultithreading/image-20220206135805034.png",alt:"image-20220206135805034"})),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"FutureTask#run \u5185\u90e8\u5c31\u8c03\u7528\u4e86Callable\u7684call\u65b9\u6cd5"))),(0,l.kt)("p",null,"\u7136\u540e\u7531\u7ebf\u7a0b\u6c60\u4e2d\u7684Thread\u53bb\u6267\u884cFutureTask(\u4e5f\u5c31\u662fRunnable\u7684\u5b9e\u73b0\u7684\u5b9e\u4f8b)\u3002\u4e0a\u9762\u7c7b\u7684\u7ee7\u627f\u5173\u7cfb\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/java/concurrencemultithreading/image-20220206140347583.png",alt:"image-20220206140347583"})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Callable\u8f6c\u6362\u6210Runnable\u7684\u6d41\u7a0b"),"\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"\u5f00\u53d1\u8005\u5b9e\u73b0Callable\u63a5\u53e3")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"\u5b9e\u4f8b\u5316Callable\uff0c\u7136\u540e\u63d0\u4ea4\u5230\u7ebf\u7a0b\u6c60")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"\u4ee5Callable\u4e3a\u6784\u9020\u51fd\u6570\u521b\u5efaFutureTask")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"\u6700\u7ec8\u5c06FutureTask\u63d0\u4ea4\u7ed9\u7ebf\u7a0b\u6c60\u7684\u7ebf\u7a0b\u8fdb\u884c\u6267\u884c"))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Tips: \u5728\u63d0\u4ea4Runnable\u7684\u5b9e\u73b0\u5230\u7ebf\u7a0b\u6c60\u6267\u884c\u7684\u65f6\u5019\uff0c\u5982\u679c\u9700\u8981\u83b7\u53d6\u5230\u8fd4\u56de\u503c\uff0c\u4f1a\u5c06 Runnable\u7684\u5b9e\u4f8b\uff0c\u901a\u8fc7RunnableAdapter\u9002\u914d\u5668\u9002\u914d\u6210Callable\u3002"),(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-java"},'    private static final class RunnableAdapter<T> implements Callable<T> {\n        private final Runnable task;\n        private final T result;\n        RunnableAdapter(Runnable task, T result) {\n            this.task = task;\n            this.result = result;\n        }\n        public T call() {\n            task.run();\n            return result;\n        }\n        public String toString() {\n            return super.toString() + "[Wrapped task = " + task + "]";\n        }\n    }\n'))),(0,l.kt)("h4",{id:"23-\u7ebf\u7a0b\u6c60\u5982\u4f55\u6267\u884ccallable\u6709\u4ec0\u4e48\u7279\u70b9"},"2.3 \u7ebf\u7a0b\u6c60\u5982\u4f55\u6267\u884cCallable\u6709\u4ec0\u4e48\u7279\u70b9"),(0,l.kt)("p",null,"\u5c06Callable\u5305\u88c5\u6210Runnable\u540e\uff0c\u7ebf\u7a0b\u6c60\u7684\u6267\u884c\u548c\u6267\u884cRunnable\u4e00\u6837\uff0cCallable\u7684\u7279\u70b9\u5c31\u662f\u53ef\u4ee5\u83b7\u53d6\u5230\u8fd4\u56de\u503c\u3002\u5982\u679c\u6267\u884c\u7684\u903b\u8f91\u4e0d\u5173\u5fc3\u8fd4\u56de\u503c\u5c31\u53ef\u4ee5\u76f4\u63a5\u7528Runnable\u6765\u3002\u4f46\u662f\u5982\u679c\u9700\u8981\u6d89\u53ca\u5230\u83b7\u53d6\u5230\u4e1a\u52a1\u903b\u8f91\u4e2d\u7684\u8fd4\u56de\u503c\u90a3\u4e48\u5c31\u4f7f\u7528Callable\u6765\u63d0\u4ea4\u5230\u7ebf\u7a0b\u6c60\u4e2d\u3002"),(0,l.kt)("h3",{id:"3-\u603b\u7ed3"},"3. \u603b\u7ed3"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Runnable\u548cCallable\u4e24\u8005\u6ca1\u6709\u7ee7\u627f\u5173\u7cfb\uff0cCallable\u901a\u8fc7FutureTask\u5305\u88c5\u6210Runnable\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u7ebf\u7a0b\u6c60\u6267\u884c\u4efb\u52a1\u7684\u65f6\u5019\uff0c\u5982\u679c\u5173\u7cfb\u8fd4\u56de\u503c\u5c31\u7528Callable\uff0c\u4e0d\u5173\u5fc3\u8fd4\u56de\u503c\u7528Runnable\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Runnable\u5982\u679c\u4e5f\u9700\u8981\u8fd4\u56de\u503c\uff0c\u7ebf\u7a0b\u6c60\u5185\u90e8\u662f\u901a\u8fc7RunnableAdapter\u9002\u914d\u5668\u6765\u9002\u914d\u6210Callable"))))}b.isMDXComponent=!0}}]);