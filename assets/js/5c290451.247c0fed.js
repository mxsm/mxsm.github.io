"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[4065],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},y="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),y=s(r),u=a,m=y["".concat(c,".").concat(u)]||y[u]||d[u]||o;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[y]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},6786:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={title:"CopyOnWriteArraySet\u6e90\u7801\u89e3\u6790",date:new Date("2019-05-22T00:00:00.000Z")},i=void 0,l={unversionedId:"java/java-se/jdksourcereading/collection/CopyOnWriteArraySet",id:"java/java-se/jdksourcereading/collection/CopyOnWriteArraySet",title:"CopyOnWriteArraySet\u6e90\u7801\u89e3\u6790",description:"1. CopyOnWriteArraySet\u7684\u6784\u9020\u51fd\u6570",source:"@site/docs/java/java-se/jdksourcereading/collection/CopyOnWriteArraySet.md",sourceDirName:"java/java-se/jdksourcereading/collection",slug:"/java/java-se/jdksourcereading/collection/CopyOnWriteArraySet",permalink:"/docs/java/java-se/jdksourcereading/collection/CopyOnWriteArraySet",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/java/java-se/jdksourcereading/collection/CopyOnWriteArraySet.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1678517863,formattedLastUpdatedAt:"Mar 11, 2023",frontMatter:{title:"CopyOnWriteArraySet\u6e90\u7801\u89e3\u6790",date:"2019-05-22T00:00:00.000Z"},sidebar:"javase",previous:{title:"CopyOnWriteArrayList\u6e90\u7801\u89e3\u6790",permalink:"/docs/java/java-se/jdksourcereading/collection/CopyOnWriteArrayList"},next:{title:"HashSet\u6e90\u7801\u89e3\u6790",permalink:"/docs/java/java-se/jdksourcereading/collection/HashSet"}},c={},s=[{value:"1. CopyOnWriteArraySet\u7684\u6784\u9020\u51fd\u6570",id:"1-copyonwritearrayset\u7684\u6784\u9020\u51fd\u6570",level:3},{value:"2. CopyOnWriteArraySet#add\u6e90\u7801\u89e3\u6790",id:"2-copyonwritearraysetadd\u6e90\u7801\u89e3\u6790",level:3}],p={toc:s},y="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(y,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"1-copyonwritearrayset\u7684\u6784\u9020\u51fd\u6570"},"1. CopyOnWriteArraySet\u7684\u6784\u9020\u51fd\u6570"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'public class CopyOnWriteArraySet<E> extends AbstractSet<E>\n        implements java.io.Serializable {\n    private final CopyOnWriteArrayList<E> al;\n    \n    public CopyOnWriteArraySet() {\n        al = new CopyOnWriteArrayList<E>();\n    }\n    \n    public CopyOnWriteArraySet(Collection<? extends E> c) {\n        if (c.getClass() == CopyOnWriteArraySet.class) {\n            @SuppressWarnings("unchecked") CopyOnWriteArraySet<E> cc =\n                (CopyOnWriteArraySet<E>)c;\n            al = new CopyOnWriteArrayList<E>(cc.al);\n        }\n        else {\n            al = new CopyOnWriteArrayList<E>();\n            al.addAllAbsent(c);\n        }\n    }\n}    \n')),(0,a.kt)("p",null,"\u901a\u8fc7\u6e90\u7801\u53ef\u4ee5\u770b\u51fa\u6765 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},(0,a.kt)("inlineCode",{parentName:"em"},"CopyOnWriteArraySet")))," \u5b9e\u73b0\u901a\u8fc7 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},(0,a.kt)("inlineCode",{parentName:"em"},"CopyOnWriteArrayList")))," \u6765\u5b9e\u73b0\u3002"),(0,a.kt)("h3",{id:"2-copyonwritearraysetadd\u6e90\u7801\u89e3\u6790"},"2. CopyOnWriteArraySet#add\u6e90\u7801\u89e3\u6790"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public boolean add(E e) {\n    return al.addIfAbsent(e);\n}\n")),(0,a.kt)("p",null,"\u901a\u8fc7 ",(0,a.kt)("strong",{parentName:"p"},"CopyOnWriteArrayList#",(0,a.kt)("em",{parentName:"strong"},"addIfAbsent"))," \u65b9\u6cd5\u6765\u5b9e\u73b0\u6dfb\u52a0\u3002\u4e0b\u9762\u770b\u4e00\u4e0b\u6e90\u7801\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"    public boolean addIfAbsent(E e) {\n        Object[] snapshot = getArray();\n        return indexOf(e, snapshot, 0, snapshot.length) >= 0 ? false :\n            addIfAbsent(e, snapshot);\n    }\n")),(0,a.kt)("p",null,"\u6e90\u7801\u6bd4\u8f83\u7b80\u5355\uff0c\u9996\u5148\u83b7\u53d6\u5df2\u5b58\u5728\u7684\u5bf9\u8c61\uff0c\u5224\u65ad\u8981\u63d2\u5165\u7684\u5bf9\u8c61\u662f\u5426\u5b58\u5728\uff0c\u5b58\u5728\u8fd4\u56defalse\u4e0d\u5b58\u5728\u76f4\u63a5\u6dfb\u52a0\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"    private boolean addIfAbsent(E e, Object[] snapshot) {\n        final ReentrantLock lock = this.lock;\n        lock.lock();\n        try {\n            Object[] current = getArray();\n            int len = current.length;\n            if (snapshot != current) {\n                // Optimize for lost race to another addXXX operation\n                int common = Math.min(snapshot.length, len);\n                for (int i = 0; i < common; i++)\n                    if (current[i] != snapshot[i] && eq(e, current[i]))\n                        return false;\n                if (indexOf(e, current, common, len) >= 0)\n                        return false;\n            }\n            Object[] newElements = Arrays.copyOf(current, len + 1);\n            newElements[len] = e;\n            setArray(newElements);\n            return true;\n        } finally {\n            lock.unlock();\n        }\n    }\n")))}d.isMDXComponent=!0}}]);