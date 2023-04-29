"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[3807],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),u=r,h=m["".concat(p,".").concat(u)]||m[u]||d[u]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7860:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const o={title:"JVM\u5e38\u7528\u7684\u547d\u4ee4-JDK8",linkTitle:"JVM\u5e38\u7528\u7684\u547d\u4ee4-JDK8",date:new Date("2019-08-02T00:00:00.000Z"),weight:201908021429},i=void 0,l={unversionedId:"java/java-se/others/common-jdk-command",id:"java/java-se/others/common-jdk-command",title:"JVM\u5e38\u7528\u7684\u547d\u4ee4-JDK8",description:"1. JDK\u5e38\u7528\u7684\u5de5\u5177--JDK8",source:"@site/docs/java/java-se/others/common-jdk-command.md",sourceDirName:"java/java-se/others",slug:"/java/java-se/others/common-jdk-command",permalink:"/docs/java/java-se/others/common-jdk-command",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/java/java-se/others/common-jdk-command.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1682735967,formattedLastUpdatedAt:"Apr 29, 2023",frontMatter:{title:"JVM\u5e38\u7528\u7684\u547d\u4ee4-JDK8",linkTitle:"JVM\u5e38\u7528\u7684\u547d\u4ee4-JDK8",date:"2019-08-02T00:00:00.000Z",weight:201908021429},sidebar:"javase",previous:{title:"\u5982\u4f55\u81ea\u5b9a\u4e49Bean validation\u5b9e\u73b0\u6570\u636e\u6821\u9a8c",permalink:"/docs/java/java-se/others/bean-validation"},next:{title:"\u52a8\u6001\u4ee3\u7406\u4e0e\u9759\u6001\u4ee3\u7406",permalink:"/docs/java/java-se/others/dynamic-static"}},p={},s=[{value:"1. JDK\u5e38\u7528\u7684\u5de5\u5177--JDK8",id:"1-jdk\u5e38\u7528\u7684\u5de5\u5177--jdk8",level:3},{value:"2. jps\u547d\u4ee4",id:"2-jps\u547d\u4ee4",level:3},{value:"3. jstack\u547d\u4ee4",id:"3-jstack\u547d\u4ee4",level:3},{value:"4. jstat\u547d\u4ee4",id:"4-jstat\u547d\u4ee4",level:3},{value:"5. jmap\u547d\u4ee4",id:"5-jmap\u547d\u4ee4",level:3},{value:"6 \u603b\u7ed3",id:"6-\u603b\u7ed3",level:3}],c={toc:s},m="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"1-jdk\u5e38\u7528\u7684\u5de5\u5177--jdk8"},"1. JDK\u5e38\u7528\u7684\u5de5\u5177--JDK8"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5de5\u5177\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7528\u9014"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"jps"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5217\u51fa\u5df2\u88c5\u8f7d\u7684JVM --- \u5e38\u7528")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"jstack"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6253\u5370\u7ebf\u7a0b\u5806\u6808\u4fe1\u606f -- \u5e38\u7528")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"jstat"),(0,r.kt)("td",{parentName:"tr",align:null},"JVM\u76d1\u63a7\u7edf\u8ba1\u4fe1\u606f -- \u5e38\u7528")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"jmap"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6253\u5370JVM\u5806\u5185\u5bf9\u8c61\u60c5\u51b5 -- \u5e38\u7528")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"jinfo"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8f93\u51faJVM\u914d\u7f6e\u4fe1\u606f-- \u5e38\u7528")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"jconsole"),(0,r.kt)("td",{parentName:"tr",align:null},"GUI\u76d1\u63a7\u5de5\u5177")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"jvisualvm"),(0,r.kt)("td",{parentName:"tr",align:null},"GUI\u76d1\u63a7\u5de5\u5177")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"jhat"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5806\u79bb\u7ebf\u5206\u6790\u5de5\u5177")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"jdb"),(0,r.kt)("td",{parentName:"tr",align:null},"java\u8fdb\u7a0b\u8c03\u8bd5\u5de5\u5177")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"jstatd"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8fdc\u7a0bJVM\u76d1\u63a7\u7edf\u8ba1\u4fe1\u606f")))),(0,r.kt)("h3",{id:"2-jps\u547d\u4ee4"},"2. jps\u547d\u4ee4"),(0,r.kt)("p",null,"\u4e0b\u9762\u662f\u6211\u5728\u81ea\u5df1Linux\u670d\u52a1\u5668\u4e0a\u8fd0\u884c\u7684(\u670d\u52a1\u5668\u4e0a\u9762\u8dd1\u4e86\u4e00\u4e2aTomcat)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"[root@iZwz9jcjzd6wfh44nnnsv4Z ~]# jps\n25057 Bootstrap\n25116 Jps\n")),(0,r.kt)("h3",{id:"3-jstack\u547d\u4ee4"},"3. jstack\u547d\u4ee4"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"[root@iZwz9jcjzd6wfh44nnnsv4Z ~]# jstack --help\nUsage:\n    jstack [-l] <pid>\n        (to connect to running process)\n    jstack -F [-m] [-l] <pid>\n        (to connect to a hung process)\n    jstack [-m] [-l] <executable> <core>\n        (to connect to a core file)\n    jstack [-m] [-l] [server_id@]<remote server IP or hostname>\n        (to connect to a remote debug server)\n\nOptions:\n    -F  to force a thread dump. Use when jstack <pid> does not respond (process is hung)\n    -m  to print both java and native frames (mixed mode)\n    -l  long listing. Prints additional information about locks\n    -h or -help to print this help message\n")),(0,r.kt)("p",null,"\u4e0a\u9762\u662f\u4f7f\u7528\u7684\u8bf4\u660e\uff0c\u4e0b\u9762\u6765\u770b\u4e00\u4e0b\u5b9e\u9645\u7684\u4f7f\u7528\u7684\u6253\u5370\u60c5\u51b5"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'[root@iZwz9jcjzd6wfh44nnnsv4Z ~]# jstack -l 25057\n2019-03-17 10:25:00\nFull thread dump Java HotSpot(TM) 64-Bit Server VM (25.131-b11 mixed mode):\n\n"Attach Listener" #44 daemon prio=9 os_prio=0 tid=0x00007f3738001800 nid=0x6253 waiting on condition [0x0000000000000000]\n   java.lang.Thread.State: RUNNABLE\n\n   Locked ownable synchronizers:\n    - None\n\n"ajp-nio-8009-Acceptor-0" #42 daemon prio=5 os_prio=0 tid=0x00007f376c6ff800 nid=0x620e runnable [0x00007f373c4bf000]\n   java.lang.Thread.State: RUNNABLE\n    at sun.nio.ch.ServerSocketChannelImpl.accept0(Native Method)\n    at sun.nio.ch.ServerSocketChannelImpl.accept(ServerSocketChannelImpl.java:422)\n    at sun.nio.ch.ServerSocketChannelImpl.accept(ServerSocketChannelImpl.java:250)\n    - locked <0x00000000c5a99fc8> (a java.lang.Object)\n    at org.apache.tomcat.util.net.NioEndpoint.serverSocketAccept(NioEndpoint.java:448)\n    at org.apache.tomcat.util.net.NioEndpoint.serverSocketAccept(NioEndpoint.java:70)\n    at org.apache.tomcat.util.net.Acceptor.run(Acceptor.java:95)\n    at java.lang.Thread.run(Thread.java:748)\n\n   Locked ownable synchronizers:\n    - None\n\n"ajp-nio-8009-ClientPoller-1" #41 daemon prio=5 os_prio=0 tid=0x00007f376c6fd800 nid=0x620d runnable [0x00007f373c5c0000]\n   java.lang.Thread.State: RUNNABLE\n    at sun.nio.ch.EPollArrayWrapper.epollWait(Native Method)\n    at sun.nio.ch.EPollArrayWrapper.poll(EPollArrayWrapper.java:269)\n    at sun.nio.ch.EPollSelectorImpl.doSelect(EPollSelectorImpl.java:93)\n    at sun.nio.ch.SelectorImpl.lockAndDoSelect(SelectorImpl.java:86)\n    - locked <0x00000000f4475350> (a sun.nio.ch.Util$3)\n    - locked <0x00000000f4475340> (a java.util.Collections$UnmodifiableSet)\n    - locked <0x00000000f4475208> (a sun.nio.ch.EPollSelectorImpl)\n    at sun.nio.ch.SelectorImpl.select(SelectorImpl.java:97)\n    at org.apache.tomcat.util.net.NioEndpoint$Poller.run(NioEndpoint.java:743)\n    at java.lang.Thread.run(Thread.java:748)\n\n   Locked ownable synchronizers:\n    - None\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"jstack \u53ef\u4ee5\u7528\u6765\u5b9a\u4f4d\u6b7b\u9501\u3001\u6b7b\u5faa\u73af\u3001\u7ebf\u7a0b\u963b\u585e\u7b49\u95ee\u9898\n")),(0,r.kt)("h3",{id:"4-jstat\u547d\u4ee4"},"4. jstat\u547d\u4ee4"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'[root@iZwz9jcjzd6wfh44nnnsv4Z ~]# jstat -help\nUsage: jstat -help|-options\n       jstat -<option> [-t] [-h<lines>] <vmid> [<interval> [<count>]]\n\nDefinitions:\n  <option>      An option reported by the -options option\n  <vmid>        Virtual Machine Identifier. A vmid takes the following form:\n                     <lvmid>[@<hostname>[:<port>]]\n                Where <lvmid> is the local vm identifier for the target\n                Java virtual machine, typically a process id; <hostname> is\n                the name of the host running the target Java virtual machine;\n                and <port> is the port number for the rmiregistry on the\n                target host. See the jvmstat documentation for a more complete\n                description of the Virtual Machine Identifier.\n  <lines>       Number of samples between header lines.\n  <interval>    Sampling interval. The following forms are allowed:\n                    <n>["ms"|"s"]\n                Where <n> is an integer and the suffix specifies the units as\n                milliseconds("ms") or seconds("s"). The default units are "ms".\n  <count>       Number of samples to take before terminating.\n  -J<flag>      Pass <flag> directly to the runtime system.\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"[root@iZwz9jcjzd6wfh44nnnsv4Z ~]# jstat -options\n-class\n-compiler\n-gc\n-gccapacity\n-gccause\n-gcmetacapacity\n-gcnew\n-gcnewcapacity\n-gcold\n-gcoldcapacity\n-gcutil\n-printcompilation\n")),(0,r.kt)("p",null,"\u4f7f\u7528\u4f8b\u5b50\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"[root@iZwz9jcjzd6wfh44nnnsv4Z ~]# jstat -gc 25057\n S0C    S1C    S0U    S1U      EC       EU        OC         OU       MC     MU    CCSC   CCSU   YGC     YGCT    FGC    FGCT     GCT\n9216.0 9216.0 1248.1  0.0   121856.0 79308.8   40960.0    15612.7   18560.0 18067.8 2176.0 1998.5      8    0.089   0      0.000    0.089\n")),(0,r.kt)("h3",{id:"5-jmap\u547d\u4ee4"},"5. jmap\u547d\u4ee4"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'[root@iZwz9jcjzd6wfh44nnnsv4Z ~]# jmap\nUsage:\n    jmap [option] <pid>\n        (to connect to running process)\n    jmap [option] <executable <core>\n        (to connect to a core file)\n    jmap [option] [server_id@]<remote server IP or hostname>\n        (to connect to remote debug server)\n\nwhere <option> is one of:\n    <none>               to print same info as Solaris pmap\n    -heap                to print java heap summary\n    -histo[:live]        to print histogram of java object heap; if the "live"\n                         suboption is specified, only count live objects\n    -clstats             to print class loader statistics\n    -finalizerinfo       to print information on objects awaiting finalization\n    -dump:<dump-options> to dump java heap in hprof binary format\n                         dump-options:\n                           live         dump only live objects; if not specified,\n                                        all objects in the heap are dumped.\n                           format=b     binary format\n                           file=<file>  dump heap to <file>\n                         Example: jmap -dump:live,format=b,file=heap.bin <pid>\n    -F                   force. Use with -dump:<dump-options> <pid> or -histo\n                         to force a heap dump or histogram when <pid> does not\n                         respond. The "live" suboption is not supported\n                         in this mode.\n    -h | -help           to print this help message\n    -J<flag>             to pass <flag> directly to the runtime system\n')),(0,r.kt)("p",null,"\u770b\u4e00\u4e0b\u4f7f\u7528"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"[root@iZwz9jcjzd6wfh44nnnsv4Z ~]# jmap -heap 25057\nAttaching to process ID 25057, please wait...\nDebugger attached successfully.\nServer compiler detected.\nJVM version is 25.131-b11\n\nusing thread-local object allocation.\nParallel GC with 2 thread(s)\n\nHeap Configuration:\n   MinHeapFreeRatio         = 0\n   MaxHeapFreeRatio         = 100\n   MaxHeapSize              = 994050048 (948.0MB)\n   NewSize                  = 20971520 (20.0MB)\n   MaxNewSize               = 331350016 (316.0MB)\n   OldSize                  = 41943040 (40.0MB)\n   NewRatio                 = 2\n   SurvivorRatio            = 8\n   MetaspaceSize            = 21807104 (20.796875MB)\n   CompressedClassSpaceSize = 1073741824 (1024.0MB)\n   MaxMetaspaceSize         = 17592186044415 MB\n   G1HeapRegionSize         = 0 (0.0MB)\n\nHeap Usage:\nPS Young Generation\nEden Space:\n   capacity = 124780544 (119.0MB)\n   used     = 84413336 (80.5028305053711MB)\n   free     = 40367208 (38.497169494628906MB)\n   67.64943739947151% used\nFrom Space:\n   capacity = 9437184 (9.0MB)\n   used     = 1278016 (1.21881103515625MB)\n   free     = 8159168 (7.78118896484375MB)\n   13.542344835069445% used\nTo Space:\n   capacity = 9437184 (9.0MB)\n   used     = 0 (0.0MB)\n   free     = 9437184 (9.0MB)\n   0.0% used\nPS Old Generation\n   capacity = 41943040 (40.0MB)\n   used     = 15987400 (15.246772766113281MB)\n   free     = 25955640 (24.75322723388672MB)\n   38.1169319152832% used\n\n12505 interned Strings occupying 1754736 bytes.\n")),(0,r.kt)("h3",{id:"6-\u603b\u7ed3"},"6 \u603b\u7ed3"),(0,r.kt)("p",null,"\u4e0a\u9762\u662f\u4e00\u4e9b\u5e38\u7528\u7684\u547d\u4ee4\u7528\u6765\u67e5\u770bJVM\u5728\u8fd0\u884c\u8fc7\u7a0b\u4e2d\u7684\u4e00\u4e9b\u72b6\u6001\u548c\u67e5\u8be2\u95ee\u9898\u3002\u9664\u4e86\u4f7f\u7528Java\u81ea\u5e26\u7684\u547d\u4ee4\u8fd8\u53ef\u4ee5\u501f\u52a9\u4e00\u4e9b\u5de5\u5177\uff0c\u4f8b\u5982\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://arthas.aliyun.com/doc/"},"\u963f\u91ccArthas")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://visualvm.github.io/"},"visualvm")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.ej-technologies.com/products/jprofiler/overview.html"},"JProfiler")," ")),(0,r.kt)("p",null,"\u4ee5\u4e0a\u5de5\u5177\u90fd\u80fd\u63d0\u4f9b\u66f4\u597d\u7684\u5206\u6790\uff0c\u547d\u4ee4\u53ef\u4ee5\u5728\u7b80\u5355\u95ee\u9898\u6392\u67e5\u63d0\u4f9b\u4fbf\u5229\u4e0d\u9700\u8981\u8fdb\u884c\u4e0b\u8f7d\u5176\u4ed6\u7684\u5de5\u5177\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6211\u662f\u8682\u8681\u80cc\u5927\u8c61\uff0c\u6587\u7ae0\u5bf9\u4f60\u6709\u5e2e\u52a9\u70b9\u8d5e\u5173\u6ce8\u6211\uff0c\u6587\u7ae0\u6709\u4e0d\u6b63\u786e\u7684\u5730\u65b9\u8bf7\u60a8\u65a7\u6b63\u7559\u8a00\u8bc4\u8bba~\u8c22\u8c22\uff01")))}d.isMDXComponent=!0}}]);