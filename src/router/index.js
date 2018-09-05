import Vue from 'vue'
import Router from 'vue-router'
import qsList from '@/components/QS-list'
import qsData from '@/components/QS-data'
import qsFill from '@/components/QS-fill'
import qsEdit from '@/components/QS-edit'
import Login from '@/components/Login.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/qsList',
      name: 'qsList',
      component: qsList
    },
    {
      path: '/data/:num',
      name: 'qsData',
      component: qsData
    },
    {
      path: '/fill/:num',
      name: 'qsFill',
      component: qsFill
    },
    {
      path: '/edit/:num',
      name: 'qsEdit',
      component: qsEdit
    }
  ]
})
