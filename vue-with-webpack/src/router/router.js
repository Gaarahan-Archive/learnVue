import VueRouter from 'vue-router'

import login from '../../src/components/login.vue'
import register from '../../src/components/register.vue'
import loginTitle from  '../../src/components/login/login-title.vue'
import loginBody from  '../../src/components/login/login-body.vue'


export const router = new VueRouter({
  routes : [
    {
      path : '/login',
      component : login ,
      children : [
        {path : 'login-title', component : loginTitle},
        {path : 'login-body', component : loginBody},
      ]
    },
    { path : '/register', component : register },
  ]
});

