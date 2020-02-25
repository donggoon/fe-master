import Vue from 'vue'
import VueRouter from 'vue-router'
import AppContent from '@/components/AppContent'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'AppContent',
      component: AppContent,
      meta: {
        title: 'TEST'
      }
    }
  ]
})