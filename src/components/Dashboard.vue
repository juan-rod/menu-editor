<template>
  <div class="dashboard">
    <button class="new-menu" @click="createNewMenu">
      <h1>Create New Menu</h1>
    </button>
    <button class="edit-menu">
      <h1>Edit A Menu</h1>
    </button>
    <!-- <component :is="menuSelection"></component> -->
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  methods: {
   async createNewMenu () {
      await this.$store.dispatch('createNewMenu')
      let menuId = await this.$store.getters.currentMenuId
      this.$router.push({ path: `/new-menu/${menuId}` })
    }
  }

}
</script>

<style>

</style>