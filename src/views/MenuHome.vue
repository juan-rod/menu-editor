<template>
  <div class="menu-home menu">
    <nav-editor 
      @createNewItem="addMenuItem(menuItemsTemp)" 
      @addHeader="addHeader = $event"
      @printMenu="printMenu"
      />
    <div id="print-menu-container">
    <div class="menu-container" size="A4">
      <menu-header
        :addHeader="addHeader"
        :menuHeaderItems="menuHeaderItemsTemp"
        @addHeader="addHeader = $event"
        @addedMenuHeaderItems="addHeaderItems"
      />
      <div class="menu-body">
        <div class="menu-item-card" v-for="(item, index) in menuItems" :key="item.id">
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
    printMenu () {
      // Get HTML to print from element
      // this.$htmlToPaper('print-menu-container')
      const prtHtml = document.getElementById('print-menu-container').innerHTML;
        console.log('prtHtml', prtHtml)
      // Get all stylesheets HTML
      let stylesHtml = '';
      for (const node of [...document.querySelectorAll('link[rel="stylesheet"], style')]) {
        stylesHtml += node.outerHTML;
      }
      console.log('stylesHtml', stylesHtml)

      // Open the print window
      const WinPrint = window.open('', '', 'left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0');

      WinPrint.document.write(`<!DOCTYPE html>
      <html>
        <head>
          ${stylesHtml}
          <link rel="stylesheet" href="'../assets/print.css'" media="print">
          <style>
          
.menu-container {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  // font-family: 'artisan12'
}

.menu-container {
  background-color: #fff;
  border: 1px solid #dcdcdc;
  -webkit-box-shadow: 6px 8px 5px 0 rgba(121, 120, 120, .2);
  box-shadow: 6px 8px 5px 0 rgba(121, 120, 120, .2);
  padding: 20px
}

.menu-container[size=A4] {
  width: 21cm;
  height: 29.7cm
}

.menu-container .menu-header {
  width: 100%;
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column
}

.menu-container .menu-header-top-border {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  min-height: 50px;
  max-height: 50px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin: 0 0 16px 0
}

.menu-container .menu-header-top-border .dashes {
  font-size: 24px;
  color: #be1e2d
}

.menu-container .menu-header-top-border .middle-box {
  height: 100%;
  width: 100%;
  background: #eee;
  margin: 0 16px
}

.menu-container .menu-header-title {
  min-height: 105px;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
}

.menu-container .menu-header-title .title-left,
.menu-container .menu-header-title .title-right {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  height: 100%;
  color:blue;
}

.menu-container .menu-header-title .title-left p:first-of-type,
.menu-container .menu-header-title .title-right p:first-of-type {
  margin-bottom: 12px;
}

.menu-container .menu-header-title .title-right {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  border: 2px solid #000;
  width: 300px !important;
  font-size: 20px;
  color: #be1e2d;
  position: relative
}

.menu-container .menu-body {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  margin-top: 30px
}

.menu-container .menu-body .menu-item-card {
  border: 2px solid #000;
  min-height: 130px;
  background-color: #fff;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  margin-bottom: 30px
}

.menu-container .menu-body .menu-item-card .menu-item-wrapper {
  position: relative;
  -webkit-transition: all 225ms cubic-bezier(.4, .25, .3, 1);
  transition: all 225ms cubic-bezier(.4, .25, .3, 1)
}

.menu-container .menu-body .menu-item-card .menu-item-body,
.menu-container .menu-body .menu-item-card .menu-item-header {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start
}

.menu-container .menu-body .menu-item-card .menu-item-header .menu-item-title {
  font-size: 28px;
  -webkit-box-flex: 2;
  -ms-flex: 2;
  flex: 2;
  border-right: 2px solid #000
}

.menu-container .menu-body .menu-item-card .menu-item-header .menu-item-title input,
.menu-container .menu-body .menu-item-card .menu-item-header .menu-item-title p {
  padding: 10px 6px 4px;
  color: #181a1b
}

.menu-container .menu-body .menu-item-card .menu-item-header .menu-item-title input {
  background: rgba(56, 129, 151, .4);
  width: 100%
}

.menu-container .menu-body .menu-item-card .menu-item-header .menu-item-title--location input,
.menu-container .menu-body .menu-item-card .menu-item-header .menu-item-title--location p {
  border-top: 1px dotted #181a1b;
  font-size: 20px;
  color: #4c4e4d
}

.menu-container .menu-body .menu-item-card .menu-item-header .menu-item-details {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row
}

.menu-container .menu-body .menu-item-card .menu-item-header .menu-item-details div.block {
  padding: 6px 0;
  width: 76px;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center
}

.menu-container .menu-body .menu-item-card .menu-item-header .menu-item-details div.block span {
  font-size: 37px;
  margin: 4px 0
}

.menu-container .menu-body .menu-item-card .menu-item-header .menu-item-details--price input {
  font-size: 37px;
  width: 100%
}

.menu-container .menu-body .menu-item-card .menu-item-body {
  border-top: 1px solid #181a1b
}

.menu-container .menu-body .menu-item-card .menu-item-body--description {
  width: 100%
}

.menu-container .menu-body .menu-item-card .menu-item-body p,
.menu-container .menu-body .menu-item-card .menu-item-body textarea {
  font-size: 20px;
  padding: 10px 6px;
  color: #181a1b;
  width: 100%
}

.menu-container .menu-footer {
  border: 1px solid green;
  height: 100px
}
.nav-editor {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  min-height: 177px;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  position: fixed;
  top: 100px;
  left: 0;
  z-index: 3
}

.nav-editor,
.nav-editor i.nav-icon {
  -webkit-transition: all 225ms cubic-bezier(.4, .25, .3, 1);
  transition: all 225ms cubic-bezier(.4, .25, .3, 1)
}

.nav-editor i.nav-icon {
  font-size: 32px
}

.nav-editor .button-group {
  margin: 0 14px
}

.nav-editor .button {
  font-size: 1rem;
  color: #3275c3;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  background: #ebf4ff;
  line-height: 1;
  padding: .5em 1em;
  border: 1px solid rgba(50, 117, 195, .3);
  -webkit-box-shadow: 0 1px 2px 0 rgba(0, 0, 0, .2);
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, .2);
  border-radius: 5px;
  margin-bottom: 4px
}

.nav-editor .button:focus {
  outline: none
}

.nav-editor .button:hover {
  -webkit-box-shadow: 0 2px 5px 0 rgba(49, 49, 93, .1), 0 1px 2px 0 rgba(0, 0, 0, .08);
  box-shadow: 0 2px 5px 0 rgba(49, 49, 93, .1), 0 1px 2px 0 rgba(0, 0, 0, .08);
  -webkit-transform: translateY(-1px);
  transform: translateY(-1px);
  background-color: rgba(242, 81, 75, .5);
  -webkit-transition: all 225ms cubic-bezier(.4, .25, .3, 1);
  transition: all 225ms cubic-bezier(.4, .25, .3, 1);
  color: #dde1da;
  cursor: pointer
}

@font-face {
  font-family: Albertsthal-Typewriter;
  src: local("albertsthal-typewriter"), url(../fonts/albertsthal-typewriter.c3ae0181.woff) format("woff"), url(../fonts/albertsthal-typewriter.9d150fdd.ttf) format("truetype");
  font-style: normal;
  font-weight: 400
}

@font-face {
  font-family: artisan12;
  src: local("artisan12"), url(../fonts/artisan12.1bf842ba.woff) format("woff"), url(../fonts/artisan12.523f07a5.otf) format("otf");
  font-style: normal;
  font-weight: 400
}
          </style>
        </head>
        <body>
          ${prtHtml}
        </body>
      </html>`);

      WinPrint.document.close();
      WinPrint.focus();
      WinPrint.print();
      WinPrint.close();
    },
    async getData () {
      console.log("this.$store.dispatch('setMenu')", this.$store.dispatch('setMenu'))
      await this.$store.dispatch('setMenu')
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