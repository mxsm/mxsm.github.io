"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[4083],{5142:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>o,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var s=i(4848),t=i(8453);const a={title:"Windows 11 + WSL(ubuntu 20.04) + CLion(2023.3.4) \u7f16\u8bd1OpenJDK17",sidebar_label:"Rust\u57fa\u672c\u6570\u636e\u7c7b\u578b",linkTitle:"Windows 11 + WSL(ubuntu 20.04) + CLion(2023.3.4) \u7f16\u8bd1OpenJDK17",weight:202403042229,description:"Windows 11 + WSL(ubuntu 20.04) + CLion(2023.3.4) \u7f16\u8bd1OpenJDK17"},r=void 0,l={id:"java/openjdk/source/howto_build_jdk",title:"Windows 11 + WSL(ubuntu 20.04) + CLion(2023.3.4) \u7f16\u8bd1OpenJDK17",description:"Windows 11 + WSL(ubuntu 20.04) + CLion(2023.3.4) \u7f16\u8bd1OpenJDK17",source:"@site/docs/java/openjdk/source/01-howto_build_jdk.md",sourceDirName:"java/openjdk/source",slug:"/java/openjdk/source/howto_build_jdk",permalink:"/docs/java/openjdk/source/howto_build_jdk",draft:!1,unlisted:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/java/openjdk/source/01-howto_build_jdk.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1719738085e3,sidebarPosition:1,frontMatter:{title:"Windows 11 + WSL(ubuntu 20.04) + CLion(2023.3.4) \u7f16\u8bd1OpenJDK17",sidebar_label:"Rust\u57fa\u672c\u6570\u636e\u7c7b\u578b",linkTitle:"Windows 11 + WSL(ubuntu 20.04) + CLion(2023.3.4) \u7f16\u8bd1OpenJDK17",weight:202403042229,description:"Windows 11 + WSL(ubuntu 20.04) + CLion(2023.3.4) \u7f16\u8bd1OpenJDK17"},sidebar:"openjdk",previous:{title:"Rust \u57fa\u672c\u6982\u5ff5",permalink:"/docs/java/openjdk/source"}},c={},d=[{value:"1. \u524d\u8a00",id:"1-\u524d\u8a00",level:2},{value:"2. \u51c6\u5907\u5de5\u4f5c",id:"2-\u51c6\u5907\u5de5\u4f5c",level:2},{value:"2.1 \u4e0b\u8f7dOpenJDK\u6e90\u7801",id:"21-\u4e0b\u8f7dopenjdk\u6e90\u7801",level:3},{value:"2.2 \u5b89\u88c5OpenJDK-17",id:"22-\u5b89\u88c5openjdk-17",level:3},{value:"3. \u7f16\u8bd1OpenJDK",id:"3-\u7f16\u8bd1openjdk",level:2},{value:"3.1 \u6267\u884c\u7f16\u8bd1\u547d\u4ee4",id:"31-\u6267\u884c\u7f16\u8bd1\u547d\u4ee4",level:3},{value:"3.2 \u6784\u5efaimages",id:"32-\u6784\u5efaimages",level:3},{value:"4. \u5bfc\u5165CLion",id:"4-\u5bfc\u5165clion",level:2},{value:"5.\u914d\u7f6e\u8c03\u8bd5",id:"5\u914d\u7f6e\u8c03\u8bd5",level:2}];function m(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"1-\u524d\u8a00",children:"1. \u524d\u8a00"}),"\n",(0,s.jsx)(n.p,{children:"\u4e3a\u4e86\u6df1\u5165\u7684\u7406\u89e3JVM\uff0c\u6211\u4eec\u4f7f\u7528JDK\u7684\u6e90\u7801\u6765\u5bfc\u5165CLion\u5f00\u53d1\u5de5\u5177\u81ea\u5df1\u7f16\u8bd1JDK.\u4e0b\u9762\u4f7f\u7528\u7684\u73af\u5883\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"windows11"}),"\n",(0,s.jsx)(n.li,{children:"WSL2(ubuntu 20.04)"}),"\n",(0,s.jsx)(n.li,{children:"CLion(2023.3.4)"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"2-\u51c6\u5907\u5de5\u4f5c",children:"2. \u51c6\u5907\u5de5\u4f5c"}),"\n",(0,s.jsx)(n.h3,{id:"21-\u4e0b\u8f7dopenjdk\u6e90\u7801",children:"2.1 \u4e0b\u8f7dOpenJDK\u6e90\u7801"}),"\n",(0,s.jsxs)(n.p,{children:["\u4ece",(0,s.jsx)(n.a,{href:"https://github.com/",children:"github"}),"\u4e0a\u4e0b\u8f7d",(0,s.jsx)(n.a,{href:"https://github.com/openjdk/jdk",children:"OpenJDK"}),"\u6e90\u7801\u5230\u672c\u5730"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"$ git clone https://github.com/openjdk/jdk.git\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://raw.githubusercontent.com/mxsm/picture/main/rocketmq-rust/namesrvimage-20240304223850905.png",alt:"image-20240304223850905"})}),"\n",(0,s.jsx)(n.p,{children:"\u5207\u6362\u5230jdk17\u7684tag\u7248\u672c"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"$ git checkout tags/jdk-17+34 -b jdk-17\n"})}),"\n",(0,s.jsx)(n.h3,{id:"22-\u5b89\u88c5openjdk-17",children:"2.2 \u5b89\u88c5OpenJDK-17"}),"\n",(0,s.jsx)(n.p,{children:"\u5347\u7ea7Ubuntu\u8f6f\u4ef6\u8d44\u6e90\u5e93"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"$ sudo apt update && sudo apt upgrade -y\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u5b89\u88c5OpenJDK"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"$ sudo apt-get install openjdk-17-jdk\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u5b8c\u6210\u4e0a\u8ff0\u51c6\u5907\u5de5\u4f5c\u540e\u8fdb\u884cOpenJDK\u7f16\u8bd1"}),"\n",(0,s.jsx)(n.h2,{id:"3-\u7f16\u8bd1openjdk",children:"3. \u7f16\u8bd1OpenJDK"}),"\n",(0,s.jsx)(n.h3,{id:"31-\u6267\u884c\u7f16\u8bd1\u547d\u4ee4",children:"3.1 \u6267\u884c\u7f16\u8bd1\u547d\u4ee4"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"$ bash configure --enable-debug --with-jvm-variants=server --build=x86_64-unknown-linux-gnu\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u7f16\u8bd1\u6210\u529f\uff1a"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://raw.githubusercontent.com/mxsm/picture/main/java/jvmimage-20240305220618200.png",alt:"image-20240305220618200"})}),"\n",(0,s.jsx)(n.p,{children:"\u6267\u884c\u7f16\u8bd1\u547d\u4ee4\u7684\u65f6\u5019\u53ef\u80fd\u4f1a\u9047\u5230\u4e0b\u9762\u7684\u95ee\u9898\uff0c\u9488\u5bf9\u4e0b\u9762\u7684\u95ee\u9898\u8fdb\u884c\u4e00\u4e00\u7684\u89e3\u51b3\u3002"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u95ee\u98981\uff1aerror: The path of BOOT_JDK"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://raw.githubusercontent.com/mxsm/picture/main/java/jvmimage-20240304225208518.png",alt:"image-20240304225208518"})}),"\n",(0,s.jsx)(n.p,{children:"\u4f7f\u7528\u7684\u662f\u76f4\u63a5\u901a\u8fc7\u547d\u4ee4\u8fdb\u884c\u5b89\u88c5\uff0c\u8fd9\u91cc\u9700\u8981\u5c06\u4e4b\u524d\u5b89\u88c5\u7684JDK17\u914d\u7f6e\u4ed4path\u91cc\u9762\u3002 \u4f7f\u7528\u547d\u4ee4\u67e5\u770b\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"$ update-alternatives --config java\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://raw.githubusercontent.com/mxsm/picture/main/java/jvmimage-20240304225613762.png",alt:"image-20240304225613762"})}),"\n",(0,s.jsx)(n.p,{children:"\u914d\u7f6epath:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://raw.githubusercontent.com/mxsm/picture/main/java/jvmimage-20240305213605426.png",alt:"image-20240305213605426"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u95ee\u98982\uff1aerror: Cannot locate a valid Visual Studio installation"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://raw.githubusercontent.com/mxsm/picture/main/java/jvmimage-20240305214010469.png",alt:"image-20240305214010469"})}),"\n",(0,s.jsx)(n.p,{children:"\u547d\u4ee4\u589e\u52a0"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"$  bash configure --build=x86_64-unknown-linux-gnu\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u95ee\u98983\uff1a error: Could not find all X11 headers"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://raw.githubusercontent.com/mxsm/picture/main/java/jvmimage-20240305214845676.png",alt:"image-20240305214845676"})}),"\n",(0,s.jsx)(n.p,{children:"\u6267\u884c\u4e0b\u9762\u547d\u4ee4\u5b89\u88c5\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"sudo apt-get install libxrandr-dev\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u95ee\u98984\uff1aerror: Could not find cups!"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://raw.githubusercontent.com/mxsm/picture/main/java/jvmimage-20240305215318622.png",alt:"image-20240305215318622"})}),"\n",(0,s.jsx)(n.p,{children:"\u6267\u884c\u547d\u4ee4\u5b89\u88c5\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"sudo apt-get install -y libcups2-dev\n"})}),"\n",(0,s.jsx)(n.h3,{id:"32-\u6784\u5efaimages",children:"3.2 \u6784\u5efaimages"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"$ make images CONF=linux-x86_64-server-fastdebug\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://raw.githubusercontent.com/mxsm/picture/main/java/jvmimage-20240305221701199.png",alt:"image-20240305221701199"})}),"\n",(0,s.jsx)(n.p,{children:"\u7f16\u8bd1\u6210\u529f\uff1a"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://raw.githubusercontent.com/mxsm/picture/main/java/jvmimage-20240305222919918.png",alt:"image-20240305222919918"})}),"\n",(0,s.jsx)(n.h2,{id:"4-\u5bfc\u5165clion",children:"4. \u5bfc\u5165CLion"}),"\n",(0,s.jsxs)(n.p,{children:["\u8fd0\u884c\u547d\u4ee4\u751f\u6210\u66f4\u65b0",(0,s.jsx)(n.strong,{children:"compile_commands.json"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"$ make compile-commands CONF=linux-x86_64-server-fastdebug\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u8fd9\u4e2a\u4f1a\u751f\u6210\u4ed4build\u5bf9\u5e94\u7684\u76ee\u5f55\u4e2d"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://raw.githubusercontent.com/mxsm/picture/main/java/jvmimage-20240305231622810.png",alt:"image-20240305231622810"})}),"\n",(0,s.jsxs)(n.p,{children:["\u7136\u540e\u4f7f\u7528Clion\u901a\u8fc7\u9009\u62e9\u8fd9\u4e2a\u6587\u4ef6\u5bfc\u5165\u9879\u76ee\u3002\u5bfc\u5165\u9879\u76ee\u540e\u5207\u6362\u9879\u76ee\u6839\u76ee\u5f55\uff0c\u64cd\u4f5c\u8def\u5f84\uff1a",(0,s.jsx)(n.strong,{children:"Tools -> Compilation Database -> Change Project Root"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://raw.githubusercontent.com/mxsm/picture/main/java/jvmimage-20240305231718672.png",alt:"image-20240305231718672"})}),"\n",(0,s.jsx)(n.p,{children:"\u67e5\u627e\u4e00\u4e0bmain.c\u8fd9\u4e2a\u6587\u4ef6"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://raw.githubusercontent.com/mxsm/picture/main/java/jvmimage-20240305231954053.png",alt:"image-20240305231954053"})}),"\n",(0,s.jsx)(n.p,{children:"\u6b64\u65f6\u5df2\u7ecf\u5bfc\u5165"}),"\n",(0,s.jsx)(n.h2,{id:"5\u914d\u7f6e\u8c03\u8bd5",children:"5.\u914d\u7f6e\u8c03\u8bd5"}),"\n",(0,s.jsxs)(n.p,{children:["\u9700\u8981\u914d\u7f6e\u6784\u5efa\u76ee\u6807\uff0c\u64cd\u4f5c\u8def\u5f84\uff1a\n",(0,s.jsx)(n.strong,{children:"Preferences > Build, Exceution, Deployment > Custom Build Targets"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://raw.githubusercontent.com/mxsm/picture/main/java/jvmimage-20240305234041616.png",alt:"image-20240305234041616"})}),"\n",(0,s.jsxs)(n.p,{children:["\u6700\u7ec8\u6253\u5f00",(0,s.jsx)(n.strong,{children:"Edit Tool"}),"\u7f16\u8f91\u5c0f\u9762\u677f\uff0c\u5176\u4e2d",(0,s.jsx)(n.strong,{children:"Tool Settings"}),"\u51e0\u4e2a\u53c2\u6570\u5185\u5bb9\u5206\u522b\u662f\uff1a"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://raw.githubusercontent.com/mxsm/picture/main/java/jvmimage-20240305234131745.png",alt:"image-20240305234131745"})}),"\n",(0,s.jsx)(n.p,{children:"\u7b2c\u4e8c\u4e2a\uff1a"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://raw.githubusercontent.com/mxsm/picture/main/java/jvmimage-20240305234203754.png",alt:"image-20240305234203754"})}),"\n",(0,s.jsx)(n.p,{children:"\u7f16\u8f91\u914d\u7f6e\uff1a"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://raw.githubusercontent.com/mxsm/picture/main/java/jvmimage-20240305234246334.png",alt:"image-20240305234246334"})}),"\n",(0,s.jsx)(n.p,{children:"\u9009\u62e9\u81ea\u5b9a\u4e49\u6784\u5efa\u5e94\u7528"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://raw.githubusercontent.com/mxsm/picture/main/java/jvmimage-20240305234326813.png",alt:"image-20240305234326813"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://raw.githubusercontent.com/mxsm/picture/main/java/jvmimage-20240305234401193.png",alt:"image-20240305234401193"})}),"\n",(0,s.jsxs)(n.p,{children:["\u6267\u884c\u9009\u62e9\u5df2\u7ecf\u7f16\u8bd1\u597d\u7684java\u547d\u4ee4\u3002\u7136\u540e\u70b9\u51fb\u8fd0\u884cdebug\u6a21\u5f0f\n",(0,s.jsx)(n.img,{src:"https://raw.githubusercontent.com/mxsm/picture/main/java/jvmimage-20240305234645160.png",alt:"image-20240305234645160"})]}),"\n",(0,s.jsx)(n.p,{children:"\u5df2\u7ecf\u6210\u529f\u8fd0\u884c\u3002"})]})}function o(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>l});var s=i(6540);const t={},a=s.createContext(t);function r(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);