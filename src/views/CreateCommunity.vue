<template>
    <div class="section">
        <div class="hero is-primary">
            <div class="hero-body">
                <h2 class="title">CREATE COMMUNITY</h2>
            </div>
        </div>
        <div class="center-block-medium">
            <div class="field">
                <label class="label">Community Name</label>
                <div class="control has-icons-left has-icons-right">
                    <input 
                        class="input" 
                        type="text" 
                        placeholder="Name"
                        v-model="name">
                </div>
            </div>
            <div class="field">
                <label class="label">Description</label>
                <div class="control">
                    <textarea 
                        class="input"
                        placeholder="Description"
                        v-model="description" />
                </div>
            </div>
            <div class="field">
                <div class="control has-text-centered">
                    <button class="button is-primary" id="create-community-button" @click="createCommunity">CREATE</button>
                </div>
            </div>
            <p v-if="error" class="help is-danger">{{ error }}</p>
        </div>
    </div>
</template>

<script>

import Out from '@/components/out'

export default {
    data: function() {
        return {
            user: Out.getUser(),
            name: '',
            description: '',
            error: ''
        }
    },

    methods: {
        createCommunity(){
            Out.createCommunity(this.name, this.description)
                .then(res => {
                    this.$router.push(`/communities/${res.data.id}`)
                })
                .catch(res => this.error = res.message)
        }
    }

}
</script>