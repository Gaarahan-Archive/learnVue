new Vue({
  el: '#vue-app',
  data: {
    msg: 'this is a message',
    addText : 'this is a message insert use v-text'
  }
});
/*
 *  v-cloak : 在css文件中将v-cloak属性的元素设置为隐藏,解决加载过程中
 *            vue的插值表达式{{msg}}一闪而过的问题
 *  v-text  : 直接替换原有元素的内容
 *  v-html  : 也会替换元素的内容,同时将字符串转为html元素放入页面
 *  {{msg}} : 只替换元素内容中的插值表达式
 *
 */
