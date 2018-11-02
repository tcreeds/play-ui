<template>
  <div class="login-container">
    <h2>Create Account</h2>
    <div class="alert alert-danger" v-if="error">
      <p>{{ error }}</p>
    </div>
    <div class="form-group" v-if="submitted">
        <p>Check your email for a link to verify your account.</p>
    </div>
    <div v-if="!submitted">
        <div class="form-group">
            <input
              type="text"
              class="form-control"
              placeholder="email"
              v-model="email">
        </div>
        <div class="form-group">
            <input
              type="text"
              class="form-control"
              placeholder="Display Name"
              v-model="displayName">
        </div>
        <div class="form-group">
            <input
              type="text"
              class="form-control"
              placeholder="password"
              v-model="password">
        </div>
        <button class="login-btn" @click="submit">Create Account</button>
    </div>
  </div>
</template>

<script>
import Out from '@/components/out'

export default {

  data: function() {
    return {
      submitted: false,
      email: '',
      displayName: '',
      password: '',
      error: ''
    }
  },

  methods: {

    submit: function () {

      Out.createAccount(this.email, this.displayName, this.password)
          .then(() => {
              this.submitted = true
              this.error = ''
          })
          .catch((response) => {
              console.log(response)
              if (response.response.status == 409)
                this.error = "email is already in use"
              console.log(this.error)
          })
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
