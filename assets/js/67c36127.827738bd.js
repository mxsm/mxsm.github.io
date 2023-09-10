"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[5950],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>S});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),c=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(i.Provider,{value:n},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,p=e.originalType,i=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=c(t),u=a,S=m["".concat(i,".").concat(u)]||m[u]||s[u]||p;return t?r.createElement(S,l(l({ref:n},d),{},{components:t})):r.createElement(S,l({ref:n},d))}));function S(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var p=t.length,l=new Array(p);l[0]=u;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o[m]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<p;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5371:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>s,frontMatter:()=>p,metadata:()=>o,toc:()=>c});var r=t(7462),a=(t(7294),t(3905));const p={title:"\u5b9e\u6218OpenTelemetry Trace\uff1a\u4f7f\u7528Java\u5b9e\u73b0\u5206\u5e03\u5f0f\u8ddf\u8e2a",linkTitle:"\u5b9e\u6218OpenTelemetry Trace\uff1a\u4f7f\u7528Java\u5b9e\u73b0\u5206\u5e03\u5f0f\u8ddf\u8e2a",weight:202305140011,description:"\u5b9e\u6218OpenTelemetry Trace\uff1a\u4f7f\u7528Java\u5b9e\u73b0\u5206\u5e03\u5f0f\u8ddf\u8e2a"},l=void 0,o={unversionedId:"cloud-native/open-telemetry/concept/open-telemetry-trace",id:"cloud-native/open-telemetry/concept/open-telemetry-trace",title:"\u5b9e\u6218OpenTelemetry Trace\uff1a\u4f7f\u7528Java\u5b9e\u73b0\u5206\u5e03\u5f0f\u8ddf\u8e2a",description:"\u5b9e\u6218OpenTelemetry Trace\uff1a\u4f7f\u7528Java\u5b9e\u73b0\u5206\u5e03\u5f0f\u8ddf\u8e2a",source:"@site/docs/cloud-native/open-telemetry/concept/05-open-telemetry-trace.md",sourceDirName:"cloud-native/open-telemetry/concept",slug:"/cloud-native/open-telemetry/concept/open-telemetry-trace",permalink:"/docs/cloud-native/open-telemetry/concept/open-telemetry-trace",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/cloud-native/open-telemetry/concept/05-open-telemetry-trace.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1694344731,formattedLastUpdatedAt:"Sep 10, 2023",sidebarPosition:5,frontMatter:{title:"\u5b9e\u6218OpenTelemetry Trace\uff1a\u4f7f\u7528Java\u5b9e\u73b0\u5206\u5e03\u5f0f\u8ddf\u8e2a",linkTitle:"\u5b9e\u6218OpenTelemetry Trace\uff1a\u4f7f\u7528Java\u5b9e\u73b0\u5206\u5e03\u5f0f\u8ddf\u8e2a",weight:202305140011,description:"\u5b9e\u6218OpenTelemetry Trace\uff1a\u4f7f\u7528Java\u5b9e\u73b0\u5206\u5e03\u5f0f\u8ddf\u8e2a"},sidebar:"OpenTelemetry",previous:{title:"OpenTelemetry-Metrics(\u6307\u6807)",permalink:"/docs/cloud-native/open-telemetry/concept/open-telemetry-metrics"}},i={},c=[{value:"1. \u4ec0\u4e48\u662fOpenTelemetry Trace\uff1f",id:"1-\u4ec0\u4e48\u662fopentelemetry-trace",level:2},{value:"2. OpenTelemetry Trace\u7684\u6838\u5fc3\u7ec4\u4ef6",id:"2-opentelemetry-trace\u7684\u6838\u5fc3\u7ec4\u4ef6",level:2},{value:"\u8de8\u5ea6\uff08Span\uff09",id:"\u8de8\u5ea6span",level:3},{value:"\u8de8\u5ea6\u4e0a\u4e0b\u6587\uff08Span Context\uff09",id:"\u8de8\u5ea6\u4e0a\u4e0b\u6587span-context",level:3},{value:"\u8de8\u5ea6\u5904\u7406\u5668\uff08Span Processor\uff09",id:"\u8de8\u5ea6\u5904\u7406\u5668span-processor",level:3},{value:"\u8de8\u5ea6\u5bfc\u51fa\u5668\uff08Span Exporter\uff09",id:"\u8de8\u5ea6\u5bfc\u51fa\u5668span-exporter",level:3},{value:"3. \u4f7f\u7528OpenTelemetry Trace\u5b9e\u73b0\u5206\u5e03\u5f0f\u8ddf\u8e2a",id:"3-\u4f7f\u7528opentelemetry-trace\u5b9e\u73b0\u5206\u5e03\u5f0f\u8ddf\u8e2a",level:2},{value:"\u6b65\u9aa41\uff1a\u6dfb\u52a0OpenTelemetry\u4f9d\u8d56\u9879",id:"\u6b65\u9aa41\u6dfb\u52a0opentelemetry\u4f9d\u8d56\u9879",level:3},{value:"\u6b65\u9aa42\uff1a\u521b\u5efaTracerProvider",id:"\u6b65\u9aa42\u521b\u5efatracerprovider",level:3},{value:"\u6b65\u9aa43\uff1a\u521b\u5efaSpan",id:"\u6b65\u9aa43\u521b\u5efaspan",level:3},{value:"\u6b65\u9aa44\uff1a\u521b\u5efaChild Span",id:"\u6b65\u9aa44\u521b\u5efachild-span",level:3},{value:"\u6b65\u9aa45\uff1a\u81ea\u5b9a\u4e49Span\u7684\u5c5e\u6027\u3001\u4e8b\u4ef6\u548c\u4e0a\u4e0b\u6587",id:"\u6b65\u9aa45\u81ea\u5b9a\u4e49span\u7684\u5c5e\u6027\u4e8b\u4ef6\u548c\u4e0a\u4e0b\u6587",level:3},{value:"\u6b65\u9aa46\uff1a\u5bfc\u51fa\u8ddf\u8e2a\u6570\u636e",id:"\u6b65\u9aa46\u5bfc\u51fa\u8ddf\u8e2a\u6570\u636e",level:3},{value:"4. \u5e38\u89c1\u7684\u95ee\u9898\u548c\u89e3\u51b3\u65b9\u6848",id:"4-\u5e38\u89c1\u7684\u95ee\u9898\u548c\u89e3\u51b3\u65b9\u6848",level:2},{value:"4.1 \u5982\u4f55\u5728\u4ee3\u7801\u4e2d\u8bbe\u7f6e\u91c7\u6837\u7387\uff1f",id:"41-\u5982\u4f55\u5728\u4ee3\u7801\u4e2d\u8bbe\u7f6e\u91c7\u6837\u7387",level:3},{value:"4.2 \u5982\u4f55\u81ea\u5b9a\u4e49 Span\uff1f",id:"42-\u5982\u4f55\u81ea\u5b9a\u4e49-span",level:3},{value:"4.3 \u5982\u4f55\u5904\u7406\u5f02\u6b65\u8c03\u7528\uff1f",id:"43-\u5982\u4f55\u5904\u7406\u5f02\u6b65\u8c03\u7528",level:3},{value:"4.4 \u5982\u4f55\u5728\u65e5\u5fd7\u4e2d\u8bb0\u5f55 Trace\uff1f",id:"44-\u5982\u4f55\u5728\u65e5\u5fd7\u4e2d\u8bb0\u5f55-trace",level:3},{value:"5.OpenTelemetry Trace\u5728\u8fdc\u7a0b\u4f20\u9012\u8ddf\u8e2a\u4fe1\u606f",id:"5opentelemetry-trace\u5728\u8fdc\u7a0b\u4f20\u9012\u8ddf\u8e2a\u4fe1\u606f",level:2},{value:"6. \u603b\u7ed3",id:"6-\u603b\u7ed3",level:2}],d={toc:c},m="wrapper";function s(e){let{components:n,...t}=e;return(0,a.kt)(m,(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"OpenTelemetry\u662f\u4e00\u6b3e\u5f00\u6e90\u7684\u5206\u5e03\u5f0f\u8ddf\u8e2a\u7cfb\u7edf\uff0c\u5b83\u63d0\u4f9b\u4e86\u4e00\u5957\u6807\u51c6\u7684API\u548cSDK\uff0c\u53ef\u4ee5\u5e2e\u52a9\u6211\u4eec\u6536\u96c6\u3001\u5b58\u50a8\u548c\u5206\u6790\u5206\u5e03\u5f0f\u7cfb\u7edf\u7684\u8ddf\u8e2a\u6570\u636e\u3002\u672c\u6587\u5c06\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528OpenTelemetry Trace\u6765\u5b9e\u73b0\u5206\u5e03\u5f0f\u7cfb\u7edf\u7684\u8ddf\u8e2a\uff0c\u5e76\u901a\u8fc7\u793a\u4f8b\u4ee3\u7801\u6765\u5c55\u793aOpenTelemetry Trace\u7684\u4f7f\u7528\u65b9\u5f0f\u3002"),(0,a.kt)("h2",{id:"1-\u4ec0\u4e48\u662fopentelemetry-trace"},"1. \u4ec0\u4e48\u662fOpenTelemetry Trace\uff1f"),(0,a.kt)("p",null,"OpenTelemetry Trace\u662f\u4e00\u79cd\u5206\u5e03\u5f0f\u8ddf\u8e2a\u6280\u672f\uff0c\u53ef\u4ee5\u5e2e\u52a9\u5f00\u53d1\u8005\u5728\u590d\u6742\u7684\u5e94\u7528\u7a0b\u5e8f\u4e2d\u8bc6\u522b\u548c\u89e3\u51b3\u95ee\u9898\u3002\u5b83\u5141\u8bb8\u5f00\u53d1\u8005\u5728\u8de8\u8d8a\u591a\u4e2a\u5e94\u7528\u7a0b\u5e8f\u548c\u670d\u52a1\u7684\u8bf7\u6c42\u8def\u5f84\u4e0a\u8ddf\u8e2a\u8bf7\u6c42\uff0c\u5e76\u63d0\u4f9b\u6709\u5173\u8fd9\u4e9b\u8bf7\u6c42\u7684\u6709\u7528\u4fe1\u606f\u3002"),(0,a.kt)("p",null,"OpenTelemetry Trace\u901a\u8fc7\u5728\u8bf7\u6c42\u8def\u5f84\u4e0a\u521b\u5efa\u4e00\u7cfb\u5217\u8de8\u5ea6\uff08Spans\uff09\u6765\u5b9e\u73b0\u8ddf\u8e2a\u3002\u6bcf\u4e2a\u8de8\u5ea6\u4ee3\u8868\u4e86\u8bf7\u6c42\u8def\u5f84\u4e0a\u7684\u4e00\u90e8\u5206\uff0c\u53ef\u4ee5\u5305\u542b\u4e00\u4e9b\u6709\u7528\u7684\u4fe1\u606f\uff0c\u4f8b\u5982\u8de8\u5ea6\u7684\u8d77\u59cb\u65f6\u95f4\u548c\u7ed3\u675f\u65f6\u95f4\u3001\u8de8\u5ea6\u7684\u6807\u7b7e\u7b49\u7b49\u3002\u8fd9\u4e9b\u4fe1\u606f\u53ef\u4ee5\u5e2e\u52a9\u5f00\u53d1\u8005\u8bc6\u522b\u6f5c\u5728\u7684\u6027\u80fd\u95ee\u9898\u548c\u6545\u969c\u3002"),(0,a.kt)("h2",{id:"2-opentelemetry-trace\u7684\u6838\u5fc3\u7ec4\u4ef6"},"2. OpenTelemetry Trace\u7684\u6838\u5fc3\u7ec4\u4ef6"),(0,a.kt)("p",null,"\u5728\u4f7f\u7528OpenTelemetry Trace\u65f6\uff0c\u6211\u4eec\u9700\u8981\u4e86\u89e3\u5176\u6838\u5fc3\u7ec4\u4ef6\u3002\u8fd9\u4e9b\u7ec4\u4ef6\u5305\u62ec\u8de8\u5ea6\uff08Span\uff09\u3001\u8de8\u5ea6\u4e0a\u4e0b\u6587\uff08Span Context\uff09\u3001\u8de8\u5ea6\u5904\u7406\u5668\uff08Span Processor\uff09\u548c\u8de8\u5ea6\u5bfc\u51fa\u5668\uff08Span Exporter\uff09\u3002"),(0,a.kt)("h3",{id:"\u8de8\u5ea6span"},"\u8de8\u5ea6\uff08Span\uff09"),(0,a.kt)("p",null,"\u8de8\u5ea6\u662fOpenTelemetry Trace\u7684\u6838\u5fc3\u6982\u5ff5\u4e4b\u4e00\uff0c\u5b83\u4ee3\u8868\u4e86\u8bf7\u6c42\u8def\u5f84\u4e0a\u7684\u4e00\u90e8\u5206\u3002\u6bcf\u4e2a\u8de8\u5ea6\u5305\u542b\u4e00\u4e9b\u5143\u6570\u636e\u548c\u4e8b\u4ef6\uff0c\u4f8b\u5982\u8de8\u5ea6\u7684\u540d\u79f0\u3001\u8d77\u59cb\u65f6\u95f4\u548c\u7ed3\u675f\u65f6\u95f4\u7b49\u7b49\u3002\u8de8\u5ea6\u53ef\u4ee5\u5d4c\u5957\uff0c\u4ece\u800c\u5f62\u6210\u4e00\u4e2a\u8de8\u5ea6\u6811\u3002"),(0,a.kt)("h3",{id:"\u8de8\u5ea6\u4e0a\u4e0b\u6587span-context"},"\u8de8\u5ea6\u4e0a\u4e0b\u6587\uff08Span Context\uff09"),(0,a.kt)("p",null,"\u8de8\u5ea6\u4e0a\u4e0b\u6587\u662f\u8de8\u5ea6\u7684\u5143\u6570\u636e\uff0c\u5305\u542b\u4e86\u8de8\u5ea6\u7684\u6807\u8bc6\u7b26\u548c\u5176\u4ed6\u4e00\u4e9b\u4fe1\u606f\u3002\u8de8\u5ea6\u4e0a\u4e0b\u6587\u5728\u8de8\u5ea6\u4e4b\u95f4\u4f20\u9012\uff0c\u4ee5\u4fbf\u5728\u5206\u5e03\u5f0f\u73af\u5883\u4e2d\u5bf9\u8bf7\u6c42\u8def\u5f84\u8fdb\u884c\u8ddf\u8e2a\u3002"),(0,a.kt)("h3",{id:"\u8de8\u5ea6\u5904\u7406\u5668span-processor"},"\u8de8\u5ea6\u5904\u7406\u5668\uff08Span Processor\uff09"),(0,a.kt)("p",null,"\u8de8\u5ea6\u5904\u7406\u5668\u7528\u4e8e\u5728\u672c\u5730\u5904\u7406\u8de8\u5ea6\u3002\u5b83\u53ef\u4ee5\u5bf9\u8de8\u5ea6\u8fdb\u884c\u4fee\u6539\u3001\u8fc7\u6ee4\u6216\u8bb0\u5f55\u7b49\u64cd\u4f5c\u3002"),(0,a.kt)("h3",{id:"\u8de8\u5ea6\u5bfc\u51fa\u5668span-exporter"},"\u8de8\u5ea6\u5bfc\u51fa\u5668\uff08Span Exporter\uff09"),(0,a.kt)("p",null,"\u8de8\u5ea6\u5bfc\u51fa\u5668\u7528\u4e8e\u5c06\u8de8\u5ea6\u6570\u636e\u53d1\u9001\u5230\u5916\u90e8\u7cfb\u7edf\uff0c\u4f8b\u5982\u65e5\u5fd7\u8bb0\u5f55\u7cfb\u7edf\u3001\u76d1\u63a7\u7cfb\u7edf\u7b49\u7b49\u3002"),(0,a.kt)("h2",{id:"3-\u4f7f\u7528opentelemetry-trace\u5b9e\u73b0\u5206\u5e03\u5f0f\u8ddf\u8e2a"},"3. \u4f7f\u7528OpenTelemetry Trace\u5b9e\u73b0\u5206\u5e03\u5f0f\u8ddf\u8e2a"),(0,a.kt)("p",null,"\u4e0b\u9762\u5c06\u4ecb\u7ecd\u5982\u4f55\u5728Java\u5e94\u7528\u7a0b\u5e8f\u4e2d\u4f7f\u7528OpenTelemetry Trace\u5b9e\u73b0\u5206\u5e03\u5f0f\u8ddf\u8e2a\u3002\u5177\u4f53\u6b65\u9aa4\u5982\u4e0b\uff1a"),(0,a.kt)("h3",{id:"\u6b65\u9aa41\u6dfb\u52a0opentelemetry\u4f9d\u8d56\u9879"},"\u6b65\u9aa41\uff1a\u6dfb\u52a0OpenTelemetry\u4f9d\u8d56\u9879"),(0,a.kt)("p",null,"\u9996\u5148\uff0c\u9700\u8981\u6dfb\u52a0OpenTelemetry Trace\u7684\u4f9d\u8d56\u9879\u3002\u4ee5\u4e0b\u662f\u4f7f\u7528Maven\u6dfb\u52a0OpenTelemetry Trace\u4f9d\u8d56\u9879\u7684\u793a\u4f8b\u4ee3\u7801\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>io.opentelemetry</groupId>\n    <artifactId>opentelemetry-api</artifactId>\n    <version>1.25.0</version>\n</dependency>\n<dependency>\n    <groupId>io.opentelemetry</groupId>\n    <artifactId>opentelemetry-exporter-otlp-trace</artifactId>\n    <version>1.25.0</version>\n</dependency>\n\n")),(0,a.kt)("p",null,"\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c\u6211\u4eec\u6dfb\u52a0\u4e86",(0,a.kt)("inlineCode",{parentName:"p"},"opentelemetry-api"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"opentelemetry-exporter-otlp-trace"),"\u4f9d\u8d56\u9879\u3002\u524d\u8005\u662fOpenTelemetry Trace\u7684\u6838\u5fc3\u5e93\uff0c\u540e\u8005\u662f\u5c06\u8ddf\u8e2a\u6570\u636e\u5bfc\u51fa\u5230OTLP\u6536\u96c6\u5668\u7684\u5e93\u3002"),(0,a.kt)("h3",{id:"\u6b65\u9aa42\u521b\u5efatracerprovider"},"\u6b65\u9aa42\uff1a\u521b\u5efaTracerProvider"),(0,a.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u9700\u8981\u521b\u5efa\u4e00\u4e2aTracerProvider\u5b9e\u4f8b\u3002TracerProvider\u7528\u4e8e\u521b\u5efaTracer\u5b9e\u4f8b\uff0c\u5e76\u5c06\u5176\u6ce8\u518c\u5230\u5168\u5c40\u7684OpenTelemetry Trace\u5b9e\u4f8b\u4e2d\u3002\u4ee5\u4e0b\u662f\u521b\u5efaTracerProvider\u7684\u793a\u4f8b\u4ee3\u7801\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"TracerProvider tracerProvider = OpenTelemetrySdk.getTracerProvider();\n")),(0,a.kt)("p",null,"\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c\u6211\u4eec\u83b7\u53d6\u4e86\u9ed8\u8ba4\u7684TracerProvider\u5b9e\u4f8b\u3002"),(0,a.kt)("h3",{id:"\u6b65\u9aa43\u521b\u5efaspan"},"\u6b65\u9aa43\uff1a\u521b\u5efaSpan"),(0,a.kt)("p",null,"\u4e00\u65e6\u521b\u5efa\u4e86TracerProvider\uff0c\u5c31\u53ef\u4ee5\u4f7f\u7528\u5b83\u521b\u5efaSpan\u3002\u4ee5\u4e0b\u662f\u521b\u5efaSpan\u7684\u793a\u4f8b\u4ee3\u7801\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'import io.opentelemetry.api.trace.Span;\nimport io.opentelemetry.api.trace.Tracer;\nimport io.opentelemetry.api.trace.TracerProvider;\nimport io.opentelemetry.api.GlobalOpenTelemetry;\n\nTracerProvider tracerProvider = GlobalOpenTelemetry.getTracerProvider();\nTracer tracer = tracerProvider.get("example-tracer");\n\nSpan span = tracer.spanBuilder("example-span").startSpan();\ntry {\n  // Span code here\n} finally {\n  span.end();\n}\n\n')),(0,a.kt)("p",null,"\u5728\u8fd9\u4e2a\u793a\u4f8b\u4e2d\uff0c\u6211\u4eec\u9996\u5148\u4f7f\u7528\u5168\u5c40\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"TracerProvider"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"Tracer"),"\u5b9e\u4f8b\u5316\u4e00\u4e2aSpan\u3002\u7136\u540e\uff0c\u6211\u4eec\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"SpanBuilder"),"\u6765\u5f00\u59cbSpan\uff0c\u5e76\u5728\u6267\u884c\u7ed3\u675f\u540e\u7ed3\u675fSpan\u3002\u5728\u8fd9\u91cc\uff0c\u6211\u4eec\u4f7f\u7528\u4e86",(0,a.kt)("inlineCode",{parentName:"p"},"try-finally"),"\u5757\u6765\u786e\u4fddSpan\u7684\u7ed3\u675f\u3002"),(0,a.kt)("h3",{id:"\u6b65\u9aa44\u521b\u5efachild-span"},"\u6b65\u9aa44\uff1a\u521b\u5efaChild Span"),(0,a.kt)("p",null,"\u6709\u65f6\u5019\uff0c\u6211\u4eec\u9700\u8981\u521b\u5efa\u4e00\u4e2a\u65b0\u7684Span\uff0c\u5e76\u5c06\u5176\u94fe\u63a5\u5230\u5f53\u524d\u7684Span\u3002\u4f8b\u5982\uff0c\u5728\u8c03\u7528\u4e0b\u6e38\u670d\u52a1\u65f6\uff0c\u53ef\u4ee5\u521b\u5efa\u4e00\u4e2a\u65b0\u7684Span\uff0c\u5e76\u5c06\u5176\u94fe\u63a5\u5230\u5f53\u524dSpan\u3002\u4ee5\u4e0b\u662f\u521b\u5efa\u548c\u94fe\u63a5Span\u7684\u793a\u4f8b\u4ee3\u7801\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'import io.opentelemetry.api.trace.Span;\nimport io.opentelemetry.api.trace.Tracer;\nimport io.opentelemetry.api.trace.TracerProvider;\nimport io.opentelemetry.api.GlobalOpenTelemetry;\n\nTracerProvider tracerProvider = GlobalOpenTelemetry.getTracerProvider();\nTracer tracer = tracerProvider.get("example-tracer");\n\nSpan parentSpan = tracer.spanBuilder("parent-span").startSpan();\ntry {\n  // Create child span\n  Span childSpan = tracer.spanBuilder("child-span")\n      .setParent(parentSpan)\n      .startSpan();\n  try {\n    // Child span code here\n  } finally {\n    childSpan.end();\n  }\n} finally {\n  parentSpan.end();\n}\n')),(0,a.kt)("p",null,"\u5728\u8fd9\u4e2a\u793a\u4f8b\u4e2d\uff0c\u6211\u4eec\u9996\u5148\u521b\u5efa\u4e86\u4e00\u4e2aParent Span\uff0c\u7136\u540e\u5728\u5b83\u7684\u4f5c\u7528\u57df\u5185\uff0c\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"SpanBuilder"),"\u521b\u5efa\u4e00\u4e2aChild Span\uff0c\u5e76\u5c06Parent Span\u8bbe\u7f6e\u4e3aChild Span\u7684\u7236Span\u3002\u6211\u4eec\u5728Child Span\u6267\u884c\u7ed3\u675f\u540e\u7ed3\u675f\u5b83\uff0c\u7136\u540e\u5728Parent Span\u6267\u884c\u7ed3\u675f\u540e\u7ed3\u675f\u5b83\u3002"),(0,a.kt)("h3",{id:"\u6b65\u9aa45\u81ea\u5b9a\u4e49span\u7684\u5c5e\u6027\u4e8b\u4ef6\u548c\u4e0a\u4e0b\u6587"},"\u6b65\u9aa45\uff1a\u81ea\u5b9a\u4e49Span\u7684\u5c5e\u6027\u3001\u4e8b\u4ef6\u548c\u4e0a\u4e0b\u6587"),(0,a.kt)("p",null,"\u5728OpenTelemetry Trace\u4e2d\uff0cSpan\u53ef\u4ee5\u643a\u5e26\u5404\u79cd\u5c5e\u6027\u548c\u4e8b\u4ef6\uff0c\u53ef\u4ee5\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"Span#setAttribute"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"Span#addEvent"),"\u65b9\u6cd5\u8fdb\u884c\u8bbe\u7f6e\u3002\u4f8b\u5982\uff0c\u53ef\u4ee5\u5c06HTTP\u8bf7\u6c42\u7684URL\u4f5c\u4e3aSpan\u7684\u5c5e\u6027\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'Span span = tracer.spanBuilder("http-request").startSpan();\nspan.setAttribute("http.url", "http://example.com");\n')),(0,a.kt)("p",null,"\u9664\u4e86\u8bbe\u7f6e\u5c5e\u6027\u548c\u4e8b\u4ef6\uff0c\u8fd8\u53ef\u4ee5\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"Span#setNoParent"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"Span#setParent"),"\u65b9\u6cd5\u8bbe\u7f6eSpan\u7684\u7236\u5b50\u5173\u7cfb\uff0c\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"Span#setSpanKind"),"\u65b9\u6cd5\u8bbe\u7f6eSpan\u7684\u7c7b\u578b\uff08\u4f8b\u5982",(0,a.kt)("inlineCode",{parentName:"p"},"SpanKind.SERVER"),"\u8868\u793a\u670d\u52a1\u7aefSpan\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"SpanKind.CLIENT"),"\u8868\u793a\u5ba2\u6237\u7aefSpan\uff09\uff0c\u4ee5\u53ca\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"Span#setSpanStatus"),"\u65b9\u6cd5\u8bbe\u7f6eSpan\u7684\u72b6\u6001\uff08\u4f8b\u5982",(0,a.kt)("inlineCode",{parentName:"p"},"Status.OK"),"\u8868\u793a\u6b63\u5e38\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"Status.ERROR"),"\u8868\u793a\u5f02\u5e38\uff09\u3002"),(0,a.kt)("p",null,"\u9664\u4e86\u4f7f\u7528Span\u7684API\uff0c\u8fd8\u53ef\u4ee5\u4f7f\u7528OpenTelemetry\u7684\u4e0a\u4e0b\u6587API\u6765\u5728Span\u4e4b\u95f4\u4f20\u9012\u6570\u636e\u3002\u4e0a\u4e0b\u6587\u53ef\u4ee5\u5b58\u50a8\u4e00\u4e9bSpan\u4e4b\u95f4\u5171\u4eab\u7684\u4fe1\u606f\uff0c\u4f8b\u5982\u8bf7\u6c42ID\u3001\u7528\u6237ID\u7b49\u3002OpenTelemetry\u63d0\u4f9b\u4e86",(0,a.kt)("inlineCode",{parentName:"p"},"Context"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"Baggage"),"\u4e24\u79cd\u4e0a\u4e0b\u6587\uff0c\u5176\u4e2d",(0,a.kt)("inlineCode",{parentName:"p"},"Context"),"\u662f\u4e00\u79cd\u8f7b\u91cf\u7ea7\u7684\u4e0a\u4e0b\u6587\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"Baggage"),"\u5219\u662f\u4e00\u79cd\u53ef\u4ee5\u643a\u5e26\u66f4\u591a\u6570\u636e\u7684\u4e0a\u4e0b\u6587\u3002\u53ef\u4ee5\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"Context#current"),"\u83b7\u53d6\u5f53\u524d\u7ebf\u7a0b\u7684\u4e0a\u4e0b\u6587\uff0c\u5e76\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"Context#with"),"\u65b9\u6cd5\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u5e26\u6709\u6307\u5b9a\u952e\u503c\u5bf9\u7684\u4e0a\u4e0b\u6587\u3002"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u662f\u4e00\u4e2a\u793a\u4f8b\uff0c\u5c55\u793a\u5982\u4f55\u5c06\u8bf7\u6c42ID\u5b58\u50a8\u5728\u4e0a\u4e0b\u6587\u4e2d\u5e76\u5728\u591a\u4e2aSpan\u4e4b\u95f4\u5171\u4eab\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'// \u521b\u5efa\u4e00\u4e2a\u65b0\u7684Span\uff0c\u8bbe\u7f6e\u8bf7\u6c42ID\u5c5e\u6027\nSpan span = tracer.spanBuilder("http-request").startSpan();\nString requestId = generateRequestId();\nspan.setAttribute("request.id", requestId);\n\n// \u5c06\u8bf7\u6c42ID\u5b58\u50a8\u5728\u4e0a\u4e0b\u6587\u4e2d\nContext contextWithRequestId = Context.current().with(SpanContextKey.KEY, requestId);\n\n// \u5728\u53e6\u4e00\u4e2aSpan\u4e2d\u83b7\u53d6\u8bf7\u6c42ID\u5c5e\u6027\nSpan anotherSpan = tracer.spanBuilder("another-span").startSpan();\nString requestIdFromContext = Baggage.current().getEntry(SpanContextKey.KEY).getValue();\nanotherSpan.setAttribute("request.id", requestIdFromContext);\n\n')),(0,a.kt)("p",null,"\u6ce8\u610f\uff0c\u8981\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"Baggage"),"\u6765\u83b7\u53d6\u4e0a\u4e0b\u6587\u4e2d\u7684\u952e\u503c\u5bf9\uff0c\u9700\u8981\u5148\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"Baggage#builder"),"\u65b9\u6cd5\u521b\u5efa\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"BaggageBuilder"),"\u5bf9\u8c61\uff0c\u5e76\u5728\u5176\u4e2d\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"BaggageBuilder#put"),"\u65b9\u6cd5\u8bbe\u7f6e\u952e\u503c\u5bf9\uff0c\u7136\u540e\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"BaggageBuilder#build"),"\u65b9\u6cd5\u521b\u5efa\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"Baggage"),"\u5bf9\u8c61\u3002\u53ef\u4ee5\u5c06",(0,a.kt)("inlineCode",{parentName:"p"},"Baggage"),"\u5bf9\u8c61\u5b58\u50a8\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"Context"),"\u4e2d\uff0c\u4e5f\u53ef\u4ee5\u5c06\u5176\u4f5c\u4e3aSpan\u7684\u5c5e\u6027\u5b58\u50a8\u3002"),(0,a.kt)("h3",{id:"\u6b65\u9aa46\u5bfc\u51fa\u8ddf\u8e2a\u6570\u636e"},"\u6b65\u9aa46\uff1a\u5bfc\u51fa\u8ddf\u8e2a\u6570\u636e"),(0,a.kt)("p",null,"\u6700\u540e\uff0c\u9700\u8981\u5c06\u8ddf\u8e2a\u6570\u636e\u5bfc\u51fa\u5230\u540e\u7aef\u6536\u96c6\u5668\u4e2d\u3002\u4ee5\u4e0b\u662f\u5c06\u8ddf\u8e2a\u6570\u636e\u5bfc\u51fa\u5230OTLP\u6536\u96c6\u5668\u7684\u793a\u4f8b\u4ee3\u7801\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'OtlpGrpcSpanExporter exporter = OtlpGrpcSpanExporter.builder()\n    .setEndpoint("otelcol:55680")\n    .build();\nSpanExporterSdk spanExporter = SpanExporterSdk.builder().addSpanProcessor(SimpleSpanProcessor.create(exporter)).build();\ntracerProvider = SdkTracerProvider.builder().addSpanProcessor(SimpleSpanProcessor.create(exporter)).build();\n\n')),(0,a.kt)("p",null,"\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c\u6211\u4eec\u521b\u5efa\u4e86\u4e00\u4e2aOtlpGrpcSpanExporter\u5b9e\u4f8b\uff0c\u5e76\u5c06\u5176\u914d\u7f6e\u4e3a\u5c06\u8ddf\u8e2a\u6570\u636e\u5bfc\u51fa\u5230\u6307\u5b9a\u7684OTLP\u6536\u96c6\u5668\u3002\u7136\u540e\uff0c\u6211\u4eec\u4f7f\u7528SpanExporterSdk\u548cTracerProviderSdk\u521b\u5efa\u4e86\u4e00\u4e2aSpanExporter\u5b9e\u4f8b\u548cTracerProvider\u5b9e\u4f8b\uff0c\u5e76\u5c06\u5176\u4e0eOtlpGrpcSpanExporter\u5b9e\u4f8b\u7ed1\u5b9a\u3002\u8fd9\u6837\uff0c\u5f53Span\u7ed3\u675f\u65f6\uff0cSpanExporter\u5c31\u4f1a\u81ea\u52a8\u5c06\u8ddf\u8e2a\u6570\u636e\u5bfc\u51fa\u5230OTLP\u6536\u96c6\u5668\u3002"),(0,a.kt)("h2",{id:"4-\u5e38\u89c1\u7684\u95ee\u9898\u548c\u89e3\u51b3\u65b9\u6848"},"4. \u5e38\u89c1\u7684\u95ee\u9898\u548c\u89e3\u51b3\u65b9\u6848"),(0,a.kt)("p",null,"\u5728\u5b9e\u73b0 OpenTelemetry Trace \u7684\u8fc7\u7a0b\u4e2d\uff0c\u8fd8\u6709\u4e00\u4e9b\u6ce8\u610f\u70b9\u9700\u8981\u6211\u4eec\u5173\u6ce8\uff0c\u4ee5\u4e0b\u662f\u4e00\u4e9b\u5e38\u89c1\u7684\u95ee\u9898\u548c\u89e3\u51b3\u65b9\u6848\uff1a"),(0,a.kt)("h3",{id:"41-\u5982\u4f55\u5728\u4ee3\u7801\u4e2d\u8bbe\u7f6e\u91c7\u6837\u7387"},"4.1 \u5982\u4f55\u5728\u4ee3\u7801\u4e2d\u8bbe\u7f6e\u91c7\u6837\u7387\uff1f"),(0,a.kt)("p",null,"\u5728 OpenTelemetry \u4e2d\uff0c\u91c7\u6837\u7387\u53ef\u4ee5\u901a\u8fc7 Sampler \u6765\u8fdb\u884c\u8bbe\u7f6e\u3002\u53ef\u4ee5\u9009\u62e9\u4f7f\u7528\u5e38\u89c1\u7684\u51e0\u79cd Sampler\uff0c\u6bd4\u5982 AlwaysOnSampler\u3001AlwaysOffSampler\u3001ProbabilitySampler \u7b49\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"// \u8bbe\u7f6e\u91c7\u6837\u7387\u4e3a 0.5\uff0c\u4e5f\u5c31\u662f\u91c7\u6837 50% \u7684\u8bf7\u6c42\nSampler sampler = ProbabilitySampler.create(0.5);\n\n// \u521d\u59cb\u5316 TracerProvider\uff0c\u5e76\u5c06 Sampler \u8bbe\u7f6e\u4e3a\u91c7\u6837\u5668\nTracerProvider tracerProvider = OpenTelemetrySdk.getTracerProviderBuilder()\n        .setSampler(sampler)\n        .build();\n\n")),(0,a.kt)("h3",{id:"42-\u5982\u4f55\u81ea\u5b9a\u4e49-span"},"4.2 \u5982\u4f55\u81ea\u5b9a\u4e49 Span\uff1f"),(0,a.kt)("p",null,"OpenTelemetry Trace \u4e2d\u7684 Span \u662f\u901a\u8fc7 Tracer \u6765\u521b\u5efa\u548c\u7ba1\u7406\u7684\u3002\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e Span \u7684\u5404\u79cd\u5c5e\u6027\u6765\u8bb0\u5f55\u66f4\u591a\u7684\u4fe1\u606f\uff0c\u6bd4\u5982\u8bbe\u7f6e Span \u7684\u540d\u79f0\u3001\u8bb0\u5f55\u4e8b\u4ef6\u7b49\u7b49\u3002\u4e0b\u9762\u662f\u4e00\u4e2a\u521b\u5efa\u81ea\u5b9a\u4e49 Span \u7684\u793a\u4f8b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'// \u83b7\u53d6 Tracer\nTracer tracer = OpenTelemetry.getGlobalTracerProvider().get("myapp", "1.0.0");\n\n// \u521b\u5efa\u4e00\u4e2a\u81ea\u5b9a\u4e49 Span\nSpan span = tracer.spanBuilder("my span")\n        .setAttribute("attribute1", "value1")\n        .startSpan();\n        \n// \u8bb0\u5f55\u4e8b\u4ef6\nspan.addEvent("event1");\n\n// \u7ed3\u675f Span\nspan.end();\n\n')),(0,a.kt)("h3",{id:"43-\u5982\u4f55\u5904\u7406\u5f02\u6b65\u8c03\u7528"},"4.3 \u5982\u4f55\u5904\u7406\u5f02\u6b65\u8c03\u7528\uff1f"),(0,a.kt)("p",null,"\u5728\u5904\u7406\u5f02\u6b65\u8c03\u7528\u65f6\uff0c\u53ef\u80fd\u4f1a\u51fa\u73b0\u8de8\u7ebf\u7a0b\u7684\u60c5\u51b5\u3002\u4e3a\u4e86\u80fd\u591f\u5728\u5f02\u6b65\u4efb\u52a1\u4e2d\u6b63\u786e\u5730\u8bb0\u5f55 Trace\uff0c\u9700\u8981\u4f7f\u7528 Context \u6765\u4f20\u9012 Span\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'// \u83b7\u53d6\u5f53\u524d\u7684 Span\nSpan span = Span.current();\n\n// \u5c06 Span \u6ce8\u5165\u5230 Context \u4e2d\nContext context = Context.current().with(Span.wrap(span));\n\n// \u5f02\u6b65\u4efb\u52a1\u4e2d\u83b7\u53d6 Span\nCompletableFuture<Void> future = CompletableFuture.runAsync(() -> {\n    // \u4ece Context \u4e2d\u83b7\u53d6 Span\n    Span span = Span.fromContext(context);\n\n    // \u5728\u5f02\u6b65\u4efb\u52a1\u4e2d\u8bb0\u5f55\u4e8b\u4ef6\n    span.addEvent("event in async task");\n});\n\n')),(0,a.kt)("h3",{id:"44-\u5982\u4f55\u5728\u65e5\u5fd7\u4e2d\u8bb0\u5f55-trace"},"4.4 \u5982\u4f55\u5728\u65e5\u5fd7\u4e2d\u8bb0\u5f55 Trace\uff1f"),(0,a.kt)("p",null,"\u5728\u5b9e\u9645\u7684\u5e94\u7528\u4e2d\uff0c\u6211\u4eec\u901a\u5e38\u4f1a\u5c06\u4e00\u4e9b\u5173\u952e\u4fe1\u606f\u8bb0\u5f55\u5728\u65e5\u5fd7\u4e2d\uff0c\u65b9\u4fbf\u67e5\u627e\u95ee\u9898\u3002\u5728 OpenTelemetry \u4e2d\uff0c\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e MDC \u6765\u5c06\u5f53\u524d\u7684 TraceId \u548c SpanId \u8bb0\u5f55\u5728\u65e5\u5fd7\u4e2d\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'// \u5c06 TraceId \u548c SpanId \u8bb0\u5f55\u5728 MDC \u4e2d\nMDC.put("traceId", Span.current().getSpanContext().getTraceIdAsHexString());\nMDC.put("spanId", Span.current().getSpanContext().getSpanIdAsHexString());\n\n// \u8bb0\u5f55\u65e5\u5fd7\nlog.info("this is a log message");\n\n// \u6e05\u9664 MDC \u4e2d\u7684\u4fe1\u606f\nMDC.clear();\n\n')),(0,a.kt)("p",null,"\u4ee5\u4e0a\u662f\u5728\u5b9e\u6218\u4e2d\u5e38\u89c1\u7684\u4e00\u4e9b\u95ee\u9898\u548c\u89e3\u51b3\u65b9\u6848\uff0c\u5e0c\u671b\u5bf9\u5927\u5bb6\u6709\u6240\u5e2e\u52a9\u3002\u5728\u4f7f\u7528 OpenTelemetry Trace \u7684\u8fc7\u7a0b\u4e2d\uff0c\u5982\u679c\u9047\u5230\u95ee\u9898\uff0c\u53ef\u4ee5\u53c2\u8003\u5b98\u65b9\u6587\u6863\u6216\u8005\u793e\u533a\u4e2d\u7684\u8d44\u6599\uff0c\u6216\u8005\u63d0\u95ee\u793e\u533a\u4e2d\u7684\u6210\u5458\u3002"),(0,a.kt)("h2",{id:"5opentelemetry-trace\u5728\u8fdc\u7a0b\u4f20\u9012\u8ddf\u8e2a\u4fe1\u606f"},"5.OpenTelemetry Trace\u5728\u8fdc\u7a0b\u4f20\u9012\u8ddf\u8e2a\u4fe1\u606f"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u662f\u4e00\u4e2aOpenTelemetry Trace\u5728\u8fdc\u7a0b\u4f20\u9012\u8ddf\u8e2a\u4fe1\u606f\u7684Java\u4ee3\u7801\u793a\u4f8b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'//\u521b\u5efaTracer\u5b9e\u4f8b\nTracer tracer = OpenTelemetry.getTracerProvider().get("example"); \n\n//\u521b\u5efa\u4e00\u4e2aSpan\nSpan span = tracer.spanBuilder("my span").startSpan();\n\ntry (Scope scope = span.makeCurrent()) {\n  //\u5728Span\u4e2d\u6267\u884c\u4e1a\u52a1\u4ee3\u7801\n  doSomeWork();\n  \n  //\u521b\u5efa\u4e00\u4e2a\u5b50Span\n  Span childSpan = tracer.spanBuilder("my child span").startSpan();\n\n  try (Scope childScope = childSpan.makeCurrent()) {\n    //\u5728\u5b50Span\u4e2d\u6267\u884c\u4e1a\u52a1\u4ee3\u7801\n    doSomeMoreWork();\n  } finally {\n    //\u7ed3\u675f\u5b50Span\n    childSpan.end();\n  }\n} finally {\n  //\u7ed3\u675fSpan\n  span.end();\n}\n\n//\u521b\u5efa\u4e00\u4e2a\u65b0\u7684Context\uff0c\u5e76\u5c06\u5f53\u524dSpan\u6dfb\u52a0\u5230\u5176\u4e2d\nContext context = Context.current().with(span);\n\n//\u5c06Context\u5e8f\u5217\u5316\u5e76\u53d1\u9001\u5230\u8fdc\u7a0b\u670d\u52a1\nsendContextToRemoteService(serializeContext(context));\n\n')),(0,a.kt)("p",null,"\u5728\u4e0a\u8ff0\u4ee3\u7801\u4e2d\uff0c\u6211\u4eec\u9996\u5148\u521b\u5efa\u4e86\u4e00\u4e2aTracer\u5b9e\u4f8b\u548c\u4e00\u4e2aSpan\uff0c\u5e76\u5728Span\u4e2d\u6267\u884c\u4e86\u4e1a\u52a1\u4ee3\u7801\u3002\u7136\u540e\uff0c\u6211\u4eec\u521b\u5efa\u4e86\u4e00\u4e2a\u5b50Span\uff0c\u5e76\u5728\u5176\u4e2d\u6267\u884c\u4e86\u66f4\u591a\u7684\u4e1a\u52a1\u4ee3\u7801\u3002\u6700\u540e\uff0c\u6211\u4eec\u5c06\u5f53\u524d\u7684Span\u6dfb\u52a0\u5230\u4e00\u4e2a\u65b0\u7684Context\u5bf9\u8c61\u4e2d\uff0c\u5e76\u5c06Context\u5e8f\u5217\u5316\u540e\u53d1\u9001\u5230\u8fdc\u7a0b\u670d\u52a1\u3002"),(0,a.kt)("p",null,"\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u5728\u5b9e\u9645\u4f7f\u7528\u4e2d\uff0c\u6211\u4eec\u9700\u8981\u6839\u636e\u5177\u4f53\u7684\u573a\u666f\u548c\u9700\u6c42\uff0c\u4f7f\u7528\u9002\u5f53\u7684\u65b9\u5f0f\u5c06Context\u4f20\u9012\u5230\u8fdc\u7a0b\u670d\u52a1\u4e2d\u3002\u4f8b\u5982\uff0c\u53ef\u4ee5\u4f7f\u7528HTTP\u8bf7\u6c42\u3001\u6d88\u606f\u961f\u5217\u3001\u5206\u5e03\u5f0f\u9501\u7b49\u65b9\u5f0f\u8fdb\u884c\u4f20\u9012\u3002"),(0,a.kt)("p",null,"\u53e6\u5916\uff0c\u9700\u8981\u6ce8\u610f\u5728\u4f20\u9012\u8ddf\u8e2a\u4fe1\u606f\u65f6\uff0c\u9700\u8981\u786e\u4fdd\u4f20\u9012\u7684\u6570\u636e\u91cf\u4e0d\u4f1a\u5bf9\u7f51\u7edc\u6027\u80fd\u548c\u4e1a\u52a1\u6027\u80fd\u9020\u6210\u8d1f\u9762\u5f71\u54cd\u3002\u53ef\u4ee5\u901a\u8fc7\u538b\u7f29\u3001\u91c7\u6837\u7b49\u65b9\u5f0f\u8fdb\u884c\u4f18\u5316\u548c\u63a7\u5236\u3002"),(0,a.kt)("h2",{id:"6-\u603b\u7ed3"},"6. \u603b\u7ed3"),(0,a.kt)("p",null,"\u5728\u672c\u6587\u4e2d\uff0c\u6211\u4eec\u4ecb\u7ecd\u4e86\u5982\u4f55\u4f7f\u7528OpenTelemetry Trace\u5728Java\u5e94\u7528\u7a0b\u5e8f\u4e2d\u5b9e\u73b0\u5206\u5e03\u5f0f\u8ddf\u8e2a\u3002\u6211\u4eec\u4e86\u89e3\u4e86OpenTelemetry Trace\u7684\u6838\u5fc3\u6982\u5ff5\uff0c\u5305\u62ecSpan\u3001Trace\u3001Tracer\u548cExporter\uff0c\u5e76\u6f14\u793a\u4e86\u5982\u4f55\u4f7f\u7528\u8fd9\u4e9b\u6982\u5ff5\u6765\u521b\u5efa\u548c\u94fe\u63a5Span\uff0c\u5e76\u5c06\u8ddf\u8e2a\u6570\u636e\u5bfc\u51fa\u5230\u540e\u7aef\u6536\u96c6\u5668\u4e2d\u3002\u5e0c\u671b\u8fd9\u7bc7\u6587\u7ae0\u80fd\u591f\u5e2e\u52a9\u8bfb\u8005\u66f4\u597d\u5730\u4e86\u89e3OpenTelemetry Trace\uff0c\u5e76\u5728\u5b9e\u9645\u9879\u76ee\u4e2d\u5e94\u7528\u5b83\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6211\u662f\u8682\u8681\u80cc\u5927\u8c61\uff0c\u6587\u7ae0\u5bf9\u4f60\u6709\u5e2e\u52a9\u7ed9",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mxsm/mxsm-website"},"\u9879\u76ee\u70b9\u4e2a\u2764"),"\u5173\u6ce8\u6211",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mxsm"},"GitHub:mxsm"),"\uff0c\u6587\u7ae0\u6709\u4e0d\u6b63\u786e\u7684\u5730\u65b9\u8bf7\u60a8\u65a7\u6b63,\u521b\u5efa",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mxsm/mxsm-website/issues"},"ISSUE\u63d0\u4ea4PR"),"~\u8c22\u8c22!")))}s.isMDXComponent=!0}}]);