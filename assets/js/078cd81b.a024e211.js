"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[2166],{3667:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>t,toc:()=>o});var i=s(4848),r=s(8453);const c={title:"\u53d8\u91cf\u548c\u53ef\u53d8\u6027",sidebar_label:"3.1. \u53d8\u91cf\u548c\u53ef\u53d8\u6027",linkTitle:"\u53d8\u91cf\u548c\u53ef\u53d8\u6027",weight:202308051736,description:"\u53d8\u91cf\u548c\u53ef\u53d8\u6027"},l="\u53d8\u91cf\u548c\u53ef\u53d8\u6027",t={id:"rust/official-doc/concepts/variables-mutability",title:"\u53d8\u91cf\u548c\u53ef\u53d8\u6027",description:"\u53d8\u91cf\u548c\u53ef\u53d8\u6027",source:"@site/docs/rust/official-doc/concepts/01-variables-mutability.md",sourceDirName:"rust/official-doc/concepts",slug:"/rust/official-doc/concepts/variables-mutability",permalink:"/docs/rust/official-doc/concepts/variables-mutability",draft:!1,unlisted:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/rust/official-doc/concepts/01-variables-mutability.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1719738085e3,sidebarPosition:1,frontMatter:{title:"\u53d8\u91cf\u548c\u53ef\u53d8\u6027",sidebar_label:"3.1. \u53d8\u91cf\u548c\u53ef\u53d8\u6027",linkTitle:"\u53d8\u91cf\u548c\u53ef\u53d8\u6027",weight:202308051736,description:"\u53d8\u91cf\u548c\u53ef\u53d8\u6027"},sidebar:"rustDoc",previous:{title:"\u5e38\u89c1\u7f16\u7a0b\u6982\u5ff5",permalink:"/docs/rust/official-doc/concepts"},next:{title:"3.2. \u6570\u636e\u7c7b\u578b",permalink:"/docs/rust/official-doc/concepts/data-types"}},d={},o=[{value:"\u5e38\u91cf",id:"\u5e38\u91cf",level:2},{value:"\u906e\u853d(Shadowing)",id:"\u906e\u853dshadowing",level:2}];function a(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"\u53d8\u91cf\u548c\u53ef\u53d8\u6027",children:"\u53d8\u91cf\u548c\u53ef\u53d8\u6027"}),"\n",(0,i.jsxs)(n.p,{children:["\u5982",(0,i.jsx)(n.a,{href:"https://doc.rust-lang.org/book/ch02-00-guessing-game-tutorial.html#storing-values-with-variables",children:"\u201c\u4f7f\u7528\u53d8\u91cf\u5b58\u50a8\u503c\u201d"}),"\u90e8\u5206\u6240\u8ff0,\u9ed8\u8ba4\u60c5\u51b5\u4e0b,\u53d8\u91cf\u662f\u4e0d\u53ef\u53d8\u7684\u3002\u8fd9\u662fRust\u63d0\u4f9b\u7684\u8bb8\u591a\u5c0f\u63d0\u793a\u4e4b\u4e00,\u4ee5\u9f13\u52b1\u60a8\u4ee5\u5229\u7528Rust\u63d0\u4f9b\u7684\u5b89\u5168\u6027\u548c\u6613\u4e8e\u5e76\u53d1\u7684\u65b9\u5f0f\u7f16\u5199\u4ee3\u7801\u3002\u4f46\u662f,\u60a8\u4ecd\u7136\u53ef\u4ee5\u4f7f\u53d8\u91cf\u53ef\u53d8\u3002\u8ba9\u6211\u4eec\u6765\u63a2\u7d22Rust\u4e3a\u4f55\u503e\u5411\u4e8e\u652f\u6301\u4e0d\u53ef\u53d8\u6027,\u4ee5\u53ca\u6709\u65f6\u60a8\u53ef\u80fd\u5e0c\u671b\u9009\u62e9\u9000\u51fa\u7684\u539f\u56e0\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u5f53\u4e00\u4e2a\u53d8\u91cf\u662f\u4e0d\u53ef\u53d8\u7684,\u4e00\u65e6\u4e00\u4e2a\u503c\u88ab\u7ed1\u5b9a\u5230\u4e00\u4e2a\u540d\u79f0,\u60a8\u5c31\u4e0d\u80fd\u6539\u53d8\u90a3\u4e2a\u503c\u3002\u4e3a\u4e86\u8bf4\u660e\u8fd9\u4e00\u70b9,\u4f7f\u7528",(0,i.jsx)(n.code,{children:"cargo new variables"}),"\u5728",(0,i.jsx)(n.code,{children:"projects"}),"\u76ee\u5f55\u4e2d\u751f\u6210\u4e00\u4e2a\u540d\u4e3a",(0,i.jsx)(n.code,{children:"variables"}),"\u7684\u65b0\u9879\u76ee\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u7136\u540e,\u5728\u65b0\u7684",(0,i.jsx)(n.code,{children:"variables"}),"\u76ee\u5f55\u4e2d,\u6253\u5f00",(0,i.jsx)(n.code,{children:"src/main.rs"}),"\u5e76\u7528\u4ee5\u4e0b\u4ee3\u7801\u66ff\u6362\u5176\u5185\u5bb9,\u8be5\u4ee3\u7801\u76ee\u524d\u8fd8\u65e0\u6cd5\u7f16\u8bd1:"]}),"\n",(0,i.jsxs)(n.p,{children:["\u6587\u4ef6\u540d:",(0,i.jsx)(n.code,{children:"src/main.rs"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:'fn main() {\n  let x = 5;\n  println!("The value of x is: {x}");\n  x = 6;\n  println!("The value of x is: {x}");\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["\u4f7f\u7528",(0,i.jsx)(n.code,{children:"cargo run"}),"\u4fdd\u5b58\u5e76\u8fd0\u884c\u7a0b\u5e8f\u3002\u60a8\u5e94\u8be5\u6536\u5230\u4e00\u4e2a\u5173\u4e8e\u4e0d\u53ef\u53d8\u6027\u9519\u8bef\u7684\u9519\u8bef\u6d88\u606f,\u5982\u4e0b\u6240\u793a:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'$ cargo run\n   Compiling variables v0.1.0 (file:///projects/variables) \nerror[E0384]: cannot assign twice to immutable variable `x`\n --\x3e src/main.rs:4:5\n  |\n2 |     let x = 5;\n  |         -\n  |         |\n  |         first assignment to `x`\n  |         help: consider making this binding mutable: `mut x`  \n3 |     println!("The value of x is: {x}");\n4 |     x = 6;\n  |     ^^^^^ cannot assign twice to immutable variable\n\nFor more information about this error, try `rustc --explain E0384`.\nerror: could not compile `variables` due to previous error\n'})}),"\n",(0,i.jsxs)(n.p,{children:["\u8fd9\u4e2a\u4f8b\u5b50\u5c55\u793a\u4e86\u7f16\u8bd1\u5668\u5982\u4f55\u5e2e\u52a9\u60a8\u627e\u5230\u7a0b\u5e8f\u4e2d\u7684\u9519\u8bef\u3002\u7f16\u8bd1\u5668\u9519\u8bef\u53ef\u80fd\u4f1a\u8ba9\u4eba\u6cae\u4e27,\u4f46\u5b83\u5b9e\u9645\u4e0a\u53ea\u610f\u5473\u7740\u60a8\u7684\u7a0b\u5e8f\u8fd8\u4e0d\u80fd\u5b89\u5168\u5730\u505a\u60a8\u60f3\u8981\u5b83\u505a\u7684\u4e8b;\u5b83",(0,i.jsx)(n.em,{children:"\u4e0d"}),"\u610f\u5473\u7740\u60a8\u4e0d\u662f\u4e00\u4e2a\u597d\u7684\u7a0b\u5e8f\u5458!\u6709\u7ecf\u9a8c\u7684Rustacean\u4ecd\u7136\u4f1a\u9047\u5230\u7f16\u8bd1\u9519\u8bef\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u60a8\u6536\u5230\u9519\u8bef\u6d88\u606f\u201c\u4e0d\u80fd\u7ed9\u4e0d\u53ef\u53d8\u53d8\u91cf",(0,i.jsx)(n.code,{children:"x"}),"\u8d4b\u503c\u4e24\u6b21\u201d,\u56e0\u4e3a\u60a8\u8bd5\u56fe\u7ed9\u4e0d\u53ef\u53d8\u7684",(0,i.jsx)(n.code,{children:"x"}),"\u53d8\u91cf\u8d4b\u4e88\u7b2c\u4e8c\u4e2a\u503c\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u5f53\u6211\u4eec\u8bd5\u56fe\u6539\u53d8\u4e00\u4e2a\u88ab\u6807\u8bb0\u4e3a\u4e0d\u53ef\u53d8\u7684\u503c\u65f6,\u5728\u7f16\u8bd1\u65f6\u6536\u5230\u9519\u8bef\u975e\u5e38\u91cd\u8981,\u56e0\u4e3a\u8fd9\u79cd\u60c5\u51b5\u53ef\u80fd\u5bfc\u81f4bug\u3002\u5982\u679c\u6211\u4eec\u4ee3\u7801\u7684\u4e00\u90e8\u5206\u64cd\u4f5c\u57fa\u4e8e\u503c\u6c38\u8fdc\u4e0d\u4f1a\u6539\u53d8\u7684\u5047\u8bbe,\u800c\u53e6\u4e00\u90e8\u5206\u4ee3\u7801\u6539\u53d8\u4e86\u8be5\u503c,\u90a3\u4e48\u7b2c\u4e00\u90e8\u5206\u4ee3\u7801\u53ef\u80fd\u4e0d\u4f1a\u6309\u8bbe\u8ba1\u7684\u65b9\u5f0f\u8fd0\u884c\u3002\u8fd9\u79cdbug\u7684\u6839\u6e90\u5728\u4e8b\u540e\u5f88\u96be\u8ddf\u8e2a,\u5c24\u5176\u662f\u5f53\u7b2c\u4e8c\u90e8\u5206\u4ee3\u7801\u53ea\u662f",(0,i.jsx)(n.em,{children:"\u6709\u65f6\u5019"}),"\u6539\u53d8\u8be5\u503c\u65f6\u3002Rust\u7f16\u8bd1\u5668\u4fdd\u8bc1\u5f53\u60a8\u58f0\u660e\u4e00\u4e2a\u503c\u4e0d\u4f1a\u6539\u53d8\u65f6,\u5b83\u786e\u5b9e\u4e0d\u4f1a\u6539\u53d8,\u6240\u4ee5\u60a8\u4e0d\u5fc5\u81ea\u5df1\u8ddf\u8e2a\u5b83\u3002\u60a8\u7684\u4ee3\u7801\u56e0\u6b64\u66f4\u6613\u4e8e\u63a8\u7406\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u4f46\u662f\u53ef\u53d8\u6027\u53ef\u4ee5\u975e\u5e38\u6709\u7528,\u5e76\u4e14\u53ef\u4ee5\u4f7f\u4ee3\u7801\u66f4\u65b9\u4fbf\u7f16\u5199\u3002\u867d\u7136\u53d8\u91cf\u9ed8\u8ba4\u662f\u4e0d\u53ef\u53d8\u7684,\u4f46\u662f\u50cf",(0,i.jsx)(n.a,{href:"https://doc.rust-lang.org/book/ch02-00-guessing-game-tutorial.html#storing-values-with-variables",children:"\u7b2c2\u7ae0"}),"\u4e2d\u6240\u505a\u7684\u90a3\u6837,\u5728\u53d8\u91cf\u540d\u4e4b\u524d\u6dfb\u52a0",(0,i.jsx)(n.code,{children:"mut"}),"\u53ef\u4ee5\u4f7f\u5b83\u4eec\u53ef\u53d8\u3002\u6dfb\u52a0",(0,i.jsx)(n.code,{children:"mut"}),"\u8fd8\u901a\u8fc7\u6307\u793a\u4ee3\u7801\u7684\u672a\u6765\u9605\u8bfb\u8005\u5c06\u66f4\u6539\u6b64\u53d8\u91cf\u7684\u503c\u6765\u4f20\u8fbe\u610f\u56fe\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u4f8b\u5982,\u8ba9\u6211\u4eec\u5c06",(0,i.jsx)(n.code,{children:"src/main.rs"}),"\u66f4\u6539\u4e3a\u4ee5\u4e0b\u5185\u5bb9:"]}),"\n",(0,i.jsxs)(n.p,{children:["\u6587\u4ef6\u540d:",(0,i.jsx)(n.code,{children:"src/main.rs"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:'fn main() {\n  let mut x = 5;\n  println!("The value of x is: {x}");\n  x = 6;\n  println!("The value of x is: {x}"); \n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u73b0\u5728\u6211\u4eec\u8fd0\u884c\u7a0b\u5e8f\u65f6,\u4f1a\u5f97\u5230:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"$ cargo run\n   Compiling variables v0.1.0 (file:///projects/variables)\n    Finished dev [unoptimized + debuginfo] target(s) in 0.30s\n     Running `target/debug/variables`\nThe value of x is: 5\nThe value of x is: 6\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u5f53\u4f7f\u7528",(0,i.jsx)(n.code,{children:"mut"}),"\u65f6,\u6211\u4eec\u88ab\u5141\u8bb8\u5c06\u7ed1\u5b9a\u5230",(0,i.jsx)(n.code,{children:"x"}),"\u7684\u503c\u4ece",(0,i.jsx)(n.code,{children:"5"}),"\u6539\u4e3a",(0,i.jsx)(n.code,{children:"6"}),"\u3002\u6700\u7ec8,\u51b3\u5b9a\u662f\u5426\u4f7f\u7528\u53ef\u53d8\u6027\u5b8c\u5168\u53d6\u51b3\u4e8e\u60a8,\u5e76\u4e14\u53d6\u51b3\u4e8e\u60a8\u8ba4\u4e3a\u5728\u7279\u5b9a\u60c5\u51b5\u4e0b\u66f4\u6e05\u6670\u7684\u65b9\u5f0f\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u5e38\u91cf",children:"\u5e38\u91cf"}),"\n",(0,i.jsxs)(n.p,{children:["\u50cf\u4e0d\u53ef\u53d8\u53d8\u91cf\u4e00\u6837,",(0,i.jsx)(n.em,{children:"\u5e38\u91cf"}),"\u662f\u7ed1\u5b9a\u5230\u4e00\u4e2a\u540d\u79f0\u7684\u503c,\u4e0d\u5141\u8bb8\u66f4\u6539,\u4f46\u5e38\u91cf\u4e0e\u53d8\u91cf\u4e4b\u95f4\u5b58\u5728\u4e00\u4e9b\u5dee\u5f02\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u9996\u5148,\u5e38\u91cf\u4e0d\u5141\u8bb8\u4f7f\u7528",(0,i.jsx)(n.code,{children:"mut"}),"\u3002\u5e38\u91cf\u4e0d\u4ec5\u9ed8\u8ba4\u662f\u4e0d\u53ef\u53d8\u7684\u2014\u2014\u5b83\u4eec\u603b\u662f\u4e0d\u53ef\u53d8\u7684\u3002\u60a8\u4f7f\u7528",(0,i.jsx)(n.code,{children:"const"}),"\u5173\u952e\u5b57\u800c\u4e0d\u662f",(0,i.jsx)(n.code,{children:"let"}),"\u5173\u952e\u5b57\u58f0\u660e\u5e38\u91cf,\u5e76\u4e14\u503c\u7684\u7c7b\u578b",(0,i.jsx)(n.em,{children:"\u5fc5\u987b"}),"\u6ce8\u660e\u3002\u6211\u4eec\u5c06\u5728\u4e0b\u4e00\u8282",(0,i.jsx)(n.a,{href:"https://doc.rust-lang.org/book/ch03-02-data-types.html#data-types",children:"\u201c\u6570\u636e\u7c7b\u578b\u201d"}),"\u4e2d\u4ecb\u7ecd\u7c7b\u578b\u548c\u7c7b\u578b\u6ce8\u91ca,\u6240\u4ee5\u73b0\u5728\u4e0d\u8981\u62c5\u5fc3\u7ec6\u8282\u3002\u53ea\u9700\u77e5\u9053\u60a8\u5fc5\u987b\u603b\u662f\u6ce8\u660e\u7c7b\u578b\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u5e38\u91cf\u53ef\u4ee5\u5728\u4efb\u4f55\u8303\u56f4\u5185\u58f0\u660e,\u5305\u62ec\u5168\u5c40\u8303\u56f4,\u8fd9\u4f7f\u5b83\u4eec\u5bf9\u9700\u8981\u77e5\u9053\u8be5\u503c\u7684\u4ee3\u7801\u7684\u8bb8\u591a\u90e8\u5206\u975e\u5e38\u6709\u7528\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u6700\u540e\u4e00\u4e2a\u533a\u522b\u662f,\u5e38\u91cf\u53ea\u80fd\u8bbe\u7f6e\u4e3a\u5e38\u91cf\u8868\u8fbe\u5f0f,\u800c\u4e0d\u80fd\u662f\u53ea\u80fd\u5728\u8fd0\u884c\u65f6\u8ba1\u7b97\u7684\u7ed3\u679c\u503c\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u4e0b\u9762\u662f\u4e00\u4e2a\u5e38\u91cf\u58f0\u660e\u7684\u4f8b\u5b50:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"const THREE_HOURS_IN_SECONDS: u32 = 60 * 60 * 3;\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u5e38\u91cf\u7684\u540d\u79f0\u662f",(0,i.jsx)(n.code,{children:"THREE_HOURS_IN_SECONDS"}),",\u5176\u503c\u88ab\u8bbe\u7f6e\u4e3a\u5c0660(\u4e00\u5206\u949f\u4e2d\u7684\u79d2\u6570)\u4e0e60(\u4e00\u5c0f\u65f6\u4e2d\u7684\u5206\u949f\u6570)\u4e0e3(\u6211\u4eec\u8981\u5728\u6b64\u7a0b\u5e8f\u4e2d\u8ba1\u7b97\u7684\u5c0f\u65f6\u6570)\u76f8\u4e58\u7684\u7ed3\u679c\u3002Rust\u5bf9\u5e38\u91cf\u7684\u547d\u540d\u7ea6\u5b9a\u662f\u4f7f\u7528\u5927\u5c0f\u5199\u4e0e\u4e0b\u5212\u7ebf\u5206\u9694\u5355\u8bcd\u3002\u7f16\u8bd1\u5668\u53ef\u4ee5\u5728\u7f16\u8bd1\u65f6\u8ba1\u7b97\u4e00\u5c0f\u90e8\u5206\u64cd\u4f5c,\u8fd9\u4f7f\u6211\u4eec\u53ef\u4ee5\u9009\u62e9\u4ee5\u66f4\u6613\u4e8e\u7406\u89e3\u548c\u9a8c\u8bc1\u7684\u65b9\u5f0f\u7f16\u5199\u6b64\u503c,\u800c\u4e0d\u662f\u5c06\u6b64\u5e38\u91cf\u8bbe\u7f6e\u4e3a\u503c10800\u3002\u6709\u5173\u5728\u58f0\u660e\u5e38\u91cf\u65f6\u53ef\u4ee5\u4f7f\u7528\u54ea\u4e9b\u64cd\u4f5c\u7684\u66f4\u591a\u4fe1\u606f,\u8bf7\u53c2\u9605",(0,i.jsx)(n.a,{href:"https://doc.rust-lang.org/reference/const_eval.html",children:"Rust\u53c2\u8003\u7684\u5e38\u91cf\u8bc4\u4f30\u90e8\u5206"}),"\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u58f0\u660e\u7684\u4f5c\u7528\u57df\u5185,\u5e38\u91cf\u5728\u7a0b\u5e8f\u8fd0\u884c\u7684\u5168\u90e8\u65f6\u95f4\u5185\u90fd\u6709\u6548\u3002\u8fd9\u4e00\u7279\u6027\u4f7f\u5f97\u5e38\u91cf\u5bf9\u7a0b\u5e8f\u7684\u591a\u4e2a\u90e8\u5206\u53ef\u80fd\u9700\u8981\u77e5\u9053\u7684\u5e94\u7528\u7a0b\u5e8f\u57df\u7684\u503c\u975e\u5e38\u6709\u7528,\u4f8b\u5982\u6e38\u620f\u4e2d\u4efb\u4f55\u73a9\u5bb6\u53ef\u4ee5\u8d62\u5f97\u7684\u6700\u5927\u70b9\u6570,\u6216\u5149\u901f\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u5c06\u6574\u4e2a\u7a0b\u5e8f\u4e2d\u4f7f\u7528\u7684\u786c\u7f16\u7801\u503c\u547d\u540d\u4e3a\u5e38\u91cf,\u6709\u52a9\u4e8e\u5411\u4ee3\u7801\u7684\u672a\u6765\u7ef4\u62a4\u8005\u4f20\u8fbe\u8be5\u503c\u7684\u542b\u4e49\u3002\u5982\u679c\u5c06\u6765\u9700\u8981\u66f4\u65b0\u786c\u7f16\u7801\u503c,\u5b83\u8fd8\u53ef\u4ee5\u4f7f\u4ee3\u7801\u4e2d\u4ec5\u9700\u8981\u66f4\u6539\u7684\u4f4d\u7f6e\u51cf\u5c11\u5230\u4e00\u4e2a\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u906e\u853dshadowing",children:"\u906e\u853d(Shadowing)"}),"\n",(0,i.jsxs)(n.p,{children:["\u5982\u60a8\u5728",(0,i.jsx)(n.a,{href:"https://doc.rust-lang.org/book/ch02-00-guessing-game-tutorial.html#comparing-the-guess-to-the-secret-number",children:"\u7b2c2\u7ae0"}),"\u4e2d\u7684\u731c\u8c1c\u6e38\u620f\u6559\u7a0b\u4e2d\u770b\u5230\u7684,\u60a8\u53ef\u4ee5\u7528\u4e0e\u4ee5\u524d\u53d8\u91cf\u76f8\u540c\u7684\u540d\u79f0\u58f0\u660e\u4e00\u4e2a\u65b0\u53d8\u91cf\u3002Rustaceans\u8bf4\u7b2c\u4e00\u4e2a\u53d8\u91cf\u88ab\u7b2c\u4e8c\u4e2a",(0,i.jsx)(n.em,{children:"\u906e\u853d"}),",\u8fd9\u610f\u5473\u7740\u7b2c\u4e8c\u4e2a\u53d8\u91cf\u662f\u7f16\u8bd1\u5668\u5728\u60a8\u4f7f\u7528\u53d8\u91cf\u540d\u79f0\u65f6\u5c06\u770b\u5230\u7684\u5185\u5bb9\u3002\u5b9e\u9645\u4e0a,\u7b2c\u4e8c\u4e2a\u53d8\u91cf\u906e\u853d\u4e86\u7b2c\u4e00\u4e2a,\u76f4\u5230\u5b83\u672c\u8eab\u88ab\u906e\u853d\u6216\u4f5c\u7528\u57df\u7ed3\u675f,\u624d\u63a5\u7ba1\u4efb\u4f55\u5bf9\u53d8\u91cf\u540d\u79f0\u7684\u4f7f\u7528\u3002\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u4f7f\u7528\u76f8\u540c\u7684\u53d8\u91cf\u540d\u79f0\u5e76\u91cd\u590d\u4f7f\u7528",(0,i.jsx)(n.code,{children:"let"}),"\u5173\u952e\u5b57\u6765\u906e\u853d\u4e00\u4e2a\u53d8\u91cf,\u5982\u4e0b\u6240\u793a:"]}),"\n",(0,i.jsxs)(n.p,{children:["\u6587\u4ef6\u540d:",(0,i.jsx)(n.code,{children:"src/main.rs"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:'fn main() {\n  let x = 5;\n\n  let x = x + 1;\n\n  {\n    let x = x * 2;\n    println!("The value of x in the inner scope is: {x}");\n  }\n\n  println!("The value of x is: {x}");\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["\u8be5\u7a0b\u5e8f\u9996\u5148\u5c06",(0,i.jsx)(n.code,{children:"x"}),"\u7ed1\u5b9a\u5230\u503c\u4e3a",(0,i.jsx)(n.code,{children:"5"}),"\u3002\u7136\u540e\u5b83\u901a\u8fc7\u91cd\u590d",(0,i.jsx)(n.code,{children:"let x ="}),"\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u53d8\u91cf",(0,i.jsx)(n.code,{children:"x"}),",\u83b7\u53d6\u539f\u59cb\u503c\u5e76\u6dfb\u52a0",(0,i.jsx)(n.code,{children:"1"}),",\u6240\u4ee5",(0,i.jsx)(n.code,{children:"x"}),"\u7684\u503c\u53d8\u6210\u4e86",(0,i.jsx)(n.code,{children:"6"}),"\u3002\u7136\u540e,\u5728\u7528\u5927\u62ec\u53f7\u521b\u5efa\u7684\u5185\u90e8\u4f5c\u7528\u57df\u4e2d,\u7b2c\u4e09\u4e2a",(0,i.jsx)(n.code,{children:"let"}),"\u8bed\u53e5\u4e5f\u906e\u853d\u4e86",(0,i.jsx)(n.code,{children:"x"}),"\u5e76\u521b\u5efa\u4e86\u4e00\u4e2a\u65b0\u53d8\u91cf,\u5c06\u524d\u4e00\u4e2a\u503c\u4e58\u4ee5",(0,i.jsx)(n.code,{children:"2"}),"\u4ee5\u7ed9",(0,i.jsx)(n.code,{children:"x"}),"\u4e00\u4e2a\u503c\u4e3a",(0,i.jsx)(n.code,{children:"12"}),"\u3002\u5f53\u8be5\u4f5c\u7528\u57df\u7ed3\u675f\u65f6,\u5185\u90e8\u906e\u853d\u7ed3\u675f,",(0,i.jsx)(n.code,{children:"x"}),"\u6062\u590d\u4e3a",(0,i.jsx)(n.code,{children:"6"}),"\u3002\u5f53\u6211\u4eec\u8fd0\u884c\u6b64\u7a0b\u5e8f\u65f6,\u5b83\u5c06\u8f93\u51fa:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"$ cargo run\n   Compiling variables v0.1.0 (file:///projects/variables)\n    Finished dev [unoptimized + debuginfo] target(s) in 0.31s\n     Running `target/debug/variables`\nThe value of x in the inner scope is: 12\nThe value of x is: 6\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u906e\u853d\u4e0d\u540c\u4e8e\u5c06\u53d8\u91cf\u6807\u8bb0\u4e3a",(0,i.jsx)(n.code,{children:"mut"}),",\u56e0\u4e3a\u5982\u679c\u6211\u4eec\u4e0d\u5c0f\u5fc3\u8bd5\u56fe\u5728\u4e0d\u4f7f\u7528",(0,i.jsx)(n.code,{children:"let"}),"\u5173\u952e\u5b57\u7684\u60c5\u51b5\u4e0b\u91cd\u65b0\u5206\u914d\u7ed9\u6b64\u53d8\u91cf,\u6211\u4eec\u4f1a\u5f97\u5230\u7f16\u8bd1\u65f6\u9519\u8bef\u3002\u901a\u8fc7\u4f7f\u7528",(0,i.jsx)(n.code,{children:"let"}),",\u6211\u4eec\u53ef\u4ee5\u5bf9\u4e00\u4e2a\u503c\u6267\u884c\u4e00\u4e9b\u8f6c\u6362,\u4f46\u5728\u5b8c\u6210\u8fd9\u4e9b\u8f6c\u6362\u540e,\u8be5\u53d8\u91cf\u662f\u4e0d\u53ef\u53d8\u7684\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"mut"}),"\u548c\u906e\u853d\u4e4b\u95f4\u7684\u53e6\u4e00\u4e2a\u533a\u522b\u662f,\u56e0\u4e3a\u6211\u4eec\u4f7f\u7528",(0,i.jsx)(n.code,{children:"let"}),"\u5173\u952e\u5b57\u518d\u6b21\u6709\u6548\u5730\u521b\u5efa\u4e86\u4e00\u4e2a\u65b0\u53d8\u91cf,\u6240\u4ee5\u6211\u4eec\u53ef\u4ee5\u6539\u53d8\u503c\u7684\u7c7b\u578b\u4f46\u91cd\u7528\u76f8\u540c\u7684\u540d\u79f0\u3002\u4f8b\u5982,\u5047\u8bbe\u6211\u4eec\u7684\u7a0b\u5e8f\u8981\u6c42\u7528\u6237\u901a\u8fc7\u8f93\u5165\u7a7a\u683c\u5b57\u7b26\u6765\u663e\u793a\u4ed6\u4eec\u5e0c\u671b\u6587\u672c\u4e4b\u95f4\u6709\u591a\u5c11\u7a7a\u683c,\u7136\u540e\u6211\u4eec\u60f3\u5c06\u8be5\u8f93\u5165\u5b58\u50a8\u4e3a\u4e00\u4e2a\u6570\u5b57:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:'  let spaces = "   ";\n  let spaces = spaces.len();\n'})}),"\n",(0,i.jsxs)(n.p,{children:["\u7b2c\u4e00\u4e2a",(0,i.jsx)(n.code,{children:"spaces"}),"\u53d8\u91cf\u662f\u5b57\u7b26\u4e32\u7c7b\u578b,\u7b2c\u4e8c\u4e2a",(0,i.jsx)(n.code,{children:"spaces"}),"\u53d8\u91cf\u662f\u6570\u5b57\u7c7b\u578b\u3002\u56e0\u6b64,\u906e\u853d\u4f7f\u6211\u4eec\u514d\u4e8e\u4e0d\u5f97\u4e0d\u60f3\u51fa\u4e0d\u540c\u7684\u540d\u79f0,\u4f8b\u5982",(0,i.jsx)(n.code,{children:"spaces_str"}),"\u548c",(0,i.jsx)(n.code,{children:"spaces_num"}),";\u76f8\u53cd,\u6211\u4eec\u53ef\u4ee5\u91cd\u7528\u66f4\u7b80\u5355\u7684",(0,i.jsx)(n.code,{children:"spaces"}),"\u540d\u79f0\u3002\u4f46\u662f,\u5982\u679c\u6211\u4eec\u5c1d\u8bd5\u5bf9\u6b64\u4f7f\u7528",(0,i.jsx)(n.code,{children:"mut"}),",\u5982\u4e0b\u6240\u793a,\u6211\u4eec\u4f1a\u5f97\u5230\u7f16\u8bd1\u65f6\u9519\u8bef:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:'  let mut spaces = "   ";\n  spaces = spaces.len();\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u9519\u8bef\u8bf4\u6211\u4eec\u4e0d\u5141\u8bb8\u6539\u53d8\u53d8\u91cf\u7684\u7c7b\u578b:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'$ cargo run\n   Compiling variables v0.1.0 (file:///projects/variables) \nerror[E0308]: mismatched types\n --\x3e src/main.rs:3:14\n  |\n2 |     let mut spaces = "   ";\n  |                      ----- expected due to this value\n3 |     spaces = spaces.len();\n  |              ^^^^^^^^^^^^ expected `&str`, found `usize`\n\nFor more information about this error, try `rustc --explain E0308`.\nerror: could not compile `variables` due to previous error\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u73b0\u5728\u6211\u4eec\u5df2\u7ecf\u63a2\u7d22\u4e86\u53d8\u91cf\u7684\u5de5\u4f5c\u65b9\u5f0f,\u8ba9\u6211\u4eec\u770b\u770b\u5b83\u4eec\u53ef\u4ee5\u5177\u6709\u7684\u66f4\u591a\u6570\u636e\u7c7b\u578b\u3002"})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>t});var i=s(6540);const r={},c=i.createContext(r);function l(e){const n=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(c.Provider,{value:n},e.children)}}}]);