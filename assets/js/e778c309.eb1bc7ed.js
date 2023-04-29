"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[8847],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>c});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),i=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=i(e.components);return a.createElement(l.Provider,{value:t},e.children)},k="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=m(e,["components","mdxType","originalType","parentName"]),k=i(n),g=r,c=k["".concat(l,".").concat(g)]||k[g]||u[g]||o;return n?a.createElement(c,p(p({ref:t},s),{},{components:n})):a.createElement(c,p({ref:t},s))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,p=new Array(o);p[0]=g;var m={};for(var l in t)hasOwnProperty.call(t,l)&&(m[l]=t[l]);m.originalType=e,m[k]="string"==typeof e?e:r,p[1]=m;for(var i=2;i<o;i++)p[i]=n[i];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},2565:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>u,frontMatter:()=>o,metadata:()=>m,toc:()=>i});var a=n(7462),r=(n(7294),n(3905));const o={title:"JVM\u7684\u5185\u5b58\u6a21\u578b",date:new Date("2018-11-04T00:00:00.000Z")},p=void 0,m={unversionedId:"java/java-se/JVM/jvm-memory-model",id:"java/java-se/JVM/jvm-memory-model",title:"JVM\u7684\u5185\u5b58\u6a21\u578b",description:"1.  JVM\u7684\u5185\u5b58\u6a21\u578b",source:"@site/docs/java/java-se/JVM/jvm-memory-model.md",sourceDirName:"java/java-se/JVM",slug:"/java/java-se/JVM/jvm-memory-model",permalink:"/docs/java/java-se/JVM/jvm-memory-model",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/java/java-se/JVM/jvm-memory-model.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1682735967,formattedLastUpdatedAt:"Apr 29, 2023",frontMatter:{title:"JVM\u7684\u5185\u5b58\u6a21\u578b",date:"2018-11-04T00:00:00.000Z"},sidebar:"javase",previous:{title:"JVM\u5783\u573e\u6536\u96c6\u5668",permalink:"/docs/java/java-se/JVM/jvm-gc"},next:{title:"JVM\u53c2\u6570",permalink:"/docs/java/java-se/JVM/jvm-paramters"}},l={},i=[{value:"1.  JVM\u7684\u5185\u5b58\u6a21\u578b",id:"1--jvm\u7684\u5185\u5b58\u6a21\u578b",level:3},{value:"2 Java Heap \u5185\u5b58\u6a21\u578b\uff08JDK7\uff09",id:"2-java-heap-\u5185\u5b58\u6a21\u578bjdk7",level:3},{value:"2. JVM\u5177\u4f53\u5206\u6790",id:"2-jvm\u5177\u4f53\u5206\u6790",level:3}],s={toc:i},k="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(k,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"1--jvm\u7684\u5185\u5b58\u6a21\u578b"},"1.  JVM\u7684\u5185\u5b58\u6a21\u578b"),(0,r.kt)("p",null,"\u4ece\u7f51\u4e0a\u627e\u4e86\u51e0\u4e2a\u5185\u5b58\u7684\u6a21\u578b\u548c\u81ea\u5df1\u753b\u7684\u4e00\u4e2a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/mxsm/document/blob/master/image/JSE/JVMmodel.png?raw=true",alt:"\u56fe\u7247"})),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/mxsm/document/blob/master/image/JSE/JVM%E5%86%85%E5%AD%98%E6%A8%A1%E5%9E%8B%E5%9B%BE%E8%A7%A3.png?raw=true",alt:"\u56fe\u7247"})),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/mxsm/document/blob/master/image/JSE/%E8%99%9A%E6%8B%9F%E6%9C%BA%E5%86%85%E5%AD%98%E6%A8%A1%E5%9E%8B%E5%9B%BE%E8%A7%A3.png?raw=true",alt:"\u56fe\u7247"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u7ebf\u7a0b\u5171\u4eab\uff1a")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u65b9\u6cd5\u533a\uff1a")," "),(0,r.kt)("p",{parentName:"li"},"\u5728 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Java"))," \u865a\u62df\u673a\u4e2d\uff0c\u65b9\u6cd5\u533a\u662f\u53ef\u4f9b\u5404\u7ebf\u7a0b\u5171\u4eab\u7684\u8fd0\u884c\u65f6\u5185\u5b58\u533a\u57df\u3002\u5728HotSpot\u4e2d\uff0c\u8bbe\u8ba1\u8005\u5c06\u65b9\u6cd5\u533a\u7eb3\u5165GC\u5206\u4ee3\u6536\u96c6\u3002HotSpot\u865a\u62df\u673a\u5806\u5185\u5b58\u88ab\u5206\u4e3a\u65b0\u751f\u4ee3\u548c\u8001\u5e74\u4ee3\uff0c\u5bf9\u5806\u5185\u5b58\u8fdb\u884c\u5206\u4ee3\u7ba1\u7406\uff0c\u6240\u4ee5HotSpot\u865a\u62df\u673a\u4f7f\u7528\u8005\u66f4\u613f\u610f\u5c06\u65b9\u6cd5\u533a\u79f0\u4e3a ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"\u8001\u5e74\u4ee3(\u6216\u8005\u53eb\u6c38\u4e45\u4ee3)"))," \u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u5806\uff1a")),(0,r.kt)("p",{parentName:"li"},"\u5806\u5185\u5b58\u662f ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"JVM"))," \u6240\u6709\u7ebf\u7a0b\u5171\u4eab\u7684\u90e8\u5206\uff0c\u5728\u865a\u62df\u673a\u542f\u52a8\u7684\u65f6\u5019\u5c31\u5df2\u7ecf\u521b\u5efa\u4e86\u3002\u6240\u6709\u7684\u5bf9\u8c61\u548c\u6570\u7ec4\u90fd\u5728\u5806\u4e0a\u8fdb\u884c\u5206\u914d\u3002\u8fd9\u90e8\u5206\u7a7a\u95f4\u53ef\u4ee5\u901a\u8fc7GC\u8fdb\u884c\u5783\u573e\u56de\u6536\u7684\u3002\u5f53\u7533\u8bf7\u4e0d\u5230\u7a7a\u95f4\u65f6\u4f1a\u629b\u51fa ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"OutOfMemoryError"))," \u3002"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u7ebf\u7a0b\u9694\u79bb\uff1a")," "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"PC\u5bc4\u5b58\u5668")),(0,r.kt)("p",{parentName:"li"},"PC\u5bc4\u5b58\u5668\u4e5f\u53eb\u7a0b\u5e8f\u8ba1\u6570\u5668\uff0c\u53ef\u4ee5\u770b\u6210\u5f53\u524d\u7ebf\u7a0b\u6240\u6267\u884c\u7684\u5b57\u8282\u7801\u7684\u884c\u53f7\u6307\u793a\u5668\u3002\u5728\u4efb\u4f55\u4e00\u4e2a\u786e\u5b9a\u7684\u65f6\u523b\uff0c\u4e00\u4e2a\u5904\u7406\u5668\u90fd\u53ea\u4f1a\u6267\u884c\u4e00\u6761\u7ebf\u7a0b\u4e2d\u7684\u6307\u4ee4\u3002\u5e94\u916c\u4e3a\u4e86\u7ebf\u7a0b\u5207\u6362\u80fd\u591f\u6b63\u786e\u7684\u6062\u590d\u5230\u6b63\u786e\u7684\u6267\u884c\u4f4d\u7f6e\u3002\u6bcf\u6761\u7ebf\u7a0b\u90fd\u9700\u8981\u4e00\u4e2a\u72ec\u7acb\u7684\u7a0b\u5e8f\u8ba1\u6570\u5668\uff0cPC\u5bc4\u5b58\u5668\u6240\u4ee5\u662f\u7ebf\u7a0b\u79c1\u6709\u7684\u548c\u7279\u5b9a\u7684\u7ebf\u7a0b\u7ed1\u5b9a\u5728\u4e00\u8d77\u7684\u3002",(0,r.kt)("strong",{parentName:"p"},"\u6267\u884c\u7684\u662fJava\u65b9\u6cd5\u8be5\u5bc4\u5b58\u5668\u4fdd\u5b58\u7684\u662f\u5f53\u524d\u6307\u4ee4\u7684\u5730\u5740\u3002\u5982\u679c\u6267\u884c\u7684\u662f\u672c\u5730\u65b9\u6cd5PC\u5bc4\u5b58\u5668\u5c31\u662f\u7a7a\u7684\u3002 ")," ( ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"\u4e3b\u8981\u7684\u4f5c\u7528\u5c31\u662f\u5b8c\u6210\u7ebf\u7a0b\u7684\u4e0a\u4e0b\u6587\u5207\u6362"))," )")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u672c\u5730\u65b9\u6cd5\u6808")),(0,r.kt)("p",{parentName:"li"},"\u4fdd\u5b58native\u65b9\u6cd5\u8fdb\u5165\u533a\u57df\u7684\u5730\u5740")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u865a\u62df\u673a\u6808")),(0,r.kt)("p",{parentName:"li"},"\u6bcf\u4e00\u4e2a ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Java"))," \u7ebf\u7a0b\u90fd\u6709\u81ea\u5df1\u7684\u865a\u62df\u673a\u6808\uff0c\u8fd9\u4e2a\u6808\u4e0e\u7ebf\u7a0b\u4e00\u8d77\u521b\u5efa\uff0c\u4ed6\u7684\u751f\u547d\u5468\u671f\u548c\u7ebf\u7a0b\u4e00\u6837\u3002\u865a\u62df\u673a\u6808\u63cf\u8ff0\u7684\u662f ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Java \u65b9\u6cd5\u6267\u884c\u7684\u5185\u5b58\u6a21\u578b"))," \uff0c\u6bcf\u4e2a\u65b9\u6cd5\u88ab\u6267\u884c\u7684\u65f6\u5019\u4f1a\u540c\u65f6\u521b\u5efa\u4e00\u4e2a ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"\u6808\u5e27")),"  \u7528\u6765\u5b58\u50a8\u5c40\u90e8\u53d8\u91cf\u8868\uff0c\u64cd\u4f5c\u6570\u6808\uff0c\u52a8\u6001\u94fe\u63a5\uff0c\u65b9\u6cd5\u51fa\u53e3\u4fe1\u606f\u7b49\u3002\u6bcf\u4e2a\u65b9\u6cd5\u88ab\u8c03\u7528\u76f4\u5230\u6267\u884c\u5b8c\u6210\u7684\u6574\u4e2a\u8fc7\u7a0b\u5c31\u5bf9\u5e94\u865a\u62df\u673a\u6808\u521b\u5efa\u7684\u4e00\u4e2a\u7ebf\u7a0b\u7684\u6808\u5e27\uff0c\u5305\u542b\u4e86\u51fa\u6808\u548c\u5165\u6808\u7684\u8fc7\u7a0b\u3002"))),(0,r.kt)("h3",{id:"2-java-heap-\u5185\u5b58\u6a21\u578bjdk7"},"2 Java Heap \u5185\u5b58\u6a21\u578b\uff08JDK7\uff09"),(0,r.kt)("p",null,"\u5728Java\u4e2d  ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"\u65b9\u6cd5\u533a"))," \u548c ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Heap(\u5806)"))," \u5e94\u8be5\u90fd\u5c5e\u4e8e\u5806\u7684\u8303\u7574\uff0c\u4f46\u662f\u53ea\u662f\u4e0d\u540c\u7684Java\u865a\u62df\u673a\u7684\u5b9e\u73b0\u5bf9\u6b64\u8fdb\u884c\u4e86\u533a\u5206\u800c\u5df2\u3002"),(0,r.kt)("p",null,"\u5f53\u4ee3\u4e3b\u6d41\u865a\u62df\u673a\uff08 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Hotspot VM"))," \uff09\u7684\u5783\u573e\u56de\u6536\u90fd\u91c7\u7528\u201c\u5206\u4ee3\u56de\u6536\u201d\u7684\u7b97\u6cd5\u3002\u201c\u5206\u4ee3\u56de\u6536\u201d\u662f\u57fa\u4e8e\u8fd9\u6837\u4e00\u4e2a\u4e8b\u5b9e\uff1a",(0,r.kt)("strong",{parentName:"p"},"\u5bf9\u8c61\u7684\u751f\u547d\u5468\u671f\u4e0d\u540c\uff0c\u6240\u4ee5\u9488\u5bf9\u4e0d\u540c\u751f\u547d\u5468\u671f\u7684\u5bf9\u8c61\u53ef\u4ee5\u91c7\u53d6\u4e0d\u540c\u7684\u56de\u6536\u65b9\u5f0f\uff0c\u4ee5\u4fbf\u63d0\u9ad8\u56de\u6536\u6548\u7387\u3002")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Hotspot VM"))," \u5c06\u5185\u5b58\u5212\u5206\u4e3a\u4e0d\u540c\u7684\u7269\u7406\u533a\uff0c\u5c31\u662f\u201c\u5206\u4ee3\u201d\u601d\u60f3\u7684\u4f53\u73b0\u3002\u5982\u56fe\u6240\u793a\uff0cJVM\u5185\u5b58\u4e3b\u8981\u7531 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"\u65b0\u751f\u4ee3"))," \uff0c ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"\u8001\u5e74\u4ee3"))," \u3001 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"\u6c38\u4e45\u4ee3\u6784\u6210"))," \u3002\u800c ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"\u65b0\u751f\u4ee3"))," \u548c ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"\u8001\u5e74\u4ee3"))," \u6784\u6210\u4e0a\u9762\u7684JVM\u5185\u5b58\u6a21\u578b\u4e2d\u8bf4\u7684 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"\u5806"))," \uff0c \u800c ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"\u6c38\u4e45\u4ee3"))," \u6784\u6210\u4e86 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"\u65b9\u6cd5\u533a"))," "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/mxsm/document/blob/master/image/JSE/JVM%E5%A0%86%E5%92%8C%E6%96%B9%E6%B3%95%E5%8C%BA%E7%9A%84%E5%86%85%E5%AD%98%E6%A8%A1%E5%9E%8B.png?raw=true",alt:"\u56fe\u89e3"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u65b0\u751f\u4ee3(Young Generation):")," \u5927\u591a\u6570\u5bf9\u8c61\u5728\u65b0\u751f\u4ee3\u4e2d\u88ab\u521b\u5efa\uff0c\u5176\u4e2d\u5f88\u591a\u5bf9\u8c61\u7684\u751f\u547d\u5468\u671f\u5f88\u77ed\u3002\u6bcf\u6b21\u65b0\u751f\u4ee3\u7684\u5783\u573e\u56de\u6536\uff08\u53c8\u79f0 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Minor GC"))," \uff09\u540e\u53ea\u6709\u5c11\u91cf\u5bf9\u8c61\u5b58\u6d3b\uff0c\u6240\u4ee5\u9009\u7528 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"\u590d\u5236\u7b97\u6cd5"))," \uff0c\u53ea\u9700\u8981\u5c11\u91cf\u7684\u590d\u5236\u6210\u672c\u5c31\u53ef\u4ee5\u5b8c\u6210\u56de\u6536\u3002"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Eden\u533a\uff1a")," \u5927\u90e8\u5206\u5bf9\u8c61\u5728Eden\u533a\u4e2d\u751f\u6210\u3002\u5f53 ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"Eden\u533a"))," \u6ee1\u65f6\uff0c\u8fd8\u5b58\u6d3b\u7684\u5bf9\u8c61\u5c06\u88ab\u590d\u5236\u5230 ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"Survivor\u533a(S0)"))," \u3002(PS:\u7a0b\u5e8f\u7684\u8bbe\u8ba1\u8005\u771f\u7684\u662f\u5389\u5bb3\u547d\u540d\u90fd\u662f\u7ed3\u5408\u795e\u8bdd\u6545\u4e8b\u7136\u540e\u53c8\u80fd\u751f\u52a8\u53cd\u6620\u5b9e\u9645\u60c5\u51b5\u3002\u8036\u548c\u534e\u4e0a\u5e1d\u7167\u81ea\u5df1\u7684\u5f62\u50cf\u9020\u4e86\u4eba\u7c7b\u7684\u8893\u5148\uff0c\u7537\u7684\u79f0\u4e9a\u5f53\uff0c\u5973\u7684\u79f0\u590f\u5a03\uff0c\u5b89\u7f6e\u7b2c\u4e00\u5bf9\u7537\u5973\u4f4f\u5728\u4f0a\u7538\u56ed\u4e2d\u3002\u4f0a\u7538\u56ed\u5728\u5723\u7ecf\u7684\u539f\u6587\u4e2d\u542b\u6709\u5feb\u4e50\uff0c\u6109\u5feb\u7684\u56ed\u5b50\u7684\u610f\u601d.\u53ea\u6709\u4f69\u670d\u4e24\u4e2a\u5b57)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"S0\u533a:")," S0\u533a\u5b58\u653eEden\u533aGC\u5269\u4e0b\u7684\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"S1\u533a:")," S1\u533a\u5b58\u653eS0\u533aGC\u5269\u4e0b\u7684\u3002")),(0,r.kt)("p",{parentName:"li"},"\u5f53Eden\u533a\u6ee1\u65f6\uff0c\u8fd8\u5b58\u6d3b\u7684\u5bf9\u8c61\u5c06\u88ab\u590d\u5236\u5230\u4e24\u4e2aSurvivor\u533a\uff08\u4e2d\u7684\u4e00\u4e2a\uff09\u3002\u5f53\u8fd9\u4e2aSurvivor\u533a\u6ee1\u65f6\uff0c\u6b64\u533a\u7684\u5b58\u6d3b\u4e14\u4e0d\u6ee1\u8db3\u201c\u664b\u5347\u201d\u6761\u4ef6\u7684\u5bf9\u8c61\u5c06\u88ab\u590d\u5236\u5230\u53e6\u5916\u4e00\u4e2aSurvivor\u533a\u3002\u5bf9\u8c61\u6bcf\u7ecf\u5386\u4e00\u6b21Minor GC\uff0c\u5e74\u9f84\u52a01\uff0c\u8fbe\u5230\u201c\u664b\u5347\u5e74\u9f84\u9608\u503c\u201d\u540e\uff0c\u88ab\u653e\u5230\u8001\u5e74\u4ee3\uff0c\u8fd9\u4e2a\u8fc7\u7a0b\u4e5f\u79f0\u4e3a\u201c\u664b\u5347\u201d\u3002\u663e\u7136\uff0c\u201c\u664b\u5347\u5e74\u9f84\u9608\u503c\u201d\u7684\u5927\u5c0f\u76f4\u63a5\u5f71\u54cd\u7740\u5bf9\u8c61\u5728\u65b0\u751f\u4ee3\u4e2d\u7684\u505c\u7559\u65f6\u95f4\uff0c\u5728Serial\u548cParNew GC\u4e24\u79cd\u56de\u6536\u5668\u4e2d\uff0c\u201c\u664b\u5347\u5e74\u9f84\u9608\u503c\u201d\u901a\u8fc7\u53c2\u6570MaxTenuringThreshold\u8bbe\u5b9a\uff0c\u9ed8\u8ba4\u503c\u4e3a15\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u8001\u5e74\u4ee3\uff08Old Generation\uff09")," \uff1a\u5728\u65b0\u751f\u4ee3\u4e2d\u7ecf\u5386\u4e86N\u6b21\u5783\u573e\u56de\u6536\u540e\u4ecd\u7136\u5b58\u6d3b\u7684\u5bf9\u8c61\uff0c\u5c31\u4f1a\u88ab\u653e\u5230\u5e74\u8001\u4ee3\uff0c\u8be5\u533a\u57df\u4e2d\u5bf9\u8c61\u5b58\u6d3b\u7387\u9ad8\u3002\u8001\u5e74\u4ee3\u7684\u5783\u573e\u56de\u6536\uff08\u53c8\u79f0Major GC\uff09\u901a\u5e38\u4f7f\u7528\u201c ",(0,r.kt)("strong",{parentName:"p"},"\u6807\u8bb0-\u6e05\u7406")," \u201d\u6216\u201c ",(0,r.kt)("strong",{parentName:"p"},"\u6807\u8bb0-\u6574\u7406")," \u201d\u7b97\u6cd5\u3002",(0,r.kt)("strong",{parentName:"p"},"\u6574\u5806\u5305\u62ec\u65b0\u751f\u4ee3\u548c\u8001\u5e74\u4ee3\u7684\u5783\u573e\u56de\u6536\u79f0\u4e3aFull GC"),"\uff08HotSpot VM\u91cc\uff0c\u9664\u4e86CMS\u4e4b\u5916\uff0c",(0,r.kt)("strong",{parentName:"p"},"\u5176\u5b83\u80fd\u6536\u96c6\u8001\u5e74\u4ee3\u7684GC\u90fd\u4f1a\u540c\u65f6\u6536\u96c6\u6574\u4e2aGC\u5806\uff0c\u5305\u62ec\u65b0\u751f\u4ee3"),"\uff09\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u6c38\u4e45\u4ee3\uff08Perm Generation\uff09\uff1a")," \u4e3b\u8981\u5b58\u653e\u5143\u6570\u636e\uff0c\u4f8b\u5982Class\u3001Method\u7684\u5143\u4fe1\u606f\uff0c\u4e0e\u5783\u573e\u56de\u6536\u8981\u56de\u6536\u7684Java\u5bf9\u8c61\u5173\u7cfb\u4e0d\u5927\u3002\u76f8\u5bf9\u4e8e\u65b0\u751f\u4ee3\u548c\u5e74\u8001\u4ee3\u6765\u8bf4\uff0c\u8be5\u533a\u57df\u7684\u5212\u5206\u5bf9\u5783\u573e\u56de\u6536\u5f71\u54cd\u6bd4\u8f83\u5c0f\u3002"),(0,r.kt)("p",{parentName:"li"},"JDK8\u7528 ",(0,r.kt)("strong",{parentName:"p"},"MetaSpace")," \u4ee3\u66ff\u4e86 ",(0,r.kt)("strong",{parentName:"p"},"\u6c38\u4e45\u4ee3")))),(0,r.kt)("h3",{id:"2-jvm\u5177\u4f53\u5206\u6790"},"2. JVM\u5177\u4f53\u5206\u6790"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/mxsm/document/blob/master/image/JSE/JVM.png?raw=true",alt:null})),(0,r.kt)("p",null,"\u901a\u8fc7\u5b57\u8282\u7801\u6765\u5206\u6790\u6808\u5e27\uff0c\u9996\u5148\u770b\u4e00\u4e0b\u6e90\u7801\u521b\u5efa"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/mxsm/document/blob/master/image/JSE/bytes.gif?raw=true",alt:null})),(0,r.kt)("p",null,"\u8fd9\u91cc\u6f14\u793a\u4e86\u5982\u4f55\u83b7\u53d6\u5b57\u8282\u7801\u7684\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'Compiled from "Math.java"\npublic class com.github.mxsm.Math {\n  public static final int CONST;\n\n  public com.github.mxsm.Math();\n    Code:\n       0: aload_0\n       1: invokespecial #1                  // Method java/lang/Object."<init>":()V\n       4: return\n\n  public int compute();\n    Code:\n       0: iconst_1\n       1: istore_1\n       2: iconst_2\n       3: istore_2\n       4: iload_1\n       5: iload_2\n       6: iadd\n       7: bipush        10\n       9: imul\n      10: istore_3\n      11: iload_3\n      12: ireturn\n\n  public static void main(java.lang.String[]);\n    Code:\n       0: new           #2                  // class com/github/mxsm/Math\n       3: dup\n       4: invokespecial #3                  // Method "<init>":()V\n       7: astore_1\n       8: aload_1\n       9: invokevirtual #4                  // Method compute:()I\n      12: pop\n      13: return\n}\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u547d\u4ee4\u5bf9\u7167\u8868\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://xfl03.gitee.io/coremodtutor/%E9%99%84%E5%BD%95B.html"},"https://xfl03.gitee.io/coremodtutor/%E9%99%84%E5%BD%95B.html"))))}u.isMDXComponent=!0}}]);