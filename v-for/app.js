var vm = new Vue({
  el:'#vue-app',

  data: {
    val : '',
    key : '',
    array:{
      name : 'gaara',
      age : 20,
      sex : 'man'
    },

    objarr: [
      {id : 1,name: 'tony'},
      {id : 2,name: 'ais'},
      {id : 3,name: 'location'},
      {id : 4,name: 'back'},
      {id : 5,name: 'peter'}
    ],

    arr: [1,2,3,4,5,6,7,8],

  },

  methods : {
     add(){
       this.objarr.unshift({id:this.key,name:this.val});
     } 
  }
});
/*
 *  在v-for循环中,若在组件中使用v-for 属性 ,必须指定属性key来通过唯一标示
 *  来定位当前循环到的元素
 *  key 标识符必须为number/String
 *  key 不知能解决v-for的问题
 */
