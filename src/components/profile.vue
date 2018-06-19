<template>
    <p>{{user}}</p>
</template>

<script>

import Out from '@/components/out'

export default {

    data(){
        return {
            user: Out.getUser()
        }
    }

}

</script>

<style>

</style>
