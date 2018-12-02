// components/index/index.js
Component({

  /* 开启全局样式设置 */
  options: {
    addGlobalClass: true,
  },

  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    routers: [{
        name: '成长',
        url: '../my-growth/my-growth',
        icon: "../../../../images/settings.jpg"
      },
      {
        name: '阅读',
        url: '',
        icon: "../../../../images/settings.jpg"
      },
      {
        name: '事务',
        url: '',
        icon: "../../../../images/settings.jpg"
      },
      {
        name: '课表',
        url: '../timetable/timetable',
        icon: "../../../../images/settings.jpg"
      },
      {
        name: '竞赛',
        url: '../competition/competition',
        icon: "../../../../images/settings.jpg"
      },
      {
        name: '实习/就业',
        url: '../empl/empl',
        icon: "../../../../images/settings.jpg"
      },
      {
        name: '社团',
        url: '',
        icon: "../../../../images/settings.jpg"
      },
      {
        name: '成绩查询',
        url: '',
        icon: "../../../../images/settings.jpg"
      },
    ],
    user_id: '2017xxxxxx',
    nickName: 'xxxx',
  },
  //TODO : 这里的信息应该是从上一个界面加载时候由服务器端跳转带来的
  /* 组件声明周期函数 */
  lifetimes: {
    attached: function() {
      var title = "学工号： ".concat(" ", this.data.user_id, " ", this.data.nickName);
      console.log(title);
      this.setData({
        userTitle: title,
      })
    },
    moved: function() {

    },
    detached: function() {

    },
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})