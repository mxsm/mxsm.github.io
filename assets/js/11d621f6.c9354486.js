"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[5347],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>v});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),l=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=l(e.components);return a.createElement(s.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(t),d=r,v=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return t?a.createElement(v,i(i({ref:n},c),{},{components:t})):a.createElement(v,i({ref:n},c))}));function v(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p[u]="string"==typeof e?e:r,i[1]=p;for(var l=2;l<o;l++)i[l]=t[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4389:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var a=t(7462),r=(t(7294),t(3905));const o={title:"EnumMap",date:new Date("2018-12-05T00:00:00.000Z")},i=void 0,p={unversionedId:"java/java-se/jdksourcereading/map/EnumMap",id:"java/java-se/jdksourcereading/map/EnumMap",title:"EnumMap",description:"EnumMap",source:"@site/docs/java/java-se/jdksourcereading/map/EnumMap.md",sourceDirName:"java/java-se/jdksourcereading/map",slug:"/java/java-se/jdksourcereading/map/EnumMap",permalink:"/docs/java/java-se/jdksourcereading/map/EnumMap",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/java/java-se/jdksourcereading/map/EnumMap.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1671958290,formattedLastUpdatedAt:"Dec 25, 2022",frontMatter:{title:"EnumMap",date:"2018-12-05T00:00:00.000Z"},sidebar:"javase",previous:{title:"LinkedList\u6e90\u7801\u89e3\u6790",permalink:"/docs/java/java-se/jdksourcereading/collection/LinkedList"},next:{title:"HashMap\u548cHashTable\u7684\u533a\u522b",permalink:"/docs/java/java-se/jdksourcereading/map/HashMap-HashTable-diff"}},s={},l=[{value:"EnumMap",id:"enummap",level:3}],c={toc:l};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"enummap"},"EnumMap"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"    private final Class<K> keyType;\n\n    /**\n     * All of the values comprising K.  (Cached for performance.)\n     */\n    private transient K[] keyUniverse;\n\n    /**\n     * Array representation of this map.  The ith element is the value\n     * to which universe[i] is currently mapped, or null if it isn't\n     * mapped to anything, or NULL if it's mapped to null.\n     */\n    private transient Object[] vals;\n\n    /**\n     * The number of mappings in this map.\n     */\n    private transient int size = 0;\n")),(0,r.kt)("p",null,"\u5b9e\u73b0\uff1a\u6570\u7ec4\u5b9e\u73b0"),(0,r.kt)("p",null,"\u4f7f\u7528\u6848\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public enum Color {\n\n    red,black,green;\n\n}\n\nMap<Color,String> map = new EnumMap<Color,String>(Color.class);\n")))}u.isMDXComponent=!0}}]);