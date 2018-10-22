<template>
    <div class="section">
        <div class="hero is-primary">
            <div class="hero-body">
                <p class="title">Profile</p>
                <p class="subtitle">{{username}}</p>
            </div>
        </div>
        <div>
            <div class="card user-info">
                <div class="card-header">
                    <p class="card-header-title">User Info</p>
                </div>
                <div class="card-content">
                    <div>
                        <label>Display Name: </label>
                        <input
                            type="text"
                            class="form-control"
                            placeholder="Change Display Name"
                            v-model="displayName">
                    </div>
                    <div>
                        <label>Bio: </label>
                        <textarea
                            class="form-control"
                            v-model="bio"></textarea>
                    </div>
                </div>
            </div>
            <div>
                <button class="login-btn" @click="updateInfo">UPDATE</button>
            </div>
            <div class="card">
                <div class="card-header">
                    <p class="card-header-title">Communities</p>
                </div>
                <ul class="card-content">
                    <li v-for="community in communities" :key="community.id">
                        <span>{{community.name}}: </span><span>{{community.description}}</span>
                    </li>
                </ul>
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
            bio: '',
            communities: []
        }
    },

    mounted(){
        this.getUserProfile(this.userId)
            .then(response => {
                this.displayName = response.data.username
                this.bio = response.data.bio
                this.communities = response.data.communities
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

<style scoped>
li{
    margin-bottom: 0.2em;
}
textarea{
    min-width: calc(100% - 8em);
}
button{
    margin-bottom: 0.5em;
}
.user-info label{
    width: 8em;
    display: inline-block;
    vertical-align: top;
}
.user-info input, .user-info textarea{
    text-align: left;
}
</style>
