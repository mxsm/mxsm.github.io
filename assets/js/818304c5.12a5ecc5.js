"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[4989],{3905:(e,a,n)=>{n.d(a,{Zo:()=>u,kt:()=>m});var t=n(7294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function l(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function p(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=t.createContext({}),o=function(e){var a=t.useContext(i),n=a;return e&&(n="function"==typeof e?e(a):s(s({},a),e)),n},u=function(e){var a=o(e.components);return t.createElement(i.Provider,{value:a},e.children)},h="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},d=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),h=o(n),d=r,m=h["".concat(i,".").concat(d)]||h[d]||c[d]||l;return n?t.createElement(m,s(s({ref:a},u),{},{components:n})):t.createElement(m,s({ref:a},u))}));function m(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=n.length,s=new Array(l);s[0]=d;var p={};for(var i in a)hasOwnProperty.call(a,i)&&(p[i]=a[i]);p.originalType=e,p[h]="string"==typeof e?e:r,s[1]=p;for(var o=2;o<l;o++)s[o]=n[o];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3090:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>i,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>o});var t=n(7462),r=(n(7294),n(3905));const l={title:"HashMap\u548cHashTable\u7684\u533a\u522b",date:new Date("2019-08-09T00:00:00.000Z")},s=void 0,p={unversionedId:"java/java-se/jdksourcereading/map/HashMap-HashTable-diff",id:"java/java-se/jdksourcereading/map/HashMap-HashTable-diff",title:"HashMap\u548cHashTable\u7684\u533a\u522b",description:"HashMap\u548cHashTable\u533a\u522b",source:"@site/docs/java/java-se/jdksourcereading/map/HashMap-HashTable-diff.md",sourceDirName:"java/java-se/jdksourcereading/map",slug:"/java/java-se/jdksourcereading/map/HashMap-HashTable-diff",permalink:"/docs/java/java-se/jdksourcereading/map/HashMap-HashTable-diff",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/java/java-se/jdksourcereading/map/HashMap-HashTable-diff.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1680402643,formattedLastUpdatedAt:"Apr 2, 2023",frontMatter:{title:"HashMap\u548cHashTable\u7684\u533a\u522b",date:"2019-08-09T00:00:00.000Z"},sidebar:"javase",previous:{title:"EnumMap",permalink:"/docs/java/java-se/jdksourcereading/map/EnumMap"},next:{title:"HashMap\u6e90\u7801\u89e3\u6790",permalink:"/docs/java/java-se/jdksourcereading/map/HashMap"}},i={},o=[{value:"HashMap\u548cHashTable\u533a\u522b",id:"hashmap\u548chashtable\u533a\u522b",level:3}],u={toc:o},h="wrapper";function c(e){let{components:a,...n}=e;return(0,r.kt)(h,(0,t.Z)({},u,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"hashmap\u548chashtable\u533a\u522b"},"HashMap\u548cHashTable\u533a\u522b"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u7ebf\u7a0b\u662f\u5426\u5b89\u5168"),"\uff1aHashMap\u975e\u7ebf\u7a0b\u5b89\u5168\uff0cHashTable\u662f\u7ebf\u7a0b\u5b89\u5168\u7684\uff1bHashTable\u5185\u90e8\u90fd\u7ecf\u8fc7\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"synchronized")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},'//HashMap\u7684put\u65b9\u6cd5\n    public V put(K key, V value) {\n        return putVal(hash(key), key, value, false, true);\n    }\n\n    //HashTable\u7684put\u65b9\u6cd5\n        public synchronized V put(K key, V value) {\n        // Make sure the value is not null\n        if (value == null) {\n            throw new NullPointerException();\n        }\n\n        // Makes sure the key is not already in the hashtable.\n        Entry<?,?> tab[] = table;\n        int hash = key.hashCode();\n        int index = (hash & 0x7FFFFFFF) % tab.length;\n        @SuppressWarnings("unchecked")\n        Entry<K,V> entry = (Entry<K,V>)tab[index];\n        for(; entry != null ; entry = entry.next) {\n            if ((entry.hash == hash) && entry.key.equals(key)) {\n                V old = entry.value;\n                entry.value = value;\n                return old;\n            }\n        }\n        addEntry(hash, key, value, index);\n        return null;\n    }\n\n\n')))),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u6548\u7387:")," \u56e0\u4e3a\u7ebf\u7a0b\u5b89\u5168\u95ee\u9898\uff0cHashMap\u8981\u6bd4HashTable\u6548\u7387\u7565\u9ad8\u4e00\u70b9\uff0cJDK1.8\u57fa\u672c\u4e0a\u88ab\u6dd8\u6c70\u4e86\uff0c\u4e0d\u8981\u5728\u4ee3\u7801\u4e2d\u4f7f\u7528")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u5bf9Null key \u548cNull value\u7684\u652f\u6301\uff1a")," HashMap\u53ef\u4ee5\u7528null\u4f5c\u4e3a\u952e\u503c\uff0c\u8fd9\u6837\u7684\u4e14\u53ea\u6709\u4e00\u4e2a\u3002\u4f46\u662f\u5728 HashTable \u4e2d put \u8fdb\u7684\u952e\u503c\u6216\u8005value\u53ea\u8981\u6709\u4e00\u4e2a null\uff0c\u76f4\u63a5\u629b\u51fa NullPointerException"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},'//HashTable\npublic synchronized V put(K key, V value) {\n        //\u786e\u4fddvalue\u4e0d\u7b49\u4e8enull\n        if (value == null) {\n            throw new NullPointerException();\n        }\n\n        // Makes sure the key is not already in the hashtable.\n        Entry<?,?> tab[] = table;\n        //key\u4e0d\u80fd\u4e3anull--NullPointerException\n        int hash = key.hashCode();\n        int index = (hash & 0x7FFFFFFF) % tab.length;\n        @SuppressWarnings("unchecked")\n        Entry<K,V> entry = (Entry<K,V>)tab[index];\n        for(; entry != null ; entry = entry.next) {\n            if ((entry.hash == hash) && entry.key.equals(key)) {\n                V old = entry.value;\n                entry.value = value;\n                return old;\n            }\n        }\n        addEntry(hash, key, value, index);\n        return null;\n    }\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u521d\u59cb\u5bb9\u91cf\u5927\u5c0f\u548c\u6bcf\u6b21\u6269\u5145\u5bb9\u91cf\u5927\u5c0f\u7684\u4e0d\u540c \uff1a")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u9ed8\u8ba4\u521d\u59cb\u5bb9\u91cf\u4e0d\u4e00\u6837\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"HashMap"),"\u521d\u59cb\u5bb9\u91cf16\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"HashTable"),"\u521d\u59cb\u5bb9\u91cf11\u3002\u6269\u5bb9HashMap\u90fd\u662f\u53d8\u4e3a\u539f\u6765\u76842\u500d\uff0cHashMap\u5bb9\u91cf\u6bcf\u6b21\u6269\u5bb9\u90fd\u662f2\u7684\u5e42\u6b21\u65b9\u5927\u5c0f(tableSizeFor\u65b9\u6cd5\u4fdd\u8bc1)\uff0cHashTable\u7684\u7684\u6269\u5bb9(oldCapacity << 1) + 1\u53ca2n+1"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"}," public Hashtable() {\n        this(11, 0.75f);\n    }\n    //HashMap \u53d1\u751f\u5728\u7b2c\u4e00\u6b21put\u7684\u65f6\u5019\n     int newCap = DEFAULT_INITIAL_CAPACITY;\n     int newThr = (int)(DEFAULT_LOAD_FACTOR * DEFAULT_INITIAL_CAPACITY);\n"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u5e95\u5c42\u6570\u636e\u7ed3\u6784:")," JDK1.8\u4ee5\u540e\u7684HashMap\u5728\u89e3\u51b3Hash\u51b2\u7a81\u8bd5\u7528\u4e86\u54c8\u5e0c\u8868+\u94fe\u8868+\u7ea2\u9ed1\u6811\uff0c\u94fe\u8868\u8f6c\u6362\u4e3a\u7ea2\u9ed1\u6811\u7684\u72b6\u6001\u7684\u9608\u503c\u4e3a8\u3002\u7528\u6765\u51cf\u5c11\u641c\u7d22\u65f6\u95f4\uff0cHashTable\u6ca1\u6709\u8fd9\u6837\u7684\u6539\u52a8"))))}c.isMDXComponent=!0}}]);