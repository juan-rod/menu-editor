<template>
  <div id="nodeToRenderAsPDF" class="menu-home menu">
    <nav-editor 
      @createNewItem="addMenuItem(menuItemsTemp)" 
      @addHeader="addHeader = $event"
      @printMenu="printMenu"
      />
    <div>
    <div id="print-menu-container" class="menu-container" size="A4">
      <menu-header
        :addHeader="addHeader"
        :menuHeaderItems="menuHeaderItemsTemp"
        @addHeader="addHeader = $event"
        @addedMenuHeaderItems="addHeaderItems"
      />
      <div class="menu-body">
        <div class="menu-item-card" v-for="(item) in menuItems" :key="item.id">
          <menu-item 
            :item='item'
            @addedMenuItems="updateMenuItem"
            @removeItem="deleteMenuItem($event)" />
        </div>
      </div>
      <div class="menu-footer"></div>
    </div>
    </div>
  </div>
</template>

<script>
import NavEditor from '@/components/NavEditor.vue'
import MenuItem from '@/components/MenuItem/MenuItem.vue'
import MenuHeader from '@/components/MenuHeader/MenuHeader.vue'
import { menuCollection } from '../firebase'
import { mapState } from 'vuex'
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'
// import print from '../assets/print.css'
export default {
  name: 'menuHome',
  components: { NavEditor, MenuItem, MenuHeader },
  data () {
    return {
      addHeader: true,
      menuItemsTemp: {
        title: 'RIPE MANGO SALAD',
        location: "BANKOK, THAILAND| 14°5'N 90°5667'W",
        price: 13,
        description: 'poached shrimp, shredded coconut, bean sprouts, carrot, red onion, scallion, peanuts, cilantro, basil'
      },
      menuHeaderItemsTemp: {
        leftTitle: 'Provisions',
        leftSubTitle: "Summer '15",
        rightTitle: 'Some Special Info',
        rightSubTitle: "special details go here"
      }
    }
  },
  watch: {
    addHeader (newVal) {
      console.log('addHeader newVal', newVal)
    }
  },
  mounted () {
    this.getData()
  },
  directives: {
    focus: {
      // directive definition
      inserted: function (el) {
        el.focus()
      }
    }
  },
  methods: {
    printMenu (quality = 1) {
      const filename  = 'dinner_menu.pdf';

      html2canvas(document.querySelector('#print-menu-container')).then(canvas => {
        console.log('canvas', canvas)
        console.log('canvas.toDataURL("image/png")', canvas.toDataURL('image/png'))
        let pdf = new jsPDF('p', 'mm', 'a4');
        console.log('pdf', pdf)
        pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 211, 298);
        pdf.save(filename);
      });
    },
    async addMenuItem (data) {
      console.log('addMenuItem data', data)
      await menuCollection.add({
        ...data,
        createdAt: new Date()
      })
      this.getData()
    },
    async addHeaderItems (data) {
      this.menuHeaderItemsTemp = {...data}
      console.log('addHeaderItems data', data)
    },
    async deleteMenuItem (id) {
      console.log('deleteMenuItem id', id)
      await menuCollection.doc(id).delete()
      console.log('menuCollection', menuCollection)
      await this.getData()
    },
    async updateMenuItem (data) {
      await menuCollection.doc(data.id).update({
        ...data
      })
      this.getData()
    }
  },
  computed: mapState([
    'menuItems'
  ])
}
</script>

<style scoped>
/* .menu {
  border: 1px solid red;
  height: 100%;
  width: 100%;
}
.menu-home {
  padding: 10em 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.menu-container {
  background-color: #eee;
  display: flex;
  flex-direction: column;
  border: 1px solid rgb(220, 220, 220);
  box-shadow: 6px 8px 5px 0px rgba(121, 120, 120, 0.2);
  padding: 20px;
}
.menu-container[size="A4"] {  
  width: 21cm;
  height: 29.7cm; 
}
.menu-header {
  border: 1px solid red;
  height: 160px;
  width: 100%;
  display: flex;
  flex-direction: column;
}
.menu-header-top-border {}
.menu-body {
  flex: 1;
}
.menu-item-card {
  border: 2px solid black;
  padding: 6px;
  min-height: 130px;
  display: flex;
  flex-direction: column;
}
.menu-item-card .menu-item-header, .menu-item-body {
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
}
.menu-item-card .menu-item-header .menu-item-title {
  font-size: 1.5em;
}
.menu-item-card .menu-item-header .menu-item-title p:nth-of-type(2) {
  border-top: 1px dotted black;
}
.menu-footer {
  border: 1px solid green;
  height: 100px;
} */
</style>