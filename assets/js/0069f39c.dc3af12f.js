"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[1094],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=i.createContext({}),c=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(p.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=c(n),u=r,g=m["".concat(p,".").concat(u)]||m[u]||s[u]||a;return n?i.createElement(g,o(o({ref:t},d),{},{components:n})):i.createElement(g,o({ref:t},d))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8152:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var i=n(7462),r=(n(7294),n(3905));const a={title:"AtomicXXXFieldUpdater\u5728\u5185\u5b58\u4f18\u5316\u4e2d\u7684\u662f\u5b9e\u6218",linkTitle:"AtomicXXXFieldUpdater\u5728\u5185\u5b58\u4f18\u5316\u4e2d\u7684\u5b9e\u6218",date:new Date("2022-09-03T00:00:00.000Z"),weight:202209031441},o=void 0,l={unversionedId:"java/java-se/concurrencemultithreading/AtomicXxxFieldUpdater",id:"java/java-se/concurrencemultithreading/AtomicXxxFieldUpdater",title:"AtomicXXXFieldUpdater\u5728\u5185\u5b58\u4f18\u5316\u4e2d\u7684\u662f\u5b9e\u6218",description:"1. \u80cc\u666f",source:"@site/docs/java/java-se/concurrencemultithreading/AtomicXxxFieldUpdater.md",sourceDirName:"java/java-se/concurrencemultithreading",slug:"/java/java-se/concurrencemultithreading/AtomicXxxFieldUpdater",permalink:"/docs/java/java-se/concurrencemultithreading/AtomicXxxFieldUpdater",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/java/java-se/concurrencemultithreading/AtomicXxxFieldUpdater.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1676193845,formattedLastUpdatedAt:"Feb 12, 2023",frontMatter:{title:"AtomicXXXFieldUpdater\u5728\u5185\u5b58\u4f18\u5316\u4e2d\u7684\u662f\u5b9e\u6218",linkTitle:"AtomicXXXFieldUpdater\u5728\u5185\u5b58\u4f18\u5316\u4e2d\u7684\u5b9e\u6218",date:"2022-09-03T00:00:00.000Z",weight:202209031441},sidebar:"javase",previous:{title:"AQS\u6e90\u7801\u89e3\u6790",permalink:"/docs/java/java-se/concurrencemultithreading/AQS"},next:{title:"CompletableFuture\u8be6\u89e3",permalink:"/docs/java/java-se/concurrencemultithreading/CompletableFuture"}},p={},c=[{value:"1. \u80cc\u666f",id:"1-\u80cc\u666f",level:3},{value:"2. \u6848\u4f8b\u8bf4\u660e",id:"2-\u6848\u4f8b\u8bf4\u660e",level:3},{value:"3. AtomicXXXFieldUpdater\u5982\u4f55\u4f7f\u7528",id:"3-atomicxxxfieldupdater\u5982\u4f55\u4f7f\u7528",level:3},{value:"4. \u4f7f\u7528AtomicXXXFieldUpdater\u540e\u5185\u5b58\u4e3a\u4ec0\u4e48\u4f1a\u51cf\u5c11",id:"4-\u4f7f\u7528atomicxxxfieldupdater\u540e\u5185\u5b58\u4e3a\u4ec0\u4e48\u4f1a\u51cf\u5c11",level:3},{value:"5. \u603b\u7ed3",id:"5-\u603b\u7ed3",level:3}],d={toc:c},m="wrapper";function s(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"1-\u80cc\u666f"},"1. \u80cc\u666f"),(0,r.kt)("p",null,"\u5728\u5f88\u591a\u9879\u76ee\u4e2d\u4f8b\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},"Netty\u3001druid\u3001DLedger")," \u4e2d\u90fd\u80fd\u770b\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"AtomicXXXFieldUpdater")," \u7684\u8eab\u5f71,\u4f8b\u5982\u5728Netty\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"HashedWheelTimer")," \u7c7b\u4e2d\u5c31\u6709 ",(0,r.kt)("inlineCode",{parentName:"p"},"AtomicIntegerFieldUpdater")," \u4ee3\u7801\u7684\u5b58\u5728\u3002\u53c8\u6bd4\u5982\u5728druid\u4e2d\u7684",(0,r.kt)("a",{parentName:"p",href:"https://github.com/alibaba/druid/pull/165/files"},"PR-165"),"\u3002\u5927\u91cf\u7684\u8bd5\u7528\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"AtomicXXXFieldUpdater")," \u8fd9\u4e00\u7c7b\u76f8\u4f3c\u7684\u7c7b\u3002AtomicXXXFieldUpdater\u8868\u793a\u7684\u662f\u4e00\u7cfb\u5217\u7c7b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"AtomicIntegerFieldUpdater")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"AtomicLongFieldUpdater")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"AtomicReferenceFieldUpdater"))),(0,r.kt)("p",null,"\u4eca\u5929\u5c31\u6765\u804a\u804a ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"AtomicXXXFieldUpdater"))," \u5728\u5185\u5b58\u4f18\u5316\u4e2d\u7684\u5b9e\u6218\uff0c\u4e0b\u9762\u5728\u7b14\u8005\u5728 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/openmessaging/dledger"},"DLedger(RocketMQ\u7684\u4e00\u4e2a\u7ec4\u4ef6)")," \u4e2d\u5bf9\u5185\u5b58\u7684\u4f18\u5316\uff0c\u5bf9\u5e94\u7684",(0,r.kt)("a",{parentName:"p",href:"https://github.com/openmessaging/dledger/issues/189"},"ISSUE#189"),"\u548c",(0,r.kt)("a",{parentName:"p",href:"https://github.com/openmessaging/dledger/pull/190"},"PR-190")),(0,r.kt)("h3",{id:"2-\u6848\u4f8b\u8bf4\u660e"},"2. \u6848\u4f8b\u8bf4\u660e"),(0,r.kt)("p",null,"\u9996\u5148\u6211\u4eec\u770b\u4e00\u4e0b\u8fd9\u6837\u7684\u4f8b\u5b50\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public class AtomicIntegerTest {\n\n    final AtomicInteger startPosition = new AtomicInteger(0);\n    final AtomicInteger wrotePosition = new AtomicInteger(0);\n    final AtomicInteger committedPosition = new AtomicInteger(0);\n    final AtomicInteger flushedPosition = new AtomicInteger(0);\n\n    public static void main(String[] args) throws Exception{\n        List<AtomicIntegerTest> list = new LinkedList<>();\n        for (int i = 0; i < 1000000; i++) {\n            list.add(new AtomicIntegerTest());\n        }\n        System.out.println("create instances 1000000");\n        System.in.read();\n    }\n\n}\n')),(0,r.kt)("p",null,"\u7136\u540e\u4f7f\u7528 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"YourKit tools"))," \u5de5\u5177\u8fdb\u884c\u5206\u6790(\u4e5f\u53ef\u4ee5\u4f7f\u7528\u5176\u4ed6\u7684\u5206\u6790\u5de5\u5177)\u3002"),(0,r.kt)("p",null," ",(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/java/concurrencemultithreading/AtomicXXXFieldUpdater1.png",alt:"AtomicXXXFieldUpdater1"})),(0,r.kt)("p",null,"\u4ece\u4e0a\u56fe\u53ef\u4ee5\u770b\u51fa\u6765",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"AtomicInteger"))," \u5927\u6982\u5360\u7528\u4e8664M\u3002\u800cAtomicIntegerTest\u5bf9\u8c61\u5b9e\u4f8b\u6574\u4e2a\u5360\u7528\u4e8696M."),(0,r.kt)("p",null,"\u7136\u540e\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"AtomicIntegerFieldUpdater")," \u8fdb\u884c\u6539\u9020,\u5982\u4e0b\u4f8b\u5b50\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public class AtomicIntegerFieldUpdaterTest {\n\n    public static final AtomicIntegerFieldUpdater<AtomicIntegerFieldUpdaterTest> startPosition =  AtomicIntegerFieldUpdater.newUpdater(AtomicIntegerFieldUpdaterTest.class,"startPositionInt");\n    public static final AtomicIntegerFieldUpdater<AtomicIntegerFieldUpdaterTest> wrotePosition = AtomicIntegerFieldUpdater.newUpdater(AtomicIntegerFieldUpdaterTest.class,"wrotePositionInt");\n    public static final AtomicIntegerFieldUpdater<AtomicIntegerFieldUpdaterTest> committedPosition = AtomicIntegerFieldUpdater.newUpdater(AtomicIntegerFieldUpdaterTest.class,"committedPositionInt");\n    public static final AtomicIntegerFieldUpdater<AtomicIntegerFieldUpdaterTest> flushedPosition =AtomicIntegerFieldUpdater.newUpdater(AtomicIntegerFieldUpdaterTest.class,"flushedPositionInt");\n\n    private volatile int startPositionInt = 0;\n    private volatile int wrotePositionInt = 0;\n    private volatile int committedPositionInt = 0;\n    private volatile int flushedPositionInt = 0;\n\n    public static void main(String[] args) throws Exception{\n        List<AtomicIntegerFieldUpdaterTest> list = new LinkedList<>();\n        for (int i = 0; i < 1000000; i++) {\n            list.add(new AtomicIntegerFieldUpdaterTest());\n        }\n        System.out.println("create instances 1000000");\n        System.in.read();\n    }\n\n}\n')),(0,r.kt)("p",null,"\u4f7f\u7528\u4f7f\u7528 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"YourKit tools"))," \u5de5\u5177\u8fdb\u884c\u5206\u6790\u7ed3\u679c\u5982\u4e0b\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/java/concurrencemultithreading/AtomicXXXFieldUpdater2.png",alt:"AtomicXXXFieldUpdater2"})),(0,r.kt)("p",null,"AtomicIntegerFieldUpdaterTest\u6574\u4e2a\u5bf9\u8c61\u5927\u5c0f\u7684\u548c\u4e3a32M,\u76f8\u6bd4\u4e4b\u524d\u7684\u603b\u5171\u5c0f\u4e8664M\u3002\u5927\u5927\u7684\u51cf\u5c11\u4e86\u5185\u5b58\u7684\u5f00\u9500\u3002"),(0,r.kt)("p",null,"\u7136\u540e\u7b14\u8005\u5bf9DLedger\u9879\u76ee\u7684DefaultMmapFile\u8fdb\u884c\u4f18\u5316\u6700\u7ec8\u88abMerge:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/java/concurrencemultithreading/image-20220903151732636.png",alt:"image-20220903151732636"})),(0,r.kt)("h3",{id:"3-atomicxxxfieldupdater\u5982\u4f55\u4f7f\u7528"},"3. AtomicXXXFieldUpdater\u5982\u4f55\u4f7f\u7528"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"AtomicXXXFieldUpdater\u5fc5\u987b\u662f\u9759\u6001\u53d8\u91cf")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u88ab\u66f4\u65b0\u7684\u53d8\u91cf\u5fc5\u987b\u88ab\u5173\u952e\u5b57volatile\u4fee\u9970"))),(0,r.kt)("p",null,"\u4f8b\u5b50\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public class AtomicIntegerFieldUpdaterTest {\n    public static final AtomicIntegerFieldUpdater<AtomicIntegerFieldUpdaterTest> startPosition =  AtomicIntegerFieldUpdater.newUpdater(AtomicIntegerFieldUpdaterTest.class,"startPositionInt");\n\n    private volatile int startPositionInt = 0;\n}\n')),(0,r.kt)("h3",{id:"4-\u4f7f\u7528atomicxxxfieldupdater\u540e\u5185\u5b58\u4e3a\u4ec0\u4e48\u4f1a\u51cf\u5c11"},"4. \u4f7f\u7528AtomicXXXFieldUpdater\u540e\u5185\u5b58\u4e3a\u4ec0\u4e48\u4f1a\u51cf\u5c11"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5bf9\u8c61\u5185\u5b58\u5927\u5c0f\u5982\u679c\u4e0d\u662f\u5f88\u6e05\u695a\u53ef\u4ee5\u9605\u8bfb\u4e00\u4e0b\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7104912745744564237"},"\u300a\u4e00\u4e2aJava\u5bf9\u8c61\u5360\u7528\u591a\u5927\u5185\u5b58-\u7406\u8bba\u7bc7\u300b"),"\u548c",(0,r.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7105200279322099726"},"\u300a\u4e00\u4e2aJava\u5bf9\u8c61\u5360\u7528\u591a\u5927\u5185\u5b58-\u5b9e\u8df5\u7bc7\u300b"))),(0,r.kt)("p",null,"\u6211\u4eec\u7528\u4e0a\u9762\u7684\u6848\u4f8b\u6765\u8fdb\u884c\u5206\u6790\u4f7f\u7528AtomicXXXFieldUpdater\u540e\u5185\u5b58\u4e3a\u4ec0\u4e48\u4f1a\u51cf\u5c11\u3002"),(0,r.kt)("p",null,"\u9996\u5148\u6211\u4eec\u8981\u77e5\u9053\u7684\u662f\u4e00\u4e2a\u5bf9\u8c61\u5185\u5b58\u7ec4\u6210\uff0c",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"AtomicIntegerTest"))," "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"public class AtomicIntegerTest {\n\n    final AtomicInteger startPosition = new AtomicInteger(0);\n    final AtomicInteger wrotePosition = new AtomicInteger(0);\n    final AtomicInteger committedPosition = new AtomicInteger(0);\n    final AtomicInteger flushedPosition = new AtomicInteger(0);\n}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"AtomicIntegerTest"))," \u5355\u4e2a\u5bf9\u8c61\u7684\u5927\u5c0f\u662f\u591a\u5c11\uff1f\u5982\u4e0b\u56fe\u6240\u793a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/java/concurrencemultithreading/AtomicXXXFieldUpdater3.png",alt:"AtomicXXXFieldUpdater3"})),(0,r.kt)("p",null,"\u800c",(0,r.kt)("inlineCode",{parentName:"p"},"AtomicIntegerFieldUpdaterTest"),"\u5bf9\u8c61\u7684\u5927\u5c0f\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/java/concurrencemultithreading/AtomicXXXFieldUpdater4.png",alt:"AtomicXXXFieldUpdater4"})),(0,r.kt)("p",null,"\u5c11\u4e8664bytes\u3002\u4e5f\u5c31\u662f\u5c11\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"AtomicInteger")," \u5bf9\u8c61\u7684\u5927\u5c0f\u3002"),(0,r.kt)("h3",{id:"5-\u603b\u7ed3"},"5. \u603b\u7ed3"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"AtomicIntegerFieldUpdater"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"AtomicLongFieldUpdater"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"AtomicReferenceFieldUpdater")," \u5408\u7406\u7684\u4f7f\u7528\u80fd\u591f\u5927\u5927\u51cf\u5c11\u5e94\u7528\u7684\u5185\u5b58\u6d88\u8017\u3002\u7279\u522b\u662f AtomicInteger\u76f8\u5bf9\u5e94\u7684\u5bf9\u8c61\u6570\u91cf\u8d8a\u591a\u5e76\u4e14\u5728\u5b9e\u4f8b\u5316\u7684\u5bf9\u8c61\u4e5f\u8d8a\u591a\u7684\u60c5\u51b5\u4e0b\u3002\u4e0e\u6b64\u540c\u65f6\u4e5f\u9700\u8981\u5173\u6ce8\u4e00\u4e0b\u5728\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"AtomicXXXFieldUpdater")," \u7684\u65b9\u5f0f\u65b9\u6cd5\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6211\u662f\u8682\u8681\u80cc\u5927\u8c61\uff0c\u6587\u7ae0\u5bf9\u4f60\u6709\u5e2e\u52a9\u70b9\u8d5e\u5173\u6ce8\u6211\uff0c\u6587\u7ae0\u6709\u4e0d\u6b63\u786e\u7684\u5730\u65b9\u8bf7\u60a8\u65a7\u6b63\u7559\u8a00\u8bc4\u8bba~\u8c22\u8c22")))}s.isMDXComponent=!0}}]);