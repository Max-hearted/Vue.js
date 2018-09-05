// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Login from './components/Login'
import  './assets/bg_login.jpg'
import qsList from './components/QS-list'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'



Vue.config.productionTip = false
Vue.use(ElementUI)
 Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
