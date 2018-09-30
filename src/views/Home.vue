<template>
    <div id="task-view" class="cf">
        <div class="column">
            <span id="userGreeting" v-once>Hi {{user}}!</span>
            <h2>HOME</h2>
            <button @click="goToCommunities">COMMUNITIES</button>
        </div>
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

    methods: {
        goToCommunities(){
            this.$router.replace('/communities')
        }
    }

}
</script>

<style>

</style>
