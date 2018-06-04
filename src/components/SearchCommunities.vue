<template>
    <div id="search-communities">
        <ul>
            <li v-for="community in communities" v-on:click="goToProfile(community.id)" :key="community.id">
                <h3>{{community.name}}</h3>
                <p>{{community.description}}</p>
                <ul>
                    <li v-for="member in community.members">
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
        goToProfile(id){
            this.$router.replace("/communities/" + id)
        }
    }
}
</script>
