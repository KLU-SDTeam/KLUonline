//index.js
//获取应用实例
const app = getApp()

Page({

  data: {
    motto: '',
    userInfo: {},
    user_id: '2017xxxxxx',
    nickName: 'xxxx',
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),

    currentTab: 0,
    items: [{
      "iconPath": "/images/tab-item.png",
      "selectedIconPath": "/images/tab-item-selected.png",
      "text": "首页"
    }, {
      "iconPath": "/images/tab-item.png",
      "selectedIconPath": "/images/tab-item-selected.png",
      "text": "待办"
    }, {
      "iconPath": "/images/tab-item.png",
      "selectedIconPath": "/images/tab-item-selected.png",
      "text": "资讯"
    }, {
      "iconPath": "/images/tab-item.png",
      "selectedIconPath": "/images/tab-item-selected.png",
      "text": "其它"
    }]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  swichNav: function(e) {
    let that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },

  onLoad: function() {
    var title = "学工号： ".concat(" ", this.data.user_id, " ", this.data.nickName);
    console.log(title);
    this.setData({
      userTitle: title,
    })
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
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