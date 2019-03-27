Page({

  /**
   * 页面的初始数据
   */
  data: {
    motto: '',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    routers: [{
      name: '上自习',
      url: '',
      icon: '../../../../../images/settings.jpg'
    },
    {
      name: '请假',
      url: '../leave/Record/Record',
      icon: '../../../../../images/settings.jpg'
    },
    {
      name: '开放实验室',
      url: '',
      icon: '../../../../../images/settings.jpg'
    },
    {
      name: '借用设备',
      url: '../timetable/timetable',
      icon: '../../../../../images/settings.jpg'
    },
    {
      name: '报修',
      url: '',
      icon: '../../../../../images/settings.jpg'
    },
    {
      name: '考场查询',
      url: '../exam/exam',
      icon: '../../../../../images/settings.jpg'
    },
    {
      name: '...',
      url: '',
      icon: '../../../../../images/settings.jpg'
    },
    {
      name: '...',
      url: '',
      icon: '../../../../../images/settings.jpg'
    },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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