"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[5009],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),i=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=i(e.components);return r.createElement(u.Provider,{value:t},e.children)},c="mdxType",v={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,u=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),c=i(n),d=o,m=c["".concat(u,".").concat(d)]||c[d]||v[d]||l;return n?r.createElement(m,s(s({ref:t},p),{},{components:n})):r.createElement(m,s({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,s=new Array(l);s[0]=d;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a[c]="string"==typeof e?e:o,s[1]=a;for(var i=2;i<l;i++)s[i]=n[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2426:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>v,frontMatter:()=>l,metadata:()=>a,toc:()=>i});var r=n(7462),o=(n(7294),n(3905));const l={title:"EventMesh Grpc\u534f\u8bae\u5347\u7ea7\u8bbe\u8ba1",linkTitle:"EventMesh Grpc\u534f\u8bae\u5347\u7ea7\u8bbe\u8ba1",weight:202304021002,description:"EventMesh Grpc\u534f\u8bae\u5347\u7ea7\u8bbe\u8ba1\u6587\u6863"},s=void 0,a={unversionedId:"event-mesh/core/design-doc/grpc-protocol-upgrade-cn",id:"event-mesh/core/design-doc/grpc-protocol-upgrade-cn",title:"EventMesh Grpc\u534f\u8bae\u5347\u7ea7\u8bbe\u8ba1",description:"EventMesh Grpc\u534f\u8bae\u5347\u7ea7\u8bbe\u8ba1\u6587\u6863",source:"@site/docs/event-mesh/core/02-design-doc/01-grpc-protocol-upgrade-cn.md",sourceDirName:"event-mesh/core/02-design-doc",slug:"/event-mesh/core/design-doc/grpc-protocol-upgrade-cn",permalink:"/docs/event-mesh/core/design-doc/grpc-protocol-upgrade-cn",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/event-mesh/core/02-design-doc/01-grpc-protocol-upgrade-cn.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1691846266,formattedLastUpdatedAt:"Aug 12, 2023",sidebarPosition:1,frontMatter:{title:"EventMesh Grpc\u534f\u8bae\u5347\u7ea7\u8bbe\u8ba1",linkTitle:"EventMesh Grpc\u534f\u8bae\u5347\u7ea7\u8bbe\u8ba1",weight:202304021002,description:"EventMesh Grpc\u534f\u8bae\u5347\u7ea7\u8bbe\u8ba1\u6587\u6863"},sidebar:"EventMesh",previous:{title:"Overview",permalink:"/docs/event-mesh/sidebar/"},next:{title:"EventMesh GRPC protocol upgrade design",permalink:"/docs/event-mesh/core/design-doc/grpc-protocol-upgrade-en"}},u={},i=[{value:"1. \u80cc\u666f",id:"1-\u80cc\u666f",level:2},{value:"2. \u67b6\u6784",id:"2-\u67b6\u6784",level:2},{value:"3. \u5982\u4f55\u6539\u9020",id:"3-\u5982\u4f55\u6539\u9020",level:2},{value:"3.1 \u6570\u636e\u534f\u8bae\u6539\u9020",id:"31-\u6570\u636e\u534f\u8bae\u6539\u9020",level:3},{value:"3.2 \u670d\u52a1\u534f\u8bae\u6539\u9020",id:"32-\u670d\u52a1\u534f\u8bae\u6539\u9020",level:3},{value:"3.3 SDK\u7684\u5347\u7ea7\u6539\u9020",id:"33-sdk\u7684\u5347\u7ea7\u6539\u9020",level:3},{value:"3.4 Runtime GRPC\u7684\u5347\u7ea7\u6539\u9020",id:"34-runtime-grpc\u7684\u5347\u7ea7\u6539\u9020",level:3},{value:"4. \u517c\u5bb9\u6027\u95ee\u9898",id:"4-\u517c\u5bb9\u6027\u95ee\u9898",level:2}],p={toc:i},c="wrapper";function v(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"1-\u80cc\u666f"},"1. \u80cc\u666f"),(0,o.kt)("p",null,"\u5f53\u524dEventMesh\u7684GRPC\u534f\u8bae\u7684\u6570\u636e\u4ea4\u4e92\u4f7f\u7528\u7684\u7684EventMesh\u81ea\u5b9a\u4e49\u7684\u7684SimpleMessage\u534f\u8bae\uff0c\u4e3a\u4e86\u66f4\u597d\u7684\u652f\u6301CloudEvents\u89c4\u8303\u73b0\u5728\u5bf9SimpleMessage\u534f\u8bae\u8fdb\u884c\u6539\u9020\uff0c\u4f7f\u7528CloudEvents\u63d0\u4f9b\u7684Protobuf\u7684\u683c\u5f0f\u534f\u8bae\u3002"),(0,o.kt)("h2",{id:"2-\u67b6\u6784"},"2. \u67b6\u6784"),(0,o.kt)("p",null,"SimpleMessage\u4e3b\u8981\u7528\u4e8eGrpc SDK\u4e0eRuntime\u4e4b\u95f4\u7684\u6570\u636e\u4ea4\u4e92\uff0c\u91cd\u65b0\u5b9a\u4e49\u4e00\u4e2aEventMesh\u7684CloudEvent\u534f\u8bae(\u5b8c\u5168\u517c\u5bb9CloudEvents\u89c4\u8303)\u66ff\u6362SimpleMessage\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/eventmesh/core/design/eventmesh-sdk-grpc.png",alt:"eventmesh-sdk-grpc"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Tips: \u5728CloudEvents\u7684\u5f53\u524d1.0.2\u7684\u53d1\u5e03\u7248\u672c\u4e2d\uff0cProtobuf\u683c\u5f0f\u589e\u52a0\u6279\u5904\u7406\u529f\u80fd\uff0c\u4f46\u662f\u5bf9\u5e94\u7684SDK\u6682\u65f6\u8fd8\u6ca1\u63d0\u4f9b\u6279\u5904\u7406\u7684\u5b9e\u73b0\u3002")),(0,o.kt)("p",null,"\u901a\u8fc7\u91cd\u65b0\u5b9a\u4e49\u7684EventMesh\u7684CloudEvent\u534f\u8bae\u6765\u66ff\u6362SimpleMessage\u534f\u8bae\uff0c\u80fd\u591f\u66f4\u597d\u7684\u5b9e\u73b0CloudEvents\u7684\u89c4\u8303\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"SDK GRPC\u53d1\u9001\u7684\u6d88\u606f\u6709\u4e09\u7c7b\uff1aEventMeshMessage\uff0cCloudEvent(CloudEvents\u89c4\u8303)\u3001Openmessage\u3002\u5c06\u8fd9\u4e09\u7c7b\u6d88\u606f\u901a\u8fc7\u8f6c\u6362\u5668\u8f6c\u6362\u6210EventMesh\u7684CloudEvent\u7684\u6570\u636e\u683c\u5f0f\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u5c06\u4e0a\u8ff0\u7684\u4e09\u7c7b\u6d88\u606f\u901a\u8fc7\u8f6c\u5316\u5668\u8f6c\u6362\u6210EventMesh\u81ea\u5b9a\u4e49\u7684CloudEvent protobuf\u683c\u5f0f\u7684\u6d88\u606f\uff0c\u5728GRPC\u8c03\u7528\u7684\u65f6\u5019\u8fdb\u884c\u4f20\u8f93"),(0,o.kt)("li",{parentName:"ul"},"Runtime\u63a5\u6536\u5230SDK\u53d1\u9001\u7684EventMesh\u81ea\u5b9a\u4e49\u7684CloudEvent protobuf\u683c\u5f0f\u7684\u6d88\u606f\u540e\u5bf9\u6d88\u606f\u8fdb\u884c\u5fc5\u8981\u7684\u6821\u9a8c\uff0c\u8fd9\u91cc\u7684\u6821\u9a8c\u5305\u62ecCloudEvents\u89c4\u8303\u7684\u5fc5\u987b\u503c\uff0c\u4ee5\u53caEventMesh\u9700\u8981\u6821\u9a8c\u7684\u503c\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u6821\u9a8c\u901a\u8fc7\u540e\u5c06\u6570\u636e\u8f6c\u6362\u6210CloudEvent(CloudEvents\u89c4\u8303)\u7684\u6570\u636e\uff0c\u8fdb\u884c\u540e\u7eed\u7684\u6570\u636e\u5904\u7406\u3002")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Tips: \u81ea\u5b9a\u4e49\u7684EventMesh CloudEvent protobuf\u683c\u5f0f\u548cCloudEvents\u7684Protobuf\u7684\u683c\u5f0f\u89c4\u8303\u4e00\u6837")),(0,o.kt)("h2",{id:"3-\u5982\u4f55\u6539\u9020"},"3. \u5982\u4f55\u6539\u9020"),(0,o.kt)("h3",{id:"31-\u6570\u636e\u534f\u8bae\u6539\u9020"},"3.1 \u6570\u636e\u534f\u8bae\u6539\u9020"),(0,o.kt)("p",null,"\u6570\u636e\u534f\u8bae\u5b9a\u4e49\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-protobuf"},'syntax = "proto3";\n\npackage org.apache.eventmesh.cloudevents.v1;\n\nimport "google/protobuf/any.proto";\nimport "google/protobuf/timestamp.proto";\n\noption java_package = "org.apache.eventmesh.common.protocol.grpc.cloudevents";\noption java_multiple_files = true;\noption java_outer_classname = "EventMeshCloudEvents";\n\n\nmessage CloudEvent {\n\n  // -- CloudEvent Context Attributes\n\n  // Required Attributes\n  string id = 1;\n  string source = 2; // URI-reference\n  string spec_version = 3;\n  string type = 4;\n\n  // Optional & Extension Attributes\n  map<string, CloudEventAttributeValue> attributes = 5;\n\n  // -- CloudEvent Data (Bytes, Text, or Proto)\n  oneof  data {\n    bytes binary_data = 6;\n    string text_data = 7;\n    google.protobuf.Any proto_data = 8;\n  }\n\n  /**\n   * The CloudEvent specification defines\n   * seven attribute value types...\n   */\n\n  message CloudEventAttributeValue {\n\n    oneof attr {\n      bool ce_boolean = 1;\n      int32 ce_integer = 2;\n      string ce_string = 3;\n      bytes ce_bytes = 4;\n      string ce_uri = 5;\n      string ce_uri_ref = 6;\n      google.protobuf.Timestamp ce_timestamp = 7;\n    }\n  }\n}\n\n/**\n * CloudEvent Protobuf Batch Format\n *\n */\n\nmessage CloudEventBatch {\n  repeated CloudEvent events = 1;\n}\n')),(0,o.kt)("p",null,"\u5b9a\u4e49\u7684\u6570\u636e\u534f\u8bae\u548cCloudEvents\u76841.0.2\u89c4\u8303\u5b8c\u5168\u76f8\u540c."),(0,o.kt)("h3",{id:"32-\u670d\u52a1\u534f\u8bae\u6539\u9020"},"3.2 \u670d\u52a1\u534f\u8bae\u6539\u9020"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-protobuf"},'syntax = "proto3";\n\npackage org.apache.eventmesh.cloudevents.v1;\n\nimport "google/protobuf/empty.proto";\nimport "eventmesh-cloudevents.proto";\n\noption java_package = "org.apache.eventmesh.common.protocol.grpc.cloudevents";\noption java_multiple_files = true;\noption java_outer_classname = "EventMeshGrpcService";\n\n\nservice PublisherService {\n  //publish event\n  rpc publish(CloudEvent) returns (CloudEvent);\n\n  //publish event with reply\n  rpc publishReply(CloudEvent) returns (CloudEvent);\n\n  //publish event one way\n  rpc publishOneWay(CloudEvent) returns (google.protobuf.Empty);\n\n  // publish batch event\n  rpc batchPublish(CloudEventBatch) returns (CloudEvent);\n\n  //publish batch event one way\n  rpc batchPublishOneWay(CloudEventBatch) returns (google.protobuf.Empty);\n}\n\nservice ConsumerService {\n  // The subscribed event will be delivered by invoking the webhook url in the Subscription\n  rpc subscribe(CloudEvent) returns (CloudEvent);\n\n  //  The subscribed event will be delivered through stream of Message\n  rpc subscribeStream(stream CloudEvent) returns (stream CloudEvent);\n\n  rpc unsubscribe(CloudEvent) returns (CloudEvent);\n}\n\nservice HeartbeatService {\n  rpc heartbeat(CloudEvent) returns (CloudEvent);\n}\n')),(0,o.kt)("h3",{id:"33-sdk\u7684\u5347\u7ea7\u6539\u9020"},"3.3 SDK\u7684\u5347\u7ea7\u6539\u9020"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"SDK\u5bf9\u5916\u7684\u63a5\u53e3",(0,o.kt)("inlineCode",{parentName:"li"},"EventMeshGrpcProducer"),"\u548c",(0,o.kt)("inlineCode",{parentName:"li"},"EventMeshGrpcConsumer"),"\u65e0\u9700\u6539\u52a8(\u5305\u62ec\u53d1\u5e03\u548c\u8ba2\u9605)\uff0c\u53ea\u9700\u8981\u589e\u52a0\u4e00\u4e2a\u8f6c\u6362\u5668\u5c06EventMeshMessage\uff0cCloudEvent(CloudEvents\u89c4\u8303)\u3001Openmessage\u4e09\u7c7b\u6d88\u606f\u8f6c\u6362\u6210\u81ea\u5b9a\u4e49\u7684CloudEvent\u7684Protobuf\u683c\u5f0f\u7684\u6570\u636e\u5373\u53ef\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u56e0\u4e3aGrpc\u7684\u670d\u52a1\u53c2\u6570\u6709\u6539\u52a8\uff0c\u6240\u4ee5\u9700\u8981\u5bf9SDK\u7684Grpc\u7684Sub\u8fdb\u884c\u76f8\u5bf9\u5e94\u7684\u6539\u52a8\u3002")),(0,o.kt)("h3",{id:"34-runtime-grpc\u7684\u5347\u7ea7\u6539\u9020"},"3.4 Runtime GRPC\u7684\u5347\u7ea7\u6539\u9020"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u91cd\u6784\u6574\u4e2a\u53d1\u5e03\u548c\u8ba2\u9605\u7684\u5904\u7406\u903b\u8f91\uff0c\u589e\u52a0\u7edf\u4e00\u6570\u636e\u6821\u9a8c\u548c\u6743\u9650\u6821\u9a8c\uff0c\u4ee5\u53ca\u6570\u636e\u7684\u5904\u7406\uff0c\u5305\u62ec\u91cd\u6784\u4ee5\u4e0b\u5904\u7406\u7c7b\uff1a"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"ProducerService\uff1a \u5904\u7406\u53d1\u5e03\u8bf7\u6c42"),(0,o.kt)("li",{parentName:"ul"},"ConsumerService\uff1a \u5904\u7406\u6d88\u8d39\u8bf7\u6c42"),(0,o.kt)("li",{parentName:"ul"},"HeartbeatService\uff1a \u5904\u7406\u5fc3\u8df3\u8bf7\u6c42")),(0,o.kt)("p",{parentName:"li"},"\u5c06\u6570\u636e\u6821\u9a8c\u6743\u9650\u6821\u9a8c\u8fdb\u884c\u7edf\u4e00\u5904\u7406\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u589e\u52a0\u8f6c\u6362\u5668\u5c06EventMesh\u7684CloudEvent Protobuf\u534f\u8bae\u6570\u636e\u8f6c\u6362\u6210CloudEvents\u89c4\u8303\u7684\u6570\u636e"))),(0,o.kt)("h2",{id:"4-\u517c\u5bb9\u6027\u95ee\u9898"},"4. \u517c\u5bb9\u6027\u95ee\u9898"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u81ea\u5b9a\u4e49\u7684CloudEvent\u534f\u8bae\u80fd\u591f\u5f88\u597d\u7684\u5bf9CloudEvents\u7684\u6807\u51c6\u534f\u8bae\u8fdb\u884c\u517c\u5bb9\u3002"),(0,o.kt)("li",{parentName:"ul"},"EventMesh\u4ece\u4f4e\u7248\u672c\u5347\u7ea7\u5230\u9ad8\u7248\u672c\u65e0\u6570\u636e\u7684\u517c\u5bb9\u6027\u95ee\u9898\u3002")))}v.isMDXComponent=!0}}]);