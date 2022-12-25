"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[7294],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>v});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(a),d=r,v=u["".concat(c,".").concat(d)]||u[d]||m[d]||l;return a?n.createElement(v,i(i({ref:t},p),{},{components:a})):n.createElement(v,i({ref:t},p))}));function v(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1520:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const l={title:"\u63a5\u53e3\u62bd\u8c61\u7c7b\u7684\u6289\u62e9",date:new Date("2019-12-17T00:00:00.000Z")},i=void 0,o={unversionedId:"java/java-se/others/interface-abstract-class",id:"java/java-se/others/interface-abstract-class",title:"\u63a5\u53e3\u62bd\u8c61\u7c7b\u7684\u6289\u62e9",description:"\u62bd\u8c61\u7c7b",source:"@site/docs/java/java-se/others/interface-abstract-class.md",sourceDirName:"java/java-se/others",slug:"/java/java-se/others/interface-abstract-class",permalink:"/docs/java/java-se/others/interface-abstract-class",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/java/java-se/others/interface-abstract-class.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1671958290,formattedLastUpdatedAt:"Dec 25, 2022",frontMatter:{title:"\u63a5\u53e3\u62bd\u8c61\u7c7b\u7684\u6289\u62e9",date:"2019-12-17T00:00:00.000Z"},sidebar:"javase",previous:{title:"\u52a8\u6001\u4ee3\u7406\u4e0e\u9759\u6001\u4ee3\u7406",permalink:"/docs/java/java-se/others/dynamic-static"},next:{title:"Java\u7a0b\u5e8f\u4e2d\u83b7\u53d6\u5f53\u524d\u8fdb\u7a0b\u7684\u8fdb\u7a0bID(Pid)",permalink:"/docs/java/java-se/others/java-application-get-pid"}},c={},s=[{value:"\u62bd\u8c61\u7c7b",id:"\u62bd\u8c61\u7c7b",level:3},{value:"\u63a5\u53e3",id:"\u63a5\u53e3",level:3},{value:"\u63a5\u53e3\u548c\u62bd\u8c61\u7c7b\u7684\u533a\u522b",id:"\u63a5\u53e3\u548c\u62bd\u8c61\u7c7b\u7684\u533a\u522b",level:3},{value:"\u63a5\u53e3\u548c\u62bd\u8c61\u7c7b\u7684\u9009\u62e9",id:"\u63a5\u53e3\u548c\u62bd\u8c61\u7c7b\u7684\u9009\u62e9",level:3}],p={toc:s};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"\u62bd\u8c61\u7c7b"},"\u62bd\u8c61\u7c7b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public abstract class Furit {\n\n   public abstract void what();\n\n   protected abstract void what1();\n        \n  //\u65b9\u6cd5\u7684\u9650\u5b9a\u8bcd\u4e3apublic\n   abstract void what2();\n   \n}\n\n")),(0,r.kt)("p",null,"\u62bd\u8c61\u7c7b\u7684\u7279\u5f81\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u62bd\u8c61\u65b9\u6cd5\u5fc5\u987b\u4e3a ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"public"))," \u3001 ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"protected"))," \u3001,\u7f3a\u7701\u7684\u65f6\u5019\u4e3a ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"public"))),(0,r.kt)("li",{parentName:"ul"},"\u62bd\u8c61\u7c7b\u4e0d\u80fd\u5b9e\u4f8b\u5316\uff0c\u5fc5\u987b\u6709\u5b50\u7c7b\u7ee7\u627f\u5b9e\u73b0\u5176\u7236\u65b9\u6cd5\u624d\u80fd\u521b\u5efa\u5bf9\u8c61\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u62bd\u8c61\u7c7b\u53ef\u4ee5\u7ee7\u627f\u62bd\u8c61\u7c7b\uff0c\u5b50\u7c7b\u5fc5\u987b\u590d\u5236\u7ee7\u627f\u7236\u7c7b\u7684\u62bd\u8c61\u65b9\u6cd5\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u53ea\u8981\u5305\u542b\u4e00\u4e2a\u62bd\u8c61\u65b9\u6cd5\u7684\u62bd\u8c61\u7c7b\uff0c\u8be5\u7c7b\u5fc5\u987b\u5b9a\u4e49\u6210\u62bd\u8c61\u7c7b\uff0c\u4e0d\u7ba1\u662f\u5426\u8fd8\u5305\u542b\u5176\u4ed6\u7684\u65b9\u6cd5\u3002")),(0,r.kt)("h3",{id:"\u63a5\u53e3"},"\u63a5\u53e3"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'//\u4e00\u822c\u7684\u901a\u7528\u7684\u63a5\u53e3\npublic interface Play {\n\n  public static final String A = "A";\n  \n    void doPlay();\n\n    public void doPlay1();\n\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"@FunctionalInterface\npublic interface Consumer<T> {\n\n    void accept(T t);\n\n        //\u5e26\u6709\u9ed8\u8ba4\u51fd\u6570\u7684\u63a5\u53e3--JDK8\u4ee5\u4e0a\u652f\u6301\n    default Consumer<T> andThen(Consumer<? super T> after) {\n        Objects.requireNonNull(after);\n        return (T t) -> { accept(t); after.accept(t); };\n    }\n}\n")),(0,r.kt)("p",null,"\u63a5\u53e3\u7684\u7279\u6027\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u63a5\u53e3\u53ef\u4ee5\u5305\u542b ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"public static"))," \u7684\u9759\u6001\u53d8\u91cf(\u9ed8\u8ba4\u53ea\u80fd\u662f ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"public static"))," \u9690\u542b\u7684\u5c31\u662f\u8fd9\u4e2a)"),(0,r.kt)("li",{parentName:"ul"},"JDK8\u4ee5\u524d\u63a5\u53e3\u4e2d\u53ea\u80fd\u6709 ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"public"))," \u4fee\u9970\u7684\u65b9\u6cd5(\u5728\u6ca1\u6709\u4fee\u9970\u7b26\u9ed8\u8ba4\u7684\u60c5\u51b5\u4e0b\u4e5f\u662f ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"public"))," )\uff0c\u4e0d\u5b58\u5728\u5176\u4ed6\u7684\u4fee\u9970\u7b26\u7684\u65b9\u6cd5\u3002JDK8\u4ee5\u4e0a\u63a5\u53e3\u4e2d\u53ef\u4ee5\u5305\u542b\u4e00\u4e2a\u4ee5\u4e0a\u7684\u9ed8\u8ba4\u7684\u65b9\u6cd5\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u4e00\u4e2a\u666e\u901a\u7684\u7c7b\u53ef\u4ee5\u5b9e\u73b0( ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"implements"))," )\u591a\u4e2a\u63a5\u53e3\uff0c\u62bd\u8c61\u7c7b\u540c\u6837\u5982\u6b64\uff0c\u53ea\u662f\u62bd\u8c61\u7c7b\u53ef\u4ee5\u4e0d\u5b9e\u73b0\u8fd9\u4e9b\u65b9\u6cd5\u800c\u8ba9\u7ee7\u627f\u62bd\u8c61\u7c7b\u7684\u5b50\u7c7b\u5b9e\u73b0\uff0c\u5f53\u7136\u62bd\u8c61\u7c7b\u4e5f\u53ef\u4ee5\u5b9e\u73b0\u3002\u800c\u666e\u901a\u7c7b\u5b9e\u73b0\u63a5\u53e3\u5c31\u5fc5\u987b\u5728\u5b50\u7c7b\u4e2d\u5b9e\u73b0\u63a5\u53e3\u7684\u65b9\u6cd5\u3002")),(0,r.kt)("h3",{id:"\u63a5\u53e3\u548c\u62bd\u8c61\u7c7b\u7684\u533a\u522b"},"\u63a5\u53e3\u548c\u62bd\u8c61\u7c7b\u7684\u533a\u522b"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u62bd\u8c61\u7c7b\u53ef\u4ee5\u63d0\u4f9b\u6210\u5458\u7684\u65b9\u6cd5\u5177\u4f53\u5b9e\u73b0\u7ec6\u8282\uff0c\u800c\u63a5\u53e3\u53ea\u80fd\u5b58\u5728public abstract \u65b9\u6cd5\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u62bd\u8c61\u7c7b\u4e2d\u7684\u6210\u5458\u53d8\u91cf\u53ef\u4ee5\u662f\u5404\u79cd\u7c7b\u578b\u7684\uff0c\u800c\u63a5\u53e3\u4e2d\u7684\u6210\u5458\u53d8\u91cf\u53ea\u80fd\u662fpublic static \u7c7b\u578b"),(0,r.kt)("li",{parentName:"ul"},"\u63a5\u53e3\u4e2d\u4e0d\u80fd\u542b\u6709\u9759\u6001\u4ee3\u7801\u5757\u548c\u9759\u6001\u65b9\u6cd5\uff0c\u800c\u62bd\u8c61\u7c7b\u4e2d\u53ef\u4ee5\u542b\u6709\u9759\u6001\u4ee3\u7801\u5757\u548c\u9759\u6001\u65b9\u6cd5\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u62bd\u8c61\u7c7b\u53ea\u80fd\u5355\u4e00\u7ee7\u627f\uff0c\u63a5\u53e3\u53ef\u4ee5\u591a\u4e2a\u5b9e\u73b0\u3002")),(0,r.kt)("h3",{id:"\u63a5\u53e3\u548c\u62bd\u8c61\u7c7b\u7684\u9009\u62e9"},"\u63a5\u53e3\u548c\u62bd\u8c61\u7c7b\u7684\u9009\u62e9"),(0,r.kt)("p",null,"\u6620\u5c04\u751f\u6d3b\uff0c\u5bf9\u4e8e\u4eba\u6765\u8bf4\uff0c\u5e74\u9f84\u3001\u8eab\u9ad8\u3001\u4f53\u91cd\u7b49\u7b49\u90fd\u662f\u5171\u6709\u7684\u7279\u5f81\uff0c\u4f46\u662f\u5bf9\u4e8e\u4e0d\u540c\u7684\u4eba\u8fd8\u6709\u4e00\u4e9b\u5176\u4ed6\u7684\u60c5\u51b5\u4e0d\u4e00\u6837\u3002\u8fd9\u79cd\u60c5\u51b5\u4e0b\u7528\u62bd\u8c61\u7c7b\u6bd4\u8f83\u597d\u3002\u62bd\u8c61\u7c7b\u4e2d\u53ef\u4ee5\u5b9a\u4e49\u4e00\u4e9b\u53d8\u91cf\u7136\u540e\u628a\u4e00\u4e9b\u4e0d\u786e\u5b9a\u7684\u4ea4\u7ed9\u5b50\u7c7b\uff0c\u6bd4\u5982\u5403\u4e1c\u897f\u8fd9\u4e2a\u3002\u4f60\u662f\u5403\u996d\u8fd8\u662f\u5403\u5976\u90fd\u4ea4\u7ed9\u5b50\u7c7b\u53bb\u7ba1\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public abstract class Person {\n\n  private int age;\n  \n  private float weight;\n  \n  public abstract void eat();\n}\n")),(0,r.kt)("p",null,"\u800c\u63a5\u53e3\u53ef\u4ee5\u5b9a\u4e49\u4e00\u4e9b\u548c\u4eba\u7684\u672c\u8d28\u65e0\u5173\u7684\u4e00\u4e9b\u4e1c\u897f\u6bd4\u5982\u884c\u4e3a\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public  interface Action {\n  public void play();\n}\n")),(0,r.kt)("p",null,"\u6bd4\u5982A\uff0c\u4f1a\u73a9\u90a3\u5c31\u5b9e\u73b0 Action \u5982\u679c\u4e0d\u4f1a\u73a9\u90a3\u5c31\u4e0d\u7528\u5b9e\u73b0 Action \u4f46\u662f\u90fd\u662f\u4eba\u7ee7\u627fPerson\u5c31\u80fd\u4ecePerson\u90a3\u8fb9\u62ff\u5230\u5bf9\u5e94\u7684\u5c5e\u6027\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public class A extends Person implements Action{\n  public  void eat(){\n    //\u5403\u7684\u884c\u4e3a\n  }\n  \n  public void play(){\n    //\u73a9\u7684\u884c\u4e3a\n  }\n}\n")),(0,r.kt)("p",null,"\u53cd\u89c2\u7f16\u7a0b\u7684\u89d2\u5ea6\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u62bd\u8c61\u65b9\u6cd5\u7528\u6765\u62bd\u8c61\u54ea\u4e9b\u6709\u516c\u5171\u5c5e\u6027\u5bf9\u4e8e\u90e8\u5206\u65b9\u6cd5\u9700\u8981\u8fdb\u884c\u62d3\u5c55\u7684\u3002\u800c\u63a5\u53e3\u9002\u5408\u4e00\u4e9b\u884c\u4e3a\u65b9\u5f0f\u7684\u62bd\u8c61\u3002\u62bd\u8c61\u7c7b\u548c\u63a5\u53e3\u4e24\u8005\u76f8\u7ed3\u5408\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5f53\u9700\u8981\u4e3a\u4e00\u4e9b\u5e26\u6709\u5c5e\u6027\u7684\u7c7b\u63d0\u4f9b\u516c\u5171\u7684\u5b9e\u73b0\u4ee3\u7801\u7684\u65f6\u5019\u5e94\u8be5\u4f18\u5148\u8003\u8651\u62bd\u8c61\u7c7b(Dubbo\u7684config\u6a21\u5757\u4e2d\u7684\u914d\u7f6e\u7c7b\u53ef\u4ee5\u8fdb\u884c\u501f\u9274)\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5728\u62d3\u5c55\u6027\u548c\u53ef\u7ef4\u62a4\u6027\u5e94\u5f53\u4f18\u5148\u624d\u6709\u63a5\u53e3(RPC\u8c03\u7528)\uff0c\u63a5\u53e3\u53ef\u4ee5\u770b\u6210\u662f\u7a0b\u5e8f\u95f4\u7684\u4e00\u4e2a\u534f\u8bae\uff0c\u6bd4\u62bd\u8c61\u7c7b\u66f4\u5b89\u5168\u66f4\u6e05\u6670")))}u.isMDXComponent=!0}}]);