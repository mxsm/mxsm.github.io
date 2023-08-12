"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[5476],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),f=r,k=m["".concat(p,".").concat(f)]||m[f]||u[f]||o;return n?a.createElement(k,i(i({ref:t},c),{},{components:n})):a.createElement(k,i({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9573:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const o={title:"async-profiler\u7684\u4f7f\u7528\u4e0eRocketMQ\u6027\u80fd\u4f18\u5316\u6848\u4f8b",linkTitle:"async-profiler\u7684\u4f7f\u7528\u4e0eRocketMQ\u6027\u80fd\u4f18\u5316\u6848\u4f8b",date:new Date("2023-01-04T00:00:00.000Z"),weight:202301041409},i=void 0,l={unversionedId:"java/java-tools/async-profiler/1async-profiler-for-rocketmq",id:"java/java-tools/async-profiler/1async-profiler-for-rocketmq",title:"async-profiler\u7684\u4f7f\u7528\u4e0eRocketMQ\u6027\u80fd\u4f18\u5316\u6848\u4f8b",description:"1. async-profiler\u662f\u4ec0\u4e48\uff1f",source:"@site/docs/java/java-tools/async-profiler/1async-profiler-for-rocketmq.md",sourceDirName:"java/java-tools/async-profiler",slug:"/java/java-tools/async-profiler/1async-profiler-for-rocketmq",permalink:"/docs/java/java-tools/async-profiler/1async-profiler-for-rocketmq",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/java/java-tools/async-profiler/1async-profiler-for-rocketmq.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1691846266,formattedLastUpdatedAt:"Aug 12, 2023",frontMatter:{title:"async-profiler\u7684\u4f7f\u7528\u4e0eRocketMQ\u6027\u80fd\u4f18\u5316\u6848\u4f8b",linkTitle:"async-profiler\u7684\u4f7f\u7528\u4e0eRocketMQ\u6027\u80fd\u4f18\u5316\u6848\u4f8b",date:"2023-01-04T00:00:00.000Z",weight:202301041409},sidebar:"javatools",previous:{title:"Overview",permalink:"/docs/java/java-tools"},next:{title:"\u57fa\u4e8eJMeter\u7684RocketMQ\u538b\u6d4b",permalink:"/docs/java/java-tools/jmeter/jmeter-rocketmq"}},p={},s=[{value:"1. async-profiler\u662f\u4ec0\u4e48\uff1f",id:"1-async-profiler\u662f\u4ec0\u4e48",level:2},{value:"1.1 \u5982\u4f55\u5b89\u88c5",id:"11-\u5982\u4f55\u5b89\u88c5",level:3},{value:"1.2 \u5982\u4f55\u4f7f\u7528",id:"12-\u5982\u4f55\u4f7f\u7528",level:3},{value:"2. async-profiler\u7684\u4f7f\u7528\u548cRocketMQ\u6027\u80fd\u4f18\u5316",id:"2-async-profiler\u7684\u4f7f\u7528\u548crocketmq\u6027\u80fd\u4f18\u5316",level:2},{value:"2.1 \u5185\u5b58\u5206\u914d\u60c5\u51b5\u4e0eRocketMQ\u6027\u80fd\u4f18\u5316",id:"21-\u5185\u5b58\u5206\u914d\u60c5\u51b5\u4e0erocketmq\u6027\u80fd\u4f18\u5316",level:3},{value:"2.2 \u9501\u7684\u76d1\u63a7\u548cRocketMQ\u9501\u4f18\u5316",id:"22-\u9501\u7684\u76d1\u63a7\u548crocketmq\u9501\u4f18\u5316",level:3},{value:"3. \u5e38\u7528\u5de5\u5177\u5bf9\u6bd4",id:"3-\u5e38\u7528\u5de5\u5177\u5bf9\u6bd4",level:2}],c={toc:s},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"1-async-profiler\u662f\u4ec0\u4e48"},"1. async-profiler\u662f\u4ec0\u4e48\uff1f"),(0,r.kt)("p",null,"async-profiler\u662f\u4e00\u79cd\u4f4e\u5f00\u9500\u7684Java\u91c7\u6837\u5206\u6790\u5668\uff0c\u4e0d\u4f1a\u53d7Safepoint\u504f\u5dee\u95ee\u9898\u7684\u5f71\u54cd\u3002\u5b83\u5177\u6709\u4e13\u95e8\u4e3aHotSpot\u8bbe\u8ba1\u7684API\uff0c\u7528\u4e8e\u6536\u96c6\u5806\u6808\u8ddf\u8e2a\u4fe1\u606f\u5e76\u8ddf\u8e2a\u5185\u5b58\u5206\u914d\u3002\u5206\u6790\u5668\u53ef\u4ee5\u4e0eOpenJDK\u3001Oracle JDK\u548c\u5176\u4ed6\u57fa\u4e8eHotSpot JVM\u7684Java\u8fd0\u884c\u65f6\u4e00\u8d77\u4f7f\u7528\u3002"),(0,r.kt)("p",null,"async-profiler\u53ef\u4ee5\u8ddf\u8e2a\u4ee5\u4e0b\u7c7b\u578b\u7684\u4e8b\u4ef6\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"CPU\u5468\u671f"),(0,r.kt)("li",{parentName:"ul"},"\u786c\u4ef6\u548c\u8f6f\u4ef6\u6027\u80fd\u8ba1\u6570\u5668\uff0c\u4f8b\u5982\u7f13\u5b58\u4e22\u5931\u3001\u5206\u652f\u4e22\u5931\u3001\u9875\u9519\u8bef\u3001\u4e0a\u4e0b\u6587\u5207\u6362\u7b49"),(0,r.kt)("li",{parentName:"ul"},"Java\u5806\u4e2d\u7684\u5206\u914d"),(0,r.kt)("li",{parentName:"ul"},"\u5185\u5bb9\u9501\u5b9a\u5c1d\u8bd5\uff0c\u5305\u62ecJava\u5bf9\u8c61\u76d1\u89c6\u5668\u548c\u53ef\u91cd\u5165\u9501")),(0,r.kt)("p",null,"\u603b\u7ed3\u63a5\u4e00\u4e0b\u5c31\u662f\u80fd\u591f\u7528\u6765\u5bf9Java\u9879\u76ee\u8fdb\u884c\u8c03\u4f18\u901a\u8fc7\u5206\u6790\u4e0a\u8ff0\u7684\u4e00\u4e9b\u6307\u6807\u3002\u4ece\u6307\u6807\u4e2d\u627e\u51fa\u9879\u76ee\u4e2d\u53ef\u80fd\u5b58\u5728\u7684\u4f18\u5316\u70b9\u3002"),(0,r.kt)("h3",{id:"11-\u5982\u4f55\u5b89\u88c5"},"1.1 \u5982\u4f55\u5b89\u88c5"),(0,r.kt)("p",null,"\u76f4\u63a5\u4ecegithub\u7684\u9879\u76ee\u5730\u5740",(0,r.kt)("a",{parentName:"p",href:"https://github.com/jvm-profiling-tools/async-profiler"},"\u4e0b\u8f7d"),"\u5bf9\u5e94\u7684\u5e73\u53f0\u7684\u5b89\u88c5\u5305\u3002\u7136\u540e\u5c06\u5176\u89e3\u538b\u5230\u76ee\u5f55\u4e2d\u5373\u53ef\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/java/java-tools/async-profilerimage-20230104190514317.png",alt:"image-20230104190514317"})),(0,r.kt)("p",null,"\u5b89\u88c5\u7684\u8fc7\u7a0b\u5373\u5c06\u5b89\u88c5\u5305\u4e0b\u8f7d\u89e3\u538b\u5373\u53ef\u5b8c\u6210\u65e0\u9700\u590d\u6742\u7684\u6b65\u9aa4\u3002"),(0,r.kt)("h3",{id:"12-\u5982\u4f55\u4f7f\u7528"},"1.2 \u5982\u4f55\u4f7f\u7528"),(0,r.kt)("p",null,"\u7528\u5982\u4e0b\u547d\u4ee4\u67e5\u770b\u4f7f\u7528\u5e2e\u52a9\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ ./profiler.sh -h\nUsage: ./profiler.sh [action] [options] <pid>\nActions:\n  start             start profiling and return immediately\n  resume            resume profiling without resetting collected data\n  stop              stop profiling\n  dump              dump collected data without stopping profiling session\n  check             check if the specified profiling event is available\n  status            print profiling status\n  meminfo           print profiler memory stats\n  list              list profiling events supported by the target JVM\n  collect           collect profile for the specified period of time\n                    and then stop (default action)\nOptions:\n  -e event          profiling event: cpu|alloc|lock|cache-misses etc.\n  -d duration       run profiling for <duration> seconds\n  -f filename       dump output to <filename>\n  -i interval       sampling interval in nanoseconds\n  -j jstackdepth    maximum Java stack depth\n  -t                profile different threads separately\n  -s                simple class names instead of FQN\n  -g                print method signatures\n  -a                annotate Java methods\n  -l                prepend library names\n  -o fmt            output format: flat|traces|collapsed|flamegraph|tree|jfr\n  -I include        output only stack traces containing the specified pattern\n  -X exclude        exclude stack traces with the specified pattern\n  -v, --version     display version string\n\n  --title string    FlameGraph title\n  --minwidth pct    skip frames smaller than pct%\n  --reverse         generate stack-reversed FlameGraph / Call tree\n\n  --loop time       run profiler in a loop\n  --alloc bytes     allocation profiling interval in bytes\n  --live            build allocation profile from live objects only\n  --lock duration   lock profiling threshold in nanoseconds\n  --total           accumulate the total value (time, bytes, etc.)\n  --all-user        only include user-mode events\n  --sched           group threads by scheduling policy\n  --cstack mode     how to traverse C stack: fp|dwarf|lbr|no\n  --begin function  begin profiling when function is executed\n  --end function    end profiling when function is executed\n  --ttsp            time-to-safepoint profiling\n  --jfrsync config  synchronize profiler with JFR recording\n  --lib path        full path to libasyncProfiler.so in the container\n  --fdtransfer      use fdtransfer to serve perf requests\n                    from the non-privileged target\n\n<pid> is a numeric process ID of the target JVM\n      or 'jps' keyword to find running JVM automatically\n      or the application's name as it would appear in the jps tool\n\nExample: ./profiler.sh -d 30 -f profile.html 3456\n         ./profiler.sh start -i 999000 jps\n         ./profiler.sh stop -o flat jps\n         ./profiler.sh -d 5 -e alloc MyAppName\n")),(0,r.kt)("p",null,"\u4e86\u89e3\u4e86\u5927\u81f4\u5982\u4f55\u4f7f\u7528\u63a5\u4e0b\u6765\u7528\u8fd9\u4e2a\u5de5\u5177\u6765\u7ed9RocketMQ\u8fdb\u884c\u6027\u80fd\u4f18\u5316\u3002"),(0,r.kt)("h2",{id:"2-async-profiler\u7684\u4f7f\u7528\u548crocketmq\u6027\u80fd\u4f18\u5316"},"2. async-profiler\u7684\u4f7f\u7528\u548cRocketMQ\u6027\u80fd\u4f18\u5316"),(0,r.kt)("p",null,"\u5728\u4f7f\u7528async-profiler\u7ed9RocketMQ\u505a\u6027\u80fd\u4f18\u5316\u4e4b\u524d\u6211\u4eec\u9996\u5148\u8981\u642d\u5efa\u4e00\u5957MQ\u7684\u8fd0\u884c\u73af\u5883\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4e00\u53f0\u673a\u5668\u90e8\u7f72NameServer"),(0,r.kt)("li",{parentName:"ul"},"\u4e09\u53f0\u673a\u5668\u90e8\u7f72Controller"),(0,r.kt)("li",{parentName:"ul"},"\u4e24\u53f0\u673a\u5668\u90e8\u7f72Broker"),(0,r.kt)("li",{parentName:"ul"},"\u4e24\u53f0\u673a\u5668\u7528\u6765\u6d4b\u8bd5")),(0,r.kt)("admonition",{title:"\u6ce8\u610f",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u7b14\u8005\u8fd9\u91cc\u7684\u673a\u5668\u662f\u7531\u4ed6\u4eba\u63d0\u4f9b\u7684\u4e5f\u4e3b\u8981\u662f\u7528\u6765\u505aRocketMQ\u7684Controller\u7684\u9ad8\u53ef\u7528\u6a21\u5f0f\u6d4b\u8bd5\u7684\uff0c\u5982\u679c\u662f\u81ea\u5df1\u53ea\u9700\u8981\u642d\u5efa\u4e00\u4e2a\u6700\u57fa\u672c\u7684\u5373\u53ef\u3002")),(0,r.kt)("h3",{id:"21-\u5185\u5b58\u5206\u914d\u60c5\u51b5\u4e0erocketmq\u6027\u80fd\u4f18\u5316"},"2.1 \u5185\u5b58\u5206\u914d\u60c5\u51b5\u4e0eRocketMQ\u6027\u80fd\u4f18\u5316"),(0,r.kt)("p",null,"\u8fd9\u91cc\u6211\u4e3b\u8981\u662f\u5bf9\u4e24\u53f0Broker\u7684\u673a\u5668\u5185\u5b58\u5206\u914d\u60c5\u51b5\u505a\u4e86\u5206\u6790\u751f\u6210\u4e86\u706b\u7130\u56fe\u3002\u5177\u4f53\u64cd\u4f5c\u5982\u4e0b\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5728\u6d4b\u8bd5\u673a\u5668\u542f\u52a8\u751f\u4ea7\u7684benchmark\u91cc\u9762\u7684 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"producer.sh"))," \u811a\u672c"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ ./producer.sh -n xxxx(nameServer address:port)\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5728\u4e24\u53f0\u90e8\u7f72\u4e86Broker\u7684\u673a\u5668\u4e2d\u4efb\u610f\u4e00\u53f0\u542f\u52a8\u5185\u5b58\u5206\u914d\u76d1\u63a7\u751f\u6210\u706b\u7130\u56fe\uff0c\u547d\u4ee4\u5982\u4e0b\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ ./profiler.sh -d 120 -e alloc -f alloc.html $JVM_PID\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u7b49\u5f85\u6b65\u9aa42\u7684\u547d\u4ee4\u7ed3\u675f\u751f\u6210alloc.html"))),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/java/java-tools/async-profilerimage-20230104194726447.png",alt:"image-20230104194726447"})),(0,r.kt)("p",null,"\u770b\u5230\u8fd9\u91cc\u6709\u4eba\u5c31\u4f1a\u60f3\u4e86\u8fd9\u4e2a\u5982\u4f55\u53bb\u505a\u6027\u80fd\u7684\u4f18\u5316\uff0c\u89c2\u5bdf\u706b\u7130\u56fe\u7684\u9876\u90e8\u5982\u679c\u9876\u90e8\u662f\u5e73\u9876\u8bf4\u660e\u6709\u5927\u6982\u7387\u5b58\u5728\u95ee\u9898\uff0c\u53e6\u5916\u5c31\u662f\u6839\u636e\u7ecf\u9a8c\u4f8b\u5982\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6570\u7ec4\u7684\u6269\u5bb9"),(0,r.kt)("li",{parentName:"ul"},"HashMap\u7684\u6269\u5bb9"),(0,r.kt)("li",{parentName:"ul"},"Set\u7684\u6269\u5bb9")),(0,r.kt)("p",null,"\u4ee5\u4e0a\u8fd9\u4e9b\u90fd\u662f\u5bf9\u6027\u80fd\u6709\u5f88\u5927\u7684\u5f71\u54cd\u3002\u6839\u636e\u8fd9\u4e9b\u76f4\u63a5\u641c\u7d22\uff1a",(0,r.kt)("strong",{parentName:"p"},"HashMap.resize")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/java/java-tools/async-profilerimage-20230104201123913.png",alt:"image-20230104201123913"})),(0,r.kt)("p",null,"\u4e0a\u56fe\u4e2d\u7684\u90a3\u4e9b\u7ea2\u8272\u88ab\u6846\u51fa\u6765\u7684\u5730\u65b9\u5c31\u662f\u8c03\u7528\u4e86\u6269\u5bb9\u7684\u5730\u65b9\u3002\u627e\u4e00\u5904\u67e5\u770b\u9a8c\u8bc1\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/java/java-tools/async-profilerimage-20230104201310977.png",alt:"image-20230104201310977"})),(0,r.kt)("admonition",{title:"Rocketmq issue",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"RocketMQ \u4f18\u5316\u53c2\u7167 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/rocketmq/issues/5802"},"ISSUE-5802"),"\u4ee5\u53ca\u5bf9\u5e94\u7684",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/rocketmq/pull/5803"},"PR-5803"))),(0,r.kt)("h3",{id:"22-\u9501\u7684\u76d1\u63a7\u548crocketmq\u9501\u4f18\u5316"},"2.2 \u9501\u7684\u76d1\u63a7\u548cRocketMQ\u9501\u4f18\u5316"),(0,r.kt)("p",null,"\u6574\u4f53\u7684\u6b65\u9aa4\u548c\u4e0a\u9762\u4e00\u6837\uff0c\u4f46\u662f\u8fd9\u6b21\u662f\u83b7\u53d6lock\u4e8b\u4ef6\u3002\u8fd0\u884cBroker\u7684\u547d\u4ee4\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ ./profiler.sh -d 120 -e lock -f output.jfr $JVM_PID\n")),(0,r.kt)("p",null,"\u751f\u6210output.jfr\u6587\u4ef6\uff0c\u5c06\u6587\u4ef6\u4e0b\u8f7d\u5230\u672c\u5730\u7528\u5de5\u5177\u6253\u5f00\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/java/java-tools/async-profilerimage-20230104203025977.png",alt:"image-20230104203025977"})),(0,r.kt)("p",null,"\u901a\u8fc7\u4f7f\u7528JMC\u5de5\u5177\u6253\u5f00\u627e\u5230 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Lock Instances"))," \u8fd9\u91cc\u53d1\u73b0\u4e86\u4e00\u4e2a\u719f\u6089\u7684Monitor class:  ",(0,r.kt)("strong",{parentName:"p"},"AutoSwitchHAService")," \u3002"),(0,r.kt)("admonition",{title:"\u8bf4\u660e",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u6253\u5f00output.jfr\u7b14\u8005\u4f7f\u7528\u7684\u662f ",(0,r.kt)("a",{parentName:"p",href:"https://www.oracle.com/java/technologies/jdk-mission-control.html"},"JDK Mission Control"))),(0,r.kt)("p",null,"\u901a\u8fc7\u8c03\u7528\u5806\u6808\u53d1\u73b0\u662f\u8c03\u7528 ",(0,r.kt)("strong",{parentName:"p"},"AutoSwitchHAService#inSyncReplicasNums")," \u65b9\u6cd5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"    @Override\n    public synchronized int inSyncReplicasNums(final long masterPutWhere) {\n        return syncStateSet.size();\n    }\n")),(0,r.kt)("p",null,"\u901a\u8fc7\u5206\u6790\u53ef\u4ee5\u77e5\u9053\u8fd9\u4e2a\u65b9\u6cd5\u5728\u9ad8\u53ef\u7528\u7684\u60c5\u51b5\u4e0b\u88ab\u8c03\u7528\u7684\u9891\u7387\u6781\u9ad8\uff0c\u800c\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"synchronized"),"\u5173\u952e\u5b57\u5728",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"syncStateSet.size()"))," \u591a\u6570\u60c5\u51b5\u4e0b\u4e0d\u4f1a\u6539\u53d8\u6027\u80fd\u4f1a\u76f8\u5bf9\u6bd4\u8f83\u4f4e\u3002(\u6b64\u5904\u4e3a\u4ec0\u4e48\u9700\u8981\u5927\u5bb6\u53ef\u4ee5\u6267\u884c\u53bb\u7814\u7a76\u4e00\u4e0bRocketMQ 5\u6700\u65b0\u7684Controller\u6a21\u5f0f\u4e5f\u5c31\u662fA-HA\u6a21\u5f0f\uff0c\u7b14\u8005\u8fd9\u91cc\u5c31\u4e0d\u5c55\u5f00\u8bb2\u4e86)\u3002\u65e2\u7136\u53d1\u73b0\u4e86\u95ee\u9898\u90a3\u4e48\u5c31\u9488\u5bf9\u95ee\u9898\u8fdb\u884c\u89e3\u51b3\uff0c\u89e3\u51b3\u65b9\u6848\uff1a"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u4f7f\u7528\u8bfb\u5199\u9501\u6765\u89e3\u51b3\u8fd9\u91cc\u5e76\u53d1\u7684\u95ee\u9898")),(0,r.kt)("admonition",{title:"Rocketmq issue",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"RocketMQ \u4f18\u5316\u53c2\u7167 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/rocketmq/issues/5809"},"ISSUE-5809"),"\u4ee5\u53ca\u5bf9\u5e94\u7684",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/rocketmq/pull/5810"},"PR-5810"))),(0,r.kt)("h2",{id:"3-\u5e38\u7528\u5de5\u5177\u5bf9\u6bd4"},"3. \u5e38\u7528\u5de5\u5177\u5bf9\u6bd4"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/java/java-tools/async-profilerimage-20230104214937280.png",alt:"image-20230104214937280"})),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u6765\u6e90\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apangin/java-profiling-presentation/blob/master/presentation/java-profiling.pdf"},"https://github.com/apangin/java-profiling-presentation/blob/master/presentation/java-profiling.pdf"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6211\u662f\u8682\u8681\u80cc\u5927\u8c61\uff0c\u6587\u7ae0\u5bf9\u4f60\u6709\u5e2e\u52a9\u70b9\u8d5e\u5173\u6ce8\u6211\uff0c\u6587\u7ae0\u6709\u4e0d\u6b63\u786e\u7684\u5730\u65b9\u8bf7\u60a8\u65a7\u6b63\u7559\u8a00\u8bc4\u8bba~\u8c22\u8c22!")),(0,r.kt)("p",null,"\u53c2\u8003\u8d44\u6599\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apangin/java-profiling-presentation/blob/master/presentation/java-profiling.pdf"},"https://github.com/apangin/java-profiling-presentation/blob/master/presentation/java-profiling.pdf")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/jvm-profiling-tools/async-profiler"},"https://github.com/jvm-profiling-tools/async-profiler"))))}u.isMDXComponent=!0}}]);