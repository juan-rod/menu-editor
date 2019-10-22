<template>
<div class="menu-item-wrapper">
    <div class="menu-item-header">
      <div class="menu-item-title">
        <menu-title :itemTitle="itemTitle" @newItemTitle="setTitle" @keyup.enter="submitEdits"/>
        <menu-location :itemLocation="itemLocation" @newItemLocation="setLocation" @keyup.enter="submitEdits"/>
      </div>
      <div class="menu-item-details">
        <menu-price class="block" :itemPrice="itemPrice" @newItemPrice="setPrice" @keyup.enter="submitEdits"/>
      </div>
    </div>
    <div class="menu-item-body" @dblclick="editMenu = true" @keyup.enter="submitEdits">
      <menu-description :itemDescription="itemDescription" @newItemDescription="setDescription" @keyup.enter="submitEdits"/>
    </div>
    <div class="removeItemBtn" @click="$emit('removeItem', item.id)"></div>
  </div>
</template>

<script>
import MenuTitle from '@/components/MenuItem/MenuItemTitle'
import MenuLocation from '@/components/MenuItem/MenuItemLocation'
import MenuPrice from '@/components/MenuItem/MenuItemPrice'
import MenuDescription from '@/components/MenuItem/MenuItemDescription'
// import { clickOutside } from '../directives/ClickOutside';
export default {
  name: 'menu-item',
  components : {
    MenuTitle,
    MenuLocation,
    MenuPrice,
    MenuDescription
  },
  // directives: {
  //   clickOutside
  // },
  props: {
    item: {
      type: Object
    }
  },
  mounted () {
    this.setPriceContainerHeight()
  },
  data () {
    return {
      editMenu: false,
      itemTitle: this.item.title,
      itemLocation: this.item.location,
      itemPrice: this.item.price,
      itemDescription: this.item.description
    }
  },
  methods: {
    setTitle (data) {
      this.itemTitle = data
      this.submitEdits()
    },
    setLocation (data) {
      this.itemLocation = data
      this.submitEdits()
    },
    setPrice (data) {
      this.itemPrice = data
      this.submitEdits()
    },
    setDescription (data) {
      this.itemDescription = data
      this.submitEdits()
    },
    setPriceContainerHeight () {
      let titleContainer = document.querySelector('.menu-item-title')
      let priceContainer = document.querySelectorAll('.menu-item-details')
      let titleContainerHeight = titleContainer.clientHeight + 'px'

      priceContainer.forEach(item => item.style.height = titleContainerHeight)
    },
    submitEdits () {
      this.editMenu = false
      const newMenuItems = {
        id: this.item.id,
        title: this.itemTitle,
        location: this.itemLocation,
        price: this.itemPrice,
        description: this.itemDescription
      }
      this.$emit('addedMenuItems', newMenuItems)
    }
  }

}
</script>

<style>

</style>