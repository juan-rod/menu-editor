<template>
  <div class="menu-header">
    <menu-header-top-border />
    <menu-header-title
      :addHeader="addHeader"
      @addHeader="$emit('addHeader', $event)"  />
  </div>
</template>

<script>
import MenuHeaderTopBorder from '@/components/MenuHeaderTopBorder.vue'
import MenuHeaderTitle from '@/components/MenuHeaderTitle.vue'
export default {
  name: 'Menu-Header',
  components: { MenuHeaderTopBorder, MenuHeaderTitle },
  props: {
    addHeader: {
      type: Boolean
    }
  }
}
</script>

<style>

</style>