"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[8070],{3905:(e,a,n)=>{n.d(a,{Zo:()=>c,kt:()=>h});var t=n(7294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function l(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function p(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=t.createContext({}),i=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},c=function(e){var a=i(e.components);return t.createElement(s.Provider,{value:a},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},u=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=i(n),u=r,h=d["".concat(s,".").concat(u)]||d[u]||m[u]||l;return n?t.createElement(h,o(o({ref:a},c),{},{components:n})):t.createElement(h,o({ref:a},c))}));function h(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=u;var p={};for(var s in a)hasOwnProperty.call(a,s)&&(p[s]=a[s]);p.originalType=e,p[d]="string"==typeof e?e:r,o[1]=p;for(var i=2;i<l;i++)o[i]=n[i];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5645:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>i});var t=n(7462),r=(n(7294),n(3905));const l={title:"ThreadLocal\u6e90\u7801\u89e3\u6790",date:new Date("2018-11-30T00:00:00.000Z")},o=void 0,p={unversionedId:"java/java-se/concurrencemultithreading/ThreadLocal-source-analysis",id:"java/java-se/concurrencemultithreading/ThreadLocal-source-analysis",title:"ThreadLocal\u6e90\u7801\u89e3\u6790",description:"1. \u4ec0\u4e48\u662fThreadLocal\uff1f",source:"@site/docs/java/java-se/concurrencemultithreading/ThreadLocal-source-analysis.md",sourceDirName:"java/java-se/concurrencemultithreading",slug:"/java/java-se/concurrencemultithreading/ThreadLocal-source-analysis",permalink:"/docs/java/java-se/concurrencemultithreading/ThreadLocal-source-analysis",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/java/java-se/concurrencemultithreading/ThreadLocal-source-analysis.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1680402643,formattedLastUpdatedAt:"Apr 2, 2023",frontMatter:{title:"ThreadLocal\u6e90\u7801\u89e3\u6790",date:"2018-11-30T00:00:00.000Z"},sidebar:"javase",previous:{title:"LockSupport\u7528\u6cd5\u548c\u539f\u7406",permalink:"/docs/java/java-se/concurrencemultithreading/LockSupport"},next:{title:"Callable\u4e0eRunnable\u7684\u533a\u522b\u4f60\u77e5\u9053\u5417\uff1f",permalink:"/docs/java/java-se/concurrencemultithreading/callable-and-runnable"}},s={},i=[{value:"1. \u4ec0\u4e48\u662fThreadLocal\uff1f",id:"1-\u4ec0\u4e48\u662fthreadlocal",level:3},{value:"2. ThreadLocal\u6e90\u7801\u5206\u6790\u2014 JDK8",id:"2-threadlocal\u6e90\u7801\u5206\u6790-jdk8",level:3}],c={toc:i},d="wrapper";function m(e){let{components:a,...n}=e;return(0,r.kt)(d,(0,t.Z)({},c,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"1-\u4ec0\u4e48\u662fthreadlocal"},"1. \u4ec0\u4e48\u662fThreadLocal\uff1f"),(0,r.kt)("p",null,"\u4ece\u540d\u5b57\u4e0a\u9762\u770b\u5c31\u5927\u81f4\u5e94\u8be5\u80fd\u591f\u731c\u5230\u548c ",(0,r.kt)("strong",{parentName:"p"},"\u7ebf\u7a0b")," \u4ee5\u53ca ",(0,r.kt)("strong",{parentName:"p"},"\u672c\u5730")," \u7684\u4e00\u4e9b\u77e5\u8bc6\u6709\u5173\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"ThreadLocal"))," \u63d0\u4f9b\u4e86\u7ebf\u7a0b\u672c\u5730\u53d8\u91cf\uff0c\u5b83\u53ef\u4ee5\u4fdd\u8bc1\u8bbf\u95ee\u5230\u7684\u53d8\u91cf\u5c5e\u4e8e\u5f53\u524d\u7ebf\u7a0b\uff0c\u6bcf\u4e2a\u7ebf\u7a0b\u90fd\u4fdd\u5b58\u6709\u4e00\u4e2a\u53d8\u91cf\u526f\u672c\uff0c\u6bcf\u4e2a\u7ebf\u7a0b\u7684\u53d8\u91cf\u90fd\u4e0d\u540c\uff0c\u800c\u540c\u4e00\u4e2a\u7ebf\u7a0b\u5728\u4efb\u4f55\u65f6\u5019\u8bbf\u95ee\u8fd9\u4e2a\u672c\u5730\u53d8\u91cf\u7684\u7ed3\u679c\u90fd\u662f\u4e00\u81f4\u7684\u3002\u5f53\u6b64\u7ebf\u7a0b\u7ed3\u675f\u751f\u547d\u5468\u671f\u65f6\uff0c\u6240\u6709\u7684\u7ebf\u7a0b\u672c\u5730\u5b9e\u4f8b\u90fd\u4f1a\u88ab ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"GC"))," \u3002",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"ThreadLocal"))," \u76f8\u5f53\u4e8e\u63d0\u4f9b\u4e86",(0,r.kt)("strong",{parentName:"p"},"\u4e00\u79cd\u7ebf\u7a0b\u9694\u79bb"),"\uff0c\u5c06\u53d8\u91cf\u4e0e\u7ebf\u7a0b\u76f8\u7ed1\u5b9a\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6982\u62ec\u7684\u8bf4\uff1a\u5c31\u662f\u63d0\u4f9b\u4e00\u79cd\u8bbf\u95ee\u6570\u636e\u7684\u7ebf\u7a0b\u9694\u79bb\u6a21\u5f0f")),(0,r.kt)("h3",{id:"2-threadlocal\u6e90\u7801\u5206\u6790-jdk8"},"2. ThreadLocal\u6e90\u7801\u5206\u6790\u2014 JDK8"),(0,r.kt)("p",null,"\u9996\u5148\u770b\u6211\u4eec\u4e00\u822c\u5982\u4f55\u4f7f\u7528 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"ThreadLoacl"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'        ThreadLocal<String> threadLocal = new ThreadLocal<>();\n        threadLocal.set("test");\n        threadLocal.get();\n        threadLocal.remove();\n')),(0,r.kt)("p",null,"\u4e3b\u8981\u662f\u5305\u542b\u4e86\uff1a ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"set")),"  \u3001 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"get"))," \u3001  ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"remove"))," \u4e09\u4e2a\u65b9\u6cd5"),(0,r.kt)("p",null,"\u770b\u4e00\u4e0b ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"ThreadLocal"))," \u7c7b\u4e2d\u7684\u53d8\u91cf\u60c5\u51b5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"\n    private final int threadLocalHashCode = nextHashCode();\n\n    /**\n     * HashCode\u7684\u521d\u59cb\u503c\u4e3a0\n     * \n     */\n    private static AtomicInteger nextHashCode =\n        new AtomicInteger();\n\n    /**\n     *hash\u503c\u7684\u589e\u957f\u6b65\u957f\n     */\n    private static final int HASH_INCREMENT = 0x61c88647;\n\n    /**\n     * \u8fd4\u56de\u4e0b\u4e00\u4e2aHashCode\n     */\n    private static int nextHashCode() {\n        return nextHashCode.getAndAdd(HASH_INCREMENT);\n    }\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"ThreadLocal"))," \u901a\u8fc7 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"threadLocalHashCode"))," \u6765\u6807\u8bc6\u6bcf\u4e00\u4e2a ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"ThreadLocal"))," \u7684\u552f\u4e00\u6027\u3002",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"threadLocalHashCode"))," \u901a\u8fc7 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"AtomicInteger"))," \u8fdb\u884c\u66f4\u65b0 (",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"CAS")),") \u6bcf\u4e00\u6b21hash\u64cd\u4f5c\u7684\u589e\u91cf\u4e3a ",(0,r.kt)("strong",{parentName:"p"},"0x61c88647")),(0,r.kt)("p",null,"\u770b\u4e00\u4e0b ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"set"))," \u65b9\u6cd5"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"    public void set(T value) {\n        //\u83b7\u53d6\u5f53\u524d\u6267\u884c\u65b9\u6cd5\u7684\u7ebf\u7a0b\n        Thread t = Thread.currentThread();\n        //\u83b7\u53d6\u5f53\u524d\u7ebf\u7a0b\u7684ThreadLocalMap\n        ThreadLocalMap map = getMap(t);\n        if (map != null)\n            //\u5b58\u5728\u76f4\u63a5\u653e\u5165\u503c\n            map.set(this, value);\n        else\n            //\u4e0d\u5b58\u5728\u76f4\u63a5\u5148\u521b\u5efaThreadLocalMap \u7136\u540e\u653e\u5165\n            createMap(t, value);\n    }\n")),(0,r.kt)("p",null,"\u8ddf\u8fdb\u770b\u4e00\u4e0b  ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"getMap(Thread t)"))," \u65b9\u6cd5"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"ThreadLocalMap getMap(Thread t) {\n    return t.threadLocals;\n}\n\n//\u5728Thread \u5185\u90e8\u7684\u53d8\u91cf\nThreadLocal.ThreadLocalMap threadLocals = null;\n")),(0,r.kt)("p",null,"\u8fd9\u91cc\u53ef\u4ee5\u770b\u51fa\u8fd4\u56de\u7684\u662f ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Thread"))," \u5185\u90e8\u7684\u4e00\u4e2a\u7c7b\u3002\u5230\u4e86\u8fd9\u91cc\uff0c\u6211\u4eec\u53ef\u4ee5\u770b\u51fa\uff0c\u6bcf\u4e2a ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Thread"))," \u91cc\u9762\u90fd\u6709\u4e00\u4e2a ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"ThreadLocal.ThreadLocalMap"))," \u6210\u5458\u53d8\u91cf\uff0c\u4e5f\u5c31\u662f\u8bf4\u6bcf\u4e2a\u7ebf\u7a0b\u901a\u8fc7 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"ThreadLocal.ThreadLocalMap"))," \u4e0e ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"ThreadLocal"))," \u76f8\u7ed1\u5b9a\uff0c\u8fd9\u6837\u53ef\u4ee5\u786e\u4fdd\u6bcf\u4e2a\u7ebf\u7a0b\u8bbf\u95ee\u5230\u7684thread-local variable\u90fd\u662f\u672c\u7ebf\u7a0b\u7684\u3002"),(0,r.kt)("p",null," ",(0,r.kt)("strong",{parentName:"p"},"ThreadLocalMap\u7684\u5b9e\u73b0")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Map\u7684\u521d\u59cb\u5bb9\u91cf 2\u7684\u5e42.\n */\nprivate static final int INITIAL_CAPACITY = 16;\n/**\n * \u662f\u4e00\u4e2aEntry \u7c7b\u578b\u7684\u6570\u7ec4\uff0c\u7528\u4e8e\u5b58\u50a8\u6570\u636e\n */\nprivate Entry[] table;\n/**\n * \u8868\u4e2d\u7684\u5b58\u50a8\u6570\u76ee\n */\nprivate int size = 0;\n/**\n * \u6269\u5bb9\u7684\u9608\u503c\n */\nprivate int threshold; // Default to 0\n\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Entry"))," \u662f ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"ThreadLocalMap"))," \u4e2d\u7684\u9759\u6001\u5185\u90e8\u7c7b\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"        static class Entry extends WeakReference<ThreadLocal<?>> {\n            /** The value associated with this ThreadLocal. */\n            Object value;\n\n            Entry(ThreadLocal<?> k, Object v) {\n                super(k);\n                value = v;\n            }\n        }\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Entry"))," \u7c7b\u7ee7\u627f\u4e86 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"WeakReference<ThreadLocal<?>>"))," \uff0c\u5373\u6bcf\u4e2a ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Entry"))," \u5bf9\u8c61\u90fd\u6709\u4e00\u4e2a ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"ThreadLocal"))," \u7684\u5f31\u5f15\u7528\uff08\u4f5c\u4e3akey\uff09\uff0c\u8fd9\u662f\u4e3a\u4e86\u9632\u6b62\u5185\u5b58\u6cc4\u9732\u3002\u4e00\u65e6\u7ebf\u7a0b\u7ed3\u675f\uff0ckey\u53d8\u4e3a\u4e00\u4e2a\u4e0d\u53ef\u8fbe\u7684\u5bf9\u8c61\uff0c\u8fd9\u4e2aEntry\u5c31\u53ef\u4ee5\u88abGC\u4e86\u3002"),(0,r.kt)("p",null,"\u6784\u9020\u51fd\u6570"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"        ThreadLocalMap(ThreadLocal<?> firstKey, Object firstValue) {\n            //\u521d\u59cb\u5316\u5927\u5c0f\n            table = new Entry[INITIAL_CAPACITY];\n            //\u83b7\u53d6\u4f4d\u7f6e --- \u548cHashMap\u4e2d\u7684 hashCode & (size - 1) \u627e\u54c8\u5e0c\u6876\u662f\u4e00\u4e2a\u9053\u7406\n            int i = firstKey.threadLocalHashCode & (INITIAL_CAPACITY - 1);\n            table[i] = new Entry(firstKey, firstValue);\n            size = 1;\n            // \u8bbe\u7f6e\u9608\u503c -- len * 2 / 3;\n            setThreshold(INITIAL_CAPACITY);\n        }\n")),(0,r.kt)("p",null,"\u63a5\u7740\u770b\u4e00\u4e0b ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"ThreadLocalMap#set"))," \u65b9\u6cd5\u7684\u5b9e\u73b0"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"}," private void set(ThreadLocal<?> key, Object value) {\n\n            Entry[] tab = table;\n            int len = tab.length;\n            int i = key.threadLocalHashCode & (len-1);\n                        \n                    //nextIndex \u65b9\u6cd5\u6765\u89e3\u51b3hash\u51b2\u7a81 --- \u7ebf\u6027\u63a2\u6d4b\u6cd5 \u800c\u4e0d\u662f HashMap\u7684\u94fe\u8868\n            for (Entry e = tab[i];e != null; e = tab[i = nextIndex(i, len)]) {\n                ThreadLocal<?> k = e.get();\n\n                if (k == key) {\n                    e.value = value;\n                    return;\n                }\n\n                if (k == null) {\n                    replaceStaleEntry(key, value, i);\n                    return;\n                }\n            }\n\n            tab[i] = new Entry(key, value);\n            int sz = ++size;\n            if (!cleanSomeSlots(i, sz) && sz >= threshold)\n                rehash();\n        }\n")),(0,r.kt)("p",null,"\u63a5\u4e0b\u6765\u770b\u770b ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"ThreadLocal#get"))," \u65b9\u6cd5"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'    public T get() {\n        Thread t = Thread.currentThread();\n        ThreadLocalMap map = getMap(t);\n        if (map != null) {\n            ThreadLocalMap.Entry e = map.getEntry(this);\n            if (e != null) {\n                @SuppressWarnings("unchecked")\n                T result = (T)e.value;\n                return result;\n            }\n        }\n        return setInitialValue();\n    }\n\n')),(0,r.kt)("p",null,"\u770b\u4e00\u4e0b ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"ThreadLocal#remove"))," \u65b9\u6cd5"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public void remove() {\n         ThreadLocalMap m = getMap(Thread.currentThread());\n         if (m != null)\n             //\u8c03\u7528ThreadLocalMap\u7684remove\n             m.remove(this);\n     }\n")))}m.isMDXComponent=!0}}]);