<template>
  <div class="nav-editor">
    <div class="button" @click="$emit('createNewItem')">Add New Menu Item</div>
    <div class="button">Add New Page</div>
  </div> 
</template>

<script>
export default {
  name: 'nav-editor'
}
</script>

<style>

</style>