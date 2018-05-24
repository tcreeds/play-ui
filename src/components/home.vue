<template>
    <div id="task-view" class="cf">
        <span id="userGreeting" v-once>Hi {{user}}!</span>
        <h2>TASKS</h2>
        <button id="logout-btn" v-on:click="logout">LOGOUT</button>
    </div>
</template>

<script>

import Out from '@/components/out'

export default {
    data: function() {
        return {
            user: Out.getUser()
        }
    },

    mounted: function(){

    },

    computed: {

    },

    methods: {

        logout: function(){
            Out.logout();
            this.$router.replace('/login')
        },

        checkAuth: function(){
            this.loggedIn = Out.checkAuth()
            console.log("checking home auth")
        }
    },

}
</script>

<style>

    #logout-btn{
        position: absolute;
        top: 1em;
        left: 03em;
    }

</style>
