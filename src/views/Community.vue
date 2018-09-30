<template>
    <div id="community-page">
        <div class="community-header">
            <h2>{{name}}</h2>
            <p>{{description}}</p>
        </div>
        <div class="half">
            <h3>Posts</h3>
            <ul class="post-list">
                <li>Posts not implemented</li>
            </ul>
        </div>
        <div class="half">
            <h3>Users</h3>
            <ul class="user-list">
                <li v-for="member in members" v-bind:key="member.email">
                    {{member.email}}
                </li>
            </ul>
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
h3{
    text-align: left;
}
.half{
    width: 50%;
    float: left;
    padding-left: 1em;
}
.post-list{
    list-style-type: none;
    padding: 0;
    text-align: left;
}
.user-list{
    list-style-type: none;
    padding: 0;
    text-align: left;
}
</style>