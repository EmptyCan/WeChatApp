// //app.js
// var QQMapWX = require('./qqmap-wx-jssdk.min.js');
// var qqmapsdk;
// App({
  
//     onLaunch: function(){
//       // 实例化API核心类
//       qqmapsdk = new QQMapWX({
//         key: 'O7MBZ-RSK33-AOC3T-Y7I77-QA2RV-MBBGC'
//       });
//     },
//     onShow: function () {
//       // 调用接口
//       qqmapsdk.search({
//         keyword: '饭店',
//         success: function (res) {
//           console.log(res);
//         // },
//         // fail: function (res) {
//         //   console.log(res);
//         // },
//         // complete: function (res) {
//         //   console.log(res);
//         // }
//         for(let i = 0; i<res.data.length;i++){
//           console.log(res.data[i].title)
//         }
//       }
//       })
//     },
//   //   wx.getLocation({
//   //     type: 'gcj02',
//   //     success: function (res) {
//   //       console.log(res)
//   //       // var latitude = res.latitude
//   //       // var longitude = res.longitude
//   //       // var speed = res.speed
//   //       // var accuracy = res.accuracy
//   //       // console.log(latitude)
//   //       // console.log(longitude)
//   //       // console.log(speed)
//   //       // console.log(accuracy)
//   //       var latitude = res.latitude
//   //       var longitude = res.longitude
//   //       wx.openLocation({
//   //         latitude: latitude,
//   //         longitude: longitude,
//   //         scale: 28
//   //       })
//   //     }
//   //   })
//   //   wx.getLocation({
//   //     type: 'wgs84',
//   //     success: function (res) {
//   //       console.log(res)
//   //       // var latitude = res.latitude
//   //       // var longitude = res.longitude
//   //       // var speed = res.speed
//   //       // var accuracy = res.accuracy
//   //       // console.log(latitude)
//   //       // console.log(longitude)
//   //       // console.log(speed)
//   //       // console.log(accuracy)
//   //     }
//   //   })
//   // }
//   // onLaunch: function () {
//   //   // 展示本地存储能力
//   //   var logs = wx.getStorageSync('logs') || []
//   //   logs.unshift(Date.now())
//   //   wx.setStorageSync('logs', logs)

//   //   // 登录
//   //   wx.login({
//   //     success: res => {
//   //       // 发送 res.code 到后台换取 openId, sessionKey, unionId
//   //     }
//   //   })
//   //   // 获取用户信息
//   //   wx.getSetting({
//   //     success: res => {
//   //       if (res.authSetting['scope.userInfo']) {
//   //         // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
//   //         wx.getUserInfo({
//   //           success: res => {
//   //             // 可以将 res 发送给后台解码出 unionId
//   //             this.globalData.userInfo = res.userInfo

//   //             // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
//   //             // 所以此处加入 callback 以防止这种情况
//   //             if (this.userInfoReadyCallback) {
//   //               this.userInfoReadyCallback(res)
//   //             }
//   //           }
//   //         })
//   //       }
//   //     }
//   //   })
//   // },
//   // globalData: {
//   //   userInfo: null
//   // }
// })