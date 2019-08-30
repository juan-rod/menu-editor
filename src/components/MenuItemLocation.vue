<template>
  <div class="menu-item-title--location edit-hover" @dblclick="editMenu = true" @keyup.enter="submitEdit">
    <p v-if="!editMenu">{{itemLocation}}</p>
    <input type="text" v-model="newItemLocation" v-focus v-else>
  </div>
</template>

<script>
export default {
  name: 'menu-location',
  props: {
    itemLocation: {
      type: String
    }
  },
  data () {
    return {
      editMenu: false,
      newItemLocation: null
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
      console.log('this.newItemLocation', this.newItemLocation)
      if (!this.newItemLocation || this.newItemLocation.trim().length < 1) return
      this.$emit('newItemLocation', this.newItemLocation.toUpperCase())
    }
   }
}
</script>

<style>

</style>