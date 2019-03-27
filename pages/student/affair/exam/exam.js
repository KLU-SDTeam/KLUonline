var listDB = require('../../../../cache/listDB.js');
Page({
  /**
   * 页面的初始数据
   */
  data: {
    examList: [{
        postId: 1,
        month: 9,
        day: 5,
        time: '15：62',
        classroom: '教31505',
        subject: '计算机网络',
      },
      {
        postId: 2,
        month: 9,
        day: 5,
        time: '15：62',
        classroom: '教31252',
        subject: '计算机科学与技术',
      },
      {
        postId: 3,
        month: 9,
        day: 6,
        time: '15：62',
        classroom: '教31665',
        subject: '计算机导论',
      }
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
    }],
  },

  exam_but: function() {

  },
  onLoad: function() {
    listDB.put(listDB.postListId.key_exam, this.data.examList);
    this.setData({
      postList: listDB.get(listDB.postListId.key_exam)
    });
  },
  getDate: function(e) {
    console.log(e.detail)
  }
})