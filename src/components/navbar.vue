<template>
    <div id="navbar" class="cf">
        <button id="logout-btn" @click="logout" v-if="loggedIn">LOGOUT</button>
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
        loggedIn: state => state.auth.loggedIn
    }),

    methods: {

        ...mapActions(['logout']),

        profile(){
            this.$router.replace('/profile')
        },

        home(){
            this.$router.replace('/')
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
    position: absolute;
    left: 1em;
}
#link-container{
    float: right;
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
