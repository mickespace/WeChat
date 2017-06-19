Page({
  data: {
    list: [
      {
        id: 'view',
        name: '视图容器',
        open: false,
        pages: ['view', 'scroll-view', 'swiper']
      }, {
        id: 'content',
        name: '基础内容',
        open: false,
        pages: ['text', 'icon', 'progress']
      }, {
        id: 'form',
        name: '表单组件',
        open: false,
        pages: ['button', 'checkbox', 'form', 'input', 'label', 'picker', 'radio', 'slider', 'switch', 'textarea']
      }, {
        id: 'nav',
        name: '导航',
        open: false,
        pages: ['navigator']
      }, {
        id: 'media',
        name: '媒体组件',
        open: false,
        pages: ['image', 'audio', 'video']
      }, {
        id: 'map',
        name: '地图',
        pages: ['map']
      }, {
        id: 'canvas',
        name: '画布',
        pages: ['canvas']
      }
    ]
  },
  kindToggle: function (e) {
    var id = e.currentTarget.id, list = this.data.list;
    for (var i = 0, len = list.length; i < len; ++i) {
      if (list[i].id == id) {
        list[i].open = !list[i].open
      } else {
        list[i].open = false
      }
    }
    this.setData({
      list: list
    });
  },
  onLoad:function(){
    let user = wx.getStorage({
      key: 'userInfo',
      success: function (res) {
        wx.request({
          url: 'http://192.168.10.100:19432/api/v1/user/login',
          data: {
            appKey: '908F0991-0E14-484F-91E7-DAAF0F4B2A37',
            userName: '13642520884', 
            password: '123456'
          },
          header: {
            'content-type': 'application/json'
          },
          success: function (userres) {
            //解析获取出来的信息
            let userresDATA = userres.data;
            //提示成功
            wx.setStorage({
              key: 'userInfo',
              data: [{ UserName: '13642520884' }, { Password: '123456' }],
            })
            //usertoken
            wx.request({
              url: 'http://192.168.10.100:19432/api/v1/user/token',
              data: {
                appKey: '908F0991-0E14-484F-91E7-DAAF0F4B2A37',
                TokenKey: userresDATA.Data.TokenKey,
              },
              header: {
                'content-type': 'application/json'
              },
              success: function (kenRes) {
                wx.setStorage({
                  key: 'userToken',
                  data: kenRes.data.Data.UserToken,
                })
                wx.showToast({
                  title: 'UserToken \n' + kenRes.data.Data.UserToken,
                  icon: 'success',
                  duration: 5000
                })
              }
            })
          },
          fail: function (failres) {
            let tiperr = JSON.stringify(failres);
            wx.showToast({
              title: '项目' + failres.errMsg,
              icon: 'fail',
              duration: 5000
            })
          }
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

