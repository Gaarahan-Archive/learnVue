new Vue({
  el: '#vue-app',
  
  data : {
    msg : '这是一个文字走马灯 ',
    Interval : null
  },

  methods : {
    start : function(){
      if(this.Interval === null)
        this.Interval = setInterval( () => {
          this.msg =this.msg.substr(1) + this.msg.substr(0,1);
        },400);
    },

    stop(){
      clearInterval(this.Interval);
    }
  }

});
/*
 *    vue实例会监听自己的data,data改变后,文档中的数据会立即改变
 *  程序员只需关心数据,减少了对dom的操作
 *
 *  tips : 
 *    1.使用箭头函数解决了定时器内部的this指向问题,若使用function(){
 *      this.msg ...
 *    }
 *    会出现this.msg 未定义的问题
 *
 *    2.清除定时器时,需要一个全局的定时器id,此时可在data中定义好,在start
 *    函数中直接赋值
 *
 *    3.点击start时,会开启一个定时器,当点击多次时,会有多个定时器同时运行
 *    文字会越来越快,因此在start函数中应该加一条判断语句,防止重复调用计时
 *    器
 */
