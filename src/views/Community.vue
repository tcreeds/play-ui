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
            <div>
                <div v-if="userIsMember">
                    <div>
                        <textarea placeholder="New Post..." v-model="newPostText"></textarea>
                        <div v-if="newPostBoxHasText">
                            <button @click="createPost">POST</button>
                        </div>
                    </div>
                    <ul class="card">
                        <li class="card-content" v-for="post in posts" v-bind:key="post.id">
                            <p>{{post.user.displayName}}:</p>
                            <p>{{post.content}}</p>
                        </li>
                    </ul>
                </div>
                <div v-else>
                    <button @click="joinThisGroup">JOIN</button>
                </div>
            </div>
            <div class="card">
                <div class="card-header">
                    <h3 class="card-header-title">Users ({{members.length}})</h3>
                </div>
                <ul class="card-content">
                    <li v-for="member in members" v-bind:key="member.userId" >
                        <span @click="goToUserProfile(member.id)">{{member.displayName || '(No display name for user)'}}</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>

import Out from '@/components/out'
import { mapState, mapActions } from 'vuex'

export default {
    data(){
        return {
            name: '',
            description: '',
            members: [],
            posts: [],
            userIsMember: false,
            newPostText: ''
        }
    },

    computed: {
        ...mapState({
            userId: state => state.auth.userId
        }),
        newPostBoxHasText: function() { return this.newPostText.length > 0 }
    },

    mounted(){
        Out.getCommunityWithMembers(this.$route.params.id).then((data) => {
            this.name = data.data.name
            this.description = data.data.description
            this.members = data.data.members
            this.userIsMember = this.members.find(user => user.id == this.userId)
        })
        this.getPosts(this.$route.params.id).then(data => {
            this.posts = data.data
        })
    },

    methods: {

        ...mapActions(['getPosts', 'addPost', 'joinGroup']),

        goToUserProfile(id){
            this.$router.push(`/profile/${id}`)
        },

        createPost(){
            this.addPost({
                community: this.$route.params.id,
                content: this.newPostText
            })
        },

        joinThisGroup(){
            this.joinGroup(this.$route.params.id)
        }
    }
}

</script>

<style>
</style>