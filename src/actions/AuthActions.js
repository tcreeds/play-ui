
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
                userId: response.data.id,
                email: response.data.email,
                username: response.data.displayName
            })
            localStorage.setItem('userId', response.data.id)
            localStorage.setItem('email', response.data.email)
            localStorage.setItem('username', response.data.displayName)
            localStorage.setItem('token', token)
            return token
        }).then(() => {
            router.push(router.app._route.query.redirect || '/')
        })
}

export function logout(commit){
    commit(LOGOUT)
    localStorage.removeItem('userId')
    localStorage.removeItem('email')
    localStorage.removeItem('username')
    localStorage.removeItem('token')
    router.push('/login')
}