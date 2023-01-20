"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[2991],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var r=n(7294);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,p=function(e,t){if(null==e)return{};var n,r,p={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(p[n]=e[n]);return p}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(p[n]=e[n])}return p}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,p=e.mdxType,a=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=l(n),u=p,k=c["".concat(s,".").concat(u)]||c[u]||g[u]||a;return n?r.createElement(k,i(i({ref:t},m),{},{components:n})):r.createElement(k,i({ref:t},m))}));function k(e,t){var n=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var a=n.length,i=new Array(a);i[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:p,i[1]=o;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4097:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var r=n(7462),p=(n(7294),n(3905));const a={title:"Spring\u4e2d\u7684\u62d3\u5c55\u539f\u7406\u5b9e\u6218",linkTitle:"Spring\u4e2d\u7684\u62d3\u5c55\u539f\u7406\u5b9e\u6218",date:new Date("2021-01-18T00:00:00.000Z"),weight:202101182118},i=void 0,o={unversionedId:"spring/spring-framework/custom-component-extensions/spring-extend",id:"spring/spring-framework/custom-component-extensions/spring-extend",title:"Spring\u4e2d\u7684\u62d3\u5c55\u539f\u7406\u5b9e\u6218",description:"1. Spring\u62d3\u5c55\u5206\u7c7b",source:"@site/docs/spring/spring-framework/custom-component-extensions/spring-extend.md",sourceDirName:"spring/spring-framework/custom-component-extensions",slug:"/spring/spring-framework/custom-component-extensions/spring-extend",permalink:"/docs/spring/spring-framework/custom-component-extensions/spring-extend",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/spring/spring-framework/custom-component-extensions/spring-extend.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1674227439,formattedLastUpdatedAt:"Jan 20, 2023",frontMatter:{title:"Spring\u4e2d\u7684\u62d3\u5c55\u539f\u7406\u5b9e\u6218",linkTitle:"Spring\u4e2d\u7684\u62d3\u5c55\u539f\u7406\u5b9e\u6218",date:"2021-01-18T00:00:00.000Z",weight:202101182118},sidebar:"springframework",previous:{title:"\u5982\u4f55\u81ea\u5b9a\u4e49Spring xml Namespace",permalink:"/docs/spring/spring-framework/custom-component-extensions/spring-extend-xml"}},s={},l=[{value:"1. Spring\u62d3\u5c55\u5206\u7c7b",id:"1-spring\u62d3\u5c55\u5206\u7c7b",level:3},{value:"2. \u4e3a\u4ec0\u4e48\u8981\u62d3\u5c55(\u81ea\u5b9a\u4e49)\uff1f",id:"2-\u4e3a\u4ec0\u4e48\u8981\u62d3\u5c55\u81ea\u5b9a\u4e49",level:3}],m={toc:l};function c(e){let{components:t,...n}=e;return(0,p.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h3",{id:"1-spring\u62d3\u5c55\u5206\u7c7b"},"1. Spring\u62d3\u5c55\u5206\u7c7b"),(0,p.kt)("p",null,"Spring\u5728Java\u6846\u67b6\u4e2d\u6709\u7740\u4e0d\u53ef\u64bc\u52a8\u7684\u5730\u4f4d\uff0c\u53ea\u8981\u662fJava\u5f00\u53d1\u8005\u5c31\u6ca1\u6709\u4e0d\u7528\u7684\u3002\u5bf9\u4e8e\u8fd9\u6837\u4e00\u4e2a\u4f18\u79c0\u7684\u6846\u67b6\u53ef\u62d3\u5c55\u6027\u662f\u5fc5\u4e0d\u53ef\u5c11\u7684\u3002\u8fd9\u91cc\u901a\u8fc7\u5206\u6790Spring\u7684\u539f\u7406\u7136\u540e\u6839\u636e\u5de5\u4f5c\u4e2d\u7684\u9700\u8981\u57fa\u4e8eSpring\u7684\u4e00\u4e9b\u5e38\u7528\u7684\u62d3\u5c55\uff1a"),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/spring/custom/Spring%E4%B8%AD%E7%9A%84%E6%8B%93%E5%B1%95.png",alt:"Spring\u4e2d\u7684\u62d3\u5c55"})),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},(0,p.kt)("a",{parentName:"p",href:"https://spring.io/"},"Spring\u5b98\u7f51")),(0,p.kt)("p",{parentName:"blockquote"},(0,p.kt)("a",{parentName:"p",href:"https://github.com/spring-projects/spring-framework"},"Spring Framework Github"))),(0,p.kt)("p",null,"\u62d3\u5c55\u5206\u7c7b\uff1a"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},"XML Schema\u62d3\u5c55")),(0,p.kt)("p",{parentName:"li"},"\u5728Spring\u4e2d\u6709\u9664\u4e86\u6bd4\u8f83\u5e38\u89c1\u7684\u6807\u7b7e bean\u3001aop\u6807\u7b7e\u4ee5\u5916\uff0c\u8fd8\u53ef\u4ee5\u901a\u8fc7\u81ea\u5b9a\u4e49XSD\u7136\u540e\u548cSpring\u7684\u62d3\u5c55\u63a5\u53e3\u5b9e\u73b0\u81ea\u5b9a\u4e49")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},"\u81ea\u5b9a\u4e49\u6ce8\u89e3")),(0,p.kt)("p",{parentName:"li"},"\u9996\u5148\u8981\u660e\u767d\u81ea\u5b9a\u4e49\u6ce8\u89e3\u6709\u4ec0\u4e48\u597d\u5904\uff1a"),(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},"\u81ea\u5b9a\u4e49\u6ce8\u89e3\u80fd\u591f\u901a\u8fc7\u6ce8\u89e3\u5f88\u597d\u7684\u8868\u8fbe\u6211\u4eec\u8fd9\u4e2a\u6ce8\u89e3\u8868\u5e72\u7684\u4e8b\u60c5\uff0c\u4f8b\u5982\uff1a@Log\u8fd9\u4e2a\u5728Spring\u4e2d\u6ca1\u6709\u8fd9\u4e2a\u6ce8\u89e3\uff0c\u901a\u8fc7\u6ce8\u89e3\u6211\u4eec\u5f88\u597d\u731c\u5230\u8fd9\u4e2a\u662f\u7528\u6765\u8bb0\u5f55\u65e5\u5fd7\u7684\u3002\u5728Spring Web\u4e2d\u7684\u6ce8\u89e3@RestController"),(0,p.kt)("li",{parentName:"ul"},"\u80fd\u591f\u5728Spring\u7684\u539f\u6709\u7684\u6ce8\u89e3\u4e0a\u505a\u4e00\u4e9b\u989d\u5916\u7684\u529f\u80fd"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},"AOP\u62d3\u5c55")),(0,p.kt)("p",{parentName:"li"},"\u5bf9\u4e8eAOP\u62d3\u5c55\uff0cSpring\u4e2d\u5df2\u7ecf\u6709\u4e86\u51e0\u4e2a\u4f8b\u5b50\uff1a",(0,p.kt)("strong",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"strong"},"@Transactional"))," ",(0,p.kt)("strong",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"strong"},"@Async"))," ",(0,p.kt)("strong",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"strong"},"@Cacheable"))," \uff0c\u8fd9\u51e0\u4e2a\u90fd\u662fAOP\u62d3\u5c55\u7684\u4f53\u73b0\uff0c\u4f46\u662f\u5728\u5b9e\u9645\u7684\u5de5\u4f5c\u4e2d\u8fdc\u8fdc\u4e0d\u6b62\u8fd9\u4e9b\u62d3\u5c55\u3002\u4f8b\u5982\uff1a\u65e5\u5fd7\u8bb0\u5f55\uff0c\u65b9\u6cd5\u8c03\u7528\u65f6\u95f4\u7edf\u8ba1\u7b49\u7b49"),(0,p.kt)("blockquote",{parentName:"li"},(0,p.kt)("p",{parentName:"blockquote"},"Async\u539f\u7406\u6e90\u7801\u5206\u6790\u53ef\u4ee5\u9605\u8bfb \u300a",(0,p.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7045587358174937101"},"Spring AOP\u5e94\u7528\u4e4bEnableAsync"),"\u300b"),(0,p.kt)("p",{parentName:"blockquote"},"Transactional\u539f\u7406\u6e90\u7801\u5206\u6790\u53ef\u4ee5\u9605\u8bfb \u300a",(0,p.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7040748897915895821"},"Spring AOP\u5e94\u7528\u4e4bSpring\u4e8b\u52a1\u7ba1\u7406"),"\u300b"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},"\u6821\u9a8c\u62d3\u5c55")),(0,p.kt)("p",{parentName:"li"},"\u5728web\u9879\u76ee\u4e2d\uff0c\u6709\u4e00\u7c7b\u6ce8\u89e3\u50cf\uff1a@NotBlank \u8fd9\u4e00\u7c7b\u6ce8\u89e3\uff0c\u8fd9\u4e9b\u53ea\u662fJava\u672c\u8eab\u63d0\u4f9b\u7684\uff0cSpring\u7ed9\u4e86\u652f\u6301\u3002\u4f46\u662f\u4f8b\u5982\u5224\u65ad\u662f\u4e0d\u662f\u7535\u5b50\u90ae\u4ef6\u3001\u7535\u8bdd\u53f7\u7801\u7b49\u7b49\u90fd\u9700\u8981\u81ea\u5b9a\u4e49\u3002(\u4e25\u683c\u610f\u4e49\u4e0a\u6765\u8bf4\u8fd9\u53ea\u80fd\u662fSpring\u5bf9\u6821\u9a8c\u7684\u4e00\u79cd\u652f\u6301)")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},"\u5176\u4ed6\u62d3\u5c55")),(0,p.kt)("p",{parentName:"li"},"\u5bf9\u4e00\u4e9b\u63a5\u53e3\u62d3\u5c55\uff0c\u4f8b\u5982Aware\u63a5\u53e3\u62d3\u5c55\u7b49\u7b49"))),(0,p.kt)("h3",{id:"2-\u4e3a\u4ec0\u4e48\u8981\u62d3\u5c55\u81ea\u5b9a\u4e49"},"2. \u4e3a\u4ec0\u4e48\u8981\u62d3\u5c55(\u81ea\u5b9a\u4e49)\uff1f"),(0,p.kt)("p",null,"\u62d3\u5c55\u81ea\u5b9a\u4e49\u7684\u610f\u4e49\u5728\u54ea\u91cc\uff1f\u4ece\u4ee3\u7801\u53ef\u8bfb\u6027\u4e0a\u6765\u8bf4\u80fd\u591f\u8ba9\u4f7f\u7528\u8005\u66f4\u52a0\u6e05\u695a\u660e\u767d\u5f53\u524d\u7684\u7ec4\u4ef6\u662f\u5e72\u4ec0\u4e48\u7684\uff0c\u4ece\u89e3\u51b3\u95ee\u9898\u7684\u89d2\u5ea6\u6765\u8bf4\u66f4\u597d\u7684\u89e3\u51b3\u6bcf\u4e2a\u5177\u4f53\u4e1a\u52a1\u7684\u95ee\u9898\u3002\u5b9e\u73b0\u4e2a\u6027\u5316\u5b9a\u5236\u3002"),(0,p.kt)("p",null,"\u63a5\u4e0b\u6765\u901a\u8fc7\u4e00\u7cfb\u5217\u6587\u7ae0\u8fdb\u884c\u5206\u95e8\u522b\u7c7b\uff0c\u4ece\u539f\u7406\u5230\u5b9e\u9645\u7f16\u5199\u4ee3\u7801\u6765\u5b9e\u73b0\u4ee5\u4e0a\u7684\u8fd9\u4e9b\u62d3\u5c55\u3002\u7ed3\u5408\u5de5\u4f5c\u4e2d\u7684\u4e00\u4e9b\u5b9e\u9645\u9700\u6c42\u5bf9\u62d3\u5c55\u505a\u4e00\u4e9b\u5b9e\u73b0\uff01\u540c\u65f6\u628aSpring\u7684\u62d3\u5c55\u8fdb\u884c\u5206\u95e8\u522b\u7c7b\u3002\u5728\u66f4\u65b0\u5b8c\u6210Spring\u62d3\u5c55\u7684\u7cfb\u5217\u540e\u8fd8\u4f1a\u7ee7\u7eed\u66f4\u65b0Spring Boot\u7684\u76f8\u5173\u62d3\u5c55\u4ee5\u53ca\u6e90\u7801\u5206\u6790\u7684\u6587\u7ae0\u3002"))}c.isMDXComponent=!0}}]);