// components/information/information.js
var listDB = require('../../cache/listDB.js');

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
    def_lectureList: [{
      postId: 111,
      title: "人工智能",
      time: "2018-05-30",
      image: "../images/core/login/login.jpg",
      desc: "冰棍与雪糕绝对不是同一个东西。3到5毛钱的雪糕犹如现在的哈根达斯，而5分1毛的 冰棍儿就像现在的老冰棒。时过境迁，...",
      detail: "小时候，家的后面有一条铁路。听说从南方北上的火车都必须经过这条铁路。火车大多在晚上经过，可呜呜的汽笛声，往往却被淹没在傍晚小院儿里散步的人群声中。只有在夜深人静的时候，火车的声音才能清晰的从远处飘过来。虽然日日听见火车的汽笛声，可说也奇怪，我竟从来不知道铁路在哪里。在每个夏日午后，我都会有一种去找寻找铁路的冲动，去看看这条铁路究竟是从哪里来，又将通向哪里去",
    }, {
      postId: 2,
      title: "大数据时代",
      time: "2018-01-02",
      Img: "/images/core/login/loginLog.jpg",
      desc: "大数据时代下的。。。。。。",
      detail: "少时诵诗书收拾收拾",
    }, {
      postId: 3,
      title: "AI拍照",
      time: "2016-02-03",
      desc: "这里是简介",
      detail: "这里是详细的内容哦",
    }, {
      postId: 987,
      title: "大数据时代",
      time: "2018-01-02",
      Img: "/images/core/login/loginLog.jpg",
      desc: "大数据时代下的。。。。。。",
      detail: "少时诵诗书收拾收拾",
    }, {
      postId: 888,
      title: "大数据时代",
      time: "2018-01-02",
      Img: "/images/core/login/loginLog.jpg",
      desc: "大数据时代下的。。。。。。",
      detail: "少时诵诗书收拾收拾",
    }, {
      postId: 222,
      title: "大数据时代",
      time: "2018-01-02",
      Img: "/images/core/login/loginLog.jpg",
      desc: "大数据时代下的。。。。。。",
      detail: "少时诵诗书收拾收拾",
    }, {
      postId: 666,
      title: "大数据时代",
      time: "2018-01-02",
      Img: "/images/core/login/loginLog.jpg",
      desc: "大数据时代下的。。。。。。",
      detail: "少时诵诗书收拾收拾",
    }, {
      postId: 5434,
      title: "大数据时代",
      time: "2018-01-02",
      Img: "/images/core/login/loginLog.jpg",
      desc: "大数据时代下的。。。。。。",
      detail: "少时诵诗书收拾收拾",
    }, ]
  },

  //TODO: 1.页面传还需要优化
  lifetimes: {
    attached: function() {
      listDB.put(listDB.postListId.key_lecture, this.data.def_lectureList);
      this.setData({
        postList: listDB.get(listDB.postListId.key_lecture)
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
    onTapToDetail(event) {
      var postId = event.currentTarget.dataset.postId;
      wx.navigateTo({
        url: "../../lecture/lecture-detail/lecture-detail?id=" + postId,
      })
    }
  }
})