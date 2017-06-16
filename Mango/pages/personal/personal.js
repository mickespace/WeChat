Page({
  loginOut:function(){
wx.removeStorage({
  key: 'userInfo',
  success: function(res) {
    wx.redirectTo({
      url: '/pages/login/login',
    }) 
  },
})
  },
  onShow: function () {
    let user = wx.getStorage({
      key: 'userInfo',
      success: function (res) {
        //提示成功
        wx.showToast({
          title: '缓存数据：\n' + res.data.Email + '\n' + res.data.RealName,
          icon: 'success',
          duration: 4000
        })
      },
      fail: function () {
        wx.redirectTo({
          url: '/pages/login/login',
        })
      }
    })
  }
})

