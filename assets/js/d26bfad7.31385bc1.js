"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[1567],{3905:(t,e,r)=>{r.d(e,{Zo:()=>m,kt:()=>d});var n=r(7294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var l=n.createContext({}),c=function(t){var e=n.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},m=function(t){var e=c(t.components);return n.createElement(l.Provider,{value:e},t.children)},p="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},g=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,a=t.originalType,l=t.parentName,m=s(t,["components","mdxType","originalType","parentName"]),p=c(r),g=o,d=p["".concat(l,".").concat(g)]||p[g]||u[g]||a;return r?n.createElement(d,i(i({ref:e},m),{},{components:r})):n.createElement(d,i({ref:e},m))}));function d(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=r.length,i=new Array(a);i[0]=g;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s[p]="string"==typeof t?t:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},2887:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={title:"Git\u7248\u672c\u56de\u9000",date:new Date("2020-04-05T00:00:00.000Z")},i=void 0,s={unversionedId:"others/tools/git/command/git-version-back",id:"others/tools/git/command/git-version-back",title:"Git\u7248\u672c\u56de\u9000",description:"\u4f7f\u7528\u547d\u4ee4",source:"@site/docs/others/tools/git/command/git-version-back.md",sourceDirName:"others/tools/git/command",slug:"/others/tools/git/command/git-version-back",permalink:"/docs/others/tools/git/command/git-version-back",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/others/tools/git/command/git-version-back.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1675697367,formattedLastUpdatedAt:"Feb 6, 2023",frontMatter:{title:"Git\u7248\u672c\u56de\u9000",date:"2020-04-05T00:00:00.000Z"},sidebar:"developTools",previous:{title:"Git\u5e38\u7528\u547d\u4ee4-Tag",permalink:"/docs/others/tools/git/command/git-command-Tag"},next:{title:"\u5982\u4f55\u5c06\u672c\u5730\u5df2\u6709\u9879\u76ee\u5173\u8054\u5230github\u7684\u65b0\u5efa\u7684\u9879\u76ee\u4e2d",permalink:"/docs/others/tools/git/git-project-init"}},l={},c=[{value:"\u4f7f\u7528\u547d\u4ee4",id:"\u4f7f\u7528\u547d\u4ee4",level:3},{value:"\u4f7f\u7528\u6f14\u793a",id:"\u4f7f\u7528\u6f14\u793a",level:3},{value:"git reset --hard",id:"git-reset---hard",level:4},{value:"git reset --soft",id:"git-reset---soft",level:4},{value:"\u63d0\u4ea4\u8fdc\u7a0b",id:"\u63d0\u4ea4\u8fdc\u7a0b",level:4}],m={toc:c},p="wrapper";function u(t){let{components:e,...r}=t;return(0,o.kt)(p,(0,n.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"\u4f7f\u7528\u547d\u4ee4"},"\u4f7f\u7528\u547d\u4ee4"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"git reset [-q] [<tree-ish>] [--] <pathspec>\u2026\u200b\ngit reset [-q] [--pathspec-from-file=<file> [--pathspec-file-nul]] [<tree-ish>]\ngit reset (--patch | -p) [<tree-ish>] [--] [<pathspec>\u2026\u200b]\ngit reset [--soft | --mixed [-N] | --hard | --merge | --keep] [-q] [<commit>]\n")),(0,o.kt)("h3",{id:"\u4f7f\u7528\u6f14\u793a"},"\u4f7f\u7528\u6f14\u793a"),(0,o.kt)("p",null,"\u9996\u5148\u5efa\u4e00\u4e2agit\u4ed3\u5e93\u5982\u4e0b\u56fe\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/document/master/image/git/reset1.png",alt:null})),(0,o.kt)("p",null,"\u7136\u540e\u901a\u8fc7\u547d\u4ee4:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"git log --pretty=oneline")),(0,o.kt)("p",null,"\u67e5\u770b\u63d0\u4ea4\u7eaa\u5f55"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/document/master/image/git/reset2.png",alt:null})),(0,o.kt)("p",null,"\u5e38\u7528\u7684reset\u547d\u4ee4\u6709\u4e24\u79cd\uff1a"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"git reset --soft    \u4fdd\u7559\u4e4b\u524d\u7684\u4fee\u6539"),(0,o.kt)("p",{parentName:"blockquote"},"git reset --hard  \u4e22\u5f03\u6240\u6709\u7684\u6539\u53d8")),(0,o.kt)("h4",{id:"git-reset---hard"},"git reset --hard"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/document/master/image/git/reset3.png",alt:null})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/document/master/image/git/reset4.png",alt:null})),(0,o.kt)("h4",{id:"git-reset---soft"},"git reset --soft"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/document/master/image/git/reset5.png",alt:null})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/document/master/image/git/reset6.png",alt:null})),(0,o.kt)("h4",{id:"\u63d0\u4ea4\u8fdc\u7a0b"},"\u63d0\u4ea4\u8fdc\u7a0b"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/document/master/image/git/reset7.png",alt:null})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://www.cnblogs.com/kidsitcn/p/4513297.html"},"git reset soft,hard,mixed\u4e4b\u533a\u522b\u6df1\u89e3")," \u53ef\u4ee5\u770b\u4e00\u4e0b\u8fd9\u7bc7\u6587\u7ae0\uff0c\u540c\u6837\u81ea\u5df1\u4e5f\u53ef\u4ee5\u7528souretree\u53bb\u770b\u4e00\u4e0b\u3002")))}u.isMDXComponent=!0}}]);