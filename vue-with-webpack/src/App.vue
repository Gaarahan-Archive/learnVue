<template>
  <div>
    <div>
      <h3>Gaara han's login</h3>
      <button @click='show' value="show">show</button>
    </div>
    <router-link to="/login">login</router-link>
    <router-link to="/register">register</router-link>
    <router-view></router-view>
  </div>
</template>

<style>
</style>

<script>
  import {Indicator} from "mint-ui";
  export default{
    data(){
      return {
        msg : 'han'
      }
    },
    methods : {
      show(){
        alert('show !!');
      }
    },
    beforeMount() {
      Indicator.open({
        text : '正在加载',
        spinnerType : 'double-bounce'
      });
    },
    mounted() {
      Indicator.close();
    }
  }
</script>
