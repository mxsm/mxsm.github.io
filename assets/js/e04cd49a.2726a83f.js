"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[3353],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>y});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),u=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(i.Provider,{value:n},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=u(t),m=o,y=s["".concat(i,".").concat(m)]||s[m]||d[m]||a;return t?r.createElement(y,l(l({ref:n},c),{},{components:t})):r.createElement(y,l({ref:n},c))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=m;var p={};for(var i in n)hasOwnProperty.call(n,i)&&(p[i]=n[i]);p.originalType=e,p[s]="string"==typeof e?e:o,l[1]=p;for(var u=2;u<a;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9371:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>s,frontMatter:()=>a,metadata:()=>p,toc:()=>u});var r=t(7462),o=(t(7294),t(3905));const a={title:"Netty\u7b54\u7591\u89e3\u60d1-EventLoopGroup\u6267\u884c\u5668\u7ebf\u7a0b\u6570\u5c0f\u4e8enThreads\u4f1a\u600e\u4e48\u6837?",linkTitle:"Netty\u7b54\u7591\u89e3\u60d1-EventLoopGroup\u6267\u884c\u5668\u7ebf\u7a0b\u6570\u5c0f\u4e8enThreads\u4f1a\u600e\u4e48\u6837?",date:new Date("2022-03-14T00:00:00.000Z"),weight:202203142136},l=void 0,p={unversionedId:"netty/netty-faq/netty-FAQ-eventloopgroup-executor",id:"netty/netty-faq/netty-FAQ-eventloopgroup-executor",title:"Netty\u7b54\u7591\u89e3\u60d1-EventLoopGroup\u6267\u884c\u5668\u7ebf\u7a0b\u6570\u5c0f\u4e8enThreads\u4f1a\u600e\u4e48\u6837?",description:"1. \u5f15\u8a00",source:"@site/docs/netty/netty-faq/netty-FAQ-eventloopgroup-executor.md",sourceDirName:"netty/netty-faq",slug:"/netty/netty-faq/netty-FAQ-eventloopgroup-executor",permalink:"/docs/netty/netty-faq/netty-FAQ-eventloopgroup-executor",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/netty/netty-faq/netty-FAQ-eventloopgroup-executor.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1674227439,formattedLastUpdatedAt:"Jan 20, 2023",frontMatter:{title:"Netty\u7b54\u7591\u89e3\u60d1-EventLoopGroup\u6267\u884c\u5668\u7ebf\u7a0b\u6570\u5c0f\u4e8enThreads\u4f1a\u600e\u4e48\u6837?",linkTitle:"Netty\u7b54\u7591\u89e3\u60d1-EventLoopGroup\u6267\u884c\u5668\u7ebf\u7a0b\u6570\u5c0f\u4e8enThreads\u4f1a\u600e\u4e48\u6837?",date:"2022-03-14T00:00:00.000Z",weight:202203142136},sidebar:"netty",previous:{title:"Netty\u7b54\u7591\u89e3\u60d1-Netty\u7ec4\u4ef6\u4e4b\u95f4\u7684\u5173\u7cfb",permalink:"/docs/netty/netty-faq/netty-FAQ-components-relation"}},i={},u=[{value:"1. \u5f15\u8a00",id:"1-\u5f15\u8a00",level:3},{value:"2. \u6848\u4f8b\u4ee3\u7801",id:"2-\u6848\u4f8b\u4ee3\u7801",level:3},{value:"3. \u7ed3\u679c\u5206\u6790",id:"3-\u7ed3\u679c\u5206\u6790",level:3},{value:"4. \u603b\u7ed3",id:"4-\u603b\u7ed3",level:3}],c={toc:u};function s(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"1-\u5f15\u8a00"},"1. \u5f15\u8a00"),(0,o.kt)("p",null,"Java\u4e2d\u7f51\u7edc\u5f00\u53d1Netty\u80af\u5b9a\u7ed5\u4e0d\u5f00\uff0c\u4e4b\u524d\u5728\u7814\u7a76Netty\u6e90\u7801\u8fc7\u7a0b\u4e2d\u53d1\u73b0\u5f53\u4f60\u521b\u5efa ",(0,o.kt)("inlineCode",{parentName:"p"},"EventLoopGroup"),"\u7684\u65f6\u5019\u53ef\u4ee5\u81ea\u5b9a\u4e49\u6267\u884c\u5668\uff0c\u73af\u5883\u8bdd\u8bf4\u5c31\u662f\u53ef\u4ee5\u7528Jdk\u5b9e\u73b0\u7684\u6267\u884c\u5668\u4e5f\u5c31\u662f\u901a\u5e38\u6240\u8bf4\u7684\u7ebf\u7a0b\u6c60\u3002\u5176\u4e2d\u6709\u8fd9\u6837\u7684\u4e00\u4e2a\u6784\u9020\u51fd\u6570\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"public NioEventLoopGroup(int nThreads, Executor executor) {\n    this(nThreads, executor, SelectorProvider.provider());\n}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"nThreads\uff1a\u8868\u793aEventLoopGroup\u7ebf\u7a0b\u6570\u91cf"),(0,o.kt)("li",{parentName:"ul"},"executor\uff1a\u8868\u793a\u7528\u6237\u81ea\u5b9a\u4e49\u7684\u6267\u884c\u5668")),(0,o.kt)("p",null,"\u6267\u884c\u5668\u6211\u4eec\u7528JDK\u5b9e\u73b0\u7684\u7ebf\u7a0b\u6c60\u4f5c\u4e3a\u6267\u884c\u5668\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u95ee\u9898\uff1a\u5f53nThreads\u7684\u503c\u5927\u4e8e\u7ebf\u7a0b\u6c60\u4e2d\u7ebf\u7a0b\u7684\u6700\u5927\u6570\u4f1a\u600e\u4e48\u6837\uff1f")),(0,o.kt)("p",null,"\u4e0b\u9762\u5c31\u901a\u8fc7\u4ee3\u7801\u6765\u770b\u4e00\u4e0b\u8fd9\u79cd\u95ee\u9898\u4e0b\u4f1a\u53d1\u751f\u4ec0\u4e48\uff0c\u540c\u65f6\u5e94\u8be5\u600e\u4e48\u53bb\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\u3002"),(0,o.kt)("h3",{id:"2-\u6848\u4f8b\u4ee3\u7801"},"2. \u6848\u4f8b\u4ee3\u7801"),(0,o.kt)("p",null,"\u670d\u52a1\u7aef\u4ee3\u7801"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'public class DiscardServer {\n    private int port;\n\n    public DiscardServer(int port) {\n        this.port = port;\n    }\n\n    public void run() throws Exception {\n        EventLoopGroup bossGroup = new NioEventLoopGroup(1); // (1)\n        EventLoopGroup workerGroup = new NioEventLoopGroup(3, Executors.newFixedThreadPool(2, new ThreadFactory() {\n            private AtomicInteger threadNumber = new AtomicInteger();\n            @Override\n            public Thread newThread(Runnable r) {\n                return new Thread(r, "Thread-mxsm-"+threadNumber.incrementAndGet());\n            }\n        }));\n        try {\n            ServerBootstrap b = new ServerBootstrap(); // (2)\n            b.group(bossGroup, workerGroup)\n                .channel(NioServerSocketChannel.class) // (3)\n                .childHandler(new ChannelInitializer<SocketChannel>() { // (4)\n                    @Override\n                    public void initChannel(SocketChannel ch) throws Exception {\n                        ch.pipeline().addLast(new TimeServerInHandler());\n                    }\n                })\n                .option(ChannelOption.SO_BACKLOG, 128)          // (5)\n                .childOption(ChannelOption.SO_KEEPALIVE, true); // (6)\n            ChannelFuture f = b.bind(port).sync(); // (7)\n            f.channel().closeFuture().sync();\n        } finally {\n            workerGroup.shutdownGracefully();\n            bossGroup.shutdownGracefully();\n        }\n    }\n\n    public static void main(String[] args) throws Exception {\n        int port = 8080;\n        if (args.length > 0) {\n            port = Integer.parseInt(args[0]);\n        }\n        new DiscardServer(port).run();\n    }\n}\n\n@Sharable\npublic class TimeServerInHandler extends ChannelInboundHandlerAdapter {\n    @Override\n    public void channelRead(ChannelHandlerContext ctx, Object msg) throws Exception {\n        System.out.println(this.getClass().getSimpleName()+"--channelRead");\n        final ByteBuf time = ctx.alloc().buffer(4); // (2)\n        time.writeInt((int) (System.currentTimeMillis() / 1000L + 2208988800L));\n        ctx.writeAndFlush(time); // (3)\n    }\n}\n')),(0,o.kt)("p",null,"\u5ba2\u6237\u7aef\u4ee3\u7801\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'public class TimeClient {\n    public static void main(String[] args) throws Exception {\n\n        for(int i = 0; i < 100; ++i){\n            new Thread(new Runnable(){\n                @Override\n                public void run() {\n                    try {\n                        new TimeClient().test();\n                    } catch (Exception e) {\n                        e.printStackTrace();\n                    }\n                }\n            }).start();\n        }\n\n    }\n\n    public  void test() throws Exception{\n        String host = "127.0.0.1";\n        int port = Integer.parseInt("8080");\n        EventLoopGroup workerGroup = new NioEventLoopGroup();\n\n        try {\n            Bootstrap b = new Bootstrap(); // (1)\n            b.group(workerGroup); // (2)\n            b.channel(NioSocketChannel.class); // (3)\n            b.option(ChannelOption.SO_KEEPALIVE, true); // (4)\n            b.handler(new ChannelInitializer<SocketChannel>() {\n                @Override\n                public void initChannel(SocketChannel ch) throws Exception {\n                    // ch.pipeline().addLast(new TimeClientOutHandler());\n                    ch.pipeline().addLast(new TimeClientInHandler());\n                }\n            });\n\n            // Start the client.\n            ChannelFuture f = b.connect(host, port).sync(); // (5)\n            ByteBuf byteBuf = Unpooled.buffer();\n            // Wait until the connection is closed.\n            byteBuf.writeBytes("1111".getBytes(StandardCharsets.UTF_8));\n            f.channel().writeAndFlush(byteBuf);\n\n            f.channel().closeFuture().sync();\n        } finally {\n            workerGroup.shutdownGracefully();\n        }\n    }\n}\n\npublic class TimeClientInHandler extends ChannelInboundHandlerAdapter {\n\n    @Override\n    public void channelRead(ChannelHandlerContext ctx, Object msg) {\n        System.out.println(this.getClass().getSimpleName()+"--channelRead");\n        ByteBuf m = (ByteBuf) msg; // (1)\n        try {\n            long currentTimeMillis = (m.readUnsignedInt() - 2208988800L) * 1000L;\n            System.out.println(new Date(currentTimeMillis));\n            //ctx.close();\n        } finally {\n            m.release();\n        }\n    }\n    \n}\n')),(0,o.kt)("p",null,"\u5206\u522b\u8fd0\u884c\u670d\u52a1\u7aef\u4ee3\u7801\u548c\u5ba2\u6237\u7aef\u4ee3\u7801\uff0c\u7136\u540e\u8fd0\u884c\u547d\u4ee4\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"jps\n")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"C:%5CUsers%5Cmxsm%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20220314214433827.png",alt:"image-20220314214433827"})),(0,o.kt)("p",null,"\u7136\u540e\u627e\u5230\u670d\u52a1\u7aef\u7684\u7684pid,\u63a5\u7740\u8fd0\u884c\u547d\u4ee4"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"jstack -l <pid>\n")),(0,o.kt)("p",null,"\u8fd0\u884c\u7ed3\u679c\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"C:%5CUsers%5Cmxsm%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20220314214549647.png",alt:"image-20220314214549647"})),(0,o.kt)("h3",{id:"3-\u7ed3\u679c\u5206\u6790"},"3. \u7ed3\u679c\u5206\u6790"),(0,o.kt)("p",null,"\u4ece\u4e0a\u9762\u7684\u7ebf\u7a0b\u53ef\u4ee5\u53d1\u73b0workerGroup\u4e2d\u53ea\u662f\u521b\u5efa\u4e86\u4e24\u4e2a\u7ebf\u7a0b\uff0c\u4e5f\u5c31\u662f\u8bf4\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\u7ebf\u7a0b\u6570\u91cf\u662f\u7531\u7ebf\u7a0b\u6c60\u51b3\u5b9a\u7684\u3002\u4e0b\u9762\u6211\u4eec\u4ece\u6e90\u7801\u6765\u5206\u6790\u4e00\u4e0b\u4e3a\u4ec0\u4e48\u4f1a\u662f\u8fd9\u6837\u7684\u60c5\u51b5\uff1a"),(0,o.kt)("p",null,"\u521b\u5efaNioEventLoopGroup\u7684\u6784\u9020\u51fd\u6570\u8c03\u7528\u4e86MultithreadEventExecutorGroup\u7684\u6784\u9020\u51fd\u6570\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"C:%5CUsers%5Cmxsm%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20220314214751486.png",alt:"image-20220314214751486"})),(0,o.kt)("p",null,"\u6807\u53f71\u4f4d\u7f6e\u662fExecutor\u4e3a\u7a7a\u7684\u60c5\u51b5\u4e0b\u4f7f\u7528\u7684\u5c31\u662fNetty\u81ea\u5b9a\u4e49\u7684\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"C:%5CUsers%5Cmxsm%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20220314214903403.png",alt:"image-20220314214903403"})),(0,o.kt)("p",null,"Netty\u5b9e\u73b0\u7684Executor\u5982\u4e0a\u56fe\uff0c\u662f\u6bcf\u6b21\u6267\u884c\u4e00\u4e2a\u63d0\u4ea4\u7684\u4efb\u52a1\u521b\u5efa\u4e00\u4e2a\u7ebf\u7a0b\uff0c\u7136\u540e\u7ebf\u7a0b\u548cEventLoop\u8fdb\u884c\u7ed1\u5b9a\u3002\u5982\u679c\u4f7f\u7528\u8005\u4f20\u5165\u8fdb\u6765Executor\u4e0d\u4e3a\u7a7a\u5c31\u4f7f\u7528\u7684\u662f\u4f20\u5165\u7684\u3002"),(0,o.kt)("p",null,"\u4f7f\u7528\u81ea\u5b9a\u4e49\u548cNetty\u81ea\u5b9a\u4e49\u5b9e\u73b0\u7684Executor\u7684\u533a\u522b\u5982\u4e0b\u56fe\u6240\u793a\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"E:%5Cdownload%5C%E8%87%AA%E5%AE%9A%E4%B9%89%E5%92%8CNetty%E8%87%AA%E5%AE%9A%E4%B9%89%E5%AE%9E%E7%8E%B0%E7%9A%84Executor%E7%9A%84%E5%8C%BA%E5%88%AB.png",alt:"\u81ea\u5b9a\u4e49\u548cNetty\u81ea\u5b9a\u4e49\u5b9e\u73b0\u7684Executor\u7684\u533a\u522b"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u603b\u7ed3\uff1a \u5728\u4f7f\u7528\u7684\u65f6\u5019\u5982\u679c\u4f7f\u7528\u81ea\u5b9a\u4e49\u7684Executor\u6700\u597d\u8ba9\u7ebf\u7a0b\u6570\u91cf\u548cNioEventLoopGroup\u6784\u9020\u51fd\u6570\u7684nThreads\u6570\u91cf\u4e00\u6837\uff0c\u5982\u679c\u6570\u91cf\u4e0d\u4e00\u6837\u76f8\u5f53\u4e8e\u964d\u4f4e\u4e86workGroup\u7684\u541e\u5410\u91cf")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Tips: \u901a\u8fc7\u4e0a\u9762\u5206\u6790NioEventLoopGroup\u6784\u9020\u51fd\u6570\u7684nThreads\u6570\u91cf\u5176\u5b9e\u6307\u7684\u662fEventLoop\u7684\u6570\u91cf\uff0c\u4f46\u662f\u5728Netty\u4e2d\u6ca1\u6709\u4e25\u683c\u7684\u8981\u6c42\u8bf4\u4e00\u4e2aThread\u5fc5\u987b\u5bf9\u5e94\u4e00\u4e2aEventLoop")),(0,o.kt)("h3",{id:"4-\u603b\u7ed3"},"4. \u603b\u7ed3"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Netty\u521b\u5efaNioEventLoopGroup\u5efa\u8bae\u76f4\u63a5\u4f7f\u7528Netty\u9ed8\u8ba4\u7684Executor\u5b9e\u73b0\u3002\u8fd9\u6837\u80fd\u591f\u907f\u514d\u4e0a\u8ff0\u95ee\u9898"),(0,o.kt)("li",{parentName:"ul"},"\u5728\u5904\u7406Channel\u7684\u6570\u636e\u7684\u65f6\u5019\uff0c\u53ef\u4ee5\u4f7f\u7528JDK\u7684\u7ebf\u7a0b\u6c60\u4f5c\u4e3a\u4e1a\u52a1\u7ebf\u7a0b\u6c60\u8fdb\u884c\u4e1a\u52a1\u5904\u7406"),(0,o.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u8fc7\u7a0b\u4e2d\uff0c\u9047\u5230\u8fd9\u79cd\u95ee\u9898\u4e0d\u6e05\u695a\u5c31\u5c3d\u91cf\u76f4\u63a5\u4f7f\u7528Netty\u672c\u8eab\u7684\uff0c\u6216\u8005\u8bbe\u7f6e\u6210\u76f8\u540c\u7684\u3002")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u6211\u662f\u8682\u8681\u80cc\u5927\u8c61\uff0c\u6587\u7ae0\u5bf9\u4f60\u6709\u5e2e\u52a9\u70b9\u8d5e\u5173\u6ce8\u6211\uff0c\u6587\u7ae0\u6709\u4e0d\u6b63\u786e\u7684\u5730\u65b9\u8bf7\u60a8\u65a7\u6b63\u7559\u8a00\u8bc4\u8bba~\u8c22\u8c22")))}s.isMDXComponent=!0}}]);