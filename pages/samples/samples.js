// pages/samples/samples.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var sampleList = {
      "datas": [
        {
          "id": 1,
          "cover": "http://458515.s81i.faiusr.com/2/101/AFEIk-4bEAIYACDOwMnfBSjawt_pBzCyBTj8AkBl.jpg",
          "title": "活动·发现",
          "description":"\n一起玩更幸福",
          "date": "2018-09-08 14:00"
        },
        {
          "id": 2,
          "cover": "http://458515.s81i.faiusr.com/2/101/AFEIk-4bEAIYACDMwMnfBSjs8MW4BzCyBTj8AkBl.jpg",
          "title": "咨询·预约",
          "description": "\n没有人是一座孤岛，每个人都需要心理咨询",
          "date": "2018-09-08 14:00"
        },
        {
          "id": 3,
          "cover": "http://458515.s81i.faiusr.com/2/101/AFEIk-4bEAIYACDKwMnfBSjf4rfhAzCyBTj8AkBl.jpg",
          "title": "课程·预约",
          "description": "\n人人都能学的心理学",
          "date": "2018-09-08 14:00"
        }
      ]
    };
    that.setData({
      sampleList: sampleList.datas
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