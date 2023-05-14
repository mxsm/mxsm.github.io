"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[8358],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>h});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),i=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=i(e.components);return a.createElement(s.Provider,{value:n},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=i(t),m=r,h=u["".concat(s,".").concat(m)]||u[m]||k[m]||l;return t?a.createElement(h,o(o({ref:n},p),{},{components:t})):a.createElement(h,o({ref:n},p))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=m;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c[u]="string"==typeof e?e:r,o[1]=c;for(var i=2;i<l;i++)o[i]=t[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5877:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>k,frontMatter:()=>l,metadata:()=>c,toc:()=>i});var a=t(7462),r=(t(7294),t(3905));const l={title:"Java NIO \u77e5\u8bc6\u68b3\u7406\u548c\u4f8b\u5b50",linkTitle:"Java NIO \u77e5\u8bc6\u68b3\u7406\u548c\u4f8b\u5b50",date:new Date("2022-03-07T00:00:00.000Z"),weight:202203071446},o=void 0,c={unversionedId:"java/java-se/javaio/java-nio-base",id:"java/java-se/javaio/java-nio-base",title:"Java NIO \u77e5\u8bc6\u68b3\u7406\u548c\u4f8b\u5b50",description:"1. \u6838\u5fc3\u7ec4\u4ef6",source:"@site/docs/java/java-se/javaio/java-nio-base.md",sourceDirName:"java/java-se/javaio",slug:"/java/java-se/javaio/java-nio-base",permalink:"/docs/java/java-se/javaio/java-nio-base",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/java/java-se/javaio/java-nio-base.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1684027896,formattedLastUpdatedAt:"May 14, 2023",frontMatter:{title:"Java NIO \u77e5\u8bc6\u68b3\u7406\u548c\u4f8b\u5b50",linkTitle:"Java NIO \u77e5\u8bc6\u68b3\u7406\u548c\u4f8b\u5b50",date:"2022-03-07T00:00:00.000Z",weight:202203071446},sidebar:"javase",previous:{title:"IO\u8be6\u89e3--\u5206\u7c7b",permalink:"/docs/java/java-se/javaio/io-explain"},next:{title:"Java NIO ByteBuffer\u4f7f\u7528\u56fe\u6587\u8be6\u89e3",permalink:"/docs/java/java-se/javaio/nio-bytebuffer"}},s={},i=[{value:"1. \u6838\u5fc3\u7ec4\u4ef6",id:"1-\u6838\u5fc3\u7ec4\u4ef6",level:3},{value:"2. Channels",id:"2-channels",level:3},{value:"2.1 SocketChannel",id:"21-socketchannel",level:4},{value:"2.2 SocketChannel\u7684\u64cd\u4f5c",id:"22-socketchannel\u7684\u64cd\u4f5c",level:4},{value:"2.3 ServerSocketChannel",id:"23-serversocketchannel",level:4},{value:"2.4 ServerSocketChannel\u64cd\u4f5c",id:"24-serversocketchannel\u64cd\u4f5c",level:3},{value:"3. Buffers",id:"3-buffers",level:3},{value:"4. Selectors",id:"4-selectors",level:3},{value:"4.1 \u521b\u5efaSelector",id:"41-\u521b\u5efaselector",level:4},{value:"4.2 \u521b\u5efaServerSocketChannel",id:"42-\u521b\u5efaserversocketchannel",level:4},{value:"4.3 \u4f7f\u7528Selector\u9009\u62e9Channel",id:"43-\u4f7f\u7528selector\u9009\u62e9channel",level:4},{value:"4.4 \u4f7f\u7528\u6848\u4f8b",id:"44-\u4f7f\u7528\u6848\u4f8b",level:4}],p={toc:i},u="wrapper";function k(e){let{components:n,...t}=e;return(0,r.kt)(u,(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"1-\u6838\u5fc3\u7ec4\u4ef6"},"1. \u6838\u5fc3\u7ec4\u4ef6"),(0,r.kt)("p",null,"\u8bfb\u5199\u5728Java NIO\u4e2d\u7684\u6700\u57fa\u672c\u64cd\u4f5c\uff0c\u53ef\u4ee5\u521b\u5efaBuffer\u7136\u540e\u4eceChannel\u4e2d\u8bfb\u53d6\u6570\u636e\uff0c\u540c\u65f6\u4e5f\u53ef\u4ee5\u5f80Channel\u4e2d\u5199\u5165\u6570\u636e\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/java/nio/NIO%E7%9A%84%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6.png",alt:"NIO\u7684\u6838\u5fc3\u7ec4\u4ef6"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Channels"),(0,r.kt)("li",{parentName:"ul"},"Buffers"),(0,r.kt)("li",{parentName:"ul"},"Selectors")),(0,r.kt)("p",null,"\u5728NIO\u4e2d\uff0c\u6211\u4eec\u4f7f\u7528\u901a\u9053\u548c\u7f13\u51b2\u533a\u3002NIO\u4e2d\u7684\u6240\u6709I/O\u90fd\u662f\u4ece\u4e00\u4e2a\u901a\u9053\u5f00\u59cb\u7684\u3002\u6570\u636e\u603b\u662f\u4ece\u7f13\u51b2\u533a\u5199\u5165\u5230\u901a\u9053\uff0c\u4ece\u901a\u9053\u8bfb\u53d6\u5230\u7f13\u51b2\u533a"),(0,r.kt)("h3",{id:"2-channels"},"2. Channels"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Channel")," \u5728 ",(0,r.kt)("strong",{parentName:"p"},"java.nio.channels")," \u5305\u4e0b\u9762\uff0c\u4e0b\u9762\u6765\u770b\u4e00\u4e0b\u7ee7\u627f\u5173\u7cfb\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/java/nio/Channel%E7%9A%84%E7%BB%A7%E6%89%BF%E5%85%B3%E7%B3%BB.png",alt:"Channel\u7684\u7ee7\u627f\u5173\u7cfb"})),(0,r.kt)("h4",{id:"21-socketchannel"},"2.1 SocketChannel"),(0,r.kt)("p",null,"SocketChannel\u88ab\u7528\u4e8eTCP\u7f51\u7edc\u901a\u4fe1\u94fe\u63a5\u4e00\u4e2aChannel\uff0c\u4e24\u79cd\u521b\u5efaSocketChannel\u7684\u65b9\u6cd5\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5f53\u6709\u8fde\u63a5\u5230\u8fbeServerSocketChannel\u7684\u65f6\u5019"),(0,r.kt)("li",{parentName:"ul"},"\u6253\u5f00SocketChannel\u5e76\u4e14\u8fde\u63a5\u670d\u52a1")),(0,r.kt)("p",null,"\u8ba9\u6211\u4eec\u770b\u770b\u4f7f\u7528Selector\u7684SocketChannel\u5ba2\u6237\u7aef-\u670d\u52a1\u5668\u901a\u4fe1\u6846\u67b6\u56fe\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/java/nio/SocketChannel-Client-Server-Communication.png",alt:"SocketChannel-Client-Server-Communication"})),(0,r.kt)("h4",{id:"22-socketchannel\u7684\u64cd\u4f5c"},"2.2 SocketChannel\u7684\u64cd\u4f5c"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6253\u5f00SocketChannel\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'SocketChannel sc = SocketChannel.open();  \nsc.connect(new InetSocketAddress("http://localhost", 8080));  \n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u4eceSocketChannel\u8bfb\u53d6\u6570\u636e\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"ByteBuffer bb = ByteBuffer.allocate(84);  \nint bytesRead = sc.read(bb);  \n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5f80SocketChannel\u5199\u5165\u6570\u636e\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'String newData = "The new String is writing in a file ..." + System.currentTimeMillis();  \nByteBuffer bb= ByteBuffer.allocate(48);  \nbb.clear();  \nbb.put(newData.getBytes());  \nbb.flip();  \nwhile(bb.hasRemaining()) {  \n    sc.write(bb);  \n}  \n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5173\u95edSocketChannel:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"sc.close();    \n")),(0,r.kt)("h4",{id:"23-serversocketchannel"},"2.3 ServerSocketChannel"),(0,r.kt)("p",null,"ServerSocketChanne\u88ab\u7528\u4e8eTCP\u7f51\u7edc\u901a\u4fe1\u94fe\u63a5\u4e00\u4e2aChannel\uff0c\u4f46\u662f\u4e3b\u8981\u7528\u4e8e\u670d\u52a1\u7aef"),(0,r.kt)("h3",{id:"24-serversocketchannel\u64cd\u4f5c"},"2.4 ServerSocketChannel\u64cd\u4f5c"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6253\u5f00ServerSocketChannel\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'ServerSocketChannel sc = ServerSocketChannel.open();  \nsc.connect(new InetSocketAddress("http://localhost", 8080));  \n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u76d1\u542c\u7aef\u53e3\u8fdb\u6765\u7684\u94fe\u63a5\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"while(true){  \n    SocketChannel sc = serverSocketChannel.accept();  \n}  \n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Tips\uff1a \u5f53\u6709\u8fde\u63a5\u63a5\u5165\u76d1\u542c\u8fd4\u56deSocketChannel")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u4eceServerSocketChannel\u8bfb\u6570\u636e:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ByteBuffer bb = ByteBuffer.allocate(84);  \nint bytesRead = sc.read(bb);  \n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5f80ServerSocketChannel\u5199\u6570\u636e:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'String newData = "The new String is writing in a file ..." + System.currentTimeMillis();  \nByteBuffer bb= ByteBuffer.allocate(48);  \nbb.clear();  \nbb.put(newData.getBytes());  \nbb.flip();  \nwhile(bb.hasRemaining()) {  \n    sc.write(bb);  \n}  \n')),(0,r.kt)("h3",{id:"3-buffers"},"3. Buffers"),(0,r.kt)("p",null,"\u4e0b\u9762\u770b\u4e00\u4e0bBuffer\u7684\u7ee7\u627f\u5173\u7cfb\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/java/nio/Buffer%E5%85%B3%E7%B3%BB.png",alt:"Buffer\u5173\u7cfb"})),(0,r.kt)("h3",{id:"4-selectors"},"4. Selectors"),(0,r.kt)("p",null,"Selector\u7528\u4e8e\u4f7f\u7528\u5355\u4e2a\u7ebf\u7a0b\u5904\u7406\u591a\u4e2a\u901a\u9053\u3002 \u56e0\u6b64\uff0c\u5b83\u9700\u8981\u66f4\u5c11\u7684\u7ebf\u7a0b\u6765\u5904\u7406\u901a\u9053\u3002 \u5bf9\u4e8e\u64cd\u4f5c\u7cfb\u7edf\u6765\u8bf4\uff0c\u7ebf\u7a0b\u4e4b\u95f4\u7684\u5207\u6362\u5f00\u9500\u5f88\u5927\u3002 \u56e0\u6b64\uff0c\u4e3a\u4e86\u63d0\u9ad8\u7cfb\u7edf\u7684\u6548\u7387"),(0,r.kt)("p",null,"\u4e00\u4e2aSelector\u5904\u7406\u591a\u4e2aChannel\u3002"),(0,r.kt)("h4",{id:"41-\u521b\u5efaselector"},"4.1 \u521b\u5efaSelector"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Selector selector = Selector.open();  \n")),(0,r.kt)("h4",{id:"42-\u521b\u5efaserversocketchannel"},"4.2 \u521b\u5efaServerSocketChannel"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'ServerSocketChannel serverSocket = ServerSocketChannel.open();  \nInetSocketAddress hostAddress = new InetSocketAddress("localhost", 8080);  \nserverSocket.bind(hostAddress);  \n')),(0,r.kt)("h4",{id:"43-\u4f7f\u7528selector\u9009\u62e9channel"},"4.3 \u4f7f\u7528Selector\u9009\u62e9Channel"),(0,r.kt)("p",null,"\u5728\u7528\u9009\u62e9\u5668\u6ce8\u518c\u4e00\u4e2a\u6216\u591a\u4e2a\u901a\u9053\u65f6\uff0c\u6211\u4eec\u53ef\u4ee5\u8c03\u7528select()\u65b9\u6cd5\u4e4b\u4e00\u3002\u8fd9\u4e2a\u65b9\u6cd5\u8fd4\u56de\u4e00\u4e2a\u901a\u9053\uff0c\u8be5\u901a\u9053\u4e3a\u6211\u4eec\u60f3\u8981\u6267\u884c\u7684\u4e8b\u4ef6\u51c6\u5907\u597d\u4e86\uff0c\u4f8b\u5982 connect, read, write \uff0c accept\u3002select\u65b9\u6cd5\u6709\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"int select():")," select()\u65b9\u6cd5\u8fd4\u56de\u7684\u6574\u6570\u503c\u544a\u77e5\u6709\u591a\u5c11Channel\u51c6\u5907\u597d\u8fdb\u884c\u901a\u4fe1\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"int select(long TS):")," \u548cselect()\u76f8\u540c\uff0c\u9664\u4e86\u5b83\u5728\u6700\u5927TS(\u6beb\u79d2)\u65f6\u95f4\u6bb5\u5185\u963b\u585e"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"int selectNow():")," \u975e\u963b\u585e\uff0c\u8fd4\u56de\u4efb\u4f55\u51c6\u5907\u597d\u7684\u901a\u9053")),(0,r.kt)("p",null,"\u4e00\u65e6\u8c03\u7528\u4e86\u4efb\u4f55\u4e00\u4e2aselect()\u65b9\u6cd5\uff0c\u8fd4\u56de\u4e86\u503c\u3002\u7136\u540e\u901a\u8fc7\u8c03\u7528Selector\u7684selectedkeys()\u83b7\u53d6\u5230selected key \u96c6\u5408\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Set<SelectionKey> selectedKeys = selector.selectedKeys();  \n")),(0,r.kt)("p",null,"\u4f8b\u5b50\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Set<SelectionKey> selectedKeys = selector.selectedKeys();  \nIterator<SelectionKey> keyIterator = selectedKeys.iterator();  \nwhile(keyIterator.hasNext()) {    \n    SelectionKey key = keyIterator.next();  \n    if(key.isConnectable()) {  \n        // The connection was established with a remote server.  \n    } else if (key.isAcceptable()) {  \n        // The connection was accepted by a ServerSocketChannel.  \n    } else if (key.isWritable()) {  \n        //  The channel is ready for writing  \n    } else if (key.isReadable()) {  \n        // The channel is ready for reading  \n    }  \n    keyIterator.remove();  \n}  \n")),(0,r.kt)("p",null,"\u5b8c\u6574\u7684\u9009\u62e9\u73af\u8def\u6846\u56fe\u5982\u4e0b\u6240\u793a:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/java/nio/select%20Loop%E7%A4%BA%E6%84%8F%E5%9B%BE.png",alt:null})),(0,r.kt)("h4",{id:"44-\u4f7f\u7528\u6848\u4f8b"},"4.4 \u4f7f\u7528\u6848\u4f8b"),(0,r.kt)("p",null,"\u670d\u52a1\u7aef\u4ee3\u7801\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'package com.github.mxsm.nio;\n\nimport java.net.InetSocketAddress;\nimport java.nio.ByteBuffer;\nimport java.nio.channels.SelectionKey;\nimport java.nio.channels.Selector;\nimport java.nio.channels.ServerSocketChannel;\nimport java.nio.channels.SocketChannel;\nimport java.nio.charset.StandardCharsets;\nimport java.util.Iterator;\nimport java.util.Set;\n\n/**\n * @author mxsm\n * @date 2022/3/10 23:26\n * @Since 1.0.0\n */\npublic class Server {\n\n    public static void main(String[] args) throws Exception{\n        Selector selector = Selector.open();\n        ServerSocketChannel ssc = ServerSocketChannel.open();\n        InetSocketAddress hostAddress = new InetSocketAddress("localhost", 8080);\n        ssc.bind(hostAddress);\n        ssc.configureBlocking(false);\n        int ops = ssc.validOps();\n        SelectionKey selectKy = ssc.register(selector, ops, null);\n        for (;;) {\n            int noOfKeys = selector.select();\n            if(noOfKeys <= 0){\n                continue;\n            }\n            Set selectedKeys = selector.selectedKeys();\n            Iterator itr = selectedKeys.iterator();\n            while (itr.hasNext()) {\n                SelectionKey ky = (SelectionKey) itr.next();\n                if (ky.isAcceptable()) {\n                    SocketChannel client = ssc.accept();\n                    client.configureBlocking(false);\n                    client.register(selector, SelectionKey.OP_READ);\n\n                }\n                else if (ky.isReadable()) {\n\n                    SocketChannel client = (SocketChannel) ky.channel();\n                    ByteBuffer buffer = ByteBuffer.allocate(256);\n                    client.read(buffer);\n                    String output = new String(buffer.array()).trim();\n                    System.out.println("\u63a5\u6536\u5ba2\u6237\u7aef\u4fe1\u606f: " + output);\n                    ByteBuffer byteBuffer1 = ByteBuffer.wrap(("\u65f6\u95f4\u6233\uff1a"+System.currentTimeMillis()).getBytes(\n                        StandardCharsets.UTF_8));\n                    client.write(byteBuffer1);\n                }\n                itr.remove();\n            }\n        }\n    }\n}\n')),(0,r.kt)("p",null,"\u5ba2\u6237\u7aef\u4ee3\u7801\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'package com.github.mxsm.nio;\n\nimport java.net.InetSocketAddress;\nimport java.nio.ByteBuffer;\nimport java.nio.channels.SocketChannel;\nimport java.nio.charset.StandardCharsets;\nimport java.util.concurrent.TimeUnit;\n\n/**\n * @author mxsm\n * @date 2022/3/10 23:30\n * @Since 1.0.0\n */\npublic class Client {\n\n    public static void main(String[] args) throws Exception{\n        InetSocketAddress hA = new InetSocketAddress("localhost", 8080);\n        SocketChannel client = SocketChannel.open(hA);\n        System.out.println("The Client is sending messages to server...");\n\n        for (;;) {\n            ByteBuffer buffer = ByteBuffer.wrap(("\u5ba2\u6237\u7aef\u65f6\u95f4\u6233\uff1a"+System.currentTimeMillis()).getBytes(\n                StandardCharsets.UTF_8));\n            client.write(buffer);\n            buffer.clear();\n            ByteBuffer buffer1 = buffer.allocate(256);\n            client.read(buffer1);\n            System.out.println("\u63a5\u6536\u670d\u52a1\u5668\u6d88\u606f\uff1a"+new String(buffer1.array(), StandardCharsets.UTF_8).trim());\n            TimeUnit.SECONDS.sleep(3);\n        }\n\n    }\n}\n')),(0,r.kt)("p",null,"\u8fd0\u884c\u7ed3\u679c\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/java/nio/nio%E8%BF%90%E8%A1%8C%E7%BB%93%E6%9E%9C.gif",alt:"nio\u8fd0\u884c\u7ed3\u679c"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6211\u662f\u8682\u8681\u80cc\u5927\u8c61\uff0c\u6587\u7ae0\u5bf9\u4f60\u6709\u5e2e\u52a9\u70b9\u8d5e\u5173\u6ce8\u6211\uff0c\u6587\u7ae0\u6709\u4e0d\u6b63\u786e\u7684\u5730\u65b9\u8bf7\u60a8\u65a7\u6b63\u7559\u8a00\u8bc4\u8bba~\u8c22\u8c22")))}k.isMDXComponent=!0}}]);