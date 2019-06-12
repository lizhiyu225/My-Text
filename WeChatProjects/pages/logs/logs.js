//logs.js
Page({
  jumpUser:function(option){
    wx.switchTab({
      url: '../user/user'
    })
  },
  // 返回上一页
  backIndex: function (option) {
    wx.switchTab({
      url:'../index/index'
    })
  },
})
