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
import { Action } from '@/store/menu/types'
import { mapGetters } from 'vuex'
export default {
  name: 'Dashboard',
  data () {
    return {
      selected: false
    }
  },
  computed: {
    ...mapGetters('menu',['menuId'])
  },
  methods: {
   async createNewMenu () {
      await this.$store.dispatch(`menu/${Action.CREATE_NEW_MENU}`)
      this.selected = true
      this.$router.push({ path: `/new-menu/${this.menuId}` })
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