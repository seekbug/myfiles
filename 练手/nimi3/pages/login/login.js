Page({
  // 地图
  nav: function () {  
    wx.openLocation({
      latitude:23.08383,	//维度
      longitude: 113.288691, //经度
      name: "广州国际轻纺城",	//目的地定位名称
      scale: 15,	//缩放比例
      address: "广州省广州市海珠区金纺路91号广州国际轻纺城"	//导航详细地址
    })
  },
  //授权登录
  bindGetUserInfo(e){
    wx.getUserInfo({
      withCredentials: true,
      success: function (res) {
        wx.showModal({
          title: '警告',
          content: '尚未进行授权，请点击确定跳转到授权页面进行授权。',
          success: function (res) {
          if (res.confirm) {
          console.log('用户点击确定')
          wx.navigateTo({
          url: '../tologin/tologin',
          })
        }
      }
    })
      //此处为获取微信信息后的业务方法
    console.log(e)
    
      },
      fail: function () {
      //获取用户信息失败后。请跳转授权页面
      wx.showModal({
      title: '警告',
      content: '尚未进行授权，请点击确定跳转到授权页面进行授权。',
      success: function (res) {
      if (res.confirm) {
      console.log('用户点击确定')
      wx.navigateTo({
      url: '../tologin/tologin',
      })
      }
      }
      })
      }
      })
  }
 

})
