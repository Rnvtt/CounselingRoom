//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    expers: [
      { src: 'http://353976.s81i.faiusr.com/2/113/AFEIuM0VEAIYACDsp-HdBSiQ_9SbBzDuBTj8AkBx.jpg' },
      { src: 'http://353976.s81i.faiusr.com/2/113/AFEIuM0VEAIYACDup-HdBSjMqrLTBzDuBTj8AkBx.jpg' }

    ]
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {

    var data = {
      "datas": [
        {
          "title": "心理服务",
          "detail": "\n针对 情绪压力/亲密关系/亲子教育 等不同领域"
        },
        {
          "title": "什么是心理咨询？",
          "detail": "\n心理咨询的过程，实际上类似一个专业的一个过程，也就是我们可能了解更多人的大脑，人的情绪，和人的成长内心的成长过程，一些知识和路径，那么我们花时间来跟来访者，共同探讨他的生活，然后在他的生活当中促进他的理解，然后让他获得更多对生活的确定感和幸福感，是这样的一个过程。"
        }, 
        {
          "title": "心理咨询是做什么的？",
          "detail": "\n随着社会经济的的发展和对健康概念的进一步认识，心理行为疾病已越来越引起人们的重视。在日常生活中，需要心理咨询的人很多，下面主要介绍几种常见的心理疾病。"
        }
      ]
    };

    this.setData({
      carInfoData: data.datas
    })

    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
      console.log(carInfoData);
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
