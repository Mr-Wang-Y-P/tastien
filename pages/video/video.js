// pages/video/video.js
// 小程序的内置方法
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentVid: null,
    stories: [],
    currentVideo: null
  },
  play(event) {
    // console.log(event);
    if (this.data.currentVid !== null) {
      this.data.currentVideo.pause();
    }
    let vid = event.target.dataset.vid;
    const currentVideo = wx.createVideoContext(`video-${vid}`)
    // console.log(currentVideo, '////');
    currentVideo.play();
    this.setData({
      currentVideo,
      currentVid: vid
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // console.log(this.data)
    this.setData({
      stories: app.globalData.stories
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})