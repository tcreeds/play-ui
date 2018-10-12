<template>
    <div id="task-view" class="cf">
        <div class="column">
            <span id="userGreeting" v-once>Hi {{username}}!</span>
            <h2>HOME</h2>
            <button @click="goToCommunities">COMMUNITIES</button>
        </div>
    </div>
</template>

<script>

import Out from '@/components/out'
import { mapState } from 'vuex'

export default {
    data: function() {
        return {
        }
    },

    computed: {
        ...mapState(['username'])
    },

    methods: {
        goToCommunities(){
            this.$router.replace('/communities')
        }
    }

}
</script>

<style>

</style>
