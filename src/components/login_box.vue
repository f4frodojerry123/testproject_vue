<template>
    <div class="login_box">

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

        </div>

    </div>
</template>

<script>

export default {
    name: 'login_box',
    data(){
        return{
            account:"",
            password : "",
            lang_now : ""
        }
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
            }
        },
        change_lang(e){
            // console.log(e.target.classList);
            let lang = e.target.classList[0]
            this.lang_now = lang
            this.$i18n.locale = lang
        }
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

body {
  line-height: 1;
}

ol,
ul {
  list-style: none;
}

blockquote,
q {
  quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}


$xxl_breakpoint: 1919px;
$xl_breakpoint: 1440px;
$l_breakpoint: 1100px;
$lm_breakpoint: 880px;
$m_breakpoint: 768px;
$sm_breakpoint: 429px;

@mixin xxl() {
  @media all and (max-width: $xxl_breakpoint) {
    // 768px以內
    @content;
  }
}

@mixin xl() {
  @media all and (max-width: $xl_breakpoint) {
    // 768px以內
    @content;
  }
}

@mixin l() {
  @media all and (max-width: $l_breakpoint) {
    // 768px以內
    @content;
  }
}

@mixin lm() {
  @media all and (max-width: $lm_breakpoint) {
    // 768px以內
    @content;
  }
}

@mixin m() {
  @media all and (max-width: $m_breakpoint) {
    // 576px以內
    @content;
  }
}

@mixin sm() {
  @media all and (max-width: $sm_breakpoint) {
    // 576px以內
    @content;
  }
}


h2 {
  font-size: 40px;
  font-weight: 700;

  @include xl {
    font-size: 32px;
  }

  @include sm {
    font-size: 24px;
  }
}

h3 {
  font-size: 32px;

  @include xl {
    font-size: 26px;
  }

  @include sm {
    font-size: 20px;
  }
}

p {
  font-size: 20px;

  @include sm {
    font-size: 16px;
  }
}

li {
  font-size: 18px;

  @include sm {
    font-size: 16px;
  }
}

.wrapper {
  font-family: "Noto Sans TC";
  margin: 0 auto;
}

$color: (
  "blue": #1877f2,
  "l_blue": #576b95,
  "gray": #4b4f56,
  "l_gray": #d9d9d9,
  "white": #ffffff,
  "black": #000000,
);
$blue: map-get($color, "blue");
$l_blue: map-get($color, "l_blue");
$gray: map-get($color, "gray");
$l_gray: map-get($color, "l_gray");
$white: map-get($color, "white");
$black: map-get($color, "black");



  .login_box {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1440px;
    padding-top: 8px;

    .top {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      max-width: 448px;
      margin-bottom: 12px;

      input {
        width: 416px;
        box-sizing: border-box;
        padding: 12px;
        background: #f5f6f7;
        font-size: 14px;
        line-height: 18px;
        border: none;
        border-radius: 5px;
        margin-bottom: 8px;
        box-sizing: border-box;
      }

      input:focus {
        outline: none;
        border: 1px solid $gray;
        box-shadow: 0 0 5px $black;
        padding-top: 11px;
        padding-bottom: 11px;
      }

      button {
        width: 416px;
        box-sizing: border-box;
        background-color: $blue;
        color: $white;
        border: none;
        font-size: 17px;
        height: 40px;
        line-height: 40px;
        border-radius: 5px;
        margin-top: 4px;
        font-weight: 700;
        cursor: pointer;
      }
    }

    .mid {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      max-width: 448px;

      a {
        text-decoration: none;
        color: $blue;
        font-size: 14px;
        font-weight: 100;
      }

      span {
        width: 100%;
        text-align: center;
        margin-top: 12px;
        font-size: 14px;
        font-weight: 100;
        margin-bottom: 4px;
        position: relative;
      }

      span::before {
        content: "";
        position: absolute;
        height: 1px;
        left: 4%;
        right: 55%;
        top: 50%;
        background-color: $l_gray;
      }

      span::after {
        content: "";
        position: absolute;
        height: 1px;
        left: 55%;
        right: 4%;
        top: 50%;
        background-color: $l_gray;
      }

      button {
        border: none;
        width: 75%;
        margin-top: 12px;
        margin-bottom: 12px;
        padding: 4px 8px;
        font-size: 14px;
        line-height: 30px;
        border: 1px solid $gray;
        background: none;
        border-radius: 5px;
        cursor: pointer;
      }
    }

    .bottom {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      max-width: 448px;
      margin-bottom: 12px;
      padding-top: 100px;

      .lang {
        ul {
          display: flex;
          flex-wrap: wrap;
          text-align: center;
          padding-top: 12px;
          padding-bottom: 12px;

          li {
            width: 50%;
            padding-top: 12px;

            a {
              text-decoration: none;
              color: $l_blue;
            }
          }
        }

      }

      .more {
        padding-top: 12px;
        padding-bottom: 12px;

        ul {
          display: flex;
          align-items: center;

          li {
            padding: 5px;

            a {
              text-decoration: none;
              color: $l_blue;
              font-size: 14px;
            }
          }
        }
      }

      .span {
        padding-top: 12px;
        color: $l_blue;
      }
    }
  }
</style>