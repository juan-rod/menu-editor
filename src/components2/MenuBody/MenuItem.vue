<template>
  <div class="menu-item">
    <div class="menu-item-description">
      <menu-item-component
        class="menu-item-title"
        :item="item.title"
        :itemType="'title'"
        @updatedItem="updateItem" />
      <menu-item-component
        class="menu-item-location"
        :item="item.location"
        :itemType="'location'"
        v-if="!item.location"
        @updatedItem="updateItem"/>
      <menu-item-component
        class="menu-item-details"
        :item="item.description"
        :itemType="'description'"
        @updatedItem="updateItem" />
    </div>
    <menu-item-component
      class="menu-item-price"
      :item="item.price"
      :itemType="'price'"
      @updatedItem="updateItem" />
    <div class="removeItemBtn" @click="$emit('removeItem', item.id)"></div>
  </div>
</template>

<script>
import { menuCollection } from '../../firebase'
import MenuItemComponent from '@/components2/MenuBody/MenuItemComponent'
export default {
  name: 'MenuItem',
  props: ['item'],
  components : { MenuItemComponent },
  methods: {
    async getData () {
      await this.$store.dispatch('setMenu')
    },
    updateItem (data) {
      console.log('updateItem data', data)
      this.item[data.itemType] = data.itemVal
      console.log('updateItem this.item', this.item)
      this.updateFirebase()
      this.getData()
    },
    updateFirebase () {
      menuCollection.doc(this.item.id).update({
        ...this.item
      })
    }
  }
}
</script>

<style>

</style>