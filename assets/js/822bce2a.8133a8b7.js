"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[5622],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=c(n),m=l,d=p["".concat(i,".").concat(m)]||p[m]||y[m]||a;return n?r.createElement(d,o(o({ref:t},s),{},{components:n})):r.createElement(d,o({ref:t},s))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=m;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u[p]="string"==typeof e?e:l,o[1]=u;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4541:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>y,frontMatter:()=>a,metadata:()=>u,toc:()=>c});var r=n(7462),l=(n(7294),n(3905));const a={title:"Netty\u6e90\u7801\u89e3\u6790-\u7d2f\u52a0\u5668(Cumulator)\u5904\u7406\u7c98\u5305\u534a\u5305\u95ee\u9898",linkTitle:"Netty\u6e90\u7801\u89e3\u6790-\u7d2f\u52a0\u5668(Cumulator)\u5904\u7406\u7c98\u5305\u534a\u5305\u95ee\u9898",date:new Date("2022-03-17T00:00:00.000Z"),weight:202203172230},o=void 0,u={unversionedId:"netty/netty-source-code-analysis/netty-source-cumulator",id:"netty/netty-source-code-analysis/netty-source-cumulator",title:"Netty\u6e90\u7801\u89e3\u6790-\u7d2f\u52a0\u5668(Cumulator)\u5904\u7406\u7c98\u5305\u534a\u5305\u95ee\u9898",description:"1.\u524d\u8a00",source:"@site/docs/netty/netty-source-code-analysis/netty-source-cumulator.md",sourceDirName:"netty/netty-source-code-analysis",slug:"/netty/netty-source-code-analysis/netty-source-cumulator",permalink:"/docs/netty/netty-source-code-analysis/netty-source-cumulator",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/netty/netty-source-code-analysis/netty-source-cumulator.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1676193845,formattedLastUpdatedAt:"Feb 12, 2023",frontMatter:{title:"Netty\u6e90\u7801\u89e3\u6790-\u7d2f\u52a0\u5668(Cumulator)\u5904\u7406\u7c98\u5305\u534a\u5305\u95ee\u9898",linkTitle:"Netty\u6e90\u7801\u89e3\u6790-\u7d2f\u52a0\u5668(Cumulator)\u5904\u7406\u7c98\u5305\u534a\u5305\u95ee\u9898",date:"2022-03-17T00:00:00.000Z",weight:202203172230},sidebar:"netty",previous:{title:"Netty\u6e90\u7801\u5206\u6790-ChannelHandler\u65b9\u6cd5\u6267\u884c\u987a\u5e8f\u548c\u5982\u4f55\u5de5\u4f5c",permalink:"/docs/netty/netty-source-code-analysis/netty-source-channelhandler-order"},next:{title:"Netty\u6e90\u7801\u89e3\u6790-\u89e3\u7801\u5668(Decoder)\u662f\u5982\u4f55\u5de5\u4f5c",permalink:"/docs/netty/netty-source-code-analysis/netty-source-decoder"}},i={},c=[{value:"1.\u524d\u8a00",id:"1\u524d\u8a00",level:3},{value:"2.\u4ec0\u4e48\u662f\u7c98\u5305\u3001\u534a\u5305",id:"2\u4ec0\u4e48\u662f\u7c98\u5305\u534a\u5305",level:3},{value:"3.\u5982\u4f55\u5bfc\u81f4\u7c98\u5305\u3001\u534a\u5305",id:"3\u5982\u4f55\u5bfc\u81f4\u7c98\u5305\u534a\u5305",level:3},{value:"4.\u89e3\u7801\u5668\u4e2d\u7684\u7d2f\u52a0\u5668\u5982\u4f55\u89e3\u51b3\u7c98\u5305\u534a\u5305",id:"4\u89e3\u7801\u5668\u4e2d\u7684\u7d2f\u52a0\u5668\u5982\u4f55\u89e3\u51b3\u7c98\u5305\u534a\u5305",level:3},{value:"5. \u603b\u7ed3",id:"5-\u603b\u7ed3",level:3}],s={toc:c},p="wrapper";function y(e){let{components:t,...n}=e;return(0,l.kt)(p,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"1\u524d\u8a00"},"1.\u524d\u8a00"),(0,l.kt)("p",null,"Netty\u5c06\u7f51\u7edc\u4e2d\u7684bytes\u6570\u636e\u8f6c\u6362\u6210\u5bf9\u5e94\u7684\u6d88\u606f\u6570\u636e\uff0c\u8fd9\u4e2a\u5728Netty\u4e2d\u53eb\u505a\u89e3\u7801\u8fc7\u7a0b\u3002\u5728\u57fa\u4e8e\u6d41\u7684\u4f20\u8f93(\u5982TCP/IP)\u4e2d\uff0c\u63a5\u6536\u5230\u7684\u6570\u636e\u5b58\u50a8\u5728\u5957\u63a5\u5b57\u63a5\u6536\u7f13\u51b2\u533a\u4e2d\u3002\u4e0d\u5e78\u7684\u662f\uff0c\u57fa\u4e8e\u6d41\u7684\u4f20\u8f93\u7684\u7f13\u51b2\u533a\u4e0d\u662f\u5305\u961f\u5217\uff0c\u800c\u662f\u5b57\u8282\u961f\u5217\u3002\u8fd9\u610f\u5473\u7740\uff0c\u5373\u4f7f\u60a8\u5c06\u4e24\u4e2a\u6d88\u606f\u4f5c\u4e3a\u4e24\u4e2a\u72ec\u7acb\u7684\u5305\u53d1\u9001\uff0c\u64cd\u4f5c\u7cfb\u7edf\u4e5f\u4e0d\u4f1a\u5c06\u5b83\u4eec\u89c6\u4e3a\u4e24\u4e2a\u6d88\u606f\uff0c\u800c\u53ea\u662f\u5c06\u5b83\u4eec\u89c6\u4e3a\u4e00\u4e32\u5b57\u8282\u3002\u56e0\u6b64\uff0c\u4e0d\u80fd\u4fdd\u8bc1\u60a8\u6240\u8bfb\u7684\u5185\u5bb9\u4e0e\u8fdc\u7a0b\u540c\u884c\u6240\u5199\u7684\u5185\u5bb9\u5b8c\u5168\u4e00\u81f4\u3002\u800cNetty\u4e2d\u7684\u7d2f\u52a0\u5668\u5c31\u662f\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\u3002\u6211\u4eec\u5c06\u4ece\u4e00\u4e0b\u51e0\u4e2a\u65b9\u9762\u7ed3\u5408\u6765\u5206\u6790"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/netty/channelhandler/Netty%E7%B4%AF%E5%8A%A0%E5%99%A8.png",alt:"Netty\u7d2f\u52a0\u5668"})),(0,l.kt)("h3",{id:"2\u4ec0\u4e48\u662f\u7c98\u5305\u534a\u5305"},"2.\u4ec0\u4e48\u662f\u7c98\u5305\u3001\u534a\u5305"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u7c98\u5305\uff1a\u6bd4\u5982\u53d1\u9001\u65b9\u5e94\u8be5\u53d1\u9001ABC\u3001DEF,\u63a5\u6536\u65b9\u671f\u671b\u63a5\u6536\u5230\u7684\u662fABC\u3001DEF\u3002\u4f46\u662f\u7531\u4e8e\u7c98\u5305\u53ef\u80fd\u63a5\u6536\u5230\u7684\u662fABCDEF")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/netty/channelhandler/%E7%B2%98%E5%8C%85%E7%A4%BA%E6%84%8F%E5%9B%BE.png",alt:"\u7c98\u5305\u793a\u610f\u56fe"})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u534a\u5305\uff1a\u6bd4\u5982\u53d1\u9001\u65b9\u5e94\u8be5\u53d1\u9001ABCDEF,\u63a5\u6536\u65b9\u671f\u671b\u63a5\u6536\u5230\u7684\u662fABCDEF\u3002\u4f46\u662f\u7531\u4e8e\u5b58\u5728\u534a\u5305\u7684\u60c5\u51b5\u53ef\u80fd\u63a5\u6536\u5230\u7684\u662fABC\u3001DEF")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/netty/channelhandler/%E5%8D%8A%E5%8C%85%E7%A4%BA%E6%84%8F%E5%9B%BE.png",alt:"\u534a\u5305\u793a\u610f\u56fe"})),(0,l.kt)("h3",{id:"3\u5982\u4f55\u5bfc\u81f4\u7c98\u5305\u534a\u5305"},"3.\u5982\u4f55\u5bfc\u81f4\u7c98\u5305\u3001\u534a\u5305"),(0,l.kt)("p",null,"\u5e94\u7528A\u53d1\u9001\u6d88\u606f\u7ed9\u5e94\u7528B\u7684\u8fc7\u7a0b\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5e94\u7528A\u628a\u6d41\u6570\u636e\u53d1\u9001\u5230TCP\u53d1\u9001\u7f13\u51b2\u533a\u3002"),(0,l.kt)("li",{parentName:"ol"},"TCP\u53d1\u9001\u7f13\u51b2\u533a\u628a\u6570\u636e\u53d1\u9001\u5230\u8fbeB\u670d\u52a1\u5668TCP\u63a5\u6536\u7f13\u51b2\u533a\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5e94\u7528B\u4eceTCP\u63a5\u6536\u7f13\u51b2\u533a\u8bfb\u53d6\u6d41\u6570\u636e\u3002")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/netty/channelhandler/TCP%E5%8D%8A%E5%8C%85%E3%80%81%E7%B2%98%E5%8C%85%E4%BA%A7%E7%94%9F%E7%9A%84%E5%8E%9F%E5%9B%A0.png",alt:"TCP\u534a\u5305\u3001\u7c98\u5305\u4ea7\u751f\u7684\u539f\u56e0"})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u7c98\u5305\u7684\u539f\u56e0:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u53d1\u9001\u65b9\u6bcf\u6b21\u5199\u5165\u6570\u636e < Socket\u7f13\u51b2\u533a\u5927\u5c0f"),(0,l.kt)("li",{parentName:"ul"},"\u63a5\u6536\u65b9\u8bfb\u53d6Socket\u7f13\u51b2\u533a\u6570\u636e\u4e0d\u591f\u53ca\u65f6")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u534a\u5305\u7684\u539f\u56e0\uff1a")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u53d1\u9001\u65b9\u6bcf\u6b21\u5199\u5165\u6570\u636e > Socket\u7f13\u51b2\u533a\u5927\u5c0f"),(0,l.kt)("li",{parentName:"ul"},"\u53d1\u9001\u7684\u6570\u636e\u5927\u4e8e\u534f\u8bae\u7684 MTU (Maximum Transmission Unit\uff0c\u6700\u5927\u4f20\u8f93\u5355\u5143)\uff0c\u56e0\u6b64\u5fc5\u987b\u62c6\u5305")),(0,l.kt)("h3",{id:"4\u89e3\u7801\u5668\u4e2d\u7684\u7d2f\u52a0\u5668\u5982\u4f55\u89e3\u51b3\u7c98\u5305\u534a\u5305"},"4.\u89e3\u7801\u5668\u4e2d\u7684\u7d2f\u52a0\u5668\u5982\u4f55\u89e3\u51b3\u7c98\u5305\u534a\u5305"),(0,l.kt)("p",null,"\u5bf9\u4e8eNetty\u89e3\u7801\u5668\u6765\u8bf4\uff0c\u7c98\u5305\u8868\u793abytes\u8f6c\u6362\u6210\u4e00\u4e2a\u9700\u8981\u7684\u6d88\u606fMessage\u540e\u8fd8\u4f1a\u6709\u7701\u4e0b\u7684bytes\u3002\u800c\u534a\u5305\u5c31\u662fbytes\u4e0d\u591f\u89e3\u7801\u6210Message\u3002\u9700\u8981\u5c06\u5f53\u524d\u7684\u5b58\u4e0b\u6765\u7b49\u5f85\u65b0\u7684\u6570\u636e\u914d\u5408\u4e0a\u6b21\u8bfb\u53d6\u7684\u8fdb\u884c\u89e3\u7801\u3002\u800cNetty\u7684\u89e3\u7801\u5668\u4e2d\u7684\u7d2f\u52a0\u5668\u5c31\u662f\u5b9e\u73b0\u8fd9\u4e2a\u529f\u80fd\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"    public interface Cumulator {\n        /**\n         * Cumulate the given {@link ByteBuf}s and return the {@link ByteBuf} that holds the cumulated bytes.\n         * The implementation is responsible to correctly handle the life-cycle of the given {@link ByteBuf}s and so\n         * call {@link ByteBuf#release()} if a {@link ByteBuf} is fully consumed.\n         */\n        ByteBuf cumulate(ByteBufAllocator alloc, ByteBuf cumulation, ByteBuf in);\n    }\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Tips: Cumulator\u662f ByteToMessageDecoder\u7684\u5185\u90e8\u63a5\u53e3\u3002")),(0,l.kt)("p",null,"Netty\u4e2d",(0,l.kt)("inlineCode",{parentName:"p"},"Cumulator")," \u6709\u4e24\u4e2a\u5b9e\u73b0\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"MERGE_CUMULATOR(\u9ed8\u8ba4)"),(0,l.kt)("p",{parentName:"li"},"\u91c7\u7528\u7684\u662f\u5185\u5b58\u590d\u5236\uff0c\u5982\u679c\u7d2f\u52a0\u7684ByteBuf\u6bd4\u8f93\u5165\u7684ByteBuf\u5c0f\uff0c\u90a3\u5c31\u9700\u8981\u6269\u5bb9\uff0c\u518d\u590d\u5236\u8f93\u5165\u7684ByteBuf\u5230\u7c7b\u7684Byteful\u4e2d\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"COMPOSITE_CUMULATOR"),(0,l.kt)("p",{parentName:"li"},"\u4f7f\u7528CompositeByteBuf\uff0c\u901a\u8fc7\u5c06bytebuf\u6dfb\u52a0\u5230CompositeByteBuf\u6765\u7d2f\u79efbytebuf\uff0c\u56e0\u6b64\u5c3d\u53ef\u80fd\u4e0d\u8fdb\u884c\u5185\u5b58\u590d\u5236"))),(0,l.kt)("p",null,"\u7d2f\u52a0\u7684ByteBuf\u4f5c\u4e3a\u89e3\u7801\u5668\u7684\u53d8\u91cf\u3002\u8fd9\u4e2a\u5c31\u4fdd\u5b58\u4e86\u6ca1\u6709\u88ab\u89e3\u7801\u7684bytes\u3002\u7136\u540e\u540e\u7eed\u4f20\u5165\u7684bytes\u5c31\u5408\u5e76\u5230\u7d2f\u52a0\u7684ByteBuf\u4e0a\u9762\u3002\u7136\u540e\u6839\u636e\u62c6\u5305\u7684\u89c4\u8303\uff0c\u4f8b\u5982\u6309\u7167\u56fa\u5b9a\u957f\u5ea6\u3002\u90a3\u5c31\u8bfb\u53d6\u56fa\u5b9a\u7684\u957f\u5ea6\u7684bytes\u3002\u4e0d\u591f\u5c31\u518d\u6b21\u7b49\u5f85\u7d2f\u52a0\u3002"),(0,l.kt)("h3",{id:"5-\u603b\u7ed3"},"5. \u603b\u7ed3"),(0,l.kt)("p",null,"Netty\u5de7\u5999\u7684\u8fd0\u7528\u7d2f\u52a0\u5668\u5c06\u672a\u89e3\u7801\u7684ByteBuf\u4fdd\u5b58\u5230\u89e3\u7801\u5668\u7684ByteBuf\u53d8\u91cf\u3002\u540e\u7eed\u8fdb\u5165\u7684ByteBuf\u548c\u5df2\u7ecf\u7d2f\u52a0\u7684\u8fdb\u884c\u5408\u5e76\u7136\u540e\u518d\u6b21\u8fdb\u884c\u89e3\u7801\u3002\u5982\u6b64\u5f80\u590d\u5c31\u5b8c\u6210\u4e86\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u6211\u662f\u8682\u8681\u80cc\u5927\u8c61\uff0c\u6587\u7ae0\u5bf9\u4f60\u6709\u5e2e\u52a9\u70b9\u8d5e\u5173\u6ce8\u6211\uff0c\u6587\u7ae0\u6709\u4e0d\u6b63\u786e\u7684\u5730\u65b9\u8bf7\u60a8\u65a7\u6b63\u7559\u8a00\u8bc4\u8bba~\u8c22\u8c22")))}y.isMDXComponent=!0}}]);