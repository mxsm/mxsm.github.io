"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[7926],{5865:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>o});var t=i(4848),d=i(8453);const s={title:"LinkedList\u6e90\u7801\u89e3\u6790",date:new Date("2019-11-17T00:00:00.000Z")},l=void 0,a={id:"java/java-se/jdksourcereading/collection/LinkedList",title:"LinkedList\u6e90\u7801\u89e3\u6790",description:"\u94fe\u8868\u7684\u6570\u636e\u7ed3\u6784",source:"@site/docs/java/java-se/jdksourcereading/collection/LinkedList.md",sourceDirName:"java/java-se/jdksourcereading/collection",slug:"/java/java-se/jdksourcereading/collection/LinkedList",permalink:"/docs/java/java-se/jdksourcereading/collection/LinkedList",draft:!1,unlisted:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/java/java-se/jdksourcereading/collection/LinkedList.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1719738085e3,frontMatter:{title:"LinkedList\u6e90\u7801\u89e3\u6790",date:"2019-11-17T00:00:00.000Z"},sidebar:"javase",previous:{title:"HashSet\u6e90\u7801\u89e3\u6790",permalink:"/docs/java/java-se/jdksourcereading/collection/HashSet"},next:{title:"EnumMap",permalink:"/docs/java/java-se/jdksourcereading/map/EnumMap"}},r={},o=[{value:"\u94fe\u8868\u7684\u6570\u636e\u7ed3\u6784",id:"\u94fe\u8868\u7684\u6570\u636e\u7ed3\u6784",level:3},{value:"LinkedList\u6e90\u7801\u89e3\u6790",id:"linkedlist\u6e90\u7801\u89e3\u6790",level:3},{value:"add(E e)",id:"adde-e",level:5},{value:"add(int index, E e)",id:"addint-index-e-e",level:5},{value:"unlink--\u5220\u9664\u5b9e\u73b0",id:"unlink--\u5220\u9664\u5b9e\u73b0",level:4},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:4}];function c(e){const n={code:"code",h3:"h3",h4:"h4",h5:"h5",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,d.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h3,{id:"\u94fe\u8868\u7684\u6570\u636e\u7ed3\u6784",children:"\u94fe\u8868\u7684\u6570\u636e\u7ed3\u6784"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"private static class Node<E> {\n        E item;\n        Node<E> next;\n        Node<E> prev;\n\n        Node(Node<E> prev, E element, Node<E> next) {\n            this.item = element;\n            this.next = next;\n            this.prev = prev;\n        }\n    }\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u5e95\u5c42\u7684\u6570\u636e\u7ed3\u6784\u4e3a\u53cc\u5411\u94fe\u8868"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://github.com/mxsm/document/blob/master/image/datastructure/Doubly-linked-list.svg.png?raw=true",alt:"\u53cc\u5411\u94fe\u8868\u56fe\u793a"})}),"\n",(0,t.jsx)(n.h3,{id:"linkedlist\u6e90\u7801\u89e3\u6790",children:"LinkedList\u6e90\u7801\u89e3\u6790"}),"\n",(0,t.jsx)(n.h5,{id:"adde-e",children:"add(E e)"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"    //\u76f4\u63a5\u63d2\u5165--\u8c03\u7528\u7684\u662f\u63d2\u5165\u5230\u6700\u540e\u4e00\u4e2a\u8282\u70b9\u7684\u540e\u9762\n    public boolean add(E e) {\n        //\u76f4\u63a5\u8c03\u7528\u7684\u5f80\u8282\u70b9\u540e\u9762\u6dfb\u52a0\n        linkLast(e);\n        return true;\n    }\n\n\t//\u63d2\u5165\u8282\u70b9\u540e\u9762\n\tvoid linkLast(E e) {\n        final Node<E> l = last;\n        //\u521b\u5efa\u65b0\u7684\u8282\u70b9\n        final Node<E> newNode = new Node<>(l, e, null);\n        last = newNode;\n        //\u5982\u679c\u6700\u540e\u4e00\u4e2a\u8282\u70b9\u4e3aNULL\u8bf4\u660e\u52a0\u5165\u7684\u662f\u7b2c\u4e00\u4e2a\u8282\u70b9\n        if (l == null)\n            first = newNode;\n        else\n            //\u5c06\u65b0\u7684\u8282\u70b9\u653e\u5728\u6700\u540e\u4e00\u4e2a\u8282\u70b9\u540e\u9762\n            l.next = newNode;\n        //\u589e\u52a0\u6570\u91cf\n        size++;\n        modCount++;\n    }\n\t//\u63d2\u5165\u8282\u70b9\u524d\u9762\n    void linkBefore(E e, Node<E> succ) {\n        // assert succ != null;\n        final Node<E> pred = succ.prev;\n        final Node<E> newNode = new Node<>(pred, e, succ);\n        succ.prev = newNode;\n        if (pred == null)\n            first = newNode;\n        else\n            pred.next = newNode;\n        size++;\n        modCount++;\n    }\n"})}),"\n",(0,t.jsx)(n.h5,{id:"addint-index-e-e",children:"add(int index, E e)"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"    //\u63d2\u5165\u5230\u67d0\u4e2a\u6307\u5b9a\u4f4d\u7f6e\n\tpublic void add(int index, E element) {\n        //\u68c0\u67e5\u662f\u5426\u8d8a\u754c\n        checkPositionIndex(index);\n        //\u5982\u679c\u548c\u94fe\u8868\u7684\u5927\u5c0f\u76f8\u540c\u76f4\u63a5\u63d2\u5165\u5230\u6700\u540e\n        if (index == size)\n            linkLast(element);\n        else\n            linkBefore(element, node(index));\n    }\n\t\n\t//\u83b7\u53d6\u5f53\u524d\u4f4d\u7f6e\u7684Node\n\tNode<E> node(int index) {\n        \n\t\t//\u5c06size\u5de6\u79fb\u4e00\u4f4d\u5224\u65ad\u548cindex\u4e4b\u95f4\u7684\u5173\u7cfb(\u5de7\u5999\u7684\u8282\u7701\u4e86\u4fbf\u5229\u67e5\u627e\u7684\u65f6\u95f4)\n        if (index < (size >> 1)) {\n            Node<E> x = first;\n            for (int i = 0; i < index; i++)\n                x = x.next;\n            return x;\n        } else {\n            Node<E> x = last;\n            for (int i = size - 1; i > index; i--)\n                x = x.prev;\n            return x;\n        }\n    }\n\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u6ce8\u610f\uff1a\u7ec8\u70b9\u5173\u6ce8node\u51fd\u6570\u7684\u7b97\u6cd5\uff0c\u6765\u51cf\u5c11\u83b7\u53d6\u5230\u8282\u70b9\u7684\u8017\u65f6"})}),"\n",(0,t.jsx)(n.h4,{id:"unlink--\u5220\u9664\u5b9e\u73b0",children:"unlink--\u5220\u9664\u5b9e\u73b0"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"    E unlink(Node<E> x) {\n       \n        /**\n          *\u5927\u6982\u7684\u601d\u8def\uff1a\u628a\u5220\u9664\u8282\u70b9prev\u8282\u70b9\u7684next\u8bbe\u7f6e\u4e3a\u5220\u9664\u8282\u70b9\u7684next\n          *\u628a\u5220\u9664\u8282\u70b9\u7684next\u7684prev\u8282\u70b9\u8bbe\u7f6e\u8bbe\u7f6e\u4e3a\u5220\u9664\u8282\u70b9prev\n          */\n        \n        final E element = x.item;\n        final Node<E> next = x.next;\n        final Node<E> prev = x.prev;\n\t\t\n        //\u5904\u7406pre\n        if (prev == null) {\n            first = next;\n        } else {\n            prev.next = next;\n            x.prev = null;\n        }\n\t\t\n        //\u5904\u7406next \n        if (next == null) {\n            last = prev;\n        } else {\n            next.prev = prev;\n            x.next = null;\n        }\n\n        x.item = null;\n        size--;\n        modCount++;\n        return element;\n    }\n"})}),"\n",(0,t.jsx)(n.h4,{id:"\u603b\u7ed3",children:"\u603b\u7ed3"}),"\n",(0,t.jsx)(n.p,{children:"LinkedList\u662f\u91c7\u7528\u53cc\u5411\u94fe\u8868\u5b9e\u73b0\u7684\u3002\u6240\u4ee5\u5b83\u4e5f\u5177\u6709\u94fe\u8868\u7684\u7279\u70b9\uff0c\u6bcf\u4e00\u4e2a\u5143\u7d20\uff08\u7ed3\u70b9\uff09\u7684\u5730\u5740\u4e0d\u8fde\u7eed\uff0c\u901a\u8fc7\u5f15\u7528\u627e\u5230\u5f53\u524d\u7ed3\u70b9\u7684\u4e0a\u4e00\u4e2a\u7ed3\u70b9\u548c\u4e0b\u4e00\u4e2a\u7ed3\u70b9\uff0c\u5373\u63d2\u5165\u548c\u5220\u9664\u6548\u7387\u8f83\u9ad8\uff0c\u53ea\u9700\u8981\u5e38\u6570\u65f6\u95f4\uff0c\u800cget\u548cset\u5219\u8f83\u4e3a\u4f4e\u6548\u3002\nLinkedList\u7684\u65b9\u6cd5\u548c\u4f7f\u7528\u548cArrayList\u5927\u81f4\u76f8\u540c\uff0c\u7531\u4e8eLinkedList\u662f\u94fe\u8868\u5b9e\u73b0\u7684\uff0c\u6240\u4ee5\u989d\u5916\u63d0\u4f9b\u4e86\u5728\u5934\u90e8\u548c\u5c3e\u90e8\u6dfb\u52a0/\u5220\u9664\u5143\u7d20\u7684\u65b9\u6cd5\uff0c\u4e5f\u6ca1\u6709ArrayList\u6269\u5bb9\u7684\u95ee\u9898\u4e86\u3002\u53e6\u5916\uff0cArrayList\u548cLinkedList\u90fd\u53ef\u4ee5\u5b9e\u73b0\u6808\u3001\u961f\u5217\u7b49\u6570\u636e\u7ed3\u6784\uff0c\u4f46LinkedList\u672c\u8eab\u5b9e\u73b0\u4e86\u961f\u5217\u7684\u63a5\u53e3\uff0c\u6240\u4ee5\u66f4\u63a8\u8350\u7528LinkedList\u6765\u5b9e\u73b0\u961f\u5217\u548c\u6808\u3002"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u5728\u9700\u8981\u9891\u7e41\u8bfb\u53d6\u96c6\u5408\u4e2d\u7684\u5143\u7d20\u65f6\uff0c\u4f7f\u7528ArrayList\u6548\u7387\u8f83\u9ad8\uff0c\u800c\u5728\u63d2\u5165\u548c\u5220\u9664\u64cd\u4f5c\u8f83\u591a\u65f6\uff0c\u4f7f\u7528LinkedList\u6548\u7387\u8f83\u9ad8"}),"\u3002\u540c\u6837\u8fd9\u4e9b\u4e5f\u7b26\u5408\u6570\u7ec4\u548c\u94fe\u8868\u7684\u7279\u70b9"]})]})}function u(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>a});var t=i(6540);const d={},s=t.createContext(d);function l(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:l(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);