<script>
//trying to phase this file out in favor of actions
import axios from 'axios'

const CREATE_ACCOUNT_URL = '/users/newuser'
const VERIFY_URL = '/users/verifyemail'
const COMMUNITIES_URL = '/communities'
const COMMUNITIES_MEMBERS_URL = '/communities/'
const CREATE_COMMUNITY_URL = '/communities/add'
const SEND_RESET_EMAIL_URL = '/users/generateresetcode'
const RESET_PASSWORD_URL = '/users/resetpassword'

export default {

    getUrl: function(path){
        let isLocal = localStorage.getItem('isLocal')
        if (isLocal)
            return 'http://localhost:8080' + path
        return 'https://play-api.tcreeds.io' + path
    },

    createAccount(email, displayName, password) {
        return this.post(CREATE_ACCOUNT_URL, {email, displayName, password})
    },

    verify(creds) {
        return this.post(VERIFY_URL, creds)
    },

    logout() {
        this.token = undefined;
        localStorage.removeItem('token')
    },

    checkAuth() {
      var jwt = localStorage.getItem('token')
      return jwt ? true : false
    },

    getUser() {
        return localStorage.getItem('username')
    },

    getToken() {
        if (!this.token)
            this.token = localStorage.getItem('token')
        return this.token
    },

    createCommunity(name, description){
        return this.post(CREATE_COMMUNITY_URL, {
            name,
            description
        })
    },

    getCommunities() {
        return this.get(COMMUNITIES_URL)
    },

    getCommunityWithMembers(id) {
        return this.get(COMMUNITIES_MEMBERS_URL + id.toString())
    },

    sendResetEmail(email) {
        return this.post(SEND_RESET_EMAIL_URL, { email: email })
    },

    resetPassword(verificationId) {
        return this.post(RESET_PASSWORD_URL, { verificationId: verificationId })
    },

    get: function(path, data){
        return axios.get(this.getUrl(path), {
            'params': data,
            'headers': { 'Authorization': this.getToken() }
        })
    },
    post: function(path, data){
        return axios.post(this.getUrl(path), data, {
            'headers': { 'Authorization': this.getToken() }
        })
    }
}
</script>
