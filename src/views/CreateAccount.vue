<template>
  <div class="section">
    <div class="hero is-primary">
        <div class="hero-body">
            <h2 class="title">Create Account</h2>
        </div>
    </div>
    
    <div class="center-block-medium">
      <div class="form-group" v-if="submitted">
          <p>Check your email for a link to verify your account.</p>
      </div>
      <div v-if="!submitted">
          <div class="field">
            <label class="label">Email</label>
            <div class="control has-icons-left has-icons-right">
              <input 
                class="input" 
                type="email" 
                placeholder="email"
                v-model="email">
              <span class="icon is-small is-left">
                <font-awesome-icon icon="envelope" />
              </span>
            </div>
          </div>
          <div class="field">
            <label class="label">Display Name</label>
            <div class="control">
              <input 
                class="input" 
                type="email" 
                placeholder="Display Name"
                v-model="displayName">
            </div>
          </div>
          <div class="field">
            <label class="label">Password</label>
            <div class="control has-icons-left">
              <input 
                class="input" 
                type="password" 
                placeholder="password"
                v-model="password">
              <span class="icon is-small is-left">
                <font-awesome-icon icon="key" />
              </span>
            </div>
          </div>
          <div class="field">
              <div class="control has-text-centered">
                  <button class="button is-primary" id="create-account-button" @click="submit">Create Account</button>
              </div>
          </div>
          
          <p v-if="error" class="help is-danger">{{ error }}</p>
      </div>
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
