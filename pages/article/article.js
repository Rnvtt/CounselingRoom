// pages/article.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {

  navbar: ['全部', '自律', '励志',"治愈"],
      currentTab: 0,
    counterId: '',
    openid: '',
    count: null,
    queryResult: '',

  },

  //响应点击导航栏
  navbarTap: function (e) {
    var that = this;
    that.setData({
      currentTab: e.currentTarget.dataset.idx,
      TypeItem : that.data.navbar[that.data.currentTab]
    })
},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var allArticle = {
      "datas": [
        {
          "id": 1,
          "cover": "http://326171.s81i.faiusr.com/2/101/AFEIm-QTEAIYACCz5M3cBSiiwOeRBTDuBTizBEBl.jpg",
          "title": "如何选择合适的咨询师？",
          "date": "2018-09-08 14:00"
        },
        {
          "id": 2,
          "cover": "http://326171.s81i.faiusr.com/2/101/AFEIm-QTEAIYACC35M3cBSi60L_vAzDuBTizBEBl.jpg",
          "title": "心理咨询需要的基本条件",
          "date": "2018-09-08 14:00"
        },
        {
          "id": 3,
          "cover": "http://170619.s81i.faiusr.com/2/107/AFEI_7QKEAIYACCL4o-ZBSjd3_ibATCgATh4QGs.jpg",
          "title": "哪些人需要接受心理咨询？",
          "date": "2018-09-08 14:00"
        },
        {
          "id": 4,
          "cover": "http://427740.s81i.faiusr.com/2/101/AFEI3I0aEAIYACCd5b7jBSjgvNzZBTDuBTjoAkBl.jpg",
          "title": "本团体的宗旨",
          "date": "2018-09-08 14:00"
        }
      ]
    };
    that.setData({
      allArticle: allArticle.datas,
      firstArticleList: allArticle.datas.slice(0, 1),
      secondArticleList: allArticle.datas.slice(1, 2),
      thirdArticleList: allArticle.datas.slice(2, 3),
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