import Vue from 'vue'
import app from './src/App.vue'
import VueRouter from 'vue-router'
import {router} from './src/router/router.js'

Vue.use(VueRouter);

let vm = new Vue({
  el : '#app',
  router,
  render : h=>h(app)
});
