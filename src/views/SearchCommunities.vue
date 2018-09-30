<template>
    <div id="search-communities">
        <button v-on:click="goToCreateCommunity">CREATE COMMUNITY</button>
        <ul class="community-list">
            <li v-for="community in communities" v-on:click="goToCommunity(community.id)" :key="community.id">
                <h3>{{community.name}}</h3>
                <p>{{community.description}}</p>
                <ul>
                    <li v-for="member in community.members" v-bind:key="member.id">
                        <p>{{member.email}}</p>
                    </li>
                </ul>
            </li>
        </ul>
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
            this.$router.replace("/communities/" + id)
        },
        goToCreateCommunity(id){
            this.$router.replace("/create-community")
        }
    }
}
</script>

<style>
.community-list{
    list-style-type: none;
    padding: 0;
}
</style>
