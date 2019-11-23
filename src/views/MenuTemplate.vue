<template>
  <div class="menu-template-container">
    <div :class="{'hide-print': scaleForPrint}"></div>
    <!-- <menu-editor
      @createNewItem="createNewItem"
      @printMenu="printMenu" /> -->
    <div id="nodeToRenderAsPDF" class="menu-template" :class="{ 'scaleForPrint':  scaleForPrint}" size="A4">
      <!-- <img class="test-menu" src="../../dist/images/Bootys_BRUNCH_Menu-10-25.png" alt=""> -->
      <menu-header :headerTitle="headerTitle"></menu-header>
      <menu-body
        :menuItems="menuItems">
      </menu-body>
      <menu-footer />
    </div>
  </div>
</template>

<script>
import MenuEditor from '@/components/MenuEditor.vue'
import MenuBody from '@/components/MenuBody/MenuBody.vue'
import MenuHeader from '@/components/MenuHeader.vue'
import MenuFooter from '@/components/MenuFooter.vue'
import { menuCollection } from '../firebase'
import { mapState } from 'vuex'
import { printMenu as print } from '@/utils/print'
export default {
  name: 'MenuTemplate',
  components: { MenuBody, MenuHeader, MenuFooter ,MenuEditor },
  data () {
    return {
      scaleForPrint: false,
      demoItems: {
        title: 'RIPE MANGO SALAD',
        location: "BANKOK, THAILAND| 14°5'N 90°5667'W",
        price: 13,
        description: 'poached shrimp, shredded coconut, bean sprouts, carrot, red onion, scallion, peanuts, cilantro, basil'
      }
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    async getData () {
      await this.$store.dispatch('setMenu')
    },
    async createNewItem () {
      if (this.menuItemLimit()) {
        window.alert('can not add more than 9 per page')
        return
      }
      await menuCollection.add({
        ...this.demoItems,
        createdAt: new Date()
      })
      this.getData()
    },
    menuItemLimit () {
      return this.menuItems.length + 1 > 9
    },
    printMenu () {
      this.scaleForPrint = true
      print()
    }
  },
  computed: {
    headerTitle () {
      return this.$route.params.id
    }, 
    ...mapState([
      'menuItems'
    ])
  }
}
</script>

<style>

</style>