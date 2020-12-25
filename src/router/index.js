import Vue from 'vue'
import VueRouter from 'vue-router'

//components
const Home = () => import('@/app/shared/components/home-page/home-page.vue')
const Question = () => import('@/app/quiz-box/quiz-box.vue')
const Result = () => import('@/app/result/result.vue')
// const store = () => import('../store')
import store  from '../store'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/home',
    name: 'homePage',
    component: Home,
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
    beforeEnter(to,from,  next) {
      if(store.getters.getQuestions.length > 0){
          if(store.getters.gettQuestionAnswer.length === store.getters.getQuestions.length) {
            next();
          }else{
            alert("you didn't finish your quiz")
          }
      }else {
        alert('start your quiz to get your result')
        //route to home page and handle if dublicated routing
        router.push({ path: '/home' }).catch(err => {
          if(err){
            router.push({ path: '/' })
          }
        })


      }

    }
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
