<template>
  <div class="menu-template-container">
    <menu-editor
      @createNewItem="createNewItem"
      @printMenu="printMenu" />
    <div id="nodeToRenderAsPDF" class="menu-template" :class="{ 'scaleForPrint':  scaleForPrint}" size="A4">
      <!-- <img src="../../dist/images/Bootys_BRUNCH_Menu-10-25.png" alt=""> -->
      <menu-header></menu-header>
      <menu-body
        :menuItems="menuItems">
      </menu-body>
    </div>
  </div>
</template>

<script>
import MenuEditor from '@/components2/MenuEditor.vue'
import MenuBody from '@/components2/MenuBody/MenuBody.vue'
import MenuHeader from '@/components2/MenuHeader.vue'
import { menuCollection } from '../firebase'
import { mapState } from 'vuex'
import { printMenu as print } from '@/utils/print'
// import jsPDF from 'jspdf'
// import html2canvas from 'html2canvas'
export default {
  name: 'menuTemplate',
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
      console.log('this.menuItems', this.menuItems)
      if (this.menuItemLimit()) {
      console.log('this.menuItem + 1 > 9', this.menuItems.length + 1 >= 9)
        console.log('hey from true',)
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
      console.log('hello from print')
      // const pageToPrint = document.querySelector('#nodeToRenderAsPDF')
      // let pageToPrintWidth = pageToPrint.clientWidth
      // let pageToPrintHeight = pageToPrint.clientHeight
      // pageToPrintWidth = (pageToPrintWidth * 2.54) / 96
      // pageToPrintHeight = (pageToPrintHeight * 2.54) / 96
      // console.log('1. pageToPrintWidth', pageToPrintWidth)
      // console.log('pageToPrintHeight', pageToPrintHeight)
      // pageToPrintWidth = pageToPrintWidth * 3
      // pageToPrintHeight = pageToPrintHeight * 3
      // console.log('2. pageToPrintWidth', pageToPrintWidth)
      // console.log('pageToPrintHeight', pageToPrintHeight)
      print()
    },
    handleChanged (delta) {
      console.log('delta', delta)
    }
  },
  created () {
    browser.downloads.onChanged.addListener(this.handleChanged)
    browser.downloads.onChanged.removeListener(listener)
  },
  computed: mapState([
    'menuItems'
  ])
}
</script>

<style>

</style>