import Vue from 'vue'
import VueRouter from 'vue-router'
//components
import Home from '@/app/shared/components/home-page/home-page.vue'
import Question from '@/app/quiz-box/quiz-box.vue'
import Result from '@/app/result/result.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/question/:id',
    name: 'question',
    component: Question,
  },
    {
    path: '/result',
    name: 'result',
    component: Result,
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
