// pages/employment/employment-detail/employment-detail.js
import {
  DBPost
} from '../cache/DBPost.js';

Page({

  data: {

  },

  onLoad: function(options) {
    var postId = options.id;
    this.dbPost = new DBPost(postId);
    this.postData = this.dbPost.getPostItemById().data;
    this.setData({
      post: this.postData
    })
  },
})