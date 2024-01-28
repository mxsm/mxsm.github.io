"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[7283],{2179:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var n=r(5893),o=r(1151),l=r(4866),i=r(5162);const s={title:"OpenTelemetry-Metrics(\u6307\u6807)",linkTitle:"OpenTelemetry-Metrics(\u6307\u6807)",weight:202303111427,description:"OpenTelemetry-Metrics(\u6307\u6807)\u76f8\u5173\u77e5\u8bc6\u4ee5\u53ca\u4f8b\u5b50"},a=void 0,c={id:"cloud-native/open-telemetry/concept/open-telemetry-metrics",title:"OpenTelemetry-Metrics(\u6307\u6807)",description:"OpenTelemetry-Metrics(\u6307\u6807)\u76f8\u5173\u77e5\u8bc6\u4ee5\u53ca\u4f8b\u5b50",source:"@site/docs/cloud-native/open-telemetry/concept/04-open-telemetry-metrics.md",sourceDirName:"cloud-native/open-telemetry/concept",slug:"/cloud-native/open-telemetry/concept/open-telemetry-metrics",permalink:"/docs/cloud-native/open-telemetry/concept/open-telemetry-metrics",draft:!1,unlisted:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/cloud-native/open-telemetry/concept/04-open-telemetry-metrics.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1706451902,formattedLastUpdatedAt:"Jan 28, 2024",sidebarPosition:4,frontMatter:{title:"OpenTelemetry-Metrics(\u6307\u6807)",linkTitle:"OpenTelemetry-Metrics(\u6307\u6807)",weight:202303111427,description:"OpenTelemetry-Metrics(\u6307\u6807)\u76f8\u5173\u77e5\u8bc6\u4ee5\u53ca\u4f8b\u5b50"},sidebar:"OpenTelemetry",previous:{title:"OpenTelemetry\u5165\u95e8-Signals",permalink:"/docs/cloud-native/open-telemetry/concept/open-telemetry-signals"},next:{title:"\u5b9e\u6218OpenTelemetry Trace\uff1a\u4f7f\u7528Java\u5b9e\u73b0\u5206\u5e03\u5f0f\u8ddf\u8e2a",permalink:"/docs/cloud-native/open-telemetry/concept/open-telemetry-trace"}},u={},d=[{value:"1. OpenTelemetry Metrics\u7c7b\u578b",id:"1-opentelemetry-metrics\u7c7b\u578b",level:2},{value:"2. \u624b\u52a8\u4eea\u8868\u5316\u6b65\u9aa4",id:"2-\u624b\u52a8\u4eea\u8868\u5316\u6b65\u9aa4",level:2},{value:"3. OpenTelemetry Metrics\u5bfc\u5165Prometheus",id:"3-opentelemetry-metrics\u5bfc\u5165prometheus",level:2}];function p(e){const t={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"1-opentelemetry-metrics\u7c7b\u578b",children:"1. OpenTelemetry Metrics\u7c7b\u578b"}),"\n",(0,n.jsx)(t.p,{children:"\u6307\u6807API\u5b9a\u4e49\u4e86\u5404\u79cd\u4eea\u5668\u3002\u4eea\u5668\u8bb0\u5f55\u6d4b\u91cf\u503c\uff0c\u8fd9\u4e9b\u503c\u7531\u6307\u6807SDK\u805a\u5408\u5e76\u6700\u7ec8\u5728\u8fdb\u7a0b\u5916\u5bfc\u51fa\u3002\u4eea\u5668\u6709\u540c\u6b65\u548c\u5f02\u6b65\u4e24\u79cd\u5f62\u5f0f\u3002\u540c\u6b65\u4eea\u5668\u5728\u53d1\u751f\u65f6\u8bb0\u5f55\u6d4b\u91cf\u503c\u3002\u5f02\u6b65\u4eea\u5668\u6ce8\u518c\u56de\u8c03\uff0c\u6bcf\u6b21\u96c6\u5408\u65f6\u8c03\u7528\u4e00\u6b21\uff0c\u5e76\u5728\u8be5\u65f6\u95f4\u70b9\u8bb0\u5f55\u6d4b\u91cf\u503c\u3002\u53ef\u7528\u4ee5\u4e0b\u4eea\u5668\uff1a"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"LongCounter/DoubleCounter"}),"\uff1a\u4ec5\u8bb0\u5f55\u6b63\u503c\uff0c\u5177\u6709\u540c\u6b65\u548c\u5f02\u6b65\u9009\u9879\u3002\u5bf9\u4e8e\u8ba1\u6570\u8bf8\u5982\u901a\u8fc7\u7f51\u7edc\u53d1\u9001\u7684\u5b57\u8282\u6570\u4e4b\u7c7b\u7684\u5185\u5bb9\u975e\u5e38\u6709\u7528\u3002\u8ba1\u6570\u5668\u6d4b\u91cf\u9ed8\u8ba4\u6309\u59cb\u7ec8\u589e\u52a0\u7684\u5355\u8c03\u603b\u548c\u805a\u5408\u3002"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"LongUpDownCounter/DoubleUpDownCounter"}),"\uff1a\u8bb0\u5f55\u6b63\u8d1f\u503c\uff0c\u5177\u6709\u540c\u6b65\u548c\u5f02\u6b65\u9009\u9879\u3002\u5bf9\u4e8e\u8ba1\u7b97\u4e0a\u5347\u548c\u4e0b\u964d\u7684\u5185\u5bb9\u975e\u5e38\u6709\u7528\uff0c\u4f8b\u5982\u961f\u5217\u7684\u5927\u5c0f\u3002\u4e0a\u4e0b\u8ba1\u6570\u5668\u6d4b\u91cf\u9ed8\u8ba4\u6309\u975e\u5355\u8c03\u603b\u548c\u805a\u5408\u3002"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"LongGauge/DoubleGauge"}),"\uff1a\u4f7f\u7528\u5f02\u6b65\u56de\u8c03\u6d4b\u91cf\u77ac\u65f6\u503c\u3002\u5bf9\u4e8e\u8bb0\u5f55\u4e0d\u80fd\u8de8\u5c5e\u6027\u5408\u5e76\u7684\u503c\u975e\u5e38\u6709\u7528\uff0c\u4f8b\u5982CPU\u5229\u7528\u7387\u767e\u5206\u6bd4\u3002\u8ba1\u91cf\u6d4b\u91cf\u9ed8\u8ba4\u6309\u8ba1\u91cf\u8868\u805a\u5408\u3002"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"LongHistogram/DoubleHistogram"}),"\uff1a\u8bb0\u5f55\u6700\u6709\u7528\u4e8e\u5206\u6790\u7684\u6d4b\u91cf\u503c\uff0c\u4f8b\u5982\u4f5c\u4e3a\u76f4\u65b9\u56fe\u5206\u5e03\u3002\u6ca1\u6709\u5f02\u6b65\u9009\u9879\u53ef\u7528\u3002\u5bf9\u4e8e\u8bb0\u5f55HTTP\u670d\u52a1\u5668\u5904\u7406\u8bf7\u6c42\u6240\u9700\u7684\u65f6\u95f4\u6301\u7eed\u65f6\u95f4\u4e4b\u7c7b\u7684\u5185\u5bb9\u975e\u5e38\u6709\u7528\u3002\u76f4\u65b9\u56fe\u6d4b\u91cf\u9ed8\u8ba4\u6309\u663e\u5f0f\u6876\u76f4\u65b9\u56fe\u805a\u5408\u3002"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"2-\u624b\u52a8\u4eea\u8868\u5316\u6b65\u9aa4",children:"2. \u624b\u52a8\u4eea\u8868\u5316\u6b65\u9aa4"}),"\n",(0,n.jsx)(t.p,{children:"\u5f15\u5165Jar\u5230\u9879\u76ee"}),"\n","\n","\n",(0,n.jsxs)(l.Z,{children:[(0,n.jsx)(i.Z,{value:"Maven",label:"Maven",default:!0,children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-xml",children:"<project>\n    <dependencyManagement>\n        <dependencies>\n            <dependency>\n                <groupId>io.opentelemetry</groupId>\n                <artifactId>opentelemetry-bom</artifactId>\n                <version>1.24.0</version>\n                <type>pom</type>\n                <scope>import</scope>\n            </dependency>\n        </dependencies>\n    </dependencyManagement>\n\n    <dependencies>\n        <dependency>\n            <groupId>io.opentelemetry</groupId>\n            <artifactId>opentelemetry-api</artifactId>\n        </dependency>\n        <dependency>\n            <groupId>io.opentelemetry</groupId>\n            <artifactId>opentelemetry-sdk</artifactId>\n        </dependency>\n        <dependency>\n            <groupId>io.opentelemetry</groupId>\n            <artifactId>opentelemetry-exporter-otlp</artifactId>\n        </dependency>\n        <dependency>\n            <groupId>io.opentelemetry</groupId>\n            <artifactId>opentelemetry-semconv</artifactId>\n            <version>1.24.0-alpha</version>\n        </dependency>\n    </dependencies>\n</project>\n"})})}),(0,n.jsx)(i.Z,{value:"Gradle",label:"Gradle",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-groovy",children:"dependencies {\n    implementation 'io.opentelemetry:opentelemetry-api:1.24.0'\n    implementation 'io.opentelemetry:opentelemetry-sdk:1.24.0'\n    implementation 'io.opentelemetry:opentelemetry-exporter-otlp:1.24.0'\n    implementation 'io.opentelemetry:opentelemetry-semconv:1.24.0-alpha'\n}\n"})})})]}),"\n",(0,n.jsx)(t.p,{children:"\u521b\u5efa\u4f8b\u5b50\uff1a"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:'//\u521b\u5efa\u8d44\u6e90\nResource resource = Resource.getDefault()\n  .merge(Resource.create(Attributes.of(ResourceAttributes.SERVICE_NAME, "logical-service-name")));\n\n//\u521b\u5efaTracerProvider\nSdkTracerProvider sdkTracerProvider = SdkTracerProvider.builder()\n  .addSpanProcessor(BatchSpanProcessor.builder(OtlpGrpcSpanExporter.builder().build()).build())\n  .setResource(resource)\n  .build();\n//\u521b\u5efaMeterProvider\nSdkMeterProvider sdkMeterProvider = SdkMeterProvider.builder()\n  .registerMetricReader(PeriodicMetricReader.builder(OtlpGrpcMetricExporter.builder().build()).build())\n  .setResource(resource)\n  .build();\n\n//\u521b\u5efaOpenTelemetry\u5b9e\u4f8b\nOpenTelemetry openTelemetry = OpenTelemetrySdk.builder()\n  .setTracerProvider(sdkTracerProvider)\n  .setMeterProvider(sdkMeterProvider)\n  .setPropagators(ContextPropagators.create(W3CTraceContextPropagator.getInstance()))\n  .buildAndRegisterGlobal();\n'})}),"\n",(0,n.jsx)(t.h2,{id:"3-opentelemetry-metrics\u5bfc\u5165prometheus",children:"3. OpenTelemetry Metrics\u5bfc\u5165Prometheus"}),"\n",(0,n.jsx)(t.p,{children:"\u4e0b\u9762\u5199\u4e00\u4e2a\u4f8b\u5b50\u5c06OpenTelemetry Metrics\u5bfc\u5165Prometheus\u3002\u6211\u4eec\u8fd9\u91cc\u9700\u8981\u589e\u52a0\u4e00\u4e2a\u5bfc\u5165"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-xml",children:'implementation("io.opentelemetry:opentelemetry-exporter-prometheus:1.23.1-alpha")\n'})}),"\n",(0,n.jsx)(t.p,{children:"\u4ee3\u7801\u5982\u4e0b\uff1a"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:'public class OpenTelemetryTest {\n\n    public static void main(String[] args) throws InterruptedException {\n\n        Resource resource = Resource.getDefault().merge(Resource.create(Attributes.empty()));\n        SdkMeterProvider build = SdkMeterProvider.builder().setResource(resource)\n            .registerMetricReader(PrometheusHttpServer.builder().setPort(7070).build()).build();\n        OpenTelemetrySdk openTelemetrySdk = OpenTelemetrySdk.builder().setMeterProvider(build).buildAndRegisterGlobal();\n\n        Meter mxsm = openTelemetrySdk.getMeter("mxsm");\n        MemoryMXBean mxb = ManagementFactory.getMemoryMXBean();\n        AtomicLong  cc= new AtomicLong();\n        mxsm.upDownCounterBuilder("process.runtime.jvm.memory.usage").setUnit("Bytes")\n            .buildWithCallback(record -> record.record(Runtime.getRuntime().totalMemory(),Attributes.of(AttributeKey.stringKey("type"),"heap")));\n        mxsm.upDownCounterBuilder("process.runtime.jvm.memory.usage_after_last_gc").setUnit("bytes").buildWithCallback(record->record.record(cc.longValue(), Attributes.of(AttributeKey.stringKey("type"),"heap")));\n        LongCounter build1 = mxsm.counterBuilder("mxsm.qqq").setUnit("1").build();\n        long i =1;\n        for(; ;){\n            cc.set(mxb.getHeapMemoryUsage().getUsed());\n            build1.add(i);\n            TimeUnit.SECONDS.sleep(1);\n        }\n\n    }\n\n}\n'})}),"\n",(0,n.jsx)(t.p,{children:"\u9996\u5148\u672c\u5730\u8fd0\u884cPrometheus\u3002\u914d\u7f6e\u597d\u76f8\u5173\u914d\u7f6e\u3002\u8fd0\u884c\u4e0a\u9762\u7684\u7a0b\u5e8f\u7136\u540e\u6253\u5f00Prometheus\u7684\u63a7\u5236\u53f0\u7f51\u9875"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://raw.githubusercontent.com/mxsm/picture/main/eventmesh/core/quick-start/image-20230311224950073.png",alt:"image-20230311224950073"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://raw.githubusercontent.com/mxsm/picture/main/eventmesh/core/quick-start/image-20230311225006443.png",alt:"image-20230311225006443"})}),"\n",(0,n.jsxs)(t.p,{children:["\u66f4\u591a\u8bed\u4e49\u8f6c\u6362\u7684\u53ef\u4ee5\u53c2\u7167",(0,n.jsx)(t.a,{href:"https://opentelemetry.io/docs/reference/specification/metrics/semantic_conventions/%E3%80%82",children:"https://opentelemetry.io/docs/reference/specification/metrics/semantic_conventions/\u3002"})]})]})}function m(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},5162:(e,t,r)=>{r.d(t,{Z:()=>i});r(7294);var n=r(512);const o={tabItem:"tabItem_Ymn6"};var l=r(5893);function i(e){let{children:t,hidden:r,className:i}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,n.Z)(o.tabItem,i),hidden:r,children:t})}},4866:(e,t,r)=>{r.d(t,{Z:()=>T});var n=r(7294),o=r(512),l=r(2466),i=r(6550),s=r(469),a=r(1980),c=r(7392),u=r(12);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:o}}=e;return{value:t,label:r,attributes:n,default:o}}))}(r);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:r}=e;const o=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,a._X)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(o.location.search);t.set(l,e),o.replace({...o.location,search:t.toString()})}),[l,o])]}function y(e){const{defaultValue:t,queryString:r=!1,groupId:o}=e,l=p(e),[i,a]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[c,d]=h({queryString:r,groupId:o}),[y,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[o,l]=(0,u.Nk)(r);return[o,(0,n.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:o}),g=(()=>{const e=c??y;return m({value:e,tabValues:l})?e:null})();(0,s.Z)((()=>{g&&a(g)}),[g]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);a(e),d(e),b(e)}),[d,b,l]),tabValues:l}}var b=r(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=r(5893);function f(e){let{className:t,block:r,selectedValue:n,selectValue:i,tabValues:s}=e;const a=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),u=e=>{const t=e.currentTarget,r=a.indexOf(t),o=s[r].value;o!==n&&(c(t),i(o))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=a.indexOf(e.currentTarget)+1;t=a[r]??a[0];break}case"ArrowLeft":{const r=a.indexOf(e.currentTarget)-1;t=a[r]??a[a.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t),children:s.map((e=>{let{value:t,label:r,attributes:l}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>a.push(e),onKeyDown:d,onClick:u,...l,className:(0,o.Z)("tabs__item",g.tabItem,l?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function x(e){let{lazy:t,children:r,selectedValue:o}=e;const l=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===o));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==o})))})}function j(e){const t=y(e);return(0,v.jsxs)("div",{className:(0,o.Z)("tabs-container",g.tabList),children:[(0,v.jsx)(f,{...e,...t}),(0,v.jsx)(x,{...e,...t})]})}function T(e){const t=(0,b.Z)();return(0,v.jsx)(j,{...e,children:d(e.children)},String(t))}},1151:(e,t,r)=>{r.d(t,{Z:()=>s,a:()=>i});var n=r(7294);const o={},l=n.createContext(o);function i(e){const t=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);