<template>
  <div
    class="edit-hover"
    @dblclick="editMenu = true"
    @keyup.enter="submitEdit">
      <p v-if="!editMenu">{{item}}</p>
      <input type="text" v-model="newItem" v-focus v-else>
  </div>
</template>

<script>
export default {
  name: 'menu-title',
  props: ['item', 'itemType'],
  data () {
    return {
      editMenu: false,
      newItem: null
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
      if (this.newItem.trim().length < 1) return
      let updatedItem = { 
        itemType : this.itemType,
        itemVal: this.newItem.toUpperCase()
      }
      this.$emit('updatedItem', updatedItem)
    }
   }
}
</script>

<style style="scss">

</style>