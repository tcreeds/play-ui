<template>
  <div class="section">
    <div class="hero is-primary">
        <div class="hero-body">
            <h2 class="title">Activate Account</h2>
        </div>
    </div>
    <div class="center-block-small">
      <div class="field">
          <div class="control has-text-centered">
              <button class="button is-primary" id="create-account-button" @click="submit">Activate Account</button>
          </div>
      </div>
      <p v-if="error" class="help is-danger">{{ error }}</p>
    </div>
  </div>
</template>

<script>
import Out from '@/components/out'

export default {

  data: function() {
    return {
      credentials: {
        verificationId: this.$route.query.verificationId,
        email: this.$route.query.email
      },
      error: ''
    }
  },

  methods: {

    submit: function () {

      Out.verify(this.credentials)
          .then(() => {
              this.$router.push('/')
          })
          .catch((response) => {
              console.log(response)
              alert('no')
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
