"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[7375],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),o=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=o(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),m=o(a),d=r,k=m["".concat(p,".").concat(d)]||m[d]||s[d]||l;return a?n.createElement(k,i(i({ref:t},c),{},{components:a})):n.createElement(k,i({ref:t},c))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u[m]="string"==typeof e?e:r,i[1]=u;for(var o=2;o<l;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8878:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>u,toc:()=>o});var n=a(7462),r=(a(7294),a(3905));const l={title:"\u7ebf\u7a0b\u6c60\u7684\u6570\u91cf\u548c\u7ebf\u7a0b\u6c60\u4e2d\u7ebf\u7a0b\u6570\u91cf\u5982\u4f55\u8bbe\u7f6e-\u7406\u8bba\u7bc7",linkTitle:"\u7ebf\u7a0b\u6c60\u7684\u6570\u91cf\u548c\u7ebf\u7a0b\u6c60\u4e2d\u7ebf\u7a0b\u6570\u91cf\u5982\u4f55\u8bbe\u7f6e-\u7406\u8bba\u7bc7",date:new Date("2022-02-20T00:00:00.000Z"),weight:202202202200},i=void 0,u={unversionedId:"java/java-se/concurrencemultithreading/threadpool-thread-number",id:"java/java-se/concurrencemultithreading/threadpool-thread-number",title:"\u7ebf\u7a0b\u6c60\u7684\u6570\u91cf\u548c\u7ebf\u7a0b\u6c60\u4e2d\u7ebf\u7a0b\u6570\u91cf\u5982\u4f55\u8bbe\u7f6e-\u7406\u8bba\u7bc7",description:"1.\u5f15\u8a00",source:"@site/docs/java/java-se/concurrencemultithreading/threadpool-thread-number.md",sourceDirName:"java/java-se/concurrencemultithreading",slug:"/java/java-se/concurrencemultithreading/threadpool-thread-number",permalink:"/docs/java/java-se/concurrencemultithreading/threadpool-thread-number",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/java/java-se/concurrencemultithreading/threadpool-thread-number.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1676193845,formattedLastUpdatedAt:"Feb 12, 2023",frontMatter:{title:"\u7ebf\u7a0b\u6c60\u7684\u6570\u91cf\u548c\u7ebf\u7a0b\u6c60\u4e2d\u7ebf\u7a0b\u6570\u91cf\u5982\u4f55\u8bbe\u7f6e-\u7406\u8bba\u7bc7",linkTitle:"\u7ebf\u7a0b\u6c60\u7684\u6570\u91cf\u548c\u7ebf\u7a0b\u6c60\u4e2d\u7ebf\u7a0b\u6570\u91cf\u5982\u4f55\u8bbe\u7f6e-\u7406\u8bba\u7bc7",date:"2022-02-20T00:00:00.000Z",weight:202202202200},sidebar:"javase",previous:{title:"\u7ebf\u7a0b\u6c60\u7684\u6570\u91cf\u548c\u7ebf\u7a0b\u6c60\u4e2d\u7ebf\u7a0b\u6570\u91cf\u5982\u4f55\u8bbe\u7f6e-\u5b9e\u8df5\u7bc7",permalink:"/docs/java/java-se/concurrencemultithreading/threadpool-thread-number-practice"},next:{title:"\u7ebf\u7a0b\u6c60\u6e90\u7801\u89e3\u6790",permalink:"/docs/java/java-se/concurrencemultithreading/threadpool"}},p={},o=[{value:"1.\u5f15\u8a00",id:"1\u5f15\u8a00",level:3},{value:"2. \u9879\u76ee\u4e2d\u662f\u4e0d\u662f\u53ea\u80fd\u6709\u4e00\u4e2a\u7ebf\u7a0b\u6c60\uff1f",id:"2-\u9879\u76ee\u4e2d\u662f\u4e0d\u662f\u53ea\u80fd\u6709\u4e00\u4e2a\u7ebf\u7a0b\u6c60",level:3},{value:"3.\u591a\u4e2a\u7ebf\u7a0b\u6c60\u5171\u5b58\u7684\u60c5\u51b5CPU\u5982\u4f55\u6267\u884c\u7ebf\u7a0b",id:"3\u591a\u4e2a\u7ebf\u7a0b\u6c60\u5171\u5b58\u7684\u60c5\u51b5cpu\u5982\u4f55\u6267\u884c\u7ebf\u7a0b",level:3},{value:"3.1  4\u4e2a\u5355\u7ebf\u7a0b",id:"31--4\u4e2a\u5355\u7ebf\u7a0b",level:4},{value:"3.2 \u4e00\u4e2a\u7ebf\u7a0b\u6c60-4\u4e2a\u7ebf\u7a0b\uff1a",id:"32-\u4e00\u4e2a\u7ebf\u7a0b\u6c60-4\u4e2a\u7ebf\u7a0b",level:4},{value:"3.3 2\u4e2a\u7ebf\u7a0b\u6c60\u6bcf\u4e2a2\u4e2a\u7ebf\u7a0b\uff1a",id:"33-2\u4e2a\u7ebf\u7a0b\u6c60\u6bcf\u4e2a2\u4e2a\u7ebf\u7a0b",level:4},{value:"4. \u7cfb\u7edf\u8d1f\u8377(Load averages)\u4e0e\u8fdb\u7a0b\u4e0a\u4e0b\u6587\u5207\u6362",id:"4-\u7cfb\u7edf\u8d1f\u8377load-averages\u4e0e\u8fdb\u7a0b\u4e0a\u4e0b\u6587\u5207\u6362",level:3},{value:"4.1 Linux\u4e2d\u7684\u7cfb\u7edf\u8d1f\u8377\uff08Load averages\uff09",id:"41-linux\u4e2d\u7684\u7cfb\u7edf\u8d1f\u8377load-averages",level:4},{value:"4.2 \u8fdb\u7a0b\u7684\u4e0a\u4e0b\u6587\u5207\u6362",id:"42-\u8fdb\u7a0b\u7684\u4e0a\u4e0b\u6587\u5207\u6362",level:4},{value:"5. \u7ebf\u7a0b\u6570\u91cf\u8bbe\u7f6e\u539f\u5219",id:"5-\u7ebf\u7a0b\u6570\u91cf\u8bbe\u7f6e\u539f\u5219",level:4}],c={toc:o},m="wrapper";function s(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"1\u5f15\u8a00"},"1.\u5f15\u8a00"),(0,r.kt)("p",null,"\u5927\u5bb6\u53ef\u80fd\u90fd\u548c\u6211\u4e00\u6837\uff0c\u5728\u7f51\u4e0a\u770b\u5230\u8fc7\u8fd9\u6837\u7684\u4e00\u4e2a\u7406\u8bba(\u5148\u4e0d\u8bf4\u6b63\u786e\u4e0e\u5426)\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8ba1\u7b97\u5bc6\u96c6\u578b\uff1aCPU\u6838\u5fc3\u6570+1"),(0,r.kt)("li",{parentName:"ul"},"I/O\u5bc6\u96c6\u578b\uff1aCPU\u6838\u5fc3\u6570*2")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Linux\u67e5\u770b\u547d\u4ee4\uff1alscpu")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/java/concurrencemultithreading/image-20220219215720981.png",alt:"image-20220219215720981"})),(0,r.kt)("p",null,"\u6309\u7167\u4e0a\u9762\u7684\u7406\u8bba\uff0c\u90a3\u4e48\u6211\u7684\u7ebf\u7a0b\u6c60\u5927\u5c0f\u5e94\u8be5\u8bbe\u8ba1\u6210\u8fd9\u6837\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8ba1\u7b97\u5bc6\u96c6\u578b\uff1aCPU\u6838\u5fc3\u6570+1=17"),(0,r.kt)("li",{parentName:"ul"},"I/O\u5bc6\u96c6\u578b\uff1aCPU\u6838\u5fc3\u6570*2=32")),(0,r.kt)("p",null,"\u4f46\u662f\u6709\u6ca1\u6709\u53d1\u73b0\u8fd9\u6837\u7684\u4e00\u4e2a\u95ee\u9898\uff0c\u8fd9\u91cc\u8bf4\u7684\u597d\u50cf\u90fd\u662f\u4e00\u4e2a\u7ebf\u7a0b\u6c60\u4e2d\u7ebf\u7a0b\u7684\u6570\u91cf\uff0c\u5982\u679c\u4e00\u4e2a\u9879\u76ee\u4e2d\u5b58\u5728\u591a\u4e2a\u7ebf\u7a0b\u6c60\uff0c\u662f\u4e0d\u662f\u6bcf\u4e00\u4e2a\u7ebf\u7a0b\u6c60\u90fd\u5e94\u8be5\u8bbe\u7f6e\u6210\u4e00\u6837\u7684\u7ebf\u7a0b\u6570\u91cf\u3002\u8fd9\u91cc\u5c31\u4f1a\u5f15\u51fa\u4e00\u4e0b\u51e0\u4e2a\u95ee\u9898\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/java/concurrencemultithreading/%E7%BA%BF%E7%A8%8B%E6%B1%A0%E5%92%8C%E7%BA%BF%E7%A8%8B%E6%B1%A0%E7%BA%BF%E7%A8%8B%E6%95%B0%E9%87%8F.png",alt:"\u7ebf\u7a0b\u6c60\u548c\u7ebf\u7a0b\u6c60\u7ebf\u7a0b\u6570\u91cf"})),(0,r.kt)("h3",{id:"2-\u9879\u76ee\u4e2d\u662f\u4e0d\u662f\u53ea\u80fd\u6709\u4e00\u4e2a\u7ebf\u7a0b\u6c60"},"2. \u9879\u76ee\u4e2d\u662f\u4e0d\u662f\u53ea\u80fd\u6709\u4e00\u4e2a\u7ebf\u7a0b\u6c60\uff1f"),(0,r.kt)("p",null,"\u5bf9\u4e8e ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"\u9879\u76ee\u4e2d\u662f\u4e0d\u662f\u53ea\u80fd\u6709\u4e00\u4e2a\u7ebf\u7a0b\u6c60\uff1f"))," \u8fd9\u4e2a\u95ee\u9898\uff0c\u5f88\u663e\u7136\u5927\u5bb6\u90fd\u77e5\u9053\u4e0d\u592a\u53ef\u80fd\u53ea\u80fd\u62e5\u6709\u4e00\u4e2a\u7ebf\u7a0b\u6c60\u3002\u5c31\u62ff\u4e00\u4e2a\u7b80\u5355\u7684Web\u9879\u76ee\u6765\u8bf4\uff0c\u81f3\u5c11\u4f1a\u6709\u4e00\u4e2aTomcat\u7684\u5904\u7406\u7ebf\u7a0b\u6c60\u3002\u5982\u679c\u9879\u76ee\u9700\u8981\u8fde\u63a5\u6570\u636e\u5e93\u90a3\u4e48\u81f3\u5c11\u8fd8\u4f1a\u6709\u4e00\u4e2a\u6570\u636e\u5e93\u7684\u94fe\u63a5\u7ba1\u7406\u7ebf\u7a0b\u6c60\u3002\u8fd9\u6837\u6765\u8bf4\u5c31\u81f3\u5c11\u5b58\u5728\u4e86\u4e24\u4e2a\u7ebf\u7a0b\u6c60\u3002\u7ed3\u8bba\u5c31\u662f\uff1a",(0,r.kt)("strong",{parentName:"p"},"\u5927\u90e8\u5206\u9879\u76ee\u4e2d\u7ebf\u7a0b\u6c60\u4f1a\u5b58\u5728\u591a\u4e2a\u7279\u522b\u662f\u5728Web\u9879\u76ee\u4e2d\uff0c\u4f46\u662f\u5728\u67d0\u4e9b\u975eWeb\u5e94\u7528\u4e5f\u53ef\u80fd\u53ea\u5b58\u5728\u4e00\u4e2a\u7ebf\u7a0b\u6c60\u6216\u8005\u4e0d\u5b58\u5728\u7ebf\u7a0b\u6c60\u7684\u60c5\u51b5\u3002")," "),(0,r.kt)("p",null,"\u8fd9\u79cd\u5b58\u5728\u591a\u4e2a\u7ebf\u7a0b\u6c60\u7684\u60c5\u51b5\u4e0b\u663e\u7136\u5c31\u4e0d\u9002\u7528\u4e86\u5f00\u7bc7\u63d0\u5230\u7684\u7f51\u4e0a\u8bf4\u7684\u90a3\u4e2a\u7406\u8bba\uff0c\u56e0\u4e3aweb\u9879\u76ee\u4e2dtomcat\u7684\u7ebf\u7a0b\u6c60\u9ed8\u8ba4\u503c\u5927\u5c0f\u5c31\u662f200\uff0c\u5982\u679c\u6309\u7167\u4e0a\u9762\u7684\u7406\u8bba\u663e\u7136\u662f\u4e0d\u6b63\u786e\u7684\u3002\u90a3\u4e48\u5982\u4f55\u8bbe\u7f6e\u7ebf\u7a0b\u6c60\u7684\u5927\u5c0f(\u7ebf\u7a0b\u6c60\u4e2d\u7ebf\u7a0b\u6570\u91cf\u591a\u5c11)\u9996\u5148\u8981\u641e\u6e05\u695a\u4ee5\u4e0b\u51e0\u4e2a\u95ee\u9898\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5355\u4e2a\u7ebf\u7a0b\u6c60\u548c\u7ebf\u7a0b\u6c60\u4e2d\u7ebf\u7a0b\u662f\u5982\u4f55\u6267\u884c\u7684\u662f\u4e0d\u662f\u6709\u4e0d\u540c"),(0,r.kt)("p",{parentName:"li"},"\u4f8b\u5982\u5355\u72ec\u521b\u5efa10\u4e2a\u7ebf\u7a0b\u542f\u52a8\u8fd0\u884c\uff0c\u548c\u7ebf\u7a0b\u6c60\u521b\u5efa\u7ebf\u7a0b\u6570\u91cf10\u4e2a\u7684\u7ebf\u7a0b\u662f\u4e0d\u662f\u4e00\u6837\u83b7\u53d6CPU\u7684\u6267\u884c")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4e24\u4e2a\u7ebf\u7a0b\u6c60\u7ebf\u7a0b\u6570\u4e3a5\u548c\u4e00\u4e2a\u7ebf\u7a0b\u6c60\u6570\u91cf\u4e3a10\u7684\u662f\u5426\u4e00\u6837"))),(0,r.kt)("p",null,"\u901a\u8fc7\u8fd9\u4e24\u4e2a\u95ee\u9898\u6211\u4eec\u6765\u901a\u8fc7\u4ee3\u7801\u5206\u6790\u4e00\u4e0b\u4e0a\u56fe\u4e2d\u7684\u7b2c\u4e8c\u4e2a\u95ee\u9898\uff1a",(0,r.kt)("strong",{parentName:"p"},"\u591a\u4e2a\u7ebf\u7a0b\u6c60\u5171\u5b58\u7684\u60c5\u51b5CPU\u5982\u4f55\u6267\u884c\u7ebf\u7a0b")),(0,r.kt)("h3",{id:"3\u591a\u4e2a\u7ebf\u7a0b\u6c60\u5171\u5b58\u7684\u60c5\u51b5cpu\u5982\u4f55\u6267\u884c\u7ebf\u7a0b"},"3.\u591a\u4e2a\u7ebf\u7a0b\u6c60\u5171\u5b58\u7684\u60c5\u51b5CPU\u5982\u4f55\u6267\u884c\u7ebf\u7a0b"),(0,r.kt)("p",null,"\u901a\u8fc7\u4e0b\u9762\u4e09\u4e2a\u4ee3\u7801\u4f8b\u5b50\u6765\u5206\u6790"),(0,r.kt)("h4",{id:"31--4\u4e2a\u5355\u7ebf\u7a0b"},"3.1  4\u4e2a\u5355\u7ebf\u7a0b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public class ThreadNumTest {\n    public static void main(String[] args) {\n        for(int i = 0; i < 4; ++i){\n            new Thread(new Runnable() {\n                @Override\n                public void run() {\n                    do {\n\n                    }while (true);\n                }\n            }, "mxsm").start();\n        }\n        System.out.println("main\u51fd\u6570\u8fd0\u884c\u7ed3\u675f");\n    }\n}\n')),(0,r.kt)("p",null,"\u7f16\u8bd1\u7136\u540e\u5728\u670d\u52a1\u5668\u4e0a\u8fd0\u884c:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/java/concurrencemultithreading/ThreadNumExample1.gif",alt:"ThreadNumExample1"})),(0,r.kt)("p",null,"\u7136\u540e\u901a\u8fc7\u5982\u4e0b\u547d\u4ee4\u8fdb\u884c\u89c2\u5bdf\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ jps\n$ top -H -p <java\u7a0b\u5e8f\u7684PID>\n")),(0,r.kt)("p",null,"\u8fd0\u884c\u5b8c\u4e0a\u9762\u7684\u547d\u4ee4\u540e\u6309 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"\u6570\u5b57\u952e1"))," \u67e5\u770bCPU\u7684\u4f7f\u7528\u7387"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/java/concurrencemultithreading/image-20220219222136205.png",alt:"image-20220219222136205"})),(0,r.kt)("p",null,"\u8fd9\u91cc\u4f1a\u53d1\u73b0\u67094\u4e2aCPU\u7684\u4f7f\u7528\u7387\u5df2\u7ecf\u5230\u8fbe100%\u3002\u63a5\u4e0b\u6765\u770b\u7b2c2\u79cd\u60c5\u51b5"),(0,r.kt)("h4",{id:"32-\u4e00\u4e2a\u7ebf\u7a0b\u6c60-4\u4e2a\u7ebf\u7a0b"},"3.2 \u4e00\u4e2a\u7ebf\u7a0b\u6c60-4\u4e2a\u7ebf\u7a0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public class ThreadNumTest {\n    public static void main(String[] args) {\n        ExecutorService executorService = Executors.newFixedThreadPool(4);\n        for(int i = 0; i < 4; ++i){\n            executorService.submit(new Runnable() {\n                @Override\n                public void run() {\n                    do {\n\n                    }while (true);\n                }\n            });\n        }\n        System.out.println("main\u51fd\u6570\u8fd0\u884c\u7ed3\u675f-\u4e00\u4e2a\u7ebf\u7a0b\u6c60-4\u4e2a\u7ebf\u7a0b");\n    }\n}\n')),(0,r.kt)("p",null,"\u7f16\u8bd1\u7136\u540e\u5728\u670d\u52a1\u5668\u4e0a\u8fd0\u884c:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/java/concurrencemultithreading/ThreadNumExample2.gif",alt:"ThreadNumExample1"})),(0,r.kt)("p",null,"\u901a\u8fc7\u547d\u4ee4(\u4e0a\u9762\u7684\u7b2c\u4e00\u79cd\u60c5\u51b5)\u67e5\u770b"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/java/concurrencemultithreading/image-20220219222507978.png",alt:"image-20220219222507978"})),(0,r.kt)("p",null,"\u53d1\u73b0\u67094\u4e2aCPU\u7684\u4f7f\u7528\u7387\u8fbe\u5230\u4e86100%\uff0c\u63a5\u4e0b\u6765\u770b\u7b2c\u4e09\u79cd\u60c5\u51b5"),(0,r.kt)("h4",{id:"33-2\u4e2a\u7ebf\u7a0b\u6c60\u6bcf\u4e2a2\u4e2a\u7ebf\u7a0b"},"3.3 2\u4e2a\u7ebf\u7a0b\u6c60\u6bcf\u4e2a2\u4e2a\u7ebf\u7a0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public class ThreadNumTest {\n    public static void main(String[] args) {\n        ExecutorService executorService = Executors.newFixedThreadPool(2);\n        ExecutorService executorService1 = Executors.newFixedThreadPool(2);\n        for(int i = 0; i < 2; ++i){\n            executorService.submit(new Runnable() {\n                @Override\n                public void run() {\n                    do {\n\n                    }while (true);\n                }\n            });\n            executorService1.submit(new Runnable() {\n                @Override\n                public void run() {\n                    do {\n\n                    }while (true);\n                }\n            });\n        }\n        System.out.println("main\u51fd\u6570\u8fd0\u884c\u7ed3\u675f-2\u4e2a\u7ebf\u7a0b\u6c60\u6bcf\u4e2a2\u4e2a\u7ebf\u7a0b");\n    }\n}\n')),(0,r.kt)("p",null,"\u7f16\u8bd1\u7136\u540e\u5728\u670d\u52a1\u5668\u4e0a\u8fd0\u884c:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/java/concurrencemultithreading/ThreadNumExample3.gif",alt:"ThreadNumExample1"})),(0,r.kt)("p",null,"\u901a\u8fc7\u547d\u4ee4(\u4e0a\u9762\u7684\u7b2c\u4e00\u79cd\u60c5\u51b5)\u67e5\u770b"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/java/concurrencemultithreading/image-20220219222742257.png",alt:"image-20220219222742257"})),(0,r.kt)("p",null,"\u53d1\u73b0\u67094\u4e2aCPU\u7684\u4f7f\u7528\u7387\u8fbe\u5230\u4e86100%\u3002"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"\u901a\u8fc7\u4ee3\u7801\u7684\u6f14\u793a\u5f97\u51fa\u4e00\u4e2a\u7ed3\u8bba\uff1a",(0,r.kt)("strong",{parentName:"p"},"\u7ebf\u7a0b\u6c60\u4e2a\u6570\u7684\u591a\u5c11\u548c\u662f\u5426\u8fdb\u884c\u6c60\u5316\uff0c\u5bf9CPU\u5bf9\u7ebf\u7a0b\u7684\u6267\u884c\u6ca1\u6709\u5f71\u54cd\u3002\u8fd9\u4e5f\u662f\u7ebf\u7a0b\u6c60\u5316\u53ea\u662f\u5f71\u54cd\u6548\u7387\u5e76\u4e0d\u4f1a\u5f71\u54cdCPU\u5bf9\u7ebf\u7a0b\u7684\u6267\u884c\u5e95\u5c42\u903b\u8f91\u3002(\u8fd9\u91cc\u8bf4\u7684\u6548\u7387\u662f\u6ca1\u6709\u6c60\u5316\u60c5\u51b5\u4e0b\u7ebf\u7a0b\u9700\u8981\u6267\u884c\u4efb\u52a1\u8981\u65b0\u5efa\uff0c\u6267\u884c\u5b8c\u6210\u540e\u9700\u8981\u9500\u6bc1\u3002\u8fd9\u91cc\u4f1a\u5f71\u54cd\u5230\u6548\u7387)\u3002\u90fd\u662f4\u4e2aCPU\u7684\u4f7f\u7528\u7387\u8fbe\u5230\u4e86\u767e\u5206\u4e4b\u767e\u3002")),(0,r.kt)("p",null,"\u4e0a\u9762\u662f\u901a\u8fc7\u4e00\u4e2a\u6b7b\u7684\u7a7a\u5faa\u73af\u4e0d\u505c\u7684\u6267\u884c\uff0cCPU\u624d\u8dd1\u6ee1\uff0c\u5927\u591a\u6570\u60c5\u51b5\u4e0b\u7a0b\u5e8f\u90fd\u4f1a\u6709I/O\u64cd\u4f5c\uff0c\u6216\u8005\u7f51\u7edc\u7684\u6536\u53d1\u6570\u636e\u62a5\u6587\u7684\u60c5\u51b5\u3002\u8fd9\u4e9b\u64cd\u4f5c\u5c31\u9700\u8981\u7b49\u5f85\u53cd\u9988\uff0c\u5728\u8fd9\u4e2a\u8fc7\u7a0b\u4e2d\u7ebf\u7a0b\u5c31\u662f\u7b49\u5f85\u7684\u72b6\u6001\uff0cCPU\u5c31\u4f1a\u6ca1\u6709\u5de5\u4f5c\uff0c\u64cd\u4f5c\u7cfb\u7edf\u5c31\u4f1a\u8c03\u5ea6CPU\u53bb\u6267\u884c\u5176\u4ed6\u7684\u7ebf\u7a0b\u3002\u8fd9\u91cc\u5c31\u4f1a\u51fa\u73b0\u4e0a\u4e0b\u6587\u7684\u5207\u6362\u3002"),(0,r.kt)("h3",{id:"4-\u7cfb\u7edf\u8d1f\u8377load-averages\u4e0e\u8fdb\u7a0b\u4e0a\u4e0b\u6587\u5207\u6362"},"4. \u7cfb\u7edf\u8d1f\u8377(Load averages)\u4e0e\u8fdb\u7a0b\u4e0a\u4e0b\u6587\u5207\u6362"),(0,r.kt)("p",null,"\u5728\u8bb2\u5982\u4f55\u8bbe\u7f6e\u7ebf\u7a0b\u6570\u91cf\u7684\u4e4b\u524d\uff0c\u6765\u8bf4\u4e00\u4e0bLinux\u4e2d\u7684\u7cfb\u7edf\u8d1f\u8377\uff08Load averages\uff09\uff0c"),(0,r.kt)("h4",{id:"41-linux\u4e2d\u7684\u7cfb\u7edf\u8d1f\u8377load-averages"},"4.1 Linux\u4e2d\u7684\u7cfb\u7edf\u8d1f\u8377\uff08Load averages\uff09"),(0,r.kt)("p",null,"\u67e5\u770b\u547d\u4ee4\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"uptime\n#\u6216\u8005\ntop\n")),(0,r.kt)("p",null,"\u8fd9\u4e2a\u4e1c\u897f\u600e\u4e48\u7406\u89e3\uff0c\u53ef\u4ee5\u53c2\u7167\u4e00\u4e0b\u8fd9\u4e2a\u6587\u7ae0\u7684\u7406\u89e3\uff1a\u300a",(0,r.kt)("a",{parentName:"p",href:"https://scoutapm.com/blog/understanding-load-averages"},"Understanding Linux CPU Load"),"\u300b\u3002\u5728\u8fd9\u4e2a\u6587\u7ae0\u4e2d\u6709\u4e00\u5f20\u56fe\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/java/concurrencemultithreading/image-20220220112446981.png",alt:"image-20220220112446981"})),(0,r.kt)("p",null,"\u4e0a\u56fe\u63cf\u8ff0\u4e86CPU\u7684\u8fc7\u8f7d\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u662f\u4f7f\u7528CPU\u65f6\u95f4\u7247(\u201c\u8fc7\u6865\u201d)\u6216\u6392\u961f\u4f7f\u7528CPU\u7684\u8fdb\u7a0b"),(0,r.kt)("li",{parentName:"ul"},"\u901a\u9053\u5c31\u8868\u793a\u4e00\u4e2aCPU"),(0,r.kt)("li",{parentName:"ul"},"\u8fd0\u884c\u961f\u5217\u957f\u5ea6:\u5f53\u524d\u8fd0\u884c\u7684\u8fdb\u7a0b\u6570\u52a0\u4e0a\u7b49\u5f85(\u6392\u961f)\u8fd0\u884c\u7684\u8fdb\u7a0b\u6570\u7684\u603b\u548c  ")),(0,r.kt)("p",null,"\u7b80\u5355\u7ffb\u8bd1\u7406\u89e3\u4e00\u4e0b\u51e0\u4e2a\u91cd\u8981\u7684\u5730\u65b9\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Load averages\u503c\u57280.00-1\u7684\u8303\u56f4\u5185(\u4e0d\u5305\u542b1)\uff0cCPU\u6b63\u5e38\u8fd0\u884c\u8fd9\u4e2a\u662f\u6bd4\u8f83\u597d\u7684\u60c5\u51b5\uff0c\u6865\u4e0a\u7684\u8f66\u6ca1\u6709\u62e5\u5835\uff0c\u6ca1\u8fbe\u5230\u6700\u5927\u627f\u53d7"),(0,r.kt)("li",{parentName:"ul"},"Load averages\u503c\u57281\uff0c\u8868\u660eCPU\u6ee1\u8d1f\u8377\u8fd0\u884c\uff0c\u6865\u4e0a\u7684\u8f66\u6ca1\u6709\u62e5\u5835\uff0c\u8fbe\u5230\u4e86\u6700\u5927\u627f\u53d7"),(0,r.kt)("li",{parentName:"ul"},"Load averages\u503c\u5927\u4e8e1\uff0c \u6807\u660eCPU\u8d85\u8d1f\u8377\u8fd0\u884c\uff0c \u6865\u4e0a\u7684\u8f66\u5df2\u7ecf\u8fbe\u5230\u6700\u5927\u7684\u627f\u53d7\uff0c\u540c\u65f6\u5f00\u59cb\u5728\u6865\u7684\u5165\u53e3\u5904\u5f00\u59cb\u5835\u8f66")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Tips: "),(0,r.kt)("ol",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ol"},"\u4e0a\u9762\u8bf4\u7684\u662f\u5355\u6838\u5355\u7ebf\u7a0b\u7684\u60c5\u51b5\u4e0b\uff0c\u5982\u679c\u662f\u591a\u6838\u591a\u7ebf\u7a0b\u60c5\u51b5Load averages\u503c\u5c31\u4e0d\u662f1\u4e86\uff0c\u4f8b\u5982\u6211\u73b0\u5728\u8fd9\u4e2aCPU8\u683816\u7ebf\u7a0b\u90a3\u4e48Load averages=16\u7b97\u662f\u6ee1\u8d1f\u8377\u8fd0\u884c\u3002"),(0,r.kt)("li",{parentName:"ol"},"Load averages=1\u6ca1\u6709\u4efb\u4f55\u5176\u4ed6\u7684\u7a7a\u95f4\uff0c\u7ecf\u9a8c\u503c\u4e00\u822c\u57280.7\u5de6\u53f3\uff0c\u5982\u679c\u4e3a1.0\u4f60\u53bb\u64cd\u4f5c\u7535\u8111\u7684\u65f6\u5019\u5c31\u4f1a\u51fa\u73b0\u5361\u987f\u7684\u60c5\u51b5\uff0c\u539f\u56e0\u5c31\u5728\u4e8eCPU\u53ea\u80fd\u521a\u597d\u6ee1\u8d1f\u8377\u5b8c\u6210\u4efb\u52a1\u3002\u5bf9\u4e8e\u5176\u4ed6\u989d\u5916\u7684\u4efb\u52a1\u5c31\u9700\u8981\u6392\u961f\uff0c\u6240\u4ee5\u5c31\u4f1a\u5bfc\u81f4\u7535\u8111\u51fa\u73b0\u5361\u987f\u7684\u60c5\u51b5\u3002"))),(0,r.kt)("h4",{id:"42-\u8fdb\u7a0b\u7684\u4e0a\u4e0b\u6587\u5207\u6362"},"4.2 \u8fdb\u7a0b\u7684\u4e0a\u4e0b\u6587\u5207\u6362"),(0,r.kt)("p",null,"\u5bf9\u4e8e\u8fdb\u7a0b\u6267\u884c\u4efb\u52a1\u6765\u8bf4\uff0c\u5982\u679c\u8fdb\u7a0b\u7ed1\u5b9a\u5230\u67d0\u4e2aCPU\u4e0a\u9762\uff0c\u8fd9\u4e2aCPU\u4e5f\u53ea\u6267\u884c\u8fd9\u4e00\u4e2a\u8fdb\u7a0b\uff0c\u8fd9\u79cd\u60c5\u51b5\u4e0b\u662f\u4e0d\u5b58\u5728\u8fdb\u7a0b\u7684\u4e0a\u4e0b\u6587\u7684\u5207\u6362\u3002CPU\u7684\u5de5\u4f5c\u8fc7\u7a0b\u4e2d\u4e0a\u4e0b\u6587\u7684\u5207\u6362\u9700\u8981\u6d6a\u8d39\u4e00\u90e8\u5206\u65f6\u95f4\u3002",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"\u6240\u4ee5\u8fc7\u4e8e\u9891\u7e41\u7684\u4e0a\u4e0b\u6587\u5207\u6362\u4e5f\u4f1a\u5bfc\u81f4\u8fd0\u884c\u53d8\u6162"))," \u3002\u540c\u6837\u7684\u4e00\u4e2a\u4efb\u52a1\u518d\u6ca1\u6709\u4e0a\u4e0b\u6587\u5207\u6362\u7684\u65f6\u5019\u6267\u884c100\u6b21\u80af\u5b9a\u6bd4\u6709\u4e0a\u4e0b\u6587\u5207\u6362\u7684\u65f6\u95f4\u77ed\u3002"),(0,r.kt)("p",null,"\u4e0a\u4e0b\u6587\u5207\u6362\u5206\u7c7b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u81ea\u613f\u4e0a\u4e0b\u6587\u5207\u6362"),(0,r.kt)("p",{parentName:"li"},"\u6307\u8fdb\u7a0b\u65e0\u6cd5\u83b7\u53d6\u6240\u9700\u8d44\u6e90\uff0c\u5bfc\u81f4\u7684\u4e0a\u4e0b\u6587\u5207\u6362\u3002\u6bd4\u5982\u8bf4\uff0c I/O\u3001\u5185\u5b58\u7b49\u7cfb\u7edf\u8d44\u6e90\u4e0d\u8db3\u65f6\uff0c\u5c31\u4f1a\u53d1\u751f\u81ea\u613f\u4e0a\u4e0b\u6587\u5207\u6362")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u975e\u81ea\u613f\u4e0a\u4e0b\u6587\u5207\u6362"),(0,r.kt)("p",{parentName:"li"},"\u8fdb\u7a0b\u7531\u4e8e\u65f6\u95f4\u7247\u5df2\u5230\u7b49\u539f\u56e0\uff0c\u88ab\u7cfb\u7edf\u5f3a\u5236\u8c03\u5ea6\uff0c\u8fdb\u800c\u53d1\u751f\u7684\u4e0a\u4e0b\u6587\u5207\u6362"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Tips: Java\u7ebf\u7a0b\u548cLinux\u7cfb\u7edf\u7684\u8fdb\u7a0b\u7684\u5173\u7cfb\u53ef\u4ee5\u770b\u597d\u4e00\u4e0b\u300a",(0,r.kt)("a",{parentName:"p",href:"https://www.java67.com/2012/12/what-is-difference-between-thread-vs-process-java.html"},"Difference between Thread vs Process in Java?"),"\u300b\u4ee5\u53ca\u5728 stackoverflow\u300a",(0,r.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/1888160/distinguishing-between-java-threads-and-os-threads"},"Distinguishing between Java threads and OS threads?"),"\u300b\u4e0a\u8fd9\u4e2a\u56de\u7b54\u3002")),(0,r.kt)("h4",{id:"5-\u7ebf\u7a0b\u6570\u91cf\u8bbe\u7f6e\u539f\u5219"},"5. \u7ebf\u7a0b\u6570\u91cf\u8bbe\u7f6e\u539f\u5219"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u603b\u7684\u539f\u5219"),"\uff1a",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"\u5728CPU\u6ee1\u8f7d(\u6216\u8005\u6ee1\u8d1f\u8377\u76840.7\u6216\u8005\u67d0\u4e2a\u56fa\u5b9a\u503c)\u7684\u60c5\u51b5\u4e0b\uff0c\u901a\u8fc7\u8c03\u8282\u7ebf\u7a0b\u6570\u91cf\u80fd\u8ba9\u7cfb\u7edf\u5355\u4f4d\u65f6\u95f4\u5185\u5c3d\u53ef\u80fd\u7684\u5b8c\u6210\u66f4\u591a\u7684\u4efb\u52a1"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"\u7ebf\u7a0b\u6570\u91cf\u7684\u591a\u5c11\u53d6\u51b3\u5728\u5408\u9002\u7684\u6570\u91cf\u5728\u5355\u4f4d\u65f6\u95f4\u5185\u80fd\u591f\u5c3d\u53ef\u80fd\u591a\u7684\u5b8c\u6210\u67d0\u4e00\u4e2a\u4efb\u52a1\u6b21\u6570"))," \uff0c\u8fd9\u91cc\u7684\u7ebf\u7a0b\u6570\u6307\u7684\u662f\u6267\u884c\u67d0\u4e2a\u4efb\u52a1\u9891\u7387\u5f88\u9ad8\u7684\u7ebf\u7a0b\uff0c\u4f8b\u5982\uff1atomcat\u7684\u6267\u884c\u7ebf\u7a0b\u6c60\uff0c\u6570\u636e\u5e93\u7684\u7ebf\u7a0b\u6c60\u7b49\u7b49\uff0c\u800c\u5b9a\u65f6\u4e00\u4e2a\u5c0f\u65f6\u83b7\u53d6\u67d0\u4e2a\u914d\u7f6e\u7684\u7ebf\u7a0b\u6c60\u6216\u8005\u7ebf\u7a0b\u6c60\u8fd9\u4e9b\u90fd\u4e0d\u662f\u8003\u8651\u7684\u8303\u56f4\u3002"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"\u7ebf\u7a0b\u6570\u91cf\u8bbe\u7f6e\u4f1a\u5728\u4e0b\u4e00\u7bc7\u6587\u7ae0\u8fdb\u884c\u4ecb\u7ecd\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6211\u662f\u8682\u8681\u80cc\u5927\u8c61\uff0c\u6587\u7ae0\u5bf9\u4f60\u6709\u5e2e\u52a9\u70b9\u8d5e\u5173\u6ce8\u6211\uff0c\u6587\u7ae0\u6709\u4e0d\u6b63\u786e\u7684\u5730\u65b9\u8bf7\u60a8\u65a7\u6b63\u7559\u8a00\u8bc4\u8bba~\u8c22\u8c22")),(0,r.kt)("p",null,"\u53c2\u8003\u6587\u6863\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.java67.com/2012/12/what-is-difference-between-thread-vs-process-java.html"},"Difference between Thread vs Process in Java?")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/1888160/distinguishing-between-java-threads-and-os-threads"},"Distinguishing between Java threads and OS threads?")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://scoutapm.com/blog/understanding-load-averages"},"Understanding Linux CPU Load"))))}s.isMDXComponent=!0}}]);