"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[4834],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},y="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),y=c(t),m=a,d=y["".concat(s,".").concat(m)]||y[m]||u[m]||l;return t?r.createElement(d,i(i({ref:n},p),{},{components:t})):r.createElement(d,i({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=m;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[y]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3507:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=t(7462),a=(t(7294),t(3905));const l={title:"CopyOnWriteArrayList\u6e90\u7801\u89e3\u6790",linkTitle:"CopyOnWriteArrayList\u6e90\u7801\u89e3\u6790",date:new Date("2022-03-25T00:00:00.000Z"),weight:202203252217},i=void 0,o={unversionedId:"java/java-se/jdksourcereading/collection/CopyOnWriteArrayList",id:"java/java-se/jdksourcereading/collection/CopyOnWriteArrayList",title:"CopyOnWriteArrayList\u6e90\u7801\u89e3\u6790",description:"Offer \u9a7e\u5230\uff0c\u6398\u53cb\u63a5\u62db\uff01\u6211\u6b63\u5728\u53c2\u4e0e2022\u6625\u62db\u6253\u5361\u6d3b\u52a8\uff0c\u70b9\u51fb\u67e5\u770b\u6d3b\u52a8\u8be6\u60c5\u3002",source:"@site/docs/java/java-se/jdksourcereading/collection/CopyOnWriteArrayList.md",sourceDirName:"java/java-se/jdksourcereading/collection",slug:"/java/java-se/jdksourcereading/collection/CopyOnWriteArrayList",permalink:"/docs/java/java-se/jdksourcereading/collection/CopyOnWriteArrayList",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/java/java-se/jdksourcereading/collection/CopyOnWriteArrayList.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1684027896,formattedLastUpdatedAt:"May 14, 2023",frontMatter:{title:"CopyOnWriteArrayList\u6e90\u7801\u89e3\u6790",linkTitle:"CopyOnWriteArrayList\u6e90\u7801\u89e3\u6790",date:"2022-03-25T00:00:00.000Z",weight:202203252217},sidebar:"javase",previous:{title:"ArrayList\u6e90\u7801\u5206\u6790",permalink:"/docs/java/java-se/jdksourcereading/collection/ArrayList"},next:{title:"CopyOnWriteArraySet\u6e90\u7801\u89e3\u6790",permalink:"/docs/java/java-se/jdksourcereading/collection/CopyOnWriteArraySet"}},s={},c=[{value:"1. CopyOnWrite\u5bb9\u5668",id:"1-copyonwrite\u5bb9\u5668",level:3},{value:"2. \u6982\u5ff5",id:"2-\u6982\u5ff5",level:3},{value:"2.1 CopyOnWriteArrayList",id:"21-copyonwritearraylist",level:4},{value:"2.2 Add\u65b9\u6cd5",id:"22-add\u65b9\u6cd5",level:4},{value:"3. \u603b\u7ed3",id:"3-\u603b\u7ed3",level:3}],p={toc:c},y="wrapper";function u(e){let{components:n,...t}=e;return(0,a.kt)(y,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Offer \u9a7e\u5230\uff0c\u6398\u53cb\u63a5\u62db\uff01\u6211\u6b63\u5728\u53c2\u4e0e2022\u6625\u62db\u6253\u5361\u6d3b\u52a8\uff0c\u70b9\u51fb\u67e5\u770b",(0,a.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7069661622012215309/"},"\u6d3b\u52a8\u8be6\u60c5"),"\u3002"),(0,a.kt)("h3",{id:"1-copyonwrite\u5bb9\u5668"},"1. CopyOnWrite\u5bb9\u5668"),(0,a.kt)("p",null,"\u57fa\u672c\u601d\u8def\u5c31\u662f\u5728\u591a\u4e2a\u7ebf\u7a0b\u5171\u4eab\u540c\u4e00\u4e2a\u5185\u5bb9\uff0c\u5f53\u67d0\u4e2a\u7ebf\u7a0b\u60f3\u4fee\u6539\u8fd9\u4e2a\u5185\u5bb9\u7684\u65f6\u5019\uff0c\u624d\u4f1a\u771f\u6b63\u7684\u628a\u5185\u5bb9\u62f7\u8d1d\u51fa\u53bb\u5f62\u6210\u4e00\u4e2a\u65b0\u7684\u5185\u5bb9\u7136\u540e\u518d\u4fee\u6539\uff0c\u8fd9\u662f\u4e00\u79cd",(0,a.kt)("strong",{parentName:"p"},"\u5ef6\u8fdf\u61d2\u60f0\u7b56\u7565")),(0,a.kt)("h3",{id:"2-\u6982\u5ff5"},"2. \u6982\u5ff5"),(0,a.kt)("p",null,"\u901a\u4fd7\u7684\u7406\u89e3\u662f\u5f53\u6211\u4eec\u5f80\u4e00\u4e2a\u5bb9\u5668\u6dfb\u52a0\u5143\u7d20\u7684\u65f6\u5019\uff0c\u4e0d\u76f4\u63a5\u5f80\u5f53\u524d\u5bb9\u5668\u6dfb\u52a0\uff0c\u800c\u662f\u5148\u5c06\u5f53\u524d\u5bb9\u5668\u8fdb\u884cCopy\uff0c\u590d\u5236\u51fa\u4e00\u4e2a\u65b0\u7684\u5bb9\u5668\uff0c\u7136\u540e\u65b0\u7684\u5bb9\u5668\u91cc\u6dfb\u52a0\u5143\u7d20\uff0c\u6dfb\u52a0\u5b8c\u5143\u7d20\u4e4b\u540e\uff0c\u518d\u5c06\u539f\u5bb9\u5668\u7684\u5f15\u7528\u6307\u5411\u65b0\u7684\u5bb9\u5668\u3002\u8fd9\u6837\u505a\u7684\u597d\u5904\u662f\u6211\u4eec\u53ef\u4ee5\u5bf9CopyOnWrite\u5bb9\u5668",(0,a.kt)("strong",{parentName:"p"},"\u8fdb\u884c\u5e76\u53d1\u7684\u8bfb\uff0c\u800c\u4e0d\u9700\u8981\u52a0\u9501"),"\uff0c\u56e0\u4e3a\u5f53\u524d\u5bb9\u5668\u4e0d\u4f1a\u6dfb\u52a0\u4efb\u4f55\u5143\u7d20\u3002\n\u6240\u4ee5CopyOnWrite\u5bb9\u5668\u4e5f\u662f\u4e00\u79cd",(0,a.kt)("strong",{parentName:"p"},"\u8bfb\u5199\u5206\u79bb\u7684\u601d\u60f3\uff0c\u8bfb\u548c\u5199\u5728\u4e0d\u540c\u7684\u5bb9\u5668")),(0,a.kt)("h4",{id:"21-copyonwritearraylist"},"2.1 CopyOnWriteArrayList"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"    /** \u91cd\u5165\u9501--\u540c\u6b65\u6240\u6709\u7684\u7a81\u53d8\u64cd\u4f5c */\n    final transient ReentrantLock lock = new ReentrantLock();\n\n    /** \u6570\u636e\u4fdd\u5b58\u7ed3\u6784 */\n    private transient volatile Object[] array;\n\n    /**\n     * Gets the array.  Non-private so as to also be accessible\n     * from CopyOnWriteArraySet class.\n     */\n    final Object[] getArray() {\n        return array;\n    }\n\n    /**\n     * Sets the array.\n     */\n    final void setArray(Object[] a) {\n        array = a;\n    }\n\n    /**\n     * \u521d\u59cb\u5316\u957f\u5ea6\u4e3a0\n     */\n    public CopyOnWriteArrayList() {\n        setArray(new Object[0]);\n    }\n\n    /**\n     * \u53c2\u6570\u4e3a\u4e00\u4e2a\u96c6\u5408\n     * \n     * \n     *\n     * @param c the collection of initially held elements\n     * @throws NullPointerException if the specified collection is null\n     */\n    public CopyOnWriteArrayList(Collection<? extends E> c) {\n        Object[] elements;\n        if (c.getClass() == CopyOnWriteArrayList.class)\n            elements = ((CopyOnWriteArrayList<?>)c).getArray();\n        else {\n            elements = c.toArray();\n            // c.toArray might (incorrectly) not return Object[] (see 6260652)\n            if (elements.getClass() != Object[].class)\n                elements = Arrays.copyOf(elements, elements.length, Object[].class);\n        }\n        setArray(elements);\n    }\n\n    /**\n     * \u53c2\u6570\u4e3a\u4e00\u4e2a\u6570\u7ec4\n     *\n     * @param toCopyIn the array (a copy of this array is used as the\n     *        internal array)\n     * @throws NullPointerException if the specified array is null\n     */\n    public CopyOnWriteArrayList(E[] toCopyIn) {\n        setArray(Arrays.copyOf(toCopyIn, toCopyIn.length, Object[].class));\n    }\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),"\uff1a\u7531\u4e8e\u5f53\u6211\u4eec\u5f80\u4e00\u4e2a\u5bb9\u5668\u6dfb\u52a0\u5143\u7d20\u7684\u65f6\u5019\uff0c\u4e0d\u76f4\u63a5\u5f80\u5f53\u524d\u5bb9\u5668\u6dfb\u52a0\uff0c\u800c\u662f\u5148\u5c06\u5f53\u524d\u5bb9\u5668\u8fdb\u884cCopy\uff0c\u590d\u5236\u51fa\u4e00\u4e2a\u65b0\u7684\u5bb9\u5668\uff0c\u7136\u540e\u65b0\u7684\u5bb9\u5668\u91cc\u6dfb\u52a0\u5143\u7d20\uff0c\u6dfb\u52a0\u5b8c\u5143\u7d20\u4e4b\u540e\uff0c\u518d\u5c06\u539f\u5bb9\u5668\u7684\u5f15\u7528\u6307\u5411\u65b0\u7684\u5bb9\u5668\u3002\u6240\u4ee5\u5728\u5f80CopyOnWriteArrayList\u6dfb\u52a0\u6570\u636e\u7684\u65f6\u5019\u4e0d\u8981\u4e00\u4e2a\u4e2a\u6dfb\u52a0\uff0c",(0,a.kt)("strong",{parentName:"p"},"\u6700\u597d\u7684\u65b9\u5f0f\u662f\u901a\u8fc7\u5e26\u53c2\u6570\u7684\u6784\u9020\u65b9\u6cd5\u6216\u8005\u8c03\u7528addAll\u7684\u65b9\u5f0f\u6dfb\u52a0\u6570\u636e\uff0c\u51cf\u5c11\u5e95\u5c42\u7684\u6bcf\u6b21\u62f7\u8d1d\u800c\u5360\u7528\u5185\u5b58\u548c\u9891\u7e41\u7684\u5bfc\u81f4GC\u64cd\u4f5c"),"\u3002"),(0,a.kt)("h4",{id:"22-add\u65b9\u6cd5"},"2.2 Add\u65b9\u6cd5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'public boolean add(E e) {\n        final ReentrantLock lock = this.lock;\n        //\u52a0\u9501\n        lock.lock();\n        try {\n            //\u83b7\u53d6\u539f\u6709\u7684\u6570\u636e\u6570\u7ec4\n            Object[] elements = getArray();\n            //\u6570\u7ec4\u7684\u957f\u5ea6\n            int len = elements.length;\n            //\u62f7\u8d1d---\u957f\u5ea6\u4e3alen + 1\n            Object[] newElements = Arrays.copyOf(elements, len + 1);\n            //\u5c06\u65b0\u6dfb\u52a0\u7684\u6570\u636e\u8bbe\u7f6e\u5230\u6700\u540e\n            newElements[len] = e;\n            //\u5c06array\u6307\u5411\u65b0\u7684newElements --\u5185\u5b58\u53ef\u89c1(array\u53d8\u91cf\u88abvolatile\u4fee\u9970)\n            setArray(newElements);\n            return true;\n        } finally {\n            //\u91ca\u653e\u9501\n            lock.unlock();\n        }\n    }    \n\npublic void add(int index, E element) {\n        final ReentrantLock lock = this.lock;\n        //\u52a0\u9501\n        lock.lock();\n        try {\n            Object[] elements = getArray();\n            int len = elements.length;\n            if (index > len || index < 0)\n                throw new IndexOutOfBoundsException("Index: "+index+\n                                                    ", Size: "+len);\n            Object[] newElements;\n            int numMoved = len - index;\n            if (numMoved == 0)\n                newElements = Arrays.copyOf(elements, len + 1);\n            else {\n                newElements = new Object[len + 1];\n                System.arraycopy(elements, 0, newElements, 0, index);\n                System.arraycopy(elements, index, newElements, index + 1,\n                                 numMoved);\n            }\n            newElements[index] = element;\n            setArray(newElements);\n        } finally {\n            //\u91ca\u653e\u9501\n            lock.unlock();\n        }\n    }\n')),(0,a.kt)("p",null,"\u6ce8\u610f\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u91c7\u7528",(0,a.kt)("inlineCode",{parentName:"li"},"ReentrantLock"),"\u4fdd\u8bc1\u4e86\u540c\u4e00\u65f6\u523b\u53ea\u6709\u4e00\u4e2a\u5199\u7684\u7ebf\u7a0b\u5728\u590d\u5236\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u6570\u7ec4\u53d8\u91cfarray\u7684\u5e94\u7528\u662f\u7528",(0,a.kt)("inlineCode",{parentName:"li"},"volatile"),"\u4fee\u9970\u8fc7\u7684\uff0c\u5e94\u916c\u5c06\u65e7\u7684\u6570\u7ec4\u5e94\u7528\u6307\u5411\u65b0\u7684\u6570\u7ec4\uff1b\u6839\u636e",(0,a.kt)("inlineCode",{parentName:"li"},"volatile"),"\u7684",(0,a.kt)("inlineCode",{parentName:"li"},"happens-before"),"\u89c4\u5219\uff0c\u7ebf\u7a0b\u5bf9\u6570\u7ec4\u5f15\u7528\u7684\u4fee\u6539\u5bf9\u7ebf\u7a0b\u662f\u53ef\u89c1\u7684\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u7531\u4e8e\u5728\u5199\u6570\u636e\u7684\u65f6\u5019\uff0c\u662f\u5728\u65b0\u7684\u6570\u7ec4\u4e2d\u63d2\u5165\u6570\u636e\u7684\uff0c\u4ece\u800c\u4fdd\u8bc1\u8bfb\u5199\u5b9e\u5728\u4e24\u4e2a\u4e0d\u540c\u7684\u6570\u636e\u5bb9\u5668\u4e2d\u8fdb\u884c\u64cd\u4f5c\u3002")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mxsm/picture/main/java/collection/CopyOnWriteArrayList%E8%AF%BB%E5%86%99%E7%A4%BA%E5%9B%BE.png",alt:"CopyOnWriteArrayList\u8bfb\u5199\u793a\u56fe"})),(0,a.kt)("h3",{id:"3-\u603b\u7ed3"},"3. \u603b\u7ed3"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u4f18\u70b9\uff1a")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8bfb\u5199\u662f\u5206\u79bb\u7684"),(0,a.kt)("li",{parentName:"ul"},"\u8bfb\u7ebf\u7a0b\u4e4b\u95f4\u662f\u4e92\u4e0d\u963b\u585e\u7684"),(0,a.kt)("li",{parentName:"ul"},"\u727a\u7272\u6570\u636e\u7684\u5b9e\u65f6\u6027\u800c\u4fdd\u8bc1\u4e86\u6700\u7ec8\u6570\u636e\u7684\u4e00\u81f4\u6027\u3002\u5373\u8bfb\u7ebf\u7a0b\u5bf9\u6570\u636e\u7684\u66f4\u65b0\u662f\u5ef6\u8fdf\u611f\u77e5\u7684\uff0c\u56e0\u6b64\u8fd9\u79cd\u60c5\u51b5\u4e0b\u8bfb\u7ebf\u7a0b\u4e0d\u5b58\u5728\u7b49\u5f85\u7684\u60c5\u51b5\u3002")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u7f3a\u70b9\uff1a")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5185\u5b58\u5360\u7528\u7684\u95ee\u9898\uff1a\u56e0\u4e3aCopyOnWrite\u662f\u5199\u7684\u65f6\u5019\u590d\u5236\u673a\u5236\uff0c\u6240\u4ee5\u5728\u5199\u64cd\u4f5c\u7684\u65f6\u5019\u3002\u5185\u5b58\u4e2d\u4f1a\u5b58\u5728\u4e24\u4e2a\u5bf9\u8c61\u7684\u5185\u5b58\uff0c\u65e7\u7684\u5bf9\u8c61\u548c\u65b0\u5199\u5165\u7684\u5bf9\u8c61\u3002\u6ce8\u610f:\u5728\u590d\u5236\u7684\u65f6\u5019\u53ea\u662f\u590d\u5236\u5bb9\u5668\u91cc\u7684\u5f15\u7528\uff0c\u53ea\u662f\u5728\u5199\u7684\u65f6\u5019\u4f1a\u521b\u5efa\u65b0\u5bf9\u8c61\u6dfb\u52a0\u5230\u65b0\u5bb9\u5668\u91cc\uff0c\u800c\u65e7\u5bb9\u5668\u7684\u5bf9\u8c61\u8fd8\u5728\u4f7f\u7528\uff0c\u6240\u4ee5\u6709\u4e24\u4efd\u5bf9\u8c61\u5185\u5b58\uff09\u5982\u679c\u5bf9\u8c61\u5185\u5b58\u5360\u7528\u6bd4\u8f83\u5927\u6709\u53ef\u80fd\u9020\u6210\u9891\u7e41\u7684GC\u3002"),(0,a.kt)("li",{parentName:"ul"},"CopyOnWrite\u5bb9\u5668\u4fdd\u8bc1\u6700\u7ec8\u7684\u6570\u636e\u4e00\u81f4\u6027\u800c\u4e0d\u80fd\u4fdd\u8bc1\u6570\u636e\u7684\u5b9e\u65f6\u4e00\u81f4\u6027")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6211\u662f\u8682\u8681\u80cc\u5927\u8c61\uff0c\u6587\u7ae0\u5bf9\u4f60\u6709\u5e2e\u52a9\u70b9\u8d5e\u5173\u6ce8\u6211\uff0c\u6587\u7ae0\u6709\u4e0d\u6b63\u786e\u7684\u5730\u65b9\u8bf7\u60a8\u65a7\u6b63\u7559\u8a00\u8bc4\u8bba~\u8c22\u8c22")))}u.isMDXComponent=!0}}]);