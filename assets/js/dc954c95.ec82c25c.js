"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[8021],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>d});var o=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function k(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},c=Object.keys(e);for(o=0;o<c.length;o++)t=c[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)t=c[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=o.createContext({}),m=function(e){var r=o.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},s=function(e){var r=m(e.components);return o.createElement(l.Provider,{value:r},e.children)},p="mdxType",i={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},u=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,c=e.originalType,l=e.parentName,s=k(e,["components","mdxType","originalType","parentName"]),p=m(t),u=n,d=p["".concat(l,".").concat(u)]||p[u]||i[u]||c;return t?o.createElement(d,a(a({ref:r},s),{},{components:t})):o.createElement(d,a({ref:r},s))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var c=t.length,a=new Array(c);a[0]=u;var k={};for(var l in r)hasOwnProperty.call(r,l)&&(k[l]=r[l]);k.originalType=e,k[p]="string"==typeof e?e:n,a[1]=k;for(var m=2;m<c;m++)a[m]=t[m];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},1274:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>c,metadata:()=>k,toc:()=>m});var o=t(7462),n=(t(7294),t(3905));const c={title:"RocketMQ Docker\u90e8\u7f72",linkTitle:"RocketMQ Docker\u90e8\u7f72",date:new Date("2021-12-25T00:00:00.000Z"),weight:202112252056},a=void 0,k={unversionedId:"rocketmq/rocketmq4/quick-start/rocketmq-docker",id:"rocketmq/rocketmq4/quick-start/rocketmq-docker",title:"RocketMQ Docker\u90e8\u7f72",description:"\u76ee\u524d\u5b98\u65b9 RocketMQ \u955c\u50cf hub.docker.com \u6700\u65b0\u7248\u672c\u4e3a4.6.0\uff0c\u4f46\u662f\u73b0\u5728RocketMQ\u7684\u6700\u65b0\u7248\u672c\u5df2\u7ecf\u5230\u4e864.9.2\u3002\u6240\u4ee54.6.0\u5f80\u4e0a\u7684\u65b0\u7248\u672c\u5c31\u4e0d\u80fd\u76f4\u63a5\u901a\u8fc7DockerHub\u8fdb\u884c\u5b89\u88c5\u3002\u90a3\u4e48RocketMQ\u53ea\u80fd\u81ea\u5df1\u5728\u672c\u5730\u6253\u5305\u955c\u50cf\u3002",source:"@site/docs/rocketmq/rocketmq4/quick-start/rocketmq-docker.md",sourceDirName:"rocketmq/rocketmq4/quick-start",slug:"/rocketmq/rocketmq4/quick-start/rocketmq-docker",permalink:"/docs/rocketmq/rocketmq4/quick-start/rocketmq-docker",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/rocketmq/rocketmq4/quick-start/rocketmq-docker.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1675004074,formattedLastUpdatedAt:"Jan 29, 2023",frontMatter:{title:"RocketMQ Docker\u90e8\u7f72",linkTitle:"RocketMQ Docker\u90e8\u7f72",date:"2021-12-25T00:00:00.000Z",weight:202112252056},sidebar:"rocketmq4",previous:{title:"RocketMQ-\u7279\u6027",permalink:"/docs/rocketmq/rocketmq4/quick-start/rocketmq-character"},next:{title:"RocketMQ-\u6a21\u5757\u8bbe\u8ba1",permalink:"/docs/rocketmq/rocketmq4/quick-start/rocketmq-module-design"}},l={},m=[{value:"1. \u955c\u50cf\u5236\u4f5c\u524d\u51c6\u5907",id:"1-\u955c\u50cf\u5236\u4f5c\u524d\u51c6\u5907",level:3},{value:"1.1 clone rocketmq-docker\u9879\u76ee\u7684\u4ee3\u7801",id:"11-clone-rocketmq-docker\u9879\u76ee\u7684\u4ee3\u7801",level:4},{value:"2. \u6784\u5efa\u955c\u50cf",id:"2-\u6784\u5efa\u955c\u50cf",level:3},{value:"2.1 rocketmq\u955c\u50cf\u6784\u5efa",id:"21-rocketmq\u955c\u50cf\u6784\u5efa",level:4},{value:"2.2 rocketmq-dashboard\u955c\u50cf\u6784\u5efa",id:"22-rocketmq-dashboard\u955c\u50cf\u6784\u5efa",level:4},{value:"3. Docker-compose \u5b89\u88c5",id:"3-docker-compose-\u5b89\u88c5",level:3},{value:"3.1 \u73af\u5883\u51c6\u5907",id:"31-\u73af\u5883\u51c6\u5907",level:4},{value:"3.2 RockerMQ \u5355\u673a\u90e8\u7f72",id:"32-rockermq-\u5355\u673a\u90e8\u7f72",level:4},{value:"3.2.1 NameSrv\u7684Docker\u5bbf\u4e3b\u673a\u73af\u5883",id:"321-namesrv\u7684docker\u5bbf\u4e3b\u673a\u73af\u5883",level:5},{value:"3.2.2 Broker\u7684Docker\u5bbf\u4e3b\u673a\u73af\u5883",id:"322-broker\u7684docker\u5bbf\u4e3b\u673a\u73af\u5883",level:5},{value:"3.2.3 Broker\u914d\u7f6e\u6587\u4ef6\u521b\u5efa",id:"323-broker\u914d\u7f6e\u6587\u4ef6\u521b\u5efa",level:5},{value:"3.2.4 \u7f16\u5199Docker-compose\u6587\u4ef6",id:"324-\u7f16\u5199docker-compose\u6587\u4ef6",level:5},{value:"4. \u603b\u7ed3",id:"4-\u603b\u7ed3",level:3}],s={toc:m};function p(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,o.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u76ee\u524d\u5b98\u65b9 RocketMQ \u955c\u50cf ",(0,n.kt)("inlineCode",{parentName:"p"},"hub.docker.com")," \u6700\u65b0\u7248\u672c\u4e3a",(0,n.kt)("a",{parentName:"p",href:"https://hub.docker.com/layers/apacherocketmq/rocketmq/4.6.0/images/sha256-4c640187427b68c832b821cf7f4dcbb3004089cdda9e2079e9070179d0ce86df?context=explore"},"4.6.0"),"\uff0c\u4f46\u662f\u73b0\u5728RocketMQ\u7684\u6700\u65b0\u7248\u672c\u5df2\u7ecf\u5230\u4e864.9.2\u3002\u6240\u4ee54.6.0\u5f80\u4e0a\u7684\u65b0\u7248\u672c\u5c31\u4e0d\u80fd\u76f4\u63a5\u901a\u8fc7DockerHub\u8fdb\u884c\u5b89\u88c5\u3002\u90a3\u4e48RocketMQ\u53ea\u80fd\u81ea\u5df1\u5728\u672c\u5730\u6253\u5305\u955c\u50cf\u3002"),(0,n.kt)("p",{parentName:"blockquote"},"\u8fd9\u91cc\u6211\u57fa\u4e8eRocketMQ 4.9.2\u7248\u672c\u6765\u8fdb\u884c\u5168\u5957\u7684\u6253\u5305\u90e8\u7f72")),(0,n.kt)("h3",{id:"1-\u955c\u50cf\u5236\u4f5c\u524d\u51c6\u5907"},"1. \u955c\u50cf\u5236\u4f5c\u524d\u51c6\u5907"),(0,n.kt)("h4",{id:"11-clone-rocketmq-docker\u9879\u76ee\u7684\u4ee3\u7801"},"1.1 clone rocketmq-docker\u9879\u76ee\u7684\u4ee3\u7801"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"#\u5b98\u65b9\u7684docker\u5730\u5740\ngit clone https://github.com/apache/rocketmq-docker.git\n")),(0,n.kt)("p",null,"\u6267\u884c\u4e0a\u9762\u547d\u4ee4\u514b\u9686\u4e0b\u6765\u8fd9\u9879\u76ee\u7684\u4ee3\u7801\u3002"),(0,n.kt)("h3",{id:"2-\u6784\u5efa\u955c\u50cf"},"2. \u6784\u5efa\u955c\u50cf"),(0,n.kt)("p",null,"\u8fd9\u91cc\u9700\u8981\u6784\u5efa\u7684\u955c\u50cf\u6709\u4e24\u4e2a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"rocketmq-dashboard\u955c\u50cf(web\u63a7\u5236\u53f0)"),(0,n.kt)("li",{parentName:"ul"},"rocketmq\u955c\u50cf(NameSrv\u548cBroker)")),(0,n.kt)("h4",{id:"21-rocketmq\u955c\u50cf\u6784\u5efa"},"2.1 rocketmq\u955c\u50cf\u6784\u5efa"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"cd image-build\nsh build-image.sh RMQ-VERSION BASE-IMAGE\n")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u539f\u7406\uff1a\u901a\u8fc7\u7248\u672c\u548cBASE-IMAGE(\u652f\u6301centos, alpine)\u6765\u5224\u65ad\u662f\u4f7f\u7528 Dockerfile-centos\u6587\u4ef6\u8fd8\u662fDockerfile-alpine\u6587\u4ef6\u6765\u6784\u5efa\u955c\u50cf\u3002")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/rocketmq/rocketmq-centos%E9%95%9C%E5%83%8F%E6%9E%84%E5%BB%BA.png",alt:null})),(0,n.kt)("p",null,"\u7b49\u5f85\u955c\u50cf\u6784\u5efa\u5b8c\u6210\uff0c\u7136\u540e\u901a\u8fc7docker\u547d\u4ee4\u67e5\u770b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"docker image ls\n")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/rocketmq/rocketmq%E5%88%9B%E5%BB%BA%E5%A5%BD%E7%9A%84%E9%95%9C%E5%83%8F.png",alt:null})),(0,n.kt)("h4",{id:"22-rocketmq-dashboard\u955c\u50cf\u6784\u5efa"},"2.2 rocketmq-dashboard\u955c\u50cf\u6784\u5efa"),(0,n.kt)("p",null,"\u548c\u6784\u5efarocketmq\u955c\u50cf\u4e00\u6837\uff0c\u6211\u4eec\u4f9d\u846b\u82a6\u753b\u74e2\u6784\u5efarocketmq-dashboard\u955c\u50cf"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"cd image-build\nsh build-image-dashboard.sh dashboard-VERSION BASE-IMAGE\n")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"BASE-IMAGE\u53ea\u652f\u6301centos")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://github.com/mxsm/picture/blob/main/rocketmq/build-image-dashboard.png?raw=true",alt:null})),(0,n.kt)("p",null,"\u7b49\u5f85\u955c\u50cf\u6784\u5efa\u5b8c\u6210\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"docker image ls\n")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://github.com/mxsm/picture/blob/main/rocketmq/web%E6%8E%A7%E5%88%B6%E5%8F%B0%E6%89%93%E5%8C%85%E9%95%9C%E5%83%8F%E5%AE%8C%E6%88%90.png?raw=true",alt:null})),(0,n.kt)("h3",{id:"3-docker-compose-\u5b89\u88c5"},"3. Docker-compose \u5b89\u88c5"),(0,n.kt)("p",null,"\u8fd9\u91cc\u4e3a\u4ec0\u4e48\u7528Docker-compose \u5b89\u88c5\u5462\uff1f\u56e0\u4e3aRocketMQ\u7684\u5b89\u88c5\u7684\u4e1c\u897f\u6709\u4e09\u4e2a\u90e8\u5206\uff1a",(0,n.kt)("strong",{parentName:"p"},"namesrv\u3001broker\u3001rocketmq-dashboard")," \uff0c\u7528Docker-compose\u5b89\u88c5\u8d77\u6765\u6bd4\u8f83\u65b9\u4fbf\u3002"),(0,n.kt)("h4",{id:"31-\u73af\u5883\u51c6\u5907"},"3.1 \u73af\u5883\u51c6\u5907"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u672c\u5730\u5df2\u7ecf\u6709\u4e86rocketmq-dashboard\u955c\u50cf\u548crocketmq\u955c\u50cf")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/rocketmq/%E5%B7%B2%E7%BB%8F%E5%87%86%E5%A4%87%E5%A5%BD%E7%9A%84%E9%95%9C%E5%83%8F.png",alt:null})),(0,n.kt)("h4",{id:"32-rockermq-\u5355\u673a\u90e8\u7f72"},"3.2 RockerMQ \u5355\u673a\u90e8\u7f72"),(0,n.kt)("h5",{id:"321-namesrv\u7684docker\u5bbf\u4e3b\u673a\u73af\u5883"},"3.2.1 NameSrv\u7684Docker\u5bbf\u4e3b\u673a\u73af\u5883"),(0,n.kt)("p",null,"\u4e3b\u8981\u914d\u7f6e\u7684\u662f\u65e5\u5fd7\u8def\u5f84\u4ee5\u53ca\u5b58\u50a8\u8def\u5f84\u3002(\u6302\u8f7d\u8def\u5f84)"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"mkdir -p /root/rocketmq/data/namesrv/logs\n\nmkdir -p /root/rocketmq/data/namesrv/store\n")),(0,n.kt)("h5",{id:"322-broker\u7684docker\u5bbf\u4e3b\u673a\u73af\u5883"},"3.2.2 Broker\u7684Docker\u5bbf\u4e3b\u673a\u73af\u5883"),(0,n.kt)("p",null,"\u4e3b\u8981\u521b\u5efa\u65e5\u5fd7\u3001\u6570\u636e\u5b58\u50a8\u3001\u4ee5\u53ca\u914d\u7f6e\u5b58\u653e\u7684\u6302\u8f7d\u8def\u5f84"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"mkdir -p /root/rocketmq/data/broker/logs\nmkdir -p /root/rocketmq/data/broker/store\nmkdir -p /root/rocketmq/etc/broker\n")),(0,n.kt)("h5",{id:"323-broker\u914d\u7f6e\u6587\u4ef6\u521b\u5efa"},"3.2.3 Broker\u914d\u7f6e\u6587\u4ef6\u521b\u5efa"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"nano /root/rocketmq/etc/broker/broker.conf\n")),(0,n.kt)("p",null,"\u6587\u4ef6\u5185\u5bb9\u5982\u4e0b:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-properties"},"brokerClusterName = mxsm-docker\nbrokerName = mxsm-docker-a\nbrokerId = 0\ndeleteWhen = 04\nfileReservedTime = 48\nbrokerRole = ASYNC_MASTER\nflushDiskType = ASYNC_FLUSH\n# Docker\u73af\u5883\u9700\u8981\u8bbe\u7f6e\u6210\u5bbf\u4e3b\u673aIP\n#brokerIP1 = {docker\u5bbf\u4e3b\u673aIP}\nbrokerIP1 = 192.168.43.128\n")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u4f8b\u5982\uff1a\u5728Docker\u5bbf\u4e3b\u673a\u901a\u8fc7\u547d\u4ee4\u67e5\u8be2\u5230\u7684IP\u5730\u5740\u4e3a ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"192.168.43.128"))," \u90a3\u4e48\u8fd9\u4e2a\u5730\u65b9\u5c31\u8bbe\u7f6e\u4e3a ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"192.168.43.128"))," ")),(0,n.kt)("h5",{id:"324-\u7f16\u5199docker-compose\u6587\u4ef6"},"3.2.4 \u7f16\u5199Docker-compose\u6587\u4ef6"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u8fd9\u91cc\u7f16\u5199Docker-compose\u6587\u4ef6\u7248\u672c\u4f7f\u7528\u76843\uff0c\u6709\u7684\u4ebadocker\u53ef\u80fd\u7248\u672c\u6ca1\u8fd9\u4e48\u9ad8\uff0c\u53ef\u4ee5\u4f7f\u75282\u770b\u4e2a\u4eba\u8c03\u6574\u3002")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"version: '3'\nservices:\n  #Service for nameserver\n  namesrv:\n    image: apacherocketmq/rocketmq:4.9.2\n    container_name: rocketmq-namesrv\n    ports:\n      - 9876:9876\n    environment:\n      - JAVA_OPT_EXT=-server -Xms256m -Xmx256m -Xmn256m\n    volumes:\n      - /root/rocketmq/data/namesrv/logs:/root/logs\n    command: sh mqnamesrv\n\n  #Service for broker\n  broker:\n    image: apacherocketmq/rocketmq:4.9.2\n    container_name: rocketmq-broker\n    links:\n      - namesrv\n    depends_on:\n      - namesrv\n    ports:\n      - 10909:10909\n      - 10911:10911\n      - 10912:10912\n    environment:\n      - NAMESRV_ADDR=namesrv:9876\n      - JAVA_OPT_EXT=-server -Xms512m -Xmx512m -Xmn256m\n    volumes:\n      - /root/rocketmq/data/broker/logs:/home/rocketmq/logs\n      - /root/rocketmq/data/broker/store:/home/rocketmq/store\n      - /root/rocketmq/etc/broker/broker.conf:/home/rocketmq/conf/broker.conf\n    command: sh mqbroker -c /home/rocketmq/conf/broker.conf\n\n  #Service for rocketmq-dashboard\n  dashboard:\n    image: apache/rocketmq-dashboard:1.0.0-centos\n    container_name: rocketmq-dashboard\n    ports:\n      - 8080:8080\n    links:\n      - namesrv\n    depends_on:\n      - namesrv\n    environment:\n      - NAMESRV_ADDR=namesrv:9876\n")),(0,n.kt)("p",null,"\u8fd0\u884c\u547d\u4ee4\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"docker-compose -f ./docker-compose.yml up\n")),(0,n.kt)("p",null,"\u7136\u540e\u67e5\u770b\u8fd0\u884c\u7684\u60c5\u51b5\u3002"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u5728\u8fd0\u884c\u7684\u8fc7\u7a0b\u4e2d\u603b\u662f\u53d1\u73b0\u6709\u8fd9\u6837\u7684\u4e00\u4e2a\u95ee\u9898\uff1arocketmq-broker exited with code 253\uff0c\u4e5f\u6ca1\u65e5\u5fd7\u6253\u5370\u3002\u8fd9\u91cc\u53ef\u80fd\u662f\u6302\u8f7d\u8def\u5f84\u6ca1\u6709\u6743\u9650\u7684\u95ee\u9898\u3002\u52a0\u4e0a\u6743\u9650\u5373\u53ef\u3002")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/rocketmq/%E8%BF%90%E8%A1%8C%E6%88%90%E5%8A%9F.png",alt:null})),(0,n.kt)("p",null,"\u7136\u540e\u5728\u672c\u5730\u767b\u5f55web\u63a7\u5236\u53f0\u8fdb\u884c\u9a8c\u8bc1"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/rocketmq/web%E6%8E%A7%E5%88%B6%E5%8F%B0.png",alt:null})),(0,n.kt)("h3",{id:"4-\u603b\u7ed3"},"4. \u603b\u7ed3"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u603b\u7684\u6765\u8bf4\u5927\u5bb6\u53ef\u4ee5\u6839\u636e\u5b98\u65b9\u7684 ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"strong"},"rocketmq-docker"))," \u9879\u76ee\u6765\u8fdb\u884cdocker\u90e8\u7f72\u3002\u8fd9\u91cc\u4e5f\u5b58\u5728\u4e00\u4e9b\u95ee\u9898\uff0c\u6211\u5f00\u59cb\u7528\u5b98\u65b9\u7684\u521b\u5efa\u955c\u50cf\u5f88\u6162\uff0c\u7279\u522b\u662f\u4e0b\u8f7d\u548c\u7f16\u8bd1\u7684\u65f6\u5019\u3002\u8fd9\u91cc\u4e5f\u53ef\u4ee5\u5728\u672c\u5730\u5c06\u9879\u76ee\u8fdb\u884c\u7f16\u8bd1\u7136\u540e\u4fee\u6539\u4e00\u4e0b\u4ece\u672c\u5730\u8fdb\u884c\u955c\u50cf\u6784\u5efa\u3002\u8fd9\u6837\u6784\u5efa\u6709\u4e00\u4e2a\u597d\u5904\uff0c\u5728\u672c\u5730\u80fd\u591f\u6784\u5efa\u6b63\u5728\u5f00\u53d1\u7684\u7248\u672c\u955c\u50cf\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u5b98\u65b9\u7684Docker-compose\u6ca1\u6709\u5c06rocketmq-dashboard\u63a7\u5236\u53f0\u8fdb\u884c\u8fd0\u884c\u3002")))}p.isMDXComponent=!0}}]);