"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[1864],{6515:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>r,toc:()=>c});var i=n(4848),a=n(8453);const l={title:"Java NIO ByteBuffer\u4f7f\u7528\u56fe\u6587\u8be6\u89e3",linkTitle:"Java NIO ByteBuffer\u4f7f\u7528\u56fe\u6587\u8be6\u89e3",date:new Date("2022-09-16T00:00:00.000Z"),weight:202209162213},s=void 0,r={id:"java/java-se/javaio/nio-bytebuffer",title:"Java NIO ByteBuffer\u4f7f\u7528\u56fe\u6587\u8be6\u89e3",description:"\u5728Java\u7f51\u7edc\u5f00\u53d1\u7684\u8fc7\u7a0b\u4e2d\u63a5\u89e6NIO\u662f\u5fc5\u4e0d\u53ef\u5c11\u7684\uff0c\u5728NIO\u4e2d\u6709\u4e00\u4e2a\u91cd\u8981\u7684\u7ec4\u4ef6\u90a3\u5c31\u662f ByteBuffer \uff0c\u4e0b\u9762\u5c31\u6765\u901a\u8fc7\u56fe\u6587\u7684\u65b9\u5f0f\u6765\u8bb2\u89e3ByteBuffer\u7684\u4f7f\u7528\u4ee5\u53ca\u4e00\u4e9b\u64cd\u4f5c\u7684\u539f\u7406\u3002",source:"@site/docs/java/java-se/javaio/nio-bytebuffer.md",sourceDirName:"java/java-se/javaio",slug:"/java/java-se/javaio/nio-bytebuffer",permalink:"/docs/java/java-se/javaio/nio-bytebuffer",draft:!1,unlisted:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/java/java-se/javaio/nio-bytebuffer.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1710172454,formattedLastUpdatedAt:"Mar 11, 2024",frontMatter:{title:"Java NIO ByteBuffer\u4f7f\u7528\u56fe\u6587\u8be6\u89e3",linkTitle:"Java NIO ByteBuffer\u4f7f\u7528\u56fe\u6587\u8be6\u89e3",date:"2022-09-16T00:00:00.000Z",weight:202209162213},sidebar:"javase",previous:{title:"Java NIO \u77e5\u8bc6\u68b3\u7406\u548c\u4f8b\u5b50",permalink:"/docs/java/java-se/javaio/java-nio-base"},next:{title:"ArrayList\u6e90\u7801\u5206\u6790",permalink:"/docs/java/java-se/jdksourcereading/collection/ArrayList"}},o={},c=[{value:"1. ByteBuffer\u5b9e\u73b0\u539f\u7406",id:"1-bytebuffer\u5b9e\u73b0\u539f\u7406",level:3},{value:"2. \u8bfb\u5199\u6a21\u5f0f",id:"2-\u8bfb\u5199\u6a21\u5f0f",level:3},{value:"2.1 \u5199\u6a21\u5f0f",id:"21-\u5199\u6a21\u5f0f",level:4},{value:"2.2 \u8bfb\u6a21\u5f0f",id:"22-\u8bfb\u6a21\u5f0f",level:4},{value:"3. \u4f7f\u7528\u793a\u4f8b",id:"3-\u4f7f\u7528\u793a\u4f8b",level:3},{value:"3.1 flip-API",id:"31-flip-api",level:4},{value:"3.2 mark-API",id:"32-mark-api",level:4},{value:"3.3 compact-API",id:"33-compact-api",level:4},{value:"4. \u603b\u7ed3",id:"4-\u603b\u7ed3",level:3}];function p(t){const e={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...t.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(e.p,{children:["\u5728Java\u7f51\u7edc\u5f00\u53d1\u7684\u8fc7\u7a0b\u4e2d\u63a5\u89e6NIO\u662f\u5fc5\u4e0d\u53ef\u5c11\u7684\uff0c\u5728NIO\u4e2d\u6709\u4e00\u4e2a\u91cd\u8981\u7684\u7ec4\u4ef6\u90a3\u5c31\u662f ",(0,i.jsx)(e.strong,{children:(0,i.jsx)(e.code,{children:"ByteBuffer"})})," \uff0c\u4e0b\u9762\u5c31\u6765\u901a\u8fc7\u56fe\u6587\u7684\u65b9\u5f0f\u6765\u8bb2\u89e3ByteBuffer\u7684\u4f7f\u7528\u4ee5\u53ca\u4e00\u4e9b\u64cd\u4f5c\u7684\u539f\u7406\u3002"]}),"\n",(0,i.jsx)(e.h3,{id:"1-bytebuffer\u5b9e\u73b0\u539f\u7406",children:"1. ByteBuffer\u5b9e\u73b0\u539f\u7406"}),"\n",(0,i.jsx)(e.p,{children:"\u5bf9\u4e8eByteBuffer\u6765\u8bf4\u4e3b\u8981\u6709\u4e94\u4e2a\u91cd\u8981\u5c5e\u6027\u5982\u4e0b\uff1a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"mark\uff08int\u7c7b\u578b\uff09\uff1a"})," \u8bb0\u5f55\u5f53\u524d\u7d22\u5f15\u7684\u4f4d\u7f6e"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"position\uff08int\u7c7b\u578b\uff09:"})," \u8bfb\u6a21\u5f0f\uff1a\u8868\u793a\u63a5\u4e0b\u6765\u53ef\u4ee5\u8bfb\u53d6\u7684\u6570\u636e\u4f4d\u7f6e\uff0c \u5199\u6a21\u5f0f\uff1a\u8868\u793a\u53ef\u4ee5\u5199\u5165\u6570\u636e\u7684\u4f4d\u7f6e"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"limit\uff08int\u7c7b\u578b\uff09:"})," \u8bfb\u6a21\u5f0f\uff1a\u8868\u793a\u53ef\u4ee5\u5199\u5165\u6570\u636e\u5927\u5c0f\uff0c\u5199\u6a21\u5f0f\uff1a\u8868\u793a\u53ef\u4ee5\u5199\u5165\u6570\u636e\u5927\u5c0f\u3002 \u9ed8\u8ba4\u662fByteBuffer\u7684capacity"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"capacity\uff08int\u7c7b\u578b\uff09:"})," ByteBuffer\u7684\u5bb9\u91cf"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"hb\uff08byte array\uff09:"})," \u5b9e\u9645\u6570\u636e\u5b58\u50a8byte\u6570\u7ec4"]}),"\n"]}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:"Tips: \u51e0\u4e2a\u6570\u636e\u4e4b\u95f4\u7684\u5927\u5c0f\u5173\u7cfbmark <= position <= limit <= capacity"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u793a\u610f\u56fe\u5982\u4e0b\uff1a"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{src:"https://raw.githubusercontent.com/mxsm/picture/main/java/nio/ByteBuffer1.png",alt:"ByteBuffer1"})}),"\n",(0,i.jsx)(e.h3,{id:"2-\u8bfb\u5199\u6a21\u5f0f",children:"2. \u8bfb\u5199\u6a21\u5f0f"}),"\n",(0,i.jsx)(e.p,{children:"ByteBuffer\u4e3b\u8981\u6709\u8bfb\u5199\u6a21\u5f0f\uff0cJava\u539f\u751f\u7684\u548cNetty\u7684ByteBuf\u6709\u4e0d\u540c\u7684\u3002ByteBuffer\u7684\u8bfb\u5199\u6a21\u5f0f\u9700\u8981\u81ea\u5df1\u8fdb\u884c\u5207\u6362\u3002"}),"\n",(0,i.jsx)(e.h4,{id:"21-\u5199\u6a21\u5f0f",children:"2.1 \u5199\u6a21\u5f0f"}),"\n",(0,i.jsx)(e.p,{children:"\u5199\u6a21\u5f0f\u793a\u610f\u56fe\u5982\u4e0b\uff1a"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{src:"https://raw.githubusercontent.com/mxsm/picture/main/java/nio/ByteBuffer-write.png",alt:"ByteBuffer-write"})}),"\n",(0,i.jsx)(e.p,{children:"\u4ece\u4e0a\u56fe\u53ef\u4ee5\u770b\u51fa\u6765\u521d\u59cb\u5316\u540ecapacity\u662f\u56fa\u5b9a\u4e86\u3002limit\u7684\u503c\u53ef\u4ee5\u8fdb\u884c\u8bbe\u7f6e\u3002\u5f53\u6709\u65b0\u7684\u6570\u636e\u5199\u5165position\u6307\u9488\u4f1a\u8fdb\u884c\u79fb\u52a8\u3002\u80fd\u5199\u5165\u7684\u6570\u636e\u7531limit\u786e\u5b9a\u3002"}),"\n",(0,i.jsx)(e.h4,{id:"22-\u8bfb\u6a21\u5f0f",children:"2.2 \u8bfb\u6a21\u5f0f"}),"\n",(0,i.jsx)(e.p,{children:"\u8bfb\u6a21\u5f0f\u793a\u610f\u56fe\u5982\u4e0b\uff1a"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{src:"https://raw.githubusercontent.com/mxsm/picture/main/java/nio/ByteBuffer-read.png",alt:"ByteBuffer-read"})}),"\n",(0,i.jsx)(e.p,{children:"\u5982\u4f55\u628a\u5199\u5165\u7684\u6570\u636e\u8bfb\u53d6\u51fa\u6765\uff0c\u9996\u5148\u8981\u5c06\u5199\u6a21\u5f0f\u8f6c\u6362\u6210\u6210\u8bfb\u7684\u6a21\u5f0f\u3002\u5426\u5219\u4f1a\u8bfb\u6a21\u5f0f\u4f1a\u5728\u5728\u5199\u7684\u6307\u9488\u5f80\u540e\u8fdb\u884c\u8bfb\u53d6\u3002\u968f\u7740\u6570\u636e\u8bfb\u53d6position\u6307\u9488\u4e5f\u4f1a\u8fdb\u884c\u79fb\u52a8\uff0climit\u4f1a\u9650\u5236\u6307\u9488\u79fb\u52a8\u7684\u4f4d\u7f6e\u3002"}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsxs)(e.p,{children:["Tips: ",(0,i.jsx)(e.strong,{children:"flip"})," \u65b9\u6cd5\u7528\u4e8e\u8bfb\u5199\u6a21\u5f0f\u5207\u6362"]}),"\n"]}),"\n",(0,i.jsxs)(e.p,{children:["\u5bf9\u4e8eByteBuffer\u4e3b\u8981\u662f\u5f04\u6e05\u695a\u56db\u4e2a\u53d8\u91cf ",(0,i.jsx)(e.code,{children:"position\u3001limit\u3001mark\u3001capacity"})," \u56db\u8005\u4e4b\u95f4\u7684\u5173\u7cfb\u8f6c\u6362\u4ee5\u53ca\u8bfb\u5199\u7684\u5173\u7cfb\u8f6c\u6362\u3002"]}),"\n",(0,i.jsx)(e.h3,{id:"3-\u4f7f\u7528\u793a\u4f8b",children:"3. \u4f7f\u7528\u793a\u4f8b"}),"\n",(0,i.jsx)(e.p,{children:"\u4e0b\u9762\u4f1a\u7ed3\u5408\u4f8b\u5b50\u4ee5\u53ca\u793a\u56fe\u6765\u8bf4\u660eByteBuffer\u7684\u4e00\u4e9b\u57fa\u672c\u4f7f\u7528\u548c\u4e00\u4e9b\u5e38\u89c1API\u7684\u64cd\u4f5c\u3002\u5982\u4e0b\u662f\u4e00\u4e2a\u7b80\u5355\u7684\u4f7f\u7528\u793a\u4f8b\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:'public class ByteBufferExample {\n    public static void main(String[] args) {\n        ByteBuffer allocate = ByteBuffer.allocate(20); //\u5206\u914d\u4e00\u4e2a\u5927\u5c0f\u4e3a20bytes\u7684ByteBuffer\n        System.out.println(allocate.capacity()); //20\n        System.out.println(allocate.limit()); // 20\n        System.out.println(allocate.position()); //0\n        System.out.println("--------------------");\n        allocate.putLong(10L); \n        System.out.println(allocate.capacity());//20\n        System.out.println(allocate.limit());//20\n        System.out.println(allocate.position());//8\n        System.out.println("--------------------");\n        System.out.println(allocate.getLong());\n        System.out.println(allocate.capacity());//20\n        System.out.println(allocate.limit());//20\n        System.out.println(allocate.position());//16\n    }\n}\n'})}),"\n",(0,i.jsx)(e.p,{children:"\u4e0d\u540c\u7684\u53d8\u91cf\u53d8\u5316\u7684\u793a\u610f\u56fe\u5982\u4e0b\uff1a"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{src:"https://raw.githubusercontent.com/mxsm/picture/main/java/nio/ByteBuffer-example1.png",alt:"ByteBuffer-example1"})}),"\n",(0,i.jsx)(e.p,{children:"\u4e0a\u9762\u4ee3\u7801\u4e2d\u6ca1\u6709\u8fdb\u884c\u8bfb\u5199\u6a21\u5f0f\u8f6c\u6362\u7684\u3002position\u6307\u9488\u4e0d\u7ba1\u8bfb\u8fd8\u662f\u5199\u4f1a\u4e00\u76f4\u5f80capacity\u4f4d\u7f6e\u9760\u8fd1\u3002"}),"\n",(0,i.jsx)(e.h4,{id:"31-flip-api",children:"3.1 flip-API"}),"\n",(0,i.jsx)(e.p,{children:"\u4f7f\u7528\u793a\u4f8b\u4ee3\u7801\u5982\u4e0b\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:'    public static void main(String[] args) throws Exception{\n\n        ByteBuffer allocate = ByteBuffer.allocate(20); //\u5206\u914d\u4e00\u4e2a\u5927\u5c0f\u4e3a20bytes\u7684ByteBuffer\n        allocate.putLong(10L);\n        System.out.println(allocate.capacity()); //20\n        System.out.println(allocate.limit()); // 20\n        System.out.println(allocate.position()); //8\n        System.out.println("--------------------");\n        allocate.flip();\n        System.out.println(allocate.capacity()); //20\n        System.out.println(allocate.limit()); // 8\n        System.out.println(allocate.position()); //0\n        System.out.println("--------------------");\n        System.out.println(allocate.getLong()); //10\n        System.out.println(allocate.capacity()); //20\n        System.out.println(allocate.limit()); // 8\n        System.out.println(allocate.position()); //8\n        allocate.putLong(10L); //throw exception\n\n    }\n'})}),"\n",(0,i.jsx)(e.p,{children:"\u793a\u610f\u56fe\u5982\u4e0b\uff1a"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{src:"https://raw.githubusercontent.com/mxsm/picture/main/java/nio/ByteBuffer-example2.png",alt:"ByteBuffer-example1"})}),"\n",(0,i.jsxs)(e.p,{children:["\u4ece\u4e0a\u9762\u793a\u610f\u56fe\u53ef\u4ee5\u770b\u51fa\u8c03\u7528\u65b9\u6cd5 ",(0,i.jsx)(e.strong,{children:(0,i.jsx)(e.code,{children:"flip"})})," \u7684\u65f6\u5019\u4f1a\u5c06\u5199\u5165\u65f6\u5019\u56de\u7684position\u6307\u9488\u7684\u503c\u8d4b\u7ed9limit\u540c\u65f6\u91cd\u7f6eposition\u7684\u503c\u52300\u7684\u4f4d\u7f6e\u3002\u8fd9\u91cc\u5c31\u5b9e\u73b0\u4e86\u8bfb\u5199\u7684\u6a21\u5f0f\u8f6c\u6362\u3002\u5982\u679c\u518d\u6b21\u8bfb\u53d6\u7684\u65f6\u5019\u5c31\u80fd\u591f\u5c06\u5199\u5165\u5230ByteBuffer\u7684\u503c\u8bfb\u53d6\u51fa\u6765\u3002"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u65b9\u6cd5flip\u4e3b\u8981\u7528\u4e8e\u8bfb\u5199\u6a21\u5f0f\u7684\u5207\u6362"})}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:"Tips: \u5982\u679c\u4f60\u8c03\u7528flip\u65b9\u6cd5\u540e\u8bfb\u53d6\u7684\u6570\u636e\u6216\u8005\u5199\u5165\u7684\u6570\u636e\u8d85\u8fc7\u4e86limit\u4f1a\u6709\u9519\u8bef\u629b\u51fa"}),"\n"]}),"\n",(0,i.jsx)(e.h4,{id:"32-mark-api",children:"3.2 mark-API"}),"\n",(0,i.jsx)(e.p,{children:"\u4f7f\u7528\u4ee3\u7801\u5982\u4e0b\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:'    public static void main(String[] args) throws Exception{\n\n        ByteBuffer allocate = ByteBuffer.allocate(20); //\u5206\u914d\u4e00\u4e2a\u5927\u5c0f\u4e3a20bytes\u7684ByteBuffer\n        allocate.putLong(10L);\n        allocate.putInt(1);\n        allocate.mark();\n        System.out.println(allocate.capacity());//20\n        System.out.println(allocate.limit());//20\n        System.out.println(allocate.position());//12\n        System.out.println("-----------------------");\n        allocate.getLong();\n        System.out.println(allocate.capacity());//20\n        System.out.println(allocate.limit());//20\n        System.out.println(allocate.position());//20\n        allocate.reset();\n        System.out.println("-----------------------");\n        System.out.println(allocate.capacity());//20\n        System.out.println(allocate.limit());//20\n        System.out.println(allocate.position());//12\n    }\n'})}),"\n",(0,i.jsx)(e.p,{children:"\u793a\u610f\u56fe\u5982\u4e0b\uff1a"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{src:"https://raw.githubusercontent.com/mxsm/picture/main/java/nio/ByteBuffer-example-mark.png",alt:"ByteBuffer-example-mark"})}),"\n",(0,i.jsxs)(e.p,{children:["\u4ece\u4e0a\u56fe\u53ef\u4ee5\u77e5\u9053\u8c03\u7528 ",(0,i.jsx)(e.strong,{children:(0,i.jsx)(e.code,{children:"mark"})})," \u662f\u5c06position\u7684\u503c\u8d4b\u7ed9mark\u5c5e\u6027\u3002\u7136\u540e\u4f60\u8fdb\u884c\u63a5\u4e0b\u6765\u7684\u7ee7\u7eed\u8bfb\u5199\u64cd\u4f5c\u3002\u5f53\u4f60\u9700\u8981\u5c06position\u6062\u590d\u5230\u6807\u8bb0\u5b57\u6bb5\u7684\u65f6\u5019\u8c03\u7528**",(0,i.jsx)(e.code,{children:"reset"}),"** \u8fdb\u884c\u6062\u590d\u3002"]}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:"Tips: \u5982\u679c\u4f60\u8c03\u7528mark\u7136\u540e\u6709\u8c03\u7528\u4e86flip\uff0cflip\u4f1a\u5c06mark\u8fdb\u884c\u91cd\u7f6e\u3002"}),"\n"]}),"\n",(0,i.jsx)(e.h4,{id:"33-compact-api",children:"3.3 compact-API"}),"\n",(0,i.jsx)(e.p,{children:"\u4f7f\u7528\u4ee3\u7801\u5b9e\u4f8b\u5982\u4e0b\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:'public static void main(String[] args) throws Exception{\n\n    ByteBuffer allocate = ByteBuffer.allocate(20); //\u5206\u914d\u4e00\u4e2a\u5927\u5c0f\u4e3a20bytes\u7684ByteBuffer\n    allocate.putLong(10L);\n    allocate.flip();\n    allocate.getInt();\n    System.out.println(allocate.capacity());//20\n    System.out.println(allocate.limit());//8\n    System.out.println(allocate.position());//4\n    allocate.compact();\n    System.out.println("----------------------");\n    System.out.println(allocate.capacity());//20\n    System.out.println(allocate.limit());//20\n    System.out.println(allocate.position());//4\n}\n'})}),"\n",(0,i.jsx)(e.p,{children:"\u793a\u610f\u56fe\u5982\u4e0b\uff1a"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{src:"https://raw.githubusercontent.com/mxsm/picture/main/java/nio/ByteBuffer-example-compact.png",alt:"ByteBuffer-example-compact"})}),"\n",(0,i.jsxs)(e.p,{children:["\u4ece\u4e0a\u56fe\u53ef\u4ee5\u770b\u51fa\u6765 ",(0,i.jsx)(e.strong,{children:(0,i.jsx)(e.code,{children:"compact"})})," \u7684\u4e3b\u8981\u4f5c\u7528\uff1a",(0,i.jsx)(e.strong,{children:"\u7528\u6765\u6e05\u695a\u6389\u5f53\u524dposition\u6307\u9488\u4e4b\u524d\u7684\u6570\u636e\u7136\u540e\u5c06\u6307\u9488\u6307\u5411limit\u7684\u4f4d\u7f6e\u540c\u65f6\u5c06\u6574\u4e2a\u6307\u9488\u5f80\u5de6\u79fb\u52a8\u76f4\u5230\u66ff\u6362\u6389position\u5de6\u8fb9\u7684\u6570\u636e\uff0c\u4e0e\u6b64\u540c\u65f6\u8fd8\u4f1a\u5c06limit\u7684\u503c\u8bbe\u7f6e\u4e3acapacity\u3002"})]}),"\n",(0,i.jsx)(e.h3,{id:"4-\u603b\u7ed3",children:"4. \u603b\u7ed3"}),"\n",(0,i.jsx)(e.p,{children:"ByteBuffer\u603b\u4f53\u4f7f\u7528\u8d77\u6765\u548cNetty\u7684ByteBuf\u5bf9\u6bd4\u6ca1\u6709Netty ByteBuf\u597d\u7528\u3002\u4f46\u662f\u5bf9\u4e8e\u4f7f\u7528\u539f\u751f\u7684Java NIO\u7684\u5f00\u53d1\u6765\u8bf4\u4e5f\u662f\u53ef\u4ee5\u7684\u3002\u4e3b\u8981\u662f\u9700\u8981\u7528\u6237\u81ea\u5df1\u5bf9\u8bfb\u5199\u8fdb\u884c\u8f6c\u6362\u7b49\u64cd\u4f5c\uff0c\u4f7f\u7528\u8d77\u6765\u6bd4\u8f83\u7e41\u7410\u3002\u4f46\u662f\u6574\u4e2aByteBuffer\u7684\u5b9e\u73b0\u8fd8\u662f\u6bd4\u8f83\u7b80\u5355\u7684\u3002"}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsxs)(e.p,{children:["\u6211\u662f\u8682\u8681\u80cc\u5927\u8c61\uff0c\u6587\u7ae0\u5bf9\u4f60\u6709\u5e2e\u52a9\u70b9\u8d5e\u5173\u6ce8\u6211\uff0c\u6587\u7ae0\u6709\u4e0d\u6b63\u786e\u7684\u5730\u65b9\u8bf7\u60a8\u65a7\u6b63\u7559\u8a00\u8bc4\u8bba~\u8c22\u8c22! \u5927\u5bb6\u53ef\u4ee5Follow\u6211\u7684",(0,i.jsx)(e.a,{href:"https://github.com/mxsm",children:(0,i.jsx)(e.strong,{children:"GitHub mxsm"})})]}),"\n"]})]})}function u(t={}){const{wrapper:e}={...(0,a.R)(),...t.components};return e?(0,i.jsx)(e,{...t,children:(0,i.jsx)(p,{...t})}):p(t)}},8453:(t,e,n)=>{n.d(e,{R:()=>s,x:()=>r});var i=n(6540);const a={},l=i.createContext(a);function s(t){const e=i.useContext(l);return i.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function r(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(a):t.components||a:s(t.components),i.createElement(l.Provider,{value:e},t.children)}}}]);