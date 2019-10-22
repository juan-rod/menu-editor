<template>
  <div class="block menu-item-details--price edit-hover" @dblclick="editMenu = true" @keyup.enter="submitEdit">
    <span v-if="!editMenu">{{itemPrice}}</span>
    <input type="text" v-model="newItemPrice" v-focus v-else>
  </div>
</template>

<script>
export default {
  name: 'menu-price',
  props: {
    itemPrice: {
      type: [ Number, String ]
    }
  },
  data () {
    return {
      editMenu: false,
      newItemPrice: null
    }
  },
  directives: {
    focus: {
      // directive definition
      inserted: function (el) {
        el.focus()
      }
    }
  },
   methods: {
    submitEdit () {
      this.editMenu = false
      console.log('this.newItemPrice', this.newItemPrice)
      if (this.newItemPrice.trim().length < 1) return
      this.$emit('newItemPrice', this.newItemPrice)
    }
   }
}
</script>

<style>

</style>