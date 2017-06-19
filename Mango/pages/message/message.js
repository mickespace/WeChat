var initData = [{ Name: '大爷', Content: 'fuck' }, { Name: '大爷', Content: 'fuck' }, { Name: '大爷', Content: 'fuck' }, { Name: '大爷', Content: 'fuck' }]

Page({
  data: {
    MessageList: initData
  },
  onShow: function () {
    wx: wx.showLoading({
      title: '处理一些事情...',
      mask: true,
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
    //加载数据
    wx.getStorage({
      key: 'userToken',
      success: function (userRes) {
        wx.request({
          url: 'http://192.168.10.100:19432/api/v1/project/list',
          data: {
            ListParams: '',
            UserToken: userRes.data
          },
          header: {
            'content-type': 'application/json'
          },
          success: function (res) {
            //解析获取出来的信息
            let successData = res.data;
            //写入到数据中
            wx.setStorage({
              key: 'MessageInfo',
              data: successData.Data,
            })
            var tip = JSON.stringify(successData);
            //提示成功
            wx.showToast({
              title: '' + tip,
              icon: 'success',
              duration: 5000
            })                    
          },
          fail: function (failres) {
            let tiperr = JSON.stringify(failres);
            wx.showToast({
              title: '消息错误' + failres.errMsg,
              icon: 'fail',
              duration: 5000
            })
          }
        })


      }
    })
  },

  datarefesh: function () {
    this.setData({
      MessageList: [{ Name: '一条数据', Content: 'fuckddfdfd' }]
    });
  },
  onPullDownRefresh: function () {
    var messagedata = [];
    wx.getStorage({
      key: 'MessageInfo',
      success: function(res) {
       messagedata= res.data;
      },
    })
    this.setData({
      MessageList: messagedata
    })

    wx.stopPullDownRefresh()
  }
  ,
  onShareAppMessage: function () {
  }
}
)
