// pages/uestcNews/uestcNews.js
var listDB = require('../../../../../cache/listDB.js');


Page({
   data: {
     def_RecordList: [{
       postId: 1,
       State: "?",
       Class: "16计本2班",
       Fullname: "杨某某",
       Cause: "生病去医院",
       StudentID: "2016000000"
     },

     {
       postId: 2,
       State: "×",
       Class: "16计本2班",
       Fullname: "杨某某",
       Cause: "生病在宿舍休息",
       StudentID: "2016000000"
     },


     {
       postId: 3,
       State: "√",
       Class: "16计本2班",
       Fullname: "杨某某",
       Cause: "回家处理事情",
       StudentID: "2016000000"
     },
     {
       postId: 4,
       State: "!",
       Class: "16计本2班",
       Fullname: "杨某某",
       Cause: "听讲座",
       StudentID: "2016000000"
     },
     {
       postId: 5,
       State: "!",
       Class: "16计本2班",
       Fullname: "杨某某",
       Cause: "听讲座",
       StudentID: "2016000000"
     },
     {
       postId: 6,
       State: "!",
       Class: "16计本2班",
       Fullname: "杨某某",
       Cause: "听讲座",
       StudentID: "2016000000"
     },
     {
       postId: 7,
       State: "!",
       Class: "16计本2班",
       Fullname: "杨某某",
       Cause: "就是想请",
       StudentID: "2016000000"
     },
     {
       postId: 8,
       State: "!",
       Class: "16计本2班",
       Fullname: "杨某某",
       Cause: "就是想请",
       StudentID: "2016000000"
     },
     ]
  },
   

  Applylist: function () {
    wx.navigateTo({
      url: "../Apply/Apply"
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    listDB.put(listDB.postListId.key_Record, this.data.def_RecordList);
    this.setData({
      postList: listDB.get(listDB.postListId.key_Record)
    });
  },
  onTapToDetail(event) {
    var postId = event.currentTarget.dataset.postId;
    wx.navigateTo({
      url: "details/details?id=" + postId,
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})