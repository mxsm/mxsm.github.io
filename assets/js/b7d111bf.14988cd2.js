"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[764],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=m(n),d=i,f=s["".concat(p,".").concat(d)]||s[d]||u[d]||r;return n?a.createElement(f,l(l({ref:t},c),{},{components:n})):a.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:i,l[1]=o;for(var m=2;m<r;m++)l[m]=n[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7325:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>m});var a=n(7462),i=(n(7294),n(3905));const r={title:"\u4f7f\u7528if let\u8fdb\u884c\u7b80\u6d01\u7684\u63a7\u5236\u6d41",linkTitle:"\u4f7f\u7528if let\u8fdb\u884c\u7b80\u6d01\u7684\u63a7\u5236\u6d41",sidebar_label:"6.3. \u4f7f\u7528if let\u8fdb\u884c\u7b80\u6d01\u7684\u63a7\u5236\u6d41",weight:202308051736,description:"match\u63a7\u5236\u6d41\u6784\u9020"},l=void 0,o={unversionedId:"rust/official-doc/enums-pattern-matching/concise",id:"rust/official-doc/enums-pattern-matching/concise",title:"\u4f7f\u7528if let\u8fdb\u884c\u7b80\u6d01\u7684\u63a7\u5236\u6d41",description:"match\u63a7\u5236\u6d41\u6784\u9020",source:"@site/docs/rust/official-doc/enums-pattern-matching/03-concise.md",sourceDirName:"rust/official-doc/enums-pattern-matching",slug:"/rust/official-doc/enums-pattern-matching/concise",permalink:"/docs/rust/official-doc/enums-pattern-matching/concise",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/rust/official-doc/enums-pattern-matching/03-concise.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1691846266,formattedLastUpdatedAt:"Aug 12, 2023",sidebarPosition:3,frontMatter:{title:"\u4f7f\u7528if let\u8fdb\u884c\u7b80\u6d01\u7684\u63a7\u5236\u6d41",linkTitle:"\u4f7f\u7528if let\u8fdb\u884c\u7b80\u6d01\u7684\u63a7\u5236\u6d41",sidebar_label:"6.3. \u4f7f\u7528if let\u8fdb\u884c\u7b80\u6d01\u7684\u63a7\u5236\u6d41",weight:202308051736,description:"match\u63a7\u5236\u6d41\u6784\u9020"},sidebar:"rustDoc",previous:{title:"6.2. match\u63a7\u5236\u6d41\u6784\u9020",permalink:"/docs/rust/official-doc/enums-pattern-matching/match-construct"},next:{title:"\u4f7f\u7528\u5305\u3001\u677f\u6761\u7bb1\u548c\u6a21\u5757\u7ba1\u7406\u65e5\u76ca\u589e\u957f\u7684\u9879\u76ee",permalink:"/docs/rust/official-doc/packages-crates-modules"}},p={},m=[{value:"\u4f7f\u7528 <code>if let</code> \u8fdb\u884c\u7b80\u6d01\u7684\u63a7\u5236\u6d41",id:"\u4f7f\u7528-if-let-\u8fdb\u884c\u7b80\u6d01\u7684\u63a7\u5236\u6d41",level:2},{value:"\u5c0f\u7ed3",id:"\u5c0f\u7ed3",level:2}],c={toc:m},s="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(s,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u4f7f\u7528-if-let-\u8fdb\u884c\u7b80\u6d01\u7684\u63a7\u5236\u6d41"},(0,i.kt)("a",{parentName:"h2",href:"https://doc.rust-lang.org/book/ch06-03-if-let.html#concise-control-flow-with-if-let"},"\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"a"},"if let")," \u8fdb\u884c\u7b80\u6d01\u7684\u63a7\u5236\u6d41")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"if let")," \u8bed\u6cd5\u5141\u8bb8\u60a8\u5c06 ",(0,i.kt)("inlineCode",{parentName:"p"},"if")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"let")," \u7ed3\u5408\u5728\u4e00\u8d77\uff0c\u4ee5\u4e00\u79cd\u66f4\u7b80\u6d01\u7684\u65b9\u5f0f\u5904\u7406\u5339\u914d\u4e00\u4e2a\u6a21\u5f0f\u7684\u503c\uff0c\u800c\u5ffd\u7565\u5176\u4ed6\u60c5\u51b5\u3002\u8003\u8651\u4ee3\u7801\u6e05\u53556-6\u4e2d\u7684\u7a0b\u5e8f\uff0c\u5b83\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"config_max")," \u53d8\u91cf\u4e2d\u5339\u914d\u4e00\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"Option<u8>")," \u503c\uff0c\u4f46\u53ea\u60f3\u5728\u8be5\u503c\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"Some")," \u53d8\u4f53\u65f6\u6267\u884c\u4ee3\u7801\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'    let config_max = Some(3u8);\n    match config_max {\n        Some(max) => println!("The maximum is configured to be {}", max),\n        _ => (),\n    }\n')),(0,i.kt)("p",null,"\u4ee3\u7801\u6e05\u53556-6\uff1a\u53ea\u5728\u503c\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"Some")," \u65f6\u6267\u884c\u4ee3\u7801\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"match")),(0,i.kt)("p",null,"\u5982\u679c\u503c\u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"Some"),"\uff0c\u6211\u4eec\u901a\u8fc7\u5c06\u8be5\u503c\u7ed1\u5b9a\u5230\u6a21\u5f0f\u4e2d\u7684\u53d8\u91cf ",(0,i.kt)("inlineCode",{parentName:"p"},"max"),"\uff0c\u6253\u5370\u51fa ",(0,i.kt)("inlineCode",{parentName:"p"},"Some")," \u53d8\u4f53\u4e2d\u7684\u503c\u3002\u6211\u4eec\u4e0d\u5e0c\u671b\u5904\u7406 ",(0,i.kt)("inlineCode",{parentName:"p"},"None")," \u7684\u503c\u3002\u4e3a\u4e86\u6ee1\u8db3 ",(0,i.kt)("inlineCode",{parentName:"p"},"match")," \u8868\u8fbe\u5f0f\u7684\u8981\u6c42\uff0c\u5728\u5904\u7406\u4e86\u4e00\u4e2a\u53d8\u4f53\u540e\uff0c\u6211\u4eec\u4e0d\u5f97\u4e0d\u6dfb\u52a0 ",(0,i.kt)("inlineCode",{parentName:"p"},"_ => ()"),"\uff0c\u8fd9\u662f\u4e00\u4e2a\u4ee4\u4eba\u8ba8\u538c\u7684\u6837\u677f\u4ee3\u7801\u3002"),(0,i.kt)("p",null,"\u76f8\u53cd\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"if let")," \u6765\u4ee5\u66f4\u7b80\u77ed\u7684\u65b9\u5f0f\u7f16\u5199\u8fd9\u4e2a\u903b\u8f91\u3002\u4e0b\u9762\u7684\u4ee3\u7801\u4e0e\u4ee3\u7801\u6e05\u53556-6\u4e2d\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"match")," \u7684\u884c\u4e3a\u76f8\u540c\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'    let config_max = Some(3u8);\n    if let Some(max) = config_max {\n        println!("The maximum is configured to be {}", max);\n    }\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"if let")," \u8bed\u6cd5\u63a5\u53d7\u4e00\u4e2a\u6a21\u5f0f\u548c\u4e00\u4e2a\u7528\u7b49\u53f7\u5206\u9694\u7684\u8868\u8fbe\u5f0f\u3002\u5b83\u7684\u5de5\u4f5c\u65b9\u5f0f\u4e0e ",(0,i.kt)("inlineCode",{parentName:"p"},"match")," \u76f8\u540c\uff0c\u5176\u4e2d\u8868\u8fbe\u5f0f\u88ab\u4f20\u9012\u7ed9 ",(0,i.kt)("inlineCode",{parentName:"p"},"match"),"\uff0c\u800c\u6a21\u5f0f\u662f\u5b83\u7684\u7b2c\u4e00\u4e2a\u5206\u652f\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u6a21\u5f0f\u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"Some(max)"),"\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"max")," \u7ed1\u5b9a\u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},"Some")," \u5185\u90e8\u7684\u503c\u3002\u7136\u540e\uff0c\u6211\u4eec\u53ef\u4ee5\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"if let")," \u5757\u7684\u4e3b\u4f53\u4e2d\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"max"),"\uff0c\u5c31\u50cf\u5728\u76f8\u5e94\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"match")," \u5206\u652f\u4e2d\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"max")," \u4e00\u6837\u3002\u5982\u679c\u503c\u4e0d\u5339\u914d\u6a21\u5f0f\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"if let")," \u5757\u4e2d\u7684\u4ee3\u7801\u5c06\u4e0d\u4f1a\u8fd0\u884c\u3002"),(0,i.kt)("p",null,"\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"if let")," \u53ef\u4ee5\u51cf\u5c11\u8f93\u5165\u91cf\u3001\u7f29\u8fdb\u548c\u6837\u677f\u4ee3\u7801\u3002\u4f46\u662f\uff0c\u60a8\u5c06\u5931\u53bb ",(0,i.kt)("inlineCode",{parentName:"p"},"match")," \u5f3a\u5236\u6267\u884c\u7684\u7a77\u5c3d\u68c0\u67e5\u3002\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"match")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"if let")," \u4e4b\u95f4\u9009\u62e9\u53d6\u51b3\u4e8e\u60a8\u5728\u7279\u5b9a\u60c5\u51b5\u4e0b\u7684\u9700\u6c42\uff0c\u4ee5\u53ca\u5728\u662f\u5426\u613f\u610f\u4e3a\u5931\u53bb\u7a77\u5c3d\u68c0\u67e5\u800c\u6362\u53d6\u7b80\u6d01\u6027\u4e4b\u95f4\u53d6\u820d\u3002"),(0,i.kt)("p",null,"\u6362\u53e5\u8bdd\u8bf4\uff0c\u60a8\u53ef\u4ee5\u5c06 ",(0,i.kt)("inlineCode",{parentName:"p"},"if let")," \u89c6\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"match")," \u7684\u8bed\u6cd5\u7cd6\uff0c\u5f53\u503c\u5339\u914d\u4e00\u4e2a\u6a21\u5f0f\u65f6\u8fd0\u884c\u4ee3\u7801\uff0c\u7136\u540e\u5ffd\u7565\u6240\u6709\u5176\u4ed6\u503c\u3002"),(0,i.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"if let")," \u4e2d\u5305\u542b\u4e00\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"else"),"\u3002\u4e0e ",(0,i.kt)("inlineCode",{parentName:"p"},"match")," \u8868\u8fbe\u5f0f\u4e2d\u7b49\u6548\u4e8e ",(0,i.kt)("inlineCode",{parentName:"p"},"if let")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"else")," \u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"_")," \u6848\u4f8b\u76f8\u540c\uff0c\u4e0e ",(0,i.kt)("inlineCode",{parentName:"p"},"else")," \u914d\u5957\u7684\u4ee3\u7801\u5757\u4e0e ",(0,i.kt)("inlineCode",{parentName:"p"},"if let")," \u5757\u4e2d\u7684\u4ee3\u7801\u5757\u76f8\u540c\u3002\u56de\u987e\u4ee3\u7801\u6e05\u53556-4\u4e2d\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"Coin")," \u679a\u4e3e\u5b9a\u4e49\uff0c\u5176\u4e2d ",(0,i.kt)("inlineCode",{parentName:"p"},"Quarter")," \u53d8\u4f53\u8fd8\u5305\u542b\u4e00\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"UsState")," \u503c\u3002\u5982\u679c\u6211\u4eec\u60f3\u8981\u8ba1\u7b97\u770b\u5230\u7684\u6240\u6709\u975e25\u7f8e\u5206\u786c\u5e01\u7684\u6570\u91cf\uff0c\u5e76\u4e14\u5728\u5ba3\u5e0325\u7f8e\u5206\u786c\u5e01\u7684\u5dde\u65f6\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"match")," \u8868\u8fbe\u5f0f\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'    let mut count = 0;\n    match coin {\n        Coin::Quarter(state) => println!("State quarter from {:?}!", state),\n        _ => count += 1,\n    }\n')),(0,i.kt)("p",null,"\u6216\u8005\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"if let")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"else")," \u8868\u8fbe\u5f0f\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'    let mut count = 0;\n    if let Coin::Quarter(state) = coin {\n        println!("State quarter from {:?}!", state);\n    } else {\n        count += 1;\n    }\n')),(0,i.kt)("p",null,"\u5982\u679c\u60a8\u7684\u7a0b\u5e8f\u7684\u903b\u8f91\u8fc7\u4e8e\u5197\u957f\uff0c\u65e0\u6cd5\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"match")," \u8868\u8fbe\u5f0f\u8868\u8fbe\uff0c\u90a3\u4e48\u8bf7\u8bb0\u4f4f\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"if let")," \u4e5f\u662f Rust \u5de5\u5177\u7bb1\u4e2d\u7684\u4e00\u5458\u3002"),(0,i.kt)("h2",{id:"\u5c0f\u7ed3"},(0,i.kt)("a",{parentName:"h2",href:"https://doc.rust-lang.org/book/ch06-03-if-let.html#summary"},"\u5c0f\u7ed3")),(0,i.kt)("p",null,"\u6211\u4eec\u5df2\u7ecf\u4e86\u89e3\u4e86\u5982\u4f55\u4f7f\u7528\u679a\u4e3e\u521b\u5efa\u81ea\u5b9a\u4e49\u7c7b\u578b\uff0c\u8fd9\u4e9b\u7c7b\u578b\u53ef\u4ee5\u662f\u4e00\u7ec4\u679a\u4e3e\u503c\u4e2d\u7684\u4e00\u4e2a\u3002\u6211\u4eec\u5c55\u793a\u4e86\u6807\u51c6\u5e93\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"Option<T>")," \u7c7b\u578b\u5982\u4f55\u5e2e\u52a9\u60a8\u4f7f\u7528\u7c7b\u578b\u7cfb\u7edf\u6765\u9632\u6b62\u9519\u8bef\u3002\u5f53\u679a\u4e3e\u503c\u5305\u542b\u6570\u636e\u65f6\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"match")," \u6216 ",(0,i.kt)("inlineCode",{parentName:"p"},"if let")," \u6765\u63d0\u53d6\u548c\u4f7f\u7528\u8fd9\u4e9b\u503c\uff0c\u5177\u4f53\u53d6\u51b3\u4e8e\u60a8\u9700\u8981\u5904\u7406\u7684\u60c5\u51b5\u6709\u591a\u5c11\u79cd\u60c5\u51b5\u3002"),(0,i.kt)("p",null,"\u73b0\u5728\uff0c\u60a8\u7684 Rust \u7a0b\u5e8f\u53ef\u4ee5\u4f7f\u7528\u7ed3\u6784\u4f53\u548c\u679a\u4e3e\u5728\u57df\u4e2d\u8868\u8fbe\u6982\u5ff5\u3002\u521b\u5efa\u81ea\u5b9a\u4e49\u7c7b\u578b\u4f9b API \u4f7f\u7528\u53ef\u4ee5\u786e\u4fdd\u7c7b\u578b\u5b89\u5168\uff1a\u7f16\u8bd1\u5668\u4f1a\u786e\u4fdd\u60a8\u7684\u51fd\u6570\u53ea\u4f1a\u5f97\u5230\u6bcf\u4e2a\u51fd\u6570\u6240\u671f\u671b\u7684\u7c7b\u578b\u7684\u503c\u3002"),(0,i.kt)("p",null,"\u4e3a\u4e86\u4e3a\u7528\u6237\u63d0\u4f9b\u4e00\u4e2a\u7ec4\u7ec7\u826f\u597d\u7684 API\uff0c\u4f7f\u5176\u7b80\u5355\u6613\u7528\u5e76\u4e14\u53ea\u66b4\u9732\u7528\u6237\u6240\u9700\u7684\u5185\u5bb9\uff0c\u8ba9\u6211\u4eec\u73b0\u5728\u8f6c\u5411 Rust \u7684\u6a21\u5757\u3002"))}u.isMDXComponent=!0}}]);