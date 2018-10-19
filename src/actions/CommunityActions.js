
import Axios from 'axios'
import {
    BASE_URL, POSTS_URL, JOIN_GROUP_URL
} from '@/constants/api.js' 

export function getPosts(id){
    return Axios.get(`${BASE_URL}${POSTS_URL}/${id}`, {
        'headers': { 
            'Authorization': localStorage.getItem('token')
        }})
}

export function addPost(post){
    return Axios.post(`${BASE_URL}${POSTS_URL}`, post, {
        'headers': { 
            'Authorization': localStorage.getItem('token')
        }})
}

export function joinGroup(groupId){
    return Axios.post(`${BASE_URL}${JOIN_GROUP_URL}/${groupId}`, {}, {
        'headers': { 
            'Authorization': localStorage.getItem('token')
        }})
}