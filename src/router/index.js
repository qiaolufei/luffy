import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import blog from '@/pages/blog'
import schedule from '@/pages/schedule'
import aboutme from '@/pages/about_me'
import message from '@/pages/message'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/blog',
      name: 'blog',
      component: blog
    },
    {
      path: '/schedule',
      name: 'schedule',
      component: schedule
    },
    {
      path: '/about_me',
      name: 'about_me',
      component: aboutme
    },
    {
      path: '/message',
      name: 'message',
      component: message
    }
  ]
})
