"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[1843],{11:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>g});var r=n(4848),s=n(8453);const o={title:"RocketMQ\u6e90\u7801\u89e3\u6790-Broker \u6d88\u606fTag\u8fc7\u6ee4",date:new Date("2021-06-12T00:00:00.000Z"),weight:202106120858},a=void 0,i={id:"rocketmq/rocketmq4/broker/RocketMQ-analysis-Broker-tag-filter",title:"RocketMQ\u6e90\u7801\u89e3\u6790-Broker \u6d88\u606fTag\u8fc7\u6ee4",description:"RocketMQ\u6e90\u7801\u7248\u672c4.8.0",source:"@site/docs/rocketmq/rocketmq4/broker/RocketMQ-analysis-Broker-tag-filter.md",sourceDirName:"rocketmq/rocketmq4/broker",slug:"/rocketmq/rocketmq4/broker/RocketMQ-analysis-Broker-tag-filter",permalink:"/docs/rocketmq/rocketmq4/broker/RocketMQ-analysis-Broker-tag-filter",draft:!1,unlisted:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/rocketmq/rocketmq4/broker/RocketMQ-analysis-Broker-tag-filter.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1710172454,formattedLastUpdatedAt:"Mar 11, 2024",frontMatter:{title:"RocketMQ\u6e90\u7801\u89e3\u6790-Broker \u6d88\u606fTag\u8fc7\u6ee4",date:"2021-06-12T00:00:00.000Z",weight:202106120858},sidebar:"rocketmq4",previous:{title:"RocketMQ\u6e90\u7801\u89e3\u6790-Broker\u542f\u52a8",permalink:"/docs/rocketmq/rocketmq4/broker/RocketMQ-analysis-Broker-start"},next:{title:"RocketMQ\u6e90\u7801\u89e3\u6790-Broker\u5b58\u50a8\u914d\u7f6e\u6587\u4ef6\u8bf4\u660e",permalink:"/docs/rocketmq/rocketmq4/broker/RocketMQ-analysis-broker-configfile"}},c={},g=[{value:"1. \u6d88\u606fTagCode\u751f\u6210",id:"1-\u6d88\u606ftagcode\u751f\u6210",level:3},{value:"2. \u6d88\u8d39\u8005\u8ba2\u9605\u4e3b\u9898\u548cTags",id:"2-\u6d88\u8d39\u8005\u8ba2\u9605\u4e3b\u9898\u548ctags",level:3},{value:"3. Broker Tag\u8fc7\u6ee4",id:"3-broker-tag\u8fc7\u6ee4",level:3}];function l(e){const t={blockquote:"blockquote",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"RocketMQ\u6e90\u7801\u7248\u672c4.8.0"}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"1-\u6d88\u606ftagcode\u751f\u6210",children:"1. \u6d88\u606fTagCode\u751f\u6210"}),"\n",(0,r.jsxs)(t.p,{children:["\u901a\u8fc7 ",(0,r.jsx)(t.strong,{children:"ReputMessageService"})," \u670d\u52a1\u83b7\u53d6commitlog\u6570\u636e\u3002\u7136\u540e\u901a\u8fc7 ",(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"CommitLog#checkMessageAndReturnSize"})})," \u751f\u6210tagCode:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:"public DispatchRequest checkMessageAndReturnSize(java.nio.ByteBuffer byteBuffer, final boolean checkCRC,\n        final boolean readBody) {\n         if (propertiesLength > 0) {\n        byteBuffer.get(bytesContent, 0, propertiesLength);\n        String properties = new String(bytesContent, 0, propertiesLength, MessageDecoder.CHARSET_UTF8);\n        propertiesMap = MessageDecoder.string2messageProperties(properties);\n\n        keys = propertiesMap.get(MessageConst.PROPERTY_KEYS);\n\n        uniqKey = propertiesMap.get(MessageConst.PROPERTY_UNIQ_CLIENT_MESSAGE_ID_KEYIDX);\n\n        String tags = propertiesMap.get(MessageConst.PROPERTY_TAGS);\n        if (tags != null && tags.length() > 0) {\n            //\u751f\u6210TagCode\n            tagsCode = MessageExtBrokerInner.tagsString2tagsCode(MessageExt.parseTopicFilterType(sysFlag), tags);\n        }\n        {\n            String t = propertiesMap.get(MessageConst.PROPERTY_DELAY_TIME_LEVEL);\n            if (TopicValidator.RMQ_SYS_SCHEDULE_TOPIC.equals(topic) && t != null) {\n                int delayLevel = Integer.parseInt(t);\n\n                if (delayLevel > this.defaultMessageStore.getScheduleMessageService().getMaxDelayLevel()) {\n                    delayLevel = this.defaultMessageStore.getScheduleMessageService().getMaxDelayLevel();\n                }\n\n                if (delayLevel > 0) {\n                    tagsCode = this.defaultMessageStore.getScheduleMessageService().computeDeliverTimestamp(delayLevel,\n                        storeTimestamp);\n                }\n            }\n        }\n    }\n\n }\n\npublic class MessageExtBrokerInner extends MessageExt {\n     public static long tagsString2tagsCode(final TopicFilterType filter, final String tags) {\n        if (null == tags || tags.length() == 0) { return 0; }\n\n        return tags.hashCode();\n    }\n}\n"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"DispatchRequest\u5c06tag\u8f6c\u5316\u4e3atagCode"}),"\n",(0,r.jsx)(t.li,{children:"DispatchRequest\u7528\u4e8econsumeQueue\u7684\u5b58\u50a8\uff0c\u901a\u8fc7CommitLogDispatcherBuildConsumeQueue\u4fdd\u5b58\u4e86tagsCode"}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"2-\u6d88\u8d39\u8005\u8ba2\u9605\u4e3b\u9898\u548ctags",children:"2. \u6d88\u8d39\u8005\u8ba2\u9605\u4e3b\u9898\u548cTags"}),"\n",(0,r.jsxs)(t.p,{children:["Consumer\u7aef\u5728\u8ba2\u9605\u6d88\u606f\u65f6\u9664\u4e86\u6307\u5b9aTopic\u8fd8\u53ef\u4ee5\u6307\u5b9aTAG\uff0c\u5982\u679c\u4e00\u4e2a\u6d88\u606f\u6709\u591a\u4e2aTAG\uff0c\u53ef\u4ee5\u7528 ",(0,r.jsx)(t.strong,{children:"||"})," \u5206\u9694\u3002\u5176\u4e2d\uff0cConsumer\u7aef\u4f1a\u5c06\u8fd9\u4e2a\u8ba2\u9605\u8bf7\u6c42\u6784\u5efa\u6210\u4e00\u4e2a SubscriptionData\uff0c\u53d1\u9001\u4e00\u4e2aPull\u6d88\u606f\u7684\u8bf7\u6c42\u7ed9Broker\u7aef\uff0c\u770b\u4e00\u4e0b\u6d88\u8d39\u8005\u4ee3\u7801\u7684\u5b9e\u73b0\uff1a"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:'public static SubscriptionData buildSubscriptionData(final String consumerGroup, String topic,\n    String subString) throws Exception {\n    SubscriptionData subscriptionData = new SubscriptionData();\n    subscriptionData.setTopic(topic);\n    subscriptionData.setSubString(subString);\n\n    if (null == subString || subString.equals(SubscriptionData.SUB_ALL) || subString.length() == 0) {\n        subscriptionData.setSubString(SubscriptionData.SUB_ALL);\n    } else {\n        String[] tags = subString.split("\\\\|\\\\|");\n        if (tags.length > 0) {\n            for (String tag : tags) {\n                if (tag.length() > 0) {\n                    String trimString = tag.trim();\n                    if (trimString.length() > 0) {\n                        subscriptionData.getTagsSet().add(trimString);\n                        //\u83b7\u53d6tagCode\u5176\u5b9e\u5c31\u662fhashCode\n                        subscriptionData.getCodeSet().add(trimString.hashCode());\n                    }\n                }\n            }\n        } else {\n            throw new Exception("subString split error");\n        }\n    }\n    return subscriptionData;\n}\n'})}),"\n",(0,r.jsx)(t.h3,{id:"3-broker-tag\u8fc7\u6ee4",children:"3. Broker Tag\u8fc7\u6ee4"}),"\n",(0,r.jsx)(t.p,{children:"Broker\u4eceCommitLog\u8bfb\u53d6\u5b58\u50a8\u6d88\u606f\u6570\u636e\u4e4b\u524d\uff0c\u4f1a\u7528\u6d88\u8d39\u8005\u53d1\u9001\u7684SubscriptionData\u6784\u5efa\u4e00\u4e2aMessageFilter\u8fc7\u6ee4\u5668\u3002\u7136\u540e\u4f20\u7ed9MessageStore\u3002\u7136\u540e\u901a\u8fc7MessageStore\u4ece ConsumeQueue\u8bfb\u53d6\u5230\u4e00\u6761\u8bb0\u5f55\u540e\uff0c\u4f1a\u7528\u5b83\u8bb0\u5f55\u7684\u6d88\u606ftag hash(tagCode)\u503c\u53bb\u505a\u8fc7\u6ee4\uff0c\u7531\u4e8e\u5728\u670d\u52a1\u7aef\u53ea\u662f\u6839\u636ehashcode\u8fdb\u884c\u5224\u65ad\uff0c\u65e0\u6cd5\u7cbe\u786e\u5bf9tag\u539f\u59cb\u5b57\u7b26\u4e32\u8fdb\u884c\u8fc7\u6ee4\uff0c\u6545\u5728\u6d88\u606f\u6d88\u8d39\u7aef\u62c9\u53d6\u5230\u6d88\u606f\u540e\uff0c\u8fd8\u9700\u8981\u5bf9\u6d88\u606f\u7684\u539f\u59cbtag\u5b57\u7b26\u4e32\u8fdb\u884c\u6bd4\u5bf9\uff0c\u5982\u679c\u4e0d\u540c\uff0c\u5219\u4e22\u5f03\u8be5\u6d88\u606f\uff0c\u4e0d\u8fdb\u884c\u6d88\u606f\u6d88\u8d39\u3002"})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>i});var r=n(6540);const s={},o=r.createContext(s);function a(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);