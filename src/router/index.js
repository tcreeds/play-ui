import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Login from '@/components/login'
import CreateAccount from '@/components/createaccount'
import Verify from '@/components/verify'
import SearchCommunities from '@/components/SearchCommunities'
import Community from '@/components/Community'
import Profile from '@/components/Profile'
import PasswordReset from '@/components/PasswordReset'
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
        path: '/verify',
        name: 'Verify',
        component: Verify
    },
    {
        path: '/',
        name: 'Home',
        component: Home,
        beforeEnter: requireAuth,
    },
    {
        path: '/communities',
        name: 'SearchCommunities',
        component: SearchCommunities,
        beforeEnter: requireAuth
    },
    {
        path: '/communities/:id',
        name: 'Community',
        component: Community,
        beforeEnter: requireAuth
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile,
        beforeEnter: requireAuth
    },
    {
        path: '/passwordreset',
        name: 'PasswordReset',
        component: PasswordReset
    }

  ]
})
