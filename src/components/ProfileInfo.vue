<template>
    <div class="container">
        <label>Display Name: </label><p>{{displayName}}</p>
        <label>Bio: </label><p>{{bio}}</p>
    </div>
</template>

<script>

export default {
    props: {
        displayName: {
            type: String,
            default: ''
        },
        bio: {
            type: String,
            default: ''
        }
    }
}
</script>