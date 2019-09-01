<template>
  <div class="menu-header">
    <menu-header-top-border />
    <menu-header-title
      :addHeader="addHeader"
      :menuHeaderItems="menuHeaderItems"
      @addHeader="$emit('addHeader', $event)"
      @addedMenuHeaderItems="$emit('addedMenuHeaderItems', $event)"  />
  </div>
</template>

<script>
import MenuHeaderTopBorder from '@/components/MenuHeader/MenuHeaderTopBorder.vue'
import MenuHeaderTitle from '@/components/MenuHeader/MenuHeaderTitle.vue'
export default {
  name: 'Menu-Header',
  components: { MenuHeaderTopBorder, MenuHeaderTitle },
  props: {
    addHeader: {
      type: Boolean
    },
    menuHeaderItems: {
      type: Object
    }
  },
  watch: {
    menuHeaderItems (newVal) {
      console.log('MENUHEADER menuHeaderItems newVal', newVal)
    }
  }
}
</script>

<style>

</style>