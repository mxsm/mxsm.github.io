"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[1048],{5667:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>a,frontMatter:()=>c,metadata:()=>l,toc:()=>d});var o=n(4848),r=n(8453);const c={title:"Netty\u7ec4\u4ef6-EventLoop",linkTitle:"Netty\u7ec4\u4ef6-EventLoop",date:new Date("2022-03-03T00:00:00.000Z"),weight:202203032358},s=void 0,l={id:"netty/netty-source-code-analysis/netty-eventloop-base",title:"Netty\u7ec4\u4ef6-EventLoop",description:"Netty\u7248\u672c\uff1anetty-4.1.74.Final",source:"@site/docs/netty/netty-source-code-analysis/netty-eventloop-base.md",sourceDirName:"netty/netty-source-code-analysis",slug:"/netty/netty-source-code-analysis/netty-eventloop-base",permalink:"/docs/netty/netty-source-code-analysis/netty-eventloop-base",draft:!1,unlisted:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/netty/netty-source-code-analysis/netty-eventloop-base.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1719738085e3,frontMatter:{title:"Netty\u7ec4\u4ef6-EventLoop",linkTitle:"Netty\u7ec4\u4ef6-EventLoop",date:"2022-03-03T00:00:00.000Z",weight:202203032358},sidebar:"netty",previous:{title:"Netty\u7ec4\u4ef6-ChannelHandlerContext\u548cChannelPipeline",permalink:"/docs/netty/netty-source-code-analysis/netty-components-channelPipeline-channelContext"},next:{title:"Netty\u6e90\u7801\u5206\u6790-EventLoopGroup\u5982\u4f55\u5de5\u4f5c",permalink:"/docs/netty/netty-source-code-analysis/netty-eventloopgroup-howto-work"}},i={},d=[{value:"1. \u5f15\u8a00",id:"1-\u5f15\u8a00",level:3},{value:"2. EventExecutor\u548cEventExecutorGroup",id:"2-eventexecutor\u548ceventexecutorgroup",level:3},{value:"3. EventLoop\u548cEventLoopGroup",id:"3-eventloop\u548ceventloopgroup",level:3},{value:"4.SingleThreadEventLoop",id:"4singlethreadeventloop",level:3},{value:"5. EventLoop\u5230\u5e95\u662f\u4ec0\u4e48\uff1f",id:"5-eventloop\u5230\u5e95\u662f\u4ec0\u4e48",level:3}];function p(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",img:"img",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsxs)(t.p,{children:["Netty\u7248\u672c\uff1a",(0,o.jsx)(t.a,{href:"https://github.com/netty/netty/releases/tag/netty-4.1.74.Final",children:"netty-4.1.74.Final"})]}),"\n"]}),"\n",(0,o.jsx)(t.h3,{id:"1-\u5f15\u8a00",children:"1. \u5f15\u8a00"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"EventLoop"})," \u4f5c\u4e3aNetty\u4e00\u4e2a\u91cd\u8981\u7684\u7ec4\u4ef6\uff0c\u4e0eReactor\u7684\u7ebf\u7a0b\u6a21\u578b\u76f8\u5bf9\u5e94\u3002\u8981\u4e86\u89e3\u4ec0\u4e48\u662f  ",(0,o.jsx)(t.code,{children:"EventLoop"})," \u540c\u65f6\u9700\u8981\u4e86\u89e3 ",(0,o.jsx)(t.code,{children:"EventLoopGroup\u3001EventExecutor\u3001EventExecutorGroup\u3001SingleThreadEventLoop"})," \u3002 \u8fd9\u4e9b\u7c7b\u4e4b\u95f4\u6709\u4ec0\u4e48\u5173\u7cfb\u5462\uff1f\u7814\u7a76\u8fc7\u4ee3\u7801\u7684\u4f1a\u53d1\u73b0\u8fd9\u4e2a\u8fd9\u4e9b\u7c7b\u4e4b\u95f4\u9519\u7efc\u590d\u6742\uff0c\u770b\u7684\u5934\u6709\u70b9\u6655\u3002\u4e0b\u9762\u6211\u4eec\u6765\u770b\u4e0b\u8fd9\u4e9b\u7c7b\u4e4b\u95f4\u7684\u5173\u7cfb\u3002"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:"https://raw.githubusercontent.com/mxsm/picture/main/netty/eventloop/NioEventLoopGroup.png",alt:"NioEventLoopGroup"})}),"\n",(0,o.jsx)(t.h3,{id:"2-eventexecutor\u548ceventexecutorgroup",children:"2. EventExecutor\u548cEventExecutorGroup"}),"\n",(0,o.jsx)(t.p,{children:"\u4e8b\u4ef6\u6267\u884c\u5668\u7528\u6765\u6267\u884c\u5904\u7406\u4e8b\u4ef6"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-java",children:"public interface EventExecutorGroup extends ScheduledExecutorService, Iterable<EventExecutor> {\n    //\u7701\u7565\u4ee3\u7801\n}\n"})}),"\n",(0,o.jsxs)(t.p,{children:["\u7ee7\u627f\u4e86 ",(0,o.jsx)(t.code,{children:"ScheduledExecutorService"})," \u8bf4\u660e\u662f\u4e00\u4e2a\u6807\u51c6\u7684JDK ",(0,o.jsx)(t.code,{children:"Executor"})," \u540c\u65f6\u63d0\u4f9b\u5b9a\u65f6\u670d\u52a1\u529f\u80fd(Netty\u5b9a\u65f6\u5fc3\u8df3\u5b9e\u73b0)\u3002"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-java",children:"public interface EventExecutor extends EventExecutorGroup {\n    //\u7701\u7565\u4ee3\u7801\n    @Override\n    EventExecutor next();\n}\n"})}),"\n",(0,o.jsx)(t.p,{children:"EventExecutorGroup\u7ba1\u7406\u4e86\u591a\u4e2aEventExecutor\uff0cEventExecutorGroup\u7531\u591a\u4e2aEventExecutor\u805a\u5408\u800c\u6210\u7684\u3002EventExecutor\u662f\u4e00\u4e2a\u7279\u6b8a\u7684EventExecutorGroup\uff0c\u5b83\u5e26\u6709\u4e00\u4e9b\u65b9\u4fbf\u7684\u65b9\u6cd5\u6765\u67e5\u770b\u7ebf\u7a0b\u662f\u5426\u5728\u4e8b\u4ef6\u5faa\u73af\u4e2d\u6267\u884c\u3002\u9664\u6b64\u4e4b\u5916\uff0c\u5b83\u8fd8\u6269\u5c55\u4e86EventExecutorGroup\uff0c\u5141\u8bb8\u4f7f\u7528\u901a\u7528\u7684\u65b9\u5f0f\u6765\u8bbf\u95ee\u65b9\u6cd5\u3002"}),"\n",(0,o.jsx)(t.h3,{id:"3-eventloop\u548ceventloopgroup",children:"3. EventLoop\u548cEventLoopGroup"}),"\n",(0,o.jsxs)(t.p,{children:["\u4ee3\u7801\u5b9e\u73b0\u4e0a\u6765\u770b\u9996\u5148 ",(0,o.jsx)(t.code,{children:"EventLoop"})," \u7ee7\u627f\u4e86 ",(0,o.jsx)(t.code,{children:"EventLoopGroup"})," \uff0c",(0,o.jsx)(t.code,{children:"EventLoop"})," \u662f ",(0,o.jsx)(t.code,{children:"EventLoopGroup"})," \u7684\u4e00\u79cd\u7279\u6b8a\u5b58\u5728\u3002\u5355\u4e2a\u7ebf\u7a0b\u7684\u53eb ",(0,o.jsx)(t.code,{children:"EventLoop"})," \u3002\u591a\u4e2a\u7ebf\u7a0b\u7684\u53eb",(0,o.jsx)(t.code,{children:"EventLoopGroup"}),"   \u5176\u6b21\u90fd\u7ee7\u627f\u4e86JDK\u7684 ",(0,o.jsx)(t.code,{children:"ScheduledExecutorService"})," \uff0c\u6240\u4ee5 ",(0,o.jsx)(t.code,{children:"EventLoop\u548cEventLoopGroup"}),"  \u53ef\u4ee5\u770b\u6210\u4e00\u4e2aJDK\u7684\u6807\u51c6 ",(0,o.jsx)(t.code,{children:"Executor"})," \u540c\u65f6\u652f\u6301\u5b9a\u65f6\u6267\u884c\u3002\u4e5f\u53ef\u4ee5\u7406\u89e3\u4e3aNetty\u81ea\u5df1\u5b9e\u73b0\u7684\u7ebf\u7a0b\u6c60\u3002 EventLoop\u7684\u76f8\u5f53\u4e8e\u7ebf\u7a0b\u6c60\u53ea\u6709\u4e00\u4e2a\u7ebf\u7a0b\uff0cEventLoopGroup\u7684\u662f\u591a\u4e2a\u7ebf\u7a0b\u7684\u7ebf\u7a0b\u6c60\u3002",(0,o.jsx)(t.code,{children:"EventLoopGroup"})," \u53ef\u4ee5\u770b\u505a\u662f\u7531 ",(0,o.jsx)(t.code,{children:"EventLoop"})," \u7ec4\u6210\u3002\u4e00\u65e6\u6ce8\u518c\uff0c\u5c06\u5904\u7406\u4e00\u4e2aChannel\u7684\u6240\u6709I/O\u64cd\u4f5c\u3002\u4e00\u4e2aEventLoop\u5b9e\u4f8b\u901a\u5e38\u4f1a\u5904\u7406\u591a\u4e2aChannel\uff0c\u4f46\u8fd9\u53ef\u80fd\u53d6\u51b3\u4e8e\u5b9e\u73b0\u7ec6\u8282\u548c\u5185\u90e8\u3002"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:"https://raw.githubusercontent.com/mxsm/picture/main/netty/eventloop/image-20220304001607454.png",alt:"image-20220304001607454"})}),"\n",(0,o.jsx)(t.h3,{id:"4singlethreadeventloop",children:"4.SingleThreadEventLoop"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"SingleThreadEventLoop"})," \u4f5c\u4e3aEvent\u5904\u7406\u7684\u5e95\u5c42\u5904\u7406\u7c7b\uff0c\u4ece\u6e90\u4ee3\u7801\u53ef\u4ee5\u770b\u51fa\u6765\uff1a"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-java",children:"public abstract class SingleThreadEventLoop extends SingleThreadEventExecutor implements EventLoop {\n    //\u7701\u7565\u4ee3\u7801\n}\n\npublic abstract class SingleThreadEventExecutor extends \n    AbstractScheduledEventExecutor implements OrderedEventExecutor {\n     //\u7701\u7565\u4ee3\u7801\n     private volatile Thread thread;\n}\n"})}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"SingleThreadEventExecutor"})," \u7c7b\u4e2d\u6709\u4e00\u4e2a\u7ebf\u7a0b\u53d8\u91cf\uff0c\u8fd9\u4e2a\u5c31\u662f\u7528\u6765\u5904\u7406Event\u7684\u3002"]}),"\n",(0,o.jsx)(t.h3,{id:"5-eventloop\u5230\u5e95\u662f\u4ec0\u4e48",children:"5. EventLoop\u5230\u5e95\u662f\u4ec0\u4e48\uff1f"}),"\n",(0,o.jsxs)(t.p,{children:["\u529f\u80fd\u4e3b\u8981\u7528\u6765\u5904\u7406Event\u7684\u6267\u884c\u5668\uff0c\u8fd9\u4e2a\u6267\u884c\u5668\u7b26\u5408JDK\u7684\u6267\u884c\u5668\u6807\u51c6\uff0c\u540c\u65f6\u5177\u5907\u5b9a\u65f6\u6267\u884c\u4efb\u52a1\u7684\u529f\u80fd\u3002\u4e5f\u53ef\u4ee5\u770b\u505a\u662fJDK\u7684 ",(0,o.jsx)(t.code,{children:"Executor"})," \u5b9e\u73b0\uff0c\u76f8\u5f53\u4e8eNetty\u7248\u672c\u7ebf\u7a0b\u6c60\u7684\u5b9e\u73b0\u3002"]}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsx)(t.p,{children:"\u6211\u662f\u8682\u8681\u80cc\u5927\u8c61\uff0c\u6587\u7ae0\u5bf9\u4f60\u6709\u5e2e\u52a9\u70b9\u8d5e\u5173\u6ce8\u6211\uff0c\u6587\u7ae0\u6709\u4e0d\u6b63\u786e\u7684\u5730\u65b9\u8bf7\u60a8\u65a7\u6b63\u7559\u8a00\u8bc4\u8bba~\u8c22\u8c22"}),"\n"]})]})}function a(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>l});var o=n(6540);const r={},c=o.createContext(r);function s(e){const t=o.useContext(c);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(c.Provider,{value:t},e.children)}}}]);