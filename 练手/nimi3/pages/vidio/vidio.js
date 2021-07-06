Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentIndex:0,
    channels:[{"imgUrl":"http://125.210.122.251:8080/IP/uploadChannelImg/542.png","title":"中央十套","playUrl":"http://cctvcnch5c.v.wscdns.com/live/cctv10_2/index.m3u8"},{"imgUrl":"http://125.210.122.251:8080/IP/uploadChannelImg/542.png","title":"中央十二套","playUrl":"http://cctvcnch5c.v.wscdns.com/live/cctv12_2/index.m3u8"},{"imgUrl":"http://125.210.122.251:8080/IP/uploadChannelImg/542.png","title":"中央十套","playUrl":"http://cctvcnch5c.v.wscdns.com/live/cctv10_2/index.m3u8"},{"imgUrl":"http://125.210.122.251:8080/IP/uploadChannelImg/542.png","title":"中央十二套","playUrl":"http://cctvcnch5c.v.wscdns.com/live/cctv12_2/index.m3u8"},{"imgUrl":"http://125.210.122.251:8080/IP/uploadChannelImg/542.png","title":"中央十套","playUrl":"http://cctvcnch5c.v.wscdns.com/live/cctv10_2/index.m3u8"}],
    showChannels:true,
    arrowImg:"img/ic_arrow_right.png"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  onChannelClick(e){
    if(e.currentTarget.dataset.position == this.data.currentIndex){
      return
    }
    this.setData({
      currentIndex:e.currentTarget.dataset.position
    })
    console.log(e)
  },
  
  onArrowClick(e){
    if(this.data.showChannels){
      this.setData({
        showChannels:false,
        arrowImg:"img/ic_arrow_left.png"
      })
    } else {
      this.setData({
        showChannels:true,
        arrowImg:"img/ic_arrow_right.png"
      })
    }
  },
  bindVideoEnterPictureInPicture() {
    console.log('进入小窗模式')
  },

  bindVideoLeavePictureInPicture() {
    console.log('退出小窗模式')
  },

  screenChange(res){
    console.log("screenChange->res:" + JSON.stringify(res))

  }
})
