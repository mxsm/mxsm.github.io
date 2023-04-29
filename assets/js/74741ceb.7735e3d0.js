"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[5368],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),l=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),h=l(a),u=i,m=h["".concat(s,".").concat(u)]||h[u]||d[u]||r;return a?n.createElement(m,o(o({ref:t},p),{},{components:a})):n.createElement(m,o({ref:t},p))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[h]="string"==typeof e?e:i,o[1]=c;for(var l=2;l<r;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1785:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var n=a(7462),i=(a(7294),a(3905));const r={title:"HashSet\u6e90\u7801\u89e3\u6790",date:new Date("2018-11-27T00:00:00.000Z")},o=void 0,c={unversionedId:"java/java-se/jdksourcereading/collection/HashSet",id:"java/java-se/jdksourcereading/collection/HashSet",title:"HashSet\u6e90\u7801\u89e3\u6790",description:"HashSet",source:"@site/docs/java/java-se/jdksourcereading/collection/HashSet.md",sourceDirName:"java/java-se/jdksourcereading/collection",slug:"/java/java-se/jdksourcereading/collection/HashSet",permalink:"/docs/java/java-se/jdksourcereading/collection/HashSet",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/java/java-se/jdksourcereading/collection/HashSet.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1682735967,formattedLastUpdatedAt:"Apr 29, 2023",frontMatter:{title:"HashSet\u6e90\u7801\u89e3\u6790",date:"2018-11-27T00:00:00.000Z"},sidebar:"javase",previous:{title:"CopyOnWriteArraySet\u6e90\u7801\u89e3\u6790",permalink:"/docs/java/java-se/jdksourcereading/collection/CopyOnWriteArraySet"},next:{title:"LinkedList\u6e90\u7801\u89e3\u6790",permalink:"/docs/java/java-se/jdksourcereading/collection/LinkedList"}},s={},l=[{value:"HashSet",id:"hashset",level:3}],p={toc:l},h="wrapper";function d(e){let{components:t,...a}=e;return(0,i.kt)(h,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"hashset"},"HashSet"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"private transient HashMap<E,Object> map;\n\n// Dummy value to associate with an Object in the backing Map\nprivate static final Object PRESENT = new Object();\n")),(0,i.kt)("p",null,"\u9996\u5148\u770b\u4e00\u4e0bHashSet \u4e2d\u7684\u4e24\u4e2a\u53d8\u91cf\uff0c\u4e00\u4e2aHashMap\u7c7b\u578b\u7684\uff0c\u53e6\u4e00\u4e2a\u662f\u9759\u6001\u53d8\u91cfObject\u7c7b\u578b\u3002\u63a5\u4e0b\u6765\u770b\u4e00\u4e0bHashSet\u7684\u6784\u9020\u65b9\u6cd5\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"    public HashSet() {\n        map = new HashMap<>();\n    }\n\n    /**\n     * Constructs a new set containing the elements in the specified\n     * collection.  The <tt>HashMap</tt> is created with default load factor\n     * (0.75) and an initial capacity sufficient to contain the elements in\n     * the specified collection.\n     *\n     * @param c the collection whose elements are to be placed into this set\n     * @throws NullPointerException if the specified collection is null\n     */\n    public HashSet(Collection<? extends E> c) {\n        map = new HashMap<>(Math.max((int) (c.size()/.75f) + 1, 16));\n        addAll(c);\n    }\n\n    /**\n     * Constructs a new, empty set; the backing <tt>HashMap</tt> instance has\n     * the specified initial capacity and the specified load factor.\n     *\n     * @param      initialCapacity   the initial capacity of the hash map\n     * @param      loadFactor        the load factor of the hash map\n     * @throws     IllegalArgumentException if the initial capacity is less\n     *             than zero, or if the load factor is nonpositive\n     */\n    public HashSet(int initialCapacity, float loadFactor) {\n        map = new HashMap<>(initialCapacity, loadFactor);\n    }\n\n    /**\n     * Constructs a new, empty set; the backing <tt>HashMap</tt> instance has\n     * the specified initial capacity and default load factor (0.75).\n     *\n     * @param      initialCapacity   the initial capacity of the hash table\n     * @throws     IllegalArgumentException if the initial capacity is less\n     *             than zero\n     */\n    public HashSet(int initialCapacity) {\n        map = new HashMap<>(initialCapacity);\n    }\n\n    /**\n     * Constructs a new, empty linked hash set.  (This package private\n     * constructor is only used by LinkedHashSet.) The backing\n     * HashMap instance is a LinkedHashMap with the specified initial\n     * capacity and the specified load factor.\n     *\n     * @param      initialCapacity   the initial capacity of the hash map\n     * @param      loadFactor        the load factor of the hash map\n     * @param      dummy             ignored (distinguishes this\n     *             constructor from other int, float constructor.)\n     * @throws     IllegalArgumentException if the initial capacity is less\n     *             than zero, or if the load factor is nonpositive\n     */\n    HashSet(int initialCapacity, float loadFactor, boolean dummy) {\n        map = new LinkedHashMap<>(initialCapacity, loadFactor);\n    }\n")),(0,i.kt)("p",null,"\u6784\u9020\u51fd\u6570\u90fd\u662f\u8c03\u7528\u4e86HashMap\u7684\u6784\u9020\u51fd\u6570\uff0c\u6709\u4e00\u4e2a\u662f\u8c03\u7528\u4e86LinkedHashMap\u7684\u6784\u9020\u6240\u4ee5HashSet\u7684\u5b9e\u73b0\u662f\u901a\u8fc7HashMap\u7684\u65b9\u5f0f\u6765\u5b9e\u73b0\u7684"))}d.isMDXComponent=!0}}]);