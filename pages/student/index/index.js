//index.js
//获取应用实例
//const app = getApp()
//var constant = require('../../../cache/constant.js')

Page({

  data: {
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

  switchNav: function(e) {
    let that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },

  onLoad: function(options) {
    console.log("index", " onLoad:");
  },
})