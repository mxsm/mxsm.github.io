"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[8784],{2742:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>d});var a=s(5893),t=s(1151);const l={title:"\u7c7b\u52a0\u8f7d\u5668\u548c\u53cc\u4eb2\u59d4\u6d3e\u6a21\u578b",date:new Date("2019-11-11T00:00:00.000Z")},i=void 0,r={id:"java/java-se/JVM/parental-delegate-model",title:"\u7c7b\u52a0\u8f7d\u5668\u548c\u53cc\u4eb2\u59d4\u6d3e\u6a21\u578b",description:"1. \u7c7b\u52a0\u8f7d\u5668",source:"@site/docs/java/java-se/JVM/parental-delegate-model.md",sourceDirName:"java/java-se/JVM",slug:"/java/java-se/JVM/parental-delegate-model",permalink:"/docs/java/java-se/JVM/parental-delegate-model",draft:!1,unlisted:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/java/java-se/JVM/parental-delegate-model.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1706451902,formattedLastUpdatedAt:"Jan 28, 2024",frontMatter:{title:"\u7c7b\u52a0\u8f7d\u5668\u548c\u53cc\u4eb2\u59d4\u6d3e\u6a21\u578b",date:"2019-11-11T00:00:00.000Z"},sidebar:"javase",previous:{title:"JVM\u53c2\u6570",permalink:"/docs/java/java-se/JVM/jvm-paramters"},next:{title:"\u5206\u5e03\u5f0f\u9501",permalink:"/docs/java/java-se/lock/distributed-lock"}},c={},d=[{value:"1. \u7c7b\u52a0\u8f7d\u5668",id:"1-\u7c7b\u52a0\u8f7d\u5668",level:3},{value:"JVM\u9884\u5b9a\u4e49\u7c7b\u52a0\u8f7d\u5668\u5206\u4e3a\u4e09\u79cd\uff1a",id:"jvm\u9884\u5b9a\u4e49\u7c7b\u52a0\u8f7d\u5668\u5206\u4e3a\u4e09\u79cd",level:4},{value:"\u81ea\u5b9a\u4e49\u52a0\u8f7d\u7c7b",id:"\u81ea\u5b9a\u4e49\u52a0\u8f7d\u7c7b",level:4},{value:"2. \u53cc\u4eb2\u59d4\u6d3e\u6a21\u578b",id:"2-\u53cc\u4eb2\u59d4\u6d3e\u6a21\u578b",level:3},{value:"\u53cc\u4eb2\u59d4\u6d3e\u6a21\u578b\u7684\u5de5\u4f5c\u8fc7\u7a0b",id:"\u53cc\u4eb2\u59d4\u6d3e\u6a21\u578b\u7684\u5de5\u4f5c\u8fc7\u7a0b",level:4},{value:"\u4e3a\u4ec0\u4e48\u7528\u53cc\u4eb2\u59d4\u6d3e\u6a21\u578b\uff1f",id:"\u4e3a\u4ec0\u4e48\u7528\u53cc\u4eb2\u59d4\u6d3e\u6a21\u578b",level:4},{value:"3. \u81ea\u5b9a\u4e49\u7c7b\u52a0\u8f7d\u5668",id:"3-\u81ea\u5b9a\u4e49\u7c7b\u52a0\u8f7d\u5668",level:3},{value:"4. \u81ea\u5b9a\u4e49\u7c7b\u52a0\u8f7d\u5668\u7684\u7236\u7c7b\u8bf4\u660e",id:"4-\u81ea\u5b9a\u4e49\u7c7b\u52a0\u8f7d\u5668\u7684\u7236\u7c7b\u8bf4\u660e",level:3},{value:"5. \u7c7b\u52a0\u8f7d\u5668\u7684\u547d\u540d\u7a7a\u95f4",id:"5-\u7c7b\u52a0\u8f7d\u5668\u7684\u547d\u540d\u7a7a\u95f4",level:3}];function o(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h3,{id:"1-\u7c7b\u52a0\u8f7d\u5668",children:"1. \u7c7b\u52a0\u8f7d\u5668"}),"\n",(0,a.jsx)(n.p,{children:"\u6bcf\u4e00\u4e2a\u7c7b\u52a0\u8f7d\u5668\u62e5\u6709\u4e00\u4e2a\u72ec\u7acb\u7684\u7c7b\u547d\u540d\u7a7a\u95f4\uff0c\u901a\u4fd7\u7684\u8bf4\uff1a\u6bd4\u8f83\u4e24\u4e2a\u7c7b\u662f\u5426\u76f8\u7b49\u53ea\u6709\u4e24\u4e2a\u7c7b\u662f\u540c\u4e00\u4e2a\u7c7b\u52a0\u8f7d\u5668\u624d\u6709\u610f\u4e49\u3002"}),"\n",(0,a.jsx)(n.h4,{id:"jvm\u9884\u5b9a\u4e49\u7c7b\u52a0\u8f7d\u5668\u5206\u4e3a\u4e09\u79cd",children:"JVM\u9884\u5b9a\u4e49\u7c7b\u52a0\u8f7d\u5668\u5206\u4e3a\u4e09\u79cd\uff1a"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"\u542f\u52a8\u7c7b\u52a0\u8f7d\u5668\uff08Bootstrap ClassLoader\uff09\u2014C++\u5199\u7684\u4e8c\u8fdb\u5236\u4ee3\u7801\u800c\u4e0d\u662f\u5b57\u8282\u7801"})}),"\n",(0,a.jsxs)(n.p,{children:["\u542f\u52a8\u7c7b\u52a0\u8f7d\u5668\u4e3b\u8981\u52a0\u8f7d\u7684\u662fJVM\u81ea\u8eab\u9700\u8981\u7684\u7c7b\uff0c\u8fd9\u4e2a\u7c7b\u52a0\u8f7d\u4f7f\u7528C++\u8bed\u8a00\u5b9e\u73b0\u7684\uff0c\u662f\u865a\u62df\u673a\u81ea\u8eab\u7684\u4e00\u90e8\u5206\uff0c\u5b83\u8d1f\u8d23\u5c06 ",(0,a.jsx)(n.code,{children:"<JAVA_HOME>/lib"})," \u8def\u5f84\u4e0b\u7684\u6838\u5fc3\u7c7b\u5e93\u6216",(0,a.jsx)(n.code,{children:"-Xbootclasspath"}),"\u53c2\u6570\u6307\u5b9a\u7684\u8def\u5f84\u4e0b\u7684jar\u5305\u52a0\u8f7d\u5230\u5185\u5b58\u4e2d\uff0c\u6ce8\u610f\u5fc5\u7531\u4e8e\u865a\u62df\u673a\u662f\u6309\u7167\u6587\u4ef6\u540d\u8bc6\u522b\u52a0\u8f7djar\u5305\u7684\uff0c\u5982rt.jar\uff0c\u5982\u679c\u6587\u4ef6\u540d\u4e0d\u88ab\u865a\u62df\u673a\u8bc6\u522b\uff0c\u5373\u4f7f\u628ajar\u5305\u4e22\u5230lib\u76ee\u5f55\u4e0b\u4e5f\u662f\u6ca1\u6709\u4f5c\u7528\u7684(\u51fa\u4e8e\u5b89\u5168\u8003\u8651\uff0cBootstrap\u542f\u52a8\u7c7b\u52a0\u8f7d\u5668\u53ea\u52a0\u8f7d\u5305\u540d\u4e3ajava\u3001javax\u3001sun\u7b49\u5f00\u5934\u7684\u7c7b)\u3002"]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"\u5728\u6211\u4eec\u6d4b\u8bd5System.class.getClassLoader()\u7684\u65f6\u5019\u7ed3\u679c\u4e3anull\u7684\u539f\u56e0\uff0c\u5e76\u4e0d\u662f\u8868\u793aSystem\u8fd9\u4e2a\u6ca1\u6709\u7c7b\u52a0\u8f7d\u5668\uff0c\u800c\u662f\u4ed6\u7684\u52a0\u8f7d\u5668\u6bd4\u8f83\u7279\u6b8a\u3002BootstrapClassLoader\u4e0d\u662fJava\u7c7b\u800c\u662fC++\u4ee3\u7801\u7f16\u5199\u7684\u3002\u6240\u4ee5\u8fd4\u56de\u4e3a\u7a7a\u3002"}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"\u62d3\u5c55(Extension)\u7c7b\u52a0\u8f7d\u5668"})}),"\n",(0,a.jsxs)(n.p,{children:["\u6269\u5c55\u7c7b\u52a0\u8f7d\u5668\u662f\u6307Sun\u516c\u53f8(\u5df2\u88abOracle\u6536\u8d2d)\u5b9e\u73b0\u7684",(0,a.jsx)(n.code,{children:"sun.misc.Launcher$ExtClassLoader"}),"\u7c7b\uff0c\u7531Java\u8bed\u8a00\u5b9e\u73b0\u7684\uff0c\u662fLauncher\u7684\u9759\u6001\u5185\u90e8\u7c7b\uff0c\u5b83\u8d1f\u8d23\u52a0\u8f7d",(0,a.jsx)(n.code,{children:"<JAVA_HOME>/lib/ext"}),"\u76ee\u5f55\u4e0b\u6216\u8005\u7531\u7cfb\u7edf\u53d8\u91cf-Djava.ext.dir\u6307\u5b9a\u4f4d\u8def\u5f84\u4e2d\u7684\u7c7b\u5e93\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u6807\u51c6\u6269\u5c55\u7c7b\u52a0\u8f7d\u5668\u3002"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"\u5e94\u7528\u7a0b\u5e8f(Application)\u7c7b\u52a0\u8f7d\u5668"})}),"\n",(0,a.jsxs)(n.p,{children:["\u4e5f\u79f0\u5e94\u7528\u7a0b\u5e8f\u52a0\u8f7d\u5668\u662f\u6307 Sun\u516c\u53f8\u5b9e\u73b0\u7684",(0,a.jsx)(n.code,{children:"sun.misc.Launcher$AppClassLoader"}),"\u3002\u5b83\u8d1f\u8d23\u52a0\u8f7d\u7cfb\u7edf\u7c7b\u8def\u5f84",(0,a.jsx)(n.code,{children:"java -classpath"}),"\u6216",(0,a.jsx)(n.code,{children:"-Djava.class.path "}),"\u6307\u5b9a\u8def\u5f84\u4e0b\u7684\u7c7b\u5e93\uff0c\u4e5f\u5c31\u662f\u6211\u4eec\u7ecf\u5e38\u7528\u5230\u7684classpath\u8def\u5f84\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u7cfb\u7edf\u7c7b\u52a0\u8f7d\u5668\uff0c\u4e00\u822c\u60c5\u51b5\u4e0b\u8be5\u7c7b\u52a0\u8f7d\u662f\u7a0b\u5e8f\u4e2d\u9ed8\u8ba4\u7684\u7c7b\u52a0\u8f7d\u5668\uff0c\u901a\u8fc7",(0,a.jsx)(n.code,{children:"ClassLoader#getSystemClassLoader()"}),"\u65b9\u6cd5\u53ef\u4ee5\u83b7\u53d6\u5230\u8be5\u7c7b\u52a0\u8f7d\u5668\u3002"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"\u81ea\u5b9a\u4e49\u52a0\u8f7d\u7c7b",children:"\u81ea\u5b9a\u4e49\u52a0\u8f7d\u7c7b"}),"\n",(0,a.jsxs)(n.p,{children:["\u81ea\u5b9a\u4e49\u7c7b\u52a0\u8f7d\u5668\u53ef\u4ee5\u76f4\u63a5\u6216\u95f4\u63a5\u7ee7\u627f\u81ea\u7c7b ",(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.code,{children:"java.lang.ClassLoader"})})," \u3002\u5728 ",(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.code,{children:"java.lang.ClassLoader"})})," \u7c7b\u7684\u5e38\u7528\u65b9\u6cd5\u4e2d\uff0c\u4e00\u822c\u6765\u8bf4\uff0c\u81ea\u5df1\u5f00\u53d1\u7684\u7c7b\u52a0\u8f7d\u5668\u53ea\u9700\u8981\u8986\u5199  ",(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.code,{children:"findClass(String name)"})})," \u65b9\u6cd5\u5373\u53ef"]}),"\n",(0,a.jsx)(n.p,{children:"java.lang.ClassLoader\u7c7b\u7684\u65b9\u6cd5 loadClass()\u5c01\u88c5\u4e86\u4ee3\u7406\u6a21\u5f0f\u7684\u5b9e\u73b0\u3002"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"\u8be5\u65b9\u6cd5\u4f1a\u9996\u5148\u8c03\u7528 findLoadedClass()\u65b9\u6cd5\u6765\u68c0\u67e5\u8be5\u7c7b\u662f\u5426\u5df2\u7ecf\u88ab\u52a0\u8f7d\u8fc7\uff1b"}),"\n",(0,a.jsx)(n.li,{children:"\u5982\u679c\u6ca1\u6709\u52a0\u8f7d\u8fc7\u7684\u8bdd\uff0c\u4f1a\u8c03\u7528\u7236\u7c7b\u52a0\u8f7d\u5668\u7684 loadClass()\u65b9\u6cd5\u6765\u5c1d\u8bd5\u52a0\u8f7d\u8be5\u7c7b\uff1b"}),"\n",(0,a.jsx)(n.li,{children:"\u5982\u679c\u7236\u7c7b\u52a0\u8f7d\u5668\u65e0\u6cd5\u52a0\u8f7d\u8be5\u7c7b\u7684\u8bdd\uff0c\u5c31\u8c03\u7528 findClass()\u65b9\u6cd5\u6765\u67e5\u627e\u8be5\u7c7b\u3002"}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"2-\u53cc\u4eb2\u59d4\u6d3e\u6a21\u578b",children:"2. \u53cc\u4eb2\u59d4\u6d3e\u6a21\u578b"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:"https://raw.githubusercontent.com/mxsm/document/master/image/JSE/%E5%8F%8C%E4%BA%B2%E5%A7%94%E6%B4%BE%E6%A8%A1%E5%9E%8B%E5%9B%BE.png",alt:"\u56fe\u89e3"})}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"\u8fd9\u91cc\u7684\u7c7b\u52a0\u8f7d\u5668\u4e4b\u95f4\u7684\u7236\u5b50\u5173\u7cfb\u4e00\u822c\u4e0d\u901a\u8fc7\u7ee7\u627f\uff08Inheritance\uff09\u6765\u5b9e\u73b0\uff0c\u800c\u662f\u901a\u8fc7\u7ec4\u5408\uff08Composition\uff09\u5173\u7cfb\u6765\u670d\u7528\u7236\u52a0\u8f7d\u5668\u4ee3\u7801\u3002\u53cc\u4eb2\u59d4\u6d3e\u6a21\u578b\u5e76\u4e0d\u662f\u4e00\u4e2a\u5f3a\u5236\u6027\u7ea6\u675f\uff0c\u800c\u662fJava\u8bbe\u8ba1\u8005\u63a8\u8350\u7ed9\u5f00\u53d1\u8005\u7684\u4e00\u79cd\u7c7b\u52a0\u8f7d\u5b9e\u73b0\u65b9\u5f0f\u3002"}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"\u53cc\u4eb2\u59d4\u6d3e\u6a21\u578b\u7684\u5de5\u4f5c\u8fc7\u7a0b",children:"\u53cc\u4eb2\u59d4\u6d3e\u6a21\u578b\u7684\u5de5\u4f5c\u8fc7\u7a0b"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"\u5982\u679c\u4e00\u4e2a\u7c7b\u52a0\u8f7d\u5668\u6536\u5230\u4e86\u7c7b\u52a0\u8f7d\u7684\u8bf7\u6c42\uff0c\u5b83\u4e0d\u4f1a\u5148\u81ea\u5df1\u5c1d\u8bd5\u5904\u7406\u8fd9\u4e2a\u8bf7\u6c42\uff0c\u800c\u662f\u59d4\u6d3e\u7ed9\u5b83\u7684\u7236\u7c7b\u52a0\u8f7d\u5668\uff0c\u6240\u6709\u7684\u8bf7\u6c42\u6700\u7ec8\u90fd\u4f1a\u4f20\u9001\u5230\u9876\u5c42\u7684\u542f\u52a8\u7c7b\u52a0\u8f7d\u5668\u3002"}),"\n",(0,a.jsx)(n.li,{children:"\u53ea\u6709\u5f53\u7236\u7c7b\u53cd\u9988\u81ea\u5df1\u65e0\u6cd5\u5b8c\u6210\u8be5\u8bf7\u6c42\uff08\u5b83\u7684\u641c\u7d22\u8303\u56f4\u4e2d\u6ca1\u6709\u627e\u5230\u6240\u9700\u7684\u7c7b\uff0c\u5373\u629bClassNotFoundException\uff09\u65f6\uff0c\u5b50\u52a0\u8f7d\u5668\u624d\u4f1a\u5c1d\u8bd5\u81ea\u5df1\u52a0\u8f7d\u3002"}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"\u4e3a\u4ec0\u4e48\u7528\u53cc\u4eb2\u59d4\u6d3e\u6a21\u578b",children:"\u4e3a\u4ec0\u4e48\u7528\u53cc\u4eb2\u59d4\u6d3e\u6a21\u578b\uff1f"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"\u4e3a\u4e86\u4fdd\u8bc1JVM\u5185\u5b58\u4e2d\u76f8\u540c\u7684\u7c7b\u53ea\u6709\u4e00\u4e2a\uff0c\u9632\u6b62\u51fa\u73b0\u591a\u4e2a\u3002"})}),"\n",(0,a.jsxs)(n.p,{children:["\u4f7f\u7528\u53cc\u4eb2\u59d4\u6d3e\u6a21\u578b\u53ef\u4ee5\u4f7f\u5f97Java\u7c7b\u968f\u7740\u5b83\u7684\u7c7b\u52a0\u8f7d\u5668\u4e00\u8d77\u5177\u5907\u4e86\u4e00\u79cd",(0,a.jsx)(n.strong,{children:"\u5e26\u6709\u4f18\u5148\u7ea7\u7684\u5c42\u6b21\u5173\u7cfb"})," \u3002"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"     */\n    protected Class<?> loadClass(String name, boolean resolve)\n        throws ClassNotFoundException\n    {\n        synchronized (getClassLoadingLock(name)) {\n            // \u9996\u5148\u68c0\u67e5\u662f\u5426\u5df2\u7ecf\u52a0\u8f7d\n            Class<?> c = findLoadedClass(name);\n            if (c == null) {\n                long t0 = System.nanoTime();\n                try {\n                    if (parent != null) {\n                        c = parent.loadClass(name, false);\n                    } else {\n                        c = findBootstrapClassOrNull(name);\n                    }\n                } catch (ClassNotFoundException e) {\n                    \n                }\n\n                if (c == null) {\n                   //\u5982\u679c\u4e00\u76f4\u6ca1\u6709\u627e\u5230\u5c31\u8c03\u7528findClassc\u65b9\u6cd5\u67e5\u627e\n                   //findClass \u65b9\u6cd5\u9700\u8981\u81ea\u5df1\u505aoverride,\u5982\u679c\u6ca1\u6709\u76f4\u63a5\n                  \t//\u629b\u51fa ClassNotFoundException\n                    long t1 = System.nanoTime();\n                    c = findClass(name);\n\n                    // this is the defining class loader; record the stats\n                    sun.misc.PerfCounter.getParentDelegationTime().addTime(t1 - t0);\n                    sun.misc.PerfCounter.getFindClassTime().addElapsedTimeFrom(t1);\n                    sun.misc.PerfCounter.getFindClasses().increment();\n                }\n            }\n            if (resolve) {\n                resolveClass(c);\n            }\n            return c;\n        }\n    }\n"})}),"\n",(0,a.jsx)(n.h3,{id:"3-\u81ea\u5b9a\u4e49\u7c7b\u52a0\u8f7d\u5668",children:"3. \u81ea\u5b9a\u4e49\u7c7b\u52a0\u8f7d\u5668"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'package com.github.mxsm;\n\nimport org.apache.commons.io.FileUtils;\n\nimport java.io.File;\nimport java.io.IOException;\n\npublic class MxsmClassLoader extends ClassLoader {\n\n    private String classLoaderName;\n\n    private String path;\n\n    private static final String SUFFIX =  ".class";\n\n    public MxsmClassLoader(String classLoaderName) {\n        this.classLoaderName = classLoaderName;\n    }\n\n    @Override\n    protected Class<?> findClass(String name) throws ClassNotFoundException {\n        byte[] b = new byte[0];\n        try {\n            b = loadClassData(name);\n        } catch (IOException e) {\n            e.printStackTrace();\n        }\n        return defineClass(name, b, 0, b.length);\n    }\n\n    private byte[] loadClassData(String name) throws IOException {\n\n        return FileUtils.readFileToByteArray(new File(getPath() + name.replace(".", "\\\\")+SUFFIX));\n\n    }\n\n    public String getPath() {\n        return path;\n    }\n\n    public void setPath(String path) {\n        this.path = path;\n    }\n\n    @Override\n    public String toString() {\n        return "MxsmClassLoader{" +\n                "classLoaderName=\'" + classLoaderName + \'\\\'\' +\n                \'}\';\n    }\n}\n'})}),"\n",(0,a.jsxs)(n.p,{children:["\u8fd9\u4e2a\u81ea\u5b9a\u4e49\u7c7b\u52a0\u8f7d\u5668\u7684\u6a21\u677f\u53ef\u4ee5\u5728 ",(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.code,{children:"ClassLoader"})})," \u7c7b\u7684\u8bf4\u660e\u4e0a\u9762\u627e\u5230\u3002\u8fd9\u6837\u5c31\u5b9e\u73b0\u4e86\u81ea\u5b9a\u4e49\u7684\u7c7b\u52a0\u8f7d\u5668\u3002"]}),"\n",(0,a.jsx)(n.h3,{id:"4-\u81ea\u5b9a\u4e49\u7c7b\u52a0\u8f7d\u5668\u7684\u7236\u7c7b\u8bf4\u660e",children:"4. \u81ea\u5b9a\u4e49\u7c7b\u52a0\u8f7d\u5668\u7684\u7236\u7c7b\u8bf4\u660e"}),"\n",(0,a.jsx)(n.p,{children:"\u4e0b\u56fe\u662f\u6211\u8fd0\u884c\u5f53\u524d\u4ee3\u7801\u7684\u7ed3\u679c\uff1a"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:"https://github.com/mxsm/document/blob/master/image/JSE/ClassLoader.gif?raw=true",alt:""})}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"\u7b2c\u4e00\u79cd\u60c5\u51b5A\u5728ClassPath\u4e0b\u9762\uff0c\u6240\u4ee5\u52a0\u8f7d\u7c7b\u662f\u901a\u8fc7AppClassLoader\u52a0\u8f7d\u7684\u3002"}),"\n",(0,a.jsxs)(n.li,{children:["\u7b2c\u4e8c\u79cd\u60c5\u51b5\u628aClassPath\u4e0b\u9762\u7684\u7c7b\u5220\u9664\uff0c\u91cd\u65b0\u5b58\u653e\u3002\u5230\u53e6\u4e00\u4e2a\u5730\u65b9\u3002\u7136\u540e\u6253\u5370\u53d1\u73b0A\u52a0\u8f7d\u662f\u901a\u8fc7\u81ea\u5b9a\u4e49\u7684 ",(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.code,{children:"MxsmClassLoader"})})," \u52a0\u8f7d\u7684\u3002"]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["\u8fd9\u91cc\u5c31\u5f88\u597d\u7684\u8bf4\u660e\u4e86",(0,a.jsx)(n.a,{href:"#%E5%8F%8C%E4%BA%B2%E5%A7%94%E6%B4%BE%E6%A8%A1%E5%9E%8B%E7%9A%84%E5%B7%A5%E4%BD%9C%E8%BF%87%E7%A8%8B",children:"\u53cc\u4eb2\u59d4\u6d3e\u6a21\u578b\u7684\u5de5\u4f5c\u539f\u7406"})]}),"\n",(0,a.jsx)(n.h3,{id:"5-\u7c7b\u52a0\u8f7d\u5668\u7684\u547d\u540d\u7a7a\u95f4",children:"5. \u7c7b\u52a0\u8f7d\u5668\u7684\u547d\u540d\u7a7a\u95f4"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"\u6bcf\u4e2a\u7c7b\u52a0\u8f7d\u5668\u90fd\u6709\u81ea\u5df1\u7684\u547d\u540d\u7a7a\u95f4\uff0c\u547d\u540d\u7a7a\u95f4\u7531\u8be5\u52a0\u8f7d\u5668\u53ca\u6240\u6709\u7684\u7236\u52a0\u8f7d\u5668\u6240\u52a0\u8f7d\u7684\u7c7b\u7ec4\u6210\u3002"})}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"\u5728\u540c\u4e00\u4e2a\u547d\u540d\u7a7a\u95f4\u91cc\u9762\u4e0d\u5141\u8bb8\u51fa\u73b0\u4e24\u4e2a\u5b8c\u5168\u4e00\u6837\u7684\u7c7b"}),"\n",(0,a.jsx)(n.li,{children:"\u4e0d\u540c\u7684\u547d\u540d\u7a7a\u95f4\u53ef\u4ee5\u51fa\u73b0\u4e24\u4e2a\u5b8c\u5168\u4e00\u6837\u7684\u7c7b\uff0c\u76f8\u4e92\u65e0\u611f\u77e5\u4e5f\u5c31\u662f\u8bf4\u4e24\u4e2aClass\u4e0d\u4e00\u6837"}),"\n",(0,a.jsx)(n.li,{children:"\u5b50\u52a0\u8f7d\u5668\u6240\u52a0\u8f7d\u7684\u7c7b\u53ef\u4ee5\u770b\u89c1\u7236\u52a0\u8f7d\u5668\u52a0\u8f7d\u7684\u7c7b\uff0c\u4f46\u662f\u7236\u52a0\u8f7d\u5668\u6240\u52a0\u8f7d\u7684\u7c7b\u65e0\u6cd5\u770b\u89c1\u5b50\u52a0\u8f7d\u5668\u52a0\u8f7d\u7684\u7c7b"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"\u4e0b\u9762\u8fd0\u884c\u4ee3\u7801\u6765\u9a8c\u8bc1\uff0c\u9996\u5148\u5728ClassPath\u4e0b\u9762\u4e0d\u5220\u9664A\u67e5\u770b\u8fd0\u884c\u7ed3\u679c\uff1a"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:"https://github.com/mxsm/document/blob/master/image/JSE/ClassLoaderNamspace1.gif?raw=true",alt:""})}),"\n",(0,a.jsx)(n.p,{children:"\u8fd9\u91cc\u662f\u6ca1\u6709\u62a5\u9519\u7684\u3002"}),"\n",(0,a.jsx)(n.p,{children:"\u6211\u4eec\u628aClassPath\u7684A\u5220\u9664\u7136\u540e\u8fd0\u884c\uff1a"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:"https://github.com/mxsm/document/blob/master/image/JSE/ClassLoaderNamspace2.gif?raw=true",alt:""})}),"\n",(0,a.jsx)(n.p,{children:"\u770b\u4e00\u4e0b\u62a5\u9519\uff1a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'Exception in thread "main" java.lang.reflect.InvocationTargetException\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat com.github.mxsm.App2.main(App2.java:23)\nCaused by: java.lang.ClassCastException: com.github.mxsm.algorithm.A cannot be cast to com.github.mxsm.algorithm.A\n\tat com.github.mxsm.algorithm.A.setA(A.java:12)\n\t... 5 more\n'})}),"\n",(0,a.jsx)(n.p,{children:"\u8fd9\u91cc\u62a5 java.lang.ClassCastException: com.github.mxsm.algorithm.A cannot be cast to com.github.mxsm.algorithm.A \u8fd9\u662f\u4e3a\u4ec0\u4e48\uff1f"}),"\n",(0,a.jsx)(n.p,{children:"\u539f\u56e0\u5c31\u5728\u4e8eA\u7684\u52a0\u8f7d\u662f\u4e0d\u540c\u7684\u7c7b\u52a0\u8f7d\u5668\u52a0\u8f7d\uff0c\u7531\u4e8e\u6709\u7c7b\u52a0\u8f7d\u5668\u547d\u540d\u7a7a\u95f4\u7684\u5b58\u5728\u3002\u6240\u4ee5\u5176\u5b9e\u52a0\u8f7d\u7684\u662f\u4e24\u4e2a\u4e0d\u540c\u7684\u7c7b\u3002\u6240\u4ee5\u5728\u8fdb\u884c\u5f3a\u884c\u8f6c\u6362\u7684\u65f6\u5019\u56de\u51fa\u73b0 A \u4e0d\u80fd\u8f6c\u6362 A\u7684\u60c5\u51b5\u3002"})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>r,a:()=>i});var a=s(7294);const t={},l=a.createContext(t);function i(e){const n=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),a.createElement(l.Provider,{value:n},e.children)}}}]);