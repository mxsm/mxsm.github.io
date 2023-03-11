"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[4665],{3905:(n,e,t)=>{t.d(e,{Zo:()=>h,kt:()=>k});var a=t(7294);function l(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function r(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function o(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){l(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function i(n,e){if(null==n)return{};var t,a,l=function(n,e){if(null==n)return{};var t,a,l={},r=Object.keys(n);for(a=0;a<r.length;a++)t=r[a],e.indexOf(t)>=0||(l[t]=n[t]);return l}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(a=0;a<r.length;a++)t=r[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(l[t]=n[t])}return l}var p=a.createContext({}),d=function(n){var e=a.useContext(p),t=e;return n&&(t="function"==typeof n?n(e):o(o({},e),n)),t},h=function(n){var e=d(n.components);return a.createElement(p.Provider,{value:e},n.children)},u="mdxType",c={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(n,e){var t=n.components,l=n.mdxType,r=n.originalType,p=n.parentName,h=i(n,["components","mdxType","originalType","parentName"]),u=d(t),m=l,k=u["".concat(p,".").concat(m)]||u[m]||c[m]||r;return t?a.createElement(k,o(o({ref:e},h),{},{components:t})):a.createElement(k,o({ref:e},h))}));function k(n,e){var t=arguments,l=e&&e.mdxType;if("string"==typeof n||l){var r=t.length,o=new Array(r);o[0]=m;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=n,i[u]="string"==typeof n?n:l,o[1]=i;for(var d=2;d<r;d++)o[d]=t[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9173:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var a=t(7462),l=(t(7294),t(3905));const r={title:"Netty\u7ec4\u4ef6-ChannelHandler(\u56fe\u6587\u5e76\u8302)",linkTitle:"Netty\u7ec4\u4ef6-ChannelHandler",date:new Date("2022-03-11T00:00:00.000Z"),weight:202203112125},o=void 0,i={unversionedId:"netty/netty-source-code-analysis/netty-components-channelHandler",id:"netty/netty-source-code-analysis/netty-components-channelHandler",title:"Netty\u7ec4\u4ef6-ChannelHandler(\u56fe\u6587\u5e76\u8302)",description:"Netty\u7248\u672c\uff1anetty-4.1.74.Final",source:"@site/docs/netty/netty-source-code-analysis/netty-components-channelHandler.md",sourceDirName:"netty/netty-source-code-analysis",slug:"/netty/netty-source-code-analysis/netty-components-channelHandler",permalink:"/docs/netty/netty-source-code-analysis/netty-components-channelHandler",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/netty/netty-source-code-analysis/netty-components-channelHandler.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1678517863,formattedLastUpdatedAt:"Mar 11, 2023",frontMatter:{title:"Netty\u7ec4\u4ef6-ChannelHandler(\u56fe\u6587\u5e76\u8302)",linkTitle:"Netty\u7ec4\u4ef6-ChannelHandler",date:"2022-03-11T00:00:00.000Z",weight:202203112125},sidebar:"netty",previous:{title:"Netty FastThreadLocal\u76f8\u6bd4Java ThreadLocal\u5230\u5e95\u5feb\u5728\u54ea\u91cc?",permalink:"/docs/netty/netty-source-code-analysis/netty-FastThreadLocal"},next:{title:"Netty\u7ec4\u4ef6-ChannelHandlerContext\u548cChannelPipeline",permalink:"/docs/netty/netty-source-code-analysis/netty-components-channelPipeline-channelContext"}},p={},d=[{value:"1. ChannelHandler\u4ecb\u7ecd",id:"1-channelhandler\u4ecb\u7ecd",level:3},{value:"2.ChannelHandler\u7684\u751f\u547d\u5468\u671f",id:"2channelhandler\u7684\u751f\u547d\u5468\u671f",level:3},{value:"3.ChannelHandler\u7684\u65b9\u6cd5\u6267\u884c\u987a\u5e8f",id:"3channelhandler\u7684\u65b9\u6cd5\u6267\u884c\u987a\u5e8f",level:3},{value:"3.2 \u4ece\u6e90\u7801\u89e3\u6790ChannelHandler\u65b9\u6cd5\u6267\u884c\u987a\u5e8f",id:"32-\u4ece\u6e90\u7801\u89e3\u6790channelhandler\u65b9\u6cd5\u6267\u884c\u987a\u5e8f",level:4},{value:"4.ChannelHandler\u7684\u5206\u7c7b\u8bf4\u660e",id:"4channelhandler\u7684\u5206\u7c7b\u8bf4\u660e",level:3},{value:"5.\u603b\u7ed3",id:"5\u603b\u7ed3",level:3}],h={toc:d},u="wrapper";function c(n){let{components:e,...t}=n;return(0,l.kt)(u,(0,a.Z)({},h,t,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Netty\u7248\u672c\uff1a",(0,l.kt)("a",{parentName:"p",href:"https://github.com/netty/netty/releases/tag/netty-4.1.74.Final"},"netty-4.1.74.Final"))),(0,l.kt)("h3",{id:"1-channelhandler\u4ecb\u7ecd"},"1. ChannelHandler\u4ecb\u7ecd"),(0,l.kt)("p",null,"\u5b98\u65b9\u7ed9\u51fa\u7684\u89e3\u91caChannelHandler\u7684\u4f5c\u7528\u4e3b\u8981\u6709\u4e24\u70b9\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5904\u7406I/O\u4e8b\u4ef6\uff0c\u62e6\u622aI/O\u64cd\u4f5c\uff0c\u4e3b\u8981\u7528\u6765\u5904\u7406Channel"),(0,l.kt)("li",{parentName:"ul"},"\u5728ChannelPipeline\u4e2d\u4ece\u5f53\u524d\u4e00\u4e2aChannelHandler\u4f20\u9012\u8c03\u7528\u5230\u4e0b\u4e00\u4e2aChannelHandler")),(0,l.kt)("p",null,"ChannelHandler\u7684\u7ee7\u627f\u5173\u7cfb\u56fe\u5982\u4e0b\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/netty/channelhandler/ChannelHandler%E7%9A%84%E7%BB%A7%E6%89%BF%E5%85%B3%E7%B3%BB.png",alt:"ChannelHandler\u7684\u7ee7\u627f\u5173\u7cfb"})),(0,l.kt)("p",null,"\u4ece\u4e0a\u9762\u53ef\u4ee5\u770b\u51fa\u6765\u4e3b\u8981\u5206\u4e3a\u4e24\u7c7b\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"ChannelInboundHandler"),(0,l.kt)("p",{parentName:"li"},"\u63a5\u6536I/O\u5165\u7ad9\u7684\u64cd\u4f5c\u901a\u77e5")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"ChannelOutboundHandler"),(0,l.kt)("p",{parentName:"li"},"\u63a5\u6536I/O\u51fa\u7ad9\u64cd\u4f5c\u901a\u77e5"))),(0,l.kt)("p",null,"\u6d89\u53ca\u7684ChannelOutboundHandlerAdapter\u548cChannelInboundHandlerAdapter\u9002\u914d\u5668\u4e3b\u8981\u662f\u63d0\u4f9b\u4e86\u65b9\u6cd5\u7684\u9ed8\u8ba4\u5b9e\u73b0\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Tips: ChannelDuplexHandler\u662f\u53cc\u5de5\u5904\u7406\u5668\uff0c\u5177\u6709ChannelInboundHandler\u548cChannelOutboundHandler\u7684\u529f\u80fd")),(0,l.kt)("h3",{id:"2channelhandler\u7684\u751f\u547d\u5468\u671f"},"2.ChannelHandler\u7684\u751f\u547d\u5468\u671f"),(0,l.kt)("p",null,"\u4eceChannelHandler\u7684\u6e90\u7801\u6765\u770b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"public interface ChannelHandler {\n    \n    void handlerAdded(ChannelHandlerContext ctx) throws Exception;\n\n    void handlerRemoved(ChannelHandlerContext ctx) throws Exception;\n    \n    @Deprecated\n    void exceptionCaught(ChannelHandlerContext ctx, Throwable cause) throws Exception;\n\n    @Inherited\n    @Documented\n    @Target(ElementType.TYPE)\n    @Retention(RetentionPolicy.RUNTIME)\n    @interface Sharable {\n        // no value\n    }\n}\n")),(0,l.kt)("p",null,"\u53ea\u6709\u4e09\u4e2a\u65b9\u6cd5\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"ChannelHandler#handlerAdded")),(0,l.kt)("p",{parentName:"li"},"\u88ab\u6dfb\u52a0\u5230\u4e0a\u7ebf\u6587\u4e2d\u89e6\u53d1")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"ChannelHandler#handlerRemoved")),(0,l.kt)("p",{parentName:"li"},"\u5728\u4e0a\u4e0b\u6587\u4e2d\u88ab\u79fb\u9664\u89e6\u53d1")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"ChannelHandler#exceptionCaught")),(0,l.kt)("p",{parentName:"li"},"\u6709Throwable\u9519\u8bef\u629b\u9519\u89e6\u53d1"))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Tips:ChannelHandler#exceptionCaught\u65b9\u6cd5\u5df2\u7ecf\u88ab\u6807\u8bb0\u4e3a\u8fc7\u671f\uff0c\u53ef\u4ee5\u5b9e\u73b0 ChannelInboundHandler#exceptionCaught\u7684\u65b9\u6cd5")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/netty/channelhandler/ChannelHandler%E7%94%9F%E5%91%A8%E6%9C%9F.png",alt:"ChannelHandler\u751f\u5468\u671f"})),(0,l.kt)("p",null,"\u7528\u4e00\u4e2a\u670d\u52a1\u7aef\u7684\u4f8b\u5b50\u6765\u8bb2\u89e3\u6574\u4e2a\u8fc7\u7a0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"package io.netty.example.discard;\n    \nimport io.netty.bootstrap.ServerBootstrap;\n\nimport io.netty.channel.ChannelFuture;\nimport io.netty.channel.ChannelInitializer;\nimport io.netty.channel.ChannelOption;\nimport io.netty.channel.EventLoopGroup;\nimport io.netty.channel.nio.NioEventLoopGroup;\nimport io.netty.channel.socket.SocketChannel;\nimport io.netty.channel.socket.nio.NioServerSocketChannel;\n    \n/**\n * Discards any incoming data.\n */\npublic class DiscardServer {\n    \n    private int port;\n    \n    public DiscardServer(int port) {\n        this.port = port;\n    }\n    \n    public void run() throws Exception {\n        EventLoopGroup bossGroup = new NioEventLoopGroup(); // (1)\n        EventLoopGroup workerGroup = new NioEventLoopGroup();\n        try {\n            ServerBootstrap b = new ServerBootstrap(); // (2)\n            b.group(bossGroup, workerGroup)\n             .channel(NioServerSocketChannel.class) // (3)\n             .childHandler(new ChannelInitializer<SocketChannel>() { // (4)\n                 @Override\n                 public void initChannel(SocketChannel ch) throws Exception {\n                     ch.pipeline().addLast(new DiscardServerHandler());\n                 }\n             })\n             .option(ChannelOption.SO_BACKLOG, 128)          // (5)\n             .childOption(ChannelOption.SO_KEEPALIVE, true); // (6)\n    \n            // Bind and start to accept incoming connections.\n            ChannelFuture f = b.bind(port).sync(); // (7)\n    \n            // Wait until the server socket is closed.\n            // In this example, this does not happen, but you can do that to gracefully\n            // shut down your server.\n            f.channel().closeFuture().sync();\n        } finally {\n            workerGroup.shutdownGracefully();\n            bossGroup.shutdownGracefully();\n        }\n    }\n    \n    public static void main(String[] args) throws Exception {\n        int port = 8080;\n        if (args.length > 0) {\n            port = Integer.parseInt(args[0]);\n        }\n\n        new DiscardServer(port).run();\n    }\n}\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Tips: \u4ee3\u7801\u6765\u6e90Netty\u5b98\u7f51",(0,l.kt)("a",{parentName:"p",href:"https://netty.io/wiki/user-guide-for-4.x.html#wiki-h3-6"},"https://netty.io/wiki/user-guide-for-4.x.html#wiki-h3-6"))),(0,l.kt)("p",null,"\u4e0a\u8ff0\u4ee3\u7801\u5176\u5b9e\u5206\u4e3a\u4e24\u4e2a\u90e8\u5206\u4e00\u4e2a\u90e8\u5206\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"NioServerSocketChannel")," \u4ee5\u53ca ",(0,l.kt)("inlineCode",{parentName:"p"},"SocketChannel")," \u3002 \u9996\u5148\u5206\u6790NioServerSocketChannel\u4e2d\u7684ChannelHandler\u3002"),(0,l.kt)("p",null,"\u901a\u8fc7\u4ee3\u7801\u53ef\u4ee5\u77e5\u9053NioServerSocketChannel\u521b\u5efa\u540e\u4f1a\u8c03\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"ServerBootstrap#init"),"\u65b9\u6cd5\u3002\u5728\u8be5\u65b9\u6cd5\u4e2d\u6709\u8fd9\u6837\u4e00\u6bb5\u4ee3\u7801\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/netty/channelhandler/image-20220311214033108.png",alt:"image-20220311214033108"})),(0,l.kt)("p",null,"\u521b\u5efa\u4e00\u4e2aChannelHandler\u7684\u5b9e\u4f8b\u4e5f\u5c31\u662fChannelInitializer\u6dfb\u52a0\u5230NioServerSocketChannel\u7684ChannelPipeline\u4e2d\u3002\u901a\u8fc7\u8ddf\u8e2aChannelPipeline#addLast\u65b9\u6cd5\uff0c\u6700\u7ec8\u8c03\u7528\u7684\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"DefaultChannelPipeline#addLast"),"\u65b9\u6cd5\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/netty/channelhandler/image-20220311214725357.png",alt:"image-20220311214725357"})),(0,l.kt)("p",null,"\u7136\u540e\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"DefaultChannelPipeline#callHandlerAdded0")," \u65b9\u6cd5\u4e2d\u8c03\u7528\u7684\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"AbstractChannelHandlerContext#callHandlerAdded")," \u65b9\u6cd5\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/netty/channelhandler/image-20220311214916716.png",alt:"image-20220311214916716"})),(0,l.kt)("p",null,"\u7136\u540e\u83b7\u53d6\u5230ChannelHandler\u5b9e\u4f8b\u8c03\u7528handlerAdded\u65b9\u6cd5\u3002\u4e5f\u5c31\u662f\u8c03\u7528",(0,l.kt)("strong",{parentName:"p"},"ChannelHandler#handlerAdded")," \u65b9\u6cd5\u3002\u5230\u8fd9\u91cc\u5c31\u5b8c\u6210\u4e86\u4eceChannelHandler\u521b\u5efa\u5230\u8c03\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"ChannelHandler#handlerAdded")," \u65b9\u6cd5\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u8c03\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"DefaultChannelPipeline#remove")," \u65b9\u6cd5\uff0c\u6700\u7ec8\u8c03\u7528\u7684\u5c31\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"AbstractChannelHandlerContext#callHandlerRemoved"),"\u5728\u8fd9\u4e2a\u65b9\u6cd5\u4e2d\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/netty/channelhandler/image-20220311215453340.png",alt:"image-20220311215453340"})),(0,l.kt)("p",null,"\u8c03\u7528\u4e86",(0,l.kt)("inlineCode",{parentName:"p"},"ChannelHandler#handlerRemoved")),(0,l.kt)("p",null,"\u5bf9\u4e8e",(0,l.kt)("inlineCode",{parentName:"p"},"ChannelHandler#exceptionCaught")," \u5728\u6240\u6709\u7684ChannelHandler\u4ee5\u53ca\u5b50\u7c7b\u65b9\u6cd5\u6267\u884c\u7684\u65f6\u5019\u90fd\u4f1a\u6709",(0,l.kt)("inlineCode",{parentName:"p"},"try catch")," \u5bf9\u5f02\u5e38\u8fdb\u884c\u6355\u83b7\u7136\u540e\u6267\u884c",(0,l.kt)("inlineCode",{parentName:"p"},"AbstractChannelHandlerContext#invokeExceptionCaught")," \u65b9\u6cd5"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/netty/channelhandler/image-20220311220153445.png",alt:"image-20220311220153445"})),(0,l.kt)("p",null,"\u8fd9\u4e2a\u65b9\u6cd5\u4e2d\u90fd\u662f\u8c03\u7528\u4e86",(0,l.kt)("inlineCode",{parentName:"p"},"ChannelHandler#exceptionCaught")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Tips: ChannelHandler#exceptionCaught\u65b9\u6cd5\u6807\u8bb0\u4e3a\u8fc7\u671f\u4e86\uff0c\u53ef\u4ee5\u5173\u6ce8ChannelInboundHandler#exceptionCaught\u65b9\u6cd5\u3002\u540c\u65f6\u8fd8\u4f1a\u5728ChannelInitializer#initChannel\u4e2d\u53ef\u80fd\u88ab\u6267\u884c")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u603b\u7ed3\uff1aChannelHandler#handlerAdded\u65b9\u6cd5\u4e3b\u8981\u53d1\u751f\u5728\u5f80ChannelPipeline\u6dfb\u52a0ChannelHandler\u7684\u65f6\u5019\uff0cChannelHandler#handlerRemoved\u4e3b\u8981\u53d1\u751f\u5728\u4eceChannelPipeline\u5220\u9664ChannelHandler\u7684\u65f6\u5019\uff0c\u800cChannelHandler#exceptionCaught\u4e3b\u8981\u53d1\u751f\u5728\u6267\u884cChannelInboundHandler\u548cChannelOutboundHandler\u65b9\u6cd5\u7684\u65f6\u5019\u53d1\u751f\u9519\u8bef\u6267\u884c")),(0,l.kt)("h3",{id:"3channelhandler\u7684\u65b9\u6cd5\u6267\u884c\u987a\u5e8f"},"3.ChannelHandler\u7684\u65b9\u6cd5\u6267\u884c\u987a\u5e8f"),(0,l.kt)("p",null,"\u8fd9\u91cc\u6240\u8bf4\u7684ChannelHandler\u65b9\u6cd5\u6307\u7684\u662fChannelHandler\u672c\u8eab\u7684\u65b9\u6cd5\u4ee5\u53caChannelInboundHandler\u548cChannelOutboundHandler\u65b9\u6cd5\u7684\u987a\u5e8f\u3002\u770b\u4e00\u4e0b\u8fd9\u4e2a\u4e09\u4e2a\u7c7b\u4e2d\u5206\u522b\u6709\u4ec0\u4e48\u65b9\u6cd5\uff1a"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"ChannelHandler\u63a5\u53e3")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"handlerAdded"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53\u628a ChannelHandler \u6dfb\u52a0\u5230 ChannelPipeline \u4e2d\u65f6\u88ab\u8c03\u7528")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"handlerRemoved"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53\u4ece ChannelPipeline \u4e2d\u79fb\u9664 ChannelHandler \u65f6\u88ab\u8c03\u7528")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"exceptionCaught"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53\u5904\u7406\u8fc7\u7a0b\u4e2d\u5728 ChannelPipeline \u4e2d\u6709\u9519\u8bef\u4ea7\u751f\u65f6\u88ab\u8c03\u7528")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Netty"))," \u5b9a\u4e49\u4e86\u4e0b\u9762\u4e24\u4e2a\u91cd\u8981\u7684 ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"ChannelHandler")),"  \u5b50\u63a5\u53e3\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"ChannelInboundHandler")," \u2014 \u5904\u7406 ",(0,l.kt)("strong",{parentName:"li"},"\u5165\u7ad9")," \u6570\u636e\u4ee5\u53ca\u5404\u79cd\u72b6\u6001\u53d8\u5316"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"ChannelOutboundHandler")," \u2014 \u5904\u7406 ",(0,l.kt)("strong",{parentName:"li"},"\u51fa\u7ad9")," \u6570\u636e\u5e76\u4e14\u5141\u8bb8\u62e6\u622a\u6240\u6709\u7684\u64cd\u4f5c")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"ChannelInboundHandler \u63a5\u53e3")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"channelRegistered"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53 Channel \u5df2\u7ecf\u6ce8\u518c\u5230\u5b83\u7684 EventLoop \u5e76\u4e14\u80fd\u591f\u5904\u7406 I/O \u65f6\u88ab\u8c03\u7528")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"channelUnregistered"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53 Channel \u4ece\u5b83\u7684 EventLoop \u6ce8\u9500\u5e76\u4e14\u65e0\u6cd5\u5904\u7406\u4efb\u4f55 I/O \u65f6\u88ab\u8c03\u7528")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"channelActive"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53 Channel \u5904\u4e8e\u6d3b\u52a8\u72b6\u6001\u65f6\u88ab\u8c03\u7528;Channel \u5df2\u7ecf\u8fde\u63a5/\u7ed1\u5b9a\u5e76\u4e14\u5df2\u7ecf\u5c31\u7eea")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"channelInactive"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53 Channel \u79bb\u5f00\u6d3b\u52a8\u72b6\u6001\u5e76\u4e14\u4e0d\u518d\u8fde\u63a5\u5b83\u7684\u8fdc\u7a0b\u8282\u70b9\u65f6\u88ab\u8c03\u7528")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"channelReadComplete"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53Channel\u4e0a\u7684\u4e00\u4e2a\u8bfb\u64cd\u4f5c\u5b8c\u6210\u65f6\u88ab\u8c03\u7528")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"channelRead"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53\u4ece Channel \u8bfb\u53d6\u6570\u636e\u65f6\u88ab\u8c03\u7528")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ChannelWritabilityChanged"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53Channel\u7684\u53ef\u5199\u72b6\u6001\u53d1\u751f\u6539\u53d8\u65f6\u88ab\u8c03\u7528\u3002\u7528\u6237\u53ef\u4ee5\u786e\u4fdd\u5199\u64cd\u4f5c\u4e0d\u4f1a\u5b8c\u6210\u5f97\u592a\u5feb(\u4ee5\u907f\u514d\u53d1\u751f OutOfMemoryError)\u6216\u8005\u53ef\u4ee5\u5728 Channel \u53d8\u4e3a\u518d\u6b21\u53ef\u5199\u65f6\u6062\u590d\u5199\u5165\u3002\u53ef\u4ee5\u901a\u8fc7\u8c03\u7528Channel\u7684isWritable()\u65b9\u6cd5\u6765\u68c0\u6d4bChannel \u7684\u53ef\u5199\u6027\u3002\u4e0e\u53ef\u5199\u6027\u76f8\u5173\u7684\u9608\u503c\u53ef\u4ee5\u901a\u8fc7Channel.config().setWriteHighWaterMark()\u548c Channel.config().setWriteLowWaterMark()\u65b9\u6cd5\u6765\u8bbe\u7f6e")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"userEventTriggered"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53 ChannelnboundHandler.fireUserEventTriggered()\u65b9\u6cd5\u88ab\u8c03\u7528\u65f6\u88ab\u8c03\u7528\uff0c\u56e0\u4e3a\u4e00\u4e2a POJO \u88ab\u4f20\u7ecf\u4e86 ChannelPipeline")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"ChannelOutboundHandler \u63a5\u53e3")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bind(ChannelHandlerContext,SocketAddress,ChannelPromise)"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53\u8bf7\u6c42\u5c06 Channel \u7ed1\u5b9a\u5230\u672c\u5730\u5730\u5740\u65f6\u88ab\u8c03\u7528")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"connect(ChannelHandlerContext,SocketAddress,SocketAddress,ChannelPromise)"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53\u8bf7\u6c42\u5c06 Channel \u8fde\u63a5\u5230\u8fdc\u7a0b\u8282\u70b9\u65f6\u88ab\u8c03\u7528")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"disconnect(ChannelHandlerContext,ChannelPromise)"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53\u8bf7\u6c42\u5c06 Channel \u4ece\u8fdc\u7a0b\u8282\u70b9\u65ad\u5f00\u65f6\u88ab\u8c03\u7528")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"close(ChannelHandlerContext,ChannelPromise)"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53\u8bf7\u6c42\u5173\u95ed Channel \u65f6\u88ab\u8c03\u7528")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"deregister(ChannelHandlerContext,ChannelPromise)"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53\u8bf7\u6c42\u5c06 Channel \u4ece\u5b83\u7684 EventLoop \u6ce8\u9500\u65f6\u88ab\u8c03\u7528")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"read(ChannelHandlerContext)"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53\u8bf7\u6c42\u4ece Channel \u8bfb\u53d6\u66f4\u591a\u7684\u6570\u636e\u65f6\u88ab\u8c03\u7528")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"flush(ChannelHandlerContext)"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53\u8bf7\u6c42\u901a\u8fc7 Channel \u5c06\u5165\u961f\u6570\u636e\u51b2\u5237\u5230\u8fdc\u7a0b\u8282\u70b9\u65f6\u88ab\u8c03\u7528")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"write(ChannelHandlerContext,Object,ChannelPromise)"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53\u8bf7\u6c42\u901a\u8fc7 Channel \u5c06\u6570\u636e\u5199\u5230\u8fdc\u7a0b\u8282\u70b9\u65f6\u88ab\u8c03\u7528")))),(0,l.kt)("h4",{id:"32-\u4ece\u6e90\u7801\u89e3\u6790channelhandler\u65b9\u6cd5\u6267\u884c\u987a\u5e8f"},"3.2 \u4ece\u6e90\u7801\u89e3\u6790ChannelHandler\u65b9\u6cd5\u6267\u884c\u987a\u5e8f"),(0,l.kt)("p",null,"\u8fd9\u4e2a\u9700\u8981\u8f83\u957f\u7684\u7bc7\u5e45\u6765\u8bf4\u660e\uff0c\u6211\u5728\u6587\u7ae0\u300aNetty\u6e90\u7801\u89e3\u6790-ChannelHandler\u65b9\u6cd5\u6267\u884c\u987a\u5e8f\u300b\u8fdb\u884c\u8be6\u7ec6\u7684\u8bb2\u89e3\u3002"),(0,l.kt)("h3",{id:"4channelhandler\u7684\u5206\u7c7b\u8bf4\u660e"},"4.ChannelHandler\u7684\u5206\u7c7b\u8bf4\u660e"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/netty/channelhandler/ChannelHandler%E5%88%86%E7%B1%BB.png",alt:"ChannelHandler\u5206\u7c7b"})),(0,l.kt)("p",null,"ChannelHandler\u7684\u5b9e\u73b0\u4e3b\u8981\u6709\u4e09\u4e2a\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"ChannelInboundHandler \uff1a\u5904\u7406",(0,l.kt)("strong",{parentName:"li"},"\u5165\u7ad9"),"\u6570\u636e\u4ee5\u53ca\u5404\u79cd\u53d8\u5316\uff0c\u7b80\u5355\u7406\u89e3\u5c31\u662f\uff1a\u5ba2\u6237\u7aef\u6216\u8005\u670d\u52a1\u5668\u7aef\u63a5\u6536\u5176\u4ed6\u7aef\u7684\u6570\u636e\u8fdb\u884c\u5904\u7406\u3002"),(0,l.kt)("li",{parentName:"ul"},"ChannelOutboundHandler \uff1a\u5904\u7406 ",(0,l.kt)("strong",{parentName:"li"},"\u51fa\u7ad9")," \u6570\u636e\u5e76\u4e14\u5141\u8bb8\u62e6\u622a\u6240\u6709\u7684\u64cd\u4f5c\uff0c\u7b80\u5355\u7406\u89e3\u5c31\u662f\uff1a\u5ba2\u6237\u7aef\u6216\u8005\u670d\u52a1\u5668\u7aef\u53d1\u9001\u6570\u636e\u7ed9\u5176\u4ed6\u7aef\u7684\u6570\u636e\u5904\u7406\uff0c\u540c\u65f6\u8fd8\u53ef\u4ee5\u62e6\u622a\u8bfb\u5199\u64cd\u4f5c"),(0,l.kt)("li",{parentName:"ul"},"ChannelDuplexHandler\uff1a \u5305\u542b\u4e86ChannelInboundHandler \u548cChannelOutboundHandler \u7684\u529f\u80fd\u3002")),(0,l.kt)("p",null,"\u4ece\u4e0a\u9762\u884d\u751f\u51fa\u6765\u5c31\u662f\u89e3\u7801\u5668\u548c\u7f16\u7801\u5668\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"XXXXDecoder\uff1a \u4e3b\u8981\u8d1f\u8d23\u5c06\u7f51\u7edc\u4e2d\u7684\u6570\u636e\u89e3\u7801\u6210\u7aef\u9700\u8981\u7684\u6570\u636e\uff0c\u4f8b\u5982\uff1aProtobufDecoder"),(0,l.kt)("li",{parentName:"ul"},"XXXXEncoder\uff1a \u4e3b\u8981\u8d1f\u8d23\u5c06\u7aef\u7ed3\u6784\u5316\u7684\u6570\u636e\u7f16\u7801\u6210\u7f51\u7edc\u4e2d\u4f20\u8f93\u7684\u6570\u636e\u683c\u5f0f\uff0c\u4f8b\u5982\uff1aProtobufEncoder")),(0,l.kt)("p",null,"\u89e3\u7801\u5668\u548c\u7f16\u7801\u5668\u4e5f\u662fNetty\u4e2d\u91cd\u8981\u7684\u7ec4\u4ef6\u3002"),(0,l.kt)("h3",{id:"5\u603b\u7ed3"},"5.\u603b\u7ed3"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"ChannelHandler\u662f\u548cChannel\u8fdb\u884c\u7ed1\u5b9a\u7684\uff0c\u901a\u8fc7ChannelHandlerContext\u8fdb\u884c\u89e6\u53d1\u3002"),(0,l.kt)("li",{parentName:"ul"},"ChannelHandler\u4e3b\u8981\u7528\u4e8e\u62e6\u622aI/O\u64cd\u4f5c\u548cI/O\u4e8b\u4ef6\uff0c\u540c\u65f6\u901a\u8fc7ChannelPipeline\u5c06\u591a\u4e2aChannelHandler\u4e32\u8054\u5728\u4e00\u8d77\uff0c\u5f62\u6210\u4e00\u4e2a\u8c03\u7528\u94fe"),(0,l.kt)("li",{parentName:"ul"},"ChannelHandler\u5206\u4e3a\u51fa\u7ad9\u548c\u5165\u6808\u4e24\u79cd\u5904\u7406\u5668\uff0c\u540c\u65f6\u884d\u751f\u51fa\u4e86\u7f16\u7801\u5668\u548c\u89e3\u7801\u5668\u3002")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u6211\u662f\u8682\u8681\u80cc\u5927\u8c61\uff0c\u6587\u7ae0\u5bf9\u4f60\u6709\u5e2e\u52a9\u70b9\u8d5e\u5173\u6ce8\u6211\uff0c\u6587\u7ae0\u6709\u4e0d\u6b63\u786e\u7684\u5730\u65b9\u8bf7\u60a8\u65a7\u6b63\u7559\u8a00\u8bc4\u8bba~\u8c22\u8c22")))}c.isMDXComponent=!0}}]);