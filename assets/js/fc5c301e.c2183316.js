"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[8099],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>k});var a=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,l=function(e,t){if(null==e)return{};var r,a,l={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var i=a.createContext({}),s=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},v=a.forwardRef((function(e,t){var r=e.components,l=e.mdxType,n=e.originalType,i=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=s(r),v=l,k=c["".concat(i,".").concat(v)]||c[v]||u[v]||n;return r?a.createElement(k,o(o({ref:t},m),{},{components:r})):a.createElement(k,o({ref:t},m))}));function k(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=r.length,o=new Array(n);o[0]=v;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[c]="string"==typeof e?e:l,o[1]=p;for(var s=2;s<n;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}v.displayName="MDXCreateElement"},4195:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>c,frontMatter:()=>n,metadata:()=>p,toc:()=>s});var a=r(7462),l=(r(7294),r(3905));const n={title:"Servlet\u5f02\u6b65\u8bf7\u6c42\u5982\u4f55\u5f00\u542f",date:new Date("2021-03-16T00:00:00.000Z"),weight:2},o=void 0,p={unversionedId:"java/java-web/servlet/servlet3-async",id:"java/java-web/servlet/servlet3-async",title:"Servlet\u5f02\u6b65\u8bf7\u6c42\u5982\u4f55\u5f00\u542f",description:"1. \u80cc\u666f",source:"@site/docs/java/java-web/servlet/servlet3-async.md",sourceDirName:"java/java-web/servlet",slug:"/java/java-web/servlet/servlet3-async",permalink:"/docs/java/java-web/servlet/servlet3-async",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/java/java-web/servlet/servlet3-async.md",tags:[],version:"current",lastUpdatedBy:"SpaceOneT",lastUpdatedAt:1674220028,formattedLastUpdatedAt:"Jan 20, 2023",frontMatter:{title:"Servlet\u5f02\u6b65\u8bf7\u6c42\u5982\u4f55\u5f00\u542f",date:"2021-03-16T00:00:00.000Z",weight:2},sidebar:"javaweb",previous:{title:"Servlet\u5f02\u6b65\u5e94\u7528\u957f\u8f6e\u8be2\u5b9e\u73b0",permalink:"/docs/java/java-web/servlet/long-polling"}},i={},s=[{value:"1. \u80cc\u666f",id:"1-\u80cc\u666f",level:3},{value:"2. Servlet\u540c\u6b65\u8bf7\u6c42",id:"2-servlet\u540c\u6b65\u8bf7\u6c42",level:3},{value:"3. Servlet\u5f02\u6b65\u8bf7\u6c42",id:"3-servlet\u5f02\u6b65\u8bf7\u6c42",level:3},{value:"4. \u5f02\u6b65Servlet\u4f7f\u7528\u65b9\u6cd5",id:"4-\u5f02\u6b65servlet\u4f7f\u7528\u65b9\u6cd5",level:3},{value:"5. Spring\u4e2d\u7684\u5b9e\u73b0\u4f8b\u5b50",id:"5-spring\u4e2d\u7684\u5b9e\u73b0\u4f8b\u5b50",level:3}],m={toc:s};function c(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"1-\u80cc\u666f"},"1. \u80cc\u666f"),(0,l.kt)("p",null,"\u5728\u7814\u7a76\u957f\u8f6e\u8be2\u7684\u5b9e\u73b0\u8fc7\u7a0b\uff0c\u6709\u4f7f\u7528\u5230Servlet3\u7684\u5f02\u6b65\u8bf7\u6c42\u3002\u4e0b\u9762\u5c31\u6765\u5b66\u4e60\u4e00\u4e0bServlet3\u7684\u5f02\u6b65\u8bf7\u6c42"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u73b0\u5728Servlet\u7684\u7248\u672c\u5df2\u7ecf\u5230\u4e865")),(0,l.kt)("h3",{id:"2-servlet\u540c\u6b65\u8bf7\u6c42"},"2. Servlet\u540c\u6b65\u8bf7\u6c42"),(0,l.kt)("p",null,"\u4ee5Tomcat\u670d\u52a1\u5668\u4e3a\u4f8b\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Http\u8bf7\u6c42\u5230\u8fbeTomcat"),(0,l.kt)("li",{parentName:"ul"},"Tomcat\u4ece\u7ebf\u7a0b\u6c60\u4e2d\u53d6\u51fa\u7ebf\u7a0b\u5904\u7406\u5230\u8fbeTomcat\u7684\u8bf7\u6c42"),(0,l.kt)("li",{parentName:"ul"},"\u5c06\u8bf7\u6c42Http\u89e3\u6790\u4e3aHttpServletRequest"),(0,l.kt)("li",{parentName:"ul"},"\u5206\u53d1\u5230\u5177\u4f53Servlet\u5904\u7406\u5bf9\u5e94\u7684\u4e1a\u52a1"),(0,l.kt)("li",{parentName:"ul"},"\u901a\u8fc7HttpServletResponse\u8fd4\u56de\u5904\u7406\u7684\u6570\u636e")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://github.com/mxsm/picture/blob/main/javaweb/Servlet%E5%90%8C%E6%AD%A5%E8%AF%B7%E6%B1%82%E7%A4%BA%E6%84%8F%E5%9B%BE.png?raw=true",alt:"image"}),(0,l.kt)("br",{parentName:"p"}),"\n","\u6b63\u5e38\u60c5\u51b5\u4e0b\u8bf7\u6c42\u6a21\u578b\u548c\u4e0a\u9762\u7684\u6a21\u578b\u4e00\u6837\uff0c\u6240\u6709\u7684\u8bf7\u6c42\u4ea4\u7ed9Tomcat\u670d\u52a1\u5668\u7684\u7ebf\u7a0b\u6c60\u5904\u7406\uff0c\u6574\u4e2a\u52a8\u4f5c\u5904\u7406\u5b8c\u6210\u624d\u91ca\u653e\u56de\u7ebf\u7a0b\u6c60\u3002",(0,l.kt)("br",{parentName:"p"}),"\n","\u8fd9\u91cc\u5c31\u5b58\u5728\u4e86\u4e00\u4e2a\u95ee\u9898\u5982\u679c\u540e\u671f\u7684\u4e1a\u52a1\u5904\u7406\u65f6\u95f4\u6bd4\u8f83\u957f\u3002\u90a3\u4e48\u5904\u7406\u8bf7\u6c42\u7684\u7ebf\u7a0b\u5c31\u4f1a\u88ab\u4e00\u76f4\u5360\u7528\u3002\u5f53\u8bf7\u6c42\u8d8a\u6765\u8d8a\u591a\u88ab\u5360\u7528\u7684\u7ebf\u7a0b\u4e5f\u4f1a\u8d8a\u6765\u8d8a\u591a\u3002\u76f4\u5230\u88ab\u8017\u5c3d\u7ebf\u7a0b\u6c60\u4e2d\u6240\u6709\u7684\u7ebf\u7a0b\u3002\u540e\u7eed\u8fdb\u6765\u7684\u5c31\u4e00\u76f4\u88ab\u963b\u585e\u7b49\u5f85\u7ebf\u7a0b\u6765\u5904\u7406\u3002  "),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5f53\u7528\u6237\u4e0d\u5173\u5fc3\u63d0\u4ea4\u7684\u8fd4\u56de\u53ef\u4ee5\u5b9a\u4e49\u4e1a\u52a1\u5904\u7406\u7ebf\u7a0b\u6c60\uff0c\u524d\u7aef\u8bf7\u6c42\u63d0\u4ea4\u540e\uff0cTomcat\u7ebf\u7a0b\u5c06\u5904\u7406\u63d0\u4ea4\u7ed9\u4e1a\u52a1\u7ebf\u7a0b\u6c60\u7acb\u5373\u8fd4\u56de\u3002Spring \u4e2d\u7684\u5f02\u6b65\u4efb\u52a1(@Async)\u5c31\u662f\u8fd9\u6837\u7684\u3002  ")),(0,l.kt)("h3",{id:"3-servlet\u5f02\u6b65\u8bf7\u6c42"},"3. Servlet\u5f02\u6b65\u8bf7\u6c42"),(0,l.kt)("p",null,"\u540c\u6837\u4ee5Tomcat\u670d\u52a1\u4e3a\u4f8b\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5c06\u8bf7\u6c42Http\u89e3\u6790\u4e3aHttpServletRequest"),(0,l.kt)("li",{parentName:"ul"},"\u5206\u53d1\u5230\u5177\u4f53Servlet\u5904\u7406\uff0c\u5c06\u4e1a\u52a1\u63d0\u4ea4\u7ed9\u81ea\u5b9a\u4e49\u4e1a\u52a1\u7ebf\u7a0b\u6c60\uff0cTomcat\u7ebf\u7a0b\u7acb\u523b\u88ab\u91ca\u653e\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5f53\u4e1a\u52a1\u7ebf\u7a0b\u5c06\u4efb\u52a1\u6267\u884c\u7ed3\u675f\uff0c\u5c06\u4f1a\u5c06\u7ed3\u679c\u8f6c\u4ea4\u7ed9Tomcat\u7ebf\u7a0b\u6c60\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u901a\u8fc7HttpServletResponse\u8fd4\u56de\u5904\u7406\u7684\u6570\u636e")),(0,l.kt)("p",null,"\u5f15\u5165\u5f02\u6b65Servlet3\u6574\u4f53\u6d41\u7a0b\uff1a",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("img",{parentName:"p",src:"https://github.com/mxsm/picture/blob/main/javaweb/%E5%BC%82%E6%AD%A5Servlet3%E6%95%B4%E4%BD%93%E6%B5%81%E7%A8%8B.png?raw=true",alt:"image"}),"  "),(0,l.kt)("p",null,"\u4f7f\u7528\u5f02\u6b65 Servelt\uff0cTomcat \u7ebf\u7a0b\u4ec5\u4ec5\u5904\u7406\u8bf7\u6c42\u89e3\u6790\u52a8\u4f5c\uff0c\u6240\u6709\u8017\u65f6\u8f83\u957f\u7684\u4e1a\u52a1\u64cd\u4f5c\u5168\u90e8\u4ea4\u7ed9\u4e1a\u52a1\u7ebf\u7a0b\u6c60\uff0c\u6240\u4ee5\u76f8\u6bd4\u540c\u6b65\u8bf7\u6c42\uff0c Tomcat \u7ebf\u7a0b\u53ef\u4ee5\u5904\u7406 \u66f4\u591a\u8bf7\u6c42\u3002\u867d\u7136\u5c06\u4e1a\u52a1\u4ea4\u7ed9\u4e86\u4e1a\u52a1\u6d41\u7a0b\u5904\u7406\uff0c\u4f46\u662f\u524d\u7aef\u8fd8\u5728\u7b49\u5f85\u7ed3\u679c\u8fd4\u56de(\u540c\u6b65\u7b49\u5f85\u8fd4\u56de)\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5f02\u6b65\u5904\u7406\uff0c\u524d\u7aef\u4f1a\u540c\u6b65\u7b49\u5f85\u7ed3\u679c\u8fd4\u56de\u3002\u5f88\u591a\u4eba\u4f1a\u89c9\u5f97\u5f02\u6b65\u8bf7\u6c42\u4f1a\u8fd4\u56de\u66f4\u5feb\u3002\u5176\u5b9e\u4e0d\u7136\u7531\u4e8e\u5f02\u6b65\u5b58\u5728\u7ebf\u7a0b\u7684\u5207\u6362\u3002\u6240\u6709\u8fd4\u56de\u65f6\u95f4\u4f1a\u6bd4\u540c\u6b65\u7684\u6162\u3002")),(0,l.kt)("p",null,"\u867d\u7136\u6ca1\u6709\u964d\u4f4e\u76f8\u5e94\u65f6\u95f4\u4f46\u662f\u8fd8\u662f\u6709\u5176\u4ed6\u660e\u663e\u7684\u4f18\u70b9:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u5904\u7406\u66f4\u9ad8\u5e76\u53d1\u8fde\u63a5\u6570\uff0c\u63d0\u9ad8\u7cfb\u7edf\u6574\u4f53\u541e\u5410\u91cf"),(0,l.kt)("li",{parentName:"ul"},"\u8bf7\u6c42\u89e3\u6790\u4e0e\u4e1a\u52a1\u5904\u7406\u5b8c\u5168\u5206\u79bb\uff0c\u804c\u8d23\u5355\u4e00"),(0,l.kt)("li",{parentName:"ul"},"\u81ea\u5b9a\u4e49\u4e1a\u52a1\u7ebf\u7a0b\u6c60\uff0c\u6211\u4eec\u53ef\u4ee5\u66f4\u5bb9\u6613\u5bf9\u5176\u76d1\u63a7\uff0c\u964d\u7ea7\u7b49\u5904\u7406"),(0,l.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u6839\u636e\u4e0d\u540c\u4e1a\u52a1\uff0c\u81ea\u5b9a\u4e49\u4e0d\u540c\u7ebf\u7a0b\u6c60\uff0c\u76f8\u4e92\u9694\u79bb\uff0c\u4e0d\u7528\u4e92\u76f8\u5f71\u54cd")),(0,l.kt)("h3",{id:"4-\u5f02\u6b65servlet\u4f7f\u7528\u65b9\u6cd5"},"4. \u5f02\u6b65Servlet\u4f7f\u7528\u65b9\u6cd5"),(0,l.kt)("p",null,"\u4f7f\u7528\u5f02\u6b65Servlet\u53ea\u9700\u8981\u4e09\u6b65\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("em",{parentName:"strong"},"HttpServletRequest#startAsync()"))," \u83b7\u53d6 ",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("em",{parentName:"strong"},"AsyncContext"))," \u5f02\u6b65\u4e0a\u4e0b\u6587"),(0,l.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u81ea\u5b9a\u4e49\u4e1a\u52a1\u7ebf\u7a0b\u6c60\u5904\u7406\u4e1a\u52a1"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("em",{parentName:"strong"},"AsyncContext#getResponse()"))," \u8fd4\u56de\u5904\u7406\u7ed3\u679c\u7ed9\u524d\u7aef\uff0c\u7136\u540e\u8c03\u7528 ",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("em",{parentName:"strong"},"AsyncContext#complete()"))," ")),(0,l.kt)("h3",{id:"5-spring\u4e2d\u7684\u5b9e\u73b0\u4f8b\u5b50"},"5. Spring\u4e2d\u7684\u5b9e\u73b0\u4f8b\u5b50"),(0,l.kt)("p",null,"\u4ee3\u7801\u5982\u4e0b\u56fe\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://github.com/mxsm/picture/blob/main/javaweb/servlet%E5%BC%82%E6%AD%A5%E4%BB%A3%E7%A0%81%E5%9B%BE%E7%89%87.png?raw=true",alt:"\u56fe"})),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5f00\u542f\u5f02\u6b65Servlet"),(0,l.kt)("li",{parentName:"ol"},"\u6a21\u62df\u4e1a\u52a1\u6267\u884c"),(0,l.kt)("li",{parentName:"ol"},"\u8fd4\u56de\u7ed3\u679c\u7ed9\u524d\u7aef")),(0,l.kt)("p",null,"\u524d\u9762\u6709\u8bf4\u8fc7\u524d\u7aef\u662f\u4e00\u76f4\u5728\u540c\u6b65\u7b49\u5f85\u7684\u6211\u4eec\u901a\u8fc7\u8fd0\u884c\u4ee3\u7801\u6765\u9a8c\u8bc1\u4e00\u4e0b\u3002\u7ed3\u679c\u5982\u4e0b\u56fe\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://github.com/mxsm/picture/blob/main/javaweb/servlet%E5%BC%82%E6%AD%A5%E6%89%A7%E8%A1%8C%E5%89%8D%E7%AB%AF%E5%90%8C%E6%AD%A5%E7%AD%89%E5%BE%85%E9%AA%8C%E8%AF%81%E7%BB%93%E6%9E%9C%E5%9B%BE.gif?raw=true",alt:"\u56fe"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u4ee3\u7801\u5730\u5740\uff1a",(0,l.kt)("a",{parentName:"p",href:"https://github.com/mxsm/spring-sample/blob/master/spring-boot/src/main/java/com/github/mxsm/controller/AsyncController.java"},"https://github.com/mxsm/spring-sample/blob/master/spring-boot/src/main/java/com/github/mxsm/controller/AsyncController.java"))))}c.isMDXComponent=!0}}]);