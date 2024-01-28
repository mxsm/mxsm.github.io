"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[9010],{9029:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>t,metadata:()=>a,toc:()=>d});var r=s(5893),i=s(1151);const t={title:"Rust Pin\u673a\u5236\u548c\u4f5c\u7528",linkTitle:"Rust Pin\u673a\u5236\u548c\u4f5c\u7528",sidebar_label:"Rust Pin\u673a\u5236\u548c\u4f5c\u7528",weight:202310151934,description:"Rust Pin\u673a\u5236\u548c\u4f5c\u7528"},l=void 0,a={id:"rust/rust-learn/summary/pin",title:"Rust Pin\u673a\u5236\u548c\u4f5c\u7528",description:"Rust Pin\u673a\u5236\u548c\u4f5c\u7528",source:"@site/docs/rust/rust-learn/summary/03-pin.md",sourceDirName:"rust/rust-learn/summary",slug:"/rust/rust-learn/summary/pin",permalink:"/docs/rust/rust-learn/summary/pin",draft:!1,unlisted:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/rust/rust-learn/summary/03-pin.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1706451902,formattedLastUpdatedAt:"Jan 28, 2024",sidebarPosition:3,frontMatter:{title:"Rust Pin\u673a\u5236\u548c\u4f5c\u7528",linkTitle:"Rust Pin\u673a\u5236\u548c\u4f5c\u7528",sidebar_label:"Rust Pin\u673a\u5236\u548c\u4f5c\u7528",weight:202310151934,description:"Rust Pin\u673a\u5236\u548c\u4f5c\u7528"},sidebar:"rustLearn",previous:{title:"Rust ref \u548c & \u4f7f\u7528\u8be6\u89e3",permalink:"/docs/rust/rust-learn/summary/ref-useage-explantion"}},c={},d=[{value:"1. Pin\u7684\u7279\u70b9",id:"1-pin\u7684\u7279\u70b9",level:2}];function o(n){const e={blockquote:"blockquote",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.p,{children:["\u5728\u5b66\u4e60Rust\u5f02\u6b65\u7684\u65f6\u5019\u53d1\u73b0\u4e00\u4e2a\u6bd4\u8f83\u7279\u522b\u7684\u667a\u80fd\u6307\u9488 ",(0,r.jsx)(e.strong,{children:(0,r.jsx)(e.code,{children:"Pin"})})]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-rust",children:"pub trait Future {\n    type Output;\n\n    fn poll(self: Pin<&mut Self>, cx: &mut Context<'_>) -> Poll<Self::Output>;\n}\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u4e0b\u9762\u6211\u4eec\u6765\u5206\u6790\u4e00\u4e0b\u8fd9\u4e2a\u667a\u80fd\u6307\u9488\u7684\u4f5c\u7528\u3002"}),"\n",(0,r.jsx)(e.h2,{id:"1-pin\u7684\u7279\u70b9",children:"1. Pin\u7684\u7279\u70b9"}),"\n",(0,r.jsx)(e.p,{children:"\u901a\u8fc7\u5bf9Pin\u6307\u9488\u7684\u6e90\u7801\u9605\u8bfb\u6211\u4eec\u53ef\u4ee5\u603b\u7ed3\u51fa\u6765Pin\u7684\u4ee5\u4e0b\u51e0\u4e2a\u7279\u70b9\uff1a"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"Pin<P>"})," \u6cdb\u578b\u6570\u636e\u7ed3\u6784P\u5fc5\u987b\u662f\u6307\u9488(\u667a\u80fd\u6307\u9488\u548c\u666e\u901a\u6307\u9488)\uff0c\u51c6\u786e\u7684\u6765\u8bf4\u662f\u5fc5\u987b\u5b9e\u73b0**",(0,r.jsx)(e.code,{children:"Deref trait"}),"** \u7684\u5bf9\u8c61\u3002"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-rust",children:"impl<P: Deref> Pin<P> {/*\u7701\u7565\u4ee3\u7801*/}\n"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"Pin"})," \u4e5f\u662f\u667a\u80fd\u6307\u9488"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-rust",children:'#[stable(feature = "pin", since = "1.33.0")]\nimpl<P: Deref> Deref for Pin<P> {\n    type Target = P::Target;\n    fn deref(&self) -> &P::Target {\n        Pin::get_ref(Pin::as_ref(self))\n    }\n}\n\n#[stable(feature = "pin", since = "1.33.0")]\nimpl<P: DerefMut<Target: Unpin>> DerefMut for Pin<P> {\n    fn deref_mut(&mut self) -> &mut P::Target {\n        Pin::get_mut(Pin::as_mut(self))\n    }\n}\n'})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["\u7ed9\u5b9a ",(0,r.jsx)(e.code,{children:"PinP<T>>"})," \u7c7b\u578b\u7684\u6570\u636e\uff0c",(0,r.jsxs)(e.strong,{children:["\u53ea\u8981 ",(0,r.jsx)(e.code,{children:"T"})," \u4e0d\u6ee1\u8db3 Unpin trait"]}),"\uff0c\u5219 Safe Rust\uff08\u5373",(0,r.jsxs)(e.strong,{children:["\u4e0d\u4f7f\u7528 ",(0,r.jsx)(e.code,{children:"unsafe{}"})," \u5757"]}),"\uff09\u4e0b\u65e0\u6cd5\u83b7\u5f97 ",(0,r.jsx)(e.code,{children:"&mut T"})," \u548c ",(0,r.jsx)(e.code,{children:"T"}),"\u3002\u6362\u8a00\u4e4b\uff0c\u8981\u60f3 ",(0,r.jsx)(e.code,{children:"Pin"})," \u6709\u5176\u6548\u679c\uff0c\u5219 ",(0,r.jsx)(e.code,{children:"T"})," \u5fc5\u987b\u4e0d\u6ee1\u8db3 Unpin trait\u3002\u4e5f\u5c31\u662f\u4e0d\u80fd\u5b9e\u73b0Unpin\u3002trait\u4e3a\u51e0\u4e4e\u6240\u6709\u7c7b\u578b\u81ea\u52a8\u5b9e\u73b0\u3002"]}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"\u901a\u8fc7\u5bf9struct\u4f7f\u7528PhantomPinned\u6807\u8bb0\u6765\u963b\u6b62\u5b9e\u73b0Unpin trait"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"\u4e0b\u9762\u6765\u901a\u8fc7\u4ee3\u7801\u9a8c\u8bc1\u4e0a\u9762\u7684\u4e09\u70b9\u8bf4\u6cd5\u3002"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"Pin\u5305\u88f9\u7684P\u5fc5\u987b\u662f\u6307\u9488"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-rust",children:'use std::pin::Pin;\n\n#[derive(Clone)]\nstruct Mxsm{\n    name:String\n}\n\nfn main() {\n       let mxsm = Mxsm{\n        name: "".to_string()\n    };\n    Pin::new(&mxsm); //\u666e\u901a\u6307\u9488\n    Pin::new(Box::new(mxsm.clone())); //\u667a\u80fd\u6307\u9488\n    let num = 32;\n    Pin::new(num); //\u7f16\u8bd1\u62a5\u9519\n}\n'})}),"\n",(0,r.jsx)(e.p,{children:"\u4e0a\u9762\u4ee3\u7801\u53ef\u4ee5\u770b\u51fa\u6765\u666e\u901a\u6307\u9488\u548c\u667a\u80fd\u6307\u9488\u90fd\u662f\u53ef\u4ee5\u7684\u3002\u5982\u679c\u662f\u975e\u6307\u9488\u76f4\u63a5\u7f16\u8bd1\u62a5\u9519\uff1a"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{src:"C:%5CUsers%5Cljbmx%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20231015223450119.png",alt:"image-20231015223450119"})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"Pin\u662f\u667a\u80fd\u6307\u9488"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-rust",children:"let mxsm1 = &*pin;\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u4e0a\u9762\u4ee3\u7801\u8bf4\u660ePin\u662f\u667a\u80fd\u6307\u9488\u3002"}),"\n",(0,r.jsxs)(e.p,{children:["\u56e0\u4e3aUnpin\u8fd9\u4e2atrait\u51e0\u4e4e\u6240\u6709\u7684\u7c7b\u578b\u90fd\u81ea\u52a8\u5b9e\u73b0\uff0c\u6240\u4ee5\u6211\u4eec\u5982\u679c\u8ba9\u67d0\u4e2a\u7c7b\u578b\u4e0d\u5b9e\u73b0\uff0c\u9700\u8981\u589e\u52a0\u4e00\u4e2a\u6807\u8bb0 ",(0,r.jsx)(e.strong,{children:(0,r.jsx)(e.code,{children:"PhantomPinned"})})," \u6765\u963b\u6b62\u5b9e\u73b0\u3002"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-rust",children:'struct Mxsm{\n    name:String,\n    _mark: PhantomPinned //\u589e\u52a0\u6807\u8bb0\uff0c\u4e0d\u5b9e\u73b0Unpin trait\n}\n\nfn main() {\n    let mxsm = Mxsm{\n        name: "".to_string(),\n        _mark: PhantomPinned\n    };\n   Pin::new(Box::new(mxsm));\n}\n'})}),"\n",(0,r.jsx)(e.p,{children:"\u6b64\u65f6\u4e0a\u9762\u7684\u4ee3\u7801\u65e0\u6cd5\u7f16\u8bd1\uff1a"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{src:"C:%5CUsers%5Cljbmx%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20231015225404208.png",alt:"image-20231015225404208"})}),"\n",(0,r.jsxs)(e.p,{children:["\u7f16\u8bd1\u5931\u8d25\uff0c\u6211\u4eec\u6765\u770b\u4e00\u4e0b",(0,r.jsx)(e.strong,{children:"Pin::new"})," \u7684\u5b9a\u4e49"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-rust",children:"impl<P: Deref<Target: Unpin>> Pin<P> {\n\tpub const fn new(pointer: P) -> Pin<P> {\n        // SAFETY: the value pointed to is `Unpin`, and so has no requirements\n        // around pinning.\n        unsafe { Pin::new_unchecked(pointer) }\n    }\n    //\u7701\u7565\u90e8\u5206\u4ee3\u7801\n}\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u7136\u540e\u770b\u4e00\u4e0b\u6cdb\u578bP\u7684\u7ea6\u675f\u6761\u4ef6\uff1aP\u5b9e\u73b0\u4e86Deref trait\u5e76\u4e14\uff0c **Deref\u5305\u88f9\u7684\u6cdb\u578b\u7c7b\u5b9e\u73b0Unpin ** \u4ece\u4e0a\u9762\u7684\u7ea6\u675f\u53ef\u4ee5\u77e5\u9053"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.strong,{children:"\u6cdb\u578bP\u5fc5\u987b\u5b9e\u73b0Deref trait"})}),"\n",(0,r.jsxs)(e.li,{children:["P\u5305\u88f9\u7684Target\u5fc5\u987b\u5b9e\u73b0",(0,r.jsx)(e.strong,{children:"Unpin"})]}),"\n"]}),"\n",(0,r.jsxs)(e.p,{children:["\u6240\u4ee5\u5f53\u4e0a\u9762\u7684\u7ed3\u6784\u4f53 ",(0,r.jsx)(e.strong,{children:"Struct Mxsm"})," \u589e\u52a0\u4e00\u4e2a\u6807\u8bb0  ",(0,r.jsx)(e.strong,{children:(0,r.jsx)(e.code,{children:"PhantomPinned"})})," \u6765\u963b\u6b62\u5b9e\u73b0",(0,r.jsx)(e.strong,{children:"Unpin trait"})," \u6240\u4ee5\u5c31\u62a5\u9519\u4e86\u3002\u4f46\u662f\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u975e\u5b89\u5168\u7684\u65b9\u6cd5\u6765\u5b9e\u73b0"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-rust",children:'fn main() {\n    let mxsm = Mxsm{\n        name: "".to_string(),\n        _mark: PhantomPinned\n    };\n    let pin = unsafe{Pin::new_unchecked(Box::new(mxsm))}; //\u901a\u8fc7\u975e\u5b89\u5168\u7684\u5b9e\u73b0\n}\n'})})]})}function u(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(o,{...n})}):o(n)}},1151:(n,e,s)=>{s.d(e,{Z:()=>a,a:()=>l});var r=s(7294);const i={},t=r.createContext(i);function l(n){const e=r.useContext(t);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:l(n.components),r.createElement(t.Provider,{value:e},n.children)}}}]);