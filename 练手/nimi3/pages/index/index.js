//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    swiperCurrent:0,
    loginForm: {
      loginId: '',
      password: '',
      loginIdRules:{
        type: 'email',
        required: true,
        message: '邮箱地址不合法',
        trigger: 'change'
      },
      passwordRules: [
        { required: true, message: '请输入登录密码', trigger: 'blur' },
        { min: 8, max: 20, message: '密码长度在8-20个字符之间', trigger: 'blur' },
        { pattern: '^[A-Za-z0-9]+$', message: '密码必须由数字字母组成',trigger: 'blur'}
      ],
    }
  },
  // 页面上拉
  onReachBottom: function() {
  console.log(11)
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  changesCurrent(e){
    this.setData({
      swiperCurrent:e.detail.current
    })
    // console.log('ee',e.detail.current)
  //  console.log('eeeee',this.data.swiperCurrent)
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
