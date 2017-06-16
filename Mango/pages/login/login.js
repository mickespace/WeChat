Page({
  data: {
    userName: '13642520884',
    password: '123456'
  },
  submitLogin: function () {
    var name = this.data.userName;
    var pwd = this.data.password
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
          data: successData.Data,
        })
        //提示成功
        wx.showToast({
          title: '成功 :' + successData.IsOk,
          icon: 'success',
          duration: 5000
        })
        wx.set
        wx.reLaunch({
          url: '/pages/index/index',
        })
      },
      fail: function (failres) {
        let tiperr = JSON.stringify(failres);
        wx.showToast({
          title: '出现错误了，大傻逼' + failres.errMsg,
          icon: 'fail',
          duration: 5000
        })
      }
    })
  },

})