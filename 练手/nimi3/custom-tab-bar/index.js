// custom-tab-bar/tabbar.js
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
    selected: 0,
    color: "#f60",
    selectedColor: "#3cc51f",
    list: [
      {
        "pagePath": "/pages/index/index",
        "text": "首页",
        "iconPath": "/icons/shouye.png",
        "selectedIconPath": "/icons/i-shouye.png"
    },
    {
        "pagePath": "/pages/serve/serve",
        "text": "保险服务",
        "iconPath": "/icons/fuwu.png",
        "selectedIconPath": "/icons/i-fuwu.png"
    },
    {
        "pagePath": "/pages/index/index",
        "text": "联系电话",
        "iconPath": "/icons/dianhua.png",
        "selectedIconPath": "/icons/i-dianhua.png"
    },
    {
        "pagePath": "/pages/my/my",
        "text": "关于我们",
        "iconPath": "/icons/my.png",
        "selectedIconPath": "/icons/i-my.png"
    }
    ]
  },
 
  /**
   * 组件的方法列表
   */
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({ url })
      this.setData({
        selected: data.index
      })
    }
  }
})

