Page({
  data: {
    userName: '13642520884',
    password: '123456'
  },
  submitLogin: function () {
    var name = this.data.userName;
    var pwd = this.data.password
    wx:wx.showLoading({
      title: '处理一些事情....',
      mask: true,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
    wx.request({
      url: 'http://192.168.10.100:19432/api/v1/user/login',
      data: {
        appKey: '908F0991-0E14-484F-91E7-DAAF0F4B2A37',
        userName: name,
        password: pwd
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        //解析获取出来的信息
        let successData = res.data;
        //写入到数据中
        wx.setStorage({
          key: 'userInfo',
          data: [{UserName:name},{Password:pwd}],
        })
        //提示成功
        wx.showToast({
          title: '成功 :' + successData.IsOk,
          icon: 'success',
          duration: 5000
        })
        wx.reLaunch({
          url: '/pages/index/index',
        })
      },
      fail: function (failres) {
        let tiperr = JSON.stringify(failres);
        wx.showToast({
          title: 'denglu' + failres.errMsg,
          icon: 'fail',
          duration: 5000
        })
      }
    })
  },

})