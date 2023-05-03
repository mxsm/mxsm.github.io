"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[3090],{3905:(e,t,r)=>{r.d(t,{Zo:()=>g,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),u=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},g=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),s=u(r),d=n,m=s["".concat(l,".").concat(d)]||s[d]||c[d]||i;return r?a.createElement(m,p(p({ref:t},g),{},{components:r})):a.createElement(m,p({ref:t},g))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,p=new Array(i);p[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[s]="string"==typeof e?e:n,p[1]=o;for(var u=2;u<i;u++)p[u]=r[u];return a.createElement.apply(null,p)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7087:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var a=r(7462),n=(r(7294),r(3905));const i={title:"Spring Cloud Gateway-\u65b0\u4e00\u4ee3API\u7f51\u5173\u670d\u52a1",date:new Date("2020-11-22T00:00:00.000Z"),weight:1},p=void 0,o={unversionedId:"spring/spring-cloud/spring-cloud-gateway/Spring-Cloud-Gateway-new-apigateway",id:"spring/spring-cloud/spring-cloud-gateway/Spring-Cloud-Gateway-new-apigateway",title:"Spring Cloud Gateway-\u65b0\u4e00\u4ee3API\u7f51\u5173\u670d\u52a1",description:"1 Spring Cloud Gateway\u7b80\u4ecb",source:"@site/docs/spring/spring-cloud/spring-cloud-gateway/Spring-Cloud-Gateway-new-apigateway.md",sourceDirName:"spring/spring-cloud/spring-cloud-gateway",slug:"/spring/spring-cloud/spring-cloud-gateway/Spring-Cloud-Gateway-new-apigateway",permalink:"/docs/spring/spring-cloud/spring-cloud-gateway/Spring-Cloud-Gateway-new-apigateway",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/spring/spring-cloud/spring-cloud-gateway/Spring-Cloud-Gateway-new-apigateway.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1683078484,formattedLastUpdatedAt:"May 3, 2023",frontMatter:{title:"Spring Cloud Gateway-\u65b0\u4e00\u4ee3API\u7f51\u5173\u670d\u52a1",date:"2020-11-22T00:00:00.000Z",weight:1},sidebar:"springcloud",previous:{title:"Spring Cloud Gateway-\u52a8\u6001\u8def\u7531\u5668\u5b9e\u73b0",permalink:"/docs/spring/spring-cloud/spring-cloud-gateway/Spring-Cloud-Gateway-dynamic-routing-impl"}},l={},u=[{value:"1 Spring Cloud Gateway\u7b80\u4ecb",id:"1-spring-cloud-gateway\u7b80\u4ecb",level:3},{value:"2 Spring Cloud Gateway\u7279\u70b9",id:"2-spring-cloud-gateway\u7279\u70b9",level:3},{value:"3 Spring Cloud Gateway\u7684\u4e09\u4e2a\u6982\u5ff5",id:"3-spring-cloud-gateway\u7684\u4e09\u4e2a\u6982\u5ff5",level:3},{value:"4 Spring Cloud Gateway\u5982\u4f55\u5de5\u4f5c",id:"4-spring-cloud-gateway\u5982\u4f55\u5de5\u4f5c",level:3}],g={toc:u},s="wrapper";function c(e){let{components:t,...r}=e;return(0,n.kt)(s,(0,a.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"1-spring-cloud-gateway\u7b80\u4ecb"},"1 Spring Cloud Gateway\u7b80\u4ecb"),(0,n.kt)("p",null,"SpringCloud Gateway \u662f Spring Cloud \u7684\u4e00\u4e2a\u5168\u65b0\u9879\u76ee\uff0c\u8be5\u9879\u76ee\u662f\u57fa\u4e8e Spring 5.0\uff0cSpring Boot 2.0 \u548c Project Reactor \u7b49\u6280\u672f\u5f00\u53d1\u7684\u7f51\u5173\uff0c\u5b83\u65e8\u5728\u4e3a\u5fae\u670d\u52a1\u67b6\u6784\u63d0\u4f9b\u4e00\u79cd\u7b80\u5355\u6709\u6548\u7684\u7edf\u4e00\u7684 API \u8def\u7531\u7ba1\u7406\u65b9\u5f0f\u3002\u4e3b\u8981\u76ee\u6807\u662f\u66ff\u4ee3 Zuul\u3002Netflix\u5bf9Zuul\u505c\u6b62\u4e86\u7ef4\u62a4\u548c\u66f4\u65b0\u3002\u6240\u4ee5\u5728Spring Boot2.0\u6ca1\u529e\u6cd5\u96c6\u6210\u3002Spring Cloud Gateway\u65e8\u5728\u63d0\u4f9b\u4e00\u79cd\u7b80\u5355\u800c\u6709\u6548\u7684\u65b9\u6cd5\u6765\u8def\u7531\u5230API\uff0c\u5e76\u4e3a\u5b83\u4eec\u63d0\u4f9b\u8de8\u9886\u57df\u7684\u5173\u6ce8\uff0c\u4f8b\u5982\uff1a\u5b89\u5168\u6027\uff0c\u76d1\u89c6/\u6307\u6807\u548c\u5f39\u6027\u3002 "),(0,n.kt)("h3",{id:"2-spring-cloud-gateway\u7279\u70b9"},"2 Spring Cloud Gateway\u7279\u70b9"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u57fa\u4e8e Spring Framework 5\uff0cProject Reactor \u548c Spring Boot 2.0"),(0,n.kt)("li",{parentName:"ul"},"\u8def\u7531\u80fd\u591f\u5339\u914d\u8bf7\u6c42\u7684\u4efb\u4f55\u5c5e\u6027"),(0,n.kt)("li",{parentName:"ul"},"Predicates \u548c Filters \u4f5c\u7528\u4e8e\u7279\u5b9a\u8def\u7531"),(0,n.kt)("li",{parentName:"ul"},"\u65ad\u8def\u5668\u96c6\u6210"),(0,n.kt)("li",{parentName:"ul"},"\u96c6\u6210 Spring Cloud DiscoveryClient"),(0,n.kt)("li",{parentName:"ul"},"Predicates \u548cFilters\u6613\u4e8e\u7f16\u5199"),(0,n.kt)("li",{parentName:"ul"},"\u9650\u6d41"),(0,n.kt)("li",{parentName:"ul"},"\u8def\u5f84\u91cd\u5199")),(0,n.kt)("h3",{id:"3-spring-cloud-gateway\u7684\u4e09\u4e2a\u6982\u5ff5"},"3 Spring Cloud Gateway\u7684\u4e09\u4e2a\u6982\u5ff5"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Route(\u8def\u7531)")),(0,n.kt)("p",{parentName:"li"},"\u6784\u5efa\u7f51\u5173\u7684\u57fa\u672c\u6a21\u5757\uff0c\u7531ID\u3001\u4e00\u4e2a\u76ee\u7684URI\u3001\u65ad\u8a00\u7684\u96c6\u5408\u4ee5\u53ca\u8fc7\u6ee4\u5668\u7684\u96c6\u5408\u7ec4\u6210\u3002\u5982\u679c\u65ad\u8a00\u4e3aTrue\u5219\u8def\u7531\u88ab\u5339\u914d")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Predicate(\u65ad\u8a00)")),(0,n.kt)("p",{parentName:"li"},"\u6765\u6e90\u4e8eJava8\u7684 ",(0,n.kt)("a",{parentName:"p",href:"https://docs.oracle.com/javase/8/docs/api/java/util/function/Predicate.html"},"Function Predicate")," \uff0c\u8f93\u5165\u7684\u662f ",(0,n.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring-framework/docs/5.0.x/javadoc-api/org/springframework/web/server/ServerWebExchange.html"},"Spring Framework ",(0,n.kt)("inlineCode",{parentName:"a"},"ServerWebExchange"))," \u3002\u8fd9\u4e2a\u80fd\u8ba9\u4f60\u5339\u914d\u4efb\u4f55\u6765\u81eaHTTP\u8bf7\u6c42\u3002\u4f8b\u5982\uff1aheaders\u3001parameters\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Filter(\u8fc7\u6ee4\u5668)")),(0,n.kt)("p",{parentName:"li"},"\u8fc7\u6ee4\u5668\u662f ",(0,n.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring/docs/5.0.x/javadoc-api/org/springframework/web/server/GatewayFilter.html"},"Spring Framework ",(0,n.kt)("inlineCode",{parentName:"a"},"GatewayFilter")),"  \u7684\u5b9e\u4f8b\uff0c\u80fd\u4fee\u6539requests\u548cresponses  \u5728\u53d1\u9001\u4e4b\u524d\u6216\u8005\u4e4b\u540e\u3002"))),(0,n.kt)("h3",{id:"4-spring-cloud-gateway\u5982\u4f55\u5de5\u4f5c"},"4 Spring Cloud Gateway\u5982\u4f55\u5de5\u4f5c"),(0,n.kt)("p",null,"\u4e0b\u56fe\u4ece\u603b\u4f53\u4e0a\u6982\u8ff0\u4e86Spring Cloud Gateway\u7684\u5de5\u4f5c\u65b9\u5f0f"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://github.com/mxsm/document/blob/master/image/Spring/SpringCloud/SpringCloudGateway/Spring-Cloud-GatewayHowToWork.png?raw=true",alt:null})),(0,n.kt)("p",null,"\u5ba2\u6237\u7aef\u5411Spring Cloud Gateway\u53d1\u51fa\u8bf7\u6c42\u3002\u5982\u679c\u7f51\u5173\u5904\u7406\u7a0b\u5e8f\u6620\u5c04\u786e\u5b9a\u8bf7\u6c42\u4e0e\u8def\u7531\u5339\u914d\uff0c\u5219\u5c06\u5176\u53d1\u9001\u5230\u7f51\u5173Web\u5904\u7406\u7a0b\u5e8f\u3002\u8be5\u5904\u7406\u7a0b\u5e8f\u901a\u8fc7\u7279\u5b9a\u4e8e\u8bf7\u6c42\u7684\u8fc7\u6ee4\u5668\u94fe\u8fd0\u884c\u8bf7\u6c42\u3002\u7b5b\u9009\u5668\u7531\u865a\u7ebf\u5206\u9694\u7684\u539f\u56e0\u662f\uff0c\u7b5b\u9009\u5668\u53ef\u4ee5\u5728\u53d1\u9001\u4ee3\u7406\u8bf7\u6c42\u4e4b\u524d\u548c\u4e4b\u540e\u8fd0\u884c\u903b\u8f91\u3002\u6240\u6709\u201c\u524d\u7f6e\u201d\u8fc7\u6ee4\u5668\u903b\u8f91\u5747\u88ab\u6267\u884c\u3002\u7136\u540e\u53d1\u51fa\u4ee3\u7406\u8bf7\u6c42\u3002\u53d1\u51fa\u4ee3\u7406\u8bf7\u6c42\u540e\uff0c\u5c06\u8fd0\u884c\u201c\u540e\u201d\u8fc7\u6ee4\u5668\u903b\u8f91\u3002"))}c.isMDXComponent=!0}}]);