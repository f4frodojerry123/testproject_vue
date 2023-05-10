<template>
    <div class="light" :class="{ dark: dark }">
        <div class="alert" v-if="login" @click="close_alert">
            <div class="login_bg">
            </div>
            <div class="login_text">
                <h6 v-if="login_soc_fail">
                    {{ $t('success') }}！
                </h6>
                <h6 v-else>
                    {{ $t('fail') }}！
                </h6>
            </div>
        </div>
        <h2>facebook</h2>
        <div class="login_box">
            <time_block></time_block>
            <top_block @login_status="login_event"></top_block>
            <div class="mid">
                <a href="">{{ $t('forget') }}?</a>
                <span>{{ $t('or') }}</span>
                <button>{{ $t('register') }}</button>
            </div>
            <bottom_block @child-send="change_color"></bottom_block>

        </div>
    </div>
</template>

<script>
import time_block from "./time_block.vue"
import top_block from "./top_block.vue"
import bottom_block from "./bottom_block.vue"
export default {
    name: 'login_box',
    data() {
        return {
            dark: false,
            login: false,
            login_text: "",
            login_soc_fail:true
        }
    },
    components: {
        time_block,
        top_block,
        bottom_block
    },
    props: {

    },
    methods: {
        change_color(message) {
            if (message == "dark") {
                this.dark = true;
            }
            else if (message == "light") {
                this.dark = false;
            }
        },
        login_event(message) {
            this.login = true;
            this.login_text = message
            if (message == "true") {
                this.login_soc_fail = true         
            }else{
                this.login_soc_fail = false
            }
        },
        close_alert() {
            this.login = false
        }
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" ::deep>
@import "@/assets/css/scss/style.scss";
</style>