// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import elementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import $ from 'jquery'
import axios from 'axios'
import VueAxios from 'vue-axios'
import qs from 'qs'
import VueParticles from 'vue-particles'
import htmlToPdf from '@/utils/htmlToPdf'

Vue.use(htmlToPdf)
Vue.use(VueParticles)
Vue.use(elementUI)
Vue.use(VueAxios, axios) // 可全局调用 this.axios.post()
Vue.prototype.$qs = qs // 可全局调用 this.$qs

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  $,
  components: { App },
  template: '<App/>'
})
