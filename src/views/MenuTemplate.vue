<template>
  <div class="menu-template-container" :id="menuType">
    <!-- <button @click="initalMenus">initalMenus</button> -->
    <div :class="{'hide-print': scaleForPrint}"></div>
    <div id="nodeToRenderAsPDF" class="menu-template" :class="{ 'scaleForPrint':  scaleForPrint}" size="A4">
      <!-- <img class="test-menu" src="../assets/images/bootys-brunch-menu-cocktails.png" alt=""> -->
      <menu-header :headerTitle="headerTitle"></menu-header>
      <menu-body
        :menuItems="orderedMenuItems">
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
import { menuCollection, menusCollection } from '@/firebase'
import { mapState, mapGetters } from 'vuex'
import { Action } from '@/store/menu/types'
import { printMenu as print } from '@/utils/print'
// import brunch from '@/data/brunch.json'
// import cocktails from '@/data/cocktails.json'
// import dinner from '@/data/dinner.json'
// import happy_hour from '@/data/happy_hour.json'
// import hotstuff from '@/data/hotstuff.json'
// import kiss from '@/data/kiss.json'
export default {
  name: 'MenuTemplate',
  components: { MenuBody, MenuHeader, MenuFooter ,MenuEditor },
  props: ['printMe'],
  data () {
    return {
      menu_type: null,
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
  watch: {
    printMe (newVal) {
      console.log('printMe newVal', newVal)
      this.printMenu()
    }
  },
  methods: {
    // async updateMenus () {
    //   console.log('this.currentMenuItems', this.currentMenuItems)
    //   console.log('this.currentMenu', this.currentMenu)
    // },
    // async initalMenus () {
    //   let user = await this.$store.getters.user
    //   let menus = [ kiss , brunch, cocktails, dinner, happy_hour, hotstuff ]
    //   console.log('menus', menus)
     
    //   menus.forEach(element => {
    //     console.log('element', element)
    //     const menu = {
    //       menu_items: element.items,
    //       createdBy: user.userId,
    //       createdDate: new Date(),
    //       menu_type: element.menu_type,
    //       updatedDate: new Date()
    //     }
    //     this.$store.dispatch('setNewMenu', menu)
    //   })
    //   console.log('user', user)
    // },
    async getData () {
      await this.$store.dispatch(`menu/${Action.GET_MENU_TEMPLATE}`, this.menuType)
    },
    printMenu () {
      this.scaleForPrint = true
      print()
    }
  },
  computed: {
    headerTitle () {
      return this.menuType
    },
    orderedMenuItems () {
      let orderedMenuItems = this.menuItems.sort((a,b)=> a.order - b.order)
      return orderedMenuItems
    },
    ...mapGetters('menu',['menuType']),
    ...mapState('menu',[
      'newMenu',
      'menuItems'
    ])
  }
}
</script>

<style>

</style>