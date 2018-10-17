<template>
    <div class="section">
        <div class="hero is-primary">
            <div class="hero-body">
                <h2 class="title">CREATE COMMUNITY</h2>
            </div>
        </div>
        <div class="alert alert-danger" v-if="error">
            <p>{{ error }}</p>
        </div>
        <div>
            <div class="form-group">
                <input
                type="text"
                class="form-control"
                placeholder="name"
                v-model="name">
            </div>
            <label >description</label>
            <div class="form-group">
                <textarea
                class="form-control"
                v-model="description"></textarea>
            </div>
            <button @click="createCommunity">CREATE</button>
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