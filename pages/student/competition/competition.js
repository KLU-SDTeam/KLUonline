//获取应用实例
var listDB = require('../../../cache/listDB.js');

Page({
  data: {
    def_compList: [{
      postId: "1001",
      comtitle: '凯里学院微校园团队凯里学院微校园团队凯里学院微校园团队',
      comtime: '2018-11-12',
      color: '#32CD32',
      comcontent: "1.计算机相关专业，工作经验2-5年，年龄22-35周岁，有电商行业经验优先; \n 2.良好沟通、表达能力，良好的学习能力; \n 3.熟练掌握 Java 及面向对象设计开发，对部分 Java 技术有深入研究，研究过优秀开源软件的源码并有心得者优先; \n 4.熟悉 SOA 架构理念、实现技术；熟悉常见设计模式，熟练掌握 Spring、SpringMVC，myBatis等框架，对Dubbo、SpringCloud等有使用经验优先; \n 5.熟练掌握 MySQL 应用开发、数据库原理和常用性能优化和扩展技术，以及 NoSQL，Queue 的原理、使用场景以及限制; \n 6.研究过 http 协议、缓存、jvm 调优、序列化、nio、RPC 调用框架等，有相应实践经验者优先; \n 7.参与过大型复杂分布式互联网系统的设计开发者优先; 有电商系统开发经验者优先。"
    }, {
      postId: "1002",
      comtitle: '望谟民族中学',
      comtime: '2018-11-18',
      color: '#32CD32',
      comcontent: "1.计算机相关专业，工作经验2-5年，年龄22-35周岁，有电商行业经验优先; \n 2.良好沟通、表达能力，良好的学习能力; \n 3.熟练掌握 Java 及面向对象设计开发，对部分 Java 技术有深入研究，研究过优秀开源软件的源码并有心得者优先; \n 4.熟悉 SOA 架构理念、实现技术；熟悉常见设计模式，熟练掌握 Spring、SpringMVC，myBatis等框架，对Dubbo、SpringCloud等有使用经验优先; \n 5.熟练掌握 MySQL 应用开发、数据库原理和常用性能优化和扩展技术，以及 NoSQL，Queue 的原理、使用场景以及限制; \n 6.研究过 http 协议、缓存、jvm 调优、序列化、nio、RPC 调用框架等，有相应实践经验者优先; \n 7.参与过大型复杂分布式互联网系统的设计开发者优先; 有电商系统开发经验者优先。"
    }, {
      postId: "1003",
      comtitle: '凯里学院微校园团队',
      comtime: '2018-11-22',
      color: '#32CD32',
    }, {
      postId: "1004",
      comtitle: '凯里学院微校园团队',
      comtime: '2018-11-12',
      color: '#32CD32',
    }, {
      postId: "1005",
      comtitle: '凯里学院微校园团队',
      comtime: '2018-11-12',
      color: '#32CD32',
    }, {
      postId: "1006",
      comtitle: '凯里学院微校园团队',
      comtime: '2018-11-12',
      color: '#32CD32',
    }, {
      postId: "1006",
      comtitle: '望谟民族中学',
      comtime: '2018-11-18',
      color: '#32CD32',
      comcontent: "1.计算机相关专业，工作经验2-5年，年龄22-35周岁，有电商行业经验优先; \n 2.良好沟通、表达能力，良好的学习能力; \n 3.熟练掌握 Java 及面向对象设计开发，对部分 Java 技术有深入研究，研究过优秀开源软件的源码并有心得者优先; \n 4.熟悉 SOA 架构理念、实现技术；熟悉常见设计模式，熟练掌握 Spring、SpringMVC，myBatis等框架，对Dubbo、SpringCloud等有使用经验优先; \n 5.熟练掌握 MySQL 应用开发、数据库原理和常用性能优化和扩展技术，以及 NoSQL，Queue 的原理、使用场景以及限制; \n 6.研究过 http 协议、缓存、jvm 调优、序列化、nio、RPC 调用框架等，有相应实践经验者优先; \n 7.参与过大型复杂分布式互联网系统的设计开发者优先; 有电商系统开发经验者优先。"
    }, {
      postId: "1007",
      comtitle: '望谟民族中学',
      comtime: '2018-11-18',
      color: '#32CD32',
      comcontent: "1.计算机相关专业，工作经验2-5年，年龄22-35周岁，有电商行业经验优先; \n 2.良好沟通、表达能力，良好的学习能力; \n 3.熟练掌握 Java 及面向对象设计开发，对部分 Java 技术有深入研究，研究过优秀开源软件的源码并有心得者优先; \n 4.熟悉 SOA 架构理念、实现技术；熟悉常见设计模式，熟练掌握 Spring、SpringMVC，myBatis等框架，对Dubbo、SpringCloud等有使用经验优先; \n 5.熟练掌握 MySQL 应用开发、数据库原理和常用性能优化和扩展技术，以及 NoSQL，Queue 的原理、使用场景以及限制; \n 6.研究过 http 协议、缓存、jvm 调优、序列化、nio、RPC 调用框架等，有相应实践经验者优先; \n 7.参与过大型复杂分布式互联网系统的设计开发者优先; 有电商系统开发经验者优先。"
    }, ]
  },
  onLoad: function() {
    listDB.put(listDB.postListId.key_competition, this.data.def_compList);
    this.setData({
      postList: listDB.get(listDB.postListId.key_competition)
    });
  },
  onTapToDetail(event) {
    var postId = event.currentTarget.dataset.postId;
    console.log(postId);
    wx.navigateTo({
      url: "details/details?id=" + postId,
    })
  }
})