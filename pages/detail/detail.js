var SubjectsUtil = require('../utils/SubjectsUtil.js');
Page({
  data:{
    movie:{}
    
  },
  onLoad:function(options){
    // 生命周期函数--监听页面加载
    this.loadMovie(options.id);
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 10000
    })
   
  },
  onReady:function(){
    // 生命周期函数--监听页面初次渲染完成
   
  },
  onShow:function(){
    // 生命周期函数--监听页面显示
    
  },
  onHide:function(){
    // 生命周期函数--监听页面隐藏
    
  },
  onUnload:function(){
    // 生命周期函数--监听页面卸载
   
  },
  onPullDownRefresh: function() {
    // 页面相关事件处理函数--监听用户下拉动作
    
  },
  onReachBottom: function() {
    // 页面上拉触底事件的处理函数
    
  },
  onShareAppMessage: function() {
    // 用户点击右上角分享
    return {
      title: 'title', // 分享标题
      desc: 'desc', // 分享描述
      path: 'path' // 分享路径
    }
  },
  loadMovie:function(movieId){
    var page =this;
      wx.request({
        url: 'https://api.douban.com/v2/movie/subject/'+movieId,
        method:"GET",
        header: {
            'Content-Type': 'json'
        },
        success: function(res) {
          var subject=res.data;
          SubjectsUtil.processSubject(subject);
          page.setData({movie:subject});
          // console.log("movie="+page.movie);
          wx.hideToast();

        }
    })
  },

})