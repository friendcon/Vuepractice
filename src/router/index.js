import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DataBinding from '@/components/DataBinding.vue'
import HtmlTest from '@/components/HtmlTest.vue'
import DataBindingInputText from '@/components/DataBindingInputText.vue'
import ListDataBinding from '@/components/ListDataBinding.vue'
import GetServerBining from '@/components/GetServerBining.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/databinding',
    name: 'DataBinding',
    component: DataBinding
  },
  {
    path: '/htmltest',
    name: 'HtmlTest',
    component: HtmlTest
  },
  {
    path: '/inputText',
    name: 'DataBindingInputText',
    component: DataBindingInputText
  },
  {
    path: '/listBinding',
    name: 'ListBinding',
    component: ListDataBinding
  },
  {
    path: '/getServerBinding',
    name: 'GetServerBinding',
    component: GetServerBining
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
