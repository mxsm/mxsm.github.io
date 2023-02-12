"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[475],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>y});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),i=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=i(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=i(n),m=a,y=p["".concat(u,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(y,l(l({ref:t},s),{},{components:n})):r.createElement(y,l({ref:t},s))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c[p]="string"==typeof e?e:a,l[1]=c;for(var i=2;i<o;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5469:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>i});var r=n(7462),a=(n(7294),n(3905));const o={title:"Netty\u6e90\u7801\u89e3\u6790-\u89e3\u7801\u5668(Decoder)\u662f\u5982\u4f55\u5de5\u4f5c",linkTitle:"Netty\u6e90\u7801\u89e3\u6790-\u89e3\u7801\u5668(Decoder)\u662f\u5982\u4f55\u5de5\u4f5c",date:new Date("2022-03-16T00:00:00.000Z"),weight:202203161601},l=void 0,c={unversionedId:"netty/netty-source-code-analysis/netty-source-decoder",id:"netty/netty-source-code-analysis/netty-source-decoder",title:"Netty\u6e90\u7801\u89e3\u6790-\u89e3\u7801\u5668(Decoder)\u662f\u5982\u4f55\u5de5\u4f5c",description:"1. \u89e3\u7801\u5668(Decoder)\u6982\u8ff0",source:"@site/docs/netty/netty-source-code-analysis/netty-source-decoder.md",sourceDirName:"netty/netty-source-code-analysis",slug:"/netty/netty-source-code-analysis/netty-source-decoder",permalink:"/docs/netty/netty-source-code-analysis/netty-source-decoder",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/netty/netty-source-code-analysis/netty-source-decoder.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1676193845,formattedLastUpdatedAt:"Feb 12, 2023",frontMatter:{title:"Netty\u6e90\u7801\u89e3\u6790-\u89e3\u7801\u5668(Decoder)\u662f\u5982\u4f55\u5de5\u4f5c",linkTitle:"Netty\u6e90\u7801\u89e3\u6790-\u89e3\u7801\u5668(Decoder)\u662f\u5982\u4f55\u5de5\u4f5c",date:"2022-03-16T00:00:00.000Z",weight:202203161601},sidebar:"netty",previous:{title:"Netty\u6e90\u7801\u89e3\u6790-\u7d2f\u52a0\u5668(Cumulator)\u5904\u7406\u7c98\u5305\u534a\u5305\u95ee\u9898",permalink:"/docs/netty/netty-source-code-analysis/netty-source-cumulator"},next:{title:"Netty\u6e90\u7801\u89e3\u6790-EventLoop\u4ec0\u4e48\u65f6\u5019\u542f\u52a8\u8fd0\u884c",permalink:"/docs/netty/netty-source-code-analysis/netty-source-eventloop-startrun"}},u={},i=[{value:"1. \u89e3\u7801\u5668(Decoder)\u6982\u8ff0",id:"1-\u89e3\u7801\u5668decoder\u6982\u8ff0",level:3},{value:"2.\u89e3\u7801\u5668(Decoder)\u5982\u4f55\u5de5\u4f5c",id:"2\u89e3\u7801\u5668decoder\u5982\u4f55\u5de5\u4f5c",level:3},{value:"2.1 \u7d2f\u52a0\u5668Cumulator",id:"21-\u7d2f\u52a0\u5668cumulator",level:4},{value:"2.2 \u89e3\u7801\u5668\u5de5\u4f5c\u89e3\u6790",id:"22-\u89e3\u7801\u5668\u5de5\u4f5c\u89e3\u6790",level:4},{value:"3.\u603b\u7ed3",id:"3\u603b\u7ed3",level:3}],s={toc:i},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"1-\u89e3\u7801\u5668decoder\u6982\u8ff0"},"1. \u89e3\u7801\u5668(Decoder)\u6982\u8ff0"),(0,a.kt)("p",null,"\u4ee5\u7c7b\u4f3c\u6d41\u7684\u65b9\u5f0f\u5c06Bytes\u4ece\u4e00\u4e2aByteBuf\u4e2d\u901a\u8fc7\u89e3\u7801\u5668\u8f6c\u6362\u6210\u53e6\u4e00\u79cd\u6d88\u606f\u7c7b\u578b"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/netty/decoder/Decoder%E8%A7%A3%E7%A0%81.png",alt:"Decoder\u89e3\u7801"})),(0,a.kt)("p",null,"Netty\u4e2d\u7684\u89e3\u7801\u5668\u5c31\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"ChannelInboundHandlerAdapter"),"\u7684\u4e00\u4e2a\u5b9e\u73b0\u3002\u4e3b\u8981\u662f\u5c06\u7f51\u7edc\u4e2d\u7684bytes\u6570\u636e\u89e3\u7801\u6210\u7528\u6237\u9700\u8981\u7684\u6d88\u606f\u7c7b\u578b\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"TIps: \u89e3\u7801\u5668\u4e0d\u80fd\u4f7f\u7528@Sharable\u4fee\u9970\uff0c\u89e3\u7801\u5668\u53ea\u80fd\u5355\u72ec\u4e3a\u4e00\u4e2aChannel\u8fdb\u884c\u89e3\u7801\uff0c\u5982\u679c\u4e3a\u591a\u4e2a\u8fdb\u884c\u89e3\u7801\u4f1a\u5bfc\u81f4\u6570\u636e\u6df7\u4e71")),(0,a.kt)("h3",{id:"2\u89e3\u7801\u5668decoder\u5982\u4f55\u5de5\u4f5c"},"2.\u89e3\u7801\u5668(Decoder)\u5982\u4f55\u5de5\u4f5c"),(0,a.kt)("p",null,"\u89e3\u7801\u5668\u7684\u91cd\u8981\u4e00\u4e2a\u7c7b\u5c31\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"ByteToMessageDecoder")," \uff0c\u8be5\u7c7b\u7ee7\u627f\u4e86",(0,a.kt)("inlineCode",{parentName:"p"},"ChannelInboundHandlerAdapter")," \u3002\u6240\u4ee5\u4ece\u672c\u8d28\u4e0a\u6765\u8bf4\u89e3\u7801\u5668\u5176\u5b9e\u5c31\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"ChannelInboundHandler")," \u3002\u65e2\u7136\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"ChannelInboundHandler")," \u6570\u636e\u8bfb\u53d6\u5c31\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"ChannelInboundHandler#channelRead"),"\u65b9\u6cd5\u91cc\u9762\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/netty/decoder/image-20220320144205350.png",alt:"image-20220320144205350"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Tips: \u8fd9\u91cc\u4e3a\u4ec0\u4e48\u4f1a\u6709\u4e00\u4e2aif else\u7684\u5206\u652f\uff0c\u539f\u56e0\u5728\u4e8e\u5982\u679c\u5f00\u53d1\u8005ByteToMessageDecoder\u8bbe\u7f6e\u5728ServerBootstrap\u7684ServerSocketChannel\u7684handler\uff0c\u90a3\u4e48Object\u7684\u5bf9\u8c61\u7c7b\u578b\u5c31\u662fSocketChannel\uff0c\u8d70\u7684\u5c31\u662felse\u5206\u652f\uff0c\u5982\u679c\u662f\u8bbe\u7f6e\u5728ServerBootstrap\u7684childHandler\u90a3\u4e48\u90a3\u4e48Object\u7684\u5bf9\u8c61\u7c7b\u578b\u5c31\u662fByteBuf\uff0c\u8d70\u7684\u5c31\u662fif\u5206\u652f\u3002 \u8fd9\u91cc\u6211\u53ea\u9700\u8981\u5173\u6ce8if\u5206\u652f\u5373\u53ef")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/netty/decoder/%E8%A7%A3%E7%A0%81%E5%99%A8%E5%85%B7%E4%BD%93%E5%A4%84%E7%90%86%E6%B5%81%E7%A8%8B.png",alt:"\u89e3\u7801\u5668\u5177\u4f53\u5904\u7406\u6d41\u7a0b"})),(0,a.kt)("h4",{id:"21-\u7d2f\u52a0\u5668cumulator"},"2.1 \u7d2f\u52a0\u5668Cumulator"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ByteToMessageDecoder")," \u7c7b\u4e2d\u6709\u4e00\u4e2aCumulator\u63a5\u53e3\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public abstract class ByteToMessageDecoder extends ChannelInboundHandlerAdapter {\n        public interface Cumulator {\n        /**\n         * Cumulate the given {@link ByteBuf}s and return the {@link ByteBuf} that holds the cumulated bytes.\n         * The implementation is responsible to correctly handle the life-cycle of the given {@link ByteBuf}s and so\n         * call {@link ByteBuf#release()} if a {@link ByteBuf} is fully consumed.\n         */\n        ByteBuf cumulate(ByteBufAllocator alloc, ByteBuf cumulation, ByteBuf in);\n    }\n}\n")),(0,a.kt)("p",null,"\u4f5c\u7528\uff1a\u7d2f\u52a0\u4f20\u5165\u7684Byte\u6570\u636e\uff0c\u540c\u65f6\u4e5f\u662f\u4e3a\u4e86\u89e3\u51b3\u7c98\u5305\u548c\u534a\u5305\u7684\u95ee\u9898\u3002"),(0,a.kt)("p",null,"\u5047\u8bbe\u6211\u4eec\u6bcf\u6b21\u89e3\u7801\u6210\u7684\u6570\u636e\u90fd\u8981\u662f\uff1aABCD,\u7531\u4e8e\u5b58\u5728\u7c98\u5305\u548c\u534a\u5305\u7684\u60c5\u51b5\uff0c\u7d2f\u52a0\u5668\u4f1a\u8fdb\u884c\u5982\u4e0b\u64cd\u4f5c(\u4ee5\u534a\u5305\u4e3a\u4f8b)\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/netty/decoder/%E7%B4%AF%E5%8A%A0%E5%99%A8%E7%9A%84%E5%B7%A5%E4%BD%9C%E5%8E%9F%E7%90%86.png",alt:"\u7d2f\u52a0\u5668\u7684\u5de5\u4f5c\u539f\u7406"})),(0,a.kt)("p",null,"\u7b2c\u4e00\u6b21\u4f20\u5165\u5e76\u4e0d\u4f1a\u89e3\u7801\u51fa\u9700\u8981\u7684Message,\u4f1a\u5c06\u6570\u636e\u5b58\u5165ByteToMessageDecoder\u7684cumulation\u53d8\u91cf\uff0c\u7b2c\u4e8c\u6b21\u4f20\u5165\u6570\u636e\u4f1a\u5c06\u89e3\u7801\u5668\u7684\u4e4b\u524d\u6570\u636e\u548c\u4f20\u5165\u7684\u6570\u636e\u8fdb\u884c\u5408\u5e76\uff0ccumulation\u4e2d\u7684\u6570\u636e\u5c31\u53d8\u6210\u4e86\u5982\u4e0a\u56fe\u6240\u793a\uff0c\u7136\u540e\u8fdb\u884c\u89e3\u7801\u5c31\u89e3\u7801\u51fa\u4e86\u6240\u9700\u8981\u7684Message\u3002\u7136\u540e\u6e05\u7a7acumulation\u4e2d\u5df2\u7ecf\u89e3\u7801\u4e86\u7684\u6570\u636e\u3002"),(0,a.kt)("h4",{id:"22-\u89e3\u7801\u5668\u5de5\u4f5c\u89e3\u6790"},"2.2 \u89e3\u7801\u5668\u5de5\u4f5c\u89e3\u6790"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/netty/decoder/%E8%A7%A3%E7%A0%81%E5%99%A8%E7%9A%84%E6%95%B4%E4%B8%AA%E5%B7%A5%E4%BD%9C%E6%B5%81%E7%A8%8B%E5%9B%BE.png",alt:"\u89e3\u7801\u5668\u7684\u6574\u4e2a\u5de5\u4f5c\u6d41\u7a0b\u56fe"})),(0,a.kt)("p",null,"\u4ece\u7f51\u7edc\u4e2d\u8bfb\u53d6\u7684bytes\u6570\u7ec4\uff0c\u9996\u5148\u7ecf\u8fc7ByteToMessageDecoder\u7d2f\u52a0\u5668\u5904\u7406\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/netty/decoder/image-20220320155201164.png",alt:"image-20220320155201164"})),(0,a.kt)("p",null,"\u5982\u4e0a\u56fe1\u6240\u793a\uff1a\u7d2f\u52a0\u5668\u5904\u7406\u4f20\u5165\u7684\u6570\u636e\u548c\u524d\u4e00\u6b21\u5904\u7406\u5269\u4e0b\u7684\u6570\u636e\u5408\u5e76\u5230\u4e00\u8d77\uff0c\u7136\u540e\u8c03\u7528\u89e3\u7801\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/netty/decoder/image-20220320155451061.png",alt:"image-20220320155451061"})),(0,a.kt)("p",null,"\u2460\u53d8\u91cf\u662f\u7528\u6765\u4fdd\u5b58\u89e3\u7801\u540e\u7684\u6d88\u606f\uff0c\u2461\u5c31\u662f\u8c03\u7528\u89e3\u7801\u65b9\u6cd5",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"ByteToMessageDecoder#decode"))," \uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/netty/decoder/image-20220320155713635.png",alt:"image-20220320155713635"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"ByteToMessageDecoder#decode"))," \u662f\u4e00\u4e2a\u62bd\u8c61\u65b9\u6cd5\uff0c\u6240\u4ee5\u5177\u4f53\u770b\u89e3\u7801\u5668\u7684\u5b9e\u73b0\uff0c\u4f8b\u5982\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"RedisDecoder"),(0,a.kt)("li",{parentName:"ul"},"XmlDecoder")),(0,a.kt)("p",null,"\u7b49\u7b49\u4e00\u4e9bNetty\u5b9e\u73b0\u7684\u89e3\u7801\u5668\u3002\u89e3\u7801\u51fa\u6765\u7684\u7ed3\u6784\u5316\u5bf9\u8c61\uff0c\u4fdd\u5b58\u5728",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"List<Object>")),"\u4e2d\u3002\u5f53\u524d\u7684ChannelHandler\u89e3\u7801\u5b8c\u6210\u540e\u89e6\u53d1\u540e\u7eed\u7684ChannelHandler"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/netty/decoder/image-20220320160046448.png",alt:"image-20220320160046448"})),(0,a.kt)("p",null,"\u540e\u7eedChannelHandler\u7684channelRead\u65b9\u6cd5\u4e2d\u4f20\u5165\u7684\u503c\u5c31\u662f\u89e3\u7801\u540e\u7684Message\u7c7b\u578b\uff0c\u5982\u4e0b\u56feByteToMessageDecoder#fireChannelRead\u9759\u6001\u65b9\u6cd5\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/netty/decoder/image-20220320160201318.png",alt:"image-20220320160201318"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Tips: "),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"\u4f20\u5165\u7684Bytefuf\u5982\u4f55\u4e0d\u591f\u89e3\u7801\u6210\u9700\u8981\u7c7b\u578b\u7684Message\uff0c\u8fd9\u4e9bbytes\u4f1a\u88ab\u7d2f\u52a0\u5668\u4fdd\u5b58\u5728ByteToMessageDecoder\u7684\u79c1\u6709\u53d8\u91cfByteBuf cumulation\u4e2d"),(0,a.kt)("li",{parentName:"ul"},"\u89e3\u7801\u591a\u51fa\u6765\u7684\u540c\u6837\u4e5f\u4f1a\u88abbytes\u4f1a\u88ab\u7d2f\u52a0\u5668\u4fdd\u5b58\u5728ByteToMessageDecoder\u7684\u79c1\u6709\u53d8\u91cfByteBuf cumulation\u4e2d"),(0,a.kt)("li",{parentName:"ul"},"\u7d2f\u52a0\u5668\u7684\u4f5c\u7528\u5c31\u662f\u7528\u6765\u89e3\u51b3\u7c98\u5305\u548c\u534a\u5305\u7684\u95ee\u9898\u3002"))),(0,a.kt)("h3",{id:"3\u603b\u7ed3"},"3.\u603b\u7ed3"),(0,a.kt)("p",null,"\u89e3\u7801\u5668\u7684\u5173\u952e\u5c31\u662f\u7d2f\u52a0\u5668\uff0c\u7d2f\u52a0\u5668\u7684\u4f5c\u7528\u5c31\u662f\u89e3\u51b3\u4e86\u6570\u636e\u7684\u7c98\u5305\u548c\u534a\u5305\u95ee\u9898\u3002\u6570\u636e\u4e0d\u591f\u89e3\u6790\u6210\u5bf9\u5e94\u7684Message\u5c06\u6570\u636e\u4fdd\u5b58\u4e0b\u6765\uff0c\u7b49\u5f85\u540e\u7eed\u7684\u6570\u636e\u4f20\u5165\u8fdb\u884c\u5408\u5e76\u518d\u6b21\u8fdb\u884c\u89e3\u7801\uff0c\u5f53\u4e00\u6b21\u4f20\u5165\u7684\u6570\u636e\u8fc7\u591a\u4f46\u662f\u53c8\u4e0d\u80fd\u591f\u5b8c\u6574\u7684\u89e3\u6790\u6210\u591a\u4e2a(\u5927\u4e8e1)\u6d88\u606f\uff0c\u5c06\u89e3\u6790\u540e\u7684\u5269\u4e0b\u7684\u6570\u636e\u4fdd\u5b58\u4e0b\u6765\uff0c\u7b49\u5f85\u540e\u7eed\u7684\u6570\u636e\u4f20\u5165\u7136\u540e\u8fdb\u884c\u7d2f\u52a0\u3002\u8fd9\u6837\u5c31\u5b9e\u73b0\u4e86\u6574\u4e2a\u89e3\u7801\u7684\u8fc7\u7a0b\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6211\u662f\u8682\u8681\u80cc\u5927\u8c61\uff0c\u6587\u7ae0\u5bf9\u4f60\u6709\u5e2e\u52a9\u70b9\u8d5e\u5173\u6ce8\u6211\uff0c\u6587\u7ae0\u6709\u4e0d\u6b63\u786e\u7684\u5730\u65b9\u8bf7\u60a8\u65a7\u6b63\u7559\u8a00\u8bc4\u8bba~\u8c22\u8c22")))}d.isMDXComponent=!0}}]);