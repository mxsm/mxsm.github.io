"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[5623],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(n),d=a,h=s["".concat(o,".").concat(d)]||s[d]||m[d]||i;return n?r.createElement(h,l(l({ref:t},u),{},{components:n})):r.createElement(h,l({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c[s]="string"==typeof e?e:a,l[1]=c;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5830:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={title:"\u7ebf\u7a0b\u6c60\u7684\u6570\u91cf\u548c\u7ebf\u7a0b\u6c60\u4e2d\u7ebf\u7a0b\u6570\u91cf\u5982\u4f55\u8bbe\u7f6e-\u5b9e\u8df5\u7bc7",linkTitle:"\u7ebf\u7a0b\u6c60\u7684\u6570\u91cf\u548c\u7ebf\u7a0b\u6c60\u4e2d\u7ebf\u7a0b\u6570\u91cf\u5982\u4f55\u8bbe\u7f6e-\u5b9e\u8df5\u7bc7",date:new Date("2022-02-20T00:00:00.000Z"),weight:202202202214},l=void 0,c={unversionedId:"java/java-se/concurrencemultithreading/threadpool-thread-number-practice",id:"java/java-se/concurrencemultithreading/threadpool-thread-number-practice",title:"\u7ebf\u7a0b\u6c60\u7684\u6570\u91cf\u548c\u7ebf\u7a0b\u6c60\u4e2d\u7ebf\u7a0b\u6570\u91cf\u5982\u4f55\u8bbe\u7f6e-\u5b9e\u8df5\u7bc7",description:"1.\u5f15\u8a00",source:"@site/docs/java/java-se/concurrencemultithreading/threadpool-thread-number-practice.md",sourceDirName:"java/java-se/concurrencemultithreading",slug:"/java/java-se/concurrencemultithreading/threadpool-thread-number-practice",permalink:"/docs/java/java-se/concurrencemultithreading/threadpool-thread-number-practice",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/java/java-se/concurrencemultithreading/threadpool-thread-number-practice.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1691846266,formattedLastUpdatedAt:"Aug 12, 2023",frontMatter:{title:"\u7ebf\u7a0b\u6c60\u7684\u6570\u91cf\u548c\u7ebf\u7a0b\u6c60\u4e2d\u7ebf\u7a0b\u6570\u91cf\u5982\u4f55\u8bbe\u7f6e-\u5b9e\u8df5\u7bc7",linkTitle:"\u7ebf\u7a0b\u6c60\u7684\u6570\u91cf\u548c\u7ebf\u7a0b\u6c60\u4e2d\u7ebf\u7a0b\u6570\u91cf\u5982\u4f55\u8bbe\u7f6e-\u5b9e\u8df5\u7bc7",date:"2022-02-20T00:00:00.000Z",weight:202202202214},sidebar:"javase",previous:{title:"\u7ebf\u7a0b\u6c60\u7684\u7ebf\u7a0b\u7684\u7c7b\u578b\u4f60\u662f\u5426\u4e86\u89e3\uff1f",permalink:"/docs/java/java-se/concurrencemultithreading/threadpool-thread-notice"},next:{title:"\u7ebf\u7a0b\u6c60\u7684\u6570\u91cf\u548c\u7ebf\u7a0b\u6c60\u4e2d\u7ebf\u7a0b\u6570\u91cf\u5982\u4f55\u8bbe\u7f6e-\u7406\u8bba\u7bc7",permalink:"/docs/java/java-se/concurrencemultithreading/threadpool-thread-number"}},o={},p=[{value:"1.\u5f15\u8a00",id:"1\u5f15\u8a00",level:3},{value:"2. \u76d1\u63a7\u5de5\u5177\u8bf4\u660e",id:"2-\u76d1\u63a7\u5de5\u5177\u8bf4\u660e",level:3},{value:"3. \u8ba1\u7b97\u5bc6\u96c6\u7c7b\u578b",id:"3-\u8ba1\u7b97\u5bc6\u96c6\u7c7b\u578b",level:3},{value:"3.1 \u5355\u4e2a\u7ebf\u7a0b\u6c60",id:"31-\u5355\u4e2a\u7ebf\u7a0b\u6c60",level:4},{value:"3.2 \u591a\u7ebf\u7a0b\u6c60(2\u4e2a)",id:"32-\u591a\u7ebf\u7a0b\u6c602\u4e2a",level:4},{value:"4. IO\u5bc6\u96c6\u578b",id:"4-io\u5bc6\u96c6\u578b",level:3},{value:"4.1 \u5355\u7ebf\u7a0b\u6c60",id:"41-\u5355\u7ebf\u7a0b\u6c60",level:4},{value:"4.2 \u591a\u7ebf\u7a0b\u6c60(2\u4e2a)",id:"42-\u591a\u7ebf\u7a0b\u6c602\u4e2a",level:4},{value:"5. \u7ed3\u8bba",id:"5-\u7ed3\u8bba",level:3}],u={toc:p},s="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"1\u5f15\u8a00"},"1.\u5f15\u8a00"),(0,a.kt)("p",null,"\u5728\u4e4b\u524d\u7684\u6587\u7ae0\u8bb2\u4e86\u4e00\u4e9b\u7ebf\u7a0b\u6c60\u6570\u91cf\u548c\u7ebf\u7a0b\u6c60\u4e2d\u7ebf\u7a0b\u6570\u91cf\u5982\u4f55\u8bbe\u7f6e\u7684\u4e00\u4e9b\u7406\u8bba\u77e5\u8bc6\uff08",(0,a.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7066675779966337031"},"\u7ebf\u7a0b\u6c60\u7684\u6570\u91cf\u548c\u7ebf\u7a0b\u6c60\u4e2d\u7ebf\u7a0b\u6570\u91cf\u5982\u4f55\u8bbe\u7f6e-\u7406\u8bba\u7bc7"),"\uff09\uff0c\u540c\u65f6\u4e5f\u4ecb\u7ecd\u4e86\u4e00\u4e9b\u5173\u4e8eLinux\u7684\u8d1f\u8f7d\u4ee5\u53ca\u64cd\u4f5c\u7cfb\u7edf\u4e2d\u4e0a\u4e0b\u6587\u5207\u6362\u7684\u4e00\u4e9b\u77e5\u8bc6(\u5927\u5bb6\u53ef\u4ee5\u6df1\u5165\u53bb\u4e86\u89e3\u4e00\u4e0b\uff0c\u6211\u8fd9\u8fb9\u53ea\u662f\u505a\u4e86\u4e00\u4e9b\u7b80\u5355\u8bf4\u660e)\u3002\u672c\u7bc7\u8981\u8bb2\u7684\u662f\u6839\u636e\u4e4b\u524d\u7684\u4e00\u4e9b\u7406\u8bba\u5b9e\u9645\u6765\u9a8c\u8bc1\u548c\u8bbe\u7f6e\u3002\u6839\u636e\u4e0d\u540c\u7684\u7ebf\u7a0b\u6c60\u6570\u91cf\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5355\u7ebf\u7a0b\u6c60"),(0,a.kt)("li",{parentName:"ul"},"\u591a\u7ebf\u7a0b\u6c60(\u5206\u6790\u7ebf\u7a0b\u6c60\u6570\u91cf\u4e3a2\u7684)")),(0,a.kt)("p",null,"\u5206\u6790\u5728\u8ba1\u7b97\u5bc6\u96c6\u578b\u548cI/O\u5bc6\u96c6\u578b\u5bf9\u7ebf\u7a0b\u6570\u91cf\u548c\u7ebf\u7a0b\u6c60\u7684\u6570\u91cf\u7684\u9009\u62e9\u3002"),(0,a.kt)("h3",{id:"2-\u76d1\u63a7\u5de5\u5177\u8bf4\u660e"},"2. \u76d1\u63a7\u5de5\u5177\u8bf4\u660e"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"vmstat"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"vmstat -tw 3\n")),(0,a.kt)("p",{parentName:"li"},"\u7528\u6765\u67e5\u770b\u7cfb\u7edf\u7684\u4e0a\u4e0b\u6587\u5207\u6362\u4ee5\u53caCPU\u7684\u7528\u6237\u8fdb\u7a0b\u4f7f\u7528\u7387")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"pidstat"),(0,a.kt)("p",{parentName:"li"},"pidstat\u547d\u4ee4\u76d1\u63a7\u5355\u4e2a\u7ebf\u7a0b\u7684\u4e0a\u4e0b\u6587\u5207\u6362\uff0c\u5982\u679c\u547d\u4ee4\u6ca1\u6709\u9700\u8981\u5b89\u88c5"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"dnf install sysstat\n")),(0,a.kt)("p",{parentName:"li"},"\u7528\u5982\u4e0b\u547d\u4ee4\u6765\u76d1\u63a7"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"pidstat -t -w -p <pid> -T ALL\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"top"),(0,a.kt)("p",{parentName:"li"},"\u67e5\u770bCPU\u7684\u4f7f\u7528\u7387"))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Tips: \u547d\u4ee4vmstat\u548cpidstat\u7684\u4f7f\u7528\u5927\u5bb6\u53ef\u4ee5\u53bb\u7f51\u4e0a\u641c\u7d22\u76f8\u5173\u4f7f\u7528\u65b9\u5f0f\uff0c\u8fd9\u91cc\u4e0d\u505a\u91cd\u70b9\u7684\u4ecb\u7ecd")),(0,a.kt)("p",null,"\u6d4b\u8bd5\u6240\u7528CPU\u4fe1\u606f\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"C:%5CUsers%5Cmxsm%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20220221224907788.png",alt:"image-20220221224907788"})),(0,a.kt)("h3",{id:"3-\u8ba1\u7b97\u5bc6\u96c6\u7c7b\u578b"},"3. \u8ba1\u7b97\u5bc6\u96c6\u7c7b\u578b"),(0,a.kt)("p",null,"\u4e0b\u9762\u901a\u8fc7\u4ee3\u7801\u6765\u6f14\u793a\u5355\u7ebf\u7a0b\u6c60\u548c\u591a\u7ebf\u7a0b\u6c60\u5bf9\u8ba1\u7b97\u5bc6\u96c6\u578b\u7684\u5e94\u7528\u5e94\u8be5\u5982\u4f55\u8bbe\u7f6e"),(0,a.kt)("h4",{id:"31-\u5355\u4e2a\u7ebf\u7a0b\u6c60"},"3.1 \u5355\u4e2a\u7ebf\u7a0b\u6c60"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'public class Test {\n          private static long MAX = Integer.MAX_VALUE / 50L;\n    public static void main(String[] args) throws Exception {\n        long sum = 0;\n        int nThreads = Integer.parseInt(args[0]);\n        int times = Integer.parseInt(args[1]);\n        ExecutorService service = Executors.newFixedThreadPool(nThreads, new ThreadFactory() {\n            private AtomicLong num = new AtomicLong(1);\n\n            @Override\n            public Thread newThread(Runnable r) {\n                Thread thread = new Thread(r, "thread-mxsm-" + num.getAndIncrement());\n                thread.setDaemon(false);\n                return thread;\n            }\n        });\n        for (int i = 0; i < times; ++i) {\n            sum += extracted(nThreads,service);\n        }\n        System.out.println("\u7ebf\u7a0b\u6570\u91cf\uff1a"+nThreads+"  "+times+"\u6b21\u6267\u884c\u7684\u5e73\u5747\u65f6\u95f4\uff1a"+(sum / times)+"ms");\n        service.shutdown();\n    }\n\n    private static long extracted(int nThreads,ExecutorService service) throws InterruptedException {\n        AtomicLong start = new AtomicLong(0);\n\n        CountDownLatch countDownLatch = new CountDownLatch(1);\n        CyclicBarrier barrier = new CyclicBarrier(nThreads);\n\n        for (int i = 0; i < nThreads; ++i) {\n            service.submit(new Runnable() {\n                private volatile long current = 0;\n                @Override\n                public void run() {\n                    try {\n                        barrier.await();\n                    } catch (InterruptedException e) {\n                        e.printStackTrace();\n                    } catch (BrokenBarrierException e) {\n                        e.printStackTrace();\n                    }\n                    do {\n                        for (int i = 0; i < 200000; ++i) {\n                        }\n                        current = start.incrementAndGet();\n                    } while (current < MAX);\n                    countDownLatch.countDown();\n                }\n            });\n        }\n        long current = System.currentTimeMillis();\n        countDownLatch.await();\n        long time = System.currentTimeMillis() - current;\n        return time;\n    }\n\n}\n')),(0,a.kt)("p",null,"\u8fd0\u884c\u4ee3\u7801\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"java com.github.mxsm.grpc.login.Test \u53c2\u65701 \u53c2\u65702\n")),(0,a.kt)("p",null,"\u8bf4\u660e\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u53c2\u65701\uff1a\u7ebf\u7a0b\u6570\u91cf"),(0,a.kt)("li",{parentName:"ul"},"\u53c2\u65702\uff1a \u6267\u884c\u6b21\u6570")),(0,a.kt)("p",null,"\u8fd0\u884c\u7ed3\u679c\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"C:%5CUsers%5Cmxsm%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20220221230214963.png",alt:"image-20220221230214963"})),(0,a.kt)("p",null,"\u73b0\u8c61\u7ed3\u8bba\uff1a\u5bf9\u4e8e\u8ba1\u7b97\u5bc6\u96c6\u578b\uff0c\u5355\u4e2a\u7ebf\u7a0b\u6267\u884c\u7684\u6548\u7387\u8d85\u8fc7\u5176\u4ed6\u7684\u65b9\u5f0f\uff0c\u5176\u4ed6\u7684\u65b9\u5f0f\u65f6\u95f4\u76f8\u5dee\u4e5f\u4e0d\u5230"),(0,a.kt)("h4",{id:"32-\u591a\u7ebf\u7a0b\u6c602\u4e2a"},"3.2 \u591a\u7ebf\u7a0b\u6c60(2\u4e2a)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'public class Test {\n\n        private static long MAX = Integer.MAX_VALUE / 50L;\n\n    public static void main(String[] args) throws Exception {\n        long sum = 0;\n        int nThreads = Integer.parseInt(args[0]);\n        int times = Integer.parseInt(args[1]);\n        ExecutorService service = Executors.newFixedThreadPool(nThreads, new ThreadFactory() {\n            private AtomicLong num = new AtomicLong(1);\n\n            @Override\n            public Thread newThread(Runnable r) {\n                Thread thread = new Thread(r, "thread-mxsm1-" + num.getAndIncrement());\n                thread.setDaemon(false);\n                return thread;\n            }\n        });\n        ExecutorService service1 = Executors.newFixedThreadPool(nThreads, new ThreadFactory() {\n            private AtomicLong num = new AtomicLong(1);\n\n            @Override\n            public Thread newThread(Runnable r) {\n                Thread thread = new Thread(r, "thread-mxsm2-" + num.getAndIncrement());\n                thread.setDaemon(false);\n                return thread;\n            }\n        });\n        for (int i = 0; i < times; ++i) {\n            sum += extracted(nThreads,service,service1);\n        }\n        System.out.println("\u603b\u7684\u7ebf\u7a0b\u6570\u91cf\uff1a"+(nThreads*2)+"  "+times+"\u6b21\u6267\u884c\u7684\u5e73\u5747\u65f6\u95f4\uff1a"+(sum / times)+"ms");\n        service.shutdown();\n        service1.shutdown();\n    }\n\n    private static long extracted(int nThreads,ExecutorService service,ExecutorService service1) throws InterruptedException {\n        AtomicLong start = new AtomicLong(0);\n\n        CountDownLatch countDownLatch = new CountDownLatch(1);\n        CyclicBarrier barrier = new CyclicBarrier(nThreads*2);\n\n\n        for (int i = 0; i < nThreads; ++i) {\n            service.submit(new Runnable() {\n                private volatile long current = 0;\n\n                @Override\n                public void run() {\n                    try {\n                        barrier.await();\n                    } catch (InterruptedException e) {\n                        e.printStackTrace();\n                    } catch (BrokenBarrierException e) {\n                        e.printStackTrace();\n                    }\n                    do {\n                        for (int i = 0; i < 200000; ++i) {\n                        }\n                        current = start.incrementAndGet();\n                    } while (current < MAX);\n                    countDownLatch.countDown();\n                }\n            });\n            service1.submit(new Runnable() {\n                private volatile long current = 0;\n\n                @Override\n                public void run() {\n                    try {\n                        barrier.await();\n                    } catch (InterruptedException e) {\n                        e.printStackTrace();\n                    } catch (BrokenBarrierException e) {\n                        e.printStackTrace();\n                    }\n                    do {\n                        for (int i = 0; i < 200000; ++i) {\n                        }\n                        current = start.incrementAndGet();\n                    } while (current < MAX);\n                    countDownLatch.countDown();\n                }\n            });\n        }\n        long current = System.currentTimeMillis();\n        countDownLatch.await();\n        long time = System.currentTimeMillis() - current;\n        return time;\n    }\n}\n')),(0,a.kt)("p",null,"\u8fd0\u884c\u4ee3\u7801\u7ed3\u679c\u5982\u4e0b\u56fe\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"C:%5CUsers%5Cmxsm%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20220221230722460.png",alt:"image-20220221230722460"})),(0,a.kt)("p",null,"\u73b0\u8c61\u7ed3\u8bba\uff1a\u5bf9\u4e8e\u8ba1\u7b97\u5bc6\u96c6\u578b\uff0c\u5355\u7ebf\u7a0b\u6c60\u548c\u591a\u7ebf\u7a0b\u6c60\u57fa\u672c\u4e0a\u4e00\u6837\uff0c\u800c\u7ebf\u7a0b\u6c60\u7684\u6570\u91cf\u4e0d\u540c\uff0c\u7ebf\u7a0b\u6c60\u7684\u7ebf\u7a0b\u6570\u91cf\u4e0d\u540c\u65f6\u95f4\u5dee\u4e0d\u591a\u3002"),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u7ed3\u8bba\uff1a\u5bf9\u4e8e\u8ba1\u7b97\u5bc6\u96c6\u578b\u7684\u7c7b\u578b\uff0c\u6570\u636e\u7684\u8ba1\u7b97\u4e3b\u8981\u662f\u5728\u5185\u5b58\uff0c\u7ebf\u7a0b\u9664\u4e86\u88ab\u52a8\u7684\u4e0a\u4e0b\u6587\u5207\u6362\u51e0\u4e4e\u6ca1\u6709\u4e3b\u52a8\u4e0a\u4e0b\u6587\u5207\u6362\uff0c\u6240\u4ee5\u51cf\u5c11\u4e0a\u4e0b\u6587\u7684\u5207\u6362\u662f\u63d0\u9ad8\u6267\u884c\u6548\u7387\u7684\u5173\u952e\u3002")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Tips: \u5728Netty\u7684BossGroup EventLoopGroup\u7684\u7ebf\u7a0b\u6570\u91cf\u4e00\u822c\u8bbe\u7f6e\u4e3a1\uff0c\u8fd9\u91cc\u4e3b\u8981\u662f\u56e0\u4e3a\u5c5e\u4e8e\u8ba1\u7b97\u5bc6\u96c6\u7c7b\u578b\u7684\u5de5\u4f5c\u3002")),(0,a.kt)("h3",{id:"4-io\u5bc6\u96c6\u578b"},"4. IO\u5bc6\u96c6\u578b"),(0,a.kt)("p",null,"IO\u5bc6\u96c6\u578b\u901a\u8fc7\u4f7f\u7528\u5982\u4e0b\u4ee3\u7801\u66ff\u6362"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"try {\n        TimeUnit.MICROSECONDS.sleep(1);\n    } catch (InterruptedException e) {\n        e.printStackTrace();\n    }\n//\u66ff\u6362\nfor (int i = 0; i < 200000; ++i) {\n}    \n\n\n\nprivate static long MAX = Integer.MAX_VALUE / 6L;\n//\u66ff\u6362\u6210\nprivate static long MAX = 5000;\n")),(0,a.kt)("p",null,"\u5355\u7ebf\u7a0b\u6c60\u4ee3\u7801\u548c\u591a\u7ebf\u7a0b\u6c60\u4ee3\u7801\u90fd\u66ff\u6362"),(0,a.kt)("h4",{id:"41-\u5355\u7ebf\u7a0b\u6c60"},"4.1 \u5355\u7ebf\u7a0b\u6c60"),(0,a.kt)("p",null,"\u8fd0\u884c\u66ff\u6362\u540e\u7684\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"java com.github.mxsm.threadnum.Test xx xxx\n#\u4f8b\u5b50\njava com.github.mxsm.threadnum.Test 1 10\n")),(0,a.kt)("p",null,"\u8fd0\u884c\u4ee3\u7801\u7ed3\u679c\u5982\u4e0b\u56fe\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"C:%5CUsers%5Cmxsm%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20220221231303415.png",alt:"image-20220221231303415"})),(0,a.kt)("p",null,"\u73b0\u8c61\u7ed3\u8bba\uff1a \u5bf9\u4e8eIO\u5bc6\u96c6\u578b\uff0c\u968f\u7740\u7ebf\u7a0b\u6c60\u4e2d\u7ebf\u7a0b\u6570\u91cf\u589e\u52a0\u65f6\u95f4\u4f1a\u4e0b\u964d\uff0c\u5f53\u5230\u8fbe\u67d0\u4e2a\u6700\u5927\u503c\u540e\u7ebf\u7a0b\u6c60\u7ebf\u7a0b\u6570\u91cf\u589e\u52a0\u53ef\u80fd\u5bfc\u81f4\u8017\u65f6\u589e\u52a0\u3002\u5927\u91cf\u7684\u7ebf\u7a0b\u4e0a\u4e0b\u6587\u5207\u6362\u5bfc\u81f4\u8017\u65f6\u4e25\u91cd\u3002"),(0,a.kt)("h4",{id:"42-\u591a\u7ebf\u7a0b\u6c602\u4e2a"},"4.2 \u591a\u7ebf\u7a0b\u6c60(2\u4e2a)"),(0,a.kt)("p",null,"\u8fd0\u884c\u4ee3\u7801\u3002\u7ed3\u679c\u5982\u4e0b\u56fe\u6240\u793a\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"C:%5CUsers%5Cmxsm%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20220221231723237.png",alt:"image-20220221231723237"})),(0,a.kt)("p",null,"\u73b0\u8c61\u7ed3\u8bba\uff1a \u5bf9\u4e8eIO\u5bc6\u96c6\u578b\uff0c\u5355\u7ebf\u7a0b\u6c60\u548c\u591a\u7ebf\u7a0b\u6c60\u6548\u679c\u4e00\u6837\u3002"),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u7ed3\u8bba\uff1a\u5bf9\u4e8eIO\u5bc6\u96c6\u578b\uff0c\u4e00\u5b9a\u8303\u56f4\u5185\u968f\u7740\u7ebf\u7a0b\u6570\u91cf\u7684\u589e\u52a0\u8017\u65f6\u4f1a\u5448\u73b0\u660e\u663e\u7684\u4e0b\u964d\uff0c\u4f46\u662f\u5f53\u7ebf\u7a0b\u6570\u91cf\u8fc7\u591a\u7684\u65f6\u5019\uff0c\u8fd9\u4e2a\u65f6\u5019\u7ebf\u7a0b\u4e0a\u4e0b\u6587\u5207\u6362\u4f1a\u589e\u52a0\uff0c\u5bfc\u81f4\u6574\u4f53\u7684\u65f6\u95f4\u589e\u52a0\u3002")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Tips: \u8fd9\u91cc\u4e3a\u4e86\u8282\u7ea6\u65f6\u95f4\u5c31\u6ca1\u6709\u5427\u503c\u8bbe\u7f6e\u7684\u5f88\u5927\u6240\u4ee5\u6ca1\u6709\u901a\u8fc7\u547d\u4ee4\u53bb\u67e5\u770b\u4e0a\u4e0b\u6587\u7684\u5207\u6362\u3002\u5927\u5bb6\u53ef\u4ee5\u6267\u884c\u901a\u8fc7\u547d\u4ee4\u67e5\u770b")),(0,a.kt)("h3",{id:"5-\u7ed3\u8bba"},"5. \u7ed3\u8bba"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u5b8c\u6210\u4e00\u4ef6\u4e8b\u60c5\uff0c\u7ebf\u7a0b\u6c60\u6570\u91cf\u7684\u591a\u5c11\u4e0d\u5f71\u54cd\uff0c\u4f46\u662f\u5982\u679c\u662f\u5b8c\u6210\u4e0d\u540c\u7684\u4e8b\u60c5\uff0c\u9700\u8981\u4e0d\u540c\u7684\u7ebf\u7a0b\u6c60\u8fdb\u884c\u7ebf\u7a0b\u6c60\u9694\u79bb\u3002\u540c\u65f6\u5728\u4e00\u4e2a\u9879\u76ee\u4e2d\u591a\u4e2a\u4e0d\u540c\u7c7b\u578b\u7684\u7ebf\u7a0b\u6c60\u4e4b\u95f4\u5728\u4e0a\u4e0b\u6587\u5207\u6362\u7684\u65f6\u5019\u4f1a\u6709\u5f71\u54cd\u3002\u4f8b\u5982\uff1a\u8ba1\u7b97\u5bc6\u96c6\u578b\u548cIO\u5bc6\u96c6\u578b\u7684\u4e24\u4e2a\u7ebf\u7a0b\u6c60\u6df7\u5408"),(0,a.kt)("li",{parentName:"ul"},"\u8ba1\u7b97\u5bc6\u96c6\u578b\u5982\u679c\u662f\u5b8c\u6210\u4e00\u4ef6\u4e8b\u60c5\uff0c\u7ebf\u7a0b\u4e3a\u8d8a\u5c11\u8d8a\u597d\u3002\u53ef\u4ee5\u51cf\u5c11\u4e0a\u4e0b\u6587\u5207\u6362\u7684\u65f6\u95f4\u3002"),(0,a.kt)("li",{parentName:"ul"},"I/O\u5bc6\u96c6\u5728\u7ebf\u7a0b\u6c60\u7ebf\u7a0b\u7684\u6570\u91cf\u5728\u4e00\u5b9a\u8303\u56f4\u5185\u8d8a\u591a\u8d8a\u597d\uff0c\u5904\u7406\u5b8c\u6210\u4e00\u4ef6\u4e8b\u60c5\u8017\u65f6\u4e5f\u8d8a\u5c11\u3002\u4f46\u662f\u589e\u52a0\u5230\u4e00\u5b9a\u7a0b\u5ea6\u540e\u4f1a\u589e\u52a0\u4e0a\u4e0b\u6587\u7684\u5207\u6362\u8017\u65f6\u53cd\u800c\u5bfc\u81f4\u65f6\u95f4\u589e\u52a0\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u7ebf\u7a0b\u6570\u91cf\u7684\u5230\u5e95\u8bbe\u7f6e\u591a\u5c11\u3002\u6ca1\u6709\u4e00\u4e2a\u7edd\u5bf9\u7684\u4ec0\u4e48\u516c\u5f0f\u3002\u9700\u8981\u8fdb\u884c\u538b\u529b\u6d4b\u8bd5\u4ee5\u53ca\u4e0d\u65ad\u7684\u8c03\u6574")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6211\u662f\u8682\u8681\u80cc\u5927\u8c61\uff0c\u6587\u7ae0\u5bf9\u4f60\u6709\u5e2e\u52a9\u70b9\u8d5e\u5173\u6ce8\u6211\uff0c\u6587\u7ae0\u6709\u4e0d\u6b63\u786e\u7684\u5730\u65b9\u8bf7\u60a8\u65a7\u6b63\u7559\u8a00\u8bc4\u8bba~\u8c22\u8c22")))}m.isMDXComponent=!0}}]);