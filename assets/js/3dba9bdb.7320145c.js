"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[2922],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>k});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(t),u=r,k=c["".concat(s,".").concat(u)]||c[u]||m[u]||i;return t?a.createElement(k,l(l({ref:n},d),{},{components:t})):a.createElement(k,l({ref:n},d))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=u;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[c]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},6415:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=t(7462),r=(t(7294),t(3905));const i={title:"Java\u4e2d\u7684\u7410\u4e8b-synchronized",date:new Date("2019-04-24T00:00:00.000Z")},l=void 0,o={unversionedId:"java/java-se/lock/synchronized",id:"java/java-se/lock/synchronized",title:"Java\u4e2d\u7684\u7410\u4e8b-synchronized",description:"1.  java\u7684\u5185\u7f6e\u9501\u548c\u663e\u793a\u9501",source:"@site/docs/java/java-se/lock/synchronized.md",sourceDirName:"java/java-se/lock",slug:"/java/java-se/lock/synchronized",permalink:"/docs/java/java-se/lock/synchronized",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/java/java-se/lock/synchronized.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1675697367,formattedLastUpdatedAt:"Feb 6, 2023",frontMatter:{title:"Java\u4e2d\u7684\u7410\u4e8b-synchronized",date:"2019-04-24T00:00:00.000Z"},sidebar:"javase",previous:{title:"Java\u4e2d\u7684\u90a3\u4e9b\u9501\u4e8b-1",permalink:"/docs/java/java-se/lock/java-lock"},next:{title:"AQS\u6e90\u7801\u89e3\u6790",permalink:"/docs/java/java-se/concurrencemultithreading/AQS"}},s={},p=[{value:"1.  java\u7684\u5185\u7f6e\u9501\u548c\u663e\u793a\u9501",id:"1--java\u7684\u5185\u7f6e\u9501\u548c\u663e\u793a\u9501",level:3},{value:"2. \u5173\u952e\u5b57 <strong><code>synchronized</code></strong>",id:"2-\u5173\u952e\u5b57-synchronized",level:3},{value:"2.1 \u5bf9\u8c61\u9501\u548c\u7c7b\u9501",id:"21-\u5bf9\u8c61\u9501\u548c\u7c7b\u9501",level:4},{value:"2.2 \u4ee3\u7801\u9a8c\u8bc1",id:"22-\u4ee3\u7801\u9a8c\u8bc1",level:4},{value:"3 \u53cc\u91cd\u6821\u9a8c\u9501\u5b9e\u73b0\u5bf9\u8c61\u5355\u4f8b\uff08\u7ebf\u7a0b\u5b89\u5168\uff09",id:"3-\u53cc\u91cd\u6821\u9a8c\u9501\u5b9e\u73b0\u5bf9\u8c61\u5355\u4f8b\u7ebf\u7a0b\u5b89\u5168",level:3},{value:"4. \u603b\u7ed3",id:"4-\u603b\u7ed3",level:3},{value:"5. synchronized\u4e0eReenTrantLock \u7684\u540c\u548c\u4e0d\u540c",id:"5-synchronized\u4e0ereentrantlock-\u7684\u540c\u548c\u4e0d\u540c",level:3}],d={toc:p},c="wrapper";function m(e){let{components:n,...t}=e;return(0,r.kt)(c,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"1--java\u7684\u5185\u7f6e\u9501\u548c\u663e\u793a\u9501"},"1.  java\u7684\u5185\u7f6e\u9501\u548c\u663e\u793a\u9501"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u5185\u7f6e\u9501"),"\uff1a\u6bcf\u4e00\u4e2aJava\u5bf9\u8c61\u90fd\u53ef\u4ee5\u7528\u4f5c\u4e00\u4e2a\u5b9e\u73b0\u540c\u6b65\u7684\u9501\uff0c\u8fd9\u4e9b\u9501\u88ab\u79f0\u4e3a",(0,r.kt)("strong",{parentName:"p"},"\u5185\u7f6e\u9501"),"\uff0c\u7ebf\u7a0b\u8fdb\u5165\u4ee3\u7801\u5757\u6216\u8005\u65b9\u6cd5\u7684\u65f6\u5019\u81ea\u52a8\u83b7\u5f97\u8be5\u9501\uff0c\u5728\u9000\u51fa\u540c\u6b65\u4ee3\u7801\u6216\u8005\u65b9\u6cd5\u7684\u65f6\u5019\u4f1a\u91ca\u653e\u8be5\u9501\u3002\u5185\u7f6e\u9501\u901a\u8fc7\u5173\u952e\u5b57 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"synchronized"))," \u6765\u4f7f\u7528\u3002"),(0,r.kt)("p",{parentName:"li"},"\u5185\u7f6e\u9501\u662f\u4e92\u65a5\u9501\u662f\u4e00\u628a\u4e92\u65a5\u9501\uff0c\u6362\u53e5\u8bdd\u8bf4\u5c31\u662f\u53ea\u6709\u4e00\u4e2a\u7ebf\u7a0b\u80fd\u591f\u83b7\u5f97\u8be5\u9501\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u663e\u793a\u9501"),"\uff1a\u663e\u5f0f\u9501(",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"ReentrantLock")),")\u6b63\u5f0f\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e9b\u7075\u6d3b\u9700\u6c42\u800c\u751f\u3002 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"ReentrantLock"))," \u7684\u5b57\u9762\u610f\u601d\u662f",(0,r.kt)("em",{parentName:"p"},"\u53ef\u91cd\u5165\u9501"),"\uff0c\u53ef\u91cd\u5165\u7684\u610f\u601d\u662f\u7ebf\u7a0b\u53ef\u4ee5\u540c\u65f6\u591a\u6b21\u8bf7\u6c42\u540c\u4e00\u628a\u9501\uff0c\u800c\u4e0d\u4f1a\u81ea\u5df1\u5bfc\u81f4\u81ea\u5df1\u6b7b\u9501\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u663e\u793a\u9501\u548c\u5185\u7f6e\u9501\u7684\u533a\u522b"),"\uff1a"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u663e\u793a\u9501\u53ef\u5b9a\u65f6\uff0c\u63d0\u4f9b\u4e86\u4e00\u79cd\u4ee5\u5b9a\u65f6\u65b9\u5f0f\u7ed3\u675f\u7b49\u5f85\u7684\u65b9\u6cd5\u3002\u5982\u679c\u7ebf\u7a0b\u5728\u89c4\u5b9a\u65f6\u95f4\u5185\u6ca1\u6709\u83b7\u5f97\u9501\uff0c\u76f4\u63a5\u8fd4\u56de   ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"false"))," \u3002\u800c\u5185\u7f6e\u9501\u4f1a\u4e00\u76f4\u7b49\u5f85\u76f4\u5230\u83b7\u53d6\u5230\u9501\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u663e\u793a\u9501\u53ef\u4e2d\u65ad\uff0c\u63d0\u4f9b\u4e86\u4e00\u79cd ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"RenentrantLock.lockInterruptibly()"))," \u4e2d\u65ad\u7684\u65b9\u5f0f\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u663e\u793a\u9501\u5b9e\u73b0\u4e86\u516c\u5e73\u9501\u548c\u975e\u516c\u5e73\u9501\uff0c\u800c\u5185\u7f6e\u9501\u662f\u975e\u516c\u5e73\u9501\uff0c\u663e\u793a\u9501\u7684\u9009\u62e9\u66f4\u591a\u3002")))),(0,r.kt)("h3",{id:"2-\u5173\u952e\u5b57-synchronized"},"2. \u5173\u952e\u5b57 ",(0,r.kt)("strong",{parentName:"h3"},(0,r.kt)("inlineCode",{parentName:"strong"},"synchronized"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"synchronized"))," \u5173\u952e\u5b57\u63d0\u4f9b\u4e86\u6211\u4eec\u64cd\u4f5c ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Java"))," \u7684\u5185\u7f6e\u9501\u3002"),(0,r.kt)("h4",{id:"21-\u5bf9\u8c61\u9501\u548c\u7c7b\u9501"},"2.1 \u5bf9\u8c61\u9501\u548c\u7c7b\u9501"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u5bf9\u8c61\u9501"),"\uff1a ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"sychronized"))," \u5173\u952e\u5b57\u6dfb\u52a0\u5230\u975e ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"static"))," \u65b9\u6cd5\u4e0a\u6216\u8005 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"synchonized(this){....}"))," \u548c ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"synchonized(\u975ethis\u5bf9\u8c61){....}"))," \u4ee3\u7801\u5feb\u83b7\u53d6\u7684\u5c31\u662f\u5bf9\u8c61\u9501\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u7c7b\u9501"),"\uff1a\u6dfb\u52a0\u5230 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"static"))," \u9759\u6001\u65b9\u6cd5\u4e0a\uff0c\u6216\u8005 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"synchonized(xxxx.class)"))," \u4ee3\u7801\u5757\u3002\u83b7\u53d6\u7684\u90fd\u662f\u7c7b\u9501\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public class SynchronizedLocked {\n\n    //\u5bf9\u8c61\u9501\n    public synchronized void a(){\n\n    }\n\n    public void b(){\n        //\u5bf9\u8c61\u9501\n        synchronized (this){\n\n        }\n    }\n\n    //\u7c7b\u9501\n    public synchronized static void c(){\n\n    }\n\n    public void d(){\n        //\u7c7b\u9501\n        synchronized (SynchronizedLocked.class){\n\n        }\n    }\n\n}\n")),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"\u4e00\u6bb5 ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"synchronized"))," \u7684\u4ee3\u7801\u88ab\u4e00\u4e2a\u7ebf\u7a0b\u6267\u884c\u4e4b\u524d\uff0c\u4ed6\u8981\u5148\u62ff\u5230\u6267\u884c\u8fd9\u6bb5\u4ee3\u7801\u7684\u6743\u9650\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5728Java\u91cc\u8fb9\u5c31\u662f\u62ff\u5230\u67d0\u4e2a\u540c\u6b65\u5bf9\u8c61\u7684\u9501\uff08\u4e00\u4e2a\u5bf9\u8c61\u53ea\u6709\u4e00\u628a\u9501\uff09"),(0,r.kt)("li",{parentName:"ol"},"\u5982\u679c\u8fd9\u4e2a\u65f6\u5019\u540c\u6b65\u5bf9\u8c61\u7684\u9501\u88ab\u5176\u4ed6\u7ebf\u7a0b\u62ff\u8d70\u4e86\uff0c\u4ed6\uff08\u8fd9\u4e2a\u7ebf\u7a0b\uff09\u5c31\u53ea\u80fd\u7b49\u4e86\uff08\u7ebf\u7a0b\u963b\u585e\u5728\u9501\u6c60\u7b49\u5f85\u961f\u5217\u4e2d\uff09"),(0,r.kt)("li",{parentName:"ol"},"\u53d6\u5230\u9501\u540e\uff0c\u4ed6\u5c31\u5f00\u59cb\u6267\u884c\u540c\u6b65\u4ee3\u7801(\u88ab ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"synchronized"))," \u4fee\u9970\u7684\u4ee3\u7801\uff09"),(0,r.kt)("li",{parentName:"ol"},"\u7ebf\u7a0b\u6267\u884c\u5b8c\u540c\u6b65\u4ee3\u7801\u540e\u9a6c\u4e0a\u5c31\u628a\u9501\u8fd8\u7ed9\u540c\u6b65\u5bf9\u8c61\uff0c\u5176\u4ed6\u5728\u9501\u6c60\u4e2d\u7b49\u5f85\u7684\u67d0\u4e2a\u7ebf\u7a0b\u5c31\u53ef\u4ee5\u62ff\u5230\u9501\u6267\u884c\u540c\u6b65\u4ee3\u7801\u4e86"),(0,r.kt)("li",{parentName:"ol"},"\u8fd9\u6837\u5c31\u4fdd\u8bc1\u4e86\u540c\u6b65\u4ee3\u7801\u5728\u7edf\u4e00\u65f6\u523b\u53ea\u6709\u4e00\u4e2a\u7ebf\u7a0b\u5728\u6267\u884c")))),(0,r.kt)("h4",{id:"22-\u4ee3\u7801\u9a8c\u8bc1"},"2.2 \u4ee3\u7801\u9a8c\u8bc1"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"synchronized"))," \u5728\u5bf9\u8c61\u65b9\u6cd5\u4e0a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public class SynchronizedLocked {\n\n    public static void main(String[] args) {\n        HasSelfPrivateNum numRef = new HasSelfPrivateNum();\n\n        ThreadA athread = new ThreadA(numRef);\n        athread.setName("ThreadA");\n        athread.start();\n\n        ThreadB bthread = new ThreadB(numRef);\n        bthread.setName("ThreadB");\n        bthread.start();\n\n    }\n\n}\n\nclass HasSelfPrivateNum{\n\n     public void addI() {\n        try {\n            System.out.println(Thread.currentThread().getName() + " \u8fdb\u5165\u65f6\u95f4 "  + System.currentTimeMillis());\n            Thread.sleep(2000);\n            System.out.println(Thread.currentThread().getName() + " \u51fa\u53bb\u65f6\u95f4 "  + System.currentTimeMillis());\n        } catch (InterruptedException e) {\n            // TODO Auto-generated catch block\n            e.printStackTrace();\n        }\n    }\n}\n\nclass ThreadA extends Thread {\n\n    private HasSelfPrivateNum numRef;\n\n    public ThreadA(HasSelfPrivateNum numRef) {\n        super();\n        this.numRef = numRef;\n    }\n\n    @Override\n    public void run() {\n        numRef.addI();\n    }\n\n}\n\n\n\nclass ThreadB extends Thread {\n\n    private HasSelfPrivateNum numRef;\n\n    public ThreadB(HasSelfPrivateNum numRef) {\n        super();\n        this.numRef = numRef;\n    }\n\n    @Override\n    public void run() {\n        numRef.addI();\n    }\n}\n')),(0,r.kt)("p",null,"\u65b9\u6cd5 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"addI"))," \u6ca1\u6709\u52a0\u9501\u7684\u60c5\u51b5\u4e0b\u6253\u5370\u7ed3\u679c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ThreadA \u8fdb\u5165\u65f6\u95f4 1551161742564\nThreadB \u8fdb\u5165\u65f6\u95f4 1551161742565\nThreadA \u51fa\u53bb\u65f6\u95f4 1551161744565\nThreadB \u51fa\u53bb\u65f6\u95f4 1551161744566\n")),(0,r.kt)("p",null,"\u7ed9 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"HasSelfPrivateNum"))," \u7c7b\u7684 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"addI"))," \u65b9\u6cd5\u52a0\u4e0a ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"synchronized"))," "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'class HasSelfPrivateNum{\n\n     public synchronized void addI() {\n        try {\n            System.out.println(Thread.currentThread().getName() + " \u8fdb\u5165\u65f6\u95f4 "  + System.currentTimeMillis());\n            Thread.sleep(2000);\n            System.out.println(Thread.currentThread().getName() + " \u51fa\u53bb\u65f6\u95f4 "  + System.currentTimeMillis());\n        } catch (InterruptedException e) {\n            // TODO Auto-generated catch block\n            e.printStackTrace();\n        }\n    }\n}\n')),(0,r.kt)("p",null,"\u65b9\u6cd5 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"addI"))," \u6ca1\u6709\u52a0\u9501\u7684\u60c5\u51b5\u4e0b\u6253\u5370\u7ed3\u679c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ThreadA \u8fdb\u5165\u65f6\u95f4 1551162012348\nThreadA \u51fa\u53bb\u65f6\u95f4 1551162014350\nThreadB \u8fdb\u5165\u65f6\u95f4 1551162014350\nThreadB \u51fa\u53bb\u65f6\u95f4 1551162016353\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5b9e\u9a8c\u7ed3\u8bba"),"\uff1a \u4e24\u4e2a\u7ebf\u7a0b\u8bbf\u95ee\u540c\u4e00\u4e2a\u5bf9\u8c61\u4e2d\u7684\u540c\u6b65\u65b9\u6cd5\u662f\u7ebf\u7a0b\u5b89\u5168\u7684\u3002\u4e0a\u9762\u7684\u540c\u6b65\u65b9\u6cd5\u5148\u6253\u5370\u51fa\u4e86 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"ThreadA"))," \u7136\u540e\u6253\u5370\u51fa\u4e86 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"ThreadB"))," \u3002\uff08",(0,r.kt)("strong",{parentName:"p"},"\u6ce8\u610f\u8fd9\u91cc\u662f\u540c\u4e00\u4e2a\u5bf9\u8c61"),"\uff09\uff0c\u90a3\u4e48\u5982\u679c\u662f\u591a\u4e2a\u5bf9\u8c61\u53c8\u4f1a\u600e\u4e48\u6837\u5462\uff1f\u770b\u5982\u4e0b\u4ee3\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'//\u8fd9\u91cc\u4ee3\u7801\u4e0d\u540c\u5728\u4e8e\u7528\u4e86\u4e24\u4e2a\u5bf9\u8c61numRef1 numRef2\npublic class SynchronizedLocked {\n\n    public static void main(String[] args) {\n        HasSelfPrivateNum numRef1 = new HasSelfPrivateNum();\n\n        ThreadA athread = new ThreadA(numRef1);\n        athread.setName("ThreadA");\n        athread.start();\n\n        HasSelfPrivateNum numRef2 = new HasSelfPrivateNum();\n        ThreadB bthread = new ThreadB(numRef2);\n        bthread.setName("ThreadB");\n        bthread.start();\n\n    }\n\n}\n\nclass HasSelfPrivateNum{\n\n     public synchronized void addI() {\n        try {\n            System.out.println(Thread.currentThread().getName() + " \u8fdb\u5165\u65f6\u95f4 "  + System.currentTimeMillis());\n            Thread.sleep(2000);\n            System.out.println(Thread.currentThread().getName() + " \u51fa\u53bb\u65f6\u95f4 "  + System.currentTimeMillis());\n        } catch (InterruptedException e) {\n            // TODO Auto-generated catch block\n            e.printStackTrace();\n        }\n    }\n}\n\nclass ThreadA extends Thread {\n\n    private HasSelfPrivateNum numRef;\n\n    public ThreadA(HasSelfPrivateNum numRef) {\n        super();\n        this.numRef = numRef;\n    }\n\n    @Override\n    public void run() {\n        numRef.addI();\n    }\n\n}\n\n\n\nclass ThreadB extends Thread {\n\n    private HasSelfPrivateNum numRef;\n\n    public ThreadB(HasSelfPrivateNum numRef) {\n        super();\n        this.numRef = numRef;\n    }\n\n    @Override\n    public void run() {\n        numRef.addI();\n    }\n}\n')),(0,r.kt)("p",null,"\u8fd0\u884c\u6253\u5370\u7ed3\u679c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ThreadA \u8fdb\u5165\u65f6\u95f4 1551162422478\nThreadB \u8fdb\u5165\u65f6\u95f4 1551162422479\nThreadA \u51fa\u53bb\u65f6\u95f4 1551162424481\nThreadB \u51fa\u53bb\u65f6\u95f4 1551162424481\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u4ece\u6253\u5370\u7ed3\u679c\u6765\u770b\u8fd9\u91cc\u662f\u975e\u540c\u6b65\u7684\uff0c\u539f\u56e0\u5728\u4e8eThreadA\u83b7\u53d6\u7684numRef1\u5bf9\u8c61\u7684\u5bf9\u8c61\u9501\uff0cThreadB\u83b7\u53d6\u7684\u662fnumRef2\u7684\u5bf9\u8c61\u9501\uff0c\u4ed6\u4eec\u5e76\u6ca1\u6709\u5728\u83b7\u53d6\u9501\u4e0a\u9762\u6709\u7ade\u4e89\u5173\u7cfb\u3002")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"synchronized(this){\u2026} \u4ee3\u7801\u5757")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'class HasSelfPrivateNum{\n\n     public  void addI() {\n         synchronized(this){\n              try {\n            System.out.println(Thread.currentThread().getName() + " \u8fdb\u5165\u65f6\u95f4 "  + System.currentTimeMillis());\n            Thread.sleep(2000);\n            System.out.println(Thread.currentThread().getName() + " \u51fa\u53bb\u65f6\u95f4 "  + System.currentTimeMillis());\n        } catch (InterruptedException e) {\n            // TODO Auto-generated catch block\n            e.printStackTrace();\n        }\n         }\n    }\n}\n')),(0,r.kt)("p",null,"\u4e0b\u9762\u770b\u4e00\u4e0b\u7c7b\u9501\u7684\u60c5\u51b5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public class SynchronizedLocked {\n\n    public static void main(String[] args) {\n        HasSelfPrivateNum numRef1 = new HasSelfPrivateNum();\n\n        ThreadA athread = new ThreadA(numRef1);\n        athread.setName("ThreadA");\n        athread.start();\n\n        HasSelfPrivateNum numRef2 = new HasSelfPrivateNum();\n\n        ThreadB bthread = new ThreadB(numRef2);\n        bthread.setName("ThreadB");\n        bthread.start();\n\n    }\n\n}\n\nclass HasSelfPrivateNum{\n\n     public  void addI() {\n         //\u7c7b\u9501\n         synchronized(SynchronizedLocked.class){\n             try {\n                 System.out.println(Thread.currentThread().getName() + " \u8fdb\u5165\u65f6\u95f4 "  + System.currentTimeMillis());\n                 Thread.sleep(2000);\n                 System.out.println(Thread.currentThread().getName() + " \u51fa\u53bb\u65f6\u95f4 "  + System.currentTimeMillis());\n             } catch (InterruptedException e) {\n                 // TODO Auto-generated catch block\n                 e.printStackTrace();\n             }\n         }\n\n    }\n}\n\nclass ThreadA extends Thread {\n\n    private HasSelfPrivateNum numRef;\n\n    public ThreadA(HasSelfPrivateNum numRef) {\n        super();\n        this.numRef = numRef;\n    }\n\n    @Override\n    public void run() {\n        numRef.addI();\n    }\n\n}\n\n\n\nclass ThreadB extends Thread {\n\n    private HasSelfPrivateNum numRef;\n\n    public ThreadB(HasSelfPrivateNum numRef) {\n        super();\n        this.numRef = numRef;\n    }\n\n    @Override\n    public void run() {\n        numRef.addI();\n    }\n}\n')),(0,r.kt)("p",null,"\u6253\u5370\u7ed3\u679c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ThreadA \u8fdb\u5165\u65f6\u95f4 1551165184568\nThreadA \u51fa\u53bb\u65f6\u95f4 1551165186570\nThreadB \u8fdb\u5165\u65f6\u95f4 1551165186570\nThreadB \u51fa\u53bb\u65f6\u95f4 1551165188571\n")),(0,r.kt)("p",null,"\u4ece\u4e0a\u9762\u53ef\u4ee5\u770b\u51fa\u867d\u7136\u662f\u4e24\u4e2a\u4e0d\u540c\u7684\u5bf9\u8c61\uff0c\u4f46\u662f\u83b7\u53d6\u7684\u5bf9\u8c61\u9501\uff0c\u6240\u4ee5 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"ThreadA"))," \u548c ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"ThreadB"))," \u5b58\u5728\u7ade\u4e89\u7684\u5173\u7cfb\u3002\u5b9e\u73b0\u4e86\u7ebf\u7a0b\u540c\u6b65\u7684\u60c5\u51b5\u3002"),(0,r.kt)("h3",{id:"3-\u53cc\u91cd\u6821\u9a8c\u9501\u5b9e\u73b0\u5bf9\u8c61\u5355\u4f8b\u7ebf\u7a0b\u5b89\u5168"},"3 \u53cc\u91cd\u6821\u9a8c\u9501\u5b9e\u73b0\u5bf9\u8c61\u5355\u4f8b\uff08\u7ebf\u7a0b\u5b89\u5168\uff09"),(0,r.kt)("p",null,"\u8fd9\u4e2a\u5c31\u662f\u4f20\u8bf4\u4e2ddouble-check"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public class LazySingleton {\n\n    private volatile  static  LazySingleton lazySingleton;\n\n    private static final Object LOCK = new Object();\n\n    private LazySingleton(){\n\n    }\n\n    public static LazySingleton doubleCheckedLazySingleton(){\n\n        if(lazySingleton == null){\n            synchronized (LOCK){\n                if(lazySingleton == null){\n                    lazySingleton = new LazySingleton();\n                }\n            }\n        }\n        return lazySingleton;\n    }\n}\n")),(0,r.kt)("h3",{id:"4-\u603b\u7ed3"},"4. \u603b\u7ed3"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"synchronized\u5173\u952e\u5b57\u6700\u4e3b\u8981\u7684\u4e09\u79cd\u4f7f\u7528\u65b9\u5f0f\uff1a")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u4fee\u9970\u5b9e\u4f8b\u65b9\u6cd5\uff0c\u5bf9\u5f53\u524d\u7684\u5bf9\u8c61\u5b9e\u4f8b\u52a0\u9501\uff0c\u8fdb\u5165\u540c\u6b65\u4ee3\u7801\u83b7\u5f97\u5f53\u524d\u7684\u5b9e\u4f8b\u9501"),"\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u4fee\u9970\u9759\u6001\u65b9\u6cd5\uff0c\u5bf9\u5f53\u524d\u7c7b\u52a0\u9501\uff0c\u8fdb\u5165\u540c\u6b65\u4ee3\u7801\u94b1\u8981\u83b7\u5f97\u5f53\u524d\u7c7b\u5bf9\u8c61\u9501"),"\u3002\u4e5f\u5c31\u662f\u7ed9\u5f53\u524d\u7c7b\u52a0\u9501\uff0c\u4e5f\u4f1a\u4f5c\u7528\u4e8e\u6240\u6709\u7684\u5bf9\u8c61\u3002\u9759\u6001\u6210\u5458\u4e0d\u5c5e\u4e8e\u4efb\u4f55\u5bf9\u8c61\u5b9e\u4f8b\u3002 \u56e0\u4e3a\u9759\u6001\u6210\u5458\u4e0d\u5c5e\u4e8e\u4efb\u4f55\u4e00\u4e2a\u5b9e\u4f8b\u5bf9\u8c61\uff0c\u662f\u7c7b\u6210\u5458\uff08 static \u8868\u660e\u8fd9\u662f\u8be5\u7c7b\u7684\u4e00\u4e2a\u9759\u6001\u8d44\u6e90\uff0c\u4e0d\u7ba1new\u4e86\u591a\u5c11\u4e2a\u5bf9\u8c61\uff0c\u53ea\u6709\u4e00\u4efd\uff0c\u6240\u4ee5\u5bf9\u8be5\u7c7b\u7684\u6240\u6709\u5bf9\u8c61\u90fd\u52a0\u4e86\u9501\uff09\u3002\u6240\u4ee5\u5982\u679c\u4e00\u4e2a\u7ebf\u7a0bA\u8c03\u7528\u4e00\u4e2a\u5b9e\u4f8b\u5bf9\u8c61\u7684\u975e\u9759\u6001 synchronized \u65b9\u6cd5\uff0c\u800c\u7ebf\u7a0bB\u9700\u8981\u8c03\u7528\u8fd9\u4e2a\u5b9e\u4f8b\u5bf9\u8c61\u6240\u5c5e\u7c7b\u7684\u9759\u6001 synchronized \u65b9\u6cd5\uff0c\u662f\u5141\u8bb8\u7684\uff0c\u4e0d\u4f1a\u53d1\u751f\u4e92\u65a5\u73b0\u8c61\uff0c",(0,r.kt)("strong",{parentName:"li"},"\u56e0\u4e3a\u8bbf\u95ee\u9759\u6001 synchronized \u65b9\u6cd5\u5360\u7528\u7684\u9501\u662f\u5f53\u524d\u7c7b\u7684\u9501\uff0c\u800c\u8bbf\u95ee\u975e\u9759\u6001 synchronized \u65b9\u6cd5\u5360\u7528\u7684\u9501\u662f\u5f53\u524d\u5b9e\u4f8b\u5bf9\u8c61\u9501")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u4fee\u9970\u4ee3\u7801\u5757\uff0c\u6307\u5b9a\u52a0\u9501\u5bf9\u8c61\uff0c\u5bf9\u7ed9\u5b9a\u5bf9\u8c61\u52a0\u9501\uff0c\u8fdb\u5165\u540c\u6b65\u4ee3\u7801\u770b\u524d\u8981\u83b7\u5f97\u7ed9\u5b9a\u5bf9\u8c61\u7684\u9501\u3002\u8fd9\u91cc\u4fee\u9970\u4ee3\u7801\u5757\u52a0\u9501\u53ef\u4ee5\u7684\u5bf9\u8c61\u53ef\u4ee5\u662f\u7c7b\u4e5f\u53ef\u4ee5\u662f\u5bf9\u8c61\u3002")," ")),(0,r.kt)("h3",{id:"5-synchronized\u4e0ereentrantlock-\u7684\u540c\u548c\u4e0d\u540c"},"5. synchronized\u4e0eReenTrantLock \u7684\u540c\u548c\u4e0d\u540c"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u76f8\u540c\uff1a")),(0,r.kt)("p",null,"\u200b\t\u4e24\u8005\u90fd\u662f\u91cd\u5165\u9501"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u4e0d\u540c\uff1a")," "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"synchronized \u4f9d\u8d56\u4e8e JVM \u800c ReenTrantLock \u4f9d\u8d56\u4e8e API"),"\t"),(0,r.kt)("p",{parentName:"li"},"synchronized \u662f\u4f9d\u8d56\u4e8e JVM \u5b9e\u73b0\u7684\uff0cReentrant \u4f9d\u8d56AQS\u548cCAS\u6765\u8fdb\u884c\u7684\u5b9e\u73b0\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"ReenTrantLock \u6bd4 synchronized \u591a\u4e86\u4e00\u4e9b\u529f\u80fd")," "))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"ReenTrantLock\u63d0\u4f9b\u4e86\u4e00\u79cd\u80fd\u591f\u4e2d\u65ad\u7b49\u5f85\u9501\u7684\u7ebf\u7a0b\u7684\u673a\u5236")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"ReenTrantLock\u53ef\u4ee5\u6307\u5b9a\u662f\u516c\u5e73\u9501\u8fd8\u662f\u975e\u516c\u5e73\u9501\uff0c\u800csynchronized\u53ea\u662f\u975e\u516c\u5e73\u9501")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"ReenTrantLock\u5728\u901a\u77e5\u7ebf\u7a0b\u6bd4synchronized\u66f4\u52a0\u7684\u7075\u6d3b\u3002"))))}m.isMDXComponent=!0}}]);