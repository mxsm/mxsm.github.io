"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[4252],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=u(n),k=o,g=c["".concat(i,".").concat(k)]||c[k]||m[k]||a;return n?r.createElement(g,p(p({ref:t},s),{},{components:n})):r.createElement(g,p({ref:t},s))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,p=new Array(a);p[0]=k;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[c]="string"==typeof e?e:o,p[1]=l;for(var u=2;u<a;u++)p[u]=n[u];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},4519:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const a={title:"Netty\u6e90\u7801\u5206\u6790-EventLoopGroup\u5982\u4f55\u5de5\u4f5c",linkTitle:"Netty\u6e90\u7801\u5206\u6790-EventLoopGroup\u5982\u4f55\u5de5\u4f5c",date:new Date("2022-03-04T00:00:00.000Z"),weight:202203031740},p=void 0,l={unversionedId:"netty/netty-source-code-analysis/netty-eventloopgroup-howto-work",id:"netty/netty-source-code-analysis/netty-eventloopgroup-howto-work",title:"Netty\u6e90\u7801\u5206\u6790-EventLoopGroup\u5982\u4f55\u5de5\u4f5c",description:"Netty\u7248\u672c\uff1anetty-4.1.74.Final",source:"@site/docs/netty/netty-source-code-analysis/netty-eventloopgroup-howto-work.md",sourceDirName:"netty/netty-source-code-analysis",slug:"/netty/netty-source-code-analysis/netty-eventloopgroup-howto-work",permalink:"/docs/netty/netty-source-code-analysis/netty-eventloopgroup-howto-work",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/netty/netty-source-code-analysis/netty-eventloopgroup-howto-work.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1675697367,formattedLastUpdatedAt:"Feb 6, 2023",frontMatter:{title:"Netty\u6e90\u7801\u5206\u6790-EventLoopGroup\u5982\u4f55\u5de5\u4f5c",linkTitle:"Netty\u6e90\u7801\u5206\u6790-EventLoopGroup\u5982\u4f55\u5de5\u4f5c",date:"2022-03-04T00:00:00.000Z",weight:202203031740},sidebar:"netty",previous:{title:"Netty\u7ec4\u4ef6-EventLoop",permalink:"/docs/netty/netty-source-code-analysis/netty-eventloop-base"},next:{title:"Netty\u6e90\u7801\u89e3\u6790-SizeClasses",permalink:"/docs/netty/netty-source-code-analysis/netty-source-analysis-SizeClasses"}},i={},u=[{value:"1. Reactor \u7ebf\u7a0b\u6a21\u578b",id:"1-reactor-\u7ebf\u7a0b\u6a21\u578b",level:3},{value:"2. EventLoopGroup\u521b\u5efa",id:"2-eventloopgroup\u521b\u5efa",level:3},{value:"2.1 Executor\u7684\u8bbe\u7f6e",id:"21-executor\u7684\u8bbe\u7f6e",level:4},{value:"2.2 EventExecutor\u7684\u521b\u5efa",id:"22-eventexecutor\u7684\u521b\u5efa",level:4},{value:"2.3 EventExecutorChooser\u9009\u62e9\u5668\u521b\u5efa",id:"23-eventexecutorchooser\u9009\u62e9\u5668\u521b\u5efa",level:4},{value:"3. BossGroup\u5982\u4f55\u5de5\u4f5c",id:"3-bossgroup\u5982\u4f55\u5de5\u4f5c",level:3},{value:"3.1 BossGroup\u7ebf\u7a0b\u542f\u52a8",id:"31-bossgroup\u7ebf\u7a0b\u542f\u52a8",level:4},{value:"3.2 BossGroup\u8f6e\u8be2\u4e8b\u4ef6",id:"32-bossgroup\u8f6e\u8be2\u4e8b\u4ef6",level:4},{value:"3.3 EventLoop\u4e8b\u4ef6\u5904\u7406",id:"33-eventloop\u4e8b\u4ef6\u5904\u7406",level:4},{value:"4. WorkerGroup\u5982\u4f55\u5de5\u4f5c",id:"4-workergroup\u5982\u4f55\u5de5\u4f5c",level:3},{value:"5. \u603b\u7ed3",id:"5-\u603b\u7ed3",level:3}],s={toc:u},c="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Netty\u7248\u672c\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://github.com/netty/netty/releases/tag/netty-4.1.74.Final"},"netty-4.1.74.Final"))),(0,o.kt)("h3",{id:"1-reactor-\u7ebf\u7a0b\u6a21\u578b"},"1. Reactor \u7ebf\u7a0b\u6a21\u578b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"package io.netty.example.discard;\n    \nimport io.netty.bootstrap.ServerBootstrap;\n\nimport io.netty.channel.ChannelFuture;\nimport io.netty.channel.ChannelInitializer;\nimport io.netty.channel.ChannelOption;\nimport io.netty.channel.EventLoopGroup;\nimport io.netty.channel.nio.NioEventLoopGroup;\nimport io.netty.channel.socket.SocketChannel;\nimport io.netty.channel.socket.nio.NioServerSocketChannel;\n    \n/**\n * Discards any incoming data.\n */\npublic class DiscardServer {\n    \n    private int port;\n    \n    public DiscardServer(int port) {\n        this.port = port;\n    }\n    \n    public void run() throws Exception {\n        EventLoopGroup bossGroup = new NioEventLoopGroup(1); // (1)\n        EventLoopGroup workerGroup = new NioEventLoopGroup();\n        try {\n            ServerBootstrap b = new ServerBootstrap(); // (2)\n            b.group(bossGroup, workerGroup)\n             .channel(NioServerSocketChannel.class) // (3)\n             .childHandler(new ChannelInitializer<SocketChannel>() { // (4)\n                 @Override\n                 public void initChannel(SocketChannel ch) throws Exception {\n                     ch.pipeline().addLast(new DiscardServerHandler());\n                 }\n             })\n             .option(ChannelOption.SO_BACKLOG, 128)          // (5)\n             .childOption(ChannelOption.SO_KEEPALIVE, true); // (6)\n    \n            // Bind and start to accept incoming connections.\n            ChannelFuture f = b.bind(port).sync(); // (7)\n    \n            // Wait until the server socket is closed.\n            // In this example, this does not happen, but you can do that to gracefully\n            // shut down your server.\n            f.channel().closeFuture().sync();\n        } finally {\n            workerGroup.shutdownGracefully();\n            bossGroup.shutdownGracefully();\n        }\n    }\n    \n    public static void main(String[] args) throws Exception {\n        int port = 8080;\n        if (args.length > 0) {\n            port = Integer.parseInt(args[0]);\n        }\n\n        new DiscardServer(port).run();\n    }\n}\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Tips: \u4e0a\u9762\u4ee3\u7801\u6765\u6e90\u4e8e\u5b98\u7f51\uff0c(1)\u4f4d\u7f6e\u4ee3\u7801\u6784\u9020\u51fd\u6570\u4fee\u6539\u4e86\uff0c\u589e\u52a01\u53c2\u6570")),(0,o.kt)("p",null,"\u4ece\u4e0a\u9762\u4ee3\u7801\u53ef\u4ee5\u770b\u51fa\u6765Netty\u63a8\u8350\u4e3b\u4eceReactor\u7684\u7ebf\u7a0b\u6a21\u578b\u3002Reactor\u7ebf\u7a0b\u6a21\u578b\u8fd0\u884c\u673a\u5236\u4e3b\u8981\u6709\u4ee5\u4e0b\u56db\u6b65\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u8fde\u63a5\u6ce8\u518c")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u4e8b\u4ef6\u8f6e\u8be2")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u4e8b\u4ef6\u5206\u53d1"),(0,o.kt)("p",{parentName:"li"},"I/O\u4e8b\u4ef6\uff0cAccept\u3001Read\u3001Write")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u4e8b\u4ef6\u5904\u7406"))),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/netty/eventloop/Reactor%E6%A8%A1%E5%9E%8B.png",alt:"Reactor\u6a21\u578b"})),(0,o.kt)("p",null,"\u4e0b\u9762\u6211\u4eec\u5c31\u4ece\u4e00\u4e0b\u51e0\u4e2a\u65b9\u9762\u6765\u8bf4\u660e",(0,o.kt)("inlineCode",{parentName:"p"},"EventLoopGroup")," \u5982\u4f55\u5de5\u4f5c\u7684"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/netty/eventloop/EventLoopGroup%E5%88%86%E6%9E%90%E6%80%9D%E7%BB%B4%E5%AF%BC%E5%9B%BE.png",alt:"EventLoopGroup\u5206\u6790\u601d\u7ef4\u5bfc\u56fe"})),(0,o.kt)("h3",{id:"2-eventloopgroup\u521b\u5efa"},"2. EventLoopGroup\u521b\u5efa"),(0,o.kt)("p",null,"\u4ee5 ",(0,o.kt)("strong",{parentName:"p"},"NioEventLoopGroup")," \u4e3a\u4f8b\u5b50\u901a\u8fc7\u8ddf\u8fdb\u6e90\u7801\u53ef\u4ee5\u77e5\u9053\u521b\u5efa\u4e00\u4e2a",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"EventLoopGroup"))," \u4e3b\u8981\u7684\u903b\u8f91\u90fd\u5728\u8fd9\u4e2a ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"MultithreadEventExecutorGroup"))," \u7684\u6784\u9020\u51fd\u6570\u91cc\u9762\u3002\u4e0b\u9762\u6765\u5bf9\u6784\u9020\u51fd\u6570\u4ee3\u7801\u6bb5\u8fdb\u884c\u5206\u6790\u3002"),(0,o.kt)("h4",{id:"21-executor\u7684\u8bbe\u7f6e"},"2.1 Executor\u7684\u8bbe\u7f6e"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/netty/eventloop/image-20220305202457603.png",alt:"image-20220305202457603"})),(0,o.kt)("p",null,"\u6ca1\u6709\u4f20\u5165Exector\u7684\u60c5\u51b5\u4e0b\uff0c\u521b\u5efaNetty\u5b9e\u73b0\u7684ThreadPerTaskExecutor\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528Jdk\u7684Executor\u5b9e\u73b0"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Tips: new NioEventLoopGroup(2,Executors.newFixedThreadPool(10))")),(0,o.kt)("p",null,"\u770b\u4e00\u4e0b ",(0,o.kt)("inlineCode",{parentName:"p"},"ThreadPerTaskExecutor")," \u5b9e\u73b0\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/netty/eventloop/image-20220305202632525.png",alt:"image-20220305202632525"})),(0,o.kt)("p",null,"\u76f4\u63a5\u5b9e\u73b0\u4e86Executor\u63a5\u53e3\uff0c\u6574\u4e2a\u5b9e\u73b0\u6bd4\u8f83\u7b80\u5355\u3002"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Tips: \u60f3\u4e00\u4e0b\u5982\u679c\u4f7f\u7528Jdk\u7684Executor\u5b9e\u73b0\uff0cNioEventLoopGroup\u7ebf\u7a0b\u6570\u91cf\u5927\u4e8eJdk\u7684Executor\u5b9e\u73b0\u7ebf\u7a0b\u6c60\u6570\u91cf\u4f1a\u600e\u4e48\u6837\uff1f"),(0,o.kt)("pre",{parentName:"blockquote"},(0,o.kt)("code",{parentName:"pre",className:"language-java"},"new NioEventLoopGroup(3,Executors.newFixedThreadPool(2))\n")),(0,o.kt)("p",{parentName:"blockquote"},"\u540e\u7eed\u7684\u6587\u7ae0\u4f1a\u4e13\u95e8\u8bb2\u89e3\u6574\u4e2a\u95ee\u9898")),(0,o.kt)("h4",{id:"22-eventexecutor\u7684\u521b\u5efa"},"2.2 EventExecutor\u7684\u521b\u5efa"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/netty/eventloop/image-20220305221245700.png",alt:"image-20220305221245700"})),(0,o.kt)("p",null,"\u521b\u5efaEventExecutor, \u4e0a\u56fe\u8c03\u7528\u7684\u662f\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"MultithreadEventExecutorGroup#newChild")," \u7684\u62bd\u8c61\u65b9\u6cd5\u3002\u770b\u5177\u4f53\u7684\u5b9e\u73b0\u7c7b\u5b9e\u73b0\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/netty/eventloop/image-20220305221332386.png",alt:"image-20220305221332386"})),(0,o.kt)("p",null,"\u6211\u4eec\u5c31\u4ee5",(0,o.kt)("inlineCode",{parentName:"p"},"NioEventLoopGroup")," \u4e3a\u4f8b\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/netty/eventloop/image-20220305221502196.png",alt:"image-20220305221502196"})),(0,o.kt)("p",null,"\u8fd9\u91cc\u521b\u5efa\u4e86\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"NioEventLoop")," \u3002"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Tips: \u8fd9\u4e2a\u548c\u4e4b\u524d\u8bf4\u7684EventLoopGroup\u805a\u5408\u4e86EventLoop")),(0,o.kt)("p",null,"\u4ece\u4e0a\u9762\u521b\u5efaEventExecutor\u53ef\u4ee5\u770b\u51fa\u6765\uff0c\u6700\u7ec8\u521b\u5efa\u7684\u662f",(0,o.kt)("inlineCode",{parentName:"p"},"NioEventLoop")," \u3002\u4ece\u7ee7\u627f\u5173\u7cfb\u53ef\u4ee5\u77e5\u9053 ",(0,o.kt)("inlineCode",{parentName:"p"},"NioEventLoop")," \u5b9e\u73b0\u4e86 EventExecutor\u3002"),(0,o.kt)("h4",{id:"23-eventexecutorchooser\u9009\u62e9\u5668\u521b\u5efa"},"2.3 EventExecutorChooser\u9009\u62e9\u5668\u521b\u5efa"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/netty/eventloop/image-20220305232208068.png",alt:"image-20220305232208068"})),(0,o.kt)("p",null,"\u9009\u62e9\u5668\u521b\u5efa\u6839\u636e ",(0,o.kt)("inlineCode",{parentName:"p"},"EventExecutor")," \u7684\u6570\u91cf\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/netty/eventloop/image-20220305232443484.png",alt:"image-20220305232443484"})),(0,o.kt)("p",null,"2\u7684\u6307\u6570\u9009\u62e9",(0,o.kt)("inlineCode",{parentName:"p"},"PowerOfTwoEventExecutorChooser")," \u3002 \u5176\u4ed6\u7684\u9009\u62e9 ",(0,o.kt)("inlineCode",{parentName:"p"},"GenericEventExecutorChooser")," \u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/netty/eventloop/image-20220305232623870.png",alt:"image-20220305232623870"})),(0,o.kt)("p",null,"\u4e24\u8005\u7684\u533a\u522b\u5c31\u5728\u4e8e2\u7684\u6307\u6570\u4f7f\u7528\u7684 ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"&"))," \u6b63\u5e38\u7684\u4f7f\u7528\u7684\u662f ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"%"))," "),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Tips: &\u6548\u7387\u9ad8\u4e8e%")),(0,o.kt)("p",null,"\u521b\u5efa\u5b8c\u6210EventExecutor\u540e\uff0c\u540c\u65f6\u5bf9EventExecutor\u6570\u7ec4\u8fdb\u884c\u5904\u7406\u6210\u4e0d\u80fd\u4fee\u6539\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"Set<EventExecutor>")),(0,o.kt)("h3",{id:"3-bossgroup\u5982\u4f55\u5de5\u4f5c"},"3. BossGroup\u5982\u4f55\u5de5\u4f5c"),(0,o.kt)("p",null,"\u4e3b\u4ece\u7684\u7ebf\u7a0b\u6a21\u5f0f\u4e0b\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"BossGroup")," \u4e3b\u8981\u8d1f\u8d23\u4e8b\u4ef6\u8f6e\u8be2\uff0c\u4e0b\u9762\u6765\u5206\u6790\u4e00\u4e0b\u5982\u4f55\u8fdb\u884c\u5de5\u4f5c\u7684"),(0,o.kt)("h4",{id:"31-bossgroup\u7ebf\u7a0b\u542f\u52a8"},"3.1 BossGroup\u7ebf\u7a0b\u542f\u52a8"),(0,o.kt)("p",null,"\u901a\u8fc7\u670d\u52a1\u7aef\u7684\u4f8b\u5b50\uff0c\u901a\u8fc7\u7814\u7a76\u6e90\u7801\u53ef\u4ee5\u77e5\u9053 ",(0,o.kt)("strong",{parentName:"p"},"AbstractBootstrap#initAndRegister")," \u65b9\u6cd5\u4e3b\u8981\u662f\u521b\u5efa ",(0,o.kt)("strong",{parentName:"p"},"Channel")," "),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/netty/eventloop/image-20220305235718388.png",alt:"image-20220305235718388"})),(0,o.kt)("p",null,"\u4e0a\u8ff0\u4ee3\u7801\u7684\u6807\u53f73\uff0cBossGroup\u6ce8\u518cChannel\u4e5f\u662f\u542f\u52a8\u7ebf\u7a0b\u7684\u5173\u952e\uff0c\u8ddf\u8fdb\u4ee3\u7801\u5f80\u4e0b\u770b\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"ChannelFuture regFuture = config().group().register(channel);")," \u4ee3\u7801\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"register")," \u65b9\u6cd5\u8c03\u7528\u7684\u662f ",(0,o.kt)("inlineCode",{parentName:"p"},"MultithreadEventLoopGroup#register")," \u7684\u65b9\u6cd5\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"//MultithreadEventLoopGroup#register\u65b9\u6cd5  \n@Override\npublic ChannelFuture register(Channel channel) {\n  return next().register(channel);\n}\n")),(0,o.kt)("p",null,"\u4f46\u662f\u6700\u7ec8\u8c03\u7528\u7684\u662f ",(0,o.kt)("inlineCode",{parentName:"p"},"SingleThreadEventLoop#register")," \uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'@Override\npublic ChannelFuture register(Channel channel) {\n    return register(new DefaultChannelPromise(channel, this));\n}\n\n@Override\npublic ChannelFuture register(final ChannelPromise promise) {\n    ObjectUtil.checkNotNull(promise, "promise");\n    promise.channel().unsafe().register(this, promise);\n    return promise;\n}\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Tips: MultithreadEventLoopGroup\u5bf9\u5e94EventLoopGroup\uff0cSingleThreadEventLoop\u5bf9\u5e94EventLoop")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"promise.channel().unsafe().register(this, promise)")," \u8fd9\u91cc\u7684this\u8868\u793a\u7684\u662f NioEventLoop\u7684\u5b9e\u4f8b\uff0c\u4e5f\u5c31\u662f\u628aNioEventLoop\u4f5c\u4e3a\u53c2\u6570\u4f20\u5165\u4e86\u3002\u8c03\u7528\u7684\u662f",(0,o.kt)("inlineCode",{parentName:"p"},"AbstractChannel.AbstractUnsafe#register")," :"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/netty/eventloop/image-20220306004126148.png",alt:"image-20220306004126148"})),(0,o.kt)("p",null,"\u4e0a\u56fe\u4ee3\u7801\u6bb5\u6846\u51fa\u6765\u7684\u5c31\u662f EventLoop\u542f\u52a8\uff0c\u8ddf\u8fdb\u4ee3\u7801\u770b\u4e00\u4e0b\u5177\u4f53\u7684\u5b9e\u73b0\uff0cexecute\u65b9\u6cd5\u5177\u4f53\u6267\u884c\u7684\u662f ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"SingleThreadEventExecutor#execute"))," "),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/netty/eventloop/image-20220306004449915.png",alt:"image-20220306004449915"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Tips: \u901a\u8fc7\u67e5\u770bSingleThreadEventExecutor\u6e90\u7801\u4f60\u4f1a\u53d1\u73b0\uff0c\u6709\u4e00\u4e2aThread\u7684\u5c5e\u6027\u3002\u6240\u4ee5\u8fd9\u91ccSingleThreadEventExecutor\u5c31\u76f8\u5f53\u4e8e\u7ebf\u7a0b\u3002\u53ea\u662f\u5bf9\u7ebf\u7a0b\u8fdb\u884c\u5305\u88c5\u8bed\u4e49\u5316")),(0,o.kt)("p",null,"\u5728\u7ebf\u7a0b\u6ca1\u6709\u5728EventLoop\u4e2d\uff0c\u5c31\u542f\u52a8\u5f53\u524d\u7ebf\u7a0b\u901a\u8fc7\u8c03\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"SingleThreadEventExecutor#startThread")," \u65b9\u6cd5\u3002 \u5728\u8fd9\u4e2a\u65b9\u6cd5\u91cc\u9762\u53c8\u8c03\u7528\u4e86",(0,o.kt)("inlineCode",{parentName:"p"},"SingleThreadEventExecutor#doStartThread")," \u65b9\u6cd5\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/netty/eventloop/image-20220306005257301.png",alt:"image-20220306005257301"})),(0,o.kt)("p",null,"1\u901a\u8fc7\u4e86Executor\u6765\u6267\u884c\u4e0b\u9762\u7684Runable\u4ee3\u7801\uff0c\u524d\u9762\u7684 ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"EventLoopGroup"))," \u521b\u5efa\u53ef\u4ee5\u77e5\u9053\uff0c\u5728\u9ed8\u8ba4\u7684\u60c5\u51b5\u4e0b\u4f7f\u7528\u7684\u662f ",(0,o.kt)("inlineCode",{parentName:"p"},"ThreadPerTaskExecutor")," \uff0c\u800c\u8fd9\u4e2a",(0,o.kt)("inlineCode",{parentName:"p"},"ThreadPerTaskExecutor#execute")," \u65b9\u6cd5\u7684\u5b9e\u73b0\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'public final class ThreadPerTaskExecutor implements Executor {\n    private final ThreadFactory threadFactory;\n\n    public ThreadPerTaskExecutor(ThreadFactory threadFactory) {\n        this.threadFactory = ObjectUtil.checkNotNull(threadFactory, "threadFactory");\n    }\n\n    @Override\n    public void execute(Runnable command) {\n        threadFactory.newThread(command).start();\n    }\n}\n')),(0,o.kt)("p",null,"\u76f4\u63a5\u521b\u5efa\u7ebf\u7a0b\u7136\u540e\u542f\u52a8\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u91cd\u70b9\uff1a\u770b\u5230\u8fd9\u91cc\u4f60\u5c31\u4f1a\u53d1\u73b0EventLoopGroup\u4e2d\u7684EventLoop\u5df2\u7ecf\u542f\u52a8\u4e86\u3002\u7136\u540e\u5728Runable\u4e2d ",(0,o.kt)("inlineCode",{parentName:"strong"},"thread = Thread.currentThread();"),"\u8fd9\u6bb5\u4ee3\u7801\u5c06\u5f53\u524d\u7684\u7ebf\u7a0b\u8bbe\u7f6e\u7ed9\u4e86SingleThreadEventExecutor\u53d8\u91cf")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Tips:"),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"Executor\u5982\u679c\u662fJDK\u7684\u5b9e\u73b0\uff0cExecutor\u6267\u884cRunable\u5176\u5b9e\u5c31\u662f\u7ebf\u7a0b\u6c60\u6267\u884c"),(0,o.kt)("li",{parentName:"ul"},"\u4e8b\u4ef6\u8f6e\u8be2\u65b9\u6cd5\u662f\u4e00\u4e2a\u6b7b\u5faa\u73af\u6765\u5b9e\u73b0\u3002\u4ee5\u8fbe\u5230\u4e0d\u505c\u7684\u8f6e\u8be2\u7684\u76ee\u7684"))),(0,o.kt)("h4",{id:"32-bossgroup\u8f6e\u8be2\u4e8b\u4ef6"},"3.2 BossGroup\u8f6e\u8be2\u4e8b\u4ef6"),(0,o.kt)("p",null,"\u901a\u8fc7\u4e0a\u9762\u7684\u5206\u6790\u53ef\u4ee5\u77e5\u9053Executor\u6267\u884c\u7684Runable\u4e2d\u7684 ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"SingleThreadEventExecutor.this.run()"))," \u8fd9\u6bb5\u4ee3\u7801\u5c31\u662f\u5bf9\u4e8b\u4ef6\u8fdb\u884c\u8f6e\u8be2\u3002\u4ee5",(0,o.kt)("inlineCode",{parentName:"p"},"NioEventLoopGroup")," \u4e3a\u4f8b\uff0c\u90a3\u4e48\u8fd9\u65b9\u6cd5\u7684\u5b9e\u73b0\u5e94\u8be5\u5c31\u662f\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"NioEventLoop")," \u4e0b\u9762\u6765\u5206\u6790\u8fd9\u4e2a\u65b9\u6cd5\u3002"),(0,o.kt)("p",null,"\u8bf4\u5230\u8f6e\u8be2\u6211\u4eec\u5e94\u8be5\u60f3\u5230\u5c31\u6709\u5faa\u73af\u7684\u8fc7\u7a0b\uff0c\u4e0b\u9762\u770b\u4e00\u4e0b ",(0,o.kt)("inlineCode",{parentName:"p"},"NioEventLoop#run")," \u65b9\u6cd5\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/netty/eventloop/image-20220306133512844.png",alt:"image-20220306133512844"})),(0,o.kt)("p",null,"\u4ece\u4ee3\u7801\u53ef\u4ee5\u770b\u51fa\u6765\uff0c\u4f7f\u7528\u7684\u662f\u4e00\u4e2a\u65e0\u6761\u4ef6\u7684for\u6b7b\u5faa\u73af\u6765\u5b9e\u73b0\u3002\u8fdb\u5165for\u5faa\u73af\u540e\uff0c\u901a\u8fc7\u7b56\u7565\u6765\u8ba1\u7b97\u51fa\u7b56\u7565\u503c\uff0c\u6839\u636e\u4e0d\u540c\u7684\u7b56\u7565\u503c\u6765\u505a\u76f8\u5bf9\u5e94\u7684\u5904\u7406\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/netty/eventloop/image-20220306133923602.png",alt:"image-20220306133923602"})),(0,o.kt)("p",null,"1 \u8ba1\u7b97\u51fa\u7b56\u7565\uff0c\u7b2c\u4e00\u6b21\u8fdb\u5165\u7684\u65f6\u5019strategy=0,\u4e3a\u4ec0\u4e48\u4f1a\u662f0\uff0c\u4e0b\u9762\u770b\u4e00\u4e0b",(0,o.kt)("inlineCode",{parentName:"p"},"SelectStrategy")," \u7684\u5b9e\u73b0\u7c7b ",(0,o.kt)("inlineCode",{parentName:"p"},"DefaultSelectStrategy")," \u4e5f\u53ea\u6709\u8fd9\u4e00\u4e2a\u5b9e\u73b0"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"final class DefaultSelectStrategy implements SelectStrategy {\n    static final SelectStrategy INSTANCE = new DefaultSelectStrategy();\n\n    private DefaultSelectStrategy() { }\n\n    @Override\n    public int calculateStrategy(IntSupplier selectSupplier, boolean hasTasks) throws Exception {\n        return hasTasks ? selectSupplier.get() : SelectStrategy.SELECT;\n    }\n}\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"selectSupplier.get()")," \u8fd9\u4e2a\u5bf9\u4e8e ",(0,o.kt)("inlineCode",{parentName:"p"},"NioEventLoop")," \u6765\u8bf4\u8c03\u7528\u7684\u662f\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"//NioEventLoop\nprivate final IntSupplier selectNowSupplier = new IntSupplier() {\n    @Override\n    public int get() throws Exception {\n        return selectNow();\n    }\n};\n\nint selectNow() throws IOException {\n    return selector.selectNow();\n}\n")),(0,o.kt)("p",null,"\u5728Channel\u521d\u59cb\u5316\u7684\u65f6\u5019Selector\u6ce8\u518c\u7684\u611f\u5174\u8da3\u7684\u503c\u4e3a0\u3002\u6240\u4ee5selector.selectNow() \u8fd4\u56de\u7684\u4e5f\u662f0\u3002"),(0,o.kt)("p",null,"\u5728\u961f\u5217\u4e2d\u6ca1\u6709\u4efb\u52a1\u7684\u65f6\u5019\u5c31\u8fd4\u56de ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"SelectStrategy.SELECT"))," \u7136\u540e\u6267\u884c\u7684\u5c31\u662f\u4e0a\u56fe\u4ee3\u7801\u6807\u53f72\u7684\u903b\u8f91\u4ee3\u7801\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"private int select(long deadlineNanos) throws IOException {\n    if (deadlineNanos == NONE) {\n        return selector.select();   //(1)\n    }\n    // Timeout will only be 0 if deadline is within 5 microsecs\n    long timeoutMillis = deadlineToDelayNanos(deadlineNanos + 995000L) / 1000000L;\n    return timeoutMillis <= 0 ? selector.selectNow() : selector.select(timeoutMillis);\n}\n")),(0,o.kt)("p",null,"\u5728\u5b9a\u65f6\u961f\u5217\u4efb\u52a1\u4e2d\u6ca1\u6709\u4efb\u4f55\u4efb\u52a1\uff0c\u90a3\u5c31\u76f4\u63a5\u8c03\u7528 \uff081\uff09",(0,o.kt)("inlineCode",{parentName:"p"},"selector.select()")," \u5982\u679c\u6ca1\u6709\u4e8b\u4ef6\u89e6\u53d1\uff0c\u5c31\u4e00\u76f4\u963b\u585e\u3002 \u5982\u679c\u5b58\u5728\u5176\u4ed6\u7684\u60c5\u51b5\u5c31\u8c03\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"selector.selectNow()")," \u6216\u8005 ",(0,o.kt)("inlineCode",{parentName:"p"},"selector.select(timeoutMillis)")," \uff0c\u524d\u4e00\u4e2a\u76f4\u63a5\u8fd4\u56de\uff0c\u7b2c\u4e8c\u4e2a\u7b49\u5f85\u4e00\u5b9a\u65f6\u95f4\u6ca1\u6709\u4e8b\u4ef6\u89e6\u53d1\u5c31\u8fd4\u56de\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u5230\u4e86\u8fd9\u91cc\u8f6e\u8be2\u7684\u8fc7\u7a0b\u5c31\u5df2\u7ecf\u57fa\u672c\u4e0a\u5b8c\u6210\uff0c\u83b7\u53d6\u5230\u4e86\u7b56\u7565\u503cstrategy\uff0c\u5269\u4e0b\u7684\u5c31\u662f\u5bf9\u7b56\u7565\u503c\u8fdb\u884c\u5904\u7406\uff0c\u4e5f\u5c31\u662f\u4e8b\u4ef6\u7684\u5206\u53d1")),(0,o.kt)("h4",{id:"33-eventloop\u4e8b\u4ef6\u5904\u7406"},"3.3 EventLoop\u4e8b\u4ef6\u5904\u7406"),(0,o.kt)("p",null,"\u4e0b\u56fe\u8fd9\u6bb5\u4ee3\u7801\u5c31\u662f ",(0,o.kt)("inlineCode",{parentName:"p"},"NioEventLoop#run")," \u65b9\u6cd5\u4e2d\u5904\u7406I/O\u4e8b\u4ef6\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/netty/eventloop/image-20220306160847456.png",alt:"image-20220306160847456"})),(0,o.kt)("p",null,"\u5982\u4e0a\u56fe\u4ee3\u7801\u6bb5\u6807\u53f71\u548c\u6807\u53f72\u4e24\u8005\u5927\u4f53\u90fd\u662f\u5904\u7406I/O\u4e8b\u4ef6\u4ee5\u53ca\u6267\u884c\u4efb\u52a1\u961f\u5217\u4e2d\u7684\u4efb\u52a1\u3002\u8ddf\u8fdbprocessSelectedKeys\u65b9\u6cd5\u770b\u4e00\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"private void processSelectedKeys() {\n    if (selectedKeys != null) {\n        processSelectedKeysOptimized();\n    } else {\n        processSelectedKeysPlain(selector.selectedKeys());\n    }\n}\n")),(0,o.kt)("p",null,"\u5f53\u4e2d\u6709\u4e24\u4e2a\u65b9\u6cd5\uff0c\u4f46\u662f\u6700\u7ec8\u8c03\u7528\u7684\u662fNioEventLoop#processSelectedKey\u65b9\u6cd5(\u5176\u4e2d\u7684\u4e00\u4e2a\u5206\u652f)\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/netty/eventloop/image-20220306161558506.png",alt:"image-20220306161558506"})),(0,o.kt)("p",null,"\u5728\u8fd9\u4e2a\u65b9\u6cd5\u4e2d\u5c31\u6709I/O\u4e8b\u4ef6\u7684\u5904\u7406\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u8fde\u63a5\u5904\u7406"),(0,o.kt)("li",{parentName:"ul"},"\u5199\u5904\u7406"),(0,o.kt)("li",{parentName:"ul"},"\u8bfb\u5904\u7406")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u5230\u8fd9\u91cc\u5c31\u770b\u5230\u4e86EventLoop\u7684\u662f\u5982\u4f55\u5904\u7406I/O\u4e8b\u4ef6")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Tips: \u91cc\u9762\u7684\u5177\u4f53\u5904\u7406\u7ec6\u8282\u4e0d\u53bb\u6df1\u7a76")),(0,o.kt)("p",null,"\u5728\u524d\u9762\u56fe\u7684\u6807\u53f73\u7684\u4f5c\u7528\u662f\u7528\u6765\u505a\u4ec0\u4e48\u7684\u5462\uff1f\u4ee3\u7801\u540e\u9762\u7684\u6ce8\u91ca\uff1a\u4e0d\u5e0c\u671b\u5524\u9192\uff0c\u8fd9\u91cc\u5c31\u662fJDK\u7684NIO\u7684\u7a7a\u8f6e\u8be2\u7684Bug"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Tips: \u7a7a\u8f6e\u8be2\u7684bug\u53ef\u4ee5\u53c2\u770b\u5982\u4e0b\u94fe\u63a5"),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://bugs.java.com/bugdatabase/view_bug.do?bug_id=6670302"},"https://bugs.java.com/bugdatabase/view_bug.do?bug_id=6670302")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://bugs.java.com/bugdatabase/view_bug.do?bug_id=6403933"},"https://bugs.java.com/bugdatabase/view_bug.do?bug_id=6403933")))),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/netty/eventloop/image-20220306162600078.png",alt:"image-20220306162600078"})),(0,o.kt)("p",null,"Netty\u901a\u8fc7\u8ba1\u6570\u5668\u6765\u5224\u65ad\u662f\u5426\u53d1\u751f\u4e86\u7a7a\u8f6e\u8be2\uff0c\u5982\u679c\u53d1\u751f\u4e86\u90a3\u4e48\u5c31\u91cd\u65b0\u6784\u5efaSelector\u3002"),(0,o.kt)("h3",{id:"4-workergroup\u5982\u4f55\u5de5\u4f5c"},"4. WorkerGroup\u5982\u4f55\u5de5\u4f5c"),(0,o.kt)("p",null,"\u5728\u521b\u5efaChannel\u7684\u65f6\u5019\uff0c\u521d\u59cb\u5316\u8c03\u7528\u7684\u662f",(0,o.kt)("inlineCode",{parentName:"p"},"ServerBootstrap#init")," \u65b9\u6cd5\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/netty/eventloop/image-20220306201837801.png",alt:"image-20220306201837801"})),(0,o.kt)("p",null,"\u7136\u540e\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"ChannelPipeline")," \u672b\u5c3e\u589e\u52a0\u4e86\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"ServerBootstrapAcceptor")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/netty/eventloop/image-20220306202031182.png",alt:"image-20220306202031182"})),(0,o.kt)("p",null,"\u4ece\u4ee3\u7801\u4e2d\u770b\u5230\u6709\u8fd9\u6837\u7684\u4e00\u6bb5\u4ee3\u7801\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"childGroup.register(child).addListener(new ChannelFutureListener() {\n                    @Override\n                    public void operationComplete(ChannelFuture future) throws Exception {\n                        if (!future.isSuccess()) {\n                            forceClose(child, future.cause());\n                        }\n                    }\n                });\n")),(0,o.kt)("p",null,"childGroup\u5c31\u662f\u524d\u9762\u4f8b\u5b50\u4e2d\u7684workerGroup\u53d8\u91cf\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"childGroup.register")," \u548c BossGroup\u7684\u4e00\u6837\uff0c\u53ea\u4e0d\u8fc7\u8fd9\u4e2a\u662f\u591a\u4e2a\u7ebf\u7a0b\u7684\u3002\u540e\u7eed\u7684\u5904\u7406\u548c\u524d\u9762\u5206\u6790\u7684\u4e00\u6837\u3002"),(0,o.kt)("h3",{id:"5-\u603b\u7ed3"},"5. \u603b\u7ed3"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"EventLoopGroup\u7ec4\u4ef6\u662f\u4e00\u4e2a\u5f88\u91cd\u8981\u7684\u7ec4\u4ef6\uff0c\u4ee3\u7801\u4e5f\u5f88\u590d\u6742\u3002\u4f46\u662f\u53ea\u8981\u6293\u4f4f\u4e00\u70b9EventLoopGroup\u5c31\u76f8\u5f53\u4e8eNetty\u7684Jdk\u6267\u884c\u5668Executor\u7684\u4e00\u4e2a\u5b9e\u73b0\u5c31\u53ef\u4ee5\u4e86\u3002\u76f8\u5f53\u4e8e\u7ebf\u7a0b\u6c60\u3002"),(0,o.kt)("li",{parentName:"ul"},"Netty\u901a\u8fc7\u5de7\u5999\u7684\u8bbe\u8ba1\u907f\u514d\u4e86Jdk\u7684\u7a7a\u8f6e\u8be2\u95ee\u9898\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u5f00\u53d1\u8fc7\u7a0b\u4e2d\u4e3b\u4ece\u7ebf\u7a0b\u6a21\u578b\u7528\u7684\u6bd4\u8f83\u591a\u3002")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u6211\u662f\u8682\u8681\u80cc\u5927\u8c61\uff0c\u6587\u7ae0\u5bf9\u4f60\u6709\u5e2e\u52a9\u70b9\u8d5e\u5173\u6ce8\u6211\uff0c\u6587\u7ae0\u6709\u4e0d\u6b63\u786e\u7684\u5730\u65b9\u8bf7\u60a8\u65a7\u6b63\u7559\u8a00\u8bc4\u8bba~\u8c22\u8c22")))}m.isMDXComponent=!0}}]);