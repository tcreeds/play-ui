<template>
    <div class="section">
        <div class="hero is-primary">
            <div class="hero-body">
                <p class="title">Profile</p>
                <p class="subtitle">{{username}}</p>
            </div>
        </div>
        <div>
            <div class="form-group">
                <input
                    type="text"
                    class="form-control"
                    placeholder="Change Display Name"
                    v-model="displayName">
            </div>
            <div class="form-group">
                <textarea
                class="form-control"
                v-model="bio"></textarea>
            </div>
            <div>
                <button class="login-btn" @click="updateInfo">UPDATE</button>
            </div>
        </div>
    </div>
</template>

<script>

import { mapState, mapActions } from 'vuex'

export default {

    data(){
        return {
            displayName: this.username || '',
            bio: ''
        }
    },

    mounted(){
        this.getUserProfile(this.userId)
            .then(response => {
                this.displayName = response.data.username
                this.bio = response.data.bio
            })
    },

    computed: {
        ...mapState({
            userId: state => state.auth.userId,
            email: state => state.auth.email,
            username: state => state.auth.username
        })
    },

    methods: {
        ...mapActions(['updateUserProfile', 'getUserProfile']),

        updateInfo(){
            this.updateUserProfile({
                username: this.displayName,
                bio: this.bio
            })
        }
    }

}

</script>

<style>

</style>
