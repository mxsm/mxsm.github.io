"use strict";(self.webpackChunkmxsm_website=self.webpackChunkmxsm_website||[]).push([[7889],{2495:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>r,metadata:()=>c,toc:()=>o});var n=t(4848),i=t(8453);const r={title:"Rocketmq\u6d88\u606f\u7ed3\u6784",linkTitle:"Rocketmq\u6d88\u606f\u7ed3\u6784",sidebar_position:202301202119,description:"Message\u7c7b\u7684\u7ed3\u6784\u4f53\u8bf4\u660e\u8be6\u89e3"},a=void 0,c={id:"rocketmq/rocketmq5/client/producer/rocketmq-message",title:"Rocketmq\u6d88\u606f\u7ed3\u6784",description:"Message\u7c7b\u7684\u7ed3\u6784\u4f53\u8bf4\u660e\u8be6\u89e3",source:"@site/docs/rocketmq/rocketmq5/03-client/producer/02-rocketmq-message.md",sourceDirName:"rocketmq/rocketmq5/03-client/producer",slug:"/rocketmq/rocketmq5/client/producer/rocketmq-message",permalink:"/docs/rocketmq/rocketmq5/client/producer/rocketmq-message",draft:!1,unlisted:!1,editUrl:"https://github.com/mxsm/mxsm-website/edit/develop/docs/rocketmq/rocketmq5/03-client/producer/02-rocketmq-message.md",tags:[],version:"current",lastUpdatedBy:"mxsm",lastUpdatedAt:1710172454,formattedLastUpdatedAt:"Mar 11, 2024",sidebarPosition:202301202119,frontMatter:{title:"Rocketmq\u6d88\u606f\u7ed3\u6784",linkTitle:"Rocketmq\u6d88\u606f\u7ed3\u6784",sidebar_position:202301202119,description:"Message\u7c7b\u7684\u7ed3\u6784\u4f53\u8bf4\u660e\u8be6\u89e3"},sidebar:"rocketmq5",previous:{title:"\u804a\u804aRocketMQ5\u6d88\u606f\u53d1\u9001",permalink:"/docs/rocketmq/rocketmq5/client/producer/message-send"},next:{title:"Rocketmq\u751f\u4ea7\u8005\u542f\u52a8\u6d41\u7a0b\u5206\u6790",permalink:"/docs/rocketmq/rocketmq5/client/producer/producer-start"}},l={},o=[{value:"1. Message",id:"1-message",level:2},{value:"2. Message ID\u751f\u6210",id:"2-message-id\u751f\u6210",level:2},{value:"2.1 \u5ba2\u6237\u7aef\u751f\u6210MessageID\u7684\u65f6\u673a\u548c\u673a\u5236",id:"21-\u5ba2\u6237\u7aef\u751f\u6210messageid\u7684\u65f6\u673a\u548c\u673a\u5236",level:3},{value:"2.1.1 \u5ba2\u6237\u7aef\u751f\u4ea7MessageID\u65f6\u673a",id:"211-\u5ba2\u6237\u7aef\u751f\u4ea7messageid\u65f6\u673a",level:4},{value:"2.1.2 \u5ba2\u6237\u7aef\u751f\u6210MessageID\u673a\u5236",id:"212-\u5ba2\u6237\u7aef\u751f\u6210messageid\u673a\u5236",level:4},{value:"2.2 Broker\u7aef\u751f\u6210MessageID\u7684\u65f6\u673a\u548c\u673a\u5236",id:"22-broker\u7aef\u751f\u6210messageid\u7684\u65f6\u673a\u548c\u673a\u5236",level:3},{value:"2.2.1 \u751f\u6210\u6d88\u606fID\u7684\u65f6\u673a",id:"221-\u751f\u6210\u6d88\u606fid\u7684\u65f6\u673a",level:4},{value:"2.2.2 \u751f\u6210\u6d88\u606fID\u673a\u5236",id:"222-\u751f\u6210\u6d88\u606fid\u673a\u5236",level:4}];function d(e){const s={code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h2,{id:"1-message",children:"1. Message"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-java",metastring:'jxs title="Message"',children:"public class Message implements Serializable {\n    private static final long serialVersionUID = 8445773977080406428L;\n\n    private String topic;\n    private int flag;\n    private Map<String, String> properties;\n    private byte[] body;\n    private String transactionId;\n\n}\n"})}),"\n",(0,n.jsx)(s.p,{children:"\u53d1\u9001\u4e00\u4e2aMQ\u7684\u6d88\u606f\u5305\u542b\u4e86\u54ea\u4e9b\u6570\u636e\uff0c\u8fd9\u4e2a\u5fc5\u987b\u77e5\u9053."}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsx)(s.li,{children:"\u4e3b\u9898(topic): \u7528\u6765\u6807\u8bb0\u8fd9\u4e2a\u6d88\u606f\u5c5e\u4e8e\u90a3\u4e2atopic,\u8fd9\u4e2a\u4e5f\u662f\u5fc5\u987b\u8981\u7684\u3002\u4e3b\u9898\u548c\u6d88\u606f\u662f1\u5bf9\u591a\u7684\u5173\u7cfb\u3002"}),"\n",(0,n.jsx)(s.li,{children:"\u6d88\u606f\u4f53(body): \u6d88\u606f\u5185\u5bb9\uff0c\u6765\u627f\u8f7d\u6d88\u606f\u7684\u5177\u4f53\u6570\u636e"}),"\n",(0,n.jsx)(s.li,{children:"flag\u6807\u8bb0\u4f4d"}),"\n",(0,n.jsx)(s.li,{children:"transactionId\u662f\u7528\u4e8e\u53d1\u9001\u4e8b\u52a1\u6d88\u606f\u5b58\u50a8\u4e8b\u52a1\u6d88\u606fID"}),"\n",(0,n.jsx)(s.li,{children:"\u5176\u4ed6\u7684\u5c5e\u6027\u5b58\u653e\u5728properties\u4e2d\uff0c\u8fd9\u91cc\u5305\u542bMessage ID\u7b49\u4e00\u4e9b\u5176\u4ed6\u7684\u5c5e\u6027\u90fd\u53ef\u4ee5\u5b58\u653e\u5728\u8fd9\u91cc\u3002"}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"2-message-id\u751f\u6210",children:"2. Message ID\u751f\u6210"}),"\n",(0,n.jsx)(s.p,{children:"Message\u5728\u53d1\u9001\u5230Broker\u4e4b\u524d\u4f1a\u5728\u5ba2\u6237\u7aef\u751f\u4ea7\u8005\u521b\u5efa\u4e00\u4e2aMessage ID\u7136\u540e\u53d1\u9001\u5230Broker, Broker\u5728\u4fdd\u5b58\u5230\u672c\u5730\u7684\u65f6\u5019\u4e5f\u4f1a\u5e8a\u67b6\u4e00\u4e2aMessage ID \u540c\u65f6\u4f1a\u5728\u53d1\u9001\u6210\u529f\u540e\u8fd4\u56de\u7ed9\u5230\u5ba2\u6237\u7aef\u3002"}),"\n",(0,n.jsx)(s.h3,{id:"21-\u5ba2\u6237\u7aef\u751f\u6210messageid\u7684\u65f6\u673a\u548c\u673a\u5236",children:"2.1 \u5ba2\u6237\u7aef\u751f\u6210MessageID\u7684\u65f6\u673a\u548c\u673a\u5236"}),"\n",(0,n.jsxs)(s.p,{children:["\u751f\u4ea7\u8005\u53d1\u9001\u6d88\u606f\u7684\u57fa\u672c\u6d41\u7a0b\uff1a\n",(0,n.jsx)(s.img,{src:"https://raw.githubusercontent.com/mxsm/picture/main/rocketmq5/client/producer%E7%94%9F%E4%BA%A7%E8%80%85%E5%8F%91%E9%80%81%E6%B6%88%E6%81%AF%E7%9A%84%E5%9F%BA%E6%9C%AC%E6%B5%81%E7%A8%8B.png",alt:"\u751f\u4ea7\u8005\u53d1\u9001\u6d88\u606f\u7684\u57fa\u672c\u6d41\u7a0b"})]}),"\n",(0,n.jsx)(s.h4,{id:"211-\u5ba2\u6237\u7aef\u751f\u4ea7messageid\u65f6\u673a",children:"2.1.1 \u5ba2\u6237\u7aef\u751f\u4ea7MessageID\u65f6\u673a"}),"\n",(0,n.jsx)(s.p,{children:"\u5ba2\u6237\u7aef\u751f\u6210MessageId\u9700\u8981\u5206\u4e3a\u4e24\u79cd\u6765\u8bf4\uff1a"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"\u5355\u4e2a\u6d88\u606f\u751f\u6210MessageId\u65f6\u673a"}),"\n",(0,n.jsx)(s.li,{children:"\u6279\u91cf\u6d88\u606f\u751f\u6210MessageId\u7684\u65f6\u673a"}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"\u5bf9\u4e8e\u5355\u4e2a\u6d88\u606f\u751f\u6210MessageID\u662f\u5728DefaultMQProducerImpl#sendKernelImpl\u65b9\u6cd5\u4e2d\u751f\u6210"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-java",metastring:'jxs title="DefaultMQProducerImpl"',children:"if (!(msg instanceof MessageBatch)) {\n   MessageClientIDSetter.setUniqID(msg);\n}\n\n"})}),"\n",(0,n.jsx)(s.p,{children:"\u800c\u6279\u91cf\u6d88\u606f\u662f\u5728\u8c03\u7528\u6279\u91cf\u6d88\u606f\u53d1\u9001\u65b9\u6cd5\u7684\u65f6\u5019\u5c31\u628a\u6279\u91cf\u6d88\u606f\u7684MessageID\u5df2\u7ecf\u4fdd\u5b58\u4e86DefaultMQProducer#send"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-java",metastring:'jxs title="DefaultMQProducer"',children:'    @Override\n    public SendResult send(\n        Collection<Message> msgs) throws MQClientException, RemotingException, MQBrokerException, InterruptedException {\n        return this.defaultMQProducerImpl.send(batch(msgs));\n    }\n    private MessageBatch batch(Collection<Message> msgs) throws MQClientException {\n        MessageBatch msgBatch;\n        try {\n            msgBatch = MessageBatch.generateFromList(msgs);\n            for (Message message : msgBatch) {\n                Validators.checkMessage(message, this);\n                MessageClientIDSetter.setUniqID(message);\n                message.setTopic(withNamespace(message.getTopic()));\n            }\n            MessageClientIDSetter.setUniqID(msgBatch);\n            msgBatch.setBody(msgBatch.encode());\n        } catch (Exception e) {\n            throw new MQClientException("Failed to initiate the MessageBatch", e);\n        }\n        msgBatch.setTopic(withNamespace(msgBatch.getTopic()));\n        return msgBatch;\n    }\n'})}),"\n",(0,n.jsx)(s.h4,{id:"212-\u5ba2\u6237\u7aef\u751f\u6210messageid\u673a\u5236",children:"2.1.2 \u5ba2\u6237\u7aef\u751f\u6210MessageID\u673a\u5236"}),"\n",(0,n.jsx)(s.p,{children:"\u751f\u6210\u7684\u4ee3\u7801\u5982\u4e0b\uff1a"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-java",metastring:'jxs title="MessageClientIDSetter"',children:"public static String createUniqID() {\n    char[] sb = new char[LEN * 2];\n    System.arraycopy(FIX_STRING, 0, sb, 0, FIX_STRING.length);\n    long current = System.currentTimeMillis();\n    if (current >= nextStartTime) {\n        setStartTime(current);\n    }\n    int diff = (int)(current - startTime);\n    if (diff < 0 && diff > -1000_000) {\n        // may cause by NTP\n        diff = 0;\n    }\n    int pos = FIX_STRING.length;\n    UtilAll.writeInt(sb, pos, diff);\n    pos += 8;\n    UtilAll.writeShort(sb, pos, COUNTER.getAndIncrement());\n    return new String(sb);\n}\n"})}),"\n",(0,n.jsx)(s.p,{children:"\u5728\u5ba2\u6237\u7aef\u751f\u6210message id\u4e3b\u8981\u5305\u542b\u4e86\u4ee5\u4e0b\u51e0\u4e2a\u90e8\u5206\uff1a"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsx)(s.li,{children:"\u524d\u7f00\u90e8\u5206\u4e3b\u8981\u5305\u542b\u4e86\uff1a\u5ba2\u6237\u7aef\u7684IP\u5730\u5740\uff0cJVM\u7684PID\uff0cMessageClientIDSetter\u7684ClassLoader\u7684HashCode"}),"\n",(0,n.jsx)(s.li,{children:"\u5f53\u524d\u65f6\u95f4\u548c\u5ba2\u6237\u7aef\u542f\u52a8\u7684\u65f6\u95f4\u5dee"}),"\n",(0,n.jsx)(s.li,{children:"\u81ea\u589e\u5e8f\u5217\u53f7"}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"22-broker\u7aef\u751f\u6210messageid\u7684\u65f6\u673a\u548c\u673a\u5236",children:"2.2 Broker\u7aef\u751f\u6210MessageID\u7684\u65f6\u673a\u548c\u673a\u5236"}),"\n",(0,n.jsx)(s.h4,{id:"221-\u751f\u6210\u6d88\u606fid\u7684\u65f6\u673a",children:"2.2.1 \u751f\u6210\u6d88\u606fID\u7684\u65f6\u673a"}),"\n",(0,n.jsx)(s.p,{children:"\u751f\u4ea7\u8005\u53d1\u9001\u6d88\u606f\u65f6\u4f1a\u5e26\u4e0a\u53d1\u9001\u7ed9Broker\u7684code\uff1aSEND_MESSAGE\uff0cBroker\u6536\u5230\u8be5\u6d88\u606f\u65f6\u4f1a\u4f7f\u7528SendMessageProcessor\u7684sendMessage\u65b9\u6cd5\u6765\u5904\u7406\u53d1\u9001\u6d88\u606f\u6d41\u7a0b\uff0c\u5373\u53d1\u9001\u6d88\u606f\u3002\u6240\u4ee5Broker\u751f\u6210\u6d88\u606fID\u65f6\u673a\u5728Broker\u5b58\u50a8\u6d88\u606f\u5230\u672c\u5730\u65f6\u3002"}),"\n",(0,n.jsx)(s.h4,{id:"222-\u751f\u6210\u6d88\u606fid\u673a\u5236",children:"2.2.2 \u751f\u6210\u6d88\u606fID\u673a\u5236"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-java",metastring:'jxs title="MessageDecoder"',children:"public static String createMessageId(final ByteBuffer input, final ByteBuffer addr, final long offset) {\n    input.flip();\n    int msgIDLength = addr.limit() == 8 ? 16 : 28;\n    input.limit(msgIDLength);\n\n    input.put(addr);\n    input.putLong(offset);\n\n    return UtilAll.bytes2string(input.array());\n}\n"})})]})}function m(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8453:(e,s,t)=>{t.d(s,{R:()=>a,x:()=>c});var n=t(6540);const i={},r=n.createContext(i);function a(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);