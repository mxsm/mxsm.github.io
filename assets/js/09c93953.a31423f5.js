"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[2410],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,k=m["".concat(i,".").concat(d)]||m[d]||u[d]||l;return n?a.createElement(k,o(o({ref:t},c),{},{components:n})):a.createElement(k,o({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[m]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2986:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const l={title:"\u6df1\u5165\u7406\u89e3Java\u5bf9\u8c61\u5934Mark Word",linkTitle:"\u6df1\u5165\u7406\u89e3Java\u5bf9\u8c61\u5934Mark Word",date:new Date("2020-05-07T00:00:00.000Z")},o=void 0,s={unversionedId:"java/java-se/JVM/Java-object-header",id:"java/java-se/JVM/Java-object-header",title:"\u6df1\u5165\u7406\u89e3Java\u5bf9\u8c61\u5934Mark Word",description:"\u4e0b\u9762\u662f\u57fa\u4e8eJDK13 64\u4f4d",source:"@site/docs/java/java-se/JVM/Java-object-header.md",sourceDirName:"java/java-se/JVM",slug:"/java/java-se/JVM/Java-object-header",permalink:"/docs/java/java-se/JVM/Java-object-header",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/java/java-se/JVM/Java-object-header.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1678285899,formattedLastUpdatedAt:"Mar 8, 2023",frontMatter:{title:"\u6df1\u5165\u7406\u89e3Java\u5bf9\u8c61\u5934Mark Word",linkTitle:"\u6df1\u5165\u7406\u89e3Java\u5bf9\u8c61\u5934Mark Word",date:"2020-05-07T00:00:00.000Z"},sidebar:"javase",previous:{title:"Overview",permalink:"/docs/java/java-se"},next:{title:"\u7c7b\u7684\u52a0\u8f7d",permalink:"/docs/java/java-se/JVM/class-loader"}},i={},p=[{value:"1 \u5bf9\u8c61\u5934\u7684\u53c2\u770b\u795e\u5668",id:"1-\u5bf9\u8c61\u5934\u7684\u53c2\u770b\u795e\u5668",level:3},{value:"2 \u5bf9\u8c61\u5934\u7684\u7ec4\u6210",id:"2-\u5bf9\u8c61\u5934\u7684\u7ec4\u6210",level:3},{value:"3 Mark Word",id:"3-mark-word",level:3},{value:"4 Mark Word \u9501\u72b6\u6001",id:"4-mark-word-\u9501\u72b6\u6001",level:3},{value:"5 jol\u6570\u636e\u5982\u4f55\u67e5\u770b",id:"5-jol\u6570\u636e\u5982\u4f55\u67e5\u770b",level:3},{value:"5 Mark Word \u6b63\u5e38\u72b6\u6001",id:"5-mark-word-\u6b63\u5e38\u72b6\u6001",level:3},{value:"6 Mark Word \u504f\u5411\u9501",id:"6-mark-word-\u504f\u5411\u9501",level:3},{value:"7 Mark Word\u91cd\u91cf\u9501(\u81a8\u80c0\u9501)",id:"7-mark-word\u91cd\u91cf\u9501\u81a8\u80c0\u9501",level:3}],c={toc:p},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u4e0b\u9762\u662f\u57fa\u4e8eJDK13 64\u4f4d")),(0,r.kt)("p",null,"\u7f51\u4e0a\u5bf9\u4e8eJava\u5bf9\u8c61\u5934Mark Word\u6709\u5f88\u591a\u7684\u8d44\u6599\uff0c\u4f46\u662f\u5927\u591a\u6570\u90fd\u662f32\u7cfb\u7edf\u7684\uff0cjdk7\u751a\u81f31.6\u7684\u7248\u672c\u3002\u901a\u8fc7\u5bf9\u7f51\u4e0a\u8d44\u6599\u7684\u67e5\u627e\u6839\u636e\u81ea\u5df1\u7684\u4e00\u4e9b\u4ee3\u7801\u4e0b\u9762\u6765\u6df1\u5165\u7406\u89e3\u4e00\u4e0bJava\u5bf9\u8c61\u5934Mark Word\u7684\u7ec4\u6210\u3002"),(0,r.kt)("h3",{id:"1-\u5bf9\u8c61\u5934\u7684\u53c2\u770b\u795e\u5668"},"1 \u5bf9\u8c61\u5934\u7684\u53c2\u770b\u795e\u5668"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>org.openjdk.jol</groupId>\n  <artifactId>jol-core</artifactId>\n  <version>0.14</version>\n</dependency>\n")),(0,r.kt)("p",null,"\u901a\u8fc7\u4f7f\u7528\u5bf9\u8c61\u5934\u67e5\u770b\u795e\u5668\u6765\u5c0f\u8bd5\u725b\u5200\u4e00\u4e0b\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"package com.github.mxsm;\n\nimport org.openjdk.jol.info.ClassLayout;\n\npublic class HeaderView {\n\n    public static void main(String[] args) {\n        HeaderView headerView = new HeaderView();\n        System.out.println(ClassLayout.parseInstance(headerView).toPrintable());\n    }\n}\n\n")),(0,r.kt)("p",null,"\u901a\u8fc7\u8fd0\u884c\u7684\u7ed3\u679c\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"com.github.mxsm.HeaderView object internals:\n OFFSET  SIZE   TYPE DESCRIPTION                               VALUE\n      0     4        (object header)                           01 00 00 00 (00000001 00000000 00000000 00000000) (1)\n      4     4        (object header)                           00 00 00 00 (00000000 00000000 00000000 00000000) (0)\n      8     4        (object header)                           54 c3 00 f8 (01010100 11000011 00000000 11111000) (-134167724)\n     12     4        (loss due to the next object alignment)\nInstance size: 16 bytes\nSpace losses: 0 bytes internal + 4 bytes external = 4 bytes total\n")),(0,r.kt)("p",null,"\u901a\u8fc7\u53d1\u73b0\u5728\u6b63\u5e38\u4e0d\u8bbe\u7f6e\u4efb\u4f55\u53c2\u6570\u7684\u60c5\u51b5\u4e0b\uff0c\u5bf9\u8c61\u5934\u7684\u957f\u5ea6\u4e3a12\u4e2a\u5b57\u8282\u3002"),(0,r.kt)("p",null,"\u589e\u52a0\u4e00\u4e2aJVM\u53c2\u6570\uff08\u53d6\u6d88\u5bf9\u8c61\u6307\u9488\u538b\u7f29\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0bJDK\u662f\u5f00\u542f\u7684\uff09\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"-XX:-UseCompressedOops\n")),(0,r.kt)("p",null,"\u8fd0\u884c\u7684\u7ed3\u679c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"com.github.mxsm.HeaderView object internals:\n OFFSET  SIZE   TYPE DESCRIPTION                               VALUE\n      0     4        (object header)                           01 00 00 00 (00000001 00000000 00000000 00000000) (1)\n      4     4        (object header)                           00 00 00 00 (00000000 00000000 00000000 00000000) (0)\n      8     4        (object header)                           08 17 2e 1c (00001000 00010111 00101110 00011100) (472782600)\n     12     4        (object header)                           00 00 00 00 (00000000 00000000 00000000 00000000) (0)\nInstance size: 16 bytes\nSpace losses: 0 bytes internal + 0 bytes external = 0 bytes total\n")),(0,r.kt)("p",null,"\u6240\u4ee5\u5728\u4e0d\u5f00\u542f\u5bf9\u8c61\u6307\u9488\u538b\u7f29\u7684\u60c5\u51b5\u4e0b\u5bf9\u8c61\u5934\u7684\u957f\u5ea6\u4e3a16\u4e2a\u5b57\u8282\u3002"),(0,r.kt)("h3",{id:"2-\u5bf9\u8c61\u5934\u7684\u7ec4\u6210"},"2 \u5bf9\u8c61\u5934\u7684\u7ec4\u6210"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h4",{parentName:"li",id:"mark-word\u6807\u8bb0\u5b57\u6bb5"},"Mark Word(\u6807\u8bb0\u5b57\u6bb5)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h4",{parentName:"li",id:"klass-pointer\u7c7b\u578b\u6307\u9488"},"klass pointer(\u7c7b\u578b\u6307\u9488)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h4",{parentName:"li",id:"array-length\u6570\u7ec4\u957f\u5ea6"},"array length(\u6570\u7ec4\u957f\u5ea6)"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u666e\u901a\u5bf9\u8c61"),"\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"//\u5f00\u542f\u4e86\u6307\u9488\u538b\u7f29\n|--------------------------------------------------------------|\n|                     Object Header (96 bits)                  |\n|------------------------------------|-------------------------|\n|        Mark Word (64 bits)         | Klass Word (32 bits)    |\n|------------------------------------|-------------------------|\n //\u6ca1\u6709\u5f00\u542f\u6307\u9488\u538b\u7f29    \n|--------------------------------------------------------------|\n|                     Object Header (128 bits)                 |\n|------------------------------------|-------------------------|\n|        Mark Word (64 bits)         | Klass Word (64 bits)    |\n|------------------------------------|-------------------------|    \npublic class HeaderView {\n    //-XX:+UseCompressedOops\n    //-XX:-UseCompressedOops\n    public static void main(String[] args) {\n        Header headerView = new Header();\n        System.out.println(ClassLayout.parseInstance(headerView).toPrintable());\n    }\n}    \n")),(0,r.kt)("p",null,"-XX:+UseCompressedOops \u6307\u9488\u538b\u7f29\u5f00\u542f\u8fd0\u884c\u7ed3\u679c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"com.github.mxsm.Header object internals:\n OFFSET  SIZE   TYPE DESCRIPTION                               VALUE\n      0     4        (object header)                           01 00 00 00 (00000001 00000000 00000000 00000000) (1)\n      4     4        (object header)                           00 00 00 00 (00000000 00000000 00000000 00000000) (0)\n      8     4        (object header)                           92 c3 00 f8 (10010010 11000011 00000000 11111000) (-134167662)\n     12     4        (loss due to the next object alignment)\nInstance size: 16 bytes\nSpace losses: 0 bytes internal + 4 bytes external = 4 bytes total\n")),(0,r.kt)("p",null,"-XX:+UseCompressedOops \u6307\u9488\u538b\u7f29\u5173\u95ed\u8fd0\u884c\u7ed3\u679c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"com.github.mxsm.Header object internals:\n OFFSET  SIZE   TYPE DESCRIPTION                               VALUE\n      0     4        (object header)                           01 00 00 00 (00000001 00000000 00000000 00000000) (1)\n      4     4        (object header)                           00 00 00 00 (00000000 00000000 00000000 00000000) (0)\n      8     4        (object header)                           d0 1b 3b 1c (11010000 00011011 00111011 00011100) (473635792)\n     12     4        (object header)                           00 00 00 00 (00000000 00000000 00000000 00000000) (0)\nInstance size: 16 bytes\nSpace losses: 0 bytes internal + 0 bytes external = 0 bytes total\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6570\u7ec4\u5bf9\u8c61"),"\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"//\u5f00\u542f\u6307\u9488\u538b\u7f29\n|----------------------------------------------------------------------------------|\n|                                 Object Header (128 bits)                         |\n|--------------------------------|-----------------------|-------------------------|\n|        Mark Word(64bits)       | Klass Word(32bits)    |  array length(32bits)   |\n|--------------------------------|-----------------------|-------------------------|\n\n//\u6ca1\u6709\u5f00\u542f\u6307\u9488\u538b\u7f29\n|----------------------------------------------------------------------------------|\n|                                 Object Header (160 bits)                         |\n|--------------------------------|-----------------------|-------------------------|\n|        Mark Word(64bits)       | Klass Word(64bits)    |  array length(32bits)   |\n|--------------------------------|-----------------------|-------------------------|\n\n public class HeaderView {\n\n    public static void main(String[] args) {\n        Header[] headerView = new Header[100];\n        System.out.println(ClassLayout.parseInstance(headerView).toPrintable());\n    }\n\n}\n")),(0,r.kt)("p",null,"-XX:+UseCompressedOops \u6307\u9488\u538b\u7f29\u5f00\u542f\u8fd0\u884c\u7ed3\u679c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"[Lcom.github.mxsm.Header; object internals:\n OFFSET  SIZE                     TYPE DESCRIPTION                               VALUE\n      0     4                          (object header)                           01 00 00 00 (00000001 00000000 00000000 00000000) (1)\n      4     4                          (object header)                           00 00 00 00 (00000000 00000000 00000000 00000000) (0)\n      8     4                          (object header)                           05 c4 00 f8 (00000101 11000100 00000000 11111000) (-134167547)\n     12     4                          (object header)                           64 00 00 00 (01100100 00000000 00000000 00000000) (100)\n     16   400   com.github.mxsm.Header Header;.<elements>                        N/A\nInstance size: 416 bytes\nSpace losses: 0 bytes internal + 0 bytes external = 0 bytes total\n")),(0,r.kt)("p",null,"-XX:-UseCompressedOops \u6307\u9488\u538b\u7f29\u5173\u95ed\u8fd0\u884c\u7ed3\u679c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"[Lcom.github.mxsm.Header; object internals:\n OFFSET  SIZE                     TYPE DESCRIPTION                               VALUE\n      0     4                          (object header)                           01 00 00 00 (00000001 00000000 00000000 00000000) (1)\n      4     4                          (object header)                           00 00 00 00 (00000000 00000000 00000000 00000000) (0)\n      8     4                          (object header)                           b0 1d ab 1c (10110000 00011101 10101011 00011100) (480976304)\n     12     4                          (object header)                           00 00 00 00 (00000000 00000000 00000000 00000000) (0)\n     16     4                          (object header)                           64 00 00 00 (01100100 00000000 00000000 00000000) (100)\n     20     4                          (alignment/padding gap)                  \n     24   800   com.github.mxsm.Header Header;.<elements>                        N/A\nInstance size: 824 bytes\nSpace losses: 4 bytes internal + 0 bytes external = 4 bytes total\n")),(0,r.kt)("h3",{id:"3-mark-word"},"3 Mark Word"),(0,r.kt)("p",null,"\u6807\u8bb0\u5b57\u6bb5\u6bcf\u4e2a\u5b57\u6bb5\u8868\u793a\u4ec0\u4e48\uff0c\u6211\u4eec\u53ef\u4ee5\u4eceJVM\u7684\u6e90\u7801\u7740\u624b\u5206\u6790\uff0c\u4e0b\u9762\u6765\u770b\u4e00\u4e0b\u5728 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/openjdk/jdk/blob/jdk-13-ga/src/hotspot/share/oops/arrayKlass.hpp"},"OpenJDK\u4e2dmarkOop.hpp")," JDK\u6e90\u7801\u7684\u6587\u4ef6\u6ce8\u91ca\uff0c\u6ce8\u91ca\u8bf4\u660e\u4e86\u4f4d\u56fe\u7684\u8868\u793a\uff1a"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u8bf4\u660e:\u5728OpenJDK\u4e2d\u53d1\u73b015\u7248\u672c\u5df2\u7ecf\u6ca1\u6709markOop.hpp\u6587\u4ef6\u5b58\u5728\u4e86\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"//  64 bits:\n//  --------\n//  unused:25 hash:31 --\x3e| unused:1   age:4    biased_lock:1 lock:2 (normal object)\n//  JavaThread*:54 epoch:2 unused:1   age:4    biased_lock:1 lock:2 (biased object)\n//  PromotedObject*:61 ---------------------\x3e| promo_bits:3 -----\x3e| (CMS promoted object)\n//  size:64 -----------------------------------------------------\x3e| (CMS free block)\n//  \n//  \u4f7f\u7528COOPs\u6307\u9488\u538b\u7f29\u6280\u672f\n//  unused:25 hash:31 --\x3e| cms_free:1 age:4    biased_lock:1 lock:2 (COOPs && normal object)\n//  JavaThread*:54 epoch:2 cms_free:1 age:4    biased_lock:1 lock:2 (COOPs && biased object)\n//  narrowOop:32 unused:24 cms_free:1 unused:4 promo_bits:3 -----\x3e| (COOPs && CMS promoted object)\n//  unused:21 size:35 --\x3e| cms_free:1 unused:7 ------------------\x3e| (COOPs && CMS free block)\n\n//    [JavaThread* | epoch | age | 1 | 01]       lock is biased toward given thread\n//    [0           | epoch | age | 1 | 01]       lock is anonymously biased\n//\n//  - the two lock bits are used to describe three states: locked/unlocked and monitor.\n//\n//    [ptr             | 00]  locked             ptr points to real header on stack\n//    [header      | 0 | 01]  unlocked           regular object header\n//    [ptr             | 10]  monitor            inflated lock (header is wapped out)\n//    [ptr             | 11]  marked             used by markSweep to mark an object\n//                                               not valid at any other time\n")),(0,r.kt)("p",null,"\u5982\u4e0b\u56fe\uff1a"),(0,r.kt)("p",null,"\u6307\u9488\u538b\u7f29\u5f00\u542f\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/mxsm/picture/blob/main/java/jvm/markword%E6%8C%87%E9%92%88%E5%8E%8B%E7%BC%A9%E5%BC%80%E5%90%AF.png?raw=true",alt:"\u6307\u9488\u538b\u7f29\u5f00\u542f"})),(0,r.kt)("p",null,"\u6307\u9488\u538b\u7f29\u5173\u95ed"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/mxsm/picture/blob/main/java/jvm/markword%E6%8C%87%E9%92%88%E5%8E%8B%E7%BC%A9%E6%B2%A1%E5%BC%80%E5%90%AF.png?raw=true",alt:"\u6307\u9488\u538b\u7f29\u5173\u95ed"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u8bf4\u660e\uff1a"),(0,r.kt)("ol",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ol"},"\u8f7b\u91cf\u9501\u662f\u76f8\u5bf9\u4e8e\u504f\u5411\u9501\u6765\u8bf4\u7684"),(0,r.kt)("li",{parentName:"ol"},"\u65e0\u9501\u72b6\u6001\u662f\u752801\u6765\u8868\u793a"),(0,r.kt)("li",{parentName:"ol"},"\u91cd\u91cf\u9501\u5728\u82f1\u6587\u8bf4\u660e\u4e2d\u7528\u7684\u662f(inflated lock)\u81a8\u80c0\u9501"))),(0,r.kt)("h3",{id:"4-mark-word-\u9501\u72b6\u6001"},"4 Mark Word \u9501\u72b6\u6001"),(0,r.kt)("p",null,"\u901a\u8fc7\u5206\u6790JVM\u7684\u6e90\u7801\u6ce8\u91ca\u53ef\u4ee5\u53d1\u73b0Java\u5bf9\u8c61\u5934\u5728\u4e0d\u540c\u7684\u72b6\u6001\u4e0b\u4f1a\u6709\u4e0d\u540c\u7684\u8868\u73b0\u5f62\u5f0f\uff0c\u4e3b\u8981\u6709\u4e09\u79cd\u72b6\u6001\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u65e0\u9501\u72b6\u6001")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u52a0\u9501\u72b6\u6001")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"GC\u6807\u8bb0"))),(0,r.kt)("p",null,"Java\u4e2d\u4e0a\u9501\u53ef\u4ee5\u7406\u89e3\u4e3a\u7ed9\u5bf9\u8c61\u4e0a\u9501\uff0c\u4e5f\u5c31\u662f\u6539\u53d8\u5bf9\u8c61\u5934\u7684\u72b6\u6001(\u9501\u7684\u72b6\u6001)\u5982\u679c\u6210\u529f\u4e0a\u9501\u90a3\u4e48\u5c31\u8fdb\u5165\u540c\u6b65\u7684\u4ee3\u7801\u5757\u4e2d\u3002Java\u4e2d\u9501\u53c8\u5206\u4e3a\u4e09\u7c7b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u504f\u5411\u9501(01)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u8f7b\u91cf\u9501(00)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u91cd\u91cf\u9501(10)"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u8bf4\u660e\uff1a01\u300100\u300110 \u662f\u5bf9\u8c61\u5934\u4e2d\u9501\u7684\u4e24\u4f4d\u7684\u8868\u793a")),(0,r.kt)("p",null,"\u4e0d\u540c\u7684\u9501\u6548\u7387\u4e5f\u4e0d\u4e00\u6837\u3002"),(0,r.kt)("h3",{id:"5-jol\u6570\u636e\u5982\u4f55\u67e5\u770b"},"5 jol\u6570\u636e\u5982\u4f55\u67e5\u770b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'package com.github.mxsm;\n\nimport org.openjdk.jol.info.ClassLayout;\n\n/**\n * @author mxsm\n * @Date 2021/1/21\n * @Since\n */\npublic class HeaderView {\n\n    public static void main(String[] args) {\n        Header headerView = new Header();\n        System.out.println("HashCode\u5341\u516d\u8fdb\u5236-----------\x3e"+Integer.toHexString(headerView.hashCode()));\n        System.out.println(ClassLayout.parseInstance(headerView).toPrintable());\n    }\n\n}\n')),(0,r.kt)("p",null,"\u8fd0\u884c\u7ed3\u679c:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/mxsm/picture/blob/main/java/jvm/jol%E6%95%B0%E6%8D%AE%E5%A6%82%E4%BD%95%E6%9F%A5%E7%9C%8B.png?raw=true",alt:null})),(0,r.kt)("p",null,"\u7528\u793a\u610f\u56fe\u6765\u8868\u793aMark Word\u7684\u6570\u636e\u6392\u5217\u7ed3\u5408jol\u6253\u5370\u7684\u6570\u636e\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/mxsm/picture/blob/main/java/jvm/markword%E4%BD%8D%E5%9B%BE%E5%9B%BE%E8%A7%A3.png?raw=true",alt:null})),(0,r.kt)("p",null,"\u6392\u5217\u5982\u4e0a\u56fe\u5c31\u80fd\u548c\u4e0a\u9762\u6253\u5370\u7684\u5bf9\u6bd4\u51fa\u6765\u4e86\u3002\u8fd9\u6837\u4e5f\u5c31\u89e3\u91ca\u4e86\u4e3a\u4ec0\u4e48\u5934\u90e8\u672a\u4f7f\u7528\u768425\u4e2abyte"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u8bf4\u660e\uff1a\u901a\u8fc7\u4e0a\u9762\u7684\u9501\u7684\u4e24\u4e2a\u4f4d\u6807\u8bc6\u53ef\u4ee5\u770b\u51fa\u6765\uff0c\u5728\u6ca1\u6709\u67b7\u9501\u7684\u65f6\u5019\u5e94\u8be5\u662f01\u548c\u56fe\u4e2d\u4e5f\u4e00\u4e00\u5bf9\u4e0a")),(0,r.kt)("h3",{id:"5-mark-word-\u6b63\u5e38\u72b6\u6001"},"5 Mark Word \u6b63\u5e38\u72b6\u6001"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u90fd\u662f\u5728\u5f00\u542f\u6307\u9488\u538b\u7f29\u7684\u60c5\u51b5\u4e0b(\u8fd9\u4e2a\u4e5f\u662fJVM\u7684\u9ed8\u8ba4)\uff0c\u9996\u5148\u770b\u4e00\u4e0bHeader\u7c7b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public class Header {\n\n    private boolean flag;\n\n    private int index;\n\n    private long date;\n\n    private float flt;\n\n    private double db;\n\n    private byte bytes;\n\n    private String string;\n\n    private char ch;\n\n}\n\npublic class HeaderView {\n\n    public static void main(String[] args) {\n        Header headerView = new Header();\n        System.out.println("HashCode\u5341\u516d\u8fdb\u5236-----------\x3e"+Integer.toHexString(headerView.hashCode()));\n        System.out.println(ClassLayout.parseInstance(headerView).toPrintable());\n    }\n\n}\n')),(0,r.kt)("p",null,"\u6b63\u5e38\u72b6\u6001\u6253\u5370\u6570\u636e\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/mxsm/picture/blob/main/java/jvm/markword%E6%AD%A3%E5%B8%B8%E7%8A%B6%E6%80%81.png?raw=true",alt:null})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u8bf4\u660e:\u4ece\u4e0a\u56fe\u53ef\u4ee5\u770b\u51fa\u6765\u4e0d\u540c\u7684\u6570\u636e\u7c7b\u578b\u5360\u7528\u7684\u5b57\u8282\u6570\u90fd\u4e0d\u4e00\u6837\u3002")),(0,r.kt)("h3",{id:"6-mark-word-\u504f\u5411\u9501"},"6 Mark Word \u504f\u5411\u9501"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public class Header {\n    public synchronized void biasedLock(){\n        System.out.println("biasedLock................");\n    }\n}\n\npackage com.github.mxsm;\n\nimport org.openjdk.jol.info.ClassLayout;\n\n/**\n * @author mxsm\n * @Date 2021/1/21\n * @Since\n */\npublic class HeaderView {\n\n    public static void main(String[] args) {\n        Header headerView = new Header();\n        System.out.println("\u52a0\u9501\u4e4b\u524d.....");\n        System.out.println(ClassLayout.parseInstance(headerView).toPrintable());\n        headerView.biasedLock();\n        System.out.println("\u52a0\u9501\u4e4b\u540e.....");\n        System.out.println(ClassLayout.parseInstance(headerView).toPrintable());\n    }\n}\n')),(0,r.kt)("p",null,"\u6253\u5370\u7ed3\u679c\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/mxsm/picture/blob/main/java/jvm/%E7%8A%B6%E6%80%81%E8%BD%AC%E5%8F%98%E4%B8%BA%E5%81%8F%E5%90%91%E9%94%811.png?raw=true",alt:null})),(0,r.kt)("p",null,"\u901a\u8fc7\u7ed3\u679c\u53d1\u73b0\u8c03\u7528\u4e0a\u9762\u8fd9\u4e2a\u7a0b\u5e8f\u53ea\u6709\u4e00\u4e2a\u7ebf\u7a0b\u53bb\u8c03\u7528biasedLock\u65b9\u6cd5\uff0c\u5e94\u8be5\u662f\u504f\u5411\u9501\uff0c\u4f46\u662f\u4f60\u4f1a\u53d1\u73b0\u8f93\u51fa\u7684\u7ed3\u679c\uff08\u7b2c\u4e00\u4e2a\u5b57\u8282\uff09\u4f9d\u7136\u662f00000001\u548c\u65e0\u9501\u7684\u65f6\u5019\u4e00\u6a21\u4e00\u6837\uff0c\u5176\u5b9e\u8fd9\u662f",(0,r.kt)("strong",{parentName:"p"},"\u56e0\u4e3a\u865a\u62df\u673a\u5728\u542f\u52a8\u7684\u65f6\u5019\u5bf9\u4e8e\u504f\u5411\u9501\u6709\u5ef6\u8fdf"),"\u5982\u679c\u6ca1\u6709\u504f\u5411\u9501\u7684\u5ef6\u8fdf\u7684\u8bdd\uff0c\u865a\u62df\u673a\u5728\u542f\u52a8\u7684\u65f6\u5019\uff0c\u53ef\u80fdJVM\u67d0\u4e2a\u7ebf\u7a0b\u8c03\u7528\u4f60\u7684\u7ebf\u7a0b\uff0c\u8fd9\u6837\u5c31\u6709\u53ef\u80fd\u53d8\u6210\u4e86\u8f7b\u91cf\u9501\u6216\u8005\u91cd\u91cf\u9501(\u5982\u679c\u6ca1\u6709\u5ef6\u8fdf\u4f1a\u964d\u4f4eJVM\u542f\u52a8\u7684\u901f\u5ea6)\uff0c\u6240\u4ee5\u8981\u505a\u504f\u5411\u9501\u7684\u5ef6\u8fdf\u3002\u67e5\u770b\u7684\u65b9\u5f0f\u6709\u4e24\u79cd\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u589e\u52a0JVM\u53c2\u6570:-XX:BiasedLockingStartupDelay=0")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u52a0\u9501\u4e4b\u524d\u8ba9\u7ebf\u7a0b\u7761\u51e0\u79d2"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},'package com.github.mxsm;\n\nimport java.util.concurrent.TimeUnit;\nimport org.openjdk.jol.info.ClassLayout;\n\npackage com.github.mxsm;\n\nimport java.util.concurrent.TimeUnit;\nimport org.openjdk.jol.info.ClassLayout;\n\n/**\n * @author mxsm\n * @Date 2021/1/21\n * @Since\n */\npublic class HeaderView {\n\n    public static void main(String[] args) {\n        /**\n         * \u7761\u7720\u65f6\u95f4\u5927\u6982\u57285\u79d2\u5de6\u53f3\uff0c4\u79d2\u6d4b\u8bd5\u6211\u8fd9\u8fb9\u6ca1\u6709\u6548\u679c\n         * \u5207\u8bb0\u5ef6\u8fdf\u4e00\u5b9a\u8981\u653e\u5728\u5bf9\u8c61\u521b\u5efa\u4e4b\u524d\uff0c\u4e0d\u7136\u662f\u65e0\u6548\u7684\uff0c\u56e0\u4e3a\u5728\u4f60\u5bf9\u8c61\u521b\u5efa\u4e4b\u524d\uff0c\u504f\u5411\u9501\u7684\u5ef6\u8fdf\u7684\u65f6\u95f4\n         * \u6ca1\u6709\u7ed9\u4f60\u7761\u8fc7\u53bb\uff0c\u8fd9\u65f6\u5019\uff0c\u5bf9\u8c61\u5df2\u7ecf\u521b\u5efa\u4e86\uff0c\u5bf9\u8c61\u5934\u7684\u4fe1\u606f\u5df2\u7ecf\u751f\u6210\u4e86\u3002(\u5728\u5bf9\u8c61\u5934\u751f\u6210\u4e4b\u524d)\n         */\n        try {\n            TimeUnit.MILLISECONDS.sleep(4500);\n        } catch (InterruptedException e) {\n            e.printStackTrace();\n        }\n        Header headerView = new Header();\n        System.out.println("\u52a0\u9501\u4e4b\u524d.....");\n        System.out.println(ClassLayout.parseInstance(headerView).toPrintable());\n       \n        headerView.biasedLock();\n        System.out.println("\u52a0\u9501\u4e4b\u540e.....");\n        System.out.println(ClassLayout.parseInstance(headerView).toPrintable());\n    }\n}\n\n')),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"\u8bf4\u660e\uff1a"),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"\u7761\u7720\u65f6\u95f4\u5927\u6982\u5728\u4e94\u79d2\u5de6\u53f3\uff0c\u5177\u4f53\u53ef\u4ee5\u53bb\u6d4b\u8bd5"),(0,r.kt)("li",{parentName:"ul"},"\u7ebf\u7a0b\u7761\u7720\u65f6\u95f4\u4e00\u5b9a\u8981\u5728\u5bf9\u8c61\u521b\u5efa\u4e4b\u524d(\u5bf9\u8c61\u5934\u751f\u6210\u4e4b\u524d)"))))),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/mxsm/picture/blob/main/java/jvm/%E7%8A%B6%E6%80%81%E8%BD%AC%E4%B8%BA%E5%81%8F%E5%90%91%E9%94%812.png?raw=true",alt:null})),(0,r.kt)("p",null,"\u901a\u8fc7\u56fe\u7247\u53ef\u4ee5\u770b\u51fa\u6765\u5df2\u7ecf\u53d8\u6210\u53ef\u504f\u5411\u72b6\u6001\u4e86\u3002"),(0,r.kt)("h3",{id:"7-mark-word\u91cd\u91cf\u9501\u81a8\u80c0\u9501"},"7 Mark Word\u91cd\u91cf\u9501(\u81a8\u80c0\u9501)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'package com.github.mxsm;\n\nimport org.openjdk.jol.info.ClassLayout;\n\n/**\n * @author mxsm\n * @Date 2021/1/21\n * @Since\n */\npublic class Header {\n\n    public synchronized void biasedLock(){\n\n        System.out.println("biasedLock\u65b9\u6cd5\u6267\u884c................");\n        System.out.println(ClassLayout.parseInstance(this).toPrintable());\n\n    }\n\n}\n\npackage com.github.mxsm;\n\nimport java.util.concurrent.TimeUnit;\nimport org.openjdk.jol.info.ClassLayout;\n\n/**\n * @author mxsm\n * @Date 2021/1/26\n * @Since\n */\npublic class InflatedLock {\n\n    public static void main(String[] args) {\n        //\u504f\u5411\u9501\u5ef6\u8fdf\u5f00\u542f\u7684\u72b6\u6001\u4e0b\n        final Header headerView = new Header();\n        System.out.println("\u52a0\u9501\u4e4b\u524d.....");\n        System.out.println(ClassLayout.parseInstance(headerView).toPrintable());\n\n        new Thread(new Runnable() {\n            @Override\n            public void run() {\n                synchronized (headerView){\n                    try {\n                        TimeUnit.SECONDS.sleep(5);\n                    } catch (InterruptedException e) {\n                        e.printStackTrace();\n                    }\n                    System.out.println("------ Thread1 release-----\\n");\n                    System.out.println(ClassLayout.parseInstance(headerView).toPrintable());\n                }\n            }\n        },"Thread1").start();\n\n        try {\n            TimeUnit.SECONDS.sleep(1);\n        } catch (InterruptedException e) {\n            e.printStackTrace();\n        }\n\n        System.out.println("Thread1 is locking");\n        System.out.println(ClassLayout.parseInstance(headerView).toPrintable());\n\n\n        headerView.biasedLock();\n        System.out.println("\u52a0\u9501\u4e4b\u540e.....");\n        System.out.println(ClassLayout.parseInstance(headerView).toPrintable());\n\n        System.gc();\n        System.out.println("GC\u540e.....");\n        System.out.println(ClassLayout.parseInstance(headerView).toPrintable());\n    }\n\n}\n')),(0,r.kt)("p",null,"\u6267\u884c\u7ed3\u679c\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/mxsm/picture/blob/main/java/jvm/%E7%8A%B6%E6%80%81%E8%BD%AC%E4%B8%BA%E9%87%8D%E5%BA%A6%E9%94%811.png?raw=true",alt:null})),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/mxsm/picture/blob/main/java/jvm/%E7%8A%B6%E6%80%81%E8%BD%AC%E4%B8%BA%E9%87%8D%E5%BA%A6%E9%94%812.png?raw=true",alt:null})),(0,r.kt)("p",null,"gc\u540e\u5e74\u9f84\u589e\u52a01\u3002"),(0,r.kt)("p",null,"\u53c2\u8003\u6587\u6863\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://blog.csdn.net/qq_36434742/article/details/106854061"},"\u6df1\u5165\u7406\u89e3Java\u7684\u5bf9\u8c61\u5934mark word"))))}u.isMDXComponent=!0}}]);