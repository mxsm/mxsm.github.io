"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[6675],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,k=m["".concat(i,".").concat(d)]||m[d]||c[d]||l;return n?r.createElement(k,s(s({ref:t},p),{},{components:n})):r.createElement(k,s({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,s=new Array(l);s[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[m]="string"==typeof e?e:a,s[1]=o;for(var u=2;u<l;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3488:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const l={title:"Rust\u661f\u53f7(*)\u7684\u4f5c\u7528",linkTitle:"Rust\u661f\u53f7(*)\u7684\u4f5c\u7528",sidebar_label:"Rust\u661f\u53f7(*)\u7684\u4f5c\u7528",weight:202309091403,description:"Rust\u661f\u53f7(*)\u7684\u4f5c\u7528"},s=void 0,o={unversionedId:"rust/rust-learn/summary/asterisk-function",id:"rust/rust-learn/summary/asterisk-function",title:"Rust\u661f\u53f7(*)\u7684\u4f5c\u7528",description:"Rust\u661f\u53f7(*)\u7684\u4f5c\u7528",source:"@site/docs/rust/rust-learn/summary/01-asterisk-function.md",sourceDirName:"rust/rust-learn/summary",slug:"/rust/rust-learn/summary/asterisk-function",permalink:"/docs/rust/rust-learn/summary/asterisk-function",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/rust/rust-learn/summary/01-asterisk-function.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1694344731,formattedLastUpdatedAt:"Sep 10, 2023",sidebarPosition:1,frontMatter:{title:"Rust\u661f\u53f7(*)\u7684\u4f5c\u7528",linkTitle:"Rust\u661f\u53f7(*)\u7684\u4f5c\u7528",sidebar_label:"Rust\u661f\u53f7(*)\u7684\u4f5c\u7528",weight:202309091403,description:"Rust\u661f\u53f7(*)\u7684\u4f5c\u7528"},sidebar:"rustLearn",previous:{title:"Understanding Ownership",permalink:"/docs/rust/rust-learn/summary"},next:{title:"Rust ref \u548c & \u4f7f\u7528\u8be6\u89e3",permalink:"/docs/rust/rust-learn/summary/ref-useage-explantion"}},i={},u=[{value:"1.<strong>\u89e3\u5f15\u7528\u6307\u9488</strong>",id:"1\u89e3\u5f15\u7528\u6307\u9488",level:2},{value:"2.<strong>\u7c7b\u578b\u6ce8\u89e3</strong>",id:"2\u7c7b\u578b\u6ce8\u89e3",level:2},{value:"3. <strong>\u521b\u5efa\u539f\u59cb(raw)\u6307\u9488</strong>",id:"3-\u521b\u5efa\u539f\u59cbraw\u6307\u9488",level:2},{value:"<strong>\u5f15\u7528\u89e3\u5f15\u7528 (<code>&amp;T</code> \u548c <code>&amp;mut T</code>)</strong>",id:"\u5f15\u7528\u89e3\u5f15\u7528-t-\u548c-mut-t",level:3},{value:"4.<strong>\u4e58\u6cd5\u8fd0\u7b97\u7b26</strong>",id:"4\u4e58\u6cd5\u8fd0\u7b97\u7b26",level:2},{value:"5. <strong>\u901a\u914d\u7b26\u5bfc\u5165</strong>",id:"5-\u901a\u914d\u7b26\u5bfc\u5165",level:2}],p={toc:u},m="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5728Rust\u4e2d\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"*"),"\u7b26\u53f7\u5177\u6709\u591a\u79cd\u4e0d\u540c\u7684\u7528\u9014\uff0c\u5177\u4f53\u53d6\u51b3\u4e8e\u5b83\u7684\u4f7f\u7528\u65b9\u5f0f\u3002\u4ee5\u4e0b\u662fRust\u4e2d",(0,a.kt)("inlineCode",{parentName:"p"},"*"),"\u5e38\u89c1\u7684\u7528\u6cd5."),(0,a.kt)("h2",{id:"1\u89e3\u5f15\u7528\u6307\u9488"},"1.",(0,a.kt)("strong",{parentName:"h2"},"\u89e3\u5f15\u7528\u6307\u9488")),(0,a.kt)("p",null,"\u5f53\u4f5c\u4e3a\u4e00\u5143\u8fd0\u7b97\u7b26\u653e\u5728\u6307\u9488\u53d8\u91cf\u4e4b\u524d\u65f6\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"*"),"\u7528\u4e8e\u89e3\u5f15\u7528\u6307\u9488\u5e76\u8bbf\u95ee\u5b83\u6307\u5411\u7684\u503c\u3002\u5728Rust\u4e2d\uff0c\u901a\u5e38\u66f4\u63a8\u8350\u4f7f\u7528\u5f15\u7528\u800c\u4e0d\u662f\u539f\u59cb\u6307\u9488\u3002\u5f15\u7528\u63d0\u4f9b\u4e86\u66f4\u591a\u7684\u5b89\u5168\u6027\u548c\u53ef\u8bfb\u6027\u3002\u89e3\u5f15\u7528\u5f15\u7528\u65f6\uff0c\u4e0d\u9700\u8981\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"*"),"\uff0c\u56e0\u4e3a Rust \u81ea\u52a8\u5904\u7406\u5f15\u7528\u7684\u89e3\u5f15\u7528\u3002\u4f8b\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'fn main() {\n    let x = 42;\n    let ptr = &x;\n    let value = *ptr; // \u89e3\u5f15\u7528\u6307\u9488\n    println!("{}", value);\n}\n')),(0,a.kt)("p",null,"\u5728\u8fd9\u4e2a\u793a\u4f8b\u4e2d\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"*ptr"),"\u4ece\u6307\u9488\u6307\u5411\u7684\u5185\u5b58\u4f4d\u7f6e\u68c0\u7d22\u503c",(0,a.kt)("inlineCode",{parentName:"p"},"42"),"\u3002"),(0,a.kt)("h2",{id:"2\u7c7b\u578b\u6ce8\u89e3"},"2.",(0,a.kt)("strong",{parentName:"h2"},"\u7c7b\u578b\u6ce8\u89e3")),(0,a.kt)("p",null,"\u5728\u51fd\u6570\u7b7e\u540d\u548c\u7c7b\u578b\u6ce8\u89e3\u4e2d\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"*"),"\u7528\u4e8e\u8868\u793a\u539f\u59cb\u6307\u9488\u7c7b\u578b\u3002\u4f8b\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"fn process_data(data: *const i32) {\n    // \u51fd\u6570\u63a5\u53d7\u4e00\u4e2a\u6307\u5411i32\u7684\u539f\u59cb\u6307\u9488\n}\n")),(0,a.kt)("p",null,"\u5728\u8fd9\u91cc\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"*const i32"),"\u8868\u793a\u5bf9\u4e0d\u53ef\u53d8\u7684\u539f\u59cb\u6307\u9488\u7c7b\u578b\u3002"),(0,a.kt)("h2",{id:"3-\u521b\u5efa\u539f\u59cbraw\u6307\u9488"},"3. ",(0,a.kt)("strong",{parentName:"h2"},"\u521b\u5efa\u539f\u59cb(raw)\u6307\u9488")),(0,a.kt)("p",null,"\u5728\u8868\u8fbe\u5f0f\u4e2d\u4f5c\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"&"),"\u7684\u53f3\u4fa7\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"*"),"\uff0c\u7528\u4e8e\u4ece\u5f15\u7528\u521b\u5efa\u539f\u59cb\u6307\u9488\u3002\u548c\u5f15\u7528\u4e00\u6837\uff0c\u539f\u59cb\u6307\u9488\u662f\u4e0d\u53ef\u53d8\u6216\u53ef\u53d8\u7684\uff0c\u5206\u522b\u5199\u4f5c ",(0,a.kt)("inlineCode",{parentName:"p"},"*const T")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"*mut T")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"fn main() {\n    let x = 42;\n    let ptr: *const i32 = &x; // \u4ece\u5f15\u7528\u521b\u5efa\u539f\u59cb\u6307\u9488\n    let mut y = 42;\n    let ptr1: *mut i32 = &mut y;\n}\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5728Rust\u4e2d\uff0c\u60a8\u4e0d\u80fd\u76f4\u63a5\u5c06\u4e0d\u53ef\u53d8\u5f15\u7528\uff08",(0,a.kt)("inlineCode",{parentName:"p"},"&"),"\uff09\u8d4b\u503c\u7ed9\u53ef\u53d8\u6307\u9488\uff08",(0,a.kt)("inlineCode",{parentName:"p"},"*mut"),"\uff09\u6216\u5c06\u53ef\u53d8\u5f15\u7528\u8d4b\u503c\u7ed9\u4e0d\u53ef\u53d8\u6307\u9488\uff08",(0,a.kt)("inlineCode",{parentName:"p"},"*const"),"\uff09\u3002\u8fd9\u662f\u56e0\u4e3a\u53ef\u53d8\u6307\u9488\u5141\u8bb8\u5bf9\u6570\u636e\u8fdb\u884c\u53ef\u53d8\u4fee\u6539\uff0c\u800c\u4e0d\u53ef\u53d8\u5f15\u7528\u8981\u6c42\u6570\u636e\u662f\u4e0d\u53ef\u53d8\u7684\uff0c\u8fd9\u4e24\u8005\u4e4b\u95f4\u5b58\u5728\u4e0d\u517c\u5bb9\u6027\u3002"),(0,a.kt)("p",{parentName:"blockquote"},"\u8bf7\u6ce8\u610f\uff0c\u4f7f\u7528\u53ef\u53d8\u6307\u9488\u9700\u8981\u653e\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"unsafe")," \u5757\u5185\uff0c\u5e76\u4e14\u9700\u8981\u683c\u5916\u5c0f\u5fc3\uff0c\u4ee5\u786e\u4fdd\u4e0d\u4f1a\u5bfc\u81f4\u4e0d\u5b89\u5168\u6027\u95ee\u9898\u3002")),(0,a.kt)("h3",{id:"\u5f15\u7528\u89e3\u5f15\u7528-t-\u548c-mut-t"},(0,a.kt)("strong",{parentName:"h3"},"\u5f15\u7528\u89e3\u5f15\u7528 (",(0,a.kt)("inlineCode",{parentName:"strong"},"&T")," \u548c ",(0,a.kt)("inlineCode",{parentName:"strong"},"&mut T"),")")),(0,a.kt)("p",null,"\u5728Rust\u4e2d\uff0c\u901a\u5e38\u66f4\u63a8\u8350\u4f7f\u7528\u5f15\u7528\u800c\u4e0d\u662f\u539f\u59cb\u6307\u9488\u3002\u5f15\u7528\u63d0\u4f9b\u4e86\u66f4\u591a\u7684\u5b89\u5168\u6027\u548c\u53ef\u8bfb\u6027\u3002\u89e3\u5f15\u7528\u5f15\u7528\u65f6\uff0c\u4e0d\u9700\u8981\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"*"),"\uff0c\u56e0\u4e3a Rust \u81ea\u52a8\u5904\u7406\u5f15\u7528\u7684\u89e3\u5f15\u7528\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'fn main() {\n    let mut x = 42;\n\n    let reference = &x; // \u521b\u5efa\u4e0d\u53ef\u53d8\u5f15\u7528\n\n    // \u4e0d\u9700\u8981\u4f7f\u7528 * \u89e3\u5f15\u7528\u5f15\u7528\n    println!("Value: {}", reference);\n\n    let mutable_reference = &mut x; // \u521b\u5efa\u53ef\u53d8\u5f15\u7528\n\n    // \u4e0d\u9700\u8981\u4f7f\u7528 * \u89e3\u5f15\u7528\u5f15\u7528\n    *mutable_reference = 100; // \u4fee\u6539\u503c\n\n    println!("Value: {}", x); // \u6253\u5370\u4fee\u6539\u540e\u7684\u503c\n}\n\n')),(0,a.kt)("h2",{id:"4\u4e58\u6cd5\u8fd0\u7b97\u7b26"},"4.",(0,a.kt)("strong",{parentName:"h2"},"\u4e58\u6cd5\u8fd0\u7b97\u7b26")),(0,a.kt)("p",null,"\u5728\u7b97\u672f\u8868\u8fbe\u5f0f\u4e2d\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"*"),"\u7528\u4f5c\u4e58\u6cd5\u8fd0\u7b97\u7b26\u3002\u4f8b\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"let result = 3 * 4; // \u5c063\u548c4\u76f8\u4e58\n")),(0,a.kt)("p",null,"\u5728\u5927\u90e8\u5206\u8bed\u8a00\u4e2d\u90fd\u662f\u4f5c\u4e3a\u4e58\u6cd5\u8fd0\u7b97\u7b26"),(0,a.kt)("h2",{id:"5-\u901a\u914d\u7b26\u5bfc\u5165"},"5. ",(0,a.kt)("strong",{parentName:"h2"},"\u901a\u914d\u7b26\u5bfc\u5165")),(0,a.kt)("p",null,"\u5728\u6a21\u5757\u58f0\u660e\u4e2d\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"*"),"\u53ef\u7528\u4e8e\u901a\u914d\u7b26\u5bfc\u5165\uff0c\u4ee5\u4ece\u6a21\u5757\u4e2d\u5bfc\u5165\u6240\u6709\u9879\u76ee\u3002Java\u8bed\u8a00\u4e2d\u4e5f\u662f\u53ef\u4ee5\u7528\u4e8e\u901a\u914d\u7b26\u3002\u4f8b\u5982"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"mod my_module {\n    pub fn function1() {}\n    pub fn function2() {}\n}\n\nuse my_module::*; // \u4ecemy_module\u5bfc\u5165\u6240\u6709\u9879\u76ee\n")),(0,a.kt)("p",null,"\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"*"),"\u7528\u4e8e\u5bfc\u5165\u6240\u6709\u9879\u76ee\uff08\u5728\u8fd9\u4e2a\u793a\u4f8b\u4e2d\u662f\u51fd\u6570\uff09\u4ece",(0,a.kt)("inlineCode",{parentName:"p"},"my_module"),"\u6a21\u5757\u4e2d\u3002",(0,a.kt)("inlineCode",{parentName:"p"},"*"),"\u7684\u542b\u4e49\u53d6\u51b3\u4e8e\u5b83\u5728\u4ee3\u7801\u4e2d\u7684\u4e0a\u4e0b\u6587\uff0c\u56e0\u6b64\u5728Rust\u4ee3\u7801\u4e2d\u4f7f\u7528\u65f6\u9700\u8981\u6ce8\u610f\u5b83\u7684\u7528\u6cd5\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6211\u662f\u8682\u8681\u80cc\u5927\u8c61\uff0c\u6587\u7ae0\u5bf9\u4f60\u6709\u5e2e\u52a9\u7ed9",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mxsm/mxsm-website"},"\u9879\u76ee\u70b9\u4e2a\u2764"),"\u5173\u6ce8\u6211",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mxsm"},"GitHub:mxsm"),"\uff0c\u6587\u7ae0\u6709\u4e0d\u6b63\u786e\u7684\u5730\u65b9\u8bf7\u60a8\u65a7\u6b63,\u521b\u5efa",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mxsm/mxsm-website/issues"},"ISSUE\u63d0\u4ea4PR"),"~","\u8c22\u8c22! Emal:",(0,a.kt)("a",{parentName:"p",href:"mailto:mxsm@apache.com"},"mxsm@apache.com"))))}c.isMDXComponent=!0}}]);