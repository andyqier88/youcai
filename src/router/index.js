import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/Header'
import Index from '@/pages/Index'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/talent_platgor',
    //   name: 'Hello',
    //   component: Header
    // },
    {
      path:'/',
      name:'index',
      component:Index
    }
  ]
})
