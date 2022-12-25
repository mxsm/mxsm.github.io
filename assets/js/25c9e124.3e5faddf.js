"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[7793],{3905:(n,e,t)=>{t.d(e,{Zo:()=>g,kt:()=>d});var r=t(7294);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function o(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var s=r.createContext({}),p=function(n){var e=r.useContext(s),t=e;return n&&(t="function"==typeof n?n(e):o(o({},e),n)),t},g=function(n){var e=p(n.components);return r.createElement(s.Provider,{value:e},n.children)},c="mdxType",u={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(n,e){var t=n.components,a=n.mdxType,i=n.originalType,s=n.parentName,g=l(n,["components","mdxType","originalType","parentName"]),c=p(t),m=a,d=c["".concat(s,".").concat(m)]||c[m]||u[m]||i;return t?r.createElement(d,o(o({ref:e},g),{},{components:t})):r.createElement(d,o({ref:e},g))}));function d(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=n,l[c]="string"==typeof n?n:a,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8474:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=t(7462),a=(t(7294),t(3905));const i={title:"\u5b57\u7b26\u4e32\u62fc\u63a5\u90a3\u4e9b\u4e8b",date:new Date("2019-06-01T00:00:00.000Z")},o=void 0,l={unversionedId:"java/java-se/others/string-concat",id:"java/java-se/others/string-concat",title:"\u5b57\u7b26\u4e32\u62fc\u63a5\u90a3\u4e9b\u4e8b",description:"1. \u4ee3\u7801\u4e2d\u5b57\u7b26\u4e32\u6700\u5e38\u7528\u7684\u62fc\u63a5\u65b9\u6cd5",source:"@site/docs/java/java-se/others/string-concat.md",sourceDirName:"java/java-se/others",slug:"/java/java-se/others/string-concat",permalink:"/docs/java/java-se/others/string-concat",draft:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/java/java-se/others/string-concat.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1671958290,formattedLastUpdatedAt:"Dec 25, 2022",frontMatter:{title:"\u5b57\u7b26\u4e32\u62fc\u63a5\u90a3\u4e9b\u4e8b",date:"2019-06-01T00:00:00.000Z"},sidebar:"javase",previous:{title:"\u67e5\u770b\u7ebf\u7a0b\u7684CPU\u4f7f\u7528",permalink:"/docs/java/java-se/others/show-thread-use-cpu"},next:{title:"Java\u7ebf\u7a0b\u6c60\u4f7f\u7528\u4e0d\u5f53\u4f1a\u53d1\u751f\u4ec0\u4e48-\u751f\u4ea7\u6848\u4f8b",permalink:"/docs/java/java-se/others/threadpool-used-error"}},s={},p=[{value:"1. \u4ee3\u7801\u4e2d\u5b57\u7b26\u4e32\u6700\u5e38\u7528\u7684\u62fc\u63a5\u65b9\u6cd5",id:"1-\u4ee3\u7801\u4e2d\u5b57\u7b26\u4e32\u6700\u5e38\u7528\u7684\u62fc\u63a5\u65b9\u6cd5",level:3},{value:"2.  <strong><code>+</code></strong> \u64cd\u4f5c\u7b26\u7684\u62fc\u63a5",id:"2---\u64cd\u4f5c\u7b26\u7684\u62fc\u63a5",level:3},{value:"3. <strong><code>String</code></strong> \u7684 <strong><code>concat</code></strong> \u65b9\u6cd5",id:"3-string-\u7684-concat-\u65b9\u6cd5",level:3},{value:"4. <strong><code>StringBuffer</code></strong> \u548c <strong><code>StringBuilder</code></strong> \u7684 <strong><code>append</code></strong> \u65b9\u6cd5",id:"4-stringbuffer-\u548c-stringbuilder-\u7684-append-\u65b9\u6cd5",level:3},{value:"5. <strong><code>StringUtils.join</code></strong>",id:"5-stringutilsjoin",level:3},{value:"6. \u5404\u81ea\u7684\u6548\u7387",id:"6-\u5404\u81ea\u7684\u6548\u7387",level:3}],g={toc:p};function c(n){let{components:e,...t}=n;return(0,a.kt)("wrapper",(0,r.Z)({},g,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"1-\u4ee3\u7801\u4e2d\u5b57\u7b26\u4e32\u6700\u5e38\u7528\u7684\u62fc\u63a5\u65b9\u6cd5"},"1. \u4ee3\u7801\u4e2d\u5b57\u7b26\u4e32\u6700\u5e38\u7528\u7684\u62fc\u63a5\u65b9\u6cd5"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"+"))," \u62fc\u63a5"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"apache"))," \u7684\u5de5\u5177\u7c7b ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"StringUtils.join"))," \u65b9\u6cd5"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"String"))," \u7c7b\u7684\u5bf9\u8c61\u65b9\u6cd5 ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"concat"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"StringBuffer"))," \u7c7b\u7684\u5bf9\u8c61\u65b9\u6cd5 ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"append"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"StringBuilder")),"  \u7c7b\u7684\u5bf9\u8c61\u65b9\u6cd5  ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"append")))),(0,a.kt)("p",null,"\u7b49\u7b49\u4e00\u4e9b\u7ec4\u5408\u65b9\u5f0f\u3002\u4ee5\u4e0a\u51e0\u79cd\u662f\u7f16\u7801\u8fc7\u7a0b\u4e2d\u6700\u5e38\u89c1\u7684\u3002\u4e0b\u9762\u5c31\u6765\u770b\u770b\u8fd9\u51e0\u79cd\u65b9\u5f0f\u7684\u5b57\u7b26\u4e32\u62fc\u63a5\u7684\u5b9e\u73b0\u548c\u6548\u7387"),(0,a.kt)("h3",{id:"2---\u64cd\u4f5c\u7b26\u7684\u62fc\u63a5"},"2.  ",(0,a.kt)("strong",{parentName:"h3"},(0,a.kt)("inlineCode",{parentName:"strong"},"+"))," \u64cd\u4f5c\u7b26\u7684\u62fc\u63a5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'public class StringConcatTest {\n\n    public static void main(String[] args) {\n        String wc = "aaaaa";\n        String wc1 = "bbbbbb";\n        String ct = wc + "," + wc1;\n    }\n\n}\n')),(0,a.kt)("p",null,"\u67e5\u770b ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},".class"))," \u6587\u4ef6\u540e\u7684\u53cd\u7f16\u8bd1\u4ee3\u7801\u5982\u4e0b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'package com.mxsm.cglib.enhancer;\n\npublic class StringConcatTest {\n    public StringConcatTest() {\n    }\n\n    public static void main(String[] args) {\n        String wc = "aaaaa";\n        String wc1 = "bbbbbb";\n        (new StringBuilder()).append(wc).append(",").append(wc1).toString();\n    }\n}\n')),(0,a.kt)("p",null,"\u4ee3\u7801 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},' String ct = wc + "," + wc1;'))," \u2014> ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},'(new StringBuilder()).append(wc).append(",").append(wc1).toString();'))),(0,a.kt)("p",null,"\u8f6c\u6362\u6210\u4e86 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"StringBuilder"))," \u7684 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"append"))," \u65b9\u6cd5\u3002"),(0,a.kt)("p",null,"\u5728\u963f\u91cc\u5df4\u5df4\u7684Java\u5f00\u53d1\u624b\u518c\u4e2d\u4e0d\u5efa\u8bae\u5faa\u73af\u4f53\u4e2d\u4f7f\u7528 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"+"))," \u8fdb\u884c\u5b57\u7b26\u4e32\u62fc\u63a5\u539f\u56e0\u662f\u4ec0\u4e48\uff1f"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u539f\u56e0\u5c31\u5728\u4e8e ",(0,a.kt)("inlineCode",{parentName:"strong"},"+")," \u6bcf\u6b21\u521b\u5efa\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"strong"},"StringBuilder")," \u5bf9\u8c61\u7136\u540e ",(0,a.kt)("inlineCode",{parentName:"strong"},"toString()")," \u8fd4\u56de\u5b57\u7b26\u4e32\u5bf9\u8c61\uff0c\u9020\u6210\u5185\u5b58\u8d44\u6e90\u7684\u6d6a\u8d39")," "),(0,a.kt)("h3",{id:"3-string-\u7684-concat-\u65b9\u6cd5"},"3. ",(0,a.kt)("strong",{parentName:"h3"},(0,a.kt)("inlineCode",{parentName:"strong"},"String"))," \u7684 ",(0,a.kt)("strong",{parentName:"h3"},(0,a.kt)("inlineCode",{parentName:"strong"},"concat"))," \u65b9\u6cd5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'public class StringConcatTest {\n    public static void main(String[] args) {\n        String wc = "aaaaa";\n        String wc1 = "bbbbbb";\n        String ct = wc.concat(",").concat(wc1);\n    }\n}\n')),(0,a.kt)("p",null,"\u63a5\u4e0b\u6765\u770b\u4e00\u4e0b ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"concat"))," \u7684\u6e90\u7801\u662f\u600e\u4e48\u5b9e\u73b0\u62fc\u63a5\u7684"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"\npublic String concat(String str) {\n        //\u83b7\u53d6\u957f\u5ea6\n        int otherLen = str.length();\n        if (otherLen == 0) {\n            return this;\n        }\n        //\u83b7\u53d6\u539f\u6709\u5b57\u6bb5\u7684\u957f\u5904\n        int len = value.length;\n        //\u5b57\u7b26\u4e32\u7684\u62f7\u8d1d\n        char buf[] = Arrays.copyOf(value, len + otherLen);\n        str.getChars(buf, len);\n        //\u8fd4\u56de\u4e00\u4e2anew String\u7684\u65b0\u5bf9\u8c61\n        return new String(buf, true);\n    }\n")),(0,a.kt)("h3",{id:"4-stringbuffer-\u548c-stringbuilder-\u7684-append-\u65b9\u6cd5"},"4. ",(0,a.kt)("strong",{parentName:"h3"},(0,a.kt)("inlineCode",{parentName:"strong"},"StringBuffer"))," \u548c ",(0,a.kt)("strong",{parentName:"h3"},(0,a.kt)("inlineCode",{parentName:"strong"},"StringBuilder"))," \u7684 ",(0,a.kt)("strong",{parentName:"h3"},(0,a.kt)("inlineCode",{parentName:"strong"},"append"))," \u65b9\u6cd5"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"StringBuffer"))," \u7684 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"append"))," \u65b9\u6cd5"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-java"},"    @Override\n    public synchronized StringBuffer append(String str) {\n        toStringCache = null;\n        //\u8c03\u7528\u7684\u662f\u7236\u7c7b\u7684append\u65b9\u6cd5\n        super.append(str);\n        return this;\n    }\n public AbstractStringBuilder append(String str) {\n        if (str == null)\n            return appendNull();\n        int len = str.length();\n        ensureCapacityInternal(count + len);\n        str.getChars(0, len, value, count);\n        count += len;\n        return this;\n    }\n")),(0,a.kt)("p",{parentName:"li"},"\u6ce8\u610f\uff1a",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"StringBuffer"))," \u7684 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"append"))," \u65b9\u6cd5\u5e26\u6709\u5173\u952e\u5b57 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"synchronized"))," \u8bf4\u660e\u662f\u7ebf\u7a0b\u5b89\u5168\u7684\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"StringBuilder"))," \u7684 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"append"))," \u65b9\u6cd5"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-java"},"@Override\npublic StringBuilder append(String str) {\n    super.append(str);\n    return this;\n}\n\n public AbstractStringBuilder append(String str) {\n        if (str == null)\n            return appendNull();\n        int len = str.length();\n        ensureCapacityInternal(count + len);\n        str.getChars(0, len, value, count);\n        count += len;\n        return this;\n    }\n")))),(0,a.kt)("p",null,"\u4ece\u4e0a\u9762\u7684\u6e90\u7801\u53ef\u4ee5\u770b\u51fa\u6765 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"StringBuffer"))," \u548c ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"StringBuilder"))," \u7684\u5e95\u5c42\u5b9e\u73b0\u90fd\u662f \u8c03\u7528\u4e86\u7236\u7c7b ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"AbstractStringBuilder"))," \u7684 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"append")),"\u65b9\u6cd5\u3002\u552f\u4e00\u7684\u533a\u522b\u5c31\u662f ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"StringBuffer"))," \u7ebf\u7a0b\u5b89\u5168 \uff0c ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"StringBuilder"))," \u975e\u7ebf\u7a0b\u5b89\u5168\u3002\u6240\u4ee5\u60f3\u8981\u7ebf\u7a0b\u5b89\u5168 \u5c31\u7528 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"StringBuffer"))," \u6ca1\u6709\u7ebf\u7a0b\u5b89\u5168\u7684\u95ee\u9898\u7684\u8003\u8651\u5c31\u7528 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"StringBuilder"))," \u3002 "),(0,a.kt)("h3",{id:"5-stringutilsjoin"},"5. ",(0,a.kt)("strong",{parentName:"h3"},(0,a.kt)("inlineCode",{parentName:"strong"},"StringUtils.join"))),(0,a.kt)("p",null,"\u8fd9\u91cc\u6e90\u7801\u81ea\u884c\u53c2\u8003 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"apache"))," \u5de5\u5177\u7c7b \u7684\u6e90\u7801"),(0,a.kt)("h3",{id:"6-\u5404\u81ea\u7684\u6548\u7387"},"6. \u5404\u81ea\u7684\u6548\u7387"),(0,a.kt)("p",null,"\u91cd\u4e2d\u4e4b\u91cd\u7684\u6765\u4e86\uff0c\u90a3\u5c31\u662f\u5404\u4e2a\u65b9\u6cd5\u7684\u62fc\u63a5\u6548\u7387\u600e\u4e48\u6837\uff1f\u4e3a\u4ec0\u4e48\u963f\u91cc\u5df4\u5df4\u7684Java\u89c4\u8303\u4e2d\u4e0d\u63d0\u5021\u7528 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"+"))," \u8fdb\u884c\u5b57\u7b26\u4e32\u62fc\u63a5"),(0,a.kt)("p",null,"\u4e0b\u9762\u6211\u4eec\u4e0a\u4ee3\u7801\u6765\u8bf4\u660e\u660e\u5929\uff0c\u770b\u770b\u5230\u5e95\u8c01\u725b\u903c\u901f\u5ea6\u5feb\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'public class StringConcatTest {\n\n    public static void main(String[] args) {\n\n        int count = 66666;\n\n        long t1 = System.currentTimeMillis();\n        String s1 = "1";\n        for(int i = 0; i < count; ++i){\n            s1 = s1 + "1";\n        }\n        System.out.println("+ "+(System.currentTimeMillis()-t1)+"ms");\n\n\n        long t2 = System.currentTimeMillis();\n        StringBuffer s2 = new StringBuffer("1");\n        for(int i = 0; i < count; ++i){\n            s2.append("1");\n        }\n        System.out.println("StringBuffer "+(System.currentTimeMillis()-t2)+"ms");\n\n        long t3 = System.currentTimeMillis();\n        StringBuilder s3 = new StringBuilder("1");\n        for(int i = 0; i < count; ++i){\n            s3.append("1");\n        }\n        System.out.println("StringBuilder "+(System.currentTimeMillis()-t3)+"ms");\n\n        long t4 = System.currentTimeMillis();\n        String s4 = "1";\n        for(int i = 0; i < count; ++i){\n            s4 = s4.concat("1");\n        }\n        System.out.println("concat "+(System.currentTimeMillis()-t4)+"ms");\n\n    }\n\n}\n')),(0,a.kt)("p",null,"\u8fd0\u884c\u7684\u6253\u5370\u7ed3\u679c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"+ 2949ms\nStringBuffer 2ms\nStringBuilder 1ms\nconcat 693ms\n")))}c.isMDXComponent=!0}}]);