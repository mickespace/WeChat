var initData = [{ Name: '大爷', Content: 'fuck' }, { Name: '大爷', Content: 'fuck' }, { Name: '大爷', Content: 'fuck' }, { Name: '大爷', Content: 'fuck' }]

Page({
  data: {
    MessageList: initData
  },
  onShow: function () {
   //加载数据
   wx.showLoading({
     title: '加载数据',
   })
   this.setData({
     MessageList: [{ Name: '大爷1', Content: 'fuck1' }, { Name: '大爷', Content: 'fuck1' }, { Name: '大爷', Content: 'fuck1' }, { Name: '大爷1', Content: 'fuck1' }]
   })
   wx.showToast({
     title: 'shabi',
   })
  },
  Refesh:function(){
    wx.showToast({
      title: 'shabi',
    })
  },
  onShareAppMessage:function(){

  }
}
)
