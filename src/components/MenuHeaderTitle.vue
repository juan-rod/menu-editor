<template>
  <div class="menu-header-title" v-if="addHeader">
    <div class="title-left">
      <p class="label">Provisions:</p>
      <p class="provisions">Summmer '15</p>
    </div>
    <div class="title-right" v-if="showRightBox">
      <p class="right-title">Some Special Info</p>
      <p class="right-details">special details go here</p>
      <div class="removeItemBtn" @click="showRightBox = false"></div>
    </div>
    <div class="removeItemBtn" @click="$emit('addHeader', false)"></div>
  </div>
</template>

<script>
export default {
  name: 'Menu-Header-Title',
  props: {
    addHeader: {
      type: Boolean
    }
  },
  data () {
    return {
      showRightBox: true
    }
  }
}
</script>

<style>

</style>