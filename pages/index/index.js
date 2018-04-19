//index.js
//获取应用实例
const app = getApp()
var timer;

Page({
  data: {
    food:'黄焖鸡',
    foodList: ['黄焖鸡', '炒米饭', '麻辣烫', '炒面', '刀削面',"牛肉面","土豆片","烧烤","火锅","剪刀面","aaa"],
    flag: 1,
    message: '今天吃什么'
  },
  chooseOne: function(){
    var _this = this;
    if(this.data.flag == 1){
      timer = setInterval(function () {
        var index = Math.round(Math.random() * 10);
        var newFood = _this.data.foodList[index];
        _this.setData({
          food: newFood
        })
      }, 100);
      this.setData({
        flag: 0,
        message: '就它了!!' 
      })
    }else{
      clearInterval(timer);
      this.setData({
        flag: 1,
        message: '今天吃什么'
      })
    }  
  },
  
})