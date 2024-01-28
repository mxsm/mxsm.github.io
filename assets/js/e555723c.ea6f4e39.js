"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[5983],{4358:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var t=r(5893),l=r(1151);const i={title:"Netty\u6e90\u7801\u89e3\u6790-\u670d\u52a1\u7aef\u542f\u52a8\u6d41\u7a0b\u8be6\u89e3",linkTitle:"Netty\u6e90\u7801\u89e3\u6790-\u670d\u52a1\u7aef\u542f\u52a8\u6d41\u7a0b\u8be6\u89e3",date:new Date("2022-03-21T00:00:00.000Z"),weight:202203211014},o=void 0,a={id:"netty/netty-source-code-analysis/netty-source-serverbootstrap-flow",title:"Netty\u6e90\u7801\u89e3\u6790-\u670d\u52a1\u7aef\u542f\u52a8\u6d41\u7a0b\u8be6\u89e3",description:"\u4e4b\u524d\u8bb2\u4e86\u5f88\u591a\u5173\u4e8eNetty\u7684\u7ec4\u4ef6\u76f8\u5173\u7684\u77e5\u8bc6\u4ee5\u53caNetty\u542f\u52a8\u8fc7\u7a0b\u4e2d\u7684\u4e00\u4e9b\u8c03\u7528\u5173\u7cfb\u3002\u4e0b\u9762\u901a\u8fc7\u4e00\u4e2a\u5b98\u7f51\u7684\u4f8b\u5b50(\u7a0d\u5fae\u589e\u52a0\u4e86\u4fee\u6539)\u6765\u8bf4\u660e\u6574\u4e2a\u542f\u52a8\u8fc7\u7a0b\u7684\u6bcf\u4e00\u6b65\u5230\u5e95\u505a\u4e86\u4ec0\u4e48\u3002",source:"@site/docs/netty/netty-source-code-analysis/netty-source-serverbootstrap-flow.md",sourceDirName:"netty/netty-source-code-analysis",slug:"/netty/netty-source-code-analysis/netty-source-serverbootstrap-flow",permalink:"/docs/netty/netty-source-code-analysis/netty-source-serverbootstrap-flow",draft:!1,unlisted:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/netty/netty-source-code-analysis/netty-source-serverbootstrap-flow.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1706451902,formattedLastUpdatedAt:"Jan 28, 2024",frontMatter:{title:"Netty\u6e90\u7801\u89e3\u6790-\u670d\u52a1\u7aef\u542f\u52a8\u6d41\u7a0b\u8be6\u89e3",linkTitle:"Netty\u6e90\u7801\u89e3\u6790-\u670d\u52a1\u7aef\u542f\u52a8\u6d41\u7a0b\u8be6\u89e3",date:"2022-03-21T00:00:00.000Z",weight:202203211014},sidebar:"netty",previous:{title:"Netty\u6e90\u7801\u89e3\u6790-EventLoop\u4ec0\u4e48\u65f6\u5019\u542f\u52a8\u8fd0\u884c",permalink:"/docs/netty/netty-source-code-analysis/netty-source-eventloop-startrun"},next:{title:"Netty\u7b54\u7591\u89e3\u60d1-Netty\u7ec4\u4ef6\u4e4b\u95f4\u7684\u5173\u7cfb",permalink:"/docs/netty/netty-faq/netty-FAQ-components-relation"}},s={},c=[{value:"1. \u5b98\u7f51\u793a\u4f8b",id:"1-\u5b98\u7f51\u793a\u4f8b",level:3},{value:"2.\u670d\u52a1\u7aef\u542f\u52a8\u6d41\u7a0b\u8be6\u89e3\u5206\u6790",id:"2\u670d\u52a1\u7aef\u542f\u52a8\u6d41\u7a0b\u8be6\u89e3\u5206\u6790",level:3},{value:"2.1 EventLoopGroup\u7684\u521b\u5efa",id:"21-eventloopgroup\u7684\u521b\u5efa",level:4},{value:"2.2 \u521b\u5efa\u670d\u52a1\u7aef\u7684\u542f\u52a8\u7c7b",id:"22-\u521b\u5efa\u670d\u52a1\u7aef\u7684\u542f\u52a8\u7c7b",level:4},{value:"2.3 \u8bbe\u7f6e\u521b\u5efa\u7684Channel\u7684\u7c7b\u578b",id:"23-\u8bbe\u7f6e\u521b\u5efa\u7684channel\u7684\u7c7b\u578b",level:4},{value:"2.4 \u4e3aServerSocketChannel\u8bbe\u7f6eChannelHandler",id:"24-\u4e3aserversocketchannel\u8bbe\u7f6echannelhandler",level:4},{value:"2.5 \u4e3aSocketChannel\u8bbe\u7f6eChannelHandler",id:"25-\u4e3asocketchannel\u8bbe\u7f6echannelhandler",level:4},{value:"2.6 ServerSocketChannel\u548cSocketChannel\u7684\u8bbe\u7f6e",id:"26-serversocketchannel\u548csocketchannel\u7684\u8bbe\u7f6e",level:4},{value:"2.7 \u7ed1\u5b9a\u7aef\u53e3\u542f\u52a8\u670d\u52a1",id:"27-\u7ed1\u5b9a\u7aef\u53e3\u542f\u52a8\u670d\u52a1",level:4},{value:"3. \u603b\u7ed3",id:"3-\u603b\u7ed3",level:3}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"\u4e4b\u524d\u8bb2\u4e86\u5f88\u591a\u5173\u4e8eNetty\u7684\u7ec4\u4ef6\u76f8\u5173\u7684\u77e5\u8bc6\u4ee5\u53caNetty\u542f\u52a8\u8fc7\u7a0b\u4e2d\u7684\u4e00\u4e9b\u8c03\u7528\u5173\u7cfb\u3002\u4e0b\u9762\u901a\u8fc7\u4e00\u4e2a\u5b98\u7f51\u7684\u4f8b\u5b50(\u7a0d\u5fae\u589e\u52a0\u4e86\u4fee\u6539)\u6765\u8bf4\u660e\u6574\u4e2a\u542f\u52a8\u8fc7\u7a0b\u7684\u6bcf\u4e00\u6b65\u5230\u5e95\u505a\u4e86\u4ec0\u4e48\u3002"}),"\n",(0,t.jsx)(n.h3,{id:"1-\u5b98\u7f51\u793a\u4f8b",children:"1. \u5b98\u7f51\u793a\u4f8b"}),"\n",(0,t.jsx)(n.p,{children:"\u4e0b\u8ff0\u4f8b\u5b50\u662f\u5728\u5b98\u7f51\u7684\u4f8b\u5b50\u4e0a\u505a\u4e86\u4e00\u4e9b\u4fee\u6539\uff0c\u589e\u52a0\u4e86NioServerSocketChannel\u8bbe\u7f6eChannelHandler\u3002\u4e5f\u5c31\u662f\u6807\u53f75\u7684\u4f4d\u7f6e\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"public class DiscardServer {\n\n    private int port;\n\n    public DiscardServer(int port) {\n        this.port = port;\n    }\n\n    public void run() throws Exception {\n        EventLoopGroup bossGroup = new NioEventLoopGroup(1); // (1)\n        EventLoopGroup workerGroup = new NioEventLoopGroup();// (2)\n        try {\n            ServerBootstrap b = new ServerBootstrap(); // (3)\n            b.group(bossGroup, workerGroup) // (3)\n                .channel(NioServerSocketChannel.class) // (4)\n                .handler(new ChannelInitializer<ServerSocketChannel>() {\n                    @Override\n                    protected void initChannel(ServerSocketChannel ch) {\n                        ch.pipeline().addLast(new TimeServerBossOutHandler());\n                        ch.pipeline().addLast(new TimeServerBossInHandler());\n                    }\n                })// (5)\n                .childHandler(new ChannelInitializer<SocketChannel>() {\n                    @Override\n                    public void initChannel(SocketChannel ch) throws Exception {\n                        ch.pipeline().addLast(new TimeServerOutHandler());\n                        ch.pipeline().addLast(new TimeServerInHandler());\n                    }\n                })// (6)\n                .option(ChannelOption.SO_BACKLOG, 128)          // (7)\n                .childOption(ChannelOption.SO_KEEPALIVE, true); // (8)\n\n            // Bind and start to accept incoming connections.\n            ChannelFuture f = b.bind(port).sync(); // (9)\n\n            // Wait until the server socket is closed.\n            // In this example, this does not happen, but you can do that to gracefully\n            // shut down your server.\n            f.channel().closeFuture().sync();\n        } finally {\n            workerGroup.shutdownGracefully();\n            bossGroup.shutdownGracefully();\n        }\n    }\n\n    public static void main(String[] args) throws Exception {\n        int port = 8080;\n        if (args.length > 0) {\n            port = Integer.parseInt(args[0]);\n        }\n\n        new DiscardServer(port).run();\n    }\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u4e0a\u8ff0\u4ee3\u7801\u5730\u5740\uff1a",(0,t.jsx)(n.a,{href:"https://github.com/mxsm/spring-sample/blob/master/java-sample/src/main/java/com/github/mxsm/netty/channelhandler/DiscardServer.java",children:"https://github.com/mxsm/spring-sample/blob/master/java-sample/src/main/java/com/github/mxsm/netty/channelhandler/DiscardServer.java"})]}),"\n",(0,t.jsx)(n.h3,{id:"2\u670d\u52a1\u7aef\u542f\u52a8\u6d41\u7a0b\u8be6\u89e3\u5206\u6790",children:"2.\u670d\u52a1\u7aef\u542f\u52a8\u6d41\u7a0b\u8be6\u89e3\u5206\u6790"}),"\n",(0,t.jsx)(n.p,{children:"\u4e0a\u8ff0\u4ee3\u7801\u88ab\u5206\u6210\u4e869\u4e2a\u6b65\u9aa4\uff0c\u57fa\u672c\u4e0a\u6db5\u76d6\u4e86Netty\u7684\u670d\u52a1\u7aef\u57fa\u672c\u5f00\u53d1\u3002\u6211\u4eec\u5c31\u4e00\u4e2a\u4e2a\u6b65\u9aa4\u5206\u6790\uff0c\u5206\u6790\u8fc7\u7a0b\u4e2d\u4e24\u4e2a\u5c06\u8fd1\u7684\u6b65\u9aa4\u4f1a\u653e\u5728\u4e00\u8d77\u8fdb\u884c\u5206\u6790"}),"\n",(0,t.jsx)(n.h4,{id:"21-eventloopgroup\u7684\u521b\u5efa",children:"2.1 EventLoopGroup\u7684\u521b\u5efa"}),"\n",(0,t.jsxs)(n.p,{children:["\u6b65\u9aa4(1)\u3001(2)\u521b\u5efa**",(0,t.jsx)(n.code,{children:"EventLoopGroup"}),(0,t.jsx)(n.strong,{children:"\uff0c\u4e0a\u8ff0\u4ee3\u7801\u521b\u5efa\u7684\u662f"}),(0,t.jsx)(n.code,{children:"NioEventLoopGroup"}),"**\u3002\u90a3\u4e48\u505a\u4e86\u4e00\u4e9b\u4ec0\u4e48\u4e8b\u60c5\u5462\uff1f"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Tips: EventLoopGroup\u8fd8\u6709 DefaultEventLoopGroup \u3001EpollEventLoopGroup(\u8fd9\u4e2a\u53ea\u80fd\u8fd0\u884c\u5728Linux\u4e0a\u9762)"}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u521b\u5efaEventExecutor\uff0c\u4e5f\u5c31\u662fNioEventLoop\u3002"}),"\n",(0,t.jsx)(n.li,{children:"\u521b\u5efaJava NIO \u7684Selector, \u8fd9\u4e2a\u662f\u521b\u5efaNioEventLoop\u7684\u65f6\u5019\u521b\u5efa\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"22-\u521b\u5efa\u670d\u52a1\u7aef\u7684\u542f\u52a8\u7c7b",children:"2.2 \u521b\u5efa\u670d\u52a1\u7aef\u7684\u542f\u52a8\u7c7b"}),"\n",(0,t.jsx)(n.p,{children:"\u6b65\u9aa4\uff083\uff09\u5c31\u662f\u521b\u5efa\u670d\u52a1\u7aef\u7684\u542f\u52a8\u7c7b\uff0c\u8fd9\u4e2a\u6ca1\u4ec0\u4e48\u597d\u4ecb\u7ecd\u7684\u3002\u521b\u5efa\u5b8c\u6210\u540e\u5c06bossGroup\u548cworkGroup\u5206\u522b\u8bbe\u7f6e\u5230\u670d\u52a1\u7aef\u542f\u52a8\u670d\u52a1\u7c7b\u4e2d\u3002\u4f5c\u7528\uff1a"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"bossGroup\u8d1f\u8d23\u76d1\u542c\u6765\u81ea\u5ba2\u6237\u7aef\u7684\u8fde\u63a5\uff0c\u4ee5\u53ca\u5c06\u8fde\u63a5\u8f6c\u4ea4\u7ed9workGroup\u5904\u7406"}),"\n",(0,t.jsx)(n.li,{children:"workGroup\u4e3b\u8981\u8d1f\u8d23\u5ba2\u6237\u7aef\u8fde\u63a5Channel\u7684\u6570\u636e\u8bfb\u5199\u64cd\u4f5c"}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"23-\u8bbe\u7f6e\u521b\u5efa\u7684channel\u7684\u7c7b\u578b",children:"2.3 \u8bbe\u7f6e\u521b\u5efa\u7684Channel\u7684\u7c7b\u578b"}),"\n",(0,t.jsx)(n.p,{children:"\u5bf9\u4e8e\u670d\u52a1\u7aef\u7684\u8bbe\u7f6eChannel\uff0c\u5176\u5b9e\u6709\u4e24\u7c7b\uff1aServerSocketChannel\u548cSocketChannel\uff0cBossGroup\u521b\u5efa\u7684\u662fServerSocketChannel\uff0c\u800cworkGroup\u521b\u5efa\u7684\u662fSocketChannel(\u8fd9\u4e2a\u4f1a\u5728\u4e0b\u9762\u8bb2\u5230)\u3002\uff084\uff09\u8fd9\u91cc\u8bbe\u7f6e\u7684\u662fboss\u7684ChannelServerSocketChannel\u3002"}),"\n",(0,t.jsx)(n.h4,{id:"24-\u4e3aserversocketchannel\u8bbe\u7f6echannelhandler",children:"2.4 \u4e3aServerSocketChannel\u8bbe\u7f6eChannelHandler"}),"\n",(0,t.jsxs)(n.p,{children:["\u6b65\u9aa4\uff085\uff09\u8bbe\u7f6e\u7684ChannelServerSocketChannel\u7684ChannelHandler\uff0c\u5728\u4e0d\u8bbe\u7f6e\u7684\u60c5\u51b5\u4e0b\uff0c\u5176\u4e2d\u6709\u9ed8\u8ba4\u7684\u6dfb\u52a0 ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"ChannelInitializer"})})," \u5728ServerBootstrap#init\u65b9\u6cd5\u4e2d\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"@Override\nvoid init(Channel channel) {\n    setChannelOptions(channel, newOptionsArray(), logger);\n    setAttributes(channel, newAttributesArray());\n\n    ChannelPipeline p = channel.pipeline();\n\n    final EventLoopGroup currentChildGroup = childGroup;\n    final ChannelHandler currentChildHandler = childHandler;\n    final Entry<ChannelOption<?>, Object>[] currentChildOptions = newOptionsArray(childOptions);\n    final Entry<AttributeKey<?>, Object>[] currentChildAttrs = newAttributesArray(childAttrs);\n\n    p.addLast(new ChannelInitializer<Channel>() {\n        @Override\n        public void initChannel(final Channel ch) {\n            final ChannelPipeline pipeline = ch.pipeline();\n            ChannelHandler handler = config.handler();\n            if (handler != null) {\n                pipeline.addLast(handler); //(1)\n            }\n\n            ch.eventLoop().execute(new Runnable() {\n                @Override\n                public void run() {\n                    pipeline.addLast(new ServerBootstrapAcceptor(\n                            ch, currentChildGroup, currentChildHandler, currentChildOptions, currentChildAttrs));\n                }\n            });\n        }\n    });\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u4e0a\u9762\u4ee3\u7801\u6807\u53f71\u7684\u4f4d\u7f6e\u5c31\u662f\u5c06\u6b65\u9aa4\uff085\uff09\u8bbe\u7f6e\u7684ChannelHandler\u6dfb\u52a0\u5230ChannelServerSocketChannel\u6240\u7ed1\u5b9a\u7684ChannelPipeline\u4e2d\u3002"}),"\n",(0,t.jsx)(n.h4,{id:"25-\u4e3asocketchannel\u8bbe\u7f6echannelhandler",children:"2.5 \u4e3aSocketChannel\u8bbe\u7f6eChannelHandler"}),"\n",(0,t.jsx)(n.p,{children:"\u6b65\u9aa4\uff086\uff09\u4e3aSocketChannel\u8bbe\u7f6eChannelHandler\uff0c\u8fd9\u4e2a\u548c\u6b65\u9aa45\u76f8\u4f3c\u4f46\u662f\u6ce8\u610f\u4e0bChannelInitializer\u4e2d\u7684\u6cdb\u578b\u7c7bC\u662f\u4e0d\u4e00\u6837\u7684\uff0c\u6b65\u9aa4\uff085\uff09\u662fServerSocketChannel\uff0c\u800c\u6b65\u9aa4\uff086\uff09\u662fSocketChannel\u3002"}),"\n",(0,t.jsx)(n.h4,{id:"26-serversocketchannel\u548csocketchannel\u7684\u8bbe\u7f6e",children:"2.6 ServerSocketChannel\u548cSocketChannel\u7684\u8bbe\u7f6e"}),"\n",(0,t.jsx)(n.p,{children:"\u6b65\u9aa4\uff087\uff09\u3001\uff088\uff09\u5206\u522b\u8bbe\u7f6eServerSocketChannel\u548cSocketChannel\u7684TCP\u4ee5\u53ca\u5176\u4ed6\u76f8\u5173\u7684\u53c2\u6570\u8bbe\u7f6e\u3002"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Tips: \u4ee5\u4e0a\u7684\u6b65\u9aa4\uff0c\u4e3b\u8981\u662f\u521b\u5efa\u542f\u52a8\u670d\u52a1\u7c7b\u4ee5\u53ca\u8bbe\u7f6eChannelHandler\u548cChannel\u7684\u914d\u7f6e\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"27-\u7ed1\u5b9a\u7aef\u53e3\u542f\u52a8\u670d\u52a1",children:"2.7 \u7ed1\u5b9a\u7aef\u53e3\u542f\u52a8\u670d\u52a1"}),"\n",(0,t.jsx)(n.p,{children:"\u6b65\u9aa4\uff089\uff09\u4e3b\u8981\u662f\u7ed1\u5b9a\u7aef\u53e3\uff0c\u7136\u540e\u5c06\u4e4b\u524d\u6b65\u9aa4\u7684\u8bbe\u7f6e\u4e32\u8fde\u8d77\u6765\u3002\u5c06\u670d\u52a1\u542f\u52a8\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"private ChannelFuture doBind(final SocketAddress localAddress) {\n    final ChannelFuture regFuture = initAndRegister();\n    final Channel channel = regFuture.channel();\n    if (regFuture.cause() != null) {\n        return regFuture;\n    }\n\n    if (regFuture.isDone()) {\n        ChannelPromise promise = channel.newPromise();\n        doBind0(regFuture, channel, localAddress, promise);\n        return promise;\n    } else {\n        final PendingRegistrationPromise promise = new PendingRegistrationPromise(channel);\n        regFuture.addListener(new ChannelFutureListener() {\n            @Override\n            public void operationComplete(ChannelFuture future) throws Exception {\n                Throwable cause = future.cause();\n                if (cause != null) {\n                    promise.setFailure(cause);\n                } else {\n                    promise.registered();\n                    doBind0(regFuture, channel, localAddress, promise);\n                }\n            }\n        });\n        return promise;\n    }\n}\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u521b\u5efaNioServerSocketChannel\u7684\u5b9e\u4f8b\uff0c\u5728\u521b\u5efaNioServerSocketChannel\u5b9e\u4f8b\u7684\u540c\u65f6\u4e5f\u521b\u5efa\u4e86\u5f53\u524dNioServerSocketChannel\u7684ID,\u5185\u90e8\u63a5\u53e3Unsafe\u7684\u5b9e\u4f8b\u5bf9\u8c61\uff0c\u4ee5\u53ca\u5f53\u524dNioServerSocketChannel\u8bf4\u7ed1\u5b9a\u7684ChannelPipeline\u3002"}),"\n",(0,t.jsxs)(n.li,{children:["\u5bf9NioServerSocketChannel\u7684\u5b9e\u4f8b\u8fdb\u884c\u521d\u59cb\u5316, \u521d\u59cb\u5316\u505a\u4e86\u54ea\u4e9b\u5de5\u4f5c?","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"NioServerSocketChannel\u8bbe\u7f6e\u4e4b\u524d\u8bbe\u7f6e\u7684options\u914d\u7f6e"}),"\n",(0,t.jsx)(n.li,{children:"NioServerSocketChannel\u5c5e\u6027"}),"\n",(0,t.jsx)(n.li,{children:"\u7ed9NioServerSocketChannel\u7684ChannelPipeline\u4e2d\u6dfb\u52a0ChannelInitializer\uff0c\u8fd9\u91cc\u6dfb\u52a0\u7684ChannelInitializer\u4f1a\u5c06\u4e4b\u524d\u6848\u4f8b\u4ee3\u7801\u4e2d\u6b65\u9aa4\uff085\uff09\u6dfb\u52a0\u7684ChannelHandler\u6dfb\u52a0\u5230NioServerSocketChannel\u7684ChannelInitializer\u4e2d\uff0c\u540c\u65f6\u8fd8\u6dfb\u52a0\u4e86ServerBootstrapAcceptor(\u8fd9\u4e2a\u7c7b\u7684\u4f5c\u7528\u540e\u9762\u4f1a\u8bb2\u5230)"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"\u5c06NioServerSocketChannel\u7684\u5b9e\u4f8b\u6ce8\u518c\u5230BossGroup\u7684EventLoop\u4e0a\u9762\uff0c\u5bf9\u4e8eNio\u6765\u8bf4\u5c31\u662f\u6ce8\u518c\u5230NioEventLoop\u4e0a\u9762\u3002"}),"\n",(0,t.jsx)(n.li,{children:"\u7ed1\u5b9a\u542f\u52a8\u670d\u52a1\u5668\u7684\u672c\u5730\u7aef\u53e3\uff0c\u7b49\u5f85\u5ba2\u6237\u7aef\u8fde\u63a5"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u5230\u8fd9\u91cc\u5c31\u5b8c\u6210\u6574\u4e2a\u670d\u52a1\u7684\u542f\u52a8\u5de5\u4f5c\u3002"}),"\n",(0,t.jsx)(n.h3,{id:"3-\u603b\u7ed3",children:"3. \u603b\u7ed3"}),"\n",(0,t.jsx)(n.p,{children:"netty\u670d\u52a1\u7aef\u7684\u542f\u52a8\u548cJava NIO\u7684\u542f\u52a8\u548c\u5de5\u4f5c\u7684\u6d41\u7a0b\u4e00\u81f4\uff0c\u53ea\u662f\u5c06\u63a5\u6536\u8fde\u63a5\u548c\u5904\u7406\u8fde\u63a5\u7684\u8bfb\u5199\u5206\u5f00\u4e86\u3002\u4e5f\u5c31\u662fNetty\u7684Reactor\u7684\u4e3b\u4ece\u6a21\u578b\uff08\u56fe\u7247\u6765\u6e90\u7f51\u4e0a\uff09"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://github.com/mxsm/document/blob/master/image/netty/NettyServer%E5%A4%84%E7%90%86%E8%BF%9E%E6%8E%A5%E7%9A%84%E7%A4%BA%E6%84%8F%E5%9B%BE.png?raw=true",alt:""})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\u6211\u662f\u8682\u8681\u80cc\u5927\u8c61\uff0c\u6587\u7ae0\u5bf9\u4f60\u6709\u5e2e\u52a9\u70b9\u8d5e\u5173\u6ce8\u6211\uff0c\u6587\u7ae0\u6709\u4e0d\u6b63\u786e\u7684\u5730\u65b9\u8bf7\u60a8\u65a7\u6b63\u7559\u8a00\u8bc4\u8bba~\u8c22\u8c22"}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>a,a:()=>o});var t=r(7294);const l={},i=t.createContext(l);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);