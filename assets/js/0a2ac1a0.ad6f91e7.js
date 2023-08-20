"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[8348],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>g});var r=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=r.createContext({}),p=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},m=function(e){var n=p(e.components);return r.createElement(o.Provider,{value:n},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},k=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,a=e.originalType,o=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=p(t),k=l,g=u["".concat(o,".").concat(k)]||u[k]||c[k]||a;return t?r.createElement(g,s(s({ref:n},m),{},{components:t})):r.createElement(g,s({ref:n},m))}));function g(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var a=t.length,s=new Array(a);s[0]=k;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i[u]="string"==typeof e?e:l,s[1]=i;for(var p=2;p<a;p++)s[p]=t[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}k.displayName="MDXCreateElement"},4007:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=t(7462),l=(t(7294),t(3905));const a={title:"Rust\u6240\u6709\u6743(ownership)",sidebar_label:"Rust\u6240\u6709\u6743",linkTitle:"Rust\u6240\u6709\u6743",weight:202308201045,description:"Rust\u6240\u6709\u6743"},s=void 0,i={unversionedId:"rust/rust-learn/concepts/ownership",id:"rust/rust-learn/concepts/ownership",title:"Rust\u6240\u6709\u6743(ownership)",description:"Rust\u6240\u6709\u6743",source:"@site/docs/rust/rust-learn/concepts/02-ownership.md",sourceDirName:"rust/rust-learn/concepts",slug:"/rust/rust-learn/concepts/ownership",permalink:"/docs/rust/rust-learn/concepts/ownership",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/rust/rust-learn/concepts/02-ownership.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1692518136,formattedLastUpdatedAt:"Aug 20, 2023",sidebarPosition:2,frontMatter:{title:"Rust\u6240\u6709\u6743(ownership)",sidebar_label:"Rust\u6240\u6709\u6743",linkTitle:"Rust\u6240\u6709\u6743",weight:202308201045,description:"Rust\u6240\u6709\u6743"},sidebar:"rustLearn",previous:{title:"Rust\u57fa\u672c\u6570\u636e\u7c7b\u578b",permalink:"/docs/rust/rust-learn/concepts/concepts-base"}},o={},p=[{value:"1.\u4ec0\u4e48\u662fOwnership",id:"1\u4ec0\u4e48\u662fownership",level:2},{value:"2.\u53d8\u91cf\u4e0e\u6570\u636e\u4ea4\u4e92\u65b9\u5f0f",id:"2\u53d8\u91cf\u4e0e\u6570\u636e\u4ea4\u4e92\u65b9\u5f0f",level:2},{value:"2.1 Move\u8bed\u4e49",id:"21-move\u8bed\u4e49",level:3},{value:"<strong>2.2 Clone\u8bed\u4e49</strong>",id:"22-clone\u8bed\u4e49",level:3},{value:"2.3 Copy\u8bed\u4e49",id:"23-copy\u8bed\u4e49",level:3},{value:"2.4 Clone\u548cCopy\u7684\u533a\u522b",id:"24-clone\u548ccopy\u7684\u533a\u522b",level:3},{value:"3. Ownership\u548c\u51fd\u6570",id:"3-ownership\u548c\u51fd\u6570",level:2},{value:"3.1 \u6570\u636e\u4f20\u5165\u51fd\u6570",id:"31-\u6570\u636e\u4f20\u5165\u51fd\u6570",level:3},{value:"3.2 Ownership\u4e0e\u51fd\u6570\u8fd4\u56de\u503c",id:"32-ownership\u4e0e\u51fd\u6570\u8fd4\u56de\u503c",level:3},{value:"4. \u5f15\u7528\u548c\u501f\u7528",id:"4-\u5f15\u7528\u548c\u501f\u7528",level:2},{value:"4.1 \u60ac\u5782\u5f15\u7528\uff08Dangling References\uff09",id:"41-\u60ac\u5782\u5f15\u7528dangling-references",level:3},{value:"5. \u603b\u7ed3",id:"5-\u603b\u7ed3",level:2}],m={toc:p},u="wrapper";function c(e){let{components:n,...t}=e;return(0,l.kt)(u,(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"1\u4ec0\u4e48\u662fownership"},"1.\u4ec0\u4e48\u662fOwnership"),(0,l.kt)("p",null,"Rust \u7684\u6240\u6709\u6743\uff08Ownership\uff09\u7cfb\u7edf\u662f\u5176\u72ec\u7279\u7684",(0,l.kt)("strong",{parentName:"p"},"\u5185\u5b58\u7ba1\u7406\u673a\u5236"),"\uff0c\u65e8\u5728\u786e\u4fdd\u4ee3\u7801\u5728\u8fd0\u884c\u65f6\u6ca1\u6709\u6570\u636e\u7ade\u4e89\u3001\u7a7a\u6307\u9488\u548c\u5185\u5b58\u6cc4\u6f0f\u7b49\u95ee\u9898\u3002\u6240\u6709\u6743\u7cfb\u7edf\u662f Rust \u7684\u6838\u5fc3\u6982\u5ff5\u4e4b\u4e00\uff0c\u5b83\u5e2e\u52a9\u5f00\u53d1\u8005\u5728\u7f16\u5199\u4ee3\u7801\u65f6\u66f4\u8f7b\u677e\u5730\u7ba1\u7406\u5185\u5b58\uff0c\u907f\u514d\u5e38\u89c1\u7684\u7f16\u7a0b\u9519\u8bef\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u7c7b\u6bd4Java\u5c31\u76f8\u5f53\u4e8eJVM\u7684\u5783\u573e\u6536\u96c6\u5668")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Ownership")," \u7684\u4e09\u6761\u89c4\u5219\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u6bcf\u4e00\u4e2aValue\u90fd\u6709\u62e5\u6709\u8005"),(0,l.kt)("li",{parentName:"ol"},"Value\u540c\u4e00\u65f6\u95f4\u53ea\u80fd\u6709\u4e00\u4e2a\u62e5\u6709\u8005"),(0,l.kt)("li",{parentName:"ol"},"\u5f53\u6240\u6709\u8005\u8d85\u51fa\u4f5c\u7528\u57df\u6216\u624b\u52a8\u91ca\u653e\u6240\u6709\u6743\u65f6\uff0c\u503c\u5c06\u88ab\u9500\u6bc1\u5e76\u91ca\u653e\u5176\u5360\u7528\u7684\u5185\u5b58")),(0,l.kt)("h2",{id:"2\u53d8\u91cf\u4e0e\u6570\u636e\u4ea4\u4e92\u65b9\u5f0f"},"2.\u53d8\u91cf\u4e0e\u6570\u636e\u4ea4\u4e92\u65b9\u5f0f"),(0,l.kt)("p",null,"\u53d8\u91cf\u4e0e\u6570\u636e\u4ea4\u4e92\u65b9\u5f0f\u6709\u4e09\u79cd\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Move\u8bed\u4e49"),(0,l.kt)("li",{parentName:"ul"},"Clone\u8bed\u4e49"),(0,l.kt)("li",{parentName:"ul"},"Copy\u8bed\u4e49")),(0,l.kt)("h3",{id:"21-move\u8bed\u4e49"},"2.1 Move\u8bed\u4e49"),(0,l.kt)("p",null,"\u5148\u770b\u4e0b\u9762\u7684\u4f8b\u5b50\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'fn main() {\n    let s = "ttt".to_string();\n    let ss = s;\n    print!("{}",s); //\u7f16\u8bd1\u62a5\u9519\n}\n')),(0,l.kt)("p",null,"\u4e0a\u9762\u4ee3\u7801\u7f16\u8bd1\u4f1a\u62a5\u4ee5\u4e0b\u9519\u8bef\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'error[E0382]: borrow of moved value: `s`\n --\x3e src\\main.rs:4:17\n  |\n2 |     let s = "ttt".to_string();\n  |         - move occurs because `s` has type `String`, which does not implement the `Copy` trait\n3 |     let ss = s;\n  |              - value moved here\n4 |     print!("{}",s);\n  |                 ^ value borrowed here after move\n  |\n  = note: this error originates in the macro `$crate::format_args` which comes from the expansion of the macro `print` (in Nightly builds, run with -Z macro-backtrace for more info)\nhelp: consider cloning the value if the performance cost is acceptable\n  |\n3 |     let ss = s.clone();\n  |               ++++++++\n')),(0,l.kt)("p",null,"\u4ece\u4e0a\u9762\u7684\u4f8b\u5b50\u53ef\u4ee5\u770b\u51fa\u6765\uff1a ",(0,l.kt)("strong",{parentName:"p"},"\u5f53\u5c06\u4e00\u4e2a\u503c\u8d4b\u7ed9\u53e6\u4e00\u4e2a\u53d8\u91cf\u65f6\uff0c\u5176\u6240\u6709\u6743\u4f1a\u4ece\u4e00\u4e2a\u53d8\u91cf\u79fb\u52a8\u5230\u53e6\u4e00\u4e2a\u53d8\u91cf\uff0c\u800c\u4e0d\u662f\u7b80\u5355\u5730\u590d\u5236\u6570\u636e\u3002\u8fd9\u6709\u52a9\u4e8e\u907f\u514d\u8d44\u6e90\u91cd\u590d\u91ca\u653e\u548c\u6570\u636e\u7ade\u4e89\u7684\u95ee\u9898\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},'let s1 = String::from("hello");\nlet s2 = s1;\n')),(0,l.kt)("p",null,"\u90a3\u4e48\u5185\u5b58\u4e2d\u662f\u600e\u4e48\u6837\u7684\u5462\uff1f"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/rust/rust-learn/concepts/trpl04-01.svg",alt:"trpl04-01"})),(0,l.kt)("p",null,"\u4e0a\u9762\u6240\u793a\u5c31\u662f\u7b2c\u4e00\u6bb5\u4ee3\u7801 ",(0,l.kt)("strong",{parentName:"p"},'let s1 = String::from("hello");')),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/rust/rust-learn/concepts/trpl04-04.svg",alt:"trpl04-04"})),(0,l.kt)("p",null,"\u7b2c\u4e8c\u6bb5\u4ee3\u7801\uff0c\u8fd9\u4e2a\u6709\u70b9\u7c7b\u4f3c\u4e8eJava\u4e2d\u7684\u6d45\u62f7\u8d1d\uff0c\u800c\u5728 Rust \u540c\u65f6\u4f7f\u7b2c\u4e00\u4e2a\u53d8\u91cf\u65e0\u6548\u4e86\uff0c\u8fd9\u4e2a\u64cd\u4f5c\u88ab\u79f0\u4e3a ",(0,l.kt)("strong",{parentName:"p"},"\u79fb\u52a8"),"\uff08",(0,l.kt)("em",{parentName:"p"},"move"),"\uff09"),(0,l.kt)("h3",{id:"22-clone\u8bed\u4e49"},(0,l.kt)("strong",{parentName:"h3"},"2.2 Clone\u8bed\u4e49")),(0,l.kt)("p",null,"\u5982\u679c\u9700\u8981\u6df1\u5ea6\u590d\u5236(\u8fd9\u91cc\u4e5f\u5c31\u662f\u6211\u4eec\u5e73\u65f6\u8bf4\u7684\u6df1\u5ea6\u62f7\u8d1d-Java\u4e2d\u4e5f\u6709\u7c7b\u4f3c\u7684\u6982\u5ff5)\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u4e00\u4e2a\u53eb\u505aclone\u7684\u65b9\u6cd5\uff0c\u8fd9\u91cc\u6211\u4eec\u9700\u8981\u5b9a\u4e49\u7684\u7ed3\u6784\u4f53\u5b9e\u73b0Clone trait."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},'fn main() {\n    let s1 = String::from("hello");\n    let s2 = s1.clone();\n\n    println!("s1 = {}, s2 = {}", s1, s2);\n}\n')),(0,l.kt)("h3",{id:"23-copy\u8bed\u4e49"},"2.3 Copy\u8bed\u4e49"),(0,l.kt)("p",null,"\u5982\u4e0b\u57fa\u7840\u6570\u636e\u7c7b\u578b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},'fn main() {\n    let x = 5;\n    let y = x;\n\n    println!("x = {}, y = {}", x, y);\n}\n')),(0,l.kt)("p",null,"\u8fd9\u4e2a\u548c\u4e0a\u9762String\u7684\u4f8b\u5b50\u4e0d\u4e00\u6837\uff0c"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Rust \u6709\u4e00\u4e2a\u53eb\u505a ",(0,l.kt)("inlineCode",{parentName:"strong"},"Copy")," trait \u7684\u7279\u6b8a\u6ce8\u89e3\uff0c\u53ef\u4ee5\u7528\u5728\u7c7b\u4f3c\u6574\u578b\u8fd9\u6837\u7684\u5b58\u50a8\u5728\u6808\u4e0a\u7684\u7c7b\u578b\u4e0a\u3002\u5982\u679c\u4e00\u4e2a\u7c7b\u578b\u5b9e\u73b0\u4e86 ",(0,l.kt)("inlineCode",{parentName:"strong"},"Copy")," trait\uff0c\u90a3\u4e48\u4e00\u4e2a\u65e7\u7684\u53d8\u91cf\u5728\u5c06\u5176\u8d4b\u503c\u7ed9\u5176\u4ed6\u53d8\u91cf\u540e\u4ecd\u7136\u53ef\u7528\u3002")),(0,l.kt)("h3",{id:"24-clone\u548ccopy\u7684\u533a\u522b"},"2.4 Clone\u548cCopy\u7684\u533a\u522b"),(0,l.kt)("p",null,"\u5728 Rust \u4e2d\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"Clone")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"Copy")," \u662f\u4e24\u4e2a trait\uff0c\u7528\u4e8e\u5b9a\u4e49\u7c7b\u578b\u7684\u590d\u5236\u548c\u514b\u9686\u884c\u4e3a\u3002\u5b83\u4eec\u6709\u4e00\u4e9b\u91cd\u8981\u7684\u533a\u522b\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"Copy")," Trait\uff1a",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Copy")," trait \u9002\u7528\u4e8e\u5177\u6709\u56fa\u5b9a\u5927\u5c0f\u7684\u7b80\u5355\u503c\u7c7b\u578b\uff0c\u5982\u6574\u6570\u3001\u6d6e\u70b9\u6570\u3001\u5e03\u5c14\u503c\u7b49\u3002\u5f53\u7c7b\u578b\u5b9e\u73b0\u4e86 ",(0,l.kt)("inlineCode",{parentName:"li"},"Copy")," trait \u65f6\uff0c\u5b83\u8868\u793a\u8be5\u7c7b\u578b\u7684\u503c\u5728\u8fdb\u884c\u8d4b\u503c\u64cd\u4f5c\u65f6\u4f1a\u8fdb\u884c\u590d\u5236\uff0c\u800c\u4e0d\u662f\u79fb\u52a8\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5b9e\u73b0\u4e86 ",(0,l.kt)("inlineCode",{parentName:"li"},"Copy")," trait \u7684\u7c7b\u578b\u5728\u8d4b\u503c\u65f6\u4f1a\u590d\u5236\u5176\u503c\uff0c\u4e0d\u4f1a\u53d1\u751f\u6240\u6709\u6743\u8f6c\u79fb\u3002")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},'#[derive(Copy, Clone)]\nstruct Point {\n    x: i32,\n    y: i32,\n}\n\nfn main() {\n    let p1 = Point { x: 1, y: 2 };\n    let p2 = p1; // \u590d\u5236 Point \u7684\u503c\n    println!("p1: {:?}, p2: {:?}", p1, p2);\n}\n')),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"Clone")," Trait\uff1a",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Clone")," trait \u9002\u7528\u4e8e\u6240\u6709\u7c7b\u578b\uff0c\u5b83\u63d0\u4f9b\u4e86\u4e00\u79cd\u81ea\u5b9a\u4e49\u590d\u5236\u884c\u4e3a\u7684\u65b9\u5f0f\u3002\u901a\u8fc7\u5b9e\u73b0 ",(0,l.kt)("inlineCode",{parentName:"li"},"Clone")," trait\uff0c\u60a8\u53ef\u4ee5\u5b9a\u4e49\u7c7b\u578b\u5982\u4f55\u514b\u9686\u81ea\u8eab\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5b9e\u73b0\u4e86 ",(0,l.kt)("inlineCode",{parentName:"li"},"Clone")," trait \u7684\u7c7b\u578b\u5728\u8fdb\u884c\u514b\u9686\u64cd\u4f5c\u65f6\u4f1a\u8fdb\u884c\u201c\u6df1\u62f7\u8d1d\u201d\u3002")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},'#[derive(Clone)]\nstruct Person {\n    name: String,\n    age: i32,\n}\n\nfn main() {\n    let person1 = Person {\n        name: String::from("Alice"),\n        age: 30,\n    };\n    let person2 = person1.clone(); // \u6df1\u62f7\u8d1d Person\n    println!("person1: {:?}, person2: {:?}", person1, person2);\n}\n')),(0,l.kt)("p",null,"\u7efc\u4e0a\u6240\u8ff0\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"Copy")," trait \u9002\u7528\u4e8e\u7b80\u5355\u503c\u7c7b\u578b\uff0c\u5f53\u503c\u590d\u5236\u65f6\u4e0d\u4f1a\u53d1\u751f\u6240\u6709\u6743\u8f6c\u79fb\u3002\u800c ",(0,l.kt)("inlineCode",{parentName:"p"},"Clone")," trait \u53ef\u4ee5\u9002\u7528\u4e8e\u4efb\u4f55\u7c7b\u578b\uff0c\u7528\u4e8e\u81ea\u5b9a\u4e49\u514b\u9686\u884c\u4e3a\uff0c\u901a\u5e38\u4f1a\u8fdb\u884c\u201c\u6df1\u62f7\u8d1d\u201d\u3002\u9009\u62e9\u4f7f\u7528\u54ea\u4e2a trait \u53d6\u51b3\u4e8e\u7c7b\u578b\u7684\u7279\u6027\u548c\u60a8\u60f3\u8981\u7684\u590d\u5236\u884c\u4e3a\u3002\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u5b9e\u73b0\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"Clone")," trait \u7684\u7c7b\u578b\u53ef\u4ee5\u901a\u8fc7\u8c03\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"clone()")," \u65b9\u6cd5\u8fdb\u884c\u514b\u9686\uff0c\u4f46\u8fd9\u4f1a\u4ea7\u751f\u4e00\u4e9b\u989d\u5916\u7684\u5f00\u9500\u3002"),(0,l.kt)("h2",{id:"3-ownership\u548c\u51fd\u6570"},"3. Ownership\u548c\u51fd\u6570"),(0,l.kt)("h3",{id:"31-\u6570\u636e\u4f20\u5165\u51fd\u6570"},"3.1 \u6570\u636e\u4f20\u5165\u51fd\u6570"),(0,l.kt)("p",null,"\u9996\u5148\u6211\u770b\u4e00\u4e0b\u4e0b\u9762\u7684\u4f8b\u5b50\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},'fn main() {\n    let s = String::from("hello world");  // s \u8fdb\u5165\u4f5c\u7528\u57df\n    mxsm_ownership(s); // s\u7684\u503c\u8f6c\u79fb\u5230\u51fd\u6570\u91cc\u9762\n    //println!("{}", s);  // \u8fd9\u8fb9s\u4e0d\u5728\u6709\u6548 \u7f16\u8bd1\u62a5\u9519\n\n    //mxsm_ownership1(&s); //move\u8bed\u4e49 \u8fd9\u8fb9s\u4e0d\u5728\u6709\u6548 \u7f16\u8bd1\u62a5\u9519\n    //println!("{}", s);// \u8fd9\u8fb9s\u4e0d\u5728\u6709\u6548 \u7f16\u8bd1\u62a5\u9519\n\n    //\u57fa\u7840\u6570\u636e\n    let x = 1;\n    mxsm_copy(x); //\u57fa\u7840\u6570\u636e\u90fd\u5b9e\u73b0\u4e86Copy\u8bed\u4e49\u6240\u4ee5\u8fd9\u91cc\u4f7f\u7528\u7684\u662fCopy\u8bed\u4e49\u800c\u4e0d\u662fMovie\n    println!("{}", x) //\u8fd9\u91cc\u4f9d\u7136\u6709\u6548\n}\n\nfn mxsm_ownership(s:String){\n    println!("{}", s)\n}\n\nfn mxsm_ownership1(s:&str){\n    println!("{}", s)\n}\n\nfn mxsm_copy(i:i32){\n    println!("{}", i);\n}\n')),(0,l.kt)("p",null,"\u5c06\u503c\u4f20\u9012\u7ed9\u51fd\u6570\u4e0e\u7ed9\u53d8\u91cf\u8d4b\u503c\u7684\u539f\u7406\u76f8\u4f3c\u3002\u5411\u51fd\u6570\u4f20\u9012\u503c\u53ef\u80fd\u4f1a\u79fb\u52a8\u6216\u8005\u590d\u5236\uff0c\u5c31\u50cf\u8d4b\u503c\u8bed\u53e5\u4e00\u6837\u3002"),(0,l.kt)("h3",{id:"32-ownership\u4e0e\u51fd\u6570\u8fd4\u56de\u503c"},"3.2 Ownership\u4e0e\u51fd\u6570\u8fd4\u56de\u503c"),(0,l.kt)("p",null,"\u4f8b\u5b50\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},'fn main() {\n    let s1 = gives_ownership();         // gives_ownership \u5c06\u8fd4\u56de\u503c\n                                        // \u8f6c\u79fb\u7ed9 s1\n\n    let s2 = String::from("hello");     // s2 \u8fdb\u5165\u4f5c\u7528\u57df\n\n    let s3 = takes_and_gives_back(s2);  // s2 \u88ab\u79fb\u52a8\u5230\n                                        // takes_and_gives_back \u4e2d\uff0c\n                                        // \u5b83\u4e5f\u5c06\u8fd4\u56de\u503c\u79fb\u7ed9 s3\n} // \u8fd9\u91cc\uff0cs3 \u79fb\u51fa\u4f5c\u7528\u57df\u5e76\u88ab\u4e22\u5f03\u3002s2 \u4e5f\u79fb\u51fa\u4f5c\u7528\u57df\uff0c\u4f46\u5df2\u88ab\u79fb\u8d70\uff0c\n  // \u6240\u4ee5\u4ec0\u4e48\u4e5f\u4e0d\u4f1a\u53d1\u751f\u3002s1 \u79bb\u5f00\u4f5c\u7528\u57df\u5e76\u88ab\u4e22\u5f03\n\nfn gives_ownership() -> String {             // gives_ownership \u4f1a\u5c06\n                                             // \u8fd4\u56de\u503c\u79fb\u52a8\u7ed9\n                                             // \u8c03\u7528\u5b83\u7684\u51fd\u6570\n\n    let some_string = String::from("yours"); // some_string \u8fdb\u5165\u4f5c\u7528\u57df\u3002\n\n    some_string                              // \u8fd4\u56de some_string \n                                             // \u5e76\u79fb\u51fa\u7ed9\u8c03\u7528\u7684\u51fd\u6570\n                                             // \n}\n\n// takes_and_gives_back \u5c06\u4f20\u5165\u5b57\u7b26\u4e32\u5e76\u8fd4\u56de\u8be5\u503c\nfn takes_and_gives_back(a_string: String) -> String { // a_string \u8fdb\u5165\u4f5c\u7528\u57df\n                                                      // \n\n    a_string  // \u8fd4\u56de a_string \u5e76\u79fb\u51fa\u7ed9\u8c03\u7528\u7684\u51fd\u6570\n}\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u53d8\u91cf\u7684\u6240\u6709\u6743\u603b\u662f\u9075\u5faa\u76f8\u540c\u7684\u6a21\u5f0f\uff1a\u5c06\u503c\u8d4b\u7ed9\u53e6\u4e00\u4e2a\u53d8\u91cf\u65f6\u79fb\u52a8\u5b83\u3002\u5f53\u6301\u6709\u5806\u4e2d\u6570\u636e\u503c\u7684\u53d8\u91cf\u79bb\u5f00\u4f5c\u7528\u57df\u65f6\uff0c\u5176\u503c\u5c06\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"strong"},"drop")," \u88ab\u6e05\u7406\u6389\uff0c\u9664\u975e\u6570\u636e\u88ab\u79fb\u52a8\u4e3a\u53e6\u4e00\u4e2a\u53d8\u91cf\u6240\u6709\u3002")),(0,l.kt)("p",null,"\u4ece\u4e0a\u9762\u53ef\u4ee5\u770b\u51fa\u6765\uff0c\u57fa\u672c\u4e0a\u90fd\u662f\u5c06\u7ed3\u6784\u4f53\u5b9e\u4f8b\u4f20\u5165\u65b9\u6cd5\u4e2d\u6216\u8005\u8fd4\u56de\u3002\u5927\u5bb6\u60f3\u4e00\u4e0b\u5982\u679c\u8fd9\u4e2a\u8fd9\u4e2a\u7ed3\u6784\u4f53\u7684\u5b9e\u4f8b\u5360\u7528\u7684\u7a7a\u95f4\u5f88\u5927\u8fd9\u6837\u5c31\u4f1a\u9020\u6210\u6027\u80fd\u95ee\u9898\u3002\u90a3\u4e48\u5982\u4f55\u89e3\u51b3\u3002\u8fd9\u91cc\u5c31\u662f\u4e0b\u9762\u9700\u8981\u8bf4\u5230\u7684\u5f15\u7528\u3002"),(0,l.kt)("h2",{id:"4-\u5f15\u7528\u548c\u501f\u7528"},"4. \u5f15\u7528\u548c\u501f\u7528"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5f15\u7528"),"\uff08",(0,l.kt)("em",{parentName:"p"},"reference"),"\uff09\u50cf\u4e00\u4e2a\u6307\u9488\uff0c\u56e0\u4e3a\u5b83\u662f\u4e00\u4e2a\u5730\u5740\uff0c\u6211\u4eec\u53ef\u4ee5\u7531\u6b64\u8bbf\u95ee\u50a8\u5b58\u4e8e\u8be5\u5730\u5740\u7684\u5c5e\u4e8e\u5176\u4ed6\u53d8\u91cf\u7684\u6570\u636e\u3002 \u4e0e\u6307\u9488\u4e0d\u540c\uff0c\u5f15\u7528\u786e\u4fdd\u6307\u5411\u67d0\u4e2a\u7279\u5b9a\u7c7b\u578b\u7684\u6709\u6548\u503c\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},'fn main() {\n    let s1 = String::from("hello");\n\n    let len = calculate_length(&s1);\n\n    println!("The length of \'{}\' is {}.", s1, len);\n}\n\nfn calculate_length(s: &String) -> usize {\n    s.len()\n}\n')),(0,l.kt)("p",null,"\u793a\u610f\u56fe\u5982\u4e0b\uff1a"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"&s1")," \u8bed\u6cd5\u8ba9\u6211\u4eec\u521b\u5efa\u4e00\u4e2a \u6307\u5411 \u503c ",(0,l.kt)("inlineCode",{parentName:"strong"},"s1")," \u7684\u5f15\u7528\uff0c\u4f46\u662f\u5e76\u4e0d\u62e5\u6709\u5b83\u3002\u56e0\u4e3a\u5e76\u4e0d\u62e5\u6709\u8fd9\u4e2a\u503c\uff0c\u6240\u4ee5\u5f53\u5f15\u7528\u505c\u6b62\u4f7f\u7528\u65f6\uff0c\u5b83\u6240\u6307\u5411\u7684\u503c\u4e5f\u4e0d\u4f1a\u88ab\u4e22\u5f03")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},'fn main() {\n    let s = String::from("hello world");  // s \u8fdb\u5165\u4f5c\u7528\u57df\n    let ss = &s;\n    let sss = ss;\n    println!("{}", ss); //ss\u4f9d\u7136\u6709\u6548\n}\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6211\u4eec\u5c06\u521b\u5efa\u4e00\u4e2a\u5f15\u7528\u7684\u884c\u4e3a\u79f0\u4e3a \u501f\u7528\uff08","*","*","*","*","*","borrowing","*","*","*","*","*\uff09, \u4f46\u662f\u501f\u7528\u4e0d\u80fd\u6539\u53d8\u501f\u7528\u5bf9\u8c61\u7684\u503c\uff0c\u5982\u679c\u9700\u8981\u80fd\u591f\u6539\u53d8\u501f\u7528\u5bf9\u8c61\u7684\u503c\u9700\u8981\u589e\u52a0 mut\u5173\u952e\u5b57")),(0,l.kt)("h3",{id:"41-\u60ac\u5782\u5f15\u7528dangling-references"},"4.1 \u60ac\u5782\u5f15\u7528\uff08Dangling References\uff09"),(0,l.kt)("p",null,"\u5728\u5177\u6709\u6307\u9488\u7684\u8bed\u8a00\u4e2d\uff0c\u5f88\u5bb9\u6613\u901a\u8fc7\u91ca\u653e\u5185\u5b58\u65f6\u4fdd\u7559\u6307\u5411\u5b83\u7684\u6307\u9488\u800c\u9519\u8bef\u5730\u751f\u6210\u4e00\u4e2a ",(0,l.kt)("strong",{parentName:"p"},"\u60ac\u5782\u6307\u9488"),"\uff08",(0,l.kt)("em",{parentName:"p"},"dangling pointer"),"\uff09\uff0c\u6240\u8c13\u60ac\u5782\u6307\u9488\u662f\u5176\u6307\u5411\u7684\u5185\u5b58\u53ef\u80fd\u5df2\u7ecf\u88ab\u5206\u914d\u7ed9\u5176\u5b83\u6301\u6709\u8005\u3002\u76f8\u6bd4\u4e4b\u4e0b\uff0c\u5728 Rust \u4e2d\u7f16\u8bd1\u5668\u786e\u4fdd\u5f15\u7528\u6c38\u8fdc\u4e5f\u4e0d\u4f1a\u53d8\u6210\u60ac\u5782\u72b6\u6001\uff1a\u5f53\u4f60\u62e5\u6709\u4e00\u4e9b\u6570\u636e\u7684\u5f15\u7528\uff0c\u7f16\u8bd1\u5668\u786e\u4fdd\u6570\u636e\u4e0d\u4f1a\u5728\u5176\u5f15\u7528\u4e4b\u524d\u79bb\u5f00\u4f5c\u7528\u57df\u3002"),(0,l.kt)("p",null,"\u4f8b\u5b50\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},'fn dangle() -> &String { // dangle \u8fd4\u56de\u4e00\u4e2a\u5b57\u7b26\u4e32\u7684\u5f15\u7528\n\n    let s = String::from("hello"); // s \u662f\u4e00\u4e2a\u65b0\u5b57\u7b26\u4e32\n\n    &s // \u8fd4\u56de\u5b57\u7b26\u4e32 s \u7684\u5f15\u7528\n}//\u79bb\u5f00\u65b9\u6cd5s\u4f5c\u7528\u57df\u7ed3\u675f\uff0c\u5185\u5b58\u88ab\u91ca\u653e\uff0c \u800c\u5f15\u7528\u8fd8\u5728\n')),(0,l.kt)("p",null,"\u6240\u4ee5\u8fd9\u79cd\u60c5\u51b5\u4e0b\u4f1a\u7f16\u8bd1\u62a5\u9519.Rust\u4e0d\u5141\u8bb8\u60ac\u5782\u5f15\u7528\u7684\u5b58\u5728\u3002"),(0,l.kt)("h2",{id:"5-\u603b\u7ed3"},"5. \u603b\u7ed3"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"\u5728\u4efb\u610f\u7ed9\u5b9a\u65f6\u95f4\uff0c\u8981\u4e48 \u53ea\u80fd\u6709\u4e00\u4e2a\u53ef\u53d8\u5f15\u7528\uff0c\u8981\u4e48 \u53ea\u80fd\u6709\u591a\u4e2a\u4e0d\u53ef\u53d8\u5f15\u7528"),"\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"\u5f15\u7528\u5fc5\u987b\u603b\u662f\u6709\u6548\u7684")),(0,l.kt)("p",{parentName:"li"},"\u60ac\u5782\u5f15\u7528\u5c31\u662f\u4e00\u4e2a\u65e0\u6548\u7684\u5f15\u7528\uff0c\u6240\u4ee5Rust\u7f16\u8bd1\u5668\u5728\u7f16\u8bd1\u7684\u65f6\u5019\u68c0\u6d4b\u675c\u7edd\u6b64\u7c7b\u5f15\u7528\u53d1\u751f\u3002"))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u6211\u662f\u8682\u8681\u80cc\u5927\u8c61\uff0c\u6587\u7ae0\u5bf9\u4f60\u6709\u5e2e\u52a9\u7ed9",(0,l.kt)("a",{parentName:"p",href:"https://github.com/mxsm/mxsm-website"},"\u9879\u76ee\u70b9\u4e2a\u2764"),"\u5173\u6ce8\u6211",(0,l.kt)("a",{parentName:"p",href:"https://github.com/mxsm"},"GitHub:mxsm"),"\uff0c\u6587\u7ae0\u6709\u4e0d\u6b63\u786e\u7684\u5730\u65b9\u8bf7\u60a8\u65a7\u6b63,\u521b\u5efa",(0,l.kt)("a",{parentName:"p",href:"https://github.com/mxsm/mxsm-website/issues"},"ISSUE\u63d0\u4ea4PR"),"~","\u8c22\u8c22! Emal:",(0,l.kt)("a",{parentName:"p",href:"mailto:mxsm@apache.com"},"mxsm@apache.com"))))}c.isMDXComponent=!0}}]);