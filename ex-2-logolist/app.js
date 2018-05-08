//定义一个自定义按键f2,用以捕获键盘f2键
Vue.config.f2 = 113;

//定义一个全局的指令,参数1为指令名称
//在定义指令时,不需要前缀v-
//在调用指令时,必须加v-前缀
//参数2是一个对象

//一般样式在bind中,js操作在inserted中

Vue.directive('focus',{
  //在每个函数中,第一个参数永远是el,代表被绑定的元素,是一个原生的js对象
  bind : function (){
    //每当指令绑定到元素上时,会立即执行这个函数,只执行一次
    /*
     * 注意:元素刚绑定了指令的时候,还没有插入到DOM中去,虽然执行了
     *      函数,但并没有效果
     */
  },

  inserted: function(el){
    //每当元素插入到dom时,会执行这个函数,触发一次
    el.focus();
  },

  updated : function(){
    //当Vnode更新时执行这个函数,可能执行多次
  }
});
Vue.directive('color',{
  bind : function(el){
    //无论元素是否被插入到DOM中,它都会被赋予一个内联样式
    el.style.color = "blue";
  }
});


//定义一个全局的过滤器
Vue.filter('dateFormat',function(dateStr){
  var dt = new Date(dateStr);
  var y = dt.getFullYear();
  var m = dt.getMonth()+1;
  var d = dt.getDate();
  var h = dt.getHours().toString().padStart(2,"0");
  var mi = dt.getMinutes().toString().padStart(2,"0");
  var s = dt.getSeconds().toString().padStart(2,"0");

  //模板字符串
  return `${y}-${m}-${d} ${h}:${mi}:${s}`;
});

var vm=new Vue({
  el: "#vue-app",

  data : {
    list : [
      {id:1,name:'奔驰',ctime: new Date()},
      {id:2,name:'长安',ctime: new Date()}
    ],
    id : "",
    name : "",
    sech : "",
  },

  methods: {
    add(){
      this.list.push({id:this.id,name:this.name,ctime: new Date()});
      this.id='';
      this.name='';
    },

    del(id){
      this.list.some((val,index)=>{
        if(val.id === id){
          this.list.splice(index,1); 
          return true;
        }
      })
    },

    fil(s){
      return  this.list.filter( (val)=>{
        return ( val.name.indexOf(this.sech) >= 0);
      });

    }
  },
   //私有的过滤器
  filters:{
    dateFormat2 :function(date){
      return date +  " ~~";
    }
  },

  //私有的指令
  directives: {
    'bold' : {
      bind(el,binding){
        el.style.fontWeight = binding.value;
      }
    },
    //只使用bind和update时,可以简写成如下形式
    //指令调用时不区分大小写,在html中大写调用这个指令,仍旧是有效的
    'fsize' : function(el,binding){
      el.style.fontSize = parseInt(binding.value) + 'px';
    }
  }
});
