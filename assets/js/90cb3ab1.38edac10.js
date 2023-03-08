"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[4526],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>v});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var m=r.createContext({}),i=function(e){var t=r.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=i(e.components);return r.createElement(m.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,m=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=i(a),d=n,v=s["".concat(m,".").concat(d)]||s[d]||u[d]||o;return a?r.createElement(v,c(c({ref:t},p),{},{components:a})):r.createElement(v,c({ref:t},p))}));function v(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,c=new Array(o);c[0]=d;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l[s]="string"==typeof e?e:n,c[1]=l;for(var i=2;i<o;i++)c[i]=a[i];return r.createElement.apply(null,c)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2768:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var r=a(7462),n=(a(7294),a(3905));const o={title:"\u5185\u5d4c\u5f0fTomcat",linkTitle:"\u5185\u5d4c\u5f0fTomcat",date:new Date("2022-02-17T00:00:00.000Z"),weight:202202172325},c=void 0,l={unversionedId:"java/java-web/tomcat/embed-tomcat",id:"java/java-web/tomcat/embed-tomcat",title:"\u5185\u5d4c\u5f0fTomcat",description:"1. \u5f15\u8a00",source:"@site/docs/java/java-web/tomcat/embed-tomcat.md",sourceDirName:"java/java-web/tomcat",slug:"/java/java-web/tomcat/embed-tomcat",permalink:"/docs/java/java-web/tomcat/embed-tomcat",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/java/java-web/tomcat/embed-tomcat.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1678285899,formattedLastUpdatedAt:"Mar 8, 2023",frontMatter:{title:"\u5185\u5d4c\u5f0fTomcat",linkTitle:"\u5185\u5d4c\u5f0fTomcat",date:"2022-02-17T00:00:00.000Z",weight:202202172325},sidebar:"javaweb",previous:{title:"Overview",permalink:"/docs/java/java-web"},next:{title:"Servlet3.1",permalink:"/docs/java/java-web/servlet/Servlet3.1"}},m={},i=[{value:"1. \u5f15\u8a00",id:"1-\u5f15\u8a00",level:3},{value:"2. \u5185\u5d4c\u5f0fTomcat\u5230\u5e95\u662f\u4ec0\u4e48\uff1f",id:"2-\u5185\u5d4c\u5f0ftomcat\u5230\u5e95\u662f\u4ec0\u4e48",level:3},{value:"3. \u521b\u5efa\u4e00\u4e2a\u5185\u5d4cTomcat\u5e94\u7528",id:"3-\u521b\u5efa\u4e00\u4e2a\u5185\u5d4ctomcat\u5e94\u7528",level:3},{value:"3.1 \u521b\u5efapom.xml",id:"31-\u521b\u5efapomxml",level:4},{value:"3.2 \u7f16\u5199\u542f\u52a8\u7a0b\u5e8f",id:"32-\u7f16\u5199\u542f\u52a8\u7a0b\u5e8f",level:4},{value:"3.3 \u9a8c\u8bc1\u7a0b\u5e8f",id:"33-\u9a8c\u8bc1\u7a0b\u5e8f",level:4},{value:"4. \u603b\u7ed3",id:"4-\u603b\u7ed3",level:3}],p={toc:i},s="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(s,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"1-\u5f15\u8a00"},"1. \u5f15\u8a00"),(0,n.kt)("p",null,"\u4f5c\u4e3a\u4e00\u4e2aJava\u5f00\u53d1\u8005\uff0cTomcat\u6ca1\u6709\u4e0d\u8ba4\u8bc6\u7684\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/others/serialize/image-20220224231614905.png",alt:"image-20220224231614905"})),(0,n.kt)("p",null,"\u4ee5\u524d\u90fd\u662f\u5355\u72ec\u90e8\u7f72\u4e00\u4e2aTomcat\u7136\u540e\u5c06\u670d\u52a1\u6253\u5305\u6210war\u5305\u540e\u8fdb\u884c\u90e8\u7f72\u3002\u968f\u7740\u6280\u672f\u7684\u53d1\u5c55\uff0c\u524d\u540e\u7aef\u7684\u5206\u79bb\u3002Tomcat\u5df2\u7ecf\u4e0d\u9700\u8981\u627f\u62c5\u524d\u7aef\u9875\u9762\u7684\u90e8\u7f72\u3002\u6240\u4ee5Tomcat\u5355\u72ec\u90e8\u7f72\u5c31\u4e0d\u662f\u90a3\u4e48\u5408\u9002\u3002\u4f7f\u7528Spring Boot\u6846\u67b6\u5f00\u53d1web\u5e94\u7528\u7684\u4eba\u5927\u5bb6\u90fd\u53ef\u80fd\u53d1\u73b0\u6211\u4eec\u5e76\u6ca1\u6709\u90e8\u7f72Tomcat\u53ea\u662f\u901a\u8fc7\u8fd0\u884c\u4e00\u4e2a\u65b9\u6cd5\u524d\u7aef\u5c31\u80fd\u8bbf\u95ee\u6211\u4eec\u5f00\u53d1\u7684\u63a5\u53e3\uff0c\u8fd9\u662f\u4e3a\u4ec0\u4e48\uff1f\u8fd9\u91cc\u5c31\u4ecb\u7ecd\u6211\u4eec\u4eca\u5929\u8981\u8bf4\u7684\u8fd9\u4e2a\u5185\u5d4c\u5f0fTomcat,\u8fd9\u4e2a\u4e5f\u5c31\u662f\u4e3a\u4ec0\u4e48\u6211\u4eecSpring Boot\u7684web\u5e94\u7528\u4e2d\u62a5\u9519\u53ef\u4ee5\u770b\u5230\u4e00\u4e9b\u5173\u4e8eTomcat\u7684\u4fe1\u606f"),(0,n.kt)("h3",{id:"2-\u5185\u5d4c\u5f0ftomcat\u5230\u5e95\u662f\u4ec0\u4e48"},"2. \u5185\u5d4c\u5f0fTomcat\u5230\u5e95\u662f\u4ec0\u4e48\uff1f"),(0,n.kt)("p",null,"\u672c\u8d28\u4e0a\u8fd8\u662f\u4e00\u4e2aTomcat\uff0c\u53ea\u4e0d\u8fc7\u548c\u4ee5\u524d\u5355\u72ec\u90e8\u7f72\u7136\u540e\u5728\u6307\u5b9a\u7684\u76ee\u5f55\u4e2d\u90e8\u7f72war\u4e0d\u4e00\u6837\u7684\u662f\uff0c\u5185\u5d4c\u662f\u53ef\u4ee5\u7528Jar\u5305\u7684\u5f62\u5f0f\u5d4c\u5165\u5230\u5f00\u53d1\u8005\u7684\u9879\u76ee\u4e2d\u3002\u8fd9\u4e5f\u662fSpring Boot web\u9879\u76ee\u80fd\u591f\u4f7f\u7528Tomcat\u7684\u6839\u672c\u3002\u5185\u5d4c\u5f0fTomcat\u5c06\u4ee5\u524d\u4f20\u7edf\u7684Tomcat\u4ee5\u7f16\u7801\u7684\u65b9\u5f0f\u96c6\u6210\u5230\u5f00\u53d1\u8005\u7684web\u7a0b\u5e8f\u4e2d\u3002\u53bb\u9664\u4e86\u7e41\u7410\u7684\u914d\u7f6e\u3002\u8fd9\u4e2a\u4e5f\u548c\u73b0\u5728Spring Boot\u7684\u601d\u60f3\u4e0d\u8c0b\u800c\u5408\u3002"),(0,n.kt)("h3",{id:"3-\u521b\u5efa\u4e00\u4e2a\u5185\u5d4ctomcat\u5e94\u7528"},"3. \u521b\u5efa\u4e00\u4e2a\u5185\u5d4cTomcat\u5e94\u7528"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Tips: Tomcat\u7248\u672c9.0.58\uff0c\u9ad8\u7684\u7248\u672c\u9700\u8981\u5f15\u5165 ",(0,n.kt)("a",{parentName:"p",href:"https://jakarta.ee/"},"Jakarta EE")," \u7684\u4e00\u4e9b\u5305\uff0c\u5df2maven\u9879\u76ee\u4e3a\u4f8b")),(0,n.kt)("h4",{id:"31-\u521b\u5efapomxml"},"3.1 \u521b\u5efapom.xml"),(0,n.kt)("p",null,"\u5728pom.xml\u6587\u4ef6\u4e2d\u6dfb\u52a0\u4f9d\u8d56"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"<properties>\n    <tomcat.version>9.0.58</tomcat.version>\n</properties>\n\n<dependency>\n    <groupId>org.apache.tomcat.embed</groupId>\n    <artifactId>tomcat-embed-core</artifactId>\n    <version>${tomcat.version}</version>\n</dependency>\n<dependency>\n    <groupId>org.apache.tomcat.embed</groupId>\n    <artifactId>tomcat-embed-jasper</artifactId>\n    <version>${tomcat.version}</version>\n</dependency>\n")),(0,n.kt)("h4",{id:"32-\u7f16\u5199\u542f\u52a8\u7a0b\u5e8f"},"3.2 \u7f16\u5199\u542f\u52a8\u7a0b\u5e8f"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'public class TomcatBootstrap {\n\n    public static void main(String[] args) throws Exception{\n        //\u7b2c\u4e00\u90e8\u5206\n        Tomcat tomcat = new Tomcat();\n        tomcat.setPort(8080);\n        tomcat.getConnector();\n\n        //\u7b2c\u4e8c\u90e8\u5206\n        Context ctx = tomcat.addWebapp("", new File("java-sample/src/main/webapp").getAbsolutePath());\n        WebResourceRoot resources = new StandardRoot(ctx);\n        resources.addPreResources(\n            new DirResourceSet(resources, "/WEB-INF/classes", new File("java-sample/target/classes").getAbsolutePath(), "/"));\n        ctx.setResources(resources);\n\n        //\u7b2c\u4e09\u90e8\u5206\n        tomcat.start();\n        tomcat.getServer().await();\n    }\n}\n\n@WebServlet(urlPatterns = "/")\npublic class MxsmServlet extends HttpServlet {\n    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {\n        resp.getWriter().println("hello world");\n    }\n}\n')),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/others/serialize/image-20220224233009657.png",alt:"image-20220224233009657"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Tips: \u4e0a\u9762\u4ee3\u7801\u6839\u636e\u4e0d\u540c\u4eba\u7684\u4ee3\u7801\u7ed3\u6784\u4e0d\u540c\u6807\u6ce8\u7684\u5730\u65b9\u53ef\u80fd\u4e5f\u4e0d\u76f8\u540c\u3002\u53ef\u4ee5\u6839\u636e\u9519\u8bef\u63d0\u793a\u8c03\u6574\u3002")),(0,n.kt)("p",null,"\u7136\u540e\u542f\u52a8\u670d\u52a1\u5982\u4e0b\u56fe\uff1a"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/others/serialize/startembedtomcat.gif",alt:"startembedtomcat"})),(0,n.kt)("h4",{id:"33-\u9a8c\u8bc1\u7a0b\u5e8f"},"3.3 \u9a8c\u8bc1\u7a0b\u5e8f"),(0,n.kt)("p",null,"\u5728\u6d4f\u89c8\u5668\u8f93\u5165\uff1a",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"http://localhost:8080/"))),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/others/serialize/image-20220224233432937.png",alt:"image-20220224233432937"})),(0,n.kt)("p",null,"\u8fd4\u56de\u4e86",(0,n.kt)("inlineCode",{parentName:"p"},"hello world")," , \u8bf4\u660e\u4e86Tomcat\u6b63\u5e38\u8fd0\u884c\u4e86\u3002"),(0,n.kt)("h3",{id:"4-\u603b\u7ed3"},"4. \u603b\u7ed3"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5185\u5d4c\u5f0fTomcat\u63d0\u4f9b\u7f16\u7a0b\u7684\u65b9\u5f0f\u5c06Tomcat\u96c6\u6210\u5230\u6211\u4eec\u7684\u9879\u76ee\uff0c\u53ef\u4ee5\u8ba9Web\u9879\u76ee\u4ee5Jar\u5305\u7684\u5f62\u5f0f\u8fd0\u884c"),(0,n.kt)("li",{parentName:"ul"},"\u4ee5\u7f16\u7a0b\u7684\u65b9\u5f0f\u4ee3\u66ff\u914d\u7f6e\u6587\u4ef6\u7684\u65b9\u5f0f\u6765\u914d\u7f6eTomcat,\u51cf\u5c11\u4e86\u914d\u7f6e\u6587\u4ef6\u3002\u8fd9\u4e2a\u4e5f\u662f\u4e3a\u4e86\u652f\u6301Servlet\u7684\u6ce8\u89e3\u3002\u4ee5\u524d\u9700\u8981XML\u914d\u7684\u73b0\u5728\u90fd\u53ef\u4ee5\u901a\u8fc7\u6ce8\u89e3\u6765\u5b9e\u73b0")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u6211\u662f\u8682\u8681\u80cc\u5927\u8c61\uff0c\u6587\u7ae0\u5bf9\u4f60\u6709\u5e2e\u52a9\u70b9\u8d5e\u5173\u6ce8\u6211\uff0c\u6587\u7ae0\u6709\u4e0d\u6b63\u786e\u7684\u5730\u65b9\u8bf7\u60a8\u65a7\u6b63\u7559\u8a00\u8bc4\u8bba~\u8c22\u8c22")))}u.isMDXComponent=!0}}]);