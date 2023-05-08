<template>
  <h2>facebook</h2>
  <login_box></login_box>
</template>

<script>
import login_box from './components/login_box.vue'
export default {
  name: 'App',
  components: {
    login_box
  }
}
</script>
<style lang="scss">
      h2{
        color: #1877f2;
        padding-top: 8px;
        text-align: center;
    }
</style>
