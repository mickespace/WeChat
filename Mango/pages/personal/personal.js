Page({
  loginOut: function () {
    wx.removeStorage({
      key: 'userInfo',
      success: function (res) {
        wx.redirectTo({
          url: '/pages/login/login',
        })
      },
    })
  },
  userApi:function(){
    wx.navigateTo({
      url: '/pages/API/index',
    })
  },
  onLoad: function () {
    let user = wx.getStorage({
      key: 'userInfo',
      success: function (res) {
        //提示成功
        wx.showToast({
          title: '缓存数据：\n' + res.data[0].UserName + '\n' + res.data[1].Password,
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

