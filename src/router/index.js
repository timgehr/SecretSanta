import Vue from 'vue'
import VueRouter from 'vue-router'
import Encrypt from '../views/Encrypt.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    Encrypt: 'Encrypt',
    component: Encrypt
  },
  {
    path: '/decrypt',
    name: 'Decrypt',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Decrypt.vue')
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
