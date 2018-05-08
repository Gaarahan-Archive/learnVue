const url = 'http://vue.studyit.io/api/getnewslist';
const postUrl = 'http://vue.studyit.io/api/postcomment/17';
const jsonpUrl = 'http://vue.studyit.io/api/postcomment/17';

var vm = new Vue({
  el : "#vue-app",

  data: {
    
  },

  methods : {
    getInfo(){
      console.log("get请求回调");
      this.$http.get(url).then(function(result){
        console.log("result :" + result.body);
      });
    },

    postInfo(){
      // 通过第三个参数中的 emulateJSON 为 true ,
      //    设置提交的内容为普通表单数据格式
      this.$http.post(postUrl,{},{emulateJSON:true}).then(function(result){
        console.log(result.body);
      })
    },

    jsonpInfo(){
      this.$http.jsonp(jsonpUrl).then(function(result){
        console.log(result.body);
      })
    }

  }
});
