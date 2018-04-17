import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from './components/Home'
import About from './components/About'
import ListaIncremental from './components/ListaIncremental'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/incremental', component: ListaIncremental}
]

export default new VueRouter({
  routes
})