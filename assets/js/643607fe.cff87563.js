"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[8676],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>v});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var d=r.createContext({}),s=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(d.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,d=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=s(t),m=i,v=u["".concat(d,".").concat(m)]||u[m]||p[m]||a;return t?r.createElement(v,l(l({ref:n},c),{},{components:t})):r.createElement(v,l({ref:n},c))}));function v(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=m;var o={};for(var d in n)hasOwnProperty.call(n,d)&&(o[d]=n[d]);o.originalType=e,o[u]="string"==typeof e?e:i,l[1]=o;for(var s=2;s<a;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2459:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var r=t(7462),i=(t(7294),t(3905));const a={title:"LinkedList\u6e90\u7801\u89e3\u6790",date:new Date("2019-11-17T00:00:00.000Z")},l=void 0,o={unversionedId:"java/java-se/jdksourcereading/collection/LinkedList",id:"java/java-se/jdksourcereading/collection/LinkedList",title:"LinkedList\u6e90\u7801\u89e3\u6790",description:"\u94fe\u8868\u7684\u6570\u636e\u7ed3\u6784",source:"@site/docs/java/java-se/jdksourcereading/collection/LinkedList.md",sourceDirName:"java/java-se/jdksourcereading/collection",slug:"/java/java-se/jdksourcereading/collection/LinkedList",permalink:"/docs/java/java-se/jdksourcereading/collection/LinkedList",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/java/java-se/jdksourcereading/collection/LinkedList.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1672841610,formattedLastUpdatedAt:"Jan 4, 2023",frontMatter:{title:"LinkedList\u6e90\u7801\u89e3\u6790",date:"2019-11-17T00:00:00.000Z"},sidebar:"javase",previous:{title:"HashSet\u6e90\u7801\u89e3\u6790",permalink:"/docs/java/java-se/jdksourcereading/collection/HashSet"},next:{title:"EnumMap",permalink:"/docs/java/java-se/jdksourcereading/map/EnumMap"}},d={},s=[{value:"\u94fe\u8868\u7684\u6570\u636e\u7ed3\u6784",id:"\u94fe\u8868\u7684\u6570\u636e\u7ed3\u6784",level:3},{value:"LinkedList\u6e90\u7801\u89e3\u6790",id:"linkedlist\u6e90\u7801\u89e3\u6790",level:3},{value:"add(E e)",id:"adde-e",level:5},{value:"add(int index, E e)",id:"addint-index-e-e",level:5},{value:"unlink--\u5220\u9664\u5b9e\u73b0",id:"unlink--\u5220\u9664\u5b9e\u73b0",level:4},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:4}],c={toc:s};function u(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"\u94fe\u8868\u7684\u6570\u636e\u7ed3\u6784"},"\u94fe\u8868\u7684\u6570\u636e\u7ed3\u6784"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"private static class Node<E> {\n        E item;\n        Node<E> next;\n        Node<E> prev;\n\n        Node(Node<E> prev, E element, Node<E> next) {\n            this.item = element;\n            this.next = next;\n            this.prev = prev;\n        }\n    }\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5e95\u5c42\u7684\u6570\u636e\u7ed3\u6784\u4e3a\u53cc\u5411\u94fe\u8868")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://github.com/mxsm/document/blob/master/image/datastructure/Doubly-linked-list.svg.png?raw=true",alt:"\u53cc\u5411\u94fe\u8868\u56fe\u793a"})),(0,i.kt)("h3",{id:"linkedlist\u6e90\u7801\u89e3\u6790"},"LinkedList\u6e90\u7801\u89e3\u6790"),(0,i.kt)("h5",{id:"adde-e"},"add(E e)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"    //\u76f4\u63a5\u63d2\u5165--\u8c03\u7528\u7684\u662f\u63d2\u5165\u5230\u6700\u540e\u4e00\u4e2a\u8282\u70b9\u7684\u540e\u9762\n    public boolean add(E e) {\n        //\u76f4\u63a5\u8c03\u7528\u7684\u5f80\u8282\u70b9\u540e\u9762\u6dfb\u52a0\n        linkLast(e);\n        return true;\n    }\n\n    //\u63d2\u5165\u8282\u70b9\u540e\u9762\n    void linkLast(E e) {\n        final Node<E> l = last;\n        //\u521b\u5efa\u65b0\u7684\u8282\u70b9\n        final Node<E> newNode = new Node<>(l, e, null);\n        last = newNode;\n        //\u5982\u679c\u6700\u540e\u4e00\u4e2a\u8282\u70b9\u4e3aNULL\u8bf4\u660e\u52a0\u5165\u7684\u662f\u7b2c\u4e00\u4e2a\u8282\u70b9\n        if (l == null)\n            first = newNode;\n        else\n            //\u5c06\u65b0\u7684\u8282\u70b9\u653e\u5728\u6700\u540e\u4e00\u4e2a\u8282\u70b9\u540e\u9762\n            l.next = newNode;\n        //\u589e\u52a0\u6570\u91cf\n        size++;\n        modCount++;\n    }\n    //\u63d2\u5165\u8282\u70b9\u524d\u9762\n    void linkBefore(E e, Node<E> succ) {\n        // assert succ != null;\n        final Node<E> pred = succ.prev;\n        final Node<E> newNode = new Node<>(pred, e, succ);\n        succ.prev = newNode;\n        if (pred == null)\n            first = newNode;\n        else\n            pred.next = newNode;\n        size++;\n        modCount++;\n    }\n")),(0,i.kt)("h5",{id:"addint-index-e-e"},"add(int index, E e)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"    //\u63d2\u5165\u5230\u67d0\u4e2a\u6307\u5b9a\u4f4d\u7f6e\n    public void add(int index, E element) {\n        //\u68c0\u67e5\u662f\u5426\u8d8a\u754c\n        checkPositionIndex(index);\n        //\u5982\u679c\u548c\u94fe\u8868\u7684\u5927\u5c0f\u76f8\u540c\u76f4\u63a5\u63d2\u5165\u5230\u6700\u540e\n        if (index == size)\n            linkLast(element);\n        else\n            linkBefore(element, node(index));\n    }\n    \n    //\u83b7\u53d6\u5f53\u524d\u4f4d\u7f6e\u7684Node\n    Node<E> node(int index) {\n        \n        //\u5c06size\u5de6\u79fb\u4e00\u4f4d\u5224\u65ad\u548cindex\u4e4b\u95f4\u7684\u5173\u7cfb(\u5de7\u5999\u7684\u8282\u7701\u4e86\u4fbf\u5229\u67e5\u627e\u7684\u65f6\u95f4)\n        if (index < (size >> 1)) {\n            Node<E> x = first;\n            for (int i = 0; i < index; i++)\n                x = x.next;\n            return x;\n        } else {\n            Node<E> x = last;\n            for (int i = size - 1; i > index; i--)\n                x = x.prev;\n            return x;\n        }\n    }\n\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a\u7ec8\u70b9\u5173\u6ce8node\u51fd\u6570\u7684\u7b97\u6cd5\uff0c\u6765\u51cf\u5c11\u83b7\u53d6\u5230\u8282\u70b9\u7684\u8017\u65f6")),(0,i.kt)("h4",{id:"unlink--\u5220\u9664\u5b9e\u73b0"},"unlink--\u5220\u9664\u5b9e\u73b0"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"    E unlink(Node<E> x) {\n       \n        /**\n          *\u5927\u6982\u7684\u601d\u8def\uff1a\u628a\u5220\u9664\u8282\u70b9prev\u8282\u70b9\u7684next\u8bbe\u7f6e\u4e3a\u5220\u9664\u8282\u70b9\u7684next\n          *\u628a\u5220\u9664\u8282\u70b9\u7684next\u7684prev\u8282\u70b9\u8bbe\u7f6e\u8bbe\u7f6e\u4e3a\u5220\u9664\u8282\u70b9prev\n          */\n        \n        final E element = x.item;\n        final Node<E> next = x.next;\n        final Node<E> prev = x.prev;\n        \n        //\u5904\u7406pre\n        if (prev == null) {\n            first = next;\n        } else {\n            prev.next = next;\n            x.prev = null;\n        }\n        \n        //\u5904\u7406next \n        if (next == null) {\n            last = prev;\n        } else {\n            next.prev = prev;\n            x.next = null;\n        }\n\n        x.item = null;\n        size--;\n        modCount++;\n        return element;\n    }\n")),(0,i.kt)("h4",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,i.kt)("p",null,"LinkedList\u662f\u91c7\u7528\u53cc\u5411\u94fe\u8868\u5b9e\u73b0\u7684\u3002\u6240\u4ee5\u5b83\u4e5f\u5177\u6709\u94fe\u8868\u7684\u7279\u70b9\uff0c\u6bcf\u4e00\u4e2a\u5143\u7d20\uff08\u7ed3\u70b9\uff09\u7684\u5730\u5740\u4e0d\u8fde\u7eed\uff0c\u901a\u8fc7\u5f15\u7528\u627e\u5230\u5f53\u524d\u7ed3\u70b9\u7684\u4e0a\u4e00\u4e2a\u7ed3\u70b9\u548c\u4e0b\u4e00\u4e2a\u7ed3\u70b9\uff0c\u5373\u63d2\u5165\u548c\u5220\u9664\u6548\u7387\u8f83\u9ad8\uff0c\u53ea\u9700\u8981\u5e38\u6570\u65f6\u95f4\uff0c\u800cget\u548cset\u5219\u8f83\u4e3a\u4f4e\u6548\u3002\nLinkedList\u7684\u65b9\u6cd5\u548c\u4f7f\u7528\u548cArrayList\u5927\u81f4\u76f8\u540c\uff0c\u7531\u4e8eLinkedList\u662f\u94fe\u8868\u5b9e\u73b0\u7684\uff0c\u6240\u4ee5\u989d\u5916\u63d0\u4f9b\u4e86\u5728\u5934\u90e8\u548c\u5c3e\u90e8\u6dfb\u52a0/\u5220\u9664\u5143\u7d20\u7684\u65b9\u6cd5\uff0c\u4e5f\u6ca1\u6709ArrayList\u6269\u5bb9\u7684\u95ee\u9898\u4e86\u3002\u53e6\u5916\uff0cArrayList\u548cLinkedList\u90fd\u53ef\u4ee5\u5b9e\u73b0\u6808\u3001\u961f\u5217\u7b49\u6570\u636e\u7ed3\u6784\uff0c\u4f46LinkedList\u672c\u8eab\u5b9e\u73b0\u4e86\u961f\u5217\u7684\u63a5\u53e3\uff0c\u6240\u4ee5\u66f4\u63a8\u8350\u7528LinkedList\u6765\u5b9e\u73b0\u961f\u5217\u548c\u6808\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u5728\u9700\u8981\u9891\u7e41\u8bfb\u53d6\u96c6\u5408\u4e2d\u7684\u5143\u7d20\u65f6\uff0c\u4f7f\u7528ArrayList\u6548\u7387\u8f83\u9ad8\uff0c\u800c\u5728\u63d2\u5165\u548c\u5220\u9664\u64cd\u4f5c\u8f83\u591a\u65f6\uff0c\u4f7f\u7528LinkedList\u6548\u7387\u8f83\u9ad8"),"\u3002\u540c\u6837\u8fd9\u4e9b\u4e5f\u7b26\u5408\u6570\u7ec4\u548c\u94fe\u8868\u7684\u7279\u70b9"))}u.isMDXComponent=!0}}]);