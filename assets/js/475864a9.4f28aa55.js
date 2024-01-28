"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[6143],{1715:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>j,frontMatter:()=>r,metadata:()=>l,toc:()=>o});var a=s(5893),t=s(1151);const r={title:"Java\u4e2d\u7684\u5f15\u7528",date:new Date("2019-09-28T00:00:00.000Z")},c=void 0,l={id:"java/java-se/JVM/java-ref",title:"Java\u4e2d\u7684\u5f15\u7528",description:"Java\u5f15\u7528\u7684\u56db\u79cd\u7c7b\u578b",source:"@site/docs/java/java-se/JVM/java-ref.md",sourceDirName:"java/java-se/JVM",slug:"/java/java-se/JVM/java-ref",permalink:"/docs/java/java-se/JVM/java-ref",draft:!1,unlisted:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/java/java-se/JVM/java-ref.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1706451902,formattedLastUpdatedAt:"Jan 28, 2024",frontMatter:{title:"Java\u4e2d\u7684\u5f15\u7528",date:"2019-09-28T00:00:00.000Z"},sidebar:"javase",previous:{title:"\u4e00\u4e2aJava\u5bf9\u8c61\u5360\u7528\u591a\u5927\u5185\u5b58",permalink:"/docs/java/java-se/JVM/java-object-size"},next:{title:"JVM\u5e38\u7528\u7684\u547d\u4ee4",permalink:"/docs/java/java-se/JVM/jvm-common-command"}},i={},o=[{value:"Java\u5f15\u7528\u7684\u56db\u79cd\u7c7b\u578b",id:"java\u5f15\u7528\u7684\u56db\u79cd\u7c7b\u578b",level:3}];function d(e){const n={code:"code",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h3,{id:"java\u5f15\u7528\u7684\u56db\u79cd\u7c7b\u578b",children:"Java\u5f15\u7528\u7684\u56db\u79cd\u7c7b\u578b"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"\u5206\u4e3a\u5f3a\u5f15\u7528\uff08Strong Reference\uff09"})}),"\n",(0,a.jsx)(n.p,{children:"\u8fd9\u4e2a\u5927\u5bb6\u5929\u5929\u7528\u53ef\u80fd\u53ea\u662f\u6ca1\u6709\u6ce8\u610f\u6bd4\u5982"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"Object obj = new Object()\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u8fd9\u5c31\u662f\u5f3a\u5f15\u7528\u3002\u53ea\u8981\u6709\u5f3a\u5f15\u7528\uff0c\u5bf9\u8c61\u6c38\u8fdc\u4e0d\u4f1a\u88ab\u56de\u6536"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"\u5206\u4e3a\u8f6f\u5f15\u7528\uff08Soft Reference\uff09"})}),"\n",(0,a.jsx)(n.p,{children:"\u81ea\u5df1\u8868\u793a\u6ca1\u6709\u7528\u8fc7\uff0c\u6ca1\u7528\u8fc7\u90a3\u5c31\u770b\u4e00\u4e0b\u901a\u8fc7\u4ee3\u7801\uff1a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'SoftReference<StringBuilder> softReference = new SoftReference<>(new StringBuilder("test"));\n'})}),"\n",(0,a.jsxs)(n.p,{children:["\u5b98\u65b9\u7684\u8bf4\u6cd5\u662f\u7531\u5783\u573e\u6536\u96c6\u5668\u6839\u636e\u5185\u5b58\u9700\u6c42\u81ea\u884c\u6e05\u9664\u3002\u8f6f\u5f15\u7528\u5927\u90e8\u5206\u7528\u6765\u5b9e\u73b0",(0,a.jsx)(n.strong,{children:"\u5185\u5b58\u654f\u611f"}),"\u7684\u7f13\u5b58"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"/**\n * -XX:+PrintGCDetails\n * -Xms20m\n * -Xmx20m\n */\n\npublic class SoftReferenceTest {\n\n    private static final int _1MB = 1024*1024;\n\n    public static void main(String[] args) {\n\n        SoftReference<Byte[]> softReference = new SoftReference<>(new Byte[2*_1MB]);\n        System.out.println(softReference.get());\n        byte[] allco1 = new byte[2*_1MB];\n        byte[] allco2 = new byte[2*_1MB];\n        byte[] allco3 = new byte[2*_1MB];\n        byte[] allco4 = new byte[2*_1MB];\n        byte[] allco5 = new byte[2*_1MB];\n        System.out.println(softReference.get());\n\n    }\n}\n\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"[Ljava.lang.Byte;@6bf2d08e\n[GC (Allocation Failure) [PSYoungGen: 5065K->485K(6144K)] 13257K->9357K(19968K), 0.0018207 secs] [Times: user=0.00 sys=0.00, real=0.01 secs] \n[GC (Allocation Failure) [PSYoungGen: 4751K->496K(6144K)] 13623K->13517K(19968K), 0.0043121 secs] [Times: user=0.01 sys=0.01, real=0.00 secs] \n[Full GC (Ergonomics) [PSYoungGen: 496K->0K(6144K)] [ParOldGen: 13021K->13305K(13824K)] 13517K->13305K(19968K), [Metaspace: 3354K->3354K(1056768K)], 0.0166522 secs] [Times: user=0.03 sys=0.00, real=0.02 secs] \n[Full GC (Ergonomics) [PSYoungGen: 4340K->4096K(6144K)] [ParOldGen: 13305K->13261K(13824K)] 17645K->17357K(19968K), [Metaspace: 3364K->3364K(1056768K)], 0.0160700 secs] [Times: user=0.03 sys=0.00, real=0.02 secs] \n[Full GC (Allocation Failure) [PSYoungGen: 4096K->0K(6144K)] [ParOldGen: 13261K->9094K(13824K)] 17357K->9094K(19968K), [Metaspace: 3364K->3364K(1056768K)], 0.0048642 secs] [Times: user=0.01 sys=0.00, real=0.00 secs] \nnull\nHeap\n PSYoungGen      total 6144K, used 2129K [0x00000007bf980000, 0x00000007c0000000, 0x00000007c0000000)\n  eden space 5632K, 37% used [0x00000007bf980000,0x00000007bfb94778,0x00000007bff00000)\n  from space 512K, 0% used [0x00000007bff80000,0x00000007bff80000,0x00000007c0000000)\n  to   space 512K, 0% used [0x00000007bff00000,0x00000007bff00000,0x00000007bff80000)\n ParOldGen       total 13824K, used 9094K [0x00000007bec00000, 0x00000007bf980000, 0x00000007bf980000)\n  object space 13824K, 65% used [0x00000007bec00000,0x00000007bf4e1b68,0x00000007bf980000)\n Metaspace       used 3375K, capacity 4496K, committed 4864K, reserved 1056768K\n  class space    used 367K, capacity 388K, committed 512K, reserved 1048576K\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u6253\u5370\u4e3anull\u8bf4\u660eGC\u5df2\u7ecf\u56de\u6536\u4e86\u5185\u5b58\u3002"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"\u5bf9\u4e8e\u5173\u8054\u8f6f\u5f15\u7528\u7684\u5bf9\u8c61\uff0c\u5728\u7cfb\u7edf\u5c06\u8981\u53d1\u751f\u5185\u5b58\u6ea2\u51fa\u5f02\u5e38\u4e4b\u524d\uff0c\u5c06\u4f1a\u628a\u8fd9\u4e9b\u5bf9\u8c61\u8fdb\u884c\u4e8c\u6b21\u56de\u6536\uff0c\u5982\u679c\u4ecd\u6ca1\u6709\u8db3\u591f\u7684\u5185\u5b58\uff0c\u624d\u4f1a\u629b\u51fa\u5185\u5b58\u6ea2\u51fa\u5f02\u5e38\u3002\u4f7f\u7528SoftReference\u7c7b\u6765\u5b9e\u73b0"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"\u5206\u4e3a\u5f31\u5f15\u7528\uff08Weak Reference\uff09"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"\u5f31\u5f15\u7528\u4e5f\u662f\u63cf\u8ff0\u975e\u5fc5\u987b\u7684\u5bf9\u8c61\uff0c\u88ab\u5b83\u5173\u8054\u7684\u5bf9\u8c61\uff0c\u53ea\u80fd\u751f\u5b58\u5230\u4e0b\u4e00\u6b21\u5783\u573e\u56de\u6536\u53d1\u751f\u4e4b\u524d\uff0c\u5f53\u5783\u573e\u56de\u6536\u65f6\uff0c\u65e0\u8bba\u5185\u5b58\u662f\u5426\u8db3\u591f\uff0c\u90fd\u4f1a\u88ab\u56de\u6536\uff0c\u7cfb\u7edf\u63d0\u4f9bWeakReference\u7c7b\u6765\u5b9e\u73b0\u5f31\u5f15\u7528"})}),"\n",(0,a.jsx)(n.p,{children:"\u4ee3\u7801\u9a8c\u8bc1\uff1a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'public class WeakRefrenceTest {\n\n    public static void main(String[] args) {\n\n        WeakReference<String> weakReference = new WeakReference<>(new String("1111"));\n        System.out.println("GC\u524d\uff1a"+weakReference.get());\n        System.gc(); //\u624b\u52a8\u8c03\u7528GC\u64cd\u4f5c\n        System.out.println("GC\u540e\uff1a"+weakReference.get());\n\n    }\n\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"\u6253\u5370\u7ed3\u679c\uff1a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"GC\u524d\uff1a1111\nGC\u540e\uff1anull\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u5982\u679c\u6362\u6210\u4e0b\u9762\u7684\u8fd9\u6837\u4ee3\u7801\u5462\uff1f"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'public class WeakRefrenceTest {\n\n    public static void main(String[] args) {\n\t\t\n        //new String("1111") \u6362\u6210 \n        WeakReference<String> weakReference = new WeakReference<>("1111");\n        System.out.println("GC\u524d\uff1a"+weakReference.get());\n        System.gc();\n        System.out.println("GC\u540e\uff1a"+weakReference.get());\n\n    }\n\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"\u6253\u5370\u7684\u7ed3\u679c\uff1a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"GC\u524d\uff1a1111\nGC\u540e\uff1a1111\n"})}),"\n",(0,a.jsxs)(n.p,{children:["\u4e3a\u4ec0\u4e48\u4e0a\u9762 ",(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.code,{children:'new String("111")'})})," \u6253\u5370\u7684GC\u540e\u7684\u4e3a\u7a7a\u800c\u76f4\u63a5 ",(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.code,{children:"111"})})," \u6253\u5370\u7684\u662fGC\u540e\u7684\u662f111\u3002\u56e0\u4e3a ",(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.code,{children:"111"})})," \u88ab\u653e\u5230\u4e86\u5e38\u91cf\u6c60\u91cc\u9762\u3002"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"\u865a\u5f15\u7528\uff08Phantom Reference\uff09"})}),"\n"]}),"\n"]})]})}function j(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>c});var a=s(7294);const t={},r=a.createContext(t);function c(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);