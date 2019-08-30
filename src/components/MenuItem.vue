<template>
<div class="menu-item-wrapper">
    <div class="menu-item-header">
      <div class="menu-item-title">
        <menu-title :itemTitle="itemTitle" @newItemTitle="setTitle"/>
        <menu-location :itemLocation="itemLocation" @newItemLocation="setLocation"/>

      </div>
      <div class="menu-item-details">
        <menu-price class="block" :itemPrice="itemPrice" @newItemPrice="setPrice"/>
        <div class="block">
          <p>FROM A</p>
          <span>C</span>
          <p>CONE</p>
        </div>
        <div class="block">
          <p>WITH YOUR</p>
          <span>H</span>
          <p>HANDS</p>
        </div>
        <div class="block">
          <p>ON A</p>
          <span>S</span>
          <p>STICK</p>
        </div>
      </div>
    </div>
    <div class="menu-item-body" @dblclick="editMenu = true" @keyup.enter="submitEdits">
      <menu-description :itemDescription="itemDescription" @newItemDescription="setDescription"/>
    </div>
  </div>
</template>

<script>
import MenuTitle from '@/components/MenuItemTitle'
import MenuLocation from '@/components/MenuItemLocation'
import MenuPrice from '@/components/MenuItemPrice'
import MenuDescription from '@/components/MenuItemDescription'
export default {
  name: 'menu-item',
  components : {
    MenuTitle,
    MenuLocation,
    MenuPrice,
    MenuDescription
  },
  props: {
    item: {
      type: Object
    }
  },
  watch: {
    item (newVal) {
      console.log('item newVal', newVal)
    },
    itemTitle (newVal) {
      console.log('itemTitle newVal', newVal)
    }
  },
  data () {
    return {
      editMenu: false,
      itemTitle: this.item.title,
      itemLocation: this.item.location,
      itemPrice: this.item.details.price,
      itemDescription: this.item.description
    }
  },
  methods: {
    setTitle (data) {
      this.itemTitle = data
    },
    setLocation (data) {
      this.itemLocation = data
    },
    setPrice (data) {
      this.itemPrice = data
    },
    setDescription (data) {
      console.log('setDescription data', data)
      this.itemDescription = data
    },
    submitEdits () {
      this.editMenu = false
      // console.log('this.newMenuItems', this.newMenuItems)
      // console.log('this.itemTitle', this.itemTitle)
      const newMenuItems = {
        title: this.itemTitle,
        location: this.itemLocation,
        details: {
          price: this.itemPrice,
          from: 'from a cone',
          with: 'with your hands',
          on: 'on a stick'
        },
        description: this.itemDescription
      }
      this.$emit('addedMenuItems', newMenuItems)
    }
  }

}
</script>

<style>

</style>