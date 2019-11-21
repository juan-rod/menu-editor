<template>
  <div class="menu-template-container">
    <menu-editor
      @createNewItem="createNewItem"
      @printMenu="printMenu" />
    <div id="nodeToRenderAsPDF" class="menu-template" :class="{ 'scaleForPrint':  scaleForPrint}" size="A4">
      <!-- <img src="../../dist/images/Bootys_BRUNCH_Menu-10-25.png" alt=""> -->
      <menu-header :headerTitle="headerTitle"></menu-header>
      <menu-body
        :menuItems="menuItems">
      </menu-body>
    </div>
  </div>
</template>

<script>
import MenuEditor from '@/components/MenuEditor.vue'
import MenuBody from '@/components/MenuBody/MenuBody.vue'
import MenuHeader from '@/components/MenuHeader.vue'
import { menuCollection } from '../firebase'
import { mapState } from 'vuex'
import { printMenu as print } from '@/utils/print'
import { router } from '../router'
// import jsPDF from 'jspdf'
// import html2canvas from 'html2canvas'
export default {
  name: 'MenuTemplate',
  components: { MenuBody, MenuHeader, MenuEditor },
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
    },
    handleChanged (delta) {
      console.log('delta', delta)
    }
  },
  created () {
    // browser.downloads.onChanged.addListener(this.handleChanged)
    // browser.downloads.onChanged.removeListener(listener)
  },
  computed: {
    headerTitle () {
      console.log('this.$route', this.$route)
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