"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[6794],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},v=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=s(n),v=l,d=c["".concat(p,".").concat(v)]||c[v]||m[v]||a;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=v;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:l,o[1]=i;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}v.displayName="MDXCreateElement"},2654:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=n(7462),l=(n(7294),n(3905));const a={title:"Servlet\u5f02\u6b65\u5e94\u7528\u957f\u8f6e\u8be2\u5b9e\u73b0",linkTitle:"Servlet\u5f02\u6b65\u5e94\u7528\u957f\u8f6e\u8be2\u5b9e\u73b0",date:new Date("2022-02-10T00:00:00.000Z"),weight:202202102325},o=void 0,i={unversionedId:"java/java-web/servlet/long-polling",id:"java/java-web/servlet/long-polling",title:"Servlet\u5f02\u6b65\u5e94\u7528\u957f\u8f6e\u8be2\u5b9e\u73b0",description:"1. \u77ed\u8f6e\u8be2\u3001\u957f\u8f6e\u8be2\u3001\u957f\u8fde\u63a5",source:"@site/docs/java/java-web/servlet/long-polling.md",sourceDirName:"java/java-web/servlet",slug:"/java/java-web/servlet/long-polling",permalink:"/docs/java/java-web/servlet/long-polling",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/java/java-web/servlet/long-polling.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1674227439,formattedLastUpdatedAt:"Jan 20, 2023",frontMatter:{title:"Servlet\u5f02\u6b65\u5e94\u7528\u957f\u8f6e\u8be2\u5b9e\u73b0",linkTitle:"Servlet\u5f02\u6b65\u5e94\u7528\u957f\u8f6e\u8be2\u5b9e\u73b0",date:"2022-02-10T00:00:00.000Z",weight:202202102325},sidebar:"javaweb",previous:{title:"Servlet3.1",permalink:"/docs/java/java-web/servlet/Servlet3.1"},next:{title:"Servlet\u5f02\u6b65\u8bf7\u6c42\u5982\u4f55\u5f00\u542f",permalink:"/docs/java/java-web/servlet/servlet3-async"}},p={},s=[{value:"1. \u77ed\u8f6e\u8be2\u3001\u957f\u8f6e\u8be2\u3001\u957f\u8fde\u63a5",id:"1-\u77ed\u8f6e\u8be2\u957f\u8f6e\u8be2\u957f\u8fde\u63a5",level:3},{value:"1.1 \u77ed\u8f6e\u8be2",id:"11-\u77ed\u8f6e\u8be2",level:4},{value:"1.2 \u957f\u8f6e\u8be2",id:"12-\u957f\u8f6e\u8be2",level:4},{value:"1.3 \u957f\u8fde\u63a5",id:"13-\u957f\u8fde\u63a5",level:4},{value:"2. \u57fa\u4e8eServlet\u5f02\u6b65\u957f\u8f6e\u8be2\u7684\u5b9e\u73b0",id:"2-\u57fa\u4e8eservlet\u5f02\u6b65\u957f\u8f6e\u8be2\u7684\u5b9e\u73b0",level:3},{value:"2.1 \u73af\u5883\u51c6\u5907",id:"21-\u73af\u5883\u51c6\u5907",level:4},{value:"2.2 \u4ee3\u7801\u7f16\u5199",id:"22-\u4ee3\u7801\u7f16\u5199",level:4},{value:"3. \u603b\u7ed3",id:"3-\u603b\u7ed3",level:3}],u={toc:s};function c(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"1-\u77ed\u8f6e\u8be2\u957f\u8f6e\u8be2\u957f\u8fde\u63a5"},"1. \u77ed\u8f6e\u8be2\u3001\u957f\u8f6e\u8be2\u3001\u957f\u8fde\u63a5"),(0,l.kt)("p",null,"\u9996\u5148\u8fd9\u91cc\u6709\u4e09\u4e2a\u6982\u5ff5\u9700\u8981\u5f04\u6e05\u695a\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4ec0\u4e48\u662f\u77ed\u8f6e\u8be2\uff1f"),(0,l.kt)("li",{parentName:"ul"},"\u4ec0\u4e48\u662f\u957f\u8f6e\u8be2\uff1f"),(0,l.kt)("li",{parentName:"ul"},"\u4ec0\u4e48\u662f\u957f\u8fde\u63a5\uff1f")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u957f\u8f6e\u8be2\u548c\u77ed\u8f6e\u8be2\u90fd\u662f\u57fa\u4e8eHTTP\u534f\u8bae")),(0,l.kt)("h4",{id:"11-\u77ed\u8f6e\u8be2"},"1.1 \u77ed\u8f6e\u8be2"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8f6e\u8be2"),"\uff08",(0,l.kt)("strong",{parentName:"p"},"Polling"),"\uff09\u662f\u4e00\u79cd",(0,l.kt)("a",{parentName:"p",href:"https://zh.wikipedia.org/wiki/CPU"},"CPU"),"\u51b3\u7b56\u5982\u4f55\u63d0\u4f9b\u5468\u8fb9\u8bbe\u5907\u670d\u52a1\u7684\u65b9\u5f0f\uff0c\u53c8\u79f0\u201c",(0,l.kt)("strong",{parentName:"p"},"\u7a0b\u63a7\u8f93\u5165\u8f93\u51fa"),"\u201d\uff08",(0,l.kt)("strong",{parentName:"p"},"Programmed I/O"),"\uff09\u3002\u8f6e\u8be2\u6cd5\u7684\u6982\u5ff5\u662f\uff1a\u7531CPU\u5b9a\u65f6\u53d1\u51fa\u8be2\u95ee\uff0c\u4f9d\u5e8f\u8be2\u95ee\u6bcf\u4e00\u4e2a\u5468\u8fb9\u8bbe\u5907\u662f\u5426\u9700\u8981\u5176\u670d\u52a1\uff0c\u6709\u5373\u7ed9\u4e88\u670d\u52a1\uff0c\u670d\u52a1\u7ed3\u675f\u540e\u518d\u95ee\u4e0b\u4e00\u4e2a\u5468\u8fb9\uff0c\u63a5\u7740\u4e0d\u65ad\u5468\u800c\u590d\u59cb\u3002--\u6765\u81ea\u7ef4\u57fa\u767e\u79d1"),(0,l.kt)("p",null,"\u53ef\u4ee5\u7406\u89e3\u4e3aCPU\u7684\u4e00\u79cd\u63d0\u4f9b\u670d\u52a1\u7684\u7b56\u7565\u3002\u5728\u5b9e\u9645\u7684\u5e94\u7528\u4e2d\u53ef\u4ee5\u770b\u4e00\u4e0b\u73b0\u5728\u6dd8\u5b9d\u3001\u5fae\u4fe1\u7b49\u7f51\u7ad9\u626b\u7801\u767b\u5f55\uff0c\u4f1a\u53d1\u73b0\u6709\u5b9a\u65f6\u53bb\u8bf7\u6c42\u4e00\u4e2a\u63a5\u53e3\u5730\u5740\u6765\u5224\u65ad\u5f53\u524d\u7684\u4e8c\u7ef4\u7801\u662f\u4e0d\u662f\u6709\u6548\uff0c\u8fd9\u5c31\u662f\u8f6e\u8be2\u7684\u4e00\u79cd\u5b9e\u73b0(\u4e5f\u53eb\u77ed\u8f6e\u8be2)\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/others/serialize/%E6%B7%98%E5%AE%9D%E4%BA%8C%E7%BB%B4%E7%A0%81%E8%BD%AE%E8%AF%A2.gif",alt:"\u6dd8\u5b9d\u4e8c\u7ef4\u7801\u8f6e\u8be2"})),(0,l.kt)("h4",{id:"12-\u957f\u8f6e\u8be2"},"1.2 \u957f\u8f6e\u8be2"),(0,l.kt)("p",null,"\u957f\u8f6e\u8be2\u548c\u77ed\u8f6e\u8be2\u662f\u76f8\u5bf9\u7684\uff0c\u90fd\u662f\u5c5e\u4e8e\u8f6e\u8be2\u7684\u4e00\u79cd\u3002\u603b\u7684\u6765\u8bf4\u662f\u4e3a\u4e86\u63d0\u5347\u5b9e\u65f6\u548c\u6548\u7387\u3002\u957f\u8f6e\u8be2\u5c31\u662f\u4e00\u4e2a\u8bf7\u6c42\u5230\u540e\u7aef\u670d\u52a1\u5668\u5728\u8bbe\u7f6e\u7684\u4e00\u6bb5\u8d85\u65f6\u65f6\u95f4\u5185\u5982\u679c\u8bf7\u6c42\u7684\u6570\u636e\u6709\u53d8\u52a8\u5c31\u7acb\u523b\u8fd4\u56de\uff0c\u5982\u679c\u6ca1\u6709\u53d8\u52a8\u5c31\u7b49\u5f85\u76f4\u5230\u8d85\u65f6\u8fd4\u56de\u7a7a\u7684\u6570\u636e\u6216\u8005\u6ca1\u6709\u53d8\u52a8\u7684\u6570\u636e(\u8fd9\u4e2a\u770b\u5177\u4f53\u4e1a\u52a1\uff0c\u8d85\u65f6\u65f6\u95f4\u4e5f\u662f\u770b\u5f00\u53d1\u8005\u81ea\u5df1\u8bbe\u5b9a)\u3002\u901a\u8fc7\u957f\u8f6e\u8be2\u5c31\u80fd\u8fbe\u5230\u7c7b\u4f3c\u4e8e\u5b9e\u65f6\u63a8\u9001\u7684\u6548\u679c\u3002"),(0,l.kt)("h4",{id:"13-\u957f\u8fde\u63a5"},"1.3 \u957f\u8fde\u63a5"),(0,l.kt)("p",null,"\u957f\u8fde\u63a5\uff0c\u6307\u5728\u4e00\u4e2a\u8fde\u63a5\u4e0a\u53ef\u4ee5\u8fde\u7eed\u53d1\u9001\u591a\u4e2a\u6570\u636e\u5305\uff0c\u5728\u8fde\u63a5\u4fdd\u6301\u671f\u95f4\uff0c\u5982\u679c\u6ca1\u6709\u6570\u636e\u5305\u53d1\u9001\uff0c\u9700\u8981\u53cc\u65b9\u53d1\u94fe\u8def\u68c0\u6d4b\u5305---\u6765\u81ea\u767e\u5ea6\u767e\u79d1"),(0,l.kt)("p",null,"\u901a\u4fd7\u4e00\u70b9\u8bf4\u5c31\u662f\uff1a\u8fde\u63a5\u5efa\u7acb\u597d\u4e86\u4ee5\u540e\u5728\u6ca1\u6709\u5f02\u5e38\u7684\u60c5\u51b5\u4e0b\u662f\u4e00\u76f4\u7ef4\u6301\u7684\u3002\u4e0b\u6b21\u60f3\u53d1\u6570\u636e\u5305\u76f4\u63a5\u7528\u4e4b\u524d\u5efa\u7acb\u7684\u91cd\u65b0\u53d1\u3002\u65e0\u9700\u91cd\u65b0\u65b0\u5efa\u8fde\u63a5\u3002"),(0,l.kt)("h3",{id:"2-\u57fa\u4e8eservlet\u5f02\u6b65\u957f\u8f6e\u8be2\u7684\u5b9e\u73b0"},"2. \u57fa\u4e8eServlet\u5f02\u6b65\u957f\u8f6e\u8be2\u7684\u5b9e\u73b0"),(0,l.kt)("p",null,"\u5728\u4e4b\u524d\u7684\u6587\u7ae0\u300a",(0,l.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7060323697298505741"},"Servlet\u5f02\u6b65\u8bf7\u6c42\u5982\u4f55\u5f00\u542f"),"\u300b\u8bb2\u4e86\u5982\u4f55\u5f00\u542fServlet\u5f02\u6b65\uff0c\u8fd9\u91cc\u6211\u4eec\u901a\u8fc7Servlet\u5f02\u6b65\u6765\u5b9e\u73b0\u957f\u8f6e\u8be2\u3002"),(0,l.kt)("h4",{id:"21-\u73af\u5883\u51c6\u5907"},"2.1 \u73af\u5883\u51c6\u5907"),(0,l.kt)("p",null,"\u4eceSpring\u5b98\u65b9\u7684\u811a\u624b\u67b6\u7f51\u7ad9",(0,l.kt)("a",{parentName:"p",href:"https://start.spring.io/%E5%88%9B%E5%BB%BA%E4%B8%80%E4%B8%AASpringBoot"},"https://start.spring.io/\u521b\u5efa\u4e00\u4e2aSpringBoot")," web\u9879\u76ee\u3002(\u7248\u672c\u81ea\u5df1\u9009\u62e9)"),(0,l.kt)("h4",{id:"22-\u4ee3\u7801\u7f16\u5199"},"2.2 \u4ee3\u7801\u7f16\u5199"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'/**\n * @author mxsm\n * @Date 2021/3/16\n * @Since\n */\n@RestController\n@RequestMapping("/longPolling")\npublic class LongPollingController {\n\n    private ScheduledExecutorService service = new ScheduledThreadPoolExecutor(10);\n    private ExecutorService executorService = Executors.newSingleThreadExecutor();\n    private Queue<Task> queue = new ConcurrentLinkedQueue<>();\n\n    private BlockingQueue<Boolean> blockingQueue = new LinkedBlockingQueue<>(1000);\n\n    @PostConstruct\n    public void init(){\n        new Thread(new Runnable() {\n            @Override\n            public void run() {\n                System.out.println("init");\n               for (;;){\n                   try {\n                       blockingQueue.take();\n                       Task poll = null;\n                       do{\n                           poll = queue.poll();\n                           if(poll != null){\n                               poll.execute();\n                           }\n                       }while (poll != null);\n                   } catch (InterruptedException e) {\n                       e.printStackTrace();\n                   }\n               }\n            }\n        }, "thread-mxsm").start();\n    }\n\n    @GetMapping("/time")\n    public void async(HttpServletRequest request, HttpServletResponse response) {\n       final AsyncContext asyncContext = request.startAsync();\n        executorService.execute(new Task(asyncContext));\n    }\n\n    @GetMapping("/update")\n    public void update() {\n        blockingQueue.offer(true);\n    }\n\n    class Task implements Runnable {\n        private AsyncContext asyncContext;\n        public Task(AsyncContext asyncContext) {\n            this.asyncContext = asyncContext;\n        }\n        @Override\n        public void run() {\n                service.schedule(new Runnable() {\n                    @Override\n                    public void run() {\n                        boolean remove = queue.remove(Task.this);\n                        System.out.println(remove);\n                        try {\n                            HttpServletResponse response = (HttpServletResponse) asyncContext.getResponse();\n                            response.setStatus(HttpServletResponse.SC_OK);\n                            response.getWriter().println("22222");\n                            System.out.println(123);\n                            asyncContext.complete();\n                        } catch (IOException e) {\n                            e.printStackTrace();\n                            asyncContext.complete();\n                        }\n                    }\n                }, 10, TimeUnit.MINUTES);\n            queue.add(this);\n            System.out.println(3333);\n        }\n\n        public void execute(){\n            try {\n                HttpServletResponse response = (HttpServletResponse) asyncContext.getResponse();\n                response.setStatus(HttpServletResponse.SC_OK);\n                response.getWriter().println("333333");\n                System.out.println(123);\n                asyncContext.complete();\n            } catch (IOException e) {\n                e.printStackTrace();\n            }\n        }\n    }\n\n}\n\n\n')),(0,l.kt)("p",null,"\u4ee3\u7801\u8bf4\u660e\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"async\u65b9\u6cd5\u957f\u8f6e\u8be2\u7684\u63a5\u5165\u65b9\u6cd5"),(0,l.kt)("li",{parentName:"ul"},"update\u6a21\u62df\u5728\u957f\u8f6e\u8be2\u8fc7\u7a0b\u4e2d\u6570\u636e\u66f4\u65b0"),(0,l.kt)("li",{parentName:"ul"},"\u8fd9\u91cc\u6ca1\u6709\u5199\u5ba2\u6237\u7aef\uff0c\u5ba2\u6237\u7aef\u76f4\u63a5\u7528\u624b\u70b9\u6d4f\u89c8\u5668\u4ee3\u66ff\u770b\u4e00\u4e0b\u6548\u679c")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6d4b\u8bd51\uff1a\u6b63\u5e38\u7684\u8f6e\u8be2\u4e00\u4e2a\u65f6\u95f4\u7247")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/others/serialize/%E9%95%BF%E8%BD%AE%E8%AF%A2%E6%B5%8B%E8%AF%951.gif",alt:"\u957f\u8f6e\u8be2\u6d4b\u8bd51"})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6d4b\u8bd52\uff1a\u957f\u8f6e\u8be2\u65f6\u95f4\u7247\u8fc7\u7a0b\u4e2d\u66f4\u65b0\u6570\u636e")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/others/serialize/%E9%95%BF%E8%BD%AE%E8%AF%A2%E6%B5%8B%E8%AF%952.gif",alt:"\u957f\u8f6e\u8be2\u6d4b\u8bd52"})),(0,l.kt)("p",null,"\u957f\u8f6e\u8be2\u540e\u7aef\u5c31\u5c31\u5b9e\u73b0\u5b8c\u6210\u4e86"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u4ee3\u7801\u5730\u5740\uff1a",(0,l.kt)("a",{parentName:"p",href:"https://github.com/mxsm/spring-sample/blob/master/spring-boot/src/main/java/com/github/mxsm/controller/LongPollingController.java"},"https://github.com/mxsm/spring-sample/blob/master/spring-boot/src/main/java/com/github/mxsm/controller/LongPollingController.java"))),(0,l.kt)("h3",{id:"3-\u603b\u7ed3"},"3. \u603b\u7ed3"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u957f\u8f6e\u8be2\u76f8\u5bf9\u4e8e\u77ed\u8f6e\u8be2\u6027\u80fd\u597d\u5f88\u591a\uff0c\u4f46\u662f\u76f8\u6bd4\u957f\u8fde\u63a5\u8fd8\u662f\u4e0d\u90a3\u4e48\u597d\u3002\u4f46\u662f\u4f18\u52bf\u5728\u4e8e\u53ef\u4ee5\u501f\u52a9HTTP\u7684\u4e00\u4e9b\u7279\u6027\u6765\u5b9e\u73b0\u5feb\u901f\u5f00\u53d1"),(0,l.kt)("li",{parentName:"ul"},"\u4ece\u8f6e\u8be2\u901a\u8fc7\u540e\u53f0\u7684\u4e00\u4e9b\u5de7\u5999\u5b9e\u73b0\u4e5f\u80fd\u505a\u5230\u53ca\u65f6\u66f4\u65b0\u6570\u636e\u7ed9\u524d\u7aef")))}c.isMDXComponent=!0}}]);