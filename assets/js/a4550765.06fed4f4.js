"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[6940],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),f=a,d=u["".concat(s,".").concat(f)]||u[f]||m[f]||i;return n?r.createElement(d,o(o({ref:t},c),{},{components:n})):r.createElement(d,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3382:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={title:"Java \u6027\u80fd\u5206\u6790\u5de5\u5177 async-profiler",linkTitle:"Java \u6027\u80fd\u5206\u6790\u5de5\u5177 async-profiler",date:new Date("2022-06-18T00:00:00.000Z"),weight:202206181652},o=void 0,l={unversionedId:"java/java-se/others/async-profiler",id:"java/java-se/others/async-profiler",title:"Java \u6027\u80fd\u5206\u6790\u5de5\u5177 async-profiler",description:"1. async-profiler\u4ecb\u7ecd",source:"@site/docs/java/java-se/others/async-profiler.md",sourceDirName:"java/java-se/others",slug:"/java/java-se/others/async-profiler",permalink:"/docs/java/java-se/others/async-profiler",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/java/java-se/others/async-profiler.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1680402643,formattedLastUpdatedAt:"Apr 2, 2023",frontMatter:{title:"Java \u6027\u80fd\u5206\u6790\u5de5\u5177 async-profiler",linkTitle:"Java \u6027\u80fd\u5206\u6790\u5de5\u5177 async-profiler",date:"2022-06-18T00:00:00.000Z",weight:202206181652},sidebar:"javase",previous:{title:"String StringBuffer StringBuilder",permalink:"/docs/java/java-se/others/String StringBuffer StringBuilder"},next:{title:"\u5982\u4f55\u81ea\u5b9a\u4e49Bean validation\u5b9e\u73b0\u6570\u636e\u6821\u9a8c",permalink:"/docs/java/java-se/others/bean-validation"}},s={},p=[{value:"1. async-profiler\u4ecb\u7ecd",id:"1-async-profiler\u4ecb\u7ecd",level:3},{value:"2. async-profiler\u5b89\u88c5",id:"2-async-profiler\u5b89\u88c5",level:3},{value:"3. async-profiler\u4f7f\u7528",id:"3-async-profiler\u4f7f\u7528",level:3},{value:"4. async-profiler\u4f7f\u7528\u6848\u4f8b",id:"4-async-profiler\u4f7f\u7528\u6848\u4f8b",level:3},{value:"4.1 \u6848\u4f8b1",id:"41-\u6848\u4f8b1",level:4},{value:"4.2 \u6848\u4f8b2",id:"42-\u6848\u4f8b2",level:4},{value:"5. \u603b\u7ed3",id:"5-\u603b\u7ed3",level:3}],c={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"1-async-profiler\u4ecb\u7ecd"},"1. async-profiler\u4ecb\u7ecd"),(0,a.kt)("p",null,"Async-profiler\u662f\u4e00\u4e2a\u4f4e\u5f00\u9500\u7684Java\u91c7\u6837\u5206\u6790\u5668\uff0c\u4e0d\u53d7Safepoint\u504f\u5dee\u95ee\u9898\u7684\u5f71\u54cd\u3002\u5177\u6709\u7279\u5b9a\u4e8eHotspot\u7684API\u7528\u4e8e\u6536\u96c6 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"\u5806\u6808\u8ddf\u8e2a"))," \u548c ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"\u5185\u5b58\u5206\u914d"))," \u3002\u80fd\u591f\u5206\u6790 ",(0,a.kt)("strong",{parentName:"p"},"OpenJDK\u3001Oracle JDK \u4ee5\u53ca\u5176\u4ed6\u57fa\u4e8e Hotspot\u7684JVM\u3002")),(0,a.kt)("p",null,"async-profiler\u80fd\u591f\u8ddf\u8e2a\u4e00\u4e0b\u51e0\u79cd\u4e8b\u4ef6\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"CUP cycles"),(0,a.kt)("li",{parentName:"ul"},"\u786c\u4ef6\u548c\u8f6f\u4ef6\u6027\u80fd\u8ba1\u6570\u5668\uff0c\u5982\u7f13\u5b58\u5931\u8d25\u3001\u5206\u652f\u5931\u8d25\u3001\u9875\u9762\u9519\u8bef\u3001\u4e0a\u4e0b\u6587\u5207\u6362\u7b49\u3002"),(0,a.kt)("li",{parentName:"ul"},"Java Heap\u5206\u914d"),(0,a.kt)("li",{parentName:"ul"},"Contented lock attempts, including both Java object monitors and ReentrantLocks")),(0,a.kt)("h3",{id:"2-async-profiler\u5b89\u88c5"},"2. async-profiler\u5b89\u88c5"),(0,a.kt)("p",null,"\u5728\u5b98\u7f51\u63d0\u4f9b\u4e86\u4e0d\u540c\u7684\u5e73\u53f0\u7684\u4e0b\u8f7d\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Linux x64 (glibc): ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/jvm-profiling-tools/async-profiler/releases/download/v2.8.1/async-profiler-2.8.1-linux-x64.tar.gz"},"async-profiler-2.8.1-linux-x64.tar.gz")),(0,a.kt)("li",{parentName:"ul"},"Linux x64 (musl): ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/jvm-profiling-tools/async-profiler/releases/download/v2.8.1/async-profiler-2.8.1-linux-musl-x64.tar.gz"},"async-profiler-2.8.1-linux-musl-x64.tar.gz")),(0,a.kt)("li",{parentName:"ul"},"Linux arm64: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/jvm-profiling-tools/async-profiler/releases/download/v2.8.1/async-profiler-2.8.1-linux-arm64.tar.gz"},"async-profiler-2.8.1-linux-arm64.tar.gz")),(0,a.kt)("li",{parentName:"ul"},"macOS x64/arm64: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/jvm-profiling-tools/async-profiler/releases/download/v2.8.1/async-profiler-2.8.1-macos.zip"},"async-profiler-2.8.1-macos.zip")),(0,a.kt)("li",{parentName:"ul"},"\u914d\u7f6e\u6587\u4ef6\u683c\u5f0f\u4e4b\u95f4\u7684\u8f6c\u6362\u5668: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/jvm-profiling-tools/async-profiler/releases/download/v2.8.1/converter.jar"},"converter.jar"))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Tips: \u6587\u7ae0\u7f16\u5199\u7684\u65f6\u5019\u7248\u672c\u4e3a2.8.1")),(0,a.kt)("p",null,"\u6839\u636e\u81ea\u5df1\u7684\u5e73\u53f0\u4e0b\u8f7d\u5230\u672c\u5730\uff0c\u89e3\u538b\u540e\u7684\u76ee\u5f55\u7ed3\u6784\u5982\u4e0b\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/blog/javase/profiling-tools/image-20220618172149158.png",alt:"image-20220618172149158"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Tips: \u7b14\u8005\u7684\u4f7f\u7528\u7684WSL\u73af\u5883\u8fdb\u884c\u6d4b\u8bd5\u3002")),(0,a.kt)("h3",{id:"3-async-profiler\u4f7f\u7528"},"3. async-profiler\u4f7f\u7528"),(0,a.kt)("p",null,"\u4f7f\u7528\u547d\u4ee4\uff1a",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"./profiler.sh"))," ,\u51fa\u73b0\u5982\u4e0b\u4f7f\u7528\u8bf4\u660e\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"Usage: ./profiler.sh [action] [options] <pid>\nActions:\n  start             start profiling and return immediately\n  resume            resume profiling without resetting collected data\n  stop              stop profiling\n  dump              dump collected data without stopping profiling session\n  check             check if the specified profiling event is available\n  status            print profiling status\n  list              list profiling events supported by the target JVM\n  collect           collect profile for the specified period of time\n                    and then stop (default action)\nOptions:\n  -e event          profiling event: cpu|alloc|lock|cache-misses etc.\n  -d duration       run profiling for <duration> seconds\n  -f filename       dump output to <filename>\n  -i interval       sampling interval in nanoseconds\n  -j jstackdepth    maximum Java stack depth\n  -t                profile different threads separately\n  -s                simple class names instead of FQN\n  -g                print method signatures\n  -a                annotate Java methods\n  -l                prepend library names\n  -o fmt            output format: flat|traces|collapsed|flamegraph|tree|jfr\n  -I include        output only stack traces containing the specified pattern\n  -X exclude        exclude stack traces with the specified pattern\n  -v, --version     display version string\n\n  --title string    FlameGraph title\n  --minwidth pct    skip frames smaller than pct%\n  --reverse         generate stack-reversed FlameGraph / Call tree\n\n  --loop time       run profiler in a loop\n  --alloc bytes     allocation profiling interval in bytes\n  --lock duration   lock profiling threshold in nanoseconds\n  --total           accumulate the total value (time, bytes, etc.)\n  --all-user        only include user-mode events\n  --sched           group threads by scheduling policy\n  --cstack mode     how to traverse C stack: fp|dwarf|lbr|no\n  --begin function  begin profiling when function is executed\n  --end function    end profiling when function is executed\n  --ttsp            time-to-safepoint profiling\n  --jfrsync config  synchronize profiler with JFR recording\n  --lib path        full path to libasyncProfiler.so in the container\n  --fdtransfer      use fdtransfer to serve perf requests\n                    from the non-privileged target\n\n<pid> is a numeric process ID of the target JVM\n      or 'jps' keyword to find running JVM automatically\n      or the application's name as it would appear in the jps tool\n\nExample: ./profiler.sh -d 30 -f profile.html 3456\n         ./profiler.sh start -i 999000 jps\n         ./profiler.sh stop -o flat jps\n         ./profiler.sh -d 5 -e alloc MyAppName\n")),(0,a.kt)("h3",{id:"4-async-profiler\u4f7f\u7528\u6848\u4f8b"},"4. async-profiler\u4f7f\u7528\u6848\u4f8b"),(0,a.kt)("h4",{id:"41-\u6848\u4f8b1"},"4.1 \u6848\u4f8b1"),(0,a.kt)("p",null,"\u542f\u52a8\u4e00\u4e2a\u81ea\u5df1\u7f16\u5199\u7684\u670d\u52a1\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/blog/javase/profiling-tools/%E6%9C%8D%E5%8A%A1%E5%90%AF%E5%8A%A8gif.gif",alt:"\u670d\u52a1\u542f\u52a8gif"})),(0,a.kt)("p",null,"\u7136\u540e\u542f\u52a8jmeter\u53bb\u8c03\u7528\u63a5\u53e3\uff0c\u7136\u540e\u542f\u52a8async-profiler\u751f\u6210cup\u7684\u706b\u7130\u56fe\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/blog/javase/profiling-tools/image-20220618221032418.png",alt:"image-20220618221032418"})),(0,a.kt)("p",null,"\u67e5\u770b\u706b\u7130\u56fe\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/blog/javase/profiling-tools/image-20220618221221235.png",alt:"image-20220618221221235"})),(0,a.kt)("h4",{id:"42-\u6848\u4f8b2"},"4.2 \u6848\u4f8b2"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public class Test {\n\n    public static ExecutorService service = Executors.newFixedThreadPool(10);\n\n    public static void main(String[] args) {\n\n        service.submit(new Runnable() {\n            @Override\n            public void run() {\n                while (true){\n                    uuid1();\n                    uuid2();\n                }\n            }\n        });\n    }\n\n    public  static void uuid1(){\n        String s = UUID.randomUUID().toString();\n      \n    }\n\n    public static void uuid2(){\n        String s = new UUID(ThreadLocalRandom.current().nextLong(), ThreadLocalRandom.current().nextLong()).toString();\n\n    }\n}\n")),(0,a.kt)("p",null,"\u8fd0\u884c\u670d\u52a1\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/blog/javase/profiling-tools/image-20220618224232033.png",alt:"image-20220618224232033"})),(0,a.kt)("p",null,"\u67e5\u770b\u706b\u7130\u56fe\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/blog/javase/profiling-tools/image-20220618224337979.png",alt:"image-20220618224337979"})),(0,a.kt)("p",null,"\u901a\u8fc7\u5206\u6790\u706b\u7130\u56fe\u4f1a\u53d1\u73b0 ",(0,a.kt)("strong",{parentName:"p"},"org/example/objectsize/Test.uuid1")," \u548c ",(0,a.kt)("strong",{parentName:"p"},"org/example/objectsize/Test.uuid2")," \uff0cuuid1\u5360\u7528\u7684\u65f6\u95f4\u8fdc\u8fdc\u5927\u4e8euuid2\uff0c\u8bf4\u660e\u4e86 new ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"UUID(ThreadLocalRandom.current().nextLong(), ThreadLocalRandom.current().nextLong()).toString()"))," \u7684\u6027\u80fd\u9ad8\u4e8e ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"UUID.randomUUID().toString()"))," \u3002"),(0,a.kt)("h3",{id:"5-\u603b\u7ed3"},"5. \u603b\u7ed3"),(0,a.kt)("p",null,"\u4e0d\u7ba1\u662fCPU\u8fd8\u662f\u5185\u5b58\u5206\u914d\uff0c\u5728\u706b\u7130\u56fe\u4e0a\u9762\u6a2a\u5411\u8d8a\u957f\u8bf4\u660e\u8d8a\u591a\uff0c\u7eb5\u5411\u8868\u793a\u8c03\u7528\u94fe\u3002\u706b\u7130\u56fe\u91cc\uff0c\u6a2a\u6761\u8d8a\u957f\uff0c\u4ee3\u8868\u4f7f\u7528\u7684\u8d8a\u591a\uff0c\u4ece\u4e0b\u5230\u4e0a\u662f\u8c03\u7528\u5806\u6808\u4fe1\u606f\u3002\u5728\u963f\u91cc\u7684 ",(0,a.kt)("a",{parentName:"p",href:"https://arthas.aliyun.com/doc/"},"arthas"),"\u4e5f\u96c6\u6210\u4e86async-profiler\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6211\u662f\u8682\u8681\u80cc\u5927\u8c61\uff0c\u6587\u7ae0\u5bf9\u4f60\u6709\u5e2e\u52a9\u70b9\u8d5e\u5173\u6ce8\u6211\uff0c\u6587\u7ae0\u6709\u4e0d\u6b63\u786e\u7684\u5730\u65b9\u8bf7\u60a8\u65a7\u6b63\u7559\u8a00\u8bc4\u8bba~\u8c22\u8c22")))}m.isMDXComponent=!0}}]);