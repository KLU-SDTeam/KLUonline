// pages/employment/employment-detail/employment-detail.js
var listDB = require('../../../../cache/listDB.js');

Page({

  data: {
      title:'详情'
  },

  onLoad: function(options) {
    this.setData({
      post: listDB.getListItemById(listDB.postListId.key_emp, options.id)
    })
  },
})