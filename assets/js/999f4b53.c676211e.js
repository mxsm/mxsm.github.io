"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[2524],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),s=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},y="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),y=s(a),u=r,m=y["".concat(o,".").concat(u)]||y[u]||d[u]||i;return a?n.createElement(m,l(l({ref:t},p),{},{components:a})):n.createElement(m,l({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=u;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c[y]="string"==typeof e?e:r,l[1]=c;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3535:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>y,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const i={title:"ArrayList\u6e90\u7801\u5206\u6790",date:new Date("2018-05-07T00:00:00.000Z")},l=void 0,c={unversionedId:"java/java-se/jdksourcereading/collection/ArrayList",id:"java/java-se/jdksourcereading/collection/ArrayList",title:"ArrayList\u6e90\u7801\u5206\u6790",description:"ArrayList",source:"@site/docs/java/java-se/jdksourcereading/collection/ArrayList.md",sourceDirName:"java/java-se/jdksourcereading/collection",slug:"/java/java-se/jdksourcereading/collection/ArrayList",permalink:"/docs/java/java-se/jdksourcereading/collection/ArrayList",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/java/java-se/jdksourcereading/collection/ArrayList.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1671958290,formattedLastUpdatedAt:"Dec 25, 2022",frontMatter:{title:"ArrayList\u6e90\u7801\u5206\u6790",date:"2018-05-07T00:00:00.000Z"},sidebar:"javase",previous:{title:"Java NIO ByteBuffer\u4f7f\u7528\u56fe\u6587\u8be6\u89e3",permalink:"/docs/java/java-se/javaio/nio-bytebuffer"},next:{title:"CopyOnWriteArrayList\u6e90\u7801\u89e3\u6790",permalink:"/docs/java/java-se/jdksourcereading/collection/CopyOnWriteArrayList"}},o={},s=[{value:"ArrayList",id:"arraylist",level:3},{value:"\u6784\u9020\u65b9\u6cd5",id:"\u6784\u9020\u65b9\u6cd5",level:3},{value:"ArrayList\u6269\u5bb9\u673a\u5236",id:"arraylist\u6269\u5bb9\u673a\u5236",level:3},{value:"1. \u5148\u6765\u770b <code>add</code> \u65b9\u6cd5",id:"1-\u5148\u6765\u770b-add-\u65b9\u6cd5",level:4},{value:"2.  <code>add</code> \u65b9\u6cd5",id:"2--add-\u65b9\u6cd5",level:4},{value:"3.<code>grow</code>\u65b9\u6cd5",id:"3grow\u65b9\u6cd5",level:4},{value:"<code>System.arraycopy()</code>",id:"systemarraycopy",level:2},{value:"ArrayList\u548cVector\u7684\u533a\u522b",id:"arraylist\u548cvector\u7684\u533a\u522b",level:3},{value:"\u4f7f\u7528\u6ce8\u610f",id:"\u4f7f\u7528\u6ce8\u610f",level:3}],p={toc:s};function y(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"arraylist"},"ArrayList"),(0,r.kt)("p",null,"ArrayList\u5e76\u4e0d\u662f\u7ebf\u7a0b\u5b89\u5168\u7684\uff0c\u5728\u8bfb\u7ebf\u7a0b\u5728\u8bfb\u53d6ArrayList\u7684\u65f6\u5019\u5982\u679c\u6709\u5199\u7ebf\u7a0b\u5728\u5199\u6570\u636e\u7684\u65f6\u5019\uff0c\u57fa\u4e8efast-fail\u673a\u5236\uff0c\u4f1a\u629b\u51fa",(0,r.kt)("strong",{parentName:"p"},"ConcurrentModificationException"),"\u5f02\u5e38\uff0c\u4e5f\u5c31\u662f\u8bf4ArrayList\u5e76\u4e0d\u662f\u4e00\u4e2a\u7ebf\u7a0b\u5b89\u5168\u7684\u5bb9\u5668"),(0,r.kt)("h3",{id:"\u6784\u9020\u65b9\u6cd5"},"\u6784\u9020\u65b9\u6cd5"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'    /**\n     * \u9ed8\u8ba4\u5bb9\u91cf10\n     */\n    private static final int DEFAULT_CAPACITY = 10;\n\n    /**\n     * \u7a7a\u7684\u6570\u636e\u5b9e\u4f8b\n     */\n    private static final Object[] EMPTY_ELEMENTDATA = {};\n\n    /**\n      *\u7528\u6237\u6307\u5b9a\u53c2\u6570\u5bb9\u91cf\n      */\n    public ArrayList(int initialCapacity) {\n        if (initialCapacity > 0) {\n            //\u521d\u59cb\u5bb9\u91cf\u5927\u4e8e0\uff0c\u521b\u5efa\u5bf9\u5e94\u7684Object\u6570\u7ec4\u957f\u5ea6\n            this.elementData = new Object[initialCapacity];\n        } else if (initialCapacity == 0) {\n            //\u7b49\u4e8e0\u8d4b\u503c\u7a7a\u6570\u7ec4\n            this.elementData = EMPTY_ELEMENTDATA;\n        } else {\n            //\u5c0f\u4e8e0\u629b\u9519\n            throw new IllegalArgumentException("Illegal Capacity: "+\n                                               initialCapacity);\n        }\n    }\n\n    /**\n     * \u65e0\u53c2\u6570\u9ed8\u8ba4\u4e3a\u7a7a\u6570\u7ec4\n     */\n    public ArrayList() {\n        this.elementData = DEFAULTCAPACITY_EMPTY_ELEMENTDATA;\n    }\n\n    /**\n     * \u6784\u9020\u5305\u542b\u6307\u5b9acollection\u5143\u7d20\u7684\u5217\u8868\uff0c\u8fd9\u4e9b\u5143\u7d20\u5229\u7528\u8be5\u96c6\u5408\u7684\u8fed\u4ee3\u5668\u6309\u987a\u5e8f\u8fd4\u56de\n     */\n    public ArrayList(Collection<? extends E> c) {\n        elementData = c.toArray();\n        if ((size = elementData.length) != 0) {\n            // c.toArray might (incorrectly) not return Object[] (see 6260652)\n            if (elementData.getClass() != Object[].class)\n                //\u6570\u7ec4\u7684\u62f7\u8d1d\n                elementData = Arrays.copyOf(elementData, size, Object[].class);\n        } else {\n            // \u7a7a\u6570\u7ec4\u66ff\u4ee3\n            this.elementData = EMPTY_ELEMENTDATA;\n        }\n    }\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4e0d\u6307\u5b9a\u5bb9\u91cf\u9ed8\u8ba4\u4e3a\u7a7a size=0"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u7684\u6269\u5bb9\u5bb9\u91cf\u4e3a10"),(0,r.kt)("li",{parentName:"ul"},"\u5e95\u5c42\u7684\u6570\u636e\u7ed3\u6784object\u6570\u7ec4")),(0,r.kt)("h3",{id:"arraylist\u6269\u5bb9\u673a\u5236"},"ArrayList\u6269\u5bb9\u673a\u5236"),(0,r.kt)("p",null,"\u662f\u5426\u6269\u5bb9\u662f\u6839\u636e\u8c03\u7528add\u65b9\u6cd5\u65f6\u5019\u6765\u5224\u65ad\u7684\u3002"),(0,r.kt)("h4",{id:"1-\u5148\u6765\u770b-add-\u65b9\u6cd5"},"1. \u5148\u6765\u770b ",(0,r.kt)("inlineCode",{parentName:"h4"},"add")," \u65b9\u6cd5"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public boolean add(E e) {\n        //\u6dfb\u52a0\u5143\u7d20\u4e4b\u524d\u8c03\u7528ensureCapacityInternal\u786e\u4fdd\u5bb9\u91cf\n        ensureCapacityInternal(size + 1);  // Increments modCount!!\n        //\u6dfb\u52a0\u5230\u5bf9\u5e94\u7684\u4f4d\u7f6e\n        elementData[size++] = e;\n        return true;\n    }\n")),(0,r.kt)("h4",{id:"2--add-\u65b9\u6cd5"},"2.  ",(0,r.kt)("inlineCode",{parentName:"h4"},"add")," \u65b9\u6cd5"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"private void ensureCapacityInternal(int minCapacity) {\n        ensureExplicitCapacity(calculateCapacity(elementData, minCapacity));\n    }\n\nprivate static int calculateCapacity(Object[] elementData, int minCapacity) {\n     // \u83b7\u53d6\u9ed8\u8ba4\u7684\u5bb9\u91cf\u548c\u4f20\u5165\u53c2\u6570\u7684\u8f83\u5927\u503c    \n    if (elementData == DEFAULTCAPACITY_EMPTY_ELEMENTDATA) {\n            return Math.max(DEFAULT_CAPACITY, minCapacity);\n        }\n        return minCapacity;\n    }\n\nprivate void ensureExplicitCapacity(int minCapacity) {\n        modCount++;\n\n        // \u5224\u65ad\u6700\u5c0f\u7684\u5bb9\u91cf\u548c\u6570\u7ec4\u4e4b\u95f4\u7684\u5927\u5c0f\u5173\u7cfb\n        if (minCapacity - elementData.length > 0)\n            //\u6269\u5bb9\n            grow(minCapacity);\n    }\n")),(0,r.kt)("h4",{id:"3grow\u65b9\u6cd5"},"3.",(0,r.kt)("inlineCode",{parentName:"h4"},"grow"),"\u65b9\u6cd5"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"private void grow(int minCapacity) {\n        // \n        int oldCapacity = elementData.length;\n        //\u8fdb\u884c\u6269\u5bb9-- oldCapacity + (oldCapacity >> 1) \u76f8\u5f53\u4e8e oldCapacity + (oldCapacity / 2) \n        int newCapacity = oldCapacity + (oldCapacity >> 1);\n        //\u7136\u540e\u68c0\u67e5\u65b0\u5bb9\u91cf\u662f\u5426\u5927\u4e8e\u6700\u5c0f\u9700\u8981\u5bb9\u91cf\uff0c\u82e5\u8fd8\u662f\u5c0f\u4e8e\u6700\u5c0f\u9700\u8981\u5bb9\u91cf\uff0c\u90a3\u4e48\u5c31\u628a\u6700\u5c0f\u9700\u8981\u5bb9\u91cf\u5f53\u4f5c\u6570\u7ec4\u7684\u65b0\u5bb9\u91cf\uff0c\n        if (newCapacity - minCapacity < 0)\n            newCapacity = minCapacity;\n        /**\u5982\u679c\u65b0\u5bb9\u91cf\u5927\u4e8e MAX_ARRAY_SIZE,\u8fdb\u5165(\u6267\u884c) `hugeCapacity()` \n          *\u65b9\u6cd5\u6765\u6bd4\u8f83 minCapacity \u548c MAX_ARRAY_SIZE\n          *\u5982\u679cminCapacity\u5927\u4e8e\u6700\u5927\u5bb9\u91cf\uff0c\u5219\u65b0\u5bb9\u91cf\u5219\u4e3a`Integer.MAX_VALUE`\n          */\n        if (newCapacity - MAX_ARRAY_SIZE > 0)\n            newCapacity = hugeCapacity(minCapacity);\n        // minCapacity is usually close to size, so this is a win:\n        elementData = Arrays.copyOf(elementData, newCapacity);\n    }\n")),(0,r.kt)("h2",{id:"systemarraycopy"},(0,r.kt)("inlineCode",{parentName:"h2"},"System.arraycopy()")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"  int[] src = new int[]{1,2,3};\n        int[] dest = new int[100];\n\n        System.arraycopy(src, 1, dest, 50, 2);\n        System.out.println(dest[51]);\n        System.out.println(dest[50]);\n")),(0,r.kt)("p",null,"\u8f93\u51fa\u7ed3\u679c\uff1a3 "),(0,r.kt)("p",null,"\u200b\t\t   2"),(0,r.kt)("h3",{id:"arraylist\u548cvector\u7684\u533a\u522b"},"ArrayList\u548cVector\u7684\u533a\u522b"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Vector"),"\u4ece\u4ee3\u7801\u5c42\u9762\u770b\u65b9\u6cd5\u4e0a\u52a0\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"synchronized"),"\u662f\u7ebf\u7a0b\u5b89\u5168\uff0c\u4f46\u662f\u5982\u679c\u4e00\u4e2a\u7ebf\u7a0b\u8bbf\u95ee\u9700\u8981\u540c\u6b65\u64cd\u4f5c\u8017\u65f6\u6bd4\u8f83\u957f\u3002"),(0,r.kt)("p",null,"ArrayList\u4e0d\u662f\u540c\u6b65\u7684\uff0c\u6240\u4ee5\u5728\u4e0d\u9700\u8981\u4fdd\u8bc1\u7ebf\u7a0b\u5b89\u5168\u7684\u65f6\u5019\u4f7f\u7528ArrayList"),(0,r.kt)("h3",{id:"\u4f7f\u7528\u6ce8\u610f"},"\u4f7f\u7528\u6ce8\u610f"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u77e5\u9053 ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"ArrayList"))," \u7684\u957f\u5ea6\u76f4\u63a5\u8bbe\u7f6e ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"initialCapacity"))," \u521d\u59cb\u5bb9\u91cf\u3002\u8fd9\u6837\u7684\u597d\u5904\u5728\u4e8e\u907f\u514d\u4e86\u6269\u5bb9\u5e26\u6765\u7684\u6027\u80fd\u95ee\u9898\u3002\u51cf\u5c11\u4e86\u6dfb\u52a0\u8fc7\u7a0b\u4e2d\u6269\u5bb9\u7684\u6b65\u9aa4\uff0c\u5982\u679c\u6570\u91cf\u5c0f\u4e8e10\u5c31\u76f4\u63a5\u7528\u9ed8\u8ba4\u7684\uff0c\u56e0\u4e3a ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"ArrayList"))," \u7684\u6700\u5c0f\u5bb9\u91cf\u4e3a10\u3002")))}y.isMDXComponent=!0}}]);