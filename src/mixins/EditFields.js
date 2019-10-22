export default {
  data () {
    return {
      newItem: null,
      editItem: false
    }
  },
  watch: {
    item (newVal) {
      console.log('EditLeftTitle newVal', newVal)
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
      // make this a mixin or just utils
      this.editItem = false
      if (this.newItem.trim().length < 1) return
      this.$emit('newItem', this.newItem.toUpperCase())
    }
  }
}