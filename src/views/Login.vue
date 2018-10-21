<template>
  <div class="login-container section">
    <h2 class="title">Log In</h2>
    <div class="container">
      <div class="field">
        <label class="label">Email</label>
        <div class="control has-icons-left has-icons-right">
          <input 
            class="input" 
            type="email" 
            placeholder="email" 
            @keypress="onKeypress" 
            v-model="credentials.email">
          <span class="icon is-small is-left">
            <font-awesome-icon icon="envelope" />
          </span>
        </div>
      </div>
      <div class="field">
        <label class="label">Password</label>
        <div class="control has-icons-left">
          <input 
            class="input" 
            type="password" 
            placeholder="password" 
            @keypress="onKeypress" 
            v-model="credentials.password">
          <span class="icon is-small is-left">
            <font-awesome-icon icon="key" />
          </span>
        </div>
      </div>
      <div>
        <p v-if="loginRequestSent" class="help">Logging in...</p>
        <p v-if="loginRequestFailed" class="help is-danger">We couldn't find an account with those credentials.</p>
      </div>
      <div class="field">
        <div class="control has-text-centered">
          <button class="button is-primary" id="login-button" @click="submit">Log In</button>
        </div>
      </div>
      <div class="field is-grouped is-grouped-centered">
        <div class="control">
          <button class="button is-text" @click="createAccount">Create Account</button>
        </div>
        <div class="control">
            <button class="button is-text" @click="resetPassword">Reset Password</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {

  data: function() {
    return {
      credentials: {
        email: '',
        password: ''
      },
      loginRequestSent: false,
      loginRequestFailed: false

    }
  },

  computed: {
    ...mapState({
      loggedIn: state => state.auth.loggedIn
    })
  },

  methods: {

    ...mapActions(['login']),  

    onKeypress(e){
      if (e.key == "Enter")
        this.submit()
    },

    submit: function () {

      var credentials = {
        email: this.credentials.email,
        password: this.credentials.password
      }
      this.loginRequestSent = true
      this.loginRequestFailed = false
      this.login(credentials)
        .catch(res => {
            if (res.response.status == 401){
              this.userMessage = 'We couldn\'t find an account for these credentials'
            }
            if (res.response.status > 500){
              this.userMessage = 'Something went wrong on our end'
            }
            this.loginRequestSent = false
            this.loginRequestFailed = true
        })
    },

    createAccount: function(){
        this.$router.push('createaccount')
    },

    resetPassword(){
        this.$router.push('passwordreset')
    }
  }

}
</script>

<style scoped>
    .login-container{
        text-align: center;
    }
    .form-control{
        text-align: center;
        font-size: 1em;
    }
    #login-button{
        font-size: 1.2em;
        margin-top: 0.5em;
    }

    @media screen {
      .login-container {
        max-width: 20em;
        margin: 0 auto;
      }
    }
</style>
