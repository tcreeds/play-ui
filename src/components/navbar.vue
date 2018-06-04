<template>
    <div id="navbar">
        <button id="logout-btn" v-on:click="logout">LOGOUT</button>
        <img src="../assets/logo.png">
    </div>
</template>

<script>

import Out from '@/components/out'

export default {

    methods: {
        logout: function(){
            Out.logout();
            this.$router.replace('/login')
        }
    }
}

</script>
