// pages/employment/employment-detail/employment-detail.js
var listDB = require('../../../../cache/listDB.js');

Page({

  data: {

  },

  onLoad: function(options) {
    this.setData({
      post: listDB.getListItemById(listDB.postListId.key_competition, options.id)
    })
  },
})