<template>
  <div class="login-container section">
    <h2>Log In</h2>
    <div class="alert alert-danger" v-if="error">
      <p>{{ error }}</p>
    </div>
    <div class="form-group">
      <input
        type="text"
        id="email-input"
        class="form-control"
        placeholder="email"
        v-model="credentials.email"
      >
    </div>
    <div class="form-group">
      <input
        type="password"
        id="password-input"
        class="form-control"
        placeholder="password"
        v-model="credentials.password"
      >
    </div>
    <div>
        <button class="login-btn" id="login-button" @click="submit">Log In</button>
    </div>
    <div>
        <button class="login-btn" @click="createAccount">Create Account</button>
    </div>
    <div>
        <button class="login-btn" @click="resetPassword">Reset Password</button>
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
      error: '',
      passwordResetVisible: false
    }
  },

  computed: {
    ...mapState({
      loggedIn: state => state.auth.loggedIn
    })
  },

  methods: {

    ...mapActions(['login']),  

    submit: function () {

      var credentials = {
        email: this.credentials.email,
        password: this.credentials.password
      }

      this.login(credentials)
        .catch((response) => {
            console.log(response)
            alert('no')
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

<style>
    .login-container{
        text-align: center;
    }
    .form-control{
        text-align: center;
        font-size: 1em;
    }
    .login-btn{
        margin-top: 0.5em;
    }
</style>
