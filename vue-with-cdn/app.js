//实例化对象
new Vue({
  el:"#vue-app",
  data:{
    name: "gaarahan",
    num : 300,
    text: "this is a link to gaarahan's github",
    site: "https://github.com/Gaarahan",
    siteTag: "<a href='#'>a siteTag</a>"
  },
  methods:{
    greet : function(time){
      return "good " + time +" " + this.name;
    }
  }
});
/*
 * el : element 获取的元素
 * data : 存储数据 
 * methods : 方法
 * v-bind : 属性绑定,会将被赋予的值看做一个变量,因此可以有变量的操作
 *          ":" 是简写的v-bind
 * v-html : 标签绑定
 */
