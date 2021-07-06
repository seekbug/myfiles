Page({
    data:{
        uu:true
    },
    createCanvas() {
        var that = this
        var ctx = wx.createCanvasContext('customCanvas')
        // ctx.setFillStyle('#5F6FEE')//文字颜色：默认黑色
        // ctx.setFontSize(20)//设置字体大小，默认10
        // ctx.fillText("LXT", 20, 20)//绘制文本
        // //调用draw()开始绘制
        // ctx.draw()
        //绘制本地图片
        // ctx.drawImage("../image/1.png",0,0,100,150)
        // ctx.draw()
        //绘制网络图片
        // wx.getSystemInfo({
        //   success: (result) => {
        //       console.log('信息',result)
        //   },
        // })
        wx.canvasToTempFilePath({
            canvasId: 'customCanvas',
            success(res) {
              wx.authorize({
                scope: 'scope.writePhotosAlbum',
                success() {
                  wx.saveImageToPhotosAlbum({
                    filePath: res.tempFilePath,
                    success() {
                      wx.showToast({
                        title: '图片保存成功'
                      })
                    }
                  })
                }
              })
            }
          }, this)
        wx.getImageInfo({
            src: 'http://oss.daxinbuye.com/company/kefu_weixin_qr.jpg',
            success(res){
                console.log(res)
              ctx.drawImage(res.path,0,0,100,100)
              ctx.draw()
              that.setData({
                  uu:false
              })
            }
          })
    },
 
  })