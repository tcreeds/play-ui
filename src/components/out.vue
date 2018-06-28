<script>
import axios from 'axios'

const LOGIN_URL = '/users/login'
const CREATE_ACCOUNT_URL = '/users/newuser'
const VERIFY_URL = '/users/verifyemail'
const COMMUNITIES_URL = '/communities'
const COMMUNITIES_MEMBERS_URL = '/communities/'
const SEND_RESET_EMAIL_URL = '/users/generateresetcode'
const RESET_PASSWORD_URL = '/users/resetpassword'

export default {

    getUrl: function(path){
        let isLocal = localStorage.getItem('isLocal')
        if (isLocal)
            return 'http://localhost:8080' + path
        return 'https://play-api.tcreeds.io' + path
    },

    login(creds) {
        return this.post(LOGIN_URL, creds)
          .then((response) =>{
              console.log(response)
              localStorage.setItem('user', creds.email)
              this.token = response.headers["authorization"]
              if (this.token)
                localStorage.setItem('token', this.token)
          })
    },

    createAccount(email) {
        return this.post(CREATE_ACCOUNT_URL, {email})
    },

    verify(creds) {
        return this.post(VERIFY_URL, creds)
            .then((response) =>{
                localStorage.setItem('user', creds.email)
                this.token = response.headers["authorization"]
                if (this.token)
                  localStorage.setItem('token', this.token)
            })
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
        return localStorage.getItem('user')
    },

    getToken() {
        if (!this.token)
            this.token = localStorage.getItem('token')
        return this.token
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
