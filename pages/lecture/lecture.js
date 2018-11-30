// pages/uestcNews/uestcNews.js
import { DBPost } from '../../cache/DBPost.js';

Page({
  data: {},
  onLoad: function () {
    var dbPost = new DBPost();
    tplTabbar.tabbar("tabBar", 2, this, 0);
    this.setData({
      postList: dbPost.getAllPostData()
    });
  },
  onTapToDetail(event) {
    var postId = event.currentTarget.dataset.postId;
    console.log(postId);
    wx.navigateTo({
      url: "lecture-detail/lecture-detail?id="+postId,
    })
  }
})