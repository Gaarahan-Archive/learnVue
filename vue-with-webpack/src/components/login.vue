<template>
  <div>
    <h3>This is Login</h3>
    <router-link to="/login/login-title">login-title</router-link>
    <router-link to="/login/login-body">login-body</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "login"
  }
</script>

<style scoped>

</style>