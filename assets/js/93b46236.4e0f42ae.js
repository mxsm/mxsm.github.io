"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[5690],{2307:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var r=n(4848),s=n(8453);const a={title:"Spring BeanUtils\u4ece\u7cbe\u901a\u5230\u653e\u5f03\uff0cMapstruct\u4ece\u5165\u95e8\u5230\u7cbe\u901a",linkTitle:"Spring BeanUtils\u4ece\u7cbe\u901a\u5230\u653e\u5f03\uff0cMapstruct\u4ece\u5165\u95e8\u5230\u7cbe\u901a",date:new Date("2022-10-09T00:00:00.000Z"),weight:202210092113},i=void 0,o={id:"java/java-se/others/mapstruct",title:"Spring BeanUtils\u4ece\u7cbe\u901a\u5230\u653e\u5f03\uff0cMapstruct\u4ece\u5165\u95e8\u5230\u7cbe\u901a",description:"\u65e5\u5e38\u7684\u5f00\u53d1\u4e1a\u52a1\u7cfb\u7edf\u4e2d\u5bf9\u8c61\u4e4b\u95f4\u7684\u5c5e\u6027\u503c\u62f7\u8d1d\u662f\u4e0d\u53ef\u907f\u514d\u7684\uff0c\u8f6c\u6362\u8fc7\u7a0b\u4e2d\u4f7f\u7528\u7684\u6bd4\u8f83\u591a\u7684\u5c31\u662fSpring\u7684BeanUtils \u8fd9\u4e2a\u5de5\u5177\u7c7b(\u539f\u56e0\uff1a\u5927\u90e8\u5206\u7684\u9879\u76ee\u90fd\u662f\u4f7f\u7528\u7684Spring framework\u8fdb\u884c\u5f00\u53d1\u7684)\u3002\u7c7b\u4f3c\u7684\u5de5\u5177\u8fd8\u6709Apache Commons BeanUtils\u3002\u5076\u7136\u5728GitHub\u4e0a\u9762\u770b\u5230Mapstruct \u8fd9\u4e2a\u5de5\u5177\u6765\u5b9e\u73b0\u5bf9\u8c61DTO\u548cEntity\u4e4b\u95f4\u7684\u62f7\u8d1d\u6027\u80fd\u8fd8\u8fdc\u8d85 BeanUtils \u3002",source:"@site/docs/java/java-se/others/mapstruct.md",sourceDirName:"java/java-se/others",slug:"/java/java-se/others/mapstruct",permalink:"/docs/java/java-se/others/mapstruct",draft:!1,unlisted:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/java/java-se/others/mapstruct.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1719738085e3,frontMatter:{title:"Spring BeanUtils\u4ece\u7cbe\u901a\u5230\u653e\u5f03\uff0cMapstruct\u4ece\u5165\u95e8\u5230\u7cbe\u901a",linkTitle:"Spring BeanUtils\u4ece\u7cbe\u901a\u5230\u653e\u5f03\uff0cMapstruct\u4ece\u5165\u95e8\u5230\u7cbe\u901a",date:"2022-10-09T00:00:00.000Z",weight:202210092113},sidebar:"javase",previous:{title:"SpringBoot\u9879\u76ee\u4e2d\u7ebf\u7a0b\u6c60\u5728\u670d\u52a1\u7c7b\u65b9\u6cd5\u4e2d\u521b\u5efa\u540e\u5bfc\u81f4\u7ebf\u7a0b\u6570\u91cf\u66b4\u589e",permalink:"/docs/java/java-se/others/java-threadpool-experience"},next:{title:"\u4e1a\u52a1\u5f00\u53d1\u4e2d\u5de7\u5999\u8fd0\u7528\u4f4d\u8fd0\u7b97",permalink:"/docs/java/java-se/others/operators"}},c={},p=[{value:"1. Mapstruct\u5165\u95e8\u5230\u7cbe\u901a",id:"1-mapstruct\u5165\u95e8\u5230\u7cbe\u901a",level:3},{value:"1.1 Mapstruct\u5165\u95e8",id:"11-mapstruct\u5165\u95e8",level:4},{value:"1.2 Mapstruct\u8fdb\u9636",id:"12-mapstruct\u8fdb\u9636",level:4},{value:"1.3 Mapstruct\u7cbe\u901a",id:"13-mapstruct\u7cbe\u901a",level:4},{value:"2. Mapstruct\u9ad8\u6027\u80fd\u7684\u539f\u56e0",id:"2-mapstruct\u9ad8\u6027\u80fd\u7684\u539f\u56e0",level:3},{value:"4. \u603b\u7ed3",id:"4-\u603b\u7ed3",level:3}];function l(t){const e={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...t.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.p,{children:["\u65e5\u5e38\u7684\u5f00\u53d1\u4e1a\u52a1\u7cfb\u7edf\u4e2d\u5bf9\u8c61\u4e4b\u95f4\u7684\u5c5e\u6027\u503c\u62f7\u8d1d\u662f\u4e0d\u53ef\u907f\u514d\u7684\uff0c\u8f6c\u6362\u8fc7\u7a0b\u4e2d\u4f7f\u7528\u7684\u6bd4\u8f83\u591a\u7684\u5c31\u662fSpring\u7684",(0,r.jsx)(e.code,{children:"BeanUtils"})," \u8fd9\u4e2a\u5de5\u5177\u7c7b(\u539f\u56e0\uff1a\u5927\u90e8\u5206\u7684\u9879\u76ee\u90fd\u662f\u4f7f\u7528\u7684Spring framework\u8fdb\u884c\u5f00\u53d1\u7684)\u3002\u7c7b\u4f3c\u7684\u5de5\u5177\u8fd8\u6709Apache Commons BeanUtils\u3002\u5076\u7136\u5728GitHub\u4e0a\u9762\u770b\u5230",(0,r.jsx)(e.code,{children:"Mapstruct"})," \u8fd9\u4e2a\u5de5\u5177\u6765\u5b9e\u73b0\u5bf9\u8c61DTO\u548cEntity\u4e4b\u95f4\u7684\u62f7\u8d1d\u6027\u80fd\u8fd8\u8fdc\u8d85 ",(0,r.jsx)(e.code,{children:"BeanUtils"})," \u3002"]}),"\n",(0,r.jsx)(e.p,{children:"\u6211\u4eec\u7528JMH\u6765\u5bf9\u6570\u636e\u8fdb\u884c\u6d4b\u8bd5:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-java",children:'package com.github.mxsm.mapstruct;\n\nimport java.util.concurrent.TimeUnit;\nimport org.openjdk.jmh.annotations.Benchmark;\nimport org.openjdk.jmh.annotations.BenchmarkMode;\nimport org.openjdk.jmh.annotations.Fork;\nimport org.openjdk.jmh.annotations.Measurement;\nimport org.openjdk.jmh.annotations.Mode;\nimport org.openjdk.jmh.annotations.OutputTimeUnit;\nimport org.openjdk.jmh.annotations.Scope;\nimport org.openjdk.jmh.annotations.Setup;\nimport org.openjdk.jmh.annotations.State;\nimport org.openjdk.jmh.annotations.Threads;\nimport org.openjdk.jmh.annotations.Warmup;\nimport org.openjdk.jmh.results.format.ResultFormatType;\nimport org.openjdk.jmh.runner.Runner;\nimport org.openjdk.jmh.runner.RunnerException;\nimport org.openjdk.jmh.runner.options.Options;\nimport org.openjdk.jmh.runner.options.OptionsBuilder;\nimport org.springframework.beans.BeanUtils;\n\n@BenchmarkMode(Mode.Throughput)\n@Warmup(iterations = 3, time = 1)\n@Measurement(iterations = 5, time = 5)\n@Threads(1)\n@Fork(1)\n@State(value = Scope.Benchmark)\n@OutputTimeUnit(TimeUnit.SECONDS)\npublic class MapstructBenchmark {\n\n    private ClassA classA;\n\n    @Setup\n    public void init() {\n        classA = new ClassA();\n    }\n\n    @Benchmark\n    public void mapstructBenchmark() {\n        ClassA a = StructMapper.INSTANCE.classA2classA(classA);\n    }\n\n    @Benchmark\n    public void beanUtilsBenchmark() {\n        ClassA target = new ClassA();\n        BeanUtils.copyProperties(classA, target);\n    }\n\n    public static void main(String[] args) throws RunnerException {\n        Options opt = new OptionsBuilder()\n            .include(MapstructBenchmark.class.getSimpleName())\n            .result("result.json")\n            .resultFormat(ResultFormatType.JSON).build();\n        new Runner(opt).run();\n    }\n}\n'})}),"\n",(0,r.jsx)(e.p,{children:"\u8fd0\u884c\u540e\u7684\u5bf9\u6bd4\u7ed3\u679c\uff1a"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{src:"https://raw.githubusercontent.com/mxsm/picture/main/java/javase/image-20221009211510035.png",alt:"image-20221009211510035"})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{src:"https://raw.githubusercontent.com/mxsm/picture/main/java/javase/Mapstruct.png",alt:"Mapstruct"})}),"\n",(0,r.jsxs)(e.p,{children:["\u901a\u8fc7\u5bf9\u6bd4\u7ed3\u679c\u53d1\u73b0 ",(0,r.jsx)(e.code,{children:"Mapstruct"})," \u7684\u6548\u7387\u662f",(0,r.jsx)(e.code,{children:"BeanUtils"}),"\u51e0\u4e2a\u6570\u91cf\u7ea7\uff0c\u4e0b\u6587\u4f1a\u5206\u6790\u6027\u80fd\u4f18\u5f02\u7684\u539f\u56e0\u3002"]}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsxs)(e.p,{children:["Tips:\u9879\u76ee\u4ee3\u7801\u5730\u5740\uff1a",(0,r.jsx)(e.a,{href:"https://github.com/mxsm/benchmark/tree/main/mapstruct-benchmark",children:"https://github.com/mxsm/benchmark/tree/main/mapstruct-benchmark"})]}),"\n"]}),"\n",(0,r.jsx)(e.h3,{id:"1-mapstruct\u5165\u95e8\u5230\u7cbe\u901a",children:"1. Mapstruct\u5165\u95e8\u5230\u7cbe\u901a"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"maven\u4f9d\u8d56\uff1a"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-xml",children:"...\n<properties>\n    <org.mapstruct.version>1.5.3.Final</org.mapstruct.version>\n</properties>\n...\n<dependencies>\n    <dependency>\n        <groupId>org.mapstruct</groupId>\n        <artifactId>mapstruct</artifactId>\n        <version>${org.mapstruct.version}</version>\n    </dependency>\n</dependencies>\n...\n<build>\n    <plugins>\n        <plugin>\n            <groupId>org.apache.maven.plugins</groupId>\n            <artifactId>maven-compiler-plugin</artifactId>\n            <version>3.8.1</version>\n            <configuration>\n                <source>1.8</source>\n                <target>1.8</target>\n                <annotationProcessorPaths>\n                    <path>\n                        <groupId>org.mapstruct</groupId>\n                        <artifactId>mapstruct-processor</artifactId>\n                        <version>${org.mapstruct.version}</version>\n                    </path>\n                </annotationProcessorPaths>\n            </configuration>\n        </plugin>\n    </plugins>\n</build>\n...\n"})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"Gradle\u4f9d\u8d56\uff1a"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-groovy",children:"plugins {\n    ...\n    id \"com.diffplug.eclipse.apt\" version \"3.26.0\" // Only for Eclipse\n}\n\ndependencies {\n    ...\n    implementation 'org.mapstruct:mapstruct:1.5.3.Final'\n\n    annotationProcessor 'org.mapstruct:mapstruct-processor:1.5.3.Final'\n    testAnnotationProcessor 'org.mapstruct:mapstruct-processor:1.5.3.Final' // if you are using mapstruct in test code\n}\n...\n"})}),"\n",(0,r.jsx)(e.h4,{id:"11-mapstruct\u5165\u95e8",children:"1.1 Mapstruct\u5165\u95e8"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-java",children:"public class User {\n    private String name;\n    private String address;\n    private String password;\n    private String email;\n    private short age;\n    // Omitting parts of code: get set method\n}\n\npublic class UserEntity {\n    private String name;\n    private String address;\n    private String password;\n    private String email;\n    private short age;\n    // Omitting parts of code: get set method\n}\n\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u5b9a\u4e49\u4e00\u4e2a\u8f6c\u6362\u63a5\u53e3UserMapper:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-java",children:"@Mapper\npublic interface UserMapper {\n    UserMapper INSTANCE = Mappers.getMapper( UserMapper.class );\n    UserEntity convertUser2UserEntity(User user);\n}\n"})}),"\n",(0,r.jsxs)(e.p,{children:["\u5982\u679c\u548cMybatis\u6709\u6df7\u7528\u7684\u60c5\u51b5\u4e0b\u6ce8\u610f ",(0,r.jsx)(e.strong,{children:(0,r.jsx)(e.code,{children:"@Mapper"})})," \u662f ",(0,r.jsx)(e.strong,{children:(0,r.jsx)(e.code,{children:"Mapstruct"})})," \u7684\u6ce8\u89e3\u3002\u7f16\u5199\u4e00\u4e2a\u6d4b\u8bd5\u7c7b\u6d4b\u8bd5\u4e00\u4e0b\u662f\u5426\u53ef\u884c\uff1a"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-java",children:'public class MapstructTest {\n\n\n    public static void main(String[] args) {\n        User user = new User();\n        user.setAddress("\u5e7f\u4e1c\u7701");\n        user.setAge((short) 10);\n        user.setEmail("ljbmxsm@gmail.com");\n        user.setName("mxsm");\n        user.setPassword("mxsm");\n\n        UserEntity userEntity = UserMapper.INSTANCE.convertUser2UserEntity(user);\n        System.out.println(userEntity);\n    }\n\n}\n'})}),"\n",(0,r.jsx)(e.p,{children:"\u8fd0\u884c\u7ed3\u679c\uff1a"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{src:"https://raw.githubusercontent.com/mxsm/picture/main/java/javase/image-20221009211908370.png",alt:"image-20221009211908370"})}),"\n",(0,r.jsx)(e.p,{children:"\u5b8c\u7f8e\u62f7\u8d1d\u5b8c\u6210\u3002"}),"\n",(0,r.jsx)(e.h4,{id:"12-mapstruct\u8fdb\u9636",children:"1.2 Mapstruct\u8fdb\u9636"}),"\n",(0,r.jsx)(e.p,{children:"\u4e0a\u9762\u7684\u4f8b\u5b50\u662f\u4e24\u4e2a\u7c7b\u7684\u5c5e\u6027\u540d\u79f0\u90fd\u662f\u76f8\u540c\uff0c\u62f7\u8d1d\u4e5f\u662f\u4e00\u4e00\u5bf9\u5e94\u7684\u3002\u4f46\u662f\u5e73\u65f6\u7684\u5f00\u53d1\u4e2d\u53ef\u80fd\u4f1a\u51fa\u73b0\u4e24\u4e2a\u7c7b\u540d\u79f0\u4e0d\u662f\u4e00\u4e00\u5bf9\u5e94\u7684\u60c5\u51b5\uff1a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-java",children:"public class User {\n    private String name;\n    private String address;\n    private String password;\n    private String email;\n    private short age;\n    // Omitting parts of code: get set method\n}\n\npublic class UserEntity {\n    private String userName;\n    private String address;\n    private String pwd;\n    private String email;\n    private short age;\n    // Omitting parts of code: get set method\n}\n"})}),"\n",(0,r.jsxs)(e.p,{children:["\u5982\u679c\u8fd8\u662f\u4f7f\u7528\u4e0a\u9762\u7684\u5b9a\u4e49\u7684Mapper\u5c31\u4e0d\u80fd\u5b9e\u73b0\u5b8c\u6574\u7684\u6570\u636e\u62f7\u8d1d\u3002\u90a3\u4e48\u5c31\u53ef\u4ee5\u4f7f\u7528 ",(0,r.jsx)(e.strong,{children:(0,r.jsx)(e.code,{children:"@Mapping"})})," \u6ce8\u89e3\u6765\u6307\u5b9a\u5bf9\u8c61\u7684\u5c5e\u6027\u7684\u62f7\u8d1d"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-java",children:'@Mapper\npublic interface UserMapper {\n\n    UserMapper INSTANCE = Mappers.getMapper( UserMapper.class );\n\n    @Mapping(source = "name",target = "userName")\n    @Mapping(source = "password",target = "pwd")\n    UserEntity convertUser2UserEntity(User user);\n\n}\n'})}),"\n",(0,r.jsx)(e.p,{children:"\u540c\u6837\u4f7f\u7528\u4e0a\u9762\u7684\u6d4b\u8bd5\u7c7b\u770b\u4e00\u4e0b\u7ed3\u679c\uff1a"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{src:"https://raw.githubusercontent.com/mxsm/picture/main/java/javase/image-20221009212057087.png",alt:"image-20221009212057087"})}),"\n",(0,r.jsx)(e.h4,{id:"13-mapstruct\u7cbe\u901a",children:"1.3 Mapstruct\u7cbe\u901a"}),"\n",(0,r.jsxs)(e.p,{children:["\u66f4\u591a\u7684\u7528\u6cd5\u53ef\u4ee5\u53c2\u8003\u5b98\u7f51: ",(0,r.jsx)(e.a,{href:"https://mapstruct.org/documentation/stable/reference/html/",children:"https://mapstruct.org/documentation/stable/reference/html/"})]}),"\n",(0,r.jsxs)(e.p,{children:["\u7b14\u8005\u7f16\u5199\u6587\u7ae0\u7684\u65f6\u5019Mapstruct\u7684\u7248\u672c\u4e3a",(0,r.jsx)(e.strong,{children:"1.5.3.Final"})," \uff0c\u4e0d\u540c\u7684\u7248\u672c\u53ef\u80fd\u4e0d\u76f8\u540c\u5177\u4f53\u53ef\u4ee5\u770b\u6587\u6863\u3002\u5b98\u65b9\u6587\u6863\u7ed9\u4e86\u5f88\u591a\u66f4\u52a0\u9ad8\u7ea7\u7684\u7528\u6cd5\uff0c\u53ef\u4ee5\u5728\u6709\u9700\u8981\u7684\u65f6\u5019\u67e5\u8be2\u7528\u6cd5\u3002"]}),"\n",(0,r.jsx)(e.h3,{id:"2-mapstruct\u9ad8\u6027\u80fd\u7684\u539f\u56e0",children:"2. Mapstruct\u9ad8\u6027\u80fd\u7684\u539f\u56e0"}),"\n",(0,r.jsxs)(e.p,{children:["\u5728\u6587\u7ae0\u7684\u5f00\u7bc7\u7528JMH\u5bf9Mapstruct\u548cSpring\u7684BeanUtils\u8fdb\u884c\u4e86\u6027\u80fd\u7684\u5bf9\u6bd4\uff0c\u4ece\u5bf9\u6bd4\u7684\u6570\u636e\u53ef\u4ee5\u77e5\u9053\uff1a",(0,r.jsx)(e.strong,{children:"Mapstruct\u7684\u6027\u80fd\u8fdc\u9ad8\u4e8eBeanUtils"}),"\u3002\u4e0b\u9762\u5c31\u4ece\u539f\u7406\u6765\u5206\u6790\u4e00\u4e0b\u4e24\u8005\u6027\u80fd\u5dee\u8ddd\u7684\u539f\u56e0\u3002"]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"\u9996\u5148\u6765\u5206\u6790\u4e00\u4e0bSpring\u7684BeanUtils\u5de5\u5177\u7684\u5b9e\u73b0\uff1a"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-java",children:'\tprivate static void copyProperties(Object source, Object target, @Nullable Class<?> editable,\n\t\t\t@Nullable String... ignoreProperties) throws BeansException {\n\n\t\tAssert.notNull(source, "Source must not be null");\n\t\tAssert.notNull(target, "Target must not be null");\n\n\t\tClass<?> actualEditable = target.getClass();\n\t\tif (editable != null) {\n\t\t\tif (!editable.isInstance(target)) {\n\t\t\t\tthrow new IllegalArgumentException("Target class [" + target.getClass().getName() +\n\t\t\t\t\t\t"] not assignable to Editable class [" + editable.getName() + "]");\n\t\t\t}\n\t\t\tactualEditable = editable;\n\t\t}\n\t\tPropertyDescriptor[] targetPds = getPropertyDescriptors(actualEditable);\n\t\tList<String> ignoreList = (ignoreProperties != null ? Arrays.asList(ignoreProperties) : null);\n\n\t\tfor (PropertyDescriptor targetPd : targetPds) {\n\t\t\tMethod writeMethod = targetPd.getWriteMethod();\n\t\t\tif (writeMethod != null && (ignoreList == null || !ignoreList.contains(targetPd.getName()))) {\n\t\t\t\tPropertyDescriptor sourcePd = getPropertyDescriptor(source.getClass(), targetPd.getName());\n\t\t\t\tif (sourcePd != null) {\n\t\t\t\t\tMethod readMethod = sourcePd.getReadMethod();\n\t\t\t\t\tif (readMethod != null) {\n\t\t\t\t\t\tResolvableType sourceResolvableType = ResolvableType.forMethodReturnType(readMethod);\n\t\t\t\t\t\tResolvableType targetResolvableType = ResolvableType.forMethodParameter(writeMethod, 0);\n\n\t\t\t\t\t\t// Ignore generic types in assignable check if either ResolvableType has unresolvable generics.\n\t\t\t\t\t\tboolean isAssignable =\n\t\t\t\t\t\t\t\t(sourceResolvableType.hasUnresolvableGenerics() || targetResolvableType.hasUnresolvableGenerics() ?\n\t\t\t\t\t\t\t\t\t\tClassUtils.isAssignable(writeMethod.getParameterTypes()[0], readMethod.getReturnType()) :\n\t\t\t\t\t\t\t\t\t\ttargetResolvableType.isAssignableFrom(sourceResolvableType));\n\n\t\t\t\t\t\tif (isAssignable) {\n\t\t\t\t\t\t\ttry {\n\t\t\t\t\t\t\t\tif (!Modifier.isPublic(readMethod.getDeclaringClass().getModifiers())) {\n\t\t\t\t\t\t\t\t\treadMethod.setAccessible(true);\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\tObject value = readMethod.invoke(source);\n\t\t\t\t\t\t\t\tif (!Modifier.isPublic(writeMethod.getDeclaringClass().getModifiers())) {\n\t\t\t\t\t\t\t\t\twriteMethod.setAccessible(true);\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\twriteMethod.invoke(target, value);\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tcatch (Throwable ex) {\n\t\t\t\t\t\t\t\tthrow new FatalBeanException(\n\t\t\t\t\t\t\t\t\t\t"Could not copy property \'" + targetPd.getName() + "\' from source to target", ex);\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n'})}),"\n",(0,r.jsx)(e.p,{children:"\u4e0a\u9762\u662f\u65b9\u6cd5\uff0c\u901a\u8fc7\u5206\u6790\u4ee3\u7801\u53ef\u4ee5\u77e5\u9053\u4e3b\u8981\u662f\u901a\u8fc7\u83b7\u53d6\u5230\u6e90Java\u7c7b\u548c\u76ee\u6807Java\u7c7b\u7684Class\u7136\u540e\u83b7\u53d6\u5230\u65b9\u6cd5\u6765\u8fdb\u884c\u5904\u7406\u3002\u8f6c\u5316\u7684\u903b\u8f91\u975e\u5e38\u7684\u590d\u6742\u6709\u5f88\u591a\u7684\u904d\u5386\u53bb\u83b7\u53d6\u6e90\u7c7b\u548c\u76ee\u6807\u7c7b\u7684\u65b9\u6cd5\u6765\u3002\u7136\u540e\u6267\u884c\u6765\u8fbe\u5230\u5c5e\u6027\u7684\u62f7\u8d1d\u76ee\u7684\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u6240\u4ee5Spring BeanUtils\u4e3b\u8981\u662f\u901a\u8fc7\u53cd\u5c04\u6765\u5b9e\u73b0\u5bf9\u8c61\u5c5e\u6027\u7684Copy\uff0c\u800c\u53cd\u5c04\u6548\u7387\u4e0d\u9ad8\u5bf9\u6548\u7387\u6709\u8f83\u9ad8\u7684\u8981\u6c42\u5c3d\u91cf\u907f\u514d\u4f7f\u7528\u53cd\u5c04\u6765\u5904\u7406\u3002"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"Mapstruct\u9ad8\u6548\u7684\u5206\u6790\uff1a"})}),"\n",(0,r.jsx)(e.p,{children:"\u9996\u5148\u6211\u4eec\u53ef\u4ee5\u770b\u4e00\u4e0b\u9879\u76ee\u7f16\u8bd1\u540e\u7684\u76ee\u6807\u7c7b\uff1a"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{src:"C:%5CUsers%5Cmxsm%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20221009213136989.png",alt:"image-20221009213136989"})}),"\n",(0,r.jsx)(e.p,{children:"\u4f60\u4f1a\u53d1\u73b0\u591a\u51fa\u6765\u4e86\u4e00\u4e2aclass\u6587\u4ef6\u540d\u79f0\u662f\u5b9a\u4e49\u7684Mapper\u63a5\u53e3\u7684\u7c7b\u7684\u540d\u79f0\u52a0\u4e0aImpl\u3002\u7136\u540e\u770b\u4e00\u4e0bUserMapperImpl.class\u4e2d\u7684\u5185\u5bb9"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{src:"https://raw.githubusercontent.com/mxsm/picture/main/java/javase/image-20221009213328257.png",alt:"image-20221009213328257"})}),"\n",(0,r.jsxs)(e.p,{children:["\u770b\u5230\u8fd9\u91cc\u4f60\u4f1a\u53d1\u73b0\u8fd9\u4e2a\u662f\u5b9e\u73b0\u4e86UserMapper\u63a5\u53e3\u5e76\u4e14\u5b9e\u73b0\u4e86 ",(0,r.jsx)(e.strong,{children:(0,r.jsx)(e.code,{children:"UserMapper#convertUser2UserEntity"})})," \u65b9\u6cd5\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:["\u65b9\u6cd5\u7684\u5b9e\u73b0\u4e5f\u5f88\u7b80\u5355\u5c31\u662f\u521b\u5efa\u4e00\u4e2a\u76ee\u6807\u5bf9\u8c61\u7136\u540e\u6839\u636e\u4e00\u5b9a\u7684\u89c4\u5219(\u4e0a\u56fe\u8fd9\u4e2a\u662f\u4e00\u4e2a\u7b80\u5355\u7684\u89c4\u5219)\u5c06\u6570\u636e\u901a\u8fc7set\u65b9\u6cd5\u5c06\u76ee\u6807\u7c7b\u548c\u6e90\u7c7b\u9700\u8981\u62f7\u8d1d\u7684\u5c5e\u6027\u8fdb\u884c\u4e00\u4e00\u5bf9\u5e94\u3002",(0,r.jsx)(e.strong,{children:(0,r.jsx)(e.code,{children:"Mapstruct"})})," \u5feb\u7684\u79d8\u5bc6\u4e5f\u5c31\u662f\u5728\u8fd9\u91cc\uff1a",(0,r.jsx)(e.strong,{children:"\u7528\u548cJava\u539f\u751f\u7684set\u4e00\u6837\u7684\u65b9\u5f0f\u8bbe\u7f6e\u503c\uff0c\u964d\u4f4e\u4e86\u4e00\u5207\u4e0d\u5fc5\u8981\u7684\u6027\u80fd\u635f\u8017\u3002"})]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"\u4ece\u8fd9\u91cc\u53ef\u4ee5\u770b\u51fa\u6765Mapstruct\u4f7f\u7528\u4e86\u67d0\u79cd\u6280\u672f\u5728\u7f16\u8bd1\u65f6\u6839\u636e\u6ce8\u89e3\u548c\u4e00\u4e9b\u89c4\u5219\u7684\u914d\u7f6e\u751f\u6210\u4e86\u4e00\u4e2a\u63a5\u53e3\u5bf9\u5e94\u7684\u5b9e\u73b0\u7c7b\uff0c\u8fd9\u4e2a\u5b9e\u73b0\u7c7b\u7528Java\u539f\u751f\u7684set\u65b9\u5f0f\u6765\u5bf9\u6570\u636e\u8fdb\u884c\u8bbe\u503c\u3002"})}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"Tips: \u540e\u7eed\u4f1a\u66f4\u65b0\u4e00\u7bc7\u4e13\u95e8\u7684\u6587\u7ae0\u6765\u8bb2\u89e3\u5982\u4f55\u751f\u6210\u8fd9\u4e2a\u5b9e\u73b0\u7c7b\uff0c\u4ee5\u53ca\u66f4\u52a0\u6df1\u5c42\u6b21\u7684\u539f\u7406"}),"\n"]}),"\n",(0,r.jsx)(e.h3,{id:"4-\u603b\u7ed3",children:"4. \u603b\u7ed3"}),"\n",(0,r.jsx)(e.p,{children:"Mapstruct\u7684\u9ad8\u6027\u80fd\u662f\u6bcb\u5eb8\u7f6e\u7591\u7684\uff0c\u5982\u679c\u4f60\u7ecf\u5e38\u4f7f\u7528Spring\u7684BeanUtils\u6765\u8fdb\u884c\u5bf9\u8c61\u4e4b\u95f4\u7684\u5c5e\u6027\u62f7\u8d1d\u53ef\u4ee5\u8003\u8651\u5c1d\u8bd5\u4f7f\u7528Mapstruct\u3002Mapstruct\u7684\u4e0a\u624b\u6210\u672c\u4e5f\u4e0d\u9ad8\uff0c\u80fd\u591f\u6ee1\u8db3\u5927\u591a\u6570\u5f00\u53d1\u8005\u9700\u8981\u7684\u573a\u666f\u3002\u5b98\u65b9\u63d0\u4f9b\u7684\u6587\u6863\u4e5f\u76f8\u5f53\u7684\u9f50\u5168\u57fa\u672c\u4e0a\u7684\u4f8b\u5b50\u90fd\u80fd\u5728\u5b98\u7f51\u627e\u5230\u3002"}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsxs)(e.p,{children:["\u6211\u662f\u8682\u8681\u80cc\u5927\u8c61\uff0c\u6587\u7ae0\u5bf9\u4f60\u6709\u5e2e\u52a9\u70b9\u8d5e\u5173\u6ce8\u6211\uff0c\u6587\u7ae0\u6709\u4e0d\u6b63\u786e\u7684\u5730\u65b9\u8bf7\u60a8\u65a7\u6b63\u7559\u8a00\u8bc4\u8bba~\u8c22\u8c22! \u5927\u5bb6\u53ef\u4ee5Follow\u6211\u7684",(0,r.jsx)(e.a,{href:"https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fmxsm",children:(0,r.jsx)(e.strong,{children:"GitHub mxsm"})})]}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"\u53c2\u8003\u6587\u6863\uff1a"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://mapstruct.org/documentation/stable/reference/html/",children:"https://mapstruct.org/documentation/stable/reference/html/"})}),"\n"]})]})}function d(t={}){const{wrapper:e}={...(0,s.R)(),...t.components};return e?(0,r.jsx)(e,{...t,children:(0,r.jsx)(l,{...t})}):l(t)}},8453:(t,e,n)=>{n.d(e,{R:()=>i,x:()=>o});var r=n(6540);const s={},a=r.createContext(s);function i(t){const e=r.useContext(a);return r.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function o(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:i(t.components),r.createElement(a.Provider,{value:e},t.children)}}}]);