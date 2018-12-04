var listDB = require('../../../cache/listDB.js');

Page({
  /**
   * 页面的初始数据
   */
  data: {
    associationData: [{
      postId: 1,
      url: "/images/settings.jpg",
      name: '大数据研习社',
      declaration: '只做对的，用心体验大数据',
      honor: '互联网+大赛参与者，社团大赛的荣誉获奖者，参加过全国比赛',
    }, {
      postId: 2,
      url: "/images/settings.jpg",
      name: '书法协会',
      declaration: '不做少数人，生活不在远处就在当',
      honor: '用心去书写文字，体验生活百态，字将展示美好',
    }, {
      id: 3,
      url: "/images/settings.jpg",
      name: '计算机协会',
      declaration: '用电脑诠释未来',
      honor: '校园计算机大赛获得者，学校青联合作组织',
    }],
  },
  onLoad: function() {
    listDB.put(listDB.postListId.key_association, this.data.associationData);
    this.setData({
      postList: listDB.get(listDB.postListId.key_association)
    });
  },
})