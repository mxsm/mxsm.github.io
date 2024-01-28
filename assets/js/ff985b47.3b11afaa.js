"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[7772],{9641:(n,e,l)=>{l.r(e),l.d(e,{assets:()=>r,contentTitle:()=>h,default:()=>o,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var a=l(5893),t=l(1151);const i={title:"Netty\u7ec4\u4ef6-ChannelHandlerContext\u548cChannelPipeline",linkTitle:"Netty\u7ec4\u4ef6-ChannelHandlerContext\u548cChannelPipeline",date:new Date("2022-03-18T00:00:00.000Z"),weight:202203182301},h=void 0,d={id:"netty/netty-source-code-analysis/netty-components-channelPipeline-channelContext",title:"Netty\u7ec4\u4ef6-ChannelHandlerContext\u548cChannelPipeline",description:"Netty\u7684\u7ec4\u4ef6\u4e2d\u8fd8\u6709\u4e24\u4e2a\u91cd\u8981\u7684\u7ec4\u4ef6\uff1aChannelHandlerContext \u548c ChannelPipeline \uff0c\u8fd9\u4e24\u4e2a\u7ec4\u4ef6\u7ecf\u5e38\u642d\u914d\u4e00\u8d77\u4f7f\u7528\uff0c\u4e0b\u9762\u7ed3\u5408\u6e90\u7801\u6765\u8bb2\u8bb2\u8fd9\u4e24\u4e2a\u7ec4\u4ef6\u5982\u4f55\u5728Netty\u4e2d\u53d1\u6325\u4f5c\u7528\u7684\u3002",source:"@site/docs/netty/netty-source-code-analysis/netty-components-channelPipeline-channelContext.md",sourceDirName:"netty/netty-source-code-analysis",slug:"/netty/netty-source-code-analysis/netty-components-channelPipeline-channelContext",permalink:"/docs/netty/netty-source-code-analysis/netty-components-channelPipeline-channelContext",draft:!1,unlisted:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/netty/netty-source-code-analysis/netty-components-channelPipeline-channelContext.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1706451902,formattedLastUpdatedAt:"Jan 28, 2024",frontMatter:{title:"Netty\u7ec4\u4ef6-ChannelHandlerContext\u548cChannelPipeline",linkTitle:"Netty\u7ec4\u4ef6-ChannelHandlerContext\u548cChannelPipeline",date:"2022-03-18T00:00:00.000Z",weight:202203182301},sidebar:"netty",previous:{title:"Netty\u7ec4\u4ef6-ChannelHandler(\u56fe\u6587\u5e76\u8302)",permalink:"/docs/netty/netty-source-code-analysis/netty-components-channelHandler"},next:{title:"Netty\u7ec4\u4ef6-EventLoop",permalink:"/docs/netty/netty-source-code-analysis/netty-eventloop-base"}},r={},c=[{value:"1. ChannelHandlerContext",id:"1-channelhandlercontext",level:3},{value:"2.ChannelPipeline",id:"2channelpipeline",level:3},{value:"2.1ChannelPipeline\u521b\u5efa",id:"21channelpipeline\u521b\u5efa",level:4},{value:"2.2 Event\u5982\u4f55\u5728ChannelPipeline\u6d41\u8f6c",id:"22-event\u5982\u4f55\u5728channelpipeline\u6d41\u8f6c",level:4},{value:"2.3 ChannelPipeline\u7ec4\u7ec7ChannelHandler\u7684\u65b9\u5f0f",id:"23-channelpipeline\u7ec4\u7ec7channelhandler\u7684\u65b9\u5f0f",level:4},{value:"2.4 Event\u6d41\u8f6cChannelHandler\u6267\u884c\u7684\u987a\u5e8f",id:"24-event\u6d41\u8f6cchannelhandler\u6267\u884c\u7684\u987a\u5e8f",level:4},{value:"3. \u603b\u7ed3",id:"3-\u603b\u7ed3",level:3}];function s(n){const e={blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(e.p,{children:["Netty\u7684\u7ec4\u4ef6\u4e2d\u8fd8\u6709\u4e24\u4e2a\u91cd\u8981\u7684\u7ec4\u4ef6\uff1a",(0,a.jsx)(e.code,{children:"ChannelHandlerContext"})," \u548c ",(0,a.jsx)(e.code,{children:"ChannelPipeline"})," \uff0c\u8fd9\u4e24\u4e2a\u7ec4\u4ef6\u7ecf\u5e38\u642d\u914d\u4e00\u8d77\u4f7f\u7528\uff0c\u4e0b\u9762\u7ed3\u5408\u6e90\u7801\u6765\u8bb2\u8bb2\u8fd9\u4e24\u4e2a\u7ec4\u4ef6\u5982\u4f55\u5728Netty\u4e2d\u53d1\u6325\u4f5c\u7528\u7684\u3002"]}),"\n",(0,a.jsx)(e.h3,{id:"1-channelhandlercontext",children:"1. ChannelHandlerContext"}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.code,{children:"ChannelHandlerContext"})," \u5141\u8bb8 ",(0,a.jsx)(e.code,{children:"ChannelHandler"})," \u548c ",(0,a.jsx)(e.code,{children:"ChannelHandler"})," \u6240\u5728\u7684 ",(0,a.jsx)(e.code,{children:"ChannelPipeline"})," (\u8fd9\u4e2a\u4e0b\u9762\u8fdb\u884c\u4ecb\u7ecd)\u4ee5\u53ca ",(0,a.jsx)(e.code,{children:"ChannelPipeline"})," \u62e5\u6709\u7684\u5176\u4ed6Handlers\u8fdb\u884c\u4ea4\u4e92\u3002\u901a\u77e5\u6240\u5728 ",(0,a.jsx)(e.code,{children:"ChannelPipeline"})," \u4e2d\u4e0b\u4e00\u4e2a ",(0,a.jsx)(e.code,{children:"ChannelHandler"}),"  ,\u540c\u65f6\u4e5f\u53ef\u4ee5\u52a8\u6001\u4fee\u6539\u5176\u6240\u5c5e\u7684 ",(0,a.jsx)(e.code,{children:"ChannelPipeline"})]}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"\u901a\u77e5\uff1a\u901a\u77e5\u540c\u4e00\u4e2aChannelPipeline\u4e2d\u4e34\u8fd1\u7684ChannelHandler\uff0c\u901a\u8fc7\u8c03\u7528ChannelHandlerContext\u63d0\u4f9b\u7684\u65b9\u6cd5"}),"\n",(0,a.jsx)(e.li,{children:"\u4fee\u6539ChannelPipeline\uff1a\u53ef\u4ee5\u83b7\u53d6\u5230\u5f53\u524dChannelHandlerContext\u6240\u5c5e\u7684ChannelPipeline\uff0c\u5e94\u7528\u53ef\u4ee5\u5728\u8fd0\u884c\u65f6\u52a8\u6001\u7684\u5f80ChannelPipeline\u4e2d\u6dfb\u52a0\u3001\u5220\u9664\u3001\u6216\u8005\u66ff\u6362ChannelHandler"}),"\n",(0,a.jsx)(e.li,{children:"\u5b58\u50a8\u4e00\u4e9b\u72b6\u6001\u4fe1\u606f"}),"\n"]}),"\n",(0,a.jsxs)(e.blockquote,{children:["\n",(0,a.jsx)(e.p,{children:"Tips: \u4e00\u4e2aChannelHandler\u53ef\u4ee5\u62e5\u6709\u591a\u4e2aChannelHandlerContext,\u539f\u56e0\u5728\u4e8e\uff1a\u4e00\u4e2aChannelHandler\u53ef\u4ee5\u88ab\u6dfb\u52a0\u5230\u591a\u4e2aChannelPipeline\uff0c\u56e0\u6b64\u4e00\u4e2a\u5355\u4f8b\u7684ChannelHandler\u88ab\u6dfb\u52a0\u5230\u4e86\u591a\u4e2aChannelPipeline\u4e0a\u9762\u5c31\u53ef\u4ee5\u88ab\u591a\u4e2aChannelHandlerContext\u8c03\u7528\u3002"}),"\n"]}),"\n",(0,a.jsx)(e.p,{children:"\u5212\u91cd\u70b9\uff1a"}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{src:"https://raw.githubusercontent.com/mxsm/picture/main/netty/channelPipeline/ChannelHandlerContext%E5%88%92%E9%87%8D%E7%82%B9.png",alt:"ChannelHandlerContext\u5212\u91cd\u70b9"})}),"\n",(0,a.jsx)(e.h3,{id:"2channelpipeline",children:"2.ChannelPipeline"}),"\n",(0,a.jsxs)(e.p,{children:["ChannelPipeline\u662f\u4e00\u4e2aChannelHandlers\u5217\u8868\uff0c\u7528\u4e8e\u5904\u7406\u6216\u62e6\u622aChannel\u7684\u5165\u7ad9\u4e8b\u4ef6\u548c\u51fa\u7ad9\u64cd\u4f5c\u3002ChannelPipeline\u5b9e\u73b0\u4e86\u62e6\u622a\u8fc7\u6ee4\u5668\u6a21\u5f0f\u7684\u9ad8\u7ea7\u5f62\u5f0f\uff0c\u8ba9\u7528\u6237\u5b8c\u5168\u63a7\u5236\u5982\u4f55\u5904\u7406\u4e8b\u4ef6\uff0c\u4ee5\u53ca\u7ba1\u9053\u4e2d\u7684ChannelHandlers\u5982\u4f55\u4ea4\u4e92\u3002ChannelPipeline\u5728netty\u4e2d\u53ea\u6709\u4e00\u4e2a\u5b9e\u73b0\u5c31\u662f ",(0,a.jsx)(e.code,{children:"DefaultChannelPipeline"})]}),"\n",(0,a.jsx)(e.h4,{id:"21channelpipeline\u521b\u5efa",children:"2.1ChannelPipeline\u521b\u5efa"}),"\n",(0,a.jsx)(e.p,{children:"\u5f53Channel\u521b\u5efa\u7684\u65f6\u5019ChannelPipeline\u81ea\u52a8\u521b\u5efa\u3002"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-java",children:"//AbstractChannel\nprotected AbstractChannel(Channel parent) {\n    this.parent = parent;\n    id = newId();\n    unsafe = newUnsafe();\n    pipeline = newChannelPipeline();\n}\nprotected DefaultChannelPipeline newChannelPipeline() {\n    return new DefaultChannelPipeline(this);\n}\n"})}),"\n",(0,a.jsx)(e.h4,{id:"22-event\u5982\u4f55\u5728channelpipeline\u6d41\u8f6c",children:"2.2 Event\u5982\u4f55\u5728ChannelPipeline\u6d41\u8f6c"}),"\n",(0,a.jsx)(e.p,{children:"Event\u5728ChannelPipeline\u6d41\u8f6c\u793a\u610f\u56fe\u5982\u4e0b\uff1a"}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{src:"https://raw.githubusercontent.com/mxsm/picture/main/netty/channelPipeline/ChannelPipeline%E4%BA%8B%E4%BB%B6%E6%B5%81%E8%BD%AC.png",alt:"ChannelPipeline\u4e8b\u4ef6\u6d41\u8f6c"})}),"\n",(0,a.jsx)(e.p,{children:"\u5165\u7ad9\u4e8b\u4ef6\u4ece\u4e0b\u5f80\u4e0a\u6267\u884c\u5982\u4e0a\u56fe\uff0c\u5165\u6808\u4e8b\u4ef6\u901a\u5e38\u7531I/O\u7ebf\u7a0b\u751f\u6210\u5165\u6808\u6570\u636e,\u5165\u7ad9\u6570\u636e\u901a\u5e38\u662f\u901a\u8fc7\u5b9e\u9645\u7684\u8f93\u5165\u64cd\u4f5c(\u5982SocketChannel.read(ByteBuffer))\u4ece\u8fdc\u7a0b\u8bfb\u53d6\u3002\u5982\u679c\u5165\u7ad9\u4e8b\u4ef6\u8d85\u51fa\u4e86\u9876\u90e8\u7684\u5165\u7ad9\u5904\u7406\u7a0b\u5e8f\uff0c\u5219\u4f1a\u5c06\u5176\u9759\u9ed8\u4e22\u5f03\uff0c\u6216\u8005\u5728\u9700\u8981\u6ce8\u610f\u65f6\u5c06\u5176\u8bb0\u5f55\u4e0b\u6765\u3002"}),"\n",(0,a.jsx)(e.p,{children:"\u51fa\u7ad9\u4e8b\u4ef6\u4ece\u4e0a\u5f80\u4e0b\u5904\u7406\u3002\u51fa\u7ad9\u5904\u7406\u7a0b\u5e8f\u901a\u5e38\u751f\u6210\u6216\u8f6c\u6362\u51fa\u7ad9\u6d41\u91cf\uff0c\u6bd4\u5982\u5199\u8bf7\u6c42\u3002\u5982\u679c\u51fa\u7ad9\u4e8b\u4ef6\u8d85\u51fa\u5e95\u90e8\u51fa\u7ad9\u5904\u7406\u7a0b\u5e8f\uff0c\u5219\u7531\u4e0eChannel\u5173\u8054\u7684I/O\u7ebf\u7a0b\u5904\u7406\u3002I/O\u7ebf\u7a0b\u901a\u5e38\u6267\u884c\u5b9e\u9645\u7684\u8f93\u51fa\u64cd\u4f5c\uff0c\u4f8b\u5982SocketChannel.write(ByteBuffer)"}),"\n",(0,a.jsx)(e.h4,{id:"23-channelpipeline\u7ec4\u7ec7channelhandler\u7684\u65b9\u5f0f",children:"2.3 ChannelPipeline\u7ec4\u7ec7ChannelHandler\u7684\u65b9\u5f0f"}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{src:"https://raw.githubusercontent.com/mxsm/picture/main/netty/channelPipeline/ChannelPipeline%E4%B8%ADChannelHandlerdler%E7%9A%84%E7%BB%84%E7%BB%87%E6%96%B9%E5%BC%8F.png",alt:"ChannelPipeline\u4e2dChannelHandlerdler\u7684\u7ec4\u7ec7\u65b9\u5f0f"})}),"\n",(0,a.jsx)(e.p,{children:"\u901a\u8fc7\u4e00\u4e2a\u53cc\u5411\u7684ChannelHandlerContext\u961f\u5217\u6765\u7ec4\u7ec7ChannelHandler\uff0c\u5f53ChannelHandler\u88ab\u6dfb\u52a0\u5230ChannelPipeline\u7684\u65f6\u5019\u9996\u5148\u4f1a\u88ab\u5305\u88c5\u6210ChannelHandlerContext\u3002\u7136\u540e\u63d2\u5165\u5230\u94fe\u8868\u4e2d\u3002"}),"\n",(0,a.jsxs)(e.blockquote,{children:["\n",(0,a.jsx)(e.p,{children:"Tips: ChannelPipeline\u662f\u7ebf\u7a0b\u5b89\u5168\u7684\uff0c\u5b98\u65b9\u8fd8\u7ed9\u51fa\u4e86\u8fd9\u6837\u7684\u4e00\u4e2a\u5efa\u8bae\uff1a\u5982\u679c\u5f00\u53d1\u8005\u7684\u4e1a\u52a1\u903b\u8f91\u5168\u90e8\u90fd\u662f\u5f02\u6b65\u6216\u8005\u6267\u884c\u65f6\u95f4\u975e\u5e38\u77ed\u5c31\u4e0d\u9700\u8981\u4e00\u4e2a\u7279\u6b8a\u7684EventLoopGroup"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-java",children:'pipeline.addLast(group, "handler", new MyBusinessLogicHandler())\n'})}),"\n"]}),"\n",(0,a.jsx)(e.h4,{id:"24-event\u6d41\u8f6cchannelhandler\u6267\u884c\u7684\u987a\u5e8f",children:"2.4 Event\u6d41\u8f6cChannelHandler\u6267\u884c\u7684\u987a\u5e8f"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-java",children:'ChannelPipeline p = ....;\np.addLast("1", new InboundHandlerA()); //\u5b9e\u73b0\u4e86ChannelInboundHandler\np.addLast("2", new InboundHandlerB()); //\u5b9e\u73b0\u4e86ChannelInboundHandler\np.addLast("3", new OutboundHandlerA()); //\u5b9e\u73b0\u4e86ChannelOutboundHandler\np.addLast("4", new OutboundHandlerB()); //\u5b9e\u73b0\u4e86ChannelOutboundHandler\np.addLast("5", new InboundOutboundHandlerX()); //\u5b9e\u73b0\u4e86ChannelInboundHandler\u548c\u5b9e\u73b0\u4e86ChannelOutboundHandler\n'})}),"\n",(0,a.jsx)(e.p,{children:"\u4e0a\u8ff0\u4ee3\u7801ChannelPipeline\u4e2d\u7684ChannelHandler\u7684\u94fe\u8868\u987a\u5e8f\uff1ahead<--- 1  <--- 2 <--- 3 <--- 4 <--- 5 <--- tail\u3002"}),"\n",(0,a.jsx)(e.p,{children:"\u5165\u7ad9\u7684\u6267\u884c\u987a\u5e8f\uff1a 1\u30012\u30015"}),"\n",(0,a.jsx)(e.p,{children:"\u5165\u7ad9\u7684\u6267\u884c\u987a\u5e8f\uff1a5\u30014\u30013"}),"\n",(0,a.jsx)(e.h3,{id:"3-\u603b\u7ed3",children:"3. \u603b\u7ed3"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"ChannelPipeline\u4e0eChannel\u7684\u5173\u7cfb\u662f\u4e00\u5bf9\u4e00\u7684\u5173\u7cfb\uff0cChannelPipeline\u662f\u5728Channel\u521b\u5efa\u7684\u65f6\u5019\u81ea\u52a8\u521b\u5efa\u3002"}),"\n",(0,a.jsx)(e.li,{children:"\u5f53ChannelHandler\u662f\u5355\u4f8b\u6a21\u5f0f\u7684\u65f6\u5019\uff0c\u4e00\u4e2aChannelHandler\u53ef\u4ee5\u5bf9\u5e94\u591a\u4e2aChannelPipeline\uff0c\u662f\u4e00\u4e2a1\u5bf9\u591a\u7684\u5173\u7cfb"}),"\n",(0,a.jsx)(e.li,{children:"Channel\u521b\u5efa\u65f6\u5019\u81ea\u52a8\u521b\u5efaChannelPipeline\u5b9e\u73b0Channel\u548cChannelPipeline\u7684\u7ed1\u5b9a\uff0c\u7136\u540e\u5f80ChannelPipeline\u4e2d\u7ed1\u5b9aChannelHandler"}),"\n"]}),"\n",(0,a.jsxs)(e.blockquote,{children:["\n",(0,a.jsx)(e.p,{children:"\u6211\u662f\u8682\u8681\u80cc\u5927\u8c61\uff0c\u6587\u7ae0\u5bf9\u4f60\u6709\u5e2e\u52a9\u70b9\u8d5e\u5173\u6ce8\u6211\uff0c\u6587\u7ae0\u6709\u4e0d\u6b63\u786e\u7684\u5730\u65b9\u8bf7\u60a8\u65a7\u6b63\u7559\u8a00\u8bc4\u8bba~\u8c22\u8c22"}),"\n"]})]})}function o(n={}){const{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(s,{...n})}):s(n)}},1151:(n,e,l)=>{l.d(e,{Z:()=>d,a:()=>h});var a=l(7294);const t={},i=a.createContext(t);function h(n){const e=a.useContext(i);return a.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:h(n.components),a.createElement(i.Provider,{value:e},n.children)}}}]);