"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[3398],{6331:(n,i,e)=>{e.r(i),e.d(i,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var s=e(4848),t=e(8453);const r={title:"\u5982\u4f55\u5feb\u901f\u521b\u5efaSpring Boot\u9879\u76ee",linkTitle:"\u5feb\u901f\u521b\u5efaSpring Boot\u9879\u76ee",date:new Date("2022-02-10T00:00:00.000Z"),weight:202202102218},o=void 0,l={id:"spring/spring-boot/samples/fast-create-springboot-project",title:"\u5982\u4f55\u5feb\u901f\u521b\u5efaSpring Boot\u9879\u76ee",description:"Spring Boot\u9879\u76ee\u521b\u5efa\u5728\u5e73\u65f6\u5f00\u53d1\u548c\u5b66\u4e60\u8fc7\u7a0b\u4e2d\u975e\u5e38\u5e38\u89c1\uff0c\u4f46\u662f\u5982\u4f55\u5feb\u901f\u7684\u521b\u5efaSpring Boot\u9879\u76ee\u4f60\u662f\u5426\u77e5\u9053\uff0c\u4eca\u5929\u6765\u4ecb\u7ecd\u51e0\u79cd\u5feb\u901f\u521b\u5efaSpring Boot\u9879\u76ee\u65b9\u5f0f\u3002",source:"@site/docs/spring/spring-boot/samples/fast-create-springboot-project.md",sourceDirName:"spring/spring-boot/samples",slug:"/spring/spring-boot/samples/fast-create-springboot-project",permalink:"/docs/spring/spring-boot/samples/fast-create-springboot-project",draft:!1,unlisted:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/spring/spring-boot/samples/fast-create-springboot-project.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1719738085e3,frontMatter:{title:"\u5982\u4f55\u5feb\u901f\u521b\u5efaSpring Boot\u9879\u76ee",linkTitle:"\u5feb\u901f\u521b\u5efaSpring Boot\u9879\u76ee",date:"2022-02-10T00:00:00.000Z",weight:202202102218},sidebar:"springboot",previous:{title:"Overview",permalink:"/docs/spring/spring-boot"},next:{title:"Spring Rest API\u6570\u636e\u4ea4\u4e92\u9664\u4e86JSON\u8fd8\u6709Protobuf",permalink:"/docs/spring/spring-boot/samples/spring-rest-api-with-protobuf"}},p={},c=[{value:"1. Spring \u5b98\u65b9\u811a\u624b\u67b6\u5b98\u7f51",id:"1-spring-\u5b98\u65b9\u811a\u624b\u67b6\u5b98\u7f51",level:3},{value:"2. \u963f\u91cc\u4e91Spring Boot\u811a\u624b\u67b6",id:"2-\u963f\u91cc\u4e91spring-boot\u811a\u624b\u67b6",level:3},{value:"3. IDEA Spring\u811a\u624b\u67b6",id:"3-idea-spring\u811a\u624b\u67b6",level:3},{value:"4. \u81ea\u5b9a\u4e49Maven\u811a\u624b\u67b6",id:"4-\u81ea\u5b9a\u4e49maven\u811a\u624b\u67b6",level:3},{value:"5.\u603b\u7ed3",id:"5\u603b\u7ed3",level:3}];function a(n){const i={a:"a",blockquote:"blockquote",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.p,{children:"Spring Boot\u9879\u76ee\u521b\u5efa\u5728\u5e73\u65f6\u5f00\u53d1\u548c\u5b66\u4e60\u8fc7\u7a0b\u4e2d\u975e\u5e38\u5e38\u89c1\uff0c\u4f46\u662f\u5982\u4f55\u5feb\u901f\u7684\u521b\u5efaSpring Boot\u9879\u76ee\u4f60\u662f\u5426\u77e5\u9053\uff0c\u4eca\u5929\u6765\u4ecb\u7ecd\u51e0\u79cd\u5feb\u901f\u521b\u5efaSpring Boot\u9879\u76ee\u65b9\u5f0f\u3002"}),"\n",(0,s.jsx)(i.h3,{id:"1-spring-\u5b98\u65b9\u811a\u624b\u67b6\u5b98\u7f51",children:"1. Spring \u5b98\u65b9\u811a\u624b\u67b6\u5b98\u7f51"}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"\u5b98\u7f51\u5730\u5740"}),"\uff1a",(0,s.jsx)(i.a,{href:"https://start.spring.io/",children:"https://start.spring.io/"})]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:"https://raw.githubusercontent.com/mxsm/picture/main/springboot/image-20220210222122414.png",alt:"image-20220210222122414"})}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsx)(i.li,{children:"\u9009\u62e9\u9879\u76ee\u7c7b\u578b\uff0cMaven\u9879\u76ee\uff0c\u8fd8\u662fGradle\u9879\u76ee"}),"\n",(0,s.jsx)(i.li,{children:"\u8bed\u8a00\u9009\u62e9"}),"\n",(0,s.jsx)(i.li,{children:"Spring Boot\u7248\u672c\uff08\u7248\u672c\u6bd4\u8f83\u65b0\uff0c\u5305\u542b\u6700\u65b0\u7684\u7248\u672c\uff09"}),"\n",(0,s.jsx)(i.li,{children:"\u9879\u76ee\u7684\u5143\u6570\u636e\uff0c\u8fd9\u4e2a\u4f7f\u7528\u8005\u53ef\u4ee5\u624b\u52a8\u8f93\u5165"}),"\n",(0,s.jsx)(i.li,{children:"\u6253\u5305\u7c7b\u578b"}),"\n",(0,s.jsx)(i.li,{children:"Java\u7248\u672c(\u9ed8\u8ba4\u662f11)\uff0c\u53ef\u4ee5\u6839\u636e\u7528\u6237\u7684\u9700\u6c42\u81ea\u5df1\u9009"}),"\n",(0,s.jsx)(i.li,{children:"\u53ef\u4ee5\u6839\u636e\u7528\u6237\u7684\u9879\u76ee\u7684\u7c7b\u578b\u548c\u4f9d\u8d56\u60c5\u51b5\u81ea\u5df1\u5224\u65ad\u7528\u6237\u9700\u8981\u589e\u52a0\u54ea\u4e9b\u4f9d\u8d56"}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"\u8fd9\u4e9b\u586b\u597d\u540e\u76f4\u63a5\u751f\u6210\u4e0b\u8f7d\u7136\u540e\u89e3\u538b\u5bfc\u5165\u5230\u5f00\u53d1\u5de5\u5177"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"\u7279\u70b9\uff1a"})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"\u63d0\u4f9b\u7684Spring Boot\u7248\u672c\u6bd4\u8f83\u65b0"}),"\n",(0,s.jsx)(i.li,{children:"\u652f\u6301\u5bf9\u4e0d\u540c\u8bed\u8a00\u7684\u9009\u62e9"}),"\n",(0,s.jsx)(i.li,{children:"\u589e\u52a0\u7684\u4f9d\u8d56\u4e3b\u8981\u662fSpring\u5b98\u7f51\u7684\u4e00\u4e9b\u6846\u67b6"}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"2-\u963f\u91cc\u4e91spring-boot\u811a\u624b\u67b6",children:"2. \u963f\u91cc\u4e91Spring Boot\u811a\u624b\u67b6"}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"\u5b98\u7f51\u5730\u5740\uff1a"})," ",(0,s.jsx)(i.a,{href:"https://start.aliyun.com/bootstrap.html",children:"https://start.aliyun.com/bootstrap.html"})]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:"https://raw.githubusercontent.com/mxsm/picture/main/springboot/image-20220210222201193.png",alt:"image-20220210222201193"})}),"\n",(0,s.jsx)(i.p,{children:"\u963f\u91cc\u4e91\u7684\u8fd9\u4e2aSpring Boot\u5b98\u7f51\u811a\u624b\u67b6\u548cSpring\u5b98\u7f51\u7684\u811a\u624b\u67b6\u5927\u4f53\u76f8\u540c\u4f46\u662f\u4e5f\u6709\u4e0d\u540c\u7684\u5730\u65b9\u3002"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Spring Boot\u7684\u7248\u672c\u76f8\u5bf9\u6ca1\u6709\u90a3\u4e48\u7684\u6fc0\u8fdb\uff0c\u7248\u672c\u76f8\u5bf9\u8f83\u843d\u540e\u3002\u6ca1\u6709\u6700\u65b0\u7684SpringBoot\u7248\u672c"}),"\n",(0,s.jsx)(i.li,{children:"\u963f\u91cc\u4e91\u7684\u63d0\u4f9b\u5e94\u7528\u67b6\u6784\u7684\u9009\u62e9\uff0c\u540c\u65f6\u53ef\u4ee5\u9009\u62e9\u4e0b\u9762\u7684\u76f8\u5173\u8054\u7684\u793a\u4f8b\u4ee3\u7801"}),"\n",(0,s.jsx)(i.li,{children:"\u7ec4\u4ef6\u4f9d\u8d56\u76f8\u5bf9\u6765\u8bf4\u66f4\u52a0\u591a\uff0c\u5f53\u7136\u5305\u542b\u4e86\u963f\u91cc\u7684\u5168\u5bb6\u6876\uff0c\u4e5f\u5305\u542b\u4e86\u4e00\u4e9b\u6d4b\u8bd5\u7b49\u7b49\u76f8\u5173\u4f9d\u8d56\u53ef\u4ee5\u63d0\u4f9b\u9009\u62e9"}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"\u540c\u6837\u751f\u6210\u540e\u89e3\u538b\u7136\u540e\u5bfc\u5165\u5f00\u53d1\u5de5\u5177\u5c31\u53ef\u4ee5\u4e86"}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsx)(i.p,{children:"Tips: \u5982\u679cSpring\u7684\u811a\u624b\u67b6\u5b98\u7f51\u4f60\u8bbf\u95ee\u4e0d\u662f\u90a3\u4e48\u7684\u6d41\u7545\uff0c\u5efa\u8bae\u7528\u963f\u91cc\u4e91\u7684\u3002\u81f3\u5c11\u8bbf\u95ee\u901f\u5ea6\u6ca1\u6709\u95ee\u9898"}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"3-idea-spring\u811a\u624b\u67b6",children:"3. IDEA Spring\u811a\u624b\u67b6"}),"\n",(0,s.jsx)(i.p,{children:"\u5728IDEA\u7684\u5de5\u7a0b\u65b0\u5efa\u754c\u9762\u6709\u4e00\u4e2aSpring Initializr,\u5982\u4e0b\u56fe"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:"https://raw.githubusercontent.com/mxsm/picture/main/springboot/image-20220210222336099.png",alt:"image-20220210222336099"})}),"\n",(0,s.jsx)(i.p,{children:"\u8fd9\u4e2a\u4f7f\u7528\u7684\u662fSpring\u5b98\u7f51\u811a\u624b\u67b6\u6a21\u677f\uff0c\u76f4\u63a5\u96c6\u6210\u5230\u4e86\u5f00\u53d1\u5de5\u5177\u3002\u5728\u70b9\u51fbNext\u540e"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:"https://raw.githubusercontent.com/mxsm/picture/main/springboot/image-20220210222538710.png",alt:"image-20220210222538710"})}),"\n",(0,s.jsx)(i.p,{children:"\u5c55\u793a\u4e86\u4f9d\u8d56\u7684\u9009\u62e9\u3002\u5c31\u662f\u628a\u5b98\u7f51\u7684\u529f\u80fd\u642c\u5230\u5f00\u53d1\u5de5\u5177"}),"\n",(0,s.jsx)(i.h3,{id:"4-\u81ea\u5b9a\u4e49maven\u811a\u624b\u67b6",children:"4. \u81ea\u5b9a\u4e49Maven\u811a\u624b\u67b6"}),"\n",(0,s.jsxs)(i.p,{children:["\u5982\u4f55\u81ea\u5b9a\u4e49Maven\u811a\u624b\u67b6\u53ef\u4ee5\u770b\u4e00\u4e0b\u6211\u7684\u8fd9\u7bc7\u6587\u7ae0\u300a",(0,s.jsx)(i.a,{href:"https://juejin.cn/post/6844904160299581454",children:"Maven-\u81ea\u5b9a\u4e49archetype"}),"\u300b\uff0c\u4f7f\u7528\u8fd9\u79cd\u65b9\u6cd5\u7684\u597d\u5904\uff1a"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"SpringBoot\u7248\u672c\u548c\u4f9d\u8d56\u90fd\u53ef\u4ee5\u81ea\u5df1\u5b9a\u4e49\uff0c\u8fd8\u53ef\u4ee5\u81ea\u5b9a\u4e49\u521d\u59cb\u5316\u4ee3\u7801\u7ed3\u6784"}),"\n",(0,s.jsx)(i.li,{children:"\u96c6\u6210\u5230IDEA\u5f00\u53d1\u5de5\u5177\u4e2d\uff0c\u53ea\u9700\u8981\u7b80\u5355\u7684\u4e0b\u4e00\u6b65\u4e0b\u4e00\u6b65\u5c31\u80fd\u751f\u6210"}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"\u4f46\u662f\u8fd9\u6837\u4e5f\u6709\u7f3a\u70b9\uff1a"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"\u6bcf\u6b21\u9700\u8981\u4fee\u6539\u7248\u672c\u53d1\u5e03"}),"\n",(0,s.jsx)(i.li,{children:"\u53ea\u662f\u5f00\u53d1Maven\u7248\u672c"}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"5\u603b\u7ed3",children:"5.\u603b\u7ed3"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"\u4ece\u751f\u6210\u7684\u65b9\u5f0f\u6765\u770b\u4e3b\u8981\u5206\u6210\u7f51\u9875\u548c\u5f00\u53d1\u5de5\u5177\uff0c\u7f51\u9875\u751f\u6210\u7684\u9700\u8981\u5bfc\u5165\u5f00\u53d1\u5de5\u5177\u624d\u80fd\u8fdb\u884c\u4e0b\u4e00\u6b65\u5f00\u53d1\uff0c\u5f00\u53d1\u5de5\u5177\u751f\u6210\u76f4\u63a5\u5c31\u751f\u6210\u4e86"}),"\n",(0,s.jsx)(i.li,{children:"\u7f51\u9875\u751f\u6210\u5982\u679c\u8bbf\u95eeSpring\u5b98\u7f51\u6162\uff0c\u5efa\u8bae\u76f4\u63a5\u4f7f\u7528\u963f\u91cc\u4e91\u7684\u7f51\u9875\u751f\u6210"}),"\n",(0,s.jsx)(i.li,{children:"\u81ea\u5b9a\u4e49\u9700\u8981\u5f00\u53d1\u6bd4\u8f83\u7e41\u7410\uff0c\u4e0d\u9002\u5408\u5b66\u4e60\u8fc7\u7a0b\u7684\u5feb\u901f\u642d\u5efa\u3002\u9002\u5408\u516c\u53f8"}),"\n"]}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsx)(i.p,{children:"\u6211\u662f\u8682\u8681\u80cc\u5927\u8c61\uff0c\u6587\u7ae0\u5bf9\u4f60\u6709\u5e2e\u52a9\u70b9\u8d5e\u5173\u6ce8\u6211\uff0c\u6587\u7ae0\u6709\u4e0d\u6b63\u786e\u7684\u5730\u65b9\u8bf7\u60a8\u65a7\u6b63\u7559\u8a00\u8bc4\u8bba~\u8c22\u8c22\uff01"}),"\n"]})]})}function d(n={}){const{wrapper:i}={...(0,t.R)(),...n.components};return i?(0,s.jsx)(i,{...n,children:(0,s.jsx)(a,{...n})}):a(n)}},8453:(n,i,e)=>{e.d(i,{R:()=>o,x:()=>l});var s=e(6540);const t={},r=s.createContext(t);function o(n){const i=s.useContext(r);return s.useMemo((function(){return"function"==typeof n?n(i):{...i,...n}}),[i,n])}function l(n){let i;return i=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:o(n.components),s.createElement(r.Provider,{value:i},n.children)}}}]);