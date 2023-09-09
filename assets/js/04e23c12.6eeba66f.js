"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[727],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>k});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),s=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=s(e.components);return a.createElement(o.Provider,{value:n},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=s(t),d=r,k=u["".concat(o,".").concat(d)]||u[d]||c[d]||i;return t?a.createElement(k,l(l({ref:n},m),{},{components:t})):a.createElement(k,l({ref:n},m))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=d;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p[u]="string"==typeof e?e:r,l[1]=p;for(var s=2;s<i;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},289:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var a=t(7462),r=(t(7294),t(3905));const i={title:"\u5b9a\u4e49\u548c\u5b9e\u4f8b\u5316\u7ed3\u6784\u4f53",linkTitle:"\u5b9a\u4e49\u548c\u5b9e\u4f8b\u5316\u7ed3\u6784\u4f53",sidebar_label:"5.1. \u5b9a\u4e49\u548c\u5b9e\u4f8b\u5316\u7ed3\u6784\u4f53",weight:202308051736,description:"\u5b9a\u4e49\u548c\u5b9e\u4f8b\u5316\u7ed3\u6784\u4f53"},l=void 0,p={unversionedId:"rust/official-doc/structure-related-data/defining-instantiating-structs",id:"rust/official-doc/structure-related-data/defining-instantiating-structs",title:"\u5b9a\u4e49\u548c\u5b9e\u4f8b\u5316\u7ed3\u6784\u4f53",description:"\u5b9a\u4e49\u548c\u5b9e\u4f8b\u5316\u7ed3\u6784\u4f53",source:"@site/docs/rust/official-doc/structure-related-data/01-defining-instantiating-structs.md",sourceDirName:"rust/official-doc/structure-related-data",slug:"/rust/official-doc/structure-related-data/defining-instantiating-structs",permalink:"/docs/rust/official-doc/structure-related-data/defining-instantiating-structs",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/rust/official-doc/structure-related-data/01-defining-instantiating-structs.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1694243114,formattedLastUpdatedAt:"Sep 9, 2023",sidebarPosition:1,frontMatter:{title:"\u5b9a\u4e49\u548c\u5b9e\u4f8b\u5316\u7ed3\u6784\u4f53",linkTitle:"\u5b9a\u4e49\u548c\u5b9e\u4f8b\u5316\u7ed3\u6784\u4f53",sidebar_label:"5.1. \u5b9a\u4e49\u548c\u5b9e\u4f8b\u5316\u7ed3\u6784\u4f53",weight:202308051736,description:"\u5b9a\u4e49\u548c\u5b9e\u4f8b\u5316\u7ed3\u6784\u4f53"},sidebar:"rustDoc",previous:{title:"\u4f7f\u7528\u7ed3\u6784\u4f53\u6765\u7ec4\u7ec7\u76f8\u5173\u6570\u636e",permalink:"/docs/rust/official-doc/structure-related-data"},next:{title:"5.2. \u4f7f\u7528\u7ed3\u6784\u4f53\u7684\u793a\u4f8b\u7a0b\u5e8f",permalink:"/docs/rust/official-doc/structure-related-data/using-structs"}},o={},s=[{value:"\u5b9a\u4e49\u548c\u5b9e\u4f8b\u5316\u7ed3\u6784\u4f53",id:"\u5b9a\u4e49\u548c\u5b9e\u4f8b\u5316\u7ed3\u6784\u4f53",level:2},{value:"\u4f7f\u7528\u5b57\u6bb5\u521d\u59cb\u5316\u7b80\u5199",id:"\u4f7f\u7528\u5b57\u6bb5\u521d\u59cb\u5316\u7b80\u5199",level:3},{value:"\u4f7f\u7528\u7ed3\u6784\u4f53\u66f4\u65b0\u8bed\u6cd5\u4ece\u5176\u4ed6\u5b9e\u4f8b\u521b\u5efa\u5b9e\u4f8b",id:"\u4f7f\u7528\u7ed3\u6784\u4f53\u66f4\u65b0\u8bed\u6cd5\u4ece\u5176\u4ed6\u5b9e\u4f8b\u521b\u5efa\u5b9e\u4f8b",level:3},{value:"\u4f7f\u7528\u6ca1\u6709\u5b57\u6bb5\u540d\u7684\u5143\u7ec4\u7ed3\u6784\u4f53\u521b\u5efa\u4e0d\u540c\u7684\u7c7b\u578b",id:"\u4f7f\u7528\u6ca1\u6709\u5b57\u6bb5\u540d\u7684\u5143\u7ec4\u7ed3\u6784\u4f53\u521b\u5efa\u4e0d\u540c\u7684\u7c7b\u578b",level:3},{value:"\u6ca1\u6709\u4efb\u4f55\u5b57\u6bb5\u7684\u7c7b\u5355\u5143\u7ed3\u6784\u4f53",id:"\u6ca1\u6709\u4efb\u4f55\u5b57\u6bb5\u7684\u7c7b\u5355\u5143\u7ed3\u6784\u4f53",level:3}],m={toc:s},u="wrapper";function c(e){let{components:n,...t}=e;return(0,r.kt)(u,(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u5b9a\u4e49\u548c\u5b9e\u4f8b\u5316\u7ed3\u6784\u4f53"},"\u5b9a\u4e49\u548c\u5b9e\u4f8b\u5316\u7ed3\u6784\u4f53"),(0,r.kt)("p",null,"\u7ed3\u6784\u4f53\u4e0e\u5143\u7ec4\u7c7b\u4f3c\uff0c\u5728\u5143\u7ec4\u4e2d\u6211\u4eec\u8ba8\u8bba\u8fc7\uff0c\u5b83\u4eec\u90fd\u53ef\u4ee5\u5305\u542b\u591a\u4e2a\u76f8\u5173\u7684\u503c\u3002\u4e0e\u5143\u7ec4\u7c7b\u4f3c\uff0c\u7ed3\u6784\u4f53\u7684\u6210\u5458\u53ef\u4ee5\u662f\u4e0d\u540c\u7684\u6570\u636e\u7c7b\u578b\u3002\u4e0d\u540c\u4e4b\u5904\u5728\u4e8e\uff0c\u5728\u7ed3\u6784\u4f53\u4e2d\uff0c\u4f60\u9700\u8981\u7ed9\u6bcf\u4e2a\u6570\u636e\u6210\u5458\u547d\u540d\uff0c\u4ee5\u4fbf\u6e05\u695a\u5730\u8868\u660e\u8fd9\u4e9b\u503c\u7684\u542b\u4e49\u3002\u589e\u52a0\u4e86\u8fd9\u4e9b\u540d\u79f0\u4f7f\u5f97\u7ed3\u6784\u4f53\u6bd4\u5143\u7ec4\u66f4\u7075\u6d3b\uff1a\u4e0d\u9700\u8981\u4f9d\u8d56\u6570\u636e\u7684\u987a\u5e8f\u6765\u6307\u5b9a\u6216\u8bbf\u95ee\u5b9e\u4f8b\u7684\u503c\u3002"),(0,r.kt)("p",null,"\u8981\u5b9a\u4e49\u4e00\u4e2a\u7ed3\u6784\u4f53\uff0c\u6211\u4eec\u4f7f\u7528\u5173\u952e\u5b57 ",(0,r.kt)("inlineCode",{parentName:"p"},"struct")," \u5e76\u4e3a\u6574\u4e2a\u7ed3\u6784\u4f53\u8d77\u4e00\u4e2a\u540d\u79f0\u3002\u7ed3\u6784\u4f53\u7684\u540d\u79f0\u5e94\u8be5\u63cf\u8ff0\u5c06\u88ab\u7ec4\u5408\u5728\u4e00\u8d77\u7684\u6570\u636e\u7247\u6bb5\u7684\u610f\u4e49\u3002\u7136\u540e\uff0c\u5728\u5927\u62ec\u53f7\u5185\uff0c\u6211\u4eec\u5b9a\u4e49\u6570\u636e\u7247\u6bb5\u7684\u540d\u79f0\u548c\u7c7b\u578b\uff0c\u6211\u4eec\u79f0\u4e4b\u4e3a",(0,r.kt)("em",{parentName:"p"},"\u5b57\u6bb5"),"\u3002\u4f8b\u5982\uff0c\u4ee3\u7801\u6e05\u5355 5-1 \u663e\u793a\u4e86\u4e00\u4e2a\u5b58\u50a8\u7528\u6237\u8d26\u6237\u4fe1\u606f\u7684\u7ed3\u6784\u4f53\u793a\u4f8b\u3002"),(0,r.kt)("p",null,"\u6587\u4ef6\u540d\uff1asrc/main.rs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"struct User {\n    active: bool,\n    username: String,\n    email: String,\n    sign_in_count: u64,\n}\n")),(0,r.kt)("p",null,"\u4ee3\u7801\u6e05\u5355 5-1\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"User")," \u7ed3\u6784\u4f53\u7684\u5b9a\u4e49"),(0,r.kt)("p",null,"\u5728\u5b9a\u4e49\u4e86\u7ed3\u6784\u4f53\u4e4b\u540e\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u4e3a\u6bcf\u4e2a\u5b57\u6bb5\u6307\u5b9a\u5177\u4f53\u7684\u503c\u6765\u521b\u5efa\u8be5\u7ed3\u6784\u4f53\u7684",(0,r.kt)("em",{parentName:"p"},"\u5b9e\u4f8b"),"\u3002\u6211\u4eec\u901a\u8fc7\u7ed9\u51fa\u7ed3\u6784\u4f53\u540d\u79f0\uff0c\u7136\u540e\u6dfb\u52a0\u82b1\u62ec\u53f7\uff0c\u5176\u4e2d\u5305\u542b ",(0,r.kt)("em",{parentName:"p"},"\u952e\uff1a\u503c")," \u5bf9\uff0c\u5176\u4e2d\u952e\u662f\u5b57\u6bb5\u7684\u540d\u79f0\uff0c\u503c\u662f\u6211\u4eec\u8981\u5b58\u50a8\u5728\u8fd9\u4e9b\u5b57\u6bb5\u4e2d\u7684\u6570\u636e\u3002\u6211\u4eec\u4e0d\u9700\u8981\u6309\u7167\u5728\u7ed3\u6784\u4f53\u4e2d\u58f0\u660e\u5b83\u4eec\u7684\u987a\u5e8f\u6307\u5b9a\u5b57\u6bb5\u3002\u6362\u53e5\u8bdd\u8bf4\uff0c\u7ed3\u6784\u4f53\u5b9a\u4e49\u5c31\u50cf\u662f\u7c7b\u578b\u7684\u901a\u7528\u6a21\u677f\uff0c\u5b9e\u4f8b\u7528\u7279\u5b9a\u7684\u6570\u636e\u586b\u5145\u8be5\u6a21\u677f\uff0c\u4ece\u800c\u521b\u5efa\u7c7b\u578b\u7684\u503c\u3002\u4f8b\u5982\uff0c\u6211\u4eec\u53ef\u4ee5\u50cf\u4ee3\u7801\u6e05\u5355 5-2 \u4e2d\u6240\u793a\u90a3\u6837\u58f0\u660e\u4e00\u4e2a\u7279\u5b9a\u7684\u7528\u6237\u3002"),(0,r.kt)("p",null,"\u6587\u4ef6\u540d\uff1asrc/main.rs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'fn main() {\n    let user1 = User {\n        active: true,\n        username: String::from("someusername123"),\n        email: String::from("someone@example.com"),\n        sign_in_count: 1,\n    };\n}\n')),(0,r.kt)("p",null,"\u4ee3\u7801\u6e05\u5355 5-2\uff1a\u521b\u5efa\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"User")," \u7ed3\u6784\u4f53\u7684\u5b9e\u4f8b"),(0,r.kt)("p",null,"\u8981\u4ece\u7ed3\u6784\u4f53\u4e2d\u83b7\u53d6\u7279\u5b9a\u7684\u503c\uff0c\u6211\u4eec\u4f7f\u7528\u70b9\u53f7\uff08dot notation\uff09\u3002\u4f8b\u5982\uff0c\u8981\u8bbf\u95ee\u6b64\u7528\u6237\u7684\u7535\u5b50\u90ae\u4ef6\u5730\u5740\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"user1.email"),"\u3002\u5982\u679c\u5b9e\u4f8b\u662f\u53ef\u53d8\u7684\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u70b9\u53f7\uff08dot notation\uff09\u5e76\u8d4b\u503c\u7ed9\u7279\u5b9a\u7684\u5b57\u6bb5\u6765\u66f4\u6539\u503c\u3002\u4ee3\u7801\u6e05\u5355 5-3 \u5c55\u793a\u4e86\u5982\u4f55\u5728\u53ef\u53d8\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"User")," \u5b9e\u4f8b\u4e2d\u66f4\u6539 ",(0,r.kt)("inlineCode",{parentName:"p"},"email")," \u5b57\u6bb5\u7684\u503c\u3002"),(0,r.kt)("p",null,"\u6587\u4ef6\u540d\uff1asrc/main.rs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'fn main() {\n    let mut user1 = User {\n        active: true,\n        username: String::from("someusername123"),\n        email: String::from("someone@example.com"),\n        sign_in_count: 1,\n    };\n\n    user1.email = String::from("anotheremail@example.com");\n}\n')),(0,r.kt)("p",null,"\u4ee3\u7801\u6e05\u5355 5-3\uff1a\u66f4\u6539 ",(0,r.kt)("inlineCode",{parentName:"p"},"User")," \u5b9e\u4f8b\u4e2d ",(0,r.kt)("inlineCode",{parentName:"p"},"email")," \u5b57\u6bb5\u7684\u503c"),(0,r.kt)("p",null,"\u8bf7\u6ce8\u610f\uff0c\u6574\u4e2a\u5b9e\u4f8b\u5fc5\u987b\u662f\u53ef\u53d8\u7684\uff1bRust \u4e0d\u5141\u8bb8\u6211\u4eec\u4ec5\u6807\u8bb0\u67d0\u4e9b\u5b57\u6bb5\u4e3a\u53ef\u53d8\u3002\u4e0e\u4efb\u4f55\u8868\u8fbe\u5f0f\u4e00\u6837\uff0c\u6211\u4eec\u53ef\u4ee5\u5728\u51fd\u6570\u4f53\u7684\u6700\u540e\u6784\u9020\u4e00\u4e2a\u65b0\u7684\u7ed3\u6784\u4f53\u5b9e\u4f8b\uff0c\u4ee5\u9690\u5f0f\u5730\u8fd4\u56de\u8be5\u65b0\u5b9e\u4f8b\u3002"),(0,r.kt)("p",null,"\u4ee3\u7801\u6e05\u5355 5-4 \u5c55\u793a\u4e86\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"build_user")," \u51fd\u6570\uff0c\u8be5\u51fd\u6570\u63a5\u53d7\u4e00\u4e2a\u7535\u5b50\u90ae\u4ef6\u548c\u7528\u6237\u540d\uff0c\u5e76\u8fd4\u56de\u4e00\u4e2a\u5177\u6709\u7ed9\u5b9a\u7535\u5b50\u90ae\u4ef6\u548c\u7528\u6237\u540d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"User")," \u5b9e\u4f8b\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"active")," \u5b57\u6bb5\u7684\u503c\u8bbe\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"\uff0c\u800c ",(0,r.kt)("inlineCode",{parentName:"p"},"sign_in_count")," \u5b57\u6bb5\u8bbe\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"1"),"\u3002"),(0,r.kt)("p",null,"\u6587\u4ef6\u540d\uff1asrc/main.rs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"fn build_user(email: String, username: String) -> User {\n    User {\n        active: true,\n        username: username,\n        email: email,\n        sign_in_count: 1,\n    }\n}\n")),(0,r.kt)("p",null,"\u4ee3\u7801\u6e05\u5355 5-4\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"build_user")," \u51fd\u6570\u63a5\u53d7\u7535\u5b50\u90ae\u4ef6\u548c\u7528\u6237\u540d\uff0c\u5e76\u8fd4\u56de ",(0,r.kt)("inlineCode",{parentName:"p"},"User")," \u7ed3\u6784\u4f53\u7684\u5b9e\u4f8b"),(0,r.kt)("p",null,"\u7ed9\u51fd\u6570\u53c2\u6570\u8d77\u4e0e\u7ed3\u6784\u4f53\u5b57\u6bb5\u76f8\u540c\u7684\u540d\u79f0\u662f\u5408\u7406\u7684\uff0c\u4f46\u662f\u5fc5\u987b\u91cd\u590d ",(0,r.kt)("inlineCode",{parentName:"p"},"email")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"username")," \u5b57\u6bb5\u7684\u540d\u79f0\u548c\u53d8\u91cf\u6709\u70b9\u7e41\u7410\u3002\u5982\u679c\u7ed3\u6784\u4f53\u6709\u66f4\u591a\u7684\u5b57\u6bb5\uff0c\u91cd\u590d\u6bcf\u4e2a\u540d\u79f0\u5c06\u53d8\u5f97\u66f4\u52a0\u70e6\u4eba\u3002\u5e78\u8fd0\u7684\u662f\uff0c\u8fd9\u91cc\u6709\u4e00\u4e2a\u65b9\u4fbf\u7684\u7b80\u5199\u65b9\u5f0f\uff01"),(0,r.kt)("h3",{id:"\u4f7f\u7528\u5b57\u6bb5\u521d\u59cb\u5316\u7b80\u5199"},"\u4f7f\u7528\u5b57\u6bb5\u521d\u59cb\u5316\u7b80\u5199"),(0,r.kt)("p",null,"\u56e0\u4e3a\u4ee3\u7801\u6e05\u5355 5-4 \u4e2d\u7684\u51fd\u6570\u53c2\u6570\u540d\u79f0\u548c\u7ed3\u6784\u4f53\u5b57\u6bb5\u540d\u79f0\u5b8c\u5168\u76f8\u540c\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("em",{parentName:"p"},"\u5b57\u6bb5\u521d\u59cb\u5316\u7b80\u5199")," \u8bed\u6cd5\u6765\u91cd\u5199 ",(0,r.kt)("inlineCode",{parentName:"p"},"build_user"),"\uff0c\u4f7f\u5176\u884c\u4e3a\u5b8c\u5168\u76f8\u540c\uff0c\u4f46\u4e0d\u9700\u8981\u91cd\u590d ",(0,r.kt)("inlineCode",{parentName:"p"},"username")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"email"),"\uff0c\u5982\u4ee3\u7801\u6e05\u5355 5-5 \u6240\u793a\u3002"),(0,r.kt)("p",null,"\u6587\u4ef6\u540d\uff1asrc/main.rs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"fn build_user(email: String, username: String) -> User {\n    User {\n        active: true,\n        username,\n        email,\n        sign_in_count: 1,\n    }\n}\n")),(0,r.kt)("p",null,"\u4ee3\u7801\u6e05\u5355 5-5\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"build_user")," \u51fd\u6570\u4f7f\u7528\u5b57\u6bb5\u521d\u59cb\u5316\u7b80\u5199\uff0c\u56e0\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"username")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"email")," \u53c2\u6570\u4e0e\u7ed3\u6784\u4f53\u5b57\u6bb5\u5177\u6709\u76f8\u540c\u7684\u540d\u79f0"),(0,r.kt)("p",null,"\u5728\u8fd9\u91cc\uff0c\u6211\u4eec\u6b63\u5728\u521b\u5efa\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"User")," \u7ed3\u6784\u4f53\u7684\u65b0\u5b9e\u4f8b\uff0c\u5b83\u6709\u4e00\u4e2a\u540d\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"email")," \u7684\u5b57\u6bb5\u3002\u6211\u4eec\u5e0c\u671b\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"email")," \u5b57\u6bb5\u7684\u503c\u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"build_user")," \u51fd\u6570\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"email")," \u53c2\u6570\u4e2d\u7684\u503c\u3002\u7531\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"email")," \u5b57\u6bb5\u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"email")," \u53c2\u6570\u5177\u6709\u76f8\u540c\u7684\u540d\u79f0\uff0c\u6211\u4eec\u53ea\u9700\u8981\u5199 ",(0,r.kt)("inlineCode",{parentName:"p"},"email")," \u800c\u4e0d\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"email: email"),"\u3002"),(0,r.kt)("h3",{id:"\u4f7f\u7528\u7ed3\u6784\u4f53\u66f4\u65b0\u8bed\u6cd5\u4ece\u5176\u4ed6\u5b9e\u4f8b\u521b\u5efa\u5b9e\u4f8b"},"\u4f7f\u7528\u7ed3\u6784\u4f53\u66f4\u65b0\u8bed\u6cd5\u4ece\u5176\u4ed6\u5b9e\u4f8b\u521b\u5efa\u5b9e\u4f8b"),(0,r.kt)("p",null,"\u901a\u5e38\uff0c\u521b\u5efa\u4e00\u4e2a\u5305\u542b\u53e6\u4e00\u4e2a\u5b9e\u4f8b\u4e2d\u5927\u90e8\u5206\u503c\u4f46\u66f4\u6539\u67d0\u4e9b\u503c\u7684\u65b0\u7ed3\u6784\u4f53\u5b9e\u4f8b\u662f\u975e\u5e38\u6709\u7528\u7684\u3002\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("em",{parentName:"p"},"\u7ed3\u6784\u4f53\u66f4\u65b0\u8bed\u6cd5")," \u6765\u5b9e\u73b0\u8fd9\u4e00\u70b9\u3002"),(0,r.kt)("p",null,"\u9996\u5148\uff0c\u4ee3\u7801\u6e05\u5355 5-6 \u5c55\u793a\u4e86\u5982\u4f55\u5728\u4e0d\u4f7f\u7528\u66f4\u65b0\u8bed\u6cd5\u7684\u60c5\u51b5\u4e0b\u521b\u5efa\u4e00\u4e2a\u65b0\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"User")," \u5b9e\u4f8b\u3002\u6211\u4eec\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"email")," \u8bbe\u7f6e\u4e86\u4e00\u4e2a\u65b0\u503c\uff0c\u4f46\u5728\u9664\u6b64\u4e4b\u5916\uff0c\u6211\u4eec\u4f7f\u7528\u4e86\u5728\u4ee3\u7801\u6e05\u5355 5-2 \u4e2d\u521b\u5efa\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"user1")," \u7684\u76f8\u540c\u503c\u3002"),(0,r.kt)("p",null,"\u6587\u4ef6\u540d\uff1asrc/main.rs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'fn main() {\n    // --snip--\n\n    let user2 = User {\n        active: user1.active,\n        username: user1.username,\n        email: String::from("another@example.com"),\n        sign_in_count: user1.sign_in_count,\n    };\n}\n')),(0,r.kt)("p",null,"\u4ee3\u7801\u6e05\u5355 5-6\uff1a\u4f7f\u7528\u4e00\u4e2a\u6765\u81ea ",(0,r.kt)("inlineCode",{parentName:"p"},"user1")," \u7684\u503c\u5728\u5e38\u89c4\u60c5\u51b5\u4e0b\u521b\u5efa\u4e00\u4e2a\u65b0\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"User")," \u5b9e\u4f8b"),(0,r.kt)("p",null,"\u4f7f\u7528\u7ed3\u6784\u4f53\u66f4\u65b0\u8bed\u6cd5\uff0c\u6211\u4eec\u53ef\u4ee5\u7528\u66f4\u5c11\u7684\u4ee3\u7801\u5b9e\u73b0\u76f8\u540c\u7684\u6548\u679c\uff0c\u5982\u4ee3\u7801\u6e05\u5355 5-7 \u6240\u793a\u3002\u8bed\u6cd5 ",(0,r.kt)("inlineCode",{parentName:"p"},"..")," \u8868\u793a\u5176\u4f59\u672a\u663e\u5f0f\u8bbe\u7f6e\u7684\u5b57\u6bb5\u5e94\u8be5\u6709\u4e0e\u7ed9\u5b9a\u5b9e\u4f8b\u4e2d\u76f8\u540c\u7684\u503c\u3002"),(0,r.kt)("p",null,"\u6587\u4ef6\u540d\uff1asrc/main.rs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'fn main() {\n    // --snip--\n\n    let user2 = User {\n        email: String::from("another@example.com"),\n        ..user1\n    };\n}\n')),(0,r.kt)("p",null,"\u4ee3\u7801\u6e05\u5355 5-7\uff1a\u4f7f\u7528\u7ed3\u6784\u4f53\u66f4\u65b0\u8bed\u6cd5\u8bbe\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"User")," \u5b9e\u4f8b\u7684\u65b0 ",(0,r.kt)("inlineCode",{parentName:"p"},"email")," \u503c\uff0c\u4f46\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"user1")," \u7684\u5176\u4f59\u503c"),(0,r.kt)("p",null,"\u4ee3\u7801\u6e05\u5355 5-7 \u4e2d\u7684\u4ee3\u7801\u8fd8\u521b\u5efa\u4e86\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"user2")," \u5b9e\u4f8b\uff0c\u8be5\u5b9e\u4f8b\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"email")," \u503c\u4e0d\u540c\uff0c\u4f46\u5176 ",(0,r.kt)("inlineCode",{parentName:"p"},"username"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"active")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"sign_in_count")," \u5b57\u6bb5\u4e0e ",(0,r.kt)("inlineCode",{parentName:"p"},"user1")," \u4e2d\u7684\u503c\u76f8\u540c\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"..user1")," \u5fc5\u987b\u653e\u5728\u6700\u540e\uff0c\u4ee5\u6307\u5b9a\u4efb\u4f55\u672a\u660e\u786e\u8bbe\u7f6e\u7684\u5b57\u6bb5\u90fd\u5e94\u4ece ",(0,r.kt)("inlineCode",{parentName:"p"},"user1")," \u4e2d\u7684\u76f8\u5e94\u5b57\u6bb5\u83b7\u53d6\u5176\u503c\uff0c\u4f46\u6211\u4eec\u53ef\u4ee5\u4efb\u610f\u987a\u5e8f\u5730\u6307\u5b9a\u4efb\u610f\u6570\u91cf\u7684\u5b57\u6bb5\u7684\u503c\uff0c\u800c\u4e0d\u53d7\u7ed3\u6784\u4f53\u5b9a\u4e49\u4e2d\u5b57\u6bb5\u987a\u5e8f\u7684\u5f71\u54cd\u3002"),(0,r.kt)("p",null,"\u8bf7\u6ce8\u610f\uff0c\u7ed3\u6784\u4f53\u66f4\u65b0\u8bed\u6cd5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"=")," \u6765\u8868\u793a\u8d4b\u503c\uff1b\u8fd9\u662f\u56e0\u4e3a\u5b83\u4f1a\u79fb\u52a8\u6570\u636e\uff0c\u5c31\u50cf\u6211\u4eec\u5728",(0,r.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/book/ch04-01-what-is-ownership.html#variables-and-data-interacting-with-move"},"\u201c\u53d8\u91cf\u548c\u6570\u636e\u4ea4\u4e92\uff1a\u6240\u6709\u6743\u201d"),"\u4e00\u8282\u4e2d\u770b\u5230\u7684\u90a3\u6837\u3002\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c\u521b\u5efa ",(0,r.kt)("inlineCode",{parentName:"p"},"user2")," \u540e\uff0c\u6211\u4eec\u4e0d\u80fd\u518d\u6574\u4f53\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"user1"),"\uff0c\u56e0\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"user1")," \u4e2d ",(0,r.kt)("inlineCode",{parentName:"p"},"username")," \u5b57\u6bb5\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"String")," \u5df2\u7ecf\u88ab\u79fb\u52a8\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"user2")," \u4e2d\u3002\u5982\u679c\u6211\u4eec\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"user2")," \u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"email")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"username")," \u5b57\u6bb5\u90fd\u63d0\u4f9b\u4e86\u65b0\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"String")," \u503c\uff0c\u5e76\u4e14\u53ea\u4f7f\u7528\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"user1")," \u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"active")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"sign_in_count")," \u503c\uff0c\u90a3\u4e48\u5728\u521b\u5efa ",(0,r.kt)("inlineCode",{parentName:"p"},"user2")," \u4e4b\u540e\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"user1")," \u4ecd\u7136\u662f\u6709\u6548\u7684\u3002\u56e0\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"active")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"sign_in_count")," \u90fd\u662f\u5b9e\u73b0\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"Copy")," \u7279\u6027\u7684\u7c7b\u578b\uff0c\u6240\u4ee5\u6211\u4eec\u5728",(0,r.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/book/ch04-01-what-is-ownership.html#stack-only-data-copy"},"\u201c\u6808\u4e0a\u7684\u6570\u636e\uff1aCopy\u201d"),"\u4e00\u8282\u4e2d\u8ba8\u8bba\u8fc7\u7684\u884c\u4e3a\u4e5f\u9002\u7528\u3002"),(0,r.kt)("h3",{id:"\u4f7f\u7528\u6ca1\u6709\u5b57\u6bb5\u540d\u7684\u5143\u7ec4\u7ed3\u6784\u4f53\u521b\u5efa\u4e0d\u540c\u7684\u7c7b\u578b"},"\u4f7f\u7528\u6ca1\u6709\u5b57\u6bb5\u540d\u7684\u5143\u7ec4\u7ed3\u6784\u4f53\u521b\u5efa\u4e0d\u540c\u7684\u7c7b\u578b"),(0,r.kt)("p",null,"Rust \u8fd8\u652f\u6301\u4e0e\u5143\u7ec4\u7c7b\u4f3c\u7684\u7ed3\u6784\u4f53\uff0c\u79f0\u4e3a",(0,r.kt)("em",{parentName:"p"},"\u5143\u7ec4\u7ed3\u6784\u4f53"),"\uff08tuple structs\uff09\u3002\u5143\u7ec4\u7ed3\u6784\u4f53\u5177\u6709\u7531\u7ed3\u6784\u4f53\u540d\u79f0\u63d0\u4f9b\u7684\u9644\u52a0\u542b\u4e49\uff0c\u4f46\u4e0d\u4e0e\u5176\u5b57\u6bb5\u5173\u8054\u540d\u79f0\uff0c\u800c\u53ea\u6709\u5b57\u6bb5\u7684\u7c7b\u578b\u3002\u5f53\u4f60\u60f3\u8981\u4e3a\u6574\u4e2a\u5143\u7ec4\u8d77\u4e00\u4e2a\u540d\u5b57\uff0c\u5e76\u4f7f\u8be5\u5143\u7ec4\u6210\u4e3a\u4e0e\u5176\u4ed6\u5143\u7ec4\u4e0d\u540c\u7684\u7c7b\u578b\u65f6\uff0c\u4ee5\u53ca\u5728\u6bcf\u4e2a\u5b57\u6bb5\u90fd\u50cf\u5e38\u89c4\u7ed3\u6784\u4f53\u4e2d\u547d\u540d\u5c06\u4f1a\u5f88\u5197\u957f\u6216\u5197\u4f59\u65f6\uff0c\u5143\u7ec4\u7ed3\u6784\u4f53\u662f\u6709\u7528\u7684\u3002"),(0,r.kt)("p",null,"\u8981\u5b9a\u4e49\u5143\u7ec4\u7ed3\u6784\u4f53\uff0c\u9996\u5148\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"struct")," \u5173\u952e\u5b57\u548c\u7ed3\u6784\u4f53\u540d\u79f0\uff0c\u7136\u540e\u8ddf\u7740\u5143\u7ec4\u4e2d\u7684\u7c7b\u578b\u3002\u4f8b\u5982\uff0c\u8fd9\u91cc\u6211\u4eec\u5b9a\u4e49\u5e76\u4f7f\u7528\u4e86\u4e24\u4e2a\u5143\u7ec4\u7ed3\u6784\u4f53 ",(0,r.kt)("inlineCode",{parentName:"p"},"Color")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"Point"),"\uff1a"),(0,r.kt)("p",null,"\u6587\u4ef6\u540d\uff1asrc/main.rs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"struct Color(i32, i32, i32);\nstruct Point(i32, i32, i32);\n\nfn main() {\n    let black = Color(0, 0, 0);\n    let origin = Point(0, 0, 0);\n}\n")),(0,r.kt)("p",null,"\u8bf7\u6ce8\u610f\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"black")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"origin")," \u7684\u503c\u662f\u4e0d\u540c\u7684\u7c7b\u578b\uff0c\u56e0\u4e3a\u5b83\u4eec\u662f\u4e0d\u540c\u5143\u7ec4\u7ed3\u6784\u4f53\u7684\u5b9e\u4f8b\u3002\u4f60\u5b9a\u4e49\u7684\u6bcf\u4e2a\u7ed3\u6784\u4f53\u90fd\u662f\u5176\u81ea\u5df1\u7684\u7c7b\u578b\uff0c\u5c3d\u7ba1\u7ed3\u6784\u4f53\u5185\u90e8\u7684\u5b57\u6bb5\u53ef\u80fd\u5177\u6709\u76f8\u540c\u7684\u7c7b\u578b\u3002\u4f8b\u5982\uff0c\u63a5\u53d7\u7c7b\u578b\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"Color")," \u7684\u53c2\u6570\u7684\u51fd\u6570\u4e0d\u80fd\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"Point")," \u4f5c\u4e3a\u53c2\u6570\u4f20\u9012\uff0c\u5373\u4f7f\u4e24\u8005\u90fd\u7531\u4e09\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"i32")," \u503c\u7ec4\u6210\u3002\u9664\u6b64\u4e4b\u5916\uff0c\u5143\u7ec4\u7ed3\u6784\u4f53\u5b9e\u4f8b\u4e0e\u5143\u7ec4\u7c7b\u4f3c\uff0c\u53ef\u4ee5\u5c06\u5b83\u4eec\u89e3\u6784\u4e3a\u5176\u5404\u4e2a\u6210\u5458\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},".")," \u540e\u8ddf\u7d22\u5f15\u6765\u8bbf\u95ee\u5355\u4e2a\u503c\u3002"),(0,r.kt)("h3",{id:"\u6ca1\u6709\u4efb\u4f55\u5b57\u6bb5\u7684\u7c7b\u5355\u5143\u7ed3\u6784\u4f53"},"\u6ca1\u6709\u4efb\u4f55\u5b57\u6bb5\u7684\u7c7b\u5355\u5143\u7ed3\u6784\u4f53"),(0,r.kt)("p",null,"\u4f60\u8fd8\u53ef\u4ee5\u5b9a\u4e49\u4e0d\u5177\u6709\u4efb\u4f55\u5b57\u6bb5\u7684\u7ed3\u6784\u4f53\uff01\u8fd9\u4e9b\u79f0\u4e3a",(0,r.kt)("em",{parentName:"p"},"\u7c7b\u5355\u5143\u7ed3\u6784\u4f53"),"\uff08unit-like structs\uff09\uff0c\u56e0\u4e3a\u5b83\u4eec\u7684\u884c\u4e3a\u4e0e\u6211\u4eec\u5728",(0,r.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/book/ch03-02-data-types.html#the-tuple-type"},"\u201c\u5143\u7ec4\u7c7b\u578b\u201d"),"\u4e00\u8282\u4e2d\u63d0\u5230\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"()")," \u5355\u5143\u7c7b\u578b\u76f8\u4f3c\u3002\u7c7b\u5355\u5143\u7ed3\u6784\u4f53\u5728\u4f60\u9700\u8981\u5728\u67d0\u4e9b\u7c7b\u578b\u4e0a\u5b9e\u73b0\u7279\u8d28\uff0c\u4f46\u6ca1\u6709\u4efb\u4f55\u4f60\u60f3\u5728\u7c7b\u578b\u672c\u8eab\u4e2d\u5b58\u50a8\u7684\u6570\u636e\u65f6\u975e\u5e38\u6709\u7528\u3002\u6211\u4eec\u5c06\u5728\u7b2c 10 \u7ae0\u8ba8\u8bba\u7279\u8d28\u3002\u4e0b\u9762\u662f\u4e00\u4e2a\u58f0\u660e\u548c\u5b9e\u4f8b\u5316\u540d\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"AlwaysEqual")," \u7684\u7c7b\u5355\u5143\u7ed3\u6784\u4f53\u7684\u793a\u4f8b\uff1a"),(0,r.kt)("p",null,"\u6587\u4ef6\u540d\uff1asrc/main.rs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"struct AlwaysEqual;\n\nfn main() {\n    let subject = AlwaysEqual;\n}\n")),(0,r.kt)("p",null,"\u4e3a\u4e86\u5b9a\u4e49 ",(0,r.kt)("inlineCode",{parentName:"p"},"AlwaysEqual"),"\uff0c\u6211\u4eec\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"struct")," \u5173\u952e\u5b57\uff0c\u52a0\u4e0a\u6211\u4eec\u60f3\u8981\u7684\u540d\u79f0\uff0c\u7136\u540e\u662f\u4e00\u4e2a\u5206\u53f7\u3002\u4e0d\u9700\u8981\u5927\u62ec\u53f7\u6216\u62ec\u53f7\uff01\u7136\u540e\u6211\u4eec\u53ef\u4ee5\u4ee5\u7c7b\u4f3c\u7684\u65b9\u5f0f\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"subject")," \u53d8\u91cf\u4e2d\u83b7\u5f97 ",(0,r.kt)("inlineCode",{parentName:"p"},"AlwaysEqual")," \u7684\u4e00\u4e2a\u5b9e\u4f8b\uff1a\u4f7f\u7528\u6211\u4eec\u5b9a\u4e49\u7684\u540d\u79f0\uff0c\u4e0d\u9700\u8981\u5927\u62ec\u53f7\u6216\u62ec\u53f7\u3002\u5047\u8bbe\u4ee5\u540e\u6211\u4eec\u5c06\u4e3a\u6b64\u7c7b\u578b\u5b9e\u73b0\u4e00\u79cd\u884c\u4e3a\uff0c\u4f7f\u5f97 ",(0,r.kt)("inlineCode",{parentName:"p"},"AlwaysEqual")," \u7684\u6bcf\u4e2a\u5b9e\u4f8b\u59cb\u7ec8\u7b49\u4e8e\u4efb\u4f55\u5176\u4ed6\u7c7b\u578b\u7684\u5b9e\u4f8b\uff0c\u53ef\u80fd\u662f\u4e3a\u4e86\u6d4b\u8bd5\u76ee\u7684\u800c\u63d0\u4f9b\u5df2\u77e5\u7684\u7ed3\u679c\u3002\u6211\u4eec\u4e0d\u9700\u8981\u4efb\u4f55\u6570\u636e\u6765\u5b9e\u73b0\u8fd9\u4e2a\u884c\u4e3a\uff01\u4f60\u5c06\u5728\u7b2c 10 \u7ae0\u4e2d\u770b\u5230\u5982\u4f55\u5728\u4efb\u4f55\u7c7b\u578b\u4e0a\u5b9a\u4e49"),(0,r.kt)("p",null,"\u7279\u8d28\uff0c\u5e76\u5728\u5176\u4e2d\u5b9e\u73b0\u5b83\u4eec\uff0c\u5305\u62ec\u7c7b\u5355\u5143\u7ed3\u6784\u4f53\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("h3",{parentName:"blockquote",id:"\u7ed3\u6784\u4f53\u6570\u636e\u7684\u6240\u6709\u6743"},"\u7ed3\u6784\u4f53\u6570\u636e\u7684\u6240\u6709\u6743"),(0,r.kt)("p",{parentName:"blockquote"},"\u5728\u4ee3\u7801\u6e05\u5355 5-1 \u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"User")," \u7ed3\u6784\u4f53\u5b9a\u4e49\u4e2d\uff0c\u6211\u4eec\u4f7f\u7528\u4e86\u62e5\u6709\u6240\u6709\u6743\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"String")," \u7c7b\u578b\uff0c\u800c\u4e0d\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"&str")," \u5b57\u7b26\u4e32\u5207\u7247\u7c7b\u578b\u3002\u8fd9\u662f\u4e00\u4e2a\u6709\u610f\u4e3a\u4e4b\u7684\u9009\u62e9\uff0c\u56e0\u4e3a\u6211\u4eec\u5e0c\u671b\u8be5\u7ed3\u6784\u4f53\u7684\u6bcf\u4e2a\u5b9e\u4f8b\u90fd\u62e5\u6709\u5176\u6240\u6709\u7684\u6570\u636e\uff0c\u5e76\u4e14\u8be5\u6570\u636e\u5728\u6574\u4e2a\u7ed3\u6784\u4f53\u6709\u6548\u65f6\u90fd\u6709\u6548\u3002"),(0,r.kt)("p",{parentName:"blockquote"},"\u5f53\u7136\uff0c\u7ed3\u6784\u4f53\u4e5f\u53ef\u4ee5\u5b58\u50a8\u5bf9\u5176\u4ed6\u6570\u636e\u7684\u5f15\u7528\uff0c\u4f46\u8981\u8fd9\u6837\u505a\uff0c\u6211\u4eec\u9700\u8981\u4f7f\u7528",(0,r.kt)("em",{parentName:"p"},"\u751f\u547d\u5468\u671f"),"\uff0c\u8fd9\u662f Rust \u4e2d\u7684\u4e00\u4e2a\u7279\u6027\uff0c\u5728\u7b2c 10 \u7ae0\u4e2d\u8ba8\u8bba\u3002\u751f\u547d\u5468\u671f\u786e\u4fdd\u7ed3\u6784\u4f53\u5f15\u7528\u7684\u6570\u636e\u5728\u7ed3\u6784\u4f53\u6709\u6548\u65f6\u6709\u6548\u3002\u6bd4\u65b9\u8bf4\uff0c\u5982\u679c\u4f60\u5c1d\u8bd5\u5728\u7ed3\u6784\u4f53\u4e2d\u5b58\u50a8\u5f15\u7528\u800c\u4e0d\u6307\u5b9a\u751f\u547d\u5468\u671f\uff0c\u4f8b\u5982\u4e0b\u9762\u7684\u4ee3\u7801\uff0c\u8fd9\u662f\u884c\u4e0d\u901a\u7684\uff1a"),(0,r.kt)("p",{parentName:"blockquote"},"\u6587\u4ef6\u540d\uff1asrc/main.rs"),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'struct User {\n active: bool,\n username: &str,\n email: &str,\n sign_in_count: u64,\n}\n\nfn main() {\n let user1 = User {\n     active: true,\n     username: "someusername123",\n     email: "someone@example.com",\n     sign_in_count: 1,\n };\n}\n')),(0,r.kt)("p",{parentName:"blockquote"},"\u7f16\u8bd1\u5668\u4f1a\u62a5\u9519\uff0c\u8868\u793a\u9700\u8981\u751f\u547d\u5468\u671f\u8bf4\u660e\u7b26\uff1a"),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-console"},"$ cargo run\nCompiling structs v0.1.0 (file:///projects/structs)\nerror[E0106]: missing lifetime specifier\n--\x3e src/main.rs:3:15\n|\n3 |     username: &str,\n|               ^ expected named lifetime parameter\n|\nhelp: consider introducing a named lifetime parameter\n|\n1 ~ struct User<'a> {\n2 |     active: bool,\n3 ~     username: &'a str,\n|\n\nerror[E0106]: missing lifetime specifier\n--\x3e src/main.rs:4:12\n|\n4 |     email: &str,\n|            ^ expected named lifetime parameter\n|\nhelp: consider introducing a named lifetime parameter\n|\n1 ~ struct User<'a> {\n2 |     active: bool,\n3 |     username: &str,\n4 ~     email: &'a str,\n|\n\nFor more information about this error, try `rustc --explain E0106`.\nerror: could not compile `structs` due to 2 previous errors\n")),(0,r.kt)("p",{parentName:"blockquote"},"\u5728\u7b2c 10 \u7ae0\u4e2d\uff0c\u6211\u4eec\u5c06\u8ba8\u8bba\u5982\u4f55\u4fee\u590d\u8fd9\u4e9b\u9519\u8bef\uff0c\u4ee5\u4fbf\u5728\u7ed3\u6784\u4f53\u4e2d\u5b58\u50a8\u5f15\u7528\uff0c\u4f46\u73b0\u5728\u6211\u4eec\u5c06\u4f7f\u7528\u50cf ",(0,r.kt)("inlineCode",{parentName:"p"},"String")," \u8fd9\u6837\u7684\u62e5\u6709\u6240\u6709\u6743\u7684\u7c7b\u578b\u6765\u4fee\u590d\u8fd9\u4e9b\u9519\u8bef\uff0c\u800c\u4e0d\u4f7f\u7528\u50cf ",(0,r.kt)("inlineCode",{parentName:"p"},"&str")," \u8fd9\u6837\u7684\u5f15\u7528\u7c7b\u578b\u3002")))}c.isMDXComponent=!0}}]);