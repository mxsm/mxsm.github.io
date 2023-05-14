"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[6143],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),o=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},i=function(e){var t=o(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),m=o(n),u=r,d=m["".concat(l,".").concat(u)]||m[u]||f[u]||s;return n?a.createElement(d,p(p({ref:t},i),{},{components:n})):a.createElement(d,p({ref:t},i))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,p=new Array(s);p[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[m]="string"==typeof e?e:r,p[1]=c;for(var o=2;o<s;o++)p[o]=n[o];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4476:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>f,frontMatter:()=>s,metadata:()=>c,toc:()=>o});var a=n(7462),r=(n(7294),n(3905));const s={title:"Java\u4e2d\u7684\u5f15\u7528",date:new Date("2019-09-28T00:00:00.000Z")},p=void 0,c={unversionedId:"java/java-se/JVM/java-ref",id:"java/java-se/JVM/java-ref",title:"Java\u4e2d\u7684\u5f15\u7528",description:"Java\u5f15\u7528\u7684\u56db\u79cd\u7c7b\u578b",source:"@site/docs/java/java-se/JVM/java-ref.md",sourceDirName:"java/java-se/JVM",slug:"/java/java-se/JVM/java-ref",permalink:"/docs/java/java-se/JVM/java-ref",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/java/java-se/JVM/java-ref.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1684027896,formattedLastUpdatedAt:"May 14, 2023",frontMatter:{title:"Java\u4e2d\u7684\u5f15\u7528",date:"2019-09-28T00:00:00.000Z"},sidebar:"javase",previous:{title:"\u4e00\u4e2aJava\u5bf9\u8c61\u5360\u7528\u591a\u5927\u5185\u5b58",permalink:"/docs/java/java-se/JVM/java-object-size"},next:{title:"JVM\u5e38\u7528\u7684\u547d\u4ee4",permalink:"/docs/java/java-se/JVM/jvm-common-command"}},l={},o=[{value:"Java\u5f15\u7528\u7684\u56db\u79cd\u7c7b\u578b",id:"java\u5f15\u7528\u7684\u56db\u79cd\u7c7b\u578b",level:3}],i={toc:o},m="wrapper";function f(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"java\u5f15\u7528\u7684\u56db\u79cd\u7c7b\u578b"},"Java\u5f15\u7528\u7684\u56db\u79cd\u7c7b\u578b"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u5206\u4e3a\u5f3a\u5f15\u7528\uff08Strong Reference\uff09")),(0,r.kt)("p",{parentName:"li"},"\u8fd9\u4e2a\u5927\u5bb6\u5929\u5929\u7528\u53ef\u80fd\u53ea\u662f\u6ca1\u6709\u6ce8\u610f\u6bd4\u5982"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Object obj = new Object()\n")),(0,r.kt)("p",{parentName:"li"},"\u8fd9\u5c31\u662f\u5f3a\u5f15\u7528\u3002\u53ea\u8981\u6709\u5f3a\u5f15\u7528\uff0c\u5bf9\u8c61\u6c38\u8fdc\u4e0d\u4f1a\u88ab\u56de\u6536")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u5206\u4e3a\u8f6f\u5f15\u7528\uff08Soft Reference\uff09")),(0,r.kt)("p",{parentName:"li"},"\u81ea\u5df1\u8868\u793a\u6ca1\u6709\u7528\u8fc7\uff0c\u6ca1\u7528\u8fc7\u90a3\u5c31\u770b\u4e00\u4e0b\u901a\u8fc7\u4ee3\u7801\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},'SoftReference<StringBuilder> softReference = new SoftReference<>(new StringBuilder("test"));\n')),(0,r.kt)("p",{parentName:"li"},"\u5b98\u65b9\u7684\u8bf4\u6cd5\u662f\u7531\u5783\u573e\u6536\u96c6\u5668\u6839\u636e\u5185\u5b58\u9700\u6c42\u81ea\u884c\u6e05\u9664\u3002\u8f6f\u5f15\u7528\u5927\u90e8\u5206\u7528\u6765\u5b9e\u73b0",(0,r.kt)("strong",{parentName:"p"},"\u5185\u5b58\u654f\u611f"),"\u7684\u7f13\u5b58"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * -XX:+PrintGCDetails\n * -Xms20m\n * -Xmx20m\n */\n\npublic class SoftReferenceTest {\n\n    private static final int _1MB = 1024*1024;\n\n    public static void main(String[] args) {\n\n        SoftReference<Byte[]> softReference = new SoftReference<>(new Byte[2*_1MB]);\n        System.out.println(softReference.get());\n        byte[] allco1 = new byte[2*_1MB];\n        byte[] allco2 = new byte[2*_1MB];\n        byte[] allco3 = new byte[2*_1MB];\n        byte[] allco4 = new byte[2*_1MB];\n        byte[] allco5 = new byte[2*_1MB];\n        System.out.println(softReference.get());\n\n    }\n}\n\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"[Ljava.lang.Byte;@6bf2d08e\n[GC (Allocation Failure) [PSYoungGen: 5065K->485K(6144K)] 13257K->9357K(19968K), 0.0018207 secs] [Times: user=0.00 sys=0.00, real=0.01 secs] \n[GC (Allocation Failure) [PSYoungGen: 4751K->496K(6144K)] 13623K->13517K(19968K), 0.0043121 secs] [Times: user=0.01 sys=0.01, real=0.00 secs] \n[Full GC (Ergonomics) [PSYoungGen: 496K->0K(6144K)] [ParOldGen: 13021K->13305K(13824K)] 13517K->13305K(19968K), [Metaspace: 3354K->3354K(1056768K)], 0.0166522 secs] [Times: user=0.03 sys=0.00, real=0.02 secs] \n[Full GC (Ergonomics) [PSYoungGen: 4340K->4096K(6144K)] [ParOldGen: 13305K->13261K(13824K)] 17645K->17357K(19968K), [Metaspace: 3364K->3364K(1056768K)], 0.0160700 secs] [Times: user=0.03 sys=0.00, real=0.02 secs] \n[Full GC (Allocation Failure) [PSYoungGen: 4096K->0K(6144K)] [ParOldGen: 13261K->9094K(13824K)] 17357K->9094K(19968K), [Metaspace: 3364K->3364K(1056768K)], 0.0048642 secs] [Times: user=0.01 sys=0.00, real=0.00 secs] \nnull\nHeap\n PSYoungGen      total 6144K, used 2129K [0x00000007bf980000, 0x00000007c0000000, 0x00000007c0000000)\n  eden space 5632K, 37% used [0x00000007bf980000,0x00000007bfb94778,0x00000007bff00000)\n  from space 512K, 0% used [0x00000007bff80000,0x00000007bff80000,0x00000007c0000000)\n  to   space 512K, 0% used [0x00000007bff00000,0x00000007bff00000,0x00000007bff80000)\n ParOldGen       total 13824K, used 9094K [0x00000007bec00000, 0x00000007bf980000, 0x00000007bf980000)\n  object space 13824K, 65% used [0x00000007bec00000,0x00000007bf4e1b68,0x00000007bf980000)\n Metaspace       used 3375K, capacity 4496K, committed 4864K, reserved 1056768K\n  class space    used 367K, capacity 388K, committed 512K, reserved 1048576K\n")),(0,r.kt)("p",{parentName:"li"},"\u6253\u5370\u4e3anull\u8bf4\u660eGC\u5df2\u7ecf\u56de\u6536\u4e86\u5185\u5b58\u3002"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u5bf9\u4e8e\u5173\u8054\u8f6f\u5f15\u7528\u7684\u5bf9\u8c61\uff0c\u5728\u7cfb\u7edf\u5c06\u8981\u53d1\u751f\u5185\u5b58\u6ea2\u51fa\u5f02\u5e38\u4e4b\u524d\uff0c\u5c06\u4f1a\u628a\u8fd9\u4e9b\u5bf9\u8c61\u8fdb\u884c\u4e8c\u6b21\u56de\u6536\uff0c\u5982\u679c\u4ecd\u6ca1\u6709\u8db3\u591f\u7684\u5185\u5b58\uff0c\u624d\u4f1a\u629b\u51fa\u5185\u5b58\u6ea2\u51fa\u5f02\u5e38\u3002\u4f7f\u7528SoftReference\u7c7b\u6765\u5b9e\u73b0"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u5206\u4e3a\u5f31\u5f15\u7528\uff08Weak Reference\uff09")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u5f31\u5f15\u7528\u4e5f\u662f\u63cf\u8ff0\u975e\u5fc5\u987b\u7684\u5bf9\u8c61\uff0c\u88ab\u5b83\u5173\u8054\u7684\u5bf9\u8c61\uff0c\u53ea\u80fd\u751f\u5b58\u5230\u4e0b\u4e00\u6b21\u5783\u573e\u56de\u6536\u53d1\u751f\u4e4b\u524d\uff0c\u5f53\u5783\u573e\u56de\u6536\u65f6\uff0c\u65e0\u8bba\u5185\u5b58\u662f\u5426\u8db3\u591f\uff0c\u90fd\u4f1a\u88ab\u56de\u6536\uff0c\u7cfb\u7edf\u63d0\u4f9bWeakReference\u7c7b\u6765\u5b9e\u73b0\u5f31\u5f15\u7528")),(0,r.kt)("p",{parentName:"li"},"\u4ee3\u7801\u9a8c\u8bc1\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public class WeakRefrenceTest {\n\n    public static void main(String[] args) {\n\n        WeakReference<String> weakReference = new WeakReference<>(new String("1111"));\n        System.out.println("GC\u524d\uff1a"+weakReference.get());\n        System.gc(); //\u624b\u52a8\u8c03\u7528GC\u64cd\u4f5c\n        System.out.println("GC\u540e\uff1a"+weakReference.get());\n\n    }\n\n}\n')),(0,r.kt)("p",{parentName:"li"},"\u6253\u5370\u7ed3\u679c\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"GC\u524d\uff1a1111\nGC\u540e\uff1anull\n")),(0,r.kt)("p",{parentName:"li"},"\u5982\u679c\u6362\u6210\u4e0b\u9762\u7684\u8fd9\u6837\u4ee3\u7801\u5462\uff1f"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public class WeakRefrenceTest {\n\n    public static void main(String[] args) {\n        \n        //new String("1111") \u6362\u6210 \n        WeakReference<String> weakReference = new WeakReference<>("1111");\n        System.out.println("GC\u524d\uff1a"+weakReference.get());\n        System.gc();\n        System.out.println("GC\u540e\uff1a"+weakReference.get());\n\n    }\n\n}\n')),(0,r.kt)("p",{parentName:"li"},"\u6253\u5370\u7684\u7ed3\u679c\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"GC\u524d\uff1a1111\nGC\u540e\uff1a1111\n")),(0,r.kt)("p",{parentName:"li"},"\u4e3a\u4ec0\u4e48\u4e0a\u9762 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},'new String("111")'))," \u6253\u5370\u7684GC\u540e\u7684\u4e3a\u7a7a\u800c\u76f4\u63a5 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"111"))," \u6253\u5370\u7684\u662fGC\u540e\u7684\u662f111\u3002\u56e0\u4e3a ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"111"))," \u88ab\u653e\u5230\u4e86\u5e38\u91cf\u6c60\u91cc\u9762\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u865a\u5f15\u7528\uff08Phantom Reference\uff09")))))}f.isMDXComponent=!0}}]);