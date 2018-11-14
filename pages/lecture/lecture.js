// pages/uestcNews/uestcNews.js
import { DBPost } from '../../cache/DBPost.js';

Page({
  data: {},
  onLoad: function () {
    var dbPost = new DBPost();
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