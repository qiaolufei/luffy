import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import blog from '@/pages/blog'
import schedule from '@/pages/schedule'
import aboutme from '@/pages/about_me'
import message from '@/pages/message'
import blogInfo from '@/pages/blogInfo'
Vue.use(Router)

export default new Router({
  // mode: 'history',
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
    },
    {
      path: '/blogInfo',
      name: 'blogInfo',
      component: blogInfo
    }
  ]
})
