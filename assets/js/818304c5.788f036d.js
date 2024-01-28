"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[4989],{2292:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>c,frontMatter:()=>l,metadata:()=>h,toc:()=>d});var s=a(5893),t=a(1151);const l={title:"HashMap\u548cHashTable\u7684\u533a\u522b",date:new Date("2019-08-09T00:00:00.000Z")},r=void 0,h={id:"java/java-se/jdksourcereading/map/HashMap-HashTable-diff",title:"HashMap\u548cHashTable\u7684\u533a\u522b",description:"HashMap\u548cHashTable\u533a\u522b",source:"@site/docs/java/java-se/jdksourcereading/map/HashMap-HashTable-diff.md",sourceDirName:"java/java-se/jdksourcereading/map",slug:"/java/java-se/jdksourcereading/map/HashMap-HashTable-diff",permalink:"/docs/java/java-se/jdksourcereading/map/HashMap-HashTable-diff",draft:!1,unlisted:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/java/java-se/jdksourcereading/map/HashMap-HashTable-diff.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1706451902,formattedLastUpdatedAt:"Jan 28, 2024",frontMatter:{title:"HashMap\u548cHashTable\u7684\u533a\u522b",date:"2019-08-09T00:00:00.000Z"},sidebar:"javase",previous:{title:"EnumMap",permalink:"/docs/java/java-se/jdksourcereading/map/EnumMap"},next:{title:"HashMap\u6e90\u7801\u89e3\u6790",permalink:"/docs/java/java-se/jdksourcereading/map/HashMap"}},i={},d=[{value:"HashMap\u548cHashTable\u533a\u522b",id:"hashmap\u548chashtable\u533a\u522b",level:3}];function u(e){const n={code:"code",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h3,{id:"hashmap\u548chashtable\u533a\u522b",children:"HashMap\u548cHashTable\u533a\u522b"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u7ebf\u7a0b\u662f\u5426\u5b89\u5168"}),"\uff1aHashMap\u975e\u7ebf\u7a0b\u5b89\u5168\uff0cHashTable\u662f\u7ebf\u7a0b\u5b89\u5168\u7684\uff1bHashTable\u5185\u90e8\u90fd\u7ecf\u8fc7\u4e86",(0,s.jsx)(n.code,{children:"synchronized"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'//HashMap\u7684put\u65b9\u6cd5\n    public V put(K key, V value) {\n        return putVal(hash(key), key, value, false, true);\n    }\n\n\t//HashTable\u7684put\u65b9\u6cd5\n\t    public synchronized V put(K key, V value) {\n        // Make sure the value is not null\n        if (value == null) {\n            throw new NullPointerException();\n        }\n\n        // Makes sure the key is not already in the hashtable.\n        Entry<?,?> tab[] = table;\n        int hash = key.hashCode();\n        int index = (hash & 0x7FFFFFFF) % tab.length;\n        @SuppressWarnings("unchecked")\n        Entry<K,V> entry = (Entry<K,V>)tab[index];\n        for(; entry != null ; entry = entry.next) {\n            if ((entry.hash == hash) && entry.key.equals(key)) {\n                V old = entry.value;\n                entry.value = value;\n                return old;\n            }\n        }\n        addEntry(hash, key, value, index);\n        return null;\n    }\n\n\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u6548\u7387:"})," \u56e0\u4e3a\u7ebf\u7a0b\u5b89\u5168\u95ee\u9898\uff0cHashMap\u8981\u6bd4HashTable\u6548\u7387\u7565\u9ad8\u4e00\u70b9\uff0cJDK1.8\u57fa\u672c\u4e0a\u88ab\u6dd8\u6c70\u4e86\uff0c\u4e0d\u8981\u5728\u4ee3\u7801\u4e2d\u4f7f\u7528"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u5bf9Null key \u548cNull value\u7684\u652f\u6301\uff1a"})," HashMap\u53ef\u4ee5\u7528null\u4f5c\u4e3a\u952e\u503c\uff0c\u8fd9\u6837\u7684\u4e14\u53ea\u6709\u4e00\u4e2a\u3002\u4f46\u662f\u5728 HashTable \u4e2d put \u8fdb\u7684\u952e\u503c\u6216\u8005value\u53ea\u8981\u6709\u4e00\u4e2a null\uff0c\u76f4\u63a5\u629b\u51fa NullPointerException"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'//HashTable\npublic synchronized V put(K key, V value) {\n        //\u786e\u4fddvalue\u4e0d\u7b49\u4e8enull\n        if (value == null) {\n            throw new NullPointerException();\n        }\n\n        // Makes sure the key is not already in the hashtable.\n        Entry<?,?> tab[] = table;\n    \t//key\u4e0d\u80fd\u4e3anull--NullPointerException\n        int hash = key.hashCode();\n        int index = (hash & 0x7FFFFFFF) % tab.length;\n        @SuppressWarnings("unchecked")\n        Entry<K,V> entry = (Entry<K,V>)tab[index];\n        for(; entry != null ; entry = entry.next) {\n            if ((entry.hash == hash) && entry.key.equals(key)) {\n                V old = entry.value;\n                entry.value = value;\n                return old;\n            }\n        }\n        addEntry(hash, key, value, index);\n        return null;\n    }\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u521d\u59cb\u5bb9\u91cf\u5927\u5c0f\u548c\u6bcf\u6b21\u6269\u5145\u5bb9\u91cf\u5927\u5c0f\u7684\u4e0d\u540c \uff1a"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u9ed8\u8ba4\u521d\u59cb\u5bb9\u91cf\u4e0d\u4e00\u6837\uff1a",(0,s.jsx)(n.code,{children:"HashMap"}),"\u521d\u59cb\u5bb9\u91cf16\uff0c",(0,s.jsx)(n.code,{children:"HashTable"}),"\u521d\u59cb\u5bb9\u91cf11\u3002\u6269\u5bb9HashMap\u90fd\u662f\u53d8\u4e3a\u539f\u6765\u76842\u500d\uff0cHashMap\u5bb9\u91cf\u6bcf\u6b21\u6269\u5bb9\u90fd\u662f2\u7684\u5e42\u6b21\u65b9\u5927\u5c0f(tableSizeFor\u65b9\u6cd5\u4fdd\u8bc1)\uff0cHashTable\u7684\u7684\u6269\u5bb9(oldCapacity << 1) + 1\u53ca2n+1"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:" public Hashtable() {\n        this(11, 0.75f);\n    }\n\t//HashMap \u53d1\u751f\u5728\u7b2c\u4e00\u6b21put\u7684\u65f6\u5019\n     int newCap = DEFAULT_INITIAL_CAPACITY;\n     int newThr = (int)(DEFAULT_LOAD_FACTOR * DEFAULT_INITIAL_CAPACITY);\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u5e95\u5c42\u6570\u636e\u7ed3\u6784:"})," JDK1.8\u4ee5\u540e\u7684HashMap\u5728\u89e3\u51b3Hash\u51b2\u7a81\u8bd5\u7528\u4e86\u54c8\u5e0c\u8868+\u94fe\u8868+\u7ea2\u9ed1\u6811\uff0c\u94fe\u8868\u8f6c\u6362\u4e3a\u7ea2\u9ed1\u6811\u7684\u72b6\u6001\u7684\u9608\u503c\u4e3a8\u3002\u7528\u6765\u51cf\u5c11\u641c\u7d22\u65f6\u95f4\uff0cHashTable\u6ca1\u6709\u8fd9\u6837\u7684\u6539\u52a8"]}),"\n"]}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},1151:(e,n,a)=>{a.d(n,{Z:()=>h,a:()=>r});var s=a(7294);const t={},l=s.createContext(t);function r(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function h(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);