<template>
  <div class="light" :class="{ dark: dark }">
    
  <h2 >facebook</h2>
    <div class="login_box">
      <time_block></time_block>
        <div class="top">
            <input type="text" 
            :placeholder="$t('acc_placeholder')" class="account" 
            @keyup.enter="clarify"
            v-model="account" >
            <input type="text" 
            :placeholder="$t('pwd_placeholder')" class="password" 
            @keyup.enter="clarify"
            v-model="password">
            <button @click="clarify">{{$t('login_btn')}}</button>
        </div>
        <div class="mid">
            <a href="">{{$t('forget')}}?</a>
            <span>{{$t('or')}}</span>
            <button>{{$t('register')}}</button>
        </div>
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
            <button @click="changecolor" class="color_btn">{{btntext}}</button>
        </div>

    </div>
  </div>
</template>

<script>
import time_block from "./time_block.vue"
export default {
    name: 'login_box',
    data(){
        return{
            account:"",
            password : "",
            lang_now : "",
            dark : false,
            btntext:"深色模式"
        }
    },
    components: {
    time_block
    },
    props: {
        
    },
    methods:{
        clarify(){
            if (this.account == "abc123" && this.password == "abc123") {
                // console.log(this.$i18n);
                // alert(this.$i18n.messages.en.success)
                alert("登入成功")
            }else{
               
                alert("帳號或密碼輸入錯誤")
                this.password = ""
            }
        },
        change_lang(e){
            // console.log(e.target.classList);
            let lang = e.target.classList[0]
            this.lang_now = lang
            this.$i18n.locale = lang
        },
        changecolor(){
          if(this.dark == false){
            this.dark = true;
            this.btntext = "淺色模式"
          }
          else if(this.dark == true){
            this.dark = false;
            this.btntext = "深色模式"
          }
        }
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
@import "@/assets/css/scss/style.scss";

</style>