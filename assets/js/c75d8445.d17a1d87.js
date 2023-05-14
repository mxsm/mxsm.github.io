"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[2698],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),o=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=o(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=o(n),c=a,h=u["".concat(p,".").concat(c)]||u[c]||m[c]||i;return n?r.createElement(h,l(l({ref:t},d),{},{components:n})):r.createElement(h,l({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=c;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:a,l[1]=s;for(var o=2;o<i;o++)l[o]=n[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},336:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>o});var r=n(7462),a=(n(7294),n(3905));const i={title:"Thread\u7684\u5e38\u7528\u65b9\u6cd5",linkTitle:"Thread\u7684\u5e38\u7528\u65b9\u6cd5",weight:3,date:new Date("2019-02-22T00:00:00.000Z")},l=void 0,s={unversionedId:"java/java-se/concurrencemultithreading/thread-common-method",id:"java/java-se/concurrencemultithreading/thread-common-method",title:"Thread\u7684\u5e38\u7528\u65b9\u6cd5",description:"1. Thread.sleep\u2014static\u65b9\u6cd5",source:"@site/docs/java/java-se/concurrencemultithreading/thread-common-method.md",sourceDirName:"java/java-se/concurrencemultithreading",slug:"/java/java-se/concurrencemultithreading/thread-common-method",permalink:"/docs/java/java-se/concurrencemultithreading/thread-common-method",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/java/java-se/concurrencemultithreading/thread-common-method.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1684027896,formattedLastUpdatedAt:"May 14, 2023",frontMatter:{title:"Thread\u7684\u5e38\u7528\u65b9\u6cd5",linkTitle:"Thread\u7684\u5e38\u7528\u65b9\u6cd5",weight:3,date:"2019-02-22T00:00:00.000Z"},sidebar:"javase",previous:{title:"Java\u961f\u5217",permalink:"/docs/java/java-se/concurrencemultithreading/queue"},next:{title:"\u7ebf\u7a0b\u6c60\u5f02\u5e38\u4f60\u90fd\u4e86\u89e3\u5982\u4f55\u5904\u7406\u5417\uff1f",permalink:"/docs/java/java-se/concurrencemultithreading/threadpool-handler-exception"}},p={},o=[{value:"1. Thread.sleep\u2014static\u65b9\u6cd5",id:"1-threadsleepstatic\u65b9\u6cd5",level:3},{value:"2. Thread.currentThread \u2014static\u65b9\u6cd5",id:"2-threadcurrentthread-static\u65b9\u6cd5",level:3},{value:"3. Thread.isAlive \u2014 \u5b9e\u4f8b\u65b9\u6cd5",id:"3-threadisalive--\u5b9e\u4f8b\u65b9\u6cd5",level:3},{value:"4. Thread.interrupt \u2014 \u5b9e\u4f8b\u65b9\u6cd5",id:"4-threadinterrupt--\u5b9e\u4f8b\u65b9\u6cd5",level:3},{value:"5. Thread.setDaemon \u2014 \u5b9e\u4f8b\u65b9\u6cd5",id:"5-threadsetdaemon--\u5b9e\u4f8b\u65b9\u6cd5",level:3},{value:"6. Thread.join \u2014 \u7c7b\u65b9\u6cd5",id:"6-threadjoin--\u7c7b\u65b9\u6cd5",level:3},{value:"7. Thread.yield \u2014 \u9759\u6001\u65b9\u6cd5",id:"7-threadyield--\u9759\u6001\u65b9\u6cd5",level:3},{value:"7.1 yield() VS wait()",id:"71-yield-vs-wait",level:4},{value:"7.2 yield() VS sleep()",id:"72-yield-vs-sleep",level:4},{value:"7.3 yield() VS join()",id:"73-yield-vs-join",level:4},{value:"8. \u7ed3\u675f\u7ebf\u7a0b",id:"8-\u7ed3\u675f\u7ebf\u7a0b",level:3}],d={toc:o},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"1-threadsleepstatic\u65b9\u6cd5"},"1. Thread.sleep\u2014static\u65b9\u6cd5"),(0,a.kt)("p",null,"\u8ba9\u5f53\u524d\u7ebf\u7a0b\u7761\u7720(",(0,a.kt)("strong",{parentName:"p"},"\u7761\u7720\u8fbe\u5230\u540e\uff0c\u65e0\u6cd5\u4fdd\u8bc1\u7acb\u523b\u88abJVM\u8c03\u5ea6"),")\uff0c\u6240\u4ee5\u4ed6\u4e0d\u4f1a\u8ba9\u5176\u4ed6\u7684\u7ebf\u7a0b\u4e5f\u5904\u4e8e\u4f11\u7720\uff0c\u7ebf\u7a0b\u4f11\u7720\u4e0d\u4f1a\u5931\u53bb\u62e5\u6709\u7684\u5bf9\u8c61\u9501\u3002\u4f5c\u7528\uff1a\u4fdd\u6301\u5bf9\u8c61\u9501\uff0c\u8ba9\u51faCPU,\u8c03\u7528\u76ee\u7684\u662f\u4e0d\u8ba9\u5f53\u524d\u7ebf\u7a0b\u72ec\u9738CPU\u7684\u8d44\u6e90\u3002\u7559\u4e00\u5b9a\u7684\u673a\u4f1a\u7ed9\u5176\u4ed6\u7684\u7ebf\u7a0b\u3002\u4f11\u7720\u7684\u5b9e\u9645\u65f6\u95f4\u7684\u7cbe\u5ea6\u548c\u51c6\u786e\u6027\u53d7\u7cfb\u7edf\u7684\u8c03\u5ea6\u5668\u548c\u8ba1\u6570\u5668\u7684\u5f71\u54cd\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},' public static void sleep(long millis, int nanos)\n    throws InterruptedException {\n        if (millis < 0) {\n            throw new IllegalArgumentException("timeout value is negative");\n        }\n\n        if (nanos < 0 || nanos > 999999) {\n            throw new IllegalArgumentException(\n                                "nanosecond timeout value out of range");\n        }\n\n        if (nanos >= 500000 || (nanos != 0 && millis == 0)) {\n            millis++;\n        }\n\n        sleep(millis);\n    }\npublic static native void sleep(long millis) throws InterruptedException;\n')),(0,a.kt)("p",null,"\u7eb3\u79d2\u7ea7\u522b\u7684sleep\u6ca1\u6709\u5b9e\u73b0\u3002\u53ea\u662f\u5728\u6570\u636e\u5224\u65ad\u540e\u8fdb\u884c\u4e86\u5fae\u79d2\u7ea7\u522b\u4e0a\u8fdb\u884c\u4e86\u8c03\u6574\u3002"),(0,a.kt)("h3",{id:"2-threadcurrentthread-static\u65b9\u6cd5"},"2. Thread.currentThread \u2014static\u65b9\u6cd5"),(0,a.kt)("p",null,"\u8fd4\u56de\u4e00\u4e2a\u5f53\u524d\u4ee3\u7801\u6267\u884c\u7ebf\u7a0b\u7684\u5f15\u7528\u5bf9\u8c61"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'public class ThreadTest {\n\n    public static void main(String[] args) throws  Exception{\n\n        Test test = new Test();\n       Thread thread = new Thread(test);\n       thread.setName("A");\n       thread.start();\n    }\n\n}\n\nclass Test extends Thread{\n\n    public Test(){\n        System.out.println("Test 1 "+Thread.currentThread().getName());\n        System.out.println("Test 2 "+this.getName());\n    }\n\n    @Override\n    public void run() {\n        System.out.println("run 1 "+Thread.currentThread().getName());\n        System.out.println("run 2 "+this.getName());\n    }\n}\n')),(0,a.kt)("p",null,"\u8fd0\u884c\u7684\u7ed3\u679c\uff1a"),(0,a.kt)("p",null,"Test 1 main\nTest 2 Thread-0\nrun 1 A\nrun 2 Thread-0"),(0,a.kt)("p",null,"\u6267\u884cTest\u7684\u6784\u9020\u51fd\u6570\u662fmain\u7ebf\u7a0b\uff0c\u6267\u884crun\u65b9\u6cd5\u7684\u662fA\u7ebf\u7a0b\u3002 this\u8868\u793a\u7684\u662fTest\u7ebf\u7a0b\u3002"),(0,a.kt)("h3",{id:"3-threadisalive--\u5b9e\u4f8b\u65b9\u6cd5"},"3. Thread.isAlive \u2014 \u5b9e\u4f8b\u65b9\u6cd5"),(0,a.kt)("p",null,"isAlive();\u662f\u6d4b\u8bd5\u7ebf\u7a0b\u7684run();\u65b9\u6cd5\u662f\u5426\u8fd8\u5728\u8fdb\u884c\uff0c\u8fd8\u5728\u8fdb\u884c\u8fd4\u56detrue\uff0c\u8fd0\u884c\u5b8c\u8fd4\u56defalse\uff0c\u8fd8\u6ca1\u6709\u5f00\u59cb\u8fd0\u884c\u8fd4\u56defalse"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public class ThreadTest {\n\n    public static void main(String[] args) throws  Exception{\n\n        Test test = new Test();\n        Thread thread = new Thread(test);\n        System.out.println(thread.isAlive());\n        System.out.println(thread.isAlive());\n        thread.start();\n        System.out.println(thread.isAlive());\n        System.out.println(thread.isAlive());\n        Thread.sleep(50);\n        System.out.println(thread.isAlive());\n        Thread.sleep(40);\n        System.out.println(thread.isAlive());\n        Thread.sleep(40);\n        System.out.println(thread.isAlive());\n    }\n\n}\n\nclass Test implements Runnable{\n\n    @Override\n    public void run() {\n        for(int i=0; i<10;++i){\n            try {\n                Thread.sleep(10);\n            } catch (InterruptedException e) {\n                e.printStackTrace();\n            }\n            System.out.println(i);\n        }\n    }\n}\n")),(0,a.kt)("p",null,"\u67d0\u4e00\u6b21\u8fd0\u884c\u7ed3\u679c"),(0,a.kt)("p",null,"false\nfalse\ntrue\ntrue\n0\n1\n2\n3\n4\ntrue\n5\n6\n7\ntrue\n8\n9\nfalse"),(0,a.kt)("h3",{id:"4-threadinterrupt--\u5b9e\u4f8b\u65b9\u6cd5"},"4. Thread.interrupt \u2014 \u5b9e\u4f8b\u65b9\u6cd5"),(0,a.kt)("p",null,"\u4f5c\u7528\uff1a\u8c03\u7528 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Thread"),"\u5bf9\u8c61")," \u7684 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"interrupt"))," \u51fd\u6570\u5e76\u4e0d\u662f\u7acb\u4e2d\u65ad\u7ebf\u7a0b\uff0c\u800c\u53ea\u662f\u5c06",(0,a.kt)("strong",{parentName:"p"},"\u7ebf\u7a0b\u4e2d\u7684\u7ec8\u7aef\u72b6\u6001\u8bbe\u7f6e\u4e3atrue"),",\u5f53\u7ebf\u7a0b\u8fd0\u884c\u5176\u4e2d\u6709\u8c03\u7528\u963b\u585e\u7684\u51fd\u6570\u65f6(Thread.sleep,Object.wait,Thread.join\u7b49)\uff0c\u963b\u585e\u51fd\u6570\u8c03\u7528\u540e\u4f1a\u4e0d\u65ad\u7684\u8f6e\u8be2\u68c0\u6d4b\u4e2d\u65ad\u72b6\u6001\u7684\u6807\u6ce8\u662f\u5426\u4e3atrue,\u8fd9\u505c\u6b62\u963b\u585e\u5e76\u4e14\u629b\u51fa ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"InterruptedException"))," \u5f02\u5e38\uff0c\u540c\u65f6\u8fd8\u4f1a\u91cd\u7f6e\u4e2d\u65ad\u72b6\u6001\u6807\u5fd7\u4f4d ",(0,a.kt)("strong",{parentName:"p"},"false")," \u3002\u6709\u5faa\u73af\u5219\u7ee7\u7eed\u963b\u585e\u76f4\u5230\u6b63\u5e38\u7ed3\u675f\u3002"),(0,a.kt)("p",null,"\u6f14\u793a\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'public class ThreadTest {\n\n    public static void main(String[] args) throws  Exception{\n\n        Test test = new Test();\n        Thread thread = new Thread(test);\n        thread.start();\n        long i = System.currentTimeMillis();\n        while (System.currentTimeMillis() - i < 10 * 1000) {\n            thread.isAlive();\n        }\n        //\u6253\u65ad\u963b\u585e--\u5c06\u7ebf\u7a0b\u7684isInterrupted\u8bbe\u7f6e\u4e3atrue\n        thread.interrupt();\n\n    }\n\n}\n\nclass Test implements Runnable{\n\n    @Override\n    public void run() {\n        System.out.println("start work");\n        while (!Thread.currentThread().isInterrupted()){\n            System.out.println("doing work");\n            try {\n                //\u4e0d\u505c\u7684\u8f6e\u8be2\u68c0\u6d4b\u7ec8\u7aef\u7684\u6807\u5fd7\u4f4d\u662f\u5426\u4e3atrue\n                Thread.sleep(1000);\n            } catch (InterruptedException e) {\n                //\u629b\u51fa\u5f02\u5e38\u8bbe\u7f6e\u4e3afalse\n                e.printStackTrace();\n                //\u8bbe\u7f6e\u6807\u5fd7\u4f4d\u4e3atrue--\u8df3\u51fawile\u5faa\u73af,\u5426\u5219\u4f1a\u4e00\u76f4\u6b7b\u5faa\u73af\n                Thread.currentThread().interrupt();\n            }\n        }\n        System.out.println("done woring");\n    }\n}\n')),(0,a.kt)("h3",{id:"5-threadsetdaemon--\u5b9e\u4f8b\u65b9\u6cd5"},"5. Thread.setDaemon \u2014 \u5b9e\u4f8b\u65b9\u6cd5"),(0,a.kt)("p",null,"Java\u4e2d\u7684\u7ebf\u7a0b\u5206\u4e3a\u4e24\u7c7b\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u7528\u6237\u7ebf\u7a0b"),"\uff1aThread.setDaemon(false)\u8bbe\u7f6e\u4e3a\u7528\u6237\u7ebf\u7a0b\uff0c\u5982\u679c\u4e0d\u8bbe\u7f6e\u9ed8\u8ba4\u4e3a\u7528\u6237\u7ebf\u7a0b"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u5b88\u62a4\u7ebf\u7a0b"),"\uff1aThread.setDaemon(true)\u8bbe\u7f6e\u4e3a\u5b88\u62a4\u7ebf\u7a0b")),(0,a.kt)("p",null,"\u4e24\u8005\u4e4b\u95f4\u7684\u533a\u522b\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e3b\u7ebf\u7a0b\u7ed3\u675f\u540e\u7528\u6237\u7ebf\u7a0b\u8fd8\u5728\u7ee7\u7eed\u8fd0\u884c\uff0cJVM\u5b58\u6d3b\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u6ca1\u6709\u7528\u6237\u7ebf\u7a0b\uff0c\u90fd\u662f\u5b88\u62a4\u7ebf\u7a0b\uff0c\u90a3\u4e48JVM\u7ed3\u675f\u3002")),(0,a.kt)("p",null,"\u6ce8\u610f\u4e00\u4e0b\u51e0\u70b9\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Thread.setDaemon(true)\u5fc5\u987b\u5728thread.start()\u4e4b\u524d\uff0c\u4f60\u4e0d\u80fd\u628a\u4e00\u4e2a\u6b63\u5e38\u8fd0\u884c\u7684\u7528\u6237\u7ebf\u7a0b\u8bbe\u7f6e\u4e3a\u5b88\u62a4\u7ebf\u7a0b,\u4f1a\u629b\u51fa",(0,a.kt)("inlineCode",{parentName:"p"},"IllegalThreadStateException"),"\u4e00\u4e2a\u9519\u8bef")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public class ThreadTest {\n\n    public static void main(String[] args) throws  Exception{\n\n        Test test = new Test();\n        Thread thread = new Thread(test);\n        thread.start();\n        thread.setDaemon(true); //\u4f1a\u629b\u51faIllegalThreadStateException \u4f46\u662f\u7ebf\u7a0b\u8fd8\u662f\u6b63\u5e38\u7684\u5de5\u4f5c\n        long i = System.currentTimeMillis();\n        while (System.currentTimeMillis() - i < 3 * 1000) {\n            thread.isAlive();\n        }\n        thread.interrupt();\n    }\n}\n\n")))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5728Daemon\u7ebf\u7a0b\u4e2d\u4ea7\u751f\u7684\u65b0\u7ebf\u7a0b\u4e5f\u662fDaemon\u7684"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-java"},'public class ThreadTest1 {\n\n    public static void main(String[] args) {\n        Thread thread = new Thread(()->{\n            Thread threada = new Thread(()->{\n                System.out.println(Thread.currentThread().getName() + "  " + Thread.currentThread().isDaemon()); //\u6253\u5370\u7684\u662fThread-1  true\n                System.out.println(Thread.currentThread().getThreadGroup().getName());\n            });\n            threada.start();\n        });\n        thread.setDaemon(true);\n        thread.start();\n        //\u5982\u679c\u6ca1\u6709\u540e\u9762\u7684Thread.sleep\n        try {\n            Thread.sleep(5000);\n        } catch (InterruptedException e) {\n            e.printStackTrace();\n        }\n    }\n}\n'))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u4e0d\u8981\u8ba4\u4e3a\u6240\u6709\u7684\u5e94\u7528\u90fd\u53ef\u4ee5\u5206\u914d\u7ed9Daemon\u6765\u8fdb\u884c\u670d\u52a1\uff0c\u6bd4\u5982\u8bfb\u5199\u64cd\u4f5c\u6216\u8005\u8ba1\u7b97\u903b\u8f91\u3002\n\u5199java\u591a\u7ebf\u7a0b\u7a0b\u5e8f\u65f6\uff0c\u4e00\u822c\u6bd4\u8f83\u559c\u6b22\u7528java\u81ea\u5e26\u7684\u591a\u7ebf\u7a0b\u6846\u67b6\uff0c\u6bd4\u5982ExecutorService\uff0c\u4f46\u662fjava\u7684\u7ebf\u7a0b\u6c60\u4f1a\u5c06\u5b88\u62a4\u7ebf\u7a0b\u8f6c\u6362\u4e3a\u7528\u6237\u7ebf\u7a0b\uff0c\u6240\u4ee5\u5982\u679c\u8981\u4f7f\u7528\u540e\u53f0\u7ebf\u7a0b\u5c31\u4e0d\u80fd\u7528java\u7684\u7ebf\u7a0b\u6c60"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-java"},'static class DefaultThreadFactory implements ThreadFactory {\n        private static final AtomicInteger poolNumber = new AtomicInteger(1);\n        private final ThreadGroup group;\n        private final AtomicInteger threadNumber = new AtomicInteger(1);\n        private final String namePrefix;\n\n        DefaultThreadFactory() {\n            SecurityManager s = System.getSecurityManager();\n            group = (s != null) ? s.getThreadGroup() :\n                                  Thread.currentThread().getThreadGroup();\n            namePrefix = "pool-" +\n                          poolNumber.getAndIncrement() +\n                         "-thread-";\n        }\n\n        public Thread newThread(Runnable r) {\n            Thread t = new Thread(group, r,\n                                  namePrefix + threadNumber.getAndIncrement(),\n                                  0);\n            if (t.isDaemon())\n                //\u8bbe\u7f6e\u4e3a\u975e\u5b88\u62a4\u7ebf\u7a0b\n                t.setDaemon(false);\n            if (t.getPriority() != Thread.NORM_PRIORITY)\n                //\u4f18\u5148\u7ea7\u8bbe\u7f6e\u4e3a\u6b63\u5e38\n                t.setPriority(Thread.NORM_PRIORITY);\n            return t;\n        }\n    }\n')))),(0,a.kt)("h3",{id:"6-threadjoin--\u7c7b\u65b9\u6cd5"},"6. Thread.join \u2014 \u7c7b\u65b9\u6cd5"),(0,a.kt)("p",null,"\u7ebf\u7a0b\u5408\u5e76"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\u4e0d\u5e26\u8d85\u65f6\u53c2\u6570"),"\uff1a\u5f53\u6211\u4eec\u5728\u7ebf\u7a0b\u8c03\u7528 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"join\uff08\uff09"))," \u65b9\u6cd5\u7684\u65f6\u5019\uff0c\u5f53\u524d\u7ebf\u7a0b\u8fdb\u5165\u7b49\u5f85\u72b6\u6001\uff0c\u76f4\u5230\u7b49\u5f85\u5f15\u7528\u7ebf\u7a0b\u4e2d\u6b62\u3002 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"join()"))," \u4e5f\u53ef\u80fd\u8fd4\u56de\u5982\u5f15\u7528\u7684\u7ebf\u7a0b\u88ab",(0,a.kt)("strong",{parentName:"p"},"interrupted"),"\u3002\u5982\u679c\u5f15\u7528\u7ebf\u7a0b\u65e9\u5df2\u7ecf\u4e2d\u6b62\u6216\u8005\u8fd8\u6ca1\u6709\u8c03\u7528 ",(0,a.kt)("strong",{parentName:"p"},"start")," \u65b9\u6cd5\uff0c\u8c03\u7528 ",(0,a.kt)("strong",{parentName:"p"},"join()")," \u7acb\u523b\u8fd4\u56de")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\u6709\u8d85\u65f6\u53c2\u6570"),"\uff1a\u8c03\u7528 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"join()"))," \u65b9\u6cd5\u4e0d\u5e26\u8d85\u65f6\u65f6\u95f4\uff0c\u5f15\u7528\u7684\u7ebf\u7a0b\u963b\u585e\u6216\u8005\u6267\u884c\u65f6\u95f4\u8f83\u957f\uff0c\u90a3\u4e48\u7ebf\u7a0b\u5c31\u4f1a\u4e00\u76f4\u963b\u585e\uff0c\u8fd9\u6837\u53ef\u80fd\u4f1a\u53d8\u6210\u4e00\u4e2a\u6ca1\u6709\u54cd\u5e94\u7684\u95ee\u9898\u3002\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\u6211\u4eec\u8bbe\u7f6e\u4e00\u4e2a\u8d85\u65f6\u65f6\u95f4\u3002\u8d85\u65f6\u65f6\u95f4\u4e3a0\u5c06\u4e0d\u4f1a\u8d85\u65f6\u3002\u548c\u6ca1\u6709\u8d85\u65f6\u53c2\u6570\u662f\u4e00\u4e2a\u6548\u679c\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"join()\u548c\u540c\u6b65"),"\uff1a\u8c03\u7528 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"join()"))," \u65b9\u6cd5\u6709\u540c\u6b65\u7684\u6548\u679c\uff0c\u7b49\u5f85\u7ebf\u7a0b\u76f4\u5230\u5f15\u7528\u4e2d\u6b62\u3002join()\u521b\u5efa\u4e86 ",(0,a.kt)("strong",{parentName:"p"},"Happens-before")," \u5173\u7cfb\uff08",(0,a.kt)("em",{parentName:"p"},"All actions in a thread happen-before any other thread successfully returns from a join() on that thread"),"\uff09\u3002\u8fd9\u5c31\u610f\u5473\u7740\u5f53\u7ebf\u7a0b",(0,a.kt)("strong",{parentName:"p"},"t1"),"\u8c03\u7528 ",(0,a.kt)("strong",{parentName:"p"},"t2.join()")," \u6240\u6709\u7684 ",(0,a.kt)("strong",{parentName:"p"},"t2")," \u7684\u6539\u53d8\u8fd4\u56de\u5728 ",(0,a.kt)("strong",{parentName:"p"},"t1")," \u90fd\u662f\u53ef\u89c1\u7684\uff0c\u7136\u800c\u6211\u4eec\u4e0d\u8c03\u7528 ",(0,a.kt)("strong",{parentName:"p"},"join()")," \u6216\u8005\u4f7f\u7528\u5176\u4ed6\u7684\u540c\u6b65\u673a\u5236\u3002\u6211\u4eec\u4e0d\u80fd\u4fdd\u8bc1\u5f53 ",(0,a.kt)("strong",{parentName:"p"},"t2")," \u5b8c\u6210\u6216\u8005\u751a\u81f3\u5176\u4ed6\u7684\u7ebf\u7a0b\u5b8c\u6210\u5728 ",(0,a.kt)("strong",{parentName:"p"},"t1")," \u7ebf\u7a0b\u4e2d\u53ef\u89c1\u3002\u56e0\u6b64\u5373\u4f7f\u88ab\u8c03\u7528\u7684\u7ebf\u7a0b\u662f\u4e2d\u6b62\u72b6\u6001\u7acb\u523b\u8fd4\u56de\uff0c\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\u6211\u4eec\u4ecd\u7136\u9700\u8981\u8c03\u7528\u3002"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-java"},"SampleThread t4 = new SampleThread(10);\nt4.start();\n// not guaranteed to stop even if t4 finishes.\ndo {\n        \n} while (t4.processingCount > 0);\n")),(0,a.kt)("p",{parentName:"li"},"\u4e3a\u4e86\u540c\u6b65\u4e0a\u9762\u7684\u4ee3\u7801\u5757\uff0c\u6211\u4eec\u53ef\u4ee5\u52a0\u5165 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"t4.join()"))," \u800c\u4e0d\u662f\u5faa\u73af\u6216\u8005\u5176\u4ed6\u7684\u540c\u6b65\u673a\u5236"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'public class ThreadJoinExample {\n    public static void main(String[] args) {\n        Thread t1 = new Thread(new MyRunnable(), "t1");\n        Thread t2 = new Thread(new MyRunnable(), "t2");\n        Thread t3 = new Thread(new MyRunnable(), "t3");\n\n        t1.start();\n\n        try {\n            //Thread started:::t1\n            t1.join(1000);\n        } catch (InterruptedException e) {\n            e.printStackTrace();\n        }\n\n        t2.start();\n\n        try {\n            //Thread started:::t2\n            //Thread ended:::t1\n            t1.join();\n        } catch (InterruptedException e) {\n            e.printStackTrace();\n        }\n\n        t3.start();\n        //Thread started:::t3\n        try {\n            t1.join();\n            t2.join();\n            //Thread ended:::t2\n            t3.join();\n            //Thread ended:::t3\n        } catch (InterruptedException e) {\n            // TODO Auto-generated catch block\n            e.printStackTrace();\n        }\n\n        System.out.println("All threads are dead, exiting main thread");\n    }\n\n\n}\nclass MyRunnable implements Runnable{\n\n    @Override\n    public void run() {\n        System.out.println("Thread started:::"+Thread.currentThread().getName());\n        try {\n            Thread.sleep(3000);\n        } catch (InterruptedException e) {\n            e.printStackTrace();\n        }\n        System.out.println("Thread ended:::"+Thread.currentThread().getName());\n    }\n\n}\n')),(0,a.kt)("h3",{id:"7-threadyield--\u9759\u6001\u65b9\u6cd5"},"7. Thread.yield \u2014 \u9759\u6001\u65b9\u6cd5"),(0,a.kt)("p",null,"\u6b63\u5982\u5b98\u65b9\u6587\u6863\u8bf4\u660e\u7684\u90a3\u6837\uff0c ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"yield()"))," \u63d0\u4f9b\u4e86\u4e00\u4e2a\u901a\u77e5 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"scheduler"))," \u7684\u673a\u5236\uff0c ",(0,a.kt)("strong",{parentName:"p"},"\u5f53\u524d\u7ebf\u7a0b\u613f\u610f\u653e\u5f03\u5f53\u524d\u5bf9\u5904\u7406\u5668\u7684\u4f7f\u7528\uff0c\u4f46\u5e0c\u671b\u80fd\u5c3d\u5feb\u5c06\u5176\u8c03\u5ea6\u56de\u6765")," \u3002\u201c\u8c03\u5ea6\u7a0b\u5e8f\u201d\u53ef\u4ee5\u81ea\u7531\u5730\u575a\u6301\u6216\u5ffd\u7565\u8fd9\u4e9b\u4fe1\u606f\uff0c\u5b9e\u9645\u4e0a\uff0c\u6839\u636e\u64cd\u4f5c\u7cfb\u7edf\u7684\u4e0d\u540c\uff0c\u8c03\u5ea6\u7a0b\u5e8f\u6709\u4e0d\u540c\u7684\u884c\u4e3a\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public class ThreadYield {\n    public static void main(String[] args) {\n        Runnable r = () -> {\n            int counter = 0;\n            while (counter < 2) {\n                System.out.println(Thread.currentThread()\n                    .getName());\n                counter++;\n                Thread.yield();\n            }\n        };\n        new Thread(r).start();\n        new Thread(r).start();\n    }\n}\n")),(0,a.kt)("p",null,"\u67d0\u4e00\u6b21\u8fd0\u884c\u7ed3\u679c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Thread-0\nThread-1\nThread-0\nThread-1\n")),(0,a.kt)("p",null,"\u67d0\u4e00\u6b21\u8fd0\u884c\u7ed3\u679c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Thread-0\nThread-1\nThread-1\nThread-0\n")),(0,a.kt)("h4",{id:"71-yield-vs-wait"},"7.1 yield() VS wait()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"yield()"))," \u53ef\u4ee5\u5728\u4e0a\u4e0b\u6587\u4e2d\u8c03\u7528\uff0c\u800c ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"wait()"))," \u53ea\u80fd\u5728\u540c\u6b65\u5757\u6216\u65b9\u6cd5\u4e2d\u663e\u5f0f\u83b7\u53d6\u7684\u9501\u4e0a\u8c03\u7528\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u4e0e ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"yield()"))," \u4e0d\u540c\uff0c ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"wait()"))," \u53ef\u4ee5\u6307\u5b9a\u5728\u518d\u6b21\u8c03\u5ea6\u7ebf\u7a0b\u4e4b\u524d\u7b49\u5f85\u7684\u6700\u5c0f\u65f6\u95f4\u5468\u671f\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"wait()"))," \uff0c\u8fd8\u53ef\u4ee5\u901a\u8fc7\u5728\u4efb\u4f55\u65f6\u5019\u901a\u8fc7\u8c03\u7528\u76f8\u5173\u9501\u5bf9\u8c61\u4e0a\u7684 ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"notify()"))," \u6216 ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"notifyAll()"))," \u6765\u5524\u9192\u7ebf\u7a0b")),(0,a.kt)("h4",{id:"72-yield-vs-sleep"},"7.2 yield() VS sleep()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"yield()"))," \u53ea\u80fd\u8bd5\u63a2\u5730\u5c1d\u8bd5\u6302\u8d77\u5f53\u524d\u7ebf\u7a0b\u7684\u6267\u884c\uff0c\u800c\u4e0d\u80fd\u4fdd\u8bc1\u5b83\u4f55\u65f6\u88ab\u8c03\u5ea6\u56de\u6765\uff0c\u800c ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"sleep()"))," \u53ef\u4ee5\u5f3a\u5236\u8c03\u5ea6\u7a0b\u5e8f\u5c06\u5f53\u524d\u7ebf\u7a0b\u7684\u6267\u884c\u6302\u8d77\u53c2\u6570\u8bbe\u7f6e\u7684\u4e00\u6bb5\u65f6\u95f4\u3002")),(0,a.kt)("h4",{id:"73-yield-vs-join"},"7.3 yield() VS join()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5f53\u524d\u7ebf\u7a0b\u53ef\u4ee5\u8c03\u7528\u5176\u4ed6\u4efb\u4f55\u7ebf\u7a0b\u7684 ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"join()"))," \u6765\u8ba9\u5f53\u524d\u7ebf\u7a0b\u7b49\u5f85\u76f4\u5230\u5176\u4ed6\u8c03\u7528\u7684\u7ebf\u7a0b\u4e2d\u6b62"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"join()"))," \u4e00\u4e2a\u65f6\u95f4\u4f5c\u4e3a\u53c2\u6570\uff0c\u8be5\u53c2\u6570\u6307\u793a\u5f53\u524d\u7ebf\u7a0b\u5728\u6062\u590d\u4e4b\u524d\u5e94\u8be5\u7b49\u5f85\u7684\u6700\u5927\u65f6\u95f4")),(0,a.kt)("p",null,"\u6b63\u5982\u5b98\u65b9\u6587\u6863\u6240\u5efa\u8bae\u7684\uff0c\u5f88\u5c11\u9700\u8981\u4f7f\u7528 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"yield()"))," \uff0c\u56e0\u6b64\u5e94\u8be5\u907f\u514d\u4f7f\u7528\uff0c\u9664\u975e\u6839\u636e\u5176\u884c\u4e3a\u975e\u5e38\u6e05\u695a\u5730\u4e86\u89e3\u76ee\u6807\u3002\u5c3d\u7ba1\u5982\u6b64\uff0c ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"yield()"))," \u7684\u4e00\u4e9b\u7528\u9014\u5305\u62ec\u8bbe\u8ba1\u5e76\u53d1\u63a7\u5236\u7ed3\u6784\u3001\u6539\u8fdb\u8ba1\u7b97\u5bc6\u96c6\u578b\u7a0b\u5e8f\u4e2d\u7684\u7cfb\u7edf\u54cd\u5e94\u80fd\u529b\u7b49\u3002"),(0,a.kt)("h3",{id:"8-\u7ed3\u675f\u7ebf\u7a0b"},"8. \u7ed3\u675f\u7ebf\u7a0b"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"interrupt"))," \u65b9\u6cd5"),(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528return\u505c\u6b62\u7ebf\u7a0b")))}m.isMDXComponent=!0}}]);