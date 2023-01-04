"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[8716],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>v});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,c=e.originalType,l=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),p=u(t),m=i,v=p["".concat(l,".").concat(m)]||p[m]||d[m]||c;return t?r.createElement(v,o(o({ref:n},s),{},{components:t})):r.createElement(v,o({ref:n},s))}));function v(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var c=t.length,o=new Array(c);o[0]=m;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a[p]="string"==typeof e?e:i,o[1]=a;for(var u=2;u<c;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3826:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>c,metadata:()=>a,toc:()=>u});var r=t(7462),i=(t(7294),t(3905));const c={},o=void 0,a={unversionedId:"java/java-se/concurrencemultithreading/threadpool-how-to-chosice",id:"java/java-se/concurrencemultithreading/threadpool-how-to-chosice",title:"threadpool-how-to-chosice",description:"\u6301\u7eed\u521b\u4f5c\uff0c\u52a0\u901f\u6210\u957f\uff01\u8fd9\u662f\u6211\u53c2\u4e0e\u300c\u6398\u91d1\u65e5\u65b0\u8ba1\u5212 \xb7 10 \u6708\u66f4\u6587\u6311\u6218\u300d\u7684\u7b2c10\u5929\uff0c\u70b9\u51fb\u67e5\u770b\u6d3b\u52a8\u8be6\u60c5",source:"@site/docs/java/java-se/concurrencemultithreading/threadpool-how-to-chosice.md",sourceDirName:"java/java-se/concurrencemultithreading",slug:"/java/java-se/concurrencemultithreading/threadpool-how-to-chosice",permalink:"/docs/java/java-se/concurrencemultithreading/threadpool-how-to-chosice",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/java/java-se/concurrencemultithreading/threadpool-how-to-chosice.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1672841610,formattedLastUpdatedAt:"Jan 4, 2023",frontMatter:{},sidebar:"javase",previous:{title:"\u7ebf\u7a0b\u6c60\u5f02\u5e38\u4f60\u90fd\u4e86\u89e3\u5982\u4f55\u5904\u7406\u5417\uff1f",permalink:"/docs/java/java-se/concurrencemultithreading/threadpool-handler-exception"},next:{title:"\u63ed\u79d8\u4e3a\u4ec0\u4e48\u4e3b\u7ebf\u7a0b\u7ed3\u675f\u4e86Java\u7ebf\u7a0b\u6c60\u8fd8\u5728\u8fd0\u884c",permalink:"/docs/java/java-se/concurrencemultithreading/threadpool-must-shutdown"}},l={},u=[{value:"1. \u5927\u7ebf\u7a0b\u6c60\u4e0e\u591a\u7ebf\u7a0b\u6c60",id:"1-\u5927\u7ebf\u7a0b\u6c60\u4e0e\u591a\u7ebf\u7a0b\u6c60",level:2},{value:"2. \u5927\u7ebf\u7a0b\u6c60\u548c\u591a\u7ebf\u7a0b\u6c60\u9009\u62e9\u539f\u5219",id:"2-\u5927\u7ebf\u7a0b\u6c60\u548c\u591a\u7ebf\u7a0b\u6c60\u9009\u62e9\u539f\u5219",level:2},{value:"3. \u603b\u7ed3",id:"3-\u603b\u7ed3",level:2}],s={toc:u};function p(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u6301\u7eed\u521b\u4f5c\uff0c\u52a0\u901f\u6210\u957f\uff01\u8fd9\u662f\u6211\u53c2\u4e0e\u300c\u6398\u91d1\u65e5\u65b0\u8ba1\u5212 \xb7 10 \u6708\u66f4\u6587\u6311\u6218\u300d\u7684\u7b2c10\u5929\uff0c",(0,i.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7147654075599978532"},"\u70b9\u51fb\u67e5\u770b\u6d3b\u52a8\u8be6\u60c5")),(0,i.kt)("p",null,"\u5728\u4f7f\u7528\u7ebf\u7a0b\u6c60\u5f00\u53d1\u7684\u8fc7\u7a0b\u4e2d\u5927\u5bb6\u6709\u6ca1\u6709\u60f3\u8fc7\u8fd9\u6837\u7684\u4e00\u4e2a\u95ee\u9898\uff1a\u4e3a\u4ec0\u4e48\u6211\u4eec\u9700\u8981\u5b9a\u4e49\u8fd9\u4e48\u591a\u7ebf\u7a0b\u6c60\u53bb\u6267\u884c\u4e0d\u540c\u7c7b\u578b\u7684\u4efb\u52a1\uff1f\u7528\u4e00\u4e2a\u9002\u5f53\u5927\u5c0f\u7684\u7ebf\u7a0b\u6c60\u53bb\u6267\u884c\u6240\u6709\u7684\u7c7b\u578b\u7684\u4efb\u52a1\u4e0d\u53ef\u4ee5\u5417\u3002\u5c31\u8fd9\u4e2a\u51e0\u4e2a\u95ee\u9898\u6765\u804a\u4e00\u804a\u7ebf\u7a0b\u6c60\u5e94\u8be5\u662f\u7528\u4e00\u4e2a\u8fd8\u662f\u7528\u591a\u4e2a\u53bb\u6267\u884c\u4e0d\u540c\u7c7b\u578b\u7684\u4efb\u52a1\u3002"),(0,i.kt)("h2",{id:"1-\u5927\u7ebf\u7a0b\u6c60\u4e0e\u591a\u7ebf\u7a0b\u6c60"},"1. \u5927\u7ebf\u7a0b\u6c60\u4e0e\u591a\u7ebf\u7a0b\u6c60"),(0,i.kt)("p",null,"\u5f00\u53d1\u8fc7\u7a0b\u4e2d\u7684\u4efb\u52a1\u5927\u81f4\u5206\u4e3a\u4e24\u5927\u7c7b\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"IO\u5bc6\u96c6\u578b\u4efb\u52a1\uff0c\u6b64\u7c7b\u4efb\u52a1\u7279\u70b9\u5c31\u662f\u9700\u8981\u7ecf\u5e38\u6682\u505c\u4efb\u52a1\u8fdb\u884c\u5176\u4ed6\u7684IO\u64cd\u4f5c\uff0c\u5982\u6587\u4ef6\u8bfb\u5199\u3001\u7f51\u7edc\u6570\u636e\u8bf7\u6c42\u7b49"),(0,i.kt)("li",{parentName:"ul"},"\u8ba1\u7b97\u5bc6\u96c6\u578b\u4efb\u52a1\uff0c\u6b64\u7c7b\u4efb\u52a1\u7684\u7279\u70b9\u5c31\u662f\u5927\u591a\u6570\u64cd\u4f5c\u90fd\u662f\u5728\u5185\u5b58\u4e2d\u8fdb\u884c")),(0,i.kt)("p",null,"\u4e0b\u9762\u901a\u8fc7\u6a21\u62df\u8fd9\u4e24\u79cd\u60c5\u51b5\u6765\u770b\u4e00\u4e0b\u7ed3\u679c\uff0c\u9996\u5148\u770b\u4e00\u4e0b\u5728\u5927\u7ebf\u7a0b\u6c60\u548c\u591a\u7ebf\u7a0b\u6c60\u6267\u884cIO\u5bc6\u96c6\u578b\u4efb\u52a1\u6240\u6d88\u8017\u7684\u65f6\u95f4\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'package org.example.objectsize;\n\nimport java.io.File;\nimport java.io.IOException;\nimport java.nio.charset.StandardCharsets;\nimport java.util.concurrent.CountDownLatch;\nimport java.util.concurrent.ExecutorService;\nimport java.util.concurrent.Executors;\nimport java.util.concurrent.atomic.AtomicInteger;\nimport org.apache.commons.io.FileUtils;\n\npublic class IOTest {\n\n    public static void main(String[] args) throws Exception{\n        extracted();\n        main1(args);\n    }\n\n    private static void extracted() throws InterruptedException {\n        final AtomicInteger integer = new AtomicInteger();\n        final  File file = new File("C:\\\\Users\\\\mxsm\\\\Desktop\\\\RocketMQ5\\\\aaa.txt");\n        ExecutorService executorService = Executors.newFixedThreadPool(50);\n        CountDownLatch latch =  new CountDownLatch(50);\n        long l = System.currentTimeMillis();\n        for(int i = 0; i < 50; ++i){\n            executorService.execute(new Runnable() {\n                @Override\n                public void run() {\n                    do{\n                        try {\n                            FileUtils.write(file, integer.get()+"", StandardCharsets.UTF_8);\n                        } catch (IOException e) {\n                            e.printStackTrace();\n                        }\n                    }while (integer.getAndIncrement() < 100000);\n                    latch.countDown();\n                }\n            });\n        }\n        latch.await();\n        System.out.println("\u5927\u7ebf\u7a0b\u6c60\uff1a"+(System.currentTimeMillis()-l));\n        executorService.shutdown();\n    }\n    public static void main1(String[] args) throws Exception{\n        final AtomicInteger integer = new AtomicInteger();\n        final  File file = new File("C:\\\\Users\\\\mxsm\\\\Desktop\\\\RocketMQ5\\\\aaa.txt");\n        ExecutorService executorService1 = Executors.newFixedThreadPool(10);\n        ExecutorService executorService2 = Executors.newFixedThreadPool(10);\n        ExecutorService executorService3 = Executors.newFixedThreadPool(10);\n        ExecutorService executorService4 = Executors.newFixedThreadPool(10);\n        ExecutorService executorService5 = Executors.newFixedThreadPool(10);\n        CountDownLatch latch =  new CountDownLatch(50);\n        long l = System.currentTimeMillis();\n        for(int i = 0; i < 10; ++i){\n            executorService1.execute(new Runnable() {\n                @Override\n                public void run() {\n                    do{\n                        try {\n                            FileUtils.write(file, integer.get()+"", StandardCharsets.UTF_8);\n                        } catch (IOException e) {\n                            e.printStackTrace();\n                        }\n                    }while (integer.getAndIncrement() < 100000);\n                    latch.countDown();\n                }\n            });\n            executorService2.execute(new Runnable() {\n                @Override\n                public void run() {\n                    do{\n                        try {\n                            FileUtils.write(file, integer.get()+"", StandardCharsets.UTF_8);\n                        } catch (IOException e) {\n                            e.printStackTrace();\n                        }\n                    }while (integer.getAndIncrement() < 100000);\n                    latch.countDown();\n                }\n            });\n            executorService3.execute(new Runnable() {\n                @Override\n                public void run() {\n                    do{\n                        try {\n                            FileUtils.write(file, integer.get()+"", StandardCharsets.UTF_8);\n                        } catch (IOException e) {\n                            e.printStackTrace();\n                        }\n                    }while (integer.getAndIncrement() < 100000);\n                    latch.countDown();\n                }\n            });\n            executorService4.execute(new Runnable() {\n                @Override\n                public void run() {\n                    do{\n                        try {\n                            FileUtils.write(file, integer.get()+"", StandardCharsets.UTF_8);\n                        } catch (IOException e) {\n                            e.printStackTrace();\n                        }\n                    }while (integer.getAndIncrement() < 100000);\n                    latch.countDown();\n                }\n            });\n            executorService5.execute(new Runnable() {\n                @Override\n                public void run() {\n                    do{\n                        try {\n                            FileUtils.write(file, integer.get()+"", StandardCharsets.UTF_8);\n                        } catch (IOException e) {\n                            e.printStackTrace();\n                        }\n                    }while (integer.getAndIncrement() < 100000);\n                    latch.countDown();\n                }\n            });\n        }\n        latch.await();\n        System.out.println("\u591a\u7ebf\u7a0b\u6c60\uff1a"+(System.currentTimeMillis()-l));\n        executorService1.shutdown();\n        executorService2.shutdown();\n        executorService3.shutdown();\n        executorService4.shutdown();\n        executorService5.shutdown();\n    }\n}\n')),(0,i.kt)("p",null,"\u7136\u540e\u8fd0\u884c\u67e5\u770b\uff1a"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"C:%5CUsers%5Cmxsm%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20221024202744968.png",alt:"image-20221024202744968"})),(0,i.kt)("p",null,"\u8fd0\u884c\u7684\u65f6\u95f4\u5dee\u4e0d\u591a\u3002"),(0,i.kt)("p",null,"\u7136\u540e\u770b\u4e00\u4e0b\u8ba1\u7b97\u5bc6\u96c6\u578b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'package org.example.objectsize;\n\nimport java.util.concurrent.CountDownLatch;\nimport java.util.concurrent.ExecutorService;\nimport java.util.concurrent.Executors;\nimport java.util.concurrent.atomic.AtomicLong;\n\npublic class IOTest {\n\n    public static void main(String[] args) throws Exception{\n        extracted();\n        main1(args);\n    }\n\n    private static void extracted() throws InterruptedException {\n        final AtomicLong integer = new AtomicLong();\n        ExecutorService executorService = Executors.newFixedThreadPool(50);\n        CountDownLatch latch =  new CountDownLatch(50);\n        long l = System.currentTimeMillis();\n        for(int i = 0; i < 50; ++i){\n            executorService.execute(new Runnable() {\n                @Override\n                public void run() {\n                    do{\n                    }while (integer.getAndIncrement() < 10000000L);\n                    latch.countDown();\n                }\n            });\n        }\n        latch.await();\n        System.out.println("\u5927\u7ebf\u7a0b\u6c60\uff1a"+(System.currentTimeMillis()-l));\n        executorService.shutdown();\n    }\n    public static void main1(String[] args) throws Exception{\n        final AtomicLong integer = new AtomicLong();\n        ExecutorService executorService1 = Executors.newFixedThreadPool(10);\n        ExecutorService executorService2 = Executors.newFixedThreadPool(10);\n        ExecutorService executorService3 = Executors.newFixedThreadPool(10);\n        ExecutorService executorService4 = Executors.newFixedThreadPool(10);\n        ExecutorService executorService5 = Executors.newFixedThreadPool(10);\n        CountDownLatch latch =  new CountDownLatch(50);\n        long l = System.currentTimeMillis();\n        for(int i = 0; i < 10; ++i){\n            executorService1.execute(new Runnable() {\n                @Override\n                public void run() {\n                    do{\n\n                    }while (integer.getAndIncrement() < 10000000L);\n                    latch.countDown();\n                }\n            });\n            executorService2.execute(new Runnable() {\n                @Override\n                public void run() {\n                    do{\n\n                    }while (integer.getAndIncrement() < 10000000L);\n                    latch.countDown();\n                }\n            });\n            executorService3.execute(new Runnable() {\n                @Override\n                public void run() {\n                    do{\n\n                    }while (integer.getAndIncrement() < 10000000L);\n                    latch.countDown();\n                }\n            });\n            executorService4.execute(new Runnable() {\n                @Override\n                public void run() {\n                    do{\n\n                    }while (integer.getAndIncrement() < 10000000L);\n                    latch.countDown();\n                }\n            });\n            executorService5.execute(new Runnable() {\n                @Override\n                public void run() {\n                    do{\n                        \n                    }while (integer.getAndIncrement() < 10000000L);\n                    latch.countDown();\n                }\n            });\n        }\n        latch.await();\n        System.out.println("\u591a\u7ebf\u7a0b\u6c60\uff1a"+(System.currentTimeMillis()-l));\n        executorService1.shutdown();\n        executorService2.shutdown();\n        executorService3.shutdown();\n        executorService4.shutdown();\n        executorService5.shutdown();\n    }\n}\n\n')),(0,i.kt)("p",null,"\u8fd0\u884c\u7ed3\u679c\uff1a"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"C:%5CUsers%5Cmxsm%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20221024203234577.png",alt:"image-20221024203234577"})),(0,i.kt)("p",null,"\u4ece\u4e2d\u4f1a\u53d1\u73b0\u4e24\u8005\u4e4b\u95f4\u7684\u7ed3\u679c\u76f8\u5dee\u4e0d\u591a\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u4ece\u4e0a\u9762\u4e24\u4e2a\u4f8b\u5b50\u53ef\u4ee5\u77e5\u9053\uff0c\u591a\u7ebf\u7a0b\u548c\u5927\u7ebf\u7a0b\u6c60\u4e24\u8005\u5176\u5b9e\u90fd\u5dee\u4e0d\u591a")),(0,i.kt)("h2",{id:"2-\u5927\u7ebf\u7a0b\u6c60\u548c\u591a\u7ebf\u7a0b\u6c60\u9009\u62e9\u539f\u5219"},"2. \u5927\u7ebf\u7a0b\u6c60\u548c\u591a\u7ebf\u7a0b\u6c60\u9009\u62e9\u539f\u5219"),(0,i.kt)("p",null,"\u4ece\u5927\u591a\u6570\u5f00\u6e90\u7684\u9879\u76ee\u6765\u770b\uff0c\u6bcf\u4e00\u7c7b\u4efb\u52a1\u4f7f\u7528\u4e00\u4e2a\u7ebf\u7a0b\u6c60\u4e5f\u5c31\u662f\uff1a\u6bcf\u4e00\u7c7b\u4efb\u52a1\u4f7f\u7528\u72ec\u7acb\u7684\u7ebf\u7a0b\u6c60\uff0c\u4e0d\u4e0e\u5176\u4ed6\u7684\u4efb\u52a1\u5171\u4eab\u7ebf\u7a0b\u6c60\u3002\u539f\u56e0\u5206\u6790\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u72ec\u7acb\u7ebf\u7a0b\u6c60\u4e0d\u5f71\u54cd\u4e0d\u540c\u4efb\u52a1\u7c7b\u578b\u7684\u4efb\u52a1\u4f5c\u4e1a\uff0c\u6709\u5229\u4e8e\u4fdd\u8bc1\u4efb\u52a1\u7684\u72ec\u7acb\u6027\u548c\u5b8c\u6574\u6027"),(0,i.kt)("li",{parentName:"ul"},"\u5171\u7528\u4e00\u4e2a\u7ebf\u7a0b\u6c60\u53ef\u80fd\u4f1a\u51fa\u73b0\u5982\u4e0b\u7684\u95ee\u9898\uff1a",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u4e0d\u540c\u7684\u4efb\u52a1\u6267\u884c\u7684\u65f6\u95f4\u957f\u77ed\u4e0d\u540c\uff0c\u6240\u4ee5\u5360\u7528\u7ebf\u7a0b\u7684\u65f6\u95f4\u4e5f\u4e0d\u76f8\u540c\u3002\u5f53\u4e00\u7c7b\u7ebf\u7a0b\u6267\u884c\u65f6\u95f4\u8f83\u957f\u4f46\u662f\u4ed6\u53ef\u80fd\u6267\u884c\u7684\u9891\u7387\u5e76\u4e0d\u9ad8\u8fd9\u79cd\u60c5\u51b5\u4e0b\u53ef\u80fd\u4f1a\u5bfc\u81f4\u5176\u4ed6\u7684\u4efb\u52a1\u4f1a\u4e00\u76f4\u5728\u961f\u5217\u4e2d\u7b49\u5f85\u6392\u961f\u83b7\u53d6\u6267\u884c\u673a\u4f1a\u3002\u8fd9\u79cd\u60c5\u51b5\u4e0b\u4f1a\u5f71\u54cd\u5230\u5176\u4ed6\u4efb\u52a1\u7684\u6b63\u5e38\u6267\u884c\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u7ebf\u7a0b\u6c60\u7684\u7ebf\u7a0b\u6570\u91cf\u4e0d\u597d\u786e\u5b9a\uff0c\u4e0d\u540c\u7c7b\u7684\u4efb\u52a1\u4f7f\u7528\u540c\u4e00\u4e2a\u3002\u5bfc\u81f4\u65f6\u95f4\u7684\u4f30\u7b97\u6bd4\u5355\u4e2a\u4efb\u52a1\u590d\u6742\u4e86\u5f88\u591a\u5f88\u591a\uff0c\u7ebf\u7a0b\u6570\u91cf\u8bbe\u7f6e\u592a\u5c11\u4f18\u60e0\u5bfc\u81f4\u7ebf\u7a0b\u6c60\u7684\u8d44\u6e90\u4e0d\u591f\u7528\uff0c\u8bbe\u7f6e\u592a\u591a\u4f1a\u5bfc\u81f4\u7ebf\u7a0b\u7684\u5207\u6362\u8017\u8d39\u5927\u91cf\u7684\u65f6\u95f4\u3002\u5bf9\u4e8eIO\u5bc6\u96c6\u578b\u6765\u8bf4\u53ef\u80fd\u8fd8\u80fd\u989d\u63a5\u53d7\u4f46\u662f\u5bf9\u4e8e\u8ba1\u7b97\u5bc6\u96c6\u578b\u6765\u8bf4\u5c31\u4e0d\u662f\u90a3\u4e48\u53cb\u597d\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u7531\u4e8e\u4e0d\u540c\u7684\u4efb\u52a1\u7c7b\u578b\u6267\u884c\u7684\u65f6\u95f4\u4e0d\u540c\u5bfc\u81f4\u7ebf\u7a0b\u6c60\u7684\u8d44\u6e90\u5206\u914d\u4e0d\u5747\uff0c\u6709\u7684\u4efb\u52a1\u53ef\u80fd\u62a2\u5360\u4e0d\u5230\u8d44\u6e90\u4e00\u76f4\u5728\u7b49\u5f85\u961f\u5217\u4e2d\u7b49\u5f85\u3002\u5f53\u7b49\u5f85\u961f\u5217\u4e2d\u4efb\u52a1\u8d8a\u6765\u8d8a\u591a\u53ef\u80fd\u6d88\u8017\u6389JVM\u7684\u5185\u5b58\u5bfc\u81f4\u5e94\u7528\u5b95\u673a"),(0,i.kt)("li",{parentName:"ul"},"\u4ece\u9519\u8bef\u7684\u6700\u7ec8\u548c\u6392\u67e5\u7684\u89d2\u5ea6\u6765\u8bf4\uff0c\u591a\u7ebf\u7a0b\u6c60\u66f4\u52a0\u6709\u52a9\u4e8e\u6700\u7ec8\u95ee\u9898")))),(0,i.kt)("h2",{id:"3-\u603b\u7ed3"},"3. \u603b\u7ed3"),(0,i.kt)("p",null,"\u6bcf\u4e00\u4e2a\u7ebf\u7a0b\u6c60\u6700\u597d\u505a\u5355\u4e00\u4efb\u52a1\uff0c\u5c3d\u53ef\u80fd\u7684\u51cf\u5c11\u591a\u4efb\u52a1\u7c7b\u578b\u6df7\u5408\u4f7f\u7528\u4e00\u4e2a\u7ebf\u7a0b\u6c60\u3002\u7279\u522b\u662f\u5982\u679c\u67d0\u4e00\u7c7b\u4efb\u52a1\u5ef6\u8fdf\u4e00\u5b9a\u65f6\u95f4\u4f1a\u5bfc\u81f4\u95ee\u9898\u7684\u60c5\u51b5\u4e0b\uff0c\u4f8b\u5982\u901a\u8fc7\u5fc3\u8df3\u7ef4\u6301\u67d0\u79cd\u72b6\u6001\u5f53\u5ef6\u8fdf\u6267\u884c\u540e\u670d\u52a1\u7aef\u53ef\u80fd\u5c31\u4efb\u52a1\u5f53\u524d\u8fde\u63a5\u5931\u6548\u4ece\u800c\u8fdb\u884c\u5254\u9664\u3002\u4f46\u662f\u7ebf\u7a0b\u6c60\u7684\u4f7f\u7528\u4e5f\u662f\u9700\u8981\u7ed3\u5408\u5b9e\u9645\u60c5\u51b5\uff0c\u7528\u5408\u9002\u7684\u65b9\u5f0f\u6765\u5b9e\u73b0\u529f\u80fd\u624d\u662f\u6700\u597d\u7684\u3002"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u6211\u662f\u8682\u8681\u80cc\u5927\u8c61(GitHub:mxsm)\uff0c\u6587\u7ae0\u5bf9\u4f60\u6709\u5e2e\u52a9\u70b9\u8d5e\u5173\u6ce8\u6211\uff0c\u6587\u7ae0\u6709\u4e0d\u6b63\u786e\u7684\u5730\u65b9\u8bf7\u60a8\u65a7\u6b63\u7559\u8a00\u8bc4\u8bba~\u8c22\u8c22!")))}p.isMDXComponent=!0}}]);