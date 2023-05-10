<template>
    <div class="top">
        <input type="text" :placeholder="$t('acc_placeholder')" class="account" @keyup.enter="clarify" v-model="account">
        <input type="text" :placeholder="$t('pwd_placeholder')" class="password" @keyup.enter="clarify" v-model="password">
        <button @click="clarify">{{ $t('login_btn') }}</button>
    </div>
</template>

<script>
export default {
    name: 'top_block',
    data() {
        return {
            account:"",
            password : "",
        }
    },
    props: {

    },
    methods: {
        clarify(){
            if (this.account == "abc123" && this.password == "abc123") {
                this.$emit('login_status', 'true');
            }else{
                this.password = ""
                this.$emit('login_status', 'false');
            }
        },

    },


}
</script>


<style lang="scss">

</style>