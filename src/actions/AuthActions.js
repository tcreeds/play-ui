
import Axios from 'axios'
import router from '@/router'
import {
    LOGIN_URL, BASE_URL
} from '@/constants/api.js' 
import { LOGIN_SUCCESSFUL, LOGOUT } from '@/constants/AuthActionTypes.js'



export function login(commit, credentials){
    return Axios.post(`${BASE_URL}${LOGIN_URL}`, credentials)
        .then((response) => {
            console.log(response)
            const token = response.headers["authorization"]
            commit(LOGIN_SUCCESSFUL, {
                username: credentials.email
            })
            localStorage.setItem('user', credentials.email)
            localStorage.setItem('token', token)
            return token
        }).then(() => {
            router.push(router.app._route.query.redirect || '/')
        })
}

export function logout(commit){
    commit(LOGOUT)
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    router.replace('/login')
}