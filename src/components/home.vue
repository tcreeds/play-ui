<template>
    <div id="task-view" class="cf">
        <span id="userGreeting" v-once>Hi {{user}}!</span>
        <h2>HOME</h2>
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

}
</script>

<style>

    #logout-btn{
        position: absolute;
        top: 1em;
        left: 03em;
    }

</style>
