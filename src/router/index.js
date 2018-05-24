import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Login from '@/components/login'
import CreateAccount from '@/components/createaccount'
import Verify from '@/components/verify'
import Out from '@/components/out'

Vue.use(Router)

function requireAuth (to, from, next) {
  if (!Out.checkAuth()) {
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
}

export default new Router({
  routes: [
    {
        path: '/createaccount',
        name: 'CreateAccount',
        component: CreateAccount
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/verify/:verificationId',
        name: 'Verify',
        component: Verify
    },
    {
        path: '/',
        name: 'Home',
        component: Home,
        beforeEnter: requireAuth
    }
  ]
})
