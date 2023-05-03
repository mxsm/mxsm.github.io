"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[9249],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),o=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},m=function(e){var t=o(e.components);return r.createElement(i.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=o(n),d=a,k=c["".concat(i,".").concat(d)]||c[d]||s[d]||l;return n?r.createElement(k,u(u({ref:t},m),{},{components:n})):r.createElement(k,u({ref:t},m))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,u=new Array(l);u[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[c]="string"==typeof e?e:a,u[1]=p;for(var o=2;o<l;o++)u[o]=n[o];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1945:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>u,default:()=>s,frontMatter:()=>l,metadata:()=>p,toc:()=>o});var r=n(7462),a=(n(7294),n(3905));const l={title:"CompletableFuture\u8be6\u89e3",linkTitle:"CompletableFuture\u8be6\u89e3",date:new Date("2022-07-30T00:00:00.000Z"),weight:202207301354},u=void 0,p={unversionedId:"java/java-se/concurrencemultithreading/CompletableFuture",id:"java/java-se/concurrencemultithreading/CompletableFuture",title:"CompletableFuture\u8be6\u89e3",description:"\u5e73\u65f6\u5f00\u53d1\u8fc7\u7a0b\u4e2d Runable \u3001Future \u3001 Thread \u3001ExecutorService\u3001Callable \u8fd9\u4e9b\u548c\u591a\u7ebf\u7a0b\u76f8\u5173\u7684class\u4e86\u89e3\u548c\u4f7f\u7528\u7684\u4e5f\u6bd4\u8f83\u591a\uff0c\u76f8\u5bf9\u6765\u8bf4\u66f4\u52a0\u7684\u719f\u6089\u548c\u4e86\u89e3\u3002\u4f7f\u7528\u8d77\u6765\u4e5f\u66f4\u52a0\u7684\u5f97\u5fc3\u5e94\u624b\u3002\u4f46\u662f\u8fd9\u4e9b\u7ec4\u5408\u5728\u4e00\u8d77\u89e3\u51b3\u591a\u7ebf\u7a0b\u7684\u95ee\u9898\u7684\u540c\u65f6\u4e5f\u6709\u4e00\u4e9b\u4e0d\u662f\u5f88\u6ee1\u8db3\u5b9e\u9645\u5f00\u53d1\u8fc7\u7a0b\u4e2d\u7684\u9700\u6c42\u3002\u7136\u540e\u5728JDK8\u5f15\u5165\u4e86\u4e00\u4e2a\u65b0\u7684\u7c7b CompletableFuture \u6765\u89e3\u51b3\u4e4b\u524d\u7684\u75db\u70b9\u95ee\u9898\u3002\u63a5\u4e0b\u6765\u4e86\u89e3\u4e00\u4e0b CompletableFuture \u7684\u4e00\u4e9b\u57fa\u672c\u60c5\u51b5\u4ee5\u53ca\u4f7f\u7528\u548c\u6ce8\u610f\u4e8b\u9879\u3002",source:"@site/docs/java/java-se/concurrencemultithreading/CompletableFuture.md",sourceDirName:"java/java-se/concurrencemultithreading",slug:"/java/java-se/concurrencemultithreading/CompletableFuture",permalink:"/docs/java/java-se/concurrencemultithreading/CompletableFuture",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/java/java-se/concurrencemultithreading/CompletableFuture.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1683078484,formattedLastUpdatedAt:"May 3, 2023",frontMatter:{title:"CompletableFuture\u8be6\u89e3",linkTitle:"CompletableFuture\u8be6\u89e3",date:"2022-07-30T00:00:00.000Z",weight:202207301354},sidebar:"javase",previous:{title:"AtomicXXXFieldUpdater\u5728\u5185\u5b58\u4f18\u5316\u4e2d\u7684\u662f\u5b9e\u6218",permalink:"/docs/java/java-se/concurrencemultithreading/AtomicXxxFieldUpdater"},next:{title:"JUC\u5305\u4e2d\u7684\u539f\u5b50\u7c7b",permalink:"/docs/java/java-se/concurrencemultithreading/JUC-atomic-class"}},i={},o=[{value:"1 CompletableFuture\u6982\u8ff0",id:"1-completablefuture\u6982\u8ff0",level:3},{value:"1.1 CompletableFuture\u4e0eFuture\u7684\u5173\u7cfb",id:"11-completablefuture\u4e0efuture\u7684\u5173\u7cfb",level:4},{value:"1.2 CompletableFuture\u672c\u8d28",id:"12-completablefuture\u672c\u8d28",level:4},{value:"2 CompletableFuture\u4f7f\u7528\u6848\u4f8b",id:"2-completablefuture\u4f7f\u7528\u6848\u4f8b",level:3},{value:"3 CompletableFuture\u4f7f\u7528\u9700\u8981\u6ce8\u610f\u70b9",id:"3-completablefuture\u4f7f\u7528\u9700\u8981\u6ce8\u610f\u70b9",level:3},{value:"4 \u603b\u7ed3",id:"4-\u603b\u7ed3",level:3}],m={toc:o},c="wrapper";function s(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5e73\u65f6\u5f00\u53d1\u8fc7\u7a0b\u4e2d ",(0,a.kt)("inlineCode",{parentName:"p"},"Runable")," \u3001",(0,a.kt)("inlineCode",{parentName:"p"},"Future")," \u3001 ",(0,a.kt)("inlineCode",{parentName:"p"},"Thread")," \u3001",(0,a.kt)("inlineCode",{parentName:"p"},"ExecutorService"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"Callable")," \u8fd9\u4e9b\u548c\u591a\u7ebf\u7a0b\u76f8\u5173\u7684class\u4e86\u89e3\u548c\u4f7f\u7528\u7684\u4e5f\u6bd4\u8f83\u591a\uff0c\u76f8\u5bf9\u6765\u8bf4\u66f4\u52a0\u7684\u719f\u6089\u548c\u4e86\u89e3\u3002\u4f7f\u7528\u8d77\u6765\u4e5f\u66f4\u52a0\u7684\u5f97\u5fc3\u5e94\u624b\u3002\u4f46\u662f\u8fd9\u4e9b\u7ec4\u5408\u5728\u4e00\u8d77\u89e3\u51b3\u591a\u7ebf\u7a0b\u7684\u95ee\u9898\u7684\u540c\u65f6\u4e5f\u6709\u4e00\u4e9b\u4e0d\u662f\u5f88\u6ee1\u8db3\u5b9e\u9645\u5f00\u53d1\u8fc7\u7a0b\u4e2d\u7684\u9700\u6c42\u3002\u7136\u540e\u5728JDK8\u5f15\u5165\u4e86\u4e00\u4e2a\u65b0\u7684\u7c7b ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"CompletableFuture"))," \u6765\u89e3\u51b3\u4e4b\u524d\u7684\u75db\u70b9\u95ee\u9898\u3002\u63a5\u4e0b\u6765\u4e86\u89e3\u4e00\u4e0b ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"CompletableFuture"))," \u7684\u4e00\u4e9b\u57fa\u672c\u60c5\u51b5\u4ee5\u53ca\u4f7f\u7528\u548c\u6ce8\u610f\u4e8b\u9879\u3002"),(0,a.kt)("h3",{id:"1-completablefuture\u6982\u8ff0"},"1 CompletableFuture\u6982\u8ff0"),(0,a.kt)("p",null,"\u5728JDK8\u4e4b\u524d\uff0c\u6211\u4eec\u4f7f\u7528\u7684Java\u591a\u7ebf\u7a0b\u53d8\u6210\uff0c\u4e3b\u8981\u662f ",(0,a.kt)("strong",{parentName:"p"},"Thread+Runnable")," \u6765\u5b8c\u6210\uff0c\u4f46\u662f\u8fd9\u79cd\u65b9\u5f0f\u6709\u4e2a\u5f0a\u7aef\u5c31\u662f\u6ca1\u6709\u8fd4\u56de\u503c\u3002\u5982\u679c\u60f3\u8981\u8fd4\u56de\u503c\u600e\u4e48\u529e\u5462\uff0c\u5927\u591a\u6570\u4eba\u5c31\u4f1a\u60f3\u5230 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Callable + Thread"))," \u7684\u65b9\u5f0f\u6765\u83b7\u53d6\u5230\u8fd4\u56de\u503c\u3002\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public class TestCompletable {\n\n    public static void main(String[] args) throws Exception{\n        FutureTask<String> task = new FutureTask((Callable<String>) () -> {\n            TimeUnit.SECONDS.sleep(2);\n            return UUID.randomUUID().toString();\n        });\n        new Thread(task).start();\n        String s = task.get();\n        System.out.println(s);\n    }\n}\n")),(0,a.kt)("p",null,"\u4ece\u8fd0\u884c\u4e0a\u9762\u4ee3\u7801\u53ef\u4ee5\u77e5\u9053\u5f53\u8c03\u7528\u4ee3\u7801 ",(0,a.kt)("inlineCode",{parentName:"p"},"String s = task.get();")," \u7684\u65f6\u5019\uff0c\u5f53\u524d\u4e3b\u7ebf\u7a0b\u662f\u963b\u585e\u72b6\u6001\uff0c\u53e6\u4e00\u79cd\u65b9\u5f0f\u83b7\u53d6\u5230\u8fd4\u56de\u503c\u5c31\u662f\u901a\u8fc7\u8f6e\u8be2 ",(0,a.kt)("inlineCode",{parentName:"p"},"task.isDone()")," \u6765\u5224\u65ad\u4efb\u52a1\u662f\u5426\u505a\u5b8c\u83b7\u53d6\u8fd4\u56de\u503c\u3002\u56e0\u6b64JDK8\u4e4b\u524d\u63d0\u4f9b\u7684\u5f02\u6b65\u80fd\u529b\u6709\u4e00\u5b9a\u7684\u5c40\u9650\u6027\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Runnable+Thread\u867d\u7136\u63d0\u4f9b\u4e86\u591a\u7ebf\u7a0b\u7684\u80fd\u529b\u4f46\u662f\u6ca1\u6709\u8fd4\u56de\u503c\u3002"),(0,a.kt)("li",{parentName:"ul"},"Callable+Thread\u7684\u65b9\u6cd5\u63d0\u4f9b\u591a\u7ebf\u7a0b\u548c\u8fd4\u56de\u503c\u7684\u80fd\u529b\u4f46\u662f\u5728\u83b7\u53d6\u8fd4\u56de\u503c\u7684\u65f6\u5019\u4f1a\u963b\u585e\u4e3b\u7ebf\u7a0b\u3002")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/java/concurrencemultithreading/Future%E6%89%A7%E8%A1%8C%E6%B5%81%E7%A8%8B%E5%9B%BE.png",alt:"Future\u6267\u884c\u6d41\u7a0b\u56fe"})),(0,a.kt)("p",null,"\u6240\u4ee5\u4e0a\u8ff0\u7684\u60c5\u51b5\u53ea\u9002\u5408\u4e0d\u5173\u5fc3\u8fd4\u56de\u503c\uff0c\u53ea\u8981\u63d0\u4ea4\u7684Task\u6267\u884c\u4e86\u5c31\u53ef\u4ee5\u3002\u53e6\u5916\u7684\u5c31\u662f\u80fd\u591f\u5bb9\u5fcd\u7b49\u5f85\u3002\u56e0\u6b64\u6211\u4eec\u9700\u8981\u66f4\u5927\u7684\u5f02\u6b65\u80fd\u529b\u4e3a\u4e86\u53bb\u89e3\u51b3\u8fd9\u4e9b\u75db\u70b9\u95ee\u9898\u3002\u6bd4\u5982\u4e00\u4e0b\u573a\u666f\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e24\u4e2aTask\u8ba1\u7b97\u5408\u5e76\u4e3a\u4e00\u4e2a\uff0c\u8fd9\u4e24\u4e2a\u5f02\u6b65\u8ba1\u7b97\u4e4b\u95f4\u76f8\u4e92\u72ec\u7acb\uff0c\u4f46\u662f\u4e24\u8005\u4e4b\u524d\u53c8\u6709\u4f9d\u8d56\u5173\u7cfb\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u591a\u4e2aTask,\u53ea\u8981\u4e00\u4e2a\u4efb\u52a1\u8fd4\u56de\u4e86\u7ed3\u679c\u5c31\u8fd4\u56de\u7ed3\u679c")),(0,a.kt)("p",null,"\u7b49\u7b49\u5176\u4ed6\u7684\u4e00\u4e9b\u8d1f\u8f7d\u7684\u573a\u666f\uff0c JDK8 \u5c31\u5f15\u5165\u4e86 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"CompletableFuture"))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/java/concurrencemultithreading/image-20220730150022826.png",alt:"image-20220730150022826"})),(0,a.kt)("h4",{id:"11-completablefuture\u4e0efuture\u7684\u5173\u7cfb"},"1.1 CompletableFuture\u4e0eFuture\u7684\u5173\u7cfb"),(0,a.kt)("p",null,"\u901a\u8fc7\u4e0a\u9762\u7684\u7c7b\u7ee7\u627f\u5173\u7cfb\u56fe\u53ef\u4ee5\u77e5\u9053 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"CompletableFuture"))," \u5b9e\u73b0\u4e86 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Future"))," \u63a5\u53e3\u548c ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"CompletionStage"))," \u3002\u56e0\u6b64 CompletableFuture\u662f\u5bf9 Futrue\u7684\u529f\u80fd\u589e\u5f3a\u5305\u542b\u4e86Future\u7684\u529f\u80fd\u3002\u4ece\u7ee7\u627f\u7684\u53e6\u4e00\u4e2a ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"CompletionStage"))," \u7684\u540d\u79f0\u6765\u770b\u5b8c\u6210\u9636\u6bb5\u6027\u7684\u63a5\u53e3\u3002\u8fd9\u4e2a\u600e\u4e48\u7406\u89e3\uff0c\u8fd9\u4e2a\u5c31\u662f\u4e0b\u9762\u8981\u8bf4\u7684CompletableFuture\u672c\u8d28\u3002"),(0,a.kt)("h4",{id:"12-completablefuture\u672c\u8d28"},"1.2 CompletableFuture\u672c\u8d28"),(0,a.kt)("p",null,"CompletableFuture\u672c\u8d28\u662f\u4ec0\u4e48\uff1f\u7b14\u8005\u7684\u7406\u89e3CompletableFuture\u76f8\u5f53\u4e8e\u4e00\u4e2aTask\u7f16\u6392\u5de5\u5177\u3002\u4e3a\u4ec0\u4e48\u8fd9\u4e48\u8bf4\u4f9d\u636e\u5982\u4e0b\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"CompletableFuture#completedFuture\u3001CompletableFuture#whenComplete \u8fd9\u4e9b\u65b9\u6cd5\u90fd\u662f\u5bf9\u67d0\u4e00\u4e2a\u9636\u6bb5Task\u8ba1\u7b97\u5b8c\u6210\u7136\u540e\u8fdb\u884c\u4e0b\u4e00\u6b65\u7684\u52a8\u4f5c\u3002\u5c06\u4e0b\u4e00\u4e2a\u4e00\u4e2aTask\u548c\u524d\u4e00\u4e2aTask\u8fdb\u884c\u7f16\u6392\u3002"),(0,a.kt)("li",{parentName:"ul"},"CompletableFuture#handle \u5c06Task\u4e32\u8fde\u8d77\u6765")),(0,a.kt)("p",null,"\u8fd9\u4e9b\u52a8\u4f5c\u5176\u5b9e\u5c31\u662fTask\u7f16\u6392\u3002"),(0,a.kt)("h3",{id:"2-completablefuture\u4f7f\u7528\u6848\u4f8b"},"2 CompletableFuture\u4f7f\u7528\u6848\u4f8b"),(0,a.kt)("p",null,"\u4e0b\u9762\u901a\u8fc7\u81ea\u5df1\u5199\u7684\u4e00\u4e9b\u4f8b\u5b50\u548c\u5f00\u6e90\u9879\u76ee ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/openmessaging/dledger"},"DLedger")," \u4e2d\u7684\u4e00\u4e9b\u4f8b\u5b50\u6765\u770b\u4e00\u4e0b ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"CompletableFuture"))," \u4f7f\u7528\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"CompletableFuture\u5177\u6709Future\u7684\u529f\u80fd\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public class TestCompletable {\n\n    public static void main(String[] args) throws Exception{\n        FutureTask<String> futureTask = new FutureTask(() -> {\n            Thread.sleep(2000);\n            return UUID.randomUUID().toString();\n        });\n        new Thread(futureTask).start();\n        CompletableFuture<String> future = CompletableFuture.completedFuture(futureTask.get());\n        String uuid = future.get();\n        System.out.println(uuid);\n\n    }\n}\n")),(0,a.kt)("p",null,"\u8fd0\u884c\u4ee3\u7801\u4f1a\u53d1\u73b0\u6574\u4e2a\u8fc7\u7a0b\u4f1a\u7b49\u5f85\u4f1a\u7136\u540e\u6253\u5370\u9519\u7ed3\u679c\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/java/concurrencemultithreading/completableFuture1.gif",alt:"completableFuture1"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Task\u5b8c\u6210\u540e\u56de\u8c03\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'public class TestCompletable {\n\n    public static void main(String[] args) throws Exception{\n\n        CompletableFuture<String> future = CompletableFuture.supplyAsync(() -> {\n            try {\n                System.out.println(Thread.currentThread().getName());\n                TimeUnit.SECONDS.sleep(3);\n                System.out.println("");\n                return UUID.randomUUID().toString();\n            } catch (InterruptedException e) {\n                e.printStackTrace();\n            }\n            return UUID.randomUUID().toString();\n        });\n        future.whenComplete((uuid,exception)->{\n            System.out.println(uuid);\n            System.out.println(Thread.currentThread().getName());\n        });\n\n        System.out.println(11111);\n        System.in.read();\n    }\n\n}\n')),(0,a.kt)("p",null,"\u8fd0\u884c\u4e00\u4e0b\u770b\u4e00\u4e0b\u7ed3\u679c\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/java/concurrencemultithreading/completableFuture2.gif",alt:"completableFuture1"})),(0,a.kt)("p",null,"\u901a\u8fc7\u7ed3\u679c\u53ef\u4ee5\u770b\u51fa\u6765\u5f53\u5b8c\u6210UUID\u751f\u6210\u540e\uff0c\u53c8\u6267\u884c\u4e86whenComplete\u91cc\u9762\u7684\u56de\u8c03\u65b9\u6cd5\u3002\u540c\u65f6\u8fd8\u53ef\u4ee5\u901a\u8fc7 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"future.get()"))," \u83b7\u53d6\u5230\u8fd4\u56de\u503c\u3002\u6216\u8005\u5c31\u7528\u4e0a\u9762\u7684\u4ee3\u7801\u4e0d\u7528get\u7684\u65b9\u5f0f\u3002\u5728\u56de\u8c03\u51fd\u6570\u4e2d\u5c31\u80fd\u83b7\u53d6\u5230\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u5b8c\u6210\u4efb\u610f\u4e00\u4e2aTask\u5c31\u5f00\u59cb\u6267\u884c\u56de\u8c03\u51fd\u6570\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'public class TestCompletable {\n\n    public static void main(String[] args) throws Exception{\n\n        CompletableFuture<String> future = CompletableFuture.supplyAsync(() -> {\n            try {\n                System.out.println(Thread.currentThread().getName());\n                TimeUnit.SECONDS.sleep(3);\n                return "\u5f00\u59cb\u751f\u6210UUID-"+UUID.randomUUID().toString();\n            } catch (InterruptedException e) {\n                e.printStackTrace();\n            }\n            return UUID.randomUUID().toString();\n        });\n        CompletableFuture<String> future1 = CompletableFuture.supplyAsync(() -> {\n            try {\n                System.out.println(Thread.currentThread().getName());\n                TimeUnit.SECONDS.sleep(4);\n\n                return "\u5f00\u59cb\u751f\u6210UUID1-"+UUID.randomUUID().toString();\n            } catch (InterruptedException e) {\n                e.printStackTrace();\n            }\n            return UUID.randomUUID().toString();\n        });\n\n        CompletableFuture.anyOf(future,future1).whenComplete((uuid,ex)->{\n            System.out.println(uuid);\n        });\n\n        System.out.println(11111);\n        System.in.read();\n    }\n\n}\n')),(0,a.kt)("p",null,"\u770b\u4e00\u4e0b\u6267\u884c\u7ed3\u679c\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/java/concurrencemultithreading/completableFuture3.gif",alt:"completableFuture1"})),(0,a.kt)("p",null,"\u4e0a\u9762\u4f7f\u7528\u4e86\u53ea\u662f\u4e00\u90e8\u5206",(0,a.kt)("inlineCode",{parentName:"p"},"CompletableFuture"),"\u7684\u7279\u6027\u3002\u901a\u8fc7\u5bf9Task\u8fdb\u884c\u7f16\u6392\u53ef\u4ee5\u505a\u5230\u5f88\u591a\u7684\u4e8b\u60c5\u3002"),(0,a.kt)("p",null,"\u5728DLedger\u4e2d\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/java/concurrencemultithreading/image-20220730162811121.png",alt:"image-20220730162811121"})),(0,a.kt)("p",null,"\u901a\u8fc7\u4f7f\u7528 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"CompletableFuture"))," \u5f02\u6b65\u5316\uff0c\u5904\u7406\u8bf7\u6c42\u90fd\u662f\u901a\u8fc7CompletableFuture#whenCompleteAsync\u65b9\u6cd5\u3002\u611f\u5174\u8da3\u7684\u53ef\u4ee5\u53bb\u9605\u8bfb\u4e00\u4e0b\u6e90\u7801\u8fdb\u4e00\u6b65\u4e86\u89e3",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"CompletableFuture"))," \u5728\u5b9e\u9645\u9879\u76ee\u4e2d\u7684\u4f7f\u7528\u3002"),(0,a.kt)("h3",{id:"3-completablefuture\u4f7f\u7528\u9700\u8981\u6ce8\u610f\u70b9"},"3 CompletableFuture\u4f7f\u7528\u9700\u8981\u6ce8\u610f\u70b9"),(0,a.kt)("p",null,"\u5bf9\u4e8e\u548c\u591a\u7ebf\u7a0b\u7f16\u7a0b\u626f\u4e0a\u5173\u7cfb\uff0c\u9996\u5148\u60f3\u5230\u7684\u5c31\u662f\u5f53\u524d\u7684Task\u5230\u5e95\u7531\u90a3\u4e2aThread\u6267\u884c\uff0c\u4f7f\u7528\u7684\u4e0d\u597d\u53ef\u80fd\u4f1a\u6709\u6027\u80fd\u95ee\u9898\u3002\u9996\u5148\u6839\u636e",(0,a.kt)("inlineCode",{parentName:"p"},"CompletableFuture"),"\u7684\u65b9\u6cd5\u547d\u540d\u53ef\u4ee5\u4e86\u89e3\u5230\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"xxxx()\uff1a\u8868\u793a\u8be5\u65b9\u6cd5\u5c06\u7ee7\u7eed\u5728\u5f53\u524d\u6267\u884cCompletableFuture\u7684\u65b9\u6cd5\u7ebf\u7a0b\u4e2d\u6267\u884c"),(0,a.kt)("li",{parentName:"ul"},"xxxxAsync()\uff1a\u8868\u793a\u5f02\u6b65\uff0c\u5728\u7ebf\u7a0b\u6c60\u4e2d\u6267\u884c\u3002")),(0,a.kt)("p",null,"\u7528\u4f8b\u5b50\u6765\u8bf4\u660e\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public class TestCompletable {\n\n    public static void main(String[] args) throws Exception{\n\n        CompletableFuture future = new CompletableFuture();\n        future.whenComplete((item,ex)->{\n            System.out.println(item);\n            System.out.println(Thread.currentThread().getName());\n        });\n        future.complete(1111);\n        TimeUnit.SECONDS.sleep(2);\n    }\n}\n")),(0,a.kt)("p",null,"\u8fd0\u884c\u7ed3\u679c\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/java/concurrencemultithreading/image-20220730201846935.png",alt:"image-20220730201846935"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'public class TestCompletable {\n\n    public static void main(String[] args) throws Exception{\n\n        CompletableFuture future = new CompletableFuture();\n        future.whenCompleteAsync((item,ex)->{\n            System.out.println(item);\n            System.out.println(Thread.currentThread().getName());\n        });\n        future.whenCompleteAsync((item,ex)->{\n            System.out.println(item);\n            System.out.println(Thread.currentThread().getName());\n        }, Executors.newFixedThreadPool(10, new ThreadFactory() {\n            private AtomicInteger integer = new AtomicInteger();\n            @Override\n            public Thread newThread(Runnable r) {\n                return new Thread(r, "Thread-"+integer.getAndIncrement());\n            }\n        }));\n        future.complete(1111);\n        TimeUnit.SECONDS.sleep(2);\n    }\n}\n')),(0,a.kt)("p",null,"\u8fd0\u884c\u7ed3\u679c\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/java/concurrencemultithreading/image-20220730202220638.png",alt:"image-20220730202220638"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Tips: \u5728\u6ca1\u6709\u6307\u5b9a\u7ebf\u7a0b\u6c60\u7684\u60c5\u51b5\u4e0b\uff0c\u4f7f\u7528\u7684\u662fCompletableFuture\u5185\u90e8\u7684\u7ebf\u7a0b\u6c60\u3002")),(0,a.kt)("p",null,"\u5bf9\u4e8e\u6027\u80fd\u6709\u8003\u8651\u7684\u9700\u8981\u6ce8\u610f\u540c\u6b65\u548c\u5f02\u6b65\u7684\u4f7f\u7528\u3002"),(0,a.kt)("h3",{id:"4-\u603b\u7ed3"},"4 \u603b\u7ed3"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"CompletableFuture"),"\u53ef\u4ee5\u6307\u5b9a\u5f02\u6b65\u5904\u7406\u6d41\u7a0b\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"thenAccept()"),"\u5904\u7406\u6b63\u5e38\u7ed3\u679c\uff1b"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"exceptional()"),"\u5904\u7406\u5f02\u5e38\u7ed3\u679c\uff1b"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"thenApplyAsync()"),"\u7528\u4e8e\u4e32\u884c\u5316\u53e6\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"li"},"CompletableFuture")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"anyOf()"),"\u548c",(0,a.kt)("inlineCode",{parentName:"li"},"allOf()"),"\u7528\u4e8e\u5e76\u884c\u5316\u591a\u4e2a",(0,a.kt)("inlineCode",{parentName:"li"},"CompletableFuture"))),(0,a.kt)("p",null,"\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"CompletableFuture"),"\u6267\u884cTask\u7684\u65f6\u5019\uff0c\u662f\u9700\u8981\u4f7f\u7528\u7ebf\u7a0b\u6c60\u8fd8\u662f\u7528\u5f53\u524d\u7684\u7ebf\u7a0b\u53bb\u6267\u884c\u3002\u8fd9\u4e2a\u9700\u8981\u6839\u636e\u5177\u4f53\u7684\u60c5\u51b5\u6765\u5b9a\u3002\u4f7f\u7528\u7684\u65f6\u5019\u8981\u5c3d\u53ef\u80fd\u7684\u5c0f\u5fc3\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6211\u662f\u8682\u8681\u80cc\u5927\u8c61(",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mxsm"},"GitHub"),")\uff0c\u6587\u7ae0\u5bf9\u4f60\u6709\u5e2e\u52a9\u70b9\u8d5e\u5173\u6ce8\u6211\uff0c\u6587\u7ae0\u6709\u4e0d\u6b63\u786e\u7684\u5730\u65b9\u8bf7\u60a8\u65a7\u6b63\u7559\u8a00\u8bc4\u8bba~\u8c22\u8c22")),(0,a.kt)("p",null,"\u6211\u6b63\u5728\u53c2\u4e0e\u6398\u91d1\u6280\u672f\u793e\u533a\u521b\u4f5c\u8005\u7b7e\u7ea6\u8ba1\u5212\u62db\u52df\u6d3b\u52a8\uff0c",(0,a.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7112770927082864653"},"\u70b9\u51fb\u94fe\u63a5\u62a5\u540d\u6295\u7a3f"),"\u3002"))}s.isMDXComponent=!0}}]);