import Vue from 'vue'
import VueRouter from 'vue-router'
import ResumeList from '../views/ResumeList.vue'
import ExerciseForm from '../views/ExerciseForm.vue'
import PressureForm from '../views/PressureForm.vue'
import ArticleList from '../views/ArticleList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'resumeList',
    component: ResumeList
  },{
    path: '/exerciseForm',
    name: 'exerciseForm',
    component: ExerciseForm
  },{
    path: '/pressureForm',
    name: 'pressureForm',
    component: PressureForm
  },{
    path: '/articleList',
    name: 'articleList',
    component: ArticleList
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
