"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[5106],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>y});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,y=u["".concat(p,".").concat(d)]||u[d]||m[d]||l;return n?r.createElement(y,i(i({ref:t},s),{},{components:n})):r.createElement(y,i({ref:t},s))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2001:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const l={title:"\u53ef\u89c2\u5bdf\u6027\u5165\u95e8",linkTitle:"\u53ef\u89c2\u5bdf\u6027\u5165\u95e8",weight:202303111427,description:"\u53ef\u89c2\u5bdf\u6027\u5165\u95e8\u77e5\u8bc6"},i=void 0,o={unversionedId:"cloud-native/open-telemetry/concept/observability-primer",id:"cloud-native/open-telemetry/concept/observability-primer",title:"\u53ef\u89c2\u5bdf\u6027\u5165\u95e8",description:"\u53ef\u89c2\u5bdf\u6027\u5165\u95e8\u77e5\u8bc6",source:"@site/docs/cloud-native/open-telemetry/concept/01-observability-primer.md",sourceDirName:"cloud-native/open-telemetry/concept",slug:"/cloud-native/open-telemetry/concept/observability-primer",permalink:"/docs/cloud-native/open-telemetry/concept/observability-primer",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/cloud-native/open-telemetry/concept/01-observability-primer.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1678525064,formattedLastUpdatedAt:"Mar 11, 2023",sidebarPosition:1,frontMatter:{title:"\u53ef\u89c2\u5bdf\u6027\u5165\u95e8",linkTitle:"\u53ef\u89c2\u5bdf\u6027\u5165\u95e8",weight:202303111427,description:"\u53ef\u89c2\u5bdf\u6027\u5165\u95e8\u77e5\u8bc6"},sidebar:"OpenTelemetry",previous:{title:"OpenTelemetry\u6982\u5ff5",permalink:"/docs/cloud-native/open-telemetry/concept"},next:{title:"OpenTelemetry\u5165\u95e8-\u6982\u5ff5",permalink:"/docs/cloud-native/open-telemetry/concept/open-telemetry-primer"}},p={},c=[{value:"1. \u4ec0\u4e48\u662f\u53ef\u89c2\u5bdf\u6027\uff1f",id:"1-\u4ec0\u4e48\u662f\u53ef\u89c2\u5bdf\u6027",level:2},{value:"2. \u53ef\u9760\u6027&amp;\u6307\u6807",id:"2-\u53ef\u9760\u6027\u6307\u6807",level:2},{value:"3. \u4e86\u89e3\u5206\u5e03\u5f0f\u8ddf\u8e2a\uff08Distributed Tracing\uff09",id:"3-\u4e86\u89e3\u5206\u5e03\u5f0f\u8ddf\u8e2adistributed-tracing",level:2},{value:"3.1 Logs",id:"31-logs",level:3},{value:"3.2 Spans",id:"32-spans",level:3},{value:"3.3\u5206\u5e03\u5f0f\u8ddf\u8e2a(Distributed Traces)",id:"33\u5206\u5e03\u5f0f\u8ddf\u8e2adistributed-traces",level:3},{value:"4. \u603b\u7ed3",id:"4-\u603b\u7ed3",level:2}],s={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1-\u4ec0\u4e48\u662f\u53ef\u89c2\u5bdf\u6027"},"1. \u4ec0\u4e48\u662f\u53ef\u89c2\u5bdf\u6027\uff1f"),(0,a.kt)("p",null,"\u53ef\u89c2\u6d4b\u6027\u4f7f\u6211\u4eec\u80fd\u591f\u4ece\u5916\u90e8\u7406\u89e3\u4e00\u4e2a\u7cfb\u7edf\uff0c\u8ba9\u6211\u4eec\u5728\u4e0d\u4e86\u89e3\u5176\u5185\u90e8\u5de5\u4f5c\u539f\u7406\u7684\u60c5\u51b5\u4e0b\u8be2\u95ee\u6709\u5173\u8be5\u7cfb\u7edf\u7684\u95ee\u9898\u3002\u6b64\u5916\uff0c\u5b83\u8fd8\u5141\u8bb8\u6211\u4eec\u8f7b\u677e\u5730\u89e3\u51b3\u548c\u5904\u7406\u65b0\u95ee\u9898\uff08\u5373\u201c\u672a\u77e5\u201d\uff09\uff0c\u5e76\u5e2e\u52a9\u6211\u4eec\u56de\u7b54\u201c\u4e3a\u4ec0\u4e48\u4f1a\u53d1\u751f\u8fd9\u79cd\u60c5\u51b5\uff1f\u201d\u7684\u95ee\u9898\u3002"),(0,a.kt)("p",null,"\u4e3a\u4e86\u80fd\u591f\u5411\u7cfb\u7edf\u8be2\u95ee\u8fd9\u4e9b\u95ee\u9898\uff0c\u5e94\u7528\u7a0b\u5e8f\u5fc5\u987b\u88ab\u6b63\u786e\u5730\u4eea\u8868\u5316\u3002\u4e5f\u5c31\u662f\u8bf4\uff0c\u5e94\u7528\u7a0b\u5e8f\u4ee3\u7801\u5fc5\u987b\u53d1\u51fa\u5982\u8ddf\u8e2a\u3001\u6307\u6807\u548c\u65e5\u5fd7\u7b49\u4fe1\u53f7\u3002\u5f53\u5f00\u53d1\u4eba\u5458\u4e0d\u9700\u8981\u6dfb\u52a0\u66f4\u591a\u7684\u4eea\u8868\u6765\u89e3\u51b3\u95ee\u9898\u65f6\uff0c\u5e94\u7528\u7a0b\u5e8f\u5c31\u88ab\u6b63\u786e\u5730\u4eea\u8868\u5316\u4e86\uff0c\u56e0\u4e3a\u4ed6\u4eec\u62e5\u6709\u4e86\u6240\u6709\u4ed6\u4eec\u9700\u8981\u7684\u4fe1\u606f\u3002"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u5e38\u89c1\u7684\u65e5\u5fd7\u662f\u53ef\u89c2\u5bdf\u6027\u7684\u4e00\u79cd\u4f53\u73b0")),(0,a.kt)("h2",{id:"2-\u53ef\u9760\u6027\u6307\u6807"},"2. \u53ef\u9760\u6027&\u6307\u6807"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Telemetry")," \uff1a\u9065\u6d4b(telemetry)\u6307\u7684\u662f\u7cfb\u7edf\u53d1\u51fa\u7684\u6709\u5173\u5176\u884c\u4e3a\u7684\u6570\u636e\u3002\u8fd9\u4e9b\u6570\u636e\u53ef\u4ee5\u4ee5\u8ddf\u8e2a\u3001\u6307\u6807\u548c\u65e5\u5fd7\u7b49\u5f62\u5f0f\u5448\u73b0\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Reliability")," \uff1a\u53ef\u9760\u6027\u56de\u7b54\u4e86\u8fd9\u4e2a\u95ee\u9898\uff1a\u201c\u670d\u52a1\u662f\u5426\u6b63\u5728\u6267\u884c\u7528\u6237\u6240\u671f\u671b\u7684\u64cd\u4f5c\uff1f\u201d\u4e00\u4e2a\u7cfb\u7edf\u53ef\u80fd\u4e00\u76f4\u5904\u4e8e\u8fd0\u884c\u72b6\u6001\uff0c\u4f46\u5982\u679c\u5f53\u7528\u6237\u5355\u51fb\u201c\u6dfb\u52a0\u5230\u8d2d\u7269\u8f66\u201d\u4ee5\u6dfb\u52a0\u4e00\u6761\u9ed1\u8272\u957f\u88e4\u5230\u5176\u8d2d\u7269\u8f66\u65f6\uff0c\u7cfb\u7edf\u4e0d\u65ad\u5730\u6dfb\u52a0\u4e00\u6761\u7ea2\u8272\u957f\u88e4\uff0c\u90a3\u4e48\u8be5\u7cfb\u7edf\u5c31\u88ab\u8ba4\u4e3a\u662f\u4e0d\u53ef\u9760\u7684\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Metrics")," \uff1a\u6307\u6807\u662f\u5173\u4e8e\u57fa\u7840\u8bbe\u65bd\u6216\u5e94\u7528\u7a0b\u5e8f\u7684\u6570\u503c\u6570\u636e\u5728\u4e00\u6bb5\u65f6\u95f4\u5185\u7684\u805a\u5408\u3002\u4f8b\u5982\uff1a\u7cfb\u7edf\u9519\u8bef\u7387\u3001CPU\u5229\u7528\u7387\u3001\u7ed9\u5b9a\u670d\u52a1\u7684\u8bf7\u6c42\u901f\u7387\u7b49\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"SLI"),"\uff1a\u670d\u52a1\u6c34\u5e73\u6307\u6807(SLI)\u662f\u670d\u52a1\u884c\u4e3a\u7684\u8861\u91cf\u6807\u51c6\u3002\u4e00\u4e2a\u597d\u7684SLI\u4ece\u7528\u6237\u7684\u89d2\u5ea6\u8861\u91cf\u60a8\u7684\u670d\u52a1\u3002\u4e00\u4e2a\u4f8b\u5b50\u662f\u7f51\u9875\u52a0\u8f7d\u7684\u901f\u5ea6\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"SLO"),"\uff1a\u670d\u52a1\u6c34\u5e73\u76ee\u6807(SLO)\u662f\u5411\u7ec4\u7ec7/\u5176\u4ed6\u56e2\u961f\u4f20\u8fbe\u53ef\u9760\u6027\u7684\u624b\u6bb5\u3002\u8fd9\u662f\u901a\u8fc7\u5c06\u4e00\u4e2a\u6216\u591a\u4e2aSLIs\u9644\u52a0\u5230\u4e1a\u52a1\u4ef7\u503c\u4e0a\u6765\u5b9e\u73b0\u7684\u3002"))),(0,a.kt)("h2",{id:"3-\u4e86\u89e3\u5206\u5e03\u5f0f\u8ddf\u8e2adistributed-tracing"},"3. \u4e86\u89e3\u5206\u5e03\u5f0f\u8ddf\u8e2a\uff08Distributed Tracing\uff09"),(0,a.kt)("p",null,"\u9996\u5148\u4e86\u89e3\u4e00\u4e0b\u5206\u5e03\u5f0f\u8ffd\u8e2a\u7684\u51e0\u4e2a\u57fa\u672c\u6982\u5ff5\u3002"),(0,a.kt)("h3",{id:"31-logs"},"3.1 Logs"),(0,a.kt)("p",null,"\u65e5\u5fd7\u662f\u7531\u670d\u52a1\u6216\u5176\u4ed6\u7ec4\u4ef6\u53d1\u51fa\u7684\u5e26\u6709\u65f6\u95f4\u6233\u7684\u6d88\u606f\u3002\u4e0d\u50cf\u8ddf\u8e2a\u4e00\u6837\uff0c\u5b83\u4eec\u4e0d\u4e00\u5b9a\u4e0e\u7279\u5b9a\u7684\u7528\u6237\u8bf7\u6c42\u6216\u4ea4\u6613\u76f8\u5173\u8054\u3002\u5b83\u4eec\u51e0\u4e4e\u5b58\u5728\u4e8e\u8f6f\u4ef6\u7684\u4efb\u4f55\u5730\u65b9\uff0c\u5728\u8fc7\u53bb\uff0c\u5f00\u53d1\u4eba\u5458\u548c\u8fd0\u7ef4\u4eba\u5458\u90fd\u975e\u5e38\u4f9d\u8d56\u5b83\u4eec\u6765\u5e2e\u52a9\u4ed6\u4eec\u7406\u89e3\u7cfb\u7edf\u7684\u884c\u4e3a\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"[2021-02-23T13:26:23.505892 #22473]  INFO -- : [6459ffe1-ea53-4044-aaa3-bf902868f730] mxsm-------------\n")),(0,a.kt)("p",null,"\u65e5\u5fd7\u4e5f\u662f\u6211\u4eec\u5e73\u65f6\u5f00\u53d1\u4e2d\u63a5\u89e6\u5230\u6700\u591a\u7684\u3002"),(0,a.kt)("h3",{id:"32-spans"},"3.2 Spans"),(0,a.kt)("p",null,"\u8de8\u5ea6(Span)\u4ee3\u8868\u4e00\u9879\u5de5\u4f5c\u6216\u64cd\u4f5c\u3002\u5b83\u8ddf\u8e2a\u8bf7\u6c42\u6267\u884c\u7684\u7279\u5b9a\u64cd\u4f5c\uff0c\u63cf\u7ed8\u4e86\u8be5\u64cd\u4f5c\u6267\u884c\u671f\u95f4\u53d1\u751f\u7684\u60c5\u51b5\u3002"),(0,a.kt)("p",null,"\u4e00\u4e2a\u8de8\u5ea6\u5305\u542b\u540d\u79f0\u3001\u4e0e\u65f6\u95f4\u76f8\u5173\u7684\u6570\u636e\u3001\u7ed3\u6784\u5316\u65e5\u5fd7\u6d88\u606f\u548c\u5176\u4ed6\u5143\u6570\u636e\uff08\u5373\u5c5e\u6027\uff09\uff0c\u4ee5\u63d0\u4f9b\u6709\u5173\u8ddf\u8e2a\u64cd\u4f5c\u7684\u4fe1\u606f\u3002"),(0,a.kt)("h3",{id:"33\u5206\u5e03\u5f0f\u8ddf\u8e2adistributed-traces"},"3.3\u5206\u5e03\u5f0f\u8ddf\u8e2a(Distributed Traces)"),(0,a.kt)("p",null,"\u5206\u5e03\u5f0f\u8ddf\u8e2a\uff0c\u66f4\u5e38\u88ab\u79f0\u4e3a\u8ddf\u8e2a\uff08Trace\uff09\uff0c\u8bb0\u5f55\u4e86\u7531\u5e94\u7528\u7a0b\u5e8f\u6216\u6700\u7ec8\u7528\u6237\u53d1\u8d77\u7684\u8bf7\u6c42\u5728\u591a\u670d\u52a1\u67b6\u6784\uff08\u5982\u5fae\u670d\u52a1\u548c\u65e0\u670d\u52a1\u5668\u5e94\u7528\u7a0b\u5e8f\uff09\u4e2d\u4f20\u64ad\u7684\u8def\u5f84\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u6ca1\u6709\u8ddf\u8e2a\uff0c\u5f88\u96be\u5b9a\u4f4d\u5206\u5e03\u5f0f\u7cfb\u7edf\u4e2d\u6027\u80fd\u95ee\u9898\u7684\u539f\u56e0\u3002\u5b83\u63d0\u9ad8\u4e86\u6211\u4eec\u7684\u5e94\u7528\u7a0b\u5e8f\u6216\u7cfb\u7edf\u5065\u5eb7\u72b6\u51b5\u7684\u53ef\u89c1\u6027\uff0c\u5e76\u8ba9\u6211\u4eec\u8c03\u8bd5\u672c\u5730\u96be\u4ee5\u590d\u5236\u7684\u884c\u4e3a\u3002\u5bf9\u4e8e\u5e38\u5e38\u51fa\u73b0\u975e\u786e\u5b9a\u6027\u95ee\u9898\u6216\u592a\u590d\u6742\u4ee5\u81f3\u4e8e\u65e0\u6cd5\u5728\u672c\u5730\u590d\u5236\u7684\u5206\u5e03\u5f0f\u7cfb\u7edf\u6765\u8bf4\uff0c\u8ddf\u8e2a\u662f\u5fc5\u4e0d\u53ef\u5c11\u7684\u3002"),(0,a.kt)("p",null,"\u8ddf\u8e2a\u901a\u8fc7\u5206\u89e3\u8bf7\u6c42\u5728\u5206\u5e03\u5f0f\u7cfb\u7edf\u4e2d\u6d41\u52a8\u65f6\u53d1\u751f\u7684\u4e8b\u60c5\uff0c\u4f7f\u8c03\u8bd5\u548c\u7406\u89e3\u5206\u5e03\u5f0f\u7cfb\u7edf\u53d8\u5f97\u4e0d\u90a3\u4e48\u4ee4\u4eba\u751f\u754f\u3002"),(0,a.kt)("p",null,"\u8ddf\u8e2a\u7531\u4e00\u4e2a\u6216\u591a\u4e2a\u8de8\u5ea6(Span)\u7ec4\u6210\u3002\u7b2c\u4e00\u4e2a\u8de8\u5ea6\u4ee3\u8868\u6839\u8de8\u5ea6(Root Span)\u3002\u6bcf\u4e2a\u6839\u8de8\u5ea6\u4ee3\u8868\u4e00\u4e2a\u8bf7\u6c42\u4ece\u5f00\u59cb\u5230\u7ed3\u675f\u7684\u8fc7\u7a0b\u3002\u5728\u7236\u7ea7\u4e0b\u9762\u7684\u8de8\u5ea6\u63d0\u4f9b\u4e86\u6709\u5173\u8bf7\u6c42\u671f\u95f4\u53d1\u751f\u7684\u8be6\u7ec6\u4e0a\u4e0b\u6587\uff08\u6216\u7ec4\u6210\u8bf7\u6c42\u7684\u6b65\u9aa4\uff09\u3002"),(0,a.kt)("p",null,"\u8bb8\u591a\u53ef\u89c2\u6d4b\u6027\u540e\u7aef\u5c06\u8ddf\u8e2a\u53ef\u89c6\u5316\u4e3a\u7011\u5e03\u56fe\uff0c\u53ef\u80fd\u5982\u4e0b\u6240\u793a\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/cloud-native/open-telemetry/trace-list.png",alt:"trace-list"})),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u56fe\u7247\u6765\u81easkywalking\u7684\u5b98\u7f51Demo\u7f51\u7ad9\u7684\u4e00\u4e2a\u8bf7\u6c42\u3002")),(0,a.kt)("p",null,"\u7011\u5e03\u56fe\u5c55\u793a\u4e86\u6839Span\u548c\u5176\u5b50Span\u4e4b\u95f4\u7684\u7236\u5b50\u5173\u7cfb\u3002\u5f53\u4e00\u4e2aSpan\u5c01\u88c5\u53e6\u4e00\u4e2aSpan\u65f6\uff0c\u8fd9\u4e5f\u8868\u793a\u4e00\u4e2a\u5d4c\u5957\u5173\u7cfb\u3002"),(0,a.kt)("h2",{id:"4-\u603b\u7ed3"},"4. \u603b\u7ed3"),(0,a.kt)("p",null,"\u53ef\u89c2\u5bdf\u6027\u662f\u6307\u5728\u4e91\u539f\u751f\u5e94\u7528\u7a0b\u5e8f\u4e2d\uff0c\u4f7f\u7528\u9002\u5f53\u7684\u5de5\u5177\u548c\u6280\u672f\u5bf9\u5e94\u7528\u7a0b\u5e8f\u8fdb\u884c\u76d1\u63a7\u3001\u65e5\u5fd7\u8bb0\u5f55\u3001\u8ddf\u8e2a\u3001\u5ea6\u91cf\u548c\u5206\u6790\uff0c\u4ee5\u83b7\u5f97\u5bf9\u5e94\u7528\u7a0b\u5e8f\u7684\u6df1\u5165\u4e86\u89e3\u3002\u4e91\u539f\u751f\u5e94\u7528\u7a0b\u5e8f\u901a\u5e38\u662f\u5206\u5e03\u5f0f\u7684\u3001\u53ef\u4f38\u7f29\u7684\u3001\u5bb9\u9519\u7684\uff0c\u56e0\u6b64\u9700\u8981\u7279\u6b8a\u7684\u53ef\u89c2\u5bdf\u6027\u5de5\u5177\u6765\u786e\u4fdd\u8fd9\u4e9b\u5e94\u7528\u7a0b\u5e8f\u7684\u6b63\u5e38\u8fd0\u884c\u548c\u7ef4\u62a4\u3002Cloud Native\u7684\u53ef\u89c2\u5bdf\u6027\u7684\u76ee\u6807\u662f\u5e2e\u52a9\u5f00\u53d1\u4eba\u5458\u548c\u8fd0\u7ef4\u4eba\u5458\u66f4\u597d\u5730\u7406\u89e3\u548c\u4f18\u5316\u5e94\u7528\u7a0b\u5e8f\uff0c\u63d0\u9ad8\u5e94\u7528\u7a0b\u5e8f\u7684\u53ef\u9760\u6027\u3001\u6027\u80fd\u548c\u5b89\u5168\u6027\u3002\u4e3a\u4e86\u5b9e\u73b0\u8fd9\u4e2a\u76ee\u6807\uff0c\u4e91\u539f\u751f\u5e94\u7528\u7a0b\u5e8f\u901a\u5e38\u4f7f\u7528\u65e5\u5fd7\u8bb0\u5f55\u3001\u6307\u6807\u6536\u96c6\u3001\u5206\u5e03\u5f0f\u8ddf\u8e2a\u3001\u4e8b\u4ef6\u5904\u7406\u548c\u53ef\u89c6\u5316\u7b49\u5de5\u5177\u548c\u6280\u672f\u6765\u76d1\u63a7\u548c\u5206\u6790\u5e94\u7528\u7a0b\u5e8f\u3002"))}m.isMDXComponent=!0}}]);