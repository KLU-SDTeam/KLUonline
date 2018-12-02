//获取应用实例
import {
  DBPost
} from '/cache/DBPost.js';

Page({
  data: {},
  onLoad: function() {
    var dbPost = new DBPost();
    this.setData({
      postList: dbPost.getAllPostData()
    });
  },
  onTapToDetail(event) {
    var postId = event.currentTarget.dataset.postId;
    console.log(postId);
    wx.navigateTo({
      url: "details/details?id=" + postId,
    })
  }
})