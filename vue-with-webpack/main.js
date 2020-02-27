import Vue from 'vue'
import app from './src/App.vue'
import VueRouter from 'vue-router'
import {router} from './src/router/router.js'

// 使用mintUI
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(VueRouter);
Vue.use(MintUI);

let vm = new Vue({
  el : '#app',
  router,
  render : h=>h(app)
});
