"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[7283],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>y});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=c(r),d=a,y=p["".concat(u,".").concat(d)]||p[d]||m[d]||o;return r?n.createElement(y,l(l({ref:t},s),{},{components:r})):n.createElement(y,l({ref:t},s))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(7294),a=r(6010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:r,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,l),hidden:r},t)}},4866:(e,t,r)=>{r.d(t,{Z:()=>T});var n=r(7462),a=r(7294),o=r(6010),l=r(2466),i=r(6550),u=r(1980),c=r(7392),s=r(12);function p(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function m(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??p(r);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function d(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function y(e){let{queryString:t=!1,groupId:r}=e;const n=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,u._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function b(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,o=m(e),[l,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[u,c]=y({queryString:r,groupId:n}),[p,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,s.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:n}),g=(()=>{const e=u??p;return d({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{g&&i(g)}),[g]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),b(e)}),[c,b,o]),tabValues:o}}var g=r(2389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:r,selectedValue:i,selectValue:u,tabValues:c}=e;const s=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),m=e=>{const t=e.currentTarget,r=s.indexOf(t),n=c[r].value;n!==i&&(p(t),u(n))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const r=s.indexOf(e.currentTarget)+1;t=s[r]??s[0];break}case"ArrowLeft":{const r=s.indexOf(e.currentTarget)-1;t=s[r]??s[s.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},c.map((e=>{let{value:t,label:r,attributes:l}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>s.push(e),onKeyDown:d,onClick:m},l,{className:(0,o.Z)("tabs__item",f.tabItem,l?.className,{"tabs__item--active":i===t})}),r??t)})))}function h(e){let{lazy:t,children:r,selectedValue:n}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function k(e){const t=b(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",f.tabList)},a.createElement(v,(0,n.Z)({},e,t)),a.createElement(h,(0,n.Z)({},e,t)))}function T(e){const t=(0,g.Z)();return a.createElement(k,(0,n.Z)({key:String(t)},e))}},3227:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>u,default:()=>y,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=r(7462),a=(r(7294),r(3905)),o=r(4866),l=r(5162);const i={title:"OpenTelemetry-Metrics(\u6307\u6807)",linkTitle:"OpenTelemetry-Metrics(\u6307\u6807)",weight:202303111427,description:"OpenTelemetry-Metrics(\u6307\u6807)\u76f8\u5173\u77e5\u8bc6\u4ee5\u53ca\u4f8b\u5b50"},u=void 0,c={unversionedId:"cloud-native/open-telemetry/concept/open-telemetry-metrics",id:"cloud-native/open-telemetry/concept/open-telemetry-metrics",title:"OpenTelemetry-Metrics(\u6307\u6807)",description:"OpenTelemetry-Metrics(\u6307\u6807)\u76f8\u5173\u77e5\u8bc6\u4ee5\u53ca\u4f8b\u5b50",source:"@site/docs/cloud-native/open-telemetry/concept/04-open-telemetry-metrics.md",sourceDirName:"cloud-native/open-telemetry/concept",slug:"/cloud-native/open-telemetry/concept/open-telemetry-metrics",permalink:"/docs/cloud-native/open-telemetry/concept/open-telemetry-metrics",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/cloud-native/open-telemetry/concept/04-open-telemetry-metrics.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1683078484,formattedLastUpdatedAt:"May 3, 2023",sidebarPosition:4,frontMatter:{title:"OpenTelemetry-Metrics(\u6307\u6807)",linkTitle:"OpenTelemetry-Metrics(\u6307\u6807)",weight:202303111427,description:"OpenTelemetry-Metrics(\u6307\u6807)\u76f8\u5173\u77e5\u8bc6\u4ee5\u53ca\u4f8b\u5b50"},sidebar:"OpenTelemetry",previous:{title:"OpenTelemetry\u5165\u95e8-Signals",permalink:"/docs/cloud-native/open-telemetry/concept/open-telemetry-signals"}},s={},p=[{value:"1. OpenTelemetry Metrics\u7c7b\u578b",id:"1-opentelemetry-metrics\u7c7b\u578b",level:2},{value:"2. \u624b\u52a8\u4eea\u8868\u5316\u6b65\u9aa4",id:"2-\u624b\u52a8\u4eea\u8868\u5316\u6b65\u9aa4",level:2},{value:"3. OpenTelemetry Metrics\u5bfc\u5165Prometheus",id:"3-opentelemetry-metrics\u5bfc\u5165prometheus",level:2}],m={toc:p},d="wrapper";function y(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1-opentelemetry-metrics\u7c7b\u578b"},"1. OpenTelemetry Metrics\u7c7b\u578b"),(0,a.kt)("p",null,"\u6307\u6807API\u5b9a\u4e49\u4e86\u5404\u79cd\u4eea\u5668\u3002\u4eea\u5668\u8bb0\u5f55\u6d4b\u91cf\u503c\uff0c\u8fd9\u4e9b\u503c\u7531\u6307\u6807SDK\u805a\u5408\u5e76\u6700\u7ec8\u5728\u8fdb\u7a0b\u5916\u5bfc\u51fa\u3002\u4eea\u5668\u6709\u540c\u6b65\u548c\u5f02\u6b65\u4e24\u79cd\u5f62\u5f0f\u3002\u540c\u6b65\u4eea\u5668\u5728\u53d1\u751f\u65f6\u8bb0\u5f55\u6d4b\u91cf\u503c\u3002\u5f02\u6b65\u4eea\u5668\u6ce8\u518c\u56de\u8c03\uff0c\u6bcf\u6b21\u96c6\u5408\u65f6\u8c03\u7528\u4e00\u6b21\uff0c\u5e76\u5728\u8be5\u65f6\u95f4\u70b9\u8bb0\u5f55\u6d4b\u91cf\u503c\u3002\u53ef\u7528\u4ee5\u4e0b\u4eea\u5668\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"LongCounter/DoubleCounter"),"\uff1a\u4ec5\u8bb0\u5f55\u6b63\u503c\uff0c\u5177\u6709\u540c\u6b65\u548c\u5f02\u6b65\u9009\u9879\u3002\u5bf9\u4e8e\u8ba1\u6570\u8bf8\u5982\u901a\u8fc7\u7f51\u7edc\u53d1\u9001\u7684\u5b57\u8282\u6570\u4e4b\u7c7b\u7684\u5185\u5bb9\u975e\u5e38\u6709\u7528\u3002\u8ba1\u6570\u5668\u6d4b\u91cf\u9ed8\u8ba4\u6309\u59cb\u7ec8\u589e\u52a0\u7684\u5355\u8c03\u603b\u548c\u805a\u5408\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"LongUpDownCounter/DoubleUpDownCounter"),"\uff1a\u8bb0\u5f55\u6b63\u8d1f\u503c\uff0c\u5177\u6709\u540c\u6b65\u548c\u5f02\u6b65\u9009\u9879\u3002\u5bf9\u4e8e\u8ba1\u7b97\u4e0a\u5347\u548c\u4e0b\u964d\u7684\u5185\u5bb9\u975e\u5e38\u6709\u7528\uff0c\u4f8b\u5982\u961f\u5217\u7684\u5927\u5c0f\u3002\u4e0a\u4e0b\u8ba1\u6570\u5668\u6d4b\u91cf\u9ed8\u8ba4\u6309\u975e\u5355\u8c03\u603b\u548c\u805a\u5408\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"LongGauge/DoubleGauge"),"\uff1a\u4f7f\u7528\u5f02\u6b65\u56de\u8c03\u6d4b\u91cf\u77ac\u65f6\u503c\u3002\u5bf9\u4e8e\u8bb0\u5f55\u4e0d\u80fd\u8de8\u5c5e\u6027\u5408\u5e76\u7684\u503c\u975e\u5e38\u6709\u7528\uff0c\u4f8b\u5982CPU\u5229\u7528\u7387\u767e\u5206\u6bd4\u3002\u8ba1\u91cf\u6d4b\u91cf\u9ed8\u8ba4\u6309\u8ba1\u91cf\u8868\u805a\u5408\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"LongHistogram/DoubleHistogram"),"\uff1a\u8bb0\u5f55\u6700\u6709\u7528\u4e8e\u5206\u6790\u7684\u6d4b\u91cf\u503c\uff0c\u4f8b\u5982\u4f5c\u4e3a\u76f4\u65b9\u56fe\u5206\u5e03\u3002\u6ca1\u6709\u5f02\u6b65\u9009\u9879\u53ef\u7528\u3002\u5bf9\u4e8e\u8bb0\u5f55HTTP\u670d\u52a1\u5668\u5904\u7406\u8bf7\u6c42\u6240\u9700\u7684\u65f6\u95f4\u6301\u7eed\u65f6\u95f4\u4e4b\u7c7b\u7684\u5185\u5bb9\u975e\u5e38\u6709\u7528\u3002\u76f4\u65b9\u56fe\u6d4b\u91cf\u9ed8\u8ba4\u6309\u663e\u5f0f\u6876\u76f4\u65b9\u56fe\u805a\u5408\u3002")),(0,a.kt)("h2",{id:"2-\u624b\u52a8\u4eea\u8868\u5316\u6b65\u9aa4"},"2. \u624b\u52a8\u4eea\u8868\u5316\u6b65\u9aa4"),(0,a.kt)("p",null,"\u5f15\u5165Jar\u5230\u9879\u76ee"),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Maven",label:"Maven",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<project>\n    <dependencyManagement>\n        <dependencies>\n            <dependency>\n                <groupId>io.opentelemetry</groupId>\n                <artifactId>opentelemetry-bom</artifactId>\n                <version>1.24.0</version>\n                <type>pom</type>\n                <scope>import</scope>\n            </dependency>\n        </dependencies>\n    </dependencyManagement>\n\n    <dependencies>\n        <dependency>\n            <groupId>io.opentelemetry</groupId>\n            <artifactId>opentelemetry-api</artifactId>\n        </dependency>\n        <dependency>\n            <groupId>io.opentelemetry</groupId>\n            <artifactId>opentelemetry-sdk</artifactId>\n        </dependency>\n        <dependency>\n            <groupId>io.opentelemetry</groupId>\n            <artifactId>opentelemetry-exporter-otlp</artifactId>\n        </dependency>\n        <dependency>\n            <groupId>io.opentelemetry</groupId>\n            <artifactId>opentelemetry-semconv</artifactId>\n            <version>1.24.0-alpha</version>\n        </dependency>\n    </dependencies>\n</project>\n"))),(0,a.kt)(l.Z,{value:"Gradle",label:"Gradle",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-groovy"},"dependencies {\n    implementation 'io.opentelemetry:opentelemetry-api:1.24.0'\n    implementation 'io.opentelemetry:opentelemetry-sdk:1.24.0'\n    implementation 'io.opentelemetry:opentelemetry-exporter-otlp:1.24.0'\n    implementation 'io.opentelemetry:opentelemetry-semconv:1.24.0-alpha'\n}\n")))),(0,a.kt)("p",null,"\u521b\u5efa\u4f8b\u5b50\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'//\u521b\u5efa\u8d44\u6e90\nResource resource = Resource.getDefault()\n  .merge(Resource.create(Attributes.of(ResourceAttributes.SERVICE_NAME, "logical-service-name")));\n\n//\u521b\u5efaTracerProvider\nSdkTracerProvider sdkTracerProvider = SdkTracerProvider.builder()\n  .addSpanProcessor(BatchSpanProcessor.builder(OtlpGrpcSpanExporter.builder().build()).build())\n  .setResource(resource)\n  .build();\n//\u521b\u5efaMeterProvider\nSdkMeterProvider sdkMeterProvider = SdkMeterProvider.builder()\n  .registerMetricReader(PeriodicMetricReader.builder(OtlpGrpcMetricExporter.builder().build()).build())\n  .setResource(resource)\n  .build();\n\n//\u521b\u5efaOpenTelemetry\u5b9e\u4f8b\nOpenTelemetry openTelemetry = OpenTelemetrySdk.builder()\n  .setTracerProvider(sdkTracerProvider)\n  .setMeterProvider(sdkMeterProvider)\n  .setPropagators(ContextPropagators.create(W3CTraceContextPropagator.getInstance()))\n  .buildAndRegisterGlobal();\n')),(0,a.kt)("h2",{id:"3-opentelemetry-metrics\u5bfc\u5165prometheus"},"3. OpenTelemetry Metrics\u5bfc\u5165Prometheus"),(0,a.kt)("p",null,"\u4e0b\u9762\u5199\u4e00\u4e2a\u4f8b\u5b50\u5c06OpenTelemetry Metrics\u5bfc\u5165Prometheus\u3002\u6211\u4eec\u8fd9\u91cc\u9700\u8981\u589e\u52a0\u4e00\u4e2a\u5bfc\u5165"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'implementation("io.opentelemetry:opentelemetry-exporter-prometheus:1.23.1-alpha")\n')),(0,a.kt)("p",null,"\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'public class OpenTelemetryTest {\n\n    public static void main(String[] args) throws InterruptedException {\n\n        Resource resource = Resource.getDefault().merge(Resource.create(Attributes.empty()));\n        SdkMeterProvider build = SdkMeterProvider.builder().setResource(resource)\n            .registerMetricReader(PrometheusHttpServer.builder().setPort(7070).build()).build();\n        OpenTelemetrySdk openTelemetrySdk = OpenTelemetrySdk.builder().setMeterProvider(build).buildAndRegisterGlobal();\n\n        Meter mxsm = openTelemetrySdk.getMeter("mxsm");\n        MemoryMXBean mxb = ManagementFactory.getMemoryMXBean();\n        AtomicLong  cc= new AtomicLong();\n        mxsm.upDownCounterBuilder("process.runtime.jvm.memory.usage").setUnit("Bytes")\n            .buildWithCallback(record -> record.record(Runtime.getRuntime().totalMemory(),Attributes.of(AttributeKey.stringKey("type"),"heap")));\n        mxsm.upDownCounterBuilder("process.runtime.jvm.memory.usage_after_last_gc").setUnit("bytes").buildWithCallback(record->record.record(cc.longValue(), Attributes.of(AttributeKey.stringKey("type"),"heap")));\n        LongCounter build1 = mxsm.counterBuilder("mxsm.qqq").setUnit("1").build();\n        long i =1;\n        for(; ;){\n            cc.set(mxb.getHeapMemoryUsage().getUsed());\n            build1.add(i);\n            TimeUnit.SECONDS.sleep(1);\n        }\n\n    }\n\n}\n')),(0,a.kt)("p",null,"\u9996\u5148\u672c\u5730\u8fd0\u884cPrometheus\u3002\u914d\u7f6e\u597d\u76f8\u5173\u914d\u7f6e\u3002\u8fd0\u884c\u4e0a\u9762\u7684\u7a0b\u5e8f\u7136\u540e\u6253\u5f00Prometheus\u7684\u63a7\u5236\u53f0\u7f51\u9875"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/eventmesh/core/quick-start/image-20230311224950073.png",alt:"image-20230311224950073"})),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/eventmesh/core/quick-start/image-20230311225006443.png",alt:"image-20230311225006443"})),(0,a.kt)("p",null,"\u66f4\u591a\u8bed\u4e49\u8f6c\u6362\u7684\u53ef\u4ee5\u53c2\u7167",(0,a.kt)("a",{parentName:"p",href:"https://opentelemetry.io/docs/reference/specification/metrics/semantic_conventions/%E3%80%82"},"https://opentelemetry.io/docs/reference/specification/metrics/semantic_conventions/\u3002")))}y.isMDXComponent=!0}}]);