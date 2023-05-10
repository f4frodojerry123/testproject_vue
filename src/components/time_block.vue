<template>
    <div class="time" id="time">
        <div class="h3">{{ $t('time') }}</div>
        <h6>{{ nowDay }}</h6>
        <h6>{{ nowTime }}</h6>
    </div>
</template>

<script>
export default {
    name: 'time_block',
    data() {
        return {
            nowDay: '',
            nowTime: ''

        }
    },
    props: {

    },
    created() {
        this.nowTimes();
    },
    mounted() {

    },
    methods: {
        timeFormate(timeStamp) {
            let newdate = new Date(timeStamp);
            let year = newdate.getFullYear();
            let month = newdate.getMonth() + 1 < 10 ? "0" + (newdate.getMonth() + 1) : newdate.getMonth() + 1;
            let date = newdate.getDate() < 10 ? "0" + newdate.getDate() : newdate.getDate();
            let hh = newdate.getHours() < 10 ? "0" + newdate.getHours() : newdate.getHours();
            let mm = newdate.getMinutes() < 10 ? "0" + newdate.getMinutes() : newdate.getMinutes();
            let ss = newdate.getSeconds() < 10 ? "0" + newdate.getSeconds() : newdate.getSeconds();
            this.nowTime = hh + ":" + mm + ":" + ss;
            this.nowDay = year + "/" + month + "/" + date ;
        },
        // 定時器函數
        nowTimes() {
            let self = this;
            self.timeFormate(new Date());
            setInterval(function () {
                self.timeFormate(new Date());
            }, 1000);
        },
    },


}
</script>


<style scoped>
@import "@/assets/css/scss/common/__reset.scss";
.h3{
    text-align: center;
}
h6{
    margin-top: 5px;
    margin-bottom: 5px;
    text-align: center;
}
</style>