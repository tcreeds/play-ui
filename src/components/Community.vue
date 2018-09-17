<template>
    <div id="community-page">
        <h2>{{name}}</h2>
        <p>{{description}}</p>
        <ul>
            <li v-for="member in members" v-bind:key="member.email">
                {{member.email}}
            </li>
        </ul>
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
