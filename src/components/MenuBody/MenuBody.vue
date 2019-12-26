<template>
  <div class="menu-body">
    <div class="menu-item-card" v-for="item in menuItems" :key="item.id" :class="{'brunch-break': setPageBreak}" :data-type="item.type">
      <menu-item :item="item" @removeItem="removeMenuItem"/>
    </div>
  </div>
</template>

<script>
import MenuItem from '@/components/MenuBody/MenuItem.vue'
import { menuCollection } from '../../firebase'
import { mapState } from 'vuex'
export default {
  name: 'MenuBody',
  props: {
    menuItems: {
      type: Array
    }
  },
  watch: {

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
    async setPageBreak () {
      let getTypes = await document.querySelectorAll(["data-type='drink'"])
      console.log('getTypes', getTypes)
      return false
    },
  },
  computed: {
    isBrunch () {
      console.log('this.currentMenuType', this.currentMenuType)
      return this.currentMenuType === 'brunch' ? true : false
    },
    // setPageBreak () {
    //   let getTypes = document.querySelectorAll(["data-type='drink'"])
    //   console.log('getTypes', getTypes)
    // },
    ...mapState([
      'currentMenuType'
    ])
  }
}
</script>

<style>

</style>