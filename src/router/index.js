import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/Header'
import Index from '@/pages/Index'
import TalentPlatfor from '@/pages/talent_platfor'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/talent_platfor',
      name: 'TalentPlatfor',
      component: TalentPlatfor
    },
    {
      path:'/',
      name:'index',
      component:Index
    }
  ]
})
