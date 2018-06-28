<template>
    <div class="container">
        <div class="form-group">
            <input type="text" placeholder="email" v-model="email" class="form-control">
        </div>
        <div class="form-group">
            <button @click="sendResetEmail">RESET PASSWORD</button>
        </div>
        <div>
            <p v-if="sent">A password reset link has been sent to your email.</p>
        </div>
    </div>
</template>

<script>
import Out from '@/components/out'

export default {
    data(){
        return {
            sent: false,
            email: ''
        }
    },

    methods: {
        sendResetEmail(){
            Out.sendResetEmail(this.email).then(() => {
                this.sent = true;
            })
        }
    }
}

</script>

<style>
.container{
    margin-top: 3em;
}
.form-control{
    text-align: center;
    font-size: 1em;
    margin-bottom: 0.8em;
}
</style>
