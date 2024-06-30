"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[4558],{4410:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>x,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var r=s(4848),t=s(8453);const i={title:"Rust\u667a\u80fd\u6307\u9488(Smart Pointer)",sidebar_label:"Rust\u667a\u80fd\u6307\u9488(Smart Pointer)",linkTitle:"Rust\u667a\u80fd\u6307\u9488(Smart Pointer)",weight:202308272034,description:"Rust\u667a\u80fd\u6307\u9488(Smart Pointer)"},l=void 0,c={id:"rust/rust-learn/concepts/smart-pointer",title:"Rust\u667a\u80fd\u6307\u9488(Smart Pointer)",description:"Rust\u667a\u80fd\u6307\u9488(Smart Pointer)",source:"@site/docs/rust/rust-learn/concepts/04-smart-pointer.md",sourceDirName:"rust/rust-learn/concepts",slug:"/rust/rust-learn/concepts/smart-pointer",permalink:"/docs/rust/rust-learn/concepts/smart-pointer",draft:!1,unlisted:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/rust/rust-learn/concepts/04-smart-pointer.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1719738085e3,sidebarPosition:4,frontMatter:{title:"Rust\u667a\u80fd\u6307\u9488(Smart Pointer)",sidebar_label:"Rust\u667a\u80fd\u6307\u9488(Smart Pointer)",linkTitle:"Rust\u667a\u80fd\u6307\u9488(Smart Pointer)",weight:202308272034,description:"Rust\u667a\u80fd\u6307\u9488(Smart Pointer)"},sidebar:"rustLearn",previous:{title:"Rust\u751f\u547d\u5468\u671f(lifetime)\u4e0e\u5f15\u7528\u6709\u6548\u6027",permalink:"/docs/rust/rust-learn/concepts/lifetime"},next:{title:"Rust trait\u4f60\u4e0d\u77e5\u9053\u7684\u4f7f\u7528",permalink:"/docs/rust/rust-learn/concepts/trait"}},o={},d=[{value:"1. \u4ec0\u4e48\u662f\u667a\u80fd\u6307\u9488",id:"1-\u4ec0\u4e48\u662f\u667a\u80fd\u6307\u9488",level:2},{value:"2. \u667a\u80fd\u6307\u9488\u7684\u5b9e\u73b0\u57fa\u7840",id:"2-\u667a\u80fd\u6307\u9488\u7684\u5b9e\u73b0\u57fa\u7840",level:2},{value:"2.1.Box&lt;T&gt;\u667a\u80fd\u6307\u9488",id:"21boxt\u667a\u80fd\u6307\u9488",level:3},{value:"3. \u81ea\u5b9a\u4e49\u667a\u80fd\u6307\u9488",id:"3-\u81ea\u5b9a\u4e49\u667a\u80fd\u6307\u9488",level:2},{value:"4.\u603b\u7ed3",id:"4\u603b\u7ed3",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"1-\u4ec0\u4e48\u662f\u667a\u80fd\u6307\u9488",children:"1. \u4ec0\u4e48\u662f\u667a\u80fd\u6307\u9488"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u6307\u9488"})," \uff08",(0,r.jsx)(n.em,{children:"pointer"}),"\uff09\u662f\u4e00\u4e2a\u5305\u542b\u5185\u5b58\u5730\u5740\u7684\u53d8\u91cf\u7684\u901a\u7528\u6982\u5ff5\u3002\u4f7f\u7528C\u548cC++\u7684\u4eba\u5c31\u4f1a\u7ecf\u5e38\u7684\u9047\u5230\u6307\u9488\u3002\u800cJava\u7684\u5f00\u53d1\u8005\u6307\u9488\u5df2\u7ecf\u88ab\u5c4f\u853d\u3002\u5f00\u53d1\u4eba\u5458\u57fa\u672c\u4e0a\u4e0d\u8981\u53bb\u5173\u5fc3\u3002\u90a3\u4e48Rust\u7684\u667a\u80fd\u6307\u9488\u53c8\u662f\u4ec0\u4e48\uff1f"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u667a\u80fd\u6307\u9488"}),"\uff08",(0,r.jsx)(n.em,{children:"smart pointers"}),"\uff09\u662f\u4e00\u7c7b",(0,r.jsx)(n.strong,{children:"\u6570\u636e\u7ed3\u6784(\u7ed3\u6784\u4f53)"}),"\uff0c\u5b83\u4eec\u7684\u8868\u73b0\u7c7b\u4f3c\u6307\u9488\uff0c\u4f46\u662f\u4e5f\u62e5\u6709\u989d\u5916\u7684\u5143\u6570\u636e\u548c\u529f\u80fd\u3002"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"\u6ce8\u610f\uff1a\u667a\u80fd\u6307\u9488\u7684\u6982\u5ff5\u5e76\u975e Rust \u72ec\u6709\uff1a\u5176\u8d77\u6e90\u4e8e C++\uff0c\u4e5f\u5b58\u5728\u4e8e\u5176\u4ed6\u8bed\u8a00\u4e2d"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u666e\u901a\u6307\u9488(\u5f15\u7528)\u548c\u667a\u80fd\u6307\u9488\u7684\u533a\u522b\uff1a\u5f15\u7528\u662f\u4e00\u7c7b\u53ea\u501f\u7528\u6570\u636e\u7684\u6307\u9488\uff0c\u5728\u5927\u90e8\u5206\u60c5\u51b5\u4e0b\uff0c\u667a\u80fd\u6307\u9488 ",(0,r.jsx)(n.strong,{children:"\u62e5\u6709"})," \u5b83\u4eec\u6307\u5411\u7684\u6570\u636e\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u667a\u80fd\u6307\u9488\u662f\u4e00\u7c7b\u975e\u57fa\u7840\u6570\u636e\u7684\u6570\u636e\u7ed3\u6784\u6240\u4ee5\u667a\u80fd\u6307\u9488\u901a\u5e38\u4f7f\u7528\u7ed3\u6784\u4f53\u5b9e\u73b0\u3002"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"\u8bf4\u660e\uff1a \u5f00\u53d1\u8005\u53ef\u4ee5\u901a\u8fc7\u5b9e\u73b0Deref\u548cDrop trait\u81ea\u5b9a\u4e49\u667a\u80fd\u6307\u9488"}),"\n",(0,r.jsxs)(n.p,{children:["Rust\u6807\u51c6\u5e93\u4e2d\u63d0\u4f9b\u4e86\u8bb8\u591a\u4e0d\u540c\u7684\u667a\u80fd\u6307\u9488\uff1aString",(0,r.jsx)(n.code,{children:"Vec<T>"}),"\uff0c",(0,r.jsx)(n.code,{children:"Box<T>"}),"\uff0c",(0,r.jsx)(n.code,{children:"Rc<T>"}),"\uff0c",(0,r.jsx)(n.code,{children:"Arc<T>"}),"\uff0c",(0,r.jsx)(n.code,{children:"Weak<T>"}),"\uff0c",(0,r.jsx)(n.code,{children:"Cell<T>"}),"\uff0c",(0,r.jsx)(n.code,{children:"RefCell<T>"}),"\uff0c",(0,r.jsx)(n.code,{children:"UnsafeCell<T>"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u6807\u51c6\u5e93\u4e2d\u6700\u5e38\u7528\u7684\u667a\u80fd\u6307\u9488\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsxs)(n.strong,{children:[(0,r.jsx)(n.code,{children:"Box<T>"}),"\uff0c\u7528\u4e8e\u5728\u5806\u4e0a\u5206\u914d\u503c"]})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsxs)(n.strong,{children:[(0,r.jsx)(n.code,{children:"Rc<T>"}),"\uff0c\u4e00\u4e2a\u5f15\u7528\u8ba1\u6570\u7c7b\u578b\uff0c\u5176\u6570\u636e\u53ef\u4ee5\u6709\u591a\u4e2a\u6240\u6709\u8005"]})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsxs)(n.strong,{children:[(0,r.jsx)(n.code,{children:"Ref<T>"})," \u548c ",(0,r.jsx)(n.code,{children:"RefMut<T>"}),"\uff0c\u901a\u8fc7 ",(0,r.jsx)(n.code,{children:"RefCell<T>"})," \u8bbf\u95ee\uff08 ",(0,r.jsx)(n.code,{children:"RefCell<T>"})," \u662f\u4e00\u4e2a\u5728\u8fd0\u884c\u65f6\u800c\u4e0d\u662f\u5728\u7f16\u8bd1\u65f6\u6267\u884c\u501f\u7528\u89c4\u5219\u7684\u7c7b\u578b\uff09"]})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"2-\u667a\u80fd\u6307\u9488\u7684\u5b9e\u73b0\u57fa\u7840",children:"2. \u667a\u80fd\u6307\u9488\u7684\u5b9e\u73b0\u57fa\u7840"}),"\n",(0,r.jsxs)(n.p,{children:["\u667a\u80fd\u6307\u9488\u901a\u5e38\u7528\u7ed3\u6784\u4f53\u6765\u63d0\u73b0\uff0c**\u667a\u80fd\u6307\u9488\u533a\u522b\u4e8e\u5e38\u89c4\u7ed3\u6784\u4f53\u7684\u663e\u8457\u7279\u6027\u5728\u4e8e\u5176\u5b9e\u73b0\u4e86 ",(0,r.jsx)(n.code,{children:"Deref"})," \u548c ",(0,r.jsx)(n.code,{children:"Drop"})," trait\u3002 ** ",(0,r.jsxs)(n.strong,{children:["\u5b9e\u73b0",(0,r.jsx)(n.code,{children:"Deref"})," trait\u5141\u8bb8\u6211\u4eec\u91cd\u8f7d\u89e3\u5f15\u7528\u8fd0\u7b97\u7b26\uff08dereference operator\uff09"]})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:"fn main() {\n    let a = &1;\n    let b = Box::new(1);\n    assert_eq!(1, *a);\n    assert_eq!(1, *b);\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"21boxt\u667a\u80fd\u6307\u9488",children:"2.1.Box<T>\u667a\u80fd\u6307\u9488"}),"\n",(0,r.jsx)(n.p,{children:"\u901a\u8fc7\u4e0a\u9762\u7684\u6211\u4eec\u53ef\u4ee5\u77e5\u9053\u667a\u80fd\u6307\u9488\u662f\u4e00\u4e2a\u7ed3\u6784\u4f53\uff0c\u4e0b\u9762\u6211\u4eec\u6765\u770b\u4e00\u4e0b\u6e90\u7801\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:'#[lang = "owned_box"]\n#[fundamental]\n#[stable(feature = "rust1", since = "1.0.0")]\n// The declaration of the `Box` struct must be kept in sync with the\n// `alloc::alloc::box_free` function or ICEs will happen. See the comment\n// on `box_free` for more details.\npub struct Box<\n    T: ?Sized,\n    #[unstable(feature = "allocator_api", issue = "32838")] A: Allocator = Global,\n>(Unique<T>, A);\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u901a\u8fc7\u4e0a\u9762\u7684\u6e90\u7801\u53ef\u4ee5\u77e5\u9053Box<T>\u662f\u4e00\u4e2a\u7ed3\u6784\u4f53\uff0c\u540c\u65f6\u5b9e\u73b0\u4e86\u5b9e\u73b0\u4e86 ",(0,r.jsx)(n.code,{children:"Deref"})," \u548c ",(0,r.jsx)(n.code,{children:"Drop"})," trait\u6211\u4eec\u770b\u4e00\u4e0b\u6e90\u7801\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:'#[stable(feature = "rust1", since = "1.0.0")]\nunsafe impl<#[may_dangle] T: ?Sized, A: Allocator> Drop for Box<T, A> {\n    fn drop(&mut self) {\n        // FIXME: Do nothing, drop is currently performed by compiler.\n    }\n}\n\n#[stable(feature = "rust1", since = "1.0.0")]\nimpl<T: ?Sized, A: Allocator> Deref for Box<T, A> {\n    type Target = T;\n\n    fn deref(&self) -> &T {\n        &**self\n    }\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u901a\u8fc7\u4e0a\u9762\u7684\u6e90\u7801\u53ef\u4ee5\u53d1\u73b0drop\u5e76\u6ca1\u6709\u4efb\u4f55\u5b9e\u73b0\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u4f8b\u5b50\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:" let b = Box::new(5); //\u6570\u636e\u5b58\u50a8\u5728\u5806\u4e0a\u9762\n let c = 2; //\u6570\u636e\u5b58\u50a8\u5728\u6808\u4e0a\u9762\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Box<T>"})," \u662f\u4e00\u79cd\u667a\u80fd\u6307\u9488\u7c7b\u578b\uff0c\u7528\u4e8e\u5728\u5806\u4e0a\u5206\u914d\u548c\u5b58\u50a8\u6570\u636e\uff0c\u5e76\u5728\u4e0d\u540c\u4f5c\u7528\u57df\u4e4b\u95f4\u5171\u4eab\u6240\u6709\u6743\u3002",(0,r.jsx)(n.code,{children:"Box<T>"})," \u7684\u4e3b\u8981\u4f7f\u7528\u573a\u666f\u662f\u5728\u9700\u8981\u52a8\u6001\u5206\u914d\u7684\u6570\u636e\uff0c\u4f46\u53c8\u9700\u8981\u5728\u7f16\u8bd1\u65f6\u77e5\u9053\u5927\u5c0f\u7684\u60c5\u51b5\u4e0b\u4f7f\u7528\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u4ee5\u4e0b\u662f\u4e00\u4e9b\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"Box<T>"})," \u7684\u5e38\u89c1\u573a\u666f\uff0c\u5e76\u7ed9\u51fa\u76f8\u5e94\u7684\u4f8b\u5b50\uff1a"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u52a8\u6001\u5206\u914d\u5927\u578b\u6570\u636e\u7ed3\u6784\uff1a"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:"struct BigStruct {\n    // \u5927\u578b\u6570\u636e\u7ed3\u6784\n}\n\nfn create_big_struct() -> Box<BigStruct> {\n    let big_struct = BigStruct {\n        // \u521d\u59cb\u5316\u5927\u578b\u6570\u636e\u7ed3\u6784\n    };\n    Box::new(big_struct)\n}\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u5728\u9012\u5f52\u6570\u636e\u7ed3\u6784\u4e2d\u907f\u514d\u65e0\u9650\u5927\u5c0f\u95ee\u9898"}),"\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:"enum LinkedList<T> {\n    Cons(T, Box<LinkedList<T>>),\n    Nil,\n}\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u5728 trait \u5bf9\u8c61\u4e2d\u5b58\u50a8\u7c7b\u578b\u5bf9\u8c61"}),"\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:'trait Shape {\n    fn area(&self) -> f64;\n}\n\nstruct Circle {\n    radius: f64,\n}\n\nimpl Shape for Circle {\n    fn area(&self) -> f64 {\n        std::f64::consts::PI * self.radius * self.radius\n    }\n}\n\nfn main() {\n    let circle: Box<dyn Shape> = Box::new(Circle { radius: 5.0 });\n    println!("Circle area: {}", circle.area());\n}\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u4f7f\u7528\u5728\u7f16\u8bd1\u65f6\u672a\u77e5\u5927\u5c0f\u7684\u7c7b\u578b"}),"\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:"fn process_unknown_size_data(data: &[u8]) -> Box<[u8]> {\n    data.to_vec().into_boxed_slice()\n}\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u6784\u5efa\u9012\u5f52\u6570\u636e\u7ed3\u6784"}),"\uff1a"]}),"\n",(0,r.jsx)(n.p,{children:"\u8fd9\u4e2a\u548c\u7b2c\u4e8c\u4e2a\u5728\u9012\u5f52\u6570\u636e\u7ed3\u6784\u4e2d\u907f\u514d\u65e0\u9650\u5927\u5c0f\u95ee\u9898\u7c7b\u4f3c"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:'#[derive(Debug)]\nstruct Node {\n value: i32,\n    next: Option<Box<Node>>,\n}\n\nfn main() {\n    let node1 = Node {\n     value: 1,\n        next: None,\n    };\n\n    let node2 = Node {\n     value: 2,\n        next: Some(Box::new(node1)),\n    };\n\n    println!("{:?}", node2);\n}\n'})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u603b\u4e4b\uff0c",(0,r.jsx)(n.code,{children:"Box<T>"})," \u5728\u9700\u8981\u5728\u5806\u4e0a\u5206\u914d\u6570\u636e\u5e76\u4e14\u5728\u4e0d\u540c\u4f5c\u7528\u57df\u4e4b\u95f4\u5171\u4eab\u6240\u6709\u6743\u65f6\u975e\u5e38\u6709\u7528\u3002\u5b83\u662f Rust \u4e2d\u5904\u7406\u52a8\u6001\u5206\u914d\u7684\u6570\u636e\u7684\u91cd\u8981\u5de5\u5177\uff0c\u80fd\u591f\u5e2e\u52a9\u907f\u514d\u751f\u547d\u5468\u671f\u548c\u6240\u6709\u6743\u95ee\u9898\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"3-\u81ea\u5b9a\u4e49\u667a\u80fd\u6307\u9488",children:"3. \u81ea\u5b9a\u4e49\u667a\u80fd\u6307\u9488"}),"\n",(0,r.jsxs)(n.p,{children:["\u667a\u80fd\u6307\u9488\u7684\u5173\u952e\u5728\u4e8e\u5b9e\u73b0 ",(0,r.jsxs)(n.strong,{children:[(0,r.jsx)(n.code,{children:"Deref"})," \u548c ",(0,r.jsx)(n.code,{children:"Drop"})," trait"]})," \u3002 \u6240\u4ee5\u6211\u4eec\u81ea\u5b9a\u4e49\u4e5f\u5fc5\u987b\u5b9e\u73b0\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'use std::ops::Deref;\nfn main() {\n    let pointer = MxsmSmartPointer::new(1);\n    println!("{:?}", pointer);\n    assert_eq!(1,*pointer);\n}\n#[derive(Debug)]\npub struct MxsmSmartPointer{\n    num: i32\n}\n\nimpl MxsmSmartPointer{\n    fn new(num:i32)->Self{\n        Self{\n            num\n        }\n    }\n}\nimpl Drop for MxsmSmartPointer {\n    fn drop(&mut self) {\n        println!("Drop")\n    }\n}\nimpl Deref for  MxsmSmartPointer{\n    type Target = i32;\n    fn deref(&self) -> &Self::Target {\n        &self.num\n    }\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u8fd0\u884c\u4ee3\u7801\u7ed3\u679c\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"D:/develop/Rust/mxsm_application/target/debug/mxsm_application.exe\nMxsmSmartPointer { num: 1 }\nDrop\n\nProcess finished with exit code 0\n"})}),"\n",(0,r.jsx)(n.h2,{id:"4\u603b\u7ed3",children:"4.\u603b\u7ed3"}),"\n",(0,r.jsxs)(n.p,{children:["\u9996\u5148\u667a\u80fd\u6307\u9488\u7684\u57fa\u7840\u662f**",(0,r.jsx)(n.code,{children:"Deref"})," \u548c ",(0,r.jsx)(n.code,{children:"Drop"})," trait**\uff0c \u4e0a\u9762\u5217\u4e3e\u4e86Box\u667a\u80fd\u6307\u9488\u7684\u7528\u6cd5\u548c\u90e8\u5206\u7684\u6e90\u7801\uff0c\u540c\u65f6\u8ba9\u6211\u4eec\u77e5\u9053\u5982\u4f55\u81ea\u5b9a\u4e49\u76f8\u5173\u7684\u667a\u80fd\u6307\u9488\u3002Rust \u8bed\u8a00\u4e2d\u6709\u591a\u79cd\u667a\u80fd\u6307\u9488\u7c7b\u578b\uff0c\u5b83\u4eec\u5177\u6709\u4e0d\u540c\u7684\u7279\u70b9\u548c\u7528\u9014\u3002"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Rc<T>\uff1a\u5171\u4eab\u6240\u6709\u6743\u7684\u667a\u80fd\u6307\u9488\uff0c\u5141\u8bb8\u591a\u4e2a\u5f15\u7528\u540c\u65f6\u6307\u5411\u540c\u4e00\u4e2a\u5bf9\u8c61\u3002Rc<T> \u5b9e\u73b0\u4e86\u6240\u6709\u6743\u6a21\u5f0f\uff0c\u5f53\u6240\u6709\u5f15\u7528\u90fd\u88ab\u5220\u9664\u65f6\uff0c\u5b83\u4f1a\u81ea\u52a8\u91ca\u653e\u8be5\u5bf9\u8c61\u7684\u5185\u5b58\u3002"}),"\n",(0,r.jsx)(n.li,{children:"Arc<T>\uff1a\u4e0e Rc<T> \u7c7b\u4f3c\uff0c\u4f46\u662f\u5b83\u652f\u6301\u8de8\u7ebf\u7a0b\u5b89\u5168\u7684\u5171\u4eab\u6240\u6709\u6743\u3002"}),"\n",(0,r.jsx)(n.li,{children:"Box<T>\uff1a\u8f7b\u91cf\u7ea7\u7684\u667a\u80fd\u6307\u9488\uff0c\u7528\u4e8e\u5206\u914d\u5806\u5185\u5b58\u5e76\u5c06\u5176\u8f6c\u6362\u4e3a\u4e0d\u53ef\u53d8\u7684\u503c\u3002"}),"\n",(0,r.jsx)(n.li,{children:"Ref<T>\uff1a\u4e0d\u53ef\u53d8\u7684\u667a\u80fd\u6307\u9488\uff0c\u7528\u4e8e\u6307\u5411\u4e00\u4e2a\u4e0d\u53ef\u53d8\u7684\u503c\u3002\u5b83\u4e0d\u80fd\u88ab\u590d\u5236\u6216\u79fb\u52a8\uff0c\u5e76\u4e14\u4fdd\u8bc1\u4e86\u6307\u5411\u7684\u503c\u5728\u6574\u4e2a\u751f\u547d\u5468\u671f\u5185\u4e0d\u4f1a\u88ab\u4fee\u6539\u3002"}),"\n",(0,r.jsx)(n.li,{children:"Pin<T>\uff1a\u7c7b\u4f3c\u4e8e Ref<T>\uff0c\u4f46\u662f\u5b83\u53ef\u4ee5\u5728\u501f\u7528\u68c0\u67e5\u8fc7\u7a0b\u4e2d\u88ab\u56fa\u5b9a\uff0c\u4ee5\u786e\u4fdd\u5b83\u4e0d\u4f1a\u88ab\u79fb\u52a8\u6216\u5220\u9664\u3002"}),"\n",(0,r.jsx)(n.li,{children:"Send<T>\uff1a\u7528\u4e8e\u5b9e\u73b0\u8de8\u7ebf\u7a0b\u5b89\u5168\u7684\u667a\u80fd\u6307\u9488\u3002\u5b83\u786e\u4fdd\u4e86\u5728\u4e0d\u540c\u7ebf\u7a0b\u4e2d\u4f7f\u7528\u7684\u667a\u80fd\u6307\u9488\u6307\u5411\u7684\u5bf9\u8c61\u662f\u5b89\u5168\u7684\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u8fd9\u4e9b\u667a\u80fd\u6307\u9488\u7c7b\u578b\u5728 Rust \u4e2d\u88ab\u5e7f\u6cdb\u4f7f\u7528\uff0c\u5b83\u4eec\u63d0\u4f9b\u4e86\u9ad8\u6548\u3001\u5b89\u5168\u7684\u5185\u5b58\u7ba1\u7406\u65b9\u6cd5\uff0c\u5e2e\u52a9\u7a0b\u5e8f\u5458\u907f\u514d\u5e38\u89c1\u7684\u5185\u5b58\u95ee\u9898\uff0c\u5982\u5185\u5b58\u6cc4\u6f0f\u548c\u60ac\u7a7a\u6307\u9488\u3002"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u6211\u662f\u8682\u8681\u80cc\u5927\u8c61\uff0c\u6587\u7ae0\u5bf9\u4f60\u6709\u5e2e\u52a9\u7ed9",(0,r.jsx)(n.a,{href:"https://github.com/mxsm/mxsm-website",children:"\u9879\u76ee\u70b9\u4e2a\u2764"}),"\u5173\u6ce8\u6211",(0,r.jsxs)(n.a,{href:"https://github.com/mxsm",children:["GitHub",":mxsm"]}),"\uff0c\u6587\u7ae0\u6709\u4e0d\u6b63\u786e\u7684\u5730\u65b9\u8bf7\u60a8\u65a7\u6b63,\u521b\u5efa",(0,r.jsx)(n.a,{href:"https://github.com/mxsm/mxsm-website/issues",children:"ISSUE\u63d0\u4ea4PR"}),"~\u8c22\u8c22! Emal:<",(0,r.jsx)(n.a,{href:"mailto:mxsm@apache.com",children:"mxsm@apache.com"}),">"]}),"\n"]})]})}function x(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>c});var r=s(6540);const t={},i=r.createContext(t);function l(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);