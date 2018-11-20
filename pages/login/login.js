var app = getApp()
Page({
  data: {
    motto: "",
    userName: '',
    userPassword: '',
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
  formBindsubmit: function (e) {
    if (e.detail.value.userName.length == 0 || e.detail.value.userPassword.length == 0) {
      this.setData({
        tip: '提示：用户名和密码不能为空！',
      })
    } else {
      this.setData({
        tip: '',
        userName: e.detail.value.userName,
        userPassword: e.detail.value.userPassword,

        //loginStyle: e.detail.value.gender,
      })

      //wx.setStorageSync('LibraryUserInfo', this.data.userName + '&' + this.data.userPassword + '&' + this.data.loginStyle)
      console.log("step0");
      this.logIn(this);
    }
  },
  formReset: function () {
    this.setData({
      tip: '',
      userName: '',
      userPassword: '',
    })
    //wx.clearStorageSync()

  },

  logIn: function (that) {
    var that = that
    console.log("step1");
    wx.request({
      //连到服务器 获取json格式的文档
      url: 'http://localhost:8080/jfianl_demo02/hello' + '/getJsonData',//TODO
      header: {
        'content-type': 'application/json' // 默认值
      },
      data: {
        username: that.data.userName,
        password: that.data.userPassword,
        // loginstyle: that.data.loginStyle,
      },
      // method: 'GET',
      success: function (res) {
        console.log("step2");
        console.log(res.data);
        if (res.data.returnString == 'success') {
          console.log("step3");
          var userName = that.data.userName;
          var userPassword = that.data.userPassword;

          // var loginStyle = that.data.loginStyle;
          console.log("登录成功！！！" + userName + " " + userPassword);
          wx.navigateTo({
            url: "../webdata/webdata" /*+ '?userName=' + userName + '&userPassword=' + userPassword*/
          })
          // console.log(res.data);  
          that.setData({
            // tip:'登录成功，立即跳转',
            tip: '',
          })
        }
        else {
          console.log("step4");
          that.setData({
            tip: '登录失败，账号或密码错误，或更改登录方式',

          })
        }

      },
      fail: function (res) {
        // console.log(res.data);  
        // console.log('is failed') 
        that.setData({
          tip: '登录失败，账号或密码错误，或更改登录方式',
        })
      }
    })
  },
})
var that;
//获取配置的的 全局常量
// var Constant = require('../../utils/constant.js');