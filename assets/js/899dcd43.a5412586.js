"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[6095],{9512:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>l,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var s=a(4848),t=a(8453);const i={title:"JVM\u5e38\u7528\u7684\u547d\u4ee4",date:new Date("2018-09-29T00:00:00.000Z")},o=void 0,r={id:"java/java-se/JVM/jvm-common-command",title:"JVM\u5e38\u7528\u7684\u547d\u4ee4",description:"\u67e5\u770bJVM\u9ed8\u8ba4\u5783\u573e\u6536\u96c6\u5668",source:"@site/docs/java/java-se/JVM/jvm-common-command.md",sourceDirName:"java/java-se/JVM",slug:"/java/java-se/JVM/jvm-common-command",permalink:"/docs/java/java-se/JVM/jvm-common-command",draft:!1,unlisted:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/java/java-se/JVM/jvm-common-command.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1719738085e3,frontMatter:{title:"JVM\u5e38\u7528\u7684\u547d\u4ee4",date:"2018-09-29T00:00:00.000Z"},sidebar:"javase",previous:{title:"Java\u4e2d\u7684\u5f15\u7528",permalink:"/docs/java/java-se/JVM/java-ref"},next:{title:"JVM\u5783\u573e\u6536\u96c6\u5668",permalink:"/docs/java/java-se/JVM/jvm-gc"}},d={},c=[{value:"\u67e5\u770bJVM\u9ed8\u8ba4\u5783\u573e\u6536\u96c6\u5668",id:"\u67e5\u770bjvm\u9ed8\u8ba4\u5783\u573e\u6536\u96c6\u5668",level:3},{value:"JVM\u6253\u5370GC\u65e5\u5fd7\u8be6\u60c5",id:"jvm\u6253\u5370gc\u65e5\u5fd7\u8be6\u60c5",level:3},{value:"\u67e5\u770b\u975e\u6807\u51c6\u7684\u53c2\u6570\u547d\u4ee4",id:"\u67e5\u770b\u975e\u6807\u51c6\u7684\u53c2\u6570\u547d\u4ee4",level:3}];function m(e){const n={code:"code",h3:"h3",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h3,{id:"\u67e5\u770bjvm\u9ed8\u8ba4\u5783\u573e\u6536\u96c6\u5668",children:"\u67e5\u770bJVM\u9ed8\u8ba4\u5783\u573e\u6536\u96c6\u5668"}),"\n",(0,s.jsx)(n.p,{children:"\u547d\u4ee4\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"java -XX:+PrintCommandLineFlags -version\n"})}),"\n",(0,s.jsx)(n.p,{children:"JDK8\u7684\u6253\u5370\u7ed3\u679c\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'$ java -XX:+PrintCommandLineFlags -version\n-XX:InitialHeapSize=134177280 -XX:MaxHeapSize=2146836480 -XX:+PrintCommandLineFlags -XX:+UseCompressedClassPointers -XX:+UseCompressedOops -XX:-UseLargePagesIndividualAllocation -XX:+UseParallelGC\njava version "1.8.0_151"\nJava(TM) SE Runtime Environment (build 1.8.0_151-b12)\nJava HotSpot(TM) 64-Bit Server VM (build 25.151-b12, mixed mode)\n\n'})}),"\n",(0,s.jsx)(n.p,{children:"JDK11\u7684\u6253\u5370\u7ed3\u679c\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'$ ./java -XX:+PrintCommandLineFlags -version\n-XX:G1ConcRefinementThreads=4 -XX:GCDrainStackTargetSize=64 -XX:InitialHeapSize=134177280 -XX:MaxHeapSize=2146836480 -XX:+PrintCommandLineFlags -XX:ReservedCodeCacheSize=251658240 -XX:+SegmentedCodeCache -XX:+UseCompressedClassPointers -XX:+UseCompressedOops -XX:+UseG1GC -XX:-UseLargePagesIndividualAllocation\njava version "11.0.2" 2019-01-15 LTS\nJava(TM) SE Runtime Environment 18.9 (build 11.0.2+9-LTS)\nJava HotSpot(TM) 64-Bit Server VM 18.9 (build 11.0.2+9-LTS, mixed mode)\n\n'})}),"\n",(0,s.jsx)(n.h3,{id:"jvm\u6253\u5370gc\u65e5\u5fd7\u8be6\u60c5",children:"JVM\u6253\u5370GC\u65e5\u5fd7\u8be6\u60c5"}),"\n",(0,s.jsx)(n.p,{children:"\u547d\u4ee4\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"-XX:+PrintGCDetails\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\u67e5\u770b\u975e\u6807\u51c6\u7684\u53c2\u6570\u547d\u4ee4",children:"\u67e5\u770b\u975e\u6807\u51c6\u7684\u53c2\u6570\u547d\u4ee4"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"java -XX:+PrintFlagsInitial  \u67e5\u770b-XX\u7684\njava -X \u53c2\u770b-X\u7684\n"})})]})}function l(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},8453:(e,n,a)=>{a.d(n,{R:()=>o,x:()=>r});var s=a(6540);const t={},i=s.createContext(t);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);