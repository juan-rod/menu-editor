<template>
  <div id="side-tool-bar" class="side-tool-bar">
    <ul>
      <li>Templates</li>
      <li v-for="mType in menuTypes" :key="mType.menu_type" @click="getMenu(mType.menu_type)">
        {{mType.name}}
      </li>
    </ul>
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
    return {
      menuTypes: [
        {
          name: 'Brunch',
          menu_type: 'brunch'
        },
        {
          name: 'Hot Stuff',
          menu_type: 'hotstuff'
        },
        {
          name: 'K.I.S.S.',
          menu_type: 'kiss'
        },
        {
          name: 'Dinner',
          menu_type: 'dinner'
        },
        {
          name: 'Cocktails',
          menu_type: 'cocktails'
        },
        {
          name: 'Happy Hour',
          menu_type: 'happy_hour'
        },
        {
          name: 'Inserts',
          menu_type: 'inserts'
        }
        ]
    }
  },
  methods: {
    getMenu(menuType) {
      console.log('menuType', menuType)
      // this.$store.dispatch('getMenu', menuType)
    }
  }
}
</script>

<style>

</style>