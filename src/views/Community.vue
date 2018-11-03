<template>
    <div id="community-page" class="section">
        <div class="container">
            <div class="hero is-primary">
                <div class="hero-body">
                    <h1 class="title">{{name}}</h1>
                </div>
            </div>
            <div class="card">
                <div class="card-content">
                    <p class="description">{{description}}</p>
                    <div v-if="!userIsMember">
                        <button class="button is-primary" @click="joinThisGroup">JOIN THIS GROUP</button>
                    </div>
                </div>
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
            </div>
            <div class="card">
                <div class="card-header">
                    <h3 class="card-header-title">Admins ({{admins.length}})</h3>
                </div>
                <ul class="card-content">
                    <li v-for="admin in admins" v-bind:key="admin.userId" >
                        <span @click="goToUserProfile(admin.id)">{{admin.displayName || '(No display name for user)'}}</span>
                    </li>
                </ul>
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
            admins: [],
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
            this.members = data.data.members || []
            this.admins = data.data.admins || []
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
    .description{
        padding-bottom: 0.8em;
    }
</style>