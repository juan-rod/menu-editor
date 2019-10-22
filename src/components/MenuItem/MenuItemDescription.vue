<template>
  <div class="menu-item-body--description edit-hover" @dblclick="editMenu = true" @keyup.enter="submitEdit">
    <p v-if="!editMenu">{{itemDescription}}</p>
    <textarea v-model="newItemDescription" v-focus name="menuDescription" id="" cols="70" rows="5" v-else></textarea>
  </div>
</template>

<script>
export default {
  name: 'menu-Description',
  props: {
    itemDescription: {
      type: String
    }
  },
  data () {
    return {
      editMenu: false,
      newItemDescription: null
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
      console.log('hello from description')
      console.log('this.newItemDescription', this.newItemDescription)
      console.log('this.newItemDescription.length', this.newItemDescription.trim().length)
      if (this.newItemDescription.trim().length < 1) return
      this.$emit('newItemDescription', this.newItemDescription)
    }
   }
}
</script>

<style>

</style>