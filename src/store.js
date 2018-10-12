import Vue from 'vue'
import Vuex from 'vuex'
import { login, logout } from '@/actions/AuthActions'

Vue.use(Vuex)

const loggedInAtPageLoad = !!localStorage.getItem('token')

export default new Vuex.Store({
  state: {
    auth: {
      loggedIn: loggedInAtPageLoad,
      username: undefined
    }
  },
  mutations: {
    loginSuccessful(state, payload){
      state.auth = {
        ...state.auth,
        username: payload.username,
        loggedIn: true
      }
    },
    logout(state){
      state.auth = {
        ...state.auth,
        username: undefined,
        loggedIn: false
      }
    }
  },
  actions: {
    login(context, credentials){
      login(context.commit, credentials)
    },
    logout(context){
      logout(context.commit)
    }
  }
})
