var vm = new Vue({
  el:'#vue-app',
  data: {
    num1 : 0,
    num2 : 0,
    result : 0,
    op : '+'
  },

  methods:{
    getValue(){
      this.result = 
        eval(this.num1.toString() + this.op + this.num2.toString());
    }
  }


});
