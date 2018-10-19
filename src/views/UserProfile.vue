<template>
    <div class="section">
        <div class="hero is-primary">
            <div class="hero-body">
                <p class="title">{{displayName}}</p>
            </div>
        </div>
        <div class="container">
            <div>
                <label>Display Name: </label><span>{{displayName}}</span>
            </div>
            <div>
                <label>Bio: </label><span>{{bio}}</span>
                </div>
        </div>
    </div>
</template>

<script>

import { mapActions } from 'vuex'

export default {

    data(){
        return {
            displayName: '',
            bio: ''
        }
    },

    mounted(){
        this.getUserProfile(this.$route.params.id)
            .then(response => {
                this.displayName = response.data.username
                this.bio = response.data.bio
            })
    },

    methods: {
        ...mapActions(['getUserProfile'])
    }

}

</script>
