// components/Menu/menu.js
var systemInfo = wx.getSystemInfoSync();
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    isShow: false,//是否已经弹出
    animMain: {},//旋转动画
    animAdd: {},//item位移,透明度
    animDelLots: {},//item位移,透明度
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //点击弹出或者收起
    showOrHide: function () {
      console.log("tap showOrHide");
      if (this.data.isShow) {
        //缩回动画
        this.takeback();
        this.setData({
          isShow: false
        })
      } else {
        //弹出动画
        this.popp();
        this.setData({
          isShow: true
        })
      }
    },
    doScan: function () {
      // console.log("do scan");
      // this.triggerEvent("addEvent")
      // this.showOrHide()
      var that = this;
      var show;
      wx.scanCode({
        onlyFromCamera: true,
        success: (res) => {
          var result = JSON.stringify(res);
          wx.showModal({
            title: "扫码结果",
            content: result,
            duration: 2000
          });
          wx.showToast({
            title: '成功',
            icon: 'success',
            duration: 1500
          })
        },
        fail: (res) => {
          wx.showToast({
            title: '失败',
            icon: 'success',
            duration: 2000
          })
        }
      })
    },
    deleteLots: function () {
      console.log("tap deleteLots");
      this.triggerEvent("deleteLotsEvent")
      this.showOrHide()
    },

    //弹出动画
    popp: function () {
      //main按钮顺时针旋转
      var animationMain = wx.createAnimation({
        duration: 500, 
        timingFunction: 'ease-out'
      })
      var animationDelLots = wx.createAnimation({
        duration: 500,
        timingFunction: 'ease-out'
      })
      var animationAdd = wx.createAnimation({
        duration: 500,
        timingFunction: 'ease-out'
      })
      animationMain.rotateZ(180).step();
      animationDelLots.translate(0, 120 / 750 * systemInfo.windowWidth).rotateZ(180).opacity(1).step();
      animationAdd.translate(0, 240 / 750 * systemInfo.windowWidth).rotateZ(180).opacity(1).step();
      this.setData({
        animMain: animationMain.export(),
        animDelLots: animationDelLots.export(),
        animAdd: animationAdd.export(),
      })
    },
    //收回动画
    takeback: function () {
      //main按钮逆时针旋转
      var animationMain = wx.createAnimation({
        duration: 500,
        timingFunction: 'ease-out'
      })
      var animationDelLots = wx.createAnimation({
        duration: 500,
        timingFunction: 'ease-out'
      })
      var animationAdd = wx.createAnimation({
        duration: 500,
        timingFunction: 'ease-out'
      })
      animationMain.rotateZ(0).step();
      animationDelLots.translate(0, 0).rotateZ(0).opacity(0).step();
      animationAdd.translate(0, 0).rotateZ(0).opacity(0).step();
      this.setData({
        animMain: animationMain.export(),
        animDelLots: animationDelLots.export(),
        animAdd: animationAdd.export(),
      })
    }
  },
  //解决滚动穿透问题
  myCatchTouch: function () {
    return
  }
})
