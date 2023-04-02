"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[3332],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>v});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,v=p["".concat(l,".").concat(m)]||p[m]||d[m]||a;return n?o.createElement(v,s(s({ref:t},u),{},{components:n})):o.createElement(v,s({ref:t},u))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:r,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1515:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const a={title:"EventMesh GRPC protocol upgrade design",linkTitle:"EventMesh GRPC protocol upgrade design",weight:202304021002,description:"EventMesh GRPC protocol upgrade design document"},s=void 0,i={unversionedId:"event-mesh/core/design-doc/grpc-protocol-upgrade-en",id:"event-mesh/core/design-doc/grpc-protocol-upgrade-en",title:"EventMesh GRPC protocol upgrade design",description:"EventMesh GRPC protocol upgrade design document",source:"@site/docs/event-mesh/core/design-doc/01-grpc-protocol-upgrade-en.md",sourceDirName:"event-mesh/core/design-doc",slug:"/event-mesh/core/design-doc/grpc-protocol-upgrade-en",permalink:"/docs/event-mesh/core/design-doc/grpc-protocol-upgrade-en",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/event-mesh/core/design-doc/01-grpc-protocol-upgrade-en.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1680402643,formattedLastUpdatedAt:"Apr 2, 2023",sidebarPosition:1,frontMatter:{title:"EventMesh GRPC protocol upgrade design",linkTitle:"EventMesh GRPC protocol upgrade design",weight:202304021002,description:"EventMesh GRPC protocol upgrade design document"},sidebar:"EventMesh",previous:{title:"EventMesh Grpc\u534f\u8bae\u5347\u7ea7\u8bbe\u8ba1",permalink:"/docs/event-mesh/core/design-doc/grpc-protocol-upgrade-cn"}},l={},c=[{value:"1. Background",id:"1-background",level:2},{value:"2. Architecture",id:"2-architecture",level:2},{value:"3. How to transform",id:"3-how-to-transform",level:2},{value:"3.1 Transformation of data protocol",id:"31-transformation-of-data-protocol",level:3},{value:"3.2 Service protocol transformation",id:"32-service-protocol-transformation",level:3},{value:"3.3 SDK upgrade and transformation",id:"33-sdk-upgrade-and-transformation",level:3},{value:"3.4 Runtime GRPC upgrade and transformation",id:"34-runtime-grpc-upgrade-and-transformation",level:3},{value:"4. Compatibility issues",id:"4-compatibility-issues",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"1-background"},"1. Background"),(0,r.kt)("p",null,"The current data exchange of EventMesh's GRPC protocol uses EventMesh's custom SimpleMessage protocol. To better support the CloudEvents specification, the SimpleMessage protocol is being modified to use CloudEvents-provided Protobuf format protocol."),(0,r.kt)("h2",{id:"2-architecture"},"2. Architecture"),(0,r.kt)("p",null,"SimpleMessage is mainly used for data exchange between the GRPC SDK and the runtime. A new EventMesh CloudEvent protocol (fully compatible with the CloudEvents specification) will be defined to replace SimpleMessage."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/eventmesh/core/design/eventmesh-sdk-grpc.png",alt:"eventmesh-sdk-grpc"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Tips: The Protobuf format in CloudEvents' current 1.0.2 release adds batch processing functionality, but the corresponding SDK has not yet provided batch processing implementation.")),(0,r.kt)("p",null,"By replacing the SimpleMessage protocol with the redefined EventMesh CloudEvent protocol, it will better implement the CloudEvents specification."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The SDK sends three types of messages via GRPC: EventMeshMessage, CloudEvent (in compliance with the CloudEvents specification), and Openmessage. These three types of messages are converted into the data format of EventMesh's CloudEvent protobuf format through a converter."),(0,r.kt)("li",{parentName:"ul"},"The three types of messages are converted into EventMesh's custom CloudEvent protobuf format through a converter, and transmitted during the GRPC call."),(0,r.kt)("li",{parentName:"ul"},"After receiving the EventMesh custom CloudEvent protobuf format message sent by the SDK, the Runtime performs necessary validation on the message, including required values in compliance with the CloudEvents specification, as well as values that EventMesh needs to validate."),(0,r.kt)("li",{parentName:"ul"},"Once the validation is successful, the data is converted into CloudEvent (in compliance with the CloudEvents specification) format for subsequent data processing.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Tips: The custom EventMesh CloudEvent protobuf format follows the same format specification as CloudEvents' Protobuf format.")),(0,r.kt)("h2",{id:"3-how-to-transform"},"3. How to transform"),(0,r.kt)("h3",{id:"31-transformation-of-data-protocol"},"3.1 Transformation of data protocol"),(0,r.kt)("p",null,"definition of data protocol\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-protobuf"},'syntax = "proto3";\n\npackage org.apache.eventmesh.cloudevents.v1;\n\nimport "google/protobuf/any.proto";\nimport "google/protobuf/timestamp.proto";\n\noption java_package = "org.apache.eventmesh.common.protocol.grpc.cloudevents";\noption java_multiple_files = true;\noption java_outer_classname = "EventMeshCloudEvents";\n\n\nmessage CloudEvent {\n\n  // -- CloudEvent Context Attributes\n\n  // Required Attributes\n  string id = 1;\n  string source = 2; // URI-reference\n  string spec_version = 3;\n  string type = 4;\n\n  // Optional & Extension Attributes\n  map<string, CloudEventAttributeValue> attributes = 5;\n\n  // -- CloudEvent Data (Bytes, Text, or Proto)\n  oneof  data {\n    bytes binary_data = 6;\n    string text_data = 7;\n    google.protobuf.Any proto_data = 8;\n  }\n\n  /**\n   * The CloudEvent specification defines\n   * seven attribute value types...\n   */\n\n  message CloudEventAttributeValue {\n\n    oneof attr {\n      bool ce_boolean = 1;\n      int32 ce_integer = 2;\n      string ce_string = 3;\n      bytes ce_bytes = 4;\n      string ce_uri = 5;\n      string ce_uri_ref = 6;\n      google.protobuf.Timestamp ce_timestamp = 7;\n    }\n  }\n}\n\n/**\n * CloudEvent Protobuf Batch Format\n *\n */\n\nmessage CloudEventBatch {\n  repeated CloudEvent events = 1;\n}\n')),(0,r.kt)("p",null,"The defined data protocol is completely identical to the CloudEvents 1.0.2 specification."),(0,r.kt)("h3",{id:"32-service-protocol-transformation"},"3.2 Service protocol transformation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-protobuf"},'syntax = "proto3";\n\npackage org.apache.eventmesh.cloudevents.v1;\n\nimport "google/protobuf/empty.proto";\nimport "eventmesh-cloudevents.proto";\n\noption java_package = "org.apache.eventmesh.common.protocol.grpc.cloudevents";\noption java_multiple_files = true;\noption java_outer_classname = "EventMeshGrpcService";\n\n\nservice PublisherService {\n  //publish event\n  rpc publish(CloudEvent) returns (CloudEvent);\n\n  //publish event with reply\n  rpc publishReply(CloudEvent) returns (CloudEvent);\n\n  //publish event one way\n  rpc publishOneWay(CloudEvent) returns (google.protobuf.Empty);\n\n  // publish batch event\n  rpc batchPublish(CloudEventBatch) returns (CloudEvent);\n\n  //publish batch event one way\n  rpc batchPublishOneWay(CloudEventBatch) returns (google.protobuf.Empty);\n}\n\nservice ConsumerService {\n  // The subscribed event will be delivered by invoking the webhook url in the Subscription\n  rpc subscribe(CloudEvent) returns (CloudEvent);\n\n  //  The subscribed event will be delivered through stream of Message\n  rpc subscribeStream(stream CloudEvent) returns (stream CloudEvent);\n\n  rpc unsubscribe(CloudEvent) returns (CloudEvent);\n}\n\nservice HeartbeatService {\n  rpc heartbeat(CloudEvent) returns (CloudEvent);\n}\n')),(0,r.kt)("h3",{id:"33-sdk-upgrade-and-transformation"},"3.3 SDK upgrade and transformation"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The SDK's external interfaces EventMeshGrpcProducer and EventMeshGrpcConsumer do not need to be modified (including publishing and subscribing), only a converter needs to be added to convert the three types of messages, EventMeshMessage, CloudEvent (according to CloudEvents specifications), and Openmessage, into the custom CloudEvent Protobuf format."),(0,r.kt)("li",{parentName:"ul"},"Due to the changes in the parameters of the Grpc service, corresponding changes need to be made to the SDK's Sub for Grpc.")),(0,r.kt)("h3",{id:"34-runtime-grpc-upgrade-and-transformation"},"3.4 Runtime GRPC upgrade and transformation"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Refactor the entire publishing and subscribing processing logic, add unified data verification and permission verification, as well as data processing, including the following processing classes\uff1a"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"ProducerService\uff1a  Processes publishing requests."),(0,r.kt)("li",{parentName:"ul"},"ConsumerService\uff1a Processes consuming requests."),(0,r.kt)("li",{parentName:"ul"},"HeartbeatService\uff1a Processes heartbeat requests.")),(0,r.kt)("p",{parentName:"li"},"The data verification and permission verification are processed uniformly.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Add a converter to convert EventMesh's CloudEvent Protobuf protocol data into CloudEvents-compliant data."))),(0,r.kt)("h2",{id:"4-compatibility-issues"},"4. Compatibility issues"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Using the custom CloudEvent protocol can be compatible with the standard protocol of CloudEvents very well."),(0,r.kt)("li",{parentName:"ul"},"EventMesh has no data compatibility issues when upgrading from a lower version to a higher version.")))}d.isMDXComponent=!0}}]);