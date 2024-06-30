"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[6810],{5039:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>y,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var t=a(4848),i=a(8453);const r={title:"ArrayList\u6e90\u7801\u5206\u6790",date:new Date("2018-05-07T00:00:00.000Z")},c=void 0,s={id:"java/java-se/jdksourcereading/collection/ArrayList",title:"ArrayList\u6e90\u7801\u5206\u6790",description:"ArrayList",source:"@site/docs/java/java-se/jdksourcereading/collection/ArrayList.md",sourceDirName:"java/java-se/jdksourcereading/collection",slug:"/java/java-se/jdksourcereading/collection/ArrayList",permalink:"/docs/java/java-se/jdksourcereading/collection/ArrayList",draft:!1,unlisted:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/java/java-se/jdksourcereading/collection/ArrayList.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1719738085e3,frontMatter:{title:"ArrayList\u6e90\u7801\u5206\u6790",date:"2018-05-07T00:00:00.000Z"},sidebar:"javase",previous:{title:"Java NIO ByteBuffer\u4f7f\u7528\u56fe\u6587\u8be6\u89e3",permalink:"/docs/java/java-se/javaio/nio-bytebuffer"},next:{title:"CopyOnWriteArrayList\u6e90\u7801\u89e3\u6790",permalink:"/docs/java/java-se/jdksourcereading/collection/CopyOnWriteArrayList"}},l={},d=[{value:"ArrayList",id:"arraylist",level:3},{value:"\u6784\u9020\u65b9\u6cd5",id:"\u6784\u9020\u65b9\u6cd5",level:3},{value:"ArrayList\u6269\u5bb9\u673a\u5236",id:"arraylist\u6269\u5bb9\u673a\u5236",level:3},{value:"1. \u5148\u6765\u770b <code>add</code> \u65b9\u6cd5",id:"1-\u5148\u6765\u770b-add-\u65b9\u6cd5",level:4},{value:"2.  <code>add</code> \u65b9\u6cd5",id:"2--add-\u65b9\u6cd5",level:4},{value:"3.<code>grow</code>\u65b9\u6cd5",id:"3grow\u65b9\u6cd5",level:4},{value:"<code>System.arraycopy()</code>",id:"systemarraycopy",level:2},{value:"ArrayList\u548cVector\u7684\u533a\u522b",id:"arraylist\u548cvector\u7684\u533a\u522b",level:3},{value:"\u4f7f\u7528\u6ce8\u610f",id:"\u4f7f\u7528\u6ce8\u610f",level:3}];function o(e){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h3,{id:"arraylist",children:"ArrayList"}),"\n",(0,t.jsxs)(n.p,{children:["ArrayList\u5e76\u4e0d\u662f\u7ebf\u7a0b\u5b89\u5168\u7684\uff0c\u5728\u8bfb\u7ebf\u7a0b\u5728\u8bfb\u53d6ArrayList\u7684\u65f6\u5019\u5982\u679c\u6709\u5199\u7ebf\u7a0b\u5728\u5199\u6570\u636e\u7684\u65f6\u5019\uff0c\u57fa\u4e8efast-fail\u673a\u5236\uff0c\u4f1a\u629b\u51fa",(0,t.jsx)(n.strong,{children:"ConcurrentModificationException"}),"\u5f02\u5e38\uff0c\u4e5f\u5c31\u662f\u8bf4ArrayList\u5e76\u4e0d\u662f\u4e00\u4e2a\u7ebf\u7a0b\u5b89\u5168\u7684\u5bb9\u5668"]}),"\n",(0,t.jsx)(n.h3,{id:"\u6784\u9020\u65b9\u6cd5",children:"\u6784\u9020\u65b9\u6cd5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'    /**\n     * \u9ed8\u8ba4\u5bb9\u91cf10\n     */\n    private static final int DEFAULT_CAPACITY = 10;\n\n    /**\n     * \u7a7a\u7684\u6570\u636e\u5b9e\u4f8b\n     */\n    private static final Object[] EMPTY_ELEMENTDATA = {};\n\n    /**\n      *\u7528\u6237\u6307\u5b9a\u53c2\u6570\u5bb9\u91cf\n      */\n    public ArrayList(int initialCapacity) {\n        if (initialCapacity > 0) {\n            //\u521d\u59cb\u5bb9\u91cf\u5927\u4e8e0\uff0c\u521b\u5efa\u5bf9\u5e94\u7684Object\u6570\u7ec4\u957f\u5ea6\n            this.elementData = new Object[initialCapacity];\n        } else if (initialCapacity == 0) {\n            //\u7b49\u4e8e0\u8d4b\u503c\u7a7a\u6570\u7ec4\n            this.elementData = EMPTY_ELEMENTDATA;\n        } else {\n            //\u5c0f\u4e8e0\u629b\u9519\n            throw new IllegalArgumentException("Illegal Capacity: "+\n                                               initialCapacity);\n        }\n    }\n\n    /**\n     * \u65e0\u53c2\u6570\u9ed8\u8ba4\u4e3a\u7a7a\u6570\u7ec4\n     */\n    public ArrayList() {\n        this.elementData = DEFAULTCAPACITY_EMPTY_ELEMENTDATA;\n    }\n\n    /**\n     * \u6784\u9020\u5305\u542b\u6307\u5b9acollection\u5143\u7d20\u7684\u5217\u8868\uff0c\u8fd9\u4e9b\u5143\u7d20\u5229\u7528\u8be5\u96c6\u5408\u7684\u8fed\u4ee3\u5668\u6309\u987a\u5e8f\u8fd4\u56de\n     */\n    public ArrayList(Collection<? extends E> c) {\n        elementData = c.toArray();\n        if ((size = elementData.length) != 0) {\n            // c.toArray might (incorrectly) not return Object[] (see 6260652)\n            if (elementData.getClass() != Object[].class)\n                //\u6570\u7ec4\u7684\u62f7\u8d1d\n                elementData = Arrays.copyOf(elementData, size, Object[].class);\n        } else {\n            // \u7a7a\u6570\u7ec4\u66ff\u4ee3\n            this.elementData = EMPTY_ELEMENTDATA;\n        }\n    }\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u4e0d\u6307\u5b9a\u5bb9\u91cf\u9ed8\u8ba4\u4e3a\u7a7a size=0"}),"\n",(0,t.jsx)(n.li,{children:"\u9ed8\u8ba4\u7684\u6269\u5bb9\u5bb9\u91cf\u4e3a10"}),"\n",(0,t.jsx)(n.li,{children:"\u5e95\u5c42\u7684\u6570\u636e\u7ed3\u6784object\u6570\u7ec4"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"arraylist\u6269\u5bb9\u673a\u5236",children:"ArrayList\u6269\u5bb9\u673a\u5236"}),"\n",(0,t.jsx)(n.p,{children:"\u662f\u5426\u6269\u5bb9\u662f\u6839\u636e\u8c03\u7528add\u65b9\u6cd5\u65f6\u5019\u6765\u5224\u65ad\u7684\u3002"}),"\n",(0,t.jsxs)(n.h4,{id:"1-\u5148\u6765\u770b-add-\u65b9\u6cd5",children:["1. \u5148\u6765\u770b ",(0,t.jsx)(n.code,{children:"add"})," \u65b9\u6cd5"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"public boolean add(E e) {\n    \t//\u6dfb\u52a0\u5143\u7d20\u4e4b\u524d\u8c03\u7528ensureCapacityInternal\u786e\u4fdd\u5bb9\u91cf\n        ensureCapacityInternal(size + 1);  // Increments modCount!!\n    \t//\u6dfb\u52a0\u5230\u5bf9\u5e94\u7684\u4f4d\u7f6e\n        elementData[size++] = e;\n        return true;\n    }\n"})}),"\n",(0,t.jsxs)(n.h4,{id:"2--add-\u65b9\u6cd5",children:["2.  ",(0,t.jsx)(n.code,{children:"add"})," \u65b9\u6cd5"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"private void ensureCapacityInternal(int minCapacity) {\n        ensureExplicitCapacity(calculateCapacity(elementData, minCapacity));\n    }\n\nprivate static int calculateCapacity(Object[] elementData, int minCapacity) {\n     // \u83b7\u53d6\u9ed8\u8ba4\u7684\u5bb9\u91cf\u548c\u4f20\u5165\u53c2\u6570\u7684\u8f83\u5927\u503c    \n    if (elementData == DEFAULTCAPACITY_EMPTY_ELEMENTDATA) {\n            return Math.max(DEFAULT_CAPACITY, minCapacity);\n        }\n        return minCapacity;\n    }\n\nprivate void ensureExplicitCapacity(int minCapacity) {\n        modCount++;\n\n        // \u5224\u65ad\u6700\u5c0f\u7684\u5bb9\u91cf\u548c\u6570\u7ec4\u4e4b\u95f4\u7684\u5927\u5c0f\u5173\u7cfb\n        if (minCapacity - elementData.length > 0)\n            //\u6269\u5bb9\n            grow(minCapacity);\n    }\n"})}),"\n",(0,t.jsxs)(n.h4,{id:"3grow\u65b9\u6cd5",children:["3.",(0,t.jsx)(n.code,{children:"grow"}),"\u65b9\u6cd5"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"private void grow(int minCapacity) {\n        // \n        int oldCapacity = elementData.length;\n    \t//\u8fdb\u884c\u6269\u5bb9-- oldCapacity + (oldCapacity >> 1) \u76f8\u5f53\u4e8e oldCapacity + (oldCapacity / 2) \n        int newCapacity = oldCapacity + (oldCapacity >> 1);\n    \t//\u7136\u540e\u68c0\u67e5\u65b0\u5bb9\u91cf\u662f\u5426\u5927\u4e8e\u6700\u5c0f\u9700\u8981\u5bb9\u91cf\uff0c\u82e5\u8fd8\u662f\u5c0f\u4e8e\u6700\u5c0f\u9700\u8981\u5bb9\u91cf\uff0c\u90a3\u4e48\u5c31\u628a\u6700\u5c0f\u9700\u8981\u5bb9\u91cf\u5f53\u4f5c\u6570\u7ec4\u7684\u65b0\u5bb9\u91cf\uff0c\n        if (newCapacity - minCapacity < 0)\n            newCapacity = minCapacity;\n    \t/**\u5982\u679c\u65b0\u5bb9\u91cf\u5927\u4e8e MAX_ARRAY_SIZE,\u8fdb\u5165(\u6267\u884c) `hugeCapacity()` \n          *\u65b9\u6cd5\u6765\u6bd4\u8f83 minCapacity \u548c MAX_ARRAY_SIZE\n          *\u5982\u679cminCapacity\u5927\u4e8e\u6700\u5927\u5bb9\u91cf\uff0c\u5219\u65b0\u5bb9\u91cf\u5219\u4e3a`Integer.MAX_VALUE`\n          */\n        if (newCapacity - MAX_ARRAY_SIZE > 0)\n            newCapacity = hugeCapacity(minCapacity);\n        // minCapacity is usually close to size, so this is a win:\n        elementData = Arrays.copyOf(elementData, newCapacity);\n    }\n"})}),"\n",(0,t.jsx)(n.h2,{id:"systemarraycopy",children:(0,t.jsx)(n.code,{children:"System.arraycopy()"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"  int[] src = new int[]{1,2,3};\n        int[] dest = new int[100];\n\n        System.arraycopy(src, 1, dest, 50, 2);\n        System.out.println(dest[51]);\n        System.out.println(dest[50]);\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u8f93\u51fa\u7ed3\u679c\uff1a3"}),"\n",(0,t.jsx)(n.p,{children:"\u200b\t\t   2"}),"\n",(0,t.jsx)(n.h3,{id:"arraylist\u548cvector\u7684\u533a\u522b",children:"ArrayList\u548cVector\u7684\u533a\u522b"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Vector"}),"\u4ece\u4ee3\u7801\u5c42\u9762\u770b\u65b9\u6cd5\u4e0a\u52a0\u4e86",(0,t.jsx)(n.code,{children:"synchronized"}),"\u662f\u7ebf\u7a0b\u5b89\u5168\uff0c\u4f46\u662f\u5982\u679c\u4e00\u4e2a\u7ebf\u7a0b\u8bbf\u95ee\u9700\u8981\u540c\u6b65\u64cd\u4f5c\u8017\u65f6\u6bd4\u8f83\u957f\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"ArrayList\u4e0d\u662f\u540c\u6b65\u7684\uff0c\u6240\u4ee5\u5728\u4e0d\u9700\u8981\u4fdd\u8bc1\u7ebf\u7a0b\u5b89\u5168\u7684\u65f6\u5019\u4f7f\u7528ArrayList"}),"\n",(0,t.jsx)(n.h3,{id:"\u4f7f\u7528\u6ce8\u610f",children:"\u4f7f\u7528\u6ce8\u610f"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\u5982\u679c\u77e5\u9053 ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"ArrayList"})})," \u7684\u957f\u5ea6\u76f4\u63a5\u8bbe\u7f6e ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"initialCapacity"})})," \u521d\u59cb\u5bb9\u91cf\u3002\u8fd9\u6837\u7684\u597d\u5904\u5728\u4e8e\u907f\u514d\u4e86\u6269\u5bb9\u5e26\u6765\u7684\u6027\u80fd\u95ee\u9898\u3002\u51cf\u5c11\u4e86\u6dfb\u52a0\u8fc7\u7a0b\u4e2d\u6269\u5bb9\u7684\u6b65\u9aa4\uff0c\u5982\u679c\u6570\u91cf\u5c0f\u4e8e10\u5c31\u76f4\u63a5\u7528\u9ed8\u8ba4\u7684\uff0c\u56e0\u4e3a ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"ArrayList"})})," \u7684\u6700\u5c0f\u5bb9\u91cf\u4e3a10\u3002"]}),"\n"]})]})}function y(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},8453:(e,n,a)=>{a.d(n,{R:()=>c,x:()=>s});var t=a(6540);const i={},r=t.createContext(i);function c(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);