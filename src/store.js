import Vue from 'vue'
import Vuex from 'vuex'
import { login, logout } from '@/actions/AuthActions'
import { updateUserProfile, getUserProfile } from '@/actions/UserActions'

Vue.use(Vuex)

const loggedInAtPageLoad = !!localStorage.getItem('token')

export default new Vuex.Store({
  state: {
    auth: {
      loggedIn: loggedInAtPageLoad,
      userId: localStorage.getItem("userId"),
      email: localStorage.getItem('email'),
      username: localStorage.getItem('username')
    }
  },
  mutations: {
    loginSuccessful(state, payload){
      state.auth = {
        ...state.auth,
        userId: payload.userId,
        email: payload.email,
        username: payload.username,
        loggedIn: true
      }
    },
    logout(state){
      state.auth = {
        ...state.auth,
        userId: undefined,
        email: undefined,
        username: undefined,
        loggedIn: false
      }
    },
    profileUpdateSuccessful(state, payload){
      state.auth = {
        ...state.auth,
        username: payload.username
      }
    }
  },
  actions: {
    login(context, credentials){
      login(context.commit, credentials)
    },
    logout(context){
      logout(context.commit)
    },
    updateUserProfile(context, info){
      updateUserProfile(context.commit, info)
    },
    getUserProfile(context, userId){
      return getUserProfile(userId)
    }
  }
})
