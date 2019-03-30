var listDB = require('../../../cache/listDB.js');

Page({
  /**
   * 页面的初始数据
   */

  data: {
    scoreList: [{
        postID: 1,
        subject: '语文',
        credit: 2.00,
        result: 99,
        point: 89,
      },
      {
        postID: 2,
        subject: '数学',
        credit: 2.00,
        result: 80,
        point: 89,
      },
      {
        postID: 3,
        subject: '英语',
        credit: 2.00,
        result: 100,
        point: 89,
      },
    ],
    semester: [{
      "id": "1",
      "text": "第一学年第一学期"
    }, {
      "id": "2",
      "text": "第一学年第二学期"
    }, {
      "id": "3",
      "text": "第一学年第三学期"
    }, {
      "id": "4",
      "text": "第二学年第一学期"
    }, {
      "id": "5",
      "text": "第二学年第二学期"
    }, {
      "id": "6",
      "text": "第二学年第三学期"
    }, {
      "id": "7",
      "text": "第三学年第一学期"
    }, {
      "id": "8",
      "text": "第三学年第二学期"
    }, {
      "id": "9",
      "text": "第三学年第三学期"
    }, ]

  },
  scorequery: function(f) {

  },
  getDate: function(e) {
    console.log(e.detail)
  },
  onLoad: function() {
    listDB.put(listDB.postListId.key_score, this.data.scoreList);
    this.setData({
      postList: listDB.get(listDB.postListId.key_score)
    });
  },
})