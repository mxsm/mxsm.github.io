"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[8023],{3587:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var i=s(5893),t=s(1151);const r={title:"Rust\u751f\u547d\u5468\u671f(lifetime)\u4e0e\u5f15\u7528\u6709\u6548\u6027",sidebar_label:"Rust\u751f\u547d\u5468\u671f(lifetime)\u4e0e\u5f15\u7528\u6709\u6548\u6027",linkTitle:"Rust\u751f\u547d\u5468\u671f(lifetime)\u4e0e\u5f15\u7528\u6709\u6548\u6027",weight:202308272027,description:"Rust\u751f\u547d\u5468\u671f(lifetime)\u4e0e\u5f15\u7528\u6709\u6548\u6027"},l=void 0,c={id:"rust/rust-learn/concepts/lifetime",title:"Rust\u751f\u547d\u5468\u671f(lifetime)\u4e0e\u5f15\u7528\u6709\u6548\u6027",description:"Rust\u751f\u547d\u5468\u671f(lifetime)\u4e0e\u5f15\u7528\u6709\u6548\u6027",source:"@site/docs/rust/rust-learn/concepts/03-lifetime.md",sourceDirName:"rust/rust-learn/concepts",slug:"/rust/rust-learn/concepts/lifetime",permalink:"/docs/rust/rust-learn/concepts/lifetime",draft:!1,unlisted:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/rust/rust-learn/concepts/03-lifetime.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1706451902,formattedLastUpdatedAt:"Jan 28, 2024",sidebarPosition:3,frontMatter:{title:"Rust\u751f\u547d\u5468\u671f(lifetime)\u4e0e\u5f15\u7528\u6709\u6548\u6027",sidebar_label:"Rust\u751f\u547d\u5468\u671f(lifetime)\u4e0e\u5f15\u7528\u6709\u6548\u6027",linkTitle:"Rust\u751f\u547d\u5468\u671f(lifetime)\u4e0e\u5f15\u7528\u6709\u6548\u6027",weight:202308272027,description:"Rust\u751f\u547d\u5468\u671f(lifetime)\u4e0e\u5f15\u7528\u6709\u6548\u6027"},sidebar:"rustLearn",previous:{title:"Rust\u6240\u6709\u6743",permalink:"/docs/rust/rust-learn/concepts/ownership"},next:{title:"Rust\u667a\u80fd\u6307\u9488(Smart Pointer)",permalink:"/docs/rust/rust-learn/concepts/smart-pointer"}},d={},a=[{value:"1. Rust\u751f\u547d\u5468\u671f(lifetime)\u662f\u4ec0\u4e48?",id:"1-rust\u751f\u547d\u5468\u671flifetime\u662f\u4ec0\u4e48",level:2},{value:"2.\u751f\u547d\u5468\u671f(lifetime)\u6807\u6ce8",id:"2\u751f\u547d\u5468\u671flifetime\u6807\u6ce8",level:2},{value:"2.1 \u53d8\u91cf\u751f\u547d\u5468\u671f\u6807\u6ce8",id:"21-\u53d8\u91cf\u751f\u547d\u5468\u671f\u6807\u6ce8",level:3},{value:"2.2 \u51fd\u6570\u7b7e\u540d\u4e2d\u7684\u751f\u547d\u5468\u671f\u6807\u6ce8",id:"22-\u51fd\u6570\u7b7e\u540d\u4e2d\u7684\u751f\u547d\u5468\u671f\u6807\u6ce8",level:3},{value:"2.3\u7ed3\u6784\u4f53\u5b9a\u4e49\u4e2d\u7684\u751f\u547d\u5468\u671f\u6807\u6ce8",id:"23\u7ed3\u6784\u4f53\u5b9a\u4e49\u4e2d\u7684\u751f\u547d\u5468\u671f\u6807\u6ce8",level:3},{value:"2.4\u65b9\u6cd5\u5b9a\u4e49\u4e2d\u7684\u751f\u547d\u5468\u671f\u6807\u6ce8",id:"24\u65b9\u6cd5\u5b9a\u4e49\u4e2d\u7684\u751f\u547d\u5468\u671f\u6807\u6ce8",level:3},{value:"2.5 Trait\u751f\u547d\u5468\u671f\u8fb9\u754c",id:"25-trait\u751f\u547d\u5468\u671f\u8fb9\u754c",level:3},{value:"3. \u751f\u547d\u5468\u671f\u7701\u7565",id:"3-\u751f\u547d\u5468\u671f\u7701\u7565",level:2},{value:"4.\u9759\u6001\u751f\u547d\u5468\u671f",id:"4\u9759\u6001\u751f\u547d\u5468\u671f",level:2},{value:"4.1 &#39;static \u751f\u547d\u5468\u671f\u7701\u7565",id:"41-static-\u751f\u547d\u5468\u671f\u7701\u7565",level:3},{value:"5.\u603b\u7ed3",id:"5\u603b\u7ed3",level:2}];function x(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"1-rust\u751f\u547d\u5468\u671flifetime\u662f\u4ec0\u4e48",children:"1. Rust\u751f\u547d\u5468\u671f(lifetime)\u662f\u4ec0\u4e48?"}),"\n",(0,i.jsx)(n.p,{children:"\u5728 Rust \u4e2d\uff0c\u751f\u547d\u5468\u671f\uff08Lifetime\uff09\u662f\u6307\u4e00\u4e2a\u53d8\u91cf\u6216\u501f\u7528\u7684\u6709\u6548\u65f6\u95f4\u8303\u56f4\u3002\u5b83\u6307\u5b9a\u4e86\u4e00\u4e2a\u53d8\u91cf\u6216\u501f\u7528\u5728\u4f55\u65f6\u88ab\u521b\u5efa\uff0c\u4ee5\u53ca\u5b83\u5728\u4f55\u65f6\u4e0d\u518d\u5b58\u5728\u3002Rust \u4e2d\u7684\u6bcf\u4e2a\u53d8\u91cf\u6216\u501f\u7528\u90fd\u6709\u4e00\u4e2a\u751f\u547d\u5468\u671f\uff0c\u5b83\u5fc5\u987b\u5728\u5176\u6709\u6548\u65f6\u95f4\u8303\u56f4\u5185\u88ab\u4f7f\u7528\u3002\u5982\u679c\u4e00\u4e2a\u53d8\u91cf\u6216\u501f\u7528\u7684\u751f\u547d\u5468\u671f\u7ed3\u675f\u4e86\uff0c\u90a3\u4e48\u5b83\u5c06\u4e0d\u80fd\u518d\u88ab\u8bbf\u95ee\uff0c\u5426\u5219\u4f1a\u5f15\u53d1\u7f16\u8bd1\u65f6\u9519\u8bef\u3002\u751f\u547d\u5468\u671f\u901a\u5e38\u7531 Rust \u4e2d\u7684\u7f16\u8bd1\u5668\u81ea\u52a8\u7ba1\u7406\uff0c\u5f00\u53d1\u8005\u4e0d\u9700\u8981\u624b\u52a8\u7ba1\u7406\u751f\u547d\u5468\u671f\u3002\u4f46\u662f\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u901a\u8fc7\u4f7f\u7528 Rust \u7684\u751f\u547d\u5468\u671f\u8bed\u6cd5\u6765\u6307\u5b9a\u751f\u547d\u5468\u671f\uff0c\u4ee5\u5b9e\u73b0\u66f4\u52a0\u7cbe\u7ec6\u7684\u5185\u5b58\u7ba1\u7406\u3002"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"\u8bf4\u660e\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u751f\u547d\u5468\u671f\u7ed3\u675f\uff0c\u53d8\u91cf\u548c\u501f\u7528\u751f\u547d\u5468\u671f\u7ed3\u675f"}),"\n",(0,i.jsx)(n.li,{children:"\u751f\u547d\u5468\u671f\u7531Rust\u81ea\u5df1\u638c\u7ba1\uff0c\u5f00\u53d1\u4eba\u5458\u65e0\u9700\u624b\u52a8\u7ba1\u7406"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u5212\u91cd\u70b9\uff1a"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsxs)(n.strong,{children:["Rust \u4e2d\u7684\u6bcf\u4e00\u4e2a\u5f15\u7528\u90fd\u6709\u5176 \u751f\u547d\u5468\u671f\uff08",(0,i.jsx)(n.em,{children:"lifetime"}),"\uff09\uff0c\u4e5f\u5c31\u662f\u5f15\u7528\u4fdd\u6301\u6709\u6548\u7684\u4f5c\u7528\u57df\u3002\u5927\u90e8\u5206\u65f6\u5019\u751f\u547d\u5468\u671f\u662f\u9690\u542b\u5e76\u53ef\u4ee5\u63a8\u65ad\u7684\uff0c\u6b63\u5982\u5927\u90e8\u5206\u65f6\u5019\u7c7b\u578b\u4e5f\u662f\u53ef\u4ee5\u63a8\u65ad\u7684\u4e00\u6837\u3002"]})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u4f8b\u5b50\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"fn mxsm(x: &str) -> &str {\n    x\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u4e0a\u9762\u7684\u4f8b\u5b50\u751f\u547d\u5468\u671f\u9690\u85cf\u4e86\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"2\u751f\u547d\u5468\u671flifetime\u6807\u6ce8",children:"2.\u751f\u547d\u5468\u671f(lifetime)\u6807\u6ce8"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u751f\u547d\u5468\u671f\u6807\u6ce8\u5e76\u4e0d\u6539\u53d8\u4efb\u4f55\u5f15\u7528\u7684\u751f\u547d\u5468\u671f\u7684\u957f\u77ed\u3002\u4e0e\u5f53\u51fd\u6570\u7b7e\u540d\u4e2d\u6307\u5b9a\u4e86\u6cdb\u578b\u7c7b\u578b\u53c2\u6570\u540e\u5c31\u53ef\u4ee5\u63a5\u53d7\u4efb\u4f55\u7c7b\u578b\u4e00\u6837\uff0c\u5f53\u6307\u5b9a\u4e86\u6cdb\u578b\u751f\u547d\u5468\u671f\u540e\u51fd\u6570\u4e5f\u80fd\u63a5\u53d7\u4efb\u4f55\u751f\u547d\u5468\u671f\u7684\u5f15\u7528\u3002\u751f\u547d\u5468\u671f\u6807\u6ce8\u63cf\u8ff0\u4e86\u591a\u4e2a\u5f15\u7528\u751f\u547d\u5468\u671f\u76f8\u4e92\u7684\u5173\u7cfb\uff0c\u800c\u4e0d\u5f71\u54cd\u5176\u751f\u547d\u5468\u671f\u3002"})}),"\n",(0,i.jsxs)(n.p,{children:["\u751f\u547d\u5468\u671f\u53c2\u6570\u540d\u79f0\u5fc5\u987b\u4ee5\u6487\u53f7\uff08",(0,i.jsx)(n.code,{children:"'"}),"\uff09\u5f00\u5934\uff0c\u5176\u540d\u79f0\u901a\u5e38\u5168\u662f\u5c0f\u5199\uff0c\u7c7b\u4f3c\u4e8e\u6cdb\u578b\u5176\u540d\u79f0\u975e\u5e38\u77ed\u3002",(0,i.jsx)(n.code,{children:"'a"})," \u662f\u5927\u591a\u6570\u4eba\u9ed8\u8ba4\u4f7f\u7528\u7684\u540d\u79f0\u3002\u751f\u547d\u5468\u671f\u53c2\u6570\u6807\u6ce8\u4f4d\u4e8e\u5f15\u7528\u7684 ",(0,i.jsx)(n.code,{children:"&"})," \u4e4b\u540e\uff0c\u5e76\u6709\u4e00\u4e2a\u7a7a\u683c\u6765\u5c06\u5f15\u7528\u7c7b\u578b\u4e0e\u751f\u547d\u5468\u671f\u6807\u6ce8\u5206\u9694\u5f00\u3002"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"\u8bf4\u660e\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"'static \u662fRust\u5185\u7f6e\u7684\u751f\u547d\u5468\u671f\uff0c\u76f8\u5f53\u4e8e\u5173\u952e\u5b57\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u751f\u547d\u5468\u671f\u6807\u6ce8\u544a\u8bc9 Rust \u591a\u4e2a\u5f15\u7528\u7684\u6cdb\u578b\u751f\u547d\u5468\u671f\u53c2\u6570\u5982\u4f55\u76f8\u4e92\u8054\u7cfb\u7684"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"21-\u53d8\u91cf\u751f\u547d\u5468\u671f\u6807\u6ce8",children:"2.1 \u53d8\u91cf\u751f\u547d\u5468\u671f\u6807\u6ce8"}),"\n",(0,i.jsx)(n.p,{children:"\u751f\u547d\u5468\u671f\u6807\u6ce8\u8bed\u6cd5\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"&i32  //\u5f15\u7528\u9ed8\u8ba4\n&'a i32 //\u5e26\u6709\u663e\u793a\u751f\u547d\u5468\u671f\n&'a mut i32 // \u5e26\u6709\u663e\u5f0f\u751f\u547d\u5468\u671f\u7684\u53ef\u53d8\u5f15\u7528\n"})}),"\n",(0,i.jsx)(n.h3,{id:"22-\u51fd\u6570\u7b7e\u540d\u4e2d\u7684\u751f\u547d\u5468\u671f\u6807\u6ce8",children:"2.2 \u51fd\u6570\u7b7e\u540d\u4e2d\u7684\u751f\u547d\u5468\u671f\u6807\u6ce8"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"fn mxsm_fn(x: &str, y: &str) -> &str { //\u5728\u5f00\u53d1\u5de5\u5177\u4e2d\u4f1a\u76f4\u63a5\u63d0\u793a\u62a5\u9519\n    if x.len() > y.len() {\n        x\n    } else {\n        y\n    }\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u901a\u8fc7\u51fd\u6570\u7b7e\u540d\u6807\u6ce8\u751f\u547d\u6388\u6743\u6765\u6d88\u9664\u7f16\u8bd1\u9519\u8bef\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"fn mxsm_fn<'a>(x: &'a str, y: &'a str) -> &'a str { //\u5f00\u53d1\u5de5\u5177\u53ef\u4ee5\u5c31\u7f16\u8bd1\u901a\u8fc7\n    if x.len() > y.len() {\n        x\n    } else {\n        y\n    }\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"23\u7ed3\u6784\u4f53\u5b9a\u4e49\u4e2d\u7684\u751f\u547d\u5468\u671f\u6807\u6ce8",children:"2.3\u7ed3\u6784\u4f53\u5b9a\u4e49\u4e2d\u7684\u751f\u547d\u5468\u671f\u6807\u6ce8"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"struct mxsm{\n    name: &str, //\u5f00\u53d1\u5de5\u5177\u76f4\u63a5\u62a5\u9519 \u7f3a\u5c11\u751f\u547d\u5468\u671f\n    name_t: String //\u6ca1\u6709\u9519\u8bef\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u4ece\u4e0a\u9762\u7684\u4ee3\u7801\u53ef\u4ee5\u9a8c\u8bc1\u4e00\u53e5\u8bdd\uff1a",(0,i.jsx)(n.strong,{children:"Rust \u4e2d\u7684\u6bcf\u4e00\u4e2a\u5f15\u7528\u90fd\u6709\u5176 \u751f\u547d\u5468\u671f\uff0c\u6709\u7684\u65f6\u5019\u88ab\u7701\u7565\u4e86\u800c\u5df2\u3002"})]}),"\n",(0,i.jsx)(n.p,{children:"\u7ed3\u6784\u4f53\u5b9a\u4e49\u751f\u547d\u5468\u671f\u6807\u6ce8\u8bed\u6cd5\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"struct mxsm<'mxsm>{\n    name: &'mxsm str,\n    name_t: String\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"24\u65b9\u6cd5\u5b9a\u4e49\u4e2d\u7684\u751f\u547d\u5468\u671f\u6807\u6ce8",children:"2.4\u65b9\u6cd5\u5b9a\u4e49\u4e2d\u7684\u751f\u547d\u5468\u671f\u6807\u6ce8"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"struct mxsm<'a>{\n    st:&'a str\n}\n\nimpl<'a> mxsm<'a> {\n    fn mxsm_fn(&self)->i32{\n        3\n    }\n    fn mxsm_ts(&self, tt:&str) -> &str{\n        self.st\n    }\n}\n\n"})}),"\n",(0,i.jsx)(n.h3,{id:"25-trait\u751f\u547d\u5468\u671f\u8fb9\u754c",children:"2.5 Trait\u751f\u547d\u5468\u671f\u8fb9\u754c"}),"\n",(0,i.jsx)(n.p,{children:"\u8bed\u6cd5\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"Syntax\nTypeParamBounds :\n   TypeParamBound ( + TypeParamBound )* +?\n\nTypeParamBound :\n      Lifetime | TraitBound\n\nTraitBound :\n      ?? ForLifetimes? TypePath\n   | ( ?? ForLifetimes? TypePath )\n\nLifetimeBounds :\n   ( Lifetime + )* Lifetime?\n\nLifetime :\n      LIFETIME_OR_LABEL\n   | 'static\n   | '_\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u7279\u5f81\uff08Trait\uff09\u548c\u751f\u547d\u5468\u671f\u754c\u9650\u4e3a\u6cdb\u578b\u9879\u76ee\uff08generic item\uff09\u63d0\u4f9b\u4e86\u4e00\u79cd\u9650\u5236\u5176\u53c2\u6570\u7c7b\u578b\u548c\u751f\u547d\u5468\u671f\u7684\u65b9\u6cd5\u3002\u53ef\u4ee5\u5728 where \u5b50\u53e5\u4e2d\u4e3a\u4efb\u4f55\u7c7b\u578b\u63d0\u4f9b\u8fb9\u754c\u3002\u5bf9\u4e8e\u67d0\u4e9b\u5e38\u89c1\u60c5\u51b5\uff0c\u4e5f\u6709\u66f4\u7b80\u77ed\u7684\u5f62\u5f0f\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u5728\u58f0\u660e\u901a\u7528\u53c2\u6570\u4e4b\u540e\u7f16\u5199\u8fb9\u754c\uff1a",(0,i.jsx)(n.code,{children:"fn f<A: Copy>() {}"})," \u4e0e ",(0,i.jsx)(n.code,{children:"fn f<A>() where A: Copy {}"})," \u76f8\u540c\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:["\u5728\u7279\u5f81\u58f0\u660e\u4e2d\u4f5c\u4e3a\u8d85\u7279\u5f81\uff08supertrait\uff09\uff1a",(0,i.jsx)(n.code,{children:"trait Circle: Shape {}"})," \u7b49\u540c\u4e8e ",(0,i.jsx)(n.code,{children:"trait Circle where Self: Shape {}"}),"\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:["\u5728\u7279\u5f81\u58f0\u660e\u4e2d\u4f5c\u4e3a\u5173\u8054\u7c7b\u578b\u7684\u8fb9\u754c\uff1a",(0,i.jsx)(n.code,{children:"trait A { type B: Copy; }"})," \u7b49\u540c\u4e8e ",(0,i.jsx)(n.code,{children:"trait A where Self::B: Copy { type B; }"}),"\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["\u5728\u4f7f\u7528\u9879\u76ee\u65f6\uff0c\u9879\u76ee\u7684\u8fb9\u754c\u5fc5\u987b\u5f97\u5230\u6ee1\u8db3\u3002\u5728\u5bf9\u6cdb\u578b\u9879\u76ee\u8fdb\u884c\u7c7b\u578b\u68c0\u67e5\u548c\u501f\u7528\u68c0\u67e5\u65f6\uff0c\u8fb9\u754c\u53ef\u7528\u4e8e\u786e\u5b9a\u7c7b\u578b\u662f\u5426\u5b9e\u73b0\u4e86\u67d0\u4e2a\u7279\u5f81\u3002\u4f8b\u5982\uff0c\u5bf9\u4e8e ",(0,i.jsx)(n.code,{children:"Ty: Trait"}),"\uff1a"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u5728\u6cdb\u578b\u51fd\u6570\u7684\u4e3b\u4f53\u4e2d\uff0c\u53ef\u4ee5\u5bf9 ",(0,i.jsx)(n.code,{children:"Ty"})," \u503c\u8c03\u7528\u6765\u81ea ",(0,i.jsx)(n.code,{children:"Trait"})," \u7684\u65b9\u6cd5\u3002\u540c\u6837\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,i.jsx)(n.code,{children:"Trait"})," \u4e0a\u7684\u5173\u8054\u5e38\u91cf\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:["\u53ef\u4ee5\u4f7f\u7528\u6765\u81ea ",(0,i.jsx)(n.code,{children:"Trait"})," \u7684\u5173\u8054\u7c7b\u578b\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:["\u53ef\u4ee5\u4f7f\u7528\u5e26\u6709 ",(0,i.jsx)(n.code,{children:"T: Trait"})," \u8fb9\u754c\u7684\u6cdb\u578b\u51fd\u6570\u548c\u7c7b\u578b\uff0c\u5e76\u5c06 ",(0,i.jsx)(n.code,{children:"Ty"})," \u7528\u4e8e ",(0,i.jsx)(n.code,{children:"T"}),"\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"3-\u751f\u547d\u5468\u671f\u7701\u7565",children:"3. \u751f\u547d\u5468\u671f\u7701\u7565"}),"\n",(0,i.jsxs)(n.p,{children:["\u51fd\u6570\u6216\u65b9\u6cd5\u7684\u53c2\u6570\u7684\u751f\u547d\u5468\u671f\u88ab\u79f0\u4e3a ",(0,i.jsx)(n.strong,{children:"\u8f93\u5165\u751f\u547d\u5468\u671f"}),"\uff08",(0,i.jsx)(n.em,{children:"input lifetimes"}),"\uff09\uff0c\u800c\u8fd4\u56de\u503c\u7684\u751f\u547d\u5468\u671f\u88ab\u79f0\u4e3a ",(0,i.jsx)(n.strong,{children:"\u8f93\u51fa\u751f\u547d\u5468\u671f"}),"\uff08",(0,i.jsx)(n.em,{children:"output lifetimes"}),"\uff09\u3002"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u751f\u547d\u5468\u671f\u7701\u7565\u7684\u4e09\u6761\u89c4\u5219\uff1a"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u6bcf\u4e00\u4e2a\u662f\u5f15\u7528\u7684\u53c2\u6570\u90fd\u6709\u5b83\u81ea\u5df1\u7684\u751f\u547d\u5468\u671f\u53c2\u6570"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"fn mxsm_fn<'a,'b>(x: &'a str, y: &'b str)\nfn mxsm_fn1<'a,'b,'c>(x: &'a str, y: &'b str, c: &'c str)\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u901a\u8fc7\u4e0a\u9762\u7684\u4f8b\u5b50\u53ef\u4ee5\u77e5\u9053\uff1a\u6709\u4e00\u4e2a\u5f15\u7528\u53c2\u6570\u7684\u51fd\u6570\u6709\u4e00\u4e2a\u751f\u547d\u5468\u671f\u53c2\u6570"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u5982\u679c\u53ea\u6709\u4e00\u4e2a\u8f93\u5165\u751f\u547d\u5468\u671f\u53c2\u6570\uff0c\u90a3\u4e48\u5b83\u88ab\u8d4b\u4e88\u6240\u6709\u8f93\u51fa\u751f\u547d\u5468\u671f\u53c2\u6570"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"fn mxsm(x: &i32) -> &i32\nfn mxsm<'a>(x: &'a i32) -> &'a i32\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u4e0a\u9762\u4ee3\u7801\u7b49\u540c"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.strong,{children:["\u5982\u679c\u65b9\u6cd5\u6709\u591a\u4e2a\u8f93\u5165\u751f\u547d\u5468\u671f\u53c2\u6570\u5e76\u4e14\u5176\u4e2d\u4e00\u4e2a\u53c2\u6570\u662f ",(0,i.jsx)(n.code,{children:"&self"})," \u6216 ",(0,i.jsx)(n.code,{children:"&mut self"}),"\uff0c\u90a3\u4e48\u6240\u6709\u8f93\u51fa\u751f\u547d\u5468\u671f\u53c2\u6570\u88ab\u8d4b\u4e88 ",(0,i.jsx)(n.code,{children:"self"})," \u7684\u751f\u547d\u5468\u671f"]})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["\u8bf4\u660e\uff1a\u65b9\u6cd5\u7b2c\u4e00\u4e2a\u53c2\u6570\u662f**&self**",(0,i.jsx)(n.code,{children:"\u6216"}),(0,i.jsx)(n.strong,{children:"&mut self"})," \uff0c\u8bf4\u660e\u662f\u5bf9\u8c61\u7684\u65b9\u6cd5\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"4\u9759\u6001\u751f\u547d\u5468\u671f",children:"4.\u9759\u6001\u751f\u547d\u5468\u671f"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsxs)(n.strong,{children:[(0,i.jsx)(n.code,{children:"'static"}),"\uff0c\u5176\u751f\u547d\u5468\u671f\u80fd\u591f\u5b58\u6d3b\u4e8e\u6574\u4e2a\u7a0b\u5e8f\u671f\u95f4\u3002"]})," \u6240\u6709\u7684\u5b57\u7b26\u4e32\u5b57\u9762\u91cf\u90fd\u62e5\u6709 ",(0,i.jsx)(n.code,{children:"'static"})," \u751f\u547d\u5468\u671f\uff0c\u5982\u4e0b\u9762\u4f8b\u5b50\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:'let mxsm:&\'static str = "mxsm world";\n'})}),"\n",(0,i.jsx)(n.h3,{id:"41-static-\u751f\u547d\u5468\u671f\u7701\u7565",children:"4.1 'static \u751f\u547d\u5468\u671f\u7701\u7565"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u5e38\u91cf\u548c\u9759\u6001\u5f15\u7528\u7c7b\u578b\u7684\u58f0\u660e\u90fd\u9690\u5f0f\u5730\u5177\u6709\u2019static\u2019\u751f\u547d\u5468\u671f\uff0c\u9664\u975e\u660e\u786e\u6307\u5b9a\u751f\u547d\u5468\u671f\u3002"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:'const STRING: &str = "bitstring"; //\u751f\u547d\u5468\u671f\u7701\u7565\nconst STRING: &\'static str = "bitstring"; //\u663e\u793a\u751f\u547d\u5468\u671f\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u5982\u679c\u9759\u6001\u6216\u5e38\u91cf\u9879\u5305\u62ec\u51fd\u6570\u6216\u95ed\u5305\u5f15\u7528\uff0c\u800c\u8fd9\u4e9b\u5f15\u7528\u672c\u8eab\u53c8\u5305\u62ec\u5f15\u7528\uff0c\u5219\u7f16\u8bd1\u5668\u5c06\u9996\u5148\u5c1d\u8bd5\u6807\u51c6\u7701\u7565\u89c4\u5219\u3002\u5982\u679c\u5b83\u65e0\u6cd5\u901a\u8fc7\u5176\u901a\u5e38\u7684\u89c4\u5219\u89e3\u51b3\u751f\u547d\u5468\u671f"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"// Resolved as `fn<'a>(&'a str) -> &'a str`.\nconst RESOLVED_SINGLE: fn(&str) -> &str = |x| x;\n\n// Resolved as `Fn<'a, 'b, 'c>(&'a Foo, &'b Bar, &'c Baz) -> usize`.\nconst RESOLVED_MULTIPLE: &dyn Fn(&Foo, &Bar, &Baz) -> usize = &somefunc;\n"})}),"\n",(0,i.jsx)(n.h2,{id:"5\u603b\u7ed3",children:"5.\u603b\u7ed3"}),"\n",(0,i.jsx)(n.p,{children:"Rust \u7684\u751f\u547d\u5468\u671f\u673a\u5236\u662f\u4e00\u79cd\u786e\u4fdd\u4ee3\u7801\u6b63\u786e\u6027\u548c\u5b89\u5168\u6027\u7684\u91cd\u8981\u673a\u5236\u3002\u901a\u8fc7\u7406\u89e3 Rust \u7684\u751f\u547d\u5468\u671f\u6982\u5ff5\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u7f16\u5199\u66f4\u52a0\u53ef\u9760\u548c\u5b89\u5168\u7684\u4ee3\u7801\u3002"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["\u6211\u662f\u8682\u8681\u80cc\u5927\u8c61\uff0c\u6587\u7ae0\u5bf9\u4f60\u6709\u5e2e\u52a9\u7ed9",(0,i.jsx)(n.a,{href:"https://github.com/mxsm/mxsm-website",children:"\u9879\u76ee\u70b9\u4e2a\u2764"}),"\u5173\u6ce8\u6211",(0,i.jsxs)(n.a,{href:"https://github.com/mxsm",children:["GitHub",":mxsm"]}),"\uff0c\u6587\u7ae0\u6709\u4e0d\u6b63\u786e\u7684\u5730\u65b9\u8bf7\u60a8\u65a7\u6b63,\u521b\u5efa",(0,i.jsx)(n.a,{href:"https://github.com/mxsm/mxsm-website/issues",children:"ISSUE\u63d0\u4ea4PR"}),"~\u8c22\u8c22! Emal:<",(0,i.jsx)(n.a,{href:"mailto:mxsm@apache.com",children:"mxsm@apache.com"}),">"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(x,{...e})}):x(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>c,a:()=>l});var i=s(7294);const t={},r=i.createContext(t);function l(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);