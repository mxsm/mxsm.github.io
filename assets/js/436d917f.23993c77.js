"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[9975],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=s(n),d=r,h=c["".concat(p,".").concat(d)]||c[d]||u[d]||l;return n?a.createElement(h,o(o({ref:t},m),{},{components:n})):a.createElement(h,o({ref:t},m))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5777:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const l={title:"\u5728\u54c8\u5e0c\u6620\u5c04\u4e2d\u5b58\u50a8\u5177\u6709\u5173\u8054\u503c\u7684\u952e",sidebar_label:"8.3. \u5728\u54c8\u5e0c\u6620\u5c04\u4e2d\u5b58\u50a8\u5177\u6709\u5173\u8054\u503c\u7684\u952e",linkTitle:"\u5728\u54c8\u5e0c\u6620\u5c04\u4e2d\u5b58\u50a8\u5177\u6709\u5173\u8054\u503c\u7684\u952e",weight:202308051736,description:"\u5728\u54c8\u5e0c\u6620\u5c04\u4e2d\u5b58\u50a8\u5177\u6709\u5173\u8054\u503c\u7684\u952e"},o=void 0,i={unversionedId:"rust/official-doc/common-collections/hashmap",id:"rust/official-doc/common-collections/hashmap",title:"\u5728\u54c8\u5e0c\u6620\u5c04\u4e2d\u5b58\u50a8\u5177\u6709\u5173\u8054\u503c\u7684\u952e",description:"\u5728\u54c8\u5e0c\u6620\u5c04\u4e2d\u5b58\u50a8\u5177\u6709\u5173\u8054\u503c\u7684\u952e",source:"@site/docs/rust/official-doc/common-collections/03-hashmap.md",sourceDirName:"rust/official-doc/common-collections",slug:"/rust/official-doc/common-collections/hashmap",permalink:"/docs/rust/official-doc/common-collections/hashmap",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/rust/official-doc/common-collections/03-hashmap.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1691846266,formattedLastUpdatedAt:"Aug 12, 2023",sidebarPosition:3,frontMatter:{title:"\u5728\u54c8\u5e0c\u6620\u5c04\u4e2d\u5b58\u50a8\u5177\u6709\u5173\u8054\u503c\u7684\u952e",sidebar_label:"8.3. \u5728\u54c8\u5e0c\u6620\u5c04\u4e2d\u5b58\u50a8\u5177\u6709\u5173\u8054\u503c\u7684\u952e",linkTitle:"\u5728\u54c8\u5e0c\u6620\u5c04\u4e2d\u5b58\u50a8\u5177\u6709\u5173\u8054\u503c\u7684\u952e",weight:202308051736,description:"\u5728\u54c8\u5e0c\u6620\u5c04\u4e2d\u5b58\u50a8\u5177\u6709\u5173\u8054\u503c\u7684\u952e"},sidebar:"rustDoc",previous:{title:"8.2. \u4f7f\u7528\u5b57\u7b26\u4e32\u5b58\u50a8UTF-8\u7f16\u7801\u7684\u6587\u672c",permalink:"/docs/rust/official-doc/common-collections/string"}},p={},s=[{value:"\u5728\u54c8\u5e0c\u6620\u5c04\u4e2d\u5b58\u50a8\u5177\u6709\u5173\u8054\u503c\u7684\u952e",id:"\u5728\u54c8\u5e0c\u6620\u5c04\u4e2d\u5b58\u50a8\u5177\u6709\u5173\u8054\u503c\u7684\u952e",level:2},{value:"\u521b\u5efa\u65b0\u7684\u54c8\u5e0c\u6620\u5c04",id:"\u521b\u5efa\u65b0\u7684\u54c8\u5e0c\u6620\u5c04",level:3},{value:"\u8bbf\u95ee\u54c8\u5e0c\u6620\u5c04\u4e2d\u7684\u503c",id:"\u8bbf\u95ee\u54c8\u5e0c\u6620\u5c04\u4e2d\u7684\u503c",level:3},{value:"\u54c8\u5e0c\u6620\u5c04\u4e0e\u6240\u6709\u6743",id:"\u54c8\u5e0c\u6620\u5c04\u4e0e\u6240\u6709\u6743",level:3},{value:"\u66f4\u65b0\u54c8\u5e0c\u6620\u5c04",id:"\u66f4\u65b0\u54c8\u5e0c\u6620\u5c04",level:3},{value:"\u8986\u76d6\u4e00\u4e2a\u503c",id:"\u8986\u76d6\u4e00\u4e2a\u503c",level:4},{value:"\u4ec5\u5728\u952e\u4e0d\u5b58\u5728\u65f6\u6dfb\u52a0\u952e\u548c\u503c",id:"\u4ec5\u5728\u952e\u4e0d\u5b58\u5728\u65f6\u6dfb\u52a0\u952e\u548c\u503c",level:4},{value:"\u6839\u636e\u65e7\u503c\u66f4\u65b0\u503c",id:"\u6839\u636e\u65e7\u503c\u66f4\u65b0\u503c",level:4},{value:"\u54c8\u5e0c\u51fd\u6570",id:"\u54c8\u5e0c\u51fd\u6570",level:3},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2}],m={toc:s},c="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u5728\u54c8\u5e0c\u6620\u5c04\u4e2d\u5b58\u50a8\u5177\u6709\u5173\u8054\u503c\u7684\u952e"},(0,r.kt)("a",{parentName:"h2",href:"https://doc.rust-lang.org/book/ch08-03-hash-maps.html#storing-keys-with-associated-values-in-hash-maps"},"\u5728\u54c8\u5e0c\u6620\u5c04\u4e2d\u5b58\u50a8\u5177\u6709\u5173\u8054\u503c\u7684\u952e")),(0,r.kt)("p",null,"\u6211\u4eec\u8981\u8ba8\u8bba\u7684\u6700\u540e\u4e00\u79cd\u5e38\u89c1\u96c6\u5408\u662f ",(0,r.kt)("em",{parentName:"p"},"\u54c8\u5e0c\u6620\u5c04"),"\uff08hash map\uff09\u3002\u7c7b\u578b ",(0,r.kt)("inlineCode",{parentName:"p"},"HashMap<K, V>")," \u7528\u4e8e\u5b58\u50a8\u952e\u7684\u7c7b\u578b ",(0,r.kt)("inlineCode",{parentName:"p"},"K")," \u5230\u503c\u7684\u7c7b\u578b ",(0,r.kt)("inlineCode",{parentName:"p"},"V")," \u7684\u6620\u5c04\uff0c\u4f7f\u7528\u4e00\u4e2a ",(0,r.kt)("em",{parentName:"p"},"\u54c8\u5e0c\u51fd\u6570"),"\uff08hashing function\uff09\u6765\u51b3\u5b9a\u5982\u4f55\u5c06\u8fd9\u4e9b\u952e\u548c\u503c\u5b58\u653e\u5230\u5185\u5b58\u4e2d\u3002\u8bb8\u591a\u7f16\u7a0b\u8bed\u8a00\u652f\u6301\u8fd9\u79cd\u6570\u636e\u7ed3\u6784\uff0c\u4f46\u5b83\u4eec\u901a\u5e38\u4f7f\u7528\u4e0d\u540c\u7684\u540d\u79f0\uff0c\u5982 hash\u3001map\u3001object\u3001hash table\u3001dictionary \u6216 associative array \u7b49\u3002"),(0,r.kt)("p",null,"\u54c8\u5e0c\u6620\u5c04\u5728\u60a8\u60f3\u901a\u8fc7\u952e\u6765\u67e5\u627e\u6570\u636e\u800c\u4e0d\u662f\u4f7f\u7528\u7d22\u5f15\uff08\u5982\u5411\u91cf\uff09\u65f6\u975e\u5e38\u6709\u7528\u3002\u4f8b\u5982\uff0c\u5728\u6e38\u620f\u4e2d\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528\u54c8\u5e0c\u6620\u5c04\u6765\u8ddf\u8e2a\u6bcf\u4e2a\u56e2\u961f\u7684\u5f97\u5206\uff0c\u5176\u4e2d\u6bcf\u4e2a\u952e\u662f\u56e2\u961f\u7684\u540d\u79f0\uff0c\u503c\u662f\u56e2\u961f\u7684\u5f97\u5206\u3002\u7ed9\u5b9a\u4e00\u4e2a\u56e2\u961f\u7684\u540d\u79f0\uff0c\u60a8\u53ef\u4ee5\u83b7\u53d6\u5176\u5f97\u5206\u3002"),(0,r.kt)("p",null,"\u672c\u8282\u4e2d\uff0c\u6211\u4eec\u5c06\u4ecb\u7ecd\u54c8\u5e0c\u6620\u5c04\u7684\u57fa\u672c API\uff0c\u4f46\u6807\u51c6\u5e93\u4e2d ",(0,r.kt)("inlineCode",{parentName:"p"},"HashMap<K, V>")," \u4e0a\u5b9a\u4e49\u7684\u8bb8\u591a\u5176\u4ed6\u65b9\u6cd5\u4e5f\u975e\u5e38\u6709\u7528\u3002\u548c\u5f80\u5e38\u4e00\u6837\uff0c\u67e5\u9605\u6807\u51c6\u5e93\u6587\u6863\u4ee5\u83b7\u53d6\u66f4\u591a\u4fe1\u606f\u3002"),(0,r.kt)("h3",{id:"\u521b\u5efa\u65b0\u7684\u54c8\u5e0c\u6620\u5c04"},(0,r.kt)("a",{parentName:"h3",href:"https://doc.rust-lang.org/book/ch08-03-hash-maps.html#creating-a-new-hash-map"},"\u521b\u5efa\u65b0\u7684\u54c8\u5e0c\u6620\u5c04")),(0,r.kt)("p",null,"\u521b\u5efa\u4e00\u4e2a\u7a7a\u7684\u54c8\u5e0c\u6620\u5c04\u7684\u4e00\u79cd\u65b9\u6cd5\u662f\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"new")," \u5e76\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"insert")," \u6dfb\u52a0\u5143\u7d20\u3002\u5728\u793a\u4f8b 8-20 \u4e2d\uff0c\u6211\u4eec\u8ddf\u8e2a\u4e24\u4e2a\u56e2\u961f\uff08\u540d\u79f0\u5206\u522b\u4e3a ",(0,r.kt)("em",{parentName:"p"},"Blue")," \u548c ",(0,r.kt)("em",{parentName:"p"},"Yellow"),"\uff09\u7684\u5f97\u5206\u3002Blue \u961f\u7684\u5f97\u5206\u662f 10 \u5206\uff0cYellow \u961f\u7684\u5f97\u5206\u662f 50 \u5206\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'    use std::collections::HashMap;\n\n    let mut scores = HashMap::new();\n\n    scores.insert(String::from("Blue"), 10);\n    scores.insert(String::from("Yellow"), 50);\n')),(0,r.kt)("p",null,"\u793a\u4f8b 8-20\uff1a\u521b\u5efa\u65b0\u7684\u54c8\u5e0c\u6620\u5c04\u5e76\u63d2\u5165\u4e00\u4e9b\u952e\u548c\u503c"),(0,r.kt)("p",null,"\u8bf7\u6ce8\u610f\uff0c\u6211\u4eec\u9700\u8981\u9996\u5148\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"use")," \u8bed\u53e5\u4ece\u6807\u51c6\u5e93\u7684 collections \u90e8\u5206\u5f15\u5165 ",(0,r.kt)("inlineCode",{parentName:"p"},"HashMap"),"\u3002\u5728\u4e09\u79cd\u5e38\u89c1\u7684\u96c6\u5408\u7c7b\u578b\u4e2d\uff0c\u54c8\u5e0c\u6620\u5c04\u662f\u6700\u4e0d\u5e38\u7528\u7684\uff0c\u56e0\u6b64\u5b83\u6ca1\u6709\u5728 prelude \u4e2d\u81ea\u52a8\u5f15\u5165\u4f5c\u7528\u57df\u7684\u7279\u6027\u4e2d\u5305\u542b\u3002\u6807\u51c6\u5e93\u5bf9\u54c8\u5e0c\u6620\u5c04\u7684\u652f\u6301\u4e5f\u8f83\u5c11\uff0c\u4f8b\u5982\u6ca1\u6709\u5185\u5efa\u7684\u5b8f\u53ef\u4ee5\u7528\u4e8e\u6784\u5efa\u54c8\u5e0c\u6620\u5c04\u3002"),(0,r.kt)("p",null,"\u548c\u5411\u91cf\u4e00\u6837\uff0c\u54c8\u5e0c\u6620\u5c04\u5c06\u6570\u636e\u5b58\u50a8\u5728\u5806\u4e0a\u3002\u6b64 ",(0,r.kt)("inlineCode",{parentName:"p"},"HashMap")," \u7684\u952e\u7c7b\u578b\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"String"),"\uff0c\u503c\u7c7b\u578b\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"i32"),"\u3002\u4e0e\u5411\u91cf\u4e00\u6837\uff0c\u54c8\u5e0c\u6620\u5c04\u662f\u540c\u8d28\u7684\uff1a\u6240\u6709\u952e\u7684\u7c7b\u578b\u5fc5\u987b\u4e0e\u5f7c\u6b64\u76f8\u540c\uff0c\u6240\u6709\u503c\u7684\u7c7b\u578b\u4e5f\u5fc5\u987b\u4e0e\u5f7c\u6b64\u76f8\u540c\u3002"),(0,r.kt)("h3",{id:"\u8bbf\u95ee\u54c8\u5e0c\u6620\u5c04\u4e2d\u7684\u503c"},(0,r.kt)("a",{parentName:"h3",href:"https://doc.rust-lang.org/book/ch08-03-hash-maps.html#accessing-values-in-a-hash-map"},"\u8bbf\u95ee\u54c8\u5e0c\u6620\u5c04\u4e2d\u7684\u503c")),(0,r.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u5c06\u952e\u4f20\u9012\u7ed9 ",(0,r.kt)("inlineCode",{parentName:"p"},"get")," \u65b9\u6cd5\u6765\u4ece\u54c8\u5e0c\u6620\u5c04\u4e2d\u83b7\u53d6\u4e00\u4e2a\u503c\uff0c\u5982\u793a\u4f8b 8-21 \u6240\u793a\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'    use std::collections::HashMap;\n\n    let mut scores = HashMap::new();\n\n    scores.insert(String::from("Blue"), 10);\n    scores.insert(String::from("Yellow"), 50);\n\n    let team_name = String::from("Blue");\n    let score = scores.get(&team_name).copied().unwrap_or(0);\n')),(0,r.kt)("p",null,"\u793a\u4f8b 8-21\uff1a\u8bbf\u95ee\u5b58\u50a8\u5728\u54c8\u5e0c\u6620\u5c04\u4e2d\u7684 Blue \u961f\u5f97\u5206"),(0,r.kt)("p",null,"\u5728\u8fd9\u91cc\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"score")," \u5c06\u5f97\u5230\u4e0e Blue \u961f\u5173\u8054\u7684\u503c\uff0c\u7ed3\u679c\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"10"),"\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"get")," \u65b9\u6cd5\u8fd4\u56de\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"Option<&V>"),"\uff1b\u5982\u679c\u54c8\u5e0c\u6620\u5c04\u4e2d\u6ca1\u6709\u8be5\u952e\u7684\u503c\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"get")," \u5c06\u8fd4\u56de ",(0,r.kt)("inlineCode",{parentName:"p"},"None"),"\u3002\u8fd9\u4e2a\u7a0b\u5e8f\u901a\u8fc7\u8c03\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"copied")," \u65b9\u6cd5\u6765\u5904\u7406 ",(0,r.kt)("inlineCode",{parentName:"p"},"Option"),"\uff0c\u4ee5\u83b7\u5f97 ",(0,r.kt)("inlineCode",{parentName:"p"},"Option<i32>")," \u800c\u4e0d\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"Option<&i32>"),"\uff0c\u7136\u540e\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"unwrap_or")," \u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"score")," \u8bbe\u7f6e\u4e3a\u96f6\uff0c\u5982\u679c ",(0,r.kt)("inlineCode",{parentName:"p"},"scores")," \u6ca1\u6709\u8be5\u952e\u7684\u6761\u76ee\u3002"),(0,r.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u4ee5\u7c7b\u4f3c\u5411\u91cf\u7684\u65b9\u5f0f\u904d\u5386\u54c8\u5e0c\u6620\u5c04\u4e2d\u7684\u6bcf\u4e2a\u952e\u503c\u5bf9\uff0c\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"for")," \u5faa\u73af\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'    use std::collections::HashMap;\n\n    let mut scores = HashMap::new();\n\n    scores.insert(String::from("Blue"), 10);\n    scores.insert(String::from("Yellow"), 50);\n\n    for (key, value) in &scores {\n        println!("{key}: {value}");\n    }\n')),(0,r.kt)("p",null,"\u6b64\u4ee3\u7801\u5c06\u6309\u4efb\u610f\u987a\u5e8f\u6253\u5370\u6bcf\u4e00\u5bf9\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"Yellow: 50\nBlue: 10\n")),(0,r.kt)("h3",{id:"\u54c8\u5e0c\u6620\u5c04\u4e0e\u6240\u6709\u6743"},(0,r.kt)("a",{parentName:"h3",href:"https://doc.rust-lang.org/book/ch08-03-hash-maps.html#hash-maps-and-ownership"},"\u54c8\u5e0c\u6620\u5c04\u4e0e\u6240\u6709\u6743")),(0,r.kt)("p",null,"\u5bf9\u4e8e\u5b9e\u73b0\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"Copy")," trait\uff08\u4f8b\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},"i32"),"\uff09\u7684\u7c7b\u578b\uff0c\u503c\u5c06\u88ab\u590d\u5236\u5230\u54c8\u5e0c\u6620\u5c04\u4e2d\u3002\u5bf9\u4e8e\u62e5\u6709\u7684\u503c\uff08\u4f8b\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},"String"),"\uff09\uff0c\u503c\u5c06\u88ab\u79fb\u52a8\uff0c\u54c8\u5e0c\u6620\u5c04\u5c06\u6210\u4e3a\u8fd9\u4e9b\u503c\u7684\u6240\u6709\u8005\uff0c\u5982\u793a\u4f8b 8-22 \u6240\u793a\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'    use std::collections::HashMap;\n\n    let field_name = String::from("Favorite color");\n    let field_value = String::from("Blue");\n\n    let mut map = HashMap::new();\n    map.insert(field_name, field_value);\n    // \u5728\u6b64\u5904\uff0cfield_name \u548c field_value \u5df2\u65e0\u6548\uff0c\u5c1d\u8bd5\u4f7f\u7528\u5b83\u4eec\u4f1a\u4ea7\u751f\u7f16\u8bd1\u9519\u8bef\uff01\n')),(0,r.kt)("p",null,"\u793a\u4f8b 8-22\uff1a\u5c55\u793a\u4e00\u65e6\u88ab\u63d2\u5165\u5230\u54c8\u5e0c\u6620\u5c04\u4e2d\uff0c\u952e\u548c\u503c\u5c31\u7531\u54c8\u5e0c\u6620\u5c04\u62e5\u6709"),(0,r.kt)("p",null,"\u5728\u5c06\u5176\u79fb\u52a8\u5230\u54c8\u5e0c\u6620\u5c04\u4e2d\u540e\uff0c\u6211\u4eec\u4e0d\u80fd\u518d\u4f7f\u7528\u53d8\u91cf ",(0,r.kt)("inlineCode",{parentName:"p"},"field_name")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"field_value"),"\u3002\u5982\u679c\u6211\u4eec\u5c1d\u8bd5\u4f7f\u7528\u5b83\u4eec\uff0c\u4f1a\u4ea7\u751f\u7f16\u8bd1\u9519\u8bef\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u6211\u4eec\u5c06\u5bf9\u503c\u7684\u5f15\u7528\u63d2\u5165\u5230\u54c8"),(0,r.kt)("p",null,"\u5e0c\u6620\u5c04\u4e2d\uff0c\u503c\u5c31\u4e0d\u4f1a\u88ab\u79fb\u52a8\u5230\u54c8\u5e0c\u6620\u5c04\u4e2d\u3002\u5f15\u7528\u6240\u6307\u5411\u7684\u503c\u5fc5\u987b\u5728\u54c8\u5e0c\u6620\u5c04\u6709\u6548\u7684\u65f6\u95f4\u5185\u4fdd\u6301\u6709\u6548\u3002\u6211\u4eec\u5c06\u5728\u7b2c 10 \u7ae0\u7684 ",(0,r.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/book/ch10-03-lifetime-syntax.html#validating-references-with-lifetimes"},"\u201c\u4f7f\u7528\u751f\u547d\u5468\u671f\u9a8c\u8bc1\u5f15\u7528\u201d")," \u90e8\u5206\u66f4\u8be6\u7ec6\u5730\u8ba8\u8bba\u8fd9\u4e9b\u95ee\u9898\u3002"),(0,r.kt)("h3",{id:"\u66f4\u65b0\u54c8\u5e0c\u6620\u5c04"},(0,r.kt)("a",{parentName:"h3",href:"https://doc.rust-lang.org/book/ch08-03-hash-maps.html#updating-a-hash-map"},"\u66f4\u65b0\u54c8\u5e0c\u6620\u5c04")),(0,r.kt)("p",null,"\u5c3d\u7ba1\u952e\u503c\u5bf9\u7684\u6570\u91cf\u662f\u53ef\u589e\u957f\u7684\uff0c\u4f46\u6bcf\u4e2a\u552f\u4e00\u7684\u952e\u53ea\u80fd\u6709\u4e00\u4e2a\u4e0e\u4e4b\u5173\u8054\u7684\u503c\uff08\u4f46\u53cd\u4e4b\u4e0d\u6210\u7acb\uff1a\u4f8b\u5982\uff0cBlue \u961f\u548c Yellow \u961f\u90fd\u53ef\u4ee5\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"scores")," \u54c8\u5e0c\u6620\u5c04\u4e2d\u5b58\u50a8\u503c 10\uff09\u3002"),(0,r.kt)("p",null,"\u5f53\u60a8\u60f3\u8981\u66f4\u6539\u54c8\u5e0c\u6620\u5c04\u4e2d\u7684\u6570\u636e\u65f6\uff0c\u60a8\u5fc5\u987b\u51b3\u5b9a\u5982\u4f55\u5904\u7406\u952e\u5df2\u7ecf\u6709\u503c\u7684\u60c5\u51b5\u3002\u60a8\u53ef\u4ee5\u7528\u65b0\u503c\u66ff\u6362\u65e7\u503c\uff0c\u5b8c\u5168\u5ffd\u7565\u65e7\u503c\u3002\u60a8\u53ef\u4ee5\u4fdd\u7559\u65e7\u503c\u5e76\u5ffd\u7565\u65b0\u503c\uff0c\u53ea\u6709\u5728\u952e ",(0,r.kt)("em",{parentName:"p"},"\u6ca1\u6709")," \u503c\u65f6\u624d\u6dfb\u52a0\u65b0\u503c\u3002\u6216\u8005\u60a8\u53ef\u4ee5\u5c06\u65e7\u503c\u4e0e\u65b0\u503c\u5408\u5e76\u3002\u8ba9\u6211\u4eec\u770b\u770b\u5982\u4f55\u505a\u5230\u8fd9\u4e9b\uff01"),(0,r.kt)("h4",{id:"\u8986\u76d6\u4e00\u4e2a\u503c"},(0,r.kt)("a",{parentName:"h4",href:"https://doc.rust-lang.org/book/ch08-03-hash-maps.html#overwriting-a-value"},"\u8986\u76d6\u4e00\u4e2a\u503c")),(0,r.kt)("p",null,"\u5982\u679c\u6211\u4eec\u5148\u5411\u54c8\u5e0c\u6620\u5c04\u63d2\u5165\u4e00\u4e2a\u952e\u548c\u4e00\u4e2a\u503c\uff0c\u7136\u540e\u518d\u63d2\u5165\u76f8\u540c\u7684\u952e\u4f46\u4e0d\u540c\u7684\u503c\uff0c\u90a3\u4e48\u4e0e\u8be5\u952e\u5173\u8054\u7684\u503c\u5c06\u88ab\u66ff\u6362\u3002\u5373\u4f7f\u4ee3\u7801\u5728\u793a\u4f8b 8-23 \u4e2d\u8c03\u7528\u4e86\u4e24\u6b21 ",(0,r.kt)("inlineCode",{parentName:"p"},"insert"),"\uff0c\u54c8\u5e0c\u6620\u5c04\u4e2d\u4ecd\u7136\u53ea\u4f1a\u5305\u542b\u4e00\u4e2a\u952e\u503c\u5bf9\uff0c\u56e0\u4e3a\u6211\u4eec\u4e24\u6b21\u90fd\u4e3a Blue \u961f\u7684\u952e\u63d2\u5165\u4e86\u503c\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'    use std::collections::HashMap;\n\n    let mut scores = HashMap::new();\n\n    scores.insert(String::from("Blue"), 10);\n    scores.insert(String::from("Blue"), 25);\n\n    println!("{:?}", scores);\n')),(0,r.kt)("p",null,"\u793a\u4f8b 8-23\uff1a\u66ff\u6362\u5b58\u50a8\u5728\u7279\u5b9a\u952e\u4e2d\u7684\u503c"),(0,r.kt)("p",null,"\u8fd9\u6bb5\u4ee3\u7801\u5c06\u6253\u5370 ",(0,r.kt)("inlineCode",{parentName:"p"},'{"Blue": 25}'),"\u3002\u539f\u59cb\u503c ",(0,r.kt)("inlineCode",{parentName:"p"},"10")," \u88ab\u8986\u76d6\u6389\u4e86\u3002"),(0,r.kt)("h4",{id:"\u4ec5\u5728\u952e\u4e0d\u5b58\u5728\u65f6\u6dfb\u52a0\u952e\u548c\u503c"},(0,r.kt)("a",{parentName:"h4",href:"https://doc.rust-lang.org/book/ch08-03-hash-maps.html#adding-a-key-and-value-only-if-a-key-isnt-present"},"\u4ec5\u5728\u952e\u4e0d\u5b58\u5728\u65f6\u6dfb\u52a0\u952e\u548c\u503c")),(0,r.kt)("p",null,"\u901a\u5e38\uff0c\u6211\u4eec\u4f1a\u68c0\u67e5\u54c8\u5e0c\u6620\u5c04\u4e2d\u662f\u5426\u5df2\u7ecf\u5b58\u5728\u7279\u5b9a\u7684\u952e\uff0c\u5e76\u6839\u636e\u60c5\u51b5\u6267\u884c\u4ee5\u4e0b\u64cd\u4f5c\uff1a\u5982\u679c\u54c8\u5e0c\u6620\u5c04\u4e2d\u5df2\u5b58\u5728\u8be5\u952e\uff0c\u5219\u4fdd\u6301\u73b0\u6709\u503c\u4e0d\u53d8\u3002\u5982\u679c\u54c8\u5e0c\u6620\u5c04\u4e2d\u4e0d\u5b58\u5728\u8be5\u952e\uff0c\u5219\u63d2\u5165\u8be5\u952e\u53ca\u5176\u503c\u3002"),(0,r.kt)("p",null,"\u54c8\u5e0c\u6620\u5c04\u63d0\u4f9b\u4e86\u4e00\u4e2a\u79f0\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"entry")," \u7684\u7279\u6b8a API \u6765\u5904\u7406\u8fd9\u79cd\u60c5\u51b5\uff0c\u8be5 API \u4ee5\u60a8\u60f3\u8981\u68c0\u67e5\u7684\u952e\u4f5c\u4e3a\u53c2\u6570\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"entry")," \u65b9\u6cd5\u7684\u8fd4\u56de\u503c\u662f\u4e00\u4e2a\u540d\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"Entry")," \u7684\u679a\u4e3e\uff0c\u8868\u793a\u53ef\u80fd\u5b58\u5728\u4e5f\u53ef\u80fd\u4e0d\u5b58\u5728\u7684\u503c\u3002\u5047\u8bbe\u6211\u4eec\u60f3\u68c0\u67e5 Yellow \u961f\u7684\u952e\u662f\u5426\u6709\u4e00\u4e2a\u5173\u8054\u7684\u503c\u3002\u5982\u679c\u6ca1\u6709\uff0c\u5219\u63d2\u5165\u503c 50\uff1b\u5bf9\u4e8e Blue \u961f\u4e5f\u662f\u4e00\u6837\u3002\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"entry")," API\uff0c\u4ee3\u7801\u5982\u793a\u4f8b 8-24 \u6240\u793a\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'    use std::collections::HashMap;\n\n    let mut scores = HashMap::new();\n    scores.insert(String::from("Blue"), 10);\n\n    scores.entry(String::from("Yellow")).or_insert(50);\n    scores.entry(String::from("Blue")).or_insert(50);\n\n    println!("{:?}", scores);\n')),(0,r.kt)("p",null,"\u793a\u4f8b 8-24\uff1a\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"entry")," \u65b9\u6cd5\u4ec5\u5728\u952e\u6ca1\u6709\u5173\u8054\u503c\u65f6\u63d2\u5165"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Entry")," \u4e0a\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"or_insert")," \u65b9\u6cd5\u5b9a\u4e49\u4e3a\u8fd4\u56de\u5bf9\u5e94\u952e\u7684\u503c\u7684\u53ef\u53d8\u5f15\u7528\uff08",(0,r.kt)("inlineCode",{parentName:"p"},"&mut V"),"\uff09\uff0c\u5982\u679c\u8be5\u952e\u5b58\u5728\uff0c\u5219\u4e0d\u4fee\u6539\u503c\uff1b\u5982\u679c\u8be5\u952e\u4e0d\u5b58\u5728\uff0c\u5219\u63d2\u5165\u53c2\u6570\u4f5c\u4e3a\u65b0\u503c\uff0c\u5e76\u8fd4\u56de\u5bf9\u65b0\u503c\u7684\u53ef\u53d8\u5f15\u7528\u3002\u8fd9\u79cd\u6280\u672f\u6bd4\u624b\u52a8\u7f16\u5199\u903b\u8f91\u8981\u7b80\u6d01\u5f97\u591a\uff0c\u5e76\u4e14\u4e0e\u501f\u7528\u68c0\u67e5\u5668\u66f4\u53cb\u597d\u3002"),(0,r.kt)("p",null,"\u8fd0\u884c\u793a\u4f8b 8-24 \u4e2d\u7684\u4ee3\u7801\u5c06\u6253\u5370 ",(0,r.kt)("inlineCode",{parentName:"p"},'{"Yellow": 50, "Blue": 10}'),"\u3002\u5bf9 ",(0,r.kt)("inlineCode",{parentName:"p"},"entry")," \u7684\u7b2c\u4e00\u6b21\u8c03\u7528\u5c06\u4f7f\u7528\u503c 50 \u63d2\u5165 Yellow \u961f\u7684\u952e\uff0c\u56e0\u4e3a Yellow \u961f\u8fd8\u6ca1\u6709\u503c\u3002\u5bf9 ",(0,r.kt)("inlineCode",{parentName:"p"},"entry")," \u7684\u7b2c\u4e8c\u6b21\u8c03\u7528\u4e0d\u4f1a\u6539\u53d8\u54c8\u5e0c\u6620\u5c04\uff0c\u56e0\u4e3a Blue \u961f\u5df2\u7ecf\u6709\u503c 10\u3002"),(0,r.kt)("h4",{id:"\u6839\u636e\u65e7\u503c\u66f4\u65b0\u503c"},(0,r.kt)("a",{parentName:"h4",href:"https://doc.rust-lang.org/book/ch08-03-hash-maps.html#updating-a-value-based-on-the-old-value"},"\u6839\u636e\u65e7\u503c\u66f4\u65b0\u503c")),(0,r.kt)("p",null,"\u54c8\u5e0c\u6620\u5c04\u7684\u53e6\u4e00\u4e2a\u5e38\u89c1\u7528\u4f8b\u662f\u67e5\u627e\u952e\u7684\u503c\uff0c\u7136\u540e\u57fa\u4e8e\u65e7\u503c\u8fdb\u884c\u66f4\u65b0\u3002\u4f8b\u5982\uff0c\u793a\u4f8b 8-25 \u4e2d\u7684\u4ee3\u7801\u663e\u793a\u4e86\u5982\u4f55\u7edf\u8ba1\u4e00\u4e9b\u6587\u672c\u4e2d\u6bcf\u4e2a\u5355\u8bcd\u51fa\u73b0\u7684\u6b21\u6570\u3002\u6211\u4eec\u4f7f\u7528\u4e00\u4e2a\u54c8\u5e0c\u6620\u5c04\uff0c\u952e\u4e3a\u5355\u8bcd\uff0c\u503c\u4e3a\u51fa\u73b0\u6b21\u6570\uff0c\u6bcf\u6b21\u770b\u5230\u4e00\u4e2a\u5355\u8bcd\u65f6\u5c31\u5c06\u5176\u503c\u52a0 1\u3002\u5982\u679c\u662f\u7b2c\u4e00\u6b21\u770b\u5230\u4e00\u4e2a\u5355\u8bcd\uff0c\u6211\u4eec\u9996\u5148\u63d2\u5165\u503c 0\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'    use std::collections::HashMap;\n\n    let text = "hello world wonderful world";\n\n    let mut map = HashMap::new();\n\n    for word in text.split_whitespace() {\n        let count = map.entry(word).or_insert(0);\n        *count += 1;\n    }\n\n    println!("{:?}", map);\n')),(0,r.kt)("p",null,"\u793a\u4f8b 8-25\uff1a\u4f7f\u7528\u54c8\u5e0c\u6620\u5c04\u5b58\u50a8\u5355\u8bcd\u548c\u51fa\u73b0\u6b21\u6570\u6765\u7edf\u8ba1\u5355\u8bcd\u7684\u51fa\u73b0\u6b21\u6570"),(0,r.kt)("p",null,"\u8fd9\u6bb5\u4ee3\u7801\u5c06\u6253\u5370 ",(0,r.kt)("inlineCode",{parentName:"p"},'{"world": 2, "hello": 1, "wonderful": 1}'),"\u3002\u60a8\u53ef\u80fd\u4f1a\u770b\u5230\u76f8\u540c\u7684\u952e/\u503c\u5bf9\u4ee5\u4e0d\u540c\u7684\u987a\u5e8f\u6253\u5370\u51fa\u6765\uff1a\u56de\u987e\u4e00\u4e0b ",(0,r.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/book/ch08-03-hash-maps.html#accessing-values-in-a-hash-map"},"\u201c\u8bbf\u95ee\u54c8\u5e0c\u6620\u5c04\u4e2d\u7684\u503c\u201d")," \u90e8\u5206\uff0c\u54c8\u5e0c\u6620\u5c04\u7684\u8fed\u4ee3\u987a\u5e8f\u662f\u968f\u673a\u7684"),(0,r.kt)("p",null,"\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"split_whitespace")," \u65b9\u6cd5\u8fd4\u56de\u503c ",(0,r.kt)("inlineCode",{parentName:"p"},"text")," \u4e2d\u7531\u7a7a\u767d\u5b57\u7b26\u5206\u9694\u7684\u5b50\u5207\u7247\u7684\u8fed\u4ee3\u5668\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"or_insert")," \u65b9\u6cd5\u8fd4\u56de\u6307\u5b9a\u952e\u7684\u53ef\u53d8\u5f15\u7528\uff08",(0,r.kt)("inlineCode",{parentName:"p"},"&mut V"),"\uff09\u3002\u5728\u6b64\u793a\u4f8b\u4e2d\uff0c\u6211\u4eec\u5c06\u8be5\u53ef\u53d8\u5f15\u7528\u5b58\u50a8\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"count")," \u53d8\u91cf\u4e2d\uff0c\u56e0\u6b64\u4e3a\u4e86\u5bf9\u8be5\u503c\u8fdb\u884c\u8d4b\u503c\uff0c\u6211\u4eec\u5fc5\u987b\u9996\u5148\u89e3\u5f15\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"count"),"\uff08\u4f7f\u7528\u661f\u53f7 ",(0,r.kt)("inlineCode",{parentName:"p"},"*"),"\uff09\u3002\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"for")," \u5faa\u73af\u7ed3\u675f\u65f6\uff0c\u53ef\u53d8\u5f15\u7528\u7684\u4f5c\u7528\u57df\u7ed3\u675f\uff0c\u56e0\u6b64\u6240\u6709\u8fd9\u4e9b\u66f4\u6539\u90fd\u662f\u5b89\u5168\u7684\uff0c\u5e76\u4e14\u7b26\u5408\u501f\u7528\u89c4\u5219\u3002"),(0,r.kt)("h3",{id:"\u54c8\u5e0c\u51fd\u6570"},(0,r.kt)("a",{parentName:"h3",href:"https://doc.rust-lang.org/book/ch08-03-hash-maps.html#hashing-functions"},"\u54c8\u5e0c\u51fd\u6570")),(0,r.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"HashMap")," \u4f7f\u7528\u79f0\u4e3a ",(0,r.kt)("em",{parentName:"p"},"SipHash")," \u7684\u54c8\u5e0c\u51fd\u6570\uff0c\u5b83\u53ef\u4ee5\u63d0\u4f9b\u9488\u5bf9\u6d89\u53ca\u54c8\u5e0c\u8868\u7684\u62d2\u7edd\u670d\u52a1\uff08DoS\uff09\u653b\u51fb\u7684\u62b5\u6297\u529b",(0,r.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/book/ch08-03-hash-maps.html#siphash"},"1"),"\u3002\u8fd9\u4e0d\u662f\u53ef\u7528\u7684\u6700\u5feb\u54c8\u5e0c\u7b97\u6cd5\uff0c\u4f46\u6027\u80fd\u4e0b\u964d\u6362\u6765\u7684\u66f4\u597d\u5b89\u5168\u6027\u662f\u503c\u5f97\u7684\u3002\u5982\u679c\u60a8\u5bf9\u4ee3\u7801\u8fdb\u884c\u6027\u80fd\u5206\u6790\uff0c\u53d1\u73b0\u9ed8\u8ba4\u7684\u54c8\u5e0c\u51fd\u6570\u5bf9\u60a8\u7684\u9700\u6c42\u592a\u6162\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7\u6307\u5b9a\u4e0d\u540c\u7684\u54c8\u5e0c\u51fd\u6570\u6765\u5207\u6362\u3002",(0,r.kt)("em",{parentName:"p"},"\u54c8\u5e0c\u5668"),"\uff08hasher\uff09\u662f\u4e00\u4e2a\u5b9e\u73b0\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"BuildHasher")," trait \u7684\u7c7b\u578b\u3002\u6211\u4eec\u5c06\u5728\u7b2c 10 \u7ae0\u8ba8\u8bba trait \u548c\u5982\u4f55\u5b9e\u73b0\u5b83\u4eec\u3002\u60a8\u4e0d\u4e00\u5b9a\u9700\u8981\u4ece\u5934\u5f00\u59cb\u5b9e\u73b0\u81ea\u5df1\u7684\u54c8\u5e0c\u5668\uff1b",(0,r.kt)("a",{parentName:"p",href:"https://crates.io/"},"crates.io")," \u6709\u5176\u4ed6 Rust \u7528\u6237\u5171\u4eab\u7684\u5e93\uff0c\u63d0\u4f9b\u4e86\u8bb8\u591a\u5e38\u89c1\u54c8\u5e0c\u7b97\u6cd5\u7684\u54c8\u5e0c\u5668\u5b9e\u73b0\u3002"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/SipHash"},"https://en.wikipedia.org/wiki/SipHash")),(0,r.kt)("h2",{id:"\u603b\u7ed3"},(0,r.kt)("a",{parentName:"h2",href:"https://doc.rust-lang.org/book/ch08-03-hash-maps.html#summary"},"\u603b\u7ed3")),(0,r.kt)("p",null,"\u5411\u91cf\u3001\u5b57\u7b26\u4e32\u548c\u54c8\u5e0c\u6620\u5c04\u5c06\u4e3a\u7a0b\u5e8f\u4e2d\u5b58\u50a8\u3001\u8bbf\u95ee\u548c\u4fee\u6539\u6570\u636e\u63d0\u4f9b\u5927\u91cf\u5fc5\u8981\u7684\u529f\u80fd\u3002\u73b0\u5728\u60a8\u53ef\u4ee5\u89e3\u51b3\u4ee5\u4e0b\u4e00\u4e9b\u7ec3\u4e60\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7ed9\u5b9a\u4e00\u4e2a\u6574\u6570\u5217\u8868\uff0c\u4f7f\u7528\u5411\u91cf\u5e76\u8fd4\u56de\u5217\u8868\u7684\u4e2d\u4f4d\u6570\uff08\u6392\u5e8f\u540e\u7684\u4e2d\u95f4\u503c\uff09\u548c\u4f17\u6570\uff08\u51fa\u73b0\u6b21\u6570\u6700\u591a\u7684\u503c\uff1b\u54c8\u5e0c\u6620\u5c04\u5728\u8fd9\u91cc\u975e\u5e38\u6709\u5e2e\u52a9\uff09\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5c06\u5b57\u7b26\u4e32\u8f6c\u6362\u4e3a pig latin\u3002\u5c06\u6bcf\u4e2a\u5355\u8bcd\u7684\u7b2c\u4e00\u4e2a\u8f85\u97f3\u5b57\u6bcd\u79fb\u52a8\u5230\u8be5\u5355\u8bcd\u7684\u672b\u5c3e\uff0c\u5e76\u6dfb\u52a0\u201cay\u201d\uff0c\u56e0\u6b64\u201cfirst\u201d\u53d8\u6210\u201cirst-fay\u201d\u3002\u4ee5\u5143\u97f3\u5b57\u6bcd\u5f00\u5934\u7684\u5355\u8bcd\u5728\u672b\u5c3e\u6dfb\u52a0\u201chay\u201d\uff08\u201capple\u201d\u53d8\u6210\u201capple-hay\u201d\uff09\u3002\u8bf7\u8bb0\u4f4f\u5173\u4e8e UTF-8 \u7f16\u7801\u7684\u7ec6\u8282\uff01"),(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u54c8\u5e0c\u6620\u5c04\u548c\u5411\u91cf\uff0c\u521b\u5efa\u4e00\u4e2a\u6587\u672c\u754c\u9762\uff0c\u5141\u8bb8\u7528\u6237\u5c06\u5458\u5de5\u59d3\u540d\u6dfb\u52a0\u5230\u516c\u53f8\u7684\u90e8\u95e8\u4e2d\u3002\u4f8b\u5982\uff0c\u201cAdd Sally to Engineering\u201d\u6216\u201cAdd Amir to Sales\u201d\u3002\u7136\u540e\u8ba9\u7528\u6237\u901a\u8fc7\u90e8\u95e8\u68c0\u7d22\u6240\u6709\u5458\u5de5\u6216\u901a\u8fc7\u90e8\u95e8\u6309\u5b57\u6bcd\u987a\u5e8f\u68c0\u7d22\u6240\u6709\u5458\u5de5\u5217\u8868\u3002")),(0,r.kt)("p",null,"\u6807\u51c6\u5e93 API \u6587\u6863\u63cf\u8ff0\u4e86\u5411\u91cf\u3001\u5b57\u7b26\u4e32\u548c\u54c8\u5e0c\u6620\u5c04\u62e5\u6709\u7684\u65b9\u6cd5\uff0c\u8fd9\u4e9b\u65b9\u6cd5\u5bf9\u4e8e\u8fd9\u4e9b\u7ec3\u4e60\u5f88\u6709\u5e2e\u52a9\uff01"),(0,r.kt)("p",null,"\u6211\u4eec\u8fdb\u5165\u4e86\u66f4\u590d\u6742\u7684\u7a0b\u5e8f\u4e2d\uff0c\u5176\u4e2d\u64cd\u4f5c\u53ef\u80fd\u4f1a\u5931\u8d25\uff0c\u56e0\u6b64\u73b0\u5728\u662f\u8ba8\u8bba\u9519\u8bef\u5904\u7406\u7684\u7edd\u4f73\u65f6\u673a\u3002\u4e0b\u4e00\u7ae0\u6211\u4eec\u5c06\u4f1a\u8fdb\u884c\u8ba8\u8bba\uff01"))}u.isMDXComponent=!0}}]);