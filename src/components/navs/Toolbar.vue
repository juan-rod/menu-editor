<template>
  <div id="side-tool-bar" class="side-tool-bar">
    <ul>
      <li>New Page</li>
      <li>Add Item</li>
      <li @click="$emit('printMenu')">Download</li>
      <li>Save</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Toolbar',
  data () {
    return {}
  },
  methods: {
    
  }
}
</script>

<style>

</style>