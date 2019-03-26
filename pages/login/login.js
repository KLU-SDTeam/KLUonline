/*
 * 1. TODO： 目前开发初期我们采用模拟对比账号的方法让界面调转到对应用户组的界面，
 * 2. TODO： 后期拟采用自动校验的方式，平滑切换到对应的账号行，当然这点需要与预存储微信账号
 * 3. 测试账号： stu 000；tea 111；lead 222
 */
var utils = require('../../utils/utils.js')
var constant = require('../../cache/constant.js')

Page({
  data: {},

  // 获取输入账号
  accountInput: function(e) {
    this.setData({
      account: e.detail.value
    })
  },

  // 获取输入密码
  passwordInput: function(e) {
    this.setData({
      password: e.detail.value
    })
  },

  // 登录
  login: function() {
    var account = this.data.account;
    var passwd = this.data.password;
    console.log(account, passwd);

    //TODO 账号和密码的规范化
    if (account.length == 0 || passwd.length == 0) {
      wx.showModal({
        title: "信息提示",
        content: "账号密码不能为空",
        showCancel: false
      })
    } else if (utils.checkAccount(account)) {
      wx.showModal({
        title: "信息提示",
        content: "账号非法",
        showCancel: false
      })
    } else {
      wx.request({
        url: "",
        method: "GET",
        data: {
          user_no: account,
          password: passwd,
        },
        header: {
          'content-type': 'application/x-www-form-urlencoded' // 默认值
        },
        dataType: 'json',
        success: function(res) {
          console.log(res.data)
          var type = JSON.stringify(res.data.type);
          var info = JSON.stringify(res.data.info);
          if (type == 1) {
            wx.showToast({
              title: '登录成功',
              icon: 'loading',
              duration: 3000
            })
            wx.switchTab({
              url: '../student/index/index',
            })
          } else if (type == 2) {
            wx.showToast({
              title: '登录成功',
              icon: 'loading',
              duration: 3000
            })
            wx.redirectTo({
              url: '../teacher/index/index',
            })
          } else {
            wx.showModal({
              title: "信息提示",
              content: info
            })
          }
        },
        fail: function(res) {
          wx.showToast({

            title: '服务器网络错误,请稍后重试',

            icon: 'loading',

            duration: 1500

          })
        },
        complete: function(res) {

        },
      })

    }
  }
})