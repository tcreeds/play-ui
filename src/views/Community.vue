<template>
    <div id="community-page" class="section">
        <div class="container">
            <div class="hero is-primary">
                <div class="hero-body">
                    <h1 class="title">{{name}}</h1>
                </div>
            </div>
            <div class="card">
                <p class="card-content">{{description}}</p>
            </div>
            <div class="card">
                <div class="card-header">
                    <h3 class="card-header-title">Users ({{members.length}})</h3>
                </div>
                <ul class="user-list card-content">
                    <li v-for="member in members" v-bind:key="member.userId">
                        {{member.displayName}}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>

import Out from '@/components/out'

export default {
    data(){
        return {
            name: '',
            description: '',
            members: []
        }
    },

    mounted(){
        Out.getCommunityWithMembers(this.$route.params.id).then((data) => {
            this.name = data.data.name
            this.description = data.data.description
            this.members = data.data.members
        })
    }
}

</script>

<style>
</style>