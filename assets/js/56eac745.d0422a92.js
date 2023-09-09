"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[3052],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>f});var r=n(7294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,l=function(t,e){if(null==t)return{};var n,r,l={},u=Object.keys(t);for(r=0;r<u.length;r++)n=u[r],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(t);for(r=0;r<u.length;r++)n=u[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var s=r.createContext({}),a=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=a(t.components);return r.createElement(s.Provider,{value:e},t.children)},c="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,l=t.mdxType,u=t.originalType,s=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),c=a(n),m=l,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||u;return n?r.createElement(f,o(o({ref:e},p),{},{components:n})):r.createElement(f,o({ref:e},p))}));function f(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var u=n.length,o=new Array(u);o[0]=m;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i[c]="string"==typeof t?t:l,o[1]=i;for(var a=2;a<u;a++)o[a]=n[a];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5959:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>u,metadata:()=>i,toc:()=>a});var r=n(7462),l=(n(7294),n(3905));const u={title:"\u5b89\u88c5",sidebar_label:"1.1. \u5b89\u88c5",linkTitle:"Rust\u5b89\u88c5",weight:202308051736,description:"Rust\u5b89\u88c5"},o="Rust\u5b89\u88c5",i={unversionedId:"rust/official-doc/introduction/installation",id:"rust/official-doc/introduction/installation",title:"\u5b89\u88c5",description:"Rust\u5b89\u88c5",source:"@site/docs/rust/official-doc/introduction/01-installation.md",sourceDirName:"rust/official-doc/introduction",slug:"/rust/official-doc/introduction/installation",permalink:"/docs/rust/official-doc/introduction/installation",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/rust/official-doc/introduction/01-installation.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1694243114,formattedLastUpdatedAt:"Sep 9, 2023",sidebarPosition:1,frontMatter:{title:"\u5b89\u88c5",sidebar_label:"1.1. \u5b89\u88c5",linkTitle:"Rust\u5b89\u88c5",weight:202308051736,description:"Rust\u5b89\u88c5"},sidebar:"rustDoc",previous:{title:"Overview",permalink:"/docs/rust/official-doc/introduction"},next:{title:"1.2 Hello, World!",permalink:"/docs/rust/official-doc/introduction/HelloWorld"}},s={},a=[{value:"\u5728Linux\u6216macOS\u4e0a\u5b89\u88c5rustup",id:"\u5728linux\u6216macos\u4e0a\u5b89\u88c5rustup",level:2},{value:"\u5728Windows\u4e0a\u5b89\u88c5rustup",id:"\u5728windows\u4e0a\u5b89\u88c5rustup",level:2},{value:"\u6545\u969c\u6392\u9664",id:"\u6545\u969c\u6392\u9664",level:2},{value:"\u66f4\u65b0\u548c\u5378\u8f7d",id:"\u66f4\u65b0\u548c\u5378\u8f7d",level:2},{value:"\u672c\u5730\u6587\u6863",id:"\u672c\u5730\u6587\u6863",level:2}],p={toc:a},c="wrapper";function d(t){let{components:e,...n}=t;return(0,l.kt)(c,(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"rust\u5b89\u88c5"},"Rust\u5b89\u88c5"),(0,l.kt)("p",null,"\u7b2c\u4e00\u6b65\u662f\u5b89\u88c5Rust\u3002\u6211\u4eec\u5c06\u901a\u8fc7rustup\u4e0b\u8f7dRust,\u8fd9\u662f\u4e00\u4e2a\u7528\u4e8e\u7ba1\u7406Rust\u7248\u672c\u548c\u76f8\u5173\u5de5\u5177\u7684\u547d\u4ee4\u884c\u5de5\u5177\u3002\u60a8\u9700\u8981\u8054\u7f51\u4e0b\u8f7d\u3002"),(0,l.kt)("p",null,"\u6ce8\u610f:\u5982\u679c\u7531\u4e8e\u67d0\u4e9b\u539f\u56e0\u60a8\u4e0d\u60f3\u4f7f\u7528rustup,\u8bf7\u53c2\u9605\u5176\u4ed6Rust\u5b89\u88c5\u65b9\u6cd5\u9875\u9762\u4ee5\u83b7\u53d6\u66f4\u591a\u9009\u9879\u3002"),(0,l.kt)("p",null,"\u4ee5\u4e0b\u6b65\u9aa4\u5c06\u5b89\u88c5\u6700\u65b0\u7a33\u5b9a\u7248\u672c\u7684Rust\u7f16\u8bd1\u5668\u3002Rust\u7684\u7a33\u5b9a\u6027\u4fdd\u8bc1\u786e\u4fdd\u4e66\u4e2d\u6240\u6709\u53ef\u4ee5\u7f16\u8bd1\u7684\u793a\u4f8b\u5728\u4f7f\u7528\u8f83\u65b0\u7248\u672c\u7684Rust\u65f6\u4e5f\u53ef\u4ee5\u7f16\u8bd1\u3002\u4e0d\u540c\u7248\u672c\u4e4b\u95f4\u7684\u8f93\u51fa\u53ef\u80fd\u7565\u6709\u4e0d\u540c,\u56e0\u4e3aRust\u901a\u5e38\u4f1a\u6539\u8fdb\u9519\u8bef\u6d88\u606f\u548c\u8b66\u544a\u3002\u6362\u53e5\u8bdd\u8bf4,\u4f7f\u7528\u8fd9\u4e9b\u6b65\u9aa4\u5b89\u88c5\u7684\u4efb\u4f55\u65b0\u7248\u672c\u7684\u7a33\u5b9aRust\u90fd\u5e94\u8be5\u4e0e\u672c\u4e66\u7684\u5185\u5bb9\u914d\u5408\u826f\u597d\u3002"),(0,l.kt)("p",null,"\u547d\u4ee4\u884c\u8868\u793a\u6cd5"),(0,l.kt)("p",null,"\u5728\u672c\u7ae0\u53ca\u5168\u4e66\u4e2d,\u6211\u4eec\u5c06\u5c55\u793a\u4e00\u4e9b\u5728\u7ec8\u7aef\u4e2d\u4f7f\u7528\u7684\u547d\u4ee4\u3002\u4ee5$\u5f00\u5934\u7684\u884c\u8868\u793a\u60a8\u5e94\u8be5\u5728\u7ec8\u7aef\u4e2d\u8f93\u5165\u7684\u5185\u5bb9\u3002\u60a8\u4e0d\u9700\u8981\u8f93\u5165$\u5b57\u7b26;\u5b83\u662f\u63d0\u793a\u547d\u4ee4\u5f00\u59cb\u4f4d\u7f6e\u7684\u547d\u4ee4\u884c\u63d0\u793a\u7b26\u3002\u4e0d\u4ee5$\u5f00\u5934\u7684\u884c\u901a\u5e38\u663e\u793a\u524d\u4e00\u4e2a\u547d\u4ee4\u7684\u8f93\u51fa\u3002\u53e6\u5916,\u7279\u5b9a\u4e8ePowerShell\u7684\u793a\u4f8b\u5c06\u4f7f\u7528>\u800c\u4e0d\u662f$\u3002"),(0,l.kt)("h2",{id:"\u5728linux\u6216macos\u4e0a\u5b89\u88c5rustup"},"\u5728Linux\u6216macOS\u4e0a\u5b89\u88c5rustup"),(0,l.kt)("p",null,"\u5982\u679c\u60a8\u4f7f\u7528Linux\u6216macOS,\u8bf7\u6253\u5f00\u4e00\u4e2a\u7ec8\u7aef\u5e76\u8f93\u5165\u4ee5\u4e0b\u547d\u4ee4:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ curl --proto '=https' --tlsv1.2 https://sh.rustup.rs -sSf | sh\n")),(0,l.kt)("p",null,"\u8be5\u547d\u4ee4\u4f1a\u4e0b\u8f7d\u4e00\u4e2a\u811a\u672c\u5e76\u5f00\u59cb\u5b89\u88c5rustup\u5de5\u5177,\u5b83\u4f1a\u5b89\u88c5\u6700\u65b0\u7a33\u5b9a\u7248\u672c\u7684Rust\u3002\u60a8\u53ef\u80fd\u4f1a\u88ab\u8981\u6c42\u8f93\u5165\u5bc6\u7801\u3002\u5982\u679c\u5b89\u88c5\u6210\u529f,\u4f1a\u51fa\u73b0\u4ee5\u4e0b\u884c:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Rust is installed now. Great!\n")),(0,l.kt)("p",null,"\u60a8\u8fd8\u9700\u8981\u4e00\u4e2a\u94fe\u63a5\u5668,\u8fd9\u662f\u4e00\u4e2aRust\u7528\u6765\u5c06\u5176\u7f16\u8bd1\u8f93\u51fa\u5408\u5e76\u4e3a\u4e00\u4e2a\u6587\u4ef6\u7684\u7a0b\u5e8f\u3002\u60a8\u53ef\u80fd\u5df2\u7ecf\u6709\u4e00\u4e2a\u4e86\u3002\u5982\u679c\u60a8\u9047\u5230\u94fe\u63a5\u5668\u9519\u8bef,\u5e94\u8be5\u5b89\u88c5C\u7f16\u8bd1\u5668,\u5176\u901a\u5e38\u4f1a\u5305\u542b\u94fe\u63a5\u5668\u3002C\u7f16\u8bd1\u5668\u4e5f\u5f88\u6709\u7528,\u56e0\u4e3a\u4e00\u4e9b\u5e38\u89c1\u7684Rust\u5305\u4f9d\u8d56\u4e8eC\u4ee3\u7801,\u9700\u8981C\u7f16\u8bd1\u5668\u3002"),(0,l.kt)("p",null,"\u5728macOS\u4e0a,\u60a8\u53ef\u4ee5\u901a\u8fc7\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u83b7\u53d6C\u7f16\u8bd1\u5668:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ xcode-select --install\n")),(0,l.kt)("p",null,"Linux\u7528\u6237\u5e94\u6839\u636e\u5176\u53d1\u884c\u7248\u7684\u6587\u6863\u901a\u5e38\u5b89\u88c5GCC\u6216Clang\u3002\u4f8b\u5982,\u5982\u679c\u60a8\u4f7f\u7528Ubuntu,\u53ef\u4ee5\u5b89\u88c5build-essential\u5305\u3002"),(0,l.kt)("h2",{id:"\u5728windows\u4e0a\u5b89\u88c5rustup"},"\u5728Windows\u4e0a\u5b89\u88c5rustup"),(0,l.kt)("p",null,"\u5728Windows\u4e0a,\u8bf7\u8bbf\u95ee ",(0,l.kt)("a",{parentName:"p",href:"https://www.rust-lang.org/tools/install"},"https://www.rust-lang.org/tools/install")," \u5e76\u6309\u7167\u5b89\u88c5Rust\u7684\u8bf4\u660e\u8fdb\u884c\u64cd\u4f5c\u3002\u5728\u67d0\u4e2a\u65f6\u5019,\u60a8\u4f1a\u6536\u5230\u4e00\u6761\u6d88\u606f,\u5176\u4e2d\u89e3\u91ca\u8bf4\u60a8\u8fd8\u9700\u8981Visual Studio 2013\u6216\u66f4\u9ad8\u7248\u672c\u7684MSVC\u6784\u5efa\u5de5\u5177\u3002"),(0,l.kt)("p",null,"\u8981\u83b7\u53d6\u6784\u5efa\u5de5\u5177,\u60a8\u9700\u8981\u5b89\u88c5Visual Studio 2022\u3002\u5f53\u8be2\u95ee\u8981\u5b89\u88c5\u54ea\u4e9b\u5de5\u4f5c\u8d1f\u8f7d\u65f6,\u8bf7\u5305\u62ec:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u201cDesktop Development with C++\u201d"),(0,l.kt)("li",{parentName:"ul"},"Windows 10\u621611 SDK"),(0,l.kt)("li",{parentName:"ul"},"\u82f1\u8bed\u8bed\u8a00\u5305\u7ec4\u4ef6\u4ee5\u53ca\u60a8\u9009\u62e9\u7684\u4efb\u4f55\u5176\u4ed6\u8bed\u8a00\u5305")),(0,l.kt)("p",null,"\u672c\u4e66\u7684\u5176\u4f59\u90e8\u5206\u4f7f\u7528\u5728cmd.exe\u548cPowerShell\u4e2d\u90fd\u53ef\u4ee5\u5de5\u4f5c\u7684\u547d\u4ee4\u3002\u5982\u679c\u6709\u5177\u4f53\u533a\u522b,\u6211\u4eec\u4f1a\u8fdb\u884c\u89e3\u91ca\u5e94\u8be5\u4f7f\u7528\u54ea\u4e2a\u3002"),(0,l.kt)("h2",{id:"\u6545\u969c\u6392\u9664"},"\u6545\u969c\u6392\u9664"),(0,l.kt)("p",null,"\u8981\u68c0\u67e5Rust\u662f\u5426\u6b63\u786e\u5b89\u88c5,\u8bf7\u6253\u5f00shell\u5e76\u8f93\u5165\u6b64\u884c:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ rustc --version\n")),(0,l.kt)("p",null,"\u60a8\u5e94\u8be5\u770b\u5230\u5df2\u53d1\u5e03\u7684\u6700\u65b0\u7a33\u5b9a\u7248\u672c\u7684\u7248\u672c\u53f7\u3001\u63d0\u4ea4\u54c8\u5e0c\u548c\u63d0\u4ea4\u65e5\u671f,\u683c\u5f0f\u5982\u4e0b:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"rustc x.y.z (abcabcabc yyyy-mm-dd)\n")),(0,l.kt)("p",null,"\u5982\u679c\u770b\u5230\u6b64\u4fe1\u606f,\u5219\u8868\u793a\u5df2\u6210\u529f\u5b89\u88c5Rust! \u5982\u679c\u60a8\u6ca1\u6709\u770b\u5230\u6b64\u4fe1\u606f,\u8bf7\u68c0\u67e5Rust\u662f\u5426\u5728\u60a8\u7684%PATH%\u7cfb\u7edf\u53d8\u91cf\u4e2d,\u5982\u4e0b\u6240\u793a\u3002"),(0,l.kt)("p",null,"\u5728Windows CMD\u4e2d,\u4f7f\u7528:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"> echo %PATH%\n")),(0,l.kt)("p",null,"\u5728PowerShell\u4e2d,\u4f7f\u7528:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"> echo $env:Path\n")),(0,l.kt)("p",null,"\u5728Linux\u548cmacOS\u4e0a,\u4f7f\u7528:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ echo $PATH\n")),(0,l.kt)("p",null,"\u5982\u679c\u4e00\u5207\u6b63\u786e\u4f46Rust\u4ecd\u7136\u4e0d\u5de5\u4f5c,\u60a8\u53ef\u4ee5\u83b7\u5f97\u5e2e\u52a9\u7684\u5730\u65b9\u6709\u5f88\u591a\u3002\u8bf7\u5728\u793e\u533a\u9875\u9762\u4e0a\u4e86\u89e3\u5982\u4f55\u8054\u7cfb\u5176\u4ed6Rustaceans(\u6211\u4eec\u7ed9\u81ea\u5df1\u7684\u611a\u8822\u6635\u79f0)\u3002"),(0,l.kt)("h2",{id:"\u66f4\u65b0\u548c\u5378\u8f7d"},"\u66f4\u65b0\u548c\u5378\u8f7d"),(0,l.kt)("p",null,"\u4e00\u65e6\u901a\u8fc7rustup\u5b89\u88c5Rust,\u66f4\u65b0\u5230\u65b0\u53d1\u5e03\u7684\u7248\u672c\u5f88\u5bb9\u6613\u3002\u4eceshell\u4e2d\u8fd0\u884c\u4ee5\u4e0b\u66f4\u65b0\u811a\u672c:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ rustup update\n")),(0,l.kt)("p",null,"\u8981\u5378\u8f7dRust\u548crustup,\u8bf7\u4eceshell\u4e2d\u8fd0\u884c\u4ee5\u4e0b\u5378\u8f7d\u811a\u672c:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ rustup self uninstall\n")),(0,l.kt)("h2",{id:"\u672c\u5730\u6587\u6863"},"\u672c\u5730\u6587\u6863"),(0,l.kt)("p",null,"Rust\u7684\u5b89\u88c5\u8fd8\u5305\u62ec\u672c\u5730\u526f\u672c\u7684\u6587\u6863,\u4ee5\u4fbf\u60a8\u53ef\u4ee5\u8131\u673a\u9605\u8bfb\u3002\u8fd0\u884crustup doc\u5728\u6d4f\u89c8\u5668\u4e2d\u6253\u5f00\u672c\u5730\u6587\u6863\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u6807\u51c6\u5e93\u63d0\u4f9b\u4e86\u67d0\u4e2a\u7c7b\u578b\u6216\u51fd\u6570,\u800c\u60a8\u4e0d\u786e\u5b9a\u5b83\u7684\u4f5c\u7528\u6216\u5982\u4f55\u4f7f\u7528\u5b83,\u8bf7\u4f7f\u7528\u5e94\u7528\u7a0b\u5e8f\u7f16\u7a0b\u63a5\u53e3(API)\u6587\u6863\u6765\u67e5\u627e\u76f8\u5173\u4fe1\u606f!"))}d.isMDXComponent=!0}}]);