import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store/main'

Vue.use(VueRouter)

// Pages
import home from './pages/home/home'
import view from './pages/view/view'

// Routes
const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/view/:id',
    name: 'view',
    component: view
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  const transition = to.name === 'home' ? 'slide-right' : 'slide-left'
  store.dispatch('transitionName', transition)
  next()
})

export default router
