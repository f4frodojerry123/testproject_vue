<template>
        <div class="bottom">
            <div class="lang">
                <ul>
                    <li><a class="ch" @click="change_lang">中文(台灣)</a></li>
                    <li><a class="en" @click="change_lang">English (US)</a></li>
                    <li><a class="vn" @click="change_lang">Vietnamese</a></li>
                    <li><a class="ind" @click="change_lang">Bahasa Indonesia</a></li>
                    <li><a class="pr" @click="change_lang">Português (Brasil)</a></li>
                    <li><a class="fr" @click="change_lang">Français (France)</a></li>
                    <li><a class="jp" @click="change_lang">japanese</a></li>
                    <li><a>more</a></li>
                </ul>
            </div>
            <div class="more">
                <ul>
                    <li><a href="">{{$t('about')}}</a></li>
                    <li><a href="">{{$t('info')}}</a></li>
                    <li><a href="">{{$t('more')}}</a></li>
                </ul>
            </div>
            <span>Meta 2023</span>
            <button @click="changecolor" class="color_btn">
                <h6 v-if="dark">
                    {{$t('light')}}
                </h6>
                
                <h6 v-else>
                    {{$t('dark')}}
                </h6>
                    

                
                
            </button>
        </div>
</template>

<script>
export default {
    name: 'bottom_block',
    data() {
        return {
            lang_now : "",
            dark : false,
            btntext:"深色模式"
        }
    },
    props: {

    },
    methods: {
        change_lang(e){
            this.lang_now = e.target.classList[0]
            this.$i18n.locale = this.lang_now
        },
        changecolor(){
          if(this.dark == false){
            this.dark = true;
            this.btntext = "淺色模式"
            this.$emit('child-send', 'dark');
          }
          else if(this.dark == true){
            this.dark = false;
            this.btntext = "深色模式"
            this.$emit('child-send', 'light');
          }
        }
    },


}
</script>


<style lang="scss">

</style>