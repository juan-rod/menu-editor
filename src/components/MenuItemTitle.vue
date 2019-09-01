<template>
  <div class="menu-item-title--title edit-hover" @dblclick="editMenu = true" @keyup.enter="submitEdit">
    <p v-if="!editMenu">{{itemTitle}}</p>
    <input type="text" v-model="newItemTitle" v-focus v-else>
  </div>
</template>

<script>
export default {
  name: 'menu-title',
  props: {
    itemTitle: {
      type: String
    }
  },
  data () {
    return {
      editMenu: false,
      newItemTitle: null
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
      if (this.newItemTitle.trim().length < 1) return
      this.$emit('newItemTitle', this.newItemTitle.toUpperCase())
    }
   }
}
</script>

<style style="scss">

</style>