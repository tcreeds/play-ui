<template>
    <div class="field">
        <label class="label">Email</label>
        <div class="control has-icons-left has-icons-right">
            <input 
                class="input" 
                type="email" 
                placeholder={{placeholder}} 
                @keypress="onKeyPress" 
                v-model="credentials.email">
            <span class="icon is-small is-left">
                <font-awesome-icon icon={{icon}} />
            </span>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            value: this.value
        }
    },
    props: {
        placeholder: {
            type: String,
            default: ''
        },
        icon: {
            type: String,
            default: ''
        },
        onKeyPress: {
            type: Function
        }
    }
}
</script>