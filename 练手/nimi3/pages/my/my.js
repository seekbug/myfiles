// pages/my/my.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        //地图
        Height: 0,
        scale: 13,
        latitude: "",
        longitude: "",
        markers: [],
        controls: [{
          id: 1,
          iconPath: '/assests/imgs/jian.png',
          position: {
            left: 320,
            top: 100 - 50,
            width: 20,
            height: 20
          },
          clickable: true
        },
        {
          id: 2,
          iconPath: '/assests/imgs/jia.png',
          position: {
            left: 340,
            top: 100 - 50,
            width: 20,
            height: 20
          },
          clickable: true
        }
        ],
        circles: [],
        //在线查询
        loginForm: {
            loginId: '',
            password: '',
            loginIdRules: {
                type: 'email',
                required: true,
                message: '邮箱地址不合法',
                trigger: 'change'
            },
            passwordRules: [
                { required: true, message: '请输入登录密码', trigger: 'blur' },
                { min: 8, max: 20, message: '密码长度在8-20个字符之间', trigger: 'blur' },
                { pattern: '^[A-Za-z0-9]+$', message: '密码必须由数字字母组成', trigger: 'blur' }
            ],
        }
    },


    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        //地图
        var _this = this;

        wx.getSystemInfo({
          success: function (res) {
            //设置map高度，根据当前设备宽高满屏显示
            _this.setData({
              view: {
                Height: res.windowHeight
              }
    
            })
    
          }
        })
    
        wx.getLocation({
          type: 'wgs84', // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
          success: function (res) {
    
            _this.setData({
              latitude: res.latitude,
              longitude: res.longitude,
              markers: [{
                id: "1",
                latitude: res.latitude,
                longitude: res.longitude,
                width: 50,
                height: 50,
                iconPath: "/assests/imgs/my.png",
                title: "哪里"
    
              }],
              circles: [{
                latitude: res.latitude,
                longitude: res.longitude,
                color: '#FF0000DD',
                fillColor: '#7cb5ec88',
                radius: 3000,
                strokeWidth: 1
              }]
    
            })
          }
    
        })    
    },

    //地图
    regionchange(e) {
        console.log("regionchange===" + e.type)
      },
    
      //点击merkers
      markertap(e) {
        console.log(e.markerId)
    
        wx.showActionSheet({
          itemList: ["A"],
          success: function (res) {
            console.log(res.tapIndex)
          },
          fail: function (res) {
            console.log(res.errMsg)
          }
        })
      },
    
      //点击缩放按钮动态请求数据
      controltap(e) {
        var that = this;
        console.log("scale===" + this.data.scale)
        if (e.controlId === 1) {
          // if (this.data.scale === 13) {
          that.setData({
            scale: --this.data.scale
          })
          // }
        } else {
          //  if (this.data.scale !== 13) {
          that.setData({
            scale: ++this.data.scale
          })
          // }
        }
    
      },
})