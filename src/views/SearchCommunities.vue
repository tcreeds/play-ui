<template>
    <div id="search-communities" class="section is-medium">
        <div class="container">
            <div class="level">
                <button v-on:click="goToCreateCommunity">CREATE COMMUNITY</button>
            </div>
            <ul class="community-list">
                <li v-for="community in communities" v-on:click="goToCommunity(community.id)" :key="community.id" class="card">
                    <div class="card-header">
                        <h2 class="card-header-title">{{community.name}}</h2>
                    </div>
                    <div class="card-content">
                        <p>{{community.description}}</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

import Out from '@/components/out'

export default {
    data: function(){
        return {
            communities: []
        }
    },

    mounted: function(){
        Out.getCommunities().then((data) => {
            console.log(data)
            this.communities = data.data
        })
    },

    methods: {
        goToCommunity(id){
            this.$router.push("/communities/" + id)
        },
        goToCreateCommunity(){
            this.$router.push("/create-community")
        }
    }
}
</script>

<style>

</style>
