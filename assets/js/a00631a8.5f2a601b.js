"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[521],{3905:(e,l,t)=>{t.d(l,{Zo:()=>u,kt:()=>s});var n=t(7294);function a(e,l,t){return l in e?Object.defineProperty(e,l,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[l]=t,e}function r(e,l){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);l&&(n=n.filter((function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var l=1;l<arguments.length;l++){var t=null!=arguments[l]?arguments[l]:{};l%2?r(Object(t),!0).forEach((function(l){a(e,l,t[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(t,l))}))}return e}function p(e,l){if(null==e)return{};var t,n,a=function(e,l){if(null==e)return{};var t,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],l.indexOf(t)>=0||(a[t]=e[t]);return a}(e,l);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],l.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),k=function(e){var l=n.useContext(i),t=l;return e&&(t="function"==typeof e?e(l):o(o({},l),e)),t},u=function(e){var l=k(e.components);return n.createElement(i.Provider,{value:l},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var l=e.children;return n.createElement(n.Fragment,{},l)}},m=n.forwardRef((function(e,l){var t=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=k(t),m=a,s=c["".concat(i,".").concat(m)]||c[m]||d[m]||r;return t?n.createElement(s,o(o({ref:l},u),{},{components:t})):n.createElement(s,o({ref:l},u))}));function s(e,l){var t=arguments,a=l&&l.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=m;var p={};for(var i in l)hasOwnProperty.call(l,i)&&(p[i]=l[i]);p.originalType=e,p[c]="string"==typeof e?e:a,o[1]=p;for(var k=2;k<r;k++)o[k]=t[k];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6041:(e,l,t)=>{t.r(l),t.d(l,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>p,toc:()=>k});var n=t(7462),a=(t(7294),t(3905));const r={title:"Dockfile",linkTitle:"Dockfile",date:new Date("2021-11-21T00:00:00.000Z"),weight:202111212107},o=void 0,p={unversionedId:"docker/base/dockerfile",id:"docker/base/dockerfile",title:"Dockfile",description:"1. \u4ec0\u4e48\u662fDockerfile",source:"@site/docs/docker/base/dockerfile.md",sourceDirName:"docker/base",slug:"/docker/base/dockerfile",permalink:"/docs/docker/base/dockerfile",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/docker/base/dockerfile.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1675697367,formattedLastUpdatedAt:"Feb 6, 2023",frontMatter:{title:"Dockfile",linkTitle:"Dockfile",date:"2021-11-21T00:00:00.000Z",weight:202111212107},sidebar:"docker",previous:{title:"Centos8 Docker\u5b89\u88c5",permalink:"/docs/docker/base/docker-install"}},i={},k=[{value:"1. \u4ec0\u4e48\u662fDockerfile",id:"1-\u4ec0\u4e48\u662fdockerfile",level:3},{value:"2. Dockerfile\u6307\u4ee4",id:"2-dockerfile\u6307\u4ee4",level:3},{value:"2.1 FROM",id:"21-from",level:4},{value:"2.2 RUN",id:"22-run",level:4},{value:"2.4 LABEL",id:"24-label",level:4},{value:"2.5 EXPOSE",id:"25-expose",level:4},{value:"2.6 ENV",id:"26-env",level:4},{value:"2.7 ADD",id:"27-add",level:4},{value:"2.8 COPY",id:"28-copy",level:4},{value:"2.9 ENTRYPOINT",id:"29-entrypoint",level:4},{value:"2.10 VOLUME",id:"210-volume",level:4},{value:"2.11 USER",id:"211-user",level:4},{value:"2.12 WORKDIR",id:"212-workdir",level:4},{value:"2.13 ARG",id:"213-arg",level:4},{value:"2.14 ONBUILD",id:"214-onbuild",level:4},{value:"2.15 STOPSIGNAL",id:"215-stopsignal",level:4},{value:"2.16 HEALTHCHECK",id:"216-healthcheck",level:4},{value:"2.17 SHELL",id:"217-shell",level:4}],u={toc:k},c="wrapper";function d(e){let{components:l,...t}=e;return(0,a.kt)(c,(0,n.Z)({},u,t,{components:l,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"1-\u4ec0\u4e48\u662fdockerfile"},"1. \u4ec0\u4e48\u662fDockerfile"),(0,a.kt)("p",null,"Docker \u901a\u8fc7\u4ece\u4e00\u4e2aDockerfile\u5305\u542b\u6240\u6709\u547d\u4ee4\u7684\u6587\u672c\u6587\u4ef6\u4e2d\u8bfb\u53d6\u6307\u4ee4\u6765\u81ea\u52a8\u6784\u5efa\u955c\u50cf\uff0c\u8be5 \u6587\u4ef6\u6309\u987a\u5e8f\u5305\u542b\u6784\u5efa\u7ed9\u5b9a\u955c\u50cf\u6240\u9700\u7684\u6240\u6709\u547d\u4ee4"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dockerfile"},"# syntax=docker/dockerfile:1\nFROM ubuntu:18.04\nCOPY ../../.. /app\nRUN make /app\nCMD python /app/app.py\n")),(0,a.kt)("p",null,"\u6bcf\u6761\u6307\u4ee4\u521b\u5efa\u4e00\u5c42\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"FROM"),"\u4ece",(0,a.kt)("inlineCode",{parentName:"li"},"ubuntu:18.04"),"Docker \u955c\u50cf\u521b\u5efa\u4e00\u4e2a\u5c42\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"COPY")," \u4ece Docker \u5ba2\u6237\u7aef\u7684\u5f53\u524d\u76ee\u5f55\u6dfb\u52a0\u6587\u4ef6\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"RUN"),"\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"li"},"make"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"CMD")," \u6307\u5b9a\u8981\u5728\u5bb9\u5668\u5185\u8fd0\u884c\u7684\u547d\u4ee4\u3002")),(0,a.kt)("p",null,"\u5f53\u4f60\u8fd0\u884c\u4e00\u4e2a\u955c\u50cf\u5e76\u751f\u6210\u4e00\u4e2a\u5bb9\u5668\u65f6\uff0c\u4f60\u4f1a \u5728\u5e95\u5c42\u7684\u9876\u90e8\u6dfb\u52a0\u4e00\u4e2a\u65b0\u7684",(0,a.kt)("em",{parentName:"p"},"\u53ef\u5199\u5c42"),"\uff08\u201c\u5bb9\u5668\u5c42\u201d\uff09\u3002\u5bf9\u6b63\u5728\u8fd0\u884c\u7684\u5bb9\u5668\u6240\u505a\u7684\u6240\u6709\u66f4\u6539\uff0c\u4f8b\u5982\u5199\u5165\u65b0\u6587\u4ef6\u3001\u4fee\u6539\u73b0\u6709\u6587\u4ef6\u548c\u5220\u9664\u6587\u4ef6\uff0c\u90fd\u5c06\u5199\u5165\u6b64\u53ef\u5199\u5bb9\u5668\u5c42\u3002"),(0,a.kt)("h3",{id:"2-dockerfile\u6307\u4ee4"},"2. Dockerfile\u6307\u4ee4"),(0,a.kt)("p",null,"\u8fd9\u4e9b\u5efa\u8bae\u65e8\u5728\u5e2e\u52a9\u60a8\u521b\u5efa\u4e00\u4e2a\u9ad8\u6548\u548c\u53ef\u7ef4\u62a4\u7684Dockerfile\u3002"),(0,a.kt)("h4",{id:"21-from"},"2.1 FROM"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dockerfile"},"FROM [--platform=<platform>] <image> [AS <name>]\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dockerfile"},"FROM [--platform=<platform>] <image>[:<tag>] [AS <name>]\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dockerfile"},"FROM [--platform=<platform>] <image>[@<digest>] [AS <name>]\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Tips:\u53ea\u8981\u6709\u53ef\u80fd\uff0c\u8bf7\u4f7f\u7528\u5f53\u524d\u7684\u5b98\u65b9\u56fe\u50cf\u4f5c\u4e3a\u60a8\u7684\u56fe\u50cf\u7684\u57fa\u7840\u3002\u6211\u4eec\u63a8\u8350Alpine\u6620\u50cf\uff0c\u56e0\u4e3a\u5b83\u662f\u4e25\u683c\u63a7\u5236\u7684\uff0c\u800c\u4e14\u4f53\u79ef\u5f88\u5c0f(\u76ee\u524d\u5c0f\u4e8e6 MB)\uff0c\u540c\u65f6\u4ecd\u7136\u662f\u4e00\u4e2a\u5b8c\u6574\u7684Linux\u53d1\u884c\u7248\u3002")),(0,a.kt)("p",null,"FROM\u6307\u4ee4\u521d\u59cb\u5316\u4e00\u4e2a\u65b0\u7684\u6784\u5efa\u9636\u6bb5\uff0c\u5e76\u4e3a\u540e\u7eed\u6307\u4ee4\u8bbe\u7f6e\u57fa\u672c\u6620\u50cf\u3002\u56e0\u6b64\uff0c\u4e00\u4e2a\u6709\u6548\u7684Dockerfile\u5fc5\u987b\u4ee5FROM\u6307\u4ee4\u5f00\u59cb\u3002\u6620\u50cf\u53ef\u4ee5\u662f\u4efb\u4f55\u6709\u6548\u7684\u6620\u50cf\u2014\u4ece\u516c\u5171\u5b58\u50a8\u5e93\u4e2d\u53d6\u51fa\u6620\u50cf\u7279\u522b\u5bb9\u6613\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"ARG"))," \u662fDockerfile\u4e2d\u552f\u4e00\u53ef\u80fd\u5148\u4e8e ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"FROM"))," \u7684\u6307\u4ee4"),(0,a.kt)("p",{parentName:"li"},"FROM\u6307\u4ee4\u652f\u6301\u7531\u53d1\u751f\u5728\u7b2c\u4e00\u4e2aFROM\u4e4b\u524d\u7684\u4efb\u4f55ARG\u6307\u4ee4\u58f0\u660e\u7684\u53d8\u91cf"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"ARG  CODE_VERSION=latest\nFROM base:${CODE_VERSION}\nCMD  /code/run-app\n\nFROM extras:${CODE_VERSION}\nCMD  /code/run-extras\n")),(0,a.kt)("p",{parentName:"li"},"\u5728FROM\u4e4b\u524d\u58f0\u660e\u7684ARG\u5728\u6784\u5efa\u9636\u6bb5\u4e4b\u5916\uff0c\u6240\u4ee5\u5b83\u4e0d\u80fd\u5728FROM\u4e4b\u540e\u7684\u4efb\u4f55\u6307\u4ee4\u4e2d\u4f7f\u7528\u3002\u8981\u4f7f\u7528\u5728\u7b2c\u4e00\u4e2aFROM\u4e4b\u524d\u58f0\u660e\u7684ARG\u7684\u9ed8\u8ba4\u503c\uff0c\u5728\u6784\u5efa\u9636\u6bb5\u4f7f\u7528\u4e00\u4e2a\u6ca1\u6709\u503c\u7684ARG\u6307\u4ee4:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-dockerfile"},"ARG VERSION=latest\nFROM busybox:$VERSION\nARG VERSION\nRUN echo $VERSION > image_version\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"FROM\u53ef\u4ee5\u5728\u4e00\u4e2aDockerfile\u4e2d\u51fa\u73b0\u591a\u6b21\uff0c\u4ee5\u521b\u5efa\u591a\u4e2a\u6620\u50cf\u6216\u4f7f\u7528\u4e00\u4e2a\u6784\u5efa\u9636\u6bb5\u4f5c\u4e3a\u53e6\u4e00\u4e2a\u6784\u5efa\u9636\u6bb5\u7684\u4f9d\u8d56\u9879\u3002\u53ea\u9700\u5728\u6bcf\u4e2a\u65b0\u7684FROM\u6307\u4ee4\u4e4b\u524d\u8bb0\u5f55\u63d0\u4ea4\u7684\u6700\u540e\u4e00\u4e2a\u955c\u50cfID\u8f93\u51fa\u3002\u6bcf\u4e2aFROM\u6307\u4ee4\u6e05\u9664\u524d\u9762\u6307\u4ee4\u521b\u5efa\u7684\u4efb\u4f55\u72b6\u6001\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u53ef\u4ee5\u901a\u8fc7\u5728FROM\u6307\u4ee4\u4e2d\u6dfb\u52a0AS\u540d\u79f0\u6765\u4e3a\u65b0\u7684\u6784\u5efa\u9636\u6bb5\u6307\u5b9a\u4e00\u4e2a\u540d\u79f0\u3002\u8fd9\u4e2a\u540d\u79f0\u53ef\u4ee5\u7528\u4e8e\u540e\u9762\u7684FROM\u548cCOPY\u3002\u53c2\u8003\u5728\u6b64\u9636\u6bb5\u6784\u5efa\u7684\u6620\u50cf\u7684\u8bf4\u660e")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"tag\u6216digest\u503c\u662f\u53ef\u9009\u7684\u3002\u5982\u679c\u7701\u7565\u5176\u4e2d\u4efb\u4f55\u4e00\u4e2a\uff0c\u6784\u9020\u5668\u9ed8\u8ba4\u91c7\u7528\u6700\u65b0\u7684\u6807\u8bb0\u3002\u5982\u679c\u4e0d\u80fd\u627e\u5230\u6807\u8bb0\u503c\uff0c\u6784\u9020\u5668\u5c06\u8fd4\u56de\u4e00\u4e2a\u9519\u8bef\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u53ef\u9009\u7684\u2014\u2014platform\u6807\u5fd7\u53ef\u7528\u4e8e\u5728FROM\u5f15\u7528\u591a\u5e73\u53f0\u56fe\u50cf\u7684\u60c5\u51b5\u4e0b\u6307\u5b9a\u56fe\u50cf\u7684\u5e73\u53f0\u3002\u4f8b\u5982:linux/amd64\u3001linux/arm64\u6216windows/amd64\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5c06\u4f7f\u7528\u6784\u5efa\u8bf7\u6c42\u7684\u76ee\u6807\u5e73\u53f0\u3002\u5168\u5c40\u6784\u5efa\u53c2\u6570\u53ef\u4ee5\u5728\u8fd9\u4e2a\u6807\u5fd7\u7684\u503c\u4e2d\u4f7f\u7528\uff0c\u4f8b\u5982\uff0c\u81ea\u52a8\u5e73\u53f0arg\u5141\u8bb8\u4f60\u5f3a\u5236\u4e00\u4e2a\u9636\u6bb5\u672c\u5730\u6784\u5efa\u5e73\u53f0(\u2014\u2014platform=$BUILDPLATFORM)\uff0c\u5e76\u4f7f\u7528\u5b83\u5728\u9636\u6bb5\u5185\u90e8\u4ea4\u53c9\u7f16\u8bd1\u5230\u76ee\u6807\u5e73\u53f0\u3002"))),(0,a.kt)("h4",{id:"22-run"},"2.2 RUN"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"RUN <command>"))," (Shell\u5f62\u5f0f\uff0c\u547d\u4ee4\u5728Shell\u4e2d\u8fd0\u884c\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u662f ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"/bin/sh -c"))," \u5728Linux\u4e0a\u9762\u6216\u8005 ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"cmd /S /C"))," \u5728windows\u4e0a\u9762)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},'RUN ["executable", "param1", "param2"]')))),(0,a.kt)("p",null,"RUN\u6307\u4ee4\u5c06\u5728\u5f53\u524d\u955c\u50cf\u4e0a\u65b9\u7684\u65b0\u5c42\u4e2d\u6267\u884c\u4efb\u4f55\u547d\u4ee4\uff0c\u5e76\u63d0\u4ea4\u7ed3\u679c\u3002\u751f\u6210\u7684\u63d0\u4ea4\u6620\u50cf\u5c06\u7528\u4e8eDockerfile\u4e2d\u7684\u4e0b\u4e00\u6b65\u3002"),(0,a.kt)("p",null,"\u5206\u5c42RUN\u6307\u4ee4\u548c\u751f\u6210\u63d0\u4ea4\u7b26\u5408Docker\u7684\u6838\u5fc3\u6982\u5ff5\uff0c\u5176\u4e2d\u63d0\u4ea4\u5f88\u4fbf\u5b9c\uff0c\u5bb9\u5668\u53ef\u4ee5\u4ece\u6620\u50cf\u5386\u53f2\u7684\u4efb\u4f55\u70b9\u521b\u5efa\uff0c\u5c31\u50cf\u6e90\u4ee3\u7801\u63a7\u5236\u4e00\u6837\u3002"),(0,a.kt)("p",null,"exec\u8868\u5355\u53ef\u4ee5\u907f\u514dshell\u5b57\u7b26\u4e32\u88ab\u4fee\u6539\uff0c\u5e76\u4e14\u53ef\u4ee5\u4f7f\u7528\u4e0d\u5305\u542b\u6307\u5b9ashell\u53ef\u6267\u884c\u6587\u4ef6\u7684\u57fa\u672c\u6620\u50cf\u6765\u8fd0\u884c\u547d\u4ee4\u3002"),(0,a.kt)("p",null,"shell\u8868\u5355\u7684\u9ed8\u8ba4shell\u53ef\u4ee5\u4f7f\u7528shell\u547d\u4ee4\u66f4\u6539\u3002"),(0,a.kt)("p",null,"\u5728shell\u5f62\u5f0f\u4e2d\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528 \\ (\u53cd\u659c\u6760)\u6765\u5c06\u5355\u4e2aRUN\u6307\u4ee4\u7ee7\u7eed\u5230\u4e0b\u4e00\u884c\u3002\u4f8b\u5982\uff0c\u8003\u8651\u8fd9\u4e24\u884c:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dockerfile"},"RUN /bin/bash -c 'source $HOME/.bashrc; \\\necho $HOME'\n")),(0,a.kt)("p",null,"\u5b83\u4eec\u5408\u5728\u4e00\u8d77\u76f8\u5f53\u4e8e\u8fd9\u4e00\u884c:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dockerfile"},"RUN /bin/bash -c 'source $HOME/.bashrc; echo $HOME'\n")),(0,a.kt)("p",null,"\u8981\u4f7f\u7528\u4e0d\u540c\u7684shell\uff0c\u800c\u4e0d\u662f' /bin/sh '\uff0c\u8bf7\u4f7f\u7528exec\u8868\u5355\u4f20\u5165\u6240\u9700\u7684shell\u3002\u4f8b\u5982:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dockerfile"},'RUN ["/bin/bash", "-c", "echo hello"]\n')),(0,a.kt)("h4",{id:"24-label"},"2.4 LABEL"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dockerfile"},"LABEL <key>=<value> <key>=<value> <key>=<value> ...\n")),(0,a.kt)("p",null,"LABEL\u6307\u4ee4\u5411\u955c\u50cf\u6dfb\u52a0\u5143\u6570\u636e\u3002 LABEL\u662f\u4e00\u4e2a\u952e\u503c\u5bf9\u3002 \u8981\u5728LABEL\u503c\u4e2d\u5305\u542b\u7a7a\u683c\uff0c\u8bf7\u50cf\u5728\u547d\u4ee4\u884c\u89e3\u6790\u4e2d\u90a3\u6837\u4f7f\u7528\u5f15\u53f7\u548c\u53cd\u659c\u6760\u3002 \u4e00\u4e9b\u7528\u6cd5\u793a\u4f8b:  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dockerfile"},'LABEL "com.example.vendor"="ACME Incorporated"\nLABEL com.example.label-with-value="foo"\nLABEL version="1.0"\nLABEL description="This text illustrates \\\nthat label-values can span multiple lines."\n\nLABEL multi.label1="value1" multi.label2="value2" other="value3"\n\nLABEL multi.label1="value1" \\\n      multi.label2="value2" \\\n      other="value3"\n')),(0,a.kt)("p",null,"\u57fa\u6620\u50cf\u6216\u7236\u6620\u50cf(FROM\u884c\u4e2d\u7684\u6620\u50cf)\u4e2d\u5305\u542b\u7684\u6807\u7b7e\u7531\u6620\u50cf\u7ee7\u627f\u3002 \u5982\u679c\u6807\u7b7e\u5df2\u7ecf\u5b58\u5728\uff0c\u4f46\u6709\u4e0d\u540c\u7684\u503c\uff0c\u5219\u6700\u8fd1\u5e94\u7528\u7684\u503c\u5c06\u8986\u76d6\u4ee5\u524d\u8bbe\u7f6e\u7684\u503c\u3002  "),(0,a.kt)("p",null,"\u8981\u67e5\u770b\u56fe\u50cf\u7684\u6807\u7b7e\uff0c\u4f7f\u7528docker image inspect\u547d\u4ee4\u3002 \u60a8\u53ef\u4ee5\u4f7f\u7528\u2014\u2014format\u9009\u9879\u53ea\u663e\u793a\u6807\u7b7e;  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "com.example.vendor": "ACME Incorporated",\n  "com.example.label-with-value": "foo",\n  "version": "1.0",\n  "description": "This text illustrates that label-values can span multiple lines.",\n  "multi.label1": "value1",\n  "multi.label2": "value2",\n  "other": "value3"\n}\n')),(0,a.kt)("h4",{id:"25-expose"},"2.5 EXPOSE"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dockerfile"},"EXPOSE <port> [<port>/<protocol>...]\n")),(0,a.kt)("p",null,"EXPOSE\u6307\u4ee4\u901a\u77e5Docker\u5bb9\u5668\u5728\u8fd0\u884c\u65f6\u4fa6\u542c\u6307\u5b9a\u7684\u7f51\u7edc\u7aef\u53e3\u3002 \u53ef\u4ee5\u6307\u5b9a\u7aef\u53e3\u76d1\u542c\u7684\u662fTCP\u8fd8\u662fUDP\uff0c\u5982\u679c\u6ca1\u6709\u6307\u5b9a\u534f\u8bae\uff0c\u9ed8\u8ba4\u4e3aTCP\u3002  "),(0,a.kt)("p",null,"EXPOSE\u6307\u4ee4\u5b9e\u9645\u4e0a\u5e76\u4e0d\u53d1\u5e03\u7aef\u53e3\u3002 \u5b83\u53ef\u4ee5\u4f5c\u4e3a\u6784\u5efa\u6620\u50cf\u7684\u4eba\u548c\u8fd0\u884c\u5bb9\u5668\u7684\u4eba\u4e4b\u95f4\u7684\u4e00\u79cd\u6587\u6863\uff0c\u8bf4\u660e\u8981\u53d1\u5e03\u54ea\u4e9b\u7aef\u53e3\u3002 \u8981\u5728\u8fd0\u884c\u5bb9\u5668\u65f6\u5b9e\u9645\u53d1\u5e03\u7aef\u53e3\uff0c\u53ef\u4ee5\u5728docker run\u4e0a\u4f7f\u7528-p\u6807\u5fd7\u6765\u53d1\u5e03\u548c\u6620\u5c04\u4e00\u4e2a\u6216\u591a\u4e2a\u7aef\u53e3\uff0c\u6216\u8005\u4f7f\u7528-p\u6807\u5fd7\u53d1\u5e03\u6240\u6709\u66b4\u9732\u7684\u7aef\u53e3\u5e76\u5c06\u5b83\u4eec\u6620\u5c04\u5230\u9ad8\u9636\u7aef\u53e3\u3002  \u7f3a\u7701\u60c5\u51b5\u4e0b\uff0cEXPOSE\u91c7\u7528TCP\u534f\u8bae\u3002 \u4f60\u4e5f\u53ef\u4ee5\u6307\u5b9aUDP:\u9009\u9879\u53ea\u663e\u793a\u6807\u7b7e;  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dockerfile"},"EXPOSE 80/udp\nEXPOSE 80/tcp\n")),(0,a.kt)("p",null,"\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u5982\u679c\u60a8\u5728\u8fd0\u884cdocker\u65f6\u4f7f\u7528-P\uff0c\u5219\u7aef\u53e3\u5c06\u5206\u522b\u5bf9TCP\u548cUDP\u516c\u5f00\u4e00\u6b21\u3002\u8bf7\u8bb0\u4f4f\uff0c-P\u5728\u4e3b\u673a\u4e0a\u4f7f\u7528\u4e00\u4e2a\u4e34\u65f6\u7684\u9ad8\u987a\u5e8f\u4e3b\u673a\u7aef\u53e3\uff0c\u56e0\u6b64TCP\u548cUDP\u7684\u7aef\u53e3\u4e0d\u76f8\u540c\u3002\u65e0\u8bbaEXPOSE\u8bbe\u7f6e\u5982\u4f55\uff0c\u60a8\u90fd\u53ef\u4ee5\u5728\u8fd0\u884c\u65f6\u4f7f\u7528-p\u6807\u5fd7\u8986\u76d6\u5b83\u4eec\u3002\u4f8b\u5982"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"}," docker run -p 80:80/tcp -p 80:80/udp ...\n")),(0,a.kt)("h4",{id:"26-env"},"2.6 ENV"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dockerfile"},"ENV <key>=<value> ...\n")),(0,a.kt)("p",null,"ENV\u6307\u4ee4\u8bbe\u7f6e\u73af\u5883\u53d8\u91cfkey value;\u3002\u8be5\u503c\u5c06\u5728\u6784\u5efa\u9636\u6bb5\u7684\u6240\u6709\u540e\u7eed\u6307\u4ee4\u7684\u73af\u5883\u4e2d\uff0c\u5e76\u4e14\u53ef\u4ee5\u5728\u8bb8\u591a\u6307\u4ee4\u4e2d\u5185\u8054\u66ff\u6362\u3002\u8be5\u503c\u5c06\u88ab\u89e3\u91ca\u4e3a\u5176\u4ed6\u73af\u5883\u53d8\u91cf\uff0c\u56e0\u6b64\u5982\u679c\u5f15\u53f7\u5b57\u7b26\u6ca1\u6709\u8f6c\u4e49\uff0c\u5b83\u4eec\u5c06\u88ab\u5220\u9664\u3002\u50cf\u547d\u4ee4\u884c\u89e3\u6790\u4e00\u6837\uff0c\u5f15\u53f7\u548c\u53cd\u659c\u6760\u53ef\u4ee5\u7528\u4e8e\u5728\u503c\u4e2d\u5305\u542b\u7a7a\u683c\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dockerfile"},'ENV MY_NAME="John Doe"\nENV MY_DOG=Rex\\ The\\ Dog\nENV MY_CAT=fluffy\n')),(0,a.kt)("p",null,"ENV\u53ef\u4ee5\u5728Dockerfile\u4e2d\u4f7f\u7528\u591a\u6b21"),(0,a.kt)("p",null,"\u5f53\u955c\u50cf\u8fd0\u884c\u5bb9\u5668\u65f6\uff0c\u4f7f\u7528ENV\u8bbe\u7f6e\u7684\u73af\u5883\u53d8\u91cf\u5c06\u6301\u7eed\u5b58\u5728\u3002\u60a8\u53ef\u4ee5\u4f7f\u7528docker inspect\u67e5\u770b\u503c\uff0c\u5e76\u4f7f\u7528docker run --env \\<key",">","=\\<value",">"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"ENV\u6307\u4ee4\u8fd8\u5141\u8bb8\u4f7f\u7528\u53e6\u4e00\u79cd\u8bed\u6cd5"),(0,a.kt)("pre",{parentName:"blockquote"},(0,a.kt)("code",{parentName:"pre"},"ENV MY_VAR my-value\n")),(0,a.kt)("p",{parentName:"blockquote"},"\u4ed6\u7684\u8bed\u6cd5\u4e0d\u5141\u8bb8\u5728\u4e00\u6761ENV\u6307\u4ee4\u4e2d\u8bbe\u7f6e\u591a\u4e2a\u73af\u5883\u53d8\u91cf\uff0c\u8fd9\u53ef\u80fd\u4f1a\u4ee4\u4eba\u56f0\u60d1\u3002\u4f8b\u5982\uff0c\u4e0b\u9762\u8bbe\u7f6e\u4e86\u4e00\u4e2a\u73af\u5883\u53d8\u91cf(ONE)\uff0c\u5176\u503c\u4e3a\u201cTWO= THREE=world\u201d:"),(0,a.kt)("pre",{parentName:"blockquote"},(0,a.kt)("code",{parentName:"pre"},"ENV ONE TWO= THREE=world\n\n"))),(0,a.kt)("h4",{id:"27-add"},"2.7 ADD"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'ADD [--chown=<user>:<group>] <src>... <dest>    1\nADD [--chown=<user>:<group>] ["<src>",... "<dest>"]   2\n')),(0,a.kt)("p",null,"\u5bf9\u4e8e\u5305\u542b\u7a7a\u683c\u7684\u8def\u5f84\uff0c\u4f7f\u7528\u7b2c\u4e8c\u79cd\u5f62\u5f0f"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note: --chown\u7279\u6027\u53ea\u652f\u6301\u7528\u4e8e\u6784\u5efaLinux\u5bb9\u5668\u7684Dockerfiles\uff0c\u800c\u4e0d\u9002\u7528\u4e8eWindows\u5bb9\u5668\u3002\u7531\u4e8e\u7528\u6237\u548c\u7ec4\u6240\u6709\u6743\u7684\u6982\u5ff5\u4e0d\u80fd\u5728Linux\u548cWindows\u4e4b\u95f4\u8f6c\u6362\uff0c\u4f7f\u7528/etc/passwd\u548c/etc/group\u5c06\u7528\u6237\u548c\u7ec4\u540d\u8f6c\u6362\u4e3aid\uff0c\u9650\u5236\u4e86\u8be5\u7279\u6027\u53ea\u80fd\u5728\u57fa\u4e8eLinux\u64cd\u4f5c\u7cfb\u7edf\u7684\u5bb9\u5668\u4e2d\u6709\u6548\u3002")),(0,a.kt)("h4",{id:"28-copy"},"2.8 COPY"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dockerfile"},'COPY [--chown=<user>:<group>] <src>... <dest>\nCOPY [--chown=<user>:<group>] ["<src>",... "<dest>"]\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note:"),(0,a.kt)("p",{parentName:"blockquote"},"--chown\u7279\u6027\u53ea\u652f\u6301\u7528\u4e8e\u6784\u5efaLinux\u5bb9\u5668\u7684Dockerfiles\uff0c\u800c\u4e0d\u9002\u7528\u4e8eWindows\u5bb9\u5668\u3002\u7531\u4e8e\u7528\u6237\u548c\u7ec4\u6240\u6709\u6743\u7684\u6982\u5ff5\u4e0d\u80fd\u5728Linux\u548cWindows\u4e4b\u95f4\u8f6c\u6362\uff0c\u4f7f\u7528/etc/passwd\u548c/etc/group\u5c06\u7528\u6237\u548c\u7ec4\u540d\u8f6c\u6362\u4e3aid\uff0c\u9650\u5236\u4e86\u8be5\u7279\u6027\u53ea\u80fd\u5728\u57fa\u4e8eLinux\u64cd\u4f5c\u7cfb\u7edf\u7684\u5bb9\u5668\u4e2d\u6709\u6548\u3002")),(0,a.kt)("h4",{id:"29-entrypoint"},"2.9 ENTRYPOINT"),(0,a.kt)("p",null,"\u4e24\u79cd\u683c\u5f0f\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'ENTRYPOINT ["executable", "param1", "param2"]\n\nENTRYPOINT command param1 param2\n')),(0,a.kt)("h4",{id:"210-volume"},"2.10 VOLUME"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dockerfile"},'VOLUME ["/data"]\n')),(0,a.kt)("p",null,"VOLUME\u6307\u4ee4\u4f7f\u7528\u6307\u5b9a\u7684\u540d\u79f0\u521b\u5efa\u4e00\u4e2a\u6302\u8f7d\u70b9\uff0c\u5e76\u5c06\u5176\u6807\u8bb0\u4e3a\u4fdd\u5b58\u6765\u81ea\u672c\u673a\u4e3b\u673a\u6216\u5176\u4ed6\u5bb9\u5668\u7684\u5916\u90e8\u6302\u8f7d\u5377\u3002\u53ef\u4ee5\u662fJSON\u6570\u7ec4\uff0cVOLUME ",'["/var/log/"]',"\uff0c\u4e5f\u53ef\u4ee5\u662f\u5e26\u591a\u4e2a\u53c2\u6570\u7684\u7eaf\u5b57\u7b26\u4e32\uff0c\u5982VOLUME /var/log\u6216VOLUME /var/log/ var/db"),(0,a.kt)("h4",{id:"211-user"},"2.11 USER"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dockerfile"},"USER <user>[:<group>]\n\nUSER <UID>[:<GID>]\n")),(0,a.kt)("h4",{id:"212-workdir"},"2.12 WORKDIR"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dockerfile"},"WORKDIR /path/to/workdir\n")),(0,a.kt)("p",null,"WORKDIR\u6307\u4ee4\u4e3aDockerfile\u4e2d\u8ddf\u968f\u5b83\u7684\u4efb\u4f55RUN\u3001CMD\u3001ENTRYPOINT\u3001COPY\u548cADD\u6307\u4ee4\u8bbe\u7f6e\u5de5\u4f5c\u76ee\u5f55\u3002\u5982\u679cWORKDIR\u4e0d\u5b58\u5728\uff0c\u5b83\u5c06\u88ab\u521b\u5efa\uff0c\u5373\u4f7f\u5b83\u6ca1\u6709\u5728\u4efb\u4f55\u540e\u7eedDockerfile\u6307\u4ee4\u4e2d\u4f7f\u7528\u3002"),(0,a.kt)("p",null,"WORKDIR\u6307\u4ee4\u53ef\u4ee5\u5728Dockerfile\u4e2d\u591a\u6b21\u4f7f\u7528\u3002\u5982\u679c\u63d0\u4f9b\u4e86\u4e00\u4e2a\u76f8\u5bf9\u8def\u5f84\uff0c\u5b83\u5c06\u76f8\u5bf9\u4e8e\u524d\u4e00\u4e2aWORKDIR\u6307\u4ee4\u7684\u8def\u5f84\u3002\u4f8b\u5982:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dockerfile"},"WORKDIR /a\nWORKDIR b\nWORKDIR c\nRUN pwd\n")),(0,a.kt)("p",null,"pwd\u663e\u793a\u7684\u503c\u662f\uff1a ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"/a/b/c"))," "),(0,a.kt)("h4",{id:"213-arg"},"2.13 ARG"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dockerfile"},"ARG <name>[=<default value>]\n")),(0,a.kt)("p",null,"ARG\u5b9a\u4e49\u4e86\u4e00\u4e2a\u53d8\u91cf\uff0c\u914d\u5408",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"docker build --build-arg <varname>=<varvalue>"))," "),(0,a.kt)("h4",{id:"214-onbuild"},"2.14 ONBUILD"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dockerfile"},"ONBUILD <INSTRUCTION>\n")),(0,a.kt)("h4",{id:"215-stopsignal"},"2.15 STOPSIGNAL"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dockerfile"},"STOPSIGNAL signal\n")),(0,a.kt)("h4",{id:"216-healthcheck"},"2.16 HEALTHCHECK"),(0,a.kt)("p",null,"\u683c\u5f0f\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"HEALTHCHECK [\u9009\u9879] CMD <\u547d\u4ee4>"),"\uff1a\u8bbe\u7f6e\u68c0\u67e5\u5bb9\u5668\u5065\u5eb7\u72b6\u51b5\u7684\u547d\u4ee4"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"HEALTHCHECK NONE"),"\uff1a\u5982\u679c\u57fa\u7840\u955c\u50cf\u6709\u5065\u5eb7\u68c0\u67e5\u6307\u4ee4\uff0c\u4f7f\u7528\u8fd9\u884c\u53ef\u4ee5\u5c4f\u853d\u6389\u5176\u5065\u5eb7\u68c0\u67e5\u6307\u4ee4")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"HEALTHCHECK")," \u6307\u4ee4\u662f\u544a\u8bc9 Docker \u5e94\u8be5\u5982\u4f55\u8fdb\u884c\u5224\u65ad\u5bb9\u5668\u7684\u72b6\u6001\u662f\u5426\u6b63\u5e38\uff0c\u8fd9\u662f Docker 1.12 \u5f15\u5165\u7684\u65b0\u6307\u4ee4\u3002"),(0,a.kt)("p",null,"\u5728\u6ca1\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"HEALTHCHECK")," \u6307\u4ee4\u524d\uff0cDocker \u5f15\u64ce\u53ea\u53ef\u4ee5\u901a\u8fc7\u5bb9\u5668\u5185\u4e3b\u8fdb\u7a0b\u662f\u5426\u9000\u51fa\u6765\u5224\u65ad\u5bb9\u5668\u662f\u5426\u72b6\u6001\u5f02\u5e38\u3002\u5f88\u591a\u60c5\u51b5\u4e0b\u8fd9\u6ca1\u95ee\u9898\uff0c\u4f46\u662f\u5982\u679c\u7a0b\u5e8f\u8fdb\u5165\u6b7b\u9501\u72b6\u6001\uff0c\u6216\u8005\u6b7b\u5faa\u73af\u72b6\u6001\uff0c\u5e94\u7528\u8fdb\u7a0b\u5e76\u4e0d\u9000\u51fa\uff0c\u4f46\u662f\u8be5\u5bb9\u5668\u5df2\u7ecf\u65e0\u6cd5\u63d0\u4f9b\u670d\u52a1\u4e86\u3002\u5728 1.12 \u4ee5\u524d\uff0cDocker \u4e0d\u4f1a\u68c0\u6d4b\u5230\u5bb9\u5668\u7684\u8fd9\u79cd\u72b6\u6001\uff0c\u4ece\u800c\u4e0d\u4f1a\u91cd\u65b0\u8c03\u5ea6\uff0c\u5bfc\u81f4\u53ef\u80fd\u4f1a\u6709\u90e8\u5206\u5bb9\u5668\u5df2\u7ecf\u65e0\u6cd5\u63d0\u4f9b\u670d\u52a1\u4e86\u5374\u8fd8\u5728\u63a5\u53d7\u7528\u6237\u8bf7\u6c42\u3002"),(0,a.kt)("p",null,"\u800c\u81ea 1.12 \u4e4b\u540e\uff0cDocker \u63d0\u4f9b\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"HEALTHCHECK")," \u6307\u4ee4\uff0c\u901a\u8fc7\u8be5\u6307\u4ee4\u6307\u5b9a\u4e00\u884c\u547d\u4ee4\uff0c\u7528\u8fd9\u884c\u547d\u4ee4\u6765\u5224\u65ad\u5bb9\u5668\u4e3b\u8fdb\u7a0b\u7684\u670d\u52a1\u72b6\u6001\u662f\u5426\u8fd8\u6b63\u5e38\uff0c\u4ece\u800c\u6bd4\u8f83\u771f\u5b9e\u7684\u53cd\u5e94\u5bb9\u5668\u5b9e\u9645\u72b6\u6001\u3002"),(0,a.kt)("p",null,"\u5f53\u5728\u4e00\u4e2a\u955c\u50cf\u6307\u5b9a\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"HEALTHCHECK")," \u6307\u4ee4\u540e\uff0c\u7528\u5176\u542f\u52a8\u5bb9\u5668\uff0c\u521d\u59cb\u72b6\u6001\u4f1a\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"starting"),"\uff0c\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"HEALTHCHECK")," \u6307\u4ee4\u68c0\u67e5\u6210\u529f\u540e\u53d8\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"healthy"),"\uff0c\u5982\u679c\u8fde\u7eed\u4e00\u5b9a\u6b21\u6570\u5931\u8d25\uff0c\u5219\u4f1a\u53d8\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"unhealthy"),"\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"HEALTHCHECK")," \u652f\u6301\u4e0b\u5217\u9009\u9879\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--interval=<\u95f4\u9694>"),"\uff1a\u4e24\u6b21\u5065\u5eb7\u68c0\u67e5\u7684\u95f4\u9694\uff0c\u9ed8\u8ba4\u4e3a 30 \u79d2\uff1b"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--timeout=<\u65f6\u957f>"),"\uff1a\u5065\u5eb7\u68c0\u67e5\u547d\u4ee4\u8fd0\u884c\u8d85\u65f6\u65f6\u95f4\uff0c\u5982\u679c\u8d85\u8fc7\u8fd9\u4e2a\u65f6\u95f4\uff0c\u672c\u6b21\u5065\u5eb7\u68c0\u67e5\u5c31\u88ab\u89c6\u4e3a\u5931\u8d25\uff0c\u9ed8\u8ba4 30 \u79d2\uff1b"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--retries=<\u6b21\u6570>"),"\uff1a\u5f53\u8fde\u7eed\u5931\u8d25\u6307\u5b9a\u6b21\u6570\u540e\uff0c\u5219\u5c06\u5bb9\u5668\u72b6\u6001\u89c6\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"unhealthy"),"\uff0c\u9ed8\u8ba4 3 \u6b21\u3002")),(0,a.kt)("p",null,"\u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"CMD"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"ENTRYPOINT")," \u4e00\u6837\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"HEALTHCHECK")," \u53ea\u53ef\u4ee5\u51fa\u73b0\u4e00\u6b21\uff0c\u5982\u679c\u5199\u4e86\u591a\u4e2a\uff0c\u53ea\u6709\u6700\u540e\u4e00\u4e2a\u751f\u6548\u3002"),(0,a.kt)("p",null,"\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"HEALTHCHECK [\u9009\u9879] CMD")," \u540e\u9762\u7684\u547d\u4ee4\uff0c\u683c\u5f0f\u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"ENTRYPOINT")," \u4e00\u6837\uff0c\u5206\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"shell")," \u683c\u5f0f\uff0c\u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"exec")," \u683c\u5f0f\u3002\u547d\u4ee4\u7684\u8fd4\u56de\u503c\u51b3\u5b9a\u4e86\u8be5\u6b21\u5065\u5eb7\u68c0\u67e5\u7684\u6210\u529f\u4e0e\u5426\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"0"),"\uff1a\u6210\u529f\uff1b",(0,a.kt)("inlineCode",{parentName:"p"},"1"),"\uff1a\u5931\u8d25\uff1b",(0,a.kt)("inlineCode",{parentName:"p"},"2"),"\uff1a\u4fdd\u7559\uff0c\u4e0d\u8981\u4f7f\u7528\u8fd9\u4e2a\u503c\u3002"),(0,a.kt)("h4",{id:"217-shell"},"2.17 SHELL"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dockerfile"},'SHELL ["executable", "parameters"]\n')),(0,a.kt)("p",null,"\u53c2\u8003\u6587\u6863\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/reference/builder/"},"https://docs.docker.com/engine/reference/builder/"))))}d.isMDXComponent=!0}}]);