<template>
  <div class="menu-body">
    <div class="menu-item-card" v-for="item in menuItems" :key="item.id">
        <menu-item :item="item" @removeItem="removeMenuItem"/>
    </div>
  </div>
</template>

<script>
import MenuItem from '@/components/MenuBody/MenuItem.vue'
import { menuCollection } from '../../firebase'
export default {
  name: 'MenuBody',
  props: {
    menuItems: {
      type: Array
    }
  },
  components: { MenuItem },
  methods: {
    async getData () {
      await this.$store.dispatch('setMenu')
    },
    async removeMenuItem (id) {
      await menuCollection.doc(id).delete()
      await this.getData()
    },
  }
}
</script>

<style>

</style>