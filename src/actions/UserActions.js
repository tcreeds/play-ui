import Axios from 'axios'
import {
    PROFILE_URL, BASE_URL
} from '@/constants/api.js' 
import {
    PROFILE_UPDATE_SUCCESSFUL
} from '@/constants/UserActionTypes'

export function updateUserProfile(commit, info){
    console.log(info)
    return Axios.post(`${BASE_URL}${PROFILE_URL}`, info, {
        'headers': { 
            'Authorization': localStorage.getItem('token')
        }
    }).then((res) => {
        console.log(res)
        commit (PROFILE_UPDATE_SUCCESSFUL, {
            username: info.username
        })
    })
}

export function getUserProfile(userId){
    return Axios.get(`${BASE_URL}${PROFILE_URL}/${userId}`, {
        'headers': { 
            'Authorization': localStorage.getItem('token')
        }
    })
}