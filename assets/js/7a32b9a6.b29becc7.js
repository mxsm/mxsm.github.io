"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[8530],{250:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>i});var r=t(4848),a=t(8453);const l={title:"Netty\u6e90\u7801\u89e3\u6790-ChannelInboundHandler#channelRead\u53c2\u6570Object\u5bf9\u8c61\u5230\u5e95\u662f\u4ec0\u4e48\u7c7b\u578b",linkTitle:"Netty\u6e90\u7801\u89e3\u6790-ChannelInboundHandler#channelRead\u53c2\u6570Object\u5bf9\u8c61\u5230\u5e95\u662f\u4ec0\u4e48\u7c7b\u578b",date:new Date("2022-03-20T00:00:00.000Z"),weight:202203201052},c=void 0,o={id:"netty/netty-source-code-analysis/netty-source-channelRead-object",title:"Netty\u6e90\u7801\u89e3\u6790-ChannelInboundHandler#channelRead\u53c2\u6570Object\u5bf9\u8c61\u5230\u5e95\u662f\u4ec0\u4e48\u7c7b\u578b",description:"Netty\u7248\u672c\uff1anetty-4.1.75.Final",source:"@site/docs/netty/netty-source-code-analysis/netty-source-channelRead-object.md",sourceDirName:"netty/netty-source-code-analysis",slug:"/netty/netty-source-code-analysis/netty-source-channelRead-object",permalink:"/docs/netty/netty-source-code-analysis/netty-source-channelRead-object",draft:!1,unlisted:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/netty/netty-source-code-analysis/netty-source-channelRead-object.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1719738085e3,frontMatter:{title:"Netty\u6e90\u7801\u89e3\u6790-ChannelInboundHandler#channelRead\u53c2\u6570Object\u5bf9\u8c61\u5230\u5e95\u662f\u4ec0\u4e48\u7c7b\u578b",linkTitle:"Netty\u6e90\u7801\u89e3\u6790-ChannelInboundHandler#channelRead\u53c2\u6570Object\u5bf9\u8c61\u5230\u5e95\u662f\u4ec0\u4e48\u7c7b\u578b",date:"2022-03-20T00:00:00.000Z",weight:202203201052},sidebar:"netty",previous:{title:"Netty\u6e90\u7801\u5206\u6790-Channel\u5982\u4f55\u4ece\u4e3b\u7ebf\u7a0b\u5207\u6362\u5230\u4ece\u7ebf\u7a0b",permalink:"/docs/netty/netty-source-code-analysis/netty-source-bossgroup-switch-workgroup"},next:{title:"Netty\u6e90\u7801\u5206\u6790-ChannelHandler\u65b9\u6cd5\u6267\u884c\u987a\u5e8f\u548c\u5982\u4f55\u5de5\u4f5c",permalink:"/docs/netty/netty-source-code-analysis/netty-source-channelhandler-order"}},s={},i=[{value:"1. \u5f15\u8a00",id:"1-\u5f15\u8a00",level:3},{value:"2. Netty\u6e90\u7801\u5206\u6790ChannelInboundHandler#channelRead\u53c2\u6570Object\u7c7b\u578b",id:"2-netty\u6e90\u7801\u5206\u6790channelinboundhandlerchannelread\u53c2\u6570object\u7c7b\u578b",level:3},{value:"2.1 ServerSocketChannel\u4e2dChannelInboundHandler#channelRead\u53c2\u6570Object\u7c7b\u578b",id:"21-serversocketchannel\u4e2dchannelinboundhandlerchannelread\u53c2\u6570object\u7c7b\u578b",level:4},{value:"2.2 ServerSocketChannel\u4e2dChannelInboundHandler#channelRead\u53c2\u6570Object\u7c7b\u578b",id:"22-serversocketchannel\u4e2dchannelinboundhandlerchannelread\u53c2\u6570object\u7c7b\u578b",level:4},{value:"3. \u603b\u7ed3",id:"3-\u603b\u7ed3",level:3}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["Netty\u7248\u672c\uff1a",(0,r.jsx)(n.a,{href:"https://github.com/netty/netty/releases/tag/netty-4.1.75.Final",children:"netty-4.1.75.Final"})]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"1-\u5f15\u8a00",children:"1. \u5f15\u8a00"}),"\n",(0,r.jsxs)(n.p,{children:["\u5728\u4e4b\u524d\u7684\u6587\u7ae0\u300a",(0,r.jsx)(n.a,{href:"https://juejin.cn/post/7076731940706975758",children:"Netty\u6e90\u7801\u5206\u6790-ChannelHandler\u65b9\u6cd5\u6267\u884c\u987a\u5e8f\u548c\u5982\u4f55\u5de5\u4f5c"}),"\u300b\u4e2d\u5206\u6790\u4e86ChannelHandler\u7684\u65b9\u6cd5\u6267\u884c\u7684\u987a\u5e8f\u95ee\u9898\u3002\u5728\u8fd9\u4e2a\u8fc7\u7a0b\u4e2d\u7ec6\u5fc3\u7684\u4eba\u53ef\u80fd\u4f1a\u53d1\u73b0",(0,r.jsx)(n.code,{children:"ChannelInboundHandler#channelRead"})," \u65b9\u6cd5\u6709\u4e2a\u53c2\u6570\u662fObject:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"void channelRead(ChannelHandlerContext ctx, Object msg) throws Exception;\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u521a\u521a\u63a5\u89e6\u7684Netty\u7684\u5f00\u53d1\u8005\u80af\u5b9a\u4e5f\u5f88\u597d\u5947\u8fd9\u4e2aObject\u5230\u5e95\u4f1a\u662f\u4ec0\u4e48\u7c7b\u578b\uff0c\u4eca\u5929\u6211\u4eec\u5c31\u4ece\u6e90\u7801\u6765\u5206\u6790\u4e00\u4e0b\u8fd9\u4e2aObject\u7684\u7c7b\u578b\u3002\u4e86\u89e3Object\u7684\u5177\u4f53\u7c7b\u578b\u540c\u65f6\u4e5f\u53ef\u4ee5\u5e2e\u52a9\u6211\u4eec\u66f4\u597d\u7684\u5f00\u53d1\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"2-netty\u6e90\u7801\u5206\u6790channelinboundhandlerchannelread\u53c2\u6570object\u7c7b\u578b",children:"2. Netty\u6e90\u7801\u5206\u6790ChannelInboundHandler#channelRead\u53c2\u6570Object\u7c7b\u578b"}),"\n",(0,r.jsx)(n.p,{children:"\u8fd9\u91cc\u6211\u4eec\u8fd8\u662f\u4ee5\u670d\u52a1\u5668\u7684\u4ee3\u7801\u4f5c\u4e3a\u4f8b\u5b50\u8bb2\u89e3"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"package com.github.mxsm.netty.channelhandler;\n\nimport com.github.mxsm.netty.DiscardServerHandler;\nimport io.netty.bootstrap.ServerBootstrap;\nimport io.netty.channel.ChannelFuture;\nimport io.netty.channel.ChannelInitializer;\nimport io.netty.channel.ChannelOption;\nimport io.netty.channel.EventLoopGroup;\nimport io.netty.channel.nio.NioEventLoopGroup;\nimport io.netty.channel.socket.ServerSocketChannel;\nimport io.netty.channel.socket.SocketChannel;\nimport io.netty.channel.socket.nio.NioServerSocketChannel;\n\n/**\n * @author mxsm\n * @date 2022/3/13 10:47\n * @Since 1.0.0\n */\npublic class DiscardServer {\n    private int port;\n\n    public DiscardServer(int port) {\n        this.port = port;\n    }\n\n    public void run() throws Exception {\n        EventLoopGroup bossGroup = new NioEventLoopGroup(1); // (1)\n        EventLoopGroup workerGroup = new NioEventLoopGroup();\n        try {\n            ServerBootstrap b = new ServerBootstrap(); // (2)\n            b.handler(new ChannelInitializer<ServerSocketChannel>(){\n                @Override\n                protected void initChannel(ServerSocketChannel ch) throws Exception {\n                    ch.pipeline().addLast(new TimeServerBossOutHandler());\n                    ch.pipeline().addLast(new TimeServerBossInHandler());\n                }\n            });\n            b.group(bossGroup, workerGroup)\n                .channel(NioServerSocketChannel.class) // (3)\n                .childHandler(new ChannelInitializer<SocketChannel>() { // (4)\n                    @Override\n                    public void initChannel(SocketChannel ch) throws Exception {\n                        ch.pipeline().addLast(new TimeServerOutHandler());\n                        ch.pipeline().addLast(new TimeServerInHandler());\n                    }\n                })\n                .option(ChannelOption.SO_BACKLOG, 128)          // (5)\n                .childOption(ChannelOption.SO_KEEPALIVE, true); // (6)\n\n            // Bind and start to accept incoming connections.\n            ChannelFuture f = b.bind(port).sync(); // (7)\n\n            // Wait until the server socket is closed.\n            // In this example, this does not happen, but you can do that to gracefully\n            // shut down your server.\n            f.channel().closeFuture().sync();\n        } finally {\n            workerGroup.shutdownGracefully();\n            bossGroup.shutdownGracefully();\n        }\n    }\n\n    public static void main(String[] args) throws Exception {\n        int port = 8080;\n        if (args.length > 0) {\n            port = Integer.parseInt(args[0]);\n        }\n\n        new DiscardServer(port).run();\n    }\n}\n"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["Tips:\u4ee3\u7801\u5730\u5740",(0,r.jsx)(n.a,{href:"https://github.com/mxsm/spring-sample/tree/master/java-sample/src/main/java/com/github/mxsm/netty/channelhandler",children:"https://github.com/mxsm/spring-sample/tree/master/java-sample/src/main/java/com/github/mxsm/netty/channelhandler"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u4e0a\u9762\u4ee3\u7801\u6539\u81eaNetty\u5b98\u7f51\uff0c\u6211\u8fd9\u91cc\u7ed9BossGroup\u4e2d\u7684ServerSocketChannel\u4e5f\u663e\u793a\u52a0\u4e86ChannelHandler\u3002",(0,r.jsx)(n.strong,{children:"\u6240\u4ee5\u5bf9\u4e8eChannelInboundHandler#channelRead\u53c2\u6570Object\u7c7b\u578b\u6211\u4eec\u9700\u8981\u533a\u5206\u662fServerSocketChannel\u8fd8\u662fSocketChannel\u3002"})," \u4e0b\u9762\u6211\u4eec\u4e5f\u4ece\u8fd9\u4e24\u4e2a\u65b9\u9762\u8fdb\u884c\u6e90\u7801\u5206\u6790\u3002"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["Tips: \u4e0b\u9762\u8bb2\u7684\u4f1a\u7528\u5230ChannelHandler\u7684\u65b9\u6cd5\u6267\u884c\u987a\u5e8f\u7684\u76f8\u5173\u77e5\u8bc6\uff0c\u4e0d\u592a\u6e05\u695a\u7684\u53ef\u4ee5\u67e5\u770b\u4e4b\u524d\u7684\u6587\u7ae0 \u300a",(0,r.jsx)(n.a,{href:"https://juejin.cn/post/7076731940706975758",children:"Netty\u6e90\u7801\u5206\u6790-ChannelHandler\u65b9\u6cd5\u6267\u884c\u987a\u5e8f\u548c\u5982\u4f55\u5de5\u4f5c"}),"\u300b"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"21-serversocketchannel\u4e2dchannelinboundhandlerchannelread\u53c2\u6570object\u7c7b\u578b",children:"2.1 ServerSocketChannel\u4e2dChannelInboundHandler#channelRead\u53c2\u6570Object\u7c7b\u578b"}),"\n",(0,r.jsx)(n.p,{children:"NioServerSocketChannel\u521b\u5efa\u5b8c\u6210\u540e\u7ed1\u5b9a\u5230BossGroup\u7684EvenLoop\u4e0a\u9762\uff0c\u5f80EvenLoop\u63d0\u4ea4\u4efb\u52a1\u540e\uff0cNioEventLoop\u5c31\u5f00\u59cb\u8fd0\u884cEventLoop#run"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:" @Override\n protected void run() {\n     //\u7701\u7565\u4e86\u5927\u91cf\u7684\u4ee3\u7801\n     \n     for (;;) {\n         strategy = select(curDeadlineNanos); //select\n         \n         processSelectedKeys() //\u5904\u7406SelectedKeys\n     }\n }\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u4e0a\u9762\u4ee3\u7801\u4e3b\u8981\u770b\u4e00\u4e0b",(0,r.jsx)(n.code,{children:"processSelectedKeys()"})," \u8fd9\u4e2a\u65b9\u6cd5\u6700\u7ec8\u8c03\u7528\u7684\u662f ",(0,r.jsx)(n.code,{children:"NioEventLoop#processSelectedKey(SelectionKey k, AbstractNioChannel ch)"})," \u8fd9\u4e2a\u65b9\u6cd5\u3002\u8fd9\u4e2a\u65b9\u6cd5\u4e5f\u662fServerSocketChannel\u7684\u4e3b\u8981\u5904\u7406\u903b\u8f91\uff1a"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://raw.githubusercontent.com/mxsm/picture/main/netty/channelhandler/image-20220320101400589.png",alt:""})}),"\n",(0,r.jsxs)(n.p,{children:["\u5982\u4e0a\u56fe1\u4f4d\u7f6e\u6240\u793a\uff0c",(0,r.jsx)(n.code,{children:"unsafe.read()"})," \u8fd9\u4e2a\u65b9\u6cd5\u662f\u89e3\u6790ChannelInboundHandler#channelRead\u53c2\u6570Object\u7c7b\u578b\u7684\u5173\u952e\u4ee3\u7801\u3002\u8fd9\u4e2aunsafe\u662f\u600e\u4e48\u6765\u7684\u5462\uff0c\u4e0a\u9762\u6709\u8fd9\u6837\u4e00\u6bb5\u4ee3\u7801\uff1a"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://raw.githubusercontent.com/mxsm/picture/main/netty/channelhandler/image-20220320102124732.png",alt:"image-20220320102124732"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u91cd\u70b9\uff1aunsafe.read()\uff0c\u8c03\u7528\u90a3\u4e2a\u5b9e\u73b0\u53d6\u51b3\u4e8e\u5177\u4f53\u7684\u5b9e\u73b0\uff0cNioServerSocketChannel\u90a3\u4e48\u8c03\u7528\u7684\u5c31\u662fAbstractNioMessageChannel.NioMessageUnsafe.read"})," \uff1a"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://raw.githubusercontent.com/mxsm/picture/main/netty/channelhandler/image-20220320102542119.png",alt:"image-20220320102542119"})}),"\n",(0,r.jsx)(n.p,{children:"\u8fd9\u4e2a\u65b9\u6cd5\u91cd\u70b9\u5173\u6ce8\u4e00\u4e0b\u4e0a\u56fe\u7684\u6807\u53f7\u4f4d\u7f6e"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u6807\u53f71 \u7684\u4f4d\u7f6e\u8c03\u7528\u4e86",(0,r.jsx)(n.code,{children:"AbstractNioMessageChannel#doReadMessages"}),"\u7684\u62bd\u8c61\u65b9\u6cd5\uff0c\u8fd9\u4e2a\u6848\u4f8b\u4e0b\u8c03\u7528\u7684\u662f",(0,r.jsx)(n.code,{children:"NioServerSocketChannel#doReadMessages"}),"\u65b9\u6cd5\uff1a"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://raw.githubusercontent.com/mxsm/picture/main/netty/channelhandler/image-20220320102645617.png",alt:"image-20220320102645617"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5f80",(0,r.jsx)(n.code,{children:"List<Object> buf"})," \u5217\u8868\u4e2d\u6dfb\u52a0\u4e86",(0,r.jsx)(n.code,{children:"NioSocketChannel"}),"\u7684\u5b9e\u4f8b"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u6807\u53f72\u7684\u4f4d\u7f6e\uff0c\u662f\u89e6\u53d1",(0,r.jsx)(n.code,{children:"ChannelInboundHandler#channelRead"})," \uff0c\u5c06\u6807\u53f71\u4e2d\u6dfb\u52a0\u7684",(0,r.jsx)(n.code,{children:"NioSocketChannel"}),"\u4f5c\u4e3aObject\u7684\u5b9e\u9645\u5bf9\u8c61\u4f20\u5165",(0,r.jsx)(n.code,{children:"ChannelInboundHandler#channelRead"}),"\u53c2\u6570Object\u7c7b\u578b"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u603b\u7ed3\uff1aServerSocketChannel\u4e2dChannelInboundHandler#channelRead\u53c2\u6570Object\u7c7b\u578b\u662fNioSocketChannel"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Tips: \u4f7f\u7528\u8005\u53ef\u4ee5\u542f\u52a8\u9879\u76ee\u8fdb\u884c\u6d4b\u8bd5\uff0c\u770b\u4e00\u4e0b\u662f\u4e0d\u662f\u548c\u4e0a\u9762\u5206\u6790\u7684\u4e00\u6837\u8fdb\u884c\u9a8c\u8bc1\uff0c\u4e0a\u9762\u7684\u5173\u952e\u4e4b\u5904\u5c31\u662f\u5728\u4e8eunsafe.read()\u8fd9\u4e2a\u65b9\u6cd5\u5230\u5e95\u662f\u8c03\u7528\u54ea\u4e2a\u5b9e\u73b0\uff0c\u540c\u65f6\u5728\u89e6\u53d1\u4e86ServerSocketChannel\u7684ChannelPipeline\u540e\u7684fireChannelRead\u5982\u4f55\u8fdb\u884c\u4f20\u5bfc\u5230SocketChannel\uff0c\u8fd9\u4e2a\u5c31\u662f\u6211\u4e0b\u9762\u8981\u63a5\u7740\u5206\u6790\u7684\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"22-serversocketchannel\u4e2dchannelinboundhandlerchannelread\u53c2\u6570object\u7c7b\u578b",children:"2.2 ServerSocketChannel\u4e2dChannelInboundHandler#channelRead\u53c2\u6570Object\u7c7b\u578b"}),"\n",(0,r.jsxs)(n.p,{children:["\u89e6\u53d1\u4e86ServerSocketChannel\u7684ChannelPipeline\u540e\u7684fireChannelRead\u540e\uff0c\u6700\u7ec8\u8c03\u7528\u7684\u662f ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"ServerBootstrap#init"})})," \u4e2d\u7684\u5982\u4e0b\u56fe\u6846\u51fa\u6765\u7684\u4ee3\u7801\uff1a"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://raw.githubusercontent.com/mxsm/picture/main/netty/channelhandler/image-20220320104301073.png",alt:"image-20220320104301073"})}),"\n",(0,r.jsx)(n.p,{children:"ServerBootstrapAcceptor\u4e5f\u662f\u4e00\u4e2aChannelInboundHandlerAdapter\uff0c\u540c\u6837\u4f1a\u89e6\u53d1ChannelInboundHandler#channelRead"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Tips: \u6b64\u65f6\u89e6\u53d1\u7684ChannelInboundHandler#channelRead\u8fd8\u662f\u5c5e\u4e8eNioServerSocketChannel"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://raw.githubusercontent.com/mxsm/picture/main/netty/channelhandler/image-20220320104427432.png",alt:"image-20220320104427432"})}),"\n",(0,r.jsx)(n.p,{children:"\u5982\u4e0a\u56fe\u6807\u53f71\u6240\u793a\u6b64\u5904\u7684Channel\u5b9e\u9645\u4e0a\u662fNioSocketChannel\u5b9e\u4f8b\uff0c\u4e5f\u5c31\u662fNioServerSocketChannel\u4f20\u9012\u8fc7\u6765\u7684\u3002\u5982\u4e0a\u56fe\u6807\u53f72\u6240\u793a\u8fd9\u91cc\u5c31\u662f\u5f80workGroup\u4e2d\u6ce8\u518cNioSocketChannel\u5b9e\u4f8b\u3002\u7136\u540e\u5c31\u662fworkGroup\u7684NioEventLoop\u5c31\u5f00\u59cb\u8fd0\u884cEventLoop#run\uff0c\u8fd9\u91cc\u7684\u6267\u884c\u548cBossGroup\u4e2d\u6267\u884c\u7684\u662f\u4e00\u6837\u7684\u3002\u552f\u4e00\u4e0d\u540c\u7684\u5c31\u662f"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"unsafe.read()"})," \u65b9\u6cd5\uff0c\u5728NioSocketChannel\u4e2d\u662f\u6267\u884c",(0,r.jsx)(n.code,{children:"AbstractNioByteChannel.NioByteUnsafe#read"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://raw.githubusercontent.com/mxsm/picture/main/netty/channelhandler/image-20220320103708124.png",alt:"image-20220320103708124"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5982\u4e0a\u56fe\u6807\u53f71\u6240\u793a\uff0c\u8fd9\u91cc\u540c\u6837\u89e6\u53d1\u4e86",(0,r.jsx)(n.code,{children:"ChannelPipeline#fireChannelRead"})," \u8fd9\u91cc\u4f20\u5165\u7684ChannelInboundHandler#channelRead\u53c2\u6570Object\u7c7b\u578b\u662fByteBuf\u7684\u5b9e\u4f8b\u3002"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Tips: \u8fd9\u91cc\u7684ChannelPipeline#fireChannelRead\u89e6\u53d1\u7684\u662fNioSocketChannel\u7684\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u603b\u7ed3\uff1aServerSocketChannel\u4e2dChannelInboundHandler#channelRead\u53c2\u6570Object\u7c7b\u578b\u662fByteBuf"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Tips: \u5982\u679c\u7ecf\u8fc7\u89e3\u7801\u5668\u540e\uff0c\u89e6\u53d1\u7684\u540e\u7eed\u7684ChannelInboundHandler#channelRead\u53c2\u6570Object\u7684\u7c7b\u578b\u5c31\u662f\u89e3\u7801\u540e\u7684\u6d88\u606f\u7c7b\u578b"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"3-\u603b\u7ed3",children:"3. \u603b\u7ed3"}),"\n",(0,r.jsx)(n.p,{children:"ChannelInboundHandler#channelRead\u53c2\u6570Object\u7c7b\u578b\u53d6\u51b3\u4e8e\u662fServerSocketChannel\u8fd8\u662fSocketChannel\u3002"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"ServerSocketChannel\u4e2dChannelInboundHandler#channelRead\u53c2\u6570Object\u7c7b\u578b\u662fNioSocketChannel"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"ServerSocketChannel\u4e2dChannelInboundHandler#channelRead\u53c2\u6570Object\u7c7b\u578b\u662fByteBuf"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"\u5bf9\u4e8eNetty\u7684\u89e3\u7801\u5668\u53ea\u662f\u5bf9ChannelInboundHandler\u8fdb\u884c\u62d3\u5c55"})}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"\u6211\u662f\u8682\u8681\u80cc\u5927\u8c61\uff0c\u6587\u7ae0\u5bf9\u4f60\u6709\u5e2e\u52a9\u70b9\u8d5e\u5173\u6ce8\u6211\uff0c\u6587\u7ae0\u6709\u4e0d\u6b63\u786e\u7684\u5730\u65b9\u8bf7\u60a8\u65a7\u6b63\u7559\u8a00\u8bc4\u8bba~\u8c22\u8c22"}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>o});var r=t(6540);const a={},l=r.createContext(a);function c(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);