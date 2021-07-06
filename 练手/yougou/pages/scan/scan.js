
//获取应用实例
const app = getApp()
 
Page({
  data: {
    imagesList:[],
  },
 
  onLoad: function() {
  },


  //单选框（遍历imagesList,如果有一个main_image为true,所有都置为false）
  handleRadio(e){
    let index = e.currentTarget.dataset.index
    this.data.imagesList.map((v,i)=>{
      if(index==i){
        v.imagesObj.main_image = true
      }else{
        v.imagesObj.main_image = false
      }
    })
    this.setData({  //map()不改变原数组,所以得再赋一次值
      imagesList:this.data.imagesList
    })
  },
  //图片预览
  previewImages(e){
    let current = e.currentTarget.dataset.current
    let urls = []
    this.data.imagesList.map(v=>{
      urls.push(v.imagesObj.filePath)
    })
    wx.previewImage({
      current, // 当前显示图片的http链接
      urls// 需要预览的图片http链接列表
    })
  },
  //删除图片
  deleteImages(e){
    let index = e.currentTarget.dataset.index
    this.data.imagesList.splice(index,1)
    this.setData({ 
      imagesList:this.data.imagesList
    })
  }, 
  //上传图片
  uploaderImages(){
    var that = this
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'], //所选的图片的尺寸(默认：'原图','压缩图')
      sourceType: ['album', 'camera'],  //选择图片的来源(默认：'从相册选图','使用相机')
      success (res) {
        const tempFilePaths = res.tempFilePaths
        wx.uploadFile({
          url: 'http://malltest.daxinbuye.com:9000/api/rivalGoods/file/upload.do', //这是博主的后端接口，可以测试，勾选不校验合法域名...  就行
          filePath: tempFilePaths[0],
          name: 'file',
          // formData: { //可携带参数
          //   'user': 'test'
          // },
          success (res){
            /* 返回的是json格式,使用 JSON.parse(）转为我们要的对象,上传的成功后提取所需字段封装成新数组imagesList */ 
            let imagesObj = {
              filePath:tempFilePaths[0],
              id:JSON.parse(res.data).data.id,
              main_image:false,
            } 
            that.data.imagesList.push({imagesObj})
            that.setData({
              imagesList:that.data.imagesList
            })
          }
        })
      }
    })
  }
 
  
})
