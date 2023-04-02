"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[5727],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,p=e.originalType,i=e.parentName,m=a(e,["components","mdxType","originalType","parentName"]),u=c(n),y=l,d=u["".concat(i,".").concat(y)]||u[y]||s[y]||p;return n?r.createElement(d,o(o({ref:t},m),{},{components:n})):r.createElement(d,o({ref:t},m))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var p=n.length,o=new Array(p);o[0]=y;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a[u]="string"==typeof e?e:l,o[1]=a;for(var c=2;c<p;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},8927:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>s,frontMatter:()=>p,metadata:()=>a,toc:()=>c});var r=n(7462),l=(n(7294),n(3905));const p={title:"OpenTelemetry\u5165\u95e8-\u6982\u5ff5",linkTitle:"OpenTelemetry\u5165\u95e8-\u6982\u5ff5",weight:202303111427,description:"OpenTelemetry\u7684\u6982\u5ff5"},o=void 0,a={unversionedId:"cloud-native/open-telemetry/concept/open-telemetry-primer",id:"cloud-native/open-telemetry/concept/open-telemetry-primer",title:"OpenTelemetry\u5165\u95e8-\u6982\u5ff5",description:"OpenTelemetry\u7684\u6982\u5ff5",source:"@site/docs/cloud-native/open-telemetry/concept/02-open-telemetry-primer.md",sourceDirName:"cloud-native/open-telemetry/concept",slug:"/cloud-native/open-telemetry/concept/open-telemetry-primer",permalink:"/docs/cloud-native/open-telemetry/concept/open-telemetry-primer",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/cloud-native/open-telemetry/concept/02-open-telemetry-primer.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1680402643,formattedLastUpdatedAt:"Apr 2, 2023",sidebarPosition:2,frontMatter:{title:"OpenTelemetry\u5165\u95e8-\u6982\u5ff5",linkTitle:"OpenTelemetry\u5165\u95e8-\u6982\u5ff5",weight:202303111427,description:"OpenTelemetry\u7684\u6982\u5ff5"},sidebar:"OpenTelemetry",previous:{title:"\u53ef\u89c2\u5bdf\u6027\u5165\u95e8",permalink:"/docs/cloud-native/open-telemetry/concept/observability-primer"}},i={},c=[{value:"1. \u4ec0\u4e48\u662fOpenTelemetry",id:"1-\u4ec0\u4e48\u662fopentelemetry",level:2},{value:"2. \u57fa\u4e8eOpenTelemetry\u6211\u4eec\u80fd\u505a\u4ec0\u4e48",id:"2-\u57fa\u4e8eopentelemetry\u6211\u4eec\u80fd\u505a\u4ec0\u4e48",level:2}],m={toc:c},u="wrapper";function s(e){let{components:t,...n}=e;return(0,l.kt)(u,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"1-\u4ec0\u4e48\u662fopentelemetry"},"1. \u4ec0\u4e48\u662fOpenTelemetry"),(0,l.kt)("p",null,"\u5fae\u670d\u52a1\u67b6\u6784\u4f7f\u5f00\u53d1\u4eba\u5458\u80fd\u591f\u66f4\u5feb\u5730\u6784\u5efa\u548c\u53d1\u5e03\u8f6f\u4ef6\uff0c\u540c\u65f6\u5177\u6709\u66f4\u5927\u7684\u72ec\u7acb\u6027\uff0c\u56e0\u4e3a\u4ed6\u4eec\u4e0d\u518d\u53d7\u5236\u4e8e\u4e0e\u5355\u4f53\u67b6\u6784\u76f8\u5173\u7684\u7e41\u7410\u53d1\u5e03\u6d41\u7a0b\u3002\u968f\u7740\u8fd9\u4e9b\u73b0\u5728\u5206\u5e03\u5f0f\u7684\u7cfb\u7edf\u7684\u89c4\u6a21\u6269\u5927\uff0c\u5f00\u53d1\u4eba\u5458\u8d8a\u6765\u8d8a\u96be\u4ee5\u770b\u5230\u4ed6\u4eec\u81ea\u5df1\u7684\u670d\u52a1\u5982\u4f55\u4f9d\u8d56\u6216\u5f71\u54cd\u5176\u4ed6\u670d\u52a1\uff0c\u7279\u522b\u662f\u5728\u90e8\u7f72\u671f\u95f4\u6216\u505c\u673a\u671f\u95f4\uff0c\u901f\u5ea6\u548c\u51c6\u786e\u6027\u81f3\u5173\u91cd\u8981\u3002\u89c2\u6d4b\u6027\u4f7f\u5f00\u53d1\u4eba\u5458\u548c\u64cd\u4f5c\u5458\u90fd\u80fd\u591f\u83b7\u5f97\u5bf9\u5176\u7cfb\u7edf\u7684\u53ef\u89c1\u6027\u3002"),(0,l.kt)("p",null,"\u90a3\u4e48\u5462\uff1f\u4e3a\u4e86\u4f7f\u7cfb\u7edf\u5177\u6709\u53ef\u89c2\u6d4b\u6027\uff0c\u5fc5\u987b\u8fdb\u884c\u4eea\u8868\u5316\u3002\u4e5f\u5c31\u662f\u8bf4\uff0c\u4ee3\u7801\u5fc5\u987b\u53d1\u51fa\u8ddf\u8e2a\u3001\u5ea6\u91cf\u548c\u65e5\u5fd7\u3002\u7136\u540e\uff0c\u4eea\u8868\u5316\u6570\u636e\u5fc5\u987b\u53d1\u9001\u5230\u89c2\u6d4b\u6027\u540e\u7aef\u3002\u5e02\u573a\u4e0a\u6709\u8bb8\u591a\u89c2\u6d4b\u6027\u540e\u7aef\uff0c\u4ece\u81ea\u6258\u7ba1\u7684\u5f00\u6e90\u5de5\u5177\uff08\u4f8b\u5982Jaeger\u548cZipkin\uff09\u5230\u5546\u4e1aSaaS\u4ea7\u54c1\u4e0d\u4e00\u800c\u8db3\u3002"),(0,l.kt)("p",null,"\u8fc7\u53bb\uff0c\u4ee3\u7801\u7684\u4eea\u8868\u5316\u65b9\u5f0f\u4f1a\u6709\u6240\u4e0d\u540c\uff0c\u56e0\u4e3a\u6bcf\u4e2a\u89c2\u6d4b\u6027\u540e\u7aef\u90fd\u6709\u81ea\u5df1\u7684\u4eea\u8868\u5316\u5e93\u548c\u4ee3\u7406\u7a0b\u5e8f\uff0c\u7528\u4e8e\u5411\u5de5\u5177\u53d1\u51fa\u6570\u636e\u3002\u8fd9\u610f\u5473\u7740\u6ca1\u6709\u6807\u51c6\u5316\u7684\u6570\u636e\u683c\u5f0f\u7528\u4e8e\u5c06\u6570\u636e\u53d1\u9001\u5230\u89c2\u6d4b\u6027\u540e\u7aef\u3002\u6b64\u5916\uff0c\u5982\u679c\u516c\u53f8\u9009\u62e9\u5207\u6362\u89c2\u6d4b\u6027\u540e\u7aef\uff0c\u8fd9\u610f\u5473\u7740\u4ed6\u4eec\u5fc5\u987b\u91cd\u65b0\u4eea\u8868\u5316\u4ed6\u4eec\u7684\u4ee3\u7801\u5e76\u914d\u7f6e\u65b0\u4ee3\u7406\u7a0b\u5e8f\uff0c\u4ee5\u4fbf\u80fd\u591f\u5411\u65b0\u7684\u5de5\u5177\u53d1\u51fa\u9065\u6d4b\u6570\u636e\u3002"),(0,l.kt)("p",null,"\u7f3a\u4e4f\u6807\u51c6\u5316\u7684\u7ed3\u679c\u662f\u6570\u636e\u53ef\u79fb\u690d\u6027\u7684\u7f3a\u4e4f\u548c\u7528\u6237\u7ef4\u62a4\u4eea\u8868\u5316\u5e93\u7684\u8d1f\u62c5\u3002\u8ba4\u8bc6\u5230\u6807\u51c6\u5316\u7684\u5fc5\u8981\u6027\uff0c\u4e91\u793e\u533a\u8d70\u5230\u4e86\u4e00\u8d77\uff0c\u8bde\u751f\u4e86\u4e24\u4e2a\u5f00\u6e90\u9879\u76ee\uff1aOpenTracing\uff08\u4e00\u4e2aCloud Native Computing Foundation\uff08CNCF\uff09\u9879\u76ee\uff09\u548cOpenCensus\uff08\u4e00\u4e2aGoogle\u5f00\u6e90\u793e\u533a\u9879\u76ee\uff09\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"OpenTracing")," \u63d0\u4f9b\u4e86\u4e00\u4e2a\u4f9b\u5e94\u5546\u4e2d\u7acb\u7684API\uff0c\u7528\u4e8e\u5c06\u9065\u6d4b\u6570\u636e\u53d1\u9001\u5230\u89c2\u6d4b\u6027\u540e\u7aef\uff1b\u4f46\u662f\uff0c\u5b83\u4f9d\u8d56\u4e8e\u5f00\u53d1\u4eba\u5458\u5b9e\u73b0\u81ea\u5df1\u7684\u5e93\u4ee5\u7b26\u5408\u89c4\u8303\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"OpenCensus")," \u63d0\u4f9b\u4e86\u4e00\u7ec4\u7279\u5b9a\u8bed\u8a00\u7684\u5e93\uff0c\u5f00\u53d1\u4eba\u5458\u53ef\u4ee5\u4f7f\u7528\u8fd9\u4e9b\u5e93\u6765\u4eea\u8868\u5316\u4ed6\u4eec\u7684\u4ee3\u7801\uff0c\u5e76\u5c06\u5176\u53d1\u9001\u5230\u4ed6\u4eec\u652f\u6301\u7684\u4efb\u4f55\u4e00\u4e2a\u540e\u7aef\u3002"),(0,l.kt)("p",null,"\u7531\u4e8e\u4e0a\u9762\u8bf4\u7684\u79cd\u79cd\u539f\u56e0\u5c31\u50ac\u751f\u4e86",(0,l.kt)("strong",{parentName:"p"},"OpenTelemetry"),"\uff0c"),(0,l.kt)("p",null,"\u4e3a\u4e86\u62e5\u6709\u4e00\u4e2a\u5355\u4e00\u7684\u6807\u51c6\uff0cOpenCensus\u548cOpenTracing\u4e8e2019\u5e745\u6708\u5408\u5e76\uff0c\u5f62\u6210\u4e86OpenTelemetry\uff08\u7b80\u79f0OTel\uff09\u3002\u4f5c\u4e3aCNCF\u5b75\u5316\u9879\u76ee\uff0cOpenTelemetry\u7ed3\u5408\u4e86\u4e24\u8005\u7684\u4f18\u70b9\uff0c\u5e76\u6709\u6240\u521b\u65b0\u3002",(0,l.kt)("strong",{parentName:"p"},"OTel\u7684\u76ee\u6807\u662f\u63d0\u4f9b\u4e00\u7ec4\u6807\u51c6\u5316\u7684\u4f9b\u5e94\u5546\u4e2d\u7acb\u7684SDK\u3001API\u548c\u5de5\u5177\uff0c\u7528\u4e8e\u5c06\u6570\u636e\u6444\u5165\u3001\u8f6c\u6362\u548c\u53d1\u9001\u5230\u89c2\u6d4b\u6027\u540e\u7aef"),"\uff08\u5373\u5f00\u6e90\u6216\u5546\u4e1a\u4f9b\u5e94\u5546\uff09\u3002"),(0,l.kt)("h2",{id:"2-\u57fa\u4e8eopentelemetry\u6211\u4eec\u80fd\u505a\u4ec0\u4e48"},"2. \u57fa\u4e8eOpenTelemetry\u6211\u4eec\u80fd\u505a\u4ec0\u4e48"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6bcf\u79cd\u8bed\u8a00\u4e00\u4e2a\u4f9b\u5e94\u5546\u4e2d\u7acb\u7684\u4eea\u5668\u5e93\uff0c\u652f\u6301\u81ea\u52a8\u548c\u624b\u52a8\u4eea\u5668\u5316\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u4e00\u4e2a\u4f9b\u5e94\u5546\u4e2d\u7acb\u7684\u6536\u96c6\u5668\u4e8c\u8fdb\u5236\u6587\u4ef6\uff0c\u53ef\u901a\u8fc7\u591a\u79cd\u65b9\u5f0f\u90e8\u7f72\u3002 "),(0,l.kt)("li",{parentName:"ul"},"\u7aef\u5230\u7aef\u5b9e\u73b0\uff0c\u7528\u4e8e\u751f\u6210\u3001\u53d1\u51fa\u3001\u6536\u96c6\u3001\u5904\u7406\u548c\u5bfc\u51fa\u9065\u6d4b\u6570\u636e\u3002 "),(0,l.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u914d\u7f6e\u5e76\u884c\u53d1\u9001\u6570\u636e\u5230\u591a\u4e2a\u76ee\u7684\u5730\u7684\u5b8c\u5168\u63a7\u5236\u6743\u3002 "),(0,l.kt)("li",{parentName:"ul"},"\u5f00\u653e\u7684\u6807\u51c6\u8bed\u4e49\u7ea6\u5b9a\uff0c\u786e\u4fdd\u4f9b\u5e94\u5546\u4e2d\u7acb\u7684\u6570\u636e\u6536\u96c6\u3002 "),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301\u591a\u4e2a\u4e0a\u4e0b\u6587\u4f20\u64ad\u683c\u5f0f\u5e76\u884c\u4f7f\u7528\uff0c\u4ee5\u534f\u52a9\u968f\u7740\u6807\u51c6\u7684\u53d1\u5c55\u800c\u8fdb\u884c\u8fc1\u79fb\u3002 "),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u7ba1\u60a8\u7684\u89c2\u6d4b\u65c5\u7a0b\u5904\u4e8e\u4f55\u79cd\u9636\u6bb5\uff0c\u90fd\u6709\u524d\u8fdb\u7684\u9053\u8def\u3002 "),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301\u5404\u79cd\u5f00\u6e90\u548c\u5546\u4e1a\u534f\u8bae\u3001\u683c\u5f0f\u548c\u4e0a\u4e0b\u6587\u4f20\u64ad\u673a\u5236\uff0c\u5e76\u4e3aOpenTracing\u548cOpenCensus\u9879\u76ee\u63d0\u4f9b\u4e86\u6865\u63a5\uff0c\u56e0\u6b64\u91c7\u7528OpenTelemetry\u975e\u5e38\u5bb9\u6613\u3002")))}s.isMDXComponent=!0}}]);