"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[944],{5604:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var r=n(4848),a=n(8453);const s={title:"\u57fa\u4e8eJMeter\u7684RocketMQ\u538b\u6d4b",linkTitle:"\u57fa\u4e8eJMeter\u7684RocketMQ\u538b\u6d4b",weight:202305132305,description:"\u57fa\u4e8eJMeter\u7684RocketMQ\u538b\u6d4b"},c=void 0,o={id:"java/java-tools/jmeter/jmeter-rocketmq",title:"\u57fa\u4e8eJMeter\u7684RocketMQ\u538b\u6d4b",description:"\u57fa\u4e8eJMeter\u7684RocketMQ\u538b\u6d4b",source:"@site/docs/java/java-tools/jmeter/01-jmeter-rocketmq.md",sourceDirName:"java/java-tools/jmeter",slug:"/java/java-tools/jmeter/jmeter-rocketmq",permalink:"/docs/java/java-tools/jmeter/jmeter-rocketmq",draft:!1,unlisted:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/java/java-tools/jmeter/01-jmeter-rocketmq.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1710172454,formattedLastUpdatedAt:"Mar 11, 2024",sidebarPosition:1,frontMatter:{title:"\u57fa\u4e8eJMeter\u7684RocketMQ\u538b\u6d4b",linkTitle:"\u57fa\u4e8eJMeter\u7684RocketMQ\u538b\u6d4b",weight:202305132305,description:"\u57fa\u4e8eJMeter\u7684RocketMQ\u538b\u6d4b"},sidebar:"javatools",previous:{title:"async-profiler\u7684\u4f7f\u7528\u4e0eRocketMQ\u6027\u80fd\u4f18\u5316\u6848\u4f8b",permalink:"/docs/java/java-tools/async-profiler/1async-profiler-for-rocketmq"}},i={},l=[{value:"1. \u51c6\u5907\u5de5\u4f5c",id:"1-\u51c6\u5907\u5de5\u4f5c",level:2},{value:"2. \u7f16\u5199JMeter\u63d2\u4ef6",id:"2-\u7f16\u5199jmeter\u63d2\u4ef6",level:2},{value:"3. \u5728JMeter\u4e2d\u4f7f\u7528\u63d2\u4ef6",id:"3-\u5728jmeter\u4e2d\u4f7f\u7528\u63d2\u4ef6",level:2},{value:"4. \u6ce8\u610f\u4e8b\u9879",id:"4-\u6ce8\u610f\u4e8b\u9879",level:2},{value:"5. \u603b\u7ed3",id:"5-\u603b\u7ed3",level:2}];function m(e){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Rocketmq\u662f\u4e00\u6b3e\u9ad8\u6027\u80fd\u3001\u9ad8\u53ef\u9760\u7684\u5206\u5e03\u5f0f\u6d88\u606f\u4e2d\u95f4\u4ef6\uff0c\u5e7f\u6cdb\u5e94\u7528\u4e8e\u5404\u79cd\u573a\u666f\u4e2d\u3002\u5728\u5b9e\u9645\u5e94\u7528\u4e2d\uff0c\u4e3a\u4e86\u4fdd\u8bc1Rocketmq\u7684\u7a33\u5b9a\u6027\u548c\u53ef\u9760\u6027\uff0c\u6211\u4eec\u9700\u8981\u5bf9\u5176\u8fdb\u884c\u538b\u6d4b\u3002\u800cJMeter\u662f\u4e00\u6b3e\u5e38\u7528\u7684\u538b\u6d4b\u5de5\u5177\uff0c\u53ef\u4ee5\u7528\u4e8e\u6d4b\u8bd5Web\u5e94\u7528\u3001Web\u670d\u52a1\u3001\u6570\u636e\u5e93\u4ee5\u53ca\u5404\u79cd\u534f\u8bae\u3002\u672c\u6587\u5c06\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528JMeter\u8fdb\u884cRocketmq\u538b\u6d4b\uff0c\u5e76\u901a\u8fc7\u7f16\u5199\u63d2\u4ef6\u6765\u5b9e\u73b0\u5bf9Rocketmq\u751f\u4ea7\u8005\u7684\u538b\u6d4b\u3002"}),"\n",(0,r.jsx)(t.h2,{id:"1-\u51c6\u5907\u5de5\u4f5c",children:"1. \u51c6\u5907\u5de5\u4f5c"}),"\n",(0,r.jsx)(t.p,{children:"\u5728\u8fdb\u884cRocketmq\u538b\u6d4b\u524d\uff0c\u9700\u8981\u51c6\u5907\u597d\u4ee5\u4e0b\u5185\u5bb9\uff1a"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"\u5b89\u88c5\u5e76\u542f\u52a8Rocketmq\u670d\u52a1\u7aef\uff0c\u53ef\u4ee5\u53c2\u8003\u5b98\u65b9\u6587\u6863\u8fdb\u884c\u5b89\u88c5\u914d\u7f6e\uff1b"}),"\n",(0,r.jsx)(t.li,{children:"\u4e0b\u8f7d\u5e76\u5b89\u88c5JMeter\uff0c\u53ef\u4ee5\u4ece\u5b98\u7f51\u4e0b\u8f7d\u6700\u65b0\u7248\u672c\uff1b"}),"\n",(0,r.jsx)(t.li,{children:"\u4e0b\u8f7d\u5e76\u5b89\u88c5Rocketmq JMS \u5ba2\u6237\u7aef\uff0c\u53ef\u4ee5\u4ece\u5b98\u7f51\u4e0b\u8f7d\u6700\u65b0\u7248\u672c\u3002"}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"2-\u7f16\u5199jmeter\u63d2\u4ef6",children:"2. \u7f16\u5199JMeter\u63d2\u4ef6"}),"\n",(0,r.jsx)(t.p,{children:"\u9996\u5148\u5f15\u5165\u4f9d\u8d56\uff1a"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-xml",children:"<dependency>\n    <groupId>org.apache.jmeter</groupId>\n    <artifactId>ApacheJMeter_core</artifactId>\n    <version>5.4.3</version>\n</dependency>\n<dependency>\n    <groupId>org.apache.jmeter</groupId>\n    <artifactId>ApacheJMeter_java</artifactId>\n    <version>5.4.3</version>\n</dependency>\n<dependency>\n    <groupId>org.apache.rocketmq</groupId>\n    <artifactId>rocketmq-client</artifactId>\n    <version>5.1.0</version>\n</dependency>\n"})}),"\n",(0,r.jsx)(t.p,{children:"\u4e3a\u4e86\u5b9e\u73b0\u5bf9Rocketmq\u751f\u4ea7\u8005\u7684\u538b\u6d4b\uff0c\u6211\u4eec\u9700\u8981\u7f16\u5199\u4e00\u4e2aJMeter\u63d2\u4ef6\u3002\u4e0b\u9762\u662f\u4e00\u4e2a\u7b80\u5355\u7684\u793a\u4f8b\u4ee3\u7801\uff1a"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:'import org.apache.jmeter.config.Arguments;\nimport org.apache.jmeter.protocol.java.sampler.AbstractJavaSamplerClient;\nimport org.apache.jmeter.protocol.java.sampler.JavaSamplerContext;\nimport org.apache.jmeter.samplers.SampleResult;\nimport org.apache.rocketmq.client.producer.DefaultMQProducer;\nimport org.apache.rocketmq.client.producer.SendResult;\nimport org.apache.rocketmq.common.message.Message;\n\npublic class RocketmqProducerSampler extends AbstractJavaSamplerClient {\n    private DefaultMQProducer producer;\n    private String serverUrl;\n    private String topic;\n    private String tags;\n    private String keys;\n    private String body;\n\n    @Override\n    public void setupTest(JavaSamplerContext context) {\n        serverUrl = context.getParameter("serverUrl");\n        topic = context.getParameter("topic");\n        tags = context.getParameter("tags");\n        keys = context.getParameter("keys");\n        body = context.getParameter("body");\n\n        producer = new DefaultMQProducer("jmeter");\n        producer.setNamesrvAddr(serverUrl);\n        try {\n            producer.start();\n        } catch (Exception e) {\n            e.printStackTrace();\n        }\n    }\n\n    @Override\n    public void teardownTest(JavaSamplerContext context) {\n        producer.shutdown();\n    }\n\n    @Override\n    public SampleResult runTest(JavaSamplerContext context) {\n        SampleResult result = new SampleResult();\n        try {\n            Message msg = new Message(topic, tags, keys, body.getBytes());\n            result.sampleStart();\n            SendResult send = producer.send(msg);\n            result.sampleEnd();\n            result.setSuccessful(true);\n            result.setResponseMessage(send.toString());\n            result.setSamplerData(body);\n        } catch (Exception e) {\n            //e.printStackTrace();\n            result.sampleEnd();\n            result.setSuccessful(false);\n        }\n\n        return result;\n    }\n\n    @Override\n    public Arguments getDefaultParameters() {\n        Arguments params = new Arguments();\n        params.addArgument("serverUrl", "localhost:9876");\n        params.addArgument("topic", "test_topic");\n        params.addArgument("tags", "test_tag");\n        params.addArgument("keys", "test_key");\n        params.addArgument("body", "test_body");\n        return params;\n    }\n}\n'})}),"\n",(0,r.jsx)(t.p,{children:"\u8be5\u63d2\u4ef6\u662f\u4e00\u4e2aRocketmq\u751f\u4ea7\u8005\u7684\u793a\u4f8b\u4ee3\u7801\uff0c\u5b83\u901a\u8fc7JMeter\u5bf9Rocketmq\u8fdb\u884c\u538b\u6d4b\u3002\u5176\u4e2d\uff0csetupTest()\u65b9\u6cd5\u7528\u4e8e\u521d\u59cb\u5316Producer\u5bf9\u8c61\uff0c\u5e76\u8fde\u63a5\u5230Rocketmq\u670d\u52a1\u7aef\uff1brunTest()\u65b9\u6cd5\u7528\u4e8e\u53d1\u9001\u6d88\u606f\uff1bteardownTest()\u65b9\u6cd5\u7528\u4e8e\u5173\u95edProducer\u5bf9\u8c61\u3002\u53e6\u5916\uff0cgetDefaultParameters()\u65b9\u6cd5\u7528\u4e8e\u8bbe\u7f6e\u9ed8\u8ba4\u53c2\u6570\uff0c\u4f8b\u5982Rocketmq\u670d\u52a1\u7aef\u7684\u5730\u5740\u7b49\u3002"}),"\n",(0,r.jsx)(t.h2,{id:"3-\u5728jmeter\u4e2d\u4f7f\u7528\u63d2\u4ef6",children:"3. \u5728JMeter\u4e2d\u4f7f\u7528\u63d2\u4ef6"}),"\n",(0,r.jsx)(t.p,{children:"\u5b8c\u6210\u63d2\u4ef6\u7684\u7f16\u5199\u540e\uff0c\u6211\u4eec\u9700\u8981\u5c06\u5176\u52a0\u5165\u5230JMeter\u4e2d\u8fdb\u884c\u4f7f\u7528\u3002\u4e0b\u9762\u662f\u5177\u4f53\u6b65\u9aa4\uff1a"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"\u5c06\u63d2\u4ef6\u7684class\u6587\u4ef6\u548c\u4f9d\u8d56\u7684jar\u5305\u653e\u5230JMeter\u7684lib/ext\u76ee\u5f55\u4e0b\uff1b"}),"\n",(0,r.jsx)(t.p,{children:"\u8fd9\u91cc\u6709\u4e2a\u5730\u65b9\u9700\u8981\u6ce8\u610f\u5c06\u9879\u76ee\u6253\u6210Jar\u5305\uff0c\u540c\u65f6\u9700\u8981\u5c06Jar\u4f9d\u8d56\u7684Jar\u5305\u4e5f\u9700\u8981\u653e\u5230JMeter\u7684lib/ext\u3002"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-xml",children:"        <plugins>\n\n            <plugin>\n                <groupId>org.apache.maven.plugins</groupId>\n                <artifactId>maven-assembly-plugin</artifactId>\n                <version>3.5.0</version>\n                <configuration>\n                    <archive>\n                        <manifest>\n                            <mainClass>com.xxg.Main</mainClass>\n                        </manifest>\n                    </archive>\n                    <descriptorRefs>\n                        <descriptorRef>jar-with-dependencies</descriptorRef>\n                    </descriptorRefs>\n                    <finalName>${project.name}</finalName>\n\n                </configuration>\n                <executions>\n                    <execution>\n                        <id>make-assembly</id>\n                        <phase>package</phase>\n                        <goals>\n                            <goal>single</goal>\n                        </goals>\n                    </execution>\n                </executions>\n            </plugin>\n\n        </plugins>\n"})}),"\n",(0,r.jsx)(t.p,{children:"\u4e3a\u4e86\u5c06\u4f9d\u8d56\u548c\u4ee3\u7801\u6253\u6210\u4e00\u4e2ajar\u5305"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:"https://raw.githubusercontent.com/mxsm/picture/main/java/java-tools/QQ%E6%88%AA%E5%9B%BE20230514090145.jpg",alt:"QQ\u622a\u56fe20230514090145"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:"https://raw.githubusercontent.com/mxsm/picture/main/java/java-tools/QQ%E6%88%AA%E5%9B%BE20230514090216.jpg",alt:"QQ\u622a\u56fe20230514090216"})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"\u542f\u52a8JMeter\uff0c\u5e76\u521b\u5efa\u4e00\u4e2a\u7ebf\u7a0b\u7ec4\uff1b"}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"\u5728\u7ebf\u7a0b\u7ec4\u4e0b\u521b\u5efa\u4e00\u4e2aJava\u8bf7\u6c42\uff1b"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:"https://raw.githubusercontent.com/mxsm/picture/main/java/java-tools/image-20230514091331584.png",alt:"image-20230514091331584"})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"\u5728Java\u8bf7\u6c42\u4e2d\uff0c\u9009\u62e9\u521a\u624d\u7f16\u5199\u7684\u63d2\u4ef6\u7c7b\uff08\u4f8b\u5982com.example.RocketmqProducerSampler\uff09\uff1b"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:"https://raw.githubusercontent.com/mxsm/picture/main/java/java-tools/image-20230514091409198.png",alt:"image-20230514091409198"})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"\u5728Java\u8bf7\u6c42\u4e2d\u8bbe\u7f6e\u63d2\u4ef6\u7684\u53c2\u6570\uff0c\u4f8b\u5982Rocketmq\u670d\u52a1\u7aef\u7684\u5730\u5740\u7b49\uff1b"}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"\u8fd0\u884cJMeter\u5373\u53ef\u5f00\u59cb\u538b\u6d4b\u3002"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:"https://raw.githubusercontent.com/mxsm/picture/main/java/java-tools/image-20230514091849575.png",alt:"image-20230514091849575"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"4-\u6ce8\u610f\u4e8b\u9879",children:"4. \u6ce8\u610f\u4e8b\u9879"}),"\n",(0,r.jsx)(t.p,{children:"\u5728\u4f7f\u7528JMeter\u8fdb\u884cRocketmq\u538b\u6d4b\u65f6\uff0c\u9700\u8981\u6ce8\u610f\u4ee5\u4e0b\u51e0\u70b9\uff1a"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"\u786e\u4fddRocketmq\u670d\u52a1\u7aef\u5df2\u7ecf\u542f\u52a8\uff0c\u5e76\u4e14\u6b63\u786e\u914d\u7f6e\u4e86Broker\u548cNameServer\uff1b"}),"\n",(0,r.jsx)(t.li,{children:"\u786e\u4fddRocketmq JMS \u5ba2\u6237\u7aef\u5df2\u7ecf\u6b63\u786e\u5b89\u88c5\uff0c\u5e76\u4e14\u53ef\u4ee5\u88abJMeter\u6b63\u5e38\u8c03\u7528\uff1b"}),"\n",(0,r.jsx)(t.li,{children:"\u5728JMeter\u4e2d\u8bbe\u7f6e\u597d\u538b\u6d4b\u7684\u53c2\u6570\uff0c\u4f8b\u5982\u6d88\u606f\u53d1\u9001\u95f4\u9694\u3001\u6d88\u606f\u5927\u5c0f\u7b49\uff1b"}),"\n",(0,r.jsx)(t.li,{children:"\u5728\u8fd0\u884cJMeter\u4e4b\u524d\uff0c\u6700\u597d\u5148\u8fdb\u884c\u4e00\u6b21\u7b80\u5355\u7684\u538b\u6d4b\uff0c\u4ee5\u786e\u4fdd\u914d\u7f6e\u6b63\u786e\uff0c\u5e76\u6392\u9664\u53ef\u80fd\u5b58\u5728\u7684\u95ee\u9898\u3002"}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"5-\u603b\u7ed3",children:"5. \u603b\u7ed3"}),"\n",(0,r.jsx)(t.p,{children:"\u672c\u6587\u4ecb\u7ecd\u4e86\u5982\u4f55\u4f7f\u7528JMeter\u5bf9Rocketmq\u8fdb\u884c\u538b\u6d4b\uff0c\u5e76\u901a\u8fc7\u7f16\u5199\u63d2\u4ef6\u6765\u5b9e\u73b0\u5bf9Rocketmq\u751f\u4ea7\u8005\u7684\u538b\u6d4b\u3002\u5728\u5b9e\u9645\u5e94\u7528\u4e2d\uff0c\u53ef\u4ee5\u6839\u636e\u5177\u4f53\u9700\u6c42\u8fdb\u884c\u53c2\u6570\u8bbe\u7f6e\u548c\u63d2\u4ef6\u7f16\u5199\uff0c\u4ee5\u6ee1\u8db3\u4e0d\u540c\u7684\u538b\u6d4b\u573a\u666f\u3002"}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["\u6211\u662f\u8682\u8681\u80cc\u5927\u8c61\uff0c\u6587\u7ae0\u5bf9\u4f60\u6709\u5e2e\u52a9\u7ed9",(0,r.jsx)(t.a,{href:"https://github.com/mxsm/mxsm-website",children:"\u9879\u76ee\u70b9\u4e2a\u2764"}),"\u5173\u6ce8\u6211",(0,r.jsxs)(t.a,{href:"https://github.com/mxsm",children:["GitHub",":mxsm"]}),"\uff0c\u6587\u7ae0\u6709\u4e0d\u6b63\u786e\u7684\u5730\u65b9\u8bf7\u60a8\u65a7\u6b63,\u521b\u5efa",(0,r.jsx)(t.a,{href:"https://github.com/mxsm/mxsm-website/issues",children:"ISSUE\u63d0\u4ea4PR"}),"~\u8c22\u8c22!"]}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>o});var r=n(6540);const a={},s=r.createContext(a);function c(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);