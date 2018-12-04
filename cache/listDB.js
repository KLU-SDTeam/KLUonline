var cacheUtil = require('/CacheUtil.js');
/**
 * 1.这里二次封装是为了之后List数据统一拓展，目前就只有两个函数get和set，
 * 后续应该还会添加新的函数和其他处理方法
 * 2.考虑到后续可能会采用不同的Cache工具，也应该采取二次封装
 * 3.这里不声明为class是因为这些函数都是工具类函数，直接调用更加清晰
 */

var postListId = {
  key_lecture: "lectureList",
  key_notice: "noticeList",
  key_collage: "collageList",
  key_emp: "empList",
  key_competition: "compList",
  key_association: "associationList"
}

function get(k) {
  return cacheUtil.get(k);
}

function put(k, v) {
  cacheUtil.put(k, v);
}

function getListItemById(k, id) {
  var postsData = this.get(k);
  for (var i = 0; i < postsData.length; i++) {
    if (postsData[i].postId == id) {
      return postsData[i];
    }
  }
}

module.exports = {
  put: put,
  get: get,
  getListItemById: getListItemById,
  postListId: postListId,
}