import Vue from 'vue'
import Router from 'vue-router'
import store from './store'
//import Home from './views/Home.vue'

import Home from './views/Home'
import Login from '@/views/Login'
import CreateAccount from '@/views/CreateAccount'
import Verify from '@/views/Verify'
import SearchCommunities from '@/views/SearchCommunities'
import CreateCommunity from '@/views/CreateCommunity'
import Community from '@/views/Community'
import Profile from '@/views/Profile'
import PasswordReset from '@/views/PasswordReset'

Vue.use(Router)

function requireAuth (to, from, next) {
  if (!store.state.auth.loggedIn) {
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
}

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
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
        path: '/create-community',
        name: 'CreateCommunity',
        component: CreateCommunity,
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
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
