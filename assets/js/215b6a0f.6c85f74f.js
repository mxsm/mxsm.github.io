"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[8266],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>v});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=c(n),d=a,v=s["".concat(i,".").concat(d)]||s[d]||m[d]||o;return n?r.createElement(v,l(l({ref:t},u),{},{components:n})):r.createElement(v,l({ref:t},u))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[s]="string"==typeof e?e:a,l[1]=p;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},695:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={title:"SpringBoot\u9879\u76ee\u4e2d\u7ebf\u7a0b\u6c60\u5728\u670d\u52a1\u7c7b\u65b9\u6cd5\u4e2d\u521b\u5efa\u540e\u5bfc\u81f4\u7ebf\u7a0b\u6570\u91cf\u66b4\u589e",linkTitle:"SpringBoot\u9879\u76ee\u4e2d\u7ebf\u7a0b\u6c60\u5728\u670d\u52a1\u7c7b\u65b9\u6cd5\u4e2d\u521b\u5efa\u540e\u5bfc\u81f4\u7ebf\u7a0b\u6570\u91cf\u66b4\u589e",date:new Date("2022-03-11T00:00:00.000Z"),weight:202203112125},l=void 0,p={unversionedId:"java/java-se/others/java-threadpool-experience",id:"java/java-se/others/java-threadpool-experience",title:"SpringBoot\u9879\u76ee\u4e2d\u7ebf\u7a0b\u6c60\u5728\u670d\u52a1\u7c7b\u65b9\u6cd5\u4e2d\u521b\u5efa\u540e\u5bfc\u81f4\u7ebf\u7a0b\u6570\u91cf\u66b4\u589e",description:"1.\u80cc\u666f",source:"@site/docs/java/java-se/others/java-threadpool-experience.md",sourceDirName:"java/java-se/others",slug:"/java/java-se/others/java-threadpool-experience",permalink:"/docs/java/java-se/others/java-threadpool-experience",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/java/java-se/others/java-threadpool-experience.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1671958290,formattedLastUpdatedAt:"Dec 25, 2022",frontMatter:{title:"SpringBoot\u9879\u76ee\u4e2d\u7ebf\u7a0b\u6c60\u5728\u670d\u52a1\u7c7b\u65b9\u6cd5\u4e2d\u521b\u5efa\u540e\u5bfc\u81f4\u7ebf\u7a0b\u6570\u91cf\u66b4\u589e",linkTitle:"SpringBoot\u9879\u76ee\u4e2d\u7ebf\u7a0b\u6c60\u5728\u670d\u52a1\u7c7b\u65b9\u6cd5\u4e2d\u521b\u5efa\u540e\u5bfc\u81f4\u7ebf\u7a0b\u6570\u91cf\u66b4\u589e",date:"2022-03-11T00:00:00.000Z",weight:202203112125},sidebar:"javase",previous:{title:"Java\u6e90\u7801\u7b80\u5355\u540a\u70b8\u5929\u7684\u8bbe\u8ba1",permalink:"/docs/java/java-se/others/java-sharp-design"},next:{title:"Spring BeanUtils\u4ece\u7cbe\u901a\u5230\u653e\u5f03\uff0cMapstruct\u4ece\u5165\u95e8\u5230\u7cbe\u901a",permalink:"/docs/java/java-se/others/mapstruct"}},i={},c=[{value:"1.\u80cc\u666f",id:"1\u80cc\u666f",level:3},{value:"2. \u95ee\u9898\u5206\u6790",id:"2-\u95ee\u9898\u5206\u6790",level:3},{value:"3.\u95ee\u9898\u5bfc\u81f4\u7684\u539f\u56e0",id:"3\u95ee\u9898\u5bfc\u81f4\u7684\u539f\u56e0",level:3},{value:"4. \u5f00\u53d1\u4e2d\u5982\u4f55\u907f\u5751",id:"4-\u5f00\u53d1\u4e2d\u5982\u4f55\u907f\u5751",level:3},{value:"5. \u603b\u7ed3",id:"5-\u603b\u7ed3",level:3}],u={toc:c};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"1\u80cc\u666f"},"1.\u80cc\u666f"),(0,a.kt)("p",null,"\u516c\u53f8\u4e0a\u7ebf\u4e86\u4e00\u5957\u5e94\u7528\u7684\u76d1\u63a7\u7cfb\u7edf\uff0c\u80fd\u591f\u68c0\u6d4b\u5e94\u7528\u7684\u4e00\u4e9b\u72b6\u6001\uff0c\u4f8b\u5982\uff1a\u5185\u5b58\u3001\u7ebf\u7a0b\u6570\u7b49\u7b49\uff0c\u5728\u5e94\u7528\u8fd0\u884c\u4e00\u6bb5\u65f6\u95f4\u540e\u6536\u5230\u4e86\u5e94\u7528\u7ebf\u7a0b\u6570\u8fc7\u591a\u7684\u8b66\u544a\u3002\u5f53\u65f6\u5c31\u72af\u8ff7\u7cca\u4e86\u3002\u5e94\u7528\u91cd\u542f\u540e\u53c8\u56de\u590d\u6b63\u5e38\uff0c\u6ca1\u591a\u5c11\u65f6\u95f4\u53c8\u6709\u76f8\u5bf9\u5e94\u7684\u8b66\u62a5\u7ebf\u7a0b\u6570\u8fc7\u591a\u8b66\u544a\u3002\u65f6\u95f4\u95f4\u9694\u4e5f\u6ca1\u592a\u591a\u7684\u89c4\u5f8b\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Tips:\u7ebf\u7a0b\u6570\u91cf\u591a\u4e8e600\u5c31\u4f1a\u62a5\u8b66")),(0,a.kt)("p",null,"\u7136\u540e\u5c31\u662f\u95ee\u9898\u7684\u6392\u67e5\u8fc7\u7a0b\u3002\u8fd0\u884c\u547d\u4ee4"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"jps  -- \u67e5\u627e\u51fa\u5bf9\u5e94\u5e94\u7528\u7684pid\njstack -l <pid> \u5217\u51fa\u5e94\u7528\u4e2d\u7684\u7ebf\u7a0b\u6c60\n")),(0,a.kt)("p",null,"\u901a\u8fc7\u8ba4\u771f\u68c0\u67e5\u7ebf\u7a0b\u53d1\u73b0pool-xxx-thread-xxx\u7684\u7ebf\u7a0b\u6c60\u7684\u7ebf\u7a0b\u3002\u4ece\u8fd9\u91cc\u53ef\u4ee5\u521d\u6b65\u5224\u65ad\u662f\u7ebf\u7a0b\u6c60\u7684\u95ee\u9898\u3002\u901a\u8fc7\u5bf9\u4ee3\u7801\u7684\u6392\u67e5\u53d1\u73b0\u4e86\u5982\u4e0b\u4ee3\u7801\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"@Service\n@Slf4j\npublic class AccountAuthServiceImpl implements AccountAuthService {\n     //\u7701\u7565\u4e86\u90e8\u5206\u4ee3\u7801\n    \n      //\u529f\u80fd\uff1a\u5c06\u4e24\u4e2a\u7cfb\u7edf\u8d26\u53f7\u8fdb\u884c\u7ed1\u5b9a\n      @Override\n      public boolean bindUser(Long hrsAccountId, Long hmcAccountId){\n\n        ExecutorService executorService = Executors.newFixedThreadPool(Runtime.getRuntime().availableProcessors()*2);\n        Future<Boolean> hrsExt = executorService.submit(new Callable<Boolean>() {\n\n            @Override\n            public Boolean call() throws Exception {\n                //\u67e5\u8be2hrsAccountId\u662f\u5426\u5b58\u5728\n                return true;\n            }\n        });\n        Future<Boolean> hmcExt = executorService.submit(new Callable<Boolean>() {\n\n            @Override\n            public Boolean call() throws Exception {\n                //\u67e5\u8be2hmcAccountId\u662f\u5426\u5b58\u5728\n                return true;\n            }\n        });\n        try {\n            return hrsExt.get(3, TimeUnit.SECONDS) & hmcExt.get(3, TimeUnit.SECONDS);\n        } catch (InterruptedException e) {\n            e.printStackTrace();\n        } catch (ExecutionException e) {\n            e.printStackTrace();\n        } catch (TimeoutException e) {\n            e.printStackTrace();\n        }\n        return false;\n    }\n}\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Tips: \u7701\u7565\u4e86\u90e8\u5206\u4ee3\u7801\uff0c\u770b\u4e86\u4e00\u4e0b\u8fd9\u4e2a\u4ee3\u7801\u600e\u4e48\u6709\u70b9\u773c\u719f\u3002\u8fd9\u4e2a\u548c\u6211\u4e4b\u524d\u9047\u5230\u8fc7\u4e00\u4e2a\u95ee\u9898\u5f88\u50cf\uff0c\u6709\u5174\u8da3\u7684\u53ef\u4ee5\u53bb\u770b\u4e00\u4e0b\u8fd9\u4e2a\u7bc7\u6587\u7ae0\uff1a\u300a",(0,a.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7058495829572583461"},"Java\u7ebf\u7a0b\u6c60\u4f7f\u7528\u4e0d\u5f53\u4f1a\u53d1\u751f\u4ec0\u4e48-\u751f\u4ea7\u6848\u4f8b"),"\u300b")),(0,a.kt)("p",null,"\u4e0a\u9762\u670d\u52a1\u7684\u4ee3\u7801\u662f\u5728\u524d\u7aef\u8c03\u7528Controller\u7136\u540eController\u8c03\u7528\u8fd9\u4e2a\u670d\u52a1\u7684\u65b9\u6cd5\u3002\u5230\u8fd9\u91cc\u53ef\u80fd\u5f88\u591a\u4eba\u90fd\u8fd8\u4e0d\u77e5\u9053\u95ee\u9898\u51fa\u5728\u54ea\u91cc\u3002\u4e0b\u9762\u5c31\u6765\u5206\u6790\u4e00\u4e0b\u95ee\u9898\u7684\u6240\u5728\uff0c\u4ee5\u53ca\u5982\u4f55\u907f\u514d\u8fd9\u6837\u7684\u95ee\u9898\u7684\u53d1\u751f\u3002"),(0,a.kt)("h3",{id:"2-\u95ee\u9898\u5206\u6790"},"2. \u95ee\u9898\u5206\u6790"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u95ee\u98981\uff1a\u7ebf\u7a0b\u6c60\u7ebf\u7a0b\u6ca1\u6709\u8bbe\u7f6e\u81ea\u5b9a\u4e49\u540d\u79f0")),(0,a.kt)("p",null,"\u200b     \u521b\u5efa\u7ebf\u7a0b\u6c60\u6ca1\u6709\u81ea\u5b9a\u4e49\u7ebf\u7a0b\u6c60\u7684\u540d\u79f0\uff0c\u6709\u4eba\u4f1a\u8bf4\u4e86\u8fd9\u7b97\u4ec0\u4e48\u95ee\u9898\u3002\u53c8\u4e0d\u5f71\u54cd\u8fd0\u884c(PS:\u8fd9\u79cd\u8bdd\u5fc3\u91cc\u8bf4\u8bf4\u5c31\u597d\u4e86\u5343\u4e07\u522b\u9762\u8bd5\u8bf4)\uff01\u8fd9\u79cd\u8bf4\u6cd5\u4e5f\u6ca1\u6bdb\u75c5\uff0c\u4f46\u662f\u4f60\u53cd\u8fc7\u6765\u4ed4\u7ec6\u60f3\u60f3\u4e3a\u4ec0\u4e48\u8fd8\u8981\u8bbe\u8ba1\u4e00\u4e2a\u80fd\u8ba9\u4f60\u81ea\u5b9a\u4e49\u540d\u79f0\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"ThreadFactory")," \u3002\u524d\u9762\u7684\u95ee\u9898\u6392\u67e5\uff0c\u6253\u5f00\u7ebf\u7a0b\u4fe1\u606f\u653e\u773c\u671b\u53bb\u90fd\u662fpool-xxx-thread-xxx\u8fd9\u79cd\u3002\u7136\u540e\u901a\u8fc7\u731c\u53ef\u80fd\u662f\u7ebf\u7a0b\u6c60\u7684\u95ee\u9898\u3002\u5982\u679c\u4f60\u8bbe\u7f6e\u4e86\u7ebf\u7a0b\u7684\u81ea\u5b9a\u4e49\u540d\u79f0\u4e00\u770b\u5c31\u77e5\u9053\u8fd9\u4e2a\u7ebf\u7a0b\u6c60\u662f\u81ea\u5df1new\u7684\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u95ee\u98982\uff1a\u7ebf\u7a0b\u6c60\u7684\u521b\u5efa\u653e\u5728\u4e86SpringBoot web\u9879\u76ee\u7684Service\u65b9\u6cd5\u91cc\u9762")),(0,a.kt)("p",null,"   \u4ece\u4e0a\u9762\u4ee3\u7801\u6765\u770b\u672c\u610f\u662f\u901a\u8fc7\u7ebf\u7a0b\u6c60\u7684\u65b9\u5f0f\u5e76\u884c\u7684\u53bb\u8bf7\u6c42\u4e24\u4e2a\u670d\u52a1\u7684\u63a5\u53e3\u8fbe\u5230\u63d0\u9ad8\u6548\u7387\u7684\u76ee\u7684\u3002\u540c\u65f6\u8fd8\u9075\u5faa\u4e86\u7f51\u4e0a\u5f88\u591a\u65f6\u5019\u8bf4\u7684\u4ec0\u4e48\u7ebf\u7a0b\u6570\u91cf\u662fCPU\u7684\u4e24\u500d\u3002\u5f88\u591a\u4eba\u80af\u5b9a\u4f1a\u8bf4\u8fd9\u6ca1\u6bdb\u75c5\u5440\uff0c\u65b9\u6cd5\u4e2d\u7ebf\u7a0b\u5b89\u5168\u65b9\u6cd5\u7ed3\u675f\u53d8\u91cf\u88ab\u5783\u573e\u56de\u6536\u5668\u56de\u6536(PS:\u8fd9\u79cd\u8bdd\u5fc3\u91cc\u8bf4\u8bf4\u5c31\u597d\u4e86\u5343\u4e07\u522b\u9762\u8bd5\u8bf4)\u3002\u95ee\u9898\u5c31\u51fa\u5728\u8fd9\u91cc\uff0c\u7ebf\u7a0b\u6c60\u548c\u5176\u4ed6\u7684\u53d8\u91cf\u6709\u4e0d\u4e00\u6837\u3002\u8fd9\u91cc\u521b\u5efa\u7ebf\u7a0b\u6c60\u5c31\u76f8\u5f53\u4e8e\u4f60\u5728\u65b9\u6cd5\u4e2d\u521b\u5efa\u4e86\u4e00\u4e2a\u7ebf\u7a0b\u7136\u540e\u542f\u52a8\uff0c\u5982\u4e0b\u56fe\u4ee3\u7801\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public boolean bindUser(Long hrsAccountId, Long hmcAccountId){\n            new Thread(new Runnable() {\n            @Override\n            public void run() {\n                for (;;){\n                    \n                }\n            }\n        }).start();\n}\n")),(0,a.kt)("p",null,"\u6bcf\u8c03\u7528\u4e00\u6b21\u63a5\u53e3\u90fd\u4f1a\u521b\u5efa\u7c7b\u4f3c\u5982\u4e0a\u56fe\u521b\u5efa\u7ebf\u7a0b\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Tips: \u53c2\u7167\u300a",(0,a.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7059042741509947405"},"\u63ed\u79d8\u4e3a\u4ec0\u4e48\u4e3b\u7ebf\u7a0b\u7ed3\u675f\u4e86Java\u7ebf\u7a0b\u6c60\u8fd8\u5728\u8fd0\u884c"),"\u300b\u8fd9\u7bc7\u6587\u7ae0\uff0c\u8fd9\u91cc\u5bfc\u81f4\u7684\u548c\u8fd9\u4e2a\u63ed\u79d8\u7684\u662f\u4e00\u4e2a\u9053\u7406\u3002")),(0,a.kt)("p",null,"\u6bcf\u8c03\u4e00\u6b21\u63a5\u53e3\u521b\u5efa\u4e00\u4e2a\u7ebf\u7a0b\u6c60\uff0c\u7136\u540e\u521b\u5efa\u4e24\u4e2a\u7ebf\u7a0b\uff0c\u5982\u679c\u6211\u8c03\u75281000\u6b21\u90a3\u5c31\u662f2000\u4e2a\u7ebf\u7a0b\u3002\u5bf9\u4e8e\u4e00\u4e2a\u5bf9\u5916\u66b4\u9732\u7684\u63a5\u53e3\u6765\u8bf4\u4e00\u6b21\u53d1\u7248\u95f4\u9694\u8c03\u7528\u4e0a\u5343\u6b21\u5f88\u6b63\u5e38\u3002\u6240\u4ee5\u8fd9\u4e2a\u968f\u7740\u65f6\u95f4\u7684\u589e\u957f\u548c\u8c03\u7528\u63a5\u53e3\u9891\u6b21\u7684\u589e\u52a0\u4f1a\u5bfc\u81f4\u5e94\u7528\u7684\u7ebf\u7a0b\u6570\u91cf\u6162\u6162\u7684\u589e\u52a0\u3002\u76f4\u5230\u8fbe\u5230\u62a5\u8b66\u7684\u9608\u503c\u3002"),(0,a.kt)("h3",{id:"3\u95ee\u9898\u5bfc\u81f4\u7684\u539f\u56e0"},"3.\u95ee\u9898\u5bfc\u81f4\u7684\u539f\u56e0"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u95ee\u98981\u4e0d\u8bbe\u7f6e\u7ebf\u7a0b\u6c60\u7684\u7ebf\u7a0b\u540d\u79f0\u95ee\u9898\uff0c\u5f88\u591a\u65f6\u5019\u662f\u4e2a\u4eba\u7684\u4e60\u60ef\u95ee\u9898\u4ee5\u53ca\u516c\u53f8\u5e76\u6ca1\u6709\u76f8\u5bf9\u5e94\u7684\u4ee3\u7801\u89c4\u8303\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u95ee\u98982\u7684\u5bfc\u81f4\uff0c\u53ef\u80fd\u662f\u53ea\u77e5\u9053\u7ebf\u7a0b\u6c60\u8bf4\u6709\u4ec0\u4e48\u597d\u5904\uff0c\u4f46\u662f\u5e76\u4e0d\u4e86\u89e3\u7ebf\u7a0b\u6c60\u7684\u751f\u547d\u5468\u671f\uff0c\u4ee5\u53ca\u7ebf\u7a0b\u6c60\u7684\u4e00\u4e9b\u6ce8\u610f\u4e8b\u9879\u3002")),(0,a.kt)("h3",{id:"4-\u5f00\u53d1\u4e2d\u5982\u4f55\u907f\u5751"},"4. \u5f00\u53d1\u4e2d\u5982\u4f55\u907f\u5751"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u95ee\u98981\uff0c\u6211\u4eec\u5f00\u53d1\u8fc7\u7a0b\u4e2d\u5e94\u8be5\u517b\u6210\u4e00\u4e2a\u826f\u597d\u7684\u7f16\u7801\u4e60\u60ef\uff0c\u5373\u4f7f\u516c\u53f8\u6ca1\u6709\u8fd9\u4e9b\u7ebf\u7a0b\u6c60\u76f8\u5173\u7684\u89c4\u5b9a\u3002\u5927\u5bb6\u5e94\u8be5\u4e5f\u9075\u5b88\u3002\u4e0d\u4ec5\u4ec5\u662f\u662f\u7ebf\u7a0b\u6c60\uff0c\u7ebf\u7a0b\u4e5f\u662f\u4e00\u6837\uff0c\u5982\u679c\u51fa\u73b0\u95ee\u9898\u600e\u4e48\u6837\u80fd\u591f\u5f88\u5feb\u7684\u5b9a\u4f4d\u95ee\u9898\u8fd9\u4e2a\u5728\u591a\u7ebf\u7a0b\u4e2d\u5f88\u91cd\u8981\u3002\u5982\u679c\u8bbe\u7f6e\u4e86\u6211\u4eec\u81ea\u5df1\u6240\u719f\u77e5\u7684\u7ebf\u7a0b\u524d\u7f00\u540d\u79f0\uff0c\u5728\u6392\u67e5\u95ee\u9898\u7684\u65f6\u5019\u4e00\u770b\u5230\u51fa\u73b0\u5927\u91cf\u7684\u5f00\u53d1\u8005\u719f\u6089\u7684\u7ebf\u7a0b\u540d\u79f0\u524d\u7f00\u7684\u65f6\u5019\u5c31\u80fd\u60f3\u5230\u548c\u5feb\u901f\u5b9a\u4f4d\u5230\u95ee\u9898\u3002",(0,a.kt)("strong",{parentName:"li"},"\u539f\u5219\uff1a\u7ebf\u7a0b\u6c60\u6216\u8005\u7ebf\u7a0b\u51fa\u73b0\u95ee\u9898\u80fd\u591f\u8ba9\u5f00\u53d1\u8005\u5feb\u901f\u5b9a\u4f4d\u95ee\u9898(\u901a\u8fc7\u7ebf\u7a0b\u540d\u79f0)")),(0,a.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u7b2c\u4e8c\u4e2a\u95ee\u9898\u7275\u6d89\u5230\u4e24\u4e2a\u65b9\u9762\uff1a",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5bf9\u7ebf\u7a0b\u6c60\u673a\u5236\u7684\u4e86\u89e3"),(0,a.kt)("li",{parentName:"ul"},"SpringBoot\u9879\u76ee\u4e2d\u7ebf\u7a0b\u6c60\u7684\u4f7f\u7528")))),(0,a.kt)("p",null,"\u9996\u5148\u8bf4\u4e00\u4e0b\u7ebf\u7a0b\u6c60\u673a\u5236\u4e5f\u5c31\u662fJDK\u7ebf\u7a0b\u7684\u6c60\u5316\u6280\u672f\uff0c\u8fd9\u4e2a\u672c\u610f\u662f\u4e3a\u4e86\u89e3\u51b3\u591a\u7ebf\u7a0b\u8fc7\u7a0b\u4e2d\u53cd\u590d\u521b\u5efa\u7ebf\u7a0b\u548c\u4f7f\u7528\u7ed3\u675f\u540e\u7ebf\u7a0b\u9500\u6bc1\u8fd9\u4e2a\u65f6\u95f4\u7684\u635f\u8017\uff0c\u800c\u5c06\u5df2\u7ecf\u521b\u5efa\u7684\u7ebf\u7a0b\u7ba1\u7406\u8d77\u6765\uff0c\u4e0b\u6b21\u53c8\u4efb\u52a1\u63a5\u7740\u4f7f\u7528\u65e0\u9700\u91cd\u65b0\u521b\u5efa\u7ebf\u7a0b\u3002\u5728\u7ebf\u7a0b\u6c60\u4e2d\u7684\u7ebf\u7a0b\u90fd\u662f\u7528\u6237\u7ebf\u7a0b\u7684\u60c5\u51b5\u4e0b\uff0c\u53ea\u8981JVM\u4e0d\u9000\u51fa\u4ee5\u53ca\u7528\u6237\u4e0d\u4e3b\u52a8\u8c03\u7528\u7ebf\u7a0b\u6c60\u7684shutdown\u65b9\u6cd5\u7ebf\u7a0b\u6c60\u5373\u4f7f\u5728\u4e3b\u7ebf\u7a0b\u7ed3\u675f\u540e\u4e5f\u4e0d\u4f1a\u9500\u6bc1\u7ebf\u7a0b\u6c60\u3002\u6240\u4ee5\u5728\u4f7f\u7528\u8fc7\u7a0b\u4e2d\uff0c\u5982\u679c\u9700\u8981\u7ebf\u7a0b\u6c60\u9694\u79bb\uff0c\u6bcf\u4e00\u7c7b\u7ebf\u7a0b\u6c60\u5e94\u8be5\u5728\u9879\u76ee\u542f\u52a8\u540e\u53ea\u80fd\u88ab\u521b\u5efa\u4e00\u6b21\uff0c\u800c\u4e0d\u662f\u4e0a\u9762\u6240\u793a\u5728\u65b9\u6cd5\u4e2d\u8fdb\u884c\u521b\u5efa\u3002"),(0,a.kt)("p",null,"\u5176\u6b21\u5c31\u662f\u5728Spring Boot\u9879\u76ee\u4e2d\u4f7f\u7528\u7ebf\u7a0b\u6c60\u8fd9\u91cc\u6709\u4e24\u79cd\u60c5\u51b5\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u4f7f\u7528Spring Boot\u7ebf\u7a0b\u6c60\u914d\u7f6e+@Async\u6ce8\u89e3"),(0,a.kt)("li",{parentName:"ol"},"\u5728\u670d\u52a1\u7c7b\u81ea\u5df1\u5b9a\u4e49\u7ebf\u7a0b\u6c60")),(0,a.kt)("p",null,"\u7b2c\u4e00\u79cd\u65b9\u5f0f\u5f88\u591a\u65f6\u5019\u5c31\u662f\u6240\u6709\u7684\u9700\u8981\u6267\u884c\u7684\u4efb\u52a1\u90fd\u4ea4\u7ed9\u4e00\u4e2a\u7ebf\u7a0b\u6c60\u5b8c\u6210\uff0c\u4e0d\u4f1a\u8fdb\u884c\u7ebf\u7a0b\u6c60\u9694\u79bb(\u4e5f\u53ef\u4ee5\u505a\uff0c\u4f46\u662f\u5927\u591a\u6570\u65f6\u5019\u90fd\u6ca1\u505a)\u3002\u7b2c\u4e8c\u79cd\u5c31\u6bd4\u8f83\u81ea\u7531\u4e00\u70b9\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u7b2c\u4e00\u79cd\u65b9\u5f0fSpring Boot\u7ed9\u4f60\u505a\u4e86\u4e00\u4e9b\u907f\u514d\u63aa\u65bd\uff0c\u9632\u6b62\u4e86\u4e0a\u9762\u7684\u95ee\u9898\u53d1\u751f\u3002\u4f46\u662f\u5bf9\u4e8e\u67d0\u4e00\u4e2a\u6280\u672f\u7684\u4f7f\u7528\u5982\u679c\u6ca1\u6709\u628a\u63e1\u6700\u597d\u7684\u65b9\u6cd5\u5c31\u662f\u5199\u4e00\u4e2a\u7b80\u5355\u7684\u4f8b\u5b50\u8dd1\u4e00\u4e0b\u9a8c\u8bc1\u81ea\u5df1\u7684\u7591\u60d1\u548c\u731c\u60f3")),(0,a.kt)("h3",{id:"5-\u603b\u7ed3"},"5. \u603b\u7ed3"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7ebf\u7a0b\u6c60\u548c\u7ebf\u7a0b\u4e00\u5b9a\u8981\u8bbe\u7f6e\u5f00\u53d1\u8005\u719f\u6089\u7684\u540d\u79f0\uff0c\u65b9\u4fbf\u51fa\u73b0\u95ee\u9898\u65f6\u5019\u7684\u6392\u67e5\uff0c\u8fd9\u4e2a\u5728\u5176\u4ed6\u9879\u76ee\u548cJava\u4e2d\u901a\u8fc7\u547d\u4ee4\u90fd\u53ef\u4ee5\u53d1\u73b0\uff0c\u7ebf\u7a0b\u547d\u540d\u662f\u5f88\u91cd\u8981\u7684\u4e00\u4e2a\u6b65\u9aa4\u3002\u867d\u7136Java\u63d0\u4f9b\u4e86\u9ed8\u8ba4\u7684\u540d\u5b57\uff0c\u4f46\u662f\u5728\u6392\u67e5\u95ee\u9898\u4e2d\u81ea\u5b9a\u4e49\u540d\u79f0\u663e\u5f97\u5c24\u4e3a\u91cd\u8981\u3002"),(0,a.kt)("li",{parentName:"ul"},"Spring Boot \u4e2d\u4f7f\u7528\u7ebf\u7a0b\u6c60\u53ef\u4ee5\u4f7f\u7528Spring Boot\u63d0\u4f9b\u7684\u4f7f\u7528\u7ebf\u7a0b\u6c60\u7684\u65b9\u5f0f\uff0c\u5f00\u53d1\u8005\u4e5f\u53ef\u4ee5\u7528\u81ea\u5b9a\u4e49\u7684\u65b9\u5f0f\u3002\u4f46\u662f\u5982\u679c\u9047\u5230\u81ea\u5df1\u4e0d\u786e\u5b9a\u7684\u662f\u5426\u8fd9\u6837\u7684\u4f7f\u7528\u662f\u5426\u6b63\u786e\u6700\u597d\u81ea\u5df1\u901a\u8fc7\u5c0f\u6848\u4f8b\u8fdb\u884c\u9a8c\u8bc1\u3002\u907f\u514d\u4e0a\u8ff0\u6848\u4f8b\u7684\u53d1\u751f\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u4e00\u9879\u6280\u672f\u6211\u4eec\u9700\u8981\u77e5\u5176\u7136\u540c\u6837\u4e5f\u9700\u8981\u77e5\u5176\u6240\u4ee5\u7136")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6211\u662f\u8682\u8681\u80cc\u5927\u8c61\uff0c\u6587\u7ae0\u5bf9\u4f60\u6709\u5e2e\u52a9\u70b9\u8d5e\u5173\u6ce8\u6211\uff0c\u6587\u7ae0\u6709\u4e0d\u6b63\u786e\u7684\u5730\u65b9\u8bf7\u60a8\u65a7\u6b63\u7559\u8a00\u8bc4\u8bba~\u8c22\u8c22")))}s.isMDXComponent=!0}}]);