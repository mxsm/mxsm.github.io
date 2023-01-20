"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[7041],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(t),h=a,m=u["".concat(p,".").concat(h)]||u[h]||d[h]||l;return t?r.createElement(m,o(o({ref:n},s),{},{components:t})):r.createElement(m,o({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=h;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},1730:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=t(7462),a=(t(7294),t(3905));const l={title:"Netty @Sharable\u5230\u5e95\u662f\u5e72\u4ec0\u4e48\u7528\u7684",date:new Date("2021-06-22T00:00:00.000Z"),weight:202106222351},o=void 0,i={unversionedId:"netty/netty-introduction/Netty-annotation-Sharable",id:"netty/netty-introduction/Netty-annotation-Sharable",title:"Netty @Sharable\u5230\u5e95\u662f\u5e72\u4ec0\u4e48\u7528\u7684",description:"\u5728\u7814\u7a76 Apache RocketMQ \u6e90\u7801\u4e2d\u53d1\u73b0\u6709\u7684 Handler \u88ab @Sharable \u4fee\u9970\u7684\u3002\u6709\u7684\u53c8\u6ca1\u6709\u3002\u4e0b\u9762\u7ed3\u5408\u5b9e\u9645\u7684\u4f8b\u5b50\u6765\u5206\u6790\u4e00\u4e0b\u4f5c\u7528",source:"@site/docs/netty/netty-introduction/Netty-annotation-Sharable.md",sourceDirName:"netty/netty-introduction",slug:"/netty/netty-introduction/Netty-annotation-Sharable",permalink:"/docs/netty/netty-introduction/Netty-annotation-Sharable",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/netty/netty-introduction/Netty-annotation-Sharable.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1674227439,formattedLastUpdatedAt:"Jan 20, 2023",frontMatter:{title:"Netty @Sharable\u5230\u5e95\u662f\u5e72\u4ec0\u4e48\u7528\u7684",date:"2021-06-22T00:00:00.000Z",weight:202106222351},sidebar:"netty",previous:{title:"Netty-EventLoop",permalink:"/docs/netty/netty-introduction/Netty-EventLoop"},next:{title:"Netty\u4e94\u5927\u7ec4\u4ef6\u4e4bChannel",permalink:"/docs/netty/netty-introduction/Netty-channel"}},p={},c=[{value:"1. @Sharable\u6982\u8ff0",id:"1-sharable\u6982\u8ff0",level:3},{value:"2.\u793a\u4f8b\u9a8c\u8bc1",id:"2\u793a\u4f8b\u9a8c\u8bc1",level:3},{value:"3. \u603b\u7ed3",id:"3-\u603b\u7ed3",level:3}],s={toc:c};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5728\u7814\u7a76 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Apache RocketMQ"))," \u6e90\u7801\u4e2d\u53d1\u73b0\u6709\u7684 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Handler"))," \u88ab ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"@Sharable"))," \u4fee\u9970\u7684\u3002\u6709\u7684\u53c8\u6ca1\u6709\u3002\u4e0b\u9762\u7ed3\u5408\u5b9e\u9645\u7684\u4f8b\u5b50\u6765\u5206\u6790\u4e00\u4e0b\u4f5c\u7528"),(0,a.kt)("h3",{id:"1-sharable\u6982\u8ff0"},"1. @Sharable\u6982\u8ff0"),(0,a.kt)("p",null,"\u8868\u793a\u53ef\u4ee5\u5c06\u5e26\u6ce8\u91ca\u7684 ChannelHandler \u7684\u540c\u4e00\u4e2a\u5b9e\u4f8b\u591a\u6b21\u6dfb\u52a0\u5230\u4e00\u4e2a\u6216\u591a\u4e2a ChannelPipelines \u4e2d\uff0c\u800c\u4e0d\u4f1a\u51fa\u73b0\u7ade\u4e89\u6761\u4ef6\u3002\u5982\u679c\u672a\u6307\u5b9a\u6b64\u6ce8\u89e3\uff0c\u5219\u6bcf\u6b21\u5c06\u5176\u6dfb\u52a0\u5230\u7ba1\u9053\u65f6\u90fd\u5fc5\u987b\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u5904\u7406\u7a0b\u5e8f\u5b9e\u4f8b\uff0c\u56e0\u4e3a\u5b83\u5177\u6709\u6210\u5458\u53d8\u91cf\u7b49\u975e\u5171\u4eab\u72b6\u6001\u3002\u8fd9\u4e2a\u662fNetty\u7684\u5b98\u65b9\u7ed9\u7684\u8bf4\u660e\u3002"),(0,a.kt)("p",null,"\u7b80\u5355\u7684\u7406\u89e3\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"@Sharable\u662f\u7528\u6765\u4fee\u9970ChannelHandler\u7684"),(0,a.kt)("li",{parentName:"ul"},"ChannelHandler\u5355\u4f8b\u6a21\u5f0f\u4e0b\u9700\u8981\u6dfb\u52a0\u591a\u4e2aChannelPipelines \u4e5f\u5c31\u662f\u8981\u62e6\u622a\u591a\u4e2aChannel\uff0c\u5c31\u9700\u8981\u4f7f\u7528\u5230@Sharable\u6765\u4fee\u9970ChannelHandler")),(0,a.kt)("h3",{id:"2\u793a\u4f8b\u9a8c\u8bc1"},"2.\u793a\u4f8b\u9a8c\u8bc1"),(0,a.kt)("p",null,"\u5728Netty\u4e2d\u6dfb\u52a0 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"ChannelHandler"))," \u7684\u4ee3\u7801\u5982\u4e0b(\u4ee3\u7801\u6765\u6e90",(0,a.kt)("a",{parentName:"p",href:"https://netty.io/wiki/user-guide-for-4.x.html"},"Netty\u5b98\u7f51"),")\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public class DiscardServer {\n    \n    private int port;\n    \n    public DiscardServer(int port) {\n        this.port = port;\n    }\n    \n    public void run() throws Exception {\n        EventLoopGroup bossGroup = new NioEventLoopGroup(); // (1)\n        EventLoopGroup workerGroup = new NioEventLoopGroup();\n        try {\n            ServerBootstrap b = new ServerBootstrap(); // (2)\n            b.group(bossGroup, workerGroup)\n             .channel(NioServerSocketChannel.class) // (3)\n             .childHandler(new ChannelInitializer<SocketChannel>() { // (4)\n                 @Override\n                 public void initChannel(SocketChannel ch) throws Exception {\n                     ch.pipeline().addLast(new DiscardServerHandler());  //\uff088\uff09\n                 }\n             })\n             .option(ChannelOption.SO_BACKLOG, 128)          // (5)\n             .childOption(ChannelOption.SO_KEEPALIVE, true); // (6)\n            ChannelFuture f = b.bind(port).sync(); // (7)\n            f.channel().closeFuture().sync();\n        } finally {\n            workerGroup.shutdownGracefully();\n            bossGroup.shutdownGracefully();\n        }\n    }\n    \n    public static void main(String[] args) throws Exception {\n        int port = 8080;\n        if (args.length > 0) {\n            port = Integer.parseInt(args[0]);\n        }\n\n        new DiscardServer(port).run();\n    }\n}\n")),(0,a.kt)("p",null,"\u628a\u4e0a\u9762\u4ee3\u7801\u7a0d\u5fae\u505a\u4e00\u70b9\u4fee\u6539\uff0c\u5c06\uff088\uff09\u4f4d\u7f6e\u4ee3\u7801\u4fee\u6539\u6210\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"//\u5728DiscardServer\u5b9a\u4e49\u4e00\u4e2a\u53d8\u91cf\nprivate DiscardServerHandler handler = new DiscardServerHandler();\n\n//\uff088\u4f4d\u7f6e\u6539\u6210\u5982\u4e0b\uff09\nch.pipeline().addLast(handler);\n")),(0,a.kt)("p",null,"\u5f53\u5f80\u591a\u4e2a ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Channel"))," \u7684 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"ChannelPipeline"))," \u4e2d\u6dfb\u52a0\u540c\u4e00\u4e2a ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"ChannelHandler"))," \u7684\u65f6\u5019\uff0c\u5c31\u4f1a\u5224\u65ad\u8be5\u5b9e\u4f8b\u662f\u5426\u589e\u52a0\u4e86 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"@Sharable"))," \u6ce8\u89e3\u3002\u5982\u679c\u6ca1\u6709\u5c31\u4f1a\u629b\u51fa\u9519\u8bef\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"io.netty.channel.ChannelPipelineException: com.github.mxsm.netty.TimeServerHandler is not a @Sharable handler, so can't be added or removed multiple times.\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Tips: \u4e0a\u9762\u7684\u9519\u8bef\u662f\u4ee3\u7801\u6f14\u793a\u629b\u51fa\u6765\u7684\uff0c\u4e0b\u9762\u4f1a\u6839\u636e\u4ee3\u7801\u5206\u6790")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u539f\u56e0\u5206\u6790\uff1a")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4ee5\u5b98\u7f51\u7684\u4f8b\u5b50\u8fdb\u884c\u8fd0\u884c\uff0c\u6dfb\u52a0\u7684\u4e0d\u662f\u5355\u4f8b\uff0c\u52a0\u4e0d\u52a0@Sharable\u6ce8\u89e3\u5e76\u6ca1\u6709\u4ec0\u4e48\u5173\u7cfb\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u4f60\u6dfb\u52a0\u7684\u662f\u5355\u4f8b\uff0c\u5e76\u4e14\u4f1a\u88ab\u6dfb\u52a0\u5230\u591a\u4e2aChannel\u7684 ChannelPipelines\u4e2d\uff0c\u5c31\u5fc5\u987b\u52a0\u4e0a@Sharable\u3002\u5426\u5219\u5c31\u4f1a\u62a5\u9519")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Tips: \u5728 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"initChannel"))," \u65b9\u6cd5\u4e2dChannelHandler\u662f\u5426\u5355\u4f8b\u548cNetty\u6ca1\u5173\u7cfb\uff0c\u4e5f\u548c@Sharable\u4fee\u9970ChannelHandler\u662f\u5426\u5355\u4f8b\u5316\u6ca1\u6709\u5173\u7cfb\u3002\u8fd9\u4e2a\u662f\u5426\u5355\u4f8b\u4e0e\u4f7f\u7528\u8005\u6709\u5173\u3002\u5982\u679c\u662f\u4e00\u4e0a\u9762\u7684 new \u7684\u5f62\u5f0f\u3002\u90a3\u4e48 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"DiscardServerHandler"))," \u5c31\u4e0d\u662f\u5355\u4f8b\u3002\u4e0e\u6709\u6ca1\u6709\u52a0@Sharable\u6ca1\u5173\u7cfb\u3002")),(0,a.kt)("h3",{id:"3-\u603b\u7ed3"},"3. \u603b\u7ed3"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7f51\u4e0a\u5f88\u591a\u8bf4\u8fd9\u4e2a@Sharable\u8ddfChannelHandler\u662f\u5355\u4f8b\u6709\u5173\uff0c\u5176\u5b9e\u6ca1\u6709\u4ec0\u4e48\u5173\u7cfb\u3002ChannelHandler\u662f\u5426\u4e3a\u5355\u4f8b\u53d6\u51b3\u4e8e\u4f7f\u7528\u8005\u6dfb\u52a0\u7684\u662f\u5426\u4e3a\u5355\u4f8b\u3002\u548c\u5f00\u53d1\u8005\u7684\u884c\u4e3a\u6709\u5173\u3002\u4f46\u662f\u5982\u679c\u4f60\u60f3\u4f7f\u7528\u5355\u4f8b\u7684ChannelHandler\u6dfb\u52a0\u5230ChannelPipeline\u4e2d\u90a3\u4e48\u5c31\u9700\u8981\u7528@Sharable\u8fdb\u884c\u4fee\u9970\u3002"),(0,a.kt)("li",{parentName:"ul"},"ChannelHandler\u53ef\u4ee5\u4f5c\u4e3a\u4e00\u4e2a\u5168\u5c40\u7684\u7edf\u8ba1\uff0c\u4f8b\u5982\u7528\u6237\u8fde\u63a5\u6570\u91cf\u7684\u7edf\u8ba1\u5c31\u53ef\u4ee5\u6ce8\u518c\u4e00\u4e2a\u5355\u4f8bChannelHandler\u6765\u5b9e\u73b0\u3002")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6211\u662f\u8682\u8681\u80cc\u5927\u8c61\uff0c\u6587\u7ae0\u5bf9\u4f60\u6709\u5e2e\u52a9\u70b9\u8d5e\u5173\u6ce8\u6211\uff0c\u6587\u7ae0\u6709\u4e0d\u6b63\u786e\u7684\u5730\u65b9\u8bf7\u60a8\u65a7\u6b63\u7559\u8a00\u8bc4\u8bba~\u8c22\u8c22")))}u.isMDXComponent=!0}}]);