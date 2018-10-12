<template>
    <div id="navbar" class="cf">
        <div v-if="loggedIn" id="logout-container">
            <button id="logout-btn" @click="logout">LOGOUT</button>
            <span>{{username}}</span>
        </div>
        <img src="../assets/logo.png">
        <div id="link-container" v-if="loggedIn">
            <button id="home-btn" @click="home">HOME</button>
            <button id="profile-btn" @click="profile">PROFILE</button>
        </div>
    </div>
</template>

<script>

import { mapState, mapActions } from 'vuex'

export default {

    data(){
        return {
        }
    },

    computed: mapState({
        loggedIn: state => state.auth.loggedIn,
        username: state => state.auth.username
    }),

    methods: {

        ...mapActions(['logout']),

        profile(){
            this.$router.push('/profile')
        },

        home(){
            this.$router.push('/')
        }
    }
}

</script>

<style>
#navbar{
    position: relative;
    padding: 1em;
}
img{
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 2em;
}
#logout-btn{
    margin-right: 0.2em;
}
#link-container{
    float: right;
}
#logout-container{
    float: left;
}
.cf:before,
.cf:after {
    content: " "; /* 1 */
    display: table; /* 2 */
}

.cf:after {
    clear: both;
}
</style>
