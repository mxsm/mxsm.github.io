"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[5500],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>c});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},m="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,c=m["".concat(o,".").concat(d)]||m[d]||f[d]||l;return n?a.createElement(c,i(i({ref:t},s),{},{components:n})):a.createElement(c,i({ref:t},s))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[m]="string"==typeof e?e:r,i[1]=p;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7023:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>f,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const l={title:"Netty\u56db\u5927\u7ec4\u4ef6\u4e4bByteBuf",linkTitle:"Netty\u56db\u5927\u7ec4\u4ef6\u4e4bByteBuf",date:new Date("2022-01-16T00:00:00.000Z"),weight:202201161638},i=void 0,p={unversionedId:"netty/netty-introduction/Netty-ByteBuf",id:"netty/netty-introduction/Netty-ByteBuf",title:"Netty\u56db\u5927\u7ec4\u4ef6\u4e4bByteBuf",description:"ByteBuf\u4f5c\u4e3aNetty\u7684\u6570\u636e\u5bb9\u5668\uff0c\u7f51\u7edc\u901a\u4fe1\u6d89\u53ca\u5230\u5b57\u8282\u5e8f\u5217\u7684\u79fb\u52a8\u3002\u9ad8\u6548\u6613\u7528\u7684\u6570\u636e\u7ed3\u6784\u5fc5\u4e0d\u53ef\u5c11\u3002\u66ff\u6362\u4e86Java NIO\u7684ByteBuffer,\u4e3b\u8981\u662fByteBuf\u66f4\u52a0\u9ad8\u6548\u548c\u6613\u7528\uff0c\u5b9e\u73b0\u4e86\u81ea\u52a8\u6269\u5bb9\u7b49\u7b49\u4e00\u4e9bByteBuffer\u4e0d\u5177\u5907\u7684\u529f\u80fd",source:"@site/docs/netty/netty-introduction/Netty-ByteBuf.md",sourceDirName:"netty/netty-introduction",slug:"/netty/netty-introduction/Netty-ByteBuf",permalink:"/docs/netty/netty-introduction/Netty-ByteBuf",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/netty/netty-introduction/Netty-ByteBuf.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1676193845,formattedLastUpdatedAt:"Feb 12, 2023",frontMatter:{title:"Netty\u56db\u5927\u7ec4\u4ef6\u4e4bByteBuf",linkTitle:"Netty\u56db\u5927\u7ec4\u4ef6\u4e4bByteBuf",date:"2022-01-16T00:00:00.000Z",weight:202201161638},sidebar:"netty",previous:{title:"Netty",permalink:"/docs/netty/"},next:{title:"Netty-ChannelHandler\u7ec4\u4ef6",permalink:"/docs/netty/netty-introduction/Netty-ChannelHandler"}},o={},u=[{value:"1. ByteBuf\u6570\u636e\u7ed3\u6784",id:"1-bytebuf\u6570\u636e\u7ed3\u6784",level:3},{value:"2. ByteBuf\u64cd\u4f5c",id:"2-bytebuf\u64cd\u4f5c",level:3},{value:"2.1 \u968f\u673a\u8bbf\u95ee\u7d22\u5f15",id:"21-\u968f\u673a\u8bbf\u95ee\u7d22\u5f15",level:4},{value:"2.2 \u987a\u5e8f\u8bbf\u95ee\u7d22\u5f15",id:"22-\u987a\u5e8f\u8bbf\u95ee\u7d22\u5f15",level:4},{value:"2.3 \u53ef\u4e22\u5f03\u5b57\u8282",id:"23-\u53ef\u4e22\u5f03\u5b57\u8282",level:4},{value:"2.4 \u53ef\u8bfb\u5b57\u8282\u548c\u53ef\u5199\u5b57\u8282",id:"24-\u53ef\u8bfb\u5b57\u8282\u548c\u53ef\u5199\u5b57\u8282",level:4},{value:"2.5 \u8bfb\u5199\u7d22\u5f15\u7ba1\u7406",id:"25-\u8bfb\u5199\u7d22\u5f15\u7ba1\u7406",level:4},{value:"3. ByteBuf\u7684\u5b9e\u73b0\u6e90\u7801\u89e3\u6790",id:"3-bytebuf\u7684\u5b9e\u73b0\u6e90\u7801\u89e3\u6790",level:3},{value:"3.1 \u6c60\u5316ByteBuf\u548c\u975e\u6c60\u5316ByteBuf",id:"31-\u6c60\u5316bytebuf\u548c\u975e\u6c60\u5316bytebuf",level:4},{value:"3.2 ByteBufAllocator",id:"32-bytebufallocator",level:4},{value:"3.3 \u975e\u6c60\u5316\u5185\u5b58\u5206\u914d",id:"33-\u975e\u6c60\u5316\u5185\u5b58\u5206\u914d",level:4},{value:"3.3.1 \u975e\u6c60\u5316\u5806\u5185\u5185\u5b58\u5206\u914d",id:"331-\u975e\u6c60\u5316\u5806\u5185\u5185\u5b58\u5206\u914d",level:5},{value:"3.3.1 \u975e\u6c60\u5316\u5806\u5916\u5185\u5b58\u5206\u914d",id:"331-\u975e\u6c60\u5316\u5806\u5916\u5185\u5b58\u5206\u914d",level:5},{value:"3.4 \u6c60\u5316\u5185\u5b58\u5206\u914d",id:"34-\u6c60\u5316\u5185\u5b58\u5206\u914d",level:4},{value:"4. \u603b\u7ed3",id:"4-\u603b\u7ed3",level:3}],s={toc:u},m="wrapper";function f(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"ByteBuf\u4f5c\u4e3aNetty\u7684\u6570\u636e\u5bb9\u5668\uff0c\u7f51\u7edc\u901a\u4fe1\u6d89\u53ca\u5230\u5b57\u8282\u5e8f\u5217\u7684\u79fb\u52a8\u3002\u9ad8\u6548\u6613\u7528\u7684\u6570\u636e\u7ed3\u6784\u5fc5\u4e0d\u53ef\u5c11\u3002\u66ff\u6362\u4e86Java NIO\u7684ByteBuffer,\u4e3b\u8981\u662fByteBuf\u66f4\u52a0\u9ad8\u6548\u548c\u6613\u7528\uff0c\u5b9e\u73b0\u4e86\u81ea\u52a8\u6269\u5bb9\u7b49\u7b49\u4e00\u4e9bByteBuffer\u4e0d\u5177\u5907\u7684\u529f\u80fd"),(0,r.kt)("h3",{id:"1-bytebuf\u6570\u636e\u7ed3\u6784"},"1. ByteBuf\u6570\u636e\u7ed3\u6784"),(0,r.kt)("p",null,"ByteBuf\u7684\u7279\u70b9\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u901a\u8fc7\u5de5\u5177\u7c7bUnpooled\u521b\u5efa")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u7d22\u5f15\u968f\u673a\u8bbf\u95ee")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u7d22\u5f15\u987a\u5e8f\u8bbf\u95ee")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u641c\u7d22\u64cd\u4f5c")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u7d22\u5f15\u7684Mark\u548cReset")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6d3e\u751f\u7f13\u51b2\u533a")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"ByteBuf\u548cJDK ByteBuffer\u80fd\u591f\u7075\u6d3b\u7684\u8f6c\u6362"))),(0,r.kt)("p",null,"\u5728ByteBuf\u5b9e\u73b0\u7684\u4e2d\uff08AbstractByteBuf\uff09\uff0c\u7ef4\u62a4\u4e86\u4e24\u4e2a\u53d8\u91cf\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"readerIndex -- \u8bfb\u7684\u5f53\u524d\u7d22\u5f15\u4f4d\u7f6e"),(0,r.kt)("li",{parentName:"ul"},"writerIndex -- \u5199\u7684\u5f53\u524d\u7d22\u5f15\u4f4d\u7f6e")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/netty/image-20220113222211485.png",alt:null})),(0,r.kt)("p",null,"\u540d\u79f0\u5df2 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"read"))," \u548c ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"write"))," \u5f00\u5934\u7684 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"ByteBuf"))," \u65b9\u6cd5\uff0c \u5c06\u4f1a\u63a8\u8fdb\u5bf9\u5e94\u7684\u7d22\u5f15\u3002\u800c\u4ee5 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"get"))," \u548c ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"set"))," \u5f00\u5934\u7684\u5219\u4e0d\u4f1a\u3002 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"ByteBuf"))," \u9ed8\u8ba4\u771f\u7684\u6700\u5927\u5bb9\u91cf\u4e3a ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Integer.MAX_VALUE"))),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/netty/image-20220113222344519.png",alt:"image-20220113222344519"})),(0,r.kt)("p",null,"readXXX\u548cwriteXXX\u5206\u522b\u63a8\u8fdbreaderIndex\u548cwriteIndex\u3002"),(0,r.kt)("h3",{id:"2-bytebuf\u64cd\u4f5c"},"2. ByteBuf\u64cd\u4f5c"),(0,r.kt)("h4",{id:"21-\u968f\u673a\u8bbf\u95ee\u7d22\u5f15"},"2.1 \u968f\u673a\u8bbf\u95ee\u7d22\u5f15"),(0,r.kt)("p",null,"\u901a\u8fc7 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"getBytes"))," \u7cfb\u5217\u63a5\u53e3\u6765\u5bf9ByteBuf\u8fdb\u884c\u968f\u673a\u8bbf\u95ee\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"}," ByteBuf buffer = Unpooled.buffer(3,3);\n buffer.writeBoolean(true);\n buffer.writeBoolean(true);\n buffer.getBytes(0, new byte[1]);\n System.out.println(buffer.readerIndex());\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Tips: \u7528getBytes\u968f\u673a\u8bbf\u95ee\u4e0d\u4f1a\u6539\u53d8readerIndex")),(0,r.kt)("h4",{id:"22-\u987a\u5e8f\u8bbf\u95ee\u7d22\u5f15"},"2.2 \u987a\u5e8f\u8bbf\u95ee\u7d22\u5f15"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/netty/ByteBuf%E7%B4%A2%E5%BC%95%E9%A1%BA%E5%BA%8F%E5%AD%98%E5%8F%96.png",alt:"ByteBuf\u7d22\u5f15\u987a\u5e8f\u5b58\u53d6"})),(0,r.kt)("p",null,"\u901a\u8fc7 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"readerIndex()"))," \u548c ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"writerIndex()"))," \u83b7\u53d6\u8bfbIndex\u548c\u5199Index\u3002"),(0,r.kt)("h4",{id:"23-\u53ef\u4e22\u5f03\u5b57\u8282"},"2.3 \u53ef\u4e22\u5f03\u5b57\u8282"),(0,r.kt)("p",null,"\u6807\u8bb0\u4e3a\u53ef\u4e22\u5f03\u5b57\u8282\u7684\u5206\u6bb5\u5305\u542b\u4e86\u5df2\u7ecf\u88ab\u8bfb\u8fc7\u7684\u5b57\u8282\u3002\u901a\u8fc7\u8c03\u7528 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"discardReadBytes()"))," \u65b9\u6cd5\uff0c \u53ef\u4ee5\u4e22\u5f03\u5b83\u4eec\u5e76\u56de\u6536\u7a7a\u95f4\u3002\u8fd9\u4e2a\u5206\u6bb5\u7684\u521d\u59cb\u5927\u5c0f\u4e3a 0\uff0c\u5b58\u50a8\u5728 readerIndex \u4e2d\uff0c\u4f1a\u968f\u7740 read \u64cd\u4f5c\u7684\u6267\u884c\u800c\u589e\u52a0\uff08 get\u64cd\u4f5c\u4e0d\u4f1a\u79fb\u52a8 readerIndex\uff09\u3002\u4f46\u662f\u8fd9\u4e2a\u53ef\u4ee5\u4e22\u5f03\u5e76\u4e0d\u662f\u5b57\u8282\u628a\u5df2\u7ecf\u8bfb\u7684\u5b57\u6bb5\u7684\u5b57\u8282\u4e0d\u8981\u4e86\uff0c\u800c\u662f\u628a\u5c1a\u672a\u8bfb\u7684\u5b57\u8282\u6570\u79fb\u5230\u6700\u5f00\u59cb\u3002(\u8fd9\u6837\u505a\u53ef\u80fd\u4f1a\u5bfc\u81f4\u5185\u5b58\u590d\u5236)"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/netty/ByteBuf%E4%B8%A2%E5%BC%83%E5%AD%97%E8%8A%82.png",alt:"ByteBuf\u4e22\u5f03\u5b57\u8282"})),(0,r.kt)("h4",{id:"24-\u53ef\u8bfb\u5b57\u8282\u548c\u53ef\u5199\u5b57\u8282"},"2.4 \u53ef\u8bfb\u5b57\u8282\u548c\u53ef\u5199\u5b57\u8282"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/netty/image-20220116155146649.png",alt:"image-20220116155146649"})),(0,r.kt)("h4",{id:"25-\u8bfb\u5199\u7d22\u5f15\u7ba1\u7406"},"2.5 \u8bfb\u5199\u7d22\u5f15\u7ba1\u7406"),(0,r.kt)("p",null,"\u901a\u8fc7\u8c03\u7528 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"markReaderIndex()"))," \u3001 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"markWriterIndex()"))," \u3001 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"resetWriterIndex()"))," \u548c ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"resetReaderIndex()"))," \u6765\u6807\u8bb0\u548c\u91cd\u7f6e ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"ByteBuf"))," \u7684 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"readerIndex"))," \u548c ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"writerIndex"))," \u3002"),(0,r.kt)("p",null,"\u4e5f\u53ef\u4ee5\u901a\u8fc7\u8c03\u7528 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"readerIndex(int)"))," \u6216\u8005 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"writerIndex(int)"))," \u6765\u5c06\u7d22\u5f15\u79fb\u52a8\u5230\u6307\u5b9a\u4f4d\u7f6e\u3002 \u8bd5\u56fe\u5c06\u4efb\u4f55\u4e00\u4e2a\u7d22\u5f15\u8bbe\u7f6e\u5230\u4e00\u4e2a\u65e0\u6548\u7684\u4f4d\u7f6e\u90fd\u5c06\u5bfc\u81f4\u4e00\u4e2a ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"IndexOutOfBoundsException"))," \u3002"),(0,r.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7\u8c03\u7528 clear()\u65b9\u6cd5\u6765\u5c06 readerIndex \u548c writerIndex \u90fd\u8bbe\u7f6e\u4e3a 0\u3002\u6ce8\u610f\uff0c ",(0,r.kt)("strong",{parentName:"p"},"\u8fd9\u5e76\u4e0d\u4f1a\u6e05\u9664\u5185\u5b58\u4e2d\u7684\u5185\u5bb9\u3002(\u5185\u5bb9\u8fd8\u4f9d\u7136\u5b58\u5e76\u4e0d\u662f\u5168\u90e8\u6e05\u7a7a\u6570\u636e)")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/netty/ByteBufclear.png",alt:"ByteBufclear"})),(0,r.kt)("h3",{id:"3-bytebuf\u7684\u5b9e\u73b0\u6e90\u7801\u89e3\u6790"},"3. ByteBuf\u7684\u5b9e\u73b0\u6e90\u7801\u89e3\u6790"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"ByteBuf"))," \u7684\u5b9e\u73b0\u53ef\u4ee5\u4ece\u4e09\u4e2a\u7eac\u5ea6\u6765\u770b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Pooled\u548cUnpooled"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Pooled\uff1a\u6bcf\u6b21\u7533\u8bf7\u5185\u5b58\u90fd\u662f\u4ece\u9884\u5148\u5206\u914d\u597d\u7684\u5185\u4ece\u7a7a\u95f4\u4e2d\u53d6\u51fa\u8fde\u7eed\u7684\u4e00\u6bb5\uff0c\u7528\u5b8c\u540e\u653e\u56de\u53bb\u3002\u7c7b\u4f3c\u4e8e\u7ebf\u7a0b\u6c60\u7684\u64cd\u4f5c"),(0,r.kt)("li",{parentName:"ul"},"Unpooled\uff1a\u6bcf\u6b21\u90fd\u662f\u7533\u8bf7\u65b0\u7684\u5185\u5b58"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Unsafe\u548c\u975eUnsafe"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Unsafe: \u901a\u8fc7Unsafe\u7c7b\u76f4\u63a5\u64cd\u4f5c\u5185\u5b58\uff0c\u5185\u5b58\u7ba1\u7406\u7531\u5f00\u53d1\u4eba\u5458"),(0,r.kt)("li",{parentName:"ul"},"\u975eUnsafe\uff1a\u901a\u8fc7JDK\u7684API\u64cd\u4f5c\u5185\u5b58\uff0c\u4e5f\u5c31\u662f\u5185\u5b58\u7684\u7ba1\u7406\u6709JVM\u6765\u7ba1\u7406"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Heap\u548cDirect"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Heap: JVM\u7684\u5806\u5185\u5b58"),(0,r.kt)("li",{parentName:"ul"},"Direct: \u5806\u5916\u5185\u5b58\u4e5f\u53eb\u76f4\u63a5\u5185\u5b58\uff0c\u901a\u8fc7\u8c03\u7528Unsafe\u7684API\u8fdb\u884c\u7269\u7406\u5185\u5b58\u7684\u5206\u914d\uff0c\u4e0d\u5728JVM\u5806\u5185\uff0c\u6240\u4ee5\u9700\u8981\u4f7f\u7528\u8005\u81ea\u5df1\u624b\u52a8\u91ca\u653e")))),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/netty/ByteBuf%E5%AE%9E%E7%8E%B0.png",alt:"ByteBuf\u5b9e\u73b0"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"ByteBuf"))," \u4e3b\u8981\u7684\u6709\u516b\u4e2a\u4e3b\u8981\u7684\u5177\u4f53\u5b9e\u73b0\u3002"),(0,r.kt)("h4",{id:"31-\u6c60\u5316bytebuf\u548c\u975e\u6c60\u5316bytebuf"},"3.1 \u6c60\u5316ByteBuf\u548c\u975e\u6c60\u5316ByteBuf"),(0,r.kt)("p",null,"\u6c60\u5316\u5185\u5b58\u4e3b\u8981\u662f\u7531Netty\u8fdb\u884c\u7ba1\u7406\uff0c\u4f7f\u7528\u5b8c\u6210\u540e\u91cd\u5199\u653e\u56de\u5185\u5b58\u6c60\u3002\u800c\u975e\u6c60\u5316\u5185\u5b58\u6bcf\u6b21\u90fd\u521b\u5efa\u65b0\u7684\u4f7f\u7528\u540e\u8fdb\u884c\u91ca\u653e\u3002"),(0,r.kt)("h4",{id:"32-bytebufallocator"},"3.2 ByteBufAllocator"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"ByteBufAllocator"))," \u63a5\u53e3\u662f\u5206\u914d ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"ByteBuf"))," \u7684\u9876\u5c42\u63a5\u53e3\uff0c\u8d1f\u8d23\u6240\u6709\u7c7b\u578b\u7684 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"ByteBuf"))," \u7c7b\u578b\u7684\u5185\u5b58\u5206\u914d\uff0c\u540c\u65f6\u5bf9\u4e8e\u5b9e\u73b0\u9700\u8981\u7ebf\u7a0b\u5b89\u5168\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"ByteBufAllocator"))," \u91cd\u8981\u65b9\u6cd5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"//\u5806\u5185\u8fd8\u5806\u5916\u53d6\u53d6\u51b3\u4e8e\u5177\u4f53\u5b9e\u73b0\nByteBuf buffer();\nByteBuf buffer(int initialCapacity);\nByteBuf buffer(int initialCapacity, int maxCapacity);\n\n//\u5806\u5916\u5185\u5b58\u5206\u914dByteBuf\nByteBuf directBuffer();\nByteBuf directBuffer(int initialCapacity);\nByteBuf directBuffer(int initialCapacity, int maxCapacity);\n\n//\u5806\u5185\u5b58\u5206\u914dByteVBuf\nByteBuf heapBuffer();\nByteBuf heapBuffer(int initialCapacity);\nByteBuf heapBuffer(int initialCapacity, int maxCapacity);\n")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/netty/image-20220116162623793.png",alt:"image-20220116162623793"})),(0,r.kt)("p",null,"\u4e0b\u9762\u901a\u8fc7\u6e90\u7801\u6765\u770b\u4e00\u4e0b\u5177\u4f53\u4f7f\u7528\u4f55\u79cd\u89c4\u5219\u6765\u8fdb\u884c\u5206\u914d\uff0c\u7b56\u7565\u662f\u4ec0\u4e48\uff1f\u770b\u4e00\u4e0b ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"AbstractByteBufAllocator"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public abstract class AbstractByteBufAllocator implements ByteBufAllocator {\n    \n    \n    protected AbstractByteBufAllocator() {\n        this(false);  //\u9ed8\u8ba4\u4f7f\u7528\u7684\u662fHeap\u5206\u914d\u65b9\u5f0f\n    }\n    \n    //\u901a\u8fc7preferDirect\u6765\u5224\u65ad\u662f\u5426\u4f7f\u7528\u5806\u5916\u5185\u5b58\u5206\u914d\u7684\u65b9\u5f0f\n    protected AbstractByteBufAllocator(boolean preferDirect) {\n        directByDefault = preferDirect && PlatformDependent.hasUnsafe(); //\u662f\u5426\u652f\u6301Unsafe\u65b9\u5f0f\u5206\u914d\u5185\u5b58\n        emptyBuf = new EmptyByteBuf(this);\n    }\n    \n    //\u7701\u7565\u90e8\u5206\u4ee3\u7801\n}\n")),(0,r.kt)("p",null,"\u4ece\u4e0a\u9762\u53ef\u4ee5\u770b\u51fa\u6765\u5806\u5185\u5206\u914d\u8fd8\u5806\u5916\u5206\u914d ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"ByteBuf"))," \u53d6\u51b3\u4e8e\u6784\u9020\u51fd\u6570\u53c2\u6570 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"preferDirect"))," \u4e3a true \u8fd8\u662f false\uff0c \u5728true\u7684\u60c5\u51b5\u4e0b\u7136\u540e\u5728\u5224\u65ad\u5e73\u53f0\u662f\u5426\u4f9d\u8d56 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Unsafe"))," \u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"//\u5177\u4f53\u7c7b\u5b9e\u73b0\nprotected abstract ByteBuf newHeapBuffer(int initialCapacity, int maxCapacity);\n\n//\u5177\u4f53\u7c7b\u5b9e\u73b0\nprotected abstract ByteBuf newDirectBuffer(int initialCapacity, int maxCapacity);\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"AbstractByteBufAllocator#newHeapBuffer"))," \u548c ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"AbstractByteBufAllocator#newDirectBuffer"))," \u4e3a\u62bd\u8c61\u65b9\u6cd5\uff0c\u5177\u4f53\u7684\u6267\u884c\u4f9d\u8d56\u4e8e\u5b9e\u73b0\u3002\u5b9e\u73b0\u7684\u7c7b\u6709\u4e24\u4e2a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"PooledByteBufAllocator")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"UnpooledByteBufAllocator"))),(0,r.kt)("p",null,"\u8fd9\u4e24\u4e2a\u5b9e\u73b0\u533a\u5206\u4e86\u6c60\u5316\u548c\u975e\u6c60\u5316\u3002\u800c\u5bf9\u4e8e\u662f\u4f7f\u7528Unsafe\u8fd8\u662f\u975eUnsafe\u662f\u81ea\u52a8\u8fdb\u884c\u5224\u65ad\u7684\u3002"),(0,r.kt)("h4",{id:"33-\u975e\u6c60\u5316\u5185\u5b58\u5206\u914d"},"3.3 \u975e\u6c60\u5316\u5185\u5b58\u5206\u914d"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"UnpooledByteBufAllocator"))," \u5b9e\u73b0\u4e86\u975e\u6c60\u5316\u7684 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"ByteBuf"))," \u5206\u914d\u7b56\u7565\uff0c\u5177\u4f53\u7684\u5b9e\u73b0\u6709\u4e24\u4e2a\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5806\u5185\u5185\u5b58\u5206\u914d"),(0,r.kt)("li",{parentName:"ul"},"\u5806\u5916\u5185\u5b58\u5206\u914d")),(0,r.kt)("h5",{id:"331-\u975e\u6c60\u5316\u5806\u5185\u5185\u5b58\u5206\u914d"},"3.3.1 \u975e\u6c60\u5316\u5806\u5185\u5185\u5b58\u5206\u914d"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"UnpooledByteBufAllocator#newHeapBuffer"))," \u8d1f\u8d23\u5206\u914d\u5806\u5185\u5185\u5b58\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"    @Override\n    protected ByteBuf newHeapBuffer(int initialCapacity, int maxCapacity) {\n        return PlatformDependent.hasUnsafe() ?\n                new InstrumentedUnpooledUnsafeHeapByteBuf(this, initialCapacity, maxCapacity) :\n                new InstrumentedUnpooledHeapByteBuf(this, initialCapacity, maxCapacity);\n    }\n")),(0,r.kt)("p",null,"\u901a\u8fc7 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"PlatformDependent.hasUnsafe"))," \u6765\u5224\u65ad\u64cd\u4f5c\u7cfb\u7edf\u662f\u5426\u652f\u6301 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Unsafe"))," \uff08\u6700\u7ec8\u8c03\u7528\u7684\u5224\u65ad\u65b9\u6cd5\uff09:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'    private static Throwable unsafeUnavailabilityCause0() {\n        if (isAndroid()) {\n            logger.debug("sun.misc.Unsafe: unavailable (Android)");\n            return new UnsupportedOperationException("sun.misc.Unsafe: unavailable (Android)");\n        }\n\n        if (isIkvmDotNet()) {\n            logger.debug("sun.misc.Unsafe: unavailable (IKVM.NET)");\n            return new UnsupportedOperationException("sun.misc.Unsafe: unavailable (IKVM.NET)");\n        }\n\n        Throwable cause = PlatformDependent0.getUnsafeUnavailabilityCause();\n        if (cause != null) {\n            return cause;\n        }\n\n        try {\n            boolean hasUnsafe = PlatformDependent0.hasUnsafe();\n            logger.debug("sun.misc.Unsafe: {}", hasUnsafe ? "available" : "unavailable");\n            return hasUnsafe ? null : PlatformDependent0.getUnsafeUnavailabilityCause();\n        } catch (Throwable t) {\n            logger.trace("Could not determine if Unsafe is available", t);\n            // Probably failed to initialize PlatformDependent0.\n            return new UnsupportedOperationException("Could not determine if Unsafe is available", t);\n        }\n    }\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u652f\u6301Unsafe\u521b\u5efa ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"InstrumentedUnpooledUnsafeHeapByteBuf"))),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"InstrumentedUnpooledUnsafeHeapByteBuf"))," \u8c03\u7528\u7684\u662f ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"UnpooledUnsafeHeapByteBuf#allocateArray"))," \u65b9\u6cd5\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},"//\u8fd9\u4e2a\u7c7b\u662fUnpooledByteBufAllocator\u7684\u5185\u90e8\u7c7b\nprivate static final class InstrumentedUnpooledUnsafeHeapByteBuf extends UnpooledUnsafeHeapByteBuf {\n        //\u7701\u7565\u90e8\u5206\u4ee3\u7801\n        @Override\n        protected byte[] allocateArray(int initialCapacity) {\n            //\u5206\u914d\u5185\u5b58\n            byte[] bytes = super.allocateArray(initialCapacity);\n            ((UnpooledByteBufAllocator) alloc()).incrementHeap(bytes.length);\n            return bytes;\n        }\n     \n }\n\n\npublic class UnpooledUnsafeHeapByteBuf extends UnpooledHeapByteBuf {\n    @Override\n    protected byte[] allocateArray(int initialCapacity) {\n        //\u5206\u914d\u5185\u5b58\n        return PlatformDependent.allocateUninitializedArray(initialCapacity);\n    }\n}\n")),(0,r.kt)("p",{parentName:"li"},"\u6700\u7ec8\u662f\u901a\u8fc7 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"PlatformDependent#allocateUninitializedArray"))," \u7684\u65b9\u6cd5\u6765\u5206\u914d\u5185\u5b58"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},"    public static byte[] allocateUninitializedArray(int size) {\n        return UNINITIALIZED_ARRAY_ALLOCATION_THRESHOLD < 0 || UNINITIALIZED_ARRAY_ALLOCATION_THRESHOLD > size ?\n                new byte[size] : PlatformDependent0.allocateUninitializedArray(size);\n    }\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4e0d\u652f\u6301Unsafe\u521b\u5efa ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"InstrumentedUnpooledHeapByteBuf"))),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"InstrumentedUnpooledHeapByteBuf"))," \u8c03\u7528\u7684\u662f ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"UnpooledHeapByteBuf#allocateArray"))," \u65b9\u6cd5\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},"    protected byte[] allocateArray(int initialCapacity) {\n        return new byte[initialCapacity];\n    }\n")),(0,r.kt)("p",{parentName:"li"},"\u76f4\u63a5\u901a\u8fc7 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"new"))," \u65b9\u5f0f\u521b\u5efa byte\u6570\u7ec4\u5206\u914d\u5185\u5b58"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8bf4\u660e\uff1a")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u5bf9\u4e8e\u652f\u6301Unsafe\u5206\u914d\u5806\u5185\u5185\u5b58\uff0c\u6240\u6709\u7684\u8bfb\u5199\u64cd\u4f5c\u90fd\u4f9d\u8d56Unsafe\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u4e0d\u652f\u6301Unsafe\uff0c\u901a\u8fc7new byte","[initialCapacity]","\u7684\u65b9\u5f0f\u521b\u5efa\u5b57\u8282\u6570\u5b57\uff0c\u8bfb\u5199\u90fd\u662f\u901a\u8fc7\u7d22\u5f15\uff0c\u5185\u5b58\u91ca\u653e\u90fd\u662f\u4f9d\u8d56JVM"))),(0,r.kt)("h5",{id:"331-\u975e\u6c60\u5316\u5806\u5916\u5185\u5b58\u5206\u914d"},"3.3.1 \u975e\u6c60\u5316\u5806\u5916\u5185\u5b58\u5206\u914d"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"UnpooledByteBufAllocator#newDirectBuffer"))," \u8d1f\u8d23\u5206\u914d\u5806\u5916\u5185\u5b58\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"    @Override\n    protected ByteBuf newDirectBuffer(int initialCapacity, int maxCapacity) {\n        final ByteBuf buf;\n        if (PlatformDependent.hasUnsafe()) {\n            buf = noCleaner ? new InstrumentedUnpooledUnsafeNoCleanerDirectByteBuf(this, initialCapacity, maxCapacity) :\n                    new InstrumentedUnpooledUnsafeDirectByteBuf(this, initialCapacity, maxCapacity);\n        } else {\n            buf = new InstrumentedUnpooledDirectByteBuf(this, initialCapacity, maxCapacity);\n        }\n        return disableLeakDetector ? buf : toLeakAwareBuffer(buf);\n    }\n\n")),(0,r.kt)("p",null,"\u5728\u975e\u6c60\u5316\u5806\u5916\u5185\u5b58\u5206\u914d\u540c\u6837\u5224\u65ad\u64cd\u4f5c\u7cfb\u7edf\u662f\u5426\u652f\u6301Unsafe"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u652f\u6301Unsafe"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"noCleaner\u4e3atrue,\u521b\u5efa ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"InstrumentedUnpooledUnsafeNoCleanerDirectByteBuf"))," "),(0,r.kt)("li",{parentName:"ul"},"noCleaner\u4e3afalse,\u521b\u5efa ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"InstrumentedUnpooledUnsafeDirectByteBuf"))," "))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4e0d\u652f\u6301Unsafe"),(0,r.kt)("p",{parentName:"li"},"\u521b\u5efa ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"InstrumentedUnpooledDirectByteBuf"))))),(0,r.kt)("p",null,"\u5bf9\u4e8e ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"InstrumentedUnpooledDirectByteBuf"))," \u800c\u8a00\u8c03\u7528\u4e86 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"UnpooledDirectByteBuf#allocateDirect"))," \u65b9\u6cd5\uff0c\u5e95\u5c42\u662fJavaNIO\u7684 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"ByteBuffer#allocateDirect"))," \u6765\u521b\u5efa\uff0c\u6700\u7ec8\u662f ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"new DirectByteBuffer(capacity)"))," \u5bf9\u8c61\u8fd4\u56de\u3002"),(0,r.kt)("h4",{id:"34-\u6c60\u5316\u5185\u5b58\u5206\u914d"},"3.4 \u6c60\u5316\u5185\u5b58\u5206\u914d"),(0,r.kt)("p",null,"\u200b\t\u6c60\u5316\u5185\u5b58\u4e3b\u8981\u7531 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"PooledByteBufAllocator"))," \u8fdb\u884c\u5206\u914d\uff0c\u5177\u4f53\u7684\u5b9e\u73b0\u53ef\u4ee5\u53c2\u7167 \u300a",(0,r.kt)("a",{parentName:"p",href:"https://blog.ljbmxsm.com/middlewares/netty/netty-source-code-analysis/netty-source-analysis-pooled-manage/"},"Netty\u6e90\u7801\u89e3\u6790-\u6c60\u5316\u5185\u5b58\u7ba1\u7406\u89e3\u6790"),"\u300b"),(0,r.kt)("h3",{id:"4-\u603b\u7ed3"},"4. \u603b\u7ed3"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Netty \u5f3a\u5927\u7684\u6570\u636e\u5bb9\u5668 ByteBuf\uff0c\u5b83\u4e0d\u4ec5\u89e3\u51b3\u4e86 JDK NIO \u4e2d ByteBuffer \u7684\u7f3a\u9677\uff0c\u800c\u4e14\u63d0\u4f9b\u4e86\u6613\u7528\u6027\u66f4\u5f3a\u7684\u63a5\u53e3\u3002\u8fd8\u80fd\u591f\u8f6c\u6362\u6210ByteBuffer"),(0,r.kt)("li",{parentName:"ul"},"ByteBuf\u8bfb\u5199\u91c7\u7528\u4e86\u4e0d\u540c\u7684\u6307\u9488\uff0c\u8bfb\u5199\u6a21\u5f0f\u53ef\u4ee5\u968f\u610f\u5207\u6362"),(0,r.kt)("li",{parentName:"ul"},"\u5bb9\u91cf\u53ef\u4ee5\u6309\u9700\u52a8\u6001\u6269\u5c55,\u652f\u6301\u6c60\u5316")))}f.isMDXComponent=!0}}]);