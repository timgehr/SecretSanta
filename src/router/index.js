import Vue from 'vue'
import VueRouter from 'vue-router'
import Encrypt from '../views/Encrypt.vue'
import Decrypt from '../views/Decrypt.vue'
import Generated from '../views/Generated.vue'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/encrypt',
    name: 'Encrypt',
    component: Encrypt
  },
  {
    path: '/decrypt/:id',
    name: 'Decrypt',
    component: Decrypt
  },
  {
    path: '/generated',
    name: 'generated',
    component: Generated
  }
]

const router = new VueRouter({
  routes
})

export default router
