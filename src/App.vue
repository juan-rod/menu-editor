<template>
  <div id="app">
    <!-- <nav-bar/> -->
    <router-view/>
  </div>
</template>
<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'app',
  components: {
    NavBar
  },
  data () {
    return {
      menuClicked: false
    }
  }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";
</style>
