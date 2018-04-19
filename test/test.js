// test/test.js
var QQMapWX = require('../lib/qqmap-wx-jssdk.min.js');
var newArry = [];
var timer;
var qqmapsdk;
var markersData = [];
Page({
  data: {
    foods: [],
    food: '',
    flag: 1,
    message: '吃点啥',
    seen: 1
  },
  // 实例化API核心类
  onShow: function () {
    qqmapsdk = new QQMapWX({ key: 'O7MBZ-RSK33-AOC3T-Y7I77-QA2RV-MBBGC' });
    var _this = this;  
    // 调用接口
    qqmapsdk.search({
      keyword: '饭店',
      page_size: 20,
      page_index: 1,
      success: function (res) {
        console.log(res);
        for (let i = 0; i < res.data.length; i++) {
          var obj = {};
           for(let key in res.data[i]){
            obj[key] = res.data[i][key];
           }
            newArry.push(obj)  
        }
        _this.setData({
          foods: newArry
        })
        console.log(_this.data.foods)
      },
      faild: function(){
        console.log('failed')
      }
    })  
  },
  chooseOne: function () {
    var _this = this;
    if (this.data.flag == 1) {
      timer = setInterval(function () {
        var index = Math.round(Math.random() * 19);
        var newFood = _this.data.foods[index];
        _this.setData({
          food: newFood
        })
      }, 30);

      this.setData({
        flag: 0,
        message: '就它了!!',
        seen: 1
      })
    } else {
      clearInterval(timer);
      console.log(this.data.food)
      this.setData({
        flag: 1,
        message: '今天吃什么',
        seen: 0
      })
    }
  },
  goTo: function(){
    let _this = this;
    let lat = this.data.food.location.lat;
    let lng = this.data.food.location.lng;
    wx.openLocation({
      latitude: lat,
      longitude: lng,
      scale: 28,
      name: _this.data.food.title,
      address: _this.data.food.address
    })
    qqmapsdk.calculateDistance({
      mode: 'walking',
      to: [{
        latitude: lat,
        longitude: lng
      }],
      success: function (res) {
        console.log(res);
      },
      fail: function (res) {
        console.log("计算失败"+res);
      }
    })
  }
})
      // wx.getLocation({
      //   success: function(res) {
      //     var a = res.latitude;
      //     _this.setData({
      //       lat: res.latitude,
      //       lot: res.longitude
      //     })
      //     qqmapsdk.reverseGeocoder({
      //       location: {
      //         latitude: _this.data.lat,
      //         longitude: _this.data.lot
      //       },
      //       get_poi: 1,
      //       poi_options: 'page_index=2',            
      //       success: function (res) {
      //         console.log(res);
      //       },
      //       fail: function (res) {
      //         console.log('传参失败：'+res);
      //       }
      //     });
      //   }
      // })