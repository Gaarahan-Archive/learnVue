new Vue({
  el: '#app-vue',

  data:{
    age: 30,
    x : 0,
    y : 0
  },

  methods:{
    add : function(){
      this.age ++;
    },

    subtract: function(){
      this.age --;
    },

    updateXY: function(event) {
      this.x = event.offsetX;
      this.y = event.offsetY;
    },
    
    stop: function(event){
      event.stopPropagation();
    },

    preventLink: function(){
      alert("我阻止了你去往bing的链接");
    }
  }
});

/*
 * v-on :绑定事件,后跟事件名
 * @ : 同v-on
 * @click.stop="" : 阻止事件冒泡
 * @click.once = "fun()" : 只执行一次的事件
 * @click.prevent = "fun()" : 阻止默认事件
 */
