//初始化数据
//TODO： 图标最好能画出来或者从服务器下载，尽量不要存在本地
function tabbarinitStu() {
  return [{
      "current": 0,
      "pagePath": "/pages/core/student/index/index",
      "iconPath": "/images/icon/tab-item.png",
      "selectedIconPath": "/images/icon/tab-item-selected.png",
      "text": "首页"
    },
    {
      "current": 0,
      "pagePath": "/pages/backlog/backlog",
      "iconPath": "/images/icon/tab-item.png",
      "selectedIconPath": "/images/icon/tab-item-selected.png",
      "text": "待办"

    },
    {
      "current": 0,
      "pagePath": "/pages/lecture/lecture",
      "iconPath": "/images/icon/tab-item.png",
      "selectedIconPath": "/images/icon/tab-item-selected.png",
      "text": "资讯"
    },
    {
      "current": 0,
      "pagePath": "/pages/other/other",
      "iconPath": "/images/icon/tab-item.png",
      "selectedIconPath": "/images/icon/tab-item-selected.png",
      "text": "其他"
    }
  ]

}

function tabbarinitTea() {
  return [{
      "current": 0,
      "pagePath": "/pages/core/student/index/index",
      "iconPath": "/images/icon/tab-item.png",
      "selectedIconPath": "/images/icon/tab-item-selected.png",
      "text": "首页"
    },
    {
      "current": 0,
      "pagePath": "/pages/backlog/backlog",
      "iconPath": "/images/icon/tab-item.png",
      "selectedIconPath": "/images/icon/tab-item-selected.png",
      "text": "待办"

    },
    {
      "current": 0,
      "pagePath": "/pages/lecture/lecture",
      "iconPath": "/images/icon/tab-item.png",
      "selectedIconPath": "/images/icon/tab-item-selected.png",
      "text": "资讯"
    },
    {
      "current": 0,
      "pagePath": "/pages/other/other",
      "iconPath": "/images/icon/tab-item.png",
      "selectedIconPath": "/images/icon/tab-item-selected.png",
      "text": "其他"
    }
  ]

}

function tabbarinitDir() {
  return [{
      "current": 0,
      "pagePath": "/pages/core/student/index/index",
      "iconPath": "/images/icon/tab-item.png",
      "selectedIconPath": "/images/icon/tab-item-selected.png",
      "text": "首页"
    },
    {
      "current": 0,
      "pagePath": "/pages/backlog/backlog",
      "iconPath": "/images/icon/tab-item.png",
      "selectedIconPath": "/images/icon/tab-item-selected.png",
      "text": "待办"

    },
    {
      "current": 0,
      "pagePath": "/pages/lecture/lecture",
      "iconPath": "/images/icon/tab-item.png",
      "selectedIconPath": "/images/icon/tab-item-selected.png",
      "text": "资讯"
    },
    {
      "current": 0,
      "pagePath": "/pages/other/other",
      "iconPath": "/images/icon/tab-item.png",
      "selectedIconPath": "/images/icon/tab-item-selected.png",
      "text": "其他"
    }
  ]

}

function tabbarinitSw() {
  return [{
      "current": 0,
      "pagePath": "/pages/core/student/index/index",
      "iconPath": "/images/icon/tab-item.png",
      "selectedIconPath": "/images/icon/tab-item-selected.png",
      "text": "首页"
    },
    {
      "current": 0,
      "pagePath": "/pages/backlog/backlog",
      "iconPath": "/images/icon/tab-item.png",
      "selectedIconPath": "/images/icon/tab-item-selected.png",
      "text": "待办"

    },
    {
      "current": 0,
      "pagePath": "/pages/lecture/lecture",
      "iconPath": "/images/icon/tab-item.png",
      "selectedIconPath": "/images/icon/tab-item-selected.png",
      "text": "资讯"
    },
    {
      "current": 0,
      "pagePath": "/pages/other/other",
      "iconPath": "/images/icon/tab-item.png",
      "selectedIconPath": "/images/icon/tab-item-selected.png",
      "text": "其他"
    }
  ]

}
/*
  0 学生界面
  1 教师界面
  2 主管界面
  3 校工界面
 */
function tabbarinit(pageIndex) {
  if (pageIndex == 0) {
    return tabbarinitStu();
  } else if (pageIndex == 1) {
    return tabbarinitTea();
  } else if (pageIndex == 2) {
    return tabbarinitDir();
  } else if (pageIndex == 3) {
    return tabbarinitSw();
  } else {
    return tabbarinitStu();
  }

}

//tabbar 主入口
function tabbarmain(bindName = "tabdata", id, target, pageIndex) {
  var that = target;
  var bindData = {};
  var otabbar = tabbarinit();
  otabbar[id]['iconPath'] = otabbar[id]['selectedIconPath'] //换当前的icon
  otabbar[id]['current'] = 1;
  bindData[bindName] = otabbar
  that.setData({
    bindData
  });
}

module.exports = {
  tabbar: tabbarmain,
}