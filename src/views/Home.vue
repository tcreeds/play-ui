<template>
    <div id="task-view" class="section">
        <div class="container">
            <div class="hero is-primary">
                <div class="hero-body">
                    <h2 class="title">HOME</h2>
                </div>
            </div>
            <div class="card">
                <p class="card-content">Check out the list of <span class="link" @click="goToCommunities">communities</span></p>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data: function() {
        return {
        }
    },

    methods: {
        goToCommunities(){
            this.$router.push('/communities')
        }
    }

}
</script>

<style>

</style>
