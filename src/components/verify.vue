<template>
  <div class="login-container">
    <h2>Activate Account</h2>
    <div class="alert alert-danger" v-if="error">
      <p>{{ error }}</p>
    </div>
    <div class="form-group">
      <input
        type="password"
        class="form-control"
        placeholder="password"
        v-model="credentials.password"
      >
    </div>
    <button class="login-btn" @click="submit">Activate</button>
  </div>
</template>

<script>
import Out from '@/components/out'

export default {

  data: function() {
    return {
      credentials: {
        verificationId: this.$route.params.verificationId,
        password: ''
      },
      error: ''
    }
  },

  methods: {

    submit: function () {

      Out.verify(this.credentials)
          .then((data) => {
              this.$router.replace('/')
          })
          .catch((response) => {
              console.log(response)
              alert('no')
          })
    },

    checkAuth: function(){
        this.loggedIn = Out.checkAuth()
        console.log("checking login auth")
    }
  }

}
</script>

<style>
    .login-container{
        font-size: 1.2em;
    }
    .form-control{
        text-align: center;
        font-size: 1em;
    }
    .login-btn{
        margin-top: 0.5em;
    }
</style>
