"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[7166],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>v});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(n),d=o,v=u["".concat(l,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(v,i(i({ref:t},s),{},{components:n})):r.createElement(v,i({ref:t},s))}));function v(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:o,i[1]=p;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1543:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={title:"Netty\u6e90\u7801\u89e3\u6790-EventLoop\u4ec0\u4e48\u65f6\u5019\u542f\u52a8\u8fd0\u884c",linkTitle:"Netty\u6e90\u7801\u89e3\u6790-EventLoop\u4ec0\u4e48\u65f6\u5019\u542f\u52a8\u8fd0\u884c",date:new Date("2022-03-21T00:00:00.000Z"),weight:202203211547},i=void 0,p={unversionedId:"netty/netty-source-code-analysis/netty-source-eventloop-startrun",id:"netty/netty-source-code-analysis/netty-source-eventloop-startrun",title:"Netty\u6e90\u7801\u89e3\u6790-EventLoop\u4ec0\u4e48\u65f6\u5019\u542f\u52a8\u8fd0\u884c",description:"1.\u5f15\u8a00",source:"@site/docs/netty/netty-source-code-analysis/netty-source-eventloop-startrun.md",sourceDirName:"netty/netty-source-code-analysis",slug:"/netty/netty-source-code-analysis/netty-source-eventloop-startrun",permalink:"/docs/netty/netty-source-code-analysis/netty-source-eventloop-startrun",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/netty/netty-source-code-analysis/netty-source-eventloop-startrun.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1676193845,formattedLastUpdatedAt:"Feb 12, 2023",frontMatter:{title:"Netty\u6e90\u7801\u89e3\u6790-EventLoop\u4ec0\u4e48\u65f6\u5019\u542f\u52a8\u8fd0\u884c",linkTitle:"Netty\u6e90\u7801\u89e3\u6790-EventLoop\u4ec0\u4e48\u65f6\u5019\u542f\u52a8\u8fd0\u884c",date:"2022-03-21T00:00:00.000Z",weight:202203211547},sidebar:"netty",previous:{title:"Netty\u6e90\u7801\u89e3\u6790-\u89e3\u7801\u5668(Decoder)\u662f\u5982\u4f55\u5de5\u4f5c",permalink:"/docs/netty/netty-source-code-analysis/netty-source-decoder"},next:{title:"Netty\u6e90\u7801\u89e3\u6790-\u670d\u52a1\u7aef\u542f\u52a8\u6d41\u7a0b\u8be6\u89e3",permalink:"/docs/netty/netty-source-code-analysis/netty-source-serverbootstrap-flow"}},l={},c=[{value:"1.\u5f15\u8a00",id:"1\u5f15\u8a00",level:3},{value:"2.EventLoop\u542f\u52a8\u6e90\u7801\u5206\u6790",id:"2eventloop\u542f\u52a8\u6e90\u7801\u5206\u6790",level:3},{value:"3. \u603b\u7ed3",id:"3-\u603b\u7ed3",level:3}],s={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"1\u5f15\u8a00"},"1.\u5f15\u8a00"),(0,o.kt)("p",null,"Netty\u4e2dEventLoopGroup\u5176\u5b9e\u5c31\u76f8\u5f53\u4e8e\u7ebf\u7a0b\u6c60\uff0c\u800cEventLoop\u5c31\u76f8\u5f53\u4e8e\u7ebf\u7a0b\u6c60\u4e2d\u7684\u7ebf\u7a0b\u3002\u65e2\u7136\u8bf4\u662f\u7ebf\u7a0b\u4f46\u662f\u6211\u4eec\u5728\u5f00\u53d1\u7684\u8fc7\u7a0b\u4e2d\u6ca1\u6709\u770b\u5230\u7c7b\u4f3c\u4e8e\u7ebf\u7a0b\u7684\u542f\u52a8start\u6216\u8005run\u65b9\u6cd5\u7684\u8c03\u7528\u3002\u90a3\u4e48Netty\u7684EventLoop\u4ec0\u4e48\u65f6\u5019\u542f\u52a8\u8fd0\u884c\u7684\u5462\uff1f\u4e0b\u9762\u6765\u901a\u8fc7\u6e90\u7801\u5206\u6790\u4e00\u4e0b\u8fd9\u4e2a\u95ee\u9898\u3002\u5728\u5206\u6790\u8fd9\u4e2a\u95ee\u9898\u4e4b\u524d\u9700\u8981\u660e\u786e\u4e00\u4e2a\u4e8b\u60c5\uff1aNetty\u7684\u6267\u884c\u5668\u53ef\u4ee5\u4f7f\u7528\u7528\u6237\u81ea\u5b9a\u4e49\u7684\u6216\u8005\u7528Netty\u9ed8\u8ba4\u5b9e\u73b0\u7684\u3002\u4e0b\u9762\u8bb2\u7684\u662f\u4f7f\u7528Netty\u9ed8\u8ba4\u7684\u6267\u884c\u5668 ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"ThreadPerTaskExecutor")),"\u3002"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Tips: \u7528\u6237\u81ea\u5b9a\u4e49\u7684\u53ef\u4ee5\u7528\u6237\u81ea\u5df1\u5b9e\u73b0Executor\u63a5\u53e3\u6216\u8005\u4f7f\u7528JDK\u5b9e\u73b0\u7684\u7ebf\u7a0b\u6c60\u3002\u8fd9\u4e24\u79cd\u60c5\u51b5\u90fd\u53ef\u4ee5\u5f52\u7c7b\u4e3a\u7528\u6237\u81ea\u5b9a\u4e49\u3002")),(0,o.kt)("h3",{id:"2eventloop\u542f\u52a8\u6e90\u7801\u5206\u6790"},"2.EventLoop\u542f\u52a8\u6e90\u7801\u5206\u6790"),(0,o.kt)("p",null,"\u5df2NioEventLoop\u4e3a\u4f8b\uff0cNioEventLoop\u521b\u5efa\u662f\u5728\u521b\u5efaNioEventLoopGroup\u7684\u65f6\u5019\u521b\u5efa\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/netty/image-20220321223154151.png",alt:"image-20220321223154151"})),(0,o.kt)("p",null,"\u4e0a\u56fe\u6807\u6ce8\u7684\u90e8\u5206\u4ee3\u7801\u5c31\u662f\u521b\u5efaNioEventLoop\u3002\u6574\u4e2a\u65b9\u6cd5\u662f\u4e00\u4e2a\u62bd\u8c61\u65b9\u6cd5\uff0c\u770b\u5177\u4f53\u7684\u5b9e\u73b0\uff0c\u6211\u4eec\u8fd9\u91cc\u7684\u5b9e\u73b0\u5c31\u5728NioEventLoopGroup\u4e2d"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/netty/image-20220321223324109.png",alt:"image-20220321223324109"})),(0,o.kt)("p",null,"NioEventLoop,\u5c06\u6267\u884c\u5668\u4f5c\u4e3a\u6784\u9020\u51fd\u6570\u7684\u53c2\u6570\u3002\u8fd9\u91cc\u5c31\u5b8c\u6210NioEventLoop\u521b\u5efa\u3002"),(0,o.kt)("p",null,"ServerBootstrap\u7ed1\u5b9a\u672c\u5730\u7aef\u53e3\u7684\u65f6\u5019\u4f1a\u8fdb\u884cNioServerSocketChannel\u521d\u59cb\u5316\u7684\u5de5\u4f5c\uff0c\u7136\u540e\u5c06NioServerSocketChannel\u5bf9\u8c61\u6ce8\u518c\u5230NioEventLoop\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"//AbstractBootstrap#initAndRegister\nfinal ChannelFuture initAndRegister() {\n    //\u7701\u7565\u90e8\u5206\u4ee3\u7801\n     ChannelFuture regFuture = config().group().register(channel);\n }\n")),(0,o.kt)("p",null,"\u8ddf\u8fdbregister\u65b9\u6cd5\u7684\u4ee3\u7801\uff0c\u53d1\u73b0\u6700\u7ec8\u8c03\u7528\u7684\u662f",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"AbstractChannel#AbstractUnsafe.register"))," \u65b9\u6cd5\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"@Override\npublic final void register(EventLoop eventLoop, final ChannelPromise promise) {\n\n    //\u7701\u7565\u90e8\u5206\u65e0\u5173\u4ee3\u7801\n    AbstractChannel.this.eventLoop = eventLoop;\n\n    if (eventLoop.inEventLoop()) {\n        register0(promise);\n    } else {\n        try {\n            eventLoop.execute(new Runnable() { //(1)\n                @Override\n                public void run() {\n                    register0(promise);\n                }\n            });\n        } catch (Throwable t) {\n        }\n    }\n}\n")),(0,o.kt)("p",null,"\u5728\u9996\u6b21\u6ce8\u518c\u7684\u65f6\u5019\u4e0a\u8ff0\u4ee3\u7801\u80af\u5b9a\u8d70\u5f97\u662felse\u5206\u652f\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u6807\u53f7\uff081\uff09\u4f4d\u7f6e\u7684\u5c31\u662f EventLoop\u542f\u52a8\u7684\u5173\u952e\u4ee3\u7801"),"\u3002\u8ddf\u8fdbEventLoop#execute\u65b9\u6cd5\uff0c\u8c03\u7528\u7684\u662fSingleThreadEventExecutor#execute\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'@Override\npublic void execute(Runnable task) {\n    ObjectUtil.checkNotNull(task, "task");\n    execute(task, !(task instanceof LazyRunnable) && wakesUpForTask(task));\n}\n\nprivate void execute(Runnable task, boolean immediate) {\n    boolean inEventLoop = inEventLoop();\n    addTask(task); //(1)\n    if (!inEventLoop) {\n        startThread(); //(2)\n        if (isShutdown()) {\n            boolean reject = false;\n            try {\n                if (removeTask(task)) {\n                    reject = true;\n                }\n            } catch (UnsupportedOperationException e) {\n            }\n            if (reject) {\n                reject();\n            }\n        }\n    }\n\n    if (!addTaskWakesUp && immediate) {\n        wakeup(inEventLoop);\n    }\n}\n')),(0,o.kt)("p",null,"\u5982\u4e0a\u8ff0\u4ee3\u7801SingleThreadEventExecutor#execute\u65b9\u6cd5\u4e2d\u8c03\u7528\u7684\u662fSingleThreadEventExecutor#execute\u7684\u79c1\u6709\u65b9\u6cd5\u3002"),(0,o.kt)("p",null,"\u6807\u53f7\uff081\uff09\uff1a\u5c06\u63d0\u4ea4\u7684\u4efb\u52a1\u52a0\u5165\u961f\u5217\uff0c\u7136\u540e\u5224\u65ad\u8fd0\u884c\u7ebf\u7a0b\u662f\u5426\u5df2\u7ecf\u5728\u5f53\u524dEventLoop\uff0c\u4e0d\u5728\u5c31\u542f\u52a8\u7ebf\u7a0b\u8c03\u7528",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"startThread();"))," \u3002\u7136\u540e\u8ddf\u8fdb\u4ee3\u7801\u53d1\u73b0\u8c03\u7528\u7684\u662fSingleThreadEventExecutor#doStartThread\u65b9\u6cd5\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/netty/image-20220321223555039.png",alt:"image-20220321223555039"})),(0,o.kt)("p",null,"\u8c03\u7528\u7684\u662f ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"executor.execute")),"\u65b9\u6cd5.\u4e5f\u5c31\u662fExecutor#execute\u65b9\u6cd5\uff0c\u5bf9\u4e8eNetty\u9ed8\u8ba4\u771f\u7684\u6267\u884c\u5668\u6765\u8bf4\u5c31\u662f\u8c03\u7528 ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"ThreadPerTaskExecutor#execute"))," \u65b9\u6cd5\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'public final class ThreadPerTaskExecutor implements Executor {\n    private final ThreadFactory threadFactory;\n\n    public ThreadPerTaskExecutor(ThreadFactory threadFactory) {\n        this.threadFactory = ObjectUtil.checkNotNull(threadFactory, "threadFactory");\n    }\n\n    @Override\n    public void execute(Runnable command) {\n        threadFactory.newThread(command).start();\n    }\n}\n')),(0,o.kt)("p",null,"\u4ece\u4ee3\u7801\u4e2d\u53ef\u4ee5\u770b\u5230\u521b\u5efa\u7ebf\u7a0b\u7136\u540e\u542f\u52a8\uff0c\u8fd0\u884c\u7684\u5185\u5bb9\u5c31\u662f\u4e0a\u56fe\u6807\u53f7\u4e3a1\u7684\u5185\u5bb9\uff0c\u5b9e\u9645\u5c31\u662f",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"SingleThreadEventExecutor.this.run()"))," \u7684\u5185\u5bb9\uff0c\u5177\u4f53\u770b\u5b9e\u73b0\uff0c\u4f8b\u5982NioEventLoop\u7684\u5b9e\u73b0\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/netty/image-20220321223639743.png",alt:"image-20220321223639743"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u91cd\u70b9\uff1aEventLoop\u662f\u5728Channel\u6ce8\u518c\u5230EventLoop\u7684\u65f6\u5019\uff0c\u901a\u8fc7\u6267\u884c\u5668\u63d0\u4ea4\u4efb\u52a1\u542f\u52a8\u7ebf\u7a0b\u7684")),(0,o.kt)("h3",{id:"3-\u603b\u7ed3"},"3. \u603b\u7ed3"),(0,o.kt)("p",null,"EventLoop\u662f\u5728Channel\u6ce8\u518c\u5230EventLoop\u7684\u65f6\u5019\u901a\u8fc7\u6267\u884c\u5668\u542f\u52a8\u3002\u4efb\u52a1\u4f1a\u88ab\u6dfb\u52a0\u5230\u961f\u5217\u4e2d\u3002\u5f85EventLoop\u542f\u52a8\u540e\u4ece\u961f\u5217\u4e2d\u83b7\u53d6\u4efb\u52a1\u8fdb\u884c\u5904\u7406\u3002"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u6211\u662f\u8682\u8681\u80cc\u5927\u8c61\uff0c\u6587\u7ae0\u5bf9\u4f60\u6709\u5e2e\u52a9\u70b9\u8d5e\u5173\u6ce8\u6211\uff0c\u6587\u7ae0\u6709\u4e0d\u6b63\u786e\u7684\u5730\u65b9\u8bf7\u60a8\u65a7\u6b63\u7559\u8a00\u8bc4\u8bba~\u8c22\u8c22")))}m.isMDXComponent=!0}}]);