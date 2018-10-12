<template>
    <div class="section">
        <div class="hero is-primary">
            <div class="hero-body">
                <p class="title">{{user}}</p>
                <p class="subtitle">{{username}}</p>
            </div>
        </div>
    </div>
</template>

<script>

import Out from '@/components/out'
import { mapState } from 'vuex'

export default {

    data(){
        return {
            user: Out.getUser()
        }
    },

    computed: {
        ...mapState({
            username: state => state.auth.username
        })
    }

}

</script>

<style>

</style>
