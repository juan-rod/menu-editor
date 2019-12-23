<template>
  <div class="dashboard">
    <div class="buttons" v-if="!selected">
      <button class="new-menu" @click="createNewMenu">
        <h1>Create New Menu</h1>
      </button>
      <button class="edit-menu">
        <h1>Edit A Menu</h1>
      </button>
    </div>
    <menu-template v-else />
    <!-- <component :is="menuSelection"></component> -->
  </div>
</template>

<script>
import MenuTemplate from '@/views/MenuTemplate'
export default {
  name: 'Dashboard',
  data () {
    return {
      selected: false
    }
  },
  methods: {
   async createNewMenu () {
      await this.$store.dispatch('createNewMenu')
      let menuId = await this.$store.getters.currentMenuId
      this.$router.push({ path: `/new-menu/${menuId}` })
      this.selected = true
      setTimeout(() => {
        this.$emit('showTools', true)
      }, 200);
    }
  },
  components: { MenuTemplate }

}
</script>

<style>

</style>