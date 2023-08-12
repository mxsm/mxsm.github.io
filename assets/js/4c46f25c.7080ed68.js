"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[1906],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function v(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,s=v(e,["components","mdxType","originalType","parentName"]),p=c(r),d=a,m=p["".concat(i,".").concat(d)]||p[d]||u[d]||l;return r?n.createElement(m,o(o({ref:t},s),{},{components:r})):n.createElement(m,o({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var v={};for(var i in t)hasOwnProperty.call(t,i)&&(v[i]=t[i]);v.originalType=e,v[p]="string"==typeof e?e:a,o[1]=v;for(var c=2;c<l;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6261:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>v,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const l={title:"Servlet3.1",date:new Date("2018-05-19T00:00:00.000Z"),weight:1},o=void 0,v={unversionedId:"java/java-web/servlet/Servlet3.1",id:"java/java-web/servlet/Servlet3.1",title:"Servlet3.1",description:"1. \u4ec0\u4e48\u662fServlet",source:"@site/docs/java/java-web/servlet/Servlet3.1.md",sourceDirName:"java/java-web/servlet",slug:"/java/java-web/servlet/Servlet3.1",permalink:"/docs/java/java-web/servlet/Servlet3.1",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/java/java-web/servlet/Servlet3.1.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1691846266,formattedLastUpdatedAt:"Aug 12, 2023",frontMatter:{title:"Servlet3.1",date:"2018-05-19T00:00:00.000Z",weight:1},sidebar:"javaweb",previous:{title:"\u5185\u5d4c\u5f0fTomcat",permalink:"/docs/java/java-web/tomcat/embed-tomcat"},next:{title:"Servlet\u5f02\u6b65\u5e94\u7528\u957f\u8f6e\u8be2\u5b9e\u73b0",permalink:"/docs/java/java-web/servlet/long-polling"}},i={},c=[{value:"1. \u4ec0\u4e48\u662fServlet",id:"1-\u4ec0\u4e48\u662fservlet",level:3},{value:"2. <strong>Servlet</strong> \u63a5\u53e3",id:"2-servlet-\u63a5\u53e3",level:3}],s={toc:c},p="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"1-\u4ec0\u4e48\u662fservlet"},"1. \u4ec0\u4e48\u662fServlet"),(0,a.kt)("p",null,"Servlet \u662f\u57fa\u4e8e Java \u6280\u672f\u7684 web \u7ec4\u4ef6\uff0c\u5bb9\u5668\u6258\u7ba1\u7684\uff0c\u7528\u4e8e\u751f\u6210\u52a8\u6001\u5185\u5bb9\u3002\u50cf\u5176\u4ed6\u57fa\u4e8e Java \u7684\u7ec4\u4ef6\u6280\u672f\u4e00\u6837\uff0c "),(0,a.kt)("p",null,"Servlet \u4e5f\u662f\u57fa\u4e8e\u5e73\u53f0\u65e0\u5173\u7684 Java \u7c7b\u683c\u5f0f\uff0c\u88ab\u7f16\u8bd1\u4e3a\u5e73\u53f0\u65e0\u5173\u7684\u5b57\u8282\u7801\uff0c\u53ef\u4ee5\u88ab\u57fa\u4e8e Java \u6280\u672f\u7684 web server "),(0,a.kt)("p",null,"\u52a8\u6001\u52a0\u8f7d\u5e76\u8fd0\u884c\u3002\u5bb9\u5668\uff0c\u6709\u65f6\u5019\u4e5f\u53eb\u505a servlet \u5f15\u64ce\uff0c\u662f web server \u4e3a\u652f\u6301 servlet \u529f\u80fd\u6269\u5c55\u7684\u90e8\u5206\u3002\u5ba2\u6237\u7aef "),(0,a.kt)("p",null,"\u901a\u8fc7 Servlet \u5bb9\u5668\u5b9e\u73b0\u7684\u8bf7\u6c42/\u5e94\u7b54\u6a21\u578b\u4e0e Servlet \u4ea4\u4e92\u3002"),(0,a.kt)("h3",{id:"2-servlet-\u63a5\u53e3"},"2. ",(0,a.kt)("strong",{parentName:"h3"},"Servlet")," \u63a5\u53e3"),(0,a.kt)("p",null,"Servlet \u63a5\u53e3\u662f Java Servlet API \u7684\u6838\u5fc3\u62bd\u8c61\u3002\u6240\u6709 Servlet \u7c7b\u5fc5\u987b\u76f4\u63a5\u6216\u95f4\u63a5\u7684\u5b9e\u73b0\u8be5\u63a5\u53e3\uff0c\u6216\u8005\u66f4\u901a\u5e38\u505a\u6cd5 "),(0,a.kt)("p",null,"\u662f\u901a\u8fc7\u7ee7\u627f\u4e00\u4e2a\u5b9e\u73b0\u4e86\u8be5\u63a5\u53e3\u7684\u7c7b\u4ece\u800c\u590d\u7528\u8bb8\u591a\u5171\u6027\u529f\u80fd\u3002\u76ee\u524d\u6709 GenericServlet \u548c HttpServlet \u8fd9\u4e24\u4e2a\u7c7b\u5b9e "),(0,a.kt)("p",null,"\u73b0\u4e86 Servlet \u63a5\u53e3\u3002\u5927\u591a\u6570\u60c5\u51b5\u4e0b\uff0c\u5f00\u53d1\u8005\u53ea\u9700\u8981\u7ee7\u627f HttpServlet \u53bb\u5b9e\u73b0\u81ea\u5df1\u7684 Servlet \u5373\u53ef:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public interface Servlet {\n\n    public void init(ServletConfig config) throws ServletException;\n    \n    public ServletConfig getServletConfig();\n\n    public void service(ServletRequest req, ServletResponse res)\n        \n    throws ServletException, IOException;\n    \n    public String getServletInfo();\n    \n    public void destroy();\n}\n")))}u.isMDXComponent=!0}}]);