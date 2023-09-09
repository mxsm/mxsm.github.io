"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[6145],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>k});var r=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(t),d=l,k=m["".concat(p,".").concat(d)]||m[d]||c[d]||a;return t?r.createElement(k,o(o({ref:n},u),{},{components:t})):r.createElement(k,o({ref:n},u))}));function k(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var a=t.length,o=new Array(a);o[0]=d;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[m]="string"==typeof e?e:l,o[1]=i;for(var s=2;s<a;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3192:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=t(7462),l=(t(7294),t(3905));const a={title:"\u5f15\u7528\u548c\u501f\u7528",sidebar_label:"4.2. \u5f15\u7528\u548c\u501f\u7528",linkTitle:"\u5f15\u7528\u548c\u501f\u7528",weight:202308051736,description:"\u5f15\u7528\u548c\u501f\u7528"},o=void 0,i={unversionedId:"rust/official-doc/ownership/references-borrowing",id:"rust/official-doc/ownership/references-borrowing",title:"\u5f15\u7528\u548c\u501f\u7528",description:"\u5f15\u7528\u548c\u501f\u7528",source:"@site/docs/rust/official-doc/ownership/02-references-borrowing.md",sourceDirName:"rust/official-doc/ownership",slug:"/rust/official-doc/ownership/references-borrowing",permalink:"/docs/rust/official-doc/ownership/references-borrowing",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/rust/official-doc/ownership/02-references-borrowing.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1694243114,formattedLastUpdatedAt:"Sep 9, 2023",sidebarPosition:2,frontMatter:{title:"\u5f15\u7528\u548c\u501f\u7528",sidebar_label:"4.2. \u5f15\u7528\u548c\u501f\u7528",linkTitle:"\u5f15\u7528\u548c\u501f\u7528",weight:202308051736,description:"\u5f15\u7528\u548c\u501f\u7528"},sidebar:"rustDoc",previous:{title:"4.1. \u4ec0\u4e48\u662f\u6240\u6709\u6743",permalink:"/docs/rust/official-doc/ownership/ownership"},next:{title:"4.3. \u5207\u7247\u7c7b\u578b",permalink:"/docs/rust/official-doc/ownership/slice-type"}},p={},s=[{value:"\u5f15\u7528\u548c\u501f\u7528",id:"\u5f15\u7528\u548c\u501f\u7528",level:2},{value:"\u53ef\u53d8\u5f15\u7528",id:"\u53ef\u53d8\u5f15\u7528",level:3},{value:"\u60ac\u5782\u5f15\u7528",id:"\u60ac\u5782\u5f15\u7528",level:3},{value:"\u5f15\u7528\u89c4\u5219",id:"\u5f15\u7528\u89c4\u5219",level:3}],u={toc:s},m="wrapper";function c(e){let{components:n,...t}=e;return(0,l.kt)(m,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u5f15\u7528\u548c\u501f\u7528"},(0,l.kt)("a",{parentName:"h2",href:"https://doc.rust-lang.org/book/ch04-02-references-and-borrowing.html#references-and-borrowing"},"\u5f15\u7528\u548c\u501f\u7528")),(0,l.kt)("p",null,"\u5728\u5217\u8868 4-5 \u4e2d\u7684\u5143\u7ec4\u4ee3\u7801\u4e2d\u5b58\u5728\u4e00\u4e2a\u95ee\u9898\uff0c\u5373\u6211\u4eec\u5fc5\u987b\u5c06 ",(0,l.kt)("inlineCode",{parentName:"p"},"String")," \u8fd4\u56de\u7ed9\u8c03\u7528\u51fd\u6570\uff0c\u8fd9\u6837\u5728\u8c03\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"calculate_length")," \u540e\u4ecd\u7136\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"String"),"\uff0c\u56e0\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"String")," \u88ab\u79fb\u52a8\u5230\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"calculate_length")," \u4e2d\u3002\u76f8\u53cd\uff0c\u6211\u4eec\u53ef\u4ee5\u63d0\u4f9b\u4e00\u4e2a\u5bf9 ",(0,l.kt)("inlineCode",{parentName:"p"},"String")," \u503c\u7684\u5f15\u7528\u3002",(0,l.kt)("em",{parentName:"p"},"\u5f15\u7528")," \u5c31\u50cf\u6307\u9488\u4e00\u6837\uff0c\u5b83\u662f\u4e00\u4e2a\u5730\u5740\uff0c\u6211\u4eec\u53ef\u4ee5\u8ddf\u968f\u5b83\u6765\u8bbf\u95ee\u5b58\u50a8\u5728\u8be5\u5730\u5740\u7684\u6570\u636e\uff1b\u8be5\u6570\u636e\u7531\u5176\u4ed6\u67d0\u4e2a\u53d8\u91cf\u62e5\u6709\u3002\u4e0e\u6307\u9488\u4e0d\u540c\u7684\u662f\uff0c\u5f15\u7528\u5728\u5176\u751f\u547d\u5468\u671f\u5185\u4fdd\u8bc1\u6307\u5411\u67d0\u79cd\u7279\u5b9a\u7c7b\u578b\u7684\u6709\u6548\u503c\u3002"),(0,l.kt)("p",null,"\u4e0b\u9762\u662f\u5982\u4f55\u5b9a\u4e49\u548c\u4f7f\u7528\u4e00\u4e2a\u5e26\u6709\u5bf9\u8c61\u5f15\u7528\u4f5c\u4e3a\u53c2\u6570\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"calculate_length")," \u51fd\u6570\uff0c\u800c\u4e0d\u662f\u83b7\u53d6\u503c\u7684\u6240\u6709\u6743\uff1a"),(0,l.kt)("p",null,"\u6587\u4ef6\u540d\uff1asrc/main.rs"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},'fn main() {\n    let s1 = String::from("hello");\n\n    let len = calculate_length(&s1);\n\n    println!("The length of \'{}\' is {}.", s1, len);\n}\n\nfn calculate_length(s: &String) -> usize {\n    s.len()\n}\n')),(0,l.kt)("p",null,"\u9996\u5148\uff0c\u6ce8\u610f\u5728\u53d8\u91cf\u58f0\u660e\u548c\u51fd\u6570\u8fd4\u56de\u503c\u4e2d\u7684\u6240\u6709\u5143\u7ec4\u4ee3\u7801\u90fd\u6d88\u5931\u4e86\u3002\u5176\u6b21\uff0c\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"calculate_length")," \u4e2d\uff0c\u6211\u4eec\u5c06 ",(0,l.kt)("inlineCode",{parentName:"p"},"&s1")," \u4f20\u9012\u7ed9 ",(0,l.kt)("inlineCode",{parentName:"p"},"calculate_length"),"\uff0c\u5e76\u4e14\u5728\u5176\u5b9a\u4e49\u4e2d\uff0c\u6211\u4eec\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"&String")," \u800c\u4e0d\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"String"),"\u3002\u8fd9\u4e9b & \u7b26\u53f7\u8868\u793a",(0,l.kt)("em",{parentName:"p"},"\u5f15\u7528"),"\uff0c\u5b83\u4eec\u5141\u8bb8\u60a8\u5f15\u7528\u67d0\u4e2a\u503c\u800c\u4e0d\u83b7\u53d6\u5176\u6240\u6709\u6743\u3002\u56fe 4-5 \u63cf\u8ff0\u4e86\u8fd9\u4e2a\u6982\u5ff5\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://doc.rust-lang.org/book/img/trpl04-05.svg",alt:"Three tables: the table for s contains only a pointer to the table for s1. The table for s1 contains the stack data for s1 and points to the string data on the heap."})),(0,l.kt)("p",null,"\u56fe 4-5\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"&String s")," \u6307\u5411 ",(0,l.kt)("inlineCode",{parentName:"p"},"String s1")," \u7684\u793a\u610f\u56fe"),(0,l.kt)("admonition",{title:"\u6ce8\u610f",type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"&")," \u8fdb\u884c\u5f15\u7528\u7684\u53cd\u64cd\u4f5c\u662f",(0,l.kt)("em",{parentName:"p"},"\u89e3\u5f15\u7528"),"\uff0c\u53ef\u4ee5\u4f7f\u7528\u89e3\u5f15\u7528\u8fd0\u7b97\u7b26 ",(0,l.kt)("inlineCode",{parentName:"p"},"*")," \u8fdb\u884c\u89e3\u5f15\u7528\u3002\u6211\u4eec\u5c06\u5728\u7b2c 8 \u7ae0\u4e2d\u770b\u5230\u89e3\u5f15\u7528\u8fd0\u7b97\u7b26\u7684\u4e00\u4e9b\u7528\u6cd5\uff0c\u5e76\u5728\u7b2c 15 \u7ae0\u4e2d\u8ba8\u8bba\u89e3\u5f15\u7528\u7684\u8be6\u7ec6\u4fe1\u606f\u3002")),(0,l.kt)("p",null,"\u8ba9\u6211\u4eec\u4ed4\u7ec6\u770b\u770b\u8fd9\u91cc\u7684\u51fd\u6570\u8c03\u7528\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},'    let s1 = String::from("hello");\n\n    let len = calculate_length(&s1);\n')),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"&s1")," \u7684\u8bed\u6cd5\u5141\u8bb8\u6211\u4eec\u521b\u5efa\u4e00\u4e2a\u5f15\u7528\uff0c\u8be5\u5f15\u7528",(0,l.kt)("em",{parentName:"p"},"\u6307\u5411")," ",(0,l.kt)("inlineCode",{parentName:"p"},"s1")," \u7684\u503c\uff0c\u4f46\u5e76\u4e0d\u62e5\u6709\u5b83\u3002\u7531\u4e8e\u5b83\u4e0d\u62e5\u6709\u8be5\u503c\uff0c\u5f53\u5f15\u7528\u505c\u6b62\u4f7f\u7528\u65f6\uff0c\u5b83\u6240\u6307\u5411\u7684\u503c\u5c06\u4e0d\u4f1a\u88ab\u4e22\u5f03\u3002"),(0,l.kt)("p",null,"\u540c\u6837\uff0c\u51fd\u6570\u7684\u7b7e\u540d\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"&")," \u8868\u793a\u53c2\u6570 ",(0,l.kt)("inlineCode",{parentName:"p"},"s")," \u7684\u7c7b\u578b\u662f\u4e00\u4e2a\u5f15\u7528\u3002\u8ba9\u6211\u4eec\u6dfb\u52a0\u4e00\u4e9b\u8bf4\u660e\u6027\u6ce8\u91ca\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"fn calculate_length(s: &String) -> usize { // s \u662f\u4e00\u4e2a String \u7684\u5f15\u7528\n    s.len()\n} // \u5728\u8fd9\u91cc\uff0cs \u8d85\u51fa\u4e86\u4f5c\u7528\u57df\u3002\u4f46\u7531\u4e8e\u5b83\u6ca1\u6709\u6240\u5f15\u7528\u503c\u7684\u6240\u6709\u6743\uff0c\n  // \u6240\u4ee5\u4e0d\u4f1a\u53d1\u751f drop \u64cd\u4f5c\u3002\n")),(0,l.kt)("p",null,"\u53d8\u91cf ",(0,l.kt)("inlineCode",{parentName:"p"},"s")," \u7684\u6709\u6548\u8303\u56f4\u4e0e\u4efb\u4f55\u51fd\u6570\u53c2\u6570\u7684\u6709\u6548\u8303\u56f4\u76f8\u540c\uff0c\u4f46\u662f\u5f15\u7528\u6307\u5411\u7684\u503c\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"s")," \u505c\u6b62\u4f7f\u7528\u540e\u5e76\u4e0d\u4f1a\u88ab\u4e22\u5f03\uff0c\u56e0\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"s")," \u6ca1\u6709\u6240\u6709\u6743\u3002\u5f53\u51fd\u6570\u7684\u53c2\u6570\u4f7f\u7528\u5f15\u7528\u800c\u4e0d\u662f\u5b9e\u9645\u503c\u65f6\uff0c\u6211\u4eec\u5c31\u4e0d\u9700\u8981\u8fd4\u56de\u503c\u6765\u8fd8\u539f\u6240\u6709\u6743\uff0c\u56e0\u4e3a\u6211\u4eec\u4ece\u672a\u62e5\u6709\u8fc7\u5b83\u3002"),(0,l.kt)("p",null,"\u6211\u4eec\u5c06\u521b\u5efa\u5f15\u7528\u7684\u884c\u4e3a\u79f0\u4e3a",(0,l.kt)("em",{parentName:"p"},"\u501f\u7528"),"\u3002\u5c31\u50cf\u5728\u73b0\u5b9e\u751f\u6d3b\u4e2d\uff0c\u5982\u679c\u4e00\u4e2a\u4eba\u62e5\u6709\u67d0\u7269\uff0c\u4f60\u53ef\u4ee5\u4ece\u4ed6\u4eec\u90a3\u91cc\u501f\u8d70\u3002\u5b8c\u6210\u540e\uff0c\u4f60\u5fc5\u987b\u5f52\u8fd8\u5b83\u3002\u4f60\u4e0d\u62e5\u6709\u5b83\u3002"),(0,l.kt)("p",null,"\u90a3\u4e48\uff0c\u5982\u679c\u6211\u4eec\u5c1d\u8bd5\u4fee\u6539\u6211\u4eec\u501f\u7528\u7684\u4e1c\u897f\u4f1a\u53d1\u751f\u4ec0\u4e48\u5462\uff1f\u8bf7\u5c1d\u8bd5\u5728\u5217\u8868 4-6 \u4e2d\u8fd0\u884c\u4ee3\u7801\u3002\u5c0f\u5267\u900f\uff1a\u5b83\u4e0d\u8d77\u4f5c\u7528\uff01"),(0,l.kt)("p",null,"\u6587\u4ef6\u540d\uff1asrc/main.rs"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},'fn main() {\n    let s = String::from("hello");\n\n    change(&s);\n}\n\nfn change(some_string: &String) {\n    some_string.push_str(", world");\n}\n')),(0,l.kt)("p",null,"\u5217\u8868 4-6\uff1a\u5c1d\u8bd5\u4fee\u6539\u501f\u7528\u503c"),(0,l.kt)("p",null,"\u8fd9\u662f\u9519\u8bef\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},'$ cargo run\n   Compiling ownership v0.1.0 (file:///projects/ownership)\nerror[E0596]: cannot borrow `*some_string` as mutable, as it is behind a `&` reference\n --\x3e src/main.rs:8:5\n  |\n7 | fn change(some_string: &String) {\n  |                        ------- help: consider changing this to be a mutable reference: `&mut String`\n8 |     some_string.push_str(", world");\n  |     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ `some_string` is a `&` reference, so the data it refers to cannot be borrowed as mutable\n\nFor more information about this error, try `rustc --explain E0596`.\nerror: could not compile `ownership` due to previous error\n')),(0,l.kt)("p",null,"\u5c31\u50cf\u53d8\u91cf\u9ed8\u8ba4\u662f\u4e0d\u53ef\u53d8\u7684\u4e00\u6837\uff0c\u5f15\u7528\u4e5f\u662f\u4e0d\u53ef\u53d8\u7684\u3002\u6211\u4eec\u4e0d\u5141\u8bb8\u4fee\u6539\u6211\u4eec\u62e5\u6709\u5f15\u7528\u7684\u4e1c\u897f\u3002"),(0,l.kt)("h3",{id:"\u53ef\u53d8\u5f15\u7528"},(0,l.kt)("a",{parentName:"h3",href:"https://doc.rust-lang.org/book/ch04-02-references-and-borrowing.html#mutable-references"},"\u53ef\u53d8\u5f15\u7528")),(0,l.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u4f7f\u7528\u4e00\u4e9b\u5c0f\u7684\u4fee\u6539\uff0c\u800c\u4e0d\u662f\u53ef\u53d8\u5f15\u7528\uff0c\u6765\u4fee\u590d\u5217\u8868 4-6 \u4e2d\u7684\u4ee3\u7801\uff0c\u4ee5\u5141\u8bb8\u6211\u4eec\u4fee\u6539\u4e00\u4e2a\u501f\u7528\u503c\uff1a"),(0,l.kt)("p",null,"\u6587\u4ef6\u540d\uff1asrc/main.rs"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},'fn main() {\n    let mut s = String::from("hello");\n\n    change(&mut s);\n}\n\nfn change(some_string: &mut String) {\n    some_string.push_str(", world");\n}\n')),(0,l.kt)("p",null,"\u9996\u5148\uff0c\u6211\u4eec\u5c06 ",(0,l.kt)("inlineCode",{parentName:"p"},"s")," \u66f4\u6539\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"mut"),"\u3002\u7136\u540e\uff0c\u5728\u8c03\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"change")," \u51fd\u6570\u65f6\uff0c\u6211\u4eec\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"&mut s")," \u521b\u5efa\u4e00\u4e2a\u53ef\u53d8\u5f15\u7528\uff0c\u5e76\u66f4\u65b0\u51fd\u6570\u7b7e\u540d\u4ee5\u63a5\u53d7\u4e00\u4e2a\u53ef\u53d8\u5f15\u7528\uff0c\u5373 ",(0,l.kt)("inlineCode",{parentName:"p"},"some_string: &mut String"),"\u3002\u8fd9\u4f7f\u5f97\u5f88\u6e05\u695a ",(0,l.kt)("inlineCode",{parentName:"p"},"change")),(0,l.kt)("p",null," \u51fd\u6570\u5c06\u4f1a\u4fee\u6539\u5b83\u6240\u501f\u7528\u7684\u503c\u3002"),(0,l.kt)("p",null,"\u53ef\u53d8\u5f15\u7528\u6709\u4e00\u4e2a\u91cd\u8981\u9650\u5236\uff1a\u5982\u679c\u60a8\u6709\u4e00\u4e2a\u5bf9\u503c\u7684\u53ef\u53d8\u5f15\u7528\uff0c\u5219\u4e0d\u80fd\u540c\u65f6\u62e5\u6709\u5bf9\u8be5\u503c\u7684\u5176\u4ed6\u5f15\u7528\u3002\u5c1d\u8bd5\u521b\u5efa\u4e24\u4e2a\u5bf9 ",(0,l.kt)("inlineCode",{parentName:"p"},"s")," \u7684\u53ef\u53d8\u5f15\u7528\u7684\u4ee3\u7801\u5c06\u5931\u8d25\uff1a"),(0,l.kt)("p",null,"\u6587\u4ef6\u540d\uff1asrc/main.rs"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},'    let mut s = String::from("hello");\n\n    let r1 = &mut s;\n    let r2 = &mut s;\n\n    println!("{}, {}", r1, r2);\n')),(0,l.kt)("p",null,"\u8fd9\u662f\u9519\u8bef\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},'$ cargo run\n   Compiling ownership v0.1.0 (file:///projects/ownership)\nerror[E0499]: cannot borrow `s` as mutable more than once at a time\n --\x3e src/main.rs:5:14\n  |\n4 |     let r1 = &mut s;\n  |              ------ first mutable borrow occurs here\n5 |     let r2 = &mut s;\n  |              ^^^^^^ second mutable borrow occurs here\n6 |\n7 |     println!("{}, {}", r1, r2);\n  |                        -- first borrow later used here\n\nFor more information about this error, try `rustc --explain E0499`.\nerror: could not compile `ownership` due to previous error\n')),(0,l.kt)("p",null,"\u8fd9\u4e2a\u9519\u8bef\u8bf4\u8fd9\u6bb5\u4ee3\u7801\u65e0\u6548\uff0c\u56e0\u4e3a\u6211\u4eec\u4e0d\u80fd\u540c\u65f6\u4ee5\u53ef\u53d8\u65b9\u5f0f\u501f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"s")," \u591a\u6b21\u3002\u7b2c\u4e00\u4e2a\u53ef\u53d8\u501f\u7528\u662f\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"r1")," \u4e2d\uff0c\u5e76\u4e14\u5fc5\u987b\u6301\u7eed\u5230\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"println!")," \u4e2d\u4f7f\u7528\u5b83\uff0c\u4f46\u662f\u5728\u521b\u5efa\u8be5\u53ef\u53d8\u5f15\u7528\u548c\u5176\u4f7f\u7528\u4e4b\u95f4\uff0c\u6211\u4eec\u8bd5\u56fe\u521b\u5efa\u53e6\u4e00\u4e2a\u53ef\u53d8\u5f15\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"r2")," \u6765\u501f\u7528\u76f8\u540c\u7684\u6570\u636e\u3002"),(0,l.kt)("p",null,"\u9632\u6b62\u540c\u65f6\u62e5\u6709\u5bf9\u540c\u4e00\u6570\u636e\u7684\u591a\u4e2a\u53ef\u53d8\u5f15\u7528\u7684\u9650\u5236\u5141\u8bb8\u4ee5\u4e00\u79cd\u975e\u5e38\u53d7\u63a7\u5236\u7684\u65b9\u5f0f\u8fdb\u884c\u4fee\u6539\u3002\u8fd9\u662f\u65b0 Rust \u7a0b\u5e8f\u5458\u4f1a\u9047\u5230\u7684\u95ee\u9898\uff0c\u56e0\u4e3a\u5927\u591a\u6570\u8bed\u8a00\u5141\u8bb8\u60a8\u968f\u65f6\u8fdb\u884c\u4fee\u6539\u3002\u6709\u4e86\u8fd9\u4e2a\u9650\u5236\u7684\u597d\u5904\u662f\uff0cRust \u53ef\u4ee5\u5728\u7f16\u8bd1\u65f6\u9632\u6b62\u6570\u636e\u7ade\u4e89\u3002",(0,l.kt)("em",{parentName:"p"},"\u6570\u636e\u7ade\u4e89"),"\u7c7b\u4f3c\u4e8e\u7ade\u6001\u6761\u4ef6\uff0c\u5f53\u8fd9\u4e09\u79cd\u884c\u4e3a\u53d1\u751f\u65f6\u4f1a\u53d1\u751f\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4e24\u4e2a\u6216\u66f4\u591a\u7684\u6307\u9488\u540c\u65f6\u8bbf\u95ee\u540c\u4e00\u6570\u636e\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u81f3\u5c11\u6709\u4e00\u4e2a\u6307\u9488\u6b63\u5728\u7528\u4e8e\u5199\u5165\u6570\u636e\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u6ca1\u6709\u4f7f\u7528\u4efb\u4f55\u673a\u5236\u6765\u540c\u6b65\u5bf9\u6570\u636e\u7684\u8bbf\u95ee\u3002")),(0,l.kt)("p",null,"\u6570\u636e\u7ade\u4e89\u4f1a\u5bfc\u81f4\u672a\u5b9a\u4e49\u7684\u884c\u4e3a\uff0c\u5e76\u4e14\u5728\u8fd0\u884c\u65f6\u5c1d\u8bd5\u8ddf\u8e2a\u548c\u4fee\u590d\u5b83\u4eec\u65f6\u53ef\u80fd\u96be\u4ee5\u8bca\u65ad\u548c\u4fee\u590d\uff1bRust \u901a\u8fc7\u62d2\u7edd\u7f16\u8bd1\u5b58\u5728\u6570\u636e\u7ade\u4e89\u7684\u4ee3\u7801\u6765\u9632\u6b62\u6b64\u95ee\u9898\uff01"),(0,l.kt)("p",null,"\u4e0e\u5f80\u5e38\u4e00\u6837\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u82b1\u62ec\u53f7\u521b\u5efa\u65b0\u7684\u4f5c\u7528\u57df\uff0c\u5141\u8bb8\u591a\u4e2a\u53ef\u53d8\u5f15\u7528\uff0c\u4f46\u662f\u4e0d\u5141\u8bb8",(0,l.kt)("em",{parentName:"p"},"\u540c\u65f6"),"\u4f7f\u7528\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},'    let mut s = String::from("hello");\n\n    {\n        let r1 = &mut s;\n    } // r1 \u5728\u6b64\u5904\u8d85\u51fa\u4f5c\u7528\u57df\uff0c\u6240\u4ee5\u6211\u4eec\u53ef\u4ee5\u6beb\u65e0\u95ee\u9898\u5730\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u5f15\u7528\u3002\n\n    let r2 = &mut s;\n')),(0,l.kt)("p",null,"Rust \u5bf9\u4e8e\u7ed3\u5408\u53ef\u53d8\u548c\u4e0d\u53ef\u53d8\u5f15\u7528\u4e5f\u6709\u7c7b\u4f3c\u7684\u89c4\u5219\u3002\u8fd9\u6bb5\u4ee3\u7801\u5c06\u5bfc\u81f4\u9519\u8bef\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},'    let mut s = String::from("hello");\n\n    let r1 = &s; // \u6ca1\u95ee\u9898\n    let r2 = &s; // \u6ca1\u95ee\u9898\n    let r3 = &mut s; // \u4e25\u91cd\u95ee\u9898\n\n    println!("{}, {}, and {}", r1, r2, r3);\n')),(0,l.kt)("p",null,"\u8fd9\u662f\u9519\u8bef\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},'$ cargo run\n   Compiling ownership v0.1.0 (file:///projects/ownership)\nerror[E0502]: cannot borrow `s` as mutable because it is also borrowed as immutable\n --\x3e src/main.rs:6:14\n  |\n4 |     let r1 = &s; // \u6ca1\u95ee\u9898\n  |              -- \u4e0d\u53ef\u53d8\u5f15\u7528\u5728\u8fd9\u91cc\u4ea7\u751f\n5 |     let r2 = &s; // \u6ca1\u95ee\u9898\n6 |     let r3 = &mut s; // \u4e25\u91cd\u95ee\u9898\n  |              ^^^^^^ \u53ef\u53d8\u5f15\u7528\u5728\u8fd9\u91cc\u4ea7\u751f\n7 |\n8 |     println!("{}, {}, and {}", r1, r2, r3);\n  |                                -- \u5728\u8fd9\u91cc\u4f7f\u7528\u4e86\u4e0d\u53ef\u53d8\u5f15\u7528\n\nFor more information about this error, try `rustc --explain E0502`.\nerror: could not compile `ownership` due to previous error\n')),(0,l.kt)("p",null,"\u6211\u4eec",(0,l.kt)("em",{parentName:"p"},"\u540c\u6837"),"\u4e0d\u80fd\u5728\u62e5\u6709\u5bf9\u76f8\u540c\u503c\u7684\u4e0d\u53ef\u53d8\u5f15\u7528\u65f6\u62e5\u6709\u53ef\u53d8\u5f15\u7528\u3002"),(0,l.kt)("p",null,"\u5bf9\u4e8e\u4f7f\u7528\u4e0d\u53ef\u53d8\u5f15\u7528\u7684\u7528\u6237\uff0c\u4e0d\u5e0c\u671b\u8be5\u503c\u7a81\u7136\u53d1\u751f\u53d8\u5316\uff01\u4f46\u662f\uff0c\u591a\u4e2a\u4e0d\u53ef\u53d8\u5f15\u7528\u662f\u5141\u8bb8\u7684\uff0c\u56e0\u4e3a\u53ea\u8bfb\u53d6\u6570\u636e\u7684\u4eba\u6ca1\u6709\u4fee\u6539\u6570\u636e\u7684\u80fd\u529b\u3002"),(0,l.kt)("p",null,"\u8bf7\u6ce8\u610f\uff0c\u5f15\u7528\u7684\u4f5c\u7528\u57df\u4ece\u5f15\u7528\u5f15\u5165\u7684\u5730\u65b9\u5f00\u59cb\uff0c\u5e76\u6301\u7eed\u5230\u6700\u540e\u4e00\u6b21\u4f7f\u7528\u8be5\u5f15\u7528\u7684\u65f6\u95f4\u3002\u4f8b\u5982\uff0c\u8fd9\u6bb5\u4ee3\u7801\u5c06\u7f16\u8bd1\uff0c\u56e0\u4e3a\u4e0d\u53ef\u53d8\u5f15\u7528\u7684\u6700\u540e\u4e00\u6b21\u4f7f\u7528\uff0c\u5373 ",(0,l.kt)("inlineCode",{parentName:"p"},"println!"),"\uff0c\u5728\u53ef\u53d8\u5f15\u7528\u88ab\u5f15\u5165\u4e4b\u524d\u53d1\u751f\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},'    let mut s = String::from("hello");\n\n    let r1 = &s; // \u6ca1\u95ee\u9898\n    let r2 = &s; // \u6ca1\u95ee\u9898\n    println!("{} and {}", r1, r2);\n    // \u53d8\u91cf r1 \u548c r2 \u5c06\u5728\u6b64\u5904\u4e4b\u540e\u4e0d\u518d\u4f7f\u7528\n\n    let r3 = &mut s; // \u6ca1\u95ee\u9898\n    println!("{}", r3);\n')),(0,l.kt)("p",null,"\u4e0d\u53ef\u53d8\u5f15\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"r1")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"r2")," \u7684\u4f5c\u7528\u57df\u5728\u5b83\u4eec\u6700\u540e\u4f7f\u7528\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"println!")," \u540e\u7ed3\u675f\uff0c\u8fd9\u5728\u53ef\u53d8\u5f15\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"r3")," \u88ab\u521b\u5efa\u4e4b\u524d\u3002\u8fd9\u4e9b\u4f5c\u7528\u57df\u4e0d\u91cd\u53e0\uff0c\u56e0\u6b64\u5141\u8bb8\u8fd9\u6bb5\u4ee3\u7801\uff1a\u7f16\u8bd1\u5668\u53ef\u4ee5\u5224\u65ad\u51fa\u5f15\u7528\u5728\u4f5c\u7528\u57df\u7ed3\u675f\u70b9\u4e4b\u524d\u4e0d\u518d\u4f7f\u7528\u3002"),(0,l.kt)("p",null,"\u5c3d\u7ba1\u501f\u7528\u9519\u8bef\u6709\u65f6\u53ef\u80fd\u4ee4\u4eba\u6cae\u4e27\uff0c\u4f46\u8bf7\u8bb0\u4f4f\uff0c\u8fd9\u662f Rust \u7f16\u8bd1\u5668\u5728\u7f16\u8bd1\u65f6\uff08\u800c\u4e0d\u662f\u8fd0\u884c\u65f6\uff09\u6307\u51fa\u6f5c\u5728\u9519\u8bef\u7684\u65b9\u5f0f\uff0c\u4ee5\u53ca\u51c6\u786e\u6307\u51fa\u95ee\u9898\u6240\u5728\u3002\u8fd9\u6837\u4e00\u6765\uff0c\u60a8\u5c31\u4e0d\u5fc5\u8ffd\u8e2a\u6570\u636e\u4e0d\u662f\u60a8\u6240\u8ba4\u4e3a\u7684\u90a3\u6837\u7684\u539f\u56e0\u3002"),(0,l.kt)("h3",{id:"\u60ac\u5782\u5f15\u7528"},(0,l.kt)("a",{parentName:"h3",href:"https://doc.rust-lang.org/book/ch04-02-references-and-borrowing.html#dangling-references"},"\u60ac\u5782\u5f15\u7528")),(0,l.kt)("p",null,"\u5728\u5177\u6709\u6307\u9488\u7684\u8bed\u8a00\u4e2d\uff0c\u5f88\u5bb9\u6613\u9519\u8bef\u5730\u521b\u5efa",(0,l.kt)("em",{parentName:"p"},"\u60ac\u5782\u6307\u9488"),"\uff0c\u5373\u6307\u5411\u53ef\u80fd\u5df2\u88ab\u5206\u914d\u7ed9\u5176\u4ed6\u4eba\u7684\u5185\u5b58\u4f4d\u7f6e\u7684\u6307\u9488\uff0c\u540c\u65f6\u4fdd\u7559\u5bf9\u8be5\u5185\u5b58\u7684\u6307\u9488\u3002\u76f8\u6bd4\u4e4b\u4e0b\uff0c\u5728 Rust \u4e2d\uff0c\u7f16\u8bd1\u5668\u4fdd\u8bc1\u5f15\u7528\u6c38\u8fdc\u4e0d\u4f1a\u662f\u60ac\u5782\u5f15\u7528\uff1a\u5982\u679c\u60a8\u6709\u5bf9\u67d0\u4e9b\u6570\u636e\u7684\u5f15\u7528\uff0c\u7f16\u8bd1\u5668\u5c06\u786e\u4fdd\u5728\u5f15\u7528\u6570\u636e\u4e4b\u524d\u4e0d\u4f1a\u79bb\u5f00\u5176\u4f5c\u7528\u57df\u3002"),(0,l.kt)("p",null,"\u8ba9\u6211\u4eec\u5c1d\u8bd5\u521b\u5efa\u4e00\u4e2a\u60ac\u5782\u5f15\u7528\uff0c\u770b\u770b Rust \u5982\u4f55\u901a\u8fc7\u7f16\u8bd1\u65f6\u9519\u8bef\u6765\u9632\u6b62\u5b83\u4eec\uff1a"),(0,l.kt)("p",null,"\u6587\u4ef6\u540d\uff1asrc/main.rs"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},'fn main() {\n    let reference_to_nothing = dangle();\n}\n\nfn dangle() -> &String {\n    let s = String::from("hello");\n\n    &s\n}\n')),(0,l.kt)("p",null,"\u8fd9\u662f\u9519\u8bef\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"$ cargo run\n   Compiling ownership v0.1.0 (file:///projects/ownership)\nerror[E0106]: missing lifetime specifier\n --\x3e src/main.rs:5:16\n  |\n5 | fn dangle() -> &String {\n  |                ^ expected named lifetime parameter\n  |\n  = help: this function's return type contains a borrowed value, but there is no value for it to be borrowed from\nhelp: consider using the `'static` lifetime\n  |\n5 | fn dangle() -> &'static String {\n  |                 +++++++\n\nFor more information about this error, try `rustc --explain E0106`.\nerror: could not compile `ownership` due to previous error\n")),(0,l.kt)("p",null,"\u8fd9\u4e2a\u9519\u8bef\u6d88\u606f\u63d0\u5230\u4e86\u4e00\u4e2a\u6211\u4eec\u5c1a\u672a\u6d89\u53ca\u7684\u7279\u6027\uff1a\u751f\u547d\u5468\u671f\u3002\u6211\u4eec\u5c06\u5728\u7b2c 10 \u7ae0\u4e2d\u8be6\u7ec6\u8ba8\u8bba\u751f\u547d\u5468\u671f\u3002\u4f46\u662f\uff0c\u5982\u679c\u5ffd\u7565\u6709\u5173\u751f\u547d\u5468\u671f\u7684\u90e8\u5206\uff0c\u8be5\u6d88\u606f\u786e\u5b9e\u5305\u542b\u4e86\u4e3a\u4ec0\u4e48\u6b64\u4ee3\u7801\u662f\u4e00\u4e2a\u95ee\u9898\u7684\u5173\u952e\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"this function's return type contains a borrowed value, but there is no value\nfor it to be borrowed from\n")),(0,l.kt)("p",null,"\u8ba9\u6211\u4eec\u4ed4\u7ec6\u770b\u770b\u6211\u4eec\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"dangle")," \u4ee3\u7801\u7684\u6bcf\u4e2a\u9636\u6bb5\u90fd\u53d1\u751f\u4e86\u4ec0\u4e48\uff1a"),(0,l.kt)("p",null,"\u6587\u4ef6\u540d\uff1asrc/main.rs"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},'fn dangle() -> &String { // dangle \u8fd4\u56de\u4e00\u4e2a String \u7684\u5f15\u7528\n\n    let s = String::from("hello"); // s \u662f\u4e00\u4e2a\u65b0\u7684 String\n\n    &s // \u6211\u4eec\u8fd4\u56de\u4e00\u4e2a\u5bf9 String s \u7684\u5f15\u7528\n} // \u5728\u8fd9\u91cc\uff0cs \u8d85\u51fa\u4e86\u4f5c\u7528\u57df\uff0c\u88ab drop \u6389\u3002\u5176\u5185\u5b58\u6d88\u5931\u3002\n  // \u5371\u9669\uff01\n')),(0,l.kt)("p",null,"\u7531\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},"s")," \u662f\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"dangle")," \u4e2d\u521b\u5efa\u7684\uff0c\u5f53 ",(0,l.kt)("inlineCode",{parentName:"p"},"dangle")," \u7684\u4ee3\u7801\u5b8c\u6210\u65f6\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"s")," \u5c06\u88ab\u91ca\u653e\u3002\u4f46\u662f\u6211\u4eec\u8bd5\u56fe\u8fd4\u56de\u4e00\u4e2a\u5bf9\u5b83\u7684\u5f15\u7528\u3002\u8fd9\u610f\u5473\u7740\u6b64\u5f15\u7528\u5c06\u6307\u5411\u4e00\u4e2a\u65e0\u6548\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"String"),"\u3002\u8fd9\u4e0d\u597d\uff01Rust \u4e0d\u4f1a\u5141\u8bb8\u6211\u4eec\u8fd9\u6837\u505a\u3002"),(0,l.kt)("p",null,"\u5728\u8fd9\u91cc\u7684\u89e3\u51b3\u65b9\u6848\u662f\u76f4\u63a5\u8fd4\u56de ",(0,l.kt)("inlineCode",{parentName:"p"},"String"),"\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},'fn no_dangle() -> String {\n    let s = String::from("hello");\n\n    s\n}\n')),(0,l.kt)("p",null,"\u8fd9\u53ef\u4ee5\u6beb\u65e0\u95ee\u9898\u5730\u5de5\u4f5c\u3002\u6240\u6709\u6743\u88ab\u79fb\u51fa\uff0c\u6ca1\u6709\u4efb\u4f55\u4e1c\u897f\u88ab\u91ca\u653e\u3002"),(0,l.kt)("h3",{id:"\u5f15\u7528\u89c4\u5219"},(0,l.kt)("a",{parentName:"h3",href:"https://doc.rust-lang.org/book/ch04-02-references-and-borrowing.html#the-rules-of-references"},"\u5f15\u7528\u89c4\u5219")),(0,l.kt)("p",null,"\u8ba9\u6211\u4eec\u56de\u987e\u4e00\u4e0b\u5173\u4e8e\u5f15\u7528\u7684\u8ba8\u8bba\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5728\u4efb\u610f\u7ed9\u5b9a\u65f6\u95f4\uff0c\u60a8\u8981\u4e48\u53ef\u4ee5\u6709\u4e00\u4e2a\u53ef\u53d8\u5f15\u7528\uff0c\u8981\u4e48\u53ef\u4ee5\u6709\u4efb\u610f\u6570\u91cf\u7684\u4e0d\u53ef\u53d8\u5f15\u7528\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5f15\u7528\u5fc5\u987b\u59cb\u7ec8\u662f\u6709\u6548\u7684\u3002")),(0,l.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u5c06\u7814\u7a76\u4e00\u79cd\u4e0d\u540c\u7c7b\u578b\u7684\u5f15\u7528\uff1a\u5207\u7247\u3002"))}c.isMDXComponent=!0}}]);