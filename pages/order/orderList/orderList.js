// pages/order/orderList/orderList.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        tabList: ['待消费', '服务中', '已完成', '已取消'],
        currentTabIndex: 0
    },
    changeTab(e) {
        let { index } = e.currentTarget.dataset
        this.setData({
            currentTabIndex: index
        })
    },
    goOrderSure() {
        wx.navigateTo({
            url: '/pages/order/sureOrder/sureOrder',
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})