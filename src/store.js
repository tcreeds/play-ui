import Vue from 'vue'
import Vuex from 'vuex'
import { login, logout } from '@/actions/AuthActions'
import { updateUserProfile, getUserProfile } from '@/actions/UserActions'
import { getPosts, addPost, joinGroup } from '@/actions/CommunityActions'

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
      return login(context.commit, credentials)
    },
    logout(context){
      return logout(context.commit)
    },
    updateUserProfile(context, info){
      return updateUserProfile(context.commit, info)
    },
    getUserProfile(context, userId){
      return getUserProfile(userId)
    },
    getPosts(context, id){
      return getPosts(id)
    },
    addPost(context, postData){
      return addPost(postData)
    },
    joinGroup(context, groupId){
      return joinGroup(groupId)
    }
  }
})
