<template>
  <div class="menu-home menu">
    <nav-editor />
    <div class="menu-container" size="A4">
      <div class="menu-header">
        <div class="menu-header-top-border">
          <div class="dashes">
            <span>\</span>
            <span>\</span>
            <span>\</span>
            <span>\</span>
            <span>\</span>
            <span>\</span>
            <span>\</span>
            <span>\</span>
            <span>\</span>
            <span>\</span>
          </div>
          <div class="middle-box"></div>
          <div class="dashes">
            <span>/</span>
            <span>/</span>
            <span>/</span>
            <span>/</span>
            <span>/</span>
            <span>/</span>
            <span>/</span>
            <span>/</span>
            <span>/</span>
            <span>/</span>
          </div>
        </div>
        <div class="menu-header-details"></div>
      </div>
      <div class="menu-body">
        <div class="menu-item-card" v-for="(item, index) in menuItemsTemp" :key="index">
          <menu-item :item='item' @addedMenuItems="addMenuItem" />
        </div>
      </div>
      <div class="menu-footer"></div>
    </div>
  </div>
</template>

<script>
import NavEditor from '@/components/NavEditor.vue'
import MenuItem from '@/components/MenuItem.vue'
import { menuCollection } from '../firebase'
import { mapState } from 'vuex'
export default {
  name: 'menuHome',
  components: { NavEditor, MenuItem },
  data () {
    return {
      newTitle: '',
      newTodo: '',
      currentlyEditing: null,
      todoEditTitle: '',
      todoEditText: '',
      dialog: false,
      dialogUpdate: false,
      menuItemsTemp: [
        {
          title: 'RIPE MANGO SALAD',
          location: "BANKOK, THAILAND| 14°5'N 90°5667'W",
          details: {
            price: 13,
            from: 'from a cone',
            with: 'with your hands',
            on: 'on a stick'
          },
          description: 'poached shrimp, shredded coconut, bean sprouts, carrot, red onion, scallion, peanuts, cilantro, basil'
        }
      ]
    }
  },
  mounted () {
    this.getData()
    console.log('this.getData()', this.getData())
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
    getData () {
      this.$store.dispatch('setMenu')
    },
    async addMenuItem (data) {
      console.log('addMenuItem data', data)
      // await menuCollection.add({
      //   title: this.newTitle,
      //   text: this.newTodo,
      //   createdAt: new Date()
      // })
        // this.getData()
        // this.newTitle = '',
        // this.newTodo = ''
    },
    async deleteTodo (id) {
      await menuCollection.doc(id).delete()
        this.getData()
    },
    editTodo (todo) {
      this.dialogUpdate = true
      this.currentlyEditing = todo.id
      this.todoEditText = todo.text
      this.todoEditTitle = todo.title
    },
    async updateTodoText () {
      await menuCollection.doc(this.currentlyEditing).update({
        text: this.todoEditText,
        title: this.todoEditTitle
      })
      this.getData()
      this.currentlyEditing = null;
      this.todoEditText = '';
      this.todoEditTitle = '';
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