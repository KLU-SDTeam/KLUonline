//index.js
//获取应用实例
const app = getApp()
var tplTabbar = require('../../../../utils/ui-tmpl/tabbar/tabbar-tpl.js');

Page({
 
  data: {
    motto: '',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    routers: [{
        name: '成长',
        url: '../my-growth/my-growth',
        icon: '/images/icon/settings.jpg'
      },
      {
        name: '阅读',
        url: '',
        icon: '/images/icon/settings.jpg'
      },
      {
        name: '事务',
        url: '',
        icon: '/images/icon/settings.jpg'
      },
      {
        name: '课表',
        url: '../timetable/timetable',
        icon: '/images/icon/settings.jpg'
      },
      {
        name: '竞赛',
        url: '',
        icon: '/images/icon/settings.jpg'
      },
      {
        name: '实习/就业',
        url: '../empl/empl',
        icon: '/images/icon/settings.jpg'
      },
      {
        name: '社团',
        url: '',
        icon: '/images/icon/settings.jpg'
      },
      {
        name: '成绩查询',
        url: '',
        icon: '/images/icon/settings.jpg'
      },
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    tplTabbar.tabbar("tabBar", 0, this, 0);
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
})
