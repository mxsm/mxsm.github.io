"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[3870],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>v});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),u=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=u(a),d=r,v=s["".concat(i,".").concat(d)]||s[d]||m[d]||l;return a?n.createElement(v,c(c({ref:t},p),{},{components:a})):n.createElement(v,c({ref:t},p))}));function v(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,c=new Array(l);c[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[s]="string"==typeof e?e:r,c[1]=o;for(var u=2;u<l;u++)c[u]=a[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1120:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var n=a(7462),r=(a(7294),a(3905));const l={title:"Java\u5e76\u53d1\u7f16\u7a0b\u4e2d\u7684\u4e09\u4e2a\u6982\u5ff5",date:new Date("2019-03-18T00:00:00.000Z")},c=void 0,o={unversionedId:"java/java-se/concurrencemultithreading/java-concurrency-three-concept",id:"java/java-se/concurrencemultithreading/java-concurrency-three-concept",title:"Java\u5e76\u53d1\u7f16\u7a0b\u4e2d\u7684\u4e09\u4e2a\u6982\u5ff5",description:"1 \u539f\u5b50\u6027",source:"@site/docs/java/java-se/concurrencemultithreading/java-concurrency-three-concept.md",sourceDirName:"java/java-se/concurrencemultithreading",slug:"/java/java-se/concurrencemultithreading/java-concurrency-three-concept",permalink:"/docs/java/java-se/concurrencemultithreading/java-concurrency-three-concept",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/java/java-se/concurrencemultithreading/java-concurrency-three-concept.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1674915160,formattedLastUpdatedAt:"Jan 28, 2023",frontMatter:{title:"Java\u5e76\u53d1\u7f16\u7a0b\u4e2d\u7684\u4e09\u4e2a\u6982\u5ff5",date:"2019-03-18T00:00:00.000Z"},sidebar:"javase",previous:{title:"Callable\u4e0eRunnable\u7684\u533a\u522b\u4f60\u77e5\u9053\u5417\uff1f",permalink:"/docs/java/java-se/concurrencemultithreading/callable-and-runnable"},next:{title:"\u4e3a\u4ec0\u4e48\u4e0d\u5efa\u8bae\u4f7f\u7528Executors\u521b\u5efa\u7ebf\u7a0b\u6c60\uff1f",permalink:"/docs/java/java-se/concurrencemultithreading/not-suggest-use-exectors"}},i={},u=[{value:"1 \u539f\u5b50\u6027",id:"1-\u539f\u5b50\u6027",level:3},{value:"Java\u5185\u5b58\u6a21\u578b\u4e2d\u7684\u516b\u79cd\u64cd\u4f5c\u90fd\u662f\u539f\u5b50\u64cd\u4f5c",id:"java\u5185\u5b58\u6a21\u578b\u4e2d\u7684\u516b\u79cd\u64cd\u4f5c\u90fd\u662f\u539f\u5b50\u64cd\u4f5c",level:4},{value:"2 \u53ef\u89c1\u6027",id:"2-\u53ef\u89c1\u6027",level:3},{value:"3 \u6709\u5e8f\u6027",id:"3-\u6709\u5e8f\u6027",level:3}],p={toc:u};function s(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"1-\u539f\u5b50\u6027"},"1 \u539f\u5b50\u6027"),(0,r.kt)("p",null,"\u4e00\u4e2a\u64cd\u4f5c\u6216\u8005\u591a\u4e2a\u64cd\u4f5c\uff0c\u8981\u4e48\u5168\u90e8\u6267\u884c\u4e14\u6267\u884c\u7684\u8fc7\u7a0b\u4e2d\u4e0d\u4f1a\u88ab\u4efb\u4f55\u56e0\u7d20\u6253\u65ad\uff0c\u8981\u4e48\u90fd\u4e0d\u6267\u884c\u3002\u7ffb\u8bd1\u4e00\u4e0b\u5c31\u662f\uff1a\u8981\u4e48\u6267\u884c\u8981\u4e48\u4e0d\u6267\u884c\u3002"),(0,r.kt)("p",null,"\u94f6\u884c\u8f6c\u8d26\u95ee\u9898\uff1aA\u7ed9B\u8f6c\u8d2610000"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"A  \u8d26\u53f7\u51cf\u5c11 10000"),(0,r.kt)("li",{parentName:"ol"},"B \u8d26\u53f7\u589e\u52a0 10000")),(0,r.kt)("p",null,"\u8fd9\u4e24\u4e2a\u64cd\u4f5c\u5fc5\u987b\u662f\u539f\u5b50\u64cd\u4f5c\u4ea4\u6613\u624d\u80fd\u6b63\u5e38"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Java\u4e2d\u7684\u7b80\u5355\u539f\u5b50\u64cd\u4f5c\uff1a\u7b80\u5355\u7684\u8bfb\u53d6\u3001\u8d4b\u503c\uff08\u800c\u4e14\u5fc5\u987b\u662f\u5c06\u6570\u5b57","[\u57fa\u672c\u6570\u636e\u7c7b\u578b]","\u8d4b\u503c\u7ed9\u67d0\u4e2a\u53d8\u91cf\uff0c\u53d8\u91cf\u4e4b\u95f4\u7684\u76f8\u4e92\u8d4b\u503c\u4e0d\u662f\u539f\u5b50\u64cd\u4f5c\uff09\u624d\u662f\u539f\u5b50\u64cd\u4f5c")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Java\u4fdd\u8bc1\u539f\u5b50\u6027\u7684\u65b9\u6cd5:synchronized \u548cLock\u5173\u952e\u5b57\uff0c\u5229\u7528\u540c\u6b65\u9501\u4fdd\u8bc1\u4e00\u6b21\u53ea\u80fd\u4e00\u4e2a\u7ebf\u7a0b\u5bf9\u53d8\u91cf\u8fdb\u884c\u64cd\u4f5c\u3002")),(0,r.kt)("h4",{id:"java\u5185\u5b58\u6a21\u578b\u4e2d\u7684\u516b\u79cd\u64cd\u4f5c\u90fd\u662f\u539f\u5b50\u64cd\u4f5c"},"Java\u5185\u5b58\u6a21\u578b\u4e2d\u7684\u516b\u79cd\u64cd\u4f5c\u90fd\u662f\u539f\u5b50\u64cd\u4f5c"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"lock(\u9501\u5b9a)\uff1a\u4f5c\u7528\u4e8e\u4e3b\u5185\u5b58\u4e2d\u7684\u53d8\u91cf\uff0c\u5b83\u628a\u4e00\u4e2a\u53d8\u91cf\u6807\u8bc6\u4e3a\u4e00\u4e2a\u7ebf\u7a0b\u72ec\u5360\u7684\u72b6\u6001"),(0,r.kt)("li",{parentName:"ul"},"unlock(\u89e3\u9501):\u4f5c\u7528\u4e8e\u4e3b\u5185\u5b58\u4e2d\u7684\u53d8\u91cf\uff0c\u5b83\u628a\u4e00\u4e2a\u5904\u4e8e\u9501\u5b9a\u72b6\u6001\u7684\u53d8\u91cf\u91ca\u653e\u51fa\u6765\uff0c\u91ca\u653e\u540e\u7684\u53d8\u91cf\u624d\u53ef\u4ee5\u88ab\u5176\u4ed6\u7ebf\u7a0b\u9501\u5b9a"),(0,r.kt)("li",{parentName:"ul"},"read\uff08\u8bfb\u53d6\uff09\uff1a\u4f5c\u7528\u4e8e\u4e3b\u5185\u5b58\u7684\u53d8\u91cf\uff0c\u5b83\u628a\u4e00\u4e2a\u53d8\u91cf\u7684\u503c\u4ece\u4e3b\u5185\u5b58\u4f20\u8f93\u5230\u7ebf\u7a0b\u7684\u5de5\u4f5c\u5185\u5b58\u4e2d\uff0c\u4ee5\u4fbf\u540e\u9762\u7684load\u52a8\u4f5c\u4f7f\u7528"),(0,r.kt)("li",{parentName:"ul"},"load\uff08\u8f7d\u5165\uff09\uff1a\u4f5c\u7528\u4e8e\u5de5\u4f5c\u5185\u5b58\u4e2d\u7684\u53d8\u91cf\uff0c\u5b83\u628aread\u64cd\u4f5c\u4ece\u4e3b\u5185\u5b58\u4e2d\u5f97\u5230\u7684\u53d8\u91cf\u503c\u653e\u5165\u5de5\u4f5c\u5185\u5b58\u4e2d\u7684\u53d8\u91cf\u526f\u672c"),(0,r.kt)("li",{parentName:"ul"},"use\uff08\u4f7f\u7528\uff09\uff1a\u4f5c\u7528\u4e8e\u5de5\u4f5c\u5185\u5b58\u4e2d\u7684\u53d8\u91cf\uff0c\u5b83\u628a\u5de5\u4f5c\u5185\u5b58\u4e2d\u4e00\u4e2a\u53d8\u91cf\u7684\u503c\u4f20\u9012\u7ed9\u6267\u884c\u5f15\u64ce\uff0c\u6bcf\u5f53\u865a\u62df\u673a\u9047\u5230\u4e00\u4e2a\u9700\u8981\u4f7f\u7528\u5230\u53d8\u91cf\u7684\u503c\u7684\u5b57\u8282\u7801\u6307\u4ee4\u65f6\u5c06\u4f1a\u6267\u884c\u8fd9\u4e2a\u64cd\u4f5c"),(0,r.kt)("li",{parentName:"ul"},"assign\uff08\u8d4b\u503c\uff09\uff1a\u4f5c\u7528\u4e8e\u5de5\u4f5c\u5185\u5b58\u4e2d\u7684\u53d8\u91cf\uff0c\u5b83\u628a\u4e00\u4e2a\u4ece\u6267\u884c\u5f15\u64ce\u63a5\u6536\u5230\u7684\u503c\u8d4b\u7ed9\u5de5\u4f5c\u5185\u5b58\u7684\u53d8\u91cf\uff0c\u6bcf\u5f53\u865a\u62df\u673a\u9047\u5230\u4e00\u4e2a\u7ed9\u53d8\u91cf\u8d4b\u503c\u7684\u5b57\u8282\u7801\u6307\u4ee4\u65f6\u6267\u884c\u8fd9\u4e2a\u64cd\u4f5c"),(0,r.kt)("li",{parentName:"ul"},"store\uff08\u5b58\u50a8\uff09\uff1a\u4f5c\u7528\u4e8e\u5de5\u4f5c\u5185\u5b58\u7684\u53d8\u91cf\uff0c\u5b83\u628a\u5de5\u4f5c\u5185\u5b58\u4e2d\u4e00\u4e2a\u53d8\u91cf\u7684\u503c\u4f20\u9001\u7ed9\u4e3b\u5185\u5b58\u4e2d\u4ee5\u4fbf\u968f\u540e\u7684write\u64cd\u4f5c\u4f7f\u7528"),(0,r.kt)("li",{parentName:"ul"},"write\uff08\u64cd\u4f5c\uff09\uff1a\u4f5c\u7528\u4e8e\u4e3b\u5185\u5b58\u7684\u53d8\u91cf\uff0c\u5b83\u628astore\u64cd\u4f5c\u4ece\u5de5\u4f5c\u5185\u5b58\u4e2d\u5f97\u5230\u7684\u53d8\u91cf\u7684\u503c\u653e\u5165\u4e3b\u5185\u5b58\u7684\u53d8\u91cf\u4e2d")),(0,r.kt)("h3",{id:"2-\u53ef\u89c1\u6027"},"2 \u53ef\u89c1\u6027"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u53ef\u89c1\u6027\uff1a\u4e00\u4e2a\u7ebf\u7a0b\u5bf9\u5171\u4eab\u53d8\u91cf\u503c\u7684\u4fee\u6539,\u80fd\u591f\u53ca\u65f6\u5730\u88ab\u5176\u4ed6\u7ebf\u7a0b\u770b\u5230"),(0,r.kt)("li",{parentName:"ul"},"\u5171\u4eab\u53d8\u91cf\uff1a\u5982\u679c\u4e00\u4e2a\u53d8\u91cf\u5728\u591a\u4e2a\u7ebf\u7a0b\u7684\u5de5\u4f5c\u5185\u5b58\u4e2d\u90fd\u5b58\u5728\u526f\u672c,\u90a3\u4e48\u8fd9\u4e2a\u53d8\u91cf\u5c31\u662f\u8fd9\u51e0\u4e2a\u7ebf\u7a0b\u7684\u5171\u4eab\u53d8\u91cf(\u5b9e\u4f8b\u7684\u6210\u5458\u53d8\u91cf\u5728\u65b9\u6cd5\u4e2d\u4f7f\u7528\uff0c\u65b9\u6cd5\u88ab\u591a\u4e2a\u7ebf\u7a0b\u8c03\u7528).")),(0,r.kt)("h3",{id:"3-\u6709\u5e8f\u6027"},"3 \u6709\u5e8f\u6027"),(0,r.kt)("p",null,"\u5373\u7a0b\u5e8f\u6267\u884c\u7684\u987a\u5e8f\u6309\u7167\u4ee3\u7801\u7684\u5148\u540e\u987a\u5e8f\u6267\u884c\u3002"),(0,r.kt)("p",null,"\u6307\u4ee4\u91cd\u6392\uff1a\u4e00\u822c\u6765\u8bf4\uff0c\u5904\u7406\u5668\u4e3a\u4e86\u63d0\u9ad8\u7a0b\u5e8f\u8fd0\u884c\u6548\u7387\uff0c\u53ef\u80fd\u4f1a\u5bf9\u8f93\u5165\u4ee3\u7801\u8fdb\u884c\u4f18\u5316\uff0c\u5b83\u4e0d\u4fdd\u8bc1\u7a0b\u5e8f\u4e2d\u5404\u4e2a\u8bed\u53e5\u7684\u6267\u884c\u5148\u540e\u987a\u5e8f\u540c\u4ee3\u7801\u4e2d\u7684\u987a\u5e8f\u4e00\u81f4\uff0c\u4f46\u662f\u5b83\u4f1a\u4fdd\u8bc1\u7a0b\u5e8f\u6700\u7ec8\u6267\u884c\u7ed3\u679c\u548c\u4ee3\u7801\u987a\u5e8f\u6267\u884c\u7684\u7ed3\u679c\u662f\u4e00\u81f4\u7684"),(0,r.kt)("p",null,"\u4f8b\u5b50\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"int a = 10;    //\u8bed\u53e51\nint r = 2;    //\u8bed\u53e52\na = a + 3;    //\u8bed\u53e53\nr = a*a;     //\u8bed\u53e54\n")),(0,r.kt)("p",null,"\u4e0a\u9762\u4ee3\u7801\u4e5f\u53ef\u4ee5\u8fd9\u6837\u6267\u884c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"int r = 2;    //\u8bed\u53e52\nint a = 10;    //\u8bed\u53e51\na = a + 3;    //\u8bed\u53e53\nr = a*a;     //\u8bed\u53e54\n")),(0,r.kt)("p",null,"\u4f46\u662f\u4e0d\u80fd\u8fd9\u6837\u6267\u884c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"int r = 2;    //\u8bed\u53e52\nint a = 10;    //\u8bed\u53e51\nr = a*a;     //\u8bed\u53e54\na = a + 3;    //\u8bed\u53e53\n")),(0,r.kt)("p",null,"\u8fd9\u6837\u6307\u4ee4\u91cd\u6392\u540e\u7a0b\u5e8f\u6700\u7ec8\u6267\u884c\u7684\u7ed3\u679c\u548c\u4ee3\u7801\u987a\u5e8f\u6267\u884c\u7684\u7ed3\u679c\u4e0d\u76f8\u540c"))}s.isMDXComponent=!0}}]);