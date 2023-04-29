"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[9517],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},v=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(r),v=o,d=m["".concat(s,".").concat(v)]||m[v]||p[v]||a;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=v;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}v.displayName="MDXCreateElement"},2828:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={title:"RocketMQ5.0 NameServer\u542f\u52a8\u6d41\u7a0b",linkTitle:"RocketMQ5.0 NameServer\u542f\u52a8\u6d41\u7a0b",date:new Date("2022-12-25T00:00:00.000Z"),weight:202212251701},i=void 0,l={unversionedId:"rocketmq/rocketmq5/nameserver/2nameserver-start-process",id:"rocketmq/rocketmq5/nameserver/2nameserver-start-process",title:"RocketMQ5.0 NameServer\u542f\u52a8\u6d41\u7a0b",description:"1. NameServer \u542f\u52a8",source:"@site/docs/rocketmq/rocketmq5/02-nameserver/2nameserver-start-process.md",sourceDirName:"rocketmq/rocketmq5/02-nameserver",slug:"/rocketmq/rocketmq5/nameserver/2nameserver-start-process",permalink:"/docs/rocketmq/rocketmq5/nameserver/2nameserver-start-process",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/rocketmq/rocketmq5/02-nameserver/2nameserver-start-process.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1682735967,formattedLastUpdatedAt:"Apr 29, 2023",frontMatter:{title:"RocketMQ5.0 NameServer\u542f\u52a8\u6d41\u7a0b",linkTitle:"RocketMQ5.0 NameServer\u542f\u52a8\u6d41\u7a0b",date:"2022-12-25T00:00:00.000Z",weight:202212251701},sidebar:"rocketmq5",previous:{title:"RocketMQ5.0 NameServer\u67b6\u6784\u8bbe\u8ba1",permalink:"/docs/rocketmq/rocketmq5/nameserver/1nameserver-architecture"},next:{title:"NameServer\u8def\u7531\u7ba1\u7406",permalink:"/docs/rocketmq/rocketmq5/nameserver/route-manage/"}},s={},c=[{value:"1. NameServer \u542f\u52a8",id:"1-nameserver-\u542f\u52a8",level:2},{value:"1.1 \u547d\u4ee4\u884c\u53c2\u6570\u89e3\u6790",id:"11-\u547d\u4ee4\u884c\u53c2\u6570\u89e3\u6790",level:3},{value:"1.2 \u521b\u5efaNamesrvController",id:"12-\u521b\u5efanamesrvcontroller",level:3},{value:"1.3 \u521d\u59cb\u5316NamesrvController",id:"13-\u521d\u59cb\u5316namesrvcontroller",level:3},{value:"1.3.1 loadConfig",id:"131-loadconfig",level:4},{value:"1.3.2 initiateNetworkComponents",id:"132-initiatenetworkcomponents",level:4},{value:"1.3.3 initiateThreadExecutors",id:"133-initiatethreadexecutors",level:4},{value:"1.3.4  registerProcessor",id:"134--registerprocessor",level:4},{value:"1.3.5 startScheduleService",id:"135-startscheduleservice",level:4},{value:"1.3.5 initiateSslContext",id:"135-initiatesslcontext",level:4},{value:"1.3.6 initiateRpcHooks",id:"136-initiaterpchooks",level:4},{value:"1.4 \u542f\u52a8NamesrvController",id:"14-\u542f\u52a8namesrvcontroller",level:3}],u={toc:c},m="wrapper";function p(e){let{components:t,...r}=e;return(0,o.kt)(m,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"1-nameserver-\u542f\u52a8"},"1. NameServer \u542f\u52a8"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"org.apache.rocketmq.namesrv.NamesrvStartup "),"\u7684Main\u51fd\u6570\u662f\u542f\u52a8\u7684\u5165\u53e3\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"    public static void main(String[] args) {\n        main0(args);\n        controllerManagerMain();\n    }\n    public static NamesrvController main0(String[] args) {\n        try {\n            parseCommandlineAndConfigFile(args);\n            NamesrvController controller = createAndStartNamesrvController();\n            return controller;\n        } catch (Throwable e) {\n            e.printStackTrace();\n            System.exit(-1);\n        }\n\n        return null;\n    }\n\n    public static ControllerManager controllerManagerMain() {\n        try {\n            if (namesrvConfig.isEnableControllerInNamesrv()) {\n                return createAndStartControllerManager();\n            }\n        } catch (Throwable e) {\n            e.printStackTrace();\n            System.exit(-1);\n        }\n        return null;\n    }\n")),(0,o.kt)("p",null,"\u542f\u52a8\u5206\u6210\u4e86\u4e24\u5757\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"NameServer\u542f\u52a8"),(0,o.kt)("li",{parentName:"ol"},"Controller\u542f\u52a8(5.0\u4e3a\u81ea\u52a8\u81ea\u4e3b\u5207\u6362\u65b0\u589e\u7684\u4e00\u4e2a\u6a21\u5757\uff0c\u5185\u5d4cNameServer\u7684\u65f6\u5019\u4f1a\u542f\u52a8)")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"\u672c\u7bc7\u6587\u7ae0\u53ea\u5206\u6790NameServer\u7684\u542f\u52a8\uff0cController\u7684\u542f\u52a8\u5728\u540e\u7eed\u7684\u6587\u7ae0\u4e2d\u8fdb\u884c\u5206\u6790")),(0,o.kt)("h3",{id:"11-\u547d\u4ee4\u884c\u53c2\u6570\u89e3\u6790"},"1.1 \u547d\u4ee4\u884c\u53c2\u6570\u89e3\u6790"),(0,o.kt)("p",null,"NameServer\u542f\u52a8\u4e4b\u524d\u9700\u8981\u5148\u5bf9\u547d\u4ee4\u884c\u53c2\u6570\u8fdb\u884c\u89e3\u6790\uff0c\u5c06\u547d\u4ee4\u884c\u53c2\u6570\u89e3\u6790\u4e3aNameServer\u542f\u52a8\u9700\u8981\u7684\u53c2\u6570\u914d\u7f6e\u3002\u4e3b\u8981\u7684\u547d\u4ee4\u884c\u53c2\u6570\u6709\u4e24\u4e2a"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"\u547d\u4ee4"),(0,o.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"-c"),(0,o.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u914d\u7f6e\u6587\u4ef6\u6587\u4ef6\u4f4d\u7f6e")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"-p"),(0,o.kt)("td",{parentName:"tr",align:null},"\u6253\u5370\u914d\u7f6e\u7684\u53c2\u6570")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"-c "),"\u547d\u4ee4\u884c\u53c2\u6570\u8bbe\u7f6e\u914d\u7f6e\u6587\u4ef6\u4f4d\u7f6e\uff0c\u7136\u540e\u5c06\u914d\u7f6e\u6587\u4ef6\u4e2d\u7684\u53c2\u6570\u503c\u89e3\u6790\u8bbe\u7f6e\u4e3a\u914d\u7f6e\u7c7b\u7684\u5c5e\u6027\u503c\uff0c\u6d89\u53ca\u5230\u7684\u914d\u7f6e\u6709\u5982\u4e0b\u51e0\u4e2a\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"NamesrvConfig"),(0,o.kt)("li",{parentName:"ul"},"NettyServerConfig"),(0,o.kt)("li",{parentName:"ul"},"NettyClientConfig"),(0,o.kt)("li",{parentName:"ul"},"ControllerConfig(\u53ea\u6709\u5f53Controller\u5185\u5d4cNameServer\u7684\u65f6\u5019\u624d\u8d77\u4f5c\u7528)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"namesrvConfig = new NamesrvConfig();\nnettyServerConfig = new NettyServerConfig();\nnettyClientConfig = new NettyClientConfig();\nnettyServerConfig.setListenPort(9876);\ncontrollerConfig = new ControllerConfig();\nif (commandLine.hasOption('c')) {\n    String file = commandLine.getOptionValue('c');\n    if (file != null) {\n        InputStream in = new BufferedInputStream(Files.newInputStream(Paths.get(file)));\n        properties = new Properties();\n        properties.load(in);\n        MixAll.properties2Object(properties, namesrvConfig);\n        MixAll.properties2Object(properties, nettyServerConfig);\n        MixAll.properties2Object(properties, nettyClientConfig);\n        MixAll.properties2Object(properties, controllerConfig);\n\n        namesrvConfig.setConfigStorePath(file);\n\n        System.out.printf(\"load config properties file OK, %s%n\", file);\n        in.close();\n    }\n}\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"\u66f4\u591a\u7684\u53c2\u6570\u8bbe\u7f6e\u4fee\u6539\u53ef\u4ee5\u53c2\u7167\u6e90\u7801\u4e2dNamesrvConfig\u3001NettyServerConfig\u3001NettyClientConfig\u3001ControllerConfig\u4e2d\u7684\u7c7b\u5c5e\u6027\u3002")),(0,o.kt)("h3",{id:"12-\u521b\u5efanamesrvcontroller"},"1.2 \u521b\u5efaNamesrvController"),(0,o.kt)("p",null,"\u6839\u636eNamesrvController\u7684\u6784\u9020\u51fd\u6570\u521b\u5efa\u4e86\u4e09\u4e2a\u91cd\u8981\u7684\u7ba1\u7406\u7c7b\u5b9e\u4f8b\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"KVConfigManager"),(0,o.kt)("li",{parentName:"ol"},"BrokerHousekeepingService"),(0,o.kt)("li",{parentName:"ol"},"RouteInfoManager")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"KVConfigManager"),"\nKV\u7684\u6301\u4e45\u5316\u3001\u5e8f\u5217\u5316\u548c\u53cd\u5e8f\u5217\u5316\u5904\u7406\n",(0,o.kt)("strong",{parentName:"p"},"BrokerHousekeepingService"),"\n\u5904\u7406\u5ba2\u6237\u7aef\u548cNameServer\u7684\u8fde\u63a5\u903b\u8f91\uff0c\u8fd9\u91cc\u7684\u5ba2\u6237\u7aef\u5305\u62ec\uff1a\u751f\u4ea7\u8005\u3001\u6d88\u8d39\u8005\uff0c\u4ee5\u53caBroker\n",(0,o.kt)("strong",{parentName:"p"},"RouteInfoManager"),"\n\u8def\u7531\u7ba1\u7406\uff0c\u4e3b\u8981\u7ba1\u7406Broker\u7684\u5143\u6570\u636e\uff0cTopic\u7684\u5143\u6570\u636e\u4fe1\u606f"),(0,o.kt)("h3",{id:"13-\u521d\u59cb\u5316namesrvcontroller"},"1.3 \u521d\u59cb\u5316NamesrvController"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'    public static NamesrvController start(final NamesrvController controller) throws Exception {\n\n        if (null == controller) {\n            throw new IllegalArgumentException("NamesrvController is null");\n        }\n\n        boolean initResult = controller.initialize();\n        if (!initResult) {\n            controller.shutdown();\n            System.exit(-3);\n        }\n\n        Runtime.getRuntime().addShutdownHook(new ShutdownHookThread(log, (Callable<Void>) () -> {\n            controller.shutdown();\n            return null;\n        }));\n\n        controller.start();\n\n        return controller;\n    }\n')),(0,o.kt)("p",null,"\u9996\u5148\u8c03\u7528NamesrvController#initialize\u8fdb\u884c\u521d\u59cb\u5316\uff0c\u6211\u4eec\u770b\u4e00\u4e0b\u521d\u59cb\u5316\u505a\u4e86\u4ec0\u4e48\u4e8b\u60c5\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"    public boolean initialize() {\n        loadConfig();\n        initiateNetworkComponents();\n        initiateThreadExecutors();\n        registerProcessor();\n        startScheduleService();\n        initiateSslContext();\n        initiateRpcHooks();\n        return true;\n    }\n")),(0,o.kt)("h4",{id:"131-loadconfig"},"1.3.1 loadConfig"),(0,o.kt)("h4",{id:"132-initiatenetworkcomponents"},"1.3.2 initiateNetworkComponents"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"private void initiateNetworkComponents() {\n    this.remotingServer = new NettyRemotingServer(this.nettyServerConfig, this.brokerHousekeepingService);\n    this.remotingClient = new NettyRemotingClient(this.nettyClientConfig);\n}\n")),(0,o.kt)("p",null,"\u521b\u5efaNameServer\u7684\u7f51\u7edc\u670d\u52a1\uff0c\u4ee5\u53caNameServer\u7684\u5ba2\u6237\u7aef\u3002"),(0,o.kt)("h4",{id:"133-initiatethreadexecutors"},"1.3.3 initiateThreadExecutors"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'private void initiateThreadExecutors() {\n    this.defaultThreadPoolQueue = new LinkedBlockingQueue<>(this.namesrvConfig.getDefaultThreadPoolQueueCapacity());\n    this.defaultExecutor = new ThreadPoolExecutor(this.namesrvConfig.getDefaultThreadPoolNums(), this.namesrvConfig.getDefaultThreadPoolNums(), 1000 * 60, TimeUnit.MILLISECONDS, this.defaultThreadPoolQueue, new ThreadFactoryImpl("RemotingExecutorThread_")) {\n        @Override\n        protected <T> RunnableFuture<T> newTaskFor(final Runnable runnable, final T value) {\n            return new FutureTaskExt<>(runnable, value);\n        }\n    };\n\n    this.clientRequestThreadPoolQueue = new LinkedBlockingQueue<>(this.namesrvConfig.getClientRequestThreadPoolQueueCapacity());\n    this.clientRequestExecutor = new ThreadPoolExecutor(this.namesrvConfig.getClientRequestThreadPoolNums(), this.namesrvConfig.getClientRequestThreadPoolNums(), 1000 * 60, TimeUnit.MILLISECONDS, this.clientRequestThreadPoolQueue, new ThreadFactoryImpl("ClientRequestExecutorThread_")) {\n        @Override\n        protected <T> RunnableFuture<T> newTaskFor(final Runnable runnable, final T value) {\n            return new FutureTaskExt<>(runnable, value);\n        }\n    };\n}\n')),(0,o.kt)("p",null,"\u8fd9\u91cc\u521d\u59cb\u5316\u4e86\u4e24\u4e2a\u7ebf\u7a0b\u6c60\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"clientRequestExecutor\u7ebf\u7a0b\u6c60\u5904\u7406\u5ba2\u6237\u7aef(\u751f\u4ea7\u8005\u548c\u6d88\u8d39\u8005)\u83b7\u53d6Topic\u7684\u8def\u7531\u4fe1\u606f(RequestCode.GET_ROUTEINFO_BY_TOPIC)"),(0,o.kt)("li",{parentName:"ul"},"defaultExecutor\u7ebf\u7a0b\u6c60\u5904\u7406\u9664\u4e86RequestCode.GET_ROUTEINFO_BY_TOPIC\u4ee5\u5916\u7684\u8bf7\u6c42\u3002")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"\u57285.0\u7248\u672c\u540e\u591a\u4e86\u4e00\u4e2aclientRequestExecutor\u7ebf\u7a0b\u6c60\uff0c\u4e3b\u8981\u662f\u56e0\u4e3a\u589e\u52a0NameServer\u7684\u53ef\u7528\u6027\uff0c\u5373\u4f7fdefaultExecutor\u4e0d\u80fd\u6b63\u5e38\u5de5\u4f5c\u51fa\u73b0\u5b95\u673a\u7684\u60c5\u51b5\uff0c\u5ba2\u6237\u7aef\u4ecd\u7136\u53ef\u4ee5\u83b7\u53d6Topic\u7684\u8def\u7531\u4fe1\u606f\u800c\u8fdb\u884c\u7684\u7ebf\u7a0b\u6c60\u7684\u9694\u79bb\u3002\n\u5177\u4f53\u53ef\u4ee5\u53c2\u7167",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/rocketmq/wiki/RIP-29-Optimize-RocketMQ-NameServer"},"[RIP-29]"))),(0,o.kt)("h4",{id:"134--registerprocessor"},"1.3.4  registerProcessor"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"private void registerProcessor() {\n    if (namesrvConfig.isClusterTest()) {\n\n        this.remotingServer.registerDefaultProcessor(new ClusterTestRequestProcessor(this, namesrvConfig.getProductEnvName()), this.defaultExecutor);\n    } else {\n        // Support get route info only temporarily\n        ClientRequestProcessor clientRequestProcessor = new ClientRequestProcessor(this);\n        this.remotingServer.registerProcessor(RequestCode.GET_ROUTEINFO_BY_TOPIC, clientRequestProcessor, this.clientRequestExecutor);\n\n        this.remotingServer.registerDefaultProcessor(new DefaultRequestProcessor(this), this.defaultExecutor);\n    }\n}\n")),(0,o.kt)("p",null,"\u5c06\u7ebf\u7a0b\u6c60\u548c\u5904\u7406\u5668\u7ed1\u5b9a\u3002"),(0,o.kt)("h4",{id:"135-startscheduleservice"},"1.3.5 startScheduleService"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'private void startScheduleService() {\n    this.scanExecutorService.scheduleAtFixedRate(NamesrvController.this.routeInfoManager::scanNotActiveBroker,\n        5, this.namesrvConfig.getScanNotActiveBrokerInterval(), TimeUnit.MILLISECONDS);\n\n    this.scheduledExecutorService.scheduleAtFixedRate(NamesrvController.this.kvConfigManager::printAllPeriodically,\n        1, 10, TimeUnit.MINUTES);\n\n    this.scheduledExecutorService.scheduleAtFixedRate(() -> {\n        try {\n            NamesrvController.this.printWaterMark();\n        } catch (Throwable e) {\n            LOGGER.error("printWaterMark error.", e);\n        }\n    }, 10, 1, TimeUnit.SECONDS);\n}\n')),(0,o.kt)("p",null,"\u542f\u52a8\u4e09\u4e2a\u5b9a\u65f6\u4efb\u52a1\uff0c\u4e24\u4e2a\u662f\u6253\u5370\u7684\u7684\u5b9a\u65f6\u4efb\u52a1\u6ca1\u6709\u4e1a\u52a1\u903b\u8f91\uff0c\u53ea\u6709scanNotActiveBroker\u5b9a\u65f6\u4efb\u52a1\u7684\u4f5c\u7528\uff1a\u9ed8\u8ba4\u6bcf5\u79d2\u626b\u63cf\u4e00\u6b21Broker\u662f\u5426\u8fc7\u671f\u3002"),(0,o.kt)("h4",{id:"135-initiatesslcontext"},"1.3.5 initiateSslContext"),(0,o.kt)("p",null,"\u521d\u59cb\u5316SsL"),(0,o.kt)("h4",{id:"136-initiaterpchooks"},"1.3.6 initiateRpcHooks"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"private void initiateRpcHooks() {\n    this.remotingServer.registerRPCHook(new ZoneRouteRPCHook());\n}\n")),(0,o.kt)("p",null,"\u76ee\u524d\u53ea\u6ce8\u518c\u4e86\u4e00\u4e2aZoneRouteRPCHook\uff0c\u4e3b\u8981\u7528\u4e8e\u533a\u57df\u8def\u7531\u3002"),(0,o.kt)("h3",{id:"14-\u542f\u52a8namesrvcontroller"},"1.4 \u542f\u52a8NamesrvController"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'public void start() throws Exception {\n    this.remotingServer.start();\n\n    // In test scenarios where it is up to OS to pick up an available port, set the listening port back to config\n    if (0 == nettyServerConfig.getListenPort()) {\n        nettyServerConfig.setListenPort(this.remotingServer.localListenPort());\n    }\n\n    this.remotingClient.updateNameServerAddressList(Collections.singletonList(NetworkUtil.getLocalAddress()\n        + ":" + nettyServerConfig.getListenPort()));\n    this.remotingClient.start();\n\n    if (this.fileWatchService != null) {\n        this.fileWatchService.start();\n    }\n\n    this.routeInfoManager.start();\n}\n')),(0,o.kt)("p",null,"\u542f\u52a8NameServer\u7684Netty\u5bf9\u5916\u7684\u670d\u52a1\u548c\u5ba2\u6237\u7aef\u670d\u52a1\uff0c\u5728\u6587\u4ef6\u76d1\u63a7\u670d\u52a1\u4e0d\u4e3a\u7a7a\u7684\u60c5\u51b5\u4e0b\u542f\u52a8\u670d\u52a1\u3002\n\u8def\u7531\u7ba1\u7406\u670d\u52a1\u542f\u52a8\uff1a \u4e3b\u8981\u662f\u542f\u52a8\u4e86\u6279\u91cf\u6ce8\u9500\u670d\u52a1\u3002"))}p.isMDXComponent=!0}}]);